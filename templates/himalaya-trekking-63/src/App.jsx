import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-lg font-medium tracking-tighter text-white mix-blend-difference z-50" href="#">
                NEPAL.
            </a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-200">
<a className="hover:text-white transition-colors" href="#treks">Destinations</a>
<a className="hover:text-white transition-colors" href="#season">Seasons</a>
<a className="hover:text-white transition-colors" href="#journal">Journal</a>
</div>
<button className="hidden md:flex items-center gap-2 bg-white text-stone-900 px-5 py-2 rounded-full text-xs font-medium hover:bg-stone-100 transition-colors">
                Plan Your Trek
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>

<button className="md:hidden text-white mix-blend-difference">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Himalayas Sunrise" className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=2600&amp;auto=format&amp;fit=crop" style={{animation: 'none'}}/> 
</div>

<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-stone-900/80 z-10"></div>
<div className="absolute inset-0 bg-stone-900/10 z-10"></div>

<div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
<span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-medium text-stone-100 mb-6 backdrop-blur-sm tracking-wide uppercase">
                Explore the Unseen
            </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-tight mb-6">
                Ascend the <br/> <span className="text-stone-300">Himalayas.</span>
</h1>
<p className="text-lg md:text-xl text-stone-200 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Experience the serenity of the world's highest peaks. Curated trekking expeditions designed for the modern explorer.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="bg-white text-stone-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-100 transition-all transform hover:scale-105 flex items-center gap-2" href="#treks">
                    Explore Routes
                    <iconify-icon icon="lucide:compass" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="px-8 py-3 rounded-full text-sm font-medium text-white border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm" href="#">
                    Talk to a Guide
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</header>

<section className="py-12 border-b border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<p className="text-3xl font-medium tracking-tight text-stone-900">8,848m</p>
<p className="text-xs text-stone-500 mt-1 uppercase tracking-wide">Highest Elevation</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl font-medium tracking-tight text-stone-900">12+</p>
<p className="text-xs text-stone-500 mt-1 uppercase tracking-wide">Years Experience</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl font-medium tracking-tight text-stone-900">98%</p>
<p className="text-xs text-stone-500 mt-1 uppercase tracking-wide">Success Rate</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl font-medium tracking-tight text-stone-900">Eco</p>
<p className="text-xs text-stone-500 mt-1 uppercase tracking-wide">Sustainable Travel</p>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="treks">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">Curated Expeditions</h2>
<p className="text-stone-500 max-w-md">Hand-picked routes that offer the perfect balance of challenge, culture, and breathtaking scenery.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-stone-900 hover:text-emerald-700 transition-colors mt-4 md:mt-0" href="#">
                    View all treks <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<img alt="Everest" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-stone-900 text-xs font-medium px-3 py-1 rounded-full">
                            14 Days
                        </div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="mb-4">
<h3 className="text-xl font-medium tracking-tight text-stone-900">Everest Base Camp</h3>
<p className="text-sm text-stone-500 mt-2 line-clamp-2">Walk in the footsteps of legends to the foot of the world's highest peak.</p>
</div>
<div className="flex items-center gap-4 text-xs text-stone-500 mt-auto pt-6 border-t border-stone-100">
<div className="flex items-center gap-1">
<iconify-icon icon="lucide:mountain" strokeWidth="1.5"></iconify-icon> 5,364m
                            </div>
<div className="flex items-center gap-1">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5"></iconify-icon> Challenging
                            </div>
<div className="ml-auto font-medium text-stone-900">$1,450</div>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<img alt="Annapurna" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-stone-900 text-xs font-medium px-3 py-1 rounded-full">
                            12 Days
                        </div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="mb-4">
<h3 className="text-xl font-medium tracking-tight text-stone-900">Annapurna Circuit</h3>
<p className="text-sm text-stone-500 mt-2 line-clamp-2">A classic trek encircling the Annapurna massif, featuring diverse landscapes.</p>
</div>
<div className="flex items-center gap-4 text-xs text-stone-500 mt-auto pt-6 border-t border-stone-100">
<div className="flex items-center gap-1">
<iconify-icon icon="lucide:mountain" strokeWidth="1.5"></iconify-icon> 5,416m
                            </div>
<div className="flex items-center gap-1">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5"></iconify-icon> Moderate
                            </div>
<div className="ml-auto font-medium text-stone-900">$1,200</div>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<img alt="Langtang" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-stone-900 text-xs font-medium px-3 py-1 rounded-full">
                            9 Days
                        </div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="mb-4">
<h3 className="text-xl font-medium tracking-tight text-stone-900">Langtang Valley</h3>
<p className="text-sm text-stone-500 mt-2 line-clamp-2">The valley of glaciers. A shorter, culturally rich trek near Kathmandu.</p>
</div>
<div className="flex items-center gap-4 text-xs text-stone-500 mt-auto pt-6 border-t border-stone-100">
<div className="flex items-center gap-1">
<iconify-icon icon="lucide:mountain" strokeWidth="1.5"></iconify-icon> 4,984m
                            </div>
