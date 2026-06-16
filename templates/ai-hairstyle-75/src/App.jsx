import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Activate Lucide icons
      lucide.createIcons();

      // Word-by-word fade for the headline
      const heading = document.getElementById('animated-heading');
      if (heading) {
        const text = heading.textContent.trim();
        const words = text.split(' ');
        heading.textContent = '';
        words.forEach((w, i) => {
          const span = document.createElement('span');
          span.className = 'word tracking-tight';
          span.style.animationDelay = `${i * 90}ms`;
          span.style.fontFamily = "'Geist', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial";
          span.textContent = w + (i < words.length - 1 ? ' ' : '');
          heading.appendChild(span);
        });
      }

      // Staggered fade-ins for secondary elements
      document.querySelectorAll('.fade-in-up').forEach((el, idx) => {
        el.style.animationDelay = `${250 + idx * 100}ms`;
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe className="" frameborder="0" height="100%" src="https://my.spline.design/ventura3animated-3f534c5ad078ad0d230fab6b3e2fda72/" width="100%"></iframe></div></div>

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute top-[-10%] left-[10%] w-72 h-72 rounded-full bg-sky-300/40 bg-blob"></div>
<div className="absolute bottom-[5%] right-[15%] w-80 h-80 rounded-full bg-orange-300/40 bg-blob"></div>
</div>

<header className="sticky top-0 z-20">
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
<div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur-xl shadow-md px-4 py-2">
<div className="flex items-center gap-3">
<div className="size-8 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 shadow-md"></div>
<span className="text-base sm:text-lg font-normal tracking-tight" style={{fontFamily: '\'Geist\', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>AIVerse</span>
</div>
<ul className="hidden md:flex items-center gap-6 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#">AI Tools</a></li>
<li className=""><a className="hover:text-slate-900" href="#">AI Editor</a></li>
<li><a className="hover:text-slate-900" href="#">AI Video</a></li>
<li><a className="hover:text-slate-900" href="#">Explore</a></li>
<li><a className="hover:text-slate-900" href="#">Contact</a></li>
<li><a className="hover:text-slate-900" href="#">Pricing</a></li>
</ul>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-md hover:shadow transition">
<svg className="lucide lucide-user size-4 text-slate-700" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Login
            </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-orange-500 text-white px-3 py-2 text-sm shadow-md hover:bg-orange-600 transition">
<svg className="lucide lucide-sparkles size-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Try Free
            </button>
</div>
</div>
</nav>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="flex gap-2 text-sm text-slate-50 mt-8 mb-4 items-center">
<a className="hover:text-slate-700" href="#">Home</a>
<svg className="lucide lucide-chevron-right size-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="">Hairstyle Changer</span>
</div>

<section className="mb-6">
<h1 className="md:text-4xl lg:text-[40px] leading-tight text-3xl font-normal text-slate-50 tracking-tight" style={{fontFamily: '\'Geist\', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}><span className="word tracking-tight" style={{animationDelay: '0ms', fontFamily: 'Geist, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial'}}>Free </span><span className="word tracking-tight" style={{animationDelay: '90ms', fontFamily: 'Geist, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial'}}>AI </span><span className="word tracking-tight" style={{animationDelay: '180ms', fontFamily: 'Geist, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial'}}>HairstyleChanger </span><span className="word tracking-tight" style={{animationDelay: '270ms', fontFamily: 'Geist, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial'}}>Online</span></h1>
<p className="md:text-2xl fade-in-up text-xl text-slate-50 max-w-4xl mt-3" style={{animationDelay: '250ms'}}>
          Upload a photo and preview hairstyles in seconds. Pick from curated looks, tweak colors,
          and generate a natural, realistic result tailored to you.
        </p>
</section>

<section className="rounded-3xl border border-neutral-200 bg-white/80 backdrop-blur-xl shadow-md p-3 sm:p-4">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

<div className="lg:col-span-8">
<div className="flex items-center justify-between mb-3">
<button className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-md hover:shadow transition">
<svg className="lucide lucide-upload size-4" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
                Upload New
              </button>
<div className="hidden sm:flex gap-2 text-sm text-slate-500 items-center">Generate up to 5 hairstyles at once</div>
</div>
<div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-slate-50 shadow-md flex items-center justify-center">
<img alt="Preview" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<aside className="lg:col-span-4">
<div className="sm:p-4 flex flex-col bg-white h-full border-neutral-200 border rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow-md">

<div className="mb-3 grid grid-cols-2 gap-2">
<button className="w-full rounded-xl border border-neutral-200 bg-slate-50 text-slate-700 text-sm py-2">Female</button>
<button className="w-full rounded-xl bg-slate-50 text-slate-700 border border-neutral-200 text-sm py-2">Male</button>
</div>


<div className="mb-4">
<p className="text-xs text-slate-500 mb-2">Color</p>
<div className="grid grid-cols-8 gap-2">
<button className="h-7 w-7 rounded-full border border-neutral-200 shadow-md" style={{background: '#2b2b2b'}}></button>
<button className="h-7 w-7 rounded-full border border-neutral-200 shadow-md" style={{background: '#8d5524'}}></button>
<button className="h-7 w-7 rounded-full border border-neutral-200 shadow-md" style={{background: '#c68642'}}></button>
<button className="h-7 w-7 rounded-full border border-neutral-200 shadow-md" style={{background: '#d1a372'}}></button>
<button className="h-7 w-7 rounded-full border border-neutral-200 shadow-md" style={{background: '#eab308'}}></button>
<button className="h-7 w-7 rounded-full border border-neutral-200 shadow-md" style={{background: '#ef4444'}}></button>
<button className="h-7 w-7 rounded-full border border-neutral-200 shadow-md" style={{background: '#a855f7'}}></button>
<button className="h-7 w-7 rounded-full border border-neutral-200 shadow-md" style={{background: '#06b6d4'}}></button>
</div>
</div>

<div className="grid grid-cols-3 gap-3 overflow-y-auto pr-1" style={{maxHeight: '280px'}}>
<div className="rounded-xl border border-neutral-200 p-2 shadow-md hover:shadow transition">
<img alt="Style 1" className="rounded-lg mb-1.5 h-20 w-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<p className="text-[13px] text-slate-700">Curtain Waves</p>
</div>
<div className="rounded-xl border border-neutral-200 p-2 shadow-md ring-2 ring-orange-500/70 hover:shadow transition">
<img alt="Style 2" className="rounded-lg mb-1.5 h-20 w-full object-cover" src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<p className="text-[13px] text-slate-700">Long Waves</p>
</div>
<div className="rounded-xl border border-neutral-200 p-2 shadow-md hover:shadow transition">
<img alt="Style 3" className="rounded-lg mb-1.5 h-20 w-full object-cover" src="https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<p className="text-[13px] text-slate-700">Pixie Cut</p>
</div>
<div className="rounded-xl border border-neutral-200 p-2 shadow-md hover:shadow transition">
<img alt="Style 4" className="rounded-lg mb-1.5 h-20 w-full object-cover" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<p className="text-[13px] text-slate-700">Wispy Layers</p>
</div>
<div className="rounded-xl border border-neutral-200 p-2 shadow-md hover:shadow transition">
<img alt="Style 5" className="rounded-lg mb-1.5 h-20 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<p className="text-[13px] text-slate-700">Bob Straight</p>
</div>
<div className="rounded-xl border border-neutral-200 p-2 shadow-md hover:shadow transition">
<img alt="Style 6" className="rounded-lg mb-1.5 h-20 w-full object-cover" src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<p className="text-[13px] text-slate-700">Curtain Bangs</p>
</div>
</div>

<div className="mt-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 text-white px-4 py-3 text-sm shadow-md hover:bg-orange-600 transition">
<i className="size-4" data-lucide="flash"></i>
                  Generate
                </button>
<p className="mt-2 text-xs text-slate-500 text-center">Takes ~5s per look</p>
</div>
</div>
</aside>
</div>
</section>

<section className="mt-8 mb-10">
<div className="sm:p-6 bg-white/70 border-neutral-200 border rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-md backdrop-blur-xl">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-2 py-1 text-xs text-orange-700">New</span>
<h2 className="text-2xl md:text-3xl tracking-tight font-normal text-slate-900" style={{fontFamily: '\'Geist\', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>Create your hairstyle in 3 simple steps</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="relative group rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-xl shadow-sm p-3 hover:shadow-md transition">
<div className="absolute -top-4 left-1/2 -translate-x-1/2">
<span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm text-orange-700 shadow-md">Step 1</span>
</div>
<div className="aspect-square w-full overflow-hidden rounded-xl border border-neutral-200 bg-slate-50">
<img alt="Upload a clear portrait" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
<h3 className="mt-3 text-lg md:text-xl tracking-tight text-slate-900 font-medium" style={{fontFamily: '\'Geist\', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>Upload your best photo</h3>
<p className="mt-1 text-sm text-slate-600">Use a clear, front-facing image with good lighting.</p>
</div>

<div className="relative group hover:shadow-md transition bg-white/80 border-neutral-200 border rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow-sm backdrop-blur-xl">
<div className="absolute -top-4 left-1/2 -translate-x-1/2">
<span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm text-orange-700 shadow-md">Step 2</span>
</div>
<div className="aspect-square w-full overflow-hidden rounded-xl border border-neutral-200 bg-slate-50">
<img alt="Pick a hairstyle and color" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
<h3 className="mt-3 text-lg md:text-xl tracking-tight text-slate-900 font-medium" style={{fontFamily: '\'Geist\', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>Pick style and color</h3>
<p className="mt-1 text-sm text-slate-600">Choose lengths and tones from curated presets.</p>
</div>

<div className="relative group rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-xl shadow-sm p-3 hover:shadow-md transition">
<div className="absolute -top-4 left-1/2 -translate-x-1/2">
<span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm text-orange-700 shadow-md">Step 3</span>
</div>
<div className="aspect-square w-full overflow-hidden rounded-xl border border-neutral-200 bg-slate-50">
<img alt="Generate and refine results" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
<h3 className="mt-3 text-lg md:text-xl tracking-tight text-slate-900 font-medium" style={{fontFamily: '\'Geist\', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>Generate and refine</h3>
<p className="mt-1 text-sm text-slate-600">Get photoreal results in seconds and fine-tune.</p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3 bg-white/70 border-neutral-200 border rounded-2xl mt-6 pt-3 pr-4 pb-3 pl-4 backdrop-blur-xl items-center justify-between">
<p className="text-sm text-slate-600">No signup required. Private by default. ~5s per look.</p>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-slate-700 shadow hover:border-orange-200 hover:text-orange-700 transition">
        Learn more
      </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-orange-500 text-white px-3 py-2 text-sm shadow hover:bg-orange-600 transition">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="12 2v20"></path><path d="M5 12h14"></path></svg>
        Try it free
      </button>
</div>
</div>
</div>
</section>

<div className="py-6 text-center text-sm text-slate-500">
        Need other looks? Try formal, casual, or creative presets.
      </div>
</main>


    </>
  );
}
