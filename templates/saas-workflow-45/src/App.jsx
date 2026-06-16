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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Navbar Scroll & Mobile Menu
            const navbar = document.getElementById('navbar');
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            let lastScroll = 0;
            let isMenuOpen = false;

            window.addEventListener('scroll', () => {
                if (isMenuOpen) return;
                const currentScroll = window.pageYOffset;
                if (currentScroll > lastScroll && currentScroll > 80) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
                lastScroll = currentScroll;
            });

            mobileBtn.addEventListener('click', () => {
                isMenuOpen = !isMenuOpen;
                mobileBtn.setAttribute('aria-expanded', isMenuOpen);
                if (isMenuOpen) {
                    mobileMenu.classList.remove('hidden');
                    // Small delay to allow display:block to apply before transition
                    setTimeout(() => {
                        mobileMenu.classList.remove('opacity-0', '-translate-y-2');
                    }, 10);
                    menuIcon.setAttribute('icon', 'solar:close-circle-linear');
                } else {
                    mobileMenu.classList.add('opacity-0', '-translate-y-2');
                    setTimeout(() => {
                        mobileMenu.classList.add('hidden');
                    }, 200);
                    menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                }
            });

            // 2. Hero Headline Stagger Reveal
            const headline = document.getElementById('hero-headline');
            if (headline && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                const text = headline.innerText;
                headline.innerHTML = '';
                const words = text.split(' ');
                words.forEach((word, index) => {
                    const span = document.createElement('span');
                    span.innerText = word + ' ';
                    span.className = 'word-reveal';
                    span.style.transitionDelay = `${index * 80}ms`;
                    headline.appendChild(span);
                    
                    // Trigger reflow
                    void span.offsetWidth;
                    setTimeout(() => span.classList.add('active'), 100);
                });
            }

            // 3. Scroll Reveal Intersection Observer
            const revealElements = document.querySelectorAll('.reveal');
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
            
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            revealElements.forEach(el => revealObserver.observe(el));

            // 4. Feature Tabs Logic
            const tabBtns = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');

            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const targetId = btn.getAttribute('aria-controls');
                    
                    // Update buttons
                    tabBtns.forEach(b => {
                        b.setAttribute('aria-selected', 'false');
                        b.className = 'tab-btn whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 text-slate-300 hover:text-white hover:bg-white/10 focus-ring';
                    });
                    btn.setAttribute('aria-selected', 'true');
                    btn.className = 'tab-btn active whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 bg-[#5C6AFF] text-white shadow-sm focus-ring';

                    // Update contents with crossfade
                    tabContents.forEach(content => {
                        if (content.classList.contains('active')) {
                            content.classList.remove('active');
                            content.classList.add('fading-out');
                            setTimeout(() => {
                                content.classList.add('hidden');
                                content.classList.remove('fading-out');
                            }, 200);
                        }
                    });

                    setTimeout(() => {
                        const targetContent = document.getElementById(targetId);
                        targetContent.classList.remove('hidden');
                        targetContent.classList.add('fading-in');
                        // Reflow
                        void targetContent.offsetWidth;
                        targetContent.classList.remove('fading-in');
                        targetContent.classList.add('active');
                    }, 200);
                });
            });

            // 5. Pricing Toggle Logic
            const billingToggle = document.getElementById('billing-toggle');
            const billingKnob = document.getElementById('billing-knob');
            const priceElements = document.querySelectorAll('[data-monthly]');
            let isAnnual = false;

            billingToggle.addEventListener('click', () => {
                isAnnual = !isAnnual;
                billingToggle.setAttribute('aria-checked', isAnnual);
                
                if (isAnnual) {
                    billingToggle.classList.replace('bg-slate-200', 'bg-[#5C6AFF]');
                    billingKnob.classList.add('translate-x-6');
                } else {
                    billingToggle.classList.replace('bg-[#5C6AFF]', 'bg-slate-200');
                    billingKnob.classList.remove('translate-x-6');
                }

                // Animate numbers
                priceElements.forEach(el => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(4px)';
                    el.style.transition = 'opacity 0.2s, transform 0.2s';
                    
                    setTimeout(() => {
                        el.innerText = '$' + (isAnnual ? el.getAttribute('data-annual') : el.getAttribute('data-monthly'));
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, 200);
                });
            });

            // 6. FAQ Accordion Logic
            const accordions = document.querySelectorAll('.accordion-btn');
            
            accordions.forEach(acc => {
                acc.addEventListener('click', () => {
                    const isExpanded = acc.getAttribute('aria-expanded') === 'true';
                    const content = acc.nextElementSibling;
                    const icon = acc.querySelector('iconify-icon');

                    // Close all others (optional, but requested clean accordion usually implies this)
                    accordions.forEach(otherAcc => {
                        if (otherAcc !== acc) {
                            otherAcc.setAttribute('aria-expanded', 'false');
                            otherAcc.nextElementSibling.classList.remove('open');
                            otherAcc.querySelector('iconify-icon').style.transform = 'rotate(0deg)';
                        }
                    });

                    // Toggle current
                    acc.setAttribute('aria-expanded', !isExpanded);
                    if (!isExpanded) {
                        content.classList.add('open');
                        icon.style.transform = 'rotate(180deg)';
                    } else {
                        content.classList.remove('open');
                        icon.style.transform = 'rotate(0deg)';
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 transition-transform duration-300 transform translate-y-0" id="navbar">
<div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-slate-200/50"></div>
<div className="relative max-w-[1360px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

<a aria-label="Flowsync Home" className="flex items-center gap-2 focus-ring rounded-md z-10" href="#">
<div className="w-7 h-7 bg-[#5C6AFF] rounded-lg flex items-center justify-center transform rotate-3">
<iconify-icon className="text-white text-lg" icon="solar:flow-square-linear"></iconify-icon>
</div>
<span className="font-display font-semibold text-lg tracking-tighter text-slate-900">FLOWSYNC</span>
</a>

<nav className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50 backdrop-blur-sm">
<a className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-colors focus-ring" href="#features">Features</a>
<a className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-colors focus-ring" href="#pricing">Pricing</a>
<a className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-colors focus-ring" href="#integrations">Integrations</a>
<a className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-colors focus-ring" href="#blog">Blog</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors focus-ring rounded-md" href="#login">Log in</a>
<a className="bg-[#5C6AFF] text-white px-5 py-2 text-sm font-medium rounded-full shadow-sm hover:bg-[#4a55cc] hover:-translate-y-0.5 transition-all duration-200 focus-ring" href="#start">Get Started Free</a>
</div>

<button aria-expanded="false" aria-label="Toggle navigation menu" className="md:hidden relative z-10 p-2 text-slate-600 focus-ring rounded-md" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" id="menu-icon"></iconify-icon>
</button>
</div>

<div className="absolute top-full left-0 w-full bg-white border-b border-slate-200/50 shadow-lg hidden flex-col p-6 gap-4 origin-top transition-all duration-200 opacity-0 -translate-y-2" id="mobile-menu">
<a className="text-base font-medium text-slate-800 py-2 border-b border-slate-100" href="#features">Features</a>
<a className="text-base font-medium text-slate-800 py-2 border-b border-slate-100" href="#pricing">Pricing</a>
<a className="text-base font-medium text-slate-800 py-2 border-b border-slate-100" href="#integrations">Integrations</a>
<a className="text-base font-medium text-slate-600 py-2" href="#login">Log in</a>
<a className="w-full bg-[#5C6AFF] text-white text-center px-5 py-3 text-base font-medium rounded-full shadow-sm mt-2" href="#start">Get Started Free</a>
</div>
</header>

<main className="flex-grow pt-24 pb-12 relative w-full max-w-[1360px] mx-auto px-6 lg:px-8">

<div className="pointer-events-none absolute inset-0 flex justify-center z-[-1]">
<div className="w-full h-full relative border-x border-slate-200/60 hidden md:block max-w-[calc(100%-3rem)] lg:max-w-[calc(100%-4rem)]">

<div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-slate-200"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-slate-200"></div>
</div>
</div>

<section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-slate-200/60">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-6 flex flex-col items-start z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6 text-xs font-medium text-slate-600">
<span className="w-2 h-2 rounded-full bg-[#A8E05F] animate-pulse"></span>
                        Flowsync 2.0 is now live
                    </div>
<h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 leading-[1.1] mb-6 text-balance" id="hero-headline">
                        Ship faster. Align better. Scale with confidence.
                    </h1>
<p className="text-lg text-slate-500 mb-8 max-w-xl text-pretty leading-relaxed">
                        The ultimate workflow automation platform that connects your team, tools, and processes in one seamless workspace.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex justify-center items-center px-6 py-3.5 bg-[#5C6AFF] text-white text-base font-medium rounded-full shadow-[0_4px_12px_rgba(92,106,255,0.3)] hover:bg-[#4a55cc] hover:-translate-y-0.5 transition-all duration-200 focus-ring" href="#start">
                            Start Free Trial
                        </a>
<button className="inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-white text-slate-700 text-base font-medium rounded-full border border-slate-200 shadow-sm hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 focus-ring">
<iconify-icon className="text-xl text-slate-400" icon="solar:play-circle-linear"></iconify-icon>
                            Watch Demo
                        </button>
</div>
<div className="mt-8 flex items-center gap-3 text-sm text-slate-500 font-medium">
<div className="flex text-[#FFE669] text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span>Trusted by 9,200+ teams globally</span>
</div>
</div>

<div className="lg:col-span-6 relative perspective-1000">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#5C6AFF]/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative w-full aspect-[4/3] rounded-2xl glass-panel shadow-[0_12px_48px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col animate-float border border-white/80">

<div className="h-10 border-b border-slate-100/50 bg-white/40 flex items-center px-4 justify-between backdrop-blur-sm">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="h-5 w-32 bg-white/60 rounded flex items-center justify-center border border-slate-100/50">
<span className="text-[10px] text-slate-400 font-medium tracking-wide">flowsync.app</span>
</div>
<div className="w-10"></div> 
</div>

<div className="flex flex-1 overflow-hidden bg-white/60">

<div className="w-1/4 border-r border-slate-100/60 p-4 flex flex-col gap-4 bg-slate-50/30">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-[#5C6AFF] flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:box-linear"></iconify-icon>
</div>
<div className="h-3 w-16 bg-slate-200 rounded"></div>
</div>
<div className="space-y-2">
<div className="h-6 rounded bg-white border border-slate-100 flex items-center px-2 gap-2 shadow-sm">
<iconify-icon className="text-slate-400 text-xs" icon="solar:widget-5-linear"></iconify-icon>
<div className="h-1.5 w-12 bg-slate-200 rounded-full"></div>
</div>
<div className="h-6 rounded flex items-center px-2 gap-2 opacity-60">
<iconify-icon className="text-slate-400 text-xs" icon="solar:checklist-linear"></iconify-icon>
<div className="h-1.5 w-16 bg-slate-200 rounded-full"></div>
</div>
<div className="h-6 rounded flex items-center px-2 gap-2 opacity-60">
<iconify-icon className="text-slate-400 text-xs" icon="solar:inbox-linear"></iconify-icon>
<div className="h-1.5 w-10 bg-slate-200 rounded-full"></div>
</div>
</div>
<div className="mt-auto pt-4 border-t border-slate-100/60">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#F75C30] to-[#FFE669] border border-white"></div>
<div className="h-2 w-12 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>

<div className="flex-1 p-5 flex flex-col gap-4 relative">

<div className="flex justify-between items-end mb-2">
<div>
<div className="h-2 w-16 bg-slate-200 rounded-full mb-2"></div>
<div className="text-lg font-semibold tracking-tight text-slate-800 leading-none">Today's Overview</div>
</div>
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-medium text-slate-500">A</div>
<div className="w-7 h-7 rounded-full bg-[#A8E05F] border-2 border-white flex items-center justify-center text-[10px] font-medium text-slate-800">B</div>
<div className="w-7 h-7 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] text-slate-500">+3</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="p-3 rounded-xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between h-20">
<div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
<iconify-icon className="text-[#F75C30]" icon="solar:bolt-linear"></iconify-icon>
                                            Velocity
                                        </div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-semibold text-slate-800">84%</span>
<span className="text-[10px] text-[#A8E05F] font-medium px-1.5 py-0.5 bg-[#A8E05F]/10 rounded">+12%</span>
</div>
</div>
<div className="p-3 rounded-xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between h-20">
<div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
<iconify-icon className="text-[#5C6AFF]" icon="solar:check-circle-linear"></iconify-icon>
                                            Completed
                                        </div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-semibold text-slate-800">128</span>
<span className="text-[10px] text-slate-400">tasks</span>
</div>
</div>
</div>

<div className="flex-1 rounded-xl bg-white border border-slate-100 shadow-sm p-4 flex flex-col">
<div className="flex justify-between items-center mb-4">
<div className="text-xs font-medium text-slate-500">Activity</div>
<div className="h-4 w-12 bg-slate-50 rounded border border-slate-100"></div>
</div>
<div className="flex-1 flex items-end gap-2 px-2">

<div className="w-full bg-[#5C6AFF]/10 rounded-t-sm h-[30%] relative group"><div className="absolute inset-x-0 bottom-0 bg-[#5C6AFF] rounded-t-sm h-[40%] transition-all group-hover:h-[50%]"></div></div>
<div className="w-full bg-[#5C6AFF]/10 rounded-t-sm h-[50%] relative group"><div className="absolute inset-x-0 bottom-0 bg-[#5C6AFF] rounded-t-sm h-[60%] transition-all group-hover:h-[70%]"></div></div>
<div className="w-full bg-[#5C6AFF]/10 rounded-t-sm h-[40%] relative group"><div className="absolute inset-x-0 bottom-0 bg-[#5C6AFF] rounded-t-sm h-[30%] transition-all group-hover:h-[40%]"></div></div>
<div className="w-full bg-[#5C6AFF]/10 rounded-t-sm h-[80%] relative group"><div className="absolute inset-x-0 bottom-0 bg-[#5C6AFF] rounded-t-sm h-[90%] transition-all group-hover:h-[100%]"></div></div>
<div className="w-full bg-[#F75C30]/10 rounded-t-sm h-[60%] relative group"><div className="absolute inset-x-0 bottom-0 bg-[#F75C30] rounded-t-sm h-[70%] transition-all group-hover:h-[80%]"></div></div>
<div className="w-full bg-[#5C6AFF]/10 rounded-t-sm h-[90%] relative group"><div className="absolute inset-x-0 bottom-0 bg-[#5C6AFF] rounded-t-sm h-[100%] transition-all group-hover:h-[95%]"></div></div>
<div className="w-full bg-[#5C6AFF]/10 rounded-t-sm h-[70%] relative group"><div className="absolute inset-x-0 bottom-0 bg-[#5C6AFF] rounded-t-sm h-[60%] transition-all group-hover:h-[70%]"></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-slate-200/60 overflow-hidden relative">
<div className="text-center text-xs font-medium text-slate-400 mb-6 uppercase tracking-wider">Trusted by innovative teams at</div>

<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-light)] to-transparent z-10 hidden md:block"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-light)] to-transparent z-10 hidden md:block"></div>
<div className="flex w-[200%] overflow-hidden">
<div className="flex w-1/2 justify-around items-center marquee-left font-display font-semibold tracking-tighter text-2xl text-slate-400/60">
<span>STRIPE</span>
<span>NOTION</span>
<span>LINEAR</span>
<span>VERCEL</span>
<span>FIGMA</span>
<span>SHOPIFY</span>
<span>RAYCAST</span>
<span>ARC</span>
</div>

<div aria-hidden="true" className="flex w-1/2 justify-around items-center marquee-left font-display font-semibold tracking-tighter text-2xl text-slate-400/60">
<span>STRIPE</span>
<span>NOTION</span>
<span>LINEAR</span>
<span>VERCEL</span>
<span>FIGMA</span>
<span>SHOPIFY</span>
<span>RAYCAST</span>
<span>ARC</span>
</div>
</div>
</section>

<section className="py-24 border-b border-slate-200/60 reveal">
<div className="text-center mb-16">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-slate-900 mb-4">How Flowsync works</h2>
<p className="text-base text-slate-500 max-w-lg mx-auto">Three simple steps to connect your tools, automate routine tasks, and free your team to focus on impact.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-slate-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center font-display font-semibold text-2xl text-[#5C6AFF] mb-6">01</div>
<h3 className="font-semibold text-lg text-slate-900 mb-2">Set up your workspace</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[240px]">Connect your core tools and define your team's structure in minutes.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center font-display font-semibold text-2xl text-[#F75C30] mb-6">02</div>
<h3 className="font-semibold text-lg text-slate-900 mb-2">Invite &amp; assign</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[240px]">Bring your team on board and map out responsibilities effortlessly.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center font-display font-semibold text-2xl text-[#A8E05F] mb-6">03</div>
<h3 className="font-semibold text-lg text-slate-900 mb-2">Track and automate</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[240px]">Watch workflows execute while you monitor performance in real-time.</p>
</div>
</div>
</section>
</main>

<section className="w-full bg-[#0D1117] py-24 relative overflow-hidden" id="features">

<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'url(&quot', data: 'image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'1\'/%3E%3C/svg%3E&quot'}}></div>
<div className="max-w-[1024px] mx-auto px-6 relative z-10 flex flex-col items-center">
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-white mb-12 text-center text-balance">
                Everything your team needs to perform
            </h2>

<div className="flex overflow-x-auto hide-scrollbar w-full md:w-auto p-1.5 bg-white/5 border border-white/10 rounded-full mb-12" role="tablist">
<button aria-controls="tab-1" aria-selected="true" className="tab-btn active whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 bg-[#5C6AFF] text-white shadow-sm focus-ring" role="tab">Workflow Builder</button>
<button aria-controls="tab-2" aria-selected="false" className="tab-btn whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 text-slate-300 hover:text-white hover:bg-white/10 focus-ring" role="tab">KPI Dashboard</button>
<button aria-controls="tab-3" aria-selected="false" className="tab-btn whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 text-slate-300 hover:text-white hover:bg-white/10 focus-ring" role="tab">Team Inbox</button>
<button aria-controls="tab-4" aria-selected="false" className="tab-btn whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 text-slate-300 hover:text-white hover:bg-white/10 focus-ring" role="tab">Automations</button>
</div>

<div className="w-full relative min-h-[400px]">

<div className="tab-content active w-full flex flex-col lg:flex-row gap-12 items-center" id="tab-1" role="tabpanel">
<div className="lg:w-1/3 flex flex-col text-left">
<h3 className="font-display font-semibold text-2xl text-white mb-4">Visually map your processes</h3>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#A8E05F] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-300 text-sm leading-relaxed">Drag-and-drop interface for complex logic</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#A8E05F] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-300 text-sm leading-relaxed">Save structural templates for reuse</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#A8E05F] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-300 text-sm leading-relaxed">Real-time collaboration on canvas</span>
</li>
</ul>
</div>
<div className="lg:w-2/3 w-full">
<div className="glass-dark rounded-2xl p-2 shadow-2xl border border-white/10">

<div className="bg-[#161B22] rounded-xl h-[340px] border border-white/5 overflow-hidden relative flex items-center justify-center p-6">
<div className="absolute top-4 left-4 flex gap-2">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10"><iconify-icon className="text-slate-400" icon="solar:mouse-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10"><iconify-icon className="text-slate-400" icon="solar:pen-linear"></iconify-icon></div>
</div>

<div className="flex gap-8 items-center">
<div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-sm text-slate-200 shadow-lg z-10">Trigger: Webhook</div>
<div className="h-px w-12 bg-slate-600 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rotate-45 border-t border-r border-slate-600"></div></div>
<div className="px-4 py-2 bg-[#5C6AFF]/20 border border-[#5C6AFF]/30 text-[#5C6AFF] rounded-lg text-sm shadow-lg z-10 flex gap-2 items-center"><iconify-icon icon="solar:database-linear"></iconify-icon> Format Data</div>
<div className="h-px w-12 bg-slate-600 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rotate-45 border-t border-r border-slate-600"></div></div>
<div className="px-4 py-2 bg-[#F75C30]/20 border border-[#F75C30]/30 text-[#F75C30] rounded-lg text-sm shadow-lg z-10 flex gap-2 items-center"><iconify-icon icon="solar:letter-linear"></iconify-icon> Send Email</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden w-full flex flex-col lg:flex-row gap-12 items-center" id="tab-2" role="tabpanel">
<div className="lg:w-1/3 flex flex-col text-left">
<h3 className="font-display font-semibold text-2xl text-white mb-4">Metrics that matter</h3>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#A8E05F] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-300 text-sm leading-relaxed">Customizable dashboard widgets</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#A8E05F] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-300 text-sm leading-relaxed">Live data sync across all apps</span>
</li>
</ul>
</div>
<div className="lg:w-2/3 w-full">
<div className="glass-dark rounded-2xl p-2 shadow-2xl border border-white/10">

<div className="bg-[#161B22] rounded-xl h-[340px] border border-white/5 p-5 flex flex-col gap-4">
<div className="flex gap-4 h-1/3">
<div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col justify-between">
<div className="text-xs text-slate-400">Total Revenue</div>
<div className="text-xl font-medium text-white">$42,890</div>
</div>
<div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col justify-between">
<div className="text-xs text-slate-400">Active Tasks</div>
<div className="text-xl font-medium text-white">1,204</div>
</div>
</div>
<div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-4 flex items-end gap-2">

<div className="flex-1 bg-[#5C6AFF] rounded-t-sm h-[40%] opacity-80"></div>
<div className="flex-1 bg-[#5C6AFF] rounded-t-sm h-[60%] opacity-80"></div>
<div className="flex-1 bg-[#5C6AFF] rounded-t-sm h-[50%] opacity-80"></div>
<div className="flex-1 bg-[#FFE669] rounded-t-sm h-[90%] opacity-90"></div>
<div className="flex-1 bg-[#5C6AFF] rounded-t-sm h-[70%] opacity-80"></div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden w-full flex flex-col lg:flex-row gap-12 items-center" id="tab-3" role="tabpanel">
<div className="lg:w-1/3 flex flex-col text-left"><h3 className="font-display font-semibold text-2xl text-white mb-4">Unified Team Inbox</h3><p className="text-slate-300 text-sm leading-relaxed mb-8">Centralize all communications, mentions, and alerts in one structured view.</p></div>
<div className="lg:w-2/3 w-full"><div className="glass-dark rounded-2xl p-2"><div className="bg-[#161B22] rounded-xl h-[340px] border border-white/5 p-4 space-y-2">
<div className="p-3 bg-white/5 rounded border border-white/10 flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-slate-700"></div><div><div className="h-2 w-24 bg-slate-600 rounded mb-1"></div><div className="h-1.5 w-32 bg-slate-700 rounded"></div></div></div>
<div className="p-3 bg-white/10 rounded border border-white/10 flex items-center gap-3 border-l-2 border-l-[#5C6AFF]"><div className="w-8 h-8 rounded-full bg-[#F75C30]"></div><div><div className="h-2 w-20 bg-slate-400 rounded mb-1"></div><div className="h-1.5 w-40 bg-slate-500 rounded"></div></div></div>
<div className="p-3 bg-white/5 rounded border border-white/10 flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-slate-700"></div><div><div className="h-2 w-28 bg-slate-600 rounded mb-1"></div><div className="h-1.5 w-24 bg-slate-700 rounded"></div></div></div>
</div></div></div>
</div>
<div className="tab-content hidden w-full flex flex-col lg:flex-row gap-12 items-center" id="tab-4" role="tabpanel">
<div className="lg:w-1/3 flex flex-col text-left"><h3 className="font-display font-semibold text-2xl text-white mb-4">Set it and forget it</h3><p className="text-slate-300 text-sm leading-relaxed mb-8">Deploy background logic that runs reliably 24/7 without manual intervention.</p></div>
<div className="lg:w-2/3 w-full"><div className="glass-dark rounded-2xl p-2"><div className="bg-[#161B22] rounded-xl h-[340px] border border-white/5 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-dashed border-slate-600 flex items-center justify-center animate-[spin_10s_linear_infinite]"><iconify-icon className="text-4xl text-slate-500" icon="solar:settings-linear"></iconify-icon></div>
</div></div></div>
</div>
</div>
</div>
</section>

<main className="flex-grow relative w-full max-w-[1360px] mx-auto px-6 lg:px-8">

<div className="pointer-events-none absolute inset-0 flex justify-center z-[-1]">
<div className="w-full h-full relative border-x border-slate-200/60 hidden md:block max-w-[calc(100%-3rem)] lg:max-w-[calc(100%-4rem)]"></div>
</div>

<section className="py-24 border-b border-slate-200/60 reveal overflow-hidden" id="integrations">
<div className="text-center mb-16">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-slate-900 mb-4">Works with your tools</h2>
<p className="text-base text-slate-500 max-w-lg mx-auto mb-8">Connect over 60+ applications seamlessly without writing a single line of code.</p>
<a className="inline-flex justify-center items-center px-5 py-2.5 bg-white text-slate-700 text-sm font-medium rounded-full border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors focus-ring" href="#integrations-list">View all integrations</a>
</div>
<div className="relative w-full overflow-hidden flex flex-col gap-4">

<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-light)] to-transparent z-10 hidden md:block pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-light)] to-transparent z-10 hidden md:block pointer-events-none"></div>