<div className="flex items-center gap-1">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5"></iconify-icon> Easy/Mod
                            </div>
<div className="ml-auto font-medium text-stone-900">$950</div>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-1 text-sm font-medium text-stone-900 hover:text-emerald-700 transition-colors" href="#">
                    View all treks <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-6">Trekking made clear</h2>
<p className="text-stone-500 mb-8 leading-relaxed">
                        We simplify the grading system so you can choose the adventure that matches your experience level. Our guides ensure safety at every altitude.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 shrink-0">
<iconify-icon icon="lucide:footprints" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Easy to Moderate</h4>
<p className="text-xs text-stone-500 mt-1 leading-normal">Suitable for beginners. 4-6 hours of walking per day below 4,000m.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 shrink-0">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Challenging</h4>
<p className="text-xs text-stone-500 mt-1 leading-normal">For active individuals. Steep terrain, 6-8 hours daily, reaching 5,000m+.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 shrink-0">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Expert Guidance</h4>
<p className="text-xs text-stone-500 mt-1 leading-normal">Certified local Sherpa guides trained in first aid and mountain rescue.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 relative">
<img alt="Hiker" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-stone-900/10"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-stone-100 max-w-xs hidden md:block">
<div className="flex gap-4 items-start">
<div className="text-emerald-600 bg-emerald-50 p-2 rounded-lg">
<iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-900">100% Safety Record</p>
<p className="text-xs text-stone-500 mt-1">Our protocols prioritize acclimatization.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white relative overflow-hidden" id="season">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">When to Go</h2>
<p className="text-stone-400 max-w-lg mx-auto">Timing is everything in the Himalayas. Choose the season that suits your preference for weather and crowds.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl font-medium tracking-tight">Spring</h3>
<span className="text-xs font-medium bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/20">Mar — May</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-stone-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="lucide:flower-2" strokeWidth="1.5"></iconify-icon>
                            Rhodendrons in full bloom
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="lucide:thermometer-sun" strokeWidth="1.5"></iconify-icon>
                            Warmer temperatures
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="lucide:users" strokeWidth="1.5"></iconify-icon>
                            Moderate to busy trails
                        </li>
</ul>
</div>

<div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl font-medium tracking-tight">Autumn</h3>
<span className="text-xs font-medium bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full border border-sky-500/20">Sep — Nov</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-stone-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="lucide:eye" strokeWidth="1.5"></iconify-icon>
                            Crystal clear visibility
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="lucide:cloud-rain" strokeWidth="1.5"></iconify-icon>
                            Post-monsoon freshness
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-400" icon="lucide:calendar-check" strokeWidth="1.5"></iconify-icon>
                            Most popular season
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-medium tracking-tight text-stone-900 mb-12 text-center">Stories from the Trail</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 bg-white rounded-2xl border border-stone-200 shadow-sm">
<div className="flex gap-1 text-emerald-600 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6">"The organization was flawless. From airport pickup to the summit of Kala Patthar, everything felt premium and safe. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-medium text-stone-900">James Miller</p>
<p className="text-xs text-stone-400">UK</p>
</div>
</div>
</div>
<div className="p-8 bg-white rounded-2xl border border-stone-200 shadow-sm">
<div className="flex gap-1 text-emerald-600 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6">"A life-changing experience. The guides were incredibly knowledgeable about the local culture and nature. The Annapurna circuit was breathtaking."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-medium text-stone-900">Sarah Chen</p>
<p className="text-xs text-stone-400">Singapore</p>
</div>
</div>
</div>
<div className="p-8 bg-white rounded-2xl border border-stone-200 shadow-sm">
<div className="flex gap-1 text-emerald-600 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6">"Minimal hassle, maximum adventure. The gear list they provided was spot on. I felt prepared and supported every step of the way."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-medium text-stone-900">Marcus Thorne</p>
<p className="text-xs text-stone-400">Canada</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center">
<div className="max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-stone-900 mb-6">Ready to see the world from above?</h2>
<p className="text-lg text-stone-500 mb-10 font-light">Join us for the upcoming season. Limited slots available for small group expeditions.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-stone-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Plan Your Trek
                </button>
<button className="bg-white text-stone-900 border border-stone-200 px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-50 transition-all">
                    Download Brochure
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-medium tracking-tighter text-stone-900 mb-6 block" href="#">NEPAL.</a>
<p className="text-sm text-stone-500">Premium trekking experiences tailored for the mindful traveler.</p>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Destinations</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Everest Region</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Annapurna Region</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Langtang Region</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Manaslu Circuit</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Our Guides</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Newsletter</h4>
<form className="flex flex-col gap-3">
<input className="bg-stone-50 border border-stone-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-stone-400" placeholder="Email address" type="email"/>
<button className="bg-stone-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>© 2024 Himalaya Trekking Co. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-900" href="#">Privacy</a>
<a className="hover:text-stone-900" href="#">Terms</a>
<a className="hover:text-stone-900" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
