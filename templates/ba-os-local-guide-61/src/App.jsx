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
      

<nav className="fixed w-full z-40 bg-[#F8F9FA]/80 backdrop-blur-md border-b border-gray-200/50">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-[#0A1F1C]" data-lucide="compass"></i>
<span className="font-bold text-[#0A1F1C] tracking-tight text-lg">Baños Local Guide</span>
</div>

<a className="hidden sm:flex bg-[#0A1F1C] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#00E36B] hover:text-[#0A1F1C] transition-colors items-center gap-2" href="https://wa.me/yournumber">
                Book Now
            </a>
</div>
</nav>

<section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 overflow-hidden">
<div className="max-w-6xl mx-auto">
<div className="relative rounded-[2.5rem] overflow-hidden h-[600px] md:h-[700px] group w-full shadow-2xl shadow-black/5">

<img alt="Baños Waterfalls" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>

<div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-center md:text-left">
<div className="max-w-2xl space-y-6">
<div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider w-fit mx-auto md:mx-0">
<span className="w-2 h-2 rounded-full bg-[#00E36B] animate-pulse"></span>
                            Verified Local Expert
                        </div>
<h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] drop-shadow-sm">
                            Explore Baños de <br/> Agua Santa like a Local.
                        </h1>
<p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
                            Skip the tourist traps. Authentic adventures curated by Adrian.
                        </p>
<div className="pt-4">
<a className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#00E36B] text-[#0A1F1C] px-8 py-5 rounded-full font-extrabold text-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(0,227,107,0.4)]" href="https://wa.me/yournumber">
                                Plan My Trip via WhatsApp
                                <i className="w-6 h-6 fill-current" data-lucide="message-circle"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="order-2 md:order-1 space-y-8">
<div>
<h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1F1C] tracking-tight mb-4">
                            Hi, I'm Adrian. <span className="text-gray-400">Not a big agency, just your local friend.</span>
</h2>
<p className="text-lg text-gray-500 leading-relaxed">
                            I grew up hiking these trails and chasing these waterfalls. My goal isn't just to show you Baños, but to make you feel the magic of this place through the eyes of a local.
                        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
<div className="space-y-2">
<div className="w-12 h-12 bg-[#0A1F1C] rounded-2xl flex items-center justify-center text-[#00E36B]">
<i className="w-6 h-6" data-lucide="user-check"></i>
</div>
<h3 className="font-bold text-[#0A1F1C]">100% Personalized</h3>
</div>
<div className="space-y-2">
<div className="w-12 h-12 bg-[#0A1F1C] rounded-2xl flex items-center justify-center text-[#00E36B]">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="font-bold text-[#0A1F1C]">Safety First</h3>
</div>
<div className="space-y-2">
<div className="w-12 h-12 bg-[#0A1F1C] rounded-2xl flex items-center justify-center text-[#00E36B]">
<i className="w-6 h-6" data-lucide="key"></i>
</div>
<h3 className="font-bold text-[#0A1F1C]">Local Secrets</h3>
</div>
</div>
</div>

<div className="order-1 md:order-2 relative">
<div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">

