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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

        lucide.createIcons();
        
        // Simple scroll progress animation
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const progress = Math.min(scrolled / maxScroll, 1);
            const progressBar = document.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.width = `${progress * 100}%`;
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
      
<div className="min-h-screen shadow-xl">

<header className="border-b backdrop-blur-sm sticky top-0 z-50 border-stone-200/50 bg-stone-50/80" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-orange-500 rounded-lg flex items-center justify-center to-red-400">
<svg className="lucide lucide-code-2 w-4 h-4 text-black" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<span className="text-lg font-medium font-geist">TechBlog</span>
</div>
<div className="flex items-center gap-4">
<button className="transition-colors text-stone-600 hover:text-stone-700" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-bookmark w-5 h-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<button className="transition-colors text-stone-600 hover:text-stone-700" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-share w-5 h-5" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
</div>
</div>
</header>

<main className="max-w-4xl sm:px-6 lg:px-8 bg-slate-50 mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 drop-shadow-2xl">

<article className="space-y-8">
<header className="text-center space-y-4">
<div className="flex items-center justify-center gap-2 text-sm font-medium text-orange-600">
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span className="font-geist">System Architecture</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r bg-clip-text text-transparent leading-tight from-stone-800 via-stone-900 to-stone-700 font-playfair font-medium" style={{transition: `outline 0.1s ease-in-out`}}>
                        Building NextGen AI:<br />
<span className="text-orange-600 font-playfair font-medium">Architecture & Implementation</span>
</h1>
<p className="text-xl max-w-2xl mx-auto leading-relaxed text-stone-600 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>
                        A comprehensive deep dive into building scalable AI systems with modern architecture patterns and real-world implementation strategies.
                    </p>
</header>

<div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-y border-stone-200/50" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gradient-to-br from-orange-500 rounded-full flex items-center justify-center to-red-400">
<span className="font-medium text-black font-geist">AS</span>
</div>
<div className="">
<div className="font-medium text-stone-800 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Alex Smith</div>
<div className="text-sm text-stone-600 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Senior AI Engineer at TechCorp</div>
</div>
</div>
<div className="flex items-center gap-6 text-sm text-stone-600" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="flex items-center gap-1">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg>
<span className="font-geist">Dec 15, 2024</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span className="font-geist">12 min read</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-eye w-4 h-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span className="font-geist">2.4k views</span>
</div>
</div>
</div>

<div className="w-full rounded-full h-0.5 bg-stone-200" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="progress-bar w-1/3 rounded-full" style={{width: `50.644884%`}}></div>
</div>

<div className="space-y-8">

<section className="prose prose-stone prose-invert max-w-none" style={{transition: `outline 0.1s ease-in-out`}}>
<p className="text-lg leading-relaxed text-stone-700 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>
                            Building modern AI systems requires careful consideration of architecture, scalability, and performance. 
                            In this comprehensive guide, we'll explore the technical decisions behind NextGen AI and how we achieved 
                            99.9% uptime while serving millions of requests daily.
                        </p>
</section>

<div className="gradient-border floating-card">
<div className="gradient-border-inner pt-6 pr-6 pb-6 pl-6">
<h3 className="text-xl font-medium mb-4 flex items-center gap-2 font-geist">
<svg className="lucide lucide-layers w-5 h-5 text-orange-600" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                                Technical Stack
                            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm text-stone-600 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Backend</span>
<span className="text-sm font-medium font-geist">Python FastAPI</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-stone-600 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Database</span>
<span className="text-sm font-medium font-geist">PostgreSQL + Redis</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-stone-600 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>ML Framework</span>
<span className="text-sm font-medium font-geist">PyTorch</span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm text-stone-600 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Infrastructure</span>
<span className="text-sm font-medium font-geist">AWS EKS</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-stone-600 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Monitoring</span>
<span className="text-sm font-medium font-geist">Prometheus + Grafana</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-stone-600 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>CI/CD</span>
<span className="text-sm font-medium font-geist">GitHub Actions</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-stone-100/50 border-stone-200 border rounded-xl pt-6 pr-6 pb-6 pl-6" style={{transition: `outline 0.1s ease-in-out`}}>
<h3 className="text-xl font-medium mb-4 flex items-center gap-2 font-geist">
<svg className="lucide lucide-git-branch w-5 h-5 text-red-600" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line></line><circle cx="18" cy="6"></circle><circle cx="6" cy="18"></circle><path></path></svg>
                            System Architecture
                        </h3>
