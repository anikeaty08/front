import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Intersection Observer for scroll animations
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      observer.unobserve(entry.target); 
                  }
              });
          }, observerOptions);

          const revealElements = document.querySelectorAll('.reveal');
          revealElements.forEach(el => observer.observe(el));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen -z-10" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10 bg-neutral-50"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
</div>

<header className="fixed z-50 text-neutral-900 bg-neutral-50/80 w-full border-neutral-200/60 border-b top-0 backdrop-blur-md reveal active">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-3">

<svg className="shadow-sm rounded-lg" fill="none" height="32" viewbox="0 0 100 100" width="32" xmlns="http://www.w3.org/2000/svg">
<rect fill="#2B6CB0" height="100" rx="20" width="100"></rect>
<path d="M0 20 L60 20 L100 60 L100 100 L0 100 Z" fill="#1D4E89" fillOpacity="0.3"></path>
<path d="M0 0 L60 0 L100 40 L40 40 Z" fill="#63B3ED"></path>
<path d="M40 40 L100 40 L100 100 L40 100 Z" fill="#1D4E89"></path>
<path d="M0 0 L40 40 L40 100 L0 60 Z" fill="#ffffff"></path>
</svg>
<span className="text-xl font-bold tracking-tight text-[#1D4E89]">
            LignUp
          </span>
