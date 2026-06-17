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
      

<div className="min-h-screen flex flex-col">

<header className="border-b backdrop-blur-sm sticky top-0 z-30 border-neutral-200/80">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full border flex items-center justify-center bg-neutral-100 border-neutral-300">
<span className="text-xs font-semibold tracking-tight">AL</span>
</div>
<div className="hidden sm:flex flex-col leading-tight">
<span className="text-sm font-medium tracking-tight">Alaa</span>
<span className="text-[11px] text-neutral-600">Artist &amp; Graphic Designer</span>
</div>
</div>

<nav className="flex items-center gap-6 text-xs sm:text-sm">
<a className="hidden md:inline-flex transition-colors text-neutral-700 hover:text-emerald-700" href="#en-hero">EN</a>
<span className="hidden md:inline-block text-neutral-400">·</span>
<a className="hidden md:inline-flex transition-colors text-neutral-600 hover:text-emerald-700" href="#ar-hero">AR</a>
<div className="hidden sm:flex items-center gap-3 text-neutral-600">
<a className="transition-colors hover:text-emerald-700" href="#en-work">Portfolio</a>
<a className="transition-colors hover:text-emerald-700" href="#en-services">Services</a>
<a className="transition-colors hover:text-emerald-700" href="#en-contact">Contact</a>
</div>
</nav>
</div>
</header>
<main className="flex-1">

<section className="border-b border-neutral-100/90" id="en-hero">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="space-y-8">
<p className="text-xs uppercase tracking-[0.25em] text-emerald-700">Artist &amp; Graphic Designer</p>
<h1 className="sm:text-5xl lg:text-6xl leading-tight text-4xl font-semibold tracking-tight">
              Visual stories<br className="hidden sm:block"/> crafted with quiet boldness.
            </h1>
<p className="text-sm sm:text-base max-w-xl text-neutral-700">
              Alaa is a multidisciplinary artist weaving fine art and graphic design into thoughtful visual narratives—
              calm, precise, and deeply human.
            </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium tracking-tight transition-colors outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400/70 bg-emerald-600 text-neutral-50 hover:bg-emerald-700" href="#en-work">
                View selected work
              </a>
<a className="inline-flex items-center justify-center px-4 py-2.5 rounded-full border text-sm font-medium tracking-tight transition-colors outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400/60 border-neutral-300 text-neutral-900 hover:border-emerald-600/80 hover:text-emerald-700" href="#en-contact">
                Book a collaboration
              </a>
</div>
<div className="flex flex-wrap gap-6 text-xs text-neutral-600">
<div className="flex flex-col gap-1">
<span className="text-neutral-800">Focus</span>
<span>Editorial illustration, visual identities, art direction</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-neutral-800">Based in</span>
<span>Cairo · Available for remote work worldwide</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-10 -left-10 h-24 w-24 rounded-full border opacity-60 blur-3xl border-emerald-600/30"></div>
<div className="absolute -bottom-10 -right-6 h-24 w-24 rounded-full border opacity-50 blur-2xl border-neutral-300/80"></div>
<div className="relative rounded-3xl bg-gradient-to-b border overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.75)] from-neutral-100/70 to-neutral-50 border-neutral-200/80">
<div className="grid grid-rows-[auto,1fr] h-full">

<div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
<img alt="Artist in a studio surrounded by abstract artwork" className="h-full w-full object-cover scale-105" src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-neutral-50/80 via-neutral-50/10"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-neutral-800">
<span className="px-2 py-1 rounded-full border bg-neutral-50/70 border-neutral-300/80">
                      Self-portrait · Studio
                    </span>
<span className="text-neutral-600">Ongoing series</span>
</div>
</div>

