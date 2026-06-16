import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



            // Carousel functionality (unchanged)
            let currentSlide = 0;
            const totalSlides = 2;
            const carousel = document.getElementById('testimonialCarousel');
            const indicators = document.querySelectorAll('.carousel-indicator');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            function updateCarousel() {
              carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
              indicators.forEach((indicator, index) => {
                if (index === currentSlide) {
                  indicator.classList.remove('bg-white/30', 'hover:bg-white/50');
                  indicator.classList.add('bg-white');
                } else {
                  indicator.classList.remove('bg-white');
                  indicator.classList.add('bg-white/30', 'hover:bg-white/50');
                }
              });
            }
            function nextSlide() { currentSlide = (currentSlide + 1) % totalSlides; updateCarousel(); }
            function prevSlide() { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; updateCarousel(); }
            function goToSlide(slideIndex) { currentSlide = slideIndex; updateCarousel(); }
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            indicators.forEach((indicator, index) => indicator.addEventListener('click', () => goToSlide(index)));
            setInterval(nextSlide, 5000);
          


    // Utility
    const $ = (s, ctx = document) => ctx.querySelector(s);
    const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));

    // Year
    $('#year').textContent = new Date().getFullYear();

    // Simple client-side router
    const pages = $$('.route-page');
    const routes = ['home','about','tech','product','ecosystem','order'];

    function showPage(name) {
      pages.forEach(p => p.classList.add('hidden'));
      const target = document.querySelector(`[data-page="${name}"]`);
      if (target) target.classList.remove('hidden');
    }

    function smoothScrollToFeatures() {
      showPage('home');
      const el = document.getElementById('features');
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    function navigate() {
      const hash = location.hash || '#/home';
      if (hash === '#features') {
        smoothScrollToFeatures();
        return;
      }
      const match = hash.match(/^#\/([\w-]+)/);
      const name = match ? match[1] : 'home';
      if (!routes.includes(name)) {
        showPage('home');
      } else {
        showPage(name);
        // Scroll to top for new "pages", preserve for features
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    window.addEventListener('hashchange', navigate);
    window.addEventListener('DOMContentLoaded', navigate);

    // Order form live pricing
    const form = $('#orderForm');
    const summary = {
      model: $('#summaryModel'),
      color: $('#summaryColor'),
      lens: $('#summaryLens'),
      addons: $('#summaryAddons'),
      ship: $('#summaryShip'),
      qty: $('#summaryQty'),
      subtotal: $('#subtotal')
    };

    function computePrice() {
      const model = form?.model?.value || 'explorer';
      const lens = form?.lens?.value || 'clear';
      const ship = form?.ship?.value || 'standard';
      const care = form?.care?.checked || false;
      const battery = form?.battery?.checked || false;
      const qty = Math.max(1, Math.min(5, parseInt(form?.qty?.value || '1', 10)));

      const base = model === 'pro' ? 549 : 349;
      const lensCost = lens === 'tinted' ? 20 : lens === 'prescription' ? 80 : 0;
      const shipCost = ship === 'express' ? 15 : ship === 'priority' ? 29 : 0;
      const addons = (care ? 69 : 0) + (battery ? 39 : 0);

      const perUnit = base + lensCost + addons;
      const total = perUnit * qty + shipCost;

      // Update summary
      summary.model.textContent = model === 'pro' ? 'Creator Pro' : 'Explorer';
      const colorLabel = ($('input[name="color"]:checked')?.parentElement?.textContent || '—').trim();
      summary.color.textContent = colorLabel.replace(/\s+\+\s+\$\d+/, '');
      summary.lens.textContent = lens.charAt(0).toUpperCase() + lens.slice(1);
      const addonsText = [care ? 'Care+' : null, battery ? 'Extra battery' : null].filter(Boolean).join(', ') || 'None';
      summary.addons.textContent = addonsText;
      summary.ship.textContent = ship.charAt(0).toUpperCase() + ship.slice(1);
      summary.qty.textContent = String(qty);
      summary.subtotal.textContent = `$${total.toLocaleString()}`;
    }

    function bindOrderUI() {
      if (!form) return;
      // Inputs change
      ['model','lens','ship','color'].forEach(name => {
        $$( `input[name="${name}"]`, form).forEach(el => el.addEventListener('change', computePrice));
      });
      ['care','battery'].forEach(name => {
        const el = form.querySelector(`input[name="${name}"]`);
        if (el) el.addEventListener('change', computePrice);
      });
      // Qty buttons
      $$('button[data-qty]', form).forEach(btn => {
        btn.addEventListener('click', () => {
          const dir = btn.getAttribute('data-qty');
          const input = $('#qty', form);
          const val = parseInt(input.value || '1', 10);
          input.value = String(Math.max(1, Math.min(5, dir === 'inc' ? val + 1 : val - 1)));
          input.dispatchEvent(new Event('input'));
          computePrice();
        });
      });
      $('#qty', form).addEventListener('input', computePrice);

      // Initial compute
      computePrice();

      // Submit
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.email.value.trim();
        if (!email) {
          show('Enter a valid email to continue.');
          return;
        }
        showToast('Order placed! Check your email for details.');
        form.reset();
        // Ensure defaults reselected
        form.model.value = 'explorer';
        form.color.value = 'matte-black';
        form.lens.value = 'clear';
        form.ship.value = 'standard';
        computePrice();
      });
    }

    function showToast(message) {
      const toast = $('#toast');
      if (!toast) return;
      $('#toastMsg').textContent = message;
      toast.classList.remove('hidden');
      toast.animate([{ transform: 'translate(-50%, 20px)', opacity: 0 }, { transform: 'translate(-50%, 0px)', opacity: 1 }], { duration: 200, easing: 'ease-out' });
      setTimeout(() => {
        toast.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, easing: 'ease-in' }).onfinish = () => toast.classList.add('hidden');
      }, 2500);
    }

    document.addEventListener('DOMContentLoaded', bindOrderUI);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<div className="aura-background-component top-0 w-full -z-10 saturate-200 absolute h-[750px]"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>
