import styles from "./Ministries.module.css"
import React from "react";
import MinistryCard from "@/components/MinistryCard/MinistryCard";

import DefenseLogo from "@/svgs/DefenseLogo";
import ImmigrationLogo from "@/svgs/ImmigrationLogo";
import InfrastructureLogo from "@/svgs/InfrastructureLogo";
import ProductionLogo from "@/svgs/ProductionLogo";

interface MinistryCardProps {
    Logo: React.ComponentType<{ width: string }>;
    name: string;
    description: string;
}

const ministriesCardsData: MinistryCardProps[] = [
    {
        name: "defense",
        description: "Trains and leads armies to protect borders and conquer new territories.",
        Logo: DefenseLogo,
    },
    {
        name: "immigration",
        description: "Manages the influx of new citizens, ensuring a smooth transition into Imperial Japan.",
        Logo: ImmigrationLogo,
    },
    {
        name: "production",
        description: "Handles resource gathering, crafting, and trade to fuel the nation's growth.",
        Logo: ProductionLogo,
    },
    {
        name: "infrastructure",
        description: "Oversees the construction and maintenance of roads, bridges, buildings, and other vital structures.",
        Logo: InfrastructureLogo,
    },
];


export default function Ministries() {
    return <section id="ministries" className={styles.section}>
        <h2>Choose what fits you,</h2>
        <ul>
            {ministriesCardsData.map(({ name, Logo, description }: MinistryCardProps) =>
                <MinistryCard name={name} Logo={Logo} description={description} />
            )}
        </ul>
    </section>
}