import artroller from '../assets/artroller.jpg'
import iambenji from '../assets/iambenji.jpg'
import bramblebeat from '../assets/bramblebeat.jpg'
import tapelogs from '../assets/tapelogs.png'
import {
    siCloudflare, siCloudflareworkers, siGodotengine, siJetpackcompose, siKotlin, siNextdotjs,
    siPython, siReact, siSupabase, siTailwindcss, siThreedotjs, siTypescript, siVite,
} from 'simple-icons'

// `track` numbers the projects like an LP tracklist. `tech` holds simple-icons logos. Descriptions live in src/locales/*.js under portfolio.projects[id].
export const projects = [
    {
        id: 'tapelogs',
        track: 'A1',
        title: 'Tapelogs',
        tech: [siKotlin, siJetpackcompose, siSupabase, siCloudflareworkers],
        image: tapelogs,
        url: 'https://tapelogs.benjaminvdw.dev/'
    },
    {
        id: 'artoller',
        track: 'A2',
        title: 'Artoller',
        tech: [siNextdotjs, siTypescript, siTailwindcss],
        image: artroller,
        url: 'https://webwinkelmain.vercel.app/',
        github: 'https://github.com/Benjaminvdw/webwinkelmain'
    },
    {
        id: 'iambenji',
        track: 'B1',
        title: 'Iambenji.net',
        tech: [siReact, siVite, siThreedotjs, siCloudflare],
        image: iambenji,
        url: 'https://portfolio-286.pages.dev/',
        github: 'https://github.com/Benjaminvdw/iambenji'
    },
    {
        id: 'bramblebeat',
        track: 'B2',
        title: 'Bramblebeat',
        tech: [siGodotengine, siPython],
        image: bramblebeat,
        url: 'https://benjaminvdw.itch.io/bramblebeat'
    },
]
