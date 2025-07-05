"use client";

import styles from "./Navbar.module.css";
import React from "react";

import TypographyHorizentalLogo from "@/svgs/TypographyHorizentalLogo";
import LongArrow from "@/svgs/LongArrow";

const links: [string, string][] = [
    ["about us", "#"],
    ["ranks", "#"],
    ["gallery", "#"],
    ["ministries", "#"],
    ["join us", "#"]
];

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <TypographyHorizentalLogo height="50%" />
            <ul className={styles.ul}>
                {links.map(([name, href], key) => (
                    <li className={styles.li} key={key}>
                        <a href={href}>{name}</a>
                    </li>
                ))}
                <li className={styles.li}>
                    <a href="#">
                        <LongArrow fill="var(--color-rich-carmine)" />
                        login
                    </a>
                </li>
            </ul>
        </nav>
    );
}