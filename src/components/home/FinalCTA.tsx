
import {useTranslations} from "next-intl";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  const t = useTranslations("FinalCTA");

  return (
    <section
      className={styles.cta}
      aria-labelledby="final-cta-title"
    >
      <div className={styles.cta__container}>
        <div className={styles.cta__content}>
          <h2 id="final-cta-title">
            {t("title")}
          </h2>

          <p>
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}
