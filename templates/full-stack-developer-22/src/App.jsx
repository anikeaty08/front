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
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
850: '#1f2937',
900: '#111111',
950: '#050505', // Deep black background
}
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'blob': 'blob 7s infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
        
        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
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
      
<div bis_size='{"x":0,"y":0,"w":1568,"h":1105,"abs_x":480,"abs_y":43}' className="fixed inset-0 z-[-1] overflow-hidden">
<div bis_size='{"x":-156,"y":-110,"w":500,"h":500,"abs_x":324,"abs_y":-67}' className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-900/10 blur-[100px] animate-blob">
</div>
<div bis_size='{"x":1224,"y":715,"w":500,"h":500,"abs_x":1704,"abs_y":758}' className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-900/10 blur-[100px] animate-blob animation-delay-2000">
</div>
<div bis_size='{"x":0,"y":0,"w":1568,"h":1105,"abs_x":480,"abs_y":43}' className="absolute inset-0 bg-grid z-[-1]"></div>
</div>
<nav bis_size='{"x":0,"y":0,"w":1568,"h":65,"abs_x":480,"abs_y":43}' className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div bis_size='{"x":336,"y":0,"w":896,"h":64,"abs_x":816,"abs_y":43}' className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
<a bis_size='{"x":360,"y":18,"w":99,"h":28,"abs_x":840,"abs_y":61}' className="text-neutral-100 font-semibold tracking-tight text-lg hover:text-white transition-colors flex items-center gap-2" href="#">
<div bis_size='{"x":360,"y":28,"w":8,"h":8,"abs_x":840,"abs_y":71}' className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                meng.dev
            </a>
<div bis_size='{"x":855,"y":13,"w":352,"h":38,"abs_x":1335,"abs_y":56}' className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a bis_size='{"x":855,"y":22,"w":40,"h":20,"abs_x":1335,"abs_y":65}' className="hover:text-indigo-400 transition-colors" href="#about">About</a>
<a bis_size='{"x":927,"y":22,"w":54,"h":20,"abs_x":1407,"abs_y":65}' className="hover:text-indigo-400 transition-colors" href="#projects">Projects</a>
<a bis_size='{"x":1014,"y":22,"w":75,"h":20,"abs_x":1494,"abs_y":65}' className="hover:text-indigo-400 transition-colors" href="#experience">Experience</a>
<a bis_size='{"x":1121,"y":13,"w":86,"h":38,"abs_x":1601,"abs_y":56}' className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-neutral-200 hover:bg-white/10 hover:border-white/20 transition-all" href="#contact">Contact</a>
</div>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="md:hidden text-neutral-300 hover:text-white" id="mobile-menu-btn">
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="hidden md:hidden border-t border-white/5 bg-neutral-950 absolute w-full px-6 py-4 flex-col gap-4 shadow-2xl" id="mobile-menu">
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="block py-2 hover:text-indigo-400 text-sm" href="#about">About</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="block py-2 hover:text-indigo-400 text-sm" href="#projects">Projects</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="block py-2 hover:text-indigo-400 text-sm" href="#experience">Experience</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="block py-2 hover:text-indigo-400 text-sm" href="#contact">Contact</a>
</div>
</nav>
<main bis_size='{"x":400,"y":0,"w":768,"h":3579,"abs_x":880,"abs_y":43}' className="max-w-3xl mx-auto px-6 pt-32 pb-24">
<section bis_size='{"x":424,"y":128,"w":720,"h":663,"abs_x":904,"abs_y":171}' className="flex flex-col justify-center min-h-[60vh] gap-6 mb-24 animate-fade-in">
<div bis_size='{"x":424,"y":238,"w":130,"h":26,"abs_x":904,"abs_y":281}' className="flex items-center gap-2 mb-2 w-fit px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
<span bis_size='{"x":437,"y":247,"w":8,"h":8,"abs_x":917,"abs_y":290}' className="relative flex h-2 w-2">
<span bis_size='{"x":437,"y":247,"w":8,"h":8,"abs_x":917,"abs_y":290}' className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span bis_size='{"x":437,"y":247,"w":8,"h":8,"abs_x":917,"abs_y":290}' className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span bis_size='{"x":453,"y":243,"w":88,"h":16,"abs_x":933,"abs_y":286}' className="text-[11px] font-medium text-blue-400 tracking-wide uppercase">Open to work</span>
</div>
<h1 bis_size='{"x":424,"y":296,"w":720,"h":216,"abs_x":904,"abs_y":339}' className="sm:text-5xl md:text-7xl bg-clip-text leading-[1.1] text-4xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-white via-white to-neutral-500" style={{}}>Full-Stack Engineer crafting <br bis_size='{"x":665,"y":360,"w":0,"h":87,"abs_x":1145,"abs_y":403}' className="hidden md:block"/> scalable solutions.</h1>
<p bis_size='{"x":424,"y":536,"w":576,"h":58,"abs_x":904,"abs_y":579}' className="text-lg text-neutral-400 max-w-xl leading-relaxed">
                I'm <span bis_size='{"x":455,"y":540,"w":48,"h":22,"abs_x":935,"abs_y":583}' className="text-neutral-100 font-medium">Meng</span>. I build accessible, pixel-perfect, and
                performant web applications using modern architecture.
            </p>
