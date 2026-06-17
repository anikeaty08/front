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



        // Iconify/Lucide Initialization
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // WhatsApp Logic
        function handleWhatsapp(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const product = document.getElementById('product').value;
            const message = document.getElementById('message').value;
            
            // Get selected services
            const checkboxes = document.querySelectorAll('input[name="services"]:checked');
            let services = [];
            checkboxes.forEach((checkbox) => {
                services.push(checkbox.value);
            });
            const servicesStr = services.length > 0 ? services.join(', ') : 'General Inquiry';

            // Construct Message
            const whatsappMessage = 
`*New Quotation Request*
---------------------
*Name:* ${name}
*Product:* ${product}
*Services:* ${servicesStr}
---------------------
*Message:*
${message}`;

            const encodedMessage = encodeURIComponent(whatsappMessage);
            const phoneNumber = "923555677007"; // Format: 923555677007
            
            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4c15c6b-8b1a-48c1-a1f7-6d391e819ac2_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">

<img alt="Logo" className="w-8 h-8 rounded-lg object-cover border border-white/10 shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/75a0e328-5cd8-4287-bb22-5aff9d72e72a_800w.png?w=800&amp;q=80" style={{}}/>
<span className="text-white font-medium tracking-tight text-lg">Shahensha<span className="text-slate-500">Global Trade</span></span>
</div>
<div className="hidden md:flex gap-8 text-sm font-normal text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#advantages">Why Us</a>
<a className="hover:text-white transition-colors" href="#team">Team</a>
</div>
<a className="hidden md:inline-flex items-center justify-center hover:bg-blue-500 transition-all text-xs font-medium text-white bg-blue-600 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]" href="#contact">
                Get Quotation
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-40">

<img alt="Khunjerab Pass Karakoram Highway" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&amp;w=2071&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/30"></div>
</div>
<div className="text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-slate-950/50 text-xs text-blue-400 mb-8 font-medium backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Gateway to Global Trade via Khunjerab Pass
            </div>
<h1 className="lg:text-7xl text-5xl font-medium text-white tracking-tight mb-6 drop-shadow-2xl">
                Bridging Borders,<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-slate-200">Mastering Logistics.</span>
</h1>
<p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-lg">
                Based in Sost Hunza. We provide efficient, time-tested import-export solutions, 
                product sourcing directly from China, and seamless customs handling for traders worldwide.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-950 bg-white hover:bg-slate-200 rounded-lg transition-all shadow-[0_0_20px_-10px_rgba(255,255,255,0.3)]" onclick="document.getElementById('contact').scrollIntoView()">
                    Start Shipping
                    <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/10 bg-white/5 hover:bg-white/10 rounded-lg transition-all backdrop-blur-sm" href="https://wa.me/923555677007" target="_blank">
<svg className="lucide lucide-message-circle w-4 h-4 mr-2" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                    WhatsApp Us
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Core Capabilities</h2>
<p className="text-slate-400 font-light max-w-xl">Comprehensive supply chain solutions tailored for the Pak-China Economic Corridor and beyond.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group hover:border-blue-500/50 transition-all duration-300 bg-slate-900/50 border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Product Sourcing</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Direct access to manufacturers and wholesalers in China. We handle customization based on your exact specifications.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-arrow-left-right w-5 h-5" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Import/Export</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Efficient, time-tested trade solutions based in Sost Hunza. We streamline the flow of goods across the border.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-file-check w-5 h-5" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Customs Handling</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Years of proven experience. Transparent, time-bound, and investor-friendly customs clearance services.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/50 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-truck w-5 h-5" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Freight Forwarding</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Reliable door-to-door goods forwarding services connecting Sost to destinations across the globe.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-t border-white/5" id="advantages">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
<div className="relative bg-slate-900 border border-white/10 rounded-xl p-8 h-full">
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-factory text-blue-500 w-6 h-6" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg>
<h3 className="text-xl font-medium text-white tracking-tight">Why Choose Chinese Manufacturers?</h3>
</div>
<ul className="space-y-4">
<li className="flex gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-slate-300 font-light"><strong className="text-white font-medium">Unmatched Quality-to-Price:</strong> Access premium manufacturing at competitive rates.</span>
</li>
<li className="flex gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-slate-300 font-light"><strong className="text-white font-medium">Total Customization:</strong> Ability to tailor products exactly to your market needs.</span>
</li>
<li className="flex gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-slate-300 font-light"><strong className="text-white font-medium">CPEC Advantage:</strong> Ease of access through the Pak-China Economic Corridor reduces transit times.</span>
</li>
</ul>
<div className="mt-8">
<img alt="Warehouse" className="w-full h-48 object-cover rounded-lg opacity-60 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
<div className="relative bg-slate-900 border border-white/10 rounded-xl p-8 h-full">
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-percent text-emerald-500 w-6 h-6" data-lucide="percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
<h3 className="text-xl font-medium text-white tracking-tight">Duty-Free Opportunity in Gilgit-Baltistan</h3>
</div>
<p className="text-sm text-slate-300 font-light mb-6 leading-relaxed">
                            Recent exemptions approved by the Prime Minister of Pakistan and FBR have created a unique 
                            <span className="text-white font-medium">duty-free market opportunity</span> for businesses operating in Gilgit-Baltistan. 
                            Leverage our local expertise to navigate these benefits legally and efficiently.
                        </p>
<div className="bg-slate-950/50 rounded-lg p-4 border border-white/5 flex gap-4 items-center">
<div className="bg-emerald-500/10 p-2 rounded-full">
<svg className="lucide lucide-trending-up w-5 h-5 text-emerald-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="text-xs text-slate-400">
                                Maximize ROI by utilizing Sost Dry Port's strategic tax incentives.
                            </div>
</div>
<div className="mt-8">
<img alt="Northern Pakistan Road" className="w-full h-48 object-cover rounded-lg opacity-60 grayscale hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca1f4f0f-7005-4928-b56e-94f6aa14585f_3840w.webp" style={{}}/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-950 border-white/5 border-t pt-24 pb-24" id="team">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-white mb-12 text-center">Leadership</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

<div className="flex items-center gap-6 p-6 rounded-xl border border-white/5 bg-slate-900/30">
<img alt="Ahmed Ullah Baig" className="w-20 h-20 object-cover border-slate-800 border-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fbacc428-3715-4e07-84a0-5c9e11512114_320w.jpg?w=800&amp;q=80" style={{}}/>
<div className="">
<h4 className="text-lg font-medium text-white tracking-tight">Ahmed Ullah Baig</h4>
<span className="text-xs font-medium uppercase tracking-wider text-blue-500">Managing Director</span>
<p className="text-xs font-light text-slate-500 mt-2">Expert in cross-border trade strategy, operations and B2B collaborations</p>
</div>
</div>

<div className="flex items-center gap-6 p-6 rounded-xl border border-white/5 bg-slate-900/30">
<img alt="Sameed Shah" className="w-20 h-20 rounded-full border-2 border-slate-800 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc29c227-63ed-4726-8c47-7c0b61bbaa86_320w.jpg?w=800&amp;q=80" style={{}}/>
<div className="">
<h4 className="text-lg font-medium text-white tracking-tight">Sameed Shah</h4>
<span className="text-xs font-medium uppercase tracking-wider text-emerald-500">CEO</span>
<p className="text-xs font-light text-slate-500 mt-2">Visionary leadership and expertise in transnational border trade</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">

<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative max-w-2xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Request a Quotation</h2>
<p className="text-slate-400 font-light">Select the services you need and reach us directly via WhatsApp.</p>
</div>
<form className="bg-slate-900 border border-white/10 rounded-2xl p-8 shadow-2xl" id="quoteForm" onsubmit="handleWhatsapp(event)">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Your Name</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Product Details</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700" id="product" placeholder="e.g. Electronics, Textiles" required="" type="text"/>
</div>
</div>

<div className="mb-8">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide block mb-4">Services Required (Select multiple)</label>
<div className="space-y-3">
<label className="flex items-center cursor-pointer group">
<input className="custom-checkbox hidden peer" name="services" type="checkbox" value="Sourcing"/>
<div className="w-5 h-5 border border-slate-700 rounded bg-slate-950 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-all mr-3 group-hover:border-slate-500">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm text-slate-300 font-light">Product Sourcing (China)</span>
</label>
<label className="flex items-center cursor-pointer group">
<input className="custom-checkbox hidden peer" name="services" type="checkbox" value="Customs"/>
<div className="w-5 h-5 border border-slate-700 rounded bg-slate-950 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-all mr-3 group-hover:border-slate-500">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm text-slate-300 font-light">Customs Clearance</span>
</label>
<label className="flex items-center cursor-pointer group">
<input className="custom-checkbox hidden peer" name="services" type="checkbox" value="Forwarding"/>
<div className="w-5 h-5 border border-slate-700 rounded bg-slate-950 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-all mr-3 group-hover:border-slate-500">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm text-slate-300 font-light">Goods Forwarding / Logistics</span>
</label>
</div>
</div>

<div className="mb-8 space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Additional Message</label>
<textarea className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700" id="message" placeholder="Any specific requirements or questions..." rows="4"></textarea>
</div>

<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-4 rounded-lg transition-all flex items-center justify-center gap-2 group" type="submit">
                    Send to WhatsApp
                    <svg className="lucide lucide-send w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-3 mb-2">

<img alt="Logo" className="hover:grayscale-0 transition-all w-6 h-6 object-cover border-white/10 border rounded-md grayscale" src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="font-medium text-white tracking-tight">Shahensha Global Trade private Limited</span>
</div>
<p className="text-xs font-light text-slate-500" style={{}}>Inspired by global leaders, built for local success.</p>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-slate-600 font-light">
                © 2023 Sost Logistics. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
