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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="w-full px-6 py-6 max-w-[1400px] mx-auto flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-[#f6d355] flex items-center justify-center text-zinc-900">
<i className="w-5 h-5" data-lucide="dumbbell" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight">Jordan.</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-lg font-medium text-zinc-900" href="#">Home</a>
<a className="text-lg font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About</a>
<a className="text-lg font-medium text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-1" href="#">Pages <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
<a className="text-lg font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Services</a>
</div>
<button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 text-zinc-900 text-lg font-medium hover:border-zinc-300 transition-all">
            Book Consult
            <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center">
<i className="w-3 h-3" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</button>
<button className="md:hidden text-zinc-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</nav>

<section className="px-4 md:px-6 max-w-[1400px] mx-auto pt-4 pb-12">
<div className="relative w-full rounded-[2.5rem] bg-zinc-50 overflow-hidden flex flex-col lg:flex-row items-center min-h-[600px] lg:h-[700px]">

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-40">
<span className="text-[8rem] lg:text-[14rem] font-semibold text-zinc-200 tracking-tighter whitespace-nowrap pl-8">BREATHE BREATHE</span>
</div>
<div className="relative z-10 w-full lg:w-1/2 p-8 md:p-16 lg:pl-20 flex flex-col justify-center h-full">
<span className="text-lg font-medium text-zinc-600 mb-4">Hi, I'm Jordan</span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-zinc-900 leading-[1.1] tracking-tight mb-6">
                    Your <span className="text-[#f6d355]">Inclusive</span><br/>Movement Coach
                </h1>
<p className="text-lg text-zinc-600 max-w-md mb-10 leading-relaxed">
                    Transform your relationship with your body in a safe, affirming space. Personalized movement plans designed for all bodies to build strength and confidence.
                </p>
<div>
<button className="inline-flex items-center gap-3 bg-[#f6d355] text-zinc-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-[#e5c34e] transition-colors">
                        Book a consult
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-zinc-900" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</button>
</div>
</div>
<div className="relative z-10 w-full lg:w-1/2 h-64 lg:h-full mt-8 lg:mt-0">
<img alt="Inclusive fitness coach" className="w-full h-full object-cover object-center lg:rounded-l-[4rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e3443be-b541-4433-8170-61aa17686b6f_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-4 md:px-6 max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 lg:mb-16 gap-6">
<h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-zinc-900 tracking-tight max-w-sm">
                How can I support your journey?
            </h2>
<div className="flex items-center gap-3">
<button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-300 hover:text-zinc-900 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-300 hover:text-zinc-900 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-zinc-50 rounded-[2rem] p-6 flex flex-col">
<div className="mb-6 flex-1">
<h3 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-3">Mindful Movement</h3>
<p className="text-lg text-zinc-600 line-clamp-3">One-on-one coaching focused on listening to your body, building functional strength, and moving joyfully without judgment.</p>
</div>
<div className="relative h-48 w-full rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Mindful Movement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41389ce4-654c-4172-b6ed-2a78dcbf6cff_800w.jpg"/>
<div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
<i className="w-5 h-5 text-zinc-900" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="bg-zinc-50 rounded-[2rem] p-6 flex flex-col">
<div className="mb-6 flex-1">
<h3 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-3">Intuitive Nutrition</h3>
<p className="text-lg text-zinc-600 line-clamp-3">Anti-diet approach to nourishing your body. Learn to trust your hunger cues and find peace with food.</p>
</div>
<div className="relative h-48 w-full rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Intuitive Nutrition" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bed5f08-59e2-4670-a83b-b753c03d981d_800w.jpg"/>
<div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
<i className="w-5 h-5 text-zinc-900" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="bg-zinc-50 rounded-[2rem] p-6 flex flex-col">
<div className="mb-6 flex-1">
<h3 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-3">Virtual Support</h3>
<p className="text-lg text-zinc-600 line-clamp-3">Accessible coaching from the comfort of your own safe space. Regular video check-ins and adaptable programming.</p>
</div>
<div className="relative h-48 w-full rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Virtual Support" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5efc2c7-f60f-4b4c-b45e-87c182a15987_800w.jpg"/>
<div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
<i className="w-5 h-5 text-zinc-900" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="bg-zinc-50 rounded-[2rem] p-6 flex flex-col">
<div className="mb-6 flex-1">
<h3 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-3">Community Group</h3>
<p className="text-lg text-zinc-600 line-clamp-3">Join a supportive, inclusive community of individuals prioritizing holistic wellness and body neutrality.</p>
</div>
<div className="relative h-48 w-full rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Community Group" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d7b10fbe-b65f-44eb-b161-9b9ee2e1d125_800w.jpg"/>
<div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
<i className="w-5 h-5 text-zinc-900" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-20 px-4 md:px-6 max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative h-[600px] rounded-[2.5rem] overflow-hidden">
<img alt="Coach Jordan" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1379f614-17a7-4928-ba1b-1d65f151545d_1600w.jpg"/>
<div className="absolute bottom-8 right-8 bg-zinc-900/90 backdrop-blur-md text-white p-6 rounded-3xl min-w-[200px]">
<span className="block text-5xl font-semibold text-[#f6d355] mb-1">8+</span>
<span className="text-lg text-zinc-200">Years creating<br/>safe spaces</span>
</div>
</div>

