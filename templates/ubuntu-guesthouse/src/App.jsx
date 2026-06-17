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
      

<nav className="w-full py-5 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 sticky top-0 z-50 bg-[#e4e8d6]/90 backdrop-blur-md border-b border-[#202a2d]/5">
<div className="font-['DM_Serif_Display'] text-3xl tracking-tight text-[#202a2d]">UBUNTU</div>
<div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-normal uppercase tracking-widest text-[#202a2d]">
<a className="hover:text-[#202a2d]/60 transition-colors" href="#">Home</a>
<a className="hover:text-[#202a2d]/60 transition-colors" href="#rooms">Rooms</a>
<a className="hover:text-[#202a2d]/60 transition-colors" href="#experiences">Experiences</a>
<a className="hover:text-[#202a2d]/60 transition-colors" href="#about">About</a>
<a className="hover:text-[#202a2d]/60 transition-colors" href="#contact">Contact</a>
</div>
<a className="px-6 py-2 bg-[#202a2d] text-[#e4e8d6] text-sm font-normal uppercase tracking-widest rounded-full hover:bg-[#202a2d]/80 transition-colors duration-300" href="#">
            Book
        </a>
</nav>

<header className="w-full px-2 md:px-4 pb-4">
<div className="relative w-full h-[85vh] rounded-[2.5rem] overflow-hidden group border border-[#202a2d]/10">

<img alt="Ubuntu Guesthouse Exterior with Mountains" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-black/20"></div>

<div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
<h1 className="font-['DM_Serif_Display'] text-[#e4e8d6] text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-6 drop-shadow-sm">
                    Ubuntu means <br/> Humanity
                </h1>
<p className="font-['DM_Serif_Display'] italic text-2xl md:text-4xl text-[#e4e8d6]/90 mb-10 tracking-tight">
                    "I am because we are."
                </p>
<div className="flex flex-col md:flex-row gap-4">
<button className="bg-[#202a2d] text-[#e4e8d6] px-8 py-4 rounded-full font-normal uppercase tracking-widest text-sm hover:bg-[#000000] transition-all flex items-center justify-center gap-3">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="star"></i>
                        Experience Ubuntu
                    </button>
</div>
</div>

<div className="absolute bottom-10 left-10 z-30">
<button className="group/dot flex items-center bg-[#e4e8d6] text-[#202a2d] h-4 w-4 rounded-full overflow-hidden hover:w-auto hover:h-12 hover:px-5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-xl hover:shadow-2xl">
<div className="shrink-0 w-4 h-4 flex items-center justify-center group-hover/dot:w-auto">

<div className="w-2 h-2 bg-[#202a2d] rounded-full group-hover/dot:hidden animate-pulse"></div>

<i className="hidden group-hover/dot:block w-5 h-5 stroke-[1.5]" data-lucide="bike"></i>
</div>
<span className="whitespace-nowrap w-0 opacity-0 group-hover/dot:w-auto group-hover/dot:opacity-100 group-hover/dot:ml-3 transition-all duration-500 delay-75 text-sm uppercase tracking-widest font-semibold">
                        Bike Package
                    </span>
</button>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
<i className="text-[#e4e8d6] w-8 h-8 stroke-[1.5]" data-lucide="arrow-down"></i>
</div>
</div>
</header>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32" id="about">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2 relative">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#202a2d]/10">
<img alt="The Hosts" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -right-8 rotate-[-6deg]">
<p className="font-['Reenie_Beanie'] text-[#202a2d] text-5xl tracking-tight">welcome home</p>
</div>
</div>
<div className="w-full md:w-1/2 space-y-8">
<span className="text-[#202a2d] text-sm font-medium uppercase tracking-widest flex items-center gap-2">
<span className="w-8 h-[1px] bg-[#202a2d]"></span>
                    With Heart for Our Guests
                </span>
<h2 className="font-['DM_Serif_Display'] text-4xl md:text-6xl leading-none tracking-tight text-[#202a2d]">
                    More than just accommodation
                </h2>
<div className="space-y-6 text-xl font-light text-[#202a2d]/80 leading-relaxed font-['IBM_Plex_Sans']">
<p>
                        Since 2013, we have been drawn to South Africa year after year – it has now become our second home. The diversity of this country continues to fascinate us anew.
                    </p>
<p>
                        We want to offer you more than just accommodation. With honest hospitality, sensitivity and an open ear for your needs, we strive to make your stay an unforgettable experience.
                    </p>
</div>
<button className="border border-[#202a2d]/30 px-8 py-3 rounded-full text-sm uppercase tracking-widest text-[#202a2d] hover:bg-[#202a2d] hover:text-[#e4e8d6] transition-colors mt-4 font-normal">
                    About Us
                </button>
</div>
</div>
</section>

<section className="w-full py-24 bg-[#202a2d] text-[#e4e8d6]">
<div className="px-6 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="font-['DM_Serif_Display'] text-[#e4e8d6] text-5xl md:text-7xl tracking-tight leading-[0.9] mb-4">
                    our guesthouse <br/> in pictures
                </h2>
<p className="text-[#e4e8d6]/60 max-w-md font-light text-lg">Experience the beauty and comfort of Ubuntu through our photo gallery.</p>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full border border-[#e4e8d6]/20 flex items-center justify-center hover:bg-[#e4e8d6] hover:text-[#202a2d] transition-all">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 rounded-full border border-[#e4e8d6]/20 flex items-center justify-center hover:bg-[#e4e8d6] hover:text-[#202a2d] transition-all">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-12 pb-12 snap-x snap-mandatory">

<div className="snap-center shrink-0 w-[85vw] md:w-[40vw] aspect-[4/3] rounded-[2rem] overflow-hidden relative group border border-[#e4e8d6]/10">
<img alt="Luxury Bedroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6">
<h3 className="font-['DM_Serif_Display'] text-[#e4e8d6] text-2xl md:text-3xl tracking-tight">Luxury Bedroom</h3>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[40vw] aspect-[4/3] rounded-[2rem] overflow-hidden relative group border border-[#e4e8d6]/10">
<img alt="Pool Area" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6">
<h3 className="font-['DM_Serif_Display'] text-[#e4e8d6] text-2xl md:text-3xl tracking-tight">Pool &amp; Relax</h3>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[40vw] aspect-[4/3] rounded-[2rem] overflow-hidden relative group border border-[#e4e8d6]/10">
<img alt="Common Area" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6">
<h3 className="font-['DM_Serif_Display'] text-[#e4e8d6] text-2xl md:text-3xl tracking-tight">Common Areas</h3>
</div>
</div>
</div>
</section>

<section className="w-full h-[60vh] relative flex items-center justify-center overflow-hidden">
<img alt="South African Landscape" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1523528283115-9bf9b1699245?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#202a2d]/40"></div>
<h2 className="relative z-10 font-['Reenie_Beanie'] text-[#e4e8d6] text-7xl md:text-9xl text-center drop-shadow-lg -rotate-2 tracking-tight">
            South African Dreams
        </h2>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32" id="rooms">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div>
<h2 className="font-['DM_Serif_Display'] text-4xl md:text-5xl text-[#202a2d] tracking-tight leading-tight mb-8">
                    Exclusive Guesthouse in the Heart of Stellenbosch
                </h2>
<p className="text-xl font-light text-[#202a2d]/80 mb-6 font-['IBM_Plex_Sans']">
                    Our stylish guesthouse at 4 Hamman Street is located in a quiet one-way street, right in the center of Stellenbosch – one of the best and safest areas in South Africa.
                </p>
<p className="text-xl font-light text-[#202a2d]/80 mb-10 font-['IBM_Plex_Sans']">
                    Stellenbosch is the beating heart of South Africa's wine culture, where centuries-old vineyards meet modern winemaking excellence.
                </p>
<a className="inline-flex items-center gap-3 px-8 py-3 bg-[#202a2d] text-[#e4e8d6] rounded-full text-sm uppercase tracking-widest hover:bg-[#202a2d]/80 transition-colors font-normal" href="#">
                    View Rooms
                    <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
<div>
<div className="bg-[#202a2d]/5 p-8 md:p-12 rounded-[2rem] border border-[#202a2d]/10 shadow-sm">
<h3 className="font-['DM_Serif_Display'] text-2xl text-[#202a2d] mb-8 tracking-tight">Rooms &amp; Amenities</h3>
<ul className="space-y-4">
<li className="flex gap-4 items-start">
<i className="text-[#202a2d] shrink-0 w-6 h-6 stroke-[1.5] mt-1" data-lucide="bed"></i>
<span className="font-light text-lg text-[#202a2d]/80">Four ground-floor guest rooms with a private outdoor seating area.</span>
</li>
<li className="flex gap-4 items-start">
<i className="text-[#202a2d] shrink-0 w-6 h-6 stroke-[1.5] mt-1" data-lucide="sun"></i>
<span className="font-light text-lg text-[#202a2d]/80">Two first-floor rooms with a private balcony.</span>
</li>
<li className="flex gap-4 items-start">
<i className="text-[#202a2d] shrink-0 w-6 h-6 stroke-[1.5] mt-1" data-lucide="armchair"></i>
<span className="font-light text-lg text-[#202a2d]/80">Custom-made furniture and high-end accessories.</span>
</li>
<li className="flex gap-4 items-start">
<i className="text-[#202a2d] shrink-0 w-6 h-6 stroke-[1.5] mt-1" data-lucide="snowflake"></i>
<span className="font-light text-lg text-[#202a2d]/80">Air-conditioned rooms with modern design.</span>
</li>
<li className="flex gap-4 items-start">
<i className="text-[#202a2d] shrink-0 w-6 h-6 stroke-[1.5] mt-1" data-lucide="wine"></i>
<span className="font-light text-lg text-[#202a2d]/80">Minibar, safe, and flat-screen TV in every room.</span>
</li>
<li className="flex gap-4 items-start">
<i className="text-[#202a2d] shrink-0 w-6 h-6 stroke-[1.5] mt-1" data-lucide="wifi"></i>
<span className="font-light text-lg text-[#202a2d]/80">Non-smoking accommodation with free WI-FI.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#202a2d] text-[#e4e8d6] py-24 md:py-32 rounded-t-[3rem]" id="experiences">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<span className="text-[#e4e8d6] text-sm font-medium uppercase tracking-widest">Discover</span>
<h2 className="font-['DM_Serif_Display'] text-5xl md:text-7xl mt-4 tracking-tight">Unforgettable Experiences</h2>
<p className="mt-4 text-[#e4e8d6]/60 font-light text-xl">Discover the adventures that await beyond your villa</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative border border-[#e4e8d6]/10">
<img alt="MTB" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 bg-[#e4e8d6] text-[#202a2d] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">Exclusive Package</div>
</div>
<h3 className="font-['DM_Serif_Display'] text-2xl mb-2 text-[#e4e8d6] tracking-tight">2 Weeks Mountainbike</h3>
<p className="text-lg text-[#e4e8d6]/60 mb-6 font-light line-clamp-3">
                        Complete mountain biking adventure with guided trails, bike rental, and expert local knowledge.
                    </p>
<span className="text-sm uppercase tracking-widest text-[#e4e8d6] font-medium group-hover:underline decoration-[#e4e8d6] underline-offset-4">✦ More Info ✦</span>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative border border-[#e4e8d6]/10">
<img alt="Wine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 bg-white text-[#202a2d] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">Culinary Journey</div>
</div>
<h3 className="font-['DM_Serif_Display'] text-2xl mb-2 text-[#e4e8d6] tracking-tight">Wine &amp; Culinary</h3>
<p className="text-lg text-[#e4e8d6]/60 mb-6 font-light line-clamp-3">
                        Explore Stellenbosch's world-renowned wine culture with exclusive tastings and gourmet dining.
                    </p>
<span className="text-sm uppercase tracking-widest text-[#e4e8d6] font-medium group-hover:underline decoration-[#e4e8d6] underline-offset-4">✦ More Info ✦</span>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative border border-[#e4e8d6]/10">
<img alt="Safari" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 bg-white text-[#202a2d] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">Adventure Sports</div>
</div>
<h3 className="font-['DM_Serif_Display'] text-2xl mb-2 text-[#e4e8d6] tracking-tight">Sports &amp; Outdoor</h3>
<p className="text-lg text-[#e4e8d6]/60 mb-6 font-light line-clamp-3">
                        From golfing on world-class courses to kitesurfing and wildlife safaris.
                    </p>
<span className="text-sm uppercase tracking-widest text-[#e4e8d6] font-medium group-hover:underline decoration-[#e4e8d6] underline-offset-4">✦ More Info ✦</span>
</div>
</div>

<div className="bg-[#e4e8d6] rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
<div className="relative z-10">
<h2 className="font-['DM_Serif_Display'] text-4xl md:text-6xl text-[#202a2d] mb-6 tracking-tight">Ready to Experience Ubuntu?</h2>
<p className="text-[#202a2d]/80 font-light text-xl mb-10">Book your stay and discover the magic of Stellenbosch</p>
<a className="inline-block bg-[#202a2d] text-[#e4e8d6] px-10 py-4 rounded-full font-normal uppercase tracking-widest text-sm hover:bg-[#000000] transition-all" href="#">
                        View Rooms &amp; Book
                    </a>
</div>

<div className="absolute -top-20 -right-20 w-64 h-64 bg-white/30 rounded-full blur-3xl"></div>
<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
</div>
</div>
</section>

<footer className="w-full px-6 md:px-12 py-16 bg-[#1a2124] text-[#e4e8d6] border-t border-[#333]" id="contact">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-24">
<div className="md:w-1/3">
<span className="font-['DM_Serif_Display'] text-4xl text-[#e4e8d6] tracking-tight">ubuntu</span>
<p className="mt-4 text-[#e4e8d6]/50 font-light text-lg leading-relaxed">
                    Luxury Guesthouse in Stellenbosch.<br/>
                    We didn't just build a guesthouse, we built a home for travelers.
                </p>
</div>
<div className="md:w-1/3 flex gap-16">
<div className="flex flex-col gap-4">
<span className="text-sm font-medium uppercase tracking-widest text-white">Navigation</span>
<a className="text-lg font-light text-[#e4e8d6]/60 hover:text-[#e4e8d6] transition-colors" href="#">Home</a>
<a className="text-lg font-light text-[#e4e8d6]/60 hover:text-[#e4e8d6] transition-colors" href="#">Rooms</a>
<a className="text-lg font-light text-[#e4e8d6]/60 hover:text-[#e4e8d6] transition-colors" href="#">Experiences</a>
<a className="text-lg font-light text-[#e4e8d6]/60 hover:text-[#e4e8d6] transition-colors" href="#">About</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-sm font-medium uppercase tracking-widest text-white">Contact</span>
<p className="text-lg font-light text-[#e4e8d6]/60">
                        4 Hamman Street<br/>
                        Stellenbosch, South Africa
                    </p>
<a className="text-lg font-light text-[#e4e8d6]/60 hover:text-[#e4e8d6] transition-colors" href="mailto:info@ubuntu-guesthouse.co.za">info@ubuntu-guesthouse.co.za</a>
<p className="text-lg font-light text-[#e4e8d6]/60">+27 (0) 21 123 4567</p>
</div>
</div>
<div className="md:w-1/3 flex flex-col justify-between items-start md:items-end">
<div className="flex gap-4">
<a className="text-[#e4e8d6]/60 hover:text-[#e4e8d6] transition-colors" href="#">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="instagram"></i>
</a>
<a className="text-[#e4e8d6]/60 hover:text-[#e4e8d6] transition-colors" href="#">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="facebook"></i>
</a>
</div>
<p className="text-sm text-[#e4e8d6]/30 uppercase tracking-widest mt-8">© 2025 Ubuntu Guesthouse. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
