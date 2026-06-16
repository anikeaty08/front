import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionFrame from '../components/ui/SectionFrame';
import { WordReveal, CharSlideDown } from '../components/ui/TextAnimations';

gsap.registerPlugin(ScrollTrigger);

const TABS = ['Guides', 'Docs', 'Tutorials', 'Prompt Examples', 'FAQ'];

const GUIDES = [
  {
    id: 1,
    title: 'The Anatomy of a Perfect UI Prompt',
    category: 'Guide',
    date: 'Oct 12, 2023',
    desc: 'Break down the exact JSON variables and structural constraints required to get high-fidelity React outputs from Claude 3.5 Sonnet.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    readTime: '6 min read'
  },
  {
    id: 2,
    title: 'Hallucination Mitigation in Tailwind Generation',
    category: 'Technical',
    date: 'Nov 04, 2023',
    desc: 'Strategies for enforcing strict design system tokens and preventing LLMs from inventing random arbitrary Tailwind classes.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Injecting Brand Voice into Component Logic',
    category: 'Design',
    date: 'Dec 18, 2023',
    desc: 'How to map your brand guidelines directly into system prompts to ensure UI consistency across multiple generative sessions.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    readTime: '5 min read'
  },
  {
    id: 4,
    title: 'Gemini 1.5 Pro vs Claude 3.5 Sonnet for UI',
    category: 'Analysis',
    date: 'Jan 22, 2024',
    desc: 'A comprehensive benchmark of how top models handle complex grid systems, responsive states, and deep component nesting.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    readTime: '12 min read'
  }
];

const DOCS = [
  { id: 1, title: 'Getting Started', desc: 'Installation, setup, and core configuration concepts for your prompt environments.', icon: 'solar:rocket-linear' },
  { id: 2, title: 'JSON Variable Architecture', desc: 'How to structure your design tokens and variables for the AI models to ingest accurately.', icon: 'solar:code-file-linear' },
  { id: 3, title: 'Layout Constraints', desc: 'Enforcing strict grid, flexbox, and semantic HTML rules inside generative outputs.', icon: 'solar:maximize-square-minimalistic-linear' },
  { id: 4, title: 'Component Extraction', desc: 'Best practices for breaking down monolithic outputs into reusable React components.', icon: 'solar:layers-minimalistic-linear' },
  { id: 5, title: 'State Management Prompts', desc: 'Injecting robust local state and context management instructions.', icon: 'solar:database-linear' },
  { id: 6, title: 'Animation & Micro-interactions', desc: 'Structuring prompts to yield smooth Framer Motion or GSAP implementations.', icon: 'solar:magic-stick-3-linear' }
];

