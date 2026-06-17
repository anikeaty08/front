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



        // Modal Logic
        const modal = document.getElementById('contactModal');
        const modalContent = document.getElementById('modalContent');
        function toggleModal() {
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    modalContent.classList.remove('scale-95');
                    modalContent.classList.add('scale-100');
                }, 10);
            } else {
                modal.classList.add('opacity-0');
                modalContent.classList.remove('scale-100');
                modalContent.classList.add('scale-95');
                setTimeout(() => {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                }, 300);
            }
        }
        modal.addEventListener('click', (e) => { if (e.target === modal) toggleModal(); });

        // Scroll Intersection Observer for Reveal animations
        const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    observer.unobserve(entry.target); // Reveal only once
                }
            });
        }, revealOptions);
        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

        // Parallax Background Logic
        const parallaxBg = document.getElementById('parallax-bg');
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (parallaxBg) {
                parallaxBg.style.transform = `translateY(${scrollY * 0.4}px)`;
            }
        });

        // 3D Card Carousel Logic
        let currentCardIndex = 0;
        const totalCards = 3;
        let autoPlayInterval;

        function updateCarousel() {
            for (let i = 0; i < totalCards; i++) {
                const card = document.getElementById(`card-${i}`);
                if (i === currentCardIndex) {
                    // Active Center Card
                    card.style.transform = 'translateX(0) scale(1) translateZ(0)';
                    card.style.opacity = '1';
                    card.style.zIndex = '30';
                } else if (i === (currentCardIndex + 1) % totalCards) {
                    // Right Card
                    card.style.transform = 'translateX(50%) scale(0.85) translateZ(-50px)';
                    card.style.opacity = '0.4';
                    card.style.zIndex = '20';
                } else {
                    // Left Card
                    card.style.transform = 'translateX(-50%) scale(0.85) translateZ(-50px)';
                    card.style.opacity = '0.4';
                    card.style.zIndex = '20';
                }
            }
        }

        function nextCard() {
            currentCardIndex = (currentCardIndex + 1) % totalCards;
            updateCarousel();
            resetAutoPlay();
        }

        function prevCard() {
            currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
            updateCarousel();
            resetAutoPlay();
        }

        function setActiveCard(index) {
            currentCardIndex = index;
            updateCarousel();
            resetAutoPlay();
        }

        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                currentCardIndex = (currentCardIndex + 1) % totalCards;
                updateCarousel();
            }, 4000);
        }

        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        }

        // Init Carousel
        updateCarousel();
        startAutoPlay();
    
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
      

<div bis_size='{"x":0,"y":2989,"w":1386,"h":959,"abs_x":480,"abs_y":3032}' className="fixed inset-0 z-0 pointer-events-none opacity-40 will-change-transform" id="parallax-bg">
<div bis_size='{"x":-138,"y":2893,"w":697,"h":697,"abs_x":342,"abs_y":2936}' className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-900/10 blur-[100px] animated-bg"></div>
<div bis_size='{"x":827,"y":3346,"w":697,"h":697,"abs_x":1307,"abs_y":3389}' className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-zinc-700/10 blur-[100px] animated-bg" style={{animationDelay: '-10s'}}></div>
</div>

<main bis_size='{"x":53,"y":32,"w":1280,"h":3030,"abs_x":533,"abs_y":75}' className="w-full max-w-7xl bg-zinc-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/5 overflow-hidden relative flex flex-col z-10">

<div bis_size='{"x":54,"y":33,"w":1278,"h":3028,"abs_x":534,"abs_y":76}' className="beam-container">
<div bis_size='{"x":309,"y":33,"w":1,"h":3028,"abs_x":789,"abs_y":76}' className="beam-line left-[20%]"><div bis_size='{"x":309,"y":-117,"w":1,"h":150,"abs_x":789,"abs_y":-74}' className="beam"></div></div>
<div bis_size='{"x":693,"y":33,"w":1,"h":3028,"abs_x":1173,"abs_y":76}' className="beam-line left-[50%]"><div bis_size='{"x":693,"y":-117,"w":1,"h":150,"abs_x":1173,"abs_y":-74}' className="beam beam-delay-1"></div></div>
<div bis_size='{"x":1076,"y":33,"w":1,"h":3028,"abs_x":1556,"abs_y":76}' className="beam-line left-[80%]"><div bis_size='{"x":1076,"y":-117,"w":1,"h":150,"abs_x":1556,"abs_y":-74}' className="beam beam-delay-2"></div></div>
</div>

<header bis_size='{"x":54,"y":33,"w":1278,"h":65,"abs_x":534,"abs_y":76}' className="sticky z-50 bg-zinc-900/60 w-full border-white/5 border-b top-0 backdrop-blur-md">
<div bis_size='{"x":54,"y":33,"w":1278,"h":64,"abs_x":534,"abs_y":76}' className="container mx-auto px-6 h-16 flex items-center justify-between">
<a bis_size='{"x":78,"y":51,"w":58,"h":28,"abs_x":558,"abs_y":94}' className="flex items-center gap-2 group" href="#">
<span bis_size='{"x":78,"y":51,"w":58,"h":28,"abs_x":558,"abs_y":94}' className="text-xl font-thin text-zinc-100 tracking-tight font-playfair">Velora.</span>
</a>
<nav bis_size='{"x":454,"y":55,"w":291,"h":20,"abs_x":934,"abs_y":98}' className="hidden md:flex items-center gap-8 text-sm font-medium">
<a bis_size='{"x":454,"y":55,"w":58,"h":20,"abs_x":934,"abs_y":98}' className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#features">Features</a>
<a bis_size='{"x":544,"y":55,"w":56,"h":20,"abs_x":1024,"abs_y":98}' className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#portfolio">Portfolio</a>
<a bis_size='{"x":632,"y":55,"w":34,"h":20,"abs_x":1112,"abs_y":98}' className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#testimonials">Trust</a>
<a bis_size='{"x":699,"y":55,"w":46,"h":20,"abs_x":1179,"abs_y":98}' className="text-zinc-400 hover:text-zinc-100 transition-colors" href="#pricing">Pricing</a>
</nav>
<div bis_size='{"x":1063,"y":46,"w":244,"h":38,"abs_x":1543,"abs_y":89}' className="flex items-center gap-4">
<button bis_size='{"x":1063,"y":55,"w":80,"h":20,"abs_x":1543,"abs_y":98}' className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors" onclick="toggleModal()">
                        Get in touch
                    </button>
