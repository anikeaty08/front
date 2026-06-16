import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
},
gray: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
}
},
fontFamily: {
serif: ['Instrument Serif', 'serif'],
sans: ['Manrope', 'sans-serif'],
},
fontSize: {
xxs: '0.65rem',
}
}
}
}



      const { useState, useEffect, useRef, memo, useCallback } = React;
      const { motion, AnimatePresence, useMotionValue, useTransform, useSpring } = window.Motion;

      // ==========================================
      // CONFIGURATION
      // ==========================================
      
      const ENABLE_EDIT_BUTTON = true;

      const INITIAL_MEMORIES = [
          { 
            id: 1, 
            url: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=1000", 
            caption: "The Queen",
            type: 'image'
          },
          { 
            id: 2, 
            url: "https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=1000", 
            caption: "My Person",
            type: 'image'
          }
      ];

      // ==========================================

      const Icon = memo(({ name, className, size = 24 }) => {
        return <iconify-icon icon={`solar:${name}-linear`} width={size} height={size} class={className} style={{ strokeWidth: '1.5px' }}></iconify-icon>;
      });

      const EditModal = ({ isOpen, onClose, memories, setMemories, texts, setTexts }) => {
        const [localMemories, setLocalMemories] = useState(memories);
        const [localTexts, setLocalTexts] = useState(texts);

        useEffect(() => {
          if(isOpen) {
            setLocalMemories(memories);
            setLocalTexts(texts);
          }
        }, [isOpen, memories, texts]);

        const handleImageUpload = (e, id) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setLocalMemories(prev => prev.map(m => m.id === id ? { ...m, url: reader.result } : m));
            };
            reader.readAsDataURL(file);
          }
        };

        const updateMemory = (id, field, value) => {
          setLocalMemories(prev => prev.map(m => m.id === id ? { ...m, [field]: value } : m));
        };

        const addNewMemory = () => {
          const newId = Math.max(...localMemories.map(m => m.id), 0) + 1;
          setLocalMemories([...localMemories, { id: newId, url: "https://placehold.co/600x800/ffe4e6/be123c?text=New+Memory", caption: "New Memory", type: 'image' }]);
        };

        const removeMemory = (id) => {
          setLocalMemories(prev => prev.filter(m => m.id !== id));
        };

        const handleSave = () => {
          setMemories(localMemories);
          setTexts(localTexts);
          onClose();
        };

        const updateText = (key, value) => {
            setLocalTexts(prev => ({...prev, [key]: value}));
        }

        if (!isOpen) return null;

        return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-rose-950/20 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white w-full max-w-2xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-rose-100"
            >
              <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h3 className="font-semibold text-rose-900 text-lg flex items-center gap-2">
                  <Icon name="pen-new-square" size={20} />
                  Customize Content
                </h3>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
                  <Icon name="close-circle" size={24} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scroll">
                
                {/* Texts Section */}
                <div className="space-y-4">
                    <h4 className="text-sm font-bold text-rose-900/50 uppercase tracking-wider">Messages</h4>
                    <div className="grid gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">Title (Top Left)</label>
                            <input type="text" value={localTexts.title} onChange={(e) => updateText('title', e.target.value)} className="w-full text-sm p-2 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">Badge Text</label>
                            <input type="text" value={localTexts.badge} onChange={(e) => updateText('badge', e.target.value)} className="w-full text-sm p-2 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all" />
                        </div>
                         <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">Proposal Question</label>
                            <textarea rows={2} value={localTexts.proposal} onChange={(e) => updateText('proposal', e.target.value)} className="w-full text-sm p-2 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all" />
                        </div>
                    </div>
                </div>

                {/* Memories Section */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <h4 className="text-sm font-bold text-rose-900/50 uppercase tracking-wider">Memories</h4>
                    <button onClick={addNewMemory} className="text-xs bg-rose-50 text-rose-600 px-3 py-1.5 rounded-full hover:bg-rose-100 font-medium transition-colors border border-rose-200">
                      + Add Item
                    </button>
                  </div>
                  
                  <div className="grid gap-4">
                    {localMemories.map((mem, idx) => (
                      <div key={mem.id} className="p-4 rounded-xl border border-gray-200 bg-gray-50/30 flex gap-4 items-start group hover:border-rose-200 transition-colors">
                        <div className="relative w-20 h-20 shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:opacity-90">
                          <img src={mem.url} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                          <input 
                            type="file" 
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer z-10"
                            onChange={(e) => handleImageUpload(e, mem.id)}
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-medium transition-opacity pointer-events-none">
                            Change
                          </div>
                        </div>
                        
                        <div className="flex-1 space-y-3">
                          <input 
                            type="text" 
                            value={mem.caption}
                            onChange={(e) => updateMemory(mem.id, 'caption', e.target.value)}
                            placeholder="Caption..."
                            className="w-full text-sm bg-transparent border-b border-gray-200 focus:border-rose-500 outline-none py-1 transition-colors"
                          />
                          <input 
                            type="text" 
                            value={mem.url}
                            onChange={(e) => updateMemory(mem.id, 'url', e.target.value)}
                            placeholder="Image URL (or upload)"
                            className="w-full text-xs text-gray-400 bg-transparent border-none outline-none p-0 focus:ring-0"
                          />
                        </div>

                        <button onClick={() => removeMemory(mem.id)} className="text-gray-400 hover:text-rose-500 p-1">
                          <Icon name="trash-bin-trash" size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 border-t border-gray-100 bg-white flex justify-end gap-3">
                <button onClick={onClose} className="px-5 py-2.5 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors">Cancel</button>
                <button onClick={handleSave} className="px-6 py-2.5 rounded-full text-sm font-medium bg-rose-600 text-white hover:bg-rose-700 shadow-md shadow-rose-200 transition-all">Save Changes</button>
              </div>
            </motion.div>
          </div>
        );
      };

      const FleetingButton = memo(({ containerRef }) => {
          const [position, setPosition] = useState({ top: 'auto', left: 'auto', position: 'relative' });
          
          const moveButton = useCallback((e) => {
              if (e && e.preventDefault) e.preventDefault();
              if (!containerRef.current) return;
              
              const containerRect = containerRef.current.getBoundingClientRect();
              const maxX = containerRect.width - 120;
              const maxY = containerRect.height - 80;
              
              const newX = Math.max(20, Math.random() * maxX);
              const newY = Math.max(20, Math.random() * maxY);
              
              setPosition({ 
                  position: 'absolute', 
                  left: `${newX}px`, 
                  top: `${newY}px` 
              });
          }, [containerRef]);

          return (
              <motion.button
                  onMouseEnter={moveButton}
                  onTouchStart={moveButton}
                  onClick={moveButton}
                  animate={{
                      left: position.left,
                      top: position.top,
                      position: position.position
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 20, mass: 0.5 }}
                  className="bg-white/60 backdrop-blur-md text-rose-900 border border-rose-200/80 px-10 py-5 rounded-full text-xl font-light hover:bg-white/80 hover:border-rose-300 transition-colors shadow-sm cursor-pointer z-50 whitespace-nowrap hardware-accel select-none"
                  style={{ touchAction: 'none' }}
              >
                  No
              </motion.button>
          );
      });

      const TiltCard = memo(({ url, caption, onClick }) => {
          const ref = useRef(null);
          const x = useMotionValue(0);
          const y = useMotionValue(0);
          
          const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
          const mouseY = useSpring(y, { stiffness: 150, damping: 20 });
          const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
          const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

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
              x.set(0); y.set(0);
          };

          return (
              <motion.div
                  ref={ref}
                  style={{ perspective: 1000, rotateX, rotateY }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onClick({ url, caption })}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="relative cursor-pointer group w-full hardware-accel"
              >
                  <div className="aspect-[3/4] overflow-hidden rounded-xl bg-white p-1.5 shadow-[0_2px_10px_-4px_rgba(225,29,72,0.1)] border border-rose-100/50 transition-all duration-300 group-hover:shadow-[0_20px_40px_-12px_rgba(225,29,72,0.15)] group-hover:border-rose-200">
                      <div className="w-full h-full overflow-hidden rounded-[0.6rem] relative bg-rose-50">
                          <img
                              src={url}
                              alt={caption}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                              decoding="async"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-rose-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                              <p className="text-white font-normal text-base translate-y-2 group-hover:translate-y-0 transition-transform duration-300 tracking-wide shadow-black/5 drop-shadow-md">{caption}</p>
                          </div>
                      </div>
                  </div>
              </motion.div>
          );
      });

      const App = () => {
          const [activeTab, setActiveTab] = useState('proposal'); 
          const [lightboxItem, setLightboxItem] = useState(null);
          const [isEditOpen, setIsEditOpen] = useState(false);
          const [memories, setMemories] = useState(INITIAL_MEMORIES);
          const [texts, setTexts] = useState({
              title: "For Buhle",
              storyTitle: "The Story of",
              badge: "Queen B",
              h2Start: "Moments with",
              h2Highlight: "Tokyo B.",
              desc: "Every second with my beautiful healthy stress makes life infinitely more colorful.",
              proposalBadge: "My Beautiful Healthy Stress",
              proposal: "Tokyo B, will you be my Valentine?",
              success: "She said Yes!",
              successMsg: "Can't wait to celebrate. My beautiful healthy stress, you are my favorite person."
          });

          const containerRef = useRef(null);

          const triggerConfetti = useCallback(() => {
              const duration = 2500;
              const end = Date.now() + duration;
              const colors = ['#e11d48', '#fb7185', '#ffffff'];
              
              const frame = () => {
                  if (Date.now() > end) return;
                  confetti({ particleCount: 2, angle: 60, spread: 55, origin: { x: 0 }, colors, disableForReducedMotion: true });
                  confetti({ particleCount: 2, angle: 120, spread: 55, origin: { x: 1 }, colors, disableForReducedMotion: true });
                  requestAnimationFrame(frame);
              };
              frame();
          }, []);

          return (
              <div className="w-full h-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
                  {/* Background */}
                  <div className="fixed top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-rose-200/40 rounded-full blur-[80px] pointer-events-none mix-blend-multiply hardware-accel" />
                  <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-rose-300/30 rounded-full blur-[80px] pointer-events-none mix-blend-multiply hardware-accel" />

                  {/* Main Panel */}
                  <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="glass-panel w-full max-w-6xl h-[85vh] md:h-[800px] rounded-[2rem] flex flex-col relative overflow-hidden z-10"
                  >
                      {/* Header */}
                      <div className="h-20 md:h-24 border-b border-white/60 flex items-center justify-between px-8 md:px-10 shrink-0 bg-white/40 relative z-20">
                          <div className="flex items-center gap-4 text-rose-950">
                              <div className="bg-gradient-to-br from-rose-50 to-rose-100/50 border border-rose-200/60 p-2 rounded-full flex items-center justify-center text-rose-600 shadow-sm">
                                  <Icon name="heart-angle" size={20} />
                              </div>
                              <span className="font-serif italic text-2xl md:text-3xl font-light tracking-wide">{texts.title}</span>
                          </div>

                          <div className="flex items-center gap-4">
                              {activeTab !== 'success' && (
                                  <div className="flex bg-white/60 backdrop-blur-xl rounded-full p-1.5 border border-white/60 shadow-sm ring-1 ring-white/50">
                                      <button
                                          onClick={() => setActiveTab('memories')}
                                          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'memories' ? 'bg-white text-rose-900 shadow-sm ring-1 ring-black/5' : 'text-rose-900/60 hover:text-rose-900 hover:bg-white/40'}`}
                                      >
                                          <Icon name="gallery-minimalistic" size={18} />
                                          <span className="hidden md:inline">Memories</span>
                                      </button>
                                      <button
                                          onClick={() => setActiveTab('proposal')}
                                          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'proposal' ? 'bg-white text-rose-900 shadow-sm ring-1 ring-black/5' : 'text-rose-900/60 hover:text-rose-900 hover:bg-white/40'}`}
                                      >
                                          <Icon name="stars-minimalistic" size={18} />
                                          <span className="hidden md:inline">Question</span>
                                      </button>
                                  </div>
                              )}
                              
                              {ENABLE_EDIT_BUTTON && (
                                <button 
                                  onClick={() => setIsEditOpen(true)}
                                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/50 hover:bg-white text-rose-900/50 hover:text-rose-600 transition-all border border-white/60"
                                >
                                  <Icon name="settings-minimalistic" size={20} />
                                </button>
                              )}
                          </div>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 relative w-full overflow-hidden bg-white/30">
                          <AnimatePresence mode="wait" initial={false}>
                              {/* MEMORIES TAB */}
                              {activeTab === 'memories' && (
                                  <motion.div
                                      key="memories"
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -20 }}
                                      transition={{ duration: 0.3, ease: "easeOut" }}
                                      className="absolute inset-0 overflow-y-auto custom-scroll p-8 md:p-12"
                                  >
                                      <div className="max-w-5xl mx-auto">
                                          <div className="mb-12 text-center md:text-left">
                                              <div className="flex items-center justify-center md:justify-start gap-2.5 mb-4">
                                                <span className="text-xs uppercase tracking-[0.2em] text-rose-800/60 font-medium">{texts.storyTitle}</span>
                                                <span className="bg-rose-100 text-rose-700 text-xs px-2.5 py-0.5 rounded-full border border-rose-200/60 font-medium uppercase tracking-wider shadow-sm">{texts.badge}</span>
                                              </div>
                                              <h2 className="font-serif text-5xl md:text-7xl text-rose-950 mb-5 leading-tight tracking-tight-custom">
                                                  {texts.h2Start} <span className="italic text-rose-500">{texts.h2Highlight}</span>
                                              </h2>
                                              <p className="text-rose-900/70 text-base md:text-lg max-w-xl font-light leading-relaxed">
                                                  {texts.desc}
                                              </p>
                                          </div>

                                          <div className="grid grid-cols-2 gap-6 md:gap-8 pb-32 max-w-2xl">
                                              {memories.map((memory) => (
                                                  <TiltCard 
                                                      key={memory.id}
                                                      url={memory.url}
                                                      caption={memory.caption} 
                                                      onClick={setLightboxItem} 
                                                  />
                                              ))}
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
                                      transition={{ duration: 0.3 }}
                                      className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                                      ref={containerRef}
                                  >
                                      <div className="max-w-4xl relative z-10 pointer-events-none select-none flex flex-col items-center">
                                          <motion.div
                                              initial={{ y: 20, opacity: 0 }}
                                              animate={{ y: 0, opacity: 1 }}
                                              transition={{ delay: 0.1 }}
                                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-rose-200 text-rose-800 text-xs md:text-sm font-medium tracking-widest uppercase mb-10 shadow-sm backdrop-blur-sm"
                                          >
                                              <Icon name="crown" size={16} />
                                              {texts.proposalBadge}
                                          </motion.div>

                                          <motion.h1
                                              initial={{ scale: 0.95, opacity: 0 }}
                                              animate={{ scale: 1, opacity: 1 }}
                                              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                                              className="font-serif text-6xl md:text-8xl lg:text-9xl text-rose-950 mb-8 leading-[0.95] tracking-tight-custom whitespace-pre-line"
                                          >
                                              {texts.proposal}
                                          </motion.h1>

                                          <motion.p
                                              initial={{ y: 10, opacity: 0 }}
                                              animate={{ y: 0, opacity: 1 }}
                                              transition={{ delay: 0.3 }}
                                              className="text-rose-900/60 text-lg md:text-xl mb-16 font-light"
                                          >
                                              Life is just better with Queen B by my side.
                                          </motion.p>
                                      </div>

                                      <div className="w-full h-32 md:h-32 relative flex justify-center items-center z-20 pointer-events-auto">
                                          <div className="flex gap-8 md:gap-10 items-center justify-center w-full h-full relative">
                                              <motion.button
                                                  whileHover={{ scale: 1.05 }}
                                                  whileTap={{ scale: 0.95 }}
                                                  onClick={() => { triggerConfetti(); setActiveTab('success'); }}
                                                  className="bg-rose-600 hover:bg-rose-500 text-white px-12 py-5 rounded-full text-xl font-medium shadow-xl shadow-rose-600/25 transition-all duration-300 flex items-center gap-3 border border-rose-500 z-40"
                                              >
                                                  <Icon name="heart-angle" size={24} className="text-white/90" />
                                                  Yes
                                              </motion.button>
                                              
                                              <FleetingButton containerRef={containerRef} />
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
                                      transition={{ duration: 0.6 }}
                                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white/40 backdrop-blur-[2px]"
                                  >
                                      <motion.div
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          transition={{ type: "spring", duration: 1, bounce: 0.5 }}
                                          className="text-rose-600 mb-10 bg-white p-10 rounded-full shadow-2xl shadow-rose-200/50 border border-rose-50 ring-4 ring-rose-50/50"
                                      >
                                          <Icon name="heart-angle" size={64} />
                                      </motion.div>

                                      <motion.h2
                                          initial={{ y: 20, opacity: 0 }}
                                          animate={{ y: 0, opacity: 1 }}
                                          transition={{ delay: 0.2 }}
                                          className="font-serif text-6xl md:text-8xl text-rose-950 mb-8 tracking-tight-custom"
                                      >
                                          {texts.success}
                                      </motion.h2>

                                      <motion.p
                                          initial={{ y: 20, opacity: 0 }}
                                          animate={{ y: 0, opacity: 1 }}
                                          transition={{ delay: 0.3 }}
                                          className="text-rose-900/80 text-xl max-w-lg font-light mb-16 leading-relaxed"
                                      >
                                          {texts.successMsg}
                                      </motion.p>

                                      <motion.button
                                          initial={{ y: 20, opacity: 0 }}
                                          animate={{ y: 0, opacity: 1 }}
                                          transition={{ delay: 0.4 }}
                                          onClick={() => setActiveTab('memories')}
                                          className="text-rose-700 hover:text-rose-900 font-medium text-base flex items-center gap-2.5 px-10 py-4 rounded-full bg-white border border-rose-100 hover:border-rose-300 transition-all shadow-sm hover:shadow-md"
                                      >
                                          <Icon name="gallery-minimalistic" size={20} />
                                          View our memories
                                      </motion.button>
                                  </motion.div>
                              )}
                          </AnimatePresence>
                      </div>
                  </motion.div>

                  {/* Footer */}
                  <div className="fixed bottom-6 text-xs text-rose-900/30 font-medium tracking-[0.25em] uppercase select-none z-0">
                      Made with Love for Queen B
                  </div>

                  {/* Lightbox */}
                  <AnimatePresence>
                      {lightboxItem && (
                          <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-rose-950/70 backdrop-blur-sm"
                              onClick={() => setLightboxItem(null)}
                          >
                              <motion.div
                                  initial={{ scale: 0.95, y: 10 }}
                                  animate={{ scale: 1, y: 0 }}
                                  exit={{ scale: 0.95, y: 10 }}
                                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                  className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center"
                                  onClick={(e) => e.stopPropagation()}
                              >
                                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white w-auto max-w-full max-h-[80vh]">
                                      <img src={lightboxItem.url} referrerPolicy="no-referrer" alt={lightboxItem.caption} className="w-auto h-auto max-w-full max-h-[80vh] object-contain block" loading="eager" />
                                  </div>
                                  <div className="mt-8 text-center">
                                      <p className="font-serif text-4xl text-white drop-shadow-md">{lightboxItem.caption}</p>
                                  </div>
                                  <button
                                      onClick={() => setLightboxItem(null)}
                                      className="absolute -top-16 right-0 md:-right-16 text-white/70 hover:text-white transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-md"
                                  >
                                      <Icon name="close-circle" size={32} />
                                  </button>
                              </motion.div>
                          </motion.div>
                      )}
                  </AnimatePresence>
                  
                  {/* Edit Modal */}
                  <EditModal 
                    isOpen={isEditOpen} 
                    onClose={() => setIsEditOpen(false)} 
                    memories={memories} 
                    setMemories={setMemories}
                    texts={texts}
                    setTexts={setTexts}
                  />
              </div>
          );
      };

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full h-full" id="root"></div>


    </>
  );
}
