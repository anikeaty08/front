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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
bodh: {
50: '#FDFBF7',
100: '#F5F0E6',
200: '#E6DCC3',
300: '#D4C49F',
400: '#C5A059', /* Gold */
500: '#A6823E',
600: '#8A622A',
700: '#5C411A', /* Dark Brown */
800: '#3D2A11',
900: '#26190A',
saffron: '#E07A5F', /* Light Saffron */
}
}
}
}
}



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
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-bodh-50/90 backdrop-blur-md border-b border-bodh-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-bodh-400 text-2xl group-hover:rotate-12 transition-transform duration-500" icon="solar:lotus-linear"></iconify-icon>
<span className="font-sans font-medium tracking-[0.2em] text-sm uppercase text-bodh-900">Bodhgaya</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm text-bodh-700 hover:text-bodh-400 transition-colors" href="#about">History</a>
<a className="text-sm text-bodh-700 hover:text-bodh-400 transition-colors" href="#monuments">Temples</a>
<a className="text-sm text-bodh-700 hover:text-bodh-400 transition-colors" href="#hotels">Hotels</a>
<a className="text-sm text-bodh-700 hover:text-bodh-400 transition-colors" href="#guide">Guide</a>

<div className="relative group">
<button className="flex items-center gap-1 text-sm text-bodh-700 hover:text-bodh-400 transition-colors py-2">
<iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon>
<span>EN</span>
<iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-bodh-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
<div className="py-1">
<a className="block px-4 py-2 text-sm text-bodh-700 hover:bg-bodh-50 hover:text-bodh-400" href="#">English</a>
<a className="block px-4 py-2 text-sm text-bodh-700 hover:bg-bodh-50 hover:text-bodh-400" href="#">हिन्दी</a>
<a className="block px-4 py-2 text-sm text-bodh-700 hover:bg-bodh-50 hover:text-bodh-400" href="#">日本語</a>
</div>
</div>
</div>
</div>

<div className="md:hidden flex items-center">
<button className="text-bodh-800 hover:text-bodh-400 transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 w-full h-full">
<img alt="Mahabodhi Temple" className="w-full h-full object-cover object-center transform scale-105 motion-safe:animate-[pulse_20s_ease-in-out_infinite_alternate]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-bodh-900/40 via-bodh-900/30 to-bodh-900/80 mix-blend-multiply"></div>
</div>

<div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
<span className="block text-bodh-200 font-sans tracking-[0.3em] text-xs uppercase mb-6 animate-fade-in-up">The Sacred Center of Buddhism</span>
<h1 className="font-serif font-medium text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-tight mb-8 drop-shadow-lg">
                Experience the <br/>
<span className="text-bodh-300 italic font-normal">Enlightenment</span> Land
            </h1>
<p className="text-bodh-100 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto drop-shadow">
                Journey to Bodh Gaya, where Prince Siddhartha Gautama attained supreme enlightenment and became the Buddha under the sacred Bodhi Tree.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-bodh-400 hover:bg-bodh-500 text-white text-sm font-medium tracking-wide rounded-sm transition-all duration-300 flex items-center justify-center gap-2" href="#about">
                    Explore History
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-bodh-200 text-white hover:bg-white/10 text-sm font-medium tracking-wide rounded-sm transition-all duration-300 backdrop-blur-sm" href="#hotels">
                    Plan Your Visit
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
<span className="text-xs tracking-widest uppercase">Scroll</span>
<iconify-icon className="text-xl" icon="solar:mouse-minimalistic-linear"></iconify-icon>
</div>
</header>

<section className="py-24 md:py-32 bg-bodh-50 relative" id="about">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent to-bodh-300"></div>
<div className="max-w-4xl mx-auto px-4 text-center">
<iconify-icon className="text-4xl text-bodh-400 mb-6" icon="solar:leaf-linear"></iconify-icon>
<h2 className="font-serif font-medium text-3xl md:text-5xl text-bodh-900 tracking-tight mb-8">The Awakening of the World</h2>
<p className="text-bodh-700 text-lg md:text-xl leading-relaxed font-light">
                Bodh Gaya is not just a destination; it is the spiritual epicenter for millions. It was here, over 2,500 years ago, beneath the sprawling canopy of the <span className="text-bodh-500 font-medium">Mahabodhi Tree</span>, that Gautama Buddha found the answers to the suffering of existence. Today, it stands as a testament to peace, drawing seekers, monks, and travelers to its golden embrace.
            </p>
</div>
</section>

