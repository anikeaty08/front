import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
/*
Sequence animation on scroll when visible. Requires Animation Keyframe.
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // ----------------------------------------------------
        // 0. Mobile Menu Logic & Submenu Toggles
        // ----------------------------------------------------
        document.addEventListener('DOMContentLoaded', () => {
            const menuBtn = document.getElementById('menu-open-btn');
            const closeBtn = document.getElementById('menu-close-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            function openMenu() {
                mobileMenu.classList.remove('hidden');
                setTimeout(() => {
                    mobileMenu.classList.remove('opacity-0', 'translate-y-[-10px]');
                    mobileMenu.classList.add('opacity-100', 'translate-y-0');
                }, 10);
                document.body.style.overflow = 'hidden';
            }

            function closeMenu() {
                mobileMenu.classList.remove('opacity-100', 'translate-y-0');
                mobileMenu.classList.add('opacity-0', 'translate-y-[-10px]');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
                document.body.style.overflow = '';
            }

            if (menuBtn) menuBtn.addEventListener('click', openMenu);
            if (closeBtn) closeBtn.addEventListener('click', closeMenu);
            mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

            // Mobile Submenu Toggles
            const toggleSubMenu = (btnId, menuId, iconId) => {
                const btn = document.getElementById(btnId);
                const menu = document.getElementById(menuId);
                const icon = document.getElementById(iconId);
                if(btn && menu && icon) {
                    btn.addEventListener('click', () => {
                        menu.classList.toggle('hidden');
                        menu.classList.toggle('flex');
                        icon.classList.toggle('rotate-180');
                    });
                }
            };

            toggleSubMenu('mobile-services-btn', 'mobile-services-menu', 'mobile-services-icon');
            toggleSubMenu('mobile-patients-btn', 'mobile-patients-menu', 'mobile-patients-icon');
        });

        // ----------------------------------------------------
        // 1. GSAP ScrollTrigger Animation Logic (Hero Section)
        // ----------------------------------------------------
        gsap.registerPlugin(ScrollTrigger);

        function splitTextForReveal(element) {
            const text = element.textContent.trim();
            const words = text.split(' ');
            element.textContent = ''; // Clear original text
            
            words.forEach(word => {
                const wrapper = document.createElement('span');
                wrapper.classList.add('word-wrapper');
                
                const inner = document.createElement('span');
                inner.classList.add('word-inner');
                inner.textContent = word + '\u00A0'; // Add non-breaking space
                
                wrapper.appendChild(inner);
                element.appendChild(wrapper);
            });
        }

        const revealElements = document.querySelectorAll('.reveal-text');
        revealElements.forEach(element => {
            splitTextForReveal(element);
            const innerWords = element.querySelectorAll('.word-inner');
            
            gsap.to(innerWords, {
                y: 0,
                duration: 1.2,
                stagger: 0.05,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Parallax Background Image
        gsap.to("#hero-bg", {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: "#hero-section",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // ----------------------------------------------------
        // 2. Flashlight Effect Logic
        // ----------------------------------------------------
        const handleMouseMove = e => {
            const target = e.currentTarget;
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            target.style.setProperty('--mouse-x', `${x}px`);
            target.style.setProperty('--mouse-y', `${y}px`);
        };

        document.querySelectorAll('.flashlight-target').forEach(el => {
            el.addEventListener('mousemove', handleMouseMove);
        });

        // ----------------------------------------------------
        // 3. Intersection Observer for Scroll Animations
        // ----------------------------------------------------
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delay = el.getAttribute('data-delay') || 0;
                    
                    setTimeout(() => {
                        el.classList.add('is-visible');
                    }, delay);
                    
                    observer.unobserve(el);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.observe-animate').forEach(el => {
            observer.observe(el);
        });

        // ----------------------------------------------------
        // 4. 3D Infinite Team Carousel Logic
        // ----------------------------------------------------
        (function () {
            let currentIndex = 0;
            const prevBtn = document.getElementById('teamPrevBtn');
            const nextBtn = document.getElementById('teamNextBtn');
            const carouselCards = document.querySelectorAll('.carousel-card');
            const totalCards = carouselCards.length;
            let autoPlayInterval;

            if (totalCards === 0) return;

            function updateCarousel() {
                carouselCards.forEach((card, i) => {
                    let relativePos = i - currentIndex;
                    if (relativePos > Math.floor(totalCards / 2)) relativePos -= totalCards;
                    if (relativePos < -Math.floor(totalCards / 2)) relativePos += totalCards;

                    let transform = '';
                    let opacity = 1;
                    let filter = 'brightness(1)';
                    let zIndex = 1;
                    let ringClass = 'border border-white/20';
                    let shadow = '';

                    if (relativePos === 0) {
                        transform = 'translateX(0) scale(1) rotateY(0deg)';
                        opacity = 1;
                        zIndex = 10;
                        ringClass = 'border-2 border-blue-400';
                        shadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(59, 130, 246, 0.3)';
                    } else if (relativePos === -1) {
                        transform = 'translateX(-180px) scale(0.9) rotateY(10deg)';
                        opacity = 0.6;
                        filter = 'brightness(0.75)';
                        zIndex = 5;
                    } else if (relativePos === 1) {
                        transform = 'translateX(180px) scale(0.9) rotateY(-10deg)';
                        opacity = 0.6;
                        filter = 'brightness(0.75)';
                        zIndex = 5;
                    } else if (relativePos === -2) {
                        transform = 'translateX(-360px) scale(0.85) rotateY(20deg)';
                        opacity = 0.4;
                        filter = 'brightness(0.6)';
                        zIndex = 2;
                    } else if (relativePos === 2) {
                        transform = 'translateX(360px) scale(0.85) rotateY(-20deg)';
                        opacity = 0.4;
                        filter = 'brightness(0.6)';
                        zIndex = 2;
                    } else {
                        transform = `translateX(${relativePos > 0 ? 540 : -540}px) scale(0.75) rotateY(${relativePos > 0 ? -30 : 30}deg)`;
                        opacity = 0;
                        filter = 'brightness(0.5)';
                        zIndex = 1;
                    }

                    card.style.transform = transform;
                    card.style.opacity = opacity;
                    card.style.filter = filter;
                    card.style.zIndex = zIndex;
                    card.style.boxShadow = shadow;
                    card.className = `carousel-card absolute w-[280px] sm:w-80 h-[400px] sm:h-[460px] rounded-[2rem] overflow-hidden ${ringClass} transition-all duration-500 bg-neutral-900`;
                });
            }

            function nextCard() {
                currentIndex = (currentIndex + 1) % totalCards;
                updateCarousel();
            }

            function prevCard() {
                currentIndex = (currentIndex - 1 + totalCards) % totalCards;
                updateCarousel();
            }

            if (prevBtn) prevBtn.addEventListener('click', () => { prevCard(); resetAutoPlay(); });
            if (nextBtn) nextBtn.addEventListener('click', () => { nextCard(); resetAutoPlay(); });

            function startAutoPlay() {
                autoPlayInterval = setInterval(nextCard, 3500); 
            }

            function resetAutoPlay() {
                clearInterval(autoPlayInterval);
                startAutoPlay();
            }

            const track = document.getElementById('carouselTrack');
            if(track) {
                track.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
                track.addEventListener('mouseleave', startAutoPlay);
            }

            updateCarousel();
            startAutoPlay();
        })();

        // ----------------------------------------------------
        // 5. Looping Stacked Testimonials Logic
        // ----------------------------------------------------
        (function() {
            const testimonialsData = [
                {
                    text: "The Invisalign process was seamless. The staff made me feel incredibly comfortable, and the results exceeded my expectations. I finally have the confident smile I always wanted.",
                    name: "Emily R.",
                    role: "Invisalign Patient",
                    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                },
                {
                    text: "Taking my kids to the dentist used to be a struggle. Dr. Smith and the pediatric team are so gentle and fun, my kids actually look forward to their visits now.",
                    name: "Michael T.",
                    role: "Parent of two",
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
                },
                {
                    text: "After years of avoiding the dentist due to anxiety, I found Noe Valley Smiles and Braces. Their compassionate approach and modern technology completely changed my perspective on dental care.",
                    name: "Sarah J.",
                    role: "Restorative Patient",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                },
                {
                    text: "The aesthetic results of my smile makeover are simply stunning. I appreciate how Dr. Ross took the time to map out every detail. I couldn't be happier.",
                    name: "David L.",
                    role: "Cosmetic Patient",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                }
            ];

            let currentTestimIndex = 0;
            const testimCard = document.getElementById('active-testim-card');
            const testimText = document.getElementById('testim-text');
            const testimName = document.getElementById('testim-name');
            const testimRole = document.getElementById('testim-role');
            const testimImage = document.getElementById('testim-image');
            const prevBtn = document.getElementById('testimPrevBtn');
            const nextBtn = document.getElementById('testimNextBtn');
            let testimTimer;

            if (!testimCard) return;

            function renderTestimonial(index) {
                // Fade out
                testimCard.classList.add('opacity-0', 'translate-y-4', 'scale-[0.98]');
                
                setTimeout(() => {
                    const data = testimonialsData[index];
                    testimText.innerHTML = `"${data.text}"`;
                    testimName.textContent = data.name;
                    testimRole.textContent = data.role;
                    testimImage.src = data.image;
                    
                    // Fade in
                    testimCard.classList.remove('opacity-0', 'translate-y-4', 'scale-[0.98]');
                }, 400); // Matches transition duration
            }

            function nextTestim() {
                currentTestimIndex = (currentTestimIndex + 1) % testimonialsData.length;
                renderTestimonial(currentTestimIndex);
            }

            function prevTestim() {
                currentTestimIndex = (currentTestimIndex - 1 + testimonialsData.length) % testimonialsData.length;
                renderTestimonial(currentTestimIndex);
            }

            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    prevTestim();
                    resetTestimTimer();
                });
            }
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    nextTestim();
                    resetTestimTimer();
                });
            }

            function startTestimTimer() {
                testimTimer = setInterval(nextTestim, 6000); // loops every 6s
            }
            
            function resetTestimTimer() {
                clearInterval(testimTimer);
                startTestimTimer();
            }
            
            // Pause on hover
            testimCard.addEventListener('mouseenter', () => clearInterval(testimTimer));
            testimCard.addEventListener('mouseleave', startTestimTimer);

            startTestimTimer();
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 px-5 md:px-12 py-4 bg-white/70 backdrop-blur-xl border-b border-neutral-200/50 transition-all duration-300">
<div className="max-w-[1600px] mx-auto w-full flex justify-between items-center relative">
<div className="flex items-center gap-2 z-20">
<a className="inline-flex items-center justify-start transition-opacity hover:opacity-80 w-[180px] sm:w-[220px] text-neutral-900" href="#hero-section">
<svg className="w-full h-auto fill-current" viewbox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
<text className="script" fontSize="120" text-anchor="start" x="0" y="55%">Noe Valley</text>
<text className="script" fontSize="140" text-anchor="start" x="0" y="75%">Smiles</text>
<text className="sub" fontSize="36" text-anchor="start" x="0" y="350">&amp; BRACES</text>
</svg>
</a>
</div>
<div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 gap-8 text-base font-normal tracking-tight text-neutral-600">
<a className="hover:text-neutral-900 transition" href="#hero-section">Home</a>
<a className="hover:text-neutral-900 transition" href="#about">About</a>

<div className="relative group">
<a className="hover:text-neutral-900 transition flex items-center gap-1.5 py-4" href="/services">
                        Services <iconify-icon className="transition-transform group-hover:rotate-180" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</a>
<div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-xl border border-neutral-200/60 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col p-2.5 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
<a className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors" href="/services/general-dentistry">General Dentistry</a>
<a className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors" href="/services/orthodontics">Orthodontics</a>
<a className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors" href="/services/invisalign">Invisalign</a>
<a className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors" href="/services/pediatric-dentistry">Pediatric Dentistry</a>
</div>
</div>

<div className="relative group">
<a className="hover:text-neutral-900 transition flex items-center gap-1.5 py-4" href="/patients">
                        Patients <iconify-icon className="transition-transform group-hover:rotate-180" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</a>
<div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-xl border border-neutral-200/60 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col p-2.5 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
<a className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors" href="/patients/insurance-financing">Insurance / Financing</a>
<a className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors" href="/patients/first-visit">First Visit</a>
<a className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors" href="/patients/faqs">FAQs</a>
<a className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors" href="/patients/policies-forms">Policies / Forms</a>
</div>
</div>
<a className="hover:text-neutral-900 transition" href="#contact">Contact</a>
</div>
<div className="hidden lg:flex items-center gap-4">
<button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-geist rounded-full py-2.5 px-6 relative z-0 items-center justify-center">

<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-black"></div>
</div>

<div className="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>
<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
</div>

<span className="relative z-10 text-white/90 transition-colors group-hover:text-white flex items-center gap-2">
                        Call Now
                        <svg className="lucide lucide-phone relative z-10 transition-transform duration-300 group-hover:scale-110" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</span>
</button>
</div>

<button className="lg:hidden p-2 -mr-2 flex items-center justify-center text-neutral-900 focus:outline-none z-20 transition-transform active:scale-95" id="menu-open-btn">
<iconify-icon height="32" icon="solar:hamburger-menu-linear" width="32"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[100] hidden flex-col transition-all duration-300 opacity-0 translate-y-[-10px] overflow-y-auto pb-12" id="mobile-menu">
<div className="px-5 py-4 flex justify-between items-center w-full border-b border-neutral-100 shrink-0">
<a className="inline-flex items-center justify-start transition-opacity hover:opacity-80 w-[180px] sm:w-[220px] text-neutral-900 mobile-link" href="#hero-section">
<svg className="w-full h-auto fill-current" viewbox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
<text className="script" fontSize="120" text-anchor="start" x="0" y="55%">Noe Valley</text>
<text className="script" fontSize="140" text-anchor="start" x="0" y="75%">Smiles</text>
<text className="sub" fontSize="36" text-anchor="start" x="0" y="350">&amp; BRACES</text>
</svg>
</a>
<button className="p-2 -mr-2 flex items-center justify-center text-neutral-900 focus:outline-none transition-transform active:scale-95" id="menu-close-btn">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>
<div className="flex flex-col items-center justify-start flex-grow gap-6 px-6 pt-12">
<a className="text-3xl font-medium tracking-tight text-neutral-900 mobile-link hover:text-blue-600 transition-colors" href="#hero-section">Home</a>
<a className="text-3xl font-medium tracking-tight text-neutral-900 mobile-link hover:text-blue-600 transition-colors" href="#about">About</a>

<div className="w-full flex flex-col items-center">
<button className="flex items-center gap-2 text-3xl font-medium tracking-tight text-neutral-900 hover:text-blue-600 transition-colors focus:outline-none" id="mobile-services-btn">
                    Services <iconify-icon className="transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="mobile-services-icon" width="24"></iconify-icon>
</button>
<div className="hidden flex-col items-center gap-4 mt-4 w-full bg-neutral-50/50 py-4 rounded-2xl border border-neutral-100" id="mobile-services-menu">
<a className="text-lg font-medium text-neutral-500 mobile-link hover:text-blue-600 transition-colors" href="/services">Overview</a>
<a className="text-lg font-medium text-neutral-600 mobile-link hover:text-blue-600 transition-colors" href="/services/general-dentistry">General Dentistry</a>
<a className="text-lg font-medium text-neutral-600 mobile-link hover:text-blue-600 transition-colors" href="/services/orthodontics">Orthodontics</a>
<a className="text-lg font-medium text-neutral-600 mobile-link hover:text-blue-600 transition-colors" href="/services/invisalign">Invisalign</a>
<a className="text-lg font-medium text-neutral-600 mobile-link hover:text-blue-600 transition-colors" href="/services/pediatric-dentistry">Pediatric Dentistry</a>
</div>
</div>

<div className="w-full flex flex-col items-center">
<button className="flex items-center gap-2 text-3xl font-medium tracking-tight text-neutral-900 hover:text-blue-600 transition-colors focus:outline-none" id="mobile-patients-btn">
                    Patients <iconify-icon className="transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="mobile-patients-icon" width="24"></iconify-icon>
</button>
<div className="hidden flex-col items-center gap-4 mt-4 w-full bg-neutral-50/50 py-4 rounded-2xl border border-neutral-100" id="mobile-patients-menu">
<a className="text-lg font-medium text-neutral-500 mobile-link hover:text-blue-600 transition-colors" href="/patients">Overview</a>
<a className="text-lg font-medium text-neutral-600 mobile-link hover:text-blue-600 transition-colors" href="/patients/insurance-financing">Insurance / Financing</a>
<a className="text-lg font-medium text-neutral-600 mobile-link hover:text-blue-600 transition-colors" href="/patients/first-visit">First Visit</a>
<a className="text-lg font-medium text-neutral-600 mobile-link hover:text-blue-600 transition-colors" href="/patients/faqs">FAQs</a>
<a className="text-lg font-medium text-neutral-600 mobile-link hover:text-blue-600 transition-colors" href="/patients/policies-forms">Policies / Forms</a>
</div>
</div>
<a className="text-3xl font-medium tracking-tight text-neutral-900 mobile-link hover:text-blue-600 transition-colors" href="#contact">Contact</a>
<div className="flex flex-col w-full max-w-xs gap-4 mt-8">

<button className="w-full px-8 py-3.5 rounded-full text-sm uppercase tracking-widest font-medium text-neutral-900 bg-white border border-neutral-300 hover:bg-neutral-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                    Virtual Tour
                </button>
</div>
</div>
</div>

<header className="relative w-full h-screen min-h-[750px] md:min-h-[800px] overflow-hidden bg-neutral-950" id="hero-section">

<div className="absolute inset-0 w-full h-full overflow-hidden">
<img alt="Modern Dental Clinic" className="absolute inset-0 w-full h-full md:h-[120%] top-0 md:-top-[10%] object-cover object-center filter brightness-[0.5] md:brightness-[0.4] will-change-transform" id="hero-bg" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=3840&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent md:hidden z-0"></div>
</div>
<div className="flex flex-col md:px-12 md:pb-24 text-white px-5 pb-10 absolute top-0 right-0 bottom-0 left-0 justify-end z-10 pt-28 md:pt-32">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-end">
<div>
<div className="flex items-center gap-2 mb-6 md:mb-6 opacity-90 observe-animate" data-delay="0">
<div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_12px_rgba(96,165,250,0.8)]"></div>
<span className="text-xs font-medium tracking-wide uppercase text-blue-100">Accepting New Patients</span>
</div>

<h1 className="reveal-text leading-[1.2] md:leading-[1.05] text-4xl md:text-5xl lg:text-7xl tracking-tighter mb-4 md:mb-6 font-normal text-white">
                        Precision dentistry for the modern family.
                    </h1>
</div>
<div className="flex flex-col items-start lg:items-end justify-end observe-animate w-full" data-delay="300">
<p className="text-base sm:text-lg md:text-xl font-normal leading-[1.7] md:leading-relaxed max-w-md text-left lg:text-right text-neutral-200 mb-8 md:mb-8">
                        Experience advanced clinical care paired with profound comfort. From aesthetic orthodontics to gentle pediatric treatments, we engineer brilliant smiles.
                    </p>

<div className="hidden lg:flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
<button className="w-full sm:w-auto group shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden font-semibold text-orange-900 bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-full relative shadow-lg flex items-center justify-center gap-2" style={{boxShadow: '0 15px 33px -12px rgba(255,162,42,0.9), inset 0 4px 6.3px rgba(252,220,134,1), inset 0 -5px 6.3px rgba(255,162,38,1)'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full z-0"></div>
<span className="relative z-10 flex items-center justify-center gap-2 px-8 py-3.5 text-sm tracking-wide">
                                Book Appointment
                                <iconify-icon icon="solar:calendar-add-bold-duotone" width="18"></iconify-icon>
</span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm uppercase tracking-widest font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                            Virtual Tour
                        </button>
</div>

<div className="flex lg:hidden flex-col gap-4 w-full">
<button className="w-full group shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden font-semibold text-orange-900 bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-full relative shadow-lg flex items-center justify-center gap-2" style={{boxShadow: '0 15px 33px -12px rgba(255,162,42,0.9), inset 0 4px 6.3px rgba(252,220,134,1), inset 0 -5px 6.3px rgba(255,162,38,1)'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full z-0"></div>
<span className="relative z-10 flex items-center justify-center gap-2 px-8 py-3.5 text-sm tracking-wide">
                                Book Appointment
                                <iconify-icon icon="solar:calendar-add-bold-duotone" width="16"></iconify-icon>
</span>
</button>
<button className="w-full group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-geist rounded-full py-3.5 px-8 relative z-0 items-center justify-center">

<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-black"></div>
</div>

<div className="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>
<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
</div>

<span className="relative z-10 text-white/90 transition-colors group-hover:text-white flex items-center justify-center gap-2">
                                Call Now
                                <svg className="lucide lucide-phone relative z-10 transition-transform duration-300 group-hover:scale-110" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</span>
</button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row gap-4 justify-between text-xs font-medium uppercase tracking-widest opacity-60 mt-12 md:mt-16 border-t border-white/20 pt-6 observe-animate" data-delay="500">
<span className="text-blue-100">Advanced Orthodontics &amp; Care</span>
<span className="text-blue-100">© Noe Valley Smiles</span>
</div>
</div>
</header>

<div className="w-full border-b border-neutral-200 bg-white py-8 md:py-10 relative flex flex-col items-center justify-center observe-animate" data-delay="100">
<div className="w-full overflow-hidden" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex w-max animate-scroll-infinite items-center">
<div className="flex items-center gap-12 md:gap-24 px-6 md:px-12 opacity-40 hover:opacity-100 transition-opacity duration-500 text-neutral-800">
<iconify-icon height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:mastercard" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:americanexpress" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:paypal" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:applepay" width="64"></iconify-icon>
</div>
<div className="flex items-center gap-12 md:gap-24 px-6 md:px-12 opacity-40 hover:opacity-100 transition-opacity duration-500 text-neutral-800">
<iconify-icon height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:mastercard" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:americanexpress" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:paypal" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:applepay" width="64"></iconify-icon>
</div>
</div>
</div>
</div>

<section className="flex flex-col md:px-10 lg:py-32 w-full max-w-7xl mx-auto pt-16 md:pt-24 px-5 pb-16 md:pb-24 relative" id="about">

<div className="flex justify-start mb-8 md:mb-12 observe-animate" data-delay="0">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100/50 text-orange-500 text-sm font-medium tracking-wide uppercase transition-colors hover:bg-orange-100/50 cursor-default">
<iconify-icon icon="solar:info-circle-bold-duotone" width="16"></iconify-icon>
<span>About Us</span>
</div>
</div>

<div className="relative observe-animate" data-delay="100">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] bg-blue-500/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
<h3 className="leading-[1.3] md:leading-[1.1] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-neutral-400 tracking-tight max-w-6xl">
<span className="text-neutral-900">A healthy smile is not just an aesthetic,</span>
                but a foundation of overall well-being.
                With a team of clinical experts, we utilize
                <span className="text-neutral-900">advanced diagnostics</span>
                to empower patients to achieve lifelong oral health at the highest standard.
            </h3>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-12 gap-x-6 mt-16 md:mt-24 pt-10 md:pt-12 border-t border-neutral-200">

<div className="flashlight-target observe-animate" data-delay="200">
<div className="flashlight-content flex flex-col gap-2 px-6 py-8 rounded-2xl border border-neutral-100">
<div className="text-4xl md:text-5xl lg:text-7xl leading-none font-light text-neutral-900 tracking-tighter">
                        25K+
                    </div>
<div className="text-base md:text-lg font-medium pl-1 text-neutral-500">
                        Happy Patients
                    </div>
</div>
</div>

<div className="flashlight-target observe-animate" data-delay="300">
<div className="flashlight-content flex flex-col gap-2 px-6 py-8 rounded-2xl border border-neutral-100">
<div className="text-4xl md:text-5xl lg:text-7xl leading-none font-light text-neutral-900 tracking-tighter">
                        15K+
                    </div>
<div className="text-base md:text-lg font-medium pl-1 text-neutral-500">
                        Treatments
                    </div>
</div>
</div>

<div className="flashlight-target observe-animate" data-delay="400">
<div className="flashlight-content flex flex-col gap-2 px-6 py-8 rounded-2xl border border-neutral-100">
<div className="text-4xl md:text-5xl lg:text-7xl leading-none font-light text-neutral-900 tracking-tighter">
                        20Y+
                    </div>
<div className="text-base md:text-lg font-medium pl-1 text-neutral-500">
                        Years Experience
                    </div>
</div>
</div>

<div className="flashlight-target observe-animate" data-delay="500">
<div className="flashlight-content flex flex-col gap-2 px-6 py-8 rounded-2xl border border-neutral-100">
<div className="text-4xl md:text-5xl lg:text-7xl leading-none font-light text-neutral-900 tracking-tighter">
                        4.9
                    </div>
<div className="text-base md:text-lg font-medium pl-1 text-neutral-500">
                        Average Rating
                    </div>
</div>
</div>
</div>
</section>

<section className="px-5 py-20 md:px-12 md:py-32 max-w-[1600px] mx-auto overflow-hidden" id="doctors">
<div className="flex flex-col items-center text-center mb-16 md:mb-16 observe-animate" data-delay="100">
<h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight text-neutral-900 max-w-2xl font-normal mb-6 leading-[1.2] md:leading-normal">
                Experts in aesthetic and functional dentistry.
            </h2>
<p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-lg leading-loose md:leading-relaxed">
                Our specialists combine advanced training with a compassionate approach, ensuring precise and personalized care.
            </p>
</div>
<div className="flex mt-8 relative items-center justify-center observe-animate" data-delay="200" style={{perspective: '1200px'}}>

<button aria-label="Previous" className="absolute left-0 md:left-8 lg:left-24 z-20 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-neutral-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 shadow-sm transition-all duration-300 focus:outline-none" id="teamPrevBtn">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>

<div className="relative w-full max-w-md h-[400px] sm:h-[500px] flex items-center justify-center">
<div className="flex transition-transform duration-500 ease-out absolute top-0 right-0 bottom-0 left-0 items-center justify-center" id="carouselTrack" style={{transformStyle: 'preserve-3d'}}>

<div className="carousel-card absolute w-[280px] sm:w-80 h-[400px] sm:h-[460px] rounded-[2rem] overflow-hidden border-2 border-blue-400 transition-all duration-500 bg-neutral-900" data-index="0" style={{filter: 'brightness(1)', zIndex: '10', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, rgba(59, 130, 246, 0.3) 0px 0px 40px'}}>
<img alt="Dr. Sarah Jenkins" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 text-left">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium border border-white/20 backdrop-blur-md mb-3 text-white">
<iconify-icon className="text-blue-300" icon="solar:star-bold" width="14"></iconify-icon>
                            Lead Orthodontist
                        </div>
<p className="text-xl md:text-2xl font-medium text-white tracking-tight mb-1">Dr. Sarah Jenkins</p>
<p className="text-sm text-neutral-300">Ivy League Trained</p>
</div>
</div>

<div className="carousel-card absolute w-[280px] sm:w-80 h-[400px] sm:h-[460px] rounded-[2rem] overflow-hidden border border-white/20 transition-all duration-500 bg-neutral-900" data-index="1" style={{filter: 'brightness(0.75)', zIndex: '5'}}>
<img alt="Dr. Michael Chen" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 text-left">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium border border-white/20 backdrop-blur-md mb-3 text-white">
<iconify-icon className="text-blue-300" icon="solar:smile-circle-bold" width="14"></iconify-icon>
                            Pediatric Dentist
                        </div>
<p className="text-xl md:text-2xl font-medium text-white tracking-tight mb-1">Dr. Michael Chen</p>
<p className="text-sm text-neutral-300">Board Certified</p>
</div>
</div>

<div className="carousel-card absolute w-[280px] sm:w-80 h-[400px] sm:h-[460px] rounded-[2rem] overflow-hidden border border-white/20 transition-all duration-500 bg-neutral-900" data-index="2" style={{filter: 'brightness(0.6)', zIndex: '2'}}>
<img alt="Dr. Emily Ross" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 text-left">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium border border-white/20 backdrop-blur-md mb-3 text-white">
<iconify-icon className="text-blue-300" icon="solar:magic-stick-3-bold" width="14"></iconify-icon>
                            Cosmetic Dentist
                        </div>
<p className="text-xl md:text-2xl font-medium text-white tracking-tight mb-1">Dr. Emily Ross</p>
<p className="text-sm text-neutral-300">Smile Design Expert</p>
</div>
</div>
</div>
</div>

<button aria-label="Next" className="absolute right-0 md:right-8 lg:right-24 z-20 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-neutral-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 shadow-sm transition-all duration-300 focus:outline-none" id="teamNextBtn">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</section>

<section className="md:px-12 py-16 md:py-24 px-4 overflow-hidden bg-neutral-50 max-w-[1600px] border-neutral-200 border rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-auto mb-16 md:mb-24 relative" id="testimonials">

<div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16 relative z-10 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.1s both'}}>
<h2 className="text-3xl md:text-5xl tracking-tight max-w-2xl leading-tight font-normal text-neutral-900 mb-8">
                Loved by thousands of smiles.
            </h2>
<div className="flex gap-3">
<button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-neutral-300 flex items-center justify-center bg-white hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition duration-300 text-neutral-600 z-20 relative focus:outline-none" id="testimPrevBtn">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-neutral-300 flex items-center justify-center bg-white hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition duration-300 text-neutral-600 z-20 relative focus:outline-none" id="testimNextBtn">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="max-w-4xl mx-auto py-8 md:py-10 relative observe-animate" data-delay="200">
<div className="relative mx-auto max-w-3xl">

<div className="absolute -inset-x-6 -top-3 translate-y-2 rotate-[-2deg] rounded-3xl border border-neutral-200/50 bg-neutral-100 h-[280px] hidden sm:block z-0 shadow-sm"></div>

<div className="absolute -inset-x-3 -top-1 translate-y-2 rotate-[2deg] rounded-3xl border border-neutral-200 bg-white/50 h-[280px] hidden sm:block z-0 shadow-md"></div>

<div className="relative rounded-3xl border border-neutral-200 bg-white shadow-xl overflow-hidden rotate-[-1deg] z-10 testim-active-transition min-h-[300px] flex flex-col justify-between p-6 md:p-10" id="active-testim-card">
<div className="flex gap-1 text-blue-500 mb-6">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-neutral-900 font-normal tracking-tight text-lg sm:text-2xl leading-[1.6] sm:leading-snug mb-8" id="testim-text">
                        "The Invisalign process was seamless. The staff made me feel incredibly comfortable, and the results exceeded my expectations. I finally have the confident smile I always wanted."
                    </p>
<div className="flex items-center gap-4 mt-auto pt-6 border-t border-neutral-100">
<img alt="Patient" className="w-12 h-12 rounded-full object-cover bg-neutral-100" id="testim-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-base text-neutral-900 font-medium" id="testim-name">Emily R.</div>
<div className="text-sm text-neutral-500" id="testim-role">Invisalign Patient</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-12 pb-8 border-t bg-neutral-900 border-neutral-800 text-white" id="contact">
<div className="max-w-[1600px] mx-auto px-5 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-10 animate-on-scroll items-start" style={{animation: 'animationIn 0.8s ease-out 0.1s both'}}>

<div className="flex flex-col gap-5">
<a className="-mt-3 inline-flex items-center justify-start transition-opacity hover:opacity-100 opacity-90 w-[180px] md:w-[220px] text-white" href="#hero-section">
<svg className="w-full h-auto fill-current" viewbox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
<text className="script" fontSize="120" text-anchor="start" x="0" y="55%">Noe Valley</text>
<text className="script" fontSize="140" text-anchor="start" x="0" y="75%">Smiles</text>
<text className="sub" fontSize="36" text-anchor="start" x="0" y="350">&amp; BRACES</text>
</svg>
</a>
<p className="text-neutral-400 font-medium leading-relaxed">
                        Elevating dental care through precision, compassion, and advanced technology.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-500 hover:border-transparent transition-all text-neutral-400 hover:text-white" href="https://instagram.com">
<iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all text-neutral-400 hover:text-white" href="https://facebook.com">
<iconify-icon icon="simple-icons:facebook" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-[#FF1A1A] hover:border-[#FF1A1A] transition-all text-neutral-400 hover:text-white" href="https://yelp.com">
<iconify-icon icon="simple-icons:yelp" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="flex flex-col gap-5">
<h4 className="font-semibold text-white text-lg tracking-tight m-0">Contact Us</h4>
<ul className="flex flex-col gap-4">
<li>
<a className="flex items-center gap-3 text-neutral-400 font-medium hover:text-white transition-colors" href="https://maps.google.com/?q=3848+24th+Street,+San+Francisco,+CA+94114" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:map-point-linear" width="20"></iconify-icon>
<span>3848 24th Street, San Francisco, CA 94114</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-neutral-400 font-medium hover:text-white transition-colors" href="tel:+14155550198">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:phone-linear" width="20"></iconify-icon>
<span>(+1) 415 555 0198</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-neutral-400 font-medium hover:text-white transition-colors" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=hello@noevalleysmiles.com" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:letter-linear" width="20"></iconify-icon>
<span>hello@noevalleysmiles.com</span>
</a>
</li>
</ul>
</div>

<div className="flex flex-col gap-5">
<h4 className="font-semibold text-white text-lg tracking-tight m-0">Clinic Hours</h4>
<ul className="flex flex-col gap-4 text-neutral-400 font-medium w-full lg:max-w-[280px]">
<li className="grid grid-cols-[80px_1fr] gap-4 items-start">
<span className="pt-0.5">Mon - Fri</span>
<span className="text-white text-right leading-relaxed">8:15 AM - 12:00 PM<br/>1:00 PM - 4:45 PM</span>
</li>
<li className="grid grid-cols-[80px_1fr] gap-4 items-center">
<span>Sat - Sun</span>
<span className="text-white text-right">Closed</span>
</li>
</ul>
</div>
</div>

<div className="border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.2s both'}}>
<p className="text-neutral-500 font-medium text-sm">© 2024 Noe Valley Smiles and Braces. All Rights Reserved.</p>
<div className="flex gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-white transition-colors" href="/patients/policies-forms">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="/patients/policies-forms">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
