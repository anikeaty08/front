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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// Mobile Nav Toggle
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMobile.classList.toggle('open');
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-up');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// How It Works Scroll Hijack / Panel Swapping
const howSection = document.getElementById('how');
const panels = document.querySelectorAll('.how-panel');
const dots = document.querySelectorAll('.how-dot');
const fill = document.getElementById('howProgressFill');
const bigNum = document.getElementById('howBigNum');
const bigNumFill = document.getElementById('howBigNumFill');
const title = document.getElementById('howTitle');
const label = document.getElementById('howLabel');

const titles = [
  "Initialize Node & Keys",
  "Market Discovery",
  "Deploy Strategy",
  "Monitor & Scale"
];

if (window.innerWidth > 991) {
  window.addEventListener('scroll', () => {
    if(!howSection) return;
    const rect = howSection.getBoundingClientRect();
    
    // We start processing once top of section hits top of viewport
    const scrollPx = -rect.top; 
    // The total distance we can scroll before section un-sticks
    const totalScroll = rect.height - window.innerHeight; 
    
    let progress = scrollPx / totalScroll;
    progress = Math.max(0, Math.min(1, progress));
    
    fill.style.width = `${progress * 100}%`;
    
    // Determine current step (0 to 3)
    let step = Math.min(3, Math.floor(progress * 4));
    
    // Update Panels
    panels.forEach((p, i) => {
      if(i === step) {
        p.className = 'how-panel active';
      } else if (i < step) {
        p.className = 'how-panel behind';
      } else {
        p.className = 'how-panel';
      }
    });

    // Update Text Data
    bigNum.innerText = `0${step + 1}`;
    bigNumFill.innerText = `0${step + 1}`;
    
    if(title.innerText !== titles[step]) {
      title.classList.remove('visible');
      label.classList.remove('visible');
      setTimeout(() => {
        title.innerText = titles[step];
        label.innerText = `Step ${step + 1} of 4`;
        title.classList.add('visible');
        label.classList.add('visible');
      }, 300);
    }
    
    // Update Dots
    dots.forEach((d, i) => d.classList.toggle('active', i === step));
  });
}

// Pricing Toggle Logic
const toggleSwitch = document.getElementById('billingToggle');
const pricingPrices = document.querySelectorAll('.pricing-price');
const pricingNotes = document.querySelectorAll('.pricing-price-note');

toggleSwitch.addEventListener('click', () => {
  const isAnnual = toggleSwitch.classList.toggle('on');
  
  pricingPrices.forEach(priceEl => {
    const amount = isAnnual ? priceEl.dataset.annual : priceEl.dataset.monthly;
    priceEl.innerHTML = `<sup>$</sup>${amount}`;
  });
  
  pricingNotes.forEach(note => {
    note.innerText = isAnnual ? "per month, billed annually" : "per month, billed monthly";
  });
});

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
      

<nav>
<div className="nav-logo font-mono">
<img alt="Morpheye Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e39306a-3582-4a9f-a07c-588b14db7905_320w.png"/>
    Morpheye
  </div>
<ul className="nav-links font-mono">
<li><a href="#">CLI</a></li>
<li><a href="#">Strategies</a></li>
<li><a href="#">Docs</a></li>
<li><a href="#">Pricing</a></li>
</ul>
<div className="nav-cta">
<button className="btn-nav btn-nav-ghost font-mono">Login</button>
<button className="btn-nav btn-nav-solid font-mono">Download v2.1</button>
</div>
<div className="nav-hamburger" id="hamburger">
<span></span><span></span><span></span>
</div>
</nav>
<div className="nav-mobile font-mono" id="navMobile">
<ul>
<li><a href="#">CLI</a></li>
<li><a href="#">Strategies</a></li>
<li><a href="#">Docs</a></li>
<li><a href="#">Pricing</a></li>
</ul>
<button className="btn-nav btn-nav-solid" style={{marginTop: '20px', width: '100%'}}>Download v2.1</button>
</div>

<section id="hero">
<canvas id="heroCanvas"></canvas>
<div className="hero-orb hero-orb-1"></div>
<div className="hero-orb hero-orb-2"></div>
<div className="hero-orb hero-orb-3"></div>
<div className="hero-orbits">
<div className="hero-orbit hero-orbit-1"><div className="hero-orbit-dot"></div></div>
<div className="hero-orbit hero-orbit-2"><div className="hero-orbit-dot"></div></div>
<div className="hero-orbit hero-orbit-3"><div className="hero-orbit-dot"></div></div>
</div>
<div className="hero-content">
<div className="hero-eyebrow font-mono">
<iconify-icon icon="solar:terminal-outline" strokeWidth="1.5"></iconify-icon>
      CLI Trading Infrastructure
    </div>
