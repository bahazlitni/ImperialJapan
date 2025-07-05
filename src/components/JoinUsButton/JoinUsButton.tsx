"use client"

import React from "react";
import DiscordIcon from "@/svgs/DiscordIcon";
import AugmentedButton from "@/components/AugmentedButton/AugmentedButton";

interface props {
    color: string;
    backgroundColor?: string;
    fontSize?: string;
    padding?: string;
    className?: string;
}

export default function JoinUsButton({ className, color, fontSize, padding, backgroundColor }: props) {
    return <AugmentedButton className={className} fontSize={fontSize} padding={padding} translateX="0" color={color} backgroundColor={backgroundColor}>
        Join us
        <DiscordIcon size={30} fill={color} />
    </AugmentedButton>
}