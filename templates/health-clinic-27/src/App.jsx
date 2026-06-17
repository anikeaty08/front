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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0fdfa',
100: '#ccfbf1',
200: '#99f6e4',
300: '#5eead4',
400: '#2dd4bf',
500: '#14b8a6', // Primary Teal
600: '#0d9488',
700: '#0f766e',
800: '#115e59',
900: '#134e4a',
},
slate: {
850: '#1e293b',
900: '#0f172a',
}
},
animation: {
'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-in-right': 'slideInRight 0.5s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(30px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
slideInRight: {
'0%': { opacity: '0', transform: 'translateX(20px)' },
'100%': { opacity: '1', transform: 'translateX(0)' },
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 0 20px -5px rgba(20, 184, 166, 0.3)',
}
}
}
}



        // --- DATA ---
        const treatmentContents = {
            '/treatments/laser-enhanced-spinal-decompression': {
                title: "Laser Enhanced Spinal Decompression",
                img: "https://i.postimg.cc/wTqC5C5f/5ee8d12ffb5add7c3bb5ce324ea88006605c8191.jpg",
                content: `
                    <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">Who Is It For?</h2>
                    <p class="mb-4 text-slate-600 leading-relaxed text-lg font-light">Laser Enhanced Spinal Decompression (LESD) is ideal for individuals suffering from persistent spine-related pain. Recommended for:</p>
                    <ul class="space-y-4 mb-10">
                        <li class="flex items-start gap-4"><span class="w-2 h-2 rounded-full bg-brand-500 mt-2.5"></span><span class="text-slate-700">Herniated or bulging spinal discs</span></li>
                        <li class="flex items-start gap-4"><span class="w-2 h-2 rounded-full bg-brand-500 mt-2.5"></span><span class="text-slate-700">Degenerative disc disease or arthritis</span></li>
                        <li class="flex items-start gap-4"><span class="w-2 h-2 rounded-full bg-brand-500 mt-2.5"></span><span class="text-slate-700">Sciatica or pinched nerves</span></li>
                        <li class="flex items-start gap-4"><span class="w-2 h-2 rounded-full bg-brand-500 mt-2.5"></span><span class="text-slate-700">Post-surgical pain</span></li>
                    </ul>

                    <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-8 tracking-tight">Key Benefits</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow"><strong class="block text-slate-900 text-lg mb-2">Avoid Surgery</strong>Safe, non-invasive alternative to surgery.</div>
                        <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow"><strong class="block text-slate-900 text-lg mb-2">Root Cause</strong>Targets the source of pain for lasting relief.</div>
                        <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow"><strong class="block text-slate-900 text-lg mb-2">High Success</strong>Proven effective for chronic conditions.</div>
                        <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow"><strong class="block text-slate-900 text-lg mb-2">Healing</strong>Promotes natural cellular repair.</div>
                    </div>

                    <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">How It Works</h2>
                    <p class="mb-6 text-slate-600 leading-relaxed text-lg font-light"><strong>Spinal Decompression:</strong> You’ll lie comfortably on a specialized motorized table. The device gently stretches and relaxes your spine in cycles, creating a vacuum effect inside the discs to retract bulging material.</p>
                    <p class="mb-6 text-slate-600 leading-relaxed text-lg font-light"><strong>Laser Therapy:</strong> Simultaneously, advanced low-level laser therapy stimulates cells at the injury site to boost energy and reduce inflammation. The two therapies work together to repair damaged discs.</p>
                `
            },
            '/treatments/prescription-orthotics': {
                title: "Prescription Orthotics",
                img: "https://i.postimg.cc/QMchtRrD/shoe-insole-1393065551.webp",
                content: `
                    <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">Overview</h2>
                    <p class="mb-8 text-slate-600 leading-relaxed text-lg font-light">Beneficial for anyone experiencing foot-related pain or imbalance, including chronic foot/heel pain, discomfort with prolonged standing, or instability.</p>
                    <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">Benefits</h2>
                    <ul class="space-y-4 mb-10 text-slate-600">
                        <li class="flex items-start gap-4"><span class="w-2 h-2 rounded-full bg-brand-500 mt-2.5"></span><span>Relieves Foot Pain & Plantar Fasciitis</span></li>
                        <li class="flex items-start gap-4"><span class="w-2 h-2 rounded-full bg-brand-500 mt-2.5"></span><span>Corrects alignment for knees and hips</span></li>
                        <li class="flex items-start gap-4"><span class="w-2 h-2 rounded-full bg-brand-500 mt-2.5"></span><span>Custom crafted for your specific gait</span></li>
                    </ul>
                `
            },
            '/treatments/wellness-care': { title: "Wellness Care", img: "https://i.postimg.cc/BnWz6tZc/istockphoto-1477970026-612x612.jpg", content: "<p class='text-lg text-slate-600 mt-10 leading-relaxed font-light'>For anyone wanting to maintain health and prevent future problems. Regular check-ups allow us to evaluate your spine and correct minor issues before they become painful.</p>" },
            '/treatments/sports-injury-care': { title: "Sports Injury Care", img: "https://i.postimg.cc/bN05ZpZ0/bigstock-Physical-Therapist-Applying-Ki-440957804.avif", content: "<p class='text-lg text-slate-600 mt-10 leading-relaxed font-light'>Fast relief and recovery for athletes. Advanced therapies reduce pain and inflammation quickly, helping you return to sport stronger.</p>" },
            '/treatments/orthopedic-massage': { title: "Orthopedic Massage", img: "https://i.postimg.cc/DzS5PTzF/deep-tissue-massage-on-back.jpg", content: "<p class='text-lg text-slate-600 mt-10 leading-relaxed font-light'>Ideal for muscle pain, tension, and scar tissue. Sessions involve focused deep-tissue techniques targeted to your problem areas.</p>" },
            '/treatments/far-infrared-therapy': { title: "Far Infrared Therapy", img: "https://i.postimg.cc/Xv9BbHHc/infrared-therapy-lamp-1024x683.jpg", content: "<p class='text-lg text-slate-600 mt-10 leading-relaxed font-light'>Natural pain relief using soothing heat that penetrates deep into tissues to boost cellular repair and blood flow.</p>" },
            '/treatments/trigger-point-therapy': { title: "Trigger Point Therapy", img: "https://i.postimg.cc/9XgMvHmJ/massage-389716.webp", content: "<p class='text-lg text-slate-600 mt-10 leading-relaxed font-light'>Targets exact knots causing discomfort. Pressure is applied to release tension and restore normal muscle function.</p>" }
        };

        const testimonials = [
            { 
                name: "Alan Teahan", 
                quote: "I had lower back pain for years and had seen other chiropractors and physios with no real relief. Dr Clifford diagnosed me quickly and recommended an intensive course of treatment. I’ve now completed it and, for the first time in years, I’m totally pain free. Would highly recommend."
            },
            { 
                name: "Rach H", 
                quote: "I came to Haven with a bulging disc and severe sciatic pain. I was seen straight away in an emergency and felt relief after the very first visit. With regular adjustments and decompression therapy I’m now really starting to heal. Both Dr Clifford and Deirdre on reception have gone above and beyond – I would highly recommend."
            },
            { 
                name: "Marie", 
                quote: "I had serious back and neck pain and couldn’t get relief from my GP. I specifically wanted an American-trained chiropractic doctor and Dr Clifford is simply the best I’ve been to. The decompression, laser, adjustments and exercise plan have literally changed my life – I never thought I could feel or walk this well again. I even sleep better. I can’t recommend Dr Clifford and his clinic highly enough."
            },
            { 
                name: "Daniel", 
                quote: "I’d been dealing with extremely painful sciatic nerve pain for over half a year and tried stretching, heat, massage and acupuncture with no success. After only 4–5 sessions here I’m already feeling significantly better. The clinic is very modern and Dr Clifford immediately diagnosed the issue and put me at ease. I now feel confident I’ll make a full recovery. Highly recommend."
            },
            { 
                name: "Gapsa Radu", 
                quote: "After 6 months of sore lower back I started going to Dr Clifford and within four weeks I was pain free. A year later I’m still in perfect condition. I’ve now brought my mother with a disc bulge and she already feels better after a few weeks. The clinic is spotless, the atmosphere is great and the staff are very kind and helpful. Dr Clifford’s experience speaks for itself."
            }
        ];

        const conditionsData = [
            { category: "Headaches & Face", items: ["Headaches", "Migraine", "TMJ", "Sinus Headaches", "Tension"] },
            { category: "Neck", items: ["Neck Pain", "Whiplash", "Herniated Disc", "Pinched Nerve", "Stiffness"] },
            { category: "Back & Spine", items: ["Lower Back Pain", "Sciatica", "Herniated Disc", "Stenosis", "Scoliosis"] },
            { category: "Shoulder", items: ["Frozen Shoulder", "Rotator Cuff", "Impingement", "Bursitis"] },
            { category: "Hip & Leg", items: ["Hip Pain", "Sciatica", "Knee Pain", "Shin Splints", "Plantar Fasciitis"] },
            { category: "Nerve & Muscle", items: ["Neuropathy", "Fibromyalgia", "Muscle Spasm", "Chronic Fatigue"] }
        ];

        // --- APP STATE ---
        let currentTestimonialIndex = 0;
        let testimonialInterval;

        // --- CORE FUNCTIONS ---

        function initAnimations() {
            // Reveal on Scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
        }

        function router(e, path) {
            e.preventDefault();
            window.history.pushState({}, "", path);
            handleRoute(path);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function handleRoute(path) {
            const app = document.getElementById('app');
            
            // Handle Treatment Pages
            if (path.startsWith('/treatments/')) {
                const data = treatmentContents[path];
                if (data) {
                    app.innerHTML = `
                        <section class="max-w-4xl mx-auto px-4 py-32 md:py-40 opacity-0 animate-fade-in">
                            <span class="text-brand-600 font-bold uppercase tracking-widest text-xs mb-4 block">Treatment</span>
                            <h1 class="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-10">${data.title}</h1>
                            <div class="w-full aspect-video rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl">
                                <img src="${data.img}" alt="${data.title}" class="w-full h-full object-cover">
                            </div>
                            <div class="prose prose-lg prose-slate max-w-none text-slate-600">
                                ${data.content}
                            </div>
                            <div class="mt-20 p-12 bg-brand-50 rounded-[2.5rem] text-center border border-brand-100">
                                <h3 class="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Ready to find relief?</h3>
                                <p class="mb-8 text-slate-600 text-lg">Book your appointment today to start your path to healing.</p>
                                <a href="/contact" onclick="router(event, '/contact')" class="btn-interaction inline-block bg-brand-600 text-white px-10 py-4 rounded-full text-base font-semibold shadow-xl shadow-brand-500/20 cursor-pointer">Book Appointment</a>
                            </div>
                        </section>
                    `;
                    initAnimations();
                    lucide.createIcons();
                    stopTestimonialTimer();
                    return;
                }
            }

            // Handle Standard Pages
            let templateId = 'page-home';
            if (path === '/about') templateId = 'page-about';
            if (path === '/meet-the-doctor') templateId = 'page-meet-doctor';
            if (path === '/conditions') templateId = 'page-conditions';
            if (path === '/contact') templateId = 'page-contact';

            const template = document.getElementById(templateId);
            if (template) {
                app.innerHTML = template.innerHTML;
                
                if (path === '/') {
                    currentTestimonialIndex = 0; // Reset to first
                    renderTestimonial();
                    startTestimonialTimer();
                } else {
                    stopTestimonialTimer();
                }

                if (path === '/conditions') renderAccordion();
                
                initAnimations();
                lucide.createIcons();
            }
        }

        // --- COMPONENTS ---

        function renderAccordion() {
            const container = document.getElementById('accordion-container');
            if (!container) return;
            
            container.innerHTML = conditionsData.map((cat, index) => `
                <div class="premium-card bg-slate-50 border border-slate-100/50 rounded-3xl overflow-hidden mb-5 hover:bg-white hover:shadow-md transition-all">
                    <button onclick="toggleAccordion(${index})" class="w-full flex justify-between items-center py-6 px-8 text-left focus:outline-none group cursor-pointer">
                        <span class="text-xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors">${cat.category}</span>
                        <div class="p-3 bg-white rounded-full shadow-sm group-hover:bg-brand-50 transition-colors">
                            <i data-lucide="chevron-down" class="w-5 h-5 text-slate-500 group-hover:text-brand-600 transform transition-transform duration-300" id="icon-${index}"></i>
                        </div>
                    </button>
                    <div id="content-${index}" class="accordion-content">
                        <div class="accordion-inner px-8 pb-8 pt-2">
                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                ${cat.items.map(item => `<li class="flex items-center gap-3 text-slate-600 font-medium"><i data-lucide="check-circle" class="w-5 h-5 text-brand-400"></i>${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }

        function toggleAccordion(index) {
            const content = document.getElementById(`content-${index}`);
            const icon = document.getElementById(`icon-${index}`);
            const isOpen = content.classList.contains('active');

            document.querySelectorAll('.accordion-content').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('[id^="icon-"]').forEach(el => el.style.transform = 'rotate(0deg)');

            if (!isOpen) {
                content.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
            }
        }

        // Testimonial Logic
        function renderTestimonial() {
            const container = document.getElementById('testimonial-container');
            const dotsContainer = document.getElementById('testimonial-dots');
            
            if(!container) return;
            
            const t = testimonials[currentTestimonialIndex];
            
            // Render Content
            container.classList.remove('testimonial-fade');
            void container.offsetWidth; // Trigger reflow
            container.classList.add('testimonial-fade');

            container.innerHTML = `
                <div class="flex flex-col items-center">
                    <div class="flex text-yellow-400 gap-1.5 mb-8">
                        ${Array(5).fill('<i data-lucide="star" class="w-5 h-5 fill-current"></i>').join('')}
                    </div>
                    <p class="text-xl md:text-2xl font-light text-slate-800 leading-relaxed mb-10 text-center italic">"${t.quote}"</p>
                    <div class="flex items-center gap-4">
                        <span class="font-bold text-slate-900 text-lg">&mdash; ${t.name}</span>
                    </div>
                </div>
            `;
            
            // Render Dots
            if(dotsContainer) {
                dotsContainer.innerHTML = testimonials.map((_, idx) => `
                    <button onclick="goToTestimonial(${idx})" class="dot h-2 rounded-full cursor-pointer ${idx === currentTestimonialIndex ? 'active w-6 bg-brand-600' : 'w-2 bg-slate-300 hover:bg-brand-300'}"></button>
                `).join('');
            }

            lucide.createIcons();
            
            // Pause on hover
            container.onmouseenter = stopTestimonialTimer;
            container.onmouseleave = startTestimonialTimer;
        }

        function nextTestimonial() {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            renderTestimonial();
        }

        function goToTestimonial(index) {
            currentTestimonialIndex = index;
            renderTestimonial();
            resetTestimonialTimer();
        }

        function startTestimonialTimer() {
            stopTestimonialTimer();
            testimonialInterval = setInterval(nextTestimonial, 7000); // 7 seconds
        }

        function stopTestimonialTimer() {
            clearInterval(testimonialInterval);
        }
        
        function resetTestimonialTimer() {
            stopTestimonialTimer();
            startTestimonialTimer();
        }

        // Navigation & UI
        function toggleMobileMenu() {
            const sidebar = document.getElementById('mobile-menu-sidebar');
            const overlay = document.getElementById('mobile-menu-overlay');
            const iconMenu = document.getElementById('menu-icon');
            const iconClose = document.getElementById('close-icon');
            
            const isOpen = !sidebar.classList.contains('translate-x-full');
            
            if (isOpen) {
                sidebar.classList.add('translate-x-full');
                overlay.classList.add('opacity-0', 'invisible');
                iconMenu.style.opacity = '1';
                iconMenu.style.transform = 'scale(1)';
                iconClose.style.opacity = '0';
                iconClose.style.transform = 'scale(0.75)';
                document.body.style.overflow = '';
            } else {
                sidebar.classList.remove('translate-x-full');
                overlay.classList.remove('opacity-0', 'invisible');
                iconMenu.style.opacity = '0';
                iconMenu.style.transform = 'scale(0.75)';
                iconClose.style.opacity = '1';
                iconClose.style.transform = 'scale(1)';
                document.body.style.overflow = 'hidden';
            }
        }

        // SCROLL LISTENERS (Header & Progress)
        window.addEventListener('scroll', () => {
            // Header
            const header = document.getElementById('main-header');
            if (window.scrollY > 20) {
                header.classList.add('header-solid');
                header.classList.remove('header-transparent');
            } else {
                header.classList.remove('header-solid');
                header.classList.add('header-transparent');
            }

            // Progress Bar
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            const progressBar = document.getElementById("scroll-progress-bar");
            if(progressBar) progressBar.style.width = scrolled + "%";
        });

        // Init
        window.addEventListener('popstate', () => handleRoute(window.location.pathname));
        document.addEventListener('DOMContentLoaded', () => {
            // Initial route
            handleRoute(window.location.pathname);
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
      

<div id="scroll-progress-container">
<div id="scroll-progress-bar"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-transparent" id="main-header">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center transition-all duration-300">

<a className="flex-shrink-0 group relative z-50 cursor-pointer block" href="/" onclick="router(event, '/')">
<img alt="Haven Pain Relief Centre" className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" src="https://i.postimg.cc/15BqbSjW/Haven-Pain-Relief.png"/>
</a>

<nav className="hidden lg:flex items-center space-x-10">
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors tracking-wide cursor-pointer" href="/about" onclick="router(event, '/about')">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors tracking-wide cursor-pointer" href="/meet-the-doctor" onclick="router(event, '/meet-the-doctor')">Meet the Doctor</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors tracking-wide cursor-pointer" href="/conditions" onclick="router(event, '/conditions')">Conditions</a>

<div className="relative group h-full flex items-center">
<button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 group-hover:text-brand-600 transition-colors tracking-wide focus:outline-none py-2 cursor-pointer">
                            Treatments
                            <i className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" data-lucide="chevron-down"></i>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top w-80 z-50">
<div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-2 ring-1 ring-slate-900/5">
<div className="flex flex-col space-y-1">
<a className="block px-4 py-3 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700 rounded-xl transition-colors cursor-pointer" href="/treatments/laser-enhanced-spinal-decompression" onclick="router(event, '/treatments/laser-enhanced-spinal-decompression')">Spinal Decompression</a>
<a className="block px-4 py-3 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700 rounded-xl transition-colors cursor-pointer" href="/treatments/prescription-orthotics" onclick="router(event, '/treatments/prescription-orthotics')">Prescription Orthotics</a>
<a className="block px-4 py-3 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700 rounded-xl transition-colors cursor-pointer" href="/treatments/wellness-care" onclick="router(event, '/treatments/wellness-care')">Wellness Care</a>
<a className="block px-4 py-3 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700 rounded-xl transition-colors cursor-pointer" href="/treatments/sports-injury-care" onclick="router(event, '/treatments/sports-injury-care')">Sports Injury Care</a>
<a className="block px-4 py-3 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700 rounded-xl transition-colors cursor-pointer" href="/treatments/orthopedic-massage" onclick="router(event, '/treatments/orthopedic-massage')">Orthopedic Massage</a>
<a className="block px-4 py-3 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700 rounded-xl transition-colors cursor-pointer" href="/treatments/far-infrared-therapy" onclick="router(event, '/treatments/far-infrared-therapy')">Far Infrared Therapy</a>
<a className="block px-4 py-3 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700 rounded-xl transition-colors cursor-pointer" href="/treatments/trigger-point-therapy" onclick="router(event, '/treatments/trigger-point-therapy')">Trigger Point Therapy</a>
</div>
</div>
</div>
</div>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors tracking-wide cursor-pointer" href="/contact" onclick="router(event, '/contact')">Contact</a>
</nav>

<div className="hidden lg:flex items-center gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors flex items-center gap-2 cursor-pointer" href="tel:0214857669">
<i className="w-4 h-4" data-lucide="phone"></i> 021 4857669
                    </a>
<a className="btn-interaction bg-brand-600 text-white px-7 py-3 rounded-full text-sm font-semibold shadow-lg shadow-brand-500/20 cursor-pointer" href="/contact" onclick="router(event, '/contact')">
                        Book Now
                    </a>
</div>

<button className="lg:hidden relative z-50 w-12 h-12 flex items-center justify-center text-slate-800 hover:bg-slate-100 rounded-full transition-colors focus:outline-none cursor-pointer" onclick="toggleMobileMenu()">
<i className="w-6 h-6 transition-all duration-300" data-lucide="menu" id="menu-icon"></i>
<i className="w-6 h-6 absolute opacity-0 scale-75 transition-all duration-300" data-lucide="x" id="close-icon"></i>
</button>
</div>
</div>

<div className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 opacity-0 invisible transition-all duration-300 lg:hidden cursor-pointer" id="mobile-menu-overlay" onclick="toggleMobileMenu()"></div>

<div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-40 transform translate-x-full transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) shadow-2xl lg:hidden flex flex-col" id="mobile-menu-sidebar">
<div className="h-24 flex items-center px-8 border-b border-slate-100">
<span className="text-lg font-bold text-slate-900 tracking-tight">Menu</span>
</div>
<div className="flex-1 overflow-y-auto py-8 px-8 space-y-8">
<nav className="space-y-6">
<a className="block text-xl font-medium text-slate-900 hover:text-brand-600 cursor-pointer" href="/" onclick="router(event, '/'); toggleMobileMenu()">Home</a>
<a className="block text-xl font-medium text-slate-900 hover:text-brand-600 cursor-pointer" href="/about" onclick="router(event, '/about'); toggleMobileMenu()">About</a>
<a className="block text-xl font-medium text-slate-900 hover:text-brand-600 cursor-pointer" href="/meet-the-doctor" onclick="router(event, '/meet-the-doctor'); toggleMobileMenu()">Meet the Doctor</a>
<a className="block text-xl font-medium text-slate-900 hover:text-brand-600 cursor-pointer" href="/conditions" onclick="router(event, '/conditions'); toggleMobileMenu()">Conditions</a>
<div className="space-y-4 pt-4 border-t border-slate-100">
<span className="text-xs font-bold uppercase tracking-widest text-slate-400">Treatments</span>
<div className="pl-2 space-y-4">
<a className="block text-base text-slate-600 cursor-pointer" href="/treatments/laser-enhanced-spinal-decompression" onclick="router(event, '/treatments/laser-enhanced-spinal-decompression'); toggleMobileMenu()">Spinal Decompression</a>
<a className="block text-base text-slate-600 cursor-pointer" href="/treatments/prescription-orthotics" onclick="router(event, '/treatments/prescription-orthotics'); toggleMobileMenu()">Prescription Orthotics</a>
<a className="block text-base text-slate-600 cursor-pointer" href="/treatments/wellness-care" onclick="router(event, '/treatments/wellness-care'); toggleMobileMenu()">Wellness Care</a>
<a className="block text-base text-slate-600 cursor-pointer" href="/treatments/sports-injury-care" onclick="router(event, '/treatments/sports-injury-care'); toggleMobileMenu()">Sports Injury Care</a>
<a className="block text-base text-slate-600 cursor-pointer" href="/treatments/orthopedic-massage" onclick="router(event, '/treatments/orthopedic-massage'); toggleMobileMenu()">Orthopedic Massage</a>
<a className="block text-base text-slate-600 cursor-pointer" href="/treatments/far-infrared-therapy" onclick="router(event, '/treatments/far-infrared-therapy'); toggleMobileMenu()">Far Infrared Therapy</a>
<a className="block text-base text-slate-600 cursor-pointer" href="/treatments/trigger-point-therapy" onclick="router(event, '/treatments/trigger-point-therapy'); toggleMobileMenu()">Trigger Point Therapy</a>
</div>
</div>
<a className="block text-xl font-medium text-slate-900 hover:text-brand-600 pt-4 border-t border-slate-100 cursor-pointer" href="/contact" onclick="router(event, '/contact'); toggleMobileMenu()">Contact</a>
</nav>
</div>
<div className="p-8 border-t border-slate-100 bg-slate-50">
<a className="flex items-center justify-center w-full bg-brand-600 text-white py-4 rounded-full text-base font-semibold shadow-md active:scale-95 transition-transform cursor-pointer" href="/contact" onclick="router(event, '/contact'); toggleMobileMenu()">
                    Book Now
                </a>
</div>
</div>
</header>

<main className="flex-grow" id="app">

</main>

<footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">

<div className="space-y-6">
<h3 className="font-bold text-slate-900 text-lg tracking-tight">Haven Pain Relief Centre</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Leading drug-free pain relief in Cork. Dedicated to helping you live a life without limits through advanced, personalized care.</p>
<address className="text-sm text-slate-600 not-italic leading-relaxed">
                        Galways Lane<br/>
                        Douglas, Co. Cork<br/>
                        Ireland
                    </address>
</div>

<div className="space-y-6">
<h3 className="font-bold text-slate-900 text-lg tracking-tight">Contact</h3>
<div className="flex flex-col space-y-4">
<a className="text-sm text-slate-600 hover:text-brand-600 transition-colors flex items-center gap-3" href="tel:0214857669">
<i className="w-4 h-4 text-brand-500" data-lucide="phone"></i> 021 4857669
                        </a>
<a className="text-sm text-slate-600 hover:text-brand-600 transition-colors flex items-center gap-3" href="mailto:info@havenpainrelief.ie">
<i className="w-4 h-4 text-brand-500" data-lucide="mail"></i> info@havenpainrelief.ie
                        </a>
<a className="text-sm font-semibold text-brand-600 hover:text-brand-700 mt-2 inline-flex items-center gap-1 group cursor-pointer" href="/contact" onclick="router(event, '/contact')">
                            Book your appointment <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="space-y-6">
<h3 className="font-bold text-slate-900 text-lg tracking-tight">Quick Links</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-600 hover:text-brand-600 transition-colors cursor-pointer" href="/" onclick="router(event, '/')">Home</a></li>
<li><a className="text-sm text-slate-600 hover:text-brand-600 transition-colors cursor-pointer" href="/about" onclick="router(event, '/about')">About</a></li>
<li><a className="text-sm text-slate-600 hover:text-brand-600 transition-colors cursor-pointer" href="/meet-the-doctor" onclick="router(event, '/meet-the-doctor')">Meet the Doctor</a></li>
<li><a className="text-sm text-slate-600 hover:text-brand-600 transition-colors cursor-pointer" href="/conditions" onclick="router(event, '/conditions')">Conditions</a></li>
<li><a className="text-sm text-slate-600 hover:text-brand-600 transition-colors cursor-pointer" href="/contact" onclick="router(event, '/contact')">Contact</a></li>
</ul>
</div>

<div className="space-y-8">
<h3 className="font-bold text-slate-900 text-lg tracking-tight">Accreditations</h3>
<div className="flex items-center gap-6 flex-wrap opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Chiropractic Association of Ireland" className="h-10 w-auto object-contain mix-blend-multiply" src="https://i.postimg.cc/d1VXmwpp/CAI.png"/>
<img alt="ACA" className="h-10 w-auto object-contain mix-blend-multiply" src="https://i.postimg.cc/wBvZD9C1/ACA.png"/>
<img alt="AAPM" className="h-10 w-auto object-contain mix-blend-multiply rounded-md" src="https://i.postimg.cc/k4SjyGwT/AAPM.jpg"/>
</div>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2025 Haven Pain Relief Centre. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-800 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-slate-800 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


<template id="page-home">

<section className="relative w-full min-h-[750px] lg:min-h-[850px] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">

<div className="absolute inset-0 z-0">
<img alt="Clinic Hero" className="w-full h-full object-cover object-center animate-fade-in opacity-0" src="https://i.postimg.cc/3RDKCXsQ/hero-image-haven.jpg" style={{animationFillMode: 'forwards'}}/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1] drop-shadow-sm opacity-0 animate-slide-up delay-100">
                        Live Life <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-100">Pain-Free.</span>
</h1>
<p className="text-lg md:text-xl text-slate-200 mb-12 font-light leading-relaxed max-w-lg opacity-0 animate-slide-up delay-200">
                        Regain an active, happy life with advanced, drug-free pain treatments in Cork. Personalised care for lasting relief.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-up delay-300">
<a className="btn-interaction inline-flex items-center justify-center bg-brand-600 hover:bg-brand-500 text-white px-9 py-4 rounded-full text-base font-semibold shadow-xl shadow-brand-900/20 cursor-pointer" href="/contact" onclick="router(event, '/contact')">
                            Book Appointment Now
                        </a>
<a className="btn-interaction inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-9 py-4 rounded-full text-base font-medium cursor-pointer" href="/about" onclick="router(event, '/about')">
                            Learn More
                        </a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">Why Choose Us</h2>
<p className="text-lg text-slate-600 leading-relaxed font-light">
                        Haven Pain Relief Centre is Ireland’s leading multidisciplinary pain clinic dedicated to one goal: getting you out of pain and back to living your life.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="premium-card group p-10 rounded-3xl bg-slate-50 border border-slate-100/50 reveal-on-scroll delay-100">
<div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 text-brand-600 ring-1 ring-slate-100">
<i className="w-8 h-8" data-lucide="stethoscope"></i>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-4">Comprehensive Care</h3>
<p className="text-sm text-slate-600 leading-relaxed">Multidisciplinary approach tailored to find and fix the root cause of your pain.</p>
</div>
<div className="premium-card group p-10 rounded-3xl bg-slate-50 border border-slate-100/50 reveal-on-scroll delay-200">
<div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 text-brand-600 ring-1 ring-slate-100">
<i className="w-8 h-8" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-4">Advanced Treatments</h3>
<p className="text-sm text-slate-600 leading-relaxed">State-of-the-art, drug-free therapies that provide effective relief without surgery.</p>
</div>
<div className="premium-card group p-10 rounded-3xl bg-slate-50 border border-slate-100/50 reveal-on-scroll delay-300">
<div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 text-brand-600 ring-1 ring-slate-100">
<i className="w-8 h-8" data-lucide="award"></i>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-4">Proven Results</h3>
<p className="text-sm text-slate-600 leading-relaxed">Thousands of patients healed; nationally recognized for pain relief success.</p>
</div>
<div className="premium-card group p-10 rounded-3xl bg-slate-50 border border-slate-100/50 reveal-on-scroll delay-400">
<div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 text-brand-600 ring-1 ring-slate-100">
<i className="w-8 h-8" data-lucide="heart"></i>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-4">Patient-Centered</h3>
<p className="text-sm text-slate-600 leading-relaxed">A caring team that listens and creates a personalized treatment plan for you.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 relative overflow-hidden">
<div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-brand-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
<div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal-on-scroll">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">Conditions We Treat</h2>
<p className="text-lg text-slate-600 font-light">From chronic back pain and headaches to sports injuries, we treat a wide range of conditions.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-brand-700 font-semibold hover:gap-3 transition-all cursor-pointer" href="/conditions" onclick="router(event, '/conditions')">
                        View all conditions <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="premium-card group block relative h-[420px] rounded-[2rem] overflow-hidden shadow-lg reveal-on-scroll delay-100 cursor-pointer" href="/conditions" onclick="router(event, '/conditions')">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
<img alt="Back Pain" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://i.postimg.cc/3w1pQTNF/holding-back-lower-back-pain-relief-in-washington-dc.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-8 z-20">
<h3 className="text-2xl font-bold text-white mb-2">Back &amp; Neck Pain</h3>
<p className="text-white/80 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Herniated discs, sciatica, neck pain &amp; more.</p>
</div>
</a>

<a className="premium-card group block relative h-[420px] rounded-[2rem] overflow-hidden shadow-lg reveal-on-scroll delay-200 cursor-pointer" href="/conditions" onclick="router(event, '/conditions')">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
<img alt="Sports Injury" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://i.postimg.cc/250qX79H/i-Stock-1478745519-1-1024x682-jpg.webp"/>
<div className="absolute bottom-0 left-0 right-0 p-8 z-20">
<h3 className="text-2xl font-bold text-white mb-2">Sports Injuries</h3>
<p className="text-white/80 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Sprains, strains, rehabilitation &amp; recovery.</p>
</div>
</a>

<a className="premium-card group block relative h-[420px] rounded-[2rem] overflow-hidden shadow-lg reveal-on-scroll delay-300 cursor-pointer" href="/conditions" onclick="router(event, '/conditions')">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
<img alt="Headaches" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://i.postimg.cc/KzVNkMTN/istockphoto-1126649089-612x612.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-8 z-20">
<h3 className="text-2xl font-bold text-white mb-2">Headaches</h3>
<p className="text-white/80 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Migraines, tension headaches &amp; nerve pain.</p>
</div>
</a>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-brand-700 font-semibold cursor-pointer" href="/conditions" onclick="router(event, '/conditions')">
                        View all conditions <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden">
<div className="max-w-5xl mx-auto px-4 text-center">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-8 reveal-on-scroll">Real Patients, Real Results.</h2>
<div className="relative min-h-[350px] flex items-center justify-center reveal-on-scroll delay-200 flex-col">

<div className="max-w-3xl mx-auto transition-all duration-500 px-8 py-12 rounded-[2.5rem] bg-slate-50 shadow-soft border border-slate-100 relative z-10" id="testimonial-container">

</div>

<div className="flex justify-center gap-3 mt-8 z-10" id="testimonial-dots">

</div>
</div>
<div className="mt-16 space-y-6 reveal-on-scroll">
<p className="text-sm font-medium text-slate-500">You could be our next success story – <a className="text-brand-600 hover:text-brand-700 hover:underline cursor-pointer" href="/contact" onclick="router(event, '/contact')">Book your consultation now</a>.</p>
<div className="block">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors cursor-pointer underline" href="https://www.google.com/search?sca_esv=557825d3332113b7&amp;hl=en-IE&amp;biw=1792&amp;bih=915&amp;sxsrf=AE3TifN5lVfcEiFxG5OyB702Tjw9hVy-xA:1764261593767&amp;uds=AOm0WdE2fekQnsyfYEw8JPYozOKzOEoFxDBgF4v0HKUlXW6A1p7ExylPfgvSSZ2zHzGrXeobfHNNn3L553pPwUgWv43MzdF83_sqAEb8ZL4rB9mhk0QunDhSWLyFkaVcpEm_plVEii06Sx5XYB1F7jZI0DFB_JRF1Iu9LGhfzCmARr9c_HbEwPQnsy-ZSPgtgfG3Zawog0lH&amp;q=Haven+Pain+Relief+Centre+Reviews&amp;si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMXRAubXWcC4mTHVoFhxS7ZNSgDqIZBgxdPlRaV_iqq1FqeX46heNDF0LcgUDiXv6rgGy15ZQuastRh9l2QKEGurM7Iv-q4egLO0ctFRtWuhXyxS3YA%3D%3D&amp;sa=X&amp;ved=2ahUKEwipkNnM4pKRAxW7WEEAHTFHPagQ_4MLegQISBAP" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4 fill-current text-yellow-400" data-lucide="star"></i> Read more reviews on Google
                        </a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-900 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600 rounded-full mix-blend-overlay filter blur-[120px] opacity-20"></div>
<div className="max-w-4xl mx-auto px-4 text-center relative z-10 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-10 leading-tight">Ready to live pain-free? <br/>Let’s get you started.</h2>
<p className="text-xl text-slate-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                    Get a personalized treatment plan and start your journey to a pain-free life today. No referral needed.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="btn-interaction bg-brand-500 hover:bg-brand-400 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-glow w-full sm:w-auto cursor-pointer" href="/contact" onclick="router(event, '/contact')">
                        Schedule Consultation
                    </a>
<a className="btn-interaction bg-white/10 hover:bg-white/15 text-white border border-white/10 px-10 py-5 rounded-full text-lg font-medium w-full sm:w-auto backdrop-blur-sm cursor-pointer" href="tel:0214857669">
                        Call 021 4857669
                    </a>
</div>
</div>
</section>
</template>

<template id="page-about">
<section className="relative w-full h-[550px] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-60 animate-fade-in opacity-0" src="https://i.postimg.cc/02zb08WF/designing-modern-clean-inviting-medical-office-1024x683-1.jpg" style={{animationFillMode: 'forwards'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-4">
<h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 opacity-0 animate-slide-up delay-100">About Haven</h1>
<p className="text-xl md:text-2xl text-slate-200 font-light opacity-0 animate-slide-up delay-200">We believe no one should have to live in pain.</p>
</div>
</section>
<section className="py-32 bg-white">
<div className="max-w-3xl mx-auto px-4 text-center reveal-on-scroll">
<p className="text-2xl text-slate-700 leading-relaxed font-light">
                    At Haven, our mission is simple: Help you reclaim your life free from pain. We understand how chronic pain can overwhelm your daily life, and we’re here to change that. Our Douglas, Cork clinic provides effective, non-invasive solutions for people who feel like they’ve run out of options.
                </p>
</div>
</section>
<section className="py-32 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-20 tracking-tight reveal-on-scroll">How We Help</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="premium-card bg-white p-10 rounded-[2rem] shadow-soft border border-slate-100 text-center reveal-on-scroll delay-100">
<div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-brand-600">
<i className="w-8 h-8" data-lucide="search"></i>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-4">Diagnosis</h3>
<p className="text-sm text-slate-600 leading-relaxed">We find the root cause of your pain and tailor a plan to fix it.</p>
</div>
<div className="premium-card bg-white p-10 rounded-[2rem] shadow-soft border border-slate-100 text-center reveal-on-scroll delay-200">
<div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-brand-600">
<i className="w-8 h-8" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-4">Advanced Therapy</h3>
<p className="text-sm text-slate-600 leading-relaxed">Offering chiropractic care, spinal decompression, laser therapy, and more.</p>
</div>
<div className="premium-card bg-white p-10 rounded-[2rem] shadow-soft border border-slate-100 text-center reveal-on-scroll delay-300">
<div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-brand-600">
<i className="w-8 h-8" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-4">Compassion</h3>
<p className="text-sm text-slate-600 leading-relaxed">Our caring team listens to you, educates you, and involves you in every step.</p>
</div>
<div className="premium-card bg-white p-10 rounded-[2rem] shadow-soft border border-slate-100 text-center reveal-on-scroll delay-400">
<div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-brand-600">
<i className="w-8 h-8" data-lucide="smile"></i>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-4">Lasting Wellness</h3>
<p className="text-sm text-slate-600 leading-relaxed">Focusing on improving health, mobility, and reducing medication needs.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-600 text-center text-white reveal-on-scroll">
<div className="max-w-4xl mx-auto px-4">
<p className="text-3xl font-medium mb-10 tracking-tight">
                    1,000+ patients treated and counting.
                </p>
<a className="btn-interaction inline-block bg-white text-brand-700 hover:bg-slate-50 px-9 py-4 rounded-full text-base font-semibold shadow-xl cursor-pointer" href="/contact" onclick="router(event, '/contact')">
                    Book Your Consultation
                </a>
</div>
</section>
</template>

<template id="page-meet-doctor">
<section className="bg-white py-24 md:py-32 pt-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
<div className="flex-1 space-y-8 opacity-0 animate-slide-up">
<div>
<span className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3 block">Clinic Director</span>
<h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">Dr. Michael Clifford</h1>
<p className="text-xl text-slate-500 mt-4 font-light">American Board-Certified Chiropractic Physician</p>
</div>
<p className="text-lg text-slate-600 leading-relaxed font-light">
                            With over 30 years of experience, Dr. Clifford has helped thousands of patients in both California and Ireland find lasting relief. He combines evidence-based chiropractic care with genuine compassion.
                        </p>
<div className="pt-6">
<a className="btn-interaction inline-block bg-brand-600 text-white px-9 py-4 rounded-full text-base font-semibold shadow-xl shadow-brand-500/20 cursor-pointer" href="/contact" onclick="router(event, '/contact')">
                                Book Appointment
                            </a>
</div>
</div>
<div className="flex-1 w-full opacity-0 animate-fade-in delay-200">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5] transform hover:scale-[1.01] transition-transform duration-700">
<img alt="Dr. Michael Clifford" className="w-full h-full object-cover" src="https://i.postimg.cc/yx3NZJZs/dr-clifford-1.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 bg-slate-50">
<div className="max-w-5xl mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="premium-card bg-white p-12 rounded-[2.5rem] shadow-soft border border-slate-100 reveal-on-scroll">
<h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-4">
<div className="p-3 bg-brand-50 rounded-xl"><i className="text-brand-600 w-6 h-6" data-lucide="graduation-cap"></i></div>
                            Qualifications
                        </h3>
<ul className="space-y-5 text-slate-600">
<li className="flex items-start gap-4"><span className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 flex-shrink-0"></span><span className="leading-relaxed">U.S. Board-Certified Chiropractor</span></li>
<li className="flex items-start gap-4"><span className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 flex-shrink-0"></span><span className="leading-relaxed">Diplomate, American Academy of Pain Management</span></li>
<li className="flex items-start gap-4"><span className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 flex-shrink-0"></span><span className="leading-relaxed">Certified Physiotherapist &amp; Sports Physician</span></li>
</ul>
</div>
<div className="premium-card bg-white p-12 rounded-[2.5rem] shadow-soft border border-slate-100 reveal-on-scroll delay-100">
<h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-4">
<div className="p-3 bg-brand-50 rounded-xl"><i className="text-brand-600 w-6 h-6" data-lucide="users"></i></div>
                            Memberships
                        </h3>
<ul className="space-y-5 text-slate-600">
<li className="flex items-start gap-4"><span className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 flex-shrink-0"></span><span className="leading-relaxed">Chiropractic Association of Ireland</span></li>
<li className="flex items-start gap-4"><span className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 flex-shrink-0"></span><span className="leading-relaxed">American Pain Society</span></li>
<li className="flex items-start gap-4"><span className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 flex-shrink-0"></span><span className="leading-relaxed">Leading Pain Management Associations</span></li>
</ul>
</div>
</div>
</div>
</section>
</template>

<template id="page-conditions">
<section className="pt-40 pb-20 bg-white px-4">
<div className="max-w-3xl mx-auto text-center opacity-0 animate-slide-up">
<h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-8">Conditions We Treat</h1>
<p className="text-xl text-slate-600 leading-relaxed font-light">
                    We treat a comprehensive range of conditions. Browse below to find yours.
                </p>
</div>
</section>
<section className="pb-32 bg-white px-4 min-h-[600px]">
<div className="max-w-4xl mx-auto space-y-5" id="accordion-container">

</div>
</section>
<section className="py-24 bg-brand-50 rounded-[3rem] max-w-6xl mx-auto mb-32 px-8 text-center reveal-on-scroll border border-brand-100 mx-4">
<p className="text-2xl font-semibold text-slate-900 mb-10 tracking-tight">Not sure which category your pain falls into?</p>
<a className="btn-interaction inline-block bg-brand-600 text-white px-10 py-4 rounded-full text-base font-semibold shadow-lg shadow-brand-500/20 cursor-pointer" href="/contact" onclick="router(event, '/contact')">
                Book Diagnostic Consultation
            </a>
</section>
</template>

<template id="page-contact">
<section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-50 animate-fade-in opacity-0" src="https://i.postimg.cc/02zb08WF/designing-modern-clean-inviting-medical-office-1024x683-1.jpg" style={{animationFillMode: 'forwards'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
</div>
<div className="relative z-10 text-center text-white px-4">
<h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-slide-up delay-100">Contact Us</h1>
<p className="text-xl font-light opacity-0 animate-slide-up delay-200">We’re here to help you find relief.</p>
</div>
</section>
<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="premium-card bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl reveal-on-scroll">
<h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h2>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Message sent! We will contact you shortly.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Name</label>
<input className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all duration-200" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email</label>
<input className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all duration-200" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Phone</label>
<input className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all duration-200" type="tel"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Message</label>
<textarea className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all duration-200" required="" rows="4"></textarea>
</div>
<button className="btn-interaction w-full bg-brand-600 text-white font-semibold py-5 rounded-xl shadow-lg shadow-brand-500/20 text-base mt-2 cursor-pointer" type="submit">
                                Send Message
                            </button>
</form>
</div>

<div className="space-y-12 reveal-on-scroll delay-200">
<div className="premium-card bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100/50">
<div className="space-y-8">
<div className="flex items-start gap-6">
<div className="bg-white p-4 rounded-2xl shadow-sm text-brand-600"><i className="w-6 h-6" data-lucide="map-pin"></i></div>
<div>
<h3 className="font-bold text-slate-900 text-lg mb-1">Address</h3>
<p className="text-slate-600">Galways Lane, Douglas, Co. Cork</p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="bg-white p-4 rounded-2xl shadow-sm text-brand-600"><i className="w-6 h-6" data-lucide="phone"></i></div>
<div>
<h3 className="font-bold text-slate-900 text-lg mb-1">Phone</h3>
<a className="text-slate-600 hover:text-brand-600 transition-colors cursor-pointer" href="tel:0214857669">021 4857669</a>
</div>
</div>
<div className="flex items-start gap-6">
<div className="bg-white p-4 rounded-2xl shadow-sm text-brand-600"><i className="w-6 h-6" data-lucide="mail"></i></div>
<div>
<h3 className="font-bold text-slate-900 text-lg mb-1">Email</h3>
<a className="text-slate-600 hover:text-brand-600 transition-colors cursor-pointer" href="mailto:info@havenpainrelief.ie">info@havenpainrelief.ie</a>
</div>
</div>
</div>
</div>
<div className="premium-card w-full h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.236812328311!2d-8.442859823093142!3d51.87488968379045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4844855bb18b80ef%3A0x67b4e53203a030d4!2sHaven%20Pain%20Relief%20Centre!5e0!3m2!1sen!2sie!4v1764260114008!5m2!1sen!2sie" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>
</template>



    </>
  );
}
