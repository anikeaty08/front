import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Smooth scroll reveal logic
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Optional: stop observing once revealed
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 md:px-12 flex transition-all duration-300 bg-white/40 border-white/40 border-b pt-4 pr-6 pb-4 pl-6 top-0 right-0 left-0 backdrop-blur-md items-center justify-between">
<div className="flex text-xl text-[#D4AF37] tracking-tight font-serif gap-x-2 gap-y-2 items-center">
<iconify-icon className="" icon="solar:lotus-linear"></iconify-icon>
  Ananda
</div>
<div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-[#82756A]">
<a className="hover:text-[#D4AF37] transition-colors" href="#about">Philosophy</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#experience">Experience</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#details">Details</a>
</div>
<a className="text-xs uppercase tracking-widest bg-white/80 border border-[#D4AF37]/30 px-5 py-2 rounded-full hover:bg-[#FFF8F5] transition-colors" href="#register">
            Reserve
        </a>
</nav>

<section className="slide-section overflow-hidden pt-20">
<div className="absolute inset-0 z-0">
<img alt="Sunrise Nature" className="w-full h-full object-cover object-top opacity-80" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-b from-[#FFF8F5]/40 via-[#FFF8F5]/60 to-[#FFF8F5] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="container md:px-12 flex flex-col text-center mt-12 mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="reveal mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-white/50 backdrop-blur-sm text-xs tracking-widest uppercase text-[#82756A] visible">
<iconify-icon icon="solar:sun-2-linear"></iconify-icon>
                A Journey Back To Yourself
            </div>
<h1 className="reveal md:text-7xl lg:text-[6rem] leading-none text-5xl text-pink-700 tracking-tight font-serif mb-6">
                Ananda Yoga <br/>
<em className="font-normal text-slate-50">Retreat</em>
</h1>
<p className="reveal text-lg md:text-xl text-[#82756A] font-light tracking-wide mb-10 visible">
                Reconnect. Heal. Blossom.
            </p>
<a className="reveal flex flex-col items-center gap-3 text-xs tracking-widest uppercase text-[#82756A] hover:text-[#D4AF37] transition-colors mt-12 visible" href="#about">
<span className="">Begin the journey</span>
<iconify-icon className="animate-bounce" icon="solar:arrow-down-linear"></iconify-icon>
</a>
</div>
</section>

<section className="slide-section bg-[#FFF8F5] pt-24 pb-24" id="about">
<div className="container mx-auto px-6 md:px-12 max-w-6xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="reveal relative">
<div className="absolute -inset-4 bg-[#FDF4F6] rounded-[2rem] transform -rotate-3 z-0"></div>
<img alt="Woman meditating" className="relative z-10 w-full h-[600px] object-cover rounded-[2rem] shadow-lg" src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="reveal flex flex-col justify-center">
<span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-4">Our Philosophy</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight mb-8">
                        Living from the heart, <br/><em className="text-[#D4AF37]">not the mind.</em>
</h2>
<p className="text-[#82756A] text-base leading-relaxed mb-6">
                        In a world that constantly demands us to think, analyze, and perform, we've forgotten how to simply *feel*. Ananda Yoga is born from the belief that true healing begins when we step out of our heads and drop into our hearts. 
                    </p>
<p className="text-[#82756A] text-base leading-relaxed mb-8 italic">
                        Zindagi dimaag se nahi, dil se jeeni hai. (Life is to be lived from the heart, not the mind.)
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#FDF4F6] flex items-center justify-center text-[#D4AF37]">
<iconify-icon className="text-xl" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<span className="text-sm tracking-wide text-[#3E332A]">Focus on deep emotional health</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#FDF4F6] flex items-center justify-center text-[#D4AF37]">
<iconify-icon className="text-xl" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<span className="text-sm tracking-wide text-[#3E332A]">Cultivating genuine, lasting happiness</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#FDF4F6] flex items-center justify-center text-[#D4AF37]">
<iconify-icon className="text-xl" icon="solar:stars-linear"></iconify-icon>
</div>
<span className="text-sm tracking-wide text-[#3E332A]">Awakening unconditional self-love</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="slide-section py-24 bg-white">
<div className="container mx-auto px-6 md:px-12 max-w-5xl">
<div className="text-center mb-16 reveal">
<span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-4 block">The Calling</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">Why This Retreat?</h2>
<p className="text-[#82756A] max-w-2xl mx-auto text-base">You pour from an empty cup every day. It's time to refill it.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal glass-card p-10 rounded-[2rem] text-center hover:-translate-y-2 transition-transform duration-500">
<div className="w-16 h-16 mx-auto bg-[#FDF4F6] rounded-2xl flex items-center justify-center text-[#D4AF37] mb-6">
<iconify-icon className="text-3xl" icon="solar:cloud-waterfall-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl tracking-tight mb-3">Emotional Burnout</h3>
<p className="text-sm text-[#82756A] leading-relaxed">Carrying the weight of responsibilities, leading to silent stress and emotional exhaustion.</p>
</div>

<div className="reveal glass-card p-10 rounded-[2rem] text-center hover:-translate-y-2 transition-transform duration-500 delay-100">
<div className="w-16 h-16 mx-auto bg-[#FDF4F6] rounded-2xl flex items-center justify-center text-[#D4AF37] mb-6">
<iconify-icon className="text-3xl" icon="solar:brain-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl tracking-tight mb-3">Constant Overthinking</h3>
<p className="text-sm text-[#82756A] leading-relaxed">A mind that never stops, making it hard to find clarity or peaceful sleep.</p>
</div>

<div className="reveal glass-card p-10 rounded-[2rem] text-center hover:-translate-y-2 transition-transform duration-500 delay-200">
<div className="w-16 h-16 mx-auto bg-[#FDF4F6] rounded-2xl flex items-center justify-center text-[#D4AF37] mb-6">
<iconify-icon className="text-3xl" icon="solar:hourglass-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl tracking-tight mb-3">Lack of "Me-Time"</h3>
<p className="text-sm text-[#82756A] leading-relaxed">Always being there for others, but craving a moment of *khud ke liye waqt* (time for oneself).</p>
</div>
</div>
</div>
</section>

<section className="slide-section py-24 bg-[#FDF4F6]" id="experience">
<div className="container mx-auto px-6 md:px-12 max-w-6xl">
<div className="reveal text-center mb-16">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">What You Will Experience</h2>
<div className="w-16 h-px bg-[#D4AF37] mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="reveal bg-white/60 p-8 rounded-2xl flex gap-4 items-start">
<iconify-icon className="text-2xl text-[#D4AF37] mt-1" icon="solar:user-hands-linear"></iconify-icon>
<div>
<h4 className="font-serif text-lg tracking-tight mb-2">Slow, Meditative Yoga</h4>
<p className="text-xs text-[#82756A] leading-relaxed">Gentle movements to release physical tension and invite grace back into the body.</p>
</div>
</div>
<div className="reveal bg-white/60 p-8 rounded-2xl flex gap-4 items-start">
<iconify-icon className="text-2xl text-[#D4AF37] mt-1" icon="solar:wind-linear"></iconify-icon>
<div>
<h4 className="font-serif text-lg tracking-tight mb-2">Pranayama Breathwork</h4>
<p className="text-xs text-[#82756A] leading-relaxed">Deep breathing techniques designed for emotional release and nervous system regulation.</p>
</div>
</div>
<div className="reveal bg-white/60 p-8 rounded-2xl flex gap-4 items-start">
<iconify-icon className="text-2xl text-[#D4AF37] mt-1" icon="solar:magic-stick-3-linear"></iconify-icon>
<div>
<h4 className="font-serif text-lg tracking-tight mb-2">Chakra Healing</h4>
<p className="text-xs text-[#82756A] leading-relaxed">Unblocking stagnant energy centers to restore your natural flow and vitality.</p>
</div>
</div>
<div className="reveal bg-white/60 p-8 rounded-2xl flex gap-4 items-start">
<iconify-icon className="text-2xl text-[#D4AF37] mt-1" icon="solar:eye-closed-linear"></iconify-icon>
<div>
<h4 className="font-serif text-lg tracking-tight mb-2">Guided Meditation</h4>
<p className="text-xs text-[#82756A] leading-relaxed">Journey inward to quiet the mind chatter and access profound inner stillness.</p>
</div>
</div>
<div className="reveal bg-white/60 p-8 rounded-2xl flex gap-4 items-start">
<iconify-icon className="text-2xl text-[#D4AF37] mt-1" icon="solar:leaf-linear"></iconify-icon>
<div>
<h4 className="font-serif text-lg tracking-tight mb-2">Nature Connection</h4>
<p className="text-xs text-[#82756A] leading-relaxed">Grounding walks and silent moments spent absorbing the healing frequency of earth.</p>
</div>
</div>
<div className="reveal bg-white/60 p-8 rounded-2xl flex gap-4 items-start">
<iconify-icon className="text-2xl text-[#D4AF37] mt-1" icon="solar:notebook-minimalistic-linear"></iconify-icon>
<div>
<h4 className="font-serif text-lg tracking-tight mb-2">Self-Reflection</h4>
<p className="text-xs text-[#82756A] leading-relaxed">Journaling and sharing circles in a safe, judgment-free sisterhood environment.</p>
</div>
</div>
</div>
</div>
</section>

<section className="slide-section py-24 bg-[#FFF8F5]">
<div className="container mx-auto px-6 md:px-12 max-w-4xl">
<div className="reveal text-center mb-16">
<span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-4 block">The Rhythm</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">A Sample Daily Flow</h2>
</div>
<div className="relative border-l border-[#D4AF37]/30 ml-4 md:ml-0 md:pl-0 space-y-12">

<div className="reveal relative pl-8 md:pl-0 md:flex items-center gap-12">
<div className="absolute left-[-5px] top-1 md:relative md:left-0 md:top-0 w-2.5 h-2.5 rounded-full bg-[#D4AF37] ring-4 ring-[#FFF8F5]"></div>
<div className="md:w-1/3 text-left md:text-right">
<span className="font-serif text-xl tracking-tight text-[#D4AF37]">Morning</span>
</div>
<div className="md:w-2/3 glass-card p-6 rounded-2xl">
<h4 className="text-sm font-medium tracking-wide mb-1">Awakening &amp; Clarity</h4>
<p className="text-xs text-[#82756A]">Noble Silence, Pranayama for emotional detox, and Slow flow Yoga as the sun rises.</p>
</div>
</div>

<div className="reveal relative pl-8 md:pl-0 md:flex items-center gap-12">
<div className="absolute left-[-5px] top-1 md:relative md:left-0 md:top-0 w-2.5 h-2.5 rounded-full bg-[#D4AF37] ring-4 ring-[#FFF8F5]"></div>
<div className="md:w-1/3 text-left md:text-right">
<span className="font-serif text-xl tracking-tight text-[#D4AF37]">Afternoon</span>
</div>
<div className="md:w-2/3 glass-card p-6 rounded-2xl">
<h4 className="text-sm font-medium tracking-wide mb-1">Nourishment &amp; Reflection</h4>
<p className="text-xs text-[#82756A]">Sattvic lunch, free time for nature walks, and guided knowledge sessions on living from the heart.</p>
</div>
</div>

<div className="reveal relative pl-8 md:pl-0 md:flex items-center gap-12">
<div className="absolute left-[-5px] top-1 md:relative md:left-0 md:top-0 w-2.5 h-2.5 rounded-full bg-[#D4AF37] ring-4 ring-[#FFF8F5]"></div>
<div className="md:w-1/3 text-left md:text-right">
<span className="font-serif text-xl tracking-tight text-[#D4AF37]">Evening</span>
</div>
<div className="md:w-2/3 glass-card p-6 rounded-2xl">
<h4 className="text-sm font-medium tracking-wide mb-1">Grounding &amp; Rest</h4>
<p className="text-xs text-[#82756A]">Chakra healing meditation, sharing circle, and restorative sleep practices.</p>
</div>
</div>
</div>
</div>
</section>

<section className="slide-section py-24 bg-white">
<div className="container mx-auto px-6 md:px-12 max-w-6xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal order-2 lg:order-1">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight mb-12">
                        The Shift <br/>You Will <em className="text-[#D4AF37]">Feel</em>
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="border-t border-[#D4AF37]/20 pt-4">
<span className="text-3xl mb-4 block opacity-80">🕊️</span>
<h4 className="font-serif text-xl tracking-tight mb-2">Inner Peace</h4>
<p className="text-xs text-[#82756A] leading-relaxed">A profound sense of calm that remains even when you return to your busy life.</p>
</div>
<div className="border-t border-[#D4AF37]/20 pt-4">
<span className="text-3xl mb-4 block opacity-80">💧</span>
<h4 className="font-serif text-xl tracking-tight mb-2">Emotional Healing</h4>
<p className="text-xs text-[#82756A] leading-relaxed">Releasing buried stress and past baggage, making space for lightness.</p>
</div>
<div className="border-t border-[#D4AF37]/20 pt-4">
<span className="text-3xl mb-4 block opacity-80">✨</span>
<h4 className="font-serif text-xl tracking-tight mb-2">Mental Clarity</h4>
<p className="text-xs text-[#82756A] leading-relaxed">Shedding the fog of overthinking to hear your true inner voice.</p>
</div>
<div className="border-t border-[#D4AF37]/20 pt-4">
<span className="text-3xl mb-4 block opacity-80">☀️</span>
<h4 className="font-serif text-xl tracking-tight mb-2">Energy Balance</h4>
<p className="text-xs text-[#82756A] leading-relaxed">Moving from depletion and exhaustion to a renewed state of vibrant vitality.</p>
</div>
</div>
</div>
<div className="reveal order-1 lg:order-2 relative h-[500px]">
<img alt="Yoga sunset" className="w-full h-full object-cover rounded-t-full rounded-b-[4rem]" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 rounded-t-full rounded-b-[4rem] border border-[#D4AF37]/30 transform scale-[1.03] pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="slide-section py-24 bg-[#FFF8F5] relative overflow-hidden">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FDF4F6] rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">

<div className="reveal mb-24 text-center">
<span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-4 block">Unique Aspects</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-12">What makes this different?</h2>
<div className="flex flex-wrap justify-center gap-4">
<span className="px-6 py-3 rounded-full border border-[#D4AF37]/20 bg-white/50 text-sm tracking-wide">Heart-Centered Teaching</span>
<span className="px-6 py-3 rounded-full border border-[#D4AF37]/20 bg-white/50 text-sm tracking-wide">Feminine Energy Awakening</span>
<span className="px-6 py-3 rounded-full border border-[#D4AF37]/20 bg-white/50 text-sm tracking-wide">Deep Personal Transformation</span>
</div>
</div>

<div className="reveal glass-card p-12 md:p-16 rounded-[3rem] text-center bg-white/80">
<iconify-icon className="text-4xl text-[#D4AF37] mb-6" icon="solar:star-fall-minimalistic-2-linear"></iconify-icon>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-6">Who Should Join?</h2>
<p className="text-base md:text-lg text-[#82756A] max-w-2xl mx-auto leading-relaxed">
                    This sacred space is for <strong className="text-[#3E332A] font-normal">women</strong>—working professionals, dedicated teachers, and devoted homemakers—who feel overwhelmed, emotionally burnt out, or disconnected from themselves. If you are constantly pouring into others and craving a moment to breathe, <em className="text-[#D4AF37]">this is for you.</em>
</p>
</div>
</div>
</section>

<section className="slide-section bg-white border-[#FDF4F6] border-t pt-24 pb-24" id="details">
<div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
<div className="reveal mb-12">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">The Details</h2>
<p className="text-sm text-[#82756A]">Everything you need to plan your escape.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="reveal bg-[#FDF4F6] border-white border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="text-3xl text-[#D4AF37] mb-4" icon="solar:calendar-date-linear"></iconify-icon>
<h4 className="text-xs uppercase tracking-widest text-[#82756A] mb-1">Dates</h4>
<p className="text-xl tracking-tight font-serif">June 10 - 13, 2026</p>
<p className="text-xs text-[#82756A] mt-2">4 Days / 3 Nights</p>
</div>
<div className="reveal bg-[#FDF4F6] p-8 rounded-2xl border border-white delay-100">
<iconify-icon className="text-3xl text-[#D4AF37] mb-4" icon="solar:map-point-linear"></iconify-icon>
<h4 className="text-xs uppercase tracking-widest text-[#82756A] mb-1">Location</h4>
<p className="text-xl tracking-tight font-serif">Malaysia</p>
<p className="text-xs text-[#82756A] mt-2">Serene riverside property</p>
</div>
<div className="reveal bg-[#FDF4F6] p-8 rounded-2xl border border-white delay-200">
<iconify-icon className="text-3xl text-[#D4AF37] mb-4" icon="solar:users-group-rounded-linear"></iconify-icon>
<h4 className="text-xs uppercase tracking-widest text-[#82756A] mb-1">Group Size</h4>
<p className="font-serif text-xl tracking-tight">Intimate Circle</p>
<p className="text-xs text-[#82756A] mt-2">Limited to 15 women only</p>
</div>
</div>
</div>
</section>

<section className="slide-section py-24 bg-[#FFF8F5]" id="register">
<div className="container mx-auto px-6 md:px-12 max-w-4xl">
<div className="reveal text-center mb-16">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">Begin Your Healing</h2>
<p className="text-sm text-[#82756A] max-w-lg mx-auto">
                    Secure your spot for this transformative journey. An investment in your peace is the highest return.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-12 bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-20px_rgba(62,51,42,0.05)] border border-[#F3E5AB]/30">

<div className="reveal md:col-span-2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#F3E5AB]/50 pb-8 md:pb-0 md:pr-8">
<h3 className="font-serif text-2xl tracking-tight mb-2">Retreat Pass</h3>
<p className="text-[#D4AF37] font-serif text-4xl tracking-tight mb-4">₹24,999</p>
<ul className="space-y-3 text-sm text-[#82756A]">
<li className="flex items-start gap-2">
<iconify-icon className="text-[#D4AF37] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            4 Nights Luxury Stay
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#D4AF37] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            All Organic Sattvic Meals
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#D4AF37] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            All Healing &amp; Yoga Sessions
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#D4AF37] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Welcome Healing Kit
                        </li>
</ul>
</div>

<div className="reveal md:col-span-3">
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs uppercase tracking-widest text-[#82756A] mb-1.5 ml-1">First Name</label>
<input className="custom-input" placeholder="Emma" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-[#82756A] mb-1.5 ml-1">Last Name</label>
<input className="custom-input" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-[#82756A] mb-1.5 ml-1">Email Address</label>
<input className="custom-input" placeholder="emma@example.com" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-[#82756A] mb-1.5 ml-1">Phone Number (WhatsApp)</label>
<input className="custom-input" placeholder="+91 98765 43210" type="tel"/>
</div>
<div className="pt-4">
<button className="btn-primary w-full py-4 rounded-xl font-medium tracking-wide shadow-md" type="button">
                                Apply for the Retreat
                            </button>
<p className="text-center text-[10px] text-[#82756A] uppercase tracking-widest mt-4">Spots are highly limited to ensure intimacy.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="slide-section relative overflow-hidden bg-[#3E332A] text-white py-24 flex items-center justify-center text-center">
<div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
<img alt="Calm water" className="w-full h-full object-cover" src="default"/>
</div>
<div className="relative z-10 container mx-auto px-6 max-w-4xl">
<iconify-icon className="text-4xl text-[#D4AF37] mb-8 reveal" icon="solar:lotus-linear"></iconify-icon>
<h2 className="reveal font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight leading-snug mb-8 text-[#FFF8F5]">
                "This is not just a retreat,<br/>
<em className="text-[#D4AF37] font-normal">it's a journey back to yourself."</em>
</h2>
<div className="w-12 h-px bg-[#D4AF37]/50 mx-auto reveal mb-16"></div>
<footer className="reveal text-xs tracking-widest uppercase text-white/50">
<p>Ananda Yoga © 2026</p>
</footer>
</div>
</section>


    </>
  );
}
