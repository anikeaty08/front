import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
primary: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb', // Core Blue
700: '#1d4ed8',
900: '#1e3a8a',
},
accent: {
500: '#f97316', // Core Orange
600: '#ea580c',
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 0 15px rgba(59, 130, 246, 0.3)',
}
}
}
}



    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("contact-form");
      if (!form) return;

      form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        try {
          const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
          });

          if (response.ok) {
            window.location.href = "/thanks";
          } else {
            alert("Er is iets misgegaan. Probeer opnieuw.");
          }
        } catch (err) {
          alert("Netwerkfout. Probeer opnieuw.");
        }
      });
    });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b backdrop-blur-md border-gray-200/80 bg-white/80" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 group" href="#">
<div className="p-1.5 rounded-lg group-hover:bg-primary-700 transition-colors bg-primary-600 text-white" style={{}}>
<svg aria-hidden="true" className="" data-height="20" data-icon="lucide:home" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path className="" d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
<span className="self-center whitespace-nowrap text-xl font-semibold text-gray-900 tracking-tighter" style={{transition: 'outline 0.1s ease-in-out'}}>PK Dakwerken</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse items-center">
<a className="hidden md:flex items-center gap-2 text-sm font-medium transition-colors text-gray-600 hover:text-primary-600" href="tel:+3212345678" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" className="" data-icon="lucide:phone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="">0470 12 34 56</span>
</a>
<a className="bg-accent-500 focus:ring-4 focus:outline-none focus:ring-accent-500/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all shadow-sm text-white hover:bg-accent-600" href="#contact" style={{}}>
                    Gratis Offerte
                </a>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent border-gray-100 bg-gray-50" style={{transition: 'outline 0.1s ease-in-out'}}>
<li className="">
<a className="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-primary-600 md:p-0 transition-colors text-gray-600 hover:bg-gray-100" href="#diensten" style={{transition: 'outline 0.1s ease-in-out'}}>Diensten</a>
</li>
<li className="">
<a className="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-primary-600 md:p-0 transition-colors text-gray-600 hover:bg-gray-100" href="#waarom-ons" style={{transition: 'outline 0.1s ease-in-out'}}>Over Ons</a>
</li>
<li className="">
<a className="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-primary-600 md:p-0 transition-colors text-gray-600 hover:bg-gray-100" href="#reviews" style={{transition: 'outline 0.1s ease-in-out'}}>Reviews</a>
</li>
<li className="">
<a className="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-primary-600 md:p-0 transition-colors text-gray-600 hover:bg-gray-100" href="#faq" style={{transition: 'outline 0.1s ease-in-out'}}>FAQ</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-28 overflow-hidden pt-32 pb-20 relative">

<div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#eff6ff_100%)] bg-white" style={{}}></div>
<div className="absolute top-0 right-0 -z-10 opacity-30">
<svg fill="none" height="600" viewbox="0 0 600 600" width="600" xmlns="http://www.w3.org/2000/svg">
<circle cx="400" cy="100" fill="url(#paint0_radial)" r="300"></circle>
<defs>
<radialgradient cx="0" cy="0" gradienttransform="translate(400 100) rotate(90) scale(300)" gradientunits="userSpaceOnUse" id="paint0_radial" r="1">
<stop stop-color="#3b82f6"></stop>
<stop offset="1" stop-color="#3b82f6" stop-opacity="0"></stop>
</radialgradient>
</defs>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 bg-primary-50 border-primary-100 text-primary-700">
<span className="flex h-2 w-2 rounded-full animate-pulse bg-primary-600"></span>
                Beschikbaar voor projecten in 2024
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 max-w-4xl mx-auto text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>
                Uw dak in <span className="text-transparent bg-clip-text bg-gradient-to-r to-primary-500 from-primary-600" style={{}}>topconditie</span>,<br/> voor jarenlange zekerheid.
            </h1>
<p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-normal leading-relaxed" style={{transition: 'outline 0.1s ease-in-out'}}>
                KP Dakwerken is uw betrouwbare partner voor dakrenovatie, isolatie en herstellingen. Vakmanschap en kwaliteit voor uw woning in Vlaanderen en Nederland.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3.5 bg-accent-500 font-medium rounded-lg transition-all shadow-lg shadow-accent-500/20 flex items-center justify-center gap-2 hover:bg-accent-600 text-white" href="#contact" style={{}}>
                    Gratis Inspectie Aanvragen
                    <svg aria-hidden="true" className="" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border font-medium rounded-lg transition-all flex items-center justify-center gap-2 bg-white border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50" href="tel:+3212345678" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-icon="lucide:phone" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Bel Direct
                </a>
