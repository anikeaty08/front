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
          fontFamily: { inter: ['Inter', 'sans-serif'], poppins: ['Poppins', 'sans-serif'] },
          colors: {
            primary: '#3b2560',
            accent: '#38ff83',
            coral: '#ff7b72',
            bgDark: '#18192a',
            card: '#23243a',
            muted: '#888aad',
          },
          boxShadow: {
            soft: '0 4px 24px 0 rgba(56,255,131,0.08)',
          },
        },
      },
    }
  


  // Simple modal close on ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") document.getElementById('loginModal').classList.add('hidden');
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
      

<nav className="flex items-center justify-between px-8 py-4 bg-primary shadow-soft relative z-10">
<div className="flex items-center space-x-3">
<img alt="Filmila Logo" className="w-9 h-9 rounded-lg shadow" src="https://svgshare.com/i/13cU.svg"/>
<span className="text-2xl font-poppins font-semibold tracking-wide">Filmila</span>
</div>
<div className="flex items-center space-x-6">
<a className="hover:text-accent transition" href="#">Discover</a>
<a className="hover:text-accent transition" href="#">My Films</a>
<button className="bg-accent text-primary font-semibold rounded-xl px-4 py-2 shadow-soft hover:scale-105 transition" onclick="document.getElementById('loginModal').classList.remove('hidden')">Login / Signup</button>
<div className="ml-4 relative group">
<button className="flex items-center space-x-2 focus:outline-none">
<img className="w-8 h-8 rounded-full border-2 border-accent" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition absolute right-0 mt-2 w-40 bg-card rounded-xl shadow-soft py-2 z-20">
<a className="block px-4 py-2 hover:bg-primary rounded" href="#">Profile</a>
<a className="block px-4 py-2 hover:bg-primary rounded" href="#">Dashboard</a>
<a className="block px-4 py-2 text-red-400 hover:bg-primary rounded" href="#">Logout</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-20 pb-32 text-center bg-gradient-to-b from-primary/70 to-bgDark">
<div className="max-w-2xl mx-auto">
<h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4 leading-tight">Discover &amp; Share <span className="text-accent">Short Films</span> <br/> with <span className="text-coral">Filmila</span></h1>
<p className="text-lg text-muted mb-8">The creative home for short filmmakers and film lovers.<br/>Watch, upload, and connect in a vibrant community.</p>
<button className="bg-accent text-primary px-8 py-3 rounded-2xl font-semibold shadow-soft text-lg hover:scale-105 transition" onclick="document.getElementById('loginModal').classList.remove('hidden')">Get Started</button>
</div>
</section>

<section className="max-w-6xl mx-auto -mt-24 relative z-10">
<h2 className="text-2xl font-semibold font-poppins mb-6">Trending Now</h2>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

<div className="bg-card rounded-2xl shadow-soft p-0 group hover:scale-105 transition">
<div className="relative">
<img alt="Film Thumbnail" className="rounded-2xl w-full h-56 object-cover" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute top-3 left-3 bg-primary/90 px-3 py-1 rounded-full text-xs font-semibold text-accent shadow-soft">Drama</span>
<span className="absolute top-3 right-3 bg-accent text-primary font-bold px-2 py-1 rounded-lg text-xs shadow-soft flex items-center">
<svg className="w-4 h-4 inline mr-1 -mt-0.5" fill="currentColor" viewbox="0 0 20 20"><path d="M9.049 2.927C9.432 2.02 10.568 2.02 10.951 2.927l1.286 3.012a1 1 0 00.758.595l3.273.433c.969.129 1.362 1.36.657 2.022l-2.357 2.211a1 1 0 00-.29.949l.556 3.227c.17.988-.86 1.746-1.746 1.251l-2.815-1.607a1 1 0 00-.986 0l-2.815 1.607c-.886.495-1.916-.263-1.746-1.251l.556-3.227a1 1 0 00-.29-.949L2.075 9.06c-.705-.662-.312-1.893.657-2.022l3.273-.433a1 1 0 00.758-.595l1.286-3.012z"></path></svg>
          4.7
        </span>
</div>
<div className="p-4">
<h3 className="text-lg font-semibold mb-1">The Last Light</h3>
<p className="text-muted text-sm mb-2">by <span className="text-accent">Alex R.</span></p>
<button className="bg-accent text-primary px-4 py-1 rounded-xl font-semibold shadow-soft text-sm mt-1 hover:scale-105 transition">Watch</button>
</div>
</div>

