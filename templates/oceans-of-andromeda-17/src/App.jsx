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
        


      // Initialize Lucide Icons
      lucide.createIcons();

      // Simple parallax effect for text opacity on scroll
      window.addEventListener('scroll', () => {
          const scrolled = window.scrollY;
          const hero = document.querySelector('h1');
          if(scrolled < 500) {
              hero.style.filter = `blur(${scrolled * 0.02}px)`;
              hero.style.opacity = 1 - (scrolled * 0.002);
          }
      });
    


      (function() {
          const canvas = document.getElementById('ocean-dust');
          if (!canvas) return;
          const ctx = canvas.getContext('2d');
          let width, height, particles = [];

          function init() {
              width = canvas.width = canvas.offsetWidth;
              height = canvas.height = canvas.offsetHeight;
              createParticles();
          }

          function createParticles() {
              particles = [];
              const count = Math.floor((width * height) / 10000);
              for (let i = 0; i < count; i++) {
                  particles.push({
                      x: Math.random() * width,
                      y: Math.random() * height,
                      size: Math.random() * 2 + 0.5,
                      speed: Math.random() * 0.4 + 0.1,
                      opacity: Math.random() * 0.5 + 0.2
                  });
              }
          }

          function animate() {
              ctx.clearRect(0, 0, width, height);
              particles.forEach(p => {
                  p.y -= p.speed;
                  if (p.y < -5) p.y = height + 5;
                  ctx.beginPath();
                  ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                  // Strict Emerald color: #10b981 (Tailwind Emerald 500)
                  ctx.fillStyle = 'rgba(16, 185, 129, ' + p.opacity + ')';
                  ctx.fill();
              });
              requestAnimationFrame(animate);
          }

          window.addEventListener('resize', init);
          init();
          animate();
      })();
    
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
      

<div className="fixed inset-0 w-full h-full -z-20 overflow-hidden bg-black pointer-events-none">

<div className="aura-background-component absolute inset-0 w-full h-full opacity-60">
<div className="absolute w-full h-full left-0 top-0" data-us-project="uFY4IYPs2LU8fWm96Im2"></div>

</div>

<div className="absolute inset-0 bg-emerald-500/30 mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-center mix-blend-screen pointer-events-none">
<div className="text-xs tracking-[0.3em] font-sans text-emerald-500/80 uppercase pointer-events-auto">
        Oceans
        <br/>
        of
        <br/>
        Andromeda
      </div>
<div className="pointer-events-auto">
<a className="text-xs font-sans text-emerald-500/50 hover:text-emerald-400 transition-colors tracking-widest uppercase" href="#download">
          Acquire
        </a>
</div>
</nav>

<section className="relative h-screen w-full flex flex-col items-center justify-center z-10 px-6">

<div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
<canvas className="w-full h-full" id="ocean-dust"></canvas>
</div>
<div className="text-center z-10 space-y-6">
<h1 className="font-sans text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-emerald-200 via-emerald-500 to-emerald-900 opacity-0 animate-drift">
          Oceans of
          <br/>
<span className="font-serif italic font-normal text-emerald-400 biolum-text">
            Andromeda
          </span>
</h1>
<p className="font-mono text-emerald-500/50 text-sm md:text-base tracking-widest uppercase opacity-0 animate-drift delay-500">
          A theme for the depths
        </p>
</div>
<div className="absolute bottom-12 w-full flex justify-center opacity-0 animate-drift delay-1000">
<div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-emerald-800 to-transparent"></div>
</div>
</section>

<section className="relative w-full py-32 md:py-48 px-6 z-10 flex justify-center">
<div className="max-w-2xl text-center space-y-12">
<i className="mx-auto w-6 h-6 text-emerald-500/50 mb-8" data-lucide="waves"></i>
<p className="font-garamond text-2xl md:text-4xl text-emerald-100/80 leading-relaxed font-light">
          The human eye evolved in the canopy. We are most sensitive to the
          green wavelength—it is the color of shelter, of water, of life.
        </p>
<p className="font-garamond text-xl md:text-2xl text-emerald-500/60 leading-relaxed italic">
          Yet we stare into blinding white voids.
        </p>
