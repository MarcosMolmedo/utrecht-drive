
import Image from "next/image";
import {ArrowUpRight} from "lucide-react";
import {useTranslations} from "next-intl";

import {Link} from "@/i18n/navigation";
import styles from "./Lessons.module.css";

const lessons = [
  {
    key: "driving",
    image: "/images/home/lessons/driving-lessons.png",
    href: "/#contact"
  },
  {
    key: "english",
    image: "/images/home/lessons/english-lessons.png",
    href: "/#contact"
  },
  {
    key: "guidance",
    image: "/images/home/lessons/extra-guidance.png",
    href: "/#contact"
  }
] as const;

export default function Lessons() {
  const t = useTranslations("Lessons");

  return (
    <section className={styles.lessons} id="lessons">
      <div className={styles.lessons__container}>
        <header className={styles.lessons__heading}>
          <span className={styles.lessons__eyebrow}>
            {t("eyebrow")}
          </span>

          <h2 className={styles.lessons__title}>
            {t("title")}
          </h2>

          <p className={styles.lessons__description}>
            {t("description")}
          </p>
        </header>

        <div
          className={styles.lessons__grid}
          aria-label={t("title")}
        >
          {lessons.map((lesson) => (
            <Link
              key={lesson.key}
              href={lesson.href}
              className={styles.lessons__card}
            >
              <div className={styles.lessons__imageWrapper}>
                <Image
                  src={lesson.image}
                  alt={t(`items.${lesson.key}.alt`)}
                  fill
                  sizes="(max-width: 767px) 85vw, (max-width: 1100px) 33vw, 360px"
                  className={styles.lessons__image}
                />
              </div>

              <div className={styles.lessons__content}>
                <div className={styles.lessons__copy}>
                  <h3 className={styles.lessons__cardTitle}>
                    {t(`items.${lesson.key}.title`)}
                  </h3>

                  <p className={styles.lessons__cardDescription}>
                    {t(`items.${lesson.key}.description`)}
                  </p>
                </div>

                <span
                  className={styles.lessons__arrow}
                  aria-hidden="true"
                >
                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.8}
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className={styles.lessons__swipeHint}>
          {t("swipeHint")}
        </p>
      </div>
    </section>
  );
}