<section className="py-20 bg-white border-y border-bodh-100">
<div className="max-w-5xl mx-auto px-4">
<div className="text-center mb-16">
<span className="text-bodh-saffron text-xs tracking-widest uppercase font-medium">Journey Through Time</span>
<h2 className="font-serif font-medium text-3xl md:text-4xl text-bodh-900 tracking-tight mt-2">Historical Significance</h2>
</div>
<div className="relative border-l border-bodh-200 ml-4 md:ml-0 md:mx-auto md:w-px md:border-none md:bg-bodh-200 flex flex-col gap-12">

<div className="relative pl-8 md:pl-0 md:w-1/2 md:pr-12 self-start">
<div className="absolute left-[-5px] md:right-[-5px] md:left-auto top-1 w-2.5 h-2.5 rounded-full bg-bodh-400 ring-4 ring-white"></div>
<span className="text-xs font-medium text-bodh-400 mb-1 block">c. 528 BCE</span>
<h3 className="font-serif font-medium text-xl text-bodh-900 mb-2 tracking-tight">The Enlightenment</h3>
<p className="text-sm text-bodh-600 leading-relaxed">After 49 days of meditation, Prince Siddhartha attains enlightenment under the Bodhi tree, becoming the Buddha.</p>
</div>

<div className="relative pl-8 md:pl-0 md:w-1/2 md:pl-12 self-end md:text-left">
<div className="absolute left-[-5px] md:left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-bodh-400 ring-4 ring-white"></div>
<span className="text-xs font-medium text-bodh-400 mb-1 block">c. 260 BCE</span>
<h3 className="font-serif font-medium text-xl text-bodh-900 mb-2 tracking-tight">Emperor Ashoka's Visit</h3>
<p className="text-sm text-bodh-600 leading-relaxed">The Mauryan Emperor Ashoka visits Bodh Gaya, establishing the first temple and marking it as a major pilgrimage site.</p>
</div>

<div className="relative pl-8 md:pl-0 md:w-1/2 md:pr-12 self-start">
<div className="absolute left-[-5px] md:right-[-5px] md:left-auto top-1 w-2.5 h-2.5 rounded-full bg-bodh-400 ring-4 ring-white"></div>
<span className="text-xs font-medium text-bodh-400 mb-1 block">5th - 6th Century CE</span>
<h3 className="font-serif font-medium text-xl text-bodh-900 mb-2 tracking-tight">Current Temple Structure</h3>
<p className="text-sm text-bodh-600 leading-relaxed">The majestic pyramidal tower of the Mahabodhi Temple as seen today is largely constructed during the Gupta period.</p>
</div>

<div className="relative pl-8 md:pl-0 md:w-1/2 md:pl-12 self-end md:text-left">
<div className="absolute left-[-5px] md:left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-bodh-400 ring-4 ring-white"></div>
<span className="text-xs font-medium text-bodh-400 mb-1 block">2002</span>
<h3 className="font-serif font-medium text-xl text-bodh-900 mb-2 tracking-tight">UNESCO World Heritage</h3>
<p className="text-sm text-bodh-600 leading-relaxed">The Mahabodhi Temple Complex is recognized as a World Heritage site, cementing its global importance.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAF8F5]" id="monuments">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="font-serif font-medium text-3xl md:text-4xl text-bodh-900 tracking-tight mb-4">Sacred Monuments</h2>
<p className="text-bodh-600 text-sm md:text-base leading-relaxed">Explore the magnificent monasteries and statues built by Buddhist nations from around the world, each reflecting their unique architectural heritage.</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-bodh-200 text-bodh-600 hover:bg-bodh-100 transition-colors"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="p-2 rounded-full border border-bodh-200 text-bodh-600 hover:bg-bodh-100 transition-colors"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-bodh-100 transition-all duration-300 flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Mahabodhi Temple" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="p-6 flex-grow flex flex-col">
<h3 className="font-serif font-medium text-lg text-bodh-900 mb-2 tracking-tight">Mahabodhi Temple</h3>
<p className="text-xs text-bodh-500 mb-6 flex-grow leading-relaxed">The main temple complex, home to the sacred Bodhi Tree and the Vajrasana (Diamond Throne).</p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-bodh-saffron group-hover:text-bodh-500 transition-colors uppercase tracking-wide" href="#">
                            View Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-bodh-100 transition-all duration-300 flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Great Buddha Statue" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-6 flex-grow flex flex-col">
