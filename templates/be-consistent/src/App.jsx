import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        (function() {
                const testimonials = [
                    {
                        quote: "Sakura's intelligence layer automated 40% of our manual project tracking. The ROI on engineering focus time was immediate.",
                        name: "Elena Rodriguez",
                        role: "VP Engineering at NovaTech",
                        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop"
                    },
                    {
                        quote: "Finally, a platform that understands context. Sakura allows us to scale our product operations without adding administrative overhead.",
                        name: "David Chen",
                        role: "Director of Product at Nexus",
                        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop"
                    },
                    {
                        quote: "Scaling from 50 to 500 people was chaos until we deployed Sakura. It's the central nervous system our enterprise needed.",
                        name: "Sarah Miller",
                        role: "COO at Vertex Global",
                        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop"
                    },
                    {
                        quote: "Sakura integrated seamlessly with our existing stack. The velocity gains were visible within the first sprint.",
                        name: "Marcus Thorne",
                        role: "Principal Architect at FlowState",
                        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop"
                    },
                    {
                        quote: "The automated workflow orchestration saved our team 20+ hours per week. It's not just a tool, it's a productivity multiplier.",
                        name: "Jessica Wu",
                        role: "Head of Operations at Stripe",
                        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop"
                    },
                    {
                        quote: "We replaced three different tools with Sakura. The unified data view has completely transformed our decision-making process.",
                        name: "Alex Thompson",
                        role: "CTO at Linear",
                        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop"
                    },
                    {
                        quote: "Deployment velocity increased by 3x after adopting Sakura. The insights it provides are invaluable for our growth.",
                        name: "Emily Clark",
                        role: "VP Product at Vercel",
                        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop"
                    },
                    {
                        quote: "The interface is beautiful and the performance is unmatched. Sakura sets a new standard for enterprise software.",
                        name: "Ryan Park",
                        role: "Design Lead at Airbnb",
                        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop"
                    }
                ];

                let currentIndex = 0;
                const batchSize = 4;

                function updateAllCards() {
                    // Fade out all cards
                    const cards = [];
                    for(let i=0; i<batchSize; i++) {
                        const card = document.getElementById(`testimonial-card-${i}`);
                        if(card) {
                            cards.push(card);
                            card.classList.remove('opacity-100');
                            card.classList.add('opacity-0');
                        }
                    }

                    // Wait for fade out, then swap data and fade in
                    setTimeout(() => {
                        currentIndex = (currentIndex + batchSize) % testimonials.length;

                        cards.forEach((card, i) => {
                            const dataIndex = (currentIndex + i) % testimonials.length;
                            const data = testimonials[dataIndex];

                            card.querySelector('.quote-text').textContent = `"${data.quote}"`;
                            card.querySelector('.author-name').textContent = data.name;
                            card.querySelector('.author-role').textContent = data.role;
                            card.querySelector('.avatar-img').src = data.image;

                            // Fade in
                            card.classList.remove('opacity-0');
                            card.classList.add('opacity-100');
                        });
                    }, 500);
                }

                // Start the simultaneous loop
                setInterval(updateAllCards, 5000);
            })();
      


    function toggleFaq(button) {
      const content = button.nextElementSibling;
      const icon = button.querySelector('svg');
      const isOpen = content.classList.contains('grid-rows-[1fr]');

      if (isOpen) {
        content.classList.remove('grid-rows-[1fr]');
        content.classList.add('grid-rows-[0fr]');
        icon.classList.remove('rotate-180');
      } else {
        content.classList.remove('grid-rows-[0fr]');
        content.classList.add('grid-rows-[1fr]');
        icon.classList.add('rotate-180');
      }
    }
  


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed z-0 pointer-events-none top-0 right-0 bottom-0 left-0">
<div className="stars absolute inset-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-[120px] rounded-full bg-blue-900/10"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] blur-[100px] rounded-full bg-blue-950/20"></div>
</div>

<nav className="sticky top-4 z-50 flex items-center justify-between max-w-6xl mx-auto p-2 bg-black border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl">
<a className="w-[140px] h-[45px] bg-[url(https://cdn.midjourney.com/64c5a844-b86f-4916-88a1-6971a20f442f/0_0.png?w=800&amp;q=80)] bg-cover bg-center rounded-lg hover:opacity-80 transition-opacity" href="#">
</a>
<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-xl transition-all font-sans" href="#">
      Home
    </a>
<a className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-xl transition-all font-sans" href="#">
      About
    </a>
<a className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-xl transition-all font-sans" href="#">
      Pricing
    </a>
<div className="relative group">
<button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-400 group-hover:text-white transition-all font-sans">
        Features
        <svg className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-400 hover:text-white transition-colors font-sans" href="#">
      Sign In
    </a>
<a className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95 font-sans" href="#">
      Get Started
    </a>
</div>
</nav>

<main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pt-24 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-20 pl-6 relative items-center">
<div className="absolute inset-0" data-container-bg="true">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>

</div>

<div className="lg:col-span-7 flex flex-col relative items-start z-10">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-neutral-300 animate-entry delay-100">
<svg className="lucide lucide-sparkles w-3 h-3 text-blue-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-sans" style={{}}>
            Productivity Intelligence, Simplified
          </span>
</div>

<h1 className="lg:text-[76px] leading-[1.05] animate-entry delay-150 text-5xl text-white max-w-xl mb-6 font-oswald font-light" style={{}}>
      Workflows Unified Scalable Productivity
    </h1>

<p className="text-lg text-neutral-400 max-w-xl mb-10 leading-relaxed animate-entry delay-200 font-sans" style={{}}>
      Stop relying on scattered tools. Sakura unifies your tasks, docs, and
      goals to automate insights across your entire organization.
    </p>

<div className="flex flex-wrap gap-6 items-center animate-entry delay-300">
<button className="group relative px-8 py-3.5 rounded-full bg-blue-600 text-white text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_8px_rgba(37,99,235,0.35)] active:scale-95 overflow-hidden">
<div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="relative flex items-center justify-center gap-2">
<span className="font-sans">Explore Design</span>
</div>
</button>
<button className="relative px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white text-lg font-medium backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-blue-400 flex items-center gap-2">
<span className="font-sans">View Features</span>
</button>
</div>
</div>

<div className="lg:col-span-5 flex lg:justify-end lg:mt-0 animate-entry delay-500 z-10 mt-0 relative justify-center">

<div className="electric-card overflow-hidden bg-neutral-900 w-[360px] rounded-[32px] pt-[2px] pr-[2px] pb-[2px] pl-[2px] relative">

<div className="absolute inset-0 bg-gradient-to-b to-transparent opacity-80 z-0 from-indigo-500 via-blue-600 from-blue-600/10">
</div>

<div className="z-10 flex flex-col overflow-hidden bg-[#0A0A0A] h-full rounded-[30px] pt-8 pr-8 pb-8 pl-8 relative items-start" style={{}}>

<div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-indigo-500/10 to-transparent"></div>

<div className="flex justify-between w-full items-center mb-6 relative">
<span className="text-[10px] uppercase text-neutral-400 border border-white/10 px-2 py-1 rounded bg-white/5 flex items-center gap-1.5 font-sans" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
          Live Schedule
          </span>
<span className="text-[10px] font-mono text-neutral-500 tracking-wider font-sans" style={{}}>
                OCT 24
              </span>
</div>
<h3 className="text-xl text-white mb-2 tracking-tight font-sans" style={{}}>
          Daily Focus
        </h3>
<p className="text-xs text-neutral-400 mb-6 leading-relaxed font-sans" style={{}}>
          You have 4 tasks remaining today.
        </p>

<div className="w-full mb-8 space-y-3">

<div className="flex items-center gap-3 group">
<div className="w-5 h-5 rounded-[6px] border border-white/10 bg-white/5 flex items-center justify-center text-neutral-500">
<svg className="lucide lucide-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-neutral-500 line-through decoration-neutral-700 font-sans" style={{}}>
                  Review Design System
                </span>
