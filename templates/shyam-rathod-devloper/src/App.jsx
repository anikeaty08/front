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


        document.addEventListener('DOMContentLoaded', () => {
            
            // --- 1. Page Loader Animation ---
            const loader = document.getElementById('loader');
            const loaderText = document.getElementById('loader-text');
            
            setTimeout(() => {
                loaderText.classList.remove('translate-y-full');
            }, 100);

            setTimeout(() => {
                loaderText.classList.add('-translate-y-full');
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    initHeroAnimation();
                }, 1000);
            }, 1500);

            // --- 2. Hero Text Split & Stagger Animation ---
            function initHeroAnimation() {
                const container = document.querySelector('.split-text-container');
                const text = "I Don't Just Build Websites — I Build Systems";
                const words = text.split(' ');
                
                let delay = 0;
                words.forEach((word) => {
                    const wordSpan = document.createElement('span');
                    wordSpan.className = 'inline-block overflow-hidden mr-[0.25em]';
                    
                    word.split('').forEach((char) => {
                        const charSpan = document.createElement('span');
                        charSpan.innerText = char;
                        charSpan.className = 'inline-block translate-y-[110%] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]';
                        charSpan.style.transitionDelay = `${delay}s`;
                        wordSpan.appendChild(charSpan);
                        delay += 0.02; // tighter stagger for longer text
                    });
                    container.appendChild(wordSpan);
                });

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        const chars = container.querySelectorAll('span > span');
                        chars.forEach(c => {
                            c.classList.remove('translate-y-[110%]', 'opacity-0');
                        });
                    });
                });
            }

            // --- 3. Custom Cursor ---
            const cursorDot = document.getElementById('cursor-dot');
            const cursorOutline = document.getElementById('cursor-outline');
            let mouseX = 0, mouseY = 0;
            let outlineX = 0, outlineY = 0;

            if (window.matchMedia("(pointer: fine)").matches) {
                window.addEventListener('mousemove', (e) => {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
                });

                function animateCursor() {
                    outlineX += (mouseX - outlineX) * 0.15;
                    outlineY += (mouseY - outlineY) * 0.15;
                    cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;
                    requestAnimationFrame(animateCursor);
                }
                animateCursor();

                const hoverElements = document.querySelectorAll('a, button, .magnetic-btn, .accordion-item');
                hoverElements.forEach(el => {
                    el.addEventListener('mouseenter', () => {
                        cursorOutline.classList.add('scale-[1.5]', 'bg-black/10');
                        cursorDot.classList.add('scale-0');
                    });
                    el.addEventListener('mouseleave', () => {
                        cursorOutline.classList.remove('scale-[1.5]', 'bg-black/10');
                        cursorDot.classList.remove('scale-0');
                    });
                });
            }

            // --- 4. Magnetic Buttons ---
            const magneticBtns = document.querySelectorAll('.magnetic-btn');
            magneticBtns.forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.transform = `translate(0px, 0px)`;
                    btn.style.transition = `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)`;
                });
                btn.addEventListener('mouseenter', () => {
                    btn.style.transition = `none`;
                });
            });

            // --- 5. Accordion Logic ---
            const accordions = document.querySelectorAll('.accordion-item');
            accordions.forEach(acc => {
                const btn = acc.querySelector('button');
                const content = acc.querySelector('.accordion-content');
                const icon = acc.querySelector('.accordion-icon');

                btn.addEventListener('click', () => {
                    const isOpen = content.style.maxHeight;

                    // Close all
                    accordions.forEach(a => {
                        a.querySelector('.accordion-content').style.maxHeight = null;
                        a.querySelector('.accordion-content').style.opacity = '0';
                        a.querySelector('.accordion-icon').classList.remove('rotate-45');
                    });

                    // Open clicked
                    if (!isOpen) {
                        content.style.maxHeight = content.scrollHeight + "px";
                        content.style.opacity = '1';
                        icon.classList.add('rotate-45');
                    }
                });
            });

            // --- 6. Interactive Simulator Logic ---
            const simBtns = document.querySelectorAll('.sim-btn');
            const simBlocks = document.querySelectorAll('.sim-block');

            simBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const target = btn.getAttribute('data-target');
                    
                    // Reset buttons
                    simBtns.forEach(b => {
                        b.classList.remove('bg-black', 'text-white', 'border-black');
                        b.classList.add('bg-white', 'text-neutral-500', 'border-neutral-200');
                        b.querySelector('iconify-icon').classList.replace('opacity-100', 'opacity-0');
                        b.querySelector('iconify-icon').classList.replace('translate-x-0', '-translate-x-2');
                    });
                    
                    // Active button styling
                    btn.classList.add('bg-black', 'text-white', 'border-black');
                    btn.classList.remove('bg-white', 'text-neutral-500', 'border-neutral-200');
                    btn.querySelector('iconify-icon').classList.replace('opacity-0', 'opacity-100');
                    btn.querySelector('iconify-icon').classList.replace('-translate-x-2', 'translate-x-0');

                    // Switch blocks
                    simBlocks.forEach(block => {
                        if(block.id === `sim-${target}`) {
                            block.classList.remove('hidden-block');
                            block.classList.add('active-block');
                        } else {
                            block.classList.remove('active-block');
                            block.classList.add('hidden-block');
                        }
                    });
                });
            });

            // --- 7. Scroll Reveal & Process Line Animation ---
            const revealElements = document.querySelectorAll('.reveal-up');
            const processLine = document.getElementById('process-line');
            
            revealElements.forEach(el => {
                el.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-1000', 'ease-[cubic-bezier(0.16,1,0.3,1)]');
            });

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-12');
                        observer.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

            revealElements.forEach(el => observer.observe(el));

            // Process line fill on scroll
            window.addEventListener('scroll', () => {
                if(processLine) {
                    const rect = processLine.parentElement.getBoundingClientRect();
                    const viewHeight = window.innerHeight;
                    if(rect.top < viewHeight && rect.bottom > 0) {
                        let progress = ((viewHeight - rect.top) / (viewHeight)) * 100;
                        progress = Math.max(0, Math.min(100, progress * 1.5)); // speed up
                        processLine.style.width = `${progress}%`;
                    }
                }
            });

            // --- 8. Minimal Background Particles (Mouse track) ---
            document.addEventListener('mousemove', (e) => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                document.querySelector('.bg-gradient-wave').style.backgroundPosition = `${x * 100}% ${y * 100}%`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hidden sm:block fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 mix-blend-difference" id="cursor-dot"></div>
<div className="hidden sm:block fixed top-0 left-0 w-8 h-8 border border-black rounded-full pointer-events-none z-[998] transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 mix-blend-difference" id="cursor-outline"></div>

<div className="fixed inset-0 z-[1000] bg-white flex items-center justify-center transition-opacity duration-1000 ease-in-out" id="loader">
<div className="overflow-hidden flex flex-col items-center">
<span className="block text-2xl font-semibold tracking-tight translate-y-full transition-transform duration-700 ease-out" id="loader-text">SYSTEM INIT.</span>
<div className="w-24 h-[1px] bg-neutral-200 mt-4 overflow-hidden">
<div className="h-full bg-black w-full -translate-x-full animate-[slideRight_1s_ease-in-out_forwards]"></div>
</div>
</div>
</div>
<style>
        @keyframes slideRight { to { transform: translateX(0); } }
    </style>

<nav className="fixed top-0 left-0 right-0 z-50 p-6 mix-blend-difference text-white flex justify-between items-center transition-transform duration-500 reveal-nav">
<a className="text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity magnetic-btn inline-block px-4 py-2" href="#">SR.</a>
<a className="text-sm font-medium tracking-wide uppercase flex items-center gap-2 group magnetic-btn px-4 py-2" href="#contact">
<span>Let's Talk</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 bg-gradient-wave overflow-hidden">
<div className="absolute inset-0 pointer-events-none opacity-30" id="particles"></div>
<div className="z-10 text-center max-w-7xl mx-auto flex flex-col items-center">
<h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1] mb-6 flex flex-wrap justify-center overflow-hidden split-text-container">
<span className="sr-only">I Don't Just Build Websites — I Build Systems</span>

