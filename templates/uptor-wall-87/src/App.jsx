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



      // Initialize icons
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Mobile menu toggle
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
          const expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
          mobileBtn.setAttribute('aria-expanded', String(!expanded));
          mobileMenu.classList.toggle('hidden');
        });
      }

      // Year in footer
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();

      // Load more functionality
      const loadMoreBtn = document.getElementById('loadMore');
      const masonry = document.getElementById('masonry');
      const templates = document.getElementById('templates');
      if (loadMoreBtn && masonry && templates) {
        loadMoreBtn.addEventListener('click', () => {
          const clones = templates.cloneNode(true);
          const articles = clones.querySelectorAll('article');
          articles.forEach((a) => {
            a.classList.remove('hidden');
            masonry.appendChild(a);
          });
          if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        });
      }

      // Carousel
      const track = document.getElementById('carouselTrack');
      const prev = document.getElementById('prevSlide');
      const next = document.getElementById('nextSlide');
      const prevM = document.getElementById('prevSlideM');
      const nextM = document.getElementById('nextSlideM');
      let index = 0;
      const total = track ? track.children.length : 0;

      function goTo(i) {
        if (!track) return;
        index = (i + total) % total;
        track.style.transform = `translateX(-${index * 100}%)`;
      }

      function nextSlide() { goTo(index + 1); }
      function prevSlide() { goTo(index - 1); }

      if (next) next.addEventListener('click', nextSlide);
      if (prev) prev.addEventListener('click', prevSlide);
      if (nextM) nextM.addEventListener('click', nextSlide);
      if (prevM) prevM.addEventListener('click', prevSlide);

      // Auto-slide
      let auto = setInterval(nextSlide, 6000);
      const carouselContainer = track?.parentElement?.parentElement;
      if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => clearInterval(auto));
        carouselContainer.addEventListener('mouseleave', () => { auto = setInterval(nextSlide, 6000); });
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-32 -left-24 h-72 w-72 rounded-full blur-3xl" style={{background: 'radial-gradient(40% 40% at 50% 50%, rgba(255,0,122,0.25), transparent 70%)'}}></div>
<div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl" style={{background: 'radial-gradient(40% 40% at 50% 50%, rgba(255,0,122,0.18), transparent 70%)'}}></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
<div className="w-full bg-gradient-to-b from-black/70 to-black/30 border-b border-white/5">
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a aria-label="Uptor Home" className="flex items-center gap-2 group" href="#">
<div className="h-7 w-7 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center group-hover:ring-[#ff007a]/40 transition">
<span className="text-[11px] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>UP</span>
</div>
<span className="text-sm sm:text-base font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>Uptor</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/80 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a] rounded-md px-1 py-1" href="#">Courses</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a] rounded-md px-1 py-1" href="#">Workshops</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a] rounded-md px-1 py-1" href="#">Community</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a] rounded-md px-1 py-1" href="#">Help &amp; Support</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium text-white/80 hover:text-white transition px-3 py-2 rounded-xl border border-white/10 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" href="#">Login</a>
<a className="text-sm font-medium px-4 py-2 rounded-xl bg-[#ff007a] text-white shadow-[0_0_0_1px_rgba(255,0,122,0.35)] hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[#ff007a]" href="#">Sign Up</a>
</div>

<button aria-expanded="false" aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-xl h-10 w-10 border border-white/10 hover:border-white/20 hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" id="mobileMenuBtn">
<i className="h-5 w-5 text-white/90" data-lucide="menu"></i>
</button>
</div>
</nav>

<div className="md:hidden hidden border-t border-white/5" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
<div className="grid gap-2">
<a className="text-sm font-medium text-white/90 hover:text-white transition px-3 py-2 rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" href="#">Courses</a>
<a className="text-sm font-medium text-white/90 hover:text-white transition px-3 py-2 rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" href="#">Workshops</a>
<a className="text-sm font-medium text-white/90 hover:text-white transition px-3 py-2 rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" href="#">Community</a>
<a className="text-sm font-medium text-white/90 hover:text-white transition px-3 py-2 rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" href="#">Help &amp; Support</a>
<div className="flex gap-2 pt-2">
<a className="flex-1 text-sm font-medium text-white/90 hover:text-white transition px-3 py-2 rounded-xl border border-white/10 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a] text-center" href="#">Login</a>
<a className="flex-1 text-sm font-medium px-3 py-2 rounded-xl bg-[#ff007a] text-white hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a] text-center" href="#">Sign Up</a>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative">
<div aria-hidden="true" className="absolute inset-0 -z-10">
<div className="h-[420px] w-full bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,0,122,0.10),rgba(11,11,11,0)_70%)]"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20">
<div className="max-w-2xl">
<p className="inline-flex items-center gap-2 text-xs font-medium text-white/70 px-2.5 py-1.5 rounded-full border border-white/10 bg-white/5">
<i className="h-4 w-4 text-[#ff007a]" data-lucide="sparkles"></i>
            Loved by learners worldwide
          </p>
