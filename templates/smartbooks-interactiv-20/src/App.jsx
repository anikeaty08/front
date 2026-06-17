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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
<svg className="lucide lucide-book-open w-5 h-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 font-manrope" style={{}}>SmartBooks</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium hover:text-primary transition-colors font-manrope" href="#home" style={{}}>Home</a>
<a className="text-sm font-medium hover:text-primary transition-colors font-manrope" href="#how-it-works" style={{}}>How It Works</a>
<a className="text-sm font-medium hover:text-primary transition-colors font-manrope" href="#features" style={{}}>Features</a>
<a className="text-sm font-medium hover:text-primary transition-colors font-manrope" href="#benefits" style={{}}>For Schools</a>
</div>

<div className="hidden md:flex items-center space-x-4">
<a className="text-sm font-medium hover:text-primary transition-colors font-manrope" href="#contact" style={{}}>Log in</a>
<a className="bg-primary hover:opacity-90 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-manrope" href="#contact" style={{}}>
                        Book a Demo
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative" id="home">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
<div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-medium mb-6 font-manrope" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                        New: AI-Powered Lesson Planning
                    </div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-semibold text-slate-900 tracking-tight font-instrument-serif mb-6">
                        Transform Textbooks into <span className="text-primary xl:bg-clip-text xl:text-transparent font-instrument-serif bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#7276f8] to-red-600">Interactive Learning</span>
</h1>
<p className="text-lg lg:text-xl text-slate-500 mb-10 leading-relaxed font-manrope" style={{}}>
                        SmartBooks helps teachers bring lessons to life by turning physical textbooks into rich digital content—images, audio, slides, quizzes, and more—delivered directly to each student’s personal learning feed.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-primary text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 text-center font-manrope" href="#contact" style={{}}>
                            Get Started
                        </a>
<a className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-base font-medium hover:bg-slate-50 transition-all text-center font-manrope" href="#contact" style={{}}>
                            Book a Demo
                        </a>
</div>
</div>

<div className="flex hidden lg:flex w-full h-[500px] relative items-center justify-center">

<div className="absolute w-[500px] h-[500px] border border-slate-100 rounded-full cosmic-spin opacity-50"></div>
<div className="absolute w-[350px] h-[350px] border border-dashed border-slate-200 rounded-full cosmic-spin opacity-60" style={{animationDirection: 'reverse'}}></div>

<div className="z-10 floating-orb bg-white w-64 border-slate-100 border rounded-3xl pt-4 pr-4 pb-4 pl-4 relative shadow-2xl">

<div className="flex items-center justify-between mb-4">
<div className="h-2 w-20 bg-slate-100 rounded-full"></div>
<div className="h-8 w-8 bg-slate-50 rounded-full flex items-center justify-center">
<svg className="lucide lucide-user w-4 h-4 text-slate-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>

<div className="bg-surface rounded-xl p-3 mb-3">
<div className="flex gap-3">
<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<div className="h-2 w-24 bg-slate-200 rounded-full mb-2"></div>
<div className="h-1.5 w-16 bg-slate-100 rounded-full"></div>
</div>
</div>
</div>

<div className="bg-surface rounded-xl p-3 mb-3">
<div className="flex gap-3">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="">
<div className="h-2 w-28 bg-slate-200 rounded-full mb-2"></div>
<div className="h-1.5 w-20 bg-slate-100 rounded-full"></div>
</div>
</div>
</div>

<div className="bg-slate-100 rounded-xl h-32 w-full flex items-center justify-center text-slate-300">
<svg className="lucide lucide-image w-8 h-8" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
</div>

<div className="absolute top-10 left-10 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 floating-orb-delayed z-20">
<div className="flex items-center gap-2">
<div className="bg-green-50 p-2 rounded-lg text-green-600"><svg className="lucide lucide-check-circle w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg></div>
<span className="text-xs font-medium text-slate-600 font-manrope" style={{}}>Quiz Ready</span>
</div>
</div>
<div className="absolute bottom-20 right-0 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 floating-orb z-20">
<div className="flex items-center gap-2">
<div className="bg-purple-50 p-2 rounded-lg text-purple-600"><svg className="lucide lucide-mic w-5 h-5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg></div>
<span className="text-xs font-medium text-slate-600 font-manrope" style={{}}>Audio Added</span>
</div>
</div>

