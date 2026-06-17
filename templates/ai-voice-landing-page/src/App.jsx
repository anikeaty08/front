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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<header className="border-b" style={{borderColor: '#D6D3D1'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between py-5">
<div className="flex items-center gap-12">
<a className="text-xl font-semibold tracking-tighter" href="#" style={{color: '#141414'}}>SR</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors" href="#" onmouseout="this.style.color='#141414'" onmouseover="this.style.color='#E11D48'" style={{color: '#141414'}}>Features</a>
<a className="text-sm font-medium transition-colors" href="#" onmouseout="this.style.color='#141414'" onmouseover="this.style.color='#E11D48'" style={{color: '#141414'}}>Showcase</a>
<a className="text-sm font-medium transition-colors" href="#" onmouseout="this.style.color='#141414'" onmouseover="this.style.color='#E11D48'" style={{color: '#141414'}}>Pricing</a>
<a className="text-sm font-medium transition-colors" href="#" onmouseout="this.style.color='#141414'" onmouseover="this.style.color='#E11D48'" style={{color: '#141414'}}>About</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:block text-sm font-medium px-4 py-2 transition-all" onmouseout="this.style.color='#141414'" onmouseover="this.style.color='#E11D48'" style={{color: '#141414'}}>Sign in</button>
<button className="text-sm font-medium px-5 py-2 rounded-full transition-all" onmouseout="this.style.backgroundColor='#E11D48'" onmouseover="this.style.backgroundColor='#BE123C'" style={{backgroundColor: '#E11D48', color: '#F9F8F3'}}>Get Started</button>
</div>
</div>
</div>
</header>

<main className="">
<div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-32">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6" style={{backgroundColor: '#FFF1F2', borderColor: '#FECDD3'}}>
<div className="w-1.5 h-1.5 rounded-full animate-pulse-ring" style={{backgroundColor: '#F43F5E'}}></div>
<span className="text-xs font-medium tracking-tight" style={{color: 'rgb(190, 18, 60)'}}>Now with Voice Engine</span>
</div>
<h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[1.1]" style={{color: '#141414'}}>
                        Your voice,<br/>
<span className="italic" style={{color: '#E11D48'}}>infinitely</span><br/>
                        expressive
                    </h1>
<p className="text-lg sm:text-xl mb-8 leading-relaxed font-light" style={{color: '#57534E', maxWidth: '540px'}}>
                        Create studio-quality voiceovers in any language with AI that understands emotion, context, and your unique style.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium transition-all" onmouseout="this.style.backgroundColor='#E11D48'" onmouseover="this.style.backgroundColor='#BE123C'" style={{backgroundColor: 'rgb(225, 29, 72)', color: 'rgb(249, 248, 243)'}}>
<span>Start Creating</span>
<i data-lucide="arrow-right" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
<button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium border transition-all" onmouseout="this.style.borderColor='#D6D3D1'; this.style.color='#141414'" onmouseover="this.style.borderColor='#E11D48'; this.style.color='#E11D48'" style={{backgroundColor: 'transparent', color: '#141414', borderColor: '#D6D3D1'}}>
<i data-lucide="play-circle" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
<span>Watch Demo</span>
</button>
</div>
<div className="flex items-center gap-8 pt-8 border-t" style={{borderColor: '#D6D3D1'}}>
<div>
<div className="text-3xl font-semibold tracking-tight" style={{color: '#141414'}}>50M+</div>
<div className="text-sm font-light" style={{color: '#78716C'}}>Voices generated</div>
</div>
<div className="w-px h-12" style={{backgroundColor: '#D6D3D1'}}></div>
<div className="">
<div className="text-3xl font-semibold tracking-tight" style={{color: '#141414'}}>120+</div>
<div className="text-sm font-light" style={{color: '#78716C'}}>Languages</div>
</div>
<div className="w-px h-12" style={{backgroundColor: '#D6D3D1'}}></div>
<div className="">
<div className="text-3xl font-semibold tracking-tight" style={{color: '#141414'}}>99.8%</div>
<div className="text-sm font-light" style={{color: '#78716C'}}>Accuracy</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="relative animate-float">

<div className="relative rounded-3xl p-8 border shadow-2xl" style={{backgroundColor: '#FAFAF9', borderColor: '#D6D3D1'}}>

<div className="mb-6 p-6 rounded-2xl relative overflow-hidden" style={{backgroundColor: '#FFF1F2', border: '1px solid #FECDD3'}}>
<div className="flex items-end justify-center gap-1.5 h-32">
<div className="w-2 rounded-full transition-all duration-700" style={{backgroundColor: '#FB7185', height: '30%'}}></div>
<div className="w-2 rounded-full transition-all duration-700" style={{backgroundColor: '#F43F5E', height: '60%'}}></div>
<div className="w-2 rounded-full transition-all duration-700" style={{backgroundColor: '#E11D48', height: '85%'}}></div>
<div className="w-2 rounded-full transition-all duration-700" style={{backgroundColor: '#F43F5E', height: '100%'}}></div>
<div className="w-2 rounded-full transition-all duration-700" style={{backgroundColor: '#E11D48', height: '75%'}}></div>
<div className="w-2 rounded-full transition-all duration-700" style={{backgroundColor: '#F43F5E', height: '95%'}}></div>
<div className="w-2 rounded-full transition-all duration-700" style={{backgroundColor: '#FB7185', height: '55%'}}></div>
<div className="w-2 rounded-full transition-all duration-700" style={{backgroundColor: '#F43F5E', height: '40%'}}></div>
<div className="w-2 rounded-full transition-all duration-700" style={{backgroundColor: '#E11D48', height: '70%'}}></div>
<div className="w-2 rounded-full transition-all duration-700" style={{backgroundColor: '#F43F5E', height: '85%'}}></div>
<div className="w-2 rounded-full transition-all duration-700" style={{backgroundColor: '#FB7185', height: '45%'}}></div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<button className="w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-lg" onmouseout="this.style.backgroundColor='#E11D48'; this.style.transform='scale(1)'" onmouseover="this.style.backgroundColor='#BE123C'; this.style.transform='scale(1.05)'" style={{backgroundColor: '#E11D48'}}>
<i data-lucide="play" style={{width: '24px', height: '24px', strokeWidth: '1.5', color: '#F9F8F3', marginLeft: '2px'}}></i>
</button>
</div>
</div>

<div className="space-y-4 mb-6">
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium" style={{color: '#141414'}}>Tone</span>
<span className="text-sm font-light" style={{color: '#78716C'}}>Professional</span>
</div>
<div className="flex gap-2">
<button className="flex-1 px-3 py-2 rounded-lg border text-xs font-medium transition-all" style={{backgroundColor: '#FFF1F2', color: '#BE123C', borderColor: '#FECDD3'}}>Professional</button>
<button className="flex-1 px-3 py-2 rounded-lg border text-xs font-medium transition-all" onmouseout="this.style.borderColor='#D6D3D1'; this.style.backgroundColor='transparent'" onmouseover="this.style.borderColor='#FECDD3'; this.style.backgroundColor='#FFF1F2'" style={{backgroundColor: 'transparent', color: '#78716C', borderColor: '#D6D3D1'}}>Casual</button>
<button className="flex-1 px-3 py-2 rounded-lg border text-xs font-medium transition-all" onmouseout="this.style.borderColor='#D6D3D1'; this.style.backgroundColor='transparent'" onmouseover="this.style.borderColor='#FECDD3'; this.style.backgroundColor='#FFF1F2'" style={{backgroundColor: 'transparent', color: '#78716C', borderColor: '#D6D3D1'}}>Warm</button>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium" style={{color: '#141414'}}>Speed</span>
<span className="text-sm font-light" style={{color: '#78716C'}}>1.0x</span>
</div>
<div className="relative h-1.5 rounded-full" style={{backgroundColor: '#E7E5E4'}}>
<div className="absolute h-full rounded-full" style={{backgroundColor: '#E11D48', width: '50%'}}></div>
<div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 shadow-sm" style={{backgroundColor: '#F9F8F3', borderColor: '#E11D48', left: '50%', marginLeft: '-8px'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium" style={{color: '#141414'}}>Emotion</span>
<span className="text-sm font-light" style={{color: '#78716C'}}>Confident</span>
</div>
<div className="relative h-1.5 rounded-full" style={{backgroundColor: '#E7E5E4'}}>
<div className="absolute h-full rounded-full" style={{backgroundColor: '#E11D48', width: '75%'}}></div>
<div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 shadow-sm" style={{backgroundColor: '#F9F8F3', borderColor: '#E11D48', left: '75%', marginLeft: '-8px'}}></div>
</div>
</div>
</div>

<button className="w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all" onmouseout="this.style.backgroundColor='#E11D48'" onmouseover="this.style.backgroundColor='#BE123C'" style={{backgroundColor: 'rgb(225, 29, 72)', color: 'rgb(249, 248, 243)'}}>
<i data-lucide="wand-2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
<span>Generate Voice</span>
</button>
</div>

<div className="absolute -right-4 top-12 px-4 py-2 rounded-xl border shadow-lg animate-pulse-ring" style={{backgroundColor: '#FAFAF9', borderColor: '#D6D3D1'}}>
<div className="flex items-center gap-2">
<i data-lucide="sparkles" style={{width: '16px', height: '16px', strokeWidth: '1.5', color: '#F43F5E'}}></i>
<span className="text-sm font-medium" style={{color: '#141414'}}>AI Enhanced</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t" style={{borderColor: '#D6D3D1'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{backgroundColor: '#FFF1F2'}}>
<i data-lucide="mic-2" style={{width: '20px', height: '20px', strokeWidth: '1.5', color: '#E11D48'}}></i>
</div>
<h3 className="text-lg font-medium font-serif" style={{color: '#141414'}}>Neural Cloning</h3>
<p className="text-sm leading-relaxed font-light" style={{color: '#78716C'}}>Clone any voice with just 30 seconds of audio. Maintain natural tone and emotion.</p>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{backgroundColor: '#FFF1F2'}}>
<i data-lucide="languages" style={{width: '20px', height: '20px', strokeWidth: '1.5', color: '#E11D48'}}></i>
</div>
<h3 className="font-serif text-lg font-medium" style={{color: '#141414'}}>Multilingual</h3>
<p className="text-sm leading-relaxed font-light" style={{color: '#78716C'}}>Speak in 120+ languages while preserving your voice's unique characteristics.</p>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{backgroundColor: '#FFF1F2'}}>
<i data-lucide="sliders" style={{width: '20px', height: '20px', strokeWidth: '1.5', color: '#E11D48'}}></i>
</div>
<h3 className="font-serif text-lg font-medium" style={{color: '#141414'}}>Fine Control</h3>
<p className="text-sm leading-relaxed font-light" style={{color: '#78716C'}}>Adjust speed, pitch, emotion, and emphasis with precision controls.</p>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{backgroundColor: '#FFF1F2'}}>
<i data-lucide="zap" style={{width: '20px', height: '20px', strokeWidth: '1.5', color: '#E11D48'}}></i>
</div>
<h3 className="font-serif text-lg font-medium" style={{color: '#141414'}}>Real-time</h3>
<p className="text-sm leading-relaxed font-light" style={{color: '#78716C'}}>Generate studio-quality audio in seconds, not hours. Export instantly.</p>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
