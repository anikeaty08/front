import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
'main-black': '#050505',
'off-black': '#0f0f11',
'glass-border': 'rgba(255, 255, 255, 0.08)',
'main-purple': '#7D6EFC',
'sunset-orange': '#EFB521',
'electric-blue': '#2C71F6',
'polaroid-white': '#F2F0F5',
},
fontFamily: {
'sans': ['"Inter"', 'sans-serif'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
'pulse-glow': {
'0%, 100%': { opacity: '0.4' },
'50%': { opacity: '0.2' },
}
}
}
}
}



      // DATA FOR LEGAL/CONTENT PAGES
      const pageContent = {
          'About Us': `
              <p class="text-lg leading-relaxed text-zinc-300 mb-6">VYBZ is the social layer for the real world. We built this because scrolling isn't living.</p>
              <h3 class="text-xl font-bold text-white mt-8 mb-4">Our Mission</h3>
              <p>Connect to each other, not to your phones. We use technology to get you off technology.</p>
              <h3 class="text-xl font-bold text-white mt-8 mb-4">Not a Dating App</h3>
              <p>We are strictly platonic. There are enough places to swipe for dates. VYBZ is for finding your crowd, your gaming squad, your coffee crew.</p>
          `,
          'Community Guidelines': `
              <div class="grid gap-6">
                  <div class="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <h3 class="text-white font-bold mb-2">1. Be Decent</h3>
                      <p>Treat everyone with respect. Zero tolerance for harassment.</p>
                  </div>
                  <div class="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <h3 class="text-white font-bold mb-2">2. Respect Local Culture</h3>
                      <p>We operate in the Middle East. Be mindful of local customs and values.</p>
                  </div>
              </div>
          `,
          'Terms of Use': `<p>Standard terms apply. By using VYBZ, you agree to be a real human being and not a bot.</p>`,
          'Privacy Policy': `<p>We take privacy seriously. Your location is only used to show you relevant vibes nearby.</p>`,
          'EULA': `<p>Standard Apple EULA applies regarding user-generated content.</p>`,
      };

      // NAVIGATION LOGIC
      function showPage(pageId) {
          window.scrollTo(0,0);
          document.querySelectorAll('.page-content').forEach(el => {
              el.classList.remove('active');
              setTimeout(() => { if(!el.classList.contains('active')) el.style.display = 'none'; }, 400);
          });
          const target = document.getElementById(pageId === 'home' ? 'home' : 'legal-content');
          target.style.display = 'block';
          setTimeout(() => { target.classList.add('active'); if(pageId === 'home') ScrollTrigger.refresh(); }, 50);
      }

      function showLegal(title) {
          document.getElementById('legal-title').innerText = title;
          document.getElementById('legal-body').innerHTML = pageContent[title] || "<p>Content loading...</p>";
          showPage('legal');
      }

      // ANIMATIONS
      gsap.registerPlugin(ScrollTrigger);
      gsap.to("h1", { scrollTrigger: { trigger: "header", start: "top top", end: "bottom top", scrub: 1 }, y: 50, opacity: 0.8 });

      // Cards Stagger
      const cards = document.querySelectorAll('.snap-center');
      gsap.from(cards, {
          scrollTrigger: { trigger: ".snap-x", start: "top 80%" },
          y: 80, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out"
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 px-6 py-4 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto flex justify-between items-center">

<div className="flex items-center gap-2 cursor-pointer group" onclick="showPage('home')">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-main-purple to-electric-blue flex items-center justify-center shadow-[0_0_15px_rgba(125,110,252,0.2)]">
<iconify-icon className="text-white text-sm" icon="lucide:zap"></iconify-icon>
</div>
<span className="font-bold text-xl text-white tracking-tight">VYBZ</span>
</div>

<div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/5">
<a className="px-5 py-1.5 text-xs font-medium text-white bg-white/10 rounded-full transition-all hover:bg-white/15" href="#" onclick="showPage('home')">
            Home
          </a>
<a className="px-5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-all" href="#how">
            How it works
          </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all group" href="https://apps.apple.com/gb/app/vybz-meet-people-nearby/id1661684666" target="_blank">
<span className="text-xs font-semibold text-white">
              Download on App Store
            </span>
</a>
</div>
</div>
</nav>

<main className="pt-0 flex-grow" id="main-container">

<div className="page-content active" id="home">

<section className="relative isolate min-h-[90vh] w-full flex flex-col justify-center items-center overflow-hidden px-4 pt-20">

<div className="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen">
<iframe className="w-full h-full scale-125 md:scale-110 origin-center translate-x-[1.5%]" frameborder="0" height="100%" src="https://my.spline.design/liquidring-PGc8zQXZyDUpVFvWNgohNZnv" title="VYBZ Liquid Ring" width="100%"></iframe>
</div>

<div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-black/50 via-black/30 to-main-black"></div>
<div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0.85)_100%)]"></div>
<div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-0">

