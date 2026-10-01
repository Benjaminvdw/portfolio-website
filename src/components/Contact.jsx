import { useState } from 'react';
import confetti from 'canvas-confetti';
import github from '../assets/github-142-svgrepo-com.svg';
import linkedin from '../assets/linkedin-161-svgrepo-com.svg';
import { useLanguage } from '../hooks/useLanguage';

export default function Contact() {
    const { t } = useLanguage();
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [mousePos, setMousePos] = useState(null);

    const handleButtonClick = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const x = mousePos ? mousePos.x : window.innerWidth / 2;
        const y = mousePos ? mousePos.y : window.innerHeight / 2;
        const xRatio = x / window.innerWidth;
        const yRatio = y / window.innerHeight;

        setStatus('submitting');
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("https://formsubmit.co/ajax/Benjaminvanderwesten@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    _subject: "Nieuw bericht via portfolio!"
                })
            });

            if (res.ok) {
                setStatus('success');
                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { x: xRatio, y: yRatio },
                    colors: ['#736027', '#D9C9BA', '#A6998F', '#594725'],
                    disableForReducedMotion: true,
                    zIndex: 100
                });
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <footer id="contact" className="bg-ink text-sand relative z-30">
            <div className="mx-auto grid max-w-5xl gap-16 px-6 py-24 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">{t.contact.title}</h2>
                    <p className="mt-6 text-stone/90 leading-relaxed text-lg">
                        {t.contact.subtitle}
                    </p>
                    <div className="mt-8">
                        <a href="mailto:Benjaminvanderwesten@gmail.com" className="text-xl font-medium text-olive hover:text-sand transition-colors">
                            Benjaminvanderwesten@gmail.com
                        </a>
                    </div>
                    <div className="mt-10 flex gap-4">
                        <a href="https://github.com/Benjaminvdw" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 rounded-full bg-bark/40 hover:bg-olive transition-colors group">
                            <img src={github} alt="" className="h-6 w-6 invert opacity-80 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a href="https://www.linkedin.com/in/benjamin-van-der-westen-834265333/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 rounded-full bg-bark/40 hover:bg-olive transition-colors group">
                            <img src={linkedin} alt="" className="h-6 w-6 invert opacity-80 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>

                <div className="bg-bark/20 p-8 rounded-3xl border border-stone/10 shadow-2xl">
                    {status === 'success' ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-5 py-10">
                            <div className="w-20 h-20 rounded-full bg-olive flex items-center justify-center text-ink text-4xl font-bold mb-2">
                                ✓
                            </div>
                            <h3 className="text-3xl font-semibold text-sand">{t.contact.successTitle}</h3>
                            <p className="text-stone">{t.contact.successSubtitle}</p>
                            <button 
                                onClick={() => setStatus('idle')}
                                className="mt-8 px-6 py-2 rounded-lg border border-olive text-olive hover:bg-olive hover:text-ink transition-colors font-medium"
                            >
                                {t.contact.sendAnother}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            {status === 'error' && (
                                <div className="text-red-400 bg-red-900/20 border border-red-900/50 rounded-lg p-3 text-sm text-center">
                                    {t.contact.error}
                                </div>
                            )}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-stone mb-2">{t.contact.name}</label>
                                <input required type="text" name="name" id="name" className="w-full rounded-xl bg-ink/40 border border-stone/20 px-4 py-3 text-sand focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-colors" placeholder={t.contact.namePlaceholder} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-stone mb-2">{t.contact.email}</label>
                                <input required type="email" name="email" id="email" className="w-full rounded-xl bg-ink/40 border border-stone/20 px-4 py-3 text-sand focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-colors" placeholder={t.contact.emailPlaceholder} />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone mb-2">{t.contact.message}</label>
                                <textarea required name="message" id="message" rows="4" className="w-full rounded-xl bg-ink/40 border border-stone/20 px-4 py-3 text-sand focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-colors resize-none" placeholder={t.contact.messagePlaceholder}></textarea>
                            </div>
                            {/* formsubmit.co requires a honeypot to prevent spam */}
                            <input type="text" name="_honey" style={{ display: 'none' }} />
                            <button 
                                type="submit" 
                                onClick={handleButtonClick}
                                disabled={status === 'submitting'}
                                className="mt-4 w-full rounded-xl bg-olive text-ink font-bold text-lg px-4 py-4 hover:bg-sand hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100 flex justify-center items-center shadow-lg shadow-olive/20"
                            >
                                {status === 'submitting' ? t.contact.sending : t.contact.send}
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <p className="border-t border-stone/10 py-8 text-center text-sm text-stone/60 font-mono">
                © {new Date().getFullYear()} Benjamin van der Westen
            </p>
        </footer>
    );
}
