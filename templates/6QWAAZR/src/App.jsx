import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            inter: ['Inter', 'sans-serif']
          },
          colors: {
            brand: {
              500: '#FFE600'
            }
          }
        }
      }
    }
  


    lucide.createIcons();
    document.getElementById('year').textContent = new Date().getFullYear();
    
    document.getElementById('download').addEventListener('click', function (e) {
      e.preventDefault();
      const blob = new Blob([document.documentElement.outerHTML], {type: 'text/html'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'hypercam-pro-specs.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="sm:px-6 sm:py-8 flex h-16 max-w-3xl bg-white/5 border-white/5 border rounded-3xl mt-4 mr-auto ml-auto pt-2 pr-4 pb-2 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<h1 className="sm:text-2xl text-xl font-semibold text-neutral-100 tracking-tighter">Hyper <span className="text-brand-500">Pro</span></h1>
</div>
<nav className="hidden md:flex gap-6 lg:gap-8 text-sm">
<a className="hover:text-neutral-100 transition" href="#">Overview</a>
<a className="hover:text-neutral-100 transition" href="#">Materials</a>
<a className="hover:text-neutral-100 transition" href="#">Specifications</a>
<a className="hover:text-neutral-100 transition" href="#">Customize</a>
</nav>
<button className="inline-flex gap-2 bg-brand-500 hover:bg-brand-400 transition sm:px-4 text-sm font-medium text-neutral-950 rounded-xl pt-2 pr-3 pb-2 pl-3 items-center">
<span className="hidden sm:inline">Buy Now</span>
<span className="sm:hidden">Buy</span>
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</button>
</header>
<main className="container sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 mt-12 mr-auto ml-auto pr-4 pb-24 pl-4">

<section className="">
<div className="flex items-center gap-3 mb-6 sm:mb-8">
<h2 className="sm:text-3xl text-2xl font-normal text-neutral-100 tracking-tight">Premium Materials</h2>
</div>
<dl className="divide-y divide-neutral-800 text-sm">
<div className="py-3 sm:py-4 sm:grid sm:grid-cols-2 sm:gap-4">
<dt className="flex items-center gap-2 text-neutral-400 mb-1 sm:mb-0">
<svg className="lucide lucide-square w-4 h-4" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
            Front Housing
          </dt>
<dd className="text-right sm:text-left font-medium">Aerospace-grade aluminum 7075-T6</dd>
</div>
<div className="py-3 sm:py-4 sm:grid sm:grid-cols-2 sm:gap-4">
<dt className="flex items-center gap-2 text-neutral-400 mb-1 sm:mb-0">
<svg className="lucide lucide-circle w-4 h-4" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
            Rear Panel
          </dt>
<dd className="text-right sm:text-left font-medium">Anodized aluminum with ceramic coating</dd>
</div>
<div className="py-3 sm:py-4 sm:grid sm:grid-cols-2 sm:gap-4">
<dt className="flex items-center gap-2 text-neutral-400 mb-1 sm:mb-0">
<svg className="lucide lucide-paperclip w-4 h-4" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
            Universal Clip
          </dt>
<dd className="text-right sm:text-left font-medium">Medical-grade silicone with steel core</dd>
</div>
<div className="py-3 sm:py-4 sm:grid sm:grid-cols-2 sm:gap-4">
<dt className="flex items-center gap-2 text-neutral-400 mb-1 sm:mb-0">
<svg className="lucide lucide-eye w-4 h-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
            Lens Protection
          </dt>
<dd className="text-right sm:text-left font-medium">Sapphire crystal with anti-reflective coating</dd>
</div>
<div className="py-3 sm:py-4 sm:grid sm:grid-cols-2 sm:gap-4">
<dt className="flex items-center gap-2 text-neutral-400 mb-1 sm:mb-0">
<svg className="lucide lucide-cable w-4 h-4" data-lucide="cable" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"></path><path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"></path><path d="M21 21v-2h-4"></path><path d="M3 5h4V3"></path><path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"></path></svg>
            Cable
          </dt>
<dd className="text-right sm:text-left font-medium">Braided nylon with gold-plated USB-C</dd>
</div>
</dl>
<div className="flex items-center gap-4 mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
<svg className="lucide lucide-leaf w-5 h-5 text-green-400" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<div>
<span className="text-sm font-medium text-green-400">98% Recyclable Materials</span>
<p className="text-xs text-green-300/70 mt-1">Carbon neutral manufacturing &amp; packaging</p>
</div>
</div>
</section><section className="grid grid-cols-2 gap-4 sm:gap-6 bg-white/5 border-white/5 border rounded-3xl pt-4 pr-4 pb-4 pl-4 items-center">
<div className="aspect-square rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-4 border-2 border-neutral-700 rounded-full opacity-50"></div>
<div className="absolute inset-8 border border-brand-500/30 rounded-full"></div>
<svg className="lucide lucide-camera w-8 sm:w-10 h-8 sm:h-10 text-brand-500 group-hover:scale-110 transition-transform" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<div className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
</div>
<div className="aspect-square rounded-xl border border-neutral-800 bg-gradient-to-bl from-neutral-900 to-neutral-800 flex items-center justify-center relative overflow-hidden group">
<div className="absolute top-4 w-8 sm:w-12 h-1.5 sm:h-2 rounded-full bg-brand-500/80"></div>
<svg className="lucide lucide-mic w-8 sm:w-10 h-8 sm:h-10 text-neutral-600 group-hover:text-brand-500 transition-colors" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
<div className="absolute bottom-3 left-3 flex gap-1">
<div className="w-1 h-1 bg-brand-500/60 rounded-full"></div>
<div className="w-1 h-1 bg-brand-500/40 rounded-full"></div>
<div className="w-1 h-1 bg-brand-500/20 rounded-full"></div>
</div>
</div>
</section>


<section className="relative flex border-white/5 border rounded-3xl pt-4 pr-4 pb-4 pl-4 items-center justify-center bg-white/5">
<div className="aspect-square w-full max-w-sm rounded-xl border border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center relative overflow-hidden">
<div className="w-4 sm:w-6 h-32 sm:h-40 bg-gradient-to-b from-neutral-700 via-brand-500/20 to-neutral-700 rounded-full relative">
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-500 rounded-full"></div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-3 h-1 bg-neutral-600 rounded"></div>
</div>
</div>
</section>

<section className="">
<div className="flex items-center gap-3 mb-6 sm:mb-8">
<h2 className="sm:text-3xl text-2xl font-normal text-neutral-100 tracking-tight">Technical Specifications</h2>
</div>
<dl className="divide-y divide-neutral-800 text-sm">
<div className="py-3 sm:py-4 sm:grid sm:grid-cols-2 sm:gap-4">
<dt className="flex items-center gap-2 text-neutral-400 mb-1 sm:mb-0">
<svg className="lucide lucide-move-vertical w-4 h-4" data-lucide="move-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="m8 18 4 4 4-4"></path><path d="m8 6 4-4 4 4"></path></svg>
            Height
          </dt>
<dd className="text-right sm:text-left font-medium">42 mm (1.65 in)</dd>
</div>
<div className="py-3 sm:py-4 sm:grid sm:grid-cols-2 sm:gap-4">
<dt className="flex items-center gap-2 text-neutral-400 mb-1 sm:mb-0">
<svg className="lucide lucide-move-horizontal w-4 h-4" data-lucide="move-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 8 4 4-4 4"></path><path d="M2 12h20"></path><path d="m6 8-4 4 4 4"></path></svg>
            Width
          </dt>
<dd className="text-right sm:text-left font-medium">58 mm (2.28 in)</dd>
</div>
<div className="py-3 sm:py-4 sm:grid sm:grid-cols-2 sm:gap-4">
<dt className="flex items-center gap-2 text-neutral-400 mb-1 sm:mb-0">
<svg className="lucide lucide-box w-4 h-4" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
            Depth
          </dt>
<dd className="text-right sm:text-left font-medium">28 mm (1.10 in)</dd>
</div>
<div className="py-3 sm:py-4 sm:grid sm:grid-cols-2 sm:gap-4">
<dt className="flex items-center gap-2 text-neutral-400 mb-1 sm:mb-0">
<svg className="lucide lucide-weight w-4 h-4" data-lucide="weight" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="3"></circle><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"></path></svg>
            Device Weight
          </dt>
<dd className="text-right sm:text-left font-medium">68 g (2.4 oz)</dd>
</div>
<div className="py-3 sm:py-4 sm:grid sm:grid-cols-2 sm:gap-4">
<dt className="flex items-center gap-2 text-neutral-400 mb-1 sm:mb-0">
<svg className="lucide lucide-usb w-4 h-4" data-lucide="usb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="7" r="1"></circle><circle cx="4" cy="20" r="1"></circle><path d="M4.7 19.3 19 5"></path><path d="m21 3-3 1 2 2Z"></path><path d="M9.26 7.68 5 12l2 5"></path><path d="m10 14 5 2 3.5-3.5"></path><path d="m18 12 1-1 1 1-1 1Z"></path></svg>
            Cable Length
          </dt>
<dd className="text-right sm:text-left font-medium">2.5 m (8.2 ft) + 15 g connector</dd>
</div>
<div className="py-3 sm:py-4 sm:grid sm:grid-cols-2 sm:gap-4">
<dt className="flex items-center gap-2 text-neutral-400 mb-1 sm:mb-0">
<svg className="lucide lucide-maximize w-4 h-4" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>
            Max Clip Opening
          </dt>
<dd className="text-right sm:text-left font-medium">45° (supports up to 32mm thick displays)</dd>
</div>
<div className="py-3 sm:py-4 sm:grid sm:grid-cols-2 sm:gap-4">
<dt className="flex items-center gap-2 text-neutral-400 mb-1 sm:mb-0">
<svg className="lucide lucide-thermometer w-4 h-4" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
            Operating Range
          </dt>
<dd className="text-right sm:text-left font-medium">-10°C to 60°C (14°F to 140°F)</dd>
</div>
</dl>
</section>

<section className="col-span-full bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8">
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-settings w-6 h-6 text-brand-500" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<h2 className="text-xl sm:text-2xl font-medium text-neutral-100">Advanced Configuration</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<label className="checkbox inline-flex items-center gap-3 cursor-pointer select-none p-3 rounded-lg hover:bg-neutral-800/50 transition">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<div>
<span className="text-sm font-medium">Noise Cancellation</span>
<p className="text-xs text-neutral-500">AI-powered microphone</p>
</div>
</label>

<div className="p-3 rounded-lg hover:bg-neutral-800/50 transition">
<label className="flex items-center gap-2 text-sm font-medium mb-3" htmlFor="zoom">
<svg className="lucide lucide-zoom-in w-4 h-4" data-lucide="zoom-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>
            Digital Zoom
          </label>
<input className="w-full" id="zoom" max="8" min="1" step="1" type="range" value="3"/>
<div className="flex justify-between text-xs text-neutral-500 mt-1">
<span>1x</span>
<span>8x</span>
</div>
</div>
</div>
<div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
<div className="flex items-start gap-3">
<svg className="lucide lucide-info w-5 h-5 text-blue-400 mt-0.5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<div>
<p className="text-sm font-medium text-blue-400">Pro Tip</p>
<p className="text-xs text-blue-300/80 mt-1">These settings can be adjusted in real-time using the HyperCam Control Center software or saved as custom profiles.</p>
</div>
</div>
</div>
</section>
</main>
<footer className="container mx-auto px-4 sm:px-6 py-8 border-t border-neutral-800">
<div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
<div className="flex items-center gap-4">
<p>© <span id="year">2025</span> Hyper Technologies, Inc.</p>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-300 transition" href="#">Privacy</a>
<a className="hover:text-neutral-300 transition" href="#">Support</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="flex items-center gap-2 hover:text-neutral-300 transition" href="#">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span>Datasheet PDF</span>
</a>
<a className="flex items-center gap-2 text-brand-500 hover:text-brand-400 transition" href="#" id="download">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span>Save Specs</span>
</a>
</div>
</div>
</footer>



    </>
  );
}