<a bis_size='{"x":1160,"y":46,"w":147,"h":38,"abs_x":1640,"abs_y":89}' className="flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium transition-all" href="https://wa.me/7620039536">
<iconify-icon bis_size='{"x":1177,"y":58,"w":14,"h":14,"abs_x":1657,"abs_y":101}' className="" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
<span bis_size='{"x":1199,"y":55,"w":91,"h":20,"abs_x":1679,"abs_y":98}' className="">WhatsApp Us</span>
</a>
<button bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>
<div bis_size='{"x":54,"y":98,"w":1278,"h":2963,"abs_x":534,"abs_y":141}' className="flex-1 overflow-y-auto overflow-x-hidden scroll-container z-10">

<section bis_size='{"x":54,"y":98,"w":1278,"h":586,"abs_x":534,"abs_y":141}' className="flex flex-col lg:px-12 lg:pt-24 lg:pb-24 text-center pt-20 pr-6 pb-20 pl-6 relative items-center">
<div bis_size='{"x":393,"y":98,"w":600,"h":600,"abs_x":873,"abs_y":141}' className="glow-effect top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-40"></div>
<div bis_size='{"x":549,"y":194,"w":286,"h":26,"abs_x":1029,"abs_y":237}' className="inline-flex gap-2 animate-fade-in-up text-xs font-medium text-zinc-400 bg-zinc-800/50 border-white/5 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span bis_size='{"x":562,"y":203,"w":8,"h":8,"abs_x":1042,"abs_y":246}' className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                    Now accepting salon partners across India
                </div>
<h1 bis_size='{"x":285,"y":252,"w":815,"h":158,"abs_x":765,"abs_y":295}' className="md:text-6xl lg:text-7xl leading-tight animate-fade-in-up delay-100 text-3xl font-medium text-zinc-100 tracking-tight max-w-4xl">
                    We build beautiful <br bis_size='{"x":987,"y":244,"w":0,"h":87,"abs_x":1467,"abs_y":287}' className="hidden md:block"/>
<span bis_size='{"x":285,"y":324,"w":329,"h":86,"abs_x":765,"abs_y":367}' className="text-emerald-400 word-slider-container">
<span bis_size='{"x":285,"y":324,"w":329,"h":259,"abs_x":765,"abs_y":367}' className="word-slider">
<span bis_size='{"x":285,"y":324,"w":329,"h":86,"abs_x":765,"abs_y":367}' className="block h-[1.2em]">pages</span>
<span bis_size='{"x":285,"y":410,"w":329,"h":86,"abs_x":765,"abs_y":453}' className="block h-[1.2em]">products</span>
<span bis_size='{"x":285,"y":496,"w":329,"h":86,"abs_x":765,"abs_y":539}' className="block h-[1.2em]">marketing</span>
</span>
</span>
                    for your salon.
                </h1>
<p bis_size='{"x":357,"y":442,"w":672,"h":56,"abs_x":837,"abs_y":485}' className="md:text-lg leading-relaxed animate-fade-in-up delay-200 text-sm font-normal text-zinc-400 max-w-2xl mt-8 mr-auto ml-auto">Premium yet simple web design created especially for small salon owners in Tier 2 and Tier 3 India.</p>
<div bis_size='{"x":518,"y":538,"w":349,"h":50,"abs_x":998,"abs_y":581}' className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
<a bis_size='{"x":518,"y":539,"w":191,"h":48,"abs_x":998,"abs_y":582}' className="sm:w-auto flex items-center justify-center gap-2 hover:bg-white transition-all shadow-white/5 text-base font-medium text-zinc-900 bg-zinc-100 w-full max-w-xl max-h-min rounded-full pt-3 pr-3 pb-3 pl-3 shadow-lg" href="https://wa.me/7620039536">
<iconify-icon bis_size='{"x":530,"y":555,"w":16,"h":16,"abs_x":1010,"abs_y":598}' icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
                        Chat on WhatsApp
                    </a>
<button bis_size='{"x":725,"y":538,"w":142,"h":50,"abs_x":1205,"abs_y":581}' className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900/50 backdrop-blur hover:bg-zinc-800 border border-zinc-700 text-zinc-100 px-6 py-3 rounded-full text-base font-medium transition-all" onclick="toggleModal()">
                        Get in touch
                    </button>
</div>
</section>

<section bis_size='{"x":54,"y":684,"w":1278,"h":118,"abs_x":534,"abs_y":727}' className="border-y overflow-hidden reveal bg-zinc-950/30 border-white/5 pt-10 pb-10 relative">
<div bis_size='{"x":54,"y":725,"w":1278,"h":36,"abs_x":534,"abs_y":768}' className="marquee-mask w-full">
<div bis_size='{"x":54,"y":725,"w":1757,"h":36,"abs_x":534,"abs_y":768}' className="animate-marquee flex items-center gap-16 py-2">

<div bis_size='{"x":54,"y":733,"w":142,"h":20,"abs_x":534,"abs_y":776}' className="flex items-center gap-2 text-zinc-500 whitespace-nowrap"><iconify-icon bis_size='{"x":54,"y":734,"w":18,"h":18,"abs_x":534,"abs_y":777}' className="text-lg" icon="solar:shield-check-linear"></iconify-icon><span bis_size='{"x":80,"y":733,"w":116,"h":20,"abs_x":560,"abs_y":776}' className="text-sm font-medium">Secure &amp; Reliable</span></div>
<div bis_size='{"x":260,"y":733,"w":107,"h":20,"abs_x":740,"abs_y":776}' className="flex items-center gap-2 text-zinc-500 whitespace-nowrap"><iconify-icon bis_size='{"x":260,"y":734,"w":18,"h":18,"abs_x":740,"abs_y":777}' className="text-lg" icon="solar:smartphone-linear"></iconify-icon><span bis_size='{"x":286,"y":733,"w":81,"h":20,"abs_x":766,"abs_y":776}' className="text-sm font-medium">Mobile-First</span></div>
<div bis_size='{"x":431,"y":733,"w":111,"h":20,"abs_x":911,"abs_y":776}' className="flex items-center gap-2 text-zinc-500 whitespace-nowrap"><iconify-icon bis_size='{"x":431,"y":734,"w":18,"h":18,"abs_x":911,"abs_y":777}' className="text-lg" icon="solar:bolt-linear"></iconify-icon><span bis_size='{"x":457,"y":733,"w":85,"h":20,"abs_x":937,"abs_y":776}' className="text-sm font-medium">Fast Loading</span></div>
<div bis_size='{"x":607,"y":733,"w":105,"h":20,"abs_x":1087,"abs_y":776}' className="flex items-center gap-2 text-zinc-500 whitespace-nowrap"><iconify-icon bis_size='{"x":607,"y":734,"w":18,"h":18,"abs_x":1087,"abs_y":777}' className="text-lg" icon="solar:heart-linear"></iconify-icon><span bis_size='{"x":633,"y":733,"w":79,"h":20,"abs_x":1113,"abs_y":776}' className="text-sm font-medium">Builds Trust</span></div>

