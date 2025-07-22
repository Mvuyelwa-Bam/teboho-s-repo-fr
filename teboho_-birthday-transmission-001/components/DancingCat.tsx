
import React from 'react';

export const DancingCat: React.FC = () => {
    return (
        <section className="text-center py-16 md:py-20 px-4">
            <h2 className="text-4xl text-magenta-400 font-display text-glow-magenta">
                Entertainment Matrix
            </h2>
            <p className="mt-3 text-stone-400 font-mono">
                // Calibrating feline-based joy vectors...
            </p>
            <div className="mt-10 inline-block bg-black/50 p-2 border-2 border-magenta-500/50 border-glow-magenta">
                <img
                    src="https://media.tenor.com/7gO2PSf0-nUAAAAd/funny-cat-dance-cat-dance.gif"
                    alt="A cat in an astronaut suit dancing in space"
                    className="mx-auto max-w-sm w-full"
                />
            </div>
             <p className="mt-6 text-stone-400 font-mono text-sm">
                [Signal Source: Sub-Ether Cat Network]
            </p>
        </section>
    );
};
