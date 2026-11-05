
import {ArrowUpRight} from "lucide-react";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
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

        <Link
          href="/#contact"
          className={styles.cta__button}
        >
          {t("button")}
          <ArrowUpRight
            size={20}
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
