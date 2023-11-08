"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Montserrat } from "next/font/google";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const montserrat = Montserrat({ subsets: ["latin"] });

export function BasicMenu() {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="algorithms-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={`${styles["algorithms-button"]} ${montserrat.className} ${
          pathname === "/linear-regression" ||
          pathname === "/logistic-regression" ||
          pathname === "/gpt4"
            ? styles.active
            : ""
        }`}
        sx={{
          fontFamily: "Montserrat, sans-serif;",
          fontWeight: "bold",
        }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Algorithms
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiList-root": {
            minWidth: "10rem",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          {" "}
          <Link
            href="/linear-regression"
            className={`${
              pathname === "/linear-regression" ? styles.active : ""
            }`}
          >
            Linear
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            href="/logistic-regression"
            className={`${
              pathname === "/logistic-regression" ? styles.active : ""
            }`}
          >
            Logistic
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            href="/gpt4"
            className={`${pathname === "/gpt4" ? styles.active : ""}`}
          >
            GPT4
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}

export const Header = () => {
  const pathname = usePathname();
  const [shouldShowDropdown, setShouldShowDropdown] = useState(false);

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
            <BasicMenu />
          </li>
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
