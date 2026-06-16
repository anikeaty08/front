import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    menuBtn?.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    // Updates slider controls
    const track = document.getElementById('updatesTrack');
    const scrollByCard = (dir) => {
      if (!track) return;
      const card = track.querySelector('article');
      const w = card ? card.getBoundingClientRect().width : 320;
      track.scrollBy({ left: dir * (w + 24), behavior: 'smooth' });
    };

    const bind = (id, dir) => {
      const btn = document.getElementById(id);
      btn?.addEventListener('click', () => scrollByCard(dir));
    };

    bind('updatesPrev', -1);
    bind('updatesNext', 1);
    bind('updatesPrevM', -1);
    bind('updatesNextM', 1);

    // Smooth anchor scrolling (basic)
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (!href || href === '#') return;
        const el = document.querySelector(href);
        if (!el) return;
        e.preventDefault();
        mobileNav?.classList.add('hidden');
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50">
<div className="bg-white/10 backdrop-blur-[3.75rem] shadow-[0_0_0_0_rgba(0,0,0,0.1)]">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
<div className="h-20 flex items-center justify-between gap-4">

<a className="flex items-center gap-3" href="#top">
<div className="leading-none">
<div className="font-[Anuphan] font-semibold tracking-tight text-base sm:text-lg text-[#172D64]">BROOKER</div>
<div className="font-[Lexend_Deca] font-normal text-xs text-[#172D64]/80 tracking-tight -mt-1">GROUP</div>
</div>
</a>

<nav className="hidden lg:flex items-center gap-10 rounded-full px-6 py-3 bg-black/[0.01]">
<a className="font-[Lexend_Deca] font-normal text-sm text-[#172D64] hover:text-[#0F1F46]" href="#about">About Us</a>
<a className="font-[Lexend_Deca] font-normal text-sm text-[#172D64] hover:text-[#0F1F46]" href="#services">Services</a>
<a className="font-[Lexend_Deca] font-normal text-sm text-[#172D64] hover:text-[#0F1F46]" href="#investor">Investor Relations</a>
<a className="font-[Lexend_Deca] font-normal text-sm text-[#172D64] hover:text-[#0F1F46]" href="#careers">Careers</a>
<a className="font-[Lexend_Deca] font-normal text-sm text-[#172D64] hover:text-[#0F1F46]" href="#contact">Contact Us</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-black/[0.01] px-4 py-2" id="langBtn">
<span className="font-[Lexend_Deca] font-medium text-sm text-[#172D64]">EN</span>
<iconify-icon className="text-[#172D64]" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>

<button className="lg:hidden inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-3 py-2" id="menuBtn">
<iconify-icon className="text-[#172D64]" icon="solar:hamburger-menu-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
</div>
</div>

<div className="lg:hidden hidden pb-5" id="mobileNav">
<div className="rounded-3xl border border-white/30 bg-white/30 backdrop-blur-xl p-4">
<div className="grid gap-2">
<a className="rounded-2xl px-4 py-3 font-[Lexend_Deca] font-normal text-sm text-[#172D64] hover:bg-white/40" href="#about">About Us</a>
<a className="rounded-2xl px-4 py-3 font-[Lexend_Deca] font-normal text-sm text-[#172D64] hover:bg-white/40" href="#services">Services</a>
<a className="rounded-2xl px-4 py-3 font-[Lexend_Deca] font-normal text-sm text-[#172D64] hover:bg-white/40" href="#investor">Investor Relations</a>
<a className="rounded-2xl px-4 py-3 font-[Lexend_Deca] font-normal text-sm text-[#172D64] hover:bg-white/40" href="#careers">Careers</a>
<a className="rounded-2xl px-4 py-3 font-[Lexend_Deca] font-normal text-sm text-[#172D64] hover:bg-white/40" href="#contact">Contact Us</a>
<button className="mt-2 inline-flex items-center justify-between rounded-2xl border border-white/30 bg-white/20 px-4 py-3">
<span className="font-[Lexend_Deca] font-medium text-sm text-[#172D64]">EN</span>
<iconify-icon className="text-[#172D64]" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</header>
<main className="" id="top">

<section className="relative overflow-hidden">

