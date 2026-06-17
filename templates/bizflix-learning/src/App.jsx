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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-400/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-float"></div>
<div className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-indigo-400/15 rounded-full blur-[100px] pointer-events-none -z-10"></div>

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-medium tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-md bg-emerald-500 flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
            BIZFLIX
          </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors flex items-center gap-1" href="#">
              Browse
              <iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" href="#">
              Career Tracks
            </a>
<a className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" href="#">
              Projects
            </a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block p-2 text-slate-400 hover:text-teal-600 transition-colors rounded-full hover:bg-slate-100">
<iconify-icon className="text-lg" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<a className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors hidden md:block" href="#">
            Sign In
          </a>
<a className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors shadow-md" href="#">
            Start Free Trial
          </a>
</div>
</div>
</nav>

<main className="pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-50 text-emerald-700 text-xs font-medium mb-8 hover:bg-emerald-100 transition-colors cursor-pointer" href="#">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
          Introducing Generative AI Track
          <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 leading-[1.1] mb-6">
          Master the skills that
          <br className="hidden md:block"/>
          build the future.
        </h1>
<p className="text-lg md:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed mb-10">
          Unlimited access to 5,000+ project-based courses in Generative AI,
          Data Analytics, Project Management, and Business Strategy. Build your
          skills while you learn from industry titans.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto text-sm font-medium bg-emerald-500 text-white px-8 py-3.5 rounded-full hover:bg-emerald-600 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 group">
            Start Learning Now
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-full sm:w-auto text-sm font-medium bg-white border border-slate-200 text-slate-700 px-8 py-3.5 rounded-full hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
<iconify-icon className="text-lg text-emerald-500" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            See How It Works
          </button>
</div>
<div className="mt-20 pt-10 border-t border-slate-200 w-full">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6 text-center">
            Instructors from top creative teams
          </p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 text-slate-800">
<span className="text-xl font-semibold tracking-tighter">Vimeo</span>
<span className="text-xl font-medium tracking-tighter">Adobe</span>
<span className="text-xl font-medium tracking-tighter flex items-center gap-1">
<iconify-icon icon="solar:figma-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Figma
            </span>
<span className="text-xl font-semibold tracking-tighter">Pixar</span>
<span className="text-xl font-medium tracking-tighter">Netflix</span>
</div>
</div>
</div>
</main>

<section className="max-w-7xl mx-auto px-6 mb-12">
<div className="flex overflow-x-auto no-scrollbar gap-3 pb-4 border-b border-slate-200">
<button className="flex-none px-4 py-2 bg-slate-900 border border-slate-900 rounded-full text-sm font-medium text-white transition-colors">
          All Topics
        </button>
<button className="flex-none px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
          Generative AI
        </button>
<button className="flex-none px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
          Data Analytics
        </button>
<button className="flex-none px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
          Project Management
        </button>
<button className="flex-none px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
          Leadership
        </button>
<button className="flex-none px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
          Productivity
        </button>
<button className="flex-none px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
          Business Strategy
        </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">
            Trending Classes
          </h2>
<p className="text-sm text-slate-600 font-normal">
            Highly rated classes focused on building real-world creative skills.
          </p>
</div>
<a className="hidden sm:flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors group" href="#">
          View all
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="#">
<div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/10">
<div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg">
<iconify-icon className="text-slate-900 text-xl" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute top-3 left-3 bg-emerald-500/90 backdrop-blur text-white text-[10px] font-medium px-2 py-1 rounded-md tracking-wide uppercase shadow-sm">
              Staff Pick
            </div>
</div>
<div className="p-4 flex flex-col flex-grow">
<div className="flex items-center gap-3 text-xs text-slate-500 mb-2 font-medium">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                2h 30m
              </span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                12k Students
              </span>
</div>
<h3 className="text-base font-medium text-slate-900 leading-snug mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
              Generative AI: Prompt Engineering Masterclass
            </h3>
<div className="mt-auto flex items-center gap-3 pt-3 border-t border-slate-100">
<img className="w-7 h-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-700">
                  Dr. Alan Turing
                </span>
<span className="text-[10px] text-slate-500">AI Researcher</span>
</div>
</div>
</div>
</a>

<a className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="#">
<div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/10">
<div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg">
<iconify-icon className="text-slate-900 text-xl" icon="solar:play-bold"></iconify-icon>
</div>
</div>
</div>
<div className="p-4 flex flex-col flex-grow">
<div className="flex items-center gap-3 text-xs text-slate-500 mb-2 font-medium">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                4h 15m
              </span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-1 text-emerald-600">
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                Original
              </span>
</div>
<h3 className="text-base font-medium text-slate-900 leading-snug mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
              Data Analytics Bootcamp: Zero to Hero
            </h3>
<div className="mt-auto flex items-center gap-3 pt-3 border-t border-slate-100">
<img className="w-7 h-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-700">
                  Sarah Chen
                </span>
<span className="text-[10px] text-slate-500">Data Scientist</span>
</div>
</div>
</div>
</a>

<a className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="#">
<div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/10">
<div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg">
<iconify-icon className="text-slate-900 text-xl" icon="solar:play-bold"></iconify-icon>
</div>
</div>
</div>
<div className="p-4 flex flex-col flex-grow">
<div className="flex items-center gap-3 text-xs text-slate-500 mb-2 font-medium">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                1h 45m
              </span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                8k Students
              </span>
</div>
<h3 className="text-base font-medium text-slate-900 leading-snug mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
              Agile Project Management &amp; Scrum
            </h3>
