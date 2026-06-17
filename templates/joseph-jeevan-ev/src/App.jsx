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



    function openLb(element) {
        // Automatically find the image source from within the clicked element
        let imgSrc = "";
        
        // If the element is an image, use its src
        if (element.tagName === 'IMG') {
            imgSrc = element.src;
        } else {
            // Otherwise try to find an img tag inside
            const img = element.querySelector('img');
            if (img) {
                imgSrc = img.src;
            } else {
                // Fallback for string passing
                if (typeof element === 'string') {
                    imgSrc = element;
                }
            }
        }

        if (imgSrc) {
            document.getElementById('lb-img').src = imgSrc;
            document.getElementById('lightbox').classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLb() {
        document.getElementById('lightbox').classList.remove('open');
        document.body.style.overflow = '';
    }
    
    document.getElementById('lb-close').addEventListener('click', closeLb);
    
    document.getElementById('lightbox').addEventListener('click', e => {
        if (e.target === e.currentTarget) closeLb();
    });
    
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

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
      

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' id="lightbox">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="absolute top-6 right-6 cursor-pointer text-zinc-500 hover:text-white transition-colors p-2" id="lb-close">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' icon="solar:close-circle-linear" width="32"></iconify-icon>
</div>
<img alt="Project Preview" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="max-w-[90vw] max-h-[85vh] object-contain shadow-2xl border border-white/10 rounded-sm" id="lb-img" src=""/>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase text-zinc-600">Press ESC to close</span>
</div>

<nav bis_size='{"x":0,"y":0,"w":835,"h":57,"abs_x":440,"abs_y":43}' className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-black/80 backdrop-blur-md supports-[backdrop-filter]:bg-black/60">
<div bis_size='{"x":0,"y":0,"w":835,"h":56,"abs_x":440,"abs_y":43}' className="flex h-14 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div bis_size='{"x":24,"y":12,"w":170,"h":32,"abs_x":464,"abs_y":55}' className="flex items-center gap-3 group cursor-default">
<div bis_size='{"x":24,"y":12,"w":32,"h":32,"abs_x":464,"abs_y":55}' className="flex group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all duration-300 bg-zinc-900/50 w-8 h-8 border-white/10 border rounded items-center justify-center">
<span bis_size='{"x":32,"y":20,"w":14,"h":16,"abs_x":472,"abs_y":63}' className="font-mono text-xs text-white">JJ</span>
</div>
<div bis_size='{"x":68,"y":12,"w":126,"h":31,"abs_x":508,"abs_y":55}' className="flex flex-col">
<span bis_size='{"x":68,"y":12,"w":126,"h":16,"abs_x":508,"abs_y":55}' className="text-xs text-white tracking-widest font-medium uppercase font-display">Joseph Jeevan EV</span>
<span bis_size='{"x":68,"y":28,"w":126,"h":15,"abs_x":508,"abs_y":71}' className="text-[10px] text-zinc-600 tracking-wider">Visual Architect</span>
</div>
</div>
<div bis_size='{"x":264,"y":20,"w":340,"h":16,"abs_x":704,"abs_y":63}' className="hidden md:flex items-center gap-8">
<a bis_size='{"x":264,"y":20,"w":64,"h":16,"abs_x":704,"abs_y":63}' className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors" href="#about">Identity</a>
<a bis_size='{"x":360,"y":20,"w":63,"h":16,"abs_x":800,"abs_y":63}' className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors" href="#skills">Arsenal</a>
<a bis_size='{"x":456,"y":20,"w":72,"h":16,"abs_x":896,"abs_y":63}' className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors" href="#work">Projects</a>
<a bis_size='{"x":560,"y":20,"w":44,"h":16,"abs_x":1000,"abs_y":63}' className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors" href="#media">Media</a>
</div>
<div bis_size='{"x":674,"y":14,"w":136,"h":28,"abs_x":1114,"abs_y":57}' className="flex items-center gap-4">
<span bis_size='{"x":674,"y":15,"w":56,"h":25,"abs_x":1114,"abs_y":58}' className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
<span bis_size='{"x":683,"y":25,"w":6,"h":6,"abs_x":1123,"abs_y":68}' className="relative flex h-1.5 w-1.5">
<span bis_size='{"x":683,"y":25,"w":6,"h":6,"abs_x":1123,"abs_y":68}' className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span bis_size='{"x":683,"y":25,"w":6,"h":6,"abs_x":1123,"abs_y":68}' className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span bis_size='{"x":695,"y":20,"w":26,"h":15,"abs_x":1135,"abs_y":63}' className="text-[10px] uppercase font-medium text-emerald-400 tracking-widest">Hire</span>
</span>
<a bis_size='{"x":747,"y":14,"w":63,"h":28,"abs_x":1187,"abs_y":57}' className="hidden sm:flex items-center gap-2 hover:bg-zinc-200 transition-colors text-xs font-medium text-black tracking-wide bg-white rounded-sm pt-1.5 pr-3 pb-1.5 pl-3" href="https://drive.google.com/file/d/1UeZ60t3JqDz0IAFzR7-YZXpsLdV38iPh/view?usp=sharing">
<iconify-icon bis_size='{"x":759,"y":21,"w":14,"h":14,"abs_x":1199,"abs_y":64}' className="" height="14" icon="solar:download-minimalistic-linear" style={{color: 'rgb(0, 0, 0)'}} width="14"></iconify-icon>
<span bis_size='{"x":781,"y":20,"w":17,"h":16,"abs_x":1221,"abs_y":63}' className="cursor-pointer" onclick="window.location.href='https://drive.google.com/file/d/1UeZ60t3JqDz0IAFzR7-YZXpsLdV38iPh/view?usp=sharing'" role="button">CV</span>
</a>
</div>
</div>
</nav>
<main bis_size='{"x":0,"y":56,"w":835,"h":4687,"abs_x":440,"abs_y":99}' className="relative mt-14">

<section bis_size='{"x":0,"y":56,"w":835,"h":615,"abs_x":440,"abs_y":99}' className="min-h-[92vh] flex flex-col border-white/[0.08] overflow-hidden border-b relative items-center justify-center">
<div bis_size='{"x":0,"y":56,"w":835,"h":614,"abs_x":440,"abs_y":99}' className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
<div bis_size='{"x":0,"y":56,"w":835,"h":614,"abs_x":440,"abs_y":99}' className="absolute inset-0 manga-lines pointer-events-none opacity-40"></div>

<div bis_size='{"x":117,"y":63,"w":600,"h":600,"abs_x":557,"abs_y":106}' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div bis_size='{"x":137,"y":158,"w":560,"h":410,"abs_x":577,"abs_y":201}' className="text-center max-w-5xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div bis_size='{"x":161,"y":158,"w":512,"h":16,"abs_x":601,"abs_y":201}' className="mb-8 flex items-center justify-center gap-3 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
<div bis_size='{"x":282,"y":165,"w":32,"h":1,"abs_x":722,"abs_y":208}' className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-500/50"></div>
<span bis_size='{"x":326,"y":158,"w":182,"h":16,"abs_x":766,"abs_y":201}' className="font-mono text-indigo-400/80 tracking-[0.2em] text-xs uppercase">Portfolio Vol. 2025</span>
<div bis_size='{"x":520,"y":165,"w":32,"h":1,"abs_x":960,"abs_y":208}' className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-500/50"></div>
</div>
<h1 bis_size='{"x":161,"y":206,"w":512,"h":192,"abs_x":601,"abs_y":249}' className="bg-clip-text md:text-8xl lg:text-9xl leading-[0.9] animate-[fadeIn_1s_ease-out_0.2s_forwards] text-6xl font-medium text-transparent tracking-tighter font-display bg-gradient-to-b from-white via-white to-white/40 opacity-0 mb-8">
                VISUAL<br bis_size='{"x":562,"y":192,"w":0,"h":122,"abs_x":1002,"abs_y":235}'/>ARCHITECT
            </h1>
<p bis_size='{"x":161,"y":430,"w":512,"h":48,"abs_x":601,"abs_y":473}' className="md:text-base leading-loose animate-[fadeIn_1s_ease-out_0.4s_forwards] text-sm font-light text-zinc-400 tracking-widest opacity-0 max-w-lg mr-auto mb-12 ml-auto">映像の魔術師 <span bis_size='{"x":307,"y":432,"w":6,"h":19,"abs_x":747,"abs_y":475}' className="mx-2 text-zinc-700">|</span> Designer, VFX Artist, &amp; AI Strategist crafting worlds where technology meets magic.</p>
<div bis_size='{"x":161,"y":526,"w":512,"h":42,"abs_x":601,"abs_y":569}' className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
<a bis_size='{"x":246,"y":527,"w":170,"h":40,"abs_x":686,"abs_y":570}' className="group relative px-6 py-3 bg-white text-black overflow-hidden rounded-sm transition-transform hover:-translate-y-0.5" href="#work">
<div bis_size='{"x":270,"y":539,"w":122,"h":16,"abs_x":710,"abs_y":582}' className="relative flex items-center gap-2 font-medium tracking-tight text-xs uppercase">
<span bis_size='{"x":270,"y":539,"w":98,"h":16,"abs_x":710,"abs_y":582}'>Explore Works</span>
<iconify-icon bis_size='{"x":376,"y":539,"w":16,"h":16,"abs_x":816,"abs_y":582}' className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</a>
<a bis_size='{"x":432,"y":526,"w":155,"h":42,"abs_x":872,"abs_y":569}' className="px-6 py-3 border border-white/20 hover:bg-white/5 hover:border-white/30 transition-all rounded-sm text-xs text-white tracking-tight uppercase" href="#contact">
                    Initiate Contact
                </a>
</div>
</div>
<div bis_size='{"x":391,"y":591,"w":51,"h":47,"abs_x":831,"abs_y":634}' className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 animate-pulse">
<span bis_size='{"x":391,"y":591,"w":51,"h":15,"abs_x":831,"abs_y":634}' className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">Scroll</span>
<iconify-icon bis_size='{"x":407,"y":618,"w":20,"h":20,"abs_x":847,"abs_y":661}' className="text-zinc-500" icon="solar:mouse-linear" width="20"></iconify-icon>
</div>
</section>

<section bis_size='{"x":0,"y":671,"w":835,"h":513,"abs_x":440,"abs_y":714}' className="border-b border-white/[0.08] bg-zinc-950/30" id="about">
<div bis_size='{"x":0,"y":671,"w":835,"h":512,"abs_x":440,"abs_y":714}' className="max-w-7xl mx-auto">
<div bis_size='{"x":0,"y":671,"w":835,"h":512,"abs_x":440,"abs_y":714}' className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] border-x border-white/[0.08]">
<div bis_size='{"x":1,"y":671,"w":555,"h":512,"abs_x":441,"abs_y":714}' className="md:col-span-8 p-10 md:p-16 flex flex-col justify-between">
<div bis_size='{"x":65,"y":735,"w":427,"h":311,"abs_x":505,"abs_y":778}' className="">
<div bis_size='{"x":65,"y":735,"w":427,"h":20,"abs_x":505,"abs_y":778}' className="flex items-center gap-3 mb-8">
<iconify-icon bis_size='{"x":65,"y":735,"w":20,"h":20,"abs_x":505,"abs_y":778}' className="text-indigo-400" icon="solar:scanner-linear" width="20"></iconify-icon>
<span bis_size='{"x":97,"y":737,"w":89,"h":16,"abs_x":537,"abs_y":780}' className="text-xs font-display uppercase tracking-widest text-white/90">Identity Log</span>
</div>
<h2 bis_size='{"x":65,"y":787,"w":427,"h":144,"abs_x":505,"abs_y":830}' className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-medium tracking-tight mb-6 leading-tight">
                            A creative commander bridging the gap between raw cinematography and agentic AI systems.
                        </h2>
<p bis_size='{"x":65,"y":955,"w":427,"h":91,"abs_x":505,"abs_y":998}' className="text-sm leading-relaxed text-zinc-400 max-w-2xl font-light">
                            From Kerala to Bangalore, I've spent 5+ years mastering the production pipeline. Whether it's directing a shoot, compositing VFX in Nuke, or architecting multi-agent AI systems for enterprise, I don't just build media—I engineer experiences.
                        </p>
</div>
<div bis_size='{"x":65,"y":1094,"w":427,"h":25,"abs_x":505,"abs_y":1137}' className="mt-12 flex flex-wrap gap-2">
<span bis_size='{"x":65,"y":1094,"w":126,"h":25,"abs_x":505,"abs_y":1137}' className="px-3 py-1 border border-indigo-500/20 text-[10px] uppercase tracking-wider text-indigo-300 bg-indigo-500/5 rounded-full">Cinematography</span>
<span bis_size='{"x":199,"y":1094,"w":127,"h":25,"abs_x":639,"abs_y":1137}' className="px-3 py-1 border border-indigo-500/20 text-[10px] uppercase tracking-wider text-indigo-300 bg-indigo-500/5 rounded-full">VFX Composition</span>
<span bis_size='{"x":335,"y":1094,"w":122,"h":25,"abs_x":775,"abs_y":1137}' className="px-3 py-1 border border-indigo-500/20 text-[10px] uppercase tracking-wider text-indigo-300 bg-indigo-500/5 rounded-full">AI Architecture</span>
</div>
</div>
<div bis_size='{"x":556,"y":671,"w":277,"h":512,"abs_x":996,"abs_y":714}' className="md:col-span-4 grid grid-rows-3 divide-y divide-white/[0.08]">
<div bis_size='{"x":557,"y":671,"w":276,"h":170,"abs_x":997,"abs_y":714}' className="p-8 flex items-center justify-between group hover:bg-white/[0.02] transition-colors">
<div bis_size='{"x":589,"y":728,"w":99,"h":56,"abs_x":1029,"abs_y":771}'><div bis_size='{"x":589,"y":728,"w":99,"h":36,"abs_x":1029,"abs_y":771}' className="text-3xl text-white font-display font-medium tracking-tight">5+</div><div bis_size='{"x":589,"y":768,"w":99,"h":16,"abs_x":1029,"abs_y":811}' className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Years Active</div></div>
<iconify-icon bis_size='{"x":777,"y":744,"w":24,"h":24,"abs_x":1217,"abs_y":787}' className="text-zinc-700 group-hover:text-indigo-400 transition-colors" icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<div bis_size='{"x":557,"y":842,"w":276,"h":170,"abs_x":997,"abs_y":885}' className="p-8 flex items-center justify-between group hover:bg-white/[0.02] transition-colors">
<div bis_size='{"x":589,"y":899,"w":115,"h":56,"abs_x":1029,"abs_y":942}'><div bis_size='{"x":589,"y":899,"w":115,"h":36,"abs_x":1029,"abs_y":942}' className="text-3xl text-white font-display font-medium tracking-tight">20+</div><div bis_size='{"x":589,"y":939,"w":115,"h":16,"abs_x":1029,"abs_y":982}' className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Global Brands</div></div>
<iconify-icon bis_size='{"x":801,"y":927,"w":0,"h":0,"abs_x":1241,"abs_y":970}' className="text-zinc-700 group-hover:text-indigo-400 transition-colors" icon="solar:globe-linear" width="24"></iconify-icon>
</div>
<div bis_size='{"x":557,"y":1012,"w":276,"h":170,"abs_x":997,"abs_y":1055}' className="p-8 flex items-center justify-between group hover:bg-white/[0.02] transition-colors">
<div bis_size='{"x":589,"y":1070,"w":128,"h":56,"abs_x":1029,"abs_y":1113}'><div bis_size='{"x":589,"y":1070,"w":128,"h":36,"abs_x":1029,"abs_y":1113}' className="text-3xl text-amber-400 font-display font-medium tracking-tight">GOLD</div><div bis_size='{"x":589,"y":1110,"w":128,"h":16,"abs_x":1029,"abs_y":1153}' className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Exchange4Media</div></div>
<iconify-icon bis_size='{"x":777,"y":1086,"w":24,"h":24,"abs_x":1217,"abs_y":1129}' className="text-zinc-700 group-hover:text-amber-400 transition-colors" icon="solar:cup-star-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1184,"w":835,"h":338,"abs_x":440,"abs_y":1227}' className="border-white/[0.08] bg-black border-b pt-5 pb-5" id="skills">
<div bis_size='{"x":0,"y":1204,"w":835,"h":297,"abs_x":440,"abs_y":1247}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":24,"y":1204,"w":787,"h":64,"abs_x":464,"abs_y":1247}' className="flex items-end justify-between mb-12">
<div bis_size='{"x":24,"y":1204,"w":277,"h":64,"abs_x":464,"abs_y":1247}' className="">
<span bis_size='{"x":24,"y":1204,"w":277,"h":16,"abs_x":464,"abs_y":1247}' className="font-mono text-indigo-500 text-xs tracking-widest uppercase block mb-3">Chapter 02</span>
<h3 bis_size='{"x":24,"y":1232,"w":277,"h":36,"abs_x":464,"abs_y":1275}' className="text-3xl text-white font-display font-medium tracking-tight">TECHNICAL ARSENAL</h3>
</div>
<div bis_size='{"x":333,"y":1259,"w":309,"h":1,"abs_x":773,"abs_y":1302}' className="hidden md:block h-px flex-1 bg-white/[0.08] mx-8 mb-2"></div>
<span bis_size='{"x":674,"y":1252,"w":136,"h":16,"abs_x":1114,"abs_y":1295}' className="text-xs text-zinc-600 tracking-widest uppercase hidden md:block">Skill Proficiency</span>
</div>
<div bis_size='{"x":24,"y":1316,"w":787,"h":185,"abs_x":464,"abs_y":1359}' className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08]">

