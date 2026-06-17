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
      

<div className="paper-grain"></div>

<nav className="fixed w-full z-40 top-0 left-0 py-6 px-6 md:px-12 transition-all duration-300 bg-[#FDFCF8]/90 backdrop-blur-sm border-b border-transparent">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<a className="serif text-xl tracking-tighter text-[#2D2A26] uppercase font-medium z-50" href="#">
                Unforgotten
            </a>
<div className="flex items-center gap-8">
<a className="hidden md:block text-sm text-[#5C554B] hover:text-[#2D2A26] transition-colors tracking-wide" href="#">Journal</a>
<a className="hidden md:block text-sm text-[#5C554B] hover:text-[#2D2A26] transition-colors tracking-wide" href="#">Pricing</a>
<a className="text-sm text-[#2D2A26] border-b border-[#2D2A26] pb-0.5 hover:opacity-70 transition-opacity tracking-wide" href="#">Sign In</a>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-6 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover opacity-20 grayscale sepia brightness-110" src="https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8] via-transparent to-[#FDFCF8]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#FDFCF8] via-transparent to-[#FDFCF8]"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 fade-up" style={{animationDelay: '0.2s'}}>
<h1 className="text-6xl md:text-8xl text-[#2D2A26] leading-[0.9] tracking-tight font-light">
                Every life<br/> <span className="italic font-normal text-[#9C8558]">leaves a story.</span>
</h1>
<p className="text-lg md:text-xl text-[#5C554B] max-w-lg mx-auto leading-relaxed font-light">
                Create a space that honors the journey, the moments, and the legacy. A dignified home for memories that endure.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
<a className="group relative px-8 py-3 bg-[#2D2A26] text-[#FDFCF8] text-sm tracking-wide rounded-sm overflow-hidden transition-all hover:bg-[#403C36] hover:shadow-lg hover:shadow-[#2D2A26]/10" href="#">
<span className="relative z-10 font-medium">Create a Tribute</span>
</a>
<a className="group flex items-center gap-2 text-[#5C554B] text-sm hover:text-[#2D2A26] transition-colors" href="#sample">
<span className="border-b border-transparent group-hover:border-[#2D2A26] transition-all pb-0.5">View a Sample Tribute</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="sample">
<div className="max-w-4xl mx-auto">

<div className="bg-[#F5F2EA] p-8 md:p-16 rounded-sm shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-[#EBE5DA] relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-[#D6CEC3]/50"></div>
<div className="grid md:grid-cols-12 gap-12 items-start">

<div className="md:col-span-5 space-y-6">
<div className="w-full aspect-[3/4] overflow-hidden rounded-sm grayscale-[20%] sepia-[10%]">
<img alt="Arjun Mehta" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-2">
<h3 className="text-3xl md:text-4xl text-[#2D2A26] leading-none">Arjun Mehta</h3>
<p className="text-[#5C554B] text-sm tracking-wide uppercase">1956 — 2023</p>
</div>
<div className="flex flex-wrap gap-2 text-xs text-[#82786B]">
<span className="border border-[#D6CEC3] px-3 py-1 rounded-sm">Father</span>
<span className="border border-[#D6CEC3] px-3 py-1 rounded-sm">Mentor</span>
<span className="border border-[#D6CEC3] px-3 py-1 rounded-sm">Marathon Runner</span>
</div>
</div>

<div className="md:col-span-7 space-y-10">
<div className="space-y-4">
<h4 className="font-serif italic text-2xl md:text-3xl text-[#5C554B] leading-tight">
                                "He didn't just run races; he ran towards life with open arms and a quiet smile that warmed us all."
                            </h4>
<p className="text-sm text-[#82786B]">— Priya, Daughter</p>
</div>
<div className="space-y-4">
<p className="text-[#4A453E] leading-loose font-light">
                                Arjun's journey began in the bustling streets of Mumbai, but his heart always belonged to the mountains. A dedicated professor of literature for over 30 years, he taught us that every book, like every person, has a hidden depth waiting to be discovered. His Sunday morning runs were legendary, not for their speed, but for the conversations he sparked along the way.
                            </p>
</div>

<div className="pt-6 border-t border-[#D6CEC3]">
<div className="flex gap-4 items-start">
<span className="font-serif text-lg text-[#2D2A26]">1982</span>
<div>
<p className="text-[#4A453E] text-sm font-medium">Moving to London</p>
<p className="text-[#82786B] text-xs mt-1">Began his fellowship at King's College, marking the start of his international academic career.</p>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3 pt-2">
<div className="aspect-square bg-[#E5E0D6] rounded-sm overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-[#E5E0D6] rounded-sm overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-[#E5E0D6] rounded-sm overflow-hidden flex items-center justify-center border border-[#D6CEC3]">
<span className="serif italic text-[#82786B] text-sm">+24</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FDFCF8]">
<div className="max-w-6xl mx-auto">
<h2 className="text-4xl md:text-5xl text-center mb-20 text-[#2D2A26] font-light">Celebrating a life, <span className="italic text-[#9C8558]">step by step.</span></h2>
<div className="grid md:grid-cols-3 gap-12 md:gap-8">

