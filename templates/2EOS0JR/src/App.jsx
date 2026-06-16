import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ["Inter", "ui-sans-serif", "system-ui"],
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
                    dot.className = 'w-4 h-4 rounded-full bg-white transition-all scale-125';
                } else {
                    dot.className = 'w-4 h-4 rounded-full bg-gray-600 hover:bg-gray-300 transition-all';
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-5xl bg-white/5 border-white/5 border rounded-3xl mt-8 mr-auto ml-auto pt-24 pr-8 pb-24 pl-8">
<div className="flex items-center justify-between gap-8">
<div className="flex-1 max-w-lg pr-8">
<div className="flex items-center gap-2 text-gray-400 mb-6">
<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
<span className="uppercase text-xs font-medium tracking-wide">EcoFlow Solutions</span>
</div>
<h1 className="text-4xl font-medium tracking-tighter mb-6">Technology Stack</h1>
<p className="text-base text-gray-400 mb-8">Drag cards to explore our technology solutions and discover how we're building innovative platforms.</p>
<div className="flex gap-3 mb-8">
<button className="w-2 h-2 rounded-full bg-gray-600 hover:bg-gray-300 transition-all" id="dot-1"></button>
<button className="w-2 h-2 rounded-full bg-gray-600 hover:bg-gray-300 transition-all" id="dot-2"></button>
<button className="w-2 h-2 rounded-full bg-gray-600 hover:bg-gray-300 transition-all" id="dot-3"></button>
<button className="w-2 h-2 transition-all bg-white rounded-full scale-125" id="dot-4"></button>
</div>
<div className="space-y-4 text-sm text-gray-400">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
<span className="">AI-powered analytics platform</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
<span className="">Real-time optimization engine</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
<span className="">Intelligent automation tools</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
<span className="">Comprehensive reporting suite</span>
</div>
</div>
</div>
<section className="card-4-active" id="cards-container">
<article className="relative h-96 glass rounded-2xl shadow-2xl rotate-x-10 -rotate-y-20">
<div className="h-full flex flex-col pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-full bg-white/10 border border-white/20">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<span className="text-xs uppercase tracking-wide text-gray-300 font-medium">Analytics</span>
</div>
<h3 className="text-2xl font-semibold mb-4">Data Intelligence</h3>
<p className="text-gray-300 mb-6 flex-1">
                            Advanced analytics platform that processes complex data streams and provides actionable insights through machine learning algorithms.
                        </p>
<div className="flex items-center gap-4 text-sm mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
<span className="text-gray-400">98% accuracy</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
<span className="text-gray-400">Real-time processing</span>
</div>
</div>
<button className="w-full py-3 px-4 glass rounded-lg text-white hover:bg-white/10 transition-colors">
                            Improve insights by 40%
                        </button>
</div>
</article>
<article className="relative h-96 glass rounded-2xl shadow-2xl rotate-x-10 -rotate-y-20">
<div className="h-full flex flex-col p-6">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-full bg-white/10 border border-white/20">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-xs uppercase tracking-wide text-gray-300 font-medium">Performance</span>
</div>
<h3 className="text-2xl font-semibold mb-4">System Optimization</h3>
<p className="text-gray-300 mb-6 flex-1">
                            Intelligent performance monitoring that automatically optimizes system resources based on usage patterns and demand forecasting.
                        </p>
<div className="flex items-center gap-4 text-sm mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
<span className="text-gray-400">24/7 monitoring</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
<span className="text-gray-400">Auto-scaling</span>
</div>
</div>
<button className="w-full py-3 px-4 glass rounded-lg text-white hover:bg-white/10 transition-colors">
                            Boost efficiency by 35%
                        </button>
</div>
</article>
<article className="relative h-96 glass rounded-2xl shadow-2xl rotate-x-10 -rotate-y-20">
<div className="h-full flex flex-col p-6">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-full bg-white/10 border border-white/20">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>
</div>
<span className="text-xs uppercase tracking-wide text-gray-300 font-medium">Automation</span>
</div>
<h3 className="text-2xl font-semibold mb-4">Process Automation</h3>
<p className="text-gray-300 mb-6 flex-1">
                            Streamline workflows with intelligent automation. Connect systems, automate tasks, and create efficient operational processes.
                        </p>
<div className="flex items-center gap-4 text-sm mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
<span className="text-gray-400">Zero downtime</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
<span className="text-gray-400">Smart workflows</span>
</div>
</div>
<button className="w-full py-3 px-4 glass rounded-lg text-white hover:bg-white/10 transition-colors">
                            Automate 90% of tasks
                        </button>
</div>
</article>
<article className="relative h-96 glass rounded-2xl shadow-2xl rotate-x-10 -rotate-y-20">
<div className="h-full flex flex-col pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-full bg-white/10 border border-white/20">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-xs uppercase tracking-wide text-gray-300 font-medium">Reporting</span>
</div>
<h3 className="text-2xl font-semibold mb-4">Business Intelligence</h3>
<p className="flex-1 text-gray-300 mb-6">
                            Comprehensive reporting suite that transforms raw data into meaningful visualizations and actionable business insights.
                        </p>
<div className="flex items-center gap-4 text-sm mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
<span className="text-gray-400">Custom dashboards</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
<span className="text-gray-400">Real-time updates</span>
</div>
</div>
<button className="w-full py-3 px-4 glass rounded-lg text-white hover:bg-white/10 transition-colors">
                            Enhanced reporting suite
                        </button>
</div>
</article>
</section>
</div>
</div>


    </>
  );
}
