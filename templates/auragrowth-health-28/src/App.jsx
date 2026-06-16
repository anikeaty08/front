import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Intersection Observer for Scroll Animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-up, .reveal-zoom').forEach(el => {
                observer.observe(el);
            });

            // Parallax effect for Hero Image
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallaxImg = document.querySelector('.parallax-img');
                if(parallaxImg && scrolled < window.innerHeight) {
                    parallaxImg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.1)`;
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tight text-zinc-900 flex items-center gap-2 group" href="#">
<span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#f5e6a6] flex items-center justify-center shadow-[0_4px_10px_rgba(212,175,55,0.2)]">
<span className="text-black text-xs font-medium tracking-tighter">G</span>
</span>
                AuraGrowth
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
<a className="hover:text-[#d4af37] transition-colors duration-300" href="#what-you-get">What You Get</a>
<a className="hover:text-[#d4af37] transition-colors duration-300" href="#results">Results</a>
<a className="hover:text-[#d4af37] transition-colors duration-300" href="#faq">FAQ</a>
<a className="group relative overflow-hidden rounded-full px-6 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#f5e6a6] text-black shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105" href="#offer">
<span className="relative z-10 flex items-center gap-2 font-medium">
                        Get Access
                    </span>
</a>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 bg-black">
<img alt="Wellness Product" className="w-full h-full object-cover parallax-img transform scale-110 opacity-70" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-sm"></div>

<div className="relative z-10 w-full max-w-4xl mx-4 md:mx-auto text-center glass-hero rounded-[2rem] p-8 md:p-14 reveal-zoom mt-16">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Increase Your Height Naturally — <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f5e6a6]">Even After 18</span>
</h1>
<p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                Proven methods used by 1000+ people.
            </p>
<div className="flex flex-col items-center justify-center gap-8">
<a className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5e6a6] px-8 py-4 text-base font-medium text-black shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]" href="#offer">
                    Start Your Height Growth Journey
                    <iconify-icon className="text-xl transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>

<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 pt-4 border-t border-white/10 w-full max-w-3xl">
<span className="flex items-center gap-2 text-xs md:text-sm font-medium text-white/90">
<iconify-icon className="text-[#d4af37] text-base md:text-lg" icon="solar:star-bold"></iconify-icon> 
                        4.8/5 rating
                    </span>
<span className="flex items-center gap-2 text-xs md:text-sm font-medium text-white/90">
<iconify-icon className="text-[#d4af37] text-base md:text-lg" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon> 
                        1000+ users trusted
                    </span>
<span className="flex items-center gap-2 text-xs md:text-sm font-medium text-white/90">
<iconify-icon className="text-[#d4af37] text-base md:text-lg" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon> 
                        Secure payment
                    </span>
<span className="flex items-center gap-2 text-xs md:text-sm font-medium text-white/90">
<iconify-icon className="text-[#d4af37] text-base md:text-lg" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon> 
                        7-Day Money Back Guarantee
                    </span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-black/5" id="what-you-get">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-up">
<div>
<span className="text-[#d4af37] text-xs font-medium uppercase tracking-wider mb-4 block">The Blueprint</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900">What You Get</h2>
</div>
<p className="text-zinc-600 max-w-md text-sm md:text-base">Everything you need to unlock your full genetic potential in one premium package.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

<div className="luxury-card rounded-2xl p-8 reveal-up delay-100 flex flex-col">
<div className="w-12 h-12 rounded-full bg-[#fdfbf7] border border-[#d4af37]/20 flex items-center justify-center mb-6 text-[#d4af37]">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Height Growth Guide</h3>
<p className="text-sm text-zinc-600 leading-relaxed">The complete scientifically-backed manual to naturally increasing your height at any age.</p>
</div>

<div className="luxury-card rounded-2xl p-8 reveal-up delay-200 flex flex-col">
<div className="w-12 h-12 rounded-full bg-[#fdfbf7] border border-[#d4af37]/20 flex items-center justify-center mb-6 text-[#d4af37]">
<iconify-icon className="text-2xl" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Daily Routine Plan</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Step-by-step daily schedules designed to seamlessly integrate growth habits into your life.</p>
</div>

<div className="luxury-card rounded-2xl p-8 reveal-up delay-300 flex flex-col">
<div className="w-12 h-12 rounded-full bg-[#fdfbf7] border border-[#d4af37]/20 flex items-center justify-center mb-6 text-[#d4af37]">
<iconify-icon className="text-2xl" icon="solar:apple-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Diet Support</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Nutrition plans focusing on amino acids and minerals essential for bone density and HGH.</p>
</div>

<div className="luxury-card rounded-2xl p-8 reveal-up delay-400 flex flex-col">
<div className="w-12 h-12 rounded-full bg-[#fdfbf7] border border-[#d4af37]/20 flex items-center justify-center mb-6 text-[#d4af37]">
<iconify-icon className="text-2xl" icon="solar:body-shape-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Posture Correction</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Advanced routines to decompress the spine, fix slumping, and unlock hidden inches immediately.</p>
</div>
</div>
<div className="text-center reveal-up delay-300">
<a className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#d4af37] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]" href="#offer">
                    Get Access
                    <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#fbf9f6]" id="results">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 reveal-up">
<span className="text-[#d4af37] text-xs font-medium uppercase tracking-wider mb-4 block">Proven Results</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-4">Transformation</h2>
<p className="text-zinc-600 max-w-xl mx-auto text-sm md:text-base">Visible improvement in posture and height appearance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-zoom">

<div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-200 shadow-lg group">
<img alt="Before" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale opacity-80" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full border border-black/5 text-sm font-medium text-zinc-900 shadow-sm">
                        Before
                    </div>
</div>

<div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-200 shadow-lg group">
<img alt="After" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="default"/>
<div className="absolute bottom-6 right-6 bg-gradient-to-r from-[#d4af37] to-[#f5e6a6] px-5 py-2 rounded-full shadow-md text-sm font-medium text-black">
                        After
                    </div>
</div>
</div>
<div className="text-center mt-12 reveal-up">
<a className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5e6a6] px-8 py-3.5 text-sm font-medium text-black shadow-[0_4px_15px_rgba(212,175,55,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]" href="#offer">
                    Start Now
                    <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-black/5" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16 reveal-up">
<span className="text-[#d4af37] text-xs font-medium uppercase tracking-wider mb-4 block">Clarity</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900">Frequently Asked Questions</h2>
</div>
<div className="space-y-4 reveal-up delay-100">

<details className="group bg-[#fbf9f6] rounded-2xl border border-black/5 transition-all duration-300 [&amp;_summary::-webkit-details-marker]:hidden open:shadow-sm">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-zinc-900 text-sm md:text-base">
                        Kya 18 ke baad height badh sakti hai?
                        <iconify-icon className="text-xl transition-transform duration-300 group-open:-rotate-180 text-[#d4af37]" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-600 leading-relaxed border-t border-black/5 pt-4 mt-2">
                        Haan, proper posture correction, targeted stretching routines, aur right nutrition se spine decompression hota hai jisse visible height increase dikhti hai, even after 18.
                    </div>
</details>

<details className="group bg-[#fbf9f6] rounded-2xl border border-black/5 transition-all duration-300 [&amp;_summary::-webkit-details-marker]:hidden open:shadow-sm">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-zinc-900 text-sm md:text-base">
                        Kitne time me result milega?
                        <iconify-icon className="text-xl transition-transform duration-300 group-open:-rotate-180 text-[#d4af37]" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-600 leading-relaxed border-t border-black/5 pt-4 mt-2">
                        Consistency is key. Jyadatar users ko proper posture aur daily routines follow karne ke baad 30 se 60 dino ke andar visible improvements aur better confidence feel hone lagta hai.
                    </div>
</details>

<details className="group bg-[#fbf9f6] rounded-2xl border border-black/5 transition-all duration-300 [&amp;_summary::-webkit-details-marker]:hidden open:shadow-sm">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-zinc-900 text-sm md:text-base">
                        Kya safe hai?
                        <iconify-icon className="text-xl transition-transform duration-300 group-open:-rotate-180 text-[#d4af37]" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-600 leading-relaxed border-t border-black/5 pt-4 mt-2">
                        100% safe. Humara program entirely natural approach par based hai. Isme koi harmful pills, supplements, ya invasive surgeries shamil nahi hain. Sirf natural stretching, diet, aur habits.
                    </div>
</details>

<details className="group bg-[#fbf9f6] rounded-2xl border border-black/5 transition-all duration-300 [&amp;_summary::-webkit-details-marker]:hidden open:shadow-sm">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-zinc-900 text-sm md:text-base">
                        Refund milta hai?
                        <iconify-icon className="text-xl transition-transform duration-300 group-open:-rotate-180 text-[#d4af37]" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-600 leading-relaxed border-t border-black/5 pt-4 mt-2">
                        Bilkul! Humari 7-Day Money Back Guarantee hai. Agar aapko program se satisfaction nahi milti hai, toh aap pehle 7 dino ke andar bina kisi pareshani ke full refund claim kar sakte hain.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#fbf9f6] relative overflow-hidden" id="offer">
<div className="max-w-5xl mx-auto luxury-card bg-white rounded-[2.5rem] p-8 md:p-16 relative z-10 reveal-zoom">
<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="relative aspect-square rounded-3xl bg-[#fbf9f6] flex items-center justify-center overflow-hidden border border-black/5 group">
<img alt="Premium Kit" className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="flex flex-col">
<div className="flex flex-wrap gap-3 mb-6">
<span className="bg-[#d4af37]/10 text-[#d4af37] px-4 py-1.5 rounded-full text-xs font-medium border border-[#d4af37]/20 flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Limited time offer
                        </span>
<span className="bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-medium border border-red-100 flex items-center gap-1.5 animate-pulse">
<iconify-icon icon="solar:tag-price-linear"></iconify-icon> Only today discount
                        </span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">The Complete Growth Masterclass</h2>
<ul className="space-y-4 mb-8 text-sm text-zinc-600">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#d4af37] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Full video stretching &amp; posture routines
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#d4af37] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Complete HGH boosting nutritional guide
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#d4af37] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Lifetime access + future updates
                        </li>
</ul>
<div className="flex items-end gap-4 mb-8">
<span className="text-5xl font-medium text-zinc-900 tracking-tight">$49</span>
<span className="text-lg text-zinc-400 line-through mb-1.5">$199</span>
</div>
<a className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5e6a6] px-8 py-4 text-base font-medium text-black shadow-[0_10px_20px_rgba(212,175,55,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_30px_rgba(212,175,55,0.4)] mb-4" href="#">
                        Start Now
                        <iconify-icon className="text-xl" icon="solar:cart-large-2-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-500 bg-zinc-50 py-3 rounded-2xl border border-black/5">
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#d4af37]" icon="solar:lock-password-linear"></iconify-icon> Secure Checkout</span>
<span className="hidden sm:inline text-zinc-300">|</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#d4af37]" icon="solar:wallet-money-linear"></iconify-icon> 7-Day Guarantee</span>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none"></div>
</section>

<footer className="py-10 px-6 border-t border-black/5 bg-white">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded bg-gradient-to-br from-[#d4af37] to-[#f5e6a6] flex items-center justify-center">
<span className="text-black text-[10px] font-medium">G</span>
</span>
<span className="text-zinc-900 text-sm font-medium tracking-tight">AuraGrowth</span>
</div>
<p className="text-zinc-500 text-xs">
                © 2023 AuraGrowth. Premium Wellness Solutions.
            </p>
<div className="flex items-center gap-4">
<a className="text-zinc-400 hover:text-[#d4af37] transition-colors text-xs font-medium" href="#">Terms</a>
<a className="text-zinc-400 hover:text-[#d4af37] transition-colors text-xs font-medium" href="#">Privacy</a>
<a className="text-zinc-400 hover:text-[#d4af37] transition-colors text-xs font-medium" href="#">Contact</a>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 group w-14 h-14 rounded-full bg-white border border-[#d4af37]/20 shadow-[0_4px_20px_rgba(212,175,55,0.15)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[#d4af37] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]" href="https://wa.me/1234567890" target="_blank">
<iconify-icon className="text-2xl text-[#d4af37]" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>

<span className="absolute right-full mr-4 bg-zinc-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
            Have questions? Chat with us
        </span>
</a>



    </>
  );
}
