import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Respect reduced motion
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            // GSAP Registration
            gsap.registerPlugin(ScrollTrigger);

            // 1. Navbar Morphing
            const navbar = document.getElementById('navbar');
            const navPill = document.getElementById('nav-pill');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navPill.classList.add('bg-[#0B0D12]/80', 'backdrop-blur-xl', 'border-white/10');
                    navPill.classList.remove('border-transparent');
                } else {
                    navPill.classList.remove('bg-[#0B0D12]/80', 'backdrop-blur-xl', 'border-white/10');
                    navPill.classList.add('border-transparent');
                }
            });

            if (!prefersReducedMotion) {
                // 2. Hero Sequence
                const tlHero = gsap.timeline({ delay: 0.2 });
                tlHero.to('.hero-stagger', {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out"
                })
                .to('#proof-widget', {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.5");

                // Counter Animation for Widget
                const animateCounter = (id, target, suffix = "+") => {
                    let obj = { val: 0 };
                    gsap.to(obj, {
                        val: target,
                        duration: 2,
                        ease: "power2.out",
                        onUpdate: () => {
                            document.getElementById(id).innerText = Math.floor(obj.val).toLocaleString() + suffix;
                        },
                        delay: 1.2
                    });
                };
                animateCounter('count-campaigns', 200);
                animateCounter('count-automations', 1240);
                animateCounter('count-clients', 80);

                // 3. Features Stagger Entrance
                gsap.from('.feature-card', {
                    scrollTrigger: {
                        trigger: ".feature-card",
                        start: "top 80%"
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out"
                });

                // 4. Manifesto Scroll Reveal
                gsap.to('.manifesto-line', {
                    scrollTrigger: { trigger: ".manifesto-line", start: "top 80%" },
                    y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out"
                });
                gsap.from('#manifesto-order', {
                    scrollTrigger: { trigger: "#manifesto-order", start: "top 75%" },
                    scale: 0.8, duration: 1.5, ease: "elastic.out(1, 0.5)"
                });

                // 5. MINDSET Checklist Fill
                gsap.to('#mindset-checklist li', {
                    scrollTrigger: {
                        trigger: "#mindset-checklist",
                        start: "top 75%"
                    },
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out"
                });

                // 6. Results Stagger
                gsap.to('.result-card', {
                    scrollTrigger: { trigger: "#results-grid", start: "top 80%" },
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out"
                });

                // 7. Final CTA
                gsap.from('#final-cta-head', {
                    scrollTrigger: { trigger: "#apply", start: "top 70%" },
                    scale: 0.95, opacity: 0, duration: 1, ease: "power2.out"
                });
            }

            // Magnetic Buttons
            document.querySelectorAll('.btn-magnetic').forEach(btn => {
                btn.addEventListener('mousemove', e => {
                    const rect = btn.getBoundingClientRect();
                    const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
                    const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
                    gsap.to(btn, {x: x, y: y, duration: 0.5, ease: "power2.out"});
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, {x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)"});
                });
            });

            // Credibility Shuffler Logic
            const shuffleItems = document.querySelectorAll('.shuffler-item');
            let shuffleIndex = 0;
            const classes = [
                "translate-y-0 scale-100 z-30 opacity-100",
                "-translate-y-4 scale-95 z-20 opacity-80",
                "-translate-y-8 scale-90 z-10 opacity-60"
            ];
            
            setInterval(() => {
                shuffleItems.forEach((item, i) => {
                    // Reset current classes
                    item.className = item.className.replace(/(translate-y-[^\s]+|scale-[^\s]+|z-[^\s]+|opacity-[^\s]+)/g, '').trim();
                    
                    // Apply new classes based on offset
                    const classIndex = (i + shuffleIndex) % 3;
                    item.className += ' ' + classes[classIndex];
                });
                shuffleIndex = (shuffleIndex + 2) % 3; // Shift backward
            }, 3000);

            // Clarity Typer Logic
            const typerText = document.getElementById('typer-text');
            const messages = [
                "Analyzing brand message...",
                "Identifying ideal client profile...",
                "Removing friction from funnel...",
                "Message clarity score: 94/100",
                "Positioning: LOCKED"
            ];
            let msgIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function typeWriter() {
                const currentMsg = messages[msgIndex];
                
                if (isDeleting) {
                    typerText.innerHTML = currentMsg.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typerText.innerHTML = currentMsg.substring(0, charIndex + 1);
                    charIndex++;
                }

                let typeSpeed = isDeleting ? 30 : 60;

                if (!isDeleting && charIndex === currentMsg.length) {
                    typeSpeed = 1500; // Pause at end
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    msgIndex = (msgIndex + 1) % messages.length;
                    typeSpeed = 500; // Pause before new word
                }

                setTimeout(typeWriter, typeSpeed);
            }
            setTimeout(typeWriter, 1000);

            // Wynn Transcript Logic
            const wynnLines = [
                '"Thank you for calling Modern Builders..."',
                '"I can schedule that for you right now."',
                '"Your appointment is confirmed for Thursday."'
            ];
            const wynnEl = document.getElementById('wynn-transcript');
            let wIndex = 0;
            setInterval(() => {
                wynnEl.style.opacity = 0;
                setTimeout(() => {
                    wynnEl.innerText = wynnLines[wIndex];
                    wynnEl.style.opacity = 1;
                    wIndex = (wIndex + 1) % wynnLines.length;
                }, 300);
            }, 3000);

            // FAQ Accordion Logic
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const btn = item.querySelector('button');
                const content = item.querySelector('.faq-content');
                const icon = item.querySelector('.faq-icon');

                btn.addEventListener('click', () => {
                    const isOpen = content.style.maxHeight;

                    // Close all
                    faqItems.forEach(otherItem => {
                        otherItem.querySelector('.faq-content').style.maxHeight = null;
                        otherItem.querySelector('.faq-icon').classList.remove('rotate-180');
                        otherItem.classList.remove('border-[#FF6B35]/50');
                    });

                    // Open clicked
                    if (!isOpen) {
                        content.style.maxHeight = content.scrollHeight + "px";
                        icon.classList.add('rotate-180');
                        item.classList.add('border-[#FF6B35]/50');
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<svg className="pointer-events-none fixed inset-0 z-[9999] h-full w-full opacity-5" xmlns="http://www.w3.org/2000/svg">
<filter id="noiseFilter"><feturbulence basefrequency="0.65" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence></filter>
<rect filter="url(#noiseFilter)" height="100%" width="100%"></rect>
</svg>

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 pt-6 px-4 md:px-8" id="navbar">
<div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border" id="nav-pill">
<a className="font-bricolage font-semibold tracking-tight text-xl flex items-center gap-2 relative z-10" href="#">
<span className="text-[#F5F3EF]">INC</span><span className="text-white/50">ubator</span>
</a>
<div className="hidden md:flex items-center gap-8 font-bricolage text-sm tracking-wide text-white/70">
<a className="hover:text-white transition-colors hover:-translate-y-[1px] transform inline-block" href="#services">Services</a>
<a className="hover:text-white transition-colors hover:-translate-y-[1px] transform inline-block" href="#mindset">MINDSET</a>
<a className="hover:text-white transition-colors hover:-translate-y-[1px] transform inline-block" href="#wynn">THE WYNN SYSTEM</a>
</div>
<a className="btn-magnetic hidden md:inline-flex relative group overflow-hidden bg-[#FF6B35] text-[#0B0D12] px-6 py-2.5 rounded-full font-bricolage font-semibold text-sm tracking-tight z-10" href="#apply">
<span className="relative z-10 flex items-center gap-2">Apply for MINDSET <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon></span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
</a>

<button className="md:hidden text-white z-10 relative">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative h-dvh w-full flex items-end pb-12 md:pb-20 px-4 md:px-12 overflow-hidden bg-[#0B0D12]">

<div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
<img alt="Dark Studio Architecture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-[#0B0D12]/70 to-transparent"></div>
</div>
<div className="absolute inset-0 z-0 bg-[#0B0D12]">
<div className="absolute inset-0 opacity-40 mix-blend-luminosity">
<img alt="Hero Background" className="w-full h-full object-cover" src="https://assets.cdn.filesafe.space/gSM1Nw3URMqluplepuvY/media/699a8e8a20c0357adbe19420.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-[#0B0D12]/70 to-transparent"></div>
</div>
<div className="-translate-x-1/2 -translate-y-1/2 blur-[120px] z-0 bg-[#FF6B35] opacity-[0.03] w-[800px] h-[800px] rounded-full absolute top-1/2 left-1/2"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">

<div className="flex flex-col w-full md:w-2/3 hero-content">
<div className="font-mono text-xs tracking-[0.2em] text-[#FF6B35] mb-6 flex items-center gap-3 overflow-hidden">
<span className="w-8 h-[1px] bg-[#FF6B35]/50 inline-block"></span>
<span className="hero-stagger opacity-0 translate-y-4 inline-block">THE INCUBATOR MARKETING AGENCY — LEHI, UTAH</span>
</div>
<h1 className="flex flex-col leading-[0.85]">
<span className="font-bricolage font-semibold text-6xl lg:text-[7rem] tracking-tighter text-white hero-stagger opacity-0 translate-y-8">Engineering</span>
<span className="font-dm italic text-7xl lg:text-[11rem] tracking-tight text-[#FF6B35] pr-4 hero-stagger opacity-0 translate-y-8">Growth.</span>
</h1>
<p className="font-bricolage text-xl md:text-2xl text-white/60 mt-8 max-w-xl hero-stagger opacity-0 translate-y-4 tracking-tight">
                    For Entrepreneurs Who Want to Win.
                </p>
<p className="font-bricolage text-sm text-white/40 mt-3 max-w-md hero-stagger opacity-0 translate-y-4 leading-relaxed">
                    Most Utah businesses are invisible online, or visible but not trusted. We build the infrastructure to fix both.
                </p>
<div className="mt-10 hero-stagger opacity-0 translate-y-4">
<a className="btn-magnetic inline-flex relative group overflow-hidden bg-[#FF6B35] text-[#0B0D12] px-8 py-4 rounded-full font-bricolage font-semibold text-base tracking-tight shadow-[0_0_40px_-10px_rgba(255,107,53,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,107,53,0.5)] transition-all" href="#mindset">
<span className="relative z-10 flex items-center gap-2">Deploy the Machine <iconify-icon icon="solar:round-alt-arrow-right-linear" width="20"></iconify-icon></span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
</a>
</div>
</div>

<div className="w-full md:w-[320px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl opacity-0 translate-x-8" id="proof-widget">
<div className="space-y-4 font-mono text-xs tracking-wide">
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="text-white/50">CAMPAIGNS LAUNCHED</span>
<span className="text-white" id="count-campaigns">200+</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="text-white/50">AUTOMATIONS RUNNING</span>
<span className="text-white" id="count-automations">1,240+</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="text-white/50">CLIENTS SERVED</span>
<span className="text-white" id="count-clients">80+</span>
</div>
<div className="flex justify-between items-center pb-2">
<span className="text-white/50">AVG. RESPONSE TIME</span>
<span className="text-[#FF6B35]">&lt; 2 min</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#FF6B35] relative">
<div className="absolute inset-0 rounded-full bg-[#FF6B35] animate-[pulse-ring_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
</div>
<span className="font-mono text-[10px] tracking-widest text-[#FF6B35]">SYSTEMS LIVE</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="feature-card bg-[#F5F3EF] rounded-[2rem] p-8 md:p-10 text-[#0B0D12] border border-black/5 flex flex-col justify-between h-[400px] overflow-hidden relative group">
<div>
<h3 className="font-bricolage font-semibold text-3xl tracking-tight">Credibility</h3>
<p className="font-bricolage text-sm text-[#0B0D12]/60 mt-2">Get Trusted Instantly</p>
</div>
<div className="relative h-32 w-full mt-8" id="credibility-shuffler">
<div className="shuffler-item absolute inset-x-0 bottom-0 bg-white rounded-2xl p-4 shadow-sm border border-black/5 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-30 transform translate-y-0 scale-100">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#FF6B35]" icon="solar:star-fall-linear" width="24"></iconify-icon>
<span className="font-mono text-xs font-medium">GOOGLE REVIEWS</span>
</div>
<div className="font-bricolage text-2xl font-semibold mt-2 tracking-tight">4.9/5 Average</div>
</div>
<div className="shuffler-item absolute inset-x-0 bottom-0 bg-white rounded-2xl p-4 shadow-sm border border-black/5 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-20 transform -translate-y-4 scale-95 opacity-80">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#FF6B35]" icon="solar:microphone-3-linear" width="24"></iconify-icon>
<span className="font-mono text-xs font-medium">MEDIA PRESENCE</span>
</div>
<div className="font-bricolage text-2xl font-semibold mt-2 tracking-tight">40k+ Listeners</div>
</div>
<div className="shuffler-item absolute inset-x-0 bottom-0 bg-white rounded-2xl p-4 shadow-sm border border-black/5 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 transform -translate-y-8 scale-90 opacity-60">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#FF6B35]" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<span className="font-mono text-xs font-medium">SOCIAL PROOF</span>
</div>
<div className="font-bricolage text-xl font-medium mt-2 tracking-tight line-clamp-1">"System pays for itself."</div>
</div>
</div>
<div className="mt-8 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="font-mono text-[10px] tracking-widest text-[#0B0D12]/50">TRUST SIGNALS ACTIVE</span>
</div>
</div>

<div className="feature-card bg-[#161920] rounded-[2rem] p-8 md:p-10 text-[#F5F3EF] border border-white/5 flex flex-col justify-between h-[400px]">
<div>
<h3 className="font-bricolage font-semibold text-3xl tracking-tight text-white">Clarity</h3>
<p className="font-bricolage text-sm text-white/50 mt-2">Cut Through The Noise</p>
</div>
<div className="bg-[#0B0D12] rounded-2xl p-6 mt-8 h-40 font-mono text-xs text-white/70 leading-relaxed overflow-hidden relative border border-white/5">
<div id="clarity-feed">
<span className="text-[#FF6B35]">&gt;</span> <span id="typer-text">A</span><span className="w-2 h-3 inline-block bg-[#FF6B35] ml-1 align-middle animate-blink"></span>
</div>
</div>
<div className="mt-8 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse"></div>
<span className="font-mono text-[10px] tracking-widest text-[#FF6B35]">LIVE TELEMETRY FEED</span>
</div>
</div>

<div className="feature-card bg-[#F5F3EF] rounded-[2rem] p-8 md:p-10 text-[#0B0D12] border border-black/5 flex flex-col justify-between h-[400px]">
<div>
<h3 className="font-bricolage font-semibold text-3xl tracking-tight">Authority</h3>
<p className="font-bricolage text-sm text-[#0B0D12]/60 mt-2">Become The Go-To</p>
</div>
<div className="relative flex-1 mt-6 flex justify-center items-center">
<svg className="overflow-visible" fill="none" height="180" viewbox="0 0 160 180" width="160" xmlns="http://www.w3.org/2000/svg">
<path d="M10 10 L150 10 L100 120 L100 170 L60 170 L60 120 Z" fill="#E8E5DF" stroke="#0B0D12" strokeLinejoin="round" stroke-opacity="0.1" strokeWidth="1"></path>
<g id="funnel-particles">
<circle className="opacity-40" cx="80" cy="20" fill="#0B0D12" r="3"></circle>
<circle className="opacity-40" cx="50" cy="40" fill="#0B0D12" r="3"></circle>
<circle className="opacity-40" cx="110" cy="50" fill="#0B0D12" r="3"></circle>
<circle className="opacity-60" cx="70" cy="80" fill="#0B0D12" r="3"></circle>
<circle className="opacity-80" cx="90" cy="100" fill="#0B0D12" r="3"></circle>
<circle className="shadow-[0_0_10px_#FF6B35]" cx="80" cy="140" fill="#FF6B35" r="4"></circle>
</g>
</svg>
<div className="absolute inset-0 flex flex-col justify-between py-6 pointer-events-none">
<span className="font-mono text-[9px] tracking-wider text-[#0B0D12]/40 text-center">AWARENESS</span>
<span className="font-mono text-[9px] tracking-wider text-[#0B0D12]/40 text-center translate-y-4">NURTURE</span>
<span className="font-mono text-[9px] font-semibold tracking-wider text-[#FF6B35] text-center">CLIENT</span>
</div>
</div>
<div className="mt-4 font-mono text-[10px] tracking-widest text-[#0B0D12] bg-white px-3 py-2 rounded-lg border border-black/5 text-center shadow-sm">
                    AUTHORITIES BUILT: <span className="text-[#FF6B35] font-medium">12/MO</span>
</div>
</div>

<div className="feature-card bg-[#161920] rounded-[2rem] p-8 md:p-10 text-[#F5F3EF] border border-white/5 flex flex-col justify-between h-[400px] relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="flex justify-between items-start">
<div>
<h3 className="font-bricolage font-semibold text-3xl tracking-tight text-white">Clients</h3>
<p className="font-bricolage text-sm text-white/50 mt-2">Attract Buyers Who Pay More</p>
</div>
<span className="font-mono text-[10px] tracking-widest text-[#FF6B35] border border-[#FF6B35]/30 px-2 py-1 rounded bg-[#FF6B35]/10">THE WYNN SYSTEM™</span>
</div>
</div>
<div className="relative flex-1 mt-8 flex flex-col justify-center z-10">

<div className="flex items-center justify-center gap-1.5 h-16">
<div className="w-1.5 h-full bg-[#FF6B35] rounded-full waveform-bar" style={{animationDelay: '0.1s'}}></div>
<div className="w-1.5 h-full bg-[#FF6B35] rounded-full waveform-bar" style={{animationDelay: '0.4s'}}></div>
<div className="w-1.5 h-full bg-[#FF6B35] rounded-full waveform-bar" style={{animationDelay: '0.2s'}}></div>
<div className="w-1.5 h-full bg-[#FF6B35] rounded-full waveform-bar" style={{animationDelay: '0.7s'}}></div>
<div className="w-1.5 h-full bg-[#FF6B35] rounded-full waveform-bar" style={{animationDelay: '0.3s'}}></div>
<div className="w-1.5 h-full bg-[#FF6B35] rounded-full waveform-bar" style={{animationDelay: '0.6s'}}></div>
<div className="w-1.5 h-full bg-[#FF6B35] rounded-full waveform-bar" style={{animationDelay: '0.2s'}}></div>
</div>
<div className="mt-6 text-center h-12">
<p className="font-mono text-xs text-white/80 transition-opacity duration-300" id="wynn-transcript"></p>
</div>
</div>
<div className="mt-4 flex items-center justify-between z-10">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="font-mono text-[10px] tracking-widest text-white/50">AI RECEPTIONIST LIVE</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-6 border-y border-white/5 overflow-hidden bg-[#0B0D12] relative z-10">
<div className="flex w-max animate-marquee">
<div className="flex items-center gap-8 px-4 font-mono text-xs tracking-widest text-white/50">
<span>40,000+ PODCAST SUBSCRIBERS</span> <span className="text-[#FF6B35]">✦</span>
<span>MEDICAL PRACTICES</span> <span className="text-[#FF6B35]">✦</span>
<span className="">VOICE AI IN 30+ BUSINESSES</span> <span className="text-[#FF6B35]">✦</span>
<span>CONSTRUCTION COMPANIES</span> <span className="text-[#FF6B35]">✦</span>
<span>FRANCHISE CONSULTANTS</span> <span className="text-[#FF6B35]">✦</span>
<span>CONVERSION RATES UP 3X</span> <span className="text-[#FF6B35]">✦</span>
<span>UTAH + NATIONWIDE</span> <span className="text-[#FF6B35]">✦</span>
<span>CRM SYSTEMS FULLY AUTOMATED</span> <span className="text-[#FF6B35]">✦</span>
<span>12 CLIENTS PER COHORT</span> <span className="text-[#FF6B35]">✦</span>
</div>

<div className="flex items-center gap-8 px-4 font-mono text-xs tracking-widest text-white/50">
<span>40,000+ PODCAST SUBSCRIBERS</span> <span className="text-[#FF6B35]">✦</span>
<span>MEDICAL PRACTICES</span> <span className="text-[#FF6B35]">✦</span>
<span>VOICE AI IN 30+ BUSINESSES</span> <span className="text-[#FF6B35]">✦</span>
<span>CONSTRUCTION COMPANIES</span> <span className="text-[#FF6B35]">✦</span>
<span>FRANCHISE CONSULTANTS</span> <span className="text-[#FF6B35]">✦</span>
<span>CONVERSION RATES UP 3X</span> <span className="text-[#FF6B35]">✦</span>
<span>UTAH + NATIONWIDE</span> <span className="text-[#FF6B35]">✦</span>
<span>CRM SYSTEMS FULLY AUTOMATED</span> <span className="text-[#FF6B35]">✦</span>
<span>12 CLIENTS PER COHORT</span> <span className="text-[#FF6B35]">✦</span>
</div>
</div>
</section>

<section className="py-32 px-4 md:px-8 relative overflow-hidden">
<div className="absolute inset-0 z-0 opacity-10">

<div className="w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#0B0D12_100%),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100%_100%,40px_40px,40px_40px]"></div>
</div>
<div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
<p className="manifesto-line font-bricolage text-xl md:text-3xl text-white/50 mb-2 opacity-0 translate-y-4">
                Most businesses don't fail because their product is bad.
            </p>
<p className="manifesto-line font-bricolage text-xl md:text-3xl text-white/50 mb-8 opacity-0 translate-y-4">
                They fail because their marketing is built in the wrong order.
            </p>
<h2 className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
<span className="manifesto-line font-dm italic text-5xl md:text-7xl text-white opacity-0 translate-y-8">We fix the</span>
<span className="font-dm italic text-7xl md:text-[8rem] text-[#FF6B35] tracking-tighter leading-none inline-block" id="manifesto-order">Order.</span>
</h2>
<p className="manifesto-line font-bricolage text-base md:text-lg text-white/60 max-w-2xl leading-relaxed opacity-0 translate-y-4">
                More content doesn't fix unclear offers. More leads don't fix weak follow-up. Before we run a single campaign, we install the infrastructure that makes everything compound.
            </p>
</div>
</section>

<section className="py-24 px-4 md:px-8 max-w-[90rem] mx-auto" id="mindset">
<div className="bg-[#161920] rounded-[3rem] border border-white/5 overflow-hidden flex flex-col lg:flex-row relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B35] rounded-full blur-[100px] opacity-[0.08] pointer-events-none"></div>

<div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10">
<div className="font-mono text-xs tracking-widest text-[#FF6B35] mb-6 inline-flex border border-[#FF6B35]/30 px-3 py-1.5 rounded bg-[#FF6B35]/5 self-start">FLAGSHIP PROGRAM</div>
<h2 className="font-dm italic text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6">
                    30 days. Complete infrastructure. Done.
                </h2>
<p className="font-bricolage text-base text-white/70 leading-relaxed mb-10">
                    MINDSET is not coaching. It's not done-for-you. It's a complete build — automation, CRM, landing page, voice AI, social, SEO direction, and live strategy. By day 30, your marketing makes sense.
                </p>
<div className="flex flex-wrap gap-4 mb-10 font-mono text-sm">
<div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F5F3EF]">
<span className="opacity-50 text-xs block mb-1">STATED VALUE</span>
                        $32,000+
                    </div>
<div className="bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-lg px-4 py-3 text-[#FF6B35]">
<span className="opacity-70 text-xs block mb-1">INVESTMENT</span>
                        $9,997
                    </div>
</div>
<div className="flex items-center gap-3 mb-10 text-white border-l-2 border-[#FF6B35] pl-4">
<div className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse"></div>
<span className="font-mono text-xs tracking-widest">12 BUSINESSES PER COHORT. NO EXCEPTIONS.</span>
</div>
<a className="btn-magnetic inline-flex relative group overflow-hidden bg-[#FF6B35] text-[#0B0D12] px-8 py-4 rounded-full font-bricolage font-semibold text-base tracking-tight self-start shadow-[0_0_30px_-10px_rgba(255,107,53,0.4)] hover:shadow-[0_0_50px_-10px_rgba(255,107,53,0.6)]" href="#apply">
<span className="relative z-10 flex items-center gap-2">Apply for MINDSET <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon></span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
</a>
</div>

<div className="w-full lg:w-1/2 bg-[#0B0D12]/50 p-10 md:p-16 border-l border-white/5 relative z-10">
<div className="font-mono text-xs tracking-widest text-white/40 mb-8 border-b border-white/5 pb-4">DELIVERABLES DEPLOYED</div>
<ul className="space-y-4 font-mono text-sm text-white/80" id="mindset-checklist">
<li className="flex items-center gap-4 opacity-0 -translate-x-4"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-bold" width="20"></iconify-icon> Complete Automation Machine</li>
<li className="flex items-center gap-4 opacity-0 -translate-x-4"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-bold" width="20"></iconify-icon> High-Conversion Landing Page</li>
<li className="flex items-center gap-4 opacity-0 -translate-x-4"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-bold" width="20"></iconify-icon> GHL CRM Platform Setup</li>
<li className="flex items-center gap-4 opacity-0 -translate-x-4"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-bold" width="20"></iconify-icon> Virtual AI Receptionist</li>
<li className="flex items-center gap-4 opacity-0 -translate-x-4"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-bold" width="20"></iconify-icon> Social Media Activation</li>
<li className="flex items-center gap-4 opacity-0 -translate-x-4"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-bold" width="20"></iconify-icon> 6-Month Organic Roadmap</li>
<li className="flex items-center gap-4 opacity-0 -translate-x-4"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-bold" width="20"></iconify-icon> SEO Article Strategy</li>
<li className="flex items-center gap-4 opacity-0 -translate-x-4"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-bold" width="20"></iconify-icon> Offer Polish &amp; Positioning</li>
<li className="flex items-center gap-4 opacity-0 -translate-x-4"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-bold" width="20"></iconify-icon> Comprehensive Onboarding</li>
<li className="flex items-center gap-4 opacity-0 -translate-x-4"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-bold" width="20"></iconify-icon> Weekly 1:1 Coaching (×6)</li>
<li className="flex items-center gap-4 opacity-0 -translate-x-4"><iconify-icon className="text-[#FF6B35]" icon="solar:check-circle-bold" width="20"></iconify-icon> 2-Day Live Mastermind in Utah</li>
</ul>
</div>
</div>
</section>

<section className="py-32 relative bg-[#161920] overflow-hidden" id="wynn">

<div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
<svg fill="none" height="400" viewbox="0 0 1200 400" width="1200" xmlns="http://www.w3.org/2000/svg">
<path d="M0 200 Q 150 50 300 200 T 600 200 T 900 200 T 1200 200" stroke="#FF6B35" strokeLinecap="round" strokeWidth="10"></path>
<path d="M0 200 Q 150 350 300 200 T 600 200 T 900 200 T 1200 200" stroke="#FF6B35" strokeLinecap="round" strokeWidth="10"></path>
</svg>
</div>
<div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
<div className="font-mono text-xs tracking-widest text-[#FF6B35] mb-6">THE WYNN SYSTEM™</div>
<h2 className="font-dm italic text-5xl md:text-7xl text-white tracking-tight mb-8">
                Every call answered.<br/>Every lead captured.<br/>Zero exceptions.
            </h2>
<p className="font-bricolage text-lg text-white/60 max-w-2xl leading-relaxed mb-12">
                THE WYNN SYSTEM is voice-first business infrastructure. AI call answering, intent detection, contextual routing, and automated follow-up. Built for businesses that can't afford to miss a call — which is every business.
            </p>
<div className="flex flex-wrap justify-center gap-3 mb-12 font-mono text-xs tracking-wider text-white/70">
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">AI RECEPTIONIST</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">INTENT DETECTION</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">AUTOMATED FOLLOW-UP</span>
</div>
<a className="font-bricolage font-semibold text-[#F5F3EF] border-b border-[#FF6B35] pb-1 hover:text-[#FF6B35] transition-colors flex items-center gap-2 group" href="#contact">
                Learn THE WYNN SYSTEM <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</section>


<section className="relative bg-[#0B0D12]">

<div className="protocol-card sticky top-0 h-screen w-full bg-[#0B0D12] flex items-center justify-center p-4 md:p-8 overflow-hidden z-10 border-b border-white/5">
<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<div className="font-mono text-xl text-[#FF6B35] mb-6">01 /</div>
<h2 className="font-bricolage font-semibold text-4xl md:text-6xl text-white tracking-tight mb-6">Brand. Authority. Infrastructure.</h2>
<p className="font-bricolage text-lg text-white/60 leading-relaxed max-w-lg">
                        We audit your positioning, sharpen your message, and install the infrastructure — CRM, automations, review systems — before we run a single campaign. Most agencies skip this step. We start here.
                    </p>
</div>
<div className="h-[400px] relative flex justify-center items-center">

<svg className="animate-[spin_20s_linear_infinite] opacity-50" fill="none" height="300" viewbox="0 0 300 300" width="300" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="150" r="140" stroke="#FF6B35" stroke-dasharray="10 10" strokeWidth="2"></circle>
<circle cx="150" cy="150" r="100" stroke="white" stroke-opacity="0.2" strokeWidth="1"></circle>
<rect height="200" stroke="#FF6B35" stroke-opacity="0.5" strokeWidth="1" transform="rotate(45 150 150)" width="200" x="50" y="50"></rect>
</svg>
</div>
</div>
</div>

<div className="protocol-card sticky top-0 h-screen w-full bg-[#161920] flex items-center justify-center p-4 md:p-8 overflow-hidden z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-b border-white/5">
<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<div className="font-mono text-xl text-[#FF6B35] mb-6">02 /</div>
<h2 className="font-bricolage font-semibold text-4xl md:text-6xl text-white tracking-tight mb-6">Voice AI + Automation.<br/>Running 24/7.</h2>
<p className="font-bricolage text-lg text-white/60 leading-relaxed max-w-lg">
                        THE WYNN SYSTEM goes live. Every call answered, every lead captured, every follow-up automated. Your business stops leaking revenue through missed touchpoints. The machine runs while you sleep.
                    </p>
</div>
<div className="h-[400px] relative flex justify-center items-center overflow-hidden w-full">

<div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="absolute w-full h-[2px] bg-[#FF6B35] shadow-[0_0_20px_#FF6B35] animate-[bounce-bar_3s_ease-in-out_infinite_alternate] transform -translate-y-1/2"></div>
</div>
</div>
</div>

<div className="protocol-card sticky top-0 h-screen w-full bg-[#0B0D12] flex items-center justify-center p-4 md:p-8 overflow-hidden z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<div className="font-mono text-xl text-[#FF6B35] mb-6">03 /</div>
<h2 className="font-bricolage font-semibold text-4xl md:text-6xl text-white tracking-tight mb-6">Traffic. Conversion. Authority.</h2>
<p className="font-bricolage text-lg text-white/60 leading-relaxed max-w-lg">
                        SEO, social, video, and paid channels feed into a conversion-optimized funnel built to your exact client profile. The infrastructure built in steps 1 and 2 amplifies every campaign. Results compound.
                    </p>
</div>
<div className="h-[400px] relative flex justify-center items-center w-full">

<svg fill="none" height="200" viewbox="0 0 500 200" width="100%" xmlns="http://www.w3.org/2000/svg">
<path className="stroke-dasharray-[1000] stroke-dashoffset-[1000] animate-[dash_3s_linear_infinite]" d="M0 100 H 150 L 170 50 L 210 180 L 240 20 L 270 140 L 290 100 H 500" stroke="#FF6B35" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-[#F5F3EF]">
<div className="max-w-7xl mx-auto">
<h2 className="font-bricolage font-semibold text-4xl md:text-5xl text-[#0B0D12] tracking-tight mb-16 text-center">Proof of Work</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="results-grid">

<div className="result-card bg-white rounded-[2rem] p-8 md:p-10 border border-black/5 shadow-sm opacity-0 translate-y-8">
<div className="font-mono text-[10px] tracking-widest text-[#0B0D12] border border-[#FF6B35]/30 px-3 py-1.5 rounded inline-block mb-8">MEDICAL PRACTICE</div>
<div className="font-bricolage font-bold text-6xl text-[#0B0D12] tracking-tighter mb-2">+340%</div>
<div className="font-bricolage text-[#0B0D12]/70 font-medium mb-8">Inbound calls captured</div>
<p className="font-dm italic text-2xl text-[#0B0D12] leading-tight mb-6">"We haven't missed a lead since the system went live."</p>
<div className="font-mono text-xs text-[#0B0D12]/40">— System Data Log</div>
</div>

<div className="result-card bg-white rounded-[2rem] p-8 md:p-10 border border-black/5 shadow-sm opacity-0 translate-y-8">
<div className="font-mono text-[10px] tracking-widest text-[#0B0D12] border border-[#FF6B35]/30 px-3 py-1.5 rounded inline-block mb-8">CONSTRUCTION CO.</div>
<div className="font-bricolage font-bold text-6xl text-[#0B0D12] tracking-tighter mb-2">3×</div>
<div className="font-bricolage text-[#0B0D12]/70 font-medium mb-8">Conversion rate increase</div>
<p className="font-dm italic text-2xl text-[#0B0D12] leading-tight mb-6">"The automated follow-up closes deals while we're on site."</p>
<div className="font-mono text-xs text-[#0B0D12]/40">— Client Outcome</div>
</div>

<div className="result-card bg-white rounded-[2rem] p-8 md:p-10 border border-black/5 shadow-sm opacity-0 translate-y-8">
<div className="font-mono text-[10px] tracking-widest text-[#0B0D12] border border-[#FF6B35]/30 px-3 py-1.5 rounded inline-block mb-8">FRANCHISE CONSULTANT</div>
<div className="font-bricolage font-bold text-6xl text-[#0B0D12] tracking-tighter mb-2">$0</div>
<div className="font-bricolage text-[#0B0D12]/70 font-medium mb-8">Missed touchpoint revenue</div>
<p className="font-dm italic text-2xl text-[#0B0D12] leading-tight mb-6">"Our entire CRM is now a cohesive machine."</p>
<div className="font-mono text-xs text-[#0B0D12]/40">— Infrastructure Impact</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-[#F5F3EF] border-t border-black/5 relative z-10" id="services">
<div className="max-w-7xl mx-auto">
<h2 className="font-bricolage font-semibold text-3xl md:text-4xl text-[#0B0D12] tracking-tight mb-12 text-center">The Arsenal</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

<div className="bg-white rounded-[2rem] p-8 md:p-10 border border-black/5 shadow-sm h-full flex flex-col">
<iconify-icon className="text-[#0B0D12] mb-6" icon="solar:settings-linear" width="32"></iconify-icon>
<h3 className="font-bricolage font-semibold text-2xl text-[#0B0D12] mb-4">Systems &amp; Automation</h3>
<p className="font-bricolage text-sm text-[#0B0D12]/70 mb-8 flex-grow">Complete CRM architecture and workflow deployment.</p>
<ul className="space-y-2 font-mono text-xs text-[#0B0D12]/60 mb-8">
<li>GoHighLevel Automation</li>
<li>CRM Setup &amp; Routing</li>
<li>SMS &amp; Email Sequences</li>
<li>Funnel Architecture</li>
</ul>
<a className="font-bricolage text-sm font-semibold text-[#0B0D12] hover:text-[#FF6B35] transition-colors flex items-center gap-1" href="#">See Automation <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon></a>
</div>

<div className="bg-[#0B0D12] rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-2xl h-full lg:scale-105 relative overflow-hidden flex flex-col z-10 ring-2 ring-[#FF6B35]/40">
<div className="absolute inset-0 bg-gradient-to-b from-[#FF6B35]/5 to-transparent pointer-events-none"></div>
<iconify-icon className="text-[#FF6B35] mb-6" icon="solar:microphone-3-linear" width="32"></iconify-icon>
<h3 className="font-bricolage font-semibold text-2xl text-white mb-4">THE WYNN SYSTEM™</h3>
<p className="font-bricolage text-sm text-white/70 mb-8 flex-grow">Voice-first business model. Ensure zero missed opportunities with intelligent AI infrastructure.</p>
<ul className="space-y-2 font-mono text-xs text-white/50 mb-10">
<li>AI Receptionist</li>
<li>Missed Call Automation</li>
<li>Conversational AI</li>
<li>Contextual Routing</li>
</ul>
<a className="btn-magnetic inline-flex justify-center relative group overflow-hidden bg-[#FF6B35] text-[#0B0D12] px-6 py-3 rounded-full font-bricolage font-semibold text-sm tracking-tight w-full" href="#wynn">
<span className="relative z-10">Learn THE WYNN SYSTEM</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
</a>
</div>

<div className="bg-white rounded-[2rem] p-8 md:p-10 border border-black/5 shadow-sm h-full flex flex-col">
<iconify-icon className="text-[#0B0D12] mb-6" icon="solar:graph-up-linear" width="32"></iconify-icon>
<h3 className="font-bricolage font-semibold text-2xl text-[#0B0D12] mb-4">Creative &amp; Growth</h3>
<p className="font-bricolage text-sm text-[#0B0D12]/70 mb-8 flex-grow">Traffic and conversion assets that feed the machine.</p>
<ul className="space-y-2 font-mono text-xs text-[#0B0D12]/60 mb-8">
<li>Conversion Web Design</li>
<li>SEO Strategy</li>
<li>Social Media Activation</li>
<li>Video Content Production</li>
</ul>
<a className="font-bricolage text-sm font-semibold text-[#0B0D12] hover:text-[#FF6B35] transition-colors flex items-center gap-1" href="#">See Creative <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon></a>
</div>
</div>
<div className="text-center mt-12 font-bricolage text-sm text-[#0B0D12]/60">
                Need all of it, built in 30 days? <a className="text-[#FF6B35] font-semibold hover:underline underline-offset-4" href="#mindset">That's MINDSET.</a>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-[#0B0D12] relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#0B0D12] to-[#0B0D12] pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

<div className="bg-white/5 backdrop-blur-sm rounded-[2rem] p-10 md:p-16 border border-white/5 flex flex-col justify-center">
<div className="font-mono text-xs tracking-widest text-[#FF6B35] mb-6">WEEKLY COACHING</div>
<h3 className="font-dm italic text-4xl text-white mb-6">Built for the long game.</h3>
<p className="font-bricolage text-white/60 leading-relaxed mb-10">
                    The Foundry runs every week. Group coaching, marketing training, and a community of Utah entrepreneurs building audience and mastering their systems.
                </p>
<a className="font-bricolage font-semibold text-[#F5F3EF] hover:text-[#FF6B35] transition-colors flex items-center gap-2 group self-start" href="#">
                    Join The Foundry <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="bg-[#161920] rounded-[2rem] p-10 md:p-16 border border-white/5 flex flex-col justify-center relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-[#FF6B35]/5 rounded-bl-full pointer-events-none"></div>
<div className="font-mono text-xs tracking-widest text-[#FF6B35] mb-6">PODCAST</div>
<h3 className="font-dm italic text-5xl md:text-7xl text-white mb-2 tracking-tight">
                    40,000<span className="text-[#FF6B35]">+</span>
</h3>
<p className="font-bricolage text-white/50 mb-8">Utah subscribers. Real reach.</p>
<div className="grid grid-cols-2 gap-3 mb-10 font-mono text-[10px] tracking-wider text-white/40">
<div className="bg-white/5 px-3 py-2 rounded">STUDIO PRODUCTION</div>
<div className="bg-white/5 px-3 py-2 rounded">40K+ AUDIENCE</div>
<div className="bg-white/5 px-3 py-2 rounded">VIDEO CONTENT</div>
<div className="bg-white/5 px-3 py-2 rounded">SEO BACKLINKS</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="btn-magnetic bg-white text-[#0B0D12] px-6 py-3 rounded-full font-bricolage font-semibold text-sm tracking-tight text-center" href="#">Apply to Be a Guest</a>
<a className="px-6 py-3 rounded-full font-bricolage font-semibold text-sm tracking-tight border border-white/20 text-white hover:bg-white/5 transition-colors text-center" href="#">Watch Latest</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-[#0B0D12] relative flex flex-col items-center justify-center min-h-[60vh] overflow-hidden">
<div className="font-mono text-[10px] tracking-[0.3em] text-[#FF6B35] mb-12 text-center z-10 bg-[#0B0D12] px-4">
            UTAH COUNTY • SALT LAKE COUNTY • WASATCH FRONT<br/><span className="text-white/40 mt-2 inline-block">+ NATIONWIDE CLIENTS</span>
</div>
<div className="relative w-full max-w-[400px] aspect-[3/4] opacity-50">

<svg className="w-full h-full stroke-white/20 stroke-1" fill="none" viewbox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
<path d="M 50 50 L 250 50 L 250 150 L 280 150 L 280 350 L 50 350 Z"></path>
</svg>

<div className="absolute top-[40%] left-[55%] w-2 h-2 bg-[#FF6B35] rounded-full map-dot group">
<div className="absolute inset-0 rounded-full bg-[#FF6B35] animate-ping opacity-75"></div>
<span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[9px] bg-[#0B0D12] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">SALT LAKE CITY</span>
</div>
<div className="absolute top-[48%] left-[60%] w-2 h-2 bg-[#FF6B35] rounded-full map-dot group" style={{animationDelay: '0.5s'}}>
<div className="absolute inset-0 rounded-full bg-[#FF6B35] animate-ping opacity-75" style={{animationDelay: '0.5s'}}></div>
<span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[9px] bg-[#0B0D12] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LEHI (HQ)</span>
</div>
<div className="absolute top-[52%] left-[62%] w-1.5 h-1.5 bg-[#FF6B35] rounded-full map-dot group" style={{animationDelay: '1.2s'}}>
<div className="absolute inset-0 rounded-full bg-[#FF6B35] animate-ping opacity-75" style={{animationDelay: '1.2s'}}></div>
</div>
<div className="absolute top-[55%] left-[63%] w-1.5 h-1.5 bg-[#FF6B35] rounded-full map-dot group" style={{animationDelay: '0.8s'}}>
<div className="absolute inset-0 rounded-full bg-[#FF6B35] animate-ping opacity-75" style={{animationDelay: '0.8s'}}></div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-[#F5F3EF] text-[#0B0D12]">
<div className="max-w-3xl mx-auto">
<h2 className="font-bricolage font-semibold text-3xl md:text-4xl tracking-tight mb-12 text-center">Common Questions</h2>
<div className="space-y-4" id="faq-container">

<div className="faq-item bg-white rounded-2xl border border-black/5 overflow-hidden transition-all duration-300">
<button className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
<span className="font-bricolage font-semibold text-lg flex items-center gap-4">
<span className="font-mono text-xs text-[#FF6B35]">01 /</span> What is MINDSET and who is it for?
                        </span>
<iconify-icon className="transition-transform duration-300 faq-icon text-black/50" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 bg-black/[0.02]">
<p className="p-6 pt-0 font-bricolage text-sm text-[#0B0D12]/70 leading-relaxed border-l-2 border-[#FF6B35] ml-6">
                            MINDSET is our flagship 30-day infrastructure build. It is for established entrepreneurs who have a working product or service, but lack the cohesive marketing machine to scale it. We build the CRM, automations, landing pages, and voice AI necessary to capture and convert traffic.
                        </p>
</div>
</div>

<div className="faq-item bg-white rounded-2xl border border-black/5 overflow-hidden transition-all duration-300">
<button className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
<span className="font-bricolage font-semibold text-lg flex items-center gap-4">
<span className="font-mono text-xs text-[#FF6B35]">02 /</span> What is THE WYNN SYSTEM?
                        </span>
<iconify-icon className="transition-transform duration-300 faq-icon text-black/50" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 bg-black/[0.02]">
<p className="p-6 pt-0 font-bricolage text-sm text-[#0B0D12]/70 leading-relaxed border-l-2 border-[#FF6B35] ml-6">
                            It is our proprietary voice-first business infrastructure. It deploys conversational AI receptionists that answer every call, detect caller intent, route to the correct human if needed, and trigger automated follow-up sequences in your CRM. Zero missed calls.
                        </p>
</div>
</div>

<div className="faq-item bg-white rounded-2xl border border-black/5 overflow-hidden transition-all duration-300">
<button className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
<span className="font-bricolage font-semibold text-lg flex items-center gap-4">
<span className="font-mono text-xs text-[#FF6B35]">03 /</span> Do you work outside Utah?
                        </span>
<iconify-icon className="transition-transform duration-300 faq-icon text-black/50" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 bg-black/[0.02]">
<p className="p-6 pt-0 font-bricolage text-sm text-[#0B0D12]/70 leading-relaxed border-l-2 border-[#FF6B35] ml-6">
                            Yes. While our headquarters and studio are in Lehi, Utah, and we host live Masterminds here, our digital infrastructure and systems are deployed for clients nationwide.
                        </p>
</div>
</div>

<div className="faq-item bg-white rounded-2xl border border-black/5 overflow-hidden transition-all duration-300">
<button className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
<span className="font-bricolage font-semibold text-lg flex items-center gap-4">
<span className="font-mono text-xs text-[#FF6B35]">04 /</span> What makes INCubator different?
                        </span>
<iconify-icon className="transition-transform duration-300 faq-icon text-black/50" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 bg-black/[0.02]">
<p className="p-6 pt-0 font-bricolage text-sm text-[#0B0D12]/70 leading-relaxed border-l-2 border-[#FF6B35] ml-6">
                            We don't sell piecemeal services like "just Facebook ads" or "just a website." We build interconnected systems. We believe fixing the order of operations—infrastructure first, traffic second—is the only way to generate compounding results.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 text-center bg-[#0B0D12] relative overflow-hidden z-10" id="apply">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B35] rounded-full blur-[150px] opacity-20 pointer-events-none z-0"></div>
<div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
<h2 className="font-dm italic text-6xl md:text-8xl text-white tracking-tight mb-6" id="final-cta-head">Ready to stop guessing?</h2>
<p className="font-bricolage text-lg text-white/60 mb-8 max-w-xl">
                A strategy call takes 30 minutes. We map your gaps, build your plan, show you exactly what needs to happen and in what order.
            </p>
<div className="font-mono text-[10px] tracking-widest text-[#FF6B35] mb-10 bg-[#FF6B35]/10 px-4 py-2 rounded-full border border-[#FF6B35]/20">
                MINDSET COHORTS FILL. APPLY BEFORE THE NEXT ONE CLOSES.
            </div>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="btn-magnetic relative group overflow-hidden bg-[#FF6B35] text-[#0B0D12] px-10 py-4 rounded-full font-bricolage font-semibold text-base tracking-tight shadow-[0_0_40px_-10px_rgba(255,107,53,0.5)] w-full sm:w-auto" href="#">
<span className="relative z-10">Apply for MINDSET</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
</a>
<a className="px-10 py-4 rounded-full font-bricolage font-semibold text-base tracking-tight border border-white/20 text-white hover:bg-white/5 transition-colors w-full sm:w-auto" href="#">
                    Schedule a Strategy Call
                </a>
</div>
</div>
</section>

<footer className="bg-[#0B0D12] pt-20 pb-10 px-4 md:px-12 border-t border-white/5 rounded-t-[3rem] md:rounded-t-[4rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] mt-[-2rem]">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
<div>
<div className="font-bricolage font-semibold tracking-tighter text-5xl md:text-7xl text-white flex items-center gap-1 mb-2">
                        INCubator
                    </div>
<div className="font-dm italic text-2xl text-white/50">For Entrepreneurs Who Want to Win.</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 font-bricolage text-sm text-white/60">
<div>
<h4 className="text-white font-semibold mb-6 tracking-wide">Services</h4>
<ul className="space-y-3">
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">THE WYNN SYSTEM</a></li>
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">Google Reviews Automation</a></li>
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">The Foundry Coaching</a></li>
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">SEO &amp; Infrastructure</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 tracking-wide">Resources</h4>
<ul className="space-y-3">
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">Articles &amp; Insights</a></li>
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">Training Events</a></li>
<li><a className="hover:text-[#FF6B35] transition-colors" href="#">Business Spotlight Podcast</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 tracking-wide">Contact</h4>
<ul className="space-y-3 font-mono text-xs text-white/50">
<li>team@theincubator.co</li>
<li>1633 W Innovation Way<br/>Lehi, UT 84043</li>
<li className="pt-4"><a className="font-bricolage text-sm text-white hover:text-[#FF6B35] transition-colors flex items-center gap-1" href="#">Contact Us &amp; Newsletter <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a></li>
</ul>
</div>
</div>

<div className="border-t border-white/10 pt-8 pb-6 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse relative">
<div className="absolute inset-0 rounded-full bg-green-500 blur-[4px] opacity-50"></div>
</div>
<span className="font-mono text-[10px] tracking-widest text-white/40">SYSTEMS ONLINE — ALL AUTOMATIONS RUNNING</span>
</div>

<div className="flex flex-col md:flex-row justify-between items-center text-white/30 font-mono text-[10px]">
<p>© 2026 The INCubator Marketing Agency.</p>
<div className="flex gap-4 mt-2 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
