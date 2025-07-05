import React from "react";

import AugmentedButton from "@/components/AugmentedButton/AugmentedButton";
import LittleArrow from "@/svgs/LittleArrow";

interface props {
    color?: string;
    backgroundColor?: string;
    href?: string;
    fontSize?: string;
    padding?: string;
}

export default function RisebackButton({ fontSize, padding, color, backgroundColor }: props) {
    return <AugmentedButton
        fontSize={fontSize}
        padding={padding}
        href="#hero"
        color={color || "var(--color-rich-carmine)"}
        backgroundColor={backgroundColor || "none"}>
        <LittleArrow rot="up" stroke={color} strokeWidth={2} height="40%" />
        <p>Rise back to the sun</p>
    </AugmentedButton>
}