<div bis_size='{"x":424,"y":619,"w":720,"h":62,"abs_x":904,"abs_y":662}' className="flex flex-wrap gap-4 pt-4">
<a bis_size='{"x":424,"y":635,"w":140,"h":46,"abs_x":904,"abs_y":678}' className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-100 text-neutral-950 text-sm font-semibold hover:bg-white transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#projects">
                    View Projects
                </a>
<a bis_size='{"x":580,"y":635,"w":110,"h":46,"abs_x":1060,"abs_y":678}' className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-transparent border border-white/10 text-neutral-300 text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-all active:scale-95" href="mailto:email@example.com">
                    Email Me
                </a>
</div>
</section>
<section bis_size='{"x":424,"y":887,"w":720,"h":176,"abs_x":904,"abs_y":930}' className="mb-32 border-y border-white/5 py-10">
<p bis_size='{"x":424,"y":928,"w":720,"h":16,"abs_x":904,"abs_y":971}' className="text-xs font-mono text-neutral-500 mb-6 uppercase tracking-widest">Technologies</p>
<div bis_size='{"x":424,"y":968,"w":720,"h":54,"abs_x":904,"abs_y":1011}' className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div bis_size='{"x":424,"y":968,"w":168,"h":54,"abs_x":904,"abs_y":1011}' className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all cursor-default group">
<svg bis_size='{"x":441,"y":985,"w":20,"h":20,"abs_x":921,"abs_y":1028}' className="lucide lucide-code-2 text-neutral-500 group-hover:text-indigo-400 transition-colors w-5 h-5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<span bis_size='{"x":473,"y":985,"w":72,"h":20,"abs_x":953,"abs_y":1028}' className="text-sm font-medium text-neutral-200">React &amp; TS</span>
</div>
<div bis_size='{"x":608,"y":968,"w":168,"h":54,"abs_x":1088,"abs_y":1011}' className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all cursor-default group">
<svg bis_size='{"x":625,"y":985,"w":20,"h":20,"abs_x":1105,"abs_y":1028}' className="lucide lucide-smartphone text-neutral-500 group-hover:text-cyan-400 transition-colors w-5 h-5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span bis_size='{"x":657,"y":985,"w":84,"h":20,"abs_x":1137,"abs_y":1028}' className="text-sm font-medium text-neutral-200">React Native</span>
</div>
<div bis_size='{"x":792,"y":968,"w":168,"h":54,"abs_x":1272,"abs_y":1011}' className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all cursor-default group">
<svg bis_size='{"x":809,"y":985,"w":20,"h":20,"abs_x":1289,"abs_y":1028}' className="lucide lucide-server text-neutral-500 group-hover:text-blue-400 transition-colors w-5 h-5" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<span bis_size='{"x":841,"y":985,"w":48,"h":20,"abs_x":1321,"abs_y":1028}' className="text-sm font-medium text-neutral-200">Laravel</span>
</div>
<div bis_size='{"x":976,"y":968,"w":168,"h":54,"abs_x":1456,"abs_y":1011}' className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all cursor-default group">
<svg bis_size='{"x":993,"y":985,"w":20,"h":20,"abs_x":1473,"abs_y":1028}' className="lucide lucide-database text-neutral-500 group-hover:text-blue-400 transition-colors w-5 h-5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<span bis_size='{"x":1025,"y":985,"w":78,"h":20,"abs_x":1505,"abs_y":1028}' className="text-sm font-medium text-neutral-200">Spring Boot</span>
</div>
</div>
</section>
<section bis_size='{"x":424,"y":1191,"w":720,"h":272,"abs_x":904,"abs_y":1234}' className="mb-32 scroll-mt-24" id="about">
<h2 bis_size='{"x":424,"y":1191,"w":720,"h":32,"abs_x":904,"abs_y":1234}' className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
<span bis_size='{"x":424,"y":1191,"w":32,"h":32,"abs_x":904,"abs_y":1234}' className="bg-indigo-500/10 text-indigo-400 p-2 rounded-lg"><svg bis_size='{"x":432,"y":1199,"w":16,"h":16,"abs_x":912,"abs_y":1242}' className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                About Me
            </h2>
