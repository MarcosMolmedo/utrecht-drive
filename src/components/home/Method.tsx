
import {
  ArrowUpRight,
  CarFront,
  Eye,
  Route
} from "lucide-react";
import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import styles from "./Method.module.css";

export default async function Method() {
  const t = await getTranslations("Method");

  const steps = [
    {
      number: "01",
      icon: CarFront,
      title: t("stepOneTitle"),
      description: t("stepOneDescription")
    },
    {
      number: "02",
      icon: Eye,
      title: t("stepTwoTitle"),
      description: t("stepTwoDescription")
    },
    {
      number: "03",
      icon: Route,
      title: t("stepThreeTitle"),
      description: t("stepThreeDescription")
    }
  ];

  return (
    <section
      id="method"
      className={styles.method}
      aria-labelledby="method-title"
    >
      <div className={styles.method__container}>
        <div className={styles.method__header}>
          <div className={styles.method__eyebrow}>
            <span
              className={styles["method__eyebrow-line"]}
              aria-hidden="true"
            />
            {t("eyebrow")}
          </div>

          <h2
            id="method-title"
            className={styles.method__title}
          >
            {t("title")}
          </h2>

          <p className={styles.method__description}>
            {t("description")}
          </p>
        </div>

        <div className={styles.method__steps}>
          {steps.map(
            ({number, icon: Icon, title, description}) => (
              <article
                key={number}
                className={styles.method__step}
              >
                <div className={styles["method__step-top"]}>
                  <span
                    className={styles["method__step-number"]}
                  >
                    {number}
                  </span>

                  <Icon
                    className={styles["method__step-icon"]}
                    size={30}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div
                  className={styles["method__step-line"]}
                  aria-hidden="true"
                />

                <h3
                  className={styles["method__step-title"]}
                >
                  {title}
                </h3>

                <p
                  className={styles["method__step-description"]}
                >
                  {description}
                </p>
              </article>
            )
          )}
        </div>

        <div className={styles.method__footer}>
          <p className={styles.method__statement}>
            {t("statement")}
          </p>

          <Link
            href="/#contact"
            className={styles.method__link}
          >
            {t("cta")}
            <ArrowUpRight
              size={19}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