<div bis_size='{"x":776,"y":733,"w":142,"h":20,"abs_x":1256,"abs_y":776}' className="flex items-center gap-2 text-zinc-500 whitespace-nowrap"><iconify-icon bis_size='{"x":776,"y":734,"w":18,"h":18,"abs_x":1256,"abs_y":777}' className="text-lg" icon="solar:shield-check-linear"></iconify-icon><span bis_size='{"x":802,"y":733,"w":116,"h":20,"abs_x":1282,"abs_y":776}' className="text-sm font-medium">Secure &amp; Reliable</span></div>
<div bis_size='{"x":982,"y":733,"w":107,"h":20,"abs_x":1462,"abs_y":776}' className="flex items-center gap-2 text-zinc-500 whitespace-nowrap"><iconify-icon bis_size='{"x":982,"y":734,"w":18,"h":18,"abs_x":1462,"abs_y":777}' className="text-lg" icon="solar:smartphone-linear"></iconify-icon><span bis_size='{"x":1008,"y":733,"w":81,"h":20,"abs_x":1488,"abs_y":776}' className="text-sm font-medium">Mobile-First</span></div>
<div bis_size='{"x":1153,"y":733,"w":111,"h":20,"abs_x":1633,"abs_y":776}' className="flex items-center gap-2 text-zinc-500 whitespace-nowrap"><iconify-icon bis_size='{"x":1153,"y":734,"w":18,"h":18,"abs_x":1633,"abs_y":777}' className="text-lg" icon="solar:bolt-linear"></iconify-icon><span bis_size='{"x":1179,"y":733,"w":85,"h":20,"abs_x":1659,"abs_y":776}' className="text-sm font-medium">Fast Loading</span></div>
<div bis_size='{"x":1329,"y":733,"w":105,"h":20,"abs_x":1809,"abs_y":776}' className="flex items-center gap-2 text-zinc-500 whitespace-nowrap"><iconify-icon bis_size='{"x":1329,"y":734,"w":18,"h":18,"abs_x":1809,"abs_y":777}' className="text-lg" icon="solar:heart-linear"></iconify-icon><span bis_size='{"x":1355,"y":733,"w":79,"h":20,"abs_x":1835,"abs_y":776}' className="text-sm font-medium">Builds Trust</span></div>

<div bis_size='{"x":1498,"y":733,"w":142,"h":20,"abs_x":1978,"abs_y":776}' className="flex items-center gap-2 text-zinc-500 whitespace-nowrap"><iconify-icon bis_size='{"x":1498,"y":734,"w":18,"h":18,"abs_x":1978,"abs_y":777}' className="text-lg" icon="solar:shield-check-linear"></iconify-icon><span bis_size='{"x":1524,"y":733,"w":116,"h":20,"abs_x":2004,"abs_y":776}' className="text-sm font-medium">Secure &amp; Reliable</span></div>
<div bis_size='{"x":1704,"y":733,"w":107,"h":20,"abs_x":2184,"abs_y":776}' className="flex items-center gap-2 text-zinc-500 whitespace-nowrap"><iconify-icon bis_size='{"x":1704,"y":734,"w":18,"h":18,"abs_x":2184,"abs_y":777}' className="text-lg" icon="solar:smartphone-linear"></iconify-icon><span bis_size='{"x":1730,"y":733,"w":81,"h":20,"abs_x":2210,"abs_y":776}' className="text-sm font-medium">Mobile-First</span></div>
</div>
</div>
</section>

<section bis_size='{"x":54,"y":802,"w":1278,"h":2259,"abs_x":534,"abs_y":845}' className="lg:px-12 lg:pt-24 lg:pb-24 bg-zinc-950/30 pt-20 pr-6 pb-15 pl-6">
<div bis_size='{"x":117,"y":898,"w":1152,"h":2067,"abs_x":597,"abs_y":941}' className="max-w-6xl mr-auto ml-auto">
<div bis_size='{"x":117,"y":898,"w":1152,"h":100,"abs_x":597,"abs_y":941}' className="mb-16 text-center reveal">
<h2 bis_size='{"x":117,"y":898,"w":1152,"h":36,"abs_x":597,"abs_y":941}' className="md:text-3xl text-2xl font-medium text-zinc-100 tracking-tight mb-4">Everything you need, nothing you don't.</h2>
<p bis_size='{"x":357,"y":950,"w":672,"h":48,"abs_x":837,"abs_y":993}' className="text-base text-zinc-400 max-w-2xl mx-auto">We focus on what matters: making your salon look established and reliable from the first glance.</p>
</div>

<div bis_size='{"x":117,"y":1062,"w":1152,"h":342,"abs_x":597,"abs_y":1105}' className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div bis_size='{"x":117,"y":1062,"w":564,"h":342,"abs_x":597,"abs_y":1105}' className="glass-gradient overflow-hidden group reveal delay-100 border-white/5 border rounded-3xl pt-4 pr-4 pb-4 pl-4 relative reveal-active">
<div bis_size='{"x":38,"y":983,"w":300,"h":300,"abs_x":518,"abs_y":1026}' className="glow-effect -top-20 -left-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<h3 bis_size='{"x":134,"y":1079,"w":530,"h":28,"abs_x":614,"abs_y":1122}' className="text-xl font-medium text-zinc-100 tracking-tight mb-2">Direct Lead Generation</h3>
<p bis_size='{"x":134,"y":1115,"w":530,"h":48,"abs_x":614,"abs_y":1158}' className="text-base text-zinc-400 mb-8">Integrated directly with WhatsApp and phone calls so you get inquiries quickly and safely.</p>
<div bis_size='{"x":134,"y":1195,"w":530,"h":192,"abs_x":614,"abs_y":1238}' className="flex bg-zinc-900/50 w-full h-48 border-white/5 border rounded-xl pt-2 pr-2 pb-2 pl-2 items-center justify-center">
<div bis_size='{"x":207,"y":1240,"w":384,"h":102,"abs_x":687,"abs_y":1283}' className="w-full max-w-sm bg-zinc-800/80 rounded-lg p-4 border border-zinc-700/50 flex flex-col gap-3">
<div bis_size='{"x":224,"y":1257,"w":116,"h":16,"abs_x":704,"abs_y":1300}' className="h-4 w-1/3 bg-zinc-700 rounded"></div>
<div bis_size='{"x":224,"y":1285,"w":350,"h":40,"abs_x":704,"abs_y":1328}' className="h-10 w-full bg-emerald-500/20 border border-emerald-500/30 rounded flex items-center justify-center gap-2 text-emerald-400 text-sm font-medium">
<iconify-icon bis_size='{"x":313,"y":1298,"w":14,"h":14,"abs_x":793,"abs_y":1341}' icon="solar:chat-line-linear"></iconify-icon> Contact via WhatsApp
                                    </div>