<span className="ml-auto text-[10px] text-neutral-600 font-mono font-sans" style={{}}>
                  09:30
                </span>
</div>

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl opacity-20 blur-sm group-hover:opacity-30 transition-opacity">
</div>
<div className="relative flex items-center gap-3 p-3 rounded-xl bg-[#121212] border border-white/10 shadow-lg">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center shadow-[0_0_10px_rgba(79,70,229,0.4)] text-white">
<svg className="lucide lucide-play" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm text-white font-medium font-sans" style={{}}>
                      Product Launch V2
                    </span>
<div className="flex items-center gap-1.5">
<span className="text-[10px] text-indigo-400 font-sans" style={{}}>
                        In Progress
                      </span>
<span className="w-0.5 h-0.5 rounded-full bg-neutral-600"></span>
<span className="text-[10px] text-neutral-500 font-sans" style={{}}>
                        45m left
                      </span>
</div>
</div>
<span className="ml-auto text-[10px] text-white font-mono bg-white/5 border border-white/5 px-1.5 py-0.5 rounded font-sans" style={{}}>
                    11:00
                  </span>
</div>
</div>

<div className="flex items-center gap-3 group opacity-80">
<div className="w-5 h-5 rounded-[6px] border border-white/20 hover:border-indigo-500/50 transition-colors bg-transparent">
</div>
<span className="text-sm text-neutral-300 font-sans" style={{}}>
                  Quarterly Planning
                </span>
<span className="ml-auto text-[10px] text-neutral-500 font-mono font-sans" style={{}}>
                  14:00
                </span>
</div>
</div>

<button className="hover:brightness-110 transition-all text-sm text-white bg-gradient-to-r w-full border-white/20 rounded-full border-t mb-8 pt-3 pb-3 from-indigo-600 via-blue-600 to-cyan-500 shadow-[0_4px_15px_rgba(79,70,229,0.4)] font-sans" style={{}}>
              Sync Calendar
            </button>

<div className="flex items-center justify-between w-full pt-4 border-t border-white/5">
<div className="flex flex-col gap-1">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider font-sans" style={{}}>
                  Efficiency
                </span>
<div className="flex items-center gap-1.5">
<span className="text-white font-medium font-sans" style={{}}>
                    94%
                  </span>
<span className="text-[10px] text-green-400 bg-green-500/10 px-1 py-px rounded font-sans" style={{}}>
                    +2.4%
                  </span>
</div>
</div>
<div className="flex flex-col gap-1 text-right">
<span className="text-[10px] text-neutral-500 uppercase tracking-wider font-sans" style={{}}>
                  Deep Work
                </span>
<span className="text-white font-medium font-sans" style={{}}>
                  5h 12m
                </span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="-mt-4 lg:-mt-8 animate-entry delay-700 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mx-auto pt-0 px-2.5 lg:px-0 pb-24 relative animate" style={{}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] blur-[100px] rounded-full z-0">
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<div className="overflow-hidden md:col-span-2 lg:col-span-3 lg:bg-black/80 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] bg-neutral-900/80 rounded-2xl ring-white/10 ring-1 relative backdrop-blur-sm animate">

<div className="-top-10 -right-10 w-56 h-56 rounded-full absolute blur-3xl"></div>

<div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-90 z-30">
</div>
<div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-indigo-500/20 via-blue-600/10 to-transparent opacity-90 pointer-events-none z-20">
</div>

<div className="flex sm:px-6 bg-white/5 border-white/5 border-b pt-3 pr-4 pb-3 pl-4 backdrop-blur-md items-center justify-between relative z-20">
<div className="flex items-center gap-3 text-sm text-neutral-400">
<a className="inline-flex items-center gap-2 text-white transition-colors font-sans" href="#" style={{}}>
            Sakura
          </a>
<span className="opacity-40 font-sans" style={{}}>/</span>
<span className="text-white font-sans" style={{}}>Workspace</span>
<span className="inline text-[11px] font-sans" style={{}}>
<span className="w-1.5 h-1.5 rounded-full animate-pulse"></span>
          Syncing
          </span>
</div>

<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 bg-black/40 ring-1 ring-white/10 rounded-lg pl-2.5 pr-2.5 h-8">
<svg className="lucide lucide-search text-neutral-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<input className="bg-transparent text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none w-48" placeholder="Jump to..." type="text"/>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-white/5 text-white text-xs ring-1 ring-white/10 px-3 py-1.5 hover:bg-white/10 transition font-sans" style={{}}>
<svg className="lucide lucide-share-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
<line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
</svg>
            Share
          </button>
</div>
</div>

<div className="grid grid-cols-12 relative z-10">

<aside className="hidden md:flex md:col-span-3 lg:col-span-2 flex-col min-h-[520px] bg-white/5 border-white/5 border-r">
<div className="pt-4 pr-4 pb-4 pl-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r text-white shadow-lg text-sm hover:brightness-110 transition-all px-3 py-2 border border-white/10 font-sans" style={{}}>
<svg className="lucide lucide-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
              New Task
            </button>
</div>
<nav className="px-3 pb-4 space-y-6 overflow-y-auto">

<div className="">
<div className="px-2 mb-2 text-[10px] uppercase text-neutral-500 font-sans" style={{}}>
                My Calendar
              </div>
<ul className="space-y-1">
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-white bg-white/5 ring-1 ring-white/10 shadow-inner font-sans" href="#" style={{}}>
<svg fill="none" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
                    Today
                  </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#" style={{}}>
<svg className="lucide lucide-calendar-days" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
<path d="M8 14h.01"></path>
<path d="M12 14h.01"></path>
<path d="M16 14h.01"></path>
<path d="M8 18h.01"></path>
<path d="M12 18h.01"></path>
<path d="M16 18h.01"></path>
</svg>
                    Upcoming
                  </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#" style={{}}>
<svg className="lucide lucide-inbox" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
<path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z">
</path>
</svg>
                    Inbox
                    <span className="ml-auto text-[10px] bg-white/10 text-neutral-400 px-1.5 py-0.5 rounded font-sans" style={{}}>
                      4
                    </span>
</a>
</li>
</ul>
</div>

<div>
<div className="px-2 mb-2 text-[10px] uppercase text-neutral-500 font-sans" style={{}}>
                Projects
              </div>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#" style={{}}>
<span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    Design System
                  </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#" style={{}}>
<span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    Q4 Roadmap
                  </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#" style={{}}>
<span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    Marketing Launch
                  </a>
</li>
</ul>
</div>
</nav>
</aside>

<main className="col-span-12 md:col-span-6 lg:col-span-7 min-h-[520px] bg-black/20">

<div className="px-4 sm:px-6 py-3 border-b border-white/5 overflow-x-auto">
<div className="flex items-center gap-6 min-w-max">
<button className="text-sm text-white border-b-2 pb-3 -mb-3.5 font-sans" style={{}}>
                List View
              </button>
<button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-sans" style={{}}>
                Board
              </button>
<button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-sans" style={{}}>
                Calendar
              </button>
<button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-sans" style={{}}>
                Timeline
              </button>
</div>
</div>

<div className="px-4 sm:px-6 py-6 border-b border-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<h3 className="text-white text-2xl font-oswald font-light" style={{}}>
                  Tuesday, Oct 24
                </h3>
<span className="text-[11px] rounded-md bg-green-500/10 text-green-400 ring-1 px-2 py-0.5 uppercase ring-green-500/20 font-sans" style={{}}>
                  On Track
                </span>
</div>
<div className="text-xs text-neutral-500 flex items-center gap-1.5 font-sans" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Active now
              </div>
</div>
<div className="mt-2 text-sm text-neutral-400 font-sans" style={{}}>
              You have
              <span className="text-white font-medium font-sans" style={{}}>4 tasks</span>
              remaining and
              <span className="text-white font-medium font-sans" style={{}}>2 meetings</span>
              today.
            </div>
</div>

<div className="px-4 sm:px-6 py-6 space-y-4">