<div bis_size='{"x":25,"y":1317,"w":195,"h":183,"abs_x":465,"abs_y":1360}' className="bg-black p-8 hover:bg-zinc-900/40 transition-colors group relative overflow-hidden">
<div bis_size='{"x":-170,"y":1317,"w":195,"h":2,"abs_x":270,"abs_y":1360}' className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
<iconify-icon bis_size='{"x":57,"y":1349,"w":32,"h":32,"abs_x":497,"abs_y":1392}' className="text-zinc-600 group-hover:text-white mb-5 transition-colors" icon="solar:videocamera-linear" width="32"></iconify-icon>
<h4 bis_size='{"x":57,"y":1401,"w":131,"h":20,"abs_x":497,"abs_y":1444}' className="text-white font-medium tracking-tight text-sm">Cinematography</h4>
<p bis_size='{"x":57,"y":1429,"w":131,"h":39,"abs_x":497,"abs_y":1472}' className="text-xs text-zinc-500 mt-2 leading-relaxed">Production, Lighting, Frame Architecture</p>
</div>

<div bis_size='{"x":221,"y":1317,"w":195,"h":183,"abs_x":661,"abs_y":1360}' className="bg-black p-8 hover:bg-zinc-900/40 transition-colors group relative overflow-hidden">
<div bis_size='{"x":26,"y":1317,"w":195,"h":2,"abs_x":466,"abs_y":1360}' className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
<iconify-icon bis_size='{"x":253,"y":1349,"w":32,"h":32,"abs_x":693,"abs_y":1392}' className="text-zinc-600 group-hover:text-white mb-5 transition-colors" icon="solar:magic-stick-3-linear" width="32"></iconify-icon>
<h4 bis_size='{"x":253,"y":1401,"w":131,"h":20,"abs_x":693,"abs_y":1444}' className="font-medium text-white tracking-tight text-sm">VFX &amp; Animation</h4>
<p bis_size='{"x":253,"y":1429,"w":131,"h":39,"abs_x":693,"abs_y":1472}' className="text-xs text-zinc-500 mt-2 leading-relaxed">Compositing, Rotoscoping, Cleanups</p>
</div>