<h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>Wall of Love</h1>
<p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-[#cfcfcf] font-medium">Real stories from Uptor learners on LinkedIn &amp; beyond</p>

<div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4 max-w-md">
<div className="rounded-xl border border-white/10 bg-[#111111]/80 px-3 py-3 sm:px-4 sm:py-4">
<div className="text-xl sm:text-2xl font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>2.8k+</div>
<div className="text-xs sm:text-sm text-[#cfcfcf]">Total posts</div>
</div>
<div className="rounded-xl border border-white/10 bg-[#111111]/80 px-3 py-3 sm:px-4 sm:py-4">
<div className="text-xl sm:text-2xl font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>35+</div>
<div className="text-xs sm:text-sm text-[#cfcfcf]">Courses &amp; workshops</div>
</div>
<div className="rounded-xl border border-white/10 bg-[#111111]/80 px-3 py-3 sm:px-4 sm:py-4">
<div className="text-xl sm:text-2xl font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>420+</div>
<div className="text-xs sm:text-sm text-[#cfcfcf]">Companies</div>
</div>
</div>

<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#ff007a] text-white text-sm font-medium shadow-[0_0_0_1px_rgba(255,0,122,0.35)] hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" href="#stories">
<i className="h-4 w-4" data-lucide="compass"></i>
              Explore Stories
            </a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" href="#share">
<i className="h-4 w-4" data-lucide="send"></i>
              Share Your Story
            </a>
</div>
</div>
</div>
</section>

<section className="relative" id="stories">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-14">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>What learners are saying</h2>
<p className="mt-1 text-sm text-[#cfcfcf]">Curated from LinkedIn, X, and community posts</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<div className="h-10 hidden sm:flex items-center rounded-xl border border-white/10 overflow-hidden">
<button className="px-3 py-2 text-xs font-medium text-white/80 hover:text-white hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]">Latest</button>
<div className="w-px bg-white/10 h-6 my-2"></div>
<button className="px-3 py-2 text-xs font-medium text-white/80 hover:text-white hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]">Most Liked</button>
<div className="w-px bg-white/10 h-6 my-2"></div>
<button className="px-3 py-2 text-xs font-medium text-white/80 hover:text-white hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]">Videos</button>
</div>
</div>
</div>

<div className="mt-6 columns-1 md:columns-2 xl:columns-3 2xl:columns-4 gap-4 space-y-4" id="masonry">

<article className="inline-block w-full break-inside-avoid rounded-xl border border-white/10 bg-[#111111] p-4 hover:-translate-y-0.5 hover:shadow-[0_0_0_2px_rgba(255,0,122,0.25),0_10px_30px_-15px_rgba(255,0,122,0.35)] transition">
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-1.5">
<p className="text-sm font-medium">Amelia Reyes</p>
<span className="inline-flex items-center gap-1 text-[10px] font-medium text-black px-1.5 py-0.5 rounded-full" style={{backgroundColor: '#00c46a'}}>
<i className="h-3.5 w-3.5" data-lucide="check-circle-2"></i> Verified
                    </span>
<span className="inline-flex items-center gap-1 text-[10px] font-medium text-white px-1.5 py-0.5 rounded-full border" style={{borderColor: '#ff007a', color: '#ff007a'}}>
<i className="h-3.5 w-3.5" data-lucide="graduation-cap"></i> Alumni
                    </span>
</div>
<p className="text-xs text-[#cfcfcf]">Product Designer · Airwave</p>
</div>
</div>
<div className="opacity-80">
<i className="h-5 w-5 text-[#0A66C2]" data-lucide="linkedin"></i>
</div>
</div>
<p className="mt-3 text-sm leading-6 text-white/90">Uptor’s workshops helped me break through analysis paralysis. Shipped my first side project in 10 days—my PM noticed and offered me to lead a pilot. Unreal.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-4 text-white/70">
<span className="inline-flex items-center gap-1 text-xs"><i className="h-4 w-4 text-[#ff007a]" data-lucide="heart"></i> 312</span>
<span className="inline-flex items-center gap-1 text-xs"><i className="h-4 w-4" data-lucide="message-circle"></i> 48</span>
<span className="inline-flex items-center gap-1 text-xs"><i className="h-4 w-4" data-lucide="share-2"></i> 19</span>
</div>
<time className="text-xs text-white/50">2d</time>
</div>
</article>

<article className="inline-block w-full break-inside-avoid rounded-xl border border-white/10 bg-[#111111] overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0_2px_rgba(255,0,122,0.25),0_10px_30px_-15px_rgba(255,0,122,0.35)] transition">
<div className="relative">
<img alt="Video testimonial" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<button aria-label="Play video" className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:border-white/40 hover:bg-white/15 flex items-center justify-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]">
<i className="h-6 w-6" data-lucide="play"></i>
</button>
<div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-1.5">
<p className="text-sm font-medium">Jordan Patel</p>
<span className="inline-flex items-center gap-1 text-[10px] font-medium text-black px-1.5 py-0.5 rounded-full" style={{backgroundColor: '#00c46a'}}>
<i className="h-3.5 w-3.5" data-lucide="check-circle-2"></i> Verified
                      </span>
