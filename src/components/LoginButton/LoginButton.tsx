"use client"

import React from "react";
import LongArrowRight from "@/svgs/LongArrow";
import AugmentedButton from "@/components/AugmentedButton/AugmentedButton";

interface props {
    color: string;
    backgroundColor?: string;
    fontSize?: string;
    padding?: string;
    className?: string;
}

export default function LoginButton({ className, color, fontSize, padding, backgroundColor }: props) {
    return <AugmentedButton className={className} fontSize={fontSize} padding={padding} color={color} backgroundColor={backgroundColor}>
        <LongArrowRight fill={color} />
        Login
    </AugmentedButton>
}