import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Render icons
      lucide.createIcons();

      // Mobile drawer logic
      const menuBtn = document.getElementById('mobile-menu');
      const drawer = document.getElementById('drawer');
      const drawerClose = document.getElementById('drawerClose');
      if (menuBtn && drawer && drawerClose) {
        menuBtn.addEventListener('click', () => drawer.classList.remove('hidden'));
        drawerClose.addEventListener('click', () => drawer.classList.add('hidden'));
        drawer.addEventListener('click', (e) => { if (e.target === drawer) drawer.classList.add('hidden'); });
      }

      // Simple client-side form handler (demo)
      const form = document.getElementById('form');
      const submitBtn = document.getElementById('submitBtn');
      const alertEl = document.getElementById('alert');

      form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        if (data.get('company')) return; // honeypot

        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-70', 'cursor-not-allowed');
        submitBtn.innerHTML = '<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="white" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg><span>Sending…</span>';

        // Simulate async send; replace with real endpoint as needed
        await new Promise(r => setTimeout(r, 1200));

        alertEl.classList.remove('hidden');
        form.reset();

        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
        submitBtn.innerHTML = '<i data-lucide="send" class="h-4 w-4"></i> Send Message';
        lucide.createIcons(); // re-render icon
        alertEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative">
<div className="absolute inset-0 pointer-events-none">
<div className="h-[80px] bg-neutral-950/80 backdrop-blur"></div>
</div>
<nav className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
<a className="flex items-center gap-3 group" href="#">
<div className="h-9 w-9 rounded-md bg-gradient-to-br from-orange-500 to-rose-500 ring-1 ring-white/10 grid place-items-center">
<svg className="h-5 w-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M2 12h20M12 2v20" opacity=".5"></path><circle cx="12" cy="12" r="5"></circle></svg>
</div>
<span className="text-[15px] font-semibold tracking-tight text-white/90">Global Intrigue Imports</span>
</a>
<div className="hidden md:flex items-center gap-7">
<a className="text-sm text-white/70 hover:text-white" href="#">Home</a>
<a className="text-sm text-white/70 hover:text-white" href="#">Blog</a>
<a className="text-sm text-white/70 hover:text-white" href="#">About Us</a>
<a className="text-sm text-white/70 hover:text-white" href="#">Car List</a>
<a className="text-sm text-white hover:text-white font-medium" href="#">Contact</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium tracking-tight bg-white text-neutral-900 hover:bg-neutral-200 transition" href="#contact-form">
<i className="h-4 w-4" data-lucide="send"></i>
            Get a Quote
          </a>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10" id="mobile-menu">
<i className="h-5 w-5 text-white/80" data-lucide="menu"></i>
</button>
</div>
</nav>
</header>

<section className="relative isolate">
<div className="absolute inset-0 -z-10">
<img alt="" className="h-full w-full object-cover opacity-40" src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-950 to-neutral-950"></div>
<div className="absolute inset-x-0 -bottom-40 h-80 blur-3xl bg-gradient-to-t from-orange-600/20 via-rose-500/10 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-12 pb-20">
<p className="text-sm text-white/60">Home / <span className="text-white/80">Contact</span></p>
<div className="mt-6">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">Let’s talk about your next import</h1>
<p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl">Fast, clear, and reliable support. Reach us by phone, WhatsApp, or email — or send a message below. We typically reply within 1 business day.</p>
<div className="mt-8 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-2.5 text-sm font-medium tracking-tight text-white shadow-lg shadow-orange-500/20 hover:opacity-95 transition" href="https://wa.me/818064869574" target="_blank">
<i className="h-4 w-4" data-lucide="message-circle"></i> Chat on WhatsApp
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-white/10 ring-1 ring-white/15 px-4 py-2.5 text-sm font-medium tracking-tight hover:bg-white/15 transition" href="tel:+818064869574">
<i className="h-4 w-4" data-lucide="phone"></i> Call Now
            </a>
</div>
</div>
</div>
</section>