</div>
<p className="text-[11px] text-[#cfcfcf]">Founder · Syncly</p>
</div>
</div>
<div className="flex items-center gap-3 text-white/80">
<span className="inline-flex items-center gap-1 text-xs"><i className="h-4 w-4 text-[#ff007a]" data-lucide="heart"></i> 1.1k</span>
<span className="inline-flex items-center gap-1 text-xs"><i className="h-4 w-4" data-lucide="message-circle"></i> 92</span>
</div>
</div>
</div>
<div className="p-4 border-t border-white/10">
<p className="text-sm text-white/90">From zero to revenue in 6 weeks. The accountability loop changed everything for me.</p>
</div>
</article>

<article className="inline-block w-full break-inside-avoid rounded-xl border border-white/10 bg-[#111111] overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0_2px_rgba(255,0,122,0.25),0_10px_30px_-15px_rgba(255,0,122,0.35)] transition">
<div className="relative">
<img alt="Workshop snapshot" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
<p className="text-sm font-medium">“Shipped a Notion system that got our team a 20% productivity boost.”</p>
<div className="mt-2 flex items-center gap-2">
<img alt="Avatar" className="h-8 w-8 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex items-center gap-2">
<span className="text-xs">Lena Cho · Ops @ Nimbus</span>
<span className="inline-flex items-center gap-1 text-[10px] font-medium text-white px-1.5 py-0.5 rounded-full border" style={{borderColor: '#ff007a', color: '#ff007a'}}>
<i className="h-3.5 w-3.5" data-lucide="graduation-cap"></i> Alumni
                    </span>
</div>
</div>
</div>
<div className="absolute top-3 right-3 rounded-full bg-black/60 border border-white/10 px-2.5 py-1 text-xs flex items-center gap-1">
<i className="h-4 w-4 text-[#0A66C2]" data-lucide="linkedin"></i> View
              </div>
</div>
</article>

<article className="inline-block w-full break-inside-avoid rounded-xl border border-white/10 bg-[#111111] p-4 hover:-translate-y-0.5 hover:shadow-[0_0_0_2px_rgba(255,0,122,0.25),0_10px_30px_-15px_rgba(255,0,122,0.35)] transition">
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-1.5">
<p className="text-sm font-medium">Marco Silva</p>
<span className="inline-flex items-center gap-1 text-[10px] font-medium text-black px-1.5 py-0.5 rounded-full" style={{backgroundColor: '#00c46a'}}>
<i className="h-3.5 w-3.5" data-lucide="check-circle-2"></i> Verified
                    </span>
</div>
<p className="text-xs text-[#cfcfcf]">Data Scientist · Beamly</p>
</div>
</div>
<i className="h-5 w-5 text-[#0A66C2] opacity-80" data-lucide="linkedin"></i>
</div>
<p className="mt-3 text-sm leading-6 text-white/90">Fell back in love with learning. The cohort energy and practical sprints were exactly what I needed to land my internal transfer.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-4 text-white/70">
<span className="inline-flex items-center gap-1 text-xs"><i className="h-4 w-4 text-[#ff007a]" data-lucide="heart"></i> 204</span>
<span className="inline-flex items-center gap-1 text-xs"><i className="h-4 w-4" data-lucide="message-circle"></i> 23</span>
<span className="inline-flex items-center gap-1 text-xs"><i className="h-4 w-4" data-lucide="share-2"></i> 11</span>
</div>
<time className="text-xs text-white/50">5d</time>
</div>
</article>

