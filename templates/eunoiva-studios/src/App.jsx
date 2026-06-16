import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


        /* --- Form Submission Logic to Tally --- */
        document.getElementById('eunoiva-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            const form = e.target;
            const btn = document.getElementById('submit-btn');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<iconify-icon icon="solar:clock-circle-linear" class="animate-spin"></iconify-icon> Sending...';
            btn.disabled = true;

            const formData = new FormData(form);

            try {
                // Submit to Tally in the background
                await fetch('https://tally.so/r/D4VAy5', {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors' // Required to prevent CORS errors since we are sending opaque POST
                });
                
                // Hide form and show success
                form.style.display = 'none';
                document.getElementById('form-success').classList.remove('hidden');
                
            } catch (error) {
                console.error('Submission error:', error);
                btn.innerHTML = 'Error. Try Again';
                btn.disabled = false;
                setTimeout(() => { btn.innerHTML = originalText; }, 3000);
            }
        });

        /* --- AI Text Reveal Engine --- */
        document.addEventListener('DOMContentLoaded', () => {
            const processTextElement = (el) => {
                if (el.classList.contains('ai-processed') || !el.textContent.trim()) return;
                
                const isHeading = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(el.tagName);
                const text = el.innerText; 
                
                if (el.children.length > 0 && !['SPAN', 'STRONG', 'B', 'I'].includes(el.children[0].tagName)) return; 

                el.classList.add('ai-content', 'ai-processed');
                el.innerHTML = '';

                if (isHeading) {
                    const chars = text.split('');
                    chars.forEach((char, index) => {
                        const span = document.createElement('span');
                        span.textContent = char;
                        span.className = 'ai-char';
                        if (char === ' ') span.innerHTML = '&nbsp;';
                        span.style.setProperty('--ai-index', index);
                        el.appendChild(span);
                    });
                } else {
                    const words = text.split(/(\s+)/); 
                    let wordIndex = 0;
                    words.forEach((word) => {
                        if (word.trim().length === 0) {
                            el.appendChild(document.createTextNode(word));
                        } else {
                            const span = document.createElement('span');
                            span.textContent = word;
                            span.className = 'ai-word';
                            span.style.setProperty('--ai-index', wordIndex);
                            el.appendChild(span);
                            wordIndex++;
                        }
                    });
                }
            };

            const selectors = [
                'h1', 'h2', 'h3', 'p', 'li', 'span.ai-observe', 'label', 'a.ai-observe', 'button .ai-observe'
            ];
            
            document.querySelectorAll(selectors.join(',')).forEach(el => {
                if(el.offsetParent === null) return;
                processTextElement(el);
            });

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('ai-active');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.ai-content, .ai-observe').forEach(el => {
                observer.observe(el);
            });
        });

        /* --- Navbar Scroll Logic --- */
        let lastScrollY = window.scrollY;
        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) {
                if (currentScrollY > lastScrollY) {
                    navbar.style.transform = 'translateY(-10px)';
                    navbar.style.opacity = '0.8';
                    navbar.classList.add('backdrop-blur-none'); 
                } else {
                    navbar.style.transform = 'translateY(0)';
                    navbar.style.opacity = '1';
                    navbar.classList.add('backdrop-blur-md');
                }
            } else {
                navbar.style.transform = 'translateY(0)';
                navbar.style.opacity = '1';
            }
            lastScrollY = currentScrollY;
        });

        /* --- Parallax Effect --- */
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const scrolled = window.scrollY;
                    document.querySelectorAll('.parallax-effect').forEach(el => {
                        const speed = el.getAttribute('data-parallax-speed') || 0.05;
                        const rect = el.getBoundingClientRect();
                        if (rect.top < window.innerHeight && rect.bottom > 0) {
                             el.style.transform = `translateY(${scrolled * speed}px)`;
                        }
                    });
                    ticking = false;
                });
                ticking = true;
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="krvLrHX3sj3cg8BHywDj"></div>

</div></div>

<div className="grid-lines">
<div className="grid-line"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line"></div>
<div className="grid-line"></div>
</div>

