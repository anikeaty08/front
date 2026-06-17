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



        // Data Structure with High-Quality Unsplash Images
        const concernsData = [
            {
                id: 'pigmentation',
                title: 'Pigmentation & Melasma',
                subtitle: 'Sun damage, uneven patches',
                description: 'Advanced phototherapy designed to shatter melanin deposits and suppress future pigment formation for a porcelain finish.',
                image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop',
                treatments: ['PicoSure® Pro Laser', 'Cosmelan De-pigmentation', 'Mesoestetic Peels']
            },
            {
                id: 'acne',
                title: 'Active Acne & Congestion',
                subtitle: 'Breakouts, inflammation',
                description: 'Multi-modality approach targeting bacteria, inflammation, and oil regulation to restore a clear, healthy microbiome.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
                treatments: ['AviClear™ Laser', 'Carbon Laser Peel', 'LED Blue Light Therapy']
            },
            {
                id: 'aging',
                title: 'Fine Lines & Wrinkles',
                subtitle: 'Crow’s feet, forehead lines',
                description: 'Collagen-inducing therapies that smooth static lines and restore structural integrity to the dermal layer.',
                image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop',
                treatments: ['Sofwave™ Ultrasound', 'RF Microneedling', 'Anti-Wrinkle Injections']
            },
            {
                id: 'glow',
                title: 'Dullness & Dehydration',
                subtitle: 'Lack of radiance, rough texture',
                description: 'Instant revitalization treatments that exfoliate dead cells and infuse deep hydration for a signature "glass skin" glow.',
                image: 'https://images.unsplash.com/photo-1601275306648-52822a9693bc?q=80&w=2069&auto=format&fit=crop',
                treatments: ['HydraFacial Elite', 'Clear + Brilliant®', 'Skin Boosters']
            },
            {
                id: 'lift',
                title: 'Sagging & Laxity',
                subtitle: 'Jowls, neck looseness',
                description: 'Non-surgical lifting technologies that tighten the SMAS layer and define the jawline contour.',
                image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop',
                treatments: ['Ultherapy® Lift', 'Morpheus8', 'Thread Lifting']
            },
            {
                id: 'scars',
                title: 'Acne Scarring',
                subtitle: 'Pitted texture, post-acne marks',
                description: 'Intensive resurfacing to break down scar tissue and stimulate smooth, healthy collagen production.',
                image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2074&auto=format&fit=crop',
                treatments: ['Fractional CO2', 'Dermapen 4™', 'TCA Cross']
            },
            {
                id: 'redness',
                title: 'Redness & Rosacea',
                subtitle: 'Flushing, visible capillaries',
                description: 'Vascular laser therapy specifically calibrated to coagulate vessels and reduce persistent facial redness.',
                image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop',
                treatments: ['V-Beam Prima', 'Excel V+ Laser', 'Soothing Enzyme Mask']
            },
            {
                id: 'body',
                title: 'Body Contouring',
                subtitle: 'Stubborn fat, loose skin',
                description: 'Sculpt and define the body silhouette through non-invasive fat reduction and skin tightening.',
                image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop',
                treatments: ['CoolSculpting® Elite', 'Emsculpt NEO', 'Body HIFU']
            }
        ];

        // Init
        const gridContainer = document.getElementById('concerns-grid');
        const panelEmpty = document.getElementById('panel-empty');
        const panelContent = document.getElementById('panel-content');
        const titleEl = document.getElementById('selected-concern-title');
        const descEl = document.getElementById('selected-concern-desc');
        const listEl = document.getElementById('treatment-list');
        const imgEl = document.getElementById('concern-image');

        // Render Grid
        concernsData.forEach(item => {
            const card = document.createElement('div');
            card.className = `group bg-white p-5 rounded-xl border border-rose-100/60 hover:border-rose-300 hover:shadow-md hover:shadow-rose-100/50 cursor-pointer transition-all duration-300 flex flex-col justify-between h-full select-none relative overflow-hidden`;
            card.setAttribute('data-id', item.id);
            
            card.innerHTML = `
                <div class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-rose-50 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div class="flex justify-between items-start mb-3 relative z-10">
                    <div class="w-8 h-8 rounded-lg bg-rose-50/50 text-rose-300 group-hover:text-rose-600 group-hover:bg-rose-100 flex items-center justify-center transition-colors">
                         <span class="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
                    </div>
                </div>
                <div class="relative z-10">
                    <h3 class="text-sm font-medium text-gray-900 group-hover:text-rose-950 tracking-tight mb-1">${item.title}</h3>
                    <p class="text-[11px] text-gray-400 font-light leading-relaxed group-hover:text-gray-500">${item.subtitle}</p>
                </div>
            `;

            card.addEventListener('click', () => handleSelect(item.id));
            gridContainer.appendChild(card);
        });

        function handleSelect(id) {
            // Update Active State Visuals
            const cards = gridContainer.children;
            Array.from(cards).forEach(c => {
                if(c.getAttribute('data-id') === id) {
                    c.classList.remove('border-rose-100/60', 'bg-white');
                    c.classList.add('ring-1', 'ring-rose-400', 'border-rose-400', 'bg-rose-50/30');
                } else {
                    c.classList.add('border-rose-100/60', 'bg-white');
                    c.classList.remove('ring-1', 'ring-rose-400', 'border-rose-400', 'bg-rose-50/30');
                }
            });

            // Find Data
            const data = concernsData.find(c => c.id === id);
            
            // Update Panel
            panelEmpty.classList.add('hidden');
            panelContent.classList.remove('hidden');
            
            // Re-trigger animation
            panelContent.classList.remove('fade-in');
            void panelContent.offsetWidth; 
            panelContent.classList.add('fade-in');

            titleEl.textContent = data.title;
            descEl.textContent = data.description;
            imgEl.src = data.image;
            
            // Build Treatment List with nicer styling
            listEl.innerHTML = '';
            data.treatments.forEach((t, index) => {
                const li = document.createElement('li');
                // Stagger animation for list items
                li.style.animation = `fadeIn 0.4s ease-out forwards ${index * 0.1}s`;
                li.style.opacity = '0'; 
                
                li.className = 'flex items-center justify-between p-3 rounded-lg bg-gray-50/50 border border-gray-100 hover:border-rose-200 hover:bg-white transition-all cursor-pointer group/item';
                li.innerHTML = `
                    <div class="flex items-center gap-3">
                        <span class="w-1.5 h-1.5 rounded-full bg-rose-200 group-hover/item:bg-rose-400 transition-colors"></span>
                        <span class="text-xs font-medium text-gray-600 group-hover/item:text-gray-900">${t}</span>
                    </div>
                    <span class="iconify text-gray-300 group-hover/item:text-rose-400 transition-colors" data-icon="lucide:chevron-right" data-width="14"></span>
                `;
                listEl.appendChild(li);
            });

            if(window.innerWidth < 1024) {
                document.getElementById('treatment-panel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
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
      
<div className="bg-gradient-blur"></div>

<header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-rose-100/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<span className="iconify text-rose-400" data-icon="lucide:flower-2" data-width="20"></span>
<div className="text-xs font-semibold tracking-widest uppercase text-gray-900">
                    Lumière<span className="text-rose-400">Skin</span>
</div>
</div>
<nav className="hidden md:flex gap-8">
<a className="text-xs font-medium text-gray-500 hover:text-rose-500 transition-colors" href="#">Treatments</a>
<a className="text-xs font-medium text-rose-500 transition-colors" href="#">Concerns</a>
<a className="text-xs font-medium text-gray-500 hover:text-rose-500 transition-colors" href="#">Clinic</a>
<a className="text-xs font-medium text-gray-500 hover:text-rose-500 transition-colors" href="#">Journal</a>
</nav>
<button className="text-xs font-medium bg-rose-950 text-white px-5 py-2.5 rounded-full hover:bg-rose-900 hover:shadow-lg hover:shadow-rose-200/50 transition-all duration-300">
                Book Consultation
            </button>
</div>
</header>
<main className="pt-32 max-w-7xl mx-auto px-6">

<div className="mb-12 max-w-2xl">
<div className="flex items-center gap-2 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></span>
<span className="text-[10px] font-bold text-rose-400 uppercase tracking-[0.2em]">Diagnostic Pathway</span>
</div>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4">
                Identify your <span className="text-rose-900/80 italic font-serif">skin priorities</span>
</h1>
<p className="text-gray-500 text-sm md:text-base font-light leading-relaxed max-w-lg">
                Select your primary concern to reveal our curated, medical-grade treatment protocols tailored for rejuvenation.
            </p>
</div>

<div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 relative">

<div className="lg:col-span-7 order-2 lg:order-1">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="concerns-grid">

</div>
</div>

<div className="lg:col-span-5 order-1 lg:order-2">
<div className="lg:sticky lg:top-28 transition-all duration-500">
<div className="bg-white border border-rose-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden min-h-[500px] flex flex-col relative" id="treatment-panel">

<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10 bg-white/50 backdrop-blur-sm" id="panel-empty">
<div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center mb-5">
<span className="iconify text-rose-300" data-icon="lucide:sparkles" data-width="24"></span>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-2">Select an Area of Focus</h3>
<p className="text-xs text-gray-400 max-w-[240px] leading-relaxed">Explore our clinical library by selecting a condition from the list.</p>
</div>

<div className="hidden flex-col h-full fade-in z-20" id="panel-content">

<div className="relative h-48 w-full overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
<img alt="Treatment" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" id="concern-image" src=""/>
<div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-full border border-white/50 shadow-sm">
<span className="text-[10px] font-semibold tracking-wider text-rose-900 uppercase">Clinically Proven</span>
</div>
</div>
<div className="p-6 pt-2 flex-1 flex flex-col">
<div className="mb-6">
<h2 className="text-2xl font-serif text-gray-900 mb-2" id="selected-concern-title">
                                        Pigmentation
                                    </h2>
<p className="text-sm text-gray-500 leading-relaxed font-light" id="selected-concern-desc">
                                        Targeted solutions to restore skin clarity.
                                    </p>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-2 mb-2">
<span className="iconify text-rose-400" data-icon="lucide:stethoscope" data-width="14"></span>
<h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Suggested Protocol</h3>
</div>
<ul className="space-y-2" id="treatment-list">

</ul>
</div>
<div className="mt-auto pt-6 border-t border-rose-50">
<button className="w-full group relative overflow-hidden rounded-xl bg-rose-950 text-white p-4 transition-all hover:bg-rose-900 shadow-lg shadow-rose-900/10">
<div className="relative z-10 flex items-center justify-between">
<span className="text-xs font-medium tracking-wide pl-1">Schedule Analysis</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
</button>
</div>
</div>
</div>
</div>

<div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-gray-400 font-medium tracking-wide uppercase">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:check" data-width="12"></span> FDA Approved</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:check" data-width="12"></span> No Downtime</span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