<header className="relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<nav className="mt-6 flex items-center justify-between">
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur hover:bg-white/10 hover:border-white/20 transition-colors" href="#/home">
<span className="inline-flex items-center justify-center bg-emerald-500 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4ddf1659-676f-4667-803c-7da358ebde59_320w.jpg)] bg-cover rounded-full">
</span>
<span className="text-base font-medium tracking-tighter font-geist">Edith</span>
</a>
<div className="hidden gap-1 md:flex bg-white/5 border-white/10 border rounded-xl pt-1 pr-1 pb-1 pl-1 backdrop-blur items-center">
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-geist" data-route="about" href="#/about">About</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-geist" data-route="tech" href="#/tech">Tech</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-geist" data-route="product" href="#/product">Product</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-geist" href="#features">Features</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-geist" data-route="ecosystem" href="#/ecosystem">Ecosystem</a>
<a className="inline-flex items-center gap-2 hover:bg-emerald-400 transition-colors text-sm font-medium text-black font-geist bg-emerald-500 rounded-lg ml-2 pt-2 pr-3 pb-2 pl-3" data-route="order" href="https://edith-order.aura.build">Order</a>
</div>
<a className="md:hidden inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium backdrop-blur hover:bg-white/10 transition-colors font-geist" href="#/home">
<svg className="lucide lucide-menu h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
          Menu
        </a>
</nav>

<section className="relative z-10 max-w-4xl sm:pt-20 md:pt-28 text-center mr-auto ml-auto pt-14 pb-12">

<div className="mb-6 flex items-center justify-center gap-4">
<div className="flex -space-x-3">
<img alt="Beta user 1" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<img alt="Beta user 2" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<img alt="Beta user 3" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<img alt="Beta user 4" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<img alt="Beta user 5" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="flex flex-col items-start">
<div className="flex items-center">
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
</div>
<p className="text-xs font-medium text-white/70 font-geist mt-1">25k+ Active Users</p>
</div>
</div>
<h1 className="max-w-5xl sm:text-5xl md:text-7xl text-4xl tracking-tighter font-geist mr-auto ml-auto">
          The AI eyewear that lets you <span className="italic text-white tracking-tight font-instrument-serif" style={{fontFamily: '\'Playfair Display\', serif'}}>see more</span>.
        </h1>
<p className="sm:text-lg text-base font-normal text-white/70 font-geist max-w-2xl mt-6 mr-auto ml-auto">Edith blends a holographic display, voice AI, ultra-wide cameras, and spatial audio into sleek eyewear. Capture, translate, navigate, and get answers—hands‑free.</p>
<div className="flex flex-col gap-3 sm:flex-row mt-8 items-center justify-center">
<a className="inline-flex items-center gap-2 hover:bg-emerald-400 transition-colors text-base font-medium text-black font-geist bg-emerald-500 rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]" data-route="order" href="https://edith-order.aura.build">Order Now</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 hover:border-white/20 transition-colors text-base font-medium text-white/90 font-geist bg-white/5 border-white/10 border rounded-xl pt-3 pr-6 pb-3 pl-6 backdrop-blur" data-route="product" href="https://streamable.com/6q6j3j">
<svg className="lucide lucide-play h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="6 3 20 12 6 21 6 3"></polygon></svg>
            Watch demo
          </a>
</div>
</section>
</div>
</header>

<main className="min-h-[40vh]" id="router-root">

<section className="route-page" data-page="home">

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-16 pl-4 mt-32"></section>

<section className="relative overflow-hidden">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid items-center gap-10 md:grid-cols-2">
<div className="">
<h2 className="sm:text-4xl md:text-5xl text-3xl tracking-tighter font-geist">Hands‑free. Heads‑up. Everyday.</h2>
<p className="mt-4 text-base text-white/70 font-geist">
                See turn‑by‑turn overlays, get instant answers, capture stabilized 4K, and tune into spatial audio—while your phone stays in your pocket.
              </p>
