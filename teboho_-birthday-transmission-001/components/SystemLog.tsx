import React, { useState, useEffect } from 'react';

const logLines = [
    '> BOOTING TRANSMISSION PROTOCOL...',
    '> AUTHENTICATING SOURCE: MVUYELWA_UNIT_7',
    '> TARGET RECIPIENT: TEBOHO_PRIME',
    '> ENCRYPTING JOY-FREQUENCY...
    '> CALIBRATING GRATITUDE-RESONANCE...',
    '> ALL SYSTEMS NOMINAL. BEGINNING TRANSMISSION.',
];

const TerminalIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || 'w-6 h-6'}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9.75 6h13.5c.621 0 1.125-.504 1.125-1.125v-9c0-.621-.504-1.125-1.125-1.125h-13.5c-.621 0-1.125.504-1.125 1.125v9c0 .621.504 1.125 1.125 1.125z" />
    </svg>
);


export const SystemLog: React.FC = () => {
    const [visibleLines, setVisibleLines] = useState<string[]>([]);

    useEffect(() => {
        let currentLine = 0;
        setVisibleLines([]); // Reset on re-render, though it shouldn't re-render often

        const interval = setInterval(() => {
            if (currentLine < logLines.length) {
                setVisibleLines(prev => [...prev, logLines[currentLine]]);
                currentLine++;
            } else {
                clearInterval(interval);
            }
        }, 700);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-black/30 backdrop-blur-sm p-6 border border-cyan-500/30 rounded-none">
            <h2 className="flex items-center text-2xl text-cyan-400 font-display">
                <TerminalIcon className="w-6 h-6 mr-3"/>
                TRANSMISSION LOG
            </h2>
             <div className="mt-4 pl-4 border-l-2 border-cyan-800/50">
                {visibleLines.map((line, index) => (
                    <p key={index} className="text-green-400 font-mono mb-1 animate-fadeIn">
                       {line}
                       {index === visibleLines.length - 1 && <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>}
                    </p>
                ))}
            </div>
        </section>
    );
};