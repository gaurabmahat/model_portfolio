import { useState } from "react";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
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
                        <input id="name" />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="surname">
                            Surname
                        </label>
                        <input id="surname" />
                    </div>
                </div>

                <div className={styles.field}>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input id="email" type="email" />
                </div>

                <div className={styles.field}>
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea id="message" rows={5} />
                </div>

                <button type="submit" className={styles.submit}>
                    Send
                </button>
            </form>
        </section>
    )
}

export default ContactSection;