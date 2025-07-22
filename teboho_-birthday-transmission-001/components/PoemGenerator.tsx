import React, { useState, useCallback } from 'react';
import { generatePoem } from '../services/geminiService';

const NeuralIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || 'w-6 h-6'}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 4.5a.75.75 0 00-.75.75v13.5a.75.75 0 001.5 0V5.25A.75.75 0 0012 4.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a3.75 3.75 0 00-3.75 3.75M12 4.5a3.75 3.75 0 013.75 3.75M12 19.5a3.75 3.75 0 00-3.75-3.75M12 19.5a3.75 3.75 0 013.75-3.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25a.75.75 0 00-.75.75v6a.75.75 0 001.5 0v-6A.75.75 0 0012 8.25z" />
    </svg>
);


export const PoemGenerator: React.FC = () => {
  const [keywords, setKeywords] = useState('');
  const [poem, setPoem] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGeneratePoem = useCallback(async () => {
    if (!keywords.trim()) {
      setError('// INPUT REQUIRED: Enter descriptive data points for Teboho.');
      return;
    }
    setIsLoading(true);
    setError('');
    setPoem('');
    try {
      const result = await generatePoem(keywords);
      setPoem(result);
    } catch (err: any) {
      setError(err.message || '// An unexpected error occurred in transmission.');
    } finally {
      setIsLoading(false);
    }
  }, [keywords]);

  return (
    <section className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 border border-magenta-500/30 border-glow-magenta rounded-none">
      <div className="text-center">
        <NeuralIcon className="w-10 h-10 mx-auto text-magenta-400 mb-4" />
        <h2 className="text-3xl md:text-4xl text-magenta-400 text-glow-magenta">Poetic Algorithm: Teboho</h2>
        <p className="mt-3 text-stone-300 max-w-2xl mx-auto font-mono">
          // Provide data points to synthesize a unique poetic sequence.
        </p>
      </div>

      <div className="mt-8 max-w-xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={keywords}
            onChange={(e) => {
              setKeywords(e.target.value);
              if (error) setError('');
            }}
            placeholder="> enter keywords: e.g., star-gazer, defiant, kind..."
            className="flex-grow px-4 py-3 bg-slate-900/50 text-cyan-300 border-2 border-cyan-500/50 rounded-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition duration-200 w-full font-mono placeholder:text-cyan-700"
            disabled={isLoading}
          />
          <button
            onClick={handleGeneratePoem}
            disabled={isLoading || !keywords.trim()}
            className="inline-flex items-center justify-center px-6 py-3 bg-magenta-600 text-white font-bold rounded-none shadow-md hover:bg-magenta-500 hover:shadow-magenta-500/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-magenta-400 transition-all duration-300 disabled:bg-stone-600 disabled:cursor-not-allowed disabled:shadow-none"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                PROCESSING...
              </>
            ) : 'EXECUTE'}
          </button>
        </div>
        {error && <p className="text-red-500 mt-4 text-center font-mono">{error}</p>}
      </div>

      {poem && (
        <div className="mt-10 bg-black/50 p-6 border-l-4 border-magenta-500">
          <p className="text-cyan-200 text-lg whitespace-pre-wrap leading-relaxed font-mono">
            {poem}
          </p>
        </div>
      )}
    </section>
  );
};
