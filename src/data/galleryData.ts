export type GalleryItem = {
    src: string;
    type: 'photo' | 'video';
    category: 'Conferences' | 'Roadshows' | 'Workshops';
    title: string;
    description: string;
    year: number;
    // For videos, thumbnail is required and youtubeUrl is required
    thumbnail?: string;
    youtubeUrl?: string;
};

export const galleryData: GalleryItem[] = [
    // Conferences
    { src: '/images/coreteamandfounders/Akshay-1-scaled.jpg', type: 'photo', category: 'Conferences', title: 'Conference 1', description: 'A moment from Conference 1.', year: 2024 },
    { src: '/images/coreteamandfounders/Sesha-bro-dp.jpg', type: 'photo', category: 'Conferences', title: 'Conference 2', description: 'A moment from Conference 2.', year: 2025 },
    { src: '', type: 'video', category: 'Conferences', title: 'Conference Video', description: 'Highlights from the conference.', year: 2025, thumbnail: '/images/logos/New-Dreamin-Logo-White.png', youtubeUrl: 'https://www.youtube.com/watch?v=abcdefghij' },
    // Roadshows
    { src: '/images/coreteamandfounders/Sukesh-1-1.jpg', type: 'photo', category: 'Roadshows', title: 'Roadshow 1', description: 'Roadshow event in action.', year: 2024 },
    { src: '/images/coreteamandfounders/Aish-scaled.jpg', type: 'photo', category: 'Roadshows', title: 'Roadshow 2', description: 'Another roadshow highlight.', year: 2025 },
    { src: '', type: 'video', category: 'Roadshows', title: 'Roadshow Video', description: 'Roadshow event highlights.', year: 2025, thumbnail: '/images/logos/New-Dreamin-Logo-White.png', youtubeUrl: 'https://www.youtube.com/watch?v=klmnopqrst' },
    // Workshops
    { src: '/images/coreteamandfounders/IMG_20230923_094227.jpg', type: 'photo', category: 'Workshops', title: 'Workshop 1', description: 'Workshop hands-on session.', year: 2024 },
    { src: '/images/coreteamandfounders/Sudeer-1-2.png', type: 'photo', category: 'Workshops', title: 'Workshop 2', description: 'Interactive workshop moment.', year: 2025 },
    { src: '/images/coreteamandfounders/Screenshot 2023-05-29 062920.png', type: 'photo', category: 'Workshops', title: 'Workshop 3', description: 'Workshop group activity.', year: 2025 },
    { src: '', type: 'video', category: 'Workshops', title: 'Workshop Video', description: 'Workshop video session.', year: 2024, thumbnail: '/images/logos/New-Dreamin-Logo-White.png', youtubeUrl: 'https://www.youtube.com/watch?v=uvwxyzabcd' },
];