<div className="mt-6 flex items-center gap-3">
</div>
</div>
<div className="relative">
<img alt="edith holographic UI preview" className="aspect-[4/3] w-full object-cover border-white/10 border rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/56d4630b-a775-4a8e-bf85-b02e1f8ff063_3840w.jpg"/>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4" id="features">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-white/50 font-geist">What’s inside</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl font-normal tracking-tighter font-geist">Advanced tech in a familiar form</h2>
<p className="mt-3 text-base text-white/70 font-geist">Holographic display, voice AI, spatial audio, and a dual camera array—seamlessly integrated into everyday eyewear.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-2 md:row-span-2">
<div className="relative">
<img alt="Holographic display overlay" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/00d0fb63-74a4-4733-b50b-98d7825fdda7_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
</div>
<div className="p-5 sm:p-6">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-geist">NEW</span>
<span className="text-xs text-white/60 font-geist">Holographic HUD</span>
</div>
<h3 className="mt-3 text-2xl sm:text-3xl font-medium tracking-tight font-geist">Holographic display, only when you want it</h3>
<p className="mt-2 text-sm sm:text-base text-white/70 font-geist">Contextual overlays for directions, notifications, and tasks. Bright in daylight, subtle at night, and fully off for a clear lens view.</p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 hover:border-white/20 transition-colors font-geist" data-route="product" href="#/product">
<svg className="lucide lucide-monitor-play h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M12 17v4"></path><path d="M8 21h8"></path><polygon points="10 7 15 10 10 13 10 7"></polygon></svg>
                  Watch the HUD
                </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-black font-geist bg-emerald-500 rounded-lg px-4 py-2 hover:bg-emerald-400 transition-colors" data-route="product" href="#/product">
<svg className="lucide lucide-send h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-3-9-9-3Z"></path><path d="M22 2 11 13"></path></svg>
                  Explore the OS
                </a>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight font-geist flex items-center gap-2">
                  Live translation
                  <svg className="lucide lucide-language h-4 w-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2v3"></path><path d="M22 22l-5-10-5 10"></path><path d="M14 18h6"></path></svg>
</h3>
<span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-geist">BETA</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Understand and be understood—real‑time captions and speech in 45+ languages, right in your view.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Live translation overlay" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1673515335152-f2589ba8bb7a?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="p-5 sm:p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight font-geist flex items-center gap-2">Privacy‑first</h3>
<span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-geist">NEW</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Tactile privacy switch, capture LED, and on‑device processing for voice tasks. Your moments stay yours.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Privacy hardware" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="p-5 sm:p-6">
<h3 className="text-lg font-medium tracking-tight font-geist flex items-center gap-2">
                Gesture control
                <span className="ml-2 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-geist">NEW</span>
</h3>
<p className="mt-2 text-sm text-white/70 font-geist">Pinch to capture, swipe to switch modes, double‑tap to answer. Effortless control anywhere.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Gesture control UI" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d901a976-d724-4fbe-a1dc-ab94e5929fd7_800w.jpg"/>
</div>
</div>
</div>

<div className="relative overflow-hidden bg-white/5 border-white/10 border rounded-2xl">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight font-geist flex items-center gap-2">4K stabilized capture</h3>
<p className="text-sm text-white/70 font-geist mt-2">Dual ultra‑wide sensors with HDR and gyro stabilization for POV footage that feels cinematic.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="4K capture" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1666546244937-6059f5ef4eef?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="relative overflow-hidden bg-white/5 border-white/10 border rounded-2xl">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<h3 className="text-lg font-medium tracking-tight font-geist flex items-center gap-2">Spatial audio</h3>
<p className="mt-2 text-sm text-white/70 font-geist">Open‑ear speakers tuned for rich, directional sound—private to you, clear to your world.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10">
<img alt="Spatial audio visualization" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1619472351888-f844a0b33f5b?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden relative">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="max-w-4xl mx-auto text-center">
<h2 className="sm:text-4xl md:text-5xl text-3xl tracking-tighter font-geist mt-4">How people use edith every day</h2>
<p className="text-base text-white/70 font-geist mt-4">From creators and travelers to cyclists and chefs—see why edith becomes a daily companion.</p>
<div className="mt-8">
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 hover:border-white/20 transition-colors font-geist" data-route="about" href="#/about">
                View all stories
              </a>
</div>
</div>

<div className="mt-10 relative">
<div className="overflow-hidden">
<div className="flex transition-transform duration-500 ease-out" id="testimonialCarousel" style={{transform: 'translateX(0%)'}}>

<div className="w-full flex-shrink-0">
<div className="grid gap-6 md:grid-cols-3">

<div className="relative overflow-hidden sm:p-6 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Ava Patel avatar" className="h-9 w-9 ring-2 ring-black/60 object-cover rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 flex items-center gap-1 text-white">
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
</div>
<p className="sm:text-base text-sm text-white/80 font-geist mt-3">“Live translation changed the way I travel. Directions float right where I need them—no phone juggling.”</p>
<div className="mt-5 pt-3 border-t border-white/10">
<p className="text-sm font-semibold tracking-tight font-geist">Ava Patel • Filmmaker</p>
<p className="text-xs text-white/60 font-geist mt-1">Los Angeles</p>
</div>
</div>

<div className="relative overflow-hidden sm:p-6 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Diego Alvarez avatar" className="h-9 w-9 ring-2 ring-black/60 object-cover rounded-full" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 flex items-center gap-1 text-white">
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">“I record rides in 4K without touching a thing. Stabilization is nuts and the audio is surprisingly good.”</p>
<div className="mt-5 pt-3 border-t border-white/10">
<p className="text-sm font-semibold tracking-tight font-geist">Diego Alvarez • Cyclist</p>
<p className="text-xs text-white/60 font-geist mt-1">Barcelona</p>
</div>
</div>

