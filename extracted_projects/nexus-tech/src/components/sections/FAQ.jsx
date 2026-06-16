import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const faqs = [
  {
    question: "How does the procedural generation ensure structural integrity?",
    answer: "Our algorithmic core utilizes predictive neural heuristics to calculate load distribution before instantiation, ensuring zero degradation during high-velocity state changes and infinite scaling capabilities."
  },
  {
    question: "Can I migrate existing data models to the Quantum Core?",
    answer: "Yes. The Quantum Core framework is backward compatible with standard topological structures via our Entanglement Protocol, allowing seamless integration without data loss."
  },
  {
    question: "What defines a 'Cycle' in deployment terms?",
    answer: "A Cycle represents a complete pass of system validation, heuristic training, and state propagation across all instantiated geographic sectors. Standard metric conversion equates this to a 30-day terrestrial period."
  },
  {
    question: "Is the Cryptographic Vault resistant to multi-dimensional breaches?",
    answer: "Absolute security is maintained through dynamically shifting encryption algorithms that rotate their fundamental logic gates exponentially faster than any external processing entity can map them."
  },
  {
    question: "What is required to initialize a local node?",
    answer: "A Node License grants access to the foundational executable. Hardware requirements scale dynamically; the sub-routine automation will delegate threads efficiently based on whatever compute resources you attach."
  }
];

export default function FAQ() {
  const sectionRef = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 border-b border-neutral-800/60 flex flex-col items-center relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.02)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl">
        <div className="text-center mb-16 reveal-el" style={{ transitionDelay: '0.1s' }}>
          <div className="flex gap-4 text-[10px] uppercase tracking-widest text-cyan-500 mb-6 justify-center">
            <span className="w-8 h-px bg-neutral-800 self-center"></span>
            <span>Query Database</span>
            <span className="w-8 h-px bg-neutral-800 self-center"></span>
          </div>
          <h2 className="text-3xl md:text-5xl text-white tracking-tight mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            System Intelligence
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto">
            Frequently requested schematics and operational parameters regarding the NEXUS framework and core mechanics.
          </p>
        </div>

        <div className="flex flex-col gap-4 reveal-el" style={{ transitionDelay: '0.2s' }}>
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border transition-colors duration-300 relative group bg-neutral-950/50 backdrop-blur-sm ${
                  isActive ? 'border-cyan-500/30' : 'border-neutral-800/60 hover:border-neutral-700'
                }`}
              >
                {/* Frame Details */}
                <div className={`absolute top-0 left-0 w-1.5 h-1.5 border-t border-l ${isActive ? 'border-cyan-500' : 'border-neutral-600'}`}></div>
                <div className={`absolute top-0 right-0 w-1.5 h-1.5 border-t border-r ${isActive ? 'border-cyan-500' : 'border-neutral-600'}`}></div>
                <div className={`absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l ${isActive ? 'border-cyan-500' : 'border-neutral-600'}`}></div>
                <div className={`absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r ${isActive ? 'border-cyan-500' : 'border-neutral-600'}`}></div>

                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <h3 className={`text-lg transition-colors pr-8 ${isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`} style={{ fontFamily: 'var(--font-serif)' }}>
                    {faq.question}
                  </h3>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 shrink-0 ${
                    isActive ? 'border-cyan-500 text-cyan-500 bg-cyan-950/30 rotate-180' : 'border-neutral-700 text-neutral-500 group-hover:border-neutral-500 group-hover:text-neutral-300'
                  }`}>
                    <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-500 ease-in-out px-6 md:px-8 ${
                    isActive ? 'grid-rows-[1fr] pb-6 md:pb-8 opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-neutral-800/60 pt-6">
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}