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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
},
colors: {
brand: {
pink: '#BE185D', // Deep Dark Pink (Pink-700 equivalent)
pinkHover: '#DB2777',
dark: '#0A0A0A',
surface: '#121212',
border: '#27272a', // Zinc 800
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: 0, transform: 'translateY(20px)' },
'100%': { opacity: 1, transform: 'translateY(0)' },
}
}
}
}
}



    document.addEventListener('DOMContentLoaded', () => {
        // Initialize ParticlesJS
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });

        const sections = document.querySelectorAll('.section');
        const dots = document.querySelectorAll('.progress-dot');
        const magneticElements = document.querySelectorAll('.magnetic');
        let currentIndex = 0;
        let isScrolling = false;
        let touchStartY = 0;
        
        // Initialize
        updateActiveDot(currentIndex);
        
        // Magnetic effect
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0px, 0px)';
            });
        });
        
        // Scroll event
        window.addEventListener('wheel', (e) => {
            if (isScrolling) return;
            
            isScrolling = true;
            if (e.deltaY > 0) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Touch events
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (isScrolling) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            isScrolling = true;
            if (diff > 50) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else if (diff < -50) {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Click on dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                currentIndex = index;
                changeSection(currentIndex);
            });
        });
        
        function changeSection(index) {
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            sections[index].classList.add('active');
            updateActiveDot(index);
            
            const reveals = sections[index].querySelectorAll('.reveal');
            reveals.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, i * 150);
            });
            
            sections.forEach((section, i) => {
                if (i !== index) {
                    const otherReveals = section.querySelectorAll('.reveal');
                    otherReveals.forEach(el => {
                        el.classList.remove('active');
                    });
                }
            });
        }
        
        function updateActiveDot(index) {
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[index].classList.add('active');
        }
    });



        // Lucide Icons
        lucide.createIcons();

        // Scroll Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
        });

        // Instructor Card Spotlight Effect
        const instructorCard = document.getElementById('instructor-card');
        if (instructorCard) {
            instructorCard.addEventListener('mousemove', (e) => {
                const rect = instructorCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                instructorCard.style.setProperty('--x', `${x}px`);
                instructorCard.style.setProperty('--y', `${y}px`);
            });
        }
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 opacity-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute inset-0 -z-10" id="particles-js">


<canvas className="particles-js-canvas-el" height="1186" style={{width: '100%', height: '100%'}} width="2550"></canvas></div></div>

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full max-w-7xl mx-auto border-x border-white/[0.03]">
<div className="w-px h-full bg-white/[0.03] hidden md:block"></div>
<div className="w-px h-full bg-white/[0.03] hidden lg:block absolute left-1/4"></div>
<div className="w-px h-full bg-white/[0.03] hidden lg:block absolute right-1/4"></div>
</div>

<header className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/[0.05]" style={{}}>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="hover:opacity-80 transition-opacity text-2xl font-medium text-pink-50 tracking-tight font-montserrat" href="#">Tharwat UX</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400" style={{}}>
<a className="hover:text-white transition-colors" href="#learn" style={{}}>Curriculum</a>
<a className="hover:text-white transition-colors" href="#practice" style={{}}>Mentorship</a>
<a className="hover:text-white transition-colors" href="#reviews" style={{}}>Reviews</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-white/10 text-white text-xs font-medium hover:border-brand-pink/50 hover:bg-zinc-800 transition-all group" href="https://wa.me/1234567890" style={{}}>
<span className="">Book a Call</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform text-brand-pink iconify--ph" data-icon="ph:arrow-right" data-width="16" height="16" role="img" style={{}} viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32" fill="currentColor"></path></svg>
</a>
<button className="md:hidden text-white" style={{}}>
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>
<main className="relative z-10 pt-20">

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">

<div className="orb-glow z-0 opacity-40 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-pink/20 blur-[120px] rounded-full animate-pulse-slow" style={{}}></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 reveal-on-scroll is-visible" style={{}}>
<span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" style={{}}></span>
<span className="text-xs uppercase tracking-widest text-zinc-300 font-medium" style={{}}>New Cohort Enrolling</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] reveal-on-scroll is-visible text-5xl font-light text-white tracking-tight font-serif mb-8" style={{}}>
                    Build real-world <br/>