<div className="flex w-max marquee-left gap-4">

<div aria-hidden="true" className="flex gap-4 items-center">
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:figma-linear"></iconify-icon> Figma</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:chat-round-linear"></iconify-icon> Slack</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon> Notion</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:code-circle-linear"></iconify-icon> GitHub</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon> Google Calendar</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:card-send-linear"></iconify-icon> Stripe</div>
</div>
<div className="flex gap-4 items-center">
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:figma-linear"></iconify-icon> Figma</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:chat-round-linear"></iconify-icon> Slack</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon> Notion</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:code-circle-linear"></iconify-icon> GitHub</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon> Google Calendar</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:card-send-linear"></iconify-icon> Stripe</div>
</div>
</div>

<div className="flex w-max marquee-right gap-4 -translate-x-1/4">
<div aria-hidden="true" className="flex gap-4 items-center">
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon> Gmail</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:clipboard-list-linear"></iconify-icon> Jira</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:database-linear"></iconify-icon> Airtable</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> HubSpot</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon> Zoom</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon> Zapier</div>
</div>
<div className="flex gap-4 items-center">
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon> Gmail</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:clipboard-list-linear"></iconify-icon> Jira</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:database-linear"></iconify-icon> Airtable</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> HubSpot</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon> Zoom</div>
<div className="px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon> Zapier</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-slate-200/60 reveal" id="pricing">
<div className="text-center mb-12">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-slate-900 mb-4">Simple, transparent pricing</h2>
<div className="flex items-center justify-center gap-3 mt-8">
<span className="text-sm font-medium text-slate-500">Monthly</span>
<button aria-checked="false" className="relative w-12 h-6 rounded-full bg-slate-200 transition-colors duration-200 focus-ring" id="billing-toggle" role="switch">
<span className="sr-only">Toggle annual billing</span>
<span className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 transform translate-x-0" id="billing-knob"></span>
</button>
<span className="text-sm font-medium text-slate-900">Annual <span className="text-xs text-[#A8E05F] ml-1 px-2 py-0.5 bg-[#A8E05F]/10 rounded-full">Save 20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-center">

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col h-full hover:-translate-y-1 transition-transform duration-200">
<h3 className="font-medium text-lg text-slate-900 mb-2">Starter</h3>
<div className="mb-6"><span className="text-4xl font-semibold tracking-tight text-slate-900" data-annual="15" data-monthly="19">$19</span><span className="text-slate-500 text-sm">/mo</span></div>
<p className="text-sm text-slate-500 mb-6 pb-6 border-b border-slate-100">For small teams getting started with workflow automation.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-[#5C6AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Up to 5 users</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-[#5C6AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 50 active workflows</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-[#5C6AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Standard integrations</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-[#5C6AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Basic analytics</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-[#5C6AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Email support</li>
</ul>
<a className="w-full py-2.5 text-center text-sm font-medium rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors focus-ring" href="#">Start Free Trial</a>
</div>

<div className="bg-white rounded-2xl p-8 border-2 border-[#5C6AFF] shadow-[0_8px_32px_rgba(92,106,255,0.1)] flex flex-col h-[105%] relative md:z-10 hover:-translate-y-1 transition-transform duration-200">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#5C6AFF] text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">Most Popular</div>
<h3 className="font-medium text-lg text-slate-900 mb-2">Growth</h3>
<div className="mb-6"><span className="text-4xl font-semibold tracking-tight text-slate-900" data-annual="39" data-monthly="49">$49</span><span className="text-slate-500 text-sm">/mo</span></div>
<p className="text-sm text-slate-500 mb-6 pb-6 border-b border-slate-100">Everything you need to scale your team's productivity.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-[#5C6AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Up to 20 users</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-[#5C6AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Unlimited workflows</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-[#5C6AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Premium integrations</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-[#5C6AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Custom dashboards</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-[#5C6AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Priority support</li>
</ul>
<a className="w-full py-2.5 text-center text-sm font-medium rounded-full bg-[#5C6AFF] text-white shadow-sm hover:bg-[#4a55cc] transition-colors focus-ring" href="#">Get Growth Plan</a>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col h-full hover:-translate-y-1 transition-transform duration-200">
<h3 className="font-medium text-lg text-slate-900 mb-2">Scale</h3>
<div className="mb-6"><span className="text-4xl font-semibold tracking-tight text-slate-900" data-annual="79" data-monthly="99">$99</span><span className="text-slate-500 text-sm">/mo</span></div>
<p className="text-sm text-slate-500 mb-6 pb-6 border-b border-slate-100">Advanced security and support for large organizations.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-[#5C6AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Unlimited users</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-[#5C6AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Dedicated account manager</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-[#5C6AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> SSO &amp; SAML</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-[#5C6AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Audit logs</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-[#5C6AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 24/7 phone support</li>
</ul>
<a className="w-full py-2.5 text-center text-sm font-medium rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors focus-ring" href="#">Contact Sales</a>
</div>
</div>
</section>

<section className="py-24 border-b border-slate-200/60 reveal">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-slate-900 mb-12 text-center">What our customers say</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex text-[#FFE669] text-base mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic leading-relaxed mb-6">"Flowsync completely transformed how our product team operates. We replaced three different tools with just one, and our delivery velocity increased by 40%."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-700 font-medium text-sm border border-indigo-200">SH</div>
<div>
<div className="text-sm font-medium text-slate-900">Sarah Harding</div>
<div className="text-xs text-slate-500">VP of Product, TechFlow</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex text-[#FFE669] text-base mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic leading-relaxed mb-6">"The visual workflow builder is intuitive enough for non-technical staff to use, yet powerful enough to handle our complex enterprise logic."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-emerald-700 font-medium text-sm border border-emerald-200">MJ</div>
<div>
<div className="text-sm font-medium text-slate-900">Marcus Johnson</div>
<div className="text-xs text-slate-500">Operations Lead, ScaleCo</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex text-[#FFE669] text-base mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic leading-relaxed mb-6">"Setup took literally minutes. The integrations with Slack and Jira are flawless. I can't imagine going back to our old way of working."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center text-orange-700 font-medium text-sm border border-orange-200">AL</div>
<div>
<div className="text-sm font-medium text-slate-900">Amanda Lee</div>
<div className="text-xs text-slate-500">Engineering Manager, BuildRight</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-slate-200/60 reveal">
<div className="max-w-2xl mx-auto">
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-slate-900 mb-10 text-center">Your questions, answered</h2>
<div className="space-y-4">

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<button aria-expanded="false" className="w-full px-6 py-4 flex items-center justify-between focus-ring text-left accordion-btn">
<span className="font-medium text-sm text-slate-900">How long does it take to set up Flowsync?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="px-6 pb-4 text-sm text-slate-500 leading-relaxed">Most teams are fully set up within 30 minutes. Our guided onboarding helps you connect your essential tools and deploy your first workflow quickly.</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<button aria-expanded="false" className="w-full px-6 py-4 flex items-center justify-between focus-ring text-left accordion-btn">
<span className="font-medium text-sm text-slate-900">Can I request a custom integration?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="px-6 pb-4 text-sm text-slate-500 leading-relaxed">Yes! While we support 60+ tools out of the box, Enterprise customers can request custom integration development or use our open API.</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<button aria-expanded="false" className="w-full px-6 py-4 flex items-center justify-between focus-ring text-left accordion-btn">
<span className="font-medium text-sm text-slate-900">Is my data secure?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="px-6 pb-4 text-sm text-slate-500 leading-relaxed">Security is our priority. We are SOC2 compliant, use end-to-end encryption for sensitive credentials, and host on enterprise-grade AWS infrastructure.</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
<button aria-expanded="false" className="w-full px-6 py-4 flex items-center justify-between focus-ring text-left accordion-btn">
<span className="font-medium text-sm text-slate-900">What happens after my free trial?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="px-6 pb-4 text-sm text-slate-500 leading-relaxed">At the end of your 14-day trial, you can choose a paid plan. If you decide not to upgrade, your account will pause, but we won't delete your workflows immediately.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden reveal rounded-3xl mt-12 mb-12 border border-slate-200 bg-white">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(92,106,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight text-slate-900 mb-6 text-balance">
                    Ready to transform how your team works?
                </h2>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
<a className="inline-flex justify-center items-center px-6 py-3.5 bg-[#5C6AFF] text-white text-base font-medium rounded-full shadow-[0_4px_12px_rgba(92,106,255,0.3)] hover:bg-[#4a55cc] hover:-translate-y-0.5 transition-all duration-200 focus-ring" href="#start">
                        Start Free Trial
                    </a>
<a className="inline-flex justify-center items-center px-6 py-3.5 bg-white text-slate-700 text-base font-medium rounded-full border border-slate-200 shadow-sm hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 focus-ring" href="#sales">
                        Talk to Sales
                    </a>
</div>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
<div className="flex items-center gap-1.5"><iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon> No credit card required</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon> 14-day free trial</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon> Cancel anytime</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-[1360px] mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a aria-label="Flowsync Home" className="flex items-center gap-2 mb-4 focus-ring rounded-md inline-flex" href="#">
<div className="w-6 h-6 bg-[#5C6AFF] rounded-md flex items-center justify-center transform rotate-3">
<iconify-icon className="text-white text-sm" icon="solar:flow-square-linear"></iconify-icon>
</div>
<span className="font-display font-semibold text-base tracking-tighter text-slate-900">FLOWSYNC</span>
</a>
<p className="text-sm text-slate-500 mb-6 max-w-xs">Connecting tools, automating workflows, and empowering teams to do their best work.</p>
</div>

<div>
<h4 className="font-medium text-sm text-slate-900 mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors focus-ring rounded-sm" href="#">Features</a></li>
<li><a className="hover:text-slate-900 transition-colors focus-ring rounded-sm" href="#">Integrations</a></li>
<li><a className="hover:text-slate-900 transition-colors focus-ring rounded-sm" href="#">Pricing</a></li>
<li><a className="hover:text-slate-900 transition-colors focus-ring rounded-sm" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors focus-ring rounded-sm" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors focus-ring rounded-sm" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors focus-ring rounded-sm" href="#">Blog</a></li>
<li><a className="hover:text-slate-900 transition-colors focus-ring rounded-sm" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-sm text-slate-900 mb-4">Subscribe to our newsletter</h4>
<form className="flex flex-col gap-3" onsubmit="event.preventDefault();">
<label className="sr-only" htmlFor="email-input">Email address</label>
<input className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#5C6AFF] focus:border-transparent transition-all" id="email-input" placeholder="Email address…" required="" type="email"/>
<button className="px-4 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors focus-ring" type="submit">Subscribe</button>
</form>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">© 2024 Flowsync Inc. Made with <iconify-icon className="text-red-400 align-middle" icon="solar:heart-bold"></iconify-icon></p>
<div className="flex items-center gap-4 text-slate-400">
<a aria-label="Twitter" className="hover:text-slate-600 transition-colors focus-ring rounded-sm" href="#"><iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon></a>
<a aria-label="GitHub" className="hover:text-slate-600 transition-colors focus-ring rounded-sm" href="#"><iconify-icon className="text-xl" icon="solar:github-linear"></iconify-icon></a>
<a aria-label="LinkedIn" className="hover:text-slate-600 transition-colors focus-ring rounded-sm" href="#"><iconify-icon className="text-xl" icon="solar:linkedin-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
