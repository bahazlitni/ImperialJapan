"use client"

import React from "react";

import Hero from "@/sections/Hero/Hero";
import MoreThanJustAMinecraftNation from "@/sections/MoreThanJustAMinecraftNation/MoreThanJustAMinecraftNation";
import GalleryPreview from "@/sections/GalleryPreview/GalleryPreview";
import Ministries from "@/sections/Ministries/Ministries";
import Map from "@/sections/Map/Map";
import Reminder from "@/sections/Reminder/Reminder";
import AboutUs from "@/sections/AboutUs/AboutUs";
import AboutNation from "@/sections/AboutNation/AboutNation";

import styles from "./page.module.css";

export default function HomePage() {
    return <div className={styles.home} id="#home">
        <Hero />
        <MoreThanJustAMinecraftNation />
        <GalleryPreview href="#" />
        <Ministries />
        <Map href={"https://map.ccnetmc.com/nationsmap/#world;flat;16770,64,-4222;5"} />
        <Reminder />
        <AboutUs />
        <AboutNation />
    </div>
}