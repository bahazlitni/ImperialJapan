import React from 'react';

interface props {
    height?: string,
    fill?: string,
}

export default function Sparkle(
    { height = 'auto', fill = "var(--color-rich-carmine)" }: props
) {
    return <svg style={{ height, width: 'auto' }} width="73" height="76" viewBox="0 0 73 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={fill} d="M32.8829 0.907227C32.8829 19.2353 18.1607 34.0931 0 34.0931C18.1607 34.0931 32.8829 48.9509 32.8829 67.2789C32.8829 48.9509 47.6051 34.0931 65.7658 34.0931C47.6051 34.0931 32.8829 19.2353 32.8829 0.907227M61.491 52.6771C61.491 59.0919 56.3382 64.2922 49.982 64.2922C56.3382 64.2922 61.491 69.4924 61.491 75.9072C61.491 69.4924 66.6438 64.2922 73 64.2922C66.6438 64.2922 61.491 59.0919 61.491 52.6771Z" />
    </svg>
}