<h1 className="hero-title">
      Polymarket Execution,<br/>
<span className="text-gradient">Automated</span>
</h1>
<p className="hero-subtitle font-mono">
      The fastest terminal-based execution engine for prediction markets. Deploy strategies, scan probabilities, and automate your alpha with sub-second latency via CLI.
    </p>
<div className="hero-ctas">
<button className="btn-hero-primary font-mono">
<iconify-icon icon="solar:download-square-outline" strokeWidth="1.5"></iconify-icon>
        curl -sL morpheye.sh
      </button>
<button className="btn-hero-ghost font-mono">
<iconify-icon icon="solar:document-text-outline" strokeWidth="1.5"></iconify-icon>
        Read Docs
      </button>
</div>
<div className="hero-metrics">
<div className="hero-metric">
<span className="hero-metric-val">12ms</span>
<span className="hero-metric-label font-mono">Avg Latency</span>
</div>
<div className="hero-metric-sep"></div>
<div className="hero-metric">
<span className="hero-metric-val">68.4%</span>
<span className="hero-metric-label font-mono">Strat Win Rate</span>
</div>
<div className="hero-metric-sep"></div>
<div className="hero-metric">
<span className="hero-metric-val">$14M+</span>
<span className="hero-metric-label font-mono">Volume Executed</span>
</div>
<div className="hero-metric-sep"></div>
<div className="hero-metric">
<span className="hero-metric-val">24/7</span>
<span className="hero-metric-label font-mono">Node Uptime</span>
</div>
</div>
</div>
</section>

<section id="trust">
<p className="trust-label font-mono">Integrating with top Web3 infrastructure</p>
<div className="logo-bar-wrap">
<div className="logo-track">
<span className="logo-item font-mono">Polymarket</span>
<span className="logo-item font-mono">Polygon</span>
<span className="logo-item font-mono">Alchemy</span>
<span className="logo-item font-mono">Infura</span>
<span className="logo-item font-mono">USDC</span>
<span className="logo-item font-mono">The Graph</span>
<span className="logo-item font-mono">Chainlink</span>
<span className="logo-item font-mono">QuickNode</span>
<span className="logo-item font-mono">Polymarket</span>
<span className="logo-item font-mono">Polygon</span>
<span className="logo-item font-mono">Alchemy</span>
<span className="logo-item font-mono">Infura</span>
<span className="logo-item font-mono">USDC</span>
<span className="logo-item font-mono">The Graph</span>
<span className="logo-item font-mono">Chainlink</span>
<span className="logo-item font-mono">QuickNode</span>
</div>
</div>
</section>

<section className="section" id="features">
<div className="section-sep"></div>
<div className="container">
<div className="section-header">
<span className="section-label">Core Modules</span>
<h2>Everything you need for<br/><span className="text-gradient">algorithmic predictions</span></h2>
<p>From tick-level data scraping to private mempool execution, Morpheye is built for speed and reliability.</p>
</div>
<div className="bento-grid stagger-up" id="bentoGrid">

<div className="bento-card reveal-child">
<div className="bc-grid"></div><div className="bc-shimmer"></div>
<div className="bc-corner bc-corner-tl"></div><div className="bc-corner bc-corner-br"></div>
<div className="bc-header">
<div className="bc-live-dot"></div>
<span className="bc-header-title font-mono">Market Data Stream</span>
<span className="bc-header-tag">WSS</span>
</div>
<div className="bc-body">
<p>Real-time websocket connections to Polymarket orderbooks. Track volume spikes and price anomalies instantly.</p>
<div className="bento-widget">
<div className="bw-status font-mono"><span className="bw-status-label">Global Vol</span><span className="bw-status-val">+$4.2M / 1h</span></div>
<div className="widget-bars">
<div className="widget-bar" style={{height: '45%'}}></div>
<div className="widget-bar" style={{height: '68%'}}></div>
<div className="widget-bar" style={{height: '55%'}}></div>
<div className="widget-bar" style={{height: '82%'}}></div>
<div className="widget-bar" style={{height: '60%'}}></div>
<div className="widget-bar" style={{height: '74%'}}></div>
<div className="widget-bar" style={{height: '50%'}}></div>
<div className="widget-bar" style={{height: '88%'}}></div>
</div>
</div>
</div>
</div>

