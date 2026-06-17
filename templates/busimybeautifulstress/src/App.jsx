import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



tailwind.config = {
theme: {
extend: {
colors: {
rose: {
50: '#fff1f2',
100: '#ffe4e6',
200: '#fecdd3',
300: '#fda4af',
400: '#fb7185',
500: '#f43f5e',
600: '#e11d48',
700: '#be123c',
800: '#9f1239',
900: '#881337',
}
},
fontFamily: {
serif: ['Instrument Serif', 'serif'],
sans: ['Manrope', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const { useState, useEffect, useRef, useMemo } = React;
      const { motion, AnimatePresence, useMotionValue, useTransform, useSpring } = window.Motion;

      // 3D Tilt Card Component
      const TiltCard = ({ url, caption, onClick }) => {
          const ref = useRef(null);
          const x = useMotionValue(0);
          const y = useMotionValue(0);

          const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
          const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

          const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
          const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

          const handleMouseMove = (e) => {
              if (!ref.current) return;
              const rect = ref.current.getBoundingClientRect();
              const width = rect.width;
              const height = rect.height;
              const mouseXRel = e.clientX - rect.left;
              const mouseYRel = e.clientY - rect.top;
              x.set((mouseXRel / width) - 0.5);
              y.set((mouseYRel / height) - 0.5);
          };

          const handleMouseLeave = () => {
              x.set(0);
              y.set(0);
          };

          return (
              <motion.div
                  ref={ref}
                  style={{perspective: 1000, rotateX, rotateY}}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onClick({ url, caption })}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative cursor-pointer group w-full"
              >
                  <div className="aspect-[3/4] overflow-hidden rounded-xl bg-white p-2 shadow-sm border border-rose-100 transition-shadow duration-300 hover:shadow-xl hover:border-rose-200">
                      <div className="w-full h-full overflow-hidden rounded-lg relative bg-rose-50">
                          <img
                              src={url}
                              alt={caption}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                              <p className="text-white font-normal text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{caption}</p>
                          </div>
                      </div>
                  </div>
              </motion.div>
          );
      };

      const App = () => {
          // Changed default tab to 'memories' so you can see images immediately
          const [activeTab, setActiveTab] = useState('memories'); 
          const [lightboxItem, setLightboxItem] = useState(null);
          const [noButtonPosition, setNoButtonPosition] = useState({ top: 'auto', left: 'auto', position: 'relative' });
          const [isNoButtonMoved, setIsNoButtonMoved] = useState(false);

          const containerRef = useRef(null);
          const noBtnRef = useRef(null);

          const triggerConfetti = () => {
              const duration = 3000;
              const end = Date.now() + duration;
              const colors = ['#e11d48', '#fb7185', '#ffffff'];

              (function frame() {
                  confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 }, colors });
                  confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 }, colors });
                  if (Date.now() < end) requestAnimationFrame(frame);
              }());
          };

          const handleAccept = () => {
              triggerConfetti();
              setActiveTab('success');
          };

          const moveNoButton = () => {
              if (!containerRef.current) return;
              const containerRect = containerRef.current.getBoundingClientRect();
              const btnWidth = 100;
              const btnHeight = 60;
              const maxX = containerRect.width - btnWidth - 40;
              const maxY = containerRect.height - btnHeight - 40;
              const newX = Math.random() * maxX + 20;
              const newY = Math.random() * maxY + 20;

              setNoButtonPosition({
                  position: 'absolute',
                  left: `${newX}px`,
                  top: `${newY}px`
              });
              setIsNoButtonMoved(true);
          };

          return (
              <div className="w-full h-full flex flex-col items-center justify-center p-4 relative overflow-hidden">

                  {/* Floating Orbs */}
                  <div className="fixed top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-rose-200/50 rounded-full blur-[80px] pointer-events-none mix-blend-multiply animate-pulse" />
                  <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-rose-300/40 rounded-full blur-[80px] pointer-events-none mix-blend-multiply" />

                  {/* Main Card */}
                  <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="glass-panel w-full max-w-5xl h-[85vh] md:h-[800px] rounded-[2rem] flex flex-col relative overflow-hidden z-10"
                  >

                      {/* Header */}
                      <div className="h-16 md:h-20 border-b border-white/50 flex items-center justify-between px-6 md:px-8 shrink-0 bg-white/30 relative z-20">
                          <div className="flex items-center gap-2.5 text-rose-900">
                              <div className="bg-rose-100 p-1.5 rounded-full flex items-center justify-center text-rose-600">
                                  <iconify-icon icon="solar:heart-bold" width="20" height="20"></iconify-icon>
                              </div>
                              <span className="font-serif italic text-xl md:text-2xl font-normal tracking-wide">For Busisiwe</span>
                          </div>

                          {activeTab !== 'success' && (
                              <div className="flex bg-white/50 backdrop-blur-md rounded-full p-1 border border-white/60">
                                  <button
                                      onClick={() => setActiveTab('memories')}
                                      className={`px-4 py-1.5 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'memories' ? 'bg-white text-rose-900 shadow-sm' : 'text-rose-800/60 hover:text-rose-900 hover:bg-white/30'}`}
                                  >
                                      <iconify-icon icon="solar:gallery-linear" width="16"></iconify-icon>
                                      <span className="hidden md:inline">Memories</span>
                                  </button>
                                  <button
                                      onClick={() => setActiveTab('proposal')}
                                      className={`px-4 py-1.5 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'proposal' ? 'bg-white text-rose-900 shadow-sm' : 'text-rose-800/60 hover:text-rose-900 hover:bg-white/30'}`}
                                  >
                                      <iconify-icon icon="solar:sparkle-linear" width="16"></iconify-icon>
                                      <span className="hidden md:inline">Question</span>
                                  </button>
                              </div>
                          )}
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 relative w-full overflow-hidden bg-white/20">
                          <AnimatePresence mode="wait">

                              {/* MEMORIES TAB */}
                              {activeTab === 'memories' && (
                                  <motion.div
                                      key="memories"
                                      initial={{ opacity: 0, x: 10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -10 }}
                                      transition={{ duration: 0.3 }}
                                      className="absolute inset-0 overflow-y-auto custom-scroll p-6 md:p-10"
                                  >
                                      <div className="max-w-4xl mx-auto">
                                          <div className="mb-8 md:mb-12 text-center md:text-left">
                                              <h2 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4 leading-tight tracking-tight">
                                                  Our story <span className="italic text-rose-500">so far.</span>
                                              </h2>
                                              <p className="text-rose-800/70 text-base md:text-lg max-w-xl font-normal leading-relaxed">
                                                  Every moment with you is my favorite memory.
                                              </p>
                                          </div>

                                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pb-20">

                                              {/* Images with matching URLs to hidden assets */}
                                              <TiltCard
                                                  url="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16b6dfab-e83a-4033-a7cf-f57f7238b4dd_3840w.jpg?w=800&q=80"
                                                  caption="Our First Date"
                                                  onClick={setLightboxItem}
                                              />

                                              <TiltCard
                                                  url="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07b38706-1520-4de5-a317-1ae4f500f179_3840w.jpg?w=800&q=80"
                                                  caption="Summer Trip"
                                                  onClick={setLightboxItem}
                                              />

                                              <TiltCard
                                                  url="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80ce323e-9a75-4e2b-ae04-11feecf1b926_3840w.jpg"
                                                  caption="Coffee Mornings"
                                                  onClick={setLightboxItem}
                                              />

                                              <TiltCard
                                                  url="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bbef9c07-1158-49d7-9cf1-e1b3d464191d_3840w.jpg"
                                                  caption="Adventures"
                                                  onClick={setLightboxItem}
                                              />

                                          </div>
                                      </div>
                                  </motion.div>
                              )}

                              {/* PROPOSAL TAB */}
                              {activeTab === 'proposal' && (
                                  <motion.div
                                      key="proposal"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                                      ref={containerRef}
                                  >
                                      <div className="max-w-xl relative z-10 pointer-events-none select-none">
                                          <motion.div
                                              initial={{ y: 20, opacity: 0 }}
                                              animate={{ y: 0, opacity: 1 }}
                                              transition={{ delay: 0.1 }}
                                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 border border-rose-200 text-rose-800 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-6 md:mb-8"
                                          >
                                              <iconify-icon icon="solar:star-linear"></iconify-icon>
                                              Vital Question
                                          </motion.div>

                                          <motion.h1
                                              initial={{ scale: 0.95, opacity: 0 }}
                                              animate={{ scale: 1, opacity: 1 }}
                                              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                                              className="font-serif text-5xl md:text-7xl lg:text-8xl text-rose-900 mb-6 leading-[1] tracking-tight"
                                          >
                                              Busisiwe, <br/>will you be my <span className="italic text-rose-500 block md:inline">Valentine?</span>
                                          </motion.h1>

                                          <motion.p
                                              initial={{ y: 10, opacity: 0 }}
                                              animate={{ y: 0, opacity: 1 }}
                                              transition={{ delay: 0.3 }}
                                              className="text-rose-800/60 text-base md:text-xl mb-12 font-normal"
                                          >
                                              There's no one else I'd rather annoy with my love.
                                          </motion.p>
                                      </div>

                                      <div className="w-full h-32 md:h-24 relative flex justify-center items-center z-20 pointer-events-auto">
                                          <div className="flex gap-6 md:gap-8 items-center justify-center w-full h-full">

                                              {/* Yes Button */}
                                              <motion.button
                                                  whileHover={{ scale: 1.05 }}
                                                  whileTap={{ scale: 0.95 }}
                                                  onClick={handleAccept}
                                                  className="bg-rose-600 hover:bg-rose-500 text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg shadow-rose-600/30 transition-colors flex items-center gap-2"
                                              >
                                                  <iconify-icon icon="solar:heart-angle-bold"></iconify-icon>
                                                  Yes
                                              </motion.button>

                                              {/* No Button */}
                                              <motion.button
                                                  ref={noBtnRef}
                                                  onMouseEnter={moveNoButton}
                                                  onTouchStart={(e) => {
                                                      moveNoButton();
                                                  }}
                                                  onClick={moveNoButton}
                                                  animate={{
                                                      left: noButtonPosition.left,
                                                      top: noButtonPosition.top,
                                                      position: noButtonPosition.position
                                                  }}
                                                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                                  className="bg-white text-rose-900 border border-rose-200 px-8 py-4 rounded-full text-lg font-normal hover:bg-rose-50 hover:border-rose-300 transition-colors shadow-sm cursor-pointer z-50 whitespace-nowrap"
                                              >
                                                  No
                                              </motion.button>
                                          </div>
                                      </div>
                                  </motion.div>
                              )}

                              {/* SUCCESS TAB */}
                              {activeTab === 'success' && (
                                  <motion.div
                                      key="success"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ duration: 0.8 }}
                                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-white/40"
                                  >
                                      <motion.div
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          transition={{ type: "spring", duration: 1.2, bounce: 0.5 }}
                                          className="text-rose-600 mb-6 bg-white p-6 rounded-full shadow-xl shadow-rose-200"
                                      >
                                          <iconify-icon icon="solar:heart-bold" width="64" height="64"></iconify-icon>
                                      </motion.div>

                                      <motion.h2
                                          initial={{ y: 20, opacity: 0 }}
                                          animate={{ y: 0, opacity: 1 }}
                                          transition={{ delay: 0.3 }}
                                          className="font-serif text-5xl md:text-7xl text-rose-900 mb-4 tracking-tight"
                                      >
                                          She said Yes!
                                      </motion.h2>

                                      <motion.p
                                          initial={{ y: 20, opacity: 0 }}
                                          animate={{ y: 0, opacity: 1 }}
                                          transition={{ delay: 0.5 }}
                                          className="text-rose-800 text-lg md:text-xl max-w-md font-normal mb-10"
                                      >
                                          My heart is yours, Busisiwe. I can't wait to celebrate with you.
                                      </motion.p>

                                      <motion.button
                                          initial={{ y: 20, opacity: 0 }}
                                          animate={{ y: 0, opacity: 1 }}
                                          transition={{ delay: 0.7 }}
                                          onClick={() => setActiveTab('memories')}
                                          className="text-rose-600 hover:text-rose-800 font-medium text-sm md:text-base flex items-center gap-2 px-8 py-3 rounded-full bg-white border border-rose-100 hover:border-rose-300 transition-all shadow-sm"
                                      >
                                          <iconify-icon icon="solar:gallery-linear" width="18"></iconify-icon>
                                          See our memories
                                      </motion.button>
                                  </motion.div>
                              )}
                          </AnimatePresence>
                      </div>
                  </motion.div>

                  {/* Copyright/Footer */}
                  <div className="fixed bottom-3 text-[10px] text-rose-900/20 font-semibold tracking-[0.2em] uppercase select-none z-0">
                      Made with Love
                  </div>

                  {/* Lightbox Overlay */}
                  <AnimatePresence>
                      {lightboxItem && (
                          <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rose-950/60 backdrop-blur-xl"
                              onClick={() => setLightboxItem(null)}
                          >
                              <motion.div
                                  initial={{ scale: 0.9, y: 20 }}
                                  animate={{ scale: 1, y: 0 }}
                                  exit={{ scale: 0.9, y: 20 }}
                                  className="relative w-full max-w-4xl max-h-[90vh] flex flex-col items-center"
                                  onClick={(e) => e.stopPropagation()}
                              >
                                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white w-auto max-w-full max-h-[80vh]">
                                      <img src={lightboxItem.url} alt={lightboxItem.caption} className="w-auto h-auto max-w-full max-h-[80vh] object-contain block" />
                                  </div>
                                  <div className="mt-6 text-center">
                                      <p className="font-serif text-3xl text-white drop-shadow-md">{lightboxItem.caption}</p>
                                  </div>
                                  <button
                                      onClick={() => setLightboxItem(null)}
                                      className="absolute -top-12 right-0 md:-right-12 text-white/80 hover:text-white transition-colors"
                                  >
                                      <iconify-icon icon="solar:close-circle-linear" width="40"></iconify-icon>
                                  </button>
                              </motion.div>
                          </motion.div>
                      )}
                  </AnimatePresence>

              </div>
          );
      };

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="absolute top-0 left-0 w-px h-px opacity-0 overflow-hidden pointer-events-none -z-10">
<img alt="Asset 1" className="object-cover w-full h-auto" data-label="First Date" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46bd1e4f-8f1a-4e9b-96d8-1e5ae7831e93_1600w.jpg?w=800&amp;q=80"/>
<img alt="Asset 2" className="object-cover w-full h-auto" data-label="Summer Trip" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4bb240ab-c7de-4b25-bfba-696ae8364207_320w.jpg"/>
<img alt="Asset 3" className="object-cover w-full h-auto" data-label="Coffee" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1039126-9727-44cc-a4c8-c85e2849b3c4_320w.jpg"/>
<img alt="Asset 4" className="object-cover w-full h-auto" data-label="Adventures" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a71cac7d-9d49-40e1-991f-d0d3849922e5_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="w-full h-full" id="root"></div>


    </>
  );
}