<span className="text-brand-pink italic" style={{}}>UI/UX skills.</span> <br/>
                    Not just certificates.
                </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed mb-10 reveal-on-scroll is-visible" style={{}}>
                    Learn design by doing, not watching. A portfolio-driven ecosystem for designers ready to work with top agencies.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 reveal-on-scroll is-visible" style={{}}>
<a className="group relative px-8 py-4 bg-brand-pink rounded-full text-white font-medium text-sm transition-all hover:bg-brand-pinkHover overflow-hidden" href="https://wa.me/1234567890" style={{}}>
<span className="relative z-10 flex items-center gap-2">
                            Start your UI/UX journey
                            <svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:whatsapp-logo" data-width="18" height="18" role="img" viewbox="0 0 256 256" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m187.58 144.84l-32-16a8 8 0 0 0-8 .5l-14.69 9.8a40.55 40.55 0 0 1-16-16l9.8-14.69a8 8 0 0 0 .5-8l-16-32A8 8 0 0 0 104 64a40 40 0 0 0-40 40a88.1 88.1 0 0 0 88 88a40 40 0 0 0 40-40a8 8 0 0 0-4.42-7.16M152 176a72.08 72.08 0 0 1-72-72a24 24 0 0 1 19.29-23.54l11.48 23L101 118a8 8 0 0 0-.73 7.51a56.47 56.47 0 0 0 30.15 30.15A8 8 0 0 0 138 155l14.61-9.74l23 11.48A24 24 0 0 1 152 176M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216" fill="currentColor"></path></svg>
</span>
<div className="absolute inset-0 border border-white/20 rounded-full group-hover:scale-105 transition-transform duration-500"></div>
</a>
<a className="px-8 py-4 text-zinc-300 hover:text-white font-medium text-sm transition-colors border-b border-transparent hover:border-zinc-700" href="#curriculum" style={{}}>
                        View Curriculum
                    </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--ph" data-icon="ph:arrow-down-thin" data-width="32" height="32" role="img" style={{}} viewbox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m202.83 146.83l-72 72a4 4 0 0 1-5.66 0l-72-72a4 4 0 0 1 5.66-5.66L124 206.34V40a4 4 0 0 1 8 0v166.34l65.17-65.17a4 4 0 0 1 5.66 5.66" fill="currentColor"></path></svg>
</div>
</section>

<section className="py-24 md:py-32 border-y border-white/[0.05] bg-[#080808]" id="learn" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">

<div className="group md:px-8 md:border-r border-white/[0.05] reveal-on-scroll" style={{}}>
<span className="block text-brand-pink font-serif text-3xl mb-6 opacity-80" style={{}}>01 / Learn</span>
<h3 className="text-2xl text-white font-serif mb-4 tracking-tight" style={{}}>Structured Paths</h3>
<p className="text-zinc-400 leading-relaxed font-light" style={{}}>
                            Master Figma, design systems, and user research through a rigorous, agency-grade curriculum designed by industry leads.
                        </p>
</div>

<div className="group md:px-8 md:border-r border-white/[0.05] reveal-on-scroll" style={{}}>
<span className="block text-brand-pink font-serif text-3xl mb-6 opacity-80" style={{}}>02 / Practice</span>
<h3 className="text-2xl text-white font-serif mb-4 tracking-tight" style={{}}>Real Projects</h3>
<p className="text-zinc-400 leading-relaxed font-light" style={{}}>
                            Forget theoretical redesigns. Work on live briefs and case studies that mimic actual product team environments.
                        </p>
</div>

<div className="group md:px-8 reveal-on-scroll" style={{}}>
<span className="block text-brand-pink font-serif text-3xl mb-6 opacity-80" style={{}}>03 / Build</span>
<h3 className="text-2xl text-white font-serif mb-4 tracking-tight" style={{}}>Portfolio Ready</h3>
<p className="text-zinc-400 leading-relaxed font-light" style={{}}>
                            Construct a portfolio that hiring managers actually want to see. High fidelity, deep process, and clear outcomes.
                        </p>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight" style={{}}>
                            Design is a craft.
                            <span className="text-zinc-500" style={{}}>We treat it that way.</span>
