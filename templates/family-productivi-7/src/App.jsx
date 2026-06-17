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
colors: {
nori: {
base: '#FDFCF8',
dark: '#1C1917',
orange: '#FCA564',
brown: '#4A4238',
beige: '#EBE5DE',
accent: '#F97316'
}
},
letterSpacing: {
tightest: '-0.04em',
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
      

<div className="noise-overlay"></div>

<div className="fixed bottom-6 right-6 z-40 animate-fade-in-up">
<a className="group flex items-center gap-3 bg-[#4A4238] backdrop-blur-md bg-opacity-90 text-[#FDFCF8] pl-2 pr-6 py-2 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 border border-white/10" href="#">
<div className="bg-[#FCA564] p-2 rounded-xl text-nori-dark">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="cat"></i>
</div>
<span className="text-lg font-medium tracking-tight">Sign Up</span>
</a>
</div>

<nav className="fixed top-0 w-full z-40 pt-6 px-6 md:px-12 flex justify-between items-start pointer-events-none">

<a className="pointer-events-auto text-3xl font-bold tracking-tighter text-nori-dark/90 hover:opacity-80 transition-opacity" href="#">
<span className="font-sans lowercase">nori</span>
</a>

<div className="pointer-events-auto hidden md:flex items-center gap-2 bg-transparent">
<a className="px-5 py-2.5 rounded-full bg-[#FCA564] text-[#291B0F] font-medium text-sm transition-transform hover:-translate-y-0.5 shadow-sm" href="#">Home</a>
<a className="px-5 py-2.5 rounded-full bg-[#4A4238]/80 backdrop-blur-sm text-[#FDFCF8] font-medium text-sm transition-transform hover:-translate-y-0.5 hover:bg-[#4A4238]" href="#">Pricing</a>
<a className="px-5 py-2.5 rounded-full bg-[#4A4238]/80 backdrop-blur-sm text-[#FDFCF8] font-medium text-sm transition-transform hover:-translate-y-0.5 hover:bg-[#4A4238]" href="#">Support</a>
<a className="px-5 py-2.5 rounded-full bg-[#4A4238]/80 backdrop-blur-sm text-[#FDFCF8] font-medium text-sm transition-transform hover:-translate-y-0.5 hover:bg-[#4A4238]" href="#">Try Online</a>
<a className="px-5 py-2.5 rounded-full bg-[#4A4238]/80 backdrop-blur-sm text-[#FDFCF8] font-medium text-sm transition-transform hover:-translate-y-0.5 hover:bg-[#4A4238]" href="#">Download App</a>
</div>

<button className="pointer-events-auto md:hidden p-3 bg-[#4A4238]/80 backdrop-blur rounded-full text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<header className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Cozy Interior" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#D6C4B0]/95 via-[#E6D5C3]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#D6C4B0] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-3xl">
<h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tightest leading-[0.95] text-[#1C1917] mb-8">
                Things are about <br/> to get a lot easier.
            </h1>
<p className="text-xl md:text-2xl text-[#4A4238] max-w-xl leading-relaxed mb-10 font-normal">
                Nori takes care of all your households needs, so you can focus on enjoying life together.
            </p>
<button className="bg-[#111111] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2">
                Download Nori
                <i className="w-5 h-5 ml-1" data-lucide="arrow-right"></i>
</button>
</div>

<div className="hidden lg:block absolute bottom-0 right-0 w-[55%] translate-y-12 translate-x-12">
<div className="relative z-10">

<div className="bg-[#2a2a2a] p-3 rounded-[2rem] shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
<div className="bg-[#1a1a1a] rounded-[1.5rem] overflow-hidden border-4 border-[#333]">

<div className="bg-[#F4F1ED] w-full aspect-[4/3] p-6 relative overflow-hidden">

<div className="flex justify-between items-center mb-6">
<div className="text-2xl font-serif font-semibold text-gray-800">17:26</div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-gray-400"></div>
<div className="w-2 h-2 rounded-full bg-gray-400"></div>
<div className="w-2 h-2 rounded-full bg-gray-800"></div>
</div>
</div>

<div className="grid grid-cols-3 gap-4 h-full">
<div className="col-span-2 space-y-4">
<div className="flex gap-3 overflow-hidden pb-2">
<div className="w-12 h-12 rounded-full bg-orange-200 border-2 border-white shadow-sm flex-shrink-0"></div>
<div className="w-12 h-12 rounded-full bg-blue-200 border-2 border-white shadow-sm flex-shrink-0"></div>
<div className="w-12 h-12 rounded-full bg-green-200 border-2 border-white shadow-sm flex-shrink-0"></div>
</div>
<div className="bg-[#FAE8D3] p-4 rounded-2xl h-32 w-full shadow-sm"></div>
<div className="flex gap-4">
<div className="bg-[#D3E4FA] p-4 rounded-2xl h-24 flex-1 shadow-sm"></div>
<div className="bg-[#E4D3FA] p-4 rounded-2xl h-24 flex-1 shadow-sm"></div>
</div>
</div>
<div className="col-span-1 space-y-4">
<div className="bg-[#C3E8F4] p-4 rounded-2xl h-40 shadow-sm flex flex-col justify-between">
<span className="text-4xl font-serif">23°</span>
</div>
<div className="bg-white p-2 rounded-2xl h-24 shadow-sm flex items-center justify-center">
<i className="w-8 h-8 text-gray-400" data-lucide="music"></i>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 left-10 right-10 h-12 bg-black/20 blur-2xl rounded-full"></div>
</div>
</div>
</header>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FDFCF8]">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1C1917] mb-6">More Ways Nori Helps</h2>
<div className="h-1 w-24 bg-[#FCA564] rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-8 rounded-3xl bg-white border border-[#EBE5DE] hover:border-[#FCA564]/50 hover:shadow-xl transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-[#FFF4E8] flex items-center justify-center mb-6 group-hover:bg-[#FCA564] transition-colors duration-300">
<i className="w-7 h-7 text-[#FCA564] group-hover:text-[#291B0F] transition-colors duration-300" data-lucide="calendar-heart"></i>
</div>
<h3 className="text-2xl font-serif font-medium mb-3 tracking-tight">Shared Calendar</h3>
<p className="text-lg text-gray-500 leading-relaxed">Sync everyone's schedule automatically without the chaos.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-[#EBE5DE] hover:border-[#FCA564]/50 hover:shadow-xl transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-[#E8F1FF] flex items-center justify-center mb-6 group-hover:bg-[#8FBFFF] transition-colors duration-300">
<i className="w-7 h-7 text-[#5C8ACC] group-hover:text-[#182C45] transition-colors duration-300" data-lucide="list-todo"></i>
</div>
<h3 className="text-2xl font-serif font-medium mb-3 tracking-tight">Smart Tasks</h3>
<p className="text-lg text-gray-500 leading-relaxed">Assign chores and groceries to the right person, instantly.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-[#EBE5DE] hover:border-[#FCA564]/50 hover:shadow-xl transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-[#EEF9F2] flex items-center justify-center mb-6 group-hover:bg-[#8CD5A6] transition-colors duration-300">
<i className="w-7 h-7 text-[#5FA577] group-hover:text-[#123620] transition-colors duration-300" data-lucide="utensils"></i>
</div>
<h3 className="text-2xl font-serif font-medium mb-3 tracking-tight">Meal Planning</h3>
<p className="text-lg text-gray-500 leading-relaxed">Plan meals for the week and auto-generate shopping lists.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-[#EBE5DE] hover:border-[#FCA564]/50 hover:shadow-xl transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-[#FFF0F0] flex items-center justify-center mb-6 group-hover:bg-[#FFB0B0] transition-colors duration-300">
<i className="w-7 h-7 text-[#D96C6C] group-hover:text-[#4A1616] transition-colors duration-300" data-lucide="message-circle-heart"></i>
</div>
<h3 className="text-2xl font-serif font-medium mb-3 tracking-tight">Family Chat</h3>
<p className="text-lg text-gray-500 leading-relaxed">A private space for family updates, photos, and coordination.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F5F2ED] overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="lg:w-1/2">
<span className="inline-block px-4 py-1.5 rounded-full bg-[#E6DCCF] text-[#5C4D3D] text-sm font-semibold mb-6 uppercase tracking-wide">Unified Intelligence</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[#1C1917] mb-8 leading-[1.1]">
                    Your unified family platform.
                </h2>
<p className="text-xl md:text-2xl text-[#5C4D3D] leading-relaxed mb-10">
                    Just ask Nori what you need — it picks the right tool and gets it done across all your channels. From organizing soccer practice to reminding dad about the milk.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4">
<div className="mt-1 bg-white p-2 rounded-full shadow-sm text-green-600">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<p className="text-lg text-[#4A4238]">Connects with Google Calendar, Apple Reminders &amp; more.</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-white p-2 rounded-full shadow-sm text-green-600">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<p className="text-lg text-[#4A4238]">Voice activated for hands-free household management.</p>
</div>
</div>
</div>
<div className="lg:w-1/2 relative">

<div className="relative z-10 bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100">

<div className="space-y-6">

<div className="flex gap-4 items-end">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div className="bg-[#F3F4F6] p-4 rounded-2xl rounded-bl-none text-gray-800 text-lg">
                                Can you check if we're free next Tuesday evening?
                            </div>
</div>

<div className="flex gap-4 items-end flex-row-reverse">
<div className="w-10 h-10 rounded-full bg-[#FCA564] flex items-center justify-center text-white">
<span className="font-bold font-sans lowercase">n</span>
</div>
<div className="bg-[#FFF4E8] p-4 rounded-2xl rounded-br-none text-[#5C4D3D] text-lg border border-[#FCA564]/20 shadow-sm">
<p className="mb-2">You have <span className="font-semibold">Soccer Practice</span> from 5pm to 6:30pm.</p>
<div className="bg-white/60 p-3 rounded-xl flex items-center gap-3 mt-2">
<i className="w-5 h-5 text-orange-500" data-lucide="calendar"></i>
<span className="text-sm font-medium">Tue, Oct 24</span>
</div>
</div>
</div>

<div className="flex gap-4 items-end">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div className="bg-[#F3F4F6] p-4 rounded-2xl rounded-bl-none text-gray-800 text-lg">
                                Okay, add "Pizza Night" after that.
                            </div>
</div>
</div>

<div className="mt-8 relative">
<div className="h-14 bg-gray-50 rounded-full border border-gray-200 flex items-center px-6 text-gray-400">
                            Ask Nori...
                        </div>
<div className="absolute right-2 top-2 h-10 w-10 bg-[#1C1917] rounded-full flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="mic"></i>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FCA564] rounded-full blur-3xl opacity-20"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
</div>
</div>
</section>

<section className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#1C1917] text-[#FDFCF8] overflow-hidden">
<div className="absolute inset-0 z-0 opacity-40">
<img alt="Family Lifestyle" className="w-full h-full object-cover grayscale mix-blend-multiply" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-5xl mx-auto text-center">
<h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight mb-8 leading-tight">
                Life moves fast, but with Nori - <br/> <span className="text-[#FCA564] italic">keeping up</span> with family life feels easier.
            </h2>
<div className="flex justify-center mt-12">
<a className="px-10 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-lg font-medium hover:bg-white hover:text-black transition-all duration-300" href="#">
                    See how it works
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FDFCF8]">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1C1917] mb-4">What Do They Say <br/> About Nori?</h2>
</div>
<div className="flex gap-4">
<button className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors">
<i className="w-6 h-6" data-lucide="arrow-left"></i>
</button>
<button className="p-3 rounded-full bg-[#1C1917] text-white hover:bg-black transition-colors">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">

<div className="min-w-[85%] md:min-w-[400px] bg-[#F5F2ED] p-8 md:p-10 rounded-[2rem] snap-center flex flex-col justify-between h-[400px]">
<div>
<div className="flex gap-1 text-[#FCA564] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-2xl font-serif text-[#1C1917] leading-snug">"Nori has completely changed our mornings. No more shouting about missing socks or forgotten lunches."</p>
</div>
<div className="flex items-center gap-4">
<img alt="Sarah J" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<p className="font-semibold text-[#1C1917]">Sarah Jenkins</p>
<p className="text-sm text-gray-500">Mom of 3</p>
</div>
</div>
</div>

<div className="min-w-[85%] md:min-w-[400px] bg-[#EBE5DE] p-8 md:p-10 rounded-[2rem] snap-center flex flex-col justify-between h-[400px]">
<div>
<div className="flex gap-1 text-[#FCA564] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-2xl font-serif text-[#1C1917] leading-snug">"The unified calendar is a godsend. I can finally see my work schedule alongside the kids' activities."</p>
</div>
<div className="flex items-center gap-4">
<img alt="Mark T" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<p className="font-semibold text-[#1C1917]">Mark Thompson</p>
<p className="text-sm text-gray-500">Dad of 2</p>
</div>
</div>
</div>

<div className="min-w-[85%] md:min-w-[400px] bg-[#F5F2ED] p-8 md:p-10 rounded-[2rem] snap-center flex flex-col justify-between h-[400px]">
<div>
<div className="flex gap-1 text-[#FCA564] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-2xl font-serif text-[#1C1917] leading-snug">"I didn't realize how much mental load I was carrying until Nori started handling the small stuff."</p>
</div>
<div className="flex items-center gap-4">
<img alt="Elena R" className="w-12 h-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<p className="font-semibold text-[#1C1917]">Elena Rodriguez</p>
<p className="text-sm text-gray-500">Architect</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
<div className="max-w-5xl mx-auto bg-[#1C1917] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FCA564] rounded-full blur-[100px] opacity-20"></div>
<div className="relative z-10">
<span className="text-[#FCA564] font-medium tracking-wide uppercase text-sm mb-4 block">The Basics</span>
<h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6 tracking-tight">
                    Your family’s essentials.
                </h2>
<p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Calendar, tasks, recipes, and more. Everything you need to get started.
                </p>
<div className="text-7xl font-sans font-bold text-white mb-2 tracking-tighter">Free</div>
<div className="text-gray-400 mb-12 text-lg">Forever</div>
<div className="flex flex-col md:flex-row justify-center gap-4">
<button className="bg-[#FCA564] text-[#1C1917] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#ffb076] transition-colors w-full md:w-auto">
                        Get Started Free
                    </button>
<button className="bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-colors w-full md:w-auto">
                        View Premium Plans
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-[#F5F2ED] pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-[#EBE5DE]">
<div className="max-w-7xl mx-auto text-center mb-20">
<h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-[#1C1917] max-w-4xl mx-auto leading-tight">
                Use Nori with your family anywhere, <br/> on any device.
            </h2>
<div className="flex justify-center gap-6 mt-10 opacity-70">
<i className="w-10 h-10 stroke-1" data-lucide="smartphone"></i>
<i className="w-10 h-10 stroke-1" data-lucide="tablet"></i>
<i className="w-10 h-10 stroke-1" data-lucide="monitor"></i>
</div>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-[#1C1917]/10 pt-16">
<div className="col-span-2 md:col-span-1">
<a className="text-3xl font-bold tracking-tighter text-nori-dark block mb-6" href="#">nori</a>
<p className="text-gray-500 text-lg">Making family life simply better.</p>
</div>
<div>
<h4 className="font-bold text-[#1C1917] mb-6">Product</h4>
<ul className="space-y-4 text-gray-500 text-lg">
<li><a className="hover:text-[#FCA564] transition-colors" href="#">Features</a></li>
<li><a className="hover:text-[#FCA564] transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-[#FCA564] transition-colors" href="#">Download</a></li>
<li><a className="hover:text-[#FCA564] transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-[#1C1917] mb-6">Company</h4>
<ul className="space-y-4 text-gray-500 text-lg">
<li><a className="hover:text-[#FCA564] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#FCA564] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#FCA564] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#FCA564] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-[#1C1917] mb-6">Legal</h4>
<ul className="space-y-4 text-gray-500 text-lg">
<li><a className="hover:text-[#FCA564] transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-[#FCA564] transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 text-center text-gray-400 text-sm">
            © 2024 Nori Inc. All rights reserved.
        </div>
</footer>


    </>
  );
}
