"use client";

import React from "react";
import AboutNationTable from "@/components/AboutNationTable/AboutNationTable";
import HistoryPaper from "@/components/HistoryPaper/HistoryPaper";

import styles from "./AboutNation.module.css";



const paragraphs: [string, string][] = [
    ["Geography", "Imperial Japan is located throughout East Asia and Mongolia, with some territories throughout the North and South Pacific. Most of its citizens live in or near the population hubs of Yamato and Haerbin. Most of the population lives in the regions of mainland China and Manchuria."],
    ["Government", "Japan has a government system closest to that of a constitutional monarchy, where the Emperor rules over the nation, and the Royal Council makes democratic decisions in conjunction with him. The nation is kept running smoothly by a number of ministries, ranging from the ministry of defence to the ministry of infrastructure."],
    ["Economy", "The Japanese economy mainly revolves around external trade. Since Japan now has very many friendly neighbors, exports and imports are more common than before but don't contribute much to the economy.Most of the economy revolves around international coalition auction selling and internal barter and trade.Imperial Japan has a total wealth of over $2,000,000.The richest towns are Hachinohe, Haerbin, and Yamato."]
];

export default function AboutNation() {
    return (
        <section className={styles.section} id="about-nation">
            <h1 className={styles.title}>About Nation,</h1>
            <div className={styles.supercardsContainer}>
                <AboutNationTable className={`${styles.padding} ${styles.table}`} />
                <HistoryPaper className={`${styles.padding} ${styles.paper}`} />
            </div>
            <div className={styles.cardsContainer}>
                {paragraphs.map(([title, paragraph], key) => (
                    <div key={key} className={`${styles.padding} ${styles.card}`}>
                        <h4>{title}</h4>
                        <p>{paragraph}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}