import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // ===== THEME SWITCHER =====
        const body = document.body;
        const themeSwitcher = document.getElementById('themeSwitcher');
        const themeIcon = document.getElementById('themeIcon');

        // Check saved theme or default to dark
        const savedTheme = localStorage.getItem('shubook-theme') || 'dark';
        body.className = savedTheme + ' antialiased overflow-x-hidden noise-overlay';
        updateThemeIcon();

        themeSwitcher.addEventListener('click', () => {
            const isDark = body.classList.contains('dark');
            body.classList.remove('dark', 'light');
            body.classList.add(isDark ? 'light' : 'dark');
            localStorage.setItem('shubook-theme', isDark ? 'light' : 'dark');
            updateThemeIcon();
        });

        function updateThemeIcon() {
            if (body.classList.contains('dark')) {
                themeIcon.setAttribute('icon', 'solar:sun-2-linear');
            } else {
                themeIcon.setAttribute('icon', 'solar:moon-linear');
            }
        }

        // ===== STORY PROGRESS BAR =====
        const progressBar = document.getElementById('storyProgress');
        function updateProgress() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        }

        // ===== SCROLL REVEAL ANIMATIONS =====
        const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        reveals.forEach(el => revealObserver.observe(el));

        // ===== STORY TEXT FADE-IN =====
        const storyTexts = document.querySelectorAll('.story-text');
        const storyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -30px 0px' });
        storyTexts.forEach(el => storyObserver.observe(el));

        // ===== CARD STACKING EFFECT =====
        function updateStackCards() {
            const cards = document.querySelectorAll('.stack-card');
            const isMobile = window.innerWidth < 768;

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const stickyTop = 100;
                const cardTop = rect.top;
                const totalCards = cards.length;
                
                if (isMobile) {
                    // On mobile, disable stacking — just show normally
                    card.style.position = 'relative';
                    card.style.top = 'auto';
                    card.style.transform = 'none';
                    card.style.opacity = '1';
                    card.style.zIndex = index;
                    return;
                }

                // How far this card has been pushed up past its sticky point
                const distFromTop = stickyTop - cardTop;
                
                if (distFromTop > 0) {
                    // Card is at or past its sticky position
                    const scaleReduction = Math.min(distFromTop * 0.0003, 0.08);
                    const yOffset = Math.min(distFromTop * 0.02, 12) * index * 0.15;
                    card.style.transform = `scale(${1 - scaleReduction}) translateY(${yOffset}px)`;
                    card.style.opacity = Math.max(1 - distFromTop * 0.001, 0.6);
                } else {
                    card.style.transform = 'scale(1) translateY(0)';
                    card.style.opacity = '1';
                }
                card.style.zIndex = index + 1;
            });
        }

        // ===== CURSOR GLOW =====
        const cursorGlow = document.getElementById('cursorGlow');
        if (cursorGlow) {
            document.addEventListener('mousemove', (e) => {
                cursorGlow.style.left = (e.clientX - 200) + 'px';
                cursorGlow.style.top = (e.clientY - 200) + 'px';
            });
        }

        // ===== SCROLL HANDLER =====
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateProgress();
                    updateStackCards();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Initial call
        updateProgress();
        updateStackCards();
        window.addEventListener('resize', updateStackCards);

        // ===== MOBILE MENU =====
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        let menuOpen = false;

        mobileMenuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.innerHTML = menuOpen
                ? '<iconify-icon icon="solar:close-circle-linear" width="24" height="24"></iconify-icon>'
                : '<iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>';
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuOpen = false;
                mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>';
            });
        });

        // ===== SMOOTH SCROLL =====
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
                }
            });
        });

        // ===== 3D TILT =====
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateX = (y - rect.height / 2) / 15;
                const rotateY = (rect.width / 2 - x) / 15;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="storyProgress"></div>

<div className="cursor-glow hidden lg:block" id="cursorGlow"></div>

<button aria-label="Toggle theme" className="theme-switcher" id="themeSwitcher">
<iconify-icon height="22" icon="solar:sun-2-linear" id="themeIcon" width="22"></iconify-icon>
</button>

<nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b" id="navbar" style={{borderColor: 'var(--border-light)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-20">
<a className="font-space font-semibold text-lg tracking-tighter t-primary" href="#">
                    shubook<span className="t-accent">.</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm t-secondary hover:t-primary transition-colors" href="#chapter-1">Our Story</a>
