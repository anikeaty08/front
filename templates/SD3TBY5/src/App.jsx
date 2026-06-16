import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
  // Navigation functionality
  function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section-page').forEach(section => {
      section.classList.remove('active');
    });
    
    // Show target section
    document.getElementById(sectionId).classList.add('active');
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
  }
  
  // Demo functionality
  function showDemo(demoId) {
    // Hide all demo contents
    document.querySelectorAll('.demo-content').forEach(content => {
      content.classList.remove('active');
    });
    
    // Show target demo
    document.getElementById(`demo-${demoId}`).classList.add('active');
    
    // Update demo nav buttons
    document.querySelectorAll('.demo-nav-button').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-demo="${demoId}"]`).classList.add('active');
  }
  
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Form submission
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your interest! We\'ll be in touch within 24 hours.');
  });
  
  // Animate counters when visible
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated-counter');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.metric-large').forEach(el => {
    observer.observe(el);
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 overflow-hidden">
<iframe className="absolute inset-0 w-full h-full border-0" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW/"></iframe>
<div className="absolute inset-0 bg-black/50"></div>
</div>

<nav className="relative z-20 container mx-auto px-6 py-6 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-zap w-6 h-6 text-blue-400"></svg>
<span className="font-mono text-lg tracking-tight">zerohuman</span>
</div>
<div className="hidden md:flex gap-8 text-sm text-gray-300">
<button className="nav-btn active" data-section="hero" onclick="showSection('hero')">Home</button>
<button className="nav-btn" data-section="about" onclick="showSection('about')">About Us</button>
<button className="nav-btn" data-section="agents" onclick="showSection('agents')">Agents</button>
<button className="nav-btn" data-section="live" onclick="showSection('live')">Intelligence Hub</button>
<button className="nav-btn" data-section="contact" onclick="showSection('contact')">Contact</button>
</div>
<button className="hidden md:block px-4 py-2 text-sm border border-gray-700 rounded-md hover:bg-white/5" onclick="showSection('contact')">Request access</button>
</nav>
<div className="relative z-20 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

<section className="section-page active relative z-20" id="hero">
<header className="container mx-auto px-6 py-28 lg:py-40">
<div className="max-w-3xl">
<p className="uppercase text-xs tracking-widest text-blue-400 mb-4">Real-time. Autonomous. Zero dashboards.</p>
<h1 className="text-4xl sm:text-5xl lg:text-[56px] tracking-tight font-semibold leading-tight mb-6">
        AI Agents that Power Your <span className="text-blue-400">Entire Data OS</span>
</h1>
<p className="text-lg text-gray-200 mb-10 max-w-xl">
        Plug us in, automate ETL, optimize spend, monitor quality, drive ML, and never open another BI dashboard. Your data stack just hired its own intelligent ops, analytics, and innovation team.
      </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-md" onclick="showSection('contact')">Get early access</button>
<button className="border border-gray-700 hover:bg-white/5 px-6 py-3 rounded-md flex items-center gap-2" onclick="showSection('live')">
<svg className="lucide lucide-activity w-4 h-4"></svg> Intelligence Hub
        </button>
</div>
</div>
</header>
</section>

<section className="section-page py-20 relative z-20" id="about">
<div className="container mx-auto px-6 max-w-3xl">
<h2 className="text-4xl font-semibold tracking-tight mb-5 text-white">About Us</h2>
<p className="text-xl text-gray-300 mb-10 leading-8">
<span className="block mb-3">At zerohuman, we believe the world's greatest breakthroughs will come from giving every organization the superpower of autonomous intelligence—not just to understand the past, but to continuously shape a better future.</span>
<span className="block mb-3">We are a global, mission-driven team of engineers, scientists, and dreamers. We've seen how complexity, overload, and inertia block progress. We founded zerohuman to change that—to build a world where AI agents handle the grunt work, so humans can focus on vision, creativity, and impact.</span>
<span className="block">We're inspired by the potential of data, but even more by what humans can do when freed from its burden. Our mission: unlock every company's ability to learn, adapt, and transform—autonomously, intelligently, and at scale.</span>
</p>
<div className="grid md:grid-cols-3 gap-7">
<div className="flex flex-col gap-2 items-center text-center">
<svg className="lucide lucide-flame w-8 h-8 text-orange-300"></svg>
<div className="text-lg font-semibold text-white">Driven by Purpose</div>
<div className="text-gray-300 text-sm">We're here to make a tangible, positive difference for people, businesses, and the world.</div>
</div>
<div className="flex flex-col gap-2 items-center text-center">
<svg className="lucide lucide-shield-check w-8 h-8 text-yellow-300"></svg>
<div className="text-lg font-semibold text-white">Built for Trust</div>
<div className="text-gray-300 text-sm">Security, privacy, and ethics are at the core of every line of code and every decision we make.</div>
</div>
<div className="flex flex-col gap-2 items-center text-center">
<svg className="lucide lucide-zap w-8 h-8 text-cyan-300"></svg>
<div className="text-lg font-semibold text-white">Inspired by Possibility</div>
<div className="text-gray-300 text-sm">We dream big, move fast, and believe the best is yet to come—powered by autonomous intelligence.</div>
</div>
</div>
</div>
</section>

<section className="section-page py-20 relative z-20" id="agents">
<div className="readable-bg py-20">
<div className="container mx-auto px-6 max-w-6xl">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-3 text-white flex items-center gap-3">
<svg className="lucide lucide-circuit-board w-8 h-8 text-cyan-300"></svg>
        Data OS Agent Ecosystem
      </h2>
<p className="text-lg text-gray-200 mb-12 max-w-3xl">
        A fully autonomous, modular suite of AI agents—each focused on a critical business outcome. Start with immediate ROI, expand to strategic automation.
      </p>

<div className="mb-12">
<div className="section-header">
<div className="flex items-center gap-3 mb-2">
<span className="text-3xl">💰</span>
<span className="text-2xl font-semibold tracking-tight text-white">Immediate Business Value</span>
<span className="agent-label agent-live ml-auto">LIVE – DELIVERING ROI</span>
</div>
<p className="text-gray-200">Transform your data costs and efficiency starting day one. These agents pay for themselves within 30 days.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="agent-card live p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-green-500/20 rounded-lg">
<svg className="lucide lucide-piggy-bank w-6 h-6 text-green-400"></svg>
</div>
<div>
<span className="font-semibold text-lg tracking-tight text-white block">Cost Optimization</span>
<span className="agent-label agent-live">LIVE</span>
</div>
</div>
<div className="text-gray-100 text-base leading-relaxed">
<span className="font-semibold text-green-400 text-lg">Avg 35% cost reduction:</span> Eliminates cloud waste, optimizes infrastructure spend, and consolidates tool sprawl across your entire data stack.
            </div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="text-sm text-gray-300">💡 Real impact: $2.1M saved in Q1 alone</div>
</div>
</div>

<div className="agent-card live p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-cyan-500/20 rounded-lg">
<svg className="lucide lucide-bar-chart w-6 h-6 text-cyan-400"></svg>
</div>
<div>
<span className="font-semibold text-lg tracking-tight text-white block">ROI Analytics</span>
<span className="agent-label agent-live">LIVE</span>
</div>
</div>
<div className="text-gray-100 text-base leading-relaxed">
<span className="font-semibold text-cyan-400 text-lg">Prove business value:</span> Measures data ROI, tracks KPIs, and provides executive dashboards showing concrete business impact.
            </div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="text-sm text-gray-300">📊 346% ROI in 3 months</div>
</div>
</div>

<div className="agent-card live p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-blue-500/20 rounded-lg">
<svg className="lucide lucide-cpu w-6 h-6 text-blue-400"></svg>
</div>
<div>
<span className="font-semibold text-lg tracking-tight text-white block">Resource Efficiency</span>
<span className="agent-label agent-live">LIVE</span>
</div>
</div>
<div className="text-gray-100 text-base leading-relaxed">
<span className="font-semibold text-blue-400 text-lg">60% faster processing:</span> Optimizes compute resources, reduces query execution time, and maximizes infrastructure utilization.
            </div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="text-sm text-gray-300">⚡ From 4hrs to 90min processing</div>
</div>
</div>
</div>
</div>

<div className="mb-12">
<div className="section-header">
<div className="flex items-center gap-3 mb-2">
<span className="text-3xl">🛡️</span>
<span className="text-2xl font-semibold tracking-tight text-white">Strategic Risk Mitigation</span>
<span className="agent-label agent-upcoming ml-auto">COMING 2025</span>
</div>
<p className="text-gray-200">Enterprise-grade governance, security, and compliance—automatically managed and continuously monitored.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="agent-card upcoming p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-blue-500/20 rounded-lg">
<svg className="lucide lucide-flag w-6 h-6 text-blue-400"></svg>
</div>
<div>
<span className="font-semibold text-lg tracking-tight text-white block">Data Governance</span>
<span className="agent-label agent-upcoming">Q3 2025</span>
</div>
</div>
<div className="text-gray-100 text-base leading-relaxed">
<span className="font-semibold text-blue-400 text-lg">Automated compliance:</span> Enforces data policies, manages access controls, and ensures regulatory compliance (GDPR, SOX, HIPAA).
            </div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="text-sm text-gray-300">🎯 Zero compliance violations</div>
</div>
</div>

<div className="agent-card upcoming p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-blue-500/20 rounded-lg">
<svg className="lucide lucide-shield w-6 h-6 text-blue-400"></svg>
</div>
<div>
<span className="font-semibold text-lg tracking-tight text-white block">Security Monitoring</span>
<span className="agent-label agent-upcoming">Q3 2025</span>
</div>
</div>
<div className="text-gray-100 text-base leading-relaxed">
<span className="font-semibold text-blue-400 text-lg">Zero-trust security:</span> Monitors data access patterns, detects anomalous behavior, and prevents security breaches.
            </div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="text-sm text-gray-300">🔒 Real-time threat detection</div>
</div>
</div>

<div className="agent-card upcoming p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-blue-500/20 rounded-lg">
<svg className="lucide lucide-file-text w-6 h-6 text-blue-400"></svg>
</div>
<div>
<span className="font-semibold text-lg tracking-tight text-white block">Compliance Docs</span>
<span className="agent-label agent-upcoming">Q4 2025</span>
</div>
</div>
<div className="text-gray-100 text-base leading-relaxed">
<span className="font-semibold text-blue-400 text-lg">Audit-ready documentation:</span> Maintains comprehensive data lineage, audit trails, and compliance reports.
            </div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="text-sm text-gray-300">📋 Automated audit preparation</div>
</div>
</div>
</div>
</div>

<div className="mb-12">
<div className="section-header">
<div className="flex items-center gap-3 mb-2">
<span className="text-3xl">⚙️</span>
<span className="text-2xl font-semibold tracking-tight text-white">Operational Excellence</span>
<span className="agent-label agent-upcoming ml-auto">COMING 2025</span>
</div>
<p className="text-gray-200">Self-healing infrastructure and autonomous operations that eliminate downtime and manual intervention.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="agent-card upcoming p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-pink-500/20 rounded-lg">
<svg className="lucide lucide-heart-pulse w-6 h-6 text-pink-400"></svg>
</div>
<div>
<span className="font-semibold text-lg tracking-tight text-white block">Self-Healing Infrastructure</span>
<span className="agent-label agent-upcoming">Q2 2025</span>
</div>
</div>
<div className="text-gray-100 text-base leading-relaxed">
<span className="font-semibold text-pink-400 text-lg">99.9%+ uptime:</span> Detects and fixes pipeline failures, optimizes performance, and prevents outages before they happen.
            </div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="text-sm text-gray-300">🚀 Zero unplanned downtime</div>
</div>
</div>

<div className="agent-card upcoming p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-green-500/20 rounded-lg">
<svg className="lucide lucide-check-circle w-6 h-6 text-green-400"></svg>
</div>
<div>
<span className="font-semibold text-lg tracking-tight text-white block">Data Quality</span>
<span className="agent-label agent-upcoming">Q2 2025</span>
</div>
</div>
<div className="text-gray-100 text-base leading-relaxed">
<span className="font-semibold text-green-400 text-lg">99%+ data accuracy:</span> Continuous monitoring, intelligent anomaly detection, and automated data cleansing.
            </div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="text-sm text-gray-300">✨ Perfect data, every time</div>
</div>
</div>

<div className="agent-card upcoming p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-blue-500/20 rounded-lg">
<svg className="lucide lucide-plug w-6 h-6 text-blue-400"></svg>
</div>
<div>
<span className="font-semibold text-lg tracking-tight text-white block">Integration Automation</span>
<span className="agent-label agent-upcoming">Q3 2025</span>
</div>
</div>
<div className="text-gray-100 text-base leading-relaxed">
<span className="font-semibold text-blue-400 text-lg">Zero-code integrations:</span> Automatically connects new data sources, handles schema changes, and eliminates integration friction.
            </div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="text-sm text-gray-300">🔌 Plug &amp; play everything</div>
</div>
</div>
</div>
</div>

<div className="mb-12">
<div className="section-header">
<div className="flex items-center gap-3 mb-2">
<span className="text-3xl">🚀</span>
<span className="text-2xl font-semibold tracking-tight text-white">Competitive Intelligence</span>
<span className="agent-label agent-future ml-auto">2026 &amp; BEYOND</span>
</div>
<p className="text-gray-200">Next-generation AI that transforms your organization into a self-evolving, intelligent enterprise.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="agent-card future p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-purple-500/20 rounded-lg">
<svg className="lucide lucide-crystal-ball w-6 h-6 text-purple-400"></svg>
</div>
<div>
<span className="font-semibold text-lg tracking-tight text-white block">Predictive Analytics</span>
<span className="agent-label agent-future">2026</span>
</div>
</div>
<div className="text-gray-100 text-base leading-relaxed">
<span className="font-semibold text-purple-400 text-lg">Future-ready insights:</span> Advanced ML models that predict market trends, customer behavior, and business opportunities.
            </div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="text-sm text-gray-300">🔮 See the future first</div>
</div>
</div>

<div className="agent-card future p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-purple-500/20 rounded-lg">
<svg className="lucide lucide-lightbulb w-6 h-6 text-purple-400"></svg>
</div>
<div>
<span className="font-semibold text-lg tracking-tight text-white block">Innovation Discovery</span>
<span className="agent-label agent-future">2026</span>
</div>
</div>
<div className="text-gray-100 text-base leading-relaxed">
<span className="font-semibold text-purple-400 text-lg">AI-powered innovation:</span> Discovers hidden patterns, suggests new business models, and identifies breakthrough opportunities.
            </div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="text-sm text-gray-300">💡 Unlock hidden potential</div>
</div>
</div>

<div className="agent-card future p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-purple-500/20 rounded-lg">
<svg className="lucide lucide-brain w-6 h-6 text-purple-400"></svg>
</div>
<div>
<span className="font-semibold text-lg tracking-tight text-white block">Autonomous Strategy</span>
<span className="agent-label agent-future">2027</span>
</div>
</div>
<div className="text-gray-100 text-base leading-relaxed">
<span className="font-semibold text-purple-400 text-lg">Self-evolving intelligence:</span> Continuously adapts strategy, optimizes operations, and drives autonomous business evolution.
            </div>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="text-sm text-gray-300">🧠 AI-powered evolution</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-page py-20 relative z-20" id="live">
<div className="readable-bg py-20">
<div className="container mx-auto px-6 max-w-6xl">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-3 text-white flex items-center gap-3">
<svg className="lucide lucide-activity w-8 h-8 text-green-400"></svg>
        Intelligence Hub
      </h2>
<p className="text-lg text-gray-200 mb-8 max-w-3xl">
        Real-time insights into how our AI agents are transforming data operations across industries. Watch autonomous intelligence in action.
      </p>

<div className="demo-nav">
<button className="demo-nav-button active" data-demo="metrics" onclick="showDemo('metrics')">
<svg className="lucide lucide-bar-chart w-4 h-4"></svg>
          Live Metrics
        </button>
<button className="demo-nav-button" data-demo="architecture" onclick="showDemo('architecture')">
<svg className="lucide lucide-network w-4 h-4"></svg>
          System Architecture
        </button>
<button className="demo-nav-button" data-demo="slack" onclick="showDemo('slack')">
<svg className="lucide lucide-message-circle w-4 h-4"></svg>
          Agent Communications
        </button>
<button className="demo-nav-button" data-demo="insights" onclick="showDemo('insights')">
<svg className="lucide lucide-brain w-4 h-4"></svg>
          AI Insights
        </button>
</div>

<div className="demo-content active" id="demo-metrics">
<div className="dashboard-grid mb-8">
<div className="metric-card" style={{-AccentGradient: 'linear-gradient(90deg, #10b981, #34d399)'}}>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-dollar-sign w-5 h-5 text-green-400"></svg>
<span className="text-gray-300 font-medium">Cost Savings</span>
</div>
<div className="metric-large text-green-400 animated-counter">$2.1M</div>
<div className="metric-trend trend-up">
<svg className="lucide lucide-trending-up w-4 h-4"></svg>
<span>+35% this quarter</span>
</div>
</div>
<div className="metric-card" style={{-AccentGradient: 'linear-gradient(90deg, #3b82f6, #60a5fa)'}}>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-zap w-5 h-5 text-blue-400"></svg>
<span className="text-gray-300 font-medium">Processing Speed</span>
</div>
<div className="metric-large text-blue-400 animated-counter">60%</div>
<div className="metric-trend trend-up">
<svg className="lucide lucide-trending-up w-4 h-4"></svg>
<span>faster than baseline</span>
</div>
</div>
<div className="metric-card" style={{-AccentGradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)'}}>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-shield-check w-5 h-5 text-purple-400"></svg>
<span className="text-gray-300 font-medium">Data Quality</span>
</div>
<div className="metric-large text-purple-400 animated-counter">99.7%</div>
<div className="metric-trend trend-up">
<svg className="lucide lucide-trending-up w-4 h-4"></svg>
<span>accuracy maintained</span>
</div>
</div>
<div className="metric-card" style={{-AccentGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)'}}>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-users w-5 h-5 text-yellow-400"></svg>
<span className="text-gray-300 font-medium">Active Agents</span>
</div>
<div className="metric-large text-yellow-400 animated-counter">247</div>
<div className="metric-trend trend-up">
<svg className="lucide lucide-trending-up w-4 h-4"></svg>
<span>across 12 clients</span>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="card p-6">
<h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
<svg className="lucide lucide-activity w-5 h-5 text-green-400"></svg>
              Real-Time Activity
            </h3>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
<div className="pulse-dot bg-green-400"></div>
<div className="flex-1">
<div className="text-sm font-medium text-green-400">Cost Optimization Agent</div>
<div className="text-xs text-gray-300">Reduced AWS spend by $47K in the last hour</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
<div className="pulse-dot bg-blue-400"></div>
<div className="flex-1">
<div className="text-sm font-medium text-blue-400">ROI Analytics Agent</div>
<div className="text-xs text-gray-300">Generated executive dashboard for Q4 review</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
<div className="pulse-dot bg-purple-400"></div>
<div className="flex-1">
<div className="text-sm font-medium text-purple-400">Resource Efficiency Agent</div>
<div className="text-xs text-gray-300">Optimized 3 data pipelines, 40% faster processing</div>
</div>
</div>
</div>
</div>
<div className="card p-6">
<h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
<svg className="lucide lucide-trending-up w-5 h-5 text-blue-400"></svg>
              Performance Trends
            </h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-300">Infrastructure Efficiency</span>
<span className="text-green-400">+23%</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-2">
<div className="bg-green-400 h-2 rounded-full" style={{width: '87%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-300">Query Performance</span>
<span className="text-blue-400">+45%</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-2">
<div className="bg-blue-400 h-2 rounded-full" style={{width: '92%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-300">Data Quality Score</span>
<span className="text-purple-400">+12%</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-2">
<div className="bg-purple-400 h-2 rounded-full" style={{width: '97%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="demo-content" id="demo-architecture">
<div className="card p-8">
<h3 className="text-2xl font-semibold mb-6 text-white text-center">Autonomous Data OS Architecture</h3>
<div className="architecture-flow">
<div className="flow-node active">
<svg className="lucide lucide-database w-6 h-6 mx-auto mb-2"></svg>
<div className="text-sm font-medium">Data Sources</div>
<div className="pulse-dot bg-green-400"></div>
</div>
<div className="flow-arrow">→</div>
<div className="flow-node active">
<svg className="lucide lucide-cpu w-6 h-6 mx-auto mb-2"></svg>
<div className="text-sm font-medium">AI Agents</div>
<div className="pulse-dot bg-blue-400"></div>
</div>
<div className="flow-arrow">→</div>
<div className="flow-node">
<svg className="lucide lucide-brain w-6 h-6 mx-auto mb-2"></svg>
<div className="text-sm font-medium">Intelligence Layer</div>
</div>
<div className="flow-arrow">→</div>
<div className="flow-node">
<svg className="lucide lucide-bar-chart w-6 h-6 mx-auto mb-2"></svg>
<div className="text-sm font-medium">Business Outcomes</div>
</div>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-6">
<div className="space-y-4">
<h4 className="font-semibold text-white">Core Components</h4>
<div className="space-y-2 text-sm text-gray-300">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span>Real-time data ingestion from 200+ sources</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span>Autonomous agent orchestration</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
<span>Self-healing infrastructure monitoring</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
<span>Intelligent resource optimization</span>
</div>
</div>
</div>
<div className="space-y-4">
<h4 className="font-semibold text-white">Performance Metrics</h4>
<div className="space-y-2 text-sm text-gray-300">
<div className="flex justify-between">
<span>System Uptime</span>
<span className="text-green-400">99.97%</span>
</div>
<div className="flex justify-between">
<span>Average Response Time</span>
<span className="text-blue-400">143ms</span>
</div>
<div className="flex justify-between">
<span>Data Processing Rate</span>
<span className="text-purple-400">2.3TB/hour</span>
</div>
<div className="flex justify-between">
<span>Active Integrations</span>
<span className="text-yellow-400">847</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="demo-content" id="demo-slack">
<div className="card p-6">
<h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
<svg className="lucide lucide-message-circle w-5 h-5 text-blue-400"></svg>
            Agent Communications Feed
          </h3>
<div className="space-y-4 max-h-96 overflow-y-auto">
<div className="slack-message">
<div className="slack-user">
<div className="slack-avatar bg-green-500 flex items-center justify-center text-white text-sm font-bold">CO</div>
<div className="slack-username">Cost Optimization Agent</div>
<div className="slack-time">2 minutes ago</div>
</div>
<div className="slack-content">
                Just identified $127K in potential monthly savings by optimizing unused EC2 instances. Automatically scheduled resources for rightsizing during off-peak hours.
              </div>
<div className="slack-attachment">
<div className="slack-attachment-title">Cost Optimization Report</div>
<div className="slack-attachment-content">• 23 underutilized instances found<br/>• Projected monthly savings: $127,394<br/>• Implementation scheduled for tonight</div>
</div>
</div>
<div className="slack-message">
<div className="slack-user">
<div className="slack-avatar bg-blue-500 flex items-center justify-center text-white text-sm font-bold">RA</div>
<div className="slack-username">ROI Analytics Agent</div>
<div className="slack-time">8 minutes ago</div>
</div>
<div className="slack-content">
                Executive dashboard updated with Q4 metrics. Data operations ROI now at 347% with total value delivered of $4.2M across all initiatives.
              </div>
</div>
<div className="slack-message">
<div className="slack-user">
<div className="slack-avatar bg-purple-500 flex items-center justify-center text-white text-sm font-bold">RE</div>
<div className="slack-username">Resource Efficiency Agent</div>
<div className="slack-time">15 minutes ago</div>
</div>
<div className="slack-content">
                Pipeline optimization complete! ETL processing time reduced from 4.2 hours to 1.7 hours. Data freshness improved by 60% for real-time analytics.
              </div>
<div className="slack-attachment">
<div className="slack-attachment-title">Performance Improvement</div>
<div className="slack-attachment-content">• Processing time: -59% (4.2h → 1.7h)<br/>• Memory usage: -32%<br/>• Data freshness: +60%</div>
</div>
</div>
<div className="slack-message">
<div className="slack-user">
<div className="slack-avatar bg-cyan-500 flex items-center justify-center text-white text-sm font-bold">DQ</div>
<div className="slack-username">Data Quality Agent</div>
<div className="slack-time">23 minutes ago</div>
</div>
<div className="slack-content">
                Anomaly detected in customer data stream. Automatically applied data cleansing rules and restored data quality to 99.8%. Root cause: upstream schema change in CRM system.
              </div>
</div>
<div className="slack-message">
<div className="slack-user">
<div className="slack-avatar bg-orange-500 flex items-center justify-center text-white text-sm font-bold">SH</div>
<div className="slack-username">Self-Healing Infrastructure</div>
<div className="slack-time">31 minutes ago</div>
</div>
<div className="slack-content">
                Proactively resolved potential system failure. Load balancer automatically redistributed traffic and scaled additional instances. Zero downtime maintained.
              </div>
</div>
</div>
</div>
</div>

<div className="demo-content" id="demo-insights">
<div className="grid md:grid-cols-2 gap-6">
<div className="card p-6">
<h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
<svg className="lucide lucide-brain w-5 h-5 text-purple-400"></svg>
              Predictive Insights
            </h3>
<div className="space-y-4">
<div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
<div className="text-sm font-medium text-blue-400 mb-2">🔮 Market Trend Analysis</div>
<div className="text-sm text-gray-300">AI predicts 23% increase in data volume over next 3 months. Recommending proactive infrastructure scaling to maintain performance.</div>
</div>
<div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
<div className="text-sm font-medium text-green-400 mb-2">💰 Cost Optimization Opportunity</div>
<div className="text-sm text-gray-300">Identified potential for 18% additional savings through cross-cloud resource optimization and data lifecycle management.</div>
</div>
<div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
<div className="text-sm font-medium text-purple-400 mb-2">⚡ Performance Enhancement</div>
<div className="text-sm text-gray-300">ML models suggest implementing real-time caching strategy could improve query performance by 40% for top analytics workloads.</div>
</div>
</div>
</div>
<div className="card p-6">
<h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
<svg className="lucide lucide-lightbulb w-5 h-5 text-yellow-400"></svg>
              Innovation Opportunities
            </h3>
<div className="space-y-4">
<div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
<div className="text-sm font-medium text-yellow-400 mb-2">🚀 New Revenue Stream</div>
<div className="text-sm text-gray-300">Data patterns indicate opportunity for new customer segmentation approach, potentially increasing revenue by 15-20%.</div>
</div>
<div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
<div className="text-sm font-medium text-cyan-400 mb-2">🎯 Process Automation</div>
<div className="text-sm text-gray-300">Identified 12 manual processes that could be fully automated, saving approximately 40 hours/week of manual work.</div>
</div>
<div className="p-4 bg-pink-500/10 rounded-lg border border-pink-500/20">
<div className="text-sm font-medium text-pink-400 mb-2">📊 Advanced Analytics</div>
<div className="text-sm text-gray-300">Data richness suggests readiness for advanced ML models, including predictive customer churn and demand forecasting.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-page py-20 relative z-20" id="contact">
<div className="container mx-auto px-6 max-w-2xl text-center">
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-white">Ready to Transform Your Data Operations?</h2>
<p className="text-lg text-gray-300 mb-8">
      Join forward-thinking companies already experiencing the power of autonomous data intelligence. Get early access to our AI agent ecosystem.
    </p>
<form className="card p-8 max-w-md mx-auto">
<div className="space-y-4">
<input className="w-full p-3 bg-white/5 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" placeholder="Your Name" required="" type="text"/>
<input className="w-full p-3 bg-white/5 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" placeholder="Work Email" required="" type="email"/>
<input className="w-full p-3 bg-white/5 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400" placeholder="Company" required="" type="text"/>
<select className="w-full p-3 bg-white/5 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-400" required="">
<option value="">Company Size</option>
<option value="startup">Startup (1-50 employees)</option>
<option value="scale">Scale-up (51-200 employees)</option>
<option value="enterprise">Enterprise (200+ employees)</option>
</select>
<textarea className="w-full p-3 bg-white/5 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none" placeholder="Tell us about your data challenges..." rows="3"></textarea>
<button className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-md font-medium transition-colors" type="submit">
          Request Early Access
        </button>
</div>
</form>
<div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4"></svg>
<span>Enterprise-grade security</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-4 h-4"></svg>
<span>30-day ROI guarantee</span>
</div>
</div>
</div>
</section>

<footer className="relative z-20 py-12 border-t border-gray-800">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<svg className="lucide lucide-zap w-5 h-5 text-blue-400"></svg>
<span className="font-mono text-lg tracking-tight">zerohuman</span>
</div>
<div className="text-sm text-gray-400">
        © 2024 zerohuman. Autonomous Data OS for the intelligent enterprise.
      </div>
</div>
</div>
</footer>


    </>
  );
}