</h1>
<p className="text-sm sm:text-base md:text-lg text-neutral-500 font-medium tracking-tight mb-12 reveal-up" style={{transitionDelay: '0.5s'}}>
                Billing Software <span className="mx-2 text-neutral-300">|</span> Management Systems <span className="mx-2 text-neutral-300">|</span> APIs <span className="mx-2 text-neutral-300">|</span> Full Stack
            </p>
<a className="group relative inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full text-sm font-medium tracking-wide overflow-hidden transition-transform hover:scale-105 magnetic-btn reveal-up" href="#interactive" style={{transitionDelay: '0.7s'}}>
<span className="relative z-10 flex items-center gap-2">
                    Start Your System
                    <iconify-icon className="text-lg group-hover:rotate-90 transition-transform duration-500" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</span>
<div className="absolute inset-0 bg-neutral-800 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
</a>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 reveal-up" style={{transitionDelay: '1s'}}>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">Initialize</span>
<div className="w-[1px] h-12 bg-neutral-300 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1/2 bg-black animate-[slideDown_1.5s_ease-in-out_infinite]"></div>
</div>
<style>
                @keyframes slideDown { 0% { transform: translateY(-100%); } 100% { transform: translateY(200%); } }
            </style>
</div>
</section>

<section className="py-24 sm:py-32 px-6 max-w-7xl mx-auto" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
<div className="lg:col-span-5 reveal-up">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">Architecting the <br/>engine behind <br/>your business.</h2>
<p className="text-neutral-500 text-base sm:text-lg leading-relaxed mb-8">
                    SR Development operates as a complete digital software factory. We don't just write code; we engineer scalable infrastructure, complex business logic, and automated workflows designed to accelerate growth.
                </p>
