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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(window.UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        function showProjects() {
            document.getElementById('mainPage').classList.add('hidden');
            document.getElementById('blogPage').classList.add('hidden');
            document.getElementById('projectsPage').classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        function showBlog() {
            document.getElementById('mainPage').classList.add('hidden');
            document.getElementById('projectsPage').classList.add('hidden');
            document.getElementById('blogPage').classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        function showMain() {
            document.getElementById('projectsPage').classList.add('hidden');
            document.getElementById('blogPage').classList.add('hidden');
            document.getElementById('mainPage').classList.remove('hidden');
            window.scrollTo(0, 0);
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
      

<div className="aura-background-component fixed -z-10 w-full h-screen top-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>
</div>

<div className="min-h-screen flex pt-4 pr-4 pb-4 pl-4 items-center justify-center" id="mainPage">
<div className="md:p-12 fade-in w-full max-w-2xl border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-2xl bg-zinc-900 border-zinc-800">

<div className="text-center mb-8">
<h1 className="md:text-6xl bg-clip-text text-5xl text-transparent bg-gradient-to-r mb-3 font-playfair font-medium from-white to-zinc-400">
                    Hello, I am Recarsul!
                </h1>
<p className="text-lg italic mb-6 font-geist text-zinc-400">Re-ka-sel</p>
</div>

<div className="flex gap-4 mb-8 gap-x-4 gap-y-4 justify-center">
<a aria-label="LinkedIn Profile" className="flex items-center justify-center transition-all hover-lift w-12 h-12 rounded-lg hover:bg-zinc-700 bg-zinc-800" href="https://www.linkedin.com/in/recarsul-g-6a4986119/" rel="noopener noreferrer" target="_blank">
<i className="fab fa-linkedin text-xl"></i>
</a>
<a aria-label="GitHub Profile" className="flex items-center justify-center transition-all hover-lift w-12 h-12 rounded-lg hover:bg-zinc-700 bg-zinc-800" href="https://github.com/gracias-svg" rel="noopener noreferrer" target="_blank">
<i className="fab fa-github text-xl"></i>
</a>
<a aria-label="Email" className="flex items-center justify-center transition-all hover-lift w-12 h-12 rounded-lg hover:bg-zinc-700 bg-zinc-800" href="mailto:graciasrecarsul@gmail.com">
<i className="fas fa-envelope w-[20px] h-[px]" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '28px'}}></i>
</a>

<a aria-label="WhatsApp Chat" className="flex transition-all hover-lift w-12 h-12 rounded-lg items-center justify-center hover:bg-zinc-700 bg-zinc-800" href="https://wa.me/919867769663" rel="noopener noreferrer" target="_blank">
<i className="fab fa-whatsapp text-xl"></i>
</a>
<a aria-label="Resume" className="px-4 h-12 rounded-lg flex items-center justify-center gap-2 transition-all hover-lift bg-zinc-800 hover:bg-zinc-" href="#">
<i className="fas fa-download"></i>
<span className="font-geist">Resume</span>
</a>
</div>

<div className="text-center mb-8 space-y-2">
<p className="text-sm font-geist text-zinc-400">Bachelor of Commerce, Mumbai University</p>
<p className="text-sm font-geist text-zinc-400">In Process: Product Management (Gen AI + Agentic AI), BITSOM</p>
</div>

<div className="text-center mb-4">
<h2 className="text-2xl font-playfair font-medium text-zinc-300">Customer Success Manager</h2>
</div>

<div className="mb-8">
<h2 className="text-2xl mb-4 text-center font-playfair font-medium">About Me</h2>
<div className="space-y-4 leading-relaxed text-zinc-300">
<p className="font-geist">
                        With 10+ years of experience, I specialize in onboarding, retention, grievance handling,
                        escalation frameworks, peak-season planning, and automation to reduce manual work and improve
                        SLAs.
                    </p>
<p className="font-geist">
                        Currently expanding my expertise in Product Management with a focus on Gen AI and Agentic AI at
                        BITSOM. I'm passionate about leveraging artificial intelligence to create innovative solutions
                        and drive meaningful impact in the digital product space.
                    </p>
<p className="font-geist">
                        I believe in continuous learning and staying at the forefront of technological advancement. My
                        journey combines business acumen with emerging AI technologies to build products that matter.
                    </p>
</div>
<div className="mt-6 text-center">
<a className="inline-block transition-all hover-lift font-semibold rounded-lg pt-3 pr-8 pb-3 pl-8 font-geist hover:bg-blue-700 text-white bg-blue-600" href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;to=graciasrecarsul@gmail.com" rel="noopener noreferrer" target="_blank">
                        Connect
                    </a>
</div>
</div>

<div className="mb-8 pt-8 border-t border-zinc-800">
<div className="grid md:grid-cols-2 gap-6">

<button className="card-3d relative overflow-hidden rounded-xl bg-zinc-800 border border-zinc-700 hover:border-zinc-600 text-left" onclick="showProjects()">
<div className="aspect-[/3] bg-zinc-900 flex items-center justify-center">
<img alt="The Thinker sculpture" className="w-full h-full object-cover grayscale opacity-70" decoding="async" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/1200/900?grayscale&amp;blur=1';" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&amp;fit=crop&amp;w=1600&amp;q=60"/>
</div>
<div className="p-6">
<h3 className="text-xl font-playfair font-medium mb-2">Projects</h3>
</div>
<div className="card-overlay absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/95 to-transparent flex items-end justify-center pb-8">
<p className="text-lg font-geist text-zinc-300">Activities and Collaborations</p>
</div>
</button>

<button className="card-3d relative overflow-hidden rounded-xl bg-zinc-800 border border-zinc-700 hover:border-zinc-600 text-left" onclick="showBlog()">
<div className="aspect-[4/3] bg-zinc-900 flex items-center justify-center">
<img alt="Stoic reading scroll" className="w-full h-full object-cover grayscale opacity-70" decoding="async" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/1200/900?grayscale&amp;blur=1';" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&amp;fit=crop&amp;w=1600&amp;q=60"/>
</div>
<div className="p-6">
<h3 className="text-xl font-playfair font-medium mb-2">Blog</h3>
</div>
<div className="card-overlay absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/95 to-transparent flex items-end justify-center pb-8">
<p className="text-lg font-geist text-zinc-300">articles, posts, or insights</p>
</div>
</button>
</div>
</div>

<div className="text-center pt-8 border-t space-y-4 border-zinc-800">
<p className="text-2xl under-construction font-playfair font-medium">
                    🚧 Watch this space! 🚧
                </p>
<p className="text-zinc-500 text-sm font-geist">
                    © 2024 Recarsul Gracias. All rights reserved.
                </p>
</div>
</div>
</div>

<div className="hidden min-h-screen flex pt-4 pr-4 pb-4 pl-4 items-center justify-center" id="projectsPage">
<div className="md:p-12 fade-in w-full max-w-2xl border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-2xl bg-zinc-900 border-zinc-800">
<button className="mb-6 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors" onclick="showMain()">
<i className="fas fa-arrow-left"></i>
<span className="font-geist">Back</span>
</button>
<div className="text-center mb-8">
<h1 className="text-4xl md:text-5xl font-playfair font-medium mb-4 tracking-tight">Projects</h1>
<p className="text-zinc-400 font-geist">Activities and Collaborations</p>
</div>
<div className="text-center py-12">
<p className="text-zinc-500 font-geist">Content coming soon...</p>
</div>
</div>
</div>

<div className="hidden min-h-screen flex pt-4 pr-4 pb-4 pl-4 items-center justify-center" id="blogPage">
<div className="md:p-12 fade-in w-full max-w-2xl border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-2xl bg-zinc-900 border-zinc-800">
<button className="mb-6 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors" onclick="showMain()">
<i className="fas fa-arrow-left"></i>
<span className="font-geist">Back</span>
</button>
<div className="text-center mb-8">
<h1 className="text-4xl md:text-5xl font-playfair font-medium mb-4 tracking-tight">Blog</h1>
<p className="text-zinc-400 font-geist">articles, posts, or insights</p>
</div>
<div className="text-center py-12">
<p className="text-zinc-500 font-geist">Content coming soon...</p>
</div>
</div>
</div>


    </>
  );
}
