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



        // 1. MENU TOGGLE LOGIC
        const menuToggle = document.getElementById('menu-toggle');
        const menuOverlay = document.getElementById('menu-overlay');
        const menuIcon = menuToggle.querySelector('iconify-icon');
        const menuText = menuToggle.querySelector('span');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if(isMenuOpen) {
                menuOverlay.classList.add('open');
                menuIcon.setAttribute('icon', 'lucide:x');
                menuText.textContent = "Close";
                document.body.style.overflow = 'hidden';
            } else {
                menuOverlay.classList.remove('open');
                menuIcon.setAttribute('icon', 'lucide:menu');
                menuText.textContent = "Menu";
                document.body.style.overflow = '';
            }
        }

        menuToggle.addEventListener('click', toggleMenu);

        // 2. CURSOR LOGIC
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        // Re-select triggers including those inside the menu
        
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        });

        function animateCursor() {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Update trigger listeners for dynamic content
        function updateHoverTriggers() {
            const triggers = document.querySelectorAll('.hover-trigger');
            triggers.forEach(trigger => {
                trigger.addEventListener('mouseenter', () => {
                    follower.style.width = '80px';
                    follower.style.height = '80px';
                    follower.style.border = '1px solid var(--accent)';
                    follower.style.backgroundColor = 'rgba(205, 92, 69, 0.1)';
                });
                trigger.addEventListener('mouseleave', () => {
                    follower.style.width = '40px';
                    follower.style.height = '40px';
                    follower.style.border = '1px solid rgba(255,255,255,0.2)';
                    follower.style.backgroundColor = 'transparent';
                });
            });
        }
        updateHoverTriggers();

        // 3. SCROLL REVEAL LOGIC
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // 4. TEXT INTERACTION (Bottom)
        const footerText = document.getElementById('footer-text');
        if(footerText) {
            footerText.addEventListener('mouseenter', () => footerText.classList.add('filled'));
            footerText.addEventListener('mouseleave', () => footerText.classList.remove('filled'));
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
      
<div className="noise-overlay"></div>
<div className="cursor" style={{transform: 'translate(1588px, 471px) translate(-50%, -50%)'}}></div>
<div className="cursor-follower" style={{transform: 'translate(0px, 0px) translate(-50%, -50%)', width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.2)', backgroundColor: 'transparent'}}></div>

<nav>
<div className="nav-logo z-50">THE BODY RHYTHM</div>
<button className="hover-trigger z-50 text-white flex items-center gap-2 group focus:outline-none" id="menu-toggle">
<span className="font-display uppercase text-xs tracking-[0.2em] group-hover:text-[var(--accent)] transition-colors duration-300">Menu</span>
<div className="p-2 border border-white/20 rounded-full group-hover:border-[var(--accent)] transition-colors duration-300">
<iconify-icon height="20" icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</button>
</nav>

<div className="menu-overlay" id="menu-overlay">
<div className="w-full max-w-7xl mx-auto flex flex-col h-full justify-between">

<div className="menu-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

<div>
<div className="menu-category">
<div className="menu-header">The Method</div>
<a className="menu-link hover-trigger" href="#">Why It Works</a>
<a className="menu-link hover-trigger" href="#">Meet the Practitioner</a>
</div>
<div className="menu-category">
<div className="menu-header">Therapies</div>
<a className="menu-link hover-trigger" href="#">GYROTONIC®</a>
<a className="menu-link hover-trigger" href="#">MPS Dolphin Neurostim</a>
</div>
</div>

<div>
<div className="menu-category">
<div className="menu-header">Solutions</div>
<a className="menu-link hover-trigger" href="#">Nervous System Regulation</a>
<a className="menu-link hover-trigger highlight" href="#">C-Section &amp; Scar Release</a>
<a className="menu-link hover-trigger" href="#">Tech Neck &amp; Posture</a>
<a className="menu-link hover-trigger" href="#">Chronic Pain Management</a>
</div>
<div className="menu-category">
<div className="menu-header">Results</div>
<a className="menu-link hover-trigger" href="#">Case Studies</a>
<a className="menu-link hover-trigger" href="#">Testimonials</a>
</div>
</div>

<div>
<div className="menu-category">
<div className="menu-header">New Clients</div>
<a className="menu-link hover-trigger" href="#">First Visit FAQ</a>
<a className="menu-link hover-trigger" href="#">Pricing &amp; Packages</a>
</div>
<div className="mt-8">
<a className="inline-flex items-center justify-between w-full p-6 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 group hover-trigger" href="#book" onclick="toggleMenu()">
<span className="font-display uppercase tracking-widest text-sm">Start Your Reset</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-12 pb-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="footer-nav-col">
<h4>Locations</h4>
<a className="hover-trigger flex items-center gap-2" href="#">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
                            Santa Monica | Ocean Park
                        </a>
<a className="hover-trigger flex items-center gap-2" href="#">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
                            Los Angeles | Westside
                        </a>
</div>
<div className="footer-nav-col">
<h4>Quick Links</h4>
<a className="hover-trigger" href="#">Teacher Training</a>
<a className="hover-trigger" href="#">Gift Cards</a>
<a className="hover-trigger" href="#">Client Portal</a>
</div>
<div className="footer-nav-col">
<h4>Legal</h4>
<a className="hover-trigger" href="#">Privacy Policy</a>
<a className="hover-trigger" href="#">Medical Disclaimer</a>
<a className="hover-trigger" href="#">Terms of Service</a>
</div>
<div className="footer-nav-col">
<h4>Social</h4>
<a className="hover-trigger flex items-center gap-2" href="#">
<iconify-icon icon="lucide:instagram" width="14"></iconify-icon>
                            Instagram
                        </a>
<a className="hover-trigger flex items-center gap-2" href="#">
<iconify-icon icon="lucide:youtube" width="14"></iconify-icon>
                            YouTube
                        </a>
</div>
</div>
</div>
</div>
</div>

<main className="">
<section className="section">
<video autoplay="" className="hero-video-bg" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/5091624/5091624-hd_1920_1080_24fps.mp4" type="video/mp4"/>
</video>
<div className="hero-content">
<span className="label reveal active">Somatic Architecture</span>
<h1 className="display-xl reveal active tracking-tight hover-trigger" onmouseenter="this.classList.add('filled')" onmouseleave="this.classList.remove('filled')">Regulate<br/>The System</h1>
<p className="reveal active" style={{maxWidth: '500px', marginTop: '2rem', fontSize: '1.2rem', color: 'var(--text-muted)'}}>
                    A convergence of Gyrotonic® Expansion and Dolphin MPS® Neurostim Therapy. 
                    Designed to reset the Vagus Nerve and restore your body's natural cadence.
                </p>
</div>
</section>
<section className="section flex flex-col items-center justify-center text-center">
<span className="label reveal text-[var(--accent)] text-xs font-display uppercase tracking-[0.15em] mb-4">The Methodology</span>
<h2 className="heading-lg reveal tracking-tight max-w-4xl mb-20 font-light leading-tight">
                "Trauma and stress are not just in the mind.
                <span className="text-[var(--accent)] italic">They are rhythms trapped in the nervous system."</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-left max-w-5xl w-full px-4">
<div className="reveal flex flex-col gap-4">
<h3 className="nav-logo text-xl font-semibold tracking-tight">01. RELEASE</h3>
<p className="text-[var(--text-muted)] text-lg leading-relaxed">
                        Using <span className="text-[var(--text-main)]">MPS Dolphin Neurostim</span> to electrically locate and release scar tissue (C-Section, surgery) that blocks the autonomic nervous system.
                    </p>
</div>
<div className="reveal flex flex-col gap-4">
<h3 className="nav-logo text-xl font-semibold tracking-tight">02. EXPAND</h3>
<p className="text-[var(--text-muted)] text-lg leading-relaxed">
                        Using the <span className="text-[var(--text-main)]">Gyrotonic Expansion System®</span> to spiral the spine, creating space between vertebrae and hydrating the fascia.
                    </p>
</div>
</div>
</section>
<section className="service-grid">
<div className="service-panel hover-trigger">
<span className="label">Architecture of Motion</span>
<h2 className="heading-lg tracking-tight" style={{marginBottom: '2rem'}}>GYROTONIC®</h2>
<p className="" style={{marginBottom: '2rem', color: 'var(--text-muted)'}}>Three-dimensional movement that mobilizes the spine and joints.</p>
<ul className="service-list">
<li className="">Private Session <span>55 Min</span></li>
<li className="">Duet Session <span>55 Min</span></li>
<li className="">Scoliosis Mgmt <span>Custom</span></li>
<li>Tech-Neck Release <span>Custom</span></li>
</ul>
</div><style>
    /* Layout Adaptation: Transforms the split-screen grid into a vertical flow to accommodate the new section */
    .service-grid {
        display: flex !important;
        flex-direction: column !important;
        height: auto !important;
    }
    .service-panel {
        width: 100% !important;
        height: auto !important;
        min-height: 50vh !important;
        border-right: none !important;
        border-bottom: 1px solid rgba(255,255,255,0.05) !important;
        padding: 4rem 2rem !important;
    }
    @media (min-width: 768px) {
        .service-panel { padding: 6rem 4rem !important; }
    }
</style><div className="service-panel hover-trigger" style={{background: '#121212'}}>
<span className="label">Architecture of Nerves</span>
<h2 className="heading-lg tracking-tight" style={{marginBottom: '2rem'}}>MPS THERAPY</h2>
<p style={{marginBottom: '2rem', color: 'var(--text-muted)'}}>Microcurrent Point Stimulation to upregulate the Vagus Nerve.</p>
<ul className="service-list">
<li>Scar Release <span>30 Min</span></li>
<li>Vagal Tone Reset <span>45 Min</span></li>
<li>Chronic Pain Protocol <span>60 Min</span></li>
<li>Long COVID Recovery <span>60 Min</span></li>
</ul>
</div><div className="w-full border-b border-white/5 bg-[#0f0e0e] relative z-10 group">

<div className="flex flex-col md:flex-row justify-between items-end px-8 md:px-16 py-12 md:py-16 border-b border-white/5">
<div>
<span className="label reveal active">Visual Frequency</span>
<h2 className="heading-lg tracking-tight reveal active">Resonance <span className="text-[var(--text-muted)]">&amp;</span> Flow</h2>
</div>
<button className="hover-trigger mt-6 md:mt-0 flex items-center gap-3 text-sm uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300">
<span>Explore Gallery</span>
<iconify-icon icon="lucide:arrow-down-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-[800px] border-b border-white/5">

<div className="md:col-span-2 relative border-r border-white/5 hover-trigger overflow-hidden group/item">
<img alt="Somatic Texture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/item:scale-105 opacity-60 group-hover/item:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54e709c7-67d2-428c-846f-31d2a9b1ae42_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0e] via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
<div className="flex items-center gap-4 mb-4 opacity-0 transform translate-y-4 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500">
<span className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-widest text-[var(--accent)] backdrop-blur-md">Deep Tissue</span>
<span className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white/70 backdrop-blur-md">Fascia</span>
</div>
<h3 className="font-display text-3xl md:text-5xl text-white mb-2">Cellular Memory</h3>
<p className="text-[var(--text-muted)] max-w-md text-lg font-light leading-relaxed">Releasing the rhythmic patterns stored within the connective tissue matrix.</p>
</div>
</div>

<div className="grid grid-rows-2">

<div className="relative border-b border-white/5 hover-trigger overflow-hidden group/item">
<img alt="Abstract Curves" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110 opacity-50 grayscale group-hover/item:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97d65ee2-a03b-441d-afa1-43e11d333b30_1600w.webp"/>
<div className="absolute top-6 right-6 z-10">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover/item:bg-[var(--accent)] group-hover/item:border-[var(--accent)] transition-all duration-300">
<iconify-icon className="text-white" icon="lucide:waves" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-8 left-8">
<h4 className="font-display uppercase tracking-widest text-sm text-white mb-1">Fluid Dynamics</h4>
<span className="text-xs text-[var(--text-muted)]">01. Immersion</span>
</div>
</div>

<div className="grid grid-cols-2">

<div className="border-r border-white/5 p-6 flex flex-col justify-between hover-trigger group/data bg-[#141414]">
<div className="flex justify-between items-start">
<iconify-icon className="text-[var(--accent)]" icon="lucide:activity" width="20"></iconify-icon>
<span className="text-xs text-[var(--text-muted)] font-mono">HRV STATUS</span>
</div>
<div>
<div className="text-4xl font-display text-white mb-1 group-hover/data:text-[var(--accent)] transition-colors">+42<span className="text-lg opacity-50">%</span></div>
<p className="text-xs text-[var(--text-muted)] leading-tight">Vagal tone increase post-session.</p>
</div>
</div>

<div className="relative hover-trigger overflow-hidden group/item">
<img alt="Texture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110 opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b68436bd-2956-4c5a-873d-2ae0fdd4c564_800w.webp"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-black/40">
<span className="font-display uppercase text-xs tracking-[0.2em] text-white border-b border-white pb-1">View</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="section" id="book" style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
<h2 className="display-xl hover-trigger tracking-tight" id="footer-text">Begin</h2>
<br/>
<p style={{color: 'var(--text-muted)'}}>Santa Monica, CA • By Appointment Only</p>
<a href="mailto:hello@thebodyrhythm.com" style={{marginTop: '2rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', textDecoration: 'none', borderBottom: '1px solid var(--accent)'}}>
                hello@thebodyrhythm.com
            </a>
</section>
</main>


    </>
  );
}
