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
display: ['Manrope', 'sans-serif'],
body: ['Manrope', 'sans-serif'],
},
colors: {
primary: {
DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
},
background: 'hsl(var(--background) / <alpha-value>)',
foreground: 'hsl(var(--foreground) / <alpha-value>)',
muted: {
foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
},
border: 'hsl(var(--border) / <alpha-value>)',
nav: {
bg: 'hsl(var(--nav-bg) / <alpha-value>)',
},
secondary: 'hsl(var(--secondary) / <alpha-value>)',
accent: 'hsl(var(--accent) / <alpha-value>)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed top-0 inset-x-0 z-50 flex justify-center pt-6 px-4">
<nav className="flex items-center justify-between w-full max-w-5xl bg-nav-bg/90 backdrop-blur-md border border-border rounded-full px-5 py-3 shadow-sm shadow-black/5">

<div className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
<span className="text-primary-foreground font-medium text-lg leading-none mt-0.5 tracking-tight">s</span>
</div>
<span className="font-semibold text-foreground tracking-tight text-lg">ai</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200" href="#">How It Works</a>
<a className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200" href="#">Internships</a>
<a className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200" href="#">Students</a>
<a className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200" href="#">Professors</a>
<a className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200" href="#">FAQs</a>
</div>

<div className="flex items-center gap-5">
<button className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
<iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon>
<span>English</span>
<iconify-icon className="text-base" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<a className="bg-primary text-primary-foreground hover:bg-primary/85 shadow-md shadow-primary/20 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 flex items-center justify-center" href="#">
                    Start Your 14 Day Free Trial
                </a>
</div>
</nav>
</div>

<main className="relative min-h-[90vh] flex flex-col items-center justify-start pt-40 pb-20 px-4 overflow-hidden video-fallback">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover z-0" loop="" muted="" playsinline="">
<source src="/hero-bg.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-background/70 backdrop-blur-sm z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center w-full max-w-6xl mx-auto">
<h1 className="font-display font-normal text-5xl md:text-7xl leading-[1.1] tracking-tight text-foreground max-w-4xl">
                Master Any Subject With <br className="hidden md:block"/>
<span className="text-primary">AI-Powered Study Groups</span>
</h1>
<p className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Connect with peers, access smart study tools, and track your progress — all in one platform built for modern learners.
            </p>
<a className="mt-10 bg-primary text-primary-foreground hover:bg-primary/85 shadow-lg shadow-primary/25 rounded-full px-10 py-5 text-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5" href="#">
                Start Your 14 Day Free Trial
            </a>
<div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
<iconify-icon className="text-base" icon="solar:card-linear"></iconify-icon>
<span>No Credit Card Required</span>
</div>

<div className="mt-14 w-full max-w-5xl rounded-2xl bg-secondary/50 p-2 md:p-3 border border-border shadow-2xl shadow-primary/10 relative overflow-hidden group backdrop-blur-xl">

<div className="absolute top-5 left-5 flex gap-2 z-20">
<div className="w-2.5 h-2.5 rounded-full bg-border/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-border/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-border/80"></div>
</div>
<img alt="Platform Dashboard Preview" className="w-full h-auto rounded-xl border border-border/40 object-cover object-top opacity-90 transition-opacity duration-500 group-hover:opacity-100 aspect-video" src="https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
</div>
</main>

    </>
  );
}
