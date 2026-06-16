import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      lucide.createIcons();

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Simple marquee for logo chips
      (function() {
        const track = document.getElementById('logoTrack');
        if (!track) return;
        // Duplicate children to create endless loop
        const children = Array.from(track.children);
        children.forEach(node => track.appendChild(node.cloneNode(true)));

        let pos = 0;
        function step() {
          pos -= 0.5; // speed
          const width = track.scrollWidth / 2;
          if (Math.abs(pos) >= width) pos = 0;
          track.style.transform = 'translateX(' + pos + 'px)';
          requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="inline-flex items-center gap-2" href="#">
<span className="relative inline-flex h-8 w-8 items-center justify-center">
<span className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-500 to-rose-600 blur-[6px] opacity-70"></span>
<span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white">
<i className="h-4 w-4" data-lucide="flame"></i>
</span>
</span>
<span className="text-lg tracking-tight font-semibold">Social Tadka</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
<a className="hover:text-neutral-900" href="#services">Services</a>
<a className="hover:text-neutral-900" href="#work">Work</a>
<a className="hover:text-neutral-900" href="#how">How It Works</a>
<a className="hover:text-neutral-900" href="#partners">Partners</a>
<a className="hover:text-neutral-900" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-neutral-800" href="#contact">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span>Spice It Up</span>
</a>
<button className="md:hidden inline-flex items-center justify-center rounded-lg border border-neutral-200 px-3 py-2">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-rose-500/10 to-amber-400/20"></div>
<img alt="" className="h-full w-full object-cover opacity-15" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=2060&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-3 py-1 text-xs font-medium">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="bolt"></i>
<span>Trending-first content studio</span>
</div>
<h1 className="mt-5 text-4xl md:text-5xl tracking-tight font-semibold text-neutral-950">
              We Make Your Brand the Main Character.
            </h1>
<p className="mt-4 text-base md:text-lg text-neutral-700">
              Memes, reels, influencers — sab trending pe daal dete hain.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-3 text-white text-sm font-medium hover:bg-neutral-800" href="#work">
<i className="h-4 w-4" data-lucide="play"></i>
<span>Watch the Madness</span>
</a>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-neutral-900 text-sm font-medium hover:bg-neutral-50" href="#services">
<i className="h-4 w-4" data-lucide="grid"></i>
<span>Our Tadka Menu</span>
</a>
</div>
<div className="mt-10">
<p className="text-xs uppercase tracking-wide text-neutral-600">Trusted by 200+ brands</p>
<div className="relative mt-3 overflow-hidden">
<div className="flex gap-8 whitespace-nowrap will-change-transform" id="logoTrack">

<div className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-700 border border-neutral-200 shadow-sm">Swiggy</div>
<div className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-700 border border-neutral-200 shadow-sm">Mamaearth</div>
<div className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-700 border border-neutral-200 shadow-sm">Netflix</div>
<div className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-700 border border-neutral-200 shadow-sm">Nykaa</div>
<div className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-700 border border-neutral-200 shadow-sm">Zomato</div>
<div className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-700 border border-neutral-200 shadow-sm">Urban Company</div>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 -z-10 bg-gradient-to-tr from-amber-500/20 via-rose-500/10 to-orange-500/20 rounded-3xl blur-2xl"></div>
<div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-lg">
<img alt="Creators holding props" className="w-full h-[480px] object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex items-center justify-between px-5 py-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-800">
<i className="h-4 w-4" data-lucide="clapperboard"></i>
</span>
<div>
<p className="text-sm font-medium tracking-tight">Masala Montage</p>
<p className="text-xs text-neutral-600">Snackable. Shareable. Unskippable.</p>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50" href="#work">
<i className="h-4 w-4" data-lucide="play-circle"></i>
<span>Play</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="col-span-1 lg:col-span-2">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Dialogues We’ve Actually Heard</h2>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100">
<i className="h-4 w-4" data-lucide="message-circle"></i>
</span>
<p className="text-neutral-800 text-sm">“Mujhe bas viral hona hai.”</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
<div className="flex items-start gap-3">
<span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100">
<i className="h-4 w-4" data-lucide="smile-plus"></i>
</span>
<p className="text-neutral-800 text-sm">“Kya meme kar sakte ho?”</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:col-span-2">
<div className="flex items-start gap-3">
<span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100">
<i className="h-4 w-4" data-lucide="wallet"></i>
</span>
<p className="text-neutral-800 text-sm">“Creators bhi chahiye, but saste mein ROI bhi.”</p>
</div>
</div>
</div>
</div>
<div className="col-span-1">
<div className="h-full rounded-2xl border border-neutral-200 bg-neutral-950 p-6 text-white">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="flame"></i>
<span>Us</span>
</div>
<p className="mt-4 text-lg leading-relaxed">
                Beta, hum Social Tadka hain — not your regular marketing agency.
              </p>
<p className="mt-2 text-sm text-neutral-300">
                We turn chaos into culture and culture into conversions.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Tadka Menu</h2>
<p className="mt-2 text-neutral-700">We serve hot content. Always Trending.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-neutral-900" href="#contact">
<span>Let’s cook something</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<div className="flex items-center justify-between">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
<i className="h-5 w-5" data-lucide="users"></i>
</span>
<i className="h-4 w-4 text-neutral-400 group-hover:text-neutral-700" data-lucide="arrow-up-right"></i>
</div>
<h3 className="mt-5 text-lg tracking-tight font-semibold">Influencer Marketing</h3>
<p className="mt-2 text-sm text-neutral-600">Creator mapping, smart briefs, performance-led rollouts.</p>
</div>
<div className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<div className="flex items-center justify-between">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
<i className="h-5 w-5" data-lucide="share-2"></i>
</span>
<i className="h-4 w-4 text-neutral-400 group-hover:text-neutral-700" data-lucide="arrow-up-right"></i>
</div>
<h3 className="mt-5 text-lg tracking-tight font-semibold">Social Media Marketing</h3>
<p className="mt-2 text-sm text-neutral-600">Strategy to daily ops — content, community, growth.</p>
</div>
<div className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<div className="flex items-center justify-between">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
<i className="h-5 w-5" data-lucide="sticker"></i>
</span>
<i className="h-4 w-4 text-neutral-400 group-hover:text-neutral-700" data-lucide="arrow-up-right"></i>
</div>
<h3 className="mt-5 text-lg tracking-tight font-semibold">Meme Marketing</h3>
<p className="mt-2 text-sm text-neutral-600">Culturally tuned, brand-safe memes that travel fast.</p>
</div>
<div className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<div className="flex items-center justify-between">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
<i className="h-5 w-5" data-lucide="video"></i>
</span>
<i className="h-4 w-4 text-neutral-400 group-hover:text-neutral-700" data-lucide="arrow-up-right"></i>
</div>
<h3 className="mt-5 text-lg tracking-tight font-semibold">Reels &amp; Shorts Production</h3>
<p className="mt-2 text-sm text-neutral-600">Fast shoots, clean edits, snackable storytelling.</p>
</div>
<div className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<div className="flex items-center justify-between">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
<i className="h-5 w-5" data-lucide="zap"></i>
</span>
<i className="h-4 w-4 text-neutral-400 group-hover:text-neutral-700" data-lucide="arrow-up-right"></i>
</div>
<h3 className="mt-5 text-lg tracking-tight font-semibold">Viral Campaign Strategy</h3>
<p className="mt-2 text-sm text-neutral-600">Hooks, trends, distribution and measurement — done.</p>
</div>
<div className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<div className="flex items-center justify-between">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-800">
<i className="h-5 w-5" data-lucide="stars"></i>
</span>
<i className="h-4 w-4 text-neutral-400 group-hover:text-neutral-700" data-lucide="arrow-up-right"></i>
</div>
<h3 className="mt-5 text-lg tracking-tight font-semibold">Creator IP &amp; Collabs</h3>
<p className="mt-2 text-sm text-neutral-600">Make formats people wait for — not just watch.</p>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20 bg-neutral-50" id="work">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between gap-6">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Our showreel (aka Masala Montage)</h2>
<p className="mt-2 text-neutral-700">Auto-playing grid of reels — best enjoyed with sound off and jaw dropped.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-white text-sm font-medium hover:bg-neutral-800" href="#contact">
<i className="h-4 w-4" data-lucide="eye"></i>
<span>Watch the madness</span>
</a>
</div>
<div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">

<div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white aspect-[9/16]">
<video autoplay="" className="h-full w-full object-cover" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/5721902/5721902-uhd_2560_1440_30fps.mp4"></video>
</div>
<div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white aspect-[9/16]">
<video autoplay="" className="h-full w-full object-cover" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/4560090/4560090-uhd_2560_1440_25fps.mp4"></video>
</div>
<div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white aspect-[9/16]">
<video autoplay="" className="h-full w-full object-cover" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/5648415/5648415-hd_1920_1080_25fps.mp4"></video>
</div>
<div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white aspect-[9/16]">
<video autoplay="" className="h-full w-full object-cover" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/2749475/2749475-uhd_2560_1440_25fps.mp4"></video>
</div>
<div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white aspect-[9/16]">
<video autoplay="" className="h-full w-full object-cover" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/6930210/6930210-uhd_2560_1440_24fps.mp4"></video>
</div>
</div>
<div className="mt-8 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-white text-sm font-medium hover:bg-neutral-800" href="#contact">
<i className="h-4 w-4" data-lucide="play"></i>
<span>WATCH THE MADNESS</span>
</a>
</div>
</div>
</section>

<section className="py-14 md:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-700">
<i className="h-4 w-4" data-lucide="trophy"></i>
</span>
<p className="text-xs text-neutral-600">Some Tadka Stats</p>
</div>
<p className="mt-4 text-2xl tracking-tight font-semibold">6B+</p>
<p className="text-sm text-neutral-600">Meme Impressions</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-rose-100 text-rose-700">
<i className="h-4 w-4" data-lucide="scissors"></i>
</span>
<p className="text-xs text-neutral-600">Some Tadka Stats</p>
</div>
<p className="mt-4 text-2xl tracking-tight font-semibold">1.4K</p>
<p className="text-sm text-neutral-600">Reels Edited While Sleep-Deprived</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
<i className="h-4 w-4" data-lucide="handshake"></i>
</span>
<p className="text-xs text-neutral-600">Some Tadka Stats</p>
</div>
<p className="mt-4 text-2xl tracking-tight font-semibold">300+</p>
<p className="text-sm text-neutral-600">Influencer Collabs</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
<i className="h-4 w-4" data-lucide="alarm-clock"></i>
</span>
<p className="text-xs text-neutral-600">Some Tadka Stats</p>
</div>
<p className="mt-4 text-2xl tracking-tight font-semibold">24/7</p>
<p className="text-sm text-neutral-600">Content Madness</p>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20 bg-neutral-50" id="how">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px8">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">How It Works</h2>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-neutral-600">01</span>
<i className="h-4 w-4 text-neutral-400" data-lucide="upload"></i>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold">Brief Drop</h3>
<p className="mt-2 text-sm text-neutral-600">You bring the vibe, the product or the chaos. We decode your brand’s meme potential in minutes.</p>
</div>
<div className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-neutral-600">02</span>
<i className="h-4 w-4 text-neutral-400" data-lucide="heart-handshake"></i>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold">Creator Match</h3>
<p className="mt-2 text-sm text-neutral-600">We match you with creators who live in your niche and entertain, not just promote.</p>
</div>
<div className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-neutral-600">03</span>
<i className="h-4 w-4 text-neutral-400" data-lucide="storm"></i>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold">Content Storm</h3>
<p className="mt-2 text-sm text-neutral-600">Reels, memes and collabs that slap harder than a K‑drama plot twist. Quick edits. Smart scripts. Zero cringe.
          </p></div>
<div className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-neutral-600">04</span>
<i className="h-4 w-4 text-neutral-400" data-lucide="bar-chart-3"></i>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold">Results Served</h3>
<p className="mt-2 text-sm text-neutral-600">Reach with receipts. Feeds blow up, DMs overflow and recall follows.</p>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
<img alt="" className="h-72 w-full object-cover" src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-5">
<div className="inline-flex items-center gap-2 rounded-lg bg-neutral-900/90 px-3 py-2 text-white text-xs font-medium">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="star"></i>
<span>Why Brands Love Social Tadka</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Chaos that converts</h2>
<p className="mt-4 text-neutral-700 leading-relaxed">
            Brands come to us for creators, but stay for the chaos that converts. We don’t do influencer fluff or random collabs — every creator we work with is backed by strategy, relevance and meme-powered execution. Our team spots trends before your intern can hit refresh, and turns them into content that doesn’t just fit in the feed — it owns. This isn’t marketing dressed up as memes. It’s memes that drive results.
          </p>
<div className="mt-6 flex flex-wrap gap-3">
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium">
<i className="h-3.5 w-3.5" data-lucide="beaker"></i>
              Experiment Fast
            </span>
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium">
<i className="h-3.5 w-3.5" data-lucide="target"></i>
              Strategy-First
            </span>
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium">
<i className="h-3.5 w-3.5" data-lucide="line-chart"></i>
              Measurable ROI
            </span>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20 bg-neutral-950 text-white" id="partners">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Partners &amp; Brands Who Vibe With Us</h2>
<p className="mt-2 text-neutral-300">They came for the memes. They stayed for the madness.</p>
</div>
</div>
<div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
<p className="text-sm font-medium">Swiggy</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
<p className="text-sm font-medium">Netflix</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
<p className="text-sm font-medium">Mamaearth</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
<p className="text-sm font-medium">Zomato</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
<p className="text-sm font-medium">Urban Company</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
<p className="text-sm font-medium">Nykaa</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
<p className="text-sm font-medium">Amazon miniTV</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
<p className="text-sm font-medium">boAt</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
<p className="text-sm font-medium">Paytm</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
<p className="text-sm font-medium">Tinder</p>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-orange-500 to-rose-600">
<div className="absolute inset-0 opacity-15">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative p-8 md:p-12 text-white">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Let’s Get Trending</h2>
<p className="mt-2 text-white/90">What do you want to go viral? Tell us. We’ll cook something spicy.</p>
</div>
<form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
<input className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Your name" type="text"/>
<input className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Work email" type="email"/>
<input className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Brand / Project" type="text"/>
<div className="md:col-span-3">
<textarea className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Drop your brief or chaos here…" rows="4"></textarea>
</div>
<div className="md:col-span-3 flex items-center justify-between">
<p className="text-xs text-white/80">Side effects may include viral fame, FOMO and brand obsession.</p>
<button className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-neutral-900 text-sm font-medium hover:bg-neutral-100" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
<span>Spice It Up →</span>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<div className="inline-flex items-center gap-2">
<span className="relative inline-flex h-8 w-8 items-center justify-center">
<span className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-500 to-rose-600 blur-[6px] opacity-70"></span>
<span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white">
<i className="h-4 w-4" data-lucide="flame"></i>
</span>
</span>
<span className="text-lg tracking-tight font-semibold">Social Tadka</span>
</div>
<p className="mt-3 text-sm text-neutral-600">Memes that move markets. Reels that raise ROI.</p>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Quick Links</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li><a className="hover:text-neutral-900" href="#">About</a></li>
<li><a className="hover:text-neutral-900" href="#services">Services</a></li>
<li><a className="hover:text-neutral-900" href="#work">Work</a></li>
<li><a className="hover:text-neutral-900" href="#">Blog</a></li>
<li><a className="hover:text-neutral-900" href="#">Careers</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Socials</p>
<div className="mt-3 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium" href="#">
<i className="h-4 w-4" data-lucide="instagram"></i> Insta
              </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i> LinkedIn
              </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium" href="#">
<i className="h-4 w-4" data-lucide="twitter"></i> X
              </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium" href="#">
<i className="h-4 w-4" data-lucide="youtube"></i> YouTube
              </a>
</div>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Newsletter</p>
<form className="mt-3 flex gap-2">
<input className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="Work email" type="email"/>
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2 text-white text-sm font-medium hover:bg-neutral-800">
<i className="h-4 w-4" data-lucide="mail"></i>
<span>Join</span>
</button>
</form>
</div>
</div>
<div className="mt-10 flex items-center justify-between border-t border-neutral-200 pt-6">
<p className="text-xs text-neutral-600">© <span id="year"></span> Social Tadka. All rights reserved.</p>
<p className="text-xs text-neutral-500">Disclaimer: Side effects may include viral fame, FOMO and brand obsession.</p>
</div>
</div>
</footer>


    </>
  );
}
