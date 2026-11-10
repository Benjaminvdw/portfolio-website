import { useLanguage } from '../hooks/useLanguage'

export default function Navbar() {
    const { t, lang, setLang, locales } = useLanguage();
    const links = [
        { href: '#werk', label: t.nav.work },
        { href: '#over', label: t.nav.about },
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper">
            <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
                <a href="#" className="text-base font-semibold">
                    Benjamin<span className="hidden sm:inline"> van der Westen</span>
                </a>
                <div className="flex items-center gap-6 text-sm">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className="text-bark transition-colors duration-150 ease-out hover:text-ink">
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" className="flex h-8 items-center rounded-lg bg-ink px-4 font-medium text-paper transition-colors duration-150 ease-out hover:bg-bark">
                        {t.nav.contact}
                    </a>
                    <div className="flex items-center gap-1 text-xs font-medium">
                        {Object.entries(locales).map(([code, locale]) => (
                            <button
                                key={code}
                                type="button"
                                onClick={() => setLang(code)}
                                aria-pressed={lang === code}
                                aria-label={locale.name}
                                lang={code}
                                className={`rounded px-1.5 py-1 transition-colors duration-150 ease-out ${lang === code ? 'text-ink' : 'text-bark/60 hover:text-ink'}`}
                            >
                                {locale.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}
