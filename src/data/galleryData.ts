export type GalleryItem = {
    src: string;
    type: 'photo' | 'video';
    category: 'Conferences' | 'Roadshows' | 'Workshops';
    // For videos, thumbnail is required and youtubeUrl is required
    thumbnail?: string;
    youtubeUrl?: string;
};

export const galleryData: GalleryItem[] = [
    // Conferences
    { src: '/images/Gallary/Conferences/5P5A4780.JPG', type: 'photo', category: 'Conferences' },
    { src: '/images/Gallary/Conferences/5P5A4782.JPG', type: 'photo', category: 'Conferences' },
    { src: '/images/Gallary/Conferences/5P5A4785.JPG', type: 'photo', category: 'Conferences' },
    { src: '/images/Gallary/Conferences/5P5A4784.JPG', type: 'photo', category: 'Conferences' },
    { src: '/images/Gallary/Conferences/5P5A4787.JPG', type: 'photo', category: 'Conferences' },
    { src: '/images/Gallary/Conferences/5P5A4798.JPG', type: 'photo', category: 'Conferences' },
    { src: '/images/Gallary/Conferences/5P5A4799.JPG', type: 'photo', category: 'Conferences' },
    { src: '/images/Gallary/Conferences/5P5A4801.JPG', type: 'photo', category: 'Conferences' },
    { src: '/images/Gallary/Conferences/5P5A4838.JPG', type: 'photo', category: 'Conferences' },
    { src: '/images/Gallary/Conferences/5P5A4840.JPG', type: 'photo', category: 'Conferences' },
    { src: '/images/Gallary/Conferences/097A1005.JPG', type: 'photo', category: 'Conferences' },
    { src: '/images/Gallary/Conferences/097A1008.JPG', type: 'photo', category: 'Conferences' },
    { src: '/images/Gallary/Conferences/097A1010.JPG', type: 'photo', category: 'Conferences' },
    { src: '/images/Gallary/Conferences/097A1012.JPG', type: 'photo', category: 'Conferences' },
    { src: '/images/Gallary/Conferences/097A1014.JPG', type: 'photo', category: 'Conferences' },
    { src: '/images/Gallary/Conferences/097A1042.JPG', type: 'photo', category: 'Conferences' },
      // Roadshows
    { src: '/images/coreteamandfounders/Sukesh-1-1.jpg', type: 'photo', category: 'Roadshows' },
    { src: '/images/coreteamandfounders/Aish-scaled.jpg', type: 'photo', category: 'Roadshows' },
    { src: '', type: 'video', category: 'Roadshows', thumbnail: '/images/logos/New-Dreamin-Logo-White.JPG', youtubeUrl: 'https://www.youtube.com/watch?v=klmnopqrst' },
    // Workshops
    { src: '/images/coreteamandfounders/IMG_20230923_094227.jpg', type: 'photo', category: 'Workshops' },
    { src: '', type: 'video', category: 'Workshops', thumbnail: '/images/logos/New-Dreamin-Logo-White.JPG', youtubeUrl: 'https://www.youtube.com/watch?v=uvwxyzabcd' },
];
