import { useEffect, useState, useRef } from 'react';
import DailyIframe from '@daily-co/daily-js';

export default function Chat() {
  const containerRef = useRef(null);
  const [callFrame, setCallFrame] = useState(null);

  const startNewChat = () => {
    if (callFrame) callFrame.destroy();
    
    // BURAYA DAILY.CO ODA URL'NİZİ YAZIN
    const url = "https://turkegle.daily.co/oda-ismi"; 
    
    const frame = DailyIframe.createFrame(containerRef.current, {
      showLeaveButton: false,
      iframeStyle: { width: '100%', height: '100%', borderRadius: '1rem' }
    });
    
    frame.join({ url });
    setCallFrame(frame);
  };

  return (
    <div className="h-screen bg-neutral-900 flex flex-col text-white">
      <header className="bg-turk-red p-4 flex justify-between items-center shadow-lg">
        <h1 className="font-black text-2xl italic">TÜRKEGLE</h1>
        <button onClick={() => window.location.href='/'} className="bg-white text-turk-red px-6 py-1 rounded-full font-bold">Çıkış</button>
      </header>

      <div className="flex-1 p-4 flex flex-col items-center justify-center">
        <div ref={containerRef} className="w-full max-w-5xl h-[65vh] bg-black rounded-3xl border-2 border-white/10 overflow-hidden shadow-2xl" />
        
        <div className="mt-6 flex gap-4 w-full max-w-md">
          <button onClick={startNewChat} className="flex-1 bg-turk-red py-5 rounded-2xl font-black text-2xl hover:bg-red-700 shadow-xl active:scale-95 transition-all">
            SIRADAKİ (ESC)
          </button>
        </div>
      </div>
    </div>
  );
}