<div className="fixed top-0 w-full h-[100vh] pointer-events-none opacity-40 z-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_#1e1b4b_0%,_#000000_60%)]"></div>
<div className="absolute inset-0" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'0.02\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 transition-all duration-500" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">

<a className="ai-observe text-xl font-semibold tracking-widest text-white ai-hover-target uppercase" href="#">EUNOIVA</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="ai-observe hover:text-white transition-colors ai-hover-target" href="#">Home</a>
<a className="ai-observe hover:text-white transition-colors ai-hover-target" href="#about">About</a>
<a className="ai-observe hover:text-white transition-colors ai-hover-target" href="#services">Services</a>
<a className="ai-observe hover:text-white transition-colors ai-hover-target" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="ai-observe bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all ai-hover-target shadow-[0_0_15px_rgba(79,70,229,0.2)]" href="#consultation">
                    Book Consultation
                </a>
</div>
</div>
</nav>

<section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="section-number top-32 right-6 md:right-12">01</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-16">

<div className="lg:w-7/12 parallax-effect" data-parallax-speed="0.05">
<div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 ai-observe">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-white/80 uppercase tracking-widest">Strategy Led Agency</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 text-white ai-observe ai-hover-target">
                        We Engineer<br/>
                        Narrative Power.
                    </h1>
<p className="text-lg lg:text-xl text-neutral-400 mb-10 max-w-xl leading-relaxed ai-observe">
                        Luxury marketing systems designed for clarity, distribution, and measurable growth.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[animationIn_0.8s_1s_forwards] blur-sm filter" style={{animationFillMode: 'forwards'}}>
<a className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-base ai-hover-target shadow-lg shadow-indigo-500/20" href="#consultation">
                            Book a Consultation <iconify-icon className="w-5 h-5" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-base ai-hover-target" href="#services">
                            Explore Services
                        </a>
</div>
</div>

<div className="lg:w-4/12 flex flex-col gap-10 border-l border-neutral-800 pl-8 lg:pl-12 py-4 parallax-effect" data-parallax-speed="0.02">
<div className="space-y-8">
<div className="ai-observe group">
<h3 className="text-indigo-400 text-xs font-semibold mb-2 uppercase tracking-widest flex items-center gap-2"><iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon> Narrative</h3>
<p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                                Brand positioning and narrative strategy built for intelligence, clarity, and long term vision.
                            </p>
</div>
<div className="ai-observe group">
<h3 className="text-indigo-400 text-xs font-semibold mb-2 uppercase tracking-widest flex items-center gap-2"><iconify-icon icon="solar:share-linear" strokeWidth="1.5"></iconify-icon> Distribution</h3>
<p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                                Content systems and multi-channel distribution designed for maximum retention and conversion.
                            </p>
</div>
<div className="ai-observe group">
<h3 className="text-indigo-400 text-xs font-semibold mb-2 uppercase tracking-widest flex items-center gap-2"><iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon> Growth</h3>
<p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                                Performance-focused digital growth connecting attention, trust, leads, and revenue.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950/30 relative border-t border-neutral-900/50 overflow-hidden" id="about">
<div className="section-number top-12 left-6 md:left-12">02</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-16 items-start parallax-effect" data-parallax-speed="0.03">
<div className="lg:col-span-5 sticky top-32">
<span className="ai-observe text-indigo-500 font-semibold text-xs tracking-widest uppercase mb-4 block">About Eunoiva</span>
<h2 className="ai-observe ai-hover-target text-4xl lg:text-5xl font-medium tracking-tight mb-6 leading-tight text-white">
                        Eunoiva represents beautiful thinking.
                    </h2>
<div className="w-12 h-1 bg-indigo-600 rounded-full mb-8 opacity-50 ai-observe"></div>
</div>
<div className="lg:col-span-7 space-y-6 text-lg text-neutral-400 leading-relaxed font-light">
<p className="ai-observe">
<strong className="text-white font-medium">Eunoiva</strong> is a strategy led digital marketing agency in India headquartered in Delhi and built for brands that want structured growth rather than random visibility.
                    </p>
