import Placeholder from './Placeholder.jsx'
import Tilt from 'react-parallax-tilt'
import artroller from '../assets/artroller.png'
import iambenji from '../assets/iambenji.png'
import bramblebeat from '../assets/bramblebeat.png'
import { useLanguage } from '../hooks/useLanguage'

const projectsData = [
    {
        id: 'artoller',
        title: 'Artoller',
        tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
        image: artroller,
        url: 'https://webwinkelmain.vercel.app/',
        github: 'https://github.com/Benjaminvdw/webwinkelmain'
    },
    {
        id: 'iambenji',
        title: 'Iambenji.net',
        tech: ['React 19', 'Vite', 'Three.js', 'Cloudflare'],
        image: iambenji,
        url: 'https://iambenji.pages.dev/',
        github: 'https://github.com/Benjaminvdw/iambenji'
    },
    {
        id: 'bramblebeat',
        title: 'Bramblebeat',
        tech: ['GDScript', 'Python'],
        image: bramblebeat,
        url: 'https://benjaminvdw.itch.io/bramblebeat'
    },
]

export default function Portfolio() {
    const { t } = useLanguage();

    return (
        <section id="werk" className="bg-stone/20 py-24 relative z-30">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink">{t.portfolio.title}</h2>
                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                    {projectsData.map((project) => (
                        <Tilt key={project.title} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01} transitionSpeed={500}>
                            <article className="h-full rounded-2xl bg-sand p-5 shadow-lg border border-stone/30 hover:border-olive/50 transition-colors flex flex-col">
                                <div className="overflow-hidden rounded-xl">
                                    <img src={project.image} alt={project.title} className="aspect-video w-full object-cover transform hover:scale-105 transition-transform duration-500" />
                                </div>
                                
                                <div className="mt-6 flex-grow">
                                    <h3 className="text-2xl font-semibold text-ink">{project.title}</h3>
                                    <p className="mt-3 text-sm text-bark/90 leading-relaxed">{t.portfolio.projects[project.id]}</p>
                                    
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.tech.map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-stone/30 text-ink text-xs font-mono rounded-full border border-stone/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 flex gap-4 items-center">
                                    <a href={project.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm font-medium text-sand bg-ink px-4 py-2 rounded-lg hover:bg-olive transition-colors"
                                    >
                                        {t.portfolio.viewLive}
                                    </a>
                                    {project.github && (
                                        <a href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm font-medium text-ink border border-ink px-4 py-2 rounded-lg hover:bg-stone/30 transition-colors"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </article>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    )
}
