import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu
        const menuBtn = document.getElementById('menuBtn');
        const closeMenu = document.getElementById('closeMenu');
        const mobileMenu = document.getElementById('mobileMenu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Counter Animation
        const counters = document.querySelectorAll('.counter');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2500;
            const startTime = performance.now();
            
            const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
            
            const updateCounter = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = easeOutQuart(progress);
                
                counter.textContent = Math.floor(easedProgress * target).toLocaleString();
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };
            
            requestAnimationFrame(updateCounter);
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));

        // Scroll Reveal
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: '-50px' });

        revealElements.forEach(el => revealObserver.observe(el));

        // FAQ Accordion
        document.querySelectorAll('.faq-toggle').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('.faq-icon');
                const isOpen = content.classList.contains('open');
                
                // Close all
                document.querySelectorAll('.faq-content').forEach(c => c.classList.remove('open'));
                document.querySelectorAll('.faq-icon').forEach(i => {
                    i.setAttribute('data-icon', 'lucide:plus');
                    i.style.transform = 'rotate(0deg)';
                });
                
                if (!isOpen) {
                    content.classList.add('open');
                    icon.setAttribute('data-icon', 'lucide:minus');
                    icon.style.transform = 'rotate(180deg)';
                }
            });
        });

        // Blog Modal
        const blogModal = document.getElementById('blogModal');
        const closeModal = document.getElementById('closeModal');
        const blogTitle = document.getElementById('blogTitle');
        const blogDate = document.getElementById('blogDate');
        const blogCategory = document.getElementById('blogCategory');
        const blogContent = document.getElementById('blogContent');

        const blogData = {
            1: {
                title: 'Bangladesh Budget 2024-25: Key Tax Implications',
                date: 'January 15, 2025',
                category: 'Budget Update',
                content: `<p>The national budget for fiscal year 2024-25 has introduced several significant changes to Bangladesh's tax landscape, affecting both individual and corporate taxpayers.</p>
                <h3 class="text-lg font-semibold text-stone-200 mt-8 mb-4">Key Changes for Individuals</h3>
                <p>The tax-free income threshold remains at <strong class="text-stone-200">৳3,50,000</strong> for general taxpayers. However, the government has increased rebates for investments in various government savings certificates and bonds.</p>
                <h3 class="text-lg font-semibold text-stone-200 mt-8 mb-4">Corporate Tax Updates</h3>
                <p>Listed companies continue to enjoy reduced rates, while the government has introduced new incentives for technology and green energy sectors.</p>`
            },
            2: {
                title: 'New VAT Return Filing System: Complete Guide',
                date: 'December 28, 2024',
                category: 'VAT Guide',
                content: `<p>The National Board of Revenue (NBR) has launched an updated electronic VAT return filing system, streamlining the compliance process for businesses.</p>
                <h3 class="text-lg font-semibold text-stone-200 mt-8 mb-4">Key Features</h3>
                <p>The new system offers improved user interface, faster processing times, and enhanced security measures for taxpayer data.</p>
                <h3 class="text-lg font-semibold text-stone-200 mt-8 mb-4">Filing Requirements</h3>
                <p>All VAT-registered entities must file monthly returns by the 15th of the following month. The system now supports bulk upload of sales and purchase data.</p>`
            },
            3: {
                title: 'Tax Return Deadline Extended to January 31, 2025',
                date: 'December 10, 2024',
                category: 'Deadline Alert',
                content: `<p>The National Board of Revenue has announced an extension of the individual income tax return filing deadline to <strong class="text-stone-200">January 31, 2025</strong>.</p>
                <h3 class="text-lg font-semibold text-stone-200 mt-8 mb-4">Who Benefits</h3>
                <p>This extension applies to all individual taxpayers who were required to file returns by the original November 30, 2024 deadline.</p>
                <h3 class="text-lg font-semibold text-stone-200 mt-8 mb-4">Important Notes</h3>
                <p>While the filing deadline is extended, taxpayers are encouraged to settle any outstanding tax liability before the original deadline to avoid interest charges.</p>`
            }
        };

        document.querySelectorAll('.blog-card').forEach(card => {
            card.addEventListener('click', () => {
                const blogId = card.getAttribute('data-blog');
                const data = blogData[blogId];
                
                blogTitle.textContent = data.title;
                blogDate.textContent = data.date;
                blogCategory.textContent = data.category;
                blogContent.innerHTML = data.content;
                
                blogModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        closeModal.addEventListener('click', () => {
            blogModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        blogModal.addEventListener('click', (e) => {
            if (e.target === blogModal) {
                blogModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Magnetic Button Effect
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });

        // Parallax effect for orbs
        document.addEventListener('mousemove', (e) => {
            const orbs = document.querySelectorAll('.animate-morph');
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.02;
                const x = (window.innerWidth / 2 - e.pageX) * speed;
                const y = (window.innerHeight / 2 - e.pageY) * speed;
                orb.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
<div className="max-w-7xl mx-auto">
<div className="glass rounded-2xl px-6 py-4 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-stone-600 to-stone-800 flex items-center justify-center text-white font-bold tracking-tighter group-hover:scale-110 transition-transform duration-500">
                        S
                    </div>
<span className="text-xl font-semibold tracking-tight text-stone-200">stc</span>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="nav-link text-sm text-stone-400 hover:text-stone-200 transition-colors" href="#about">About</a>
<a className="nav-link text-sm text-stone-400 hover:text-stone-200 transition-colors" href="#expertise">Expertise</a>
<a className="nav-link text-sm text-stone-400 hover:text-stone-200 transition-colors" href="#insights">Insights</a>
<a className="nav-link text-sm text-stone-400 hover:text-stone-200 transition-colors" href="#faq">FAQ</a>
<a className="nav-link text-sm text-stone-400 hover:text-stone-200 transition-colors" href="#connect">Connect</a>
</div>
<button className="md:hidden w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors" id="menuBtn">
<svg aria-hidden="true" className="iconify text-stone-300 iconify--lucide" data-icon="lucide:menu" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<div className="modal-overlay fixed inset-0 z-50 bg-black/90 backdrop-blur-xl" id="mobileMenu">
<div className="modal-content h-full flex flex-col p-8">
<div className="flex justify-between items-center mb-16">
<span className="text-2xl font-semibold tracking-tight gradient-text">stc</span>
<button className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors" id="closeMenu">
<svg aria-hidden="true" className="iconify text-stone-300 iconify--lucide" data-icon="lucide:x" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flex flex-col gap-6">
<a className="mobile-nav-link text-3xl font-light text-stone-400 hover:text-stone-100 transition-colors" href="#about">About</a>
<a className="mobile-nav-link text-3xl font-light text-stone-400 hover:text-stone-100 transition-colors" href="#expertise">Expertise</a>
<a className="mobile-nav-link text-3xl font-light text-stone-400 hover:text-stone-100 transition-colors" href="#insights">Insights</a>
<a className="mobile-nav-link text-3xl font-light text-stone-400 hover:text-stone-100 transition-colors" href="#faq">FAQ</a>
<a className="mobile-nav-link text-3xl font-light text-stone-400 hover:text-stone-100 transition-colors" href="#connect">Connect</a>
</div>
<div className="mt-auto pt-12 border-t border-neutral-800">
<p className="text-sm text-stone-500">Dhaka, Bangladesh</p>
<p className="text-sm text-stone-500 mt-1">info@sharmatax.com.bd</p>
</div>
</div>
</div>

<section className="min-h-screen relative flex items-center justify-center overflow-hidden noise">

<div className="grid-pattern absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-stone-800/30 to-stone-900/30 rounded-full blur-3xl animate-morph animate-pulse-glow" style={{transform: 'translate(-15.38px, 2.15px)'}}></div>
<div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-amber-900/20 to-stone-900/20 rounded-full blur-3xl animate-morph animate-pulse-glow" style={{animationDelay: '2s', transform: 'translate(-30.76px, 4.3px)'}}></div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="orbit w-[600px] h-[600px] animate-rotate-slow">
<div className="orbit-dot" style={{top: '0', left: '50%', transform: 'translateX(-50%)'}}></div>
</div>
<div className="orbit animate-rotate-reverse w-[800px] h-[800px]" style={{top: '-100px', left: '-100px'}}>
<div className="orbit-dot" style={{bottom: '0', left: '50%', transform: 'translateX(-50%)'}}></div>
</div>
</div>

<div className="particle" style={{top: '20%', left: '15%', animationDelay: '0s'}}></div>
<div className="particle" style={{top: '30%', right: '20%', animationDelay: '1s'}}></div>
<div className="particle" style={{bottom: '25%', left: '25%', animationDelay: '2s'}}></div>
<div className="particle" style={{top: '60%', right: '15%', animationDelay: '3s'}}></div>
<div className="particle" style={{bottom: '40%', right: '30%', animationDelay: '4s'}}></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

<div className="overflow-hidden mb-8">
<p className="text-xs uppercase tracking-[0.3em] text-stone-500 animate-fade-up" style={{animation: 'fade-up 1s 0.2s both'}}>
<span className="inline-block w-8 h-px bg-stone-600 mr-4 align-middle"></span>
                    Established 1998 • Dhaka
                    <span className="inline-block w-8 h-px bg-stone-600 ml-4 align-middle"></span>
</p>
</div>

<div className="overflow-hidden mb-6">
<h1 className="md:text-7xl lg:text-8xl leading-none text-5xl font-bold text-stone-100 tracking-tight" style={{animation: 'fade-up 1s 0.4s both'}}>
                    Tax Advisory
                </h1>
</div>
<div className="overflow-hidden mb-8">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none" style={{animation: 'fade-up 1s 0.6s both'}}>
<span className="gradient-text">Reimagined</span>
</h1>
</div>

<div className="overflow-hidden mb-16">
<p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed font-light" style={{animation: 'fade-up 1s 0.8s both'}}>
                    Navigating Bangladesh's evolving tax landscape with precision, 
                    insight, and two decades of unwavering expertise.
                </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" style={{animation: 'fade-up 1s 1s both'}}>
<div className="glass rounded-2xl p-6 hover-lift hover-glow group">
<p className="text-4xl md:text-5xl font-bold text-stone-200 counter animate-counter-glow" data-target="26">0</p>
<p className="text-xs uppercase tracking-widest text-stone-500 mt-2 group-hover:text-stone-400 transition-colors">Years</p>
</div>
<div className="glass rounded-2xl p-6 hover-lift hover-glow group">
<p className="text-4xl md:text-5xl font-bold text-stone-200 counter animate-counter-glow" data-target="4500">0</p>
<p className="text-xs uppercase tracking-widest text-stone-500 mt-2 group-hover:text-stone-400 transition-colors">Clients</p>
</div>
<div className="glass rounded-2xl p-6 hover-lift hover-glow group">
<p className="text-4xl md:text-5xl font-bold text-stone-200 counter animate-counter-glow" data-target="99">0</p>
<p className="text-xs uppercase tracking-widest text-stone-500 mt-2 group-hover:text-stone-400 transition-colors">Accuracy %</p>
</div>
<div className="glass rounded-2xl p-6 hover-lift hover-glow group">
<p className="text-4xl md:text-5xl font-bold text-stone-200 counter animate-counter-glow" data-target="15">0</p>
<p className="text-xs uppercase tracking-widest text-stone-500 mt-2 group-hover:text-stone-400 transition-colors">Experts</p>
</div>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2" style={{animation: 'fade-up 1s 1.2s both'}}>
<div className="flex flex-col items-center gap-3">
<span className="text-xs uppercase tracking-widest text-stone-600">Scroll</span>
<div className="w-px h-16 bg-gradient-to-b from-stone-600 to-transparent relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-8 bg-stone-400" style={{animation: 'scrollLine 2s ease-in-out infinite'}}></div>
</div>
</div>
</div>
<style>
            @keyframes scrollLine {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(200%); }
            }
        </style>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="about">
<div className="absolute inset-0 grid-pattern opacity-50"></div>
<div className="max-w-7xl mx-auto relative">
<div className="grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-5">
<div className="reveal">
<p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-6 flex items-center gap-4">
<span className="w-12 h-px bg-gradient-to-r from-stone-600 to-transparent"></span>
                            Our Philosophy
                        </p>
</div>
<h2 className="reveal stagger-1 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 leading-tight mb-8">
                        Where tradition
                        <span className="block gradient-text">meets innovation</span>
</h2>
<p className="reveal stagger-2 text-stone-400 leading-relaxed mb-6 text-lg font-light">
                        Since 1998, we've been at the forefront of tax consultation in Bangladesh, 
                        guiding businesses and individuals through the complexities of fiscal regulations.
                    </p>
<p className="reveal stagger-3 text-stone-500 leading-relaxed mb-10">
                        Our approach combines deep institutional knowledge with forward-thinking 
                        strategies, ensuring our clients are always prepared for what lies ahead.
                    </p>
<div className="reveal stagger-4 flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-full text-xs font-medium bg-neutral-900 text-stone-400 border border-neutral-800">NBR Compliance</span>
<span className="px-4 py-2 rounded-full text-xs font-medium bg-neutral-900 text-stone-400 border border-neutral-800">VAT Advisory</span>
<span className="px-4 py-2 rounded-full text-xs font-medium bg-neutral-900 text-stone-400 border border-neutral-800">Corporate Tax</span>
<span className="px-4 py-2 rounded-full text-xs font-medium bg-neutral-900 text-stone-400 border border-neutral-800">International Tax</span>
</div>
</div>

<div className="lg:col-span-7 relative">
<div className="reveal-scale relative">

<div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-stone-700/20 to-transparent rounded-full blur-3xl"></div>
<div className="grid grid-cols-2 gap-6 relative z-10">
<div className="col-span-2 md:col-span-1">
<div className="border-gradient rounded-2xl p-6 hover-lift">
<svg aria-hidden="true" className="iconify text-stone-500 mb-4 iconify--lucide" data-icon="lucide:shield-check" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<h4 className="text-lg font-semibold text-stone-200 mb-2">Full Compliance</h4>
<p className="text-sm text-stone-500 leading-relaxed">100% adherence to NBR regulations and guidelines</p>
</div>
</div>
<div className="col-span-2 md:col-span-1">
<div className="border-gradient rounded-2xl p-6 hover-lift">
<svg aria-hidden="true" className="iconify text-stone-500 mb-4 iconify--lucide" data-icon="lucide:clock" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<h4 className="text-lg font-semibold text-stone-200 mb-2">Timely Filing</h4>
<p className="text-sm text-stone-500 leading-relaxed">Never miss a deadline with our proactive approach</p>
</div>
</div>
<div className="col-span-2 md:col-span-1">
<div className="border-gradient rounded-2xl p-6 hover-lift">
<svg aria-hidden="true" className="iconify text-stone-500 mb-4 iconify--lucide" data-icon="lucide:lock" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
<h4 className="text-lg font-semibold text-stone-200 mb-2">Data Security</h4>
<p className="text-sm text-stone-500 leading-relaxed">Enterprise-grade protection for all client information</p>
</div>
</div>
<div className="col-span-2 md:col-span-1">
<div className="border-gradient rounded-2xl p-6 hover-lift">
<svg aria-hidden="true" className="iconify text-stone-500 mb-4 iconify--lucide" data-icon="lucide:users" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<h4 className="text-lg font-semibold text-stone-200 mb-2">Dedicated Team</h4>
<p className="text-sm text-stone-500 leading-relaxed">Personal advisor assigned to every engagement</p>
</div>
</div>
</div>
</div>

<div className="absolute -top-6 -right-6 glass rounded-2xl p-4 animate-float">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-icon="lucide:award" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
</div>
<div>
<p className="text-sm font-semibold text-stone-200">Top Rated</p>
<p className="text-xs text-stone-500">Tax Firm 2024</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-8 border-y border-neutral-900 overflow-hidden">
<div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
<span className="text-6xl md:text-8xl font-bold text-neutral-900 tracking-tighter">Income Tax</span>
<span className="text-stone-700">✦</span>
<span className="text-6xl md:text-8xl font-bold text-neutral-900 tracking-tighter">VAT Compliance</span>
<span className="text-stone-700">✦</span>
<span className="text-6xl md:text-8xl font-bold text-neutral-900 tracking-tighter">Corporate Advisory</span>
<span className="text-stone-700">✦</span>
<span className="text-6xl md:text-8xl font-bold text-neutral-900 tracking-tighter">Audit Support</span>
<span className="text-stone-700">✦</span>
<span className="text-6xl md:text-8xl font-bold text-neutral-900 tracking-tighter">Income Tax</span>
<span className="text-stone-700">✦</span>
<span className="text-6xl md:text-8xl font-bold text-neutral-900 tracking-tighter">VAT Compliance</span>
<span className="text-stone-700">✦</span>
<span className="text-6xl md:text-8xl font-bold text-neutral-900 tracking-tighter">Corporate Advisory</span>
<span className="text-stone-700">✦</span>
<span className="text-6xl md:text-8xl font-bold text-neutral-900 tracking-tighter">Audit Support</span>
<span className="text-stone-700">✦</span>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden noise" id="expertise">
<div className="absolute inset-0 grid-pattern opacity-30"></div>

<div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-stone-800/20 to-transparent rounded-full blur-3xl"></div>
<div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-stone-800/20 to-transparent rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto relative">
<div className="text-center mb-20">
<p className="reveal text-xs uppercase tracking-[0.3em] text-stone-500 mb-6">Our Expertise</p>
<h2 className="reveal stagger-1 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 mb-6">
                    Comprehensive
                    <span className="gradient-text">Solutions</span>
</h2>
<p className="reveal stagger-2 text-stone-500 max-w-2xl mx-auto text-lg font-light">
                    Tailored services designed to meet the unique needs of Bangladesh's diverse economic landscape.
                </p>
</div>

<div className="grid grid-cols-12 gap-4 md:gap-6">

<div className="col-span-12 md:col-span-8 reveal stagger-1">
<div className="card-shine glass rounded-3xl p-8 md:p-10 h-full hover-lift hover-glow relative overflow-hidden group">
<div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-stone-700/10 to-transparent rounded-full blur-3xl group-hover:from-stone-600/20 transition-all duration-700"></div>
<div className="relative z-10">
<div className="flex items-start justify-between mb-8">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-stone-300 iconify--lucide" data-icon="lucide:file-text" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<svg aria-hidden="true" className="iconify text-stone-700 group-hover:text-stone-500 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 iconify--lucide" data-icon="lucide:arrow-up-right" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-2xl md:text-3xl font-semibold text-stone-100 mb-4 tracking-tight">Income Tax Returns</h3>
<p className="text-stone-400 leading-relaxed mb-6 max-w-xl">
                                Complete income tax filing services for individuals, partnerships, and corporations. 
                                We ensure accuracy, maximize legitimate deductions, and maintain full NBR compliance.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-xs bg-neutral-800 text-stone-400">Individual Returns</span>
<span className="px-3 py-1 rounded-full text-xs bg-neutral-800 text-stone-400">Business Returns</span>
<span className="px-3 py-1 rounded-full text-xs bg-neutral-800 text-stone-400">E-Filing</span>
<span className="px-3 py-1 rounded-full text-xs bg-neutral-800 text-stone-400">Tax Assessment</span>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-4 reveal stagger-2">
<div className="card-shine glass rounded-3xl p-8 h-full hover-lift hover-glow relative overflow-hidden group">
<div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-amber-800/10 to-transparent rounded-full blur-2xl"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-700/50 to-amber-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:receipt" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 1.5v-11"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-stone-100 mb-3 tracking-tight">VAT Services</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                                Registration, return filing, and comprehensive VAT compliance management under Bangladesh's VAT &amp; SD Act.
                            </p>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-4 reveal stagger-3">
<div className="card-shine glass rounded-3xl p-8 h-full hover-lift hover-glow relative overflow-hidden group">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-stone-300 iconify--lucide" data-icon="lucide:building-2" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-stone-100 mb-3 tracking-tight">Corporate Tax</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                            Strategic corporate tax planning, compliance, and advisory services for businesses of all sizes.
                        </p>
</div>
</div>
<div className="col-span-12 md:col-span-4 reveal stagger-4">
<div className="card-shine glass rounded-3xl p-8 h-full hover-lift hover-glow relative overflow-hidden group">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-stone-300 iconify--lucide" data-icon="lucide:scale" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-stone-100 mb-3 tracking-tight">Audit Defense</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                            Expert representation during NBR audits, assessments, and appeals proceedings.
                        </p>
</div>
</div>
<div className="col-span-12 md:col-span-4 reveal stagger-5">
<div className="card-shine glass rounded-3xl p-8 h-full hover-lift hover-glow relative overflow-hidden group">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-stone-300 iconify--lucide" data-icon="lucide:globe" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-stone-100 mb-3 tracking-tight">International Tax</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                            Cross-border taxation, transfer pricing, and DTAA compliance for multinational operations.
                        </p>
</div>
</div>

<div className="col-span-12 reveal stagger-6">
<div className="card-shine glass rounded-3xl p-8 md:p-10 hover-lift hover-glow relative overflow-hidden">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
<div className="flex items-center gap-6">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify text-stone-300 iconify--lucide" data-icon="lucide:calculator" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path></g></svg>
</div>
<div>
<h3 className="text-2xl font-semibold text-stone-100 mb-2 tracking-tight">Tax Planning &amp; Advisory</h3>
<p className="text-stone-500 max-w-xl">
                                        Proactive tax planning strategies to optimize your tax position while maintaining full compliance with Bangladesh tax laws.
                                    </p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-center px-6 py-4 rounded-2xl bg-neutral-900/50">
<p className="text-2xl font-bold text-stone-200">৳50Cr+</p>
<p className="text-xs text-stone-500 uppercase tracking-wider">Saved Annually</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="insights">
<div className="absolute inset-0 grid-pattern opacity-30"></div>
<div className="max-w-7xl mx-auto relative">
<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
<div>
<p className="reveal text-xs uppercase tracking-[0.3em] text-stone-500 mb-6">Latest Insights</p>
<h2 className="reveal stagger-1 text-4xl md:text-5xl font-bold tracking-tight text-stone-100">
                        Tax <span className="gradient-text">Intelligence</span>
</h2>
</div>
<a className="reveal stagger-2 flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors group" href="#">
<span className="text-sm">View all articles</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<article className="reveal stagger-1 blog-card group cursor-pointer" data-blog="1">
<div className="card-shine glass rounded-3xl overflow-hidden hover-lift">
<div className="aspect-[4/3] bg-gradient-to-br from-stone-800 to-stone-900 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 rounded-full bg-stone-700/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
<svg aria-hidden="true" className="iconify text-stone-500 iconify--lucide" data-icon="lucide:file-text" data-width="40" height="40" role="img" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-800/80 text-stone-300 backdrop-blur-sm">Budget Update</span>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-4 mb-4 text-xs text-stone-500">
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                                    Jan 15, 2025
                                </span>
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                                    5 min read
                                </span>
</div>
<h3 className="text-lg font-semibold text-stone-200 mb-3 group-hover:text-stone-100 transition-colors line-clamp-2">
                                Bangladesh Budget 2024-25: Key Tax Implications
                            </h3>
<p className="text-sm text-stone-500 line-clamp-2">
                                Analysis of major tax changes in the national budget and their impact on businesses and individuals.
                            </p>
</div>
</div>
</article>

<article className="reveal stagger-2 blog-card group cursor-pointer" data-blog="2">
<div className="card-shine glass rounded-3xl overflow-hidden hover-lift">
<div className="aspect-[4/3] bg-gradient-to-br from-amber-900/30 to-stone-900 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 rounded-full bg-amber-800/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
<svg aria-hidden="true" className="iconify text-amber-600 iconify--lucide" data-icon="lucide:receipt" data-width="40" height="40" role="img" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 1.5v-11"></path></g></svg>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-900/80 text-amber-300 backdrop-blur-sm">VAT Guide</span>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-4 mb-4 text-xs text-stone-500">
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                                    Dec 28, 2024
                                </span>
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                                    8 min read
                                </span>
</div>
<h3 className="text-lg font-semibold text-stone-200 mb-3 group-hover:text-stone-100 transition-colors line-clamp-2">
                                New VAT Return Filing System: Complete Guide
                            </h3>
<p className="text-sm text-stone-500 line-clamp-2">
                                Step-by-step walkthrough of the updated electronic VAT return submission process.
                            </p>
</div>
</div>
</article>

<article className="reveal stagger-3 blog-card group cursor-pointer" data-blog="3">
<div className="card-shine glass rounded-3xl overflow-hidden hover-lift">
<div className="aspect-[4/3] bg-gradient-to-br from-stone-700 to-stone-900 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 rounded-full bg-stone-600/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
<svg aria-hidden="true" className="iconify text-stone-400 iconify--lucide" data-icon="lucide:alert-circle" data-width="40" height="40" role="img" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4m0 4h.01"></path></g></svg>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-700/80 text-stone-300 backdrop-blur-sm">Deadline Alert</span>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-4 mb-4 text-xs text-stone-500">
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                                    Dec 10, 2024
                                </span>
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                                    3 min read
                                </span>
</div>
<h3 className="text-lg font-semibold text-stone-200 mb-3 group-hover:text-stone-100 transition-colors line-clamp-2">
                                Tax Return Deadline Extended to January 31, 2025
                            </h3>
<p className="text-sm text-stone-500 line-clamp-2">
                                NBR announces deadline extension for individual taxpayers. Key dates and requirements updated.
                            </p>
</div>
</div>
</article>
</div>
</div>
</section>

<div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl" id="blogModal">
<div className="modal-content glass rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden">
<div className="sticky top-0 glass border-b border-neutral-800 px-8 py-5 flex items-center justify-between z-10">
<div className="flex items-center gap-4 text-xs text-stone-500">
<span className="px-3 py-1 rounded-full bg-stone-800 text-stone-300" id="blogCategory">Category</span>
<span id="blogDate">January 15, 2025</span>
</div>
<button className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors" id="closeModal">
<svg aria-hidden="true" className="iconify text-stone-400 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="px-8 py-8 overflow-y-auto max-h-[calc(85vh-80px)]">
<h2 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-100 mb-6" id="blogTitle">Article Title</h2>
<div className="prose prose-invert prose-stone max-w-none text-stone-400 leading-relaxed space-y-4" id="blogContent">
<p>Article content goes here...</p>
</div>
</div>
</div>
</div>

<section className="py-32 px-6 relative overflow-hidden noise" id="faq">
<div className="absolute inset-0 grid-pattern opacity-30"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-stone-800/10 to-transparent rounded-full blur-3xl"></div>
<div className="max-w-4xl mx-auto relative">
<div className="text-center mb-16">
<p className="reveal text-xs uppercase tracking-[0.3em] text-stone-500 mb-6">Frequently Asked</p>
<h2 className="reveal stagger-1 text-4xl md:text-5xl font-bold tracking-tight text-stone-100 mb-6">
                    Questions <span className="gradient-text">&amp; Answers</span>
</h2>
<p className="reveal stagger-2 text-stone-500 text-lg font-light">
                    Common queries about tax filing and compliance in Bangladesh.
                </p>
</div>
<div className="space-y-4">

<div className="reveal stagger-1 faq-item glass rounded-2xl overflow-hidden hover-glow transition-all duration-500">
<button className="faq-toggle w-full px-8 py-6 flex items-center justify-between text-left group">
<span className="font-medium text-stone-200 pr-4 group-hover:text-stone-100 transition-colors">What is the income tax return filing deadline in Bangladesh?</span>
<div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-700 transition-colors">
<svg aria-hidden="true" className="iconify faq-icon text-stone-400 transition-transform duration-500 iconify--lucide" data-icon="lucide:plus" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</button>
<div className="faq-content px-8 text-stone-400 leading-relaxed">
<div className="pb-6">
                            For individual taxpayers, the deadline is typically <strong className="text-stone-300">November 30th</strong> of each year. However, NBR frequently extends this deadline. For companies, the deadline is generally within 6 months from the end of the income year or by the <strong className="text-stone-300">15th day of the 7th month</strong>, whichever is later. Always check for official notifications regarding extensions.
                        </div>
</div>
</div>

<div className="reveal stagger-2 faq-item glass rounded-2xl overflow-hidden hover-glow transition-all duration-500">
<button className="faq-toggle w-full px-8 py-6 flex items-center justify-between text-left group">
<span className="font-medium text-stone-200 pr-4 group-hover:text-stone-100 transition-colors">Who is required to submit a tax return in Bangladesh?</span>
<div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-700 transition-colors">
<svg aria-hidden="true" className="iconify faq-icon text-stone-400 transition-transform duration-500 iconify--lucide" data-icon="lucide:plus" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</button>
<div className="faq-content px-8 text-stone-400 leading-relaxed">
<div className="pb-6">
                            Any individual with a <strong className="text-stone-300">12-digit TIN (Taxpayer Identification Number)</strong> is required to submit a return. Additionally, filing is mandatory for obtaining trade licenses, importing goods, registering properties, and various other government services. Even if your income is below the taxable threshold, having a TIN necessitates filing a return.
                        </div>
</div>
</div>

<div className="reveal stagger-3 faq-item glass rounded-2xl overflow-hidden hover-glow transition-all duration-500">
<button className="faq-toggle w-full px-8 py-6 flex items-center justify-between text-left group">
<span className="font-medium text-stone-200 pr-4 group-hover:text-stone-100 transition-colors">What are the current income tax slabs in Bangladesh?</span>
<div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-700 transition-colors">
<svg aria-hidden="true" className="iconify faq-icon text-stone-400 transition-transform duration-500 iconify--lucide" data-icon="lucide:plus" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</button>
<div className="faq-content px-8 text-stone-400 leading-relaxed">
<div className="pb-6">
                            For FY 2024-25, the tax-free threshold is <strong className="text-stone-300">৳3,50,000</strong> for general taxpayers. The rates are: <strong className="text-stone-300">5%</strong> on the next ৳1,00,000; <strong className="text-stone-300">10%</strong> on the next ৳4,00,000; <strong className="text-stone-300">15%</strong> on the next ৳5,00,000; <strong className="text-stone-300">20%</strong> on the next ৳5,00,000; and <strong className="text-stone-300">25%</strong> on any amount exceeding ৳18,50,000. Women, senior citizens, and persons with disabilities have higher tax-free thresholds.
                        </div>
</div>
</div>

<div className="reveal stagger-4 faq-item glass rounded-2xl overflow-hidden hover-glow transition-all duration-500">
<button className="faq-toggle w-full px-8 py-6 flex items-center justify-between text-left group">
<span className="font-medium text-stone-200 pr-4 group-hover:text-stone-100 transition-colors">What is the minimum tax requirement in Bangladesh?</span>
<div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-700 transition-colors">
<svg aria-hidden="true" className="iconify faq-icon text-stone-400 transition-transform duration-500 iconify--lucide" data-icon="lucide:plus" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</button>
<div className="faq-content px-8 text-stone-400 leading-relaxed">
<div className="pb-6">
                            Bangladesh has a location-based minimum tax: <strong className="text-stone-300">৳5,000</strong> for Dhaka North/South and Chattogram City Corporations; <strong className="text-stone-300">৳4,000</strong> for other city corporations; and <strong className="text-stone-300">৳3,000</strong> for other areas. Even if calculated tax is lower, this minimum must be paid if you have a TIN.
                        </div>
</div>
</div>

<div className="reveal stagger-5 faq-item glass rounded-2xl overflow-hidden hover-glow transition-all duration-500">
<button className="faq-toggle w-full px-8 py-6 flex items-center justify-between text-left group">
<span className="font-medium text-stone-200 pr-4 group-hover:text-stone-100 transition-colors">What are the penalties for late tax return submission?</span>
<div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-700 transition-colors">
<svg aria-hidden="true" className="iconify faq-icon text-stone-400 transition-transform duration-500 iconify--lucide" data-icon="lucide:plus" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</button>
<div className="faq-content px-8 text-stone-400 leading-relaxed">
<div className="pb-6">
                            Late filing attracts a penalty of <strong className="text-stone-300">10% of the tax liability</strong> or <strong className="text-stone-300">৳1,000</strong>, whichever is higher. Additionally, simple interest at <strong className="text-stone-300">2% per month</strong> is charged on unpaid tax from the due date. For substantial delays, NBR may impose additional penalties and initiate prosecution proceedings.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="resources">
<div className="absolute inset-0 grid-pattern opacity-30"></div>
<div className="max-w-7xl mx-auto relative">
<div className="text-center mb-16">
<p className="reveal text-xs uppercase tracking-[0.3em] text-stone-500 mb-6">Resources</p>
<h2 className="reveal stagger-1 text-4xl md:text-5xl font-bold tracking-tight text-stone-100 mb-6">
                    Helpful <span className="gradient-text">Downloads</span>
</h2>
</div>
<div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
<a className="reveal stagger-1 card-shine glass rounded-2xl p-6 flex items-center gap-5 hover-lift hover-glow group" href="#">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600/30 to-red-800/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-red-400 iconify--lucide" data-icon="lucide:file-text" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<div className="flex-1 min-w-0">
<p className="font-medium text-stone-200 group-hover:text-stone-100 transition-colors truncate">Tax Return Checklist 2024-25</p>
<p className="text-sm text-stone-500 mt-1">PDF • 180 KB</p>
</div>
<svg aria-hidden="true" className="iconify text-stone-600 group-hover:text-stone-400 transition-colors iconify--lucide" data-icon="lucide:download" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</a>
<a className="reveal stagger-2 card-shine glass rounded-2xl p-6 flex items-center gap-5 hover-lift hover-glow group" href="#">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600/30 to-green-800/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-green-400 iconify--lucide" data-icon="lucide:table" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3v18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18M3 15h18"></path></g></svg>
</div>
<div className="flex-1 min-w-0">
<p className="font-medium text-stone-200 group-hover:text-stone-100 transition-colors truncate">Income Tax Calculator</p>
<p className="text-sm text-stone-500 mt-1">XLSX • 95 KB</p>
</div>
<svg aria-hidden="true" className="iconify text-stone-600 group-hover:text-stone-400 transition-colors iconify--lucide" data-icon="lucide:download" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</a>
<a className="reveal stagger-3 card-shine glass rounded-2xl p-6 flex items-center gap-5 hover-lift hover-glow group" href="#">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-600/30 to-amber-800/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:file-check" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M9 15l2 2l4-4"></path></g></svg>
</div>
<div className="flex-1 min-w-0">
<p className="font-medium text-stone-200 group-hover:text-stone-100 transition-colors truncate">VAT Registration Form Guide</p>
<p className="text-sm text-stone-500 mt-1">PDF • 220 KB</p>
</div>
<svg aria-hidden="true" className="iconify text-stone-600 group-hover:text-stone-400 transition-colors iconify--lucide" data-icon="lucide:download" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</a>
<a className="reveal stagger-4 card-shine glass rounded-2xl p-6 flex items-center gap-5 hover-lift hover-glow group" href="#">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-800/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:book-open" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="font-medium text-stone-200 group-hover:text-stone-100 transition-colors truncate">Investment Rebate Guide</p>
<p className="text-sm text-stone-500 mt-1">PDF • 340 KB</p>
</div>
<svg aria-hidden="true" className="iconify text-stone-600 group-hover:text-stone-400 transition-colors iconify--lucide" data-icon="lucide:download" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden noise" id="connect">
<div className="absolute inset-0 grid-pattern opacity-30"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-stone-800/10 to-transparent rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto relative">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<p className="reveal text-xs uppercase tracking-[0.3em] text-stone-500 mb-6 flex items-center gap-4">
<span className="w-12 h-px bg-gradient-to-r from-stone-600 to-transparent"></span>
                        Get in Touch
                    </p>
<h2 className="reveal stagger-1 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 leading-tight mb-8">
                        Let's discuss
                        <span className="block gradient-text">your needs</span>
</h2>
<p className="reveal stagger-2 text-stone-400 text-lg font-light mb-12 max-w-md">
                        Whether you're an individual or a corporation, we're here to provide expert guidance tailored to your situation.
                    </p>
<div className="space-y-8">
<div className="reveal stagger-3 flex items-start gap-5 group">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-stone-400 iconify--lucide" data-icon="lucide:map-pin" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<p className="font-medium text-stone-200 mb-1">Office Location</p>
<p className="text-stone-500 leading-relaxed">
                                    House 45, Road 12, Block E
                                    Banani, Dhaka 1213
                                    Bangladesh
                                </p>
</div>
</div>
<div className="reveal stagger-4 flex items-start gap-5 group">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-stone-400 iconify--lucide" data-icon="lucide:clock" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div>
<p className="font-medium text-stone-200 mb-1">Working Hours</p>
<p className="text-stone-500 leading-relaxed">
                                    Sunday – Thursday: 9:00 AM – 6:00 PM
                                    Friday – Saturday: Closed
                                </p>
</div>
</div>
<div className="reveal stagger-5 flex items-start gap-5 group">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-stone-400 iconify--lucide" data-icon="lucide:mail" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<p className="font-medium text-stone-200 mb-1">Contact</p>
<p className="text-stone-500">
                                    +880 2 8835 4567
                                    info@sharmatax.com.bd
                                </p>
</div>
</div>
</div>
</div>

<div className="reveal-right">
<div className="glass rounded-3xl p-8 md:p-10 hover-glow">
<h3 className="text-xl font-semibold text-stone-200 mb-8">Send a message</h3>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-stone-400 mb-2">Name</label>
<input className="w-full px-5 py-4 rounded-xl bg-neutral-900 border border-neutral-800 text-stone-200 placeholder-stone-600 focus:border-stone-600 focus:ring-2 focus:ring-stone-600/20 transition-all outline-none" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-400 mb-2">Email</label>
<input className="w-full px-5 py-4 rounded-xl bg-neutral-900 border border-neutral-800 text-stone-200 placeholder-stone-600 focus:border-stone-600 focus:ring-2 focus:ring-stone-600/20 transition-all outline-none" placeholder="Your email" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-stone-400 mb-2">Phone</label>
<input className="w-full px-5 py-4 rounded-xl bg-neutral-900 border border-neutral-800 text-stone-200 placeholder-stone-600 focus:border-stone-600 focus:ring-2 focus:ring-stone-600/20 transition-all outline-none" placeholder="+880" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-400 mb-2">Message</label>
<textarea className="w-full px-5 py-4 rounded-xl bg-neutral-900 border border-neutral-800 text-stone-200 placeholder-stone-600 focus:border-stone-600 focus:ring-2 focus:ring-stone-600/20 transition-all outline-none resize-none" placeholder="How can we assist you?" rows="4"></textarea>
</div>
<button className="magnetic-btn w-full py-4 bg-gradient-to-r from-stone-600 to-stone-700 rounded-xl text-stone-100 font-medium hover:from-stone-500 hover:to-stone-600 transition-all duration-500 flex items-center justify-center gap-2 group" type="submit">
                                Send Message
                                <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:send" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 px-6 border-t border-neutral-900">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a className="flex items-center gap-3 mb-6" href="#">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-stone-600 to-stone-800 flex items-center justify-center text-white font-bold text-lg tracking-tighter">
                            S
                        </div>
<span className="text-2xl font-semibold tracking-tight text-stone-200">stc</span>
</a>
<p className="text-stone-500 leading-relaxed max-w-sm mb-6">
                        Professional tax consultation and advisory services for individuals and businesses throughout Bangladesh since 1998.
                    </p>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-stone-500 hover:text-stone-300 hover:bg-neutral-800 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-stone-500 hover:text-stone-300 hover:bg-neutral-800 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-stone-500 hover:text-stone-300 hover:bg-neutral-800 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="font-medium text-stone-300 mb-6">Navigation</h4>
<ul className="space-y-4">
<li><a className="text-stone-500 hover:text-stone-300 transition-colors" href="#about">About</a></li>
<li><a className="text-stone-500 hover:text-stone-300 transition-colors" href="#expertise">Expertise</a></li>
<li><a className="text-stone-500 hover:text-stone-300 transition-colors" href="#insights">Insights</a></li>
<li><a className="text-stone-500 hover:text-stone-300 transition-colors" href="#faq">FAQ</a></li>
<li><a className="text-stone-500 hover:text-stone-300 transition-colors" href="#connect">Connect</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-300 mb-6">Services</h4>
<ul className="space-y-4">
<li><a className="text-stone-500 hover:text-stone-300 transition-colors" href="#">Income Tax</a></li>
<li><a className="text-stone-500 hover:text-stone-300 transition-colors" href="#">VAT Services</a></li>
<li><a className="text-stone-500 hover:text-stone-300 transition-colors" href="#">Corporate Tax</a></li>
<li><a className="text-stone-500 hover:text-stone-300 transition-colors" href="#">Audit Support</a></li>
<li><a className="text-stone-500 hover:text-stone-300 transition-colors" href="#">Tax Planning</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-stone-600">© 2025 Sharma Tax Consultants. All rights reserved.</p>
<div className="flex gap-6 text-sm text-stone-600">
<a className="hover:text-stone-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-stone-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
