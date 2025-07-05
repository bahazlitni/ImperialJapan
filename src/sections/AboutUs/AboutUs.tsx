
import React from "react";
import TypographyVerticalLogo from "@/svgs/TypographyVerticalLogo";
import TypographyHorizentalLogo from "@/svgs/TypographyHorizentalLogo";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
    return <section className={styles.section} id="about-us">

        <div className={styles.textContainer}>
            <h2>About us,</h2>
            <div className={styles.verticalLayout}>
                <TypographyHorizentalLogo height="10vw" />
            </div>
            <p>
                In Imperial Japan, adventure awaits at every turn.
                Whether you&apos;re exploring ancient temples, battling fierce rivals,
                or crafting magnificent structures, there&apos;s never a dull moment.
                Our sprawling territories offer endless possibilities for those
                who crave challenge, camaraderie, and the freedom to shape their
                own destiny. Step into our world and unleash your full potential.
            </p>
        </div>
        <div className={styles.horizentalLayout}>
            <TypographyVerticalLogo />
        </div>
    </section>
}