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
      
{"@context":"https://schema.org","@type":"Organization","name":"Atherton Homes","url":"https://athertonhomes.com/","logo":"https://athertonhomes.com/assets/images/logo.svg","sameAs":["https://wa.me/212767085688"],"email":"mailto:hamzaaboudafir@gmail.com"}



{"@context":"https://schema.org","@type":"WebSite","name":"Atherton Homes","url":"https://athertonhomes.com/","potentialAction":{"@type":"SearchAction","target":"https://athertonhomes.com/?q={search_term_string}","query-input":"required name=search_term_string"}}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
    {"@type":"Question","name":"What makes Atherton different from nearby communities?","acceptedAnswer":{"@type":"Answer","text":"Atherton is often defined by privacy, larger residential settings, and a quieter estate-oriented atmosphere, though the right fit depends on personal priorities and daily routines."}},
    {"@type":"Question","name":"Are off-market opportunities common in Atherton?","acceptedAnswer":{"@type":"Answer","text":"Discreet opportunities can be part of the market conversation, but off-market is only one approach and is not automatically the best fit for every buyer or seller."}},
    {"@type":"Question","name":"Why does lot size matter so much in Atherton?","acceptedAnswer":{"@type":"Answer","text":"Lot size can affect privacy, future flexibility, landscape experience, guest approach, and the overall sense of separation that many buyers seek."}}
  ]}
  
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
      