<div className="relative overflow-hidden sm:p-6 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Maya Lee avatar" className="h-9 w-9 ring-2 ring-black/60 object-cover rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="mt-3 flex items-center gap-1 text-white">
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">“Voice AI is like a quiet co‑pilot. Timers, conversions, step‑by‑step recipes—no mess on my phone.”</p>
<div className="mt-5 pt-3 border-t border-white/10">
<p className="text-sm font-semibold tracking-tight font-geist">Maya Lee • Chef</p>
<p className="text-xs text-white/60 font-geist mt-1">Seoul</p>
</div>
</div>
</div>
</div>

<div className="w-full flex-shrink-0">
<div className="grid gap-6 md:grid-cols-3">

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
<div className="flex items-center gap-3">
<img alt="Kenji Sato avatar" className="h-9 w-9 ring-2 ring-black/60 object-cover rounded-full" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="mt-3 flex items-center gap-1 text-white">
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">“HUD directions are crystal clear. It’s the safest way I’ve navigated city rides.”</p>
<div className="mt-5 pt-3 border-t border-white/10">
<p className="text-sm font-semibold tracking-tight font-geist">Kenji Sato • Courier</p>
<p className="text-xs text-white/60 font-geist mt-1">Tokyo</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
<div className="flex items-center gap-3">
<img alt="Nora Beck avatar" className="h-9 w-9 ring-2 ring-black/60 object-cover rounded-full" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="mt-3 flex items-center gap-1 text-white">
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">“Calls, music, and capture with a pinch. I leave home without earbuds now.”</p>
<div className="mt-5 pt-3 border-t border-white/10">
<p className="text-sm font-semibold tracking-tight font-geist">Nora Beck • Designer</p>
<p className="text-xs text-white/60 font-geist mt-1">Berlin</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
<div className="flex items-center gap-3">
<img alt="Omar Yusuf avatar" className="h-9 w-9 ring-2 ring-black/60 object-cover rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="mt-3 flex items-center gap-1 text-white">
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 6.2 21l1.1-6.5L2 9.7l6.6-1L12 2l3.4 6.7 6.6 1-5.3 4.8L17.8 21z"></path></svg>
</div>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">“I prototype with instructions floating above the bench. It’s sci‑fi, but real.”</p>
<div className="mt-5 pt-3 border-t border-white/10">
<p className="text-sm font-semibold tracking-tight font-geist">Omar Yusuf • Hardware Lead</p>
<p className="text-xs text-white/60 font-geist mt-1">Boulder</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between mt-6">
<button className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-white/20 text-white/70 hover:text-white transition-colors" id="prevBtn">
<svg className="lucide lucide-chevron-left w-[20px] h-[20px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="flex items-center gap-2">
<button className="carousel-indicator w-2 h-2 rounded-full transition-all duration-300" data-slide="0"></button>
<button className="carousel-indicator w-2 h-2 rounded-full transition-all duration-300" data-slide="1"></button>
</div>
<button className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-white/20 text-white/70 hover:text-white transition-colors" id="nextBtn">
<svg className="lucide lucide-chevron-right h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

</div>
<section className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative">
<div className="max-w-3xl">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[11px] font-geist">Tech specs</span>
<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl tracking-tighter font-geist">Built for the real world</h2>
<p className="mt-3 text-white/70 font-geist max-w-2xl">Thoughtful hardware, tuned software, and privacy at the core. Everything you need to see more—and stay present.</p>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
<h3 className="text-sm font-medium text-white/80 font-geist">Display</h3>
<p className="mt-2 text-sm text-white/60 font-geist">Holographic micro‑projector with adaptive brightness, ambient aware.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
<h3 className="text-sm font-medium text-white/80 font-geist">Cameras</h3>
<p className="mt-2 text-sm text-white/60 font-geist">Dual ultra‑wide 12MP, f/2.0, 4K60 HDR, gyro‑EIS.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
<h3 className="text-sm font-medium text-white/80 font-geist">Audio</h3>
<p className="mt-2 text-sm text-white/60 font-geist">Open‑ear speakers, dual mics with beamforming and wind suppression.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
<h3 className="text-sm font-medium text-white/80 font-geist">Battery</h3>
<p className="mt-2 text-sm text-white/60 font-geist">All‑day typical use, USB‑C fast charge to 50% in 20 minutes.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
<h3 className="text-sm font-medium text-white/80 font-geist">Connectivity</h3>
<p className="text-sm text-white/60 font-geist mt-2">Bluetooth 6.0, Wi‑Fi 7, companion app for iOS &amp; Android.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
<h3 className="text-sm font-medium text-white/80 font-geist">Materials</h3>
<p className="mt-2 text-sm text-white/60 font-geist">Lightweight polymer frame, titanium hinge, anti‑scratch coatings.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
<h3 className="text-sm font-medium text-white/80 font-geist">Privacy</h3>
<p className="mt-2 text-sm text-white/60 font-geist">Hardware kill switch, LED capture light, on‑device wake word.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
<h3 className="text-sm font-medium text-white/80 font-geist">Water &amp; Dust</h3>
<p className="text-sm text-white/60 font-geist mt-2">IP68 splash resistant for commutes and workouts.</p>
</div>
</div>
</section></section>