<h3 className="font-serif font-medium text-lg text-bodh-900 mb-2 tracking-tight">Great Buddha Statue</h3>
<p className="text-xs text-bodh-500 mb-6 flex-grow leading-relaxed">An 80-foot majestic stone statue of Lord Buddha in deep meditation, consecrated by the Dalai Lama.</p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-bodh-saffron group-hover:text-bodh-500 transition-colors uppercase tracking-wide" href="#">
                            View Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-bodh-100 transition-all duration-300 flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Thai Monastery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex-grow flex flex-col">
<h3 className="font-serif font-medium text-lg text-bodh-900 mb-2 tracking-tight">Thai Monastery</h3>
<p className="text-xs text-bodh-500 mb-6 flex-grow leading-relaxed">Adorned with a sloping roof covered in golden tiles, reflecting classical Thai architecture.</p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-bodh-saffron group-hover:text-bodh-500 transition-colors uppercase tracking-wide" href="#">
                            View Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-bodh-100 transition-all duration-300 flex flex-col">
<div className="relative h-64 overflow-hidden bg-bodh-100">

<div className="w-full h-full flex items-center justify-center text-bodh-300 bg-[url('https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"></div>
</div>
<div className="p-6 flex-grow flex flex-col">
<h3 className="font-serif font-medium text-lg text-bodh-900 mb-2 tracking-tight">Indosan Nipponji</h3>
<p className="text-xs text-bodh-500 mb-6 flex-grow leading-relaxed">The Japanese temple featuring exquisite wooden architecture and beautiful Buddhist paintings.</p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-bodh-saffron group-hover:text-bodh-500 transition-colors uppercase tracking-wide" href="#">
                            View Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="guide">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-serif font-medium text-3xl md:text-4xl text-bodh-900 tracking-tight">Travel Guide</h2>
<p className="text-sm text-bodh-500 mt-3 max-w-xl mx-auto">Everything you need to know for a peaceful and well-planned pilgrimage.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 bg-bodh-50 rounded-lg border border-bodh-100">
<div className="w-10 h-10 rounded-full bg-bodh-200 flex items-center justify-center text-bodh-700 mb-4">
<iconify-icon className="text-xl" icon="solar:cloud-sun-linear"></iconify-icon>
</div>
<h4 className="font-serif font-medium text-lg text-bodh-900 mb-2">Best Time to Visit</h4>
<p className="text-xs text-bodh-600 leading-relaxed">October to March. The weather is pleasant, making it ideal for meditation and exploring the temples comfortably.</p>
</div>

<div className="p-6 bg-bodh-50 rounded-lg border border-bodh-100">
<div className="w-10 h-10 rounded-full bg-bodh-200 flex items-center justify-center text-bodh-700 mb-4">
<iconify-icon className="text-xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<h4 className="font-serif font-medium text-lg text-bodh-900 mb-2">How to Reach</h4>
<p className="text-xs text-bodh-600 leading-relaxed">Gaya Airport (12km) offers limited flights. Gaya Junction (16km) is well-connected by train across India.</p>
</div>

<div className="p-6 bg-bodh-50 rounded-lg border border-bodh-100">
<div className="w-10 h-10 rounded-full bg-bodh-200 flex items-center justify-center text-bodh-700 mb-4">
<iconify-icon className="text-xl" icon="solar:plate-linear"></iconify-icon>
</div>
<h4 className="font-serif font-medium text-lg text-bodh-900 mb-2">Food &amp; Dining</h4>
<p className="text-xs text-bodh-600 leading-relaxed">A mix of Indian, Tibetan, and international vegetarian cuisine is available. Try the local Bihari delicacies.</p>
</div>

<div className="p-6 bg-bodh-50 rounded-lg border border-bodh-100">
<div className="w-10 h-10 rounded-full bg-bodh-200 flex items-center justify-center text-bodh-700 mb-4">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h4 className="font-serif font-medium text-lg text-bodh-900 mb-2">Travel Tips</h4>
<p className="text-xs text-bodh-600 leading-relaxed">Maintain silence inside temple premises. Dress modestly. Keep belongings secure in crowded areas.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bodh-50 border-t border-bodh-100" id="hotels">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
<div>
<h2 className="font-serif font-medium text-3xl md:text-4xl text-bodh-900 tracking-tight">Stay in Serenity</h2>
<p className="text-sm text-bodh-500 mt-2">Find the perfect accommodation for your spiritual journey.</p>
</div>

