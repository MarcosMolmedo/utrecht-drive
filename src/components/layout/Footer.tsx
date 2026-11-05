
import {CarFront, ArrowUpRight} from "lucide-react";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("Footer");

  const links = [
    {href: "/", label: t("home")},
    {href: "/#lessons", label: t("lessons")},
    {href: "/pricing", label: t("pricing")},
    {href: "/#instructor", label: t("about")},
    {href: "/#reviews", label: t("reviews")},
    {href: "/#faq", label: t("faq")},
    {href: "/#contact", label: t("contact")}
  ] as const;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__main}>
          <div className={styles.footer__brandColumn}>
            <Link href="/" className={styles.footer__brand}>
              <CarFront size={32} strokeWidth={1.8} />
              <span>UTRECHT DRIVE</span>
            </Link>

            <p>{t("description")}</p>

            <span className={styles.footer__location}>
              Utrecht, Nederland
            </span>
          </div>

          <nav
            className={styles.footer__nav}
            aria-label={t("navigation")}
          >
            <h3>{t("navigation")}</h3>

            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.footer__contact}>
            <h3>{t("contactTitle")}</h3>

            <p>{t("contactDescription")}</p>

            <Link
              href="/#contact"
              className={styles.footer__contactLink}
            >
              {t("contactButton")}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <span>
            © {new Date().getFullYear()} Utrecht Drive
          </span>

          <span>{t("demo")}</span>

          <span className={styles.footer__credit}>
            Designed &amp; Developed by:{" "}
            <a
              href="https://www.linkedin.com/in/marcos-manuel-olmedo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marcos M. Olmedo
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
