import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Poppins"', 'sans-serif'],
serif: ['"Playfair Display"', 'serif'],
},
colors: {
vedic: {
cream: '#FBF4E8',
brown: '#3E2A1A',
gold: '#D4A24C',
goldLight: '#EAD2A2',
cosmic: '#2E4A7D',
paper: '#F2E8D5'
}
},
backgroundImage: {
'gradient-gold': 'linear-gradient(135deg, #D4A24C 0%, #B8860B 100%)',
'gradient-cosmic': 'linear-gradient(135deg, #2E4A7D 0%, #1A2B4A 100%)',
},
animation: {
'spin-slow': 'spin 60s linear infinite',
'spin-reverse': 'spin 45s linear infinite reverse',
'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
},
keyframes: {
'pulse-glow': {
'0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
'50%': { opacity: '1', transform: 'scale(1.05)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-vedic-brown/5 bg-[#FBF4E8]/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full border border-vedic-brown flex items-center justify-center group-hover:bg-vedic-brown group-hover:text-vedic-cream transition-colors duration-300">
<iconify-icon icon="lucide:sun" width="18"></iconify-icon>
</div>
<span className="text-xl font-serif font-medium tracking-tight text-vedic-brown">360 DOSHA</span>
</a>
<div className="hidden md:flex items-center gap-10 text-sm font-medium text-vedic-brown/70">
<a className="hover:text-vedic-brown transition-colors" href="#about">About</a>
<a className="hover:text-vedic-brown transition-colors" href="#doshas">Dosha Types</a>
<a className="hover:text-vedic-brown transition-colors" href="#how-it-works">Process</a>
<a className="hover:text-vedic-brown transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-vedic-brown hover:bg-vedic-cosmic transition-all duration-300 rounded-sm" href="#start">
                Get Report
            </a>
<button className="md:hidden text-vedic-brown">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10 order-2 lg:order-1 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vedic-gold/10 border border-vedic-gold/30 text-xs font-semibold uppercase tracking-widest text-vedic-brown mb-8">
<iconify-icon className="text-vedic-gold" icon="lucide:sparkles"></iconify-icon>
                    Vedic Precision
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-vedic-brown mb-6 leading-[1.1]">
                    Align with your <br/>
<span className="text-vedic-cosmic italic">cosmic truth.</span>
</h1>
<p className="text-vedic-brown/70 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
                    The 360 Dosha Report decodes ancient star charts to reveal hidden planetary energies affecting your wealth, health, and relationships.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto px-10 py-4 bg-gradient-gold text-white rounded-sm text-sm font-semibold hover:shadow-lg hover:shadow-vedic-gold/20 transition-all flex items-center justify-center gap-2 tracking-wide uppercase" href="#start">
                        Generate Report
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<button className="w-full sm:w-auto px-10 py-4 border border-vedic-brown/20 text-vedic-brown rounded-sm text-sm font-semibold hover:bg-vedic-brown/5 transition-colors uppercase tracking-wide">
                        View Sample
                    </button>
</div>
<div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-vedic-brown/50">
<div className="flex items-center gap-2 text-xs uppercase tracking-widest">
<iconify-icon icon="lucide:clock" width="14"></iconify-icon> Instant Delivery
                    </div>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-vedic-cream bg-vedic-gold/50"></div>
<div className="w-8 h-8 rounded-full border-2 border-vedic-cream bg-vedic-cosmic/50"></div>
<div className="w-8 h-8 rounded-full border-2 border-vedic-cream bg-vedic-brown/50 flex items-center justify-center text-[10px] text-white font-medium">+2k</div>
</div>
</div>
</div>

<div className="relative order-1 lg:order-2 flex justify-center items-center">

<div className="absolute inset-0 bg-vedic-gold/20 blur-[100px] rounded-full animate-pulse-glow"></div>

<div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">

<div className="absolute inset-0 border border-vedic-brown/10 rounded-full animate-spin-slow flex items-center justify-center">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 text-vedic-brown/40"><iconify-icon icon="lucide:star" width="10"></iconify-icon></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 text-vedic-brown/40"><iconify-icon icon="lucide:star" width="10"></iconify-icon></div>
<div className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 text-vedic-brown/40"><iconify-icon icon="lucide:star" width="10"></iconify-icon></div>
<div className="absolute right-0 top-1/2 translate-x-3 -translate-y-1/2 text-vedic-brown/40"><iconify-icon icon="lucide:star" width="10"></iconify-icon></div>
</div>

<div className="absolute inset-8 border border-dashed border-vedic-gold/40 rounded-full animate-spin-reverse"></div>

<div className="absolute inset-20 border border-vedic-cosmic/20 rounded-full"></div>

<div className="absolute inset-0 m-auto w-32 h-32 bg-gradient-to-br from-vedic-brown to-vedic-cosmic rounded-full flex items-center justify-center shadow-2xl shadow-vedic-gold/30">
<iconify-icon className="text-vedic-gold animate-pulse-glow" icon="lucide:sun" width="48"></iconify-icon>
</div>

<div className="absolute top-10 right-20 bg-vedic-cream p-3 rounded-lg shadow-lg border border-vedic-gold/20 animate-bounce" style={{animationDuration: '3s'}}>
<iconify-icon className="text-vedic-cosmic" icon="lucide:moon" width="20"></iconify-icon>
</div>
<div className="absolute bottom-20 left-10 bg-vedic-cream p-3 rounded-lg shadow-lg border border-vedic-gold/20 animate-bounce" style={{animationDuration: '4s'}}>
<iconify-icon className="text-vedic-gold" icon="lucide:sparkles" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-vedic-paper relative border-y border-vedic-brown/5" id="about">
<div className="max-w-3xl mx-auto px-6 text-center">
<span className="text-vedic-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Our Philosophy</span>
<h2 className="text-3xl md:text-5xl font-serif text-vedic-brown mb-8">Ancient Charts, Modern Clarity</h2>
<div className="w-16 h-0.5 bg-vedic-gold mx-auto mb-10"></div>
<p className="text-lg text-vedic-brown/80 font-light leading-relaxed mb-8">
                In Vedic astrology, a 'Dosha' is a planetary condition that can create unseen obstacles in life. Unlike generic horoscopes, the 360 Dosha Report calculates positions down to the minute of your birth to identify these specific energetic imbalances.
            </p>
<p className="text-lg text-vedic-brown/80 font-light leading-relaxed">
                We bridge the gap between mystical Sanskrit scriptures and modern data processing, giving you a report that is not just spiritual, but deeply practical and actionable.
            </p>
</div>
</section>

<section className="py-24" id="doshas">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-serif text-vedic-brown mb-4">Comprehensive Analysis</h2>
<p className="text-vedic-brown/60">We screen your chart for these six critical karmic patterns.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white border border-vedic-brown/5 p-8 rounded-sm hover:border-vedic-gold transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-vedic-gold/5">
<div className="w-12 h-12 bg-vedic-brown/5 text-vedic-brown group-hover:bg-vedic-gold group-hover:text-white rounded-full flex items-center justify-center mb-6 transition-colors">
<iconify-icon icon="lucide:flame" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-vedic-brown mb-3">Mangal Dosha</h3>
<p className="text-sm text-vedic-brown/60 leading-relaxed">Influence of Mars on marriage and partnerships. Often causes delays or discord in relationships if left unbalanced.</p>
</div>

<div className="group bg-white border border-vedic-brown/5 p-8 rounded-sm hover:border-vedic-gold transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-vedic-gold/5">
<div className="w-12 h-12 bg-vedic-brown/5 text-vedic-brown group-hover:bg-vedic-gold group-hover:text-white rounded-full flex items-center justify-center mb-6 transition-colors">
<iconify-icon icon="lucide:infinity" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-vedic-brown mb-3">Kaal Sarp Dosha</h3>
<p className="text-sm text-vedic-brown/60 leading-relaxed">When all planets are hemmed between Rahu and Ketu. Can create struggles despite hard work and talent.</p>
</div>

<div className="group bg-white border border-vedic-brown/5 p-8 rounded-sm hover:border-vedic-gold transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-vedic-gold/5">
<div className="w-12 h-12 bg-vedic-brown/5 text-vedic-brown group-hover:bg-vedic-gold group-hover:text-white rounded-full flex items-center justify-center mb-6 transition-colors">
<iconify-icon icon="lucide:users" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-vedic-brown mb-3">Pitra Dosha</h3>
<p className="text-sm text-vedic-brown/60 leading-relaxed">Ancestral karma that affects family lineage and prosperity. Indicates a need to honor past generations.</p>
</div>

<div className="group bg-white border border-vedic-brown/5 p-8 rounded-sm hover:border-vedic-gold transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-vedic-gold/5">
<div className="w-12 h-12 bg-vedic-brown/5 text-vedic-brown group-hover:bg-vedic-gold group-hover:text-white rounded-full flex items-center justify-center mb-6 transition-colors">
<iconify-icon icon="lucide:heart-pulse" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-vedic-brown mb-3">Nadi Dosha</h3>
<p className="text-sm text-vedic-brown/60 leading-relaxed">Critical for match-making. Relates to health compatibility and genetic well-being of offspring.</p>
</div>

<div className="group bg-white border border-vedic-brown/5 p-8 rounded-sm hover:border-vedic-gold transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-vedic-gold/5">
<div className="w-12 h-12 bg-vedic-brown/5 text-vedic-brown group-hover:bg-vedic-gold group-hover:text-white rounded-full flex items-center justify-center mb-6 transition-colors">
<iconify-icon icon="lucide:hourglass" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-vedic-brown mb-3">Shani Sade Sati</h3>
<p className="text-sm text-vedic-brown/60 leading-relaxed">The 7.5 year transit of Saturn. A period of intense transformation, discipline, and karmic testing.</p>
</div>

<div className="group bg-white border border-vedic-brown/5 p-8 rounded-sm hover:border-vedic-gold transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-vedic-gold/5">
<div className="w-12 h-12 bg-vedic-brown/5 text-vedic-brown group-hover:bg-vedic-gold group-hover:text-white rounded-full flex items-center justify-center mb-6 transition-colors">
<iconify-icon icon="lucide:graduation-cap" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-vedic-brown mb-3">Guru Chandal</h3>
<p className="text-sm text-vedic-brown/60 leading-relaxed">The conjunction of Jupiter and Rahu. Affects wisdom, decision making, and spiritual direction.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-vedic-brown text-vedic-cream relative overflow-hidden" id="how-it-works">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#D4A24C 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-serif text-vedic-gold mb-4">Your Path to Awareness</h2>
<p className="text-vedic-cream/60">A simple process to unveil profound insights.</p>
</div>
<div className="flex flex-col md:flex-row items-start justify-between relative gap-12">

<div className="hidden md:block absolute top-10 left-10 right-10 h-px bg-gradient-to-r from-transparent via-vedic-gold/30 to-transparent border-t border-dashed border-vedic-gold/30"></div>

<div className="relative flex-1 text-center group">
<div className="w-20 h-20 mx-auto bg-vedic-brown border border-vedic-gold rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,162,76,0.2)] group-hover:scale-110 transition-transform duration-300 relative z-10">
<span className="text-2xl font-serif text-vedic-gold">I</span>
</div>
<h3 className="text-xl font-serif text-white mb-2">Input Birth Data</h3>
<p className="text-sm text-vedic-cream/60 px-4">Enter your precise date, time, and location of birth. Accuracy is key.</p>
</div>

<div className="relative flex-1 text-center group">
<div className="w-20 h-20 mx-auto bg-vedic-brown border border-vedic-gold rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,162,76,0.2)] group-hover:scale-110 transition-transform duration-300 relative z-10">
<span className="text-2xl font-serif text-vedic-gold">II</span>
</div>
<h3 className="text-xl font-serif text-white mb-2">Algorithm Analysis</h3>
<p className="text-sm text-vedic-cream/60 px-4">Our engine calculates planetary degrees and nakshatras against Vedic rules.</p>
</div>

<div className="relative flex-1 text-center group">
<div className="w-20 h-20 mx-auto bg-vedic-brown border border-vedic-gold rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,162,76,0.2)] group-hover:scale-110 transition-transform duration-300 relative z-10">
<span className="text-2xl font-serif text-vedic-gold">III</span>
</div>
<h3 className="text-xl font-serif text-white mb-2">Receive Report</h3>
<p className="text-sm text-vedic-cream/60 px-4">Instant access to your PDF report with detailed explanations and remedies.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-vedic-cream">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="grid grid-cols-2 gap-6">
<div className="p-6 bg-white rounded-sm border-l-4 border-vedic-gold shadow-sm">
<iconify-icon className="text-vedic-gold mb-3" icon="lucide:check-circle" width="24"></iconify-icon>
<h4 className="font-serif text-lg text-vedic-brown mb-1">Authentic Vedic</h4>
<p className="text-xs text-vedic-brown/60">Strict adherence to Parashara scriptures.</p>
</div>
<div className="p-6 bg-white rounded-sm border-l-4 border-vedic-cosmic shadow-sm">
<iconify-icon className="text-vedic-cosmic mb-3" icon="lucide:shield-check" width="24"></iconify-icon>
<h4 className="font-serif text-lg text-vedic-brown mb-1">100% Private</h4>
<p className="text-xs text-vedic-brown/60">Your birth data is encrypted and secure.</p>
</div>
<div className="p-6 bg-white rounded-sm border-l-4 border-vedic-brown shadow-sm">
<iconify-icon className="text-vedic-brown mb-3" icon="lucide:feather" width="24"></iconify-icon>
<h4 className="font-serif text-lg text-vedic-brown mb-1">Plain English</h4>
<p className="text-xs text-vedic-brown/60">No confusing jargon, just clarity.</p>
</div>
<div className="p-6 bg-white rounded-sm border-l-4 border-vedic-goldLight shadow-sm">
<iconify-icon className="text-vedic-goldLight mb-3" icon="lucide:sun-dim" width="24"></iconify-icon>
<h4 className="font-serif text-lg text-vedic-brown mb-1">Remedies</h4>
<p className="text-xs text-vedic-brown/60">Actionable steps to balance energy.</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-vedic-cosmic text-sm font-semibold tracking-widest uppercase mb-4 block">Why 360 Dosha</span>
<h2 className="text-4xl md:text-5xl font-serif text-vedic-brown mb-6">Trust the Wisdom of the Stars</h2>
<p className="text-vedic-brown/70 text-lg font-light leading-relaxed mb-8">
                        In a world of uncertainty, your birth chart is a constant map. We don't just tell you the problems; we focus on the solutions. Our algorithms are designed by expert astrologers with decades of experience to ensure the highest fidelity in prediction.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-vedic-brown/80">
<iconify-icon className="text-vedic-gold" icon="lucide:star" width="16"></iconify-icon> 50,000+ Reports Generated
                        </li>
<li className="flex items-center gap-3 text-vedic-brown/80">
<iconify-icon className="text-vedic-gold" icon="lucide:star" width="16"></iconify-icon> 4.9/5 Average User Rating
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-vedic-paper border-t border-vedic-brown/5" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-serif text-vedic-brown text-center mb-12">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-vedic-brown/10 rounded-sm overflow-hidden shadow-sm">
<summary className="flex items-center justify-between p-6 cursor-pointer text-vedic-brown font-medium hover:text-vedic-gold transition-colors">
                        Is Vedic astrology different from Western astrology?
                        <span className="text-vedic-brown/40 transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-vedic-brown/70 text-sm leading-relaxed border-t border-vedic-brown/5 pt-4">
                        Yes, significant differences exist. Vedic astrology (Sidereal) uses the fixed zodiac based on current star positions, while Western astrology (Tropical) relies on the seasons. Vedic astrology is often considered more predictive regarding specific life events and karmic patterns (Doshas).
                    </div>
</details>
<details className="group bg-white border border-vedic-brown/10 rounded-sm overflow-hidden shadow-sm">
<summary className="flex items-center justify-between p-6 cursor-pointer text-vedic-brown font-medium hover:text-vedic-gold transition-colors">
                        What if I don't know my exact birth time?
                        <span className="text-vedic-brown/40 transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-vedic-brown/70 text-sm leading-relaxed border-t border-vedic-brown/5 pt-4">
                        Accurate birth time is crucial for a 360 Dosha report because the Ascendant (Lagna) changes every two hours. If you are unsure, we recommend our "Birth Time Rectification" service before generating the full report.
                    </div>
</details>
<details className="group bg-white border border-vedic-brown/10 rounded-sm overflow-hidden shadow-sm">
<summary className="flex items-center justify-between p-6 cursor-pointer text-vedic-brown font-medium hover:text-vedic-gold transition-colors">
                        Are the remedies difficult to perform?
                        <span className="text-vedic-brown/40 transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-vedic-brown/70 text-sm leading-relaxed border-t border-vedic-brown/5 pt-4">
                        Not at all. We focus on "Satvik" remedies—simple lifestyle changes, mantra chanting, donation (daan), and sometimes gemstone recommendations. We avoid complex or expensive rituals.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-vedic-brown text-center" id="start">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-vedic-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<h2 className="text-5xl md:text-6xl font-serif text-vedic-gold mb-8">Discover Your Destiny Today</h2>
<p className="text-vedic-cream/70 text-lg mb-12 max-w-2xl mx-auto">
                Don't let hidden doshas hold you back. Gain the clarity you need to navigate career, relationships, and health with confidence.
            </p>
<form className="max-w-lg mx-auto bg-white/5 p-2 rounded-lg border border-vedic-gold/20 flex flex-col sm:flex-row gap-2 backdrop-blur-sm">
<input className="flex-1 bg-transparent border-none text-white px-4 py-3 focus:ring-0 placeholder-vedic-cream/30 outline-none" placeholder="Enter your email address" type="email"/>
<button className="px-8 py-3 bg-vedic-gold hover:bg-white hover:text-vedic-brown text-vedic-brown font-semibold rounded-md transition-all uppercase tracking-wide text-sm">
                    Start Now
                </button>
</form>
<p className="mt-6 text-xs text-vedic-cream/40">No credit card required for initial check.</p>
</div>
</section>

<footer className="bg-[#2a1c11] text-vedic-cream/60 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6 text-vedic-gold hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:sun" width="20"></iconify-icon>
<span className="font-serif font-medium tracking-tight text-lg">360 DOSHA</span>
</a>
<p className="text-sm leading-relaxed mb-6">Bridging the gap between the cosmos and your daily life through precision Vedic analysis.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-vedic-gold hover:text-vedic-brown transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-vedic-gold hover:text-vedic-brown transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-vedic-gold hover:text-vedic-brown transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-serif mb-6">Product</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-vedic-gold transition-colors" href="#">Full Report</a></li>
<li><a className="hover:text-vedic-gold transition-colors" href="#">Sample PDF</a></li>
<li><a className="hover:text-vedic-gold transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-vedic-gold transition-colors" href="#">Gift a Reading</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-serif mb-6">Learn</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-vedic-gold transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-vedic-gold transition-colors" href="#">Dosha Guide</a></li>
<li><a className="hover:text-vedic-gold transition-colors" href="#">Vedic Glossary</a></li>
<li><a className="hover:text-vedic-gold transition-colors" href="#">Astrology 101</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-serif mb-6">Support</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-vedic-gold transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-vedic-gold transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-vedic-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-vedic-gold transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 text-center text-xs">
<p>© 2023 360 Dosha Report. All rights reserved. Designed with conscious intent.</p>
</div>
</div>
</footer>

    </>
  );
}