<div className="bento-card reveal-child">
<div className="bc-grid"></div><div className="bc-shimmer"></div>
<div className="bc-corner bc-corner-tl"></div><div className="bc-corner bc-corner-br"></div>
<div className="bc-header">
<div className="bc-live-dot"></div>
<span className="bc-header-title font-mono">Probability Matrix</span>
<span className="bc-header-tag">Arb</span>
</div>
<div className="bc-body">
<p>Calculate implied probabilities against external data sources. Spot mispriced markets before the crowd catches on.</p>
<div className="bento-widget">
<div className="bw-status font-mono"><span className="bw-status-label">Spread</span><span className="bw-status-val">4.2%</span></div>
<div className="widget-donut">
<svg className="donut-svg" viewbox="0 0 72 72">
<circle cx="36" cy="36" fill="none" r="28" stroke="rgba(0,229,255,0.1)" strokeWidth="8"></circle>
<circle cx="36" cy="36" fill="none" opacity="0.9" r="28" stroke="#00E5FF" stroke-dasharray="110 176" stroke-dashoffset="44" strokeWidth="8"></circle>
<circle cx="36" cy="36" fill="none" opacity="0.8" r="28" stroke="#F87171" stroke-dasharray="66 176" stroke-dashoffset="-66" strokeWidth="8"></circle>
<text fill="#E8E8ED" fontFamily="JetBrains Mono" fontSize="10" font-weight="300" text-anchor="middle" x="36" y="39">YES</text>
</svg>
<div className="donut-labels">
<div className="donut-item"><div className="donut-dot" style={{background: '#00E5FF'}}></div>YES 62¢</div>
<div className="donut-item"><div className="donut-dot" style={{background: '#F87171'}}></div>NO 38¢</div>
</div>
</div>
</div>
</div>
</div>

<div className="bento-card reveal-child">
<div className="bc-grid"></div><div className="bc-shimmer"></div>
<div className="bc-corner bc-corner-tl"></div><div className="bc-corner bc-corner-br"></div>
<div className="bc-header">
<div className="bc-live-dot"></div>
<span className="bc-header-title font-mono">Orderbook Sniper</span>
<span className="bc-header-tag">Exec</span>
</div>
<div className="bc-body">
<p>Define triggers based on depth. Automatically sweep liquidity when specific price thresholds are crossed.</p>
<div className="bento-widget">
<div className="bw-status font-mono"><span className="bw-status-label">Market Depth</span><span className="bw-status-val">ID: 0x4F...</span></div>
<div className="widget-pipeline">
<div className="pipeline-stage"><span className="pipeline-stage-label" style={{color: '#00E5FF'}}>BUY YES</span><div className="pipeline-stage-bar" style={{width: '85%', background: 'var(--accent)'}}></div><span className="pipeline-stage-val">64¢ (4k)</span></div>
<div className="pipeline-stage"><span className="pipeline-stage-label" style={{color: '#00E5FF'}}>BUY YES</span><div className="pipeline-stage-bar" style={{width: '64%', background: 'var(--accent)'}}></div><span className="pipeline-stage-val">63¢ (2k)</span></div>
<div className="pipeline-stage"><span className="pipeline-stage-label" style={{color: '#F87171'}}>SELL YES</span><div className="pipeline-stage-bar" style={{width: '48%', background: '#F87171'}}></div><span className="pipeline-stage-val">66¢ (1k)</span></div>
<div className="pipeline-stage"><span className="pipeline-stage-label" style={{color: '#F87171'}}>SELL YES</span><div className="pipeline-stage-bar" style={{width: '30%', background: '#F87171'}}></div><span className="pipeline-stage-val">67¢ (5k)</span></div>
</div>
</div>
</div>
</div>

<div className="bento-card reveal-child">
<div className="bc-grid"></div><div className="bc-shimmer"></div>
<div className="bc-corner bc-corner-tl"></div><div className="bc-corner bc-corner-br"></div>
<div className="bc-header">
<div className="bc-live-dot"></div>
<span className="bc-header-title font-mono">Execution Logs</span>
<span className="bc-header-tag">Live</span>
</div>
<div className="bc-body">
<p>Monitor your bot's exact thought process. Full stdout logs of every API call, strategy evaluation, and transaction.</p>
<div className="bento-widget">
<div className="bw-status font-mono"><span className="bw-status-label">stdout</span><span className="bw-status-val">tail -f</span></div>
<div className="widget-signals">
<div className="signal-row"><div className="signal-dot"></div>[INFO] Scanning market 0x9a...</div>
<div className="signal-row"><div className="signal-dot warn"></div>[WARN] Spread exceeds max_slippage</div>
<div className="signal-row"><div className="signal-dot hot"></div>[EXEC] Placing limit BUY 1000 YES</div>
<div className="signal-row"><div className="signal-dot"></div>[TX] Hash 0x12bf confirmed (1.2s)</div>
<div className="signal-row"><div className="signal-dot"></div>[INFO] Sleeping until next block...</div>
</div>
</div>
</div>
</div>

