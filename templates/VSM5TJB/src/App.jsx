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
      

<nav className="bg-white shadow py-4">
<div className="container mx-auto flex items-center justify-between px-4">
<div className="text-2xl font-bold text-blue-600">OnSite Academy</div>
<div>
<a className="mx-3 text-gray-700 hover:text-blue-600" href="#about">About</a>
<a className="mx-3 text-gray-700 hover:text-blue-600" href="#features">Features</a>
<a className="mx-3 text-gray-700 hover:text-blue-600" href="#tutors">Tutors</a>
<a className="mx-3 text-gray-700 hover:text-blue-600" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="bg-blue-600 text-white py-16" id="about">
<div className="container mx-auto px-4 text-center">
<h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock Your Potential with On-Site Tutoring</h1>
<p className="mb-8 text-lg md:text-xl">Personalized, face-to-face tutoring for students of all ages. Achieve academic excellence with professional tutors in a supportive environment.</p>
<a className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition" href="#contact">Book a Free Session</a>
</div>
</section>

<section className="py-16" id="features">
<div className="container mx-auto px-4">
<h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
<div className="text-blue-600 text-4xl mb-4 flex justify-center">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12" cy="12" r="10" stroke="currentColor"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-2 text-center">Expert Tutors</h3>
<p className="text-gray-600 text-center">Our certified tutors are passionate educators with years of experience in their fields.</p>
</div>
<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
<div className="text-blue-600 text-4xl mb-4 flex justify-center">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M17 9V7a5 5 0 00-10 0v2M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-2 text-center">Safe Learning Spaces</h3>
<p className="text-gray-600 text-center">All sessions are held in secure, welcoming environments designed for optimal learning.</p>
</div>
<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
<div className="text-blue-600 text-4xl mb-4 flex justify-center">
<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M16 7a4 4 0 01-8 0M12 11v4m0 4h.01" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12" cy="12" r="10" stroke="currentColor"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-2 text-center">Personalized Plans</h3>
<p className="text-gray-600 text-center">Custom learning paths tailored to each student’s strengths, needs, and goals.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-100" id="tutors">
<div className="container mx-auto px-4">
<h2 className="text-3xl font-bold text-center mb-10">Meet Our Tutors</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
<img alt="Tutor John" className="w-24 h-24 rounded-full mb-4" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<h3 className="font-bold text-lg">John Smith</h3>
<p className="text-blue-600 mb-2">Math &amp; Science</p>
<p className="text-gray-600 text-center text-sm">M.Ed. in Mathematics Education. 10+ years tutoring middle and high school students.</p>
</div>
<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
<img alt="Tutor Amy" className="w-24 h-24 rounded-full mb-4" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<h3 className="font-bold text-lg">Amy Lee</h3>
<p className="text-blue-600 mb-2">English &amp; Writing</p>
<p className="text-gray-600 text-center text-sm">B.A. in English. Specializes in essay writing, reading comprehension, and SAT prep.</p>
</div>
<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
<img alt="Tutor Carlos" className="w-24 h-24 rounded-full mb-4" src="https://randomuser.me/api/portraits/men/65.jpg"/>
<h3 className="font-bold text-lg">Carlos Rivera</h3>
<p className="text-blue-600 mb-2">STEM &amp; Coding</p>
<p className="text-gray-600 text-center text-sm">M.Sc. in Computer Science. Helps students excel in STEM, robotics, and coding.</p>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="container mx-auto px-4">
<h2 className="text-3xl font-bold text-center mb-10">What Students Say</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white rounded-xl shadow p-6">
<div className="flex items-center mb-2">
<img alt="Student" className="w-10 h-10 rounded-full mr-3" src="https://randomuser.me/api/portraits/teenagers/12.jpg"/>
<div>
<div className="font-semibold">Emily T.</div>
<div className="text-sm text-blue-600">High School Student</div>
</div>
</div>
<p className="text-gray-700 mt-3">"My grades improved so much after joining OnSite Academy! The tutors really care and help me understand difficult concepts."</p>
</div>
<div className="bg-white rounded-xl shadow p-6">
<div className="flex items-center mb-2">
<img alt="Student" className="w-10 h-10 rounded-full mr-3" src="https://randomuser.me/api/portraits/teenagers/45.jpg"/>
<div>
<div className="font-semibold">Daniel K.</div>
<div className="text-sm text-blue-600">Middle School Student</div>
</div>
</div>
<p className="text-gray-700 mt-3">"I love the hands-on learning and how friendly everyone is. I feel more confident at school now."</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-blue-600" id="contact">
<div className="container mx-auto px-4">
<h2 className="text-3xl font-bold text-white text-center mb-10">Contact Us</h2>
<form className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow space-y-6">
<div>
<label className="block font-semibold mb-1 text-gray-700" htmlFor="name">Your Name</label>
<input className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400" id="name" name="name" required="" type="text"/>
</div>
<div>
<label className="block font-semibold mb-1 text-gray-700" htmlFor="email">Email</label>
<input className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400" id="email" name="email" required="" type="email"/>
</div>
<div>
<label className="block font-semibold mb-1 text-gray-700" htmlFor="message">Message</label>
<textarea className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400" id="message" name="message" required="" rows="4"></textarea>
</div>
<button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full" type="submit">Send Message</button>
</form>
</div>
</section>

<footer className="bg-gray-800 py-6">
<div className="container mx-auto px-4 text-center text-gray-300">
      © 2024 OnSite Academy. All rights reserved.
    </div>
</footer>

    </>
  );
}
