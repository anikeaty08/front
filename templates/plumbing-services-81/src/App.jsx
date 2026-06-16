import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // Initialize Lucide Icons
            lucide.createIcons();

            // --- Scroll Reveal Animation ---
            const revealElements = document.querySelectorAll('.reveal');
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            revealElements.forEach(el => revealObserver.observe(el));

            // --- Navbar Background Change on Scroll ---
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('shadow-sm');
                    navbar.classList.replace('bg-slate-950/80', 'bg-slate-950/95');
                } else {
                    navbar.classList.remove('shadow-sm');
                    navbar.classList.replace('bg-slate-950/95', 'bg-slate-950/80');
                }
            });

            // --- Gallery Tabs ---
            const galleryTabs = document.querySelectorAll('.gallery-tab-btn');
            const galleryItems = document.querySelectorAll('.gallery-item');

            galleryTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    galleryTabs.forEach(t => {
                        t.classList.remove('bg-slate-900', 'text-white');
                        t.classList.add('bg-white', 'text-slate-600');
                    });
                    tab.classList.remove('bg-white', 'text-slate-600');
                    tab.classList.add('bg-slate-900', 'text-white');

                    const target = tab.dataset.target;

                    galleryItems.forEach(item => {
                        if (target === 'all' || item.dataset.category === target) {
                            item.style.display = 'block';
                            setTimeout(() => { item.style.opacity = '1'; }, 50);
                        } else {
                            item.style.opacity = '0';
                            setTimeout(() => { item.style.display = 'none'; }, 300);
                        }
                    });
                });
            });

            // --- Reviews Tabs ---
            const reviewTabs = document.querySelectorAll('.review-tab-btn');
            const reviewCards = document.querySelectorAll('.review-card');

            reviewTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    reviewTabs.forEach(t => {
                        t.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
                        t.classList.add('text-slate-500');
                    });
                    tab.classList.remove('text-slate-500');
                    tab.classList.add('bg-white', 'text-slate-900', 'shadow-sm');

                    const target = tab.dataset.target;

                    reviewCards.forEach(card => {
                        if (target === 'all' || card.dataset.category === target) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });

            // --- FAQ Accordion ---
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const btn = item.querySelector('.faq-btn');
                const content = item.querySelector('.faq-content');
                const icon = item.querySelector('[data-lucide]');

                btn.addEventListener('click', () => {
                    const isOpen = !content.classList.contains('hidden');
                    
                    // Close all
                    faqItems.forEach(i => {
                        i.querySelector('.faq-content').classList.add('hidden');
                        i.querySelector('[data-lucide]').classList.remove('rotate-180');
                        i.classList.remove('border-slate-300');
                    });

                    // Open if it wasn't already open
                    if (!isOpen) {
                        content.classList.remove('hidden');
                        icon.classList.add('rotate-180');
                        item.classList.add('border-slate-300');
                    }
                });
            });

            // --- Image Modal ---
            const modal = document.getElementById('image-modal');
            const modalImg = document.getElementById('modal-img');
            const closeModal = document.getElementById('close-modal');
            const galleryImages = document.querySelectorAll('.gallery-item img');

            galleryImages.forEach(img => {
                img.addEventListener('click', () => {
                    modalImg.src = img.src;
                    modal.classList.remove('hidden');
                    void modal.offsetWidth;
                    modal.classList.add('opacity-100');
                    document.body.style.overflow = 'hidden';
                });
            });

            const closeAction = () => {
                modal.classList.remove('opacity-100');
                setTimeout(() => {
                    modal.classList.add('hidden');
                    document.body.style.overflow = '';
                }, 300);
            };

            closeModal.addEventListener('click', closeAction);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeAction();
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-6 right-6 z-50 md:hidden">
<a className="flex items-center justify-center w-14 h-14 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-transform active:scale-95" href="tel:5551234567">
<i className="w-6 h-6" data-lucide="phone-call" strokeWidth="1.5"></i>
</a>
</div>

