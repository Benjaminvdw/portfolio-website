import Placeholder from './Placeholder.jsx'
import artroller from '../assets/artroller.png'
import iambenji from '../assets/iambenji.png'
import bramblebeat from '../assets/bramblebeat.png'

const projects = [
    {
        title: 'Artroller',
        description: 'Een mock site voor een controller onderneming.',
        tech: ['Next.js', 'TailwindCSS', 'Typescript'],
        image: artoller,
        url: 'https://webwinkelmain.vercel.app/'
    },

    {
        title: 'Iambenji',
        description: 'Mijn persoonlijke blog.',
        tech: ['HTML', 'CSS', 'Javascript'],
        image: iambenji,
        url: 'https://portfolio-286.pages.dev/'
    },

    {
        title: 'Bramblebeat',
        description: 'Een 2 player co-op game.',
        tech: ['GDScript', 'Python'],
        image: bramblebeat,
        url: 'https://benjaminvdw.itch.io/bramblebeat'
    },
]

export default function Portfolio() {
    return (
        <section id="werk" className="bg-stone/30 py-20">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-4xl">Mijn werk</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {projects.map((project) => (
                        <article key={project.title} className="rounded-xl bg-sand p-4 shadow-sm">
                            <img src={project.image} alt={project.title} className="aspect-video w-full rounded-xl object-cover" />
                            <h3 className="mt-4 text-xl">{project.title}</h3>
                            <p className="mt-1 text-sm text-bark">{project.description}</p>
                            <p className="mt-3 text-xs text-olive">{project.tech.join(' · ')}</p>
                            <a href={project.url}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 inline-block text-sm text-olive underline hover:text-bark"
                            >
                                Bekijk live
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
