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



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        aura: {
                            bg: '#0d0e10',
                            card: '#13141a',
                            border: '#1f2023',
                            accent: '#5e6ad2',
                            purple: '#8b5cf6',
                            text: '#b4bcd0',
                            muted: '#7c8794'
                        }
                    },
                    fontFamily: {
                        inter: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    
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
      
<div className="max-w-4xl mx-auto p-8">

<div className="mb-12">
<div className="header-card glass-effect rounded-2xl p-8">

<div className="flex items-start justify-between mb-6">
<div>
<h1 className="text-3xl font-semibold text-white mb-1">Product Roadmap 2024</h1>
<p className="text-aura-muted">Engineering excellence through strategic innovation and collaborative development</p>
</div>

<div className="flex items-center gap-3">
<div className="social-icon text-aura-text hover:text-white">
<i className="fab fa-github"></i>
</div>
<div className="social-icon text-aura-text hover:text-white">
<i className="fab fa-slack"></i>
</div>
<div className="social-icon text-aura-text hover:text-white">
<i className="fab fa-figma"></i>
</div>
<div className="social-icon text-aura-text hover:text-white">
<i className="fas fa-share-alt"></i>
</div>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-8">

<div className="text-center">
<div className="text-2xl font-semibold text-white mb-1">24</div>
<div className="text-xs text-aura-muted uppercase tracking-wider" style={{fontSize: `10px`}}>Engineers</div>
</div>
<div className="stat-divider"></div>
<div className="text-center">
<div className="text-2xl font-semibold text-white mb-1">8</div>
<div className="text-xs text-aura-muted uppercase tracking-wider" style={{fontSize: `10px`}}>Active Projects</div>
</div>
<div className="stat-divider"></div>
<div className="text-center">
<div className="text-2xl font-semibold text-white mb-1">156</div>
<div className="text-xs text-aura-muted uppercase tracking-wider" style={{fontSize: `10px`}}>Features Shipped</div>
</div>
<div className="stat-divider"></div>
<div className="text-center">
<div className="text-2xl font-semibold text-aura-accent mb-1">94%</div>
<div className="text-xs text-aura-muted uppercase tracking-wider" style={{fontSize: `10px`}}>On Schedule</div>
</div>
</div>
</div>

<div className="flex items-center gap-3 mt-6 pt-6 border-t border-aura-border">
<span className="text-xs text-aura-muted">Quick Actions:</span>
<button className="text-xs px-3 py-1.5 rounded-md bg-aura-accent/10 text-aura-accent border border-aura-accent/20 hover:bg-aura-accent/20 transition-colors">
<i className="fas fa-plus mr-1"></i> Add Milestone
                    </button>
<button className="text-xs px-3 py-1.5 rounded-md bg-aura-border text-aura-text hover:bg-aura-card transition-colors">
<i className="fas fa-filter mr-1"></i> Filter View
                    </button>
<button className="text-xs px-3 py-1.5 rounded-md bg-aura-border text-aura-text hover:bg-aura-card transition-colors">
<i className="fas fa-download mr-1"></i> Export
                    </button>
</div>
</div>
</div>

<div className="relative ml-16 flex">

<div className="space-y-8">

<div className="relative flex items-start gap-6">
<div className="relative">
<div className="date-label date-label-active">Dec 15</div>
<div className="timeline-dot-active timeline-dot"></div>
</div>
<div className="aura-card-active aura-card glass-effect rounded-xl p-6 flex-1 max-w-2xl">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="aura-icon bg-aura-accent/20 text-aura-accent">
<i className="fas fa-brain"></i>
</div>
<div>
<h3 className="text-white font-medium">AI-Powered Analytics</h3>
<p className="text-xs text-aura-muted mt-1">Machine learning integration</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="status-badge px-2 py-1 rounded-md bg-aura-accent/20 text-aura-accent border border-aura-accent/30">
                                    In Progress
                                </span>
</div>
</div>
<p className="text-sm text-aura-text mb-4 leading-relaxed">
                            Building intelligent data processing capabilities with real-time insights and predictive modeling for enhanced user experience.
                        </p>
<div className="flex items-center justify-between">
<div className="flex gap-2">
<span className="text-xs px-2 py-1 rounded-md bg-aura-border text-aura-muted">Neural Networks</span>
<span className="text-xs px-2 py-1 rounded-md bg-aura-border text-aura-muted">Real-time</span>
</div>
<div className="flex items-center gap-4 text-xs text-aura-muted">
<span><i className="fas fa-user-friends mr-1"></i> 6 engineers</span>
<span><i className="fas fa-percentage mr-1"></i> 65% complete</span>
</div>
</div>
</div>
</div>

<div className="relative flex items-start gap-6">
<div className="relative">
<div className="date-label">Nov 28</div>
<div className="timeline-dot"></div>
</div>
<div className="aura-card glass-effect rounded-xl p-6 flex-1 max-w-2xl">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="aura-icon bg-green-500/20 text-green-400">
<i className="fas fa-check"></i>
</div>
<div>
<h3 className="text-white font-medium">Core Platform Redesign</h3>
<p className="text-xs text-aura-muted mt-1">Infrastructure modernization</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="status-badge px-2 py-1 rounded-md bg-green-500/20 text-green-400 border border-green-500/30">
                                    Shipped
                                </span>
</div>
</div>
<p className="text-sm text-aura-text mb-4 leading-relaxed">
                            Complete overhaul of the platform architecture with improved performance, scalability, and developer experience.
                        </p>
<div className="border-t border-aura-border pt-3 mt-4">
<div className="flex items-center justify-between text-xs text-aura-muted">
<div className="flex gap-4">
<span><i className="fas fa-code mr-1"></i> 23k+ lines</span>
<span><i className="fas fa-rocket mr-1"></i> 40% faster</span>
</div>
<span><i className="fas fa-calendar mr-1"></i> 8 weeks</span>
</div>
</div>
</div>
</div>

<div className="relative flex items-start gap-6">
<div className="relative">
<div className="date-label">Jan 22</div>
<div className="timeline-dot-future timeline-dot"></div>
</div>
<div className="aura-card glass-effect rounded-xl p-6 flex-1 max-w-2xl opacity-60">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="aura-icon bg-aura-border text-aura-muted">
<i className="fas fa-mobile-alt"></i>
</div>
<div>
<h3 className="text-white font-medium">Mobile App Launch</h3>
<p className="text-xs text-aura-muted mt-1">iOS & Android native apps</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="status-badge px-2 py-1 rounded-md bg-aura-border text-aura-muted border border-aura-border">
                                    Planned
                                </span>
</div>
</div>
<p className="text-sm text-aura-text mb-4 leading-relaxed">
                            Native mobile applications with offline capabilities and seamless synchronization across devices.
                        </p>
</div>
</div>

<div className="relative flex items-start gap-6">
<div className="relative">
<div className="date-label">Mar 10</div>
<div className="timeline-dot-future timeline-dot"></div>
</div>
<div className="aura-card glass-effect rounded-xl p-6 flex-1 max-w-2xl opacity-60">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="aura-icon bg-aura-border text-aura-muted">
<i className="fas fa-flask"></i>
</div>
<div>
<h3 className="text-white font-medium">Quantum Computing Research</h3>
<p className="text-xs text-aura-muted mt-1">Next-generation processing</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="status-badge px-2 py-1 rounded-md bg-aura-purple/20 text-aura-purple border border-aura-purple/30">
                                    Research
                                </span>
</div>
</div>
<p className="text-sm text-aura-text mb-4 leading-relaxed">
                            Exploring quantum algorithms for complex optimization problems and advanced cryptographic security.
                        </p>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
