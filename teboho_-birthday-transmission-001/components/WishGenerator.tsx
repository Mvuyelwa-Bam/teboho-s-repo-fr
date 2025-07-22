import React, { useState, useCallback } from 'react';
import { generateWish } from '../services/geminiService';

const SignalIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || 'w-6 h-6'}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.136 11.886c3.87-3.87 10.154-3.87 14.024 0M19.5 21v-4.5M19.5 3v4.5M4.5 21v-4.5M4.5 3v4.5M12 21v-1.5M12 3v1.5m0 9a.75.75 0 01-.75-.75V12a.75.75 0 011.5 0v1.5A.75.75 0 0112 13.5z" />
    </svg>
);

export const WishGenerator: React.FC = () => {
    const [wish, setWish] = useState('// Awaiting signal... Press button to generate transmission.');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateWish = useCallback(async () => {
        setIsLoading(true);
        const result = await generateWish();
        setWish(result);
        setIsLoading(false);
    }, []);

    return (
        <section className="text-center p-8">
            <h2 className="text-3xl md:text-4xl text-cyan-400 text-glow-cyan">Cosmic Transmission</h2>
            <p className="mt-3 text-stone-300 max-w-xl mx-auto font-mono">
                // Request a randomized data-packet of good fortune from the cosmos.
            </p>

            <div className="mt-8">
                 <button
                    onClick={handleGenerateWish}
                    disabled={isLoading}
                    className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 text-white font-bold rounded-full shadow-lg hover:bg-cyan-500 hover:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-400 transition-all duration-300 transform hover:scale-105 disabled:bg-stone-600 disabled:shadow-none"
                >
                    {isLoading ? (
                         <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            TRANSMITTING...
                         </>
                    ) : (
                        <>
                            <SignalIcon className="w-6 h-6 mr-3" />
                            Generate Wish Transmission
                        </>
                    )}
                </button>
            </div>
            
            {!isLoading && (
                 <div className="mt-8 max-w-2xl mx-auto min-h-[6rem] flex items-center justify-center p-4 bg-black/20 border border-cyan-500/20">
                    <p className="text-xl md:text-2xl text-cyan-300 font-mono transition-opacity duration-500">
                        {wish}
                    </p>
                 </div>
            )}
        </section>
    );
};
