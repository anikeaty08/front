import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<input className="hidden peer" id="menu-toggle" type="checkbox"/>

<div className="fixed inset-0 bg-[#0a0a0a] z-[60] opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity duration-300 flex flex-col">
<div className="p-6 flex justify-between items-center border-b border-[#262626]">
<span className="font-['Playfair_Display'] tracking-tight text-3xl text-[#C9A770]">XÈN</span>
<label className="cursor-pointer text-[#A3A3A3] hover:text-[#C9A770] p-2 -mr-2 transition-colors" htmlFor="menu-toggle">
<i className="w-6 h-6" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</label>
</div>
<div className="flex-1 flex flex-col justify-center items-center gap-8 text-3xl font-['Playfair_Display'] tracking-tight text-[#FAFAFA]">
<a className="hover:text-[#C9A770] transition-colors italic" href="#" onclick="document.getElementById('menu-toggle').checked = false">Home</a>
<a className="hover:text-[#C9A770] transition-colors italic" href="#about" onclick="document.getElementById('menu-toggle').checked = false">About Us</a>
<a className="hover:text-[#C9A770] transition-colors italic" href="#book" onclick="document.getElementById('menu-toggle').checked = false">Book a Class</a>
<a className="hover:text-[#C9A770] transition-colors italic" href="#memberships" onclick="document.getElementById('menu-toggle').checked = false">Membership Packages</a>
<a className="hover:text-[#C9A770] transition-colors italic" href="#faq" onclick="document.getElementById('menu-toggle').checked = false">FAQs</a>
<a className="hover:text-[#C9A770] transition-colors italic" href="#contact" onclick="document.getElementById('menu-toggle').checked = false">Contact</a>
</div>
</div>

<div className="bg-[#0a0a0a] w-full pt-8 pb-12 px-6 border-b border-[#262626]">
<div className="max-w-7xl mx-auto flex flex-col">

<div className="flex items-center justify-between">
<a className="font-['Playfair_Display'] text-4xl text-[#C9A770] tracking-tight" href="#">XÈN</a>
<nav className="hidden lg:flex items-center gap-6 text-[0.65rem] tracking-[0.2em] uppercase text-[#A3A3A3] font-light">
<a className="hover:text-[#C9A770] transition-colors" href="#">Home</a>
<a className="hover:text-[#C9A770] transition-colors" href="#about">About Us</a>
<a className="hover:text-[#C9A770] transition-colors" href="#book">Book a Class</a>
<a className="hover:text-[#C9A770] transition-colors" href="#shop">Shop</a>
<a className="hover:text-[#C9A770] transition-colors" href="#memberships">Membership Packages</a>
<a className="hover:text-[#C9A770] transition-colors" href="#cafe">Café</a>
<a className="hover:text-[#C9A770] transition-colors" href="#faq">FAQs</a>
<a className="hover:text-[#C9A770] transition-colors" href="#contact">Contact</a>
</nav>
<label className="lg:hidden cursor-pointer text-[#C9A770] hover:text-[#FAFAFA] transition-colors flex items-center justify-center p-2 -mr-2" htmlFor="menu-toggle">
<i className="w-6 h-6" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</label>
</div>

<div className="mt-16 text-center text-[#E5E5E5] font-['Playfair_Display'] text-xl md:text-2xl tracking-tight font-light">
                Bradford, West Yorkshire - Boutique Reformer Pilates
            </div>
</div>
</div>
<main>

<section className="relative min-h-[75vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">

<div className="absolute inset-0 bg-[#0a0a0a] -z-10">
<img alt="XÈN Pilates Studio" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" src="studio-image.jpg" style={{objectPosition: 'center'}}/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>

<div className="absolute inset-0 bg-[#C9A770] mix-blend-overlay opacity-5"></div>
</div>
<div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
<h1 className="text-6xl md:text-8xl font-['Playfair_Display'] font-light tracking-tight text-[#FAFAFA] leading-[1.1]">
                    Align Your Life
                </h1>
<a className="inline-flex items-center justify-center px-10 py-4 bg-[#C9A770] text-[#0a0a0a] text-sm font-normal tracking-[0.2em] uppercase rounded-sm hover:bg-[#b59560] transition-all" href="#book">
                    Book a Class
                </a>
</div>
</section>