<div className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-colors group cursor-pointer">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 mt-0.5">
<div className="w-5 h-5 rounded-md border-2 border-neutral-600 transition-colors flex items-center justify-center">
</div>
</div>
<div>
<div className="text-sm text-white transition-colors font-sans" style={{}}>
                      Review Q3 Financial Report
                    </div>
<div className="text-xs text-neutral-500 mt-0.5 font-sans flex items-center gap-2">
<span className="flex items-center gap-1 font-sans" style={{}}>
<svg className="lucide lucide-tag" fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10">
<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l5 5a2 2 0 0 0 2.828 0l7-7a2 2 0 0 0 0-2.828l-5-5z"></path>
<circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle>
</svg>
                        Finance
                      </span>
<span className="font-sans" style={{}}>•</span>
<span className="text-orange-400 font-sans" style={{}}>Due Today</span>
</div>
</div>
</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 ring-2 ring-[#0A0A0A] flex items-center justify-center text-[10px] text-white font-sans" style={{}}>AK</div>
<div className="w-6 h-6 rounded-full bg-blue-700 ring-2 ring-[#0A0A0A] flex items-center justify-center text-[10px] text-white font-sans" style={{}}>JS</div>
</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-blue-500/20 bg-gradient-to-b from-blue-500/5 to-transparent p-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm text-white font-sans" style={{}}>Website Migration</div>
<div className="text-xs text-neutral-500 mt-0.5 font-sans" style={{}}>Deploying to production • Vercel
                    </div>
</div>
</div>
<div className="text-[11px] text-blue-400 font-mono font-sans" style={{}}>85%</div>
</div>
<div className="mt-4 flex items-center gap-3">
<span className="text-xs text-neutral-500 font-sans" style={{}}>Deploying</span>
<div className="flex-1 h-1.5 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-[85%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
</div>
</div>
<button className="text-[10px] rounded hover:bg-white/10 text-neutral-400 px-2 py-1 transition-colors uppercase font-sans" style={{}}>Pause</button>
</div>
</div>

<div className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-colors border-l-2">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm text-white font-sans" style={{}}>Design Sync: Mobile App V2</div>
<div className="text-xs text-neutral-500 mt-0.5 font-sans" style={{}}>Starts in 15m • Google Meet</div>
</div>
</div>
<span className="text-[10px] rounded-md bg-white/5 text-neutral-300 ring-1 ring-white/10 px-2 py-0.5 font-sans" style={{}}>UP NEXT</span>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="text-xs rounded-md ring-1 px-3 py-1.5 transition-colors font-sans" style={{}}>Join Meeting</button>
<button className="text-xs rounded-md text-neutral-400 hover:text-white px-3 py-1.5 transition-colors font-sans" style={{}}>Reschedule</button>
</div>
</div>

<div className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-colors group cursor-pointer opacity-70">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 mt-0.5">
<div className="w-5 h-5 rounded-md border-2 flex items-center justify-center">
<svg className="lucide lucide-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
</div>
<div className="">
<div className="text-sm text-neutral-400 line-through font-sans" style={{}}>Prepare slides for All-Hands
                    </div>
<div className="text-xs text-neutral-600 mt-0.5 font-sans" style={{}}>Operations • Completed 2h ago</div>
</div>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 lg:col-span-3 min-h-[520px] bg-white/5 border-white/5 border-l">
<div className="flex flex-col h-full">

<div className="px-5 py-5 border-b border-white/5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest font-sans">Online Members</h3>
<span className="text-[10px] bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded font-mono font-sans">3</span>
</div>
<div className="space-y-4">

<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative">
<img alt="User" className="w-8 h-8 rounded-full object-cover ring-2 ring-[#0A0A0A] group-hover:ring-white/10 transition-all" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0A0A0A] rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-white truncate font-sans">Jessica Wu</div>
<div className="text-xs text-neutral-500 truncate font-sans">Designing <span className="text-neutral-400 font-sans">Checkout</span></div>
</div>
</div>

<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative">
<img alt="User" className="w-8 h-8 rounded-full object-cover ring-2 ring-[#0A0A0A] group-hover:ring-white/10 transition-all" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0A0A0A] rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-white truncate font-sans">Alex Thompson</div>
<div className="text-xs text-neutral-500 truncate font-sans">Reviewing <span className="text-neutral-400 font-sans">PR #402</span></div>
</div>
</div>

<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative">
<img alt="User" className="w-8 h-8 rounded-full object-cover ring-2 ring-[#0A0A0A] group-hover:ring-white/10 transition-all" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;h=100&amp;fit=crop"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-amber-500 border-2 border-[#0A0A0A] rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-white truncate font-sans">Emily Clark</div>
<div className="text-xs text-neutral-500 truncate font-sans">In a meeting</div>
</div>
</div>
</div>
<button className="mt-5 w-full py-2 text-xs font-medium text-neutral-400 hover:text-white border border-dashed border-white/10 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2 font-sans">
<svg className="opacity-70" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Invite Teammate
            </button>
</div>

<div className="flex-1 px-5 py-5 overflow-y-auto custom-scrollbar">
<h3 className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest mb-5 font-sans">Activity Feed</h3>
<div className="relative pl-2 space-y-8">

<div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/5"></div>

<div className="relative pl-6">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
</div>
<p className="text-xs text-neutral-300 leading-relaxed font-sans">
<span className="font-medium text-white font-sans">Alex</span> pushed 3 commits to <span className="font-mono text-[10px] bg-white/10 px-1 py-0.5 rounded text-neutral-200 border border-white/5 font-sans">main</span>
</p>
<span className="text-[10px] text-neutral-600 mt-1 block font-sans">10m ago</span>
</div>

<div className="relative pl-6">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
</div>
<p className="text-xs text-neutral-300 leading-relaxed font-sans">
<span className="font-medium text-white font-sans">Sarah</span> marked <span className="text-white font-sans">"Homepage Redesign"</span> as complete
                    </p>
<span className="text-[10px] text-neutral-600 mt-1 block font-sans">1h ago</span>
</div>

<div className="relative pl-6">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
</div>
<p className="text-xs text-neutral-300 leading-relaxed font-sans">
                        New comment on <span className="text-white font-sans">"Q4 Roadmap"</span>
</p>
<div className="mt-2 p-2 bg-white/5 border border-white/5 rounded text-[11px] text-neutral-400 italic relative font-sans">
<div className="absolute left-0 top-2 bottom-2 w-0.5 bg-orange-500/50 rounded-r"></div>
                        "Great work on this section, let's ship it!"
                    </div>
<span className="text-[10px] text-neutral-600 mt-1 block font-sans">2h ago</span>
</div>

<div className="relative pl-6 opacity-60">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div>
</div>
<p className="text-xs text-neutral-300 leading-relaxed font-sans">
<span className="font-medium text-white font-sans">System</span> automated weekly backup
                    </p>
<span className="text-[10px] text-neutral-600 mt-1 block font-sans">4h ago</span>
</div>
</div>
</div>

</div>
</aside>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate lg:mx-auto bg-gradient-to-br from-white/10 via-white/0 to-white/10 max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '24px'}}>


<div className="flex flex-col rounded-none mt-0 mb-0 pt-0 pr-0 pb-0 pl-0 relative">

<div className="flex flex-col gap-10 w-full gap-x-10 gap-y-10">

<div className="flex items-center gap-6">
<span className="text-xs font-mono text-blue-400 tracking-widest font-sans" style={{}}>
              01
            </span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="uppercase text-xs tracking-widest text-gray-500 font-sans" style={{}}>
              Why Sakura
            </span>
</div>

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 gap-x-10 gap-y-10">
<div className="max-w-3xl flex flex-col gap-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-white font-oswald font-light" style={{}}>
                Focus you feel.
                <span className="block text-gray-500 font-oswald font-light" style={{}}>
                  Progress you can verify.
                </span>