<div className="aspect-video flex relative overflow-hidden border-stone-300 border rounded-lg items-center justify-center" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="absolute inset-0 width= bg-[url(https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=1080&q=80)] bg-cover" fill="%23334155" fillOpacity="0.3" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"></div>
<div className="relative z-10 text-center">
<svg className="lucide lucide-network mr-auto mb-4 ml-auto w-[64px] h-[64px] text-slate-50" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: `outline 0.1s ease-in-out`, width: `64px`, height: `64px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6"></rect><rect height="6" rx="1" width="6"></rect><rect height="6" rx="1" width="6"></rect><path></path><path></path></svg>
<p className="text-slate-50 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Interactive architecture diagram</p>
<p className="text-sm text-slate-50 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Microservices • Load Balancing • Auto-scaling</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="border rounded-xl p-6 transition-colors bg-stone-100/30 border-stone-200 hover:bg-stone-100/50" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
<svg className="lucide lucide-zap w-5 h-5 text-red-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<h4 className="font-medium mb-2 font-geist">High Performance</h4>
<p className="text-sm text-stone-600 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Sub-100ms response times with intelligent caching and optimized inference pipelines.</p>
</div>
<div className="border rounded-xl p-6 transition-colors bg-stone-100/30 border-stone-200 hover:bg-stone-100/50" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
<svg className="lucide lucide-shield w-5 h-5 text-orange-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<h4 className="font-medium mb-2 font-geist">Enterprise Security</h4>
<p className="text-sm text-stone-600 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>End-to-end encryption with role-based access control and audit logging.</p>
</div>
</div>

<div className="code-block rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<h4 className="flex items-center gap-2 font-medium text-gray-300 font-geist">
<svg className="lucide lucide-code w-4 h-4 text-pink-600" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                                API Implementation Example
                            </h4>
<button className="transition-colors text-stone-600 hover:text-stone-700" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-copy w-4 h-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14"></rect><path></path></svg>
</button>
</div>
<div className="rounded-lg p-4 font-mono text-sm overflow-x-auto bg-stone-50" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="text-stone-500 font-geist" style={{transition: `outline 0.1s ease-in-out`}}># FastAPI endpoint with async processing</div>
<div className="text-orange-600 font-geist">@app.post<span className="text-stone-700 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>(</span><span className="text-pink-600 font-geist">"/api/v1/inference"</span><span className="text-stone-700 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>)</span></div>
<div className="text-red-600 font-geist">async def</div> <div className="inline text-pink-600 font-geist">process_inference</div><div className="inline text-stone-700 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>(request: InferenceRequest):</div>
<div className="ml-4 text-stone-700 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>result = <span className="text-red-600 font-geist">await</span> ai_model.predict(request.data)</div>
<div className="ml-4 text-red-600 font-geist">return</div> <div className="inline text-stone-700 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>InferenceResponse(result=result)</div>
</div>
</div>

<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-orange-500/20 rounded-full text-sm border border-orange-500/30 text-orange-700 font-geist">Machine Learning</span>
<span className="px-3 py-1 bg-red-500/20 rounded-full text-sm border border-red-500/30 text-red-700 font-geist">System Design</span>
<span className="px-3 py-1 bg-pink-500/20 rounded-full text-sm border border-pink-500/30 text-pink-700 font-geist">Performance</span>
<span className="px-3 py-1 bg-orange-500/20 rounded-full text-sm border border-orange-500/30 text-orange-700 font-geist">Scalability</span>
</div>

<footer className="border-t pt-8 border-stone-200" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-stone-200 hover:bg-stone-300" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm font-geist">142 likes</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-stone-200 hover:bg-stone-300" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm font-geist">23 comments</span>
</button>
</div>
<div className="text-sm text-stone-600 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>
                                Last updated: Dec 15, 2024
                            </div>
</div>
</footer>
</div>
</article>
</main>
</div>


    </>
  );
}
