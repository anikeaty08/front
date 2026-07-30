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
      

<section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20 px-4">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
<div className="flex-1">
<h1 className="text-4xl md:text-5xl font-extrabold mb-4">Unleash Your Potential at <span className="text-yellow-400">CrossFit NYC</span></h1>
<p className="text-lg mb-6">Join the city’s most dynamic CrossFit community. Expert coaches, world-class facility, and workouts that transform.</p>
<a className="inline-block bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded shadow hover:bg-yellow-300 transition" href="#contact">Book Free Trial</a>
</div>
<div className="flex-1 mt-10 md:mt-0 md:ml-8">
<img alt="CrossFit Workout" className="rounded-lg shadow-lg w-full" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80" />
</div>
</div>
</section>

<section className="py-16 px-4">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-bold text-center mb-10">Our Classes</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-xl transition">
<img alt="Group Classes" className="mx-auto mb-4 rounded-md h-32 w-full object-cover" src="https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=400&q=80" />
<h3 className="font-semibold text-xl mb-2">Group WODs</h3>
<p className="text-gray-600">High energy, coach-led classes for all levels. Build strength, endurance, and community.</p>
</div>
<div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-xl transition">
<img alt="Personal Training" className="mx-auto mb-4 rounded-md h-32 w-full object-cover" src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" />
<h3 className="font-semibold text-xl mb-2">Personal Training</h3>
<p className="text-gray-600">1-on-1 sessions tailored to your goals, from fundamentals to advanced skill work.</p>
</div>
<div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-xl transition">
<img alt="Foundations" className="mx-auto mb-4 rounded-md h-32 w-full object-cover" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" />
<h3 className="font-semibold text-xl mb-2">Foundations</h3>
<p className="text-gray-600">New to CrossFit? Our intro course teaches technique and builds confidence safely.</p>
</div>
</div>
</div>
</section>

<section className="bg-blue-900 text-white py-16 px-4">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-bold text-center mb-10">What Our Members Say</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-blue-800 bg-opacity-70 rounded-lg p-6 shadow">
<p className="italic mb-4">“I’ve never felt stronger or more supported. The coaches care and the community pushes you to be your best!”</p>
<div className="flex items-center">
<img alt="Member" className="w-10 h-10 rounded-full mr-3" src="https://randomuser.me/api/portraits/women/65.jpg" />
<span className="font-semibold">Jessica M.</span>
</div>
</div>
<div className="bg-blue-800 bg-opacity-70 rounded-lg p-6 shadow">
<p className="italic mb-4">“The best gym in NYC. Challenging workouts, amazing people, and real results. Highly recommend!”</p>
<div className="flex items-center">
<img alt="Member" className="w-10 h-10 rounded-full mr-3" src="https://randomuser.me/api/portraits/men/42.jpg" />
<span className="font-semibold">David R.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-4" id="contact">
<div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
<h2 className="text-2xl font-bold mb-6 text-center">Book Your Free Trial Class</h2>
<form>
<div className="mb-4">
<label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
<input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" id="name" placeholder="Your name" required type="text" />
</div>
<div className="mb-4">
<label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
<input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" id="email" placeholder="you@email.com" required type="email" />
</div>
<div className="mb-4">
<label className="block text-gray-700 mb-2" htmlFor="message">Message (optional)</label>
<textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" id="message" placeholder="Let us know your goals!" rows="3"></textarea>
</div>
<button className="w-full bg-blue-900 text-yellow-400 font-bold py-3 rounded hover:bg-blue-800 transition" type="submit">Request Free Trial</button>
</form>
</div>
</section>

<footer className="bg-gray-900 text-gray-200 py-6 text-center">
<p>© 2024 CrossFit NYC. 123 Fitness Ave, New York, NY</p>
<p className="mt-2">Follow us:
      <a className="text-yellow-400 hover:underline ml-1" href="#">Instagram</a>
<a className="text-yellow-400 hover:underline ml-1" href="#">Facebook</a>
</p>
</footer>

    </>
  );
}