<div className="pointer-events-none absolute -top-48 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-white/40 blur-3xl"></div>
<div className="pointer-events-none absolute -top-24 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#3B52E0]/10 blur-3xl"></div>
<div className="pointer-events-none absolute top-24 left-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#E51212]/10 blur-3xl"></div>
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 pt-14 sm:pt-16 lg:pt-20 pb-14 sm:pb-16">
<div className="text-center max-w-4xl mx-auto">
<h1 className="font-[Anuphan] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#172D64] uppercase">
            The Brooker Group (BTC)
          </h1>
<p className="mt-4 font-[Anuphan] font-normal text-sm sm:text-base text-[#172D64]/80 max-w-3xl mx-auto">
            A financial advisory and investment firm with over three decades of experience in strategic transactions and digital assets across Thailand and global markets.
          </p>
</div>

<div className="mt-10 sm:mt-12 lg:mt-14">
<div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/40 bg-white/35 backdrop-blur-xl shadow-sm">
<div className="sm:p-8 lg:p-10 pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="overflow-hidden bg-white/45 border-white/50 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="-top-10 -left-6 text-7xl font-semibold text-white/70 tracking-tight font-[Anuphan] text-center absolute sm:text-9xl">B</div>
<div className="relative">
<div className="text-5xl font-semibold text-[#172D64] tracking-tight font-[Anuphan] text-center">Brook</div>
<div className="text-sm font-normal text-[#172D64]/80 font-[Anuphan] text-center mt-2">
                      Legacy and commitment<br className="hidden sm:block"/> to excellence
                    </div>
</div>
</div>

<div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/45 p-6">
<div className="absolute -top-10 -left-6 font-[Anuphan] font-semibold tracking-tight text-7xl text-white/70 sm:text-9xl">T</div>
<div className="relative">
<div className="text-5xl font-semibold text-[#172D64] tracking-tight font-[Anuphan] text-center">Technology</div>
<div className="text-sm font-normal text-[#172D64]/80 font-[Anuphan] text-center mt-2">
                      Digital assets, AI,<br className="hidden sm:block"/> new innovations
                    </div>
</div>
</div>

<div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/45 p-6">
<div className="absolute -top-10 -left-6 font-[Anuphan] font-semibold tracking-tight text-7xl sm:text-8xl text-white/70">C</div>
<div className="relative">
<div className="text-5xl font-semibold text-[#172D64] tracking-tight font-[Anuphan] text-center">Capital</div>
<div className="text-sm font-normal text-[#172D64]/80 font-[Anuphan] text-center mt-2">
                      Central hub for comprehensive<br className="hidden sm:block"/> advisory services
                    </div>
</div>
</div>
</div>

<div className="sm:mt-10 mt-8">
<div className="h-px bg-slate-300/70"></div>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
<div className="text-center">
<div className="font-[Anuphan] font-semibold tracking-tight text-lg text-[#172D64]">1994</div>
<div className="mx-auto mt-3 h-5 w-5 rounded-full bg-slate-300"></div>
<div className="mt-3 font-[Anuphan] font-normal text-sm text-[#172D64]/80">Founded in 1994</div>
</div>
<div className="text-center">
<div className="font-[Anuphan] font-semibold tracking-tight text-lg text-[#172D64]">2001</div>
<div className="mx-auto mt-3 h-5 w-5 rounded-full bg-slate-300"></div>
<div className="text-sm font-normal text-[#172D64]/80 font-[Anuphan] mt-3">Listed on MAI</div>
</div>
<div className="text-center">
<div className="font-[Anuphan] font-semibold tracking-tight text-lg text-[#172D64]">2011 &amp; 2016</div>
<div className="mx-auto mt-3 h-5 w-5 rounded-full bg-slate-300"></div>
<div className="mt-3 font-[Anuphan] font-normal text-sm text-[#172D64]/80">Forbes recognition</div>
</div>
<div className="text-center">
<div className="font-[Anuphan] font-semibold tracking-tight text-lg text-[#172D64]">2021</div>
<div className="mx-auto mt-3 h-5 w-5 rounded-full bg-slate-300"></div>
<div className="mt-3 font-[Anuphan] font-normal text-sm text-[#172D64]/80">Digital asset treasury</div>
</div>
<div className="text-center">
<div className="font-[Anuphan] font-semibold tracking-tight text-lg text-[#172D64]">2025</div>
<div className="mx-auto mt-3 h-5 w-5 rounded-full bg-slate-300"></div>
<div className="mt-3 font-[Anuphan] font-normal text-sm text-[#172D64]/80">30+ years, US$10B+ deals</div>
</div>
</div>
</div>
<div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="inline-flex items-center justify-center rounded-2xl bg-[#172D64] px-5 py-3 font-[Lexend_Deca] font-medium text-sm text-white shadow-sm hover:bg-[#0F1F46]" href="#services">
                  Explore services
                </a>