<section className="sm:p-8 mt-10 mr-8 ml-8 pt-6 pr-6 pb-6 pl-6">
<div className="relative">
<div className="relative max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 backdrop-blur font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="text-xs font-normal">Pricing</span>
</div>
<h2 className="text-[40px] sm:text-6xl lg:text-6xl leading-[0.95] font-normal text-white tracking-tighter font-geist mt-4">Choose your edith</h2>
<p className="mt-3 text-sm sm:text-base text-white/70 font-geist max-w-2xl mx-auto">
              Two editions. Same magic. Flexible care and upgrades available.
            </p>
</div>
<div className="relative max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(80% 120% at 10% 0%, rgba(16,185,129,0.12) 0%, rgba(0,0,0,0) 55%)'}}></div>
<div className="relative flex items-center justify-between">
<div className="inline-flex items-center gap-2"></div>
<span className="relative z-10 inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-white/80 bg-white/5 border border-white/10 font-geist">Most Popular</span>
</div>
<div className="relative mt-5 text-center">
<h3 className="text-xl font-medium text-white tracking-tight font-geist">Air</h3>
<div className="mt-3 flex items-end justify-center gap-3">
<p className="sm:text-5xl text-4xl font-medium text-white tracking-tight font-geist">₹35000</p>
<span className="text-white/70 text-sm font-geist mb-1">one‑time</span>
<span className="line-through text-2xl text-white/30 font-geist">₹40000</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">Everything to start: holographic HUD, voice AI, 4K capture, spatial audio.</p>
<div className="mt-4 flex flex-wrap gap-2 justify-center">
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">Dual 4K cameras</span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">HUD essentials</span>
</div>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400 h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Holographic display HUD</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400 h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Voice AI assistant (quick tasks on‑device)</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400 h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Spatial audio with open‑ear speakers</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400 h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Live translation captions (beta)</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400 h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">32 GB onboard storage</span>
</li>
<li className="flex gap-3 items-center">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400 h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Privacy switch + capture indicator LED</span>
</li>
</ul>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 sm:w-auto hover:bg-emerald-400 transition-colors text-sm font-medium text-black font-geist bg-emerald-500 w-full rounded-xl pt-3 pr-5 pb-3 pl-5" data-route="order" href="https://edith-order.aura.build">Order Air<svg className="lucide lucide-arrow-right h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
<a className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white/90 font-geist text-sm font-medium px-5 py-3 transition-colors" data-route="product" href="#/product">
                  Learn more
                </a>
</div>
<p className="mt-4 text-xs text-white/50 font-geist">Ships December. 30‑day returns. 1‑year limited warranty.</p>
</article>

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] backdrop-blur-xl p-5 sm:p-6">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(80% 120% at 90% 0%, rgba(16,185,129,0.10) 0%, rgba(0,0,0,0) 55%)'}}></div>
<div className="relative flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-xs text-emerald-300 font-geist">Pro power</span>
</div>
<span className="relative z-10 inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-white/80 bg-white/5 border border-white/10 font-geist">New</span>
</div>
<div className="relative mt-5 text-center">
<h3 className="text-xl font-medium text-white tracking-tight font-geist">Pro</h3>
<div className="mt-3 flex items-end justify-center gap-3">
<p className="sm:text-5xl text-4xl font-medium text-white tracking-tight font-geist">₹50000</p>
<span className="text-white/70 text-sm font-geist mb-1">one‑time</span>
</div>
<p className="mt-3 text-sm text-white/70 font-geist">Bigger sensors, brighter HUD, longer battery—built for creators and power users.</p>
<div className="mt-4 flex flex-wrap gap-2 justify-center">
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">HDR UltraWide+</span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">Pro color modes</span>
</div>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400 h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Upgraded dual sensors + gyro</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400 h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Pro HDR + flat profile</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400 h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Brighter HUD + wider FOV</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400 h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">64 GB onboard storage</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400 h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Extended battery pack (clip‑on)</span>
</li>
<li className="flex items-center gap-3">
<span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-check text-emerald-400 h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/90 font-geist">Creator tools: RAW photo + manual modes</span>
</li>
</ul>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 sm:w-auto hover:bg-emerald-400 transition-colors text-sm font-medium text-black font-geist bg-emerald-500 w-full rounded-xl pt-3 pr-5 pb-3 pl-5" data-route="order" href="https://edith-order.aura.build">Order Pro<svg className="lucide lucide-arrow-right h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
<a className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white/90 font-geist text-sm font-medium px-5 py-3 transition-colors" data-route="product" href="#/product">
                  Learn more
                </a>
</div>
<p className="mt-4 text-xs text-white/50 font-geist">Priority shipping for creators. 1‑year limited warranty. Care+ optional.</p>
</article>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 pb-24">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03]">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(60% 80% at 50% -10%, rgba(16,185,129,0.15) 0%, rgba(0,0,0,0) 60%)'}}></div>
</div>
</section>
</section>

<section className="route-page hidden" data-page="about">
<section className="relative max-w-7xl mr-auto ml-auto sm:px-6 lg:px-8 px-4 pt-16 pb-24">
<div className="grid md:grid-cols-2 gap-10 items-start">
<div>
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 backdrop-blur font-geist text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Our story
            </span>
