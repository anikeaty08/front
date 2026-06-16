import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Google Sans Flex', 'sans-serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
},
colors: {
background: '#000208',
surface: '#0a0a0a',
primary: {
400: '#a78bfa',
500: '#8b5cf6',
600: '#7c3aed',
}
},
animation: {
'scan': 'scan 4s linear infinite',
'gradient-text': 'gradient-text 8s ease infinite',
'orb-1': 'orb-1 15s ease-in-out infinite alternate',
'orb-2': 'orb-2 18s ease-in-out infinite alternate-reverse',
'orb-3': 'orb-3 20s ease-in-out infinite alternate',
},
keyframes: {
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(400%)' },
},
'gradient-text': {
'0%, 100%': { backgroundPosition: '0% 50%' },
'50%': { backgroundPosition: '100% 50%' },
},
'orb-1': {
'0%': { transform: 'translate(0, 0) scale(1)' },
'50%': { transform: 'translate(5%, 5%) scale(1.1)' },
'100%': { transform: 'translate(-5%, -5%) scale(0.95)' },
},
'orb-2': {
'0%': { transform: 'translate(0, 0) scale(1)' },
'50%': { transform: 'translate(-5%, 10%) scale(1.05)' },
'100%': { transform: 'translate(5%, -10%) scale(1)' },
},
'orb-3': {
'0%': { transform: 'translate(0, 0) scale(1)' },
'50%': { transform: 'translate(10%, -5%) scale(0.9)' },
'100%': { transform: 'translate(-10%, 5%) scale(1.1)' },
}
}
}
}
}



