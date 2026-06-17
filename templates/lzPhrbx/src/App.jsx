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
      
<section className="py-20 px-4 max-w-7xl mx-auto">

<div className="text-center mb-16">
<span className="px-3 py-1 text-sm text-blue-300 bg-blue-900 bg-opacity-50 rounded-full font-medium">Your Questions Answered</span>
<h2 className="mt-4 text-4xl font-bold text-white">Frequently Asked <span className="text-transparent bg-clip-text gradient-bg">Questions</span></h2>
<p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
        Everything you need to know about our AI consulting services and how we can transform your business.
      </p>
</div>

<div className="max-w-3xl mx-auto space-y-6">

<details className="faq-item bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl p-6">
<summary className="flex justify-between items-center text-lg font-medium text-white">
<span>How is this different from a traditional dev agency?</span>
<div className="flex-shrink-0">
<svg className="plus w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="minus w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</summary>
<div className="text-gray-300 mt-2">
<p>Unlike traditional dev agencies that focus primarily on building software, we specialize exclusively in AI strategy and implementation. Our consultants have deep expertise in both business strategy and AI technologies, allowing us to identify high-impact opportunities and implement solutions that deliver measurable ROI. We don't just build—we transform business processes, create new revenue streams, and help you gain competitive advantages through AI.</p>
</div>
</details>

<details className="faq-item bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl p-6">
<summary className="flex justify-between items-center text-lg font-medium text-white">
<span>What ROI can I expect from AI implementation?</span>
<div className="flex-shrink-0">
<svg className="plus w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="minus w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</summary>
<div className="text-gray-300 mt-2">
<p>Our clients typically see an average ROI of 320% within the first 12 months. This comes from a combination of cost reduction (through automation and efficiency) and revenue growth (through enhanced customer experiences and new AI-powered offerings). We establish clear KPIs at the beginning of each engagement and track them rigorously. Our ROI calculator can provide an estimate based on your industry and specific use cases during our initial consultation.</p>
</div>
</details>

<details className="faq-item bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl p-6">
<summary className="flex justify-between items-center text-lg font-medium text-white">
<span>Do we need a technical team to work with you?</span>
<div className="flex-shrink-0">
<svg className="plus w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="minus w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</summary>
<div className="text-gray-300 mt-2">
<p>No, we can work with organizations at any level of technical maturity. Our team can handle the entire implementation process, from strategy to deployment and training. If you do have a technical team, we'll collaborate closely with them to ensure knowledge transfer and build internal capabilities. We also provide comprehensive documentation and training to ensure your team can maintain and extend the AI solutions we implement.</p>
</div>
</details>

<details className="faq-item bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl p-6">
<summary className="flex justify-between items-center text-lg font-medium text-white">
<span>How long does it take to implement AI solutions?</span>
<div className="flex-shrink-0">
<svg className="plus w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="minus w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</summary>
<div className="text-gray-300 mt-2">
<p>Implementation timelines vary based on the complexity of your needs, but we focus on delivering value quickly. Most clients see initial results within 4-6 weeks. We use an agile approach with phased implementations, allowing you to see ROI from simpler solutions while we work on more complex initiatives. Our AI readiness assessment helps us identify "quick wins" that can be implemented rapidly while building toward longer-term transformation.</p>
</div>
</details>

<details className="faq-item bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl p-6">
<summary className="flex justify-between items-center text-lg font-medium text-white">
<span>What industries do you specialize in?</span>
<div className="flex-shrink-0">
<svg className="plus w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="minus w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</summary>
<div className="text-gray-300 mt-2">
<p>We have deep expertise across multiple industries including healthcare, finance, retail, manufacturing, and professional services. Our team includes consultants with domain-specific knowledge in these sectors, ensuring we understand the unique challenges and opportunities in your industry. We've built a library of industry-specific AI use cases and implementation frameworks that allow us to deliver solutions tailored to your specific market needs.</p>
</div>
</details>

<details className="faq-item bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl p-6">
<summary className="flex justify-between items-center text-lg font-medium text-white">
<span>How do you handle data privacy and security?</span>
<div className="flex-shrink-0">
<svg className="plus w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="minus w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</summary>
<div className="text-gray-300 mt-2">
<p>Data security is paramount in all our implementations. We follow industry best practices for data protection and comply with regulations like GDPR, HIPAA, and CCPA. Our solutions incorporate privacy-by-design principles, and we conduct thorough security assessments before deployment. We can implement solutions that keep your data within your infrastructure, and we provide clear data governance frameworks to ensure ongoing compliance and security.</p>
</div>
</details>
</div>

<div className="mt-16 text-center">
<a className="inline-block px-8 py-4 text-white gradient-bg rounded-lg font-medium hover:opacity-90 transition shadow-lg" href="#">
        Get Your Questions Answered
      </a>
<p className="mt-4 text-gray-400">Still have questions? Schedule a free consultation with our AI experts.</p>
</div>
</section>

    </>
  );
}