<nav className="fixed top-0 left-0 w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/10 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 text-white">
<div className="bg-orange-500 w-8 h-8 rounded-md flex items-center justify-center">
<i className="w-5 h-5" data-lucide="droplets" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-medium tracking-tight">Down The Line</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base text-slate-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-base text-slate-300 hover:text-white transition-colors" href="#work">Our Work</a>
<a className="text-base text-slate-300 hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="text-base text-slate-300 hover:text-white transition-colors" href="#area">Service Area</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-base text-slate-300 hover:text-white transition-colors" href="tel:1234567890">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
                    (555) 123-4567
                </a>
<a className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-md text-base transition-colors" href="#contact">
                    Get a Quote
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950">

<div className="absolute inset-0 z-0 opacity-40">
<img alt="Industrial pipes" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.1),transparent_40%)]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="max-w-3xl">

<div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-sm text-emerald-400">Live Status: 24/7 Emergency Teams Active</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.1] mb-6 reveal">
                    Expert NYC Sewer &amp; <br/>Drain Solutions.
                </h1>
<p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl reveal">
                    5+ Years of Excellence. 24/7 Emergency Service. Local &amp; Trusted across the five boroughs.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12 reveal">
<a className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-base transition-colors text-center flex items-center justify-center gap-2" href="#contact">
                        Get a Quote
                        <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-md text-base transition-colors text-center flex items-center justify-center gap-2" href="tel:5551234567">
                        Call Now
                        <i className="w-4 h-4" data-lucide="phone-call" strokeWidth="1.5"></i>
</a>
</div>

<div className="flex flex-wrap items-center gap-6 md:gap-10 pt-8 border-t border-white/10 reveal">
<div className="flex items-center gap-3">
<div className="flex text-orange-500">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div className="text-sm">
<span className="text-white font-medium block">4.9 Star Rating</span>
<span className="text-slate-400">144+ Reviews</span>
</div>
</div>
<div className="w-px h-8 bg-white/10 hidden sm:block"></div>
<div className="flex items-center gap-3">
<div className="bg-blue-600 rounded-full p-1.5 w-7 h-7 flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<div className="text-sm">
<span className="text-white font-medium block">Google Guaranteed</span>
<span className="text-slate-400">Fully Licensed &amp; Insured</span>
</div>
</div>
<div className="w-px h-8 bg-white/10 hidden lg:block"></div>
<div className="flex items-center gap-2 text-sm text-slate-300 bg-white/5 rounded-full px-4 py-2 border border-white/5">
<i className="w-4 h-4 text-orange-500" data-lucide="timer" strokeWidth="1.5"></i>
                        Typically replies in 15 minutes
                    </div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex md:items-end md:justify-between reveal">
<div className="max-w-2xl">
<span className="text-orange-500 tracking-wide uppercase text-sm mb-3 block">Specialized Expertise</span>
<h2 className="text-4xl md:text-5xl font-medium text-slate-950 tracking-tight mb-4">
                        Precision plumbing for complex NYC systems.
                    </h2>
<p className="text-lg text-slate-500">
                        From historic brownstones to modern high-rises, we bring specialized equipment and deep local knowledge to every job.
                    </p>
</div>
<div className="mt-6 md:mt-0">
<a className="text-base text-slate-900 flex items-center gap-2 hover:text-orange-500 transition-colors" href="#contact">
                        View all services
                        <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