</div>
</div>
</div>
<div bis_size='{"x":705,"y":1062,"w":564,"h":342,"abs_x":1185,"abs_y":1105}' className="glass-gradient overflow-hidden group reveal delay-200 border-white/5 border rounded-3xl pt-4 pr-4 pb-4 pl-4 relative reveal-active">
<div bis_size='{"x":1048,"y":1183,"w":300,"h":300,"abs_x":1528,"abs_y":1226}' className="glow-effect -bottom-20 -right-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<h3 bis_size='{"x":722,"y":1079,"w":530,"h":28,"abs_x":1202,"abs_y":1122}' className="text-xl font-medium text-zinc-100 tracking-tight mb-2">Mobile-First Experience</h3>
<p bis_size='{"x":722,"y":1115,"w":530,"h":48,"abs_x":1202,"abs_y":1158}' className="text-base text-zinc-400 mb-8">Designed specifically for Indian mobile users, ensuring simple navigation and fast load times.</p>
<div bis_size='{"x":722,"y":1195,"w":530,"h":192,"abs_x":1202,"abs_y":1238}' className="flex overflow-hidden bg-zinc-900/50 w-full h-48 border-white/5 border rounded-xl relative items-center justify-center">
<div bis_size='{"x":939,"y":1235,"w":96,"h":160,"abs_x":1419,"abs_y":1278}' className="w-24 h-40 bg-zinc-800 border-2 border-zinc-600 rounded-2xl relative mt-12 flex flex-col items-center pt-2">
<div bis_size='{"x":971,"y":1245,"w":32,"h":4,"abs_x":1451,"abs_y":1288}' className="w-8 h-1 bg-zinc-700 rounded-full mb-2"></div>
<div bis_size='{"x":941,"y":1257,"w":92,"h":136,"abs_x":1421,"abs_y":1300}' className="w-full flex-1 bg-zinc-900/80 rounded-t-lg border-t border-zinc-700/50 px-2 py-3 flex flex-col gap-2">
<div bis_size='{"x":949,"y":1270,"w":76,"h":48,"abs_x":1429,"abs_y":1313}' className="bg-zinc-800 w-full h-12 rounded"></div>
<div bis_size='{"x":949,"y":1326,"w":76,"h":16,"abs_x":1429,"abs_y":1369}' className="w-full h-4 bg-zinc-800 rounded"></div>
</div>
</div>
<div bis_size='{"x":723,"y":1196,"w":528,"h":190,"abs_x":1203,"abs_y":1239}' className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div></section>

<section bis_size='{"x":117,"y":1428,"w":1152,"h":218,"abs_x":597,"abs_y":1471}' className="border-y overflow-hidden reveal bg-zinc-950/30 border-zinc-900 ring-0 pt-10 pb-10 relative">
<div bis_size='{"x":117,"y":1469,"w":1152,"h":136,"abs_x":597,"abs_y":1512}' className="marquee-mask w-full">
<div bis_size='{"x":117,"y":1469,"w":5352,"h":136,"abs_x":597,"abs_y":1512}' className="animate-marquee-fast flex items-stretch gap-10 py-2">

<div bis_size='{"x":117,"y":1477,"w":360,"h":120,"abs_x":597,"abs_y":1520}' className="shrink-0 min-w-[85vw] sm:min-w-[280px]">
<div bis_size='{"x":117,"y":1477,"w":360,"h":120,"abs_x":597,"abs_y":1520}' className="reveal reveal-active bg-zinc-900/30 border-white/5 border ring-emerald-900 ring-1 rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-2xl backdrop-blur-2xl h-full overflow-hidden">
<iconify-icon bis_size='{"x":130,"y":1490,"w":20,"h":20,"abs_x":610,"abs_y":1533}' className="text-zinc-400 text-xl mb-4" icon="solar:eye-linear"></iconify-icon>
<h4 bis_size='{"x":130,"y":1532,"w":334,"h":24,"abs_x":610,"abs_y":1575}' className="text-base font-medium text-zinc-100 tracking-tight mb-2">Clean Aesthetics</h4>
<p bis_size='{"x":130,"y":1564,"w":334,"h":20,"abs_x":610,"abs_y":1607}' className="text-sm text-zinc-500 leading-relaxed break-words">
            Calm and trustworthy designs that make your salon look premium.
          </p>
</div>
</div>
<div bis_size='{"x":501,"y":1477,"w":360,"h":120,"abs_x":981,"abs_y":1520}' className="shrink-0 min-w-[85vw] sm:min-w-[280px]">
<div bis_size='{"x":501,"y":1477,"w":360,"h":120,"abs_x":981,"abs_y":1520}' className="reveal delay-100 bg-zinc-900/30 border-white/5 border ring-emerald-900 ring-1 rounded-2xl pt-3 pr-3 pb-3 pl-3 rotate-x-5 reveal-active h-full">
<iconify-icon bis_size='{"x":514,"y":1490,"w":20,"h":20,"abs_x":994,"abs_y":1533}' className="text-zinc-400 text-xl mb-4" height="20" icon="solar:shield-minimalistic-linear" width="20"></iconify-icon>
<h4 bis_size='{"x":514,"y":1532,"w":334,"h":24,"abs_x":994,"abs_y":1575}' className="text-base font-medium text-zinc-100 tracking-tight mb-2">Digital Credibility</h4>
<p bis_size='{"x":514,"y":1564,"w":334,"h":20,"abs_x":994,"abs_y":1607}' className="text-sm text-zinc-500 ring-green-600">
            Build respect and reputation from the first glance online.
          </p>