<div className="px-5 sm:px-6 py-4 space-y-3">
<div className="flex items-center justify-between text-xs text-neutral-700">
<span>Selected disciplines</span>
<span className="text-neutral-500">2020 — 2025</span>
</div>
<div className="flex flex-wrap gap-2 text-[11px] text-neutral-800">
<span className="px-2 py-1 rounded-full border border-neutral-300/80 bg-neutral-100/70">Fine Art</span>
<span className="px-2 py-1 rounded-full border border-neutral-300/80 bg-neutral-100/70">Brand Systems</span>
<span className="px-2 py-1 rounded-full border border-neutral-300/80 bg-neutral-100/70">Posters</span>
<span className="px-2 py-1 rounded-full border border-neutral-300/80 bg-neutral-100/70">Album Covers</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-100/80" id="en-bio">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-12 lg:gap-20 items-start">
<div className="space-y-4">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">About Alaa</h2>
<p className="text-sm leading-relaxed text-neutral-700">
              Alaa is a visual artist and graphic designer whose work sits between quiet minimalism and emotional intensity.
              Her practice spans painting, collage, typography, and editorial design, always guided by a deep attention to rhythm,
              negative space, and color.
            </p>
<p className="text-sm leading-relaxed text-neutral-600">
              She studied fine arts and later moved into design to translate her visual language into brand identities, printed matter,
              and digital experiences. Each project is treated as a small universe—carefully measured, yet open to intuition.
            </p>
</div>
<div className="grid sm:grid-cols-3 gap-5">
<div className="rounded-2xl border p-4 flex flex-col gap-3 border-neutral-200/80 bg-neutral-50/60">
<span className="text-xs uppercase tracking-[0.18em] text-neutral-600">Approach</span>
<p className="text-sm text-neutral-800">
                Intuitive, research-informed, and collaborative. Alaa builds visual systems that feel both calm and unexpected.
              </p>
</div>
<div className="rounded-2xl border p-4 flex flex-col gap-3 border-neutral-200/80 bg-neutral-50/60">
<span className="text-xs uppercase tracking-[0.18em] text-neutral-600">Mediums</span>
<p className="text-sm text-neutral-800">
                Acrylic, ink, digital collage, typography, layout design, and experimental print techniques.
              </p>
</div>
<div className="rounded-2xl border p-4 flex flex-col gap-3 border-neutral-200/80 bg-neutral-50/60">
<span className="text-xs uppercase tracking-[0.18em] text-neutral-600">Selected clients</span>
<p className="text-sm text-neutral-800">
                Independent musicians, cultural institutions, boutique brands, publishers, and galleries.
              </p>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-100/80" id="en-work">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Selected Artworks</h2>
<p className="text-sm mt-2 max-w-md text-neutral-600">
                A curated selection of personal work exploring memory, abstraction, and visual rhythm.
              </p>
</div>
<div className="text-xs text-neutral-500">
<span>Series · 2019 — 2025</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<article className="group relative rounded-2xl border overflow-hidden transition-colors border-neutral-200/90 bg-neutral-50/60 hover:border-emerald-600/60">
<div className="aspect-[4/5] overflow-hidden">
<img alt="Abstract layered collage artwork" className="h-full w-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="p-4 sm:p-5 space-y-2">
<div className="flex items-center justify-between text-[11px] text-neutral-600">
<span>Mixed media on paper</span>
<span>2024</span>
</div>
<h3 className="text-sm font-medium tracking-tight">Quiet Architectures</h3>
<p className="text-xs text-neutral-600">
                  A series of layered forms referencing city maps and interior spaces.
                </p>
</div>
</article>

<article className="group relative rounded-2xl border overflow-hidden transition-colors border-neutral-200/90 bg-neutral-50/60 hover:border-emerald-600/60">
<div className="aspect-[4/5] overflow-hidden">
<img alt="Minimal abstract painting with bold shapes" className="h-full w-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-4 sm:p-5 space-y-2">
<div className="flex items-center justify-between text-[11px] text-neutral-600">
<span>Acrylic on canvas</span>
<span>2023</span>
</div>
<h3 className="text-sm font-medium tracking-tight">Echo Fields</h3>
<p className="text-xs text-neutral-600">
                  Soft gradients and cut edges exploring repetition and breath.
                </p>
</div>
</article>

