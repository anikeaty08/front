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



    function downloadPage() {
      console.log("Dashboard access initiated");
    }

    document.addEventListener('DOMContentLoaded', () => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Custom cursor logic with snake-style trail
      const ring = document.getElementById('cursor-ring');
      const dot = document.getElementById('cursor-dot');
      if (!ring || !dot) return;

      let rafId;
      let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2;
      let currentX = targetX, currentY = targetY;

      // Snake segments configuration
      const SEGMENTS = 12;
      const segEls = [];
      const segX = new Array(SEGMENTS);
      const segY = new Array(SEGMENTS);
      let sizeBoost = 0;

      const createSegment = (i) => {
        const el = document.createElement('div');
        const z = 40; 
        const baseSize = Math.max(3, 8 - i * 0.4);
        const opacity = Math.max(0.1, 0.6 - i * 0.05);
        el.className = 'pointer-events-none fixed top-0 left-0 hidden md:block';
        
        // Purple/Blue trail color logic
        const r = 139 + (i * 5); // Shift from purple to lighter purple
        const g = 92 + (i * 8);
        const b = 246;
        
        el.style.cssText = [
          `z-index:${z};`,
          `width:${baseSize}px;`,
          `height:${baseSize}px;`,
          'border-radius:9999px;',
          'transform:translate(-50%,-50%);',
          `background: rgba(${r},${g},${b},${opacity});`,
          `box-shadow: 0 0 10px rgba(${r},${g},${b},${opacity * 0.5});`,
          'transition: opacity .2s;',
          'will-change: left, top;'
        ].join('');
        document.body.appendChild(el);
        return el;
      };

      for (let i = 0; i < SEGMENTS; i++) {
        segEls[i] = createSegment(i);
        segX[i] = targetX;
        segY[i] = targetY;
      }

      const updateSegmentSizes = () => {
        for (let i = 0; i < SEGMENTS; i++) {
          const base = Math.max(3, 8 - i * 0.4);
          const size = base + sizeBoost;
          segEls[i].style.width = size + 'px';
          segEls[i].style.height = size + 'px';
        }
      };

      const setImmediate = (x, y) => {
        ring.style.left = x + 'px';
        ring.style.top = y + 'px';
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
        for (let i = 0; i < SEGMENTS; i++) {
          segX[i] = x; segY[i] = y;
          segEls[i].style.left = x + 'px';
          segEls[i].style.top  = y + 'px';
        }
      };

      const animate = () => {
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;
        ring.style.left = currentX + 'px';
        ring.style.top = currentY + 'px';

        dot.style.left = targetX + 'px';
        dot.style.top = targetY + 'px';

        segX[0] += (targetX - segX[0]) * 0.25;
        segY[0] += (targetY - segY[0]) * 0.25;

        for (let i = 1; i < SEGMENTS; i++) {
          segX[i] += (segX[i - 1] - segX[i]) * 0.25;
          segY[i] += (segY[i - 1] - segY[i]) * 0.25;
        }

        for (let i = 0; i < SEGMENTS; i++) {
          segEls[i].style.left = segX[i] + 'px';
          segEls[i].style.top  = segY[i] + 'px';
        }

        rafId = requestAnimationFrame(animate);
      };

      const onMove = (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
      };

      const enlarge = () => {
        ring.style.width = '40px';
        ring.style.height = '40px';
        ring.style.borderColor = 'rgba(167, 139, 250, 0.8)';
        ring.style.backgroundColor = 'rgba(139, 92, 246, 0.05)';
        sizeBoost = 2;
        updateSegmentSizes();
      };

      const reset = () => {
        ring.style.width = '28px';
        ring.style.height = '28px';
        ring.style.borderColor = 'rgba(139, 92, 246, 0.6)';
        ring.style.backgroundColor = 'transparent';
        sizeBoost = 0;
        updateSegmentSizes();
      };

      const hide = () => {
        ring.style.opacity = '0';
        dot.style.opacity = '0';
        for (const el of segEls) el.style.opacity = '0';
      };

      const show = () => {
        ring.style.opacity = '1';
        dot.style.opacity = '1';
        for (let i = 0; i < SEGMENTS; i++) {
          const opacity = Math.max(0.1, 0.6 - i * 0.05);
          segEls[i].style.opacity = opacity;
        }
      };

      setImmediate(window.innerWidth / 2, window.innerHeight / 2);
      rafId = requestAnimationFrame(animate);
      window.addEventListener('mousemove', onMove, { passive: true });
      window.addEventListener('mouseenter', show);
      window.addEventListener('mouseleave', hide);

      const hoverTargets = document.querySelectorAll('a, button, [role="button"], .cursor-glow, .button-hover, .tag-hover, .glow-border, .logo-hover, .hover-lift, .interactive-text');
      hoverTargets.forEach((el) => {
        el.addEventListener('mouseenter', enlarge);
        el.addEventListener('mouseleave', reset);
      });

      window.addEventListener('mousedown', () => {
        ring.style.transform = 'translate(-50%, -50%) scale(0.9)';
        dot.style.transform = 'translate(-50%, -50%) scale(0.5)';
      });
      window.addEventListener('mouseup', () => {
        ring.style.transform = 'translate(-50%, -50%) scale(1)';
        dot.style.transform = 'translate(-50%, -50%) scale(1)';
      });

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          cancelAnimationFrame(rafId);
        } else {
          rafId = requestAnimationFrame(animate);
        }
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
      