<div className="flex p-1 bg-white border border-bodh-200 rounded-md shadow-sm">
<button className="px-4 py-2 text-xs font-medium bg-bodh-100 text-bodh-900 rounded-sm transition-colors">All Places</button>
<button className="px-4 py-2 text-xs font-medium text-bodh-500 hover:text-bodh-900 transition-colors">Luxury</button>
<button className="px-4 py-2 text-xs font-medium text-bodh-500 hover:text-bodh-900 transition-colors">Budget</button>
<button className="px-4 py-2 text-xs font-medium text-bodh-500 hover:text-bodh-900 transition-colors">Monasteries</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-lg border border-bodh-100 overflow-hidden group">
<div className="h-48 relative overflow-hidden bg-bodh-200">
<img alt="Hotel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-medium tracking-wide uppercase text-bodh-800">Luxury</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif font-medium text-lg text-bodh-900 tracking-tight">The Imperial Bodhgaya</h3>
<div className="flex text-bodh-400 text-xs gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
</div>
<p className="text-xs text-bodh-500 mb-4 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> 500m from Mahabodhi Temple
                        </p>
<div className="flex justify-between items-center pt-4 border-t border-bodh-50">
<div>
<span className="text-xs text-bodh-400 block">Starting from</span>
<span className="text-lg font-medium text-bodh-900">₹4,500<span className="text-xs font-light text-bodh-500">/night</span></span>
</div>
<button className="px-4 py-2 bg-bodh-800 hover:bg-bodh-700 text-white text-xs font-medium rounded-sm transition-colors">Book Now</button>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-bodh-100 overflow-hidden group">
<div className="h-48 relative overflow-hidden bg-bodh-200">
<img alt="Hotel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-medium tracking-wide uppercase text-bodh-800">Comfort</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif font-medium text-lg text-bodh-900 tracking-tight">Hotel Taj Darbar</h3>
<div className="flex text-bodh-400 text-xs gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
</div>
<p className="text-xs text-bodh-500 mb-4 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> 1.2km from Mahabodhi Temple
                        </p>
<div className="flex justify-between items-center pt-4 border-t border-bodh-50">
<div>
<span className="text-xs text-bodh-400 block">Starting from</span>
<span className="text-lg font-medium text-bodh-900">₹2,800<span className="text-xs font-light text-bodh-500">/night</span></span>
</div>
<button className="px-4 py-2 bg-bodh-800 hover:bg-bodh-700 text-white text-xs font-medium rounded-sm transition-colors">Book Now</button>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-bodh-100 overflow-hidden group">
<div className="h-48 relative overflow-hidden bg-bodh-200">
<img alt="Guesthouse" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-medium tracking-wide uppercase text-bodh-800">Budget</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif font-medium text-lg text-bodh-900 tracking-tight">Bodhi Retreat</h3>
<div className="flex text-bodh-400 text-xs gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
</div>
<p className="text-xs text-bodh-500 mb-4 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> 2km from Mahabodhi Temple
                        </p>
<div className="flex justify-between items-center pt-4 border-t border-bodh-50">
<div>
<span className="text-xs text-bodh-400 block">Starting from</span>
<span className="text-lg font-medium text-bodh-900">₹1,200<span className="text-xs font-light text-bodh-500">/night</span></span>
</div>
<button className="px-4 py-2 bg-bodh-800 hover:bg-bodh-700 text-white text-xs font-medium rounded-sm transition-colors">Book Now</button>
</div>
</div>
</div>
</div>
<div className="text-center mt-10">
<a className="inline-flex items-center gap-2 text-sm text-bodh-700 hover:text-bodh-400 font-medium transition-colors border-b border-bodh-300 pb-1" href="#">
                    View All Accommodations <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row min-h-[60vh] bg-white border-t border-bodh-100">

