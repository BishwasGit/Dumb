import { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { Lotus } from './components/Lotus';
import { PetalShower } from './components/PetalShower';
import { Compliment } from './components/Compliment';
import { SurpriseClicks } from './components/SurpriseClicks';
import { FloatingSurprises } from './components/FloatingSurprises';
import { AngryQuestion } from './components/AngryQuestion';

function App() {
  const [hasBloomed, setHasBloomed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Placeholder audio handling
  // In a real app, use ref to HTMLAudioElement
  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click burst
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">

      {/* Background Ambience */}
      {hasBloomed && <PetalShower />}

      {/* Interaction Layer */}
      {hasBloomed && <SurpriseClicks />}
      {hasBloomed && <FloatingSurprises />}
      {hasBloomed && <AngryQuestion />}

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center gap-8 md:gap-12 w-full max-w-md">
        <Lotus onBloomComplete={() => setHasBloomed(true)} />

        <div className="h-16 w-full flex items-center justify-center">
          <Compliment show={hasBloomed} />
        </div>
      </div>

      {/* Audio Toggle (Corner) */}
      <button
        onClick={toggleAudio}
        className="fixed top-4 right-4 z-50 p-3 bg-white/30 backdrop-blur-md rounded-full text-lotus-600 hover:bg-white/50 transition-colors"
        aria-label="Toggle music"
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>

      {/* Intro Overlay (Optional) */}
      {!hasBloomed && (
        <div className="fixed inset-0 pointer-events-none flex items-end justify-center pb-20 opacity-50">
          <p className="text-lotus-400 font-sans text-sm animate-pulse">Wait for the bloom...</p>
        </div>
      )}
    </div>
  );
}

export default App;
