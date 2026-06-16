import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobileMenu a[href^="#"]').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    document.getElementById('year').textContent = new Date().getFullYear();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_20%_10%,rgba(209,168,80,0.18),transparent_55%),radial-gradient(900px_600px_at_90%_15%,rgba(137,18,44,0.25),transparent_55%),radial-gradient(1100px_700px_at_55%_100%,rgba(245,233,208,0.12),transparent_60%)]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#12090c]/40 via-[#0b0608] to-[#0b0608]"></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d1a850]/40 to-transparent"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0b0608]/60 border-b border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4">
<a className="group flex items-center gap-3" href="#home">
<div className="relative">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#f5e9d0] to-[#d1a850] p-[1px] shadow-[0_0_0_1px_rgba(209,168,80,0.25),0_12px_30px_rgba(0,0,0,0.55)]">
<div className="h-full w-full rounded-[0.7rem] bg-[#0b0608] flex items-center justify-center">
<span className="font-semibold tracking-tight text-sm text-[#f5e9d0]" style={{fontFamily: 'Fraunces, serif'}}>PS</span>
</div>
</div>
<div className="absolute -inset-2 -z-10 rounded-2xl bg-[#d1a850]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="leading-tight">
<div className="text-base tracking-tight text-[#f5e9d0]" style={{fontFamily: 'Fraunces, serif'}}>POPULAR SILK</div>
<div className="text-xs text-zinc-300/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Chickpet, Bengaluru</div>
</div>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm text-zinc-200/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<a className="hover:text-[#f5e9d0] transition-colors" href="#about">About</a>
<a className="hover:text-[#f5e9d0] transition-colors" href="#categories">Categories</a>
<a className="hover:text-[#f5e9d0] transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-[#f5e9d0] transition-colors" href="#order">Order</a>
<a className="hover:text-[#f5e9d0] transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#d1a850] to-[#f5e9d0] px-4 py-2 text-sm text-[#1a0f12] font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:opacity-95 transition-opacity" href="https://wa.me/919999999999?text=Hello%20POPULAR%20SILK%2C%20I%27d%20like%20to%20enquire%20about%20wholesale%20art%20silk%20sarees." id="whatsappTop" style={{fontFamily: 'Inter, system-ui, sans-serif'}} target="_blank">
<iconify-icon height="18" icon="solar:chat-round-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
            WhatsApp
          </a>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-zinc-100 hover:bg-white/10 transition-colors" id="menuBtn">
<iconify-icon height="20" icon="solar:hamburger-menu-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>

