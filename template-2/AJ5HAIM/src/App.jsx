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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(_arguments);}
gtag('js', new Date()); gtag('config', 'G-XXXXXXXXXX');

}

{

!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,_arguments):n.queue.push(_arguments)};if(!f._fbq)
f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[]; t=b.createElement(e);
t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)
}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '111111111111111'); fbq('track', 'PageView');

}

{

    _linkedin_partner_id = "9999999";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
  
}

{

    (function(){var s=document.getElementsByTagName("script")[0];
    var b=document.createElement("script"); b.type="text/javascript";b.async=true;
    b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b,s);})();
  
}

{

    // Initialize icons
    document.addEventListener('DOMContentLoaded', function () {
      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // Mobile nav
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNav = document.getElementById('mobileNav');
    const mobileClose = document.getElementById('mobileClose');
    mobileMenu?.addEventListener('click', () => mobileNav.classList.remove('hidden'));
    mobileClose?.addEventListener('click', () => mobileNav.classList.add('hidden'));
    mobileNav?.addEventListener('click', (e)=>{ if(e.target===mobileNav) mobileNav.classList.add('hidden'); });

    // Sticky CTA actions
    const openBooking = () => document.getElementById('bookingModal').classList.remove('hidden');
    const closeBooking = () => document.getElementById('bookingModal').classList.add('hidden');
    const openVideo = () => document.getElementById('videoModal').classList.remove('hidden');
    const closeVideo = () => document.getElementById('videoModal').classList.add('hidden');
    const openThank = () => document.getElementById('thankModal').classList.remove('hidden');
    const closeThank = () => document.getElementById('thankModal').classList.add('hidden');

    document.getElementById('stickyCta')?.addEventListener('click', openBooking);
    document.getElementById('headerBookCta')?.addEventListener('click', openBooking);
    document.getElementById('mobileBookCta')?.addEventListener('click', ()=>{ mobileNav.classList.add('hidden'); openBooking(); });
    document.getElementById('heroBookCta')?.addEventListener('click', openBooking);
    document.getElementById('techBookCta')?.addEventListener('click', openBooking);
    document.getElementById('finalBookCta')?.addEventListener('click', openBooking);

    document.getElementById('videoOpen')?.addEventListener('click', openVideo);

    Array.from(document.querySelectorAll('[data-close="bookingModal"]')).forEach(btn=>btn.addEvent)
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
      <img alt="" height="1" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" style={{display: `none`}} width="1" />



<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: `
  {
    "@context":"https://schema.org",
    "@type":"Product",
    "name":"Healing Sauna",
    "brand":{"@type":"Organization","name":"Healing Sauna"},
    "image":"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    "description":"Portable far-infrared sauna—setup in 60 seconds. Low EMF, high output.",
    "offers":{"@type":"Offer","priceCurrency":"USD","price":"\$\$","availability":"https://schema.org/InStock"},
    "isAccessoryOrSparePartFor": null
  }
  `
}} />
<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: `
  {
    "@context":"https://schema.org",
    "@type":"Event",
    "name":"Longevity Platinum (Abundance360)",
    "eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode",
    "eventStatus":"https://schema.org/EventScheduled",
    "organizer":{"@type":"Organization","name":"Abundance360"},
    "location":{"@type":"Place","name":"On-site Demo Booth"},
    "description":"Experience Healing Sauna at Longevity Platinum. Book a 10-min demo or claim the exclusive event offer."
  }
  `
}} />

<button aria-label="Book a 10-min Demo" className="fixed top-4 right-4 z-50 hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-[#018DF8] to-[#00E0D4] font-medium text-white" id="stickyCta" style={{}}>
<i className="w-4 h-4" data-lucide="calendar"></i>
    Book a 10-min Demo
  </button>

