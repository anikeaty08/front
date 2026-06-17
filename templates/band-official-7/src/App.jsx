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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed inset-0 z-[-1] pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black"></div>

<nav className="fixed w-full z-50 top-0 border-b border-zinc-800 bg-black/95">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="hidden md:flex flex-1 gap-8 text-sm font-medium text-zinc-400 uppercase tracking-widest">
<a className="hover:text-red-600 transition-colors" href="#music">Media</a>
<a className="hover:text-red-600 transition-colors" href="#schedule">Tour</a>
</div>

<a className="text-white font-semibold tracking-tighter text-3xl uppercase flex items-center justify-center shrink-0" href="#" style={{fontFamily: '\'Oswald\', sans-serif'}}>
                Rattlesnake
            </a>

<div className="hidden md:flex flex-1 justify-end items-center gap-8 text-sm font-medium text-zinc-400 uppercase tracking-widest">
<a className="hover:text-red-600 transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-red-600 transition-colors" href="#booking">Booking</a>
<div className="flex items-center gap-4 border-l border-zinc-800 pl-8">
<a className="hover:text-red-600 transition-colors flex items-center" href="#music">
<iconify-icon className="text-xl" icon="solar:videocamera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="hover:text-red-600 transition-colors flex items-center" href="https://www.instagram.com/officialrattlesnake/" target="_blank">
<iconify-icon className="text-xl" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-40 pb-32 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center border-b border-zinc-800">
<div className="absolute inset-0 z-[-1] opacity-30 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #18181b 10px, #18181b 20px)'}}></div>
<h1 className="text-7xl md:text-9xl lg:text-[10rem] font-semibold tracking-tighter text-white uppercase mb-6 leading-none" style={{fontFamily: '\'Oswald\', sans-serif'}}>
            Rattlesnake
        </h1>
<p className="text-lg md:text-2xl text-zinc-400 font-medium max-w-2xl mx-auto mb-16 tracking-widest uppercase">
            Official Website
        </p>

<div className="w-full max-w-4xl mx-auto border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden aspect-video">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/bML5d-rsbp0" title="YouTube video player"></iframe>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto border-b border-zinc-800" id="music">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white uppercase mb-16 text-center" style={{fontFamily: '\'Oswald\', sans-serif'}}>Music &amp; Media</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="flex flex-col p-8 bg-zinc-950 border border-zinc-800 hover:border-red-600 hover:bg-zinc-900 transition-all group items-center text-center" href="https://www.youtube.com/@RattlesnakeBand" target="_blank">
<iconify-icon className="text-5xl text-red-700 mb-6 group-hover:scale-110 transition-transform" icon="solar:videocamera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xl font-semibold text-white tracking-tighter uppercase mb-2" style={{fontFamily: '\'Oswald\', sans-serif'}}>YouTube</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Watch Videos</span>
</a>

<a className="flex flex-col p-8 bg-zinc-950 border border-zinc-800 hover:border-red-600 hover:bg-zinc-900 transition-all group items-center text-center" href="https://www.instagram.com/officialrattlesnake/" target="_blank">
<iconify-icon className="text-5xl text-red-700 mb-6 group-hover:scale-110 transition-transform" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xl font-semibold text-white tracking-tighter uppercase mb-2" style={{fontFamily: '\'Oswald\', sans-serif'}}>Instagram</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">@officialrattlesnake</span>
</a>

<a className="flex flex-col p-8 bg-zinc-950 border border-zinc-800 hover:border-red-600 hover:bg-zinc-900 transition-all group items-center text-center" href="https://www.facebook.com/people/Rattlesnake-Band/61568069984898/?locale=nb_NO#" target="_blank">
<iconify-icon className="text-5xl text-red-700 mb-6 group-hover:scale-110 transition-transform" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xl font-semibold text-white tracking-tighter uppercase mb-2" style={{fontFamily: '\'Oswald\', sans-serif'}}>Facebook</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Community</span>
</a>

<div className="flex flex-col p-8 bg-zinc-950 border border-zinc-900 opacity-50 cursor-not-allowed items-center text-center">
<iconify-icon className="text-5xl text-zinc-700 mb-6" icon="solar:music-notes-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xl font-semibold text-zinc-500 tracking-tighter uppercase mb-2" style={{fontFamily: '\'Oswald\', sans-serif'}}>Spotify</span>
<span className="text-xs text-zinc-600 uppercase tracking-widest">Coming Soon</span>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto border-b border-zinc-800" id="schedule">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white uppercase mb-4" style={{fontFamily: '\'Oswald\', sans-serif'}}>Tour Dates</h2>
<p className="text-sm text-red-600 uppercase tracking-widest font-medium">Catch us live. More dates to be announced.</p>
</div>
<div className="flex flex-col border-t border-zinc-800">

<div className="flex flex-col md:flex-row md:items-center py-8 border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors px-4 group gap-6 md:gap-0">
<div className="md:w-48 text-2xl text-red-600 font-semibold tracking-tighter uppercase" style={{fontFamily: '\'Oswald\', sans-serif'}}>Oct 24, 2024</div>
<div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
<div className="text-3xl font-semibold text-white tracking-tighter uppercase" style={{fontFamily: '\'Oswald\', sans-serif'}}>The Underworld</div>
<div className="text-sm text-zinc-400 uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-red-700" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon> London, UK
                    </div>
