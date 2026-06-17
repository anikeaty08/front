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
      
document.addEventListener('DOMContentLoaded', () => {
// Initialize Lucide Icons
lucide.createIcons();
// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
menu.classList.toggle('hidden');
});
// Smooth Scroll Reveal
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = '1';
entry.target.style.transform = 'translateY(0)';
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => {
el.style.opacity = '0';
el.style.transform = 'translateY(2rem)';
el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
observer.observe(el);
});
});



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
      

<nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#d8e6df]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center" href="#">
<img alt="Super Putt - Never Leave It Short" className="h-14 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</a>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-[#5a5a5a]">
<a className="hover:text-[#1a1a1a] transition-colors" href="#the-idea">
            The Idea
          </a>
<a className="hover:text-[#1a1a1a] transition-colors" href="#how-it-works">
            How It Works
          </a>
<a className="hover:text-[#1a1a1a] transition-colors" href="#venues">
            For Venues
          </a>
<a className="hover:text-[#1a1a1a] transition-colors" href="#corporate-events">
            Corporate Events
          </a>
<a className="hover:text-[#1a1a1a] transition-colors" href="#competition">
            Competition
          </a>
<a className="hover:text-[#1a1a1a] transition-colors" href="#about">
            About
          </a>
</div>
<div className="hidden md:flex">
<a className="bg-[#1a5c38] hover:bg-[#134429] text-white text-base font-normal px-5 py-2.5 rounded-full transition-colors" href="#contact">
            Book a Demo
          </a>
</div>
<button className="md:hidden text-[#1a1a1a] p-2" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>

<div className="hidden md:hidden bg-white border-b border-[#d8e6df] px-6 py-4 space-y-4" id="mobile-menu">
<a className="block text-base font-normal text-[#5a5a5a]" href="#the-idea">
          The Idea
        </a>
<a className="block text-base font-normal text-[#5a5a5a]" href="#how-it-works">
          How It Works
        </a>
<a className="block text-base font-normal text-[#5a5a5a]" href="#venues">
          For Venues
        </a>
<a className="block text-base font-normal text-[#5a5a5a]" href="#corporate-events">
          Corporate Events
        </a>
<a className="block text-base font-normal text-[#5a5a5a]" href="#competition">
          Competition
        </a>
<a className="block text-base font-normal text-[#5a5a5a]" href="#about">
          About
        </a>
<a className="block text-base font-normal text-[#1a5c38] pt-2 border-t border-[#d8e6df]" href="#contact">
          Book a Demo
        </a>
</div>
</nav>

<section className="pt-36 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal space-y-8">
<div className="inline-flex items-center gap-2 bg-[#edf7f1] text-[#1a5c38] text-sm font-normal px-4 py-1.5 rounded-full">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
            Developed in Canberra, Australia
          </div>
<h1 className="font-['Playfair_Display'] text-5xl lg:text-6xl tracking-tight font-medium text-[#1a1a1a] leading-tight">
            Never Leave It
            <span className="text-[#1a5c38]">Short.</span>
</h1>
<p className="text-xl text-[#5a5a5a] max-w-lg leading-relaxed font-normal">
            Super Putt is a pressure-based putting experience where every single
            putt matters — and hesitation costs you.
          </p>
<div className="bg-[#edf7f1] p-6 rounded-2xl border border-[#d8e6df] space-y-4">
<h3 className="font-normal text-[#1a1a1a] text-base tracking-wide uppercase">
              Two Simple Rules
            </h3>