<div bis_size='{"x":424,"y":1255,"w":720,"h":208,"abs_x":904,"abs_y":1298}' className="prose prose-invert text-neutral-400 leading-8 max-w-none text-base">
<p bis_size='{"x":424,"y":1255,"w":720,"h":96,"abs_x":904,"abs_y":1298}' className="mb-4">
                    I am a developer who enjoys bridging the gap between complex backend logic and smooth frontend
                    interfaces. My journey involves building real-world applications using
                    <strong bis_size='{"x":424,"y":1293,"w":640,"h":51,"abs_x":904,"abs_y":1336}' className="text-neutral-200 font-medium">React TypeScript</strong> and
                    <strong bis_size='{"x":544,"y":1325,"w":89,"h":19,"abs_x":1024,"abs_y":1368}' className="text-neutral-200 font-medium">Spring Boot</strong>.
                </p>
<p bis_size='{"x":424,"y":1367,"w":720,"h":96,"abs_x":904,"abs_y":1410}'>
                    Currently, I focus on scalable architecture and improving my English proficiency to collaborate
                    effectively in international environments. My goal is to build software that solves actual problems
                    and helps businesses run more efficiently.
                </p>
</div>
</section>
<section bis_size='{"x":424,"y":1591,"w":720,"h":734,"abs_x":904,"abs_y":1634}' className="mb-32 scroll-mt-24" id="projects">
<div bis_size='{"x":424,"y":1591,"w":720,"h":36,"abs_x":904,"abs_y":1634}' className="flex items-baseline justify-between mb-10">
<h2 bis_size='{"x":424,"y":1591,"w":212,"h":32,"abs_x":904,"abs_y":1634}' className="text-xl font-semibold text-white flex items-center gap-3">
<span bis_size='{"x":424,"y":1591,"w":32,"h":32,"abs_x":904,"abs_y":1634}' className="bg-cyan-500/10 text-cyan-400 p-2 rounded-lg"><svg bis_size='{"x":432,"y":1599,"w":16,"h":16,"abs_x":912,"abs_y":1642}' className="lucide lucide-folder-open w-4 h-4" data-lucide="folder-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg></span>
                    Selected Projects
                </h2>
