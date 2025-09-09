import { PortfolioProject, Skill, TimelineItem } from '../types';
import { generateA0ImageUrl } from './image';

export const profile = {
    id: 'me',
    name: 'Jeevanantham M',
    title: 'Flutter developer & Frontend Engineer',
    bio: 'I design delightful product experiences and build them with modern React Native and TypeScript. I love clean abstractions, beautiful micro-interactions, and performance-first apps.',
    avatar: generateA0ImageUrl('portrait of a modern product designer, vibrant colorful gradient, vector style', '1:1', 'avatar-01'),
    location: 'San Francisco, CA',
    email: 'alex@example.com',
    website: 'https://alex-portfolio.dev',
    github: 'https://github.com/alexmercer',
};

export const projects: PortfolioProject[] = [
    {
        id: 'p1',
        title: 'Lumen — Habit Tracker',
        description: 'A delightful habit tracking app with streak visualizations, playful micro-interactions, and an AI-powered habit coach.',
        tags: ['React Native', 'Animations', 'Product Design'],
        imagePrompt: 'mobile app screen, habit tracker, colorful UI, gradients, modern',
        url: 'https://lumen.app',
    },
    {
        id: 'p2',
        title: 'Aurora — Design System',
        description: 'A scalable design system for cross-platform apps with themed components, tokens, and automated release tooling.',
        tags: ['Design Systems', 'TypeScript', 'Accessibility'],
        imagePrompt: 'design system token overview, components, clean UI',
        url: 'https://aurora.design',
    },
    {
        id: 'p3',
        title: 'Atlas Maps',
        description: 'An offline-first mapping app focused on exploration with custom vector tile rendering and smooth gestures.',
        tags: ['Maps', 'Offline', 'Performance'],
        imagePrompt: 'mobile map UI, exploration, terrain, modern',
        url: 'https://atlasmaps.dev',
    },
    {
        id: 'p4',
        title: 'Orbit — Team Chat',
        description: 'A focused team chat app emphasizing async work, threads, and delightful onboarding experiences.',
        tags: ['Realtime', 'UX', 'Productivity'],
        imagePrompt: 'mobile chat app, clean, minimal, fun avatars',
        url: 'https://orbit.chat',
    },
];

export const timeline: TimelineItem[] = [
    {
        id: 't1',
        title: 'Senior Product Designer — Neon Labs',
        subtitle: 'San Francisco, CA',
        startDate: '2022-06',
        endDate: 'Present',
        description: 'Led design and frontend for core consumer products. Introduced an interaction system that improved task completion by 18%.',
        type: 'work',
    },
    {
        id: 't2',
        title: 'Frontend Engineer — Willow Co.',
        subtitle: 'Remote',
        startDate: '2019-03',
        endDate: '2022-05',
        description: 'Built and optimized cross-platform experiences in React Native. Introduced modular component libraries and CI pipelines.',
        type: 'work',
    },
    {
        id: 't3',
        title: 'MSc Human-Computer Interaction',
        subtitle: 'University of Toronto',
        startDate: '2017-09',
        endDate: '2019-06',
        description: 'Specialized in interaction design, prototyping, and user research.',
        type: 'education',
    },
];

export const skills: Skill[] = [
    { id: 's1', name: 'React Native', level: 92, category: 'Frontend' },
    { id: 's2', name: 'TypeScript', level: 90, category: 'Frontend' },
    { id: 's3', name: 'Product Design', level: 88, category: 'Design' },
    { id: 's4', name: 'Figma', level: 85, category: 'Design' },
    { id: 's5', name: 'Animations', level: 82, category: 'Frontend' },
    { id: 's6', name: 'Performance', level: 80, category: 'Engineering' },
    { id: 's7', name: 'Accessibility', level: 78, category: 'Design' },
];