<div className="bento-card reveal-child">
<div className="bc-grid"></div><div className="bc-shimmer"></div>
<div className="bc-corner bc-corner-tl"></div><div className="bc-corner bc-corner-br"></div>
<div className="bc-header">
<div className="bc-live-dot"></div>
<span className="bc-header-title font-mono">Portfolio PnL</span>
<span className="bc-header-tag">Wallets</span>
</div>
<div className="bc-body">
<p>Aggregate positions across multiple private keys. Track unrealized profit, ROI, and total value locked in real-time.</p>
<div className="bento-widget">
<div className="bw-status font-mono"><span className="bw-status-label">Total PnL</span><span className="bw-status-val" style={{color: '#4ADE80'}}>+14.2%</span></div>
<div className="widget-team">
<div className="team-row"><div className="team-avatar" style={{background: 'var(--accent)'}}>W1</div><span className="team-name">Main.key</span><div className="team-progress"><div className="team-progress-fill" style={{width: '92%'}}></div></div><span className="team-score" style={{color: '#4ADE80'}}>+$4.2k</span></div>
<div className="team-row"><div className="team-avatar" style={{background: 'var(--accent-dark)'}}>W2</div><span className="team-name">Sniper.key</span><div className="team-progress"><div className="team-progress-fill" style={{width: '78%'}}></div></div><span className="team-score" style={{color: '#4ADE80'}}>+$1.8k</span></div>
<div className="team-row"><div className="team-avatar" style={{background: '#005566'}}>W3</div><span className="team-name">Arb_01.key</span><div className="team-progress"><div className="team-progress-fill" style={{width: '45%'}}></div></div><span className="team-score" style={{color: '#F87171'}}>-$320</span></div>
<div className="team-row"><div className="team-avatar" style={{background: 'var(--accent-dark)', color: '#000'}}>W4</div><span className="team-name">Vault.key</span><div className="team-progress"><div className="team-progress-fill" style={{width: '64%'}}></div></div><span className="team-score" style={{color: '#4ADE80'}}>+$840</span></div>
</div>
</div>
</div>
</div>

<div className="bento-card reveal-child">
<div className="bc-grid"></div><div className="bc-shimmer"></div>
<div className="bc-corner bc-corner-tl"></div><div className="bc-corner bc-corner-br"></div>
<div className="bc-header">
<div className="bc-live-dot"></div>
<span className="bc-header-title font-mono">Node Configs</span>
<span className="bc-header-tag">RPC</span>
</div>
<div className="bc-body">
<p>Seamlessly switch between public and private RPC endpoints to guarantee transaction inclusion during high-volatility events.</p>
<div className="bento-widget">
<div className="bw-status font-mono"><span className="bw-status-label">Active Endpoints</span><span className="bw-status-val">3 RPCs</span></div>
<div className="widget-integrations">
<span className="int-badge">Alchemy (Polygon)</span>
<span className="int-badge">Infura (Mainnet)</span>
<span className="int-badge">QuickNode (WSS)</span>
<span className="int-badge">Local Geth</span>
<span className="int-badge">Ankr</span>
<span className="int-badge" style={{color: 'var(--accent)', borderStyle: 'dashed'}}>+ Custom</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section id="metrics">
<div className="metrics-wrap font-mono">
<div className="metrics-track">
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">12ms</span><span className="metric-label">Execution Speed</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">100+</span><span className="metric-label">Concurrent Markets</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">0.1%</span><span className="metric-label">Slippage Tolerance</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">MEV</span><span className="metric-label">Protection Active</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">Gas</span><span className="metric-label">Auto-Optimization</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">WSS</span><span className="metric-label">Tick-Level Data</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">12ms</span><span className="metric-label">Execution Speed</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">100+</span><span className="metric-label">Concurrent Markets</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">0.1%</span><span className="metric-label">Slippage Tolerance</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">MEV</span><span className="metric-label">Protection Active</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">Gas</span><span className="metric-label">Auto-Optimization</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">WSS</span><span className="metric-label">Tick-Level Data</span></div>
</div>
</div>
</section>

<section id="how">
<div className="section-sep"></div>
<div className="how-sticky" id="howSticky">
<div className="how-bg-orb how-bg-orb-1" id="howOrb1"></div>
<div className="how-bg-orb how-bg-orb-2" id="howOrb2"></div>
<div className="how-bg-dots"></div>
<div className="how-mobile-header">
<span className="section-label font-mono">Workflow</span>
<h2>Set up in <span className="text-gradient">four commands</span></h2>
</div>
<div className="how-inner">

