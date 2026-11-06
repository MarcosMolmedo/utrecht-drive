
import Image from "next/image";
import {
  Award,
  HeartHandshake,
  Languages
} from "lucide-react";
import {getTranslations} from "next-intl/server";
import styles from "./Instructor.module.css";

export default async function Instructor() {
  const t = await getTranslations("Instructor");

  const benefits = [
    {
      key: "experience",
      icon: Award,
      text: t("experience")
    },
    {
      key: "international",
      icon: Languages,
      text: t("international")
    },
    {
      key: "approach",
      icon: HeartHandshake,
      text: t("approach")
    }
  ];

  return (
    <section
      id="instructor"
      className={styles.instructor}
      aria-labelledby="instructor-title"
    >
      <div className={styles.instructor__container}>
        {/* Instructor image */}
        <div className={styles.instructor__visual}>
          <div className={styles.instructor__placeholder}>
            <Image
              src="/images/home/instructor-utrecht-drive.png"
              alt={t("photoAlt")}
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
              className={styles.instructor__image}
            />
          </div>

          {/* Experience badge */}
          <div className={styles.instructor__badge}>
            <Award size={26} aria-hidden="true" />

            <div
              className={styles["instructor__badge-content"]}
            >
              <strong>{t("badgeNumber")}</strong>
              <span>{t("badgeText")}</span>
            </div>
          </div>
        </div>

        {/* Instructor content */}
        <div className={styles.instructor__content}>
          <div className={styles.instructor__eyebrow}>
            <span
              className={styles["instructor__eyebrow-line"]}
              aria-hidden="true"
            />
            {t("eyebrow")}
          </div>

          <h2
            id="instructor-title"
            className={styles.instructor__title}
          >
            {t("title")}
          </h2>

          <p className={styles.instructor__lead}>
            {t("lead")}
          </p>

          <p className={styles.instructor__description}>
            {t("description")}
          </p>

          <div className={styles.instructor__benefits}>
            {benefits.map(({key, icon: Icon, text}) => (
              <div
                className={styles.instructor__benefit}
                key={key}
              >
                <div
                  className={
                    styles["instructor__benefit-icon"]
                  }
                >
                  <Icon
                    size={20}
                    aria-hidden="true"
                  />
                </div>

                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
