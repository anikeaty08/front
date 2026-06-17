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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    // Simple script to update spotlight effect mouse coordinates
    document.addEventListener('mousemove', e => {
        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="iBWBCzr77BGdZpQZVZNN"></div>

</div></div>

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center w-full max-w-7xl mx-auto px-6">
<div className="w-full h-full border-x border-dashed border-white/5 flex justify-center relative">
<div className="h-full w-px bg-dashed bg-white/5 absolute left-1/4"></div>
<div className="h-full w-px bg-white/5"></div>
<div className="h-full w-px bg-dashed bg-white/5 absolute right-1/4"></div>
</div>
</div>

<div className="fixed top-6 left-0 right-0 flex justify-center z-50 px-4 pointer-events-none">
<nav className="glass-nav flex w-full max-w-5xl pointer-events-auto rounded-full pt-3 pr-3 pb-3 pl-6 shadow-2xl items-center justify-between">

<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="solar:infinity-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2.75 12a4.25 4.25 0 0 1 6.8-3.4a.75.75 0 1 0 .901-1.2A5.75 5.75 0 1 0 7 17.75c.784 0 1.464-.143 2.064-.435s1.079-.714 1.489-1.215c.66-.804 1.196-1.894 1.776-3.074l.339-.689a.755.755 0 0 0-.339-1.008a.745.745 0 0 0-1.003.337l-.366.743c-.584 1.183-1.027 2.082-1.567 2.74c-.307.375-.624.64-.986.817s-.81.284-1.407.284A4.25 4.25 0 0 1 2.75 12" fill="currentColor" fill-rule="evenodd"></path><path d="M12.67 12.335a.755.755 0 0 0-.34-1.006a.746.746 0 0 0-.975.284q.162-.323.316-.639c.58-1.18 1.117-2.27 1.776-3.074c.41-.501.89-.923 1.49-1.215S16.217 6.25 17 6.25a5.75 5.75 0 1 1-3.45 10.35a.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.596 0-1.045.107-1.406.284c-.363.176-.68.442-.987.816c-.54.66-.983 1.558-1.567 2.741q-.174.355-.369.744z" fill="currentColor" opacity=".5"></path></svg>
<span className="text-xl font-semibold tracking-tight text-gray-100 font-geist">FlowMaster</span>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm text-gray-400 font-medium">
<a className="text-white transition-colors hover:text-orange-400 font-geist" href="#">Course</a>
<a className="hover:text-white transition-colors font-geist" href="#">Blueprints</a>
<a className="hover:text-white transition-colors font-geist" href="#">Community</a>
<a className="hover:text-white transition-colors font-geist" href="#">Consulting</a>
</div>

<div className="flex items-center gap-3">
<button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 transition-colors text-gray-300 font-geist">
<svg aria-hidden="true" data-icon="solar:stars-minimalistic-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.08 7.897C11.157 5.966 11.695 5 12.5 5s1.343.966 2.42 2.897l.278.5c.306.549.46.823.698 1.004s.535.248 1.13.383l.54.122c2.091.473 3.137.71 3.385 1.51c.249.8-.464 1.633-1.89 3.3l-.368.43c-.405.474-.607.711-.699 1.004c-.09.293-.06.609.001 1.24l.056.576c.216 2.224.323 3.336-.328 3.83s-1.63.044-3.587-.857l-.507-.234c-.556-.256-.834-.384-1.129-.384s-.573.128-1.13.384l-.506.234c-1.957.9-2.936 1.352-3.587.857c-.651-.494-.543-1.606-.328-3.83l.056-.575c.061-.632.092-.948 0-1.24c-.09-.294-.293-.53-.698-1.004l-.369-.432c-1.425-1.666-2.138-2.5-1.89-3.3c.25-.8 1.295-1.036 3.386-1.509l.54-.122c.595-.135.892-.202 1.13-.383c.239-.18.392-.455.698-1.004z" fill="currentColor"></path><path d="M4.868 2.5c.03-.105.217-.106.248 0c.14.482.4 1.194.793 1.585c.393.39 1.108.646 1.59.783c.107.03.107.217.002.248c-.482.14-1.195.4-1.586.793c-.39.393-.645 1.108-.782 1.59c-.03.107-.218.107-.249.002c-.14-.482-.4-1.195-.793-1.586c-.393-.39-1.107-.645-1.59-.782c-.106-.03-.107-.218-.001-.249c.482-.14 1.194-.4 1.585-.793c.39-.393.646-1.107.783-1.59" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M19 3.25a.75.75 0 0 1 .75.75v.25H20a.75.75 0 0 1 0 1.5h-.25V6a.75.75 0 0 1-1.5 0v-.25H18a.75.75 0 0 1 0-1.5h.25V4a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path></svg>
                    New Nodes
                </button>
<button className="px-5 py-2 rounded-full border border-white/20 bg-gray-100 text-black text-sm font-bold hover:bg-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] font-geist">
                    Login
                </button>
<button className="lg:hidden text-white flex items-center ml-2">
<svg aria-hidden="true" data-icon="solar:hamburger-menu-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" fill="currentColor" opacity=".5"></path><path d="M18.75 8a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m0 4a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m0 4a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75" fill="currentColor"></path></svg>
</button>
</div>
</nav>
</div>


<div className="spotlight-card group mx-4 sm:mx-6 lg:mt-32 xl:ml-auto xl:mr-auto max-w-7xl z-10 rounded-[40px] mt-32 pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{'--mouse-x': '1494.5px', '--mouse-y': '3875px'}}>
<div className="spotlight-inner overflow-hidden flex flex-col min-h-[1000px] z-10 rounded-[40px] justify-center">

<div className="absolute top-8 right-8 z-20 pointer-events-none">
<span className="font-mono text-sm font-bold text-white/10 tracking-widest font-geist">01</span>
</div>

<div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>

<main className="z-10 container lg:px-12 grid lg:grid-cols-2 gap-16 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="max-w-2xl relative" style={{}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6 font-geist">
<svg aria-hidden="true" data-icon="solar:bolt-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8.732 5.771L5.67 9.914c-1.285 1.739-1.928 2.608-1.574 3.291l.018.034c.375.673 1.485.673 3.704.673c1.233 0 1.85 0 2.236.363l.02.02l3.872-4.57l-.02-.02c-.379-.371-.379-.963-.379-2.148v-.31c0-3.285 0-4.927-.923-5.21s-1.913 1.056-3.892 3.734" fill="currentColor" fill-rule="evenodd"></path><path d="M10.453 16.443v.31c0 3.284 0 4.927.923 5.21s1.913-1.056 3.893-3.734l3.062-4.143c1.284-1.739 1.927-2.608 1.573-3.291l-.018-.034c-.375-.673-1.485-.673-3.704-.673c-1.233 0-1.85 0-2.236-.363l-3.872 4.57c.379.371.379.963.379 2.148" fill="currentColor" opacity=".5"></path></svg>
                        v2.0 Available
                    </div>
<h1 className="lg:text-7xl leading-[1.05] text-5xl mb-8 tracking-tighter text-white font-geist" style={{}}>
                        Automate Your 
                        <span className="text-gray-500 font-geist" style={{}}>Workflow</span> With 
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-geist" style={{}}>n8n Power</span>
</h1>
<p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg font-light font-geist" style={{}}>
                        The ultimate guide to building complex, node-based automations. Connect apps, manipulate JSON, and deploy AI agents without code.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4">

<button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-bold text-white tracking-widest font-geist rounded-full py-4 px-10 relative items-center justify-center">
<style>
            @keyframes beam-spin { to { transform: rotate(360deg); } }
            @keyframes dots-move { 
                0% { background-position: 0 0; } 
                100% { background-position: 24px 24px; } 
            }
        </style>

<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-[#151515]"></div>
</div>

<div className="-z-10 overflow-hidden bg-[#151515] rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">

<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>

<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
</div>

<span className="relative z-10 text-white/90 transition-colors group-hover:text-white font-geist">Start Learning</span>
<svg className="lucide lucide-arrow-right relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>

<button className="hover:bg-white/5 transition-all flex text-base font-medium text-gray-300 bg-white/5 rounded-full py-4 px-8 items-center justify-center font-geist relative overflow-hidden group/btn" style={{boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 20px rgba(0, 0, 0, 0.5)', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))', '--border-radius-before': '9999px'}}>
<span className="text-base font-medium text-gray-200 tracking-tight relative z-10 font-geist">
            View Curriculum
        </span>
<svg className="w-4 h-4 ml-2 opacity-70 relative z-10 group-hover/btn:scale-110 transition-transform" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
<style>
            [style*="--border-gradient"]::before {
                content: "";
                position: absolute;
                inset: 0;
                padding: 1px;
                border-radius: var(--border-radius-before, inherit);
                -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                background: var(--border-gradient);
                pointer-events: none;
            }
        </style>
</button>
</div>

<div className="mt-12 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-[#151515] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1cb81e0e-22cd-4d0a-ac80-d2e13d53b2fc_320w.webp"/>
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-[#151515] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/270994c0-0576-4faf-bd26-fcf0fea24a65_320w.webp"/>
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-[#151515] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/869c479b-501e-4e6f-9066-71746e56a026_320w.webp"/>
</div>
<div className="text-sm text-gray-400">
<p className="text-white font-medium font-geist">Join 500+ Automators</p>
<div className="flex items-center gap-1">
<svg aria-hidden="true" data-icon="solar:star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" data-icon="solar:star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" className="" data-icon="solar:star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" data-icon="solar:star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
<svg aria-hidden="true" data-icon="solar:star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
</div>
</div>
</div>
</div>

<div className="relative w-full flex items-center justify-center lg:justify-end">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[520px] gap-x-4 gap-y-4">

<div className="sm:row-span-2 flex flex-col overflow-hidden group hover:border-white/20 transition-all duration-500 bg-center bg-[#1E1E1E] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/69a1a657-c7ed-4e1a-a408-641c09309592_800w.webp)] bg-cover rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative shadow-xl justify-between">
<div className="z-10 flex flex-col h-full relative">
<div className="self-start inline-flex text-xs font-bold text-green-400 font-geist bg-green-500/10 border-green-500/20 border rounded-lg mb-8 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-lg gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="" data-icon="solar:check-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
                                    200 OK
                                </div>
<div className="flex flex-col gap-6 mt-auto mb-auto gap-x-6 gap-y-6 items-center">
<div className="flex items-center gap-[3px] h-8 opacity-60">
<div className="w-1 bg-white/20 rounded-full h-3"></div>
<div className="w-1 bg-orange-500 rounded-full h-8 animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 bg-orange-500 rounded-full h-6 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-1 bg-orange-500 rounded-full h-4 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-1 bg-white/20 rounded-full h-5"></div>
</div>
<div className="relative w-full">
<div className="flex bg-gradient-to-br from-white/10 to-white/0 rounded-xl pt-3 pr-4 pb-3 pl-4 relative shadow-lg backdrop-blur-xl gap-x-3 gap-y-3 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))', '--border-radius-before': '12px'}}>
<div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-orange-500">
<svg aria-hidden="true" className="text-slate-50 w-[16px] h-[16px]" data-icon="solar:code-square-bold-duotone" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path><path className="" d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" fill="currentColor"></path></svg>
</div>
<div className="">
<div className="text-xs text-gray-400 font-geist">Processing Data</div>
<div className="text-sm font-mono text-white font-geist">JSON Parser</div>
</div>
<div className="ml-auto">
<svg aria-hidden="true" className="" data-icon="solar:check-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</div>
</div>
</div>
<button className="flex hover:scale-110 transition-all cursor-pointer text-orange-500 bg-orange-500/10 w-10 h-10 rounded-full mt-2 backdrop-blur-lg items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<svg aria-hidden="true" className="w-[16px] h-[16px]" data-icon="solar:bolt-bold-duotone" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(249, 115, 22)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M8.732 5.771L5.67 9.914c-1.285 1.739-1.928 2.608-1.574 3.291l.018.034c.375.673 1.485.673 3.704.673c1.233 0 1.85 0 2.236.363l.02.02l3.872-4.57l-.02-.02c-.379-.371-.379-.963-.379-2.148v-.31c0-3.285 0-4.927-.923-5.21s-1.913 1.056-3.892 3.734" fill="currentColor" fill-rule="evenodd"></path><path className="" d="M10.453 16.443v.31c0 3.284 0 4.927.923 5.21s1.913-1.056 3.893-3.734l3.062-4.143c1.284-1.739 1.927-2.608 1.573-3.291l-.018-.034c-.375-.673-1.485-.673-3.704-.673c-1.233 0-1.85 0-2.236-.363l-3.872 4.57c.379.371.379.963.379 2.148" fill="currentColor" opacity=".5"></path></svg>
</button>
</div>
<div className="mt-8">
<h3 className="text-lg font-medium text-white tracking-tight mb-2 font-geist">Logic Nodes</h3>
<p className="text-sm text-gray-400 leading-relaxed font-light font-geist">Stop manual entry. Build self-healing workflows.</p>
</div>
</div>
</div>

<div className="flex flex-col overflow-hidden group hover:border-white/20 transition-all duration-500 bg-center text-center bg-[#1E1E1E] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47459120-5783-44ef-8e5d-2c5bc5584162_800w.webp)] bg-cover rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative shadow-xl items-center">
<h3 className="relative z-10 text-base font-medium text-gray-200 mb-6 font-geist">Sync Data</h3>
<div className="relative z-10 w-full flex justify-center mt-auto h-24 items-end">
<div className="relative w-full max-w-[140px] h-full flex items-center justify-center">
<div className="absolute w-20 h-px bg-white/10 top-1/2 left-1/2 -translate-x-1/2"></div>
<div className="flex -translate-x-12 z-10 text-gray-400 bg-gradient-to-br from-white/10 to-white/0 w-10 h-10 rounded-lg absolute shadow-lg backdrop-blur-lg items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))', '--border-radius-before': '8px'}}>
<svg aria-hidden="true" className="text-zinc-50 w-[16px] h-[16px]" data-icon="solar:database-bold-duotone" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4" fill="currentColor"></path><path className="" d="M4 12v6c0 2.21 3.582 4 8 4s8-1.79 8-4v-6c0 2.21-3.582 4-8 4s-8-1.79-8-4" fill="currentColor" opacity=".5"></path><path className="" d="M4 6v6c0 2.21 3.582 4 8 4s8-1.79 8-4V6c0 2.21-3.582 4-8 4S4 8.21 4 6" fill="currentColor" opacity=".7"></path></svg>
</div>
<div className="flex z-10 text-gray-400 bg-gradient-to-br from-white/10 to-white/0 w-10 h-10 rounded-lg absolute shadow-lg backdrop-blur-lg translate-x-12 items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))', '--border-radius-before': '8px'}}>
<svg aria-hidden="true" className="w-[16px] h-[16px] text-slate-50" data-icon="solar:users-group-rounded-bold-duotone" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="6" fill="currentColor" opacity=".4" r="3"></circle><ellipse className="" cx="16" cy="17" fill="currentColor" opacity=".4" rx="5" ry="3"></ellipse><circle cx="9.001" cy="6" fill="currentColor" r="4"></circle><ellipse className="" cx="9.001" cy="17.001" fill="currentColor" rx="7" ry="4"></ellipse></svg>
</div>
<div className="absolute w-3 h-3 bg-orange-500 rounded-full z-20 animate-[ping_2s_linear_infinite]"></div>
</div>
</div>
</div>

<div className="flex flex-col overflow-hidden group hover:border-white/20 transition-all duration-500 text-center bg-gradient-to-br from-white/10 to-white/0 rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative shadow-xl items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '32px'}}>
<h3 className="relative z-10 text-base font-medium text-gray-200 mb-4 font-geist">API Integration</h3>
<div className="z-10 flex w-full mt-auto relative justify-center">
<div className="flex transition-colors bg-gradient-to-br from-white/10 to-white/0 w-full max-w-[200px] rounded-2xl pt-2 pr-5 pb-2 pl-2 gap-x-3 gap-y-3 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<div className="flex shrink-0 bg-[#303030] w-10 h-10 border-white/10 border rounded-lg items-center justify-center">
<svg aria-hidden="true" className="w-[16px] h-[16px]" data-icon="solar:bolt-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="global-bold-duotone" height="16" role="img" strokeWidth="2" style={{color: 'rgb(249, 115, 22)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2.028 11.25A10 10 0 0 1 12 2c-.83 0-1.57.364-2.18.921c-.605.554-1.116 1.328-1.53 2.242c-.416.92-.74 1.996-.959 3.163a20 20 0 0 0-.318 2.924zm0 1.5h4.985c.036 1.002.143 1.988.318 2.924c.22 1.167.543 2.243.959 3.163c.414.914.925 1.688 1.53 2.242c.61.557 1.35.921 2.18.921c-5.27 0-9.589-4.077-9.972-9.25" fill="#f97316" fill-rule="evenodd"></path><path d="M12 2c.831 0 1.57.364 2.18.921c.605.554 1.117 1.328 1.53 2.242c.417.92.74 1.996.959 3.163c.175.936.282 1.922.318 2.924h4.985A10 10 0 0 0 12 2m4.669 13.674c-.219 1.167-.542 2.243-.959 3.163c-.413.914-.925 1.688-1.53 2.242c-.61.557-1.349.921-2.18.921c5.27 0 9.589-4.077 9.972-9.25h-4.985a20 20 0 0 1-.318 2.924" fill="#f97316"></path><path d="M12 3.396c-.275 0-.63.117-1.043.495c-.416.38-.833.977-1.201 1.79c-.366.808-.663 1.784-.867 2.873c-.16.859-.26 1.768-.296 2.696h6.814a18.5 18.5 0 0 0-.296-2.696c-.204-1.09-.5-2.065-.867-2.872c-.368-.814-.784-1.41-1.2-1.791c-.414-.378-.769-.495-1.044-.495m-3.111 12.05c.204 1.09.501 2.065.867 2.873c.368.813.785 1.41 1.2 1.79c.414.379.77.496 1.044.496c.275 0 .63-.117 1.044-.495c.416-.381.832-.978 1.2-1.791c.366-.808.663-1.783.867-2.873c.161-.858.261-1.768.296-2.696H8.593c.035.928.135 1.838.296 2.696" fill="#f97316" opacity=".5"></path></svg>
</div>
<div className="text-left flex-1">
<div className="flex justify-between items-center w-full">
<p className="text-sm font-semibold text-white font-geist">HTTP Request</p>
</div>
<div className="flex justify-between items-center mt-0.5">
<p className="text-xs text-gray-500 font-geist">GET /users</p>
<p className="text-xs text-green-400 font-medium font-geist">200</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="border-t border-white/5 bg-[#121212] mt-auto">
<div className="overflow-hidden relative w-full py-8" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="ticker-track flex gap-12 items-center">
<div className="flex gap-12 shrink-0 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">Google</span>
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">OpenAI</span>
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">Slack</span>
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">HubSpot</span>
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">Notion</span>
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">Airtable</span>
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">Stripe</span>
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">Postgres</span>
</div>

<div className="flex gap-12 shrink-0 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">Google</span>
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">OpenAI</span>
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">Slack</span>
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">HubSpot</span>
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">Notion</span>
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">Airtable</span>
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">Stripe</span>
<span className="text-xl font-bold tracking-tight text-white mx-6 font-geist">Postgres</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="spotlight-card group mx-4 sm:mx-6 xl:ml-auto xl:mr-auto max-w-7xl rounded-[40px] mt-4 mr-3 ml-3 pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{'--mouse-x': '1494.5px', '--mouse-y': '2850.6015625px'}}>
<div className="spotlight-inner sm:p-12 flex flex-col lg:flex-row lg:items-center gap-8 rounded-[40px] pt-8 pr-8 pb-8 pl-8 gap-x-8 gap-y-8 items-start justify-between">
<div className="absolute top-6 right-8 z-20 pointer-events-none">
<span className="font-mono text-sm font-bold text-white/10 tracking-widest font-geist">02</span>
</div>
<div className="max-w-md">
<h2 className="text-2xl sm:text-3xl mb-2 tracking-tighter text-white font-geist" style={{}}>What you will master</h2>
<p className="text-gray-400 text-base font-light font-geist">From basic webhooks to advanced Javascript execution nodes.</p>
</div>
<div className="flex flex-wrap gap-3 max-w-2xl justify-start lg:justify-end" style={{}}>
<div className="group/pill flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all cursor-pointer">
<svg aria-hidden="true" data-icon="solar:link-round-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8 2.25A6.75 6.75 0 0 0 2.969 13.5a.75.75 0 0 0 1.118-1A5.25 5.25 0 0 1 8 3.75h4a5.25 5.25 0 1 1 0 10.5h-2a.75.75 0 0 0 0 1.5h2a6.75 6.75 0 0 0 0-13.5z" fill="currentColor" fill-rule="evenodd"></path><path d="M6.75 15c0-2.9 2.35-5.25 5.25-5.25h2a.75.75 0 0 0 0-1.5h-2a6.75 6.75 0 0 0 0 13.5h4a6.75 6.75 0 0 0 5.031-11.25a.75.75 0 0 0-1.118 1A5.25 5.25 0 0 1 16 20.25h-4A5.25 5.25 0 0 1 6.75 15" fill="currentColor" opacity=".5"></path></svg>
<span className="text-sm font-medium font-geist">Webhook Triggers</span>
</div>
<div className="group/pill flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all cursor-pointer" style={{}}>
<svg aria-hidden="true" data-icon="solar:code-file-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M10.702 14.264a.75.75 0 1 0-1.404-.527l-1.5 4a.75.75 0 1 0 1.404.527zm-3.172.266a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 0 0 0 1.06l1 1a.75.75 0 0 0 1.06-1.06L7.06 15zm4.5.94a.75.75 0 1 0-1.06 1.06l.47.47l-.47.47a.75.75 0 1 0 1.06 1.06l1-1a.75.75 0 0 0 0-1.06zm-.52-13.21l-.01 2.835c0 1.097 0 2.066.105 2.848c.114.847.375 1.694 1.067 2.385c.69.691 1.538.953 2.385 1.067c.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161c-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z" fill="currentColor"></path></svg>
<span className="text-sm font-medium font-geist">JSON Manipulation</span>
</div>
<div className="group/pill flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all cursor-pointer">
<svg aria-hidden="true" data-icon="solar:chat-round-line-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" fill="currentColor" opacity=".5"></path><path d="M7.825 12.85a.825.825 0 0 0 0 1.65h6.05a.825.825 0 0 0 0-1.65zm0-3.85a.825.825 0 0 0 0 1.65h8.8a.825.825 0 0 0 0-1.65z" fill="currentColor"></path></svg>
<span className="text-sm font-medium font-geist">AI Agents</span>
</div>
<div className="group/pill flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all cursor-pointer">
<svg aria-hidden="true" data-icon="solar:shield-warning-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z" fill="currentColor" opacity=".5"></path><path d="M12 7.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M12 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2" fill="currentColor"></path></svg>
<span className="text-sm font-medium font-geist">Error Handling</span>
</div>
<div className="group/pill flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all cursor-pointer">
<svg aria-hidden="true" data-icon="solar:server-square-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-.25h20V13c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21M10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v.25H2V11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M22 12.75H2v-1.5h20z" fill="currentColor" fill-rule="evenodd"></path><path d="M12.75 16.5a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m0-9a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M6 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75m0-9a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75m3 9a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75m0-9a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75" fill="currentColor"></path></svg>
<span className="text-sm font-medium font-geist">Data Sync</span>
</div>
</div>
</div>
</div>

<div className="sm:mx-6 grid grid-cols-1 lg:grid-cols-12 xl:ml-auto xl:mr-auto max-w-7xl z-10 mt-4 mr-3 ml-3 relative gap-x-4 gap-y-4">

<div className="lg:col-span-5 p-[1px] spotlight-card rounded-[40px] relative group" style={{'--mouse-x': '1494.5px', '--mouse-y': '2640.6015625px'}}>
<div className="spotlight-inner rounded-[40px] p-8 sm:p-10 relative overflow-hidden" style={{}}>
<div className="absolute top-8 right-8 z-20 pointer-events-none">
<span className="font-mono text-sm font-bold text-white/10 tracking-widest font-geist">03</span>
</div>
<div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]" style={{}}>
<div className="flex justify-between items-start">
<span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs uppercase tracking-wider font-bold border border-white/10 text-orange-400 font-geist">Best Seller</span>
<svg aria-hidden="true" data-icon="solar:arrow-right-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd">
</path>
<path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path>
</svg>
</div>
<div className="" style={{}}>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full border-2 border-white/10 bg-gray-800 flex items-center justify-center">
<span className="text-sm font-bold text-white font-geist">FM</span>
</div>
<div className="">
<p className="text-sm font-semibold text-white font-geist">FlowMaster Academy</p>
<p className="text-xs text-gray-400 font-geist">Updated for v2.0</p>
</div>
</div>
<h3 className="text-2xl tracking-tighter text-white font-geist" style={{}}>The Ultimate n8n Developer Course</h3>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 p-[1px] spotlight-card rounded-[40px] relative group h-full" style={{'--mouse-x': '954.5px', '--mouse-y': '2640.6015625px'}}>
<div className="spotlight-inner overflow-hidden flex flex-col min-h-[300px] rounded-[40px] pt-6 pr-6 pb-6 pl-6 relative justify-end">
<div className="bg-center bg-orange-600 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d80181f-00cd-4e1e-9a4b-d2a9c4811268_1600w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 flex flex-col gap-4 text-center mt-auto relative gap-x-4 gap-y-4 items-center">
<div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 relative shadow-2xl">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38af7ee7-0aff-4626-b539-956e52065ebc_320w.webp"/>
</div>
<h3 className="text-xl font-medium mt-2 text-white font-geist">Live Workshops</h3>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-orange-400 hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</button>
</div>
<div className="absolute top-6 left-6 flex items-center gap-2 text-sm text-orange-200/70 font-geist">
<svg aria-hidden="true" data-icon="solar:videocamera-record-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5z" fill="currentColor"></path><path clip-rule="evenodd" d="M2.908 5.462C2 6.57 2 8.212 2 11.5v1c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554C4.57 20 6.212 20 9.5 20c3.287 0 4.931 0 6.038-.908q.304-.25.554-.554C17 17.43 17 15.788 17 12.5v-1c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554C14.43 4 12.788 4 9.5 4c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M14 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" fill="currentColor"></path></svg>
                    Next session in 2d
                </div>
</div>
</div>

<div className="lg:col-span-4 p-[1px] spotlight-card rounded-[40px] relative group h-full" style={{'--mouse-x': '630.5px', '--mouse-y': '2640.6015625px'}}>
<div className="spotlight-inner rounded-[40px] p-8 flex flex-col justify-between" style={{}}>
<div className="mb-8">
<h3 className="text-xl font-medium text-white font-geist mb-2">Ready-made Blueprints</h3>
<p className="text-sm text-gray-500 font-light font-geist">Copy and paste workflows directly into your editor.</p>
</div>
<div className="flex flex-wrap gap-2 content-start" style={{}}>
<div className="flex items-center gap-2 pr-4 pl-1 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition">
<div className="w-6 h-6 rounded-full bg-green-900/50 flex items-center justify-center text-xs text-green-400 font-geist">S</div>
<span className="text-xs font-medium text-gray-300 font-geist">Scrapers</span>
</div>
<div className="flex items-center gap-2 pr-4 pl-1 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition">
<div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center text-xs text-blue-400 font-geist">L</div>
<span className="text-xs font-medium text-gray-300 font-geist">Lead Gen</span>
</div>
<div className="flex items-center gap-2 pr-4 pl-1 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition">
<div className="w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center text-xs text-purple-400 font-geist">A</div>
<span className="text-xs font-medium text-gray-300 font-geist">Auto-GPT</span>
</div>
<div className="flex items-center gap-2 pr-4 pl-1 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition">
<div className="w-6 h-6 rounded-full bg-yellow-900/50 flex items-center justify-center text-xs text-yellow-400 font-geist">C</div>
<span className="text-xs font-medium text-gray-300 font-geist">CRM Sync</span>
</div>
<div className="flex items-center gap-2 pr-4 pl-1 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition" style={{}}>
<div className="w-6 h-6 rounded-full bg-red-900/50 flex items-center justify-center text-xs text-red-400 font-geist" style={{}}>E</div>
<span className="text-xs font-medium text-gray-300 font-geist">Email Seq</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<p className="text-base font-serif italic text-gray-500 font-geist">"Automation is the new leverage."</p>
<div className="flex gap-2 mt-4">
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 text-white">
<svg aria-hidden="true" className="" data-icon="solar:alt-arrow-left-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.596 8.303L8.165 11.63a.5.5 0 0 0 0 .74l6.63 6.43c.414.401 1.205.158 1.205-.37v-5.723z" fill="currentColor"></path><path d="M16 11.293V5.57c0-.528-.791-.771-1.205-.37l-2.482 2.406z" fill="currentColor" opacity=".5"></path></svg>
</button>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 text-white">
<svg aria-hidden="true" data-icon="solar:alt-arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12.404 8.303l3.431 3.327c.22.213.22.527 0 .74l-6.63 6.43C8.79 19.201 8 18.958 8 18.43v-5.723z" fill="currentColor"></path><path d="M8 11.293V5.57c0-.528.79-.771 1.205-.37l2.481 2.406z" fill="currentColor" opacity=".5"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div><div className="sm:mx-6 spotlight-card group xl:ml-auto xl:mr-auto max-w-7xl rounded-[40px] mt-4 mr-3 ml-3 pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{'--mouse-x': '1494.5px', '--mouse-y': '2242.6015625px'}}>
<div className="spotlight-inner sm:p-12 lg:p-16 overflow-hidden bg-[#0A0A0A] rounded-[40px] pt-8 pr-8 pb-8 pl-8 relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="absolute top-8 right-8 z-20 pointer-events-none opacity-50">
<span className="font-mono text-sm font-bold text-white/10 tracking-widest font-geist">04</span>
</div>
<div className="grid lg:grid-cols-2 lg:gap-24 z-10 relative gap-x-12 gap-y-12 items-center">

<div className="order-2 lg:order-1" style={{}}>
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-white mb-6 leading-[1.1] font-geist" style={{}}>
                    Make data flow 
                    <span className="text-gray-500 font-geist" style={{}}>effortlessly</span>
</h2>
<p className="text-gray-400 text-lg sm:text-xl font-light mb-8 leading-relaxed max-w-lg font-geist" style={{}}>
                    Capture triggers across any business interaction – from sales calls to support chats – and turn them into actionable tasks automatically linked to your internal databases.
                </p>
<p className="text-gray-500 text-base leading-relaxed max-w-md mb-8 font-geist">
                    FlowMaster nodes integrate seamlessly with 200+ tools, allowing you to route payloads directly from your support platform, email client, or shared Slack channels into structured data.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 font-geist">
                        Start Building
                        <svg aria-hidden="true" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</button>
<div className="text-sm text-gray-500 flex items-center gap-2 font-geist">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Compatible with v2.0+
                    </div>
</div>
</div>

<div className="order-1 lg:order-2 relative w-full flex flex-col items-center select-none pointer-events-none">

<div className="w-full flex justify-between text-xs uppercase tracking-widest text-gray-600 font-bold font-mono mb-2 px-4 opacity-50 max-w-[400px]">
<span className="font-geist">Sources</span>
<span className="font-geist">Pipeline</span>
</div>

<div className="relative z-10 flex justify-between w-full max-w-[400px] mb-8 gap-2">

<div className="w-10 h-10 rounded-xl bg-[#151515] border border-white/10 flex items-center justify-center text-gray-500 shadow-lg">
<svg aria-hidden="true" data-icon="simple-icons:intercom" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 0H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18c1.658 0 3-1.342 3-3V3a3 3 0 0 0-3-3m-5.801 4.399c0-.44.36-.8.802-.8c.44 0 .8.36.8.8v10.688a.802.802 0 0 1-1.602 0zM11.2 3.994a.8.8 0 0 1 1.6 0v11.602a.8.8 0 0 1-1.6 0zm-4 .405a.801.801 0 0 1 1.601 0v10.688a.801.801 0 0 1-1.601 0zM3.199 6A.801.801 0 0 1 4.8 6v7.195a.8.8 0 0 1-1.601 0zM20.52 18.202c-.123.105-3.086 2.593-8.52 2.593s-8.397-2.486-8.521-2.593a.8.8 0 0 1 1.039-1.218c.047.041 2.693 2.211 7.481 2.211c4.848 0 7.456-2.186 7.479-2.207a.8.8 0 0 1 1.128.086c.289.336.25.84-.086 1.128m.281-5.007a.802.802 0 0 1-1.602 0V6a.802.802 0 0 1 1.602 0z" fill="currentColor"></path></svg>
</div>

<div className="w-10 h-10 rounded-xl bg-[#151515] border border-white/10 flex items-center justify-center text-gray-500 shadow-lg">
<svg aria-hidden="true" data-icon="simple-icons:slack" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 15.165a2.53 2.53 0 0 1-2.52 2.523A2.53 2.53 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52a2.527 2.527 0 0 1 2.521 2.52v6.313A2.53 2.53 0 0 1 8.834 24a2.53 2.53 0 0 1-2.521-2.522zM8.834 5.042a2.53 2.53 0 0 1-2.521-2.52A2.53 2.53 0 0 1 8.834 0a2.53 2.53 0 0 1 2.521 2.522v2.52zm0 1.271a2.53 2.53 0 0 1 2.521 2.521a2.53 2.53 0 0 1-2.521 2.521H2.522A2.53 2.53 0 0 1 0 8.834a2.53 2.53 0 0 1 2.522-2.521zm10.122 2.521a2.53 2.53 0 0 1 2.522-2.521A2.53 2.53 0 0 1 24 8.834a2.53 2.53 0 0 1-2.522 2.521h-2.522zm-1.268 0a2.53 2.53 0 0 1-2.523 2.521a2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.53 2.53 0 0 1 2.523 2.522zm-2.523 10.122a2.53 2.53 0 0 1 2.523 2.522A2.53 2.53 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522zm0-1.268a2.527 2.527 0 0 1-2.52-2.523a2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.53 2.53 0 0 1-2.522 2.523z" fill="currentColor"></path></svg>
</div>

<div className="w-10 h-10 rounded-xl bg-[#151515] border border-white/10 flex items-center justify-center text-gray-500 shadow-lg">
<svg aria-hidden="true" data-icon="simple-icons:zendesk" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.914 2.904V16.29L24 2.905zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544zm11.086 4.807L0 21.096h11.086zm7.37 7.84a5.54 5.54 0 0 0-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z" fill="currentColor"></path></svg>
</div>

<div className="w-10 h-10 rounded-xl bg-[#151515] border border-orange-500/30 flex items-center justify-center text-white shadow-[0_0_20px_rgba(234,88,12,0.15)] relative scale-110 transition-transform">
<svg aria-hidden="true" data-icon="simple-icons:typeform" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 13.035c-.5 0-.756-.411-.756-.917c0-.505.252-.894.756-.894c.513 0 .756.407.756.894c-.004.515-.261.917-.756.917m-4.888-1.81c.292 0 .414.17.414.317c0 .357-.365.514-1.126.536c0-.442.253-.854.712-.854Zm-3.241 1.81c-.473 0-.67-.384-.67-.917c0-.527.202-.894.67-.894c.477 0 .702.38.702.894c0 .537-.234.917-.702.917m-3.997-2.334h-.738l1.224 2.808c-.234.519-.36.648-.522.648c-.171 0-.333-.138-.45-.259l-.324.43c.22.232.522.366.832.366c.387 0 .685-.224.856-.626l1.413-3.371h-.725l-.738 2.012zm19.553.523c.36 0 .432.246.432.823v1.516H24v-1.914c0-.689-.473-.988-.91-.988c-.386 0-.742.241-.94.688a.9.9 0 0 0-.891-.688c-.365 0-.73.232-.927.666v-.626h-.64v2.857h.64v-1.22c0-.617.324-1.114.765-1.114c.36 0 .427.246.427.823v1.516h.64l-.005-1.225c0-.617.329-1.114.77-1.114m-5.1-.523h-.324v2.857h.639v-1.095c0-.693.306-1.163.76-1.163c.118 0 .217.005.325.05l.099-.676c-.081-.009-.153-.018-.225-.018c-.45 0-.774.309-.964.707V10.7h-.31Zm-2.327-.045c-.846 0-1.418.644-1.418 1.458c0 .845.58 1.475 1.418 1.475c.85 0 1.431-.648 1.431-1.475c-.004-.818-.594-1.458-1.431-1.458m-4.852 2.38c-.333 0-.581-.17-.685-.515c.847-.036 1.675-.242 1.675-.988c0-.43-.423-.872-1.03-.872c-.82 0-1.374.872z" fill="currentColor"></path></svg>
</div>
</div>

<div className="relative w-full max-w-[400px] flex flex-col items-center">

<div className="absolute inset-0 z-0 pointer-events-none">
<svg className="w-full h-full" fill="none" viewbox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<defs>
</defs>

<path d="M65 0 V40 C65 60 200 60 200 80 V100" stroke="white" stroke-dasharray="4 4" stroke-opacity="0.05" strokeWidth="2"></path>
<path d="M155 0 V40 C155 60 200 60 200 80 V100" stroke="white" stroke-dasharray="4 4" stroke-opacity="0.05" strokeWidth="2"></path>
<path d="M245 0 V40 C245 60 200 60 200 80 V100" stroke="white" stroke-dasharray="4 4" stroke-opacity="0.05" strokeWidth="2"></path>

<path className="opacity-30" d="M335 0 V40 C335 60 200 60 200 80 V100" stroke="url(#paint0_linear)" stroke-dasharray="4 4" strokeWidth="2"></path>

<path className="animate-[dash_3s_linear_infinite]" d="M335 0 V40 C335 60 200 60 200 80 V100" stroke="#F97316" stroke-dasharray="10 100" strokeWidth="2"></path>

<path d="M200 180 V220" stroke="white" stroke-opacity="0.1" strokeWidth="2"></path>
<style className="font-geist">
                                @keyframes dash { to { stroke-dashoffset: -110; } }
                            </style>
</svg>
</div>

<div className="relative z-10 mt-[80px] w-64 bg-[#1E1E1E] rounded-2xl p-4 border border-orange-500/50 shadow-[0_0_30px_-10px_rgba(234,88,12,0.3)]">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white">
<svg aria-hidden="true" data-icon="solar:bolt-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8.732 5.771L5.67 9.914c-1.285 1.739-1.928 2.608-1.574 3.291l.018.034c.375.673 1.485.673 3.704.673c1.233 0 1.85 0 2.236.363l.02.02l3.872-4.57l-.02-.02c-.379-.371-.379-.963-.379-2.148v-.31c0-3.285 0-4.927-.923-5.21s-1.913 1.056-3.892 3.734" fill="currentColor" fill-rule="evenodd"></path><path d="M10.453 16.443v.31c0 3.284 0 4.927.923 5.21s1.913-1.056 3.893-3.734l3.062-4.143c1.284-1.739 1.927-2.608 1.573-3.291l-.018-.034c-.375-.673-1.485-.673-3.704-.673c-1.233 0-1.85 0-2.236-.363l-3.872 4.57c.379.371.379.963.379 2.148" fill="currentColor" opacity=".5"></path></svg>
</div>
<div>
<div className="text-xs font-bold text-white uppercase tracking-wider font-geist">Trigger</div>
<div className="text-sm text-gray-300 font-geist">Webhook Received</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
</div>

<div className="bg-[#111] rounded-lg p-3 font-mono text-[10px] text-gray-500 leading-relaxed border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-1">
<span className="text-[8px] text-orange-400 bg-orange-400/10 px-1 rounded font-geist">JSON</span>
</div>
<p className="font-geist"><span className="text-purple-400 font-geist">"event"</span>: <span className="text-green-400 font-geist">"form_submit"</span>,</p>
<p className="font-geist"><span className="text-purple-400 font-geist">"email"</span>: <span className="text-green-400 font-geist">"user@co.com"</span>,</p>
<p className="font-geist"><span className="text-purple-400 font-geist">"timestamp"</span>: <span className="text-blue-400 font-geist">167823...</span></p>
</div>
</div>

<div className="w-1 h-8 bg-gradient-to-b from-orange-500/50 to-white/10 w-px my-0"></div>

<div className="relative z-10 w-64 bg-[#1E1E1E] rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#336791] flex items-center justify-center text-white">
<svg aria-hidden="true" data-icon="simple-icons:postgresql" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.758 5.758q.121-.242.303-.545q.424-.728 1.455-1.576l.363-.303q1.152-.97 2.122-1.273q.97-.303 1.878-.303q.243 0 .788.06q.546.061.788.122q.242.06.424.121q.243.06.485.182q.121.06.242.121q.303.182.485.424q.182.243.243.485q.06.243.06.728q0 .181-.121.848q-.06.606-.121.909q-.06.303-.122.667q-.06.303-.06.666q0 .122.03.364q.03.242.152.667q.06.363.242.97q.182.605.303 1.09q.121.485.121.728q0 .545-.182 1.03q-.181.424-.545.909q-.303.364-.788.848q-.485.425-1.03.788q-.546.364-1.212.728q-.606.303-1.394.666q-.788.303-1.637.546q-.848.242-1.818.424q-.97.121-1.939.121q-.424 0-1.151-.06q-.728-.061-1.273-.182q-.545-.061-.909-.243q-.303-.121-.606-.242q-.243-.121-.485-.242q-.242-.182-.424-.243q-.182-.12-.303-.12q-.061 0-.122.06q-.06.061-.12.243q0 .121.06.363q.12.364.303.667q.182.242.424.545q.182.182.303.243q.122.06.243.06q.181 0 .363-.121q.182-.121.485-.303q.242-.182.545-.303q.243-.122.546-.122q.424 0 .97.303q.545.243.908.667q.364.364.606.848q.243.425.303.97q.061.424-.06.909q-.061.485-.364.97q-.303.424-.727.666q-.425.243-.909.243q-.243 0-.667-.121q-.424-.061-.848-.303q-.425-.243-.728-.546q-.242-.303-.303-.788q-.06-.424.06-.97q.061-.424.243-.848q.182-.424.424-.788q.122-.182.182-.303q.06-.182.06-.242q0-.122-.06-.182q-.061-.121-.182-.182q-.061-.061-.121-.061q-.122 0-.303.121q-.122.061-.303.243q-.122.121-.243.363q-.121.182-.121.364q0 .303.182.727q.121.364.303.788q.182.424.303.848q.06.364.06.667q0 .424-.182.727q-.182.303-.545.485q-.364.182-.849.182q-.363 0-.788-.121q-.424-.122-.848-.364q-.424-.303-.788-.667q-.364-.424-.606-.909q-.243-.485-.364-1.03q-.121-.545-.121-1.091q0-.606.121-1.273q.182-.727.424-1.393q.303-.728.667-1.455q.363-.788.848-1.515q.424-.667.97-1.333q.484-.606 1.09-1.152q.546-.545 1.212-.97q.606-.424 1.334-.787" fill="currentColor"></path></svg>
</div>
<div>
<div className="text-xs font-bold text-gray-400 uppercase tracking-wider font-geist">Action</div>
<div className="text-sm text-gray-200 font-geist">Insert Row</div>
</div>
<div className="ml-auto opacity-50">
<svg aria-hidden="true" data-icon="solar:check-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div><div className="sm:mx-6 spotlight-card group xl:ml-auto xl:mr-auto max-w-7xl rounded-[40px] mt-4 mr-3 ml-3 pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{'--mouse-x': '1494.5px', '--mouse-y': '1656.6015625px'}}>
<div className="spotlight-inner sm:p-16 lg:p-24 overflow-hidden flex flex-col bg-[#0A0A0A] rounded-[40px] pt-8 pr-8 pb-8 pl-8 relative items-center">

<div className="absolute top-8 right-8 z-20 pointer-events-none opacity-30">
<span className="font-mono text-sm font-semibold text-white tracking-widest font-geist">05</span>
</div>

<div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
<div className="inline-flex gap-2 uppercase text-xs font-bold text-orange-400 tracking-widest font-geist bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-md gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="iconify text-base iconify--solar" data-icon="solar:danger-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" fill="currentColor" opacity=".5"></path>
<path d="M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" fill="currentColor">
</path>
</svg>
  The Bottleneck
</div>
<h2 className="text-4xl sm:text-5xl lg:text-7xl tracking-tighter text-white mb-8 leading-[1.05] font-geist" style={{}}>
      Struggling with slow,
      <span className="text-gray-600 font-geist" style={{}}>expensive onboarding?</span>
</h2>
<p className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto font-geist">
      Stop relying on fragile scripts and manual data entry.
      <span className="text-gray-200 font-medium font-geist">40% of engineering time</span> is wasted maintaining internal tools that
      break silently.
    </p>
</div>

<div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">

<div className="p-8 rounded-[32px] bg-[#151515] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col justify-between min-h-[240px] group/card hover:-translate-y-1 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 grayscale transition-all duration-500 group-hover/card:grayscale-0 group-hover/card:opacity-50">
<svg aria-hidden="true" data-icon="simple-icons:salesforce" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M10.006 5.415a4.2 4.2 0 0 1 3.045-1.306c1.56 0 2.954.9 3.69 2.205c.63-.3 1.35-.45 2.1-.45c2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.176 5.22c-.345 0-.69-.044-1.02-.104a3.75 3.75 0 0 1-3.3 1.95c-.6 0-1.155-.15-1.65-.375A4.31 4.31 0 0 1 8.88 20.4a4.3 4.3 0 0 1-4.05-2.82c-.27.062-.54.076-.825.076c-2.204 0-4.005-1.8-4.005-4.05c0-1.5.811-2.805 2.01-3.51c-.255-.57-.39-1.2-.39-1.846c0-2.58 2.1-4.65 4.65-4.65c1.53 0 2.85.705 3.72 1.8" fill="currentColor">
</path>
</svg>
</div>
<p className="text-xl text-gray-300 font-light leading-relaxed tracking-tight font-geist">"New customers need to be
        onboarded in <span className="text-white font-medium font-geist">less than a day</span>, not weeks. Manual SQL queries are
        slowing us down."</p>
<div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white font-geist">JD
        </div>
<div>
<div className="text-sm font-semibold text-white font-geist">John Doe</div>
<div className="text-xs text-gray-500 font-geist">Head of Sales Ops</div>
</div>
</div>
</div>

<div className="flex flex-col min-h-[240px] hover:opacity-100 transition-all duration-500 group/card overflow-hidden bg-[#121212] opacity-60 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4780cd9-2a3d-4bdc-9e5f-85a097b3a8bf_1600w.webp)] bg-cover bg-center border-white/5 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<div className="group-hover/card:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-[#635BFF]/10 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
<svg aria-hidden="true" className="iconify text-6xl text-white/20 group-hover/card:text-[#635BFF] transition-colors duration-500 iconify--simple-icons" data-icon="simple-icons:stripe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z" fill="currentColor">
</path>
</svg>
<p className="mt-4 text-sm font-medium text-gray-500 uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-500 font-geist">
        Payment Sync Error</p>
</div>

<div className="p-8 rounded-[32px] bg-[#151515] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col justify-between min-h-[240px] group/card hover:-translate-y-1 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 grayscale transition-all duration-500 group-hover/card:grayscale-0 group-hover/card:opacity-50">
<svg aria-hidden="true" className="iconify text-3xl text-[#E34F26] iconify--simple-icons" data-icon="simple-icons:git" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039a1.837 1.837 0 0 1-2.6 0a1.85 1.85 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.85 1.85 0 0 1 0 2.6a1.844 1.844 0 0 1-2.609 0a1.834 1.834 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7L.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187" fill="currentColor">
</path>
</svg>
</div>
<p className="text-xl text-gray-300 font-light leading-relaxed tracking-tight font-geist">"Prospects' custom instances
        and demo environments should be created within <span className="text-white font-medium font-geist">minutes</span>
        automatically."</p>
<div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white font-geist">AS
        </div>
<div className="">
<div className="text-sm font-semibold text-white font-geist">Anna Smith</div>
<div className="text-xs text-gray-500 font-geist">VP Engineering</div>
</div>
</div>
</div>

<div className="flex flex-col min-h-[240px] hover:opacity-100 transition-all duration-500 group/card overflow-hidden bg-[#121212] opacity-60 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63938f50-71a9-4f22-a6d5-0e7155a4ef5e_1600w.webp)] bg-cover bg-center rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<div className="group-hover/card:opacity-100 transition-opacity duration-500 bg-gradient-to-bl from-[#FF7A59]/10 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
<svg aria-hidden="true" data-icon="simple-icons:hubspot" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.164 7.93V5.084a2.2 2.2 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.193v.067a2.2 2.2 0 0 0 1.252 1.973l.013.006v2.852a6.2 6.2 0 0 0-2.969 1.31l.012-.01l-7.828-6.095A2.497 2.497 0 1 0 4.3 4.656l-.012.006l7.697 5.991a6.2 6.2 0 0 0-1.038 3.446a6.2 6.2 0 0 0 1.147 3.607l-.013-.02l-2.342 2.343a2 2 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033a2 2 0 0 0-.1-.595l.005.014l2.317-2.317a6.247 6.247 0 1 0 4.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 1 1 3.215-3.207v.002a3.206 3.206 0 0 1-3.207 3.207z" fill="currentColor">
</path>
</svg>
<p className="mt-4 text-sm font-medium text-gray-500 uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-500 font-geist">
        CRM De-sync</p>
</div>

<div className="p-8 rounded-[32px] bg-[#151515] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col justify-between min-h-[240px] group/card hover:-translate-y-1 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 grayscale transition-all duration-500 group-hover/card:grayscale-0 group-hover/card:opacity-50">
<svg aria-hidden="true" className="iconify text-3xl text-white iconify--simple-icons" data-icon="simple-icons:notion" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632" fill="currentColor">
</path>
</svg>
</div>
<p className="text-xl text-gray-300 font-light leading-relaxed tracking-tight font-geist">"We need to decrease our
        <span className="text-white font-medium font-geist">implementation time by 70%</span> to keep up with the sales pipeline."</p>
<div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white font-geist">MR
        </div>
<div>
<div className="text-sm font-semibold text-white font-geist">Marcus Ray</div>
<div className="text-xs text-gray-500 font-geist">COO</div>
</div>
</div>
</div>

<div className="flex flex-col min-h-[240px] hover:opacity-100 transition-all duration-500 group/card overflow-hidden bg-center bg-[#121212] opacity-60 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9c4d84b-1b17-41c3-86c7-db3ffe513f31_1600w.webp)] bg-cover rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<div className="group-hover/card:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#4A154B]/20 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
<svg aria-hidden="true" className="iconify text-6xl text-white/20 group-hover/card:text-white transition-colors duration-500 iconify--simple-icons" data-icon="simple-icons:slack" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5.042 15.165a2.53 2.53 0 0 1-2.52 2.523A2.53 2.53 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52a2.527 2.527 0 0 1 2.521 2.52v6.313A2.53 2.53 0 0 1 8.834 24a2.53 2.53 0 0 1-2.521-2.522zM8.834 5.042a2.53 2.53 0 0 1-2.521-2.52A2.53 2.53 0 0 1 8.834 0a2.53 2.53 0 0 1 2.521 2.522v2.52zm0 1.271a2.53 2.53 0 0 1 2.521 2.521a2.53 2.53 0 0 1-2.521 2.521H2.522A2.53 2.53 0 0 1 0 8.834a2.53 2.53 0 0 1 2.522-2.521zm10.122 2.521a2.53 2.53 0 0 1 2.522-2.521A2.53 2.53 0 0 1 24 8.834a2.53 2.53 0 0 1-2.522 2.521h-2.522zm-1.268 0a2.53 2.53 0 0 1-2.523 2.521a2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.53 2.53 0 0 1 2.523 2.522zm-2.523 10.122a2.53 2.53 0 0 1 2.523 2.522A2.53 2.53 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522zm0-1.268a2.527 2.527 0 0 1-2.52-2.523a2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.53 2.53 0 0 1-2.522 2.523z" fill="currentColor">
</path>
</svg>
<p className="mt-4 text-sm font-medium text-gray-500 uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-500 font-geist">
        Alert Fatigue</p>
</div>
</div>
</div>
</div><div className="sm:mx-6 spotlight-card group xl:ml-auto xl:mr-auto max-w-7xl rounded-[40px] mt-4 mr-3 ml-3 pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{'--mouse-x': '1783px', '--mouse-y': '515.1015625px'}}>
<div className="spotlight-inner overflow-hidden flex flex-col bg-[#0A0A0A] rounded-[40px] relative">

<div className="relative z-10 px-8 py-24 sm:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">

<div className="mb-8 p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] transform group-hover:-translate-y-2 transition-transform duration-700">
<svg aria-hidden="true" data-icon="solar:rocket-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="m14.447 16.377l5.847-5.83c.842-.839 1.263-1.259 1.484-1.792S22 7.627 22 6.44v-.567c0-1.826 0-2.739-.569-3.306S19.947 2 18.116 2h-.57c-1.19 0-1.785 0-2.32.221c-.536.221-.957.641-1.8 1.48L7.58 9.531c-.984.98-1.594 1.589-1.83 2.176a1.5 1.5 0 0 0-.112.562c0 .802.647 1.448 1.942 2.739l.174.173l2.038-2.069a.75.75 0 1 1 1.069 1.053L8.816 16.24l.137.137c1.295 1.29 1.943 1.936 2.747 1.936c.178 0 .348-.031.519-.094c.603-.222 1.219-.836 2.228-1.842m2.747-6.846a1.946 1.946 0 0 1-2.747 0a1.93 1.93 0 0 1 0-2.738a1.946 1.946 0 0 1 2.747 0a1.93 1.93 0 0 1 0 2.738" fill="currentColor" fill-rule="evenodd"></path>
<path d="M9.034 5.963L6.491 8.5c-.467.466-.896.893-1.235 1.28a6 6 0 0 0-.619.82l-.024-.025l-.095-.094a4.9 4.9 0 0 0-1.532-1.004l-.123-.05l-.379-.15a.764.764 0 0 1-.259-1.252C3.345 6.907 4.69 5.566 5.34 5.297a3.4 3.4 0 0 1 1.788-.229c.546.081 1.063.362 1.907.895m4.342 13.35c.205.208.34.355.464.512q.243.311.434.658c.142.26.253.537.474 1.092a.69.69 0 0 0 1.126.224l.084-.083c1.12-1.117 2.465-2.458 2.735-3.105a3.35 3.35 0 0 0 .229-1.782c-.081-.545-.362-1.06-.897-1.902l-2.552 2.544c-.478.477-.916.914-1.313 1.256c-.237.206-.497.41-.784.586" fill="currentColor" opacity=".5"></path>
</svg>
</div>
<h2 className="text-4xl sm:text-6xl tracking-tighter text-white mb-8 leading-[1.05] font-geist" style={{}}>
            Let your automations
            <span className="text-gray-500 font-geist" style={{}}>speak for themselves.</span>
</h2>
<p className="text-gray-400 text-lg sm:text-xl font-light mb-10 leading-relaxed max-w-2xl font-geist">
            Start building with FlowMaster today and impress your team with clean, reliable workflows—every single time.
        </p>
<button className="group/btn relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-geist font-medium text-black transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
<span className="mr-2 relative z-10 font-geist">Get FlowMaster</span>
<svg aria-hidden="true" data-icon="solar:arrow-right-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path><path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path></svg>
</button>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

<div className="relative z-10 bg-[#080808]/50 px-8 sm:px-12 py-16 lg:py-20 backdrop-blur-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

<div className="lg:col-span-4 flex flex-col items-start">
<div className="flex items-center gap-2 mb-6">
<svg aria-hidden="true" data-icon="solar:infinity-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M2.75 12a4.25 4.25 0 0 1 6.8-3.4a.75.75 0 1 0 .901-1.2A5.75 5.75 0 1 0 7 17.75c.784 0 1.464-.143 2.064-.435s1.079-.714 1.489-1.215c.66-.804 1.196-1.894 1.776-3.074l.339-.689a.755.755 0 0 0-.339-1.008a.745.745 0 0 0-1.003.337l-.366.743c-.584 1.183-1.027 2.082-1.567 2.74c-.307.375-.624.64-.986.817s-.81.284-1.407.284A4.25 4.25 0 0 1 2.75 12" fill="currentColor" fill-rule="evenodd"></path>
<path d="M12.67 12.335a.755.755 0 0 0-.34-1.006a.746.746 0 0 0-.975.284q.162-.323.316-.639c.58-1.18 1.117-2.27 1.776-3.074c.41-.501.89-.923 1.49-1.215S16.217 6.25 17 6.25a5.75 5.75 0 1 1-3.45 10.35a.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.596 0-1.045.107-1.406.284c-.363.176-.68.442-.987.816c-.54.66-.983 1.558-1.567 2.741q-.174.355-.369.744z" fill="currentColor" opacity=".5"></path>
</svg>
<span className="text-xl font-semibold tracking-tight text-white font-geist">FlowMaster</span>
</div>
<h3 className="text-2xl tracking-tight text-white mb-8 max-w-xs leading-tight font-geist" style={{}}>
                    Never fumble a client workflow again.
                </h3>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151515] border border-white/10 hover:border-white/20 hover:bg-[#1A1A1A] transition-all text-sm text-gray-300 group/git font-geist">
<svg aria-hidden="true" data-icon="simple-icons:github" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"></path></svg>
                      Star on GitHub
                  </button>
</div>

<div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:pl-12">

<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-white mb-2 font-geist">Product</h4>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Blueprints</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Nodes</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Integrations</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Changelog</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-white mb-2 font-geist">Resources</h4>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Documentation</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Community</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Help
                        Center</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Academy</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-white mb-2 font-geist">Company</h4>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">About</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Blog</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Careers</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Contact</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-white mb-2 font-geist">Legal</h4>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Privacy</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Terms</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors font-geist" href="#">Security</a>
</div>
</div>
</div>

<div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
<p className="text-xs text-gray-600 font-geist">
                © 2024 FlowMaster Inc. All rights reserved.
            </p>
<div className="flex items-center gap-6">
<span className="text-xs text-gray-600 font-geist">Designed by AutoLabs</span>
<div className="flex items-center gap-5 text-gray-500">
<a className="hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="simple-icons:x" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M14.234 10.162L22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299l-.929-1.329L3.076 1.56h3.182l5.965 8.532l.929 1.329l7.754 11.09h-3.182z" fill="currentColor">
</path>
</svg></a>
<a className="hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="simple-icons:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="currentColor">
</path>
</svg></a>
<a className="hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="simple-icons:discord" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0a13 13 0 0 0-.617-1.25a.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.08.08 0 0 0 .084-.028a14 14 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13 13 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10 10 0 0 0 .372-.292a.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127a12.3 12.3 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028a19.8 19.8 0 0 0 6.002-3.03a.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418" fill="currentColor">
</path>
</svg></a>
</div>
</div>
</div>

<div className="w-full flex flex-col gap-[1px] opacity-20 absolute bottom-0 left-0 right-0 pointer-events-none rotate-180 mix-blend-screen">
<div className="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-10"></div>
<div className="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
<div className="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
<div className="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-40"></div>
<div className="h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
</div>
</div>
</div>
</div>



    </>
  );
}
