import { useState } from "react";
import styles from "./ContactSection.module.css";

const ContactSection = () => {

    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        message: '',
    })

    function update(field: keyof typeof form, value: string) {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    return (
        <section id="contact" className={styles.contact}>
            <h2 className={styles.heading}>
                Contact
            </h2>

            <form className={styles.form}>
                <div className={styles.row}>
                    <div className={styles.field}>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input 
                            id="name" 
                            value={form.name}
                            onChange={(e) => update('name', e.target.value)}
                        />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="surname">
                            Surname
                        </label>
                        <input
                            id="surname" 
                            value={form.surname}
                            onChange={(e) => update('surname', e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.field}>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input 
                        id="email" 
                        type="email" 
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea 
                        id="message" 
                        rows={5} 
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                    />
                </div>

                <button type="submit" className={styles.submit}>
                    Send
                </button>
            </form>
        </section>
    )
}

export default ContactSection;