</h2>
<p className="text-lg text-gray-400 font-light max-w-xl leading-relaxed font-sans" style={{}}>
                A modern productivity infrastructure designed for focus,
                clarity, and long-term team efficiency.
              </p>
</div>

<button className="group flex items-center gap-2 px-6 py-3 border border-white/15 text-white text-sm font-medium rounded-full hover:bg-white/5 transition font-sans whitespace-nowrap">
<span className="font-sans" style={{}}>Explore Features</span>
<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 w-full mt-8 gap-x-6 gap-y-6">

<div className="group flex flex-col overflow-hidden hover:border-blue-500/30 transition-all duration-500 md:col-span-1 bg-[#000000] border-white/10 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative justify-between">
<style>
              @keyframes orbit-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes breathe-glow {
                0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
                50% { transform: scale(1.05); box-shadow: 0 0 35px rgba(59, 130, 246, 0.3); }
              }
              @keyframes ripple-expand {
                0% { transform: scale(0.8); opacity: 0.6; border-width: 1px; }
                100% { transform: scale(2.5); opacity: 0; border-width: 0px; }
              }
              @keyframes dot-handoff {
                0%, 100% { opacity: 0.3; r: 2px; fill: #60A5FA; }
                50% { opacity: 1; r: 3.5px; fill: #3B82F6; }
              }
            </style>

<div className="relative h-48 w-full flex items-center justify-center mb-6 overflow-visible">

<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-50 rounded-full blur-3xl transform scale-75"></div>

<div className="absolute w-16 h-16 rounded-full border border-blue-400/30 z-0" style={{animation: 'ripple-expand 4s cubic-bezier(0, 0, 0.2, 1) infinite'}}></div>
<svg className="w-full h-full text-blue-500/20 z-10" fill="none" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

<g className="" style={{transformOrigin: '100px 100px', animation: 'orbit-slow 12s linear infinite'}}>

<circle className="opacity-30" cx="100" cy="100" r="80" stroke="currentColor" stroke-dasharray="6 6" strokeWidth="1"></circle>

<circle className="drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" cx="100" cy="20" fill="#60A5FA" r="3"></circle>
<circle className="opacity-60" cx="180" cy="100" fill="#3B82F6" r="2.5"></circle>
<circle className="opacity-60" cx="20" cy="100" fill="#3B82F6" r="2.5"></circle>
</g>

<circle className="opacity-40" cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1"></circle>


<circle cx="100" cy="50" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '0s'}}></circle>

<circle cx="150" cy="100" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '1s'}}></circle>

<circle cx="100" cy="150" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '2s'}}></circle>

<circle cx="50" cy="100" fill="#3B82F6" r="2" style={{animation: 'dot-handoff 3s ease-in-out infinite', animationDelay: '3s'}}></circle>
</svg>

<div className="absolute flex items-center justify-center w-16 h-16 bg-[#15151A] rounded-full border border-white/10 z-20" style={{animation: 'breathe-glow 4s ease-in-out infinite'}}>
<div className="absolute inset-0 bg-blue-500/10 rounded-full blur-sm"></div>
<svg className="text-gray-100 relative z-10" fill="currentColor" height="28" stroke="none" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
</div>

<div className="relative z-10">
<h3 className="text-4xl text-white text-left font-oswald font-light" style={{}}>
                Smart Task Automation
              </h3>
<p className="leading-relaxed text-lg font-light text-gray-400 text-left mt-2 font-sans" style={{}}>
                Eliminate busywork and ensure projects move forward with
                intelligent task dependencies and automated agents.
              </p>
</div>
</div>

<div className="md:col-span-2 group flex flex-col overflow-hidden hover:border-blue-500/30 transition-all duration-500 bg-[#000000] border-white/10 border rounded-[2rem] px-8 py-8 relative justify-between">
<style>
              @keyframes flowData {
                0% { stroke-dashoffset: 120; opacity: 0; }
                15% { opacity: 1; }
                85% { opacity: 1; }
                100% { stroke-dashoffset: 0; opacity: 0; }
              }
              @keyframes breatheDiamond {
                0%, 100% { transform: rotate(45deg) scale(1); box-shadow: 0 0 30px rgba(59,130,246,0.3); border-color: rgba(59,130,246,0.3); }
                50% { transform: rotate(45deg) scale(1.05); box-shadow: 0 0 50px rgba(59,130,246,0.5); border-color: rgba(59,130,246,0.6); }
              }
              @keyframes orbitSpin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            </style>

<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-600/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/30 transition-colors duration-700"></div>

<div className="relative h-48 w-full flex items-center justify-center mb-6 overflow-visible">

<svg className="absolute top-0 right-0 bottom-0 left-0 w-full h-full" fill="none" preserveaspectratio="xMidYMid meet" viewbox="0 0 400 200">
<defs>
<lineargradient id="flowGradientLeft" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#3B82F6" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#60A5FA" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#3B82F6" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="flowGradientRight" x1="100%" x2="0%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#3B82F6" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#60A5FA" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#3B82F6" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path className="text-white/10" d="M50 100 L120 100 L150 70" stroke="currentColor" strokeWidth="1"></path>
<path className="text-white/10" d="M350 100 L280 100 L250 130" stroke="currentColor" strokeWidth="1"></path>