<article className="inline-block w-full break-inside-avoid rounded-xl border border-white/10 bg-[#111111] overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0_2px_rgba(255,0,122,0.25),0_10px_30px_-15px_rgba(255,0,122,0.35)] transition">
<div className="relative">
<img alt="Celebration" className="w-full h-52 object-cover" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
<p className="text-sm font-medium">“Promoted to Senior after shipping our experimentation framework.”</p>
<div className="mt-2 flex items-center gap-2">
<img alt="Avatar" className="h-8 w-8 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="text-xs">Priya Menon · Eng @ Hecto</span>
</div>
</div>
</div>
</article>

<article className="inline-block w-full break-inside-avoid rounded-xl border border-white/10 bg-[#111111] overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0_2px_rgba(255,0,122,0.25),0_10px_30px_-15px_rgba(255,0,122,0.35)] transition">
<div className="relative">
<img alt="Video testimonial" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<button aria-label="Play video" className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:border-white/40 hover:bg-white/15 flex items-center justify-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]">
<i className="h-6 w-6" data-lucide="play"></i>
</button>
<div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-1.5">
<p className="text-sm font-medium">Noah Kim</p>
<span className="inline-flex items-center gap-1 text-[10px] font-medium text-white px-1.5 py-0.5 rounded-full border" style={{borderColor: '#ff007a', color: '#ff007a'}}>
<i className="h-3.5 w-3.5" data-lucide="graduation-cap"></i> Alumni
                      </span>
</div>
<p className="text-[11px] text-[#cfcfcf]">Growth · Bytecraft</p>
</div>
</div>
<div className="flex items-center gap-3 text-white/80">
<span className="inline-flex items-center gap-1 text-xs"><i className="h-4 w-4 text-[#ff007a]" data-lucide="heart"></i> 876</span>
<span className="inline-flex items-center gap-1 text-xs"><i className="h-4 w-4" data-lucide="message-circle"></i> 67</span>
</div>
</div>
</div>
<div className="p-4 border-t border-white/10">
<p className="text-sm text-white/90">Candid review of my cohort experience and outcomes.</p>
</div>
</article>

<article className="inline-block w-full break-inside-avoid rounded-xl border border-white/10 bg-[#111111] p-4 hover:-translate-y-0.5 hover:shadow-[0_0_0_2px_rgba(255,0,122,0.25),0_10px_30px_-15px_rgba(255,0,122,0.35)] transition">
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-1.5">
<p className="text-sm font-medium">Sara Lind</p>
<span className="inline-flex items-center gap-1 text-[10px] font-medium text-black px-1.5 py-0.5 rounded-full" style={{backgroundColor: '#00c46a'}}>
<i className="h-3.5 w-3.5" data-lucide="check-circle-2"></i> Verified
                    </span>
</div>
<p className="text-xs text-[#cfcfcf]">PM · Northpeak</p>
</div>
</div>
<i className="h-5 w-5 text-[#0A66C2] opacity-80" data-lucide="linkedin"></i>
</div>
<p className="mt-3 text-sm leading-6 text-white/90">The templates alone saved me weeks. But the community feedback loops? Priceless.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-4 text-white/70">
<span className="inline-flex items-center gap-1 text-xs"><i className="h-4 w-4 text-[#ff007a]" data-lucide="heart"></i> 593</span>
<span className="inline-flex items-center gap-1 text-xs"><i className="h-4 w-4" data-lucide="message-circle"></i> 74</span>
</div>
<time className="text-xs text-white/50">1w</time>
</div>
</article>
</div>

<div className="mt-8 flex items-center justify-center">
<button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:text-white hover:border-white/30 hover:bg-white/5 transition text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" id="loadMore">
<i className="h-5 w-5" data-lucide="infinity"></i>
            Load more
          </button>
</div>

<div className="hidden" id="templates">
<article className="inline-block w-full break-inside-avoid rounded-xl border border-white/10 bg-[#111111] p-4 hover:-translate-y-0.5 hover:shadow-[0_0_0_2px_rgba(255,0,122,0.25),0_10px_30px_-15px_rgba(255,0,122,0.35)] transition">
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-1.5">
<p className="text-sm font-medium">Tariq Novak</p>
<span className="inline-flex items-center gap-1 text-[10px] font-medium text-white px-1.5 py-0.5 rounded-full border" style={{borderColor: '#ff007a', color: '#ff007a'}}>
<i className="h-3.5 w-3.5" data-lucide="graduation-cap"></i> Alumni
                    </span>