<div className="mb-8 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm animate-[fadeIn_1s_ease-out]">
<p className="text-[10px] md:text-xs font-medium text-zinc-400 uppercase tracking-widest">
                Live in Riyadh
                <span className="text-white/20 mx-1">•</span>
                Dubai
                <span className="text-white/20 mx-1">•</span>
                Kuwait
              </p>
</div>

<h1 className="font-bold leading-[0.95] tracking-tight mb-6 drop-shadow-2xl">
<span className="block text-[13vw] md:text-[8.5vw] text-white animate-[fadeIn_1s_ease-out]">
                FIND YOUR
              </span>
<span className="block text-[13vw] md:text-[8.5vw] text-gradient pb-4 animate-[fadeIn_1s_ease-out_0.2s_both]">
                PEOPLE.
              </span>
</h1>
<div className="space-y-8 max-w-xl mx-auto px-4 animate-[fadeIn_1s_ease-out_0.5s_both]">
<h2 className="text-xl md:text-2xl font-semibold text-white/90 tracking-tight">
                REAL VIBES ONLY.
              </h2>
<p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed">
                A real-time social app for what’s happening around you.
                <br/>
<span className="text-zinc-200">No dating. Just hanging out.</span>
</p>

<div className="flex flex-col items-center gap-4 mt-10">

<a className="hover:opacity-90 transition-opacity transform hover:scale-[1.02] duration-200" href="https://apps.apple.com/gb/app/vybz-meet-people-nearby/id1661684666">
<img alt="Download on the App Store" className="h-14 w-auto" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"/>
</a>

<button className="text-sm font-medium text-zinc-500 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-0.5">
                  Join the Android Waitlist
                </button>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-main-black border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
<div>
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                Trending Vibes
              </h2>
<p className="text-zinc-400 font-medium text-sm">
                See what's happening right now.
              </p>
</div>

<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-white/50 hover:text-white transition-colors">
<iconify-icon icon="lucide:arrow-left"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-white/50 hover:text-white transition-colors">
<iconify-icon icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-16 no-scrollbar">

<div className="min-w-[280px] md:min-w-[320px] snap-center">
<div className="bg-polaroid-white p-3 pb-6 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.03)] transform -rotate-1 hover:rotate-0 transition-all duration-500 group cursor-pointer h-full">
<div className="aspect-[4/5] bg-zinc-200 overflow-hidden rounded-lg relative mb-4">
<img alt="Coffee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.85] group-hover:saturate-100" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3">
<div className="px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-1.5 shadow-lg">
<span className="text-xs">☕</span>
<span className="text-[10px] font-bold text-white uppercase tracking-wide">
                        Specialty Coffee
                      </span>
</div>
</div>
</div>
<div className="px-2">
<h3 className="font-bold text-black text-lg leading-none mb-1.5">
                    Elixir Bunn
                  </h3>
<p className="text-zinc-500 text-xs font-medium">
                    Riyadh • 0.8km away
                  </p>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center pt-8">
<div className="bg-polaroid-white p-3 pb-6 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.03)] transform rotate-1 hover:rotate-0 transition-all duration-500 group cursor-pointer h-full">
<div className="aspect-[4/5] bg-zinc-200 overflow-hidden rounded-lg relative mb-4">
<img alt="Desert" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.85] group-hover:saturate-100" src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3">
<div className="px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-1.5 shadow-lg">
<span className="text-xs">⛺</span>
<span className="text-[10px] font-bold text-white uppercase tracking-wide">
                        Winter Camping
                      </span>
</div>
</div>
</div>
<div className="px-2">
<h3 className="font-bold text-black text-lg leading-none mb-1.5">
                    Thumama Dunes
                  </h3>
<p className="text-zinc-500 text-xs font-medium">
                    Riyadh • 32km away
                  </p>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center">
<div className="bg-polaroid-white p-3 pb-6 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.03)] transform -rotate-2 hover:rotate-0 transition-all duration-500 group cursor-pointer h-full">
<div className="aspect-[4/5] bg-zinc-200 overflow-hidden rounded-lg relative mb-4">
<img alt="Gaming" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.85] group-hover:saturate-100" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3">
<div className="px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-1.5 shadow-lg">
<span className="text-xs">🎮</span>
<span className="text-[10px] font-bold text-white uppercase tracking-wide">
                        Ranked Match
                      </span>
</div>
</div>
</div>
<div className="px-2">
<h3 className="font-bold text-black text-lg leading-none mb-1.5">
                    Glitch Arena
                  </h3>