<path d="M50 100 L120 100 L150 70" stroke="url(#flowGradientLeft)" stroke-dasharray="120" stroke-dashoffset="120" strokeLinecap="round" strokeWidth="2" style={{animation: 'flowData 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></path>
<path d="M350 100 L280 100 L250 130" stroke="url(#flowGradientRight)" stroke-dasharray="120" stroke-dashoffset="120" strokeLinecap="round" strokeWidth="2" style={{animation: 'flowData 3s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '1.5s'}}></path>

<g className="" transform="translate(50 100) rotate(45)">
<rect className="group-hover:stroke-blue-500/50 transition-colors duration-300" fill="#1A1A20" height="20" stroke="white" stroke-opacity="0.2" width="20" x="-10" y="-10"></rect>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" cx="0" cy="0" fill="#60A5FA" r="2"></circle>
</g>
<g transform="translate(350 100) rotate(45)">
<rect className="group-hover:stroke-blue-500/50 transition-colors duration-300" fill="#1A1A20" height="20" stroke="white" stroke-opacity="0.2" width="20" x="-10" y="-10"></rect>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" cx="0" cy="0" fill="#60A5FA" r="2"></circle>
</g>
</svg>

<div className="relative flex items-center justify-center">
<div className="absolute inset-0 bg-blue-600 blur-[40px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

<div className="w-24 h-24 border border-blue-500/30 bg-gradient-to-br from-indigo-900/50 to-blue-900/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] z-10 relative overflow-hidden" style={{animation: 'breatheDiamond 4s ease-in-out infinite'}}>

<div className="w-12 h-12 border border-blue-400/50 rounded-lg flex items-center justify-center bg-blue-500/5 relative z-20">
<div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_#60A5FA]"></div>
</div>

<div className="absolute inset-0 z-10 opacity-30" style={{animation: 'orbitSpin 8s linear infinite'}}>
<div className="w-full h-full rounded-2xl border-t border-r border-blue-400/40"></div>
</div>
</div>
</div>
</div>

<div className="relative z-10">
<h3 className="text-4xl text-white text-left group-hover:text-blue-50 transition-colors duration-300 font-oswald font-light" style={{}}>
                Seamless App Integration
              </h3>
<p className="leading-relaxed text-lg font-light text-gray-400 text-left mt-2 group-hover:text-gray-300 transition-colors duration-300 font-sans" style={{}}>
                Connect Sakura with your existing stack, centralizing data and
                communication in one place for total visibility.
              </p>
</div>
</div>

<div className="md:col-span-2 group flex flex-col overflow-hidden hover:border-blue-500/30 transition-all duration-500 bg-[#000000] border-white/10 border rounded-[2rem] px-8 py-8 relative justify-between">
<style>
              @keyframes shimmer-lock {
                0%, 100% { opacity: 0.4; border-color: rgba(255,255,255,0.1); transform: scale(1); }
                50% { opacity: 0.8; border-color: rgba(255,255,255,0.25); transform: scale(1.05); }
              }
              @keyframes active-pulse {
                0%, 100% { box-shadow: 0 0 20px rgba(79, 70, 229, 0.4); transform: scale(1); border-color: rgba(255,255,255,0.1); }
                50% { box-shadow: 0 0 35px rgba(79, 70, 229, 0.6); transform: scale(1.02); border-color: rgba(79, 70, 229, 0.5); }
              }
              @keyframes scan-sweep {
                0% { transform: translateY(-150%) rotate(15deg); opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { transform: translateY(250%) rotate(15deg); opacity: 0; }
              }
              @keyframes bg-pulse-soft {
                0%, 100% { opacity: 0.15; transform: translate(-50%, -50%) scale(0.9); }
                50% { opacity: 0.25; transform: translate(-50%, -50%) scale(1.1); }
              }
              @keyframes progress-spin {
                0% { stroke-dashoffset: 100; }
                100% { stroke-dashoffset: 25; }
              }
            </style>

<div className="flex w-full h-48 mb-6 relative items-center justify-center">
<div className="flex items-center gap-4 relative">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none" style={{animation: 'bg-pulse-soft 4s ease-in-out infinite'}}></div>

<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#121215] flex items-center justify-center text-gray-600" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '0s'}}>
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#121215] flex items-center justify-center text-gray-500" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '1s'}}>
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>

<div className="relative w-20 h-20 rounded-2xl bg-[#4F46E5] flex items-center justify-center text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] z-10 border border-white/10 ring-4 ring-[#08080A]" style={{animation: 'active-pulse 3s ease-in-out infinite'}}>

<div className="absolute inset-0 overflow-hidden rounded-2xl">
<div className="w-full h-1/3 bg-gradient-to-b from-white/0 via-white/20 to-white/0 absolute top-0 left-0" style={{animation: 'scan-sweep 3s ease-in-out infinite'}}></div>
</div>

<svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewbox="0 0 36 36">
<path className="text-white/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path className="text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="100, 100" strokeWidth="2" style={{animation: 'progress-spin 1.5s ease-out forwards'}}></path>
</svg>

<svg className="relative z-10" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>

<div className="absolute -bottom-3 bg-[#08080A] text-white border border-white/10 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[9px] font-mono tracking-wider font-semibold font-sans" style={{}}>
                      LIVE
                    </span>
</div>
</div>

<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#121215] flex items-center justify-center text-gray-500" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '2s'}}>
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#121215] flex items-center justify-center text-gray-600" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '3s'}}>
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
</div>
</div>

<div className="relative z-10">
<h3 className="text-4xl text-white text-left font-oswald font-light" style={{}}>
                Real-Time Project Tracking
              </h3>
<p className="leading-relaxed text-lg font-light text-gray-400 text-left mt-2 font-sans" style={{}}>
                Monitor project health in real-time, ensuring transparency,
                accountability, and speed across all teams.
              </p>
</div>
</div>

<div className="md:col-span-1 group flex flex-col overflow-hidden hover:border-blue-500/30 transition-all duration-500 bg-[#08080A] border-white/10 border rounded-[2rem] p-8 relative justify-between">
<style>
              @keyframes drift-vertical-slow {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
              }
              @keyframes drift-vertical-reverse {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(8px); }
              }
              @keyframes signal-flow {
                0% { stroke-dashoffset: 20; opacity: 0.3; }
                100% { stroke-dashoffset: 0; opacity: 0.6; }
              }
              @keyframes signal-pulse {
                0%, 100% { stroke-width: 1; opacity: 0.2; }
                50% { stroke-width: 1.5; opacity: 0.8; stroke: #60A5FA; }
              }
              @keyframes node-activate {
                0%, 90%, 100% { fill: white; r: 3px; filter: none; }
                92% { fill: #3B82F6; r: 4.5px; filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8)); }
                95% { fill: #60A5FA; r: 4px; }
              }
              @keyframes grid-pan-diagonal {
                0% { background-position: 0% 0%; }
                100% { background-position: 100px 100px; }
              }
            </style>

<div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'scale(1.5) rotate(15deg)', animation: 'grid-pan-diagonal 60s linear infinite'}}></div>
<div className="bg-[#000000] z-0 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="relative h-48 w-full flex items-center justify-center mb-6 z-10">
<svg className="w-full h-full text-white/10" fill="none" viewbox="0 0 200 200">

<line stroke="currentColor" strokeWidth="1" x1="100" x2="100" y1="20" y2="180"></line>

<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1" style={{animation: 'signal-flow 3s linear infinite'}} x1="60" x2="60" y1="20" y2="180"></line>

<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1" style={{animation: 'signal-flow 4s linear infinite reverse'}} x1="140" x2="140" y1="20" y2="180"></line>

<g style={{animation: 'drift-vertical-slow 7s ease-in-out infinite'}}>
<path d="M60 80 C 80 80, 80 100, 100 100" stroke="currentColor" strokeWidth="1" style={{animation: 'signal-pulse 5s ease-in-out infinite 0s'}}></path>
<circle cx="60" cy="80" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 0.5s'}}></circle>
</g>

<g style={{animation: 'drift-vertical-reverse 8s ease-in-out infinite 1s'}}>
<path d="M100 60 C 120 60, 120 80, 140 80" stroke="currentColor" strokeWidth="1" style={{animation: 'signal-pulse 5s ease-in-out infinite 2.5s'}}></path>
<circle cx="140" cy="80" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 3s'}}></circle>
</g>

<g style={{animation: 'drift-vertical-slow 6s ease-in-out infinite 2s'}}>
<path d="M100 120 C 80 120, 80 140, 60 140" stroke="currentColor" strokeWidth="1" style={{animation: 'signal-pulse 5s ease-in-out infinite 1.5s'}}></path>
<circle cx="60" cy="140" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 5.5s'}}></circle>
</g>

<circle cx="100" cy="60" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 0s'}}></circle>
<circle cx="100" cy="100" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 2s'}}></circle>
<circle cx="100" cy="150" fill="white" r="3" style={{animation: 'node-activate 8s ease-in-out infinite 4s'}}></circle>

<circle className="opacity-50" cx="120" cy="40" fill="#60A5FA" r="1" style={{animation: 'drift-vertical-reverse 10s ease-in-out infinite'}}></circle>
<circle className="opacity-50" cx="80" cy="160" fill="#60A5FA" r="1" style={{animation: 'drift-vertical-slow 9s ease-in-out infinite'}}></circle>
</svg>
</div>

<div className="relative z-10">
<h3 className="text-4xl text-white text-left group-hover:text-blue-50 transition-colors duration-300 font-oswald font-light" style={{}}>
                Enterprise Scalability
              </h3>
<p className="leading-relaxed text-lg font-light text-gray-400 text-left mt-2 group-hover:text-gray-300 transition-colors duration-300 font-sans" style={{}}>
                Sakura grows with you, effortlessly handling thousands of users
                and millions of tasks without missing a beat.
              </p>
</div>
</div>
</div>
</div>

</section>
<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate lg:mx-auto bg-gradient-to-br from-white/10 via-white/0 to-white/10 max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '24px'}}>


<div className="flex flex-col rounded-none mt-0 mb-0 pt-0 pr-0 pb-0 pl-0 relative">

<div className="flex flex-col gap-10 w-full gap-x-10 gap-y-10">
<div className="flex items-center gap-6">
<span className="text-xs font-mono text-blue-400 tracking-widest font-sans">
      02
    </span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="uppercase text-xs tracking-widest text-gray-500 font-sans">
      Our Approach
    </span>
</div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
<div className="max-w-3xl flex flex-col gap-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-white font-oswald font-light">
        Built for deep focus.
        <span className="block text-gray-500 font-oswald font-light">
          Designed for real progress.
        </span>
</h2>
<p className="text-lg text-gray-400 font-light max-w-xl leading-relaxed font-sans">
        A calm and structured productivity system that helps teams stay focused,
        move faster, and track meaningful results over time.
      </p>
</div>
<button className="group flex items-center gap-2 px-6 py-3 border border-white/15 text-white text-sm font-medium rounded-full hover:bg-white/5 transition font-sans whitespace-nowrap">
<span>Explore Features</span>
<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="min-h-[560px] flex md:mt-0 w-full max-w-6xl mt-16 mr-auto ml-auto pr-4 pl-4 relative items-center justify-center">

<svg className="absolute inset-0 hidden h-full w-full pointer-events-none md:block" preserveaspectratio="xMidYMid meet" viewbox="0 0 1000 560">
<defs>

<lineargradient id="wire" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#ffffff" stop-opacity="0.00"></stop>
<stop offset="25%" stop-color="#ffffff" stop-opacity="0.15"></stop>
<stop offset="50%" stop-color="#ffffff" stop-opacity="0.25"></stop>
<stop offset="75%" stop-color="#ffffff" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#ffffff" stop-opacity="0.00"></stop>
</lineargradient>

<lineargradient id="noodleGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#a5b4fc" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop>
</lineargradient>
<filter height="160%" id="wireGlow" width="160%" x="-30%" y="-30%">
<fegaussianblur result="blur" stddeviation="2"></fegaussianblur>
<fecolormatrix in="blur" result="glow" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.3 0">
</fecolormatrix>
<femerge>
<femergenode in="glow"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<filter height="200%" id="dotGlow" width="200%" x="-50%" y="-50%">
<fegaussianblur result="blur" stddeviation="1.5"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<path d="M 165 130 L 290 130 Q 360 130 360 200 V 255 Q 360 280 390 280 L 440 280" fill="none" filter="url(#wireGlow)" opacity="0.5" stroke="url(#wire)" strokeWidth="1.5"></path>
<path d="M 165 430 L 290 430 Q 360 430 360 360 V 305 Q 360 280 390 280 L 440 280" fill="none" filter="url(#wireGlow)" opacity="0.5" stroke="url(#wire)" strokeWidth="1.5"></path>
<path d="M 229 280 L 440 280" fill="none" filter="url(#wireGlow)" opacity="0.5" stroke="url(#wire)" strokeWidth="1.5"></path>
<path d="M 440 280 L 560 280" fill="none" filter="url(#wireGlow)" opacity="0.3" stroke="url(#wire)" strokeWidth="1.5"></path>
<path d="M 560 280 L 771 280" fill="none" filter="url(#wireGlow)" opacity="0.5" stroke="url(#wire)" strokeWidth="1.5"></path>
<path d="M 835 130 L 710 130 Q 640 130 640 200 V 255 Q 640 280 610 280 L 560 280" fill="none" filter="url(#wireGlow)" opacity="0.5" stroke="url(#wire)" strokeWidth="1.5"></path>
<path d="M 835 430 L 710 430 Q 640 430 640 360 V 305 Q 640 280 610 280 L 560 280" fill="none" filter="url(#wireGlow)" opacity="0.5" stroke="url(#wire)" strokeWidth="1.5"></path>


<path className="animate-noodle" d="M 165 130 L 290 130 Q 360 130 360 200 V 255 Q 360 280 390 280 L 440 280" fill="none" filter="url(#wireGlow)" stroke="url(#noodleGradient)" strokeWidth="2">
</path>
<path className="animate-noodle" d="M 165 430 L 290 430 Q 360 430 360 360 V 305 Q 360 280 390 280 L 440 280" fill="none" filter="url(#wireGlow)" stroke="url(#noodleGradient)" strokeWidth="2">
</path>
<path className="animate-noodle-delayed" d="M 229 280 L 440 280" fill="none" filter="url(#wireGlow)" stroke="url(#noodleGradient)" strokeWidth="2"></path>

<path className="animate-noodle" d="M 835 130 L 710 130 Q 640 130 640 200 V 255 Q 640 280 610 280 L 560 280" fill="none" filter="url(#wireGlow)" stroke="url(#noodleGradient)" strokeWidth="2">
</path>
<path className="animate-noodle" d="M 835 430 L 710 430 Q 640 430 640 360 V 305 Q 640 280 610 280 L 560 280" fill="none" filter="url(#wireGlow)" stroke="url(#noodleGradient)" strokeWidth="2">
</path>

<path className="animate-noodle-delayed" d="M 440 280 L 560 280" fill="none" filter="url(#wireGlow)" stroke="url(#noodleGradient)" strokeWidth="2"></path>

<path className="animate-noodle-delayed" d="M 560 280 L 771 280" fill="none" filter="url(#wireGlow)" stroke="url(#noodleGradient)" strokeWidth="2"></path>

<circle className="animate-pulse" cx="440" cy="280" fill="#818cf8" filter="url(#dotGlow)" r="3"></circle>
<circle className="animate-pulse" cx="560" cy="280" fill="#818cf8" filter="url(#dotGlow)" r="3"></circle>
</svg>

<div className="relative z-10 grid h-full w-full grid-cols-1 gap-14 md:grid-cols-3 md:gap-0">

<div className="flex h-full flex-row items-center justify-center gap-6 px-4 md:flex-col md:gap-14 md:px-12">

<div className="group relative">
<div className="absolute inset-0 rounded-full blur-2xl opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(circle,_rgba(249,115,22,0.25),_transparent_60%)]">
</div>
<div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]">
</div>
<svg className="text-orange-400 drop-shadow-[0_0_12px_rgba(249,115,22,0.4)]" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m4.9 4.9 14.2 14.2"></path>
</svg>
</div>
</div>

<div className="group relative md:translate-x-16">
<div className="absolute inset-0 rounded-full blur-2xl opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(circle,_rgba(234,88,12,0.25),_transparent_60%)]">
</div>
<div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]">
</div>
<svg className="text-orange-500 drop-shadow-[0_0_12px_rgba(234,88,12,0.4)]" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v12"></path>
<path d="M17.196 9 6.804 15"></path>
<path d="m6.804 9 10.392 6"></path>
</svg>
</div>
</div>

<div className="group relative">
<div className="absolute inset-0 rounded-full blur-2xl opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(circle,_rgba(59,130,246,0.25),_transparent_60%)]">
</div>
<div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]">
</div>
<div className="grid grid-cols-2 gap-1.5 rotate-45">
<div className="h-2.5 w-2.5 rounded-[1px] bg-blue-500"></div>
<div className="h-2.5 w-2.5 rounded-[1px] bg-blue-500/50"></div>
<div className="h-2.5 w-2.5 rounded-[1px] bg-blue-500/50"></div>
<div className="h-2.5 w-2.5 rounded-[1px] bg-blue-500"></div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-center py-10 md:py-0">
<div className="relative">