<div className="space-y-3">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-[#1a5c38] text-sm font-normal flex items-center justify-center border border-[#d8e6df] shadow-sm mt-0.5">
                  1
                </div>
<p className="text-base font-normal">
                  If the first putt doesn't go in for birdie/eagle, then the
                  ball must pass the hole.
                </p>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-[#1a5c38] text-sm font-normal flex items-center justify-center border border-[#d8e6df] shadow-sm mt-0.5">
                  2
                </div>
<p className="text-base font-normal">
                  If it passes the hole, the second putt must go in.
                </p>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="bg-[#1a5c38] hover:bg-[#134429] text-white text-lg font-normal px-6 py-3 rounded-full transition-colors flex items-center gap-2" href="#contact">
              Book a Demo
            </a>
<a className="bg-white border border-[#d8e6df] hover:border-[#1a1a1a] text-[#1a1a1a] text-lg font-normal px-6 py-3 rounded-full transition-colors" href="#how-it-works">
              Learn More
            </a>
</div>
</div>
<div className="reveal lg:pl-10 relative">
<div className="absolute -inset-4 bg-[#edf7f1] rounded-full blur-3xl opacity-50 -z-10"></div>
<div className="bg-gradient-to-br from-[#1a5c38] to-[#2e8b57] rounded-3xl p-8 shadow-2xl text-white flex flex-col h-full">
<h3 className="font-['Playfair_Display'] text-2xl tracking-tight font-normal mb-6">
              How Each Hole Plays Out
            </h3>
<div className="space-y-4 flex-grow">

<div className="bg-white/10 border border-white/20 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="p-2 bg-white/20 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-normal text-base">Hole first putt</p>
</div>
</div>
<span className="bg-green-500/20 text-green-100 border border-green-500/30 text-sm px-2.5 py-1 rounded-full whitespace-nowrap font-normal">
                  Birdie -1 or eagle -2 (holes 4 and 10)
                </span>
</div>

<div className="bg-white/10 border border-white/20 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="p-2 bg-white/20 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="flag" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-normal text-base">
                      Putt stops short of the hole
                    </p>
</div>
</div>
<span className="bg-amber-800/60 text-amber-100 border border-amber-800/50 text-sm px-2.5 py-1 rounded-full whitespace-nowrap font-normal">
                  Mistake +1
                </span>
</div>

<div className="bg-white/10 border border-white/20 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="p-2 bg-white/20 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-normal text-base">
                      Putt rolls past the hole
                    </p>
<p className="text-sm text-white/70">
                      You must hole the next one
                    </p>
</div>
</div>
<span className="bg-amber-500/20 text-amber-100 border border-amber-500/30 text-sm px-2.5 py-1 rounded-full whitespace-nowrap font-normal">
                  Pressure
                </span>
</div>

<div className="bg-white/10 border border-white/20 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="p-2 bg-white/20 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-normal text-base">Putt holes out</p>
<p className="text-sm text-white/70">Perfect execution</p>
</div>
</div>
<span className="bg-white/20 text-white border border-white/30 text-sm px-2.5 py-1 rounded-full whitespace-nowrap font-normal">
                  Scored 0
                </span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between text-sm text-white/80 font-normal tracking-wide">
<span>12 Holes</span>
<span className="w-1 h-1 rounded-full bg-white/40"></span>
<span>2 putts max per hole</span>
<span className="w-1 h-1 rounded-full bg-white/40"></span>
<span>$0 Setup cost</span>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white py-16 border-b border-[#d8e6df]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8 reveal">

<div className="bg-[#edf7f1] border border-[#d8e6df] rounded-3xl p-10 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
<div className="w-16 h-16 rounded-full bg-white text-[#1a5c38] flex items-center justify-center mb-6 shadow-sm">
<i className="w-8 h-8" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Playfair_Display'] text-3xl tracking-tight font-medium text-[#1a1a1a] mb-4">
              Book a Super Putt Event for Your Team
            </h3>
<p className="text-lg font-normal text-[#5a5a5a] mb-8 max-w-sm flex-grow">
              A premium, pressure-based team activity.
              <br/>
              Fun for all skill levels, from beginners to pros.
            </p>
<a className="bg-[#1a5c38] hover:bg-[#134429] text-white text-base font-normal px-8 py-3.5 rounded-full transition-colors w-full sm:w-auto shadow-md" href="#corporate-events">
              Explore Corporate Events
            </a>
</div>

<div className="bg-[#1a1a1a] border border-[#333] rounded-3xl p-10 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
<div className="w-16 h-16 rounded-full bg-[#333] text-white flex items-center justify-center mb-6 shadow-sm border border-[#444]">
<i className="w-8 h-8" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Playfair_Display'] text-3xl tracking-tight font-medium text-white mb-4">
              Enter the Circuit — Cash Prizes Up for Grabs
            </h3>
<p className="text-lg font-normal text-white/70 mb-8 max-w-sm flex-grow">
              The most competitive putting format in golf.
              <br/>
              Test your nerve and climb the national leaderboard.
            </p>
<a className="bg-white hover:bg-gray-100 text-[#1a1a1a] text-base font-medium px-8 py-3.5 rounded-full transition-colors w-full sm:w-auto shadow-md" href="#competition">
              View the Circuit
            </a>
</div>
</div>
</div>
</section>

<section className="bg-[#f7f9f8] py-24" id="the-idea">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5 reveal space-y-6">
<span className="text-sm font-medium tracking-wider uppercase text-[#2e8b57]">
              The Concept
            </span>
<h2 className="font-['Playfair_Display'] text-4xl tracking-tight font-medium text-[#1a1a1a]">
              One Rule Changes Everything.
            </h2>
<div className="space-y-4 text-lg font-normal text-[#5a5a5a] leading-relaxed">
<p>
                In traditional golf, players can leave a putt short with no
                penalty. In Super Putt, leaving a putt short is an immediate
                mistake.
              </p>
<p>
                This single change creates instant pressure on every stroke,
                forces commitment, and makes each putt genuinely meaningful —
                for beginners and experienced golfers alike.
              </p>
</div>
</div>
<div className="lg:col-span-7 reveal flex flex-col gap-4">

<div className="bg-white border border-[#d8e6df] rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#f7f9f8] flex items-center justify-center text-[#1a1a1a] border border-[#d8e6df]">
<i className="w-6 h-6" data-lucide="flag" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-normal text-lg text-[#1a1a1a]">
                    Putt stops short
                  </p>
</div>
</div>
<span className="bg-amber-50 text-amber-800 border border-amber-200 text-sm px-3 py-1.5 rounded-full font-normal tracking-wide">
                Mistake +1
              </span>
</div>

<div className="bg-white border border-[#d8e6df] rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#f7f9f8] flex items-center justify-center text-[#1a1a1a] border border-[#d8e6df]">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-normal text-lg text-[#1a1a1a]">
                    Putt passes the hole
                  </p>
<p className="text-base text-[#5a5a5a] font-normal">
                    Next putt must go in
                  </p>
</div>
</div>
<span className="bg-amber-50 text-amber-600 border border-amber-100 text-sm px-3 py-1.5 rounded-full font-normal tracking-wide">
                Pressure
              </span>
</div>

<div className="bg-white border border-[#d8e6df] rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#f7f9f8] flex items-center justify-center text-[#1a1a1a] border border-[#d8e6df]">
<i className="w-6 h-6" data-lucide="target" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-normal text-lg text-[#1a1a1a]">
                    Second putt misses
                  </p>
<p className="text-base text-[#5a5a5a] font-normal">
                    Didn't finish under pressure
                  </p>
</div>
</div>
<span className="bg-red-50 text-red-600 border border-red-100 text-sm px-3 py-1.5 rounded-full font-normal tracking-wide">
                Mistake +1
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-sm font-medium tracking-wider uppercase text-[#2e8b57] mb-3 block">
            How It Works
          </span>
<h2 className="font-['Playfair_Display'] text-4xl tracking-tight font-medium text-[#1a1a1a]">
            Simple Rules. Real Pressure.
          </h2>
</div>
<div className="grid md:grid-cols-2 gap-6 reveal">

<div className="bg-[#f7f9f8] border border-[#d8e6df] rounded-2xl p-8 hover:bg-white transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-normal text-[#1a1a1a] mb-3">
              12-Hole Format
            </h3>
<p className="text-base font-normal text-[#5a5a5a] leading-relaxed">
              A complete round uses 12 holes on any standard putting green. Fast
              to play, easy to run, and always fun.
            </p>
</div>

<div className="bg-[#f7f9f8] border border-[#d8e6df] rounded-2xl p-8 hover:bg-white transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-normal text-[#1a1a1a] mb-3">
              Maximum 2 Putts Per Hole
            </h3>
<p className="text-base font-normal text-[#5a5a5a] leading-relaxed">
              Two putts, two chances — no do-overs. Limited attempts keep the
              pace sharp and the stakes high.
            </p>
</div>

<div className="bg-[#f7f9f8] border border-[#d8e6df] border-l-4 border-l-red-400 rounded-2xl p-8 hover:bg-white transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="ban" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-normal text-[#1a1a1a] mb-3">
              First Putt Must Pass the Hole
            </h3>
<p className="text-base font-normal text-[#5a5a5a] leading-relaxed">
              If the first putt doesn't go in for birdie/eagle, then the ball
              must pass the hole. Leave it short any other time and it's an
              automatic mistake.
            </p>
</div>

<div className="bg-[#f7f9f8] border border-[#d8e6df] border-l-4 border-l-[#2e8b57] rounded-2xl p-8 hover:bg-white transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-normal text-[#1a1a1a] mb-3">
              Past the Hole? You Must Hole Out
            </h3>
<p className="text-base font-normal text-[#5a5a5a] leading-relaxed">
              You made it past — now finish it. The return putt must drop. Miss
              it, and that's a mistake too.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#1a1a1a] py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal space-y-6">
<span className="text-sm font-medium tracking-wider uppercase text-[#edf7f1] opacity-90 block">
              The Ultimate Goal
            </span>
<h2 className="font-['Playfair_Display'] text-4xl tracking-tight font-medium text-white">
              Conquering the Course.
            </h2>
<div className="space-y-4 text-lg font-normal text-white/70 leading-relaxed">
<p>
                To "Conquer the Course" means completing all 12 holes without
                making a single mistake. No leaving it short, and no missing a
                return putt under pressure.
              </p>
<p>
                This is the ultimate goal for anyone playing the game. It serves
                as the definitive measure of your success and proves your
                abilities as a truly exceptional putter.
              </p>
</div>
</div>
<div className="reveal">
<div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center flex flex-col items-center justify-center backdrop-blur-sm">
<div className="w-20 h-20 rounded-full bg-[#1a5c38] text-white flex items-center justify-center mb-6 shadow-lg border border-[#2e8b57]">
<i className="w-10 h-10" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Playfair_Display'] text-3xl tracking-tight font-medium text-white mb-4">
                Flawless Execution
              </h3>
<p className="text-lg text-white/70 font-normal">
                0 Mistakes across all 12 holes. Do you have what it takes?
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#edf7f1] py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto flex flex-col items-center text-center">
<div className="reveal space-y-6">
<span className="text-sm font-medium tracking-wider uppercase text-[#2e8b57]">
              Why It Works
            </span>
<h2 className="font-['Playfair_Display'] text-4xl tracking-tight font-medium text-[#1a1a1a]">
              Pressure in Both Directions.
            </h2>
<div className="space-y-4 text-lg font-normal text-[#5a5a5a] leading-relaxed">
<p>
                Be too cautious and you're penalised straight away. Be too
                aggressive and you face a high-pressure return putt with no
                margin for error.
              </p>
<p>
                This two-way tension is what makes Super Putt so compelling —
                genuine engagement and replay value for players at every level.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-sm font-medium tracking-wider uppercase text-[#2e8b57] mb-3 block">
            Who It's For
          </span>
<h2 className="font-['Playfair_Display'] text-4xl tracking-tight font-medium text-[#1a1a1a]">
            Built for Everyone.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
<div className="bg-[#f7f9f8] border border-[#d8e6df] rounded-2xl p-8 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6">
<i className="w-7 h-7" data-lucide="flag" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-[#1a1a1a] mb-3">
              Golf Clubs &amp; Facilities
            </h3>
<p className="text-sm font-normal text-[#5a5a5a] leading-relaxed">
              A new competitive format on your existing putting green. No extra
              equipment or setup required.
            </p>
</div>
<div className="bg-[#f7f9f8] border border-[#d8e6df] rounded-2xl p-8 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6">
<i className="w-7 h-7" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-[#1a1a1a] mb-3">
              Beginner Golfers
            </h3>
<p className="text-sm font-normal text-[#5a5a5a] leading-relaxed">
              Clear, simple rules make it immediately accessible — no handicap
              or experience needed to play.
            </p>
</div>
<div className="bg-[#f7f9f8] border border-[#d8e6df] rounded-2xl p-8 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6">
<i className="w-7 h-7" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-[#1a1a1a] mb-3">
              Corporate Groups
            </h3>
<p className="text-sm font-normal text-[#5a5a5a] leading-relaxed">
              A standout activity for team events, client days, and company golf
              outings.
            </p>
</div>
<div className="bg-[#f7f9f8] border border-[#d8e6df] rounded-2xl p-8 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6">
<i className="w-7 h-7" data-lucide="party-popper" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-[#1a1a1a] mb-3">
              Social Players &amp; Events
            </h3>
<p className="text-sm font-normal text-[#5a5a5a] leading-relaxed">
              Fun and competitive for all ages. Easy to run as a casual game or
              a full competition.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#f7f9f8] py-24 border-t border-[#d8e6df]" id="venues">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<span className="text-sm font-medium tracking-wider uppercase text-[#2e8b57] mb-3 block">
            For Clubs &amp; Venues
          </span>
<h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl tracking-tight font-medium text-[#1a1a1a] mb-6">
            Become a Super Putt Partner.
          </h2>
<p className="text-lg font-normal text-[#5a5a5a] leading-relaxed">
            Host Super Putt competitions and corporate days on your existing
            putting green. There is zero setup cost and no extra equipment
            required.
          </p>
</div>

<div className="grid md:grid-cols-3 gap-8 mb-20 reveal">
<div className="bg-white border border-[#d8e6df] rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-[#edf7f1] text-[#2e8b57] flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-medium text-[#1a1a1a] mb-3">
              Attract New Audiences
            </h3>
<p className="text-base font-normal text-[#5a5a5a]">
              A fresh, competitive format that draws in younger demographics,
              social players, and non-members to your facility.
            </p>
</div>
<div className="bg-white border border-[#d8e6df] rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-[#edf7f1] text-[#2e8b57] flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="dollar-sign" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-medium text-[#1a1a1a] mb-3">
              Recurring Revenue Stream
            </h3>
<p className="text-base font-normal text-[#5a5a5a]">
              Generate new income through monthly Club Series entry fees based
              on a mutually beneficial revenue-share model.
            </p>
</div>
<div className="bg-white border border-[#d8e6df] rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-[#edf7f1] text-[#2e8b57] flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-medium text-[#1a1a1a] mb-3">
              Corporate Network Access
            </h3>
<p className="text-base font-normal text-[#5a5a5a]">
              Gain direct access to Super Putt's corporate event referral
              network, driving highly profitable group bookings to your venue.
            </p>
</div>
</div>

<div className="bg-[#1a5c38] rounded-3xl p-10 md:p-16 text-white mb-16 reveal relative overflow-hidden">
<div className="absolute -inset-4 bg-[#2e8b57] rounded-full blur-3xl opacity-30 -z-10"></div>
<div className="max-w-4xl mx-auto">
<div className="text-center mb-10">
<h3 className="font-['Playfair_Display'] text-3xl tracking-tight font-medium text-white mb-4">
                What You Receive as a Partner
              </h3>
<p className="text-lg font-normal text-white/80">
                Everything you need to run successful events.
              </p>
</div>
<div className="grid sm:grid-cols-2 gap-8">
<div className="bg-white/10 border border-white/20 rounded-2xl p-6 flex items-start gap-4 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-white" data-lucide="check-circle"></i>
</div>
<div>
<h4 className="text-lg font-medium mb-1">
                    Official Partner Status
                  </h4>
<p className="text-sm text-white/70">
                    Recognised as an exclusive Super Putt hosting venue.
                  </p>
</div>
</div>
<div className="bg-white/10 border border-white/20 rounded-2xl p-6 flex items-start gap-4 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-white" data-lucide="check-circle"></i>
</div>
<div>
<h4 className="text-lg font-medium mb-1">Branded Materials</h4>
<p className="text-sm text-white/70">
                    Scorecards, signage, and marketing assets provided.
                  </p>
</div>
</div>
<div className="bg-white/10 border border-white/20 rounded-2xl p-6 flex items-start gap-4 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-white" data-lucide="check-circle"></i>
</div>
<div>
<h4 className="text-lg font-medium mb-1">Club Finder Listing</h4>
<p className="text-sm text-white/70">
                    Featured on the national Super Putt online venue directory.
                  </p>
</div>
</div>
<div className="bg-white/10 border border-white/20 rounded-2xl p-6 flex items-start gap-4 backdrop-blur-sm">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-white" data-lucide="check-circle"></i>
</div>
<div>
<h4 className="text-lg font-medium mb-1">Event Support</h4>
<p className="text-sm text-white/70">
                    Hands-on assistance running and marketing your first event.
                  </p>
</div>
</div>
</div>
</div>
</div>

<div className="text-center reveal">
<h3 className="text-2xl font-['Playfair_Display'] tracking-tight font-medium text-[#1a1a1a] mb-6">
            Ready to transform your putting green?
          </h3>
<a className="inline-flex items-center gap-2 bg-[#1a5c38] hover:bg-[#134429] text-white text-lg font-normal px-8 py-4 rounded-full transition-colors shadow-lg" href="#contact">
            Contact Us to Book a Venue Demo
            <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="bg-white py-24 border-t border-[#d8e6df]" id="corporate-events">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<span className="text-sm font-medium tracking-wider uppercase text-[#2e8b57] mb-3 block">
            Corporate Events
          </span>
<h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl tracking-tight font-medium text-[#1a1a1a] mb-6">
            A Premium Team Activity for Golfers and Non-Golfers Alike.
          </h2>
<p className="text-lg font-normal text-[#5a5a5a] leading-relaxed">
            Standard team days often fall flat or leave people out. Super Putt’s
            unique pressure-based format puts everyone on a level playing field.
            Whether you're a seasoned scratch golfer or picking up a putter for
            the first time, a two-foot putt under pressure creates the exact
            same tension. It generates genuine excitement, instant camaraderie,
            and shared moments of triumph and agony that your team will talk
            about for weeks.
          </p>
</div>

<div className="mb-24 reveal">
<div className="text-center mb-12">
<h3 className="font-['Playfair_Display'] text-3xl tracking-tight font-medium text-[#1a1a1a]">
              How Your Event Unfolds
            </h3>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">
<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-[#d8e6df] -translate-y-1/2 z-0"></div>

<div className="relative z-10 bg-white border border-[#d8e6df] rounded-2xl p-8 text-center shadow-sm">
<div className="w-12 h-12 mx-auto bg-[#edf7f1] text-[#1a5c38] rounded-full flex items-center justify-center mb-4 border border-[#d8e6df]">
<span className="text-lg font-medium">1</span>
</div>
<h4 className="text-xl tracking-tight font-medium text-[#1a1a1a] mb-2">
                The Briefing
              </h4>
<p className="text-base font-normal text-[#5a5a5a]">
                We welcome your team, assign groups, and explain the golden
                rule. No one leaves it short.
              </p>
</div>

<div className="relative z-10 bg-white border border-[#d8e6df] rounded-2xl p-8 text-center shadow-sm">
<div className="w-12 h-12 mx-auto bg-[#edf7f1] text-[#1a5c38] rounded-full flex items-center justify-center mb-4 border border-[#d8e6df]">
<span className="text-lg font-medium">2</span>
</div>
<h4 className="text-xl tracking-tight font-medium text-[#1a1a1a] mb-2">
                The Play
              </h4>
<p className="text-base font-normal text-[#5a5a5a]">
                Teams hit the green. The pressure builds instantly as the first
                putts roll past the hole and the stakes get real.
              </p>
</div>

<div className="relative z-10 bg-[#1a5c38] border border-[#134429] rounded-2xl p-8 text-center shadow-md text-white">
<div className="w-12 h-12 mx-auto bg-white/20 text-white rounded-full flex items-center justify-center mb-4 border border-white/30 backdrop-blur-sm">
<span className="text-lg font-medium">3</span>
</div>
<h4 className="text-xl tracking-tight font-medium text-white mb-2">
                The Ceremony
              </h4>
<p className="text-base font-normal text-white/80">
                We tally the scores, reveal the final leaderboard, and crown
                your company's Super Putt Champion.
              </p>
</div>
</div>
</div>

<div className="mb-20 reveal">
<div className="text-center mb-12">
<h3 className="font-['Playfair_Display'] text-3xl tracking-tight font-medium text-[#1a1a1a] mb-3">
              Event Packages
            </h3>
<p className="text-base font-normal text-[#5a5a5a]">
              Contact us for pricing tailored to your group size and location.
            </p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-stretch">

<div className="bg-[#f7f9f8] border border-[#d8e6df] rounded-2xl p-8 flex flex-col">
<div className="mb-6">
<h4 className="text-2xl tracking-tight font-medium text-[#1a1a1a] mb-2">
                  Starter
                </h4>
<p className="text-base font-normal text-[#5a5a5a]">
                  Perfect for small teams and quick social outings.
                </p>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#1a5c38] mt-0.5 flex-shrink-0" height="20" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
<span className="text-base font-normal text-[#3d3d3d]">
                    Up to 20 players
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#1a5c38] mt-0.5 flex-shrink-0" height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span className="text-base font-normal text-[#3d3d3d]">
                    2 hours duration
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#1a5c38] mt-0.5 flex-shrink-0" height="20" icon="solar:golf-linear" width="20"></iconify-icon>
<span className="text-base font-normal text-[#3d3d3d]">
                    Full equipment provided
                  </span>
</li>
</ul>
<div className="text-center pt-6 border-t border-[#d8e6df]">
<span className="text-sm font-medium tracking-wide text-[#5a5a5a] uppercase">
                  Contact for Pricing
                </span>
</div>
</div>

<div className="bg-white border-2 border-[#1a5c38] rounded-2xl p-8 flex flex-col relative shadow-lg transform md:-translate-y-4 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a5c38] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                Most Popular
              </div>
<div className="mb-6">
<h4 className="text-2xl tracking-tight font-medium text-[#1a1a1a] mb-2">
                  Tournament
                </h4>
<p className="text-base font-normal text-[#5a5a5a]">
                  The ideal half-day offsite for departments or branches.
                </p>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#1a5c38] mt-0.5 flex-shrink-0" height="20" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
<span className="text-base font-normal text-[#3d3d3d]">
                    Up to 60 players
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#1a5c38] mt-0.5 flex-shrink-0" height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span className="text-base font-normal text-[#3d3d3d]">
                    Half day format
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#1a5c38] mt-0.5 flex-shrink-0" height="20" icon="solar:clipboard-list-linear" width="20"></iconify-icon>
<span className="text-base font-normal text-[#3d3d3d]">
                    Dedicated event coordinator
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#1a5c38] mt-0.5 flex-shrink-0" height="20" icon="solar:cup-star-linear" width="20"></iconify-icon>
<span className="text-base font-normal text-[#3d3d3d]">
                    Standard winner's trophy
                  </span>
</li>
</ul>
<div className="text-center pt-6 border-t border-[#d8e6df]">
<span className="text-sm font-medium tracking-wide text-[#1a5c38] uppercase">
                  Contact for Pricing
                </span>
</div>
</div>

<div className="bg-[#f7f9f8] border border-[#d8e6df] rounded-2xl p-8 flex flex-col">
<div className="mb-6">
<h4 className="text-2xl tracking-tight font-medium text-[#1a1a1a] mb-2">
                  Championship
                </h4>
<p className="text-base font-normal text-[#5a5a5a]">
                  A complete takeover for large company gatherings.
                </p>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#1a5c38] mt-0.5 flex-shrink-0" height="20" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
<span className="text-base font-normal text-[#3d3d3d]">
                    Up to 150 players
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#1a5c38] mt-0.5 flex-shrink-0" height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span className="text-base font-normal text-[#3d3d3d]">
                    Full day custom schedule
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#1a5c38] mt-0.5 flex-shrink-0" height="20" icon="solar:star-fall-linear" width="20"></iconify-icon>
<span className="text-base font-normal text-[#3d3d3d]">
                    Multi-stage tournament bracket
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#1a5c38] mt-0.5 flex-shrink-0" height="20" icon="solar:confetti-linear" width="20"></iconify-icon>
<span className="text-base font-normal text-[#3d3d3d]">
                    Full event management team
                  </span>
</li>
</ul>
<div className="text-center pt-6 border-t border-[#d8e6df]">
<span className="text-sm font-medium tracking-wide text-[#5a5a5a] uppercase">
                  Contact for Pricing
                </span>
</div>
</div>
</div>
</div>

<div className="bg-[#edf7f1] rounded-3xl p-10 border border-[#d8e6df] mb-16 reveal">
<div className="text-center mb-10">
<h3 className="font-['Playfair_Display'] text-2xl tracking-tight font-medium text-[#1a1a1a] mb-2">
              Premium Add-ons
            </h3>
<p className="text-base font-normal text-[#5a5a5a]">
              Elevate your event. Available across all packages (Contact for
              prices).
            </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white rounded-xl p-6 border border-[#d8e6df] text-center shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-[#1a5c38] mb-4 inline-block" height="32" icon="solar:document-text-linear" width="32"></iconify-icon>
<h4 className="text-lg tracking-tight font-medium text-[#1a1a1a] mb-2">
                Branded Scorecards
              </h4>
<p className="text-sm font-normal text-[#5a5a5a]">
                Custom printed with your company logo and brand colors.
              </p>
</div>
<div className="bg-white rounded-xl p-6 border border-[#d8e6df] text-center shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-[#1a5c38] mb-4 inline-block" height="32" icon="solar:medal-star-linear" width="32"></iconify-icon>
<h4 className="text-lg tracking-tight font-medium text-[#1a1a1a] mb-2">
                Trophies &amp; Medals
              </h4>
<p className="text-sm font-normal text-[#5a5a5a]">
                Premium engraved awards for the winners and wooden spoons for
                the rest.
              </p>
</div>
<div className="bg-white rounded-xl p-6 border border-[#d8e6df] text-center shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-[#1a5c38] mb-4 inline-block" height="32" icon="solar:videocamera-record-linear" width="32"></iconify-icon>
<h4 className="text-lg tracking-tight font-medium text-[#1a1a1a] mb-2">
                Video Highlight Reel
              </h4>
<p className="text-sm font-normal text-[#5a5a5a]">
                Professional videography capturing the best and worst putts of
                the day.
              </p>
</div>
<div className="bg-white rounded-xl p-6 border border-[#d8e6df] text-center shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-[#1a5c38] mb-4 inline-block" height="32" icon="solar:global-linear" width="32"></iconify-icon>
<h4 className="text-lg tracking-tight font-medium text-[#1a1a1a] mb-2">
                National Leaderboard
              </h4>
<p className="text-sm font-normal text-[#5a5a5a]">
                See how your team's top players stack up against other companies
                nationwide.
              </p>
</div>
</div>
</div>

<div className="text-center reveal">
<a className="inline-flex items-center gap-2 bg-[#1a5c38] hover:bg-[#134429] text-white text-lg font-normal px-8 py-4 rounded-full transition-colors shadow-lg" href="#contact">
            Enquire About Availability
            <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-[#1a1a1a] text-white py-24 border-t border-[#111]" id="competition">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<span className="text-sm font-medium tracking-wider uppercase text-[#2e8b57] mb-3 block">
            The Circuit
          </span>
<h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl tracking-tight font-medium text-white mb-6">
            The Most Competitive Putting Format in Golf.
          </h2>
<p className="text-lg font-normal text-white/70 leading-relaxed">
            Super Putt isn't just a game — it's a proving ground. Designed for
            club players and social competitors who take their putting
            seriously, the Super Putt Circuit separates the clutch from the
            cautious. No gimmicks. Just genuine pressure, national rankings, and
            real stakes.
          </p>
</div>

<div className="grid lg:grid-cols-3 gap-8 mb-24 reveal">

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-[#1a5c38] flex items-center justify-center text-white mb-6 border border-[#2e8b57]">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-white mb-3">
              Club Series
            </h3>
<p className="text-base font-normal text-white/60 mb-6 flex-grow">
              Monthly competitions held at partner golf clubs. Post your score,
              climb the local ranks, and get your name on the national board.
            </p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3 text-sm text-white/80">
<i className="w-4 h-4 text-[#2e8b57]" data-lucide="check"></i>
                Nationally tracked scores
              </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<i className="w-4 h-4 text-[#2e8b57]" data-lucide="check"></i>
                Cash prizes available
              </li>
</ul>
<div className="pt-6 border-t border-white/10 mt-auto">
<a className="text-[#2e8b57] hover:text-white transition-colors text-sm font-medium uppercase tracking-wide" href="#contact">
                Contact for Details →
              </a>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col hover:bg-white/10 transition-colors relative">
<div className="absolute -top-3 left-8 bg-[#2e8b57] text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
              High Stakes
            </div>
<div className="w-12 h-12 rounded-full bg-[#1a5c38] flex items-center justify-center text-white mb-6 border border-[#2e8b57]">
<i className="w-6 h-6" data-lucide="swords" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-white mb-3">
              Regional Invitational
            </h3>
<p className="text-base font-normal text-white/60 mb-6 flex-grow">
              Quarterly 64-player brackets. Intense head-to-head knockout
              format. The top 2 players secure their ticket to the National
              Final.
            </p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3 text-sm text-white/80">
<i className="w-4 h-4 text-[#2e8b57]" data-lucide="check"></i>
                Knockout match play
              </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<i className="w-4 h-4 text-[#2e8b57]" data-lucide="check"></i>
                Major cash prizes
              </li>
</ul>
<div className="pt-6 border-t border-white/10 mt-auto">
<a className="text-[#2e8b57] hover:text-white transition-colors text-sm font-medium uppercase tracking-wide" href="#contact">
                Contact for Entry →
              </a>
</div>
</div>

<div className="bg-gradient-to-br from-[#1a5c38] to-[#134429] border border-[#2e8b57] rounded-2xl p-8 flex flex-col shadow-2xl relative transform lg:-translate-y-4">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-amber-950 text-xs font-medium px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-sm">
              The Pinnacle
            </div>
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 border border-white/20">
<i className="w-6 h-6" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-white mb-3">
              National Final
            </h3>
<p className="text-base font-normal text-white/80 mb-6 flex-grow">
              The ultimate battleground. 32 invited champions from across the
              country compete in a massive one-day event to crown the definitive
              Super Putt Champion.
            </p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-amber-400 fill-current" data-lucide="star"></i>
                Fully sponsored event
              </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-amber-400 fill-current" data-lucide="star"></i>
                Grand cash prize
              </li>
</ul>
<div className="pt-6 border-t border-white/20 mt-auto text-center">
<span className="text-white/60 text-sm font-medium uppercase tracking-wide">
                Invite Only
              </span>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 mb-20 reveal">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h3 className="font-['Playfair_Display'] text-3xl tracking-tight font-medium text-white mb-4">
                Rankings &amp; Leaderboard
              </h3>
<p className="text-base font-normal text-white/70 leading-relaxed mb-6">
                Every official Super Putt scorecard submitted counts towards
                your national ranking. Accumulate points across the Club Series
                and Regional events to climb the leaderboard. The higher you
                rank, the closer you get to a coveted spot in the National
                Final.
              </p>
<div className="flex items-center gap-6">
<div className="text-center">
<div className="text-3xl font-medium text-[#2e8b57] mb-1">
                    1st
                  </div>
<div className="text-xs text-white/50 uppercase tracking-wide">
                    Current Top Rank
                  </div>
</div>
<div className="w-[1px] h-10 bg-white/10"></div>
<div className="text-center">
<div className="text-3xl font-medium text-white mb-1">0</div>
<div className="text-xs text-white/50 uppercase tracking-wide">
                    Mistakes
                  </div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>
<div className="space-y-3 opacity-90 relative z-0">
<div className="bg-white/10 p-4 rounded-xl flex justify-between items-center border border-white/10">
<div className="flex items-center gap-4">
<span className="text-amber-400 font-medium">#1</span>
<span className="text-white font-medium">J. Smith</span>
</div>
<span className="text-white/60 text-sm">340 pts</span>
</div>
<div className="bg-white/10 p-4 rounded-xl flex justify-between items-center border border-white/10">
<div className="flex items-center gap-4">
<span className="text-[#cbd5e1] font-medium">#2</span>
<span className="text-white font-medium">M. Gancarz</span>
</div>
<span className="text-white/60 text-sm">310 pts</span>
</div>
<div className="bg-white/5 p-4 rounded-xl flex justify-between items-center border border-white/5">
<div className="flex items-center gap-4">
<span className="text-[#b45309] font-medium">#3</span>
<span className="text-white font-medium">T. Woods</span>
</div>
<span className="text-white/60 text-sm">285 pts</span>
</div>
<div className="bg-white/5 p-4 rounded-xl flex justify-between items-center border border-white/5">
<div className="flex items-center gap-4">
<span className="text-white/40 font-medium">#4</span>
<span className="text-white font-medium">L. Davies</span>
</div>
<span className="text-white/60 text-sm">260 pts</span>
</div>
</div>
</div>
</div>
</div>

<div className="text-center reveal">
<div className="inline-block bg-[#1a5c38] p-8 md:p-12 rounded-3xl border border-[#2e8b57] shadow-xl w-full max-w-4xl mx-auto relative overflow-hidden">
<div className="absolute -inset-4 bg-white/5 rounded-full blur-3xl opacity-50 -z-10"></div>
<h3 className="font-['Playfair_Display'] text-3xl tracking-tight font-medium text-white mb-4">
              Step Onto the Green
            </h3>
<p className="text-base text-white/80 mb-8 max-w-2xl mx-auto font-normal">
              Join the official Super Putt player database. We'll notify you
              when competition events and qualifiers are happening near your
              local club.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onsubmit="event.preventDefault();">
<input className="flex-grow bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-[#2e8b57] font-normal" placeholder="Enter your email address" required="" type="email"/>
<button className="bg-white text-[#1a5c38] hover:bg-[#f7f9f8] font-normal px-8 py-3 rounded-full transition-colors whitespace-nowrap shadow-lg flex items-center justify-center gap-2" type="submit">
                Join the Circuit
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="bg-[#edf7f1] py-24" id="about">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12 reveal">
<div className="flex-shrink-0">
<div className="w-32 h-32 rounded-full bg-[#1a5c38] flex items-center justify-center text-4xl border-4 border-white shadow-lg">
              ⛳
            </div>
</div>
<div className="text-center md:text-left space-y-4">
<span className="text-sm font-medium tracking-wider uppercase text-[#2e8b57]">
              About the Creator
            </span>
<h2 className="font-['Playfair_Display'] text-3xl tracking-tight font-medium text-[#1a1a1a]">
              Mariusz Gancarz
            </h2>
<p className="text-lg font-normal text-[#5a5a5a] leading-relaxed">
              Super Putt was created by Mariusz Gancarz in Canberra, Australia,
              with one goal: make golf more accessible, engaging, and fun for
              everyone. By rethinking the most fundamental part of the game —
              the putt — Mariusz built a format that creates genuine pressure
              and genuine excitement for players at any level.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#1a5c38] text-white py-24 text-center" id="contact">
<div className="max-w-3xl mx-auto px-6 reveal space-y-8">
<span className="text-sm font-medium tracking-wider uppercase text-[#edf7f1] opacity-90">
          Get in Touch
        </span>
<h2 className="font-['Playfair_Display'] text-4xl tracking-tight font-normal">
          Ready to Bring Super Putt to Your Club?
        </h2>
<p className="text-lg text-white/90 max-w-xl mx-auto font-light">
          Whether you're a venue, an event organiser, or simply excited about
          the concept — we'd love to hear from you.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<div className="w-full sm:w-auto bg-white/10 border border-white/20 rounded-xl px-6 py-4 flex items-center justify-center gap-3 backdrop-blur-sm">
<i className="w-5 h-5 opacity-80" data-lucide="mail" strokeWidth="1.5"></i>
<span className="text-base font-normal tracking-wide">
              mariuszgancarz@hotmail.com
            </span>
</div>
<div className="w-full sm:w-auto bg-white/10 border border-white/20 rounded-xl px-6 py-4 flex items-center justify-center gap-3 backdrop-blur-sm">
<i className="w-5 h-5 opacity-80" data-lucide="phone" strokeWidth="1.5"></i>
<span className="text-base font-normal tracking-wide">
              +61 0450 961 477
            </span>
</div>
</div>
<div className="pt-8 block">
<a className="inline-flex items-center gap-2 bg-white text-[#1a5c38] hover:bg-[#f7f9f8] text-lg font-normal px-8 py-4 rounded-full transition-colors shadow-lg" href="mailto:mariuszgancarz@hotmail.com">
            Request a Demo
            <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<footer className="bg-[#111] text-white/50 py-10 text-center">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-2 text-sm font-normal tracking-wide">
<span className="font-normal text-white/70">SuperPutt</span>
<span className="hidden md:inline">·</span>
<span>Developed in Canberra, Australia</span>
<span className="hidden md:inline">·</span>
<span>Created by Mariusz Gancarz</span>
<span className="hidden md:inline">·</span>
<span>© 2025</span>
</div>
</footer>

    </>
  );
}
