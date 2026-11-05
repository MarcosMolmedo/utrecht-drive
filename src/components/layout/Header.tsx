
"use client";

import {useEffect, useState} from "react";
import {ArrowUpRight, CarFront, Menu, X} from "lucide-react";
import {useLocale, useTranslations} from "next-intl";
import {Link, usePathname} from "@/i18n/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const links = [
    {href: "/#lessons", label: t("lessons")},
    {href: "/pricing", label: t("pricing")},
    {href: "/#instructor", label: t("about")},
    {href: "/#reviews", label: t("reviews")},
    {href: "/#faq", label: t("faq")}
  ] as const;

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={styles["header"]}>
      <div className={styles["header__container"]}>
        <Link
          href="/"
          className={styles["header__brand"]}
          aria-label="Utrecht Drive — Home"
          onClick={closeMenu}
        >
          <span className={styles["header__brand-icon"]}>
            <CarFront size={30} strokeWidth={1.8} />
          </span>

          <span className={styles["header__brand-text"]}>
            <strong>UTRECHT DRIVE</strong>
            <small>RIJSCHOOL UTRECHT</small>
          </span>
        </Link>

        <nav
          className={styles["header__nav"]}
          aria-label={t("mainNav")}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles["header__nav-link"]}
              aria-current={
                link.href === "/pricing" &&
                pathname === "/pricing"
                  ? "page"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles["header__actions"]}>
          <div
            className={styles["header__languages"]}
            aria-label="Language"
          >
            <Link
              href={pathname}
              locale="nl"
              className={
                locale === "nl"
                  ? styles["header__language--active"]
                  : styles["header__language"]
              }
              aria-label="Nederlands"
            >
              NL
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              href={pathname}
              locale="en"
              className={
                locale === "en"
                  ? styles["header__language--active"]
                  : styles["header__language"]
              }
              aria-label="English"
            >
              EN
            </Link>
          </div>

          <Link
            href="/#contact"
            className={styles["header__cta"]}
          >
            {t("trial")}
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className={styles["header__toggle"]}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            menuOpen ? t("closeMenu") : t("openMenu")
          }
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`${styles["header__mobile"]} ${
          menuOpen ? styles["header__mobile--open"] : ""
        }`}
        aria-label={t("mainNav")}
        inert={!menuOpen}
      >
        <div className={styles["header__mobile-inner"]}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles["header__mobile-link"]}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            className={styles["header__mobile-cta"]}
            onClick={closeMenu}
          >
            {t("trial")}
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>

          <div className={styles["header__mobile-languages"]}>
            <Link
              href={pathname}
              locale="nl"
              onClick={closeMenu}
            >
              Nederlands
            </Link>

            <Link
              href={pathname}
              locale="en"
              onClick={closeMenu}
            >
              English
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
