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
      

<section className="relative min-h-screen flex items-center justify-center bg-[#000] overflow-hidden">
<video autoPlay className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" loop muted playsInline>
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-[#000]/90"></div>
<div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
<h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
        Cinematic Storytelling<br />
<span className="text-[#fab235]">for Property Excellence</span>
</h1>
<p className="text-lg md:text-2xl mb-8 text-[#cfcfcf]">
        Elevate your brand presence with Singapore’s leading real estate media creators. Visuals that move, stories that sell.
      </p>
<a className="inline-block px-8 py-3 rounded-full bg-[#fab235] text-black font-semibold text-lg tracking-wide shadow-lg hover:bg-[#f2deb9] transition" href="#enquiry">
        Partner With Us
      </a>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-[#fab235] hover:text-[#f2deb9] font-semibold group transition" href="#feature-video">
<svg className="w-6 h-6 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 5l7 7-7 7M5 12h16"></path></svg>
          Watch Our Work
        </a>
</div>
</div>
</section>

<section className="py-20 px-4 bg-[#000] flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12" id="feature-video">
<div className="flex-1">
<div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl border-4 border-[#181818]">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/ScMzIvxBSi4" title="PLB Media Feature Video"></iframe>
</div>
</div>
<div className="flex-1 md:pl-10">
<h2 className="text-3xl font-bold text-white mb-4">Featured Work: The Art of Home</h2>
<p className="mb-6 text-lg text-[#cfcfcf]">Experience our signature cinematic approach. This property showcase garnered 100K+ views and transformed the client’s listing into a must-see destination.</p>
<a className="inline-block px-6 py-2 rounded-full bg-[#f2deb9] text-[#000] font-semibold hover:bg-[#fab235] transition" href="#past-projects">See More Projects</a>
</div>
</section>

<section className="py-20 px-4 bg-gradient-to-b from-[#000] via-[#181818] to-[#000]">
<div className="max-w-6xl mx-auto">
<h3 className="text-2xl md:text-3xl text-white font-bold mb-8 text-center">Our Developer Partners</h3>
<div className="carousel flex gap-10 overflow-x-auto pb-4 px-2 select-none">
<img alt="CapitaLand" className="h-12 grayscale opacity-80 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/CapitaLand_Logo.svg" />
<img alt="CDL" className="h-12 grayscale opacity-80 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/8/86/City_Developments_Limited_logo.svg" />
<img alt="Keppel" className="h-12 grayscale opacity-80 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Keppel_Corporation_logo.svg" />
<img alt="Frasers" className="h-12 grayscale opacity-80 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/9/94/Frasers_Property_logo.svg" />
<img alt="UOL" className="h-12 grayscale opacity-80 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/UOL_Group_logo.svg" />
<img alt="GuocoLand" className="h-12 grayscale opacity-80 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Guocoland_logo.svg" />
</div>
<h3 className="text-2xl md:text-3xl text-white font-bold mt-16 mb-8 text-center">Brand & Corporate Partners</h3>
<div className="carousel flex gap-10 overflow-x-auto pb-4 px-2 select-none">
<img alt="DBS" className="h-12 grayscale opacity-80 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/2/2d/DBS_Bank_logo.svg" />
<img alt="OCBC" className="h-12 grayscale opacity-80 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/OCBC_Bank_logo.svg" />
<img alt="Singtel" className="h-12 grayscale opacity-80 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Singtel_logo.svg" />
<img alt="Prudential" className="h-12 grayscale opacity-80 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Prudential_logo.svg" />
<img alt="NTUC" className="h-12 grayscale opacity-80 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/2/29/NTUC_Income_logo.svg" />
<img alt="StarHub" className="h-12 grayscale opacity-80 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/StarHub_logo.svg" />
</div>
</div>
</section>

<section className="py-20 px-4 bg-[#000]">
<div className="max-w-6xl mx-auto">
<h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">The PLB Media Difference</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
<div className="flex flex-col items-center text-center">
<div className="bg-[#181818] p-5 rounded-full mb-4">
<svg className="w-10 h-10 text-[#fab235]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"></path></svg>
</div>
<h4 className="font-semibold text-[#f2deb9] mb-2">Cinematic Production</h4>
<p className="text-sm text-[#cfcfcf]">Striking visuals & film-grade storytelling.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="bg-[#181818] p-5 rounded-full mb-4">
<svg className="w-10 h-10 text-[#fab235]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 17l4 4 4-4m0-5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v9m-4 3h8"></path></svg>
</div>
<h4 className="font-semibold text-[#f2deb9] mb-2">Property Expertise</h4>
<p className="text-sm text-[#cfcfcf]">Deep understanding of real estate marketing.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="bg-[#181818] p-5 rounded-full mb-4">
<svg className="w-10 h-10 text-[#fab235]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
</div>
<h4 className="font-semibold text-[#f2deb9] mb-2">Fast Turnaround</h4>
<p className="text-sm text-[#cfcfcf]">Agile workflows for timely delivery.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="bg-[#181818] p-5 rounded-full mb-4">
<svg className="w-10 h-10 text-[#fab235]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 7h6M7 9v6m10 2h-6m-2 2l-3.536-3.536"></path></svg>
</div>
<h4 className="font-semibold text-[#f2deb9] mb-2">Cutting-Edge Tech</h4>
<p className="text-sm text-[#cfcfcf]">Drones, 4K cinema, and next-gen editing.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="bg-[#181818] p-5 rounded-full mb-4">
<svg className="w-10 h-10 text-[#fab235]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87m9-13a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path></svg>
</div>
<h4 className="font-semibold text-[#f2deb9] mb-2">Dedicated Team</h4>
<p className="text-sm text-[#cfcfcf]">Collaborative, creative, and passionate pros.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 bg-[#181818]" id="past-projects">
<div className="max-w-6xl mx-auto">
<h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Past Projects</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

<div className="group relative bg-[#000] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition">
<img alt="Project 1" className="w-full h-52 object-cover opacity-90 group-hover:opacity-60 transition" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" />
<div className="absolute inset-0 flex flex-col justify-end px-5 py-6 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition">
<h4 className="font-bold text-[#fab235] text-lg mb-1">Skyline Penthouse</h4>
<p className="text-[#f2deb9] text-xs">Luxury tour, 90K+ views, featured in The Straits Times</p>
</div>
</div>

<div className="group relative bg-[#000] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition">
<img alt="Project 2" className="w-full h-52 object-cover opacity-90 group-hover:opacity-60 transition" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" />
<div className="absolute inset-0 flex flex-col justify-end px-5 py-6 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition">
<h4 className="font-bold text-[#fab235] text-lg mb-1">Modern Family Home</h4>
<p className="text-[#f2deb9] text-xs">Cinematic reveal, 75K+ views, award-nominated</p>
</div>
</div>

<div className="group relative bg-[#000] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition">
<img alt="Project 3" className="w-full h-52 object-cover opacity-90 group-hover:opacity-60 transition" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80" />
<div className="absolute inset-0 flex flex-col justify-end px-5 py-6 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition">
<h4 className="font-bold text-[#fab235] text-lg mb-1">Urban Loft</h4>
<p className="text-[#f2deb9] text-xs">Stylish branding, 50K+ views</p>
</div>
</div>

<div className="group relative bg-[#000] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition">
<img alt="Project 4" className="w-full h-52 object-cover opacity-90 group-hover:opacity-60 transition" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" />
<div className="absolute inset-0 flex flex-col justify-end px-5 py-6 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition">
<h4 className="font-bold text-[#fab235] text-lg mb-1">Heritage Bungalow</h4>
<p className="text-[#f2deb9] text-xs">Emotional storytelling, 120K+ views</p>
</div>
</div>

<div className="group relative bg-[#000] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition">
<img alt="Project 5" className="w-full h-52 object-cover opacity-90 group-hover:opacity-60 transition" src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=600&q=80" />
<div className="absolute inset-0 flex flex-col justify-end px-5 py-6 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition">
<h4 className="font-bold text-[#fab235] text-lg mb-1">Seaside Villa</h4>
<p className="text-[#f2deb9] text-xs">Drone showcase, 60K+ views</p>
</div>
</div>

<div className="group relative bg-[#000] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition">
<img alt="Project 6" className="w-full h-52 object-cover opacity-90 group-hover:opacity-60 transition" src="https://images.unsplash.com/photo-1465398498263-a732a3f2686b?auto=format&fit=crop&w=600&q=80" />
<div className="absolute inset-0 flex flex-col justify-end px-5 py-6 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition">
<h4 className="font-bold text-[#fab235] text-lg mb-1">Executive Condo</h4>
<p className="text-[#f2deb9] text-xs">Fast turnaround, 40K+ views</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 bg-[#000]" id="enquiry">
<div className="max-w-3xl mx-auto bg-gradient-to-br from-[#181818] via-[#181818]/80 to-[#000] rounded-xl shadow-2xl p-10 md:p-16">
<h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h3>
<p className="mb-8 text-[#f2deb9] text-lg">Ready to make your property stand out? Tell us about your project and our team will get in touch.</p>
<form className="space-y-6">
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-1">
<label className="block text-[#fab235] mb-2 font-semibold">Name</label>
<input className="w-full bg-[#000] border border-[#fab235] rounded px-4 py-3 text-[#cfcfcf] focus:outline-none focus:border-[#f2deb9] transition" placeholder="Your Name" required type="text" />
</div>
<div className="flex-1">
<label className="block text-[#fab235] mb-2 font-semibold">Email</label>
<input className="w-full bg-[#000] border border-[#fab235] rounded px-4 py-3 text-[#cfcfcf] focus:outline-none focus:border-[#f2deb9] transition" placeholder="you@email.com" required type="email" />
</div>
</div>
<div>
<label className="block text-[#fab235] mb-2 font-semibold">Message</label>
<textarea className="w-full bg-[#000] border border-[#fab235] rounded px-4 py-3 text-[#cfcfcf] focus:outline-none focus:border-[#f2deb9] transition" placeholder="Tell us more about your vision..." required rows="4"></textarea>
</div>
<button className="w-full py-3 rounded-full bg-[#fab235] text-black font-bold text-lg shadow-xl hover:bg-[#f2deb9] transition" type="submit">
          Send Enquiry
        </button>
</form>
</div>
</section>

<footer className="bg-[#181818] border-t border-[#222] py-10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8 px-4">
<div className="flex items-center gap-3">
<img alt="PLB Media" className="w-10 h-10 rounded-full object-contain bg-[#000] border border-[#fab235]" src="https://www.propertylimbrothers.com/wp-content/uploads/2023/07/plb-media-logo.png" />
<span className="text-white font-bold text-xl">PLB Media</span>
</div>
<ul className="flex flex-wrap gap-8 md:gap-12 text-[#cfcfcf] font-medium text-sm">
<li><a className="hover:text-[#fab235] transition" href="#home">Home</a></li>
<li><a className="hover:text-[#fab235] transition" href="#feature-video">Watch Our Work</a></li>
<li><a className="hover:text-[#fab235] transition" href="#past-projects">Past Projects</a></li>
<li><a className="hover:text-[#fab235] transition" href="#enquiry">Contact</a></li>
</ul>
<div className="flex items-center gap-3 mt-6 md:mt-0">

<img alt="Award" className="h-8 w-8" src="https://img.icons8.com/fluency/48/000000/trophy.png" title="Best Real Estate Media 2023" />
<img alt="Media Award" className="h-8 w-8" src="https://img.icons8.com/fluency/48/000000/camera--v2.png" title="Cinematic Excellence Award" />
<img alt="Top Rated" className="h-8 w-8" src="https://img.icons8.com/fluency/48/000000/star--v1.png" title="Top Rated Agency" />
</div>
</div>
<div className="text-center text-[#cfcfcf] text-xs mt-6">
      © 2024 PLB Media by PropertyLimBrothers. All rights reserved.
    </div>
</footer>

    </>
  );
}
