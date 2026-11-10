export default {
    nav: { work: 'Work', contact: 'Contact', about: 'About me' },
    hero: {
        name: 'Benjamin van der Westen',
        title: 'I build websites, Android apps and games',
        subtitle: 'Fullstack developer and student at MediaCollege Amsterdam, open to an internship or a job. My team won a game jam with Bramblebeat, which now stands in the BlastGalaxy arcade.',
        photoAlt: 'Portrait of Benjamin van der Westen',
        viewWork: 'View my work',
        contact: 'Get in touch'
    },
    portfolio: {
        title: 'My work',
        viewLive: 'View live',
        projects: {
            tapelogs: 'Native Android app for logging, rating and reviewing albums, built solo with Kotlin and Jetpack Compose. The diary works offline (Room), while accounts, reviews and friends run on Supabase. Scan a record\'s barcode with ML Kit to find it on vinyl, with Discogs and eBay prices via a Cloudflare Worker. Currently in private testing on Google Play.',
            artoller: 'Mock website for a rhythm-game controller, built with Next.js, TypeScript, and TailwindCSS. Fully responsive design, so the site works well on any screen size.',
            iambenji: 'Personal website and blog built with React 19 and Vite, with a backend on Cloudflare Pages Functions and Cloudflare KV. Features include an interactive 3D globe with visitor pins (Three.js), a post-it board with a drawing function, a Spotify "now playing" widget, and a contact form via Resend.',
            bramblebeat: '2-player co-op rhythm game, developed as a team with 5 fellow students during an internal game jam, which the team won. As team captain, I was responsible for both the front-end and the back-end. The game is now set up in the BlastGalaxy arcade.'
        }
    },
    about: {
        title: 'About me',
        body: [
            'I\'m Benjamin, a student at MediaCollege Amsterdam. I build websites and web apps, usually with React, Tailwind and Vite, and lately an Android app in Kotlin. To me, how something feels matters just as much as how it works under the hood. Figuring things out is my favourite part of the job: turning an idea, bit by bit, into something that really fits.',
            'Away from the screen I play games, go on long walks in nature and collect records.'
        ],
        facts: [
            ['Studying', 'MediaCollege Amsterdam'],
            ['Works with', 'React, Tailwind, Vite, Kotlin, Godot'],
            ['Looking for', 'An internship or a job'],
        ],
        photoAlt: 'Benjamin on a walk in the woods'
    },
    contact: {
        title: 'Contact',
        subtitle: 'I\'m open to an internship or a job, and always happy to talk about code and games. Send a message or email me directly.',
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'Message',
        messagePlaceholder: 'What would you like to discuss?',
        sending: 'Sending…',
        send: 'Send message',
        successTitle: 'Message sent',
        successSubtitle: 'Thanks for your message. I\'ll get back to you as soon as I can.',
        sendAnother: 'Send another message',
        error: 'Something went wrong. Please try again.'
    },
    terminal: {
        role: 'Fullstack developer',
        status: 'Building cool stuff'
    }
};
