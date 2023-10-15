"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className={styles.header}>
      <h1>
        <Link href="/" className={styles.title}>
          Next Supabase
        </Link>
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link
              href="/"
              className={`${pathname === "/" ? styles.active : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/linear-regression"
              className={`${
                pathname === "/linear-regression" ? styles.active : ""
              }`}
            >
              Linear
            </Link>
          </li>
          <li>
            <Link
              href="/logistic-regression"
              className={`${
                pathname === "/logistic-regression" ? styles.active : ""
              }`}
            >
              Logistic
            </Link>
          </li>
          <li>
            <Link
              href="/gpt4"
              className={`${pathname === "/gpt4" ? styles.active : ""}`}
            >
              GPT4
            </Link>
          </li>{" "}
          <li>
            <Link
              href="/dashboard"
              className={`${pathname === "/dashboard" ? styles.active : ""}`}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
