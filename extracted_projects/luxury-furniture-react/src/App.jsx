import React from 'react';
import WebGLImage from './components/WebGLImage';

export default function App() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      
      {/* Abstract Background Effect */}
      <div 
        className="hidden md:flex absolute top-0 left-0 right-0 h-[100vh] z-0 pointer-events-none overflow-hidden opacity-50 dither-bg" 
        aria-hidden="true" 
        style={{ bottom: 'auto' }}
      ></div>

      {/* Reusable Vertical Container Lines Macro */}
      <div className="fixed inset-0 pointer-events-none z-50 flex justify-center w-full mix-blend-multiply opacity-[0.04]">
        <div className="w-full max-w-[88rem] h-full flex justify-between px-6 lg:px-12">
          <div className="w-px h-full bg-current"></div>
          <div className="w-px h-full bg-current hidden md:block"></div>
          <div className="w-px h-full bg-current hidden lg:block"></div>
          <div className="w-px h-full bg-current"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 w-full z-40 py-8">
        <div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <iconify-icon icon="solar:armchair-linear" className="text-3xl transition-transform group-hover:scale-110"></iconify-icon>
            <span className="text-xl tracking-tighter uppercase font-jakarta font-light">Aura</span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-tight opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity font-geist">Collections</a>
            <a href="#" className="hover:opacity-100 transition-opacity font-geist">Design Process</a>
            <a href="#" className="hover:opacity-100 transition-opacity font-geist">Materials</a>
            <a href="#" className="hover:opacity-100 transition-opacity font-geist">Journal</a>
          </div>
          <div className="flex items-center gap-5">
            <button className="opacity-70 hover:opacity-100 transition-opacity">
              <iconify-icon icon="solar:magnifer-bold-duotone" className="text-2xl"></iconify-icon>
            </button>
            <button className="opacity-70 hover:opacity-100 transition-opacity relative">
              <iconify-icon icon="solar:bag-bold-duotone" className="text-2xl"></iconify-icon>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 min-h-screen flex flex-col justify-between overflow-hidden section-container">
        <div className="max-w-[88rem] mx-auto px-6 lg:px-12 w-full relative z-10 text-center flex-grow flex flex-col items-center justify-center">
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-none mb-12 flex justify-center flex-wrap gap-x-4 md:gap-x-8">
            <span className="flex">
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.1s' }}>E</span></span>
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.15s' }}>n</span></span>
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.2s' }}>g</span></span>
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.25s' }}>i</span></span>
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.3s' }}>n</span></span>
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.35s' }}>e</span></span>
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.4s' }}>e</span></span>
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.45s' }}>r</span></span>
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.5s' }}>e</span></span>
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.55s' }}>d</span></span>
            </span>
            <span className="flex text-black/30">
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.6s' }}>f</span></span>
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.65s' }}>o</span></span>
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.7s' }}>r</span></span>
            </span>
            <span className="flex">
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.75s' }}>R</span></span>
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.8s' }}>e</span></span>
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.85s' }}>s</span></span>
              <span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{ animationDelay: '0.9s' }}>t</span></span>
            </span>
          </h1>

          <div className="absolute inset-0 z-[-1] flex items-center justify-center opacity-90 mt-20 hidden md:flex">
            <WebGLImage 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/687d701a-8748-4856-8c62-5627d113ee3e_1600w.webp" 
              alt="Sculptural Modern Chair" 
              className="w-full max-w-4xl object-contain h-[70vh] mix-blend-multiply" 
              style={{ maskImage: 'linear-gradient(black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(black 70%, transparent 100%)' }} 
            />
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mt-auto text-left gap-8">
            <div className="max-w-xs flex items-start gap-3">
              <div className="relative mt-1 text-[#C48C56]">
                <iconify-icon icon="solar:asterisk-bold-duotone" className="text-xl"></iconify-icon>
                <div className="sonar-ring"></div>
              </div>
              <p className="text-lg opacity-80 font-normal leading-relaxed font-geist">
                Precision-engineered for those who demand architectural integrity alongside absolute physical ease.
              </p>
            </div>
            
            <div className="max-w-sm flex flex-col items-start md:items-end text-left md:text-right gap-6">
              <p className="text-lg opacity-80 font-normal leading-relaxed font-geist">
                Meticulously sculpted utilizing sustainable hardwoods and advanced responsive memory foam composites.
              </p>
              <a href="#" className="btn-beam dark-btn inline-flex items-center gap-2 bg-[#2C2824] text-[#F2EFEA] px-6 py-3 rounded-full text-sm font-medium transition-transform hover:scale-105">
                <span className="font-geist">Configure Yours</span>
                <iconify-icon icon="solar:arrow-right-up-linear" className="text-lg"></iconify-icon>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-black/10 mt-16 pt-8">
          <div className="max-w-[88rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm tracking-tight font-medium opacity-60">
            <div className="flex items-center gap-3 font-geist"><span className="opacity-50">01</span> KINETIC SUPPORT</div>
            <div className="flex items-center gap-3 md:justify-center font-geist"><span className="opacity-50">02</span> BESPOKE TEXTILES</div>
            <div className="flex items-center gap-3 md:justify-end font-geist"><span className="opacity-50">03</span> ARCHITECTURAL FORM</div>
          </div>
        </div>
      </section>

      {/* Trusted By Logos */}
      <section className="py-16 border-b border-black/5 bg-white/30 backdrop-blur-md">
        <div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <iconify-icon icon="simple-icons:nasa" width="64" height="64" className="hover:opacity-100 transition-opacity"></iconify-icon>
          <iconify-icon icon="simple-icons:spacex" width="64" height="64" className="hover:opacity-100 transition-opacity hidden sm:block"></iconify-icon>
          <iconify-icon icon="simple-icons:uber" width="64" height="64" className="hover:opacity-100 transition-opacity"></iconify-icon>
          <iconify-icon icon="simple-icons:visa" width="64" height="64" className="hover:opacity-100 transition-opacity"></iconify-icon>
          <iconify-icon icon="simple-icons:bose" width="64" height="64" className="hover:opacity-100 transition-opacity hidden md:block"></iconify-icon>
          <iconify-icon icon="simple-icons:discover" width="64" height="64" className="hover:opacity-100 transition-opacity hidden lg:block"></iconify-icon>
          <iconify-icon icon="simple-icons:dji" width="64" height="64" className="hover:opacity-100 transition-opacity"></iconify-icon>
          <iconify-icon icon="simple-icons:sony" width="64" height="64" className="hover:opacity-100 transition-opacity hidden sm:block"></iconify-icon>
        </div>
      </section>

      {/* Full Width Feature Image */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center section-container group">
        <div className="absolute inset-0 bg-black/20 z-10 transition-colors group-hover:bg-black/10"></div>
        <WebGLImage 
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9fef1af-7076-41f8-94ac-87cf3a20563d_3840w.jpg" 
          alt="Person relaxing in modern interior" 
          className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" 
        />
        
        <div className="relative z-20 text-center text-white max-w-3xl px-6">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-6 leading-tight drop-shadow-lg font-jakarta font-light">
            Engineered around human mechanics, anticipating your movement before you make it.
          </h2>
          <div className="flex items-center justify-center gap-3 text-lg opacity-90 drop-shadow-md">
            <div className="w-8 h-[1px] bg-white/60"></div>
            <p className="font-geist">Metrics indicate 98% optimal spinal alignment.</p>
            <div className="w-8 h-[1px] bg-white/60"></div>
          </div>
        </div>
      </section>

      {/* The Science of Posture */}
      <section className="py-32 section-container">
        <div className="max-w-[88rem] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <h2 className="text-5xl md:text-6xl tracking-tighter font-jakarta font-light">The Science of<br/>Posture</h2>
            <a href="#" className="btn-beam dark-btn inline-flex items-center gap-2 bg-[#2C2824] text-[#F2EFEA] px-6 py-3 rounded-full text-sm font-medium">
              <span className="font-geist">Explore Specifications</span>
              <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            <div className="lg:col-span-4 max-w-sm">
              <p className="text-sm font-medium tracking-tight opacity-50 mb-4 uppercase font-geist">( Method )</p>
              <p className="text-xl leading-relaxed opacity-90 mb-8 font-jakarta font-light">
                Every structural decision serves a biomechanical purpose. We strip away the superfluous, leaving only what actively contributes to your physical wellbeing. Materials are tested for dynamic tension, ensuring longevity without aesthetic compromise.
              </p>
              <div className="relative inline-flex text-[#C48C56] mt-4">
                <iconify-icon icon="solar:asterisk-bold-duotone" className="text-3xl"></iconify-icon>
                <div className="sonar-ring" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-end">
              
              {/* Card 1 */}
              <div className="card-flashlight p-6 pb-8 flex flex-col group cursor-pointer" onMouseMove={handleMouseMove}>
                <div className="card-content">
                  <div className="aspect-square rounded-lg overflow-hidden bg-black/5 mb-6 relative">
                    <WebGLImage 
                      src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop" 
                      alt="Lounge Chair" 
                      className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                  <div className="flex justify-between items-end text-sm">
                    <div>
                      <span className="opacity-50 text-xs block mb-1 font-geist">01</span>
                      <p className="font-medium tracking-tight font-geist">Kinetic Lounge V1</p>
                    </div>
                    <span className="opacity-60 font-geist">240 Units</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card-flashlight p-6 pb-8 flex flex-col group cursor-pointer lg:-mt-24" onMouseMove={handleMouseMove}>
                <div className="card-content">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden bg-black/5 mb-6 relative">
                    <WebGLImage 
                      src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop" 
                      alt="Accent Chair" 
                      className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                  <div className="flex justify-between items-end text-sm">
                    <div>
                      <span className="opacity-50 text-xs block mb-1 font-geist">02</span>
                      <p className="font-medium tracking-tight font-geist">Architectural Accent</p>
                    </div>
                    <span className="opacity-60 font-geist">850+ Units</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Split */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-[70vh] w-full">
        <div className="relative overflow-hidden group">
          <WebGLImage 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe806415-0282-4b2f-b891-094e5725d386_1600w.jpg" 
            alt="Interior Details" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        </div>
        <div className="relative overflow-hidden group">
          <WebGLImage 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1eeba076-f2e1-49dd-b874-17afd258a4c9_1600w.jpg" 
            alt="Person relaxing" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
          <div className="absolute bottom-8 right-8 text-white/80 pointer-events-none">
            <iconify-icon icon="solar:asterisk-bold-duotone" className="text-3xl animate-spin-slow"></iconify-icon>
          </div>
        </div>
      </section>

      {/* Precision Engineering (Dark Section) */}
      <section className="bg-[#26221E] text-[#F2EFEA] py-32 section-container dark-section relative overflow-hidden">
        <div className="max-w-[88rem] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-8">
            <h2 className="text-5xl md:text-6xl tracking-tighter font-jakarta font-light">Precision<br/>Engineering</h2>
            <p className="text-xl tracking-tight opacity-50 font-jakarta font-light">SPEC_089</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
            
            {/* Left List */}
            <div className="space-y-6 text-sm font-medium tracking-tight">
              <p className="opacity-40 text-xs uppercase mb-8 font-geist">Series Classification</p>
              
              <div className="flex items-center gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
                <span className="opacity-40 text-xs w-6 font-geist">01</span>
                <span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Kinetic Lounge</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
                <span className="opacity-40 text-xs w-6 font-geist">02</span>
                <span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Minimalist Rocker</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
                <span className="opacity-40 text-xs w-6 font-geist">03</span>
                <span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Ergo-Task Hybrid</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
                <span className="opacity-40 text-xs w-6 font-geist">04</span>
                <span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Modular Accent</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
                <span className="opacity-40 text-xs w-6 font-geist">05</span>
                <span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Statement Recliner</span>
              </div>
            </div>

            {/* Center Image */}
            <div className="card-flashlight p-2 rounded-2xl h-[500px]" onMouseMove={handleMouseMove}>
              <div className="card-content w-full h-full rounded-xl overflow-hidden relative">
                <WebGLImage 
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62ec4789-2963-4666-aa09-20586e294364_800w.webp" 
                  alt="Chair Detail" 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Right List */}
            <div className="space-y-6 text-sm font-medium tracking-tight text-right">
              <p className="opacity-40 text-xs uppercase mb-8 font-geist">Material Synthesis</p>
              
              <div className="flex items-center justify-end gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
                <span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Aero-grade aluminum chassis</span>
                <iconify-icon icon="solar:arrow-right-up-linear" className="opacity-0 group-hover:opacity-100 transition-opacity"></iconify-icon>
              </div>
              <div className="flex items-center justify-end gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
                <span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Thermo-responsive polymer mesh</span>
              </div>
              <div className="flex items-center justify-end gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
                <span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Sustainably sourced walnut accents</span>
              </div>
              <div className="flex items-center justify-end gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
                <span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Micro-calibration lumbar system</span>
              </div>
              <div className="flex items-center justify-end gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
                <span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Nano-coated stain resistance</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-[#1A1714] text-[#F2EFEA] py-8 overflow-hidden marquee-mask">
        <div className="animate-marquee flex items-center gap-8 text-5xl md:text-7xl font-medium tracking-tighter whitespace-nowrap opacity-20">
          <span className="font-jakarta font-light">ENGINEERED COMFORT</span>
          <iconify-icon icon="solar:asterisk-bold-duotone" className="text-3xl"></iconify-icon>
          <span className="font-jakarta font-light">ARCHITECTURAL DESIGN</span>
          <iconify-icon icon="solar:asterisk-bold-duotone" className="text-3xl"></iconify-icon>
          <span className="font-jakarta font-light">STRUCTURAL INTEGRITY</span>
          <iconify-icon icon="solar:asterisk-bold-duotone" className="text-3xl"></iconify-icon>
          <span className="font-jakarta font-light">ENGINEERED COMFORT</span>
          <iconify-icon icon="solar:asterisk-bold-duotone" className="text-3xl"></iconify-icon>
          <span className="font-jakarta font-light">ARCHITECTURAL DESIGN</span>
          <iconify-icon icon="solar:asterisk-bold-duotone" className="text-3xl"></iconify-icon>
          <span className="font-jakarta font-light">STRUCTURAL INTEGRITY</span>
          <iconify-icon icon="solar:asterisk-bold-duotone" className="text-3xl"></iconify-icon>
        </div>
      </section>

      {/* Bespoke Configurations */}
      <section className="py-32 section-container">
        <div className="max-w-[88rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl tracking-tighter mb-6 font-jakarta font-light">Bespoke<br/>Configurations</h2>
            <p className="text-lg opacity-80 font-normal leading-relaxed mb-12 border-b border-black/10 pb-12 font-geist">
              Our engineering team is available to calibrate piece metrics precisely to your spatial and biomechanical requirements.
            </p>

            <div className="flex gap-8 items-start mb-12">
              <iconify-icon icon="solar:arrow-right-up-linear" className="text-6xl text-black/20 flex-shrink-0"></iconify-icon>
              
              <div>
                <p className="font-medium tracking-tight mb-4 text-sm uppercase opacity-50 font-geist">Consultation Protocols</p>
                <ul className="space-y-3 text-base font-medium opacity-90 tracking-tight">
                  <li className="flex items-center gap-3 font-geist">
                    <span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                    Spatial analysis &amp; sizing
                  </li>
                  <li className="flex items-center gap-3 font-geist">
                    <span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                    Textile and density selection
                  </li>
                  <li className="flex items-center gap-3 font-geist">
                    <span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                    Integration with existing architecture
                  </li>
                  <li className="flex items-center gap-3 font-geist">
                    <span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                    Manufacturing timeline review
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-8 p-4 rounded-xl bg-white/40 backdrop-blur-sm border border-black/5">
              <WebGLImage 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" 
                alt="Consultant" 
                className="w-14 h-14 rounded-full object-cover" 
              />
              <div>
                <p className="text-sm font-medium tracking-tight font-geist">"We refine every curve until it feels inevitable."</p>
                <p className="text-xs opacity-50 mt-1 uppercase tracking-wider font-geist">Elena R. — Lead Ergonomist</p>
              </div>
            </div>

            <a href="#" className="btn-beam dark-btn inline-flex items-center gap-2 bg-[#2C2824] text-[#F2EFEA] px-6 py-3 rounded-full text-sm font-medium">
              <span className="font-geist">Initiate Request</span>
              <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
            </a>
          </div>

          <div className="h-full min-h-[500px] relative rounded-2xl overflow-hidden card-flashlight" onMouseMove={handleMouseMove}>
            <div className="card-content w-full h-full absolute inset-0">
               <WebGLImage 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/226163af-42a4-443b-977d-7e18fe3f4d61_1600w.webp" 
                alt="Chair Configuration" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#26221E] text-[#F2EFEA] pt-24 pb-12 section-container dark-section border-t border-white/10">
        <div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          
          <a href="#" className="flex items-start gap-2 group relative">
            <span className="text-5xl md:text-7xl tracking-tighter uppercase leading-none font-jakarta font-light">Aura</span>
            <div className="relative mt-2 text-[#C48C56]">
              <iconify-icon icon="solar:asterisk-bold-duotone" className="text-3xl transition-transform group-hover:rotate-90 duration-500"></iconify-icon>
            </div>
          </a>

          <div className="max-w-sm">
            <p className="text-lg opacity-70 font-normal leading-relaxed font-geist">
              We synthesize structural engineering with refined aesthetics. Every piece is constructed using highly calibrated materials to elevate daily mechanics and endure lifetimes.
            </p>
          </div>

        </div>

        <div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-end gap-12 text-xs font-medium tracking-tight opacity-50 uppercase border-t border-white/10 pt-8">
          
          <div className="flex gap-6">
            <span className="font-geist">Network</span>
            <a href="#" className="hover:opacity-100 transition-opacity flex items-center gap-1 font-geist">
              <iconify-icon icon="solar:arrow-right-up-linear" className="text-base"></iconify-icon> Instagram
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity flex items-center gap-1 font-geist">
              <iconify-icon icon="solar:arrow-right-up-linear" className="text-base"></iconify-icon> Twitter
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity flex items-center gap-1 font-geist">
              <iconify-icon icon="solar:arrow-right-up-linear" className="text-base"></iconify-icon> LinkedIn
            </a>
          </div>

          <div className="flex gap-8">
            <span className="hidden md:inline font-geist">Index</span>
            <a href="#" className="hover:opacity-100 transition-opacity font-geist">Series</a>
            <a href="#" className="hover:opacity-100 transition-opacity font-geist">Engineering</a>
            <a href="#" className="hover:opacity-100 transition-opacity font-geist">Custom Build</a>
            <a href="#" className="hover:opacity-100 transition-opacity font-geist">Portal</a>
          </div>

        </div>
      </footer>

    </div>
  );
}