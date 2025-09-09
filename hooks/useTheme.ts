import { useMemo } from 'react';

export type Theme = {
    colors: {
        background: string;
        card: string;
        primary: string;
        secondary: string;
        accent: string;
        text: string;
        subtext: string;
        border: string;
        success: string;
    };
    gradients: {
        warm: string[];
        cool: string[];
    };
    spacing: (n: number) => number;
    radius: {
        sm: number;
        md: number;
        lg: number;
    };
    sizes: {
        avatar: number;
    };
};

const baseTheme: Theme = {
    colors: {
        background: '#0f1724', // deep navy
        card: 'rgba(255,255,255,0.04)',
        primary: '#7C3AED', // violet
        secondary: '#06B6D4', // teal
        accent: '#FFB020', // warm accent
        text: '#E6EEF8',
        subtext: 'rgba(230,238,248,0.7)',
        border: 'rgba(255,255,255,0.06)',
        success: '#10B981',
    },
    gradients: {
        warm: ['#7C3AED', '#FF5E62'],
        cool: ['#06B6D4', '#3B82F6'],
    },
    spacing: (n: number) => n * 8,
    radius: {
        sm: 8,
        md: 14,
        lg: 20,
    },
    sizes: {
        avatar: 84,
    },
};

export function useTheme() {
    return useMemo(() => baseTheme, []);
}

export default baseTheme;