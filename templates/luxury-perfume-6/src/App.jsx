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
serif: ['Cormorant Garamond', 'serif'],
},
colors: {
stone: {
50: '#FAF9F6',
100: '#F5F3EF',
200: '#EBE7E0',
300: '#D6D1C7',
800: '#44403C',
900: '#292524',
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
      

<nav className="fixed top-0 w-full z-50 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-serif text-xl tracking-wide uppercase text-stone-900" href="#">Atheelah’s</a>
<div className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors duration-300" href="#story">Our Story</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="#trio">Scents</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="#collection">The Flagship</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="#craft">Craft</a>
</div>
<div className="flex items-center gap-4">
<button className="text-stone-600 hover:text-stone-900 transition-colors">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="md:hidden text-stone-600">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

<div className="absolute inset-0 z-0">
<img alt="Bo Kaap Blue Car Colorful Streets" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-stone-900/50 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-stone-900/40"></div>
</div>
<div className="relative z-10 max-w-2xl mx-auto text-center px-6 animate-fade-up">
<span className="inline-block mb-4 text-xs tracking-[0.2em] uppercase text-stone-200 font-medium">Small Batch · Cape Malay Heritage</span>
<h1 className="font-serif text-5xl md:text-7xl leading-tight tracking-tight text-white mb-6 font-medium drop-shadow-sm">
                Silence the noise.<br/>
<span className="italic font-light text-stone-200">Awaken the memory.</span>
</h1>
<p className="text-stone-100 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-10 font-light drop-shadow-sm">
                Luxury perfumes born from the rituals of the Cape. Oud, spice, and the weight of history, distilled into a moment of stillness.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="group relative px-8 py-3 bg-stone-50 text-stone-900 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white hover:shadow-lg border border-transparent" href="#trio">
                    Discover Collection
                </a>
<a className="flex items-center gap-2 text-xs tracking-widest uppercase text-white border-b border-transparent hover:border-white transition-all duration-300 pb-0.5" href="#story">
                    Read the Story
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-stone-50" id="story">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
<div className="relative order-2 md:order-1">
<div className="aspect-[3/4] overflow-hidden bg-stone-200">
<img alt="Hands crafting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] sepia-[20%]" src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="order-1 md:order-2">
<iconify-icon className="text-stone-400 mb-6" icon="lucide:clock" strokeWidth="1.5" width="32"></iconify-icon>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-8 text-stone-900">Not just a scent.<br/>A ritual of return.</h2>
<div className="space-y-6 text-stone-600 font-light text-sm md:text-base leading-relaxed">
<p>
                            In a world that demands speed, we choose the slow path. Atheelah’s Scents was founded on a simple premise: fragrance is not merely an accessory, but an anchor to identity.
                        </p>
<p>
                            Inspired by the Cape Malay heritage of South Africa, our perfumes are olfactory archives. We blend precious oud with the spices of our ancestors, creating scents that do not shout, but whisper stories of connection, warmth, and dignity.
                        </p>
<p>
                            We create intentionally. Small batches. Patient aging. Ingredients selected not for their potency, but for their ability to evoke a feeling of home.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="trio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-xs tracking-[0.2em] uppercase text-stone-500 font-medium block mb-3">The Collection</span>
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight">Curated Fragments</h2>
</div>
<a className="text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2 pb-1 border-b border-transparent hover:border-stone-900" href="#collection">
                    View Full Catalogue
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 overflow-hidden mb-6">
<img alt="Saffron Dust Bottle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500"></div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] uppercase tracking-widest border border-stone-200">Best Seller</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-2xl text-stone-900 mb-1 group-hover:text-stone-600 transition-colors">Saffron Dust</h3>
<p className="text-[10px] tracking-widest uppercase text-stone-500">Tobacco • Honey • Amber</p>
</div>
<span className="text-stone-900 font-medium text-sm">$120</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 overflow-hidden mb-6">
<img alt="Midnight Oud Bottle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1615160627253-e53b49e54d69?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-2xl text-stone-900 mb-1 group-hover:text-stone-600 transition-colors">Midnight Oud</h3>
<p className="text-[10px] tracking-widest uppercase text-stone-500">Black Musk • Cedar • Smoke</p>
</div>
<span className="text-stone-900 font-medium text-sm">$145</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 overflow-hidden mb-6">
<img alt="Velvet Rose Bottle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500"></div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] uppercase tracking-widest border border-stone-200">New Arrival</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-2xl text-stone-900 mb-1 group-hover:text-stone-600 transition-colors">Velvet Rose</h3>
<p className="text-[10px] tracking-widest uppercase text-stone-500">Damask Rose • Vanilla • Clove</p>
</div>
<span className="text-stone-900 font-medium text-sm">$135</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="collection">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs tracking-[0.2em] uppercase text-stone-500">The Flagship</span>
<h2 className="font-serif text-4xl md:text-5xl mt-3 text-stone-900 tracking-tight">Boeber Aand</h2>
<p className="mt-4 text-stone-600 font-light italic">"A winter evening, shared warmth, soft spice in the air."</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="group relative flex flex-col justify-between p-8 bg-white border border-stone-200 overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-stone-300">
<div>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center mb-6 text-stone-400">
<iconify-icon icon="lucide:flame" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-2">The Opening</h3>
<p className="text-sm text-stone-500 font-light">Cinnamon &amp; Sweet Milk</p>
</div>
<div className="mt-8 text-sm text-stone-600 leading-relaxed font-light">
                        Like the first sip of warm milk on the 15th night. A comforting, creamy spice that invites closeness. It settles on the skin like cashmere.
                    </div>
