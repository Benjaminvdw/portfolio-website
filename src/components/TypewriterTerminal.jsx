import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

export default function TypewriterTerminal() {
    const { t } = useLanguage();
    const [step, setStep] = useState(0); 
    const command = "cat developer.json";
    const [displayedCommand, setDisplayedCommand] = useState("");

    useEffect(() => {
        if (step === 0) {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayedCommand(command.slice(0, i + 1));
                i++;
                if (i === command.length) {
                    clearInterval(interval);
                    setTimeout(() => setStep(1), 400);
                }
            }, 80);
            return () => clearInterval(interval);
        }
    }, [step]);

    return (
        <div className="w-full rounded-xl bg-[#1e1e1e] p-5 font-mono text-sm shadow-2xl border border-stone/20 relative z-20">
            {/* Mac Window Controls */}
            <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>

            <div className="text-sand">
                <span className="text-olive font-bold">benji@portfolio</span><span className="text-stone">:~ $</span> {displayedCommand}
                {step === 0 && <span className="animate-pulse">_</span>}
            </div>

            {step === 1 && (
                <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                >
                    <pre className="text-sand overflow-x-auto whitespace-pre-wrap leading-relaxed">
{"{\n"}
{"  "}<span className="text-blue-300">"name"</span>{": "}<span className="text-green-300">"Benjamin van der Westen"</span>{",\n"}
{"  "}<span className="text-blue-300">"role"</span>{": "}<span className="text-green-300">"{t.terminal.role}"</span>{",\n"}
{"  "}<span className="text-blue-300">"skills"</span>{": [\n"}
{"    "}<span className="text-green-300">"React"</span>{", "}<span className="text-green-300">"TailwindCSS"</span>{", "}<span className="text-green-300">"Lua"</span>{", "}<span className="text-green-300">"Typescript"</span>{"\n"}
{"  ],\n"}
{"  "}<span className="text-blue-300">"status"</span>{": "}<span className="text-yellow-300">"{t.terminal.status}"</span>{"\n"}
{"}"}
                    </pre>
                </motion.div>
            )}
        </div>
    );
}
