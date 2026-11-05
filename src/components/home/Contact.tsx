
"use client";

import {Mail, MessageCircle, ArrowUpRight} from "lucide-react";
import {useTranslations} from "next-intl";
import styles from "./Contact.module.css";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-title"
    >
      <div className={styles.contact__container}>
        <div className={styles.contact__intro}>
          <span className={styles.contact__eyebrow}>
            {t("eyebrow")}
          </span>

          <h2
            id="contact-title"
            className={styles.contact__title}
          >
            {t("title")}
          </h2>

          <p className={styles.contact__description}>
            {t("description")}
          </p>

          <div className={styles.contact__whatsapp}>
            <MessageCircle
              size={25}
              aria-hidden="true"
            />

            <div>
              <strong>{t("whatsappTitle")}</strong>

              <p>{t("whatsappDescription")}</p>

              <span>{t("whatsappPending")}</span>
            </div>
          </div>
        </div>

        <div className={styles.contact__formCard}>
          <div className={styles.contact__formHeading}>
            <Mail
              size={24}
              aria-hidden="true"
            />

            <h3>{t("formTitle")}</h3>
          </div>

             <p
             id="contact-demo-notice"
             className={styles.contact__demo}
             >
            {t("demoNotice")}
             </p>

          <form
            className={styles.contact__form}
            onSubmit={(event) => event.preventDefault()}
          >
            <div className={styles.contact__field}>
              <label htmlFor="contact-name">
                {t("name")}
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                minLength={2}
                maxLength={100}
                placeholder={t("namePlaceholder")}
                required
              />
            </div>

            <div className={styles.contact__field}>
              <label htmlFor="contact-email">
                {t("email")}
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                placeholder={t("emailPlaceholder")}
                required
              />
            </div>

            <div className={styles.contact__field}>
              <label htmlFor="contact-message">
                {t("message")}
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                minLength={10}
                maxLength={2000}
                placeholder={t("messagePlaceholder")}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.contact__submit}
              disabled
              aria-describedby="contact-demo-notice"
            >
              {t("submit")}
              <ArrowUpRight
                size={20}
                aria-hidden="true"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