</div>
<div className="lg:col-span-7 relative reveal-up" style={{transitionDelay: '0.2s'}}>

<div className="absolute left-4 sm:left-6 top-2 bottom-2 w-[1px] bg-neutral-200 overflow-hidden">
<div className="w-full h-1/3 bg-black animate-[slideDown_3s_ease-in-out_infinite]"></div>
</div>
<div className="space-y-12 pl-12 sm:pl-16 relative">
<div className="relative group">
<div className="absolute -left-12 sm:-left-16 top-1 w-3 h-3 rounded-full border-2 border-black bg-white group-hover:bg-black transition-colors duration-300"></div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Founder &amp; Lead Engineer</h3>
<p className="text-sm font-medium tracking-wide text-neutral-500 uppercase">Shyam Rathod</p>
<p className="text-base text-neutral-600 mt-3 leading-relaxed">Full Stack System Architect. Specializing in transforming operational bottlenecks into streamlined, automated software solutions.</p>
</div>
<div className="relative group">
<div className="absolute -left-12 sm:-left-16 top-1 w-3 h-3 rounded-full border-2 border-neutral-300 bg-white group-hover:border-black transition-colors duration-300"></div>
<h3 className="text-xl font-semibold tracking-tight mb-2">The Factory Protocol</h3>
<p className="text-base text-neutral-600 mt-3 leading-relaxed">To design, develop, and deploy enterprise-grade systems with absolute precision, utilizing modern stacks for maximum performance and security.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 px-6 border-y border-neutral-100 overflow-hidden">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-center reveal-up">Deployment Workflow</h2>
<div className="relative">

<div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-neutral-200">
<div className="h-full bg-black w-0 transition-all duration-1000 ease-out" id="process-line"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

<div className="flex flex-col items-center text-center reveal-up process-step group">
<div className="w-16 h-16 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300 relative">
<span className="text-lg font-semibold font-mono tracking-tighter">01</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Idea</h3>
<p className="text-sm text-neutral-500">Mapping system architecture, database schemas, and core business logic.</p>
</div>

<div className="flex flex-col items-center text-center reveal-up process-step group" style={{transitionDelay: '0.1s'}}>
<div className="w-16 h-16 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
<span className="text-lg font-semibold font-mono tracking-tighter">02</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Design</h3>
<p className="text-sm text-neutral-500">Crafting intuitive, minimal user interfaces tailored for complex operations.</p>
</div>

<div className="flex flex-col items-center text-center reveal-up process-step group" style={{transitionDelay: '0.2s'}}>
<div className="w-16 h-16 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
<span className="text-lg font-semibold font-mono tracking-tighter">03</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Development</h3>
<p className="text-sm text-neutral-500">Writing highly scalable, secure, and performant modular code.</p>
</div>

<div className="flex flex-col items-center text-center reveal-up process-step group" style={{transitionDelay: '0.3s'}}>
<div className="w-16 h-16 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
<span className="text-lg font-semibold font-mono tracking-tighter">04</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Deployment</h3>
<p className="text-sm text-neutral-500">Launching to production environments with CI/CD automation.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 px-6 max-w-4xl mx-auto" id="systems">
<div className="mb-16 reveal-up text-center">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">Systems I Build</h2>
<p className="text-neutral-500 text-base">Select a module to view specifications.</p>
</div>
<div className="space-y-4 perspective-1000">

