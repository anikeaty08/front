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



    tailwind.config = {
      theme: {
        extend: {
          colors: {
            cyber: {
              bg: '#0a0c12',
              component: '#181c27',
              input: 'rgba(30, 35, 50, 0.6)',
              accent: '#00f0c0',
              accentAlt: '#ff2a6d',
              text: '#e0e7ff',
              secondary: '#a0aed0',
              border: '#3a3f5e'
            }
          },
          fontFamily: {
            mono: ['Fira Code', 'monospace'],
            display: ['Orbitron', 'sans-serif']
          }
        }
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
      
<section className="py-20 cyber-grid relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyber-accent/5 blur-3xl rounded-full"></div>
<div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyber-accentAlt/5 blur-3xl rounded-full"></div>
<div className="container mx-auto px-6">

<div className="text-center mb-16">
<div className="inline-block bg-cyber-component/30 backdrop-blur-sm px-3 py-1 rounded border border-cyber-border/50 text-cyber-secondary mb-4">
<span className="text-cyber-accent">{">"}</span> Our Solutions
        </div>
<h2 className="text-4xl font-display font-bold mb-4">
          QUANTUM <span className="gradient-text">SOLUTIONS</span>
</h2>
<p className="text-cyber-secondary max-w-2xl mx-auto">
          Leveraging cutting-edge quantum technology to solve tomorrow's challenges today. Our suite of solutions empowers organizations to break through traditional computing limitations.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

<div className="bg-cyber-component border border-cyber-border rounded-lg overflow-hidden transition-all duration-300 card-glow group">
<div className="h-1 bg-cyber-accent"></div>
<div className="p-6">
<div className="w-12 h-12 rounded-lg bg-cyber-accent/20 flex items-center justify-center mb-4 group-hover:bg-cyber-accent/30 transition-all duration-300">
<svg className="w-6 h-6 text-cyber-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-display font-bold mb-2 text-white">Quantum Processing</h3>
<p className="text-cyber-secondary mb-4">Harness the power of quantum computing with our parallel processing architecture. Process complex algorithms at unprecedented speeds.</p>
<div className="flex justify-between items-center">
<span className="text-xs text-cyber-accent py-1 px-2 rounded bg-cyber-accent/10 border border-cyber-accent/20">CORE TECH</span>
<button className="text-cyber-accent hover:text-white transition-colors duration-300 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="bg-cyber-component border border-cyber-border rounded-lg overflow-hidden transition-all duration-300 card-glow-alt group">
<div className="h-1 bg-cyber-accentAlt"></div>
<div className="p-6">
<div className="w-12 h-12 rounded-lg bg-cyber-accentAlt/20 flex items-center justify-center mb-4 group-hover:bg-cyber-accentAlt/30 transition-all duration-300">
<svg className="w-6 h-6 text-cyber-accentAlt" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-display font-bold mb-2 text-white">Neural Networks</h3>
<p className="text-cyber-secondary mb-4">Advanced neural network systems that adapt and evolve. Self-learning algorithms optimize for your specific business challenges.</p>
<div className="flex justify-between items-center">
<span className="text-xs text-cyber-accentAlt py-1 px-2 rounded bg-cyber-accentAlt/10 border border-cyber-accentAlt/20">AI DRIVEN</span>
<button className="text-cyber-accentAlt hover:text-white transition-colors duration-300 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="bg-cyber-component border border-cyber-border rounded-lg overflow-hidden transition-all duration-300 card-glow group">
<div className="h-1 bg-cyber-accent"></div>
<div className="p-6">
<div className="w-12 h-12 rounded-lg bg-cyber-accent/20 flex items-center justify-center mb-4 group-hover:bg-cyber-accent/30 transition-all duration-300">
<svg className="w-6 h-6 text-cyber-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-display font-bold mb-2 text-white">Quantum Encryption</h3>
<p className="text-cyber-secondary mb-4">Military-grade security protocols leveraging quantum entanglement. Virtually impenetrable protection for your most sensitive data.</p>
<div className="flex justify-between items-center">
<span className="text-xs text-cyber-accent py-1 px-2 rounded bg-cyber-accent/10 border border-cyber-accent/20">SECURITY</span>
<button className="text-cyber-accent hover:text-white transition-colors duration-300 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="bg-cyber-component border border-cyber-border rounded-lg overflow-hidden transition-all duration-300 card-glow-alt group">
<div className="h-1 bg-cyber-accentAlt"></div>
<div className="p-6">
<div className="w-12 h-12 rounded-lg bg-cyber-accentAlt/20 flex items-center justify-center mb-4 group-hover:bg-cyber-accentAlt/30 transition-all duration-300">
<svg className="w-6 h-6 text-cyber-accentAlt" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-display font-bold mb-2 text-white">Predictive Analytics</h3>
<p className="text-cyber-secondary mb-4">Harness quantum computing for real-time data analysis and forecasting. Identify patterns invisible to conventional systems.</p>
<div className="flex justify-between items-center">
<span className="text-xs text-cyber-accentAlt py-1 px-2 rounded bg-cyber-accentAlt/10 border border-cyber-accentAlt/20">DATA SCIENCE</span>
<button className="text-cyber-accentAlt hover:text-white transition-colors duration-300 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="mt-20 bg-cyber-component/50 backdrop-blur-sm border border-cyber-border rounded-lg overflow-hidden">
<div className="border-b border-cyber-border p-6">
<h3 className="text-2xl font-display font-bold text-white">Solution Comparison</h3>
<p className="text-cyber-secondary">Compare our quantum solutions with traditional computing approaches</p>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="bg-cyber-component">
<th className="py-4 px-6 text-left text-cyber-secondary font-normal">Features</th>
<th className="py-4 px-6 text-left text-cyber-accent font-normal">Quantum Solution</th>
<th className="py-4 px-6 text-left text-cyber-secondary font-normal">Traditional Approach</th>
</tr>
</thead>
<tbody>
<tr className="border-t border-cyber-border">
<td className="py-4 px-6 text-cyber-secondary">Processing Speed</td>
<td className="py-4 px-6 text-white">
<div className="flex items-center">
<span className="text-cyber-accent mr-2">10x Faster</span>
<div className="w-24 bg-cyber-border/30 rounded-full h-2">
<div className="bg-cyber-accent h-2 rounded-full w-full"></div>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="flex items-center">
<span className="text-cyber-secondary mr-2">Baseline</span>
<div className="w-24 bg-cyber-border/30 rounded-full h-2">
<div className="bg-cyber-secondary h-2 rounded-full w-1/3"></div>
</div>
</div>
</td>
</tr>
<tr className="border-t border-cyber-border">
<td className="py-4 px-6 text-cyber-secondary">Security Level</td>
<td className="py-4 px-6 text-white">
<div className="flex items-center">
<span className="text-cyber-accent mr-2">Military-grade</span>
<div className="w-24 bg-cyber-border/30 rounded-full h-2">
<div className="bg-cyber-accent h-2 rounded-full w-full"></div>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="flex items-center">
<span className="text-cyber-secondary mr-2">Standard</span>
<div className="w-24 bg-cyber-border/30 rounded-full h-2">
<div className="bg-cyber-secondary h-2 rounded-full w-1/2"></div>
</div>
</div>
</td>
</tr>
<tr className="border-t border-cyber-border">
<td className="py-4 px-6 text-cyber-secondary">Energy Efficiency</td>
<td className="py-4 px-6 text-white">
<div className="flex items-center">
<span className="text-cyber-accent mr-2">90% Reduction</span>
<div className="w-24 bg-cyber-border/30 rounded-full h-2">
<div className="bg-cyber-accent h-2 rounded-full w-[90%]"></div>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="flex items-center">
<span className="text-cyber-secondary mr-2">High Consumption</span>
<div className="w-24 bg-cyber-border/30 rounded-full h-2">
<div className="bg-cyber-secondary h-2 rounded-full w-1/4"></div>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="mt-20 text-center">
<h3 className="text-2xl font-display font-bold mb-4">Ready to upgrade your systems?</h3>
<p className="text-cyber-secondary max-w-2xl mx-auto mb-8">
          Our quantum solutions can be implemented with minimal disruption to your existing infrastructure. Get started with a free consultation.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-cyber-accent hover:bg-cyber-accent/90 text-cyber-bg font-bold py-3 px-8 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,192,0.5)]">
            Schedule Demo
          </button>
<button className="bg-transparent border border-cyber-accentAlt text-cyber-accentAlt hover:bg-cyber-accentAlt/10 font-bold py-3 px-8 rounded transition-all duration-300">
            Contact Sales
          </button>
</div>
</div>
</div>
</section>

    </>
  );
}
