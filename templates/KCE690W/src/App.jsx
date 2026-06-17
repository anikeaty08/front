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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ["Inter", "ui-sans-serif", "system-ui"],
            },
            colors: {
              surface: {
                DEFAULT: "#0f1419",
                foreground: "#1a2332",
              },
            },
          },
        },
      };
    


        lucide.createIcons();
        
        const container = document.getElementById('cards-container');
        const cards = document.querySelectorAll('article');
        const dots = document.querySelectorAll('[id^="dot-"]');
        let activeCardId = 1;
        
        cards.forEach((card, index) => {
            let startX, isDragging = false;
            
            card.addEventListener('mousedown', e => startDrag(e, index + 1));
            card.addEventListener('touchstart', e => {
                e.preventDefault();
                startDrag(e.touches[0], index + 1);
            });
            
            function startDrag(e, cardId) {
                if (cardId !== activeCardId) return;
                isDragging = true;
                startX = e.clientX;
                
                document.addEventListener('mousemove', drag);
                document.addEventListener('touchmove', e => drag(e.touches[0]));
                document.addEventListener('mouseup', endDrag);
                document.addEventListener('touchend', endDrag);
            }
            
            function drag(e) {
                if (!isDragging) return;
                const diff = e.clientX - startX;
                
                if (diff > 10) {
                    card.classList.add('dragging-right');
                    card.classList.remove('dragging-left');
                } else if (diff < -10) {
                    card.classList.add('dragging-left');
                    card.classList.remove('dragging-right');
                } else {
                    card.classList.remove('dragging-left', 'dragging-right');
                }
            }
            
            function endDrag() {
                if (!isDragging) return;
                isDragging = false;
                
                if (card.classList.contains('dragging-right')) {
                    navigateToCard(activeCardId === 1 ? 4 : activeCardId - 1);
                } else if (card.classList.contains('dragging-left')) {
                    navigateToCard(activeCardId === 4 ? 1 : activeCardId + 1);
                }
                
                card.classList.remove('dragging-left', 'dragging-right');
                document.removeEventListener('mousemove', drag);
                document.removeEventListener('touchmove', drag);
                document.removeEventListener('mouseup', endDrag);
                document.removeEventListener('touchend', endDrag);
            }
        });
        
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const cardId = parseInt(dot.id.split('-')[1]);
                navigateToCard(cardId);
            });
        });
        
        function navigateToCard(cardId) {
            activeCardId = cardId;
            container.className = `card-${cardId}-active`;
            
            dots.forEach((dot, index) => {
                if (index + 1 === cardId) {
                    dot.className = 'w-3 h-3 rounded-full bg-green-500 transition-all scale-125';
                } else {
                    dot.className = 'w-3 h-3 rounded-full bg-slate-600 hover:bg-green-400 transition-all';
                }
            });
        }
    
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
      
<div className="text-center mb-24">
<div className="flex items-center justify-center gap-2 text-green-400 mb-4">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-sm font-medium uppercase tracking-wide">EcoFlow Solutions</span>
</div>
<h1 className="text-4xl font-semibold mb-3">Green Technology Stack</h1>
<p className="text-slate-400 max-w-md">Drag cards to explore our sustainable technology solutions</p>
</div>
<section className="card-4-active" id="cards-container">
<article className="relative h-96 rounded-2xl bg-gradient-to-br from-slate-800/90 to-green-900/30 backdrop-blur-md border border-green-500/20 shadow-2xl">
<div className="h-full flex flex-col pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-full bg-green-500/20 border border-green-500/30">
<svg className="lucide lucide-leaf w-5 h-5 text-green-400" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<span className="text-xs uppercase tracking-wide text-green-400 font-medium">Carbon Analytics</span>
</div>
<h3 className="text-2xl font-semibold mb-4">Smart Carbon Tracking</h3>
<p className="text-slate-300 mb-6 flex-1">
                    Real-time monitoring of your organization's carbon footprint with AI-powered insights. Track emissions across all operations and achieve net-zero goals.
                </p>