<div className="absolute -inset-10 rounded-full blur-3xl bg-[radial-gradient(circle,_rgba(99,102,241,0.3),_transparent_65%)]">
</div>

<div className="absolute -inset-[20%] rounded-full opacity-40 animate-beam-spin pointer-events-none" style={{background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 240deg, rgba(129, 140, 248, 0.4) 360deg)', maskImage: 'radial-gradient(transparent 55%, black 60%)', WebkitMaskImage: 'radial-gradient(transparent 55%, black 60%)'}}>
</div>

<div className="absolute -inset-[15%] rounded-full opacity-20 animate-beam-spin pointer-events-none" style={{background: 'conic-gradient(from 180deg at 50% 50%, transparent 0deg, transparent 240deg, rgba(99, 102, 241, 0.6) 360deg)', animationDirection: 'reverse', animationDuration: '12s', maskImage: 'radial-gradient(transparent 55%, black 60%)', WebkitMaskImage: 'radial-gradient(transparent 55%, black 60%)'}}>
</div>

<div className="relative flex h-[110px] w-[110px] items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.04] backdrop-blur-2xl shadow-[0_40px_100px_-40px_rgba(99,102,241,0.7)] md:h-[132px] md:w-[132px]">
<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]">
</div>
<div className="absolute inset-[10px] rounded-full border border-white/[0.10]"></div>
<svg className="text-indigo-400 drop-shadow-[0_0_24px_rgba(129,140,248,0.6)]" fill="none" height="56" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
</div>
</div>

