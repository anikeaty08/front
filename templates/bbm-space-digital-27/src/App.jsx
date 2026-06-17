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



function debounce(func, wait) {
let timeout;
return function executedFunction(...args) {
const later = () => {
clearTimeout(timeout);
func(...args);
};
clearTimeout(timeout);
timeout = setTimeout(later, wait);
};
}
const updateDom = debounce((html) => {
try {
if (!document.body) return;
const parser = new DOMParser();
const newDoc = parser.parseFromString(html, 'text/html');
// Preserve essential scripts and stylesheets when updating head
const currentHead = document.head;
const newHead = newDoc.head;
// Collect essential elements to preserve (CDNs, fonts, initial setup scripts)
const essentialElements = Array.from(currentHead.children).filter(el => {
// Preserve Tailwind CDN script
if (el.tagName === 'SCRIPT' && el.getAttribute('src')?.includes('tailwindcss.com')) {
return true;
}
// Preserve Lucide icons script
if (el.tagName === 'SCRIPT' && el.getAttribute('src')?.includes('lucide')) {
return true;
}
// Preserve the initial message listener script (this script)
if (el.tagName === 'SCRIPT' && !el.hasAttribute('src') &&
el.textContent?.includes('updateDom')) {
return true;
}
// Preserve Google Fonts preconnect and font links
if (el.tagName === 'LINK' && (
el.getAttribute('href')?.includes('fonts.googleapis.com') ||
el.getAttribute('href')?.includes('fonts.gstatic.com')
)) {
return true;
}
// Preserve viewport and charset meta tags
if (el.tagName === 'META' &&
(el.getAttribute('name') === 'viewport' || el.getAttribute('charset'))) {
return true;
}
// Preserve essential styles (like Inter font family)
if (el.tagName === 'STYLE' && el.textContent?.includes('Inter')) {
return true;
}
return false;
});
// Update head content while preserving essential elements
currentHead.innerHTML = '';
// Re-add essential elements first
essentialElements.forEach(el => {
currentHead.appendChild(el);
});
// Add new head content from the incoming HTML
Array.from(newHead.children).forEach(el => {
// Skip if we already have this essential element
const isEssential = (el.tagName === 'SCRIPT' && (el.getAttribute('src')?.includes('tailwindcss.com') || el.getAttribute('src')?.includes('lucide'))) ||
(el.tagName === 'LINK' && (el.getAttribute('href')?.includes('fonts.googleapis.com') || el.getAttribute('href')?.includes('fonts.gstatic.com'))) ||
(el.tagName === 'META' && (el.getAttribute('name') === 'viewport' || el.getAttribute('charset'))) ||
(el.tagName === 'STYLE' && el.textContent?.includes('Inter'));
if (!isEssential) {
currentHead.appendChild(el.cloneNode(true));
}
});
// Update body attributes (classes, styles, etc.)
const newBody = newDoc.body;
const currentBody = document.body;
// Copy all attributes from new body to current body
for (const attr of newBody.attributes) {
currentBody.setAttribute(attr.name, attr.value);
}
// Update body content
document.body.innerHTML = newDoc.body.innerHTML;
// Re-execute scripts in body to ensure they work properly
const scripts = Array.from(document.body.querySelectorAll('script'));
for (const oldScript of scripts) {
const newScript = document.createElement('script');
if (oldScript.src) {
newScript.src = oldScript.src;
} else {
newScript.textContent = oldScript.textContent;
}
if (oldScript.type) {
newScript.type = oldScript.type;
}
oldScript.parentNode.replaceChild(newScript, oldScript);
}
// Force Tailwind to reprocess the new content
// Try multiple methods to trigger Tailwind reprocessing
setTimeout(() => {
// Method 1: Use Tailwind's process function if available
if (window.tailwind && typeof window.tailwind.process === 'function') {
window.tailwind.process();
}
// Method 2: Trigger a style recalculation by temporarily changing a class
const tempElement = document.createElement('div');
tempElement.className = 'tailwind-trigger';
document.body.appendChild(tempElement);
setTimeout(() => {
document.body.removeChild(tempElement);
}, 10);
// Method 3: If Tailwind has a global config, reinitialize it
if (window.tailwind && typeof window.tailwind.default === 'function') {
window.tailwind.default();
}
}, 50);
} catch (e) {
console.error('Error updating preview:', e);
}
}, 200);
window.addEventListener('message', (event) => {
if (event.source !== window.parent) return;
const { type, html } = event.data;
if (type === 'update-html') {
updateDom(html);
}
});



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
extend: {
colors: {
background: '#020202',
surface: '#0A0A0A',
border: 'rgba(255, 255, 255, 0.08)',
primary: '#3b82f6',
secondary: '#8b5cf6',
},
animation: {
'spin-slow': 'spin 12s linear infinite',
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 2s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
beam: {
'0%': { offsetDistance: '0%' },
'100%': { offsetDistance: '100%' },
},
animationIn: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Spotlight Effect Script
        document.querySelectorAll('.spotlight-card').forEach(card => {
            card.addEventListener('mousemove', e => {
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
      
<div bis_label="style" bis_size='{"x":0,"y":0,"w":1040,"h":660,"abs_x":480,"abs_y":42}' className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)', backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37e149a3-9cbf-4483-8814-521bccabafe3_3840w.png\')'}}></div>

<div bis_size='{"x":0,"y":0,"w":1040,"h":660,"abs_x":480,"abs_y":42}' className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div bis_size='{"x":0,"y":0,"w":1040,"h":660,"abs_x":480,"abs_y":42}' className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div bis_size='{"x":0,"y":0,"w":1040,"h":660,"abs_x":480,"abs_y":42}' className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div></div>

<div bis_size='{"x":0,"y":0,"w":1040,"h":645,"abs_x":480,"abs_y":42}' className="fixed inset-0 z-0">

<img alt="Space Background" bis_size='{"x":0,"y":0,"w":1040,"h":792,"abs_x":480,"abs_y":42}' className="absolute top-0 left-0 w-full h-[120vh] object-cover opacity-60 mix-blend-lighten pointer-events-none select-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37e149a3-9cbf-4483-8814-521bccabafe3_3840w.png?w=800&amp;q=80" style={{}}/>

<div bis_size='{"x":0,"y":0,"w":1040,"h":645,"abs_x":480,"abs_y":42}' className="absolute inset-0 bg-gradient-to-b from-[#020202]/30 via-[#020202]/80 to-[#020202]"></div>

<div bis_size='{"x":0,"y":0,"w":1040,"h":645,"abs_x":480,"abs_y":42}' className="absolute inset-0 mx-auto max-w-7xl w-full h-full vertical-lines border-r border-l opacity-50 border-white/5"></div>
</div>

<header bis_size='{"x":0,"y":0,"w":1040,"h":105,"abs_x":480,"abs_y":42}' className="fixed z-50 flex pt-6 pr-4 pb-6 pl-4 top-0 right-0 left-0 justify-center">

<nav bis_size='{"x":16,"y":24,"w":1008,"h":57,"abs_x":496,"abs_y":66}' className="flex transition-all duration-300 hover:bg-white/[0.05] w-full max-w-5xl border-white/10 border rounded-full ring-white/5 ring-1 pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_4px_30px_rgba(0,0,0,0.1),inset_0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-2xl items-center justify-between">
<div bis_size='{"x":36,"y":36,"w":121,"h":32,"abs_x":516,"abs_y":78}' className="flex items-center gap-3">
<div bis_size='{"x":36,"y":36,"w":32,"h":32,"abs_x":516,"abs_y":78}' className="w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center border shadow-[0_0_15px_rgba(37,99,235,0.3)] from-blue-600 to-blue-900 border-blue-400/30">
<iconify-icon bis_size='{"x":44,"y":44,"w":16,"h":16,"abs_x":524,"abs_y":86}' className="text-white" icon="solar:infinity-bold" width="16"></iconify-icon>
</div>
<span bis_size='{"x":80,"y":42,"w":77,"h":20,"abs_x":560,"abs_y":84}' className="text-sm font-semibold tracking-tight hidden sm:block text-white">BBM SPACE</span>
</div>
<div bis_size='{"x":393,"y":44,"w":217,"h":16,"abs_x":873,"abs_y":86}' className="hidden md:flex items-center gap-8">
<a bis_size='{"x":393,"y":44,"w":52,"h":16,"abs_x":873,"abs_y":86}' className="text-xs font-medium transition-colors relative group text-neutral-300 hover:text-white" href="#services">
                    Soluções
                    <span bis_size='{"x":393,"y":63,"w":0,"h":1,"abs_x":873,"abs_y":105}' className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-white"></span>
</a>
<a bis_size='{"x":477,"y":44,"w":53,"h":16,"abs_x":957,"abs_y":86}' className="text-xs font-medium transition-colors relative group text-neutral-300 hover:text-white" href="#process">
                    Processo
                    <span bis_size='{"x":477,"y":63,"w":0,"h":1,"abs_x":957,"abs_y":105}' className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-white"></span>
</a>
<a bis_size='{"x":563,"y":44,"w":47,"h":16,"abs_x":1043,"abs_y":86}' className="text-xs font-medium transition-colors relative group text-neutral-300 hover:text-white" href="#projects">
                    Projetos
                    <span bis_size='{"x":563,"y":63,"w":0,"h":1,"abs_x":1043,"abs_y":105}' className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-white"></span>
</a>
</div>
<div bis_size='{"x":845,"y":34,"w":158,"h":36,"abs_x":1325,"abs_y":76}' className="flex items-center gap-4">
<a bis_size='{"x":845,"y":44,"w":31,"h":16,"abs_x":1325,"abs_y":86}' className="hidden sm:block text-xs font-medium transition-colors text-neutral-300 hover:text-white" href="#login">Login</a>
<button bis_size='{"x":893,"y":34,"w":110,"h":36,"abs_x":1373,"abs_y":76}' className="group relative overflow-hidden rounded-full px-4 py-1.5 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] bg-white hover:bg-neutral-100">
<span bis_size='{"x":909,"y":46,"w":78,"h":15,"abs_x":1389,"abs_y":88}' className="relative text-xs font-semibold text-black">Fale Conosco</span>
</button>
</div>
</nav>
</header>

<main bis_size='{"x":0,"y":0,"w":1040,"h":2374,"abs_x":480,"abs_y":42}' className="sm:px-6 z-10 pt-32 pr-4 pb-24 pl-4 relative">

<section bis_size='{"x":24,"y":128,"w":992,"h":495,"abs_x":504,"abs_y":170}' className="flex flex-col min-h-[75vh] text-center max-w-7xl mr-auto ml-auto relative items-center justify-center" id="hero">
<div bis_size='{"x":453,"y":136,"w":133,"h":24,"abs_x":933,"abs_y":178}' className="mb-8 flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-medium [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate text-blue-300">
<span bis_size='{"x":466,"y":145,"w":6,"h":6,"abs_x":946,"abs_y":187}' className="relative flex h-1.5 w-1.5">
<span bis_size='{"x":463,"y":142,"w":11,"h":11,"abs_x":943,"abs_y":184}' className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span bis_size='{"x":466,"y":145,"w":6,"h":6,"abs_x":946,"abs_y":187}' className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
                INOVAÇÃO DIGITAL
            </div>

<h1 bis_size='{"x":55,"y":192,"w":928,"h":200,"abs_x":535,"abs_y":234}' className="text-4xl md:text-6xl lg:text-8xl font-semibold tracking-tight mb-8 font-display leading-[0.95] max-w-5xl mx-auto drop-shadow-2xl text-white">
<div bis_size='{"x":55,"y":192,"w":928,"h":100,"abs_x":535,"abs_y":234}' className="block clip-text-parent">
<span bis_size='{"x":129,"y":183,"w":781,"h":122,"abs_x":609,"abs_y":225}' className="clip-text-child font-space-grotesk" style={{animationDelay: '0.1s'}}>Criação de Futuro</span>
</div>
<div bis_size='{"x":55,"y":292,"w":928,"h":100,"abs_x":535,"abs_y":334}' className="block clip-text-parent">
<span bis_size='{"x":55,"y":283,"w":928,"h":122,"abs_x":535,"abs_y":325}' className="clip-text-child bg-clip-text text-transparent font-space-grotesk bg-gradient-to-r from-white via-blue-100 to-blue-300" style={{animationDelay: '0.2s'}}>Digital &amp; Sob Medida.</span>
</div>
</h1>
<p bis_size='{"x":184,"y":424,"w":672,"h":56,"abs_x":664,"abs_y":466}' className="max-w-2xl mx-auto text-lg font-light mb-12 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate text-neutral-400">
                Desenvolvimento de sites e plataformas digitais, automação de processos e estratégias de branding para escalar o seu negócio.
            </p>

<div bis_size='{"x":468,"y":528,"w":103,"h":24,"abs_x":948,"abs_y":570}' className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate">
<button bis_size='{"x":468,"y":528,"w":103,"h":24,"abs_x":948,"abs_y":570}' className="shiny-cta focus:outline-none" onclick="document.getElementById('contact').scrollIntoView()">
<span bis_size='{"x":468,"y":531,"w":103,"h":19,"abs_x":948,"abs_y":573}' className="">Iniciar Projeto</span>
</button>
</div>
<div bis_size='{"x":267,"y":600,"w":506,"h":15,"abs_x":747,"abs_y":642}' className="mt-12 flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-widest text-neutral-500 font-medium [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll animate">
<span bis_size='{"x":267,"y":600,"w":137,"h":15,"abs_x":747,"abs_y":642}' className="flex items-center gap-2"><iconify-icon bis_size='{"x":267,"y":603,"w":10,"h":10,"abs_x":747,"abs_y":645}' className="text-blue-400" icon="solar:code-circle-linear"></iconify-icon> High Performance</span>
<span bis_size='{"x":437,"y":600,"w":171,"h":15,"abs_x":917,"abs_y":642}' className="flex items-center gap-2"><iconify-icon bis_size='{"x":437,"y":603,"w":10,"h":10,"abs_x":917,"abs_y":645}' className="text-blue-400" icon="solar:shield-check-linear"></iconify-icon> Secure Infrastructure</span>
<span bis_size='{"x":640,"y":600,"w":132,"h":15,"abs_x":1120,"abs_y":642}' className="flex items-center gap-2"><iconify-icon bis_size='{"x":640,"y":603,"w":10,"h":10,"abs_x":1120,"abs_y":645}' className="text-blue-400" icon="solar:graph-up-linear"></iconify-icon> Scalable Growth</span>
</div>
</section>

<section bis_size='{"x":-7,"y":671,"w":1056,"h":28,"abs_x":473,"abs_y":713}' className="mt-12 mb-32 relative w-screen -ml-[calc(50vw-50%)] overflow-hidden">
<div bis_size='{"x":-7,"y":671,"w":128,"h":28,"abs_x":473,"abs_y":713}' className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none"></div>
<div bis_size='{"x":920,"y":671,"w":128,"h":28,"abs_x":1400,"abs_y":713}' className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none"></div>
<div bis_size='{"x":-55,"y":671,"w":2410,"h":28,"abs_x":425,"abs_y":713}' className="flex w-max animate-marquee gap-16 md:gap-32 items-center opacity-30 hover:opacity-80 transition-opacity duration-500">
<div bis_size='{"x":-55,"y":671,"w":59,"h":28,"abs_x":425,"abs_y":713}' className="text-xl font-bold font-display tracking-tighter text-white">REACT</div>
<div bis_size='{"x":132,"y":671,"w":72,"h":28,"abs_x":612,"abs_y":713}' className="text-xl font-bold font-display tracking-tighter text-white">NEXT.JS</div>
<div bis_size='{"x":332,"y":671,"w":51,"h":28,"abs_x":812,"abs_y":713}' className="text-xl font-bold font-display tracking-tighter text-white">NODE</div>
<div bis_size='{"x":511,"y":671,"w":75,"h":28,"abs_x":991,"abs_y":713}' className="text-xl font-bold font-display tracking-tighter text-white">PYTHON</div>
<div bis_size='{"x":715,"y":671,"w":41,"h":28,"abs_x":1195,"abs_y":713}' className="text-xl font-bold font-display tracking-tighter text-white">AWS</div>
<div bis_size='{"x":884,"y":671,"w":56,"h":28,"abs_x":1364,"abs_y":713}' className="text-xl font-bold font-display tracking-tighter text-white">FIGMA</div>
<div bis_size='{"x":1068,"y":671,"w":17,"h":28,"abs_x":1548,"abs_y":713}' className="text-xl font-bold font-display tracking-tighter text-white">AI</div>

<div bis_size='{"x":1213,"y":671,"w":59,"h":28,"abs_x":1693,"abs_y":713}' className="text-xl font-bold font-display tracking-tighter text-white">REACT</div>
<div bis_size='{"x":1401,"y":671,"w":72,"h":28,"abs_x":1881,"abs_y":713}' className="text-xl font-bold font-display tracking-tighter text-white">NEXT.JS</div>
<div bis_size='{"x":1602,"y":671,"w":51,"h":28,"abs_x":2082,"abs_y":713}' className="text-xl font-bold font-display tracking-tighter text-white">NODE</div>
<div bis_size='{"x":1781,"y":671,"w":75,"h":28,"abs_x":2261,"abs_y":713}' className="text-xl font-bold font-display tracking-tighter text-white">PYTHON</div>
<div bis_size='{"x":1984,"y":671,"w":41,"h":28,"abs_x":2464,"abs_y":713}' className="text-xl font-bold font-display tracking-tighter text-white">AWS</div>
<div bis_size='{"x":2153,"y":671,"w":56,"h":28,"abs_x":2633,"abs_y":713}' className="text-xl font-bold font-display tracking-tighter text-white">FIGMA</div>
<div bis_size='{"x":2338,"y":671,"w":17,"h":28,"abs_x":2818,"abs_y":713}' className="text-xl font-bold font-display tracking-tighter text-white">AI</div>
</div>
</section>

<section bis_size='{"x":24,"y":827,"w":992,"h":784,"abs_x":504,"abs_y":869}' className="max-w-7xl mx-auto mb-32 relative" id="services">
<div bis_size='{"x":24,"y":827,"w":992,"h":72,"abs_x":504,"abs_y":869}' className="mb-12 md:flex justify-between items-end [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<div bis_size='{"x":24,"y":827,"w":466,"h":72,"abs_x":504,"abs_y":869}' className="">
<h2 bis_size='{"x":24,"y":827,"w":466,"h":40,"abs_x":504,"abs_y":869}' className="text-3xl md:text-4xl font-medium mb-2 font-display tracking-tight font-space-grotesk text-white" style={{}}>Nossas Soluções</h2>
<p bis_size='{"x":24,"y":875,"w":466,"h":24,"abs_x":504,"abs_y":917}' className="font-light text-neutral-400">Tecnologia e design integrados para resultados excepcionais.</p>
</div>
<div bis_size='{"x":1015,"y":851,"w":1,"h":48,"abs_x":1495,"abs_y":893}' className="hidden md:block w-px h-12 bg-white/10"></div>
</div>
<div bis_size='{"x":24,"y":947,"w":992,"h":664,"abs_x":504,"abs_y":989}' className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div bis_size='{"x":24,"y":947,"w":314,"h":340,"abs_x":504,"abs_y":989}' className="group spotlight-card spotlight-border rounded-2xl border p-8 relative [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll h-[340px] flex flex-col justify-between border-white/5 animate">
<div bis_size='{"x":56,"y":980,"w":249,"h":168,"abs_x":536,"abs_y":1022}' className="relative z-10">
<div bis_size='{"x":56,"y":980,"w":40,"h":40,"abs_x":536,"abs_y":1022}' className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-white/5 border-white/10 text-white">
<iconify-icon bis_size='{"x":66,"y":990,"w":20,"h":20,"abs_x":546,"abs_y":1032}' icon="solar:laptop-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":56,"y":1044,"w":249,"h":28,"abs_x":536,"abs_y":1086}' className="text-lg font-medium mb-2 text-white">Web Development</h3>
<p bis_size='{"x":56,"y":1080,"w":249,"h":68,"abs_x":536,"abs_y":1122}' className="text-sm leading-relaxed text-neutral-400">Desenvolvimento de sites e plataformas digitais robustas, rápidas e otimizadas para conversão.</p>
</div>
<div bis_size='{"x":56,"y":1158,"w":249,"h":96,"abs_x":536,"abs_y":1200}' className="relative z-10 w-full rounded-lg border overflow-hidden h-24 group-hover:border-blue-500/30 transition-colors bg-neutral-900/50 border-white/5">
<div bis_size='{"x":57,"y":1159,"w":247,"h":94,"abs_x":537,"abs_y":1201}' className="absolute inset-0 bg-grid-white/[0.02]"></div>
<div bis_size='{"x":69,"y":1171,"w":64,"h":8,"abs_x":549,"abs_y":1213}' className="absolute top-3 left-3 w-16 h-2 rounded-full bg-neutral-800"></div>
<div bis_size='{"x":69,"y":1187,"w":96,"h":8,"abs_x":549,"abs_y":1229}' className="absolute top-7 left-3 w-24 h-2 rounded-full bg-neutral-800"></div>
<div bis_size='{"x":261,"y":1210,"w":32,"h":32,"abs_x":741,"abs_y":1252}' className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<iconify-icon bis_size='{"x":271,"y":1220,"w":12,"h":12,"abs_x":751,"abs_y":1262}' icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</div>
</div>

<div bis_size='{"x":362,"y":947,"w":314,"h":340,"abs_x":842,"abs_y":989}' className="group spotlight-card spotlight-border rounded-2xl border p-8 relative [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll h-[340px] flex flex-col justify-between overflow-hidden border-white/5 animate" style={{'--mouse-x': '170.07498168945312px', '--mouse-y': '83.80000305175781px'}}>
<div bis_size='{"x":395,"y":980,"w":249,"h":168,"abs_x":875,"abs_y":1022}' className="relative z-10">
<div bis_size='{"x":395,"y":980,"w":40,"h":40,"abs_x":875,"abs_y":1022}' className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
<iconify-icon bis_size='{"x":405,"y":990,"w":20,"h":20,"abs_x":885,"abs_y":1032}' icon="solar:code-square-linear" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":395,"y":1044,"w":249,"h":28,"abs_x":875,"abs_y":1086}' className="text-lg font-medium mb-2 text-white">Sistemas Sob Medida</h3>
<p bis_size='{"x":395,"y":1080,"w":249,"h":68,"abs_x":875,"abs_y":1122}' className="text-sm leading-relaxed text-neutral-400">Criação de sistemas personalizados para resolver dores específicas do seu negócio.</p>
</div>

<div bis_size='{"x":363,"y":1158,"w":313,"h":128,"abs_x":843,"abs_y":1200}' className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent z-10 from-black"></div>
<div bis_size='{"x":363,"y":1245,"w":353,"h":25,"abs_x":843,"abs_y":1287}' className="absolute -right-10 bottom-4 font-mono text-[10px] opacity-50 leading-tight select-none text-neutral-700">
                        const optimize = () =&gt; {
                          return performance * 100;
                        }
                        export default system;
                    </div>
</div>

<div bis_size='{"x":701,"y":947,"w":314,"h":340,"abs_x":1181,"abs_y":989}' className="group spotlight-card spotlight-border rounded-2xl border p-8 relative [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll h-[340px] flex flex-col justify-between border-white/5 animate" style={{'--mouse-x': '76.13751220703125px', '--mouse-y': '239.79999923706055px'}}>
<div bis_size='{"x":734,"y":980,"w":249,"h":168,"abs_x":1214,"abs_y":1022}' className="relative z-10">
<div bis_size='{"x":734,"y":980,"w":40,"h":40,"abs_x":1214,"abs_y":1022}' className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-white/5 border-white/10 text-white">
<iconify-icon bis_size='{"x":744,"y":990,"w":20,"h":20,"abs_x":1224,"abs_y":1032}' icon="solar:palette-linear" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":734,"y":1044,"w":249,"h":28,"abs_x":1214,"abs_y":1086}' className="text-lg font-medium mb-2 text-white">Branding Estratégico</h3>
<p bis_size='{"x":734,"y":1080,"w":249,"h":68,"abs_x":1214,"abs_y":1122}' className="text-sm leading-relaxed text-neutral-400">Identidade visual marcante que conecta sua marca ao público certo e transmite valor.</p>
</div>
<div bis_size='{"x":734,"y":1190,"w":249,"h":64,"abs_x":1214,"abs_y":1232}' className="relative z-10 flex gap-2 items-center justify-center h-16">
<div bis_size='{"x":803,"y":1206,"w":32,"h":32,"abs_x":1283,"abs_y":1248}' className="w-8 h-8 rounded-full blur-[2px] opacity-20 bg-white"></div>
<div bis_size='{"x":843,"y":1206,"w":32,"h":32,"abs_x":1323,"abs_y":1248}' className="w-8 h-8 rounded-full bg-blue-500 blur-[2px] opacity-40 mix-blend-screen"></div>
<div bis_size='{"x":883,"y":1206,"w":32,"h":32,"abs_x":1363,"abs_y":1248}' className="w-8 h-8 rounded-full bg-purple-500 blur-[2px] opacity-40 mix-blend-screen"></div>
</div>
</div>

<div bis_size='{"x":24,"y":1311,"w":314,"h":300,"abs_x":504,"abs_y":1353}' className="group spotlight-card spotlight-border rounded-2xl border p-8 relative [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll h-[300px] md:col-span-1.5 flex flex-col justify-between border-white/5 animate">
<div bis_size='{"x":56,"y":1344,"w":249,"h":145,"abs_x":536,"abs_y":1386}' className="relative z-10">
<div bis_size='{"x":56,"y":1344,"w":40,"h":40,"abs_x":536,"abs_y":1386}' className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 bg-white/5 border-white/10 text-white">
<iconify-icon bis_size='{"x":66,"y":1354,"w":20,"h":20,"abs_x":546,"abs_y":1396}' icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":56,"y":1408,"w":249,"h":28,"abs_x":536,"abs_y":1450}' className="text-lg font-medium mb-2 text-white">Marketing de Performance</h3>
<p bis_size='{"x":56,"y":1444,"w":249,"h":45,"abs_x":536,"abs_y":1486}' className="text-sm leading-relaxed text-neutral-400">Estratégias baseadas em dados para maximizar ROI e alcance.</p>
</div>
<div bis_size='{"x":56,"y":1574,"w":249,"h":4,"abs_x":536,"abs_y":1616}' className="w-full h-1 rounded-full overflow-hidden bg-neutral-800">
<div bis_size='{"x":56,"y":1574,"w":99,"h":4,"abs_x":536,"abs_y":1616}' className="bg-blue-500 h-full w-[40%] animate-[beam_2s_infinite]"></div>
</div>
</div>

<div bis_size='{"x":362,"y":1311,"w":314,"h":300,"abs_x":842,"abs_y":1353}' className="group spotlight-card spotlight-border rounded-2xl border p-8 relative [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll h-[300px] md:col-span-1.5 flex flex-col justify-between border-white/5 animate" style={{'--mouse-x': '261.0749816894531px', '--mouse-y': '122.19998168945312px'}}>
<div bis_size='{"x":395,"y":1344,"w":249,"h":145,"abs_x":875,"abs_y":1386}' className="relative z-10">
<div bis_size='{"x":395,"y":1344,"w":40,"h":40,"abs_x":875,"abs_y":1386}' className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 bg-white/5 border-white/10 text-white">
<iconify-icon bis_size='{"x":405,"y":1354,"w":20,"h":20,"abs_x":885,"abs_y":1396}' icon="solar:settings-linear" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":395,"y":1408,"w":249,"h":28,"abs_x":875,"abs_y":1450}' className="text-lg font-medium mb-2 text-white">Automação Inteligente</h3>
<p bis_size='{"x":395,"y":1444,"w":249,"h":45,"abs_x":875,"abs_y":1486}' className="text-sm leading-relaxed text-neutral-400">Processos otimizados e soluções inteligentes para reduzir custos.</p>
</div>
<div bis_size='{"x":395,"y":1554,"w":249,"h":24,"abs_x":875,"abs_y":1596}' className="flex gap-1 items-end h-6 opacity-50">
<div bis_size='{"x":395,"y":1564,"w":4,"h":14,"abs_x":875,"abs_y":1606}' className="w-1 bg-blue-500 h-[60%] animate-pulse"></div>
<div bis_size='{"x":403,"y":1559,"w":4,"h":19,"abs_x":883,"abs_y":1601}' className="w-1 bg-blue-500 h-[80%] animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div bis_size='{"x":411,"y":1569,"w":4,"h":9,"abs_x":891,"abs_y":1611}' className="w-1 bg-blue-500 h-[40%] animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div bis_size='{"x":419,"y":1557,"w":4,"h":21,"abs_x":899,"abs_y":1599}' className="w-1 bg-blue-500 h-[90%] animate-pulse" style={{animationDelay: '0.3s'}}></div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":24,"y":1739,"w":992,"h":443,"abs_x":504,"abs_y":1781}' className="max-w-7xl mx-auto mb-24 relative" id="contact">
<div bis_size='{"x":24,"y":1739,"w":992,"h":76,"abs_x":504,"abs_y":1781}' className="text-center mb-16 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<h2 bis_size='{"x":24,"y":1739,"w":992,"h":36,"abs_x":504,"abs_y":1781}' className="text-3xl font-medium mb-4 font-display font-space-grotesk text-white" style={{}}>Inicie sua Transformação</h2>
<p bis_size='{"x":24,"y":1791,"w":992,"h":24,"abs_x":504,"abs_y":1833}' className="font-light text-neutral-400">Escolha como podemos ajudar a escalar o seu negócio.</p>
</div>
<div bis_size='{"x":24,"y":1879,"w":992,"h":303,"abs_x":504,"abs_y":1921}' className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div bis_size='{"x":24,"y":1879,"w":309,"h":303,"abs_x":504,"abs_y":1921}' className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll p-8 rounded-2xl border transition-colors bg-[#050505] flex flex-col border-white/5 hover:border-white/10 animate">
<div bis_size='{"x":56,"y":1912,"w":244,"h":20,"abs_x":536,"abs_y":1954}' className="text-sm font-medium mb-2 text-neutral-400">MVP &amp; Startups</div>
<div bis_size='{"x":56,"y":1940,"w":244,"h":32,"abs_x":536,"abs_y":1982}' className="text-2xl font-semibold mb-6 font-space-grotesk text-white" style={{}}>Lançamento</div>
<ul bis_size='{"x":56,"y":1996,"w":244,"h":84,"abs_x":536,"abs_y":2038}' className="space-y-3 mb-8 text-sm flex-1 text-neutral-400">
<li bis_size='{"x":56,"y":1996,"w":244,"h":20,"abs_x":536,"abs_y":2038}' className="flex items-center gap-2"><iconify-icon bis_size='{"x":56,"y":1999,"w":14,"h":14,"abs_x":536,"abs_y":2041}' className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Landing Pages</li>
<li bis_size='{"x":56,"y":2028,"w":244,"h":20,"abs_x":536,"abs_y":2070}' className="flex items-center gap-2"><iconify-icon bis_size='{"x":56,"y":2031,"w":14,"h":14,"abs_x":536,"abs_y":2073}' className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Identidade Visual Básica</li>
<li bis_size='{"x":56,"y":2060,"w":244,"h":20,"abs_x":536,"abs_y":2102}' className="flex items-center gap-2"><iconify-icon bis_size='{"x":56,"y":2063,"w":14,"h":14,"abs_x":536,"abs_y":2105}' className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Configuração de SEO</li>
</ul>
<button bis_size='{"x":56,"y":2112,"w":244,"h":37,"abs_x":536,"abs_y":2154}' className="w-full py-2.5 rounded-full border text-xs font-semibold transition-colors border-white/10 text-white hover:bg-white/5">Solicitar Orçamento</button>
</div>

<div bis_size='{"x":365,"y":1879,"w":309,"h":303,"abs_x":845,"abs_y":1921}' className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll relative p-8 rounded-2xl border border-blue-500/20 bg-[#080808] shadow-[0_0_40px_rgba(59,130,246,0.05)] flex flex-col animate">
<div bis_size='{"x":634,"y":1880,"w":40,"h":48,"abs_x":1114,"abs_y":1922}' className="absolute top-0 right-0 p-3">
<iconify-icon bis_size='{"x":646,"y":1894,"w":16,"h":16,"abs_x":1126,"abs_y":1936}' className="text-blue-500" icon="solar:star-bold"></iconify-icon>
</div>
<div bis_size='{"x":398,"y":1912,"w":244,"h":20,"abs_x":878,"abs_y":1954}' className="text-sm font-medium mb-2 text-blue-400">Growth</div>
<div bis_size='{"x":398,"y":1940,"w":244,"h":32,"abs_x":878,"abs_y":1982}' className="text-2xl font-semibold mb-6 font-space-grotesk text-white" style={{}}>Escala</div>
<ul bis_size='{"x":398,"y":1996,"w":244,"h":85,"abs_x":878,"abs_y":2038}' className="space-y-3 mb-8 text-sm flex-1 text-neutral-300">
<li bis_size='{"x":398,"y":1996,"w":244,"h":20,"abs_x":878,"abs_y":2038}' className="flex items-center gap-2"><iconify-icon bis_size='{"x":398,"y":1999,"w":14,"h":14,"abs_x":878,"abs_y":2041}' className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Sites Institucionais</li>
<li bis_size='{"x":398,"y":2028,"w":244,"h":20,"abs_x":878,"abs_y":2070}' className="flex items-center gap-2"><iconify-icon bis_size='{"x":398,"y":2031,"w":14,"h":14,"abs_x":878,"abs_y":2073}' className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Automação de Marketing</li>
<li bis_size='{"x":398,"y":2060,"w":244,"h":20,"abs_x":878,"abs_y":2102}' className="flex items-center gap-2"><iconify-icon bis_size='{"x":398,"y":2063,"w":14,"h":14,"abs_x":878,"abs_y":2105}' className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Branding Completo</li>
</ul>
<button bis_size='{"x":398,"y":2114,"w":244,"h":36,"abs_x":878,"abs_y":2156}' className="w-full py-2.5 rounded-full text-xs font-semibold transition-colors bg-white text-black hover:bg-neutral-200">Falar com Consultor</button>
</div>

<div bis_size='{"x":707,"y":1879,"w":309,"h":303,"abs_x":1187,"abs_y":1921}' className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll p-8 rounded-2xl border transition-colors bg-[#050505] flex flex-col border-white/5 hover:border-white/10 animate">
<div bis_size='{"x":740,"y":1912,"w":244,"h":20,"abs_x":1220,"abs_y":1954}' className="text-sm font-medium mb-2 text-neutral-400">Enterprise</div>
<div bis_size='{"x":740,"y":1940,"w":244,"h":32,"abs_x":1220,"abs_y":1982}' className="text-2xl font-semibold mb-6 font-space-grotesk text-white" style={{}}>Sob Medida</div>
<ul bis_size='{"x":740,"y":1996,"w":244,"h":84,"abs_x":1220,"abs_y":2038}' className="space-y-3 mb-8 text-sm flex-1 text-neutral-400">
<li bis_size='{"x":740,"y":1996,"w":244,"h":20,"abs_x":1220,"abs_y":2038}' className="flex items-center gap-2"><iconify-icon bis_size='{"x":740,"y":1999,"w":14,"h":14,"abs_x":1220,"abs_y":2041}' className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Sistemas Complexos</li>
<li bis_size='{"x":740,"y":2028,"w":244,"h":20,"abs_x":1220,"abs_y":2070}' className="flex items-center gap-2"><iconify-icon bis_size='{"x":740,"y":2031,"w":14,"h":14,"abs_x":1220,"abs_y":2073}' className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Apps Nativos</li>
<li bis_size='{"x":740,"y":2060,"w":244,"h":20,"abs_x":1220,"abs_y":2102}' className="flex items-center gap-2"><iconify-icon bis_size='{"x":740,"y":2063,"w":14,"h":14,"abs_x":1220,"abs_y":2105}' className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Consultoria Dedicada</li>
</ul>
<button bis_size='{"x":740,"y":2112,"w":244,"h":37,"abs_x":1220,"abs_y":2154}' className="w-full py-2.5 rounded-full border text-xs font-semibold transition-colors border-white/10 text-white hover:bg-white/5">Agendar Reunião</button>
</div>
</div>
</section>
</main>

<footer bis_size='{"x":0,"y":2374,"w":1040,"h":313,"abs_x":480,"abs_y":2416}' className="border-t bg-[#020202] pt-16 pb-8 relative z-10 border-white/5">
<div bis_size='{"x":0,"y":2439,"w":1040,"h":216,"abs_x":480,"abs_y":2481}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":24,"y":2439,"w":992,"h":96,"abs_x":504,"abs_y":2481}' className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div bis_size='{"x":24,"y":2439,"w":472,"h":96,"abs_x":504,"abs_y":2481}' className="col-span-1 md:col-span-2">
<div bis_size='{"x":24,"y":2439,"w":472,"h":24,"abs_x":504,"abs_y":2481}' className="flex items-center gap-2 mb-4">
<div bis_size='{"x":24,"y":2439,"w":24,"h":24,"abs_x":504,"abs_y":2481}' className="w-6 h-6 rounded flex items-center justify-center bg-neutral-800">
<iconify-icon bis_size='{"x":30,"y":2445,"w":12,"h":12,"abs_x":510,"abs_y":2487}' className="text-white" icon="solar:infinity-bold" width="12"></iconify-icon>
</div>
<span bis_size='{"x":56,"y":2439,"w":88,"h":24,"abs_x":536,"abs_y":2481}' className="text-base font-bold tracking-tight text-white">BBM SPACE</span>
</div>
<p bis_size='{"x":24,"y":2479,"w":320,"h":39,"abs_x":504,"abs_y":2521}' className="text-xs text-neutral-500 leading-relaxed max-w-xs">
                        Transformamos ideias complexas em experiências digitais simples e poderosas.
                    </p>
</div>
<div bis_size='{"x":544,"y":2439,"w":212,"h":96,"abs_x":1024,"abs_y":2481}' className="">
<h4 bis_size='{"x":544,"y":2439,"w":212,"h":16,"abs_x":1024,"abs_y":2481}' className="text-xs font-semibold mb-4 text-white">Serviços</h4>
<ul bis_size='{"x":544,"y":2471,"w":212,"h":64,"abs_x":1024,"abs_y":2513}' className="space-y-2 text-xs text-neutral-500">
<li bis_size='{"x":544,"y":2471,"w":212,"h":16,"abs_x":1024,"abs_y":2513}' className=""><a bis_size='{"x":544,"y":2471,"w":126,"h":15,"abs_x":1024,"abs_y":2513}' className="transition-colors hover:text-white" href="#">Desenvolvimento Web</a></li>
<li bis_size='{"x":544,"y":2495,"w":212,"h":16,"abs_x":1024,"abs_y":2537}' className=""><a bis_size='{"x":544,"y":2495,"w":51,"h":15,"abs_x":1024,"abs_y":2537}' className="transition-colors hover:text-white" href="#">Sistemas</a></li>
<li bis_size='{"x":544,"y":2519,"w":212,"h":16,"abs_x":1024,"abs_y":2561}' className=""><a bis_size='{"x":544,"y":2519,"w":50,"h":15,"abs_x":1024,"abs_y":2561}' className="transition-colors hover:text-white" href="#">Branding</a></li>
</ul>
</div>
<div bis_size='{"x":804,"y":2439,"w":212,"h":96,"abs_x":1284,"abs_y":2481}'>
<h4 bis_size='{"x":804,"y":2439,"w":212,"h":16,"abs_x":1284,"abs_y":2481}' className="text-xs font-semibold mb-4 text-white">Empresa</h4>
<ul bis_size='{"x":804,"y":2471,"w":212,"h":64,"abs_x":1284,"abs_y":2513}' className="space-y-2 text-xs text-neutral-500">
<li bis_size='{"x":804,"y":2471,"w":212,"h":16,"abs_x":1284,"abs_y":2513}'><a bis_size='{"x":804,"y":2471,"w":33,"h":15,"abs_x":1284,"abs_y":2513}' className="transition-colors hover:text-white" href="#">Sobre</a></li>
<li bis_size='{"x":804,"y":2495,"w":212,"h":16,"abs_x":1284,"abs_y":2537}'><a bis_size='{"x":804,"y":2495,"w":25,"h":15,"abs_x":1284,"abs_y":2537}' className="transition-colors hover:text-white" href="#">Blog</a></li>
<li bis_size='{"x":804,"y":2519,"w":212,"h":16,"abs_x":1284,"abs_y":2561}'><a bis_size='{"x":804,"y":2519,"w":52,"h":15,"abs_x":1284,"abs_y":2561}' className="transition-colors hover:text-white" href="#">Carreiras</a></li>
</ul>
</div>
</div>
<div bis_size='{"x":24,"y":2599,"w":992,"h":56,"abs_x":504,"abs_y":2641}' className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-white/5">
<p bis_size='{"x":24,"y":2636,"w":241,"h":15,"abs_x":504,"abs_y":2678}' className="text-[10px] text-neutral-600">© 2024 BBM SPACE. Todos os direitos reservados.</p>
<div bis_size='{"x":942,"y":2632,"w":74,"h":24,"abs_x":1422,"abs_y":2674}' className="flex items-center gap-4">
<a bis_size='{"x":942,"y":2632,"w":14,"h":24,"abs_x":1422,"abs_y":2674}' className="transition-colors text-neutral-600 hover:text-white" href="#"><iconify-icon bis_size='{"x":942,"y":2636,"w":14,"h":14,"abs_x":1422,"abs_y":2678}' icon="simple-icons:instagram" width="14"></iconify-icon></a>
<a bis_size='{"x":972,"y":2632,"w":14,"h":24,"abs_x":1452,"abs_y":2674}' className="transition-colors text-neutral-600 hover:text-white" href="#"><iconify-icon bis_size='{"x":972,"y":2636,"w":14,"h":14,"abs_x":1452,"abs_y":2678}' icon="simple-icons:linkedin" width="14"></iconify-icon></a>
<a bis_size='{"x":1002,"y":2632,"w":14,"h":24,"abs_x":1482,"abs_y":2674}' className="transition-colors text-neutral-600 hover:text-white" href="#"><iconify-icon bis_size='{"x":1002,"y":2636,"w":14,"h":14,"abs_x":1482,"abs_y":2678}' icon="simple-icons:whatsapp" width="14"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