</div>
</div>
<div bis_size='{"x":885,"y":1477,"w":360,"h":120,"abs_x":1365,"abs_y":1520}' className="shrink-0 min-w-[85vw] sm:min-w-[280px]">
<div bis_size='{"x":885,"y":1477,"w":360,"h":120,"abs_x":1365,"abs_y":1520}' className="reveal delay-200 bg-zinc-900/30 border-white/5 border ring-emerald-900 ring-1 rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow-[0_0.57px_8.6px_rgba(0,0,0,0.07),0_1.37px_10.9px_rgba(0,0,0,0.099),0_2.57px_20.5px_rgba(0,0,0,0.123),0_4.58px_36.6px_rgba(0,0,0,0.147),0_8.58px_68.5px_rgba(0,0,0,0.176),0_20.5px_163.4px_rgba(0,0,0,0.24)] blur-md reveal-active h-full">
<iconify-icon bis_size='{"x":898,"y":1490,"w":20,"h":20,"abs_x":1378,"abs_y":1533}' className="text-zinc-400 text-xl mb-4" icon="solar:clock-circle-linear"></iconify-icon>
<h4 bis_size='{"x":898,"y":1532,"w":334,"h":24,"abs_x":1378,"abs_y":1575}' className="text-base font-medium text-zinc-100 tracking-tight mb-2">Zero Maintenance</h4>
<p bis_size='{"x":898,"y":1564,"w":334,"h":20,"abs_x":1378,"abs_y":1607}' className="text-sm text-zinc-500">
            We handle the technical side so you can focus on your business.
          </p>
</div>
</div>
<div bis_size='{"x":1269,"y":1477,"w":360,"h":120,"abs_x":1749,"abs_y":1520}' className="shrink-0 min-w-[85vw] sm:min-w-[280px]">
<div bis_size='{"x":1269,"y":1477,"w":360,"h":120,"abs_x":1749,"abs_y":1520}' className="reveal reveal-active bg-zinc-900/30 border-white/5 border ring-emerald-900 ring-1 rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-2xl backdrop-blur-2xl h-full overflow-hidden hidden">
<iconify-icon bis_size='{"x":1282,"y":1490,"w":20,"h":20,"abs_x":1762,"abs_y":1533}' className="text-zinc-400 text-xl mb-4" icon="solar:magnifier-linear"></iconify-icon>
<h4 bis_size='{"x":1282,"y":1532,"w":334,"h":24,"abs_x":1762,"abs_y":1575}' className="text-base font-medium text-zinc-100 tracking-tight mb-2">Local Discovery</h4>
<p bis_size='{"x":1282,"y":1564,"w":334,"h":20,"abs_x":1762,"abs_y":1607}' className="text-sm text-zinc-500">
            Optimized structure to help local customers find you easily.
          </p>
</div>
</div>
<div bis_size='{"x":1653,"y":1477,"w":360,"h":120,"abs_x":2133,"abs_y":1520}' className="shrink-0 min-w-[85vw] sm:min-w-[280px]">
<div bis_size='{"x":1653,"y":1477,"w":360,"h":120,"abs_x":2133,"abs_y":1520}' className="reveal delay-100 bg-zinc-900/30 border-white/5 border ring-emerald-900 ring-1 rounded-2xl pt-3 pr-3 pb-3 pl-3 rotate-x-5 reveal-active h-full overflow-hidden">
<iconify-icon bis_size='{"x":1666,"y":1490,"w":20,"h":20,"abs_x":2146,"abs_y":1533}' className="text-zinc-400 text-xl mb-4" icon="solar:gallery-linear"></iconify-icon>
<h4 bis_size='{"x":1666,"y":1532,"w":334,"h":24,"abs_x":2146,"abs_y":1575}' className="text-base font-medium text-zinc-100 tracking-tight mb-2">Service Showcase</h4>
<p bis_size='{"x":1666,"y":1564,"w":334,"h":20,"abs_x":2146,"abs_y":1607}' className="text-sm text-zinc-500">
            Clear display of your services, pricing, and salon ambiance.
          </p>
</div>
</div>
<div bis_size='{"x":2037,"y":1477,"w":360,"h":120,"abs_x":2517,"abs_y":1520}' className="shrink-0 min-w-[85vw] sm:min-w-[280px]">
<div bis_size='{"x":2037,"y":1477,"w":360,"h":120,"abs_x":2517,"abs_y":1520}' className="reveal delay-200 bg-zinc-900/30 border-white/5 border ring-emerald-900 ring-1 rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow-[0_0.57px_8.6px_rgba(0,0,0,0.07),0_1.37px_10.9px_rgba(0,0,0,0.099),0_2.57px_20.5px_rgba(0,0,0,0.123),0_4.58px_36.6px_rgba(0,0,0,0.147),0_8.58px_68.5px_rgba(0,0,0,0.176),0_20.5px_163.4px_rgba(0,0,0,0.24)] blur-md reveal-active h-full overflow-hidden">
<iconify-icon bis_size='{"x":2050,"y":1490,"w":20,"h":20,"abs_x":2530,"abs_y":1533}' className="text-zinc-400 text-xl mb-4" icon="solar:lock-password-linear"></iconify-icon>
<h4 bis_size='{"x":2050,"y":1532,"w":334,"h":24,"abs_x":2530,"abs_y":1575}' className="text-base font-medium text-zinc-100 tracking-tight mb-2">Secure &amp; Private</h4>
<p bis_size='{"x":2050,"y":1564,"w":334,"h":20,"abs_x":2530,"abs_y":1607}' className="text-sm text-zinc-500">
            Inquiries go directly to you. No complicated dashboards.
          </p>
</div>
</div>

<div bis_size='{"x":2421,"y":1477,"w":360,"h":120,"abs_x":2901,"abs_y":1520}' className="shrink-0 min-w-[85vw] sm:min-w-[280px]">
<div bis_size='{"x":2421,"y":1477,"w":360,"h":120,"abs_x":2901,"abs_y":1520}' className="reveal reveal-active bg-zinc-900/30 border-white/5 border ring-emerald-900 ring-1 rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-2xl backdrop-blur-2xl h-full overflow-hidden">
<iconify-icon bis_size='{"x":2434,"y":1490,"w":20,"h":20,"abs_x":2914,"abs_y":1533}' className="text-zinc-400 text-xl mb-4" icon="solar:eye-linear"></iconify-icon>
<h4 bis_size='{"x":2434,"y":1532,"w":334,"h":24,"abs_x":2914,"abs_y":1575}' className="text-base font-medium text-zinc-100 tracking-tight mb-2">Clean Aesthetics</h4>
<p bis_size='{"x":2434,"y":1564,"w":334,"h":20,"abs_x":2914,"abs_y":1607}' className="text-sm text-zinc-500">
            Calm and trustworthy designs that make your salon look premium.
          </p>