<div className="md:hidden hidden pb-4" id="mobileMenu">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="grid gap-2 text-sm text-zinc-200/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-[#f5e9d0] transition-colors" href="#about">About</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-[#f5e9d0] transition-colors" href="#categories">Categories</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-[#f5e9d0] transition-colors" href="#gallery">Gallery</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-[#f5e9d0] transition-colors" href="#order">Order</a>
<a className="rounded-xl px-3 py-2 hover:bg-white/5 hover:text-[#f5e9d0] transition-colors" href="#contact">Contact</a>
<a className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d1a850] to-[#f5e9d0] px-4 py-2 text-sm text-[#1a0f12] font-semibold" href="https://wa.me/919999999999?text=Hello%20POPULAR%20SILK%2C%20I%27d%20like%20to%20enquire%20about%20wholesale%20art%20silk%20sarees." style={{fontFamily: 'Inter, system-ui, sans-serif'}} target="_blank">
<iconify-icon height="18" icon="solar:chat-round-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
              Order on WhatsApp
            </a>
</div>
</div>
</div>
</div>
</header>

<section className="relative" id="home">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-[#d1a850]/30 bg-[#d1a850]/10 px-3 py-1 text-xs text-[#f5e9d0]/90" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<span className="h-1.5 w-1.5 rounded-full bg-[#d1a850]"></span>
            Art Silk Saree Manufacturer &amp; Wholesale Dealer
          </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#f5e9d0]" style={{fontFamily: 'Fraunces, serif'}}>
            POPULAR SILK
          </h1>
<p className="mt-4 text-lg sm:text-xl text-zinc-200/80 max-w-2xl" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<span className="text-[#f5e9d0] font-semibold">Premium Art Silk Sarees Manufacturer</span><br/>
            Wholesale | Fancy Collections | Chickpet, Bengaluru
          </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-5 py-3 text-sm text-zinc-100 hover:bg-white/10 transition-colors" href="#gallery" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<iconify-icon height="18" icon="solar:gallery-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
              View Gallery
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#d1a850] to-[#f5e9d0] px-5 py-3 text-sm text-[#1a0f12] font-semibold shadow-[0_14px_40px_rgba(0,0,0,0.55)] hover:opacity-95 transition-opacity" href="#order" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<iconify-icon height="18" icon="solar:cart-2-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
              Wholesale Enquiry
            </a>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-zinc-300/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Focus</div>
<div className="mt-1 text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Art Silk</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-zinc-300/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Orders</div>
<div className="mt-1 text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Wholesale</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-zinc-300/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Collections</div>
<div className="mt-1 text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Fancy</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-zinc-300/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Location</div>
<div className="mt-1 text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Chickpet</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="relative">
<div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#d1a850]/20 via-transparent to-[#89122c]/25 blur-2xl"></div>
<div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.65)]">
<div className="grid grid-cols-2 gap-3">
<div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#12090c]">
<img alt="Art silk saree detail" className="h-full w-full object-cover opacity-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0608]/70 via-transparent to-transparent"></div>
<div className="absolute left-4 bottom-4">
<div className="text-xs text-zinc-200/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Signature weave</div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Gold Zari Look</div>
</div>
</div>
<div className="grid gap-3">
<div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#12090c]">
<img alt="Fancy saree drape" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0608]/70 via-transparent to-transparent"></div>
<div className="absolute left-4 bottom-4">
<div className="text-xs text-zinc-200/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Fancy range</div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Festive Drapes</div>
</div>
</div>
<div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#12090c]">
<img alt="Saree fabric texture" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0608]/70 via-transparent to-transparent"></div>
<div className="absolute left-4 bottom-4">
<div className="text-xs text-zinc-200/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Wholesale</div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Bulk Ready Stock</div>
</div>
</div>
</div>
</div>
<div className="mt-3 rounded-[1.5rem] border border-[#d1a850]/25 bg-gradient-to-r from-[#d1a850]/10 to-[#f5e9d0]/5 p-4">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Luxury finish. Wholesale pricing.</div>
<div className="text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>For retailers &amp; resellers across India.</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b0608]/60 border border-white/10 px-4 py-2 text-xs text-zinc-100 hover:bg-[#0b0608]/80 transition-colors" href="#order" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<iconify-icon height="16" icon="solar:arrow-right-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
                    Get catalogue
                  </a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-5">
<h2 className="text-2xl sm:text-3xl tracking-tight text-[#f5e9d0]" style={{fontFamily: 'Fraunces, serif'}}>
            About POPULAR SILK
          </h2>
<p className="mt-4 text-sm sm:text-base text-zinc-200/80 leading-relaxed" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            POPULAR SILK is a trusted manufacturer and wholesaler of Art Silk Sarees and Fancy Sarees located in Chickpet, Bengaluru.
            We provide high-quality silk collections for retailers and resellers across India.
          </p>
<div className="mt-6 grid gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-xl border border-[#d1a850]/30 bg-[#d1a850]/10 p-2 text-[#f5e9d0]">
<iconify-icon height="18" icon="solar:shield-check-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Reliable quality for repeat retail sales</div>
<div className="mt-1 text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Consistent finishing, vibrant tones, and premium drape.</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-xl border border-[#d1a850]/30 bg-[#d1a850]/10 p-2 text-[#f5e9d0]">
<iconify-icon height="18" icon="solar:box-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Wholesale-ready stock &amp; bulk handling</div>
<div className="mt-1 text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Designed for dealers, resellers, and large-volume buyers.</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-xl border border-[#d1a850]/30 bg-[#d1a850]/10 p-2 text-[#f5e9d0]">
<iconify-icon height="18" icon="solar:map-point-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Chickpet hub access</div>
<div className="mt-1 text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Convenient location near Bengaluru’s textile market.</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden">
<div className="grid sm:grid-cols-2">
<div className="p-6 sm:p-8">
<div className="text-xs text-zinc-300/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>What we do</div>
<div className="mt-2 text-xl sm:text-2xl tracking-tight text-[#f5e9d0]" style={{fontFamily: 'Fraunces, serif'}}>
                  Elegant sarees with a luxe silk feel
                </div>
