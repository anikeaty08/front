import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
charcoal: "#0a0a0b",
electric: "#ff3b1d",
"electric-dim": "#e23218",
hotpink: "#ff3b1d",
vibrantblue: "#ff3b1d",
deeppurple: "#ff3b1d",
neongreen: "#ff3b1d",
},
fontFamily: {
sans: ["Inter", "sans-serif"],
},
animation: {
"pulse-fast":
"pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
},
},
},
};



        !(function () {
          if (!window.UnicornStudio) {
            window.UnicornStudio = { isInitialized: !1 };
            var i = document.createElement("script");
            (i.src =
              "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js"),
              (i.onload = function () {
                window.UnicornStudio.isInitialized ||
                  (UnicornStudio.init(), (window.UnicornStudio.isInitialized = !0));
              }),
              (document.head || document.body).appendChild(i);
          }
        })();
      


      const { useState, useEffect } = React;
      const { motion, useScroll, useTransform } = window.Motion;

      // --- Icons ---
      const Icon = ({ name, size = 24, className, strokeWidth = 1.5 }) => {
        const icons = {
          zap: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
          layers: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
          box: (
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          ),
          activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
          globe: (
            <path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9z M3.6 9h16.8 M3.6 15h16.8 M11.5 3a17 17 0 0 0 0 18 M12.5 3a17 17 0 0 1 0 18" />
          ),
          code: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
          arrowRight: <path d="M5 12h14M12 5l7 7-7 7" />,
        };

        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
          >
            {icons[name] || icons.zap}
          </svg>
        );
      };

      // --- Custom UI Components ---
      const Badge = ({ text, className }) => (
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full border border-white/20 text-xs font-semibold tracking-wide uppercase ${className}`}
        >
          {text}
        </div>
      );

      // --- Bento Grid Item ---
      const BentoItem = ({ children, className, delay = 0, speed = 1 }) => {
        const { scrollY } = useScroll();
        const y = useTransform(scrollY, [0, 1000], [0, speed * 50]);

        const directions = [
          { x: -50, y: 50 },
          { x: 50, y: 50 },
          { x: -50, y: -50 },
          { x: 50, y: -50 },
          { x: 0, y: 100 },
          { x: 0, y: -100 },
        ];
        const randomDir = directions[Math.floor(Math.random() * directions.length)];

        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, ...randomDir }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              delay: delay * 0.1,
              mass: 1,
            }}
            style={{ y }}
            whileHover={{
              y: -8,
              scale: 1.02,
              rotate: Math.random() * 2 - 1,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
            className={`relative overflow-hidden rounded-2xl group ${className}`}
          >
            {children}
          </motion.div>
        );
      };

      // --- Main App Component ---
      const App = () => {
        const [isScrolled, setIsScrolled] = useState(false);

        useEffect(() => {
          const handleScroll = () => setIsScrolled(window.scrollY > 50);
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, []);

        return (
          <div className="min-h-screen text-white selection:bg-electric selection:text-charcoal font-sans">
            {/* Floating Header */}
            <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
                <nav
                  className={`pointer-events-auto rounded-2xl transition-all duration-300 ${
                    isScrolled
                      ? "bg-black/80 backdrop-blur-md border border-white/10"
                      : "bg-black/30 backdrop-blur-md border border-white/5"
                  }`}
                >
                  <div className="flex justify-between items-center px-4 sm:px-6 py-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-electric p-1 rounded-md">
                        <Icon name="zap" className="text-charcoal w-5 h-5" />
                      </div>
                      <span className="text-xl font-semibold tracking-tight">K-A-I-R-O-S</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                      <a href="#" className="hover:text-electric transition-colors">
                        Tools
                      </a>
                      <a href="#" className="hover:text-electric transition-colors">
                        Developers
                      </a>
                      <a href="#" className="hover:text-electric transition-colors">
                        Creators
                      </a>
                      <a href="#" className="hover:text-electric transition-colors">
                        Library
                      </a>
                    </div>

                    <div className="flex items-center gap-4">
                      <button className="hidden sm:flex text-sm font-semibold text-gray-300 hover:text-electric transition-colors">
                        Always free
                      </button>
                      <button className="bg-electric text-charcoal px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:scale-105 transition-all active:scale-95">
                        Open Library
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </header>

            {/* Hero Section with Bento Grid */}
            <section className="pt-32 pb-20 px-4 sm:px-6 relative z-10">
              <div className="max-w-7xl mx-auto">
                <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                  <div>
                    <Badge
                      text="Free tool library • no accounts • no payments"
                      className="mb-6 text-electric border-electric/30"
                    />
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9]">
                      BUILD FASTER.
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-white">
                        FOR FREE.
                      </span>
                    </h1>
                  </div>
                  <p className="text-gray-400 max-w-sm text-base leading-relaxed">
                    K-A-I-R-O-S is a free tool library. Everything you see is free — no upgrades, no checkout, nothing sold.
                  </p>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 grid-rows-[auto] md:grid-rows-3 gap-4 h-auto md:h-[800px]">
                  {/* 1. Main Wordmark Card (Large) */}
                  <BentoItem
                    className="md:col-span-2 lg:col-span-6 md:row-span-2 bg-electric text-charcoal flex flex-col justify-between p-8 glow-pulse"
                    delay={1}
                    speed={0.5}
                  >
                    <div className="flex justify-between items-start">
                      <Icon name="zap" className="w-12 h-12" strokeWidth={2} />
                      <div className="bg-black text-electric px-3 py-1 rounded-full text-xs font-bold">ALWAYS FREE</div>
                    </div>
                    <div>
                      <h2 className="text-6xl lg:text-8xl font-black tracking-tighter mt-4">KAIROS</h2>
                      <p className="font-semibold mt-2 text-charcoal/80 text-lg">Public library — open access.</p>
                    </div>
                    <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                      <Icon name="zap" size={300} />
                    </div>
                  </BentoItem>

                  {/* 2. Phone Mockup */}
                  <BentoItem
                    className="md:col-span-2 lg:col-span-3 md:row-span-2 bg-black border border-white/10 p-6 flex flex-col items-center justify-center group"
                    delay={2}
                    speed={1.2}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <div className="w-full h-full relative z-0 opacity-50 group-hover:opacity-80 transition-opacity bg-[url('https://images.unsplash.com/photo-1616353071855-2c045c4458ae?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center"></div>

                    <div className="relative z-20 w-[180px] bg-black border-4 border-gray-800 rounded-[2rem] h-[320px] shadow-2xl overflow-hidden transform group-hover:-translate-y-4 transition-transform duration-500">
                      <div className="bg-black h-full p-4 flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                          <div className="w-8 h-1 bg-gray-700 rounded-full"></div>
                          <div className="w-2 h-2 bg-electric rounded-full"></div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-20 bg-gradient-to-br from-electric to-white rounded-xl"></div>
                          <div className="h-8 bg-gray-900 rounded-lg w-3/4"></div>
                          <div className="h-4 bg-gray-900 rounded-lg w-1/2"></div>
                          <div className="h-24 bg-gray-900 rounded-xl border border-gray-800 p-2 flex gap-2 items-end">
                            <div className="w-1/4 h-1/2 bg-white/30 rounded-sm"></div>
                            <div className="w-1/4 h-3/4 bg-white/20 rounded-sm"></div>
                            <div className="w-1/4 h-full bg-electric rounded-sm"></div>
                            <div className="w-1/4 h-2/3 bg-white/25 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 z-20">
                      <p className="text-white font-semibold text-lg">Instant Use</p>
                      <p className="text-gray-400 text-xs">No signup required</p>
                    </div>
                  </BentoItem>

                  {/* 3. Usage */}
                  <BentoItem
                    className="md:col-span-2 lg:col-span-3 md:row-span-1 bg-black border border-white/10 p-6 text-white overflow-hidden"
                    delay={3}
                    speed={0.8}
                  >
                    <div className="flex justify-between items-center mb-4 relative z-10">
                      <span className="font-semibold text-lg tracking-tight">Usage</span>
                      <Icon name="activity" className="opacity-80 text-electric" />
                    </div>
                    <div className="flex items-end space-x-2 h-24 mt-2">
                      {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className="flex-1 bg-white/10 hover:bg-electric rounded-t-sm transition-colors"
                        ></motion.div>
                      ))}
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                  </BentoItem>

                  {/* 4. Notes */}
                  <BentoItem
                    className="md:col-span-2 lg:col-span-3 md:row-span-2 bg-black border border-white/10 p-6 flex flex-col"
                    delay={4}
                    speed={1.5}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-electric"></div>
                      <div className="w-2 h-2 rounded-full bg-white/40"></div>
                      <div className="w-2 h-2 rounded-full bg-white/25"></div>
                    </div>
                    <div className="font-mono text-xs text-white/80 bg-white/5 p-4 rounded-lg flex-grow overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
                      <p>
                        <span className="text-electric">const</span> <span className="text-white">price</span> =
                        <span className="text-electric"> 0</span>;
                      </p>
                      <p className="mt-2 text-gray-400">// everything is free</p>
                      <p className="mt-1">
                        <span className="text-electric">return</span> <span className="text-white">"open library"</span>;
                      </p>
                      <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-2 h-4 bg-electric inline-block ml-1 mt-2 align-middle"
                      />
                    </div>
                    <p className="mt-4 font-semibold text-white text-lg">Tool Notes</p>
                  </BentoItem>

                  {/* 5. Small */}
                  <BentoItem
                    className="md:col-span-1 lg:col-span-3 md:row-span-1 bg-white text-black p-6 flex items-center justify-between"
                    delay={5}
                    speed={0.2}
                  >
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest">Access</p>
                      <p className="text-4xl font-black mt-1">FREE</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-electric flex items-center justify-center">
                      <Icon name="arrowRight" className="w-6 h-6 text-black" />
                    </div>
                  </BentoItem>

                  {/* 6. Globe */}
                  <BentoItem
                    className="md:col-span-2 lg:col-span-3 md:row-span-1 bg-black border border-white/10 p-0 relative"
                    delay={6}
                    speed={0.7}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{ backgroundImage: "radial-gradient(rgb(60, 60, 62) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="globe" className="text-white/20 w-32 h-32 opacity-50" strokeWidth={0.5} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-3 h-3 bg-electric rounded-full animate-ping absolute"></div>
                        <div className="w-3 h-3 bg-electric rounded-full relative z-10"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Library</p>
                      <p className="text-white font-semibold">Public</p>
                    </div>
                  </BentoItem>

                  {/* 7. Quote */}
                  <BentoItem
                    className="md:col-span-2 lg:col-span-3 md:row-span-1 bg-electric text-black p-6 relative overflow-hidden"
                    delay={7}
                    speed={1.1}
                  >
                    <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse-fast"></div>
                    <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-black rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
                    <div className="relative z-10 h-full flex flex-col justify-end">
                      <h3 className="text-2xl font-semibold italic tracking-tighter">"Nothing sold. Ever."</h3>
                    </div>
                  </BentoItem>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-gray-400 py-16 px-4 border-t border-white/10">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2 text-white mb-6">
                    <div className="bg-electric p-1 rounded-sm">
                      <Icon name="zap" className="text-charcoal w-4 h-4" />
                    </div>
                    <span className="text-lg font-semibold tracking-tight">K-A-I-R-O-S</span>
                  </div>
                  <p className="text-sm max-w-xs mb-6">
                    A free tool library for creators and developers. No accounts required, no payments accepted.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="hover:text-white">
                      <Icon name="globe" className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-white">
                      <Icon name="code" className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-4">Library</h5>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-electric transition-colors">All Tools</a></li>
                    <li><a href="#" className="hover:text-electric transition-colors">New</a></li>
                    <li><a href="#" className="hover:text-electric transition-colors">Popular</a></li>
                    <li><a href="#" className="hover:text-electric transition-colors">Collections</a></li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-4">About</h5>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-electric transition-colors">What is KAIROS?</a></li>
                    <li><a href="#" className="hover:text-electric transition-colors">Guidelines</a></li>
                    <li><a href="#" className="hover:text-electric transition-colors">Updates</a></li>
                    <li><a href="#" className="hover:text-electric transition-colors">Legal</a></li>
                  </ul>
                </div>
              </div>

              <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs">
                <p>© 2026 K-A-I-R-O-S. Free library.</p>
                <p className="flex items-center gap-2 mt-4 md:mt-0">
                  <span className="w-2 h-2 rounded-full bg-electric"></span> Public Access Enabled
                </p>
              </div>
            </footer>
          </div>
        );
      };

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App />);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="1bY8o6HVTI1oxJxuCJEG"></div>

</div>
<div className="" id="root">
<div className="min-h-screen text-white selection:bg-electric selection:text-charcoal font-sans">
<nav className="fixed top-0 w-full z-40 transition-all duration-300 bg-transparent py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="bg-electric p-1 rounded-md">
<svg className="text-charcoal w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
<span className="text-xl font-semibold tracking-tight">
                K-A-I-R-O-S
              </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
<a className="hover:text-electric transition-colors" href="#">
                Tools
              </a>
<a className="hover:text-electric transition-colors" href="#">
                Developers
              </a>
<a className="hover:text-electric transition-colors" href="#">
                Creators
              </a>
<a className="hover:text-electric transition-colors" href="#">
                Library
              </a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex text-sm font-semibold text-gray-300 hover:text-electric transition-colors">
                100% Free
              </button>
<button className="bg-electric text-charcoal px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:scale-105 transition-all active:scale-95">
                Open Library
              </button>
</div>
</div>
</nav>
<section className="pt-32 pb-20 px-4 sm:px-6 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 stagger-fade">
<div>
<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 text-xs font-semibold tracking-wide uppercase mb-6 text-electric border-electric/30">
                  Free tool library • no accounts • no payments
                </div>
<h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9]">
                  BUILD FASTER.
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-white gradient-text">
                    FOR FREE.
                  </span>
</h1>
</div>
<p className="text-gray-400 max-w-sm text-base leading-relaxed">
                Designed for friends who want to get more inclusive with
                AI—creatives, developers, traders, and anyone in between. Put
                this to use. Some tools may be freemium or have premium options,
                but every tool is tested, worth it, and amazing.
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 grid-rows-[auto] md:grid-rows-3 gap-4 h-auto md:h-[800px] stagger-fade">
<div className="relative overflow-hidden rounded-2xl group md:col-span-2 lg:col-span-6 md:row-span-2 bg-electric text-charcoal flex flex-col justify-between p-8 card-magnetic glow-pulse" style={{opacity: '1', transform: 'none'}}>
<div className="flex justify-between items-start">
<svg className="w-12 h-12" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
<div className="bg-charcoal text-electric px-3 py-1 rounded-full text-xs font-bold">
                    ALWAYS FREE
                  </div>
</div>
<div>
<h2 className="text-6xl lg:text-8xl font-black tracking-tighter mt-4">
                    KAIROS
                  </h2>
<p className="font-semibold mt-2 text-charcoal/80 text-lg">
                    Library online.
                  </p>
</div>
<div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
<svg fill="none" height="300" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="300" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl group md:col-span-2 lg:col-span-3 md:row-span-2 bg-black border border-white/10 p-6 flex flex-col items-center justify-center" style={{opacity: '1', transform: 'none'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<div className="w-full h-full relative z-0 opacity-50 group-hover:opacity-80 transition-opacity bg-[url('https://images.unsplash.com/photo-1616353071855-2c045c4458ae?q=80&amp;w=600&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="relative z-20 w-[180px] bg-black border-4 border-gray-800 rounded-[2rem] h-[320px] shadow-2xl overflow-hidden transform group-hover:-translate-y-4 transition-transform duration-500">
<div className="bg-black h-full p-4 flex flex-col">
<div className="flex justify-between items-center mb-4">
<div className="w-8 h-1 bg-gray-700 rounded-full"></div>
<div className="w-2 h-2 bg-electric rounded-full"></div>
</div>
<div className="space-y-3">
<div className="h-20 bg-gradient-to-br from-electric to-white rounded-xl"></div>
<div className="h-8 bg-gray-900 rounded-lg w-3/4"></div>
<div className="h-4 bg-gray-900 rounded-lg w-1/2"></div>
<div className="h-24 bg-gray-900 rounded-xl border border-gray-800 p-2 flex gap-2 items-end">
<div className="w-1/4 h-1/2 bg-white/30 rounded-sm"></div>
<div className="w-1/4 h-3/4 bg-white/20 rounded-sm"></div>
<div className="w-1/4 h-full bg-electric rounded-sm"></div>
<div className="w-1/4 h-2/3 bg-white/25 rounded-sm"></div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-6 z-20">
<p className="text-white font-semibold text-lg">Instant Access</p>
<p className="text-gray-400 text-xs">No paywalls. No upsells.</p>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl group md:col-span-2 lg:col-span-3 md:row-span-1 bg-black border border-white/10 p-6 text-white" style={{opacity: '1', transform: 'none'}}>
<div className="flex justify-between items-center mb-4 relative z-10">
<span className="font-semibold text-lg tracking-tight">
                    Usage
                  </span>
<svg className="opacity-80 text-electric" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div className="flex items-end space-x-2 h-24 mt-2">
<div className="flex-1 bg-white/10 hover:bg-electric rounded-t-sm transition-colors" style={{height: '40%'}}></div>
<div className="flex-1 bg-white/10 hover:bg-electric rounded-t-sm transition-colors" style={{height: '70%'}}></div>
<div className="flex-1 bg-white/10 hover:bg-electric rounded-t-sm transition-colors" style={{height: '50%'}}></div>
<div className="flex-1 bg-white/10 hover:bg-electric rounded-t-sm transition-colors" style={{height: '90%'}}></div>
<div className="flex-1 bg-white/10 hover:bg-electric rounded-t-sm transition-colors" style={{height: '60%'}}></div>
<div className="flex-1 bg-white/10 hover:bg-electric rounded-t-sm transition-colors" style={{height: '80%'}}></div>
<div className="flex-1 bg-white/10 hover:bg-electric rounded-t-sm transition-colors" style={{height: '100%'}}></div>
</div>
<div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
</div>
<div className="relative overflow-hidden rounded-2xl group md:col-span-2 lg:col-span-3 md:row-span-2 bg-black border border-white/10 p-6 flex flex-col" style={{opacity: '1', transform: 'none'}}>
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-electric"></div>
<div className="w-2 h-2 rounded-full bg-white/40"></div>
<div className="w-2 h-2 rounded-full bg-white/25"></div>
</div>
<div className="font-mono text-xs text-white/80 bg-white/5 p-4 rounded-lg flex-grow overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
<p>
<span className="text-electric">const</span>
<span className="text-white">free</span>
                    =
                    <span className="text-electric">true</span>
                    ;
                  </p>
<p className="mt-2 text-gray-400">
                    // no payments, no plans, no trials
                  </p>
<p className="mt-1">
<span className="text-electric">return</span>
<span className="text-white">"K-A-I-R-O-S"</span>
                    ;
                  </p>
<div className="w-2 h-4 bg-electric inline-block ml-1 mt-2 align-middle"></div>
</div>
<p className="mt-4 font-semibold text-white text-lg">Tool Notes</p>
</div>
<div className="relative overflow-hidden rounded-2xl group md:col-span-1 lg:col-span-3 md:row-span-1 bg-white text-black p-6 flex items-center justify-between" style={{opacity: '1', transform: 'none'}}>
<div>
<p className="text-xs font-semibold text-gray-600 uppercase tracking-widest">
                    Access
                  </p>
<p className="text-4xl font-black mt-1">FREE</p>
</div>
<div className="w-12 h-12 rounded-full bg-electric flex items-center justify-center">
<svg className="w-6 h-6 text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl group md:col-span-2 lg:col-span-3 md:row-span-1 bg-black border border-white/10 p-0" style={{opacity: '1', transform: 'none'}}>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(rgb(60, 60, 62) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<svg className="text-white/20 w-32 h-32 opacity-50" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9z M3.6 9h16.8 M3.6 15h16.8 M11.5 3a17 17 0 0 0 0 18 M12.5 3a17 17 0 0 1 0 18"></path>
</svg>
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<div className="w-3 h-3 bg-electric rounded-full animate-ping absolute"></div>
<div className="w-3 h-3 bg-electric rounded-full relative z-10"></div>
</div>
</div>
<div className="absolute bottom-4 left-4">
<p className="text-xs text-gray-400 uppercase tracking-wider">
                    Library
                  </p>
<p className="text-white font-semibold">Public</p>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl group md:col-span-2 lg:col-span-3 md:row-span-1 bg-electric text-black p-6" style={{opacity: '1', transform: 'none'}}>
<div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse-fast"></div>
<div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-black rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
<div className="relative z-10 h-full flex flex-col justify-end">
<h3 className="text-2xl font-semibold italic tracking-tighter">
                    "No plans. No payments."
                  </h3>
</div>
</div>
</div>
</div>
</section>
<div className="relative z-10 bg-charcoal">
<div className="border-t border-white/10 bg-gradient-to-b from-charcoal to-black stagger-fade">
<div className="max-w-7xl mx-auto px-4 py-20">
<div className="text-center mb-16 stagger-fade" style={{opacity: '0', transform: 'translateY(20px) translateZ(0px)'}}>
<h2 className="text-sm font-semibold text-electric uppercase tracking-widest mb-4">
                  Built by Grylax Labs • A Christmas present from Chad Moschino
                </h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
                  Tools you can use instantly.
                </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
<div className="col-span-1">
<h4 className="text-2xl font-semibold mb-6 flex items-center gap-3">
<span className="p-2 bg-white/5 rounded-lg text-electric">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</span>
                    Creator Tools
                  </h4>
<p className="text-gray-400 text-sm leading-relaxed">
                    Design helpers, generators, and utilities for modern content
                    pipelines — all free.
                  </p>
</div>
<div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="border border-white/10 rounded-xl p-4 flex items-center justify-between cursor-pointer group transition-colors card-magnetic">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-electric"></div>
<span className="font-semibold text-sm">Asset Forge</span>
</div>
<svg className="w-4 h-4 opacity-0 group-hover:opacity-100 text-electric transition-opacity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</div>
<div className="border border-white/10 rounded-xl p-4 flex items-center justify-between cursor-pointer group transition-colors">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-electric"></div>
<span className="font-semibold text-sm">Color Matrix</span>
</div>
<svg className="w-4 h-4 opacity-0 group-hover:opacity-100 text-electric transition-opacity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</div>
<div className="border border-white/10 rounded-xl p-4 flex items-center justify-between cursor-pointer group transition-colors">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-electric"></div>
<span className="font-semibold text-sm">Type Scale</span>
</div>
<svg className="w-4 h-4 opacity-0 group-hover:opacity-100 text-electric transition-opacity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</div>
<div className="border border-white/10 rounded-xl p-4 flex items-center justify-between cursor-pointer group transition-colors">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-electric"></div>
<span className="font-semibold text-sm">
                        Motion Primitives
                      </span>
</div>
<svg className="w-4 h-4 opacity-0 group-hover:opacity-100 text-electric transition-opacity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
<div className="col-span-1">
<h4 className="text-2xl font-semibold mb-6 flex items-center gap-3">
<span className="p-2 bg-white/5 rounded-lg text-electric">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"></path>
</svg>
</span>
                    Developer Tools
                  </h4>
<p className="text-gray-400 text-sm leading-relaxed">
                    SDKs, utilities, and snippets — free to use and easy to
                    copy.
                  </p>
</div>
<div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="border border-white/10 rounded-xl p-4 flex items-center justify-between cursor-pointer group transition-colors card-magnetic">
<div className="flex items-center gap-3">
<svg className="w-4 h-4 text-white/40" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
<span className="font-semibold text-sm">React Hooks</span>
</div>
<div className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-gray-300 font-mono">
                      free
                    </div>
</div>
<div className="border border-white/10 rounded-xl p-4 flex items-center justify-between cursor-pointer group transition-colors">
<div className="flex items-center gap-3">
<svg className="w-4 h-4 text-white/40" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
<span className="font-semibold text-sm">Node Snippets</span>
</div>
<div className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-gray-300 font-mono">
                      free
                    </div>
</div>
<div className="border border-white/10 rounded-xl p-4 flex items-center justify-between cursor-pointer group transition-colors">
<div className="flex items-center gap-3">
<svg className="w-4 h-4 text-white/40" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
<span className="font-semibold text-sm">Edge Helpers</span>
</div>
<div className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-gray-300 font-mono">
                      free
                    </div>
</div>
<div className="border border-white/10 rounded-xl p-4 flex items-center justify-between cursor-pointer group transition-colors">
<div className="flex items-center gap-3">
<svg className="w-4 h-4 text-white/40" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
<span className="font-semibold text-sm">ORM Patterns</span>
</div>
<div className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-gray-300 font-mono">
                      free
                    </div>
</div>
</div>
</div>
</div>
</div>
<div className="bg-electric text-charcoal py-24 overflow-hidden relative stagger-fade">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(45deg, rgb(0, 0, 0) 25%, transparent 25%, transparent 75%, rgb(0, 0, 0) 75%, rgb(0, 0, 0)), linear-gradient(45deg, rgb(0, 0, 0) 25%, transparent 25%, transparent 75%, rgb(0, 0, 0) 75%, rgb(0, 0, 0))', backgroundSize: '60px 60px', backgroundPosition: '0px 0px, 30px 30px'}}></div>
<div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
<h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter gradient-text">
                OPEN THE LIBRARY
              </h2>
<p className="text-xl font-medium mb-10 max-w-2xl mx-auto">
                Everything is free. No subscriptions, no upgrades, no checkout.
              </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-black/90 transition-colors shadow-2xl flex items-center justify-center gap-2 glow-pulse">
                  Explore Tools
                  <svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>
<button className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black/10 transition-colors">
                  How it works
                </button>
</div>
</div>
</div>
</div>
<footer className="bg-black text-gray-400 py-16 px-4 border-t border-white/10">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 text-white mb-6">
<div className="bg-electric p-1 rounded-sm">
<svg className="text-charcoal w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
<span className="text-lg font-semibold tracking-tight">
                  K-A-I-R-O-S
                </span>
</div>
<p className="text-sm max-w-xs mb-6">
                Built and designed by Grylax Labs. A Christmas present from Chad
                Moschino—made for creatives, developers, traders, and anyone who
                wants to get more inclusive with AI.
              </p>
<div className="flex gap-4">
<a className="hover:text-white" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9z M3.6 9h16.8 M3.6 15h16.8 M11.5 3a17 17 0 0 0 0 18 M12.5 3a17 17 0 0 1 0 18"></path>
</svg>
</a>
<a className="hover:text-white" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"></path>
</svg>
</a>
</div>
</div>
<div>
<h5 className="text-white font-semibold mb-4">Library</h5>
<ul className="space-y-2 text-sm">
<li>
<a className="hover:text-electric transition-colors" href="#">
                    All Tools
                  </a>
</li>
<li>
<a className="hover:text-electric transition-colors" href="#">
                    New
                  </a>
</li>
<li>
<a className="hover:text-electric transition-colors" href="#">
                    Popular
                  </a>
</li>
<li>
<a className="hover:text-electric transition-colors" href="#">
                    Collections
                  </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white font-semibold mb-4">About</h5>
<ul className="space-y-2 text-sm">
<li>
<a className="hover:text-electric transition-colors" href="#">
                    What is KAIROS?
                  </a>
</li>
<li>
<a className="hover:text-electric transition-colors" href="#">
                    Guidelines
                  </a>
</li>
<li>
<a className="hover:text-electric transition-colors" href="#">
                    Updates
                  </a>
</li>
<li>
<a className="hover:text-electric transition-colors" href="#">
                    Legal
                  </a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2026 K-A-I-R-O-S. Built by Grylax Labs.</p>
<p className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-electric"></span>
              Public Access Enabled
            </p>
</div>
</footer>
</div>
</div>
<div className="noise-bg"></div>


    </>
  );
}
