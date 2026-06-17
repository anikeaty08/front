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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<div className="flex flex-col lg:flex-row min-h-screen">

<aside className="w-full lg:w-72 lg:fixed lg:h-screen lg:overflow-y-auto border-b lg:border-b-0 lg:border-r border-[#3d3529] bg-[#161412] z-20 flex flex-col justify-between">
<div>
<div className="p-8 border-b border-[#3d3529]">
<div className="font-['Playfair_Display',serif] tracking-tight text-3xl font-medium text-white uppercase flex items-center gap-3">
<iconify-icon className="text-[#EEA540]" height="32" icon="solar:box-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
              LUXURELAX
            </div>
<p className="text-sm text-[#a89c8a] mt-2 uppercase tracking-widest font-light">
              Brand Manual 1.0
            </p>
</div>
<nav className="p-6 flex-1 overflow-y-auto">
<ul className="space-y-1 text-base text-[#a89c8a]">
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#introduction">
                  1. Brand Introduction
                </a>
</li>
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#philosophy">
                  2. Brand Philosophy
                </a>
</li>
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#positioning">
                  3. Brand Positioning
                </a>
</li>
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#values">
                  4. Brand Values
                </a>
</li>
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#personality">
                  5. Brand Personality
                </a>
</li>
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#tone">
                  6. Tone of Voice
                </a>
</li>
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#messaging">
                  7. Messaging Framework
                </a>
</li>
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#vocabulary">
                  8. Brand Vocabulary
                </a>
</li>
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#visual">
                  9. Visual Identity
                </a>
</li>
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#colors">
                  10. Color System
                </a>
</li>
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#typography">
                  11. Typography
                </a>
</li>
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#logo">
                  12. Logo Usage
                </a>
</li>
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#layout">
                  13. Layout Principles
                </a>
</li>
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#photography">
                  14. Photography Style
                </a>
</li>
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#content">
                  15. Content Guidelines
                </a>
</li>
<li>
<a className="block py-2 px-3 rounded-lg hover:bg-[#221e1c] hover:text-white transition-colors" href="#examples">
                  16. Communication Examples
                </a>
</li>
</ul>
</nav>
</div>

<div className="p-6 border-t border-[#3d3529] bg-[#161412] mt-auto">
<button className="w-full flex items-center justify-center gap-2 bg-[#221e1c] hover:bg-[#EEA540] text-[#EEA540] hover:text-[#161412] border border-[#3d3529] hover:border-[#EEA540] transition-colors py-3 px-4 rounded-lg font-light text-xs tracking-widest uppercase" onclick="window.print()">
<iconify-icon height="18" icon="solar:printer-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
            Save as PDF
          </button>
</div>
</aside>

<main className="lg:ml-72 md:p-12 lg:p-20 w-full max-w-5xl pt-6 pr-6 pb-6 pl-6 transition-all duration-300" id="main-content">

<header className="min-h-[60vh] flex flex-col border-[#3d3529] border-b mb-24 pb-16 justify-center">
<span className="text-[#EEA540] text-base tracking-widest uppercase mb-6 flex items-center gap-2 font-light">
<iconify-icon height="20" icon="solar:ruler-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
            Structural Wellness
          </span>