<span bis_size='{"x":1064,"y":1611,"w":79,"h":16,"abs_x":1544,"abs_y":1654}' className="text-xs font-mono text-neutral-600">2023 - 2024</span>
</div>
<div bis_size='{"x":424,"y":1667,"w":720,"h":658,"abs_x":904,"abs_y":1710}' className="grid gap-6">
<a bis_size='{"x":424,"y":1667,"w":720,"h":203,"abs_x":904,"abs_y":1710}' className="group block relative rounded-2xl border border-white/5 bg-neutral-900/40 p-6 md:p-8 hover:bg-neutral-900/80 hover:border-white/10 transition-all duration-300 hover:-translate-y-1" href="#">
<div bis_size='{"x":457,"y":1700,"w":654,"h":52,"abs_x":937,"abs_y":1743}' className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div bis_size='{"x":457,"y":1700,"w":248,"h":52,"abs_x":937,"abs_y":1743}'>
<h3 bis_size='{"x":457,"y":1700,"w":248,"h":28,"abs_x":937,"abs_y":1743}' className="text-lg font-semibold text-neutral-100 group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                                Digital Business Assistant
                                <svg bis_size='{"x":689,"y":1714,"w":16,"h":16,"abs_x":1169,"abs_y":1757}' className="lucide lucide-arrow-up-right w-4 h-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</h3>
<p bis_size='{"x":457,"y":1732,"w":248,"h":20,"abs_x":937,"abs_y":1775}' className="text-sm text-neutral-500 mt-1">SaaS Platform</p>
</div>
<div bis_size='{"x":991,"y":1700,"w":119,"h":26,"abs_x":1471,"abs_y":1743}' className="flex gap-2">
<span bis_size='{"x":991,"y":1700,"w":51,"h":26,"abs_x":1471,"abs_y":1743}' className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[11px] text-indigo-300 font-medium">React</span>
<span bis_size='{"x":1050,"y":1700,"w":60,"h":26,"abs_x":1530,"abs_y":1743}' className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-300 font-medium">Laravel</span>
</div>
</div>
<p bis_size='{"x":457,"y":1768,"w":654,"h":45,"abs_x":937,"abs_y":1811}' className="text-sm text-neutral-400 leading-relaxed mb-6">
                        A comprehensive business assistant for local shops featuring real-time inventory tracking, sales
                        management, and analytical dashboards.
                    </p>
</a>
<a bis_size='{"x":424,"y":1894,"w":720,"h":203,"abs_x":904,"abs_y":1937}' className="group block relative rounded-2xl border border-white/5 bg-neutral-900/40 p-6 md:p-8 hover:bg-neutral-900/80 hover:border-white/10 transition-all duration-300 hover:-translate-y-1" href="#">
<div bis_size='{"x":457,"y":1927,"w":654,"h":52,"abs_x":937,"abs_y":1970}' className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div bis_size='{"x":457,"y":1927,"w":241,"h":52,"abs_x":937,"abs_y":1970}'>
<h3 bis_size='{"x":457,"y":1927,"w":241,"h":28,"abs_x":937,"abs_y":1970}' className="text-lg font-semibold text-neutral-100 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                                E-Commerce Mobile App
                                <svg bis_size='{"x":682,"y":1941,"w":16,"h":16,"abs_x":1162,"abs_y":1984}' className="lucide lucide-arrow-up-right w-4 h-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</h3>
<p bis_size='{"x":457,"y":1959,"w":241,"h":20,"abs_x":937,"abs_y":2002}' className="text-sm text-neutral-500 mt-1">iOS &amp; Android</p>
</div>
<div bis_size='{"x":945,"y":1927,"w":165,"h":26,"abs_x":1425,"abs_y":1970}' className="flex gap-2">
<span bis_size='{"x":945,"y":1927,"w":88,"h":26,"abs_x":1425,"abs_y":1970}' className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-[11px] text-cyan-300 font-medium">React Native</span>
<span bis_size='{"x":1042,"y":1927,"w":68,"h":26,"abs_x":1522,"abs_y":1970}' className="px-2.5 py-1 rounded-md bg-neutral-800 border border-neutral-700 text-[11px] text-neutral-300 font-medium">FlashList</span>
</div>
</div>
<p bis_size='{"x":457,"y":1995,"w":654,"h":45,"abs_x":937,"abs_y":2038}' className="text-sm text-neutral-400 leading-relaxed mb-6">
                        High-performance mobile application featuring optimized infinite scrolling, complex filtering
                        logic, and local wishlist persistence.
                    </p>