</div>
<div className="mt-4 md:mt-0 md:w-40 md:text-right">
<button className="w-full md:w-auto px-8 py-4 text-xs font-semibold bg-white text-black hover:bg-red-700 hover:text-white transition-colors uppercase tracking-widest border border-white hover:border-red-700">Tickets</button>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center py-8 border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors px-4 group gap-6 md:gap-0">
<div className="md:w-48 text-2xl text-red-600 font-semibold tracking-tighter uppercase" style={{fontFamily: '\'Oswald\', sans-serif'}}>Nov 02, 2024</div>
<div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
<div className="text-3xl font-semibold text-white tracking-tighter uppercase" style={{fontFamily: '\'Oswald\', sans-serif'}}>Whisky a Go Go</div>
<div className="text-sm text-zinc-400 uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-red-700" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Los Angeles, CA
                    </div>
</div>
<div className="mt-4 md:mt-0 md:w-40 md:text-right">
<button className="w-full md:w-auto px-8 py-4 text-xs font-semibold bg-white text-black hover:bg-red-700 hover:text-white transition-colors uppercase tracking-widest border border-white hover:border-red-700">Tickets</button>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center py-8 border-b border-zinc-800 px-4 opacity-50 gap-6 md:gap-0 bg-zinc-950/30">
<div className="md:w-48 text-2xl text-zinc-600 font-semibold tracking-tighter uppercase" style={{fontFamily: '\'Oswald\', sans-serif'}}>Dec 15, 2024</div>
<div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
<div className="text-3xl font-semibold text-zinc-400 tracking-tighter uppercase" style={{fontFamily: '\'Oswald\', sans-serif'}}>Secret Show</div>
<div className="text-sm text-zinc-600 uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-zinc-700" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Berlin, DE
                    </div>
</div>
<div className="mt-4 md:mt-0 md:w-40 md:text-right">
<span className="inline-block w-full md:w-auto px-8 py-4 text-xs font-semibold border border-zinc-700 text-zinc-500 text-center uppercase tracking-widest">Sold Out</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto border-b border-zinc-800" id="gallery">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white uppercase" style={{fontFamily: '\'Oswald\', sans-serif'}}>Visuals</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
<div className="aspect-square bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center text-zinc-700 hover:border-red-600 hover:text-red-700 transition-colors group cursor-pointer">
<iconify-icon className="text-4xl mb-4 group-hover:scale-110 transition-transform" icon="solar:gallery-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest">Incoming</span>
</div>
<div className="aspect-square bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center text-zinc-700 hover:border-red-600 hover:text-red-700 transition-colors group cursor-pointer">
<iconify-icon className="text-4xl mb-4 group-hover:scale-110 transition-transform" icon="solar:gallery-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest">Incoming</span>
</div>
<div className="aspect-square bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center text-zinc-700 hover:border-red-600 hover:text-red-700 transition-colors group cursor-pointer sm:hidden md:flex">
<iconify-icon className="text-4xl mb-4 group-hover:scale-110 transition-transform" icon="solar:gallery-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest">Incoming</span>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-3xl mx-auto border-b border-zinc-800" id="booking">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white uppercase mb-4" style={{fontFamily: '\'Oswald\', sans-serif'}}>Book Us</h2>
<p className="text-sm text-zinc-500 uppercase tracking-widest">Reach out for bookings, press inquiries, or general questions.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-red-600 uppercase tracking-widest">Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 px-5 py-4 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-red-600 transition-colors" placeholder="YOUR NAME" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-red-600 uppercase tracking-widest">Email</label>
<input className="w-full bg-zinc-950 border border-zinc-800 px-5 py-4 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-red-600 transition-colors" placeholder="EMAIL ADDRESS" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-red-600 uppercase tracking-widest">Inquiry Type</label>
<div className="relative">
<select className="w-full bg-zinc-950 border border-zinc-800 px-5 py-4 text-sm text-white focus:outline-none focus:border-red-600 transition-colors appearance-none cursor-pointer uppercase tracking-widest">
<option value="booking">Booking &amp; Live Shows</option>
<option value="press">Press &amp; Media</option>
<option value="other">Other</option>
</select>
<div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-red-600">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-red-600 uppercase tracking-widest">Message</label>
<textarea className="w-full bg-zinc-950 border border-zinc-800 px-5 py-4 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-red-600 transition-colors resize-none" placeholder="YOUR MESSAGE..." rows="5"></textarea>
</div>
<button className="w-full bg-red-700 text-white font-semibold text-sm py-5 hover:bg-red-600 transition-colors mt-4 uppercase tracking-widest border border-red-600 hover:border-red-500" type="button">
                Send Message
            </button>
</form>
</section>

<footer className="py-20 px-6 text-center flex flex-col items-center bg-black">
<div className="text-4xl font-semibold tracking-tighter text-white uppercase mb-8" style={{fontFamily: '\'Oswald\', sans-serif'}}>
            Rattlesnake
        </div>
<div className="flex gap-8 mb-12 text-zinc-500">
<a className="hover:text-red-600 transition-colors group" href="https://www.youtube.com/@RattlesnakeBand" target="_blank">
<iconify-icon className="text-3xl block group-hover:scale-110 transition-transform" icon="solar:videocamera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="hover:text-red-600 transition-colors group" href="https://www.instagram.com/officialrattlesnake/" target="_blank">
<iconify-icon className="text-3xl block group-hover:scale-110 transition-transform" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="hover:text-red-600 transition-colors group" href="https://www.facebook.com/people/Rattlesnake-Band/61568069984898/?locale=nb_NO#" target="_blank">
<iconify-icon className="text-3xl block group-hover:scale-110 transition-transform" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<p className="text-xs text-zinc-600 font-medium uppercase tracking-widest">© 2024 Rattlesnake. All rights reserved.</p>
</footer>

    </>
  );
}
