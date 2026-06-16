import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobileMenu = document.getElementById('closeMobileMenu');

  mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.remove('hidden');
  });

  closeMobileMenu?.addEventListener('click', () => {
    mobileMenu?.classList.add('hidden');
  });

  // Close mobile menu when clicking on nav links
  document.querySelectorAll('#mobileMenu nav a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative isolate min-h-screen flex flex-col">

<div className="absolute inset-0 -z-10">
<img alt="" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e20c91b-860e-4c2f-9c61-acca8fa7428f_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/95 via-zinc-900/40 to-zinc-900/75"></div>
<div className="absolute inset-0 border border-white/5 rounded-3xl"></div>
</div>

<header className="w-full fade-in">
<div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 lg:px-8">
<div className="flex items-center gap-10">
<a className="flex items-end gap-1 text-xl font-medium tracking-tighter transition hover:text-white/80" href="#">
          Veilhaven
        </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-light">
<a className="flex items-center gap-1.5 transition hover:text-white/80 group" href="#journeys">
            Journeys
          </a>
<a className="flex items-center gap-1.5 transition hover:text-white/80 group" href="#places">
            Sacred Places
          </a>
<a className="flex items-center gap-1.5 transition hover:text-white/80 group" href="#notes">
            Whispered Notes
          </a>
<a className="flex items-center gap-1.5 transition hover:text-white/80 group" href="#community">
            Community
          </a>
</nav>
</div>
<div className="flex items-center gap-4">

<button className="hidden lg:flex items-center justify-center size-9 rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:bg-white/10 hover:border-white/20 group">
<svg className="lucide lucide-bell size-4 group-hover:scale-110 transition-transform" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>

<a className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-normal backdrop-blur transition hover:bg-white/10 hover:border-white/20 hover:scale-105 group" href="#">
          Begin Journey
          <svg className="lucide lucide-arrow-up-right size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>

<button className="md:hidden flex items-center justify-center size-9 rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:bg-white/10" id="mobileMenuBtn">
<svg className="lucide lucide-menu size-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</header>

<div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 lg:px-8">
<div className="max-w-2xl" id="aura-emdcesx49">
<div className="fade-in fade-in-delay-1">
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-waves size-5 text-zinc-400" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<span className="text-sm font-light tracking-wider text-zinc-400 uppercase">Echoing Realms</span>
</div>
</div>
<h1 className="leading-tight md:text-7xl lg:text-8xl fade-in fade-in-delay-2 text-5xl font-medium tracking-tight" id="aura-emdcessnq">
        Whispers of
        <span className="text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text">Tranquility</span>
</h1>
<div className="fade-in fade-in-delay-3" id="aura-emdcesw76">
<p className="text-lg md:text-xl leading-relaxed text-zinc-300 font-light max-w-lg mt-6">
    Embrace the quiet — where every pause tells a story.
    <span className="text-zinc-400">The breeze. The shadows. Your heartbeat. Your journey.</span>
</p>
</div>
<div className="mt-10 flex flex-col sm:flex-row gap-4 fade-in fade-in-delay-4">
<a className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-medium text-zinc-900 shadow-lg transition hover:bg-zinc-100 hover:scale-105 hover:shadow-xl group" href="#journeys">
<svg className="lucide lucide-footprints size-4 group-hover:scale-110 transition-transform" data-lucide="footprints" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"></path><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"></path><path d="M16 17h4"></path><path d="M4 13h4"></path></svg>
          Follow the Path
          <svg className="lucide lucide-arrow-right size-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 backdrop-blur px-8 py-4 text-sm font-medium transition hover:bg-white/10 hover:border-white/30 hover:scale-105 group" href="#places">
<svg className="lucide lucide-play size-4 group-hover:scale-110 transition-transform" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
          Listen to Whispers
        </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900" id="journeys">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16 fade-in">
<h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl mb-6">Sacred Journeys</h2>
<p className="text-lg leading-8 text-zinc-400">Each path holds its own rhythm, its own quiet revelations waiting to unfold.</p>
</div>
<div className="grid grid-cols-1 gap-8 lg:grid-cols-3 fade-in fade-in-delay-1">
<div className="relative overflow-hidden rounded-3xl bg-zinc-800/50 border border-zinc-700/50 p-8 backdrop-blur hover:bg-zinc-800/70 transition-all duration-300 group">
<div className="absolute top-4 right-4">
<svg className="lucide lucide-sunrise size-6 text-amber-400" data-lucide="sunrise" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v8"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="m8 6 4-4 4 4"></path><path d="M16 18a4 4 0 0 0-8 0"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-4">Dawn's First Breath</h3>
<p className="text-zinc-300 mb-6">When the world awakens slowly, find yourself in the gentle transition between night and day.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition group-hover:translate-x-1 transform" href="#">
          Begin Journey
          <svg className="lucide lucide-arrow-right size-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="relative overflow-hidden rounded-3xl bg-zinc-800/50 border border-zinc-700/50 p-8 backdrop-blur hover:bg-zinc-800/70 transition-all duration-300 group">
<div className="absolute top-4 right-4">
<svg className="lucide lucide-moon size-6 text-blue-400" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-4">Moonlit Reflections</h3>
<p className="text-zinc-300 mb-6">In darkness, we find different kinds of clarity. Let the moon guide your inner compass.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition group-hover:translate-x-1 transform" href="#">
          Begin Journey
          <svg className="lucide lucide-arrow-right size-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="relative overflow-hidden rounded-3xl bg-zinc-800/50 border border-zinc-700/50 p-8 backdrop-blur hover:bg-zinc-800/70 transition-all duration-300 group">
<div className="absolute top-4 right-4">
<svg className="lucide lucide-droplets size-6 text-cyan-400" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2.04 4.6 4.14 6.12s3.83 2.96 4.36 5.06c-.53 2.1-2.26 3.74-4.36 5.06S14.5 21.48 14 24c-.5-2.5-2.04-4.6-4.14-6.12S6.03 15.92 5.5 13.82c.53-2.1 2.26-3.74 4.36-5.06S12.06 6.6 12.56 6.6z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-4">Water's Memory</h3>
<p className="text-zinc-300 mb-6">Follow the ancient wisdom of flowing water, learning the art of gentle persistence.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition group-hover:translate-x-1 transform" href="#">
          Begin Journey
          <svg className="lucide lucide-arrow-right size-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative overflow-hidden" id="places">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-transparent"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
<div className="mx-auto max-w-2xl text-center mb-16 fade-in">
<h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl mb-6">Sacred Spaces</h2>
<p className="text-lg leading-8 text-zinc-400">Places where time moves differently, where whispers become prayers.</p>
</div>
<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
<div className="fade-in fade-in-delay-1">
<div className="rounded-3xl overflow-hidden bg-zinc-800/30 border border-zinc-700/30 backdrop-blur">
<img alt="Misty forest path" className="w-full h-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/945ae6b8-3f41-4f19-b61e-fc8d622ec7c0_1600w.jpg"/>
<div className="p-8">
<h3 className="text-2xl font-medium text-white mb-4">The Whispering Grove</h3>
<p className="text-zinc-300 mb-6">Ancient trees hold conversations in languages older than words. Listen closely.</p>
<div className="flex items-center gap-4">
<span className="inline-flex items-center gap-1 text-sm text-zinc-400">
<svg className="lucide lucide-map-pin size-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Northern Highlands
              </span>
<span className="inline-flex items-center gap-1 text-sm text-zinc-400">
<svg className="lucide lucide-clock size-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                2-3 hours
              </span>
</div>
</div>
</div>
</div>
<div className="fade-in fade-in-delay-2">
<div className="rounded-3xl overflow-hidden bg-zinc-800/30 border border-zinc-700/30 backdrop-blur">
<img alt="Serene lake at sunset" className="w-full h-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ea8340c6-2f32-4780-8a61-0075ee995c03_1600w.jpg"/>
<div className="p-8">
<h3 className="text-2xl font-medium text-white mb-4">Mirror Lake</h3>
<p className="text-zinc-300 mb-6">Where sky and water become indistinguishable, and reflections reveal truth.</p>
<div className="flex items-center gap-4">
<span className="inline-flex items-center gap-1 text-sm text-zinc-400">
<svg className="lucide lucide-map-pin size-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Eastern Valley
              </span>
<span className="inline-flex items-center gap-1 text-sm text-zinc-400">
<svg className="lucide lucide-clock size-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                1-2 hours
              </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900" id="notes">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16 fade-in">
<h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl mb-6">Whispered Notes</h2>
<p className="text-lg leading-8 text-zinc-400">Fragments of wisdom left by fellow travelers on this quiet path.</p>
</div>
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
<div className="rounded-3xl bg-zinc-800/50 border border-zinc-700/30 p-8 backdrop-blur fade-in fade-in-delay-1 hover:bg-zinc-800/70 transition-all duration-300">
<div className="mb-6">
<svg className="lucide lucide-quote size-8 text-zinc-600" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<blockquote className="text-lg text-zinc-200 mb-6 font-light leading-relaxed">
          "In the deepest silence, I found the loudest truths about myself."
        </blockquote>
<div className="flex items-center gap-3">
<img alt="Traveler" className="size-10 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb205ad5-97fe-4855-b28b-05c6a796f20f_320w.jpg"/>
<div className="">
<div className="text-sm font-medium text-white">Elena Chen</div>
<div className="text-sm text-zinc-400">Dawn Walker</div>
</div>
</div>
</div>
<div className="rounded-3xl bg-zinc-800/50 border border-zinc-700/30 p-8 backdrop-blur fade-in fade-in-delay-2 hover:bg-zinc-800/70 transition-all duration-300">
<div className="mb-6">
<svg className="lucide lucide-quote size-8 text-zinc-600" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<blockquote className="text-lg text-zinc-200 mb-6 font-light leading-relaxed">
          "The water taught me patience. Every ripple carries a lesson in letting go."
        </blockquote>
<div className="flex items-center gap-3">
<img alt="Traveler" className="size-10 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb990be3-dd53-4b38-aca4-7b6423eb2baa_320w.jpg"/>
<div className="">
<div className="text-sm font-medium text-white">Marcus River</div>
<div className="text-sm text-zinc-400">Water Keeper</div>
</div>
</div>
</div>
<div className="rounded-3xl bg-zinc-800/50 border border-zinc-700/30 p-8 backdrop-blur fade-in fade-in-delay-3 hover:bg-zinc-800/70 transition-all duration-300">
<div className="mb-6">
<svg className="lucide lucide-quote size-8 text-zinc-600" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<blockquote className="text-lg text-zinc-200 mb-6 font-light leading-relaxed">
          "Every step in silence is a step toward understanding what was always within."
        </blockquote>
<div className="flex items-center gap-3">
<img alt="Traveler" className="size-10 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd1eb571-6afa-4553-9637-e3d69570481a_320w.jpg"/>
<div>
<div className="text-sm font-medium text-white">Aria Moon</div>
<div className="text-sm text-zinc-400">Silent Walker</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative overflow-hidden" id="community">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/50 to-zinc-900/90"></div>
<img alt="Community gathering" className="w-full h-full object-cover opacity-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0db47eea-1632-45dc-911f-2c9f72fafb6a_3840w.jpg"/>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
<div className="mx-auto max-w-2xl text-center mb-16 fade-in">
<h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl mb-6">Quiet Community</h2>
<p className="text-lg leading-8 text-zinc-400">Join souls who understand that the deepest conversations happen in shared silence.</p>
</div>
<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
<div className="fade-in fade-in-delay-1">
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="">
<h3 className="text-xl font-medium text-white mb-2">Silent Circles</h3>
<p className="text-zinc-300 leading-relaxed">Gather with fellow travelers in moments of shared stillness, where presence speaks louder than words.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="">
<h3 className="text-xl font-medium text-white mb-2">Gentle Support</h3>
<p className="text-zinc-300 leading-relaxed">Find understanding companions who honor your journey without judgment or urgency to fill the quiet spaces.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="">
<h3 className="text-xl font-medium text-white mb-2">Whispered Wisdom</h3>
<p className="text-zinc-300 leading-relaxed">Share insights through gentle exchanges, where every word carries the weight of considered silence.</p>
</div>
</div>
</div>
</div>
<div className="fade-in fade-in-delay-2">
<div className="rounded-3xl bg-zinc-800/50 border border-zinc-700/30 backdrop-blur p-8">
<h3 className="text-2xl font-medium text-white mb-6">Join Our Quiet Circle</h3>
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="name">Your Name</label>
<input className="w-full rounded-2xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-400 focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/50 backdrop-blur" id="name" name="name" placeholder="How shall we know you?" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="email">Email</label>
<input className="w-full rounded-2xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-400 focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/50 backdrop-blur" id="email" name="email" placeholder="your@email.com" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="intention">Your Intention</label>
<textarea className="w-full rounded-2xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-400 focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/50 backdrop-blur resize-none" id="intention" name="intention" placeholder="What brings you to seek silence?" rows="4"></textarea>
</div>
<button className="w-full rounded-2xl bg-white px-6 py-4 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 hover:scale-105 shadow-lg" type="submit">
              Enter the Circle
            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 bg-zinc-900 border-t border-zinc-800">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
<div className="lg:col-span-2">
<div className="flex items-end gap-2 mb-6">
<h3 className="text-2xl font-medium tracking-tight text-white">Veilhaven</h3>
<span className="text-sm text-zinc-400 mb-1">Where Silence Speaks</span>
</div>
<p className="text-zinc-400 leading-relaxed max-w-md mb-8">
          A sanctuary for those who find wisdom in quietude, strength in stillness, and truth in the spaces between words.
        </p>
<div className="flex items-center gap-4">
<a className="flex items-center justify-center size-10 rounded-2xl border border-zinc-700 bg-zinc-800/50 text-zinc-400 transition hover:bg-zinc-700 hover:text-white backdrop-blur" href="#">
<svg className="lucide lucide-twitter size-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="flex items-center justify-center size-10 rounded-2xl border border-zinc-700 bg-zinc-800/50 text-zinc-400 transition hover:bg-zinc-700 hover:text-white backdrop-blur" href="#">
<svg className="lucide lucide-instagram size-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="flex items-center justify-center size-10 rounded-2xl border border-zinc-700 bg-zinc-800/50 text-zinc-400 transition hover:bg-zinc-700 hover:text-white backdrop-blur" href="#">
<svg className="lucide lucide-mail size-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-10 5L2 7"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">Paths</h4>
<ul className="space-y-4">
<li><a className="text-zinc-400 hover:text-white transition" href="#journeys">Sacred Journeys</a></li>
<li><a className="text-zinc-400 hover:text-white transition" href="#places">Sacred Places</a></li>
<li><a className="text-zinc-400 hover:text-white transition" href="#notes">Whispered Notes</a></li>
<li><a className="text-zinc-400 hover:text-white transition" href="#community">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">Sanctuary</h4>
<ul className="space-y-4">
<li><a className="text-zinc-400 hover:text-white transition" href="#">About Silence</a></li>
<li><a className="text-zinc-400 hover:text-white transition" href="#">Guide Principles</a></li>
<li><a className="text-zinc-400 hover:text-white transition" href="#">Privacy</a></li>
<li><a className="text-zinc-400 hover:text-white transition" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-zinc-800">
<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-sm text-zinc-400">
          © 2024 Veilhaven. All rights reserved. Created with reverence for quiet moments.
        </p>
<div className="flex items-center gap-6 text-sm text-zinc-400">
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Cookies</a>
</div>
</div>
</div>
</div>
</footer>

<div className="hidden fixed inset-0 z-50 bg-zinc-900/95 backdrop-blur-lg lg:hidden" id="mobileMenu">
<div className="flex flex-col h-full">
<div className="flex items-center justify-between p-6 border-b border-zinc-800">
<h2 className="text-xl font-medium text-white">Veilhaven</h2>
<button className="flex items-center justify-center size-9 rounded-2xl border border-zinc-700 bg-zinc-800/50 text-white" id="closeMobileMenu">
<svg className="lucide lucide-x size-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="flex-1 p-6">
<ul className="space-y-6">
<li><a className="block text-lg text-zinc-300 hover:text-white transition" href="#journeys">Journeys</a></li>
<li><a className="block text-lg text-zinc-300 hover:text-white transition" href="#places">Sacred Places</a></li>
<li><a className="block text-lg text-zinc-300 hover:text-white transition" href="#notes">Whispered Notes</a></li>
<li><a className="block text-lg text-zinc-300 hover:text-white transition" href="#community">Community</a></li>
</ul>
</nav>
<div className="p-6 border-t border-zinc-800">
<a className="block w-full rounded-2xl bg-white px-6 py-4 text-center text-sm font-medium text-zinc-900 transition hover:bg-zinc-100" href="#">
        Begin Journey
      </a>
</div>
</div>
</div>


    </>
  );
}
