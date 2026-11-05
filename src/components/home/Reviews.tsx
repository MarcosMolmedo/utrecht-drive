
import {Star} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";
import styles from "./Reviews.module.css";

export default function Reviews() {
  const t = useTranslations("Reviews");
  const locale = useLocale();

  const reviews = ["first", "second", "third"] as const;

  const starsLabel =
    locale === "nl" ? "5 sterren" : "5 stars";

  return (
    <section
      id="reviews"
      className={styles.reviews}
      aria-labelledby="reviews-title"
    >
      <div className={styles.reviews__container}>
        <header className={styles.reviews__header}>
          <span className={styles.reviews__eyebrow}>
            {t("eyebrow")}
          </span>

          <h2
            id="reviews-title"
            className={styles.reviews__title}
          >
            {t("title")}
          </h2>

          <p className={styles.reviews__description}>
            {t("description")}
          </p>
        </header>

        <div className={styles.reviews__grid}>
          {reviews.map((review) => (
            <article
              key={review}
              className={styles.reviews__card}
            >
              <div
                className={styles.reviews__stars}
                role="img"
                aria-label={starsLabel}
              >
                {Array.from({length: 5}).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className={styles.reviews__quote}>
                “{t(`items.${review}.quote`)}”
              </blockquote>

              <div className={styles.reviews__author}>
                <span className={styles.reviews__avatar}>
                  {t(`items.${review}.initial`)}
                </span>

                <div>
                  <strong>
                    {t(`items.${review}.name`)}
                  </strong>

                  <span>
                    {t(`items.${review}.detail`)}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.reviews__demo}>
          {t("demo")}
        </p>
      </div>
    </section>
  );
}