<div className="absolute top-0 right-10 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface relative">
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="inline-block p-3 bg-white rounded-2xl shadow-sm mb-8">
<svg className="lucide lucide-telescope w-6 h-6 text-primary" data-lucide="telescope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"></path><path d="m13.56 11.747 4.332-.924"></path><path d="m16 21-3.105-6.21"></path><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"></path><path d="m6.158 8.633 1.114 4.456"></path><path d="m8 21 3.105-6.21"></path><circle cx="12" cy="13" r="2"></circle></svg>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 font-instrument-serif" style={{}}>
                A New Way to Bring Textbooks to Life
            </h2>
<p className="text-lg text-slate-500 leading-relaxed font-manrope" style={{}}>
                SmartBooks bridges the gap between traditional learning and modern digital experiences. By enhancing physical textbooks with multimedia content and intuitive delivery tools, it reshapes how teachers teach and how students learn—without requiring schools to overhaul their systems.
            </p>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 font-instrument-serif" style={{}}>How SmartBooks Works</h2>
<p className="text-slate-500 font-manrope" style={{}}>From physical textbook to interactive learning—done in minutes.</p>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 border-t-2 border-dashed border-slate-200 -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center shadow-sm group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300 mb-6">
<svg className="lucide lucide-upload-cloud w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 font-manrope" style={{}}>1. Upload</h3>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>Admins upload any textbook through the SmartBooks dashboard.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center shadow-sm group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300 mb-6">
<svg className="lucide lucide-layers w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 font-manrope" style={{}}>2. Organize</h3>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>Teachers break down chapters, create structured lessons, and prepare flow.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center shadow-sm group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300 mb-6">
<svg className="lucide lucide-sparkles w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 font-manrope" style={{}}>3. Enrich</h3>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>Add images, podcasts, text notes, slides, quizzes, and assignments.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center shadow-sm group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300 mb-6">
<svg className="lucide lucide-smartphone w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 font-manrope" style={{}}>4. Deliver</h3>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>Students receive content through a clean feed in the app.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="features">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-40 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-40 -right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 font-instrument-serif" style={{}}>Built for Modern Classrooms</h2>
<p className="text-slate-500 font-manrope" style={{}}>Powerful tools designed to save time and improve learning outcomes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
<div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-layout-grid w-6 h-6" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 font-manrope" style={{}}>Multi-Format Content</h3>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>Share images, text, audio, slides, quizzes, and assignments seamlessly within one lesson.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-book w-6 h-6" data-lucide="book" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 font-manrope" style={{}}>Textbook-Driven</h3>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>Keep physical books at the core, amplifying them with digital layers rather than replacing them.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-bar-chart-3 w-6 h-6" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 font-manrope" style={{}}>Teacher Dashboard</h3>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>Plan lessons effortlessly, schedule content releases, and track student engagement.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-rss w-6 h-6" data-lucide="rss" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 font-manrope" style={{}}>Student Feed</h3>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>A personalized, social-media style feed that is distraction-free and focused on learning.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 font-manrope" style={{}}>School-Wide Controls</h3>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>Centralized management for textbooks, classes, teachers, and permissions.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
<div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-globe-2 w-6 h-6" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 font-manrope" style={{}}>Curriculum Agnostic</h3>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>Flexible platform that adapts to any school level, subject, or language.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="benefits">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-8">

<div className="relative bg-surface rounded-3xl p-8 lg:p-10 overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm text-blue-600 mb-6">
<svg className="lucide lucide-graduation-cap w-6 h-6" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 font-manrope" style={{}}>For Teachers</h3>
<p className="text-slate-600 mb-2 font-medium font-manrope" style={{}}>Teach Smarter</p>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>
                            Simplify lesson delivery, reduce preparation time, and keep materials organized in one place. No more WhatsApp groups or endless photocopies.
                        </p>
</div>
</div>