</div>
<div className="mt-12 flex items-center justify-center gap-6 grayscale opacity-70 text-gray-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-1">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-medium">4.9/5 op Google Reviews</span>
</div>
</div>
</section>

<section className="py-20 border-y bg-white border-gray-100" id="waarom-ons" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Waarom kiezen voor KP Dakwerken?</h2>
<p className="text-gray-500 max-w-2xl mx-auto" style={{transition: 'outline 0.1s ease-in-out'}}>Wij combineren jarenlange ervaring met de nieuwste technieken om uw dak de bescherming te bieden die het verdient.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl border hover:shadow-soft transition-all duration-300 group bg-gray-50 border-gray-100 hover:border-primary-100" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm bg-white border-gray-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-icon="lucide:shield-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>10 Jaar Garantie</h3>
<p className="text-gray-500 text-sm leading-relaxed" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Wij staan 100% achter ons werk. Op al onze dakwerken en renovaties bieden wij een uitgebreide garantie voor uw gemoedsrust.
                    </p>
</div>

<div className="p-6 rounded-2xl border hover:shadow-soft transition-all duration-300 group bg-gray-50 border-gray-100 hover:border-primary-100" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm bg-white border-gray-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" className="" data-icon="lucide:hammer" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Erkend Vakmanschap</h3>
<p className="text-gray-500 text-sm leading-relaxed" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Ons team bestaat uit gecertificeerde dakdekkers die werken met hoogwaardige materialen zoals EPDM, pannen en leien.
                    </p>
</div>

<div className="p-6 rounded-2xl border hover:shadow-soft transition-all duration-300 group bg-gray-50 border-gray-100 hover:border-primary-100" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm bg-white border-gray-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-icon="lucide:clock-4" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Snelle Interventie</h3>
<p className="text-gray-500 text-sm leading-relaxed" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Dakschade wacht niet. Bij lekkages of stormschade zijn wij snel ter plaatse in uw regio om verdere schade te voorkomen.
                    </p>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 bg-gray-50" id="diensten" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2 text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Onze Diensten</h2>
<p className="text-gray-500" style={{transition: 'outline 0.1s ease-in-out'}}>Alles voor uw dak onder één dak.</p>
</div>
<a className="font-medium flex items-center gap-1 text-primary-600 hover:text-primary-700" href="#contact">
                    Bekijk alle mogelijkheden <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-xl p-6 border shadow-sm hover:shadow-md transition-all group cursor-default bg-white border-gray-200 hover:border-primary-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="mb-4 p-2 w-fit rounded-lg bg-blue-50 text-primary-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-icon="lucide:layout-template" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></g></svg>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Platte Daken</h3>
<p className="text-sm text-gray-500 mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>Specialist in roofing en EPDM. Waterdicht, duurzaam en perfect afgewerkt voor uw aanbouw of garage.</p>
</div>

<div className="rounded-xl p-6 border shadow-sm hover:shadow-md transition-all group cursor-default bg-white border-gray-200 hover:border-primary-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="mb-4 p-2 w-fit rounded-lg bg-blue-50 text-primary-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-icon="lucide:home" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Hellende Daken</h3>
<p className="text-sm text-gray-500 mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>Nieuwbouw of renovatie van pannendaken en leien. Wij zorgen voor een esthetisch en stormvast resultaat.</p>
</div>

<div className="rounded-xl p-6 border shadow-sm hover:shadow-md transition-all group cursor-default bg-white border-gray-200 hover:border-primary-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="mb-4 p-2 w-fit rounded-lg bg-blue-50 text-primary-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-icon="lucide:thermometer" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Dakisolatie</h3>
<p className="text-sm text-gray-500 mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>Bespaar direct op uw energiefactuur. Wij isoleren volgens de normen voor maximale premies en comfort.</p>
</div>

