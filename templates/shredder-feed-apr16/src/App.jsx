import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();

      // Create Panel Interaction Logic
      const openBtn = document.getElementById('openCreateBtn');
      const closeBtn = document.getElementById('closeCreatePanel');
      const overlay = document.getElementById('createOverlay');
      const sheet = document.getElementById('createSheet');
      const backdrop = document.getElementById('createBackdrop');

      function togglePanel(show) {
        if (show) {
          overlay.classList.remove('opacity-0', 'pointer-events-none');
          overlay.classList.add('opacity-100', 'pointer-events-auto');
          sheet.classList.remove('translate-y-full');
          sheet.classList.add('translate-y-0');
        } else {
          overlay.classList.remove('opacity-100', 'pointer-events-auto');
          overlay.classList.add('opacity-0', 'pointer-events-none');
          sheet.classList.remove('translate-y-0');
          sheet.classList.add('translate-y-full');
        }
      }

      openBtn.addEventListener('click', () => togglePanel(true));
      closeBtn.addEventListener('click', () => togglePanel(false));
      backdrop.addEventListener('click', () => togglePanel(false));

      // Scroll Snapping Active State Logic
      const feedContainer = document.querySelector('.overflow-y-auto');
      const articles = document.querySelectorAll('.feed-article');

      function updateActiveArticle() {
        if (!feedContainer || articles.length === 0) return;
        const containerRect = feedContainer.getBoundingClientRect();
        const containerCenter = containerRect.top + containerRect.height / 2;
        let closestArticle = null;
        let minDistance = Infinity;

        articles.forEach(article => {
          const rect = article.getBoundingClientRect();
          const articleCenter = rect.top + rect.height / 2;
          const distance = Math.abs(containerCenter - articleCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestArticle = article;
          }
        });

        articles.forEach(article => {
          const indicator = article.querySelector('.active-indicator');
          if (article === closestArticle) {
            article.classList.add('bg-[#c878ff]/[0.04]');
            article.classList.remove('bg-transparent');
            if (indicator) indicator.classList.remove('opacity-0');
          } else {
            article.classList.remove('bg-[#c878ff]/[0.04]');
            article.classList.add('bg-transparent');
            if (indicator) indicator.classList.add('opacity-0');
          }
        });
      }

      feedContainer.addEventListener('scroll', () => {
        window.requestAnimationFrame(updateActiveArticle);
      });
      window.addEventListener('resize', updateActiveArticle);
      // initial call
      setTimeout(updateActiveArticle, 100);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-md bg-[#050505] relative flex flex-col h-[100dvh] sm:h-[800px] sm:rounded-[32px] sm:border-[6px] sm:border-zinc-900 overflow-hidden shadow-2xl">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c878ff]/40 via-[#c878ff]/5 to-transparent pointer-events-none z-0"></div>

<div className="absolute top-0 inset-x-0 z-30 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent h-32 backdrop-blur-[2px]"></div>
<header className="relative px-5 pt-12 pb-4 flex items-center justify-between pointer-events-auto shrink-0">
<h1 className="text-3xl font-normal tracking-tight text-white leading-none">
            Activity
          </h1>
<button aria-label="Notifications" className="text-zinc-500 hover:text-white transition-colors flex items-center justify-center h-8 w-8 rounded-full hover:bg-white/[0.04]">
<i className="w-6 h-6" data-lucide="bell" strokeWidth="1.5"></i>
</button>
</header>
</div>

<div className="relative z-10 flex-1 overflow-y-auto pt-28 pb-32 flex flex-col scroll-smooth" style={{scrollbarWidth: 'none'}}>

<article className="feed-article relative p-5 border-b border-white/[0.04] transition-all duration-500 bg-transparent">
<div className="active-indicator absolute left-0 top-0 bottom-0 w-[2px] bg-[#c878ff] opacity-0 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-3">
<div className="flex gap-3 items-center">
<div className="relative">
<img alt="Elena Rossi" className="w-9 h-9 rounded-full object-cover grayscale-[0.2]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<div className="absolute inset-0 rounded-full border border-white/10"></div>
</div>
<div className="flex flex-col">
<span className="text-base font-normal text-zinc-100">
                  Elena Rossi
                </span>
<span className="text-sm font-normal text-zinc-500 mt-0.5">
                  2h ago
                </span>
</div>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.03] rounded-md border border-white/[0.04]">
<i className="w-4 h-4 text-zinc-400" data-lucide="snowflake" strokeWidth="1.5"></i>
<span className="text-sm font-normal text-zinc-300">
                Snowboarding
              </span>
