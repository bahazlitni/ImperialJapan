import React from 'react';

type rotation = 'right' | 'up' | 'left' | 'down';

interface props {
    rot?: rotation,
    height: string,
    stroke?: string,
    strokeWidth?: number
}

function rotate(rot: rotation) {
    switch (rot) {
        case 'up': return -90;
        case 'down': return 90;
        case 'left': return 180;
        default: return 0;
    }
}

export default function LittleArrow({ height, rot = 'right', stroke = "var(--color-black)", strokeWidth = 3 }: props) {
    return <svg style={{
        width: 'auto',
        transform: `rotate(${rotate(rot)}DEG)`,
        height,
    }} width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path stroke={stroke} stroke-width={strokeWidth} d="M2 16.907L11 9.40698L2 1.90698" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
}