<div className="flex items-center gap-4 text-sm mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="text-slate-400">98% accuracy</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="text-slate-400">Real-time data</span>
</div>
</div>
<button className="w-full py-3 px-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 hover:bg-green-500/20 transition-colors">
                    Reduce emissions by 40%
                </button>
</div>
</article>
<article className="relative h-96 rounded-2xl bg-gradient-to-br from-slate-800/90 to-blue-900/30 backdrop-blur-md border border-blue-500/20 shadow-2xl">
<div className="p-6 h-full flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-full bg-blue-500/20 border border-blue-500/30">
<svg className="lucide lucide-zap w-5 h-5 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-xs uppercase tracking-wide text-blue-400 font-medium">Energy Management</span>
</div>
<h3 className="text-2xl font-semibold mb-4">Intelligent Power Control</h3>
<p className="text-slate-300 mb-6 flex-1">
                    AI-driven energy optimization that automatically adjusts power consumption based on usage patterns, weather, and grid demand.
                </p>
<div className="flex items-center gap-4 text-sm mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="text-slate-400">24/7 monitoring</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="text-slate-400">Auto-optimization</span>
</div>
</div>
<button className="w-full py-3 px-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/20 transition-colors">
                    Save up to 35% on energy
                </button>
</div>
</article>
<article className="relative h-96 rounded-2xl bg-gradient-to-br from-slate-800/90 to-purple-900/30 backdrop-blur-md border border-purple-500/20 shadow-2xl">
<div className="p-6 h-full flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-full bg-purple-500/20 border border-purple-500/30">
<svg className="lucide lucide-recycle w-5 h-5 text-purple-400" data-lucide="recycle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>
</div>
<span className="text-xs uppercase tracking-wide text-purple-400 font-medium">Waste Reduction</span>
</div>
<h3 className="text-2xl font-semibold mb-4">Circular Economy Hub</h3>
<p className="text-slate-300 mb-6 flex-1">
                    Transform waste streams into valuable resources. Connect with suppliers, track materials, and create sustainable supply chains.
                </p>
<div className="flex items-center gap-4 text-sm mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
<span className="text-slate-400">Zero waste goal</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
<span className="text-slate-400">Material tracking</span>
</div>
</div>
<button className="w-full py-3 px-4 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400 hover:bg-purple-500/20 transition-colors">
                    Achieve 90% waste diversion
                </button>
</div>
</article>
<article className="relative h-96 rounded-2xl bg-gradient-to-br from-slate-800/90 to-amber-900/30 backdrop-blur-md border border-amber-500/20 shadow-2xl">
<div className="h-full flex flex-col pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-full bg-amber-500/20 border border-amber-500/30">
<svg className="lucide lucide-trending-up w-5 h-5 text-amber-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-xs uppercase tracking-wide text-amber-400 font-medium">ESG Reporting</span>
</div>
<h3 className="text-2xl font-semibold mb-4">Sustainability Dashboard</h3>
<p className="flex-1 text-slate-300 mb-6">
                    Comprehensive ESG reporting tools that automatically generate sustainability reports and ensure regulatory compliance.
                </p>
<div className="flex items-center gap-4 text-sm mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-amber-400 rounded-full"></div>
<span className="text-slate-400">Automated reports</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-amber-400 rounded-full"></div>
<span className="text-slate-400">Compliance ready</span>
</div>
</div>
<button className="w-full py-3 px-4 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400 hover:bg-amber-500/20 transition-colors">
                    Streamline ESG compliance
                </button>
</div>
</article>
</section>
<div className="flex gap-2 mt-8">
<button className="w-3 h-3 rounded-full bg-slate-600 hover:bg-green-400 transition-all" id="dot-1"></button>
<button className="w-3 h-3 rounded-full bg-slate-600 hover:bg-green-400 transition-all" id="dot-2"></button>
<button className="w-3 h-3 rounded-full bg-slate-600 hover:bg-green-400 transition-all" id="dot-3"></button>
<button className="w-3 h-3 rounded-full bg-green-500 transition-all scale-125" id="dot-4"></button>
</div>


    </>
  );
}
