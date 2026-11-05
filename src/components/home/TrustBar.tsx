
import {
  Languages,
  Award,
  UserRoundCheck,
  HeartHandshake,
} from "lucide-react";
import {getTranslations} from "next-intl/server";
import styles from "./TrustBar.module.css";

export default async function TrustBar() {
  const t = await getTranslations("TrustBar");

  const benefits = [
    {
      icon: Languages,
      title: t("english"),
    },
    {
      icon: Award,
      title: t("experience"),
    },
    {
      icon: UserRoundCheck,
      title: t("personal"),
    },
    {
      icon: HeartHandshake,
      title: t("confidence"),
    },
  ];

  return (
    <section
      className={styles.trustBar}
      aria-label={t("ariaLabel")}
    >
      <div className={styles.trustBar__container}>
        {benefits.map(({icon: Icon, title}) => (
          <div className={styles.trustBar__item} key={title}>
            <Icon
              className={styles.trustBar__icon}
              aria-hidden="true"
              strokeWidth={1.8}
            />

            <span className={styles.trustBar__text}>
              {title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
