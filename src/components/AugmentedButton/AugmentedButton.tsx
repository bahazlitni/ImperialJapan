"use client";
import React from "react";
import styled from "styled-components";

interface ButtonProps {
    color: string;
    backgroundColor?: string;
    children: React.ReactNode;
    href?: string;
    translateX?: string;
    fontSize?: string;
    padding?: string;
    className?: string;
}

const StyledLink = styled.a<ButtonProps>`
    display: flex;
    align-items: center;
    gap: 15px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 28px;
    white-space: nowrap; 
    text-decoration: none;

    padding: ${props => props.padding};
    font-size: ${props => props.fontSize};

    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    outline: ${props => (props.backgroundColor === "none" ? `solid 1px ${props.color}` : "none")};
    
    svg {
        transition: transform ease-in-out .15s;
    }
    &:hover {
        opacity: 0.85; 
        text-decoration: underline 1px;
        svg {
            transform: translateX(${props => props.translateX});
        }
    }
`;


export default function AugmentedButton({
    className,
    children,
    color,
    backgroundColor,
    href,
    translateX,
    fontSize,
    padding,
}: ButtonProps) {
    return (
        <StyledLink className={className} href={href || "#"} color={color} padding={padding || "24px 36px"} fontSize={fontSize || "28px"} translateX={translateX || "5px"} backgroundColor={backgroundColor || "none"}>
            {children}
        </StyledLink>
    );
}
