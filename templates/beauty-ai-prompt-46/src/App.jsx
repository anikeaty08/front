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
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
800: '#292524',
900: '#1c1917',
},
rose: {
50: '#fff1f2',
100: '#ffe4e6',
900: '#881337',
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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-stone-100">
<div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-serif text-xl tracking-tight font-medium text-stone-900">LUMIÈRE</span>
<span className="text-[10px] uppercase tracking-widest text-stone-400 border border-stone-200 px-1.5 py-0.5 rounded-full">Beta</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-stone-500 uppercase">
<a className="hover:text-stone-900 transition-colors" href="#start">Start Here</a>
<a className="hover:text-stone-900 transition-colors" href="#social">Social</a>
<a className="hover:text-stone-900 transition-colors" href="#email">Email</a>
<a className="bg-stone-900 text-stone-50 px-4 py-2 rounded-full hover:bg-stone-800 transition-colors" href="#">Download PDF</a>
</div>
<button className="md:hidden text-stone-900">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>
</nav>

<main className="max-w-4xl mx-auto pt-24 pb-24 px-6 md:px-12 flex flex-col gap-12">

<header className="relative bg-white rounded-[2rem] p-12 md:p-20 overflow-hidden shadow-[0_2px_40px_-12px_rgba(0,0,0,0.06)] border border-stone-100 text-center flex flex-col items-center justify-center gap-6 min-h-[60vh]">

<div className="absolute inset-0 bg-gradient-to-tr from-rose-50/50 via-stone-50/20 to-white z-0"></div>
<div className="absolute -top-24 -right-24 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-40"></div>
<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-stone-200 rounded-full blur-3xl opacity-30"></div>
<div className="relative z-10 flex flex-col items-center gap-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-stone-200 backdrop-blur-sm">
<span className="iconify text-rose-900" data-icon="lucide:sparkles" data-width="14"></span>
<span className="text-[10px] uppercase tracking-widest font-medium text-stone-500">The Founder's Edition</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter text-stone-900 leading-[0.9]">
                    The Beauty<br/>
<span className="italic font-light text-stone-400">AI Suite</span>
</h1>
<p className="max-w-md text-stone-500 font-light text-sm md:text-base leading-relaxed mt-4">
                    A curated collection of 150+ high-conversion prompts designed for estheticians, skincare brands, and wellness creators to elevate their digital presence.
                </p>
</div>
<div className="relative z-10 mt-8 flex flex-col md:flex-row gap-4 w-full md:w-auto">
<button className="group flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-3.5 rounded-xl hover:bg-stone-800 transition-all shadow-lg shadow-stone-200/50">
<span className="text-xs font-medium tracking-wide uppercase">Start Creating</span>
<span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</header>

<section className="grid grid-cols-1 md:grid-cols-3 gap-6" id="start">
<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col gap-4 group hover:border-rose-100 transition-colors">
<div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 group-hover:bg-rose-50 group-hover:text-rose-900 transition-colors">
<span className="iconify" data-icon="lucide:copy" data-width="18"></span>
</div>
<div>
<h3 className="font-serif text-lg text-stone-900 mb-2">1. Select</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed">Browse the categories below to find the specific content need for your brand today.</p>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col gap-4 group hover:border-rose-100 transition-colors">
<div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 group-hover:bg-rose-50 group-hover:text-rose-900 transition-colors">
<span className="iconify" data-icon="lucide:edit-3" data-width="18"></span>
</div>
<div>
<h3 className="font-serif text-lg text-stone-900 mb-2">2. Customize</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed">Paste into ChatGPT or Claude. Fill in the [brackets] with your specific service details.</p>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col gap-4 group hover:border-rose-100 transition-colors">
<div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 group-hover:bg-rose-50 group-hover:text-rose-900 transition-colors">
<span className="iconify" data-icon="lucide:send" data-width="18"></span>
</div>
<div>
<h3 className="font-serif text-lg text-stone-900 mb-2">3. Publish</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed">Review the output for your tone of voice, copy the final result, and post.</p>
</div>
</div>
</section>

<div className="flex items-center gap-4 py-8">
<div className="h-px bg-stone-200 flex-1"></div>
<span className="font-serif italic text-stone-400 text-lg">Chapter One</span>
<div className="h-px bg-stone-200 flex-1"></div>
</div>

<section className="flex flex-col gap-8" id="social">
<div className="flex items-end justify-between">
<div>
<span className="text-[10px] uppercase tracking-widest text-rose-900 font-semibold mb-2 block">Engagement &amp; Growth</span>
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight">Social Media</h2>
</div>
<div className="hidden md:flex gap-2">
<button className="p-2 rounded-full border border-stone-200 hover:bg-stone-50 text-stone-500">
<span className="iconify" data-icon="lucide:grid-2x2" data-width="18"></span>
</button>
<button className="p-2 rounded-full border border-stone-200 hover:bg-stone-50 text-stone-500">
<span className="iconify" data-icon="lucide:list" data-width="18"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white rounded-xl border border-stone-100 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-stone-900"></div>
<div className="flex justify-between items-start mb-4">
<span className="bg-stone-50 text-stone-600 px-2 py-1 rounded text-[10px] uppercase tracking-wide font-medium">Instagram Caption</span>
<button className="text-stone-400 hover:text-rose-900 transition-colors" title="Copy Prompt">
<span className="iconify" data-icon="lucide:copy" data-width="16"></span>
</button>
</div>
<p className="text-xs font-mono text-rose-900/70 mb-3 bg-rose-50/50 inline-block px-2 py-1 rounded">Tone: Educational &amp; Warm</p>
<div className="bg-stone-50 p-4 rounded-lg border border-stone-100 text-sm text-stone-600 font-light leading-relaxed font-sans">
                        "Act as a social media manager for a luxury skincare clinic. Write an engaging caption about the benefits of <span className="text-rose-900 font-medium">[insert treatment, e.g., Microneedling]</span>. Address common fears about pain or downtime, and end with a soft call-to-action to DM for a consultation."
                    </div>
</div>

<div className="bg-white rounded-xl border border-stone-100 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-stone-200"></div>
<div className="flex justify-between items-start mb-4">
<span className="bg-stone-50 text-stone-600 px-2 py-1 rounded text-[10px] uppercase tracking-wide font-medium">Reels Hook</span>
<button className="text-stone-400 hover:text-rose-900 transition-colors" title="Copy Prompt">
<span className="iconify" data-icon="lucide:copy" data-width="16"></span>
</button>
</div>
<p className="text-xs font-mono text-rose-900/70 mb-3 bg-rose-50/50 inline-block px-2 py-1 rounded">Tone: Trendy &amp; Short</p>
<div className="bg-stone-50 p-4 rounded-lg border border-stone-100 text-sm text-stone-600 font-light leading-relaxed font-sans">
                        "Generate 5 viral-style hooks for an Instagram Reel showcasing a 'Before &amp; After' transformation for <span className="text-rose-900 font-medium">[Service Name]</span>. The hooks should stop the scroll immediately and be under 5 seconds to read."
                    </div>
</div>

<div className="bg-white rounded-xl border border-stone-100 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-stone-200"></div>
<div className="flex justify-between items-start mb-4">
<span className="bg-stone-50 text-stone-600 px-2 py-1 rounded text-[10px] uppercase tracking-wide font-medium">Story Sequence</span>
<button className="text-stone-400 hover:text-rose-900 transition-colors" title="Copy Prompt">
<span className="iconify" data-icon="lucide:copy" data-width="16"></span>
</button>
</div>
<p className="text-xs font-mono text-rose-900/70 mb-3 bg-rose-50/50 inline-block px-2 py-1 rounded">Tone: Personal &amp; Behind-the-scenes</p>
<div className="bg-stone-50 p-4 rounded-lg border border-stone-100 text-sm text-stone-600 font-light leading-relaxed font-sans">
                        "Outline a 3-slide Instagram Story sequence for a 'Day in the Life' of an esthetician. Slide 1 should be morning routine, Slide 2 treatment prep, Slide 3 a client testimonial. Include interactive sticker ideas."
                    </div>
</div>

<div className="bg-white rounded-xl border border-stone-100 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-stone-200"></div>
<div className="flex justify-between items-start mb-4">
<span className="bg-stone-50 text-stone-600 px-2 py-1 rounded text-[10px] uppercase tracking-wide font-medium">Product Launch</span>
<button className="text-stone-400 hover:text-rose-900 transition-colors" title="Copy Prompt">
<span className="iconify" data-icon="lucide:copy" data-width="16"></span>
</button>
</div>
<p className="text-xs font-mono text-rose-900/70 mb-3 bg-rose-50/50 inline-block px-2 py-1 rounded">Tone: Exciting &amp; Exclusive</p>
<div className="bg-stone-50 p-4 rounded-lg border border-stone-100 text-sm text-stone-600 font-light leading-relaxed font-sans">
                        "Write a teaser caption for a new product launch: <span className="text-rose-900 font-medium">[Product Name]</span>. Focus on the key ingredient <span className="text-rose-900 font-medium">[Ingredient]</span> and create a sense of mystery. Tell followers it drops in 24 hours."
                    </div>
</div>
</div>
</section>

<div className="flex items-center gap-4 py-8">
<div className="h-px bg-stone-200 flex-1"></div>
<span className="font-serif italic text-stone-400 text-lg">Chapter Two</span>
<div className="h-px bg-stone-200 flex-1"></div>
</div>

<section className="flex flex-col gap-8" id="email">
<div className="flex items-end justify-between">
<div>
<span className="text-[10px] uppercase tracking-widest text-rose-900 font-semibold mb-2 block">Client Retention</span>
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight">Email &amp; Comms</h2>
</div>
</div>
<div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
<div className="flex-1">
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 bg-white rounded-md shadow-sm text-rose-900">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
</div>
<h3 className="font-serif text-xl text-stone-900">The "Re-engagement" Email</h3>
</div>
<p className="text-sm text-stone-500 font-light mb-6">Perfect for clients who haven't booked in 6+ months.</p>
<div className="bg-white p-5 rounded-lg border border-rose-100 text-sm text-stone-600 font-light leading-relaxed shadow-sm">
                        "Write a gentle, non-pushy email to a beauty client we haven't seen in 6 months. Subject line should be warm. The body should mention that we miss their glow, update them on <span className="text-rose-900 font-medium">[New Service/Update]</span>, and offer a complimentary add-on if they book this week."
                    </div>
</div>
<div className="flex flex-col gap-2 w-full md:w-auto">
<button className="w-full bg-white border border-stone-200 text-stone-600 px-4 py-2 rounded-lg text-xs font-medium hover:bg-stone-50 transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:copy" data-width="14"></span> Copy Prompt
                    </button>
<button className="w-full bg-white border border-stone-200 text-stone-600 px-4 py-2 rounded-lg text-xs font-medium hover:bg-stone-50 transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:star" data-width="14"></span> Save to Favorites
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-4 rounded-lg border border-stone-100 bg-white hover:border-stone-300 transition-all cursor-pointer group flex items-start justify-between">
<div>
<h4 className="font-medium text-sm text-stone-900 mb-1 group-hover:text-rose-900 transition-colors">Monthly Newsletter Intro</h4>
<p className="text-xs text-stone-400 font-light">Seasonal skincare tips &amp; updates.</p>
</div>
<span className="iconify text-stone-300 group-hover:text-stone-900" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
<div className="p-4 rounded-lg border border-stone-100 bg-white hover:border-stone-300 transition-all cursor-pointer group flex items-start justify-between">
<div>
<h4 className="font-medium text-sm text-stone-900 mb-1 group-hover:text-rose-900 transition-colors">Appointment Reminder</h4>
<p className="text-xs text-stone-400 font-light">Friendly policy reminder &amp; excitement.</p>
</div>
<span className="iconify text-stone-300 group-hover:text-stone-900" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
</div>
</section>

<section className="mt-12 py-16 px-8 bg-stone-900 rounded-[2rem] text-center text-stone-50 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-stone-900/90"></div>
<div className="relative z-10 flex flex-col items-center gap-6">
<span className="iconify text-rose-100" data-icon="lucide:crown" data-width="24"></span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight">Unlock the Full Suite</h2>
<p className="text-stone-400 font-light max-w-lg mx-auto text-sm md:text-base">
                     Get access to over 300+ prompts, including Business Strategy, SEO for Beauty Sites, and Client Conflict Resolution scripts.
                 </p>
<button className="bg-rose-50 text-stone-900 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors mt-4 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                     Purchase Full Access - $29
                 </button>
</div>
</section>

<footer className="border-t border-stone-200 pt-12 pb-6 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-400 text-xs font-light">
<div className="flex items-center gap-2">
<span className="font-serif text-lg text-stone-900">LUMIÈRE</span>
<span>© 2023 All Rights Reserved.</span>
</div>
<div className="flex gap-6 uppercase tracking-wide">
<a className="hover:text-stone-900" href="#">Privacy</a>
<a className="hover:text-stone-900" href="#">Terms</a>
<a className="hover:text-stone-900" href="#">Support</a>
</div>
</footer>
</main>

    </>
  );
}
