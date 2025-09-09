export type PortfolioProject = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    imagePrompt?: string; // used with the image generator for placeholders
    url?: string;
};

export type TimelineItem = {
    id: string;
    title: string;
    subtitle?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    type?: 'work' | 'education' | 'other';
};

export type Skill = {
    id: string;
    name: string;
    level: number; // 0..100
    category?: string;
};

export type TabKey = 'Home' | 'Projects' | 'Experience' | 'Skills' | 'Contact';