<div className="how-left">
<span className="section-label font-mono" style={{opacity: '1'}}>Workflow</span>
<div className="how-step-counter">
<div className="how-big-num" id="howBigNum">01</div>
<div className="how-big-num-fill" id="howBigNumFill">01</div>
</div>
<div className="how-left-label visible font-mono" id="howLabel">Step 1 of 4</div>
<div className="how-left-title visible" id="howTitle">Initialize Node &amp; Keys</div>
<div className="how-progress"><div className="how-progress-fill" id="howProgressFill"></div></div>
<div className="how-dots">
<div className="how-dot active" data-step="0"></div>
<div className="how-dot" data-step="1"></div>
<div className="how-dot" data-step="2"></div>
<div className="how-dot" data-step="3"></div>
</div>
</div>

<div className="how-right">

<div className="how-panel active" data-panel="0">
<div className="hp-grid"></div><div className="hp-shimmer"></div>
<div className="hp-header">
<div className="hp-live-dot"></div>
<span className="hp-header-title">morpheye init</span>
<span className="hp-header-badge font-mono">Setup</span>
</div>
<div className="hp-body">
<p>Securely store your private keys locally and configure RPC endpoints. Set gas limits and slippage before going live.</p>
<div className="how-panel-widget" style={{background: '#000', padding: '14px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', lineHeight: '1.8'}}>
<div className="hw-status-row font-mono"><span className="hw-status-label">Terminal</span><span className="hw-status-val">morpheye v2.1</span></div>
<div style={{color: '#9CA3AF'}}>$ <span style={{color: '#4ADE80'}}>morpheye</span> <span style={{color: '#60A5FA'}}>init</span></div>
<div style={{color: 'var(--accent)'}}>✓ Keystore directory created</div>
<div style={{color: '#9CA3AF'}}>→ Enter wallet private key: <span style={{color: '#FCD34D'}}>••••••••</span></div>
<div style={{color: 'var(--accent)'}}>✓ Key encrypted &amp; stored at ~/.morpheye/keys/</div>
<div style={{color: '#9CA3AF'}}>→ RPC endpoint: <span style={{color: '#60A5FA'}}>https://polygon-rpc.com</span></div>
<div style={{color: 'var(--accent)'}}>✓ Connection tested (14ms ping)</div>
<div style={{color: '#9CA3AF'}}>→ Max gas (gwei): <span style={{color: '#FCD34D'}}>150</span></div>
<div style={{color: 'var(--accent)'}}>✓ Config saved → <span style={{color: '#9CA3AF'}}>~/.morpheye/config.toml</span></div>
</div>
</div>
</div>

<div className="how-panel" data-panel="1">
<div className="hp-grid"></div><div className="hp-shimmer"></div>
<div className="hp-header">
<div className="hp-live-dot"></div>
<span className="hp-header-title">morpheye scan</span>
<span className="hp-header-badge font-mono">Discovery</span>
</div>
<div className="hp-body">
<p>Scan all active Polymarket contracts for spread anomalies, volume spikes, and probability divergences from your oracle sources.</p>
<div className="how-panel-widget">
<div className="hw-status-row font-mono"><span className="hw-status-label">Markets Found</span><span className="hw-status-val">247 Active</span></div>
<div className="hw-funnel">
<div className="hw-funnel-row">
<span className="hw-funnel-label">Scanned</span>
<div className="hw-funnel-bar-wrap"><div className="hw-funnel-bar" style={{width: '100%'}}></div></div>
<span className="hw-funnel-val">247</span>
</div>
<div className="hw-funnel-row">
<span className="hw-funnel-label">Liquid</span>
<div className="hw-funnel-bar-wrap"><div className="hw-funnel-bar" style={{width: '75%'}}></div></div>
<span className="hw-funnel-val">184</span>
</div>
<div className="hw-funnel-row">
<span className="hw-funnel-label">Spread &gt;2%</span>
<div className="hw-funnel-bar-wrap"><div className="hw-funnel-bar" style={{width: '30%'}}></div></div>
<span className="hw-funnel-val">74</span>
</div>
<div className="hw-funnel-row">
<span className="hw-funnel-label" style={{color: 'var(--accent-light)'}}>Flagged</span>
<div className="hw-funnel-bar-wrap"><div className="hw-funnel-bar" style={{width: '12%', background: 'linear-gradient(90deg,#F59E0B,#FCD34D)'}}></div></div>
<span className="hw-funnel-val" style={{color: '#FCD34D'}}>12</span>
</div>
</div>
</div>
</div>
</div>

