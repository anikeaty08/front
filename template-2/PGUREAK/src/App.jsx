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



        lucide.createIcons();
        
        document.getElementById('download').addEventListener('click', () => {
            const htmlContent = document.documentElement.outerHTML;
            const blob = new Blob([htmlContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'flowspace-features.html';
            a.click();
            URL.revokeObjectURL(url);
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
      
<button className="fixed z-50 top-6 right-6 flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2.5 text-sm font-medium shadow-lg hover:bg-gray-800 hover:shadow-xl active:scale-95 transition-all duration-200 border border-gray-800" id="download">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span>Export Code</span>
</button>
<main className="container max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="text-center mb-16 animate-fade-in-up">
<h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
                Next-Gen Workspace
            </h1>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transform how your team collaborates with intelligent tools designed for modern workflows
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<article className="relative h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer animate-fade-in-up delay-100 hover:shadow-xl transition-all duration-300">
<img alt="Smart commands" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&q=80" />
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-black/40"></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
<svg className="lucide lucide-zap w-5 h-5 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-white text-xl font-medium tracking-tight">Smart Commands.</h3>
</div>
<p className="text-white/90 text-sm leading-relaxed max-w-sm">
                        Lightning-fast actions with intelligent shortcuts that adapt to your workflow patterns.
                    </p>
</div>
</article>

<article className="relative h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer animate-fade-in-up delay-200 hover:shadow-xl transition-all duration-300">
<img alt="Project canvas" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80" />
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-black/40"></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
<svg className="lucide lucide-layout-dashboard w-5 h-5 text-white" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<h3 className="text-white text-xl font-medium tracking-tight">Project Canvas.</h3>
</div>
<p className="text-white/90 text-sm leading-relaxed max-w-sm">
                        Visualize project timelines and dependencies with an interactive workspace that scales with your team.
                    </p>
</div>
</article>

<article className="relative h-96 md:col-span-2 rounded-2xl overflow-hidden shadow-lg group cursor-pointer animate-fade-in-up delay-300 hover:shadow-xl transition-all duration-300">
<img alt="Focus sessions" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80" />
<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-black/40"></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
<svg className="lucide lucide-target w-5 h-5 text-white" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-white text-2xl font-medium tracking-tight">Focus Sessions.</h3>
</div>
<p className="text-white/90 text-base leading-relaxed max-w-lg">
                        Deep work modes with distraction blocking and ambient soundscapes to maximize concentration and creative output.
                    </p>
</div>
</article>

<article className="relative h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer animate-fade-in-up delay-400 hover:shadow-xl transition-all duration-300">
<img alt="Live sync" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&q=80" />
<div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-black/40"></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
<svg className="lucide lucide-refresh-ccw w-5 h-5 text-white" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
<h3 className="text-white text-xl font-medium tracking-tight">Live Sync.</h3>
</div>
<p className="text-white/90 text-sm leading-relaxed max-w-sm">
                        Real-time collaboration with instant updates across devices and seamless conflict resolution.
                    </p>
</div>
</article>

<article className="relative h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer animate-fade-in-up delay-500 hover:shadow-xl transition-all duration-300">
<img alt="AI insights" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&q=80" />
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-black/40"></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
<svg className="lucide lucide-brain w-5 h-5 text-white" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
</div>
<h3 className="text-white text-xl font-medium tracking-tight">AI Insights.</h3>
</div>
<p className="text-white/90 text-sm leading-relaxed max-w-sm">
                        Intelligent recommendations and performance insights that help optimize team efficiency and predict bottlenecks.
                    </p>
</div>
</article>
</div>

<div className="text-center mt-20 animate-fade-in-up delay-600">
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="group flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-gray-800 hover:shadow-xl active:scale-95 transition-all duration-200 border border-gray-800 min-w-[160px]">
<svg className="lucide lucide-rocket w-4 h-4 group-hover:scale-110 transition-transform duration-200" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.25-2 5 2 5 3.5 0 2.83-3.75 2-5 0 0 0 .5 0 1.5L11 15c-.75-1-1.5-3-1.5-3s2-1.25 3-1.5l2.5 2.5c.25 1-.5 2.25-1.5 3L11 18.5c1 0 1.5 0 1.5 0-1.25.17-3.75-.67-5-2z"></path><path d="M15.5 3.5L18 6l-6.5 6.5c-.75.75-1.5-.5-1.5-.5s-1.25-.75-.5-1.5L16 4"></path><path d="M8 12c.5-.5.75-.75.5-1.25-.25-.5-.75-.25-1.25.25L4 14.5c-.5.5-.5 1.5 0 2l2.5 2.5c.5.5 1.5.5 2 0L12 16c.5-.5.75-1-.25-1.25-.75-.25-.75.25-1.25.75"></path></svg>
<span>Try FlowSpace</span>
</button>
<button className="group flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl hover:bg-gray-50 active:scale-95 transition-all duration-200 border border-gray-200 min-w-[160px]">
<svg className="lucide lucide-video w-4 h-4 group-hover:scale-110 transition-transform duration-200" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 6h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4"></path><path d="M2 6h12v12H2z"></path><path d="M10 16V8l6 4z"></path></svg>
<span>Watch demo</span>
</button>
</div>
<p className="text-gray-500 text-sm mt-4">
                30-day free trial • No setup fees • Cancel anytime
            </p>
</div>
</main>


    </>
  );
}