<article className="group relative rounded-2xl border overflow-hidden transition-colors border-neutral-200/90 bg-neutral-50/60 hover:border-emerald-600/60">
<div className="aspect-[4/5] overflow-hidden">
<img alt="Monochrome abstract art with expressive gestures" className="h-full w-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-4 sm:p-5 space-y-2">
<div className="flex items-center justify-between text-[11px] text-neutral-600">
<span>Ink on cotton paper</span>
<span>2022</span>
</div>
<h3 className="text-sm font-medium tracking-tight">Fragments of Noise</h3>
<p className="text-xs text-neutral-600">
                  High-contrast gestures capturing the pace of dense urban soundscapes.
                </p>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-neutral-100/80" id="en-design">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Graphic Design Projects</h2>
<p className="text-sm mt-2 max-w-md text-neutral-600">
                Selected commissions where art and design meet: identity systems, posters, and editorial layouts.
              </p>
</div>
<div className="text-xs text-neutral-500">
<span>Client &amp; self-initiated work</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-7 lg:gap-8">

<article className="group rounded-2xl border overflow-hidden transition-colors flex flex-col border-neutral-200/90 bg-neutral-50/60 hover:border-emerald-600/60">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Bold poster and graphic design layout" className="h-full w-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-4 sm:p-5 flex-1 flex flex-col gap-2">
<div className="flex items-center justify-between text-[11px] text-neutral-600">
<span>Visual identity &amp; poster series</span>
<span>Cultural festival</span>
</div>
<h3 className="text-sm font-medium tracking-tight">City Echo Festival</h3>
<p className="text-xs text-neutral-600">
                  A modular visual system inspired by city grids and spoken word rhythms, extended into posters, wayfinding,
                  and digital assets.
                </p>
</div>
</article>

<article className="group rounded-2xl border overflow-hidden transition-colors flex flex-col border-neutral-200/90 bg-neutral-50/60 hover:border-emerald-600/60">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Minimal book cover and editorial spreads" className="h-full w-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="p-4 sm:p-5 flex-1 flex flex-col gap-2">
<div className="flex items-center justify-between text-[11px] text-neutral-600">
<span>Editorial design</span>
<span>Poetry collection</span>
</div>
<h3 className="text-sm font-medium tracking-tight">Rooms for Stillness</h3>
<p className="text-xs text-neutral-600">
                  Book cover and interior layout for a contemporary poetry collection, using subtle typography and negative space
                  as breathing room.
                </p>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-neutral-100/80" id="en-services">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Services</h2>
<p className="text-sm mt-2 max-w-md text-neutral-600">
                A curated set of services for brands, institutions, and individuals who value thoughtful visual work.
              </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-7">
<div className="rounded-2xl border p-5 flex flex-col gap-3 transition-colors border-neutral-200/80 bg-neutral-50/60 hover:border-emerald-600/60">
<h3 className="text-sm font-medium tracking-tight">Visual Identity</h3>
<p className="text-xs text-neutral-600">
                Logos, typography, color systems, and visual guidelines translated across print and digital.
              </p>
<p className="text-[11px] text-neutral-500 mt-1">Ideal for new brands, projects, and cultural initiatives.</p>
</div>
<div className="rounded-2xl border p-5 flex flex-col gap-3 transition-colors border-neutral-200/80 bg-neutral-50/60 hover:border-emerald-600/60">
<h3 className="text-sm font-medium tracking-tight">Editorial &amp; Print</h3>
<p className="text-xs text-neutral-600">
                Book covers, art direction, layout design, and limited print editions with tactile attention.
              </p>
<p className="text-[11px] text-neutral-500 mt-1">From poetry books to exhibition catalogues.</p>
</div>
<div className="rounded-2xl border p-5 flex flex-col gap-3 transition-colors border-neutral-200/80 bg-neutral-50/60 hover:border-emerald-600/60">
<h3 className="text-sm font-medium tracking-tight">Art Commissions</h3>
<p className="text-xs text-neutral-600">
                Site-specific artworks, private commissions, and artwork for music, film, and performance.
              </p>
