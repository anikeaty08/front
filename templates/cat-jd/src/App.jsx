import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');
            
            const revealOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const revealOnScroll = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, revealOptions);

            reveals.forEach(reveal => {
                revealOnScroll.observe(reveal);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full p-6 md:p-10 z-50 mix-blend-difference text-white pointer-events-none flex justify-between items-start">
<div className="uppercase tracking-[0.2em] text-xs font-medium">
            Cathryn McCoy
        </div>
<div className="uppercase tracking-[0.2em] text-xs font-medium hidden md:block">
            J.D. Class of '26
        </div>
</header>

<section className="relative min-h-screen p-4 md:p-8 flex flex-col justify-end">
<div className="absolute inset-4 md:inset-8 rounded-2xl overflow-hidden reveal active">
<img alt="Cat McCoy Official Law School Photo" className="w-full h-full object-cover object-[50%_20%]" src="https://assets.cdn.filesafe.space/KALcb59FRo6Yq0Wy7qaZ/media/69dde446caf24b80a015df8e.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/90 via-[#1a365d]/20 to-transparent"></div>
</div>
<div className="relative z-10 p-6 md:p-16 w-full max-w-7xl mx-auto flex flex-col justify-end h-full mt-auto text-[#faf8f5] reveal active delay-200">
<h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-none font-medium tracking-tight mb-6">She Did It.</h1>
<div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-12">
<h2 className="text-xl md:text-3xl font-light tracking-tight">Cathryn "Cat" McCoy, <span className="italic font-serif">Juris Doctor</span></h2>
<p className="text-xs md:text-sm uppercase tracking-[0.15em] text-[#c9a227] font-medium pb-1 md:pb-2">University of Colorado Law School • Class of 2026</p>
</div>
<div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 animate-bounce text-[#faf8f5]/70">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 md:py-40 px-6 relative reveal">
<div className="max-w-3xl mx-auto text-center">
<h2 className="font-serif text-[#1a365d] text-4xl md:text-6xl font-medium tracking-tight mb-8">You're Invited</h2>
<p className="text-lg md:text-xl italic font-serif text-[#2d3748]/80 mb-16 text-balance">Join us in celebrating Cat's graduation from law school</p>
<div className="grid md:grid-cols-2 gap-12 md:gap-24 text-sm uppercase tracking-[0.1em] mb-20">
<div className="flex flex-col items-center">
<iconify-icon className="text-[#c9a227] mb-4" icon="solar:calendar-linear" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-[#1a365d] font-medium mb-2">Friday, May 8th, 2026</p>
<p className="text-[#2d3748]/60">4:00 PM</p>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="text-[#c9a227] mb-4" icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-[#1a365d] font-medium mb-2">The Burns Pub &amp; Restaurant</p>
<p className="text-[#2d3748]/60 leading-relaxed">9009 Metro Airport Ave<br/>Broomfield, Colorado</p>
</div>
</div>
<p className="text-sm italic font-serif text-[#2d3748]/70 mb-12">An intimate gathering with family and friends</p>
<div className="flex flex-col items-center reveal delay-200">
<a className="block p-4 bg-white rounded-xl shadow-[0_20px_40px_rgb(26,54,93,0.06)] mb-6 transition-transform hover:-translate-y-2 duration-500" href="https://link.rockettools.io/qr/ucPFwJEBXbDM" target="_blank">
<img alt="RSVP QR Code" className="w-32 h-32 md:w-40 md:h-40 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1829b250-3e70-4442-990a-37545e9a129b_800w.jpg"/>
</a>
<p className="text-xs font-medium tracking-[0.15em] text-[#1a365d] uppercase">Scan or Click to RSVP</p>
</div>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-[#1a365d]/10 to-transparent max-w-4xl mx-auto mb-20 md:mb-32"></div>

<section className="py-16 md:py-24 px-6 max-w-5xl mx-auto text-center reveal">
<h3 className="font-serif text-[#1a365d] text-4xl md:text-5xl font-medium tracking-tight mb-16">A Journey of Dedication</h3>
<div className="grid md:grid-cols-3 gap-12 text-[#2d3748] relative">
<div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-[#c9a227]/0 via-[#c9a227]/40 to-[#c9a227]/0 z-0"></div>
<div className="space-y-6 relative z-10">
<div className="w-12 h-12 mx-auto bg-[#faf8f5] border border-[#c9a227]/30 rounded-full flex items-center justify-center text-[#c9a227]">
<span className="text-sm font-serif italic">01</span>
</div>
<div>
<p className="text-xs uppercase tracking-[0.15em] text-[#c9a227] font-medium mb-3">The Beginning</p>
<h4 className="font-serif text-2xl text-[#1a365d] tracking-tight mb-3">Corsicana, Texas</h4>
<p className="text-sm font-light text-balance text-[#2d3748]/70 leading-relaxed">Where small-town roots and big dreams first took hold.</p>
</div>
</div>
<div className="space-y-6 relative z-10 delay-100 reveal">
<div className="w-12 h-12 mx-auto bg-[#faf8f5] border border-[#c9a227]/30 rounded-full flex items-center justify-center text-[#c9a227]">
<span className="text-sm font-serif italic">02</span>
</div>
<div>
<p className="text-xs uppercase tracking-[0.15em] text-[#c9a227] font-medium mb-3">The Foundation</p>
<h4 className="font-serif text-2xl text-[#1a365d] tracking-tight mb-3">Austin, Texas</h4>
<p className="text-sm font-light text-balance text-[#2d3748]/70 leading-relaxed">Finding her voice and a passion for advocacy at the University of Texas.</p>
</div>
</div>
<div className="space-y-6 relative z-10 delay-200 reveal">
<div className="w-12 h-12 mx-auto bg-[#faf8f5] border border-[#c9a227]/30 rounded-full flex items-center justify-center text-[#c9a227]">
<span className="text-sm font-serif italic">03</span>
</div>
<div>
<p className="text-xs uppercase tracking-[0.15em] text-[#c9a227] font-medium mb-3">The Achievement</p>
<h4 className="font-serif text-2xl text-[#1a365d] tracking-tight mb-3">Boulder, Colorado</h4>
<p className="text-sm font-light text-balance text-[#2d3748]/70 leading-relaxed">Conquering the Rockies and earning her Juris Doctor degree.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 mt-12 md:mt-24">
<div className="max-w-4xl mx-auto bg-[#1a365d] text-[#faf8f5] text-center rounded-[2rem] md:rounded-[4rem] p-12 md:p-24 shadow-2xl reveal">
<iconify-icon className="text-[#c9a227] mb-8" icon="solar:star-fall-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-8 text-balance leading-tight">"Fight for the things that you care about, but do it in a way that will lead others to join you."</h3>
<p className="text-sm uppercase tracking-[0.2em] text-[#c9a227] font-medium">— Justice Ruth Bader Ginsburg</p>
</div>
</section>

<section className="py-24 md:py-40 px-6 text-center flex flex-col items-center">
<div className="reveal mb-12">

<div className="w-56 h-72 md:w-72 md:h-96 mx-auto rounded-t-full rounded-b-full overflow-hidden border border-[#c9a227]/40 p-3 bg-white shadow-xl">
<img alt="Cat McCoy Portrait" className="w-full h-full object-cover rounded-t-full rounded-b-full object-[50%_20%]" src="https://assets.cdn.filesafe.space/KALcb59FRo6Yq0Wy7qaZ/media/69dde446caf24b80a015df8e.jpg"/>
</div>
</div>
<div className="max-w-2xl mx-auto reveal delay-200">
<p className="text-[#c9a227] tracking-[0.2em] text-xs font-medium uppercase mb-6">Class of 2026</p>
<h2 className="font-serif text-[#1a365d] text-5xl md:text-7xl font-medium tracking-tight mb-8">Cathryn McCoy, <span className="italic text-4xl md:text-6xl">J.D.</span></h2>
<p className="text-lg md:text-xl font-light text-[#2d3748]/80 leading-relaxed text-balance mb-12">
                After years of hard work, late nights, and unyielding determination, Cat is officially becoming a lawyer. We couldn't be more proud of the brilliant woman she is.
            </p>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-[#1a365d]/10 to-transparent max-w-4xl mx-auto"></div>

<section className="py-32 md:py-48 px-6 text-center reveal">
<div className="max-w-2xl mx-auto">
<h2 className="font-serif text-[#1a365d] text-4xl md:text-5xl font-medium tracking-tight mb-16">Celebrate With Us</h2>
<div className="space-y-6 mb-16">
<p className="text-lg font-medium text-[#2d3748] tracking-wide">Friday, May 8th, 2026 at 4:00 PM</p>
<div className="text-sm font-light text-[#2d3748]/70 space-y-1">
<p className="font-medium text-[#1a365d] text-base">The Burns Pub &amp; Restaurant</p>
<p>9009 Metro Airport Ave</p>
<p>Broomfield, Colorado 80021</p>
</div>
</div>
<p className="text-sm md:text-base italic font-serif text-[#2d3748]/60 text-balance mb-16 px-4">
                A traditional British pub featuring over 500 whiskeys, scratch-made food, and a warm atmosphere — the perfect place to toast Cat's achievement.
            </p>
<div className="inline-flex flex-col items-center">
<a className="block p-6 bg-white rounded-2xl shadow-[0_20px_50px_rgb(26,54,93,0.08)] mb-8 transition-transform hover:scale-105 duration-500" href="https://link.rockettools.io/qr/ucPFwJEBXbDM" target="_blank">
<img alt="RSVP QR Code" className="w-48 h-48 md:w-56 md:h-56 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1829b250-3e70-4442-990a-37545e9a129b_800w.jpg"/>
</a>
<p className="text-sm font-medium tracking-[0.2em] text-[#1a365d] uppercase mb-12">Scan or Click to RSVP</p>
</div>
<p className="text-xl font-serif italic text-[#c9a227]">We can't wait to celebrate with you.</p>
</div>
</section>

<footer className="py-12 px-6 border-t border-[#1a365d]/10 text-center bg-white">
<div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
<h4 className="font-serif text-xl text-[#1a365d] font-medium tracking-tight">Cathryn "Cat" McCoy, J.D.</h4>
<p className="text-xs uppercase tracking-[0.15em] text-[#2d3748]/50">University of Colorado Law School • Class of 2026</p>
<p className="text-sm italic font-serif text-[#d4a373] mt-4">From Corsicana to Boulder — she did it.</p>
</div>
</footer>



    </>
  );
}