<div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>
<div className="ambient-light"></div>
<div className="ambient-light-2"></div>

<div className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block" id="cursor-ring" style={{width: '28px', height: '28px', border: '1.5px solid rgba(139, 92, 246, 0.6)', borderRadius: '9999px', transform: 'translate(-50%, -50%) scale(1)', boxShadow: 'rgba(139, 92, 246, 0.15) 0px 0px 0px 2px, rgba(139, 92, 246, 0.25) 0px 0px 30px', transition: 'width 0.2s, height 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.06s, opacity 0.2s', backdropFilter: 'blur(1px)', opacity: '0.9', left: '536px', top: '355.5px', backgroundColor: 'transparent'}}></div>
<div className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block" id="cursor-dot" style={{width: '6px', height: '6px', background: 'rgba(167, 139, 250, 0.95)', borderRadius: '9999px', transform: 'translate(-50%, -50%) scale(1)', transition: 'transform 0.06s, opacity 0.2s', boxShadow: 'rgba(167, 139, 250, 0.6) 0px 0px 10px', opacity: '0.9', left: '536px', top: '355.5px'}}></div>

<header className="flex z-10 animate-fade-in max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
<div className="flex items-center space-x-4">

<div className="rounded-xl bg-gradient-to-br from-violet-600/80 to-blue-500/80 p-0.5 glow-purple animate-glow logo-hover cursor-glow">
<div className="flex logo-icon bg-[#05050a] w-9 h-9 rounded-[10px] items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="briefcase-medical" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 11v4"></path><path d="M14 13h-4"></path><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path d="M18 6v14"></path><path d="M6 6v14"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg><svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="briefcase-medical" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 11v4"></path><path d="M14 13h-4"></path><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path d="M18 6v14"></path><path d="M6 6v14"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
</div>
<div className="animate-fade-in delay-100 hover-lift cursor-glow">
<div className="text-xs font-medium text-slate-400 hover-glow transition-all duration-300">SmartCare</div>
<div className="text-sm font-semibold tracking-tight text-slate-100 hover-glow interactive-text cursor-pointer transition-all duration-300">Device Manager</div>
</div>
</div>
<div className="flex items-center space-x-3 animate-fade-in delay-200">
<span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-medium bg-violet-900/20 text-violet-300 border border-violet-500/20 glow-border backdrop-glow hover-float cursor-glow">Status: Active</span>
<button className="px-4 py-2 rounded-full bg-slate-100 hover:bg-white text-slate-900 text-xs font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] button-hover cursor-pointer transition-colors duration-200" onclick="downloadPage()">
        View Dashboard
      </button>
</div>
</header>

<main className="max-w-7xl z-10 mr-auto ml-auto pr-6 pb-12 pl-6 relative">
<section className="grid md:grid-cols-2 gap-6">

<article className="relative rounded-3xl overflow-hidden bg-[#0a0a12] glow-card animate-scale-in cursor-glow border border-white/5 group">
<div className="card-content h-full">
<div className="card-image-hover h-full">

