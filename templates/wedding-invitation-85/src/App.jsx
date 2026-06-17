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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function openEnvelope() {
            const flap = document.getElementById('envelope-flap');
            const letter = document.getElementById('envelope-letter');
            const seal = document.getElementById('envelope-seal');
            const intro = document.getElementById('envelope-intro');
            const main = document.getElementById('main-content');
            const btnText = document.getElementById('open-btn-text');

            // 1. Press and fade seal
            seal.style.transform = 'translate(-50%, -50%) scale(0.6)';
            seal.style.opacity = '0';
            seal.style.pointerEvents = 'none';
            if (btnText) {
                btnText.style.opacity = '0';
                btnText.style.pointerEvents = 'none';
            }

            // 2. Open top flap backwards
            setTimeout(() => {
                flap.style.transform = 'rotateX(180deg)';
                flap.style.zIndex = '10'; // Push behind letter
            }, 300);

            // 3. Slide letter up elegantly
            setTimeout(() => {
                letter.style.transform = 'translateY(-140px) scale(1.05)';
                letter.style.zIndex = '50';
            }, 1000);

            // 4. Fade out intro screen & fade in main website
            setTimeout(() => {
                intro.style.opacity = '0';
                intro.style.pointerEvents = 'none';
                
                main.style.opacity = '1';
                main.style.pointerEvents = 'auto';
                main.style.transform = 'translateY(0)';
            }, 2500);

            // 5. Cleanup and enable scrolling
            setTimeout(() => {
                intro.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 4000);
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
      

<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cover bg-center transition-opacity duration-[1.5s] ease-in-out" id="envelope-intro" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1505902722401-dfce47c4d59a?q=80&amp'}}>
<div className="bg-[#F8F7F2]/80 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-md"></div>
<div className="relative z-10 w-full flex flex-col items-center px-6">
<h1 className="font-serif text-3xl font-light tracking-tight text-[#4F564D] mb-12 drop-shadow-sm">You're Invited</h1>

<div className="relative w-full max-w-[340px] aspect-[4/3] perspective-1000 mb-12" id="envelope-wrapper">

<div className="absolute inset-0 bg-[#C9D8C2] rounded-md shadow-inner z-0"></div>

<div className="absolute inset-2 bg-[#F8F7F2] rounded z-20 flex flex-col items-center justify-center p-6 shadow-sm transition-all duration-[1.2s] ease-in-out" id="envelope-letter">
<div className="w-full h-full border border-[#DDE6DA] rounded-sm flex flex-col items-center justify-center p-4">
<span className="font-script text-4xl text-[#9AAA92] mb-3 drop-shadow-sm">Invitation</span>
<span className="font-sans text-xs tracking-[0.2em] uppercase text-[#8A857C]">Patricia &amp; Adam</span>
</div>
</div>

<div className="absolute inset-0 bg-[#DDE6DA] z-30 drop-shadow-sm rounded-b-md" style={{clipPath: 'polygon(0 0, 45% 50%, 0 100%)'}}></div>
<div className="absolute inset-0 bg-[#DDE6DA] z-30 drop-shadow-sm rounded-b-md" style={{clipPath: 'polygon(100% 0, 55% 50%, 100% 100%)'}}></div>
<div className="absolute inset-0 bg-[#EAF1E6] z-30 drop-shadow-md rounded-b-md" style={{clipPath: 'polygon(0 100%, 50% 55%, 100% 100%)'}}></div>

<div className="z-40 origin-top transition-transform duration-[1.2s] ease-in-out transform-style-3d bg-[#F4F8F3] rounded-t-md absolute top-0 right-0 bottom-0 left-0 shadow-[0_5px_15px_rgba(0,0,0,0.06)]" id="envelope-flap" style={{clipPath: 'polygon(0 0, 100% 0, 50% 55%)'}}></div>

<button className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#9AAA92] to-[#8A857C] rounded-full z-50 flex items-center justify-center shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-500 hover:scale-105 active:scale-95 group border border-[#F8F7F2]/20" id="envelope-seal" onclick="openEnvelope()">
<span className="font-serif text-2xl text-[#F8F7F2] tracking-tighter drop-shadow-md transition-transform group-hover:scale-110">P&amp;A</span>
<div className="border-[#F8F7F2]/20 border rounded-full absolute top-[3px] right-[3px] bottom-[3px] left-[3px]"></div>
</button>
</div>

<button className="uppercase hover:text-[#9AAA92] transition-colors duration-300 text-xs text-[#4F564D] tracking-[0.2em] font-sans border-[#9AAA92] border-b pb-1" id="open-btn-text" onclick="openEnvelope()">Tap seal to open</button>
</div>
</div>

<main className="opacity-0 translate-y-12 transition-all duration-[1.5s] ease-out pointer-events-none w-full max-w-[600px] mx-auto shadow-2xl bg-[#F8F7F2]" id="main-content">

<section className="min-h-[100dvh] relative flex items-center justify-center bg-img-section" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&amp'}}>
<div className="absolute inset-0 bg-gradient-to-b from-[#F8F7F2]/40 via-[#F8F7F2]/60 to-[#F8F7F2]/80 backdrop-blur-[1px]"></div>
<div className="relative z-10 text-center px-6 py-20 w-full">
<p className="font-sans text-xs tracking-[0.3em] uppercase text-[#8A857C] mb-8">Join us to celebrate</p>
<h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight leading-snug text-[#4F564D]">
                    You're <br/>
<span className="font-script text-6xl md:text-7xl text-[#9AAA92] block my-6 font-normal drop-shadow-sm">Cordially</span>
                    Invited
                </h2>
<div className="w-[1px] h-16 bg-[#C9D8C2] mx-auto mt-16"></div>
</div>
</section>

<section className="min-h-[100dvh] relative flex flex-col justify-end bg-img-section" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&amp'}}>

<div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F2] via-[#F8F7F2]/40 to-transparent"></div>
<div className="relative z-10 text-center pb-24 px-6 w-full">
<p className="font-sans text-xs tracking-[0.2em] uppercase text-[#8A857C] mb-8">Together with their families</p>
<div className="flex flex-col items-center justify-center">
<h3 className="font-serif text-5xl md:text-6xl font-light tracking-tight uppercase text-[#4F564D]">Patricia</h3>
<span className="font-script text-4xl text-[#9AAA92] my-2 font-normal">and</span>
<h3 className="font-serif text-5xl md:text-6xl font-light tracking-tight uppercase text-[#4F564D]">Adam</h3>
</div>
</div>
</section>

<section className="min-h-[100dvh] relative flex items-center justify-center bg-img-section p-6" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&amp'}}>
<div className="absolute inset-0 bg-[#DDE6DA]/30 backdrop-blur-[2px]"></div>

<div className="relative z-10 w-full max-w-sm bg-[#F8F7F2]/95 backdrop-blur-md rounded-t-full rounded-b-[40px] border border-[#C9D8C2] p-12 flex flex-col items-center text-center shadow-xl shadow-[#9AAA92]/10">
<p className="font-sans text-xs tracking-[0.15em] uppercase text-[#8A857C] mb-8 leading-relaxed">Invite you to celebrate<br/>their wedding</p>
<div className="flex flex-col items-center w-full border-y border-[#C9D8C2] py-8 my-2 relative">

<div className="absolute top-[-3px] left-0 w-1.5 h-1.5 rounded-full bg-[#C9D8C2]"></div>
<div className="absolute top-[-3px] right-0 w-1.5 h-1.5 rounded-full bg-[#C9D8C2]"></div>
<div className="absolute bottom-[-3px] left-0 w-1.5 h-1.5 rounded-full bg-[#C9D8C2]"></div>
<div className="absolute bottom-[-3px] right-0 w-1.5 h-1.5 rounded-full bg-[#C9D8C2]"></div>
<span className="font-serif text-xl tracking-[0.2em] uppercase text-[#9AAA92]">November</span>
<span className="font-sans text-xs tracking-[0.2em] uppercase text-[#8A857C] mt-3">Sunday</span>
<span className="font-serif text-7xl font-light tracking-tight text-[#4F564D] my-1">26</span>
<span className="font-sans text-xs tracking-[0.2em] uppercase text-[#8A857C]">2025</span>
</div>
<p className="font-serif text-lg text-[#4F564D] mt-8 tracking-wide font-light">At Three O'Clock<br/>in the afternoon</p>
</div>
</section>

<section className="min-h-[100dvh] relative flex items-center justify-center bg-img-section p-6" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-[#EAF1E6]/90 to-[#F8F7F2]/80 backdrop-blur-sm"></div>
<div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center p-8 bg-[#F8F7F2]/60 rounded-3xl border border-[#F8F7F2] shadow-2xl shadow-[#9AAA92]/10">
<iconify-icon className="text-3xl text-[#9AAA92] mb-6" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-script text-4xl text-[#9AAA92] mb-3 font-normal drop-shadow-sm">The Venue</h3>
<h4 className="font-serif text-2xl tracking-tight uppercase text-[#4F564D] mb-4 mt-2 font-light">Villa Botanica</h4>
<p className="font-sans text-xs font-light tracking-widest uppercase leading-loose text-[#8A857C] mb-8">
                    123 Enchanted Garden Way<br/>
                    Tuscany, Italy 50100
                </p>
<div className="w-12 h-[1px] bg-[#C9D8C2] mx-auto mb-6"></div>
<p className="font-serif italic text-lg font-light text-[#4F564D]">Ceremony followed by<br/>dinner &amp; dancing</p>
</div>
</section>

<section className="min-h-[100dvh] relative py-24 px-6 flex items-center justify-center bg-img-section" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&amp'}}>
<div className="absolute inset-0 bg-[#F8F7F2]/90"></div>
<div className="relative z-10 w-full text-center">
<h3 className="font-serif text-3xl font-light tracking-tight uppercase text-[#4F564D] mb-16">Timeline</h3>
<div className="flex flex-col gap-8 w-full max-w-xs mx-auto">

<div className="flex flex-col items-center">
<span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#9AAA92] mb-2">3:00 PM</span>
<h4 className="font-serif text-xl font-light tracking-tight text-[#4F564D]">Guest Arrival</h4>
</div>
<div className="w-[1px] h-8 bg-[#DDE6DA] mx-auto"></div>

<div className="flex flex-col items-center">
<span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#9AAA92] mb-2">3:30 PM</span>
<h4 className="font-serif text-xl font-light tracking-tight text-[#4F564D]">Ceremony Begins</h4>
</div>
<div className="w-[1px] h-8 bg-[#DDE6DA] mx-auto"></div>

<div className="flex flex-col items-center">
<span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#9AAA92] mb-2">5:00 PM</span>
<h4 className="font-serif text-xl font-light tracking-tight text-[#4F564D]">Cocktails &amp; Canapés</h4>
</div>
<div className="w-[1px] h-8 bg-[#DDE6DA] mx-auto"></div>

<div className="flex flex-col items-center">
<span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#9AAA92] mb-2">7:00 PM</span>
<h4 className="font-serif text-xl font-light tracking-tight text-[#4F564D]">Dinner &amp; Celebration</h4>
</div>
</div>
</div>
</section>

<section className="min-h-[100dvh] relative flex items-center justify-center bg-img-section p-6" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&amp'}}>
<div className="absolute inset-0 bg-[#9AAA92]/30 backdrop-blur-sm"></div>
<div className="relative z-10 w-full max-w-sm bg-[#F8F7F2]/95 p-10 rounded-[2.5rem] text-center border border-[#F8F7F2]/60 shadow-2xl">
<h3 className="font-serif text-2xl font-light tracking-tight uppercase text-[#4F564D] mb-10">Details</h3>

<div className="mb-10">
<h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8A857C] mb-3">Dress Code</h4>
<p className="font-serif text-xl font-light tracking-tight text-[#4F564D] mb-5">Formal Garden Attire</p>
<div className="flex justify-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#DDE6DA] border border-[#F8F7F2] shadow-sm"></div>
<div className="w-6 h-6 rounded-full bg-[#9AAA92] border border-[#F8F7F2] shadow-sm"></div>
<div className="w-6 h-6 rounded-full bg-[#D8CBB8] border border-[#F8F7F2] shadow-sm"></div>
<div className="w-6 h-6 rounded-full bg-[#4F564D] border border-[#F8F7F2] shadow-sm"></div>
</div>
</div>
<div className="w-16 h-[1px] bg-[#C9D8C2] mx-auto mb-10"></div>

<div>
<h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8A857C] mb-3">Gifting</h4>
<p className="font-sans text-xs font-light text-[#4F564D] leading-relaxed">
                        Your presence is the greatest gift. Should you wish to honor us with a present, a wishing well will be available at the reception.
                    </p>
</div>
</div>
</section>

<section className="min-h-[100dvh] relative flex items-center justify-center bg-img-section px-6 py-20" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&amp'}}>
<div className="absolute inset-0 bg-[#F8F7F2]/95"></div>
<div className="relative z-10 w-full max-w-sm mx-auto">
<div className="text-center mb-12">
<h2 className="font-serif text-4xl font-light tracking-tight text-[#4F564D] mb-4">RSVP</h2>
<p className="font-sans text-xs font-light tracking-wide text-[#8A857C]">Kindly reply by October 1st, 2025</p>
</div>
<form className="space-y-8">

<div>
<input className="w-full bg-transparent border-b border-[#C9D8C2] py-3 px-1 font-sans text-sm font-light text-[#4F564D] placeholder:text-[#8A857C] focus:outline-none focus:border-[#9AAA92] transition-colors rounded-none" placeholder="Full Name(s)" type="text"/>
</div>

<div className="grid grid-cols-2 gap-3">
<label className="flex items-center justify-center py-4 px-2 border border-[#C9D8C2] rounded-2xl cursor-pointer hover:bg-[#EAF1E6] transition-all duration-300 has-[:checked]:bg-[#9AAA92] has-[:checked]:text-[#F8F7F2] has-[:checked]:border-[#9AAA92] text-[#4F564D]">
<input className="hidden" name="attending" type="radio" value="yes"/>
<span className="font-sans text-[10px] tracking-[0.15em] uppercase text-center leading-tight">Joyfully<br/>Accept</span>
</label>
<label className="flex items-center justify-center py-4 px-2 border border-[#C9D8C2] rounded-2xl cursor-pointer hover:bg-[#EAF1E6] transition-all duration-300 has-[:checked]:bg-[#9AAA92] has-[:checked]:text-[#F8F7F2] has-[:checked]:border-[#9AAA92] text-[#4F564D]">
<input className="hidden" name="attending" type="radio" value="no"/>
<span className="font-sans text-[10px] tracking-[0.15em] uppercase text-center leading-tight">Regretfully<br/>Decline</span>
</label>
</div>

<div className="relative">
<select className="w-full bg-transparent border-b border-[#C9D8C2] py-3 px-1 font-sans text-sm font-light text-[#4F564D] focus:outline-none focus:border-[#9AAA92] transition-colors rounded-none appearance-none cursor-pointer">
<option className="text-[#8A857C]" disabled="" selected="" value="">Number of Guests</option>
<option value="1">1 Guest</option>
<option value="2">2 Guests</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8A857C] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>

<div>
<textarea className="w-full bg-transparent border-b border-[#C9D8C2] py-3 px-1 font-sans text-sm font-light text-[#4F564D] placeholder:text-[#8A857C] focus:outline-none focus:border-[#9AAA92] transition-colors resize-none rounded-none" placeholder="Dietary Requirements / A Note for the Couple" rows="3"></textarea>
</div>

<button className="w-full py-5 bg-[#9AAA92] text-[#F8F7F2] font-sans text-[10px] tracking-[0.2em] uppercase rounded-full hover:bg-[#8A857C] transition-colors duration-300 mt-4 shadow-lg shadow-[#9AAA92]/20" type="button">
                        Send Reply
                    </button>
</form>
</div>
</section>

<section className="min-h-[100dvh] relative flex items-center justify-center bg-img-section" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&amp'}}>
<div className="absolute inset-0 bg-[#4F564D]/60 backdrop-blur-[2px]"></div>
<div className="relative z-10 text-center flex flex-col items-center p-6 w-full">

<div className="w-24 h-24 rounded-full border border-[#DDE6DA]/50 flex items-center justify-center mb-10 bg-[#F8F7F2]/10 backdrop-blur-md">
<span className="font-serif text-3xl font-light text-[#F8F7F2] tracking-tighter">PA</span>
</div>
<h2 className="font-script text-5xl md:text-6xl font-normal text-[#F8F7F2] mb-6 drop-shadow-md">Thank You</h2>
<p className="font-sans text-sm font-light tracking-wide text-[#F8F7F2]/90 max-w-xs leading-relaxed drop-shadow-sm">
                    We look forward to celebrating this special day with you.
                </p>
</div>
</section>
</main>


    </>
  );
}
