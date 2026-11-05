
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, Check, Info } from "lucide-react";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const t = useTranslations("Pricing");
  const locale = useLocale();

  const cards = [
    {
      key: "single",
      price: "€85",
      featured: false,
    },
    {
      key: "package",
      price: "€1.150",
      featured: true,
    },
    {
      key: "exam",
      price: "€355",
      featured: false,
    },
  ] as const;

  const exams = [
    { key: "regular", price: "€355" },
    { key: "anxiety", price: "€399" },
    { key: "intermediate", price: "€325" },
  ] as const;

  return (
    <main className={styles.pricing}>
      <div className={styles.pricing__container}>
        <header className={styles.pricing__header}>
          <span className={styles.pricing__eyebrow}>
            {t("eyebrow")}
          </span>

          <h1 className={styles.pricing__title}>
            {t("title")}
          </h1>

          <p className={styles.pricing__description}>
            {t("description")}
          </p>
        </header>

        <div className={styles.pricing__grid}>
          {cards.map((card) => (
            <article
              key={card.key}
              className={[
                styles.pricing__card,
                card.featured
                  ? styles["pricing__card--featured"]
                  : "",
              ].join(" ")}
            >
              {card.featured && (
                <span className={styles.pricing__badge}>
                  {t("popular")}
                </span>
              )}

              <h2 className={styles.pricing__cardTitle}>
                {t(`cards.${card.key}.title`)}
              </h2>

              <div className={styles.pricing__price}>
                {card.price}
              </div>

              <p className={styles.pricing__unit}>
                {t(`cards.${card.key}.unit`)}
              </p>

              <p className={styles.pricing__cardDescription}>
                {t(`cards.${card.key}.description`)}
              </p>

              <div className={styles.pricing__cardDivider} />

              <p className={styles.pricing__cardDetail}>
                <Check size={19} aria-hidden="true" />
                {t(`cards.${card.key}.detail`)}
              </p>
            </article>
          ))}
        </div>

        <section
          className={styles.pricing__details}
          aria-labelledby="pricing-details-title"
        >
          <div className={styles.pricing__detailsHeader}>
            <span className={styles.pricing__eyebrow}>
              {t("details.eyebrow")}
            </span>

            <h2
              id="pricing-details-title"
              className={styles.pricing__sectionTitle}
            >
              {t("details.title")}
            </h2>

            <p className={styles.pricing__detailsDescription}>
              {t("details.description")}
            </p>
          </div>

          <div className={styles.pricing__examList}>
            {exams.map((exam) => (
              <div
                key={exam.key}
                className={styles.pricing__examRow}
              >
                <span>{t(`exams.${exam.key}`)}</span>
                <strong>{exam.price}</strong>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.pricing__notes}>
          <Info size={21} aria-hidden="true" />

          <div>
            <p>{t("notes.package")}</p>
            <p>{t("notes.vat")}</p>
            <p>{t("notes.fuel")}</p>
            <p>{t("notes.confirmation")}</p>
          </div>
        </div>

        <section className={styles.pricing__cta}>
          <div>
            <h2>{t("cta.title")}</h2>
            <p>{t("cta.description")}</p>
          </div>

          <Link
            href={`/${locale}#contact`}
            className={styles.pricing__ctaLink}
          >
            {t("cta.button")}
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </main>
  );
}