<img alt="Smart device ecosystem" className="w-full h-[400px] md:h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&amp;auto=format&amp;fit=crop&amp;q=80"/>
<div className="bg-gradient-to-t from-[#020408] via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute bottom-0 left-0 w-full flex flex-col sm:flex-row gap-4 backdrop-glow bg-[#05050a]/60 p-5 items-center justify-between floating-stats-hover border-t border-white/5">
<div className="flex items-center gap-5 animate-float w-full sm:w-auto justify-between sm:justify-start">
<div className="flex items-center space-x-2 bg-violet-500/10 border border-violet-500/30 px-3 py-1.5 rounded-lg backdrop-glow glow-border hover-lift cursor-glow">
<i className="text-violet-400 w-4 h-4" data-lucide="zap"></i>
<span className="text-xs font-medium text-violet-200">Fix Time</span>
<span className="text-xs font-semibold ml-1 text-white interactive-text">~2m</span>
</div>
<div className="text-slate-400 text-xs tracking-tight hover-lift cursor-glow hidden sm:block">
<span className="block hover-glow transition-all duration-300">Success Rate</span>
<span className="font-semibold text-white interactive-text">99.8%</span>
</div>
</div>
<button className="w-full sm:w-auto px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium glow-purple-intense button-hover animate-float cursor-pointer shadow-lg shadow-violet-900/20" style={{animationDelay: '0.5s'}}>
              Scan Devices
            </button>
</div>
</div>
</article>

<aside className="flex flex-col glow-card animate-scale-in delay-200 hover-bg-shift cursor-glow overflow-hidden bg-[#0a0a12] border-white/5 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative justify-center">
<div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
<div className="card-content relative z-10">
<div className="inline-flex items-center mb-6 gap-2 animate-fade-in delay-300">
<span className="px-2.5 py-0.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-200 text-[10px] font-medium tracking-wide uppercase glow-border backdrop-glow tag-hover">AI Powered</span>
<span className="px-2.5 py-0.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-200 text-[10px] font-medium tracking-wide uppercase glow-border backdrop-glow tag-hover">IoT Ready</span>
</div>
<h1 className="md:text-5xl leading-[1.1] bg-clip-text animate-slide-up delay-400 interactive-text cursor-glow transition-all duration-500 text-4xl font-semibold text-transparent tracking-tight bg-gradient-to-b from-white to-slate-400 mb-5" style={{}}>Smart Health Manager</h1>
<p className="leading-relaxed md:text-base animate-slide-up delay-500 hover-glow cursor-glow transition-all duration-300 text-sm text-slate-400 max-w-md">
            Seamlessly manage, troubleshoot, and optimize your entire smart ecosystem with AI-driven diagnostics and instant support.
          </p>
<div className="mt-8 flex flex-wrap gap-2 animate-slide-up delay-600">
<span className="px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 border border-white/5 transition-colors duration-200 cursor-default">24/7 Monitoring</span>
<span className="px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 border border-white/5 transition-colors duration-200 cursor-default">Auto-Repair</span>
<span className="px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 border border-white/5 transition-colors duration-200 cursor-default">Remote Access</span>
</div>
</div>
</aside>
</section>

<section className="grid md:grid-cols-3 gap-6 mt-6 gap-x-6 gap-y-6">

<article className="group rounded-2xl bg-[#0a0a12] overflow-hidden glow-card animate-scale-in delay-300 cursor-glow border border-white/5">
<div className="card-content h-full flex flex-col">
<div className="relative h-48 bg-center bg-cover card-image-hover overflow-hidden">

<img alt="System Health" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&amp;auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] to-transparent opacity-90"></div>
<div className="absolute top-4 left-4">
<div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center backdrop-blur-md">
<i className="text-violet-300 w-4 h-4" data-lucide="activity"></i>
</div>
</div>
</div>
<div className="flex-1 flex flex-col pt-0 pr-6 pb-6 pl-6">
<h3 className="animate-slide-up delay-500 group-hover:text-violet-300 transition-colors text-lg font-semibold text-white tracking-tight">Health Strategy &amp; Vision</h3>
<p className="leading-relaxed animate-slide-up delay-600 flex-1 text-xs text-slate-400 mt-2">Define health and wellness goals supported by smart technology</p>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Health Check</span>
<i className="w-4 h-4 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</article>

<article className="group rounded-2xl bg-[#0a0a12] overflow-hidden glow-card animate-scale-in delay-400 cursor-glow border border-white/5">
<div className="card-content h-full flex flex-col">
<div className="relative h-48 bg-center bg-cover card-image-hover overflow-hidden">