<i className="w-6 h-6" data-lucide="droplet" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-950 mb-3">Sewer Cleaning</h3>
<p className="text-base text-slate-500 leading-relaxed mb-6">Deep cleaning of main sewer lines to remove roots, grease, and heavy blockages preventing backups.</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-500" data-lucide="check-circle" strokeWidth="1.5"></i> Camera Inspection</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-500" data-lucide="check-circle" strokeWidth="1.5"></i> Root Removal</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
<i className="w-6 h-6 transform rotate-90" data-lucide="git-commit" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-950 mb-3">Drain Snaking</h3>
<p className="text-base text-slate-500 leading-relaxed mb-6">Targeted removal of localized clogs in sinks, tubs, and floor drains using professional-grade augers.</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-500" data-lucide="check-circle" strokeWidth="1.5"></i> Slop Sink Clearing</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-500" data-lucide="check-circle" strokeWidth="1.5"></i> Tub &amp; Shower Drains</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
<i className="w-6 h-6" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-950 mb-3">Pipe Repair</h3>
<p className="text-base text-slate-500 leading-relaxed mb-6">Expert repair or replacement of leaking, frozen, or burst pipes common in older NYC infrastructure.</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-500" data-lucide="check-circle" strokeWidth="1.5"></i> Copper &amp; PVC</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-500" data-lucide="check-circle" strokeWidth="1.5"></i> Frozen Pipe Thawing</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
<i className="w-6 h-6" data-lucide="waves" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-950 mb-3">Hydro-jetting</h3>
<p className="text-base text-slate-500 leading-relaxed mb-6">High-pressure water scouring to completely clear severe scale, grease, and debris from commercial lines.</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-500" data-lucide="check-circle" strokeWidth="1.5"></i> Restaurant Grease Lines</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><i className="w-4 h-4 text-orange-500" data-lucide="check-circle" strokeWidth="1.5"></i> Preventative Maintenance</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 md:col-span-2 lg:col-span-2 relative overflow-hidden reveal">
<div className="absolute top-0 right-0 p-8 opacity-5 text-white">
<i className="w-48 h-48" data-lucide="alert-triangle" strokeWidth="1.5"></i>
</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-orange-500/20">
                            24/7 Priority Response
                        </div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">Emergency Plumbing</h3>
<p className="text-base text-slate-400 leading-relaxed max-w-md mb-8">
                            Water heater failure? Active leak? Main line backup? We dispatch immediately. Our trucks are fully stocked to handle most emergencies on the first visit.
                        </p>
<a className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-base transition-colors" href="tel:5551234567">
                            Dispatch Plumber Now
                            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 text-center reveal">
<h2 className="text-4xl font-medium text-slate-950 tracking-tight mb-4">Proof of Quality</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">Real work, real equipment, real results. Browse our recent jobs across New York City.</p>
</div>

<div className="flex justify-center gap-2 mb-10 reveal">
<button className="gallery-tab-btn active px-5 py-2.5 rounded-full text-base transition-colors bg-slate-900 text-white" data-target="all">All</button>
<button className="gallery-tab-btn px-5 py-2.5 rounded-full text-base transition-colors bg-white text-slate-600 border border-slate-200 hover:bg-slate-100" data-target="before-after">Before &amp; After</button>
<button className="gallery-tab-btn px-5 py-2.5 rounded-full text-base transition-colors bg-white text-slate-600 border border-slate-200 hover:bg-slate-100" data-target="equipment">Equipment &amp; Fleet</button>
</div>

<div className="masonry-grid reveal" id="gallery-grid">

<div className="masonry-item gallery-item group relative rounded-xl overflow-hidden cursor-zoom-in border border-slate-200" data-category="equipment">
<img alt="Plumber using a mechanical drain snake to clear a floor sink drain" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<span className="text-white text-base font-medium">Floor Sink Snaking</span>
</div>
</div>

<div className="masonry-item gallery-item group relative rounded-xl overflow-hidden cursor-zoom-in border border-slate-200" data-category="before-after">
<img alt="Newly installed black cast iron and PVC drain pipes with heavy-duty couplings against a stone basement wall" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<span className="text-white text-base font-medium">Basement Pipe Replacement</span>
</div>
</div>