<div className="">
<span className="text-lg font-medium text-zinc-500 mb-4 block">Who I Am</span>
<h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-6">
                    Trauma-Informed<br/>Movement Coach
                </h2>
<p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                    My approach strips away diet culture and toxic fitness mentality. We focus on accessible movement, body-neutral coaching, and honoring where your body is today—whether you're healing, building strength, or simply seeking joyful movement.
                </p>
<button className="inline-flex items-center gap-3 bg-[#f6d355] text-zinc-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-[#e5c34e] transition-colors mb-12">
                    Get to know me
                    <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</button>
<div className="space-y-4">
<h4 className="text-xl font-semibold text-zinc-900 mb-4">Certifications &amp; Values</h4>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-[#f6d355] fill-zinc-900" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-700">Certified Trauma-Informed Trainer</span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-[#f6d355] fill-zinc-900" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-700">HAES® (Health at Every Size) Aligned</span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-[#f6d355] fill-zinc-900" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-700">LGBTQ+ Safe Space Provider</span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-[#f6d355] fill-zinc-900" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-700">Holistic Nutrition Specialist</span>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-20 md:px-6 max-w-[1400px] mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="flex flex-col lg:flex-row rounded-[2.5rem] overflow-hidden bg-zinc-50 min-h-[500px]">

<div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
<img alt="Coaching session" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24844cee-0ac0-43a0-826e-8ec0664d9641_800w.webp"/>
<button className="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
<i className="w-6 h-6 text-zinc-900 ml-1" data-lucide="play" strokeWidth="1.5"></i>
</button>
</div>

<div className="w-full lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center relative overflow-hidden">
<div className="absolute bottom-0 right-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.03]">
<span className="text-[10rem] font-semibold text-zinc-900 tracking-tighter whitespace-nowrap pl-8">SUPPORT</span>
</div>
<div className="relative z-10">
<i className="w-12 h-12 text-[#f6d355] mb-8" data-lucide="quote" strokeWidth="1.5"></i>
<h3 className="text-3xl lg:text-4xl font-semibold text-zinc-900 tracking-tight leading-snug mb-8">
                        Creating a safe space for your body to thrive and heal is my ultimate mission.
                    </h3>
<div className="flex items-center gap-4">
<div className="w-12 h-px bg-zinc-300"></div>
<span className="text-lg font-medium text-zinc-600">Jordan River</span>
</div>
<div className="mt-12 flex items-center gap-4">
<span className="text-lg text-zinc-500">Connect:</span>
<div className="flex gap-2">
<a className="w-10 h-10 rounded-lg bg-zinc-200 flex items-center justify-center hover:bg-[#f6d355] hover:text-zinc-900 transition-colors text-zinc-600" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-lg bg-zinc-200 flex items-center justify-center hover:bg-[#f6d355] hover:text-zinc-900 transition-colors text-zinc-600" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-lg bg-zinc-200 flex items-center justify-center hover:bg-[#f6d355] hover:text-zinc-900 transition-colors text-zinc-600" href="#">
<i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-4 md:px-6 max-w-[1400px] mx-auto overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="max-w-xl">
<h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-12">
                    Stories from the community
                </h2>
<div className="flex gap-1 mb-6">
<i className="w-6 h-6 text-[#f6d355] fill-[#f6d355]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-[#f6d355] fill-[#f6d355]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-[#f6d355] fill-[#f6d355]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-[#f6d355] fill-[#f6d355]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-[#f6d355] fill-[#f6d355]" data-lucide="star" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-semibold text-zinc-900 mb-4">Reclaimed my strength</h4>
<p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                    "Working with Jordan has completely shifted my perspective. I stopped punishing my body and started honoring it. The affirming environment made all the difference—I feel stronger and more at peace than ever."
                </p>
<span className="text-lg font-medium text-zinc-500 flex items-center gap-2">
<div className="w-6 h-px bg-zinc-400"></div>
                    Alex M.
                </span>
</div>

<div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center">
<div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">

<svg className="absolute inset-0 w-full h-full text-zinc-100" style={{zIndex: '0'}} viewbox="0 0 500 500">
<line stroke="currentColor" strokeWidth="2" x1="250" x2="100" y1="100" y2="250"></line>
<line stroke="currentColor" strokeWidth="2" x1="250" x2="400" y1="100" y2="250"></line>
<line className="" stroke="currentColor" strokeWidth="2" x1="100" x2="250" y1="250" y2="400"></line>
<line stroke="currentColor" strokeWidth="2" x1="400" x2="250" y1="250" y2="400"></line>
<line stroke="currentColor" strokeWidth="2" x1="250" x2="250" y1="100" y2="250"></line>
</svg>

<div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-xl">
<img alt="Client" className="w-20 h-20 object-cover border-[#f6d355] border-4 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a815617a-d93f-48f9-95bd-b6a9be0367ef_320w.jpg"/>
</div>
<div className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 z-10 p-1 bg-white rounded-full shadow-lg">
<img alt="Client" className="w-16 h-16 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92231fa2-7e56-4b09-8a71-2cb0348b7053_320w.jpg"/>
</div>
<div className="absolute top-1/2 right-[20%] translate-x-1/2 -translate-y-1/2 z-10 p-1 bg-white rounded-full shadow-lg">
<img alt="Client" className="w-24 h-24 object-cover rounded-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e085b729-2890-432a-b781-6b136b37320d_320w.jpg"/>
</div>
<div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 translate-y-1/2 z-10 p-1 bg-white rounded-full shadow-lg">
<img alt="Client" className="w-20 h-20 object-cover rounded-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5efc2c7-f60f-4b4c-b45e-87c182a15987_320w.jpg"/>
</div>
<div className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 z-10 p-1 bg-white rounded-full shadow-sm">
<img alt="Client" className="w-12 h-12 object-cover rounded-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4cc9d0c-f441-4bd2-89bb-a8bf8e1b2b88_320w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-4 md:px-6 max-w-[1400px] mx-auto">
<div className="text-center mb-16 lg:mb-24">
<h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-zinc-900 tracking-tight">
                Choose your journey
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

<div className="bg-zinc-50 rounded-[2.5rem] p-8 lg:p-10">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-zinc-900" data-lucide="coffee" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">Discovery Session</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-semibold tracking-tight text-zinc-900">$45</span>
<span className="text-lg text-zinc-500">/session</span>
</div>
<button className="w-full py-4 rounded-full border border-zinc-200 text-lg font-medium text-zinc-900 hover:border-zinc-300 hover:bg-white transition-all mb-10">
                    Book a call
                </button>
<div className="space-y-4">
<span className="text-sm font-medium text-zinc-500 uppercase tracking-wider block mb-4">What's included:</span>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-600">45-minute safe space consultation</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-600">Initial movement assessment</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-600">Goal alignment &amp; boundary setting</span>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-[2.5rem] p-8 lg:p-10 relative shadow-2xl scale-100 md:scale-105 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f6d355] text-zinc-900 text-sm font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                    Most Supported
                </div>
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#f6d355]" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Holistic Coaching Plan</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-semibold tracking-tight text-[#f6d355]">$249</span>
<span className="text-lg text-zinc-400">/month</span>
</div>
<button className="w-full py-4 rounded-full bg-transparent border border-zinc-700 text-lg font-medium text-white hover:bg-zinc-800 transition-all mb-10">
                    Get started
                </button>
<div className="space-y-4">
<span className="text-sm font-medium text-zinc-400 uppercase tracking-wider block mb-4">What's included:</span>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Custom, body-neutral movement plan</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Intuitive nutrition guidance</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Bi-weekly 1:1 video check-ins</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Unlimited text support via secure app</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Access to community safe-space forum</span>
</div>
</div>
</div>

<div className="bg-zinc-50 rounded-[2.5rem] p-8 lg:p-10">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-zinc-900" data-lucide="key" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">Premium 1:1 Mentorship</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-semibold tracking-tight text-zinc-900">$499</span>
<span className="text-lg text-zinc-500">/month</span>
</div>
<button className="w-full py-4 rounded-full border border-zinc-200 text-lg font-medium text-zinc-900 hover:border-zinc-300 hover:bg-white transition-all mb-10">
                    Get started
                </button>
<div className="space-y-4">
<span className="text-sm font-medium text-zinc-500 uppercase tracking-wider block mb-4">What's included:</span>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-600">Weekly 60-min personal coaching calls</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-600">Deep-dive holistic wellness planning</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-600">Real-time form feedback via video</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-600">Priority scheduling &amp; direct access</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-4 md:px-6 max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
<h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-zinc-900 tracking-tight max-w-sm">
                Real bodies, real progress
            </h2>
<button className="inline-flex items-center gap-3 bg-[#f6d355] text-zinc-900 px-6 py-3 rounded-full text-base font-medium hover:bg-[#e5c34e] transition-colors shrink-0">
                View all stories
                <div className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
<div className="h-64 md:h-80 rounded-2xl overflow-hidden">
<img alt="Progress" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71b28805-f1b3-4e86-b644-7db725ebdd78_800w.jpg"/>
</div>
<div className="h-64 md:h-80 rounded-2xl overflow-hidden relative">
<img alt="Progress" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="flex bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4fe84064-1b9e-49b0-aced-02c417321095_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-12 h-12 rounded-full border border-[#f6d355] text-[#f6d355] flex items-center justify-center backdrop-blur-sm bg-zinc-900/20">
<i className="w-6 h-6" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="h-64 md:h-80 rounded-2xl overflow-hidden">
<img alt="Progress" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/137badeb-35a4-4191-8cd6-6cca95ac0b0e_800w.jpg"/>
</div>
<div className="h-64 md:h-80 rounded-2xl overflow-hidden">
<img alt="Progress" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e77c5940-f92b-4eff-9b4a-b236a4a5e4c1_800w.jpg"/>
</div>
<div className="h-64 md:h-80 rounded-2xl overflow-hidden">
<img alt="Progress" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c7141de-5088-48ce-9a03-e7f389bd2920_800w.jpg"/>
</div>
<div className="h-64 md:h-80 rounded-2xl overflow-hidden">
<img alt="Progress" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/271113c8-4c59-4eec-bc11-db827a9931d1_800w.webp"/>
</div>
<div className="h-64 md:h-80 rounded-2xl overflow-hidden">
<img alt="Progress" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ad9c3ed-3012-4959-8f0e-01678119f18e_800w.jpg"/>
</div>
<div className="h-64 md:h-80 rounded-2xl overflow-hidden">
<img alt="Progress" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/089149cb-47bc-4156-9be8-5caf6e9a05fb_800w.jpg"/>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-4 md:px-6 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight text-center mb-12">
            Frequently asked questions
        </h2>
<div className="space-y-4">

<div className="bg-zinc-50 rounded-2xl p-6">
<div className="flex items-center justify-between cursor-pointer mb-4">
<h4 className="text-lg font-medium text-zinc-900">Is this a safe space for LGBTQ+ individuals?</h4>
<i className="w-5 h-5 text-zinc-400" data-lucide="x" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-600 leading-relaxed">
                    Absolutely. Affirming and protecting queer, trans, and gender non-conforming bodies is at the core of my practice. You will be respected, addressed by your correct pronouns, and supported in a judgment-free zone.
                </p>
</div>

<div className="bg-zinc-50 rounded-2xl p-6 flex items-center justify-between cursor-pointer hover:bg-zinc-100 transition-colors">
<h4 className="text-lg font-medium text-zinc-900">Do I need a gym membership?</h4>
<i className="w-5 h-5 text-zinc-400" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="bg-zinc-50 rounded-2xl p-6 flex items-center justify-between cursor-pointer hover:bg-zinc-100 transition-colors">
<h4 className="text-lg font-medium text-zinc-900">What if I have movement limitations or trauma?</h4>
<i className="w-5 h-5 text-zinc-400" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="bg-zinc-50 rounded-2xl p-6 flex items-center justify-between cursor-pointer hover:bg-zinc-100 transition-colors">
<h4 className="text-lg font-medium text-zinc-900">How do we communicate between sessions?</h4>
<i className="w-5 h-5 text-zinc-400" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="bg-zinc-50 rounded-2xl p-6 flex items-center justify-between cursor-pointer hover:bg-zinc-100 transition-colors">
<h4 className="text-lg font-medium text-zinc-900">Are there any long-term commitments?</h4>
<i className="w-5 h-5 text-zinc-400" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</section>

<footer className="bg-zinc-950 text-white py-20 px-4 md:px-6">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="space-y-8">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-[#f6d355] flex items-center justify-center text-zinc-900">
<i className="w-5 h-5" data-lucide="dumbbell" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white">Jordan.</span>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-[#f6d355] shrink-0 mt-1" data-lucide="phone" strokeWidth="1.5"></i>
<div>
<span className="block text-zinc-400 text-sm mb-1">Feel free to call me</span>
<span className="block text-lg font-medium text-zinc-200">(91) 125 879 786</span>
<span className="block text-lg font-medium text-zinc-200">(91) 578 666 333</span>
</div>
</div>
<div className="flex items-start gap-4 pt-2">
<i className="w-6 h-6 text-[#f6d355] shrink-0 mt-1" data-lucide="mail" strokeWidth="1.5"></i>
<div>
<span className="block text-zinc-400 text-sm mb-1">Email me on</span>
<span className="block text-lg font-medium text-zinc-200">hello@jordanmovement.com</span>
</div>
</div>
</div>
</div>

<div className="">
<h4 className="text-lg font-medium text-white mb-6">Page link</h4>
<ul className="space-y-4">
<li className=""><a className="text-lg text-[#f6d355] hover:text-white transition-colors" href="#">Home</a></li>
<li className=""><a className="text-lg text-zinc-400 hover:text-white transition-colors" href="#">About me</a></li>
<li><a className="text-lg text-zinc-400 hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="text-lg text-zinc-400 hover:text-white transition-colors" href="#">Contact me</a></li>
<li><a className="text-lg text-zinc-400 hover:text-white transition-colors" href="#">Blogs</a></li>
</ul>
</div>

<div className="">
<h4 className="text-lg font-medium text-white mb-6">Utility Pages</h4>
<ul className="space-y-4">
<li><a className="text-lg text-zinc-400 hover:text-white transition-colors" href="#">Style Guide</a></li>
<li><a className="text-lg text-zinc-400 hover:text-white transition-colors" href="#">Instructions</a></li>
<li className=""><a className="text-lg text-zinc-400 hover:text-white transition-colors" href="#">Licenses</a></li>
<li className=""><a className="text-lg text-zinc-400 hover:text-white transition-colors" href="#">Changelog</a></li>
<li className=""><a className="text-lg text-zinc-400 hover:text-white transition-colors" href="#">Error 404</a></li>
</ul>
</div>

<div className="">
<h4 className="text-lg font-medium text-white mb-6">Send me a message</h4>
<form className="space-y-4">
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#f6d355] transition-colors" placeholder="Name" type="text"/>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#f6d355] transition-colors" placeholder="Email" type="email"/>
<textarea className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#f6d355] transition-colors resize-none" placeholder="Message" rows="3"></textarea>
<button className="inline-flex items-center gap-2 bg-[#f6d355] text-zinc-900 px-6 py-3 rounded-full text-base font-medium hover:bg-[#e5c34e] transition-colors mt-2" type="button">
                        Send message
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-zinc-900" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</button>
</form>
</div>
</div>
<div className="max-w-[1400px] mx-auto pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-zinc-500 text-sm">Designed carefully for all bodies.</p>
</div>
</footer>


    </>
  );
}
