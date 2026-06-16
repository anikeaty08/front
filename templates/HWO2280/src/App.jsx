import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full border-b border-gray-100 py-6 mb-8">
<div className="max-w-4xl flex mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<h1 className="text-2xl font-bold tracking-tight">PinPlaces</h1>
<nav className="">
<a className="text-teal-600 font-medium hover:underline" href="#">Explore</a>
<a className="hover:text-teal-600 text-neutral-700 ml-6" href="#">About</a>
</nav>
</div>
</header>

<section className="max-w-2xl mx-auto mb-10 px-4">
<form className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex flex-col gap-4">
<div className="">
<label className="block text-sm font-medium font-roboto mb-1 drop-shadow-md" htmlFor="title">List Name</label><input className="w-full focus:outline-none focus:ring-2 focus:ring-teal-400 transition border-gray-200 border rounded-md pt-2 pr-4 pb-2 pl-4" id="title" name="title" placeholder="e.g. Best Coffee Shops in NYC" required="" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium mb-1" htmlFor="desc">Description</label><textarea className="w-full focus:outline-none focus:ring-2 focus:ring-teal-400 transition border-gray-200 border rounded-md pt-2 pr-4 pb-2 pl-4" id="desc" name="desc" placeholder="What makes this list special?" rows="2"></textarea>
</div>
<div className="">
<label className="block text-sm font-medium mb-1" htmlFor="link">Google List Link</label>
<input className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition" id="link" name="link" placeholder="Paste your Google Saved Places link" required="" type="url"/>
</div>
<button className="hover:bg-teal-700 transition font-semibold text-white bg-teal-600 rounded-md mt-2 pt-2 pr-6 pb-2 pl-6" type="submit">
        Share List
      </button>
</form>
</section>

<main className="max-w-5xl mx-auto px-4">
<h2 className="text-xl font-semibold text-gray-800 mb-4">Recently Shared Lists</h2>
<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

<div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="bg-teal-50 h-36 flex items-center justify-center">
<svg className="h-12 w-12 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414m0 0a4 4 0 10-5.657 5.657 4 4 0 005.657-5.657zm0 0V9a2 2 0 012-2h2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="p-4 flex-1 flex flex-col">
<h3 className="font-semibold text-teal-600 mb-1">Hidden Gem Cafés in Paris</h3>
<p className="text-sm text-gray-700 flex-1">A curated list of lesser-known spots for amazing coffee and pastries in Paris.</p>
</div>
<a className="block text-center py-2 text-teal-700 font-medium border-t border-gray-100 hover:bg-teal-50 transition" href="https://goo.gl/maps/example1" target="_blank">
          View Google List →
        </a>
</div>

<div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="bg-teal-50 h-36 flex items-center justify-center">
<svg className="h-12 w-12 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 8c.132 0 .263.053.364.146l5 4.5A.5.5 0 0117 13H7a.5.5 0 01-.364-.854l5-4.5A.5.5 0 0112 8z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="p-4 flex-1 flex flex-col">
<h3 className="font-semibold text-teal-600 mb-1">Tokyo Ramen Must-Trys</h3>
<p className="text-sm text-gray-700 flex-1">Slurp your way through Tokyo with these essential ramen spots.</p>
</div>
<a className="block text-center py-2 text-teal-700 font-medium border-t border-gray-100 hover:bg-teal-50 transition" href="https://goo.gl/maps/example2" target="_blank">
          View Google List →
        </a>
</div>

<div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="bg-teal-50 h-36 flex items-center justify-center">
<svg className="h-12 w-12 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="p-4 flex-1 flex flex-col">
<h3 className="font-semibold text-teal-600 mb-1">NYC Art Galleries Walk</h3>
<p className="text-sm text-gray-700 flex-1">Explore Manhattan’s art scene with this walkable gallery route.</p>
</div>
<a className="block text-center py-2 text-teal-700 font-medium border-t border-gray-100 hover:bg-teal-50 transition" href="https://goo.gl/maps/example3" target="_blank">
          View Google List →
        </a>
</div>

</div>
</main>

<footer className="max-w-4xl mx-auto mt-16 py-8 text-center text-gray-400 text-sm border-t border-gray-100">
    © 2024 PinPlaces. Not affiliated with Google.
  </footer>

    </>
  );
}
