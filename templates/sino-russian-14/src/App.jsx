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
},
colors: {
china: {
50: '#fef2f2',
100: '#fee2e2',
500: '#ef4444',
600: '#dc2626',
700: '#b91c1c',
},
russia: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
}
}
}
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
      

<nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
<span className="font-medium tracking-tighter text-sm">SR</span>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900">Sino-Russian Academy</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#features">Why Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#courses">Courses</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#teachers">Teachers</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors">
<iconify-icon height="16" icon="lucide:globe" width="16"></iconify-icon>
<span>EN</span>
</button>
<a className="hidden sm:inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#courses">
                    Get Started
                </a>

<button className="md:hidden p-2 text-slate-600">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full max-w-7xl">
<div className="absolute top-20 left-10 w-96 h-96 bg-china-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob"></div>
<div className="absolute top-20 right-10 w-96 h-96 bg-russia-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-china-600"></span>
<span className="flex h-2 w-2 rounded-full bg-russia-600 -ml-1"></span>
<span>Bridging East and West through Language</span>
</div>
<h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Master the languages of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-china-600 to-china-700">China</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-russia-600 to-russia-700">Russia</span>.
            </h1>
<p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600 leading-relaxed">
                Immerse yourself in two of the world's richest cultures. Whether you are preparing for HSK, TRKI, or international business, our native experts guide you every step of the way.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative flex items-center gap-2 rounded-full bg-china-600 px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-china-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-china-500 focus:ring-offset-2" href="#chinese">
                    Start Learning Chinese
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="group relative flex items-center gap-2 rounded-full bg-russia-600 px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-russia-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-russia-500 focus:ring-offset-2" href="#russian">
                    Start Learning Russian
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>

<div className="mt-16 grid grid-cols-2 gap-8 border-t border-slate-200 pt-8 sm:grid-cols-4 lg:mx-auto lg:max-w-4xl">
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">2,000+</div>
<div className="text-xs font-medium text-slate-500 mt-1">Students Enrolled</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">98%</div>
<div className="text-xs font-medium text-slate-500 mt-1">Exam Pass Rate</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">50+</div>
<div className="text-xs font-medium text-slate-500 mt-1">Native Teachers</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">Online</div>
<div className="text-xs font-medium text-slate-500 mt-1">&amp; Offline Campus</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">Why choose SR Academy?</h2>
<p className="mt-4 text-lg text-slate-600 max-w-2xl">We combine academic rigor with cultural immersion to provide a holistic learning experience found nowhere else.</p>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-china-50 text-china-600 group-hover:bg-china-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:languages" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Native Instruction</h3>
<p className="mt-2 text-sm text-slate-600 leading-relaxed">Learn directly from certified native speakers from Beijing and Moscow who understand the nuance of every tone and case.</p>
</div>

<div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-russia-50 text-russia-600 group-hover:bg-russia-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:book-open-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Exam Preparation</h3>
<p className="mt-2 text-sm text-slate-600 leading-relaxed">Specialized tracks for HSK (Chinese Proficiency Test) and TRKI (Test of Russian as a Foreign Language) with high success rates.</p>
</div>

<div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:monitor-smartphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Hybrid Learning</h3>
<p className="mt-2 text-sm text-slate-600 leading-relaxed">Seamlessly switch between our interactive online platform and in-person cultural workshops and seminars.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="courses">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">Popular Curricula</h2>
<p className="mt-4 text-lg text-slate-600">Choose from our most requested language tracks.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-full text-xs font-medium bg-slate-900 text-white">All</button>
<button className="px-4 py-2 rounded-full text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200">Chinese</button>
<button className="px-4 py-2 rounded-full text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200">Russian</button>
</div>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-china-200 hover:shadow-md">
<div className="relative h-48 w-full overflow-hidden bg-slate-100">
<img alt="Chinese Class" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://placehold.co/600x400/fee2e2/b91c1c?text=HSK+Prep"/>
<div className="absolute top-4 left-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-china-600 backdrop-blur-sm">
                            Chinese
                        </div>
</div>
<div className="flex flex-1 flex-col p-6">
<div className="mb-2 flex items-center justify-between">
<span className="text-xs font-medium text-slate-500">Beginner to Advanced</span>
<div className="flex items-center gap-1 text-xs font-medium text-slate-500">
<iconify-icon icon="lucide:clock" width="14"></iconify-icon>
                                12 Weeks
                            </div>
