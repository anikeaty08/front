import React, { useState } from 'react';

const MOCK_IMAGES = {
  hero: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95a6559d-388d-45c7-9ed3-b3d3fe4efa9a_800w.webp",
  collage1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/be6bf95a-ae23-469e-8e83-00c1f7a52477/1600w.png",
  collage2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4285ade0-de31-4951-a125-665bacf4a361_800w.webp",
  collage3: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/ae856dba-7305-4ac2-b14a-aa6b93966d3d/800w.png",
  collage4: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e0fad6f-5ba5-4377-81d4-cce0589ee565_1600w.jpg",
  product1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91808762-06fb-4d28-888f-5655cdf94b58_800w.webp",
  product2: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
  product3: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=800&auto=format&fit=crop",
  portrait1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95a6559d-388d-45c7-9ed3-b3d3fe4efa9a_800w.webp",
  portrait2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c81437fa-f589-433f-94ca-764bacbe89d6_800w.webp",
  portrait3: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e6366a9f-2edd-47bf-90c2-c450208e3cfb_800w.webp",
  portrait4: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd42ff07-b859-4c2e-9161-0a712b0b0d59_800w.webp",
  archive1: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/f348328e-84ea-467a-87f6-b99066a79748/1600w.jpg",
  archive2: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/82a2e98b-2d2a-4801-a494-a42184703d02_1600w.jpg",
  archive3: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/a318a1ff-75e4-4d22-9944-7eb1ad9b7272/1600w.png",
  archive4: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/a34e9d46-190a-4965-9259-861140c3b9a4/1600w.png",
  archive5: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aed3fd3d-584e-4710-b31a-6fd39d3a21c4_1600w.webp",
};

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@valerievance.studio");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="min-h-screen relative font-geist">
      
      {/* Navigation Layer */}
      <section className="pt-8 px-6 md:px-12 flex justify-between items-start sticky top-0 z-50 pointer-events-none">
        {/* Logo */}
        <div className="pointer-events-auto cursor-pointer" onClick={scrollToTop}>
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 90L50 10L90 90H70L50 50L30 90H10Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Right Nav */}
        <div className="flex gap-16 pointer-events-auto">
          <nav className="flex gap-4 items-center">
            <div className="w-6 flex flex-col gap-[3px] cursor-pointer group">
              <div className="h-[1px] w-full bg-slate-900 group-hover:w-1/2"></div>
              <div className="h-[1px] w-full bg-slate-900 group-hover:w-3/4"></div>
            </div>
            <ul className="flex flex-col gap-1 text-[9px] tracking-[0.2em] font-medium uppercase text-right">
              <li><a href="#" className="hover:opacity-50 font-geist">Home</a></li>
              <li><a href="#about" className="hover:opacity-50 font-geist">Profile</a></li>
              <li><a href="#work" className="hover:opacity-50 font-geist">Archive</a></li>
              <li><a href="#contact" className="hover:opacity-50 font-geist">Contact</a></li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="min-h-[85vh] px-6 md:px-12 flex flex-col md:flex-row justify-between items-end pb-20 pt-32 relative">
        <div className="w-full md:w-1/2 mb-12 md:mb-0 z-10">
          <div className="leading-[0.9] md:text-7xl lg:text-8xl text-5xl font-normal tracking-tighter font-geist mb-2">
            Brand Ecosystems
          </div>
          <div className="leading-[0.9] md:text-7xl lg:text-7xl text-5xl font-light tracking-tighter font-geist mb-2">
            Digital Narratives
          </div>
          <div className="font-geist font-light tracking-tighter text-5xl leading-[0.9] mb-2 md:text-7xl lg:text-7xl">
            Strategic Design
          </div>
          <div className="leading-[0.9] md:text-7xl lg:text-7xl text-5xl font-light tracking-tighter font-geist">
            Creative Direction
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-end relative">
          <div className="flex items-center gap-4 mr-8 mb-8 z-20">
             <div className="flex gap-2 opacity-50">
                <iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
                <iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
             </div>
             <a href="#work" className="rounded-full border border-slate-900 px-6 py-2 text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-slate-50 font-geist">
               Explore Work
             </a>
          </div>
          
          <div className="w-64 md:w-80 lg:w-96 aspect-[3/4] overflow-hidden rounded-sm relative">
            <img 
              src={MOCK_IMAGES.hero} 
              alt="Hero portrait" 
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </div>
        </div>
      </section>

      {/* Main Work Section - AURA FOCUS */}
      <section id="work" className="py-32 px-6 md:px-12 relative border-t border-slate-200">
        <div className="flex flex-col md:flex-row gap-20">
          
          {/* Left Column Details */}
          <div className="w-full md:w-5/12 sticky top-32 self-start">
            <div>
              <h2 className="font-geist text-6xl md:text-8xl uppercase tracking-tighter mb-16 flex items-start gap-4">
                AURA FOCUS
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-y-8 gap-x-12 mb-16 border-t border-slate-900/10 pt-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1 font-geist">Timeline</p>
                <p className="text-sm font-geist">2021—Present</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1 font-geist">Partner</p>
                <p className="text-sm font-geist">Aura Botanicals Ltd.</p>
              </div>
              <div className="col-span-2">
                <p className="text-[10px] uppercase tracking-widest opacity-50 mb-2 font-geist">Capabilities</p>
                <ul className="text-sm font-geist leading-relaxed uppercase space-y-1">
                  <li>Visual Identity System</li>
                  <li>Digital Commerce Architecture</li>
                  <li>Spatial & Retail Experience</li>
                  <li>Campaign Art Direction</li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-50 mb-4 font-geist">Synopsis</p>
              <p className="text-sm md:text-base font-geist leading-loose text-justify max-w-md">
                Aura Focus partnered with our studio prior to their 2021 debut to construct a digital identity from the ground up. What started as a focused visual system grew into a comprehensive creative alliance spanning spatial design, campaign direction, and sustained brand evolution. Today, we continue to shape the narrative that connects their performance botanicals with a global audience of creative professionals.
              </p>
            </div>
          </div>

          {/* Right Column Collage */}
          <div className="w-full md:w-7/12 relative min-h-[800px] mt-20 md:mt-0">
             <div className="absolute top-0 right-10 w-3/4 max-w-md z-10 hover:z-50">
                <img src={MOCK_IMAGES.collage1} alt="Collage 1" className="w-full shadow-2xl rounded-sm border-[8px] border-white rotate-[-3deg]" />
             </div>
             
             <div className="absolute top-64 left-0 w-1/2 max-w-xs z-20 hover:z-50">
                <div className="bg-slate-200 p-4 rounded-sm shadow-xl rotate-[5deg]">
                  <img src={MOCK_IMAGES.collage2} alt="Collage 2" className="w-full filter contrast-125" />
                  <p className="text-center mt-3 text-sm opacity-60 font-geist italic">Archive 01</p>
                </div>
             </div>
             
             <div className="absolute top-96 right-0 w-2/3 max-w-sm z-30 hover:z-50">
                <img src={MOCK_IMAGES.collage3} alt="Collage 3" className="w-full shadow-xl rounded-full aspect-square object-cover" />
             </div>

             <div className="absolute bottom-10 left-10 w-3/4 max-w-md z-40 hover:z-50">
                <img src={MOCK_IMAGES.collage4} alt="Collage 4" className="w-full shadow-2xl border-4 border-white rotate-[-8deg]" />
             </div>
          </div>
        </div>
      </section>

      {/* Subsequent Projects Strip */}
      <section className="py-20 px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 overflow-x-auto no-scrollbar pb-10">
          {[
            { img: MOCK_IMAGES.product1, title: 'TERRA FUEL' },
            { img: MOCK_IMAGES.product2, title: 'SYNTHETIX' },
            { img: MOCK_IMAGES.product3, title: 'LUMINA' }
          ].map((prod, i) => (
            <div key={i} className="flex-none w-[80vw] md:w-[400px] group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-slate-200">
                <img src={prod.img} alt={prod.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center border-t border-slate-900/20 pt-4">
                <h3 className="font-geist text-3xl uppercase tracking-tighter">{prod.title}</h3>
                <span className="text-[10px] uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 font-geist">
                  View <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About / Portraits Section */}
      <section id="about" className="py-32 border-t border-slate-200">
        {/* Portraits Row */}
        <div className="flex w-full overflow-hidden h-[30vh] md:h-[40vh] mb-32">
          {[MOCK_IMAGES.portrait1, MOCK_IMAGES.portrait2, MOCK_IMAGES.portrait3, MOCK_IMAGES.portrait4].map((src, i) => (
            <div key={i} className="flex-1 border-r border-slate-200 last:border-0 relative group">
              <img src={src} alt="Portrait" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0" />
            </div>
          ))}
        </div>

        {/* Text Details */}
        <div className="px-6 md:px-12 max-w-6xl mx-auto flex flex-col gap-32">
          <div className="flex justify-end">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <p className="font-geist text-lg md:text-xl leading-relaxed text-justify">
                I am a visual architect and brand director anchored by the belief that compelling aesthetics require rigorous strategy. My practice resides where conceptual thinking intersects with tangible impact. I find energy in assembling a brand's visual universe from scratch or refining an established legacy. As the former lead of Studio Vanguard, I have orchestrated campaigns for entities like Synthetix, Terra Fuel, and Nova, translating abstract positioning into digital and physical artifacts that resonate deeply.
              </p>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <p className="font-geist text-lg md:text-xl leading-relaxed text-justify">
                Currently, I steward the creative vision at Aura Focus, where I have dictated everything from packaging architecture to e-commerce narrative as the company scales globally. My foundation merges graphic design, spatial awareness, and cultural strategy. Outside the studio, my curiosity leans toward brutalist architecture, experimental typography, and behavioral economics—disciplines that subtly inform every digital ecosystem I design.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Archive */}
        <div className="mt-40 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 max-w-7xl mx-auto">
          <div className="flex flex-col gap-20">
            {[
              { year: '2024', title: 'CURRENTLY', img: MOCK_IMAGES.archive1, desc: 'Leading creative at Aura Focus, scaling visual identity and digital storytelling globally.' },
              { year: '2023', title: 'TERRA FUEL REBRAND', img: MOCK_IMAGES.archive2, desc: 'Defined a new minimalist visual language while preserving the legacy of the wellness pioneer.' },
              { year: '2022', title: 'LUMINA LAUNCH', img: MOCK_IMAGES.archive3, desc: 'Directed the launch campaign capturing the balance of celebration and calm for the botanical beverage.' }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="border-b border-slate-900/20 pb-4 mb-6 flex justify-between items-end">
                  <h3 className="font-geist text-3xl uppercase tracking-tighter">{item.title}</h3>
                  <span className="text-sm font-geist italic">{item.year}</span>
                </div>
                <div className="aspect-video overflow-hidden bg-slate-200 mb-6">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
                </div>
                <p className="font-geist text-sm leading-relaxed max-w-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-20 md:mt-40">
            {[
              { year: '2021', title: 'AURA SPATIAL', img: MOCK_IMAGES.archive4, desc: 'Brought Aura Focus from digital shelves to physical retail environments nationwide.' },
              { year: '2020', title: 'SYNTHETIX DEBUT', img: MOCK_IMAGES.archive5, desc: 'Led creative direction defining the visual world and content system for the tech-wear brand.' },
              { year: '2019', title: 'STUDIO VANGUARD', img: MOCK_IMAGES.hero, desc: 'Founded independent practice focusing on narrative-driven commerce experiences.' }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="border-b border-slate-900/20 pb-4 mb-6 flex justify-between items-end">
                  <h3 className="font-geist text-3xl uppercase tracking-tighter">{item.title}</h3>
                  <span className="text-sm font-geist italic">{item.year}</span>
                </div>
                <div className="aspect-[4/3] overflow-hidden bg-slate-200 mb-6">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
                </div>
                <p className="font-geist text-sm leading-relaxed max-w-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-32 px-6 md:px-12 bg-slate-950 text-slate-50 flex flex-col justify-between min-h-[60vh]">
        <div className="flex flex-col md:flex-row justify-between gap-20">
          <div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest opacity-50 mb-4 font-geist">Direct Inquiry</h4>
              <div 
                onClick={handleCopy}
                className="group cursor-pointer inline-flex items-center gap-6"
              >
                <span className="font-geist text-3xl md:text-5xl lg:text-6xl hover:italic">
                  hello@valerievance.studio
                </span>
                <span className="text-[10px] font-geist uppercase tracking-widest border border-slate-50 rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all">
                  {copied ? 'Copied!' : 'Copy Address'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <a href="#" className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-full border border-slate-50 flex items-center justify-center group-hover:bg-slate-50 group-hover:text-slate-950 transition-colors">
                <iconify-icon icon="simple-icons:linkedin" width="24"></iconify-icon>
              </div>
              <span className="text-[10px] font-geist uppercase tracking-widest">LinkedIn</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-full border border-slate-50 flex items-center justify-center group-hover:bg-slate-50 group-hover:text-slate-950 transition-colors">
                <iconify-icon icon="simple-icons:instagram" width="24"></iconify-icon>
              </div>
              <span className="text-[10px] font-geist uppercase tracking-widest">Instagram</span>
            </a>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-slate-800 flex justify-between items-center text-[10px] uppercase tracking-widest opacity-50 font-geist">
          <p>© {new Date().getFullYear()} Valerie Vance Studio</p>
          <button onClick={scrollToTop} className="hover:opacity-100 flex items-center gap-2">
            Top <iconify-icon icon="solar:arrow-up-linear"></iconify-icon>
          </button>
        </div>
      </footer>

    </div>
  );
}