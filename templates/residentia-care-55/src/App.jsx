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
sans: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
sage: {
50: '#f4f7f5',
100: '#e3ebe6',
200: '#c5d9cd',
300: '#9bbfa9',
400: '#72a084',
500: '#528565',
600: '#3e6a4e',
900: '#1d3126',
},
sand: {
50: '#fdfbf7',
100: '#f7f1e6',
200: '#eee0cc',
300: '#e3cba8',
900: '#4a3b2a',
}
},
backgroundImage: {
'subtle-gradient': 'linear-gradient(to bottom right, #fdfbf7, #f4f7f5)',
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
      

<div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
<div className="hidden md:flex flex-col items-end animate-fade-in">
<div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100 mb-2 text-xs font-medium text-slate-500">
                Talk to a care specialist
            </div>
</div>
<button className="h-14 w-14 bg-sage-600 rounded-full text-white shadow-lg hover:bg-sage-500 transition-all duration-300 flex items-center justify-center group relative overflow-hidden">
<span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="28"></iconify-icon>
<div className="absolute top-3 right-3 w-2.5 h-2.5 bg-green-400 border-2 border-sage-600 rounded-full"></div>
</button>
</div>

<nav className="fixed top-0 w-full z-40 px-6 py-4">
<div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 group-hover:bg-sage-200 transition-colors">
<iconify-icon icon="solar:leaf-linear" width="18"></iconify-icon>
</div>
<span className="font-medium text-slate-800 tracking-tight text-lg">Better Futures</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-sage-600 transition-colors" href="#about">Our Approach</a>
<a className="hover:text-sage-600 transition-colors" href="#services">Services</a>
<a className="hover:text-sage-600 transition-colors" href="#locations">Homes</a>
<a className="hover:text-sage-600 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all shadow-md shadow-slate-200 hover:shadow-lg" href="#referral">
                    Make a Referral
                </a>
<button className="md:hidden p-2 text-slate-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">

<div className="absolute inset-0 -z-10">
<img alt="Sunlit corner of a safe residential home" className="w-full h-full object-cover opacity-30 image-mask-b grayscale-[0.2]" data-ai-prompt="Photorealistic wide shot of a peaceful, sun-drenched living room corner in a modern home. Sage green walls, natural oak furniture, a comfortable cream armchair with a folded textured throw blanket. Soft morning light streaming through linen curtains. No people. Serene atmosphere, 8k resolution, soft focus, minimal aesthetic." src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-sand-50/90 via-sand-50/80 to-sand-50"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-sage-100 shadow-sm text-xs font-medium text-sage-600 mb-6 animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-sage-500"></span>
                Ofsted Rated 'Good' across all homes
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                A place to grow,<br/>
<span className="text-slate-400">a place to belong.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Residential care that prioritizes emotional safety and therapeutic growth. We build pathways to better futures for children with complex needs.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-sage-600 text-white font-medium rounded-full hover:bg-sage-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sage-200" href="#locations">
                    Find a home
                    <iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 font-medium rounded-full hover:bg-slate-50 transition-colors flex items-center justify-center gap-2" href="#contact">
                    Speak to a specialist
                </a>
</div>
</div>

<div className="max-w-5xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-white/50 text-center hover:bg-white/80 transition-colors">
<div className="text-2xl font-semibold text-slate-900 tracking-tight">15+</div>
<div className="text-xs text-slate-500 mt-1">Care Homes</div>
</div>
<div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-white/50 text-center hover:bg-white/80 transition-colors">
<div className="text-2xl font-semibold text-slate-900 tracking-tight">1:1</div>
<div className="text-xs text-slate-500 mt-1">Staff Ratio</div>
</div>
<div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-white/50 text-center hover:bg-white/80 transition-colors">
<div className="text-2xl font-semibold text-slate-900 tracking-tight">24/7</div>
<div className="text-xs text-slate-500 mt-1">Crisis Support</div>
</div>
<div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-white/50 text-center hover:bg-white/80 transition-colors">
<div className="text-2xl font-semibold text-slate-900 tracking-tight">100%</div>
<div className="text-xs text-slate-500 mt-1">Therapeutic Focus</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white border-y border-slate-100" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Not just a placement.<br/>A foundation for life.</h2>
<div className="space-y-6 text-slate-500 leading-relaxed font-light">
<p>
                            We understand that by the time a child reaches us, they have often experienced significant trauma and disruption. Our philosophy is built on "Unconditional Positive Regard."
                        </p>
<p>
                            Better Futures moves beyond basic containment to active therapeutic engagement. Every home is designed to feel like a home—not an institution—with warmth, soft furnishings, and personal spaces that children can make their own.
                        </p>
</div>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-4 p-4 rounded-2xl bg-sage-50 border border-sage-100 hover:border-sage-200 transition-colors">
<div className="bg-sage-200 text-sage-700 p-2 rounded-xl">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Trauma-Informed Care</h3>
<p className="text-xs text-slate-500 mt-1">Our staff are trained in PACE models to support emotional regulation.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl bg-sand-50 border border-sand-100 hover:border-sand-200 transition-colors">
<div className="bg-sand-200 text-sand-800 p-2 rounded-xl">
<iconify-icon icon="solar:book-bookmark-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Education First</h3>
<p className="text-xs text-slate-500 mt-1">Integrated education plans to ensure no child falls behind.</p>
</div>
</div>
</div>
</div>

<div className="relative h-[500px] bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group">
<img alt="Warm bedroom detail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-ai-prompt="Close up interior detail shot of a comforting child's bedroom environment. Soft natural window light falling on a wooden desk with colored pencils and a drawing. A plush teddy bear on a made bed with linen sheets in background. Warm beige, cream and soft green color palette. Photorealistic, cinematic lighting, shallow depth of field. Sense of safety and belonging." src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&amp;w=2057&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
<div className="relative z-10 flex justify-between items-start p-8">
<div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-white text-xs font-medium text-slate-600 shadow-sm">
                            Resident Safety
                        </div>
<div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase shadow-sm">Active</div>
</div>

<div className="relative z-10 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-white/50 max-w-xs self-end m-8 animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
<iconify-icon icon="solar:smile-circle-linear" width="20"></iconify-icon>
</div>
<div>
<div className="h-2 w-20 bg-slate-100 rounded mb-1"></div>
<div className="h-1.5 w-12 bg-slate-100 rounded"></div>
</div>
</div>
<div className="h-1.5 w-full bg-slate-50 rounded mb-2"></div>
<div className="h-1.5 w-2/3 bg-slate-50 rounded"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-sand-50" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
<div className="flex gap-6 items-center max-w-2xl">

<div className="hidden md:block w-32 h-32 rounded-2xl overflow-hidden shrink-0 border border-slate-200 rotate-3 shadow-lg">
<img alt="Support worker and young person walking" className="w-full h-full object-cover" data-ai-prompt="Cinematic shot from behind of a teenager and a support worker walking side by side on a tranquil nature path near a forest. Dappled sunlight filtering through trees. Wearing casual comfortable clothing in earth tones (brown, sage, beige). Soft focus background. Sense of guidance, trust, and moving forward. Photorealistic, natural lighting." src="https://images.unsplash.com/photo-1544654950-fa94a5c54c32?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Holistic Support Services</h2>
<p className="text-slate-500 font-light">Tailored support structures ranging from full residential care to semi-independent living for older teenagers. We focus on the whole person, not just the placement.</p>
</div>
</div>
<a className="text-sm font-medium text-sage-600 hover:text-sage-700 flex items-center gap-1 group" href="#">
                    View full service catalog <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-sage-200 hover:shadow-xl hover:shadow-sage-100/50 transition-all duration-300 cursor-default">
<div className="w-12 h-12 bg-sage-50 rounded-xl flex items-center justify-center text-sage-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Residential Care</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Long-term homes for children aged 8-17. Small, family-style environments with consistent staffing teams to build secure attachments.
                    </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-sage-500" icon="solar:check-circle-linear"></iconify-icon> 3-4 Bed Homes
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-sage-500" icon="solar:check-circle-linear"></iconify-icon> Rural &amp; Semi-Rural
                        </li>
</ul>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-sand-200 hover:shadow-xl hover:shadow-sand-100/50 transition-all duration-300 cursor-default">
<div className="w-12 h-12 bg-sand-50 rounded-xl flex items-center justify-center text-sand-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:key-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Supported Living (16+)</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Preparation for independence. We help young people navigate education, employment, and housing while providing a safety net.
                    </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-sand-500" icon="solar:check-circle-linear"></iconify-icon> Life Skills Training
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-sand-500" icon="solar:check-circle-linear"></iconify-icon> Budgeting &amp; Cooking
                        </li>
</ul>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 cursor-default">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Outreach &amp; Respite</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Supporting families in crisis to prevent breakdown. Short-term stays and community outreach work to stabilize home environments.
                    </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Emergency Placement
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Family Therapy
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-slate-200" id="locations">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Our Communities</h2>
<p className="text-slate-500 max-w-2xl mx-auto font-light">Strategically located in quiet, safe neighborhoods with access to quality local schools and green spaces.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">

<div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm overflow-y-auto">
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Available Homes</h3>
<div className="space-y-3">

<div className="p-4 rounded-2xl bg-sage-50 border border-sage-200 cursor-pointer transition-all hover:bg-sage-100/50 group">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-slate-900">Oakhaven House</h4>
<span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] rounded-full font-bold">1 VACANCY</span>
</div>