<div className="how-panel" data-panel="2">
<div className="hp-grid"></div><div className="hp-shimmer"></div>
<div className="hp-header">
<div className="hp-live-dot"></div>
<span className="hp-header-title">morpheye run --strat</span>
<span className="hp-header-badge font-mono">Execute</span>
</div>
<div className="hp-body">
<p>Deploy a built-in or custom strategy file. The engine evaluates conditions every block and fires limit orders automatically.</p>
<div className="how-panel-widget">
<div className="hw-status-row font-mono"><span className="hw-status-label">Strategy</span><span className="hw-status-val">arb_spread_v3.toml</span></div>
<div className="hw-actions">
<div className="hw-action-row">
<div className="hw-action-dot live"></div>
<span className="hw-action-text">Evaluating block #54,821,044</span>
<span className="hw-action-time">now</span>
</div>
<div className="hw-action-row">
<div className="hw-action-dot done"></div>
<span className="hw-action-text">BUY 500 YES @ 0.61 — filled</span>
<span className="hw-action-time">12s ago</span>
</div>
<div className="hw-action-row">
<div className="hw-action-dot done"></div>
<span className="hw-action-text">Spread closed → exit signal</span>
<span className="hw-action-time">45s ago</span>
</div>
<div className="hw-action-row">
<div className="hw-action-dot done"></div>
<span className="hw-action-text">SELL 500 YES @ 0.65 — filled</span>
<span className="hw-action-time">1m ago</span>
</div>
</div>
</div>
</div>
</div>

<div className="how-panel" data-panel="3">
<div className="hp-grid"></div><div className="hp-shimmer"></div>
<div className="hp-header">
<div className="hp-live-dot"></div>
<span className="hp-header-title">morpheye monitor</span>
<span className="hp-header-badge font-mono">Dashboard</span>
</div>
<div className="hp-body">
<p>Live terminal dashboard with position PnL, pending orders, and system resources in real-time. Unmatched observability directly in your terminal.</p>
<div className="how-panel-widget">
<div className="hw-status-row font-mono">
<span className="hw-status-label">Global PnL</span>
<span className="hw-status-val" style={{color: '#4ADE80'}}>+$6,402.50</span>
</div>
<div className="hw-gauge">
<div className="hw-gauge-ring">
<svg>
<circle className="ring-bg" cx="36" cy="36" r="30"></circle>
<circle className="ring-fill drawn" cx="36" cy="36" r="30"></circle>
</svg>
<div className="hw-gauge-val">98%</div>
</div>
<div className="hw-gauge-meta">
<div className="hw-gauge-row">
<div className="hw-gauge-dot" style={{background: 'var(--accent)'}}></div>
                    CPU Load: 12%
                  </div>
<div className="hw-gauge-row">
<div className="hw-gauge-dot" style={{background: '#4ADE80'}}></div>
                    Mem: 1.2GB/4GB
                  </div>
<div className="hw-gauge-row">
<div className="hw-gauge-dot" style={{background: 'rgba(255,255,255,0.2)'}}></div>
                    Uptime: 14d 6h
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section id="showcase">
<div className="container">
<div className="section-header reveal">
<span className="section-label">Live Environment</span>
<h2>Raw execution, <span className="text-gradient">zero bloat</span></h2>
<p>Drop the sluggish web interfaces. Morpheye gives you direct memory-level access to the EVM from your command line.</p>
</div>
<div className="product-ui-wrap reveal stagger-up">
<div className="ui-titlebar">
<div className="ui-dots">
<div className="ui-dot"></div>
<div className="ui-dot"></div>
<div className="ui-dot"></div>
</div>
<div className="ui-titlebar-text">morpheye@trading-node-01: ~</div>
</div>
<div className="ui-body">
<div className="term-line"><span className="term-prompt">morpheye@trading-node-01:~$</span> <span className="term-cmd">morpheye</span> <span className="term-arg">run</span> <span className="term-param">--strat</span> arb_spread.toml <span className="term-param">--wallet</span> vault_01</div>
<div className="term-line term-sys">[2023-11-04 14:02:11] initializing morpheye v2.1.0...</div>
<div className="term-line term-sys">[2023-11-04 14:02:11] loading encrypted vault keys (0x4a...f9)</div>
<div className="term-line term-success">[2023-11-04 14:02:11] ✓ Connected to Polygon mainnet (Alchemy) - Ping: 12ms</div>
<div className="term-line term-success">[2023-11-04 14:02:12] ✓ WSS orderbook stream established [Polymarket]</div>
<div className="term-line term-sys">[2023-11-04 14:02:12] scanning top 50 markets by volume...</div>
<div className="term-line term-warn">[2023-11-04 14:02:14] ! Target spread identified on 0x8b32... (7.4%)</div>
<div className="term-line term-sys">[2023-11-04 14:02:14-11-04 14:02:14] &gt; Executing limit sweep: BUY 15,000 YES @ 0.42</div>
<div className="term-line term-sys">[2023-11-04 14:02:15] waiting for block confirmation...</div>
<div className="term-line term-success">[2023-11-04 14:02:16] ✓ TX CONFIRMED: 0x9f8c412b... (Gas: 32 gwei)</div>
<div className="term-line term-success">[2023-11-04 14:02:16] ✓ Position acquired. Unrealized PnL: +$0.00</div>
<div className="term-line"><span className="term-prompt">morpheye@trading-node-01:~$</span><span className="term-cursor"></span></div>
</div>
</div>
</div>
</section>