<section className="py-32 px-6 bg-[#111111] border-y border-[#262626]" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative">
<div className="aspect-[4/5] overflow-hidden bg-[#0a0a0a] border border-[#262626]">
<img alt="Studio details" className="w-full h-full object-cover opacity-50 grayscale mix-blend-lighten" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
<div className="space-y-8 lg:pr-12">
<h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-light tracking-tight text-[#FAFAFA] leading-tight">
                        More than just a workout. <br/><span className="italic text-[#C9A770]">A practice for life.</span>
</h2>
<div className="space-y-6 text-base md:text-lg leading-relaxed text-[#A3A3A3] font-extralight">
<p>
                            XÈN is a boutique sanctuary dedicated to helping you move better, feel stronger, and build a profound connection with your body. We specialise in dynamic Reformer Pilates—a method that provides both deep resistance and intuitive support.
                        </p>
<p>
                            Our space is designed to calm the nervous system from the moment you step inside. With ambient lighting, dark elegant textures, and highly experienced instructors, we create an environment where clients of all levels can experience the transformative benefits of mindful, precise movement.
                        </p>
</div>
<div className="pt-4 border-t border-[#262626] w-24">
<a className="group inline-flex items-center gap-3 text-sm font-light tracking-[0.2em] uppercase text-[#E5E5E5] hover:text-[#C9A770] transition-colors mt-8" href="#memberships">
                            Memberships 
                            <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#0a0a0a]" id="book">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-light tracking-tight text-[#FAFAFA] mb-4">Class Schedule</h2>
<p className="text-base md:text-lg text-[#A3A3A3] font-extralight">Reserve your space in the studio.</p>
</div>
<div className="flex flex-wrap items-center gap-4">
<div className="relative group cursor-pointer border-b border-[#C9A770] pb-1">
<div className="flex items-center gap-2 text-sm font-light tracking-[0.2em] uppercase text-[#C9A770]">
                                All Instructors
                                <i className="w-4 h-4" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">

<div className="lg:col-span-7 space-y-10">
<div>
<h3 className="text-2xl font-['Playfair_Display'] font-light tracking-tight text-[#E5E5E5] border-b border-[#262626] pb-4 mb-6 italic">Friday, 13th March</h3>

<div className="group py-6 border-b border-[#262626] transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:bg-[#111111] -mx-4 px-4 rounded-sm">
<div className="space-y-3">
<div className="flex items-center gap-3">
<span className="text-sm text-[#C9A770] font-light tracking-[0.2em] uppercase">Foundation</span>
<span className="text-sm text-[#888888] flex items-center gap-1.5 font-extralight">
<i className="w-4 h-4" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
                                            45 min
                                        </span>
</div>
<h4 className="text-3xl font-['Playfair_Display'] font-light text-[#FAFAFA] tracking-tight">Reformer Fundamentals</h4>
<p className="text-base text-[#A3A3A3] flex items-center gap-2 font-extralight">
                                        Guided by Sarah
                                    </p>
</div>
<div className="flex flex-col items-start sm:items-end gap-4 w-full sm:w-auto">
<div className="text-left sm:text-right">
<div className="text-xl font-light text-[#E5E5E5]">1:00 PM</div>
<div className="text-base text-[#888888] font-extralight">£18.00</div>
</div>
<button className="w-full sm:w-auto px-6 py-2 bg-[#C9A770] text-[#0a0a0a] text-sm font-normal rounded-sm hover:bg-[#b59560] transition-colors tracking-[0.2em] uppercase">
                                        Select
                                    </button>
</div>
</div>

<div className="group py-6 border-b border-[#262626] transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:bg-[#111111] -mx-4 px-4 rounded-sm">
<div className="space-y-3">
<div className="flex items-center gap-3">
<span className="text-sm text-[#E5E5E5] font-light tracking-[0.2em] uppercase">Dynamic</span>
<span className="text-sm text-[#888888] flex items-center gap-1.5 font-extralight">
<i className="w-4 h-4" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
                                            45 min
                                        </span>
</div>
<h4 className="text-3xl font-['Playfair_Display'] font-light text-[#FAFAFA] tracking-tight">Sculpt &amp; Flow</h4>
<p className="text-base text-[#A3A3A3] flex items-center gap-2 font-extralight">
                                        Guided by Emma
                                    </p>
</div>
<div className="flex flex-col items-start sm:items-end gap-4 w-full sm:w-auto">
<div className="text-left sm:text-right">
<div className="text-xl font-light text-[#E5E5E5]">3:00 PM</div>
<div className="text-base text-[#888888] font-extralight">£18.00</div>
</div>
<button className="w-full sm:w-auto px-6 py-2 bg-transparent border border-[#C9A770] text-[#C9A770] text-sm font-normal rounded-sm hover:bg-[#111111] transition-colors tracking-[0.2em] uppercase">
                                        Select
                                    </button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="sticky top-10 bg-[#111111] border border-[#262626] p-8 md:p-10 rounded-sm">
<h3 className="text-3xl font-['Playfair_Display'] font-light tracking-tight text-[#FAFAFA] mb-8">Complete Booking</h3>
<div className="border-b border-[#262626] pb-6 mb-8">
<div className="flex justify-between items-start mb-2">
<span className="text-base font-light text-[#E5E5E5]">Reformer Fundamentals</span>
<span className="text-base font-light text-[#E5E5E5]">£18.00</span>
</div>
<div className="text-sm text-[#888888] font-extralight">Fri, 13 Mar • 1:00 PM • Studio 1</div>
</div>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[0.65rem] font-normal tracking-[0.2em] uppercase text-[#888888]">First name</label>
<input className="w-full px-0 py-2 bg-transparent border-b border-[#333333] text-base text-[#FAFAFA] focus:outline-none focus:border-[#C9A770] transition-colors rounded-none placeholder:text-transparent" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[0.65rem] font-normal tracking-[0.2em] uppercase text-[#888888]">Last name</label>
<input className="w-full px-0 py-2 bg-transparent border-b border-[#333333] text-base text-[#FAFAFA] focus:outline-none focus:border-[#C9A770] transition-colors rounded-none placeholder:text-transparent" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[0.65rem] font-normal tracking-[0.2em] uppercase text-[#888888]">Email address</label>
<input className="w-full px-0 py-2 bg-transparent border-b border-[#333333] text-base text-[#FAFAFA] focus:outline-none focus:border-[#C9A770] transition-colors rounded-none placeholder:text-transparent" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[0.65rem] font-normal tracking-[0.2em] uppercase text-[#888888]">Mobile number</label>
<input className="w-full px-0 py-2 bg-transparent border-b border-[#333333] text-base text-[#FAFAFA] focus:outline-none focus:border-[#C9A770] transition-colors rounded-none placeholder:text-transparent" type="tel"/>
</div>
<div className="space-y-4 pt-4">
<label className="flex items-start gap-4 cursor-pointer group">
<div className="relative flex items-center mt-1">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-[#555555] bg-transparent peer-checked:bg-[#C9A770] peer-checked:border-[#C9A770] transition-colors flex items-center justify-center rounded-sm group-hover:border-[#C9A770]">
<i className="text-[#0a0a0a] opacity-0 peer-checked:opacity-100 w-3 h-3" data-lucide="check" style={{strokeWidth: '2'}}></i>
</div>
</div>
<span className="text-sm text-[#A3A3A3] font-extralight leading-relaxed">I confirm I have read and agree to the <a className="text-[#C9A770] hover:text-[#FAFAFA] transition-colors" href="#">liability waiver</a>.</span>
</label>
</div>
<div className="pt-6">
<button className="w-full px-6 py-4 bg-[#C9A770] text-[#0a0a0a] text-sm font-normal tracking-[0.2em] uppercase rounded-sm hover:bg-[#b59560] transition-colors flex justify-center items-center gap-2" type="button">
                                        Pay £18.00
                                    </button>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#111111] border-y border-[#262626]" id="memberships">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<span className="text-sm font-light tracking-[0.2em] uppercase text-[#C9A770] mb-6 block">Commit to your practice</span>
<h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-light tracking-tight text-[#FAFAFA] mb-6">Membership Tiers</h2>
<p className="text-lg text-[#A3A3A3] font-extralight max-w-xl mx-auto leading-relaxed">Choose a rhythm that aligns with your lifestyle. Consistent practice yields the most profound results for both body and mind.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">

<div className="border-t border-[#333333] pt-8 flex flex-col group">
<h3 className="text-3xl font-['Playfair_Display'] font-light text-[#FAFAFA] mb-2 tracking-tight">Drop-In</h3>
<div className="text-4xl font-light tracking-tight text-[#E5E5E5] mb-6 mt-2">£18<span className="text-base font-extralight text-[#888888] tracking-normal"> / session</span></div>
<p className="text-base text-[#A3A3A3] mb-10 flex-1 font-extralight leading-relaxed">
                            Perfect for those visiting or wishing to experience our studio before committing to a rhythm.
                        </p>
<button className="w-full py-3 bg-transparent border border-[#C9A770] text-[#C9A770] text-sm font-normal tracking-[0.2em] uppercase rounded-sm hover:bg-[#1a1a1a] transition-colors">Purchase</button>
</div>

<div className="border-t border-[#C9A770] pt-8 flex flex-col group relative">
<div className="absolute -top-3 left-0 bg-[#111111] pr-4">
<span className="text-[0.65rem] font-normal tracking-[0.2em] uppercase text-[#C9A770]">Most Popular</span>
</div>
<h3 className="text-3xl font-['Playfair_Display'] font-light text-[#FAFAFA] mb-2 tracking-tight">4 Sessions</h3>
<div className="text-4xl font-light tracking-tight text-[#E5E5E5] mb-6 mt-2">£60<span className="text-base font-extralight text-[#888888] tracking-normal"> / month</span></div>
<p className="text-base text-[#A3A3A3] mb-10 flex-1 font-extralight leading-relaxed">
                            One class per week to gently integrate mindful movement into your routine and build strength.
                        </p>
<button className="w-full py-3 bg-[#C9A770] text-[#0a0a0a] text-sm font-normal tracking-[0.2em] uppercase rounded-sm hover:bg-[#b59560] transition-colors">Subscribe</button>
</div>

<div className="border-t border-[#333333] pt-8 flex flex-col group">
<h3 className="text-3xl font-['Playfair_Display'] font-light text-[#FAFAFA] mb-2 tracking-tight">8 Sessions</h3>
<div className="text-4xl font-light tracking-tight text-[#E5E5E5] mb-6 mt-2">£110<span className="text-base font-extralight text-[#888888] tracking-normal"> / month</span></div>
<p className="text-base text-[#A3A3A3] mb-10 flex-1 font-extralight leading-relaxed">
                            For the dedicated practitioner. Two classes a week to deeply transform your posture and core.
                        </p>
<button className="w-full py-3 bg-transparent border border-[#C9A770] text-[#C9A770] text-sm font-normal tracking-[0.2em] uppercase rounded-sm hover:bg-[#1a1a1a] transition-colors">Subscribe</button>
</div>
</div>

<div className="max-w-4xl mx-auto space-y-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-8 border-b border-[#262626] hover:pr-4 transition-all duration-300">
<div>
<h3 className="text-2xl font-['Playfair_Display'] font-light text-[#FAFAFA] mb-2">Private 1:1 Tuition <span className="text-[#C9A770] ml-3 font-[Inter] text-base font-light">£45</span></h3>
<p className="text-base text-[#A3A3A3] font-extralight max-w-lg leading-relaxed">
                                Bespoke guidance tailored entirely to your body's unique anatomy, goals, or injury rehabilitation needs.
                            </p>
</div>
<a className="text-[#E5E5E5] hover:text-[#C9A770] transition-colors" href="mailto:hello@xenpilates.com">
<i className="w-6 h-6" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-8 border-b border-[#262626] hover:pr-4 transition-all duration-300">
<div>
<h3 className="text-2xl font-['Playfair_Display'] font-light text-[#FAFAFA] mb-2">Private Studio Hire <span className="text-[#C9A770] ml-3 font-[Inter] text-base font-light">£95</span></h3>
<p className="text-base text-[#A3A3A3] font-extralight max-w-lg leading-relaxed">
                                Exclusive use of the space for up to 6 guests. Ideal for intimate gatherings or corporate wellness.
                            </p>
</div>
<a className="text-[#E5E5E5] hover:text-[#C9A770] transition-colors" href="mailto:hello@xenpilates.com">
<i className="w-6 h-6" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#0a0a0a]" id="faq">
<div className="max-w-3xl mx-auto">
<div className="mb-16 text-center">
<h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-light tracking-tight text-[#FAFAFA]">Questions &amp; Guidance</h2>
<p className="text-lg text-[#A3A3A3] font-extralight mt-6">Everything you need to know before stepping onto the reformer.</p>
</div>
<div className="space-y-0 border-t border-[#262626]">
<details className="group [&amp;_summary::-webkit-details-marker]:hidden border-b border-[#262626]">
<summary className="flex justify-between items-center font-['Playfair_Display'] font-light cursor-pointer py-6 text-2xl text-[#E5E5E5]">
                            I'm new to Pilates, where should I start?
                            <span className="transition-transform duration-300 group-open:-rotate-180 text-[#C9A770]">
<i className="w-5 h-5" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</span>
</summary>
<div className="pb-8 text-base text-[#A3A3A3] font-extralight leading-relaxed max-w-2xl pr-8">
                            Welcome! Reformer Pilates is exceptionally accommodating for beginners because the machine's springs provide support while you build core strength. We recommend starting with our "Foundation" classes. Arrive 10 minutes early so your instructor can introduce you to the carriage.
                        </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden border-b border-[#262626]">
<summary className="flex justify-between items-center font-['Playfair_Display'] font-light cursor-pointer py-6 text-2xl text-[#E5E5E5]">
                            What should I wear and bring?
                            <span className="transition-transform duration-300 group-open:-rotate-180 text-[#C9A770]">
<i className="w-5 h-5" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</span>
</summary>
<div className="pb-8 text-base text-[#A3A3A3] font-extralight leading-relaxed max-w-2xl pr-8">
                            Wear form-fitting, breathable activewear so our instructors can check your alignment. For hygiene and safety, grip socks are strictly required on the reformers (available to purchase in-studio). Bring a water bottle; we provide fresh towels and all necessary props.
                        </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden border-b border-[#262626]">
<summary className="flex justify-between items-center font-['Playfair_Display'] font-light cursor-pointer py-6 text-2xl text-[#E5E5E5]">
                            What is your cancellation policy?
                            <span className="transition-transform duration-300 group-open:-rotate-180 text-[#C9A770]">
<i className="w-5 h-5" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</span>
</summary>
<div className="pb-8 text-base text-[#A3A3A3] font-extralight leading-relaxed max-w-2xl pr-8">
                            To ensure fairness to our intimate class sizes, we operate a strict 12-hour cancellation policy. Classes cancelled outside this window will be returned to your account. Late cancellations or no-shows will forfeit the class credit.
                        </div>
</details>
</div>
</div>
</section>
</main>

<footer className="bg-[#050505] text-[#FAFAFA] pt-24 pb-12 px-6 relative z-10 border-t border-[#262626]" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 border-b border-[#262626] pb-16">

<div className="lg:col-span-5 space-y-8">
<span className="font-['Playfair_Display'] tracking-tight text-4xl text-[#C9A770] block">XÈN</span>
<p className="text-base text-[#888888] font-extralight max-w-sm leading-relaxed">
                    A holistic space for movement, breath, and connection. Realign your body and mind with our dynamic Reformer practice.
                </p>
<div className="space-y-2 text-base text-[#A3A3A3] font-extralight">
<p>Bradford, West Yorkshire</p>
<a className="hover:text-[#C9A770] transition-colors block" href="mailto:hello@xenpilates.com">hello@xenpilates.com</a>
</div>
</div>

<div className="lg:col-span-3 space-y-5 text-base font-extralight text-[#A3A3A3]">
<h4 className="text-[0.65rem] font-normal tracking-[0.2em] uppercase text-[#555555] mb-8">Explore</h4>
<a className="block hover:text-[#C9A770] transition-colors" href="#about">About Us</a>
<a className="block hover:text-[#C9A770] transition-colors" href="#book">Class Schedule</a>
<a className="block hover:text-[#C9A770] transition-colors" href="#memberships">Membership Packages</a>
<a className="block hover:text-[#C9A770] transition-colors" href="#faq">FAQ</a>
</div>

<div className="lg:col-span-4">
<h4 className="text-[0.65rem] font-normal tracking-[0.2em] uppercase text-[#555555] mb-8">Journal &amp; Offers</h4>
<p className="text-base text-[#888888] font-extralight mb-6 leading-relaxed">Subscribe for studio updates, holistic insights, and early access to events.</p>
<form className="flex flex-col gap-4">
<input className="w-full px-0 py-3 bg-transparent border-b border-[#333333] text-base text-[#FAFAFA] placeholder-[#555555] focus:outline-none focus:border-[#C9A770] transition-colors rounded-none" placeholder="Your email address" type="email"/>
<button className="mt-2 text-left text-sm font-normal tracking-[0.2em] uppercase text-[#E5E5E5] hover:text-[#C9A770] transition-colors inline-flex items-center gap-2" type="button">
                        Subscribe <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</form>
<div className="flex items-center gap-6 pt-12">
<a className="text-[#888888] hover:text-[#C9A770] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="text-[#888888] hover:text-[#C9A770] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#555555] font-extralight">
<p>© 2026 XÈN Pilates. Cultivated with intention.</p>
<div className="flex gap-8">
<a className="hover:text-[#C9A770] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#C9A770] transition-colors" href="#">Terms</a>
<a className="hover:text-[#C9A770] transition-colors" href="#">Waiver</a>
</div>
</div>
</footer>


    </>
  );
}
