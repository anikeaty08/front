import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Reveal
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger counters if within revealed element
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => {
                        const target = parseFloat(counter.getAttribute('data-target'));
                        const isDecimal = target % 1 !== 0;
                        const duration = 2000; 
                        const stepTime = Math.abs(Math.floor(duration / (target * (isDecimal ? 10 : 1))));
                        let current = 0;
                        
                        const timer = setInterval(() => {
                            current += isDecimal ? 0.1 : 1;
                            if (current >= target) {
                                current = target;
                                clearInterval(timer);
                            }
                            counter.innerText = isDecimal ? current.toFixed(1) : Math.floor(current);
                        }, stepTime);
                        
                        // Prevent re-triggering
                        counter.classList.remove('counter');
                    });

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-element').forEach(el => {
            observer.observe(el);
        });

        // Mobile Menu
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isOpen = mobileMenu.classList.contains('opacity-0');
            if (isOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
            }
        }

        mobileBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const btn = item.querySelector('button');
            const content = item.querySelector('.accordion-content');
            const chevron = item.querySelector('.chevron');

            btn.addEventListener('click', () => {
                const isOpen = content.classList.contains('open');
                
                // Close all others
                faqItems.forEach(otherItem => {
                    otherItem.querySelector('.accordion-content').classList.remove('open');
                    otherItem.querySelector('.chevron').classList.remove('rotate-180');
                });

                if (!isOpen) {
                    content.classList.add('open');
                    chevron.classList.add('rotate-180');
                }
            });
        });

        // Custom Dropdowns
        document.querySelectorAll('.custom-select').forEach(wrapper => {
            const trigger = wrapper.querySelector('.select-trigger');
            const options = wrapper.querySelector('.select-options');
            const hiddenInput = wrapper.querySelector('input[type="hidden"]');
            const display = wrapper.querySelector('.select-display');

            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                // Close others
                document.querySelectorAll('.select-options').forEach(opt => {
                    if(opt !== options) opt.classList.add('hidden');
                });
                document.querySelectorAll('.select-trigger').forEach(trig => {
                    if(trig !== trigger) trig.classList.remove('border-[#F97316]');
                });

                options.classList.toggle('hidden');
                trigger.classList.toggle('border-[#F97316]');
            });

            options.querySelectorAll('div').forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    display.textContent = option.textContent;
                    hiddenInput.value = option.dataset.value;
                    options.classList.add('hidden');
                    trigger.classList.remove('border-[#F97316]');
                    display.classList.remove('text-gray-400');
                    display.classList.add('text-[#0a0a0a]');
                });
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.custom-select')) {
                document.querySelectorAll('.select-options').forEach(opt => opt.classList.add('hidden'));
                document.querySelectorAll('.select-trigger').forEach(trig => trig.classList.remove('border-[#F97316]'));
            }
        });

        // Form Submission Simulation
        const form = document.getElementById('contact-form');
        const successMsg = document.getElementById('form-success');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation check for custom hidden inputs
            let isValid = true;
            form.querySelectorAll('input[type="hidden"]').forEach(input => {
                if(!input.value) {
                    isValid = false;
                    input.parentElement.querySelector('.select-trigger').classList.add('border-red-500');
                }
            });

            if(isValid) {
                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<iconify-icon icon="solar:refresh-linear" class="animate-spin"></iconify-icon>';
                
                setTimeout(() => {
                    form.classList.add('hidden');
                    successMsg.classList.remove('hidden');
                    successMsg.classList.add('flex');
                }, 1000);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-[100] bg-noise mix-blend-overlay"></div>

<nav className="fixed top-0 w-full z-50 bg-[#faf7f2]/80 backdrop-blur-md border-b border-[#0a0a0a]/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

<a className="font-serif tracking-tight text-xl font-medium text-[#0a0a0a] flex items-center gap-1 group" href="#">
                Curate<span className="text-[#F97316] italic group-hover:text-[#FB923C] transition-colors">AI</span> Co.
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-600 hover:text-[#F97316] transition-colors" href="#services">Services</a>
<a className="text-sm text-gray-600 hover:text-[#F97316] transition-colors" href="#process">Process</a>
<a className="text-sm text-gray-600 hover:text-[#F97316] transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-gray-600 hover:text-[#F97316] transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0a0a0a] text-[#faf7f2] text-sm hover:bg-[#F97316] hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all duration-300" href="#contact">
                    Book a Call
                </a>
</div>

<button className="md:hidden text-[#0a0a0a] focus:outline-none flex items-center justify-center w-10 h-10" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-[#0a0a0a] text-[#faf7f2] z-40 flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<button className="absolute top-6 right-6 text-[#faf7f2] flex items-center justify-center w-10 h-10" id="close-menu-btn">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
<a className="mobile-link font-serif text-3xl tracking-tight hover:text-[#F97316] transition-colors" href="#services">Services</a>
<a className="mobile-link font-serif text-3xl tracking-tight hover:text-[#F97316] transition-colors" href="#process">Process</a>
<a className="mobile-link font-serif text-3xl tracking-tight hover:text-[#F97316] transition-colors" href="#pricing">Pricing</a>
<a className="mobile-link font-serif text-3xl tracking-tight hover:text-[#F97316] transition-colors" href="#contact">Contact</a>
<a className="mobile-link mt-8 px-8 py-4 rounded-full bg-[#F97316] text-[#0a0a0a] text-lg hover:bg-[#FB923C] transition-colors w-64 text-center" href="#contact">
                Book a Call
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="flex flex-col items-start gap-8 z-10 reveal-element">
<div className="flex items-center gap-3">
<div className="w-8 h-[1px] bg-[#F97316]"></div>
<span className="font-mono text-xs text-[#F97316] tracking-widest uppercase">AI Personal Brand Agency</span>
</div>
<h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] tracking-tight font-medium text-[#0a0a0a]">
                    Your Story Deserves<br/>
<span className="italic text-[#F97316]">to Be Heard.</span>
</h1>
<p className="text-lg lg:text-xl text-gray-600 font-light max-w-md leading-relaxed">
                    We turn founders, executives and creators into category-defining voices online — powered by the intelligence of AI.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#F97316] text-[#0a0a0a] text-sm font-medium hover:bg-[#FB923C] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300 group" href="#contact">
                        Start Building <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#F97316]/30 text-[#F97316] text-sm hover:border-[#F97316] hover:bg-[#F97316]/5 transition-all duration-300" href="#services">
                        See Our Services <iconify-icon className="ml-2" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-[#0a0a0a]/10 w-full">
<div className="flex flex-col">
<span className="font-serif text-xl tracking-tight"><span className="counter" data-target="50">0</span>+</span>
<span className="font-mono text-xs text-gray-500 uppercase tracking-wide">Brands Built</span>
</div>
<div className="w-1 h-1 bg-[#F97316] rounded-full"></div>
<div className="flex flex-col">
<span className="font-serif text-xl tracking-tight"><span className="counter" data-target="3.2">0</span>M+</span>
<span className="font-mono text-xs text-gray-500 uppercase tracking-wide">Impressions</span>
</div>
<div className="w-1 h-1 bg-[#F97316] rounded-full hidden sm:block"></div>
<div className="flex flex-col hidden sm:flex">
<span className="font-serif text-xl tracking-tight">6 Months</span>
<span className="font-mono text-xs text-gray-500 uppercase tracking-wide">To Authority</span>
</div>
</div>
</div>

<div className="relative w-full h-full min-h-[400px] flex items-center justify-center lg:justify-end reveal-element" style={{transitionDelay: '200ms'}}>

<div className="absolute inset-0 bg-[#0a0a0a] rounded-[2.5rem] rotate-3 scale-95 opacity-5"></div>
<div className="absolute inset-0 bg-[#0a0a0a] rounded-[2.5rem] -rotate-2 scale-100 shadow-2xl overflow-hidden flex items-center justify-center p-8">

<div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 w-full max-w-sm relative animate-float shadow-[0_20px_40px_rgba(0,0,0,0.5)]">

<div className="absolute -top-3 -right-3 bg-[#F97316] text-[#0a0a0a] font-mono text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
<iconify-icon icon="solar:stars-linear"></iconify-icon> AI-Powered
                        </div>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F97316] to-[#FB923C] flex items-center justify-center text-[#0a0a0a] font-serif text-lg">
                                JD
                            </div>
<div>
<h3 className="text-[#faf7f2] font-medium text-base">Jane Doe</h3>
<p className="text-gray-400 font-mono text-xs">@janedoe_founder</p>
</div>
</div>
<div className="bg-black/50 rounded-xl p-4 mb-6 border border-white/5">
<p className="text-xs text-gray-400 mb-1 font-mono">Total Audience</p>
<div className="flex items-end gap-3">
<span className="text-3xl font-serif text-[#faf7f2] tracking-tight">42,850</span>
<span className="text-[#F97316] text-xs font-mono bg-[#F97316]/10 px-2 py-1 rounded-md mb-1">+38% this month</span>
</div>
</div>
<div className="border-l-2 border-[#F97316] pl-4">
<p className="text-[#faf7f2] text-sm font-light italic leading-relaxed">
                                "The speed of AI combined with human strategic brilliance. My inbound leads have tripled since we started."
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full bg-[#F97316] py-3 overflow-hidden flex border-y border-[#0a0a0a]/10 reveal-element">
<div className="flex whitespace-nowrap animate-marquee-loop">

<div className="flex items-center gap-8 px-4 text-[#0a0a0a] font-mono text-sm tracking-widest uppercase">
<span>AI Brand Strategy</span> <span className="text-[#0a0a0a]/30">•</span>
<span>LinkedIn Authority</span> <span className="text-[#0a0a0a]/30">•</span>
<span>Content Creation</span> <span className="text-[#0a0a0a]/30">•</span>
<span>Founder Branding</span> <span className="text-[#0a0a0a]/30">•</span>
<span>Thought Leadership</span> <span className="text-[#0a0a0a]/30">•</span>
<span>Audience Building</span> <span className="text-[#0a0a0a]/30">•</span>
<span>Personal Branding</span> <span className="text-[#0a0a0a]/30">•</span>
<span>Lead Generation</span> <span className="text-[#0a0a0a]/30">•</span>
<span>Instagram Growth</span> <span className="text-[#0a0a0a]/30">•</span>
<span>AI-Powered Content</span> <span className="text-[#0a0a0a]/30">•</span>
</div>

<div className="flex items-center gap-8 px-4 text-[#0a0a0a] font-mono text-sm tracking-widest uppercase">
<span>AI Brand Strategy</span> <span className="text-[#0a0a0a]/30">•</span>
<span>LinkedIn Authority</span> <span className="text-[#0a0a0a]/30">•</span>
<span>Content Creation</span> <span className="text-[#0a0a0a]/30">•</span>
<span>Founder Branding</span> <span className="text-[#0a0a0a]/30">•</span>
<span>Thought Leadership</span> <span className="text-[#0a0a0a]/30">•</span>
<span>Audience Building</span> <span className="text-[#0a0a0a]/30">•</span>
<span>Personal Branding</span> <span className="text-[#0a0a0a]/30">•</span>
<span>Lead Generation</span> <span className="text-[#0a0a0a]/30">•</span>
<span>Instagram Growth</span> <span className="text-[#0a0a0a]/30">•</span>
<span>AI-Powered Content</span> <span className="text-[#0a0a0a]/30">•</span>
</div>
</div>
</div>

<section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto" id="services">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal-element">
<div>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight font-medium text-[#0a0a0a] mb-4">What We Do</h2>
<p className="text-gray-600 max-w-md font-light">Every service is AI-powered, human-crafted and built around your unique story.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-[#f5f0e8] p-8 lg:p-10 rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(249,115,22,0.08)] reveal-element" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#F97316] transition-colors duration-300"></div>
<div className="flex justify-between items-start mb-12">
<span className="font-mono text-xs text-[#F97316]">01</span>
<iconify-icon className="text-gray-400 group-hover:text-[#F97316] transition-colors" icon="solar:target-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-2xl font-medium tracking-tight mb-4 group-hover:text-[#F97316] transition-colors">Brand Strategy &amp; Positioning</h3>
<p className="text-gray-600 font-light text-sm leading-relaxed mb-8">Brand audit, unique positioning statement, tone of voice, content pillars &amp; messaging framework.</p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1 border border-[#0a0a0a]/10 rounded-full font-mono text-xs text-gray-500 bg-white/50">Strategy</span>
<span className="px-3 py-1 border border-[#0a0a0a]/10 rounded-full font-mono text-xs text-gray-500 bg-white/50">AI</span>
<span className="px-3 py-1 border border-[#0a0a0a]/10 rounded-full font-mono text-xs text-gray-500 bg-white/50">Positioning</span>
</div>
</div>

<div className="group bg-[#f5f0e8] p-8 lg:p-10 rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(249,115,22,0.08)] reveal-element" style={{transitionDelay: '200ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#F97316] transition-colors duration-300"></div>
<div className="flex justify-between items-start mb-12">
<span className="font-mono text-xs text-[#F97316]">02</span>
<iconify-icon className="text-gray-400 group-hover:text-[#F97316] transition-colors" icon="solar:pen-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-2xl font-medium tracking-tight mb-4 group-hover:text-[#F97316] transition-colors">Content Creation &amp; Publishing</h3>
<p className="text-gray-600 font-light text-sm leading-relaxed mb-8">LinkedIn posts, Twitter/X threads, Instagram carousels, captions and thought leadership articles.</p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1 border border-[#0a0a0a]/10 rounded-full font-mono text-xs text-gray-500 bg-white/50">Content</span>
<span className="px-3 py-1 border border-[#0a0a0a]/10 rounded-full font-mono text-xs text-gray-500 bg-white/50">LinkedIn</span>
<span className="px-3 py-1 border border-[#0a0a0a]/10 rounded-full font-mono text-xs text-gray-500 bg-white/50">Instagram</span>
</div>
</div>

<div className="group bg-[#f5f0e8] p-8 lg:p-10 rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(249,115,22,0.08)] reveal-element" style={{transitionDelay: '300ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#F97316] transition-colors duration-300"></div>
<div className="flex justify-between items-start mb-12">
<span className="font-mono text-xs text-[#F97316]">03</span>
<iconify-icon className="text-gray-400 group-hover:text-[#F97316] transition-colors" icon="solar:rocket-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-2xl font-medium tracking-tight mb-4 group-hover:text-[#F97316] transition-colors">Personal Brand Management</h3>
<p className="text-gray-600 font-light text-sm leading-relaxed mb-8">Full done-for-you brand management — strategy, content, publishing, engagement &amp; monthly reporting.</p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1 border border-[#0a0a0a]/10 rounded-full font-mono text-xs text-gray-500 bg-white/50">Done-For-You</span>
<span className="px-3 py-1 border border-[#0a0a0a]/10 rounded-full font-mono text-xs text-gray-500 bg-white/50">Growth</span>
<span className="px-3 py-1 border border-[#0a0a0a]/10 rounded-full font-mono text-xs text-gray-500 bg-white/50">AI</span>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#0a0a0a] text-[#faf7f2] relative overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="text-center mb-20 reveal-element">
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight font-medium mb-4">How CurateAI Co. Works</h2>
<p className="text-gray-400 font-light max-w-lg mx-auto">A simple, proven, AI-powered process that gets you results fast.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">

<div className="hidden lg:block absolute top-6 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-[#F97316]/50 to-transparent z-0"></div>

<div className="relative z-10 reveal-element" style={{transitionDelay: '100ms'}}>
<span className="absolute -top-10 -left-6 font-serif text-8xl text-white/5 select-none pointer-events-none">1</span>
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F97316] to-[#FB923C] flex items-center justify-center text-[#0a0a0a] font-serif text-xl mb-6 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                        1
                    </div>
<h3 className="font-serif text-xl font-medium tracking-tight mb-3">Brand Discovery</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed">We audit your presence, define your unique positioning and map your target audience.</p>
</div>

<div className="relative z-10 reveal-element" style={{transitionDelay: '200ms'}}>
<span className="absolute -top-10 -left-6 font-serif text-8xl text-white/5 select-none pointer-events-none">2</span>
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F97316] to-[#FB923C] flex items-center justify-center text-[#0a0a0a] font-serif text-xl mb-6 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                        2
                    </div>
<h3 className="font-serif text-xl font-medium tracking-tight mb-3">AI-Powered Strategy</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed">Our AI builds your content pillars, tone of voice, messaging framework and platform strategy.</p>
</div>

<div className="relative z-10 reveal-element" style={{transitionDelay: '300ms'}}>
<span className="absolute -top-10 -left-6 font-serif text-8xl text-white/5 select-none pointer-events-none">3</span>
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F97316] to-[#FB923C] flex items-center justify-center text-[#0a0a0a] font-serif text-xl mb-6 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                        3
                    </div>
<h3 className="font-serif text-xl font-medium tracking-tight mb-3">Create &amp; Publish</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed">We create and publish content across your platforms — consistently and on-brand.</p>
</div>

<div className="relative z-10 reveal-element" style={{transitionDelay: '400ms'}}>
<span className="absolute -top-10 -left-6 font-serif text-8xl text-white/5 select-none pointer-events-none">4</span>
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F97316] to-[#FB923C] flex items-center justify-center text-[#0a0a0a] font-serif text-xl mb-6 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                        4
                    </div>
<h3 className="font-serif text-xl font-medium tracking-tight mb-3">Grow &amp; Optimize</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed">Ongoing growth, PR outreach, thought leadership and continuous brand performance optimization.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto" id="pricing">
<div className="text-center mb-16 reveal-element">
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight font-medium text-[#0a0a0a] mb-4">Simple, Transparent Pricing</h2>
<p className="text-gray-600 font-light max-w-lg mx-auto">Choose the plan that fits where you are and where you want to go.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

<div className="bg-[#f5f0e8] rounded-2xl p-8 border-t-4 border-[#F97316] reveal-element" style={{transitionDelay: '100ms'}}>
<h3 className="font-serif text-2xl font-medium mb-2">Brand Spark</h3>
<p className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-wide">Starter</p>
<div className="flex items-end gap-1 mb-2">
<span className="text-4xl font-serif tracking-tight">₹15,000</span>
<span className="text-sm text-gray-500 mb-1">/ mo</span>
</div>
<p className="text-sm text-gray-600 font-light mb-8">For founders just getting started.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-700 font-light"><iconify-icon className="text-[#F97316] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Brand audit &amp; positioning</li>
<li className="flex items-start gap-3 text-sm text-gray-700 font-light"><iconify-icon className="text-[#F97316] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Tone of voice document</li>
<li className="flex items-start gap-3 text-sm text-gray-700 font-light"><iconify-icon className="text-[#F97316] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Bio &amp; headline copy</li>
<li className="flex items-start gap-3 text-sm text-gray-700 font-light"><iconify-icon className="text-[#F97316] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> 12 LinkedIn posts/month</li>
<li className="flex items-start gap-3 text-sm text-gray-700 font-light"><iconify-icon className="text-[#F97316] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Monthly strategy call</li>
<li className="flex items-start gap-3 text-sm text-gray-700 font-light"><iconify-icon className="text-[#F97316] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> AI content templates</li>
</ul>
<a className="block w-full text-center px-6 py-3 rounded-full border border-[#0a0a0a]/20 text-[#0a0a0a] text-sm hover:border-[#F97316] hover:text-[#F97316] transition-colors" href="#contact">Select Plan</a>
</div>

<div className="bg-[#0a0a0a] text-white rounded-2xl p-8 lg:p-10 border-t-4 border-[#FBBF24] lg:scale-105 shadow-2xl relative z-10 reveal-element" style={{transitionDelay: '200ms'}}>
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F97316] text-[#0a0a0a] text-xs font-mono px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                </div>
<h3 className="font-serif text-2xl font-medium mb-2">Brand Build</h3>
<p className="text-xs font-mono text-[#F97316] mb-6 uppercase tracking-wide">Growth</p>
<div className="flex items-end gap-1 mb-2">
<span className="text-4xl font-serif tracking-tight">₹45,000</span>
<span className="text-sm text-gray-400 mb-1">/ mo</span>
</div>
<p className="text-sm text-gray-400 font-light mb-8">For professionals ready to scale.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-300 font-light"><iconify-icon className="text-[#FBBF24] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Everything in Brand Spark</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-light"><iconify-icon className="text-[#FBBF24] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Full content strategy &amp; pillars</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-light"><iconify-icon className="text-[#FBBF24] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> 20 LinkedIn + 8 X posts</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-light"><iconify-icon className="text-[#FBBF24] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> IG carousels &amp; captions</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-light"><iconify-icon className="text-[#FBBF24] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Bi-weekly strategy calls</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-light"><iconify-icon className="text-[#FBBF24] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Engagement &amp; reply strategy</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-light"><iconify-icon className="text-[#FBBF24] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Monthly performance report</li>
</ul>
<a className="block w-full text-center px-6 py-3 rounded-full bg-[#F97316] text-[#0a0a0a] text-sm font-medium hover:bg-[#FB923C] hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all" href="#contact">Select Plan</a>
</div>

<div className="bg-[#f5f0e8] rounded-2xl p-8 border-t-4 border-[#0a0a0a] reveal-element" style={{transitionDelay: '300ms'}}>
<h3 className="font-serif text-2xl font-medium mb-2">Brand Elite</h3>
<p className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-wide">Done-For-You</p>
<div className="flex items-end gap-1 mb-2">
<span className="text-4xl font-serif tracking-tight">₹1,20,000</span>
<span className="text-sm text-gray-500 mb-1">/ mo</span>
</div>
<p className="text-sm text-gray-600 font-light mb-8">For leaders who want full management.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-700 font-light"><iconify-icon className="text-[#0a0a0a] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Everything in Brand Build</li>
<li className="flex items-start gap-3 text-sm text-gray-700 font-light"><iconify-icon className="text-[#0a0a0a] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Full platform management</li>
<li className="flex items-start gap-3 text-sm text-gray-700 font-light"><iconify-icon className="text-[#0a0a0a] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Articles &amp; PR outreach</li>
<li className="flex items-start gap-3 text-sm text-gray-700 font-light"><iconify-icon className="text-[#0a0a0a] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Dedicated AI brand strategist</li>
<li className="flex items-start gap-3 text-sm text-gray-700 font-light"><iconify-icon className="text-[#0a0a0a] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Weekly calls + priority support</li>
<li className="flex items-start gap-3 text-sm text-gray-700 font-light"><iconify-icon className="text-[#0a0a0a] mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> Personal brand dashboard</li>
</ul>
<a className="block w-full text-center px-6 py-3 rounded-full border border-[#0a0a0a]/20 text-[#0a0a0a] text-sm hover:border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#faf7f2] transition-colors" href="#contact">Select Plan</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#0a0a0a] text-[#faf7f2]">
<div className="max-w-3xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16 reveal-element">
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight font-medium mb-4">Got Questions?</h2>
<p className="text-gray-400 font-light max-w-md mx-auto">Everything you need to know about working with CurateAI Co.</p>
</div>
<div className="space-y-4 reveal-element" style={{transitionDelay: '200ms'}}>

<div className="border-b border-white/10 pb-4 faq-item">
<button className="w-full flex justify-between items-center py-4 text-left focus:outline-none group">
<span className="font-serif text-lg text-white group-hover:text-[#F97316] transition-colors">How long before I see results?</span>
<iconify-icon className="text-[#F97316] transition-transform duration-300 chevron" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="text-gray-400 font-light text-sm pb-4 pt-2 leading-relaxed">Most clients start seeing meaningful growth within 60–90 days. Our AI-powered strategy is designed to build momentum fast and compound over time.</p>
</div>
</div>
</div>

<div className="border-b border-white/10 pb-4 faq-item">
<button className="w-full flex justify-between items-center py-4 text-left focus:outline-none group">
<span className="font-serif text-lg text-white group-hover:text-[#F97316] transition-colors">Do you write everything or do I?</span>
<iconify-icon className="text-[#F97316] transition-transform duration-300 chevron" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="text-gray-400 font-light text-sm pb-4 pt-2 leading-relaxed">We handle 100% of the writing and publishing. You share your ideas, stories and insights with us — we turn them into powerful content.</p>
</div>
</div>
</div>

<div className="border-b border-white/10 pb-4 faq-item">
<button className="w-full flex justify-between items-center py-4 text-left focus:outline-none group">
<span className="font-serif text-lg text-white group-hover:text-[#F97316] transition-colors">What platforms do you focus on?</span>
<iconify-icon className="text-[#F97316] transition-transform duration-300 chevron" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="text-gray-400 font-light text-sm pb-4 pt-2 leading-relaxed">We primarily focus on LinkedIn, Twitter/X and Instagram — the three platforms that drive the most personal brand authority in 2025.</p>
</div>
</div>
</div>

<div className="border-b border-white/10 pb-4 faq-item">
<button className="w-full flex justify-between items-center py-4 text-left focus:outline-none group">
<span className="font-serif text-lg text-white group-hover:text-[#F97316] transition-colors">How does AI play a role?</span>
<iconify-icon className="text-[#F97316] transition-transform duration-300 chevron" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="text-gray-400 font-light text-sm pb-4 pt-2 leading-relaxed">Our AI systems help with brand analysis, content ideation, tone calibration and performance tracking — making everything faster, smarter and more consistent.</p>
</div>
</div>
</div>

<div className="border-b border-white/10 pb-4 faq-item">
<button className="w-full flex justify-between items-center py-4 text-left focus:outline-none group">
<span className="font-serif text-lg text-white group-hover:text-[#F97316] transition-colors">Can I cancel anytime?</span>
<iconify-icon className="text-[#F97316] transition-transform duration-300 chevron" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="text-gray-400 font-light text-sm pb-4 pt-2 leading-relaxed">Yes. No lock-in contracts. We earn your business every month with results.</p>
</div>
</div>
</div>

<div className="border-b border-white/10 pb-4 faq-item">
<button className="w-full flex justify-between items-center py-4 text-left focus:outline-none group">
<span className="font-serif text-lg text-white group-hover:text-[#F97316] transition-colors">What makes CurateAI Co. different?</span>
<iconify-icon className="text-[#F97316] transition-transform duration-300 chevron" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="text-gray-400 font-light text-sm pb-4 pt-2 leading-relaxed">We combine AI intelligence with human creativity. You get the speed of AI and the quality of expert brand strategists — not one or the other.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden bg-[#faf7f2]" id="contact">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
<span className="font-serif text-[15vw] leading-none text-[#0a0a0a]/[0.02] whitespace-nowrap select-none">Let's Build</span>
</div>
<div className="max-w-4xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
<div className="reveal-element">
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight font-medium text-[#0a0a0a] mb-4">
                    Ready to Become the<br/>
<span className="italic text-[#F97316]">Voice of Your Industry?</span>
</h2>
<p className="text-gray-600 font-light mb-8 max-w-sm">Book a free 30-min discovery call. No pressure. Just clarity about your brand.</p>
</div>
<div className="bg-white p-8 lg:p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-[#0a0a0a]/5 reveal-element" style={{transitionDelay: '200ms'}}>
<form className="space-y-6" id="contact-form">
<div>
<label className="block font-mono text-xs text-gray-500 mb-2 uppercase tracking-wide">Full Name</label>
<input className="w-full bg-transparent border-b border-[#0a0a0a]/20 py-2 text-sm focus:outline-none focus:border-[#F97316] transition-colors text-[#0a0a0a]" required="" type="text"/>
</div>
<div>
<label className="block font-mono text-xs text-gray-500 mb-2 uppercase tracking-wide">Email Address</label>
<input className="w-full bg-transparent border-b border-[#0a0a0a]/20 py-2 text-sm focus:outline-none focus:border-[#F97316] transition-colors text-[#0a0a0a]" required="" type="email"/>
</div>

<div className="custom-select relative">
<label className="block font-mono text-xs text-gray-500 mb-2 uppercase tracking-wide">I am a...</label>
<div className="select-trigger w-full border-b border-[#0a0a0a]/20 py-2 flex justify-between items-center cursor-pointer transition-colors text-sm">
<span className="select-display text-gray-400">Select role</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="select-options absolute top-full left-0 w-full bg-white border border-[#0a0a0a]/10 mt-1 rounded-lg shadow-xl hidden z-20 py-2">
<div className="px-4 py-2 hover:bg-[#faf7f2] cursor-pointer text-sm text-[#0a0a0a]" data-value="founder">Founder</div>
<div className="px-4 py-2 hover:bg-[#faf7f2] cursor-pointer text-sm text-[#0a0a0a]" data-value="executive">Executive</div>
<div className="px-4 py-2 hover:bg-[#faf7f2] cursor-pointer text-sm text-[#0a0a0a]" data-value="coach">Coach</div>
<div className="px-4 py-2 hover:bg-[#faf7f2] cursor-pointer text-sm text-[#0a0a0a]" data-value="creator">Creator</div>
<div className="px-4 py-2 hover:bg-[#faf7f2] cursor-pointer text-sm text-[#0a0a0a]" data-value="other">Other</div>
</div>
<input name="role" required="" type="hidden"/>
</div>

<div className="custom-select relative">
<label className="block font-mono text-xs text-gray-500 mb-2 uppercase tracking-wide">Which plan interests you?</label>
<div className="select-trigger w-full border-b border-[#0a0a0a]/20 py-2 flex justify-between items-center cursor-pointer transition-colors text-sm">
<span className="select-display text-gray-400">Select plan</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="select-options absolute top-full left-0 w-full bg-white border border-[#0a0a0a]/10 mt-1 rounded-lg shadow-xl hidden z-20 py-2">
<div className="px-4 py-2 hover:bg-[#faf7f2] cursor-pointer text-sm text-[#0a0a0a]" data-value="spark">Brand Spark</div>
<div className="px-4 py-2 hover:bg-[#faf7f2] cursor-pointer text-sm text-[#0a0a0a]" data-value="build">Brand Build</div>
<div className="px-4 py-2 hover:bg-[#faf7f2] cursor-pointer text-sm text-[#0a0a0a]" data-value="elite">Brand Elite</div>
<div className="px-4 py-2 hover:bg-[#faf7f2] cursor-pointer text-sm text-[#0a0a0a]" data-value="unsure">Not sure yet</div>
</div>
<input name="plan" required="" type="hidden"/>
</div>
<button className="w-full py-4 rounded-full bg-[#F97316] text-[#0a0a0a] text-sm font-medium hover:bg-[#FB923C] hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all mt-4 group" type="submit">
                        Apply Now <span className="ml-1 group-hover:translate-x-1 inline-block transition-transform">→</span>
</button>
<p className="text-center font-mono text-xs text-gray-400 mt-4">No spam. Just a 30-min discovery call.</p>
</form>
<div className="hidden h-full flex-col items-center justify-center text-center py-12" id="form-success">
<div className="w-16 h-16 rounded-full bg-[#F97316]/10 text-[#F97316] flex items-center justify-center mb-4">
<iconify-icon icon="solar:check-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-2xl font-medium mb-2">Application Received</h3>
<p className="text-gray-600 font-light text-sm">We'll be in touch within 24 hours!</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#0a0a0a] text-gray-400 py-12 px-6 lg:px-12 border-t border-white/10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex flex-col items-center md:items-start">
<a className="font-serif tracking-tight text-xl font-medium text-white flex items-center gap-1 mb-2" href="#">
                    Curate<span className="text-[#F97316] italic">AI</span> Co.
                </a>
<p className="text-sm font-light">Building personal brands that open doors.</p>
</div>
<div className="flex gap-6">
<a className="text-sm hover:text-[#F97316] transition-colors" href="#">Services</a>
<a className="text-sm hover:text-[#F97316] transition-colors" href="#">Process</a>
<a className="text-sm hover:text-[#F97316] transition-colors" href="#">About</a>
<a className="text-sm hover:text-[#F97316] transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F97316] hover:text-[#0a0a0a] transition-colors" href="#">
<iconify-icon icon="solar:plain-2-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F97316] hover:text-[#0a0a0a] transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F97316] hover:text-[#0a0a0a] transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-xs">
<p>© 2025 CurateAI Co. All rights reserved.</p>
<p className="font-mono text-gray-500 uppercase tracking-widest text-[10px]">Where Identity Meets Intelligence.</p>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#F97316] to-[#FB923C] text-[#0a0a0a] flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-110 transition-transform animate-[pulse_2s_infinite]" href="#contact">
<iconify-icon icon="solar:calendar-add-linear" width="24"></iconify-icon>
</a>


    </>
  );
}