<section id="testimonials">
<div className="container">
<div className="section-header reveal">
<span className="section-label">The Underground</span>
<h2>Trusted by <span className="text-gradient">on-chain quants</span></h2>
</div>
<div className="testimonials-layout">
<div className="testi-featured reveal-left">
<div className="testi-quote-mark">"</div>
<p className="testi-quote">Since moving execution off web interfaces and onto Morpheye's CLI, my average entry latency dropped by 800ms. In high-volume political prediction markets, that fraction of a second is the difference between a 12% arb and missing the fill entirely. It's an indispensable piece of infra.</p>
<div className="testi-author">
<div className="testi-avatar" style={{background: 'var(--accent)'}}>0xK</div>
<div>
<div className="testi-name">0xKellan</div>
<div className="testi-role font-mono">Independent Quant</div>
</div>
</div>
</div>
<div className="testi-stack stagger-up">
<div className="testi-card reveal-child">
<div className="testi-stars">
<iconify-icon className="testi-star" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="testi-star" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="testi-star" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="testi-star" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="testi-star" icon="solar:star-bold"></iconify-icon>
</div>
<p className="testi-quote">"The automated probability matrix completely changed my workflow. I deploy a TOML script and it just prints money while I sleep."</p>
<div className="testi-author">
<div className="testi-avatar" style={{background: '#28C840'}}>ZM</div>
<div>
<div className="testi-name">ZkMaxi</div>
<div className="testi-role font-mono">DeFi Researcher</div>
</div>
</div>
</div>
<div className="testi-card reveal-child">
<div className="testi-stars">
<iconify-icon className="testi-star" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="testi-star" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="testi-star" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="testi-star" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="testi-star" icon="solar:star-bold"></iconify-icon>
</div>
<p className="testi-quote">"Private mempool execution via local nodes has saved me countless times from sandwich attacks on illiquid low-cap markets."</p>
<div className="testi-author">
<div className="testi-avatar" style={{background: '#FBBF24', color: '#000'}}>VB</div>
<div>
<div className="testi-name">VaultBotter</div>
<div className="testi-role font-mono">Node Operator</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section id="pricing">
<div className="container">
<div className="section-header reveal">
<span className="section-label">Deployment Plans</span>
<h2>Scale your <span className="text-gradient">edge</span></h2>
</div>
<div className="pricing-toggle reveal">
<span className="toggle-label font-mono">Monthly</span>
<div className="toggle-switch" id="billingToggle">
<div className="toggle-knob"></div>
</div>
<span className="toggle-label font-mono">Annually <span className="toggle-badge">-20%</span></span>
</div>
<div className="pricing-grid stagger-up">

<div className="pricing-card reveal-child">
<div className="pricing-tier">Node Operator</div>
<div className="pricing-price" data-annual="39" data-monthly="49"><sup>$</sup>49</div>
<div className="pricing-price-note font-mono">per month, billed monthly</div>
<p className="pricing-desc">Perfect for individual traders looking to automate basic execution strategies.</p>
<ul className="pricing-features">
<li className="pricing-feature"><iconify-icon className="pricing-check" icon="solar:check-circle-bold"></iconify-icon> Up to 3 active strategies</li>
<li className="pricing-feature"><iconify-icon className="pricing-check" icon="solar:check-circle-bold"></iconify-icon> 2 connected wallets</li>
<li className="pricing-feature"><iconify-icon className="pricing-check" icon="solar:check-circle-bold"></iconify-icon> Standard WSS stream</li>
<li className="pricing-feature"><iconify-icon className="pricing-check" icon="solar:check-circle-bold"></iconify-icon> Community discord support</li>
</ul>
<button className="pricing-cta pricing-cta-ghost font-mono">Get Started</button>
</div>

