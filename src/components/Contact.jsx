import github from '../assets/github-142-svgrepo-com.svg'
import linkedin from '../assets/linkedin-161-svgrepo-com.svg'

export default function Contact() {
    return (
        <footer id="contact" className="bg-ink text-sand">
            <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-2">
                <div>
                    <h2 className="text-4xl">Contact</h2>
                    <p className="mt-4 text-stone">Neem contact op.</p>
                    <p>Benjaminvanderwesten@gmail.com</p>
                    <div className="mt-6 flex gap-4">
                        <a href="https://github.com/Benjaminvdw" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <img src={github} alt="" className="h-7 w-7 invert opacity-80 hover:opacity-100" />
                        </a>
                        <a href="https://www.linkedin.com/in/benjamin-van-der-westen-834265333/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <img src={linkedin} alt="" className="h-7 w-7 invert opacity-80 hover:opacity-100" />
                        </a>
                    </div>
                </div>
            </div>
            <p className="border-t border-bark py-6 text-center text-xs text-stone">
                © {new Date().getFullYear()} Benjamin van der Westen
            </p>
        </footer>
    )
}