<div className="flex h-full flex-row items-center justify-center gap-6 px-4 md:flex-col md:gap-14 md:px-12">

<div className="group relative">
<div className="absolute inset-0 rounded-full blur-2xl opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(circle,_rgba(52,211,153,0.25),_transparent_60%)]">
</div>
<div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]">
</div>
<svg className="text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.4)]" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
</svg>
</div>
</div>

<div className="group relative md:-translate-x-16">
<div className="absolute inset-0 rounded-full blur-2xl opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(circle,_rgba(236,72,153,0.25),_transparent_60%)]">
</div>
<div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]">
</div>
<svg className="text-pink-400 drop-shadow-[0_0_12px_rgba(236,72,153,0.4)]" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<circle className="" cx="12" cy="12" r="6"></circle>
<circle className="fill-current" cx="12" cy="12" r="2"></circle>
</svg>
</div>
</div>

<div className="group relative">
<div className="absolute inset-0 rounded-full blur-2xl opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(circle,_rgba(168,85,247,0.25),_transparent_60%)]">
</div>
<div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]">
</div>
<svg className="text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5z">
</path>
<path d="M12 7.5V9"></path>
<path d="M7.5 12H9"></path>
<path d="M16.5 12H15"></path>
<path d="M12 16.5V15"></path>
<path d="m8 8 1.88 1.88"></path>
<path d="M14.12 9.88 16 8"></path>
<path d="m8 16 1.88-1.88"></path>
<path d="M14.12 14.12 16 16"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

</section><section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate lg:mx-auto bg-gradient-to-br from-white/10 via-white/0 to-white/10 max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', -BorderRadiusBefore: '24px'}}>


<div className="flex flex-col rounded-none mt-0 mb-0 pt-0 pr-0 pb-0 pl-0 relative gap-x-16 gap-y-4">

<div className="flex flex-col gap-10 w-full gap-x-10 gap-y-10">

<div className="flex gap-6 gap-x-10 gap-y-10 items-center">
<span className="text-xs font-mono text-blue-400 tracking-widest font-sans" style={{}}>
              01
            </span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="uppercase text-xs text-gray-500 tracking-widest font-sans" style={{}}>
              Customer Stories
            </span>
</div>

</div>

<div className="min-h-[900px] flex flex-col overflow-hidden lg:block w-full max-w-7xl mr-auto ml-auto pt-12 pb-12 relative gap-x-16 gap-y-16 items-center justify-center">

<div className="absolute inset-0 pointer-events-none opacity-20" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 100%)'}}>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none z-0">
</div>

<div className="z-20 flex flex-col lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:mb-0 text-center max-w-3xl mb-16 pr-6 pl-6 relative items-center" style={{}}>
<h2 className="flex flex-col gap-4">
<span className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-white font-oswald font-light" style={{}}>
                Loved by developers. Trusted by enterprises.
              </span>
<span className="block text-gray-500 text-lg max-w-2xl mx-auto font-sans" style={{}}>
                Join thousands of teams using Sakura to streamline their
                workflows, unify data, and focus on what matters most.
              </span>
</h2>
<button className="mt-8 group flex items-center gap-2 px-6 py-3 border border-white/15 text-white text-sm font-medium rounded-full hover:bg-white/5 transition font-sans whitespace-nowrap">
<span className="font-sans">See all reviews</span>
<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="z-10 lg:absolute lg:top-[8%] lg:left-[2%] xl:left-[4%] transition-opacity duration-500 ease-in-out group w-full max-w-sm relative" id="testimonial-card-0" style={{}}>
<div className="transition-all duration-300 group-hover:border-white/20 group-hover:-translate-y-1 bg-[#000000] border-white/10 border rounded-[24px] mb-6 pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">
<div className="-bottom-3 transform transition-colors duration-300 group-hover:border-white/20 bg-[#000000] w-6 h-6 border-white/10 border-r border-b absolute left-8 rotate-45">
</div>
<p className="quote-text text-neutral-300 text-lg leading-relaxed relative z-10 font-sans" style={{}}>"The automated workflow orchestration saved our team 20+ hours per week. It's not just a tool, it's a productivity multiplier."</p>
</div>
<div className="flex items-center gap-4 pl-4">
<div className="p-0.5 rounded-full bg-gradient-to-br from-white/20 to-transparent">
<img alt="User Avatar" className="avatar-img w-14 h-14 rounded-full object-cover border-2 border-[#050505]" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&amp;h=120&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="author-name text-white font-medium text-base font-sans" style={{}}>Jessica Wu</span>
<span className="author-role text-neutral-500 text-sm font-sans" style={{}}>Head of Operations at Stripe</span>
</div>
</div>
</div>

<div className="relative z-10 w-full max-w-sm lg:absolute lg:top-[8%] lg:right-[2%] xl:right-[4%] transition-opacity duration-500 ease-in-out group" id="testimonial-card-1">
<div className="transition-all duration-300 group-hover:border-white/20 group-hover:-translate-y-1 bg-[#000000] border-white/10 border rounded-[24px] mb-6 px-8 py-8 relative shadow-2xl">
<div className="-bottom-3 transform transition-colors duration-300 group-hover:border-white/20 bg-[#000000] w-6 h-6 border-white/10 border-r border-b absolute left-8 rotate-45">
</div>
<p className="quote-text text-neutral-300 text-lg leading-relaxed relative z-10 font-sans" style={{}}>"We replaced three different tools with Sakura. The unified data view has completely transformed our decision-making process."</p>
</div>
<div className="flex items-center gap-4 pl-4">
<div className="p-0.5 rounded-full bg-gradient-to-br from-white/20 to-transparent">
<img alt="User Avatar" className="avatar-img w-14 h-14 rounded-full object-cover border-2 border-[#050505]" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&amp;h=120&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="author-name text-white font-medium text-base font-sans" style={{}}>Alex Thompson</span>
<span className="author-role text-neutral-500 text-sm font-sans" style={{}}>CTO at Linear</span>
</div>
</div>
</div>

<div className="relative z-10 w-full max-w-sm lg:absolute lg:bottom-[8%] lg:left-[2%] xl:left-[4%] transition-opacity duration-500 ease-in-out group" id="testimonial-card-2">
<div className="transition-all duration-300 group-hover:border-white/20 group-hover:-translate-y-1 bg-[#000000] border-white/10 border rounded-[24px] mb-6 pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">
<div className="-bottom-3 transform transition-colors duration-300 group-hover:border-white/20 bg-[#000000] w-6 h-6 border-white/10 border-r border-b absolute left-8 rotate-45">
</div>
<p className="quote-text text-neutral-300 text-lg leading-relaxed relative z-10 font-sans" style={{}}>"Deployment velocity increased by 3x after adopting Sakura. The insights it provides are invaluable for our growth."</p>
</div>
<div className="flex items-center gap-4 pl-4">
<div className="p-0.5 rounded-full bg-gradient-to-br from-white/20 to-transparent">
<img alt="User Avatar" className="avatar-img w-14 h-14 rounded-full object-cover border-2 border-[#050505]" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&amp;h=120&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="author-name text-white font-medium text-base font-sans" style={{}}>Emily Clark</span>
<span className="author-role text-neutral-500 text-sm font-sans" style={{}}>VP Product at Vercel</span>
</div>
</div>
</div>