<p className="ai-observe">
                        In 2026 marketing is no longer about posting more content. It is about clarity, positioning, distribution systems, and measurable performance.
                    </p>
<p className="ai-observe">
                        At Eunoiva we work as a growth partner to startups, D2C brands, and ambitious businesses across India. We specialize in brand positioning and narrative strategy, social media marketing and Instagram SEO, content systems built for retention and conversion, packaging and visual identity design, and performance focused digital growth strategy.
                    </p>
<p className="ai-observe">
                        Eunoiva does not operate as an execution only agency. Instead the focus is on building marketing systems that connect attention, trust, leads and revenue.
                    </p>
<p className="ai-observe">
                        Our approach combines brand psychology, audience behaviour, platform algorithms and structured execution to create sustainable growth rather than temporary spikes.
                    </p>
<p className="ai-observe text-indigo-300 font-medium pt-4">
                        It is the discipline of building brands with intelligence, clarity and long term vision.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-neutral-900" id="services">
<div className="section-number top-24 right-6 md:right-12">03</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 parallax-effect" data-parallax-speed="0.04">
<span className="ai-observe text-indigo-500 font-semibold text-xs tracking-widest uppercase mb-4 block">Our Expertise</span>
<h2 className="ai-observe ai-hover-target text-3xl lg:text-5xl font-medium tracking-tight mb-6 text-white">
                    Structured Growth Systems
                </h2>
<p className="ai-observe text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                    We deliver comprehensive marketing disciplines designed to establish authority and drive measurable impact.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">

<div className="fade-up-block ai-observe group relative bg-[#080808] border border-neutral-800 p-8 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)]">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
<iconify-icon className="w-6 h-6" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-6 tracking-tight text-white ai-hover-target">Social &amp; PR Services</h3>
<ul className="space-y-3">
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Social media marketing</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> PR for sports and politics</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Event management</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Brand strategy</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Pitch deck creation</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Sponsorship acquisition</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> CSR partnerships</li>
</ul>
</div>
</div>

<div className="fade-up-block ai-observe group relative bg-[#080808] border border-neutral-800 p-8 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)]">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
<iconify-icon className="w-6 h-6" icon="solar:video-frame-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-6 tracking-tight text-white ai-hover-target">Media Services</h3>
<ul className="space-y-3">
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Podcast production</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> YouTube channel management</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Interview shoots</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Studio content production</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Distribution strategy</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Audience growth systems</li>
</ul>
</div>
</div>

<div className="fade-up-block ai-observe group relative bg-[#080808] border border-neutral-800 p-8 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)]">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
<iconify-icon className="w-6 h-6" icon="solar:pallete-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-6 tracking-tight text-white ai-hover-target">Brand Development</h3>
<ul className="space-y-3">
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Brand identity design</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Logo design</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Packaging design</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Website development</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Brand guidelines</li>
</ul>
</div>
</div>

<div className="fade-up-block ai-observe group relative bg-[#080808] border border-neutral-800 p-8 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)]">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
<iconify-icon className="w-6 h-6" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-6 tracking-tight text-white ai-hover-target">Influencer Marketing</h3>
<ul className="space-y-3">
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Influencer discovery</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Campaign management</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Collaboration planning</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Performance reporting</li>
</ul>
</div>
</div>

<div className="fade-up-block ai-observe group relative bg-[#080808] border border-neutral-800 p-8 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] lg:col-span-2 xl:col-span-1">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
<iconify-icon className="w-6 h-6" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-6 tracking-tight text-white ai-hover-target">Ads Creation</h3>
<ul className="space-y-3">
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Creative ad production</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Marketing funnel strategy</li>
<li className="text-neutral-400 text-sm flex items-start gap-3"><iconify-icon className="mt-0.5 text-indigo-500/50" icon="solar:alt-arrow-right-linear"></iconify-icon> Performance campaign systems</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-neutral-900 relative bg-black/50" id="consultation">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div>
<span className="ai-observe text-indigo-500 font-semibold text-xs tracking-widest uppercase mb-4 block">Get Started</span>
<h2 className="ai-observe ai-hover-target text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-white">
                        Book a Consultation
                    </h2>