</div>
<h3 className="text-lg font-medium text-slate-900">HSK Intensive Preparation</h3>
<p className="mt-2 line-clamp-2 text-sm text-slate-600">Comprehensive training for HSK levels 1-6 focusing on vocabulary, grammar, and listening comprehension.</p>
<div className="mt-6 flex items-center justify-between pt-6 border-t border-slate-100">
<span className="text-lg font-medium text-slate-900">$299<span className="text-xs text-slate-500 font-normal">/mo</span></span>
<button className="text-sm font-medium text-china-600 hover:text-china-700">View Details →</button>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-russia-200 hover:shadow-md">
<div className="relative h-48 w-full overflow-hidden bg-slate-100">
<img alt="Russian Class" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://placehold.co/600x400/dbeafe/1d4ed8?text=Business+Russian"/>
<div className="absolute top-4 left-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-russia-600 backdrop-blur-sm">
                            Russian
                        </div>
</div>
<div className="flex flex-1 flex-col p-6">
<div className="mb-2 flex items-center justify-between">
<span className="text-xs font-medium text-slate-500">Intermediate</span>
<div className="flex items-center gap-1 text-xs font-medium text-slate-500">
<iconify-icon icon="lucide:clock" width="14"></iconify-icon>
                                8 Weeks
                            </div>
</div>
<h3 className="text-lg font-medium text-slate-900">Business Russian</h3>
<p className="mt-2 line-clamp-2 text-sm text-slate-600">Master the formal etiquette, negotiation vocabulary, and correspondence skills needed for trade with Russia.</p>
<div className="mt-6 flex items-center justify-between pt-6 border-t border-slate-100">
<span className="text-lg font-medium text-slate-900">$349<span className="text-xs text-slate-500 font-normal">/mo</span></span>
<button className="text-sm font-medium text-russia-600 hover:text-russia-700">View Details →</button>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-slate-300 hover:shadow-md">
<div className="relative h-48 w-full overflow-hidden bg-slate-100">
<img alt="Culture Class" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://placehold.co/600x400/f1f5f9/475569?text=Cultural+Immersion"/>
<div className="absolute top-4 left-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-700 backdrop-blur-sm">
                            Dual Track
                        </div>
</div>
<div className="flex flex-1 flex-col p-6">
<div className="mb-2 flex items-center justify-between">
<span className="text-xs font-medium text-slate-500">All Levels</span>
<div className="flex items-center gap-1 text-xs font-medium text-slate-500">
<iconify-icon icon="lucide:clock" width="14"></iconify-icon>
                                Weekend
                            </div>
</div>
<h3 className="text-lg font-medium text-slate-900">Travel &amp; Culture Survival</h3>
<p className="mt-2 line-clamp-2 text-sm text-slate-600">Essential phrases, cultural do's and don'ts, and history for travelers heading to Beijing or Moscow.</p>
<div className="mt-6 flex items-center justify-between pt-6 border-t border-slate-100">
<span className="text-lg font-medium text-slate-900">$199<span className="text-xs text-slate-500 font-normal">/course</span></span>
<button className="text-sm font-medium text-slate-900 hover:text-slate-700">View Details →</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="teachers">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Meet our Experts</h2>
<p className="mt-4 text-slate-600">Learn from the best educators in the field.</p>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