<header className="sticky top-0 z-40 backdrop-blur border-b bg-white/80 border-neutral-200" style={{}}>
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<div className="h-16 flex items-center justify-between">
<a aria-label="Healing Sauna Home" className="flex items-center gap-3" href="#">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#018DF8] to-[#00E0D4] flex items-center justify-center" style={{}}>
<i className="w-4 h-4 text-white" data-lucide="flame" style={{}}></i>
</div>
<span className="text-lg font-semibold" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Healing Sauna</span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm">
<a className="text-neutral-600 hover:text-neutral-900" href="#tech" style={{}}>Technology</a>
<a className="text-neutral-600 hover:text-neutral-900" href="#comparison" style={{}}>Comparison</a>
<a className="text-neutral-600 hover:text-neutral-900" href="#offer" style={{}}>Event Offer</a>
<a className="text-neutral-600 hover:text-neutral-900" href="#use-cases" style={{}}>Use Cases</a>
<a className="text-neutral-600 hover:text-neutral-900" href="#specs" style={{}}>Specs</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 hover:border-neutral-400 text-neutral-800" id="headerBookCta">
<i className="w-4 h-4" data-lucide="calendar"></i>
            Book a 10-min Demo
          </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#018DF8] to-[#00E0D4] font-medium text-white" id="headerOfferCta" style={{}}>
<i className="w-4 h-4" data-lucide="ticket"></i>
            Claim Longevity Platinum Offer
          </button>
<button className="md:hidden p-2 rounded-lg border border-neutral-200" id="mobileMenu">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 z-40 hidden bg-black/40" id="mobileNav">
<div className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm p-6 flex flex-col bg-white">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#018DF8] to-[#00E0D4] flex items-center justify-center" style={{}}>
<i className="w-4 h-4 text-white" data-lucide="flame" style={{}}></i>
</div>
<span className="font-semibold" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Healing Sauna</span>
</div>
<button className="p-2 rounded-lg border border-neutral-200" id="mobileClose">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<nav className="mt-6 flex flex-col gap-4 text-base">
<a className="text-neutral-700" href="#tech">Technology</a>
<a className="text-neutral-700" href="#comparison">Comparison</a>
<a className="text-neutral-700" href="#offer">Event Offer</a>
<a className="text-neutral-700" href="#use-cases">Use Cases</a>
<a className="text-neutral-700" href="#specs">Specs</a>
</nav>
<div className="mt-auto grid gap-3">
<button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-neutral-300" id="mobileBookCta">
<i className="w-4 h-4" data-lucide="calendar"></i> Book a 10-min Demo
        </button>
<button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#018DF8] to-[#00E0D4] font-medium text-white" id="mobileOfferCta" style={{}}>
<i className="w-4 h-4" data-lucide="ticket"></i> Claim Event Offer
        </button>
</div>
</div>
</div>

<section className="relative">
<div className="absolute inset-x-0 -top-32 -z-10 h-64 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00E0D4]/20 via-[#018DF8]/10 to-transparent" style={{}}></div>
<div className="max-w-7xl lg:px-6 lg:py-24 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border text-sm border-neutral-200 bg-white text-neutral-700">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Featured at Longevity Platinum
          </div>
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold tracking-tight mt-5 text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#018DF8] to-[#00E0D4]">Upgrade Your Biology</span> in 20 Minutes a Day
          </h1>
<p className="mt-4 text-lg text-neutral-600">
            The portable far-infrared sauna trusted by biohackers and A360 leaders—now featured at Longevity Platinum.
          </p>
