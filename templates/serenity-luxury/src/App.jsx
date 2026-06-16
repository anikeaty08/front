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



                (function() {
                    const images = [
                        'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/60151334-a890-46a5-b070-b34c17e23ff1_3840w.jpg',
                        'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/208d7c14-a92e-45c1-a107-f27dbc59aeb3_3840w.jpg',
                        'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/87a06738-83d3-4af9-9cc1-073a7753a234_3840w.jpg',
                        'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/771c74a3-527e-487d-8e6d-7fd080943bed_3840w.jpg'
                    ];
                    
                    let currentIndex = 0;
                    const carouselImage = document.getElementById('carousel-image');
                    const prevBtn = document.getElementById('prev-btn');
                    const nextBtn = document.getElementById('next-btn');
                    
                    function changeImage(newIndex) {
                        carouselImage.style.opacity = '0';
                        
                        setTimeout(() => {
                            currentIndex = newIndex;
                            carouselImage.src = images[currentIndex];
                            carouselImage.style.opacity = '1';
                        }, 300);
                    }
                    
                    prevBtn.addEventListener('click', () => {
                        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
                        changeImage(newIndex);
                    });
                    
                    nextBtn.addEventListener('click', () => {
                        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
                        changeImage(newIndex);
                    });
                })();
                


    (() => {
        const stage = document.getElementById('orbit-stage');
        const wrap  = document.getElementById('orbit-wrap');
        const cards = Array.from(stage.querySelectorAll('[data-orbit-card]'));
        const n = cards.length;

        // Responsive orbit settings
        let radius = 420;
        let speed = 0.002;
        let centerOffsetY = -60;
        let centerOffsetX = 0;
        const maxBlur = 10;
        const depthScale = 0.08;
        const minOpacity = 0;

        function updateOrbitSettings() {
            const w = window.innerWidth || document.documentElement.clientWidth;
            
            // Adjust radius for smaller screens
            if (w < 480) {
                radius = 240;
                centerOffsetY = -30;
            } else if (w < 640) {
                radius = 280;
                centerOffsetY = -40;
            } else if (w < 768) {
                radius = 320;
                centerOffsetY = -45;
            } else if (w < 1024) {
                radius = 350;
                centerOffsetY = -50;
            } else {
                radius = 420;
                centerOffsetY = -60;
            }
            
            // Horizontal offset for larger screens
            if (w >= 1536) centerOffsetX = -160;
            else if (w >= 1280) centerOffsetX = -120;
            else if (w >= 1024) centerOffsetX = -60;
            else centerOffsetX = 0;
        }
        
        updateOrbitSettings();
        window.addEventListener('resize', updateOrbitSettings);

        let rot = 0;
        let paused = false;

        function render(){
            if(!paused) rot += speed;

            for(let i=0;i<n;i++){
                const card  = cards[i];
                const angle = rot + (i * (Math.PI*2/n));
                const x = Math.sin(angle) * radius + centerOffsetX;
                const z = Math.cos(angle) * radius;
                const face = -angle;

                const vis = Math.max(0, z / radius);

                card.style.transform =
                    `translate3d(${x}px, ${centerOffsetY}px, ${z}px) rotateY(${face}rad) scale(${1 + vis * depthScale})`;
                card.style.filter       = `blur(${(1 - vis) * maxBlur}px)`;
                card.style.opacity      = vis.toFixed(3);
                card.style.zIndex       = Math.round(vis * 1000);
                card.style.pointerEvents= vis > 0.25 ? 'auto' : 'none';
            }
            requestAnimationFrame(render);
        }

        stage.style.transformStyle = 'preserve-3d';
        wrap.querySelector('[class*="[perspective:"]').style.perspectiveOrigin = '50% 50%';
        requestAnimationFrame(render);

        const pause = () => { paused = true; };
        const resume = () => { paused = false; };
        wrap.addEventListener('mouseenter', pause);
        wrap.addEventListener('mouseleave', resume);
        wrap.addEventListener('focusin',  pause);
        wrap.addEventListener('focusout', resume);
    })();
    


        // Parallax effect
        let lastScroll = 0;
        const parallaxBg = document.querySelector('.parallax-bg');
        const header = document.querySelector('header');
        
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            
            // Parallax background
            if (parallaxBg) {
                const blur = Math.min(20, scrollY / 30);
                const brightness = Math.max(0.4, 1 - scrollY / 800);
                const scale = 1 + scrollY / 5000;
                parallaxBg.style.filter = `blur(${blur}px) brightness(${brightness})`;
                parallaxBg.style.transform = `translateZ(0) scale(${scale})`;
            }
            
            // Show/hide header on scroll
            if (scrollY > 100) {
                header.style.transform = 'translateY(0)';
            } else {
                header.style.transform = 'translateY(-100%)';
            }
            
            lastScroll = scrollY;
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Mobile menu functionality
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mobileMenu = document.getElementById('mobile-menu');

        function toggleMobileMenu() {
            if (mobileMenu.classList.contains('invisible')) {
                mobileMenu.classList.remove('invisible', 'opacity-0');
                mobileMenu.classList.add('opacity-100');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('opacity-0');
                mobileMenu.classList.remove('opacity-100');
                setTimeout(() => {
                    mobileMenu.classList.add('invisible');
                    document.body.style.overflow = '';
                }, 300);
            }
        }

        mobileMenuButton.addEventListener('click', toggleMobileMenu);
        mobileMenuClose.addEventListener('click', toggleMobileMenu);

        // Close mobile menu when clicking on links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', toggleMobileMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="parallax-bg parallax-blur bg-overlay" style={{filter: 'blur(0px) brightness(1)', transform: 'translateZ(0px) scale(1)'}}>