<h1 className="mt-4 text-3xl sm:text-5xl tracking-tighter font-geist">We’re building calm, ambient computing</h1>
<p className="mt-4 text-white/70 font-geist">edith began as a research project to make AI feel human—helpful when needed, silent when not. We believe in products that respect attention, protect privacy, and fit your life.</p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<p className="text-3xl font-geist tracking-tight">2019</p>
<p className="text-xs text-white/60 font-geist mt-1">Founded</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<p className="text-3xl font-geist tracking-tight">7</p>
<p className="text-xs text-white/60 font-geist mt-1">Core patents</p>
</div>
</div>
</div>
<div className="relative">
<img alt="Studio workspace" className="w-full aspect-[4/3] object-cover rounded-2xl border border-white/10" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>
<div className="mt-12 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<h3 className="font-geist font-medium tracking-tight text-xl">Privacy by design</h3>
<p className="text-sm text-white/70 font-geist mt-2">Hardware privacy switch, visible capture indicator, and on‑device voice tasks—controlled by you.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<h3 className="font-geist font-medium tracking-tight text-xl">Open ecosystem</h3>
<p className="text-sm text-white/70 font-geist mt-2">Partner SDKs and a growing catalog of glanceable apps for travel, fitness, and creation.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<h3 className="font-geist font-medium tracking-tight text-xl">Human‑centered</h3>
<p className="text-sm text-white/70 font-geist mt-2">Interfaces that complement the world—not replace it. Head‑up, hands‑free.</p>
</div>
</div>
</section>
</section>

<section className="route-page hidden" data-page="tech">
<section className="relative max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 pt-16 pb-24">
<header className="text-center max-w-3xl mx-auto">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 backdrop-blur font-geist text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            The stack
          </span>
<h1 className="mt-4 text-3xl sm:text-5xl tracking-tighter font-geist">Miniaturized optics. Edge AI. All‑day power.</h1>
<p className="mt-4 text-white/70 font-geist">A custom waveguide HUD, low‑power neural cores, and spatial audio modules work in sync with your phone or standalone.</p>
</header>
<div className="mt-10 grid md:grid-cols-2 gap-6">
<article className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="font-geist text-xl tracking-tight">Waveguide HUD</h3>
<p className="text-sm text-white/70 font-geist mt-2">Nano‑etched combiner with adjustable brightness and color correction ensures clear overlays in any light.</p>
<img alt="Waveguide diagram" className="mt-4 rounded-lg border border-white/10 object-cover aspect-video" src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=1200&amp;q=80"/>
</article>
<article className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="font-geist text-xl tracking-tight">Dual UltraWide+</h3>
<p className="text-sm text-white/70 font-geist mt-2">Larger pixels, fast HDR, and 6‑axis gyro deliver cinematic stabilization and low‑light performance.</p>
<img alt="Camera module" className="mt-4 rounded-lg border border-white/10 object-cover aspect-video" src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&amp;q=80"/>
</article>
<article className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="font-geist text-xl tracking-tight">Edge Voice AI</h3>
<p className="text-sm text-white/70 font-geist mt-2">Wake‑word, dictation, and quick commands run locally. Cloud connectors enable deep research on demand.</p>
<img alt="AI chip" className="mt-4 rounded-lg border border-white/10 object-cover aspect-video" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</article>
<article className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="font-geist text-xl tracking-tight">Spatial audio</h3>
<p className="text-sm text-white/70 font-geist mt-2">Open‑ear drivers with smart beamforming keep audio private while preserving situational awareness.</p>
<img alt="Audio visualization" className="mt-4 rounded-lg border border-white/10 object-cover aspect-video" src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?w=1200&amp;q=80"/>
</article>
</div>
</section>
</section>

<section className="route-page hidden" data-page="product">
<section className="relative max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 pt-16 pb-24">
<header className="max-w-3xl mx-auto text-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 backdrop-blur font-geist text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Product tour
          </span>
<h1 className="mt-4 text-3xl sm:text-5xl tracking-tighter font-geist">A quick look at edith OS</h1>
<p className="mt-4 text-white/70 font-geist">Glanceable apps, subtle notifications, and gesture shortcuts that fade away when you don’t need them.</p>
</header>
<div className="mt-10 grid lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="font-geist text-lg tracking-tight">Glance cards</h3>
<p className="text-sm text-white/70 font-geist mt-2">Time, weather, and upcoming events float at the edge of your view. A quick swipe cycles cards.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="font-geist text-lg tracking-tight">Capture modes</h3>
<p className="text-sm text-white/70 font-geist mt-2">Tap to photo or hold to video. Pro adds LOG/flat profile for grading.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="font-geist text-lg tracking-tight">Navigation</h3>
<p className="text-sm text-white/70 font-geist mt-2">Turn‑by‑turn arrows stay aligned with the road using sensor fusion.</p>
</div>
</div>
<div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<img alt="Product demo" className="w-full object-cover aspect-video" src="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&amp;q=80"/>
</div>
</section>
</section>

<section className="route-page hidden" data-page="ecosystem">
<section className="relative max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 pt-16 pb-24">
<header className="text-center max-w-3xl mx-auto">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 backdrop-blur font-geist text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Ecosystem
          </span>
