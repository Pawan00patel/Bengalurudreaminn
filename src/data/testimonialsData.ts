/* eslint-disable */
export interface Testimonial {
    id: number;
    name: string;
    title: string;
    text: string;
    image: string;
}

export const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: 'Chandler Bing',
        title: 'Transponster',
        text: "Building my own portfolio could've never been easier than this. The only areas I'm good at are Math, Jokes and Dance.",
        image: '/images/testimonials/boy2.svg'
    },
    {
        id: 2,
        name: 'Monica Geller',
        title: 'Head Chef',
        text: "This is the only thing that I didn't have to spend time to sort out. It's tidy all by itself.",
        image: '/images/testimonials/girl2.svg'
    },
    {
        id: 3,
        name: 'Phoebe Buffay',
        title: 'Massuese',
        text: "Heard of the song 'Smelly Cat!!' ? This website made it viral. Plus portfolio is the only thing that Ursula doesn't have :)",
        image: '/images/testimonials/girl1.svg'
    },
    {
        id: 4,
        name: 'Joey Tribbiani',
        title: 'Actor',
        text: "Making my portfolio with this helped me get my role as 'Dr. Drake Ramoray' in 'Days Of Our Lives'. You guys are the best !",
        image: '/images/testimonials/boy1.svg'
    },
    {
        id: 5,
        name: 'Rachel Green',
        title: 'Sales Executive',
        text: 'Ralph Lauren was one of the best things that ever happened to me. My portfolio made that dream happen. I owe you guys.',
        image: '/images/testimonials/girl3.svg'
    },
    {
        id: 6,
        name: 'Ross Geller',
        title: 'Paleontologist',
        text: "Be it 'Rocks' or 'Bones', you need a website to display it. This is it. Great work guys !",
        image: '/images/testimonials/boy3.svg'
    }
];
