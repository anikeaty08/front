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



        // Theme Toggle
        const html = document.documentElement;
        const toggleBtns = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
        
        // Setup initial theme (prefer dark)
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.add('dark'); // Force dark default for that sleek look based on instructions
        }

        toggleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                html.classList.toggle('dark');
                localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
            });
        });

        // Mobile Menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isClosed = mobileMenu.classList.contains('translate-x-full');
            if (isClosed) {
                mobileMenu.classList.remove('translate-x-full');
            } else {
                mobileMenu.classList.add('translate-x-full');
            }
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

        // Scroll Effects
        const navbar = document.getElementById('navbar');
        const scrollProgress = document.getElementById('scroll-progress');

        window.addEventListener('scroll', () => {
            // Navbar background
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white/80', 'dark:bg-neutral-950/80', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-neutral-200', 'dark:border-neutral-800');
                navbar.classList.remove('top-8');
                navbar.classList.add('top-0');
            } else {
                navbar.classList.remove('bg-white/80', 'dark:bg-neutral-950/80', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-neutral-200', 'dark:border-neutral-800');
                navbar.classList.remove('top-0');
                navbar.classList.add('top-8');
            }

            // Scroll Progress
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            scrollProgress.style.width = scrolled + "%";
        });

        // Scroll Reveal Animation
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        reveal(); // Trigger on load

        // Calculator Logic
        const data = {
            apple: { models: ["iPhone 14 Pro", "iPhone 13", "iPhone 12"], prices: { "Screen Issue": [329, 279, 229], "Battery Issue": [99, 89, 69] } },
            samsung: { models: ["Galaxy S23", "Galaxy S22", "A54"], prices: { "Screen Issue": [299, 249, 149], "Battery Issue": [89, 79, 59] } },
        };

        const brandSel = document.getElementById('calc-brand');
        const modelSel = document.getElementById('calc-model');
        const issueSel = document.getElementById('calc-issue');
        const resDiv = document.getElementById('calc-result');
        const priceTxt = document.getElementById('calc-price');

        brandSel.addEventListener('change', function() {
            const b = this.value;
            modelSel.innerHTML = '<option value="" disabled selected>Select Model</option>';
            if(data[b]) {
                data[b].models.forEach((m, i) => {
                    modelSel.innerHTML += `<option value="${i}">${m}</option>`;
                });
                modelSel.disabled = false;
                issueSel.disabled = true;
                resDiv.classList.add('hidden');
                resDiv.classList.remove('opacity-100');
            }
        });

        modelSel.addEventListener('change', function() {
            issueSel.innerHTML = '<option value="" disabled selected>Select Issue</option><option value="Screen Issue">Screen Damage</option><option value="Battery Issue">Battery Replacement</option>';
            issueSel.disabled = false;
            resDiv.classList.add('hidden');
        });

        issueSel.addEventListener('change', function() {
            const b = brandSel.value;
            const mIdx = modelSel.value;
            const iss = this.value;
            if(b && mIdx !== "" && iss) {
                const price = data[b].prices[iss][mIdx];
                priceTxt.innerText = `$${price}`;
                resDiv.classList.remove('hidden');
                setTimeout(() => resDiv.classList.add('opacity-100'), 50);
            }
        });

        // Tracker Logic
        const trackBtn = document.getElementById('tracker-btn');
        const trackInp = document.getElementById('tracker-input');
        const trackUI = document.getElementById('tracker-ui');
        const trackProg = document.getElementById('tracker-progress-bar');
        const trackSteps = document.querySelectorAll('.step');
        const trackMsg = document.getElementById('tracker-msg');

        trackBtn.addEventListener('click', () => {
            if(!trackInp.value) return;
            trackUI.classList.remove('hidden');
            trackProg.style.width = '0%';
            trackSteps.forEach(s => {
                s.children[0].classList.replace('bg-[#E63946]', 'bg-neutral-200');
                s.children[0].classList.replace('text-white', 'text-neutral-400');
                if(s.children[0].classList.contains('dark:bg-neutral-800')){
                     // keep dark classes
                } else {
                     s.children[0].classList.add('dark:bg-neutral-800');
                }
                s.children[1].classList.replace('text-neutral-900', 'text-neutral-400');
                s.children[1].classList.replace('dark:text-white', 'text-neutral-400');
            });

            // Simulate progress (random step 1 to 4)
            const randomStep = Math.floor(Math.random() * 4) + 1;
            setTimeout(() => {
                const percentage = (randomStep - 1) * 33.33;
                trackProg.style.width = `${percentage}%`;
                
                for(let i=0; i<randomStep; i++) {
                    setTimeout(() => {
                        const s = trackSteps[i];
                        s.children[0].classList.replace('bg-neutral-200', 'bg-[#E63946]');
                        s.children[0].classList.replace('dark:bg-neutral-800', 'bg-[#E63946]');
                        s.children[0].classList.replace('text-neutral-400', 'text-white');
                        s.children[1].classList.replace('text-neutral-400', 'text-neutral-900');
                        s.children[1].classList.add('dark:text-white');
                    }, i * 300);
                }

                const msgs = ["Device logged into system.", "Technician evaluating device.", "Replacing components.", "Ready for pickup!"];
                setTimeout(() => { trackMsg.innerText = msgs[randomStep-1]; }, (randomStep * 300) + 200);

            }, 100);
        });

        // Comparison Slider Logic
        const compSlider = document.getElementById('comp-slider');
        const compOverlay = document.getElementById('comp-overlay');
        const compBtn = document.getElementById('comp-btn');

        compSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            compOverlay.style.width = `${val}%`;
            compBtn.style.left = `${val}%`;
        });

        // Modal Logic
        const modal = document.getElementById('product-modal');
        const modalContent = document.getElementById('modal-content');
        function openModal(title, price) {
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-price').innerText = price;
            modal.classList.remove('opacity-0', 'pointer-events-none');
            setTimeout(() => modalContent.classList.remove('scale-95'), 50);
        }
        function closeModal() {
            modalContent.classList.add('scale-95');
            setTimeout(() => modal.classList.add('opacity-0', 'pointer-events-none'), 300);
        }

        // Animated Counters
        const counters = document.querySelectorAll('.counter');
        let hasCounted = false;

        function updateCounters() {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;
                const increment = target / 100;
                if(c < target) {
                    counter.innerText = Math.ceil(c + increment);
                    setTimeout(updateCounters, 15);
                } else {
                    counter.innerText = target + (target > 100 ? '+' : '%');
                    if(target === 10) counter.innerText = '10+';
                }
            });
        }

        window.addEventListener('scroll', () => {
            if(!hasCounted && window.scrollY > document.querySelector('.counter').offsetTop - window.innerHeight) {
                updateCounters();
                hasCounted = true;
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
      

<div className="fixed top-0 left-0 h-[2px] bg-[#E63946] z-[100] w-0 transition-all duration-150 ease-out shadow-[0_0_10px_#E63946]" id="scroll-progress" style={{width: '88.6256%'}}></div>

<div className="bg-[#E63946] text-white text-xs py-2 overflow-hidden relative z-50">
<div className="flex whitespace-nowrap animate-marquee">
<span className="mx-4 tracking-tight">⚡ 20% OFF on Screen Replacement this week!</span>
<span className="mx-4 tracking-tight">•</span>
<span className="mx-4 tracking-tight">Free diagnostic with any repair booking.</span>
<span className="mx-4 tracking-tight">•</span>
<span className="mx-4 tracking-tight">New  accessories available.</span>
<span className="mx-4 tracking-tight">•</span>
<span className="mx-4 tracking-tight">⚡ 20% OFF on Screen Replacement this week!</span>
<span className="mx-4 tracking-tight">•</span>
<span className="mx-4 tracking-tight">Free diagnostic with any repair booking.</span>
</div>
</div>

<nav className="fixed w-full z-40 transition-all duration-300 py-4 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

<a className="flex flex-col group" href="#">
<span className="text-xl tracking-tighter font-medium group-hover:text-[#E63946] transition-colors">Awasthi Mobile HUb</span>
<span className="text-[0.65rem] tracking-widest text-neutral-400 uppercase">Repair. Upgrade. Connect.</span>
</a>

<div className="hidden lg:flex items-center space-x-8 text-sm">
<a className="hover:text-[#E63946] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#E63946] hover:after:w-full after:transition-all" href="#services">Services</a>
<a className="hover:text-[#E63946] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#E63946] hover:after:w-full after:transition-all" href="#repairs">Repairs</a>
<a className="hover:text-[#E63946] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#E63946] hover:after:w-full after:transition-all" href="#products">Products</a>
<a className="hover:text-[#E63946] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#E63946] hover:after:w-full after:transition-all" href="#about">About</a>
<button className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center" id="theme-toggle">
<iconify-icon className="dark:hidden" icon="solar:moon-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="hidden dark:block text-yellow-400" icon="solar:sun-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2 rounded-full text-xs font-medium hover:scale-105 transition-transform glow-effect" href="#booking">Book Repair</a>
</div>

<div className="lg:hidden flex items-center space-x-4">
<button className="p-2" id="theme-toggle-mobile">
<iconify-icon className="dark:hidden" icon="solar:moon-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="hidden dark:block text-yellow-400" icon="solar:sun-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-50 translate-x-full transition-transform duration-300" id="mobile-menu">
<div className="absolute right-0 top-0 bottom-0 w-64 bg-white dark:bg-neutral-900 shadow-2xl p-6 flex flex-col">
<div className="flex justify-end mb-8">
<button className="p-2" id="close-menu-btn">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col space-y-6 text-lg tracking-tight">
<a className="mobile-link" href="#services">Services</a>
<a className="mobile-link" href="#repairs">Repairs</a>
<a className="mobile-link" href="#products">Products</a>
<a className="mobile-link" href="#about">About</a>
<a className="mt-4 text-[#E63946] font-medium mobile-link" href="#booking">Book Repair →</a>
</div>
</div>
</div>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
<div className="absolute inset-0 bg-grid-pattern opacity-50 z-0"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E63946]/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">

<div className="space-y-8 reveal active">
<div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm text-xs">
<span className="w-2 h-2 rounded-full bg-[#E63946] animate-pulse"></span>
<span>India-Inspired Precision</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1]">
                    Smart Solutions for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500">Every Device.</span>
</h1>
<p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-md font-light">
                    We repair, sell, and upgrade mobile phones with speed, precision, and a minimalist approach to care.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#E63946] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-red-600 transition-colors flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(230,57,70,0.3)]" href="#booking">
<span>Book Repair</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="px-6 py-3 rounded-xl text-sm font-medium border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors flex items-center justify-center" href="#products">
                        Explore Products
                    </a>
</div>
</div>

<div className="relative h-[500px] flex justify-center items-center reveal active delay-200 perspective-1000 hidden md:flex">
<div className="relative w-64 h-[500px] bg-neutral-900 rounded-[3rem] border-8 border-neutral-800 shadow-2xl animate-float overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-10"></div>

<div className="absolute inset-0 bg-neutral-950 p-4 flex flex-col space-y-4">
<div className="w-full flex justify-between items-center text-white/50 text-xs">
<span>9:41</span>
<div className="flex space-x-1">
<iconify-icon icon="solar:cellurar-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:wifi-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" width="14"></iconify-icon>
</div>
</div>
<div className="w-full h-32 bg-gradient-to-br from-[#E63946]/20 to-transparent rounded-2xl flex items-center justify-center border border-white/5">
<iconify-icon className="text-[#E63946] opacity-50" icon="solar:cpu-linear" width="48"></iconify-icon>
</div>
<div className="flex-1 space-y-3">
<div className="h-12 w-full bg-white/5 rounded-xl"></div>
<div className="h-12 w-full bg-white/5 rounded-xl"></div>
</div>
</div>

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-neutral-950 rounded-full z-20 flex items-center justify-center space-x-2">
<div className="w-2 h-2 rounded-full bg-[#111] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E63946]/20 blur-[80px] rounded-full -z-10"></div>
</div>
</div>
</header>

<section className="py-24 bg-white dark:bg-neutral-950 relative" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Core Services.</h2>
<p className="text-neutral-500 text-sm max-w-md">Precision engineering meets aesthetic care. We handle your devices with utmost respect.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl reveal cursor-pointer">
<div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-[#E63946]">
<iconify-icon icon="solar:smartphone-update-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Screen Replacement</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Flawless display restoration using premium OLED/LCD panels. Fast turnaround.</p>
</div>

<div className="group p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl reveal cursor-pointer delay-100">
<div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-[#E63946]">
<iconify-icon icon="solar:battery-charge-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Battery Upgrade</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Restore your device's stamina with certified, high-capacity battery replacements.</p>
</div>

<div className="group p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl reveal cursor-pointer delay-200">
<div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-[#E63946]">
<iconify-icon icon="solar:motherboard-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Hardware Diagnostics</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Deep-level motherboard logic testing to identify and resolve complex issues.</p>
</div>

<div className="group p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl reveal cursor-pointer">
<div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-[#E63946]">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Camera Fix</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Lens replacement and sensor calibration to restore perfect image clarity.</p>
</div>

<div className="group p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl reveal cursor-pointer delay-100">
<div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-[#E63946]">
<iconify-icon icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Water Damage Recovery</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Ultrasonic cleaning and component-level repair to salvage wet devices.</p>
</div>

<div className="group p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl reveal cursor-pointer delay-200">
<div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-[#E63946]">
<iconify-icon icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Data Recovery</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Secure retrieval of photos, contacts, and files from dead or damaged phones.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 dark:bg-neutral-900/20 border-y border-neutral-200 dark:border-neutral-800 relative" id="repairs">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-start">

<div className="space-y-12">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Transparent Pricing.</h2>
<p className="text-neutral-500 text-sm">Know the cost before you commit. Select your device for an instant estimate.</p>
</div>

<div className="glass-panel rounded-3xl p-6 md:p-8 reveal shadow-sm">
<h3 className="text-lg font-medium tracking-tight mb-6 flex items-center space-x-2">
<iconify-icon icon="solar:calculator-linear"></iconify-icon>
<span>Estimate Repair Cost</span>
</h3>
<div className="space-y-4">
<div className="relative">
<select className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#E63946] transition-shadow cursor-pointer" id="calc-brand">
<option disabled="" selected="" value="">Select Brand</option>
<option value="apple">Apple iPhone</option>
<option value="samsung">Samsung Galaxy</option>
<option value="google">Google Pixel</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative">
<select className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#E63946] transition-shadow cursor-pointer" disabled="" id="calc-model">
<option disabled="" selected="" value="">Select Model First</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative">
<select className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#E63946] transition-shadow cursor-pointer" disabled="" id="calc-issue">
<option disabled="" selected="" value="">Select Issue Type</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800 hidden opacity-0 transition-opacity duration-500" id="calc-result">
<div className="flex justify-between items-end mb-2">
<span className="text-sm text-neutral-500">Estimated Total:</span>
<span className="text-3xl font-medium tracking-tighter text-[#E63946]" id="calc-price">$0</span>
</div>
<div className="flex items-center space-x-2 text-xs text-neutral-500">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span id="calc-time">Est. Time: --</span>
</div>
<p className="text-[0.65rem] text-neutral-400 mt-4">*Final price confirmed after physical inspection.</p>
</div>
</div>

<div className="reveal delay-100">
<h3 className="text-lg font-medium tracking-tight mb-4">Track Repair Status</h3>
<div className="flex space-x-2 mb-6">
<input className="flex-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#E63946]" id="tracker-input" placeholder="Enter Repair ID (e.g., ZM-102)" type="text"/>
<button className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 rounded-xl text-sm font-medium hover:scale-105 transition-transform" id="tracker-btn">Track</button>
</div>

<div className="hidden" id="tracker-ui">
<div className="relative flex justify-between items-center w-full px-2">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-neutral-200 dark:bg-neutral-800 -z-10"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#E63946] -z-10 transition-all duration-1000 w-0 shadow-[0_0_10px_rgba(230,57,70,0.5)]" id="tracker-progress-bar"></div>

<div className="flex flex-col items-center step active" data-step="1">
<div className="w-6 h-6 rounded-full bg-[#E63946] text-white flex items-center justify-center text-xs ring-4 ring-neutral-50 dark:ring-neutral-900 transition-colors duration-500"><iconify-icon icon="solar:box-linear" width="12"></iconify-icon></div>
<span className="text-[0.6rem] mt-2 text-neutral-900 dark:text-white font-medium">Received</span>
</div>
<div className="flex flex-col items-center step" data-step="2">
<div className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-400 flex items-center justify-center text-xs ring-4 ring-neutral-50 dark:ring-neutral-900 transition-colors duration-500"><iconify-icon icon="solar:magnifer-linear" width="12"></iconify-icon></div>
<span className="text-[0.6rem] mt-2 text-neutral-400">Diagnosis</span>
</div>
<div className="flex flex-col items-center step" data-step="3">
<div className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-400 flex items-center justify-center text-xs ring-4 ring-neutral-50 dark:ring-neutral-900 transition-colors duration-500"><iconify-icon icon="solar:screwdrive-linear" width="12"></iconify-icon></div>
<span className="text-[0.6rem] mt-2 text-neutral-400">Repairing</span>
</div>
<div className="flex flex-col items-center step" data-step="4">
<div className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-400 flex items-center justify-center text-xs ring-4 ring-neutral-50 dark:ring-neutral-900 transition-colors duration-500"><iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon></div>
<span className="text-[0.6rem] mt-2 text-neutral-400">Ready</span>
</div>
</div>
<p className="text-xs text-center mt-6 text-[#E63946] font-medium" id="tracker-msg"></p>
</div>
</div>
</div>

<div className="reveal h-full min-h-[400px] flex flex-col justify-center delay-200">
<div className="mb-6 flex justify-between items-center">
<h3 className="text-xl font-medium tracking-tight">The Zen Difference</h3>
<span className="text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-md">Slide to compare</span>
</div>

<div className="comparison-slider shadow-2xl h-[400px] bg-neutral-900">

<div className="w-full h-full bg-neutral-800 flex items-center justify-center overflow-hidden">

<div className="w-48 h-96 bg-black rounded-[2.5rem] border-4 border-neutral-700 relative overflow-hidden shadow-inner">
<div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-80"></div>
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full"></div>
</div>
</div>

<div className="comparison-overlay" id="comp-overlay">
<div className="w-full h-full bg-neutral-900 flex items-center justify-center overflow-hidden w-[calc(100vw_-_(100vw_-_100%))]">

<div className="w-48 h-96 bg-black rounded-[2.5rem] border-4 border-neutral-700 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-30"></div>

<svg className="absolute inset-0 w-full h-full text-white/50" preserveaspectratio="none" viewbox="0 0 100 200">
<path d="M20,0 L30,40 L10,60 L50,100 L30,120 L80,160 L60,200" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<path d="M80,0 L70,30 L90,50 L40,90 L60,130 L20,170" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<path d="M50,100 L90,120" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<path d="M30,40 L60,30" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</svg>
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full"></div>
</div>
</div>
</div>

<input className="comparison-input" id="comp-slider" max="100" min="0" type="range" value="50"/>
<div className="slider-button" id="comp-btn">
<iconify-icon icon="solar:arrows-left-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-neutral-950 relative" id="products">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Premium Accessories.</h2>
<p className="text-neutral-500 text-sm max-w-md">Curated gear to protect and enhance your digital life.</p>
</div>

<div className="flex space-x-2 mt-6 md:mt-0 overflow-x-auto pb-2">
<button className="px-4 py-2 rounded-full text-xs font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">All</button>
<button className="px-4 py-2 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">Cases</button>
<button className="px-4 py-2 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">Audio</button>
<button className="px-4 py-2 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">Power</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group reveal cursor-pointer relative">
<div className="absolute top-3 left-3 bg-[#E63946] text-white text-[0.6rem] px-2 py-1 rounded-full z-10 font-medium tracking-wide">Best Seller</div>
<div className="aspect-[4/5] bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden mb-4 relative flex items-center justify-center">
<iconify-icon className="text-neutral-300 dark:text-neutral-700 group-hover:scale-110 transition-transform duration-500" icon="solar:headphones-round-sound-linear" width="64"></iconify-icon>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
<button className="bg-white text-neutral-900 px-4 py-2 rounded-full text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300" onclick="openModal('ZenPods Pro', '$129')">View Details</button>
</div>
</div>
<h4 className="text-sm font-medium tracking-tight">ZenPods Pro ANC</h4>
<p className="text-xs text-neutral-500 mb-2">High-Fidelity Audio</p>
<p className="text-sm font-medium">$129.00</p>
</div>

<div className="group reveal cursor-pointer delay-100">
<div className="aspect-[4/5] bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden mb-4 relative flex items-center justify-center">
<iconify-icon className="text-neutral-300 dark:text-neutral-700 group-hover:scale-110 transition-transform duration-500" icon="solar:case-minimalistic-linear" width="64"></iconify-icon>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
<button className="bg-white text-neutral-900 px-4 py-2 rounded-full text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300" onclick="openModal('Aramid Fiber Case', '$45')">View Details</button>
</div>
</div>
<h4 className="text-sm font-medium tracking-tight">Aramid Fiber Case</h4>
<p className="text-xs text-neutral-500 mb-2">Ultra-thin protection</p>
<p className="text-sm font-medium">$45.00</p>
</div>

<div className="group reveal cursor-pointer delay-200">
<div className="aspect-[4/5] bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden mb-4 relative flex items-center justify-center">
<iconify-icon className="text-neutral-300 dark:text-neutral-700 group-hover:scale-110 transition-transform duration-500" icon="solar:plug-circle-linear" width="64"></iconify-icon>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
<button className="bg-white text-neutral-900 px-4 py-2 rounded-full text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300" onclick="openModal('65W GaN Charger', '$35')">View Details</button>
</div>
</div>
<h4 className="text-sm font-medium tracking-tight">65W GaN Fast Charger</h4>
<p className="text-xs text-neutral-500 mb-2">Dual Port Type-C</p>
<p className="text-sm font-medium">$35.00</p>
</div>

<div className="group reveal cursor-pointer delay-300">
<div className="aspect-[4/5] bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden mb-4 relative flex items-center justify-center">
<iconify-icon className="text-neutral-300 dark:text-neutral-700 group-hover:scale-110 transition-transform duration-500" icon="solar:battery-charge-minimalistic-linear" width="64"></iconify-icon>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
<button className="bg-white text-neutral-900 px-4 py-2 rounded-full text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300" onclick="openModal('Magnetic PowerBank', '$59')">View Details</button>
</div>
</div>
<h4 className="text-sm font-medium tracking-tight">Magnetic PowerBank 10K</h4>
<p className="text-xs text-neutral-500 mb-2">Snap-on charging</p>
<p className="text-sm font-medium">$59.00</p>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-md z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 p-4" id="product-modal">
<div className="bg-white dark:bg-neutral-900 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl scale-95 transition-transform duration-300 flex flex-col md:flex-row" id="modal-content">
<div className="w-full md:w-1/2 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center p-12 min-h-[300px]">
<iconify-icon className="text-neutral-400" icon="solar:box-minimalistic-linear" width="80"></iconify-icon>
</div>
<div className="w-full md:w-1/2 p-8 relative flex flex-col justify-center">
<button className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<h3 className="text-2xl font-medium tracking-tight mb-2" id="modal-title">Product Name</h3>
<p className="text-xl text-[#E63946] font-medium mb-4" id="modal-price">$0.00</p>
<p className="text-sm text-neutral-500 mb-6 font-light">Minimalist design meets maximum functionality. Crafted with precision for the modern user. Warranty included.</p>
<ul className="text-xs space-y-2 text-neutral-600 dark:text-neutral-400 mb-8 border-l-2 border-neutral-200 dark:border-neutral-800 pl-3">
<li>Premium materials</li>
<li>1 Year Warranty</li>
<li>Free shipping over $50</li>
</ul>
<button className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-3 rounded-xl text-sm font-medium flex items-center justify-center space-x-2 hover:scale-[1.02] transition-transform">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon>
<span>Inquire on WhatsApp</span>
</button>
</div>
</div>
</div>

<section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-neutral-800">
<div className="text-center reveal p-4">
<div className="text-center reveal p-4">
<div className="text-4xl md:text-5xl font-medium tracking-tighter mb-2 counter" data-target="10000">
        10000+
    </div>
<div className="text-xs text-neutral-400 uppercase tracking-widest">
        Devices Fixed
    </div>
</div>
<div className="text-xs text-neutral-400 uppercase tracking-widest">Success Rate %</div>
</div>
<div className="text-center reveal delay-200 p-4">
<div className="text-4xl md:text-5xl font-medium tracking-tighter mb-2 counter" data-target="10">2</div>
<div className="text-xs text-neutral-400 uppercase tracking-widest">Years Expertise</div>
</div>
<div className="text-center reveal delay-300 p-4">
<div className="text-4xl md:text-5xl font-medium tracking-tighter mb-2">4.9</div>
<div className="text-xs text-neutral-400 uppercase tracking-widest">Google Rating</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-neutral-950 relative border-b border-neutral-200 dark:border-neutral-800" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Meet the Masters.</h2>
<p className="text-neutral-500 text-sm">Our certified technicians combine deep technical knowledge with a passion for perfection.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

<div className="group reveal">
<div className="aspect-square bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden mb-4 relative filter grayscale group-hover:grayscale-0 transition-all duration-500">
<img alt="Tech" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"/>
<div className="absolute bottom-2 left-2 bg-white dark:bg-neutral-900 px-2 py-1 rounded text-[0.6rem] font-medium shadow-sm">Apple Certified</div>
</div>
<h4 className="text-base font-medium tracking-tight">Kenji Sato</h4>
<p className="text-xs text-neutral-500">Lead Logic Board Tech</p>
</div>

<div className="group reveal delay-100">
<div className="aspect-square bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden mb-4 relative filter grayscale group-hover:grayscale-0 transition-all duration-500">
<img alt="Tech" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"/>
<div className="absolute bottom-2 left-2 bg-white dark:bg-neutral-900 px-2 py-1 rounded text-[0.6rem] font-medium shadow-sm">Android Specialist</div>
</div>
<h4 className="text-base font-medium tracking-tight">Sarah Chen</h4>
<p className="text-xs text-neutral-500">Screen &amp; Glass Refurbisher</p>
</div>

<div className="group reveal delay-200">
<div className="aspect-square bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden mb-4 relative filter grayscale group-hover:grayscale-0 transition-all duration-500">
<img alt="Tech" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"/>
<div className="absolute bottom-2 left-2 bg-white dark:bg-neutral-900 px-2 py-1 rounded text-[0.6rem] font-medium shadow-sm">Hardware Eng.</div>
</div>
<h4 className="text-base font-medium tracking-tight">David Miller</h4>
<p className="text-xs text-neutral-500">Quality Control &amp; Diagnostics</p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-neutral-50 dark:bg-neutral-900/50">
<div className="max-w-5xl mx-auto px-6 md:px-12">
<div className="bg-neutral-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden reveal shadow-2xl">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#E63946]/20 blur-[80px] rounded-full"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
<div className="mb-6 md:mb-0 max-w-md">
<div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full text-[0.65rem] uppercase tracking-widest mb-4">
<iconify-icon className="text-yellow-400" icon="solar:star-fall-linear"></iconify-icon>
<span>Zen Rewards</span>
</div>
<h2 className="text-3xl font-medium tracking-tight mb-2">Join Our Loyalty Program.</h2>
<p className="text-sm text-neutral-400 font-light">Earn points on every repair. Redeem for free accessories, priority service, and exclusive discounts.</p>
</div>
<button className="shrink-0 hover:scale-105 transition-transform text-sm font-medium text-neutral-900 bg-white rounded-xl pt-3 pr-8 pb-3 pl-8 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Register Now
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-neutral-950" id="booking">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">

<div className="reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">Book a Repair.</h2>
<p className="text-neutral-500 text-sm mb-8">Walk-ins welcome, but booking saves you time.</p>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Booking request sent successfully!');">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#E63946]" placeholder="First Name" required="" type="text"/>
<input className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#E63946]" placeholder="Last Name" type="text"/>
</div>
<input className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#E63946]" placeholder="Phone Number" required="" type="tel"/>
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#E63946]" placeholder="Device (e.g., iPhone 13)" required="" type="text"/>
<div className="relative">
<select className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#E63946]">
<option>Screen Issue</option>
<option>Battery Issue</option>
<option>Not Powering On</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="relative">
<input className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#E63946] appearance-none text-neutral-400" required="" type="date"/>
</div>
<div className="relative">
<select className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#E63946]">
<option>Morning (9am - 12pm)</option>
<option>Afternoon (12pm - 4pm)</option>
<option>Evening (4pm - 7pm)</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-[#E63946] text-white py-4 rounded-xl text-sm font-medium hover:bg-red-600 transition-colors mt-4" type="submit">Confirm Booking</button>
</form>
</div>

<div className="reveal delay-100">
<h2 className="text-3xl font-medium tracking-tight mb-8">Frequent Questions.</h2>
<div className="space-y-4">

<details className="group bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium">
                            How long does a screen repair take?
                            <iconify-icon className="text-neutral-400 group-open:hidden w-5 h-5" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="text-[#E63946] hidden group-open:block w-5 h-5" icon="solar:minus-circle-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-sm text-neutral-500 font-light leading-relaxed">
                            Most standard screen replacements (iPhone, Samsung) take between 30 to 45 minutes if parts are in stock. Complex devices may take up to 2 hours.
                        </div>
</details>

<details className="group bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium">
                            Do you use genuine parts?
                            <iconify-icon className="text-neutral-400 group-open:hidden w-5 h-5" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="text-[#E63946] hidden group-open:block w-5 h-5" icon="solar:minus-circle-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-sm text-neutral-500 font-light leading-relaxed">
                            We offer two tiers: Original Equipment Manufacturer (OEM) parts for highest fidelity, and Premium Aftermarket options for budget-conscious repairs. Both come with a warranty.
                        </div>
</details>

<details className="group bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium">
                            Is there a warranty on repairs?
                            <iconify-icon className="text-neutral-400 group-open:hidden w-5 h-5" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="text-[#E63946] hidden group-open:block w-5 h-5" icon="solar:minus-circle-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-sm text-neutral-500 font-light leading-relaxed">
                            Yes, all screen and battery replacements come with a 6-month defect warranty. Motherboard repairs carry a 90-day warranty. Physical damage post-repair is not covered.
                        </div>
</details>
</div>
</div>
</div>
</section>

<section className="h-64 md:h-96 w-full bg-neutral-200 dark:bg-neutral-800 relative filter grayscale contrast-125 opacity-80 reveal">

<div className="absolute inset-0 flex items-center justify-center text-neutral-500 text-sm">
<iconify-icon className="mr-2" icon="solar:map-point-linear" width="24"></iconify-icon> Map Integration Area
        </div>
</section>

<footer className="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex flex-col mb-4" href="#">
<span className="text-xl tracking-tighter font-medium">Zen Mobile</span>
</a>
<p className="text-xs text-neutral-500 font-light leading-relaxed mb-4">Elevating tech repair through precision, transparency, and a minimalist design philosophy.</p>
<div className="flex space-x-4 text-neutral-400">
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#"><iconify-icon icon="solar:map-arrow-up-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium mb-4">Services</h4>
<ul className="space-y-2 text-xs text-neutral-500 font-light">
<li><a className="hover:text-[#E63946] transition-colors" href="#">Screen Repair</a></li>
<li><a className="hover:text-[#E63946] transition-colors" href="#">Battery Replacement</a></li>
<li><a className="hover:text-[#E63946] transition-colors" href="#">Data Recovery</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-xs text-neutral-500 font-light">
<li><a className="hover:text-[#E63946] transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-[#E63946] transition-colors" href="#">Store Policy</a></li>
<li><a className="hover:text-[#E63946] transition-colors" href="#">Warranty Info</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4">Stay Updated</h4>
<form className="flex relative" onsubmit="event.preventDefault();">
<input className="w-full bg-neutral-100 dark:bg-neutral-900 border-none rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#E63946] pr-12" placeholder="Email address" type="email"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg flex items-center justify-center hover:scale-105 transition-transform" type="submit">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[0.65rem] text-neutral-500">
<p>© 2023 Zen Mobile Care. All rights reserved.</p>
<div className="flex space-x-4 mt-4 md:mt-0">
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-2 transition-transform duration-300 z-50 group" href="#">
<div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
<iconify-icon icon="solar:chat-round-line-linear" width="28"></iconify-icon>

<span className="absolute right-16 bg-neutral-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">Chat With Us</span>
</a>



    </>
  );
}
