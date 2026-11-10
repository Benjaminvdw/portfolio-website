import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects.js'
import { useLanguage } from '../hooks/useLanguage'

function TechIcons({ tech }) {
    return (
        <ul className="flex flex-wrap items-center gap-4">
            {tech.map((icon) => (
                <li key={icon.slug} className="group relative text-muted transition-colors duration-150 ease-out hover:text-ink">
                    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
                        <path d={icon.path} />
                    </svg>
                    {/* Shows the name on hover; screen readers read it as the logo's label */}
                    <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs text-paper opacity-0 transition-[opacity,transform] duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                        {icon.title}
                    </span>
                </li>
            ))}
        </ul>
    )
}

function ProjectLinks({ project, viewLive }) {
    const links = [
        { href: project.url, label: viewLive },
        project.github && { href: project.github, label: 'GitHub' },
    ].filter(Boolean)

    return (
        <div className="flex gap-6">
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-1 text-sm font-medium text-ink transition-colors duration-150 ease-out hover:text-olive"
                >
                    {link.label}
                    <ArrowUpRight size={16} strokeWidth={1.5} className="text-muted transition-colors duration-150 ease-out group-hover:text-olive" />
                </a>
            ))}
        </div>
    )
}

export default function Portfolio() {
    const { t } = useLanguage();

    return (
        <section id="werk" className="scroll-mt-14 border-t border-ink/10 py-24">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-4xl font-medium tracking-[-0.02em]">{t.portfolio.title}</h2>
                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {projects.map((project) => (
                        <article key={project.id} className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-card">
                            <img src={project.image} alt="" className="aspect-video w-full border-b border-ink/10 object-cover" />
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="flex items-baseline gap-3 text-xl font-medium">
                                    <span className="font-mono text-xs text-muted">{project.track}</span>
                                    {project.title}
                                </h3>
                                <p className="mt-3 flex-1 text-[15px] leading-6 text-bark">{t.portfolio.projects[project.id]}</p>
                                <div className="mt-6">
                                    <TechIcons tech={project.tech} />
                                </div>
                                <div className="mt-6 border-t border-ink/10 pt-4">
                                    <ProjectLinks project={project} viewLive={t.portfolio.viewLive} />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