<img alt="Adrian Tour Guide" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
</div>
<div className="text-xs font-bold text-[#0A1F1C]">
                                    500+ Happy <br/>Travelers
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#F8F9FA]">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-extrabold text-[#0A1F1C] tracking-tight mb-4">Choose Your Vibe</h2>
<p className="text-gray-500 text-lg">Every traveler is different. Select the experience that calls to you.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative h-[420px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
<img alt="Baños Swing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-bold text-white mb-2">Adventure &amp; Thrills</h3>
<p className="text-gray-300 text-sm mb-6 line-clamp-2">Swing over the edge of the world and raft down white waters.</p>
<a className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-[#00E36B] hover:text-[#0A1F1C] hover:border-[#00E36B] transition-all w-full justify-center" href="https://wa.me/yournumber?text=I'm%20interested%20in%20Adventure%20Tours">
                            See Adventure Tours <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="group relative h-[420px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
<img alt="Pailon del Diablo" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-bold text-white mb-2">Nature &amp; Exploration</h3>
<p className="text-gray-300 text-sm mb-6 line-clamp-2">Discover the Pailón del Diablo and hidden jungle waterfalls.</p>
<a className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-[#00E36B] hover:text-[#0A1F1C] hover:border-[#00E36B] transition-all w-full justify-center" href="https://wa.me/yournumber?text=I'm%20interested%20in%20Nature%20Tours">
                            See Nature Tours <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="group relative h-[420px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
<img alt="Hot Springs" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-bold text-white mb-2">Chill &amp; Culture</h3>
<p className="text-gray-300 text-sm mb-6 line-clamp-2">Volcanic hot springs, artisan coffee, and local cuisine.</p>
<a className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-[#00E36B] hover:text-[#0A1F1C] hover:border-[#00E36B] transition-all w-full justify-center" href="https://wa.me/yournumber?text=I'm%20interested%20in%20Relax%20Tours">
                            See Relax Options <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 overflow-hidden bg-white">
<div className="max-w-6xl mx-auto px-6 mb-10 flex items-center justify-between">
<h2 className="text-2xl md:text-3xl font-bold text-[#0A1F1C] tracking-tight">Latest Adventures <span className="text-gray-400 font-medium text-lg block md:inline md:ml-2">@banoslocalguide</span></h2>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="flex gap-4 overflow-x-auto snap-x px-6 pb-8 max-w-[1400px] mx-auto">

<div className="snap-center shrink-0 w-[280px] h-[480px] rounded-[2rem] overflow-hidden relative group">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<div className="flex items-center gap-2 text-xs font-bold mb-2"><i className="w-3 h-3" data-lucide="instagram"></i> @sarah_travels</div>
<p className="text-sm font-medium">Best day ever at the Tree House! Thanks Adrian! 🇪🇨</p>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] h-[480px] rounded-[2rem] overflow-hidden relative group">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<div className="flex items-center gap-2 text-xs font-bold mb-2"><i className="w-3 h-3" data-lucide="instagram"></i> @mike_adv</div>
<p className="text-sm font-medium">The waterfalls are insane. Highly recommend the bike tour.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] h-[480px] rounded-[2rem] overflow-hidden relative group">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<div className="flex items-center gap-2 text-xs font-bold mb-2"><i className="w-3 h-3" data-lucide="instagram"></i> @jess_co</div>
<p className="text-sm font-medium">Pailón del Diablo lived up to the hype! 🌧️🌊</p>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] h-[480px] rounded-[2rem] overflow-hidden relative group">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<div className="flex items-center gap-2 text-xs font-bold mb-2"><i className="w-3 h-3" data-lucide="instagram"></i> @tom_hikes</div>
<p className="text-sm font-medium">View from the top of the volcano trek. Unbelievable.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#0A1F1C] text-white">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/10 -z-0"></div>
<div className="relative z-10">
<div className="w-24 h-24 bg-[#0A1F1C] border border-[#00E36B] rounded-full flex items-center justify-center mx-auto mb-6 text-[#00E36B]">
<span className="text-3xl font-extrabold">1</span>
</div>
<h3 className="text-xl font-bold mb-2">Contact &amp; Design</h3>
<p className="text-gray-400 text-sm max-w-xs mx-auto">Send Adrian a WhatsApp message to discuss what you love.</p>
</div>
<div className="relative z-10">
<div className="w-24 h-24 bg-[#0A1F1C] border border-[#00E36B] rounded-full flex items-center justify-center mx-auto mb-6 text-[#00E36B]">
<span className="text-3xl font-extrabold">2</span>
</div>
<h3 className="text-xl font-bold mb-2">Reserve</h3>
<p className="text-gray-400 text-sm max-w-xs mx-auto">Secure your dates with a deposit. Spots are limited.</p>
</div>
<div className="relative z-10">
<div className="w-24 h-24 bg-[#0A1F1C] border border-[#00E36B] rounded-full flex items-center justify-center mx-auto mb-6 text-[#00E36B]">
<span className="text-3xl font-extrabold">3</span>
</div>
<h3 className="text-xl font-bold mb-2">Experience the Magic</h3>
<p className="text-gray-400 text-sm max-w-xs mx-auto">Meet Adrian in Baños and start your adventure.</p>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-3 bg-[#00E36B] text-[#0A1F1C] px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_25px_rgba(0,227,107,0.3)]" href="https://wa.me/yournumber">
                    Start Planning
                    <i className="w-5 h-5" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F9FA]">
<div className="max-w-4xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
<div className="bg-white p-6 rounded-3xl border border-gray-100 text-center">
<i className="w-8 h-8 text-[#00E36B] mx-auto mb-3" data-lucide="cloud-sun"></i>
<h4 className="font-bold text-[#0A1F1C] mb-1">Weather</h4>
<p className="text-sm text-gray-500">15°C – 25°C. Expect rain.</p>
</div>
<div className="bg-white p-6 rounded-3xl border border-gray-100 text-center">
<i className="w-8 h-8 text-[#00E36B] mx-auto mb-3" data-lucide="backpack"></i>
<h4 className="font-bold text-[#0A1F1C] mb-1">Bring</h4>
<p className="text-sm text-gray-500">Rain jacket, comfy shoes.</p>
</div>
<div className="bg-white p-6 rounded-3xl border border-gray-100 text-center">
<i className="w-8 h-8 text-[#00E36B] mx-auto mb-3" data-lucide="map-pin"></i>
<h4 className="font-bold text-[#0A1F1C] mb-1">Meet</h4>
<p className="text-sm text-gray-500">Center of Baños.</p>
</div>
</div>

<h2 className="text-3xl font-extrabold text-[#0A1F1C] tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-3xl border border-gray-100 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
<h4 className="font-bold text-[#0A1F1C] text-lg">Is Adrian a certified guide, and are the tours safe?</h4>
<span className="text-[#00E36B] transition-transform group-open:rotate-180"><i className="w-6 h-6" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 text-gray-500 leading-relaxed">
                        Yes, I am a fully certified national tour guide. Safety is the priority. All equipment for adventure sports is certified and regularly inspected, and I only work with vetted transport partners.
                    </div>
</details>
<details className="group bg-white rounded-3xl border border-gray-100 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
<h4 className="font-bold text-[#0A1F1C] text-lg">How far in advance should I book my tour?</h4>
<span className="text-[#00E36B] transition-transform group-open:rotate-180"><i className="w-6 h-6" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 text-gray-500 leading-relaxed">
                        I recommend booking at least 48-72 hours in advance. As a private service, my calendar fills up quickly, especially during weekends and holidays.
                    </div>
</details>
<details className="group bg-white rounded-3xl border border-gray-100 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
<h4 className="font-bold text-[#0A1F1C] text-lg">What payment methods do you accept?</h4>
<span className="text-[#00E36B] transition-transform group-open:rotate-180"><i className="w-6 h-6" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 text-gray-500 leading-relaxed">
                        A deposit is required to secure your date via PayPal or Western Union. The remaining balance is paid in cash (USD) on the day of the tour.
                    </div>
</details>
<details className="group bg-white rounded-3xl border border-gray-100 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
<h4 className="font-bold text-[#0A1F1C] text-lg">What should I wear or bring?</h4>
<span className="text-[#00E36B] transition-transform group-open:rotate-180"><i className="w-6 h-6" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 text-gray-500 leading-relaxed">
                        Dress in layers! The weather changes fast. Essential items: Rain jacket, comfortable hiking shoes, sunscreen, insect repellent, and a swimsuit if we visit hot springs or waterfalls.
                    </div>
</details>
<details className="group bg-white rounded-3xl border border-gray-100 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
<h4 className="font-bold text-[#0A1F1C] text-lg">What if I need to cancel or weather is bad?</h4>
<span className="text-[#00E36B] transition-transform group-open:rotate-180"><i className="w-6 h-6" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 text-gray-500 leading-relaxed">
                        We offer a full refund if canceled 7 days in advance. If weather conditions are deemed unsafe by the guide, we will offer to reschedule or provide a refund for that portion of the tour.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-gray-100">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col items-center justify-center space-y-8">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-[#0A1F1C]" data-lucide="compass"></i>
<span className="font-bold text-[#0A1F1C] tracking-tight text-lg">Baños Local Guide</span>
</div>
<div className="flex gap-8">
<a className="text-gray-400 hover:text-[#0A1F1C] hover:scale-110 transition-all" href="#"><i className="w-6 h-6" data-lucide="instagram"></i></a>
<a className="text-gray-400 hover:text-[#0A1F1C] hover:scale-110 transition-all" href="#"><i className="w-6 h-6" data-lucide="facebook"></i></a>
<a className="text-gray-400 hover:text-[#0A1F1C] hover:scale-110 transition-all" href="#"><i className="w-6 h-6" data-lucide="youtube"></i></a>
<a className="text-gray-400 hover:text-[#0A1F1C] hover:scale-110 transition-all" href="#"><i className="w-6 h-6" data-lucide="music-2"></i></a> 
</div>
<div className="flex gap-6 text-sm text-gray-500 font-medium">
<a className="hover:text-[#0A1F1C]" href="#">Privacy Policy</a>
<a className="hover:text-[#0A1F1C]" href="#">Terms</a>
</div>
<div className="text-xs text-gray-400">
                    © 2026 Adrian's Adventures. Made with <i className="w-3 h-3 inline text-[#00E36B] fill-current" data-lucide="heart"></i> in Ecuador.
                </div>
</div>
</div>
</footer>

<div className="whatsapp-float">
<div className="online-badge">
            Adrian is Online 👋
        </div>
<a aria-label="Chat on WhatsApp" className="whatsapp-btn" href="https://wa.me/yournumber">
<i className="w-8 h-8 fill-current" data-lucide="message-circle"></i>
</a>
</div>



    </>
  );
}
