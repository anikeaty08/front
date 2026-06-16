import React, { useRef, useState, useEffect } from 'react';

export default function App() {
  const railRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (railRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = railRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (railRef.current) {
      railRef.current.scrollBy({ left: direction * 540, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Background with Spline Embed */}
      <div 
        className="aura-background-component top-0 w-full h-screen -z-10 absolute" 
        data-alpha-mask="80" 
        style={{ 
          maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', 
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)' 
        }}
      >
        <div className="spline-container absolute top-0 left-0 w-full h-full -z-10">
          <iframe 
            src="https://my.spline.design/thresholddarkambientui-v0gkZCfi6zXm69kE0wccy70f" 
            frameBorder="0" 
            width="100%" 
            height="100%"
            title="Spline Background"
          ></iframe>
        </div>
      </div>

      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 pt-4">
        <div className="max-w-5xl mr-auto ml-auto pr-6 pl-6">
          <div className="bg-white/5 border-white/10 border rounded-full pt-3 pr-3 pb-3 pl-3 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center gap-2">
                <div className="bg-center text-xl font-semibold tracking-tighter font-geist w-[100px] h-[36px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b20e1113-81f0-4fb1-b0ec-7dcbc7275c21_1600w.png')] bg-cover rounded-full"></div>
              </a>
              <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
                <a href="#features" className="hover:text-white transition-colors font-geist">Features</a>
                <a href="#browse" className="hover:text-white transition-colors font-geist">Browse Smarter</a>
                <a href="#testimonials" className="hover:text-white transition-colors font-geist">Testimonials</a>
                <a href="#pricing" className="hover:text-white transition-colors font-geist">Pricing</a>
              </nav>
              <div className="flex items-center gap-3">
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors hidden sm:block font-geist">Sign in</a>
                <a href="#" className="border-gradient inline-flex items-center gap-2 hover:bg-white/10 transition-colors text-sm font-medium text-white font-geist bg-white/5 rounded-full pt-2 pr-4 pb-2 pl-4">Download</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="z-10 pt-24 relative">
        {/* Hero */}
        <section className="md:pl-6 md:pr-6 md:pt-20 text-center max-w-3xl mt-20 mr-auto mb-20 ml-auto pt-20 pr-6 pl-6">
          <div className="inline-flex gap-2 text-xs text-white/80 bg-white/5 border-white/10 border rounded-full mr-auto ml-auto pt-1.5 pr-3 pb-1.5 pl-3 items-center backdrop-blur-sm">
            <iconify-icon icon="solar:stars-linear" class="h-3.5 w-3.5 text-white/80" style={{ strokeWidth: '1.5' }}></iconify-icon>
            <span className="font-geist">AI-Powered Browsing</span>
            <span className="mx-1 h-1 w-1 rounded-full bg-white/40"></span>
            <span className="text-white/60 font-geist">New in v3.0</span>
          </div>

          <h1 
            className="md:text-7xl lg:text-8xl text-5xl font-medium tracking-tighter font-jakarta mt-6 pt-2 pb-2 drop-shadow-lg" 
            style={{ 
              maskImage: 'linear-gradient(150deg, transparent, black 30%, black 50%, transparent)', 
              WebkitMaskImage: 'linear-gradient(150deg, transparent, black 30%, black 50%, transparent)' 
            }}
          >
            Browse with AI at your side
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl mx-auto font-geist">
            Onyx is the next-generation browser powered by advanced AI. Get instant answers, smart summaries, and intelligent assistance without leaving your tab.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 gap-x-3 gap-y-3 items-center justify-center">
            <div className="inline-block">
              <a href="#" className="codepen-button-aura">
                <span>
                  <iconify-icon icon="solar:download-linear" class="w-5 h-5"></iconify-icon>
                  Download
                </span>
              </a>
            </div>
            <a href="#" className="border-gradient inline-flex items-center gap-2 hover:bg-white/10 transition-colors text-sm font-medium text-white font-geist bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur-sm">
              <iconify-icon icon="solar:play-circle-linear" class="h-4 w-4" style={{ strokeWidth: '1.5' }}></iconify-icon>
              Watch Demo
            </a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-5 text-white/70">
            <div className="inline-flex items-center gap-2">
              <iconify-icon icon="solar:shield-check-linear" class="h-4 w-4" style={{ strokeWidth: '1.5' }}></iconify-icon>
              <span className="text-sm font-geist">Privacy First</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <iconify-icon icon="solar:bolt-linear" class="h-4 w-4" style={{ strokeWidth: '1.5' }}></iconify-icon>
              <span className="text-sm font-geist">Lightning Fast</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <iconify-icon icon="solar:star-linear" class="h-4 w-4" style={{ strokeWidth: '1.5' }}></iconify-icon>
              <span className="text-sm font-geist">4.8/5 Rating</span>
            </div>
          </div>
        </section>

        {/* Logo Cloud */}
        <section className="md:mt-32 max-w-7xl mt-24 mr-auto ml-auto pt-16 pr-6 pb-6 pl-6 relative">
          <div className="text-center">
            <p className="uppercase text-sm font-medium text-white/40 tracking-wide font-geist">
              Trusted by leading tech companies
            </p>
          </div>
          <div className="overflow-hidden mt-6 relative">
            <div 
              style={{ 
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
              }}
            >
              <div className="flex gap-6 will-change-transform animate-marquee-left">
                <div className="flex gap-6 shrink-0 gap-x-20">
                  <div className="inline-flex bg-center text-xl font-semibold text-white/40 tracking-tight mix-blend-screen w-[120px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65c46c4d-4bb6-4694-9897-33976bcdcba2_320w.png')] bg-cover items-center justify-center"></div>
                  <div className="inline-flex bg-center text-xl font-semibold text-white/40 tracking-tight mix-blend-screen w-[120px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_320w.png')] bg-cover items-center justify-center"></div>
                  <div className="inline-flex bg-center text-xl font-semibold text-white/40 tracking-tight mix-blend-screen w-[120px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a68dc15f-fb85-48af-b6c2-5c189e6f4c23_320w.png')] bg-cover items-center justify-center"></div>
                  <div className="inline-flex bg-center text-xl font-semibold text-white/40 tracking-tight mix-blend-screen w-[120px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_320w.png')] bg-cover items-center justify-center"></div>
                  <div className="inline-flex bg-center text-xl font-semibold text-white/40 tracking-tight mix-blend-screen w-[120px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_320w.png')] bg-cover items-center justify-center"></div>
                  <div className="inline-flex bg-center text-xl font-semibold text-white/40 tracking-tight mix-blend-screen w-[120px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54f89022-71e7-435d-b90f-9f79794a5404_320w.png')] bg-cover items-center justify-center"></div>
                </div>
                <div className="flex shrink-0 gap-x-20">
                  <div className="inline-flex bg-center text-xl font-semibold text-white/40 tracking-tight mix-blend-screen w-[120px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65c46c4d-4bb6-4694-9897-33976bcdcba2_320w.png')] bg-cover items-center justify-center"></div>
                  <div className="inline-flex bg-center text-xl font-semibold text-white/40 tracking-tight mix-blend-screen w-[120px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_320w.png')] bg-cover items-center justify-center"></div>
                  <div className="inline-flex bg-center text-xl font-semibold text-white/40 tracking-tight mix-blend-screen w-[120px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a68dc15f-fb85-48af-b6c2-5c189e6f4c23_320w.png')] bg-cover items-center justify-center"></div>
                  <div className="inline-flex bg-center text-xl font-semibold text-white/40 tracking-tight mix-blend-screen w-[120px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_320w.png')] bg-cover items-center justify-center"></div>
                  <div className="inline-flex bg-center text-xl font-semibold text-white/40 tracking-tight mix-blend-screen w-[120px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_320w.png')] bg-cover items-center justify-center"></div>
                  <div className="inline-flex bg-center text-xl font-semibold text-white/40 tracking-tight mix-blend-screen w-[120px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54f89022-71e7-435d-b90f-9f79794a5404_320w.png')] bg-cover items-center justify-center"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Tab Management */}
        <section className="sm:px-6 sm:mt-24 md:mt-32 max-w-7xl mt-16 mr-auto ml-auto pr-4 pl-4 relative">
          <div className="max-w-7xl mr-auto ml-auto">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Diagram */}
              <div 
                className="bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5aa83035-c72b-4cb5-9937-66ce103b64ef_1600w.webp')] bg-cover rounded-[36px] pt-5 pr-5 pb-5 pl-5 relative" 
                style={{ 
                  maskImage: 'linear-gradient(130deg, transparent, black 10%, black 70%, transparent)', 
                  WebkitMaskImage: 'linear-gradient(130deg, transparent, black 10%, black 70%, transparent)' 
                }}
              >
                <article className="group relative overflow-hidden transition-shadow hover:shadow-md bg-black/70 border-white/10 border rounded-3xl shadow-xl backdrop-blur-xl">
                  <div className="sm:p-10 pt-6 pr-6 pb-6 pl-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                      <h3 className="text-2xl font-semibold tracking-tight text-white font-jakarta">Smart Tab Management</h3>
                      <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-white/80 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 backdrop-blur-sm font-geist">
                        <iconify-icon icon="solar:stars-linear" class="text-lime-400 h-4 w-4"></iconify-icon>
                        AI Powered
                      </span>
                    </div>

                    {/* Illustration */}
                    <div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-white/5 to-white/10 ring-1 ring-inset ring-white/5 mb-8 backdrop-blur-sm">
                      {/* Main browser window */}
                      <div className="absolute right-3 sm:right-6 top-4 sm:top-6 w-[78%] h-[68%] rounded-2xl bg-black/90 backdrop-blur border border-white/10 shadow-sm">
                        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-red-400"></div>
                              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                              <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] sm:text-xs tracking-tight text-white/60 font-geist">12 tabs active</span>
                          </div>
                        </div>
                        <div className="p-3 space-y-2">
                          <div className="flex items-center gap-2 bg-lime-500/10 border border-lime-500/20 rounded-lg px-2 py-1.5">
                            <div className="w-3 h-3 bg-lime-400 rounded"></div>
                            <div className="flex-1">
                              <div className="h-1.5 w-20 bg-lime-400/40 rounded"></div>
                            </div>
                            <iconify-icon icon="solar:stars-linear" class="text-lime-400 h-3 w-3"></iconify-icon>
                          </div>
                          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5">
                            <div className="w-3 h-3 bg-white/20 rounded"></div>
                            <div className="flex-1">
                              <div className="h-1.5 w-16 bg-white/20 rounded"></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5">
                            <div className="w-3 h-3 bg-white/20 rounded"></div>
                            <div className="flex-1">
                              <div className="h-1.5 w-24 bg-white/20 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tab groups sidebar */}
                      <div className="absolute left-6 sm:left-12 bottom-10 sm:bottom-12 w-[62%] h-[52%] rounded-2xl bg-black/90 backdrop-blur border border-white/10 shadow-sm">
                        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
                          <span className="text-[10px] sm:text-xs tracking-widest text-white/60 font-geist">TAB GROUPS</span>
                        </div>
                        <div className="p-2 space-y-1.5">
                          <div className="flex items-center gap-2 text-xs bg-blue-500/10 border border-blue-500/20 rounded px-2 py-1">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-white/80 font-geist">Work (5)</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs bg-purple-500/10 border border-purple-500/20 rounded px-2 py-1">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-white/80 font-geist">Research (3)</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs bg-orange-500/10 border border-orange-500/20 rounded px-2 py-1">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="text-white/80 font-geist">Shopping (4)</span>
                          </div>
                        </div>
                      </div>

                      {/* Mobile preview */}
                      <div className="absolute left-3 sm:left-6 bottom-3 sm:bottom-4 w-[38%] h-[44%] rounded-2xl bg-black/90 backdrop-blur border border-white/10 shadow-sm">
                        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
                          <span className="text-[10px] sm:text-xs tracking-widest text-white/60 font-geist">SYNC</span>
                        </div>
                        <div className="p-2 space-y-2">
                          <div className="flex items-center gap-1.5">
                            <iconify-icon icon="solar:smartphone-linear" class="text-lime-400 h-3 w-3"></iconify-icon>
                            <div className="h-1 w-12 bg-lime-400/40 rounded"></div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <iconify-icon icon="solar:laptop-linear" class="text-white/40 h-3 w-3"></iconify-icon>
                            <div className="h-1 w-10 bg-white/20 rounded"></div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <iconify-icon icon="solar:monitor-linear" class="text-white/40 h-3 w-3"></iconify-icon>
                            <div className="h-1 w-14 bg-white/20 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-x-6 gap-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white tracking-tight font-jakarta">Auto-Organize</h4>
                        <p className="mt-2 text-sm text-white/60 font-geist">AI automatically groups related tabs by topic, project, or task for effortless organization.</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold tracking-tight text-white font-jakarta">Cross-Device Sync</h4>
                        <p className="mt-2 text-sm text-white/60 font-geist">Access your tab groups instantly across all devices with seamless cloud synchronization.</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div>
                      <a href="#" className="inline-flex items-center gap-2 text-xs font-medium text-white/90 hover:text-white font-geist">
                        Explore tab features
                        <iconify-icon icon="solar:arrow-right-linear" class="h-4 w-4"></iconify-icon>
                      </a>
                    </div>
                  </div>
                </article>
              </div>

              {/* Copy & stats */}
              <div>
                <div className="tech-content" id="technology">
                  <h3 className="sm:text-5xl transition-colors duration-500 text-4xl font-medium text-white tracking-tight font-jakarta">Revolutionary tab intelligence, built for productivity</h3>

                  <div className="mt-8">
                    <div className="border-t border-white/10 pt-6">
                      <h4 className="text-lg font-semibold text-white mb-4 font-jakarta">Core Intelligence Features</h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-500/10 flex items-center justify-center mt-0.5">
                            <iconify-icon icon="solar:cpu-linear" class="text-lime-400 w-4 h-4"></iconify-icon>
                          </div>
                          <div>
                            <h5 className="font-medium text-white font-geist">Intelligent Grouping</h5>
                            <p className="text-sm text-white/60 mt-1 font-geist">Machine learning analyzes content and context to automatically organize tabs into logical groups based on your workflow.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-500/10 flex items-center justify-center mt-0.5">
                            <iconify-icon icon="solar:settings-linear" class="text-lime-400 w-4 h-4"></iconify-icon>
                          </div>
                          <div>
                            <h5 className="font-medium text-white font-geist">Memory Management</h5>
                            <p className="text-sm text-white/60 mt-1 font-geist">Automatic tab suspension frees up system resources while keeping your workspace intact for instant restoration.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mt-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer items-center">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl tracking-tight font-jakarta font-medium text-white">89%</span>
                        </div>
                        <p className="text-xs text-white/60 font-geist">Faster tab switching reported</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl tracking-tight font-jakarta font-medium text-white">3.2M</span>
                        </div>
                        <p className="text-xs text-white/60 font-geist">Tab groups created daily</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mt-8">
                  <a href="#" className="inline-flex items-center justify-center gap-2 h-10 hover:bg-lime-600/90 transition text-sm font-normal text-white bg-lime-600 rounded-full px-4 font-geist">
                    Learn about tab management
                    <iconify-icon icon="solar:arrow-right-linear" class="h-4 w-4"></iconify-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Powered Search */}
        <section className="sm:px-6 sm:mt-24 md:mt-32 max-w-7xl mt-16 mr-auto ml-auto pr-4 pl-4 relative">
          <div className="max-w-7xl mr-auto ml-auto">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Copy & stats */}
              <div>
                <div className="tech-content">
                  <h3 className="sm:text-5xl transition-colors duration-500 text-4xl font-medium text-white tracking-tight font-jakarta">Intelligent search, powered by advanced AI models</h3>

                  <div className="mt-8">
                    <div className="border-t border-white/10 pt-6">
                      <h4 className="text-lg font-semibold text-white mb-4 font-jakarta">Advanced Search Capabilities</h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-500/10 flex items-center justify-center mt-0.5">
                            <iconify-icon icon="solar:magnifer-linear" class="text-lime-400 h-4 w-4"></iconify-icon>
                          </div>
                          <div>
                            <h5 className="font-medium text-white font-geist">Contextual Understanding</h5>
                            <p className="text-sm text-white/60 mt-1 font-geist">AI understands your intent and delivers relevant results based on context, not just keywords.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-500/10 flex items-center justify-center mt-0.5">
                            <iconify-icon icon="solar:filters-linear" class="text-lime-400 h-4 w-4"></iconify-icon>
                          </div>
                          <div>
                            <h5 className="font-medium text-white font-geist">Smart Filtering</h5>
                            <p className="text-sm text-white/60 mt-1 font-geist">Automatically filters and ranks results by relevance, recency, and reliability for faster information discovery.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mt-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer items-center">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl tracking-tight font-jakarta font-medium text-white">95%</span>
                        </div>
                        <p className="text-xs text-white/60 font-geist">Search accuracy improvement</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl tracking-tight font-jakarta font-medium text-white">5.8M</span>
                        </div>
                        <p className="text-xs text-white/60 font-geist">Searches powered daily</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mt-8">
                  <a href="#" className="inline-flex items-center justify-center gap-2 h-10 hover:bg-lime-600/90 transition text-sm font-normal text-white bg-lime-600 rounded-full px-4 font-geist">
                    Discover smart search
                    <iconify-icon icon="solar:arrow-right-linear" class="h-4 w-4"></iconify-icon>
                  </a>
                </div>
              </div>

              {/* Diagram */}
              <div 
                className="bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5aa83035-c72b-4cb5-9937-66ce103b64ef_1600w.webp')] bg-cover rounded-[36px] pt-5 pr-5 pb-5 pl-5 relative" 
                style={{ 
                  maskImage: 'linear-gradient(230deg, transparent, black 10%, black 70%, transparent)', 
                  WebkitMaskImage: 'linear-gradient(230deg, transparent, black 10%, black 70%, transparent)' 
                }}
              >
                <article className="group relative overflow-hidden transition-shadow hover:shadow-md bg-black/70 border-white/10 border rounded-3xl shadow-xl backdrop-blur-xl">
                  <div className="sm:p-10 pt-6 pr-6 pb-6 pl-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                      <h3 className="text-2xl font-semibold tracking-tight text-white font-jakarta">AI-Powered Search</h3>
                      <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-white/80 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 backdrop-blur-sm font-geist">
                        <iconify-icon icon="solar:stars-linear" class="text-lime-400 h-4 w-4"></iconify-icon>
                        AI Enhanced
                      </span>
                    </div>

                    {/* Illustration */}
                    <div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-white/5 to-white/10 ring-1 ring-inset ring-white/5 mb-8 backdrop-blur-sm">
                      {/* Search bar */}
                      <div className="absolute left-4 sm:left-6 top-4 sm:top-6 w-[85%] rounded-2xl bg-black/90 backdrop-blur border border-white/10 shadow-sm">
                        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                          <iconify-icon icon="solar:magnifer-linear" class="text-lime-400 h-4 w-4"></iconify-icon>
                          <div className="h-2 w-32 bg-lime-400/40 rounded"></div>
                          <div className="ml-auto">
                            <iconify-icon icon="solar:stars-linear" class="text-lime-400 h-3.5 w-3.5"></iconify-icon>
                          </div>
                        </div>
                        <div className="p-3 space-y-1.5">
                          <div className="text-[9px] sm:text-[10px] text-white/40 tracking-widest px-2 font-geist">SUGGESTED</div>
                          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5">
                            <iconify-icon icon="solar:history-linear" class="text-white/60 h-3 w-3"></iconify-icon>
                            <div className="h-1.5 w-24 bg-white/20 rounded"></div>
                          </div>
                          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5">
                            <iconify-icon icon="solar:document-linear" class="text-white/60 h-3 w-3"></iconify-icon>
                            <div className="h-1.5 w-20 bg-white/20 rounded"></div>
                          </div>
                        </div>
                      </div>

                      {/* Results panel */}
                      <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 w-[85%] rounded-2xl bg-black/90 backdrop-blur border border-white/10 shadow-sm">
                        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
                          <span className="text-[10px] sm:text-xs tracking-widest text-white/60 font-geist">AI INSIGHTS</span>
                          <span className="text-[9px] sm:text-[10px] text-lime-400 font-geist">LIVE</span>
                        </div>
                        <div className="p-3 space-y-2">
                          <div className="flex items-start gap-2 bg-lime-500/10 border border-lime-500/20 rounded-lg px-2 py-2">
                            <iconify-icon icon="solar:check-circle-linear" class="text-lime-400 flex-shrink-0 mt-0.5 h-3.5 w-3.5"></iconify-icon>
                            <div className="flex-1 space-y-1">
                              <div className="h-1 w-full bg-lime-400/40 rounded"></div>
                              <div className="h-1 w-3/4 bg-lime-400/30 rounded"></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-white/60 px-2 font-geist">
                            <iconify-icon icon="solar:chart-linear" class="text-white/40 h-2.5 w-2.5"></iconify-icon>
                            <span>Analyzing context...</span>
                          </div>
                        </div>
                      </div>

                      {/* Floating suggestions */}
                      <div className="absolute right-4 sm:right-6 top-24 sm:top-28 w-[42%] rounded-xl bg-black/90 backdrop-blur border border-white/10 shadow-sm p-2">
                        <div className="text-[9px] sm:text-[10px] text-white/40 tracking-widest mb-1.5 font-geist">RELATED</div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 rounded px-1.5 py-1">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <div className="h-1 w-16 bg-blue-400/40 rounded"></div>
                          </div>
                          <div className="flex items-center gap-1.5 bg-purple-500/10 border border-purple-500/20 rounded px-1.5 py-1">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                            <div className="h-1 w-12 bg-purple-400/40 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-x-6 gap-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white tracking-tight font-jakarta">Natural Language</h4>
                        <p className="mt-2 text-sm text-white/60 font-geist">Search using everyday language and get precise results that understand your intent.</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold tracking-tight text-white font-jakarta">Instant Answers</h4>
                        <p className="mt-2 text-sm text-white/60 font-geist">Get direct answers and summaries without clicking through multiple search results.</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div>
                      <a href="#" className="inline-flex items-center gap-2 text-xs font-medium text-white/90 hover:text-white font-geist">
                        Explore search features
                        <iconify-icon icon="solar:arrow-right-linear" class="h-4 w-4"></iconify-icon>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Showcase Section */}
        <section className="md:mt-32 max-w-7xl mt-24 mr-auto ml-auto pr-6 pl-6 relative" id="features">
          <div className="overflow-hidden sm:p-8 border-gradient bg-white/5 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">
              <div className="grid grid-cols-2 order-1 lg:order-2 relative gap-x-4 gap-y-4">
                <article className="group overflow-hidden aspect-[4/3] bg-center transition-transform duration-300 hover:scale-[1.02] bg-cover border-white/10 rounded-2xl relative border-gradient">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fbddf75f-e2e3-4552-a710-55e2a5f4d6af_800w.jpg" alt="Futuristic profile with orange visor shades" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="transition-opacity duration-300 group-hover:opacity-90 bg-gradient-to-b from-black/0 via-black/15 to-black/60 absolute top-0 right-0 bottom-0 left-0"></div>
                  <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
                    <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
                      <iconify-icon icon="solar:brain-linear" class="h-3.5 w-3.5" style={{ strokeWidth: '1.5' }}></iconify-icon>
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 transition-transform duration-300 group-hover:translate-x-1">
                    <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur font-geist">Smart AI</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Instant answers</p>
                  </div>
                </article>

                <article className="group relative overflow-hidden aspect-[4/3] bg-center bg-cover border-white/10 rounded-2xl transition-transform duration-300 hover:scale-[1.02] border-gradient">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1696396-99ab-4e5f-abd0-3a963c1ff85d_800w.webp" alt="Stylish woman in convertible at sunset" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-90"></div>
                  <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
                    <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
                      <iconify-icon icon="solar:shield-linear" class="w-3.5 h-3.5" style={{ strokeWidth: '1.5' }}></iconify-icon>
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 transition-transform duration-300 group-hover:translate-x-1">
                    <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur font-geist">Privacy</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Protected browsing</p>
                  </div>
                </article>

                <article className="group relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl transition-transform duration-300 hover:scale-[1.02] border-gradient">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_800w.webp" alt="Abstract Motion Portrait of Woman" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-90"></div>
                  <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
                    <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
                      <iconify-icon icon="solar:chart-square-linear" class="w-3.5 h-3.5" style={{ strokeWidth: '1.5' }}></iconify-icon>
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 transition-transform duration-300 group-hover:translate-x-1">
                    <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur font-geist">Analytics</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Usage insights</p>
                  </div>
                </article>

                <article className="group relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl transition-transform duration-300 hover:scale-[1.02] border-gradient">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8645457-3f4b-4898-b38f-e2676d678803_800w.jpg" alt="Silhouetted Woman Floating at Sunset" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-90"></div>
                  <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
                    <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
                      <iconify-icon icon="solar:bolt-linear" class="h-3.5 w-3.5" style={{ strokeWidth: '1.5' }}></iconify-icon>
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 transition-transform duration-300 group-hover:translate-x-1">
                    <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur font-geist">Speed</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Lightning performance</p>
                  </div>
                </article>
              </div>

              <div className="flex flex-col min-h-full justify-between order-2 lg:order-1">
                <div>
                  <span className="text-sm font-normal text-white/60 font-geist">Intelligence</span>
                  <h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-white tracking-tighter mt-2 font-jakarta font-medium">
                    A browser that thinks with you.
                  </h2>
                  <div className="mt-8 relative">
                    <div className="hidden sm:flex flex-col gap-4 relative text-white/70 bg-transparent pr-4 pl-4">
                      <div className="relative">
                        <div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-lime-400 via-emerald-400 to-cyan-400"></div>
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-4 h-4 z-10 relative bg-black border-lime-400 border-2 rounded-full mt-0.5 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-lime-400 rounded-full"></div>
                          </div>
                          <div className="flex-1 pb-6">
                            <span className="text-sm font-medium text-lime-300 font-geist">AI Summarization</span>
                            <p className="text-xs text-white/50 mt-1 font-geist">Get instant summaries of any webpage</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-lime-400 via-emerald-400 to-cyan-400"></div>
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-emerald-400 bg-black z-10 relative mt-0.5 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                          </div>
                          <div className="flex-1 pb-6">
                            <span className="text-sm font-medium text-emerald-300 font-geist">Smart Search</span>
                            <p className="text-xs text-white/50 mt-1 font-geist">Find information faster with AI assistance</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-cyan-400 bg-black z-10 relative mt-0.5 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                          </div>
                          <div className="flex-1">
                            <span className="text-sm font-medium text-cyan-300 font-geist">Translation</span>
                            <p className="text-xs text-white/50 mt-1 font-geist">Real-time translation in 100+ languages</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-10">
                  <div>
                    <p className="text-sm font-medium text-white tracking-tight font-geist">Browse without limits</p>
                    <p className="text-sm text-white/70 mt-1 max-w-sm font-geist">
                      Experience the future of web browsing with AI-powered features that adapt to your needs and enhance every interaction.
                    </p>
                    <a href="#" className="inline-flex items-center justify-center gap-2 h-10 hover:bg-lime-600/90 transition text-sm font-normal text-white bg-lime-600 rounded-full mt-4 px-4 max-w-sm font-geist">
                      Explore features
                      <span className="inline-flex h-2 w-2 rounded-full bg-white"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16 sm:mt-24 md:mt-32 relative" id="testimonials">
          <div className="sm:p-6 md:p-8 border-gradient bg-white/5 rounded-2xl sm:rounded-3xl p-4 relative backdrop-blur-lg">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:px-0 px-1 items-start sm:items-center">
              <h2 className="text-3xl sm:text-[44px] md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-white tracking-tighter font-jakarta font-medium">Testimonials.</h2>
              <span aria-hidden="true" role="separator" aria-orientation="vertical" className="hidden sm:block w-px bg-white/20 h-10"></span>
              <p className="text-sm sm:text-base text-white/60 sm:mt-1 tracking-tight font-geist">Users love the speed and intelligence of Onyx browser.</p>
            </div>
            <div className="h-px bg-white/20 mt-3 sm:mt-4"></div>

            <div className="relative mt-6 sm:mt-8">
              <div 
                className="overflow-hidden h-[320px] sm:h-[380px] md:h-[420px] rounded-2xl sm:rounded-3xl relative" 
                style={{ 
                  maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)', 
                  WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)' 
                }}
              >
                
                <div 
                  className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth px-4 sm:px-6 absolute top-0 right-0 bottom-0 left-0 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 items-center" 
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
                  id="testimonial-rail"
                  ref={railRef}
                  onScroll={checkScroll}
                >
                  <article className="min-w-[300px] sm:min-w-[420px] md:min-w-[520px] max-w-[640px] bg-white/5 border border-white/10 rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 text-white backdrop-blur-sm snap-center -rotate-2 shadow-2xl border-gradient flex-shrink-0">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-tighter font-jakarta font-medium">
                      "Onyx has completely transformed how I work. The AI features are incredibly intuitive and save me hours every week."
                    </p>
                    <div className="mt-6 sm:mt-8 flex items-center gap-3">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81d15fac-24d7-457d-a5f4-ef378c02513d_320w.webp" alt="" className="w-10 h-10 rounded-xl object-cover flex-shrink-0" />
                      <div>
                        <div className="text-sm tracking-tight font-geist">Alex Morgan</div>
                        <div className="text-xs text-white/50 tracking-tight font-geist">Product Designer, Tech Co</div>
                      </div>
                    </div>
                  </article>

                  <article className="min-w-[300px] sm:min-w-[420px] md:min-w-[520px] max-w-[640px] bg-white/5 border border-white/10 rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 text-white backdrop-blur-sm snap-center rotate-1 shadow-2xl border-gradient flex-shrink-0">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-tighter font-jakarta font-medium">
                      "The speed is unmatched. Pages load instantly and the AI assistant helps me find exactly what I need."
                    </p>
                    <div className="mt-6 sm:mt-8 flex items-center gap-3">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c44118ad-1930-4041-a6e0-d9cacc23473c_320w.jpg" alt="" className="w-10 h-10 rounded-xl object-cover flex-shrink-0" />
                      <div>
                        <div className="text-sm tracking-tight font-geist">Sarah Chen</div>
                        <div className="text-xs text-white/50 tracking-tight font-geist">Developer, StartupXYZ</div>
                      </div>
                    </div>
                  </article>

                  <article className="min-w-[300px] sm:min-w-[420px] md:min-w-[520px] max-w-[640px] bg-white/5 border border-white/10 rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 text-white backdrop-blur-sm snap-center -rotate-1 shadow-2xl border-gradient flex-shrink-0">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-tighter font-jakarta font-medium">
                      "Best browser I've ever used. Privacy-focused without sacrificing functionality. Highly recommend!"
                    </p>
                    <div className="mt-6 sm:mt-8 flex items-center gap-3">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9224ba63-793b-4edd-80e4-b2512cde1f9c_320w.jpg" alt="" className="w-10 h-10 rounded-xl object-cover flex-shrink-0" />
                      <div>
                        <div className="text-sm tracking-tight font-geist">James Wilson</div>
                        <div className="text-xs text-white/50 tracking-tight font-geist">Security Analyst</div>
                      </div>
                    </div>
                  </article>

                  <article className="min-w-[300px] sm:min-w-[420px] md:min-w-[520px] max-w-[640px] bg-white/5 border border-white/10 rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 text-white backdrop-blur-sm snap-center rotate-2 shadow-2xl border-gradient flex-shrink-0">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-tighter font-jakarta font-medium">
                      "The AI summarization feature is a game-changer. I can quickly scan articles and get the key points instantly."
                    </p>
                    <div className="mt-6 sm:mt-8 flex items-center gap-3">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f49e1522-5739-4873-8cf4-7e66424c5869_320w.jpg" alt="" className="w-10 h-10 rounded-xl object-cover flex-shrink-0" />
                      <div>
                        <div className="text-sm tracking-tight font-geist">Maya Patel</div>
                        <div className="text-xs text-white/50 tracking-tight font-geist">Content Strategist</div>
                      </div>
                    </div>
                  </article>

                  <article className="min-w-[300px] sm:min-w-[420px] md:min-w-[520px] max-w-[640px] bg-white/5 border border-white/10 rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 text-white backdrop-blur-sm snap-center -rotate-3 shadow-2xl border-gradient flex-shrink-0">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-tighter font-jakarta font-medium">
                      "Switching to Onyx was the best decision. It's faster, smarter, and respects my privacy."
                    </p>
                    <div className="mt-6 sm:mt-8 flex items-center gap-3">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1696396-99ab-4e5f-abd0-3a963c1ff85d_320w.webp" alt="" className="w-10 h-10 rounded-xl object-cover flex-shrink-0" />
                      <div>
                        <div className="text-sm tracking-tight font-geist">David Kim</div>
                        <div className="text-xs text-white/50 tracking-tight font-geist">Entrepreneur</div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20 flex items-center gap-2 sm:gap-3">
                  <button 
                    aria-label="Previous" 
                    className="hover:bg-white/20 transition-colors inline-flex text-white bg-white/10 w-9 h-9 sm:w-10 sm:h-10 border-white/20 border rounded-full items-center justify-center backdrop-blur-sm"
                    onClick={() => scroll(-1)}
                    style={{ opacity: canScrollLeft ? 1 : 0.5, pointerEvents: canScrollLeft ? 'auto' : 'none' }}
                  >
                    <iconify-icon icon="solar:arrow-left-linear" class="w-4 h-4 sm:w-5 sm:h-5" style={{ strokeWidth: '1.5' }}></iconify-icon>
                  </button>
                  <button 
                    aria-label="Next" 
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-black bg-white hover:bg-white/90 transition-colors inline-flex items-center justify-center"
                    onClick={() => scroll(1)}
                    style={{ opacity: canScrollRight ? 1 : 0.5, pointerEvents: canScrollRight ? 'auto' : 'none' }}
                  >
                    <iconify-icon icon="solar:arrow-right-linear" class="w-4 h-4 sm:w-5 sm:h-5" style={{ strokeWidth: '1.5' }}></iconify-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-6 mt-24 md:mt-32 relative mb-24">
          <div className="border-gradient overflow-hidden bg-white/5 rounded-3xl pt-12 pr-12 pb-12 pl-12 relative backdrop-blur-lg">
            <div className="opacity-50 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06254d74-b37f-4eaf-bc55-f9e0758e1c14_1600w.webp')] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 mb-6 backdrop-blur-sm">
                <iconify-icon icon="solar:rocket-linear" class="h-3.5 w-3.5" style={{ strokeWidth: '1.5' }}></iconify-icon>
                <span className="font-geist">Get Started Today</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-4 font-jakarta font-medium">
                Experience the future of browsing
              </h2>
              <p className="text-white/70 text-lg mb-8 font-geist">
                Join thousands of users who browse smarter with Onyx
              </p>

              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <a href="#" className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors font-geist">
                  Download for Free
                  <iconify-icon icon="solar:download-linear" class="ml-2 h-4 w-4" style={{ strokeWidth: '1.5' }}></iconify-icon>
                </a>
                <a href="#" className="border-gradient inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3 text-sm text-white hover:bg-white/10 transition-colors font-medium backdrop-blur-sm font-geist">
                  <iconify-icon icon="solar:info-circle-linear" class="h-4 w-4" style={{ strokeWidth: '1.5' }}></iconify-icon>
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-auto max-w-7xl px-6 relative mb-12">
          <div className="py-12 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <a href="#" className="flex items-center gap-2 mb-4">
                  <div className="text-xl font-semibold tracking-tighter font-geist">ONYX</div>
                </a>
                <p className="text-sm text-white/60 font-geist">Browse with AI at your side.</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-white mb-3 font-geist">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-geist">Features</a></li>
                  <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-geist">Download</a></li>
                  <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-geist">Extensions</a></li>
                  <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-geist">Changelog</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-white mb-3 font-geist">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-geist">About</a></li>
                  <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-geist">Blog</a></li>
                  <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-geist">Careers</a></li>
                  <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-geist">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-white mb-3 font-geist">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-geist">Privacy</a></li>
                  <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-geist">Terms</a></li>
                  <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-geist">Security</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10">
              <p className="text-sm text-white/60 font-geist">© 2025 Onyx Browser. All rights reserved.</p>
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <iconify-icon icon="simple-icons:x" class="w-5 h-5"></iconify-icon>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <iconify-icon icon="simple-icons:github" class="w-5 h-5"></iconify-icon>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <iconify-icon icon="simple-icons:linkedin" class="w-5 h-5"></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}