<header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="index.html">
<img alt="Atherton Homes monogram" className="h-9 w-9 rounded-full border border-white/10 bg-white/5 p-1.5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Atherton Homes" className="h-5 w-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</a>
<nav className="hidden lg:flex items-center gap-8 text-sm text-neutral-300">
<a className="transition hover:text-white" href="buy-atherton-homes.html">Buy</a>
<a className="transition hover:text-white" href="sell-atherton-homes.html">Sell</a>
<a className="transition hover:text-white" href="atherton-neighborhoods.html">Neighborhoods</a>
<a className="transition hover:text-white" href="atherton-lifestyle.html">Lifestyle</a>
<a className="transition hover:text-white" href="atherton-relocation.html">Relocation</a>
<a className="transition hover:text-white" href="about.html">About</a>
<a className="rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-amber-100 transition hover:bg-amber-300/20" href="contact.html">Contact</a>
</nav>
<button aria-label="Open menu" className="lg:hidden rounded-full border border-white/10 p-2 text-neutral-200" id="menuButton">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
<div className="hidden pb-4 lg:hidden" id="mobileMenu">
<div className="grid gap-2 rounded-3xl border border-white/10 bg-white/5 p-3 text-sm text-neutral-300">
<a className="rounded-2xl px-3 py-3 hover:bg-white/5" href="buy-atherton-homes.html">Buy Atherton Homes</a>
<a className="rounded-2xl px-3 py-3 hover:bg-white/5" href="sell-atherton-homes.html">Sell in Atherton</a>
<a className="rounded-2xl px-3 py-3 hover:bg-white/5" href="atherton-home-valuation.html">Home Valuation</a>
<a className="rounded-2xl px-3 py-3 hover:bg-white/5" href="atherton-neighborhoods.html">Neighborhoods</a>
<a className="rounded-2xl px-3 py-3 hover:bg-white/5" href="atherton-schools.html">Schools</a>
<a className="rounded-2xl px-3 py-3 hover:bg-white/5" href="atherton-lifestyle.html">Lifestyle</a>
<a className="rounded-2xl px-3 py-3 hover:bg-white/5" href="atherton-relocation.html">Relocation</a>
<a className="rounded-2xl px-3 py-3 hover:bg-white/5" href="about.html">About</a>
<a className="rounded-2xl bg-amber-300/10 px-3 py-3 text-amber-100" href="contact.html">Contact</a>
</div>
</div>
</div>
</header>
<main>
<section className="relative isolate">
<img alt="Luxury contemporary estate exterior in a private landscaped setting" className="h-[34rem] w-full object-cover opacity-40 sm:h-[40rem] lg:h-[46rem]" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-neutral-950"></div>
<div className="absolute inset-0">
<div className="mx-auto flex h-full max-w-7xl items-end px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24">
<div className="max-w-3xl">
<p className="mb-4 text-xs uppercase tracking-[0.24em] text-amber-200/80">Atherton Homes</p>
<h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl" style={{fontFamily: 'Georgia, ui-serif, serif'}}>Luxury real estate guidance for Atherton and the Peninsula’s most private addresses</h1>
<p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base">A polished resource for buyers, sellers, and relocating families exploring Atherton, Woodside, Menlo Park, Portola Valley, Palo Alto, and Los Altos Hills.</p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="rounded-full bg-amber-200 px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-amber-100" href="buy-atherton-homes.html">Explore buyer guidance</a>
<a className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10" href="atherton-neighborhoods.html">View neighborhoods</a>
</div>
</div>
</div>
</div>
</section>
<section className="border-y border-white/10 bg-neutral-900/70">
<div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
<a className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/[0.07]" href="homes-for-sale-atherton-ca.html">
<p className="text-xs uppercase tracking-[0.22em] text-amber-200/70">Search intent</p>
<h2 className="mt-3 text-xl font-semibold tracking-tight text-white" style={{fontFamily: 'Georgia, ui-serif, serif'}}>Homes for sale in Atherton, CA</h2>
<p className="mt-3 text-sm leading-7 text-neutral-400">An editorial overview of the market, home styles, lot patterns, and what serious buyers typically evaluate.</p>
</a>
<a className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/[0.07]" href="atherton-relocation.html">
<p className="text-xs uppercase tracking-[0.22em] text-amber-200/70">Relocation</p>
<h2 className="mt-3 text-xl font-semibold tracking-tight text-white" style={{fontFamily: 'Georgia, ui-serif, serif'}}>Moving to Atherton</h2>
<p className="mt-3 text-sm leading-7 text-neutral-400">Thoughtful guidance for families and executives transitioning from San Francisco, Silicon Valley, or abroad.</p>
</a>
<a className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/[0.07]" href="atherton-architecture-design.html">
<p className="text-xs uppercase tracking-[0.22em] text-amber-200/70">Architecture</p>
<h2 className="mt-3 text-xl font-semibold tracking-tight text-white" style={{fontFamily: 'Georgia, ui-serif, serif'}}>Design and architecture in Atherton</h2>
<p className="mt-3 text-sm leading-7 text-neutral-400">From classic estates to modern compounds, explore the visual language shaping the town’s residential identity.</p>
</a>
<a className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/[0.07]" href="atherton-vs-menlo-park.html">
<p className="text-xs uppercase tracking-[0.22em] text-amber-200/70">Comparison</p>
<h2 className="mt-3 text-xl font-semibold tracking-tight text-white" style={{fontFamily: 'Georgia, ui-serif, serif'}}>Atherton vs. Menlo Park</h2>
<p className="mt-3 text-sm leading-7 text-neutral-400">A balanced look at privacy, land, pace, access, and lifestyle differences between two highly sought-after markets.</p>
</a>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
<div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
<div>
<p className="text-xs uppercase tracking-[0.22em] text-amber-200/70">Editorial perspective</p>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: 'Georgia, ui-serif, serif'}}>Atherton is less about volume and more about fit</h2>
<p className="mt-5 text-sm leading-7 text-neutral-300 sm:text-base">Atherton attracts buyers who place a premium on quiet streets, substantial parcels, mature landscaping, and a sense of separation without sacrificing proximity to the Peninsula’s business, education, and innovation centers. That combination creates a very specific search process: buyers tend to evaluate not only the house itself, but also approach, sight lines, orientation, guest circulation, future design flexibility, and the feel of privacy once the gates close.</p>
<p className="mt-5 text-sm leading-7 text-neutral-400 sm:text-base">This website is designed as an editorial real estate resource rather than a thin lead form. You will find guides for buying and selling, neighborhood and lifestyle reading, architecture content, school context, comparison pages for nearby communities, and practical advice for off-market opportunities, valuation, and concierge-style property preparation.</p>
<div className="mt-8 grid gap-4 sm:grid-cols-2">
<a className="rounded-3xl border border-white/10 bg-white/5 p-5" href="atherton-real-estate-guide.html">
<h3 className="text-base font-medium text-white">Atherton real estate guide</h3>
<p className="mt-2 text-sm leading-7 text-neutral-400">A broad introduction to inventory patterns, privacy, architecture, and the local buying process.</p>
</a>
<a className="rounded-3xl border border-white/10 bg-white/5 p-5" href="private-estates-atherton.html">
<h3 className="text-base font-medium text-white">Private estates in Atherton</h3>
<p className="mt-2 text-sm leading-7 text-neutral-400">Why gates, landscape design, setbacks, and lot shape matter when evaluating estate properties.</p>
</a>
</div>
</div>
<div className="grid gap-6">
<img alt="Refined luxury home interior with warm tones and architectural lighting" className="h-72 w-full rounded-[2rem] object-cover sm:h-80 lg:h-96" loading="lazy" src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="rounded-[2rem] border border-amber-200/20 bg-amber-200/5 p-6">
<p className="text-xs uppercase tracking-[0.22em] text-amber-200/70">What visitors typically want</p>
<ul className="mt-4 grid gap-3 text-sm leading-7 text-neutral-300">
<li className="flex gap-3"><iconify-icon className="mt-1 text-amber-200" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon><span>Clear guidance for buying a home in Atherton without relying on generic market clichés.</span></li>
<li className="flex gap-3"><iconify-icon className="mt-1 text-amber-200" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon><span>Useful context on schools, commute patterns, architecture, privacy, and day-to-day lifestyle.</span></li>
<li className="flex gap-3"><iconify-icon className="mt-1 text-amber-200" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon><span>Thoughtful comparison pages for Menlo Park, Woodside, Portola Valley, Palo Alto, and Los Altos Hills.</span></li>
</ul>
</div>
</div>
</div>
</section>
<section className="bg-neutral-900/60">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<p className="text-xs uppercase tracking-[0.22em] text-amber-200/70">Featured guides</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: 'Georgia, ui-serif, serif'}}>A strong internal content architecture built for real readers</h2>
</div>
<a className="text-sm text-neutral-300 hover:text-white" href="faq.html">View common questions</a>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
<a className="group rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden" href="atherton-luxury-homes.html">
<img alt="Large luxury residence with contemporary landscape design" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: 'Georgia, ui-serif, serif'}}>Luxury homes in Atherton</h3>
<p className="mt-3 text-sm leading-7 text-neutral-400">A broader look at what defines luxury in Atherton beyond square footage alone.</p>
</div>
</a>
<a className="group rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden" href="atherton-school-options-guide.html">
<img alt="Bright educational campus walkway with trees and modern academic buildings" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: 'Georgia, ui-serif, serif'}}>School options guide</h3>
<p className="mt-3 text-sm leading-7 text-neutral-400">A careful starting point for families evaluating educational options in the broader area.</p>
</div>
</a>
<a className="group rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden" href="designing-a-luxury-home-in-atherton.html">
<img alt="Architectural design workspace with material samples and plans" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: 'Georgia, ui-serif, serif'}}>Designing a luxury home</h3>
<p className="mt-3 text-sm leading-7 text-neutral-400">Planning, team assembly, design intent, and the realities of building or remodeling at a high level.</p>
</div>
</a>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
<div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
<div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
<p className="text-xs uppercase tracking-[0.22em] text-amber-200/70">Lead generation</p>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: 'Georgia, ui-serif, serif'}}>Start a discreet conversation</h2>
<p className="mt-4 text-sm leading-7 text-neutral-400">Use the contact form for buying guidance, selling strategy, valuation requests, off-market discussions, or relocation support.</p>
<div className="mt-8 space-y-4 text-sm text-neutral-300">
<a className="flex items-center gap-3 hover:text-white" href="mailto:hamzaaboudafir@gmail.com"><iconify-icon className="text-amber-200" height="20" icon="solar:letter-linear" width="20"></iconify-icon> hamzaaboudafir@gmail.com</a>
<a className="flex items-center gap-3 hover:text-white" href="https://wa.me/212767085688"><iconify-icon className="text-amber-200" height="20" icon="solar:chat-round-linear" width="20"></iconify-icon> WhatsApp</a>
</div>
</div>
<form action="https://formsubmit.co/el/gigavu" className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8" method="POST">
<input name="_next" type="hidden" value="https://athertonhomes.com/thank-you.html"/>
<input name="_captcha" type="hidden" value="false"/>
<div className="grid gap-5 sm:grid-cols-2">
<div>
<label className="mb-2 block text-xs uppercase tracking-[0.18em] text-neutral-400">Name</label>
<input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-amber-200/40" name="name" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="mb-2 block text-xs uppercase tracking-[0.18em] text-neutral-400">Email</label>
<input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-amber-200/40" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="mb-2 block text-xs uppercase tracking-[0.18em] text-neutral-400">How can we help?</label>
<textarea className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-amber-200/40" name="message" placeholder="Tell us whether you are buying, selling, relocating, or researching Atherton." required="" rows="6"></textarea>
</div>
</div>
<button className="mt-6 rounded-full bg-amber-200 px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-amber-100" type="submit">Send inquiry</button>
</form>
</div>
</section>
</main>
<footer className="border-t border-white/10 bg-neutral-950">
<div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
<div className="lg:col-span-2">
<a className="flex items-center gap-3" href="index.html">
<img alt="Atherton Homes logo mark" className="h-10 w-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Atherton Homes wordmark" className="h-5 w-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</a>
<p className="mt-5 max-w-xl text-sm leading-7 text-neutral-400">Editorial luxury real estate guidance for Atherton, Menlo Park, Woodside, Portola Valley, Palo Alto, and Los Altos Hills.</p>
</div>
<div>
<h3 className="text-sm font-medium text-white">Explore</h3>
<div className="mt-4 grid gap-3 text-sm text-neutral-400">
<a className="hover:text-white" href="atherton-real-estate-guide.html">Atherton Real Estate Guide</a>
<a className="hover:text-white" href="living-in-atherton.html">Living in Atherton</a>
<a className="hover:text-white" href="atherton-neighborhoods.html">Neighborhoods</a>
<a className="hover:text-white" href="atherton-schools.html">Schools</a>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-white">Contact</h3>
<div className="mt-4 grid gap-3 text-sm text-neutral-400">
<a className="hover:text-white" href="mailto:hamzaaboudafir@gmail.com">hamzaaboudafir@gmail.com</a>
<a className="hover:text-white" href="https://wa.me/212767085688">WhatsApp</a>
<a className="hover:text-white" href="contact.html">Contact page</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
