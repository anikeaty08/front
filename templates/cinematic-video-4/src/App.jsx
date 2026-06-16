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


document.write(new Date().getFullYear())


        // Initialize Icons
        lucide.createIcons();

        // Loading Screen Logic
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.visibility = 'hidden';
                }, 500);
            }, 800); // Minimum display time for intro
        });

        // Top Right Menu Toggle
        const menuBtn = document.getElementById('menuBtn');
        const menuDropdown = document.getElementById('menuDropdown');
        let menuOpen = false;

        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            menuOpen = !menuOpen;
            if(menuOpen) {
                menuDropdown.classList.remove('opacity-0', 'translate-y-[-10px]', 'pointer-events-none');
                menuDropdown.classList.add('opacity-100', 'translate-y-0');
            } else {
                menuDropdown.classList.add('opacity-0', 'translate-y-[-10px]', 'pointer-events-none');
                menuDropdown.classList.remove('opacity-100', 'translate-y-0');
            }
        });

        document.addEventListener('click', () => {
            if(menuOpen) {
                menuOpen = false;
                menuDropdown.classList.add('opacity-0', 'translate-y-[-10px]', 'pointer-events-none');
                menuDropdown.classList.remove('opacity-100', 'translate-y-0');
            }
        });

        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal-element');
        
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Run once
                }
            });
        };

        const revealOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
        
        revealElements.forEach(el => {
            revealObserver.observe(el);
        });

        // Navbar styling on scroll
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-[#050807]/80', 'shadow-lg');
                nav.classList.remove('bg-[#050807]/50');
            } else {
                nav.classList.add('bg-[#050807]/50');
                nav.classList.remove('bg-[#050807]/80', 'shadow-lg');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] bg-[#050807] flex items-center justify-center" id="loader">
<div className="flex flex-col items-center gap-6">
<i className="w-16 h-16 text-[#B6FF3C] loader-pulse" data-lucide="aperture" strokeWidth="1.5"></i>
<h1 className="text-2xl font-medium tracking-tight text-[#B6FF3C] loader-pulse">HEMESH EDITOR</h1>
</div>
</div>

<div className="fixed top-0 left-0 w-[800px] h-[800px] bg-[#B6FF3C]/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>
<div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-[#00FFC6]/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 z-0"></div>

<div className="fixed top-6 right-6 z-50 flex flex-col items-end">
<button className="bg-[#0a1912]/80 backdrop-blur-md border border-[#b6ff3c]/30 p-3 rounded-xl text-white hover:bg-[#b6ff3c]/10 hover:shadow-[0_0_15px_rgba(182,255,60,0.3)] transition-all duration-300" id="menuBtn">
<i className="w-5 h-5" data-lucide="more-vertical" strokeWidth="1.5"></i>
</button>
<div className="mt-2 w-48 bg-[#0a1912]/90 backdrop-blur-xl border border-[#b6ff3c]/20 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] opacity-0 translate-y-[-10px] pointer-events-none transition-all duration-300" id="menuDropdown">
<a className="flex items-center gap-3 px-4 py-3 text-sm text-[#A0B3A8] hover:bg-[#b6ff3c]/10 hover:text-[#B6FF3C] transition-colors border-b border-[#b6ff3c]/10" href="#">
<i className="w-4 h-4" data-lucide="log-in" strokeWidth="1.5"></i> Login
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm text-[#A0B3A8] hover:bg-[#b6ff3c]/10 hover:text-[#B6FF3C] transition-colors" href="#">
<i className="w-4 h-4" data-lucide="shield" strokeWidth="1.5"></i> Admin Access
            </a>
</div>
</div>

<a className="fixed top-24 right-6 z-40 bg-[#25D366] p-3 rounded-full text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] hover:scale-110 transition-all duration-300 group" href="#">
<i className="w-6 h-6" data-lucide="message-circle" strokeWidth="1.5"></i>
</a>

<nav className="fixed top-0 w-full z-40 backdrop-blur-xl border-b border-[#b6ff3c]/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group text-xl font-semibold text-white tracking-tight" href="#">
<span className="w-8 h-8 rounded bg-gradient-to-br from-[#1A3A2A] to-[#B6FF3C]/20 border border-[#B6FF3C]/50 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(182,255,60,0.5)] transition-all">
<i className="w-4 h-4 text-[#B6FF3C]" data-lucide="film" strokeWidth="1.5"></i>
</span>
                HEMESH
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A0B3A8]">
<a className="hover:text-[#B6FF3C] transition-colors" href="#about">About</a>
<a className="hover:text-[#B6FF3C] transition-colors" href="#services">Services</a>
<a className="hover:text-[#B6FF3C] transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-[#B6FF3C] transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-[#B6FF3C] transition-colors" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">

<div className="absolute inset-0 z-[-2]">
<img alt="Studio" className="w-full h-full object-cover opacity-20 scale-105" src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 z-[-1] bg-gradient-to-b from-[#050807]/80 via-[#050807]/90 to-[#050807]"></div>
<div className="absolute inset-0 z-[-1] ambient-glow"></div>
<div className="max-w-4xl mx-auto px-6 text-center reveal-element active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A3A2A]/50 border border-[#B6FF3C]/30 text-[#B6FF3C] text-xs font-medium mb-8 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-[#B6FF3C] animate-pulse"></span>
                Available for freelance work
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 drop-shadow-[0_0_25px_rgba(182,255,60,0.15)] leading-tight">
                Hemesh Editor <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#B6FF3C] to-[#00FFC6] font-semibold">Cinematic Vision</span>
</h1>
<p className="text-xl md:text-2xl text-[#A0B3A8] max-w-2xl mx-auto mb-10 font-light">
                Turning your vision into cinematic reality. Premium video editing, motion graphics, and photography.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto px-8 py-4 bg-[#B6FF3C] text-black text-sm font-semibold rounded-full shadow-[0_0_20px_rgba(182,255,60,0.3)] hover:shadow-[0_0_30px_rgba(182,255,60,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2" href="#portfolio">
                    View Portfolio <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-[#B6FF3C]/50 text-sm font-semibold rounded-full hover:bg-[#B6FF3C]/10 hover:border-[#B6FF3C] transition-all duration-300 flex items-center justify-center gap-2" href="#contact">
                    Hire Me
                </a>
</div>
<div className="flex items-center justify-center gap-6">
<a className="p-3 rounded-full bg-[#0a1912]/50 border border-white/10 text-[#A0B3A8] hover:text-[#B6FF3C] hover:border-[#B6FF3C]/50 hover:bg-[#B6FF3C]/5 transition-all duration-300" href="https://www.instagram.com/__ankit_777r?igsh=MTdkbGZoYzRqejY0bw==" target="_blank">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="p-3 rounded-full bg-[#0a1912]/50 border border-white/10 text-[#A0B3A8] hover:text-[#B6FF3C] hover:border-[#B6FF3C]/50 hover:bg-[#B6FF3C]/5 transition-all duration-300" href="https://youtube.com/@sb.tech.ax7?si=0Y5Q6cU5teSsAGYw" target="_blank">
<i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
<a className="p-3 rounded-full bg-[#0a1912]/50 border border-white/10 text-[#A0B3A8] hover:text-[#B6FF3C] hover:border-[#B6FF3C]/50 hover:bg-[#B6FF3C]/5 transition-all duration-300" href="mailto:rtfriderm@gmail.com">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-xs tracking-widest text-[#A0B3A8] uppercase">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-[#B6FF3C] to-transparent"></div>
</div>
</section>

<section className="py-32 relative z-10 bg-[#0B1410]" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal-element">
<div className="absolute inset-0 bg-gradient-to-tr from-[#B6FF3C]/20 to-transparent blur-3xl rounded-full"></div>
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#B6FF3C]/20 bg-[#050807]">
<img alt="Hemesh" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent"></div>
</div>

<div className="absolute -bottom-8 -right-8 bg-[#0a1912]/80 backdrop-blur-xl border border-[#b6ff3c]/20 p-6 rounded-2xl shadow-2xl">
<div className="flex items-center gap-4">
<i className="w-8 h-8 text-[#B6FF3C]" data-lucide="award" strokeWidth="1.5"></i>
<div>
<p className="text-2xl font-semibold text-white">50+</p>
<p className="text-sm text-[#A0B3A8]">Projects Delivered</p>
</div>
</div>
</div>
</div>
<div className="reveal-element">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">Crafting Visual <br/><span className="text-[#B6FF3C]">Masterpieces</span></h2>
<div className="space-y-6 mb-10">
<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-[#1A3A2A]/30 transition-colors border border-transparent hover:border-[#B6FF3C]/10">
<i className="w-6 h-6 text-[#B6FF3C] mt-1" data-lucide="user" strokeWidth="1.5"></i>
<div>
<h3 className="text-sm text-[#6B7F75] uppercase tracking-wider mb-1">Name</h3>
<p className="text-xl text-white font-medium group-hover:text-[#B6FF3C] transition-colors">Hemesh Kumar</p>
</div>
</div>
<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-[#1A3A2A]/30 transition-colors border border-transparent hover:border-[#B6FF3C]/10">
<i className="w-6 h-6 text-[#B6FF3C] mt-1" data-lucide="book-open" strokeWidth="1.5"></i>
<div>
<h3 className="text-sm text-[#6B7F75] uppercase tracking-wider mb-1">Education</h3>
<p className="text-xl text-white font-medium group-hover:text-[#B6FF3C] transition-colors">BBA (F&amp;T), ADCA</p>
</div>
</div>
<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-[#1A3A2A]/30 transition-colors border border-transparent hover:border-[#B6FF3C]/10">
<i className="w-6 h-6 text-[#B6FF3C] mt-1" data-lucide="zap" strokeWidth="1.5"></i>
<div>
<h3 className="text-sm text-[#6B7F75] uppercase tracking-wider mb-1">Expertise</h3>
<p className="text-xl text-white font-medium group-hover:text-[#B6FF3C] transition-colors">Video Editing, Photography, Motion Graphics, Typography</p>
</div>
</div>
</div>
<p className="text-[#A0B3A8] leading-relaxed mb-8">
                        I specialize in cinematic color grading, smooth storytelling transitions, and engaging visual layouts. Having worked with numerous creators and brands, I understand how to turn raw footage into compelling content that retains audience attention.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal-element">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Professional <span className="text-[#B6FF3C]">Services</span></h2>
<p className="text-[#A0B3A8] max-w-2xl mx-auto">High-end post-production solutions tailored for creators and brands.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#0a1912]/70 backdrop-blur-xl border border-[#b6ff3c]/10 p-8 rounded-2xl hover:border-[#b6ff3c]/40 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(182,255,60,0.1)] transition-all duration-500 group reveal-element relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B6FF3C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-xl bg-[#1A3A2A] border border-[#B6FF3C]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-[#B6FF3C]" data-lucide="video" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Cinematic Video Editing</h3>
<p className="text-sm text-[#A0B3A8] mb-6 min-h-[60px]">Color grading, smooth transitions, and storytelling elements.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-2xl font-medium text-[#B6FF3C]">₹400</span>
<button className="text-sm text-white font-medium hover:text-[#B6FF3C] flex items-center gap-1 transition-colors">
                            Order <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="bg-[#0a1912]/70 backdrop-blur-xl border border-[#b6ff3c]/10 p-8 rounded-2xl hover:border-[#b6ff3c]/40 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(182,255,60,0.1)] transition-all duration-500 group reveal-element relative overflow-hidden" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B6FF3C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-xl bg-[#1A3A2A] border border-[#B6FF3C]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-[#00FFC6]" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Motion Graphics</h3>
<p className="text-sm text-[#A0B3A8] mb-6 min-h-[60px]">Dynamic animations and visual effects for high engagement.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-2xl font-medium text-[#00FFC6]">₹500</span>
<button className="text-sm text-white font-medium hover:text-[#00FFC6] flex items-center gap-1 transition-colors">
                            Order <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="bg-[#0a1912]/70 backdrop-blur-xl border border-[#b6ff3c]/10 p-8 rounded-2xl hover:border-[#b6ff3c]/40 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(182,255,60,0.1)] transition-all duration-500 group reveal-element relative overflow-hidden" style={{transitionDelay: '200ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B6FF3C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-xl bg-[#1A3A2A] border border-[#B6FF3C]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-[#D8FF7A]" data-lucide="type" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Typography</h3>
<p className="text-sm text-[#A0B3A8] mb-6 min-h-[60px]">Custom kinetic typography to make your message pop.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-2xl font-medium text-[#D8FF7A]">₹250</span>
<button className="text-sm text-white font-medium hover:text-[#D8FF7A] flex items-center gap-1 transition-colors">
                            Order <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="bg-[#0a1912]/70 backdrop-blur-xl border border-[#b6ff3c]/10 p-8 rounded-2xl hover:border-[#b6ff3c]/40 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(182,255,60,0.1)] transition-all duration-500 group reveal-element relative overflow-hidden" style={{transitionDelay: '300ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B6FF3C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-xl bg-[#1A3A2A] border border-[#B6FF3C]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-[#B6FF3C]" data-lucide="image" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Thumbnail Design</h3>
<p className="text-sm text-[#A0B3A8] mb-6 min-h-[60px]">High CTR YouTube thumbnails that grab attention instantly.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-medium text-[#B6FF3C]">₹100<span className="text-xs text-[#A0B3A8]">/ea</span></span>
<button className="text-sm text-white font-medium hover:text-[#B6FF3C] flex items-center gap-1 transition-colors">
                            Order <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-[#0B1410]" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-element">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Selected <span className="text-[#B6FF3C]">Works</span></h2>
<p className="text-[#A0B3A8]">Explore my recent cinematic projects and designs.</p>
</div>

<div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto no-scrollbar pb-2 w-full md:w-auto">
<button className="px-5 py-2 rounded-full bg-[#B6FF3C] text-black text-sm font-medium whitespace-nowrap">All</button>
<button className="px-5 py-2 rounded-full bg-[#0a1912] border border-white/10 text-[#A0B3A8] hover:text-white hover:border-[#B6FF3C]/50 text-sm font-medium transition-all whitespace-nowrap">Editing</button>
<button className="px-5 py-2 rounded-full bg-[#0a1912] border border-white/10 text-[#A0B3A8] hover:text-white hover:border-[#B6FF3C]/50 text-sm font-medium transition-all whitespace-nowrap">Motion</button>
<button className="px-5 py-2 rounded-full bg-[#0a1912] border border-white/10 text-[#A0B3A8] hover:text-white hover:border-[#B6FF3C]/50 text-sm font-medium transition-all whitespace-nowrap">Thumbnails</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-video rounded-2xl overflow-hidden bg-[#1A3A2A] reveal-element cursor-pointer border border-white/5 hover:border-[#B6FF3C]/30 transition-colors">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-[#050807]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 rounded-full bg-[#B6FF3C]/20 backdrop-blur-md border border-[#B6FF3C]/50 flex items-center justify-center text-[#B6FF3C] scale-75 group-hover:scale-100 transition-transform duration-500">
<i className="w-6 h-6 ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<span className="text-xs font-medium text-[#B6FF3C] px-2 py-1 rounded bg-[#1A3A2A] border border-[#B6FF3C]/20 mb-2 inline-block">Cinematic Edit</span>
<h3 className="text-xl font-medium text-white">Automotive Reel</h3>
</div>
</div>

<div className="group relative aspect-video rounded-2xl overflow-hidden bg-[#1A3A2A] reveal-element cursor-pointer border border-white/5 hover:border-[#00FFC6]/30 transition-colors" style={{transitionDelay: '100ms'}}>
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-[#050807]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 rounded-full bg-[#00FFC6]/20 backdrop-blur-md border border-[#00FFC6]/50 flex items-center justify-center text-[#00FFC6] scale-75 group-hover:scale-100 transition-transform duration-500">
<i className="w-6 h-6 ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<span className="text-xs font-medium text-[#00FFC6] px-2 py-1 rounded bg-[#1A3A2A] border border-[#00FFC6]/20 mb-2 inline-block">Motion Graphics</span>
<h3 className="text-xl font-medium text-white">Tech Product Launch</h3>
</div>
</div>

<div className="group relative aspect-video rounded-2xl overflow-hidden bg-[#1A3A2A] reveal-element cursor-pointer border border-white/5 hover:border-[#B6FF3C]/30 transition-colors" style={{transitionDelay: '200ms'}}>
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-[#050807]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 rounded-full bg-[#B6FF3C]/20 backdrop-blur-md border border-[#B6FF3C]/50 flex items-center justify-center text-[#B6FF3C] scale-75 group-hover:scale-100 transition-transform duration-500">
<i className="w-6 h-6" data-lucide="eye" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<span className="text-xs font-medium text-[#B6FF3C] px-2 py-1 rounded bg-[#1A3A2A] border border-[#B6FF3C]/20 mb-2 inline-block">Thumbnail</span>
<h3 className="text-xl font-medium text-white">Vlog Episode 42</h3>
</div>
</div>
</div>
<div className="mt-12 text-center reveal-element">
<button className="px-8 py-3 bg-transparent border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors inline-flex items-center gap-2">
                    Load More <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal-element">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Clear <span className="text-[#B6FF3C]">Pricing</span></h2>
<p className="text-[#A0B3A8] max-w-2xl mx-auto">Transparent rates for premium quality work. Secure payment via UPI.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-[#0B1410] border border-white/5 rounded-3xl p-8 flex flex-col reveal-element hover:border-[#B6FF3C]/20 transition-colors">
<h3 className="text-lg text-[#A0B3A8] font-medium mb-2">Thumbnail Design</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-white">₹100</span>
<span className="text-sm text-[#6B7F75]">/item</span>
</div>
<ul className="space-y-4 mb-8 flex-grow text-sm text-[#A0B3A8]">
<li className="flex items-start gap-3"><i className="w-4 h-4 text-[#B6FF3C] mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i> High CTR Design</li>
<li className="flex items-start gap-3"><i className="w-4 h-4 text-[#B6FF3C] mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i> Color Correction</li>
<li className="flex items-start gap-3"><i className="w-4 h-4 text-[#B6FF3C] mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i> 1 Revision</li>
</ul>
<a className="w-full py-3 rounded-full border border-[#B6FF3C]/30 text-[#B6FF3C] text-sm font-semibold text-center hover:bg-[#B6FF3C]/10 transition-colors" href="upi://pay?pa=8475046358@axl&amp;pn=HEMESH KUMAR&amp;am=100">Pay Now</a>
</div>

<div className="bg-[#0a1912]/90 backdrop-blur-xl border border-[#B6FF3C] rounded-3xl p-8 flex flex-col reveal-element relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(182,255,60,0.1)]" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B6FF3C] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<h3 className="text-lg text-[#B6FF3C] font-medium mb-2">Advanced Editing</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-white">₹500</span>
<span className="text-sm text-[#6B7F75]">/video</span>
</div>
<ul className="space-y-4 mb-8 flex-grow text-sm text-[#A0B3A8]">
<li className="flex items-start gap-3"><i className="w-4 h-4 text-[#B6FF3C] mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i> Cinematic Color Grading</li>
<li className="flex items-start gap-3"><i className="w-4 h-4 text-[#B6FF3C] mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i> Motion Graphics Included</li>
<li className="flex items-start gap-3"><i className="w-4 h-4 text-[#B6FF3C] mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i> Advanced Sound Design</li>
</ul>
<a className="w-full py-3 rounded-full bg-[#B6FF3C] text-black text-sm font-semibold text-center hover:shadow-[0_0_20px_rgba(182,255,60,0.5)] transition-shadow" href="upi://pay?pa=8475046358@axl&amp;pn=HEMESH KUMAR&amp;am=500">Pay Now</a>
</div>

<div className="bg-[#0B1410] border border-white/5 rounded-3xl p-8 flex flex-col reveal-element hover:border-[#B6FF3C]/20 transition-colors" style={{transitionDelay: '200ms'}}>
<h3 className="text-lg text-[#A0B3A8] font-medium mb-2">Basic Editing</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium text-white">₹400</span>
<span className="text-sm text-[#6B7F75]">/video</span>
</div>
<ul className="space-y-4 mb-8 flex-grow text-sm text-[#A0B3A8]">
<li className="flex items-start gap-3"><i className="w-4 h-4 text-[#B6FF3C] mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i> Standard Cuts &amp; Trims</li>
<li className="flex items-start gap-3"><i className="w-4 h-4 text-[#B6FF3C] mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i> Basic Color Correction</li>
<li className="flex items-start gap-3"><i className="w-4 h-4 text-[#B6FF3C] mt-0.5 shrink-0" data-lucide="check" strokeWidth="2"></i> Background Music Sync</li>
</ul>
<a className="w-full py-3 rounded-full border border-[#B6FF3C]/30 text-[#B6FF3C] text-sm font-semibold text-center hover:bg-[#B6FF3C]/10 transition-colors" href="upi://pay?pa=8475046358@axl&amp;pn=HEMESH KUMAR&amp;am=400">Pay Now</a>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-[#0B1410] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-16 reveal-element">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Client <span className="text-[#B6FF3C]">Stories</span></h2>
</div>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-10 px-6 max-w-7xl mx-auto no-scrollbar reveal-element">

<div className="min-w-[320px] md:min-w-[400px] snap-center bg-[#050807] border border-white/5 p-8 rounded-2xl shrink-0">
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 text-[#B6FF3C] fill-[#B6FF3C]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-[#B6FF3C] fill-[#B6FF3C]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-[#B6FF3C] fill-[#B6FF3C]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-[#B6FF3C] fill-[#B6FF3C]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-[#B6FF3C] fill-[#B6FF3C]" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-[#A0B3A8] text-sm leading-relaxed mb-6">"Hemesh completely transformed my YouTube channel. The pacing, the cinematic colors, and the motion graphics keep my audience engaged till the end."</p>
<div className="flex items-center gap-4">
<img alt="Client" className="w-10 h-10 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-white text-sm font-medium">Rahul S.</h4>
<p className="text-[#6B7F75] text-xs">Content Creator</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] snap-center bg-[#050807] border border-white/5 p-8 rounded-2xl shrink-0">
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 text-[#B6FF3C] fill-[#B6FF3C]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-[#B6FF3C] fill-[#B6FF3C]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-[#B6FF3C] fill-[#B6FF3C]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-[#B6FF3C] fill-[#B6FF3C]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-[#B6FF3C] fill-[#B6FF3C]" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-[#A0B3A8] text-sm leading-relaxed mb-6">"Fast delivery and exceptional quality. The thumbnail he designed got me a 15% CTR boost on my latest video. Highly recommended!"</p>
<div className="flex items-center gap-4">
<img alt="Client" className="w-10 h-10 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-white text-sm font-medium">Amit V.</h4>
<p className="text-[#6B7F75] text-xs">Tech Vlogger</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] snap-center bg-[#050807] border border-white/5 p-8 rounded-2xl shrink-0">
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 text-[#B6FF3C] fill-[#B6FF3C]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-[#B6FF3C] fill-[#B6FF3C]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-[#B6FF3C] fill-[#B6FF3C]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-[#B6FF3C] fill-[#B6FF3C]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-[#B6FF3C] fill-[#B6FF3C]" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-[#A0B3A8] text-sm leading-relaxed mb-6">"Great to work with. He understands the brief quickly and delivers corporate promo videos that look like they belong on TV."</p>
<div className="flex items-center gap-4">
<img alt="Client" className="w-10 h-10 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-white text-sm font-medium">Priya M.</h4>
<p className="text-[#6B7F75] text-xs">Brand Manager</p>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-32 pb-32 relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-[#0a1912]/50 backdrop-blur-2xl border border-[#b6ff3c]/20 rounded-3xl p-8 md:p-16 reveal-element">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
<div className="">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Let's Work <span className="text-[#B6FF3C]">Together</span></h2>
<p className="text-[#A0B3A8] mb-12">Ready to elevate your content? Fill out the form and I'll get back to you within 24 hours.</p>
<div className="space-y-6">
<a className="flex items-center gap-4 group" href="mailto:rtfriderm@gmail.com">
<div className="w-12 h-12 rounded-full bg-[#1A3A2A] border border-white/5 flex items-center justify-center group-hover:border-[#B6FF3C]/50 group-hover:bg-[#B6FF3C]/10 transition-colors">
<i className="w-5 h-5 text-[#A0B3A8] group-hover:text-[#B6FF3C] transition-colors" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm text-[#6B7F75]">Email</p>
<p className="text-white font-medium">rtfriderm@gmail.com</p>
</div>
</a>
<a className="flex items-center gap-4 group" href="tel:8475046358">
<div className="w-12 h-12 rounded-full bg-[#1A3A2A] border border-white/5 flex items-center justify-center group-hover:border-[#B6FF3C]/50 group-hover:bg-[#B6FF3C]/10 transition-colors">
<i className="w-5 h-5 text-[#A0B3A8] group-hover:text-[#B6FF3C] transition-colors" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm text-[#6B7F75]">Phone / WhatsApp</p>
<p className="text-white font-medium">+91 8475046358</p>
</div>
</a>
<a className="flex items-center gap-4 group" href="https://www.instagram.com/__ankit_777r?igsh=MTdkbGZoYzRqejY0bw==" target="_blank">
<div className="w-12 h-12 rounded-full bg-[#1A3A2A] border border-white/5 flex items-center justify-center group-hover:border-[#B6FF3C]/50 group-hover:bg-[#B6FF3C]/10 transition-colors">
<i className="w-5 h-5 text-[#A0B3A8] group-hover:text-[#B6FF3C] transition-colors" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm text-[#6B7F75]">Instagram</p>
<p className="text-white font-medium">@__ankit_777r</p>
</div>
</a>
</div>
</div>
<form className="space-y-4">
<div className="space-y-2">
<label className="text-sm text-[#A0B3A8] ml-1" onclick="window.location.href='/rtfriderm@gmail.com'" role="button">Name</label>
<input className="placeholder-[#6B7F75] focus:outline-none focus:border-[#B6FF3C] focus:ring-1 focus:ring-[#B6FF3C] transition-all cursor-pointer text-white bg-[#050807] w-full border-white/10 border rounded-xl pt-3 pr-4 pb-3 pl-4" onclick="window.location.href='/rtfriderm@gmail.com'" placeholder="Hemesh editor" role="button" type="text"/>
</div>
<div className="-skew-y-5 space-y-2" style={{maskImage: 'linear-gradient(190deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(190deg, transparent, black 0%, black 100%, transparent)'}}>
<label className="text-sm text-[#A0B3A8] ml-1">Email</label>
<input className="placeholder-[#6B7F75] focus:outline-none focus:border-[#B6FF3C] focus:ring-1 focus:ring-[#B6FF3C] transition-all cursor-pointer text-white bg-[#050807] w-full border-white/10 border rounded-xl pt-3 pr-4 pb-3 pl-4 scale-95 perspective-dramatic" onclick="window.location.href='/rtfriderm@gmail.com'" placeholder="rtfriderm@gmail.com" role="button" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'}} type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm text-[#A0B3A8] ml-1">Message</label>
<textarea className="placeholder-[#6B7F75] focus:outline-none focus:border-[#B6FF3C] focus:ring-1 focus:ring-[#B6FF3C] transition-all resize-none text-white bg-[#050807] w-full border-white/10 border rounded-xl pt-3 pr-4 pb-3 pl-4 scale-90" placeholder="Tell me about your project..." rows="4" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}></textarea>
</div>
<button className="hover:shadow-[0_0_20px_rgba(182,255,60,0.4)] transition-all flex gap-2 group text-sm font-semibold text-black bg-gradient-to-r from-[#4CAF50] to-[#B6FF3C] w-full rounded-xl mt-2 pt-4 pb-4 gap-x-2 gap-y-2 items-center justify-center" type="button">
                            Send Message <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="send" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="z-10 bg-[#050807] border-white/5 border-t pt-16 pb-8 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<a className="text-xl font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded bg-[#1A3A2A] border border-[#B6FF3C]/30 flex items-center justify-center">
<i className="w-4 h-4 text-[#B6FF3C]" data-lucide="film" strokeWidth="1.5"></i>
</span>
                    HEMESH
                </a>
<div className="flex items-center gap-6 text-sm text-[#A0B3A8]">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-[#6B7F75] hover:text-[#B6FF3C] transition-colors" href="https://www.instagram.com/__ankit_777r?igsh=MTdkbGZoYzRqejY0bw==" target="_blank">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-[#6B7F75] hover:text-[#B6FF3C] transition-colors" href="https://youtube.com/@sb.tech.ax7?si=0Y5Q6cU5teSsAGYw" target="_blank">
<i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="text-center text-[#6B7F75] text-xs pt-8 border-t border-white/5">
                © 202620262026202620262026202620262026202620262026202620262026202620262026 Hemesh Kumar. All rights reserved. Cinematic reality.
            </div>
</div>
</footer>


    </>
  );
}