<p className="text-[11px] text-neutral-500 mt-1">Available for galleries, studios, and private collectors.</p>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-100/80" id="en-contact">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 lg:gap-16 items-start">
<div className="space-y-5">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Contact &amp; collaborations</h2>
<p className="text-sm max-w-md text-neutral-700">
              Share a few details about your project, timeline, and budget. Alaa will respond personally with availability
              and next steps.
            </p>
<div className="space-y-2 text-sm text-neutral-700">
<p>Email: <a className="underline-offset-4 hover:underline text-emerald-700 hover:text-emerald-800" href="mailto:hello@alaa.studio">hello@alaa.studio</a></p>
<p>Instagram: <span className="text-neutral-600">@alaa.studio</span></p>
</div>
</div>

<form className="space-y-4 rounded-2xl border p-5 sm:p-6 border-neutral-200/80 bg-neutral-50/80">
<div className="grid sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-neutral-800" htmlFor="name-en">Name</label>
<input className="w-full px-3 py-2.5 rounded-xl border text-sm placeholder:text-neutral-500 outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/70 transition bg-neutral-50 border-neutral-200 text-neutral-900" id="name-en" placeholder="Your full name" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-neutral-800" htmlFor="email-en">Email</label>
<input className="w-full px-3 py-2.5 rounded-xl border text-sm placeholder:text-neutral-500 outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/70 transition bg-neutral-50 border-neutral-200 text-neutral-900" id="email-en" placeholder="you@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-neutral-800" htmlFor="project-type-en">Project type</label>
<select className="w-full px-3 py-2.5 rounded-xl border text-sm outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/70 transition bg-neutral-50 border-neutral-200 text-neutral-900" id="project-type-en">
<option className="bg-neutral-50">Visual identity</option>
<option className="bg-neutral-50">Editorial / book</option>
<option className="bg-neutral-50">Art commission</option>
<option className="bg-neutral-50">Consultation</option>
<option className="bg-neutral-50">Other</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-neutral-800" htmlFor="message-en">Project details</label>
<textarea className="w-full px-3 py-2.5 rounded-xl border text-sm placeholder:text-neutral-500 outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/70 transition bg-neutral-50 border-neutral-200 text-neutral-900" id="message-en" placeholder="Share your ideas, timeline, and any references." rows="4"></textarea>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-neutral-800" htmlFor="timeline-en">Ideal timeline</label>
<input className="w-full px-3 py-2.5 rounded-xl border text-sm placeholder:text-neutral-500 outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/70 transition bg-neutral-50 border-neutral-200 text-neutral-900" id="timeline-en" placeholder="e.g. June – August 2025" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-neutral-800" htmlFor="budget-en">Budget (optional)</label>
<input className="w-full px-3 py-2.5 rounded-xl border text-sm placeholder:text-neutral-500 outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/70 transition bg-neutral-50 border-neutral-200 text-neutral-900" id="budget-en" placeholder="Approximate range" type="text"/>
</div>
</div>
<button className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-medium tracking-tight transition-colors outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400/80 bg-emerald-600 text-neutral-50 hover:bg-emerald-700" type="submit">
              Send message
            </button>
<p className="text-[11px] text-neutral-500">
              By sending this form you agree to be contacted by email regarding this project. No newsletters or mailing lists.
            </p>
</form>
</div>
</section>

<section className="border-b border-neutral-100/90 bg-neutral-50" dir="rtl" id="ar-hero">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="space-y-8 lg:order-2">
<p className="text-xs tracking-[0.25em] text-emerald-700">فنانة ومصممة جرافيك</p>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              حكايات بصرية<br className="hidden sm:block"/> تُصاغ بهدوء جريء.
            </h1>
<p className="text-sm sm:text-base max-w-xl text-neutral-700">
              آلاء فنانة متعددة التخصصات تمزج بين الفنون التشكيلية والتصميم الجرافيكي لخلق سرديات بصرية هادئة،
              دقيقة، وقريبة من الإنسان.
            </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium tracking-tight transition-colors outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400/70 bg-emerald-600 text-neutral-50 hover:bg-emerald-700" href="#ar-work">
                مشاهدة الأعمال المختارة
              </a>