<div className="w-full lg:w-1/2 p-4 md:p-8 grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="rounded-xl overflow-hidden h-40 md:h-64 relative group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="rounded-xl overflow-hidden h-32 md:h-48 relative group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
<div className="space-y-4 pt-8">
<div className="rounded-xl overflow-hidden h-32 md:h-48 relative group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-xl overflow-hidden h-40 md:h-64 relative group bg-bodh-100 flex items-center justify-center">
<div className="text-center">
<iconify-icon className="text-3xl text-bodh-400 mb-2" icon="solar:gallery-wide-linear"></iconify-icon>
<span className="block text-xs font-medium text-bodh-800 uppercase tracking-widest">View Gallery</span>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative bg-[#EFECE6] flex items-center justify-center p-8">

<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0wLDBIMjBWMjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzM0MzQzNCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
<div className="relative z-10 text-center bg-white/80 backdrop-blur p-8 rounded-xl border border-white shadow-xl max-w-sm w-full">
<div className="w-12 h-12 bg-bodh-100 rounded-full flex items-center justify-center mx-auto mb-4 text-bodh-500">
<iconify-icon className="text-2xl" icon="solar:map-linear"></iconify-icon>
</div>
<h3 className="font-serif font-medium text-2xl text-bodh-900 tracking-tight mb-2">Explore the Area</h3>
<p className="text-xs text-bodh-600 mb-6">Find monasteries, hotels, and points of interest on our interactive map.</p>
<button className="w-full py-3 bg-bodh-800 hover:bg-bodh-700 text-white text-sm font-medium rounded-sm transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Open Interactive Map
                </button>
</div>
</div>
</section>

<footer className="bg-bodh-900 text-bodh-200 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="flex items-center gap-2 mb-6 opacity-90 hover:opacity-100 transition-opacity" href="#">
<iconify-icon className="text-bodh-400 text-2xl" icon="solar:lotus-linear"></iconify-icon>
<span className="font-sans font-medium tracking-[0.2em] text-sm uppercase text-white">Bodhgaya</span>
</a>
<p className="text-xs font-light leading-relaxed text-bodh-300 max-w-xs">
                        The official tourism portal for Bodh Gaya. Discover the roots of Buddhism and experience profound peace in the land of enlightenment.
                    </p>
</div>

<div>
<h4 className="font-serif font-medium text-white text-lg tracking-tight mb-6">Navigation</h4>
<ul className="space-y-3">
<li><a className="text-xs font-light hover:text-bodh-400 transition-colors" href="#">Home</a></li>
<li><a className="text-xs font-light hover:text-bodh-400 transition-colors" href="#about">History &amp; Heritage</a></li>
<li><a className="text-xs font-light hover:text-bodh-400 transition-colors" href="#monuments">Temples &amp; Monasteries</a></li>
<li><a className="text-xs font-light hover:text-bodh-400 transition-colors" href="#hotels">Accommodations</a></li>
<li><a className="text-xs font-light hover:text-bodh-400 transition-colors" href="#guide">Travel Guide</a></li>
</ul>
</div>

<div>
<h4 className="font-serif font-medium text-white text-lg tracking-tight mb-6">Contact Us</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-xs font-light text-bodh-300">
<iconify-icon className="text-bodh-400 text-base mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>Tourist Information Center,<br/>Near Mahabodhi Temple,<br/>Bodh Gaya, Bihar 824231</span>
</li>
<li className="flex items-center gap-3 text-xs font-light text-bodh-300">
<iconify-icon className="text-bodh-400 text-base" icon="solar:phone-linear"></iconify-icon>
<span>+91 1234 567 890</span>
</li>
<li className="flex items-center gap-3 text-xs font-light text-bodh-300">
<iconify-icon className="text-bodh-400 text-base" icon="solar:letter-linear"></iconify-icon>
<span>info@bodhgaytourism.in</span>
</li>
</ul>
</div>

<div>
<h4 className="font-serif font-medium text-white text-lg tracking-tight mb-6">Stay Updated</h4>
<p className="text-xs font-light text-bodh-300 mb-4">Subscribe for travel tips and updates.</p>
<div className="flex">
<input className="w-full bg-bodh-800 border-y border-l border-bodh-700 text-white text-xs px-4 py-2 rounded-l-sm focus:outline-none focus:border-bodh-400 placeholder-bodh-500" placeholder="Your email address" type="email"/>
<button className="bg-bodh-400 hover:bg-bodh-500 text-white px-3 py-2 rounded-r-sm transition-colors flex items-center justify-center">
<iconify-icon icon="solar:plain-2-linear"></iconify-icon>
</button>
</div>

<div className="flex gap-4 mt-8">
<a className="w-8 h-8 rounded-full border border-bodh-700 flex items-center justify-center hover:bg-bodh-800 hover:text-white transition-all" href="#"><iconify-icon className="text-sm" icon="solar:instagram-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full border border-bodh-700 flex items-center justify-center hover:bg-bodh-800 hover:text-white transition-all" href="#"><iconify-icon className="text-sm" icon="solar:facebook-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full border border-bodh-700 flex items-center justify-center hover:bg-bodh-800 hover:text-white transition-all" href="#"><iconify-icon className="text-sm" icon="solar:twitter-linear"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-bodh-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] font-light text-bodh-500 tracking-wide uppercase">© 2023 Bodhgaya Tourism. All rights reserved.</p>
<div className="flex gap-4 text-[10px] font-light text-bodh-500">
<a className="hover:text-bodh-300" href="#">Privacy Policy</a>
<a className="hover:text-bodh-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
