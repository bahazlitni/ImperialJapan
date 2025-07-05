"use client"

import React from "react";
import styles from "./Footer.module.css";

import TypographyVerticalLogo from "@/svgs/TypographyVerticalLogo";
import TypographyHorizentalLogo from "@/svgs/TypographyHorizentalLogo";
import RisebackButton from "@/components/RisebackButton/RisebackButton";
import JoinUsButton from "@/components/JoinUsButton/JoinUsButton";

const links: string[][] = [
    ["ranks", "#"],
    ["gallery", "#"],
    ["about us", "#"],
    ["rules", "#"],
    ["guidelines", "#"],
    ["FAQ", "#"],
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.body}>
                <span className={styles.logoHorizontal}>
                    <TypographyVerticalLogo height="200px" />
                </span>
                <span className={styles.logoVertical}>
                    <TypographyHorizentalLogo height="80px" />
                </span>
                <div className={styles.right}>
                    <div className={styles.rightTop}>
                        <div className={styles.links}>
                            {links.map((data, index) => (
                                <a key={index} href={data[1]}>{data[0]}</a>
                            ))}
                        </div>
                        <div className={styles.rightTopButtons}>
                            <JoinUsButton
                                color="var(--color-rich-carmine)"
                                padding="10px 20px"
                                fontSize="15px" />
                            <RisebackButton
                                color="var(--color-rich-carmine)"
                                padding="10px 20px"
                                fontSize="15px" />
                        </div>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.rightBottom}>
                        <ul>
                            <li className={styles.fieldP}>Get in touch</li>
                            <li className={styles.valueP}>info@imperialjapan.com</li>
                        </ul>
                        <ul>
                            <li className={styles.fieldP}>Location</li>
                            <li className={styles.valueP}>Yamato, Japan</li>
                        </ul>
                        <ul>
                            <li className={`${styles.fieldP} ${styles.fieldPComplianceLinks}`}>Compliance Links</li>
                            <li className={styles.valueP}>
                                <a href="#">Privacy Notice</a>
                                <a href="#">Terms of Service</a>
                                <a href="#">Cookies Preferences</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className={styles.copyright}>
                &copy; 2022 IMPERIAL JAPAN&trade;. Designed by&nbsp;<span>Baha ZLITNI</span>. All rights are reserved.
            </p>
        </footer>
    );
};
