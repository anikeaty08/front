import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
slate: {
850: '#151e2e',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'blob': 'blob 7s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'fade-in': 'fadeIn 0.3s ease-out forwards',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(-10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



    (function() {
      const counters = document.querySelectorAll('.counter-value');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            const duration = 1200; 
            const startTime = performance.now();
            
            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out quart
              const ease = 1 - Math.pow(1 - progress, 4);
              
              const current = ease * target;
              
              if (target % 1 !== 0) {
                 counter.innerText = current.toFixed(1);
              } else {
                 counter.innerText = Math.floor(current);
              }

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                counter.innerText = target;
              }
            };
            
            requestAnimationFrame(animate);
            observer.unobserve(counter);
          }
        });
      }, { threshold: 0.5 });

      counters.forEach(c => observer.observe(c));
    })();
  


    (function() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.problem-card').forEach((el) => {
        observer.observe(el);
      });
    })();
  


    (function() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.solution-card').forEach((el) => {
        observer.observe(el);
      });
    })();
  


    (function() {
      const section = document.querySelector('.insurance-section');
      const steps = section.querySelectorAll('.insurance-step');
      const line = section.querySelector('.insurance-line-fill');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate Steps
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.remove('opacity-0', 'translate-y-8');
                step.classList.add('opacity-100', 'translate-y-0');
              }, index * 200);
            });
            
            // Animate Line
            if(line) {
                setTimeout(() => {
                    line.style.width = '100%';
                }, 400);
            }
            
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3, rootMargin: '0px 0px -50px 0px' });

      observer.observe(section);
    })();
  


    (function() {
      const steps = document.querySelectorAll('.process-step');
      
      // Dashboard Elements
      const dashDomains = document.getElementById('dash-domains');
      const dashStatus = document.getElementById('dash-status');
      const dashStatusDot = document.getElementById('dash-status-dot');
      const dashStatusText = document.getElementById('dash-status-text');
      const dashCapacity = document.getElementById('dash-capacity');
      const dashCapacityBar = document.getElementById('dash-capacity-bar');
      const dashTimelineLine = document.getElementById('dash-timeline-line');
      const dashHealthStatus = document.getElementById('dash-health-status');

      // State Data
      const states = {
        1: {
          domains: "0",
          status: { text: "Planning", color: "bg-slate-100 text-slate-600", dot: "bg-slate-400" },
          capacity: "Targeting...",
          capBar: "10%",
          timeline: "0%",
          healthTitle: "Blueprint in progress...",
          rows: [
            { opacity: 0.5, badge: "Pending", badgeColor: "bg-slate-100 text-slate-400", bar: "0%" },
            { opacity: 0.5, badge: "Pending", badgeColor: "bg-slate-100 text-slate-400", bar: "0%" },
            { opacity: 0.5, badge: "Empty", badgeColor: "bg-slate-100 text-slate-400", bar: "0%" }
          ]
        },
        2: {
          domains: "18",
          status: { text: "Warming Up", color: "bg-amber-50 text-amber-600", dot: "bg-amber-500 animate-pulse" },
          capacity: "0 / 32k",
          capBar: "5%",
          timeline: "33%",
          healthTitle: "Ramping volume...",
          rows: [
            { opacity: 1, badge: "Warming", badgeColor: "bg-amber-50 text-amber-600", bar: "25%" },
            { opacity: 1, badge: "Warming", badgeColor: "bg-amber-50 text-amber-600", bar: "30%" },
            { opacity: 1, badge: "Configured", badgeColor: "bg-indigo-50 text-indigo-600", bar: "10%" }
          ]
        },
        3: {
          domains: "18",
          status: { text: "Active", color: "bg-emerald-50 text-emerald-600", dot: "bg-emerald-500" },
          capacity: "32,000 / day",
          capBar: "100%",
          timeline: "66%",
          healthTitle: "System Operational",
          rows: [
            { opacity: 1, badge: "Ready", badgeColor: "bg-emerald-50 text-emerald-600", bar: "100%" },
            { opacity: 1, badge: "Ready", badgeColor: "bg-emerald-50 text-emerald-600", bar: "100%" },
            { opacity: 1, badge: "Connected", badgeColor: "bg-emerald-50 text-emerald-600", bar: "100%" }
          ]
        },
        4: {
          domains: "18",
          status: { text: "Monitored", color: "bg-indigo-50 text-indigo-600", dot: "bg-indigo-500 animate-pulse" },
          capacity: "Optimized",
          capBar: "100%",
          timeline: "100%",
          healthTitle: "99.8% Placement",
          rows: [
            { opacity: 1, badge: "98% Inbox", badgeColor: "bg-emerald-50 text-emerald-600", bar: "98%" },
            { opacity: 1, badge: "96% Inbox", badgeColor: "bg-emerald-50 text-emerald-600", bar: "96%" },
            { opacity: 1, badge: "Healthy", badgeColor: "bg-emerald-50 text-emerald-600", bar: "100%" }
          ]
        }
      };

      function updateDashboard(stepIndex) {
        const state = states[stepIndex];
        
        // Update Stats
        dashDomains.innerText = state.domains;
        
        dashStatus.className = `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-500 ${state.status.color}`;
        dashStatusDot.className = `w-1.5 h-1.5 rounded-full ${state.status.dot}`;
        dashStatusText.innerText = state.status.text;

        dashCapacity.innerText = state.capacity;
        dashCapacityBar.style.width = state.capBar;
        
        // Update Timeline Line
        dashTimelineLine.style.width = state.timeline;
        
        // Update Timeline Nodes
        for(let i=1; i<=4; i++) {
          const node = document.getElementById(`node-${i}`);
          const label = document.getElementById(`label-${i}`);
          
          if(i <= stepIndex) {
            node.className = "w-3 h-3 rounded-full bg-white border-2 border-indigo-600 ring-4 ring-white transition-all duration-300 scale-125 shadow-md shadow-indigo-200";
            label.className = "text-[10px] font-bold text-indigo-600 uppercase tracking-wide transition-colors duration-300";
          } else {
            node.className = "w-3 h-3 rounded-full bg-slate-200 border-2 border-slate-200 ring-4 ring-white transition-all duration-300";
            label.className = "text-[10px] font-bold text-slate-300 uppercase tracking-wide transition-colors duration-300";
          }
        }

        // Update Health Rows
        dashHealthStatus.innerText = state.healthTitle;
        
        state.rows.forEach((row, idx) => {
          const i = idx + 1;
          const img = document.getElementById(`row-img-${i}`);
          const text = document.getElementById(`row-text-${i}`);
          const badge = document.getElementById(`row-badge-${i}`);
          const bar = document.getElementById(`row-bar-${i}`);

          if(row.opacity === 1) {
            img.classList.remove('opacity-50', 'grayscale');
            text.classList.remove('text-slate-400');
            text.classList.add('text-slate-700');
          } else {
            img.classList.add('opacity-50', 'grayscale');
            text.classList.add('text-slate-400');
            text.classList.remove('text-slate-700');
          }

          badge.innerText = row.badge;
          badge.className = `px-2 py-0.5 rounded text-[10px] font-medium transition-all duration-500 ${row.badgeColor}`;
          bar.style.width = row.bar;
        });
      }

      function setActiveStep(index) {
        // Reset all steps
        steps.forEach(s => {
          const bg = s.querySelector('.active-bg');
          const num = s.querySelector('.step-number');
          const title = s.querySelector('h3');
          
          bg.classList.remove('opacity-100');
          bg.classList.add('opacity-0');
          
          num.classList.remove('bg-indigo-600', 'text-white');
          num.classList.add('bg-slate-100', 'text-slate-500');
          
          title.classList.remove('text-indigo-600');
          title.classList.add('text-slate-900');
        });

        // Activate current
        const activeStep = document.querySelector(`.process-step[data-step="${index}"]`);
        if(activeStep) {
          const bg = activeStep.querySelector('.active-bg');
          const num = activeStep.querySelector('.step-number');
          const title = activeStep.querySelector('h3');
          
          bg.classList.remove('opacity-0');
          bg.classList.add('opacity-100');
          
          num.classList.remove('bg-slate-100', 'text-slate-500');
          num.classList.add('bg-indigo-600', 'text-white');
          
          title.classList.remove('text-slate-900');
          title.classList.add('text-indigo-600');
        }

        updateDashboard(index);
      }

      // Event Listeners
      steps.forEach(step => {
        step.addEventListener('mouseenter', () => {
          setActiveStep(parseInt(step.dataset.step));
        });
        // Click support for mobile
        step.addEventListener('click', () => {
          setActiveStep(parseInt(step.dataset.step));
        });
      });

      // Initialize
      setActiveStep(1);
    })();
  


    (function() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      const card = document.getElementById('cta-card-animate');
      if(card) observer.observe(card);
    })();
  


      // Initialize Icons
      lucide.createIcons();

      // Tab Switcher Logic
      function switchTab(tabId) {
        // Buttons
        document.querySelectorAll('.spine-tab').forEach(el => {
          el.classList.remove('active');
          el.classList.add('inactive');
          el.classList.remove('shadow-sm', 'border-slate-200'); // Remove active styles
          el.classList.add('border-transparent');
        });

        const activeBtn = document.getElementById('tab-' + tabId);
        activeBtn.classList.add('active');
        activeBtn.classList.remove('inactive');
        activeBtn.classList.add('shadow-sm');
        activeBtn.classList.remove('border-transparent');

        // Panels
        document.querySelectorAll('.spine-panel').forEach(el => el.classList.remove('active'));
        document.getElementById('panel-' + tabId).classList.add('active');
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/60 bg-[#FDFBF9]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center shadow-lg shadow-slate-900/20 group-hover:scale-105 transition-transform duration-300">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<span className="font-display font-bold text-sm tracking-tight text-slate-900">
              Hatchearly
            </span>
</a>

<nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#infrastructure">
              Infrastructure
            </a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">
              Process
            </a>
<a className="hover:text-slate-900 transition-colors" href="#integrations">
              Integrations
            </a>
<a className="hover:text-slate-900 transition-colors" href="#results">
              Results
            </a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">
              Pricing
            </a>
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-[13px] font-semibold text-white shadow-sm hover:bg-slate-800 hover:shadow-md transition-all active:scale-95" href="#book">
              Book strategy call
            </a>
</div>
</div>
</div>
</header>
<main className="sm:pt-32 pt-24">

<section className="overflow-hidden lg:pb-24 -multi pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] -z-10 opacity-60 pointer-events-none">
<div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{animationDelay: '2s'}}></div>
<div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{animationDelay: '4s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -multi">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto -multi">

<div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/80 px-3 py-1 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-8 transition-transform hover:scale-105 cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[12px] font-medium text-slate-600 tracking-tight">
                Accepting new clients for Q2 2025
              </span>
</div>

<h1 className="sm:text-5xl lg:text-6xl text-balance leading-[1.15] text-4xl font-bold text-slate-900 tracking-tight font-display">Your emails won’t book meetings if they don’t <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                lands in the inbox.
              </span></h1>

<p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-slate-500 max-w-2xl text-balance">
              Hatchearly designs, builds, and monitors enterprise-grade outbound
              systems. We handle the domains, DNS, and warming so your team can
              focus on closing deals.
            </p>

<div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200" href="#book">
                Start your build
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 transition-all duration-200" href="#case-studies">
<svg className="lucide lucide-play-circle w-4 h-4 text-slate-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                View results
              </a>
</div>

<div className="mt-8 flex items-center gap-4 text-xs font-medium text-slate-500">
<div className="flex -space-x-2">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="flex flex-col items-start">
<div className="flex gap-0.5 text-amber-500">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="">Trusted by 50+ outbound teams</span>
</div>
</div>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -multi">

<style>
    @keyframes slideWidth { from { width: 0; } to { width: 100%; } }
    @keyframes fadeInSlide { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes drawLine { from { stroke-dasharray: 100; stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
    .animate-bar-fill { animation: slideWidth 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
    .animate-fade-slide { animation: fadeInSlide 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
    .animate-path { animation: drawLine 2s ease-out forwards; }
  </style>

<div className="rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-md shadow-2xl shadow-slate-200/50 overflow-hidden relative animate-fade-slide">

<div className="flex items-center justify-between border-b border-slate-200/60 p-4 sm:px-6 bg-white/50 backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
</div>
<span className="text-xs font-mono font-medium text-emerald-700 uppercase tracking-wider animate-pulse">Live Monitoring</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-slate-400 font-mono uppercase font-medium">System Optimized</span>
<svg className="text-emerald-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>

<div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/60 bg-slate-50/30">

<div className="p-6 sm:p-8 flex flex-col justify-between group relative">

<div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>
<div className="relative z-10 space-y-8">

<div className="">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Source</h3>
<div className="group/tooltip relative cursor-help">
<svg className="text-slate-300 hover:text-indigo-500 transition-colors" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>

<div className="absolute left-6 top-0 w-48 p-2.5 bg-slate-800 text-[10px] text-slate-200 rounded-lg shadow-xl opacity-0 translate-y-2 group-hover/tooltip:opacity-100 group-hover/tooltip:translate-y-0 transition-all duration-200 pointer-events-none z-50 leading-relaxed border border-slate-700">
                  Traffic is distributed across multiple isolated lookalike domains.
                </div>
</div>
</div>
<div className="font-display font-semibold text-slate-900 text-lg tracking-tight">Multi-Domain Network</div>
<div className="mt-2 flex items-center gap-2 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-md px-2.5 py-1.5 w-fit shadow-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
              14 lookalike domains active
            </div>
</div>

<div className="">
<div className="flex items-center gap-2 mb-2">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Filtering</h3>
</div>
<div className="font-display font-semibold text-slate-900 text-lg tracking-tight">Root-Level Auth Shield</div>
<div className="mt-1 text-xs font-medium text-slate-500 flex items-center gap-1.5">
<svg className="text-emerald-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              SPF, DKIM, DMARC passed
            </div>

<div className="mt-4 flex gap-1.5">
<div className="h-1.5 flex-1 bg-emerald-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full animate-bar-fill" style={{width: '100%'}}></div>
</div>
<div className="h-1.5 flex-1 bg-emerald-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full animate-bar-fill" style={{width: '100%', animationDelay: '0.15s'}}></div>
</div>
<div className="h-1.5 flex-1 bg-emerald-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full animate-bar-fill" style={{width: '100%', animationDelay: '0.3s'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 sm:p-8 relative bg-white/40">
<div className="flex items-center justify-between mb-8">
<h3 className="text-sm font-bold text-slate-800 tracking-tight">Inbox Control Center</h3>
<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 uppercase tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Smart-Warmup Active
          </span>
</div>
<div className="space-y-8">

<div className="">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Inbox Placement Score</span>
<span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-1">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
                2.4%
              </span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-display font-bold text-slate-900 tracking-tighter counter-value" data-target="96.2">0.0</span>
<span className="text-2xl font-display font-bold text-slate-400">%</span>
</div>
<div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
<div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-full rounded-full animate-bar-fill" style={{width: '96.2%'}}></div>
</div>
</div>

<div className="">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Reputation Score</span>
<span className="text-[10px] font-mono text-slate-400">Past 7 Days</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-display font-bold text-slate-900 tracking-tighter counter-value" data-target="98">0</span>
<span className="text-xl font-display font-medium text-slate-400">/100</span>
</div>

<div className="h-10 w-full mt-2 relative overflow-hidden group/chart cursor-crosshair">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 24">
<defs>
</defs>

<path d="M0 20 Q 15 18, 30 12 T 60 8 T 100 4" fill="none" stroke="#e2e8f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path className="animate-path" d="M0 20 Q 15 18, 30 12 T 60 8 T 100 4" fill="none" stroke="#4f46e5" stroke-dasharray="100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<path className="opacity-0 group-hover/chart:opacity-100 transition-opacity duration-500" d="M0 20 Q 15 18, 30 12 T 60 8 T 100 4 V 24 H 0 Z" fill="url(#chartGradient)"></path>

<circle className="fill-indigo-600 animate-ping opacity-75" cx="100" cy="4" r="3"></circle>
<circle className="fill-white stroke-indigo-600 stroke-2" cx="100" cy="4" r="2"></circle>
</svg>
</div>
</div>
</div>
</div>

<div className="p-6 sm:p-8 bg-slate-50/50 flex flex-col">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Deliverability Checks</h3>
<div className="space-y-3 flex-1">

<div className="group/item flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-100 hover:-translate-y-0.5 transition-all duration-300">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-slate-50 rounded-lg group-hover/item:bg-red-50 transition-colors">
<img alt="Gmail" className="w-4 h-4" src="https://cdn.simpleicons.org/gmail/EA4335"/>
</div>
<span className="text-sm font-semibold text-slate-700">Gmail</span>
</div>
<div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-[10px] font-bold tracking-wide">PASS</span>
</div>
</div>

<div className="group/item flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-100 hover:-translate-y-0.5 transition-all duration-300" style={{transitionDelay: '75ms'}}>
<div className="flex items-center gap-3">
<div className="p-1.5 bg-slate-50 rounded-lg group-hover/item:bg-sky-50 transition-colors">
<img alt="Outlook" className="w-4 h-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-sm font-semibold text-slate-700">Outlook</span>
</div>
<div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-[10px] font-bold tracking-wide">PASS</span>
</div>
</div>

<div className="group/item flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-100 hover:-translate-y-0.5 transition-all duration-300" style={{transitionDelay: '150ms'}}>
<div className="flex items-center gap-3">
<div className="p-1.5 bg-slate-50 rounded-lg group-hover/item:bg-slate-100 transition-colors">
<img alt="Apple Mail" className="w-4 h-4" src="https://cdn.simpleicons.org/apple/000000"/>
</div>
<span className="text-sm font-semibold text-slate-700">Apple Mail</span>
</div>
<div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-[10px] font-bold tracking-wide">PASS</span>
</div>
</div>
</div>

<div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-400 bg-white/50 py-2 rounded-lg border border-slate-100">
<svg className="lucide lucide-activity w-3 h-3" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
           Auto-scan interval: 5m
        </div>
</div>
</div>
</div>


</div>
</section>

<section className="py-12 border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
<p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest">
      Trusted By Outbound Teams At:
    </p>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex items-center space-x-16 px-8 group-hover:[animation-play-state:paused]">

<span className="text-xl font-semibold font-display text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        AcmeCorp
      </span>

<span className="text-xl font-semibold font-display text-slate-800 italic opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        GlobalSoft
      </span>

<span className="text-xl font-bold font-display text-slate-800 tracking-tighter opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        next_gen
      </span>

<span className="text-xl font-medium font-display text-slate-800 flex items-center gap-1 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
<div className="w-4 h-4 bg-slate-800 rounded-full"></div>
        Orbital
      </span>

<span className="text-xl font-semibold font-display text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        VANTAGE
      </span>

<span className="text-xl font-serif font-semibold text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        Stirling
      </span>


<span className="text-xl font-semibold font-display text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        AcmeCorp
      </span>

<span className="text-xl font-semibold font-display text-slate-800 italic opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        GlobalSoft
      </span>

<span className="text-xl font-bold font-display text-slate-800 tracking-tighter opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        next_gen
      </span>

<span className="text-xl font-medium font-display text-slate-800 flex items-center gap-1 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
<div className="w-4 h-4 bg-slate-800 rounded-full"></div>
        Orbital
      </span>

<span className="text-xl font-semibold font-display text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        VANTAGE
      </span>

<span className="text-xl font-serif font-semibold text-slate-800 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-default">
        Stirling
      </span>
</div>
<div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
<div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
</div>
</section><section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">

<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-6">
        Your Perfect Script Doesn’t Matter If <span className="relative inline-block text-slate-900">No One Sees It<span className="absolute bottom-1 left-0 w-full h-3 bg-red-100 -z-10 skew-x-[-10deg]"></span></span>.
      </h2>
<p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto text-balance">
        You’re spending hours dealing with DNS records, purchasing domains, and praying your warmup tools work. But inevitably, two weeks later, your open rates tank.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="problem-card group relative p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 18"></path></svg>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-3 pr-4">
            Wasted lead lists &amp; burnt data.
          </h3>
<p className="text-sm text-slate-500 leading-relaxed">
            Your expensive contacts go straight to spam folders, burning through your TAM without ever getting a fair shot.
          </p>
</div>

<div className="absolute -bottom-4 -right-4 w-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none select-none">
<div className="space-y-2">
<div className="h-2 w-full bg-slate-900 rounded-full"></div>
<div className="h-2 w-[90%] bg-slate-900 rounded-full"></div>
<div className="h-2 w-full bg-red-600 rounded-full decoration-line-through"></div>
<div className="h-2 w-[80%] bg-red-600 rounded-full decoration-line-through"></div>
</div>
</div>
</div>

<div className="problem-card group relative p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden" style={{transitionDelay: '100ms'}}>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-sm">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 18"></path></svg>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-3 pr-4">
            SDRs sitting idle with no replies.
          </h3>
<p className="text-sm text-slate-500 leading-relaxed">
            Activity KPIs look green, but the meeting calendar remains empty, demoralizing your best talent.
          </p>
</div>

<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
<div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-red-100 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-red-500"></span>
<span className="text-[10px] font-bold text-slate-400">0 Replies</span>
</div>
</div>
</div>

<div className="problem-card group relative p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden" style={{transitionDelay: '200ms'}}>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 18"></path></svg>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-3 pr-4">
            Constant "Technical Anxiety".
          </h3>
<p className="text-sm text-slate-500 leading-relaxed">
            You hesitate to scale volume because you're afraid the next batch will trigger a domain burn.
          </p>
</div>

<div className="absolute bottom-0 right-0 w-full h-16 overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity">
<svg className="w-full h-full text-red-200 fill-current" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 40 L0 20 Q 20 10, 40 30 T 80 35 L 100 40 Z"></path>
</svg>
</div>
</div>
</div>
</div>


</section><section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">

<div className="absolute inset-0 bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
        The "Burn-Proof" <span className="text-indigo-600">Infrastructure Protocol</span>
</h2>
<p className="text-lg text-slate-600 font-medium leading-relaxed">
        Stop guessing. We treat deliverability as a science, not a gamble.
      </p>
</div>

<div className="space-y-6">

<div className="solution-card group relative p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start overflow-hidden">
<div className="shrink-0 relative z-10">
<div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-110 group-hover:border-indigo-100 transition-transform duration-300">
<svg className="lucide lucide-shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<div className="relative z-10">
<h3 className="font-display font-bold text-xl text-slate-900 mb-2">Root-Level Auth Shield</h3>
<p className="text-slate-600 leading-relaxed">
            We don’t just toggle settings. We configure SPF, DKIM, and DMARC at the root DNS level, creating a cryptographic ID that tells Google and Outlook you are a human, not a bot.
          </p>
</div>

<div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

<div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/10 transition-colors duration-500"></div>
</div>

<div className="solution-card group relative p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start overflow-hidden" style={{transitionDelay: '100ms'}}>
<div className="shrink-0 relative z-10">
<div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-110 group-hover:border-indigo-100 transition-transform duration-300">
<svg className="lucide lucide-waypoints" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="4.5" r="2.5"></circle><path d="m10.2 6.3-3.9 3.9"></path><circle cx="4.5" cy="12" r="2.5"></circle><path d="M7 12h10"></path><circle cx="19.5" cy="12" r="2.5"></circle><path d="m13.8 17.7 3.9-3.9"></path><circle cx="12" cy="19.5" r="2.5"></circle></svg>
</div>
</div>
<div className="relative z-10">
<h3 className="font-display font-bold text-xl text-slate-900 mb-2">Smart-Warmup Matrix</h3>
<p className="text-slate-600 leading-relaxed">
            Connected to a network of high-reputation accounts that mimic real human behavior (replies, folder moves, priority marking) to build a sender score that withstands high volume.
          </p>
</div>

<div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

<div className="solution-card group relative p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 hover:-translate-y-1 flex flex-col sm:flex-row gap-6 items-start overflow-hidden" style={{transitionDelay: '200ms'}}>
<div className="shrink-0 relative z-10">
<div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-110 group-hover:border-indigo-100 transition-transform duration-300">
<svg className="lucide lucide-activity group-hover:animate-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
</div>
<div className="relative z-10">
<h3 className="font-display font-bold text-xl text-slate-900 mb-2">Active Health Grid</h3>
<p className="text-slate-600 leading-relaxed">
            We monitor your domains 24/7. We see the smoke before the fire. If placement dips, we intervene immediately to pause sending and re-route traffic to healthy nodes.
          </p>
</div>

<div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
</div>
</div>

</section><section className="py-24 bg-white relative overflow-hidden border-b border-slate-100 insurance-section">

<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-8">
        The Industry’s Only <span className="text-indigo-600">Domain Burn Insurance</span>.
      </h2>
<div className="space-y-6 text-lg">
<p className="text-slate-500 font-medium italic">
          "We are so confident in our setup that we take on the risk."
        </p>
<p className="text-slate-900 font-semibold text-xl sm:text-2xl leading-relaxed">
          If a domain or account we manage gets flagged or hits spam, we replace it and warm up a new one for <span className="bg-indigo-50 text-indigo-700 px-1 rounded">FREE</span>.
        </p>
<p className="text-slate-600 font-medium italic">
          You never have to worry about buying domains or pausing campaigns again.
        </p>
</div>

<div className="mt-10">
<a className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300" href="#book">
          GET INSURED NOW
          <svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="relative max-w-5xl mx-auto">

<div className="hidden sm:block absolute top-[40px] left-[10%] w-[80%] h-0.5 bg-slate-100 -z-10">
<div className="h-full bg-gradient-to-r from-red-400 via-indigo-400 to-emerald-400 w-0 transition-all duration-[1500ms] ease-out delay-300 insurance-line-fill rounded-full" style={{width: '100%'}}></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">

<div className="insurance-step group flex flex-col items-center text-center opacity-0 translate-y-8 transition-all duration-700">
<div className="relative mb-6">
<div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-red-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10 relative">
<svg className="text-red-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>

<div className="absolute inset-0 bg-red-50 rounded-2xl animate-ping opacity-75"></div>

<div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border-2 border-white tracking-wide uppercase">
              Flagged
            </div>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-2">Domain Flagged</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
            Spam filters detect a dip in reputation or deliverability issues.
          </p>
</div>

<div className="insurance-step group flex flex-col items-center text-center transition-all duration-700 delay-200">
<div className="relative mb-6">
<div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-indigo-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10 relative">
<svg className="text-indigo-600 group-hover:rotate-180 transition-transform duration-700" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 21h5v-5"></path></svg>
</div>

<div className="absolute -top-3 -right-3 bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border-2 border-white tracking-wide uppercase">
              Swapped
            </div>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-2">Instant Replacement</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
            We automatically route traffic to a fresh, pre-warmed satellite domain.
          </p>
</div>

<div className="insurance-step group flex flex-col items-center text-center transition-all duration-700 delay-400">
<div className="relative mb-6">
<div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-emerald-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10 relative">
<svg className="text-emerald-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>

<div className="absolute -inset-4 bg-emerald-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border-2 border-white tracking-wide uppercase">
              Active
            </div>
</div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-2">New Domain Warmed</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
            Your outreach continues uninterrupted with 100% health score.
          </p>
</div>
</div>
</div>
</div>


</section><section className="py-24 bg-[#FDFBF9] relative overflow-hidden border-b border-slate-100" id="how-it-works">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.2] pointer-events-none"></div>
<div className="absolute right-0 top-0 h-[500px] w-[500px] bg-indigo-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute left-0 bottom-0 h-[500px] w-[500px] bg-emerald-50/50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
        How It Works
      </h2>
<p className="text-lg text-slate-500 font-medium leading-relaxed">
        From audit to a fully insured warmup infrastructure — here’s how we do it.
      </p>
</div>
<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

<div className="lg:col-span-5 flex flex-col gap-4 relative">

<div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-slate-200 hidden sm:block -z-10"></div>

<div className="process-step group relative cursor-pointer" data-step="1">
<div className="absolute inset-0 bg-white rounded-2xl border border-slate-200 shadow-sm group-hover:opacity-100 transition-opacity duration-300 -z-10 active-bg"></div>
<div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-slate-200 hover:shadow-sm" id="step-card-1">
<div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ring-4 ring-[#FDFBF9] group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 step-number">
              1
            </div>
<div>
<h3 className="font-display font-bold text-lg mb-2 group-hover:text-indigo-600 transition-colors">The Volume Audit</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                You tell us your volume goals (e.g., 'I want to send 1,000 emails/day'). We design the blueprint.
              </p>
</div>
</div>
</div>

<div className="process-step group relative cursor-pointer" data-step="2">
<div className="absolute inset-0 bg-white rounded-2xl border border-slate-200 shadow-sm opacity-0 transition-opacity duration-300 -z-10 active-bg"></div>
<div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-slate-200 hover:shadow-sm" id="step-card-2">
<div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-bold text-sm ring-4 ring-[#FDFBF9] group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 step-number">
              2
            </div>
<div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">We Build The Engine</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                We buy the domains (at cost), set up the inboxes, configure DNS, and run the 14-day warmup cycle.
              </p>
</div>
</div>
</div>

<div className="process-step group relative cursor-pointer" data-step="3">
<div className="absolute inset-0 bg-white rounded-2xl border border-slate-200 shadow-sm opacity-0 transition-opacity duration-300 -z-10 active-bg"></div>
<div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-slate-200 hover:shadow-sm" id="step-card-3">
<div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-bold text-sm ring-4 ring-[#FDFBF9] group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 step-number">
              3
            </div>
<div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Handover &amp; Scale</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                We connect the ready-to-use inboxes to your sequencer (Smartlead/Instantly). You press 'Launch'.
              </p>
</div>
</div>
</div>

<div className="process-step group relative cursor-pointer" data-step="4">
<div className="absolute inset-0 bg-white rounded-2xl border border-slate-200 shadow-sm opacity-0 transition-opacity duration-300 -z-10 active-bg"></div>
<div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 border border-transparent hover:border-slate-200 hover:shadow-sm" id="step-card-4">
<div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-bold text-sm ring-4 ring-[#FDFBF9] group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 step-number">
              4
            </div>
<div>
<h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Forever Maintenance</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                We monitor daily. You just focus on closing deals.
              </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 relative h-full min-h-[500px] lg:sticky lg:top-32">
<div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden relative transform transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">

<div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/50"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/50"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/50"></div>
</div>
<div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Hatchearly Infrastructure OS</div>
</div>
<div className="p-8 space-y-8">

<div className="grid grid-cols-3 gap-6">

<div className="space-y-1">
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Domains Online</div>
<div className="text-3xl font-display font-bold text-slate-900 transition-all duration-500" id="dash-domains">0</div>
</div>

<div className="space-y-1">
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Warmup Status</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-500 bg-slate-100 text-slate-600" id="dash-status">
<span className="w-1.5 h-1.5 rounded-full bg-slate-400" id="dash-status-dot"></span>
<span id="dash-status-text">Planning</span>
</div>
</div>

<div className="space-y-2">
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Daily Capacity</div>
<div className="text-xl font-display font-bold text-slate-900 transition-all duration-500" id="dash-capacity">Targeting...</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full w-0 transition-all duration-700 ease-out" id="dash-capacity-bar" style={{width: '10%'}}></div>
</div>
</div>
</div>

<div className="relative py-4">
<div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2"></div>

<div className="absolute top-1/2 left-0 h-0.5 bg-indigo-600 -translate-y-1/2 transition-all duration-700 w-0" id="dash-timeline-line" style={{width: '0%'}}></div>
<div className="relative z-10 flex justify-between">

<div className="flex flex-col items-center gap-2 group/node">
<div className="w-3 h-3 rounded-full bg-white border-2 border-indigo-600 ring-4 ring-white transition-all duration-300 scale-125 shadow-md shadow-indigo-200" id="node-1"></div>
<span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wide transition-colors duration-300" id="label-1">Audit</span>
</div>

<div className="flex flex-col items-center gap-2 group/node">
<div className="w-3 h-3 rounded-full bg-slate-200 border-2 border-slate-200 ring-4 ring-white transition-all duration-300" id="node-2"></div>
<span className="text-[10px] font-bold text-slate-300 uppercase tracking-wide transition-colors duration-300" id="label-2">Build</span>
</div>

<div className="flex flex-col items-center gap-2 group/node">
<div className="w-3 h-3 rounded-full bg-slate-200 border-2 border-slate-200 ring-4 ring-white transition-all duration-300" id="node-3"></div>
<span className="text-[10px] font-bold text-slate-300 uppercase tracking-wide transition-colors duration-300" id="label-3">Launch</span>
</div>

<div className="flex flex-col items-center gap-2 group/node">
<div className="w-3 h-3 rounded-full bg-slate-200 border-2 border-slate-200 ring-4 ring-white transition-all duration-300" id="node-4"></div>
<span className="text-[10px] font-bold text-slate-300 uppercase tracking-wide transition-colors duration-300" id="label-4">Monitor</span>
</div>
</div>
</div>

<div className="bg-slate-50/50 rounded-xl border border-slate-100 overflow-hidden">
<div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-white">
<span className="text-xs font-bold text-slate-700">Infrastructure Health</span>
<span className="text-[10px] text-slate-400 font-mono" id="dash-health-status">Blueprint in progress...</span>
</div>
<div className="p-4 space-y-4" id="dash-rows">

<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3 w-1/3">
<img className="w-4 h-4 opacity-50 grayscale transition-all duration-500" id="row-img-1" src="https://cdn.simpleicons.org/gmail/EA4335"/>
<span className="font-medium text-slate-400 transition-colors duration-500" id="row-text-1">Workspace 01</span>
</div>
<div className="w-1/3 text-center">
<span className="px-2 py-0.5 rounded text-[10px] font-medium transition-all duration-500 bg-slate-100 text-slate-400" id="row-badge-1">Pending</span>
</div>
<div className="w-1/3 flex justify-end">
<div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-0 transition-all duration-700" id="row-bar-1" style={{width: '0%'}}></div>
</div>
</div>
</div>

<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3 w-1/3">
<img className="w-4 h-4 opacity-50 grayscale transition-all duration-500" id="row-img-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="font-medium text-slate-400 transition-colors duration-500" id="row-text-2">Workspace 02</span>
</div>
<div className="w-1/3 text-center">
<span className="px-2 py-0.5 rounded text-[10px] font-medium transition-all duration-500 bg-slate-100 text-slate-400" id="row-badge-2">Pending</span>
</div>
<div className="w-1/3 flex justify-end">
<div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-0 transition-all duration-700" id="row-bar-2" style={{width: '0%'}}></div>
</div>
</div>
</div>

<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3 w-1/3">
<div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-500 transition-all duration-500 opacity-50 grayscale" id="row-img-3">+</div>
<span className="font-medium text-slate-400 transition-colors duration-500" id="row-text-3">Satellites</span>
</div>
<div className="w-1/3 text-center">
<span className="px-2 py-0.5 rounded text-[10px] font-medium transition-all duration-500 bg-slate-100 text-slate-400" id="row-badge-3">Empty</span>
</div>
<div className="w-1/3 flex justify-end">
<div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-0 transition-all duration-700" id="row-bar-3" style={{width: '0%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section><section className="py-24 bg-white relative overflow-hidden border-b border-slate-100" id="integrations">

<style>
    @keyframes orbit-rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes orbit-counter-rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(-360deg); }
    }
    .animate-orbit-ring {
      animation: orbit-rotate 40s linear infinite;
    }
    .animate-orbit-item {
      animation: orbit-counter-rotate 40s linear infinite;
    }
    /* Pause on hover */
    .group:hover .animate-orbit-ring,
    .group:hover .animate-orbit-item {
      animation-play-state: paused;
    }
  </style>

<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="text-center max-w-3xl mx-auto mb-20">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] font-sans">Integrations</span>
</div>
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-6">
        Works With Your Existing Outbound Stack.
      </h2>
<p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto text-balance">
        Hatchearly sits behind your sequencer as the invisible infrastructure—so you can keep using the tools you already love.
      </p>
</div>

<div className="sm:h-[450px] flex group select-none w-full h-[320px] max-w-[90vw] mr-auto ml-auto relative items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full border border-slate-100 shadow-[0_0_60px_-15px_rgba(0,0,0,0.05)]"></div>

<div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full border border-slate-100 border-dashed opacity-70"></div>
</div>

<div className="z-20 sm:h-24 sm:w-24 shadow-slate-900/20 flex transition-all duration-300 group-hover:scale-105 group-hover:shadow-indigo-500/20 bg-slate-900 w-10 h-20 ring-white ring-4 rounded-2xl relative shadow-2xl items-center justify-center">
<svg className="w-[32px] h-[32px]" data-icon-replaced="true" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{color: 'rgb(255, 255, 255)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>

<div className="-z-10 animate-pulse-slow bg-indigo-500/30 w-1 h-1 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-2xl"></div>
</div>

<div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] animate-orbit-ring rounded-full pointer-events-none">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-30">
<a className="group/node flex flex-col items-center justify-center" href="https://smartlead.ai" rel="noreferrer" target="_blank">
<div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 flex items-center justify-center p-3.5 animate-orbit-item transition-all duration-300 ease-out group-hover/node:scale-110 group-hover/node:border-indigo-100 group-hover/node:shadow-xl group-hover/node:shadow-indigo-500/10 relative">
<img alt="Smartlead" className="w-full h-full object-contain filter grayscale opacity-50 group-hover/node:grayscale-0 group-hover/node:opacity-100 transition-all duration-300" src="https://logo.clearbit.com/smartlead.ai"/>

<div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded-lg opacity-0 -translate-y-2 group-hover/node:opacity-100 group-hover/node:translate-y-0 transition-all duration-200 whitespace-nowrap shadow-xl">
                Smartlead
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
</div>
</div>
</a>
</div>

<div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 pointer-events-auto z-30">
<a className="group/node flex flex-col items-center justify-center" href="https://instantly.ai" rel="noreferrer" target="_blank">
<div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 flex items-center justify-center p-3.5 animate-orbit-item transition-all duration-300 ease-out group-hover/node:scale-110 group-hover/node:border-indigo-100 group-hover/node:shadow-xl group-hover/node:shadow-indigo-500/10 relative">
<img alt="Instantly" className="w-full h-full object-contain filter grayscale opacity-50 group-hover/node:grayscale-0 group-hover/node:opacity-100 transition-all duration-300" src="https://logo.clearbit.com/instantly.ai"/>

<div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded-lg opacity-0 -translate-y-2 group-hover/node:opacity-100 group-hover/node:translate-y-0 transition-all duration-200 whitespace-nowrap shadow-xl">
                Instantly
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
</div>
</div>
</a>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-auto z-30">
<a className="group/node flex flex-col items-center justify-center" href="#" rel="noreferrer" target="_blank">
<div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 flex items-center justify-center p-3.5 animate-orbit-item transition-all duration-300 ease-out group-hover/node:scale-110 group-hover/node:border-indigo-100 group-hover/node:shadow-xl group-hover/node:shadow-indigo-500/10 relative">

<svg className="w-8 h-8 text-slate-400 group-hover/node:text-emerald-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="M19 16v6"></path><path d="M16 19h6"></path></svg>

<div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded-lg opacity-0 -translate-y-2 group-hover/node:opacity-100 group-hover/node:translate-y-0 transition-all duration-200 whitespace-nowrap shadow-xl">
                Email Bison
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
</div>
</div>
</a>
</div>

<div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-30">
<a className="group/node flex flex-col items-center justify-center" href="https://lemlist.com" rel="noreferrer" target="_blank">
<div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 flex items-center justify-center p-3.5 animate-orbit-item transition-all duration-300 ease-out group-hover/node:scale-110 group-hover/node:border-indigo-100 group-hover/node:shadow-xl group-hover/node:shadow-indigo-500/10 relative">
<img alt="Lemlist" className="w-full h-full object-contain filter grayscale opacity-50 group-hover/node:grayscale-0 group-hover/node:opacity-100 transition-all duration-300" src="https://logo.clearbit.com/lemlist.com"/>

<div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded-lg opacity-0 -translate-y-2 group-hover/node:opacity-100 group-hover/node:translate-y-0 transition-all duration-200 whitespace-nowrap shadow-xl">
                Lemlist
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
</section><section className="py-24 bg-white relative overflow-hidden" id="cta-section">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 flex flex-col lg:flex-row min-h-[550px] opacity-0 translate-y-8 transition-all duration-700 ease-out group/card" id="cta-card-animate">

<div className="flex-1 bg-slate-900 p-10 sm:p-16 flex flex-col justify-center relative z-10">

<div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-lg">
<h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-[1.1]">
            Ready To Build Your 
            <span className="text-indigo-400">‘Forever’ Infrastructure?</span>
</h2>
<p className="mt-6 text-lg text-slate-400 leading-relaxed font-medium text-balance">
            We only onboard a limited number of clients per month to maintain our warmup networks. Check availability for this week.
          </p>
<div className="mt-10 flex flex-col items-start gap-4">
<a className="relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all duration-300 bg-indigo-600 border border-indigo-500 rounded-full shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] hover:bg-indigo-500 hover:scale-[1.03] hover:shadow-[0_0_30px_-5px_rgba(79,70,229,0.6)] active:scale-[0.98] group/btn overflow-hidden" href="#book">
<span className="relative z-10 tracking-widest uppercase">Book Strategy Call</span>

<div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
</a>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<svg className="text-emerald-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Includes a free audit of your current deliverability setup.</span>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-gradient-to-br from-indigo-50 via-[#E0E7FF] to-slate-100 relative p-10 flex items-center justify-center overflow-hidden">

<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent opacity-60"></div>

<div className="relative w-full max-w-md perspective-1000">

<div className="absolute -top-12 -left-6 z-30 bg-white rounded-full p-4 shadow-xl shadow-indigo-900/10 animate-[float_4s_ease-in-out_infinite]">
<svg className="text-slate-900" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle className="origin-center animate-[blink_4s_infinite]" cx="12" cy="12" r="3"></circle>
<path className="stroke-white fill-white opacity-0 animate-[blink-cover_4s_infinite]" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
</svg>
</div>

<div className="relative z-20 bg-slate-900 rounded-2xl shadow-2xl shadow-indigo-900/20 border border-slate-800 p-6 sm:p-8 transform rotate-1 transition-transform duration-700 group-hover/card:rotate-0 group-hover/card:translate-y-[-5px]">

<div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-serif italic text-lg border border-white/10">
                @
              </div>
<div className="space-y-2 flex-1">
<div className="h-2 w-24 bg-white/20 rounded-full"></div>
<div className="h-2 w-16 bg-white/10 rounded-full"></div>
</div>
</div>

<div className="space-y-4">
<div className="h-3 w-full bg-white/5 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="h-3 w-[90%] bg-white/5 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="h-3 w-[95%] bg-white/5 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
<div className="h-3 w-[85%] bg-white/5 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
<div className="flex gap-2 pt-2">
<div className="h-8 w-24 bg-indigo-600/20 rounded-lg border border-indigo-500/30"></div>
</div>
</div>

<div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/20 border border-white/20 transform translate-x-2 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-500 delay-100">
              Inbox Placement: 98%
            </div>
</div>

<div className="absolute inset-0 bg-slate-800 rounded-2xl transform translate-x-4 translate-y-4 -z-10 opacity-50"></div>
</div>
</div>
</div>
</div>
<style>
    @keyframes blink {
      0%, 45%, 55%, 100% { transform: scaleY(1); }
      50% { transform: scaleY(0.1); }
    }
    @keyframes blink-cover {
      0%, 48%, 52%, 100% { opacity: 0; }
      50% { opacity: 0; } 
      /* Simple scale trick is better for SVG pure CSS animation without complex path morphing */
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes shimmer {
      100% { transform: translateX(100%); }
    }
    .perspective-1000 {
      perspective: 1000px;
    }
  </style>

</section>

<section className="sm:py-32 pt-24 pb-24" id="infrastructure">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-16">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Enterprise-grade infrastructure,
              <br className="hidden sm:block"/>
              commoditized.
            </h2>
<p className="mt-4 text-lg text-slate-600">
              We don't just "warm up emails." We build a resilient network of
              domains and inboxes that acts as a shield for your primary brand.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="p-8">
<div className="flex items-center gap-4 mb-6">
<div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600 ring-1 ring-indigo-100">
<svg className="lucide lucide-globe w-6 h-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="font-display font-bold text-xl text-slate-900">
                    Multi-Domain Architecture
                  </h3>
</div>
<p className="text-slate-500 mb-8 max-w-lg">
                  We procure and configure 10-50+ lookalike domains (e.g.,
                  gethatchearly.com) to distribute volume. If one burns, your
                  main domain stays pristine.
                </p>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-3 flex flex-col gap-2">
<span className="text-[10px] font-bold text-emerald-700 uppercase">
                      Primary
                    </span>
<span className="text-xs font-mono text-slate-700 truncate">
                      hatchearly.com
                    </span>
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500 mt-auto" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3 flex flex-col gap-2 opacity-60">
<span className="text-[10px] font-bold text-slate-500 uppercase">
                      Satellite 1
                    </span>
<span className="text-xs font-mono text-slate-600 truncate">
                      tryhatchearly.com
                    </span>
<div className="h-1 w-full bg-emerald-400 rounded-full mt-auto"></div>
</div>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3 flex flex-col gap-2 opacity-60">
<span className="text-[10px] font-bold text-slate-500 uppercase">
                      Satellite 2
                    </span>
<span className="text-xs font-mono text-slate-600 truncate">
                      gethatchearly.com
                    </span>
<div className="h-1 w-full bg-emerald-400 rounded-full mt-auto"></div>
</div>
<div className="rounded-lg border border-rose-200 bg-rose-50/50 p-3 flex flex-col gap-2">
<span className="text-[10px] font-bold text-rose-700 uppercase">
                      Burned
                    </span>
<span className="text-xs font-mono text-slate-700 truncate decoration-line-through">
                      usehatchearly.com
                    </span>
<span className="text-[10px] font-bold text-rose-600 mt-auto flex items-center gap-1">
<svg className="lucide lucide-refresh-cw w-3 h-3" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
                      Replaced
                    </span>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-sm">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative p-8 h-full flex flex-col justify-between">
<div>
<div className="p-2.5 w-fit bg-white/10 backdrop-blur rounded-xl mb-6 ring-1 ring-white/20">
<svg className="lucide lucide-radar w-6 h-6 text-emerald-300" data-lucide="radar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg>
</div>
<h3 className="font-display font-bold text-xl mb-2">
                    Inbox Pulse™
                  </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                    Continuous placement testing across Gmail, Outlook, and
                    corporate filters. We know you're landing in spam before you
                    do.
                  </p>
</div>
<div className="mt-8 bg-white/5 rounded-xl border border-white/10 p-4 backdrop-blur-sm">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-300">
                      Live Health
                    </span>
<span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
</div>
<div className="flex items-end gap-1 h-12">
<div className="w-1/6 bg-emerald-500/80 rounded-t-sm h-[80%]"></div>
<div className="w-1/6 bg-emerald-500/90 rounded-t-sm h-[90%]"></div>
<div className="w-1/6 bg-emerald-500 rounded-t-sm h-[100%]"></div>
<div className="w-1/6 bg-emerald-500/80 rounded-t-sm h-[85%]"></div>
<div className="w-1/6 bg-emerald-500/90 rounded-t-sm h-[95%]"></div>
<div className="w-1/6 bg-amber-500 rounded-t-sm h-[60%] animate-pulse"></div>
</div>
<div className="mt-2 text-[10px] text-amber-300 flex items-center gap-1">
<svg className="lucide lucide-alert-circle w-3 h-3" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
                    Deviation detected on Node 4
                  </div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col justify-center text-center">
<div className="mx-auto p-3 bg-amber-50 rounded-full text-amber-600 mb-4 ring-1 ring-amber-100">
<svg className="lucide lucide-shield-check w-8 h-8" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="font-display font-bold text-lg text-slate-900">
                Zero-Cost Replacement
              </h3>
<p className="mt-2 text-sm text-slate-500">
                If an inbox dips below 90% placement, we burn it and spin up a
                fresh one instantly. No extra fees.
              </p>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-8">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<h3 className="font-display font-bold text-xl text-slate-900">
                  14-Day Ramp Schedule
                </h3>
<span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">
                  Standard Protocol
                </span>
</div>
<div className="relative">
<div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2"></div>
<div className="grid grid-cols-4 gap-4 relative z-10">

<div className="flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">
                      01
                    </div>
<div className="text-xs font-bold text-slate-900">Config</div>
<div className="text-[10px] text-slate-500 leading-tight">
                      DNS, SPF, DKIM, DMARC Setup
                    </div>
</div>

<div className="flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-white border-2 border-slate-900 text-slate-900 flex items-center justify-center text-xs font-bold ring-4 ring-white">
                      07
                    </div>
<div className="text-xs font-bold text-slate-900">Warm-up</div>
<div className="text-[10px] text-slate-500 leading-tight">
                      Artificial traffic network
                    </div>
</div>

<div className="flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 flex items-center justify-center text-xs font-bold ring-4 ring-white">
                      14
                    </div>
<div className="text-xs font-bold text-slate-500">Go Live</div>
<div className="text-[10px] text-slate-400 leading-tight">
                      Low volume sequence start
                    </div>
</div>

<div className="flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 flex items-center justify-center text-xs font-bold ring-4 ring-white">
                      30
                    </div>
<div className="text-xs font-bold text-slate-500">Scale</div>
<div className="text-[10px] text-slate-400 leading-tight">
                      Full capacity reached
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-850 text-white overflow-hidden relative isolate border-t border-slate-800" id="testimonials">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-6 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Founder Story
              </div>
<h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-6 leading-tight">
                "We went from 20% open rates to
                <span className="text-emerald-400">65% in three weeks.</span>
                "
              </h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed text-balance">
                See how ScaleUp.io utilized Hatchearly's managed infrastructure
                to bypass spam filters and triple their pipeline generation
                without hiring a single SDR.
              </p>
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-slate-800 border-2 border-slate-700 overflow-hidden">
<img alt="Speaker" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="font-bold text-white">Alex Rivera</div>
<div className="text-sm text-slate-500">CRO at ScaleUp.io</div>
</div>
</div>
</div>
<div className="relative group rounded-2xl overflow-hidden bg-slate-900 aspect-video shadow-2xl shadow-black/50 border border-white/10 ring-1 ring-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
<img alt="Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center z-20">
<button className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
<div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
<svg className="lucide lucide-play w-5 h-5 text-slate-900 fill-slate-900 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</button>
</div>
<div className="absolute bottom-4 left-6 right-6 flex items-center justify-between z-20">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-medium text-white shadow-black drop-shadow-md">
                    Watch Interview
                  </span>
</div>
<span className="px-2 py-1 bg-black/60 backdrop-blur rounded text-[10px] font-mono text-white border border-white/10">
                  02:14
                </span>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#FDFBF9] relative overflow-hidden" id="integrations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Seamlessly integrated stack.
            </h2>
<p className="mt-4 text-slate-500 text-lg">
              Connect your existing sales engagement platforms. We handle the
              plumbing, you keep your workflow.
            </p>
</div>
<div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center">
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<div className="w-[600px] h-[600px] border border-slate-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
<div className="absolute w-[400px] h-[400px] border border-slate-200 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
</div>
<div className="relative z-10 h-24 w-24 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center ring-4 ring-slate-50">
<div className="h-10 w-10 rounded-lg bg-slate-900 flex items-center justify-center">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
</div>
<div className="absolute top-1/2 left-[10%] -translate-y-1/2 bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 animate-blob hover:scale-110 transition-transform cursor-pointer">
<img alt="Salesforce" className="w-8 h-8" src="https://cdn.simpleicons.org/salesforce/00A1E0"/>
</div>
<div className="absolute top-[15%] right-[20%] bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 animate-blob hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '1s'}}>
<img alt="HubSpot" className="w-8 h-8" src="https://cdn.simpleicons.org/hubspot/FF7A59"/>
</div>
<div className="absolute bottom-[20%] right-[15%] bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 animate-blob hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '2s'}}>
<img alt="Gmail" className="w-8 h-8" src="https://cdn.simpleicons.org/gmail/EA4335"/>
</div>
<div className="absolute bottom-[10%] left-[25%] bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 animate-blob hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '3s'}}>
<img alt="Outreach" className="w-8 h-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="absolute top-[10%] left-[30%] bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 animate-blob hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '1.5s'}}>
<img alt="Outlook" className="w-8 h-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white border-y border-slate-100" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-display font-bold text-3xl text-slate-900 tracking-tight text-center mb-12">
            Frequently Asked Questions
          </h2>
<div className="space-y-4">
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl bg-slate-50 p-6 text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.99]">
<h3 className="font-semibold text-sm sm:text-base">
                  How long does the warm-up process take?
                </h3>
<div className="bg-white p-1.5 rounded-full border border-slate-200 text-slate-400 group-open:rotate-180 group-open:text-slate-900 transition-all duration-300 shadow-sm">
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-slate-50 rounded-b-xl -mt-2 text-slate-600 leading-relaxed text-sm animate-fade-in">
                We typically require a 14-day warm-up period for fresh domains
                to reach optimal deliverability. However, our pre-warmed pools
                allow some clients to start sending at volume within 72 hours.
              </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl bg-slate-50 p-6 text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.99]">
<h3 className="font-semibold text-sm sm:text-base">
                  Do you replace burned domains?
                </h3>
<div className="bg-white p-1.5 rounded-full border border-slate-200 text-slate-400 group-open:rotate-180 group-open:text-slate-900 transition-all duration-300 shadow-sm">
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-slate-50 rounded-b-xl -mt-2 text-slate-600 leading-relaxed text-sm animate-fade-in">
                Yes. If a domain's health score drops below our threshold
                despite following best practices, we replace it instantly from
                our reserve pool at no additional cost. It's part of the
                subscription.
              </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl bg-slate-50 p-6 text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.99]">
<h3 className="font-semibold text-sm sm:text-base">
                  Can I use my existing domains?
                </h3>
<div className="bg-white p-1.5 rounded-full border border-slate-200 text-slate-400 group-open:rotate-180 group-open:text-slate-900 transition-all duration-300 shadow-sm">
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-slate-50 rounded-b-xl -mt-2 text-slate-600 leading-relaxed text-sm animate-fade-in">
                We strongly recommend against using your primary corporate
                domain for high-volume outbound to protect your internal
                communication. We build a satellite infrastructure that mirrors
                your brand identity.
              </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl bg-slate-50 p-6 text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.99]">
<h3 className="font-semibold text-sm sm:text-base">
                  What sending platforms do you integrate with?
                </h3>
<div className="bg-white p-1.5 rounded-full border border-slate-200 text-slate-400 group-open:rotate-180 group-open:text-slate-900 transition-all duration-300 shadow-sm">
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-slate-50 rounded-b-xl -mt-2 text-slate-600 leading-relaxed text-sm animate-fade-in">
                We are platform-agnostic. Whether you use Smartlead, Instantly,
                Outreach, Salesloft, or HubSpot, our infrastructure plugs
                directly into your existing SMTP/IMAP settings.
              </div>
</details>
</div>
</div>
</section>
<section className="py-24 bg-slate-850 text-white relative overflow-hidden" id="book">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-indigo-400 font-semibold tracking-wide uppercase text-xs">
                Availability Limited
              </span>
<h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl tracking-tight leading-tight">
                Stop playing DNS roulette.
                <br/>
<span className="text-slate-400">Get a strategy that works.</span>
</h2>
<p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg">
                We'll audit your current setup for free. If we work together,
                you only pay for the infrastructure you use, at cost, plus a
                simple management fee.
              </p>
<div className="mt-10 space-y-4">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-slate-200">
                    Full audit of existing domains and blacklist status
                  </span>
</div>
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-slate-200">
                    Volume capacity planning for your Q3 goals
                  </span>
</div>
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-slate-200">
                    No commitment required for the strategy call
                  </span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-2 shadow-2xl shadow-black/50">
<div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-slate-900 font-bold text-lg">
                      Book Infrastructure Audit
                    </h3>
<p className="text-slate-500 text-xs mt-1">
                      30 min • Google Meet
                    </p>
</div>
<div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Founder" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Work Email
                    </label>
<input className="w-full rounded-lg border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm" placeholder="name@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Monthly Sending Volume
                    </label>
<select className="w-full rounded-lg border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm">
<option>Less than 5,000 / mo</option>
<option>5,000 - 25,000 / mo</option>
<option>25,000 - 100,000 / mo</option>
<option>100,000+ / mo</option>
</select>
</div>
<button className="w-full mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all active:scale-[0.98]" type="button">
                    Select a Time
                  </button>
</form>
<p className="text-[10px] text-center text-slate-400 mt-4">
                  Prefer email?
                  <a className="text-indigo-600 underline" href="#">
                    hello@hatchearly.com
                  </a>
</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="h-6 w-6 rounded bg-slate-900 flex items-center justify-center">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<span className="font-display font-bold text-sm text-slate-900">
                  Hatchearly
                </span>
</a>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                The infrastructure layer for modern outbound teams. We protect
                your domains so you can scale your revenue.
              </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Product</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li>
<a className="hover:text-indigo-600 transition" href="#">
                    Infrastructure
                  </a>
</li>
<li>
<a className="hover:text-indigo-600 transition" href="#">
                    Monitoring
                  </a>
</li>
<li>
<a className="hover:text-indigo-600 transition" href="#">
                    Pricing
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li>
<a className="hover:text-indigo-600 transition" href="#">About</a>
</li>
<li>
<a className="hover:text-indigo-600 transition" href="#">
                    Case Studies
                  </a>
</li>
<li>
<a className="hover:text-indigo-600 transition" href="#">
                    Contact
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Legal</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li>
<a className="hover:text-indigo-600 transition" href="#">
                    Privacy
                  </a>
</li>
<li>
<a className="hover:text-indigo-600 transition" href="#">Terms</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
              © 2025 Hatchearly Inc. All rights reserved.
            </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600 transition" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-slate-400 hover:text-slate-600 transition" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
