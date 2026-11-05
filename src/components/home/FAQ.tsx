
import {Plus} from "lucide-react";
import {useTranslations} from "next-intl";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const t = useTranslations("FAQ");

  const questions = [
    "experience",
    "english",
    "duration",
    "package",
    "exam",
    "anxiety"
  ] as const;

  return (
    <section
      id="faq"
      className={styles.faq}
      aria-labelledby="faq-title"
    >
      <div className={styles.faq__container}>
        <div className={styles.faq__intro}>
          <span className={styles.faq__eyebrow}>
            {t("eyebrow")}
          </span>

          <h2
            id="faq-title"
            className={styles.faq__title}
          >
            {t("title")}
          </h2>

          <p className={styles.faq__description}>
            {t("description")}
          </p>
        </div>

        <div className={styles.faq__list}>
          {questions.map((question) => (
            <details
              key={question}
              className={styles.faq__item}
            >
              <summary className={styles.faq__question}>
                <span>
                  {t(`items.${question}.question`)}
                </span>

                <Plus
                  size={22}
                  aria-hidden="true"
                />
              </summary>

              <div className={styles.faq__answer}>
                <p>
                  {t(`items.${question}.answer`)}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
