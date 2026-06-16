import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // Initialize Icons
        lucide.createIcons();

        // 1. Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // 2. Parallax Effects
        const parallaxBg = document.querySelector('.parallax-bg');
        const parallaxElements = document.querySelectorAll('.parallax-element');
        const footerText = document.getElementById('footer-text');
        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            if(scrollY > 50) {
                navbar.classList.add('shadow-sm', 'bg-[#Fdfdfc]/90');
            } else {
                navbar.classList.remove('shadow-sm', 'bg-[#Fdfdfc]/90');
            }

            if (parallaxBg) {
                const speed = parseFloat(parallaxBg.dataset.speed) || 0.1;
                parallaxBg.style.transform = `translateY(${scrollY * speed}px)`;
            }

            parallaxElements.forEach(el => {
                const speed = parseFloat(el.dataset.speed) || -0.05;
                el.style.transform = `translateY(${scrollY * speed}px)`;
            });

            if (footerText) {
                const footerPosition = footerText.getBoundingClientRect().top;
                if (footerPosition < windowHeight) {
                    const move = (windowHeight - footerPosition) * 0.1;
                    footerText.style.transform = `translateX(-${move}px)`;
                }
            }
        });

        window.addEventListener('load', () => {
             document.querySelectorAll('.reveal').forEach((el, index) => {
                 if(el.getBoundingClientRect().top < window.innerHeight) {
                     setTimeout(() => {
                         el.classList.add('active');
                     }, index * 100);
                 }
             });
        });

        // 3. Search & Filter Functionality
        const searchInput = document.getElementById('search-input');
        const skillsList = document.getElementById('skills-list');
        const listItems = skillsList.querySelectorAll('li');
        const noResults = document.getElementById('no-results');

        function filterResources(category) {
            let visibleCount = 0;
            const term = searchInput.value.toLowerCase();

            listItems.forEach(item => {
                const name = item.getAttribute('data-name').toLowerCase();
                const itemCategory = item.getAttribute('data-category');
                
                const matchesSearch = name.includes(term);
                const matchesCategory = category === 'all' || itemCategory === category;

                if (matchesSearch && matchesCategory) {
                    item.style.display = 'block';
                    // Re-trigger reveal animation for smoothness
                    item.classList.remove('active'); 
                    setTimeout(() => item.classList.add('active'), 50);
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });

            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }

        searchInput.addEventListener('input', () => filterResources('all'));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 md:py-6 w-full max-w-[1800px] mx-auto bg-[#Fdfdfc]/80 backdrop-blur-md transition-all duration-300 border-b border-transparent" id="navbar">
<div className="text-xl font-semibold tracking-tight cursor-pointer hover:opacity-70 transition-opacity">Ventus.</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-black transition-colors" href="#">Platform</a>
<a className="hover:text-black transition-colors" href="#">Solutions</a>
<a className="hover:text-black transition-colors" href="#">Developers</a>
</div>
<button className="px-5 py-2.5 bg-neutral-900 text-white rounded-full text-xs font-semibold hover:bg-neutral-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-neutral-200/50">
            Start Trial
        </button>
</nav>
<main className="md:px-8 w-full max-w-[1800px] mt-24 mr-auto ml-auto pr-4 pb-20 pl-4">

<section className="pt-10 md:pt-20 pb-12 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
<div className="lg:col-span-7 reveal active">
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold tracking-tighter">
                        Engineered<br/>
                        For Global<br/>
                        Velocity
                    </h1>
</div>
<div className="lg:col-span-5 flex flex-col items-start lg:items-end lg:pl-10 reveal delay-100 active">
<p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-sm lg:text-right font-medium">
                        The financial operating system built for high-growth distributed teams.
                    </p>
<button className="group flex items-center gap-3 pl-4 pr-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-xl shadow-neutral-900/10 hover:shadow-neutral-900/20 hover:-translate-y-1">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
<svg className="lucide lucide-play w-3 h-3 text-black fill-black ml-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<span className="text-sm font-semibold">Watch the demo</span>
</button>
</div>
</div>

<div className="reveal delay-200 w-full h-[400px] md:h-[650px] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative border border-neutral-200 shadow-sm group active">
<div className="parallax-bg absolute inset-0 w-full h-[120%] -top-[10%]" data-speed="0.05" style={{transform: 'translateY(104.05px)'}}>
<img alt="Office Collaboration" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ff957af-9170-45ca-88fc-0cb4f3cd592e_3840w.webp"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>

<div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl max-w-sm w-full hidden md:block parallax-element border border-white/50" data-speed="-0.03" style={{transform: 'translateY(-62.43px)'}}>
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mb-1">Financial Report</p>
<h4 className="text-sm font-bold text-neutral-900">Q4 Revenue Audit</h4>
</div>
<div className="bg-blue-100 text-blue-700 border border-blue-200 text-[10px] px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
<span className="w-1 h-1 rounded-full bg-blue-600 animate-pulse"></span>
                            Reviewing
                        </div>
</div>
<div className="flex items-center justify-between mb-5">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-neutral-600">MK</div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">JL</div>
<div className="w-8 h-8 rounded-full bg-neutral-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-neutral-600">+5</div>
</div>
<div className="text-xs text-neutral-500 font-medium">Due in 5 hours</div>
</div>
<div className="space-y-1.5">
<div className="flex justify-between text-[11px] font-medium text-neutral-600">
<span>Analysis</span>
<span>92%</span>
</div>
<div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 w-[92%] rounded-full relative overflow-hidden">
<div className="absolute inset-0 bg-white/20"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-16 opacity-50"></div>

<section className="rounded-[2rem] md:rounded-[3rem] bg-[#111111] text-white p-8 md:p-16 lg:p-24 overflow-hidden relative reveal">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
<div className="flex flex-col justify-center">
<div className="mb-8 flex items-center gap-2 text-neutral-400 text-sm font-medium tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                        Apex Core
                    </div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-tight mb-8">
                        Build.
                        <span className="flex items-center gap-4 text-neutral-500">
<svg className="lucide lucide-circle-dashed w-12 h-12 md:w-16 md:h-16 stroke-[1.5] animate-[spin_10s_linear_infinite]" data-lucide="circle-dashed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path><path d="M13.9 21.818a10 10 0 0 1-3.8 0"></path><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"></path><path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"></path><path d="M21.818 10.1a10 10 0 0 1 0 3.8"></path><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"></path></svg> Deploy.
                        </span>
                        Scale.
                    </h2>
<p className="text-xl md:text-2xl text-neutral-400 max-w-md leading-relaxed">
                        Infrastructure that automatically adapts to traffic spikes without compromising latency.
                    </p>
</div>
<div className="relative mt-8 lg:mt-0 group perspective-1000">
<div className="bg-[#1A1A1A] border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-2xl relative transition-transform duration-500 ease-out group-hover:rotate-y-2 group-hover:scale-[1.02]">
<div className="flex justify-between text-xs text-neutral-500 mb-8 font-medium tracking-wide">
<div className="flex gap-6">
<span className="text-white border-b border-white pb-1">Uptime</span>
<span className="hover:text-neutral-300 cursor-pointer transition-colors">Logs</span>
<span className="hover:text-neutral-300 cursor-pointer transition-colors">Config</span>
</div>
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<div className="grid grid-cols-7 gap-2 text-center text-[10px] text-neutral-600 mb-6 border-b border-neutral-800 pb-6">
<span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
</div>
<div className="bg-[#222] rounded-xl p-8 border border-neutral-700 relative overflow-hidden shadow-inner">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
<div className="flex justify-between text-xs font-medium text-neutral-500 mb-8">
<span className="text-white">System Status</span>
<span>US-East-1</span>
</div>
<div className="flex gap-1.5 h-10 mb-8 items-end justify-center">
<div className="w-1.5 bg-neutral-600 h-4 rounded-full"></div>
<div className="w-1.5 bg-neutral-600 h-6 rounded-full"></div>
<div className="w-1.5 bg-white h-full rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-pulse"></div>
<div className="w-1.5 bg-neutral-700 h-8 rounded-full"></div>
<div className="w-1.5 bg-neutral-800 h-3 rounded-full"></div>
</div>
<div className="text-5xl font-mono text-white mb-2 text-center tracking-widest font-light">99.99</div>
<div className="text-neutral-500 text-sm mb-8 text-center">% Operational</div>
<button className="w-full py-3.5 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-200 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                View Dashboard
                            </button>
</div>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-neutral-200 my-20"></div>

<section className="mt-20 scroll-mt-24" id="resources">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">

<div className="md:pr-24 md:border-r border-neutral-200 sticky top-32 self-start reveal">
<h3 className="md:text-5xl lg:text-6xl leading-tight text-balance text-4xl font-semibold tracking-tighter mb-12">
                        Technical resources for high-velocity engineering teams.
                    </h3>
<div className="relative w-full max-w-sm group">
<input className="w-full border-b border-neutral-300 py-4 bg-transparent text-lg placeholder-neutral-400 focus:outline-none focus:border-black transition-colors pl-0" id="search-input" placeholder="Search documentation..." type="text"/>
<div className="absolute right-0 top-4 transition-transform duration-300 group-focus-within:scale-110 group-focus-within:text-black text-neutral-400">
<svg className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>
<div className="mt-12 flex flex-wrap gap-3">
<button className="px-4 py-2 bg-neutral-900 text-white rounded-full text-xs font-medium hover:bg-neutral-700 transition-colors" onclick="filterResources('all')">All</button>
<button className="px-4 py-2 bg-neutral-100 rounded-full text-xs font-medium text-neutral-600 hover:bg-neutral-200 transition-colors" onclick="filterResources('api')">API</button>
<button className="px-4 py-2 bg-neutral-100 rounded-full text-xs font-medium text-neutral-600 hover:bg-neutral-200 transition-colors" onclick="filterResources('security')">Security</button>
<button className="px-4 py-2 bg-neutral-100 rounded-full text-xs font-medium text-neutral-600 hover:bg-neutral-200 transition-colors" onclick="filterResources('guides')">Guides</button>
</div>
</div>

<div className="md:pl-24 flex flex-col min-h-[500px] h-full justify-between">
<ul className="space-y-4 text-right md:text-right w-full" id="skills-list">

<li className="group reveal delay-100" data-category="api" data-name="api reference docs">
<a className="block border-b border-neutral-100 pb-8 hover:border-neutral-900 transition-all duration-300" href="#">
<div className="flex justify-between md:justify-end items-center gap-12">
<span className="text-sm font-mono text-neutral-300 group-hover:text-black transition-colors">01</span>
<span className="text-2xl md:text-3xl font-medium text-neutral-400 group-hover:text-black group-hover:translate-x-[-10px] transition-all duration-300">API Reference</span>
</div>
</a>
</li>

<li className="group reveal delay-200" data-category="security" data-name="system status uptime">
<a className="block border-b border-neutral-100 pb-8 hover:border-neutral-900 transition-all duration-300" href="#">
<div className="flex justify-between md:justify-end items-center gap-12">
<span className="text-sm font-mono text-neutral-300 group-hover:text-black transition-colors">02</span>
<span className="text-2xl md:text-3xl font-medium text-neutral-400 group-hover:text-black group-hover:translate-x-[-10px] transition-all duration-300">System Status</span>
</div>
</a>
</li>

<li className="group reveal delay-300" data-category="guides" data-name="integration guides tutorial">
<a className="block border-b border-neutral-100 pb-8 hover:border-neutral-900 transition-all duration-300" href="#">
<div className="flex justify-between md:justify-end items-center gap-12">
<span className="text-sm font-mono text-neutral-500 group-hover:text-black transition-colors">03</span>
<span className="text-2xl md:text-3xl font-medium text-black group-hover:translate-x-[-10px] transition-all duration-300">Integration Guides</span>
</div>
</a>
</li>

<li className="group reveal" data-category="api" data-name="changelog updates">
<a className="block border-b border-neutral-100 pb-8 hover:border-neutral-900 transition-all duration-300" href="#">
<div className="flex justify-between md:justify-end items-center gap-12">
<span className="text-sm font-mono text-neutral-300 group-hover:text-black transition-colors">04</span>
<span className="text-2xl md:text-3xl font-medium text-neutral-400 group-hover:text-black group-hover:translate-x-[-10px] transition-all duration-300">Changelog</span>
</div>
</a>
</li>
</ul>
<p className="hidden text-center text-neutral-400 py-12" id="no-results">No results found.</p>

<div className="self-end reveal hover:-translate-y-2 transition-transform duration-500 md:mt-8 bg-white w-full max-w-sm border-neutral-200 border rounded-2xl mt-16 pt-8 pr-8 pb-8 pl-8 shadow-xl">
<div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center mb-6">
<svg className="lucide lucide-terminal w-5 h-5 text-white" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="4 17 10 11 14 17"></polyline><line x1="12" x2="20" y1="19" y2="19"></line><polyline points="8 9 16 5 24 9"></polyline></svg>
</div>
<h4 className="text-xl font-semibold mb-2 leading-tight">CLI Tools</h4>
<p className="text-neutral-500 text-sm mb-8">Manage your entire stack directly from the command line.</p>
<button className="w-full flex items-center justify-between bg-neutral-900 text-white pl-6 pr-4 py-3.5 text-sm font-semibold rounded-full hover:bg-neutral-800 transition-all hover:pr-3 group">
                            Install CLI
                            <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</button>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-neutral-200 my-20"></div>

<section className="py-12 md:py-24 relative reveal">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
<div className="max-w-2xl">
<div className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4">Investment</div>
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-neutral-900 tracking-tighter">
                        Predictable pricing for every stage of growth.
                    </h2>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

<div className="relative bg-[#a5b4fc] rounded-3xl p-8 flex flex-col min-h-[360px] hover:scale-[1.01] transition-transform duration-300">
<div className="absolute bottom-0 left-0 text-[#a5b4fc] transform translate-y-[99%] translate-x-0 w-24 h-12 flex items-end">
</div>
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-black"></div>
<span className="text-sm font-medium text-neutral-800">Pro Plan</span>
</div>
<div className="text-5xl md:text-6xl font-semibold text-black tracking-tighter mb-1 mt-auto">
                        $499 <span className="text-sm font-sans font-medium tracking-normal align-middle opacity-60">/ MONTH</span>
</div>
<div className="mt-8">
<button className="w-full py-4 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-50 transition-colors uppercase tracking-wide">
                            Start Pro
                        </button>
</div>
</div>

<div className="bg-neutral-50 rounded-3xl p-8 flex flex-col min-h-[360px] hover:bg-neutral-100 transition-colors duration-300">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full border border-neutral-400"></div>
<span className="text-sm font-medium text-neutral-600">Starter</span>
</div>
<div className="text-5xl md:text-6xl font-semibold text-black tracking-tighter mb-1 mt-auto">
                        $199 <span className="text-sm font-sans font-medium tracking-normal align-middle opacity-60">/ MONTH</span>
</div>
<div className="mt-8">
<button className="w-full py-4 bg-white border border-neutral-200 text-black text-sm font-bold rounded-full hover:border-black transition-colors uppercase tracking-wide shadow-sm">
                            Get Started
                        </button>
</div>
</div>

<div className="bg-neutral-50 rounded-3xl p-8 flex flex-col min-h-[360px] hover:bg-neutral-100 transition-colors duration-300">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full border border-neutral-400"></div>
<span className="text-sm font-medium text-neutral-600">Enterprise</span>
</div>
<div className="text-5xl md:text-6xl font-semibold text-black tracking-tighter mb-1 mt-auto">
                        $899 <span className="text-sm font-sans font-medium tracking-normal align-middle opacity-60">/ MONTH</span>
</div>
<div className="mt-8">
<button className="w-full py-4 bg-white border border-neutral-200 text-black text-sm font-bold rounded-full hover:border-black transition-colors uppercase tracking-wide shadow-sm">
                            Contact Sales
                        </button>
</div>
</div>
</div>
</section>

<section className="mb-20">
<div className="relative w-full rounded-[2.5rem] bg-[#111111] overflow-hidden px-8 py-20 md:py-32 text-center reveal">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-none mb-8">
                        Ready to<br/>Deploy?
                    </h2>
<p className="text-neutral-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                        Join 500+ engineering teams scaling their infrastructure with Ventus.
                    </p>
<div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
<button className="px-10 py-4 bg-white text-black rounded-full text-base font-bold hover:bg-neutral-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] min-w-[200px]">
                            Get Started
                        </button>
<button className="px-10 py-4 bg-transparent border border-neutral-700 text-white rounded-full text-base font-semibold hover:border-white transition-all duration-300 min-w-[200px]">
                            Book Demo
                        </button>
</div>
</div>
</div>
</section>

<section className="mt-20 overflow-hidden border-t border-black pt-12 relative">
<div className="w-full overflow-hidden py-10">
<h1 className="text-[15vw] leading-[0.8] uppercase whitespace-nowrap select-none transition-transform duration-75 will-change-transform font-bold text-black tracking-tighter translate-x-0" id="footer-text" style={{transform: 'translateX(-37.65px)'}}>Ventus Global Systems</h1>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 gap-6 pb-12 reveal">
<div className="flex gap-4">
<a className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center border border-neutral-200 hover:bg-black hover:text-white hover:border-black transition-all duration-300" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center border border-neutral-200 hover:bg-black hover:text-white hover:border-black transition-all duration-300" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center border border-neutral-200 hover:bg-black hover:text-white hover:border-black transition-all duration-300" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
<div className="flex flex-wrap gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-black relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black hover:after:w-full after:transition-all" href="#">Privacy Policy</a>
<a className="hover:text-black relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black hover:after:w-full after:transition-all" href="#">Terms of Service</a>
<a className="hover:text-black relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black hover:after:w-full after:transition-all" href="#">Status</a>
</div>
<div className="text-sm font-medium text-neutral-400">
                    © 2024 Ventus Inc. All rights reserved.
                </div>
</div>
</section>
</main>


    </>
  );
}