</div>
<p className="text-xs text-[#cfcfcf]">Analytics · Zephyr</p>
</div>
</div>
<i className="h-5 w-5 text-[#0A66C2] opacity-80" data-lucide="linkedin"></i>
</div>
<p className="mt-3 text-sm leading-6 text-white/90">I finally built a system that sticks. Weekly review ritual = career rocket fuel.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-4 text-white/70">
<span className="inline-flex items-center gap-1 text-xs"><i className="h-4 w-4 text-[#ff007a]" data-lucide="heart"></i> 188</span>
<span className="inline-flex items-center gap-1 text-xs"><i className="h-4 w-4" data-lucide="message-circle"></i> 21</span>
</div>
<time className="text-xs text-white/50">3d</time>
</div>
</article>
<article className="inline-block w-full break-inside-avoid rounded-xl border border-white/10 bg-[#111111] overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0_2px_rgba(255,0,122,0.25),0_10px_30px_-15px_rgba(255,0,122,0.35)] transition">
<div className="relative">
<img alt="Workshop board" className="w-full h-60 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
<p className="text-sm font-medium">“Our GTM sprint landed 3 pilot customers in 2 weeks.”</p>
<div className="mt-2 flex items-center gap-2">
<img alt="Avatar" className="h-8 w-8 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="text-xs">Jonas Armin · GTM @ Kairo</span>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="relative mt-14 sm:mt-16 md:mt-20">
<div className="absolute inset-0 -z-10">
<div className="h-full w-full bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,0,122,0.10),rgba(11,11,11,0)_70%)]"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>Spotlight stories</h3>
<div className="hidden sm:flex items-center gap-2">
<button aria-label="Previous" className="h-10 w-10 rounded-xl border border-white/15 hover:border-white/30 hover:bg-white/5 flex items-center justify-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" id="prevSlide">
<i className="h-5 w-5" data-lucide="chevron-left"></i>
</button>
<button aria-label="Next" className="h-10 w-10 rounded-xl border border-white/15 hover:border-white/30 hover:bg-white/5 flex items-center justify-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" id="nextSlide">
<i className="h-5 w-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="mt-6">
<div className="relative rounded-2xl border border-white/10 bg-[#0e0e0e] p-3 sm:p-4">
<div className="overflow-hidden rounded-xl">
<div className="flex transition-transform duration-500" id="carouselTrack">

<div className="min-w-full grid grid-cols-1 md:grid-cols-2">
<div className="relative">
<img alt="Learner story" className="h-64 md:h-full w-full object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
</div>
<div className="p-5 sm:p-8 flex flex-col justify-center">
<p className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight" style={{letterSpacing: '-0.015em'}}>“I thought I needed more time. I needed better systems. Uptor gave me both.”</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/15" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Deja Montoya</p>
<p className="text-xs text-[#cfcfcf]">Strategy · Velo</p>
</div>
</div>
<a className="mt-6 inline-flex items-center gap-2 w-fit px-4 py-2.5 rounded-xl bg-[#ff007a] text-white text-sm font-medium shadow-[0_0_0_1px_rgba(255,0,122,0.35)] hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i>
                      View Story on LinkedIn
                    </a>
</div>
</div>

<div className="min-w-full grid grid-cols-1 md:grid-cols-2">
<div className="relative">
<img alt="Learner board" className="h-64 md:h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
</div>
<div className="p-5 sm:p-8 flex flex-col justify-center">
<p className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight" style={{letterSpacing: '-0.015em'}}>“Weekly demos kept me honest. I shipped 3 micro-products and landed my first paying users.”</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/15" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Priya Menon</p>
<p className="text-xs text-[#cfcfcf]">Engineering · Hecto</p>
</div>
</div>
<a className="mt-6 inline-flex items-center gap-2 w-fit px-4 py-2.5 rounded-xl border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i>
                      View Story on LinkedIn
                    </a>
</div>
</div>

