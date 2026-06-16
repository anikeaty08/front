import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
gold: {
100: '#FBF4D8',
200: '#F3E2A8',
300: '#E8CA72',
400: '#DDB345',
500: '#D4AF37', // Classic Gold
600: '#AA8C2C',
700: '#806921',
800: '#554616',
900: '#2B230B',
},
obsidian: '#050505',
charcoal: '#0a0a0a',
},
fontFamily: {
serif: ['Cinzel', 'serif'],
sans: ['Inter', 'sans-serif'],
},
letterSpacing: {
widest: '.25em',
},
backgroundImage: {
'metal-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
'gold-shine': 'linear-gradient(45deg, transparent 40%, rgba(255, 215, 0, 0.1) 50%, transparent 60%)',
}
}
}
}



        function generateRandomCode() {
            const num = Math.floor(1000 + Math.random() * 9000);
            return `NSB-${num}`;
        }

        function goToPage2() {
            const page1 = document.getElementById('page1');
            const page2 = document.getElementById('page2');
            const codeDisplay = document.getElementById('generatedCode');
            const form = document.getElementById('accessForm');

            // Simple validation
            if(form.checkValidity()) {
                // Fade out Page 1
                page1.style.opacity = '0';
                
                setTimeout(() => {
                    page1.style.display = 'none';
                    page2.classList.remove('hidden');
                    // Set code
                    codeDisplay.innerText = generateRandomCode();
                    
                    // Simple fade in logic
                    page2.style.opacity = '0';
                    page2.style.display = 'flex';
                    
                    // Trigger reflow
                    void page2.offsetWidth; 
                    
                    page2.style.transition = 'opacity 1s ease';
                    page2.style.opacity = '1';
                    
                    window.scrollTo(0,0);
                }, 700);
            } else {
                form.reportValidity();
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative min-h-screen flex flex-col items-center pt-12 pb-24 transition-opacity duration-700 ease-in-out" id="page1">

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-zinc-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gold-900/5 to-transparent"></div>
</div>

<header className="relative z-10 mb-12 text-center">
<h1 className="font-serif text-3xl md:text-5xl text-gold-400 tracking-tight font-medium mb-2">NSB CONFIDENTIAL</h1>
<p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-medium">Northsidebaby Exclusive Access</p>
</header>

<div className="relative z-10 w-full max-w-md h-96 flex flex-col items-center justify-center mb-16">

<div className="perspective-container w-80 h-48 md:w-96 md:h-56 relative group">

<div className="card-inner animate-spin-luxury">

<div className="card-face bg-zinc-950 rounded-xl overflow-hidden ornate-border shadow-2xl relative">

<div className="absolute inset-0 bg-gold-shine opacity-30"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center p-6 border border-zinc-900">

<div className="w-full flex justify-between items-start opacity-60">
<iconify-icon className="text-gold-400 text-xl" icon="solar:crown-star-linear"></iconify-icon>
<div className="h-px flex-1 mx-4 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent self-center"></div>
<iconify-icon className="text-gold-400 text-xl" icon="solar:star-circle-linear"></iconify-icon>
</div>

<div className="flex-1 flex flex-col items-center justify-center space-y-1">
<span className="font-serif text-2xl md:text-3xl text-gold-100 tracking-tight">NSB</span>
<span className="font-sans text-[10px] uppercase tracking-widest text-gold-500/80">Confidential Access</span>
</div>

<div className="w-full text-center">
<span className="font-serif text-sm tracking-widest text-zinc-400 uppercase">Northsidebaby</span>
</div>
</div>
</div>

<div className="card-face bg-zinc-950 rounded-xl overflow-hidden ornate-border shadow-2xl relative" style={{transform: 'rotateY(180deg)'}}>
<div className="absolute inset-0 bg-gold-shine opacity-10"></div>
<div className="absolute inset-0 p-6 flex items-center justify-between gap-4">

<div className="w-16 h-20 bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="text-zinc-600 text-2xl" icon="solar:user-linear"></iconify-icon>
</div>

<div className="flex-1 space-y-3">
<div className="w-full h-px bg-zinc-800 relative">
<span className="absolute -top-3 left-0 text-[8px] text-zinc-600 uppercase tracking-wide">Name</span>
</div>
<div className="w-full h-px bg-zinc-800 relative">
<span className="absolute -top-3 left-0 text-[8px] text-zinc-600 uppercase tracking-wide">Location</span>
</div>
<div className="w-1/2 h-px bg-zinc-800 relative">
<span className="absolute -top-3 left-0 text-[8px] text-zinc-600 uppercase tracking-wide">Date Issued</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-12 w-64 h-24 spotlight-base blur-xl opacity-60"></div>

<div className="absolute -bottom-16 w-40 h-4 bg-black rounded-[100%] blur-md opacity-80"></div>
</div>

<main className="relative z-10 w-full max-w-xl px-6 space-y-12">

<section className="text-center space-y-6">
<div className="h-px w-24 bg-gradient-to-r from-transparent via-gold-600 to-transparent mx-auto opacity-50"></div>
<h2 className="font-serif text-xl text-zinc-200 tracking-tight">What NSB Confidential Includes</h2>
<p className="text-sm leading-relaxed text-zinc-400 font-light">
                    NSB Confidential is an exclusive music membership created for dedicated supporters of Northsidebaby. Membership provides priority access to private music-related experiences and confidential opportunities.
                </p>
<ul className="text-left space-y-4 py-4 bg-zinc-900/30 p-6 border border-zinc-800/50 rounded-sm">
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-gold-500 mt-0.5 shrink-0" icon="solar:star-linear"></iconify-icon>
                        Eligibility for meet &amp; greet opportunities
                    </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-gold-500 mt-0.5 shrink-0" icon="solar:videocamera-record-linear"></iconify-icon>
                        Access to virtual calls and video calls when available
                    </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-gold-500 mt-0.5 shrink-0" icon="solar:music-library-2-linear"></iconify-icon>
                        Early or confidential music updates
                    </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-gold-500 mt-0.5 shrink-0" icon="solar:bell-linear"></iconify-icon>
                        Priority notifications for releases and announcements
                    </li>
<li className="flex items-start gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-gold-500 mt-0.5 shrink-0" icon="solar:shield-keyhole-linear"></iconify-icon>
                        Exclusive fan-only access not available to the public
                    </li>
</ul>
<p className="text-xs text-zinc-500 italic">Access is limited and issued individually through the NSB Confidential system.</p>
</section>

<section className="border-t border-zinc-800 pt-8">
<form className="space-y-5" id="accessForm" onsubmit="event.preventDefault(); goToPage2();">
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-zinc-500 font-medium ml-1">Full Name</label>
<input className="w-full bg-charcoal border border-zinc-800 text-zinc-200 text-sm px-4 py-3 focus:outline-none focus:border-gold-600/50 focus:ring-1 focus:ring-gold-900/50 transition-all font-light" placeholder="Enter your legal name" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-zinc-500 font-medium ml-1">Location</label>
<input className="w-full bg-charcoal border border-zinc-800 text-zinc-200 text-sm px-4 py-3 focus:outline-none focus:border-gold-600/50 focus:ring-1 focus:ring-gold-900/50 transition-all font-light" placeholder="City, Country" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-zinc-500 font-medium ml-1">Reference ID</label>
<input className="w-full bg-charcoal border border-zinc-800 text-zinc-200 text-sm px-4 py-3 focus:outline-none focus:border-gold-600/50 focus:ring-1 focus:ring-gold-900/50 transition-all font-light" placeholder="Optional" type="text"/>
</div>
<div className="pt-4">
<button className="w-full bg-gradient-to-r from-gold-600 to-gold-500 text-obsidian text-sm font-semibold tracking-wide uppercase py-4 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]" type="submit">
                            Generate NSB Code
                        </button>
</div>
</form>
</section>
</main>
</div>

<div className="hidden relative min-h-screen flex flex-col items-center justify-center py-12 px-6 fade-in" id="page2">
<div className="w-full max-w-xl flex flex-col items-center space-y-10">

<div className="text-center space-y-2">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold-500/30 bg-gold-500/10 mb-4">
<iconify-icon className="text-gold-400 text-2xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h2 className="font-serif text-2xl md:text-3xl text-zinc-100 tracking-tight">Code Generated</h2>
<p className="text-sm text-zinc-400 font-light">Your exclusive NSB Confidential code is ready for activation.</p>
</div>

<div className="relative w-80 h-48 md:w-96 md:h-56 transform transition-all duration-1000">
<div className="absolute inset-0 bg-zinc-950 rounded-xl overflow-hidden ornate-border shadow-2xl">
<div className="absolute inset-0 bg-gold-shine opacity-20"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 border border-zinc-900">
<div className="w-full flex justify-between items-start opacity-60">
<iconify-icon className="text-gold-400 text-xl" icon="solar:crown-star-linear"></iconify-icon>
<div className="h-px flex-1 mx-4 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent self-center"></div>
<iconify-icon className="text-gold-400 text-xl" icon="solar:star-circle-linear"></iconify-icon>
</div>
<div className="flex-1 flex flex-col items-center justify-center space-y-1">
<span className="font-serif text-2xl md:text-3xl text-gold-100 tracking-tight">NSB</span>
<span className="font-sans text-[10px] uppercase tracking-widest text-gold-500/80">Confidential Access</span>
</div>
<div className="w-full text-center">
<span className="font-serif text-sm tracking-widest text-zinc-400 uppercase">Northsidebaby</span>
</div>
</div>
</div>

<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gold-500/20 blur-xl"></div>
</div>

<div className="w-full bg-zinc-900/50 border border-zinc-800 p-8 text-center space-y-6">
<div className="space-y-1">
<p className="text-xs uppercase tracking-widest text-zinc-500">NSB Confidential Card Fee</p>
<p className="font-serif text-2xl text-zinc-200">$300.00</p>
</div>
<div className="py-6 border-y border-zinc-800 border-dashed">
<p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Activation Code</p>
<div className="bg-black border border-gold-900/50 py-4 px-8 inline-block shadow-inner">
<span className="font-serif text-3xl md:text-4xl tracking-widest text-gold-400 select-all" id="generatedCode">NSB-4729</span>
</div>
</div>
<p className="text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto">
                    Please <span className="text-zinc-200 font-medium">screenshot or copy</span> this code and send it directly to NSB Management to complete your registration and card activation.
                </p>
</div>

<div className="w-full pt-8 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
<p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-4">Card Template (Back View)</p>
<div className="w-80 h-48 md:w-96 md:h-56 bg-zinc-950 rounded-xl overflow-hidden ornate-border relative shadow-lg">

<div className="absolute inset-0 p-6 flex items-center justify-between gap-5">

<div className="w-20 h-24 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-sm">
<iconify-icon className="text-zinc-700 text-3xl" icon="solar:user-linear"></iconify-icon>
</div>

<div className="flex-1 flex flex-col justify-center space-y-5">
<div className="space-y-1">
<div className="text-[9px] text-zinc-600 uppercase tracking-widest">Name</div>
<div className="w-full h-px bg-zinc-800"></div>
</div>
<div className="space-y-1">
<div className="text-[9px] text-zinc-600 uppercase tracking-widest">Location</div>
<div className="w-full h-px bg-zinc-800"></div>
</div>
<div className="flex gap-4">
<div className="space-y-1 flex-1">
<div className="text-[9px] text-zinc-600 uppercase tracking-widest">Date Issued</div>
<div className="w-full h-px bg-zinc-800"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-2 right-4">
<span className="text-[8px] text-zinc-800 font-serif">NSB CONFIDENTIAL PROPERTY</span>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