<div bis_size='{"x":418,"y":1317,"w":195,"h":183,"abs_x":858,"abs_y":1360}' className="bg-black p-8 hover:bg-zinc-900/40 transition-colors group relative overflow-hidden">
<div bis_size='{"x":222,"y":1317,"w":195,"h":2,"abs_x":662,"abs_y":1360}' className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
<iconify-icon bis_size='{"x":450,"y":1349,"w":32,"h":32,"abs_x":890,"abs_y":1392}' className="text-zinc-600 group-hover:text-white mb-5 transition-colors" icon="solar:box-linear" width="32"></iconify-icon>
<h4 bis_size='{"x":450,"y":1401,"w":131,"h":20,"abs_x":890,"abs_y":1444}' className="text-white font-medium tracking-tight text-sm">3D Architecture</h4>
<p bis_size='{"x":450,"y":1429,"w":131,"h":39,"abs_x":890,"abs_y":1472}' className="text-xs text-zinc-500 mt-2 leading-relaxed">Maya, 3ds Max, Blender, Cinema 4D</p>
</div>

<div bis_size='{"x":614,"y":1317,"w":195,"h":183,"abs_x":1054,"abs_y":1360}' className="bg-black p-8 hover:bg-zinc-900/40 transition-colors group relative overflow-hidden">
<div bis_size='{"x":419,"y":1317,"w":195,"h":2,"abs_x":859,"abs_y":1360}' className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
<iconify-icon bis_size='{"x":646,"y":1349,"w":32,"h":32,"abs_x":1086,"abs_y":1392}' className="text-zinc-600 group-hover:text-white mb-5 transition-colors" icon="solar:cpu-bolt-linear" width="32"></iconify-icon>
<h4 bis_size='{"x":646,"y":1401,"w":131,"h":20,"abs_x":1086,"abs_y":1444}' className="text-white font-medium tracking-tight text-sm">Agentic AI</h4>
<p bis_size='{"x":646,"y":1429,"w":131,"h":39,"abs_x":1086,"abs_y":1472}' className="text-xs text-zinc-500 mt-2 leading-relaxed">LLM Strategy, Automation, Workflow</p>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1522,"w":835,"h":435,"abs_x":440,"abs_y":1565}' className="border-white/[0.08] bg-zinc-950/50 border-b pt-5 pb-5" id="work">
<div bis_size='{"x":0,"y":1542,"w":835,"h":394,"abs_x":440,"abs_y":1585}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":24,"y":1542,"w":787,"h":36,"abs_x":464,"abs_y":1585}' className="flex items-center justify-between mb-12">
<h3 bis_size='{"x":24,"y":1542,"w":261,"h":36,"abs_x":464,"abs_y":1585}' className="text-3xl text-white font-display font-medium tracking-tight">PROJECT ARCHIVES</h3>
<div bis_size='{"x":643,"y":1552,"w":167,"h":16,"abs_x":1083,"abs_y":1595}' className="flex items-center gap-3">
<span bis_size='{"x":643,"y":1552,"w":125,"h":16,"abs_x":1083,"abs_y":1595}' className="text-xs uppercase tracking-widest text-zinc-600">Selected Works</span>
<div bis_size='{"x":781,"y":1557,"w":30,"h":6,"abs_x":1221,"abs_y":1600}' className="flex gap-1.5">
<span bis_size='{"x":781,"y":1557,"w":6,"h":6,"abs_x":1221,"abs_y":1600}' className="w-1.5 h-1.5 rounded-full bg-red-500/80"></span>
<span bis_size='{"x":793,"y":1557,"w":6,"h":6,"abs_x":1233,"abs_y":1600}' className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></span>
<span bis_size='{"x":805,"y":1557,"w":6,"h":6,"abs_x":1245,"abs_y":1600}' className="w-1.5 h-1.5 rounded-full bg-green-500/80"></span>
</div>
</div>
</div>
<div bis_size='{"x":24,"y":1626,"w":787,"h":310,"abs_x":464,"abs_y":1669}' className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a bis_size='{"x":24,"y":1626,"w":246,"h":310,"abs_x":464,"abs_y":1669}' className="group relative block bg-black border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 rounded-sm overflow-hidden" href="https://drive.google.com/file/d/11suMWGdAPKIyWcx9IASxGERCRxDDzKBQ/view?usp=drive_link" target="_blank">
<div bis_size='{"x":25,"y":1627,"w":244,"h":137,"abs_x":465,"abs_y":1670}' className="aspect-video w-full overflow-hidden relative">
<div bis_size='{"x":25,"y":1627,"w":244,"h":137,"abs_x":465,"abs_y":1670}' className="absolute inset-0 bg-indigo-900/20 group-hover:bg-indigo-900/10 transition-colors z-10"></div>
<img alt="Showreel" bis_size='{"x":25,"y":1627,"w":244,"h":137,"abs_x":465,"abs_y":1670}' className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d13b6a8-4ba5-4c55-b2d9-d4c9acb609ca_800w.png"/>
<div bis_size='{"x":25,"y":1627,"w":244,"h":137,"abs_x":465,"abs_y":1670}' className="absolute inset-0 flex items-center justify-center z-20">
<div bis_size='{"x":125,"y":1674,"w":43,"h":43,"abs_x":565,"abs_y":1717}' className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-black/40 group-hover:bg-white/10 transition-all scale-90 group-hover:scale-100">
<iconify-icon bis_size='{"x":136,"y":1685,"w":21,"h":21,"abs_x":576,"abs_y":1728}' className="text-white" icon="solar:play-circle-linear" width="24"></iconify-icon>
</div>
</div>
<div bis_size='{"x":37,"y":1639,"w":81,"h":24,"abs_x":477,"abs_y":1682}' className="absolute top-3 left-3 z-20"><span bis_size='{"x":37,"y":1642,"w":81,"h":22,"abs_x":477,"abs_y":1685}' className="bg-black/80 backdrop-blur-md text-[10px] text-white uppercase tracking-widest px-2 py-1 border border-white/10 rounded-sm">Showreel</span></div>
</div>
<div bis_size='{"x":25,"y":1764,"w":244,"h":171,"abs_x":465,"abs_y":1807}' className="p-5">
<h4 bis_size='{"x":45,"y":1784,"w":204,"h":24,"abs_x":485,"abs_y":1827}' className="text-base text-white font-medium mb-1 group-hover:text-indigo-300 transition-colors tracking-tight">Motion Graphics</h4>
<p bis_size='{"x":45,"y":1812,"w":204,"h":58,"abs_x":485,"abs_y":1855}' className="text-xs text-zinc-500 leading-relaxed mb-4">High-fidelity motion design, kinetic typography, and visual effects composition.</p>
<div bis_size='{"x":45,"y":1887,"w":204,"h":29,"abs_x":485,"abs_y":1930}' className="flex items-center justify-between border-t border-white/[0.06] pt-3">
<span bis_size='{"x":45,"y":1900,"w":68,"h":15,"abs_x":485,"abs_y":1943}' className="text-[10px] text-zinc-600 uppercase tracking-widest">Video .MP4</span>
<iconify-icon bis_size='{"x":233,"y":1900,"w":16,"h":16,"abs_x":673,"abs_y":1943}' className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</a>

