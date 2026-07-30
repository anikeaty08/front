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
      
    lucide.createIcons({attr: {stroke: 'currentColor', 'stroke-width': 1.5}})

    const clickAudio = document.getElementById('click-audio')
    const keys = ['one', 'two', 'three'].map(id => document.getElementById(id))

    keys.forEach(btn => {
      btn.addEventListener('pointerdown', () => {
        clickAudio.currentTime = 0
        clickAudio.play()
      })
    })

    // simple fade in sequence
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('[data-animate]').forEach(el => {
        setTimeout(() => {
          el.classList.remove('opacity-0', 'translate-y-4')
        }, +el.dataset.delay || 0)
      })
    })
  
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
      

<main className="flex flex-col md:flex-row items-center gap-16 w-full max-w-6xl">

<section className="w-full max-w-md transition-all duration-700 space-y-8" data-animate="" data-delay="100" id="aura-emdj0f8ee">
<div className="space-y-6">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          Jus' make things.<br />Put them on the internet.
        </h1>
<p className="text-zinc-400" id="aura-emdj0f71b">
          Sign up for a newsletter all about building in public, sharing your work, and ignoring the haters.
        </p>
</div>
<form className="flex gap-3" onSubmit={(e) => { event.preventDefault() }}>
<input className="flex-1 bg-transparent border border-zinc-700/70 rounded-md px-4 py-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" placeholder="creator@hotmail.com" required type="email" />
<button className="flex items-center gap-2 bg-zinc-800 border border-zinc-700/70 rounded-md px-6 py-3 text-sm uppercase tracking-wide hover:ring-1 hover:ring-indigo-500 transition" type="submit">
<span>Sign up</span>
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
</section>

<div className="relative w-[275px] md:w-[400px] aspect-[400/310] select-none transition-all duration-700 md:translate-y-0" data-animate="" data-delay="300">

<img alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full" src="https://assets.codepen.io/605876/keypad-base.png?quality=86" />

<button className="absolute w-[42%] h-[46%] bottom-[55%] left-[28%] [clip-path:polygon(0_0,54%_0,89%_24%,100%_70%,54%_100%,46%_100%,0_69%,12%_23%,47%_0%)] origin-bottom active:translate-y-1 transition-transform" id="one" style={{'--travel': `26`, perspective: `800px`}}>
<span className="block w-full h-full relative">
<span className="absolute inset-0 flex items-start pl-3 pt-3 text-lg font-medium" style={{transform: `rotateX(36deg) rotateY(45deg) rotateX(-90deg)`}}>
            ok
          </span>
<img alt="" className="absolute inset-0 w-full h-full object-cover" id="aura-emdj19lhz" src="https://assets.codepen.io/605876/keypad-single.png?quality=86" style={{filter: `hue-rotate(114deg)saturate(1.4)brightness(1.2)`}} /><img alt="" className="absolute inset-0 w-full h-full object-cover" src="https://assets.codepen.io/605876/keypad-single.png?quality=86" style={{filter: `hue-rotate(114deg)saturate(1.4)brightness(1.2)`}} />
</span>
</button>

<button className="absolute w-[42%] h-[46%] bottom-[36%] left-[54%] [clip-path:polygon(0_0,54%_0,89%_24%,100%_70%,54%_100%,46%_100%,0_69%,12%_23%,47%_0%)] origin-bottom active:translate-y-1 transition-transform" id="two">
<span className="block w-full h-full relative">
<span className="absolute inset-0 flex items-start pl-3 pt-3 text-lg font-medium" style={{transform: `rotateX(36deg) rotateY(45deg) rotateX(-90deg)`}}>
            go
          </span>
<img alt="" className="absolute inset-0 w-full h-full object-cover" id="aura-emdj19qf9" src="https://assets.codepen.io/605876/keypad-single.png?quality=86" style={{filter: `brightness(1.4)`}} />
</span>
</button>

<button className="absolute w-[64%] h-[65%] bottom-[18%] left-[6%] [clip-path:polygon(34%_0,93%_44%,101%_78%,71%_100%,66%_100%,0_52%,0_44%,7%_17%,30%_0)] origin-bottom active:translate-y-1 transition-transform" id="three">
<span className="block w-full h-full relative">
<span className="absolute inset-0 flex items-start pl-4 pt-4 text-xl font-medium" style={{transform: `rotateX(36deg) rotateY(45deg) rotateX(-90deg)`}}>
            create.
          </span>
<img alt="" className="absolute inset-0 w-full h-full object-cover" id="aura-emdj19k8e" src="https://assets.codepen.io/605876/keypad-double.png?quality=86" style={{filter: `brightness(0.4)`}} />
</span>
</button>
</div>
</main>

<a className="fixed top-4 left-4 text-zinc-400 hover:text-zinc-100 transition" href="https://twitter.com/intent/follow?screen_name=jh3yy" rel="noopener noreferrer" target="_blank">
<svg className="w-8" fill="none" stroke="currentColor" strokeWidth="20" viewBox="0 0 969 955">
<circle cx="161.191" cy="320.191" r="133.191"></circle>
<circle cx="806.809" cy="320.191" r="133.191"></circle>
<circle cx="695.019" cy="587.733" fill="currentColor" r="31.402" stroke="none"></circle>
<circle cx="272.981" cy="587.733" fill="currentColor" r="31.402" stroke="none"></circle>
<path d="M564.388 712.083c0 31.911-38.353 67.828-81.016 67.828-42.663 0-81.016-35.917-81.016-67.828 0-31.91 38.353-47.73 81.016-47.73 42.663 0 81.016 15.82 81.016 47.73Z" fill="currentColor" stroke="none"></path>
<rect fill="#FF1E1E" height="51.499" stroke="none" width="343.468" x="310.42" y="448.31"></rect>
<path d="M745.643 288.24c69.725 55.945 108.896 144.383 108.896 223.501H614.938v-57.089a39.999 39.999 0 0 0-39.999-39.999H388.37a39.999 39.999 0 0 0-39.999 39.999v57.089H110.949c0-79.118 39.171-167.556 108.896-223.501 69.725-55.945 164.293-87.375 262.899-87.375s193.174 31.43 262.899 87.375Z" fill="currentColor" stroke="none"></path>
</svg>
</a>

<audio id="click-audio" preload="auto" src="https://cdn.freesound.org/previews/378/378085_6260145-lq.mp3"></audio>


    </>
  );
}