<p className="text-zinc-500 text-xs font-medium">
                    Dubai • 2.1km away
                  </p>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center pt-6">
<div className="bg-polaroid-white p-3 pb-6 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.03)] transform rotate-2 hover:rotate-0 transition-all duration-500 group cursor-pointer h-full">
<div className="aspect-[4/5] bg-zinc-200 overflow-hidden rounded-lg relative mb-4">
<img alt="Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[0.85] group-hover:saturate-100" src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3">
<div className="px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-1.5 shadow-lg">
<span className="text-xs">📚</span>
<span className="text-[10px] font-bold text-white uppercase tracking-wide">
                        Focus Mode
                      </span>
</div>
</div>
</div>
<div className="px-2">
<h3 className="font-bold text-black text-lg leading-none mb-1.5">
                    National Library
                  </h3>
<p className="text-zinc-500 text-xs font-medium">
                    Kuwait City • 5km away
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5 relative" id="how">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="glass-panel p-8 rounded-3xl hover:border-main-purple/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-main-purple" icon="lucide:wand-2"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white mb-2">
                  1. Set your vibe
                </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                  Pick a mood — chill, chatty, or out exploring. Let the map
                  know you're ready to hang.
                </p>
</div>

<div className="glass-panel p-8 rounded-3xl hover:border-sunset-orange/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-sunset-orange" icon="lucide:radar"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white mb-2">
                  2. Find your crew
                </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                  See who’s nearby on the same wavelength. No swiping, just
                  real-time availability.
                </p>
</div>

<div className="glass-panel p-8 rounded-3xl hover:border-electric-blue/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-electric-blue" icon="lucide:message-circle"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white mb-2">
                  3. Plan the hang
                </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                  Low pressure chats. Meet in real life. Connect with people,
                  not profiles.
                </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-main-black">
<div className="max-w-4xl mx-auto text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              People nearby now
            </h2>
<p className="text-zinc-400 font-medium">
              See what's happening around Riyadh.
            </p>
</div>

