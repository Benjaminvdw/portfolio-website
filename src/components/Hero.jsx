import hero from '../assets/hero.png'

export default function Hero() {
    return (
        <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-24 md:grid-cols-2">
            <div>
                <h1 className="text-4xl md:text-5xl">Benjamin van der Westen</h1>
                <p className="mt-3 text-olive">{'>'}Fullstack developer</p>
                <div className="mt-8 flex gap-3">
                    <a href="#werk" className="rounded-lg bg-bark px-5 py-2 text-sand">Bekijk werk</a>
                    <a href="#contact" className="rounded-lg border border-bark px-5 py-2">Contact</a>
                </div>
            </div>
            <img src={hero} alt="Ik" className="aspect-square w-full rounded-xl object-cover" />
        </section>
    )
}