</a>
<a bis_size='{"x":424,"y":2122,"w":720,"h":203,"abs_x":904,"abs_y":2165}' className="group block relative rounded-2xl border border-white/5 bg-neutral-900/40 p-6 md:p-8 hover:bg-neutral-900/80 hover:border-white/10 transition-all duration-300 hover:-translate-y-1" href="#">
<div bis_size='{"x":457,"y":2155,"w":654,"h":52,"abs_x":937,"abs_y":2198}' className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
<div bis_size='{"x":457,"y":2155,"w":205,"h":52,"abs_x":937,"abs_y":2198}'>
<h3 bis_size='{"x":457,"y":2155,"w":205,"h":28,"abs_x":937,"abs_y":2198}' className="text-lg font-semibold text-neutral-100 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                Modular Banking API
                                <svg bis_size='{"x":646,"y":2169,"w":16,"h":16,"abs_x":1126,"abs_y":2212}' className="lucide lucide-arrow-up-right w-4 h-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</h3>
<p bis_size='{"x":457,"y":2187,"w":205,"h":20,"abs_x":937,"abs_y":2230}' className="text-sm text-neutral-500 mt-1">Backend Infrastructure</p>
</div>
<div bis_size='{"x":935,"y":2155,"w":175,"h":26,"abs_x":1415,"abs_y":2198}' className="flex gap-2">
<span bis_size='{"x":935,"y":2155,"w":83,"h":26,"abs_x":1415,"abs_y":2198}' className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-300 font-medium">Spring Boot</span>
<span bis_size='{"x":1026,"y":2155,"w":84,"h":26,"abs_x":1506,"abs_y":2198}' className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[11px] text-indigo-300 font-medium">PostgreSQL</span>
</div>
</div>
<p bis_size='{"x":457,"y":2223,"w":654,"h":45,"abs_x":937,"abs_y":2266}' className="text-sm text-neutral-400 leading-relaxed mb-6">
                        Secure, layered architecture backend featuring JWT authentication, soft delete mechanisms, and
                        comprehensive auditing for high maintainability.
                    </p>
</a>
</div>
</section>
<section bis_size='{"x":424,"y":2453,"w":720,"h":553,"abs_x":904,"abs_y":2496}' className="mb-32 scroll-mt-24" id="experience">
<h2 bis_size='{"x":424,"y":2453,"w":720,"h":32,"abs_x":904,"abs_y":2496}' className="text-xl font-semibold text-white mb-10 flex items-center gap-3">
<span bis_size='{"x":424,"y":2453,"w":32,"h":32,"abs_x":904,"abs_y":2496}' className="bg-indigo-500/10 text-indigo-400 p-2 rounded-lg"><svg bis_size='{"x":432,"y":2461,"w":16,"h":16,"abs_x":912,"abs_y":2504}' className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg></span>
                Experience
            </h2>
<div bis_size='{"x":436,"y":2525,"w":708,"h":481,"abs_x":916,"abs_y":2568}' className="relative border-l border-white/10 ml-3 space-y-12">
<div bis_size='{"x":437,"y":2525,"w":707,"h":128,"abs_x":917,"abs_y":2568}' className="relative pl-10 group">
<div bis_size='{"x":432,"y":2533,"w":10,"h":10,"abs_x":912,"abs_y":2576}' className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-neutral-950 border border-neutral-600 group-hover:border-indigo-400 group-hover:bg-indigo-400 transition-all">
</div>
<div bis_size='{"x":477,"y":2525,"w":667,"h":28,"abs_x":957,"abs_y":2568}' className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
<h3 bis_size='{"x":477,"y":2525,"w":179,"h":28,"abs_x":957,"abs_y":2568}' className="text-lg font-medium text-neutral-200 group-hover:text-indigo-400 transition-colors">
                            Full-Stack Developer</h3>