<a className="inline-flex items-center justify-center px-4 py-2.5 rounded-full border text-sm font-medium tracking-tight transition-colors outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400/60 border-neutral-300 text-neutral-900 hover:border-emerald-600/80 hover:text-emerald-700" href="#ar-contact">
                طلب تعاون
              </a>
</div>
<div className="flex flex-wrap gap-6 text-xs text-neutral-600">
<div className="flex flex-col gap-1">
<span className="text-neutral-800">مجالات العمل</span>
<span>رسوم تحريرية، هويات بصرية، وإخراج فني</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-neutral-800">الموقع</span>
<span>القاهرة · متاحة للعمل عن بُعد حول العالم</span>
</div>
</div>
</div>

<div className="relative lg:order-1">
<div className="absolute -top-10 -right-10 h-24 w-24 rounded-full border opacity-60 blur-3xl border-emerald-600/30"></div>
<div className="absolute -bottom-10 -left-6 h-24 w-24 rounded-full border opacity-50 blur-2xl border-neutral-300/80"></div>
<div className="relative rounded-3xl bg-gradient-to-b border overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.75)] from-neutral-100/70 to-neutral-50 border-neutral-200/80">
<div className="grid grid-rows-[auto,1fr] h-full">
<div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
<img alt="آلاء في الاستوديو وسط أعمالها الفنية" className="h-full w-full object-cover scale-105" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-neutral-50/80 via-neutral-50/10"></div>
<div className="absolute bottom-4 right-4 left-4 flex items-center justify-between text-[11px] text-neutral-800">
<span className="px-2 py-1 rounded-full border bg-neutral-50/70 border-neutral-300/80">
                      بورتريه ذاتي · الاستوديو
                    </span>
<span className="text-neutral-600">سلسلة مستمرة</span>
</div>
</div>
<div className="px-5 sm:px-6 py-4 space-y-3">
<div className="flex items-center justify-between text-[11px] text-neutral-700">
<span>تخصصات مختارة</span>
<span className="text-neutral-500">2020 — 2025</span>
</div>
<div className="flex flex-wrap gap-2 text-[11px] text-neutral-800">
<span className="px-2 py-1 rounded-full border border-neutral-300/80 bg-neutral-100/70">فن تشكيلي</span>
<span className="px-2 py-1 rounded-full border border-neutral-300/80 bg-neutral-100/70">أنظمة هوية بصرية</span>
<span className="px-2 py-1 rounded-full border border-neutral-300/80 bg-neutral-100/70">بوسترات</span>
<span className="px-2 py-1 rounded-full border border-neutral-300/80 bg-neutral-100/70">أغلفة ألبومات</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-100/80" dir="rtl" id="ar-bio">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-12 lg:gap-20 items-start">
<div className="space-y-4 lg:order-2">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">عن آلاء</h2>
<p className="text-sm leading-relaxed text-neutral-700">
              آلاء فنانة بصرية ومصممة جرافيك تقع أعمالها بين البساطة الهادئة والحدّة العاطفية.
              تمتد ممارستها من الرسم والكولاج إلى الخط والتصميم التحريري، مع تركيز عميق على الإيقاع،
              والفراغ، واللون.
            </p>
<p className="text-sm leading-relaxed text-neutral-600">
              درست الفنون الجميلة ثم اتجهت إلى التصميم لتترجم لغتها البصرية إلى هويات بصرية، مطبوعات،
              وتجارب رقمية. كل مشروع بالنسبة لها مساحة صغيرة مستقلة، محسوبة بعناية، لكن مفتوحة للحدس.
            </p>
</div>
<div className="grid sm:grid-cols-3 gap-5 lg:order-1">
<div className="rounded-2xl border p-4 flex flex-col gap-3 border-neutral-200/80 bg-neutral-50/60">
<span className="text-xs uppercase tracking-[0.18em] text-neutral-600">النهج</span>
<p className="text-sm text-neutral-800">
                بحث بصري حساس وتعاون مستمر مع العميل لبناء أنظمة بصرية هادئة لكن غير متوقعة.
              </p>