const TUTORIALS = [
  { id: 1, title: 'Build a SaaS Dashboard in 10 Mins', length: '10:24', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
  { id: 2, title: 'Advanced Claude 3.5 Constraints', length: '15:40', image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80' },
  { id: 3, title: 'Mobile App Layouts with Gemini', length: '08:15', image: 'https://images.unsplash.com/photo-1526506115935-7c0147ebbe8a?w=800&q=80' },
  { id: 4, title: 'Designing Bento Grids with AI', length: '12:05', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80' }
];

const PROMPT_EXAMPLES = [
  { 
    id: 1, 
    title: 'Strict Bento Grid Layout Definition', 
    desc: 'Forces the LLM to adhere to a specific asymmetric grid layout with fixed gap constraints.',
    code: `{\n  "layout_type": "asymmetric_bento",\n  "grid_columns": 12,\n  "gap_token": "gap-6",\n  "span_rules": [\n    {"target": "hero_card", "col_span": 8, "row_span": 2},\n    {"target": "metric_card", "col_span": 4, "row_span": 1}\n  ],\n  "responsive_break": "md"\n}` 
  },
  { 
    id: 2, 
    title: 'Typography Hierarchy Enforcement', 
    desc: 'Prevents the model from inventing font sizes outside of your defined scale.',
    code: `{\n  "typography_system": {\n    "font_family": "Geist, sans-serif",\n    "h1": "text-5xl tracking-tighter font-light",\n    "h2": "text-3xl tracking-tight font-medium",\n    "body": "text-base tracking-normal text-white/70",\n    "micro": "text-[10px] tracking-widest uppercase"\n  }\n}` 
  },
  { 
    id: 3, 
    title: 'Form Validation Context Block', 
    desc: 'Context to ensure forms are generated with complete error state handling.',
    code: `{\n  "component": "authentication_form",\n  "validation_library": "zod",\n  "error_display": "inline_text",\n  "required_fields": ["email", "password"],\n  "submit_state": "loading_spinner_with_disabled_button"\n}` 
  }
];

const FAQS = [
  { q: "How do I import these templates into my workflow?", a: "You can copy the raw JSON constraints directly from the Library and paste them at the top of your prompt in Claude, Gemini, or ChatGPT." },
  { q: "Do these prompts work with any frontend framework?", a: "While specifically optimized for React and Tailwind CSS, the structural instructions work well with Vue, Svelte, and standard HTML/CSS." },
  { q: "Can I contribute my own prompts?", a: "Currently, the core library is curated by our internal design team. Team License holders can share custom templates within their private workspace." },
  { q: "How often are new tutorials added?", a: "We release new video breakdowns and technical guides bi-weekly." }
];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('Guides');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Re-run animations whenever the tab changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.tab-content-item', 
        { opacity: 0, y: 20, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6, stagger: 0.05, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, [activeTab]);

  // Initial page load animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.scroll-fade-in', { opacity: 0, y: 40, filter: 'blur(12px)' });
      
      ScrollTrigger.batch('.scroll-fade-in', {
        start: "top 90%",
        onEnter: batch => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            overwrite: true
          });
        }
      });
      
      const revealSections = document.querySelectorAll('.reveal-section');
      revealSections.forEach(section => {
        const words = section.querySelectorAll('.gsap-word-reveal');
        if (words.length) {
          gsap.fromTo(words,
            { y: "100%", opacity: 0, filter: "blur(8px)" },
            {
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse"
              },
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.8,
              stagger: 0.04,
              ease: "power3.out"
            }
          );
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* HEADER SECTION */}
      <SectionFrame className="pt-32 pb-8 px-6 bg-transparent relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#c6f91f]/30 bg-[#c6f91f]/5 text-xs text-[#c6f91f] uppercase tracking-widest font-geist font-semibold overflow-hidden scroll-fade-in">
             <CharSlideDown text="Knowledge Base" delay={0.2} />
          </div>
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-geist font-light tracking-tighter text-white mb-6 reveal-section">
              <WordReveal>Master the art</WordReveal> <br /> <WordReveal>of AI generation.</WordReveal>
            </h1>
            <p className="text-base md:text-lg text-white/50 max-w-2xl font-geist tracking-tight scroll-fade-in">
              Everything you need to build resilient prompt systems, from technical guides and documentation to practical tutorials and structural examples.
            </p>
          </div>
        </div>
      </SectionFrame>

      {/* NAVIGATION TABS */}
      <SectionFrame className="py-0 px-6 bg-transparent relative z-20 border-t border-white/10" noBorderBottom>
        <div className="max-w-6xl mx-auto">
          <div className="flex overflow-x-auto no-scrollbar py-4 gap-2 border-b border-white/10">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-5 py-2.5 text-sm font-geist tracking-tight transition-all rounded-sm ${
                  activeTab === tab 
                    ? 'bg-white/10 text-white border border-white/20' 
                    : 'bg-transparent text-white/50 border border-transparent hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </SectionFrame>

      {/* CONTENT AREA */}
      <SectionFrame className="py-16 px-6 bg-transparent relative z-10 flex-1 border-none" noBorderBottom>
        <div className="max-w-6xl mx-auto min-h-[50vh]">
          
          {/* GUIDES */}
          {activeTab === 'Guides' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {GUIDES.map((article) => (
                <a href="#" key={article.id} className="group flex flex-col tab-content-item">
                  <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/10 bg-[#0B0F12] mb-6">
                    <div className="absolute inset-0 bg-[#c6f91f]/5 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-white/90 uppercase tracking-widest font-geist font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-[11px] text-white/40 font-mono mb-3 uppercase tracking-widest">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-geist font-light text-white tracking-tighter mb-3 group-hover:text-[#c6f91f] transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-white/50 leading-relaxed font-geist tracking-tight line-clamp-3">
                    {article.desc}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-sm text-white/70 font-geist tracking-tight group-hover:text-[#c6f91f] transition-colors">
                    Read guide <iconify-icon icon="solar:arrow-right-linear" />
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* DOCS */}
          {activeTab === 'Docs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DOCS.map((doc) => (
                <a href="#" key={doc.id} className="group flex items-start gap-5 p-6 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all tab-content-item">
                  <div className="w-12 h-12 rounded border border-white/10 bg-[#05080A] flex items-center justify-center shrink-0 group-hover:border-[#c6f91f]/50 transition-colors">
                    <iconify-icon icon={doc.icon} class="text-xl text-[#c6f91f]"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="text-lg font-geist font-medium text-white tracking-tight mb-2 group-hover:text-[#c6f91f] transition-colors">{doc.title}</h3>
                    <p className="text-sm text-white/50 font-geist tracking-tight leading-relaxed">{doc.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* TUTORIALS */}
          {activeTab === 'Tutorials' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TUTORIALS.map((tutorial) => (
                <a href="#" key={tutorial.id} className="group flex flex-col tab-content-item">
                  <div className="relative aspect-video w-full overflow-hidden border border-white/10 bg-[#0B0F12] mb-4">
                    <img 
                      src={tutorial.image} 
                      alt={tutorial.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#c6f91f] group-hover:text-black transition-all">
                        <iconify-icon icon="solar:play-bold" class="text-2xl ml-1"></iconify-icon>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-[10px] font-mono text-white/90 tracking-widest border border-white/10">
                      {tutorial.length}
                    </div>
                  </div>
                  <h3 className="text-xl font-geist font-light text-white tracking-tighter group-hover:text-[#c6f91f] transition-colors">
                    {tutorial.title}
                  </h3>
                </a>
              ))}
            </div>
          )}

          {/* PROMPT EXAMPLES */}
          {activeTab === 'Prompt Examples' && (
            <div className="flex flex-col gap-8">
              {PROMPT_EXAMPLES.map((example) => (
                <div key={example.id} className="border border-white/10 bg-white/5 overflow-hidden flex flex-col lg:flex-row tab-content-item">
                  <div className="p-6 lg:p-8 lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col">
                    <h3 className="text-xl font-geist font-medium text-white tracking-tight mb-3">{example.title}</h3>
                    <p className="text-sm text-white/50 font-geist tracking-tight leading-relaxed mb-6">{example.desc}</p>
                    <button className="mt-auto inline-flex items-center gap-2 text-xs font-geist tracking-tight text-white hover:text-[#c6f91f] transition-colors w-fit">
                      <iconify-icon icon="solar:copy-linear"></iconify-icon> Copy to clipboard
                    </button>
                  </div>
                  <div className="lg:w-2/3 bg-[#0B0F12] p-6 lg:p-8 overflow-x-auto relative">
                    <div className="absolute top-0 right-8 px-3 py-1 bg-white/5 border-x border-b border-white/10 text-[10px] text-white/40 font-mono tracking-widest uppercase">
                      JSON
                    </div>
                    <pre className="text-sm font-mono text-white/80 leading-relaxed mt-2">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FAQ */}
          {activeTab === 'FAQ' && (
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-4">
                {FAQS.map((faq, index) => (
                  <div key={index} className="border border-white/10 bg-white/5 p-6 tab-content-item">
                    <h4 className="text-lg text-white font-geist font-medium tracking-tight mb-3 flex items-start gap-3">
                      <iconify-icon icon="solar:question-circle-linear" class="text-[#c6f91f] mt-1 shrink-0" />
                      {faq.q}
                    </h4>
                    <p className="text-sm text-white/50 leading-relaxed font-geist tracking-tight pl-8">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center tab-content-item">
                <p className="text-sm text-white/50 font-geist tracking-tight">
                  Can't find what you're looking for? <Link to="/contact" className="text-white hover:text-[#c6f91f] transition-colors underline underline-offset-4">Contact Support</Link>
                </p>
              </div>
            </div>
          )}

        </div>
      </SectionFrame>

      {/* NEWSLETTER CTA (Moved to bottom universally) */}
      <SectionFrame className="py-20 px-6 bg-transparent relative z-10 border-t border-white/10" noBorderBottom>
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center scroll-fade-in">
          <h3 className="text-2xl font-geist font-light tracking-tighter text-white mb-4">Want these insights in your inbox?</h3>
          <p className="text-sm text-white/50 max-w-md mx-auto mb-8 font-geist tracking-tight">
            Join 12,000+ engineers and designers receiving our weekly structural prompt breakdowns.
          </p>
          <div className="flex w-full max-w-md mx-auto gap-2">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-1 bg-[#05080A] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c6f91f]/50 transition-colors font-geist tracking-tight"
            />
            <button className="bg-white/10 border border-white/20 text-white px-6 py-3 text-sm hover:bg-white/20 transition-colors font-geist tracking-tight font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </SectionFrame>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/10 bg-white/5 backdrop-blur-md relative z-10 mt-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <p className="text-[10px] text-white/40 font-geist tracking-tight">© {new Date().getFullYear()} Lumimotion. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><iconify-icon icon="simple-icons:x" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><iconify-icon icon="simple-icons:github" /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}