import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cinzel', 'serif'],
},
colors: {
gold: {
100: '#FBF5D5',
200: '#F5E6AA',
300: '#EAD170',
400: '#D4AF37', /* Classic Gold */
500: '#AA8C2C',
600: '#806921',
900: '#2A2208',
},
zinc: {
850: '#1f1f22',
950: '#09090b', // Deep black
}
},
animation: {
'spin-slow': 'spin-y 12s linear infinite',
'fade-in-up': 'fadeInUp 1s ease-out forwards',
'fade-in': 'fadeIn 1.5s ease-out forwards',
'line-grow': 'lineGrow 1s ease-out forwards',
},
keyframes: {
'spin-y': {
'0%': { transform: 'rotateY(0deg)' },
'100%': { transform: 'rotateY(360deg)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
lineGrow: {
'0%': { width: '0%' },
'100%': { width: '100%' },
}
}
}
}
}



        document.getElementById('registration-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('button');
            const originalText = btn.innerHTML;
            
            // Button Feedback
            btn.innerHTML = '<iconify-icon icon="line-md:loading-twotone-loop" class="text-base"></iconify-icon> Generating...';
            btn.classList.add('opacity-80', 'cursor-not-allowed');
            
            // Simulation Delay then Transition
            setTimeout(() => {
                const page1 = document.getElementById('page-1');
                const page2 = document.getElementById('page-2');

                // Fade out Page 1
                page1.style.opacity = '0';

                setTimeout(() => {
                    // Hide Page 1 fully
                    page1.style.display = 'none';
                    
                    // Prepare Page 2
                    page2.classList.remove('hidden');
                    page2.style.display = 'flex'; // Restore flex layout
                    
                    // Trigger reflow
                    void page2.offsetWidth; 
                    
                    // Fade in Page 2 container
                    page2.style.opacity = '1';

                    // Sequence animations for Page 2 content
                    const p2Title = document.getElementById('p2-title');
                    const p2Subtitle = document.getElementById('p2-subtitle');
                    const p2Details = document.getElementById('p2-details');
                    const p2Cards = document.getElementById('p2-cards');

                    setTimeout(() => {
                        p2Title.classList.add('animate-fade-in-up');
                        p2Title.style.opacity = '1';
                    }, 200);

                    setTimeout(() => {
                        p2Subtitle.classList.add('animate-fade-in');
                        p2Subtitle.style.opacity = '1';
                    }, 500);

                    setTimeout(() => {
                        p2Details.classList.add('animate-fade-in-up');
                        p2Details.style.opacity = '1';
                    }, 800);

                    setTimeout(() => {
                        p2Cards.classList.add('animate-fade-in');
                        p2Cards.style.opacity = '1';
                    }, 1000);

                }, 1000); // Wait for page 1 fade out

            }, 1500); // Processing time
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full py-8 px-6 md:px-12 flex justify-between items-center z-50 fixed top-0">
<div className="text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase">
            NSB Confidential
        </div>
<div className="text-[10px] tracking-widest text-zinc-600 uppercase">
            Official Access
        </div>
</nav>

<main className="flex-grow flex flex-col lg:flex-row items-center justify-center relative w-full min-h-screen px-6 py-24 transition-opacity duration-1000 ease-in-out" id="page-1">

<div className="w-full lg:w-5/12 max-w-xl z-20 space-y-16 lg:pr-12 order-2 lg:order-1 mt-12 lg:mt-0">

<div className="space-y-6">
<h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-white opacity-0 animate-fade-in-up delay-100">
                    Private Access. <br/>
<span className="text-gold-gradient">Strictly Confidential.</span>
</h1>
<div className="space-y-2 text-sm text-zinc-400 leading-relaxed font-light">
<p className="opacity-0 animate-fade-in delay-300">NSB Confidential is an exclusive music membership created for</p>
<p className="opacity-0 animate-fade-in delay-500">dedicated supporters of Northsidebaby. Secure your place within</p>
<p className="opacity-0 animate-fade-in delay-700">the inner circle for opportunities unavailable to the public.</p>
</div>
</div>

<div className="space-y-6">
<div className="relative inline-block pb-2">
<h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-100 opacity-0 animate-fade-in delay-700">
                        What NSB Confidential Includes
                    </h3>
<div className="absolute bottom-0 left-0 h-[1px] bg-gold-500/50 animate-line-grow delay-1000"></div>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 opacity-0 animate-fade-in-up delay-700 text-xs text-zinc-400">
<iconify-icon className="text-gold-400 text-base flex-shrink-0" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span>Eligibility for meet &amp; greet opportunities</span>
</li>
<li className="flex items-start gap-3 opacity-0 animate-fade-in-up delay-700 text-xs text-zinc-400">
<iconify-icon className="text-gold-400 text-base flex-shrink-0" icon="solar:videocamera-record-linear" strokeWidth="1.5"></iconify-icon>
<span>Access to virtual calls and video calls</span>
</li>
<li className="flex items-start gap-3 opacity-0 animate-fade-in-up delay-700 text-xs text-zinc-400">
<iconify-icon className="text-gold-400 text-base flex-shrink-0" icon="solar:music-note-linear" strokeWidth="1.5"></iconify-icon>
<span>Early or confidential music updates &amp; releases</span>
</li>
<li className="flex items-start gap-3 opacity-0 animate-fade-in-up delay-700 text-xs text-zinc-400">
<iconify-icon className="text-gold-400 text-base flex-shrink-0" icon="solar:shield-star-linear" strokeWidth="1.5"></iconify-icon>
<span>Exclusive fan-only access not available to public</span>
</li>
</ul>
</div>

<form className="space-y-6 pt-6 border-t border-zinc-900 opacity-0 animate-fade-in delay-1000" id="registration-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="input-group group space-y-1">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 transition-colors duration-300" htmlFor="name">Full Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-200 text-xs p-3 rounded-sm outline-none transition-all duration-300" id="name" placeholder="Enter full name" required="" type="text"/>
</div>
<div className="input-group group space-y-1">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 transition-colors duration-300" htmlFor="location">Location</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-200 text-xs p-3 rounded-sm outline-none transition-all duration-300" id="location" placeholder="City, Country" required="" type="text"/>
</div>
</div>
<div className="input-group group space-y-1">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 transition-colors duration-300" htmlFor="ref-id">Reference ID (Optional)</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-200 text-xs p-3 rounded-sm outline-none transition-all duration-300" id="ref-id" placeholder="e.g. FAN-001" type="text"/>
</div>
<button className="w-full mt-4 bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold tracking-widest uppercase py-4 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2" type="submit">
<iconify-icon className="text-base" icon="solar:key-minimalistic-square-linear" strokeWidth="1.5"></iconify-icon>
                    Generate NSB Code
                </button>
</form>
</div>

<div className="w-full lg:w-7/12 flex flex-col items-center justify-center relative h-[600px] order-1 lg:order-2 opacity-0 animate-fade-in delay-200">

<div className="absolute bottom-20 w-48 h-64 spotlight-beam opacity-40 pointer-events-none"></div>

<div className="perspective-container w-[340px] h-[540px] md:w-[380px] md:h-[600px] relative z-10">

<div className="card-3d animate-spin-slow" id="p1-card">

<div className="card-face card-front-design rounded-xl overflow-hidden p-1">

<div className="w-full h-full border border-gold-400/30 rounded-lg p-1 relative flex flex-col items-center">

<div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-gold-400/60"></div>
<div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-gold-400/60"></div>
<div className="absolute bottom-2 left-2 w-8 h-8 border-b border-l border-gold-400/60"></div>
<div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-gold-400/60"></div>

<div className="w-full h-full border border-gold-400/10 rounded-md bg-zinc-950/80 flex flex-col items-center relative py-8 px-6">

<div className="text-[10px] tracking-[0.4em] text-gold-200 uppercase mt-4 font-semibold border-b border-gold-400/20 pb-2">
                                    VIP Access
                                </div>

<div className="flex-grow flex flex-col items-center justify-center space-y-2">
<div className="text-7xl font-serif text-gold-gradient tracking-tight drop-shadow-2xl">
                                        NSB
                                    </div>
<div className="h-[1px] w-12 bg-gold-400/40"></div>
<div className="text-[9px] tracking-[0.3em] text-zinc-500 uppercase">
                                        Confidential
                                    </div>
</div>

<div className="w-full space-y-4 mb-4 text-center">
<div className="text-xl font-serif text-zinc-200 tracking-widest uppercase">
                                        Backstage Pass
                                    </div>
<div className="flex justify-between items-center w-full px-4 pt-4 border-t border-gold-400/20">
<span className="text-[8px] uppercase tracking-widest text-zinc-600">No. 000000</span>
<div className="px-2 py-0.5 border border-gold-600/30 text-[8px] uppercase tracking-wider text-gold-400 bg-gold-900/10">
                                            Backstage Crew
                                        </div>
</div>
</div>

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-20 pointer-events-none rounded-lg"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-16 w-56 h-8 bg-zinc-900 rounded-[100%] shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-t border-zinc-800">
<div className="w-full h-full bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-[100%] opacity-80"></div>
</div>

<div className="absolute bottom-24 w-40 h-4 bg-black blur-xl opacity-60"></div>
</div>
</main>


<main className="hidden opacity-0 flex-grow flex-col lg:flex-row items-center justify-center relative w-full min-h-screen px-6 py-24 transition-opacity duration-1000 ease-in-out" id="page-2">

<div className="w-full lg:w-5/12 max-w-xl z-20 space-y-12 order-2 lg:order-1 mt-12 lg:mt-0">
<div className="space-y-4 border-l-2 border-gold-500 pl-6">
<h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight opacity-0" id="p2-title">
                    Access Granted.
                </h2>
<p className="text-sm text-zinc-400 opacity-0" id="p2-subtitle">
                    Your NSB Confidential Code has been successfully generated. Your membership slot is currently reserved.
                </p>
</div>
<div className="space-y-8 opacity-0" id="p2-details">

<div className="flex items-baseline justify-between border-b border-zinc-800 pb-4">
<span className="text-xs uppercase tracking-widest text-zinc-500">NSB Confidential Card Fee</span>
<span className="text-xl font-serif text-zinc-200">$300</span>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-sm text-center space-y-2 relative overflow-hidden">
<div className="absolute inset-0 bg-gold-400/5"></div>
<span className="text-[10px] uppercase tracking-widest text-zinc-500 relative z-10">Your Unique Access Code</span>
<div className="text-4xl md:text-5xl font-mono text-gold-400 tracking-widest font-semibold relative z-10 drop-shadow-lg">
                        NSB-4729
                    </div>
</div>

<div className="flex gap-4 items-start bg-zinc-900/30 p-4 rounded-sm border border-zinc-800/50">
<iconify-icon className="text-zinc-400 text-xl mt-0.5" icon="solar:info-square-linear" strokeWidth="1.5"></iconify-icon>
<div className="space-y-1">
<p className="text-xs text-zinc-300 font-medium leading-relaxed">
<strong className="text-white">Action Required:</strong> Screenshot or copy the code above and send it directly to NSB Management via DM to complete your registration and activate your physical card.
                        </p>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-7/12 flex flex-col items-center justify-center relative order-1 lg:order-2 space-y-8 opacity-0" id="p2-cards">

<div className="w-[300px] h-[480px] relative shadow-2xl">
<div className="w-full h-full card-front-design rounded-xl overflow-hidden p-1">

<div className="w-full h-full border border-gold-400/30 rounded-lg p-1 relative flex flex-col items-center">
<div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-gold-400/60"></div>
<div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-gold-400/60"></div>
<div className="absolute bottom-2 left-2 w-8 h-8 border-b border-l border-gold-400/60"></div>
<div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-gold-400/60"></div>
<div className="w-full h-full border border-gold-400/10 rounded-md bg-zinc-950/80 flex flex-col items-center relative py-8 px-6">
<div className="text-[10px] tracking-[0.4em] text-gold-200 uppercase mt-4 font-semibold border-b border-gold-400/20 pb-2">VIP Access</div>
<div className="flex-grow flex flex-col items-center justify-center space-y-2">
<div className="text-6xl font-serif text-gold-gradient tracking-tight">NSB</div>
<div className="h-[1px] w-10 bg-gold-400/40"></div>
<div className="text-[8px] tracking-[0.3em] text-zinc-500 uppercase">Confidential</div>
</div>
<div className="w-full space-y-4 mb-4 text-center">
<div className="text-lg font-serif text-zinc-200 tracking-widest uppercase">Backstage Pass</div>
<div className="flex justify-between items-center w-full px-4 pt-4 border-t border-gold-400/20">
<span className="text-[8px] uppercase tracking-widest text-zinc-600">No. 000000</span>
<div className="px-2 py-0.5 border border-gold-600/30 text-[8px] uppercase tracking-wider text-gold-400 bg-gold-900/10">Backstage Crew</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full max-w-[300px] flex justify-center">
<div className="text-center space-y-2">
<p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Card Reverse (Display Only)</p>

<div className="w-[300px] h-[180px] bg-zinc-950 border border-zinc-800 rounded-xl relative overflow-hidden flex items-center p-6 gap-4 shadow-lg">

<div className="w-20 h-24 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-sm">
<iconify-icon className="text-zinc-700 text-3xl" icon="solar:user-linear"></iconify-icon>
</div>

<div className="flex-grow space-y-3">
<div className="space-y-1">
<span className="text-[8px] uppercase text-zinc-600 tracking-wider block text-left">Name</span>
<div className="h-[1px] w-full bg-zinc-800"></div>
</div>
<div className="space-y-1">
<span className="text-[8px] uppercase text-zinc-600 tracking-wider block text-left">Location</span>
<div className="h-[1px] w-full bg-zinc-800"></div>
</div>
<div className="space-y-1">
<span className="text-[8px] uppercase text-zinc-600 tracking-wider block text-left">Date Issued</span>
<div className="h-[1px] w-full bg-zinc-800"></div>
</div>
</div>

<div className="absolute right-0 top-0 bottom-0 w-1 bg-gold-600/20"></div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