<div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
</div>

<div className="relative bg-[#EAE8E4] flex items-center justify-center overflow-hidden">
<img alt="Boeber Aand Bottle" className="relative z-10 max-h-[80%] drop-shadow-2xl opacity-90 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-900/10"></div>
<div className="absolute top-6 right-6">
<span className="px-3 py-1 bg-white/50 backdrop-blur text-[10px] uppercase tracking-widest border border-stone-300">Extrait de Parfum</span>
</div>
</div>

<div className="group relative flex flex-col justify-between p-8 bg-stone-900 text-stone-100 border border-stone-800 overflow-hidden">
<div>
<div className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center mb-6 text-stone-400">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-2">The Foundation</h3>
<p className="text-sm text-stone-400 font-light">Aged Oud &amp; Cardamom</p>
</div>
<div className="mt-8 text-sm text-stone-300 leading-relaxed font-light">
                        The spice gives way to the deep, resinous silence of oud. Grounding. Earthy. It lingers for hours, transforming into a personal aura that is distinctly yours.
                    </div>
<div className="absolute top-0 right-0 w-40 h-40 bg-stone-700 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
</div>
</div>
<div className="mt-10 flex justify-center">
<button className="flex items-center gap-3 px-10 py-4 bg-stone-900 text-stone-50 text-xs tracking-widest uppercase hover:bg-stone-800 transition-colors">
                    Experience Boeber Aand
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200" id="craft">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
<div className="space-y-4">
<iconify-icon className="text-stone-400 mx-auto md:mx-0" icon="lucide:check-circle-2" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-medium text-lg text-stone-900">Precious Oud</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed">
                        Sourced sustainably, our oud is resinous and complex. It is the gold of perfumery, chosen for its ability to evolve on the skin over time.
                    </p>
</div>
<div className="space-y-4">
<iconify-icon className="text-stone-400 mx-auto md:mx-0" icon="lucide:flask-conical" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-medium text-lg text-stone-900">Small Batch Philosophy</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed">
                        Mass production dilutes the soul. We blend in limited quantities, ensuring every bottle is poured with intention and inspected for clarity.
                    </p>
</div>
<div className="space-y-4">
<iconify-icon className="text-stone-400 mx-auto md:mx-0" icon="lucide:heart" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-medium text-lg text-stone-900">Spice with Meaning</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed">
                        Cinnamon and cardamom are not just ingredients; they are memories. We use pharmaceutical-grade oils to capture the truest essence of the spice.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-0 border-t border-stone-200">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="bg-stone-100 p-12 md:p-24 flex flex-col justify-center">
<h2 className="font-serif text-3xl md:text-5xl leading-tight text-stone-900 mb-8">
                    Grounded in earth.<br/>
<span className="text-stone-400">Elevated by spirit.</span>
</h2>
<div className="space-y-6 max-w-sm">
<div className="flex gap-4 items-start">
<iconify-icon className="text-stone-400 mt-1" icon="lucide:user" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-stone-900 uppercase tracking-wide mb-1">Confident</h4>
<p className="text-stone-600 text-sm font-light">Wear a scent that commands respect without demanding attention.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-stone-400 mt-1" icon="lucide:link" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-stone-900 uppercase tracking-wide mb-1">Connected</h4>
<p className="text-stone-600 text-sm font-light">A tangible link to heritage, ritual, and the comfort of the past.</p>
</div>
</div>
</div>
</div>
<div className="h-96 md:h-auto bg-stone-300 relative">
<img alt="Mood texture" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-stone-300 mb-8" icon="lucide:quote" strokeWidth="1.5" width="40"></iconify-icon>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="bg-white p-8 border border-stone-100 shadow-sm">
<p className="font-serif text-lg text-stone-800 italic mb-6">"Finally, a scent that feels like home. It’s rich and complex, but never overpowering. It smells like a memory I didn't know I had."</p>
<span className="text-xs uppercase tracking-widest text-stone-400">Amirah S.</span>
</div>
<div className="bg-white p-8 border border-stone-100 shadow-sm">
<p className="font-serif text-lg text-stone-800 italic mb-6">"I stopped buying mass-market colognes after finding Boeber Aand. There is a depth to the oud that feels sacred. Truly distinct."</p>
<span className="text-xs uppercase tracking-widest text-stone-400">Tariq J.</span>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-50 py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 opacity-10">
<div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
</div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="font-serif text-4xl md:text-6xl mb-6 tracking-tight">Own the moment.</h2>
<p className="text-stone-400 font-light text-base md:text-lg mb-10 max-w-lg mx-auto">
                Your scent is your signature. Make it one of substance, heritage, and quiet luxury.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="px-10 py-4 bg-stone-50 text-stone-900 text-xs tracking-widest uppercase hover:bg-stone-200 transition-colors w-full sm:w-auto">
                    Shop Boeber Aand
                </button>
</div>
<div className="mt-24 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 tracking-wider uppercase">
<p>© 2024 Atheelah’s Scents.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-stone-300" href="#">Instagram</a>
<a className="hover:text-stone-300" href="#">Contact</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