<a bis_size='{"x":294,"y":1626,"w":246,"h":310,"abs_x":734,"abs_y":1669}' className="group relative block bg-black border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 rounded-sm overflow-hidden" href="https://drive.google.com/file/d/1utFo9fLZfmD9l_BnTQnz4q86BOfzxvj7/view?usp=drive_link" target="_blank">
<div bis_size='{"x":295,"y":1627,"w":244,"h":137,"abs_x":735,"abs_y":1670}' className="aspect-video w-full overflow-hidden relative">
<div bis_size='{"x":295,"y":1627,"w":244,"h":137,"abs_x":735,"abs_y":1670}' className="absolute inset-0 bg-emerald-900/20 group-hover:bg-emerald-900/10 transition-colors z-10"></div>
<img alt="Generative AI" bis_size='{"x":295,"y":1627,"w":244,"h":137,"abs_x":735,"abs_y":1670}' className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9f60384e-f609-434c-85ad-4f7449696177_800w.png"/>
<div bis_size='{"x":295,"y":1627,"w":244,"h":137,"abs_x":735,"abs_y":1670}' className="absolute inset-0 flex items-center justify-center z-20">
<div bis_size='{"x":395,"y":1674,"w":43,"h":43,"abs_x":835,"abs_y":1717}' className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-black/40 group-hover:bg-white/10 transition-all scale-90 group-hover:scale-100">
<iconify-icon bis_size='{"x":406,"y":1685,"w":21,"h":21,"abs_x":846,"abs_y":1728}' className="text-white" icon="solar:play-circle-linear" width="24"></iconify-icon>
</div>
</div>
<div bis_size='{"x":307,"y":1639,"w":104,"h":24,"abs_x":747,"abs_y":1682}' className="absolute top-3 left-3 z-20"><span bis_size='{"x":307,"y":1642,"w":104,"h":22,"abs_x":747,"abs_y":1685}' className="bg-black/80 backdrop-blur-md text-[10px] text-white uppercase tracking-widest px-2 py-1 border border-white/10 rounded-sm">Generative AI</span></div>
</div>
<div bis_size='{"x":295,"y":1764,"w":244,"h":171,"abs_x":735,"abs_y":1807}' className="p-5">
<h4 bis_size='{"x":315,"y":1784,"w":204,"h":24,"abs_x":755,"abs_y":1827}' className="text-base text-white font-medium mb-1 group-hover:text-emerald-300 transition-colors tracking-tight">AI Video Synthesis</h4>
<p bis_size='{"x":315,"y":1812,"w":204,"h":58,"abs_x":755,"abs_y":1855}' className="text-xs text-zinc-500 leading-relaxed mb-4">Next-gen storytelling using stable diffusion and agentic video generation pipelines.</p>
<div bis_size='{"x":315,"y":1887,"w":204,"h":29,"abs_x":755,"abs_y":1930}' className="flex items-center justify-between border-t border-white/[0.06] pt-3">
<span bis_size='{"x":315,"y":1900,"w":68,"h":15,"abs_x":755,"abs_y":1943}' className="text-[10px] text-zinc-600 uppercase tracking-widest">Video .MP4</span>
<iconify-icon bis_size='{"x":503,"y":1900,"w":16,"h":16,"abs_x":943,"abs_y":1943}' className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</a>

<a bis_size='{"x":564,"y":1626,"w":246,"h":310,"abs_x":1004,"abs_y":1669}' className="group relative block bg-black border border-white/[0.08] hover:border-amber-500/30 transition-all duration-300 rounded-sm overflow-hidden" href="https://drive.google.com/file/d/1NLHV9nOokHJ_x1gtV1WDCAziBGyzDxIo/view?usp=drive_link" target="_blank">
<div bis_size='{"x":565,"y":1627,"w":244,"h":137,"abs_x":1005,"abs_y":1670}' className="aspect-video w-full overflow-hidden relative">
<div bis_size='{"x":565,"y":1627,"w":244,"h":137,"abs_x":1005,"abs_y":1670}' className="absolute inset-0 bg-amber-900/20 group-hover:bg-amber-900/10 transition-colors z-10"></div>
<img alt="Commercial" bis_size='{"x":565,"y":1627,"w":244,"h":137,"abs_x":1005,"abs_y":1670}' className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f8dd396-a502-4722-ba9b-19f6c580501a_800w.png"/>
<div bis_size='{"x":565,"y":1627,"w":244,"h":137,"abs_x":1005,"abs_y":1670}' className="absolute inset-0 flex items-center justify-center z-20">
<div bis_size='{"x":666,"y":1674,"w":43,"h":43,"abs_x":1106,"abs_y":1717}' className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-black/40 group-hover:bg-white/10 transition-all scale-90 group-hover:scale-100">
<iconify-icon bis_size='{"x":677,"y":1685,"w":21,"h":21,"abs_x":1117,"abs_y":1728}' className="text-white" icon="solar:play-circle-linear" width="24"></iconify-icon>
</div>
</div>
<div bis_size='{"x":577,"y":1639,"w":96,"h":24,"abs_x":1017,"abs_y":1682}' className="absolute top-3 left-3 z-20"><span bis_size='{"x":577,"y":1642,"w":96,"h":22,"abs_x":1017,"abs_y":1685}' className="bg-black/80 backdrop-blur-md text-[10px] text-white uppercase tracking-widest px-2 py-1 border border-white/10 rounded-sm">Commercial</span></div>
</div>
<div bis_size='{"x":565,"y":1764,"w":244,"h":171,"abs_x":1005,"abs_y":1807}' className="p-5">
<h4 bis_size='{"x":585,"y":1784,"w":204,"h":24,"abs_x":1025,"abs_y":1827}' className="text-base text-white font-medium mb-1 group-hover:text-amber-300 transition-colors tracking-tight">Advertisement</h4>
<p bis_size='{"x":585,"y":1812,"w":204,"h":58,"abs_x":1025,"abs_y":1855}' className="text-xs text-zinc-500 leading-relaxed mb-4">Strategic commercial production focused on brand narrative and conversion.</p>
<div bis_size='{"x":585,"y":1887,"w":204,"h":29,"abs_x":1025,"abs_y":1930}' className="flex items-center justify-between border-t border-white/[0.06] pt-3">
<span bis_size='{"x":585,"y":1900,"w":69,"h":15,"abs_x":1025,"abs_y":1943}' className="text-[10px] text-zinc-600 uppercase tracking-widest">Video .MOV</span>
<iconify-icon bis_size='{"x":773,"y":1900,"w":16,"h":16,"abs_x":1213,"abs_y":1943}' className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1958,"w":835,"h":1441,"abs_x":440,"abs_y":2001}' className="border-white/[0.08] overflow-hidden bg-black border-b pt-5 pb-5" id="media">
<div bis_size='{"x":0,"y":1978,"w":835,"h":1400,"abs_x":440,"abs_y":2021}' className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div bis_size='{"x":24,"y":1978,"w":787,"h":64,"abs_x":464,"abs_y":2021}' className="flex items-end justify-between mb-16">
<div bis_size='{"x":24,"y":1978,"w":363,"h":64,"abs_x":464,"abs_y":2021}' className="">
<span bis_size='{"x":24,"y":1978,"w":363,"h":16,"abs_x":464,"abs_y":2021}' className="font-mono text-indigo-500 text-xs tracking-widest uppercase block mb-3">Chapter 04</span>
<h3 bis_size='{"x":24,"y":2006,"w":363,"h":36,"abs_x":464,"abs_y":2049}' className="text-3xl text-white font-display font-medium tracking-tight">DESIGN &amp; MEDIA<br bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="md:hidden"/> COVERAGE</h3>
</div>
<div bis_size='{"x":419,"y":2033,"w":229,"h":1,"abs_x":859,"abs_y":2076}' className="hidden md:block h-px flex-1 bg-white/[0.08] mx-8 mb-2"></div>
<span bis_size='{"x":681,"y":2026,"w":129,"h":16,"abs_x":1121,"abs_y":2069}' className="text-xs text-zinc-600 tracking-widest uppercase hidden md:block">Recognition Log</span>
</div>

<div bis_size='{"x":24,"y":2106,"w":787,"h":437,"abs_x":464,"abs_y":2149}' className="mb-12">
<div bis_size='{"x":24,"y":2106,"w":787,"h":16,"abs_x":464,"abs_y":2149}' className="flex items-center gap-3 mb-6">
<iconify-icon bis_size='{"x":24,"y":2106,"w":16,"h":16,"abs_x":464,"abs_y":2149}' className="text-indigo-500" icon="solar:layers-linear" width="16"></iconify-icon>
<span bis_size='{"x":52,"y":2106,"w":226,"h":16,"abs_x":492,"abs_y":2149}' className="uppercase text-xs text-white tracking-widest font-display">Social &amp; Campaign Design Work</span>
<div bis_size='{"x":298,"y":2113,"w":512,"h":1,"abs_x":738,"abs_y":2156}' className="flex-1 h-px bg-white/[0.08] ml-2"></div>
</div>
<div bis_size='{"x":24,"y":2146,"w":787,"h":397,"abs_x":464,"abs_y":2189}' className="grid grid-cols-1 md:grid-cols-12 gap-4">

<div bis_size='{"x":24,"y":2146,"w":318,"h":397,"abs_x":464,"abs_y":2189}' className="md:col-span-5 relative bg-zinc-950 border border-white/[0.08] hover:border-indigo-500/30 transition-colors duration-300 group noise-bg overflow-hidden cursor-zoom-in rounded-sm" onclick="openLb(this)">
<div bis_size='{"x":25,"y":2147,"w":316,"h":237,"abs_x":465,"abs_y":2190}' className="relative z-10 overflow-hidden" style={{aspectRatio: '4/3'}}>
<div bis_size='{"x":25,"y":2147,"w":316,"h":237,"abs_x":465,"abs_y":2190}' className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent z-20 pointer-events-none"></div>
<img alt="Truecaller Campaign" bis_size='{"x":25,"y":2147,"w":316,"h":237,"abs_x":465,"abs_y":2190}' className="object-top group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-70 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e17b3574-ce68-4649-ae2d-f2a56ebe7eeb_800w.png"/>
<div bis_size='{"x":37,"y":2159,"w":0,"h":0,"abs_x":477,"abs_y":2202}' className="absolute top-3 left-3 flex gap-2 z-30">
</div>
</div>
<div bis_size='{"x":25,"y":2384,"w":316,"h":138,"abs_x":465,"abs_y":2427}' className="relative z-10 p-6">
<span bis_size='{"x":49,"y":2408,"w":268,"h":15,"abs_x":489,"abs_y":2451}' className="text-[10px] uppercase tracking-widest text-indigo-400 block mb-1">Truecaller India</span>
<h4 bis_size='{"x":49,"y":2427,"w":268,"h":24,"abs_x":489,"abs_y":2470}' className="text-base text-white font-medium tracking-tight mb-2">Jam the Scam Returns — Diwali</h4>
<p bis_size='{"x":49,"y":2459,"w":268,"h":39,"abs_x":489,"abs_y":2502}' className="text-xs text-zinc-500 leading-relaxed font-light">Full campaign visual direction featuring Jesse, Johnny &amp; Jamie Lever. Reached 20M+ users.</p>
</div>
</div>

