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



        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('slider-container');
            const overlay = document.getElementById('slider-overlay');
            const handle = document.getElementById('slider-handle');
            const overlayImage = document.getElementById('overlay-image');
            
            // Sync overlay image width to container
            function syncImageWidth() {
                if(container && overlayImage) {
                    overlayImage.style.width = container.offsetWidth + 'px';
                }
            }
            window.addEventListener('resize', syncImageWidth);
            syncImageWidth();

            function updateSlider(x) {
                const rect = container.getBoundingClientRect();
                let position = x - rect.left;
                
                // Clamp position
                if (position < 0) position = 0;
                if (position > rect.width) position = rect.width;
                
                const percentage = (position / rect.width) * 100;
                
                overlay.style.width = `${percentage}%`;
                handle.style.left = `${percentage}%`;
            }

            container.addEventListener('mousemove', (e) => {
                updateSlider(e.clientX);
            });

            container.addEventListener('touchmove', (e) => {
                updateSlider(e.touches[0].clientX);
            });
            
            // Initialize at 50%
            updateSlider(container.getBoundingClientRect().left + (container.offsetWidth / 2));
        });
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter" href="#">FURNISH</a>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-500 font-medium">
<a className="hover:text-gray-900 transition-colors" href="#">Features</a>
<a className="hover:text-gray-900 transition-colors" href="#">Showcase</a>
<a className="hover:text-gray-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Log in</a>
<a className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors" href="#">Get started</a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center mb-12">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 mb-6">
                Transform your room with a single photo
            </h1>
<p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto mb-8">
                Upload any space and watch it become the interior you imagine in seconds.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group">
                    Try it now
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all">
                    See examples
                </button>
</div>
</div>

<div className="max-w-6xl mx-auto mt-16 relative select-none overflow-hidden rounded-2xl shadow-sm border border-gray-100 bg-gray-100 aspect-[16/9] md:aspect-[21/9] cursor-ew-resize group" id="slider-container">

<img alt="After Design" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute top-4 left-4 bg-white/50 backdrop-blur text-gray-900 text-xs px-2 py-1 rounded font-medium z-10 select-none">After</div>

<div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden select-none border-r border-white/50 z-10" id="slider-overlay">
<img alt="Before Design" className="absolute inset-0 h-full max-w-none w-full object-cover grayscale opacity-90 pointer-events-none select-none" id="overlay-image" src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur text-white text-xs px-2 py-1 rounded font-medium select-none">Before</div>
</div>

<div className="absolute inset-y-0 left-1/2 w-0.5 z-20 flex items-center justify-center pointer-events-none" id="slider-handle">
<div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-900 transform -translate-x-1/2">
<iconify-icon icon="lucide:chevrons-left-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-start justify-between mb-16">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-gray-900">See your space in a whole new light</h2>
<p className="text-gray-500 font-light text-lg">
                        Take a photo of any room and describe what you want changed. New colours, new mood, new furniture, or full style presets. The result looks like a professional interior designer created it.
                    </p>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 cursor-pointer hover:text-gray-600 hover:border-gray-600 transition-colors">
                    Start redesigning <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-200">
<img alt="After" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Before" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 grayscale" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<span className="text-xs font-medium bg-white/90 backdrop-blur px-2 py-1 rounded text-gray-900">Modern Minimal</span>
<div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="lucide:eye" width="12"></iconify-icon>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-200">
<img alt="After" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Before" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 grayscale" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<span className="text-xs font-medium bg-white/90 backdrop-blur px-2 py-1 rounded text-gray-900">Japandi</span>
<div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="lucide:eye" width="12"></iconify-icon>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-200">
<img alt="After" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Before" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 grayscale" src="https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<span className="text-xs font-medium bg-white/90 backdrop-blur px-2 py-1 rounded text-gray-900">Industrial Loft</span>
<div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="lucide:eye" width="12"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<h3 className="text-2xl font-medium tracking-tight mb-16 text-center">Three simple steps</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center mb-6 text-gray-900">
<iconify-icon icon="lucide:upload-cloud" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium mb-2 text-gray-900">1. Upload a photo</h4>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">Take a quick picture of your current room. No professional lighting needed.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center mb-6 text-gray-900">
<iconify-icon icon="lucide:wand-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium mb-2 text-gray-900">2. Describe dream look</h4>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">Type a prompt like "Mid-century modern with plants" or select a preset style.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center mb-6 text-gray-900">
<iconify-icon icon="lucide:image-down" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium mb-2 text-gray-900">3. Get instant results</h4>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">Receive multiple high-quality redesigned versions to save or share.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Explore fresh styles</h2>
<p className="text-gray-400 font-light text-lg">Choose from curated presets to give your room a new personality.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:chevron-left" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:chevron-right" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Minimalist" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-sm font-medium">Minimalist</span>
</div>
<div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Cozy Warm" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-sm font-medium">Cozy Warm</span>
</div>
<div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Dark &amp; Moody" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-sm font-medium">Dark &amp; Moody</span>
</div>
<div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Scandinavian" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-sm font-medium">Scandinavian</span>
</div>
<div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Tropical" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-sm font-medium">Tropical</span>
</div>
<div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Industrial" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-sm font-medium">Industrial</span>
</div>
<div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Retro 70s" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-sm font-medium">Retro 70s</span>
</div>
<div className="relative aspect-square rounded-lg bg-gray-800 border border-gray-700 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-gray-750 transition-colors">
<iconify-icon className="text-gray-400 mb-2 group-hover:text-white transition-colors" icon="lucide:plus" width="24"></iconify-icon>
<span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">More Styles</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-gray-100">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-sm bg-gray-50 border border-gray-100">
<img alt="Room" className="w-full h-auto" src="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<div className="w-4 h-4 bg-white rounded-full shadow flex items-center justify-center animate-pulse z-10 cursor-pointer">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
</div>
<div className="absolute left-6 top-0 bg-white shadow-lg rounded-lg p-3 w-48 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-auto block">
<div className="flex gap-3 items-center">
<div className="w-10 h-10 bg-gray-100 rounded overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<div className="text-xs font-medium text-gray-900">Velvet Sofa</div>
<div className="text-[10px] text-gray-500">Processing...</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-6 border border-blue-100">
<iconify-icon icon="lucide:sparkles" width="12"></iconify-icon> New Feature
                    </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-gray-900">Add your own furniture</h2>