</div>
</div>
<div bis_size='{"x":2805,"y":1477,"w":360,"h":120,"abs_x":3285,"abs_y":1520}' className="shrink-0 min-w-[85vw] sm:min-w-[280px]">
<div bis_size='{"x":2805,"y":1477,"w":360,"h":120,"abs_x":3285,"abs_y":1520}' className="reveal delay-100 bg-zinc-900/30 border-white/5 border ring-emerald-900 ring-1 rounded-2xl pt-3 pr-3 pb-3 pl-3 rotate-x-5 reveal-active h-full overflow-hidden">
<iconify-icon bis_size='{"x":2818,"y":1490,"w":20,"h":20,"abs_x":3298,"abs_y":1533}' className="text-zinc-400 text-xl mb-4" height="20" icon="solar:shield-minimalistic-linear" width="20"></iconify-icon>
<h4 bis_size='{"x":2818,"y":1532,"w":334,"h":24,"abs_x":3298,"abs_y":1575}' className="text-base font-medium text-zinc-100 tracking-tight mb-2">Digital Credibility</h4>
<p bis_size='{"x":2818,"y":1564,"w":334,"h":20,"abs_x":3298,"abs_y":1607}' className="text-sm text-zinc-500 ring-green-600">
            Build respect and reputation from the first glance online.
          </p>
</div>
</div>
<div bis_size='{"x":3189,"y":1477,"w":360,"h":120,"abs_x":3669,"abs_y":1520}' className="shrink-0 min-w-[85vw] sm:min-w-[280px]">
<div bis_size='{"x":3189,"y":1477,"w":360,"h":120,"abs_x":3669,"abs_y":1520}' className="reveal delay-200 bg-zinc-900/30 border-white/5 border ring-emerald-900 ring-1 rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow-[0_0.57px_8.6px_rgba(0,0,0,0.07),0_1.37px_10.9px_rgba(0,0,0,0.099),0_2.57px_20.5px_rgba(0,0,0,0.123),0_4.58px_36.6px_rgba(0,0,0,0.147),0_8.58px_68.5px_rgba(0,0,0,0.176),0_20.5px_163.4px_rgba(0,0,0,0.24)] blur-md reveal-active h-full overflow-hidden">
<iconify-icon bis_size='{"x":3202,"y":1490,"w":20,"h":20,"abs_x":3682,"abs_y":1533}' className="text-zinc-400 text-xl mb-4" icon="solar:clock-circle-linear"></iconify-icon>
<h4 bis_size='{"x":3202,"y":1532,"w":334,"h":24,"abs_x":3682,"abs_y":1575}' className="text-base font-medium text-zinc-100 tracking-tight mb-2">Zero Maintenance</h4>
<p bis_size='{"x":3202,"y":1564,"w":334,"h":20,"abs_x":3682,"abs_y":1607}' className="text-sm text-zinc-500">
            We handle the technical side so you can focus on your business.
          </p>
</div>
</div>
<div bis_size='{"x":3573,"y":1477,"w":360,"h":120,"abs_x":4053,"abs_y":1520}' className="shrink-0 min-w-[85vw] sm:min-w-[280px]">
<div bis_size='{"x":3573,"y":1477,"w":360,"h":120,"abs_x":4053,"abs_y":1520}' className="reveal reveal-active bg-zinc-900/30 border-white/5 border ring-emerald-900 ring-1 rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-2xl backdrop-blur-2xl h-full overflow-hidden">
<iconify-icon bis_size='{"x":3586,"y":1490,"w":20,"h":20,"abs_x":4066,"abs_y":1533}' className="text-zinc-400 text-xl mb-4" icon="solar:magnifer-linear"></iconify-icon>
<h4 bis_size='{"x":3586,"y":1532,"w":334,"h":24,"abs_x":4066,"abs_y":1575}' className="text-base font-medium text-zinc-100 tracking-tight mb-2">Local Discovery</h4>
<p bis_size='{"x":3586,"y":1564,"w":334,"h":20,"abs_x":4066,"abs_y":1607}' className="text-sm text-zinc-500">
            Optimized structure to help local customers find you easily.
          </p>
</div>
</div>
<div bis_size='{"x":3957,"y":1477,"w":360,"h":120,"abs_x":4437,"abs_y":1520}' className="shrink-0 min-w-[85vw] sm:min-w-[280px]">
<div bis_size='{"x":3957,"y":1477,"w":360,"h":120,"abs_x":4437,"abs_y":1520}' className="reveal delay-100 bg-zinc-900/30 border-white/5 border ring-emerald-900 ring-1 rounded-2xl pt-3 pr-3 pb-3 pl-3 rotate-x-5 reveal-active h-full overflow-hidden">
<iconify-icon bis_size='{"x":3970,"y":1490,"w":20,"h":20,"abs_x":4450,"abs_y":1533}' className="text-zinc-400 text-xl mb-4" icon="solar:gallery-linear"></iconify-icon>
<h4 bis_size='{"x":3970,"y":1532,"w":334,"h":24,"abs_x":4450,"abs_y":1575}' className="text-base font-medium text-zinc-100 tracking-tight mb-2">Service Showcase</h4>
<p bis_size='{"x":3970,"y":1564,"w":334,"h":20,"abs_x":4450,"abs_y":1607}' className="text-sm text-zinc-500">
            Clear display of your services, pricing, and salon ambiance.
          </p>
</div>
</div>
<div bis_size='{"x":4341,"y":1477,"w":360,"h":120,"abs_x":4821,"abs_y":1520}' className="shrink-0 min-w-[85vw] sm:min-w-[280px]">
<div bis_size='{"x":4341,"y":1477,"w":360,"h":120,"abs_x":4821,"abs_y":1520}' className="reveal delay-200 bg-zinc-900/30 border-white/5 border ring-emerald-900 ring-1 rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow-[0_0.57px_8.6px_rgba(0,0,0,0.07),0_1.37px_10.9px_rgba(0,0,0,0.099),0_2.57px_20.5px_rgba(0,0,0,0.123),0_4.58px_36.6px_rgba(0,0,0,0.147),0_8.58px_68.5px_rgba(0,0,0,0.176),0_20.5px_163.4px_rgba(0,0,0,0.24)] blur-md reveal-active h-full overflow-hidden">
<iconify-icon bis_size='{"x":4354,"y":1490,"w":20,"h":20,"abs_x":4834,"abs_y":1533}' className="text-zinc-400 text-xl mb-4" icon="solar:lock-password-linear"></iconify-icon>
<h4 bis_size='{"x":4354,"y":1532,"w":334,"h":24,"abs_x":4834,"abs_y":1575}' className="text-base font-medium text-zinc-100 tracking-tight mb-2">Secure &amp; Private</h4>
<p bis_size='{"x":4354,"y":1564,"w":334,"h":20,"abs_x":4834,"abs_y":1607}' className="text-sm text-zinc-500">
            Inquiries go directly to you. No complicated dashboards.
          </p>