<p className="font-garamond text-2xl md:text-3xl text-emerald-100/70 leading-relaxed">
          This is a return to the deep. A sanctuary for the retina.
          <br/>
          Bioluminescence in the abyss.
        </p>
</div>
</section>

<section className="relative w-full py-24 z-10">
<div className="w-full max-w-6xl mx-auto px-4 md:px-8">

<div className="relative rounded-lg overflow-hidden bg-[#050c0c] border border-emerald-900/50 biolum-box transform transition-transform duration-1000 hover:scale-[1.01]">

<div className="flex items-center px-4 py-3 bg-[#020606] border-b border-emerald-900/30">
<div className="flex gap-2 mr-4">
<div className="w-3 h-3 rounded-full bg-emerald-900/40"></div>
<div className="w-3 h-3 rounded-full bg-emerald-900/40"></div>
<div className="w-3 h-3 rounded-full bg-emerald-900/40"></div>
</div>
<div className="flex text-xs font-mono text-gray-500 gap-1">
<span className="text-emerald-500/80">
                SearchSuggestionsWrapper.tsx
              </span>
<span className="opacity-30">×</span>
</div>
</div>

<div className="p-6 md:p-8 overflow-x-auto bg-[#030808]/50">
<pre className="font-mono text-xs md:text-sm leading-6 md:leading-7 text-emerald-100/90"><span className="text-emerald-900/50 select-none mr-4"> 1</span><span className="syntax-pink">import</span> { <span className="syntax-yellow">useEffect</span> } <span className="syntax-pink">from</span> <span className="syntax-green">'react'</span>
<span className="text-emerald-900/50 select-none mr-4"> 2</span><span className="syntax-pink">import</span> <span className="syntax-cyan">dynamic</span> <span className="syntax-pink">from</span> <span className="syntax-green">'next/dynamic'</span>
<span className="text-emerald-900/50 select-none mr-4"> 3</span><span className="syntax-pink">import</span> { <span className="syntax-cyan">useAtomValue</span>, <span className="syntax-cyan">useUpdateAtom</span> } <span className="syntax-pink">from</span> <span className="syntax-green">'jotai/utils'</span>
<span className="text-emerald-900/50 select-none mr-4"> 4</span><span className="syntax-pink">import</span> {
<span className="text-emerald-900/50 select-none mr-4"> 5</span>  <span className="syntax-cyan">isSearchSuggestionsChunkLoadedAtom</span>,
<span className="text-emerald-900/50 select-none mr-4"> 6</span>  <span className="syntax-cyan">recommendedSearchesAtom</span>,
<span className="text-emerald-900/50 select-none mr-4"> 7</span>  <span className="syntax-cyan">setIsSearchSuggestionsChunkLoadedAtom</span>,
<span className="text-emerald-900/50 select-none mr-4"> 8</span>  <span className="syntax-cyan">suggestedItemsAtom</span>,
<span className="text-emerald-900/50 select-none mr-4"> 9</span>} <span className="syntax-pink">from</span> <span className="syntax-green">'store/search.atom'</span>
<span className="text-emerald-900/50 select-none mr-4">10</span>
<span className="text-emerald-900/50 select-none mr-4">11</span><span className="syntax-pink">const</span> <span className="syntax-cyan">SearchSuggestions</span> = <span className="syntax-yellow">dynamic</span>(() =&gt; <span className="syntax-pink">import</span>(<span className="syntax-green">'toro/components/SearchWidget'</span>), {
<span className="text-emerald-900/50 select-none mr-4">12</span>  <span className="syntax-cyan">ssr</span>: <span className="syntax-pink">false</span>,
<span className="text-emerald-900/50 select-none mr-4">13</span>})
<span className="text-emerald-900/50 select-none mr-4">14</span>
<span className="text-emerald-900/50 select-none mr-4">15</span><span className="syntax-pink">interface</span> <span className="syntax-yellow">Props</span> {
<span className="text-emerald-900/50 select-none mr-4">16</span>  <span className="syntax-yellow">onClose</span>: () =&gt; <span className="syntax-pink">void</span>
<span className="text-emerald-900/50 select-none mr-4">17</span>  <span className="syntax-cyan">styleVariant</span>: <span className="syntax-pink">string</span>
<span className="text-emerald-900/50 select-none mr-4">18</span>  <span className="syntax-cyan">styles</span>: <span className="syntax-pink">any</span>
<span className="text-emerald-900/50 select-none mr-4">19</span>  <span className="syntax-cyan">isSearchActive</span>: <span className="syntax-pink">boolean</span>
<span className="text-emerald-900/50 select-none mr-4">20</span>}
<span className="text-emerald-900/50 select-none mr-4">21</span>
<span className="text-emerald-900/50 select-none mr-4">22</span><span className="syntax-pink">function</span> <span className="syntax-yellow">SearchSuggestionsWrapper</span>({ <span className="syntax-cyan">isSearchActive</span>, ...<span className="syntax-cyan">props</span> }: <span className="syntax-yellow">Props</span>) {
<span className="text-emerald-900/50 select-none mr-4">23</span>  <span className="syntax-pink">const</span> <span className="syntax-cyan">recommendedSearches</span> = <span className="syntax-yellow">useAtomValue</span>(<span className="syntax-cyan">recommendedSearchesAtom</span>)
<span className="text-emerald-900/50 select-none mr-4">24</span>  <span className="syntax-pink">const</span> <span className="syntax-cyan">products</span> = <span className="syntax-yellow">useAtomValue</span>(<span className="syntax-cyan">suggestedItemsAtom</span>)
<span className="text-emerald-900/50 select-none mr-4">25</span>  <span className="syntax-pink">const</span> <span className="syntax-cyan">isLoaded</span> = <span className="syntax-yellow">useAtomValue</span>(<span className="syntax-cyan">isSearchSuggestionsChunkLoadedAtom</span>)
<span className="text-emerald-900/50 select-none mr-4">26</span>  
<span className="text-emerald-900/50 select-none mr-4">27</span>  <span className="syntax-yellow">useEffect</span>(() =&gt; {
<span className="text-emerald-900/50 select-none mr-4">28</span>    <span className="syntax-pink">if</span> (<span className="syntax-cyan">isLoaded</span>) <span className="syntax-pink">return</span>
<span className="text-emerald-900/50 select-none mr-4">29</span>
<span className="text-emerald-900/50 select-none mr-4">30</span>    <span className="syntax-pink">if</span> (<span className="syntax-cyan">recommendedSearches</span>.<span className="syntax-cyan">length</span> || <span className="syntax-cyan">products</span>.<span className="syntax-cyan">length</span> || <span className="syntax-cyan">isSearchActive</span>) {
<span className="text-emerald-900/50 select-none mr-4">31</span>      <span className="syntax-yellow">setSuggestionsChunkLoading</span>(<span className="syntax-pink">true</span>)
<span className="text-emerald-900/50 select-none mr-4">32</span>    }
<span className="text-emerald-900/50 select-none mr-4">33</span>  }, [<span className="syntax-cyan">recommendedSearches</span>.<span className="syntax-cyan">length</span>, <span className="syntax-cyan">products</span>.<span className="syntax-cyan">length</span>, <span className="syntax-cyan">isSearchActive</span>])
<span className="text-emerald-900/50 select-none mr-4">34</span>
<span className="text-emerald-900/50 select-none mr-4">35</span>  <span className="syntax-pink">return</span> <span className="syntax-cyan">isLoaded</span> ? &lt;<span className="syntax-yellow">SearchSuggestions</span> {...<span className="syntax-cyan">props</span>} /&gt; : <span className="syntax-pink">null</span>
<span className="text-emerald-900/50 select-none mr-4">36</span>}</pre>
</div>