<div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white hover:border-black transition-colors duration-300 accordion-item reveal-up group">
<button className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Billing Software</h3>
<iconify-icon className="text-2xl text-neutral-400 group-hover:text-black transition-all duration-300 transform accordion-icon" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content max-h-0 opacity-0 bg-neutral-50">
<p className="px-8 pb-6 pt-2 text-base text-neutral-600 leading-relaxed border-t border-neutral-100">
                        Automated invoicing, recurring subscription management, payment gateway integration (Stripe, PayPal), and real-time financial analytics dashboards tailored precisely to your revenue model.
                    </p>
</div>
</div>

<div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white hover:border-black transition-colors duration-300 accordion-item reveal-up group" style={{transitionDelay: '0.1s'}}>
<button className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">ERP Systems</h3>
<iconify-icon className="text-2xl text-neutral-400 group-hover:text-black transition-all duration-300 transform accordion-icon" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content max-h-0 opacity-0 bg-neutral-50">
<p className="px-8 pb-6 pt-2 text-base text-neutral-600 leading-relaxed border-t border-neutral-100">
                        Centralized Enterprise Resource Planning platforms to unify inventory, human resources, CRM, and logistics into a single, cohesive, high-speed interface.
                    </p>
</div>
</div>

<div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white hover:border-black transition-colors duration-300 accordion-item reveal-up group" style={{transitionDelay: '0.2s'}}>
<button className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Admin Panels</h3>
<iconify-icon className="text-2xl text-neutral-400 group-hover:text-black transition-all duration-300 transform accordion-icon" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content max-h-0 opacity-0 bg-neutral-50">
<p className="px-8 pb-6 pt-2 text-base text-neutral-600 leading-relaxed border-t border-neutral-100">
                        Custom role-based access control (RBAC) portals allowing administrators to manage users, content, settings, and monitor system health through intuitive data visualizations.
                    </p>
</div>
</div>

<div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white hover:border-black transition-colors duration-300 accordion-item reveal-up group" style={{transitionDelay: '0.3s'}}>
<button className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">APIs &amp; Backend Systems</h3>
<iconify-icon className="text-2xl text-neutral-400 group-hover:text-black transition-all duration-300 transform accordion-icon" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content max-h-0 opacity-0 bg-neutral-50">
<p className="px-8 pb-6 pt-2 text-base text-neutral-600 leading-relaxed border-t border-neutral-100">
                        Robust RESTful and GraphQL APIs built with Node.js or Python, providing secure, scalable data pipelines to power frontends, mobile apps, and third-party integrations.
                    </p>
</div>
</div>

<div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white hover:border-black transition-colors duration-300 accordion-item reveal-up group" style={{transitionDelay: '0.4s'}}>
<button className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Custom Automation Tools</h3>
<iconify-icon className="text-2xl text-neutral-400 group-hover:text-black transition-all duration-300 transform accordion-icon" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content max-h-0 opacity-0 bg-neutral-50">
<p className="px-8 pb-6 pt-2 text-base text-neutral-600 leading-relaxed border-t border-neutral-100">
                        Connecting disparate software via webhooks and custom scripts to eliminate manual data entry, optimize workflows, and reduce human error across your organization.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="interactive">
<div className="mb-12 reveal-up">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Select Your System</h2>
<p className="text-neutral-500 mt-2">Initialize a simulation to preview structure.</p>
</div>
<div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row gap-8 reveal-up shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)]">

<div className="flex flex-col gap-3 w-full lg:w-1/3">
<button className="sim-btn text-left px-6 py-4 rounded-xl border border-black bg-black text-white font-medium tracking-wide transition-all duration-300 flex justify-between items-center group" data-target="billing">
                    Billing Dashboard
                    <iconify-icon className="opacity-100 translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="sim-btn text-left px-6 py-4 rounded-xl border border-neutral-200 bg-white text-neutral-500 hover:border-neutral-400 font-medium tracking-wide transition-all duration-300 flex justify-between items-center group" data-target="api">
                    API Architecture
                    <iconify-icon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="sim-btn text-left px-6 py-4 rounded-xl border border-neutral-200 bg-white text-neutral-500 hover:border-neutral-400 font-medium tracking-wide transition-all duration-300 flex justify-between items-center group" data-target="app">
                    Full Stack App
                    <iconify-icon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="w-full lg:w-2/3 bg-white rounded-2xl border border-neutral-200 p-6 flex items-center justify-center relative overflow-hidden min-h-[300px]">