</div>
</div>

<div bis_size='{"x":4725,"y":1477,"w":360,"h":120,"abs_x":5205,"abs_y":1520}' className="shrink-0 min-w-[85vw] sm:min-w-[280px]">
<div bis_size='{"x":4725,"y":1477,"w":360,"h":120,"abs_x":5205,"abs_y":1520}' className="reveal reveal-active bg-zinc-900/30 border-white/5 border ring-emerald-900 ring-1 rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-2xl backdrop-blur-2xl h-full overflow-hidden">
<iconify-icon bis_size='{"x":4738,"y":1490,"w":20,"h":20,"abs_x":5218,"abs_y":1533}' className="text-zinc-400 text-xl mb-4" icon="solar:eye-linear"></iconify-icon>
<h4 bis_size='{"x":4738,"y":1532,"w":334,"h":24,"abs_x":5218,"abs_y":1575}' className="text-base font-medium text-zinc-100 tracking-tight mb-2">Clean Aesthetics</h4>
<p bis_size='{"x":4738,"y":1564,"w":334,"h":20,"abs_x":5218,"abs_y":1607}' className="text-sm text-zinc-500">
            Calm and trustworthy designs that make your salon look premium.
          </p>
</div>
</div>
<div bis_size='{"x":5109,"y":1477,"w":360,"h":120,"abs_x":5589,"abs_y":1520}' className="shrink-0 min-w-[85vw] sm:min-w-[280px]">
<div bis_size='{"x":5109,"y":1477,"w":360,"h":120,"abs_x":5589,"abs_y":1520}' className="reveal delay-100 bg-zinc-900/30 border-white/5 border ring-emerald-900 ring-1 rounded-2xl pt-3 pr-3 pb-3 pl-3 rotate-x-5 reveal-active h-full overflow-hidden">
<iconify-icon bis_size='{"x":5122,"y":1490,"w":20,"h":20,"abs_x":5602,"abs_y":1533}' className="text-zinc-400 text-xl mb-4" height="20" icon="solar:shield-minimalistic-linear" width="20"></iconify-icon>
<h4 bis_size='{"x":5122,"y":1532,"w":334,"h":24,"abs_x":5602,"abs_y":1575}' className="text-base font-medium text-zinc-100 tracking-tight mb-2">Digital Credibility</h4>
<p bis_size='{"x":5122,"y":1564,"w":334,"h":20,"abs_x":5602,"abs_y":1607}' className="text-sm text-zinc-500 ring-green-600">
            Build respect and reputation from the first glance online.
          </p>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":117,"y":1646,"w":1152,"h":839,"abs_x":597,"abs_y":1689}' className="lg:px-12 bg-gradient-to-r from-black/75 via-[#034932]/25 to-black/75 border-zinc-900 border-t pt-24 pr-6 pb-24 pl-6" id="pricing">
<div bis_size='{"x":309,"y":1743,"w":768,"h":646,"abs_x":789,"abs_y":1786}' className="reveal text-center max-w-3xl mr-auto ml-auto">
<h2 bis_size='{"x":309,"y":1743,"w":768,"h":36,"abs_x":789,"abs_y":1786}' className="text-3xl font-medium text-zinc-100 tracking-tight mb-4">Simple, transparent pricing.</h2>
<p bis_size='{"x":309,"y":1795,"w":768,"h":24,"abs_x":789,"abs_y":1838}' className="text-base text-zinc-400 mb-12">No hidden fees, no confusing tiers. Just one complete package designed for salons.</p>
<div bis_size='{"x":437,"y":1867,"w":512,"h":522,"abs_x":917,"abs_y":1910}' className="overflow-hidden reveal delay-200 text-left bg-zinc-950/75 max-w-lg border-white/10 border ring-emerald-500/40 ring-1 rounded-3xl mr-auto ml-auto pt-16 pr-8 pb-16 pl-16 relative">
<div bis_size='{"x":814,"y":1868,"w":133,"h":56,"abs_x":1294,"abs_y":1911}' className="pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0">
<span bis_size='{"x":830,"y":1885,"w":101,"h":25,"abs_x":1310,"abs_y":1928}' className="bg-emerald-500/10 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full border border-emerald-500/20">Most Popular</span>
</div>
<h3 bis_size='{"x":502,"y":1932,"w":414,"h":28,"abs_x":982,"abs_y":1975}' className="text-xl font-medium text-zinc-100 tracking-tight mb-2">Salon Pro Package</h3>
<p bis_size='{"x":502,"y":1968,"w":414,"h":20,"abs_x":982,"abs_y":2011}' className="text-sm text-zinc-400 mb-6">Everything you need to establish digital trust.</p>
<div bis_size='{"x":502,"y":2012,"w":414,"h":40,"abs_x":982,"abs_y":2055}' className="mb-8">
<span bis_size='{"x":502,"y":2010,"w":88,"h":44,"abs_x":982,"abs_y":2053}' className="text-4xl font-medium text-zinc-100 tracking-tight">4999</span>
<span bis_size='{"x":594,"y":2029,"w":73,"h":20,"abs_x":1074,"abs_y":2072}' className="text-base text-zinc-500">/one-time</span>
</div>
<ul bis_size='{"x":502,"y":2084,"w":414,"h":164,"abs_x":982,"abs_y":2127}' className="flex flex-col gap-4 mb-8">
<li bis_size='{"x":502,"y":2084,"w":414,"h":20,"abs_x":982,"abs_y":2127}' className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon bis_size='{"x":502,"y":2085,"w":18,"h":18,"abs_x":982,"abs_y":2128}' className="text-emerald-400 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Custom Mobile-First Design
                            </li>
<li bis_size='{"x":502,"y":2120,"w":414,"h":20,"abs_x":982,"abs_y":2163}' className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon bis_size='{"x":502,"y":2121,"w":18,"h":18,"abs_x":982,"abs_y":2164}' className="text-emerald-400 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Direct WhatsApp Integration
                            </li>
<li bis_size='{"x":502,"y":2156,"w":414,"h":20,"abs_x":982,"abs_y":2199}' className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon bis_size='{"x":502,"y":2157,"w":18,"h":18,"abs_x":982,"abs_y":2200}' className="text-emerald-400 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Services &amp; Portfolio Showcase
                            </li>
<li bis_size='{"x":502,"y":2192,"w":414,"h":20,"abs_x":982,"abs_y":2235}' className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon bis_size='{"x":502,"y":2193,"w":18,"h":18,"abs_x":982,"abs_y":2236}' className="text-emerald-400 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Basic SEO Setup
                            </li>
<li bis_size='{"x":502,"y":2228,"w":414,"h":20,"abs_x":982,"abs_y":2271}' className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon bis_size='{"x":502,"y":2229,"w":18,"h":18,"abs_x":982,"abs_y":2272}' className="text-emerald-400 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                1 Year Free Maintenance
                            </li>
</ul>
<button bis_size='{"x":502,"y":2280,"w":414,"h":44,"abs_x":982,"abs_y":2323}' className="w-full py-3 bg-zinc-100 hover:bg-white text-zinc-900 rounded-xl text-sm font-medium transition-colors" onclick="toggleModal()">
                            Request a Quote
                        </button>
</div>
</div>
</section>

<section bis_size='{"x":117,"y":2485,"w":1152,"h":395,"abs_x":597,"abs_y":2528}' className="lg:px-12 overflow-hidden reveal text-center bg-zinc-950/80 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div bis_size='{"x":357,"y":2582,"w":672,"h":202,"abs_x":837,"abs_y":2625}' className="max-w-2xl mx-auto relative z-10">
<h2 bis_size='{"x":357,"y":2582,"w":672,"h":40,"abs_x":837,"abs_y":2625}' className="text-3xl md:text-4xl font-medium text-zinc-100 tracking-tight mb-6">Ready to look professional online?</h2>
<p bis_size='{"x":357,"y":2646,"w":672,"h":48,"abs_x":837,"abs_y":2689}' className="text-base text-zinc-400 mb-10">Stop losing customers to salons with better websites. Get a clean, trustworthy design today.</p>
<div bis_size='{"x":357,"y":2734,"w":672,"h":50,"abs_x":837,"abs_y":2777}' className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a bis_size='{"x":507,"y":2735,"w":220,"h":48,"abs_x":987,"abs_y":2778}' className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-6 py-3 rounded-full text-base font-medium transition-all shadow-lg shadow-emerald-500/20" href="https://wa.me/7620039536">
<iconify-icon bis_size='{"x":531,"y":2749,"w":20,"h":20,"abs_x":1011,"abs_y":2792}' className="text-xl" icon="solar:chat-line-linear"></iconify-icon>
                            Start on WhatsApp
                        </a>
<button bis_size='{"x":743,"y":2734,"w":135,"h":50,"abs_x":1223,"abs_y":2777}' className="hover:bg-zinc-700 transition-colors sm:w-auto text-base font-medium text-zinc-100 bg-zinc-950 w-full border-white/10 border rounded-full ring-emerald-400 ring-1 pt-3 pr-6 pb-3 pl-6" onclick="toggleModal()">
                            Contact Us
                        </button>
</div>
</div>
</section>

<footer bis_size='{"x":117,"y":2880,"w":1152,"h":85,"abs_x":597,"abs_y":2923}' className="lg:px-12 reveal bg-zinc-900 border-gray-400/5 border-t pt-8 pr-6 pb-8 pl-6">
<div bis_size='{"x":165,"y":2913,"w":1056,"h":20,"abs_x":645,"abs_y":2956}' className="container flex flex-col md:flex-row gap-4 mr-auto ml-auto gap-x-4 gap-y-4 items-center justify-between">
<div bis_size='{"x":165,"y":2913,"w":89,"h":20,"abs_x":645,"abs_y":2956}' className="flex items-center gap-2 text-zinc-400">
<span bis_size='{"x":165,"y":2913,"w":89,"h":20,"abs_x":645,"abs_y":2956}' className="text-sm font-medium" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}>Velora Studio</span>
</div>
<p bis_size='{"x":528,"y":2915,"w":285,"h":16,"abs_x":1008,"abs_y":2958}' className="text-xs text-zinc-500 ring-emerald-700">
                        © 2024 Velora Studio. Designed for Indian Salons.
                    </p>
