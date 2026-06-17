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



// Optional: Simple fade-in animation for features on scroll
document.addEventListener('DOMContentLoaded', function() {
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('opacity-100', 'translate-y-0');
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.feature-fade').forEach(el => {
observer.observe(el);
});
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
      

<header className="sticky-header w-full">
<nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
<a aria-label="Coderiam Home" className="flex items-center space-x-2" href="/">
<img alt="Coderiam logo" className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="font-bold text-2xl tracking-tight text-[#002E5D]">Coderiam</span>
</a>
<ul className="flex space-x-8 text-base font-medium">
<li><a aria-current="page" className="nav-link hover:underline underline-offset-4 transition" href="/">Home</a></li>
<li><a className="nav-link hover:underline underline-offset-4 transition" href="#products">Products</a></li>
<li><a className="nav-link hover:underline underline-offset-4 transition" href="#about">About</a></li>
<li><a className="nav-link hover:underline underline-offset-4 transition" href="#contact">Contact</a></li>
</ul>
<a className="ml-6 cta-primary px-5 py-2 rounded-md bg-[#002E5D] text-white text-base font-bold shadow transition focus:outline-none focus:ring-2 focus:ring-[#3EC4D0]" href="#demo" role="button">Get Started</a>
</nav>
</header>

<section className="relative w-full min-h-[90vh] flex items-center justify-center wave-bg overflow-hidden">
<img alt="Abstract oceanic background" className="hero-image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=1500&amp;q=80"/>
<div className="ocean-overlay"></div>
<div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center px-4 py-32">
<h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-6">Modern Aquaculture Software for Efficient Fish Farming.</h1>
<p className="text-lg md:text-2xl text-white/90 mb-10 font-medium">Empower your fish farm with data-driven tools that streamline operations and maximize yield.</p>
<div className="flex flex-col md:flex-row items-center gap-4">
<a className="cta-primary px-7 py-3 rounded-md bg-[#002E5D] text-white text-lg font-bold shadow transition focus:outline-none focus:ring-2 focus:ring-[#3EC4D0] hover:underline underline-offset-4" href="#demo">
          Get Started
        </a>
<a className="cta-secondary px-7 py-3 rounded-md border-2 border-[#3EC4D0] text-white bg-[#3EC4D0] bg-opacity-40 text-lg font-bold transition hover:bg-[#3EC4D0] hover:text-[#002E5D] hover:border-[#3EC4D0] hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#3EC4D0]" href="#features">
          Learn More
        </a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto py-24 px-6" id="features">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#002E5D]">Key Features</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

<div className="feature-fade opacity-0 translate-y-8 bg-white rounded-lg shadow-sm p-8 flex flex-col items-center transition duration-700">
<span className="feature-icon flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-[#E9F5F9] text-[#3EC4D0]">
<i aria-hidden="true" className="fas fa-water fa-2x"></i>
</span>
<h3 className="font-bold text-xl mb-2 text-[#002E5D]">Real-Time Monitoring</h3>
<p className="text-[#002E5D]/80 text-base text-center">Track water quality, temperature, and fish health from any device, in real time.</p>
</div>

<div className="feature-fade opacity-0 translate-y-8 bg-white rounded-lg shadow-sm p-8 flex flex-col items-center transition duration-700">
<span className="feature-icon flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-[#E9F5F9] text-[#3EC4D0]">
<i aria-hidden="true" className="fas fa-chart-line fa-2x"></i>
</span>
<h3 className="font-bold text-xl mb-2 text-[#002E5D]">Data-Driven Insights</h3>
<p className="text-[#002E5D]/80 text-base text-center">Leverage AI analytics to forecast feed needs and optimize growth.</p>
</div>

<div className="feature-fade opacity-0 translate-y-8 bg-white rounded-lg shadow-sm p-8 flex flex-col items-center transition duration-700">
<span className="feature-icon flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-[#E9F5F9] text-[#3EC4D0]">
<i aria-hidden="true" className="fas fa-fish fa-2x"></i>
</span>
<h3 className="font-bold text-xl mb-2 text-[#002E5D]">Automated Feed Management</h3>
<p className="text-[#002E5D]/80 text-base text-center">Cut waste and cost by automating feeding schedules and alerts.</p>
</div>

<div className="feature-fade opacity-0 translate-y-8 bg-white rounded-lg shadow-sm p-8 flex flex-col items-center transition duration-700">
<span className="feature-icon flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-[#E9F5F9] text-[#3EC4D0]">
<i aria-hidden="true" className="fas fa-file-alt fa-2x"></i>
</span>
<h3 className="font-bold text-xl mb-2 text-[#002E5D]">Compliance Reporting</h3>
<p className="text-[#002E5D]/80 text-base text-center">Generate accurate regulatory reports with a single click.</p>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14 px-6">
<div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
<img alt="Coderiam team at a fish farm" className="rounded-xl shadow-md w-full max-w-sm object-cover" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="md:w-1/2">
<h2 className="text-3xl font-bold text-[#002E5D] mb-6">About Coderiam</h2>
<p className="text-lg text-[#002E5D]/90 mb-5 leading-relaxed">
          Coderiam was founded by aquaculture experts who understand the challenges of modern fish farming.
          Our mission is to modernize aquaculture through innovative software that makes farms more efficient and sustainable.
          Built on decades of industry experience, our tools turn complex data into simple, actionable insights.
          We listen closely to farmers’ needs and continuously refine our products – confident in our technology yet humble in service.
        </p>
<div className="flex flex-wrap gap-3 mt-6">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E9F5F9] text-[#3EC4D0] font-semibold text-sm">
<i className="fas fa-shield-alt mr-2"></i> Trustworthy
          </span>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E9F5F9] text-[#3EC4D0] font-semibold text-sm">
<i className="fas fa-bolt mr-2"></i> Efficient
          </span>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E9F5F9] text-[#3EC4D0] font-semibold text-sm">
<i className="fas fa-lightbulb mr-2"></i> Innovative
          </span>
</div>
</div>
</div>
</section>

<footer className="bg-[#002E5D] text-white py-16" id="contact">
<div className="max-w-4xl mx-auto flex flex-col items-center px-6 text-center">
<h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your fish farm?</h2>
<p className="text-lg mb-7">Request a demo or contact our team to see how Coderiam can streamline your aquaculture operations.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="cta-primary px-7 py-3 rounded-md bg-white text-[#002E5D] font-bold text-lg shadow transition hover:bg-[#3EC4D0] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3EC4D0]" href="#demo">Request a Demo</a>
<a className="cta-secondary px-7 py-3 rounded-md border-2 border-white text-white font-bold text-lg transition hover:bg-[#3EC4D0] hover:text-[#002E5D] hover:border-[#3EC4D0] focus:outline-none focus:ring-2 focus:ring-[#3EC4D0]" href="mailto:hello@coderiam.com">
          Email Us
        </a>
</div>
<div className="mt-10 text-white/60 text-sm">
        © 2024 Coderiam. All rights reserved.
      </div>
</div>
</footer>

    </>
  );
}
