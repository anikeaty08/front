import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



        document.addEventListener("DOMContentLoaded", () => {
            const envelopeWrapper = document.getElementById('intro-wrapper');
            const envelope = document.getElementById('envelope');
            const mainSite = document.getElementById('main-site');
            const openBtn = document.getElementById('open-btn');
            
            // Disable scroll initially
            document.body.style.overflow = 'hidden';

            const openEnvelope = () => {
                // Trigger CSS animations on envelope
                envelope.classList.add('is-open');
                openBtn.style.opacity = '0';
                openBtn.style.pointerEvents = 'none';
                
                // Sequence the transition to main site
                setTimeout(() => {
                    // Fade out envelope wrapper
                    envelopeWrapper.style.opacity = '0';
                    
                    // Show main site block but keep opacity 0
                    mainSite.style.display = 'block';
                    
                    // Force reflow
                    void mainSite.offsetWidth;
                    
                    // Fade in main site
                    mainSite.classList.remove('opacity-0');
                    
                    setTimeout(() => {
                        // Cleanup intro and allow scroll
                        envelopeWrapper.style.display = 'none';
                        document.body.style.overflow = 'auto';
                        // Initialize scroll animations after main site is visible
                        initScrollAnimations();
                        
                        // Scroll to top just in case
                        window.scrollTo(0,0);
                    }, 1000);
                }, 1400); // Wait for envelope open animation to nearly finish
            };

            // Event listeners
            envelope.addEventListener('click', openEnvelope);
            openBtn.addEventListener('click', openEnvelope);

            // Scroll Animation Observer
            function initScrollAnimations() {
                const elements = document.querySelectorAll('.animate-on-scroll');
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            // Unobserve after showing
                            observer.unobserve(entry.target);
                        }
                    });
                }, { 
                    threshold: 0.1,
                    rootMargin: "0px 0px -50px 0px"
                });

                elements.forEach((el, index) => {
                    // Add slight delay based on index for initial load sequence
                    if(index < 2) {
                        setTimeout(() => {
                            el.classList.add('is-visible');
                            observer.unobserve(el);
                        }, index * 200 + 300);
                    } else {
                        observer.observe(el);
                    }
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FDFBF8] transition-opacity duration-1000" id="intro-wrapper">

<div className="absolute inset-0 overflow-hidden">
<img alt="Floral Blur" className="w-full h-full object-cover opacity-30 blur-md bg-float" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF8]/60 to-[#FDFBF8]/90"></div>
</div>

<div className="relative perspective-container z-10 flex flex-col items-center">
<div className="relative w-72 h-48 md:w-96 md:h-64 cursor-pointer group" id="envelope">

<div className="absolute inset-0 bg-[#E8E1D7] rounded-md shadow-xl border border-[#DCCFBE]/50"></div>

<div className="absolute inset-x-2 bottom-1 top-4 bg-[#F7F3EE] rounded-t-md shadow-inner border border-[#DCCFBE]/30 flex flex-col items-center justify-start pt-6 z-10" id="letter">
<span className="font-serif text-[#C8B38A] text-xs tracking-widest uppercase mb-2">Invitation</span>
<span className="font-serif text-[#4E433C] text-xl tracking-tight">Elias &amp; Clara</span>
</div>

<div className="absolute inset-0 bg-[#F3EFE9] [clip-path:polygon(0_100%,_100%_100%,_100%_35%,_50%_65%,_0_35%)] rounded-b-md z-20 shadow-[0_-5px_15px_rgba(0,0,0,0.02)] border-t border-white/40"></div>

<div className="absolute inset-0 bg-[#EFEAE2] [clip-path:polygon(0_0,_45%_55%,_0_100%)] rounded-l-md z-15"></div>
<div className="absolute inset-0 bg-[#EFEAE2] [clip-path:polygon(100%_0,_55%_55%,_100%_100%)] rounded-r-md z-15"></div>

<div className="absolute top-0 inset-x-0 h-full bg-[#F5F1EB] [clip-path:polygon(0_0,_100%_0,_50%_60%)] z-30 drop-shadow-sm border-b border-white/50 rounded-t-md" id="flap"></div>

<div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#D8C299] to-[#B39E75] shadow-[0_4px_10px_rgba(200,179,138,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] z-40 flex items-center justify-center hover:scale-105 transition-transform duration-300" id="seal">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
<span className="font-serif text-[#FDFBF8] text-lg tracking-tighter shadow-sm">E<span className="text-xs mx-0.5 opacity-80">&amp;</span>C</span>
</div>
</div>
</div>

<button className="mt-16 px-8 py-3 rounded-full bg-white/40 backdrop-blur-md border border-[#DCCFBE] text-[#7A6E65] text-xs tracking-[0.2em] uppercase hover:bg-white/70 hover:text-[#4E433C] transition-all duration-300 shadow-sm" id="open-btn">
                Open Invitation
            </button>
</div>
</div>

<main className="hidden opacity-0 transition-opacity duration-1000 relative" id="main-site">

<div className="fixed inset-0 z-[-1]">
<img alt="White Roses Texture" className="w-full h-full object-cover opacity-[0.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF8]/80 via-[#FDFBF8]/95 to-[#FDFBF8]"></div>
</div>

<div className="max-w-xl mx-auto px-5 py-16 md:py-24 flex flex-col gap-12 md:gap-20">

<section className="animate-on-scroll bg-[#F7F3EE]/80 backdrop-blur-sm rounded-[2rem] p-6 md:p-10 shadow-[0_15px_40px_-15px_rgba(156,143,132,0.15)] border border-white">
<div className="text-center mb-8">
<p className="font-serif text-[#C8B38A] italic text-lg mb-3">You're Cordially Invited</p>
<h1 className="font-serif text-[#4E433C] text-4xl md:text-5xl tracking-tight leading-tight">Elias <span className="font-sans font-light text-2xl mx-1 text-[#C8B38A]">&amp;</span> Clara</h1>
<p className="mt-4 text-xs tracking-widest uppercase text-[#9C8F84]">Together with their families</p>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square">
<img alt="Elias and Clara" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5"></div>
</div>
</section>

<section className="animate-on-scroll bg-[#FDFBF8] rounded-[2rem] p-10 shadow-[0_15px_40px_-15px_rgba(156,143,132,0.1)] border border-[#DCCFBE]/40 flex flex-col items-center justify-center min-h-[50vh] relative overflow-hidden">

<div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#DCCFBE]"></div>
<div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#DCCFBE]"></div>
<div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#DCCFBE]"></div>
<div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#DCCFBE]"></div>
<div className="text-center space-y-4">
<p className="text-sm tracking-[0.3em] uppercase text-[#9C8F84]">Saturday</p>
<div className="flex items-center justify-center gap-6 text-[#4E433C]">
<span className="font-serif text-2xl tracking-tight">SEP</span>
<span className="font-serif text-6xl tracking-tighter leading-none text-[#C8B38A]">14</span>
<span className="font-serif text-2xl tracking-tight">2025</span>
</div>
<p className="text-sm text-[#7A6E65] pt-4 border-t border-[#DCCFBE]/50 w-24 mx-auto mt-6">At 4:00 PM</p>
</div>
</section>

<section className="animate-on-scroll">
<div className="bg-[#F7F3EE]/80 backdrop-blur-sm rounded-[2rem] p-4 shadow-[0_15px_40px_-15px_rgba(156,143,132,0.1)] border border-white">
<img alt="Romantic Moments" className="w-full h-80 object-cover rounded-xl mb-8 opacity-90" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="text-center px-4 pb-6">
<p className="font-serif text-xl text-[#4E433C] leading-relaxed tracking-tight">
                            "A celebration of love, joy, <br/>and a promise of forever."
                        </p>
</div>
</div>
</section>

<section className="animate-on-scroll bg-[#FDFBF8] rounded-[2rem] p-8 md:p-12 shadow-[0_15px_40px_-15px_rgba(156,143,132,0.1)] border border-[#DCCFBE]/40">
<h2 className="font-serif text-2xl text-center text-[#4E433C] tracking-tight mb-10">The Celebration</h2>
<div className="relative pl-6 md:pl-10 space-y-10">

<div className="absolute top-2 bottom-2 left-[7px] md:left-[23px] w-px bg-gradient-to-b from-[#DCCFBE]/20 via-[#DCCFBE] to-[#DCCFBE]/20"></div>

<div className="relative">
<div className="absolute -left-[27px] md:-left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#FDFBF8] border border-[#C8B38A] shadow-[0_0_0_4px_#FDFBF8]"></div>
<p className="text-xs tracking-widest text-[#C8B38A] mb-1">3:00 PM</p>
<h3 className="font-serif text-lg text-[#4E433C]">Guest Arrival</h3>
<p className="text-sm mt-1 text-[#9C8F84]">Welcome drinks &amp; seating</p>
</div>

<div className="relative">
<div className="absolute -left-[27px] md:-left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#C8B38A] shadow-[0_0_0_4px_#FDFBF8]"></div>
<p className="text-xs tracking-widest text-[#C8B38A] mb-1">4:00 PM</p>
<h3 className="font-serif text-lg text-[#4E433C]">The Ceremony</h3>
<p className="text-sm mt-1 text-[#9C8F84]">Exchanging of vows</p>
</div>

<div className="relative">
<div className="absolute -left-[27px] md:-left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#FDFBF8] border border-[#C8B38A] shadow-[0_0_0_4px_#FDFBF8]"></div>
<p className="text-xs tracking-widest text-[#C8B38A] mb-1">5:30 PM</p>
<h3 className="font-serif text-lg text-[#4E433C]">Wedding Reception</h3>
<p className="text-sm mt-1 text-[#9C8F84]">Dinner, toasts, and cake</p>
</div>

<div className="relative">
<div className="absolute -left-[27px] md:-left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#FDFBF8] border border-[#C8B38A] shadow-[0_0_0_4px_#FDFBF8]"></div>
<p className="text-xs tracking-widest text-[#C8B38A] mb-1">8:00 PM</p>
<h3 className="font-serif text-lg text-[#4E433C]">Evening Celebration</h3>
<p className="text-sm mt-1 text-[#9C8F84]">Music &amp; dancing</p>
</div>
</div>
</section>

<section className="animate-on-scroll bg-[#F7F3EE]/80 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(156,143,132,0.15)] border border-white">
<img alt="Wedding Venue" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="p-8 md:p-10 text-center">
<h2 className="font-serif text-2xl text-[#4E433C] tracking-tight mb-6">Venue Details</h2>
<div className="space-y-6">
<div>
<iconify-icon className="text-2xl text-[#C8B38A] mb-2" icon="solar:map-point-linear"></iconify-icon>
<h3 className="font-serif text-lg text-[#4E433C]">Villa di Lusso Estate</h3>
<p className="text-sm text-[#7A6E65] mt-1 leading-relaxed">123 Romantic Road,<br/>Tuscany, Italy 50100</p>
</div>
<div className="pt-4 border-t border-[#DCCFBE]/50 w-3/4 mx-auto">
<p className="text-xs tracking-widest uppercase text-[#9C8F84] mb-3">Dress Code</p>
<p className="font-serif text-lg text-[#4E433C] mb-3">Formal / Earth Tones</p>

<div className="flex justify-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#4E433C] shadow-sm"></div>
<div className="w-6 h-6 rounded-full bg-[#7A6E65] shadow-sm"></div>
<div className="w-6 h-6 rounded-full bg-[#9C8F84] shadow-sm"></div>
<div className="w-6 h-6 rounded-full bg-[#C8B38A] shadow-sm"></div>
<div className="w-6 h-6 rounded-full bg-[#E8E1D7] shadow-sm border border-[#DCCFBE]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-on-scroll bg-[#FDFBF8] rounded-[2rem] p-8 md:p-10 shadow-[0_15px_40px_-15px_rgba(156,143,132,0.1)] border border-[#DCCFBE]/40 text-center relative overflow-hidden">

<div className="absolute -top-10 -right-10 text-[#F7F3EE] opacity-50">
<iconify-icon icon="solar:flower-linear" style={{fontSize: '150px', strokeWidth: '0.5'}}></iconify-icon>
</div>
<div className="relative z-10">
<p className="font-serif text-[#C8B38A] italic text-lg mb-2">Répondez s'il vous plaît</p>
<h2 className="font-serif text-3xl text-[#4E433C] tracking-tight mb-4">RSVP</h2>
<p className="text-sm text-[#9C8F84] mb-8">Kindly respond by August 1st, 2025</p>
<form className="space-y-5 text-left" onsubmit="event.preventDefault();">
<div>
<input className="w-full bg-transparent border-b border-[#DCCFBE] py-3 text-sm text-[#4E433C] focus:outline-none focus:border-[#C8B38A] transition-colors placeholder:text-[#9C8F84]/70" placeholder="Full Name(s)" type="text"/>
</div>

<div className="pt-2">
<p className="text-xs text-[#9C8F84] mb-3">Will you be attending?</p>
<div className="flex gap-4">
<label className="flex-1 cursor-pointer group">
<input checked="" className="peer sr-only" name="attending" type="radio"/>
<div className="text-center py-2.5 rounded border border-[#DCCFBE] text-sm text-[#7A6E65] peer-checked:bg-[#4E433C] peer-checked:text-[#FDFBF8] peer-checked:border-[#4E433C] transition-all duration-300">
                                        Joyfully Accept
                                    </div>
</label>
<label className="flex-1 cursor-pointer group">
<input className="peer sr-only" name="attending" type="radio"/>
<div className="text-center py-2.5 rounded border border-[#DCCFBE] text-sm text-[#7A6E65] peer-checked:bg-[#4E433C] peer-checked:text-[#FDFBF8] peer-checked:border-[#4E433C] transition-all duration-300">
                                        Regretfully Decline
                                    </div>
</label>
</div>
</div>
<div>
<input className="w-full bg-transparent border-b border-[#DCCFBE] py-3 text-sm text-[#4E433C] focus:outline-none focus:border-[#C8B38A] transition-colors placeholder:text-[#9C8F84]/70" placeholder="Dietary Requirements / Note" type="text"/>
</div>
<button className="w-full py-4 mt-6 bg-[#4E433C] text-[#FDFBF8] text-xs tracking-[0.2em] uppercase rounded hover:bg-[#7A6E65] transition-colors duration-300 shadow-md" type="submit">
                            Send Response
                        </button>
</form>
</div>
</section>

<section className="animate-on-scroll">
<div className="grid grid-cols-2 gap-3 md:gap-4">
<div className="col-span-2 overflow-hidden rounded-xl shadow-sm">
<img alt="Details" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="overflow-hidden rounded-xl shadow-sm">
<img alt="Rings" className="w-full h-40 object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="overflow-hidden rounded-xl shadow-sm">
<img alt="Flowers" className="w-full h-40 object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>
</section>

<footer className="animate-on-scroll text-center py-10 border-t border-[#DCCFBE]/40 mt-4">
<div className="w-12 h-12 mx-auto mb-6 rounded-full border border-[#DCCFBE] flex items-center justify-center">
<span className="font-serif text-[#C8B38A] text-lg tracking-tighter">E&amp;C</span>
</div>
<h2 className="font-serif text-2xl text-[#4E433C] tracking-tight mb-2">We can't wait to celebrate</h2>
<p className="text-sm text-[#9C8F84]">with you</p>
</footer>
</div>
</main>



    </>
  );
}
