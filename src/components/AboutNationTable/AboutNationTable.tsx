"use client";

import React from "react";
import Image from "next/image";
import styles from "./AboutNationTable.module.css";

const nationData: [string, [string, string[]][]][] = [
    ["overview", [
        ["kanji", ["日本帝国"]],
        ["romanji", ["Nippon Teikoku"]],
        ["capital", ["Yamato"]]
    ]],
    ["government", [
        ["leader", ["FosterzillaH3X"]],
        ["type", ["Constitutional Monarchy"]],
        ["ideology", ["Constitutionalism"]],
        ["vassals", ["Manchuria (Formerly)", "Baritania Republic (Formerly)", "Ryujima (Formerly)"]]
    ]],
    ["demographics", [
        ["population", ["250+"]],
        ["cultures", ["Japanese", "Slothism"]]
    ]],
    ["historical", [
        ["founded", ["Constitutional Monarchy"]],
        ["proceeded by", [
            "Shimazu Shogunate and Tokugawa Shogunate [1st merge].",
            "Kamakura Shogunate and Yamato Shogunate [2nd Merge]. (Yamato Shogunate was a product of the merge between Shimazu Shogunate and Tokugawa Shogunate)"
        ]]
    ]]
];

export default function AboutNationTable({ className }: { className: string }) {
    return (
        <div className={`${styles.table} ${styles.aboutNationDiv} ${className}`}>
            <div>
                <h1>Flag</h1>
                <Image
                    alt="Nation Flag"
                    src="/nation-flag.png"
                    height={480}
                    width={720}
                    layout="responsive"
                />
            </div>
            {nationData.map(section => (
                <div key={section[0]}>
                    <h1>{section[0]}</h1>
                    <table>
                        <tbody>
                            {section[1].map(content => (
                                <tr key={content[0]}>
                                    <th>{content[0]}</th>
                                    <td>
                                        <ul>
                                            {content[1].map((element, index) => (
                                                <li key={index}>{element}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}