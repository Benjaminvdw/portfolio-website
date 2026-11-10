import { useState } from 'react';
import { Check } from 'lucide-react';
import github from '../assets/github-142-svgrepo-com.svg';
import linkedin from '../assets/linkedin-161-svgrepo-com.svg';
import { useLanguage } from '../hooks/useLanguage';

const fieldClass = 'w-full rounded-lg border border-sand/10 bg-sand/5 px-4 py-3 text-sand placeholder:text-stone/70 transition-colors duration-150 ease-out focus:border-olive-light focus:outline-none';
const labelClass = 'mb-2 block text-sm text-stone';

export default function Contact() {
    const { t } = useLanguage();
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const data = Object.fromEntries(new FormData(e.target).entries());

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
                    _honey: data._honey,
                    _subject: "Nieuw bericht via portfolio"
                })
            });
            setStatus(res.ok ? 'success' : 'error');
        } catch {
            setStatus('error');
        }
    };

    return (
        <footer id="contact" className="scroll-mt-14 bg-ink text-sand">
            <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 md:grid-cols-2">
                <div>
                    <h2 className="text-4xl font-medium tracking-[-0.02em]">{t.contact.title}</h2>
                    <p className="mt-6 max-w-md text-[17px] leading-7 text-stone">
                        {t.contact.subtitle}
                    </p>
                    <a
                        href="mailto:Benjaminvanderwesten@gmail.com"
                        className="mt-8 inline-block break-all text-lg font-medium text-sand underline decoration-sand/30 underline-offset-4 transition-colors duration-150 ease-out hover:decoration-olive-light"
                    >
                        Benjaminvanderwesten@gmail.com
                    </a>
                    <div className="mt-8 flex gap-3">
                        <a href="https://github.com/Benjaminvdw" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-lg border border-sand/10 transition-colors duration-150 ease-out hover:bg-sand/10">
                            <img src={github} alt="" className="h-[18px] w-[18px] opacity-80 invert" />
                        </a>
                        <a href="https://www.linkedin.com/in/benjamin-van-der-westen-834265333/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-lg border border-sand/10 transition-colors duration-150 ease-out hover:bg-sand/10">
                            <img src={linkedin} alt="" className="h-[18px] w-[18px] opacity-80 invert" />
                        </a>
                    </div>
                </div>

                <div className="rounded-2xl border border-sand/10 bg-sand/5 p-6">
                    {status === 'success' ? (
                        <div className="flex h-full flex-col items-start justify-center py-8">
                            <span className="grid h-10 w-10 place-items-center rounded-lg bg-olive-light/15 text-olive-light">
                                <Check size={18} strokeWidth={1.5} />
                            </span>
                            <h3 className="mt-6 text-2xl font-medium">{t.contact.successTitle}</h3>
                            <p className="mt-2 text-stone">{t.contact.successSubtitle}</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-8 text-sm font-medium text-sand underline decoration-sand/30 underline-offset-4 transition-colors duration-150 ease-out hover:decoration-olive-light"
                            >
                                {t.contact.sendAnother}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            {status === 'error' && (
                                <p className="rounded-lg border border-[#e5484d]/30 bg-[#e5484d]/10 px-4 py-3 text-sm text-[#f2a5a7]">
                                    {t.contact.error}
                                </p>
                            )}
                            <div>
                                <label htmlFor="name" className={labelClass}>{t.contact.name}</label>
                                <input required type="text" name="name" id="name" className={fieldClass} placeholder={t.contact.namePlaceholder} />
                            </div>
                            <div>
                                <label htmlFor="email" className={labelClass}>{t.contact.email}</label>
                                <input required type="email" name="email" id="email" className={fieldClass} placeholder={t.contact.emailPlaceholder} />
                            </div>
                            <div>
                                <label htmlFor="message" className={labelClass}>{t.contact.message}</label>
                                <textarea required name="message" id="message" rows="4" className={`${fieldClass} resize-none`} placeholder={t.contact.messagePlaceholder}></textarea>
                            </div>
                            {/* formsubmit.co requires a honeypot to prevent spam */}
                            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="mt-2 h-12 rounded-lg bg-sand font-medium text-ink transition-[background-color,transform] duration-150 ease-out hover:bg-card active:scale-[0.98] disabled:opacity-50"
                            >
                                {status === 'submitting' ? t.contact.sending : t.contact.send}
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <p className="border-t border-sand/10 py-8 text-center font-mono text-xs text-stone">
                © {new Date().getFullYear()} Benjamin van der Westen
            </p>
        </footer>
    );
}
