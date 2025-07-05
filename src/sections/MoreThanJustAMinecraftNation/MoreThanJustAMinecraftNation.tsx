import styles from "./MoreThanJustAMinecraftNation.module.css";

import React from "react";
import TypographyHorizentalLogo from "@/svgs/TypographyHorizentalLogo";
import TypographyVerticalLogo from "@/svgs/TypographyVerticalLogo";


export default function MoreThanJustAMinecraftNation() {
    return <section id="more-than-just-a-minecraft-nation" className={styles.section}>
        <div className={styles.horizentalLayout}>
            <TypographyHorizentalLogo height="80px" />
        </div>
        <div className={styles.verticalLayout}>
            <TypographyVerticalLogo height="380px" />
        </div>
        <h1>More Than Just a Minecraft Nation.</h1>
    </section>
}