<p className="mt-3 text-sm text-zinc-200/75 leading-relaxed" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                  From everyday fancy to festive highlights, our collections are curated for strong retail movement—supported by wholesale service and quick coordination.
                </p>
<div className="mt-6 flex flex-wrap gap-2">
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-100/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Art Silk Sarees</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-100/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Fancy Sarees</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-100/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Bulk Orders</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-100/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Latest Drops</span>
</div>
</div>
<div className="relative min-h-64">
<img alt="Luxury saree presentation" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0608]/85 via-[#0b0608]/15 to-transparent"></div>
<div className="absolute left-6 bottom-6 right-6">
<div className="rounded-2xl border border-white/10 bg-[#0b0608]/45 backdrop-blur px-4 py-3">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Wholesale support</div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Catalogue + pricing on WhatsApp</div>
</div>
<a className="inline-flex items-center justify-center rounded-xl border border-[#d1a850]/30 bg-[#d1a850]/10 px-3 py-2 text-xs text-[#f5e9d0] hover:bg-[#d1a850]/15 transition-colors" href="#order" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<iconify-icon height="16" icon="solar:arrow-right-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="categories">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight text-[#f5e9d0]" style={{fontFamily: 'Fraunces, serif'}}>Product Categories</h2>
<p className="mt-2 text-sm text-zinc-200/75" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            Focused lines for retailers—built around demand, margins, and seasonality.
          </p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-100 hover:bg-white/10 transition-colors" href="#order" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<iconify-icon height="18" icon="solar:document-text-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
          Request Catalogue
        </a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
<div className="flex items-start justify-between gap-4">
<div className="rounded-2xl border border-[#d1a850]/25 bg-[#d1a850]/10 p-3 text-[#f5e9d0]">
<iconify-icon height="20" icon="solar:star-shine-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-xs text-zinc-200/60" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Core</span>
</div>
<div className="mt-4 text-lg font-semibold text-[#f5e9d0] tracking-tight" style={{fontFamily: 'Fraunces, serif'}}>Art Silk Sarees</div>
<p className="mt-2 text-sm text-zinc-200/75 leading-relaxed" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            Smooth drape and rich tones with a premium silk-like finish.
          </p>
<div className="mt-4 inline-flex items-center gap-2 text-xs text-[#f5e9d0]/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            Explore
            <iconify-icon height="16" icon="solar:arrow-right-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<div className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
<div className="flex items-start justify-between gap-4">
<div className="rounded-2xl border border-[#d1a850]/25 bg-[#d1a850]/10 p-3 text-[#f5e9d0]">
<iconify-icon height="20" icon="solar:pallete-2-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-xs text-zinc-200/60" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Popular</span>
</div>
<div className="mt-4 text-lg font-semibold text-[#f5e9d0] tracking-tight" style={{fontFamily: 'Fraunces, serif'}}>Fancy Sarees</div>
<p className="mt-2 text-sm text-zinc-200/75 leading-relaxed" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            Festive-ready designs with standout borders and elegant sheen.
          </p>
<div className="mt-4 inline-flex items-center gap-2 text-xs text-[#f5e9d0]/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            Explore
            <iconify-icon height="16" icon="solar:arrow-right-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<div className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
<div className="flex items-start justify-between gap-4">
<div className="rounded-2xl border border-[#d1a850]/25 bg-[#d1a850]/10 p-3 text-[#f5e9d0]">
<iconify-icon height="20" icon="solar:box-minimalistic-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-xs text-zinc-200/60" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Wholesale</span>
</div>
<div className="mt-4 text-lg font-semibold text-[#f5e9d0] tracking-tight" style={{fontFamily: 'Fraunces, serif'}}>Wholesale Bulk Orders</div>
<p className="mt-2 text-sm text-zinc-200/75 leading-relaxed" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            Dealer-friendly quantities with streamlined coordination on WhatsApp.
          </p>
<div className="mt-4 inline-flex items-center gap-2 text-xs text-[#f5e9d0]/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            Explore
            <iconify-icon height="16" icon="solar:arrow-right-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<div className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
<div className="flex items-start justify-between gap-4">
<div className="rounded-2xl border border-[#d1a850]/25 bg-[#d1a850]/10 p-3 text-[#f5e9d0]">
<iconify-icon height="20" icon="solar:sun-fog-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-xs text-zinc-200/60" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>New</span>
</div>
<div className="mt-4 text-lg font-semibold text-[#f5e9d0] tracking-tight" style={{fontFamily: 'Fraunces, serif'}}>Latest Collections</div>
<p className="mt-2 text-sm text-zinc-200/75 leading-relaxed" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            Fresh color stories and contemporary patterns for current demand.
          </p>
<div className="mt-4 inline-flex items-center gap-2 text-xs text-[#f5e9d0]/80" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            Explore
            <iconify-icon height="16" icon="solar:arrow-right-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="gallery">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight text-[#f5e9d0]" style={{fontFamily: 'Fraunces, serif'}}>Gallery</h2>
<p className="mt-2 text-sm text-zinc-200/75" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            A curated look at textures, borders, and festive-ready drapes.
          </p>
</div>
<div className="hidden lg:flex items-center gap-2 text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<iconify-icon height="16" icon="solar:info-circle-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
          Images are representational
        </div>
</div>
<div className="mt-8 grid grid-cols-2 lg:grid-cols-12 gap-3">
<a className="lg:col-span-6 relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 group" href="#order">
<img alt="Saree photo 1" className="h-72 sm:h-80 w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0608]/85 via-transparent to-transparent"></div>
<div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-4">
<div>
<div className="text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Featured</div>
<div className="text-base sm:text-lg font-semibold text-[#f5e9d0] tracking-tight" style={{fontFamily: 'Fraunces, serif'}}>Gold Highlight Borders</div>
</div>
<div className="rounded-xl border border-white/10 bg-[#0b0608]/50 backdrop-blur p-2 text-[#f5e9d0]">
<iconify-icon height="18" icon="solar:arrow-right-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
</a>
<div className="lg:col-span-6 grid grid-cols-2 gap-3">
<a className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 group" href="#order">
<img alt="Saree photo 2" className="h-44 sm:h-52 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0608]/80 via-transparent to-transparent"></div>
<div className="absolute left-4 bottom-4">
<div className="text-xs text-zinc-200/75" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Fancy</div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Festive Tones</div>
</div>
</a>
<a className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 group" href="#order">
<img alt="Saree photo 3" className="h-44 sm:h-52 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0608]/80 via-transparent to-transparent"></div>
<div className="absolute left-4 bottom-4">
<div className="text-xs text-zinc-200/75" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Art Silk</div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Soft Drape</div>
</div>
</a>
<a className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 group col-span-2" href="#order">
<img alt="Saree photo 4" className="h-44 sm:h-52 w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0608]/85 via-transparent to-transparent"></div>
<div className="absolute left-4 bottom-4 right-4 flex items-end justify-between gap-4">
<div>
<div className="text-xs text-zinc-200/75" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Wholesale</div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Dealer-Friendly Assortments</div>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                Tap to enquire
                <iconify-icon height="16" icon="solar:arrow-right-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</a>
</div>
<a className="lg:col-span-4 relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 group" href="#order">
<img alt="Saree photo 5" className="h-56 sm:h-64 w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0608]/85 via-transparent to-transparent"></div>
<div className="absolute left-5 bottom-5">
<div className="text-xs text-zinc-200/75" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Latest</div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>New Color Stories</div>
</div>
</a>
<a className="lg:col-span-4 relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 group" href="#order">
<img alt="Saree photo 6" className="h-56 sm:h-64 w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1532456745301-b2c645d8b80d?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0608]/85 via-transparent to-transparent"></div>
<div className="absolute left-5 bottom-5">
<div className="text-xs text-zinc-200/75" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Texture</div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Silk-Feel Finish</div>
</div>
</a>
<a className="lg:col-span-4 relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 group" href="#order">
<img alt="Saree photo 7" className="h-56 sm:h-64 w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0608]/85 via-transparent to-transparent"></div>
<div className="absolute left-5 bottom-5">
<div className="text-xs text-zinc-200/75" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Borders</div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Elegant Contrast</div>
</div>
</a>
</div>
</div>
</section>

<section className="relative" id="order">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="rounded-[2rem] border border-[#d1a850]/25 bg-gradient-to-br from-[#d1a850]/14 via-white/5 to-[#89122c]/18 p-6 sm:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
<div className="grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7">
<h2 className="text-2xl sm:text-3xl tracking-tight text-[#f5e9d0]" style={{fontFamily: 'Fraunces, serif'}}>
              Order with confidence, at wholesale scale
            </h2>
<p className="mt-3 text-sm sm:text-base text-zinc-100/80 leading-relaxed" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
              Share your requirements and we’ll send the latest catalogue, pricing, and availability. Ideal for retailers, resellers, and bulk buyers across India.
            </p>
<div className="mt-6 grid sm:grid-cols-3 gap-3">
<div className="rounded-2xl border border-white/10 bg-[#0b0608]/40 backdrop-blur p-4">
<div className="text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>1</div>
<div className="mt-1 text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Message on WhatsApp</div>
<div className="mt-1 text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Tell us category &amp; quantity</div>
</div>
<div className="rounded-2xl border border-white/10 bg-[#0b0608]/40 backdrop-blur p-4">
<div className="text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>2</div>
<div className="mt-1 text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Get catalogue</div>
<div className="mt-1 text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Designs, colors, pricing</div>
</div>
<div className="rounded-2xl border border-white/10 bg-[#0b0608]/40 backdrop-blur p-4">
<div className="text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>3</div>
<div className="mt-1 text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Confirm bulk order</div>
<div className="mt-1 text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Quick coordination</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-[1.75rem] border border-white/10 bg-[#0b0608]/35 backdrop-blur p-5 sm:p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Wholesale Enquiry</div>
<div className="mt-1 text-lg font-semibold text-[#f5e9d0] tracking-tight" style={{fontFamily: 'Fraunces, serif'}}>Order on WhatsApp</div>
<p className="mt-2 text-sm text-zinc-100/75 leading-relaxed" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                    Tap to open chat with a pre-filled message.
                  </p>
</div>
<div className="rounded-2xl border border-[#d1a850]/25 bg-[#d1a850]/10 p-3 text-[#f5e9d0]">
<iconify-icon height="22" icon="solar:chat-round-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
</div>
<div className="mt-5 grid gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#d1a850] to-[#f5e9d0] px-5 py-3 text-sm text-[#1a0f12] font-semibold shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:opacity-95 transition-opacity" href="https://wa.me/919999999999?text=Hello%20POPULAR%20SILK%2C%20I%20want%20to%20place%20a%20wholesale%20order.%20Please%20share%20the%20latest%20catalogue%20%2B%20prices.%0A%0ACategory%3A%20Art%20Silk%20%2F%20Fancy%0AQuantity%3A%20%0ADelivery%20City%3A%20" id="whatsappOrder" style={{fontFamily: 'Inter, system-ui, sans-serif'}} target="_blank">
<iconify-icon height="18" icon="solar:chat-round-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                  Order on WhatsApp
                </a>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="rounded-xl border border-white/10 bg-[#0b0608]/40 p-2 text-zinc-200">
<iconify-icon height="18" icon="solar:map-point-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div className="text-xs text-zinc-200/75" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                      Visit us at Chickpet, Bengaluru for in-person selection.
                    </div>
</div>
</div>
<p className="text-xs text-zinc-200/60" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                  Replace the WhatsApp number in the links with your official business number.
                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-5">
<h2 className="text-2xl sm:text-3xl tracking-tight text-[#f5e9d0]" style={{fontFamily: 'Fraunces, serif'}}>Contact</h2>
<p className="mt-2 text-sm text-zinc-200/75" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            Wholesale enquiries, retailer requirements, and catalogue requests.
          </p>
<div className="mt-6 grid gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-3">
<div className="rounded-xl border border-[#d1a850]/25 bg-[#d1a850]/10 p-2 text-[#f5e9d0] mt-0.5">
<iconify-icon height="18" icon="solar:map-point-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Address</div>
<p className="mt-1 text-sm text-zinc-200/75 leading-relaxed" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                    2nd Floor, M.K. Market, Avenue Road,<br/>
                    Chickpet, Bengaluru – 560053
                  </p>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-3">
<div className="rounded-xl border border-[#d1a850]/25 bg-[#d1a850]/10 p-2 text-[#f5e9d0] mt-0.5">
<iconify-icon height="18" icon="solar:chat-round-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>WhatsApp</div>
<p className="mt-1 text-sm text-zinc-200/75" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                    Quick replies for catalogue, pricing, and availability.
                  </p>
<div className="mt-3 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#d1a850] to-[#f5e9d0] px-5 py-3 text-sm text-[#1a0f12] font-semibold hover:opacity-95 transition-opacity" href="https://wa.me/919999999999?text=Hello%20POPULAR%20SILK%2C%20I%20need%20the%20latest%20wholesale%20catalogue%20and%20prices." style={{fontFamily: 'Inter, system-ui, sans-serif'}} target="_blank">
<iconify-icon height="18" icon="solar:chat-round-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                      Chat on WhatsApp
                    </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-100 hover:bg-white/10 transition-colors" href="#order" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
<iconify-icon height="18" icon="solar:document-text-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                      Request Catalogue
                    </a>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-[#d1a850]/25 bg-[#d1a850]/10 p-5">
<div className="flex items-start gap-3">
<div className="rounded-xl border border-[#d1a850]/30 bg-[#0b0608]/40 p-2 text-[#f5e9d0] mt-0.5">
<iconify-icon height="18" icon="solar:store-2-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Business</div>
<p className="mt-1 text-sm text-zinc-100/80 leading-relaxed" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                    Art Silk Saree Manufacturer and Wholesale Dealer.
                  </p>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden">
<div className="p-5 sm:p-6 border-b border-white/10">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Find us on map</div>
<div className="mt-1 text-lg font-semibold text-[#f5e9d0] tracking-tight" style={{fontFamily: 'Fraunces, serif'}}>Chickpet, Bengaluru</div>
</div>
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-100 hover:bg-white/10 transition-colors" href="https://www.google.com/maps/search/?api=1&amp;query=M.K.%20Market%20Avenue%20Road%20Chickpet%20Bengaluru%20560053" style={{fontFamily: 'Inter, system-ui, sans-serif'}} target="_blank">
<iconify-icon height="18" icon="solar:map-arrow-right-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                  Open in Maps
                </a>
</div>
</div>
<div className="aspect-[16/10] sm:aspect-[16/9]">
<iframe className="h-full w-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=M.K.%20Market,%20Avenue%20Road,%20Chickpet,%20Bengaluru%20560053&amp;output=embed" title="Google Map - POPULAR SILK, Chickpet">
</iframe>
</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-3">
<div className="rounded-xl border border-[#d1a850]/25 bg-[#d1a850]/10 p-2 text-[#f5e9d0] mt-0.5">
<iconify-icon height="18" icon="solar:clock-circle-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Business hours</div>
<div className="mt-1 text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Share your visiting time on WhatsApp for faster assistance.</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-3">
<div className="rounded-xl border border-[#d1a850]/25 bg-[#d1a850]/10 p-2 text-[#f5e9d0] mt-0.5">
<iconify-icon height="18" icon="solar:phone-rounded-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-[#f5e9d0]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Contact</div>
<div className="mt-1 text-xs text-zinc-200/70" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Use WhatsApp for quickest response (catalogue &amp; pricing).</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#f5e9d0] to-[#d1a850] p-[1px]">
<div className="h-full w-full rounded-[0.7rem] bg-[#0b0608] flex items-center justify-center">
<span className="font-semibold tracking-tight text-sm text-[#f5e9d0]" style={{fontFamily: 'Fraunces, serif'}}>PS</span>
</div>
</div>
<div>
<div className="text-sm tracking-tight text-[#f5e9d0]" style={{fontFamily: 'Fraunces, serif'}}>POPULAR SILK</div>
<div className="text-xs text-zinc-200/65" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Premium Art Silk Sarees Manufacturer</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:items-center">
<a className="text-xs text-zinc-200/70 hover:text-[#f5e9d0] transition-colors" href="#home" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>Back to top</a>
<span className="hidden sm:inline text-xs text-zinc-200/25">•</span>
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-100 hover:bg-white/10 transition-colors" href="https://wa.me/919999999999?text=Hello%20POPULAR%20SILK%2C%20Please%20share%20the%20latest%20wholesale%20catalogue%20and%20prices." style={{fontFamily: 'Inter, system-ui, sans-serif'}} target="_blank">
<iconify-icon height="16" icon="solar:chat-round-line-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
            WhatsApp Enquiry
          </a>
</div>
</div>
<div className="mt-8 text-xs text-zinc-200/50" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
        © <span id="year"></span> POPULAR SILK. All rights reserved.
      </div>
</div>
</footer>


    </>
  );
}
