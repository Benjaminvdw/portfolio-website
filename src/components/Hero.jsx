import { motion } from 'framer-motion'
import hero from '../assets/hero.png'
import DotsCanvas from './DotsCanvas.jsx'
import TypewriterTerminal from './TypewriterTerminal.jsx'
import HeroPhysics from './HeroPhysics.jsx'
import { useLanguage } from '../hooks/useLanguage'

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative w-full">
            <DotsCanvas />
            <HeroPhysics />
            <div className="relative z-30 mx-auto grid max-w-5xl items-center gap-10 px-6 py-24 md:grid-cols-2">
                <div className="flex flex-col gap-8">
                    <TypewriterTerminal />
                    <div className="flex gap-3">
                        <a href="#werk" className="rounded-lg bg-bark px-5 py-2 text-sand hover:bg-olive transition-colors">{t.hero.viewWork}</a>
                        <a href="#contact" className="rounded-lg border border-bark px-5 py-2 hover:bg-bark/10 transition-colors">{t.hero.contact}</a>
                    </div>
                </div>
                <motion.img 
                    src={hero} 
                    alt="Ik" 
                    className="relative z-30 aspect-square w-full cursor-grab rounded-xl object-cover active:cursor-grabbing shadow-2xl bg-stone/20"
                    drag
                    dragSnapToOrigin
                    whileDrag={{ scale: 1.1, rotate: 5 }}
                    whileHover={{ scale: 1.05 }}
                />
            </div>
        </section>
    )
}
