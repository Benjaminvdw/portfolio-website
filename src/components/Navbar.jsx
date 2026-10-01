import { useLanguage } from '../hooks/useLanguage'

export default function Navbar() {
    const { t } = useLanguage();
    const links = [
        { href: '#werk', label: t.nav.work },
        { href: '#over', label: t.nav.about },
        { href: '#contact', label: t.nav.contact },
    ]

    return (
        <header className="sticky top-0 z-50 bg-ink text-sand">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <a href="#" className="font-semibold">Benjaminvdw</a>
                <ul className="flex gap-6 text-sm">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-stone">{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
