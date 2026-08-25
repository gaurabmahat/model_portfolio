import { useState } from "react";
import type React from "react";
import styles from "./ContactSection.module.css";
import { useTranslation } from "react-i18next";

type Status = 'idle' | 'sending' | 'sent' | 'error';
const web3formsAccessCode = "2a4ba48d-71a0-49ce-aeaf-2a2461b270f2"

const ContactSection = () => {

    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<Status>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const { t } = useTranslation();

    function update(field: keyof typeof form, value: string) {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    function validation() {
        const next: Record<string, string> = {}

        if (!form.name.trim()) next.name = t("contact.formValidation.required");
        if (!form.surname.trim()) next.surname = t("contact.formValidation.required");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t("contact.formValidation.validEmail");
        if (form.message.trim().length < 2) next.message = t("contact.formValidation.messageShort");

        setErrors(next);
        return Object.keys(next).length === 0;
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(!validation()) return;

        const honeypot = (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement)?.value;
        if(honeypot) return; //bot security

        setStatus('sending');

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: web3formsAccessCode,
                    name: `${form.name} ${form.surname}`,
                    email: form.email,
                    message: form.message,
                    subject: 'Model contact form submission',
                }),
            });

            const data = await res.json();

            if(data.success) {
                setStatus('sent');
                setForm({ name: '', surname: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.log("Error: ", error)
            setStatus('error')
        }
    }

    return (
        <section id="contact" className={styles.contact}>
            <h2 className={styles.heading}>
                {t("contact.sectionTitle")}
            </h2>

            {status === "sent" ? (
                <p className={styles.success}>{t("contact.messageSendSuccess")}</p>
            ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    <input 
                        type="text"
                        name="botcheck"
                        className={styles.honeypot}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                    />
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label htmlFor="name">
                                {t("contact.form.name")} <span className={styles.required} aria-label="required">*</span>
                            </label>
                            <input 
                                id="name"
                                maxLength={80} 
                                value={form.name}
                                onChange={(e) => update('name', e.target.value)}
                            />
                            {errors.name && <span className={styles.error}>{errors.name}</span>}
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="surname">
                                {t("contact.form.surname")} <span className={styles.required} aria-label="required">*</span>
                            </label>
                            <input
                                id="surname"
                                maxLength={80} 
                                value={form.surname}
                                onChange={(e) => update('surname', e.target.value)}
                            />
                            {errors.surname && <span className={styles.error}>{errors.surname}</span>}
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="email">
                            {t("contact.form.email")} <span className={styles.required} aria-label="required">*</span>
                        </label>
                        <input 
                            id="email" 
                            type="email"
                            maxLength={200} 
                            value={form.email}
                            onChange={(e) => update('email', e.target.value)}
                        />
                        {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="message">
                            {t("contact.form.message")} <span className={styles.required} aria-label="required">*</span>
                        </label>
                        <textarea 
                            id="message"
                            maxLength={2000}
                            rows={5} 
                            value={form.message}
                            onChange={(e) => update('message', e.target.value)}
                        />
                        {errors.message && <span className={styles.error}>{errors.message}</span>}
                    </div>

                    <div className={styles.statusMessage} aria-live="polite">
                        {status === "error" && (
                            <p className={styles.error}>
                                {t("contact.messageSendError")}
                            </p>
                        )}
                    </div>

                    <button type="submit" className={styles.submit} disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : 'Send'}
                    </button>
                </form>
            )}
        </section>
    )
}

export default ContactSection;