</div>
<nav className="hidden md:flex text-sm font-medium text-neutral-600 gap-8">
<a className="hover:text-[#2B6CB0] transition-colors" href="#">Features</a>
<a className="hover:text-[#2B6CB0] transition-colors" href="#">Pricing</a>
<a className="hover:text-[#2B6CB0] transition-colors" href="#">Resources</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-neutral-500 hover:text-[#1D4E89] hidden sm:block" href="#">
            Log in
          </a>
<a className="bg-[#2B6CB0] hover:bg-[#1D4E89] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/20 border border-transparent hover:border-blue-400" href="#">
            Sign Up
          </a>
</div>
</div>
</header>

<section className="lg:pt-48 lg:pb-24 pt-32 pb-20 relative overflow-hidden">
<div className="text-center max-w-6xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="reveal delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-600 mb-8 shadow-sm active">
<span className="flex h-2 w-2 rounded-full bg-[#2B6CB0] relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2B6CB0] opacity-75"></span>
</span>
          v2.0 is now live
        </div>
<h1 className="reveal delay-200 leading-[1.1] md:text-7xl active text-5xl font-semibold text-[#1D4E89] tracking-tight mb-6">Raise your Linkedin Authority without losing your Voice to generic AI automation.</h1>
<p className="reveal delay-300 leading-relaxed text-xl text-neutral-500 tracking-tight max-w-2xl mx-auto mb-10 active">
          Stop posting into the void. Automate engagement, optimize your profile, and analyze trends with precision—without sounding like a robot.
        </p>
<div className="reveal delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 active">
<a className="w-full sm:w-auto bg-[#2B6CB0] hover:bg-[#1D4E89] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 group ring-2 ring-offset-2 ring-transparent hover:ring-[#2B6CB0]" href="#">
            Start for free
            <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="lucide:arrow-right" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-200 px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md" href="#">
<iconify-icon height="20" icon="lucide:play-circle" width="20"></iconify-icon>
            View Demo
          </a>
</div>

<div className="reveal delay-500 relative max-w-5xl mx-auto rounded-xl bg-white border border-neutral-200/60 shadow-2xl shadow-blue-900/10 overflow-hidden ring-1 ring-slate-900/5 text-left">

<div className="h-10 bg-white border-b border-neutral-100 flex items-center px-4 gap-2 sticky top-0 z-20">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80"></div>
</div>
<div className="ml-auto flex items-center gap-2 bg-neutral-50 px-2 py-1 rounded text-[10px] text-neutral-400 font-medium">
<iconify-icon icon="lucide:lock" width="10"></iconify-icon>
               app.lignup.io
            </div>
</div>

<div className="flex h-[550px] bg-neutral-50/30">

<aside className="w-64 bg-white border-r border-neutral-200 hidden md:flex flex-col">
<div className="p-4">
<div className="text-xs font-semibold text-neutral-400 mb-4 px-2 tracking-wider">PLATFORM</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-[#1D4E89] bg-blue-50 rounded-md" href="#">
<iconify-icon icon="lucide:layout-dashboard" width="18"></iconify-icon>
                         Overview
                      </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50 rounded-md" href="#">
<iconify-icon icon="lucide:pen-tool" width="18"></iconify-icon>
                         Post Creator
                      </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50 rounded-md" href="#">
<iconify-icon icon="lucide:calendar-clock" width="18"></iconify-icon>
                         Scheduling
                      </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50 rounded-md" href="#">
<iconify-icon icon="lucide:message-square" width="18"></iconify-icon>
                         Engagement
                         <span className="ml-auto bg-blue-100 text-[#1D4E89] text-[10px] font-bold px-1.5 py-0.5 rounded-full">12</span>
</a>
</nav>
<div className="text-xs font-semibold text-neutral-400 mb-4 mt-8 px-2 tracking-wider">ANALYTICS</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50 rounded-md" href="#">
<iconify-icon icon="lucide:bar-chart-2" width="18"></iconify-icon>
                         Performance
                      </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50 rounded-md" href="#">
<iconify-icon icon="lucide:users" width="18"></iconify-icon>
                         Audience
                      </a>
</nav>
</div>
<div className="mt-auto p-4 border-t border-neutral-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1D4E89] to-[#2B6CB0] flex items-center justify-center text-white text-xs font-bold">JD</div>
<div className="flex-1">
<div className="text-xs font-bold text-neutral-700">John Doe</div>
<div className="text-[10px] text-neutral-400">Pro Plan</div>
</div>
<iconify-icon className="text-neutral-400 hover:text-neutral-600 cursor-pointer" icon="lucide:settings"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto p-6 lg:p-8">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-xl font-bold text-neutral-800">Growth Overview</h2>
<p className="text-sm text-neutral-500">Welcome back, here's what's happening today.</p>
</div>
<button className="bg-[#1D4E89] hover:bg-[#163A66] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-md transition-colors">
<iconify-icon icon="lucide:plus"></iconify-icon>
                      Create Post
                   </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-neutral-400 uppercase">Total Views</span>
<iconify-icon className="text-neutral-300" icon="lucide:eye"></iconify-icon>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-neutral-800">48.2k</span>
<span className="text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded mb-1 flex items-center">
<iconify-icon className="mr-1" icon="lucide:trending-up" width="12"></iconify-icon> +12%
                         </span>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-neutral-400 uppercase">Engagement Rate</span>
<iconify-icon className="text-neutral-300" icon="lucide:activity"></iconify-icon>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-neutral-800">5.8%</span>
<span className="text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded mb-1 flex items-center">
<iconify-icon className="mr-1" icon="lucide:trending-up" width="12"></iconify-icon> +2.4%
                         </span>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-neutral-400 uppercase">Profile Visits</span>
<iconify-icon className="text-neutral-300" icon="lucide:user-check"></iconify-icon>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-neutral-800">1,204</span>
<span className="text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded mb-1 flex items-center">
<iconify-icon className="mr-1" icon="lucide:trending-up" width="12"></iconify-icon> +18%
                         </span>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm mb-8">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-bold text-neutral-700">Engagement Trend</h3>
<div className="flex gap-2">
<span className="w-3 h-3 rounded-full bg-[#2B6CB0]"></span>
<span className="text-xs text-neutral-500">Impressions</span>
<span className="w-3 h-3 rounded-full bg-neutral-200 ml-2"></span>
<span className="text-xs text-neutral-500">Likes</span>
</div>
</div>
<div className="h-48 w-full relative flex items-end justify-between gap-1">

<div className="w-full bg-blue-50/50 rounded-t h-[30%] relative group hover:bg-blue-100 transition-colors"></div>
<div className="w-full bg-blue-50/50 rounded-t h-[45%] relative group hover:bg-blue-100 transition-colors"></div>
<div className="w-full bg-blue-50/50 rounded-t h-[35%] relative group hover:bg-blue-100 transition-colors"></div>
<div className="w-full bg-blue-50/50 rounded-t h-[60%] relative group hover:bg-blue-100 transition-colors"></div>
<div className="w-full bg-blue-50/50 rounded-t h-[50%] relative group hover:bg-blue-100 transition-colors"></div>
<div className="w-full bg-blue-50/50 rounded-t h-[75%] relative group hover:bg-blue-100 transition-colors"></div>
<div className="w-full bg-blue-50/50 rounded-t h-[65%] relative group hover:bg-blue-100 transition-colors"></div>
<div className="w-full bg-blue-50/50 rounded-t h-[85%] relative group hover:bg-blue-100 transition-colors"></div>
<div className="w-full bg-blue-50/50 rounded-t h-[80%] relative group hover:bg-blue-100 transition-colors"></div>
<div className="w-full bg-blue-50/50 rounded-t h-[95%] relative group hover:bg-blue-100 transition-colors"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none">
<path d="M0 150 Q 50 120 100 130 T 200 80 T 300 100 T 400 40 T 500 60 T 600 20 T 700 30 L 700 200 L 0 200 Z" fill="url(#gradient)" opacity="0.1"></path>
<path d="M0 150 Q 50 120 100 130 T 200 80 T 300 100 T 400 40 T 500 60 T 600 20 T 700 30" fill="none" stroke="#2B6CB0" strokeWidth="2"></path>
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#2B6CB0"></stop>
<stop offset="100%" stop-color="#ffffff" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="flex justify-between text-[10px] text-neutral-400 mt-2 uppercase font-medium tracking-wide">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-neutral-100 flex justify-between items-center bg-neutral-50/50">
<h3 className="text-sm font-bold text-neutral-700">Scheduled Content</h3>
<button className="text-xs text-[#2B6CB0] font-medium hover:underline">View Calendar</button>
</div>
<div className="divide-y divide-neutral-100">

<div className="p-4 flex items-center gap-4 hover:bg-neutral-50 transition-colors group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#2B6CB0]">
<iconify-icon icon="lucide:file-text" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-semibold text-neutral-700 truncate">5 AI Prompts for B2B Sales</div>
<div className="text-xs text-neutral-400">Scheduled for Tomorrow, 9:00 AM</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex flex-col items-end">
<span className="text-[10px] font-bold text-neutral-400 uppercase">AI Score</span>
<span className="text-xs font-bold text-green-600">98/100</span>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-600" icon="lucide:more-vertical"></iconify-icon>
</div>
</div>

<div className="p-4 flex items-center gap-4 hover:bg-neutral-50 transition-colors group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
<iconify-icon icon="lucide:image" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-semibold text-neutral-700 truncate">Q3 Growth Carousel</div>
<div className="text-xs text-neutral-400">Draft • Last edited 2h ago</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex flex-col items-end">
<span className="text-[10px] font-bold text-neutral-400 uppercase">AI Score</span>
<span className="text-xs font-bold text-yellow-600">85/100</span>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-600" icon="lucide:more-vertical"></iconify-icon>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-neutral-200/60 bg-white/50 reveal">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-8">Trusted by growth teams at</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-60">
<iconify-icon height="30" icon="logos:stripe" width="80"></iconify-icon>
<iconify-icon height="25" icon="logos:vercel" width="90"></iconify-icon>
<iconify-icon height="30" icon="simple-icons:notion" width="30"></iconify-icon>
<iconify-icon height="25" icon="logos:linear" width="90"></iconify-icon>
<iconify-icon height="25" icon="logos:loom" width="90"></iconify-icon>
<iconify-icon height="28" icon="logos:intercom" width="100"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-bold text-[#1D4E89] tracking-tight mb-4">
                    LinkedIn is the world’s biggest networking stage. <br/><span className="text-neutral-400">Why are you still whispering?</span>
</h2>
<p className="text-lg text-neutral-500">The platform isn't the problem. The friction is.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal delay-100 p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors">
<div className="w-12 h-12 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 mb-6 shadow-sm">
<iconify-icon height="24" icon="lucide:activity" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1D4E89] mb-3">The Content Treadmill</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Burning out trying to stay consistent. You spend hours writing, only to realize you missed the optimal posting window.
                    </p>
</div>

<div className="reveal delay-200 p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors">
<div className="w-12 h-12 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 mb-6 shadow-sm">
<iconify-icon height="24" icon="lucide:mic-off" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1D4E89] mb-3">The Silence</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        High-effort posts getting zero engagement. It feels like shouting into a void while others go viral with ease.
                    </p>
</div>

<div className="reveal delay-300 p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors">
<div className="w-12 h-12 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 mb-6 shadow-sm">
<iconify-icon height="24" icon="lucide:bot" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1D4E89] mb-3">The Identity Crisis</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Generic AI tools that sound like robots, not experts. You risk your reputation every time you hit "Post" with bad copy.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F9FA] relative border-y border-neutral-200/50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-[#2B6CB0] font-semibold text-sm uppercase tracking-wider mb-2 block">How It Works</span>
<h2 className="text-3xl md:text-4xl font-bold text-[#1D4E89] tracking-tight">From Zero to Authority in 5 Minutes</h2>
</div>
<div className="flex flex-col md:flex-row justify-between items-start relative gap-8">

