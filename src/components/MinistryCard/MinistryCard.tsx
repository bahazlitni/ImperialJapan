import React from "react";
import styles from "./MinistryCard.module.css";

import LittleArrow from "@/svgs/LittleArrow";

interface MinistryCardProps {
    Logo: React.ComponentType<{ width: string }>;
    name: string;
    description: string;
}

export default function MinistryCard({ Logo, description, name }: MinistryCardProps) {
    return (
        <li className={styles.li}>
            <div className={styles.logoContainer}>
                <Logo width="55%" />
            </div>
            <div className={styles.body}>
                <h1 className={styles.cardName}>
                    Ministry of
                    <span className={styles.span}>
                        {name}
                        <LittleArrow height="18px" />
                    </span>
                </h1>
                <p>{description}</p>
            </div>
        </li>
    );
}