<div className="group cursor-default">
<div className="h-px w-full bg-[#E5E0D6] mb-6 group-hover:bg-[#9C8558] transition-colors duration-500"></div>
<div className="space-y-3">
<span className="text-xs tracking-widest uppercase text-[#9C8558]">Beginning</span>
<h3 className="text-2xl text-[#2D2A26]">Begin with their story</h3>
<p className="text-[#5C554B] text-sm leading-relaxed font-light">
                            Start with the basics. A name, a date, and a beautifully written obituary or biography that sets the tone for their legacy.
                        </p>
</div>
</div>

<div className="group cursor-default">
<div className="h-px w-full bg-[#E5E0D6] mb-6 group-hover:bg-[#9C8558] transition-colors duration-500"></div>
<div className="space-y-3">
<span className="text-xs tracking-widest uppercase text-[#9C8558]">Curating</span>
<h3 className="text-2xl text-[#2D2A26]">Add moments &amp; milestones</h3>
<p className="text-[#5C554B] text-sm leading-relaxed font-light">
                            Construct a visual timeline. Upload cherished photographs, significant dates, and achievements that defined their path.
                        </p>
</div>
</div>

<div className="group cursor-default">
<div className="h-px w-full bg-[#E5E0D6] mb-6 group-hover:bg-[#9C8558] transition-colors duration-500"></div>
<div className="space-y-3">
<span className="text-xs tracking-widest uppercase text-[#9C8558]">Gathering</span>
<h3 className="text-2xl text-[#2D2A26]">Invite family &amp; friends</h3>
<p className="text-[#5C554B] text-sm leading-relaxed font-light">
                            A tribute is a collective memory. Privately invite loved ones to contribute their own stories, photos, and condolences.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FAF9F6]">
<div className="max-w-5xl mx-auto space-y-24">

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 space-y-6">
<h3 className="text-4xl text-[#2D2A26]">Their Story</h3>
<p className="text-[#5C554B] leading-loose font-light">
                        Move beyond simple dates. Our rich text editor allows you to write a detailed biography with elegant typography. Include chapters of their life, from childhood innocence to the wisdom of later years.
                    </p>
</div>
<div className="order-1 md:order-2 pl-0 md:pl-12">
<div className="p-8 bg-[#FDFCF8] shadow-sm border border-[#EBE5DA] rounded-sm">
<p className="serif text-xl italic text-[#2D2A26] mb-4">Chapter 1: The Early Years</p>
<div className="space-y-2">
<div className="h-2 bg-[#E5E0D6] w-full rounded-full opacity-30"></div>
<div className="h-2 bg-[#E5E0D6] w-11/12 rounded-full opacity-30"></div>
<div className="h-2 bg-[#E5E0D6] w-full rounded-full opacity-30"></div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="pr-0 md:pr-12">
<div className="grid grid-cols-2 gap-4">
<div className="aspect-[4/5] bg-[#EBE5DA] rounded-sm grayscale opacity-80 overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="aspect-[4/5] bg-[#EBE5DA] rounded-sm grayscale opacity-80 mt-8 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1473177027534-53d906e9abcf?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="space-y-6">
<h3 className="text-4xl text-[#2D2A26]">Their Moments</h3>
<p className="text-[#5C554B] leading-loose font-light">
                        Create beautiful, masonry-style photo galleries. No harsh grids, just a flowing stream of visual memories that respect the aspect ratio of your original photographs.
                    </p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 space-y-6">
<h3 className="text-4xl text-[#2D2A26]">Their Journey</h3>
<p className="text-[#5C554B] leading-loose font-light">
                        Map out the significant milestones. From graduations and weddings to career achievements and travel. A vertical timeline connects these points into a cohesive narrative arc.
                    </p>
</div>
<div className="order-1 md:order-2 pl-0 md:pl-12">
<div className="border-l border-[#D6CEC3] pl-8 py-4 space-y-8">
<div>
<span className="text-xs font-bold text-[#9C8558]">1985</span>
<p className="serif text-lg text-[#2D2A26]">First Solo Exhibition</p>
</div>
<div>
<span className="text-xs font-bold text-[#9C8558]">1990</span>
<p className="serif text-lg text-[#2D2A26]">The Move to Paris</p>
</div>
<div>
<span className="text-xs font-bold text-[#9C8558]">1994</span>
<p className="serif text-lg text-[#2D2A26]">Birth of Sarah</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FDFCF8]">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl text-[#2D2A26] mb-4 font-light">Simple, Transparent Pricing</h2>
<p className="text-[#5C554B] mb-12 font-light">Honoring a loved one shouldn't be complicated.</p>
<div className="grid md:grid-cols-2 gap-6 text-left">

