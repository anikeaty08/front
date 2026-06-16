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
serif: ['Cormorant Garamond', 'serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
800: '#292524',
900: '#1c1917',
},
sage: {
50: '#f4f7f5',
100: '#e3ebe5',
200: '#c5d8cb',
300: '#9cbba6',
500: '#5c8b6b',
600: '#467056',
900: '#1a2e22',
},
olive: {
50: '#fcfdfa',
500: '#6b705c',
600: '#585c4b',
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
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-200/60 bg-white/90 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="hover:opacity-80 transition-opacity" href="#">
<img alt="Core Wellness Solutions" className="h-10 w-auto mix-blend-multiply" src="https://img1.wsimg.com/isteam/ip/f6184fae-36e6-4e5b-ac99-17ce977f2708/CWS%20word%20logo2.jpeg/:/rs=h:139,cg:true,m/qt=q:100/ll"/>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-sage-600 transition-colors" href="#nutrition">Nutrition</a>
<a className="hover:text-sage-600 transition-colors" href="#counselling">Counselling</a>
<a className="hover:text-sage-600 transition-colors" href="#team">Team</a>
<a className="hover:text-sage-600 transition-colors" href="#workshops">Workshops</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
                    Login
                </button>
<button className="bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-stone-800 transition-all transform hover:scale-[1.02] shadow-lg shadow-stone-200">
                    GET STARTED
                </button>
</div>
</div>
</nav>

<header className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-50 border border-sage-100 text-sage-900 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500"></span>
</span>
                    Now accepting new clients
                </div>
<h1 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight text-stone-900 font-medium">
                    Let us <br/> <span className="italic text-sage-600">assist you.</span>
</h1>
<p className="text-stone-600 text-lg md:text-xl leading-relaxed max-w-md font-light">
                    Clinical counselling and nutritional therapy designed to foster connection, authenticity, and physical vitality.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="flex items-center justify-center gap-2 bg-stone-900 text-stone-50 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-xl shadow-stone-200/50">
                        Book Appointment
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-stone-600 border border-stone-200 hover:bg-stone-100 hover:border-stone-300 transition-all bg-white">
                        Learn More
                    </button>
</div>
<div className="pt-8 flex items-center gap-6 text-stone-500 text-xs font-medium uppercase tracking-wider">
<div className="flex items-center gap-2">
<iconify-icon className="text-sage-500" icon="lucide:check-circle" width="16"></iconify-icon>
<span>Certified Experts</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-sage-500" icon="lucide:heart-handshake" width="16"></iconify-icon>
<span>Collaborative Care</span>
</div>
</div>
</div>
<div className="relative h-[550px] w-full hidden md:block">

<div className="absolute top-0 right-0 w-4/5 h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200 animate-float bg-stone-200">
<img alt="Core Wellness Solutions Lifestyle" className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700" src="https://storage.googleapis.com/msgsndr/jTEwJr74sYgYjDD8TFiN/media/6945b6d08cae8f9f60f97300.png"/>
</div>

<div className="absolute bottom-16 left-0 w-72 p-6 bg-white/95 backdrop-blur-sm border border-stone-100 rounded-2xl shadow-xl z-20">
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-xs font-medium text-stone-400 uppercase">Wellness Index</span>
<span className="text-sage-600 text-xs font-bold">+32%</span>
</div>

<div className="flex items-end gap-1 h-16 w-full pb-2 border-b border-stone-100">
<div className="w-1/6 bg-sage-100 h-1/4 rounded-t-sm"></div>
<div className="w-1/6 bg-sage-200 h-1/3 rounded-t-sm"></div>
<div className="w-1/6 bg-sage-200 h-1/2 rounded-t-sm"></div>
<div className="w-1/6 bg-sage-300 h-3/4 rounded-t-sm"></div>
<div className="w-1/6 bg-sage-400 h-5/6 rounded-t-sm"></div>
<div className="w-1/6 bg-sage-500 h-full rounded-t-sm"></div>
</div>
<p className="text-xs text-stone-500">Average improvement after 3 months.</p>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-gradient-to-br from-sage-100/40 via-orange-50/30 to-transparent rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4"></div>
</header>

<section className="border-y border-stone-100 bg-white py-12">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-8">Supporting the health of teams at</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100 duration-500">
<span className="font-sans text-xl font-bold tracking-tight">Acme<span className="font-normal text-stone-400">Health</span></span>
<span className="font-serif text-2xl font-bold italic">Lumina</span>
<span className="font-sans text-xl font-bold">VERTEX</span>
<span className="font-mono text-lg font-medium">WholeFoods.</span>
<span className="font-serif text-2xl font-medium">Oasis</span>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="team">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-4xl text-stone-900 mb-4 font-medium tracking-tight">Meet your wellness partners.</h2>
<p className="text-stone-600 font-light">Real experts guiding you through nutrition, mental health, and lifestyle design.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="bg-white p-2 rounded-3xl shadow-sm border border-stone-100 group hover:shadow-xl transition-all duration-500 flex flex-col h-full">
<div className="relative overflow-hidden rounded-[1.25rem] aspect-[4/3] mb-6">
<img alt="Joanne Mulhall" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" src="https://img1.wsimg.com/isteam/ip/f6184fae-36e6-4e5b-ac99-17ce977f2708/292dfe5353a3f5e60ddfdfa711ff5b92.jpg/:/cr=t:0.29%25,l:0%25,w:100%25,h:66.8%25/rs=w:365,h:365,cg:true"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-stone-900 shadow-sm">
                            Certified Nutritionist
                        </div>
</div>
<div className="px-6 pb-6 text-center flex-grow flex flex-col">
<h3 className="font-serif text-3xl text-stone-900 mb-1">Joanne Mulhall</h3>
<p className="text-xs font-medium text-sage-600 uppercase tracking-widest mb-6">NNCP, CCIr</p>
<div className="space-y-4 mb-8">
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-1">Nutritional &amp; Lifestyle Assessment</h4>
<p className="text-stone-500 text-sm font-light leading-relaxed">
                                    Specializing in Women in transition to their Elder and Wise Woman selves <span className="italic text-stone-400">(Perimenopause &amp; Menopause)</span>.
                                </p>
</div>
<p className="text-stone-500 text-sm font-medium leading-relaxed">
                                Customized plans for correcting core imbalances and deficiencies.
                            </p>
</div>

<div className="bg-stone-50 rounded-xl p-5 border border-stone-100 mb-6 text-left">
<span className="text-[10px] font-bold uppercase tracking-widest text-sage-700 block mb-3 border-b border-stone-200 pb-2">Tools We Use</span>
<ul className="space-y-2.5">
<li className="flex items-start gap-2.5">
<iconify-icon className="text-sage-500 mt-0.5 shrink-0" icon="lucide:scissors" width="14"></iconify-icon>
<span className="text-xs text-stone-600 leading-tight">Hair Analysis <span className="text-stone-400">(In-person &amp; Mail-in Kit)</span></span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-sage-500 mt-0.5 shrink-0" icon="lucide:eye" width="14"></iconify-icon>
<span className="text-xs text-stone-600 leading-tight">Eye Analysis</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-sage-500 mt-0.5 shrink-0" icon="lucide:apple" width="14"></iconify-icon>
<span className="text-xs text-stone-600 leading-tight">Food Sensitivity Testing</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-sage-500 mt-0.5 shrink-0" icon="lucide:clipboard-list" width="14"></iconify-icon>
<span className="text-xs text-stone-600 leading-tight">Detailed Client Intake &amp; Wellness Questionnaire</span>
</li>
</ul>
</div>
<div className="mt-auto pt-2">
<button className="text-xs font-semibold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 hover:border-stone-900 transition-all">Book Nutrition Consult</button>
</div>
</div>
</div>

<div className="bg-white p-2 rounded-3xl shadow-sm border border-stone-100 group hover:shadow-xl transition-all duration-500 flex flex-col h-full">
<div className="relative overflow-hidden rounded-[1.25rem] aspect-[4/3] mb-6">
<img alt="Ailee Gilron" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" src="https://img1.wsimg.com/isteam/ip/f6184fae-36e6-4e5b-ac99-17ce977f2708/Gilron_Family_Portraits_2022_125_print.jpg/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-stone-900 shadow-sm">
                            Clinical Counsellor
                        </div>
</div>
<div className="px-6 pb-6 text-center flex-grow flex flex-col">
<h3 className="font-serif text-3xl text-stone-900 mb-1">Ailee Gilron</h3>
<p className="text-xs font-medium text-sage-600 uppercase tracking-widest mb-4">M.ACP, RCC</p>
<p className="text-stone-600 text-sm leading-relaxed mb-4">
                            Ailee collaborates with clients to build on their strengths, using humour to foster connections. Her core values: honesty, authenticity and accountability, guide her approach.
                        </p>

<div className="flex flex-wrap gap-2 justify-center mb-6">
<span className="px-2 py-1 bg-stone-100 text-stone-600 text-[10px] uppercase tracking-wide font-medium rounded-md">Anxiety</span>
<span className="px-2 py-1 bg-stone-100 text-stone-600 text-[10px] uppercase tracking-wide font-medium rounded-md">Depression</span>
<span className="px-2 py-1 bg-stone-100 text-stone-600 text-[10px] uppercase tracking-wide font-medium rounded-md">Anger Mgmt</span>
<span className="px-2 py-1 bg-stone-100 text-stone-600 text-[10px] uppercase tracking-wide font-medium rounded-md">Communication</span>
<span className="px-2 py-1 bg-stone-100 text-stone-600 text-[10px] uppercase tracking-wide font-medium rounded-md">Emotional Reg</span>
<span className="px-2 py-1 bg-stone-100 text-stone-600 text-[10px] uppercase tracking-wide font-medium rounded-md">Codependency</span>
</div>
<div className="mt-auto pt-2">
<button className="text-xs font-semibold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 hover:border-stone-900 transition-all">Book Counselling</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="solutions">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 font-medium tracking-tight">Holistic Integration.</h2>
<p className="text-stone-600 leading-relaxed font-light">We combine nutritional science with clinical counselling to create a complete system for health longevity.</p>
</div>
<a className="text-sm font-medium text-stone-900 border-b border-stone-300 pb-0.5 hover:border-stone-900 transition-colors" href="#">View service menu</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/40 transition-all duration-300">
<div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-sage-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="lucide:utensils" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-2xl mb-3 text-stone-900">Clinical Nutrition</h3>
<p className="text-sm text-stone-500 leading-relaxed">Personalized meal planning based on bloodwork and metabolic type to support focus and longevity.</p>
</div>

<div className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/40 transition-all duration-300">
<div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-stone-900 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="lucide:messages-square" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-2xl mb-3 text-stone-900">Psychotherapy</h3>
<p className="text-sm text-stone-500 leading-relaxed">Evidence-based counselling for anxiety, depression, and emotional regulation in a safe environment.</p>
</div>

<div className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/40 transition-all duration-300">
<div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-stone-900 mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="lucide:heart-pulse" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-2xl mb-3 text-stone-900">Metabolic Health</h3>
<p className="text-sm text-stone-500 leading-relaxed">Strategies to manage stress hormones and insulin sensitivity, crucial for maintaining health.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 overflow-hidden" id="methodology">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative order-2 md:order-1">
<div className="absolute inset-0 bg-sage-200/50 rounded-full blur-3xl scale-75"></div>
<img alt="Healthy Meal Prep" className="relative z-10 rounded-[2rem] w-full shadow-2xl shadow-stone-200 object-cover aspect-[4/5]" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 w-72 hidden lg:block">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-stone-400">Daily Wellness Check</span>
<iconify-icon className="text-sage-500" icon="lucide:leaf" width="16"></iconify-icon>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-1">
<label className="text-xs font-medium text-stone-600">Emotional Balance</label>
<span className="text-xs text-stone-400">Good</span>
</div>
<input className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value="75"/>
</div>
<div>
<div className="flex justify-between mb-1">
<label className="text-xs font-medium text-stone-600">Whole Foods %</label>
<span className="text-xs text-stone-400">80%</span>
</div>
<input className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value="80"/>
</div>
</div>
<div className="mt-4 pt-4 border-t border-stone-50">
<p className="text-xs text-sage-600 font-medium">Status: Optimal Fueling</p>
</div>
</div>
</div>
<div className="order-1 md:order-2 space-y-8">
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 font-medium tracking-tight">Eat well, feel well, <br/><span className="text-sage-600 italic">live better.</span></h2>
<p className="text-stone-600 text-lg font-light leading-relaxed">
                        Wellness isn't just about weight—it's about cognitive and emotional performance. We analyze your dietary habits and emotional landscape to build a routine that supports your life.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 text-sage-600">
<iconify-icon icon="lucide:check-circle-2" width="18"></iconify-icon>
</div>
<div>
<span className="block text-stone-900 text-sm font-medium">Dietary Analysis</span>
<span className="text-stone-500 text-xs">Macronutrient balancing for sustained energy levels.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-sage-600">
<iconify-icon icon="lucide:check-circle-2" width="18"></iconify-icon>
</div>
<div>
<span className="block text-stone-900 text-sm font-medium">Clinical Counselling</span>
<span className="text-stone-500 text-xs">Professional support for anxiety, anger, and relationships.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-sage-600">
<iconify-icon icon="lucide:check-circle-2" width="18"></iconify-icon>
</div>
<div>
<span className="block text-stone-900 text-sm font-medium">Lifestyle Coaching</span>
<span className="text-stone-500 text-xs">Sleep and stress management protocols.</span>
</div>
</li>
</ul>
<div className="pt-4">
<button className="text-stone-900 font-medium text-sm flex items-center gap-2 group border-b border-transparent hover:border-stone-900 transition-all pb-0.5">
                            Learn about our methodology
                            <span className="group-hover:translate-x-1 transition-transform">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="consulting">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 space-y-4">
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 font-medium tracking-tight">Invest in your vitality.</h2>
<p className="text-stone-600">Flexible engagement models for individuals and corporate teams.</p>

<div className="flex items-center justify-center gap-4 pt-4">
<span className="text-sm font-medium text-stone-500">Individual</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sage-600"></div>
</label>
<span className="text-sm font-medium text-stone-900">Corporate <span className="text-sage-600 text-xs ml-1 font-normal">(Teams)</span></span>
</div>
</div>
<div className="bg-stone-50 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden flex flex-col md:flex-row">
<div className="p-10 md:w-2/3 space-y-8">
<div>
<h3 className="font-serif text-3xl text-stone-900">Total Wellness Audit</h3>
<p className="text-stone-500 mt-2 text-sm">A comprehensive starting point combining nutrition intake analysis and emotional assessment.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded-full bg-white border border-stone-200 text-sage-700 flex items-center justify-center">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-stone-700">60-min Nutrition Consult</span>
</div>
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded-full bg-white border border-stone-200 text-sage-700 flex items-center justify-center">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-stone-700">60-min Counselling Session</span>
</div>
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded-full bg-white border border-stone-200 text-sage-700 flex items-center justify-center">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-stone-700">Custom Action Plan</span>
</div>
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded-full bg-white border border-stone-200 text-sage-700 flex items-center justify-center">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-stone-700">14-day Support</span>
</div>
</div>
</div>
<div className="bg-stone-900 p-10 md:w-1/3 flex flex-col justify-center items-center text-center space-y-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-stone-800 to-stone-900"></div>

<div className="absolute -top-10 -right-10 w-40 h-40 bg-sage-500/20 blur-3xl rounded-full"></div>
<div className="relative z-10">
<p className="text-stone-400 text-sm uppercase tracking-wide">Introductory Package</p>
<div className="flex items-baseline justify-center gap-1 my-2">
<span className="text-4xl font-serif text-white">$299</span>
</div>
<button className="w-full mt-4 bg-white text-stone-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-stone-100 transition-colors shadow-lg">
                            Book Assessment
                        </button>
<p className="text-[10px] text-stone-500 mt-4">HSA/FSA eligible in some regions.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-stone-100">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="block mb-6 hover:opacity-80" href="#">
<img alt="Core Wellness Solutions" className="h-8 w-auto mix-blend-multiply opacity-80 grayscale" src="https://img1.wsimg.com/isteam/ip/f6184fae-36e6-4e5b-ac99-17ce977f2708/CWS%20word%20logo2.jpeg/:/rs=h:139,cg:true,m/qt=q:100/ll"/>
</a>
<p className="text-stone-500 text-sm leading-relaxed">
                        Empowering you to achieve peak physical and emotional health through science-backed nutrition and clinical counselling.
                    </p>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-6 text-sm">Services</h4>
<ul className="space-y-4 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Nutrition Coaching</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Clinical Counselling</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Workshops</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Speaking</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-6 text-sm">Company</h4>
<ul className="space-y-4 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">About the Team</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-6 text-sm">Healthy Living Newsletter</h4>
<form className="space-y-4">
<div className="relative">
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:ring-1 focus:ring-sage-400 placeholder-stone-400 transition-all" placeholder="Work email address" type="email"/>
</div>
<div className="flex items-start gap-3">
<label className="relative flex items-center p-0 rounded-full cursor-pointer">
<input className="peer appearance-none w-4 h-4 border border-stone-300 rounded checked:bg-stone-900 checked:border-stone-900 transition-all" type="checkbox" />
<span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</span>
</input></label>
<span className="text-xs text-stone-500 leading-tight">Send me weekly wellness tips.</span>
</div>
<button className="text-sm font-medium text-stone-900 hover:text-sage-600 transition-colors flex items-center gap-2">
                            Subscribe
                            <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100">
<p className="text-xs text-stone-400">© 2023 Core Wellness Solutions. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