<div className="bg-card rounded-2xl shadow-soft p-0 group hover:scale-105 transition">
<div className="relative">
<img alt="Film Thumbnail" className="rounded-2xl w-full h-56 object-cover" src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute top-3 left-3 bg-primary/90 px-3 py-1 rounded-full text-xs font-semibold text-coral shadow-soft">Horror</span>
<span className="absolute top3 right-3 bg-coral text-white font-bold px-2 py-1 rounded-lg text-xs shadow-soft flex items-center">
<svg className="w-4 h-4 inline mr-1 -mt-0.5" fill="currentColor" viewbox="0 0 20 20"><path d="M9.049 2.927C9.432 2.02 10.568 2.02 10.951 2.927l1.286 3.012a1 1 0 00.758.595l3.273.433c.969.129 1.362 1.36.657 2.022l-2.357 2.211a1 1 0 00-.29.949l.556 3.227c.17.988-.86 1.746-1.746 1.251l-2.815-1.607a1 1 0 00-.986 0l-2.815 1.607c-.886.495-1.916-.263-1.746-1.251l.556-3.227a1 1 0 00-.29-.949L2.075 9.06c-.705-.662-.312-1.893.657-2.022l3.273-.433a1 1 0 00.758-.595l1.286-3.012z"></path></svg>
          4.3
        </span>
</div>
<div className="p-4">
<h3 className="text-lg font-semibold mb-1">Nocturne</h3>
<p className="text-muted text-sm mb-2">by <span className="text-coral">Jessie K.</span></p>
<button className="bg-coral text-white px-4 py-1 rounded-xl font-semibold shadow-soft text-sm mt-1 hover:scale-105 transition">Watch</button>
</div>
</div>
<div className="bg-card rounded-2xl shadow-soft p-0 group hover:scale-105 transition">
<div className="relative">
<img alt="Film Thumbnail" className="rounded-2xl w-full h-56 object-cover" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute top-3 left-3 bg-primary/90 px-3 py-1 rounded-full text-xs font-semibold text-accent shadow-soft">Comedy</span>
<span className="absolute top-3 right-3 bg-accent text-primary font-bold px-2 py-1 rounded-lg text-xs shadow-soft flex items-center">
<svg className="w-4 h-4 inline mr-1 -mt-0.5" fill="currentColor" viewbox="0 0 20 20"><path d="M9.049 2.927C9.432 2.02 10.568 2.02 10.951 2.927l1.286 3.012a1 1 0 00.758.595l3.273.433c.969.129 1.362 1.36.657 2.022l-2.357 2.211a1 1 0 00-.29.949l.556 3.227c.17.988-.86 1.746-1.746 1.251l-2.815-1.607a1 1 0 00-.986 0l-2.815 1.607c-.886.495-1.916-.263-1.746-1.251l.556-3.227a1 1 0 00-.29-.949L2.075 9.06c-.705-.662-.312-1.893.657-2.022l3.273-.433a1 1 0 00.758-.595l1.286-3.012z"></path></svg>
          4.9
        </span>
</div>
<div className="p-4">
<h3 className="text-lg font-semibold mb-1">Laugh Line</h3>
<p className="text-muted text-sm mb-2">by <span className="text-accent">Mina L.</span></p>
<button className="bg-accent text-primary px-4 py-1 rounded-xl font-semibold shadow-soft text-sm mt-1 hover:scale-105 transition">Watch</button>
</div>
</div>
<div className="bg-card rounded-2xl shadow-soft p-0 group hover:scale-105 transition">
<div className="relative">
<img alt="Film Thumbnail" className="rounded-2xl w-full h-56 object-cover" src="https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute top-3 left-3 bg-primary/90 px-3 py-1 rounded-full text-xs font-semibold text-accent shadow-soft">Sci-Fi</span>
<span className="absolute top-3 right-3 bg-accent text-primary font-bold px-2 py-1 rounded-lg text-xs shadow-soft flex items-center">
<svg className="w-4 h-4 inline mr-1 -mt-0.5" fill="currentColor" viewbox="0 0 20 20"><path d="M9.049 2.927C9.432 2.02 10.568 2.02 10.951 2.927l1.286 3.012a1 1 0 00.758.595l3.273.433c.969.129 1.362 1.36.657 2.022l-2.357 2.211a1 1 0 00-.29.949l.556 3.227c.17.988-.86 1.746-1.746 1.251l-2.815-1.607a1 1 0 00-.986 0l-2.815 1.607c-.886.495-1.916-.263-1.746-1.251l.556-3.227a1 1 0 00-.29-.949L2.075 9.06c-.705-.662-.312-1.893.657-2.022l3.273-.433a1 1 0 00.758-.595l1.286-3.012z"></path></svg>
          4.5
        </span>