<div className="rounded-xl p-6 border shadow-sm hover:shadow-md transition-all group cursor-default bg-white border-gray-200 hover:border-primary-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="mb-4 p-2 w-fit rounded-lg bg-blue-50 text-primary-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-icon="lucide:wrench" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Herstellingen</h3>
<p className="text-sm text-gray-500 mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>Kleine herstellingen, lekkages dichten of dakgoten vervangen. Geen klus is te klein voor ons team.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-20 pb-20 bg-white" id="reviews" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16 text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Wat onze klanten zeggen</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="flex flex-col border rounded-2xl pt-6 pr-6 pb-6 pl-6 bg-gray-50 border-gray-100" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex gap-1 mb-4">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="w-[16px] h-[16px]" data-icon="lucide:star" data-icon-replaced="true" data-width="16" height="16" role="img" strokeWidth="2" style={{color: 'rgb(30, 41, 59)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="italic mb-6 text-sm flex-grow text-gray-600" style={{transition: 'outline 0.1s ease-in-out'}}>"KP Dakwerken heeft ons plat dak volledig vernieuwd met EPDM. Zeer proper gewerkt en alles netjes achtergelaten. Een aanrader!"</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs bg-primary-100 text-primary-600">MV</div>
<div>
<p className="text-sm font-semibold text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Marc Vermeulen</p>
<p className="text-xs text-gray-500" style={{transition: 'outline 0.1s ease-in-out'}}>Antwerpen</p>
</div>
</div>
</div>

<div className="flex flex-col p-6 rounded-2xl border bg-gray-50 border-gray-100" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex gap-1 mb-4">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="italic mb-6 text-sm flex-grow text-gray-600" style={{transition: 'outline 0.1s ease-in-out'}}>"Zeer snelle reactie na stormschade. Dezelfde dag nog een noodherstelling uitgevoerd en later alles definitief gerepareerd."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs bg-primary-100 text-primary-600">LJ</div>
<div className="">
<p className="text-sm font-semibold text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Lisa Janssen</p>
<p className="text-xs text-gray-500" style={{transition: 'outline 0.1s ease-in-out'}}>Breda</p>
</div>
</div>
</div>

<div className="flex flex-col p-6 rounded-2xl border bg-gray-50 border-gray-100" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex gap-1 mb-4">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="italic mb-6 text-sm flex-grow text-gray-600" style={{transition: 'outline 0.1s ease-in-out'}}>"Professioneel advies gekregen over isolatie. De werken zijn vlot verlopen en we merken het verschil direct in warmte."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs bg-primary-100 text-primary-600">TD</div>
<div className="">
<p className="text-sm font-semibold text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Thomas De Wit</p>
<p className="text-xs text-gray-500" style={{transition: 'outline 0.1s ease-in-out'}}>Gent</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t bg-gray-50 border-gray-200" id="faq" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12 text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Veelgestelde Vragen</h2>
<div className="space-y-4">
<details className="group rounded-lg border open:border-primary-200 transition-colors bg-white border-gray-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Hoe lang duurt een gemiddelde dakrenovatie?
                        <span className="transform group-open:rotate-180 transition-transform duration-200 text-gray-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" className="" data-icon="lucide:chevron-down" data-icon-replaced="true" data-icon-set="lucide" data-lucide="chevron-down" data-width="20" fill="none" height="20" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(163, 163, 163)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Dit hangt af van de grootte en het type dak. Een plat dak kan vaak in 2-3 dagen afgewerkt zijn, terwijl een volledig hellend dak 1 tot 2 weken in beslag kan nemen. We geven altijd een duidelijke planning vooraf.
                    </div>
</details>
<details className="group rounded-lg border open:border-primary-200 transition-colors bg-white border-gray-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Komen jullie ook voor kleine herstellingen?
                        <span className="transform group-open:rotate-180 transition-transform duration-200 text-gray-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Zeker! Of het nu gaat om een losse dakpan, een verstopte dakgoot of een kleine lek, wij helpen u graag verder om grotere schade te voorkomen.
                    </div>
</details>
<details className="group rounded-lg border open:border-primary-200 transition-colors bg-white border-gray-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Geven jullie garantie op de uitgevoerde werken?
                        <span className="transform group-open:rotate-180 transition-transform duration-200 text-gray-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Ja, wij bieden standaard 10 jaar garantie op al onze dakconstructies en waterdichting. Wij werken enkel met gecertificeerde materialen van hoge kwaliteit.
                    </div>