</div>
<div className="rounded-2xl border p-4 flex flex-col gap-3 border-neutral-200/80 bg-neutral-50/60">
<span className="text-xs uppercase tracking-[0.18em] text-neutral-600">الوسائط</span>
<p className="text-sm text-neutral-800">
                أكريليك، حبر، كولاج رقمي، خط، تصميم صفحات، وتقنيات طباعة تجريبية.
              </p>
</div>
<div className="rounded-2xl border p-4 flex flex-col gap-3 border-neutral-200/80 bg-neutral-50/60">
<span className="text-xs uppercase tracking-[0.18em] text-neutral-600">عملت مع</span>
<p className="text-sm text-neutral-800">
                موسيقيين مستقلين، مؤسسات ثقافية، علامات تجارية صغيرة، ودور نشر ومعارض.
              </p>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-100/80" dir="rtl" id="ar-work">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="flex flex-col sm:flex-row-reverse sm:items-end sm:justify-between gap-4 mb-10">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">أعمال فنية مختارة</h2>
<p className="text-sm mt-2 max-w-md text-neutral-600">
                مجموعة منتقاة من الأعمال الشخصية التي تستكشف الذاكرة والتجريد وإيقاع الصورة.
              </p>
</div>
<div className="text-xs text-neutral-500">
<span>سلاسل · 2019 — 2025</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">
<article className="group relative rounded-2xl border overflow-hidden transition-colors border-neutral-200/90 bg-neutral-50/60 hover:border-emerald-600/60">
<div className="aspect-[4/5] overflow-hidden">
<img alt="عمل كولاج تجريدي" className="h-full w-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-4 sm:p-5 space-y-2">
<div className="flex items-center justify-between text-[11px] text-neutral-600">
<span>وسائط متعددة على ورق</span>
<span>2024</span>
</div>
<h3 className="text-sm font-medium tracking-tight">معمار صامت</h3>
<p className="text-xs text-neutral-600">
                  أشكال متراكبة تستلهم خرائط المدن والمساحات الداخلية.
                </p>
</div>
</article>
<article className="group relative rounded-2xl border overflow-hidden transition-colors border-neutral-200/90 bg-neutral-50/60 hover:border-emerald-600/60">
<div className="aspect-[4/5] overflow-hidden">
<img alt="لوحة تجريدية بأشكال جريئة" className="h-full w-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-4 sm:p-5 space-y-2">
<div className="flex items-center justify-between text-[11px] text-neutral-600">
<span>أكريليك على قماش</span>
<span>2023</span>
</div>
<h3 className="text-sm font-medium tracking-tight">حقول الصدى</h3>
<p className="text-xs text-neutral-600">
                  تدرجات لونية حادة وحواف مقطوعة تستكشف التكرار والتنفس.
                </p>
</div>
</article>
<article className="group relative rounded-2xl border overflow-hidden transition-colors border-neutral-200/90 bg-neutral-50/60 hover:border-emerald-600/60">
<div className="aspect-[4/5] overflow-hidden">
<img alt="عمل حبر أحادي اللون بحركات تعبيرية" className="h-full w-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-4 sm:p-5 space-y-2">
<div className="flex items-center justify-between text-[11px] text-neutral-600">
<span>حبر على ورق قطني</span>
<span>2022</span>
</div>
<h3 className="text-sm font-medium tracking-tight">شظايا ضجيج</h3>
<p className="text-xs text-neutral-600">
                  حركات عالية التباين تلتقط إيقاع الأصوات الحضرية الكثيفة.
                </p>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-neutral-100/80" dir="rtl" id="ar-design">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="flex flex-col sm:flex-row-reverse sm:items-end sm:justify-between gap-4 mb-10">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">مشاريع تصميم جرافيك</h2>
<p className="text-sm mt-2 max-w-md text-neutral-600">
                مجموعة من الأعمال التكليفية حيث يلتقي الفن بالتصميم: هويات بصرية، بوسترات، وتصميمات تحريرية.
              </p>