<p className="ai-observe text-lg text-neutral-400 leading-relaxed mb-10">
                        Tell us about your requirement and our team will get back to you shortly.
                    </p>
<div className="fade-up-block ai-observe">
<form className="space-y-5" id="eunoiva-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wide">Full Name</label>
<input className="w-full bg-[#0A0A0A] border border-neutral-800 text-white px-4 py-3.5 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors placeholder:text-neutral-600" name="Full Name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wide">Email Address</label>
<input className="w-full bg-[#0A0A0A] border border-neutral-800 text-white px-4 py-3.5 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors placeholder:text-neutral-600" name="Email Address" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wide">Mobile Number</label>
<input className="w-full bg-[#0A0A0A] border border-neutral-800 text-white px-4 py-3.5 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors placeholder:text-neutral-600" name="Mobile Number" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wide">Query</label>
<textarea className="w-full bg-[#0A0A0A] border border-neutral-800 text-white px-4 py-3.5 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors placeholder:text-neutral-600 resize-none" name="Query" required="" rows="4"></textarea>
</div>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-lg font-medium transition-all w-full ai-hover-target shadow-[0_0_20px_rgba(79,70,229,0.2)] flex justify-center items-center gap-2" id="submit-btn" type="submit">
                                Request Consultation <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
<div className="hidden mt-6 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 px-6 py-4 rounded-lg text-center font-medium animate-[animationIn_0.5s_ease-out_forwards]" id="form-success">
                            Thank you. Your consultation request has been received. Our team will contact you shortly.
                        </div>
</div>
</div>

<div className="lg:pl-16 lg:border-l border-neutral-800/50 flex flex-col justify-center py-8" id="contact">
<div className="w-16 h-16 rounded-2xl bg-indigo-900/20 border border-indigo-500/20 flex items-center justify-center mb-10 text-indigo-400 ai-observe">
<iconify-icon className="w-8 h-8" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-8 ai-observe">Connect with Eunoiva</h3>
<div className="space-y-8">
<div className="ai-observe">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">Location</p>
<p className="text-neutral-300 text-lg">Delhi, India</p>
</div>
<div className="ai-observe">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2">Email</p>
<a className="text-indigo-400 hover:text-indigo-300 text-lg transition-colors ai-hover-target" href="mailto:eunoivabusiness@gmail.com">eunoivabusiness@gmail.com</a>
</div>
<div className="ai-observe pt-4">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4">Social</p>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-neutral-900 hover:border-indigo-500/50 transition-all group" href="https://www.instagram.com/eunoiva.studio" rel="noopener noreferrer" target="_blank">
<iconify-icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" icon="solar:camera-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-neutral-900 hover:border-indigo-500/50 transition-all group" href="https://www.linkedin.com/company/eunoiva" rel="noopener noreferrer" target="_blank">
<iconify-icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" icon="solar:minimize-square-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] text-white pt-20 pb-10 relative z-10 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16 border-b border-neutral-900 pb-16">
<div className="ai-observe">
<div className="flex items-center gap-2 mb-4">
<span className="text-2xl font-bold tracking-widest uppercase">EUNOIVA</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed max-w-xs font-medium">
                        Narrative. Distribution. Growth
                    </p>
</div>
<div className="flex flex-wrap gap-8 md:gap-12 ai-observe">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#consultation">Book Consultation</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-600 ai-observe">
<p>© 2024 Eunoiva. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors uppercase tracking-wider" href="https://www.instagram.com/eunoiva.studio" rel="noopener noreferrer" target="_blank">Instagram</a>
<a className="hover:text-white transition-colors uppercase tracking-wider" href="https://www.linkedin.com/company/eunoiva" rel="noopener noreferrer" target="_blank">LinkedIn</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
