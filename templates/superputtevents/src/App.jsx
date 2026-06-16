import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#d8e6df]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center" href="#">
<span className="font-['Playfair_Display'] text-2xl font-medium tracking-tight text-[#1a1a1a]">
            Super Putt
          </span>
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
<a className="hover:text-[#1a1a1a] transition-colors" href="#about">
            About
          </a>
</div>
<div className="hidden md:flex">
<a className="bg-[#1a5c38] hover:bg-[#134429] text-white text-base font-normal px-5 py-2.5 rounded-full transition-colors" href="mailto:mariuszgancarz@hotmail.com?subject=Super%20Putt%20Scorecard%20Request&amp;body=Hi%20Mariusz,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20scorecard.%0D%0A%0D%0A">
            Request a Scorecard
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
<a className="block text-base font-normal text-[#5a5a5a]" href="#about">
          About
        </a>
<a className="block text-base font-normal text-[#1a5c38] pt-2 border-t border-[#d8e6df]" href="mailto:mariuszgancarz@hotmail.com?subject=Super%20Putt%20Scorecard%20Request&amp;body=Hi%20Mariusz,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20scorecard.%0D%0A%0D%0A">
          Request a Scorecard
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
            Super Putt is a delightfully engaging putting experience where every
            single putt matters — encouraging focus and rewarding commitment.
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
<a className="bg-[#1a5c38] hover:bg-[#134429] text-white text-lg font-normal px-6 py-3 rounded-full transition-colors flex items-center gap-2" href="mailto:mariuszgancarz@hotmail.com?subject=Super%20Putt%20Scorecard%20Request&amp;body=Hi%20Mariusz,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20scorecard.%0D%0A%0D%0A">
              Request a Scorecard
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
                  Challenge
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
                This simple change creates a fun, engaging dynamic on every
                stroke, encourages commitment, and makes each putt genuinely
                meaningful — for beginners and experienced golfers alike
                enjoying a relaxed round.
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
                Challenge
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
                    Missed the return putt
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
            Simple Rules. Genuine Fun.
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
              pace sharp and the game engaging.
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
                return putt.
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
              A Perfect Balance.
            </h2>
<div className="space-y-4 text-lg font-normal text-[#5a5a5a] leading-relaxed">
<p>
                Be too cautious and you'll add a stroke. Be too aggressive and
                you face a focused return putt to save the hole.
              </p>
<p>
                This playful dynamic is what makes Super Putt so compelling —
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

<section className="bg-[#f7f9f8] py-24" id="venues">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal space-y-8">
<div>
<span className="text-sm font-medium tracking-wider uppercase text-[#2e8b57] mb-3 block">
                For Clubs &amp; Venues
              </span>
<h2 className="font-['Playfair_Display'] text-4xl tracking-tight font-medium text-[#1a1a1a]">
                Built for Participation &amp; Revenue.
              </h2>
</div>
<ul className="space-y-4">
<li className="bg-white border border-[#d8e6df] rounded-xl p-4 flex items-center gap-4 shadow-sm">
<div className="w-6 h-6 rounded-full bg-[#edf7f1] text-[#2e8b57] flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="text-base font-normal text-[#3d3d3d]">
                  No capital cost to implement
                </span>
</li>
<li className="bg-white border border-[#d8e6df] rounded-xl p-4 flex items-center gap-4 shadow-sm">
<div className="w-6 h-6 rounded-full bg-[#edf7f1] text-[#2e8b57] flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="text-base font-normal text-[#3d3d3d]">
                  Uses your existing putting green
                </span>
</li>
<li className="bg-white border border-[#d8e6df] rounded-xl p-4 flex items-center gap-4 shadow-sm">
<div className="w-6 h-6 rounded-full bg-[#edf7f1] text-[#2e8b57] flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="text-base font-normal text-[#3d3d3d]">
                  Attracts new and younger audiences
                </span>
</li>
<li className="bg-white border border-[#d8e6df] rounded-xl p-4 flex items-center gap-4 shadow-sm">
<div className="w-6 h-6 rounded-full bg-[#edf7f1] text-[#2e8b57] flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="text-base font-normal text-[#3d3d3d]">
                  High repeat play and return visits
                </span>
</li>
<li className="bg-white border border-[#d8e6df] rounded-xl p-4 flex items-center gap-4 shadow-sm">
<div className="w-6 h-6 rounded-full bg-[#edf7f1] text-[#2e8b57] flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="text-base font-normal text-[#3d3d3d]">
                  Ideal for events and group bookings
                </span>
</li>
</ul>
</div>
<div className="reveal">
<div className="bg-[#edf7f1] rounded-3xl p-10 border border-[#d8e6df] text-center flex flex-col items-center justify-center min-h-[400px]">
<span className="text-sm font-medium tracking-wider uppercase text-[#5a5a5a] mb-6">
                Investment Required
              </span>
<div className="font-['Playfair_Display'] text-8xl tracking-tight font-normal text-[#1a5c38] mb-6 leading-none">
                $0
              </div>
<p className="text-lg font-normal text-[#3d3d3d] mb-10 max-w-xs mx-auto">
                Your existing green is all you need to get started.
              </p>
<div className="grid grid-cols-2 gap-4 w-full">
<div className="bg-white p-4 rounded-xl border border-[#d8e6df]">
<p className="text-base font-normal text-[#1a1a1a] mb-1">
                    Fast Rounds
                  </p>
<p className="text-sm font-normal text-[#5a5a5a]">
                    High player throughput
                  </p>
</div>
<div className="bg-white p-4 rounded-xl border border-[#d8e6df]">
<p className="text-base font-normal text-[#1a1a1a] mb-1">
                    Repeatable
                  </p>
<p className="text-sm font-normal text-[#5a5a5a]">
                    Players come back again
                  </p>
</div>
</div>
</div>
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
              the putt — Mariusz built a format that creates a fun challenge and
              genuine excitement for players at any level.
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
<a className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-6 py-4 flex items-center justify-center gap-3 backdrop-blur-sm transition-colors cursor-pointer" href="mailto:mariuszgancarz@hotmail.com?subject=Super%20Putt%20Scorecard%20Request&amp;body=Hi%20Mariusz,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20scorecard.%0D%0A%0D%0A">
<i className="w-5 h-5 opacity-80" data-lucide="mail" strokeWidth="1.5"></i>
<span className="text-base font-normal tracking-wide">
              mariuszgancarz@hotmail.com
            </span>
</a>
<a className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-6 py-4 flex items-center justify-center gap-3 backdrop-blur-sm transition-colors cursor-pointer" href="tel:+61450961477">
<i className="w-5 h-5 opacity-80" data-lucide="phone" strokeWidth="1.5"></i>
<span className="text-base font-normal tracking-wide">
              +61 0450 961 477
            </span>
</a>
</div>
<div className="pt-8 block">
<a className="inline-flex items-center gap-2 bg-white text-[#1a5c38] hover:bg-[#f7f9f8] text-lg font-normal px-8 py-4 rounded-full transition-colors shadow-lg" href="mailto:mariuszgancarz@hotmail.com">
            Request a Scorecard
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
<span className="hidden md:inline">·</span>
<button className="text-white/70 hover:text-white transition-all ml-2 cursor-pointer text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded" onclick="const html = '&lt;!DOCTYPE html&gt;\n' + document.documentElement.outerHTML; const blob = new Blob([html], {type: 'text/html'}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'super-putt-v1-backup.html'; a.click(); URL.revokeObjectURL(url);">
          Download V1 Backup
        </button>
</div>
</footer>

    </>
  );
}