<div bis_size='{"x":358,"y":2146,"w":452,"h":397,"abs_x":798,"abs_y":2189}' className="md:col-span-7 grid grid-cols-2 gap-4">

<div bis_size='{"x":358,"y":2146,"w":218,"h":190,"abs_x":798,"abs_y":2189}' className="relative bg-zinc-950 border border-white/[0.08] hover:border-violet-500/30 transition-colors group noise-bg overflow-hidden cursor-zoom-in rounded-sm" onclick="openLb(this)">
<div bis_size='{"x":359,"y":2147,"w":216,"h":121,"abs_x":799,"abs_y":2190}' className="relative z-10 overflow-hidden aspect-video">
<div bis_size='{"x":359,"y":2147,"w":216,"h":121,"abs_x":799,"abs_y":2190}' className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-20 pointer-events-none"></div>
<img bis_size='{"x":359,"y":2147,"w":216,"h":121,"abs_x":799,"abs_y":2190}' className="object-top group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da698319-f420-43f9-b8c0-d3e40535d95d_800w.png"/>
</div>
<div bis_size='{"x":359,"y":2269,"w":216,"h":67,"abs_x":799,"abs_y":2312}' className="relative z-10 p-4">
<span bis_size='{"x":375,"y":2285,"w":184,"h":15,"abs_x":815,"abs_y":2328}' className="text-[10px] uppercase tracking-widest text-violet-400 block mb-1">Truecaller</span>
<h4 bis_size='{"x":375,"y":2304,"w":184,"h":16,"abs_x":815,"abs_y":2347}' className="text-xs text-white font-medium tracking-tight">Social Content Strategy</h4>
</div>
</div>

<div bis_size='{"x":592,"y":2146,"w":218,"h":190,"abs_x":1032,"abs_y":2189}' className="relative bg-zinc-950 border border-white/[0.08] hover:border-rose-500/30 transition-colors group noise-bg overflow-hidden cursor-zoom-in rounded-sm" onclick="openLb(this)">
<div bis_size='{"x":593,"y":2147,"w":216,"h":121,"abs_x":1033,"abs_y":2190}' className="relative z-10 overflow-hidden aspect-video">
<div bis_size='{"x":593,"y":2147,"w":216,"h":121,"abs_x":1033,"abs_y":2190}' className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-20 pointer-events-none"></div>
<img bis_size='{"x":593,"y":2147,"w":216,"h":121,"abs_x":1033,"abs_y":2190}' className="object-top group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-60 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/616e2b81-37da-4b7a-9941-89a23cbf790a_800w.png"/>
</div>
<div bis_size='{"x":593,"y":2269,"w":216,"h":67,"abs_x":1033,"abs_y":2312}' className="relative z-10 p-4">
<span bis_size='{"x":609,"y":2285,"w":184,"h":15,"abs_x":1049,"abs_y":2328}' className="text-[10px] uppercase tracking-widest text-rose-400 block mb-1">Tinder India</span>
<h4 bis_size='{"x":609,"y":2304,"w":184,"h":16,"abs_x":1049,"abs_y":2347}' className="text-xs text-white font-medium tracking-tight">App Installs &amp; Motion Ads</h4>
</div>
</div>

<div bis_size='{"x":358,"y":2353,"w":218,"h":190,"abs_x":798,"abs_y":2396}' className="relative bg-zinc-950 border border-white/[0.08] hover:border-pink-500/30 transition-colors group noise-bg overflow-hidden cursor-zoom-in rounded-sm" onclick="openLb(this)">
<div bis_size='{"x":359,"y":2354,"w":216,"h":121,"abs_x":799,"abs_y":2397}' className="relative z-10 overflow-hidden aspect-video">
<div bis_size='{"x":359,"y":2354,"w":216,"h":121,"abs_x":799,"abs_y":2397}' className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-20 pointer-events-none"></div>
<img bis_size='{"x":359,"y":2354,"w":216,"h":121,"abs_x":799,"abs_y":2397}' className="object-top group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-60 w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/068ee89a-ab29-43df-aed1-2d5f9bc0acda_800w.png"/>
</div>
<div bis_size='{"x":359,"y":2475,"w":216,"h":67,"abs_x":799,"abs_y":2518}' className="relative z-10 p-4">
<span bis_size='{"x":375,"y":2491,"w":184,"h":15,"abs_x":815,"abs_y":2534}' className="text-[10px] uppercase tracking-widest text-pink-400 block mb-1">Tinder India</span>
<h4 bis_size='{"x":375,"y":2510,"w":184,"h":16,"abs_x":815,"abs_y":2553}' className="text-xs text-white font-medium tracking-tight">Super Like Feature Ad</h4>
</div>
</div>

<div bis_size='{"x":592,"y":2353,"w":218,"h":190,"abs_x":1032,"abs_y":2396}' className="relative bg-zinc-950 border border-white/[0.08] hover:border-amber-500/30 transition-colors group noise-bg overflow-hidden cursor-zoom-in rounded-sm" onclick="openLb(this)">
<div bis_size='{"x":593,"y":2354,"w":216,"h":121,"abs_x":1033,"abs_y":2397}' className="relative z-10 overflow-hidden aspect-video">
<div bis_size='{"x":593,"y":2354,"w":216,"h":121,"abs_x":1033,"abs_y":2397}' className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-20 pointer-events-none"></div>
<img bis_size='{"x":593,"y":2354,"w":216,"h":121,"abs_x":1033,"abs_y":2397}' className="object-top group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724e2e75-9fad-4d1b-b9df-b5550a881399_800w.png"/>
</div>
<div bis_size='{"x":593,"y":2475,"w":216,"h":67,"abs_x":1033,"abs_y":2518}' className="relative z-10 p-4">
<span bis_size='{"x":609,"y":2491,"w":184,"h":15,"abs_x":1049,"abs_y":2534}' className="text-[10px] uppercase tracking-widest text-amber-400 block mb-1">PVR Cinemas</span>
<h4 bis_size='{"x":609,"y":2510,"w":184,"h":16,"abs_x":1049,"abs_y":2553}' className="text-xs text-white font-medium tracking-tight">Original Concepts</h4>
</div>
</div>
</div>
</div>
</div>

<div bis_size='{"x":24,"y":2591,"w":787,"h":697,"abs_x":464,"abs_y":2634}' className="grid grid-cols-1 md:grid-cols-12 gap-4 gap-x-4 gap-y-4">

<div bis_size='{"x":24,"y":2591,"w":251,"h":697,"abs_x":464,"abs_y":2634}' className="md:col-span-4 border border-white/[0.08] bg-zinc-950 p-8 relative overflow-hidden noise-bg group rounded-sm">
<div bis_size='{"x":25,"y":2592,"w":249,"h":695,"abs_x":465,"abs_y":2635}' className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-600/5 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0" contenteditable="true"></div>
<div bis_size='{"x":57,"y":2624,"w":185,"h":20,"abs_x":497,"abs_y":2667}' className="flex items-center gap-2 mb-8">
<iconify-icon bis_size='{"x":57,"y":2624,"w":20,"h":20,"abs_x":497,"abs_y":2667}' className="text-amber-500" icon="solar:cup-star-linear" width="20"></iconify-icon>
<span bis_size='{"x":85,"y":2626,"w":151,"h":16,"abs_x":525,"abs_y":2669}' className="text-xs uppercase tracking-widest text-white font-display">Award &amp; Recognition</span>
</div>
<div bis_size='{"x":57,"y":2676,"w":185,"h":101,"abs_x":497,"abs_y":2719}' className="flex items-start gap-4 mb-7">
<div bis_size='{"x":57,"y":2676,"w":48,"h":48,"abs_x":497,"abs_y":2719}' className="flex-shrink-0 w-12 h-12 border border-amber-500/30 bg-amber-500/5 flex items-center justify-center rounded-sm">
<iconify-icon bis_size='{"x":69,"y":2688,"w":24,"h":24,"abs_x":509,"abs_y":2731}' className="text-amber-400" icon="solar:medal-star-linear" width="24"></iconify-icon>
</div>
<div bis_size='{"x":121,"y":2676,"w":121,"h":101,"abs_x":561,"abs_y":2719}'>
<span bis_size='{"x":121,"y":2676,"w":121,"h":30,"abs_x":561,"abs_y":2719}' className="text-shimmer text-3xl font-display font-medium leading-none block mb-2">GOLD</span>
<div bis_size='{"x":121,"y":2714,"w":121,"h":20,"abs_x":561,"abs_y":2757}' className="text-sm text-white font-medium">Exchange4Media</div>
<div bis_size='{"x":121,"y":2738,"w":121,"h":39,"abs_x":561,"abs_y":2781}' className="text-xs text-zinc-500 mt-1 leading-relaxed">Best Integrated Campaign — 2023</div>
</div>
</div>
<p bis_size='{"x":57,"y":2805,"w":185,"h":118,"abs_x":497,"abs_y":2848}' className="text-xs text-zinc-600 italic leading-relaxed border-t border-white/[0.08] pt-5 mb-5 font-light">
                        "Truecaller's Diwali anti-scam campaign swept the awards for its integrated reach across social, OTT, and in-app placements."
                    </p>