<a className="inline-flex items-center justify-center rounded-2xl border border-white/60 bg-white/40 px-5 py-3 font-[Lexend_Deca] font-normal text-sm text-[#172D64] hover:bg-white/60" href="#updates">
                  Recent updates
                  <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="services">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-16 lg:py-20">
<div className="flex justify-center">
<div className="relative rounded-full bg-white/30 px-10 py-5 shadow-sm">
<div className="absolute inset-0 rounded-full blur-2xl bg-white/40"></div>
<h2 className="relative text-center font-[Anuphan] font-semibold tracking-tight text-2xl sm:text-3xl text-white drop-shadow">
              OUR SERVICES
            </h2>
</div>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="rounded-[2.5rem] border border-white/50 bg-white/45 backdrop-blur-xl p-8 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl bg-[#172D64]/10 flex items-center justify-center">
<iconify-icon className="text-[#172D64]" icon="solar:chart-2-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div className="font-[Anuphan] font-semibold tracking-tight text-lg text-[#172D64]">Financial Advisory</div>
</div>
<p className="mt-4 font-[Anuphan] font-normal text-sm text-slate-600">
              Strategic transactions, restructuring, and capital markets advisory built on decades of execution.
            </p>
<a className="mt-6 inline-flex items-center font-[Lexend_Deca] font-medium text-sm text-[#172D64] hover:text-[#0F1F46]" href="#contact">
              Talk to our team
              <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
<div className="rounded-[2.5rem] border border-white/50 bg-white/45 backdrop-blur-xl p-8 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl bg-[#172D64]/10 flex items-center justify-center">
<iconify-icon className="text-[#172D64]" icon="solar:buildings-2-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div className="font-[Anuphan] font-semibold tracking-tight text-lg text-[#172D64]">Real Estate Consultancy</div>
</div>
<p className="mt-4 font-[Anuphan] font-normal text-sm text-slate-600">
              Feasibility, structuring, and fund strategy for property and infrastructure opportunities.
            </p>
<a className="mt-6 inline-flex items-center font-[Lexend_Deca] font-medium text-sm text-[#172D64] hover:text-[#0F1F46]" href="#deals">
              View track record
              <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
<div className="rounded-[2.5rem] border border-white/50 bg-white/45 backdrop-blur-xl p-8 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl bg-[#172D64]/10 flex items-center justify-center">
<iconify-icon className="text-[#172D64]" icon="solar:shield-keyhole-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
<div className="font-[Anuphan] font-semibold tracking-tight text-lg text-[#172D64]">Digital Assets &amp; AI</div>
</div>
<p className="mt-4 font-[Anuphan] font-normal text-sm text-slate-600">
              Digital asset strategy, treasury design, and innovation partnerships across global ecosystems.
            </p>
<a className="mt-6 inline-flex items-center font-[Lexend_Deca] font-medium text-sm text-[#172D64] hover:text-[#0F1F46]" href="#updates">
              See updates
              <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
</div>

<div className="mt-10 rounded-[2.5rem] border border-white/50 bg-white/30 overflow-hidden">
<div className="aspect-[16/9] w-full bg-gradient-to-br from-[#172D64]/15 to-white/0 flex items-center justify-center">
<div className="text-center px-6">
<div className="font-[Anuphan] font-semibold tracking-tight text-xl sm:text-2xl text-[#172D64] uppercase">BTCVCC</div>
<div className="mt-2 font-[Anuphan] font-normal text-sm text-slate-600">
                Replace this block with your services hero image from the design export.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="deals">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-16 lg:py-20">
<h2 className="text-center font-[Anuphan] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0E0E69] uppercase">
          Our Past Financial Advisory Deals
        </h2>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
<article className="rounded-[2.5rem] bg-white/35 backdrop-blur-xl border border-white/50 p-6 shadow-sm">
<div className="aspect-[4/3] rounded-3xl bg-slate-200/60 overflow-hidden flex items-center justify-center">
<span className="font-[Urbanist] font-normal text-sm text-slate-500">Deal image</span>
</div>
<h3 className="mt-6 text-center font-[Urbanist] font-medium tracking-tight text-xl text-[#0E0E69]">
              Infrastructure Fund, RO &amp; Debt Finance
            </h3>
</article>
<article className="rounded-[2.5rem] bg-white/35 backdrop-blur-xl border border-white/50 p-6 shadow-sm">
<div className="aspect-[4/3] rounded-3xl bg-slate-200/60 overflow-hidden flex items-center justify-center">
<span className="font-[Urbanist] font-normal text-sm text-slate-500">Deal image</span>
</div>
<h3 className="mt-6 text-center font-[Urbanist] font-medium tracking-tight text-xl text-[#0E0E69]">
              M&amp;A Will 100% Leverage Buyout, Property Fund
            </h3>
</article>
<article className="rounded-[2.5rem] bg-white/35 backdrop-blur-xl border border-white/50 p-6 shadow-sm">
<div className="aspect-[4/3] rounded-3xl bg-slate-200/60 overflow-hidden flex items-center justify-center">
<span className="font-[Urbanist] font-normal text-sm text-slate-500">Deal image</span>
</div>
<h3 className="mt-6 text-center font-[Urbanist] font-medium tracking-tight text-xl text-[#0E0E69]">
              Debt Restructuring
            </h3>
</article>
</div>
</div>
</section>

<section className="relative" id="partners">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-16 lg:py-20">
<h2 className="text-center font-[Anuphan] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0E0E69] uppercase">
          Our Partners
        </h2>
<div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">

<div className="h-16 rounded-3xl border border-white/50 bg-white/30 flex items-center justify-center">
<span className="font-[Urbanist] font-medium text-sm tracking-tight text-slate-700">BINANCE</span>
</div>
<div className="h-16 rounded-3xl border border-white/50 bg-white/30 flex items-center justify-center">
<span className="font-[Urbanist] font-medium text-sm tracking-tight text-slate-700">UOB</span>
</div>
<div className="h-16 rounded-3xl border border-white/50 bg-white/30 flex items-center justify-center">
<span className="font-[Urbanist] font-medium text-sm tracking-tight text-slate-700">NOMAD</span>
</div>
<div className="h-16 rounded-3xl border border-white/50 bg-white/30 flex items-center justify-center">
<span className="font-[Urbanist] font-medium text-sm tracking-tight text-slate-700">INCEPTION</span>
</div>
<div className="h-16 rounded-3xl border border-white/50 bg-white/30 flex items-center justify-center">
<span className="font-[Urbanist] font-medium text-sm tracking-tight text-slate-700">EXPAAM</span>
</div>
<div className="h-16 rounded-3xl border border-white/50 bg-white/30 flex items-center justify-center">
<span className="font-[Urbanist] font-medium text-sm tracking-tight text-slate-700">ROBINHOOD</span>
</div>
</div>
</div>
</section>

<section className="relative" id="awards">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-16 lg:py-20">
<h2 className="text-center font-[Anuphan] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0E0E69] uppercase">
          Awards &amp; CG Score
        </h2>
<div className="mt-10 rounded-[2.5rem] border border-white/50 bg-white/35 backdrop-blur-xl overflow-hidden">
<div className="aspect-[16/9] w-full bg-gradient-to-br from-slate-200/80 to-white flex items-center justify-center">
<div className="text-center px-6">
<div className="font-[Anuphan] font-semibold tracking-tight text-xl sm:text-2xl text-[#0E0E69] uppercase">Forbes Asia</div>
<div className="mt-2 font-[Anuphan] font-normal text-sm text-slate-600">Replace with your awards image.</div>
</div>
</div>
</div>
<div className="mt-10 text-center">
<div className="font-[Anuphan] font-semibold tracking-tight text-xl text-[#0E0E69] uppercase">
            Forbes Asia Magazine - Asia's Best Under a Billion USD
          </div>
<p className="mt-4 font-[Anuphan] font-normal text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            The Brooker Group received Forbes Asia’s Best Under A Billion USD award in 2011 and 2016. We are one of the very few financial advisory firms to be acknowledged by Forbes. The award truly reflects our strength as a leader in the financial advisory business.
          </p>
</div>
</div>
</section>

<section className="relative" id="updates">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-16 lg:py-20">
<div className="flex items-center justify-between gap-4">
<h2 className="font-[Anuphan] font-medium tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0E0E69] uppercase">
            Recent Updates
          </h2>
<div className="hidden sm:flex items-center gap-3">
<button className="h-12 w-12 rounded-full bg-white/70 border border-white/60 flex items-center justify-center hover:bg-white" id="updatesPrev">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
<button className="h-12 w-12 rounded-full bg-white/70 border border-white/60 flex items-center justify-center hover:bg-white" id="updatesNext">
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
</div>
</div>
<div className="mt-8">
<div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2" id="updatesTrack" style={{scrollbarWidth: 'none'}}>

<article className="min-w-[18rem] sm:min-w-[22rem] lg:min-w-[26rem] snap-start rounded-[2rem] bg-white border border-white/60 p-6 shadow-sm">
<div className="aspect-[4/3] rounded-2xl bg-slate-200/60 overflow-hidden flex items-center justify-center">
<span className="font-[Urbanist] font-normal text-sm text-slate-500">Update image</span>
</div>
<h3 className="mt-5 font-[Anuphan] font-medium tracking-tight text-xl text-[#0E0E69] uppercase">
                BNB $1K Gala Night | Bangkok, Thailand December 11, 2025
              </h3>
<p className="mt-3 font-[Anuphan] font-normal text-sm text-slate-600">
                Hosted by The Brooker Group, this exclusive gala celebrated BNB reaching the historic $1,000 milestone with a stage discussion featuring core representatives and VC fund managers.
              </p>
</article>
<article className="min-w-[18rem] sm:min-w-[22rem] lg:min-w-[26rem] snap-start rounded-[2rem] bg-white border border-white/60 p-6 shadow-sm">
<div className="aspect-[4/3] rounded-2xl bg-slate-200/60 overflow-hidden flex items-center justify-center">
<span className="font-[Urbanist] font-normal text-sm text-slate-500">Update image</span>
</div>
<h3 className="mt-5 font-[Anuphan] font-medium tracking-tight text-xl text-[#0E0E69] uppercase">
                BNB Incubation Alliance Bangkok
              </h3>
<p className="mt-3 font-[Anuphan] font-normal text-sm text-slate-600">
                In collaboration with BNB Chain, we hosted an event to share insights on the future of DeFi and stablecoins.
              </p>
</article>
<article className="min-w-[18rem] sm:min-w-[22rem] lg:min-w-[26rem] snap-start rounded-[2rem] bg-white border border-white/60 p-6 shadow-sm">
<div className="aspect-[4/3] rounded-2xl bg-slate-200/60 overflow-hidden flex items-center justify-center">
<span className="font-[Urbanist] font-normal text-sm text-slate-500">Update image</span>
</div>
<h3 className="mt-5 font-[Anuphan] font-medium tracking-tight text-xl text-[#0E0E69] uppercase">
                Binance Blockchain Week Dubai 2024
              </h3>
<p className="mt-3 font-[Anuphan] font-normal text-sm text-slate-600">
                Brook Digital Asset attended to gain insights into global Web3 trends and joined the MVB Program as a co-founder of CarbonFi.
              </p>
</article>
</div>

<div className="mt-4 flex sm:hidden items-center justify-center gap-3">
<button className="h-12 w-12 rounded-full bg-white/70 border border-white/60 flex items-center justify-center hover:bg-white" id="updatesPrevM">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
<button className="h-12 w-12 rounded-full bg-white/70 border border-white/60 flex items-center justify-center hover:bg-white" id="updatesNextM">
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="relative" id="media">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-16 lg:py-20">
<h2 className="text-center font-[Urbanist] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[#0E0E69] uppercase">
          Media Coverage
        </h2>
<div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="h-16 rounded-3xl border border-white/50 bg-white/30 flex items-center justify-center">
<span className="font-[Urbanist] font-medium text-sm tracking-tight text-slate-700">MEDIA 1</span>
</div>
<div className="h-16 rounded-3xl border border-white/50 bg-white/30 flex items-center justify-center">
<span className="font-[Urbanist] font-medium text-sm tracking-tight text-slate-700">MEDIA 2</span>
</div>
<div className="h-16 rounded-3xl border border-white/50 bg-white/30 flex items-center justify-center">
<span className="font-[Urbanist] font-medium text-sm tracking-tight text-slate-700">MEDIA 3</span>
</div>
<div className="h-16 rounded-3xl border border-white/50 bg-white/30 flex items-center justify-center">
<span className="font-[Urbanist] font-medium text-sm tracking-tight text-slate-700">MEDIA 4</span>
</div>
<div className="h-16 rounded-3xl border border-white/50 bg-white/30 flex items-center justify-center">
<span className="font-[Urbanist] font-medium text-sm tracking-tight text-slate-700">MEDIA 5</span>
</div>
<div className="h-16 rounded-3xl border border-white/50 bg-white/30 flex items-center justify-center">
<span className="font-[Urbanist] font-medium text-sm tracking-tight text-slate-700">MEDIA 6</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#D4DFF1]" id="contact">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-14">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

<div>
<div className="font-[Urbanist] font-medium tracking-tight text-base text-slate-900">BROOKER GROUP</div>
<p className="mt-4 font-[Urbanist] font-normal text-sm text-slate-800/80 leading-relaxed">
            26/F The Trendy Office Building, 10/190-193 Soi Sukhumvit 13, Sukhumvit Road, Klongtoey-Nua, Wattana, Bangkok 10110, Thailand
          </p>
</div>

<div>
<div className="font-[Urbanist] font-medium tracking-tight text-base text-slate-900 uppercase">Contact Us</div>
<ul className="mt-4 space-y-3 font-[Urbanist] font-normal text-sm text-slate-800/80">
<li>Tel : + (66) (0) 2168-7100</li>
<li>Fax : + (66) (0) 2168-7111-2</li>
<li>Email : info@brookergroup.com</li>
</ul>
</div>

<div>
<div className="font-[Urbanist] font-medium tracking-tight text-base text-slate-900 uppercase">Service</div>
<ul className="mt-4 space-y-3 font-[Urbanist] font-normal text-sm text-slate-800/80">
<li><a className="hover:text-slate-900" href="#services">Financial Advisory</a></li>
<li><a className="hover:text-slate-900" href="#services">Real Estate Consultancy</a></li>
<li><a className="hover:text-slate-900" href="#services">Brook Digital Asset</a></li>
</ul>
</div>

<div>
<div className="font-[Urbanist] font-medium tracking-tight text-base text-slate-900 uppercase">Social Media</div>
<div className="mt-4 flex items-center gap-4">
<a aria-label="Facebook" className="h-12 w-12 rounded-2xl border border-slate-300/70 bg-white/30 flex items-center justify-center hover:bg-white/60" href="#">
<iconify-icon icon="solar:share-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a aria-label="Instagram" className="h-12 w-12 rounded-2xl border border-slate-300/70 bg-white/30 flex items-center justify-center hover:bg-white/60" href="#">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a aria-label="X" className="h-12 w-12 rounded-2xl border border-slate-300/70 bg-white/30 flex items-center justify-center hover:bg-white/60" href="#">
<iconify-icon icon="solar:chat-round-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a aria-label="YouTube" className="h-12 w-12 rounded-2xl border border-slate-300/70 bg-white/30 flex items-center justify-center hover:bg-white/60" href="#">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
<div className="mt-6">
<a className="inline-flex items-center font-[Lexend_Deca] font-medium text-sm text-slate-900 hover:text-slate-950" href="#top">
              Back to top
              <iconify-icon className="ml-2" icon="solar:arrow-up-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-slate-900/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="font-[Urbanist] font-normal text-xs text-slate-700">© <span id="year">2026</span> The Brooker Group. All rights reserved.</div>
<div className="font-[Urbanist] font-normal text-xs text-slate-700">Privacy · Terms</div>
</div>
</div>
</footer>


    </>
  );
}