</div>
<div className="text-xs text-neutral-500">
<span>أعمال لعملاء ومشاريع ذاتية</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-7 lg:gap-8">
<article className="group rounded-2xl border overflow-hidden transition-colors flex flex-col border-neutral-200/90 bg-neutral-50/60 hover:border-emerald-600/60">
<div className="aspect-[16/9] overflow-hidden">
<img alt="هوية بصرية وبوسترات لمهرجان" className="h-full w-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="p-4 sm:p-5 flex-1 flex flex-col gap-2">
<div className="flex items-center justify-between text-[11px] text-neutral-600">
<span>هوية بصرية وسلسلة بوسترات</span>
<span>مهرجان ثقافي</span>
</div>
<h3 className="text-sm font-medium tracking-tight">مهرجان صدى المدينة</h3>
<p className="text-xs text-neutral-600">
                  نظام بصري معياري يستلهم شبكة المدينة وإيقاع الكلمة المنطوقة، ممتد إلى بوسترات وإرشاد بصري ووسائط رقمية.
                </p>
</div>
</article>
<article className="group rounded-2xl border overflow-hidden transition-colors flex flex-col border-neutral-200/90 bg-neutral-50/60 hover:border-emerald-600/60">
<div className="aspect-[16/9] overflow-hidden">
<img alt="غلاف كتاب وتصميم صفحات" className="h-full w-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-4 sm:p-5 flex-1 flex flex-col gap-2">
<div className="flex items-center justify-between text-[11px] text-neutral-600">
<span>تصميم تحريري</span>
<span>ديوان شعر</span>
</div>
<h3 className="text-sm font-medium tracking-tight">غرف للسكينة</h3>
<p className="text-xs text-neutral-600">
                  غلاف كتاب وتخطيط داخلي لديوان شعري معاصر، باستخدام فراغات واسعة وتفاصيل خطية هادئة.
                </p>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-neutral-100/80" dir="rtl" id="ar-services">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
<div className="flex flex-col sm:flex-row-reverse sm:items-end sm:justify-between gap-4 mb-10">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">الخدمات</h2>
<p className="text-sm mt-2 max-w-md text-neutral-600">
                مجموعة خدمات منتقاة للعلامات التجارية والمؤسسات والأفراد الذين يقدّرون العمل البصري المتأني.
              </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-7">
<div className="rounded-2xl border p-5 flex flex-col gap-3 transition-colors border-neutral-200/80 bg-neutral-50/60 hover:border-emerald-600/60">
<h3 className="text-sm font-medium tracking-tight">هويات بصرية</h3>
<p className="text-xs text-neutral-600">
                شعارات، خطوط، أنظمة ألوان، وأدلة استخدام تمتد بين المطبوع والرقمي.
              </p>
<p className="text-[11px] text-neutral-500 mt-1">مناسبة للمشاريع الجديدة والمبادرات الثقافية.</p>
</div>
<div className="rounded-2xl border p-5 flex flex-col gap-3 transition-colors border-neutral-200/80 bg-neutral-50/60 hover:border-emerald-600/60">
<h3 className="text-sm font-medium tracking-tight">تصميم تحريري ومطبوعات</h3>
<p className="text-xs text-neutral-600">
                أغلفة كتب، إخراج فني، تصميم صفحات، وطبعات محدودة بعناية مادية.
              </p>
<p className="text-[11px] text-neutral-500 mt-1">من الدواوين الشعرية إلى كتالوجات المعارض.</p>
</div>
<div className="rounded-2xl border p-5 flex flex-col gap-3 transition-colors border-neutral-200/80 bg-neutral-50/60 hover:border-emerald-600/60">
<h3 className="text-sm font-medium tracking-tight">أعمال فنية بالتكليف</h3>
<p className="text-xs text-neutral-600">
                أعمال فنية مخصصة للمساحات، ولوحات خاصة، وأعمال لموسيقى، أفلام، وأداء حي.
              </p>
<p className="text-[11px] text-neutral-500 mt-1">متاحة للمعارض والمشاريع الخاصة.</p>
</div>
</div>
</div>
</section>