<a className="text-sm t-secondary hover:t-primary transition-colors" href="#chapter-2">Services</a>
<a className="text-sm t-secondary hover:t-primary transition-colors" href="#chapter-3">Clients</a>
<a className="text-sm t-secondary hover:t-primary transition-colors" href="#chapter-4">Podcast</a>
<a className="btn-primary px-5 py-2.5 rounded-full text-sm font-medium" href="#chapter-5">Book a Call</a>
</div>
<button className="md:hidden" id="mobileMenuBtn" style={{color: 'var(--text-secondary)'}}>
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="md:hidden hidden" id="mobileMenu">
<div className="px-4 sm:px-6 pb-6 pt-2 flex flex-col gap-4" style={{borderTop: '1px solid var(--border-light)'}}>
<a className="text-sm t-secondary py-2" href="#chapter-1">Our Story</a>
<a className="text-sm t-secondary py-2" href="#chapter-2">Services</a>
<a className="text-sm t-secondary py-2" href="#chapter-3">Clients</a>
<a className="text-sm t-secondary py-2" href="#chapter-4">Podcast</a>
<a className="btn-primary px-5 py-2.5 rounded-full text-sm font-medium text-center mt-2" href="#chapter-5">Book a Call</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">

<div className="absolute inset-0">
<div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl pulse-glow" style={{background: 'var(--gradient-1)'}}></div>
<div className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 rounded-full blur-3xl pulse-glow" style={{background: 'var(--gradient-2)', animationDelay: '2s'}}></div>
</div>

