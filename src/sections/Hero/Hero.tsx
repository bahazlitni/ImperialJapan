import styles from "./Hero.module.css";

import React from "react";
import JoinUsButton from "@/components/JoinUsButton/JoinUsButton";
import LoginButton from "@/components/LoginButton/LoginButton";

export default function Hero() {
    return <section id="hero" className={styles.section}>
        <div className={styles["hero-text-container"]}>
            <h1>Rise in Imperial Japan!</h1>
            <h2>
                Your Minecraft adventure begins in<br />
                <span>the land of the rising sun</span>.
            </h2>
            <p>
                Tired of wandering alone in the vast Minecraft world?
                Join Imperial Japan, a thriving community
                where your adventure truly begins.
            </p>
        </div>
        <ul className={styles.buttons}>
            <li>
                <JoinUsButton className={styles["hero-button"]} color="var(--color-black)" />
            </li>
            <li>
                <LoginButton className={styles["hero-button"]} color="var(--color-white)" backgroundColor="var(--color-rich-carmine)" />
            </li>
        </ul>
    </section>
}