<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent blur-[3px]"></div>
</div>
</div>
</section>

<section className="w-full py-0 z-10 flex flex-col gap-0">

<div className="w-full h-[80vh] relative group overflow-hidden">
<div className="absolute inset-0 bg-emerald-950/40 z-10 group-hover:bg-emerald-950/20 transition-colors duration-700 mix-blend-multiply"></div>
<img alt="Bioluminescence" className="w-full h-full object-cover opacity-60 image-mask scale-100 group-hover:scale-105 transition-transform duration-[2s] grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="py-32 flex justify-center bg-black">
<p className="font-garamond text-xl tracking-widest text-emerald-500/60 uppercase">
          // Where light meets the void
        </p>
</div>

<div className="w-full h-[80vh] relative group overflow-hidden">
<div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-colors duration-700"></div>
<img alt="Deep Forest" className="w-full h-full object-cover opacity-40 image-mask scale-100 group-hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-full h-[60vh] relative group overflow-hidden bg-black flex items-center justify-center">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23064e3b\\' fillOpacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<p className="font-mono text-emerald-900/40 text-xs md:text-sm max-w-lg text-center leading-loose">
          00101101 01010101 01101110 01100011 01101111 01101101 01101101
          01101111 01101110
          <br/>
<span className="text-emerald-500/20">THE SILENCE OF SYNTAX</span>
</p>
</div>
</section>