<div className="absolute inset-0" style={{opacity: '0.03', backgroundImage: 'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 sm:pt-32 pb-16 sm:pb-20">

<div className="reveal inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 sm:mb-8">
<div className="w-2 h-2 bg-emerald-400 rounded-full glow-dot"></div>
<span className="text-xs t-secondary font-medium">Prologue — Every story has a beginning</span>
</div>

<h1 className="reveal stagger-1 font-space font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-5 sm:mb-6 t-primary">
                We craft<br/>
<span className="gradient-text">digital stories</span><br/>
                that matter.
            </h1>
<p className="reveal stagger-2 text-sm sm:text-base lg:text-lg t-secondary max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed font-light px-4">
                Shubook Labs brings together design, technology, and storytelling to build brands that inspire growth — in business, life, and beyond.
            </p>

<div className="reveal stagger-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-20 px-4">
<a className="btn-primary px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-medium flex items-center gap-2 w-full sm:w-auto justify-center" href="#chapter-5">
                    Begin Our Story
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="btn-outline px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-medium flex items-center gap-2 w-full sm:w-auto justify-center" href="#chapter-4">
<iconify-icon height="18" icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Watch The Shubook Show
                </a>
</div>

<div className="reveal stagger-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-3xl mx-auto px-2">
<div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 tilt-card">
<div className="font-space font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight gradient-text">1L+</div>
<div className="text-xs t-tertiary mt-1 sm:mt-2 font-medium uppercase tracking-wider">Followers</div>
</div>
<div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 tilt-card">
<div className="font-space font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight gradient-text">50+</div>
<div className="text-xs t-tertiary mt-1 sm:mt-2 font-medium uppercase tracking-wider">Episodes</div>
</div>
<div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 tilt-card">
<div className="font-space font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight gradient-text">25+</div>
<div className="text-xs t-tertiary mt-1 sm:mt-2 font-medium uppercase tracking-wider">Brands</div>
</div>
<div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 tilt-card">
<div className="font-space font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight gradient-text">3+</div>
<div className="text-xs t-tertiary mt-1 sm:mt-2 font-medium uppercase tracking-wider">Years</div>
</div>
</div>
</div>

<div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{opacity: '0.4'}}>
<span className="text-xs tracking-widest uppercase t-secondary">Chapter 1</span>
<div className="w-px h-8" style={{background: 'linear-gradient(to bottom, var(--text-tertiary), transparent)'}}></div>
</div>
</section>

<section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden" id="chapter-1">
<div className="section-divider"></div>
<div className="absolute top-1/2 right-0 w-72 h-72 rounded-full blur-3xl float-slow" style={{background: 'var(--gradient-1)'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="reveal mb-12 sm:mb-16">
<div className="chapter-marker">
<span className="text-xs font-medium uppercase tracking-widest t-accent mb-2 block chapter-number">Chapter 01</span>
<h2 className="font-space font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tighter leading-tight t-primary">
                        Where vision<br/>meets <span className="gradient-text-warm">execution.</span>
</h2>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">

<div>
<div className="reveal stagger-1 space-y-5 sm:space-y-6">
<p className="text-sm sm:text-base t-secondary leading-relaxed font-light story-text">
<span className="font-space font-medium text-lg sm:text-xl t-primary">It started with a microphone</span> and a vision. Shubham Saini didn't just want to create content — he wanted to build a movement.
                        </p>
<p className="text-sm sm:text-base t-secondary leading-relaxed font-light story-text">
                            As the Founder of Shubook Labs and the host of <span className="t-primary font-medium">The Shubook Show</span> — Jaipur's premium podcast — Shubham has brought together Business, Self Development, and Astrology into one powerful narrative.
                        </p>
<p className="text-sm sm:text-base t-secondary leading-relaxed font-light story-text">
                            With <span className="t-primary font-medium">1 Lakh+ followers</span> and <span className="t-primary font-medium">50+ episodes</span>, he's built a community of ambitious, spiritually-aware individuals who believe growth isn't just about numbers — it's about <em>transformation</em>.
                        </p>
<p className="text-sm sm:text-base t-secondary leading-relaxed font-light story-text">
                            Under Shubook Labs, India's top entrepreneurs, influencers and thought leaders come together for deep, meaningful conversations that inspire growth — in business, life and beyond.
                        </p>
</div>
<div className="reveal stagger-2 flex flex-wrap items-center gap-3 mt-8 sm:mt-10">
<a className="btn-outline px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2" href="https://open.spotify.com" target="_blank">
<iconify-icon height="16" icon="solar:music-note-2-linear" width="16"></iconify-icon>
                            Spotify
                        </a>
<a className="btn-outline px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2" href="https://youtube.com" target="_blank">
<iconify-icon height="16" icon="solar:play-circle-linear" width="16"></iconify-icon>
                            YouTube
                        </a>
</div>
</div>

<div className="reveal-right relative">
<div className="relative">
<div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 glow-purple">
<div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center font-space font-semibold text-base sm:text-xl tracking-tighter text-white">
                                    SS
                                </div>
<div>
<div className="font-space font-medium text-base sm:text-lg tracking-tight t-primary">Shubham Saini</div>
<div className="text-xs sm:text-sm t-tertiary">Founder, Shubook Labs</div>
</div>
</div>
<div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
<div className="flex items-center gap-3">
<iconify-icon className="t-accent" height="18" icon="solar:microphone-3-linear" width="18"></iconify-icon>
<span className="text-xs sm:text-sm t-secondary">Host of The Shubook Show</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="t-accent" height="18" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span className="text-xs sm:text-sm t-secondary">1 Lakh+ Community Members</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="t-accent" height="18" icon="solar:star-linear" width="18"></iconify-icon>
<span className="text-xs sm:text-sm t-secondary">YouTuber &amp; Influencer</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="t-accent" height="18" icon="solar:buildings-2-linear" width="18"></iconify-icon>
<span className="text-xs sm:text-sm t-secondary">Based in Jaipur, India</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2 sm:gap-4">
<div className="rounded-lg sm:rounded-xl p-3 sm:p-4 text-center" style={{background: 'var(--surface)'}}>
<div className="font-space font-medium text-base sm:text-lg tracking-tight t-primary">50+</div>
<div className="text-xs t-tertiary mt-1">Episodes</div>
</div>
<div className="rounded-lg sm:rounded-xl p-3 sm:p-4 text-center" style={{background: 'var(--surface)'}}>
<div className="font-space font-medium text-base sm:text-lg tracking-tight t-primary">1L+</div>
<div className="text-xs t-tertiary mt-1">Reach</div>
</div>
<div className="rounded-lg sm:rounded-xl p-3 sm:p-4 text-center" style={{background: 'var(--surface)'}}>
<div className="font-space font-medium text-base sm:text-lg tracking-tight t-primary">25+</div>
<div className="text-xs t-tertiary mt-1">Brands</div>
</div>
</div>
</div>
<div className="absolute -top-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 rounded-2xl float hidden sm:block" style={{border: '1px solid var(--border)', animationDelay: '1s'}}></div>
<div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 sm:w-16 h-12 sm:h-16 rounded-xl float-slow" style={{background: 'var(--accent-glow)'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden stack-section" id="chapter-2">
<div className="section-divider"></div>
<div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-3xl" style={{background: 'var(--gradient-2)'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="reveal mb-12 sm:mb-16">
<div className="chapter-marker">
<span className="text-xs font-medium uppercase tracking-widest t-accent mb-2 block chapter-number">Chapter 02</span>
<h2 className="font-space font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tighter mb-4 sm:mb-6 t-primary">
                        The tools of our <span className="gradient-text">craft.</span>
</h2>
<p className="text-sm sm:text-base t-secondary max-w-xl font-light leading-relaxed">
                        Every great story needs the right tools. Here's how we bring yours to life — scroll to discover each chapter of our expertise.
                    </p>
</div>
</div>

<div className="stack-container space-y-6" id="stackContainer">

<div className="stack-card" data-index="0">
<div className="stack-card-inner glass glow-purple">
<div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
<div>
<div className="service-icon w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6" style={{background: 'var(--surface)'}}>
<iconify-icon className="t-accent" height="24" icon="solar:monitor-linear" width="24"></iconify-icon>
</div>
<h3 className="font-space font-medium text-xl sm:text-2xl lg:text-3xl tracking-tight mb-3 sm:mb-4 t-primary">Website Development</h3>
<p className="text-sm sm:text-base t-secondary leading-relaxed font-light mb-4 sm:mb-6">
                                    Your website is the first chapter of your brand's story. We build custom websites and e-commerce solutions that aren't just beautiful — they convert visitors into believers.
                                </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>React</span>
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>Next.js</span>
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>Shopify</span>
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>WordPress</span>
</div>
</div>
<div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 hidden md:flex items-center justify-center" style={{background: 'var(--surface)', minHeight: '200px'}}>
<iconify-icon className="t-accent" height="80" icon="solar:monitor-linear" style={{opacity: '0.3'}} width="80"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="stack-card" data-index="1">
<div className="stack-card-inner glass glow-purple">
<div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
<div>
<div className="service-icon w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6" style={{background: 'var(--surface)'}}>
<iconify-icon className="t-accent" height="24" icon="solar:video-frame-play-horizontal-linear" width="24"></iconify-icon>
</div>
<h3 className="font-space font-medium text-xl sm:text-2xl lg:text-3xl tracking-tight mb-3 sm:mb-4 t-primary">Video Editing &amp; AI Shoots</h3>
<p className="text-sm sm:text-base t-secondary leading-relaxed font-light mb-4 sm:mb-6">
                                    Every frame tells a story. From Reels to full-length YouTube productions, our editors and AI tools craft cinematic content that stops the scroll and starts conversations.
                                </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>Reels</span>
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>YouTube</span>
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>Ad Films</span>
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>UGC</span>
</div>
</div>
<div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 hidden md:flex items-center justify-center" style={{background: 'var(--surface)', minHeight: '200px'}}>
<iconify-icon className="t-accent" height="80" icon="solar:video-frame-play-horizontal-linear" style={{opacity: '0.3'}} width="80"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="stack-card" data-index="2">
<div className="stack-card-inner glass glow-purple">
<div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
<div>
<div className="service-icon w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6" style={{background: 'var(--surface)'}}>
<iconify-icon className="t-accent" height="24" icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</div>
<h3 className="font-space font-medium text-xl sm:text-2xl lg:text-3xl tracking-tight mb-3 sm:mb-4 t-primary">Social Media Management</h3>
<p className="text-sm sm:text-base t-secondary leading-relaxed font-light mb-4 sm:mb-6">
                                    Your audience is already online — they're just waiting to hear from you. We handle content planning, creation, and growth strategy so your brand never misses a beat.
                                </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>Instagram</span>
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>LinkedIn</span>
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>Twitter/X</span>
</div>
</div>
<div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 hidden md:flex items-center justify-center" style={{background: 'var(--surface)', minHeight: '200px'}}>
<iconify-icon className="t-accent" height="80" icon="solar:chat-round-dots-linear" style={{opacity: '0.3'}} width="80"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="stack-card" data-index="3">
<div className="stack-card-inner glass glow-purple">
<div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
<div>
<div className="service-icon w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6" style={{background: 'var(--surface)'}}>
<iconify-icon className="t-accent" height="24" icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="font-space font-medium text-xl sm:text-2xl lg:text-3xl tracking-tight mb-3 sm:mb-4 t-primary">Meta &amp; Google Ads</h3>
<p className="text-sm sm:text-base t-secondary leading-relaxed font-light mb-4 sm:mb-6">
                                    Behind every successful brand is a smart ad strategy. We run ROI-driven campaigns with precision targeting, A/B testing, and data-backed optimization.
                                </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>Meta Ads</span>
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>Google Ads</span>
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>Analytics</span>
</div>
</div>
<div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 hidden md:flex items-center justify-center" style={{background: 'var(--surface)', minHeight: '200px'}}>
<iconify-icon className="t-accent" height="80" icon="solar:chart-2-linear" style={{opacity: '0.3'}} width="80"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="stack-card" data-index="4">
<div className="stack-card-inner glass glow-purple">
<div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
<div>
<div className="service-icon w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6" style={{background: 'var(--surface)'}}>
<iconify-icon className="t-accent" height="24" icon="solar:camera-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="font-space font-medium text-xl sm:text-2xl lg:text-3xl tracking-tight mb-3 sm:mb-4 t-primary">AI Product Photoshoots</h3>
<p className="text-sm sm:text-base t-secondary leading-relaxed font-light mb-4 sm:mb-6">
                                    No studio? No problem. Our AI-powered photography creates stunning, studio-quality product images and videos — at a fraction of the traditional cost.
                                </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>AI Generation</span>
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>Product Shots</span>
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>Lifestyle</span>
</div>
</div>
<div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 hidden md:flex items-center justify-center" style={{background: 'var(--surface)', minHeight: '200px'}}>
<iconify-icon className="t-accent" height="80" icon="solar:camera-minimalistic-linear" style={{opacity: '0.3'}} width="80"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="stack-card" data-index="5">
<div className="stack-card-inner glass glow-purple">
<div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
<div>
<div className="service-icon w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6" style={{background: 'var(--surface)'}}>
<iconify-icon className="t-accent" height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="font-space font-medium text-xl sm:text-2xl lg:text-3xl tracking-tight mb-3 sm:mb-4 t-primary">AI-Powered Content</h3>
<p className="text-sm sm:text-base t-secondary leading-relaxed font-light mb-4 sm:mb-6">
                                    The future of storytelling is here. AI-driven content creation and automation workflows that save time, boost creativity, and scale your output exponentially.
                                </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>AI Writing</span>
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>Automation</span>
<span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background: 'var(--surface)', color: 'var(--text-tertiary)'}}>Workflows</span>
</div>
</div>
<div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 hidden md:flex items-center justify-center" style={{background: 'var(--surface)', minHeight: '200px'}}>
<iconify-icon className="t-accent" height="80" icon="solar:magic-stick-3-linear" style={{opacity: '0.3'}} width="80"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden" id="chapter-3">
<div className="section-divider"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
<div className="reveal">
<div className="chapter-marker">
<span className="text-xs font-medium uppercase tracking-widest t-accent mb-2 block chapter-number">Chapter 03</span>
<h2 className="font-space font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tighter mb-4 sm:mb-6 t-primary">
                        Characters in our <span className="gradient-text">narrative.</span>
</h2>
<p className="text-sm sm:text-base t-secondary max-w-2xl font-light leading-relaxed">
                        Every great story has unforgettable characters. These are the brands that trusted us to write their next chapter.
                    </p>
</div>
</div>
</div>

<div className="relative reveal stagger-1">
<div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10" style={{background: 'linear-gradient(to right, var(--bg), transparent)'}}></div>
<div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10" style={{background: 'linear-gradient(to left, var(--bg), transparent)'}}></div>
<div className="overflow-hidden">
<div className="flex scroll-track" style={{width: 'max-content'}}>
<div className="flex items-center gap-4 sm:gap-8 px-2 sm:px-4">
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">Physics Wallah</span>
</div>
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">Hostinger</span>
</div>
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">SpeakX</span>
</div>
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">HCL Tech</span>
</div>
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">GUVI</span>
</div>
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">Zudo</span>
</div>
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">Dry Bazaar</span>
</div>
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">GyaanE</span>
</div>
</div>
<div className="flex items-center gap-4 sm:gap-8 px-2 sm:px-4">
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">Physics Wallah</span>
</div>
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">Hostinger</span>
</div>
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">SpeakX</span>
</div>
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">HCL Tech</span>
</div>
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">GUVI</span>
</div>
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">Zudo</span>
</div>
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">Dry Bazaar</span>
</div>
<div className="glass rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6 flex items-center justify-center min-w-[150px] sm:min-w-[200px]">
<span className="font-space font-medium text-sm sm:text-lg tracking-tight t-secondary">GyaanE</span>
</div>
</div>
</div>
</div>
</div>
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
<p className="reveal text-center text-xs sm:text-sm t-tertiary leading-relaxed font-light">
                From industry giants commanding audiences of over 1 million to innovative startups — we help brands amplify their story, attract loyal customers, and build a powerful digital presence.
            </p>
</div>
</section>

<section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden" id="chapter-4">
<div className="section-divider"></div>
<div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl float-slow" style={{background: 'rgba(236,72,153,0.08)'}}></div>
<div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl float" style={{background: 'var(--gradient-1)'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">

<div className="reveal-left order-2 lg:order-1 relative">
<div className="glass-light rounded-2xl sm:rounded-3xl p-1">
<div className="rounded-[18px] sm:rounded-[20px] p-6 sm:p-10 lg:p-14 relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(139,92,246,0.08), var(--bg), rgba(99,102,241,0.08))'}}>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6 sm:mb-8">
<div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-xs font-medium uppercase tracking-widest t-tertiary">Now Streaming</span>
</div>
<div className="font-space font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tighter mb-2 gradient-text-warm">
                                    The Shubook Show
                                </div>
<p className="text-xs sm:text-sm t-tertiary mb-8 sm:mb-10">Business · Self Development · Astrology</p>

<div className="flex items-end gap-1 h-16 sm:h-20 mb-8 sm:mb-10">
<div className="w-1 sm:w-1.5 rounded-full" style={{height: '30%', background: 'var(--accent)', opacity: '0.6', animation: 'float 1.2s ease-in-out infinite'}}></div>
<div className="w-1 sm:w-1.5 rounded-full" style={{height: '60%', background: 'var(--accent)', opacity: '0.8', animation: 'float 1.4s ease-in-out infinite 0.1s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full" style={{height: '90%', background: 'var(--accent)', animation: 'float 1s ease-in-out infinite 0.2s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full" style={{height: '45%', background: 'var(--accent)', opacity: '0.7', animation: 'float 1.3s ease-in-out infinite 0.3s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full" style={{height: '75%', background: 'var(--accent)', opacity: '0.9', animation: 'float 1.1s ease-in-out infinite 0.4s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full" style={{height: '35%', background: 'var(--accent)', opacity: '0.5', animation: 'float 1.5s ease-in-out infinite 0.5s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full" style={{height: '65%', background: 'var(--accent)', opacity: '0.8', animation: 'float 1.2s ease-in-out infinite 0.6s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full" style={{height: '100%', background: 'var(--accent)', animation: 'float 1s ease-in-out infinite 0.7s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full" style={{height: '50%', background: 'var(--accent)', opacity: '0.6', animation: 'float 1.4s ease-in-out infinite 0.8s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full" style={{height: '80%', background: 'var(--accent)', opacity: '0.9', animation: 'float 1.1s ease-in-out infinite 0.9s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full" style={{height: '25%', background: 'var(--accent)', opacity: '0.4', animation: 'float 1.6s ease-in-out infinite 1s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full" style={{height: '55%', background: 'var(--accent)', opacity: '0.7', animation: 'float 1.3s ease-in-out infinite 0.15s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full" style={{height: '70%', background: 'var(--accent)', opacity: '0.85', animation: 'float 1.2s ease-in-out infinite 0.25s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full" style={{height: '40%', background: 'var(--accent)', opacity: '0.5', animation: 'float 1.5s ease-in-out infinite 0.35s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full" style={{height: '95%', background: 'var(--accent)', animation: 'float 1s ease-in-out infinite 0.45s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full hidden sm:block" style={{height: '30%', background: 'var(--accent)', opacity: '0.6', animation: 'float 1.4s ease-in-out infinite 0.55s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full hidden sm:block" style={{height: '60%', background: 'var(--accent)', opacity: '0.8', animation: 'float 1.1s ease-in-out infinite 0.65s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full hidden sm:block" style={{height: '50%', background: 'var(--accent)', opacity: '0.7', animation: 'float 1.3s ease-in-out infinite 0.75s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full hidden sm:block" style={{height: '85%', background: 'var(--accent)', opacity: '0.9', animation: 'float 1.2s ease-in-out infinite 0.85s'}}></div>
<div className="w-1 sm:w-1.5 rounded-full hidden sm:block" style={{height: '20%', background: 'var(--accent)', opacity: '0.4', animation: 'float 1.6s ease-in-out infinite 0.95s'}}></div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3 sm:gap-4">
<button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center" style={{background: 'var(--text-primary)'}}>
<iconify-icon height="18" icon="solar:play-bold" style={{color: 'var(--bg)'}} width="18"></iconify-icon>
</button>
<div>
<div className="text-xs sm:text-sm font-medium t-primary">Episode 52</div>
<div className="text-xs t-tertiary">Latest Episode</div>
</div>
</div>
<div className="text-xs t-muted">01:24:36</div>
</div>
</div>
<div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-2xl" style={{background: 'var(--accent-glow)'}}></div>
<div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-2xl" style={{background: 'rgba(236,72,153,0.06)'}}></div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="reveal">
<div className="chapter-marker">
<span className="text-xs font-medium uppercase tracking-widest t-accent mb-2 block chapter-number">Chapter 04</span>
<h2 className="font-space font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tighter leading-tight t-primary">
                                Learn from<br/><span className="gradient-text-warm">extraordinary</span> lives.
                            </h2>
</div>
</div>
<div className="reveal stagger-1 space-y-5 sm:space-y-6 mt-6 sm:mt-8">
<p className="text-sm sm:text-base t-secondary leading-relaxed font-light">
<span className="font-space font-medium t-primary">Some stories deserve to be heard.</span> The Shubook Show is a premium podcast featuring deep conversations with India's top entrepreneurs, influencers, and thought leaders.
                        </p>
<p className="text-sm sm:text-base t-secondary leading-relaxed font-light">
                            Covering the intersections of <span className="t-primary font-medium">Business</span>, <span className="t-primary font-medium">Self Development</span>, and <span className="t-primary font-medium">Astrology</span> — it's not just a podcast, it's a journey of transformation.
                        </p>
</div>
<div className="reveal stagger-2 flex flex-wrap items-center gap-3 mt-8 sm:mt-10">
<a className="btn-primary px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium flex items-center gap-2" href="#">
<iconify-icon height="16" icon="solar:music-note-2-linear" width="16"></iconify-icon>
                            Listen on Spotify
                        </a>
<a className="btn-outline px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium flex items-center gap-2" href="#">
<iconify-icon height="16" icon="solar:play-circle-linear" width="16"></iconify-icon>
                            Watch on YouTube
                        </a>
</div>
<div className="reveal stagger-3 mt-8 sm:mt-10 glass rounded-xl sm:rounded-2xl p-4 sm:p-6 inline-block">
<div className="text-xs t-muted uppercase tracking-widest mb-2 sm:mb-3">The Story Continues</div>
<div className="font-space font-medium text-xl sm:text-2xl tracking-tight gradient-text">50+ episodes &amp; counting</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden">
<div className="section-divider"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="reveal mb-12 sm:mb-16 lg:mb-20">
<div className="chapter-marker">
<span className="text-xs font-medium uppercase tracking-widest t-accent mb-2 block">Interlude</span>
<h2 className="font-space font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tighter mb-4 t-primary">
                        The art of our <span className="gradient-text">process.</span>
</h2>
<p className="text-sm sm:text-base t-secondary font-light max-w-lg leading-relaxed">
                        Every masterpiece follows a method. Here's the rhythm behind every project we craft.
                    </p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 relative">

<div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px" style={{background: 'linear-gradient(to right, var(--accent-glow), var(--accent), var(--accent-glow))'}}></div>
<div className="reveal stagger-1 text-center relative">
<div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl glass flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10">
<span className="font-space font-semibold text-lg sm:text-2xl tracking-tight gradient-text">01</span>
</div>
<h3 className="font-space font-medium text-sm sm:text-lg tracking-tight mb-1 sm:mb-2 t-primary">Discovery</h3>
<p className="text-xs sm:text-sm t-tertiary font-light leading-relaxed">Understanding your brand and goals.</p>
</div>
<div className="reveal stagger-2 text-center relative">
<div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl glass flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10">
<span className="font-space font-semibold text-lg sm:text-2xl tracking-tight gradient-text">02</span>
</div>
<h3 className="font-space font-medium text-sm sm:text-lg tracking-tight mb-1 sm:mb-2 t-primary">Strategy</h3>
<p className="text-xs sm:text-sm t-tertiary font-light leading-relaxed">Crafting a tailored roadmap.</p>
</div>
<div className="reveal stagger-3 text-center relative">
<div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl glass flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10">
<span className="font-space font-semibold text-lg sm:text-2xl tracking-tight gradient-text">03</span>
</div>
<h3 className="font-space font-medium text-sm sm:text-lg tracking-tight mb-1 sm:mb-2 t-primary">Execute</h3>
<p className="text-xs sm:text-sm t-tertiary font-light leading-relaxed">Bringing vision to life.</p>
</div>
<div className="reveal stagger-4 text-center relative">
<div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl glass flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10">
<span className="font-space font-semibold text-lg sm:text-2xl tracking-tight gradient-text">04</span>
</div>
<h3 className="font-space font-medium text-sm sm:text-lg tracking-tight mb-1 sm:mb-2 t-primary">Scale</h3>
<p className="text-xs sm:text-sm t-tertiary font-light leading-relaxed">Optimizing for growth.</p>
</div>
</div>
</div>
</section>

<section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden" id="chapter-5">
<div className="section-divider"></div>
<div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, transparent, var(--accent-glow), transparent)'}}></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="reveal-scale glass rounded-2xl sm:rounded-[32px] p-8 sm:p-14 lg:p-20 text-center glow-purple relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl" style={{background: 'var(--accent-glow)'}}></div>
<div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl" style={{background: 'var(--gradient-2)'}}></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 sm:mb-8" style={{background: 'var(--surface)', border: '1px solid var(--border-light)'}}>
<iconify-icon className="t-accent" height="14" icon="solar:pen-new-square-linear" width="14"></iconify-icon>
<span className="text-xs t-secondary font-medium">Chapter 05 — Your Turn</span>
</div>
<h2 className="font-space font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tighter mb-4 sm:mb-6 leading-tight t-primary">
                        Ready to write your<br/><span className="gradient-text">next chapter?</span>
</h2>
<p className="text-sm sm:text-base t-secondary max-w-lg mx-auto mb-8 sm:mb-10 font-light leading-relaxed">
                        Every great brand has a story worth telling. Let's craft yours together. Book your free strategy call and let's begin.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
<a className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-medium flex items-center gap-2 w-full sm:w-auto justify-center" href="mailto:shubham@shubook.in">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
                            Book Free Consultation
                        </a>
<a className="btn-outline px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-medium flex items-center gap-2 w-full sm:w-auto justify-center" href="tel:+919887247112">
<iconify-icon height="16" icon="solar:phone-linear" width="16"></iconify-icon>
                            +91 9887247112
                        </a>
</div>
<a className="text-xs sm:text-sm t-tertiary hover:t-accent transition-colors flex items-center gap-2 justify-center" href="mailto:shubham@shubook.in">
<iconify-icon height="14" icon="solar:letter-linear" width="14"></iconify-icon>
                        shubham@shubook.in
                    </a>
</div>
</div>
</div>
</section>

<footer className="relative py-12 sm:py-16 lg:py-20">
<div className="section-divider"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">

<div>
<a className="font-space font-semibold text-xl sm:text-2xl tracking-tighter block mb-3 sm:mb-4 t-primary" href="#">
                        shubook<span className="t-accent">.</span>
</a>
<p className="text-xs sm:text-sm t-tertiary leading-relaxed font-light max-w-xs">
                        Premium digital agency building brands that inspire growth — in business, life, and beyond. Every brand has a story. We make sure it's worth reading.
                    </p>
</div>

<div className="grid grid-cols-2 gap-6 sm:gap-8">
<div>
<h4 className="text-xs font-medium uppercase tracking-widest t-secondary mb-3 sm:mb-4">Chapters</h4>
<div className="flex flex-col gap-2 sm:gap-3">
<a className="text-xs sm:text-sm t-tertiary hover:t-primary transition-colors" href="#chapter-1">Our Story</a>
<a className="text-xs sm:text-sm t-tertiary hover:t-primary transition-colors" href="#chapter-2">Services</a>
<a className="text-xs sm:text-sm t-tertiary hover:t-primary transition-colors" href="#chapter-3">Clients</a>
<a className="text-xs sm:text-sm t-tertiary hover:t-primary transition-colors" href="#chapter-4">Podcast</a>
</div>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest t-secondary mb-3 sm:mb-4">Legal</h4>
<div className="flex flex-col gap-2 sm:gap-3">
<a className="text-xs sm:text-sm t-tertiary hover:t-primary transition-colors" href="#">Terms</a>
<a className="text-xs sm:text-sm t-tertiary hover:t-primary transition-colors" href="#">Privacy</a>
</div>
</div>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-widest t-secondary mb-3 sm:mb-4">Connect</h4>
<div className="flex flex-col gap-2 sm:gap-3">
<a className="text-xs sm:text-sm t-tertiary hover:t-primary transition-colors flex items-center gap-2" href="mailto:shubham@shubook.in">
<iconify-icon height="14" icon="solar:letter-linear" width="14"></iconify-icon>
                            shubham@shubook.in
                        </a>
<a className="text-xs sm:text-sm t-tertiary hover:t-primary transition-colors flex items-center gap-2" href="tel:+919887247112">
<iconify-icon height="14" icon="solar:phone-linear" width="14"></iconify-icon>
                            +91 9887247112
                        </a>
</div>
<div className="flex items-center gap-3 mt-4 sm:mt-6">
<a className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors" href="#" style={{background: 'var(--surface)'}}>
<iconify-icon className="t-secondary" height="16" icon="solar:play-circle-linear" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors" href="#" style={{background: 'var(--surface)'}}>
<iconify-icon className="t-secondary" height="16" icon="solar:music-note-2-linear" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors" href="#" style={{background: 'var(--surface)'}}>
<iconify-icon className="t-secondary" height="16" icon="solar:chat-round-dots-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4" style={{borderTop: '1px solid var(--border-light)'}}>
<p className="text-xs t-muted">© 2025. All rights reserved | Shubook Labs</p>
<p className="text-xs t-muted italic">— The End is just another beginning.</p>
</div>
</div>
</footer>


    </>
  );
}
