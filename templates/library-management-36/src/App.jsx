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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center">
<iconify-icon height="20" icon="solar:book-bookmark-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-lg uppercase text-gray-900">Athenaeum</span>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-gray-900 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#catalog">Catalog</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#donate">Donate</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#about">About</a>
</nav>

<div className="flex items-center space-x-4">
<button className="text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">
<iconify-icon height="22" icon="solar:magnifer-linear" style={{strokeWidth: '1.5px'}} width="22"></iconify-icon>
</button>
<button className="text-gray-500 hover:text-gray-900 transition-colors relative">
<iconify-icon height="22" icon="solar:bookmark-linear" style={{strokeWidth: '1.5px'}} width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-blue-600 text-[8px] font-medium text-white ring-2 ring-white">2</span>
</button>
<div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
<button className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 border border-gray-200 hover:border-gray-300 transition-colors">
<iconify-icon className="text-gray-600" height="18" icon="solar:user-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<main className="flex-grow">

<section className="relative pt-24 pb-16 overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-gray-50 to-gray-50"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200/80 shadow-sm mb-6">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-gray-600">New arrivals for Spring 2024</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6 max-w-3xl mx-auto leading-tight">
                    Discover your next great read in our digital archive.
                </h1>
<p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10">
                    Access thousands of books, research papers, and journals. A modern platform built for students, researchers, and lifelong learners.
                </p>

<div className="max-w-2xl mx-auto relative group shadow-sm rounded-xl">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400 group-focus-within:text-blue-500 transition-colors" height="20" icon="solar:magnifer-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<input className="block w-full pl-12 pr-32 py-4 bg-white border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all" placeholder="Search by title, author, or ISBN..." type="text"/>
<div className="absolute inset-y-0 right-2 flex items-center">
<button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                            Search
                        </button>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-gray-200/60 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
<div className="flex flex-col">
<span className="text-3xl font-semibold tracking-tight text-gray-900">45k+</span>
<span className="text-sm text-gray-500 mt-1">Total Books</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-semibold tracking-tight text-gray-900">12k</span>
<span className="text-sm text-gray-500 mt-1">Active Readers</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-semibold tracking-tight text-gray-900">850</span>
<span className="text-sm text-gray-500 mt-1">Donations this year</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-semibold tracking-tight text-gray-900">99%</span>
<span className="text-sm text-gray-500 mt-1">Uptime</span>
</div>
</div>
</div>
</section>

<section className="py-16" id="catalog">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Library Catalog</h2>
<p className="text-sm text-gray-500 mt-1">Browse our extensive collection of resources.</p>
</div>
<div className="flex flex-wrap items-center gap-3">

<div className="relative">
<select className="appearance-none bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 block w-full pl-3 pr-10 py-2 cursor-pointer transition-colors hover:bg-gray-50">
<option>All Categories</option>
<option>Computer Science</option>
<option>Literature</option>
<option>Physics</option>
<option>History</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</div>
</div>

<div className="relative">
<select className="appearance-none bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 block w-full pl-3 pr-10 py-2 cursor-pointer transition-colors hover:bg-gray-50">
<option>Sort by: Latest</option>
<option>Title: A-Z</option>
<option>Title: Z-A</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<iconify-icon height="16" icon="solar:sort-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</div>
</div>

<div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
<span className="text-sm text-gray-600">Available only</span>
<button aria-checked="false" className="relative inline-flex h-4 w-7 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-1" role="switch" type="button">
<span className="pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0"></span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-300 transition-all duration-300">

<div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
<img alt="The Pragmatic Programmer" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" src="https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none"></div>
</div>

<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2 gap-2">
<h3 className="text-base font-medium tracking-tight text-gray-900 line-clamp-2">The Pragmatic Programmer</h3>
<button className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0">
<iconify-icon height="18" icon="solar:heart-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</button>
</div>
<p className="text-sm text-gray-500 mb-4">Andrew Hunt, David Thomas</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-gray-600">Available</span>
</div>
<button className="text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-md transition-colors">
                                    Borrow
                                </button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-300 transition-all duration-300">
<div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
<img alt="The Design of Everyday Things" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" src="https://covers.openlibrary.org/b/isbn/9780465050659-L.jpg"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none"></div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2 gap-2">
<h3 className="text-base font-medium tracking-tight text-gray-900 line-clamp-2">The Design of Everyday Things</h3>
<button className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0">
<iconify-icon height="18" icon="solar:heart-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</button>
</div>
<p className="text-sm text-gray-500 mb-4">Don Norman</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
<span className="text-xs font-medium text-gray-600">Issued</span>
</div>
<button className="text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-md cursor-not-allowed">
                                    Waitlist
                                </button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-300 transition-all duration-300">