</div>
</div>
<p className="text-base font-normal text-zinc-300 leading-relaxed mb-4">
            First tracks of the season. The powder is unreal today up at the
            peak.
          </p>
<div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-zinc-900 relative border border-white/[0.04] group mb-4">
<img alt="Snowboarding" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale-[0.2] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-5">
<button className="flex items-center gap-1.5 text-zinc-500 hover:text-white transition-colors group">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
<span className="text-base font-normal">128</span>
</button>
<button className="flex items-center gap-1.5 text-zinc-500 hover:text-white transition-colors group">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
<span className="text-base font-normal">14</span>
</button>
<button className="flex items-center gap-1.5 text-zinc-500 hover:text-white transition-colors group ml-auto">
<i className="w-5 h-5" data-lucide="share" strokeWidth="1.5"></i>
</button>
</div>
</article>

<section className="py-5 border-b border-white/[0.04]">
<div className="px-5 flex flex-col mb-4">
<div className="flex justify-between items-center mb-1">
<h2 className="text-base font-normal tracking-tight text-zinc-100">
                People to connect with
              </h2>
<button className="text-sm font-normal text-zinc-400 hover:text-white transition-colors">
                See all
              </button>
</div>
</div>
<div className="flex gap-3 px-5 overflow-x-auto pb-4" style={{scrollbarWidth: 'none'}}>

<div className="flex-none w-[340px] bg-[#c878ff]/[0.04] border border-[#c878ff]/20 rounded-[20px] p-4 flex flex-col gap-3 hover:bg-[#c878ff]/[0.06] transition-colors relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c878ff]"></div>
<div className="flex gap-4 items-start">
<img alt="Sam Ryder" className="w-12 h-12 rounded-full object-cover shrink-0" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=crop&amp;w=150&amp;h=150&amp;q=80"/>
<div className="flex-1 min-w-0 flex flex-col">
<div className="flex items-start justify-between gap-2">
<div className="flex flex-col min-w-0">
<h3 className="text-base font-normal text-zinc-100 tracking-tight truncate">
                        Sam Ryder
                      </h3>
<p className="text-xs font-normal text-zinc-500 flex items-center gap-1 mt-0.5 truncate">
<i className="text-zinc-500 shrink-0 w-3 h-3" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="truncate">Lake Tahoe, CA</span>
</p>
</div>
<button className="px-3 py-1.5 bg-white hover:bg-zinc-200 text-black text-xs font-normal rounded-full transition-colors shrink-0">
                      Connect
                    </button>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-2">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#c878ff]/10 border border-[#c878ff]/20 text-xs font-normal text-[#f2d9ff]">
<i className="w-3.5 h-3.5 text-[#c878ff]" data-lucide="snowflake" strokeWidth="1.5"></i>
<span>
                    Snowboard
                    <span className="text-[#c878ff]/50 mx-0.5">·</span>
<span className="text-[#c878ff]/80">Pro</span>
</span>
</div>
<div className="inline-flex items-center px-2 py-1 rounded-lg bg-zinc-800/40 border border-zinc-700/50 text-xs font-normal text-zinc-200">
<span>
                    Hike
                    <span className="text-zinc-600 mx-0.5">·</span>
<span className="text-zinc-400">Adv</span>
</span>
</div>
</div>
</div>

<div className="flex-none w-[340px] bg-[#0A0A0A] border border-white/[0.06] rounded-[20px] p-4 flex flex-col gap-3 hover:bg-white/[0.02] transition-colors">
<div className="flex gap-4 items-start">
<img alt="Nina Kraviz" className="w-12 h-12 rounded-full object-cover shrink-0" src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&amp;fit=crop&amp;w=150&amp;h=150&amp;q=80"/>
<div className="flex-1 min-w-0 flex flex-col">
<div className="flex items-start justify-between gap-2">
<div className="flex flex-col min-w-0">
<h3 className="text-base font-normal text-zinc-100 tracking-tight truncate">
                        Nina Kraviz
                      </h3>
<p className="text-xs font-normal text-zinc-500 flex items-center gap-1 mt-0.5 truncate">
<i className="text-zinc-500 shrink-0 w-3 h-3" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="truncate">Breckenridge, CO</span>
</p>
</div>
<button className="px-3 py-1.5 bg-white hover:bg-zinc-200 text-black text-xs font-normal rounded-full transition-colors shrink-0">
                      Connect
                    </button>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-2">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-normal text-cyan-100">
