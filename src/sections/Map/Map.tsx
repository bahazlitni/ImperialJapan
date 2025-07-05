import styles from './Map.module.css';

import React from "react";
import DiscoverSectionHeader from "@/components/DiscoverSectionHeader/DiscoverSectionHeader";

export default function Map({ href }: { href: string }) {
    return <section id="map" className={styles.section}>
        <DiscoverSectionHeader title="Witness the Rising Empire" name="map" href={href} />
        <iframe id="mapiframe" src={href} />
    </section>
}