<div className="masonry-item gallery-item group relative rounded-xl overflow-hidden cursor-zoom-in border border-slate-200" data-category="equipment">
<img alt="Plumbing tools" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<span className="text-white text-base font-medium">Hydro-jetting Equipment</span>
</div>
</div>

<div className="masonry-item gallery-item group relative rounded-xl overflow-hidden cursor-zoom-in border border-slate-200" data-category="before-after">
<img alt="Clean basement pipes" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<span className="text-white text-base font-medium">Main Line Installation</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
<div>
<h2 className="text-4xl font-medium text-slate-950 tracking-tight mb-4">Don't just take our word for it.</h2>
<p className="text-lg text-slate-500">Read what your neighbors have to say about Sal and the team.</p>
</div>

<div className="flex gap-2 bg-slate-100 p-1.5 rounded-lg self-start">
<button className="review-tab-btn active px-5 py-2 rounded-md text-base bg-white text-slate-900 shadow-sm transition-all" data-target="all">All</button>
<button className="review-tab-btn px-5 py-2 rounded-md text-base text-slate-500 hover:text-slate-900 transition-all" data-target="sewer">Sewer/Drain</button>
<button className="review-tab-btn px-5 py-2 rounded-md text-base text-slate-500 hover:text-slate-900 transition-all" data-target="emergency">Emergency</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6" id="reviews-container">

<div className="review-card p-8 rounded-xl bg-slate-50 border border-slate-200 reveal" data-category="sewer">
<div className="flex text-orange-500 mb-5">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-700 mb-6 leading-relaxed line-clamp-4">
                        "Sal did an amazing job de-clogging sink pipes. We had a persistent issue that others couldn't fix, but he found the root cause immediately and cleared it out. Highly recommend!"
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600">M</div>
<div>
<p className="text-sm font-medium text-slate-900">Michael R.</p>
<p className="text-sm text-slate-500">Google Review • 2 weeks ago</p>
</div>
</div>
</div>

<div className="review-card p-8 rounded-xl bg-slate-50 border border-slate-200 reveal" data-category="all">
<div className="flex text-orange-500 mb-5">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-700 mb-6 leading-relaxed line-clamp-4">
                        "Honest pricing and followed through on his word. Hard to find reliable contractors in the city, but Down The Line is top tier. Showed up on time and left the area spotless."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600">S</div>
<div>
<p className="text-sm font-medium text-slate-900">Sarah T.</p>
<p className="text-sm text-slate-500">Google Review • 1 month ago</p>
</div>
</div>
</div>

<div className="review-card p-8 rounded-xl bg-slate-50 border border-slate-200 reveal" data-category="emergency">
<div className="flex text-orange-500 mb-5">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base text-slate-700 mb-6 leading-relaxed line-clamp-4">
                        "Quick response for washing machine slop sink clogs. It was overflowing on a Sunday evening, they picked up right away and were here within an hour. Saved my basement!"
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600">D</div>
<div>
<p className="text-sm font-medium text-slate-900">David C.</p>
<p className="text-sm text-slate-500">Google Review • 2 months ago</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="area">

<div className="absolute inset-0 opacity-10 map-pattern pointer-events-none"></div>
<div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none hidden lg:block">

<svg className="w-full h-full text-orange-500 fill-current" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M45.7,-76.3C58.9,-69.3,69.1,-55.3,77.3,-40.7C85.5,-26.1,91.7,-11,88.7,2.5C85.7,16,73.5,27.9,62.1,38.5C50.7,49.1,40.1,58.4,27.4,66.1C14.7,73.8,0,79.9,-14.2,78.8C-28.4,77.7,-42.1,69.4,-54.2,59C-66.3,48.6,-76.8,36.1,-82.9,21.3C-89,6.5,-90.7,-10.6,-84.3,-24.8C-77.9,-39,-63.4,-50.3,-49.1,-57.1C-34.8,-63.9,-20.7,-66.2,-4.5,-59.5C11.7,-52.8,23.4,-37.1,32.5,-83.3Z" transform="translate(100 100) scale(1.1)"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 bg-white/5 text-white text-sm px-4 py-1.5 rounded-full mb-6 border border-white/10">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
                    Specialized Service Area Business
                </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                    Dedicated to the Five Boroughs.
                </h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
                    We understand New York plumbing. From pre-war building retrofits to managing complex brownstone piping systems, our local expertise ensures your job is done to code, the first time.
                </p>