<section className="relative -mt-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 backdrop-blur">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/15 grid place-items-center">
<i className="h-5 w-5 text-white/80" data-lucide="phone"></i>
</div>
<div>
<p className="text-xs uppercase tracking-wider text-white/50">Telephone / WhatsApp</p>
<p className="mt-1 text-base font-medium tracking-tight text-white/90">080 6486 9574</p>
<div className="mt-2 flex items-center gap-1 text-sm text-white/60">
<i className="h-4 w-4" data-lucide="clock"></i>
<span>Mon–Sat, 9:00–18:00 JST</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 backdrop-blur">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/15 grid place-items-center">
<i className="h-5 w-5 text-white/80" data-lucide="mail"></i>
</div>
<div>
<p className="text-xs uppercase tracking-wider text-white/50">Email</p>
<a className="mt-1 block text-base font-medium tracking-tight text-white/90 hover:underline" href="mailto:Globalintrigueimports@gmail.com">Globalintrigueimports@gmail.com</a>
<a className="block text-base font-medium tracking-tight text-white/90 hover:underline" href="mailto:info@globalintrigueautoimports.com">info@globalintrigueautoimports.com</a>
</div>
</div>
</div>

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 backdrop-blur">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/15 grid place-items-center">
<i className="h-5 w-5 text-white/80" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-xs uppercase tracking-wider text-white/50">Location</p>
<p className="mt-1 text-base font-medium tracking-tight text-white/90">Yomitan, Okinawa, Japan</p>
<a className="mt-2 inline-flex items-center gap-1 text-sm text-white/70 hover:text-white" href="#map">
<i className="h-4 w-4" data-lucide="navigation"></i> View on map
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_400px_at_10%_-10%,rgba(255,115,80,0.08),transparent)]"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8" id="contact-form">
<div className="mb-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Send us a message</h2>
<p className="mt-2 text-sm text-white/60">Tell us what you’re looking for and we’ll respond promptly.</p>
</div>
<form className="space-y-4" id="form" novalidate="">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-white/70 mb-2">Your Name</label>
<input className="w-full rounded-lg bg-white/5 text-white placeholder-white/40 ring-1 ring-white/10 focus:ring-2 focus:ring-orange-500/70 focus:outline-none px-3.5 py-2.5 text-sm" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-white/70 mb-2">Your Email</label>
<input className="w-full rounded-lg bg-white/5 text-white placeholder-white/40 ring-1 ring-white/10 focus:ring-2 focus:ring-orange-500/70 focus:outline-none px-3.5 py-2.5 text-sm" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-white/70 mb-2">Your Number</label>
<input className="w-full rounded-lg bg-white/5 text-white placeholder-white/40 ring-1 ring-white/10 focus:ring-2 focus:ring-orange-500/70 focus:outline-none px-3.5 py-2.5 text-sm" name="phone" placeholder="+81 80 0000 0000" type="tel"/>
</div>
<div>
<label className="block text-sm text-white/70 mb-2">Car (Name, Type or Model)</label>
<input className="w-full rounded-lg bg-white/5 text-white placeholder-white/40 ring-1 ring-white/10 focus:ring-2 focus:ring-orange-500/70 focus:outline-none px-3.5 py-2.5 text-sm" name="model" placeholder="e.g., Toyota Hiace, 4WD, 2018+" type="text"/>
</div>
</div>
<div>
<label className="block text-sm text-white/70 mb-2">Your Message</label>
<textarea className="w-full rounded-lg bg-white/5 text-white placeholder-white/40 ring-1 ring-white/10 focus:ring-2 focus:ring-orange-500/70 focus:outline-none px-3.5 py-2.5 text-sm" name="message" placeholder="What can we help you find? Budget, timeline, must‑haves…" rows="5"></textarea>
</div>

<input autocomplete="off" className="hidden" name="company" tabindex="-1" type="text"/>
<div className="flex items-center justify-between gap-3 pt-1">
<p className="text-xs text-white/50">By sending, you agree to be contacted about your inquiry.</p>
<button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-2.5 text-sm font-medium tracking-tight text-white shadow-lg shadow-orange-500/20 hover:opacity-95 transition" id="submitBtn" type="submit">
<i className="h-4 w-4" data-lucide="send"></i> Send Message
              </button>
</div>
<div className="hidden mt-4 rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/30 px-3.5 py-2.5 text-sm text-emerald-300" id="alert">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="check-circle"></i>
                Your message has been sent. We’ll be in touch soon.
              </div>
</div>
</form>
</div>