<div className="relative bg-primary-light/30 rounded-3xl p-8 lg:p-10 overflow-hidden group border border-primary/10">
<div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm text-primary mb-6">
<svg className="lucide lucide-smile w-6 h-6" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 font-manrope" style={{}}>For Students</h3>
<p className="text-primary mb-2 font-medium font-manrope" style={{}}>Learn Better</p>
<p className="text-sm text-slate-600 leading-relaxed font-manrope" style={{}}>
                            All learning materials appear in one personalized feed with engaging multimedia formats, making studying feel intuitive and modern.
                        </p>
</div>
</div>

<div className="relative bg-surface rounded-3xl p-8 lg:p-10 overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm text-green-600 mb-6">
<svg className="lucide lucide-building-2 w-6 h-6" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 font-manrope" style={{}}>For Schools</h3>
<p className="text-slate-600 mb-2 font-medium font-manrope" style={{}}>Modernize Efficiently</p>
<p className="text-sm text-slate-500 leading-relaxed font-manrope" style={{}}>
                            Centralize textbooks, streamline workflows, improve student outcomes, and digitize learning—without heavy infrastructure changes.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12">
<p className="text-sm font-medium text-slate-400 uppercase tracking-widest font-manrope" style={{}}>Trusted by forward-thinking schools</p>
</div>

<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale mb-16">
<div className="flex items-center gap-2 text-xl font-bold text-slate-800 font-manrope" style={{}}><svg className="lucide lucide-hexagon w-6 h-6 fill-slate-800" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> NorthHill</div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800 font-manrope" style={{}}><svg className="lucide lucide-triangle w-6 h-6 fill-slate-800" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> ACADEMY</div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800 font-manrope" style={{}}><svg className="lucide lucide-circle w-6 h-6 fill-slate-800" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> GlobalHigh</div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-800 font-manrope" style={{}}><svg className="lucide lucide-square w-6 h-6 fill-slate-800" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> EDUSYSTEMS</div>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-primary mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-600 mb-6 italic font-manrope" style={{}}>"SmartBooks has completely transformed how I plan my week. I used to spend hours photocopying; now I upload, add a quiz, and I'm done."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full"></div>
<div>
<p className="text-sm font-semibold text-slate-900 font-manrope" style={{}}>Sarah Jenkings</p>
<p className="text-xs text-slate-500 font-manrope" style={{}}>History Teacher, Grades 8-10</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center">
<h3 className="text-5xl font-bold text-primary mb-2 tracking-tight font-instrument-serif" style={{}}>85%</h3>
<p className="text-slate-500 text-sm font-medium font-manrope" style={{}}>of teachers say SmartBooks significantly reduced their lesson preparation time.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface relative overflow-hidden" id="contact">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6 font-instrument-serif" style={{}}>
                Bring Your Textbooks to Life
            </h2>
<p className="text-xl text-slate-500 mb-10 font-manrope" style={{}}>
                Empower teachers. Engage students. Modernize your school.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-primary text-white px-10 py-4 rounded-full text-base font-medium transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 font-manrope" style={{}}>
                    Start Free
                </button>
<button className="bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-full text-base font-medium hover:bg-slate-50 transition-all font-manrope" style={{}}>
                    Book a Demo
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-white">
<svg className="lucide lucide-book-open w-3 h-3" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900 font-manrope" style={{}}>SmartBooks</span>
</div>
<p className="text-sm text-slate-400 font-manrope" style={{}}>Making learning interactive, accessible, and fun for everyone.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm font-manrope" style={{}}>Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-primary transition-colors font-manrope" href="#" style={{}}>Features</a></li>
<li><a className="hover:text-primary transition-colors font-manrope" href="#" style={{}}>Pricing</a></li>
<li><a className="hover:text-primary transition-colors font-manrope" href="#" style={{}}>For Schools</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm font-manrope" style={{}}>Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-primary transition-colors font-manrope" href="#" style={{}}>About</a></li>
<li><a className="hover:text-primary transition-colors font-manrope" href="#" style={{}}>Careers</a></li>
<li><a className="hover:text-primary transition-colors font-manrope" href="#" style={{}}>Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm font-manrope" style={{}}>Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-primary transition-colors font-manrope" href="#" style={{}}>Privacy Policy</a></li>
<li><a className="hover:text-primary transition-colors font-manrope" href="#" style={{}}>Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 font-manrope" style={{}}>© 2023 SmartBooks Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-primary" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-400 hover:text-primary" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-slate-400 hover:text-primary" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
