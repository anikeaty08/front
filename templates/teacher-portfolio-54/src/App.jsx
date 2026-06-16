import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-neutral-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-neutral-900 flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center text-sm font-medium tracking-tight">EA</span>
<span>Elena Adams</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#about">Philosophy</a>
<a className="hover:text-neutral-900 transition-colors" href="#curriculum">Curriculum</a>
<a className="hover:text-neutral-900 transition-colors" href="#resources">Resources</a>
<a className="hover:text-neutral-900 transition-colors" href="#schedule">Schedule</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-all shadow-sm ring-1 ring-neutral-900/5 hover:shadow-md" href="#contact">
                    Book Consultation
                </a>
<button className="md:hidden text-neutral-500">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-6xl mx-auto">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Now accepting new students for Fall 2024
                </div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-900 mb-6 leading-[1.1]">
                    Empowering minds through <span className="text-neutral-400">structured learning</span> and creative thinking.
                </h1>
<p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-2xl font-light mb-10">
                    Hello, I'm Elena. I teach Mathematics and Physics with a focus on intuitive understanding and real-world application. Let's make complex concepts simple together.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex h-11 items-center justify-center px-6 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-all shadow-sm hover:shadow-md group" href="#curriculum">
                        Explore Curriculum
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="inline-flex h-11 items-center justify-center px-6 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-all hover:border-neutral-300 shadow-sm" href="#resources">
                        View Resources
                    </a>
</div>
</div>
</div>
</header>

<section className="border-y border-neutral-200 bg-white">
<div className="max-w-6xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-1">
<span className="text-3xl font-medium tracking-tight text-neutral-900">12+</span>
<span className="text-sm text-neutral-500 font-medium">Years Experience</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-medium tracking-tight text-neutral-900">800+</span>
<span className="text-sm text-neutral-500 font-medium">Students Mentored</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-medium tracking-tight text-neutral-900">100%</span>
<span className="text-sm text-neutral-500 font-medium">Commitment</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-medium tracking-tight text-neutral-900">Top 1%</span>
<span className="text-sm text-neutral-500 font-medium">Educator Award</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="curriculum">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-2">Core Curriculum</h2>
<p className="text-neutral-500 max-w-md text-sm leading-relaxed">Tailored educational paths designed to build confidence and mastery in STEM subjects.</p>
</div>
<a className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors" href="#">
                    View full syllabus <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all hover:shadow-lg hover:shadow-neutral-100 relative overflow-hidden">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:function-square" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Advanced Calculus</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Limits, derivatives, and integrals focused on understanding change. Preparation for university-level mathematics.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-neutral-600">
<iconify-icon className="text-indigo-600" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon> AP Calculus AB/BC
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-600">
<iconify-icon className="text-indigo-600" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon> 1-on-1 Sessions
                        </li>
</ul>
</div>

<div className="group p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all hover:shadow-lg hover:shadow-neutral-100 relative overflow-hidden">
<div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:atom" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Theoretical Physics</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Mechanics, thermodynamics, and electromagnetism. Bridging the gap between mathematical models and physical reality.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-neutral-600">
<iconify-icon className="text-emerald-600" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon> Lab Simulations
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-600">
<iconify-icon className="text-emerald-600" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon> Problem Solving Workshops
                        </li>
</ul>
</div>

<div className="group p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all hover:shadow-lg hover:shadow-neutral-100 relative overflow-hidden">
<div className="h-10 w-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Statistics &amp; Data</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Understanding data, probability, and statistical inference. Essential skills for the modern information age.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-neutral-600">
<iconify-icon className="text-amber-600" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon> Python for Data
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-600">
<iconify-icon className="text-amber-600" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon> Project Based
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-200 px-6" id="resources">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-8">Student Resources</h2>
<div className="space-y-4">

<div className="group flex items-center justify-between p-4 rounded-lg border border-neutral-100 hover:border-neutral-200 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-white group-hover:shadow-sm transition-all">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900">Calculus Formula Cheat Sheet</h4>
<p className="text-xs text-neutral-500">PDF • 2.4 MB • Updated last week</p>
</div>
</div>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors p-2">
<iconify-icon icon="lucide:download" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="group flex items-center justify-between p-4 rounded-lg border border-neutral-100 hover:border-neutral-200 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-white group-hover:shadow-sm transition-all">
<iconify-icon icon="lucide:video" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900">Understanding Quantum Mechanics</h4>
<p className="text-xs text-neutral-500">Video Lecture • 45 mins</p>
</div>
</div>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors p-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="group flex items-center justify-between p-4 rounded-lg border border-neutral-100 hover:border-neutral-200 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-white group-hover:shadow-sm transition-all">
<iconify-icon icon="lucide:book" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900">Past Exam Papers (2020-2023)</h4>
<p className="text-xs text-neutral-500">Archive • ZIP</p>
</div>
</div>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors p-2">
<iconify-icon icon="lucide:download" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-200">
<div className="max-w-4xl mx-auto text-center">
<div className="mb-8 flex justify-center text-indigo-500">
<iconify-icon icon="lucide:quote" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<p className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 leading-tight mb-8">
                "Ms. Adams has an incredible ability to make abstract concepts feel tangible. I went from dreading math to majoring in Engineering."
            </p>
<div className="flex flex-col items-center gap-1">
<span className="text-sm font-medium text-neutral-900">Sarah Jenkins</span>
<span className="text-xs text-neutral-500">Former Student, MIT Class of '23</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 text-white" id="contact">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight mb-4">Ready to accelerate your learning?</h2>
<p className="text-neutral-400 leading-relaxed mb-8">Spots for private tutoring are limited. Get in touch to discuss your educational goals and create a personalized plan.</p>
<div className="flex gap-4">
<a className="inline-flex h-11 items-center justify-center px-6 text-sm font-medium text-neutral-900 bg-white rounded-lg hover:bg-neutral-100 transition-all" href="mailto:hello@teacher.com">
                        Contact Me
                    </a>
<a className="inline-flex h-11 items-center justify-center px-6 text-sm font-medium text-white border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-all" href="#">
                        View Schedule
                    </a>
</div>
</div>

<div className="w-full md:w-auto bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700/50 backdrop-blur-sm min-w-[320px]">
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Email Address</label>
<input className="w-full h-10 px-3 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="student@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Subject of Interest</label>
<div className="relative">
<select className="w-full h-10 px-3 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none transition-all cursor-pointer">
<option>Calculus</option>
<option>Physics</option>
<option>Statistics</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<button className="w-full h-10 mt-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                        Get Started <iconify-icon icon="lucide:sparkles" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-neutral-200">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded bg-neutral-900 text-white flex items-center justify-center text-xs font-bold tracking-tight">EA</span>
<span className="text-sm font-medium text-neutral-900 tracking-tight">Elena Adams</span>
</div>
<div className="text-xs text-neutral-500">
                © 2024 Elena Adams Teaching. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
