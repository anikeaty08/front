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
      
  document.getElementById('searchBtn').onclick = function(e) {
    e.stopPropagation();
    const dropdown = document.getElementById('searchDropdown');
    dropdown.classList.toggle('hidden');
  };
  document.addEventListener('click', function(e) {
    if (!document.getElementById('searchBtn').contains(e.target) && !document.getElementById('searchDropdown').contains(e.target)) {
      document.getElementById('searchDropdown').classList.add('hidden');
    }
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
      

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md">
<nav className="max-w-7xl flex items-center justify-between mr-auto ml-auto pt-4 pr-6 pb-4 pl-6">

<a className="flex items-center gap-2 font-bold text-2xl text-primary" href="/">
<img alt="Rebecca Logo" className="h-11 w-11 rounded-full shadow border border-gray-200" src="https://placehold.co/44x44"/>
        Rebecca Sayami
      </a>

<ul className="hidden md:flex gap-5 font-semibold text-gray-600">
<li className=""><a className="hover:text-blue-700 transition" href="/">Home</a></li>
<li className=""><a className="hover:text-blue-700 transition" href="#about">About</a></li>
<li className=""><a className="hover:text-blue-700 transition" href="#services">Services</a></li>
<li><a className="hover:text-blue-700 transition" href="#listings">Listings</a></li>
<li className=""><a className="hover:text-blue-700 transition" href="#blog">Blog</a></li>
<li className=""><a className="hover:text-blue-700 transition" href="#contact">Contact</a></li>
<li className=""><a className="hover:text-blue-700 transition" href="#testimonials">Testimonials</a></li>
</ul>

<div className="flex items-center gap-3">

<div className="relative">
<button className="p-2 rounded-full bg-gray-100 hover:bg-blue-50 shadow transition" id="searchBtn">
<svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="11" cy="11" r="8"></circle>
<path d="M21 21l-4.35-4.35"></path>
</svg>
</button>
<div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl p-4 hidden" id="searchDropdown">
<input className="w-full border border-gray-200 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-100 transition" placeholder="Search listings..." type="text"/>
<button className="w-full mt-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white py-2 rounded-xl font-semibold shadow hover:from-blue-800 hover:to-blue-700 transition">Search</button>
</div>
</div>
<a className="bg-gradient-to from-blue-700 to-blue-600 text-white px-5 py-2.5 font-semibold rounded-xl shadow hover:from-blue-800 hover:to-blue-700 transition" href="#contact">Let’s Connect</a>
</div>
</nav>
</header>

<section className="relative min-h-[480px] flex items-center justify-center bg-neutral-50 bg-[url(https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1080&amp;q=80)] bg-cover drop-shadow-2xl blur-none backdrop-blur-none scale-95">
<div className="relative z-10 text-center max-w-2xl mx-auto px-4">
<h1 className="md:text-5xl text-4xl font-extrabold text-neutral-50 mb-4 drop-shadow">Find Your Dream Home with Rebecca Sayami</h1>
<p className="text-white/90 text-xl md:text-2xl mb-8 font-medium drop-shadow">East Bay’s Premier Realtor</p>
<div className="flex flex-col md:flex-row gap-4 justify-center">
<a className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-50 transition" href="#listings">Browse Listings</a>
<a className="bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:from-blue-800 hover:to-blue-700 transition" href="#contact">Book a Consultation</a>
</div>
</div>
</section>

<section className="bg-[#f7fafd] pt-20 pb-20" id="listings">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Featured Listings</h2>
<div className="overflow-x-auto flex gap-7 pb-4 slider">

<div className="min-w-[320px] bg-white rounded-2xl shadow-xl p-4 relative flex flex-col transition hover:scale-[1.025] hover:shadow-2xl">
<img alt="Listing 1" className="rounded-xl mb-4 w-full h-48 object-cover shadow" src="https://placehold.co/320x200"/>
<span className="absolute top-5 left-5 bg-green-500/90 text-white text-xs px-3 py-1 rounded-full font-medium shadow">Virtual Tour</span>
<div className="text-xl font-bold text-blue-800">$1,150,000</div>
<div className="text-gray-700 my-2">4 Beds · 3 Baths</div>
<div className="text-gray-400 mb-4">Castro Valley, CA</div>
<a className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-2 px-4 rounded-xl font-medium shadow hover:from-blue-800 hover:to-blue-700 transition" href="#listings">Explore Property</a>
</div>

<div className="min-w-[320px] bg-white rounded-2xl shadow-xl p-4 relative flex flex-col transition hover:scale-[1.025] hover:shadow-2xl">
<img alt="Listing 2" className="rounded-xl mb-4 w-full h-48 object-cover shadow" src="https://placehold.co/320x200"/>
<span className="absolute top-5 left-5 bg-green-500/90 text-white text-xs px-3 py-1 rounded-full font-medium shadow">Virtual Tour</span>
<div className="text-xl font-bold text-blue-800">$895,000</div>
<div className="text-gray-700 my-2">3 Beds · 2 Baths</div>
<div className="text-gray-400 mb-4">Oakland, CA</div>
<a className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-2 px-4 rounded-xl font-medium shadow hover:from-blue-800 hover:to-blue-700 transition" href="#listings">Explore Property</a>
</div>

<div className="min-w-[320px] bg-white rounded-2xl shadow-xl p-4 relative flex flex-col transition hover:scale-[1.025] hover:shadow-2xl">
<img alt="Listing 3" className="rounded-xl mb-4 w-full h-48 object-cover shadow" src="https://placehold.co/320x200"/>
<span className="absolute top-5 left-5 bg-green-500/90 text-white text-xs px-3 py-1 rounded-full font-medium shadow">Virtual Tour</span>
<div className="text-xl font-bold text-blue-800">$1,325,000</div>
<div className="text-gray-700 my-2">5 Beds · 4 Baths</div>
<div className="text-gray-400 mb-4">Berkeley, CA</div>
<a className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-2 px-4 rounded-xl font-medium shadow hover:from-blue-800 hover:to-blue-700 transition" href="#listings">Explore Property</a>
</div>

<div className="min-w-[320px] bg-white rounded-2xl shadow-xl p-4 relative flex flex-col transition hover:scale-[1.025] hover:shadow-2xl">
<img alt="Listing 4" className="rounded-xl mb-4 w-full h-48 object-cover shadow" src="https://placehold.co/320x200"/>
<span className="absolute top-5 left-5 bg-green-500/90 text-white text-xs px-3 py-1 rounded-full font-medium shadow">Virtual Tour</span>
<div className="text-xl font-bold text-blue-800">$980,000</div>
<div className="text-gray-700 my-2">3 Beds · 2.5 Baths</div>
<div className="text-gray-400 mb-4">San Leandro, CA</div>
<a className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-2 px-4 rounded-xl font-medium shadow hover:from-blue-800 hover:to-blue-700 transition" href="#listings">Explore Property</a>
</div>
</div>
</div>
</section>

<section className="bg-white pt-20 pb-20" id="about">
<div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:gap-12">
<img alt="Rebecca Headshot" className="rounded-full w-44 h-44 mb-8 md:mb-0 shadow-lg object-cover border-4 border-blue-100" src="https://placehold.co/180x180"/>
<div className="">
<h3 className="text-2xl font-bold text-blue-900 mb-3">Meet Rebecca Sayami</h3>
<p className="mb-5 text-lg text-gray-600">With over 15 years of real estate experience, Rebecca has been recognized with the East Bay Excellence Award and is a Top 1% Producer. Her passion for helping clients find their dream homes is matched only by her dedication to community service.</p>
<a className="inline-block bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow hover:from-blue-800 hover:to-blue-700 transition" href="#about">Discover My Story</a>
</div>
</div>
</section>

<section className="py-20 bg-[#f7fafd]" id="testimonials">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-3xl font-bold text-center text-blue-900 mb-12">What Clients Say</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl shadow-xl text-gray-700 flex flex-col items-start hover:shadow-2xl transition">
<svg className="w-8 h-8 text-blue-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M17 8a5 5 0 0 1-10 0a5 5 0 0 1 10 0ZM12 17v.01"></path><path d="M21 21l-4.35-4.35"></path></svg>
<p className="mb-4 text-base">"Rebecca was amazing to work with! She made the whole process so easy and stress-free."</p>
<div className="font-semibold text-blue-800 mt-auto">– Sarah M.</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-xl text-gray-700 flex flex-col items-start hover:shadow-2xl transition">
<svg className="w-8 h-8 text-blue-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M17 8a5 5 0 0 1-10 0a5 5 0 0 1 10 0ZM12 17v.01"></path><path d="M21 21l-4.35-4.35"></path></svg>
<p className="mb-4 text-base">"Her local knowledge is unmatched. We found the perfect home thanks to her guidance."</p>
<div className="font-semibold text-blue-800 mt-auto">– James &amp; Linda</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-xl text-gray-700 flex flex-col items-start hover:shadow-2xl transition">
<svg className="w-8 h-8 text-blue-700 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M17 8a5 5 0 0 1-10 0a5 5 0 0 1 10 0ZM12 17v.01"></path><path d="M21 21l-4.35-4.35"></path></svg>
<p className="mb-4 text-base">"Rebecca’s professionalism and warmth made all the difference."</p>
<div className="font-semibold text-blue-800 mt-auto">– Priya S.</div>
</div>
</div>
<div className="text-center mt-10">
<a className="inline-block bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow hover:from-blue-800 hover:to-blue-700 transition" href="#testimonials">View All Reviews</a>
</div>
</div>
</section>

<section className="py-16 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:gap-10">
<div className="overflow-x-auto flex gap-5 w-full md:w-2/5 mb-6 md:mb-0 slider">
<img alt="Community 1" className="rounded-xl shadow min-w-[180px] h-28 object-cover border-4 border-blue-400/40" src="https://placehold.co/180x120"/>
<img alt="Community 2" className="rounded-xl shadow min-w-[180px] h-28 object-cover border-4 border-blue-400/40" src="https://placehold.co/180x120"/>
<img alt="Community 3" className="rounded-xl shadow min-w-[180px] h-28 object-cover border-4 border-blue-400/40" src="https://placehold.co/180x120"/>
</div>
<div className="md:w-3/5">
<h3 className="text-2xl font-bold mb-2">Community Impact</h3>
<p className="mb-5 text-lg">Rebecca is dedicated to giving back, actively volunteering with Life Elder Care and supporting local East Bay charities. Her commitment extends beyond real estate—she’s passionate about building a stronger community for all.</p>
<a className="inline-block bg-white text-blue-800 px-6 py-2.5 rounded-xl font-semibold shadow hover:bg-blue-100 transition" href="#about">Learn About My Community Work</a>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:gap-10">
<div className="md:w-1/2 mb-10 md:mb-0">
<h3 className="text-2xl font-bold text-blue-900 mb-3">Free East Bay Market Report</h3>
<p className="mb-4 text-lg text-gray-600">Stay ahead with the latest market trends. Sign up to receive your complimentary East Bay market report—no obligation!</p>
</div>
<form className="md:w-1/2 bg-blue-50 p-8 rounded-2xl shadow-xl space-y-5 w-full max-w-md mx-auto">
<div>
<label className="block text-gray-700 mb-1 font-semibold" htmlFor="name">Name</label>
<input className="w-full border border-gray-200 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" id="name" name="name" required="" type="text"/>
</div>
<div>
<label className="block text-gray-700 mb-1 font-semibold" htmlFor="email">Email</label>
<input className="w-full border border-gray-200 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" id="email" name="email" required="" type="email"/>
</div>
<div>
<label className="block text-gray-700 mb-1 font-semibold" htmlFor="phone">Phone</label>
<input className="w-full border border-gray-200 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 transition" id="phone" name="phone" required="" type="tel"/>
</div>
<button className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white py-3 rounded-xl font-semibold shadow hover:from-blue-800 hover:to-blue-700 transition" type="submit">Get Your Report</button>
</form>
</div>
</section>

<footer className="bg-white border-t border-blue-100 py-12 mt-8">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-10">

<div className="flex flex-col items-start">
<a className="flex items-center gap-2 font-bold text-2xl mb-1 text-blue-900" href="/">
<img alt="Rebecca Logo" className="h-11 w-11 rounded-full shadow border border-gray-200" src="https://placehold.co/44x44"/>
          Rebecca Sayami
        </a>
<span className="text-blue-400 mb-4">East Bay’s Trusted Realtor</span>
<div className="flex gap-4 mt-2">
<a className="hover:text-blue-700" href="https://facebook.com" target="_blank">
<svg className="w-6 h-6 fill-current" viewbox="0 0 24 24"><path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.17 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34v7.03C18.34 21.24 22 17.09 22 12.07z"></path></svg>
</a>
<a className="hover:text-blue-700" href="https://instagram.com" target="_blank">
<svg className="w-6 h-6 fill-current" viewbox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25A5.25 5.25 0 1 1 6.75 12A5.25 5.25 0 0 1 12 6.75Zm0 1.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 12 8.25ZM18 7.25a1 1 0 1 1-1-1a1 1 0 0 1 1 1Z"></path></svg>
</a>
</div>
</div>

<div className="flex flex-col gap-2 text-gray-500 font-medium">
<a className="hover:text-blue-700 transition" href="/">Home</a>
<a className="hover:text-blue-700 transition" href="#about">About</a>
<a className="hover:text-blue-700 transition" href="#services">Services</a>
<a className="hover:text-blue-700 transition" href="#listings">Listings</a>
<a className="hover:text-blue-700 transition" href="#blog">Blog</a>
<a className="hover:text-blue-700 transition" href="#contact">Contact</a>
<a className="hover:text-blue-700 transition" href="#testimonials">Testimonials</a>
</div>

<div className="text-gray-500 font-medium">
<div className="font-bold text-blue-900 mb-2">Contact</div>
<div>510-240-5347</div>
<div><a className="hover:text-blue-700 transition" href="mailto:rebeccasayami@gmail.com">rebeccasayami@gmail.com</a></div>
<div>20273 Patio Drive, Castro Valley, CA 94546</div>
<div className="flex gap-4 mt-3 text-blue-400">
<a className="hover:text-blue-700 transition" href="#">Privacy Policy</a>
<a className="hover:text-blue-700 transition" href="#">Terms of Use</a>
</div>
<a className="block mt-4 text-blue-400 hover:text-blue-700 transition" href="#top">Back to top ↑</a>
</div>
</div>
<div className="text-center mt-10 text-blue-300 text-sm">© 2024 Rebecca Sayami. All rights reserved.</div>
</footer>


    </>
  );
}