<div className="grid grid-cols-2 gap-y-5 gap-x-8 mb-8">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-orange-500" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-base">Manhattan</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-orange-500" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-base">Brooklyn</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-orange-500" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-base">Queens</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-orange-500" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-base">The Bronx</span>
</div>
</div>
</div>

<div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-10 rounded-2xl shadow-2xl reveal">
<div className="flex items-start justify-between mb-8">
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-1.5">Down The Line Sewer Drains</h3>
<p className="text-sm text-slate-400">Mobile Service Unit • Identifies as Black-owned</p>
</div>
<div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-white">
<i className="w-6 h-6" data-lucide="git-merge" strokeWidth="1.5"></i>
</div>
</div>
<div className="space-y-5 mb-8">
<div className="flex items-center gap-4 text-base text-slate-300">
<i className="w-5 h-5 text-slate-500" data-lucide="clock" strokeWidth="1.5"></i>
<span>Open 24/7 for Emergencies</span>
</div>
<div className="flex items-center gap-4 text-base text-slate-300">
<i className="w-5 h-5 text-slate-500" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Servicing NYC Metro Area</span>
</div>
</div>
<div className="bg-white/5 rounded-xl p-5 border border-white/5">
<p className="text-sm text-slate-400 mb-3">Current Service Status</p>
<div className="flex items-center gap-3">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
</span>
<span className="text-base text-white">Trucks active in Brooklyn &amp; Queens</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

<div className="reveal">
<h2 className="text-4xl font-medium text-slate-950 tracking-tight mb-3">Common Questions</h2>
<p className="text-base text-slate-500 mb-10">NYC plumbing issues can be stressful. We're here to clarify.</p>
<div className="space-y-4" id="faq-container">

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden faq-item transition-all duration-300">
<button className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none faq-btn group">
<span className="font-medium text-base text-slate-900">Do you handle frozen pipes in old buildings?</span>
<i className="w-5 h-5 text-slate-400 transition-transform duration-300 transform group-hover:text-slate-600" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="px-6 pb-5 text-base text-slate-500 hidden faq-content leading-relaxed">
                            Yes. Old NYC buildings are notorious for poor insulation leading to frozen pipes. We use safe, professional thawing machines to restore flow without risking pipe bursts or fire hazards.
                        </div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden faq-item transition-all duration-300">
<button className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none faq-btn group">
<span className="font-medium text-base text-slate-900">What causes main line clogs in brownstones?</span>
<i className="w-5 h-5 text-slate-400 transition-transform duration-300 transform group-hover:text-slate-600" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="px-6 pb-5 text-base text-slate-500 hidden faq-content leading-relaxed">
                            In historical homes like brownstones, the original clay or cast-iron pipes often suffer from tree root intrusion or sediment buildup over decades. We offer camera inspections and hydro-jetting to clear these effectively.
                        </div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden faq-item transition-all duration-300">
<button className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none faq-btn group">
<span className="font-medium text-base text-slate-900">Are there fees for emergency calls?</span>
<i className="w-5 h-5 text-slate-400 transition-transform duration-300 transform group-hover:text-slate-600" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="px-6 pb-5 text-base text-slate-500 hidden faq-content leading-relaxed">
                            We provide transparent pricing before any work begins. While after-hours dispatches have a standard service call rate, we apply that cost toward your repair if you choose to proceed. No hidden NYC fees.
                        </div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 p-8 md:p-12 rounded-2xl shadow-sm reveal">