<p className="text-lg text-gray-500 font-light mb-8 leading-relaxed">
                        Upload an image of something you want to include and place it into the room seamlessly. See how a sofa, table, plant, or decor piece would look before you buy.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-gray-400" icon="lucide:check" width="16"></iconify-icon>
                            Realistic lighting adaptation
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-gray-400" icon="lucide:check" width="16"></iconify-icon>
                            Automatic scale adjustment
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-gray-400" icon="lucide:check" width="16"></iconify-icon>
                            Remove existing objects instantly
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-2xl font-medium tracking-tight text-center mb-16">Loved by anyone redesigning their home</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Sarah J.</div>
<div className="text-xs text-gray-500">Homeowner</div>
</div>
</div>
<p className="text-sm text-gray-600 leading-relaxed">"Planning our renovation was stressful until I used this. Visualizing the end result changed everything."</p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Mark D.</div>
<div className="text-xs text-gray-500">Renter</div>
</div>
</div>
<p className="text-sm text-gray-600 leading-relaxed">"I rent, so I can't paint walls, but this helped me pick furniture that changes the vibe completely."</p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/65.jpg"/>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Elena R.</div>
<div className="text-xs text-gray-500">Interior Designer</div>
</div>
</div>
<p className="text-sm text-gray-600 leading-relaxed">"I use this to deliver fast concepts to clients. It saves me hours of rendering time."</p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/86.jpg"/>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Tom H.</div>
<div className="text-xs text-gray-500">Furniture Shopper</div>
</div>
</div>
<p className="text-sm text-gray-600 leading-relaxed">"Tested a blue velvet sofa in my living room before buying it. Saved me from a return!"</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Before and after moments</h2>
<p className="text-gray-500 text-lg">See what others created.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-4">
<div className="grid grid-cols-2 gap-2 h-64">
<img alt="Before" className="w-full h-full object-cover rounded-l-xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="After" className="w-full h-full object-cover rounded-r-xl" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex justify-between text-xs font-medium text-gray-500 px-1">
<span>Original: Empty Bedroom</span>
<span className="text-gray-900">Result: Modern Organic</span>
</div>
</div>

<div className="space-y-4">
<div className="grid grid-cols-2 gap-2 h-64">
<img alt="Before" className="w-full h-full object-cover rounded-l-xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img alt="After" className="w-full h-full object-cover rounded-r-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="flex justify-between text-xs font-medium text-gray-500 px-1">
<span>Original: Cluttered Living</span>
<span className="text-gray-900">Result: Minimalist White</span>
</div>
</div>

<div className="space-y-4">
<div className="grid grid-cols-2 gap-2 h-64">
<img alt="Before" className="w-full h-full object-cover rounded-l-xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="After" className="w-full h-full object-cover rounded-r-xl" src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex justify-between text-xs font-medium text-gray-500 px-1">
<span>Original: Basic Kitchen</span>
<span className="text-gray-900">Result: Rustic Farmhouse</span>
</div>
</div>

<div className="space-y-4">
<div className="grid grid-cols-2 gap-2 h-64">
<img alt="Before" className="w-full h-full object-cover rounded-l-xl grayscale" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img alt="After" className="w-full h-full object-cover rounded-r-xl" src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex justify-between text-xs font-medium text-gray-500 px-1">
<span>Original: Dated Dining</span>
<span className="text-gray-900">Result: Scandi Chic</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-4xl mx-auto text-center bg-gray-50 rounded-3xl p-12 md:p-20 border border-gray-100 relative overflow-hidden">

<div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-50"></div>
<div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-50"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-gray-900">Try it today</h2>
<p className="text-xl text-gray-500 font-light mb-10">Start redesigning your room in seconds.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200">
                        Upload a photo
                    </button>
<button className="w-full sm:w-auto px-8 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all">
                        Join the newsletter
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col md:flex-row items-center gap-8">
<span className="text-lg font-bold tracking-tighter text-gray-900">FURNISH</span>
<nav className="flex gap-6 text-sm text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Home</a>
<a className="hover:text-gray-900 transition-colors" href="#">About</a>
<a className="hover:text-gray-900 transition-colors" href="#">Contact</a>
</nav>
</div>
<div className="flex items-center gap-6">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-8 text-center md:text-left">
<p className="text-xs text-gray-400">© 2023 Furnish My Interior. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
