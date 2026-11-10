export default {
    nav: { work: 'Werk', contact: 'Contact', about: 'Over mij' },
    hero: {
        name: 'Benjamin van der Westen',
        title: 'Ik bouw websites, Android-apps en games',
        subtitle: 'Fullstack developer en student aan het MediaCollege Amsterdam, open voor een stage of baan. Mijn team won een game jam met Bramblebeat, dat nu in de BlastGalaxy arcade staat.',
        photoAlt: 'Portret van Benjamin van der Westen',
        viewWork: 'Bekijk mijn werk',
        contact: 'Neem contact op'
    },
    portfolio: {
        title: 'Mijn werk',
        viewLive: 'Bekijk live',
        projects: {
            tapelogs: 'Native Android-app om albums te loggen, te beoordelen en te reviewen, solo gebouwd met Kotlin en Jetpack Compose. Het dagboek werkt offline (Room), accounts, reviews en vrienden draaien op Supabase. Scan de barcode van een plaat met ML Kit om hem op vinyl te vinden, met Discogs- en eBay-prijzen via een Cloudflare Worker. Nu in besloten test op Google Play.',
            artoller: 'Mock website voor een rhythm-game controller, gebouwd met Next.js, TypeScript en TailwindCSS. Volledig responsive design, zodat de site goed werkt op elk schermformaat.',
            iambenji: 'Persoonlijke website en blog gebouwd met React 19 en Vite, met een backend op Cloudflare Pages Functions en Cloudflare KV. Bevat een interactieve 3D-globe met bezoekerspins (Three.js), een prikbord met tekenfunctie, een Spotify "now playing" widget en een contactformulier via Resend.',
            bramblebeat: '2-speler co-op rhythm-game, ontwikkeld in een team met 5 medestudenten tijdens een interne game jam, die het team heeft gewonnen. Als team captain was ik verantwoordelijk voor zowel de front-end als de back-end. De game staat nu opgesteld in de BlastGalaxy arcade.'
        }
    },
    about: {
        title: 'Over mij',
        body: [
            'Ik ben Benjamin, student aan het MediaCollege Amsterdam. Ik bouw websites en webapps, meestal met React, Tailwind en Vite, en sinds kort ook een Android-app in Kotlin. Hoe iets aanvoelt vind ik net zo belangrijk als hoe het onder de motorkap werkt. Het uitzoeken is voor mij het leukste deel van dit vak: een idee stukje bij beetje ombouwen tot iets dat echt klopt.',
            'Buiten het scherm speel ik graag spelletjes, maak ik lange natuurwandelingen en verzamel ik muziekplaten.'
        ],
        facts: [
            ['Opleiding', 'MediaCollege Amsterdam'],
            ['Werkt met', 'React, Tailwind, Vite, Kotlin, Godot'],
            ['Zoekt', 'Een stage of baan'],
        ],
        photoAlt: 'Benjamin tijdens een wandeling in het bos'
    },
    contact: {
        title: 'Contact',
        subtitle: 'Ik sta open voor een stage of baan, en praat altijd graag over code en games. Stuur een bericht of mail me direct.',
        name: 'Naam',
        namePlaceholder: 'Jouw naam',
        email: 'Email',
        emailPlaceholder: 'jouw@email.nl',
        message: 'Bericht',
        messagePlaceholder: 'Wat wil je bespreken?',
        sending: 'Verzenden…',
        send: 'Verstuur bericht',
        successTitle: 'Bericht verzonden',
        successSubtitle: 'Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.',
        sendAnother: 'Stuur nog een bericht',
        error: 'Er ging iets mis. Probeer het opnieuw.'
    },
    terminal: {
        role: 'Fullstack developer',
        status: 'Bouwt coole dingen'
    }
};