function initTheme() {
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark');
} else {
document.documentElement.classList.remove('dark');
}
}
initTheme();
function toggleTheme() {
if (document.documentElement.classList.contains('dark')) {
document.documentElement.classList.remove('dark');
localStorage.theme = 'light';
} else {
document.documentElement.classList.add('dark');
localStorage.theme = 'dark';
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Reveal Animation Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

            // Navbar Scroll Effect
            window.addEventListener('scroll', () => {
                const nav = document.getElementById('navbar');
                if (window.scrollY > 50) {
                    nav.classList.add('py-1');
                    nav.classList.remove('top-6');
                    nav.classList.add('top-2');
                } else {
                    nav.classList.remove('py-1');
                    nav.classList.add('top-6');
                    nav.classList.remove('top-2');
                }
            });
            
            // Add slight parallax to floating elements
            document.addEventListener('mousemove', (e) => {
                const cards = document.querySelectorAll('.hover-glow');
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--x', `${x}px`);
                    card.style.setProperty('--y', `${y}px`);
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<a className="sr-only focus:not-sr-only text-white bg-primary-600 p-2 text-center block font-sans" href="#content">Skip to content</a>
<div className="bg-black border-b border-white/10 px-4 py-2.5 text-center relative z-50 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
<p className="text-xs font-medium text-neutral-300 tracking-wide flex items-center justify-center gap-2 font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
            Scope Technologies Acquires Cloud Codes Expanding Authentication Ecosystem
        </p>
</div>

<header className="fixed w-full z-50 transition-all duration-300" id="navbar">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer z-10 group">
<div className="w-10 h-10 relative flex items-center justify-center rounded-full logo-gradient shadow-lg shadow-indigo-900/20 group-hover:scale-105 transition-transform duration-500">
<svg className="text-white drop-shadow-md" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C13.8214 22 15.5292 21.5126 17 20.657L20.2929 23.9497L21.7071 22.5355L18.4144 19.2428C19.9678 17.4304 20.9161 15.1118 20.9959 12.5997L15.4243 14.886L12.5355 12L14.8218 6.42841C14.0044 6.15414 13.0381 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C12.8943 18 13.7409 17.8048 14.5097 17.4526L18.9174 21.8603C17.0768 23.218 14.6548 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12H22C22 6.47715 17.5228 2 12 2Z" fill="white" fillOpacity="0.95" fill-rule="evenodd"></path>
<circle cx="12" cy="12" fill="white" fillOpacity="0.95" r="3.5"></circle>
</svg>
</div>
<span className="text-2xl tracking-tight text-neutral-900 dark:text-white font-instrument-serif font-normal">QSE</span>
</div>

<nav className="hidden lg:flex items-center gap-1 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-2xl px-2 py-1.5 rounded-full border border-neutral-200/50 dark:border-white/10 shadow-sm dark:shadow-black/40">
<a className="px-4 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-all font-sans" href="#">Home</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-all font-sans" href="#">About Us</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-all font-sans" href="#">Products</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-all font-sans" href="#">News</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-all font-sans" href="#">Resources</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-all font-sans" href="#">Investors</a>
</nav>

<div className="flex items-center gap-5 z-10">
<button aria-label="Toggle Dark Mode" className="w-9 h-9 rounded-full bg-white/50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-white dark:hover:bg-white/10 transition-all focus:outline-none" onclick="toggleTheme()">
<iconify-icon className="hidden dark:block text-neutral-300 hover:text-white transition-colors" icon="solar:sun-2-bold" width="18"></iconify-icon>
<iconify-icon className="block dark:hidden text-neutral-600" icon="solar:moon-bold" width="18"></iconify-icon>
</button>
<button className="hidden sm:block text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-white transition-colors font-sans">Login</button>
<button className="relative overflow-hidden group bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2 rounded-full text-xs font-semibold transition-all shadow-lg hover:scale-105 border border-transparent dark:border-white/20">
<span className="relative z-10 font-sans">Get Started</span>
</button>
</div>
</div>
</header>

<main className="flex flex-col text-center max-w-7xl z-10 mr-auto ml-auto pt-48 pr-6 pb-20 pl-6 relative items-center" id="content">

<div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]">
<div className="absolute inset-0 grid-bg opacity-30 dark:opacity-40 mask-image:radial-gradient(circle_at_center,black_30%,transparent_80%)"></div>

<div className="absolute top-[-10%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-indigo-500/20 dark:bg-indigo-600/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-orb-1"></div>
<div className="absolute top-[5%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-purple-500/20 dark:bg-purple-500/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-orb-2"></div>
<div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-blue-500/20 dark:bg-blue-600/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-orb-3"></div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 dark:bg-white/5 border border-neutral-200 dark:border-white/10 mb-10 reveal shadow-sm backdrop-blur-md group cursor-default transition-colors active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 tracking-wide uppercase font-sans">New Era of Security</span>
</div>
<h1 className="dark:text-white leading-[1.05] reveal delay-100 active md:text-[5.5rem] text-6xl font-normal text-neutral-900 tracking-tight font-instrument-serif max-w-5xl mb-8">
            Quantum Security <br className=""/>
<span className="font-normal text-white font-instrument-serif drop-shadow-sm">Simplified &amp; Scalable</span>
</h1>
<p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed font-normal reveal delay-200 active font-sans">
            Future-proof your business with encryption that stands the test of time. Safeguard your data with true randomness resistant to quantum attacks.
        </p>
<div className="flex items-center gap-4 reveal delay-300 mb-24 active">
<button className="group relative bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-full text-sm font-semibold shadow-xl transition-all hover:scale-105 overflow-hidden">
<span className="relative z-10 flex items-center gap-2 font-sans">Explore Demo <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon></span>
</button>
<button className="bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10 px-8 py-3 rounded-full text-sm font-medium backdrop-blur-sm transition-all hover:scale-105 shadow-sm font-sans">
                Learn More
            </button>
</div>

<div className="w-full max-w-5xl mx-auto relative reveal delay-500 group active">

<div className="absolute -inset-1 bg-gradient-to-b from-indigo-500/20 to-transparent opacity-50 blur-2xl rounded-2xl group-hover:opacity-70 transition-opacity duration-1000 -z-10"></div>
<div className="relative glass-panel rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[2/1] flex flex-col shadow-2xl ring-1 ring-black/5 dark:ring-white/10">

<div className="h-10 border-b border-neutral-200/50 dark:border-white/5 flex items-center justify-between px-4 bg-white/40 dark:bg-black/40 backdrop-blur-md z-10">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
</div>
<div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono tracking-wide font-sans">qse-secure-dashboard</div>
<div className="w-10"></div> 
</div>

<div className="flex-1 p-6 flex gap-6 relative overflow-hidden bg-neutral-50/30 dark:bg-black/20">

<div className="w-48 hidden md:flex flex-col gap-3 border-r border-neutral-200/50 dark:border-white/5 pr-6">
<div className="h-9 w-full bg-white dark:bg-white/5 rounded-lg border border-neutral-200 dark:border-white/10 flex items-center px-3 gap-3 shadow-sm">
<iconify-icon className="text-indigo-600 dark:text-indigo-400" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="text-xs text-neutral-900 dark:text-white font-medium font-sans">Encryption Status</span>
</div>
<div className="h-9 w-full bg-transparent hover:bg-white/50 dark:hover:bg-white/5 rounded-lg flex items-center px-3 gap-3 transition-colors group/item cursor-pointer">
<iconify-icon className="text-neutral-500 group-hover/item:text-neutral-700 dark:group-hover/item:text-neutral-300 transition-colors" icon="solar:database-linear" width="18"></iconify-icon>
<span className="text-xs text-neutral-500 dark:text-neutral-400 group-hover/item:text-neutral-700 dark:group-hover/item:text-neutral-200 transition-colors font-sans">Data Storage</span>
</div>
<div className="h-9 w-full bg-transparent hover:bg-white/50 dark:hover:bg-white/5 rounded-lg flex items-center px-3 gap-3 transition-colors group/item cursor-pointer">
<iconify-icon className="text-neutral-500 group-hover/item:text-neutral-700 dark:group-hover/item:text-neutral-300 transition-colors" icon="solar:key-linear" width="18"></iconify-icon>
<span className="text-xs text-neutral-500 dark:text-neutral-400 group-hover/item:text-neutral-700 dark:group-hover/item:text-neutral-200 transition-colors font-sans">Entropy Keys</span>
</div>
<div className="mt-auto p-4 rounded-xl bg-white/50 dark:bg-[#0a0a0a]/50 border border-neutral-200 dark:border-white/5 relative overflow-hidden">
<div className="relative z-10">
<div className="flex justify-between items-center mb-2">
<div className="text-xs font-medium text-neutral-600 dark:text-neutral-400 font-sans">Health</div>
<div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium font-sans">100%</div>
</div>
<div className="h-1.5 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[100%] bg-emerald-500 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col gap-6">
<div className="flex justify-between items-end">
<div className="text-left">
<h3 className="text-lg font-medium text-neutral-900 dark:text-white font-heading tracking-tight font-sans">Security Overview</h3>
<p className="text-xs text-neutral-500 font-sans">Real-time quantum threat monitoring</p>
</div>
<div className="flex gap-2">
<span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 text-xs font-medium flex items-center gap-1.5 font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Secure
                                </span>
</div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm rounded-xl p-4 border border-neutral-200 dark:border-white/5 shadow-sm group/card hover:border-indigo-500/30 transition-all duration-300">
<div className="text-xs font-medium text-neutral-500 mb-1 font-sans">Entropy Gen</div>
<div className="text-2xl text-neutral-900 dark:text-white tracking-tight font-instrument-serif font-normal">99.9%</div>
</div>
<div className="bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm rounded-xl p-4 border border-neutral-200 dark:border-white/5 shadow-sm group/card hover:border-indigo-500/30 transition-all duration-300">
<div className="text-xs font-medium text-neutral-500 mb-1 font-sans">Threats Blocked</div>
<div className="text-2xl text-neutral-900 dark:text-white tracking-tight font-instrument-serif font-normal">0</div>
</div>
<div className="bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm rounded-xl p-4 border border-neutral-200 dark:border-white/5 shadow-sm group/card hover:border-indigo-500/30 transition-all duration-300">
<div className="text-xs font-medium text-neutral-500 mb-1 font-sans">Encryption</div>
<div className="text-2xl text-neutral-900 dark:text-white tracking-tight font-instrument-serif font-normal">256-bit</div>
</div>
</div>

<div className="flex-1 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm rounded-xl border border-neutral-200 dark:border-white/5 p-4 relative overflow-hidden shadow-sm">

<div className="absolute inset-0 z-0 opacity-20 dark:opacity-10" style={{backgroundImage: 'linear-gradient(var(--tw-colors-neutral-300) 1px, transparent 1px), linear-gradient(90deg, var(--tw-colors-neutral-300) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<svg className="w-full h-full absolute inset-0 bottom-0 opacity-50" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 30 Q 10 25 20 28 T 40 20 T 60 25 T 80 15 T 100 20 V 40 H 0 Z" fill="url(#graphGradient)"></path>
<defs>
<lineargradient id="graphGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
<svg className="w-full h-full absolute inset-0 bottom-0" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 30 Q 10 25 20 28 T 40 20 T 60 25 T 80 15 T 100 20" fill="none" stroke="#a78bfa" strokeWidth="0.5"></path>
</svg>

<div className="absolute top-0 bottom-0 w-[1px] bg-indigo-400/50 shadow-[0_0_15px_rgba(129,140,248,0.5)] animate-[scan_4s_linear_infinite] left-0" style={{animationName: 'slideRight', animationDuration: '6s', animationIterationCount: 'infinite', animationTimingFunction: 'linear'}}></div>
<div className="relative z-10 flex justify-between text-xs text-neutral-400 font-mono mt-auto pt-16">
<span className="font-sans">00:00</span>
<span className="font-sans">06:00</span>
<span className="font-sans">12:00</span>
<span className="font-sans">18:00</span>
<span className="font-sans">24:00</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 w-full reveal delay-100">
<p className="text-xs text-neutral-500 mb-8 font-medium tracking-wide uppercase font-sans">Trusted by Industry Leaders</p>
<div className="flex flex-wrap justify-center gap-12 opacity-50 hover:opacity-100 transition-opacity duration-500 text-neutral-800 dark:text-neutral-400">
<div className="text-xl dark:hover:text-white transition-colors font-instrument-serif font-normal">C5</div>
<div className="text-xl dark:hover:text-white transition-colors font-instrument-serif font-normal">C6</div>
<div className="text-xl tracking-tight dark:hover:text-white transition-colors font-instrument-serif font-normal">NNP LOGO</div>
<div className="text-xl flex items-center gap-2 dark:hover:text-white transition-colors font-instrument-serif font-normal"><iconify-icon icon="solar:mountains-bold" width="18"></iconify-icon> First Majestic</div>
<div className="text-xl dark:hover:text-white transition-colors font-instrument-serif font-normal">C1</div>
<div className="text-xl dark:hover:text-white transition-colors font-instrument-serif font-normal">C2</div>
</div>
</div>
</main>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl text-neutral-900 dark:text-white mb-4 tracking-tight font-instrument-serif font-normal">QSE Products</h2>
<p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed font-sans">
                Safeguard your data with storage that cannot be over-encrypted by ransomware. QSE employs true randomness in its encryption process, making it resistant to both classical and quantum attacks.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl flex flex-col hover-glow transition-all duration-500 reveal hover:-translate-y-1" style={{-X: '1277px', -Y: '-1754.296875px'}}>
<div className="w-12 h-12 bg-neutral-100 dark:bg-white/5 rounded-xl flex items-center justify-center text-indigo-600 dark:text-white mb-6 border border-neutral-200 dark:border-white/10 shadow-sm">
<iconify-icon icon="solar:water-drops-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3 font-heading tracking-tight font-sans">Entropy as a <br/> Service</h3>
<p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 flex-grow font-sans">
                    Proprietary Quantum Entropy Delivery system that allows customers to generate and use quantum resilient entropy directly form our specialized NIST certified hardware using standard REST-APIs.
                </p>
<button className="group w-fit flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-white transition-colors font-sans">
                    Explore EaaS <iconify-icon className="group-hover:translate-x-1 transition-transform text-indigo-500" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col hover-glow transition-all duration-500 reveal delay-100 relative overflow-hidden ring-1 ring-indigo-500/10 dark:ring-white/10 hover:-translate-y-1" style={{-X: '858.3359375px', -Y: '-1754.296875px'}}>
<div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent opacity-100"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 bg-neutral-100 dark:bg-white/5 rounded-xl flex items-center justify-center text-blue-600 dark:text-white mb-6 border border-neutral-200 dark:border-white/10 shadow-sm">
<iconify-icon icon="solar:cloud-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3 font-heading tracking-tight font-sans">Quantum Proof  Cloud Storage</h3>
<p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 flex-grow font-sans">
                        Provides data encryption and decentralised storage solutions designed to ensure secure communication and information protection maintained within the advanced cloud ecosystem.
                    </p>
<button className="w-fit px-5 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-xs font-semibold transition-all hover:scale-105 shadow-md font-sans">
                        Explore More
                    </button>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col hover-glow transition-all duration-500 reveal delay-200 hover:-translate-y-1" style={{-X: '439.671875px', -Y: '-1754.296875px'}}>
<div className="w-12 h-12 bg-neutral-100 dark:bg-white/5 rounded-xl flex items-center justify-center text-indigo-600 dark:text-white mb-6 border border-neutral-200 dark:border-white/10 shadow-sm">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3 font-heading tracking-tight font-sans">Quantum <br/> Preparedness</h3>
<p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 flex-grow font-sans">
                    A full Risk Management Framework (RMF) process with scoring, helping organizations assess and prepare for quantum security threats.
                </p>
<button className="group w-fit flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-white transition-colors font-sans">
                    Explore QPA <iconify-icon className="group-hover:translate-x-1 transition-transform text-indigo-500" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 reveal">
<div className="glass-panel rounded-[2rem] overflow-hidden border border-neutral-200 dark:border-white/10 p-1 shadow-xl">
<div className="bg-neutral-900 dark:bg-[#050505] rounded-[1.75rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden text-white border border-white/5">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="flex-1 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
<iconify-icon className="text-neutral-300" icon="solar:medal-star-linear"></iconify-icon>
<span className="text-xs font-medium text-neutral-200 tracking-wide font-sans">Certified Security</span>
</div>
<h2 className="text-3xl md:text-4xl text-white mb-6 tracking-tight font-instrument-serif font-normal">CSCC Level 2 Certification Achieved</h2>
<p className="text-sm text-neutral-400 leading-relaxed mb-10 font-normal max-w-xl font-sans">
                        We are proud to announce that our company has successfully achieved CSCC Level 2 Certification, demonstrating our ongoing commitment to strong cybersecurity standards and data protection. This certification reflects our dedication to maintaining secure systems, safeguarding client information, and following industry-approved best practices.
                    </p>
<div className="flex gap-6 items-center">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-neutral-900 bg-neutral-800 flex items-center justify-center text-xs text-white shadow-sm font-sans">IT</div>
<div className="w-10 h-10 rounded-full border-2 border-neutral-900 bg-neutral-700 flex items-center justify-center text-xs text-white shadow-sm font-sans">SC</div>
<div className="w-10 h-10 rounded-full border-2 border-neutral-900 bg-neutral-600 flex items-center justify-center text-xs text-white shadow-sm font-sans">QA</div>
</div>
<div className="h-10 w-px bg-white/10"></div>
<div className="flex flex-col justify-center">
<span className="text-sm font-medium text-white font-sans">Verified Excellence</span>
<span className="text-xs text-neutral-500 font-sans">Audited 2025</span>
</div>
</div>
</div>
<div className="relative flex-shrink-0">
<div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center relative bg-white/5 backdrop-blur-xl shadow-2xl">
<div className="absolute inset-4 border border-dashed border-white/20 rounded-full animate-[spin_15s_linear_infinite]"></div>
<div className="text-center relative z-10">
<div className="w-14 h-14 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
<iconify-icon className="text-neutral-900" icon="solar:shield-check-bold" width="28"></iconify-icon>
</div>
<div className="text-2xl text-white tracking-tight font-instrument-serif font-normal">Level 2</div>
<div className="text-xs text-neutral-400 uppercase tracking-widest mt-1 font-medium font-sans">Certified</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<h2 className="text-3xl md:text-4xl text-neutral-900 dark:text-white text-center mb-20 tracking-tight font-instrument-serif font-normal">Competitive Advantages</h2>
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-12 order-2 md:order-1 reveal">

<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:border-neutral-300 dark:group-hover:border-white/20 transition-all duration-300 shadow-sm">
<iconify-icon className="text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-neutral-900 dark:text-white mb-2 tracking-tight font-sans">Innovative</h4>
<p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                            Harness the power of authentic, mathematically PROVEN entropy—designed to make your systems quantum-resilient from day one. No patchwork. No rip &amp; replace.
                        </p>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:border-neutral-300 dark:group-hover:border-white/20 transition-all duration-300 shadow-sm">
<iconify-icon className="text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" icon="solar:lock-password-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-neutral-900 dark:text-white mb-2 tracking-tight font-sans">Secure</h4>
<p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                            Unlike traditional randomness, our entropy is verifiable and tamper-proof—giving you the cryptographic strength to withstand both classical and quantum threats.
                        </p>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:border-neutral-300 dark:group-hover:border-white/20 transition-all duration-300 shadow-sm">
<iconify-icon className="text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-neutral-900 dark:text-white mb-2 tracking-tight font-sans">Scalability</h4>
<p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 font-sans">
                            Deploy instantly across your existing stack. No hardware overhaul. No delays. Just plug, play, and scale securely.
                        </p>
<a className="text-xs font-semibold text-neutral-900 dark:text-white hover:opacity-70 transition-opacity flex items-center gap-1 font-sans" href="#">Get Started <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>

<div className="order-1 md:order-2 relative reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent blur-3xl rounded-full -z-10"></div>
<div className="glass-panel rounded-3xl border border-neutral-200 dark:border-white/10 p-2 relative shadow-2xl">

<div className="bg-white dark:bg-[#050505] rounded-[1.5rem] overflow-hidden h-[450px] relative border border-neutral-100 dark:border-white/5 shadow-inner">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
<div className="w-24 h-24 bg-neutral-900 dark:bg-white rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl relative group cursor-pointer hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-white dark:text-neutral-900 relative z-10" icon="solar:box-linear" width="40"></iconify-icon>
</div>
<div className="text-sm font-medium text-neutral-900 dark:text-white tracking-tight font-sans">Quantum Core Active</div>
<div className="text-xs text-neutral-500 mt-1 font-mono font-sans">v.2.4.0-stable</div>
</div>

<div className="absolute top-12 right-10 p-3 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-xl shadow-sm animate-[orb-1_10s_ease-in-out_infinite]">
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
<span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 font-sans">Node 1 Connected</span>
</div>
<div className="h-1 bg-neutral-100 dark:bg-neutral-800 w-24 rounded-full overflow-hidden"><div className="w-full h-full bg-emerald-500"></div></div>
</div>
<div className="absolute bottom-12 left-10 p-3 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-xl shadow-sm animate-[orb-2_12s_ease-in-out_infinite]">
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
<span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 font-sans">Generating Entropy</span>
</div>
<div className="font-mono text-xs text-neutral-500 tracking-wider font-sans">928374...A8B2</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white dark:bg-[#050505] border-y border-neutral-200 dark:border-white/5 relative transition-colors duration-500">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl text-neutral-900 dark:text-white mb-4 tracking-tight font-instrument-serif font-normal">Quantum Computing Risks</h2>
<p className="text-sm text-neutral-600 dark:text-neutral-400 font-normal font-sans">
                        These imminent threats underscore the need for proactive efforts in developing quantum-resistant encryption and cybersecurity strategies.
                    </p>
</div>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors"><iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon></button>
<button className="w-10 h-10 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center text-white dark:text-neutral-900 hover:scale-105 shadow-md transition-all"><iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon></button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200/50 dark:border-white/5 p-8 rounded-3xl hover:border-neutral-300 dark:hover:border-white/10 transition-colors group reveal relative overflow-hidden">
<div className="w-12 h-12 bg-white dark:bg-white/5 rounded-xl flex items-center justify-center text-neutral-900 dark:text-white mb-8 border border-neutral-200 dark:border-white/10 group-hover:scale-105 transition-transform shadow-sm">
<iconify-icon icon="solar:lock-unlocked-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3 font-heading tracking-tight font-sans">Breaking Current Encryption</h3>
<p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                        Quantum computers could break widely used encryption algorithms like RSA and ECC, rendering current secure communications vulnerable. This threatens everything from online banking to national security systems.
                    </p>
</div>

<div className="bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200/50 dark:border-white/5 p-8 rounded-3xl hover:border-neutral-300 dark:hover:border-white/10 transition-colors group reveal delay-100 relative overflow-hidden">
<div className="w-12 h-12 bg-white dark:bg-white/5 rounded-xl flex items-center justify-center text-neutral-900 dark:text-white mb-8 border border-neutral-200 dark:border-white/10 group-hover:scale-105 transition-transform shadow-sm">
<iconify-icon icon="solar:danger-triangle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3 font-heading tracking-tight font-sans">Invalidating Message Authentication</h3>
<p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                        Quantum capabilities can undermine message authentication by forging digital signatures or bypassing hashing algorithms. This puts data integrity and source verification at risk, opening doors for fraud.
                    </p>
</div>

<div className="bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200/50 dark:border-white/5 p-8 rounded-3xl hover:border-neutral-300 dark:hover:border-white/10 transition-colors group reveal delay-200 relative overflow-hidden">
<div className="w-12 h-12 bg-white dark:bg-white/5 rounded-xl flex items-center justify-center text-neutral-900 dark:text-white mb-8 border border-neutral-200 dark:border-white/10 group-hover:scale-105 transition-transform shadow-sm">
<iconify-icon icon="solar:shield-cross-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3 font-heading tracking-tight font-sans">Eroding Trust in Secure System</h3>
<p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                        The uncertainty around when quantum computers will reach full cryptographic power creates distrust. Without proactive mitigation, critical systems like healthcare and defense may become compromised.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 mb-24">
<div className="reveal">
<h2 className="text-4xl text-neutral-900 dark:text-white mb-6 tracking-tight font-instrument-serif font-normal">Quantum Computing  <br/><span className="text-neutral-400 dark:text-neutral-500 font-instrument-serif font-normal">Market Trend</span></h2>
<p className="text-sm text-neutral-600 dark:text-neutral-400 mb-10 max-w-md font-sans">
                    Projected Growth of Quantum Computing Incident Threats (2024-2030). The gap between attack capability and defense readiness is widening.
                </p>
<button className="bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white px-8 py-3 rounded-full text-sm font-semibold shadow-sm transition-all hover:bg-neutral-50 dark:hover:bg-white/10 font-sans">
                    View Full Report
                </button>
</div>
<div className="bg-neutral-50 dark:bg-[#0a0a0a] rounded-3xl p-8 border border-neutral-200/50 dark:border-white/5 flex items-end justify-between relative h-80 reveal delay-100">

<div className="absolute inset-x-8 top-8 bottom-8 flex flex-col justify-between pointer-events-none">
<div className="h-px bg-neutral-200 dark:bg-white/5 w-full"></div>
<div className="h-px bg-neutral-200 dark:bg-white/5 w-full"></div>
<div className="h-px bg-neutral-200 dark:bg-white/5 w-full"></div>
<div className="h-px bg-neutral-200 dark:bg-white/5 w-full"></div>
</div>

<div className="w-12 bg-neutral-200 dark:bg-white/5 rounded-t-sm h-[20%] relative group transition-all duration-300 hover:bg-neutral-300 dark:hover:bg-white/10"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans">2024</div></div>
<div className="w-12 bg-neutral-200 dark:bg-white/5 rounded-t-sm h-[30%] relative group transition-all duration-300 hover:bg-neutral-300 dark:hover:bg-white/10"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans">2025</div></div>
<div className="w-12 bg-neutral-300 dark:bg-white/10 rounded-t-sm h-[45%] relative group transition-all duration-300 hover:bg-neutral-400 dark:hover:bg-white/20"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans">2026</div></div>
<div className="w-12 bg-neutral-300 dark:bg-white/10 rounded-t-sm h-[60%] relative group transition-all duration-300 hover:bg-neutral-400 dark:hover:bg-white/20"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans">2027</div></div>
<div className="w-12 bg-neutral-400 dark:bg-white/20 rounded-t-sm h-[75%] relative group transition-all duration-300 hover:bg-neutral-500 dark:hover:bg-white/30"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans">2028</div></div>
<div className="w-12 bg-neutral-900 dark:bg-white rounded-t-sm h-[90%] relative group shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.2)]"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-neutral-900 dark:text-white font-medium font-sans">2030</div></div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-neutral-50 dark:bg-[#0a0a0a] p-8 rounded-2xl border border-neutral-200/50 dark:border-white/5 text-center hover:border-neutral-300 dark:hover:border-white/10 transition-colors">
<div className="text-3xl text-neutral-900 dark:text-white mb-2 tracking-tight font-instrument-serif font-normal">$253.45B</div>
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium font-sans">Cyber Security Market 2025</p>
</div>
<div className="bg-neutral-50 dark:bg-[#0a0a0a] p-8 rounded-2xl border border-neutral-200/50 dark:border-white/5 text-center hover:border-neutral-300 dark:hover:border-white/10 transition-colors">
<div className="text-3xl text-neutral-900 dark:text-white mb-2 tracking-tight font-instrument-serif font-normal">$1.68B</div>
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium font-sans">Quantum Market 2025</p>
</div>
<div className="bg-neutral-50 dark:bg-[#0a0a0a] p-8 rounded-2xl border border-neutral-200/50 dark:border-white/5 text-center hover:border-neutral-300 dark:hover:border-white/10 transition-colors">
<div className="text-3xl text-neutral-900 dark:text-white mb-2 tracking-tight font-instrument-serif font-normal">+44.1%</div>
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium font-sans">CAGR by 2030</p>
</div>
<div className="bg-neutral-50 dark:bg-[#0a0a0a] p-8 rounded-2xl border border-neutral-200/50 dark:border-white/5 text-center hover:border-neutral-300 dark:hover:border-white/10 transition-colors">
<div className="text-3xl text-neutral-900 dark:text-white mb-2 tracking-tight font-instrument-serif font-normal">$10.5T</div>
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium font-sans">Cyber Strike Cost 2025</p>
</div>
</div>
</section>

<section className="px-6 max-w-7xl mx-auto mb-24 reveal">
<div className="relative rounded-[2.5rem] overflow-hidden bg-neutral-950 border border-white/10 p-12 md:p-24 text-center group">
<div className="absolute inset-0 grid-bg opacity-10 mix-blend-overlay"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-indigo-500/20 blur-[120px] pointer-events-none group-hover:opacity-80 transition-opacity duration-1000"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl text-white mb-6 tracking-tight font-instrument-serif font-normal">
                    Leading the future of digital security
                </h2>
<p className="text-sm text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                    Providing innovative quantum resilience encryption solutions which empower businesses, government sectors, and personal accounts, protect sensitive data, and drive global trust in the global community.
                </p>
<div className="flex items-center justify-center gap-4">
<button className="bg-white text-neutral-900 px-8 py-3.5 rounded-full text-sm font-semibold shadow-lg transition-all hover:scale-105 font-sans">
                        Get Started
                    </button>
<button className="bg-transparent hover:bg-white/5 text-white px-8 py-3.5 rounded-full text-sm font-semibold border border-white/20 transition-all font-sans">
                        Contact Us
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white dark:bg-[#050505] border-t border-neutral-200 dark:border-white/5 pt-20 pb-8 transition-colors duration-500">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full logo-gradient flex items-center justify-center shadow-md">
<svg className="text-white" fill="none" height="16" viewbox="0 0 24 24" width="16">
<path clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C13.8214 22 15.5292 21.5126 17 20.657L20.2929 23.9497L21.7071 22.5355L18.4144 19.2428C19.9678 17.4304 20.9161 15.1118 20.9959 12.5997L15.4243 14.886L12.5355 12L14.8218 6.42841C14.0044 6.15414 13.0381 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C12.8943 18 13.7409 17.8048 14.5097 17.4526L18.9174 21.8603C17.0768 23.218 14.6548 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12H22C22 6.47715 17.5228 2 12 2Z" fill="white" fill-rule="evenodd"></path>
<circle cx="12" cy="12" fill="white" r="3"></circle>
</svg>
</div>
<span className="text-xl text-neutral-900 dark:text-white tracking-tight font-instrument-serif font-normal">QSE</span>
</div>
<div className="flex gap-4">
<a className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-white/5 flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-all" href="#"><iconify-icon icon="ri:linkedin-fill" width="16"></iconify-icon></a>
<a className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-white/5 flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-all" href="#"><iconify-icon icon="ri:twitter-x-fill" width="16"></iconify-icon></a>
<a className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-white/5 flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-all" href="#"><iconify-icon icon="ri:youtube-fill" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-neutral-900 dark:text-white font-medium mb-6 text-sm font-sans">Company</h4>
<ul className="space-y-3 text-xs text-neutral-500 dark:text-neutral-400">
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors font-sans" href="#">Home</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors font-sans" href="#">About Us</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors font-sans" href="#">News</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors font-sans" href="#">Resources</a></li>
</ul>
</div>
<div>
<h4 className="text-neutral-900 dark:text-white font-medium mb-6 text-sm font-sans">Support</h4>
<ul className="space-y-3 text-xs text-neutral-500 dark:text-neutral-400">
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors font-sans" href="#">Careers</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors font-sans" href="#">Contact Us</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors font-sans" href="#">Investors</a></li>
</ul>
</div>
<div>
<h4 className="text-neutral-900 dark:text-white font-medium mb-6 text-sm font-sans">Legal</h4>
<ul className="space-y-3 text-xs text-neutral-500 dark:text-neutral-400">
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors font-sans" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors font-sans" href="#">Privacy Policy</a></li>
<li><a className="hover:text-neutral-900 dark:hover:text-white transition-colors font-sans" href="#">Sitemap</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-neutral-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-neutral-500 font-sans">
                Copyright © 2025 QSE Group. All rights reserved.
            </div>
<div className="text-xs text-neutral-500 flex items-center gap-1">
<span className="font-sans">Powered by</span> <span className="font-medium text-neutral-900 dark:text-neutral-300 font-sans">BragDeal Inc.</span>
</div>
</div>
</footer>



    </>
  );
}
