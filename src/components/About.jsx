import woods from '../assets/woods.jpg'
import { useLanguage } from '../hooks/useLanguage'

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="over" className="scroll-mt-14 border-t border-ink/10 py-24">
            <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-[7fr_5fr]">
                <div>
                    <h2 className="text-4xl font-medium tracking-[-0.02em]">{t.about.title}</h2>
                    <div className="mt-6 max-w-xl space-y-4 text-[17px] leading-7 text-bark">
                        {t.about.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    <dl className="mt-10 max-w-xl divide-y divide-ink/10 border-y border-ink/10">
                        {t.about.facts.map(([label, value]) => (
                            <div key={label} className="grid grid-cols-[8rem_1fr] gap-4 py-3 text-[15px]">
                                <dt className="font-mono text-xs leading-6 text-muted">{label}</dt>
                                <dd>{value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <img
                    src={woods}
                    alt={t.about.photoAlt}
                    loading="lazy"
                    className="aspect-[4/5] w-full rounded-2xl bg-raised object-cover"
                />
            </div>
        </section>
    )
}