<div className="h-24 w-full rounded-lg overflow-hidden mb-3 relative">
<img alt="Oakhaven House Exterior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-ai-prompt="Exterior architectural photography of a welcoming detached brick home in the UK countryside. Soft overcast lighting. Green well-kept garden in front. Peaceful residential street. Modern but homely. No people. 4k resolution, photorealistic." src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-xs text-slate-500 mb-3">Cheshire • 4 Beds • Ages 8-14</p>
<div className="flex items-center gap-2 text-xs text-sage-600 font-medium">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> View details
                            </div>
</div>

<div className="p-4 rounded-2xl bg-white border border-slate-100 hover:border-slate-300 cursor-pointer transition-all">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-slate-900">The Willows</h4>
<span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] rounded-full font-bold">FULL</span>
</div>
<p className="text-xs text-slate-500 mb-3">Lancashire • 3 Beds • Ages 12-17</p>
</div>

<div className="p-4 rounded-2xl bg-white border border-slate-100 hover:border-slate-300 cursor-pointer transition-all">
<div className="flex justify-between items-start mb-2">
<h4 className="font-medium text-slate-900">Riverside Cottage</h4>
<span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] rounded-full font-bold">FULL</span>
</div>
<p className="text-xs text-slate-500 mb-3">Cumbria • 2 Beds • Crisis Support</p>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-[#e8ebee] rounded-3xl relative overflow-hidden border border-slate-200 group">

<div className="absolute inset-0 opacity-40">

<svg height="100%" viewbox="0 0 800 600" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M-100,300 C100,100 300,500 800,200" fill="none" stroke="white" strokeWidth="8"></path>
<path d="M0,500 C200,400 400,600 600,400" fill="none" stroke="white" strokeWidth="8"></path>
<path d="M200,0 C250,200 150,400 300,600" fill="none" stroke="white" strokeWidth="6"></path>
</svg>
</div>

<div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group/pin z-20">
<div className="relative">
<div className="w-12 h-12 bg-sage-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-sage-900/20 z-10 relative">
<iconify-icon icon="solar:home-smile-bold" width="20"></iconify-icon>
</div>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-sage-600 rotate-45 z-0"></div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/20 blur-md rounded-full"></div>

<div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-xl min-w-[140px] text-center opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none">
<span className="text-xs font-bold text-slate-900 block">Oakhaven House</span>
<span className="text-[10px] text-green-600">1 Vacancy</span>
</div>
</div>
</div>
<div className="absolute top-1/2 right-1/3 transform -translate-x-1/2 -translate-y-1/2 opacity-70">
<div className="w-8 h-8 bg-slate-400 rounded-full border-2 border-white shadow-md"></div>
</div>
<div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-70">
<div className="w-8 h-8 bg-slate-400 rounded-full border-2 border-white shadow-md"></div>
</div>

<div className="absolute bottom-6 right-6 flex flex-col gap-2 z-20">
<button className="bg-white p-2 rounded-lg shadow-sm border border-slate-200 text-slate-600 hover:bg-slate-50">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</button>
<button className="bg-white p-2 rounded-lg shadow-sm border border-slate-200 text-slate-600 hover:bg-slate-50">
<iconify-icon icon="solar:minus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-sand-50" id="contact">
<div className="max-w-4xl mx-auto">
<div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sand-100 to-transparent rounded-bl-full opacity-50 pointer-events-none"></div>
<div className="text-center mb-10 relative z-10">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-3">Get in touch</h2>
<p className="text-slate-500">We respond to all enquiries within 2 hours.</p>
</div>

<div className="grid grid-cols-2 gap-2 bg-slate-50 p-1.5 rounded-2xl mb-10 max-w-md mx-auto relative z-10">
<button className="py-2.5 px-4 rounded-xl text-sm font-medium transition-all shadow-sm bg-white text-slate-900 ring-1 ring-slate-200">
                        I am a Social Worker
                    </button>
<button className="py-2.5 px-4 rounded-xl text-sm font-medium text-slate-500 hover:text-slate-700 transition-all">
                        I am a Parent/Guardian
                    </button>
</div>
<form className="space-y-6 relative z-10 max-w-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Full Name</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 transition-all placeholder:text-slate-400 text-sm" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Work Email</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 transition-all placeholder:text-slate-400 text-sm" placeholder="jane@council.gov.uk" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Enquiry Type</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 transition-all text-sm text-slate-600 appearance-none cursor-pointer">
<option>New Referral Placement</option>
<option>Request Statement of Purpose</option>
<option>General Information</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Message (Secure)</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 transition-all placeholder:text-slate-400 text-sm resize-none" placeholder="Please do not include sensitive PII in this initial message..." rows="4"></textarea>
</div>
<div className="flex items-center gap-3 pt-2">
<input className="w-4 h-4 rounded border-slate-300 text-sage-600 focus:ring-sage-500" id="consent" type="checkbox"/>
<label className="text-xs text-slate-500" htmlFor="consent">I consent to my data being processed in accordance with the Privacy Policy.</label>
</div>
<button className="w-full py-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200 flex items-center justify-center gap-2 group" type="button">
                        Send Enquiry
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-sage-100 rounded-full flex items-center justify-center text-sage-600">
<iconify-icon icon="solar:leaf-linear" width="14"></iconify-icon>
</div>
<span className="font-medium text-slate-800 tracking-tight">Better Futures</span>
</div>
<p className="text-xs text-slate-400 leading-relaxed">
                        Registered in England &amp; Wales.<br/>
                        Regulated by Ofsted.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-sage-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-sage-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-sage-600 transition-colors" href="#">News &amp; Insights</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Support</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-sage-600 transition-colors" href="#">Parent Guide</a></li>
<li><a className="hover:text-sage-600 transition-colors" href="#">Referral Process</a></li>
<li><a className="hover:text-sage-600 transition-colors" href="#">Safeguarding</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Emergency</h4>
<p className="text-sm text-slate-500 mb-2">24/7 Crisis Line:</p>
<a className="text-lg font-medium text-sage-600 hover:text-sage-700" href="tel:0800123456">0800 123 456</a>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2023 Better Futures Care Ltd.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy</a>
<a className="hover:text-slate-600" href="#">Terms</a>
<a className="hover:text-slate-600" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