</div>
<div className="p-4">
<h3 className="text-lg font-semibold mb-1">Stellar</h3>
<p className="text-muted text-sm mb-2">by <span className="text-accent">Arjun S.</span></p>
<button className="bg-accent text-primary px-4 py-1 rounded-xl font-semibold shadow-soft text-sm mt-1 hover:scale-105 transition">Watch</button>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto mt-24">
<h2 className="text-2xl font-semibold font-poppins mb-6">Your Dashboard</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-card rounded-2xl shadow-soft p-6">
<h3 className="font-semibold mb-4 text-accent text-lg">Watchlist</h3>
<ul className="space-y-3">
<li className="flex items-center justify-between">
<span>Sunset Dreams</span>
<span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full">Drama</span>
</li>
<li className="flex items-center justify-between">
<span>Late Night Laughter</span>
<span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full">Comedy</span>
</li>
</ul>
</div>

<div className="bg-card rounded-2xl shadow-soft p-6">
<h3 className="font-semibold mb-4 text-coral text-lg">Favorites</h3>
<ul className="space-y-3">
<li className="flex items-center justify-between">
<span>Haunted Alley</span>
<span className="bg-coral/20 text-coral text-xs px-3 py-1 rounded-full">Horror</span>
</li>
<li className="flex items-center justify-between">
<span>Stellar</span>
<span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full">Sci-Fi</span>
</li>
</ul>
</div>

<div className="bg-card rounded-2xl shadow-soft p-6">
<h3 className="font-semibold mb-4 text-accent text-lg">Continue Watching</h3>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<img className="w-12 h-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&amp;fit=crop&amp;w=60&amp;q=80"/>
<div>
<span className="block">Stellar</span>
<span className="text-xs text-muted">12 min left</span>
</div>
</div>
<div className="flex items-center gap-3">
<img className="w-12 h-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&amp;fit=crop&amp;w=60&amp;q=80"/>
<div>
<span className="block">Nocturne</span>
<span className="text-xs text-muted">5 min left</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto mt-24 rounded-2xl shadow-soft bg-card p-8">
<div className="flex flex-col md:flex-row gap-8">
<video className="rounded-2xl w-full md:w-2/3 shadow-soft aspect-video" controls="" poster="https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&amp;fit=crop&amp;w=400&amp;q=80"></video>
<div className="flex-1 flex flex-col justify-between">
<div>
<h2 className="text-2xl font-semibold font-poppins mb-2">Stellar</h2>
<div className="flex items-center gap-3 mb-3">
<span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold shadow-soft">Sci-Fi</span>
<span className="flex items-center bg-accent/10 text-accent font-semibold px-3 py-1 rounded-xl text-xs shadow-soft">
<svg className="w-4 h-4 mr-1" fill="currentColor" viewbox="0 0 20 20"><path d="M9.049 2.927C9.432 2.02 10.568 2.02 10.951 2.927l1.286 3.012a1 1 0 00.758.595l3.273.433c.969.129 1.362 1.36.657 2.022l-2.357 2.211a1 1 0 00-.29.949l.556 3.227c.17.988-.86 1.746-1.746 1.251l-2.815-1.607a1 1 0 00-.986 0l-2.815 1.607c-.886.495-1.916-.263-1.746-1.251l.556-3.227a1 1 0 00-.29-.949L2.075 9.06c-.705-.662-.312-1.893.657-2.022l3.273-.433a1 1 0 00.758-.595l1.286-3.012z"></path></svg>
            4.5
          </span>
</div>
<p className="text-muted mb-6">A mind-bending journey into the unknown, where reality blurs and hope lights the way.</p>
</div>
<button className="bg-accent text-primary px-6 py-3 rounded-2xl font-semibold shadow-soft text-lg hover:scale-105 transition w-full mt-4">Pay $2.99 &amp; Watch</button>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto mt-24 bg-card rounded-2xl shadow-soft p-8">
<h2 className="text-xl font-semibold font-poppins mb-6">Upload New Short Film</h2>
<form className="space-y-5">
<div>
<label className="block mb-1 text-accent font-semibold">Film Title</label>
<input className="w-full rounded-xl border-0 bg-primary/40 text-white px-4 py-2 focus:ring-2 focus:ring-accent outline-none transition" placeholder="e.g. Into the Night" type="text"/>
</div>
<div>
<label className="block mb-1 text-accent font-semibold">Description</label>
<textarea className="w-full rounded-xl border-0 bg-primary/40 text-white px-4 py-2 focus:ring-2 focus:ring-accent outline-none transition resize-none" placeholder="Brief film synopsis" rows="3"></textarea>
</div>
<div>
<label className="block mb-1 text-accent font-semibold">Genre</label>
<select className="w-full rounded-xl border-0 bg-primary/40 text-white px-4 py-2 focus:ring-2 focus:ring-accent outline-none transition">
<option>Drama</option>
<option>Comedy</option>
<option>Horror</option>
<option>Sci-Fi</option>
<option>Documentary</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block mb-1 text-accent font-semibold">Thumbnail</label>
<input className="w-full text-white bg-primary/40 rounded-xl file:bg-accent file:text-primary file:rounded-xl file:border-0 file:px-4 file:py-2 file:font-semibold file:shadow-soft" type="file"/>
</div>
<div>
<label className="block mb-1 text-accent font-semibold">Film File</label>
<input className="w-full text-white bg-primary/40 rounded-xl file:bg-accent file:text-primary file:rounded-xl file:border-0 file:px-4 file:py-2 file:font-semibold file:shadow-soft" type="file"/>
</div>
<button className="bg-accent text-primary w-full py-3 rounded-2xl font-semibold shadow-soft text-lg hover:scale-105 transition" type="submit">Upload Film</button>
</form>
</section>

