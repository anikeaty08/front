import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  lucide.createIcons();

  const weekBtn = document.getElementById('weekBtn');
  const monthBtn = document.getElementById('monthBtn');
  const weekBars = document.getElementById('weekBars');
  const monthBars = document.getElementById('monthBars');

  weekBtn.addEventListener('click', () => {
    weekBars.classList.remove('hidden');
    monthBars.classList.add('hidden');
    weekBtn.classList.add('bg-white', 'text-emerald-700');
    monthBtn.classList.remove('bg-white', 'text-emerald-700');
  });
  
  monthBtn.addEventListener('click', () => {
    monthBars.classList.remove('hidden');
    weekBars.classList.add('hidden');
    monthBtn.classList.add('bg-white', 'text-emerald-700');
    weekBtn.classList.remove('bg-white', 'text-emerald-700');
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-[1200px] space-y-10">

<section className="bg-white rounded-3xl shadow px-10 pt-10 pb-6">
<div className="flex flex-wrap items-start justify-between mb-8">
<div className="">
<h2 className="text-2xl font-semibold text-neutral-900 mb-2">
          Upcoming Expert-Led Sessions
        </h2>
<p className="text-sm text-neutral-600 max-w-md">
          Connect with industry professionals and accelerate your learning journey through personalized mentorship and live interactive workshops.
        </p>
</div>
<div className="flex gap-14 mt-6 sm:mt-0">
<div className="flex flex-col items-center">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-users w-4 h-4 text-cyan-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-3xl font-semibold">31.2k+</span>
</div>
<span className="text-xs uppercase tracking-wide text-neutral-500 text-center">Active learners<br/>this month</span>
</div>
<div className="w-px bg-neutral-200"></div>
<div className="flex flex-col items-center">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-trending-up w-4 h-4 text-emerald-600" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-3xl font-semibold">96%</span>
</div>
<span className="text-xs uppercase tracking-wide text-neutral-500 text-center">Session completion<br/>rate</span>
</div>
<div className="w-px bg-neutral-200"></div>
<div className="flex flex-col items-center">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-star w-4 h-4 text-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-3xl font-semibold">4.8</span>
</div>
<span className="text-xs uppercase tracking-wide text-neutral-500 text-center">Average expert<br/>rating</span>
</div>
</div>
</div>

<div className="flex items-center justify-between rounded-full bg-neutral-50 px-6 py-2 mb-4 text-xs font-medium text-neutral-600 uppercase tracking-wide">
<div className="w-[220px]">Expert &amp; Role</div>
<div className="w-[160px]">Subject Area</div>
<div className="w-[120px]">Difficulty</div>
<div className="w-[100px]">Date</div>
<div className="w-[110px]">Duration</div>
<div className="w-[80px]">Spots Left</div>
<div className="w-[40px]">Actions</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100 px-6 py-4 hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 w-[220px]">
<div className="relative">
<img alt="" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" src="https://randomuser.me/api/portraits/women/72.jpg"/>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></div>
</div>
<div className="">
<p className="font-semibold text-sm">Dr. Maya Rodriguez</p>
<p className="text-xs text-neutral-600">Machine Learning Engineer</p>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-award w-3 h-3 text-violet-500" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-xs text-neutral-500">Tesla AI, 6 years exp.</span>
</div>
</div>
</div>
<div className="w-[160px]">
<p className="text-sm font-medium">Computer Vision &amp; CNNs</p>
<p className="text-xs text-neutral-500">Real-world PyTorch projects</p>
</div>
<div className="w-[120px] flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="text-xs font-medium">Beginner</span>
</div>
<div className="w-[100px]">
<p className="text-sm font-medium">Oct 14</p>
<p className="text-xs text-neutral-500">Today</p>
</div>
<div className="w-[110px]">
<p className="text-sm font-medium">14:00-16:30</p>
<p className="text-xs text-neutral-500">2.5 hours</p>
</div>
<div className="w-[80px]">
<span className="px-2 py-1 bg-rose-100 text-rose-700 text-xs font-medium rounded-full">2 left</span>
</div>
<button className="p-2 hover:bg-white/50 rounded-full transition-colors">
<svg className="lucide lucide-calendar-plus w-4 h-4 text-violet-600" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
</button>
</div>
<div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 px-6 py-4 hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 w-[220px]">
<div className="relative">
<img alt="" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" src="https://randomuser.me/api/portraits/men/75.jpg"/>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></div>
</div>
<div>
<p className="font-semibold text-sm">Marcus Thompson</p>
<p className="text-xs text-neutral-600">Cloud Security Architect</p>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-shield-check w-3 h-3 text-teal-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs text-neutral-500">AWS Certified, 10 years</span>
</div>
</div>
</div>
<div className="w-[160px]">
<p className="text-sm font-medium">Cloud Security &amp; DevSecOps</p>
<p className="text-xs text-neutral-500">AWS &amp; Azure best practices</p>
</div>
<div className="w-[120px] flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-rose-500"></span>
<span className="text-xs font-medium">Expert</span>
</div>
<div className="w-[100px]">
<p className="text-sm font-medium">Oct 16</p>
<p className="text-xs text-neutral-500">Monday</p>
</div>
<div className="w-[110px]">
<p className="text-sm font-medium">09:30-12:00</p>
<p className="text-xs text-neutral-500">2.5 hours</p>
</div>
<div className="w-[80px]">
<span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">Available</span>
</div>
<button className="p-2 hover:bg-white/50 rounded-full transition-colors">
<svg className="lucide lucide-calendar-plus w-4 h-4 text-teal-600" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
</button>
</div>
<div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 px-6 py-4 hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 w-[220px]">
<div className="relative">
<img alt="" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" src="https://randomuser.me/api/portraits/women/78.jpg"/>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white"></div>
</div>
<div>
<p className="font-semibold text-sm">Dr. Priya Patel</p>
<p className="text-xs text-neutral-600">UX Research Director</p>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-graduation-cap w-3 h-3 text-amber-500" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<span className="text-xs text-neutral-500">Stanford PhD, Design Lead</span>
</div>
</div>
</div>
<div className="w-[160px]">
<p className="text-sm font-medium">User Research &amp; Product Design</p>
<p className="text-xs text-neutral-500">From insights to prototypes</p>
</div>
<div className="w-[120px] flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
<span className="text-xs font-medium">Intermediate</span>
</div>
<div className="w-[100px]">
<p className="text-sm font-medium">Oct 19</p>
<p className="text-xs text-neutral-500">Thursday</p>
</div>
<div className="w-[110px]">
<p className="text-sm font-medium">16:00-18:30</p>
<p className="text-xs text-neutral-500">2.5 hours</p>
</div>
<div className="w-[80px]">
<span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">Available</span>
</div>
<button className="p-2 hover:bg-white/50 rounded-full transition-colors">
<svg className="lucide lucide-calendar-plus w-4 h-4 text-amber-600" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
</button>
</div>
<div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 px-6 py-4 hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 w-[220px]">
<div className="relative">
<img alt="" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" src="https://randomuser.me/api/portraits/men/82.jpg"/>
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></div>
</div>
<div>
<p className="font-semibold text-sm">Alex Kim</p>
<p className="text-xs text-neutral-600">Senior Frontend Engineer</p>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-code w-3 h-3 text-indigo-500" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
<span className="text-xs text-neutral-500">Spotify Tech Lead, Vue.js</span>
</div>
</div>
</div>
<div className="w-[160px]">
<p className="text-sm font-medium">Advanced Vue.js &amp; Nuxt</p>
<p className="text-xs text-neutral-500">Composition API &amp; SSR</p>
</div>
<div className="w-[120px] flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="text-xs font-medium">Beginner</span>
</div>
<div className="w-[100px]">
<p className="text-sm font-medium">Oct 22</p>
<p className="text-xs text-neutral-500">Sunday</p>
</div>
<div className="w-[110px]">
<p className="text-sm font-medium">11:00-13:30</p>
<p className="text-xs text-neutral-500">2.5 hours</p>
</div>
<div className="w-[80px]">
<span className="px-2 py-1 bg-rose-100 text-rose-700 text-xs font-medium rounded-full">1 left</span>
</div>
<button className="p-2 hover:bg-white/50 rounded-full transition-colors">
<svg className="lucide lucide-calendar-plus w-4 h-4 text-indigo-600" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
</button>
</div>
</div>
<div className="mt-6 flex items-center justify-between">
<button className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
        View full calendar
      </button>
<button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-full text-sm font-medium hover:from-cyan-700 hover:to-teal-700 transition-all">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
        Request custom session
      </button>
</div>
</section>
<div className="grid lg:grid-cols-2 gap-8">

<div className="overflow-hidden relative flex items-center bg-[url(https://images.unsplash.com/photo-1633269540827-728aabbb7646?w=2160&amp;q=80)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="relative z-10 max-w-[280px] text-white">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-cyan-400 grid place-content-center">
<svg className="lucide lucide-graduation-cap w-6 h-6 text-slate-900" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<div>
<span className="text-xl font-bold">Aura</span>
<p className="text-xs text-slate-300">Professional Learning Platform</p>
</div>
</div>
<h3 className="text-3xl font-bold leading-tight mb-4">Master new skills.<br/>Advance your career.</h3>
<p className="text-sm text-slate-300 mb-6">Join thousands of professionals learning from industry experts through our mobile app.</p>
<div className="space-y-3">
<a className="flex items-center gap-3 text-sm font-medium hover:text-cyan-400 transition-colors" href="#">
<svg className="lucide lucide-smartphone w-5 h-5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<div>
<div>Download for iOS &amp; Android</div>
<div className="text-xs text-slate-400">Available on all platforms</div>
</div>
</a>
<a className="flex items-center gap-3 text-sm font-medium hover:text-cyan-400 transition-colors" href="#">
<svg className="lucide lucide-globe w-5 h-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<div>
<div>Visit aurachat.io</div>
<div className="text-xs text-slate-400">Web version available</div>
</div>
</a>
</div>
</div>
</div>

<div className="bg-[url(https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=2160&amp;q=80)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8 space-y-14">
<div className="flex items-center justify-between mb-6">
<div className="">
<h3 className="text-xl font-bold text-white">Learning Analytics</h3>
<p className="text-sm text-emerald-100">Track your educational progress and achievements</p>
</div>
<div className="inline-flex bg-white/20 rounded-full p-1 text-xs">
<button className="px-4 py-2 rounded-full bg-white text-emerald-700 font-medium transition-all" id="weekBtn">Week</button>
<button className="px-4 py-2 rounded-full text-white hover:text-emerald-100 transition-all" id="monthBtn">Month</button>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="text-center">
<div className="text-2xl font-bold text-white">52</div>
<div className="text-xs text-emerald-100">Hours this week</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-white">15</div>
<div className="text-xs text-emerald-100">Sessions completed</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-white">92%</div>
<div className="text-xs text-emerald-100">Goal achievement</div>
</div>
</div>
<div className="grid grid-cols-7 gap-3 items-end text-center" id="weekBars">
<div className="flex flex-col items-center gap-2">
<div className="h-32 w-6 bg-white/20 rounded-full overflow-hidden flex flex-col justify-end">
<div className="bg-white rounded-full" style={{height: '75%'}}></div>
</div>
<span className="text-white text-xs font-medium">Mon</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-32 w-6 bg-white/20 rounded-full overflow-hidden flex flex-col justify-end">
<div className="bg-white rounded-full" style={{height: '45%'}}></div>
</div>
<span className="text-white text-xs font-medium">Tue</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-32 w-6 bg-white/20 rounded-full overflow-hidden flex flex-col justify-end">
<div className="bg-white rounded-full" style={{height: '90%'}}></div>
</div>
<span className="text-white text-xs font-medium">Wed</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-32 w-6 bg-white/20 rounded-full overflow-hidden flex flex-col justify-end">
<div className="bg-white rounded-full" style={{height: '60%'}}></div>
</div>
<span className="text-white text-xs font-medium">Thu</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-32 w-6 bg-white/20 rounded-full overflow-hidden flex flex-col justify-end">
<div className="bg-white rounded-full" style={{height: '85%'}}></div>
</div>
<span className="text-white text-xs font-medium">Fri</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-32 w-6 bg-white/20 rounded-full overflow-hidden flex flex-col justify-end">
<div className="bg-white rounded-full" style={{height: '35%'}}></div>
</div>
<span className="text-white text-xs font-medium">Sat</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-32 w-6 bg-white/20 rounded-full overflow-hidden flex flex-col justify-end">
<div className="bg-white rounded-full" style={{height: '50%'}}></div>
</div>
<span className="text-white text-xs font-medium">Sun</span>
</div>
</div>
<div className="hidden grid grid-cols-4 gap-4 items-end text-center" id="monthBars">
<div className="flex flex-col items-center gap-2">
<div className="h-32 w-8 bg-white/20 rounded-full overflow-hidden flex flex-col justify-end">
<div className="bg-white rounded-full" style={{height: '88%'}}></div>
</div>
<span className="text-white text-xs font-medium">Week 1</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-32 w-8 bg-white/20 rounded-full overflow-hidden flex flex-col justify-end">
<div className="bg-white rounded-full" style={{height: '72%'}}></div>
</div>
<span className="text-white text-xs font-medium">Week 2</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-32 w-8 bg-white/20 rounded-full overflow-hidden flex flex-col justify-end">
<div className="bg-white rounded-full" style={{height: '95%'}}></div>
</div>
<span className="text-white text-xs font-medium">Week 3</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-32 w-8 bg-white/20 rounded-full overflow-hidden flex flex-col justify-end">
<div className="bg-white rounded-full" style={{height: '82%'}}></div>
</div>
<span className="text-white text-xs font-medium">Week 4</span>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