<div bis_size='{"x":57,"y":2944,"w":185,"h":38,"abs_x":497,"abs_y":2987}' className="space-y-2">
<a bis_size='{"x":57,"y":2944,"w":185,"h":15,"abs_x":497,"abs_y":2987}' className="flex items-center gap-2 text-[10px] text-zinc-500 hover:text-white transition-colors" href="https://youtu.be/js8vBEtHtGk" target="_blank">
<iconify-icon bis_size='{"x":57,"y":2945,"w":12,"h":12,"abs_x":497,"abs_y":2988}' className="text-red-500" icon="solar:play-circle-linear" width="12"></iconify-icon>
<span bis_size='{"x":77,"y":2944,"w":104,"h":15,"abs_x":517,"abs_y":2987}'>youtu.be/js8vBEtHtGk</span>
</a>
<a bis_size='{"x":57,"y":2967,"w":185,"h":15,"abs_x":497,"abs_y":3010}' className="flex items-center gap-2 text-[10px] text-zinc-500 hover:text-white transition-colors" href="https://www.instagram.com/truecaller.india/" target="_blank">
<iconify-icon bis_size='{"x":57,"y":2968,"w":12,"h":12,"abs_x":497,"abs_y":3011}' className="text-pink-500" icon="solar:camera-linear" width="12"></iconify-icon>
<span bis_size='{"x":77,"y":2967,"w":143,"h":15,"abs_x":517,"abs_y":3010}'>instagram.com/truecaller.india</span>
</a>
</div>
</div>

<div bis_size='{"x":291,"y":2591,"w":519,"h":697,"abs_x":731,"abs_y":2634}' className="md:col-span-8 border border-white/[0.08] bg-zinc-950 relative overflow-hidden noise-bg rounded-sm">
<div bis_size='{"x":292,"y":2592,"w":517,"h":59,"abs_x":732,"abs_y":2635}' className="px-8 py-5 border-b border-white/[0.08] flex items-center gap-2">
<iconify-icon bis_size='{"x":324,"y":2612,"w":18,"h":18,"abs_x":764,"abs_y":2655}' className="text-indigo-500" icon="solar:document-text-linear" width="18"></iconify-icon>
<span bis_size='{"x":350,"y":2613,"w":114,"h":16,"abs_x":790,"abs_y":2656}' className="text-xs uppercase tracking-widest text-white font-display">Media Coverage</span>
</div>
<div bis_size='{"x":292,"y":2651,"w":517,"h":636,"abs_x":732,"abs_y":2694}' className="divide-y divide-white/[0.08]">

<div bis_size='{"x":292,"y":2651,"w":517,"h":250,"abs_x":732,"abs_y":2694}' className="flex flex-col sm:flex-row gap-6 px-8 py-6 hover:bg-white/[0.02] transition-colors group cursor-pointer" onclick="openLb(this)">
<div bis_size='{"x":324,"y":2675,"w":128,"h":202,"abs_x":764,"abs_y":2718}' className="w-full sm:w-32 aspect-video flex-shrink-0 rounded-sm overflow-hidden border border-white/10 relative">
<div bis_label="style" bis_size='{"x":325,"y":2676,"w":126,"h":200,"abs_x":765,"abs_y":2719}' className="group-hover:bg-transparent transition-colors bg-center z-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0ffba9c-0883-4531-9bfd-702c844f35c2_320w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0 cursor-pointer" onclick="window.location.href='https://drive.google.com/file/d/1WWpcTTkSxRvRe7J0y-rWHEtOO7SHtIBO/view?usp=sharing'" role="button" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0ffba9c-0883-4531-9bfd-702c844f35c2_320w.jpg\')'}}></div>
<img alt="News 1" bis_size='{"x":325,"y":2676,"w":126,"h":200,"abs_x":765,"abs_y":2719}' className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724e2e75-9fad-4d1b-b9df-b5550a881399_800w.png"/>
</div>
<div bis_size='{"x":476,"y":2675,"w":301,"h":202,"abs_x":916,"abs_y":2718}' className="flex-1">
<h5 bis_size='{"x":476,"y":2675,"w":301,"h":38,"abs_x":916,"abs_y":2718}' className="leading-snug text-sm font-medium text-white">Badakkara Campaign — Guerrilla Visual Strategy &amp; Campaign Concept</h5>
<p bis_size='{"x":476,"y":2722,"w":301,"h":156,"abs_x":916,"abs_y":2765}' className="leading-relaxed text-xs font-light text-zinc-500 mt-2">Developed a viral guerrilla marketing campaign by rebranding Vadakara as “Badakara,” installing railway-style signboards and teaser hoardings across the city to spark curiosity. The concept revealed the launch of one of the region’s largest electronics and home appliance showrooms, gaining massive public attention, influencer-driven reach, and unexpected visibility from local authorities.</p>
</div>
</div>

<div bis_size='{"x":292,"y":2902,"w":517,"h":193,"abs_x":732,"abs_y":2945}' className="flex flex-col sm:flex-row gap-6 px-8 py-6 hover:bg-white/[0.02] transition-colors group cursor-pointer" onclick="openLb(this)">
<div bis_size='{"x":324,"y":2927,"w":128,"h":144,"abs_x":764,"abs_y":2970}' className="w-full sm:w-32 aspect-video flex-shrink-0 rounded-sm overflow-hidden border border-white/10 relative">
<div bis_label="style" bis_size='{"x":325,"y":2928,"w":126,"h":142,"abs_x":765,"abs_y":2971}' className="group-hover:bg-transparent transition-colors bg-indigo-500/10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41984aae-084d-460c-bb4b-819d6196438b_320w.jpg)] bg-cover z-10 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://drive.google.com/file/d/1l-pvv2Od_bul6QRjJ7Jp-mdjbfaxmTZt/view?usp=sharing'" role="button" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41984aae-084d-460c-bb4b-819d6196438b_320w.jpg\')'}}></div>
<img alt="News 2" bis_size='{"x":325,"y":2928,"w":126,"h":142,"abs_x":765,"abs_y":2971}' className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/068ee89a-ab29-43df-aed1-2d5f9bc0acda_800w.png"/>
</div>
<div bis_size='{"x":476,"y":2927,"w":301,"h":144,"abs_x":916,"abs_y":2970}' className="flex-1">
<h5 bis_size='{"x":476,"y":2927,"w":301,"h":38,"abs_x":916,"abs_y":2970}' className="leading-snug text-sm font-medium text-white">Record-Breaking Digital Penetration — Kerala MP Election Campaign</h5>
<p bis_size='{"x":476,"y":2973,"w":301,"h":97,"abs_x":916,"abs_y":3016}' className="leading-relaxed text-xs font-light text-zinc-500 mt-2">Led content creation, digital strategy, and campaign planning for a Kerala MP election, achieving exceptional online reach, strong audience engagement, and large-scale voter mobilisation across platforms.</p>
</div>
</div>

<div bis_size='{"x":292,"y":3095,"w":517,"h":193,"abs_x":732,"abs_y":3138}' className="flex flex-col sm:flex-row gap-6 px-8 py-6 hover:bg-white/[0.02] transition-colors group cursor-pointer" onclick="openLb(this)">
<div bis_size='{"x":324,"y":3120,"w":128,"h":144,"abs_x":764,"abs_y":3163}' className="w-full sm:w-32 aspect-video flex-shrink-0 rounded-sm overflow-hidden border border-white/10 relative">
<div bis_label="style" bis_size='{"x":325,"y":3121,"w":126,"h":142,"abs_x":765,"abs_y":3164}' className="group-hover:bg-transparent transition-colors z-10 bg-indigo-500/10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7d13cf2-1d88-45dd-a08b-714cdad9cfb0_320w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 cursor-pointer" onclick="window.location.href='https://drive.google.com/file/d/1-5YNtBG454j02CO5cQ0lVayVF1tbU_C5/view?usp=sharing'" role="button" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7d13cf2-1d88-45dd-a08b-714cdad9cfb0_320w.png\')'}}></div>
<img alt="News 3" bis_size='{"x":325,"y":3121,"w":126,"h":142,"abs_x":765,"abs_y":3164}' className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/616e2b81-37da-4b7a-9941-89a23cbf790a_800w.png"/>
</div>
<div bis_size='{"x":476,"y":3120,"w":301,"h":144,"abs_x":916,"abs_y":3163}' className="flex-1">
<h5 bis_size='{"x":476,"y":3120,"w":301,"h":38,"abs_x":916,"abs_y":3163}' className="leading-snug text-sm font-medium text-white">AR Family Wedding Centre — Augmented Reality Grand Inauguration</h5>
<p bis_size='{"x":476,"y":3166,"w":301,"h":97,"abs_x":916,"abs_y":3209}' className="leading-relaxed text-xs font-light text-zinc-500 mt-2">Developed and implemented the augmented reality (AR) inauguration experience while directing the complete AV production and media strategy, resulting in strong regional media coverage and audience engagement.</p>
</div>
</div>
</div>
</div>
</div>