<h1 className="mt-4 text-3xl sm:text-5xl tracking-tighter font-geist">Apps, services, and partners</h1>
<p className="mt-4 text-white/70 font-geist">A modular platform that plays nicely with your favorites.</p>
</header>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="font-geist tracking-tight text-xl">Health &amp; Fitness</h3>
<p className="text-sm text-white/70 font-geist mt-2">Ride metrics, pace coach, and form tips—right in your lane.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="font-geist tracking-tight text-xl">Travel &amp; Translate</h3>
<p className="text-sm text-white/70 font-geist mt-2">Live captions, AR directions, and transit alerts in over 45 languages.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="font-geist tracking-tight text-xl">Creation</h3>
<p className="text-sm text-white/70 font-geist mt-2">Shoot, mark takes, and sync to your timeline with one pinch.</p>
</div>
</div>
</section>
</section>

<section className="route-page hidden" data-page="order">
<section className="relative max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 pt-16 pb-24">
<header className="max-w-3xl mx-auto text-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 backdrop-blur font-geist text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Preorder
          </span>
<h1 className="mt-4 text-3xl sm:text-5xl tracking-tighter font-geist">Customize your edith</h1>
<p className="mt-4 text-white/70 font-geist">Pick a model, choose lenses, add Care+, and see your price update live.</p>
</header>
<form className="mt-10 grid lg:grid-cols-3 gap-6" id="orderForm" novalidate="">

<div className="lg:col-span-2 space-y-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<h3 className="font-geist tracking-tight text-lg">Model</h3>
<div className="mt-3 grid sm:grid-cols-2 gap-3">
<label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 cursor-pointer hover:bg-white/10 transition">
<input checked="" className="peer sr-only" name="model" type="radio" value="explorer"/>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all">
<span className="h-2.5 w-2.5 rounded-full bg-black">
</span>
<div>
<p className="font-geist text-sm">Explorer</p>
<p className="text-xs text-white/60 font-geist">$349</p>
</div>
</span></label>
<label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 cursor-pointer hover:bg-white/10 transition">
<input className="peer sr-only" name="model" type="radio" value="pro"/>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all">
<span className="h-2.5 w-2.5 rounded-full bg-black"></span>
</span>
<div>
<p className="font-geist text-sm">Creator Pro</p>
<p className="text-xs text-white/60 font-geist">$549</p>
</div>
</label>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<h3 className="font-geist tracking-tight text-lg">Color</h3>
<div className="mt-3 grid grid-cols-3 gap-3">
<label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 cursor-pointer hover:bg-white/10 transition">
<input checked="" className="sr-only" name="color" type="radio" value="matte-black"/>
<span className="h-5 w-5 rounded-full bg-black ring-1 ring-white/20"></span>
<span className="text-sm font-geist">Matte Black</span>
</label>
<label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 cursor-pointer hover:bg-white/10 transition">
<input className="sr-only" name="color" type="radio" value="smoke-gray"/>
<span className="h-5 w-5 rounded-full bg-neutral-700 ring-1 ring-white/20"></span>
<span className="text-sm font-geist">Smoke Gray</span>
</label>
<label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 cursor-pointer hover:bg-white/10 transition">
<input className="sr-only" name="color" type="radio" value="forest"/>
<span className="h-5 w-5 rounded-full bg-emerald-700 ring-1 ring-white/20"></span>
<span className="text-sm font-geist">Forest</span>
</label>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<h3 className="font-geist tracking-tight text-lg">Lenses</h3>
<div className="mt-3 grid sm:grid-cols-3 gap-3">
<label className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-4 cursor-pointer hover:bg-white/10 transition">
<input checked="" className="sr-only" name="lens" type="radio" value="clear"/>
<span className="text-sm font-geist">Clear</span>
<span className="text-xs text-white/60 font-geist">$0</span>
</label>
<label className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-4 cursor-pointer hover:bg-white/10 transition">
<input className="sr-only" name="lens" type="radio" value="tinted"/>
<span className="text-sm font-geist">Tinted</span>
<span className="text-xs text-white/60 font-geist">+ $20</span>
</label>
<label className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-4 cursor-pointer hover:bg-white/10 transition">
<input className="sr-only" name="lens" type="radio" value="prescription"/>
<span className="text-sm font-geist">Prescription</span>
<span className="text-xs text-white/60 font-geist">+ $80</span>
</label>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<h3 className="font-geist tracking-tight text-lg">Add‑ons</h3>
<div className="mt-3 grid sm:grid-cols-2 gap-3">
<label className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 cursor-pointer hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<input className="h-4 w-4 rounded border-white/20 bg-black" name="care" type="checkbox" value="care"/>
<div>
<p className="text-sm font-geist">Care+ (2‑year)</p>
<p className="text-xs text-white/60 font-geist">Accidental damage &amp; fast swaps</p>
</div>
</div>
<span className="text-xs text-white/70 font-geist">+ $69</span>
</label>
<label className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 cursor-pointer hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<input className="h-4 w-4 rounded border-white/20 bg-black" name="battery" type="checkbox" value="battery"/>
<div>
<p className="text-sm font-geist">Extra battery pack</p>
<p className="text-xs text-white/60 font-geist">Clip‑on capacity boost</p>
</div>
</div>
<span className="text-xs text-white/70 font-geist">+ $39</span>
</label>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<h3 className="font-geist tracking-tight text-lg">Shipping</h3>
<div className="mt-3 grid sm:grid-cols-3 gap-3">
<label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 cursor-pointer hover:bg-white/10 transition">
<input checked="" className="sr-only" name="ship" type="radio" value="standard"/>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20"></span>
<span className="text-sm font-geist">Standard</span>
<span className="ml-auto text-xs text-white/60 font-geist">Free</span>
</label>
<label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 cursor-pointer hover:bg-white/10 transition">
<input className="sr-only" name="ship" type="radio" value="express"/>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20"></span>
<span className="text-sm font-geist">Express</span>
<span className="ml-auto text-xs text-white/60 font-geist">+ $15</span>
</label>
<label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 cursor-pointer hover:bg-white/10 transition">
<input className="sr-only" name="ship" type="radio" value="priority"/>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20"></span>
<span className="text-sm font-geist">Priority</span>
<span className="ml-auto text-xs text-white/60 font-geist">+ $29</span>
</label>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<h3 className="font-geist tracking-tight text-lg">Contact</h3>
<div className="mt-3 grid sm:grid-cols-2 gap-3">
<input className="w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-sm font-geist placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500" name="firstName" placeholder="First name" required=""/>
<input className="w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-sm font-geist placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500" name="lastName" placeholder="Last name" required=""/>
<input className="w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-sm font-geist placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:col-span-2" name="email" placeholder="Email address" required="" type="email"/>
<div className="flex items-center gap-3 sm:col-span-2">
<label className="text-sm text-white/70 font-geist" htmlFor="qty">Quantity</label>
<div className="ml-auto inline-flex items-center rounded-lg border border-white/10 overflow-hidden">
<button className="w-9 h-9 grid place-items-center bg-white/5 hover:bg-white/10" data-qty="dec" type="button">−</button>
<input className="w-14 h-9 bg-black/60 text-center font-geist text-sm border-x border-white/10 focus:outline-none" id="qty" max="5" min="1" name="qty" type="number" value="1"/>
<button className="w-9 h-9 grid place-items-center bg-white/5 hover:bg-white/10" data-qty="inc" type="button">+</button>
</div>
</div>
</div>
</div>
</div>

