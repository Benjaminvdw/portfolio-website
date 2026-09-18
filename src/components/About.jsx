import woods from '../assets/woods.png'

export default function About() {
    return (
        <section id="over" className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 md:grid-cols-[3fr_2fr]">
            <div>
                <h2 className="text-4xl">Over mij</h2>
                <p className="mt-4 leading-relaxed">
                    Ik ben Benjamin, student aan het MediaCollege Amsterdam. Ik bouw
                    websites en webapps, meestal met React, Tailwind en Vite, en ik
                    vind hoe iets aanvoelt uiteindelijk net zo belangrijk als hoe het
                    onder de motorkap werkt. Het uitzoeken is voor mij het leukste deel
                    van dit vak: een idee stukje bij beetje ombouwen tot iets dat echt
                    klopt. Op dit moment werk ik aan BrambleBeat, een co-op rhythm game voor twee spelers.
                    Buiten het schermwerk speel ik graag spelletjes, maak ik lange natuurwandelingen en verzamel ik graag muziekplaten.
                </p>
            </div>
            <img className="w-full rounded-xl object-cover" src={woods} alt="" />
        </section>
    )
}