<img alt="Luxury cruise background" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b0b1651b-b9d2-46c4-b387-cd68de1ed8a0_3840w.jpg" style={{}}/>
</div>

<header className="fixed top-0 w-full z-50 transition-all duration-300 header-blur" style={{transform: 'translateY(-100%)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
<div className="flex items-center space-x-2 sm:space-x-3">
<div className="p-1.5 sm:p-2 glass rounded-lg">
<svg className="lucide lucide-anchor text-white sm:w-6 sm:h-6" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22V8"></path>
<path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
<circle cx="12" cy="5" r="3"></circle>
</svg>
</div>
<span className="sm:text-xl cursor-pointer text-lg font-semibold text-white tracking-tight font-geist" data-element-locator="html &gt; body:nth-of-type(1) &gt; header:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; span:nth-of-type(1)" onclick="window.location.href='/#hero';window.location.href='/#hero'" role="button">Serenity</span>
</div>

<nav className="hidden lg:flex xl:gap-8 gap-x-6 gap-y-6 items-center">
<a className="hover:text-white transition-colors text-sm font-medium text-white/80 font-geist" data-element-locator="html &gt; body:nth-of-type(1) &gt; header:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; nav:nth-of-type(1) &gt; a:nth-of-type(1)" href="/#cruises">Cruises</a>
<a className="hover:text-white transition-colors text-sm font-medium text-white/80 font-geist" data-element-locator="html &gt; body:nth-of-type(1) &gt; header:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; nav:nth-of-type(1) &gt; a:nth-of-type(2)" href="/#destinations">Destinations</a>
<a className="hover:text-white transition-colors text-sm font-medium text-white/80 font-geist" data-element-locator="html &gt; body:nth-of-type(1) &gt; header:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; nav:nth-of-type(1) &gt; a:nth-of-type(3)" href="/#suites">Suites</a>
<a className="hover:text-white transition-colors text-sm font-medium text-white/80 font-geist" data-element-locator="html &gt; body:nth-of-type(1) &gt; header:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; nav:nth-of-type(1) &gt; a:nth-of-type(4)" href="/#experiences">Experiences</a>
<button className="btn-glow glass-strong transition-all hover:scale-105 text-sm font-medium text-white font-geist rounded-full px-6 py-2.5">
                        Book Now
                    </button>
</nav>

<button className="lg:hidden glass sm:p-2.5 hover:bg-white/10 transition-colors rounded-lg pt-2 pr-2 pb-2 pl-2" data-element-locator="html &gt; body:nth-of-type(1) &gt; header:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; button:nth-of-type(1)" id="mobile-menu-button">
<svg className="lucide lucide-menu sm:w-6 sm:h-6" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path>
</svg>
<svg className="lucide lucide-x hidden sm:w-6 sm:h-6" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 6-12 12"></path><path d="m6 6 12 12"></path>
</svg>
</button>
</div>

<div className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-50 transition-all duration-300" id="mobile-menu">

<button className="sm:top-6 sm:right-6 glass sm:p-3 hover:bg-white/10 transition-colors rounded-lg pt-2.5 pr-2.5 pb-2.5 pl-2.5 absolute top-4 right-4" data-element-locator="html &gt; body:nth-of-type(1) &gt; header:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; button:nth-of-type(1)" id="mobile-menu-close">
<svg className="lucide lucide-x text-white sm:w-8 sm:h-8" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="m18 6-12 12"></path><path d="m6 6 12 12"></path>
</svg>
</button>
<div className="flex flex-col h-full pt-20 sm:pt-24 pb-8 px-6 sm:px-8">
<nav className="flex-1 space-y-6 sm:space-y-8">
<a className="block text-2xl sm:text-3xl md:text-4xl font-medium text-white/80 hover:text-white transition-colors font-geist" href="/cruises">Cruises</a>
<a className="block text-2xl sm:text-3xl md:text-4xl font-medium text-white/80 hover:text-white transition-colors font-geist" href="/destinations">Destinations</a>
<a className="block text-2xl sm:text-3xl md:text-4xl font-medium text-white/80 hover:text-white transition-colors font-geist" href="/suites">Suites</a>
<a className="block text-2xl sm:text-3xl md:text-4xl font-medium text-white/80 hover:text-white transition-colors font-geist" href="/experiences">Experiences</a>
</nav>
<div className="mt-auto">
<button className="w-full glass-strong text-base sm:text-lg font-medium text-white rounded-2xl px-6 sm:px-8 py-3 sm:py-4 font-geist hover:bg-white/20 transition-colors">
                            Book Your Voyage
                        </button>
</div>
</div>
</div>
</div>
</header>

<section className="min-h-screen flex sm:pt-24 lg:pt-28 pt-24 relative items-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1)" id="hero">
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid grid-cols-1 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center lg:grid-cols-2">

<div className="space-y-6 sm:space-y-8 opacity-0 animate-[slideInBlur_1.5s_ease-out_0.5s_forwards]">
<div className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs uppercase tracking-wider text-white/80 font-geist">
<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        Luxury Redefined
                    </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tighter leading-[0.9] font-geist">
                        Extraordinary.<br/>
                        Exclusive.<br/>
<span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                            Unforgettable.
                        </span>
</h1>
</div>

<div className="animate-[fadeSlideIn_1.2s_ease-out_0.8s_forwards] opacity-0 space-y-6 sm:space-y-8">
<div className="flex flex-wrap gap-3 sm:gap-4 items-center">
<div className="flex items-center gap-1">
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-sm font-medium text-white">5.0</span>
</div>
<div className="w-px h-4 bg-white/20"></div>
<span className="text-xs sm:text-sm text-white/60 font-geist">50k+ voyagers</span>
<div className="w-px h-4 bg-white/20 hidden sm:block"></div>
<span className="text-xs sm:text-sm text-white/60 font-geist hidden sm:inline">Award-winning service</span>
</div>
<p className="leading-relaxed text-base sm:text-lg lg:text-xl text-white/80 font-geist max-w-2xl">
                        Discover uncharted waters aboard the world's most luxurious cruise line.
                        Curated experiences and white-glove service await your arrival.
                    </p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
<button className="btn-glow glass-strong transition-all hover:scale-105 group text-sm sm:text-base font-medium text-white font-geist rounded-full px-6 sm:px-8 py-3 sm:py-4">
<span className="flex items-center justify-center gap-2">
                                Book Your Voyage
                                <svg className="transition-transform group-hover:translate-x-1 sm:w-5 sm:h-5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7"></path>
</svg>
</span>
</button>
<button className="glass text-white/90 font-medium rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-all hover:bg-white/10 group font-geist">
<span className="flex items-center justify-center gap-2">
<svg className="lucide lucide-play sm:w-5 sm:h-5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
                                Explore Destinations
                            </span>
</button>
</div>
<div className="border-white/10 border-t pt-4 sm:pt-6">
<p className="text-xs sm:text-sm text-white/50 font-geist">
                            All-inclusive luxury • Personal concierge • World-class amenities
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-transparent to-black/20 pt-16 pb-16 relative" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(2)" id="cruises">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
<div className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs uppercase tracking-wider text-white/70 font-geist mb-4 sm:mb-6 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<svg className="lucide lucide-sparkles sm:w-3.5 sm:h-3.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
                    Our Promise
                </div>
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight font-geist mb-4 sm:mb-6 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
                    The Serenity Experience
                </h2>
<p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/70 font-geist animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
                    Every voyage is crafted from decades of hospitality excellence. We combine luxury accommodations, 
                    world-class cuisine, and personalized service to create memories that last forever.
                </p>
</div>

<div className="mb-12 sm:mb-16 lg:mb-20 animate-on-scroll" style={{animation: 'fadeInScale 1.2s ease-out 0.4s both'}}>
<div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl glass">
<div className="relative">
<img alt="Luxury cruise ship at sunset" className="aspect-video sm:aspect-[21/9] transition-opacity duration-500 w-full object-cover" id="carousel-image" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/771c74a3-527e-487d-8e6d-7fd080943bed_3840w.jpg" style={{opacity: '1'}}/>
</div>

<button className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 lg:left-6 glass-strong p-2 sm:p-3 lg:p-4 hover:bg-white/20 transition-all group rounded-full" id="prev-btn">
<svg className="text-white sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-transform group-hover:-translate-x-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18l-6-6 6-6"></path>
</svg>
</button>

<button className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 lg:right-6 glass-strong p-2 sm:p-3 lg:p-4 hover:bg-white/20 transition-all group rounded-full" id="next-btn">
<svg className="text-white sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9 18l6-6-6-6"></path>
</svg>
</button>

<div className="absolute top-2 left-2 sm:top-4 sm:left-4 lg:top-6 lg:left-6 flex flex-col gap-2 sm:gap-3">
<div className="glass-strong rounded-lg sm:rounded-xl lg:rounded-2xl px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 flex items-center gap-1.5 sm:gap-2">
<svg className="lucide lucide-ship text-white sm:w-4 sm:h-4" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
<path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"></path>
<path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path>
<path d="M12 10v4"></path>
<path d="M12 2v3"></path>
</svg>
<span className="text-xs sm:text-sm font-medium text-white font-geist">Luxury Fleet</span>
</div>
</div>
<div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6">
<button className="glass-strong rounded-full px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all font-geist">
                            Tour the Fleet →
                        </button>
</div>
</div>

</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
<div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:bg-white/10 transition-all duration-300 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<div className="glass rounded-lg sm:rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
<svg className="lucide lucide-map-pin text-white sm:w-5 sm:h-5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<h3 className="text-base sm:text-lg font-semibold font-geist mb-1 sm:mb-2">Exclusive Destinations</h3>
<p className="text-xs sm:text-sm text-white/60 font-geist">Curated ports and hidden gems for unforgettable experiences.</p>
</div>
<div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:bg-white/10 transition-all duration-300 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.6s both'}}>
<div className="glass rounded-lg sm:rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
<svg className="lucide lucide-utensils text-white sm:w-5 sm:h-5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
<path d="M7 2v20"></path>
<path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
</svg>
</div>
<h3 className="text-base sm:text-lg font-semibold font-geist mb-1 sm:mb-2">Michelin Dining</h3>
<p className="text-xs sm:text-sm text-white/60 font-geist">World-class chefs and locally-sourced cuisine from every port.</p>
</div>
<div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:bg-white/10 transition-all duration-300 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.7s both'}}>
<div className="glass rounded-lg sm:rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
<svg className="lucide lucide-bed text-white sm:w-5 sm:h-5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4v16"></path>
<path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
<path d="M2 17h20"></path>
<path d="M6 8V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"></path>
</svg>
</div>
<h3 className="text-base sm:text-lg font-semibold font-geist mb-1 sm:mb-2">Ocean Suites</h3>
<p className="text-xs sm:text-sm text-white/60 font-geist">Spacious accommodations with panoramic views and premium amenities.</p>
</div>
<div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:bg-white/10 transition-all duration-300 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.8s both'}}>
<div className="glass rounded-lg sm:rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
<svg className="lucide lucide-user-check text-white sm:w-5 sm:h-5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<polyline points="16,11 18,13 22,9"></polyline>
</svg>
</div>
<h3 className="text-base sm:text-lg font-semibold font-geist mb-1 sm:mb-2">Personal Service</h3>
<p className="text-xs sm:text-sm text-white/60 font-geist">2:1 guest-to-staff ratio with dedicated concierge and butler services.</p>
</div>
</div>
</div>
</section>

<section className="sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-black/20 to-black/40 pt-16 pb-16 relative" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(3)" id="destinations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center">

<div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
<div className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs uppercase tracking-wider text-white/70 font-geist mb-4 sm:mb-6">
<svg className="sm:w-3.5 sm:h-3.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="m14.5 9.5-5 5"></path><path d="m9.5 9.5h5v5"></path></svg>
                    Destinations
                </div>
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight font-geist mb-4 sm:mb-6">Discover New Worlds</h2>
<p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/70 font-geist">
                    From the crystal waters of the Mediterranean to the majestic fjords of Norway, 
                    each destination offers unique adventures crafted exclusively for our guests.
                </p>
</div>

<div className="flex flex-col w-full max-w-6xl mx-auto items-center">

<div className="w-full px-2 sm:px-4 relative overflow-visible" id="orbit-wrap">
<div className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] lg:h-[560px] [perspective:1200px] flex items-center justify-center overflow-visible" style={{perspectiveOrigin: '50% 50%'}}>

<div className="[transform-style:preserve-3d] w-full h-full relative" id="orbit-stage" style={{transformStyle: 'preserve-3d'}}>

<div className="orbit-card absolute left-1/2 top-1/2 w-[min(90vw,340px)] sm:w-[min(85vw,360px)] md:w-[min(80vw,380px)] -translate-x-1/2 -translate-y-1/2 glass rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden card-hover transition-all duration-300 hover:shadow-2xl hover:shadow-white/10" data-orbit-card="">
<div className="relative">
<img alt="Mediterranean" className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 hover:scale-110" src="https://images.unsplash.com/photo-1759351483300-02e8da712d37?w=3840&amp;q=80" style={{}}/>
<div className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4">
<span className="glass-strong rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 text-xs font-medium text-white font-geist">Most Popular</span>
</div>
<div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 lg:bottom-4 lg:right-4">
<div className="glass-strong rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 text-xs text-white font-geist">7-14 Days</div>
</div>
</div>
<div className="p-3 sm:p-4 lg:p-6 bg-black/30 backdrop-blur-sm transition-colors duration-300 hover:bg-black/40">
<h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-geist mb-2">Mediterranean Odyssey</h3>
<p className="text-white/70 font-geist mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">Explore ancient civilizations and pristine coastlines across Italy, Greece, and the French Riviera.</p>
<div className="flex items-center justify-between">
<div className="text-xs sm:text-sm text-white/60 font-geist">Starting from $2,499</div>
<button className="glass rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all font-geist">Explore →</button>
</div>
</div>
</div>

<div className="orbit-card absolute left-1/2 top-1/2 w-[min(90vw,340px)] sm:w-[min(85vw,360px)] md:w-[min(80vw,380px)] -translate-x-1/2 -translate-y-1/2 glass rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden card-hover transition-all duration-300 hover:shadow-2xl hover:shadow-white/10" data-orbit-card="">
<div className="relative">
<img alt="Northern Lights" className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 hover:scale-110" src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&amp;fit=crop&amp;w=1200&amp;q=80" style={{}}/>
<div className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4">
<span className="glass-strong rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 text-xs font-medium text-white font-geist">Seasonal</span>
</div>
<div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 lg:bottom-4 lg:right-4">
<div className="glass-strong rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 text-xs text-white font-geist">10-16 Days</div>
</div>
</div>
<div className="p-3 sm:p-4 lg:p-6 bg-black/30 backdrop-blur-sm transition-colors duration-300 hover:bg-black/40">
<h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-geist mb-2">Arctic Aurora</h3>
<p className="text-white/70 font-geist mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">Witness the dancing Northern Lights while exploring Norway's dramatic fjords and ice-carved landscapes.</p>
<div className="flex items-center justify-between">
<div className="text-xs sm:text-sm text-white/60 font-geist">Starting from $3,299</div>
<button className="glass rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all font-geist">Explore →</button>
</div>
</div>
</div>

<div className="orbit-card absolute left-1/2 top-1/2 w-[min(90vw,340px)] sm:w-[min(85vw,360px)] md:w-[min(80vw,380px)] -translate-x-1/2 -translate-y-1/2 glass rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden card-hover transition-all duration-300 hover:shadow-2xl hover:shadow-white/10" data-orbit-card="">
<div className="relative">
<img alt="Caribbean" className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 hover:scale-110" src="https://images.unsplash.com/photo-1655299417498-52f3a304c2a4?w=3840&amp;q=80" style={{}}/>
<div className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4">
<span className="glass-strong rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 text-xs font-medium text-white font-geist">Year Round</span>
</div>
<div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 lg:bottom-4 lg:right-4">
<div className="glass-strong rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 text-xs text-white font-geist">5-12 Days</div>
</div>
</div>
<div className="p-3 sm:p-4 lg:p-6 bg-black/30 backdrop-blur-sm transition-colors duration-300 hover:bg-black/40">
<h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-geist mb-2">Caribbean Paradise</h3>
<p className="text-white/70 font-geist mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">Discover pristine beaches, vibrant coral reefs, and rich cultural heritage across the Caribbean islands.</p>
<div className="flex items-center justify-between">
<div className="text-xs sm:text-sm text-white/60 font-geist">Starting from $1,899</div>
<button className="glass rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all font-geist">Explore →</button>
</div>
</div>
</div>

<div className="orbit-card absolute left-1/2 top-1/2 w-[min(90vw,340px)] sm:w-[min(85vw,360px)] md:w-[min(80vw,380px)] -translate-x-1/2 -translate-y-1/2 glass rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden card-hover transition-all duration-300 hover:shadow-2xl hover:shadow-white/10" data-orbit-card="">
<div className="relative">
<img alt="Pacific" className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 hover:scale-110" src="https://images.unsplash.com/photo-1554381316-e7ae6a16bdf4?w=3840&amp;q=80" style={{}}/>
<div className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4">
<span className="glass-strong rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 text-xs font-medium text-white font-geist">Explorer</span>
</div>
<div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 lg:bottom-4 lg:right-4">
<div className="glass-strong rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 text-xs text-white font-geist">9-15 Days</div>
</div>
</div>
<div className="p-3 sm:p-4 lg:p-6 bg-black/30 backdrop-blur-sm transition-colors duration-300 hover:bg-black/40">
<h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-geist mb-2">Pacific Explorer</h3>
<p className="text-white/70 font-geist mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">Sail across emerald waters, volcanic coasts, and vibrant markets from Japan to Indonesia.</p>
<div className="flex items-center justify-between">
<div className="text-xs sm:text-sm text-white/60 font-geist">Starting from $2,999</div>
<button className="glass rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all font-geist">Explore →</button>
</div>
</div>
</div>

<div className="orbit-card absolute left-1/2 top-1/2 w-[min(90vw,340px)] sm:w-[min(85vw,360px)] md:w-[min(80vw,380px)] -translate-x-1/2 -translate-y-1/2 glass rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden card-hover transition-all duration-300 hover:shadow-2xl hover:shadow-white/10" data-orbit-card="">
<div className="relative">
<img alt="Safari" className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 hover:scale-110" src="https://images.unsplash.com/photo-1651943023550-3f2671e62ad5?w=3840&amp;q=80" style={{}}/>
<div className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4">
<span className="glass-strong rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 text-xs font-medium text-white font-geist">Limited</span>
</div>
<div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 lg:bottom-4 lg:right-4">
<div className="glass-strong rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 text-xs text-white font-geist">6-10 Days</div>
</div>
</div>
<div className="p-3 sm:p-4 lg:p-6 bg-black/30 backdrop-blur-sm transition-colors duration-300 hover:bg-black/40">
<h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-geist mb-2">Safari Serenade</h3>
<p className="text-white/70 font-geist mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">Sunrise game drives, starlit camps, and the Big Five across Kenya and Tanzania.</p>
<div className="flex items-center justify-between">
<div className="text-xs sm:text-sm text-white/60 font-geist">Starting from $3,499</div>
<button className="glass rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all font-geist">Explore →</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-64 text-center w-full">
<a className="cta-dest glass inline-flex items-center justify-center text-white font-medium rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-all hover:scale-105 font-geist" href="#destinations">
                        View All Destinations
                    </a>
</div>
</div>
</div>
</section>
<style>
        #orbit-stage{ isolation:isolate; }
        .orbit-card{ transition:box-shadow .3s ease, transform .3s ease; backface-visibility:hidden; will-change:transform,filter; }
        .orbit-card:hover{ box-shadow:0 20px 60px rgba(0,0,0,.35); }
        .cta-dest{ position: static !important; display: inline-flex; }
    </style>


<section className="sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-black/40 to-black/60 pt-16 pb-16 relative" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(4)" id="suites">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">

<div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs uppercase tracking-wider text-white/70 font-geist animate-on-scroll" style={{animation: 'slideInLeft 1.0s ease-out 0.1s both'}}>
<svg className="lucide lucide-home sm:w-3.5 sm:h-3.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
                        Accommodations
                    </div>
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight font-geist animate-on-scroll" style={{animation: 'slideInLeft 1.0s ease-out 0.2s both'}}>
                        Ocean-View Luxury Suites
                    </h2>
<p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/70 font-geist animate-on-scroll" style={{animation: 'slideInLeft 1.0s ease-out 0.3s both'}}>
                        Every suite is designed as your private sanctuary at sea. Floor-to-ceiling windows, 
                        premium furnishings, and personalized service create an unmatched level of comfort.
                    </p>
<div className="grid grid-cols-2 gap-4 sm:gap-6 animate-on-scroll" style={{animation: 'slideInLeft 1.0s ease-out 0.4s both'}}>
<div className="glass rounded-lg sm:rounded-xl p-3 sm:p-4">
<div className="text-xl sm:text-2xl font-bold text-white font-geist">450-1200</div>
<div className="text-xs sm:text-sm text-white/60 font-geist">Square feet</div>
</div>
<div className="glass rounded-lg sm:rounded-xl p-3 sm:p-4">
<div className="text-xl sm:text-2xl font-bold text-white font-geist">24/7</div>
<div className="text-xs sm:text-sm text-white/60 font-geist">Butler service</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-on-scroll" style={{animation: 'slideInLeft 1.0s ease-out 0.5s both'}}>
<button className="btn-glow glass-strong text-white font-medium rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-all hover:scale-105 group font-geist">
<span className="flex items-center justify-center gap-2">
                                View Suite Options
                                <svg className="transition-transform group-hover:translate-x-1 sm:w-5 sm:h-5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7"></path>
</svg>
</span>
</button>
<button className="glass text-white/90 font-medium rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-all hover:bg-white/10 font-geist">
                            Virtual Tour
                        </button>
</div>
</div>

<div className="space-y-4 sm:space-y-6 animate-on-scroll order-1 lg:order-2" style={{animation: 'slideInRight 1.0s ease-out 0.3s both'}}>
<div className="glass rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden">
<img alt="Luxury suite interior" className="w-full aspect-[4/3] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9c8a44a6-a501-401f-b95d-892f3b6df817_3840w.jpg" style={{}}/>
</div>
<div className="grid grid-cols-2 gap-3 sm:gap-4">
<div className="glass rounded-xl overflow-hidden">
<img alt="Suite balcony" className="aspect-square w-full object-cover" src="https://images.unsplash.com/photo-1737061296028-2eb5cb0a62df?w=800&amp;q=80" style={{}}/>
</div>
<div className="glass rounded-xl overflow-hidden">
<img alt="Suite bathroom" className="w-full aspect-square object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7e273d08-8d65-42c3-8d1f-7d270e9cc657_800w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 border-white/10 border-t relative" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(5)" id="experiences">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
<div className="mb-8 sm:mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6">
<div className="animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight font-geist">Meet the Crew</h2>
<p className="mt-2 text-sm sm:text-base text-white/70 font-geist">Expert professionals dedicated to your comfort and adventure.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white/90 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition animate-on-scroll" href="#" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<svg className="lucide lucide-users" data-lucide="users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
                    All crew
                </a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

<div className="group overflow-hidden hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl sm:rounded-2xl backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="relative h-48 sm:h-56">
<img alt="Captain maritime expertise" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6cc7a805-00d7-469b-b679-e61afe916531_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-start justify-between mb-3 sm:mb-4">
<div>
<p className="text-base sm:text-lg font-medium tracking-tight font-geist">Captain George Morgan</p>
<p className="text-xs sm:text-sm text-white/60 font-geist">Master Mariner — 25 Years</p>
</div>
<span className="inline-flex items-center gap-1 text-xs text-white/80 border border-white/10 rounded-full px-2 sm:px-2.5 py-1 whitespace-nowrap">
<svg className="lucide lucide-anchor" data-lucide="anchor" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 22V8"></path><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path><circle cx="12" cy="5" r="3"></circle></svg>
                                Captain
                            </span>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Navigation</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Safety</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Leadership</span>
</div>
</div>
</div>

<div className="group overflow-hidden hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl sm:rounded-2xl backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="relative h-48 sm:h-56">
<img alt="Executive chef culinary mastery" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bfab3c49-e99d-4889-9bfd-d80a18035fd5_3840w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-start justify-between mb-3 sm:mb-4">
<div>
<p className="text-base sm:text-lg font-medium font-geist tracking-tight">Chef Marcus Laurent</p>
<p className="text-xs sm:text-sm text-white/60 font-geist">Executive Chef</p>
</div>
<span className="inline-flex items-center gap-1 text-xs text-white/80 border border-white/10 rounded-full px-2 sm:px-2.5 py-1 whitespace-nowrap">
<svg className="lucide lucide-chef-hat" data-lucide="chef-hat" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
                                Michelin ⭐⭐
                            </span>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Fine Dining</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Wine Pairing</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Local Cuisine</span>
</div>
</div>
</div>

<div className="group overflow-hidden hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl sm:rounded-2xl backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<div className="relative h-48 sm:h-56">
<img alt="Guest relations and concierge" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f61abbb4-dce0-4019-b5af-a17f3c335f6c_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-start justify-between mb-3 sm:mb-4">
<div>
<p className="text-base sm:text-lg font-medium font-geist tracking-tight">Sofia Rosetti</p>
<p className="text-xs sm:text-sm text-white/60 font-geist">Guest Relations Director</p>
</div>
<span className="inline-flex items-center gap-1 text-xs text-white/80 border border-white/10 rounded-full px-2 sm:px-2.5 py-1 whitespace-nowrap">
<svg className="lucide lucide-heart" data-lucide="heart" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19.14 12.94c0.26 4.16-3.18 7.56-7.06 8.33a.59.59 0 0 1-.16-.01c-3.88-.77-7.32-4.17-7.06-8.33a8 8 0 0 1 14.28 0z"></path></svg>
                                99% satisfaction
                            </span>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Concierge</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Excursions</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">VIP Service</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-black/60 to-black/80 pt-16 pb-16 relative" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(6)">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
<div className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs uppercase tracking-wider text-white/70 font-geist mb-4 sm:mb-6 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<svg className="lucide lucide-heart sm:w-3.5 sm:h-3.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5z"></path>
</svg>
                    Guest Stories
                </div>
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight font-geist mb-4 sm:mb-6 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
                    Memories That Last Forever
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
<div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 animate-on-scroll stagger-1" style={{animation: 'fadeInUp 1.0s ease-out both'}}>
<div className="flex items-center gap-1 mb-3 sm:mb-4">
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="text-sm sm:text-base text-white/80 font-geist mb-4 sm:mb-6 leading-relaxed">
                        "The Mediterranean voyage exceeded every expectation. The personal service and attention to detail made this our most memorable vacation ever."
                    </p>
<div className="flex items-center gap-3">
<img alt="Guest" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover glass" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8f33efb3-a146-47a5-a964-5b15640e63c3_3840w.webp"/>
<div>
<div className="text-sm sm:text-base font-semibold text-white font-geist">Sarah Chen</div>
<div className="text-xs sm:text-sm text-white/60 font-geist">Mediterranean Odyssey</div>
</div>
</div>
</div>
<div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 animate-on-scroll stagger-2" style={{animation: 'fadeInUp 1.0s ease-out both'}}>
<div className="flex items-center gap-1 mb-3 sm:mb-4">
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="text-sm sm:text-base text-white/80 font-geist mb-4 sm:mb-6 leading-relaxed">
                        "Witnessing the Northern Lights from our suite balcony was magical. The Arctic voyage was perfectly organized and absolutely breathtaking."
                    </p>
<div className="flex items-center gap-3">
<img alt="Guest" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover glass" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3f747c72-de85-4aee-95cb-1fe5e19340f7_3840w.jpg"/>
<div>
<div className="text-sm sm:text-base font-semibold text-white font-geist">Michael Torres</div>
<div className="text-xs sm:text-sm text-white/60 font-geist">Arctic Aurora</div>
</div>
</div>
</div>
<div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 animate-on-scroll stagger-3" style={{animation: 'fadeInUp 1.0s ease-out both'}}>
<div className="flex items-center gap-1 mb-3 sm:mb-4">
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="text-yellow-400 sm:w-4 sm:h-4" fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="text-sm sm:text-base text-white/80 font-geist mb-4 sm:mb-6 leading-relaxed">
                        "The Caribbean paradise voyage was pure bliss. Every island was more beautiful than the last, and the crew made us feel like royalty."
                    </p>
<div className="flex items-center gap-3">
<img alt="Guest" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover glass" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/de1d7143-e2f2-4c65-8f38-4edc33d2419c_3840w.webp"/>
<div>
<div className="text-sm sm:text-base font-semibold text-white font-geist">Emma Rodriguez</div>
<div className="text-xs sm:text-sm text-white/60 font-geist">Caribbean Paradise</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-black/80 to-black pt-16 pb-16 relative" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(7)">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs uppercase tracking-wider text-white/70 font-geist mb-6 sm:mb-8 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<svg className="lucide lucide-calendar sm:w-3.5 sm:h-3.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                Book Now
            </div>
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight font-geist mb-6 sm:mb-8 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
                Your Journey Awaits
            </h2>
<p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/70 font-geist mb-8 sm:mb-12 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
                Don't just take a vacation. Create memories that will last a lifetime aboard Serenity.
            </p>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<button className="btn-glow glass-strong text-white font-medium rounded-full px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg transition-all hover:scale-105 group font-geist">
<span className="flex items-center justify-center gap-2 sm:gap-3">
                        Start Your Journey
                        <svg className="transition-transform group-hover:translate-x-1 sm:w-6 sm:h-6" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7"></path>
</svg>
</span>
</button>
<button className="glass text-white/90 font-medium rounded-full px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg transition-all hover:bg-white/10 font-geist">
<span className="flex items-center justify-center gap-2 sm:gap-3">
<svg className="lucide lucide-phone sm:w-6 sm:h-6" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
                        Speak with Expert
                    </span>
</button>
</div>
<div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<p className="text-xs sm:text-sm text-white/50 font-geist">
                    Limited availability • Book 90 days in advance for exclusive perks
                </p>
</div>
</div>
</section>

<footer className="bg-black/40 border-white/10 border-t py-12 sm:py-16 lg:py-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

<div className="sm:col-span-2 lg:col-span-2">
<div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
<div className="p-2 sm:p-3 glass rounded-lg sm:rounded-xl">
<svg className="lucide lucide-anchor text-white sm:w-7 sm:h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22V8"></path>
<path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
<circle cx="12" cy="5" r="3"></circle>
</svg>
</div>
<span className="text-xl sm:text-2xl font-bold text-white font-geist tracking-tight">Serenity</span>
</div>
<p className="text-sm sm:text-base text-white/70 font-geist mb-6 sm:mb-8 max-w-md leading-relaxed">
                        Extraordinary luxury cruises that create unforgettable memories through personalized service and exclusive destinations.
                    </p>

<div className="space-y-3 sm:space-y-4">
<h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider font-geist">Stay Updated</h4>
<div className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 font-geist text-sm sm:text-base" placeholder="Enter your email" type="email"/>
<button className="glass-strong hover:bg-white/20 transition-all px-6 py-2.5 sm:py-3 rounded-lg text-white font-medium text-sm sm:text-base font-geist whitespace-nowrap">
                                Subscribe
                            </button>
</div>
</div>
</div>

<div className="">
<h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider font-geist mb-4 sm:mb-6">Quick Links</h4>
<ul className="space-y-2 sm:space-y-3">
<li className=""><a className="text-sm sm:text-base text-white/70 hover:text-white transition-colors font-geist" href="/cruises">All Cruises</a></li>
<li className=""><a className="text-sm sm:text-base text-white/70 hover:text-white transition-colors font-geist" href="/destinations">Destinations</a></li>
<li><a className="text-sm sm:text-base text-white/70 hover:text-white transition-colors font-geist" href="/suites">Suites &amp; Cabins</a></li>
<li><a className="text-sm sm:text-base text-white/70 hover:text-white transition-colors font-geist" href="/dining">Dining</a></li>
<li><a className="text-sm sm:text-base text-white/70 hover:text-white transition-colors font-geist" href="/experiences">Experiences</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider font-geist mb-4 sm:mb-6">Contact</h4>
<ul className="sm:space-y-3 space-y-2" data-element-locator="html &gt; body:nth-of-type(1) &gt; footer:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(3) &gt; ul:nth-of-type(1)"><span className="text-sm sm:text-base text-white/70 font-geist">+1 (800) 555-SAIL</span><li className="flex items-start gap-2">
<svg className="text-white/70 flex-shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
<span className="text-sm sm:text-base text-white/70 font-geist">voyage@serenity.com</span>
</li><li className="flex items-start gap-2">
<svg className="text-white/70 flex-shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="text-sm sm:text-base text-white/70 font-geist">Miami, FL 33139</span>
</li></ul>

<div className="flex gap-3 mt-6 sm:mt-8">
<a className="glass rounded-lg p-2 hover:bg-white/20 transition-all" href="#">
<svg className="text-white" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
</svg>
</a>
<a className="glass rounded-lg p-2 hover:bg-white/20 transition-all" href="#">
<svg className="lucide lucide-instagram text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="glass rounded-lg p-2 hover:bg-white/20 transition-all" href="#">
<svg className="text-white" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs sm:text-sm text-white/50 font-geist text-center sm:text-left">
                    © 2024 Serenity Cruises. All rights reserved.
                </p>
<div className="flex flex-wrap justify-center gap-4 sm:gap-6">
<a className="text-xs sm:text-sm text-white/50 hover:text-white transition-colors font-geist" href="/privacy">Privacy Policy</a>
<a className="text-xs sm:text-sm text-white/50 hover:text-white transition-colors font-geist" href="/terms">Terms of Service</a>
<a className="text-xs sm:text-sm text-white/50 hover:text-white transition-colors font-geist" href="/cookies">Cookie Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
