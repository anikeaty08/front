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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
primary: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#6366f1', // Indigo
600: '#4f46e5',
900: '#312e81',
},
accent: {
teal: '#2dd4bf',
purple: '#a855f7',
}
},
animation: {
'float-slow': 'float 6s ease-in-out infinite',
'float-medium': 'float 4s ease-in-out infinite',
'float-fast': 'float 3s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 glass border-b border-white/20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-2 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
<i className="text-white w-5 h-5" data-lucide="layers"></i>
</div>
<span className="font-display font-semibold text-xl tracking-tight text-slate-900">Taskly</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#about">Mission</a>
<a className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#team">Team</a>
</div>

<div className="hidden md:flex items-center">
<a className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5" href="#">
                        Get Started
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
<div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-200/40 blur-[100px] mix-blend-multiply animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-200/40 blur-[100px] mix-blend-multiply animate-pulse-slow" style={{animationDelay: '2s'}}></div>
<div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-teal-100/40 blur-[80px] mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="text-center lg:text-left z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Task management reimagined for flow.
                    </div>
<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Organize chaos.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500">Focus on impact.</span>
</h1>
<p className="text-base sm:text-lg text-slate-500 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        The minimal workspace for modern teams. Taskly clears the clutter so you can build, create, and ship without the noise.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all">
                            Start for free
                        </button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 group">
<i className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" data-lucide="play-circle"></i>
                            See how it works
                        </button>
</div>
<div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 font-medium">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] text-slate-600">JD</div>
<div className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[10px] text-indigo-600">AS</div>
<div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] text-purple-600">MR</div>
</div>
<p>Trusted by 10,000+ creators</p>
</div>
</div>

<div className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center perspective-[1000px]">

<div className="absolute w-[300px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 transform rotate-y-[-10deg] rotate-x-[5deg] z-20 animate-float-slow">
<div className="flex justify-between items-center mb-6">
<div className="h-2 w-20 bg-slate-100 rounded-full"></div>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-100"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-100"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-100"></div>
</div>
</div>
<div className="space-y-3">

<div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
<div className="w-5 h-5 rounded-md border-2 border-slate-300 group-hover:border-indigo-500 group-hover:bg-indigo-500 transition-colors"></div>
<div className="h-2 w-32 bg-slate-200 rounded-full"></div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
<div className="w-5 h-5 rounded-md border-2 border-indigo-500 bg-indigo-500 flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<div className="h-2 w-24 bg-slate-300 rounded-full opacity-50"></div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
<div className="w-5 h-5 rounded-md border-2 border-slate-300"></div>
<div className="h-2 w-40 bg-slate-200 rounded-full"></div>
</div>
</div>

<div className="mt-6 pt-4 border-t border-slate-100">
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>Progress</span>
<span>68%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-[68%] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute right-0 sm:right-10 top-10 w-64 h-40 glass rounded-xl z-10 transform translate-x-12 -translate-y-8 -rotate-6 shadow-xl border border-white/40 animate-float-medium" style={{animationDelay: '1s'}}>
<div className="p-4 flex flex-col justify-between h-full">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-teal-50 rounded-lg text-teal-600">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<span className="text-xs font-semibold text-slate-700">Sprint Speed</span>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-bold text-slate-800">+24%</span>
<span className="text-xs text-teal-600 font-medium mb-1">vs last week</span>
</div>
<div className="w-full bg-slate-100 h-10 rounded-lg flex items-end gap-1 px-1 pb-1">
<div className="w-1/5 bg-teal-200 h-[40%] rounded-sm"></div>
<div className="w-1/5 bg-teal-300 h-[70%] rounded-sm"></div>
<div className="w-1/5 bg-teal-400 h-[50%] rounded-sm"></div>
<div className="w-1/5 bg-teal-500 h-[90%] rounded-sm"></div>
<div className="w-1/5 bg-indigo-500 h-[100%] rounded-sm"></div>
</div>
</div>
</div>

<div className="absolute left-0 bottom-20 bg-white rounded-lg shadow-lg py-2 px-4 flex items-center gap-3 animate-float-fast z-30 transform -translate-x-4">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div>
<p className="text-xs font-semibold text-slate-800">Project Completed</p>
<p className="text-[10px] text-slate-400">Just now</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-medium text-slate-400 tracking-widest uppercase mb-8">Powering productivity for next-gen teams</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-display font-bold text-xl text-slate-800">
<i className="w-6 h-6 fill-slate-800" data-lucide="hexagon"></i> ACME
                </div>
<div className="flex items-center gap-2 font-display font-bold text-xl text-slate-800">
<i className="w-6 h-6 fill-slate-800" data-lucide="triangle"></i> VERTEX
                </div>
<div className="flex items-center gap-2 font-display font-bold text-xl text-slate-800">
<i className="w-6 h-6 fill-slate-800" data-lucide="circle"></i> ORBIT
                </div>
<div className="flex items-center gap-2 font-display font-bold text-xl text-slate-800">
<i className="w-6 h-6 fill-slate-800" data-lucide="square"></i> CUBE
                </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    Designed for <span className="text-indigo-600">deep work</span>