<section className="relative py-48 px-6 z-10 bg-gradient-to-t from-[#020606] to-black" id="download">
<div className="max-w-4xl mx-auto text-center">
<h2 className="font-garamond text-3xl md:text-5xl text-emerald-50 mb-16 font-light">
          Bring it into your world
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group relative px-8 py-6 rounded-sm bg-[#05110f] border border-emerald-900/30 hover:border-emerald-500/50 transition-all duration-500" href="#">
<div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
<div className="relative flex flex-col items-center gap-4">
<i className="w-6 h-6 text-emerald-500/70 group-hover:text-emerald-400 transition-colors" data-lucide="code-2"></i>
<span className="font-sans text-xs tracking-widest text-emerald-500/40 uppercase group-hover:text-white transition-colors">
                VS Code
              </span>
</div>
</a>

<a className="group relative px-8 py-6 rounded-sm bg-[#05110f] border border-emerald-900/30 hover:border-emerald-500/50 transition-all duration-500" href="#">
<div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
<div className="relative flex flex-col items-center gap-4">
<i className="w-6 h-6 text-emerald-500/70 group-hover:text-emerald-400 transition-colors" data-lucide="terminal-square"></i>
<span className="font-sans text-xs tracking-widest text-emerald-500/40 uppercase group-hover:text-white transition-colors">
                JetBrains
              </span>
</div>
</a>

<a className="group relative px-8 py-6 rounded-sm bg-[#05110f] border border-emerald-900/30 hover:border-emerald-500/50 transition-all duration-500" href="#">
<div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
<div className="relative flex flex-col items-center gap-4">
<i className="w-6 h-6 text-emerald-500/70 group-hover:text-emerald-400 transition-colors" data-lucide="keyboard"></i>
<span className="font-sans text-xs tracking-widest text-emerald-500/40 uppercase group-hover:text-white transition-colors">
                Neovim
              </span>
</div>
</a>

<a className="group relative px-8 py-6 rounded-sm bg-[#05110f] border border-emerald-900/30 hover:border-emerald-500/50 transition-all duration-500" href="#">
<div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
<div className="relative flex flex-col items-center gap-4">
<i className="w-6 h-6 text-emerald-500/70 group-hover:text-emerald-400 transition-colors" data-lucide="text-cursor-input"></i>
<span className="font-sans text-xs tracking-widest text-emerald-500/40 uppercase group-hover:text-white transition-colors">
                Sublime
              </span>
</div>
</a>
</div>
</div>
</section>

<footer className="relative py-24 px-6 text-center z-10 border-t border-emerald-900/20 bg-[#010807]">
<div className="space-y-6">
<p className="font-garamond text-lg text-emerald-500/40 italic">
          "Made for those who code in the deep hours. Use it. Share it. May it
          serve you well."
        </p>
<div className="flex justify-center gap-8 mt-12">
<a className="text-xs font-mono text-emerald-900 hover:text-emerald-500 transition-colors" href="#">
            GITHUB
          </a>
<a className="text-xs font-mono text-emerald-900 hover:text-emerald-500 transition-colors" href="#">
            TWITTER
          </a>
<a className="text-xs font-mono text-emerald-900 hover:text-emerald-500 transition-colors" href="#">
            LICENSE
          </a>
</div>
<div className="mt-12 text-[10px] font-sans text-emerald-900 uppercase tracking-widest">
          © 2024 Andromeda Collective
        </div>
</div>
</footer>



    </>
  );
}
