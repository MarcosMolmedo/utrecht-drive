
import {
  HeartHandshake,
  Smile,
  Target
} from "lucide-react";
import {getTranslations} from "next-intl/server";
import styles from "./Mission.module.css";

export default async function Mission() {
  const t = await getTranslations("Mission");

  const values = [
    {
      key: "respect",
      icon: HeartHandshake,
      title: t("respectTitle"),
      description: t("respectDescription")
    },
    {
      key: "enjoyment",
      icon: Smile,
      title: t("enjoymentTitle"),
      description: t("enjoymentDescription")
    },
    {
      key: "efficiency",
      icon: Target,
      title: t("efficiencyTitle"),
      description: t("efficiencyDescription")
    }
  ];

  return (
    <section
      id="mission"
      className={styles.mission}
      aria-labelledby="mission-title"
    >
      <div className={styles.mission__container}>
        <div className={styles.mission__header}>
          <div className={styles.mission__eyebrow}>
            <span
              className={styles["mission__eyebrow-line"]}
              aria-hidden="true"
            />
            {t("eyebrow")}
          </div>

          <h2
            id="mission-title"
            className={styles.mission__title}
          >
            {t("title")}
          </h2>

          <p className={styles.mission__description}>
            {t("description")}
          </p>
        </div>

        <div className={styles.mission__values}>
          {values.map(({key, icon: Icon, title, description}) => (
            <article
              key={key}
              className={styles.mission__card}
            >
              <div className={styles["mission__card-icon"]}>
                <Icon
                  size={30}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <h3 className={styles["mission__card-title"]}>
                {title}
              </h3>

              <p className={styles["mission__card-description"]}>
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className={styles.mission__footer}>
          <p className={styles.mission__statement}>
            {t("statement")}
          </p>
        </div>
      </div>
    </section>
  );
}
