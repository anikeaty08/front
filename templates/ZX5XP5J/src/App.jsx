import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Mobile menu toggle
    document.getElementById('nav-toggle').addEventListener('click', function() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    });
    // Fade-in animation for highlight sections
    function onScrollFadeIn() {
      document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add('visible');
        }
      });
    }
    window.addEventListener('scroll', onScrollFadeIn);
    window.addEventListener('DOMContentLoaded', onScrollFadeIn);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-30 bg-white shadow-md">
<nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
<div className="flex items-center">
<span className="font-bold text-xl text-blue-700">Altos Academy</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-gray-700 hover:text-blue-700 font-medium transition" href="#">About Us</a>
<a className="text-gray-700 hover:text-blue-700 font-medium transition" href="#">Programs</a>
<a className="text-gray-700 hover:text-blue-700 font-medium transition" href="#">2025 Summer</a>
<a className="text-gray-700 hover:text-blue-700 font-medium transition" href="#">Private Tutors</a>
<a className="text-gray-700 hover:text-blue-700 font-medium transition" href="#">Test Prep</a>
</div>

<div className="md:hidden">
<button className="text-gray-700 focus:outline-none" id="nav-toggle">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</nav>

<div className="md:hidden hidden px-4 pb-4 bg-white shadow-md" id="mobile-menu">
<a className="block py-2 text-gray-700 hover:text-blue-700 font-medium" href="#">About Us</a>
<a className="block py-2 text-gray-700 hover:text-blue-700 font-medium" href="#">Programs</a>
<a className="block py-2 text-gray-700 hover:text-blue-700 font-medium" href="#">2025 Summer</a>
<a className="block py-2 text-gray-700 hover:text-blue-700 font-medium" href="#">Private Tutors</a>
<a className="block py-2 text-gray-700 hover:text-blue-700 font-medium" href="#">Test Prep</a>
</div>
</header>
<div className="h-20"></div>

<section className="py-12 bg-gray-50">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">Programs We Offer</h2>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
<div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
<img alt="Public Speaking and Debate" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-5">
<h3 className="font-bold text-lg mb-2 text-blue-700">Public Speaking and Debate</h3>
<p className="text-gray-600 text-sm">Build confidence, critical thinking, and persuasive skills in a supportive environment.</p>
</div>
</div>
<div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
<img alt="English Language Arts" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-5">
<h3 className="font-bold text-lg mb-2 text-blue-700">English Language Arts</h3>
<p className="text-gray-600 text-sm">Master reading, writing, and communication to excel academically and beyond.</p>
</div>
</div>
<div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
<img alt="Reading and Writing" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-5">
<h3 className="font-bold text-lg mb-2 text-blue-700">Reading and Writing</h3>
<p className="text-gray-600 text-sm">Strengthen literacy skills through engaging lessons and personalized guidance.</p>
</div>
</div>
<div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
<img alt="Mandarin" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-5">
<h3 className="font-bold text-lg mb-2 text-blue-700">Mandarin</h3>
<p className="text-gray-600 text-sm">Immerse in Mandarin language and culture with interactive and fun classes.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-16 space-y-16">
<div className="flex flex-col md:flex-row items-center gap-8 fade-in">
<div className="flex-1">
<img alt="Why Families Choose" className="rounded-2xl shadow-lg w-full h-72 object-cover" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex-1">
<h3 className="text-2xl font-bold mb-4 text-blue-700">Why Families Choose Altos Academy</h3>
<p className="text-gray-700 text-lg">
          Our experienced educators foster a nurturing learning environment where every child’s unique strengths are celebrated. Families trust us for our commitment to academic excellence and holistic development.
        </p>
</div>
</div>
<div className="flex flex-col md:flex-row-reverse items-center gap-8 fade-in">
<div className="flex-1">
<img alt="What Sets Our Students Apart" className="rounded-2xl shadow-lg w-full h-72 object-cover" src="https://images.unsplash.com/photo-1496307653780-42ee777d4842?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex-1">
<h3 className="text-2xl font-bold mb-4 text-blue-700">What Sets Our Students Apart</h3>
<p className="text-gray-700 text-lg">
          Altos Academy students excel not only in academics but also develop leadership, creativity, and character. Our programs inspire resilient, confident learners ready to make a positive impact.
        </p>
</div>
</div>
</section>

<a aria-label="Register Now" className="fixed z-50 bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-200 ring-2 ring-blue-200 focus:outline-none" href="https://forms.gle/your-google-form-link-here" rel="noopener noreferrer" target="_blank">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
    Register Now
  </a>

<footer className="bg-gray-900 text-gray-100">
<div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

<div>
<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
<ul className="space-y-2">
<li><a className="hover:underline hover:text-blue-300" href="#">Terms of Service</a></li>
<li><a className="hover:underline hover:text-blue-300" href="#">Privacy Policy</a></li>
<li><a className="hover:underline hover:text-blue-300" href="#">Refund Policy</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold mb-4">Contact Us</h4>
<ul className="space-y-2 text-sm">
<li>4970 El Camino Real Suite 110B</li>
<li>Los Altos, CA 94022</li>
<li>Email: <a className="hover:underline hover:text-blue-300" href="mailto:contact@altos-academy.com">contact@altos-academy.com</a></li>
<li>Phone: <a className="hover:underline hover:text-blue-300" href="tel:+16502396756">(650) 239-6756</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
<svg aria-hidden="true" className="w-6 h-6 text-green-400" fill="currentColor" viewbox="0 0 48 48">
<circle cx="24" cy="24" fill="#7bb32e" r="24"></circle>
<ellipse cx="24.5" cy="29.5" fill="#fff" rx="13.5" ry="10.5"></ellipse>
<ellipse cx="31.5" cy="18.5" fill="#fff" rx="11.5" ry="9.5"></ellipse>
<circle cx="34" cy="17" fill="#7bb32e" r="1.5"></circle>
<circle cx="27" cy="19" fill="#7bb32e" r="1.5"></circle>
<circle cx="23" cy="30" fill="#7bb32e" r="1.5"></circle>
<circle cx="29" cy="31" fill="#7bb32e" r="1.5"></circle>
</svg>
          Follow Us (WeChat)
        </h4>
<div className="flex flex-col items-start">
<img alt="WeChat QR code" className="w-28 h-28 rounded bg-white border border-gray-300 mb-2" src="https://api.qrserver.com/v1/create-qr-code/?data=WeChatID1234&amp;size=120x120"/>
<span className="text-xs text-gray-300">Scan to follow us</span>
</div>
</div>
</div>
<div className="text-center text-xs py-4 border-t border-gray-800 text-gray-400">
      © 2024 Altos Academy. All rights reserved.
    </div>
</footer>


    </>
  );
}