<div className="p-8 border border-[#9C8558] bg-[#FDFCF8] rounded-sm relative">
<div className="absolute top-0 right-0 bg-[#9C8558] text-[#FDFCF8] text-[10px] uppercase tracking-widest px-3 py-1 font-medium">Early Access</div>
<h3 className="serif text-2xl text-[#2D2A26] mb-2">Premium Beta</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl text-[#2D2A26] font-light">Free</span>
<span className="text-sm text-[#82786B]">/ for one year</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-[#5C554B]">
<iconify-icon className="text-[#9C8558] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Unlimited photos &amp; stories
                        </li>
<li className="flex items-center gap-3 text-sm text-[#5C554B]">
<iconify-icon className="text-[#9C8558] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Password protection
                        </li>
<li className="flex items-center gap-3 text-sm text-[#5C554B]">
<iconify-icon className="text-[#9C8558] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Invite unlimited contributors
                        </li>
</ul>
<button className="w-full py-3 bg-[#2D2A26] text-[#FDFCF8] text-sm tracking-wide rounded-sm hover:bg-[#403C36] transition-colors">Start for Free</button>
</div>

<div className="p-8 border border-[#EBE5DA] bg-[#FAFAFA] rounded-sm opacity-80">
<h3 className="serif text-2xl text-[#5C554B] mb-2">Standard</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl text-[#5C554B] font-light">₹100</span>
<span className="text-sm text-[#82786B]">/ mo (billed yearly)</span>
</div>
<p className="text-sm text-[#82786B] mb-8 leading-relaxed">
                        After the beta period concludes, a small fee ensures we can maintain the platform ad-free and secure for generations to come.
                    </p>
<button className="w-full py-3 border border-[#D6CEC3] text-[#5C554B] text-sm tracking-wide rounded-sm hover:border-[#9C8558] hover:text-[#2D2A26] transition-colors">Learn More</button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#2D2A26] text-[#FDFCF8] text-center">
<div className="max-w-2xl mx-auto space-y-10">
<iconify-icon className="text-4xl text-[#9C8558] opacity-80" icon="solar:heart-linear"></iconify-icon>
<h2 className="text-5xl md:text-7xl font-serif tracking-tight leading-none">
                Celebrate their life.<br/>
<span className="italic text-[#9C8558] opacity-90">Keep their story alive.</span>
</h2>
<div className="pt-4">
<a className="inline-block px-10 py-4 bg-[#FDFCF8] text-[#2D2A26] text-sm font-medium tracking-wide rounded-sm hover:bg-[#EBE5DA] transition-colors shadow-lg shadow-white/5" href="#">
                    Create a Tribute
                </a>
</div>
<p className="text-xs text-[#82786B] tracking-wide pt-12 uppercase">
                Respectful • Ad-Free • Secure
            </p>
</div>
</section>

<footer className="py-12 px-6 bg-[#252320] text-[#82786B] border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<span className="serif text-lg tracking-tight text-[#ABA59C]">Unforgotten</span>
<div className="flex gap-8 text-xs tracking-wide">
<a className="hover:text-[#D6CEC3] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#D6CEC3] transition-colors" href="#">Terms</a>
<a className="hover:text-[#D6CEC3] transition-colors" href="#">Contact</a>
</div>
<p className="text-xs opacity-50">© 2023 Unforgotten Platform.</p>
</div>
</footer>

    </>
  );
}