<div className="min-w-full grid grid-cols-1 md:grid-cols-2">
<div className="relative">
<img alt="Workshop group" className="h-64 md:h-full w-full object-cover" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
</div>
<div className="p-5 sm:p-8 flex flex-col justify-center">
<p className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight" style={{letterSpacing: '-0.015em'}}>“The mindset shift from consumer to creator unlocked my next role.”</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/15" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Marco Silva</p>
<p className="text-xs text-[#cfcfcf]">Data Science · Beamly</p>
</div>
</div>
<a className="mt-6 inline-flex items-center gap-2 w-fit px-4 py-2.5 rounded-xl bg-[#ff007a] text-white text-sm font-medium shadow-[0_0_0_1px_rgba(255,0,122,0.35)] hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i>
                      View Story on LinkedIn
                    </a>
</div>
</div>
</div>
</div>

<div className="mt-4 flex sm:hidden items-center justify-center gap-2">
<button aria-label="Previous" className="h-10 w-10 rounded-xl border border-white/15 hover:border-white/30 hover:bg-white/5 flex items-center justify-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" id="prevSlideM">
<i className="h-5 w-5" data-lucide="chevron-left"></i>
</button>
<button aria-label="Next" className="h-10 w-10 rounded-xl border border-white/15 hover:border-white/30 hover:bg-white/5 flex items-center justify-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" id="nextSlideM">
<i className="h-5 w-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="mt-14 sm:mt-16 md:mt-20" id="share">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-white/10 bg-[#0e0e0e] p-6 sm:p-8 relative overflow-hidden">
<div className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl" style={{background: 'radial-gradient(40% 40% at 50% 50%, rgba(255,0,122,0.18), transparent 70%)'}}></div>
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<h4 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>Share your Uptor story</h4>
<p className="mt-1 text-sm text-[#cfcfcf]">Post on LinkedIn and tag @Uptor or send us a link. We’ll feature the best.</p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#ff007a] text-white text-sm font-medium shadow-[0_0_0_1px_rgba(255,0,122,0.35)] hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" href="#">
<i className="h-4 w-4" data-lucide="send"></i>
                Submit a Link
              </a>
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a]" href="#">
<i className="h-4 w-4" data-lucide="message-square-text"></i>
                DM the Team
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-16 sm:mt-20 md:mt-24 border-t border-white/10 bg-black">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
<div className="col-span-1 lg:col-span-2">
<a className="flex items-center gap-2 w-fit" href="#">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-[11px] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>UP</span>
</div>
<span className="text-base font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>Uptor</span>
</a>
<p className="mt-3 text-sm text-white/60 max-w-sm">Systems, sprints, and community to help you build what matters.</p>
</div>
<div>
<h5 className="text-sm font-medium text-white/80">Explore</h5>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-white/60 hover:text-[#ff007a] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a] rounded" href="#">Courses</a></li>
<li><a className="text-white/60 hover:text-[#ff007a] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a] rounded" href="#">Workshops</a></li>
<li><a className="text-white/60 hover:text-[#ff007a] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a] rounded" href="#">Community</a></li>
<li><a className="text-white/60 hover:text-[#ff007a] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a] rounded" href="#">Help &amp; Support</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium text-white/80">Legal</h5>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-white/60 hover:text-[#ff007a] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a] rounded" href="#">Terms</a></li>
<li><a className="text-white/60 hover:text-[#ff007a] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a] rounded" href="#">Privacy</a></li>
<li><a className="text-white/60 hover:text-[#ff007a] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a] rounded" href="#">Testimonial Removal Policy</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium text-white/80">Contact</h5>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="inline-flex items-center gap-2 text-white/60 hover:text-[#ff007a] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a] rounded" href="mailto:hello@uptor.com">
<i className="h-4 w-4" data-lucide="mail"></i> hello@uptor.com
              </a></li>
<li><a className="inline-flex items-center gap-2 text-white/60 hover:text-[#ff007a] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007a] rounded" href="#">
<i className="h-4 w-4" data-lucide="message-circle"></i> Chat with us
              </a></li>
</ul>
</div>
</div>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
<p className="text-xs text-white/50">© <span id="year"></span> Uptor. All rights reserved.</p>
<div className="flex items-center gap-3">
<a aria-label="LinkedIn" className="h-9 w-9 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 flex items-center justify-center transition" href="#">
<i className="h-4.5 w-4.5" data-lucide="linkedin"></i>
</a>
<a aria-label="Twitter" className="h-9 w-9 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 flex items-center justify-center transition" href="#">
<i className="h-4.5 w-4.5" data-lucide="twitter"></i>
</a>
<a aria-label="YouTube" className="h-9 w-9 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 flex items-center justify-center transition" href="#">
<i className="h-4.5 w-4.5" data-lucide="youtube"></i>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
