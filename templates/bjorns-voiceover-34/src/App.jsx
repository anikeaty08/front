import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optional: Unobserve after animating once
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-up').forEach(element => {
                observer.observe(element);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center relative z-50 border-b border-[#1A1A1A]/10">
<a className="font-mono text-base tracking-tighter uppercase text-[#1A1A1A] hover:text-[#C4562A] transition-colors" href="#">
            BJORNS VOICEOVERS
        </a>

<div className="hidden md:flex space-x-10 font-mono text-xs uppercase tracking-[3px] text-[#1A1A1A]/80">
<a className="nav-link pb-1" href="#">Home</a>
<a className="nav-link pb-1" href="#about">About</a>
<a className="nav-link pb-1" href="#projects">Projects</a>
<a className="nav-link pb-1" href="#testimonials">Testimonials</a>
<a className="nav-link pb-1" href="#contact">Contact</a>
</div>

<button className="md:hidden text-[#1A1A1A]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<section className="px-6 md:px-12 max-w-[1400px] mx-auto py-12 lg:py-16 fade-up">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="w-full z-10">
<h1 className="font-display text-6xl md:text-8xl lg:text-[8rem] text-[#1A1A1A] leading-[0.9] tracking-tight mb-8">
                    The Voice<br/>You Need.
                </h1>

<p className="font-body italic text-2xl md:text-3xl text-[#C4562A] border-l-[3px] border-[#C4562A] pl-5 mb-12 leading-relaxed">
                    Need a quality voice? No Problem.
                </p>

<a className="inline-flex items-center gap-3 bg-[#C4562A] text-[#F5F0E8] font-mono uppercase tracking-widest text-xs px-12 py-8 btn-fill border border-[#C4562A] hover:border-[#1A1A1A] transition-colors w-fit" href="#contact">
                    Book Now <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="w-full flex justify-center lg:justify-end">
<div className="flex flex-col w-full max-w-[400px]">

<div className="relative w-full aspect-square rounded-full border border-[#C4562A] p-2 mb-6">
<div className="w-full h-full rounded-full overflow-hidden border border-[#1A1A1A]/10">
<img alt="Björn" className="w-full h-full object-cover filter grayscale contrast-125 sepia-[0.1]" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>

<div className="bg-[#F5F0E8] p-5 shadow-md border border-[#1A1A1A]/10 w-full flex items-center gap-5">
<button className="w-14 h-14 flex-shrink-0 border border-[#1A1A1A] rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-[#C4562A] hover:border-[#C4562A] hover:text-[#F5F0E8] transition-all duration-300">
<iconify-icon className="ml-1" height="24" icon="solar:play-linear" width="24"></iconify-icon>
</button>
<div className="flex-1 flex flex-col gap-3">
<div className="flex justify-between font-mono text-[0.65rem] text-[#1A1A1A]/60 tracking-widest">
<span>VO_DEMO_01.WAV</span>
<span>0:00 / 1:45</span>
</div>
<div className="h-1.5 w-full bg-[#1A1A1A]/10 rounded-full overflow-hidden relative cursor-pointer group">
<div className="absolute top-0 left-0 h-full bg-[#C4562A] w-[35%] rounded-full group-hover:bg-[#1A1A1A] transition-colors"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 fade-up">
<div className="marquee-container py-5">
<div className="marquee-content font-mono text-sm tracking-widest text-[#1A1A1A]/80 uppercase">

<span className="px-6">SAAB</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">TUI</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Roche</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Apple</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Google</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Renishaw</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Summit Racing</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Laver Cup</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Mini Clubman</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Glasslogos</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Tactic Boardgames</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Tesla</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">TT-Line</span><span className="text-[#C4562A] opacity-50">•</span>

<span className="px-6">SAAB</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">TUI</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Roche</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Apple</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Google</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Renishaw</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Summit Racing</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Laver Cup</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Mini Clubman</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Glasslogos</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Tactic Boardgames</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">Tesla</span><span className="text-[#C4562A] opacity-50">•</span>
<span className="px-6">TT-Line</span><span className="text-[#C4562A] opacity-50">•</span>
</div>
</div>
</section>

<section className="py-12 lg:py-16 px-6 md:px-12 max-w-[1400px] mx-auto fade-up" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

<div className="lg:col-span-8 space-y-6">
<h2 className="font-mono text-xs uppercase tracking-widest text-[#C4562A] mb-8">About The Voice</h2>
<p className="font-body text-xl md:text-2xl text-[#1A1A1A] leading-relaxed">
                    Character voices and Narration in International English – or with different Accents! Commercials and Narration in my own neutral south swedish accent or in national swedish.
                </p>
<p className="font-body text-lg text-[#1A1A1A]/70 leading-relaxed">
                    Björns voice is both warm, trustworthy and enthusiastic. He has credibility and takes his work seriously and loves it. Either it's a shorter radio ad or longer e-learning project, Björn can do itall.</p>
<div className="pt-6">
<a className="inline-flex items-center gap-3 text-[#1A1A1A] hover:text-[#C4562A] font-mono uppercase tracking-widest text-xs transition-colors nav-link w-fit pb-1" href="#contact">
                        Request a custom audition <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-4 bg-[#1A1A1A] text-[#F5F0E8] p-10 flex flex-col gap-10 shadow-lg">
<div>
<iconify-icon className="text-[#C4562A] text-4xl mb-4" icon="solar:microphone-3-linear"></iconify-icon>
<h3 className="font-display text-3xl mb-3">Pro Studio</h3>
<p className="font-body text-sm text-[#F5F0E8]/70 leading-relaxed">
                        Broadcast-quality audio delivered fast. Neumann TLM 103, Universal Audio Apollo Twin, and a WhisperRoom™ isolated booth.
                    </p>
</div>
<div className="w-full h-px bg-[#F5F0E8]/20"></div>
<div>
<iconify-icon className="text-[#C4562A] text-4xl mb-4" icon="solar:global-linear"></iconify-icon>
<h3 className="font-display text-3xl mb-3">Languages</h3>
<ul className="font-body text-sm text-[#F5F0E8]/70 space-y-2">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#C4562A] rounded-full"></div> International English</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#C4562A] rounded-full"></div> Neutral South Swedish</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#C4562A] rounded-full"></div> National Swedish</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 md:px-12 bg-[#1A1A1A] text-[#F5F0E8] mt-12" id="projects">
<div className="max-w-[1400px] mx-auto fade-up">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
<div>
<h2 className="font-mono text-xs uppercase tracking-widest text-[#C4562A] mb-6">Audio Portfolio</h2>
<h3 className="font-display text-5xl md:text-7xl text-[#F5F0E8] leading-[1.1]">
                        Listen to the<br/>latest work.
                    </h3>
</div>
<a className="hidden md:inline-flex items-center gap-3 bg-transparent text-[#F5F0E8] font-mono uppercase tracking-widest text-xs px-10 py-6 border border-[#F5F0E8]/30 hover:border-[#C4562A] hover:bg-[#C4562A] transition-all duration-300 rounded-full" href="#contact">
                    Download All Demos
                </a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative border border-[#F5F0E8]/20 p-8 hover:border-[#C4562A] transition-colors duration-300 bg-[#1A1A1A]">
<div className="flex justify-between items-start mb-16">
<span className="font-mono text-[0.65rem] tracking-widest uppercase text-[#F5F0E8]/50 border border-[#F5F0E8]/20 px-3 py-1 rounded-full">Commercial</span>
<button className="w-14 h-14 rounded-full border border-[#F5F0E8]/30 flex items-center justify-center text-[#F5F0E8] group-hover:bg-[#C4562A] group-hover:border-[#C4562A] transition-all duration-300">
<iconify-icon className="ml-1" height="24" icon="solar:play-linear" width="24"></iconify-icon>
</button>
</div>
<div>
<h4 className="font-display text-3xl mb-2 text-[#F5F0E8]">SAAB</h4>
<p className="font-body text-sm text-[#F5F0E8]/60">Corporate Anthem &amp; TVC</p>
</div>

<div className="absolute bottom-0 left-0 h-1 bg-[#C4562A] w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
</div>

<div className="group relative border border-[#F5F0E8]/20 p-8 hover:border-[#C4562A] transition-colors duration-300 bg-[#1A1A1A]">
<div className="flex justify-between items-start mb-16">
<span className="font-mono text-[0.65rem] tracking-widest uppercase text-[#F5F0E8]/50 border border-[#F5F0E8]/20 px-3 py-1 rounded-full">E-Learning</span>
<button className="w-14 h-14 rounded-full border border-[#F5F0E8]/30 flex items-center justify-center text-[#F5F0E8] group-hover:bg-[#C4562A] group-hover:border-[#C4562A] transition-all duration-300">
<iconify-icon className="ml-1" height="24" icon="solar:play-linear" width="24"></iconify-icon>
</button>
</div>
<div>
<h4 className="font-display text-3xl mb-2 text-[#F5F0E8]">Roche</h4>
<p className="font-body text-sm text-[#F5F0E8]/60">Medical Explainer Series</p>
</div>
<div className="absolute bottom-0 left-0 h-1 bg-[#C4562A] w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
</div>

<div className="group relative border border-[#F5F0E8]/20 p-8 hover:border-[#C4562A] transition-colors duration-300 bg-[#1A1A1A]">
<div className="flex justify-between items-start mb-16">
<span className="font-mono text-[0.65rem] tracking-widest uppercase text-[#F5F0E8]/50 border border-[#F5F0E8]/20 px-3 py-1 rounded-full">Narration</span>
<button className="w-14 h-14 rounded-full border border-[#F5F0E8]/30 flex items-center justify-center text-[#F5F0E8] group-hover:bg-[#C4562A] group-hover:border-[#C4562A] transition-all duration-300">
<iconify-icon className="ml-1" height="24" icon="solar:play-linear" width="24"></iconify-icon>
</button>
</div>
<div>
<h4 className="font-display text-3xl mb-2 text-[#F5F0E8]">TUI</h4>
<p className="font-body text-sm text-[#F5F0E8]/60">Documentary Voiceover</p>
</div>
<div className="absolute bottom-0 left-0 h-1 bg-[#C4562A] w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 md:px-12 max-w-[1400px] mx-auto fade-up" id="testimonials">
<h2 className="font-mono text-xs uppercase tracking-widest text-[#C4562A] mb-12 text-center">Client Words</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

<div className="p-8 md:p-12 border border-[#1A1A1A]/10 bg-white relative">
<iconify-icon className="text-[#C4562A]/20 text-6xl absolute top-6 right-8" icon="solar:quote-right-bold-duotone"></iconify-icon>
<p className="font-body italic text-xl md:text-2xl text-[#1A1A1A] leading-relaxed mb-8 relative z-10">
                    "Björn's delivery was impeccable. He found the exact tone we were looking for on the first try, and the audio quality was pristine. Highly recommended!"
                </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center text-[#F5F0E8] font-mono text-sm">JS</div>
<div>
<p className="font-display text-lg text-[#1A1A1A]">Johan Svensson</p>
<p className="font-mono text-[0.65rem] tracking-widest text-[#1A1A1A]/60 uppercase">Creative Director, SAAB</p>
</div>
</div>
</div>

<div className="p-8 md:p-12 border border-[#1A1A1A]/10 bg-white relative mt-0 md:mt-12">
<iconify-icon className="text-[#C4562A]/20 text-6xl absolute top-6 right-8" icon="solar:quote-right-bold-duotone"></iconify-icon>
<p className="font-body italic text-xl md:text-2xl text-[#1A1A1A] leading-relaxed mb-8 relative z-10">
                    "Fast turnaround and excellent communication. The character voice he provided added so much depth to our board game marketing."
                </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-[#C4562A] rounded-full flex items-center justify-center text-[#F5F0E8] font-mono text-sm">ML</div>
<div>
<p className="font-display text-lg text-[#1A1A1A]">Maria Lindberg</p>
<p className="font-mono text-[0.65rem] tracking-widest text-[#1A1A1A]/60 uppercase">Tactic Boardgames</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-24 px-6 md:px-12 max-w-[1400px] mx-auto fade-up mb-12" id="contact">
<div className="bg-[#C4562A] p-12 md:p-24 text-center flex flex-col items-center shadow-xl relative overflow-hidden">

<iconify-icon className="text-[#F5F0E8]/5 text-[30rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" icon="solar:soundwave-circle-bold"></iconify-icon>
<h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] mb-6 relative z-10">
                Let's talk about<br/>your project.
            </h2>
<p className="font-body text-xl text-[#F5F0E8]/90 mb-12 max-w-2xl relative z-10">
                Reach out for a custom audition or a direct quote. I'm usually in the booth and ready to record. Let's make something sound great.
            </p>
<div className="flex flex-col sm:flex-row gap-6 relative z-10">
<a className="inline-flex items-center justify-center gap-3 bg-[#1A1A1A] text-[#F5F0E8] font-mono uppercase tracking-widest text-xs px-12 py-6 btn-fill border border-[#1A1A1A] hover:border-[#F5F0E8] transition-colors shadow-lg" href="mailto:hello@bjornsvoiceovers.com">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon> Email Me
                </a>
<a className="inline-flex items-center justify-center gap-3 bg-transparent text-[#F5F0E8] font-mono uppercase tracking-widest text-xs px-12 py-6 border border-[#F5F0E8] hover:bg-[#F5F0E8] hover:text-[#C4562A] transition-colors rounded-full shadow-lg" href="#">
<iconify-icon height="18" icon="solar:calendar-mark-linear" width="18"></iconify-icon> Book a Call
                </a>
</div>
</div>
</section>

<footer className="border-t border-[#1A1A1A]/10 bg-[#F5F0E8] pt-16 pb-8 px-6 md:px-12 mt-12">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="md:col-span-4">
<div className="flex items-center gap-2 font-mono text-sm tracking-tighter uppercase text-[#1A1A1A] mb-6">
<iconify-icon className="text-[#C4562A] text-xl" icon="solar:microphone-3-bold"></iconify-icon>
                    BJORNS VOICEOVERS
                </div>
<p className="font-body text-sm text-[#1A1A1A]/70 max-w-sm leading-relaxed mb-8">
                    The Voice You Need. Character voices and Narration in International English or with different Accents.
                </p>
<div className="flex gap-6">
<a className="text-[#1A1A1A] hover:text-[#C4562A] transition-colors duration-300" href="#">
<iconify-icon icon="mdi:linkedin" width="20"></iconify-icon>
</a>
<a className="text-[#1A1A1A] hover:text-[#C4562A] transition-colors duration-300" href="#">
<iconify-icon icon="mdi:twitter" width="20"></iconify-icon>
</a>
<a className="text-[#1A1A1A] hover:text-[#C4562A] transition-colors duration-300" href="#">
<iconify-icon icon="mdi:instagram" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="hidden md:block md:col-span-4"></div>

<div className="md:col-span-2">
<h4 className="font-mono text-xs uppercase tracking-widest text-[#C4562A] mb-6">Menu</h4>
<ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-[#1A1A1A]/80">
<li><a className="hover:text-[#C4562A] transition-colors" href="#">Home</a></li>
<li><a className="hover:text-[#C4562A] transition-colors" href="#about">About</a></li>
<li><a className="hover:text-[#C4562A] transition-colors" href="#projects">Projects</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-mono text-xs uppercase tracking-widest text-[#C4562A] mb-6">More</h4>
<ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-[#1A1A1A]/80">
<li><a className="hover:text-[#C4562A] transition-colors" href="#testimonials">Testimonials</a></li>
<li><a className="hover:text-[#C4562A] transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-[#C4562A] transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-[1400px] mx-auto border-t border-[#1A1A1A]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#1A1A1A]/50 text-center">
                © 2023 Björns Voiceovers. All rights reserved.
            </span>
</div>
</footer>



    </>
  );
}