</h2>
<p className="text-slate-500 text-lg">
                    Everything you need to stay in the zone, organized into a beautifully simple interface.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="kanban-square"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Smart Boards</h3>
<p className="text-slate-500 leading-relaxed">
                        Visualize your workflow with Kanban boards that automatically prioritize tasks based on deadlines and impact.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
<div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">AI Insights</h3>
<p className="text-slate-500 leading-relaxed">
                        Get suggestions on how to optimize your day. Taskly learns your peak hours and schedules difficult tasks then.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
<div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Team Sync</h3>
<p className="text-slate-500 leading-relaxed">
                        Collaborate in real-time without the distraction. Async comments and quiet updates keep everyone aligned.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
<div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Focus Timer</h3>
<p className="text-slate-500 leading-relaxed">
                        Built-in Pomodoro timers linked to tasks. Track time effortlessly and analyze your productivity patterns.
                    </p>
</div>

<div className="md:col-span-2 lg:col-span-2 group bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-6">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Automations</h3>
<p className="text-indigo-100 leading-relaxed mb-6">
                                Connect Taskly with Slack, GitHub, and Figma. Create rules to move tasks automatically so you don't have to manage the board manually.
                            </p>
<a className="inline-flex items-center text-white font-medium hover:text-indigo-200 transition-colors" href="#">
                                Explore Integrations <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="hidden md:block w-64 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/10">
<div className="w-8 h-8 rounded bg-indigo-500 flex items-center justify-center"><i className="w-4 h-4 text-white" data-lucide="github"></i></div>
<div className="text-xs text-white">
<div className="font-bold">PR Merged</div>
<div className="opacity-70">Move to "Done"</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-green-500 flex items-center justify-center"><i className="w-4 h-4 text-white" data-lucide="slack"></i></div>
<div className="text-xs text-white">
<div className="font-bold">New Message</div>
<div className="opacity-70">Create Task</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<span className="text-indigo-600 font-semibold tracking-wide uppercase text-xs mb-4 block">Our Mission</span>
<h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-8">
                We believe productivity isn't about doing more things.<br/>It's about doing the <span className="italic text-indigo-500">right</span> things.
            </h2>
<div className="prose prose-lg prose-slate mx-auto text-slate-500">
<p>
                    Taskly was born out of frustration with complex project management tools that felt like a second job to maintain. We stripped away the bloat and focused on the psychology of getting things done. Our goal is to provide a calm, reliable space where your best work can happen effortlessly.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-display text-3xl font-semibold text-slate-900 tracking-tight">Meet the Makers</h2>
</div>
<div className="flex flex-wrap justify-center gap-12">

<div className="flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-100 to-amber-200 mb-4 p-1 shadow-md">
<div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">

<svg className="w-16 h-16 text-slate-400 fill-current" viewbox="0 0 24 24">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
</svg>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Alex Rivera</h3>
<p className="text-sm text-indigo-600 font-medium">Product Design</p>
</div>

<div className="flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-100 to-purple-200 mb-4 p-1 shadow-md">
<div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
<svg className="w-16 h-16 text-slate-400 fill-current" viewbox="0 0 24 24">
<path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"></path>
</svg>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Sarah Chen</h3>
<p className="text-sm text-indigo-600 font-medium">Engineering Lead</p>
</div>

<div className="flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-100 to-emerald-200 mb-4 p-1 shadow-md">
<div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
<svg className="w-16 h-16 text-slate-400 fill-current" viewbox="0 0 24 24">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
</svg>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900">Marcus Cole</h3>
<p className="text-sm text-indigo-600 font-medium">Growth</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-4">
<div className="max-w-5xl mx-auto rounded-3xl bg-slate-900 relative overflow-hidden text-center py-16 px-6 sm:px-12 shadow-2xl">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[80px]"></div>
<div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[80px]"></div>
</div>
<div className="relative z-10">
<h2 className="font-display text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                    Ready to reclaim your time?
                </h2>
<p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
                    Join thousands of teams who have switched to Taskly for a cleaner, faster, and more focused way to work.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold text-base hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10">
                        Get Started for Free
                    </button>
<button className="px-8 py-4 rounded-xl bg-transparent border border-slate-700 text-white font-medium hover:bg-slate-800 transition-colors">
                        View Pricing
                    </button>
</div>
<p className="mt-6 text-sm text-slate-500">No credit card required · 14-day free trial</p>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center">
<i className="text-white w-3 h-3" data-lucide="layers"></i>
</div>
<span className="font-display font-semibold text-lg tracking-tight text-slate-900">Taskly</span>
</div>
<div className="flex gap-8 text-sm text-slate-500 font-medium">
<a className="hover:text-indigo-600 transition-colors" href="#">Product</a>
<a className="hover:text-indigo-600 transition-colors" href="#">Company</a>
<a className="hover:text-indigo-600 transition-colors" href="#">Resources</a>
<a className="hover:text-indigo-600 transition-colors" href="#">Legal</a>
</div>
<div className="text-sm text-slate-400">
                © 2023 Taskly Inc.
            </div>
</div>
</footer>



    </>
  );
}
