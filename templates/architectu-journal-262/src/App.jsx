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



        lucide.createIcons();
    
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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded bg-slate-900 text-white">
<i className="h-4 w-4" data-lucide="flame"></i>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">flammus</span>
</div>
<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Produkte</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Ausstellung</a>
<a className="text-sm font-medium text-slate-900" href="#">Journal</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Kontakt</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden text-slate-500 hover:text-slate-900 md:block">
<i className="h-5 w-5" data-lucide="search"></i>
</button>
<button className="md:hidden">
<i className="h-6 w-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>
<main className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

<article className="lg:col-span-8">

<header className="mb-8 border-b border-slate-100 pb-8">
<div className="mb-4 flex items-center gap-3 text-sm text-slate-500">
<span className="font-semibold text-blue-600">Architecture</span>
<span className="text-slate-300">/</span>
<time datetime="2024-12-21">21 December 2024</time>
</div>
<h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                        Numquam occaecati enim voluptatem ut architecture.
                    </h1>
<p className="text-lg leading-relaxed text-slate-600 md:text-xl">
                        Exploring the intersection of modern heating design and minimalist interior architecture in residential spaces.
                    </p>
</header>

<figure className="mb-10">
<div className="aspect-[16/9] overflow-hidden rounded-lg bg-slate-100">
<img alt="Modern fireplace" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<figcaption className="mt-3 text-xs text-slate-500">
                        Modern minimalist fireplace design in a Munich apartment. Photo by Thomas Weber.
                    </figcaption>
</figure>

<div className="prose prose-slate max-w-none text-slate-700 prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-lg">
<p className="lead text-lg">
                        Quia voluptatem voluptatem qui optio. Officia minus quisquam voluptatibus commodi tempora excepturi vero. Omnis ut consequuntur aliquam. Cupiditate qui ea rerum soluta molestiae laudantium quis.
                    </p>
<p>
                        Sed commodi recusandae quos laborum voluptas itaque accusamus. Est rerum vel ipsa perferendis rerum autem totam minima. Quia corporis alias sit vel in. Id voluptas quos magnam omnis mollitia cum ipsam est.
                    </p>
<h2 className="text-2xl mt-8 mb-4">Sperre für ausgewählte Produkte</h2>
<p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dui nec nunc aliquet hendrerit sed eu sem. Elementum, ipsum vitae fringilla finibus, felis turpis ornare mi, in tempor augue odio id leo.
                    </p>
</div>

<div className="my-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
<h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-slate-900">Featured in this article</h3>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

<a className="group block bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-slate-300 transition shadow-sm" href="#">
<div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
<img alt="Storage" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-semibold text-slate-900">Oak Storage</h4>
<span className="text-xs font-medium bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">€1.200</span>
</div>
<p className="text-xs text-slate-500">Natural finish</p>
</div>
</a>

<a className="group block bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-slate-300 transition shadow-sm" href="#">
<div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
<img alt="Insert" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-semibold text-slate-900">Modern Insert</h4>
<span className="text-xs font-medium bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">€1.650</span>
</div>
<p className="text-xs text-slate-500">Matte black</p>
</div>
</a>

<a className="group block bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-slate-300 transition shadow-sm" href="#">
<div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
<img alt="Wood" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-semibold text-slate-900">Log Holder</h4>
<span className="text-xs font-medium bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">€850</span>
</div>
<p className="text-xs text-slate-500">Vertical stack</p>
</div>
</a>
</div>
</div>
<div className="prose prose-slate max-w-none text-slate-700">
<p>
                        Itaque omnis ut eveniet ipsam iste sit quia. Aut modi nihil eos voluptatem velit. Rerum cumque sapiente dolores et et alias. Quia rerum odio voluptatem ex veniam facilis. Esse vero minima praesentium et aspernatur veniam.
                    </p>
</div>

<div className="mt-12 border-t border-slate-200 pt-10">
<div className="flex flex-col gap-6 sm:flex-row sm:items-center">
<img alt="Thomas Weber" className="h-16 w-16 rounded-full object-cover ring-2 ring-slate-100" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-2 mb-1">
<h4 className="text-base font-bold text-slate-900">Thomas Weber</h4>
<span className="rounded bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">Editor</span>
</div>
<p className="text-sm text-slate-600 max-w-xl">
                                Senior architect specializing in sustainable heating solutions. Thomas writes about the intersection of functionality and aesthetics in contemporary homes.
                            </p>
</div>
<div className="sm:ml-auto flex gap-3">
<a className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition" href="#">
<i className="h-5 w-5" data-lucide="twitter"></i>
</a>
<a className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition" href="#">
<i className="h-5 w-5" data-lucide="globe"></i>
</a>
</div>
</div>
</div>
</article>

<aside className="lg:col-span-4 lg:pl-8">
<div className="sticky top-24 space-y-8">

<div className="relative">
<input className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 pl-10 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Suche..." type="text"/>
<i className="absolute left-3 top-3 h-4 w-4 text-slate-400" data-lucide="search"></i>
</div>

<div className="rounded-lg border border-slate-200 bg-white shadow-sm">
<div className="border-b border-slate-100 px-5 py-3 bg-slate-50 rounded-t-lg">
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Kategorien</h3>
</div>
<nav className="flex flex-col p-2">
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600" href="#">
<span>Verkauf von Kaminöfen</span>
<span className="text-xs text-slate-400">12</span>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600" href="#">
<span>Planung &amp; Design</span>
<span className="text-xs text-slate-400">8</span>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600" href="#">
<span>Ofen-Kundendienst</span>
<span className="text-xs text-slate-400">5</span>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600" href="#">
<span>Schornsteinbau</span>
<span className="text-xs text-slate-400">3</span>
</a>
</nav>
</div>

<div className="overflow-hidden rounded-lg bg-slate-900 text-white shadow-md">
<div className="p-6">
<i className="mb-4 h-6 w-6 text-blue-400" data-lucide="calendar"></i>
<h3 className="mb-2 text-lg font-bold">Termin vereinbaren</h3>
<p className="mb-6 text-sm text-slate-300">
                                Planen Sie Ihren individuellen Traumofen mit unseren Experten vor Ort.
                            </p>
<button className="w-full rounded bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-900 transition hover:bg-blue-50">
                                Jetzt anfragen
                            </button>
</div>
</div>

<div>
<h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">Beliebte Tags</h3>
<div className="flex flex-wrap gap-2">
<a className="rounded border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900" href="#">#Interior</a>
<a className="rounded border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900" href="#">#Heating</a>
<a className="rounded border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900" href="#">#Sustainable</a>
<a className="rounded border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900" href="#">#Munich</a>
</div>
</div>
</div>
</aside>
</div>
</main>
<footer className="mt-20 border-t border-slate-200 bg-slate-50 py-12">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
<div className="text-center md:text-left">
<span className="block text-sm font-semibold text-slate-900">Flammus GmbH</span>
<span className="text-xs text-slate-500">© 2024 All rights reserved.</span>
</div>
<div className="flex gap-8">
<a className="text-sm text-slate-500 hover:text-slate-900" href="#">Impressum</a>
<a className="text-sm text-slate-500 hover:text-slate-900" href="#">Datenschutz</a>
<a className="text-sm text-slate-500 hover:text-slate-900" href="#">AGB</a>
</div>
</div>
</footer>


    </>
  );
}