<h3 className="text-3xl font-medium tracking-tight text-slate-950 mb-3">Request Service</h3>
<p className="text-slate-500 text-base mb-10">Fill out the form below or call us for immediate response.</p>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Form submitted!');">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm text-slate-700">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-base focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Sal" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm text-slate-700">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-base focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm text-slate-700">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-base focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="(555) 000-0000" required="" type="tel"/>
</div>
<div className="space-y-2 relative">
<label className="text-sm text-slate-700">Service Needed</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-base focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors appearance-none">
<option>General Plumbing</option>
<option>Sewer / Drain Clearing</option>
<option>Emergency Leak</option>
<option>Hydro-jetting</option>
</select>
<i className="absolute right-4 top-[38px] w-5 h-5 text-slate-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-sm text-slate-700">Borough / Neighborhood</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-base focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="e.g. Astoria, Queens" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm text-slate-700">Describe the Issue</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-base focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none" placeholder="Water backing up in the basement slop sink..." required="" rows="4"></textarea>
</div>

<label className="flex items-start gap-4 cursor-pointer custom-checkbox mt-4">
<div className="relative flex items-center mt-1">
<input className="sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded bg-white transition-colors flex items-center justify-center">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<span className="text-sm text-slate-600 leading-relaxed">This is an urgent emergency. I need immediate dispatch.</span>
</label>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-md mt-6 transition-colors text-base" type="submit">
                        Submit Request
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div className="space-y-6">
<div className="flex items-center gap-3">
<div className="bg-orange-500 w-10 h-10 rounded-md flex items-center justify-center text-white">
<i className="w-6 h-6" data-lucide="droplets" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-medium tracking-tight text-white">Down The Line</span>
</div>
<p className="text-slate-400 text-base leading-relaxed">
                        Professional, honest, and ultra-reliable sewer, drain, and piping solutions for the five boroughs.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<i className="w-5 h-5" data-lucide="map" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<i className="w-5 h-5" data-lucide="camera" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div>
<h4 className="font-medium text-white mb-6 text-base">Why NYC Trusts Us</h4>
<p className="text-base text-slate-400 leading-relaxed">
                        We specialize in the unique challenges of NYC infrastructure. From navigating tight brownstone basements to updating century-old pre-war piping, we bring honesty and expertise to every job.
                    </p>
</div>

<div>
<h4 className="font-medium text-white mb-6 text-base">Neighborhoods We Serve</h4>
<ul className="space-y-4 text-base text-slate-400">
<li>Upper East Side</li>
<li>Astoria</li>
<li>Williamsburg</li>
<li>The Heights</li>
<li className="pt-3 text-sm text-slate-500 italic">+ All areas across Manhattan, Brooklyn, Queens &amp; Bronx.</li>
</ul>
</div>

<div>
<h4 className="font-medium text-white mb-6 text-base">Contact Info</h4>
<ul className="space-y-5 text-base text-slate-400">
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-orange-500">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
</div>
                            (555) 123-4567
                        </li>
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-orange-500">
<i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i>
</div>
                            service@downthelineplumbing.nyc
                        </li>
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-orange-500">
<i className="w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i>
</div>
                            24/7 Emergency Service
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-slate-500">© 2024 Down The Line Sewer Drains And Piping LLC. All Rights Reserved.</p>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] bg-slate-950/80 hidden flex-items-center justify-center p-6 opacity-0 transition-opacity duration-300" id="image-modal">
<div className="relative max-w-5xl w-full h-full flex items-center justify-center">
<button className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors" id="close-modal">
<i className="w-6 h-6" data-lucide="x-circle" strokeWidth="1.5"></i>
</button>
<img alt="Expanded work" className="max-h-[90vh] max-w-full rounded-xl shadow-2xl object-contain" id="modal-img" src=""/>
</div>
</div>



    </>
  );
}
