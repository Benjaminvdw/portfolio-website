import { motion } from 'framer-motion'
import hero from '../assets/hero.png'
import { useLanguage } from '../hooks/useLanguage'

const ease = [0.22, 1, 0.36, 1]

// One short fade and rise on load, staggered down the text column.
const rise = (i) => ({
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease, delay: 0.05 + i * 0.05 },
})

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-5xl content-center items-center gap-12 px-6 py-16 md:grid-cols-[7fr_5fr]">
            <div>
                <motion.p {...rise(0)} className="text-base font-medium text-bark">
                    {t.hero.name}
                </motion.p>
                <motion.h1 {...rise(1)} className="mt-4 text-4xl leading-[1.05] font-medium tracking-[-0.03em] text-balance md:text-[64px]">
                    {t.hero.title}
                </motion.h1>
                <motion.p {...rise(2)} className="mt-6 max-w-xl text-lg leading-7 text-bark">
                    {t.hero.subtitle}
                </motion.p>
                <motion.div {...rise(3)} className="mt-10 flex flex-wrap gap-3">
                    <a href="#werk" className="flex h-12 items-center rounded-lg bg-olive px-5 font-medium text-card transition-[background-color,transform] duration-150 ease-out hover:bg-bark active:scale-[0.98]">
                        {t.hero.viewWork}
                    </a>
                    <a href="#contact" className="flex h-12 items-center rounded-lg border border-ink/10 bg-card px-5 font-medium transition-[background-color,transform] duration-150 ease-out hover:bg-raised active:scale-[0.98]">
                        {t.hero.contact}
                    </a>
                </motion.div>
            </div>
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease }}
                src={hero}
                alt={t.hero.photoAlt}
                className="aspect-[4/3] w-full rounded-2xl bg-raised object-cover object-[50%_30%] md:aspect-[4/5] shadow-[0_8px_24px_rgba(38,32,1,0.08)]"
            />
        </section>
    )
}