<span bis_size='{"x":1077,"y":2530,"w":66,"h":24,"abs_x":1557,"abs_y":2573}' className="text-xs font-mono text-neutral-500 bg-white/5 px-2 py-1 rounded">Present</span>
</div>
<p bis_size='{"x":477,"y":2562,"w":667,"h":20,"abs_x":957,"abs_y":2605}' className="text-sm text-neutral-500 mb-4">Freelance &amp; Personal</p>
<p bis_size='{"x":477,"y":2598,"w":667,"h":56,"abs_x":957,"abs_y":2641}' className="text-sm text-neutral-400 leading-7">
                        Building apps using React, Laravel, and MySQL with Docker deployment. Translating client
                        requirements into functional, scalable features.
                    </p>
</div>
<div bis_size='{"x":437,"y":2702,"w":707,"h":128,"abs_x":917,"abs_y":2745}' className="relative pl-10 group">
<div bis_size='{"x":432,"y":2710,"w":10,"h":10,"abs_x":912,"abs_y":2753}' className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-neutral-950 border border-neutral-600 group-hover:border-cyan-400 group-hover:bg-cyan-400 transition-all">
</div>
<div bis_size='{"x":477,"y":2702,"w":667,"h":28,"abs_x":957,"abs_y":2745}' className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
<h3 bis_size='{"x":477,"y":2702,"w":150,"h":28,"abs_x":957,"abs_y":2745}' className="text-lg font-medium text-neutral-200 group-hover:text-cyan-400 transition-colors">
                            Mobile Developer</h3>
<span bis_size='{"x":1048,"y":2706,"w":95,"h":24,"abs_x":1528,"abs_y":2749}' className="text-xs font-mono text-neutral-500 bg-white/5 px-2 py-1 rounded">2022 - 2023</span>
</div>
<p bis_size='{"x":477,"y":2738,"w":667,"h":20,"abs_x":957,"abs_y":2781}' className="text-sm text-neutral-500 mb-4">Independent Contractor</p>
<p bis_size='{"x":477,"y":2774,"w":667,"h":56,"abs_x":957,"abs_y":2817}' className="text-sm text-neutral-400 leading-7">
                        Developed React Native e-commerce solutions. Focused on smooth animations, state management, and
                        API integration.
                    </p>
</div>
<div bis_size='{"x":437,"y":2878,"w":707,"h":128,"abs_x":917,"abs_y":2921}' className="relative pl-10 group">
<div bis_size='{"x":432,"y":2886,"w":10,"h":10,"abs_x":912,"abs_y":2929}' className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-neutral-950 border border-neutral-600 group-hover:border-blue-400 group-hover:bg-blue-400 transition-all">
</div>
<div bis_size='{"x":477,"y":2878,"w":667,"h":28,"abs_x":957,"abs_y":2921}' className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
<h3 bis_size='{"x":477,"y":2878,"w":155,"h":28,"abs_x":957,"abs_y":2921}' className="text-lg font-medium text-neutral-200 group-hover:text-blue-400 transition-colors">
                            Backend Engineer</h3>
<span bis_size='{"x":1048,"y":2883,"w":95,"h":24,"abs_x":1528,"abs_y":2926}' className="text-xs font-mono text-neutral-500 bg-white/5 px-2 py-1 rounded">2021 - 2022</span>
</div>
<p bis_size='{"x":477,"y":2915,"w":667,"h":20,"abs_x":957,"abs_y":2958}' className="text-sm text-neutral-500 mb-4">Project Based</p>
<p bis_size='{"x":477,"y":2951,"w":667,"h":56,"abs_x":957,"abs_y":2994}' className="text-sm text-neutral-400 leading-7">
                        Designed RESTful APIs using Spring Boot. Implemented security protocols and role-based access
                        controls.
                    </p>