<section className="border-b border-neutral-100/80" dir="rtl" id="ar-contact">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 lg:gap-16 items-start">
<div className="space-y-5 lg:order-2">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">تواصل وتعاون</h2>
<p className="text-sm max-w-md text-neutral-700">
              شارك بعض التفاصيل عن مشروعك، المدة المتوقعة، والميزانية. ستتواصل آلاء شخصيًا للحديث عن الإمكانيات
              والخطوات التالية.
            </p>
<div className="space-y-2 text-sm text-neutral-700">
<p>البريد الإلكتروني: <a className="underline-offset-4 hover:underline text-emerald-700 hover:text-emerald-800" href="mailto:hello@alaa.studio">hello@alaa.studio</a></p>
<p>إنستغرام: <span className="text-neutral-600">@alaa.studio</span></p>
</div>
</div>
<form className="space-y-4 rounded-2xl border p-5 sm:p-6 lg:order-1 border-neutral-200/80 bg-neutral-50/80">
<div className="grid sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-neutral-800" htmlFor="name-ar">الاسم</label>
<input className="w-full px-3 py-2.5 rounded-xl border text-sm placeholder:text-neutral-500 outline-none focus:border-emerald-40080 focus:ring-1 focus:ring-emerald-400/70 transition bg-neutral-50 border-neutral-200 text-neutral-900" id="name-ar" placeholder="الاسم الكامل" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-neutral-800" htmlFor="email-ar">البريد الإلكتروني</label>
<input className="w-full px-3 py-2.5 rounded-xl border text-sm placeholder:text-neutral-500 outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/70 transition bg-neutral-50 border-neutral-200 text-neutral-900" id="email-ar" placeholder="you@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-neutral-800" htmlFor="project-type-ar">نوع المشروع</label>
<select className="w-full px-3 py-2.5 rounded-xl border text-sm outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/70 transition bg-neutral-50 border-neutral-200 text-neutral-900" id="project-type-ar">
<option className="bg-neutral-50">هوية بصرية</option>
<option className="bg-neutral-50">كتاب / مشروع تحريري</option>
<option className="bg-neutral-50">عمل فني بالتكليف</option>
<option className="bg-neutral-50">استشارة</option>
<option className="bg-neutral-50">أخرى</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-neutral-800" htmlFor="message-ar">تفاصيل المشروع</label>
<textarea className="w-full px-3 py-2.5 rounded-xl border text-sm placeholder:text-neutral-500 outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/70 transition bg-neutral-50 border-neutral-200 text-neutral-900" id="message-ar" placeholder="اكتب عن الفكرة، المدة، وأي مراجع أو روابط." rows="4"></textarea>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-neutral-800" htmlFor="timeline-ar">المدة المتوقعة</label>
<input className="w-full px-3 py-2.5 rounded-xl border text-sm placeholder:text-neutral-500 outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/70 transition bg-neutral-50 border-neutral-200 text-neutral-900" id="timeline-ar" placeholder="مثال: من يونيو إلى أغسطس 2025" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-neutral-800" htmlFor="budget-ar">الميزانية (اختياري)</label>
<input className="w-full px-3 py-2.5 rounded-xl border text-sm placeholder:text-neutral-500 outline-none focus:border-emerald-400/80 focus:ring-1 focus:ring-emerald-400/70 transition bg-neutral-50 border-neutral-200 text-neutral-900" id="budget-ar" placeholder="القيمة التقريبية" type="text"/>
</div>
</div>
<button className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-medium tracking-tight transition-colors outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400/80 bg-emerald-600 text-neutral-50 hover:bg-emerald-700" type="submit">
              إرسال الرسالة
            </button>
<p className="text-[11px] text-neutral-500">
              بإرسال هذه الاستمارة فإنك توافق على التواصل عبر البريد الإلكتروني بخصوص هذا المشروع فقط.
            </p>
</form>
</div>
</section>
</main>

<footer className="border-t border-neutral-100/80">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500">
<p>© <span className="tabular-nums">2025</span> Alaa. All rights reserved.</p>
<p className="text-neutral-400">Site concept for portfolio presentation in English &amp; Arabic.</p>
</div>
</footer>
</div>

    </>
  );
}