<ul className="mt-6 grid sm:grid-cols-2 gap-3 text-neutral-800">
<li className="flex items-start gap-3">
<div className="mt-1">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2" style={{}}></i>
</div>
<span>Deep sweat in minutes; no build-out, no plumbing.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2" style={{}}></i>
</div>
<span className="">Proven far-infrared spectrum; low EMF design.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2" style={{}}></i>
</div>
<span>Folds to carry-on size; sets up in 60 seconds.</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4 mt-8">
<button className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-[#018DF8] to-[#00E0D4] font-medium text-white" id="heroBookCta" style={{}}>
<i className="w-5 h-5" data-lucide="calendar"></i>
              Book a 10-min Demo
            </button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-neutral-300 hover:border-neutral-400" id="heroOfferCta">
<i className="w-5 h-5" data-lucide="badge-percent"></i>
              Claim Event Offer
            </button>
</div>
<div className="mt-6 text-sm text-neutral-500" style={{}}>
            As seen at Abundance Summit • Biohacking Conference • Longevity Platinum
          </div>

<div className="mt-10 grid sm:grid-cols-3 gap-4">
<div className="group p-4 rounded-2xl border hover:shadow-lg transition-all border-neutral-200 bg-white">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-600">HRV Trend</span>
<i className="w-4 h-4 text-[#018DF8]" data-lucide="activity" style={{}}></i>
</div>
<div className="mt-3 text-2xl font-semibold text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>↑ Consistency</div>
<p className="mt-1 text-sm text-neutral-600">Users report more stable HRV after evening sessions.</p>
</div>
<div className="group p-4 rounded-2xl border hover:shadow-lg transition-all border-neutral-200 bg-white">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-600">Sleep Quality</span>
<i className="w-4 h-4 text-[#00E0D4]" data-lucide="moon"></i>
</div>
<div className="mt-3 text-2xl font-semibold text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>↑ Deep Sleep</div>
<p className="mt-1 text-sm text-neutral-600">Short sessions associated with calmer nights.</p>
</div>
<div className="group p-4 rounded-2xl border hover:shadow-lg transition-all border-neutral-200 bg-white">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-600">Time to Sweat</span>
<i className="w-4 h-4 text-[#018DF8]" data-lucide="thermometer" style={{}}></i>
</div>
<div className="mt-3 text-2xl font-semibold text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Fast Warm-Up</div>
<p className="mt-1 text-sm text-neutral-600">Efficient panels target tissues quickly.</p>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="grid gap-6">
<button className="relative w-full aspect-video overflow-hidden rounded-2xl border hover:shadow-lg transition-all border-neutral-200 bg-neutral-50" id="videoOpen">
<img alt="Healing Sauna in a luxury wellness space" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/40" style={{}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 text-neutral-900">
<i className="w-5 h-5" data-lucide="play"></i> Watch short product reel
                </div>
</div>
</button>
<form className="p-5 rounded-2xl border shadow-sm border-neutral-200 bg-white" id="heroForm">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Get Early Access On-Site</h3>
<div className="text-xs text-neutral-600">178+ VIP demos at recent A360 events</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm mb-1 text-neutral-700" htmlFor="name">Full Name</label>
<input aria-label="Full Name" className="w-full rounded-xl border focus:ring-2 focus:ring-[#00E0D4]/60 focus:border-[#00E0D4] px-4 py-3 border-neutral-300" id="name" name="name" placeholder="Jane Doe" required type="text" />
</div>
<div>
<label className="block text-sm mb-1 text-neutral-700" htmlFor="email">Email</label>
<input aria-label="Email" className="w-full rounded-xl border focus:ring-2 focus:ring-[#00E0D4]/60 focus:border-[#00E0D4] px-4 py-3 border-neutral-300" id="email" name="email" placeholder="jane@example.com" required type="email" />
</div>
<div className="sm:col-span-2">
<label className="block text-sm mb-1 text-neutral-700" htmlFor="mobile">Mobile (optional)</label>
<input aria-label="Mobile" className="w-full rounded-xl border focus:ring-2 focus:ring-[#00E0D4]/60 focus:border-[#00E0D4] px-4 py-3 border-neutral-300" id="mobile" name="mobile" placeholder="+1 (___) ___-____" type="tel" />
</div>
<fieldset className="sm:col-span-2">
<legend className="block text-sm mb-2 text-neutral-700">What would you like to do?</legend>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center gap-3 p-3 rounded-xl border cursor-pointer border-neutral-300 hover:border-neutral-400">
<input checked className="peer sr-only" name="intent" type="radio" value="demo" />
<span className="w-5 h-5 rounded-full border-2 peer-checked:border-transparent peer-checked:bg-gradient-to-r from-[#018DF8] to-[#00E0D4] border-neutral-400" style={{}}></span>
<span className="text-sm">Book demo</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-xl border cursor-pointer border-neutral-300 hover:border-neutral-400">
<input className="peer sr-only" name="intent" type="radio" value="offer" />
<span className="w-5 h-5 rounded-full border-2 peer-checked:border-transparent peer-checked:bg-gradient-to-r from-[#018DF8] to-[#00E0D4] border-neutral-400" style={{}}></span>
<span className="text-sm">Claim offer</span>
</label>
</div>
</fieldset>
<div className="sm:col-span-2 flex items-start gap-3">
<input className="mt-1 w-5 h-5 rounded border accent-[#00E0D4] border-neutral-300" id="consent" required type="checkbox" />
<label className="text-xs text-neutral-600" htmlFor="consent">I agree to receive email/SMS from Healing Sauna and understand a confirmation will verify my opt-in.</label>
</div>
</div>
<input id="utm_source" name="utm_source" type="hidden" />
<input id="utm_medium" name="utm_medium" type="hidden" />
<input id="utm_campaign" name="utm_campaign" type="hidden" />
<input name="event" type="hidden" value="LongevityPlatinum" />
<input name="tags" type="hidden" value="A360, LongevityPlatinum" />
<div className="mt-5 flex flex-col sm:flex-row gap-3">
<button className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#018DF8] to-[#00E0D4] font-medium text-white" style={{}} type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
                  Submit & Continue
                </button>
<div className="text-xs text-neutral-500 sm:ml-2" style={{}}>We’ll open the calendar to book instantly.</div>
</div>
<div className="mt-3 text-[12px] text-neutral-500" style={{}}>Powered by Klaviyo/GHL. Double opt-in enabled.</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Partners and Mentions" className="border-t pt-10 pb-10 border-neutral-200">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
<p className="text-sm text-neutral-600">“Best on-the-go sauna experience.”</p>
</div>
<div className="mt-6 overflow-hidden">
<div className="flex items-center gap-12 whitespace-nowrap will-change-transform" id="logoMarquee">
<img alt="Abundance360" className="h-8 opacity-70" loading="lazy" src="https://dummyimage.com/160x48/ffffff/aaa&text=A360" />
<img alt="Longevity Platinum" className="h-8 opacity-70" loading="lazy" src="https://dummyimage.com/220x48/ffffff/aaa&text=Longevity+Platinum" />
<img alt="Biohacking Conference" className="h-8 opacity-70" loading="lazy" src="https://dummyimage.com/260x48/ffffff/aaa&text=Biohacking+Conference" />
<img alt="Jetset Magazine" className="h-8 opacity-70" loading="lazy" src="https://dummyimage.com/200x48/ffffff/aaa&text=Jetset+Magazine" />
<img alt="Top Influencers" className="h-8 opacity-70" loading="lazy" src="https://dummyimage.com/220x48/ffffff/aaa&text=Top+Influencers" />

<img alt="" className="h-8 opacity-70" loading="lazy" src="https://dummyimage.com/160x48/ffffff/aaa&text=A360" />
<img alt="" className="h-8 opacity-70" loading="lazy" src="https://dummyimage.com/220x48/ffffff/aaa&text=Longevity+Platinum" />
<img alt="" className="h-8 opacity-70" loading="lazy" src="https://dummyimage.com/260x48/ffffff/aaa&text=Biohacking+Conference" />
<img alt="" className="h-8 opacity-70" loading="lazy" src="https://dummyimage.com/200x48/ffffff/aaa&text=Jetset+Magazine" />
<img alt="" className="h-8 opacity-70" loading="lazy" src="https://dummyimage.com/220x48/ffffff/aaa&text=Top+Influencers" />
</div>
</div>
<div className="mt-4 text-sm text-neutral-500" style={{}}>
        “178+ VIP demos at recent A360 events”
      </div>
</div>
</section>

<section className="py-16">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<div className="grid md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl border border-neutral-200 bg-white">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Clinical-grade Heat, Zero Hassle</h3>
<p className="mt-2 text-neutral-600">Daily detox, circulation, recovery—without construction or major power.</p>
</div>
<div className="p-6 rounded-2xl border border-neutral-200 bg-white">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Travel-Ready & Home-Ready</h3>
<p className="mt-2 text-neutral-600">60-second setup, compact fold. Fits condos, offices, hotel rooms.</p>
</div>
<div className="p-6 rounded-2xl border border-neutral-200 bg-white">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Low EMF, High Output</h3>
<p className="mt-2 text-neutral-600">Targeted far-infrared panels engineered for efficient sweat in shorter sessions.</p>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>How It Works</h2>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-5 rounded-2xl border border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#018DF8]" data-lucide="package-open" style={{}}></i>
<h4 className="font-medium">Unfold & Plug In (60s)</h4>
</div>
<p className="mt-2 text-sm text-neutral-600">No tools. Standard outlet.</p>
</div>
<div className="p-5 rounded-2xl border border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#00E0D4]" data-lucide="timer"></i>
<h4 className="font-medium">20-Minute Session</h4>
</div>
<p className="mt-2 text-sm text-neutral-600">Relax, breathe, sweat.</p>
</div>
<div className="p-5 rounded-2xl border border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#018DF8]" data-lucide="droplets" style={{}}></i>
<h4 className="font-medium">Cool Down & Rinse</h4>
</div>
<p className="mt-2 text-sm text-neutral-600">Rinse off to finish.</p>
</div>
<div className="p-5 rounded-2xl border border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#00E0D4]" data-lucide="fold-horizontal"></i>
<h4 className="font-medium">Fold & Store</h4>
</div>
<p className="mt-2 text-sm text-neutral-600">Carry-on size storage. Pairs well with cold plunge and breathwork.</p>
</div>
</div>
</div>
</section>

<section className="py-16" id="tech">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<div className="grid lg:grid-cols-2 gap-10">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Why Far-Infrared Beats Traditional Heat for Daily Use</h2>
<p className="mt-4 text-neutral-700">Far-infrared wavelengths gently warm tissues directly, increasing circulation and activating sweating pathways without superheating the air. That means faster warm-ups, efficient detox-like sweat, and comfortable, repeatable daily sessions.</p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="p-4 rounded-xl border border-neutral-200 bg-white">
<div className="text-sm text-neutral-600">Fast warm-up time</div>
<div className="mt-2 text-xl font-semibold text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Minutes</div>
</div>
<div className="p-4 rounded-xl border border-neutral-200 bg-white">
<div className="text-sm text-neutral-600">Consistent panel output</div>
<div className="mt-2 text-xl font-semibold text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Stable</div>
</div>
<div className="p-4 rounded-xl border border-neutral-200 bg-white">
<div className="text-sm text-neutral-600">Optimized reflective interior</div>
<div className="mt-2 text-xl font-semibold text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Focused</div>
</div>
</div>

<div className="mt-6 p-5 rounded-2xl border border-neutral-200 bg-white">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-600" data-lucide="shield-check" style={{}}></i>
<h4 className="font-medium">EMF & Safety</h4>
</div>
<p className="mt-2 text-sm text-neutral-700">Engineered with low-EMF components and shielding in critical zones. Independent measurements available. Comfortable surface temperatures and quality materials selected for daily use.</p>
<a className="mt-2 inline-flex items-center gap-2 text-sm text-[#018DF8] hover:underline" href="#specs" style={{}}>
              View technical specs <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-6 flex flex-wrap gap-3">
<button className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#018DF8] to-[#00E0D4] font-medium text-white" id="techBookCta" style={{}}>
<i className="w-4 h-4" data-lucide="calendar"></i> Book a 10-min Demo
            </button>
<button className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-300" id="techOfferCta">
<i className="w-4 h-4" data-lucide="badge-percent"></i> Claim Event Offer
            </button>
</div>
</div>
<div>
<div className="p-5 rounded-2xl border border-neutral-200 bg-white">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Heat Ramp Profile</h3>
<p className="text-sm text-neutral-600">Typical session warm-up compared to traditional dry heat.</p>
<div className="mt-4">
<div className="relative rounded-xl border p-3 border-neutral-200">
<div className="h-64">
<div className="w-full h-full">
<div className="w-full h-full">
<div className="w-full h-full relative">
<div className="w-full h-full">
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>

<div className="relative w-full h-56">
<canvas className="absolute inset-0" id="rampChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<ul className="mt-4 text-sm text-neutral-600">
<li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#018DF8]"></span> Healing Sauna (far-infrared)</li>
<li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-neutral-400"></span> Traditional dry heat</li>
</ul>
</div>
</div>
<img alt="Close-up of controller and panel finish" className="mt-6 rounded-2xl border w-full object-cover border-neutral-200" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-neutral-200" id="comparison">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Choose the Daily Habit You’ll Actually Keep</h2>
<div className="mt-8 overflow-x-auto">
<table className="min-w-full text-left border rounded-2xl overflow-hidden border-neutral-200">
<thead className="text-sm bg-neutral-50 text-neutral-700">
<tr>
<th className="p-4"> </th>
<th className="p-4 font-semibold text-[#018DF8]" style={{}}>Healing Sauna</th>
<th className="p-4">Traditional Built-In Sauna</th>
<th className="p-4">Gym/Infrared Studio</th>
</tr>
</thead>
<tbody className="divide-y text-sm divide-neutral-200">
<tr>
<td className="p-4 font-medium">Setup time</td>
<td className="p-4">60s</td>
<td className="p-4">Weeks of build-out</td>
<td className="p-4">Commute & schedule</td>
</tr>
<tr className="">
<td className="p-4 font-medium">Cost</td>
<td className="p-4">$$</td>
<td className="p-4">$$$$</td>
<td className="p-4">$ per session recurring</td>
</tr>
<tr>
<td className="p-4 font-medium">Portability</td>
<td className="p-4">Yes</td>
<td className="p-4">No</td>
<td className="p-4">No</td>
</tr>
<tr className="">
<td className="p-4 font-medium">Daily habit compliance</td>
<td className="p-4">High</td>
<td className="p-4">Medium</td>
<td className="p-4">Low</td>
</tr>
<tr className="">
<td className="p-4 font-medium">Privacy & convenience</td>
<td className="p-4">High</td>
<td className="p-4">Medium</td>
<td className="p-4">Low</td>
</tr>
</tbody>
</table>
</div>
<button className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-300" id="comparisonCta">
        See Why A360 Leaders Choose Portability <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<section className="py-16" id="offer">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<div className="p-8 rounded-3xl border bg-gradient-to-br border-neutral-200 from-white to-neutral-50" style={{}}>
<div className="grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Longevity Platinum Exclusive</h2>
<ul className="mt-5 space-y-3 text-neutral-700">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#018DF8] mt-0.5" data-lucide="gift" style={{}}></i>
<span>Event Bonus: [$X off] or [Complimentary Upgrade/Accessory]</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#00E0D4] mt-0.5" data-lucide="truck"></i>
<span className="">VIP Perks: Priority shipping + white-glove support</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 mt-0.5 text-emerald-600" data-lucide="shield-check" style={{}}></i>
<span className="">Guarantee: 30-day “Love it or return it”</span>
</li>
</ul>
<div className="mt-6 flex flex-wrap items-center gap-4">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm border-neutral-300">
<i className="w-4 h-4" data-lucide="clock"></i> Offer ends in <span className="font-medium ml-1" id="countdown">—</span>
</div>
<button className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-[#018DF8] to-[#00E0D4] font-medium text-white" id="offerCta" style={{}}>
<i className="w-5 h-5" data-lucide="badge-percent"></i> Claim Your Event Offer
              </button>
</div>
</div>
<div className="lg:col-span-5">
<img alt="Healing Sauna portable unit folded with carry case" className="w-full rounded-2xl border border-neutral-200" loading="lazy" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-neutral-200" id="use-cases">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Designed for High-Performance Lives</h2>
<div className="mt-6 flex flex-wrap gap-3">
<button className="usecase-tab px-4 py-2 rounded-full border text-sm border-neutral-300 bg-white" data-tab="performance">Performance & Recovery</button>
<button className="usecase-tab px-4 py-2 rounded-full border text-sm border-neutral-300" data-tab="metabolic">Metabolic Health & Detox</button>
<button className="usecase-tab px-4 py-2 rounded-full border text-sm border-neutral-300" data-tab="stress">Stress & Sleep</button>
<button className="usecase-tab px-4 py-2 rounded-full border text-sm border-neutral-300" data-tab="travel">Travel & Remote Work</button>
</div>
<div className="mt-6">
<div className="usecase-panel p-6 rounded-2xl border border-neutral-200 bg-white" data-panel="performance">
<p className="text-neutral-700">Short post-training sessions support relaxation and circulation, helping you feel ready faster for the next demand on your schedule.</p>
<p className="mt-3 text-sm text-neutral-600">“I started 20-min sessions after workouts—energy and recovery noticeably improved.” — J.R., investor-athlete</p>
</div>
<div className="usecase-panel p-6 rounded-2xl border hidden border-neutral-200 bg-white" data-panel="metabolic">
<p className="text-neutral-700">Consistent sweating is a simple routine supporting your body’s natural pathways—no complicated build-outs or memberships.</p>
<p className="mt-3 text-sm text-neutral-600">“Travel-friendly and consistent at home—best investment in my routine.” — A.K., tech founder</p>
</div>
<div className="usecase-panel p-6 rounded-2xl border hidden border-neutral-200 bg-white" data-panel="stress">
<p className="text-neutral-700">Evening sessions can help downshift after intense days—users report calmer nights and better sleep continuity.</p>
<p className="mt-3 text-sm text-neutral-600">“Sleep quality and readiness improved within a week.” — L.M., physician-operator</p>
</div>
<div className="usecase-panel p-6 rounded-2xl border hidden border-neutral-200 bg-white" data-panel="travel">
<p className="text-neutral-700">Sets up in any suite or office—folds to carry-on size so your habit travels with you.</p>
<p className="mt-3 text-sm text-neutral-600">“Finally, a daily protocol that moves with me.” — P.S., global exec</p>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<div className="grid md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl border border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<img alt="Customer headshot" className="w-10 h-10 rounded-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&auto=format&fit=crop" />
<div>
<div className="font-medium">A.B., Venture Partner</div>
<div className="text-xs text-neutral-500" style={{}}>Energy + Sleep</div>
</div>
</div>
<p className="mt-3 text-neutral-700">“Before: post-travel fatigue. After: 20-min evening sessions stabilized energy and improved sleep continuity.”</p>
</div>
<div className="p-6 rounded-2xl border border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<img alt="Customer headshot" className="w-10 h-10 rounded-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&h=200&auto=format&fit=crop" />
<div>
<div className="font-medium">C.D., Physician-CEO</div>
<div className="text-xs text-neutral-500" style={{}}>Recovery</div>
</div>
</div>
<p className="mt-3 text-neutral-700">“Daily sweat without leaving home. Compliance is everything—this makes it easy.”</p>
</div>
<div className="p-6 rounded-2xl border border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<img alt="Customer headshot" className="w-10 h-10 rounded-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&auto=format&fit=crop" />
<div>
<div className="font-medium">E.F., Founder</div>
<div className="text-xs text-neutral-500" style={{}}>Travel Routine</div>
</div>
</div>
<p className="mt-3 text-neutral-700">“Hotel room setup in a minute. A reliable anchor for my physiology on the road.”</p>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-neutral-200" id="specs">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Specs & What’s in the Box</h2>
<div className="mt-6 grid lg:grid-cols-2 gap-8">
<div className="p-6 rounded-2xl border border-neutral-200 bg-white">
<h3 className="text-lg font-semibold" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Specifications</h3>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li>Dimensions (open/folded): [insert measurements]</li>
<li>Power: Standard US outlet (110–120V), [insert wattage]</li>
<li>Materials: [insert materials]</li>
<li>Panel type: Far-infrared, low EMF</li>
<li>Weight: [insert lbs/kg]</li>
</ul>
<a className="mt-3 inline-flex items-center gap-2 text-sm text-[#018DF8] hover:underline" href="#" style={{}}>Download PDF spec sheet <i className="w-4 h-4" data-lucide="file-down"></i></a>
</div>
<div className="p-6 rounded-2xl border border-neutral-200 bg-white">
<h3 className="text-lg font-semibold" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>What’s Included</h3>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li>Healing Sauna unit</li>
<li>Digital controller</li>
<li>Carry case</li>
<li>User guide</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>FAQ</h2>
<div className="mt-6 space-y-3">
<div className="rounded-2xl border border-neutral-200 bg-white">
<button className="w-full flex items-center justify-between p-5 text-left faq-trigger">
<span className="font-medium">Will this fit my space?</span>
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
<div className="px-5 pb-5 hidden">
<p className="text-sm text-neutral-700">Dimensions listed above. Quick check: ensure a small chair footprint and a standard outlet nearby.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white">
<button className="w-full flex items-center justify-between p-5 text-left faq-trigger">
<span className="font-medium">EMF & safety?</span>
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
<div className="px-5 pb-5 hidden">
<p className="text-sm text-neutral-700">Low-EMF components and shielding at key contact points. Independent measurements available on request.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white">
<button className="w-full flex items-center justify-between p-5 text-left faq-trigger">
<span className="font-medium">How hot/how fast do I sweat?</span>
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
<div className="px-5 pb-5 hidden">
<p className="text-sm text-neutral-700">Warm-up in minutes; most users report sweating within the first 10–15 minutes depending on environment.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white">
<button className="w-full flex items-center justify-between p-5 text-left faq-trigger">
<span className="font-medium">Cleaning & maintenance?</span>
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
<div className="px-5 pb-5 hidden">
<p className="text-sm text-neutral-700">Wipe-down surfaces post-session; occasional gentle fabric refresh. No plumbing required.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white">
<button className="w-full flex items-center justify-between p-5 text-left faq-trigger">
<span className="font-medium">Return policy & warranty?</span>
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
<div className="px-5 pb-5 hidden">
<p className="text-sm text-neutral-700">30-day trial. Love it or return it. Warranty covers manufacturing defects—see terms at checkout.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white">
<button className="w-full flex items-center justify-between p-5 text-left faq-trigger">
<span className="font-medium">Shipping timelines?</span>
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
<div className="px-5 pb-5 hidden">
<p className="text-sm text-neutral-700">Priority shipping for Longevity Platinum attendees. Typical lead time: [X–Y days].</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<div className="p-8 rounded-3xl border border-neutral-200 bg-white">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Ready to Turn Your Home into a Recovery Lab?</h2>
<p className="mt-3 text-neutral-700">Book a demo or claim the event offer now.</p>
<div className="mt-6 flex flex-wrap gap-3">
<button className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-[#018DF8] to-[#00E0D4] font-medium text-white" id="finalBookCta" style={{}}>
<i className="w-5 h-5" data-lucide="calendar"></i> Book a 10-min Demo
              </button>
<button className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-neutral-300" id="finalOfferCta">
<i className="w-5 h-5" data-lucide="badge-percent"></i> Claim Event Offer
              </button>
<div className="w-full text-sm mt-2 text-neutral-600">Questions? Text or call us: 808-400-9690 • info@hawaiiwellnessretreats.com</div>
</div>
</div>
<img alt="Happy user after sauna session" className="rounded-2xl border border-neutral-200" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4 lg:px-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#018DF8] to-[#00E0D4] flex items-center justify-center" style={{}}>
<i className="w-4 h-4 text-white" data-lucide="flame" style={{}}></i>
</div>
<div>
<div className="font-semibold" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>Healing Sauna</div>
<div className="text-xs text-neutral-500" style={{}}>Big Island, Hawaiʻi</div>
</div>
</div>
<div className="flex items-center gap-6 text-sm text-neutral-600">
<a className="hover:text-neutral-900" href="#" style={{}}>Privacy</a>
<a className="hover:text-neutral-900" href="#" style={{}}>Terms</a>
<a className="hover:text-neutral-900" href="#" style={{}}>Contact</a>
</div>
</div>
<div className="mt-6 text-xs text-neutral-500" style={{}}>
        Compliance note: Lifestyle product. Not intended to diagnose, treat, cure, or prevent any disease.
      </div>
<div className="mt-4 text-xs text-neutral-500" style={{}}>© 2025 Healing Sauna. All rights reserved.</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="bookingModal">
<div className="absolute inset-0 bg-black/40"></div>
<div className="relative max-w-3xl mx-auto mt-20 rounded-2xl border shadow-xl bg-white border-neutral-200">
<div className="flex items-center justify-between p-4 border-b border-neutral-200">
<h3 className="font-semibold">Book Your 10-Min Demo</h3>
<button className="p-2 rounded-lg border border-neutral-200" data-close="bookingModal"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>
<div className="p-4">
<iframe className="w-full h-[70vh] rounded-lg border border-neutral-200" loading="lazy" src="https://calendly.com/your-org/healing-sauna-demo?hide_event_type_details=1&hide_gdpr_banner=1" title="Demo Booking Calendar"></iframe>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="videoModal">
<div className="absolute inset-0 bg-black/50"></div>
<div className="relative max-w-4xl mx-auto mt-20 rounded-2xl border shadow-xl overflow-hidden bg-white border-neutral-200">
<div className="flex items-center justify-between p-4 border-b border-neutral-200">
<h3 className="font-semibold">Product Reel</h3>
<button className="p-2 rounded-lg border border-neutral-200" data-close="videoModal"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>
<div className="aspect-video">
<iframe allow="autoplay; fullscreen; picture-in-picture" className="w-full h-full" loading="lazy" src="https://player.vimeo.com/video/000000000?title=0&byline=0&portrait=0" title="Healing Sauna Reel"></iframe>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="thankModal">
<div className="absolute inset-0 bg-black/40"></div>
<div className="relative max-w-2xl mx-auto mt-24 rounded-2xl border shadow-xl bg-white border-neutral-200">
<div className="flex items-center justify-between p-4 border-b border-neutral-200">
<h3 className="font-semibold">You're In — Book Now</h3>
<button className="p-2 rounded-lg border border-neutral-200" data-close="thankModal"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>
<div className="p-5">
<p className="text-neutral-700">We’ve received your details. Lock in your 10-min demo time below. You’ll also get a confirmation email and an SMS reminder 1 hour before your demo.</p>
<div className="mt-4">
<iframe className="w-full h-[60vh] rounded-lg border border-neutral-200" loading="lazy" src="https://calendly.com/your-org/healing-sauna-demo?hide_event_type_details=1&hide_gdpr_banner=1" title="Inline Calendar"></iframe>
</div>
</div>
</div>
</div>

    </>
  );
}