<div bis_size='{"x":24,"y":3321,"w":787,"h":58,"abs_x":464,"abs_y":3364}' className="mt-8 border border-white/[0.08] py-4 overflow-hidden relative bg-zinc-950 rounded-sm">
<div bis_size='{"x":25,"y":3322,"w":64,"h":56,"abs_x":465,"abs_y":3365}' className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
<div bis_size='{"x":746,"y":3322,"w":64,"h":56,"abs_x":1186,"abs_y":3365}' className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>
<div bis_size='{"x":25,"y":3338,"w":785,"h":24,"abs_x":465,"abs_y":3381}' className="ticker-track flex gap-8 items-center whitespace-nowrap">
<span bis_size='{"x":25,"y":3342,"w":97,"h":15,"abs_x":465,"abs_y":3385}' className="text-[10px] text-zinc-600 uppercase tracking-widest">Brand Identity</span>
<span bis_size='{"x":154,"y":3338,"w":12,"h":24,"abs_x":594,"abs_y":3381}' className="text-indigo-500">✦</span>
<span bis_size='{"x":199,"y":3342,"w":109,"h":15,"abs_x":639,"abs_y":3385}' className="text-[10px] text-zinc-600 uppercase tracking-widest">Motion Graphics</span>
<span bis_size='{"x":340,"y":3338,"w":12,"h":24,"abs_x":780,"abs_y":3381}' className="text-indigo-500">✦</span>
<span bis_size='{"x":385,"y":3342,"w":108,"h":15,"abs_x":825,"abs_y":3385}' className="text-[10px] text-zinc-600 uppercase tracking-widest">VFX Composition</span>
<span bis_size='{"x":526,"y":3338,"w":12,"h":24,"abs_x":966,"abs_y":3381}' className="text-indigo-500">✦</span>
<span bis_size='{"x":570,"y":3342,"w":108,"h":15,"abs_x":1010,"abs_y":3385}' className="text-[10px] text-zinc-600 uppercase tracking-widest">Campaign Design</span>
<span bis_size='{"x":711,"y":3338,"w":12,"h":24,"abs_x":1151,"abs_y":3381}' className="text-indigo-500">✦</span>
<span bis_size='{"x":756,"y":3342,"w":83,"h":15,"abs_x":1196,"abs_y":3385}' className="text-[10px] text-zinc-600 uppercase tracking-widest">Social Media</span>
<span bis_size='{"x":871,"y":3338,"w":12,"h":24,"abs_x":1311,"abs_y":3381}' className="text-indigo-500">✦</span>
<span bis_size='{"x":916,"y":3342,"w":85,"h":15,"abs_x":1356,"abs_y":3385}' className="text-[10px] text-zinc-600 uppercase tracking-widest">3D Rendering</span>
<span bis_size='{"x":1033,"y":3338,"w":12,"h":24,"abs_x":1473,"abs_y":3381}' className="text-indigo-500">✦</span>
<span bis_size='{"x":1078,"y":3342,"w":113,"h":15,"abs_x":1518,"abs_y":3385}' className="text-[10px] text-zinc-600 uppercase tracking-widest">AI Generative Art</span>
<span bis_size='{"x":1223,"y":3338,"w":12,"h":24,"abs_x":1663,"abs_y":3381}' className="text-indigo-500">✦</span>
<span bis_size='{"x":1268,"y":3342,"w":97,"h":15,"abs_x":1708,"abs_y":3385}' className="text-[10px] text-zinc-600 uppercase tracking-widest">Brand Identity</span>
<span bis_size='{"x":1397,"y":3338,"w":12,"h":24,"abs_x":1837,"abs_y":3381}' className="text-indigo-500">✦</span>
<span bis_size='{"x":1442,"y":3342,"w":109,"h":15,"abs_x":1882,"abs_y":3385}' className="text-[10px] text-zinc-600 uppercase tracking-widest">Motion Graphics</span>
<span bis_size='{"x":1584,"y":3338,"w":12,"h":24,"abs_x":2024,"abs_y":3381}' className="text-indigo-500">✦</span>
<span bis_size='{"x":1628,"y":3342,"w":108,"h":15,"abs_x":2068,"abs_y":3385}' className="text-[10px] text-zinc-600 uppercase tracking-widest">VFX Composition</span>
<span bis_size='{"x":1769,"y":3338,"w":12,"h":24,"abs_x":2209,"abs_y":3381}' className="text-indigo-500">✦</span>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3400,"w":835,"h":558,"abs_x":440,"abs_y":3443}' className="border-white/[0.08] bg-black border-b pt-5 pb-5 relative">
<div bis_size='{"x":0,"y":3420,"w":835,"h":517,"abs_x":440,"abs_y":3463}' className="max-w-4xl mx-auto px-6">
<div bis_size='{"x":24,"y":3420,"w":787,"h":64,"abs_x":464,"abs_y":3463}' className="text-center mb-16">
<span bis_size='{"x":24,"y":3420,"w":787,"h":16,"abs_x":464,"abs_y":3463}' className="font-mono text-indigo-500 text-xs tracking-widest uppercase block mb-3">History Log</span>
<h3 bis_size='{"x":24,"y":3448,"w":787,"h":36,"abs_x":464,"abs_y":3491}' className="text-3xl text-white font-display font-medium tracking-tight">OPERATIONAL RECORD</h3>
</div>
<div bis_size='{"x":24,"y":3548,"w":787,"h":389,"abs_x":464,"abs_y":3591}' className="relative pl-8 border-l border-white/[0.08] space-y-12">

<div bis_size='{"x":57,"y":3548,"w":754,"h":98,"abs_x":497,"abs_y":3591}' className="relative group">
<div bis_size='{"x":20,"y":3554,"w":16,"h":16,"abs_x":460,"abs_y":3597}' className="absolute -left-[36.5px] top-1.5 w-4 h-4 bg-black border border-indigo-500 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.5)]"></div>
<div bis_size='{"x":57,"y":3548,"w":754,"h":24,"abs_x":497,"abs_y":3591}' className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
<h4 bis_size='{"x":57,"y":3548,"w":192,"h":24,"abs_x":497,"abs_y":3591}' className="text-base text-white font-medium group-hover:text-indigo-300 transition-colors">Director &amp; Board Member</h4>
<span bis_size='{"x":257,"y":3551,"w":60,"h":21,"abs_x":697,"abs_y":3594}' className="text-[10px] text-indigo-400 font-mono bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">Present</span>
</div>
<div bis_size='{"x":57,"y":3576,"w":754,"h":16,"abs_x":497,"abs_y":3619}' className="text-xs text-zinc-500 mb-2 font-medium uppercase tracking-wide">Magantir</div>
<p bis_size='{"x":57,"y":3600,"w":576,"h":45,"abs_x":497,"abs_y":3643}' className="text-sm text-zinc-400 leading-relaxed max-w-xl font-light">AI Architect &amp; Executive Director. Leading multi-agent architecture strategies for Film, Gaming, and Automotive sectors.</p>
</div>

<div bis_size='{"x":57,"y":3694,"w":754,"h":97,"abs_x":497,"abs_y":3737}' className="relative group">
<div bis_size='{"x":20,"y":3700,"w":16,"h":16,"abs_x":460,"abs_y":3743}' className="absolute -left-[36.5px] top-1.5 w-4 h-4 bg-black border border-zinc-700 rounded-full group-hover:border-white transition-colors"></div>
<div bis_size='{"x":57,"y":3694,"w":754,"h":24,"abs_x":497,"abs_y":3737}' className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
<h4 bis_size='{"x":57,"y":3694,"w":111,"h":24,"abs_x":497,"abs_y":3737}' className="text-base text-white font-medium">Founder &amp; CEO</h4>
<span bis_size='{"x":176,"y":3700,"w":24,"h":15,"abs_x":616,"abs_y":3743}' className="text-[10px] text-zinc-500 font-mono">2024</span>
</div>
<div bis_size='{"x":57,"y":3722,"w":754,"h":16,"abs_x":497,"abs_y":3765}' className="text-xs text-zinc-500 mb-2 font-medium uppercase tracking-wide">Magann Digital, USA</div>
<p bis_size='{"x":57,"y":3746,"w":576,"h":45,"abs_x":497,"abs_y":3789}' className="text-sm text-zinc-400 leading-relaxed max-w-xl font-light">Established US-incorporated media tech venture. Managed full P&amp;L and delivered end-to-end creative solutions.</p>
</div>

