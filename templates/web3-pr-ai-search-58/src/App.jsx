import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
background: '#0C0C14',
primary: '#6366F1', // Indigo
secondary: '#A855F7', // Purple
accent: '#06B6D4', // Cyan
surface: 'rgba(255, 255, 255, 0.05)',
border: 'rgba(255, 255, 255, 0.1)',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Satoshi', 'sans-serif'],
},
animation: {
'blob': 'blob 10s infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            // Mobile Menu Toggle
            const menuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('flex');
            });

            // Accordion Functionality
            const faqBtns = document.querySelectorAll('.faq-btn');
            
            faqBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const content = btn.nextElementSibling;
                    const icon = btn.querySelector('.faq-icon');
                    
                    // Toggle current content
                    content.classList.toggle('hidden');
                    
                    // Rotate icon
                    if (content.classList.contains('hidden')) {
                        icon.style.transform = 'rotate(0deg)';
                    } else {
                        icon.style.transform = 'rotate(180deg)';
                    }
                });
            });

            // Scroll Animation Observer
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });

            // Counter Animation
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counters = entry.target.querySelectorAll('.counter');
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const duration = 2000; // 2 seconds
                            const increment = target / (duration / 16); // 60fps
                            
                            let current = 0;
                            const updateCounter = () => {
                                current += increment;
                                if (current < target) {
                                    counter.innerText = Math.ceil(current);
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            updateCounter();
                        });
                        counterObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            const pricingSection = document.getElementById('pricing');
            if(pricingSection) {
                counterObserver.observe(pricingSection);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="font-heading font-bold text-xl tracking-tighter text-white group-hover:text-indigo-400 transition-colors">
                    SP Signal PR
                </div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#why-us">Why Us</a>
<a className="hover:text-white transition-colors" href="#case-studies">Case Studies</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>

<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:scale-105 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]" href="https://calendly.com/" target="_blank">
                    Book a Call
                </a>
</div>

