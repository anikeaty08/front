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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Keyboard shortcut for search
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                document.getElementById('search-modal').classList.remove('hidden');
                document.querySelector('#search-modal input').focus();
            }
            if (e.key === 'Escape') {
                document.getElementById('search-modal').classList.add('hidden');
                document.getElementById('submit-modal').classList.add('hidden');
            }
        });

        // View Toggles
        function showArtistDetail(artistName, hasMultiple) {
            document.getElementById('main-view').classList.add('hidden');
            document.getElementById('artist-detail-view').classList.remove('hidden');
            window.scrollTo(0, 0);

            // Populate artist name
            if(artistName) document.getElementById('detail-artist-name').innerText = artistName;

            // Handle multiple UI showcase
            const secondaryCatalogue = document.getElementById('secondary-catalogue');
            const multiBadge = document.getElementById('multi-badge');
            
            if (hasMultiple) {
                secondaryCatalogue.classList.remove('hidden');
                secondaryCatalogue.classList.add('flex');
                multiBadge.classList.remove('hidden');
            } else {
                secondaryCatalogue.classList.add('hidden');
                secondaryCatalogue.classList.remove('flex');
                multiBadge.classList.add('hidden');
            }
        }

        function hideArtistDetail() {
            document.getElementById('artist-detail-view').classList.add('hidden');
            document.getElementById('main-view').classList.remove('hidden');
            window.scrollTo(0, 0);
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
      

<div className="fixed inset-0 z-50 hidden" id="search-modal">
<div className="absolute inset-0 bg-white/40 backdrop-blur-md" onclick="document.getElementById('search-modal').classList.add('hidden')"></div>
<div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 sm:px-0">
<div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-zinc-200/60 overflow-hidden flex flex-col transform transition-all">
<div className="flex items-center px-4 border-b border-zinc-100 h-14">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input autofocus="" className="w-full h-full pl-3 pr-4 text-base bg-transparent border-0 focus:ring-0 outline-none placeholder:text-zinc-400 text-zinc-900" placeholder="Search artists, authors, or catalogues..." type="text"/>
<span className="text-xs font-medium text-zinc-400 bg-zinc-50 px-1.5 py-0.5 rounded border border-zinc-200">ESC</span>
</div>
<div className="p-2 max-h-[60vh] overflow-y-auto">
<div className="px-2 py-1.5 text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1 mt-2">Suggestions</div>
<button className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-zinc-50 rounded-lg transition-colors text-left group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-zinc-200 transition-all">
<iconify-icon className="text-base" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Cy Twombly</p>
<p className="text-xs text-zinc-500">Artist · 3 Catalogues</p>
</div>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-zinc-600 transition-colors" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-zinc-50 rounded-lg transition-colors text-left group mt-1">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-zinc-200 transition-all">
<iconify-icon className="text-base" icon="solar:book-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Joan Mitchell Catalogue Raisonné</p>
<p className="text-xs text-zinc-500">Catalogue</p>
</div>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-zinc-600 transition-colors" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="submit-modal">
<div className="absolute inset-0 bg-white/40 backdrop-blur-md" onclick="document.getElementById('submit-modal').classList.add('hidden')"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4 sm:px-0">
<div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-zinc-200/60 p-6 sm:p-8">
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Submit an entry</h2>
<p className="text-sm text-zinc-500 mt-1">Help expand the directory by submitting a missing catalogue.</p>
</div>
<button className="text-zinc-400 hover:text-zinc-600 p-1 bg-zinc-50 hover:bg-zinc-100 rounded-full transition-colors" onclick="document.getElementById('submit-modal').classList.add('hidden')">
<iconify-icon className="text-base" icon="solar:close-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Artist Name</label>
<input className="w-full px-3 py-2 bg-white border border-zinc-200/80 rounded-lg text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-shadow placeholder:text-zinc-400" placeholder="e.g. Agnes Martin" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Catalogue Title</label>
<input className="w-full px-3 py-2 bg-white border border-zinc-200/80 rounded-lg text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-shadow placeholder:text-zinc-400" placeholder="Title of the publication or project" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Author</label>
<input className="w-full px-3 py-2 bg-white border border-zinc-200/80 rounded-lg text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-shadow placeholder:text-zinc-400" placeholder="Name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Year</label>
<input className="w-full px-3 py-2 bg-white border border-zinc-200/80 rounded-lg text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-shadow placeholder:text-zinc-400" placeholder="YYYY" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Link (Optional)</label>
<input className="w-full px-3 py-2 bg-white border border-zinc-200/80 rounded-lg text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-shadow placeholder:text-zinc-400" placeholder="https://..." type="url"/>
</div>
<div className="pt-2">
<button className="w-full bg-zinc-900 text-white rounded-lg py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm flex justify-center items-center gap-2" onclick="document.getElementById('submit-modal').classList.add('hidden')" type="button">
                            Submit for Review
                            <iconify-icon className="text-sm" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>

<header className="sticky top-0 z-40 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="hideArtistDetail()">
<span className="font-semibold tracking-tighter text-base bg-zinc-900 text-white w-7 h-7 flex items-center justify-center rounded-md">CR</span>
<span className="font-medium tracking-tight text-sm hidden sm:inline-block text-zinc-900">Index</span>
</div>
<div className="flex items-center gap-2 sm:gap-4">
<button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors px-2 sm:px-3 py-1.5 rounded-md hover:bg-zinc-100 group" onclick="document.getElementById('search-modal').classList.remove('hidden')">
<iconify-icon className="text-base group-hover:text-zinc-900 transition-colors" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="hidden sm:inline-block font-medium">Search...</span>
<kbd className="hidden md:inline-block text-xs font-sans px-1.5 py-0.5 rounded border border-zinc-200 bg-white text-zinc-400 ml-2 shadow-sm">⌘K</kbd>
</button>
<div className="h-4 w-px bg-zinc-200 hidden sm:block"></div>
<button className="text-sm font-medium bg-white border border-zinc-200/80 shadow-sm text-zinc-900 px-3 py-1.5 rounded-md hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center gap-1.5" onclick="document.getElementById('submit-modal').classList.remove('hidden')">
<iconify-icon className="text-base text-zinc-500" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="hidden sm:inline-block">Submit</span>
</button>
</div>
</div>
</header>

<main className="flex-grow block" id="main-view">

<section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/60 text-xs font-medium text-zinc-600 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Database updated today
            </div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 leading-tight">
                The definitive index of <br className="hidden sm:block"/>Catalogue Raisonnés.
            </h1>
<p className="mt-5 text-base md:text-lg text-zinc-500 max-w-2xl leading-relaxed">
                A community-driven directory documenting comprehensive, annotated listings of all the known artworks by artists across history.
            </p>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
<div className="flex items-center justify-between mb-4 px-1">
<h3 className="text-sm font-medium text-zinc-900 flex items-center gap-2">
                    Directory <span className="text-xs bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded-full">254 entries</span>
</h3>
<div className="flex gap-2">
<div className="relative flex items-center bg-transparent group">
<select className="text-xs bg-transparent border-none text-zinc-500 font-medium focus:ring-0 cursor-pointer hover:text-zinc-900 transition-colors appearance-none pr-5 py-1 outline-none">
<option>Sort by Artist</option>
<option>Sort by Year</option>
<option>Recently Added</option>
</select>
<iconify-icon className="absolute right-0 text-zinc-400 pointer-events-none group-hover:text-zinc-900 transition-colors" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="overflow-x-auto rounded-xl border border-zinc-200/80 bg-white shadow-sm">
<table className="w-full text-left border-collapse whitespace-nowrap lg:whitespace-normal">
<thead>
<tr className="border-b border-zinc-200/80 bg-[#FAFAFA]">
<th className="px-5 py-3 text-xs font-medium text-zinc-500 w-1/4">Artist</th>
<th className="px-5 py-3 text-xs font-medium text-zinc-500 w-1/3">Catalogue Raisonné</th>
<th className="px-5 py-3 text-xs font-medium text-zinc-500 w-1/5">Author(s)</th>
<th className="px-5 py-3 text-xs font-medium text-zinc-500">Year</th>
<th className="px-5 py-3 text-xs font-medium text-zinc-500 text-right">Reference</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100 text-sm">

<tr className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer" onclick="showArtistDetail('Agnes Martin', false)">
<td className="px-5 py-3.5 font-medium text-zinc-900">Agnes Martin</td>
<td className="px-5 py-3.5 text-zinc-600">Agnes Martin Catalogue Raisonné</td>
<td className="px-5 py-3.5 text-zinc-600">Tiffany Bell</td>
<td className="px-5 py-3.5 text-zinc-500 tabular-nums">2017</td>
<td className="px-5 py-3.5 text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all" href="#" onclick="event.stopPropagation()">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</td>
</tr>

<tr className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer" onclick="showArtistDetail('Andy Warhol', true)">
<td className="px-5 py-3.5 font-medium text-zinc-900">Andy Warhol</td>
<td className="px-5 py-3.5 text-zinc-600">The Andy Warhol Catalogue Raisonné (Paintings)</td>
<td className="px-5 py-3.5 text-zinc-600">George Frei &amp; Neil Printz</td>
<td className="px-5 py-3.5 text-zinc-500 tabular-nums">2002–Pres.</td>
<td className="px-5 py-3.5 text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all" href="#" onclick="event.stopPropagation()">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</td>
</tr>
<tr className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer bg-zinc-50/30" onclick="showArtistDetail('Andy Warhol', true)">
<td className="px-5 py-3.5">
<div className="flex items-center justify-end pr-4 text-zinc-300">
<iconify-icon className="text-base" icon="solar:corner-down-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</td>
<td className="px-5 py-3.5 text-zinc-600">Andy Warhol Prints: A Catalogue Raisonné</td>
<td className="px-5 py-3.5 text-zinc-600">Frayda Feldman</td>
<td className="px-5 py-3.5 text-zinc-500 tabular-nums">1985</td>
<td className="px-5 py-3.5 text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all" href="#" onclick="event.stopPropagation()">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</td>
</tr>

<tr className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer" onclick="showArtistDetail('Cy Twombly', true)">
<td className="px-5 py-3.5 font-medium text-zinc-900">Cy Twombly</td>
<td className="px-5 py-3.5 text-zinc-600">Catalogue Raisonné of the Paintings</td>
<td className="px-5 py-3.5 text-zinc-600">Heiner Bastian</td>
<td className="px-5 py-3.5 text-zinc-500 tabular-nums">1992–2009</td>
<td className="px-5 py-3.5 text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all" href="#" onclick="event.stopPropagation()">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</td>
</tr>
<tr className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer bg-zinc-50/30" onclick="showArtistDetail('Cy Twombly', true)">
<td className="px-5 py-3.5">
<div className="flex items-center justify-end pr-4 text-zinc-300">
<iconify-icon className="text-base" icon="solar:corner-down-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</td>
<td className="px-5 py-3.5 text-zinc-600">Catalogue Raisonné of Sculpture</td>
<td className="px-5 py-3.5 text-zinc-600">Nicola Del Roscio</td>
<td className="px-5 py-3.5 text-zinc-500 tabular-nums">1997</td>
<td className="px-5 py-3.5 text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all" href="#" onclick="event.stopPropagation()">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</td>
</tr>
<tr className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer bg-zinc-50/30" onclick="showArtistDetail('Cy Twombly', true)">
<td className="px-5 py-3.5">
<div className="flex items-center justify-end pr-4 text-zinc-300">
<iconify-icon className="text-base" icon="solar:corner-down-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</td>
<td className="px-5 py-3.5 text-zinc-600">Catalogue Raisonné of Drawings</td>
<td className="px-5 py-3.5 text-zinc-600">Nicola Del Roscio</td>
<td className="px-5 py-3.5 text-zinc-500 tabular-nums">2011–Pres.</td>
<td className="px-5 py-3.5 text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all" href="#" onclick="event.stopPropagation()">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</td>
</tr>

<tr className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer" onclick="showArtistDetail('Gerhard Richter', false)">
<td className="px-5 py-3.5 font-medium text-zinc-900">Gerhard Richter</td>
<td className="px-5 py-3.5 text-zinc-600">Gerhard Richter: Werkverzeichnis</td>
<td className="px-5 py-3.5 text-zinc-600">Dietmar Elger</td>
<td className="px-5 py-3.5 text-zinc-500 tabular-nums">2011–2022</td>
<td className="px-5 py-3.5 text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all" href="#" onclick="event.stopPropagation()">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</td>
</tr>

<tr className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer" onclick="showArtistDetail('Joan Mitchell', false)">
<td className="px-5 py-3.5 font-medium text-zinc-900 flex items-center gap-2">
                                Joan Mitchell
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-600 border border-blue-100 uppercase tracking-wider">In Progress</span>
</td>
<td className="px-5 py-3.5 text-zinc-600">Joan Mitchell Catalogue Raisonné</td>
<td className="px-5 py-3.5 text-zinc-600">Multiple Authors</td>
<td className="px-5 py-3.5 text-zinc-500 tabular-nums">—</td>
<td className="px-5 py-3.5 text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all" href="#" onclick="event.stopPropagation()">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</td>
</tr>

<tr className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer" onclick="showArtistDetail('Pablo Picasso', true)">
<td className="px-5 py-3.5 font-medium text-zinc-900">Pablo Picasso</td>
<td className="px-5 py-3.5 text-zinc-600">Pablo Picasso par Christian Zervos</td>
<td className="px-5 py-3.5 text-zinc-600">Christian Zervos</td>
<td className="px-5 py-3.5 text-zinc-500 tabular-nums">1932–1978</td>
<td className="px-5 py-3.5 text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all" href="#" onclick="event.stopPropagation()">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</td>
</tr>
<tr className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer bg-zinc-50/30" onclick="showArtistDetail('Pablo Picasso', true)">
<td className="px-5 py-3.5">
<div className="flex items-center justify-end pr-4 text-zinc-300">
<iconify-icon className="text-base" icon="solar:corner-down-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</td>
<td className="px-5 py-3.5 text-zinc-600">The Picasso Project</td>
<td className="px-5 py-3.5 text-zinc-600">Alan Wofsy</td>
<td className="px-5 py-3.5 text-zinc-500 tabular-nums">1995–Pres.</td>
<td className="px-5 py-3.5 text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all" href="#" onclick="event.stopPropagation()">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</td>
</tr>

<tr className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer" onclick="showArtistDetail('Paul Cézanne', true)">
<td className="px-5 py-3.5 font-medium text-zinc-900">Paul Cézanne</td>
<td className="px-5 py-3.5 text-zinc-600">The Paintings of Paul Cézanne</td>
<td className="px-5 py-3.5 text-zinc-600">John Rewald</td>
<td className="px-5 py-3.5 text-zinc-500 tabular-nums">1996</td>
<td className="px-5 py-3.5 text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all" href="#" onclick="event.stopPropagation()">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</td>
</tr>
<tr className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer bg-zinc-50/30" onclick="showArtistDetail('Paul Cézanne', true)">
<td className="px-5 py-3.5">
<div className="flex items-center justify-end pr-4 text-zinc-300">
<iconify-icon className="text-base" icon="solar:corner-down-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</td>
<td className="px-5 py-3.5 text-zinc-600">Paul Cézanne: The Watercolors</td>
<td className="px-5 py-3.5 text-zinc-600">John Rewald</td>
<td className="px-5 py-3.5 text-zinc-500 tabular-nums">1983</td>
<td className="px-5 py-3.5 text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all" href="#" onclick="event.stopPropagation()">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</td>
</tr>

<tr className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer" onclick="showArtistDetail('Salvador Dalí', true)">
<td className="px-5 py-3.5 font-medium text-zinc-900">Salvador Dalí</td>
<td className="px-5 py-3.5 text-zinc-600">Catalogue Raisonné of Paintings</td>
<td className="px-5 py-3.5 text-zinc-600">Fundació Gala-Salvador Dalí</td>
<td className="px-5 py-3.5 text-zinc-500 tabular-nums">2004–Pres.</td>
<td className="px-5 py-3.5 text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all" href="#" onclick="event.stopPropagation()">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</td>
</tr>
<tr className="hover:bg-[#FAFAFA] transition-colors group cursor-pointer bg-zinc-50/30" onclick="showArtistDetail('Salvador Dalí', true)">
<td className="px-5 py-3.5">
<div className="flex items-center justify-end pr-4 text-zinc-300">
<iconify-icon className="text-base" icon="solar:corner-down-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</td>
<td className="px-5 py-3.5 text-zinc-600">The Hard and the Soft: Sculptures</td>
<td className="px-5 py-3.5 text-zinc-600">Robert &amp; Nicolas Descharnes</td>
<td className="px-5 py-3.5 text-zinc-500 tabular-nums">2004</td>
<td className="px-5 py-3.5 text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all" href="#" onclick="event.stopPropagation()">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-6 flex justify-center">
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-zinc-100">
                    Load more entries
                    <iconify-icon className="text-base" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</section>
</main>

<main className="flex-grow hidden" id="artist-detail-view">
<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
<button className="group flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors mb-10" onclick="hideArtistDetail()">
<iconify-icon className="text-base group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Back to directory
            </button>
<div className="mb-12">
<div className="flex items-center gap-3 mb-3">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900" id="detail-artist-name">Artist Name</h1>
<span className="px-2 py-0.5 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/60 uppercase tracking-wider">Artist</span>
</div>
<p className="text-base text-zinc-500 max-w-2xl leading-relaxed">View the complete documentation and known artworks associated with this artist's catalogue raisonné.</p>
</div>
<div className="space-y-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-medium text-zinc-900">Associated Catalogues</h3>
<span className="px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-500 border border-zinc-200/60 hidden" id="multi-badge">Multiple Volumes</span>
</div>

<div className="bg-white border border-zinc-200/80 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row group">
<div className="w-full md:w-1/3 bg-[#FAFAFA] border-b md:border-b-0 md:border-r border-zinc-200/80 p-8 flex items-center justify-center min-h-[16rem]">
<div className="w-32 h-44 bg-white shadow-sm border border-zinc-200/80 rounded flex flex-col items-center justify-center p-4 text-center relative overflow-hidden group-hover:shadow-md transition-shadow">
<div className="absolute inset-x-0 top-0 h-1 bg-zinc-200"></div>
<span className="text-[10px] font-semibold text-zinc-400 tracking-widest uppercase">Volume I</span>
<iconify-icon className="text-2xl text-zinc-300 mt-2" icon="solar:book-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="p-6 md:p-8 flex-1 flex flex-col">
<div className="flex-grow">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-1">Catalogue Raisonné of Paintings</h2>
<p className="text-sm text-zinc-500 mb-8">By Primary Author</p>
</div>
<span className="px-2 py-1 rounded text-[10px] font-medium bg-zinc-100 text-zinc-600 tracking-wider">PAINTINGS</span>
</div>
<div className="grid grid-cols-2 gap-y-6 gap-x-8 text-sm">
<div>
<p className="text-zinc-400 text-xs mb-1 uppercase tracking-wider font-medium">Published</p>
<p className="font-medium text-zinc-900 tabular-nums">1992–2009</p>
</div>
<div>
<p className="text-zinc-400 text-xs mb-1 uppercase tracking-wider font-medium">Format</p>
<p className="font-medium text-zinc-900">Print &amp; Digital</p>
</div>
<div>
<p className="text-zinc-400 text-xs mb-1 uppercase tracking-wider font-medium">Publisher</p>
<p className="font-medium text-zinc-900">Independent / Multiple</p>
</div>
<div>
<p className="text-zinc-400 text-xs mb-1 uppercase tracking-wider font-medium">Status</p>
<span className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="font-medium text-zinc-900">Verified</span>
</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-zinc-100 flex gap-3">
<a className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm w-full sm:w-auto" href="#">
                                View Reference
                                <iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>

<div className="hidden bg-white border border-zinc-200/80 rounded-xl overflow-hidden shadow-sm flex-col md:flex-row group relative" id="secondary-catalogue">
<div className="absolute left-1/2 -top-6 -translate-x-1/2 w-px h-6 bg-zinc-200/80 hidden md:block z-0"></div>
<div className="w-full md:w-1/3 bg-[#FAFAFA] border-b md:border-b-0 md:border-r border-zinc-200/80 p-8 flex items-center justify-center min-h-[16rem]">
<div className="w-32 h-44 bg-white shadow-sm border border-zinc-200/80 rounded flex flex-col items-center justify-center p-4 text-center relative overflow-hidden group-hover:shadow-md transition-shadow">
<div className="absolute inset-x-0 top-0 h-1 bg-zinc-200"></div>
<span className="text-[10px] font-semibold text-zinc-400 tracking-widest uppercase">Volume II</span>
<iconify-icon className="text-2xl text-zinc-300 mt-2" icon="solar:book-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="p-6 md:p-8 flex-1 flex flex-col">
<div className="flex-grow">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-1">Catalogue Raisonné of Sculpture</h2>
<p className="text-sm text-zinc-500 mb-8">By Secondary Author</p>
</div>
<span className="px-2 py-1 rounded text-[10px] font-medium bg-zinc-100 text-zinc-600 tracking-wider">SCULPTURE</span>
</div>
<div className="grid grid-cols-2 gap-y-6 gap-x-8 text-sm">
<div>
<p className="text-zinc-400 text-xs mb-1 uppercase tracking-wider font-medium">Published</p>
<p className="font-medium text-zinc-900 tabular-nums">1997</p>
</div>
<div>
<p className="text-zinc-400 text-xs mb-1 uppercase tracking-wider font-medium">Format</p>
<p className="font-medium text-zinc-900">Print Only</p>
</div>
<div>
<p className="text-zinc-400 text-xs mb-1 uppercase tracking-wider font-medium">Publisher</p>
<p className="font-medium text-zinc-900">Independent</p>
</div>
<div>
<p className="text-zinc-400 text-xs mb-1 uppercase tracking-wider font-medium">Status</p>
<span className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="font-medium text-zinc-900">Verified</span>
</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-zinc-100 flex gap-3">
<a className="inline-flex items-center justify-center gap-2 bg-white border border-zinc-200/80 text-zinc-900 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm w-full sm:w-auto" href="#">
                                View Reference
                                <iconify-icon className="text-base text-zinc-400" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="mt-auto border-t border-zinc-200/60 bg-white py-8">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tighter text-sm text-zinc-900">CR.</span>
<span className="text-sm text-zinc-500">© 2024</span>
</div>
<div className="flex items-center gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#">API</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
