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
      

<div className="bg-noise"></div>

<nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center relative z-10">
<a className="font-serif-heading text-2xl tracking-tight text-[#2D2421] uppercase tracking-[-0.05em] flex items-center gap-2" href="#">
<span className="text-[#D06B4A]">N</span>RM
        </a>
<div className="hidden md:flex gap-8 items-center text-sm font-medium text-[#4A3B32]">
<a className="hover:text-[#D06B4A] transition-colors duration-300" href="#">Home</a>
<a className="hover:text-[#D06B4A] transition-colors duration-300" href="#">About</a>
<a className="hover:text-[#D06B4A] transition-colors duration-300" href="#">Watch</a>
<a className="hover:text-[#D06B4A] transition-colors duration-300" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-[#4A3B32] hover:text-[#D06B4A] hidden sm:block transition-colors duration-300" href="#">Give</a>
<a className="bg-[#D06B4A] text-[#FDFBF7] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#B55737] transition-all duration-300 shadow-sm" href="#">
                Join Family
            </a>
</div>
</nav>

<section className="max-w-7xl mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
<div className="lg:col-span-6 flex flex-col items-start text-left order-2 lg:order-1">
<span className="text-[#D06B4A] text-sm font-medium uppercase tracking-widest mb-4 flex items-center gap-2">
<iconify-icon icon="solar:sun-fog-linear" strokeWidth="1.5"></iconify-icon>
                New Royal Ministry
            </span>
<h1 className="font-serif-heading text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#2D2421] leading-[1.1] mb-6">
                Church that feels like home <span className="text-[#D06B4A] italic font-normal block mt-2">wherever you are.</span>
</h1>
<p className="text-lg md:text-xl text-[#4A3B32] mb-10 max-w-lg leading-relaxed">
                A warm, grounded community for Caribbean Christians living abroad. Worship, pray, and grow with a family that understands your roots.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
<a className="w-full sm:w-auto bg-[#D06B4A] text-[#FDFBF7] px-8 py-3.5 rounded-full text-base font-medium hover:bg-[#B55737] transition-all duration-300 shadow-sm text-center" href="#">
                    Join Our Church Family
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 text-[#3A2E2A] text-base font-medium hover:text-[#D06B4A] transition-colors duration-300 group" href="#">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Watch Latest Sermon
                </a>
</div>
</div>
<div className="lg:col-span-6 relative order-1 lg:order-2">
<div className="absolute inset-0 bg-[#E8E1D3] rounded-[2rem] transform rotate-3 scale-[0.98] translate-x-2 translate-y-4 -z-10"></div>
<img alt="Warm community gathering" className="w-full h-[400px] lg:h-[550px] object-cover rounded-[2rem] shadow-sm brightness-95 contrast-125 saturate-50" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<div className="bg-[#F0EBE1] border-y border-[#E8E1D3] relative z-10">
<div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[#3A2E2A]">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#D06B4A]" icon="solar:sun-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-serif-heading font-medium tracking-tight">Every Sunday — 10:00 AM EST</span>
</div>
<span className="hidden sm:block text-[#C8C0B1]">|</span>
<div className="flex items-center gap-2 text-sm text-[#4A3B32]">
<iconify-icon className="text-lg text-[#314F40]" icon="solar:tv-linear" strokeWidth="1.5"></iconify-icon>
<span>Watch live or catch the replay anytime.</span>
</div>
</div>
</div>

<section className="py-24 lg:py-32 bg-[#F9F6F0] relative z-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative">
<div className="aspect-[4/5] w-full max-w-md mx-auto relative rounded-[2.5rem] overflow-hidden">
<img alt="Pastor portrait" className="w-full h-full object-cover saturate-[0.85] sepia-[0.1]" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2D2421]/60 to-transparent mix-blend-multiply"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-[#314F40] text-[#FDFBF7] p-6 rounded-3xl rounded-tr-none shadow-sm hidden md:block">
<iconify-icon className="text-3xl mb-2 text-[#D1A741]" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-xs font-medium uppercase tracking-widest opacity-90">Deep Roots</p>
</div>
</div>
<div>
<h2 className="font-serif-heading text-4xl md:text-5xl font-medium tracking-tight text-[#2D2421] mb-6 leading-tight">
                    A Pastor Who Understands Where You Come From.
                </h2>
<div className="space-y-5 text-base text-[#4A3B32] leading-relaxed mb-8">
<p>
                        Pastor David grew up in the warm breeze of Jamaica before moving abroad. He knows exactly what it feels like to miss home—the food, the culture, and especially the way we worship.
                    </p>
<p>
                        He built New Royal Ministry with a simple prayer: that no Caribbean Christian abroad would ever have to worship alone. Whether you're in London, Toronto, or New York, this is a place where you are known, loved, and prayed for by name.
                    </p>
<p className="italic text-[#3A2E2A]">
                        "We aren't just building a congregation. We're gathering a family."
                    </p>
</div>
<a className="inline-flex items-center gap-2 text-[#D06B4A] font-medium text-base hover:text-[#B55737] transition-colors duration-300 group" href="#">
                    Read Our Full Story
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#FDFBF7] relative z-10 border-t border-[#E8E1D3]/50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif-heading text-4xl md:text-5xl font-medium tracking-tight text-[#2D2421] mb-4">
                    What Sunday Feels Like
                </h2>
<p className="text-base text-[#4A3B32]">
                    No pretense, no performances. Just honest worship and real connection.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-[#F9F6F0] p-8 rounded-[2rem] border border-[#E8E1D3]/80 shadow-[0_4px_20px_-10px_rgba(45,36,33,0.05)] hover:-translate-y-1 transition-transform duration-300">
<div className="w-14 h-14 rounded-2xl bg-[#E8A28E]/20 flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-[#D06B4A]" icon="solar:music-notes-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif-heading text-2xl font-medium tracking-tight text-[#2D2421] mb-3">Caribbean Worship</h3>
<p className="text-sm text-[#4A3B32] leading-relaxed">
                        The preaching, the music, the unmistakable energy you grew up with. Authentic and spirit-led, bringing the warmth of the islands to wherever you are.
                    </p>
</div>

<div className="bg-[#F9F6F0] p-8 rounded-[2rem] border border-[#E8E1D3]/80 shadow-[0_4px_20px_-10px_rgba(45,36,33,0.05)] hover:-translate-y-1 transition-transform duration-300">
<div className="w-14 h-14 rounded-2xl bg-[#314F40]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-[#314F40]" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif-heading text-2xl font-medium tracking-tight text-[#2D2421] mb-3">A Family, Not an Audience</h3>
<p className="text-sm text-[#4A3B32] leading-relaxed">
                        You won't get lost in the crowd here. We are a deeply relational community that calls you by name, celebrates your wins, and prays for you personally.
                    </p>
</div>

<div className="bg-[#F9F6F0] p-8 rounded-[2rem] border border-[#E8E1D3]/80 shadow-[0_4px_20px_-10px_rgba(45,36,33,0.05)] hover:-translate-y-1 transition-transform duration-300">
<div className="w-14 h-14 rounded-2xl bg-[#D1A741]/20 flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-[#A6802B]" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif-heading text-2xl font-medium tracking-tight text-[#2D2421] mb-3">Come As You Are</h3>
<p className="text-sm text-[#4A3B32] leading-relaxed">
                        Whether you've been faithful your whole life or you've been away for a long time, there's a seat at the table for you. No judgment, just grace.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#EAECE7] relative z-10">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-4 flex flex-col items-start">
<span className="text-[#314F40] text-sm font-medium uppercase tracking-widest mb-3 flex items-center gap-2">
<iconify-icon icon="solar:record-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Latest Message
                </span>
<h2 className="font-serif-heading text-4xl font-medium tracking-tight text-[#2D2421] mb-4">
                    Finding Peace in Strange Lands
                </h2>
<p className="text-sm text-[#4A3B32] mb-6 opacity-80">Preached on October 15, 2023</p>
<p className="text-base text-[#4A3B32] mb-8 leading-relaxed">
                    When we feel disconnected from our roots, it's easy to feel disconnected from God. Join Pastor David as he explores how to anchor your faith when everything around you feels unfamiliar.
                </p>
<a className="bg-[#314F40] text-[#FDFBF7] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#233A2D] transition-all duration-300 shadow-sm flex items-center gap-2" href="#">
                    Watch More Sermons
                    <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="lg:col-span-8 relative">

<div className="aspect-video w-full bg-[#2D2421] rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-sm">
<img alt="Sermon thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500 saturate-50 sepia-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-[#FDFBF7]/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#FDFBF7]/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-4xl text-[#FDFBF7] ml-2" icon="solar:play-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#314F40] relative z-10 overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-[#233A2D] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="font-serif-heading text-3xl md:text-4xl font-medium tracking-tight text-[#FDFBF7] mb-4">
                Stay Connected With Your Church Family
            </h2>
<p className="text-base text-[#EAECE7] mb-10 leading-relaxed max-w-xl mx-auto opacity-90">
                Weekly encouragement, prayer, and updates from Pastor David — sent straight to your inbox like a letter from home.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
<input className="flex-1 bg-[#FDFBF7]/10 border border-[#FDFBF7]/20 rounded-full px-6 py-3.5 text-[#FDFBF7] placeholder:text-[#EAECE7]/60 focus:outline-none focus:ring-2 focus:ring-[#D1A741]/50 focus:border-transparent text-sm" placeholder="Your email address" type="email"/>
<button className="bg-[#D1A741] text-[#2D2421] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#C29A3A] transition-colors duration-300 shadow-sm whitespace-nowrap" type="submit">
                    Join the Family
                </button>
</form>
<p className="text-xs text-[#EAECE7]/50 mt-4">We respect your inbox. No spam, just family updates.</p>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#4A3B32] relative z-10">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-5xl text-[#D06B4A] mb-6" icon="solar:hand-heart-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="font-serif-heading text-4xl md:text-5xl font-medium tracking-tight text-[#FDFBF7] mb-6">
                Sow Into the Ministry
            </h2>
<p className="text-base md:text-lg text-[#E8E1D3] mb-10 leading-relaxed max-w-2xl mx-auto opacity-90">
                Your generosity keeps this church alive and helps us reach Caribbean Christians across the world. Every gift — no matter the size — builds something lasting and supports our community outreach.
            </p>
<a className="inline-block bg-[#D06B4A] text-[#FDFBF7] px-10 py-4 rounded-full text-base font-medium hover:bg-[#B55737] transition-all duration-300 shadow-sm mb-4" href="#">
                Give Now
            </a>
<div className="flex items-center justify-center gap-2 text-xs text-[#E8E1D3]/60">
<iconify-icon icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
<span>All giving is secure and encrypted.</span>
</div>
</div>
</section>

<footer className="bg-[#2D2421] pt-20 pb-10 relative z-10 border-t border-[#1A1412]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="md:col-span-2">
<a className="font-serif-heading text-3xl tracking-tight text-[#FDFBF7] uppercase tracking-[-0.05em] flex items-center gap-2 mb-4" href="#">
<span className="text-[#D1A741]">N</span>RM
                    </a>
<p className="text-sm text-[#C8C0B1] mb-6 max-w-sm leading-relaxed">
                        Rescuing Souls for Christ. A church that feels like home, bringing the warmth of the Caribbean to the global diaspora.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-[#4A3B32] flex items-center justify-center text-[#FDFBF7] hover:bg-[#D06B4A] transition-colors duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:play-stream-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#4A3B32] flex items-center justify-center text-[#FDFBF7] hover:bg-[#D06B4A] transition-colors duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-serif-heading text-lg font-medium text-[#FDFBF7] mb-5 tracking-tight">Quick Links</h4>
<ul className="space-y-3 text-sm text-[#C8C0B1]">
<li><a className="hover:text-[#D1A741] transition-colors" href="#">Home</a></li>
<li><a className="hover:text-[#D1A741] transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-[#D1A741] transition-colors" href="#">Watch Live</a></li>
<li><a className="hover:text-[#D1A741] transition-colors" href="#">Sermon Archive</a></li>
<li><a className="hover:text-[#D1A741] transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-serif-heading text-lg font-medium text-[#FDFBF7] mb-5 tracking-tight">Support</h4>
<ul className="space-y-3 text-sm text-[#C8C0B1]">
<li><a className="hover:text-[#D1A741] transition-colors" href="#">Give Online</a></li>
<li><a className="hover:text-[#D1A741] transition-colors" href="#">Request Prayer</a></li>
<li><a className="hover:text-[#D1A741] transition-colors" href="#">Join a Small Group</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[#4A3B32]/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#C8C0B1]/60">
<p>© 2023 New Royal Ministry. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-[#FDFBF7] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#FDFBF7] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
