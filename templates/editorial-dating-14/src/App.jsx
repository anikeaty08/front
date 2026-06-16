import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const profileUpload = document.getElementById('photoUpload'); const galleryUpload = document.getElementById('galleryPhotoUpload'); const grid = document.getElementById('photoGrid'); const hero = document.getElementById('heroPhoto'); function renderGalleryPhotos(event, updateHero) { const files = Array.from(event.target.files).filter(file => file.type.startsWith('image/')).slice(0, 3); if (!files.length) return; grid.innerHTML = ''; files.forEach((file, index) => { const reader = new FileReader(); reader.onload = function (e) { if (index === 0 && updateHero) { hero.style.backgroundImage = `linear-gradient(180deg, rgba(16, 8, 5, 0.08), rgba(16, 8, 5, 0.74)), url('${e.target.result}')`; } const card = document.createElement('button'); card.className = `group relative min-h-[24rem] overflow-hidden rounded-[1.75rem] border border-[#f0b35f]/15 bg-[#1b0f0b] text-left shadow-2xl shadow-black/30 ${index === 0 ? 'lg:col-span-2' : ''}`; card.innerHTML = `<img src='${e.target.result}' alt='Uploaded portrait ${index + 1}' class='h-full min-h-[24rem] w-full object-cover opacity-90 transition duration-500 group-hover:scale-105' /><span class='absolute inset-0' style='background: linear-gradient(180deg, transparent 35%, rgba(19, 8, 5, 0.86));'></span><span class='absolute bottom-5 left-5 right-5'><span class='block text-xs uppercase tracking-[0.26rem] text-[#ffd894]/75'>frame ${String(index + 1).padStart(2, '0')}</span><span class='mt-1 block text-2xl font-medium tracking-tight text-[#fff4df]' style='font-family: Cormorant Garamond, serif;'>Uploaded portrait</span></span>`; grid.appendChild(card); }; reader.readAsDataURL(file); }); } if (profileUpload) { profileUpload.addEventListener('change', function (event) { renderGalleryPhotos(event, true); }); } if (galleryUpload) { galleryUpload.addEventListener('change', function (event) { renderGalleryPhotos(event, false); }); }
    


      (function () {
        const upload = document.getElementById('photoUpload');
        const preview = document.getElementById('selfPhotoPreview');
        const placeholder = document.getElementById('selfPhotoPlaceholder');

        if (!upload || !preview || !placeholder) return;

        upload.addEventListener('change', function (event) {
          const file = Array.from(event.target.files).find(file => file.type.startsWith('image/'));
          if (!file) return;

          const reader = new FileReader();
          reader.onload = function (e) {
            preview.src = e.target.result;
            preview.classList.remove('hidden');
            placeholder.classList.add('hidden');
          };
          reader.readAsDataURL(file);
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/844f6c75-4e4a-4254-ad80-043688b7658c_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<main className="relative min-h-screen overflow-hidden">
<div className="absolute inset-0 -z-10" style={{background: 'radial-gradient(circle at 20% 10%, rgba(190, 92, 42, 0.38), transparent 32%), radial-gradient(circle at 80% 20%, rgba(122, 27, 34, 0.42), transparent 34%), radial-gradient(circle at 50% 90%, rgba(218, 146, 70, 0.2), transparent 42%), linear-gradient(135deg, #210f0a 0%, #3b1714 42%, #15100e 100%)'}}></div>
<div className="absolute inset-0 -z-10 opacity-25" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '3rem 3rem'}}></div>
<div className="absolute left-0 top-0 h-full w-full -z-10 opacity-20" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(255, 193, 112, 0.16) 50%, transparent 100%)'}}></div>
<header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
<a className="group inline-flex items-center gap-3" href="#">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8b56d]/30 bg-[#2a1711]/70 shadow-2xl shadow-black/30">
<span className="text-sm font-semibold tracking-[-0.08em] text-[#f4c783] cursor-pointer" onclick="window.location.href='/home'" role="button">
              GD
            </span>
</span>
<span className="">
<span className="block text-xs uppercase tracking-[0.32rem] text-[#e8b56d]/80">
              private portfolio
            </span>
<span className="block text-sm font-medium text-[#fff1d8]">
              For intentional connection
            </span>
</span>
</a>
<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm text-[#f7dcc0]/70 transition hover:text-[#fff2d6]" href="#gallery">
            Gallery
          </a>
<a className="text-sm text-[#f7dcc0]/70 transition hover:text-[#fff2d6]" href="#facts">
            Facts
          </a>
<a className="text-sm text-[#f7dcc0]/70 transition hover:text-[#fff2d6]" href="#mood">
            Mood
          </a>
</nav>
<a className="inline-flex items-center gap-2 rounded-full border border-[#e8b56d]/30 bg-[#f0b35f]/10 px-4 py-2 text-sm font-medium text-[#fff0d3] shadow-xl shadow-black/20 backdrop-blur transition hover:bg-[#f0b35f]/20" href="#contact">
<iconify-icon className="text-lg text-[#f0b35f]" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
          Say hello
        </a>
</header>
<section className="grid gap-8 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-20 lg:pt-10 max-w-7xl mr-auto ml-auto pt-5 pr-5 pb-12 pl-5 gap-x-8 gap-y-8">
<div className="relative min-h-[40rem] overflow-hidden rounded-[2rem] border border-[#f0b35f]/20 bg-[#120b08]/60 shadow-2xl shadow-black/50 backdrop-blur-xl">
<div className="absolute inset-0 overflow-hidden bg-[#120b08] transition-all duration-500" id="heroPhoto" style={{background: 'radial-gradient(circle at 20% 18%, rgba(240, 179, 95, 0.34), transparent 30%), radial-gradient(circle at 78% 30%, rgba(122, 27, 34, 0.42), transparent 34%), radial-gradient(circle at 48% 78%, rgba(255, 216, 148, 0.18), transparent 36%), linear-gradient(135deg, #120805 0%, #32120d 48%, #090605 100%)'}}>
<svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-90" preserveaspectratio="xMidYMid slice" viewbox="0 0 900 700">
<defs>
<filter id="softGlow">
<fegaussianblur stddeviation="24"></fegaussianblur>
</filter>
<lineargradient id="goldLine" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#fff4df" stop-opacity="0"></stop>
<stop offset="48%" stop-color="#f0b35f" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#fff4df" stop-opacity="0"></stop>
</lineargradient>
</defs>
<rect fill="transparent" height="700" width="900"></rect>
<g filter="url(#softGlow)">
<circle cx="230" cy="180" fill="#f0b35f" opacity="0.16" r="130">
<animate attributename="r" dur="11s" repeatcount="indefinite" values="115;170;115"></animate>
<animate attributename="opacity" dur="11s" repeatcount="indefinite" values="0.12;0.24;0.12"></animate>
</circle>
<circle cx="690" cy="225" fill="#7a1b22" opacity="0.26" r="160">
<animate attributename="cx" dur="14s" repeatcount="indefinite" values="690;635;690"></animate>
<animate attributename="opacity" dur="14s" repeatcount="indefinite" values="0.18;0.32;0.18"></animate>
</circle>
<circle cx="470" cy="560" fill="#da9246" opacity="0.14" r="210">
<animate attributename="cy" dur="16s" repeatcount="indefinite" values="560;500;560"></animate>
</circle>
</g>
<g opacity="0.55">
<ellipse cx="450" cy="350" fill="none" rx="265" ry="120" stroke="#f0b35f" stroke-opacity="0.2" strokeWidth="1.2">
<animatetransform attributename="transform" dur="36s" from="0 450 350" repeatcount="indefinite" to="360 450 350" type="rotate"></animatetransform>
</ellipse>
<ellipse cx="450" cy="350" fill="none" rx="330" ry="155" stroke="#fff4df" stroke-opacity="0.12" strokeWidth="1">
<animatetransform attributename="transform" dur="48s" from="360 450 350" repeatcount="indefinite" to="0 450 350" type="rotate"></animatetransform>
</ellipse>
</g>
<g opacity="0.22">
<path d="M80 520 C230 420, 350 610, 520 475 S740 430, 830 565" fill="none" stroke="url(#goldLine)" strokeWidth="2">
<animate attributename="opacity" dur="8s" repeatcount="indefinite" values="0.12;0.35;0.12"></animate>
</path>
<path d="M40 310 C190 245, 320 390, 475 305 S710 220, 860 345" fill="none" stroke="url(#goldLine)" strokeWidth="1.5">
<animate attributename="opacity" dur="10s" repeatcount="indefinite" values="0.08;0.28;0.08"></animate>
</path>
</g>
<g opacity="0.12">
<circle cx="170" cy="585" fill="#fff4df" r="3">
<animate attributename="opacity" dur="5s" repeatcount="indefinite" values="0.05;0.55;0.05"></animate>
</circle>
<circle cx="760" cy="115" fill="#ffd894" r="4">
<animate attributename="opacity" dur="6s" repeatcount="indefinite" values="0.08;0.62;0.08"></animate>
</circle>
<circle cx="610" cy="610" fill="#fff4df" r="2.5">
<animate attributename="opacity" dur="7s" repeatcount="indefinite" values="0.05;0.5;0.05"></animate>
</circle>
</g>
</svg>
</div>
<div className="absolute inset-0" style={{background: 'linear-gradient(90deg, rgba(27, 15, 11, 0.34), transparent 42%, rgba(27, 15, 11, 0.42))'}}></div>
<div className="relative z-10 flex h-full min-h-[40rem] flex-col justify-between p-5 sm:p-8">
<div className="flex items-start justify-between gap-4">
<div className="rounded-full border border-[#ffe0a3]/20 bg-[#1b0f0b]/55 px-4 py-2 backdrop-blur-xl">
<p className="text-xs uppercase tracking-[0.32rem] text-[#ffd894]/80">
                  editorial dating profile
                </p>
</div>
<label className="cursor-pointer rounded-full border border-[#ffe0a3]/20 bg-[#1b0f0b]/55 px-4 py-2 text-sm font-medium text-[#fff1dc] backdrop-blur-xl transition hover:bg-[#2b1710]/75" htmlFor="photoUpload">
<span className="inline-flex items-center gap-2">
<iconify-icon className="text-lg text-[#f0b35f]" icon="solar:upload-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                  Upload photos
                </span>
<input accept="image/*" className="hidden" id="photoUpload" multiple="" type="file"/>
</label>
</div>
<label className="mx-auto my-8 block w-full max-w-xs cursor-pointer overflow-hidden rounded-[1.5rem] border border-[#ffe0a3]/20 bg-[#1b0f0b]/45 shadow-2xl shadow-black/35 backdrop-blur-xl transition hover:bg-[#2b1710]/60 sm:ml-auto sm:mr-0" htmlFor="photoUpload" id="selfPhotoDrop">
<img alt="Your photo preview" className="hidden h-full min-h-[24rem] w-full object-cover" id="selfPhotoPreview" src=""/>
<span className="flex min-h-[24rem] flex-col items-center justify-center gap-3 p-6 text-center" id="selfPhotoPlaceholder">
<iconify-icon className="text-4xl text-[#f0b35f]" icon="solar:camera-add-linear" strokeWidth="1.5"></iconify-icon>
<span className="block text-xs uppercase tracking-[0.28rem] text-[#ffd894]/75">
                  add your photo
                </span>
<span className="block text-sm leading-6 text-[#f7dcc0]/75">
                  Click here to upload a photo of yourself.
                </span>
</span>
</label>
<div className="mb-6 grid gap-3 sm:grid-cols-2">
<div className="rounded-[1.25rem] border border-[#ffe0a3]/20 bg-[#1b0f0b]/45 p-4 shadow-2xl shadow-black/25 backdrop-blur-xl">
<p className="text-xs uppercase tracking-[0.24rem] text-[#ffd894]/75">
                  about me
                </p>
<p className="mt-3 text-sm leading-6 text-[#f7dcc0]/80 outline-none" contenteditable="true">
                  Travel; fitness; self care; chaos; money and commitment.
                </p>
</div>
<div className="rounded-[1.25rem] border border-[#ffe0a3]/20 bg-[#1b0f0b]/45 p-4 shadow-2xl shadow-black/25 backdrop-blur-xl">
<p className="text-xs uppercase tracking-[0.24rem] text-[#ffd894]/75">
                  ideal match
                </p>
<p className="mt-3 text-sm leading-6 text-[#f7dcc0]/80 outline-none" contenteditable="true">
                  I prefer space although I am very independent; love to me is
                  partly yearning and moments of us.
                </p>
</div>
</div>
<div className="max-w-2xl">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ffe0a3]/20 bg-[#1b0f0b]/50 px-3 py-1.5 backdrop-blur">
<span className="h-2 w-2 rounded-full bg-[#d83b2e] shadow-[0_0_1rem_rgba(216,59,46,0.9)]"></span>
<span className="text-xs uppercase tracking-[0.24rem] text-[#ffe2ad]/75">
                  available for one exceptional match
                </span>
</div>
<h1 className="max-w-3xl text-5xl font-medium tracking-tight text-[#fff4df] sm:text-6xl lg:text-7xl" style={{fontFamily: '"Cormorant Garamond", serif'}}>
                Greg
              </h1>
<p className="mt-4 max-w-xl text-base leading-7 text-[#f7dcc0]/80 sm:text-lg">
                Warm, cinematic, quietly magnetic. Looking for chemistry with
                wit, depth, style, and the kind of conversation that feels like
                a late-night record playing in another room.
              </p>
</div>
</div>
</div>
<aside className="rounded-[2rem] border border-[#f0b35f]/20 bg-[#26120d]/70 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-7" id="facts">
<div className="flex items-center justify-between gap-4 border-b border-[#f0b35f]/15 pb-5">
<div className="">
<p className="text-xs uppercase tracking-[0.32rem] text-[#e8b56d]/75">
                Dossier
              </p>
<h2 className="mt-2 text-3xl font-medium tracking-tight text-[#fff0d6] sm:text-4xl" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                The essentials
              </h2>
</div>
<div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f0b35f]/25 bg-[#f0b35f]/10">
<iconify-icon className="text-2xl text-[#f0b35f]" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="mt-6 grid gap-3">
<div className="grid grid-cols-[8rem_1fr] gap-4 rounded-2xl border border-[#f0b35f]/10 bg-[#160b08]/40 p-4">
<span className="text-xs uppercase tracking-[0.18rem] text-[#e8b56d]/60">
                Age
              </span>
<span className="text-sm font-medium text-[#fff1dc] outline-none" contenteditable="true">
                Twenty Something
              </span>
</div>
<div className="grid grid-cols-[8rem_1fr] gap-4 bg-[#160b08]/40 border-[#f0b35f]/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4">
<span className="text-xs uppercase tracking-[0.18rem] text-[#e8b56d]/60">
                Location
              </span>
<span className="text-sm font-medium text-[#fff1dc] outline-none" contenteditable="true">
                London, often in Paris sometimes New York
              </span>
</div>
<div className="grid grid-cols-[8rem_1fr] bg-[#160b08]/40 border-[#f0b35f]/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4">
<span className="text-xs uppercase tracking-[0.18rem] text-[#e8b56d]/60">
                Height
              </span>
<span className="text-sm font-medium text-[#fff1dc] outline-none" contenteditable="true">
                6ft
              </span>
</div>
<div className="grid grid-cols-[8rem_1fr] gap-4 rounded-2xl border border-[#f0b35f]/10 bg-[#160b08]/40 p-4">
<span className="text-xs uppercase tracking-[0.18rem] text-[#e8b56d]/60">
                Work
              </span>
<span className="text-sm font-medium text-[#fff1dc] outline-none" contenteditable="true">
                Creative director, occasional model, millionaire
              </span>
</div>
<div className="grid grid-cols-[8rem_1fr] gap-4 rounded-2xl border border-[#f0b35f]/10 bg-[#160b08]/40 p-4">
<span className="text-xs uppercase tracking-[0.18rem] text-[#e8b56d]/60">
                Looking for
              </span>
<span className="text-sm font-medium text-[#fff1dc] outline-none" contenteditable="true">
                Elegant chaos, emotional intelligence, real plans
              </span>
</div>
</div>
<div className="mt-6 rounded-[1.5rem] border border-[#f0b35f]/15 bg-[#100805]/45 p-5">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#f0b35f]" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium text-[#fff0d6]">
                Signature details
              </h3>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-full border border-[#e8b56d]/20 bg-[#e8b56d]/10 px-3 py-1.5 text-xs font-medium text-[#ffe6ba] outline-none" contenteditable="true">
                jazz bars
              </span>
<span className="rounded-full border border-[#e8b56d]/20 bg-[#e8b56d]/10 px-3 py-1.5 text-xs font-medium text-[#ffe6ba] outline-none" contenteditable="true">
                vintage coats
              </span>
<span className="rounded-full border border-[#e8b56d]/20 bg-[#e8b56d]/10 px-3 py-1.5 text-xs font-medium text-[#ffe6ba] outline-none" contenteditable="true">
                black coffee
              </span>
<span className="rounded-full border border-[#e8b56d]/20 bg-[#e8b56d]/10 px-3 py-1.5 text-xs font-medium text-[#ffe6ba] outline-none" contenteditable="true">
                dry humour
              </span>
<span className="rounded-full border border-[#e8b56d]/20 bg-[#e8b56d]/10 px-3 py-1.5 text-xs font-medium text-[#ffe6ba] outline-none" contenteditable="true">
                slow Sundays
              </span>
</div>
</div>
</aside>
</section>
<section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10" id="gallery">
<div className="mb-7 flex flex-col justify-between gap-4 border-t border-[#f0b35f]/15 pt-8 sm:flex-row sm:items-end">
<div className="">
<p className="text-xs uppercase tracking-[0.32rem] text-[#e8b56d]/75">
              visual portfolio
            </p>
<h2 className="mt-2 text-4xl font-medium tracking-tight text-[#fff0d6] sm:text-5xl" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              Selected frames
            </h2>
</div>
<div className="flex max-w-md flex-col items-start gap-3 sm:items-end">
<p className="text-sm leading-6 text-[#f7dcc0]/65">1 in a million</p>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" id="photoGrid">
<button className="group relative min-h-[24rem] overflow-hidden rounded-[1.75rem] border border-[#f0b35f]/15 bg-[#1b0f0b] text-left shadow-2xl shadow-black/30 lg:col-span-2">
<img alt="Portrait placeholder" className="h-full min-h-[24rem] w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/844f6c75-4e4a-4254-ad80-043688b7658c_1600w.jpg"/>
<span className="absolute inset-0" style={{background: 'linear-gradient(180deg, transparent 35%, rgba(19, 8, 5, 0.86))'}}></span>
<span className="absolute bottom-5 left-5 right-5">
<span className="block text-xs uppercase tracking-[0.26rem] text-[#ffd894]/75">
                frame 01
              </span>
<span className="mt-1 block text-2xl font-medium tracking-tight text-[#fff4df]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                The arrival
              </span>
</span>
</button>
<button className="group relative min-h-[24rem] overflow-hidden rounded-[1.75rem] border border-[#f0b35f]/15 bg-[#1b0f0b] text-left shadow-2xl shadow-black/30">
<img alt="Editorial placeholder" className="h-full min-h-[24rem] w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1df82ea0-248e-4f69-b366-8dfcc90580c0_800w.png"/>
<span className="absolute inset-0" style={{background: 'linear-gradient(180deg, transparent 35%, rgba(19, 8, 5, 0.86))'}}></span>
<span className="absolute bottom-5 left-5 right-5">
<span className="block text-xs uppercase tracking-[0.26rem] text-[#ffd894]/75">
                frame 02
              </span>
<span className="mt-1 block text-2xl font-medium tracking-tight text-[#fff4df]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Velvet hour
              </span>
</span>
</button>
<button className="group relative min-h-[24rem] overflow-hidden rounded-[1.75rem] border border-[#f0b35f]/15 bg-[#1b0f0b] text-left shadow-2xl shadow-black/30">
<img alt="Fashion placeholder" className="h-full min-h-[24rem] w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7f3d313-fd11-4a78-a298-b28df62064ce_800w.png"/>
<span className="absolute inset-0" style={{background: 'linear-gradient(180deg, transparent 35%, rgba(19, 8, 5, 0.86))'}}></span>
<span className="absolute bottom-5 left-5 right-5">
<span className="block text-xs uppercase tracking-[0.26rem] text-[#ffd894]/75">
                frame 03
              </span>
<span className="mt-1 block text-2xl font-medium tracking-tight text-[#fff4df]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Red room
              </span>
</span>
</button>
</div>
</section>
<section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10" id="mood">
<div className="grid gap-4 lg:grid-cols-3">
<div className="rounded-[2rem] border border-[#f0b35f]/15 bg-[#2a120c]/65 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
<div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8b56d]/20 bg-[#e8b56d]/10">
<iconify-icon className="text-2xl text-[#f0b35f]" icon="solar:vinyl-record-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mt-5 text-2xl font-medium tracking-tight text-[#fff0d6]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              Date soundtrack
            </h3>
<p className="mt-3 text-sm leading-6 text-[#f7dcc0]/70 outline-none" contenteditable="true">
              House of woodcock - Greenwood
            </p>
</div>
<div className="rounded-[2rem] border border-[#f0b35f]/15 bg-[#2a120c]/65 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
<div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8b56d]/20 bg-[#e8b56d]/10">
<iconify-icon className="text-2xl text-[#f0b35f]" icon="solar:cup-hot-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mt-5 text-2xl font-medium tracking-tight text-[#fff0d6]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              Small luxuries
            </h3>
<p className="mt-3 text-sm leading-6 text-[#f7dcc0]/70 outline-none" contenteditable="true">
              Fresh linen, old hotels, handwritten notes, films with strange
              endings, and breakfast at midnight.
            </p>
</div>
<div className="rounded-[2rem] border border-[#f0b35f]/15 bg-[#2a120c]/65 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
<div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8b56d]/20 bg-[#e8b56d]/10">
<iconify-icon className="text-2xl text-[#f0b35f]" icon="solar:chat-round-like-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mt-5 text-2xl font-medium tracking-tight text-[#fff0d6]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              Green flags
            </h3>
<p className="mt-3 text-sm leading-6 text-[#f7dcc0]/70 outline-none" contenteditable="true">
              Kind to strangers, direct without being cold, curious without
              performing, stylish without trying too hard.
            </p>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10" id="contact">
<div className="overflow-hidden rounded-[2rem] border border-[#f0b35f]/20 bg-[#120907]/70 shadow-2xl shadow-black/50 backdrop-blur-xl">
<div className="grid lg:grid-cols-[0.85fr_1.15fr]">
<div className="p-6 sm:p-8 lg:p-10">
<p className="text-xs uppercase tracking-[0.32rem] text-[#e8b56d]/75">
                final note
              </p>
<h2 className="mt-3 text-4xl font-medium tracking-tight text-[#fff0d6] sm:text-5xl" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                If this feels like your scene, send me your details.
              </h2>
<p className="mt-5 text-sm leading-7 text-[#f7dcc0]/70">
                Heres to new experiences.
              </p>
</div>
<div className="border-t border-[#f0b35f]/15 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
<div className="grid gap-4 sm:grid-cols-2">
<a className="group rounded-[1.5rem] border border-[#f0b35f]/15 bg-[#2a120c]/60 p-5 transition hover:bg-[#35170f]/75" href="mailto:hello@example.com">
<div className="flex items-center justify-between gap-4">
<span className="text-sm font-medium text-[#fff1dc]">
                      Email
                    </span>
<iconify-icon className="text-2xl text-[#f0b35f] transition group-hover:translate-x-1" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="mt-4 text-sm text-[#f7dcc0]/65 outline-none" contenteditable="true">
                    hello@example.com
                  </p>
</a>
<a className="group rounded-[1.5rem] border border-[#f0b35f]/15 bg-[#2a120c]/60 p-5 transition hover:bg-[#35170f]/75" href="#">
<div className="flex items-center justify-between gap-4">
<span className="text-sm font-medium text-[#fff1dc]">
                      Instagram
                    </span>
<iconify-icon className="text-2xl text-[#f0b35f] transition group-hover:translate-x-1" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="mt-4 text-sm text-[#f7dcc0]/65 outline-none" contenteditable="true">
                    @gregory.dearham
                  </p>
</a>
</div>
<div className="mt-4 rounded-[1.5rem] border border-[#f0b35f]/15 bg-[#2a120c]/60 p-5">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#f0b35f]" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#fff1dc]">
                    Opening line I’ll always answer
                  </span>
</div>
<p className="mt-4 text-sm leading-6 text-[#f7dcc0]/70 outline-none" contenteditable="true">
                  “Tell me the most cinematic thing that happened to you this
                  week.”
                </p>
</div>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