<button className="md:hidden text-white" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden absolute top-20 left-0 w-full bg-[#0C0C14] border-b border-white/10 p-6 flex-col gap-4 shadow-2xl" id="mobile-menu">
<a className="text-gray-300 hover:text-white py-2" href="#services">Services</a>
<a className="text-gray-300 hover:text-white py-2" href="#why-us">Why Us</a>
<a className="text-gray-300 hover:text-white py-2" href="#case-studies">Case Studies</a>
<a className="text-gray-300 hover:text-white py-2" href="#faq">FAQ</a>
<a className="text-indigo-400 font-medium py-2" href="https://calendly.com/" target="_blank">Book a Call →</a>
</div>
</nav>

<section className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center">

<div className="reveal inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Web3 PR + AI Search Optimization
            </div>

<h1 className="reveal delay-100 text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
<span className="text-gradient">Be Visible</span><br/>
<span className="text-white text-3xl md:text-5xl font-medium tracking-tight">in ChatGPT, Perplexity &amp; Traditional Media</span>
</h1>

<p className="reveal delay-200 text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                First Web3 agency combining strategic PR with LLM optimization. Get your project in front of decision-makers through AI search engines and premium media outlets.
            </p>

<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="group w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2" href="https://calendly.com/" target="_blank">
                    Schedule Strategy Call
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center justify-center" href="#services">
                    Explore Services
                </a>
</div>

<div className="reveal delay-400 flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-gray-400 border-t border-white/5 pt-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
<span>DFI Conference Speaker</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-purple-400" icon="solar:check-circle-linear"></iconify-icon>
<span>Web3 Tokenization Expert</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon>
<span>AI Search Specialists</span>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="reveal text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4">Why We're Different</h2>
<p className="text-gray-400 max-w-2xl mx-auto">Bridging the gap between traditional finance credibility and Web3 innovation.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="reveal glass-card rounded-2xl p-8 group hover:scale-[1.02] transition-transform duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.1)]">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:rotate-12 transition-transform duration-300 border border-indigo-500/20">
<iconify-icon height="24" icon="solar:megaphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl mb-3 text-white">Strategic PR for Web3</h3>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Get your Web3 project featured in top-tier media outlets. We handle press releases, media relations, and thought leadership positioning.
                    </p>
<a className="inline-flex items-center text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="reveal delay-100 glass-card rounded-2xl p-8 group hover:scale-[1.02] transition-transform duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:rotate-12 transition-transform duration-300 border border-purple-500/20">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl mb-3 text-white">AI Search Optimization</h3>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Be visible in ChatGPT, Perplexity, Claude and other LLM search engines. We optimize your content for AI-powered discovery.
                    </p>
<a className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="reveal delay-200 glass-card rounded-2xl p-8 group hover:scale-[1.02] transition-transform duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]">
<div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:rotate-12 transition-transform duration-300 border border-cyan-500/20">
<iconify-icon height="24" icon="solar:plain-stack-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl mb-3 text-white">RWA Tokenization</h3>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Launch tokenized real-world assets. We handle tokenization strategy, compliance, and go-to-market execution.
                    </p>
<a className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-y border-white/5 bg-[#0C0C14]/50" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4">Our Pricing</h2>
<p className="text-xl text-indigo-400 mb-6">Custom Pricing for Every Project</p>
<p className="text-gray-400 mb-8 leading-relaxed">
                        We believe in transparent, value-based pricing. Our packages are tailored to your specific needs, whether you are an early-stage protocol or an institutional issuer.
                    </p>
<a className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg" href="https://calendly.com/" target="_blank">
                        Schedule a Consultation <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid gap-6">

<div className="reveal glass-card p-6 rounded-xl border border-indigo-500/20">
<div className="text-4xl font-bold font-heading text-white mb-1 counter-wrapper">
<span className="counter" data-target="500">0</span>+
                        </div>
<div className="text-sm text-gray-400 uppercase tracking-wider">Projects Delivered</div>
</div>

<div className="reveal delay-100 glass-card p-6 rounded-xl border border-purple-500/20">
<div className="text-4xl font-bold font-heading text-white mb-1 counter-wrapper">
                            $<span className="counter" data-target="50">0</span>M+
                        </div>
<div className="text-sm text-gray-400 uppercase tracking-wider">in Tokenized Assets</div>
</div>

<div className="reveal delay-200 glass-card p-6 rounded-xl border border-cyan-500/20">
<div className="text-4xl font-bold font-heading text-white mb-1 counter-wrapper">
<span className="counter" data-target="98">0</span>%
                        </div>
<div className="text-sm text-gray-400 uppercase tracking-wider">Client Satisfaction</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6" id="case-studies">
<div className="max-w-7xl mx-auto">
<div className="reveal mb-12">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4">Our Work</h2>
<p className="text-gray-400">Proven results in the most competitive markets.</p>
</div>
<div className="reveal glass-card rounded-2xl overflow-hidden border border-white/10 group hover:border-indigo-500/30 transition-all duration-300">
<div className="grid md:grid-cols-2 gap-0">
<div className="p-8 md:p-12 flex flex-col justify-center">
<div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6 self-start">
                            FEATURED CASE STUDY
                        </div>
<h3 className="text-3xl font-bold mb-2">DFI Conference 2024</h3>
<p className="text-xl text-gray-400 mb-6">Dubai Finance Initiative</p>
<p className="text-gray-300 mb-8 leading-relaxed">
                            We served as conference speakers and strategic advisors for the Dubai Finance Initiative Conference, helping position Web3 tokenization to institutional investors.
                        </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
<div>
<div className="text-2xl font-bold text-white">2,000+</div>
<div className="text-xs text-gray-500 uppercase mt-1">Attendees Reached</div>
</div>
<div>
<div className="text-2xl font-bold text-white">50+</div>
<div className="text-xs text-gray-500 uppercase mt-1">Media Mentions</div>
</div>
<div>
<div className="text-2xl font-bold text-white">$200M+</div>
<div className="text-xs text-gray-500 uppercase mt-1">Partnerships</div>
</div>
</div>
<a className="inline-flex items-center text-white font-medium hover:text-indigo-400 transition-colors" href="#">
                            View Case Study <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-gradient-to-br from-indigo-900/40 via-[#0C0C14] to-purple-900/40 min-h-[300px] md:min-h-full relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
<div className="relative z-10 w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 blur-[60px] opacity-40 animate-pulse"></div>
<div className="absolute z-20 text-center glass-card px-6 py-3 rounded-lg border border-white/20 transform -rotate-6">
<span className="text-sm font-bold tracking-widest text-white">TOKENIZATION</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 bg-[#0C0C14]" id="faq">
<div className="max-w-3xl mx-auto">
<div className="reveal text-center mb-12">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4">FAQ</h2>
<p className="text-gray-400">Common questions about Web3 PR &amp; AI Search.</p>
</div>
<div className="space-y-4">

<div className="reveal delay-100 glass-card rounded-xl overflow-hidden border border-white/10">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none faq-btn group">
<span className="font-medium text-lg text-white group-hover:text-indigo-400 transition-colors">What is AI Search Optimization (GEO)?</span>
<iconify-icon className="text-gray-400 transform transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        AI Search Optimization (GEO) is the practice of optimizing your content to be discovered by AI-powered search engines like ChatGPT, Perplexity, and Claude. Unlike traditional SEO which targets Google, GEO ensures your project is cited and recommended by LLMs.
                    </div>
</div>

<div className="reveal delay-100 glass-card rounded-xl overflow-hidden border border-white/10">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none faq-btn group">
<span className="font-medium text-lg text-white group-hover:text-indigo-400 transition-colors">How is this different from traditional SEO?</span>
<iconify-icon className="text-gray-400 transform transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Traditional SEO focuses on Google's algorithm. GEO focuses on LLM algorithms. While they overlap, LLMs prioritize authoritative sources, so we combine PR (media coverage) with content optimization to increase your visibility in AI search results.
                    </div>
</div>

<div className="reveal delay-100 glass-card rounded-xl overflow-hidden border border-white/10">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none faq-btn group">
<span className="font-medium text-lg text-white group-hover:text-indigo-400 transition-colors">What's included in your PR packages?</span>
<iconify-icon className="text-gray-400 transform transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Our PR packages include media relations, press release distribution, thought leadership positioning, podcast placements, and crisis management. We tailor each package to your project's stage and goals.
                    </div>
</div>

<div className="reveal delay-100 glass-card rounded-xl overflow-hidden border border-white/10">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none faq-btn group">
<span className="font-medium text-lg text-white group-hover:text-indigo-400 transition-colors">How long does a tokenization project take?</span>
<iconify-icon className="text-gray-400 transform transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Tokenization projects typically take 3-6 months from strategy to launch, depending on complexity and regulatory requirements. We handle tokenization strategy, smart contract development coordination, marketing, and go-to-market execution.
                    </div>
</div>

<div className="reveal delay-100 glass-card rounded-xl overflow-hidden border border-white/10">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none faq-btn group">
<span className="font-medium text-lg text-white group-hover:text-indigo-400 transition-colors">Do you work with early-stage projects?</span>
<iconify-icon className="text-gray-400 transform transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Yes! We work with projects at all stages, from pre-launch to established protocols. We have specialized packages for early-stage projects and can help you build your narrative from day one.
                    </div>
</div>

<div className="reveal delay-100 glass-card rounded-xl overflow-hidden border border-white/10">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none faq-btn group">
<span className="font-medium text-lg text-white group-hover:text-indigo-400 transition-colors">How do we measure success?</span>
<iconify-icon className="text-gray-400 transform transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        We track multiple metrics: media mentions, AI search visibility, website traffic, lead generation, and ultimately, business outcomes. We provide monthly reports with detailed analytics.
                    </div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 bg-[#0C0C14] pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<div className="font-heading font-bold text-xl tracking-tighter text-white mb-4">SP Signal PR</div>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
                        Be Visible in ChatGPT, Perplexity &amp; Traditional Media.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="https://twitter.com/signal_pr">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon> 
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="https://t.me/signalpr">
<iconify-icon icon="solar:paper-plane-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-indigo-400 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#case-studies">Case Studies</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#faq">FAQ</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Contact</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:hello@signalpr.io">hello@signalpr.io</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:chat-round-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="#">@signalpr</a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Ready to scale?</h4>
<a className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-indigo-500/30" href="https://calendly.com/" target="_blank">
                        Book a Strategy Call
                    </a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
<p>© 2026 Signal PR. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-gray-400" href="#">Privacy Policy</a>
<a className="hover:text-gray-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