<div bis_size='{"x":57,"y":3839,"w":754,"h":97,"abs_x":497,"abs_y":3882}' className="relative group">
<div bis_size='{"x":20,"y":3845,"w":16,"h":16,"abs_x":460,"abs_y":3888}' className="absolute -left-[36.5px] top-1.5 w-4 h-4 bg-black border border-zinc-700 rounded-full group-hover:border-white transition-colors"></div>
<div bis_size='{"x":57,"y":3839,"w":754,"h":24,"abs_x":497,"abs_y":3882}' className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
<h4 bis_size='{"x":57,"y":3839,"w":158,"h":24,"abs_x":497,"abs_y":3882}' className="text-base text-white font-medium">Marketing Specialist</h4>
<span bis_size='{"x":223,"y":3846,"w":24,"h":15,"abs_x":663,"abs_y":3889}' className="text-[10px] text-zinc-500 font-mono">2021</span>
</div>
<div bis_size='{"x":57,"y":3867,"w":754,"h":16,"abs_x":497,"abs_y":3910}' className="text-xs text-zinc-500 mb-2 font-medium uppercase tracking-wide">[24]7.ai</div>
<p bis_size='{"x":57,"y":3891,"w":576,"h":45,"abs_x":497,"abs_y":3934}' className="text-sm text-zinc-400 leading-relaxed max-w-xl font-light">Executed omnichannel media strategy for 10,000+ stakeholders. Boosted campaign effectiveness by 30%.</p>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3958,"w":835,"h":213,"abs_x":440,"abs_y":4001}' className="py-16 border-b border-white/[0.08] bg-zinc-950/50 overflow-hidden">
<div bis_size='{"x":0,"y":4022,"w":835,"h":24,"abs_x":440,"abs_y":4065}' className="max-w-7xl mx-auto px-6 mb-8 text-center">
<span bis_size='{"x":322,"y":4030,"w":190,"h":12,"abs_x":762,"abs_y":4073}' className="text-[10px] uppercase tracking-widest text-zinc-600">Trusted By Industry Leaders</span>
</div>
<div bis_size='{"x":0,"y":4078,"w":835,"h":28,"abs_x":440,"abs_y":4121}' className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
<span bis_size='{"x":62,"y":4078,"w":84,"h":28,"abs_x":502,"abs_y":4121}' className="text-xl font-semibold text-white font-display tracking-tighter">truecaller</span>
<span bis_size='{"x":194,"y":4078,"w":39,"h":28,"abs_x":634,"abs_y":4121}' className="text-xl font-semibold text-white font-display tracking-tighter">AJIO</span>
<span bis_size='{"x":282,"y":4078,"w":57,"h":28,"abs_x":722,"abs_y":4121}' className="text-xl font-semibold text-white font-display tracking-tighter">OPTUS</span>
<span bis_size='{"x":388,"y":4078,"w":62,"h":28,"abs_x":828,"abs_y":4121}' className="text-xl font-semibold text-white font-display tracking-tighter">[24]7.ai</span>
<span bis_size='{"x":498,"y":4078,"w":52,"h":28,"abs_x":938,"abs_y":4121}' className="text-xl font-semibold text-white font-display tracking-tighter">tinder</span>
<span bis_size='{"x":599,"y":4078,"w":33,"h":28,"abs_x":1039,"abs_y":4121}' className="text-xl font-semibold text-white font-display tracking-tighter">PVR</span>
<span bis_size='{"x":681,"y":4078,"w":90,"h":28,"abs_x":1121,"abs_y":4121}' className="text-xl font-semibold text-white font-display tracking-tighter">MAGANTIR</span>
</div>
</section>

<footer bis_size='{"x":0,"y":4171,"w":835,"h":572,"abs_x":440,"abs_y":4214}' className="bg-black pt-5 pb-5" id="contact">
<div bis_size='{"x":0,"y":4191,"w":835,"h":532,"abs_x":440,"abs_y":4234}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":24,"y":4191,"w":787,"h":388,"abs_x":464,"abs_y":4234}' className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
<div bis_size='{"x":24,"y":4191,"w":361,"h":388,"abs_x":464,"abs_y":4234}'>
<h2 bis_size='{"x":24,"y":4191,"w":361,"h":288,"abs_x":464,"abs_y":4234}' className="text-5xl md:text-7xl font-display text-white font-medium tracking-tighter leading-none mb-8">
                        LET'S BUILD<br bis_size='{"x":207,"y":4253,"w":0,"h":92,"abs_x":647,"abs_y":4296}'/>THE <span bis_size='{"x":24,"y":4397,"w":257,"h":92,"abs_x":464,"abs_y":4440}' className="text-indigo-500">FUTURE.</span>
</h2>
<p bis_size='{"x":24,"y":4511,"w":361,"h":68,"abs_x":464,"abs_y":4554}' className="text-zinc-400 max-w-md leading-relaxed font-light text-sm">Available for leadership roles and ambitious projects. If you want bold, high-fidelity, and intelligent design—transmit signal.</p>
</div>
<div bis_size='{"x":449,"y":4191,"w":361,"h":388,"abs_x":889,"abs_y":4234}' className="grid gap-4">
<a bis_size='{"x":449,"y":4191,"w":361,"h":118,"abs_x":889,"abs_y":4234}' className="group flex items-center justify-between p-6 border border-white/[0.08] hover:border-indigo-500/30 hover:bg-white/[0.02] transition-all rounded-sm" href="mailto:josephjeevan4@gmail.com">
<div bis_size='{"x":474,"y":4232,"w":237,"h":37,"abs_x":914,"abs_y":4275}' className="flex items-center gap-5">
<iconify-icon bis_size='{"x":474,"y":4238,"w":24,"h":24,"abs_x":914,"abs_y":4281}' className="text-zinc-500 group-hover:text-indigo-400 transition-colors" icon="solar:letter-linear" width="24"></iconify-icon>
<div bis_size='{"x":518,"y":4232,"w":193,"h":37,"abs_x":958,"abs_y":4275}'><div bis_size='{"x":518,"y":4232,"w":193,"h":15,"abs_x":958,"abs_y":4275}' className="text-[10px] uppercase tracking-widest text-zinc-500">Email</div><div bis_size='{"x":518,"y":4249,"w":193,"h":20,"abs_x":958,"abs_y":4292}' className="text-white font-mono text-sm mt-0.5">josephjeevan4@gmail.com</div></div>
</div>
<iconify-icon bis_size='{"x":768,"y":4241,"w":18,"h":18,"abs_x":1208,"abs_y":4284}' className="text-zinc-700 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
<a bis_size='{"x":449,"y":4325,"w":361,"h":118,"abs_x":889,"abs_y":4368}' className="group flex items-center justify-between p-6 border border-white/[0.08] hover:border-indigo-500/30 hover:bg-white/[0.02] transition-all rounded-sm" href="tel:+917025530994">
<div bis_size='{"x":474,"y":4366,"w":178,"h":37,"abs_x":914,"abs_y":4409}' className="flex items-center gap-5">
<iconify-icon bis_size='{"x":474,"y":4373,"w":24,"h":24,"abs_x":914,"abs_y":4416}' className="text-zinc-500 group-hover:text-indigo-400 transition-colors" icon="solar:phone-calling-linear" width="24"></iconify-icon>
<div bis_size='{"x":518,"y":4366,"w":134,"h":37,"abs_x":958,"abs_y":4409}' className=""><div bis_size='{"x":518,"y":4366,"w":134,"h":15,"abs_x":958,"abs_y":4409}' className="text-[10px] uppercase tracking-widest text-zinc-500">Frequency</div><div bis_size='{"x":518,"y":4383,"w":134,"h":20,"abs_x":958,"abs_y":4426}' className="text-white font-mono text-sm mt-0.5">+91 7025 530 994</div></div>
</div>
<iconify-icon bis_size='{"x":768,"y":4376,"w":18,"h":18,"abs_x":1208,"abs_y":4419}' className="text-zinc-700 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
<a bis_size='{"x":449,"y":4460,"w":361,"h":118,"abs_x":889,"abs_y":4503}' className="group flex items-center justify-between p-6 border border-white/[0.08] hover:border-indigo-500/30 hover:bg-white/[0.02] transition-all rounded-sm" href="https://www.linkedin.com/in/joseph-vince-302777166" target="_blank">
<div bis_size='{"x":474,"y":4501,"w":280,"h":37,"abs_x":914,"abs_y":4544}' className="flex items-center gap-5">
<iconify-icon bis_size='{"x":474,"y":4508,"w":24,"h":24,"abs_x":914,"abs_y":4551}' className="text-zinc-500 group-hover:text-indigo-400 transition-colors" icon="solar:link-circle-linear" width="24"></iconify-icon>
<div bis_size='{"x":518,"y":4501,"w":236,"h":37,"abs_x":958,"abs_y":4544}'><div bis_size='{"x":518,"y":4501,"w":236,"h":15,"abs_x":958,"abs_y":4544}' className="text-[10px] uppercase tracking-widest text-zinc-500">Network</div><div bis_size='{"x":518,"y":4518,"w":236,"h":20,"abs_x":958,"abs_y":4561}' className="text-white font-mono text-sm mt-0.5">linkedin.com/in/joseph-vince</div></div>
</div>
<iconify-icon bis_size='{"x":768,"y":4511,"w":18,"h":18,"abs_x":1208,"abs_y":4554}' className="text-zinc-700 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div bis_size='{"x":24,"y":4675,"w":787,"h":48,"abs_x":464,"abs_y":4718}' className="border-t border-white/[0.08] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div bis_size='{"x":24,"y":4708,"w":107,"h":15,"abs_x":464,"abs_y":4751}' className="flex items-center gap-2">
<div bis_size='{"x":24,"y":4712,"w":6,"h":6,"abs_x":464,"abs_y":4755}' className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
<span bis_size='{"x":38,"y":4708,"w":93,"h":15,"abs_x":478,"abs_y":4751}' className="text-[10px] text-zinc-500 uppercase tracking-widest">System Online</span>
</div>
<div bis_size='{"x":335,"y":4708,"w":161,"h":15,"abs_x":775,"abs_y":4751}' className="font-mono text-zinc-600 text-[10px] tracking-widest uppercase">© 2025 Joseph Jeevan EV</div>
<div bis_size='{"x":701,"y":4708,"w":109,"h":15,"abs_x":1141,"abs_y":4751}' className="flex gap-6">
<span bis_size='{"x":701,"y":4708,"w":36,"h":15,"abs_x":1141,"abs_y":4751}' className="text-[10px] text-zinc-600 uppercase tracking-widest hover:text-white cursor-pointer transition-colors">Legal</span>
<span bis_size='{"x":761,"y":4708,"w":49,"h":15,"abs_x":1201,"abs_y":4751}' className="text-[10px] text-zinc-600 uppercase tracking-widest hover:text-white cursor-pointer transition-colors">Credits</span>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
