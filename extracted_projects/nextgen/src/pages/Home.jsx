import { useState } from 'react';
import Reveal from '../components/ui/Reveal';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import Testimonials from '../components/sections/Testimonials';
import clsx from 'clsx';

export default function Home() {
  return (
    <div className="w-full max-w-7xl flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full px-4 md:px-8 min-h-[85vh] flex flex-col justify-between relative border-b border-white/10 pt-20 pb-10 overflow-hidden group">
        {/* Background Image - Abstract Glowing Crystal Cluster */}
        <div className="absolute inset-0 z-[-1] opacity-40 mask-gradient-bottom">
          <img 
            src="https://images.unsplash.com/photo-1671519821564-ced7e41ee7ae?w=3840&q=80" 
            alt="Abstract Glowing Crystal Cluster" 
            className="w-full h-full object-cover object-center mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-[30s] ease-out" 
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end h-full w-full relative z-10">
          <div className="flex flex-col gap-4 mb-10 md:mb-0">
            <Reveal delay={100}>
              <p className="text-xs font-medium tracking-widest text-purple-400 uppercase">NextGen Technologies</p>
            </Reveal>
            <Reveal delay={300}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] max-w-2xl">
                NextGen<br/><span className="text-white/40">Immersive</span>
              </h1>
            </Reveal>
          </div>

          {/* Abstract 3D replacement (Skeuomorphic glowing element) */}
          <Reveal type="scale" delay={500} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:flex items-center justify-center w-[400px] h-[400px]">
            <div className="absolute inset-0 rounded-full border border-purple-500/20 shadow-[0_0_100px_rgba(168,85,247,0.15)] animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-pink-500/10 shadow-[inset_0_0_50px_rgba(236,72,153,0.1)] animate-[spin_30s_linear_infinite_reverse]"></div>
            <div className="text-9xl font-bold tracking-tighter leading-none" style={{ background: 'linear-gradient(180deg, #fff 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', color: 'transparent', filter: 'drop-shadow(0 0 30px rgba(168,85,247,0.5))' }}>
              NG
            </div>
          </Reveal>

          <Reveal delay={700} className="flex flex-col items-end gap-10">
            <div className="flex items-center gap-4 text-white/40">
              <iconify-icon icon="solar:monitor-linear" class="text-xl hover:text-white transition-colors cursor-pointer"></iconify-icon>
              <iconify-icon icon="solar:play-circle-linear" class="text-xl hover:text-white transition-colors cursor-pointer"></iconify-icon>
              <iconify-icon icon="solar:microphone-linear" class="text-xl hover:text-white transition-colors cursor-pointer"></iconify-icon>
              <iconify-icon icon="solar:camera-linear" class="text-xl hover:text-white transition-colors cursor-pointer"></iconify-icon>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium">
              <span className="w-8 h-[1px] bg-white/20"></span>
              <span className="text-white">01</span>
              <span className="text-white/40">04</span>
              <iconify-icon icon="solar:alt-arrow-down-linear" class="text-white/40"></iconify-icon>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="w-full border-x border-white/10 relative">
        <div className="py-24 flex flex-col items-center border-b border-white/10 relative px-4 text-center bg-gradient-to-b from-black to-purple-900/10">
          <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)' }}></div>
          
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 relative z-10">NextGen Work</h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex items-center gap-4 relative z-10 mb-8">
              <span className="w-12 h-[1px] bg-orange-500/50"></span>
              <span className="text-xs tracking-[0.2em] uppercase text-orange-400 font-medium">Impact & Case Studies</span>
              <span className="w-12 h-[1px] bg-orange-500/50"></span>
            </div>
          </Reveal>
          <Reveal delay={300} className="relative z-10 max-w-3xl">
            <p className="text-white/60 text-lg md:text-xl leading-relaxed">
              At NextGen, we don't just build immersive technology; we craft narratives that drive measurable impact. From boosting surgical retention rates to redefining retail engagement, explore how our spatial computing solutions have transformed industry leaders.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-b border-white/10">
          <ProjectCard 
            num="01" 
            title="Spatial" 
            subtitle="Computing" 
            count="135"
            client="Global Logistics Co."
            story="Re-architected supply chain visualization, reducing latency by 40% and saving $2.4M annually."
            delay={0} 
            img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc49165b-655c-4598-a8bc-ac2d1370bb45_original.jpg" 
          />
          <ProjectCard 
            num="02" 
            title="XR" 
            subtitle="Experiences" 
            faded 
            borderL 
            client="Mayo Clinic"
            story="Developed a multi-user surgical training simulation that improved procedure retention rates by 65%."
            delay={100} 
            img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4566dffd-7020-4ef9-affe-b3c6a68f9cfa_800w.jpg" 
          />
          <ProjectCard 
            num="03" 
            title="Virtual" 
            subtitle="Production" 
            count="28" 
            borderL 
            client="A24 Films"
            story="Pioneered real-time rendering on LED volumes, cutting post-production VFX time in half."
            delay={200} 
            img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32d0941b-0520-425e-9d73-9a58b043aeef_800w.jpg" 
          />
          <ProjectCard 
            num="04" 
            title="Interactive" 
            subtitle="Web" 
            count="14" 
            borderL 
            client="Nike"
            story="Launched a WebGL-powered 3D product configurator, driving a 112% lift in digital sales."
            delay={300} 
            img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/8b9f31ab-4458-4ccc-80bc-caa27d141c13/800w.jpg" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          <Reveal delay={0} className="hidden lg:block aspect-square border-b border-white/10 relative overflow-hidden group bg-black">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/7b8cdbc2-96f4-45d2-bae9-62811e5b2234/800w.png" 
              alt="Abstract Glowing Crystal Cluster" 
              className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-700 ease-out group-hover:scale-105 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none"></div>
            <div className="absolute top-4 left-4 text-[10px] tracking-widest text-white/20 font-medium z-20">VISUAL</div>
          </Reveal>

          <ProjectCard 
            num="05" 
            title="Live Action" 
            subtitle="Integration" 
            count="65" 
            borderL 
            client="Netflix"
            story="Seamlessly blended digital twins with physical sets for a flagship sci-fi series."
            delay={100} 
            img="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebb79511-26fb-462e-9c38-b1bef4ad3707_800w.webp" 
          />

          {/* Highlight Project */}
          <Reveal delay={200} className="aspect-square relative p-[1px] z-20 md:-mt-[1px] md:-ml-[1px]">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-purple-500/50 to-black rounded-sm pointer-events-none"></div>
            <div 
              className="w-full h-full flex flex-col justify-between relative z-10 rounded-sm cursor-pointer group overflow-hidden" 
              style={{ background: 'linear-gradient(160deg, #111111 0%, #000000 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), inset 0 2px 10px rgba(255,255,255,0.02), inset 0 -2px 10px rgba(0,0,0,0.8), 0 20px 40px rgba(0,0,0,0.8)' }}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4566dffd-7020-4ef9-affe-b3c6a68f9cfa_800w.jpg" 
                  alt="Game Dev" 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out mix-blend-screen" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none"></div>

              <div className="relative z-20 p-8 h-full flex flex-col justify-between">
                <div className="flex justify-between items-center w-full">
                  <div className="text-xs text-white/40 font-medium">06</div>
                  <div className="text-[10px] tracking-widest text-orange-400 uppercase font-semibold">Epic Games</div>
                </div>
                
                <div className="mt-8 flex-1 flex flex-col justify-end">
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 group-hover:text-orange-400 transition-colors">Game<br/>Dev</h3>
                  
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 mb-4">
                    <div className="overflow-hidden">
                      <p className="text-sm text-white/70 leading-relaxed">
                        Engineered custom multiplayer netcode supporting 100+ concurrent users with sub-20ms latency, setting a new industry standard for interactive worlds.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 border-t border-white/10 pt-4 mt-2">
                    <div>
                      <p className="text-xs tracking-widest text-orange-400 uppercase font-medium mb-1">14 Awards</p>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">Industry Recog.</p>
                    </div>
                    <div className="w-[1px] h-6 bg-white/10"></div>
                    <div>
                      <p className="text-xs tracking-widest text-orange-400 uppercase font-medium mb-1">4.8M+</p>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">Active Players</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-8 right-8 text-4xl font-medium text-white/20 tracking-tighter group-hover:text-white/40 transition-colors">42</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300} className="hidden lg:block aspect-square border-b border-l border-white/10 relative overflow-hidden group bg-black">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/44282daa-1513-456b-8858-9ce959226ba1_800w.webp" 
              alt="Futuristic purple data dashboard interface" 
              className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-700 ease-out group-hover:scale-105 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none"></div>
            <div className="absolute top-4 left-4 text-[10px] tracking-widest text-white/20 font-medium z-20">DATA</div>
          </Reveal>
        </div>
      </section>

      {/* Story Section with Form */}
      <section className="w-full border-x border-white/10 relative py-32 flex flex-col items-center justify-center overflow-hidden bg-black">
        {/* Background Image - AI Workflow */}
        <div className="absolute inset-0 z-0 opacity-[0.15]">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebb79511-26fb-462e-9c38-b1bef4ad3707_1600w.webp" 
            alt="AI Workflow" 
            className="w-full h-full object-cover mix-blend-luminosity grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
          <span className="text-[18vw] font-bold text-white/[0.03] tracking-tighter leading-none block">VISION</span>
        </div>

        <Reveal className="relative z-10 max-w-2xl text-center px-4 mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-tight">
            NextGen architects digital realities that transcend the screen.
          </h2>
        </Reveal>

        <Reveal delay={200} className="w-full">
          <form className="relative z-10 w-full max-w-3xl mx-auto px-4 flex flex-col md:flex-row gap-4 items-end" onSubmit={e => e.preventDefault()}>
            <div className="flex-1 w-full flex flex-col gap-2">
              <label className="text-xs text-white/40 uppercase tracking-wider font-medium ml-1">Company name</label>
              <input 
                type="text" 
                placeholder="COMPANY" 
                className="w-full h-12 px-4 rounded-sm outline-none text-sm placeholder:text-white/20 transition-all focus:border-purple-500/50" 
                style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.02)' }}
              />
            </div>
            <div className="flex-1 w-full flex flex-col gap-2">
              <label className="text-xs text-white/40 uppercase tracking-wider font-medium ml-1">Enter your work email</label>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full h-12 px-4 rounded-sm outline-none text-sm placeholder:text-white/20 transition-all focus:border-purple-500/50" 
                style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.02)' }}
              />
            </div>
            <button 
              type="submit" 
              className="h-12 px-8 rounded-sm text-xs font-medium tracking-wider uppercase text-white hover:brightness-110 transition-all w-full md:w-auto relative group overflow-hidden"
              style={{ background: 'linear-gradient(180deg, #5b21b6 0%, #3b0764 100%)', borderTop: '1px solid rgba(255,255,255,0.2)', borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(0,0,0,0.8)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 10px rgba(0,0,0,0.4)' }}
            >
              <span className="relative z-10 drop-shadow-md">Engage NextGen</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </form>
        </Reveal>
      </section>

      {/* Feature Section with Play Button */}
      <section className="w-full border-x border-white/10 border-t relative py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          
          {/* Left: Interactive Visual */}
          <div className="border-b lg:border-b-0 lg:border-r border-white/10 flex items-center justify-center p-12 relative overflow-hidden bg-black group">
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1632808575219-68d77ee2dadf?w=1600&q=80" 
                alt="Glass Panels" 
                className="w-full h-full object-cover mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none z-10"></div>

            <Reveal type="scale" delay={200} className="z-20">
              <div 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full relative flex items-center justify-center cursor-pointer group/btn" 
                style={{ background: 'linear-gradient(145deg, #111111, #000000)', boxShadow: '20px 20px 60px rgba(0,0,0,0.8), -10px -10px 40px rgba(255,255,255,0.02), inset 0 2px 10px rgba(255,255,255,0.05), inset 0 -4px 10px rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div className="absolute inset-4 rounded-full border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover/btn:shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all duration-500"></div>
                <div className="absolute inset-10 rounded-full border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover/btn:inset-8 transition-all duration-500"></div>
                <div 
                  className="absolute inset-16 rounded-full bg-black flex items-center justify-center"
                  style={{ boxShadow: 'inset 0 10px 20px rgba(0,0,0,0.8), 0 2px 5px rgba(255,255,255,0.05)' }}
                >
                  <iconify-icon icon="solar:play-bold" class="text-5xl text-white ml-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] group-hover/btn:text-purple-300 transition-colors duration-500"></iconify-icon>
                </div>
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-[2px]"></div>
              </div>
            </Reveal>
            
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.03] pointer-events-none z-10"></div>
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/[0.03] pointer-events-none z-10"></div>
            <div className="absolute top-3/4 left-0 w-full h-[1px] bg-white/[0.03] pointer-events-none z-10"></div>
          </div>

          {/* Right: Content */}
          <div className="p-12 md:p-20 flex flex-col justify-center relative">
            <Reveal>
              <p className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium mb-4">NextGen Development</p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-12 leading-tight">
                Immersive<br/>Experiences
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex items-center gap-6 md:gap-8 border-b border-white/10 mb-8 text-xs tracking-wider uppercase font-medium">
                <div className="pb-4 border-b-2 border-white text-white cursor-pointer">Strategy</div>
                <div className="pb-4 border-b-2 border-transparent text-white/40 hover:text-white/70 cursor-pointer transition-colors">Design</div>
                <div className="pb-4 border-b-2 border-transparent text-white/40 hover:text-white/70 cursor-pointer transition-colors">Development</div>
              </div>

              <p className="text-sm text-white/60 leading-relaxed mb-12 max-w-md">
                We blend cutting-edge technology with visionary design to build spatial environments that captivate and perform. From concept to deployment.
              </p>

              <div className="flex flex-col text-xs">
                <div className="flex border-t border-white/10 py-4">
                  <div className="w-1/3 text-white/40 font-medium uppercase tracking-wider text-xs">Client:</div>
                  <div className="w-2/3 text-white">Global Tech Inc.</div>
                </div>
                <div className="flex border-t border-white/10 py-4">
                  <div className="w-1/3 text-white/40 font-medium uppercase tracking-wider text-xs">Release:</div>
                  <div className="w-2/3 text-white">October, 2024</div>
                </div>
                <div className="flex border-t border-b border-white/10 py-4">
                  <div className="w-1/3 text-white/40 font-medium uppercase tracking-wider text-xs">Director:</div>
                  <div className="w-2/3 text-white">Elena Rostova</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full border-x border-white/10 relative py-32 flex flex-col items-center overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
          <span className="text-[18vw] font-bold text-white/[0.02] tracking-tighter leading-none block">IMPACT</span>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-10 max-w-xl leading-tight">
              Drive engagement with interactive 3D.
            </h2>
          </Reveal>
          
          <Reveal delay={100}>
            <div className="flex items-center gap-4 text-white/40 mb-20">
              <iconify-icon icon="solar:monitor-linear" class="text-xl"></iconify-icon>
              <iconify-icon icon="solar:play-circle-linear" class="text-xl"></iconify-icon>
              <iconify-icon icon="solar:microphone-linear" class="text-xl"></iconify-icon>
              <iconify-icon icon="solar:camera-linear" class="text-xl"></iconify-icon>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-sm text-white/60 mb-12">Performance metrics across XR campaigns:</p>
          </Reveal>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 mb-16 w-full">
            <Reveal delay={300} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-5xl md:text-6xl font-medium tracking-tighter text-white/40 mb-2">
                <AnimatedCounter target={520} /><span className="text-3xl">%</span>
              </div>
              <div className="text-xs tracking-widest uppercase text-white/20 font-medium">Interaction<br/>Rate</div>
            </Reveal>
            
            <Reveal delay={400} type="scale" className="flex flex-col items-center md:items-start text-center md:text-left scale-110">
              <div className="text-6xl md:text-7xl font-semibold tracking-tighter text-orange-400 mb-2 drop-shadow-[0_0_15px_rgba(251,146,60,0.3)]">
                <AnimatedCounter target={412} /><span className="text-4xl">%</span>
              </div>
              <div className="text-xs tracking-widest uppercase text-orange-400/80 font-medium">Conversion<br/>Lift</div>
            </Reveal>

            <Reveal delay={500} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-5xl md:text-6xl font-medium tracking-tighter text-white/40 mb-2">
                <AnimatedCounter target={350} /><span className="text-3xl">%</span>
              </div>
              <div className="text-xs tracking-widest uppercase text-white/20 font-medium">Retention<br/>Growth</div>
            </Reveal>
          </div>

          <Reveal delay={600} className="w-full flex justify-center">
            <div className="w-full max-w-md h-[2px] bg-white/10 relative rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-orange-400 w-2/3"></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Ecosystem / Tech Stack Section */}
      <section className="w-full border-x border-white/10 border-t relative py-32 flex flex-col items-center overflow-hidden bg-black">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <Reveal className="relative z-10 flex flex-col items-center text-center px-4 w-full mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-purple-400 font-medium mb-4">Ecosystem</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl leading-tight">
            Seamlessly integrated with industry standards.
          </h2>
        </Reveal>

        <div className="relative z-10 w-full max-w-5xl px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'Unity', icon: 'simple-icons:unity' },
            { name: 'Unreal', icon: 'simple-icons:unrealengine' },
            { name: 'Meta Quest', icon: 'simple-icons:meta' },
            { name: 'visionOS', icon: 'simple-icons:apple' },
            { name: 'WebXR', icon: 'solar:global-bold' },
            { name: 'React', icon: 'simple-icons:react' }
          ].map((tech, i) => (
            <Reveal key={i} delay={i * 100} className="w-full">
              <div className="aspect-square rounded-sm border border-white/10 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 group cursor-default">
                <iconify-icon 
                  icon={tech.icon} 
                  class="text-4xl text-white/40 group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_0_rgba(255,255,255,0)] group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                ></iconify-icon>
                <span className="text-xs font-medium text-white/40 group-hover:text-white/80 tracking-wider uppercase">{tech.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </div>
  );
}

function ProjectCard({ num, title, subtitle, count, faded, borderL, delay = 0, img, client, story }) {
  return (
    <Reveal delay={delay} className={clsx(
      "aspect-square border-b border-white/10 p-8 flex flex-col justify-between relative group transition-all duration-500 cursor-pointer overflow-hidden bg-black",
      borderL && "lg:border-l",
      !borderL && "lg:border-b-0 md:border-b-0" // specific handling for grids
    )}>
      {img && (
        <>
          <div className="absolute inset-0 z-0">
            <img 
              src={img} 
              alt={title} 
              className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 z-10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
        </>
      )}
      {!img && <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors z-0"></div>}
      
      <div className="absolute top-4 left-4 z-20 flex items-center gap-3">
        <span className="text-xs text-white/40 font-medium">{num}</span>
        {client && (
          <>
            <span className="w-4 h-[1px] bg-white/20"></span>
            <span className="text-[10px] tracking-widest text-purple-400 uppercase font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">{client}</span>
          </>
        )}
      </div>
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors z-20 pointer-events-none shadow-[inset_0_0_0_rgba(255,255,255,0)] group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"></div>
      
      <div className="mt-8 relative z-20 flex flex-col h-full justify-end">
        <h3 className={clsx("text-2xl md:text-3xl font-medium tracking-tight leading-tight w-full group-hover:text-purple-300 transition-colors duration-300", faded && "text-white/60")}>
          {title}<br/>{subtitle}
        </h3>

        {story && (
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 mt-0 group-hover:mt-4">
            <div className="overflow-hidden">
              <p className="text-sm text-white/70 leading-relaxed border-t border-white/10 pt-4">
                {story}
              </p>
            </div>
          </div>
        )}
      </div>
      {count && (
         <div className="absolute top-4 right-4 text-3xl font-medium text-white/20 tracking-tighter z-20 group-hover:text-white/40 transition-colors">{count}</div>
      )}
    </Reveal>
  );
}