<i className="w-3.5 h-3.5 text-cyan-400" data-lucide="snowflake" strokeWidth="1.5"></i>
<span>
                    Ski
                    <span className="text-cyan-500/50 mx-0.5">·</span>
<span className="text-cyan-400/80">Expert</span>
</span>
</div>
<div className="inline-flex items-center px-2 py-1 rounded-lg bg-zinc-800/40 border border-zinc-700/50 text-xs font-normal text-zinc-200">
<span>
                    Bike
                    <span className="text-zinc-600 mx-0.5">·</span>
<span className="text-zinc-400">Int</span>
</span>
</div>
</div>
</div>
</div>
</section>

<article className="feed-article relative p-5 border-b border-white/[0.04] transition-all duration-500 bg-transparent mt-2">
<div className="active-indicator absolute left-0 top-0 bottom-0 w-[2px] bg-[#c878ff] opacity-0 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-3">
<div className="flex gap-3 items-center">
<div className="relative">
<img alt="Marcus Jin" className="w-9 h-9 rounded-full object-cover grayscale-[0.2]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<div className="absolute inset-0 rounded-full border border-[#c878ff]/20"></div>
</div>
<div className="flex flex-col">
<span className="text-base font-normal text-zinc-100">
                  Marcus Jin
                </span>
<span className="text-sm font-normal text-zinc-500 mt-0.5">
                  5h ago
                </span>
</div>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#c878ff]/10 rounded-md border border-[#c878ff]/20">
<i className="w-4 h-4 text-[#c878ff]" data-lucide="compass" strokeWidth="1.5"></i>
<span className="text-sm font-normal text-[#c878ff]">Hiking</span>
</div>
</div>
<p className="text-base font-normal text-zinc-300 leading-relaxed mb-4">
            Made it to the summit just before sunrise. The 12-mile trek was
            completely worth this view.
          </p>
<div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-zinc-900 relative border border-white/[0.04] group mb-4">
<img alt="Hiking summit" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale-[0.2] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-5">
<button className="flex items-center gap-1.5 text-[#c878ff] transition-colors group">
<i className="w-5 h-5 text-[#c878ff]" data-lucide="heart" strokeWidth="1.5"></i>
<span className="text-base font-normal">342</span>
</button>
<button className="flex items-center gap-1.5 text-zinc-500 hover:text-white transition-colors group">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
<span className="text-base font-normal">45</span>
</button>
<button className="flex items-center gap-1.5 text-zinc-500 hover:text-white transition-colors group ml-auto">
<i className="w-5 h-5" data-lucide="share" strokeWidth="1.5"></i>
</button>
</div>
</article>
</div>

<div className="absolute bottom-6 inset-x-0 flex justify-center z-30 pointer-events-none">
<nav className="flex items-center gap-1 p-1.5 bg-[#111111]/80 backdrop-blur-2xl border border-white/[0.06] rounded-full shadow-[0_16px_32px_-8px_rgba(0,0,0,0.8)] pointer-events-auto">
<button className="flex items-center justify-center w-11 h-11 text-white rounded-full hover:bg-white/5 transition-colors">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
</button>
<button className="flex items-center justify-center w-11 h-11 text-zinc-500 hover:text-white rounded-full hover:bg-white/5 transition-colors">
<i className="w-6 h-6" data-lucide="search" strokeWidth="1.5"></i>
</button>
<button className="flex items-center justify-center w-10 h-10 mx-1 bg-white text-black rounded-full hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_-4px_rgba(255,255,255,0.4)]" id="openCreateBtn">
<i className="w-6 h-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<button className="flex items-center justify-center w-11 h-11 text-zinc-500 hover:text-white rounded-full hover:bg-white/5 transition-colors">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</button>
<button className="flex items-center justify-center w-11 h-11 text-zinc-500 hover:text-white rounded-full hover:bg-white/5 transition-colors">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</button>
</nav>
</div>

<div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-20"></div>

<div className="absolute inset-0 z-50 flex flex-col justify-end opacity-0 pointer-events-none transition-opacity duration-300" id="createOverlay">

<div className="absolute inset-0 bg-[#050505]/20 backdrop-blur-[2px] transition-opacity" id="createBackdrop"></div>

<div className="relative w-full bg-gradient-to-b from-[#8844b8]/40 to-[#050505]/80 backdrop-blur-2xl border-t border-[#c878ff]/40 rounded-t-[32px] p-5 pb-10 shadow-[0_-40px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(200,120,255,0.3)] transform translate-y-full transition-transform duration-300 ease-out flex flex-col gap-5 pointer-events-auto" id="createSheet">
<div className="w-12 h-1.5 bg-white/[0.1] rounded-full mx-auto -mt-2 mb-1"></div>
<div className="flex justify-between items-center px-1">
<h2 className="text-2xl font-normal tracking-tight text-zinc-100">
              Post to feed
            </h2>
<button className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.1] flex items-center justify-center text-zinc-400 hover:text-white transition-colors" id="closeCreatePanel">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<button className="w-full relative h-[160px] rounded-[20px] overflow-hidden border border-white/[0.08] hover:border-[#c878ff]/50 transition-all duration-300 group block text-left shadow-[0_8px_32px_-8px_rgba(0,0,0,0.8)]">
<img alt="Map View" className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale-[0.2] group-hover:scale-105 group-hover:opacity-90 transition-all duration-700" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/10 transition-colors duration-500"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
<div className="bg-[#c878ff] text-white px-7 py-3.5 rounded-2xl flex items-center gap-3 shadow-[0_0_24px_rgba(200,120,255,0.4)] group-hover:shadow-[0_0_32px_rgba(200,120,255,0.6)] group-hover:scale-105 transition-all duration-300 group-hover:bg-[#d896ff]">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
</div>
<span className="text-base font-medium tracking-tight text-zinc-950">
                  Start Tracking
                </span>
</div>
<span className="text-xs font-normal text-zinc-300 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                Record your next adventure
              </span>
</div>
<div className="absolute bottom-3 left-4 flex items-center gap-1 opacity-50">
<span className="text-xs font-normal text-white">Apple Maps</span>
</div>
</button>
<div className="flex gap-3">
<button className="flex-1 relative overflow-hidden flex flex-col items-center justify-center gap-3 p-5 rounded-[20px] bg-gradient-to-b from-[#c878ff]/15 to-transparent border border-[#c878ff]/30 hover:border-[#c878ff]/60 transition-all duration-300 group shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_16px_-8px_rgba(200,120,255,0.15)] hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_12px_24px_-8px_rgba(200,120,255,0.3)]">
<div className="absolute inset-0 bg-gradient-to-b from-[#c878ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
<div className="relative w-12 h-12 rounded-full bg-[#c878ff]/20 border border-[#c878ff]/40 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(200,120,255,0.5)] transition-all duration-300">
<i className="w-5 h-5 text-[#f2d9ff]" data-lucide="edit-3" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col items-center gap-1 relative z-10">
<span className="text-base font-normal tracking-tight text-white">
                  Write a post
                </span>
<span className="text-xs font-normal text-zinc-400">
                  Share your thoughts
                </span>
</div>
</button>
<button className="flex-1 relative overflow-hidden flex flex-col items-center justify-center gap-3 p-5 rounded-[20px] bg-gradient-to-b from-cyan-500/15 to-transparent border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 group shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_16px_-8px_rgba(6,182,212,0.15)] hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_12px_24px_-8px_rgba(6,182,212,0.3)]">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
<div className="relative w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
<i className="w-5 h-5 text-cyan-200" data-lucide="camera" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col items-center gap-1 relative z-10">
<span className="text-base font-normal tracking-tight text-white">
                  Upload photo
                </span>
<span className="text-xs font-normal text-zinc-400">
                  Show your adventure
                </span>
</div>
</button>
</div>
<div className="hidden gap-2">
<button className="flex-1 bg-[#050505] border border-white/[0.04] hover:bg-white/[0.02] py-3 px-3 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all group hover:border-white/[0.08]">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="cloud-sun" strokeWidth="1.5"></i>
<span className="text-sm font-normal text-zinc-300">Weather</span>
</button>
<button className="flex-1 bg-[#050505] border border-white/[0.04] hover:bg-white/[0.02] py-3 px-3 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all group hover:border-white/[0.08]">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="video" strokeWidth="1.5"></i>
<span className="text-sm font-normal text-zinc-300">Cams</span>
</button>
<button className="flex-1 bg-[#050505] border border-white/[0.04] hover:bg-white/[0.02] py-3 px-3 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all group hover:border-white/[0.08]">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="message-square" strokeWidth="1.5"></i>
<span className="text-sm font-normal text-zinc-300">Chat</span>
</button>
</div>
</div>
</div>
</main>


    </>
  );
}
