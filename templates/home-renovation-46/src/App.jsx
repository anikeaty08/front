import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Set current year
      document.getElementById('year').textContent = new Date().getFullYear();
      // Init icons with consistent stroke width
      lucide.createIcons({
        attrs: { 'stroke-width': 1.5 }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">
<a aria-label="Domů" className="inline-flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-items-center tracking-tight">
<span className="text-[13px] leading-none font-semibold">OD</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-slate-900 text-[15px] font-semibold tracking-tight">Oprav dům</span>
<span className="text-slate-500 text-[12px] -mt-0.5">poradenství k dotacím</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-8 text-[14.5px]">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#jak-to-funguje">Jak to funguje</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#narok">Na co máte nárok</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#reference">Reference</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300 px-3.5 py-2 text-[14px] font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-colors" href="tel:+420800123456">
<svg className="lucide lucide-phone h-4.5 w-4.5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>800 123 456</span>
</a>
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2.5 text-[14px] font-medium hover:bg-black hover:shadow-sm hover:shadow-slate-900/10 transition-colors" href="#formular">
<svg className="lucide lucide-sparkles h-4.5 w-4.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Bezplatné posouzení</span>
</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,#eef2ff_0%,#ffffff_60%)]"></div>
<div className="mx-auto max-w-7xl px-6 pt-14 pb-8">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[12.5px] text-slate-700">
<svg className="lucide lucide-badge-check h-4 w-4 text-blue-600" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Program „Oprav dům po babičce“ · Aktuálně otevřeno</span>
</div>
<h1 className="sm:text-5xl text-4xl font-semibold text-slate-900 tracking-tight mt-5">
              Dotace na opravu domu po babičce — rychle, bez stresu a s jistotou
            </h1>
<p className="mt-4 text-[16.5px] leading-7 text-slate-600">
              Zařídíme kompletní administraci, projekt i realizaci tak, abyste získali <span className="text-slate-900">nejvyšší možnou podporu</span>. První posouzení je zdarma do 24 hodin.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white px-4.5 py-3 text-[14.5px] font-medium hover:bg-blue-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300" href="#formular">
<svg className="lucide lucide-clipboard-check h-5 w-5" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
<span>Chci posoudit nárok</span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white text-slate-800 px-4.5 py-3 text-[14.5px] font-medium hover:border-slate-400 hover:bg-slate-50" href="#narok">
<svg className="lucide lucide-search h-5 w-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span>Rychlá kontrola nároku</span>
</a>
</div>
<div className="mt-8 grid sm:grid-cols-3 gap-4">
<div className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-3">
<svg className="lucide lucide-shield-check h-5 w-5 text-blue-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="text-sm">
<div className="font-medium text-slate-900">Kompletní servis</div>
<div className="text-slate-600">od posudku po vyplacení</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-3">
<svg className="lucide lucide-banknote h-5 w-5 text-blue-600" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
<div className="text-sm">
<div className="font-medium text-slate-900">Až 1 000 000 Kč</div>
<div className="text-slate-600">podpora dle rozsahu</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-3">
<svg className="lucide lucide-timer h-5 w-5 text-blue-600" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
<div className="text-sm">
<div className="font-medium text-slate-900">Rychlé vyřízení</div>
<div className="text-slate-600">první zpětná vazba do 24 h</div>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
<img alt="Rekonstrukce staršího domu" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
<svg className="lucide lucide-hammer h-5 w-5 text-blue-600" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
<div className="text-sm">
<div className="font-medium text-slate-900">Certifikovaní partneři</div>
<div className="text-slate-600">projekce · energetika · realizace</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-slate-200" id="formular">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Bezplatné posouzení do 24 hodin</h2>
<p className="mt-2 text-[16px] text-slate-600">Vyplňte krátký formulář. Ozveme se s odhadem nároku a dalším postupem.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<svg className="lucide lucide-file-check-2 mt-0.5 h-5 w-5 text-blue-600" data-lucide="file-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m3 15 2 2 4-4"></path></svg>
<div className="text-[15px] text-slate-700">Zkontrolujeme splnění podmínek a doporučíme optimální rozsah opatření.</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-layers mt-0.5 h-5 w-5 text-blue-600" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<div className="text-[15px] text-slate-700">Zajistíme energetické hodnocení, projekt a kompletní administraci.</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-handshake mt-0.5 h-5 w-5 text-blue-600" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
<div className="text-[15px] text-slate-700">Spolupracujeme s prověřenými realizačními firmami po celé ČR.</div>
</li>
</ul>
<div className="mt-8 flex items-center gap-6">
<div className="flex -space-x-2">
<img alt="Klient" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Klient" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Klient" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="text-[14px] text-slate-600">Více než 1 200 posouzení za posledních 12 měsíců</div>
</div>
</div>
<form action="#" className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm" method="post">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-[13.5px] font-medium text-slate-700" htmlFor="jmeno">Jméno a příjmení</label>
<input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-[14.5px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500" id="jmeno" name="jmeno" placeholder="Např. Jana Nováková" required="" type="text"/>
</div>
<div>
<label className="block text-[13.5px] font-medium text-slate-700" htmlFor="telefon">Telefon</label>
<input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-[14.5px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500" id="telefon" inputmode="tel" name="telefon" placeholder="+420 777 000 000" required="" type="tel"/>
</div>
<div>
<label className="block text-[13.5px] font-medium text-slate-700" htmlFor="email">E‑mail</label>
<input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-[14.5px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500" id="email" name="email" placeholder="napr. jana@email.cz" required="" type="email"/>
</div>
<div>
<label className="block text-[13.5px] font-medium text-slate-700" htmlFor="kraj">Kraj</label>
<select className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-[14.5px] text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500" id="kraj" name="kraj" required="">
<option disabled="" selected="" value="">Vyberte</option>
<option>Hlavní město Praha</option>
<option>Středočeský</option>
<option>Jihočeský</option>
<option>Plzeňský</option>
<option>Karlovarský</option>
<option>Ústecký</option>
<option>Liberecký</option>
<option>Královéhradecký</option>
<option>Pardubický</option>
<option>Vysočina</option>
<option>Jihomoravský</option>
<option>Olomoucký</option>
<option>Zlínský</option>
<option>Moravskoslezský</option>
</select>
</div>
<div>
<label className="block text-[13.5px] font-medium text-slate-700" htmlFor="typ">Typ nemovitosti</label>
<select className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-[14.5px] text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500" id="typ" name="typ" required="">
<option disabled="" selected="" value="">Vyberte</option>
<option>Rodinný dům</option>
<option>Chalupa pro bydlení</option>
<option>Bytová jednotka v RD</option>
</select>
</div>
<div className="sm:col-span-2">
<span className="block text-[13.5px] font-medium text-slate-700">Co je potřeba řešit?</span>
<div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">

<label className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-[14px] text-slate-800 hover:border-slate-400 hover:bg-slate-50 cursor-pointer">
<input className="peer sr-only" name="opravy[]" type="checkbox" value="zatepleni"/>
<span className="grid h-4.5 w-4.5 place-items-center rounded-[4px] border border-slate-400 peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-colors">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Zateplení</span>
</label>
<label className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-[14px] text-slate-800 hover:border-slate-400 hover:bg-slate-50 cursor-pointer">
<input className="peer sr-only" name="opravy[]" type="checkbox" value="okna"/>
<span className="grid h-4.5 w-4.5 place-items-center rounded-[4px] border border-slate-400 peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-colors">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Výměna oken/dveří</span>
</label>
<label className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-[14px] text-slate-800 hover:border-slate-400 hover:bg-slate-50 cursor-pointer">
<input className="peer sr-only" name="opravy[]" type="checkbox" value="strecha"/>
<span className="grid h-4.5 w-4.5 place-items-center rounded-[4px] border border-slate-400 peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-colors">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Střecha</span>
</label>
<label className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-[14px] text-slate-800 hover:border-slate-400 hover:bg-slate-50 cursor-pointer">
<input className="peer sr-only" name="opravy[]" type="checkbox" value="topeni"/>
<span className="grid h-4.5 w-4.5 place-items-center rounded-[4px] border border-slate-400 peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-colors">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Vytápění/tepelné čerpadlo</span>
</label>
<label className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-[14px] text-slate-800 hover:border-slate-400 hover:bg-slate-50 cursor-pointer">
<input className="peer sr-only" name="opravy[]" type="checkbox" value="vlhkost"/>
<span className="grid h-4.5 w-4.5 place-items-center rounded-[4px] border border-slate-400 peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-colors">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Vlhkost/izolace základů</span>
</label>
<label className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-[14px] text-slate-800 hover:border-slate-400 hover:bg-slate-50 cursor-pointer">
<input className="peer sr-only" name="opravy[]" type="checkbox" value="elektro"/>
<span className="grid h-4.5 w-4.5 place-items-center rounded-[4px] border border-slate-400 peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-colors">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Rozvody/elektro</span>
</label>
</div>
</div>
<div className="sm:col-span-2">
<span className="block text-[13.5px] font-medium text-slate-700">Odhadovaná dotace</span>
<div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">

<label className="inline-flex items-center justify-between gap-2 rounded-md border border-slate-300 px-3 py-2.5 text-[14px] text-slate-800 hover:border-slate-400 hover:bg-slate-50 cursor-pointer">
<input className="peer sr-only" name="dotace" required="" type="radio" value="do300"/>
<span>Do 300 tis. Kč</span>
<span className="h-4.5 w-4.5 rounded-full border border-slate-400 grid place-items-center peer-checked:border-blue-600">
<span className="h-2.5 w-2.5 rounded-full bg-transparent peer-checked:bg-blue-600 transition-colors"></span>
</span>
</label>
<label className="inline-flex items-center justify-between gap-2 rounded-md border border-slate-300 px-3 py-2.5 text-[14px] text-slate-800 hover:border-slate-400 hover:bg-slate-50 cursor-pointer">
<input className="peer sr-only" name="dotace" type="radio" value="300-600"/>
<span>300–600 tis. Kč</span>
<span className="h-4.5 w-4.5 rounded-full border border-slate-400 grid place-items-center peer-checked:border-blue-600">
<span className="h-2.5 w-2.5 rounded-full bg-transparent peer-checked:bg-blue-600 transition-colors"></span>
</span>
</label>
<label className="inline-flex items-center justify-between gap-2 rounded-md border border-slate-300 px-3 py-2.5 text-[14px] text-slate-800 hover:border-slate-400 hover:bg-slate-50 cursor-pointer">
<input className="peer sr-only" name="dotace" type="radio" value="600plus"/>
<span>600 tis. Kč a více</span>
<span className="h-4.5 w-4.5 rounded-full border border-slate-400 grid place-items-center peer-checked:border-blue-600">
<span className="h-2.5 w-2.5 rounded-full bg-transparent peer-checked:bg-blue-600 transition-colors"></span>
</span>
</label>
</div>
</div>
<div className="sm:col-span-2">
<label className="block text-[13.5px] font-medium text-slate-700" htmlFor="poznamka">Poznámka (volitelné)</label>
<textarea className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-[14.5px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500" id="poznamka" name="poznamka" placeholder="Krátce popište stav domu nebo plány rekonstrukce…" rows="3"></textarea>
</div>
</div>
<div className="mt-5 flex items-start gap-3">
<label className="inline-flex items-center gap-2 cursor-pointer">
<input className="peer sr-only" name="souhlas" required="" type="checkbox"/>
<span className="grid h-4.5 w-4.5 place-items-center rounded-[4px] border border-slate-400 peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-colors">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-[13.5px] text-slate-700">Souhlasím se zpracováním osobních údajů dle <a className="underline decoration-slate-300 hover:decoration-slate-500" href="#gdpr">zásad zpracování</a>.</span>
</label>
</div>
<div className="mt-5 flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4.5 py-3 text-[14.5px] font-medium hover:bg-blue-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300" type="submit">
<svg className="lucide lucide-send h-5 w-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                Odeslat žádost
              </button>
<div className="text-[13px] text-slate-500">Odesláním potvrzujete pravdivost údajů.</div>
</div>
</form>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-slate-200" id="jak-to-funguje">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Jak to funguje</h2>
<p className="mt-2 text-[16px] text-slate-600">Od prvního kontaktu po vyplacení dotace s vámi budeme v každém kroku.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-[14px] text-slate-800 hover:bg-slate-50 hover:border-slate-400" href="#formular">
<svg className="lucide lucide-clipboard-list h-4.5 w-4.5" data-lucide="clipboard-list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
            Začít hned
          </a>
</div>
<div className="mt-8 grid md:grid-cols-4 gap-4">
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2 text-slate-500 text-[12px]">
<span className="h-6 w-6 grid place-items-center rounded-md border border-slate-300 text-slate-700">1</span>
              Krok první
            </div>
<div className="mt-3 flex items-center gap-2">
<svg className="lucide lucide-contact h-5 w-5 text-blue-600" data-lucide="contact" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 2v2"></path><path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></path><path d="M8 2v2"></path><circle cx="12" cy="11" r="3"></circle><rect height="18" rx="2" width="18" x="3" y="4"></rect></svg>
<div className="font-medium text-slate-900">Rychlé posouzení</div>
</div>
<p className="mt-2 text-[14.5px] text-slate-600">Zavoláme si, vyjasníme cíle a zjistíme možnosti dotace.</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2 text-slate-500 text-[12px]">
<span className="h-6 w-6 grid place-items-center rounded-md border border-slate-300 text-slate-700">2</span>
              Krok druhý
            </div>
<div className="mt-3 flex items-center gap-2">
<svg className="lucide lucide-ruler h-5 w-5 text-blue-600" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>
<div className="font-medium text-slate-900">Energetika a projekt</div>
</div>
<p className="mt-2 text-[14.5px] text-slate-600">Zajistíme energetické hodnocení a projektovou dokumentaci.</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2 text-slate-500 text-[12px]">
<span className="h-6 w-6 grid place-items-center rounded-md border border-slate-300 text-slate-700">3</span>
              Krok třetí
            </div>
<div className="mt-3 flex items-center gap-2">
<svg className="lucide lucide-file-text h-5 w-5 text-blue-600" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<div className="font-medium text-slate-900">Žádost a administrace</div>
</div>
<p className="mt-2 text-[14.5px] text-slate-600">Připravíme podání, hlídáme termíny a komunikujeme s SFŽP.</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2 text-slate-500 text-[12px]">
<span className="h-6 w-6 grid place-items-center rounded-md border border-slate-300 text-slate-700">4</span>
              Krok čtvrtý
            </div>
<div className="mt-3 flex items-center gap-2">
<svg className="lucide lucide-home h-5 w-5 text-blue-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<div className="font-medium text-slate-900">Realizace a vyplacení</div>
</div>
<p className="mt-2 text-[14.5px] text-slate-600">Koordinujeme dodavatele a dotační vyúčtování po dokončení.</p>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-slate-200" id="narok">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Máte nárok na dotaci?</h2>
<p className="mt-2 text-[16px] text-slate-600">Rychlá orientační kontrola. Pro přesné posouzení vyplňte i hlavní formulář.</p>
<div className="mt-6 space-y-4">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar-clock h-5 w-5 text-blue-600" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
<div className="font-medium text-slate-900">Rok výstavby</div>
</div>
<p className="mt-1 text-[14.5px] text-slate-600">Preferenčně starší domy, ale není to podmínkou.</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin h-5 w-5 text-blue-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="font-medium text-slate-900">Bydliště</div>
</div>
<p className="mt-1 text-[14.5px] text-slate-600">Trvalé bydliště v domě je výhodou (u některých podpor nutné).</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-thermometer-sun h-5 w-5 text-blue-600" data-lucide="thermometer-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9a4 4 0 0 0-2 7.5"></path><path d="M12 3v2"></path><path d="m6.6 18.4-1.4 1.4"></path><path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path><path d="M4 13H2"></path><path d="M6.34 7.34 4.93 5.93"></path></svg>
<div className="font-medium text-slate-900">Úspora energie</div>
</div>
<p className="mt-1 text-[14.5px] text-slate-600">Cílí se na snížení energetické náročnosti po renovaci.</p>
</div>
</div>
<a className="mt-6 inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4.5 py-3 text-[14.5px] font-medium hover:bg-black" href="#formular">
<svg className="lucide lucide-arrow-right h-5 w-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              Chci přesné posouzení
            </a>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
<form action="#" className="grid grid-cols-1 gap-4">
<div>
<label className="block text-[13.5px] font-medium text-slate-700" htmlFor="rok">Rok výstavby / poslední rekonstrukce</label>
<input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-[14.5px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500" id="rok" inputmode="numeric" max="2025" min="1800" placeholder="Např. 1958" type="number"/>
</div>
<div>
<label className="block text-[13.5px] font-medium text-slate-700" htmlFor="obyvani">Trvalé bydliště v domě</label>
<select className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-[14.5px] text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500" id="obyvani">
<option>Ano</option>
<option>Ne, plánujeme</option>
<option>Ne</option>
</select>
</div>
<div>
<label className="block text-[13.5px] font-medium text-slate-700">Plánovaná opatření</label>
<div className="mt-2 flex flex-wrap gap-2">
<label className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-[14px] hover:border-slate-400 hover:bg-slate-50 cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="grid h-4.5 w-4.5 place-items-center rounded-[4px] border border-slate-400 peer-checked:border-blue-600 peer-checked:bg-blue-600">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Zateplení</span>
</label>
<label className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-[14px] hover:border-slate-400 hover:bg-slate-50 cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="grid h-4.5 w-4.5 place-items-center rounded-[4px] border border-slate-400 peer-checked:border-blue-600 peer-checked:bg-blue-600">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Výplně otvorů</span>
</label>
<label className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-[14px] hover:border-slate-400 hover:bg-slate-50 cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="grid h-4.5 w-4.5 place-items-center rounded-[4px] border border-slate-400 peer-checked:border-blue-600 peer-checked:bg-blue-600">
<svg className="lucide lucide-check h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Tepelné čerpadlo</span>
</label>
</div>
</div>
<button className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white px-4.5 py-3 text-[14.5px] font-medium hover:bg-blue-700">
<svg className="lucide lucide-check-circle h-5 w-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                Zjistit orientační nárok
              </button>
<p className="text-[12.5px] text-slate-500">Výsledek je pouze orientační. Pro podání žádosti je nutné energetické hodnocení.</p>
</form>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Proč s námi</h2>
<div className="mt-6 grid md:grid-cols-3 gap-4">
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-users h-5 w-5 text-blue-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div className="font-medium text-slate-900">Jeden tým, vše pod jednou střechou</div>
</div>
<p className="mt-2 text-[14.5px] text-slate-600">Energetik, projektant, administrátor a realizace – koordinace bez starostí.</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-percent h-5 w-5 text-blue-600" data-lucide="percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
<div className="font-medium text-slate-900">Maximalizace podpory</div>
</div>
<p className="mt-2 text-[14.5px] text-slate-600">Navrhneme balíček opatření tak, aby splňoval podmínky a přinesl nejvyšší dotaci.</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock-8 h-5 w-5 text-blue-600" data-lucide="clock-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l-4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div className="font-medium text-slate-900">Hlídání termínů a rozpočtu</div>
</div>
<p className="mt-2 text-[14.5px] text-slate-600">Transparentní harmonogram a kontrola nákladů v průběhu celé realizace.</p>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-slate-200" id="reference">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Co říkají klienti</h2>
<p className="mt-2 text-[16px] text-slate-600">Skutečné příběhy z rekonstrukcí starších domů.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-[12.5px] text-slate-500">
<svg className="lucide lucide-badge-check h-4 w-4 text-blue-600" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Ověřené reference
          </div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4">
<figure className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="Klientka" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="font-medium text-slate-900">Jana N.</figcaption>
<div className="text-[12.5px] text-slate-500">České Budějovice</div>
</div>
</div>
<blockquote className="mt-3 text-[14.5px] text-slate-700">Rychlé jednání, jasné instrukce. Zateplení a okna zvládnuté během jedné sezóny, dotace schválena.</blockquote>
</figure>
<figure className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="Klient" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="font-medium text-slate-900">Petr K.</figcaption>
<div className="text-[12.5px] text-slate-500">Kroměříž</div>
</div>
</div>
<blockquote className="mt-3 text-[14.5px] text-slate-700">Pomohli nám s projektem i vyřízením žádosti. Oceňuji komunikaci a kontrolu rozpočtu.</blockquote>
</figure>
<figure className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="Klient" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<figcaption className="font-medium text-slate-900">Lenka a Martin</figcaption>
<div className="text-[12.5px] text-slate-500">Sokolov</div>
</div>
</div>
<blockquote className="mt-3 text-[14.5px] text-slate-700">Dům po babičce dává znovu smysl. Dotace pokryla významnou část nákladů.</blockquote>
</figure>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-slate-200" id="faq">
<div className="mx-auto max-w-3xl px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Často kladené otázky</h2>
<div className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-[15px] font-medium text-slate-900">Kdo může žádat o dotaci?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-[14.5px] text-slate-700">
              Vlastník rodinného domu splňující podmínky programu. Rádi zkontrolujeme způsobilost během bezplatného posouzení.
            </div>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-[15px] font-medium text-slate-900">Jak dlouho trvá vyřízení?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-[14.5px] text-slate-700">
              Záleží na rozsahu opatření a vytíženosti fondu. První posouzení do 24 h, příprava žádosti typicky 2–4 týdny.
            </div>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-[15px] font-medium text-slate-900">Kolik zaplatím za služby?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-[14.5px] text-slate-700">
              Úvodní konzultace je zdarma. Nabídku předem transparentně naceníme včetně možností dotační podpory.
            </div>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-[15px] font-medium text-slate-900">Jste provozovatelé dotačního programu?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-[14.5px] text-slate-700">
              Ne, nejsme provozovatelem. Poskytujeme odborné poradenství, projekci a administraci žádostí.
            </div>
</details>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6">
<div className="rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 sm:p-10">
<div className="grid lg:grid-cols-3 gap-8 items-center">
<div className="lg:col-span-2">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Připravíme žádost tak, aby prošla napoprvé</h3>
<p className="mt-2 text-[16px] text-slate-600">Projdeme stav domu, navrhneme opatření a postaráme se o kompletní administraci.</p>
</div>
<div className="flex lg:justify-end">
<a className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4.5 py-3 text-[14.5px] font-medium hover:bg-blue-700" href="#formular">
<svg className="lucide lucide-rocket h-5 w-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                Začít bez závazku
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200" id="gdpr">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-items-center">
<span className="text-[13px] leading-none font-semibold tracking-tight">OD</span>
</div>
<div className="text-[15px] font-semibold tracking-tight text-slate-900">Oprav dům</div>
</div>
<p className="mt-3 text-[14.5px] text-slate-600">Nezávislé poradenství k dotacím na renovaci starších domů. Působíme po celé ČR.</p>
</div>
<div>
<div className="text-[13px] font-medium text-slate-900">Odkazy</div>
<ul className="mt-3 space-y-2 text-[14.5px]">
<li><a className="text-slate-600 hover:text-slate-900" href="#jak-to-funguje">Jak to funguje</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#narok">Nárok a podmínky</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#reference">Reference</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<div className="text-[13px] font-medium text-slate-900">Kontakt</div>
<ul className="mt-3 space-y-2 text-[14.5px]">
<li className="flex items-center gap-2 text-slate-600">
<svg className="lucide lucide-phone h-4.5 w-4.5 text-slate-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<a className="hover:text-slate-900" href="tel:+420800123456">800 123 456</a>
</li>
<li className="flex items-center gap-2 text-slate-600">
<svg className="lucide lucide-mail h-4.5 w-4.5 text-slate-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<a className="hover:text-slate-900" href="mailto:info@opravdum.cz">info@opravdum.cz</a>
</li>
</ul>
</div>
<div>
<div className="text-[13px] font-medium text-slate-900">Právní</div>
<ul className="mt-3 space-y-2 text-[14.5px]">
<li><a className="text-slate-600 hover:text-slate-900" href="#">Zásady zpracování osobních údajů</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Obchodní podmínky</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-200 pt-6">
<p className="text-[12.5px] text-slate-500">© <span id="year">2025</span> Oprav dům. Všechna práva vyhrazena. Nejsme provozovatelem dotačních programů.</p>
<div className="flex items-center gap-3 text-[12.5px] text-slate-500">
<svg className="lucide lucide-lock h-4 w-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Vaše data přenášíme bezpečně a šifrovaně.
          </div>
</div>
</div>
</footer>




    </>
  );
}
