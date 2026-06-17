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



      // Activate icons with 1.5 stroke width
      document.addEventListener("DOMContentLoaded", () => {
        if (window.lucide) lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      });

      // Fade-in animation (duration 1.0s, delay 0.1s)
      window.addEventListener("load", () => {
        const el = document.getElementById("container");
        requestAnimationFrame(() => {
          el.classList.remove("opacity-0","translate-y-1");
          el.classList.add("opacity-100","translate-y-0");
        });
      });

      // Tabs
      const tabBtns = document.querySelectorAll(".tab-btn");
      const panels = {
        freepik: document.getElementById("panel-freepik"),
        midjourney: document.getElementById("panel-midjourney"),
      };
      tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          tabBtns.forEach(b => b.classList.remove("bg-neutral-800/70","text-neutral-200","active"));
          btn.classList.add("bg-neutral-800/70","text-neutral-200","active");
          const name = btn.getAttribute("data-tab");
          Object.keys(panels).forEach(k => panels[k].classList.toggle("hidden", k !== name));
          if (window.lucide) lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        });
      });

      // Ratio buttons
      const ratioBtns = document.querySelectorAll(".ratio-btn");
      ratioBtns.forEach(b => {
        b.addEventListener("click", () => {
          ratioBtns.forEach(x => x.classList.remove("bg-neutral-800/60","text-neutral-200"));
          b.classList.add("bg-neutral-800/60","text-neutral-200");
        });
      });

      // HQ Toggle
      const hq = document.getElementById("hqToggle");
      hq?.addEventListener("click", () => {
        const pressed = hq.getAttribute("aria-pressed") === "true";
        hq.setAttribute("aria-pressed", String(!pressed));
        hq.classList.toggle("bg-neutral-700", pressed);
        hq.classList.toggle("ring-violet-400/40", !pressed);
        const dot = hq.querySelector(".dot");
        dot.classList.toggle("translate-x-6", !pressed);
        dot.classList.toggle("translate-x-1", pressed);
      });

      // Generate actions (demo only)
      const unsplash = [
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop"
      ];
      function random() { return unsplash[Math.floor(Math.random() * unsplash.length)]; }

      function shimmer(cardImg) {
        const parent = cardImg.parentElement;
        const overlay = document.createElement("div");
        overlay.className = "absolute inset-0 bg-neutral-800/60 animate-pulse";
        parent.appendChild(overlay);
        setTimeout(() => parent.removeChild(overlay), 900);
      }

      function runGeneration() {
        const i1 = document.getElementById("img1");
        const i2 = document.getElementById("img2");
        const i3 = document.getElementById("img3");
        [i1, i2, i3].forEach(shimmer);
        setTimeout(() => {
          i1.src = random();
          i2.src = random();
          i3.src = random();
          document.getElementById("lastRun").textContent = new Date().toLocaleTimeString();
          if (window.lucide) lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        }, 850);
      }

      document.getElementById("generate").addEventListener("click", runGeneration);
      document.getElementById("runAll").addEventListener("click", runGeneration);

      // Build Midjourney prompt (simple concat)
      document.getElementById("buildMJ").addEventListener("click", () => {
        const scene = (document.getElementById("scene").value || "a moody jazz bar").trim();
        const subjects = (document.getElementById("subjects").value || "saxophonist, small crowd").trim();
        const style = (document.getElementById("style").value || "editorial").trim();
        const ar = document.querySelector(".ratio-btn.bg-neutral-800\\/60")?.dataset.ratio || "3:2";
        const seed = document.getElementById("seed").value;
        const quality = (document.getElementById("hqToggle").getAttribute("aria-pressed") === "true") ? " —quality 2" : "";
        const mj = `/imagine prompt: ${scene}, ${subjects}, ${style} —v 6.0 —ar ${ar}${quality}${seed ? " —seed " + seed : ""}`;
        document.getElementById("mjPrompt").textContent = mj;
        // switch to MJ tab
        document.querySelector('[data-tab="midjourney"]').click();
      });

      // Copy MJ
      document.getElementById("copyMJ").addEventListener("click", async () => {
        const txt = document.getElementById("mjPrompt").textContent;
        try {
          await navigator.clipboard.writeText(txt);
          const tag = document.getElementById("copied");
          tag.classList.remove("hidden");
          setTimeout(() => tag.classList.add("hidden"), 1000);
        } catch {}
      });

      // Clear
      document.getElementById("clear").addEventListener("click", () => {
        ["scene","subjects","style","medium","colors","seed"].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = "";
        });
      });

      // Export (demo)
      document.getElementById("export").addEventListener("click", () => {
        alert("Session exported (demo).");
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
      

<div className="h-screen w-screen flex overflow-hidden" id="app">

<main className="flex-1 overflow-y-auto">

<div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-violet-500/10 to-transparent"></div>
<div className="h-full w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 opacity-0 translate-y-1 transition-all duration-[1000ms] ease-out delay-[100ms]" id="container">

<header className="mb-4 sm:mb-6 flex items-center justify-between">
<div>
<h1 className="text-[28px] leading-tight tracking-tight" style={{fontFamily: 'var(--geist)', fontWeight: '650'}}>
                Prompt Pilot
              </h1>
<p className="text-sm text-neutral-400 mt-1">Build a high-quality prompt on the left. Generate and compare outputs on the right.</p>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-800/70 hover:bg-neutral-800 ring-1 ring-stone-800/70 shadow-md transition" id="newSession">
<i className="h-4 w-4 text-neutral-300" data-lucide="plus"></i>
<span className="text-sm text-neutral-200">New</span>
</button>
<button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-violet-500/90 hover:bg-violet-500 text-white shadow-md transition" id="runAll">
<i className="h-4 w-4" data-lucide="wand-2"></i>
<span className="text-sm">Generate</span>
</button>
</div>
</header>

<section className="grid grid-cols-1 lg:grid-cols-[340px_1fr] xl:grid-cols-[320px_1fr] gap-4 sm:gap-6">

<div className="bg-neutral-900/60 backdrop-blur-xl ring-1 ring-stone-800/70 rounded-2xl shadow-md p-4 sm:p-5">

<div className="flex items-start gap-3 p-3 rounded-xl bg-amber-500/10 ring-1 ring-amber-400/30 mb-4">
<div className="mt-0.5">
<i className="h-4 w-4 text-amber-300" data-lucide="info"></i>
</div>
<div className="text-[13px] leading-relaxed text-amber-200">
                  In .env.local replace PASTE_YOUR_FREEPIK_API_KEY_HERE with your key, then restart your dev server.
                </div>
</div>

<div className="space-y-4">
<div>
<label className="block text-[12px] text-neutral-400 mb-2 tracking-tight" style={{fontFamily: 'var(--geist)', fontWeight: '550'}}>Scene</label>
<textarea className="w-full resize-none rounded-xl bg-neutral-900/70 focus:bg-neutral-900 text-neutral-200 placeholder-neutral-500 ring-1 ring-stone-800/70 focus:ring-violet-500/60 outline-none px-3 py-2 transition" id="scene" placeholder="a moody jazz bar with cinematic reflections" rows="3"></textarea>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-[12px] text-neutral-400 mb-2 tracking-tight" style={{fontFamily: 'var(--geist)', fontWeight: '550'}}>Subjects (comma separated)</label>
<input className="w-full rounded-xl bg-neutral-900/70 focus:bg-neutral-900 text-neutral-200 placeholder-neutral-500 ring-1 ring-stone-800/70 focus:ring-violet-500/60 outline-none px-3 py-2 transition" id="subjects" placeholder="saxophonist, small crowd" type="text"/>
</div>
<div>
<label className="block text-[12px] text-neutral-400 mb-2 tracking-tight" style={{fontFamily: 'var(--geist)', fontWeight: '550'}}>Style vibes</label>
<input className="w-full rounded-xl bg-neutral-900/70 focus:bg-neutral-900 text-neutral-200 placeholder-neutral-500 ring-1 ring-stone-800/70 focus:ring-violet-500/60 outline-none px-3 py-2 transition" id="style" placeholder="ligne claire, editorial" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-[12px] text-neutral-400 mb-2 tracking-tight" style={{fontFamily: 'var(--geist)', fontWeight: '550'}}>Medium</label>
<input className="w-full rounded-xl bg-neutral-900/70 focus:bg-neutral-900 text-neutral-200 placeholder-neutral-500 ring-1 ring-stone-800/70 focus:ring-violet-500/60 outline-none px-3 py-2 transition" id="medium" placeholder="illustration" type="text"/>
</div>
<div>
<label className="block text-[12px] text-neutral-400 mb-2 tracking-tight" style={{fontFamily: 'var(--geist)', fontWeight: '550'}}>Palette</label>
<input className="w-full rounded-xl bg-neutral-900/70 focus:bg-neutral-900 text-neutral-200 placeholder-neutral-500 ring-1 ring-stone-800/70 focus:ring-violet-500/60 outline-none px-3 py-2 transition" id="colors" placeholder="cyan, coral, lime" type="text"/>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-[12px] text-neutral-400 mb-2 tracking-tight" style={{fontFamily: 'var(--geist)', fontWeight: '550'}}>Aspect Ratio</label>
<div className="flex bg-neutral-900/70 ring-1 ring-stone-800/70 rounded-xl p-1 gap-1">
<button className="ratio-btn flex-1 text-xs px-3 py-1.5 rounded-lg bg-neutral-800/60 text-neutral-300" data-ratio="1:1">1:1</button>
<button className="ratio-btn flex-1 text-xs px-3 py-1.5 rounded-lg hover:bg-neutral-800/60 text-neutral-300" data-ratio="3:2">3:2</button>
<button className="ratio-btn flex-1 text-xs px-3 py-1.5 rounded-lg hover:bg-neutral-800/60 text-neutral-300" data-ratio="16:9">16:9</button>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<span className="text-[12px] text-neutral-400 tracking-tight" style={{fontFamily: 'var(--geist)', fontWeight: '550'}}>High Quality</span>

<button aria-pressed="true" className="relative inline-flex h-6 w-11 items-center rounded-full bg-violet-500/70 ring-1 ring-violet-400/40 transition" id="hqToggle">
<span className="sr-only">High Quality</span>
<span className="dot translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
</button>
</div>
<div className="flex items-center gap-2">
<span className="text-[12px] text-neutral-400 tracking-tight" style={{fontFamily: 'var(--geist)', fontWeight: '550'}}>Seed</span>
<input className="w-24 text-sm rounded-xl bg-neutral-900/70 focus:bg-neutral-900 text-neutral-200 placeholder-neutral-500 ring-1 ring-stone-800/70 focus:ring-violet-500/60 outline-none px-3 py-2 transition" id="seed" placeholder="auto" type="number"/>
</div>
</div>
</div>

<div>
<label className="block text-[12px] text-neutral-400 mb-2 tracking-tight" style={{fontFamily: 'var(--geist)', fontWeight: '550'}}>Reference (optional)</label>
<div className="group relative flex items-center justify-between gap-3 rounded-xl bg-neutral-900/70 hover:bg-neutral-900 ring-1 ring-dashed ring-stone-800/70 p-3 transition cursor-pointer" id="dropzone">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-neutral-800/80 flex items-center justify-center ring-1 ring-stone-800/70">
<i className="h-4 w-4 text-neutral-300" data-lucide="upload-cloud"></i>
</div>
<div className="text-sm text-neutral-300">
                        Drag &amp; drop or click to upload a reference image
                        <p className="text-xs text-neutral-500">PNG, JPG up to 5MB</p>
</div>
</div>
<input accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" type="file"/>
<div className="hidden sm:flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg bg-neutral-800/60 ring-1 ring-stone-800/60 text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="image-plus"></i>
                      Browse
                    </div>
</div>
</div>

<div className="flex items-center justify-between gap-3 pt-1">
<button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-800/70 hover:bg-neutral-800 ring-1 ring-stone-800/70 text-neutral-200 transition" id="buildMJ">
<i className="h-4 w-4 text-neutral-300" data-lucide="bot"></i>
<span className="text-sm">Build Midjourney Prompt</span>
</button>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-xl bg-neutral-800/60 hover:bg-neutral-800 ring-1 ring-stone-800/70 text-sm text-neutral-300" id="clear">Clear</button>
<button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-violet-500/90 hover:bg-violet-500 text-white shadow-md transition" id="generate">
<i className="h-4 w-4" data-lucide="sparkle"></i>
<span className="text-sm">Generate</span>
</button>
</div>
</div>
</div>
</div>

<div className="space-y-4 sm:space-y-5">

<div className="bg-neutral-900/60 backdrop-blur-xl ring-1 ring-stone-800/70 rounded-2xl shadow-md">
<div className="px-4 sm:px-5 pt-4">
<div className="inline-flex p-1 rounded-xl bg-neutral-900/70 ring-1 ring-stone-800/70">
<button className="tab-btn active inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-sm bg-neutral-800/70 text-neutral-200" data-tab="freepik">
<i className="h-4 w-4 text-violet-400" data-lucide="image"></i>
                      Freepik Output
                    </button>
<button className="tab-btn inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800/60" data-tab="midjourney">
<i className="h-4 w-4" data-lucide="terminal"></i>
                      Midjourney Prompt
                    </button>
</div>
</div>

<div className="p-4 sm:p-5">

<div className="space-y-4" id="panel-freepik">
<h2 className="text-xl tracking-tight" style={{fontFamily: 'var(--geist)', fontWeight: '600'}}>Freepik Response</h2>
<p className="text-sm text-neutral-400">Generated images will appear every time you click “Generate”.</p>

<div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">

<div className="group rounded-2xl bg-neutral-900/70 ring-1 ring-stone-800/70 shadow-md overflow-hidden flex flex-col">
<div className="relative aspect-[16/10] bg-neutral-800/50">
<img alt="Generated sample 1" className="h-full w-full object-cover" id="img1" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-neutral-900/40 backdrop-blur-sm flex items-center justify-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-neutral-800/80 ring-1 ring-stone-800/60 text-xs text-neutral-200 flex items-center gap-2">
<i className="h-3.5 w-3.5" data-lucide="download"></i> Download
                            </button>
<button className="px-3 py-1.5 rounded-lg bg-neutral-800/80 ring-1 ring-stone-800/60 text-xs text-neutral-200 flex items-center gap-2">
<i className="h-3.5 w-3.5" data-lucide="heart"></i> Save
                            </button>
</div>
</div>
<div className="p-3 text-xs text-neutral-400">Result #1</div>
</div>

<div className="group rounded-2xl bg-neutral-900/70 ring-1 ring-stone-800/70 shadow-md overflow-hidden flex flex-col">
<div className="relative aspect-[16/10] bg-neutral-800/50">
<img alt="Generated sample 2" className="h-full w-full object-cover" id="img2" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-neutral-900/40 backdrop-blur-sm flex items-center justify-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-neutral-800/80 ring-1 ring-stone-800/60 text-xs text-neutral-200 flex items-center gap-2">
<i className="h-3.5 w-3.5" data-lucide="download"></i> Download
                            </button>
<button className="px-3 py-1.5 rounded-lg bg-neutral-800/80 ring-1 ring-stone-800/60 text-xs text-neutral-200 flex items-center gap-2">
<i className="h-3.5 w-3.5" data-lucide="heart"></i> Save
                            </button>
</div>
</div>
<div className="p-3 text-xs text-neutral-400">Result #2</div>
</div>

<div className="group rounded-2xl bg-neutral-900/70 ring-1 ring-stone-800/70 shadow-md overflow-hidden flex flex-col">
<div className="relative aspect-[16/10] bg-neutral-800/50">
<img alt="Generated sample 3" className="h-full w-full object-cover" id="img3" src="https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-neutral-900/40 backdrop-blur-sm flex items-center justify-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-neutral-800/80 ring-1 ring-stone-800/60 text-xs text-neutral-200 flex items-center gap-2">
<i className="h-3.5 w-3.5" data-lucide="download"></i> Download
                            </button>
<button className="px-3 py-1.5 rounded-lg bg-neutral-800/80 ring-1 ring-stone-800/60 text-xs text-neutral-200 flex items-center gap-2">
<i className="h-3.5 w-3.5" data-lucide="heart"></i> Save
                            </button>
</div>
</div>
<div className="p-3 text-xs text-neutral-400">Result #3</div>
</div>
</div>
</div>

<div className="hidden space-y-4" id="panel-midjourney">
<h2 className="text-xl tracking-tight" style={{fontFamily: 'var(--geist)', fontWeight: '600'}}>Midjourney Prompt</h2>
<div className="rounded-2xl bg-neutral-900/70 ring-1 ring-stone-800/70 shadow-md p-3">
<pre className="text-sm leading-relaxed text-neutral-300 whitespace-pre-wrap" id="mjPrompt">/imagine prompt: a moody jazz bar, saxophonist, small crowd —v 6.0 —ar 3:2 —style raw —chaos 8 —s 250</pre>
<div className="mt-3 flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-800/70 hover:bg-neutral-800 ring-1 ring-stone-800/70 text-neutral-200 transition" id="copyMJ">
<i className="h-4 w-4" data-lucide="copy"></i>
<span className="text-sm">Copy</span>
</button>
<span className="text-xs text-violet-400 hidden" id="copied">Copied</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/60 backdrop-blur-xl ring-1 ring-stone-800/70 rounded-2xl shadow-md p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-neutral-400">
<i className="h-4 w-4" data-lucide="history"></i>
<span>Last run: <span className="text-neutral-300" id="lastRun">—</span></span>
</div>
<button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-800/70 hover:bg-neutral-800 ring-1 ring-stone-800/70 text-neutral-200 transition" id="export">
<i className="h-4 w-4" data-lucide="share-2"></i>
<span className="text-sm">Export Session</span>
</button>
</div>
</div>
</div>
</section>
</div>
</main>
</div>



    </>
  );
}