<div className="flex flex-col justify-between">
<div>
<p className="text-xs uppercase tracking-wider text-orange-400">Get Connected</p>
<h3 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-white">How can we help you?</h3>
<p className="mt-4 text-base text-white/70">We connect buyers with quality vehicles and parts through transparent sourcing and reliable logistics. From auction bidding to shipping and customs, we’ll guide you end‑to‑end.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3 text-white/80">
<i className="mt-0.5 h-5 w-5 text-white/70" data-lucide="shield-check"></i>
<span className="text-sm">Verified suppliers and auction access with photo/video inspection.</span>
</li>
<li className="flex items-start gap-3 text-white/80">
<i className="mt-0.5 h-5 w-5 text-white/70" data-lucide="truck"></i>
<span className="text-sm">Shipping coordination, documents, and customs assistance.</span>
</li>
<li className="flex items-start gap-3 text-white/80">
<i className="mt-0.5 h-5 w-5 text-white/70" data-lucide="badge-check"></i>
<span className="text-sm">Clear pricing and timelines — no surprises.</span>
</li>
</ul>
</div>
<div className="mt-10 rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
<div className="flex flex-wrap items-center gap-4">
<div className="flex items-center gap-2 text-white/80">
<i className="h-4 w-4" data-lucide="mail"></i>
<a className="text-sm hover:underline" href="mailto:info@globalintrigueautoimports.com">info@globalintrigueautoimports.com</a>
</div>
<div className="flex items-center gap-2 text-white/80">
<i className="h-4 w-4" data-lucide="phone"></i>
<a className="text-sm hover:underline" href="tel:+818064869574">+81 80 6486 9574</a>
</div>
<div className="flex items-center gap-2 text-white/80">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span className="text-sm">Yomitan, Okinawa</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative pb-16 sm:pb-24" id="map">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<div className="aspect-[16/9] sm:aspect-[21/9] relative">
<iframe allowfullscreen="" className="absolute inset-0 h-full w-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68955.08185670155!2d127.727!3d26.401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e51d3a8c7af9c5%3A0x3f0ff1a6f97a4e8c!2sYomitan%2C%20Nakagami%20District%2C%20Okinawa%2C%20Japan!5e0!3m2!1sen!2sjp!4v1690000000000" style={{border: '0'}} title="Yomitan, Okinawa Map"></iframe>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 flex items-end justify-center">
<div className="pointer-events-auto -mb-10 w-[92%] max-w-3xl rounded-xl bg-neutral-950/80 backdrop-blur ring-1 ring-white/10 px-5 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/10 ring-1 ring-white/15">
<i className="h-4 w-4 text-white/80" data-lucide="phone"></i>
</div>
<div className="text-sm">
<p className="text-white/50">Call</p>
<a className="font-medium tracking-tight text-white/90 hover:underline" href="tel:+818064869574">+81 80 6486 9574</a>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/10 ring-1 ring-white/15">
<i className="h-4 w-4 text-white/80" data-lucide="mail"></i>
</div>
<div className="text-sm">
<p className="text-white/50">Email</p>
<a className="font-medium tracking-tight text-white/90 hover:underline" href="mailto:Globalintrigueimports@gmail.com">Globalintrigueimports@gmail.com</a>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/10 ring-1 ring-white/15">
<i className="h-4 w-4 text-white/80" data-lucide="navigation"></i>
</div>
<div className="text-sm">
<p className="text-white/50">Navigate</p>
<a className="font-medium tracking-tight text-white/90 hover:underline" href="https://maps.app.goo.gl/" target="_blank">Open in Maps</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
<div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-gradient-to-br from-orange-500 to-rose-500 ring-1 ring-white/10 grid place-items-center">
<svg className="h-5 w-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M2 12h20M12 2v20" opacity=".5"></path><circle cx="12" cy="12" r="5"></circle></svg>
</div>
<span className="text-[15px] font-semibold tracking-tight text-white/90">Global Intrigue Imports</span>
</div>
<p className="mt-3 text-sm text-white/60 max-w-sm">Thank you for choosing us for trusted auto imports and parts sourcing.</p>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-white/80">Useful Links</p>
<div className="mt-3 grid gap-2 text-sm">
<a className="text-white/60 hover:text-white" href="#">About Us</a>
<a className="text-white/60 hover:text-white" href="#">Car List</a>
<a className="text-white/60 hover:text-white" href="#">Contact</a>
<a className="text-white/60 hover:text-white" href="#">Privacy Policy</a>
</div>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-white/80">Contact</p>
<div className="mt-3 grid gap-2 text-sm">
<div className="flex items-center gap-2 text-white/70">
<i className="h-4 w-4" data-lucide="map-pin"></i> Yomitan, Okinawa, Japan
            </div>
<a className="flex items-center gap-2 text-white/70 hover:text-white" href="tel:+818064869574">
<i className="h-4 w-4" data-lucide="phone"></i> +81 80 6486 9574
            </a>
<a className="flex items-center gap-2 text-white/70 hover:text-white" href="mailto:info@globalintrigueautoimports.com">
<i className="h-4 w-4" data-lucide="mail"></i> info@globalintrigueautoimports.com
            </a>
</div>
</div>
</div>
<div className="px-6 pb-8">
<div className="max-w-7xl mx-auto text-center text-xs text-white/40">© 2025 Global Intrigue Imports. All rights reserved.</div>
</div>
</footer>

<div className="fixed inset-0 z-40 hidden" id="drawer">
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute right-0 top-0 h-full w-72 bg-neutral-900 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<span className="text-sm font-medium tracking-tight text-white/90">Menu</span>
<button className="h-9 w-9 grid place-items-center rounded-md bg-white/5 ring-1 ring-white/10" id="drawerClose">
<i className="h-5 w-5 text-white/80" data-lucide="x"></i>
</button>
</div>
<div className="mt-6 grid gap-3">
<a className="text-sm text-white/80 hover:text-white" href="#">Home</a>
<a className="text-sm text-white/80 hover:text-white" href="#">Blog</a>
<a className="text-sm text-white/80 hover:text-white" href="#">About Us</a>
<a className="text-sm text-white/80 hover:text-white" href="#">Car List</a>
<a className="text-sm text-white hover:text-white font-medium" href="#">Contact</a>
<a className="mt-2 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-2 text-sm font-medium tracking-tight text-white" href="#contact-form">
<i className="h-4 w-4" data-lucide="send"></i> Get a Quote
          </a>
</div>
</div>
</div>



    </>
  );
}
