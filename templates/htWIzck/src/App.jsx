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



    function toggleFaq(id) {
      const details = document.getElementById(id);
      const icon = document.getElementById(`icon-${id}`);
      if (details.open) {
        icon.classList.remove('rotate-180');
      } else {
        icon.classList.add('rotate-180');
      }
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
      
<section className="py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-500/[0.03] blur-3xl"></div>
<div className="container mx-auto px-4 relative z-10">
<div className="max-w-3xl mx-auto text-center mb-16">
<p className="text-gradient font-medium mb-3">Support</p>
<h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
<p className="text-white/40 text-lg max-w-2xl mx-auto">
          Find answers to common questions about our products and services.
        </p>
</div>
<div className="max-w-3xl mx-auto">
<div className="space-y-4">

<details className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300" id="faq-1" onclick="toggleFaq('faq-1')">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<h3 className="text-xl font-medium">What services do you offer?</h3>
<svg className="h-5 w-5 text-white/60 transition-transform duration-300" fill="none" id="icon-faq-1" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-white/60">
<p className="mb-4">We offer a comprehensive range of digital product services including:</p>
<ul className="list-disc pl-5 space-y-2">
<li>UI/UX Design</li>
<li>Web Development</li>
<li>Mobile App Development</li>
<li>Digital Strategy Consulting</li>
<li>Brand Identity Design</li>
</ul>
<p className="mt-4">Our team of experts works closely with you to understand your needs and deliver solutions that exceed expectations.</p>
</div>
</details>

<details className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300" id="faq-2" onclick="toggleFaq('faq-2')">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<h3 className="text-xl font-medium">How long does a typical project take?</h3>
<svg className="h-5 w-5 text-white/60 transition-transform duration-300" fill="none" id="icon-faq-2" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-white/60">
<p>Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a comprehensive application could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements and objectives.</p>
</div>
</details>

<details className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300" id="faq-3" onclick="toggleFaq('faq-3')">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<h3 className="text-xl font-medium">What is your design process?</h3>
<svg className="h-5 w-5 text-white/60 transition-transform duration-300" fill="none" id="icon-faq-3" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-white/60">
<p>Our design process follows these key phases:</p>
<ol className="list-decimal pl-5 space-y-2 my-4">
<li><strong className="text-white">Discovery:</strong> Understanding your business, users, and objectives</li>
<li><strong className="text-white">Strategy:</strong> Defining the approach and creating a roadmap</li>
<li><strong className="text-white">Wireframing:</strong> Creating the structural foundation</li>
<li><strong className="text-white">Visual Design:</strong> Developing the aesthetic and interface</li>
<li><strong className="text-white">Prototyping:</strong> Building interactive models for testing</li>
<li><strong className="text-white">Implementation:</strong> Bringing the design to life</li>
</ol>
<p>We emphasize collaboration throughout the process, ensuring your feedback is incorporated at every stage.</p>
</div>
</details>

<details className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300" id="faq-4" onclick="toggleFaq('faq-4')">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<h3 className="text-xl font-medium">How much do your services cost?</h3>
<svg className="h-5 w-5 text-white/60 transition-transform duration-300" fill="none" id="icon-faq-4" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-white/60">
<p>Our pricing is customized based on the specific needs and scope of each project. We offer flexible engagement models including:</p>
<ul className="list-disc pl-5 space-y-2 my-4">
<li>Fixed project-based pricing</li>
<li>Monthly retainer packages</li>
<li>Hourly consulting rates</li>
</ul>
<p>We're committed to providing transparent pricing with no hidden fees. Contact us for a detailed quote tailored to your project requirements.</p>
</div>
</details>

<details className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300" id="faq-5" onclick="toggleFaq('faq-5')">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<h3 className="text-xl font-medium">Do you provide ongoing support?</h3>
<svg className="h-5 w-5 text-white/60 transition-transform duration-300" fill="none" id="icon-faq-5" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-white/60">
<p>Yes, we offer comprehensive support and maintenance packages to ensure your digital products continue to perform optimally after launch. Our support services include:</p>
<ul className="list-disc pl-5 space-y-2 my-4">
<li>Regular updates and security patches</li>
<li>Performance monitoring and optimization</li>
<li>Bug fixes and issue resolution</li>
<li>Content updates and feature additions</li>
<li>24/7 emergency support (for enterprise clients)</li>
</ul>
<p>We can tailor a support package that aligns with your specific needs and budget.</p>
</div>
</details>
</div>
<div className="mt-12 text-center">
<p className="text-white/40 mb-6">Still have questions?</p>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient text-white font-medium text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all" href="#">
            Contact Support
          </a>
</div>
</div>
</div>
</section>

    </>
  );
}
