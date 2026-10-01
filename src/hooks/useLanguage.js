import { useState, useEffect } from 'react';

const translations = {
    en: {
        nav: { work: 'Work', contact: 'Contact', about: 'About me' },
        hero: { 
            viewWork: 'View Work', 
            contact: 'Contact' 
        },
        portfolio: { 
            title: 'My Work', 
            viewLive: 'View Live',
            projects: {
                artoller: 'Mock website for a rhythm-game controller, built with Next.js, TypeScript, and TailwindCSS. Fully responsive design, so the site works well on any screen size.',
                iambenji: 'Personal website and blog built with React 19 and Vite, with a backend on Cloudflare Pages Functions and Cloudflare KV. Features include an interactive 3D globe with visitor pins (Three.js), a post-it board with a drawing function, a Spotify "now playing" widget, and a contact form via Resend.',
                bramblebeat: '2-player co-op rhythm game, developed as a team with 5 fellow students during an internal game jam, which the team won. As team captain, I was responsible for both the front-end and the back-end. The game is now set up in the BlastGalaxy arcade.'
            }
        },
        contact: {
            title: 'Contact',
            subtitle: 'Feel free to reach out for new opportunities, collaborations, or just a fun chat about code and games!',
            name: 'Name',
            namePlaceholder: 'Your name',
            email: 'Email',
            emailPlaceholder: 'your@email.com',
            message: 'Message',
            messagePlaceholder: 'What would you like to discuss?',
            sending: 'Sending...',
            send: 'Send message',
            successTitle: 'Message sent!',
            successSubtitle: 'Thanks for your message! I will get back to you as soon as possible.',
            sendAnother: 'Send another message',
            error: 'Something went wrong. Please try again.'
        },
        terminal: {
            role: 'Fullstack developer',
            status: 'Building cool stuff'
        }
    },
    nl: {
        nav: { work: 'Werk', contact: 'Contact', about: 'Over mij' },
        hero: { 
            viewWork: 'Bekijk werk', 
            contact: 'Contact' 
        },
        portfolio: { 
            title: 'Mijn werk', 
            viewLive: 'Bekijk live',
            projects: {
                artoller: 'Mock website voor een rhythm-game controller, gebouwd met Next.js, TypeScript en TailwindCSS. Volledig responsive design, zodat de site goed werkt op elk schermformaat.',
                iambenji: 'Persoonlijke website en blog gebouwd met React 19 en Vite, met een backend op Cloudflare Pages Functions en Cloudflare KV. Bevat een interactieve 3D-globe met bezoekerspins (Three.js), een prikbord met tekenfunctie, een Spotify "now playing" widget en een contactformulier via Resend.',
                bramblebeat: '2-speler co-op rhythm-game, ontwikkeld in een team met 5 medestudenten tijdens een interne game jam, die het team heeft gewonnen. Als team captain was ik verantwoordelijk voor zowel de front-end als de back-end. De game staat nu opgesteld in de BlastGalaxy arcade.'
            }
        },
        contact: {
            title: 'Contact',
            subtitle: 'Neem gerust contact op voor nieuwe kansen, samenwerkingen, of gewoon een leuk gesprek over code en games!',
            name: 'Naam',
            namePlaceholder: 'Jouw naam',
            email: 'Email',
            emailPlaceholder: 'jouw@email.nl',
            message: 'Bericht',
            messagePlaceholder: 'Wat wil je bespreken?',
            sending: 'Verzenden...',
            send: 'Verstuur bericht',
            successTitle: 'Bericht verzonden!',
            successSubtitle: 'Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.',
            sendAnother: 'Stuur nog een bericht',
            error: 'Er ging iets mis. Probeer het opnieuw.'
        },
        terminal: {
            role: 'Fullstack developer',
            status: 'Bouwt coole dingen'
        }
    }
};

export function useLanguage() {
    const [lang, setLang] = useState('nl'); // default to Dutch to prevent flicker if mostly Dutch

    useEffect(() => {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.toLowerCase().startsWith('nl')) {
            setLang('nl');
        } else {
            setLang('en');
        }
    }, []);

    return { t: translations[lang], lang, setLang };
}