<section className="max-w-5xl mx-auto mt-24 bg-card rounded-2xl shadow-soft p-8">
<h2 className="text-xl font-semibold font-poppins mb-6">Admin: Manage Films</h2>
<div className="overflow-x-auto scrollbar-hide">
<table className="min-w-full text-left">
<thead>
<tr>
<th className="py-3 px-4 text-accent font-semibold">Title</th>
<th className="py-3 px-4 text-accent font-semibold">Genre</th>
<th className="py-3 px-4 text-accent font-semibold">Uploader</th>
<th className="py-3 px-4 text-accent font-semibold">Actions</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-primary/30 hover:bg-primary/20 transition">
<td className="py-3 px-4">Stellar</td>
<td className="py-3 px-4"><span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs">Sci-Fi</span></td>
<td className="py-3 px-4">Arjun S.</td>
<td className="py-3 px-4 flex gap-3">
<button className="bg-coral text-white px-3 py-1 rounded-lg text-xs font-semibold hover:scale-105 transition">Delete</button>
<button className="bg-primary text-accent px-3 py-1 rounded-lg text-xs font-semibold hover:scale-105 transition">Hide</button>
</td>
</tr>
<tr className="border-b border-primary/30 hover:bg-primary/20 transition">
<td className="py-3 px-4">Nocturne</td>
<td className="py-3 px-4"><span className="bg-coral/20 text-coral px-3 py-1 rounded-full text-xs">Horror</span></td>
<td className="py-3 px-4">Jessie K.</td>
<td className="py-3 px-4 flex gap-3">
<button className="bg-coral text-white px-3 py-1 rounded-lg text-xs font-semibold hover:scale-105 transition">Delete</button>
<button className="bg-primary text-accent px-3 py-1 rounded-lg text-xs font-semibold hover:scale-105 transition">Hide</button>
</td>
</tr>
<tr className="hover:bg-primary/20 transition">
<td className="py-3 px-4">Laugh Line</td>
<td className="py-3 px-4"><span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs">Comedy</span></td>
<td className="py-3 px-4">Mina L.</td>
<td className="py-3 px-4 flex gap-3">
<button className="bg-coral text-white px-3 py-1 rounded-lg text-xs font-semibold hover:scale-105 transition">Delete</button>
<button className="bg-primary text-accent px-3 py-1 rounded-lg text-xs font-semibold hover:scale-105 transition">Hide</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>

<div className="fixed inset-0 z-50 hidden modal-bg flex items-center justify-center" id="loginModal">
<div className="bg-card rounded-2xl shadow-soft p-8 w-full max-w-md relative">
<button className="absolute top-4 right-4 text-muted hover:text-accent transition text-2xl" onclick="document.getElementById('loginModal').classList.add('hidden')">×</button>
<h2 className="text-xl font-semibold font-poppins mb-4 text-accent">Login to Filmila</h2>
<form className="space-y-4">
<div>
<label className="block mb-1">Email</label>
<input className="w-full rounded-xl border-0 bg-primary/40 text-white px-4 py-2 focus:ring-2 focus:ring-accent outline-none transition" placeholder="you@email.com" type="email"/>
</div>
<div>
<label className="block mb-1">Password</label>
<input className="w-full rounded-xl border-0 bg-primary/40 text-white px-4 py-2 focus:ring-2 focus:ring-accent outline-none transition" type="password"/>
</div>
<button className="bg-accent text-primary w-full py-2 rounded-xl font-semibold shadow-soft text-lg hover:scale-105 transition" type="submit">Sign In</button>
</form>
<div className="mt-6 text-center text-muted">
      New to Filmila?
      <a className="text-accent font-semibold hover:underline" href="#">Sign up</a>
</div>
</div>
</div>


    </>
  );
}