<div className="flex flex-col items-center text-center">
<div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-white shadow-md">
<img alt="Li Wei" className="h-full w-full object-cover" src="https://placehold.co/200x200/fee2e2/b91c1c?text=LW"/>
</div>
<h3 className="text-base font-medium text-slate-900">Li Wei</h3>
<p className="text-xs font-medium text-china-600 mb-2">Senior Chinese Instructor</p>
<p className="text-sm text-slate-500">MA in Applied Linguistics from Peking University. 10+ years teaching experience.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-white shadow-md">
<img alt="Ivan Petrov" className="h-full w-full object-cover" src="https://placehold.co/200x200/dbeafe/1d4ed8?text=IP"/>
</div>
<h3 className="text-base font-medium text-slate-900">Ivan Petrov</h3>
<p className="text-xs font-medium text-russia-600 mb-2">Russian Dept. Head</p>
<p className="text-sm text-slate-500">PhD in Slavic Literature from Moscow State University. Expert in TRKI prep.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-white shadow-md">
<img alt="Zhang Chen" className="h-full w-full object-cover" src="https://placehold.co/200x200/fef2f2/ef4444?text=ZC"/>
</div>
<h3 className="text-base font-medium text-slate-900">Zhang Chen</h3>
<p className="text-xs font-medium text-china-600 mb-2">Business Chinese Coach</p>
<p className="text-sm text-slate-500">Former corporate translator for international trade delegations.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-white shadow-md">
<img alt="Elena Kozlova" className="h-full w-full object-cover" src="https://placehold.co/200x200/eff6ff/3b82f6?text=EK"/>
</div>
<h3 className="text-base font-medium text-slate-900">Elena Kozlova</h3>
<p className="text-xs font-medium text-russia-600 mb-2">Russian Conversation</p>
<p className="text-sm text-slate-500">Specializes in immersive teaching methods and phonetics correction.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 text-center mb-16">Student Success Stories</h2>
<div className="grid gap-6 md:grid-cols-3">

<div className="relative rounded-2xl bg-slate-50 p-8">
<iconify-icon className="absolute top-8 right-8 text-slate-200" icon="lucide:quote" width="32"></iconify-icon>
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">"I passed HSK 5 after just 8 months of intensive study. The teachers are incredibly patient and the curriculum is spot on."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200"></div>
<div>
<div className="text-sm font-medium text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-500">HSK Student</div>
</div>
</div>
</div>

<div className="relative rounded-2xl bg-slate-50 p-8">
<iconify-icon className="absolute top-8 right-8 text-slate-200" icon="lucide:quote" width="32"></iconify-icon>
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">"The Business Russian course helped me secure a partnership with a firm in St. Petersburg. Highly recommended for professionals."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200"></div>
<div>
<div className="text-sm font-medium text-slate-900">Michael Chen</div>
<div className="text-xs text-slate-500">Business Professional</div>
</div>
</div>
</div>

<div className="relative rounded-2xl bg-slate-50 p-8">
<iconify-icon className="absolute top-8 right-8 text-slate-200" icon="lucide:quote" width="32"></iconify-icon>
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">"A beautiful blend of language and culture. I love the cooking workshops and calligraphy classes on weekends."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200"></div>
<div>
<div className="text-sm font-medium text-slate-900">Anna Volkova</div>
<div className="text-xs text-slate-500">Culture Enthusiast</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white py-24">
<div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Ready to start your journey?</h2>
<p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">Join our newsletter to get free language tips, cultural insights, and 10% off your first course.</p>
<form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
<input className="flex-1 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900" placeholder="Enter your email" required="" type="email"/>
<button className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" type="button">
                    Subscribe
                </button>
</form>
<p className="mt-4 text-xs text-slate-500">We respect your privacy. Unsubscribe at any time.</p>
</div>
</section>

<footer className="border-t border-slate-200 bg-slate-50 py-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-slate-900 text-white text-xs font-medium">SR</div>
<span className="text-base font-medium text-slate-900">Sino-Russian Academy</span>
</div>
<p className="text-sm text-slate-500">Bridging cultures and creating opportunities through language education since 2015.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Academy</h3>
<ul className="mt-4 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#">About Us</a></li>
<li><a className="hover:text-slate-900" href="#">Careers</a></li>
<li><a className="hover:text-slate-900" href="#">Our Campus</a></li>
<li><a className="hover:text-slate-900" href="#">Partners</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Courses</h3>
<ul className="mt-4 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#">Mandarin Chinese</a></li>
<li><a className="hover:text-slate-900" href="#">Russian Language</a></li>
<li><a className="hover:text-slate-900" href="#">Corporate Training</a></li>
<li><a className="hover:text-slate-900" href="#">Online Learning</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Contact</h3>
<ul className="mt-4 space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
                            123 Education Ave, City
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon>
                            +1 (555) 123-4567
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="lucide:mail" width="14"></iconify-icon>
                            hello@sino-russian.edu
                        </li>
</ul>
</div>
</div>
<div className="mt-12 border-t border-slate-200 pt-8 text-center text-xs text-slate-500">
                © 2023 Sino-Russian Language Academy. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