<div className="pricing-card featured reveal-child">
<div className="pricing-popular-badge font-mono"><iconify-icon icon="solar:star-outline"></iconify-icon> MOST POPULAR</div>
<div className="pricing-tier">Quant Team</div>
<div className="pricing-price" data-annual="119" data-monthly="149"><sup>$</sup>149</div>
<div className="pricing-price-note font-mono">per month, billed monthly</div>
<p className="pricing-desc">Full access to the probability matrix, unlimited wallets, and private RPC endpoints.</p>
<ul className="pricing-features">
<li className="pricing-feature"><iconify-icon className="pricing-check" icon="solar:check-circle-bold"></iconify-icon> Unlimited active strategies</li>
<li className="pricing-feature"><iconify-icon className="pricing-check" icon="solar:check-circle-bold"></iconify-icon> Unlimited wallets</li>
<li className="pricing-feature"><iconify-icon className="pricing-check" icon="solar:check-circle-bold"></iconify-icon> Priority WSS routing</li>
<li className="pricing-feature"><iconify-icon className="pricing-check" icon="solar:check-circle-bold"></iconify-icon> MEV protection integration</li>
<li className="pricing-feature"><iconify-icon className="pricing-check" icon="solar:check-circle-bold"></iconify-icon> Premium strategy templates</li>
</ul>
<button className="pricing-cta pricing-cta-solid font-mono">Start 14-Day Free Trial</button>
</div>

<div className="pricing-card reveal-child">
<div className="pricing-tier">Institutional</div>
<div className="pricing-price" data-annual="399" data-monthly="499"><sup>$</sup>499</div>
<div className="pricing-price-note font-mono">per month, billed monthly</div>
<p className="pricing-desc">Dedicated infrastructure, white-glove setup, and custom oracle integrations.</p>
<ul className="pricing-features">
<li className="pricing-feature"><iconify-icon className="pricing-check" icon="solar:check-circle-bold"></iconify-icon> Everything in Quant</li>
<li className="pricing-feature"><iconify-icon className="pricing-check" icon="solar:check-circle-bold"></iconify-icon> Dedicated IP endpoints</li>
<li className="pricing-feature"><iconify-icon className="pricing-check" icon="solar:check-circle-bold"></iconify-icon> Custom external oracles</li>
<li className="pricing-feature"><iconify-icon className="pricing-check" icon="solar:check-circle-bold"></iconify-icon> Sub-10ms colo-routing</li>
<li className="pricing-feature"><iconify-icon className="pricing-check" icon="solar:check-circle-bold"></iconify-icon> 24/7 dedicated support</li>
</ul>
<button className="pricing-cta pricing-cta-ghost font-mono">Contact Sales</button>
</div>
</div>
</div>
</section>

<section id="cta-section">
<div className="container reveal">
<h2 className="cta-title">Ready to automate your alpha?</h2>
<p className="cta-sub font-mono">Install the CLI via curl in seconds. Requires Node.js 18+ and a standard Polygon RPC endpoint.</p>
<div className="cta-buttons">
<button className="btn-cta-primary font-mono">
<iconify-icon icon="solar:terminal-square-outline" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
        Install Morpheye v2.1
      </button>
<button className="btn-cta-ghost font-mono">
        Read the Docs
      </button>
</div>
</div>
</section>

<footer>
<div className="container">
<div className="footer-grid">
<div className="footer-brand">
<div className="nav-logo font-mono">
<img alt="Morpheye Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e39306a-3582-4a9f-a07c-588b14db7905_320w.png"/>
          Morpheye
        </div>
<p className="font-mono">The premier CLI trading infrastructure for prediction markets. Built for speed, reliability, and automated execution.</p>
</div>
<div>
<div className="footer-col-title">Product</div>
<ul className="footer-links font-mono">
<li><a href="#">CLI Download</a></li>
<li><a href="#">Pricing</a></li>
<li><a href="#">Changelog</a></li>
<li><a href="#">Status</a></li>
</ul>
</div>
<div>
<div className="footer-col-title">Developers</div>
<ul className="footer-links font-mono">
<li><a href="#">Documentation</a></li>
<li><a href="#">Strategy API</a></li>
<li><a href="#">GitHub</a></li>
<li><a href="#">Bug Bounty</a></li>
</ul>
</div>
<div>
<div className="footer-col-title">Company</div>
<ul className="footer-links font-mono">
<li><a href="#">About Us</a></li>
<li><a href="#">Careers</a></li>
<li><a href="#">Terms of Service</a></li>
<li><a href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="footer-bottom font-mono">
<div className="footer-copy">© 2024 Morpheye Labs. All rights reserved.</div>
<div className="footer-socials">
<a className="social-link" href="#"><iconify-icon icon="ri:twitter-x-fill"></iconify-icon></a>
<a className="social-link-link" href="#"><iconify-icon icon="ri:discord-fill"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