<div bis_size='{"x":1088,"y":2915,"w":132,"h":16,"abs_x":1568,"abs_y":2958}' className="flex gap-4">
<a bis_size='{"x":1088,"y":2915,"w":70,"h":16,"abs_x":1568,"abs_y":2958}' className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="/admin">Admin Login</a>
<a bis_size='{"x":1175,"y":2915,"w":45,"h":16,"abs_x":1655,"abs_y":2958}' className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="https://wa.me/7620039536">Support</a>
</div>
</div>
</footer>
</div>
</main>

<div bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="fixed inset-0 z-[100] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity opacity-0" id="contactModal" style={{transition: 'opacity 0.3s ease'}}>
<div bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden transform scale-95 transition-transform duration-300" id="modalContent">
<div bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="p-6 border-b border-white/5 flex justify-between items-center bg-zinc-800/30">
<h3 bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="text-lg font-medium text-zinc-100 tracking-tight">Get in touch</h3>
<button bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="text-zinc-400 hover:text-white transition-colors" onclick="toggleModal()">
<iconify-icon bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<form bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="p-6 flex flex-col gap-4" onsubmit="event.preventDefault(); toggleModal(); alert('Simulation: Form submitted to MongoDB');">
<div bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="space-y-1">
<label bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="text-xs font-medium text-zinc-400">Full Name</label>
<input bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder-zinc-600" placeholder="Rahul Sharma" required="" type="text"/>
</div>
<div bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="space-y-1">
<label bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="text-xs font-medium text-zinc-400">Business Name (Salon)</label>
<input bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder-zinc-600" placeholder="Glow Beauty Salon" required="" type="text"/>
</div>
<div bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="space-y-1">
<label bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="text-xs font-medium text-zinc-400">Phone Number</label>
<input bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder-zinc-600" placeholder="+91" required="" type="tel"/>
</div>
<div bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="space-y-1">
<label bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="text-xs font-medium text-zinc-400">Message</label>
<textarea bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder-zinc-600 resize-none" placeholder="How can we help you?" rows="3"></textarea>
</div>
<button bis_size='{"x":0,"y":2135,"w":0,"h":0,"abs_x":480,"abs_y":2178}' className="w-full mt-2 bg-zinc-100 hover:bg-white text-zinc-900 py-2.5 rounded-lg text-sm font-medium transition-colors" type="submit">
                    Send Message
                </button>
</form>
</div>
</div>



    </>
  );
}
