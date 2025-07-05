import React from "react";
import AugmentedButton from "@/components/AugmentedButton/AugmentedButton";
import LittleArrow from "@/svgs/LittleArrow";

import styles from "./DiscoverSectionHeader.module.css";

interface props {
    title: string,
    name: string,
    href?: string
}

export default function DiscoverSectionHeader({ title, name, href }: props) {
    return <div className={styles.container}>
        <h2>{title},</h2>
        <AugmentedButton href={href || `#${name}`} color="var(--color-golden-rod)">
            <span style={{ textTransform: "capitalize" }}>see {name}</span>
            <LittleArrow height="18px" strokeWidth={3} stroke="var(--color-golden-rod)" />
        </AugmentedButton>
    </div>
}