<img alt="Control Hub" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9968d14-e02f-40e2-a16d-c1e0b1343292_800w.webp"/>
<div className="bg-gradient-to-t from-[#0a0a12] to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 left-4">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center backdrop-blur-md">
<i className="text-blue-300 w-4 h-4" data-lucide="smartphone"></i>
</div>
</div>
</div>
<div className="p-6 pt-0 flex-1 flex flex-col">
<h3 className="animate-slide-up delay-600 group-hover:text-blue-300 transition-colors text-lg font-semibold text-white tracking-tight">Smart Health Solution Design</h3>
<p className="leading-relaxed animate-slide-up delay-700 flex-1 text-xs text-slate-400 mt-2">Ensure solutions are simple, intuitive, and user-friendly</p>
<div className="flex border-white/5 border-t mt-4 pt-4 items-center justify-between">
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Dashboard</span>
<i className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</article>

<article className="group rounded-2xl bg-[#0a0a12] overflow-hidden glow-card animate-scale-in delay-500 cursor-glow border border-white/5">
<div className="card-content h-full flex flex-col">
<div className="relative h-48 bg-center bg-cover card-image-hover overflow-hidden">

<img alt="Expert Support" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&amp;auto=format&amp;fit=crop&amp;q=80"/>
<div className="bg-gradient-to-t from-[#0a0a12] to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 left-4">
<div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center backdrop-blur-md">
<i className="text-indigo-300 w-4 h-4" data-lucide="headphones"></i>
</div>
</div>
</div>
<div className="p-6 pt-0 flex-1 flex flex-col">
<h3 className="animate-slide-up delay-700 group-hover:text-indigo-300 transition-colors text-lg font-semibold text-white tracking-tight">Instant Expert</h3>
<p className="leading-relaxed animate-slide-up delay-800 flex-1 text-xs text-slate-400 mt-2">
              Stuck on setup? Video call certified technicians directly through the app for hardware troubleshooting.
            </p>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Get Help</span>
<i className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</article>
</section>

<section className="z-10 mt-12 relative">
<div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
<div className="flex flex-col gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 cursor-glow group">
<div className="w-10 h-10 rounded-full bg-violet-900/20 border border-violet-500/20 flex items-center justify-center group-hover:border-violet-500/50 transition-colors">
<i className="text-violet-400 w-5 h-5" data-lucide="wifi"></i>
</div>
<h3 className="text-sm font-semibold text-slate-200">Network Optimization</h3>
<p className="text-xs text-slate-400 leading-relaxed">AI-tuning for your router to eliminate dead zones and latency.</p>
</div>
<div className="flex flex-col gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 cursor-glow group">
<div className="w-10 h-10 rounded-full bg-blue-900/20 border border-blue-500/20 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
<i className="text-blue-400 w-5 h-5" data-lucide="battery-charging"></i>
</div>
<h3 className="text-sm font-semibold text-slate-200">Power Management</h3>
<p className="text-xs text-slate-400 leading-relaxed">Extend battery life of sensors and cameras intelligently.</p>
</div>
<div className="flex flex-col gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 cursor-glow group sm:col-span-2 lg:col-span-1">
<div className="w-10 h-10 rounded-full bg-indigo-900/20 border border-indigo-500/20 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
<i className="text-indigo-400 w-5 h-5" data-lucide="lock"></i>
</div>
<h3 className="text-sm font-semibold text-slate-200">Secure Gateway</h3>
<p className="text-xs text-slate-400 leading-relaxed">Bank-grade encryption for all your home automation commands.</p>
</div>
</div>
<div className="mt-12 rounded-3xl border border-violet-500/30 bg-gradient-to-r from-violet-600/10 via-[#0a0a12] to-blue-600/10 p-1 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
<div className="flex flex-col md:flex-row gap-6 overflow-hidden bg-[#05050a] rounded-[22px] pt-8 pr-8 pb-8 pl-8 relative gap-x-6 gap-y-6 items-center justify-between">
<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="text-center md:text-left z-10">
<h4 className="text-2xl font-semibold tracking-tight text-white mb-2">Optimize your home?</h4>
<p className="text-slate-400 text-sm">Start your free 14-day diagnostic scan today.</p>
</div>
<div className="flex items-center gap-3 z-10">
<button className="hover:bg-slate-200 transition-colors shadow-white/10 button-hover cursor-pointer text-xs font-semibold text-black bg-white rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-lg">Near You</button>
<a className="px-6 py-2.5 rounded-full border border-slate-700 text-slate-300 text-xs font-medium hover:bg-white/5 transition-colors button-hover cursor-pointer" href="#">
              Compatibility
            </a>