<h1 className="font-['Playfair_Display',serif] text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-tight">
            Architectural
            <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EEA540] to-[#98641B]">
              Regeneration
            </span>
</h1>
<p className="text-2xl text-[#a89c8a] max-w-2xl leading-relaxed font-extralight">
            The definitive guide to the visual and verbal identity of Luxurelax.
            A framework for communicating precision, stability, and long-term
            functionality.
          </p>
</header>

<section className="mb-24 scroll-mt-24" id="introduction">
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-6 border-l-2 border-[#EEA540] pl-6">
            1. Brand Introduction
          </h2>
<div className="bg-[#221e1c] border border-[#3d3529] rounded-2xl p-8 md:p-12">
<p className="text-[#a89c8a] text-xl leading-relaxed mb-6">
              Luxurelax designs and manufactures outdoor wellness solutions,
              specifically engineered saunas, hot tubs, and cooling tubs. The
              fundamental purpose of our products is to create a highly stable,
              controlled environment specifically optimized for human body
              regeneration.
            </p>
<p className="text-[#a89c8a] text-xl leading-relaxed">
              We operate at the intersection of material science, architecture,
              and structural precision. Our solutions are engineered for
              long-term integration into built environments, prioritizing
              certified materials, health safety, and enduring functionality
              over transient aesthetic trends.
            </p>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="philosophy">
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-6 border-l-2 border-[#EEA540] pl-6">
            2. Brand Philosophy
          </h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="border border-[#3d3529] rounded-2xl p-8">
<iconify-icon className="text-[#EEA540] mb-6" height="32" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
<h3 className="text-2xl font-medium mb-4 tracking-tight">
                Systematic Regeneration
              </h3>
<p className="text-[#a89c8a] text-lg leading-relaxed">
                Luxurelax does not sell relaxation. Relaxation is subjective and
                transient. We create stable, measurable conditions that
                facilitate systematic, physiological regeneration.
              </p>
</div>
<div className="border border-[#3d3529] rounded-2xl p-8">
<iconify-icon className="text-[#EEA540] mb-6" height="32" icon="solar:buildings-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
<h3 className="text-2xl font-medium mb-4 tracking-tight">
                Architectural Solutions
              </h3>
<p className="text-[#a89c8a] text-lg leading-relaxed">
                Our products are positioned as permanent architectural wellness
                solutions. They are not consumer goods or impulse purchases, but
                carefully considered structural integrations.
              </p>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="positioning">
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-6 border-l-2 border-[#EEA540] pl-6">
            3. Brand Positioning
          </h2>
<div className="bg-[#161412] border border-[#3d3529] rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#EEA540]/10 to-transparent rounded-full blur-3xl -mr-20 -mt-20"></div>
<p className="text-white text-2xl leading-relaxed font-light mb-6 relative z-10 tracking-tight">
              Luxurelax is not a lifestyle brand. Luxurelax is not an e-commerce
              brand.
            </p>
<p className="text-[#a89c8a] text-lg leading-relaxed relative z-10">
              We position ourselves as technical specialists in environmental
              regeneration and structural wellness. When clients engage with
              Luxurelax, they should recognize they are consulting with
              engineers and specialists making a calculated, long-term
              investment in their health infrastructure and environmental
              quality.
            </p>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="values">
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-6 border-l-2 border-[#EEA540] pl-6">
            4. Brand Values
          </h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-[#221e1c] border border-[#3d3529] p-6 rounded-xl">
<div className="text-[#EEA540] text-sm uppercase tracking-widest mb-3 font-light">
                01
              </div>
<h4 className="text-xl font-medium mb-2 tracking-tight">
                Structural Precision
              </h4>
<p className="text-[#a89c8a] text-base leading-relaxed">
                Exact engineering ensuring optimal performance and minimal
                energy variance.
              </p>
</div>
<div className="bg-[#221e1c] border border-[#3d3529] p-6 rounded-xl">
<div className="text-[#EEA540] text-sm uppercase tracking-widest mb-3 font-light">
                02
              </div>
<h4 className="text-xl font-medium mb-2 tracking-tight">
                Certified Materials
              </h4>
<p className="text-[#a89c8a] text-base leading-relaxed">
                Traceable, tested, and structurally sound materials for every
                component.
              </p>
</div>
<div className="bg-[#221e1c] border border-[#3d3529] p-6 rounded-xl">
<div className="text-[#EEA540] text-sm uppercase tracking-widest mb-3 font-light">
                03
              </div>
<h4 className="text-xl font-medium mb-2 tracking-tight">
                Health Safety
              </h4>
<p className="text-[#a89c8a] text-base leading-relaxed">
                Rigorous adherence to thermal and hygienic safety standards.
              </p>
</div>
<div className="bg-[#221e1c] border border-[#3d3529] p-6 rounded-xl">
<div className="text-[#EEA540] text-sm uppercase tracking-widest mb-3 font-light">
                04
              </div>
<h4 className="text-xl font-medium mb-2 tracking-tight">
                Durability
              </h4>
<p className="text-[#a89c8a] text-base leading-relaxed">
                Designed to withstand environmental stress over decades of
                usage.
              </p>
</div>
<div className="bg-[#221e1c] border border-[#3d3529] p-6 rounded-xl">
<div className="text-[#EEA540] text-sm uppercase tracking-widest mb-3 font-light">
                05
              </div>
<h4 className="text-xl font-medium mb-2 tracking-tight">
                Architectural Integrity
              </h4>
<p className="text-[#a89c8a] text-base leading-relaxed">
                Seamless, respectful integration into existing built
                environments.
              </p>
</div>
</div>
</section>

<div className="grid md:grid-cols-2 gap-12 mb-24">
<section className="scroll-mt-24" id="personality">
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-6 border-l-2 border-[#EEA540] pl-6">
              5. Personality
            </h2>
<ul className="space-y-4">
<li className="flex items-center gap-4 border-b border-[#3d3529] pb-4">
<iconify-icon className="text-[#a89c8a]" height="24" icon="solar:drop-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<span className="text-white text-lg font-light">Calm</span>
</li>
<li className="flex items-center gap-4 border-b border-[#3d3529] pb-4">
<iconify-icon className="text-[#a89c8a]" height="24" icon="solar:target-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<span className="text-white text-lg font-light">Precise</span>
</li>
<li className="flex items-center gap-4 border-b border-[#3d3529] pb-4">
<iconify-icon className="text-[#a89c8a]" height="24" icon="solar:medal-ribbon-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<span className="text-white text-lg font-light">Expert</span>
</li>
<li className="flex items-center gap-4 border-b border-[#3d3529] pb-4">
<iconify-icon className="text-[#a89c8a]" height="24" icon="solar:database-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<span className="text-white text-lg font-light">Stable</span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-[#a89c8a]" height="24" icon="solar:ruler-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<span className="text-white text-lg font-light">Architectural</span>
</li>
</ul>
</section>
<section className="scroll-mt-24" id="tone">
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-6 border-l-2 border-[#EEA540] pl-6">
              6. Tone of Voice
            </h2>
<p className="text-[#a89c8a] text-lg mb-6 leading-relaxed">
              Luxurelax communicates like a specialist or structural engineer
              explaining a well-designed solution. We do not sound like
              salespeople.
            </p>
<div className="bg-red-950/20 border border-red-900/30 p-5 rounded-xl mb-4">
<h4 className="text-base font-medium text-red-400 mb-2 uppercase tracking-widest">
                Strictly Avoid
              </h4>
<p className="text-base text-[#a89c8a] leading-relaxed font-light">
                Marketing clichés, aggressive sales language, exclamation marks,
                emojis, emotional manipulation, and dramatic metaphors.
              </p>
</div>
</section>
</div>

<section className="mb-24 scroll-mt-24" id="messaging">
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-6 border-l-2 border-[#EEA540] pl-6">
            7. Messaging Framework
          </h2>
<div className="bg-[#221e1c] border border-[#3d3529] p-8 rounded-2xl">
<h3 className="text-sm uppercase tracking-widest text-[#EEA540] mb-2 font-light">
              Core Narrative
            </h3>
<p className="text-2xl font-['Playfair_Display',serif] tracking-tight text-white leading-relaxed mb-8 font-light">
              "Engineering stable environments for systematic human
              regeneration."
            </p>
<div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-[#3d3529]">
<div>
<h4 className="text-base font-medium mb-3 text-white">
                  To Architects &amp; Developers
                </h4>
<p className="text-[#a89c8a] text-base leading-relaxed">
                  Focus on structural integration, material longevity, technical
                  specifications, and low-maintenance durability.
                </p>
</div>
<div>
<h4 className="text-base font-medium mb-3 text-white">
                  To Private Investors
                </h4>
<p className="text-[#a89c8a] text-base leading-relaxed">
                  Focus on health safety, controlled environmental variables,
                  certified materials, and long-term functional value.
                </p>
</div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="vocabulary">
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-6 border-l-2 border-[#EEA540] pl-6">
            8. Brand Vocabulary
          </h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="border border-[#3d3529] rounded-2xl overflow-hidden">
<div className="bg-[#221e1c] px-6 py-4 border-b border-[#3d3529] flex items-center gap-3">
<iconify-icon className="text-emerald-500" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<h3 className="font-light text-white text-lg">Preferred Lexicon</h3>
</div>
<div className="p-6">
<ul className="space-y-3 text-base text-[#a89c8a]">
<li>Regeneration</li>
<li>Stable environment</li>
<li>Structural precision</li>
<li>Certified materials</li>
<li>Health safety</li>
</ul>
</div>
</div>

<div className="border border-[#3d3529] rounded-2xl overflow-hidden">
<div className="bg-[#221e1c] px-6 py-4 border-b border-[#3d3529] flex items-center gap-3">
<iconify-icon className="text-red-500" height="20" icon="solar:close-circle-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<h3 className="font-light text-white text-lg">Prohibited Terms</h3>
</div>
<div className="p-6">
<ul className="space-y-3 text-base text-[#a89c8a]">
<li className="line-through opacity-50">Luxury escape</li>
<li className="line-through opacity-50">Perfect relaxation</li>
<li className="line-through opacity-50">Treat yourself</li>
<li className="line-through opacity-50">Limited offer</li>
<li className="line-through opacity-50">Best price</li>
</ul>
</div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="visual">
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-6 border-l-2 border-[#EEA540] pl-6">
            9. Visual Identity &amp; 10. Color System
          </h2>
<p className="text-[#a89c8a] text-lg mb-8 max-w-2xl leading-relaxed">
            The visual interface of Luxurelax relies on subtle contrast, deep
            shadows, and precise material colors. It reflects the tactile nature
            of wood, metal, and water within a dark, stable environment.
          </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="rounded-xl overflow-hidden border border-[#3d3529]">
<div className="h-24 bg-[#EEA540]"></div>
<div className="p-4 bg-[#221e1c]">
<p className="text-base font-light text-white">Primary Brand</p>
<p className="text-sm text-[#a89c8a] font-mono mt-1">#EEA540</p>
<p className="text-sm text-[#a89c8a] mt-2 font-extralight">
                  Accents, active states
                </p>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-[#3d3529]">
<div className="h-24 bg-[#98641B]"></div>
<div className="p-4 bg-[#221e1c]">
<p className="text-base font-light text-white">Primary Dark</p>
<p className="text-sm text-[#a89c8a] font-mono mt-1">#98641B</p>
<p className="text-sm text-[#a89c8a] mt-2 font-extralight">
                  Gradients, hovers
                </p>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-[#3d3529]">
<div className="h-24 bg-[#161412]"></div>
<div className="p-4 bg-[#221e1c]">
<p className="text-base font-light text-white">Background</p>
<p className="text-sm text-[#a89c8a] font-mono mt-1">#161412</p>
<p className="text-sm text-[#a89c8a] mt-2 font-extralight">
                  Base canvas
                </p>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-[#3d3529]">
<div className="h-24 bg-[#221e1c]"></div>
<div className="p-4 bg-[#221e1c]">
<p className="text-base font-light text-white">Card UI</p>
<p className="text-sm text-[#a89c8a] font-mono mt-1">#221e1c</p>
<p className="text-sm text-[#a89c8a] mt-2 font-extralight">
                  Surface layers
                </p>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-[#3d3529]">
<div className="h-24 bg-[#a89c8a]"></div>
<div className="p-4 bg-[#221e1c]">
<p className="text-base font-light text-white">Muted Text</p>
<p className="text-sm text-[#a89c8a] font-mono mt-1">#a89c8a</p>
<p className="text-sm text-[#a89c8a] mt-2 font-extralight">
                  Body copy, icons
                </p>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-[#3d3529]">
<div className="h-24 bg-[#3d3529]"></div>
<div className="p-4 bg-[#221e1c]">
<p className="text-base font-light text-white">Border</p>
<p className="text-sm text-[#a89c8a] font-mono mt-1">#3d3529</p>
<p className="text-sm text-[#a89c8a] mt-2 font-extralight">
                  Dividers, structure
                </p>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-[#3d3529] col-span-2">
<div className="h-24 bg-gradient-to-r from-[#EEA540] to-[#98641B]"></div>
<div className="p-4 bg-[#221e1c]">
<p className="text-base font-light text-white">Brand Gradient</p>
<p className="text-sm text-[#a89c8a] font-mono mt-1">
                  #EEA540 → #98641B
                </p>
<p className="text-sm text-[#a89c8a] mt-2 font-extralight">
                  Reserved for primary headers and data visualization emphasis.
                </p>
</div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="typography">
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-6 border-l-2 border-[#EEA540] pl-6">
            11. Typography
          </h2>
<div className="bg-[#221e1c] border border-[#3d3529] rounded-2xl p-8 md:p-12">
<div className="mb-12 border-b border-[#3d3529] pb-12">
<div className="flex items-center gap-4 mb-4">
<span className="text-sm text-[#EEA540] uppercase tracking-widest font-light">
                  Headings
                </span>
<span className="text-base text-[#a89c8a] border border-[#3d3529] px-2 py-1 rounded">
                  Playfair Display
                </span>
</div>
<h1 className="font-['Playfair_Display',serif] text-5xl font-medium tracking-tight mb-4 text-white">
                Structural Integrity
              </h1>
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-4 text-white">
                Environmental Control
              </h2>
<h3 className="font-['Playfair_Display',serif] text-2xl font-medium tracking-tight text-white">
                Material Certification
              </h3>
</div>
<div>
<div className="flex items-center gap-4 mb-4">
<span className="text-sm text-[#EEA540] uppercase tracking-widest font-light">
                  Body &amp; UI
                </span>
<span className="text-base text-[#a89c8a] border border-[#3d3529] px-2 py-1 rounded">
                  Inter
                </span>
</div>
<p className="text-lg text-white font-light mb-2">
                Lead Paragraph (Light, Text Base)
              </p>
<p className="text-[#a89c8a] text-lg leading-relaxed mb-6 font-extralight">
                All body copy should utilize Inter. It provides the
                architectural neutrality required to balance the classical
                presence of the heading typeface. Weight should generally be
                kept to Light (300) or Regular (400) to maintain a refined
                density on dark backgrounds.
              </p>
<p className="text-base text-[#a89c8a] font-extralight mb-2">
                Caption / Metadata (Extralight, Text SM)
              </p>
<p className="text-xs text-[#a89c8a] tracking-widest uppercase font-light">
                Label / Nav (Light, Text XS, Tracking Widest)
              </p>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="logo">
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-6 border-l-2 border-[#EEA540] pl-6">
            12. Logo Usage
          </h2>
<p className="text-[#a89c8a] text-lg mb-8 leading-relaxed">
            The Luxurelax logo features a comprehensive architectural emblem
            paired with our serif wordmark. The emblem intertwines elements of
            our core structures—the sauna cabin, cooling paths, and
            pergola—symbolizing the complete regenerative environment.
          </p>
<div className="grid md:grid-cols-2 gap-8">
<div className="border border-[#3d3529] rounded-2xl flex flex-col items-center justify-center p-16 bg-white relative group overflow-hidden">
<span className="absolute top-4 left-4 text-xs text-gray-400 font-light uppercase tracking-widest z-10">
                Primary (Light)
              </span>
<img alt="Luxurelax Primary Logo" className="w-full max-w-[260px] h-auto object-contain relative z-10" src="https://www.luxurelax.sk/wp-content/uploads/LuxuRelax-LOGO-text-gradien-primary-light.png"/>
</div>
<div className="flex flex-col group overflow-hidden bg-[#161412] border-[#3d3529] border rounded-2xl p-16 relative items-center justify-center">
<span className="absolute top-4 left-4 text-xs text-[#a89c8a] font-light uppercase tracking-widest z-10">
                Primary (Dark)
              </span>
<img alt="Luxurelax Logo on Dark Background" className="z-10 w-full h-auto max-w-[260px] object-contain relative drop-shadow-md brightness-110" src="https://www.luxurelax.sk/wp-content/uploads/LuxuRelax-LOGO-text-gradient.svg"/>
<div className="absolute inset-0 border border-[#EEA540]/30 border-dashed m-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"></div>
</div>
<div className="border border-[#3d3529] rounded-2xl flex flex-col items-center justify-center p-16 bg-[#221e1c] relative group overflow-hidden">
<span className="absolute top-4 left-4 text-xs text-[#a89c8a] font-light uppercase tracking-widest z-10">
                Monochrome Light
              </span>
<img alt="Luxurelax Monochrome Logo" className="w-full max-w-[260px] h-auto object-contain relative z-10 grayscale" src="https://www.luxurelax.sk/wp-content/uploads/LuxuRelax-LOGO-text-white.png"/>
</div>
<div className="border border-[#3d3529] rounded-2xl flex flex-col items-center justify-center p-16 bg-[#EEA540] relative group overflow-hidden">
<span className="absolute top-4 left-4 text-xs text-[#98641B] font-light uppercase tracking-widest z-10">
                Accent Application
              </span>
<img alt="Luxurelax Accent Application" className="w-full max-w-[260px] h-auto object-contain relative z-10 grayscale brightness-0 opacity-80" src="https://www.luxurelax.sk/wp-content/uploads/LuxuRelax-LOGO-text-white.png"/>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="layout">
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-6 border-l-2 border-[#EEA540] pl-6">
            13. Layout Principles
          </h2>
<div className="bg-[#221e1c] border border-[#3d3529] p-8 rounded-2xl">
<ul className="space-y-6">
<li>
<h4 className="text-white font-medium mb-2 tracking-tight text-lg">
                  Grid System
                </h4>
<p className="text-base text-[#a89c8a] leading-relaxed">
                  Designs must strictly adhere to a 12-column grid. Alignment
                  should mimic architectural blueprints—precise, aligned to the
                  edge, with clear purposeful whitespace.
                </p>
</li>
<li>
<h4 className="text-white font-medium mb-2 tracking-tight text-lg">
                  Visual Balance
                </h4>
<p className="text-base text-[#a89c8a] leading-relaxed">
                  Avoid centered text for body paragraphs. Prefer left-aligned
                  structures. Use asymmetric balance to guide the eye through
                  technical specifications.
                </p>
</li>
<li>
<h4 className="text-white font-medium mb-2 tracking-tight text-lg">
                  Components
                </h4>
<p className="text-base text-[#a89c8a] leading-relaxed">
                  UI elements feature standard corner radius. Avoid circular
                  buttons or extreme pill shapes to maintain structural
                  solidity.
                </p>
</li>
</ul>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="photography">
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-6 border-l-2 border-[#EEA540] pl-6">
            14. Photography Style
          </h2>
<div className="grid md:grid-cols-3 gap-6 mb-8">
<div className="bg-[#221e1c] border border-[#3d3529] aspect-square rounded-xl p-6 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 bg-[#3d3529] opacity-20"></div>
<iconify-icon className="text-[#a89c8a] mb-auto absolute top-6 left-6 opacity-50" height="40" icon="solar:home-2-linear" style={{strokeWidth: '1.5px'}} width="40"></iconify-icon>
<h4 className="text-white text-lg font-light relative z-10">
                Architecture
              </h4>
<p className="text-sm text-[#a89c8a] relative z-10 mt-1">
                Products integrated into built environments.
              </p>
</div>
<div className="bg-[#221e1c] border border-[#3d3529] aspect-square rounded-xl p-6 flex flex-col justify-end relative overflow-hidden">
<div className="absolute inset-0 bg-[#3d3529] opacity-20"></div>
<iconify-icon className="text-[#a89c8a] mb-auto absolute top-6 left-6 opacity-50" height="40" icon="solar:layers-linear" style={{strokeWidth: '1.5px'}} width="40"></iconify-icon>
<h4 className="text-white text-lg font-light relative z-10">
                Materials
              </h4>
<p className="text-sm text-[#a89c8a] relative z-10 mt-1">
                Macro shots of wood grain, metal joints, textures.
              </p>
</div>
<div className="bg-[#221e1c] border border-[#3d3529] aspect-square rounded-xl p-6 flex flex-col justify-end relative overflow-hidden">
<div className="absolute inset-0 bg-[#3d3529] opacity-20"></div>
<iconify-icon className="text-[#a89c8a] mb-auto absolute top-6 left-6 opacity-50" height="40" icon="solar:sun-linear" style={{strokeWidth: '1.5px'}} width="40"></iconify-icon>
<h4 className="text-white text-lg font-light relative z-10">
                Atmosphere
              </h4>
<p className="text-sm text-[#a89c8a] relative z-10 mt-1">
                Low light, controlled environment photography.
              </p>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="content">
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-6 border-l-2 border-[#EEA540] pl-6">
            15. Content Guidelines
          </h2>
<div className="bg-[#221e1c] border border-[#3d3529] rounded-2xl p-8">
<p className="text-[#a89c8a] text-lg leading-relaxed mb-6">
              Content should always prioritize technical accuracy and structural
              benefits over subjective emotional claims.
            </p>
<ul className="space-y-4 text-base text-[#a89c8a]">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#EEA540] mt-1 shrink-0" height="20" icon="solar:check-read-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<span>
                  Instead of "Unwind in luxury", use "Engineered for thermal
                  stability."
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#EEA540] mt-1 shrink-0" height="20" icon="solar:check-read-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<span>
                  Instead of "Beautiful wooden design", use "Crafted from
                  certified, high-density timber."
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#EEA540] mt-1 shrink-0" height="20" icon="solar:check-read-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<span>
                  Instead of "Perfect for your backyard", use "Seamless
                  integration into your architectural landscape."
                </span>
</li>
</ul>
</div>
</section>

<section className="mb-24 scroll-mt-24" id="examples">
<h2 className="font-['Playfair_Display',serif] text-3xl font-medium tracking-tight mb-6 border-l-2 border-[#EEA540] pl-6">
            16. Communication Examples
          </h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="border border-[#3d3529] rounded-2xl overflow-hidden bg-[#161412]">
<div className="p-6 border-b border-[#3d3529]">
<h3 className="text-lg font-light text-white">
                  Product Description
                </h3>
</div>
<div className="p-6">
<p className="text-[#a89c8a] text-base leading-relaxed italic">
                  "The Luxurelax Modular Sauna is constructed using thermally
                  modified Scandinavian spruce, ensuring dimensional stability
                  under extreme temperature fluctuations. Designed with a
                  continuous air-flow system, it maintains optimal oxygenation
                  during the regenerative cycle."
                </p>
</div>
</div>
<div className="border border-[#3d3529] rounded-2xl overflow-hidden bg-[#161412]">
<div className="p-6 border-b border-[#3d3529]">
<h3 className="text-lg font-light text-white">Social Media Post</h3>
</div>
<div className="p-6">
<p className="text-[#a89c8a] text-base leading-relaxed italic">
                  "Precision in every joint. Our latest installation features
                  seamless integration with existing stone masonry, creating a
                  permanent structural wellness environment. Explore the
                  material specifications via the link in our profile."
                </p>
</div>
</div>
</div>
</section>
</main>
</div>

    </>
  );
}