</h2>
<p className="text-lg text-zinc-400 mb-8 font-light" style={{}}>
                            Most courses focus on tools. Assets focuses on thinking, problem-solving, and execution. Join a community of serious designers.
                        </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-brand-pink mt-1 iconify--ph" data-icon="ph:check-circle" data-width="20" height="20" role="img" style={{}} viewbox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88" fill="currentColor"></path></svg>
<span className="text-zinc-300" style={{}}>1-on-1 expert mentor feedback</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-brand-pink mt-1 iconify--ph" data-icon="ph:check-circle" data-width="20" height="20" role="img" style={{}} viewbox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88" fill="currentColor"></path></svg>
<span className="text-zinc-300" style={{}}>Weekly live design critiques</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-brand-pink mt-1 iconify--ph" data-icon="ph:check-circle" data-width="20" height="20" role="img" style={{}} viewbox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88" fill="currentColor"></path></svg>
<span className="text-zinc-300" style={{}}>Career coaching &amp; interview prep</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-brand-pink hover:text-white transition-colors border-b border-brand-pink/30 hover:border-white pb-1" href="https://wa.me/1234567890" style={{}}>
                            Talk to admissions on WhatsApp
                            <svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32" fill="currentColor"></path></svg>
</a>
</div>

<div className="relative h-[500px] w-full bg-zinc-900/30 border border-white/10 rounded-xl overflow-hidden reveal-on-scroll" style={{}}>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" style={{}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-white/5 bg-[#0A0A0A] rounded-lg shadow-2xl p-6 flex flex-col gap-4" style={{}}>
<div className="flex gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-zinc-800" style={{}}></div>
<div className="w-3 h-3 rounded-full bg-zinc-800" style={{}}></div>
</div>
<div className="animate-pulse bg-center bg-zinc-900/50 h-32 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb86a27e-2abf-416a-be85-e2e55bff34ef_800w.webp)] bg-cover border-white/5 border rounded"></div>
<div className="flex gap-4">
<div className="bg-center bg-zinc-900/50 w-1/3 h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/653b29a9-14da-4072-a6ad-e51355547c3b_320w.webp)] bg-cover border-white/5 border rounded" style={{}}></div>
<div className="bg-center bg-zinc-900/50 w-2/3 h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/851c15b8-73a2-471d-93c9-a2661ea2b719_800w.webp)] bg-cover border-white/5 border rounded" style={{}}></div>
</div>
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-pink/20 blur-[50px] rounded-full" style={{}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/[0.05] bg-center bg-[#080808] pt-32 pb-32" id="reviews">
<div className="bg-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="reveal-on-scroll text-center mb-16">
<h2 className="md:text-4xl text-3xl text-white tracking-tight font-serif mb-4" style={{}}>Outcomes, not just output.</h2>
<p className="text-zinc-400" style={{}}>Join designers now working at top tech companies.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 bg-zinc-900/20 border border-white/5 rounded-xl hover:border-brand-pink/30 transition-colors reveal-on-scroll" style={{}}>
<div className="flex items-center gap-1 text-brand-pink mb-4" style={{}}>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:star-fill" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:star-fill" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:star-fill" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:star-fill" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:star-fill" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" fill="currentColor"></path></svg>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6" style={{}}>
                            "The focus on portfolio building is unmatched. Assets helped me transition from marketing to UI/UX in 4 months. The mentorship was critical."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-serif text-white" style={{}}>SA</div>
<div className="">
<p className="text-white text-sm font-medium" style={{}}>Sarah A.</p>
<p className="text-zinc-500 text-xs" style={{}}>Product Designer @ Fintech</p>
</div>
</div>
</div>

<div className="p-8 bg-zinc-900/20 border border-white/5 rounded-xl hover:border-brand-pink/30 transition-colors reveal-on-scroll" style={{}}>
<div className="flex items-center gap-1 text-brand-pink mb-4" style={{}}>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:star-fill" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:star-fill" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:star-fill" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:star-fill" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:star-fill" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" fill="currentColor"></path></svg>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6" style={{}}>
                            "Finally a course that teaches how agencies actually work. No fluff, just hard skills and real critiques. My portfolio quality tripled."
                        </p>
