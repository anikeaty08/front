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
serif: ['Playfair Display', 'serif'],
arabic: ['Amiri', 'serif'],
},
colors: {
sand: {
50: '#fbfaf8',
100: '#f5f2eb',
200: '#e9e2d5',
300: '#dcd0bc',
400: '#cbb69e',
500: '#bf9e80',
600: '#b28969',
700: '#946f55',
800: '#7a5b48',
900: '#634b3d',
},
emerald: {
900: '#064e3b',
950: '#022c22',
}
},
backgroundImage: {
'islamic-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237a5b48' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
},
animation: {
'float': 'float 6s ease-in-out infinite',
'scroll': 'scroll 40s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
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
      

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md transition-all duration-300 border-sand-200 bg-sand-50/80">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-serif text-lg md:text-xl tracking-tight flex items-center gap-2 group text-emerald-950" href="#">
<div className="w-8 h-8 rounded-full flex items-center justify-center border group-hover:rotate-12 transition-transform duration-500 bg-sand-100 border-sand-200">
<svg aria-hidden="true" data-icon="lucide:flower-2" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12m0 0c4.2 0 7-1.667 7-5c-4.2 0-7 1.667-7 5m0 0c-4.2 0-7-1.667-7-5c4.2 0 7 1.667 7 5"></path></g></svg>
</div>
<span>LearnTajweed<span className="italic text-sand-600">WithMariam</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-sand-700">
<a className="transition-colors hover:text-emerald-950" href="#booking">Class Options</a>
<a className="transition-colors hover:text-emerald-950" href="#curriculum">Syllabus</a>
<a className="transition-colors hover:text-emerald-950" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-5 py-2.5 text-xs font-medium rounded-full transition-all shadow-sm ring-1 group bg-emerald-950 text-sand-50 hover:bg-sand-800 ring-emerald-950/10" href="#booking">
                    Book Your Slot
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>

<button className="md:hidden p-2 text-sand-800">
<svg aria-hidden="true" data-icon="lucide:menu" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-islamic-pattern">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[100px] -z-10 animate-float bg-sand-200/40"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="fade-in-up mb-8 flex justify-center">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border backdrop-blur-sm text-xs font-medium shadow-sm hover:scale-105 transition-transform cursor-default border-sand-200 bg-white/60 text-emerald-950">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span>3 Slots Left for September Cohort</span>
</div>
</div>
<div className="fade-in-up delay-100 mb-8 space-y-2">
<h2 className="font-arabic text-2xl md:text-3xl text-sand-500" dir="rtl">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h2>
<h1 className="md:text-7xl lg:text-8xl leading-[1] md:leading-[0.95] text-5xl tracking-tight font-serif text-emerald-950">
                    Recite with  
                    <span className="bg-gradient-to-r bg-clip-text text-transparent from-emerald-950 via-emerald-800 to-emerald-950">Excellence.</span>
</h1>
</div>
<p className="fade-in-up delay-200 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12 font-light text-sand-600">
                Join Sister Mariam for intimate, interactive Tajweed sessions tailored to help you connect deeply with the Holy Quran.
            </p>
<div className="fade-in-up delay-300 flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group bg-emerald-950 text-sand-50 hover:bg-emerald-900" href="#booking">
<svg aria-hidden="true" data-icon="lucide:calendar-check" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18M9 16l2 2l4-4"></path></g></svg>
                    Book Your Slot
                </a>
<a className="w-full sm:w-auto px-8 py-4 border rounded-xl font-medium transition-all backdrop-blur-sm bg-white/50 border-sand-300 text-emerald-950 hover:bg-white hover:border-sand-400" href="#curriculum">
                    Explore Classes
                </a>
</div>
</div>
</header>

<div className="border-y backdrop-blur-sm py-8 border-sand-200 bg-white/50">
<div className="flex flex-wrap gap-8 md:gap-16 text-sand-500 hover:grayscale-0 hover:opacity-100 transition-all duration-500 opacity-80 max-w-6xl mr-auto ml-auto pr-6 pl-6 grayscale gap-x-8 gap-y-8 items-center justify-center">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:globe" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
<span className="text-xs font-semibold tracking-widest uppercase">Students from 15+ Countries</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:graduation-cap" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
<span className="text-xs font-semibold tracking-widest uppercase">Ijaza Certified Instructor</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:video" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
<span className="text-xs font-semibold tracking-widest uppercase">Zoom &amp; Google Meet</span>
</div>
</div>
</div>

<section className="overflow-hidden pt-24 pb-24 relative bg-white" id="booking">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl mb-4 text-emerald-950">Choose Your Learning Path</h2>
<p className="max-w-lg mx-auto mb-8 text-sand-600">Flexible options designed for busy sisters who want to prioritize their Quran journey.</p>

<div className="flex items-center justify-center gap-3 text-sm font-medium">
<span className="text-emerald-950">Monthly</span>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full border-4 appearance-none cursor-pointer transition-all duration-300 bg-white border-sand-200" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full cursor-pointer bg-sand-200" htmlFor="toggle"></label>
</div>
<span className="text-sand-500">Quarterly <span className="text-xs font-bold px-2 py-0.5 rounded-full ml-1 text-emerald-600 bg-emerald-50">-10%</span></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">

<div className="group relative p-8 rounded-2xl border transition-all hover:shadow-lg h-full bg-white border-sand-200 hover:border-sand-300">
<div className="mb-4">
<span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-sand-100 text-sand-700">Trial</span>
</div>
<h3 className="font-serif text-2xl mb-2 text-emerald-950">Discovery Session</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-emerald-950">$15</span>
<span className="text-sand-500 text-sm">/ one-time</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-sand-700">
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            30-minute assessment
                        </li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Personalized roadmap
                        </li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Makharij correction
                        </li>
</ul>
<a className="block w-full py-3 text-center border rounded-lg font-medium transition-colors border-sand-200 text-emerald-950 hover:bg-sand-50" href="#join-form">Book Trial</a>
</div>

<div className="group relative p-8 rounded-2xl shadow-xl transform md:-translate-y-2 h-full bg-emerald-950">
<div className="absolute top-0 right-0 p-4">
<svg aria-hidden="true" data-icon="lucide:stars" data-strokeWidth="1" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div className="mb-4 flex justify-between items-center relative z-10">
<span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border bg-emerald-800 text-emerald-100 border-emerald-700">New Cohort</span>
<span className="text-xs font-medium text-emerald-200">Feb 1 Start</span>
</div>
<h3 className="font-serif text-2xl mb-2 relative z-10 text-white">Group Circle</h3>
<div className="flex items-baseline gap-1 mb-4 relative z-10">
<span className="text-4xl font-semibold text-white">$120</span>
<span className="text-sm text-emerald-300">/ month</span>
</div>

<div className="relative z-10 mb-6 p-4 rounded-lg border bg-emerald-900/50 border-emerald-800">
<p className="text-[10px] font-bold uppercase tracking-wide mb-2 text-emerald-300">Entry Requirements:</p>
<ul className="space-y-1.5 text-xs text-emerald-100">
<li className="flex items-start gap-2">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Knows basic alphabets pronunciation
                            </li>
<li className="flex items-start gap-2">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                1 hour/week commitment
                            </li>
</ul>
</div>
<ul className="space-y-3 mb-8 text-sm relative z-10 text-sand-100">
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            2 Months Course
                        </li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            8 Sessions per month
                        </li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Weekly feedback
                        </li>
</ul>
<a className="block w-full py-3 text-center rounded-lg font-bold transition-colors relative z-10 bg-white text-emerald-950 hover:bg-sand-100" href="#join-form">Join Cohort</a>
</div>

<div className="group relative p-8 rounded-2xl border transition-all hover:shadow-lg h-full bg-white border-sand-200 hover:border-sand-300">
<div className="mb-4">
<span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-sand-100 text-sand-700">Standard</span>
</div>
<h3 className="font-serif text-2xl mb-2 text-emerald-950">Flexible Group</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-emerald-950">$60</span>
<span className="text-sand-500 text-sm">/ month</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-sand-700">
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            8 Sessions per month
                        </li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Max 5 students
                        </li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Access to recordings
                        </li>
</ul>
<a className="block w-full py-3 text-center border rounded-lg font-medium transition-colors border-sand-200 text-emerald-950 hover:bg-sand-50" href="#join-form">Secure Your Spot</a>
</div>

<div className="group relative p-8 rounded-2xl border transition-all hover:shadow-lg h-full bg-white border-sand-200 hover:border-sand-300">
<div className="mb-4">
<span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-sand-100 text-sand-700">Premium</span>
</div>
<h3 className="font-serif text-2xl mb-2 text-emerald-950">1-on-1 Focus</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-emerald-950">$120</span>
<span className="text-sand-500 text-sm">/ month</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-sand-700">
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            4 Private Sessions
                        </li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Flexible scheduling
                        </li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Direct WhatsApp support
                        </li>
</ul>
<a className="block w-full py-3 text-center border rounded-lg font-medium transition-colors border-sand-200 text-emerald-950 hover:bg-sand-50" href="#join-form">Apply Now</a>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-sand-100 bg-sand-50/50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
<div className="group">
<div className="w-12 h-12 border shadow-sm rounded-lg flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform duration-300 bg-white border-sand-100 text-emerald-900">
<svg aria-hidden="true" data-icon="lucide:mic" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></g></svg>
</div>
<h3 className="font-serif text-xl mb-2 text-emerald-950">Talaqqi Method</h3>
<p className="text-sm leading-relaxed text-sand-600">Direct recitation and correction method. I listen to every letter you pronounce and correct it instantly.</p>
</div>
<div className="group">
<div className="w-12 h-12 border shadow-sm rounded-lg flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform duration-300 bg-white border-sand-100 text-emerald-900">
<svg aria-hidden="true" data-icon="lucide:users" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="font-serif text-xl mb-2 text-emerald-950">Small Sisters Cohorts</h3>
<p className="text-sm leading-relaxed text-sand-600">Classes are capped to ensure everyone gets sufficient reading time. A safe, judgment-free space.</p>
</div>
<div className="group">
<div className="w-12 h-12 border shadow-sm rounded-lg flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform duration-300 bg-white border-sand-100 text-emerald-900">
<svg aria-hidden="true" data-icon="lucide:heart-handshake" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-xl mb-2 text-emerald-950">Flexible Pace</h3>
<p className="text-sm leading-relaxed text-sand-600">We progress at a pace that honors the sanctity of the text and your comfort level.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-white" id="curriculum">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="font-serif text-3xl md:text-4xl mb-4 text-emerald-950">Syllabus Structure</h2>
<p className="max-w-md text-sand-600">Comprehensive levels designed to take you from basics to fluency.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-xl border transition-all relative overflow-hidden group bg-sand-50 border-sand-100 hover:border-sand-300">
<div className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 bg-sand-200"></div>
<div className="relative z-10">
<span className="text-[10px] font-bold tracking-widest uppercase mb-3 block text-emerald-800">Level 01</span>
<h3 className="font-serif text-2xl mb-4 text-emerald-950">The Foundation</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-sand-700"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>Arabic Alphabet</li>
<li className="flex items-center gap-3 text-sm text-sand-700"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>Harakat (Vowels)</li>
<li className="flex items-center gap-3 text-sm text-sand-700"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>Connecting Letters</li>
</ul>
</div>
</div>

<div className="p-8 rounded-xl border shadow-lg relative overflow-hidden group bg-emerald-900 border-emerald-800 text-white">
<div className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 bg-emerald-800"></div>
<div className="relative z-10">
<span className="text-[10px] font-bold tracking-widest uppercase mb-3 block text-emerald-300">Level 02</span>
<h3 className="font-serif text-2xl mb-4 text-white">Tajweed Rules</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-emerald-100"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Noon Saakin &amp; Tanween</li>
<li className="flex items-center gap-3 text-sm text-emerald-100"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Madd (Elongation)</li>
<li className="flex items-center gap-3 text-sm text-emerald-100"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Heavy vs Light Letters</li>
</ul>
</div>
</div>

<div className="p-8 rounded-xl border transition-all relative overflow-hidden group bg-sand-50 border-sand-100 hover:border-sand-300">
<div className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 bg-sand-200"></div>
<div className="relative z-10">
<span className="text-[10px] font-bold tracking-widest uppercase mb-3 block text-emerald-800">Level 03</span>
<h3 className="font-serif text-2xl mb-4 text-emerald-950">Fluency &amp; Hifz</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-sand-700"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>Advanced Sifaat</li>
<li className="flex items-center gap-3 text-sm text-sand-700"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>Juz Amma correction</li>
<li className="flex items-center gap-3 text-sm text-sand-700"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>Flow and Breath</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-sand-50 border-sand-200" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="relative group">
<div className="w-56 h-72 rounded-2xl overflow-hidden relative bg-sand-200">

<div className="absolute inset-0 flex items-center justify-center bg-emerald-900">
<span className="font-serif text-6xl italic text-sand-200/20">M</span>
</div>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center border bg-white border-sand-100">
<span className="block text-2xl font-serif text-emerald-900">5+</span>
<span className="text-[10px] text-sand-500 uppercase tracking-wide font-semibold mt-1">Years Teaching</span>
</div>
</div>
<div className="flex-1">
<span className="font-bold text-xs tracking-widest uppercase mb-2 block text-emerald-600">Your Instructor</span>
<h2 className="font-serif text-4xl mb-6 text-emerald-950">Meet Sister Mariam</h2>
<p className="leading-relaxed mb-6 text-lg font-light text-sand-700">
                        "Learning the Quran is a journey of the heart. With over 5 years of experience teaching sisters from diverse backgrounds, my goal is to make Tajweed accessible, logical, and beautiful."
                    </p>
<div className="flex flex-wrap gap-4">
<span className="px-4 py-2 border rounded-full text-xs font-medium bg-white border-sand-200 text-emerald-900">Ijaza Certified</span>
<span className="px-4 py-2 border rounded-full text-xs font-medium bg-white border-sand-200 text-emerald-900">Bi-lingual (En/Ar)</span>
<span className="px-4 py-2 border rounded-full text-xs font-medium bg-white border-sand-200 text-emerald-900">Patient Approach</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-white" id="reviews">
<div className="max-w-6xl mx-auto px-6 mb-12 text-center">
<h2 className="font-serif text-3xl text-emerald-950">Kind Words from Students</h2>
</div>
<div className="relative w-full overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r to-transparent z-10 from-white"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l to-transparent z-10 from-white"></div>
<div className="flex gap-6 w-max animate-scroll group-hover:[animation-play-state:paused]">

<div className="w-96 p-8 rounded-2xl border flex-shrink-0 bg-sand-50 border-sand-100">
<div className="flex text-emerald-500 mb-4 h-4 w-4 gap-1">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm italic mb-6 leading-relaxed text-sand-800">"I never thought I could fix my pronunciation of 'Ayn' and 'Ha', but Sister Mariam's patience is unmatched."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-emerald-100 text-emerald-900">F</div>
<span className="text-xs font-bold uppercase tracking-wide text-emerald-950">Fatima R.</span>
</div>
</div>
<div className="w-96 p-8 rounded-2xl border flex-shrink-0 bg-sand-50 border-sand-100">
<div className="flex text-emerald-500 mb-4 h-4 w-4 gap-1">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm italic mb-6 leading-relaxed text-sand-800">"The group setting is so motivating. It's not just a class, it's a sisterhood united by the Quran."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-emerald-100 text-emerald-900">S</div>
<span className="text-xs font-bold uppercase tracking-wide text-emerald-950">Sarah K.</span>
</div>
</div>
<div className="w-96 p-8 rounded-2xl border flex-shrink-0 bg-sand-50 border-sand-100">
<div className="flex text-emerald-500 mb-4 h-4 w-4 gap-1">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm italic mb-6 leading-relaxed text-sand-800">"Professional, organized, and spiritually uplifting. Highly recommended for beginners."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-emerald-100 text-emerald-900">A</div>
<span className="text-xs font-bold uppercase tracking-wide text-emerald-950">Ayesha M.</span>
</div>
</div>

<div className="w-96 p-8 rounded-2xl border flex-shrink-0 bg-sand-50 border-sand-100">
<div className="flex text-emerald-500 mb-4 h-4 w-4 gap-1">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg><svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm italic mb-6 leading-relaxed text-sand-800">"Sister Mariam explains the rules so clearly. I finally understand the elongation rules!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-emerald-100 text-emerald-900">Z</div>
<span className="text-xs font-bold uppercase tracking-wide text-emerald-950">Zainab H.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-sand-50 border-sand-200" id="join-form">
<div className="max-w-2xl mx-auto px-6">
<div className="text-center mb-10">
<svg aria-hidden="true" data-icon="lucide:calendar-clock" data-strokeWidth="1" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"></path><circle cx="16" cy="16" r="6"></circle></g></svg>
<h2 className="font-serif text-3xl mb-2 text-emerald-950">Secure Your Spot</h2>
<p className="text-sm text-sand-600">Fill out the form below. We will contact you via WhatsApp to finalize the schedule.</p>
</div>
<form className="p-8 md:p-10 rounded-2xl border shadow-sm space-y-6 bg-white border-sand-200">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-sand-500 tracking-wider ml-1">First Name</label>
<input className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-emerald-900 focus:border-emerald-900 transition-all placeholder:text-sand-300 text-sm border-sand-200 bg-sand-50" placeholder="Aisha" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-sand-500 tracking-wider ml-1">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-emerald-900 focus:border-emerald-900 transition-all placeholder:text-sand-300 text-sm border-sand-200 bg-sand-50" placeholder="Khan" type="text"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-sand-500 tracking-wider ml-1">Email</label>
<input className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-emerald-900 focus:border-emerald-900 transition-all placeholder:text-sand-300 text-sm border-sand-200 bg-sand-50" placeholder="you@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-sand-500 tracking-wider ml-1">WhatsApp Number</label>
<input className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-emerald-900 focus:border-emerald-900 transition-all placeholder:text-sand-300 text-sm border-sand-200 bg-sand-50" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-sand-500 tracking-wider ml-1">Country</label>
<input className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-emerald-900 focus:border-emerald-900 transition-all placeholder:text-sand-300 text-sm border-sand-200 bg-sand-50" placeholder="United Kingdom" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-sand-500 tracking-wider ml-1">Age</label>
<input className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-emerald-900 focus:border-emerald-900 transition-all placeholder:text-sand-300 text-sm border-sand-200 bg-sand-50" placeholder="25" type="number"/>
</div>
</div>

<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-sand-500 tracking-wider ml-1">Interested Plan</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg border appearance-none focus:outline-none focus:ring-1 focus:ring-emerald-900 focus:border-emerald-900 text-sm cursor-pointer border-sand-200 bg-sand-50 text-sand-700">
<option disabled="" selected="" value="">Select a plan...</option>
<option>Group Circle - Feb 1 Cohort ($120/mo)</option>
<option>Flexible Group ($60/mo)</option>
<option>Discovery Session ($15)</option>
<option>1-on-1 Focus ($120/mo)</option>
</select>
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="pt-4">
<button className="w-full py-3.5 rounded-lg font-medium transition-all shadow-lg flex justify-center items-center gap-2 bg-emerald-950 text-sand-50 hover:bg-emerald-900 shadow-emerald-900/10" type="button">
                        Submit Request
                        <svg aria-hidden="true" data-icon="lucide:arrow-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-sand-400">
<svg aria-hidden="true" data-icon="lucide:lock" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
                        Secure Registration
                    </div>
</div>
</form>
</div>
</section>

<footer className="pt-16 pb-8 border-t bg-white border-sand-200">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
<div className="text-center md:text-left">
<a className="font-serif text-lg font-medium tracking-tight flex items-center justify-center md:justify-start gap-2 mb-4 text-emerald-950" href="#">
<svg aria-hidden="true" data-icon="lucide:flower-2" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12m0 0c4.2 0 7-1.667 7-5c-4.2 0-7 1.667-7 5m0 0c-4.2 0-7-1.667-7-5c4.2 0 7 1.667 7 5"></path></g></svg>
                        LearnTajweedWithMariam
                    </a>
<p className="text-sand-500 text-sm max-w-xs">Connecting hearts to the Quran through excellence in recitation.</p>
</div>
<div className="flex gap-8 text-sm font-medium text-sand-600">
<a className="transition-colors hover:text-emerald-900" href="#">Instagram</a>
<a className="transition-colors hover:text-emerald-900" href="#">WhatsApp</a>
<a className="transition-colors hover:text-emerald-900" href="#">Contact</a>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-sand-100 text-sand-400">
<p>© 2024 LearnTajweedWithMariam. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-sand-600" href="#">Privacy Policy</a>
<a className="hover:text-sand-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