<aside className="lg:sticky lg:top-24 h-max space-y-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<h3 className="font-geist tracking-tight text-lg">Order summary</h3>
<ul className="mt-3 space-y-2 text-sm font-geist text-white/80" id="summaryList">
<li className="flex justify-between"><span>Model</span><span id="summaryModel">Explorer</span></li>
<li className="flex justify-between"><span>Color</span><span id="summaryColor">Matte Black</span></li>
<li className="flex justify-between"><span>Lenses</span><span id="summaryLens">Clear</span></li>
<li className="flex justify-between"><span>Add‑ons</span><span id="summaryAddons">None</span></li>
<li className="flex justify-between"><span>Shipping</span><span id="summaryShip">Standard</span></li>
<li className="flex justify-between"><span>Qty</span><span id="summaryQty">1</span></li>
</ul>
<div className="mt-4 border-t border-white/10 pt-4">
<div className="flex items-center justify-between">
<p className="text-white/70 text-sm font-geist">Subtotal</p>
<p className="font-geist text-lg" id="subtotal">$349</p>
</div>
<p className="text-xs text-white/50 font-geist mt-2">Tax calculated at checkout</p>
</div>
<button className="mt-5 inline-flex w-full items-center justify-center gap-2 text-sm font-medium text-black font-geist bg-emerald-500 rounded-xl px-5 py-3 hover:bg-emerald-400 transition-colors" type="submit">
                Place preorder
                <svg className="lucide lucide-credit-card h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></svg>
</button>
</div>
<p className="text-xs text-white/50 font-geist">Ships December. 30‑day returns. You’ll get a confirmation email.</p>
</aside>
</form>

<div aria-live="polite" className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 hidden" id="toast" role="status">
<div className="inline-flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm font-geist text-emerald-200 backdrop-blur">
<svg className="lucide lucide-badge-check h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 4.21 6 2 4.5 4.21 2 4.5l1.79 2.29L2 9.5l2.5-.21L6 11.5l1.5-2.21 2.5.21-1.79-2.71L10 4.5z"></path><path d="m9 12 2 2 4-4"></path><path d="M12 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10z"></path></svg>
<span id="toastMsg">Order placed! Check your email for details.</span>
</div>
</div>
</section>
</section>
</main>

<footer className="border-t border-white/10">
<div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 py-12">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur hover:bg-white/10 hover:border-white/20 transition-colors" href="#/home">
<span className="inline-flex items-center justify-center bg-emerald-500 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ef17ddde-ec65-4ad2-8fe1-c058d1987941_320w.jpg)] bg-cover rounded-full">
</span>
<span className="text-base font-medium tracking-tighter font-geist">Edith</span>
</a>
<nav className="flex flex-wrap gap-4 text-sm text-white/70 font-geist">
<a className="hover:text-white" href="#/about">About</a>
<a className="hover:text-white" href="#/tech">Tech</a>
<a className="hover:text-white" href="#/product">Product</a>
<a className="hover:text-white" href="#/ecosystem">Ecosystem</a>
<a className="hover:text-white" href="#/order">Order</a>
</nav>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-xs text-white/50 font-geist">© <span id="year">2025</span> edith labs. All rights reserved.</p>
<div className="flex items-center gap-3">
<a className="text-xs text-white/50 hover:text-white/80 font-geist" href="#">Privacy</a>
<span className="text-white/20">•</span>
<a className="text-xs text-white/50 hover:text-white/80 font-geist" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
