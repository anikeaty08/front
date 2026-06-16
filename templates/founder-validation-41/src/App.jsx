import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
mint: {
DEFAULT: '#7BBCAD', // Brand Mint
soft: '#DFFBF3',    // Soft Background
},
deepRed: '#651414',   // Brand Text
coral: {
DEFAULT: '#E96C6C', // Brand Coral
hover: '#D65A5A',
},
white: '#FFFFFF',
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
900: '#111827',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
borderRadius: {
'card': '18px',
'btn': '12px',
},
boxShadow: {
'soft': '0 8px 30px -4px rgba(101, 20, 20, 0.08)',
'glow': '0 0 40px rgba(123, 188, 173, 0.4)',
'slap': '0 0 50px rgba(123, 188, 173, 0.6)',
},
animation: {
'swipe-demo': 'swipeDemo 4s infinite ease-in-out',
'float': 'float 6s ease-in-out infinite',
'fade-up': 'fadeUp 0.8s ease-out forwards',
},
keyframes: {
swipeDemo: {
'0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
'50%': { transform: 'translateX(60px) rotate(8deg)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(12px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
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
      

<nav className="fixed top-0 w-full z-50 bg-mint-soft/90 backdrop-blur-md border-b border-teal-900/5">
<div className="lg:px-20 flex h-20 max-w-[1280px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-9 h-9 flex items-center justify-center">
<svg className="text-mint group-hover:scale-110 transition-transform w-[36px] h-[36px]" fill="none" height="100%" strokeWidth="2" viewbox="0 0 48 48" width="100%" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 24C12 18.4772 16.4772 14 22 14H24C29.5228 14 34 18.4772 34 24V30C34 32.2091 32.2091 34 30 34H26C24.8954 34 24 34.8954 24 36V38C24 40.2091 22.2091 42 20 42H16C13.7909 42 12 40.2091 12 38V24ZM16 26C15.4477 26 15 26.4477 15 27V38C15 38.5523 15.4477 39 16 39H20C20.5523 39 21 38.5523 21 38V36C21 33.2386 23.2386 31 26 31H30C30.5523 31 31 30.5523 31 30V24C31 20.134 27.866 17 24 17H22C18.134 17 15 20.134 15 24H16V26Z" fill="currentColor" fill-rule="evenodd"></path>
<path className="opacity-40" d="M34 14C32 10 26 6 20 10" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
<path className="opacity-40" d="M40 20C38 16 34 14 34 14" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-deepRed text-2xl font-bold tracking-tighter font-display">1slap</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-deepRed/80 hover:text-coral transition-colors" href="#problem">The Problem</a>
<a className="text-sm font-medium text-deepRed/80 hover:text-coral transition-colors" href="#how-it-works">How It Works</a>
<a className="text-sm font-medium text-deepRed/80 hover:text-coral transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium px-5 py-2.5 bg-coral text-white rounded-full hover:bg-coral-hover transition-colors shadow-sm" href="#pricing">Upload Pitch</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden" id="hero">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-7 flex flex-col items-start z-10 animate-fade-up">
<h1 className="font-display text-deepRed mb-8 text-balance text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] font-bold">
              You Only Get One Shot at Your MVP. <span className="text-mint">Make It Count.</span>
</h1>
<p className="text-deepRed/80 mb-10 max-w-[580px] text-lg lg:text-xl leading-relaxed">
              In 10 minutes, get the truth your network can’t give you: undeniable buy signals from real strangers who could become your first buyers.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="btn-primary w-full sm:w-auto px-8 py-4 rounded-btn text-white font-medium text-lg text-center flex items-center justify-center gap-2 group" href="#pricing">
                Upload Your Pitch
                <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m16 16-4-4-4 4"></path>
</svg>
</a>
<a className="btn-coral w-full sm:w-auto px-8 py-4 rounded-btn text-white font-medium text-lg text-center flex items-center justify-center gap-2" href="#how-it-works">
                See How It Works
              </a>
</div>
<p className="mt-4 text-sm font-medium text-deepRed/50">Why guess when you can know?</p>
</div>

<div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-white rounded-full blur-[90px] -z-10"></div>
<div className="phone-frame relative w-[280px] h-[580px] bg-gray-900 rounded-[40px] border-4 border-gray-800 overflow-hidden animate-float">
<div className="w-full h-full bg-white relative overflow-hidden flex flex-col">
<div className="h-6 w-full flex justify-between items-center px-4 pt-2">
<div className="w-12 h-3 rounded-full bg-gray-100"></div>
<div className="w-4 h-4 rounded-full bg-gray-100"></div>
</div>
<div className="flex-1 flex items-center justify-center p-4 perspective-[1000px]">
<div className="relative w-full h-[400px] animate-swipe-demo shadow-slap rounded-card">
<div className="w-full h-full bg-gray-100 rounded-card overflow-hidden relative border border-gray-200">
<img alt="Pitch" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-5 right-5 text-white">
<div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">Pitch #2049</div>
<div className="text-2xl font-display font-bold leading-tight">AI Meal Planner</div>
</div>
<div className="absolute top-8 left-6 border-4 border-mint text-mint px-4 py-1 rounded font-display font-bold text-3xl tracking-widest uppercase opacity-90 -rotate-12 bg-white/10 backdrop-blur-sm">
                        SLAP
                      </div>
</div>
</div>
</div>

<div className="h-20 bg-white border-t border-gray-100 flex justify-around items-center px-6">
<div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center text-coral"><svg data-lucide="x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="w-12 h-12 rounded-full bg-mint flex items-center justify-center text-white shadow-lg transform -translate-y-2"><svg data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5 4.5 2 4.5C13.5 11 11 13 11 17c0 2.29 1.54 3.79 3 5.5 2 2.21 4.5 4 4.5 4s2.5-1.79 4.5-4c1.46-1.71 3-3.21 3-5.5 0-2.29-1.54-3.79-3-5.5A5.5 5.5 0 0 0 19.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 4 8.5c0 2.29 1.54 4.04 3 5.5l9 10 9-10z" fill="currentColor"></path></svg></div>
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400"><svg data-lucide="info" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-teal-50" id="problem">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20 text-center">
<h2 className="font-display text-4xl md:text-5xl font-bold text-deepRed mb-8 tracking-tight max-w-4xl mx-auto">
          Most founders don’t fail because they can’t build. <span className="text-coral">They fail because they build the wrong thing.</span>
</h2>
<p className="text-xl text-deepRed/70 max-w-2xl mx-auto mb-16 leading-relaxed">
          Polite feedback from friends sounds supportive — but it gives you confidence, not clarity. And clarity is what determines the success or failure of an MVP.
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
<div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center text-coral mb-4">
<svg data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<p className="font-medium text-deepRed">Building features people won’t pay for</p>
</div>
<div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
<div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center text-coral mb-4">
<svg data-lucide="ghost" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"></path></svg>
</div>
<p className="font-medium text-deepRed">Solving a problem users don’t actually feel</p>
</div>
<div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
<div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center text-coral mb-4">
<svg data-lucide="signpost" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v3"></path><path d="M18.5 13H12V6H5.5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2H12v11"></path><path d="m22 9-3.5-3.5L18.5 9"></path><path d="m22 9-3.5 3.5L18.5 9"></path></svg>
</div>
<p className="font-medium text-deepRed">Heading the wrong direction for months</p>
</div>
<div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
<div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center text-coral mb-4">
<svg data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<p className="font-medium text-deepRed">Over-investing before validation</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-mint-soft">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20 text-center">
<h2 className="font-display text-4xl md:text-5xl font-bold text-deepRed mb-6 tracking-tight">
          Real truth. Real demand. Real direction.
         </h2>
<p className="text-xl text-deepRed/70 mb-12">
            Get immediate validation through a simple, powerful mechanism.
            Every swipe is a real data point from real people.
         </p>
<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">

<div className="bg-white p-8 rounded-card shadow-soft w-full md:w-80 border-t-4 border-mint relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-20 h-20 bg-mint/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
<div className="text-mint mb-4 flex justify-center">
<svg data-lucide="thumbs-up" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 23H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path><path d="M12 15V3a3 3 0 1 0-6 0v7"></path></svg>
</div>
<h3 className="font-display text-3xl font-bold text-deepRed mb-2">SLAP</h3>
<p className="text-lg font-medium text-mint mb-4">"I'd buy this."</p>
<p className="text-sm text-deepRed/60">Strong demand signal.</p>
</div>
<div className="text-deepRed/40 font-bold font-display text-xl">VS</div>

<div className="bg-white p-8 rounded-card shadow-soft w-full md:w-80 border-t-4 border-coral relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-20 h-20 bg-coral/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
<div className="text-coral mb-4 flex justify-center">
<svg data-lucide="thumbs-down" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M17 14V2"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 1h13.5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path><path d="M12 9v12a3 3 0 1 0 6 0v-7"></path></svg>
</div>
<h3 className="font-display text-3xl font-bold text-deepRed mb-2">FLOP</h3>
<p className="text-lg font-medium text-coral mb-4">"I wouldn't."</p>
<p className="text-sm text-deepRed/60">Valuable redirection.</p>
</div>
</div>
<p className="mt-12 text-lg font-medium text-deepRed/80">This isn’t feedback. <span className="text-mint font-bold underline decoration-2 underline-offset-4">It’s buyer intent.</span></p>
</div>
</section>

<section className="py-24 text-center bg-white" id="how-it-works">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20">
<h2 className="font-display text-4xl md:text-5xl font-bold text-deepRed mb-4 tracking-tight">
          Upload. Test. Learn. Build Smarter.
        </h2>
<p className="text-xl text-deepRed/70 mb-16">The 4-step mechanism to clarity.</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col items-center group text-left">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300 border border-teal-50 relative">
<div className="absolute -top-3 -left-3 w-8 h-8 bg-deepRed text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
<svg data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
</div>
<h3 className="font-display text-xl font-bold text-deepRed mb-2">Upload Pitch</h3>
<p className="text-deepRed/70 text-sm leading-relaxed">
              Record a 30–60 second pitch. Add a one-liner description. Simple.
            </p>
</div>

<div className="flex flex-col items-center group text-left">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300 border border-teal-50 relative">
<div className="absolute -top-3 -left-3 w-8 h-8 bg-mint text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
<svg data-lucide="smartphone-nfc" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path><path d="M20 6c2.5 0 4.3 2.6 3.4 5"></path><path d="M22 6a3 3 0 0 1-2.6 5"></path></svg>
</div>
<h3 className="font-display text-xl font-bold text-deepRed mb-2">People Swipe</h3>
<p className="text-deepRed/70 text-sm leading-relaxed">
              Your idea is shown to everyday users who decide instantly: Slap or Flop.
            </p>
</div>

<div className="flex flex-col items-center group text-left">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300 border border-teal-50 relative">
<div className="absolute -top-3 -left-3 w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
<svg data-lucide="unlock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
</div>
<h3 className="font-display text-xl font-bold text-deepRed mb-2">Unlock Intent</h3>
<p className="text-deepRed/70 text-sm leading-relaxed">
              See Slap %, total views, and gather a list of early adopters.
            </p>
</div>

<div className="flex flex-col items-center group text-left">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300 border border-teal-50 relative">
<div className="absolute -top-3 -left-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
<svg data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
</div>
<h3 className="font-display text-xl font-bold text-deepRed mb-2">Get Direction</h3>
<p className="text-deepRed/70 text-sm leading-relaxed">
              Know if you should pivot, kill it, or build the MVP immediately.
            </p>
</div>
</div>
<div className="mt-16">
<a className="btn-outline inline-flex items-center font-medium px-8 py-3 rounded-full text-base" href="#">
             See Example Dashboards
           </a>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-100">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-display text-4xl font-bold text-deepRed mb-6 tracking-tight">
                  Surveys give opinions. <br/><span className="text-mint">1slap gives you intent.</span>
</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-mint/20 flex items-center justify-center text-mint flex-shrink-0 mt-1">
<svg data-lucide="shield-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h3 className="font-display font-bold text-lg text-deepRed">Honest Signals</h3>
<p className="text-deepRed/70">Users swipe anonymously — no pressure, no flattery. Pure reaction.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-mint/20 flex items-center justify-center text-mint flex-shrink-0 mt-1">
<svg data-lucide="zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<div>
<h3 className="font-display font-bold text-lg text-deepRed">Fast Cycles</h3>
<p className="text-deepRed/70">Learn in hours what normally takes interviews + weeks.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-mint/20 flex items-center justify-center text-mint flex-shrink-0 mt-1">
<svg data-lucide="users" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div>
<h3 className="font-display font-bold text-lg text-deepRed">Find Early Adopters</h3>
<p className="text-deepRed/70">People who slap your idea can opt-in to follow your journey instantly.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center text-coral flex-shrink-0 mt-1">
<svg data-lucide="piggy-bank" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2.5V5z"></path><path d="M2 9v1c0 1.1.9 2 2 2h1"></path><path d="M16 11h.01"></path></svg>
</div>
<div>
<h3 className="font-display font-bold text-lg text-deepRed">Protect Your Time</h3>
<p className="text-deepRed/70">A flop is not failure — it’s saved cost. Know before you code.</p>
</div>
</div>
</div>
</div>

<div className="relative bg-white rounded-2xl shadow-soft p-8 h-[400px] flex flex-col justify-end border border-gray-100">
<div className="absolute top-8 left-8">
<h4 className="font-display font-bold text-xl text-deepRed">Dashboard</h4>
<p className="text-xs text-gray-500">Live Analytics</p>
</div>
<div className="absolute top-8 right-8 text-right">
<div className="text-2xl font-display font-bold text-mint">84%</div>
<div className="text-xs text-gray-400 uppercase tracking-wide">Slap Rate</div>
</div>

<div className="w-full h-48 flex items-end justify-between gap-2">
<div className="w-full bg-gray-100 h-[20%] rounded-t-sm"></div>
<div className="w-full bg-gray-100 h-[35%] rounded-t-sm"></div>
<div className="w-full bg-mint/30 h-[45%] rounded-t-sm"></div>
<div className="w-full bg-mint/50 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-mint/70 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-mint h-[85%] rounded-t-sm"></div>
<div className="w-full bg-mint h-[95%] rounded-t-sm relative group">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-deepRed text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Current Trend</div>
</div>
</div>
<div className="flex justify-between text-sm text-gray-400 font-medium mt-4 pt-4 border-t border-gray-100">
<span>Day 1</span>
<span>Day 7</span>
<span>Day 14</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20">
<div className="bg-deepRed text-white rounded-[24px] p-12 lg:p-20 relative overflow-hidden text-center">

<div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-mint/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
<h2 className="relative font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
               From guessing to knowing.<br/>
               From doubt to direction.<br/>
<span className="text-mint">From idea to momentum.</span>
</h2>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto mt-12">
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
<div className="text-mint font-bold mb-2 text-lg">Confidence</div>
<p className="text-white/80 text-sm">Proof you can use for co-founders, advisors, or investors.</p>
</div>
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
<div className="text-mint font-bold mb-2 text-lg">Path</div>
<p className="text-white/80 text-sm">A clear signal of whether the idea deserves an MVP.</p>
</div>
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
<div className="text-mint font-bold mb-2 text-lg">Believers</div>
<p className="text-white/80 text-sm">A ready-made list of early adopters waiting for launch.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-mint-soft" id="pricing">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20 text-center">
<h2 className="font-display text-4xl font-bold text-deepRed mb-4 tracking-tight">
          Simple, Startup-Friendly Pricing
        </h2>
<p className="text-xl text-deepRed/70 mb-12">No complicated plans. No hidden fees.</p>
<div className="max-w-md mx-auto bg-white rounded-card shadow-soft p-8 border border-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-2 bg-mint"></div>
<h3 className="font-display text-2xl font-bold text-deepRed mb-2">Early Bird Founder</h3>
<div className="flex items-baseline justify-center gap-1 mb-6">
<span className="text-5xl font-bold text-deepRed tracking-tight">$2.99</span>
<span className="text-gray-500 font-medium">/month</span>
</div>
<div className="bg-mint-soft text-mint rounded-lg py-2 px-4 text-sm font-bold mb-8 inline-block">
              First Pitch Free for 30 Days
           </div>
<ul className="space-y-4 text-left mb-8 px-4">
<li className="flex items-center gap-3">
<svg className="text-mint" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-deepRed/80">Keep your pitch active</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-mint" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-deepRed/80">Access full analytics dashboard</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-mint" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-deepRed/80">Export early adopter emails</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-mint" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-deepRed/80">Additional pitches $2.99/mo each</span>
</li>
</ul>
<a className="btn-primary w-full px-8 py-4 rounded-btn text-white font-medium text-lg block hover:shadow-lg transition-all" href="#">
              Upload Your Pitch
           </a>
<p className="text-xs text-gray-400 mt-4">Cancel anytime.</p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[800px] mx-auto px-6">
<h2 className="font-display text-3xl font-bold text-deepRed mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="border-b border-gray-100 pb-4">
<h3 className="font-bold text-lg text-deepRed mb-2">Do I need a finished product?</h3>
<p className="text-deepRed/70 leading-relaxed">No — this is specifically for early-stage founders testing ideas. A rough pitch often works better than a polished one.</p>
</div>

<div className="border-b border-gray-100 pb-4">
<h3 className="font-bold text-lg text-deepRed mb-2">Will people understand my pitch?</h3>
<p className="text-deepRed/70 leading-relaxed">If your Slap % is low, your pitch may need adjustment. This is the value — finding the right message before you spend marketing dollars.</p>
</div>

<div className="border-b border-gray-100 pb-4">
<h3 className="font-bold text-lg text-deepRed mb-2">Are votes anonymous?</h3>
<p className="text-deepRed/70 leading-relaxed">Yes. Anonymity guarantees honesty. No polite "nice idea" lies here.</p>
</div>

<div className="border-b border-gray-100 pb-4">
<h3 className="font-bold text-lg text-deepRed mb-2">How long does it take?</h3>
<p className="text-deepRed/70 leading-relaxed">About 10 minutes to upload. Results often start arriving within hours as the community swipes.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-mint-soft border-t border-teal-50 text-center relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto px-6">
<h2 className="font-display text-5xl font-bold text-deepRed mb-6 tracking-tight">Get the Truth Before You Build.</h2>
<p className="text-xl text-deepRed/70 mb-10">Real signals save you months — or your entire MVP budget.</p>
<a className="btn-primary inline-flex items-center px-10 py-5 rounded-btn text-white font-bold text-xl gap-2 shadow-slap hover:scale-105 transition-transform" href="#pricing">
             Upload Your Pitch
             <svg data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<footer className="py-20 bg-white border-t border-teal-100 text-deepRed/80">
<div className="max-w-[1280px] mx-auto px-6 lg:px-20">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

<div className="col-span-2 lg:col-span-2 pr-8">
<a className="flex items-center gap-2 mb-6" href="#">
<svg className="w-6 h-6 text-mint" data-lucide="hand-metal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"></path><path d="M14 11V9a2 2 0 1 0-4 0v2"></path><path d="M10 10.5V5a2 2 0 1 0-4 0v9"></path><path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"></path></svg>
<span className="font-display font-bold text-xl text-deepRed">1slap</span>
</a>
<p className="text-sm leading-relaxed mb-6">
                1slap is where ideas become real. We offer truth-driven validation for modern founders by connecting you with real people who vote on real ideas. Validation with honesty. Momentum with meaning.
              </p>
<div className="flex gap-4">
<a className="text-deepRed/40 hover:text-coral transition-colors" href="#"><svg data-lucide="twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S.2 5.3 4.1 2c2.1-1.8 5.1-.5 5.1-.5S10 7.3 10.5 8c2 2.7 1 6.3-1 9-2.3 3.1-6.7 1-6.7 1"></path></svg></a>
<a className="text-deepRed/40 hover:text-coral transition-colors" href="#"><svg data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-deepRed/40 hover:text-coral transition-colors" href="#"><svg data-lucide="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>

<div>
<h4 className="font-bold text-deepRed mb-4">Explore</h4>
<ul className="space-y-3 text-sm font-medium text-deepRed/60">
<li><a className="hover:text-coral transition-colors" href="#">Home</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Slap or FLOP Ideas</a></li>
<li><a className="hover:text-coral transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-coral transition-colors" href="#">For Founders</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-deepRed mb-4">Support</h4>
<ul className="space-y-3 text-sm font-medium text-deepRed/60">
<li><a className="hover:text-coral transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Accessibility</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-deepRed mb-4">Legal</h4>
<ul className="space-y-3 text-sm font-medium text-deepRed/60">
<li><a className="hover:text-coral transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-deepRed/40">
<p>© 2025 1slap, Inc. All rights reserved.</p>
<p>United States (English)</p>
</div>
</div>
</footer>


    </>
  );
}
