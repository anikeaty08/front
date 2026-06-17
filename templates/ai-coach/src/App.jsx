import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function toggleAICoach() {
            const panel = document.getElementById('ai-panel');
            const backdrop = document.getElementById('ai-panel-backdrop');
            const body = document.body;

            if (panel.classList.contains('translate-x-full')) {
                // Open
                panel.classList.remove('translate-x-full');
                backdrop.classList.remove('hidden');
                // Trigger reflow for opacity transition
                void backdrop.offsetWidth;
                backdrop.classList.remove('opacity-0');
                body.style.overflow = 'hidden';
            } else {
                // Close
                panel.classList.add('translate-x-full');
                backdrop.classList.add('opacity-0');
                body.style.overflow = '';
                setTimeout(() => {
                    backdrop.classList.add('hidden');
                }, 300);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-slate-200 sticky top-0 z-40">
<div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="text-purple-600">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">FutureFit AI</span>
</div>

<nav className="hidden lg:flex items-center gap-8 text-base text-slate-500 font-medium">
<a className="text-purple-600 font-semibold" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#">Careers</a>
<a className="hover:text-slate-900 transition-colors" href="#">Learning</a>
<a className="hover:text-slate-900 transition-colors" href="#">Resources</a>
<a className="hover:text-slate-900 transition-colors" href="#">Jobs</a>
<a className="hover:text-slate-900 transition-colors" href="#">Next steps</a>
<a className="hover:text-slate-900 transition-colors" href="#">Career Passport</a>
</nav>

<div className="flex items-center gap-5">
<button className="text-slate-400 hover:text-slate-600">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button className="text-slate-400 hover:text-slate-600">
<i className="w-5 h-5" data-lucide="user"></i>
</button>

<button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 group" onclick="toggleAICoach()">
<i className="w-4 h-4 text-yellow-200 animate-pulse" data-lucide="sparkles"></i>
<span className="text-sm font-medium">AI Coach</span>
</button>
</div>
</div>
</header>

<main className="max-w-[1600px] mx-auto px-6 py-8">
<div className="bg-white rounded-3xl shadow-sm p-8 min-h-screen">

<div className="mb-10">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Welcome, David! 👋</h1>
<div className="flex items-center gap-4 text-base text-slate-600">
<span className="font-medium text-slate-900">Next Steps</span>
<span className="text-slate-300">|</span>
<div className="flex items-center gap-2">
<span className="font-medium">0%</span>
<div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>
</div>
<a className="text-purple-600 font-medium hover:text-purple-700 flex items-center gap-1 ml-2" href="#">
                        View All <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<p className="mt-2 text-slate-500 text-base">Make progress towards your career goals by completing your next steps below.</p>
</div>

<div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 -mx-2 px-2">

<div className="min-w-[320px] w-[320px] border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="h-32 bg-indigo-50 relative flex items-center justify-center overflow-hidden">
<img alt="Passport" className="object-cover w-full h-full opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-indigo-50/50 to-transparent"></div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-lg text-slate-900 mb-2 leading-tight">Complete your Career Passport</h3>
<p className="text-slate-500 text-sm mb-6 flex-1">Add all relevant professional and education experiences. Once completed, review and update...</p>
<button className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-medium py-2 rounded-lg transition-colors text-sm">Start</button>
</div>
</div>

<div className="min-w-[320px] w-[320px] border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="h-32 bg-purple-50 relative flex items-center justify-center overflow-hidden">
<img alt="Pathways" className="object-cover w-full h-full opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-lg text-slate-900 mb-2 leading-tight">Discover in-demand career pathways</h3>
<p className="text-slate-500 text-sm mb-6 flex-1">See which careers are the best fit for you and learn more about your skills gap...</p>
</div>
</div>

<div className="min-w-[320px] w-[320px] border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="h-32 bg-blue-50 relative flex items-center justify-center overflow-hidden">
<img alt="Training" className="object-cover w-full h-full opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-lg text-slate-900 mb-2 leading-tight">Explore job training programs that work for you</h3>
<p className="text-slate-500 text-sm mb-6 flex-1">View your recommended learning opportunities that will help prepare you for your dream role.</p>
</div>
</div>

<div className="min-w-[320px] w-[320px] border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="h-32 bg-teal-50 relative flex items-center justify-center overflow-hidden">
<img alt="Resources" className="object-cover w-full h-full opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-lg text-slate-900 mb-2 leading-tight">Access career resources and supports</h3>
<p className="text-slate-500 text-sm mb-6 flex-1">Navigate which resources are out there to support you in your job search and upskilling journey.</p>
</div>
</div>
</div>

<div className="mt-12">
<div className="flex items-center gap-4 mb-6">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Recommended Careers</h2>
<a className="text-purple-600 font-medium hover:text-purple-700 text-sm flex items-center gap-1" href="#">
                        View All <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-2 px-2">

<div className="min-w-[280px] w-[280px] group cursor-pointer">
<div className="relative rounded-xl overflow-hidden h-40 mb-3">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 flex gap-2">
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="bookmark"></i></button>
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>
<h3 className="font-semibold text-lg text-slate-900">Full Stack Developer</h3>
<p className="text-slate-500 text-sm mt-1">CAD 110,103 • Very High Demand</p>
<span className="inline-block mt-3 bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded font-medium">Information Technology</span>
</div>

<div className="min-w-[280px] w-[280px] group cursor-pointer">
<div className="relative rounded-xl overflow-hidden h-40 mb-3">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 flex gap-2">
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="bookmark"></i></button>
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>
<h3 className="font-semibold text-lg text-slate-900">Java Developer / Engineer</h3>
<p className="text-slate-500 text-sm mt-1">CAD 110,103 • Very High Demand</p>
<span className="inline-block mt-3 bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded font-medium">Information Technology</span>
</div>

<div className="min-w-[280px] w-[280px] group cursor-pointer">
<div className="relative rounded-xl overflow-hidden h-40 mb-3">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 flex gap-2">
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="bookmark"></i></button>
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>
<h3 className="font-semibold text-lg text-slate-900">C# Developer / Engineer</h3>
<p className="text-slate-500 text-sm mt-1">CAD 110,103 • Very High Demand</p>
<span className="inline-block mt-3 bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded font-medium">Information Technology</span>
</div>

<div className="min-w-[280px] w-[280px] group cursor-pointer">
<div className="relative rounded-xl overflow-hidden h-40 mb-3">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 flex gap-2">
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="bookmark"></i></button>
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>
<h3 className="font-semibold text-lg text-slate-900">Python Developer</h3>
<p className="text-slate-500 text-sm mt-1">CAD 110,103 • Very High Demand</p>
<span className="inline-block mt-3 bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded font-medium">Information Technology</span>
</div>
</div>
</div>

<div className="mt-12">
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Job Tools</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="bg-indigo-400 h-40 flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-indigo-300 to-indigo-500"></div>
<img alt="Resume" className="w-24 h-24 object-contain opacity-90 drop-shadow-lg" src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"/>
</div>
<div className="p-5">
<h3 className="font-semibold text-lg text-slate-900">Resume Review</h3>
<p className="text-slate-500 text-base mt-2">Get personalized feedback and edits for an existing resume, or tailor it for a specific job.</p>
</div>
</div>

<div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="bg-emerald-400 h-40 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-emerald-300 to-emerald-500"></div>
<img alt="Tracker" className="w-24 h-24 object-contain opacity-90 drop-shadow-lg" src="https://cdn-icons-png.flaticon.com/512/2910/2910791.png"/>
</div>
<div className="p-5">
<h3 className="font-semibold text-lg text-slate-900">Job Tracker</h3>
<p className="text-slate-500 text-base mt-2">Track your job search progress across every stage—from saved to hired.</p>
</div>
</div>

<div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="bg-rose-400 h-40 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-rose-300 to-rose-500"></div>
<img alt="Generator" className="w-24 h-24 object-contain opacity-90 drop-shadow-lg" src="https://cdn-icons-png.flaticon.com/512/942/942748.png"/>
</div>
<div className="p-5">
<h3 className="font-semibold text-lg text-slate-900">Resume Generator</h3>
<p className="text-slate-500 text-base mt-2">Generate a resume from scratch in seconds based on your uploaded work experience and skills.</p>
</div>
</div>
</div>
</div>

<div className="mt-12">
<div className="flex items-center gap-4 mb-6">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Recommended Jobs</h2>
<a className="text-purple-600 font-medium hover:text-purple-700 text-sm flex items-center gap-1" href="#">
                        View All <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-2 px-2">

<div className="min-w-[280px] w-[280px] flex flex-col group cursor-pointer border border-slate-100 rounded-xl overflow-hidden shadow-sm">
<div className="relative h-32">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 flex gap-2">
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="bookmark"></i></button>
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>
<div className="p-4 flex-1 flex flex-col">
<h3 className="font-semibold text-lg text-slate-900">Full Stack Developer</h3>
<p className="text-slate-500 text-sm mt-1">E-Solutions • Toronto, ON, Canada</p>
<p className="text-slate-400 text-sm">On-site</p>
<div className="mt-4 mb-4">
<span className="bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded">Top Match</span>
</div>
<p className="text-slate-400 text-xs mt-auto pt-4 border-t border-slate-50">Posted 16 days ago</p>
</div>
</div>

<div className="min-w-[280px] w-[280px] flex flex-col group cursor-pointer border border-slate-100 rounded-xl overflow-hidden shadow-sm">
<div className="relative h-32">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 flex gap-2">
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="bookmark"></i></button>
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>
<div className="p-4 flex-1 flex flex-col">
<h3 className="font-semibold text-lg text-slate-900">Full Stack Developer</h3>
<p className="text-slate-500 text-sm mt-1">MaRS Discovery District • Toronto</p>
<p className="text-slate-400 text-sm">Hybrid</p>
<div className="mt-4 mb-4">
<span className="bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded">Top Match</span>
</div>
<p className="text-slate-400 text-xs mt-auto pt-4 border-t border-slate-50">Posted 21 days ago</p>
</div>
</div>

<div className="min-w-[280px] w-[280px] flex flex-col group cursor-pointer border border-slate-100 rounded-xl overflow-hidden shadow-sm">
<div className="relative h-32">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 flex gap-2">
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="bookmark"></i></button>
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>
<div className="p-4 flex-1 flex flex-col">
<h3 className="font-semibold text-lg text-slate-900">Full Stack Developer</h3>
<p className="text-slate-500 text-sm mt-1">CIBC • Toronto, ON, Canada</p>
<p className="text-slate-400 text-sm">Hybrid</p>
<div className="mt-4 mb-4">
<span className="bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded">Top Match</span>
</div>
<p className="text-slate-400 text-xs mt-auto pt-4 border-t border-slate-50">Posted 1 month ago</p>
</div>
</div>
</div>
</div>

<div className="mt-12 mb-12">
<div className="flex items-center gap-4 mb-6">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Recommended Learning</h2>
<a className="text-purple-600 font-medium hover:text-purple-700 text-sm flex items-center gap-1" href="#">
                        View All <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-2 px-2">

<div className="min-w-[280px] w-[280px] flex flex-col group cursor-pointer border border-slate-100 rounded-xl overflow-hidden shadow-sm">
<div className="relative h-36">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 flex gap-2">
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="bookmark"></i></button>
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>
<div className="p-4 flex-1 flex flex-col">
<h3 className="font-semibold text-base text-slate-900 line-clamp-2">Advanced C Programming: Optimize Performance and...</h3>
<p className="text-slate-500 text-sm mt-2">LinkedIn Learning (English) • 1.5 hours</p>
<div className="mt-4 flex gap-2">
<span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded">Software Development</span>
<span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded">+1</span>
</div>
</div>
</div>

<div className="min-w-[280px] w-[280px] flex flex-col group cursor-pointer border border-slate-100 rounded-xl overflow-hidden shadow-sm">
<div className="relative h-36">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 flex gap-2">
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="bookmark"></i></button>
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>
<div className="p-4 flex-1 flex flex-col">
<h3 className="font-semibold text-base text-slate-900 line-clamp-2">Web Developer (Certificate of Achievement)</h3>
<p className="text-slate-500 text-sm mt-2">Everett Community College • 13 days</p>
<p className="text-slate-500 text-sm mt-1">Paid</p>
<div className="mt-4 flex gap-2">
<span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded">HTML5</span>
<span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded">+4</span>
</div>
</div>
</div>

<div className="min-w-[280px] w-[280px] flex flex-col group cursor-pointer border border-slate-100 rounded-xl overflow-hidden shadow-sm">
<div className="relative h-36">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 flex gap-2">
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="bookmark"></i></button>
<button className="bg-white/90 p-1.5 rounded-full hover:bg-white text-slate-700"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
</div>
<div className="p-4 flex-1 flex flex-col">
<h3 className="font-semibold text-base text-slate-900 line-clamp-2">Java 8 Essential Training</h3>
<p className="text-slate-500 text-sm mt-2">LinkedIn Learning (English) • 6.5 hours</p>
<div className="mt-4 flex gap-2">
<span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded">Java</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 hidden opacity-0 transition-opacity duration-300" id="ai-panel-backdrop" onclick="toggleAICoach()"></div>
<aside className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col border-l border-slate-100" id="ai-panel">

<div className="h-16 border-b border-slate-100 flex items-center justify-between px-6 bg-white shrink-0">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-purple-100 rounded-lg text-purple-600">
<i className="w-5 h-5" data-lucide="bot"></i>
</div>
<div>
<h3 className="font-semibold text-slate-900 text-base">AI Career Assistant</h3>
<p className="text-xs text-green-500 font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                    </p>
</div>
</div>
<button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors" onclick="toggleAICoach()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shrink-0">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<div className="flex flex-col gap-1 max-w-[85%]">
<span className="text-xs text-slate-400 font-medium ml-1">AI Coach</span>
<div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm text-slate-700 text-sm leading-relaxed">
                        Hi David! I noticed you're interested in Full Stack Development. Would you like me to analyze your current skills against the job requirements?
                    </div>
</div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 shrink-0 overflow-hidden">
<i className="w-5 h-5" data-lucide="user"></i>
</div>
<div className="flex flex-col gap-1 items-end max-w-[85%]">
<div className="bg-indigo-600 p-4 rounded-2xl rounded-tr-none shadow-sm text-white text-sm leading-relaxed">
                        Yes, please! I'm also wondering if I should take that Java course.
                    </div>
</div>
</div>

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shrink-0">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<div className="flex flex-col gap-1 max-w-[85%]">
<div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm text-slate-700 text-sm leading-relaxed">
                        Great question. Based on the <strong>Java Developer</strong> roles in your feed, Java is in very high demand. Taking the "Java 8 Essential Training" would increase your match score by approximately 15%. Shall I add it to your learning path?
                    </div>
</div>
</div>
</div>

<div className="p-4 bg-white border-t border-slate-100 shrink-0">
<div className="relative">
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300 transition-all placeholder:text-slate-400 text-slate-700" placeholder="Ask about your career..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
<div className="text-center mt-2">
<span className="text-[10px] text-slate-400">AI can make mistakes. Verify important info.</span>
</div>
</div>
</aside>


    </>
  );
}