<div className="mt-auto flex items-center gap-3 pt-3 border-t border-slate-100">
<img className="w-7 h-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-700">
                  Marcus Johnson
                </span>
<span className="text-[10px] text-slate-500">Scrum Master</span>
</div>
</div>
</div>
</a>

<a className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" href="#">
<div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/10">
<div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg">
<iconify-icon className="text-slate-900 text-xl" icon="solar:play-bold"></iconify-icon>
</div>
</div>
</div>
<div className="p-4 flex flex-col flex-grow">
<div className="flex items-center gap-3 text-xs text-slate-500 mb-2 font-medium">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                3h 20m
              </span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                24k Students
              </span>
</div>
<h3 className="text-base font-medium text-slate-900 leading-snug mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
              Leadership Skills for the Future of Work
            </h3>
<div className="mt-auto flex items-center gap-3 pt-3 border-t border-slate-100">
<img className="w-7 h-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-700">
                  Elena Rodriguez
                </span>
<span className="text-[10px] text-slate-500">Executive Coach</span>
</div>
</div>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-400/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white border border-slate-200 shadow-sm rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-emerald-500" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Learn by doing. Create your best work.
            </h3>
<p className="text-slate-600 font-normal max-w-md">
              Every class includes a real-world project. Stop passively
              consuming content and start building your creative portfolio from
              day one.
            </p>
</div>
<div className="mt-12 flex items-center gap-4 relative z-10">
<div className="flex -space-x-3">
<img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-slate-500 font-medium">
<span className="text-slate-900">100,000+</span>
              projects shared
            </p>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div>
<div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-emerald-600" icon="solar:infinity-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">
              Unlimited Access
            </h3>
<p className="text-sm text-slate-600 font-normal">
              One membership. Endless creativity. Explore new tools and mediums
              seamlessly without paywalls per class.
            </p>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div>
<div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-emerald-600" icon="solar:diploma-verified-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">
              Industry Experts
            </h3>
<p className="text-sm text-slate-600 font-normal">
              Learn techniques, workflows, and secrets directly from
              award-winning creatives and top studios.
            </p>
</div>
</div>
<div className="md:col-span-2 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center border border-slate-200 rounded-3xl p-8 lg:p-12 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
<div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/50 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<span className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-xs font-medium text-white backdrop-blur-md mb-4 inline-block">
                Bizflix for Teams
              </span>
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-white mb-2">
                Empower your creative team
              </h3>
<p className="text-slate-200 font-normal max-w-sm text-sm">
                Provide your designers and animators with the skills they need
                to produce scroll-stopping content.
              </p>
</div>
<button className="mt-8 self-start text-sm font-medium bg-emerald-500 text-white px-5 py-2.5 rounded-full hover:bg-emerald-600 transition-colors shadow-lg">
              Book a Demo
            </button>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-24 text-center">
<div className="py-16 px-8 rounded-3xl bg-slate-50 border border-slate-200 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-emerald-400/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-4">
            Ready to fuel your creativity?
          </h2>
<p className="text-slate-600 font-normal mb-8 max-w-lg mx-auto">
            Join thousands of creatives building their skills with Bizflix. Try
            it free for 7 days. Cancel anytime.
          </p>
<button className="text-sm font-medium bg-slate-900 text-white px-8 py-3.5 rounded-full hover:bg-slate-800 transition-colors shadow-lg inline-flex items-center gap-2">
            Start Your Free Trial
          </button>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-medium tracking-tighter text-slate-900 flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 rounded-md bg-emerald-100 border border-emerald-200 flex items-center justify-center">
<iconify-icon className="text-emerald-600 text-xs" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
            BIZFLIX
          </a>
<p className="text-xs text-slate-500 max-w-xs leading-relaxed">
            The premium learning platform for professionals. Master Generative
            AI, Data Analytics, and Project Management through hands-on classes.
          </p>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Platform</h4>
<ul className="space-y-3">
<li>
<a className="text-xs text-slate-600 hover:text-teal-600 transition-colors" href="#">
                Browse Classes
              </a>
</li>
<li>
<a className="text-xs text-slate-600 hover:text-teal-600 transition-colors" href="#">
                Learning Paths
              </a>
</li>
<li>
<a className="text-xs text-slate-600 hover:text-teal-600 transition-colors" href="#">
                Student Projects
              </a>
</li>
<li>
<a className="text-xs text-slate-600 hover:text-teal-600 transition-colors" href="#">
                Pricing
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-3">
<li>
<a className="text-xs text-slate-600 hover:text-teal-600 transition-colors" href="#">
                About Us
              </a>
</li>
<li>
<a className="text-xs text-slate-600 hover:text-teal-600 transition-colors" href="#">
                Careers
              </a>
</li>
<li>
<a className="text-xs text-slate-600 hover:text-teal-600 transition-colors" href="#">
                For Teams
              </a>
</li>
<li>
<a className="text-xs text-slate-600 hover:text-teal-600 transition-colors" href="#">
                Teach
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Resources</h4>
<ul className="space-y-3">
<li>
<a className="text-xs text-slate-600 hover:text-teal-600 transition-colors" href="#">
                Blog
              </a>
</li>
<li>
<a className="text-xs text-slate-600 hover:text-teal-600 transition-colors" href="#">
                Community
              </a>
</li>
<li>
<a className="text-xs text-slate-600 hover:text-teal-600 transition-colors" href="#">
                Help Center
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
          © 2024 Bizflix Learning Inc. All rights reserved.
        </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-teal-600 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:twitter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-slate-400 hover:text-teal-600 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:github-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-slate-400 hover:text-teal-600 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:link-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
