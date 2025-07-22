
import React, { useState } from 'react';
import { PoemGenerator } from './components/PoemGenerator';
import { WishGenerator } from './components/WishGenerator';
import { DancingCat } from './components/DancingCat';

// --- Icon Component ---
const DataChipIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || 'w-6 h-6'}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 21h16.5M3.75 3h16.5M3.75 3H2.25m19.5 0H21.75M3.75 16.5h16.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 8.25h.01M12 8.25h.01M15.75 8.25h.01M8.25 12h.01M12 12h.01M15.75 12h.01M4.5 4.5v.01M4.5 6.75v.01M4.5 9v.01M4.5 11.25v.01M19.5 4.5v.01M19.5 6.75v.01M19.5 9v.01M19.5 11.25v.01" />
  </svg>
);


// --- UI Section Components ---
const Hero: React.FC = () => (
  <header className="text-center py-16 md:py-24 bg-black/20 border-b-2 border-magenta-500/50">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 tracking-wider text-glow-cyan">
        Happy Cycle, Teboho!
      </h1>
      <p className="mt-6 text-lg md:text-xl text-stone-300 max-w-2xl mx-auto font-mono">
        &gt; From Mvuyelwa, transmitting a joy-frequency in recognition of your signal: Gratitude.
        <br />
        &gt; This data-nexus is a tribute to your existence protocol.
      </p>
    </div>
  </header>
);

const Gallery: React.FC = () => {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop', alt: 'A nebula where new stars are born, representing potential.' },
    { id: 2, src: 'https://images.unsplash.com/photo-1620503374956-c942862f0372?q=80&w=2070&auto=format&fit=crop', alt: 'The geometric patterns of a distant, crystalline planet.' },
    { id: 3, src: 'https://images.unsplash.com/photo-1534447677768-be436a0976f2?q=80&w=2070&auto=format&fit=crop', alt: 'Light-speed travel through a warp tunnel.' },
    { id: 4, src: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1974&auto=format&fit=crop', alt: 'A network of glowing nodes, symbolizing connection.' },
    { id: 5, src: 'https://images.unsplash.com/photo-1614728263952-84ea256ec346?q=80&w=1974&auto=format&fit=crop', alt: 'The surface of a sun, a metaphor for a radiant spirit.' },
    { id: 6, src: 'https://images.unsplash.com/photo-1678842642284-a82a5c48b26a?q=80&w=1974&auto=format&fit=crop', alt: 'An alien flower, bioluminescent and unique.' },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-cyan-400 text-glow-cyan">Data Stream Visuals</h2>
        <p className="mt-2 text-stone-400 font-mono">// Archived sensory data to celebrate your cycle.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 px-4 max-w-5xl mx-auto">
        {images.map((image) => (
          <div key={image.id} className="group relative overflow-hidden bg-black">
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-50" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 transition-all duration-300"></div>
            <p className="absolute bottom-0 left-0 p-2 text-white bg-black/50 w-full font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
              {image.alt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="text-center py-10 bg-black/50 text-cyan-200 mt-16 border-t-2 border-magenta-500/50">
    <DataChipIcon className="w-8 h-8 mx-auto mb-4 text-magenta-400"/>
    <p className="text-xl font-display tracking-wide">TRANSMISSION COMPLETE</p>
    <p className="text-lg font-mono mt-1">SOURCE: MVUYELWA</p>
  </footer>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('transmission');

  const getTabClass = (tabName: string) => {
    const baseClass = "px-4 py-2 font-display text-lg border-b-4 transition-colors duration-300 focus:outline-none";
    if (activeTab === tabName) {
        return `${baseClass} border-cyan-400 text-cyan-300`;
    }
    return `${baseClass} border-transparent text-stone-400 hover:text-white hover:border-cyan-700`;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'transmission':
        return (
          <>
            <Hero />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 mt-16 md:mt-24">
              <PoemGenerator />
              <WishGenerator />
              <Gallery />
            </div>
          </>
        );
      case 'cat':
        return <DancingCat />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-stone-200">
      <nav className="bg-black/40 backdrop-blur-sm sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="max-w-5xl mx-auto flex justify-center space-x-2 sm:space-x-4">
            <button onClick={() => setActiveTab('transmission')} className={getTabClass('transmission')}>
                // TRANSMISSION_001
            </button>
            <button onClick={() => setActiveTab('cat')} className={getTabClass('cat')}>
                // ENT_MATRIX_042
            </button>
        </div>
      </nav>
      <main>
        {renderTabContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