<div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[550px] md:h-[650px] group bg-[#111]">

<div className="absolute inset-0 opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000">

<img alt="Riyadh Map" className="w-full h-full object-cover scale-110 brightness-[0.4] contrast-[1.2]" src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-main-black/90 via-transparent to-main-black/10 pointer-events-none"></div>

<div className="absolute top-8 left-8 z-40">
<div className="px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-2 shadow-lg">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-bold text-white tracking-wide">
                  RIYADH, SA
                </span>
</div>
</div>



<div className="absolute top-[35%] left-1/2 -translate-x-1/2 animate-float z-40">
<div className="flex flex-col items-center gap-3">

<div className="bg-white p-2 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] w-[160px] transform scale-100 group-hover:scale-105 transition-transform origin-bottom duration-300">
<div className="h-20 w-full rounded-xl bg-zinc-200 overflow-hidden mb-2 relative">
<img alt="Coffee Shop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="flex items-center justify-between px-1">
<span className="text-xs font-bold text-black">Brew Crew</span>
<span className="text-[9px] font-medium text-zinc-400">
                      200m
                    </span>
</div>
</div>

<div className="relative w-14 h-14 cursor-pointer">
<div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
<div className="relative w-14 h-14 rounded-full border-[3px] border-white bg-zinc-900 overflow-hidden shadow-lg">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="absolute top-[45%] right-[18%] animate-float-delayed z-30">
<div className="flex items-center gap-3 hover:z-50 group/pin">
<div className="relative w-12 h-12">
<div className="w-12 h-12 rounded-full border-[3px] border-[#2C71F6] bg-zinc-900 overflow-hidden shadow-lg relative z-10">
<img alt="Gamer" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 right-0 w-4 h-4 bg-sunset-orange rounded-full border-2 border-[#111] z-20"></div>
</div>

<div className="bg-black/90 backdrop-blur px-4 py-2 rounded-full border border-white/10 shadow-xl whitespace-nowrap transform transition-all duration-300">
<span className="text-xs font-medium text-white">
                    Looking for squad 🎮
                  </span>
</div>
</div>
</div>

<div className="absolute bottom-[25%] left-[15%] z-20 opacity-80">
<div className="w-10 h-10 rounded-full border-2 border-white/50 bg-zinc-800 overflow-hidden shadow-lg">
<img alt="User" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&amp;h=100&amp;fit=crop"/>
</div>
</div>

<div className="absolute top-[25%] left-[25%] z-20 opacity-80">
<div className="w-10 h-10 rounded-full border-2 border-white/50 bg-zinc-800 overflow-hidden shadow-lg">
<img alt="User" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
</div>
</div>

<div className="absolute bottom-12 left-0 right-0 flex justify-center items-center z-50 pointer-events-none">
<a className="pointer-events-auto bg-white text-black px-8 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center gap-2" href="https://apps.apple.com/gb/app/vybz-meet-people-nearby/id1661684666" target="_blank">
                View Live Map
                <iconify-icon className="text-black stroke-[2.5]" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 relative flex flex-col items-center justify-center text-center px-6">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-main-purple/20 to-electric-blue/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<h2 className="text-[11vw] md:text-[7vw] font-black text-white leading-[0.9] tracking-tight mb-8">
            DON'T JUST SCROLL.
            <br/>
<span className="text-gradient">START VIBING.</span>
</h2>
<div className="flex flex-col items-center gap-6">
<a className="hover:opacity-90 transition-opacity" href="https://apps.apple.com/gb/app/vybz-meet-people-nearby/id1661684666">
<img alt="Download on the App Store" className="h-16 w-auto" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"/>
</a>
<p className="text-zinc-500 text-xs font-medium">
              Available on iOS. Android coming soon.
            </p>
</div>
</section>
</div>

<div className="page-content max-w-3xl mx-auto px-6 py-24 min-h-[60vh]" id="legal-content">
<button className="mb-8 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider" onclick="showPage('home')">
<iconify-icon icon="lucide:arrow-left"></iconify-icon>
          Back to Home
        </button>
<h1 className="text-3xl md:text-4xl font-bold text-white mb-8" id="legal-title"></h1>
<div className="prose prose-invert prose-p:text-zinc-400 prose-headings:text-white max-w-none" id="legal-body"></div>
</div>
</main>

<footer className="bg-[#020202] border-t border-white/5 pt-16 pb-12 px-6 text-sm">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-main-purple to-electric-blue flex items-center justify-center">
<iconify-icon className="text-white text-[10px]" icon="lucide:zap"></iconify-icon>
</div>
<span className="font-bold text-lg text-white tracking-tight">
              VYBZ
            </span>
</div>
<div className="text-zinc-500 space-y-4 text-xs md:text-sm">
<p>
              Need help?
              <a className="text-zinc-300 hover:text-white transition-colors" href="mailto:support@vybzapp.com">
                support@vybzapp.com
              </a>
</p>
<div className="flex gap-4 pt-2">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all text-zinc-400" href="#">
<iconify-icon icon="lucide:instagram"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all text-zinc-400" href="#">
<iconify-icon icon="lucide:twitter"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all text-zinc-400" href="#">
<iconify-icon icon="lucide:music-2"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="col-span-1">
<h4 className="text-white font-semibold mb-4">Legal</h4>
<ul className="space-y-3 text-zinc-500 text-xs md:text-sm">
<li>
<a className="hover:text-main-purple transition-colors" href="#" onclick="showLegal('Terms of Use')">
                Terms of Use
              </a>
</li>
<li>
<a className="hover:text-main-purple transition-colors" href="#" onclick="showLegal('Privacy Policy')">
                Privacy Policy
              </a>
</li>
<li>
<a className="hover:text-main-purple transition-colors" href="#" onclick="showLegal('EULA')">
                EULA
              </a>
</li>
</ul>
</div>

<div className="col-span-1">
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-3 text-zinc-500 text-xs md:text-sm">
<li>
<a className="hover:text-main-purple transition-colors" href="#" onclick="showLegal('About Us')">
                About Us
              </a>
</li>
<li>
<a className="hover:text-main-purple transition-colors" href="#" onclick="showLegal('Community Guidelines')">
                Community Guidelines
              </a>
</li>
</ul>
</div>

<div className="col-span-1">
<div className="flex flex-col items-start gap-4">
<a href="https://apps.apple.com/gb/app/vybz-meet-people-nearby/id1661684666">
<img alt="Download on the App Store" className="w-[140px] opacity-80 hover:opacity-100 transition-opacity" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"/>
</a>
<p className="text-[10px] text-zinc-600">
              © 2025 VYBZ Inc.
              <br/>
              24 Dering St. London, UK
            </p>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto border-t border-white/5 pt-8">
<details className="group cursor-pointer">
<summary className="list-none text-[11px] text-zinc-500 font-medium hover:text-zinc-300 transition-colors flex items-center gap-2">
            Trademark Notice
            <iconify-icon className="group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<p className="text-[11px] text-zinc-600 leading-relaxed font-medium mt-3 pl-2 border-l-2 border-white/10">
            VYBZ® is registered trademark owned by VYBZ Inc. in the following
            jurisdictions: United States with registration No: 6342707 •
            European Union with registration No: 018146753 • United Kingdom with
            registration No: UK00003441428. Any unauthorised use is expressly
            prohibited.
          </p>
</details>
</div>
</footer>


    </>
  );
}
