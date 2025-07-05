"use client";

import React from "react";
import styles from "./HistoryPaper.module.css";

type ContentSection = [string, string[]];
const content: ContentSection[] = [
    ["Introduction", [
        "In the beginning of N2, a group of players from the Shimazu Shogunate from the N2 Beta server spawned in China and moved to Japan in early March of 2021. The results of their efforts were the new towns of Iwami, Rorikstead, Satsuma, Tosa, and Kyoto, all of which were built under the direction of Alphar, Vyros, and Stonetrench",
        "The Shimazu Shogunate's first priority was to establish their towns as quickly as possible. They no-lifed, mining and grinding for cash to fund the nation creation fee"
    ]],
    ["Tokugawan entrance", [
        "As the Tokugawa Shogunate, led by Cwbeard, founded their own nation in Japan after intending to travel there in the N2 beta, tensions rose between the two shogunates as Shimazu's leaders did not take the Tokugawan's entrance lightly, even though they were unsure of their true goals. The Tokugawans were given the nickname 'Fake Japanese' by the Shimazu members, which fueled the fire under the expanding pile of wood being propped up on either side, establishing the rivalry between the two shogunates"
    ]],
    ["Joseon and the siege of Satsuma", [
        "After Joseon, an adversary from Korea, entered the conflict on the side of the Tokugawa armies, the tide of power dramatically changed. The army of Tokugawan Shogunate and Joseon, who exploited their navy to great tactical advantage during the siege, overpowered the Shimazu Shogunate. The more equipped and seasoned Tokugawan forces laid a losing siege to the collapsing Shimazu Shogunate. When they finally gave up on winning, Alphar, Vyros and other Shimazu members started fighting without armor. This ultimately resulted in the victorious parties occupying Shimazu and their inevitable defeat during the siege of Satsuma",
        "Japan was essentially under the Tokugawa armies' control after they took Satsuma. The Shimazu Shogunate experienced hardship during the occupation, with little autonomy but a noticeable acceleration of their towns' development. The group put a lot of effort into maintaining their existing towns and avoiding detection as much as possible, even though progress was stifled and slow"
    ]],
    ["Shimazu Revolt", [
        "The Tokugawa Shogunate's decision to accept Kyoto, one of Shimazu's major towns into their nation dealt a serious blow to the Shimazu Shogunates people's hopes of mounting a successful revolt siege. But the Tokugawa's decline into inactivity presented an unexpected opportunity for the Shimazu to mount a victorious rebellion. The Shimazu Shogunate fought hard to defend themselves during this revolt, eventually forcing the Tokugawa Shogunate alongside Joseon to retreat. Although it was not a total victory, the Shimazu Shogunate was able to regain their towns back, an essential first step to fighting back",
        "The newfound security enjoyed by the Shimazu Shogunate was short-lived, as the Tokugawa soon returned to lay siege to them once more. Armed with better trained pvpers and gear, the Tokugawan Shogunate armies set out to reclaim all they had lost and permanently put an end to Shimazu's resistance. So the Shimazu Shogunate geared up for battle once, this time with a bloodlust for victory"
    ]],
    ["Formation of the Yamato Shogunate", [
        "The Shimazu revolt was a bloodbath in the first days of the war. The Tokugawans sent an Aircraft Carrier to bombard them, but through quick decision making, Shimazu managed to shoot down all of its planes, forcing the retreate of the Aircraft Carrier. Needless to say, the revolt was an overwhelming success",
        "Cwbeard then approached Stonetrench, not as enemies but as leaders. He was the new shogun of Tokugawa, and although Stonetrench didn't trust him initially, through mutual understandings and a will for a better outcome for their nations, an agreement was made for the nations to merge to create a new Japan- the Yamato shogunate. Although they represented different sides of the newly formed nation, Stonetrench and Cwbeard ended up as great friends, always watching out for the other through much hardship"
    ]]
];

export default function HistoryPaper({ className }: { className: string }) {
    return (
        <div className={`${styles.aboutNationDiv} ${styles.paper} ${className}`}>
            <h1>The beginning of Nations 2 and the first Japanese civil war.</h1>
            <h2>
                The history of Japan is that of great loss and civil war- It can best be summed up into three eras: The first civil war, The second civil war, and Modern times.
            </h2>
            <div className={styles.body}>
                {content.map((data, sectionIndex) => (
                    <span key={sectionIndex}>
                        <h3>{data[0]}</h3>
                        {data[1].map((paragraph, index) => (
                            <p key={index}>{paragraph}.</p>
                        ))}
                    </span>
                ))}
            </div>
        </div>
    );
}