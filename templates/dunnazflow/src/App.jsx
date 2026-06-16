import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
bg: {
main: 'rgba(var(--bg-main), <alpha-value>)',
surface: 'rgba(var(--bg-surface), <alpha-value>)',
hover: 'rgba(var(--bg-hover), <alpha-value>)'
},
line: {
subtle: 'rgba(var(--line-subtle), <alpha-value>)',
strong: 'rgba(var(--line-strong), <alpha-value>)',
},
text: {
primary: 'rgba(var(--text-primary), <alpha-value>)',
secondary: 'rgba(var(--text-secondary), <alpha-value>)',
tertiary: 'rgba(var(--text-tertiary), <alpha-value>)'
},
brand: {
DEFAULT: 'rgb(var(--brand-color))', // Dynamic Brand Color
dim: 'rgba(var(--brand-color), 0.1)',
accent: '#CDFF50'
},
accent: {
DEFAULT: 'rgb(var(--accent-color))', // Dynamic Accent (Yellow/Blue)
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, rgba(var(--grid-color), 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--grid-color), 0.03) 1px, transparent 1px)",
},
animation: {
'pulse-fast': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scan': 'scan 3s linear infinite',
'ticker': 'ticker 30s linear infinite',
'float': 'float 6s ease-in-out infinite',
'spin-slow': 'spin 3s linear infinite',
'glitch': 'glitch 3s infinite',
'wave': 'wave 8s ease-in-out infinite',
'wave-delayed': 'wave 8s ease-in-out 2s infinite',
'blink': 'blink 2s ease-in-out infinite',
'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
'slide-up': 'slide-up 0.6s ease-out forwards',
'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
},
keyframes: {
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' }
},
ticker: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' }
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' }
},
wave: {
'0%, 100%': {
transform: 'translateY(0) scaleY(1)',
opacity: '0.3'
},
'50%': {
transform: 'translateY(-20px) scaleY(1.2)',
opacity: '0.6'
}
},
blink: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0.3' }
},
'glow-pulse': {
'0%, 100%': {
boxShadow: '0 0 20px rgba(var(--brand-color), 0.3)',
transform: 'scale(1)'
},
'50%': {
boxShadow: '0 0 40px rgba(var(--brand-color), 0.6)',
transform: 'scale(1.05)'
}
},
'slide-up': {
'0%': {
opacity: '0',
transform: 'translateY(30px)'
},
'100%': {
opacity: '1',
transform: 'translateY(0)'
}
},
'slide-in-right': {
'0%': {
opacity: '0',
transform: 'translateX(-30px)'
},
'100%': {
opacity: '1',
transform: 'translateX(0)'
}
}
}
}
}
}



      // --- Theme Management ---
      function toggleTheme() {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('dunnaz_theme', isLight ? 'light' : 'dark');
      }

      // Initialize Theme
      if (localStorage.getItem('dunnaz_theme') === 'light') {
        document.body.classList.add('light-mode');
      }

      // --- Navigation ---
      function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80; // Height of sticky nav
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }

      // --- Accordion Logic ---
      function toggleSection(id) {
        const section = document.getElementById(id);
        if (section) {
          section.classList.toggle('accordion-open');
        }
      }

      // --- Checklist Protocol Logic ---
      function toggleCheckbox(element) {
        // Prevent triggering if clicking directly on a link inside the card
        if (event.target.tagName === 'A' || event.target.closest('a')) return;

        const checkbox = element.querySelector('input[type="checkbox"]');
        if (!checkbox) return;

        checkbox.checked = !checkbox.checked;
        
        // Visual Feedback for Active State
        if(checkbox.checked) {
           element.classList.remove('bg-bg-main', 'border-line-subtle');
           element.classList.add('bg-brand/5', 'border-brand');
        } else {
           element.classList.add('bg-bg-main', 'border-line-subtle');
           element.classList.remove('bg-brand/5', 'border-brand');
        }
        
        updateProgress();
      }

      function updateProgress() {
        const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
        const total = checkboxes.length;
        const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
        
        // Update Counters
        const countEl = document.getElementById('checked-count');
        const totalEl = document.getElementById('total-count');
        if(countEl) countEl.innerText = checked;
        if(totalEl) totalEl.innerText = total;
        
        // Update Bar Width
        const bar = document.getElementById('progress-bar');
        if (bar) {
            const percentage = total === 0 ? 0 : (checked / total) * 100;
            bar.style.width = `${percentage}%`;
            
            // Add glow effect on completion
            if (percentage === 100) {
                bar.classList.add('shadow-[0_0_15px_rgb(var(--brand-color))]');
            } else {
                bar.classList.remove('shadow-[0_0_15px_rgb(var(--brand-color))]');
            }
        }
      }

      function resetChecklist() {
        const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
        checkboxes.forEach(cb => {
          cb.checked = false;
          // Reset card styles
          const card = cb.closest('.glass'); 
          if(card) {
            card.classList.add('bg-bg-main', 'border-line-subtle');
            card.classList.remove('bg-brand/5', 'border-brand');
          }
        });
        updateProgress();
      }

      // --- Initialization ---
      document.addEventListener('DOMContentLoaded', () => {
        // Initialize stats
        updateProgress();
        
        // Optional: Open first section by default if needed
        // toggleSection('checklist');
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise"></div>

<div className="fixed top-0 left-6 w-[1px] h-screen bg-line-subtle hidden xl:block z-40 pointer-events-none transition-colors"></div>
<div className="fixed top-0 right-6 w-[1px] h-screen bg-line-subtle hidden xl:block z-40 pointer-events-none transition-colors"></div>

<nav className="fixed flex border-line-subtle transition-colors z-50 border-b pt-4 pr-6 pb-4 pl-6 top-0 right-0 left-0 backdrop-blur-md items-center justify-between relative">
<a className="flex items-center gap-2 cursor-pointer z-50" href="#">
<div className="w-2 h-2 bg-brand rounded-sm shadow-[0_0_10px_rgb(var(--brand-color))] animate-blink"></div>
<span className="font-mono font-medium tracking-tighter text-lg text-text-primary" style={{}}>
          DUNNAZ
          <span className="text-text-tertiary" style={{}}>_FLOW</span>
</span>
</a>

<div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 items-center gap-1 p-1 rounded-full glass transition-colors z-40">
<button className="px-4 py-1.5 rounded-full text-xs text-text-secondary hover:text-text-primary hover:bg-bg-hover/50 transition-all" onclick="scrollToSection('checklist')" style={{}}>
          Checklist
        </button>
<button className="px-4 py-1.5 rounded-full text-xs text-text-secondary hover:text-text-primary hover:bg-bg-hover/50 transition-all" onclick="scrollToSection('patterns')" style={{}}>
          Patterns
        </button>
<button className="px-4 py-1.5 rounded-full text-xs text-text-secondary hover:text-text-primary hover:bg-bg-hover/50 transition-all" onclick="scrollToSection('tools')" style={{}}>
          Tools
        </button>
<button className="px-4 py-1.5 rounded-full text-xs text-text-secondary hover:text-text-primary hover:bg-bg-hover/50 transition-all" onclick="scrollToSection('templates')" style={{}}>
          Templates
        </button>
</div>

<div className="flex items-center gap-3 z-50">
<a className="hidden lg:flex group items-center gap-2 text-xs font-mono text-text-secondary hover:text-brand transition-colors mr-2" href="#" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
          LIVE MARKETS
        </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-sm border border-line-subtle hover:border-line-strong text-xs font-mono text-text-primary transition-all bg-bg-surface hover:bg-bg-hover" href="https://twitter.com/dunnazflow" target="_blank">
<span style={{}}>DM</span>
<iconify-icon icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="bg-text-primary text-bg-main font-mono font-medium text-xs px-4 py-2 hover:bg-brand transition-colors flex items-center gap-2 rounded-sm relative overflow-hidden group hover:text-white" href="https://t.me/+nZ5dq5brHgUyZTEx" target="_blank">
<span className="relative z-10 hidden sm:inline" style={{}}>
            JOIN TELEGRAM
          </span>
<span className="relative z-10 inline sm:hidden" style={{}}>TELEGRAM</span>
<iconify-icon className="relative z-10" icon="solar:plain-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute inset-0 bg-gradient-to-r from-brand to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
</a>
<button className="border-line-subtle hover:bg-bg-hover text-text-secondary hover:text-text-primary transition-all group overflow-hidden border rounded-full ml-1 pt-2 pr-2 pb-2 pl-2 relative bg-bg-surface" onclick="toggleTheme()">
<div className="relative z-10 flex items-center justify-center">
<iconify-icon className="light-icon text-brand" height="18" icon="solar:sun-2-linear" width="18"></iconify-icon>
<iconify-icon className="dark-icon" icon="solar:moon-linear" width="18"></iconify-icon>
</div>
</button>
</div>
</nav>

<main className="">

<section className="min-h-screen overflow-hidden flex flex-col cyber-grid transition-colors pt-32 pr-6 pb-20 pl-6 relative justify-center">

<div className="absolute top-[20%] right-[20%] w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] pointer-events-none animate-pulse-fast"></div>
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
<div className="lg:col-span-7 flex flex-col gap-6 relative gap-x-6 gap-y-6">
<div className="inline-flex border-line-strong text-brand uppercase glass animate-slide-in-right text-xs tracking-wider font-mono w-fit z-10 border rounded pt-1 pr-3 pb-1 pl-3 relative gap-x-2 gap-y-2 items-center" style={{}}>
<iconify-icon className="animate-pulse" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
              Order Flow Mastery
            </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-text-primary leading-[0.95] relative z-10">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/10 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse-fast"></div>
              DECODE THE
              <br/>
<span className="glitch-effect font-medium relative inline-block text-brand" data-text="FLOW.">
                FLOW.
              </span>
</h1>
<p className="md:text-lg text-text-secondary leading-relaxed animate-slide-up text-base font-light font-sans max-w-xl z-10 relative" style={{animationDelay: '0.2s'}}>
              Learn to read institutional flow before retail catches on.
              <span className="text-text-primary font-normal" style={{}}>
                Level 2, footprint charts, liquidity sweeps.
              </span>
              Pure execution, zero emotion.
            </p>

<div className="flex flex-wrap gap-4 z-10 mt-8 relative gap-x-4 gap-y-4">
<a className="group relative px-6 py-3 bg-brand/10 border border-brand/50 rounded hover:bg-brand/20 transition-all flex items-center gap-3 holo-border" href="https://mmt.gg/" target="_blank">
<iconify-icon className="text-brand group-hover:scale-110 transition-transform" icon="solar:scanner-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div className="flex flex-col">
<span className="font-mono text-xs text-brand/80 uppercase" style={{}}>
                    Scanner
                  </span>
<span className="font-sans font-medium text-sm text-brand" style={{}}>
                    Orderflow (MMT)
                  </span>
</div>
</a>
<a className="group relative px-6 py-3 bg-bg-surface border border-line-strong rounded hover:border-line-subtle hover:bg-bg-hover transition-all flex items-center gap-3 holo-border" href="https://app.hyperliquid.xyz/join/DUNNAZ" target="_blank">
<iconify-icon className="text-text-primary group-hover:scale-110 transition-transform" icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div className="flex flex-col">
<span className="text-text-secondary uppercase text-xs font-mono" style={{}}>
                    Perps
                  </span>
<span className="font-sans font-medium text-sm text-text-primary" style={{}}>
                    Hyperliquid
                  </span>
</div>
</a>
<a className="group border-line-strong hover:border-line-subtle hover:bg-bg-hover transition-all flex items-center gap-3 holo-border border rounded pt-3 pr-6 pb-3 pl-6 relative" href="https://app.lighter.xyz/?referral=DUNNAZ" target="_blank">
<iconify-icon className="text-indigo-400 group-hover:scale-110 transition-transform" icon="solar:diagram-up-outline" strokeWidth="1.5" width="20"></iconify-icon>
<div className="flex flex-col">
<span className="text-text-secondary uppercase text-xs font-mono" style={{}}>
                    Zero Fee Perps
                  </span>
<span className="font-sans font-medium text-sm text-text-primary" style={{}}>
                    Lighter
                  </span>
</div>
</a>
</div>
</div>

<div className="lg:col-span-5 relative perspective-[2000px] h-[540px] flex items-center justify-center">
<div className="absolute w-full aspect-[4/5] max-w-sm trading-panel border rounded-lg shadow-2xl overflow-hidden animate-float group">
<div className="h-8 border-b border-line-subtle bg-bg-surface/50 flex items-center justify-between px-3">
<span className="font-mono text-[10px] text-text-secondary uppercase" style={{}}>
                  ETH-PERP / ORDER FLOW
                </span>
<div className="flex gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 animate-pulse"></div>
<div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
</div>
</div>
<div className="text-xs font-mono h-full pt-4 pr-4 pb-4 pl-4 relative">
<div className="absolute top-0 left-0 w-full h-[1px] bg-brand/50 shadow-[0_0_15px_rgb(var(--brand-color))] animate-scan opacity-40 pointer-events-none z-10"></div>
<div className="flex flex-col h-full relative z-10">
<div className="flex items-center justify-between text-[9px] text-text-tertiary mb-2 border-b border-line-subtle pb-2">
<span>
                      OI:
                      <span className="text-text-primary">$4.2B</span>
</span>
<span>
                      FUNDING:
                      <span className="text-brand">0.0125%</span>
</span>
</div>
<div className="space-y-0.5 mb-3 font-mono text-[9px]">
<div className="flex justify-between text-[8px] text-text-secondary mb-1 opacity-50">
<span>PRICE</span>
<span>SIZE</span>
</div>
<div className="flex justify-between relative text-text-secondary hover:bg-red-500/5 transition-colors">
<div className="absolute right-0 top-0 h-full bg-red-500/10 w-[15%]"></div>
<span className="z-10 relative">3,423.50</span>
<span className="z-10 relative">142,300</span>
</div>
<div className="flex justify-between relative text-red-400 hover:bg-red-500/5 transition-colors">
<div className="absolute right-0 top-0 h-full bg-red-500/10 w-[45%]"></div>
<span className="z-10 relative">3,423.00</span>
<span className="z-10 relative">455,120</span>
</div>
<div className="flex justify-between relative text-red-400 hover:bg-red-500/5 transition-colors">
<div className="absolute right-0 top-0 h-full bg-red-500/10 w-[85%]"></div>
<span className="z-10 relative">3,422.50</span>
<span className="z-10 relative">892,400</span>
</div>
<div className="py-1 text-center text-text-tertiary text-[8px] flex items-center justify-center gap-2 opacity-50">
<span className="w-2 h-[1px] bg-line-subtle"></span>
                      3,422.25
                      <span className="w-2 h-[1px] bg-line-subtle"></span>
</div>
<div className="flex justify-between relative text-brand hover:bg-brand/5 transition-colors">
<div className="absolute right-0 top-0 h-full bg-brand/10 w-[90%]"></div>
<span className="z-10 relative">3,422.00</span>
<span className="z-10 relative">1,204,500</span>
</div>
<div className="flex justify-between relative text-brand hover:bg-brand/5 transition-colors">
<div className="absolute right-0 top-0 h-full bg-brand/10 w-[60%]"></div>
<span className="z-10 relative">3,421.50</span>
<span className="z-10 relative">650,200</span>
</div>
<div className="flex justify-between relative text-text-secondary hover:bg-brand/5 transition-colors">
<div className="absolute right-0 top-0 h-full bg-brand/10 w-[30%]"></div>
<span className="z-10 relative">3,421.00</span>
<span className="z-10 relative">320,100</span>
</div>
</div>
<div className="mt-auto border-t border-line-subtle pt-2 flex-1 flex flex-col justify-end">
<div className="flex justify-between items-center mb-1">
<span className="text-[8px] text-text-secondary">
                        LATEST TRADES
                      </span>
</div>
<div className="space-y-0.5 text-[9px]">
<div className="flex justify-between hover:bg-bg-hover transition-colors px-1">
<span className="text-brand">BUY</span>
<span className="text-text-primary">150.0 ETH</span>
<span className="text-text-tertiary">14:02:45</span>
</div>
<div className="flex justify-between hover:bg-bg-hover transition-colors px-1 opacity-80">
<span className="text-red-400">SELL</span>
<span className="text-text-primary">2.4 ETH</span>
<span className="text-text-tertiary">14:02:42</span>
</div>
<div className="flex justify-between hover:bg-bg-hover transition-colors px-1 opacity-60">
<span className="text-brand">BUY</span>
<span className="text-text-primary">5.2 ETH</span>
<span className="text-text-tertiary">14:02:22</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-line-subtle overflow-hidden z-20 w-full border-t pt-3 pb-3 absolute bottom-0 left-0 backdrop-blur-sm">
<div className="flex whitespace-nowrap animate-ticker font-mono text-[10px] text-text-secondary tracking-widest gap-16 items-center">
<span className="" style={{}}>
              HYPERLIQUID
              <span className="text-brand" style={{}}>HLP +12.4%</span>
</span>
<span className="" style={{}}>
              MMT.GG
              <span className="text-brand" style={{}}>SIGNALS ACTIVE</span>
</span>
<span style={{}}>
              BTC/USD
              <span className="text-text-primary" style={{}}>64,230</span>
</span>
<span className="text-brand" style={{}}>● ORDER FLOW BULLISH</span>
<span style={{}}>
              HYPERLIQUID
              <span className="text-brand" style={{}}>HLP +12.4%</span>
</span>
<span style={{}}>
              MMT.GG
              <span className="text-brand" style={{}}>SIGNALS ACTIVE</span>
</span>
<span style={{}}>
              BTC/USD
              <span className="text-text-primary" style={{}}>64,230</span>
</span>
<span className="text-brand" style={{}}>● ORDER FLOW BULLISH</span>
</div>
</div>
</section>

<section className="border-line-subtle border-b pt-32 pr-6 pb-32 pl-6 relative" id="tools">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div className="">
<h2 className="font-sans font-light text-4xl md:text-5xl text-text-primary mb-4 tracking-tight" style={{}}>
                The Intraday
                <br/>
                Stack.
              </h2>
<p className="font-mono text-sm text-text-secondary" style={{}}>
                Low latency tools for high conviction setups.
              </p>
</div>
<div className="hidden md:block opacity-30">
<iconify-icon className="text-text-primary" icon="solar:server-square-linear" width="48"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-5 h-auto md:h-[600px]">
<div className="md:col-span-2 md:row-span-2 bg-bg-surface border border-line-subtle p-8 relative overflow-hidden group tech-card rounded-xl flex flex-col justify-between holo-border">
<div className="absolute top-0 right-0 p-48 bg-accent/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="z-10 flex flex-col h-full relative justify-between">
<div className="">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded border border-line-strong flex items-center justify-center bg-bg-hover card-icon transition-all duration-300">
<iconify-icon className="text-accent" icon="solar:scanner-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="bg-accent/10 text-accent border border-accent/20 text-[10px] px-2 py-0.5 rounded font-mono animate-pulse" style={{}}>
                      PRIMARY TOOL
                    </span>
</div>
<h3 className="text-3xl text-text-primary font-medium mb-4 tracking-tight" style={{}}>
                    MMT.gg
                  </h3>
<p className="text-text-secondary leading-relaxed text-sm font-mono max-w-sm">
                    Money Monkey Tool. The ultimate screener for identifying
                    flow, outliers, and market anomalies in real-time.
                  </p>
</div>
<div className="mt-auto border-t border-line-subtle pt-6">
<a className="inline-flex items-center text-accent hover:text-text-primary transition-colors cursor-pointer group/launch text-sm font-mono mt-4" href="https://mmt.gg/" target="_blank">
                    LAUNCH SCREENER
                    <iconify-icon className="ml-1 group-hover/launch:translate-x-1 group-hover/launch:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="md:col-span-2 bg-bg-surface border border-line-subtle p-8 relative overflow-hidden group tech-card rounded-xl holo-border">
<div className="relative z-10 flex flex-col md:flex-row h-full justify-between gap-6 items-start md:items-center">
<div className="flex-1">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand" icon="solar:chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-xl text-text-primary font-medium tracking-tight" style={{}}>
                      Hyperliquid
                    </h3>
</div>
<p className="text-text-secondary leading-relaxed text-xs font-mono">
                    High performance decentralized perpetual exchange.
                  </p>
</div>
<a className="px-4 py-2 bg-bg-hover border border-line-subtle hover:bg-brand/10 hover:border-brand/30 hover:text-brand rounded text-xs font-mono text-text-primary transition-all whitespace-nowrap group/btn" href="https://app.hyperliquid.xyz/join/DUNNAZ" style={{}} target="_blank">
                  START TRADING
                  <iconify-icon className="inline-block ml-1 group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<a className="md:col-span-1 border-line-subtle overflow-hidden group tech-card block bg-bg-surface border rounded-xl pt-6 pr-6 pb-6 pl-6 relative holo-border" href="https://app.lighter.xyz/?referral=DUNNAZ" target="_blank">
<div className="absolute top-4 right-4 group-hover:scale-110 transition-transform text-indigo-400">
<iconify-icon className="" icon="solar:diagram-up-outline" strokeWidth="1.5" width="30"></iconify-icon>
</div>
<div className="flex flex-col h-full pt-6 justify-between">
<div className="">
<h3 className="text-lg text-text-primary mb-2 font-medium tracking-tight" style={{}}>
                    Lighter
                  </h3>
<p className="text-[12px] text-text-secondary text-xs font-mono mb-5">
                    Feeless Spot and Perps Platform
                  </p>
</div>
<div className="flex text-[13px] group-hover:text-text-primary transition-colors text-base text-indigo-400 font-mono mt-4 items-center">
                  ZERO FEES
                  <iconify-icon className="group-hover:translate-x-1 transition-transform ml-1" height="10" icon="solar:arrow-right-linear" style={{color: 'rgb(237, 237, 237)'}} width="10"></iconify-icon>
</div>
</div>
</a>
<div className="md:col-span-1 border-line-subtle overflow-hidden group tech-card flex flex-col cursor-pointer hover:border-brand/30 holo-border bg-gradient-to-br from-bg-surface to-bg-main border rounded-xl pt-6 pr-6 pb-6 pl-6 relative justify-between" onclick="scrollToSection('checklist')">
<div className="absolute top-0 right-0 p-24 bg-brand/5 blur-[50px] rounded-full pointer-events-none"></div>
<div className="flex items-start justify-between">
<div className="p-2 bg-bg-hover rounded border border-line-strong group-hover:bg-brand/10 group-hover:text-brand transition-colors text-text-primary">
<iconify-icon className="text-brand" icon="solar:checklist-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="mt-8 z-10 relative">
<h3 className="text-xl text-text-primary font-medium mb-1 tracking-tight" style={{}}>
                  Scalping Protocol
                </h3>
<p className="text-xs text-text-secondary leading-relaxed mb-4" style={{}}>
                  Daily execution checklist.
                </p>
<div className="flex items-center text-[10px] text-text-primary font-mono border-t border-line-subtle pt-3 group-hover:text-brand transition-colors" style={{}}>
                  OPEN CHECKLIST
                  <iconify-icon className="ml-1 group-hover:translate-y-1 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-line-subtle bg-bg-surface group transition-all duration-500" id="patterns">

<div className="max-w-7xl mx-auto px-6 py-12 cursor-pointer flex items-center justify-between hover:bg-bg-hover/30 transition-colors rounded-lg" onclick="toggleSection('patterns')">
<div className="flex items-center gap-6">
<div className="w-16 h-16 rounded-xl bg-bg-main border border-line-strong flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.1)]">
<iconify-icon className="text-brand" icon="solar:graph-new-linear" width="32"></iconify-icon>
</div>
<div>
<h2 className="text-3xl md:text-5xl font-light tracking-tight text-text-primary" style={{}}>
                Market Patterns.
              </h2>
<p className="font-mono text-sm text-text-secondary mt-1" style={{}}>
                Recurring institutional signatures.
                <span className="text-brand text-xs ml-2" style={{}}>
                  [CLICK TO EXPAND]
                </span>
</p>
</div>
</div>
<iconify-icon className="text-text-primary accordion-icon text-3xl opacity-50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>

<div className="accordion-content">
<div className="max-w-7xl mx-auto px-6 pb-20 pt-8 border-t border-line-subtle/50">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">

<div className="group relative bg-bg-main border border-line-subtle rounded-xl p-8 hover:border-brand/50 transition-all duration-300 tech-card">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-xl text-text-primary font-medium tracking-tight" style={{}}>
                      Fade OI Increase
                    </h3>
<p className="text-xs font-mono text-text-secondary mt-1" style={{}}>
                      Trapped Longs • Unwind
                    </p>
</div>
<div className="w-8 h-8 rounded-full bg-bg-surface border border-line-subtle flex items-center justify-center text-text-secondary group-hover:text-brand group-hover:border-brand/30 transition-colors">
<span className="font-mono text-[10px]" style={{}}>01</span>
</div>
</div>
<div className="aspect-video w-full bg-bg-surface/50 rounded-lg border border-line-subtle mb-6 relative overflow-hidden p-6 flex items-center justify-center">
<svg className="w-full h-full drop-shadow-lg overflow-visible" viewbox="0 0 300 150">

<line className="text-text-primary opacity-50" stroke="currentColor" strokeWidth="1.5" x1="20" x2="250" y1="40" y2="40"></line>

<line className="text-text-primary opacity-50" stroke="currentColor" strokeWidth="1.5" x1="20" x2="250" y1="130" y2="130"></line>

<path className="text-text-primary snake-path" d="M 20 85 Q 40 40 60 85 T 100 85 T 140 85 T 180 85 L 200 20 L 210 50 L 230 150" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<text className="fill-brand text-[8px] font-mono tracking-wider" style={{}} text-anchor="middle" x="160" y="20">
                      [fade oi increase]
                    </text>
<text className="fill-text-secondary text-[8px] font-mono" style={{}} text-anchor="end" x="210" y="145">
                      trapped longs unwind
                    </text>

<circle className="animate-pulse shadow-[0_0_10px_#ef4444]" cx="210" cy="50" fill="#ef4444" r="4"></circle>
</svg>
</div>
<div className="space-y-2">
<div className="flex items-start gap-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors">
<iconify-icon className="mt-1 text-brand shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span style={{}}>
                      Price breaks out but returns to range. Fade the open
                      interest increase.
                    </span>
</div>
</div>
</div>

<div className="group relative bg-bg-main border border-line-subtle rounded-xl p-8 hover:border-brand/50 transition-all duration-300 tech-card">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-xl text-text-primary font-medium tracking-tight" style={{}}>
                      Momentum Play
                    </h3>
<p className="text-xs font-mono text-text-secondary mt-1" style={{}}>
                      Breakout • Retest • Continuation
                    </p>
</div>
<div className="w-8 h-8 rounded-full bg-bg-surface border border-line-subtle flex items-center justify-center text-text-secondary group-hover:text-brand group-hover:border-brand/30 transition-colors">
<span className="font-mono text-[10px]" style={{}}>02</span>
</div>
</div>
<div className="aspect-video w-full bg-bg-surface/50 rounded-lg border border-line-subtle mb-6 relative overflow-hidden p-6 flex items-center justify-center">
<svg className="w-full h-full drop-shadow-lg overflow-visible" viewbox="0 0 300 150">
<defs>
<marker fill="var(--text-secondary)" id="arrow" markerheight="6" markerwidth="6" orient="auto" refx="5" refy="3">
<path d="M0,0 L0,6 L6,3 z"></path>
</marker>
</defs>

<line className="text-text-primary opacity-50" stroke="currentColor" strokeWidth="1.5" x1="40" x2="130" y1="80" y2="80"></line>
<text className="fill-text-secondary text-[8px] font-mono" style={{}} x="60" y="70">
                      resistance
                    </text>

<path className="text-text-primary snake-path" d="M 20 120 L 40 90 L 60 120 L 80 85 L 100 115 L 130 50 L 150 70 L 180 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<line marker-end="url(#arrow)" stroke="var(--text-secondary)" strokeWidth="1" x1="105" x2="115" y1="90" y2="70"></line>

<text className="fill-brand text-[8px] font-mono tracking-wider" style={{}} text-anchor="middle" x="180" y="95">
                      [momentum play]
                    </text>
<text className="fill-text-secondary text-[8px] font-mono" style={{}} text-anchor="end" x="210" y="30">
                      new longs hold
                    </text>

<circle className="animate-pulse shadow-[0_0_10px_#22c55e]" cx="150" cy="70" fill="#22c55e" r="4"></circle>
</svg>
</div>
<div className="space-y-2">
<div className="flex items-start gap-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors">
<iconify-icon className="mt-1 text-brand shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span style={{}}>
                      Resistance flips to support. New longs aggressively hold
                      momentum.
                    </span>
</div>
</div>
</div>

<div className="group relative bg-bg-main border border-line-subtle rounded-xl p-8 hover:border-brand/50 transition-all duration-300 tech-card">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-xl text-text-primary font-medium tracking-tight" style={{}}>
                      Liquidation Cascade
                    </h3>
<p className="text-xs font-mono text-text-secondary mt-1" style={{}}>
                      OI Decrease • Inefficiency Refill
                    </p>
</div>
<div className="w-8 h-8 rounded-full bg-bg-surface border border-line-subtle flex items-center justify-center text-text-secondary group-hover:text-brand group-hover:border-brand/30 transition-colors">
<span className="font-mono text-[10px]" style={{}}>03</span>
</div>
</div>
<div className="aspect-video w-full bg-bg-surface/50 rounded-lg border border-line-subtle mb-6 relative overflow-hidden p-6 flex items-center justify-center">
<svg className="w-full h-full drop-shadow-lg overflow-visible" viewbox="0 0 300 150">

<path className="text-text-primary snake-path" d="M 40 40 L 60 70 L 70 60 L 90 90 L 110 85 L 130 95 L 140 130 L 150 140 L 170 110" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<line stroke="var(--text-secondary)" strokeWidth="1" x1="120" x2="135" y1="120" y2="135"></line>
<text className="fill-text-secondary text-[8px] font-mono" style={{}} x="40" y="115">
                      open interest decrease
                    </text>
<text className="fill-brand text-[8px] font-mono" style={{}} x="40" y="125">
                      [liquidation cascade]
                    </text>
<text className="fill-text-secondary text-[8px] font-mono" style={{}} x="180" y="90">
                      refill of inefficiency
                    </text>

<circle className="animate-pulse shadow-[0_0_10px_#22c55e]" cx="150" cy="140" fill="#22c55e" r="4"></circle>
</svg>
</div>
<div className="space-y-2">
<div className="flex items-start gap-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors">
<iconify-icon className="mt-1 text-brand shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span style={{}}>
                      Rapid liquidation wick into demand zone. V-shape recovery
                      expected.
                    </span>
</div>
</div>
</div>

<div className="group relative bg-bg-main border border-line-subtle rounded-xl p-8 hover:border-brand/50 transition-all duration-300 tech-card">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-xl text-text-primary font-medium tracking-tight" style={{}}>
                      Bearish Reclaim
                    </h3>
<p className="text-xs font-mono text-text-secondary mt-1" style={{}}>
                      Trap • Breakdown
                    </p>
</div>
<div className="w-8 h-8 rounded-full bg-bg-surface border border-line-subtle flex items-center justify-center text-text-secondary group-hover:text-brand group-hover:border-brand/30 transition-colors">
<span className="font-mono text-[10px]" style={{}}>04</span>
</div>
</div>
<div className="aspect-video w-full bg-bg-surface/50 rounded-lg border border-line-subtle mb-6 relative overflow-hidden p-6 flex items-center justify-center">
<svg className="w-full h-full drop-shadow-lg overflow-visible" viewbox="0 0 300 150">

<line className="text-text-primary opacity-50" stroke="currentColor" strokeWidth="1.5" x1="20" x2="200" y1="50" y2="50"></line>

<line className="text-text-primary opacity-50" stroke="currentColor" strokeWidth="1.5" x1="20" x2="200" y1="90" y2="90"></line>

<text className="fill-text-secondary text-[8px] font-mono" style={{}} text-anchor="middle" x="110" y="30">
                      new longs aggressively open
                    </text>
<text className="fill-brand text-[8px] font-mono" style={{}} text-anchor="middle" x="110" y="42">
                      [oi + delta increase]
                    </text>

<path className="text-text-primary snake-path" d="M 20 80 L 40 55 L 60 85 L 80 55 L 100 85 L 120 55 L 140 85 L 160 55 L 190 90 L 210 120 L 230 100 L 240 105 L 250 150" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<text className="fill-text-secondary text-[8px] font-mono" style={{}} text-anchor="end" x="210" y="145">
                      longs unwind
                    </text>

<circle className="animate-pulse shadow-[0_0_10px_#ef4444]" cx="240" cy="105" fill="#ef4444" r="4"></circle>
</svg>
</div>
<div className="space-y-2">
<div className="flex items-start gap-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors">
<iconify-icon className="mt-1 text-brand shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span style={{}}>
                      Price breaks range, retests failure. Longs aggressively
                      trapped.
                    </span>
</div>
</div>
</div>

<div className="group relative bg-bg-main border border-line-subtle rounded-xl p-8 hover:border-brand/50 transition-all duration-300 tech-card">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-xl text-text-primary font-medium tracking-tight" style={{}}>
                      Failed Head &amp; Shoulders
                    </h3>
<p className="text-xs font-mono text-text-secondary mt-1" style={{}}>
                      Bear Trap • Reclaim
                    </p>
</div>
<div className="w-8 h-8 rounded-full bg-bg-surface border border-line-subtle flex items-center justify-center text-text-secondary group-hover:text-brand group-hover:border-brand/30 transition-colors">
<span className="font-mono text-[10px]" style={{}}>05</span>
</div>
</div>
<div className="aspect-video w-full bg-bg-surface/50 rounded-lg border border-line-subtle mb-6 relative overflow-hidden p-6 flex items-center justify-center">
<svg className="w-full h-full drop-shadow-lg overflow-visible" viewbox="0 0 300 150">

<line className="text-red-400 opacity-50" stroke="currentColor" strokeWidth="1.5" x1="20" x2="250" y1="110" y2="110"></line>

<path className="text-text-primary snake-path" d="M 30 110 L 60 70 L 90 110 L 120 40 L 150 110 L 180 70 L 210 110 L 230 135 L 250 50" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<text className="fill-text-secondary text-[8px] font-mono" style={{}} text-anchor="middle" x="120" y="30">
                      head &amp; shoulders
                    </text>
<text className="fill-brand text-[8px] font-mono" style={{}} text-anchor="middle" x="230" y="150">
                      [fake breakdown]
                    </text>

<circle className="animate-pulse shadow-[0_0_10px_#22c55e]" cx="230" cy="135" fill="#22c55e" r="4"></circle>
<line stroke="#22c55e" strokeWidth="1.5" x1="235" x2="245" y1="130" y2="120"></line>
<line stroke="#22c55e" strokeWidth="1.5" x1="225" x2="215" y1="130" y2="120"></line>
</svg>
</div>
<div className="space-y-2">
<div className="flex items-start gap-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors">
<iconify-icon className="mt-1 text-brand shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span style={{}}>
                      Classic reversal pattern failure. Bears trapped at
                      neckline breakdown. V-shape recovery ensues.
                    </span>
</div>
</div>
</div>

<div className="group relative bg-bg-main border border-line-subtle rounded-xl p-8 hover:border-brand/50 transition-all duration-300 tech-card">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-xl text-text-primary font-medium tracking-tight" style={{}}>
                      Bull Flag Trap
                    </h3>
<p className="text-xs font-mono text-text-secondary mt-1" style={{}}>
                      Bull Trap • Distribution
                    </p>
</div>
<div className="w-8 h-8 rounded-full bg-bg-surface border border-line-subtle flex items-center justify-center text-text-secondary group-hover:text-brand group-hover:border-brand/30 transition-colors">
<span className="font-mono text-[10px]" style={{}}>06</span>
</div>
</div>
<div className="aspect-video w-full bg-bg-surface/50 rounded-lg border border-line-subtle mb-6 relative overflow-hidden p-6 flex items-center justify-center">
<svg className="w-full h-full drop-shadow-lg overflow-visible" viewbox="0 0 300 150">

<line className="text-red-400 opacity-50" stroke="currentColor" strokeWidth="1.5" x1="80" x2="140" y1="50" y2="65"></line>
<line className="text-red-400 opacity-50" stroke="currentColor" strokeWidth="1.5" x1="80" x2="140" y1="70" y2="85"></line>

<path className="text-text-primary snake-path" d="M 20 130 L 80 50 L 100 60 L 120 55 L 140 65 L 160 40 L 180 80 L 200 140" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<text className="fill-text-secondary text-[8px] font-mono" style={{}} text-anchor="middle" x="110" y="95">
                      bull flag
                    </text>
<text className="fill-brand text-[8px] font-mono" style={{}} text-anchor="middle" x="160" y="30">
                      [fake breakout]
                    </text>

<circle className="animate-pulse shadow-[0_0_10px_#ef4444]" cx="160" cy="40" fill="#ef4444" r="4"></circle>
<line stroke="#ef4444" strokeWidth="1.5" x1="160" x2="160" y1="35" y2="25"></line>
<line stroke="#ef4444" strokeWidth="1.5" x1="155" x2="150" y1="35" y2="30"></line>
<line stroke="#ef4444" strokeWidth="1.5" x1="165" x2="170" y1="35" y2="30"></line>
</svg>
</div>
<div className="space-y-2">
<div className="flex items-start gap-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors">
<iconify-icon className="mt-1 text-brand shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span style={{}}>
                      Retail buys the breakout. Smart money distributes into
                      strength. Rapid reversal targets flag lows.
                    </span>
</div>
</div>
</div>

<div className="group relative bg-bg-main border border-line-subtle rounded-xl p-8 hover:border-brand/50 transition-all duration-300 tech-card">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-xl text-text-primary font-medium tracking-tight" style={{}}>
                      Triangle Expansion
                    </h3>
<p className="text-xs font-mono text-text-secondary mt-1" style={{}}>
                      Stop Hunt • Indecision
                    </p>
</div>
<div className="w-8 h-8 rounded-full bg-bg-surface border border-line-subtle flex items-center justify-center text-text-secondary group-hover:text-brand group-hover:border-brand/30 transition-colors">
<span className="font-mono text-[10px]" style={{}}>07</span>
</div>
</div>
<div className="aspect-video w-full bg-bg-surface/50 rounded-lg border border-line-subtle mb-6 relative overflow-hidden p-6 flex items-center justify-center">
<svg className="w-full h-full drop-shadow-lg overflow-visible" viewbox="0 0 300 150">

<line className="text-red-400 opacity-50" stroke="currentColor" strokeWidth="1.5" x1="60" x2="150" y1="60" y2="80"></line>
<line className="text-red-400 opacity-50" stroke="currentColor" strokeWidth="1.5" x1="30" x2="150" y1="100" y2="80"></line>

<path className="text-text-primary snake-path" d="M 30 100 L 60 60 L 90 90 L 120 70 L 150 80 L 170 40 L 190 120 L 240 30" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<text className="fill-text-secondary text-[8px] font-mono" style={{}} text-anchor="middle" x="100" y="50">
                      triangle
                    </text>
<text className="fill-text-secondary text-[8px] font-mono" style={{}} text-anchor="middle" x="170" y="35">
                      fake
                    </text>
<line stroke="currentColor" strokeWidth="1" x1="170" x2="170" y1="38" y2="42"></line>
<text className="fill-text-secondary text-[8px] font-mono" style={{}} text-anchor="middle" x="190" y="135">
                      fake
                    </text>
<line stroke="currentColor" strokeWidth="1" x1="190" x2="190" y1="128" y2="122"></line>
</svg>
</div>
<div className="space-y-2">
<div className="flex items-start gap-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors">
<iconify-icon className="mt-1 text-brand shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span style={{}}>
                      Both sides stopped out. Volatility expands. Wait for the
                      second fakeout to fade or the reclaim.
                    </span>
</div>
</div>
</div>

<div className="group relative bg-bg-main border border-line-subtle rounded-xl p-8 hover:border-brand/50 transition-all duration-300 tech-card">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-xl text-text-primary font-medium tracking-tight" style={{}}>
                      Range Deviation
                    </h3>
<p className="text-xs font-mono text-text-secondary mt-1" style={{}}>
                      Liquidity Sweep • Rotational
                    </p>
</div>
<div className="w-8 h-8 rounded-full bg-bg-surface border border-line-subtle flex items-center justify-center text-text-secondary group-hover:text-brand group-hover:border-brand/30 transition-colors">
<span className="font-mono text-[10px]" style={{}}>08</span>
</div>
</div>
<div className="aspect-video w-full bg-bg-surface/50 rounded-lg border border-line-subtle mb-6 relative overflow-hidden p-6 flex items-center justify-center">
<svg className="w-full h-full drop-shadow-lg overflow-visible" viewbox="0 0 300 150">

<line className="text-text-primary opacity-50" stroke="currentColor" strokeWidth="1.5" x1="20" x2="250" y1="40" y2="40"></line>
<line className="text-text-primary opacity-50" stroke="currentColor" strokeWidth="1.5" x1="20" x2="250" y1="110" y2="110"></line>

<path className="text-text-primary snake-path" d="M 30 60 L 60 40 L 90 110 L 120 40 L 150 110 L 180 25 L 210 125 L 240 80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<text className="fill-text-secondary text-[8px] font-mono" style={{}} text-anchor="middle" x="70" y="30">
                      ranges
                    </text>
<text className="fill-text-secondary text-[8px] font-mono" style={{}} text-anchor="middle" x="180" y="20">
                      fake
                    </text>
<line stroke="currentColor" strokeWidth="1" x1="180" x2="180" y1="22" y2="28"></line>
<text className="fill-text-secondary text-[8px] font-mono" style={{}} text-anchor="middle" x="210" y="140">
                      fake
                    </text>
<line stroke="currentColor" strokeWidth="1" x1="210" x2="210" y1="130" y2="135"></line>
</svg>
</div>
<div className="space-y-2">
<div className="flex items-start gap-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors">
<iconify-icon className="mt-1 text-brand shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span style={{}}>
                      Markets seek liquidity above highs and below lows before
                      choosing direction. Fade the external breakouts.
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-b border-line-subtle bg-bg-surface group transition-all duration-500" id="cheatsheet">
<div className="max-w-7xl mx-auto px-6 py-12 cursor-pointer flex items-center justify-between hover:bg-bg-hover/30 transition-colors rounded-lg" onclick="toggleSection('cheatsheet')">
<div className="flex items-center gap-6">
<div className="w-16 h-16 rounded-xl bg-bg-main border border-line-strong flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.1)]">
<iconify-icon className="text-brand" icon="solar:notebook-linear" width="32"></iconify-icon>
</div>
<div>
<h2 className="text-3xl md:text-5xl font-light tracking-tight text-text-primary" style={{}}>
                Trading Cheatsheet.
              </h2>
<p className="font-mono text-sm text-text-secondary mt-1" style={{}}>
                Reference definitions &amp; protocols.
                <span className="text-brand text-xs ml-2" style={{}}>
                  [CLICK TO EXPAND]
                </span>
</p>
</div>
</div>
<iconify-icon className="text-text-primary accordion-icon text-3xl opacity-50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="accordion-content">
<div className="max-w-7xl mx-auto px-6 pb-20 pt-8 border-t border-line-subtle/50">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-bg-main border border-line-subtle p-6 rounded-xl hover:border-brand/50 transition-colors flex flex-col">
<div className="text-brand font-mono text-[10px] uppercase mb-2" style={{}}>
                  Reversal Setup
                </div>
<h3 className="text-lg text-text-primary font-medium mb-3" style={{}}>
                  Swing Failure Pattern (SFP)
                </h3>
<p className="text-desc text-sm leading-relaxed" style={{}}>
                  Price fails to hold a swing high/low, trapping traders. Look
                  at internal gaps (15m/1H), resting daily levels, or poor
                  highs. Entry on confirmation close. Combine with orderflow.
                </p>
</div>

<div className="bg-bg-main border border-line-subtle p-6 rounded-xl hover:border-brand/50 transition-colors flex flex-col">
<div className="text-brand font-mono text-[10px] uppercase mb-2" style={{}}>
                  Analysis
                </div>
<h3 className="text-lg text-text-primary font-medium mb-3" style={{}}>
                  Orderflow System
                </h3>
<p className="text-desc text-sm leading-relaxed" style={{}}>
                  Framework using volume spikes, liquidations (50k+ BTC), and
                  trapped delta. "What &amp; Where": e.g., Absorption at a key
                  level. Check volume vs prior 20 candles.
                </p>
</div>

<div className="bg-bg-main border border-line-subtle p-6 rounded-xl hover:border-brand/50 transition-colors flex flex-col">
<div className="text-brand font-mono text-[10px] uppercase mb-2" style={{}}>
                  Psychology
                </div>
<h3 className="text-lg text-text-primary font-medium mb-3" style={{}}>
                  Trapped Traders
                </h3>
<p className="text-desc text-sm leading-relaxed" style={{}}>
                  Positions caught offside. Identified by OI increase + opposing
                  delta. Found at SFPs or after MS changes. Invalidation: Volume
                  node in trapped candle.
                </p>
</div>

<div className="bg-bg-main border border-line-subtle p-6 rounded-xl hover:border-brand/50 transition-colors flex flex-col">
<div className="text-brand font-mono text-[10px] uppercase mb-2" style={{}}>
                  Indicator
                </div>
<h3 className="text-lg text-text-primary font-medium mb-3" style={{}}>
                  Extended Delta
                </h3>
<p className="text-desc text-sm leading-relaxed" style={{}}>
                  Delta stretching away from max/min. Signals potential
                  reversals. Essential for confirming offside traders in SFP
                  setups.
                </p>
</div>

<div className="bg-bg-main border border-line-subtle p-6 rounded-xl hover:border-brand/50 transition-colors flex flex-col">
<div className="text-brand font-mono text-[10px] uppercase mb-2" style={{}}>
                  Benchmark
                </div>
<h3 className="text-lg text-text-primary font-medium mb-3" style={{}}>
                  VWAP
                </h3>
<p className="text-desc text-sm leading-relaxed" style={{}}>
                  Volume Weighted Average Price. Use Session or Anchored
                  (news/highs). Look for absorption at VWAP in trends or mean
                  reversion in ranges.
                </p>
</div>

<div className="bg-bg-main border border-line-subtle p-6 rounded-xl hover:border-brand/50 transition-colors flex flex-col">
<div className="text-brand font-mono text-[10px] uppercase mb-2" style={{}}>
                  Context
                </div>
<h3 className="text-lg text-text-primary font-medium mb-3" style={{}}>
                  Market Structure
                </h3>
<p className="text-desc text-sm leading-relaxed" style={{}}>
                  Identify Balanced (sideways, value acceptance) vs Imbalanced
                  (trending, breaking structure). Plan daily: Trend in
                  imbalance, mean revert in balance.
                </p>
</div>

<div className="bg-bg-main border border-line-subtle p-6 rounded-xl hover:border-brand/50 transition-colors flex flex-col">
<div className="text-brand font-mono text-[10px] uppercase mb-2" style={{}}>
                  Setups
                </div>
<h3 className="text-lg text-text-primary font-medium mb-3" style={{}}>
                  Range Setups
                </h3>
<p className="text-desc text-sm leading-relaxed" style={{}}>
                  In balanced markets (e.g., Monday Range), trade from edges
                  with orderflow confirmation. Target POC retest. Avoid
                  mid-range chops.
                </p>
</div>

<div className="bg-bg-main border border-line-subtle p-6 rounded-xl hover:border-brand/50 transition-colors flex flex-col">
<div className="text-brand font-mono text-[10px] uppercase mb-2" style={{}}>
                  Execution
                </div>
<h3 className="text-lg text-text-primary font-medium mb-3" style={{}}>
                  Trade Management
                </h3>
<p className="text-desc text-sm leading-relaxed" style={{}}>
                  Context First -&gt; Stop Placement -&gt; Execution. Ask: "Did
                  orderflow align?". Scale out or trail based on delta. Always
                  journal.
                </p>
</div>

<div className="bg-bg-main border border-line-subtle p-6 rounded-xl hover:border-brand/50 transition-colors flex flex-col">
<div className="text-brand font-mono text-[10px] uppercase mb-2" style={{}}>
                  Mindset
                </div>
<h3 className="text-lg text-text-primary font-medium mb-3" style={{}}>
                  J-Curve Business
                </h3>
<p className="text-desc text-sm leading-relaxed" style={{}}>
                  Trading is non-linear. Early losses are the cost of learning.
                  Patience and system-building lead to exponential gains later.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-line-subtle bg-bg-surface group transition-all duration-500" id="checklist">

<div className="max-w-7xl mx-auto px-6 py-12 cursor-pointer flex items-center justify-between hover:bg-bg-hover/30 transition-colors rounded-lg" onclick="toggleSection('checklist')">
<div className="flex items-center gap-6">
<div className="w-16 h-16 rounded-xl bg-bg-main border border-line-strong flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.1)]">
<iconify-icon className="text-accent" icon="solar:checklist-minimalistic-linear" width="32"></iconify-icon>
</div>
<div>
<h2 className="text-3xl md:text-5xl font-light tracking-tight text-text-primary" style={{}}>
                Execution Protocol.
              </h2>
<p className="font-mono text-sm text-text-secondary mt-1" style={{}}>
                Daily strict rules.
                <span className="text-brand text-xs ml-2" style={{}}>
                  [CLICK TO EXPAND]
                </span>
</p>
</div>
</div>
<iconify-icon className="text-text-primary accordion-icon text-3xl opacity-50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>

<div className="accordion-content">
<div className="max-w-4xl mx-auto px-6 pb-20 pt-8 border-t border-line-subtle/50">

<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="flex items-center gap-4">
<button className="text-xs font-mono text-brand border border-brand/20 hover:bg-brand/10 bg-brand/5 px-3 py-1.5 rounded transition-all flex items-center gap-2 group/reset" onclick="event.stopPropagation(); resetChecklist()" style={{}}>
<iconify-icon className="group-hover/reset:rotate-180 transition-transform duration-500" icon="solar:restart-linear"></iconify-icon>
                  RESET
                </button>
</div>
<div className="flex flex-col items-end gap-3 mt-4 md:mt-0 w-full md:w-auto">
<div className="text-right">
<div className="text-xs font-mono text-text-secondary uppercase" style={{}}>
                    Completion
                  </div>
<div className="text-xl font-medium text-text-primary">
<span id="checked-count" style={{}}>0</span>
<span className="text-text-tertiary text-sm" style={{}}>
                      /
                      <span id="total-count" style={{}}>14</span>
</span>
</div>
</div>
<div className="w-full md:w-48 h-1.5 bg-line-subtle rounded-full overflow-hidden">
<div className="h-full bg-brand w-0 transition-all duration-500 ease-out" id="progress-bar" style={{width: '0%'}}></div>
</div>
</div>
</div>
<div className="space-y-12">

<div className="group">
<h3 className="text-lg text-text-primary font-medium flex items-center gap-2 mb-6" style={{}}>
<span className="text-brand font-mono text-sm" style={{}}>01.</span>
                  Pre-Market Preparation
                </h3>
<div className="grid grid-cols-1 gap-4 pl-0 md:pl-6">
<div className="flex items-start gap-4 p-4 border border-line-subtle bg-bg-main rounded-lg hover:border-line-strong transition-all cursor-pointer glass" onclick="toggleCheckbox(this)">
<input className="custom-checkbox mt-1 pointer-events-none" type="checkbox"/>
<div>
<h4 className="text-sm font-medium text-text-primary" style={{}}>
                        Check daily timeframe
                      </h4>
<p className="text-xs text-text-secondary mt-1 leading-relaxed" style={{}}>
                        Determine if the market is 1-time framing.
                      </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-line-subtle bg-bg-main rounded-lg hover:border-line-strong transition-all cursor-pointer glass" onclick="toggleCheckbox(this)">
<input className="custom-checkbox mt-1 pointer-events-none" type="checkbox"/>
<div>
<h4 className="text-sm font-medium text-text-primary" style={{}}>
                        Identify market regime
                      </h4>
<p className="text-xs text-text-secondary mt-1 leading-relaxed" style={{}}>
                        Balanced (range) vs Imbalanced (trend).
                      </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-line-subtle bg-bg-main rounded-lg hover:border-line-strong transition-all cursor-pointer glass" onclick="toggleCheckbox(this)">
<input className="custom-checkbox mt-1 pointer-events-none" type="checkbox"/>
<div>
<h4 className="text-sm font-medium text-text-primary" style={{}}>
                        Mark key levels/POIs
                      </h4>
<p className="text-xs text-text-secondary mt-1 leading-relaxed" style={{}}>
                        Poor highs/lows, round numbers.
                      </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-line-subtle bg-bg-main rounded-lg hover:border-line-strong transition-all cursor-pointer glass" onclick="toggleCheckbox(this)">
<input className="custom-checkbox mt-1 pointer-events-none" type="checkbox"/>
<div>
<h4 className="text-sm font-medium text-text-primary" style={{}}>
                        Check Economic Calendar
                      </h4>
<p className="text-xs text-text-secondary mt-1 leading-relaxed" style={{}}>
                        FOMC, CPI, or High Impact news expected?
                      </p>
</div>
</div>
</div>
</div>

<div className="group">
<h3 className="text-lg text-text-primary font-medium flex items-center gap-2 mb-6" style={{}}>
<span className="text-brand font-mono text-sm" style={{}}>02.</span>
                  Entry Checklist
                </h3>
<div className="grid grid-cols-1 gap-4 pl-0 md:pl-6">
<div className="flex items-start gap-4 p-4 border border-line-subtle bg-bg-main rounded-lg hover:border-line-strong transition-all cursor-pointer glass" onclick="toggleCheckbox(this)">
<input className="custom-checkbox mt-1 pointer-events-none" type="checkbox"/>
<div>
<h4 className="text-sm font-medium text-text-primary" style={{}}>
                        Confirm structure change
                      </h4>
<p className="text-xs text-text-secondary mt-1 leading-relaxed" style={{}}>
                        Wait for displacement.
                      </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-line-subtle bg-bg-main rounded-lg hover:border-line-strong transition-all cursor-pointer glass" onclick="toggleCheckbox(this)">
<input className="custom-checkbox mt-1 pointer-events-none" type="checkbox"/>
<div>
<h4 className="text-sm font-medium text-text-primary" style={{}}>
                        Identify liquidity sweeps
                      </h4>
<p className="text-xs text-text-secondary mt-1 leading-relaxed" style={{}}>
                        Monitor 15m internal pivots. Enter on SFP.
                      </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-line-subtle bg-bg-main rounded-lg hover:border-line-strong transition-all cursor-pointer glass" onclick="toggleCheckbox(this)">
<input className="custom-checkbox mt-1 pointer-events-none" type="checkbox"/>
<div>
<h4 className="text-sm font-medium text-text-primary" style={{}}>
                        Check for trapped traders
                      </h4>
<p className="text-xs text-text-secondary mt-1 leading-relaxed" style={{}}>
                        OI increase on wrong side + CVD Divergence.
                      </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-line-subtle bg-bg-main rounded-lg hover:border-line-strong transition-all cursor-pointer glass" onclick="toggleCheckbox(this)">
<input className="custom-checkbox mt-1 pointer-events-none" type="checkbox"/>
<div>
<h4 className="text-sm font-medium text-text-primary" style={{}}>
                        Risk/Reward Calculation
                      </h4>
<p className="text-xs text-text-secondary mt-1 leading-relaxed" style={{}}>
                        Minimum 1:2 R/R ratio is visible.
                      </p>
</div>
</div>
</div>
</div>

<div className="group">
<h3 className="text-lg text-text-primary font-medium flex items-center gap-2 mb-6" style={{}}>
<span className="text-brand font-mono text-sm" style={{}}>03.</span>
                  Trade Management
                </h3>
<div className="grid grid-cols-1 gap-4 pl-0 md:pl-6">
<div className="flex items-start gap-4 p-4 border border-line-subtle bg-bg-main rounded-lg hover:border-line-strong transition-all cursor-pointer glass" onclick="toggleCheckbox(this)">
<input className="custom-checkbox mt-1 pointer-events-none" type="checkbox"/>
<div>
<h4 className="text-sm font-medium text-text-primary" style={{}}>
                        TP1 Taken
                      </h4>
<p className="text-xs text-text-secondary mt-1 leading-relaxed" style={{}}>
                        Remove 50% risk at first trouble area.
                      </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-line-subtle bg-bg-main rounded-lg hover:border-line-strong transition-all cursor-pointer glass" onclick="toggleCheckbox(this)">
<input className="custom-checkbox mt-1 pointer-events-none" type="checkbox"/>
<div>
<h4 className="text-sm font-medium text-text-primary" style={{}}>
                        Stop Loss to Breakeven
                      </h4>
<p className="text-xs text-text-secondary mt-1 leading-relaxed" style={{}}>
                        Once TP1 hit or structure holds.
                      </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-line-subtle bg-bg-main rounded-lg hover:border-line-strong transition-all cursor-pointer glass" onclick="toggleCheckbox(this)">
<input className="custom-checkbox mt-1 pointer-events-none" type="checkbox"/>
<div>
<h4 className="text-sm font-medium text-text-primary" style={{}}>
                        Invalidation Check
                      </h4>
<p className="text-xs text-text-secondary mt-1 leading-relaxed" style={{}}>
                        Manual close if acceptance back in range.
                      </p>
</div>
</div>
</div>
</div>

<div className="group">
<h3 className="text-lg text-text-primary font-medium flex items-center gap-2 mb-6" style={{}}>
<span className="text-brand font-mono text-sm" style={{}}>04.</span>
                  Risk &amp; Psychology
                </h3>
<div className="grid grid-cols-1 gap-4 pl-0 md:pl-6">
<div className="flex items-start gap-4 p-4 border border-line-subtle bg-bg-main rounded-lg hover:border-line-strong transition-all cursor-pointer glass" onclick="toggleCheckbox(this)">
<input className="custom-checkbox mt-1 pointer-events-none" type="checkbox"/>
<div>
<h4 className="text-sm font-medium text-text-primary" style={{}}>
                        Mental State Check
                      </h4>
<p className="text-xs text-text-secondary mt-1 leading-relaxed" style={{}}>
                        No FOMO, no revenge trading, calm state.
                      </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-line-subtle bg-bg-main rounded-lg hover:border-line-strong transition-all cursor-pointer glass" onclick="toggleCheckbox(this)">
<input className="custom-checkbox mt-1 pointer-events-none" type="checkbox"/>
<div>
<h4 className="text-sm font-medium text-text-primary" style={{}}>
                        Max Daily Loss
                      </h4>
<p className="text-xs text-text-secondary mt-1 leading-relaxed" style={{}}>
                        Stop trading if -2% account balance hit.
                      </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 border border-line-subtle bg-bg-main rounded-lg hover:border-line-strong transition-all cursor-pointer glass" onclick="toggleCheckbox(this)">
<input className="custom-checkbox mt-1 pointer-events-none" type="checkbox"/>
<div>
<h4 className="text-sm font-medium text-text-primary" style={{}}>
                        Post-Session Journal
                      </h4>
<p className="text-xs text-text-secondary mt-1 leading-relaxed" style={{}}>
                        Log trade in journal immediately.
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-line-subtle bg-bg-surface border-b pt-24 pb-24 relative" id="templates">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
<div className="">
<h2 className="text-2xl md:text-3xl text-text-primary font-light tracking-tight mb-2" style={{}}>
                MMT Templates
              </h2>
<p className="font-mono text-xs text-text-secondary" style={{}}>
                Import professional layouts.
              </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group border border-line-subtle bg-bg-main rounded-lg p-5 hover:border-brand/30 transition-all glass holo-border">
<div className="flex mb-4 items-start justify-between">
<div className="border-line-subtle flex text-text-secondary bg-bg-surface w-10 h-10 border rounded items-center justify-center group-hover:text-brand group-hover:scale-110 transition-all">
<iconify-icon icon="solar:diagram-up-outline" width="20"></iconify-icon>
</div>
<span className="bg-brand/10 text-brand text-[10px] px-2 py-0.5 rounded font-mono" style={{}}>
                  V3.0
                </span>
</div>
<h3 className="text-text-primary text-sm font-medium" style={{}}>
                Default Setup
              </h3>
<p className="text-text-tertiary text-xs mt-1 mb-4" style={{}}>
                Optimized MMT layout for daily operations.
              </p>
<a className="w-full py-2 bg-bg-surface hover:bg-bg-hover border border-line-subtle rounded text-xs text-text-primary font-mono flex items-center justify-center gap-2 transition-colors group/btn" href="https://mmt.gg/app/terminal?layout_id=019c2010-94fb-70d3-ac8d-49ce41fc2c85" style={{}} target="_blank">
<iconify-icon className="group-hover/btn:rotate-45 transition-transform" icon="solar:link-linear"></iconify-icon>
                LOAD TEMPLATE
              </a>
</div>

<div className="group border border-line-subtle bg-bg-main rounded-lg p-5 hover:border-accent/30 transition-all glass holo-border">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded bg-bg-surface border border-line-subtle flex items-center justify-center text-text-secondary group-hover:text-accent group-hover:scale-110 transition-all">
<iconify-icon icon="solar:graph-new-linear" width="20"></iconify-icon>
</div>
<span className="bg-accent/10 text-accent text-[10px] px-2 py-0.5 rounded font-mono" style={{}}>
                  HEATMAP
                </span>
</div>
<h3 className="text-text-primary text-sm font-medium" style={{}}>
                Heatmap and Liquidations
              </h3>
<p className="text-text-tertiary text-xs mt-1 mb-4" style={{}}>
                High contrast liquidation bands setup.
              </p>
<a className="w-full py-2 bg-bg-surface hover:bg-bg-hover border border-line-subtle rounded text-xs text-text-primary font-mono flex items-center justify-center gap-2 transition-colors group/btn" href="https://mmt.gg/app/terminal?layout_id=019c3ff4-d4f6-7470-b956-caaa30e12df1" style={{}} target="_blank">
<iconify-icon className="group-hover/btn:rotate-45 transition-transform" icon="solar:link-linear"></iconify-icon>
                LOAD TEMPLATE
              </a>
</div>

<div className="group border border-line-subtle bg-bg-main rounded-lg p-5 transition-all glass holo-border hover:border-indigo-400/30">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded bg-bg-surface border border-line-subtle flex items-center justify-center text-text-secondary group-hover:text-indigo-400 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] px-2 py-0.5 rounded font-mono bg-indigo-400/10 text-indigo-400" style={{}}>
                  PRO
                </span>
</div>
<h3 className="text-text-primary text-sm font-medium" style={{}}>
                Flow_Master_Ultrawide.json
              </h3>
<p className="text-text-tertiary text-xs mt-1 mb-4" style={{}}>
                Complex layout for ultrawide monitors.
              </p>
<button className="w-full py-2 bg-bg-surface hover:bg-bg-hover border border-line-subtle rounded text-xs text-text-primary font-mono flex items-center justify-center gap-2 transition-colors group/btn opacity-50 cursor-not-allowed" style={{}}>
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
                LOCKED
              </button>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-line-subtle bg-bg-surface relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center px-6 relative z-10">
<h2 className="text-4xl md:text-5xl font-light text-text-primary mb-8 tracking-tight" style={{}}>
            Stop trading blind.
          </h2>
<p className="font-mono text-sm text-text-secondary mb-10 max-w-lg mx-auto" style={{}}>
            Join the community on Telegram. Get real-time information on trading
            setups, flow alerts, and market mechanics.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="bg-brand font-mono font-medium text-xs px-8 py-4 uppercase tracking-wide transition-all duration-300 rounded-sm inline-flex items-center justify-center gap-2 group relative overflow-hidden hover:bg-white text-white" href="https://t.me/+nZ5dq5brHgUyZTEx" target="_blank">
<span className="relative z-10" style={{}}>
<iconify-icon icon="solar:plain-3-bold"></iconify-icon>
                Join Telegram
              </span>
<span className="absolute inset-0 bg-gradient-to-r from-brand to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
</a>
</div>
</div>

<div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
</section>
</main>

<footer className="pt-20 pb-10 bg-bg-main relative border-t border-line-subtle transition-colors">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 bg-brand rounded-full animate-pulse"></div>
<span className="font-mono font-medium tracking-tighter text-sm text-text-primary" style={{}}>
                DUNNAZ
                <span className="text-text-tertiary" style={{}}>_FLOW</span>
</span>
</div>
<p className="font-mono text-[10px] text-text-secondary leading-relaxed max-w-[200px]" style={{}}>
              Educational content for flow trading and market mechanics.
            </p>
</div>
<div className="flex flex-col gap-3">
<div className="font-mono text-[10px] text-text-tertiary mb-2" style={{}}>
              PLATFORMS
            </div>
<a className="font-sans text-xs text-text-secondary hover:text-text-primary transition-colors" href="https://app.hyperliquid.xyz/join/DUNNAZ" style={{}} target="_blank">
              Hyperliquid
            </a>
<a className="font-sans text-xs text-text-secondary hover:text-text-primary transition-colors" href="https://app.lighter.xyz/?referral=DUNNAZ" style={{}} target="_blank">
              Lighter (Zero Fees)
            </a>
<a className="font-sans text-xs text-text-secondary hover:text-text-primary transition-colors" href="https://mmt.gg/" style={{}} target="_blank">
              MMT.gg
            </a>
</div>
<div className="col-span-2 md:col-span-1 flex flex-col justify-end">
<div className="w-full bg-bg-surface rounded border border-line-subtle p-4 glass">
<div className="flex items-center justify-between mb-2">
<span className="font-mono text-[9px] text-text-secondary" style={{}}>
                  SYSTEM STATUS
                </span>
<span className="font-mono text-[9px] text-brand flex items-center gap-1" style={{}}>
<span className="w-1 h-1 rounded-full bg-brand animate-pulse"></span>
                  OPERATIONAL
                </span>
</div>
<div className="w-full h-1 bg-text-secondary/10 rounded-full overflow-hidden">
<div className="w-full h-full bg-brand opacity-80"></div>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-line-subtle flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-mono text-[10px] text-text-tertiary" style={{}}>
            © 2026 DUNNAZ FLOW. FOR EDUCATIONAL USE ONLY.
          </p>
<div className="flex gap-4">
<a className="text-text-tertiary hover:text-text-primary transition-colors hover:scale-110" href="https://twitter.com/dunnazflow" target="_blank">
<iconify-icon icon="ri:twitter-x-line" width="16"></iconify-icon>
</a>
<a className="text-text-tertiary hover:text-text-primary transition-colors hover:scale-110" href="https://t.me/+nZ5dq5brHgUyZTEx" target="_blank">
<iconify-icon icon="mingcute:telegram-line" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