</div>
</div>
</div>
</section>
</main>
<footer className="mt-8 relative z-10 border-t border-white/5 bg-[#020408]">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500 animate-fade-in delay-800">
          © 2024 SmartCare Manager. All rights reserved.
        </p>
<div className="flex gap-4">
<i className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" data-lucide="github"></i>
<i className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
</div>
</div>
</div>
</footer>

<div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8px', height: '8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(139, 92, 246, 0.6)', boxShadow: 'rgba(139, 92, 246, 0.3) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.6px', height: '7.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(144, 100, 246, 0.55)', boxShadow: 'rgba(144, 100, 246, 0.275) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.2px', height: '7.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(149, 108, 246, 0.5)', boxShadow: 'rgba(149, 108, 246, 0.25) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.8px', height: '6.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(154, 116, 246, 0.45)', boxShadow: 'rgba(154, 116, 246, 0.224) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.4px', height: '6.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(159, 124, 246, 0.4)', boxShadow: 'rgba(159, 124, 246, 0.2) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6px', height: '6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(164, 132, 246, 0.35)', boxShadow: 'rgba(164, 132, 246, 0.176) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.6px', height: '5.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(169, 140, 246, 0.298)', boxShadow: 'rgba(169, 140, 246, 0.15) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.2px', height: '5.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(174, 148, 246, 0.25)', boxShadow: 'rgba(174, 148, 246, 0.125) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.8px', height: '4.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(179, 156, 246, 0.2)', boxShadow: 'rgba(179, 156, 246, 0.098) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.4px', height: '4.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(184, 164, 246, 0.15)', boxShadow: 'rgba(184, 164, 246, 0.075) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4px', height: '4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(189, 172, 246, 0.1)', boxShadow: 'rgba(189, 172, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '3.6px', height: '3.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(194, 180, 246, 0.1)', boxShadow: 'rgba(194, 180, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8px', height: '8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(139, 92, 246, 0.6)', boxShadow: 'rgba(139, 92, 246, 0.3) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.6px', height: '7.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(144, 100, 246, 0.55)', boxShadow: 'rgba(144, 100, 246, 0.275) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.2px', height: '7.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(149, 108, 246, 0.5)', boxShadow: 'rgba(149, 108, 246, 0.25) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.8px', height: '6.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(154, 116, 246, 0.45)', boxShadow: 'rgba(154, 116, 246, 0.224) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.4px', height: '6.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(159, 124, 246, 0.4)', boxShadow: 'rgba(159, 124, 246, 0.2) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6px', height: '6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(164, 132, 246, 0.35)', boxShadow: 'rgba(164, 132, 246, 0.176) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.6px', height: '5.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(169, 140, 246, 0.298)', boxShadow: 'rgba(169, 140, 246, 0.15) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.2px', height: '5.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(174, 148, 246, 0.25)', boxShadow: 'rgba(174, 148, 246, 0.125) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.8px', height: '4.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(179, 156, 246, 0.2)', boxShadow: 'rgba(179, 156, 246, 0.098) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.4px', height: '4.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(184, 164, 246, 0.15)', boxShadow: 'rgba(184, 164, 246, 0.075) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4px', height: '4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(189, 172, 246, 0.1)', boxShadow: 'rgba(189, 172, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '3.6px', height: '3.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(194, 180, 246, 0.1)', boxShadow: 'rgba(194, 180, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8px', height: '8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(139, 92, 246, 0.6)', boxShadow: 'rgba(139, 92, 246, 0.3) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.6px', height: '7.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(144, 100, 246, 0.55)', boxShadow: 'rgba(144, 100, 246, 0.275) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.2px', height: '7.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(149, 108, 246, 0.5)', boxShadow: 'rgba(149, 108, 246, 0.25) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.8px', height: '6.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(154, 116, 246, 0.45)', boxShadow: 'rgba(154, 116, 246, 0.224) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.4px', height: '6.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(159, 124, 246, 0.4)', boxShadow: 'rgba(159, 124, 246, 0.2) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6px', height: '6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(164, 132, 246, 0.35)', boxShadow: 'rgba(164, 132, 246, 0.176) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.6px', height: '5.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(169, 140, 246, 0.298)', boxShadow: 'rgba(169, 140, 246, 0.15) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.2px', height: '5.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(174, 148, 246, 0.25)', boxShadow: 'rgba(174, 148, 246, 0.125) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.8px', height: '4.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(179, 156, 246, 0.2)', boxShadow: 'rgba(179, 156, 246, 0.098) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.4px', height: '4.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(184, 164, 246, 0.15)', boxShadow: 'rgba(184, 164, 246, 0.075) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4px', height: '4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(189, 172, 246, 0.1)', boxShadow: 'rgba(189, 172, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '3.6px', height: '3.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(194, 180, 246, 0.1)', boxShadow: 'rgba(194, 180, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8px', height: '8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(139, 92, 246, 0.6)', boxShadow: 'rgba(139, 92, 246, 0.3) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.6px', height: '7.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(144, 100, 246, 0.55)', boxShadow: 'rgba(144, 100, 246, 0.275) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.2px', height: '7.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(149, 108, 246, 0.5)', boxShadow: 'rgba(149, 108, 246, 0.25) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.8px', height: '6.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(154, 116, 246, 0.45)', boxShadow: 'rgba(154, 116, 246, 0.224) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.4px', height: '6.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(159, 124, 246, 0.4)', boxShadow: 'rgba(159, 124, 246, 0.2) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6px', height: '6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(164, 132, 246, 0.35)', boxShadow: 'rgba(164, 132, 246, 0.176) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.6px', height: '5.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(169, 140, 246, 0.298)', boxShadow: 'rgba(169, 140, 246, 0.15) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.2px', height: '5.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(174, 148, 246, 0.25)', boxShadow: 'rgba(174, 148, 246, 0.125) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.8px', height: '4.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(179, 156, 246, 0.2)', boxShadow: 'rgba(179, 156, 246, 0.098) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.4px', height: '4.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(184, 164, 246, 0.15)', boxShadow: 'rgba(184, 164, 246, 0.075) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4px', height: '4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(189, 172, 246, 0.1)', boxShadow: 'rgba(189, 172, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '3.6px', height: '3.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(194, 180, 246, 0.1)', boxShadow: 'rgba(194, 180, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8px', height: '8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(139, 92, 246, 0.6)', boxShadow: 'rgba(139, 92, 246, 0.3) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.6px', height: '7.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(144, 100, 246, 0.55)', boxShadow: 'rgba(144, 100, 246, 0.275) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.2px', height: '7.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(149, 108, 246, 0.5)', boxShadow: 'rgba(149, 108, 246, 0.25) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.8px', height: '6.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(154, 116, 246, 0.45)', boxShadow: 'rgba(154, 116, 246, 0.224) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.4px', height: '6.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(159, 124, 246, 0.4)', boxShadow: 'rgba(159, 124, 246, 0.2) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6px', height: '6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(164, 132, 246, 0.35)', boxShadow: 'rgba(164, 132, 246, 0.176) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.6px', height: '5.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(169, 140, 246, 0.298)', boxShadow: 'rgba(169, 140, 246, 0.15) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.2px', height: '5.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(174, 148, 246, 0.25)', boxShadow: 'rgba(174, 148, 246, 0.125) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.8px', height: '4.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(179, 156, 246, 0.2)', boxShadow: 'rgba(179, 156, 246, 0.098) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.4px', height: '4.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(184, 164, 246, 0.15)', boxShadow: 'rgba(184, 164, 246, 0.075) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4px', height: '4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(189, 172, 246, 0.1)', boxShadow: 'rgba(189, 172, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '3.6px', height: '3.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(194, 180, 246, 0.1)', boxShadow: 'rgba(194, 180, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '10px', height: '10px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(139, 92, 246, 0.6)', boxShadow: 'rgba(139, 92, 246, 0.3) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '9.6px', height: '9.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(144, 100, 246, 0.55)', boxShadow: 'rgba(144, 100, 246, 0.275) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '9.2px', height: '9.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(149, 108, 246, 0.5)', boxShadow: 'rgba(149, 108, 246, 0.25) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8.8px', height: '8.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(154, 116, 246, 0.45)', boxShadow: 'rgba(154, 116, 246, 0.224) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8.4px', height: '8.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(159, 124, 246, 0.4)', boxShadow: 'rgba(159, 124, 246, 0.2) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8px', height: '8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(164, 132, 246, 0.35)', boxShadow: 'rgba(164, 132, 246, 0.176) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.6px', height: '7.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(169, 140, 246, 0.298)', boxShadow: 'rgba(169, 140, 246, 0.15) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.2px', height: '7.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(174, 148, 246, 0.25)', boxShadow: 'rgba(174, 148, 246, 0.125) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.8px', height: '6.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(179, 156, 246, 0.2)', boxShadow: 'rgba(179, 156, 246, 0.098) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.4px', height: '6.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(184, 164, 246, 0.15)', boxShadow: 'rgba(184, 164, 246, 0.075) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6px', height: '6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(189, 172, 246, 0.1)', boxShadow: 'rgba(189, 172, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.6px', height: '5.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(194, 180, 246, 0.1)', boxShadow: 'rgba(194, 180, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8px', height: '8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(139, 92, 246, 0.6)', boxShadow: 'rgba(139, 92, 246, 0.3) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.6px', height: '7.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(144, 100, 246, 0.55)', boxShadow: 'rgba(144, 100, 246, 0.275) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.2px', height: '7.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(149, 108, 246, 0.5)', boxShadow: 'rgba(149, 108, 246, 0.25) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.8px', height: '6.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(154, 116, 246, 0.45)', boxShadow: 'rgba(154, 116, 246, 0.224) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.4px', height: '6.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(159, 124, 246, 0.4)', boxShadow: 'rgba(159, 124, 246, 0.2) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6px', height: '6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(164, 132, 246, 0.35)', boxShadow: 'rgba(164, 132, 246, 0.176) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.6px', height: '5.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(169, 140, 246, 0.298)', boxShadow: 'rgba(169, 140, 246, 0.15) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.2px', height: '5.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(174, 148, 246, 0.25)', boxShadow: 'rgba(174, 148, 246, 0.125) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.8px', height: '4.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(179, 156, 246, 0.2)', boxShadow: 'rgba(179, 156, 246, 0.098) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.4px', height: '4.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(184, 164, 246, 0.15)', boxShadow: 'rgba(184, 164, 246, 0.075) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4px', height: '4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(189, 172, 246, 0.1)', boxShadow: 'rgba(189, 172, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '3.6px', height: '3.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(194, 180, 246, 0.1)', boxShadow: 'rgba(194, 180, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '10px', height: '10px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(139, 92, 246, 0.6)', boxShadow: 'rgba(139, 92, 246, 0.3) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '9.6px', height: '9.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(144, 100, 246, 0.55)', boxShadow: 'rgba(144, 100, 246, 0.275) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '9.2px', height: '9.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(149, 108, 246, 0.5)', boxShadow: 'rgba(149, 108, 246, 0.25) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8.8px', height: '8.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(154, 116, 246, 0.45)', boxShadow: 'rgba(154, 116, 246, 0.224) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8.4px', height: '8.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(159, 124, 246, 0.4)', boxShadow: 'rgba(159, 124, 246, 0.2) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8px', height: '8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(164, 132, 246, 0.35)', boxShadow: 'rgba(164, 132, 246, 0.176) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.6px', height: '7.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(169, 140, 246, 0.298)', boxShadow: 'rgba(169, 140, 246, 0.15) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.2px', height: '7.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(174, 148, 246, 0.25)', boxShadow: 'rgba(174, 148, 246, 0.125) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.8px', height: '6.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(179, 156, 246, 0.2)', boxShadow: 'rgba(179, 156, 246, 0.098) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.4px', height: '6.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(184, 164, 246, 0.15)', boxShadow: 'rgba(184, 164, 246, 0.075) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6px', height: '6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(189, 172, 246, 0.1)', boxShadow: 'rgba(189, 172, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.6px', height: '5.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(194, 180, 246, 0.1)', boxShadow: 'rgba(194, 180, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8px', height: '8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(139, 92, 246, 0.6)', boxShadow: 'rgba(139, 92, 246, 0.3) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.6px', height: '7.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(144, 100, 246, 0.55)', boxShadow: 'rgba(144, 100, 246, 0.275) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.2px', height: '7.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(149, 108, 246, 0.5)', boxShadow: 'rgba(149, 108, 246, 0.25) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.8px', height: '6.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(154, 116, 246, 0.45)', boxShadow: 'rgba(154, 116, 246, 0.224) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.4px', height: '6.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(159, 124, 246, 0.4)', boxShadow: 'rgba(159, 124, 246, 0.2) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6px', height: '6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(164, 132, 246, 0.35)', boxShadow: 'rgba(164, 132, 246, 0.176) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.6px', height: '5.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(169, 140, 246, 0.298)', boxShadow: 'rgba(169, 140, 246, 0.15) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.2px', height: '5.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(174, 148, 246, 0.25)', boxShadow: 'rgba(174, 148, 246, 0.125) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.8px', height: '4.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(179, 156, 246, 0.2)', boxShadow: 'rgba(179, 156, 246, 0.098) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.4px', height: '4.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(184, 164, 246, 0.15)', boxShadow: 'rgba(184, 164, 246, 0.075) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4px', height: '4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(189, 172, 246, 0.1)', boxShadow: 'rgba(189, 172, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '3.6px', height: '3.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(194, 180, 246, 0.1)', boxShadow: 'rgba(194, 180, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8px', height: '8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(139, 92, 246, 0.6)', boxShadow: 'rgba(139, 92, 246, 0.3) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.6px', height: '7.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(144, 100, 246, 0.55)', boxShadow: 'rgba(144, 100, 246, 0.275) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.2px', height: '7.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(149, 108, 246, 0.5)', boxShadow: 'rgba(149, 108, 246, 0.25) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.8px', height: '6.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(154, 116, 246, 0.45)', boxShadow: 'rgba(154, 116, 246, 0.224) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.4px', height: '6.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(159, 124, 246, 0.4)', boxShadow: 'rgba(159, 124, 246, 0.2) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6px', height: '6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(164, 132, 246, 0.35)', boxShadow: 'rgba(164, 132, 246, 0.176) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.6px', height: '5.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(169, 140, 246, 0.298)', boxShadow: 'rgba(169, 140, 246, 0.15) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.2px', height: '5.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(174, 148, 246, 0.25)', boxShadow: 'rgba(174, 148, 246, 0.125) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.8px', height: '4.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(179, 156, 246, 0.2)', boxShadow: 'rgba(179, 156, 246, 0.098) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.4px', height: '4.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(184, 164, 246, 0.15)', boxShadow: 'rgba(184, 164, 246, 0.075) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4px', height: '4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(189, 172, 246, 0.1)', boxShadow: 'rgba(189, 172, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '3.6px', height: '3.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(194, 180, 246, 0.1)', boxShadow: 'rgba(194, 180, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '8px', height: '8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(139, 92, 246, 0.6)', boxShadow: 'rgba(139, 92, 246, 0.3) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.6px', height: '7.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(144, 100, 246, 0.55)', boxShadow: 'rgba(144, 100, 246, 0.275) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '7.2px', height: '7.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(149, 108, 246, 0.5)', boxShadow: 'rgba(149, 108, 246, 0.25) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.8px', height: '6.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(154, 116, 246, 0.45)', boxShadow: 'rgba(154, 116, 246, 0.224) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6.4px', height: '6.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(159, 124, 246, 0.4)', boxShadow: 'rgba(159, 124, 246, 0.2) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '6px', height: '6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(164, 132, 246, 0.35)', boxShadow: 'rgba(164, 132, 246, 0.176) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.6px', height: '5.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(169, 140, 246, 0.298)', boxShadow: 'rgba(169, 140, 246, 0.15) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '5.2px', height: '5.2px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(174, 148, 246, 0.25)', boxShadow: 'rgba(174, 148, 246, 0.125) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.8px', height: '4.8px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(179, 156, 246, 0.2)', boxShadow: 'rgba(179, 156, 246, 0.098) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4.4px', height: '4.4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(184, 164, 246, 0.15)', boxShadow: 'rgba(184, 164, 246, 0.075) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '4px', height: '4px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(189, 172, 246, 0.1)', boxShadow: 'rgba(189, 172, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div><div className="pointer-events-none fixed top-0 left-0 hidden md:block" style={{zIndex: '40', width: '3.6px', height: '3.6px', borderRadius: '9999px', transform: 'translate(-50%, -50%)', background: 'rgba(194, 180, 246, 0.1)', boxShadow: 'rgba(194, 180, 246, 0.05) 0px 0px 10px', transition: 'opacity 0.2s', willChange: 'left, top', left: '536px', top: '355.5px'}}></div>
    </>
  );
}
