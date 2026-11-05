
import Image from "next/image";
import {
  ArrowUpRight,
  PlayCircle,
  Globe2,
  UserRound,
  ShieldCheck
} from "lucide-react";
import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import styles from "./Hero.module.css";

export default async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section
      className={styles.hero}
      aria-labelledby="hero-title"
    >
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <div className={styles.hero__eyebrow}>
            <span
              className={styles["hero__eyebrow-line"]}
              aria-hidden="true"
            />
            {t("eyebrow")}
          </div>

          <h1 id="hero-title" className={styles.hero__title}>
            {t("titleBefore")}{" "}
            <span className={styles.hero__highlight}>
              {t("highlight")}
            </span>{" "}
            {t("titleAfter")}
          </h1>

          <p className={styles.hero__description}>
            {t("description")}
          </p>

          <div className={styles.hero__benefits}>
            <div className={styles.hero__benefit}>
              <Globe2 aria-hidden="true" />
              <span>{t("benefitOne")}</span>
            </div>

            <div className={styles.hero__benefit}>
              <UserRound aria-hidden="true" />
              <span>{t("benefitTwo")}</span>
            </div>

            <div className={styles.hero__benefit}>
              <ShieldCheck aria-hidden="true" />
              <span>{t("benefitThree")}</span>
            </div>
          </div>

          <div className={styles.hero__actions}>
            <Link
              href="/#contact"
              className={styles.hero__button}
            >
              {t("primaryCta")}
              <ArrowUpRight
                size={20}
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/#lessons"
              className={styles["hero__button--secondary"]}
            >
              <PlayCircle
                size={21}
                aria-hidden="true"
              />
              {t("secondaryCta")}
            </Link>
          </div>
        </div>

        <div className={styles.hero__visual}>
          <Image
            src="/images/home/utrecht-background.png"
            alt={t("imageAlt")}
            fill
            priority
            sizes="(max-width: 1199px) 100vw, 55vw"
            className={styles.hero__background}
          />

          <div
            className={styles.hero__car}
            aria-hidden="true"
          >
            <Image
              src="/images/home/renault-megane.png"
              alt=""
              fill
              priority
              sizes="(max-width: 1199px) 90vw, 48vw"
              className={styles["hero__car-image"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
