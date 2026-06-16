import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#0B0C12', /* Deep Charcoal / Night Sky */
surface: '#13151C',
ember: '#FF9F43', /* Warm Glow */
emberDim: '#995A2B',
gold: '#F2C94C',
stone: '#A8A29E',
white: '#FAFAF9', /* Warm White */
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
backgroundImage: {
'dusk-gradient': 'linear-gradient(to bottom, #0B0C12 0%, #13151C 100%)',
'ember-glow': 'radial-gradient(circle at center, rgba(255, 159, 67, 0.15) 0%, rgba(11, 12, 18, 0) 70%)',
'halo-soft': 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)',
},
animation: {
'breathe': 'breathe 8s ease-in-out infinite',
'float': 'float 12s ease-in-out infinite',
},
keyframes: {
breathe: {
'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
'50%': { opacity: '0.6', transform: 'scale(1.1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-primary/60 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<a className="font-display text-lg tracking-tight font-medium text-white/90 hover:text-ember transition-colors duration-500 flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-ember shadow-[0_0_10px_rgba(255,159,67,0.8)]"></span>
                Hello Emberly
            </a>
<div className="hidden md:flex items-center space-x-10 text-sm font-light text-stone-400">
<a className="hover:text-white transition-colors duration-500" href="#philosophy">Philosophy</a>
<a className="hover:text-white transition-colors duration-500" href="#legacy">Stories</a>
<a className="hover:text-white transition-colors duration-500" href="#trust">Trust</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium tracking-wide text-white transition-all duration-700 bg-white/5 border border-white/10 rounded-full hover:bg-ember/10 hover:border-ember/30 hover:text-ember" href="#conversation">
                Begin a conversation
            </a>

<button className="md:hidden text-white/80 p-2">
<span className="iconify" data-icon="lucide:menu" data-width="20" style={{strokeWidth: '1'}}></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-24 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ember/10 rounded-full blur-[160px] animate-breathe pointer-events-none"></div>
<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-float pointer-events-none delay-1000"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-3 px-4 py-1.5 mb-12 text-xs font-normal text-ember/80 bg-ember/5 border border-ember/10 rounded-full">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-50 duration-1000"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ember"></span>
</span>
                We are walking this path together
            </div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.15] mb-10 text-white/90 drop-shadow-lg">
                You are never alone <br/>
<span className="text-white/40 italic font-light">in a village.</span>
</h1>
<p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto mb-16 font-light leading-relaxed">
                A gentle companion for connection, memory, and purpose. We weave technology with humanity to honor your story and keep your world vibrant.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="group relative px-10 py-4 bg-white/[0.03] border border-white/10 text-white text-sm font-medium rounded-full overflow-hidden transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20" href="#conversation">
<span className="relative flex items-center gap-3">
                        Begin a conversation
                        <span className="iconify group-hover:translate-x-1 transition-transform duration-500 text-ember" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</span>
</a>
</div>
</div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
</section>

<section className="py-32 relative" id="philosophy">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/5 pb-12">
<div>
<span className="text-ember text-xs font-medium uppercase tracking-widest mb-4 block">Our Philosophy</span>
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-white/90">The warmth of belonging</h2>
</div>
<p className="text-stone-400 text-sm max-w-sm font-light leading-relaxed">
                    Based on African communal philosophy and modern psychology, we prioritize emotional closeness over infinite choice.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-ember/20 transition-all duration-700 hover:bg-white/[0.03]">
<div className="w-12 h-12 rounded-full bg-ember/10 flex items-center justify-center text-ember mb-8 group-hover:scale-110 transition-transform duration-700">
<span className="iconify" data-icon="lucide:heart-handshake" data-width="20" style={{strokeWidth: '1'}}></span>
</div>
<h3 className="font-display text-xl font-medium mb-4 tracking-tight text-white/90">Deep Connection</h3>
<p className="text-stone-400 text-sm leading-relaxed font-light">
                        As we age, our circle naturally tightens. We honor this by fostering deeper, more meaningful interactions with those who matter most.
                    </p>
</div>

<div className="group p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-ember/20 transition-all duration-700 hover:bg-white/[0.03]">
<div className="w-12 h-12 rounded-full bg-ember/10 flex items-center justify-center text-ember mb-8 group-hover:scale-110 transition-transform duration-700">
<span className="iconify" data-icon="lucide:sparkles" data-width="20" style={{strokeWidth: '1'}}></span>
</div>
<h3 className="font-display text-xl font-medium mb-4 tracking-tight text-white/90">Dignity &amp; Choice</h3>
<p className="text-stone-400 text-sm leading-relaxed font-light">
                        True care respects autonomy. Our approach supports your independence, offering assistance that feels like a hand held, not a task managed.
                    </p>
</div>

<div className="group p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-ember/20 transition-all duration-700 hover:bg-white/[0.03]">
<div className="w-12 h-12 rounded-full bg-ember/10 flex items-center justify-center text-ember mb-8 group-hover:scale-110 transition-transform duration-700">
<span className="iconify" data-icon="lucide:users" data-width="20" style={{strokeWidth: '1'}}></span>
</div>
<h3 className="font-display text-xl font-medium mb-4 tracking-tight text-white/90">Communal Spirit</h3>
<p className="text-stone-400 text-sm leading-relaxed font-light">
                        "I am because we are." We build digital villages that ensure no one is an island, creating a web of care that holds everyone up.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface relative overflow-hidden" id="legacy">

<div className="absolute top-0 left-0 w-full h-full bg-dusk-gradient opacity-50 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-24">
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-6 text-white/90">Stories as living legacy</h2>
<p className="text-stone-400 font-light max-w-lg mx-auto">Your memories are not just the past; they are the foundation of the future. We help capture and illuminate them.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-700">

<div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-80 transition-opacity duration-1000">
<div className="w-48 h-48 bg-ember/20 rounded-full blur-[60px] animate-pulse" style={{animationDuration: '4s'}}></div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
<span className="iconify text-ember mb-3" data-icon="lucide:book-open" data-width="20" style={{strokeWidth: '1'}}></span>
<h3 className="text-lg font-display font-medium tracking-tight text-white/90">The Oral History</h3>
<p className="text-xs text-stone-500 mt-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700">Preserving the voice and tone of loved ones.</p>
</div>
</div>
</div>

<div className="group relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-700">

<div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-80 transition-opacity duration-1000">
<div className="w-64 h-32 bg-gold/10 rounded-full blur-[50px] rotate-45"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
<span className="iconify text-ember mb-3" data-icon="lucide:image" data-width="20" style={{strokeWidth: '1'}}></span>
<h3 className="text-lg font-display font-medium tracking-tight text-white/90">Visual Archives</h3>
<p className="text-xs text-stone-500 mt-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700">Curating moments into a cohesive tapestry.</p>
</div>
</div>
</div>

<div className="group relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-700">

<div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-80 transition-opacity duration-1000">
<div className="w-32 h-32 bg-stone-500/10 rounded-full blur-[40px]"></div>
<div className="absolute w-24 h-24 bg-ember/20 rounded-full blur-[30px] translate-x-4"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
<span className="iconify text-ember mb-3" data-icon="lucide:mic" data-width="20" style={{strokeWidth: '1'}}></span>
<h3 className="text-lg font-display font-medium tracking-tight text-white/90">Life Lessons</h3>
<p className="text-xs text-stone-500 mt-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700">Passing down wisdom to the next generation.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="trust">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-ember text-xs font-medium uppercase tracking-widest mb-4 block">Our Promise</span>
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-8 text-white/90">A sanctuary of trust and privacy.</h2>
<p className="text-stone-400 font-light leading-relaxed mb-8">
                        In a world of noise, we offer a quiet space. Your data, your memories, and your interactions are treated with sacred respect. We are not here to sell; we are here to serve.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-stone-300 font-light">
<span className="iconify text-ember" data-icon="lucide:shield-check" data-width="16"></span>
                            Private by design, secure by default
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-300 font-light">
<span className="iconify text-ember" data-icon="lucide:heart" data-width="16"></span>
                            No advertisements, ever
                        </li>
<li className="flex items-center gap-3 text-sm text-stone-300 font-light">
<span className="iconify text-ember" data-icon="lucide:lock" data-width="16"></span>
                            Full ownership of your digital legacy
                        </li>
</ul>
</div>

<div className="relative h-96 w-full rounded-full border border-white/5 flex items-center justify-center bg-white/[0.01]">
<div className="absolute inset-0 bg-halo-soft rounded-full"></div>
<div className="w-64 h-64 rounded-full border border-white/5 flex items-center justify-center animate-pulse" style={{animationDuration: '8s'}}>
<div className="w-32 h-32 rounded-full bg-ember/5 blur-2xl"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5 bg-[#0D0E14]" id="conversation">
<div className="max-w-2xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-6 text-white/90">Begin a conversation</h2>
<p className="text-stone-400 text-sm font-light">We invite you to share your needs, or simply say hello. There is no rush.</p>
</div>
<form className="space-y-8">
<div className="space-y-1">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wide ml-1" htmlFor="name">Your Name</label>
<input className="w-full bg-transparent border-b border-white/10 px-1 py-4 text-base text-white/90 focus:outline-none focus:border-ember transition-colors placeholder:text-stone-700 font-light" id="name" placeholder="How should we address you?" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wide ml-1" htmlFor="email">Email Address</label>
<input className="w-full bg-transparent border-b border-white/10 px-1 py-4 text-base text-white/90 focus:outline-none focus:border-ember transition-colors placeholder:text-stone-700 font-light" id="email" placeholder="Where can we reach you?" type="email"/>
</div>
<div className="space-y-4 pt-4">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wide ml-1">What is on your mind?</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="interest" type="radio"/>
<div className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs text-stone-400 hover:bg-white/[0.05] peer-checked:bg-ember/10 peer-checked:border-ember/40 peer-checked:text-ember transition-all">
                                Exploring Connection
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="interest" type="radio"/>
<div className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs text-stone-400 hover:bg-white/[0.05] peer-checked:bg-ember/10 peer-checked:border-ember/40 peer-checked:text-ember transition-all">
                                Preserving Memories
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="interest" type="radio"/>
<div className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs text-stone-400 hover:bg-white/[0.05] peer-checked:bg-ember/10 peer-checked:border-ember/40 peer-checked:text-ember transition-all">
                                Just Curious
                            </div>
</label>
</div>
</div>
<div className="pt-8">
<button className="w-full py-5 bg-white/5 border border-white/10 text-white/90 font-medium rounded-lg hover:bg-white/10 transition-all duration-500 text-sm tracking-wide flex items-center justify-center gap-2 group" type="button">
                        Send Message
                        <span className="iconify group-hover:translate-x-1 transition-transform duration-500 text-ember" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-primary pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<a className="font-display text-lg tracking-tight font-medium text-stone-300 block mb-2" href="#">Hello Emberly</a>
<p className="text-stone-600 text-xs font-light">
                        Honoring the village within us all.
                    </p>
</div>
<div className="flex gap-8 text-xs text-stone-600 font-light">
<a className="hover:text-stone-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-stone-400 transition-colors" href="#">Ethics</a>
<a className="hover:text-stone-400 transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