<div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-neutral-200 -z-10 mt-6"></div>

<div className="flex-1 text-center reveal delay-100 bg-[#F8F9FA] px-4">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-neutral-200 shadow-sm flex items-center justify-center text-[#2B6CB0] mb-6 relative z-10">
<iconify-icon height="32" icon="lucide:link" width="32"></iconify-icon>
<div className="absolute -top-2 -right-2 bg-[#2B6CB0] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">1</div>
</div>
<h3 className="text-xl font-bold text-[#1D4E89] mb-2">Connect</h3>
<p className="text-neutral-500">Securely link your profile. We use official APIs to ensure 100% account safety.</p>
</div>

<div className="flex-1 text-center reveal delay-200 bg-[#F8F9FA] px-4">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-neutral-200 shadow-sm flex items-center justify-center text-[#2B6CB0] mb-6 relative z-10">
<iconify-icon height="32" icon="lucide:wand" width="32"></iconify-icon>
<div className="absolute -top-2 -right-2 bg-[#2B6CB0] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">2</div>
</div>
<h3 className="text-xl font-bold text-[#1D4E89] mb-2">Define</h3>
<p className="text-neutral-500">Our AI analyzes your past posts to build a unique "Voice Fingerprint" that sounds just like you.</p>
</div>

<div className="flex-1 text-center reveal delay-300 bg-[#F8F9FA] px-4">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-neutral-200 shadow-sm flex items-center justify-center text-[#2B6CB0] mb-6 relative z-10">
<iconify-icon height="32" icon="lucide:bar-chart-big" width="32"></iconify-icon>
<div className="absolute -top-2 -right-2 bg-[#2B6CB0] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">3</div>
</div>
<h3 className="text-xl font-bold text-[#1D4E89] mb-2">Scale</h3>
<p className="text-neutral-500">Schedule content, auto-engage with leads, and watch your engagement metrics climb on autopilot.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-bold text-[#1D4E89] tracking-tight mb-4">
            Reclaim Your Calendar. Multiply Your Reach.
          </h2>
<p className="text-lg text-neutral-500">
            Precision tools designed to convert passive scrolling into active revenue.
          </p>
</div>
<div className="space-y-24">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
<div className="order-2 lg:order-1 relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-50 rounded-full blur-3xl opacity-30"></div>
<div className="relative bg-white p-6 rounded-2xl shadow-xl border border-neutral-200/60 max-w-md mx-auto">
<div className="flex gap-4 mb-4 border-b border-neutral-100 pb-4">
<div className="w-10 h-10 rounded-full bg-neutral-200"></div>
<div className="flex-1">
<div className="h-3 w-24 bg-neutral-200 rounded mb-2"></div>
<div className="h-2 w-full bg-neutral-100 rounded"></div>
</div>
</div>
<div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 relative">
<div className="absolute -top-3 left-4 bg-[#2B6CB0] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">AI Suggestion</div>
<p className="text-sm text-neutral-700 mb-3 font-medium">
                            "Automation reshapes workflows! It frees up mental bandwidth for strategy. Exactly what my team needed."
                            </p>
<button className="bg-[#2B6CB0] text-white text-xs px-4 py-2 rounded-md font-medium w-full">Post Reply</button>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2B6CB0] text-sm font-bold mb-4">
<iconify-icon icon="lucide:clock"></iconify-icon>
                        Save 10+ Hours/Week
                    </div>
<h3 className="text-3xl font-bold text-[#1D4E89] mb-4">Cut Engagement Time by 70%</h3>
<p className="text-lg text-neutral-500 mb-6">
                        Engage faster with context-aware replies generated in real-time. Don't just like—add value to every conversation in your niche without spending all day in the feed.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-neutral-600">
<iconify-icon className="text-[#88D3DE]" icon="lucide:check-circle"></iconify-icon>
                            Context-aware responses
                        </li>
<li className="flex items-center gap-3 text-neutral-600">
<iconify-icon className="text-[#88D3DE]" icon="lucide:check-circle"></iconify-icon>
                            One-click posted
                        </li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-sm font-bold mb-4">
<iconify-icon icon="lucide:users"></iconify-icon>
                        Precision Targeting
                    </div>
<h3 className="text-3xl font-bold text-[#1D4E89] mb-4">Stop Guessing, Start Trending</h3>
<p className="text-lg text-neutral-500 mb-6">
                        Identify and connect with high-value leads automatically. Our AI analyzes profile synergy to ensure meaningful connections, not just vanity numbers.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-neutral-600">
<iconify-icon className="text-[#88D3DE]" icon="lucide:check-circle"></iconify-icon>
                            Lead quality scoring
                        </li>
<li className="flex items-center gap-3 text-neutral-600">
<iconify-icon className="text-[#88D3DE]" icon="lucide:check-circle"></iconify-icon>
                            Viral hook generator
                        </li>
</ul>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-l from-purple-100 to-blue-50 rounded-full blur-3xl opacity-30"></div>
<div className="bg-white p-6 rounded-2xl shadow-xl border border-neutral-200/60 relative overflow-hidden">
<div className="flex items-center justify-between mb-6">
<h4 className="font-bold text-[#1D4E89]">Audience Growth</h4>
<span className="text-green-500 text-sm font-bold bg-green-50 px-2 py-1 rounded">+124%</span>
</div>
<div className="flex items-end gap-2 h-40">
<div className="w-1/6 bg-neutral-100 rounded-t-lg h-[40%]"></div>
<div className="w-1/6 bg-neutral-100 rounded-t-lg h-[55%]"></div>
<div className="w-1/6 bg-neutral-100 rounded-t-lg h-[45%]"></div>
<div className="w-1/6 bg-blue-200 rounded-t-lg h-[70%]"></div>
<div className="w-1/6 bg-[#2B6CB0] rounded-t-lg h-[90%] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-[10px] py-1 px-2 rounded">You</div>
</div>
<div className="w-1/6 bg-neutral-100 rounded-t-lg h-[60%]"></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
<div className="order-2 lg:order-1 relative">
<div className="bg-white border border-neutral-200/60 rounded-2xl p-6 shadow-xl relative overflow-hidden">
<div className="flex justify-between items-center mb-4">
<h4 className="font-bold text-[#1D4E89]">Brand Voice DNA</h4>
<div className="flex gap-1">
<span className="w-2 h-2 rounded-full bg-[#2B6CB0]"></span>
<span className="w-2 h-2 rounded-full bg-neutral-200"></span>
</div>
</div>

<div className="relative w-full h-48 flex items-center justify-center">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 100">
<polygon fill="none" points="50,10 90,40 80,90 20,90 10,40" stroke="#e5e7eb" strokeWidth="1"></polygon>
<polygon fill="none" points="50,10 90,40 80,90 20,90 10,40" stroke="#e5e7eb" strokeWidth="1" transform="scale(0.6) translate(33, 33)"></polygon>
<polygon fill="rgba(43, 108, 176, 0.2)" points="50,15 85,45 75,80 25,85 15,35" stroke="#2B6CB0" strokeWidth="2"></polygon>
</svg>
</div>
<div className="mt-4 flex justify-between text-xs text-neutral-500 font-medium">
<span>Witty</span>
<span>Professional</span>
<span>Direct</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-bold mb-4">
<iconify-icon icon="lucide:sparkles"></iconify-icon>
                        No More "Bot" Vibes
                    </div>
<h3 className="text-3xl font-bold text-[#1D4E89] mb-4">Authenticity at Scale</h3>
<p className="text-lg text-neutral-500 mb-6">
                        Your brand is your biggest asset. Our "Voice Fingerprint" technology ensures every automated interaction sounds exactly like you—witty, professional, or casual.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-neutral-600">
<iconify-icon className="text-[#88D3DE]" icon="lucide:check-circle"></iconify-icon>
                            Tone slider controls
                        </li>
<li className="flex items-center gap-3 text-neutral-600">
<iconify-icon className="text-[#88D3DE]" icon="lucide:check-circle"></iconify-icon>
                            Language nuance detection
                        </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F8F9FA] py-24 border-y border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-3xl font-bold text-[#1D4E89] mb-12 reveal">Loved by 10,000+ Professionals</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 reveal delay-100">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="lucide:star"></iconify-icon>
<iconify-icon icon="lucide:star"></iconify-icon>
<iconify-icon icon="lucide:star"></iconify-icon>
<iconify-icon icon="lucide:star"></iconify-icon>
<iconify-icon icon="lucide:star"></iconify-icon>
</div>
<p className="text-neutral-600 mb-6 leading-relaxed">"LignUp transformed my sporadic posting into a consistent growth engine. The AI tone matching is indistinguishable from my own writing."</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<div className="font-bold text-sm text-[#1D4E89]">Marcus Chen</div>
<div className="text-xs text-neutral-500">Founder @ ScaleVector</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 reveal delay-200">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="lucide:star"></iconify-icon>
<iconify-icon icon="lucide:star"></iconify-icon>
<iconify-icon icon="lucide:star"></iconify-icon>
<iconify-icon icon="lucide:star"></iconify-icon>
<iconify-icon icon="lucide:star"></iconify-icon>
</div>
<p className="text-neutral-600 mb-6 leading-relaxed">"I was skeptical about AI comments, but this tool actually reads the post. It saved me about 15 hours last month alone."</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<div className="font-bold text-sm text-[#1D4E89]">Sarah Jenkins</div>
<div className="text-xs text-neutral-500">VP Marketing @ TechFlow</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 reveal delay-300">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="lucide:star"></iconify-icon>
<iconify-icon icon="lucide:star"></iconify-icon>
<iconify-icon icon="lucide:star"></iconify-icon>
<iconify-icon icon="lucide:star"></iconify-icon>
<iconify-icon icon="lucide:star"></iconify-icon>
</div>
<p className="text-neutral-600 mb-6 leading-relaxed">"The ROI is clear. My profile views are up 300% and I've closed two deals directly from inbound leads this week."</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<div className="font-bold text-sm text-[#1D4E89]">David Ross</div>
<div className="text-xs text-neutral-500">Sales Director @ Apex</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-bold text-[#1D4E89] mb-4">Transparent Pricing for Growth</h2>
<p className="text-neutral-500">Start for free, upgrade as you scale your influence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="reveal delay-100 p-8 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-colors">
<h3 className="text-xl font-bold text-[#1D4E89] mb-2">Starter</h3>
<div className="text-4xl font-bold text-neutral-900 mb-4">$0 <span className="text-lg font-normal text-neutral-400">/mo</span></div>
<p className="text-sm text-neutral-500 mb-8">Perfect for dipping your toes into automation.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400" icon="lucide:check-circle"></iconify-icon>
                            5 AI Posts per month
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400" icon="lucide:check-circle"></iconify-icon>
                            Basic Analytics
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold rounded-lg text-center transition-colors" href="#">Get Started Free</a>
</div>

<div className="reveal delay-200 p-8 rounded-2xl border-2 border-[#2B6CB0] bg-white relative shadow-2xl shadow-blue-900/10 transform scale-105 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2B6CB0] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<h3 className="text-xl font-bold text-[#1D4E89] mb-2">Professional</h3>
<div className="text-4xl font-bold text-neutral-900 mb-4">$29 <span className="text-lg font-normal text-neutral-400">/mo</span></div>
<p className="text-sm text-neutral-500 mb-8">For creators serious about building authority.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-[#2B6CB0]" icon="lucide:check-circle"></iconify-icon>
                            Unlimited AI Posts
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-[#2B6CB0]" icon="lucide:check-circle"></iconify-icon>
                            Advanced Voice Cloning
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-[#2B6CB0] hover:bg-[#1D4E89] text-white font-semibold rounded-lg text-center transition-colors shadow-lg shadow-blue-500/25" href="#">Start 14-Day Free Trial</a>
</div>

<div className="reveal delay-300 p-8 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-colors">
<h3 className="text-xl font-bold text-[#1D4E89] mb-2">Agency</h3>
<div className="text-4xl font-bold text-neutral-900 mb-4">$99 <span className="text-lg font-normal text-neutral-400">/mo</span></div>
<p className="text-sm text-neutral-500 mb-8">Manage multiple client profiles with ease.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400" icon="lucide:check-circle"></iconify-icon>
                            10 LinkedIn Profiles
                        </li>
<li className="flex items-center gap-2 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400" icon="lucide:check-circle"></iconify-icon>
                            White-label Reports
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-white border border-neutral-300 hover:border-neutral-400 text-neutral-700 font-semibold rounded-lg text-center transition-colors" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="bg-[#F8F9FA] pt-24 pb-24 border-t border-neutral-200">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-bold text-[#1D4E89] tracking-tight mb-12 text-center reveal">
          Frequently Asked Questions
        </h2>
<div className="space-y-4">
<details className="group border border-neutral-200 rounded-xl bg-white overflow-hidden transition-all duration-300 reveal delay-100">
<summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-neutral-700 hover:bg-neutral-50">
              How does the AI maintain my specific brand voice?
              <span className="transition-transform group-open:rotate-180">
<iconify-icon className="text-neutral-400" height="20" icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-500 leading-relaxed">
              We analyze your last 20 posts to create a linguistic model unique to you. You can then fine-tune this with our "Tone Sliders" (e.g., more witty, less formal) to ensure every post feels 100% authentic.
            </div>
</details>
<details className="group border border-neutral-200 rounded-xl bg-white overflow-hidden transition-all duration-300 reveal delay-200">
<summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-neutral-700 hover:bg-neutral-50">
              Is LignUp safe for my LinkedIn account?
              <span className="transition-transform group-open:rotate-180">
<iconify-icon className="text-neutral-400" height="20" icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-500 leading-relaxed">
              Yes. We utilize official APIs and adhere strictly to LinkedIn's limits. We prioritize account safety over aggressive, spammy tactics.
            </div>
</details>
<details className="group border border-neutral-200 rounded-xl bg-white overflow-hidden transition-all duration-300 reveal delay-300">
<summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-neutral-700 hover:bg-neutral-50">
              Can I cancel anytime?
              <span className="transition-transform group-open:rotate-180">
<iconify-icon className="text-neutral-400" height="20" icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-500 leading-relaxed">
              Absolutely. There are no lock-in contracts. You can cancel your subscription with one click from your dashboard at any time.
            </div>
</details>
</div>
</div>
</section>

<section className="bg-neutral-50 px-6 py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#1D4E89] to-[#2B6CB0]"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
<div className="reveal text-center max-w-4xl mx-auto relative z-10 px-6">
<h2 className="md:text-5xl text-white text-3xl font-bold tracking-tight mb-6">
          Join 10,000+ creators scaling their influence.
        </h2>
<p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Your first 5 posts are on us. No credit card required.
        </p>
<button className="bg-white text-[#1D4E89] hover:bg-blue-50 px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl shadow-blue-900/20 group flex items-center gap-2 mx-auto">
          Get Started Now
          <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</section>

<footer className="bg-[#1D4E89] text-white pt-20 pb-10 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16 reveal">
<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6">

<svg fill="none" height="24" viewbox="0 0 100 100" width="24" xmlns="http://www.w3.org/2000/svg">
<rect fill="#ffffff" fillOpacity="0.1" height="100" rx="20" width="100"></rect>
<path d="M0 20 L60 20 L100 60 L100 100 L0 100 Z" fill="#000000" fillOpacity="0.2"></path>
<path d="M0 0 L60 0 L100 40 L40 40 Z" fill="#63B3ED"></path>
<path d="M40 40 L100 40 L100 100 L40 100 Z" fill="#ffffff"></path>
<path d="M0 0 L40 40 L40 100 L0 60 Z" fill="#CBD5E0"></path>
</svg>
<span className="text-xl font-bold">LignUp</span>
</div>
<p className="text-blue-200 text-sm leading-relaxed">
                The all-in-one AI toolkit for professional branding on LinkedIn.
             </p>
</div>
<div>
<h4 className="font-bold mb-4 text-[#88D3DE]">Product</h4>
<ul className="space-y-3 text-blue-200 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-[#88D3DE]">Resources</h4>
<ul className="space-y-3 text-blue-200 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-[#88D3DE]">Legal</h4>
<ul className="space-y-3 text-blue-200 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="reveal delay-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-300">
<span>© 2024 LignUp Inc. All rights reserved.</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><iconify-icon height="20" icon="logos:twitter" style={{filter: 'brightness(0) invert(1)'}} width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon height="20" icon="logos:linkedin-icon" style={{filter: 'brightness(0) invert(1)'}} width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