</details>
<details className="group rounded-lg border open:border-primary-200 transition-colors bg-white border-gray-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Werken jullie in heel Nederland en Vlaanderen?
                        <span className="transform group-open:rotate-180 transition-transform duration-200 text-gray-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Onze focus ligt voornamelijk op de regio Vlaanderen en Zuid-Nederland (Brabant/Zeeland) om snelle service te kunnen garanderen. Neem contact op om te zien of we in uw regio actief zijn.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-x-16 gap-y-16 items-start">

<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Vraag uw gratis offerte aan</h2>
<p className="text-gray-500 mb-8 text-lg" style={{transition: 'outline 0.1s ease-in-out'}}>Vul het formulier in en wij nemen binnen 24 uur contact met u op voor een vrijblijvende afspraak en inspectie.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-blue-50 text-primary-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-icon="lucide:phone" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Telefonisch</h3>
<p className="text-gray-500 text-sm mb-1" style={{transition: 'outline 0.1s ease-in-out'}}>Ma-Vr van 8:00 tot 18:00</p>
<a className="font-medium hover:underline text-primary-600" href="tel:+3212345678">+32 470 12 34 56</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-blue-50 text-primary-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-icon="lucide:mail" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Email</h3>
<p className="text-gray-500 text-sm mb-1" style={{transition: 'outline 0.1s ease-in-out'}}>Voor offertes en vragen</p>
<a className="font-medium hover:underline text-primary-600" href="mailto:info@kpdakwerken.nl">info@kpdakwerken.nl</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-blue-50 text-primary-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-gray-900" style={{transition: 'outline 0.1s ease-in-out'}}>Regio</h3>
<p className="text-gray-500 text-sm" style={{transition: 'outline 0.1s ease-in-out'}}>Actief in Vlaanderen &amp; Zuid-Nederland</p>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 border-gray-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm" style={{transition: 'outline 0.1s ease-in-out'}}>
<form "="" action="https://hook.eu1.make.com/y0bx8v29w92ecxt5pknrnkyok4b6q2me" className="space-y-4" id="contact-form" method=" POST">
<input name="_next" type="hidden" value="/thanks"/>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wide text-gray-700" htmlFor="first-name" style={{transition: 'outline 0.1s ease-in-out'}}>Voornaam</label>
<input className="w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm bg-white border-gray-200 text-gray-800" id="first-name" name="first_name" placeholder="Jan" style={{transition: 'outline 0.1s ease-in-out'}} type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wide text-gray-700" htmlFor="last-name" style={{transition: 'outline 0.1s ease-in-out'}}>Achternaam</label>
<input className="w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm bg-white border-gray-200 text-gray-800" id="last-name" name="last_name" placeholder="Peeters" style={{transition: 'outline 0.1s ease-in-out'}} type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="uppercase text-xs font-semibold text-gray-700 tracking-wide" htmlFor="email" style={{transition: 'outline 0.1s ease-in-out'}}>Email adres</label>
<input className="w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm bg-white border-gray-200 text-gray-800" id="email" name="email" placeholder="jan@voorbeeld.be" style={{transition: 'outline 0.1s ease-in-out'}} type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wide text-gray-700" htmlFor="phone" style={{transition: 'outline 0.1s ease-in-out'}}>Telefoonnummer</label>
<input className="focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm text-gray-800 bg-white w-full border-gray-200 border rounded-md pt-2.5 pr-4 pb-2.5 pl-4" id="phone" name="phone" placeholder="0470 12 34 56" style={{transition: 'outline 0.1s ease-in-out'}} type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wide text-gray-700" htmlFor="service" style={{transition: 'outline 0.1s ease-in-out'}}>Type Werk</label>
<div className="relative">
<select className="focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none text-sm text-gray-800 bg-white w-full border-gray-200 border rounded-md pt-2.5 pr-4 pb-2.5 pl-4" id="service" name="service" required="" style={{transition: 'outline 0.1s ease-in-out'}}>
<option value="">Selecteer een optie...</option>
<option value="plat_dak">Dakrenovatie (Plat)</option>
<option value="hellend_dak">Dakrenovatie (Hellend)</option>
<option value="reparatie">Reparatie / Lekkage</option>
<option value="isolatie">Isolatie</option>
<option value="overig">Overig</option>
</select>
<span className="absolute right-3 top-3 pointer-events-none text-gray-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wide text-gray-700" htmlFor="message" style={{transition: 'outline 0.1s ease-in-out'}}>Bericht</label>
<textarea className="w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm bg-white border-gray-200 text-gray-800" id="message" name="message" placeholder="Beschrijf uw project..." rows="4" style={{transition: 'outline 0.1s ease-in-out'}}></textarea>
</div>
<button className="w-full py-3 font-medium rounded-md shadow-lg transition-all flex items-center justify-center gap-2 mt-2 bg-primary-600 hover:bg-primary-700 text-white shadow-primary-600/20" style={{}} type="submit">
    Verstuur Aanvraag
    <svg aria-hidden="true" data-icon="lucide:send" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<p className="text-xs text-center mt-4 text-gray-400" style={{transition: 'outline 0.1s ease-in-out'}}>Wij respecteren uw
    privacy. Uw gegevens worden niet gedeeld.</p>