<div className="relative z-10 w-full max-w-sm lg:absolute lg:bottom-[8%] lg:right-[2%] xl:right-[4%] transition-opacity duration-500 ease-in-out group" id="testimonial-card-3">
<div className="transition-all duration-300 group-hover:border-white/20 group-hover:-translate-y-1 bg-[#000000] border-white/10 border rounded-[24px] mb-6 px-8 py-8 relative shadow-2xl">
<div className="-bottom-3 transform transition-colors duration-300 group-hover:border-white/20 bg-[#000000] w-6 h-6 border-white/10 border-r border-b absolute left-8 rotate-45">
</div>
<p className="quote-text text-neutral-300 text-lg leading-relaxed relative z-10 font-sans" style={{}}>"The interface is beautiful and the performance is unmatched. Sakura sets a new standard for enterprise software."</p>
</div>
<div className="flex items-center gap-4 pl-4">
<div className="p-0.5 rounded-full bg-gradient-to-br from-white/20 to-transparent">
<img alt="User Avatar" className="avatar-img w-14 h-14 rounded-full object-cover border-2 border-[#050505]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&amp;h=120&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="author-name text-white font-medium text-base font-sans" style={{}}>Ryan Park</span>
<span className="author-role text-neutral-500 text-sm font-sans" style={{}}>Design Lead at Airbnb</span>
</div>
</div>
</div>

</div>
</div>

</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll lg:mx-auto bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-12 pr-10 pb-12 pl-10 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

<div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start lg:items-start">


<div className="flex flex-col">
<div className="mb-12">
<p className="text-neutral-400 mb-4 text-sm font-medium tracking-wide font-sans">We’ve got you covered</p>
<h2 className="leading-[1.1] md:text-5xl text-5xl text-white font-oswald font-light" style={{}}>
          Frequently Asked
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-oswald font-light" style={{}}>
            Questions
          </span>
</h2>
</div>
<div className="aspect-[4/5] overflow-hidden flex group shadow-indigo-900/10 bg-gradient-to-br from-white/[0.03] to-transparent w-full border-white/5 border rounded-3xl relative shadow-2xl items-center justify-center">
<video autoplay="" className="object-center w-full h-full object-cover absolute inset-0" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/e3cb0796-45c4-4450-badd-35a5998be45a/0.mp4"></video>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 blur-[50px] rounded-full"></div>
<div className="relative transform transition-transform duration-700 hover:scale-105 hover:rotate-3">

</div>
</div>
</div>


<div className="flex flex-col space-y-6 lg:mt-8 self-start">

<div className="group border-b border-white/5 pb-6">
<button className="w-full flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-white pr-8 font-sans">What is TaskXen and how can it benefit my team?</span>
<svg className="w-5 h-5 text-white transform rotate-180 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="text-neutral-400 text-base leading-relaxed mt-4 font-light max-w-xl font-sans">
              TaskXen is a robust project management SaaS designed to streamline workflows, enhance collaboration, and boost productivity.
            </p>
</div>
</div>
</div>

<div className="group border-b border-white/5 pb-6">
<button className="w-full flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-white pr-8 group-hover:text-neutral-200 transition-colors font-sans">How does the free trial work?</span>
<svg className="w-5 h-5 text-white transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="text-neutral-400 text-base leading-relaxed mt-4 font-light max-w-xl font-sans">
              Our 14-day free trial gives you full access to all Pro features. No credit card required.
            </p>
</div>
</div>
</div>

<div className="group border-b border-white/5 pb-6">
<button className="w-full flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-white pr-8 group-hover:text-neutral-200 transition-colors font-sans">Can I change my plan later?</span>
<svg className="w-5 h-5 text-white transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="text-neutral-400 text-base leading-relaxed mt-4 font-light max-w-xl font-sans">
              Yes, you can upgrade or downgrade your plan at any time from your account settings.
            </p>
</div>
</div>
</div>

<div className="group border-b border-white/5 pb-6">
<button className="w-full flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-white pr-8 group-hover:text-neutral-200 transition-colors font-sans">Do you offer any discounts?</span>
<svg className="w-5 h-5 text-white transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="text-neutral-400 text-base leading-relaxed mt-4 font-light max-w-xl font-sans">
              We offer a 20% discount on annual plans, plus special pricing for non-profits and education.
            </p>
</div>
</div>
</div>

<div className="group border-b border-white/5 pb-6">
<button className="w-full flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-white pr-8 group-hover:text-neutral-200 transition-colors font-sans">Is my data secure?</span>
<svg className="w-5 h-5 text-white transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="text-neutral-400 text-base leading-relaxed mt-4 font-light max-w-xl font-sans">
              Yes. We encrypt data in transit and at rest, and perform regular security audits.
            </p>
</div>
</div>
</div>
</div>
</div>

</section>

<footer className="relative w-full overflow-hidden bg-black text-white border-t border-white/5 font-sans">
<div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden">
<h1 className="text-[17vw] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-t to-transparent opacity-80 translate-y-[20%] font-oswald font-light" style={{}}>
          Sakura
        </h1>
</div>
<div className="relative z-10">
<div className="max-w-7xl mx-auto px-6 pt-20 pb-14 lg:pt-24 lg:pb-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
<div className="lg:col-span-5">
<h2 className="text-4xl flex items-start mb-6 font-oswald font-light" style={{}}>
                Sakura
                <span className="ml-1 mt-1 text-xs text-neutral-500 font-sans" style={{}}>
                  TM
                </span>
</h2>
<p className="max-w-sm text-neutral-400 text-lg leading-relaxed font-light mb-10 font-sans" style={{}}>
                Sakura is an AI productivity platform that helps you create
                docs, manage tasks, and track goals in seconds, not hours.
              </p>
<div className="flex gap-3">
<a className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition group" href="#">
<svg className="group-hover:scale-110 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6c0 5 4.5 7.5 9 6.5"></path>
<path d="M11 18c0-5-4.5-7.5-9-6.5"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</a>
<a className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition group" href="#">
<svg className="group-hover:scale-110 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition group" href="#">
<svg className="group-hover:scale-110 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition group" href="#">
<svg className="group-hover:scale-110 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
</svg>
</a>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pl-16">
<div className="">
<h3 className="text-2xl text-neutral-500 mb-6 font-oswald font-light" style={{}}>
                  Links
                </h3>
<ul className="space-y-3 text-neutral-400">
<li>
<a className="hover:text-white transition-colors duration-200 font-sans" href="#" style={{}}>
                      Home
                    </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-200 font-sans" href="#" style={{}}>
                      Pricing
                    </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-200 font-sans" href="#" style={{}}>
                      Documentation
                    </a>
</li>
</ul>
</div>
<div>
<h3 className="text-2xl text-neutral-500 mb-6 font-oswald font-light" style={{}}>
                  Company
                </h3>
<ul className="space-y-3 text-neutral-400">
<li>
<a className="hover:text-white transition-colors duration-200 font-sans" href="#" style={{}}>
                      About us
                    </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-200 font-sans" href="#" style={{}}>
                      Affiliates
                    </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-200 font-sans" href="#" style={{}}>
                      Support
                    </a>
</li>
</ul>
</div>
<div>
<h3 className="text-2xl text-neutral-500 mb-6 font-oswald font-light" style={{}}>
                  Legal
                </h3>
<ul className="space-y-3 text-neutral-400">
<li>
<a className="hover:text-white transition-colors duration-200 font-sans" href="#" style={{}}>
                      Privacy policy
                    </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-200 font-sans" href="#" style={{}}>
                      Terms and Condition
                    </a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="flex items-center px-6 text-neutral-600">
<span className="font-sans" style={{}}>+</span>
<div className="flex-1 mx-4 border-t border-dashed border-neutral-800"></div>
<span className="font-sans" style={{}}>+</span>
</div>
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
<span className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-sans" style={{}}>
            ©2025 Pandawa. All rights reserved.
          </span>
<span className="font-mono text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-1 font-sans" style={{}}>
            Made by
            <a className="text-white font-bold ml-1 hover:text-neutral-300 transition flex items-center gap-1 font-sans" href="#" style={{}}>
              Velox Themes
            </a>
</span>
</div>
</div>
<div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
</footer>


    </>
  );
}
