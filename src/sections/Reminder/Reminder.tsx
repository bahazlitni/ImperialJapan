import "./Reminder.module.css"
import React from "react";
import Sparkle from "@/svgs/Sparkle";
import JoinUsButton from "@/components/JoinUsButton/JoinUsButton";
import LoginButton from "@/components/LoginButton/LoginButton";

import styles from "./Reminder.module.css";


export default function Reminder() {
    return <section className={styles.reminder} id="reminder">
        <div className={styles.textContainer}>
            <h1>
                <Sparkle height="75%" />
                The rising sun awaits you,
            </h1>
            <h2>
                Join Imperial Japan and unleash your inner samurai!
            </h2>
        </div>
        <ul>
            <li>
                <LoginButton className={styles.button} color="var(--color-black)" backgroundColor="var(--color-white)" />
            </li>
            <li>
                <JoinUsButton className={styles.button} color="var(--color-white)" backgroundColor="var(--color-rich-carmine)" />
            </li>
        </ul>
    </section>
}