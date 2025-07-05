"use client";
import "./GalleryPreview.module.css";

import React, { useState, useRef, useEffect } from "react";
import DiscoverSectionHeader from "@/components/DiscoverSectionHeader/DiscoverSectionHeader";

import styles from "./GalleryPreview.module.css";

const CarouselImages: [string, string, string[]][] = [
    [
        "Majestic Castles and Temples",
        "Immerse yourself in architectural marvels that embody centuries of tradition and cultural heritage.",
        [
            "/gallery/japan-fort1.png",
            "/gallery/japan-castle2.png",
            "/gallery/japan-fort2.png",
            "/gallery/japan-fort6.png",
            "/gallery/japan-fort8.png",
            "/gallery/japan-yamato28.png",
        ]
    ],
    [
        "Elite Military Forces",
        "Join elite forces and engage in critical missions to protect and uphold the glory of Imperial Japan.",
        [
            "/gallery/japan-fleet2.png",
            "/gallery/japan-fleet3.png",
            "/gallery/japan-fleet4.png",
            "/gallery/japan-fleet5.png",
            "/gallery/japan-fleet6.png",
            "/gallery/japan-fleet7.png",
        ]
    ],
    [
        "Cutting-Edge Industry",
        "Collaborate with leading firms to drive innovation and push the boundaries of engineering excellence.",
        [
            "/gallery/japan-building1.png",
            "/gallery/japan-building2.png",
            "/gallery/japan-misc1.png",
            "/gallery/japan-yamato4.png",
            "/gallery/japan-yamato9.png",
            "/gallery/japan-yamato15.png",
            "/gallery/japan-yamato19.png",
        ]
    ],
    [
        "Tranquil Gardens",
        "Discover peace and inspiration within exquisitely designed gardens that showcase natural beauty.",
        [
            "/gallery/japan-landscape1.png",
            "/gallery/japan-landscape2.png",
            "/gallery/japan-landscape3.png",
            "/gallery/japan-landscape4.png",
            "/gallery/japan-landscape5.png",
            "/gallery/japan-landscape6.png",
            "/gallery/japan-landscape7.png",
            "/gallery/japan-landscape8.png",
            "/gallery/japan-landscape9.png",
        ]
    ],
];

export default function GalleryPreview({ href }: { href: string }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [backgroundIsPressed, setBackgroundIsPressed] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (backgroundIsPressed) return;
            setImageIndex(prevIndex => (prevIndex + 1) % CarouselImages[selectedIndex][2].length);
            if (!isHovered && imageIndex === 0) {
                setSelectedIndex(prevIndex => (prevIndex + 1) % CarouselImages.length);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [selectedIndex, isHovered, backgroundIsPressed, imageIndex]);

    const handleMouseOver = (index: number) => {
        setIsHovered(true);
        setSelectedIndex(index);
        setImageIndex(0);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setImageIndex(0);
    };

    return (
        <section id="gallery">
            <DiscoverSectionHeader title="What awaits you" name="gallery" href={href} />
            <div className={styles["gallery-preview"]}>
                <ul>
                    {CarouselImages.map(([title, description], index) => (
                        <li
                            key={index}
                            className={`${styles["gallery-preview-element"]} ${index === selectedIndex ? styles["gallery-preview-element-selected"] : ""}`}
                            onMouseOver={() => handleMouseOver(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span>
                                <a href={href || "#gallery"}>{title}</a>
                            </span>
                            <p>{description}</p>
                        </li>
                    ))}
                </ul>
                <div
                    onMouseDown={() => setBackgroundIsPressed(true)}
                    onMouseUp={() => setBackgroundIsPressed(false)}
                    className={styles["gallery-preview-tv"]}
                    style={{ backgroundImage: `url(${CarouselImages[selectedIndex][2][imageIndex]})` }}
                ></div>
            </div>
        </section>
    );
};