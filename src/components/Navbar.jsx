const links = [
    { href: '#werk', label: 'Werk' },
    { href: '#over', label: 'Over mij' },
    { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
    return (
        <header className="sticky top-0 z-10 bg-ink text-sand">
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