<div className="sim-block active-block w-full" id="sim-billing">
<div className="flex justify-between items-center mb-6">
<div className="w-1/3 h-6 bg-neutral-100 rounded animate-pulse"></div>
<div className="w-12 h-6 bg-green-100 rounded animate-pulse"></div>
</div>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="h-20 bg-neutral-50 border border-neutral-100 rounded-lg p-4 flex flex-col justify-between">
<div className="w-8 h-8 rounded-full bg-neutral-200 animate-pulse"></div>
<div className="w-1/2 h-3 bg-neutral-200 rounded animate-pulse"></div>
</div>
<div className="h-20 bg-neutral-50 border border-neutral-100 rounded-lg p-4 flex flex-col justify-between">
<div className="w-8 h-8 rounded-full bg-neutral-200 animate-pulse"></div>
<div className="w-2/3 h-3 bg-neutral-200 rounded animate-pulse"></div>
</div>
<div className="h-20 bg-neutral-50 border border-neutral-100 rounded-lg p-4 flex flex-col justify-between">
<div className="w-8 h-8 rounded-full bg-neutral-200 animate-pulse"></div>
<div className="w-1/3 h-3 bg-neutral-200 rounded animate-pulse"></div>
</div>
</div>
<div className="h-32 bg-neutral-50 border border-neutral-100 rounded-lg w-full flex items-end p-4 gap-2">

<div className="w-full bg-neutral-200 rounded-t" style={{height: '40%', animation: 'pulse 2s infinite'}}></div>
<div className="w-full bg-neutral-200 rounded-t" style={{height: '70%', animation: 'pulse 2s infinite 0.2s'}}></div>
<div className="w-full bg-neutral-200 rounded-t" style={{height: '50%', animation: 'pulse 2s infinite 0.4s'}}></div>
<div className="w-full bg-neutral-800 rounded-t" style={{height: '90%', animation: 'pulse 2s infinite 0.6s'}}></div>
<div className="w-full bg-neutral-200 rounded-t" style={{height: '60%', animation: 'pulse 2s infinite 0.8s'}}></div>
</div>
</div>

<div className="sim-block hidden-block w-full h-full bg-neutral-900 rounded-xl p-6 font-mono text-xs sm:text-sm text-green-400 flex flex-col" id="sim-api">
<div className="flex gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="space-y-2 opacity-80">
<p>&gt; Initializing secure endpoints...</p>
<p className="text-white">POST /api/v1/systems/deploy</p>
<p className="pl-4 text-blue-300">{</p>
<p className="pl-8 text-blue-300">"status": <span className="text-green-400">200 OK</span>,</p>
<p className="pl-8 text-blue-300">"data": <span className="text-yellow-300">"System Architecture Loaded"</span>,</p>
<p className="pl-8 text-blue-300">"latency": <span className="text-yellow-300">"12ms"</span></p>
<p className="pl-4 text-blue-300">}</p>
<p className="animate-pulse">&gt; _</p>
</div>
</div>

<div className="sim-block hidden-block w-full h-full flex flex-col gap-4" id="sim-app">
<div className="h-10 w-full border-b border-neutral-100 flex items-center justify-between px-2">
<div className="w-8 h-8 rounded-full bg-neutral-200 animate-pulse"></div>
<div className="flex gap-2">
<div className="w-4 h-4 rounded bg-neutral-200 animate-pulse"></div>
<div className="w-4 h-4 rounded bg-neutral-200 animate-pulse"></div>
</div>
</div>
<div className="flex gap-4 h-full">
<div className="w-1/4 h-40 bg-neutral-50 rounded-lg border border-neutral-100 p-2 space-y-2">
<div className="w-full h-2 bg-neutral-200 rounded animate-pulse"></div>
<div className="w-3/4 h-2 bg-neutral-200 rounded animate-pulse"></div>
<div className="w-5/6 h-2 bg-neutral-200 rounded animate-pulse"></div>
</div>
<div className="w-3/4 flex flex-col gap-2">
<div className="w-full h-24 bg-neutral-800 rounded-lg flex items-center justify-center">
<iconify-icon className="text-3xl text-white opacity-50" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="w-1/2 h-4 bg-neutral-200 rounded animate-pulse mt-2"></div>
<div className="w-full h-2 bg-neutral-100 rounded animate-pulse"></div>
<div className="w-2/3 h-2 bg-neutral-100 rounded animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-neutral-100 bg-white overflow-hidden flex relative">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
<div className="flex whitespace-nowrap animate-marquee items-center opacity-60">