<div className="flex items-center gap-3">
<div className="flex text-xs text-white font-serif bg-zinc-800 w-10 h-10 rounded-full items-center justify-center" style={{}}>MA</div>
<div className="">
<p className="text-white text-sm font-medium" style={{}}>Marcus J.</p>
<p className="text-zinc-500 text-xs" style={{}}>Freelance UI Designer</p>
</div>
</div>
</div>

<div className="p-8 bg-zinc-900/20 border border-white/5 rounded-xl hover:border-brand-pink/30 transition-colors reveal-on-scroll" style={{}}>
<div className="flex items-center gap-1 text-brand-pink mb-4" style={{}}>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:star-fill" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:star-fill" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:star-fill" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:star-fill" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:star-fill" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" fill="currentColor"></path></svg>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6" style={{}}>
                            "The community is incredible. Being able to ask questions and get answers from senior designers instantly changed my learning curve."
                        </p>
<div className="flex items-center gap-3">
<div className="flex text-xs text-white font-serif bg-zinc-800 w-10 h-10 rounded-full items-center justify-center" style={{}}>M</div>
<div className="">
<p className="text-sm font-medium text-white" style={{}}>Manar</p>
<p className="text-zinc-500 text-xs" style={{}}>Jr. UX Researcher</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 border-white/[0.05] border-t pt-24 pb-24 relative" style={{}}>
<div className="max-w-4xl mx-auto px-6">

<div className="group relative rounded-2xl bg-zinc-900 border border-white/5 p-[1px] overflow-hidden reveal-on-scroll" id="instructor-card" style={{'--x': '378px', '--y': '354.48748779296875px'}}>

<div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500" style={{background: 'radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), rgba(190, 24, 93, 0.4), transparent 40%)'}}>
</div>

<div className="md:p-12 overflow-hidden bg-zinc-950 w-full h-full rounded-2xl px-8 py-8 relative">

<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-pink/5 blur-[80px] rounded-full pointer-events-none" style={{}}></div>
<div className="z-10 flex flex-col md:flex-row gap-10 md:gap-16 relative gap-x-10 gap-y-10 items-center">

<div className="relative shrink-0 reveal-on-scroll">
<div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl relative z-10">
<img alt="Ahmed Tharwat" className="group-hover:grayscale-0 transition-all duration-700 ease-out w-full h-full object-auto rounded-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32ccd325-8500-4a0d-8b3e-38d147775af3_320w.png"/>
</div>

<div className="absolute inset-0 bg-brand-pink/20 blur-[50px] rounded-full -z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-700" style={{}}></div>
</div>

<div className="text-center md:text-left reveal-on-scroll delay-100">
<h3 className="text-brand-pink text-xs font-bold tracking-widest uppercase mb-3" style={{}}>Instructor</h3>
<h2 className="text-3xl md:text-4xl font-serif text-white mb-2 tracking-tight" style={{}}>Ahmed Tharwat</h2>
<p className="text-zinc-400 font-medium mb-6" style={{}}>UI / UX Designer</p>
<p className="text-zinc-300 leading-relaxed font-light mb-8 max-w-lg mx-auto md:mx-0" style={{}}>
                                    "Ahmed Tharwat is a UI/UX designer focused on practical learning. He has helped students build real portfolios and transition into design careers through hands-on projects and structured mentorship."
                                </p>
<div className="inline-flex gap-2 hover:bg-white/10 transition-colors text-xs font-medium text-zinc-300 bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" style={{}}></span>
                                    3+ years teaching experience
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-32 pb-32 relative">

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-t from-brand-pink/10 to-transparent blur-[100px] pointer-events-none" style={{}}></div>
<div className="max-w-2xl mx-auto px-6 relative z-10">
<div className="text-center mb-12 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-4" style={{}}>Apply for the next cohort</h2>
<p className="text-zinc-400" style={{}}>Limited spots available. Start your conversation with us.</p>
</div>
<form className="reveal-on-scroll bg-zinc-900/30 border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-md space-y-6">
<div className="">
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2" style={{}}>Full Name</label>
<input className="focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all placeholder:text-zinc-700 text-white bg-[#0A0A0A] w-full border-zinc-800 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Jane Doe" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="">
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2" style={{}}>Phone Number</label>
<input className="focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all placeholder:text-zinc-700 text-white bg-[#0A0A0A] w-full border-zinc-800 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div className="">
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2" style={{}}>Country</label>
<div className="relative">
<select className="w-full bg-[#0A0A0A] border border-zinc-800 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all" style={{}}>
<option>Select Country</option>
<option>United States</option>
<option>United Kingdom</option>
<option>Canada</option>
<option>Germany</option>
<option>India</option>
<option>Other</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" style={{}}>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:caret-down" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32" fill="currentColor"></path></svg>
</div>
</div>
</div>
</div>
<div className="pt-4">
<a className="block w-full text-center bg-brand-pink hover:bg-brand-pinkHover text-white font-medium py-4 rounded-full transition-all hover:shadow-[0_0_20px_-5px_rgba(190,24,93,0.5)]" href="https://wa.me/1234567890" style={{}}>
                            Start Application on WhatsApp
                        </a>
