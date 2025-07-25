'use client'
import React from 'react';

interface props {
    fill?: string,
    width?: string
}

export default function LongArrow({ fill = "var(--color-rich-carmine)", width = 'auto' }: props) {
    return <svg style={{ height: 'auto', width }} width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={fill} d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM31.7071 8.70711C32.0976 8.31659 32.0976 7.68342 31.7071 7.2929L25.3431 0.928934C24.9526 0.53841 24.3195 0.53841 23.9289 0.928934C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9L31 9L31 7L1 7L1 9Z" />
    </svg>
}