</div>
</div>
</section>
<section bis_size='{"x":424,"y":3135,"w":720,"h":348,"abs_x":904,"abs_y":3178}' className="pt-16 border-t border-white/5" id="contact">
<div bis_size='{"x":424,"y":3200,"w":720,"h":153,"abs_x":904,"abs_y":3243}' className="grid md:grid-cols-2 gap-12 items-start">
<div bis_size='{"x":424,"y":3200,"w":336,"h":153,"abs_x":904,"abs_y":3243}'>
<h2 bis_size='{"x":424,"y":3200,"w":336,"h":28,"abs_x":904,"abs_y":3243}' className="text-xl font-semibold text-white mb-3">Let's work together</h2>
<p bis_size='{"x":424,"y":3240,"w":320,"h":45,"abs_x":904,"abs_y":3283}' className="text-sm text-neutral-500 mb-8 max-w-xs leading-relaxed">
                        Open for full-stack opportunities. Feel free to reach out to discuss your next project.
                    </p>
<div bis_size='{"x":424,"y":3317,"w":336,"h":36,"abs_x":904,"abs_y":3360}' className="flex gap-4">
<a bis_size='{"x":424,"y":3317,"w":36,"h":36,"abs_x":904,"abs_y":3360}' className="p-2 rounded-lg bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<svg bis_size='{"x":432,"y":3325,"w":20,"h":20,"abs_x":912,"abs_y":3368}' className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a bis_size='{"x":476,"y":3317,"w":36,"h":36,"abs_x":956,"abs_y":3360}' className="p-2 rounded-lg bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<svg bis_size='{"x":484,"y":3325,"w":20,"h":20,"abs_x":964,"abs_y":3368}' className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a bis_size='{"x":528,"y":3317,"w":36,"h":36,"abs_x":1008,"abs_y":3360}' className="p-2 rounded-lg bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-all" href="mailto:your@email.com">
<svg bis_size='{"x":536,"y":3325,"w":20,"h":20,"abs_x":1016,"abs_y":3368}' className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
<div bis_size='{"x":808,"y":3200,"w":336,"h":44,"abs_x":1288,"abs_y":3243}' className="md:text-right">
<p bis_size='{"x":808,"y":3200,"w":336,"h":16,"abs_x":1288,"abs_y":3243}' className="text-xs text-neutral-600 mb-2 uppercase tracking-widest">Location</p>
<p bis_size='{"x":808,"y":3224,"w":336,"h":20,"abs_x":1288,"abs_y":3267}' className="text-sm text-neutral-300 font-medium">Asia / Global Remote</p>
</div>
</div>
<div bis_size='{"x":424,"y":3433,"w":720,"h":49,"abs_x":904,"abs_y":3476}' className="mt-20 pt-8 border-t border-white/5 text-[11px] text-neutral-600 flex justify-between uppercase tracking-wider font-medium">
<span bis_size='{"x":424,"y":3466,"w":82,"h":16,"abs_x":904,"abs_y":3509}'>© 2024 Meng</span>
<span bis_size='{"x":1011,"y":3466,"w":132,"h":16,"abs_x":1491,"abs_y":3509}'>Designed with Code</span>
</div>
</section>
</main>

<div className="ginger-module-highlighter ginger-module-highlighter-ghost" style={{height: '216px', width: '712px', position: 'absolute', zIndex: '2147483646', top: '296.5px', left: '424px', color: 'rgba(0, 0, 0, 0)', borderRadius: '0px', border: '0px none rgba(0, 0, 0, 0)', boxSizing: 'border-box', padding: '0px', margin: '0px', fontFamily: 'Inter, sans-serif', direction: 'ltr', fontSize: '72px', textAlign: 'start', letterSpacing: '-3.6px', fontWeight: '600', whiteSpace: 'pre-wrap', overflowWrap: 'break-word', lineHeight: '72px', display: 'block'}}></div>
    </>
  );
}