</form>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden bg-primary-900">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white" style={{}}>Klaar om uw dak te vernieuwen?</h2>
<p className="text-lg mb-10 max-w-2xl mx-auto text-blue-100" style={{transition: 'outline 0.1s ease-in-out'}}>Wacht niet tot kleine problemen grote kosten worden. Laat onze experts vandaag nog naar uw dak kijken.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-3.5 bg-accent-500 font-medium rounded-lg transition-all shadow-lg shadow-accent-500/20 flex items-center justify-center hover:bg-accent-600 text-white" href="#contact" style={{}}>
                    Nu Offerte Aanvragen
                </a>
</div>
</div>
</section>

<footer className="bg-gray-900 border-gray-800 border-t pt-16 pb-8" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4 text-white" style={{}}>
<svg aria-hidden="true" data-icon="lucide:home" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
<span className="text-xl font-semibold tracking-tighter">KP Dakwerken</span>
</div>
<p className="text-sm leading-relaxed text-gray-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Uw specialist in dakwerken, renovatie en isolatie. Kwaliteit en vertrouwen staan bij ons centraal.
                    </p>
</div>
<div className="">
<h4 className="font-medium mb-4 text-white" style={{}}>Diensten</h4>
<ul className="space-y-2 text-sm text-gray-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<li><a className="transition-colors hover:text-white" href="#" style={{}}>Platte daken</a></li>
<li><a className="transition-colors hover:text-white" href="#" style={{}}>Hellende daken</a></li>
<li><a className="transition-colors hover:text-white" href="#" style={{}}>Dakisolatie</a></li>
<li><a className="transition-colors hover:text-white" href="#" style={{}}>Dakgoten &amp; Zinkwerk</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-4 text-white" style={{}}>Bedrijf</h4>
<ul className="space-y-2 text-sm text-gray-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<li className=""><a className="transition-colors hover:text-white" href="#" style={{}}>Over Ons</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#" style={{}}>Projecten</a></li>
<li><a className="transition-colors hover:text-white" href="#" style={{}}>Reviews</a></li>
<li><a className="transition-colors hover:text-white" href="#" style={{}}>Vacatures</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-4 text-white" style={{}}>Contact</h4>
<ul className="space-y-2 text-sm text-gray-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
</path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
  Herenstraat 19, 9170 Sintgilliswaas
</li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            0470 12 34 56
                        </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
                            info@kpdakwerken.nl
                        </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:clock" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                            Ma-Vr: 08:00 - 18:00
                        </li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-gray-800" style={{transition: 'outline 0.1s ease-in-out'}}>
<p className="text-gray-500 text-xs" style={{transition: 'outline 0.1s ease-in-out'}}>© 2024 KP Dakwerken. Alle rechten voorbehouden.</p>
<div className="flex gap-6 text-gray-500 text-xs" style={{transition: 'outline 0.1s ease-in-out'}}>
<a className="transition-colors hover:text-white" href="#" style={{}}>Privacybeleid</a>
<a className="transition-colors hover:text-white" href="#" style={{}}>Algemene Voorwaarden</a>
<a className="transition-colors hover:text-white" href="#" style={{}}>Cookiebeleid</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