<div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
<img alt="A Brief History of Time" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" src="https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none"></div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2 gap-2">
<h3 className="text-base font-medium tracking-tight text-gray-900 line-clamp-2">A Brief History of Time</h3>
<button className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0 text-red-500">
<iconify-icon height="18" icon="solar:heart-bold" width="18"></iconify-icon>
</button>
</div>
<p className="text-sm text-gray-500 mb-4">Stephen Hawking</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-gray-600">Available</span>
</div>
<button className="text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-md transition-colors">
                                    Borrow
                                </button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-300 transition-all duration-300">
<div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
<img alt="1984" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" src="https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none"></div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2 gap-2">
<h3 className="text-base font-medium tracking-tight text-gray-900 line-clamp-2">1984: Anniversary Edition</h3>
<button className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0">
<iconify-icon height="18" icon="solar:heart-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</button>
</div>
<p className="text-sm text-gray-500 mb-4">George Orwell</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-gray-600">Available</span>
</div>
<button className="text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-md transition-colors">
                                    Borrow
                                </button>
</div>
</div>
</div>
</div>

<div className="mt-10 text-center">
<button className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 hover:text-gray-900 px-6 py-2.5 rounded-lg transition-colors">
                        Load More Results
                        <iconify-icon height="16" icon="solar:refresh-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-20 bg-gray-900 text-white relative overflow-hidden" id="donate">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Support Our Library</h2>
<p className="text-base text-gray-400 max-w-2xl mx-auto">Your contributions help us expand our collection and maintain a state-of-the-art facility for all students and researchers.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
<iconify-icon height="20" icon="solar:book-2-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Donate Books</h3>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-gray-400 mb-1">Book Title</label>
<input className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-2.5 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" placeholder="Enter book title" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-400 mb-1">Author</label>
<input className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-2.5 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" placeholder="Author name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-400 mb-1">Condition</label>
<select className="appearance-none w-full bg-gray-900/50 border border-gray-700 rounded-lg py-2.5 pl-3 pr-8 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors">
<option>New</option>
<option>Like New</option>
<option>Good</option>
<option>Acceptable</option>
</select>
</div>
</div>
<button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-medium text-sm py-2.5 rounded-lg transition-colors mt-2" type="button">
                                Submit Book Details
                            </button>
</form>
</div>

<div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
<iconify-icon height="20" icon="solar:wallet-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Financial Support</h3>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-gray-400 mb-1">Full Name</label>
<input className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-2.5 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-400 mb-2">Select Amount</label>
<div className="grid grid-cols-3 gap-3">

<label className="cursor-pointer">
<input className="peer sr-only" name="amount" type="radio"/>
<div className="text-center py-2 border border-gray-700 rounded-lg text-sm font-medium text-gray-400 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600 hover:border-gray-500 transition-all">
                                            $10
                                        </div>
</label>
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="amount" type="radio"/>
<div className="text-center py-2 border border-gray-700 rounded-lg text-sm font-medium text-gray-400 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600 hover:border-gray-500 transition-all">
                                            $25
                                        </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="amount" type="radio"/>
<div className="text-center py-2 border border-gray-700 rounded-lg text-sm font-medium text-gray-400 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600 hover:border-gray-500 transition-all">
                                            $50
                                        </div>
</label>
</div>
<div className="mt-3 relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-500 text-sm">$</span>
</div>
<input className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-2.5 pl-7 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" placeholder="Custom amount" type="number"/>
</div>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm py-2.5 rounded-lg transition-colors mt-2" type="button">
                                Proceed to Payment
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-200 text-gray-600 rounded flex items-center justify-center">
<iconify-icon height="14" icon="solar:book-bookmark-linear" style={{strokeWidth: '1.5px'}} width="14"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-sm uppercase text-gray-900">Athenaeum</span>
</div>
<div className="flex space-x-6 text-sm text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-gray-900 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-gray-900 transition-colors" href="#">Contact Support</a>
</div>
<div className="text-sm text-gray-400">
                    © 2024 Athenaeum Library Systems. All rights reserved.
                </div>
</div></div></footer>
    </>
  );
}