<p className="text-center text-xs text-zinc-600 mt-4" style={{}}>By clicking, you agree to start a chat with our admissions team.</p>
</div>
</form>
</div>
</section>
</main>

<footer className="bg-[#020202] border-t border-white/5 pt-16 pb-8" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1">
<a className="block text-2xl text-white tracking-tight font-serif mb-6" href="#" style={{}}>Tharwat UX</a>
<p className="leading-relaxed text-sm text-zinc-500 mb-6" style={{}}>Tharwat UX is a UI/UX learning platform focused on real skills and real portfolios. Built for the modern designer.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-brand-pink transition-colors" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:linkedin-logo" data-width="24" height="24" role="img" viewbox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H40V40h176zM96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m88 28v36a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140m-84-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12" fill="currentColor"></path></svg>
</a>
<a className="text-zinc-400 hover:text-brand-pink transition-colors" href="https://wa.me/1234567890" style={{}}>
<svg aria-hidden="true" className="iconify iconify--ph" data-icon="ph:whatsapp-logo" data-width="24" height="24" role="img" viewbox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m187.58 144.84l-32-16a8 8 0 0 0-8 .5l-14.69 9.8a40.55 40.55 0 0 1-16-16l9.8-14.69a8 8 0 0 0 .5-8l-16-32A8 8 0 0 0 104 64a40 40 0 0 0-40 40a88.1 88.1 0 0 0 88 88a40 40 0 0 0 40-40a8 8 0 0 0-4.42-7.16M152 176a72.08 72.08 0 0 1-72-72a24 24 0 0 1 19.29-23.54l11.48 23L101 118a8 8 0 0 0-.73 7.51a56.47 56.47 0 0 0 30.15 30.15A8 8 0 0 0 138 155l14.61-9.74l23 11.48A24 24 0 0 1 152 176M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216" fill="currentColor"></path></svg>
</a>
</div>
</div>

<div className="">
<h4 className="text-white font-medium mb-6 text-sm" style={{}}>Learning</h4>
<ul className="space-y-3 text-sm text-zinc-500" style={{}}>
<li className=""><a className="hover:text-brand-pink transition-colors" href="#" style={{}}>Courses</a></li>
<li className=""><a className="hover:text-brand-pink transition-colors" href="#" style={{}}>Learning Paths</a></li>
<li className=""><a className="hover:text-brand-pink transition-colors" href="#" style={{}}>Mentorship</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-6 text-sm" style={{}}>Company</h4>
<ul className="space-y-3 text-sm text-zinc-500" style={{}}>
<li className=""><a className="hover:text-brand-pink transition-colors" href="#" style={{}}>About Assets</a></li>
<li className=""><a className="hover:text-brand-pink transition-colors" href="#" style={{}}>Careers</a></li>
<li className=""><a className="hover:text-brand-pink transition-colors" href="#" style={{}}>Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-6 text-sm" style={{}}>Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500" style={{}}>
<li className=""><a className="hover:text-brand-pink transition-colors" href="#" style={{}}>Privacy Policy</a></li>
<li className=""><a className="hover:text-brand-pink transition-colors" href="#" style={{}}>Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{}}>
<p className="text-xs text-zinc-600" style={{}}>© 2026 Tharwat UX. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500" style={{}}></span>
<span className="text-xs text-zinc-500" style={{}}>Systems Operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
