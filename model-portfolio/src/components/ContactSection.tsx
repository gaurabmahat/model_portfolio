import { useState } from "react";
import type React from "react";
import styles from "./ContactSection.module.css";

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

    function update(field: keyof typeof form, value: string) {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    function validation() {
        const next: Record<string, string> = {}

        if (!form.name.trim()) next.name = 'Required';
        if (!form.surname.trim()) next.surname = 'Required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email';
        if (form.message.trim().length < 2) next.message = 'Message is too short';

        setErrors(next);
        return Object.keys(next).length === 0;
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(!validation()) return;

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
                Contact
            </h2>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.row}>
                    <div className={styles.field}>
                        <label htmlFor="name">
                            Name <span className={styles.required} aria-label="required">*</span>
                        </label>
                        <input 
                            id="name" 
                            value={form.name}
                            onChange={(e) => update('name', e.target.value)}
                        />
                        {errors.name && <span className={styles.error}>{errors.name}</span>}
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="surname">
                            Surname <span className={styles.required} aria-label="required">*</span>
                        </label>
                        <input
                            id="surname" 
                            value={form.surname}
                            onChange={(e) => update('surname', e.target.value)}
                        />
                        {errors.surname && <span className={styles.error}>{errors.surname}</span>}
                    </div>
                </div>

                <div className={styles.field}>
                    <label htmlFor="email">
                        Email <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <input 
                        id="email" 
                        type="email" 
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>

                <div className={styles.field}>
                    <label htmlFor="message">
                        Message <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <textarea 
                        id="message" 
                        rows={5} 
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                    />
                    {errors.message && <span className={styles.error}>{errors.message}</span>}
                </div>

                <button type="submit" className={styles.submit} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send'}
                </button>
            </form>
        </section>
    )
}

export default ContactSection;