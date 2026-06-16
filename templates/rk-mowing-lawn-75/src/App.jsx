import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
rk: {
green: '#15803d', // Emerald 700
red: '#dc2626',   // Red 600
blue: '#1e3a8a',  // Blue 900
dark: '#020617',  // Slate 950
}
},
animation: {
'fade-in': 'fadeInUp 0.8s ease-out forwards',
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
<div className="watermark-text text-[20vw] font-semibold leading-none tracking-tighter opacity-100 select-none -rotate-12">
            RK
        </div>
</div>

<nav className="absolute w-full z-50 top-0 start-0 border-b border-white/10 bg-gradient-to-b from-black/50 to-transparent">
<div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">

<div className="w-10 h-10 rounded-full bg-rk-green flex items-center justify-center text-white border border-white/20 shadow-lg backdrop-blur-sm">
<span className="font-semibold text-lg tracking-tighter">RK</span>
</div>
<div>
<span className="block text-lg font-medium tracking-tight text-white leading-none">RK Mowing</span>
<span className="block text-xs text-white/80 tracking-wide font-normal mt-1">Premium Lawn Care</span>
</div>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-white/90 hover:text-rk-green transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-white/90 hover:text-rk-green transition-colors" href="#about">Our Team</a>
<a className="text-sm font-medium text-white/90 hover:text-rk-green transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-white/90 hover:text-rk-green transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:block text-sm font-medium text-white/90">IE <i className="inline w-3 h-3 ml-1 text-rk-red" data-lucide="map-pin"></i></span>
<a className="px-5 py-2 rounded-full bg-rk-red hover:bg-red-700 text-white text-sm font-medium transition-all shadow-lg shadow-rk-red/20 flex items-center gap-2" href="#contact">
<span>Book Now</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-rk-dark">

<div className="absolute inset-0 z-0">
<img alt="Perfectly manicured Irish lawn" className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-rk-dark/70 via-rk-dark/40 to-rk-dark/90"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
<div className="inline-flex items-center gap-2 mb-6 fade-in-up">
<span className="h-px w-8 bg-rk-green"></span>
<span className="text-rk-green font-medium tracking-wide uppercase text-xs">Serving Ireland with Pride</span>
<span className="h-px w-8 bg-rk-green"></span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8 leading-[1.1] fade-in-up delay-100">
                Precision in <br className="hidden md:block"/>
                Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-rk-green to-emerald-300">Blade.</span>
</h1>
<p className="text-lg md:text-xl text-slate-200 mb-12 max-w-2xl mx-auto font-normal leading-relaxed fade-in-up delay-200">
                With over 20 years of expertise, Ronan delivers Ireland's finest cuts. Experience the difference of a truly professional finish.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 fade-in-up delay-300">
<a className="min-w-[180px] px-8 py-4 bg-rk-green text-white hover:bg-emerald-800 rounded-full font-medium text-base transition-all duration-300 shadow-lg shadow-rk-green/30 border border-transparent" href="#contact">
                    Get a Quote
                </a>
<a className="min-w-[180px] px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-rk-dark rounded-full font-medium text-base transition-all duration-300" href="#about">
                    Meet Ronan
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
<div className="w-2 rounded-full h-1 bg-white opacity-100"></div>
<div className="w-2 rounded-full h-1 bg-white opacity-40"></div>
<div className="w-2 rounded-full h-1 bg-white opacity-40"></div>
</div>
</section>

<section className="bg-rk-green py-20 relative z-20">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
                High-End Residential &amp; Commercial Mowing
            </h2>
<div className="h-32"></div> 
</div>
</section>

<section className="relative z-30 -mt-40 pb-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-xl shadow-xl shadow-slate-200/50 text-center border-t-4 border-transparent hover:border-rk-green transition-all group relative overflow-hidden">
<div className="w-16 h-16 mx-auto mb-6 text-rk-green bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="scissors"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Precision Edging</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        We don't just mow; we define boundaries. Sharp lines against walkways and flowerbeds for that manicured estate look.
                    </p>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider group-hover:text-rk-green transition-colors">Detail Oriented</span>
</div>

<div className="bg-white p-10 rounded-xl shadow-xl shadow-slate-200/50 text-center border-t-4 border-rk-red hover:border-rk-red transition-all group relative overflow-hidden">
<div className="w-16 h-16 mx-auto mb-6 text-rk-red bg-red-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">The "Boss" Cut</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Ronan's signature service. 20+ years of experience applied to your lawn. Perfect striping and level cuts guaranteed.
                    </p>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider group-hover:text-rk-red transition-colors">Premium Choice</span>
</div>

<div className="bg-white p-10 rounded-xl shadow-xl shadow-slate-200/50 text-center border-t-4 border-transparent hover:border-rk-blue transition-all group relative overflow-hidden">
<div className="w-16 h-16 mx-auto mb-6 text-rk-blue bg-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="wind"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Push Mower Finish</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        For delicate areas, Conor utilizes the traditional push mower technique to ensure no tire tracks and a gentle cut.
                    </p>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider group-hover:text-rk-blue transition-colors">Delicate Care</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-rk-green/10 rounded-full blur-2xl"></div>
<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-rk-blue/10 rounded-full blur-2xl"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
<img alt="Man mowing lawn" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="relative z-10">
<div className="inline-flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-rk-red"></span>
<span className="text-rk-red font-medium tracking-wide uppercase text-xs">Family Owned &amp; Operated</span>
</div>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                        Meet <span className="text-rk-green">Ronan</span> &amp; <span className="text-rk-blue">Conor</span>
</h2>
<p className="text-lg text-slate-500 mb-6 leading-relaxed font-light">
                        At RK Mowing, experience matters. <strong className="text-slate-900 font-medium">Ronan</strong>, the boss, brings over <span className="text-rk-green font-medium">20 years of hands-on experience</span> to every job. He understands the nuances of Irish soil, climate, and grass types better than anyone.
                    </p>
<p className="text-lg text-slate-500 mb-10 leading-relaxed font-light">
                        Training the next generation, Ronan has mentored his brother, <strong className="text-slate-900 font-medium">Conor</strong>, to uphold the company's rigorous standards. Conor specializes in <span className="text-rk-blue font-medium">push-mower operations</span>, perfect for intricate lawns requiring a lighter touch. Together, they form an unbeatable team.
                    </p>
<a className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white rounded-full font-medium text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 group" href="#contact">
                        Work With Us
                        <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">

<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="text-rk-blue font-medium tracking-wider uppercase text-xs mb-2 block">Our Standards</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Why Choose RK Mowing?</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
                    We don't just cut grass; we cultivate landscapes. Our commitment to quality is reflected in our equipment and our people.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-rk-green/20">
<div className="w-12 h-12 rounded-full bg-rk-green/10 text-rk-green flex items-center justify-center mb-6 group-hover:bg-rk-green group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Decades of Skill</h3>
<p className="text-base text-slate-500 leading-relaxed">20+ years of mastering lawn aesthetics. Ronan knows exactly what your lawn needs.</p>
</div>

<div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-rk-blue/20">
<div className="w-12 h-12 rounded-full bg-rk-blue/10 text-rk-blue flex items-center justify-center mb-6 group-hover:bg-rk-blue group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="user-plus"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Mentorship Trained</h3>
<p className="text-base text-slate-500 leading-relaxed">Conor has been trained by the best. Even our apprentices deliver superior results.</p>
</div>

<div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-rk-red/20">
<div className="w-12 h-12 rounded-full bg-rk-red/10 text-rk-red flex items-center justify-center mb-6 group-hover:bg-rk-red group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Reliable Service</h3>
<p className="text-base text-slate-500 leading-relaxed">We show up when we say we will. Professionalism is the cornerstone of RK Mowing.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-rk-blue text-white relative overflow-hidden" id="contact">

<div className="absolute right-0 bottom-0 text-white/5 transform translate-y-1/4 translate-x-1/4 pointer-events-none">
<i className="w-96 h-96" data-lucide="calendar-check"></i>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">
                        Ready for a <span className="text-rk-green">Premium</span> Cut?
                    </h2>
<p className="text-lg text-slate-300 mb-10 leading-relaxed font-light">
                        Whether you need Ronan's heavy-duty expertise or Conor's push-mower precision, we have a slot for you. Contact us today for a consultation.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
<i className="w-5 h-5 text-rk-green" data-lucide="phone"></i>
</div>
<div>
<p className="text-xs font-medium text-rk-green uppercase tracking-wide mb-1">Direct Line</p>
<p className="text-xl text-white font-medium tracking-tight">+353 (087) 123 4567</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
<i className="w-5 h-5 text-rk-green" data-lucide="mail"></i>
</div>
<div>
<p className="text-xs font-medium text-rk-green uppercase tracking-wide mb-1">Email for Quotes</p>
<a className="text-xl text-white hover:text-emerald-400 transition-colors font-medium tracking-tight" href="mailto:quotes@rkmowing.ie">
                                    quotes@rkmowing.ie
                                </a>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-10 text-slate-900 relative shadow-2xl overflow-hidden">
<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rk-green via-rk-blue to-rk-red"></div>
<div className="flex justify-between items-start mb-8">
<div>
<p className="text-rk-red text-xs font-semibold uppercase tracking-wider mb-2">Limited Availability</p>
<h3 className="text-2xl font-bold tracking-tight">Book Conor Today</h3>
</div>
<div className="w-10 h-10 rounded-full bg-rk-blue/10 flex items-center justify-center text-rk-blue">
<i className="w-5 h-5" data-lucide="calendar"></i>
</div>
</div>
<p className="text-slate-600 mb-8 font-light">
                        Conor's schedule fills up fast for push-mower appointments. Secure your slot for a gentle, precise cut on delicate lawns.
                    </p>
<div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Service Area</p>
<div className="flex items-center gap-2 text-slate-900 font-medium">
<i className="w-4 h-4 text-rk-red" data-lucide="map-pin"></i>
                            Greater Dublin Area &amp; Surrounds
                        </div>
</div>
<button className="w-full py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                        Request Conor
                        <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-rk-dark border-t border-white/10 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-rk-green flex items-center justify-center text-white border border-white/10">
<span className="text-xs font-bold tracking-tighter">RK</span>
</div>
<span className="text-base font-medium text-white tracking-tight">RK Mowing</span>
</div>
<p className="text-sm text-slate-500 font-light">
                © 2024 RK Mowing. Proudly Irish.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-rk-blue hover:text-white transition-all border border-transparent hover:border-white/10" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-rk-red hover:text-white transition-all border border-transparent hover:border-white/10" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-rk-green hover:text-white transition-all border border-transparent hover:border-white/10" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