<div className="flex items-center gap-16 px-8 text-xl font-medium tracking-tight">
<span>React</span><span className="text-neutral-300">•</span>
<span>Next.js</span><span className="text-neutral-300">•</span>
<span>TypeScript</span><span className="text-neutral-300">•</span>
<span>Node.js</span><span className="text-neutral-300">•</span>
<span>Tailwind CSS</span><span className="text-neutral-300">•</span>
<span>Python</span><span className="text-neutral-300">•</span>
<span>AWS</span><span className="text-neutral-300">•</span>
<span>PostgreSQL</span><span className="text-neutral-300">•</span>
</div>
<div className="flex items-center gap-16 px-8 text-xl font-medium tracking-tight">
<span>React</span><span className="text-neutral-300">•</span>
<span>Next.js</span><span className="text-neutral-300">•</span>
<span>TypeScript</span><span className="text-neutral-300">•</span>
<span>Node.js</span><span className="text-neutral-300">•</span>
<span>Tailwind CSS</span><span className="text-neutral-300">•</span>
<span>Python</span><span className="text-neutral-300">•</span>
<span>AWS</span><span className="text-neutral-300">•</span>
<span>PostgreSQL</span><span className="text-neutral-300">•</span>
</div>
</div>
</section>

<section className="py-24 sm:py-32 px-6 max-w-7xl mx-auto relative" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="reveal-up">
<h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-8">Let's Build <br/>Your System.</h2>
<div className="space-y-6 mt-16">
<div>
<p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-1">Direct Line</p>
<a className="text-xl font-semibold hover:text-neutral-500 transition-colors inline-flex items-center gap-2" href="tel:7016749278">
                            7016749278
                            <iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div>
<p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-1">Social</p>
<a className="text-xl font-semibold hover:text-neutral-500 transition-colors inline-flex items-center gap-2" href="https://www.instagram.com/sr_devlopment_/" rel="noopener noreferrer" target="_blank">
                            Instagram
                            <iconify-icon icon="solar:link-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="relative reveal-up" style={{transitionDelay: '0.2s'}}>

<div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
<form className="space-y-8">
<div className="relative group">
<input className="w-full bg-transparent border-b border-neutral-300 py-3 text-base focus:outline-none focus:border-black transition-colors peer" id="name" placeholder=" " required="" type="text"/>
<label className="absolute left-0 top-3 text-neutral-400 text-base transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-black peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black pointer-events-none" htmlFor="name">Your Name</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-neutral-300 py-3 text-base focus:outline-none focus:border-black transition-colors peer" id="email" placeholder=" " required="" type="email"/>
<label className="absolute left-0 top-3 text-neutral-400 text-base transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-black peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black pointer-events-none" htmlFor="email">Email Address</label>
</div>
<div className="relative group">
<textarea className="w-full bg-transparent border-b border-neutral-300 py-3 text-base focus:outline-none focus:border-black transition-colors peer resize-none" id="message" placeholder=" " required="" rows="4"></textarea>
<label className="absolute left-0 top-3 text-neutral-400 text-base transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-black peer-valid:-top-4 peer-valid:text-xs peer-valid:text-black pointer-events-none" htmlFor="message">System Specifications / Details</label>
</div>
<button className="w-full py-4 bg-black text-white rounded-full text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors magnetic-btn flex justify-center items-center gap-2" type="submit">
                            Initialize Project
                            <iconify-icon icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-8 px-6 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-400 font-medium tracking-wide">
<p>©  SR Development. System Architect.</p>
<p className="mt-2 sm:mt-0 flex items-center gap-1">Built with precision <iconify-icon className="text-black" icon="solar:cpu-bolt-linear"></iconify-icon></p>
</footer>



    </>
  );
}
