import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons
      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
      }

      // Current year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Tabs logic
      const tabCases = document.getElementById('tab-cases');
      const tabExperiments = document.getElementById('tab-experiments');
      const gridCases = document.getElementById('grid-cases');
      const gridExperiments = document.getElementById('grid-experiments');

      function activateTab(which) {
        const activeStyles = () => {
          return {
            color: 'var(--color-primary-emphasis)',
            background: 'white',
            border: '1px solid var(--color-neutral-200)'
          };
        };
        const inactiveStyles = (el) => {
          el.style.color = 'var(--color-neutral-700)';
          el.style.background = 'transparent';
          el.style.border = '0';
        };

        if (which === 'cases') {
          gridCases.classList.remove('hidden');
          gridExperiments.classList.add('hidden');
          Object.assign(tabCases.style, activeStyles());
          inactiveStyles(tabExperiments);
        } else {
          gridExperiments.classList.remove('hidden');
          gridCases.classList.add('hidden');
          Object.assign(tabExperiments.style, activeStyles());
          inactiveStyles(tabCases);
        }
      }

      tabCases?.addEventListener('click', () => activateTab('cases'));
      tabExperiments?.addEventListener('click', () => activateTab('experiments'));

      // Form logic
      const form = document.getElementById('contact-form');
      const alertBox = document.getElementById('form-alert');
      const submitBtn = document.getElementById('submit-btn');
      const submitSpinner = document.getElementById('submit-spinner');

      function showAlert(type, message) {
        alertBox.classList.remove('hidden');
        alertBox.textContent = message;
        alertBox.style.background = type === 'success' ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)';
        alertBox.style.color = type === 'success' ? '#065F46' : '#7F1D1D';
        alertBox.style.border = '1px solid var(--color-neutral-200)';
      }

      function setLoading(loading) {
        if (loading) {
          submitSpinner.classList.remove('hidden');
          submitBtn.setAttribute('disabled', 'true');
        } else {
          submitSpinner.classList.add('hidden');
          submitBtn.removeAttribute('disabled');
        }
      }

      function validateField(el) {
        const valid = el.checkValidity();
        el.style.borderColor = valid ? 'var(--color-neutral-200)' : '#EF4444';
        el.style.boxShadow = valid ? '' : '0 0 0 2px rgba(239,68,68,0.1)';
        el.setAttribute('aria-invalid', !valid);
        return valid;
      }

      ['name','email','reason','message'].forEach(id => {
        const el = document.getElementById(id);
        el?.addEventListener('input', () => validateField(el));
      });

      form?.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const company = document.getElementById('company');
        const reason = document.getElementById('reason');
        const message = document.getElementById('message');
        const consent = document.getElementById('consent');

        const fieldsValid = [name, email, reason, message, consent].map(validateField).every(Boolean);
        if (!fieldsValid) {
          showAlert('error', 'Please complete the required fields.');
          return;
        }

        setLoading(true);

        // Build mailto
        const subject = encodeURIComponent(`Portfolio inquiry — ${reason.value}`);
        const body = encodeURIComponent(
`Hi,

Name: ${name.value}
Email: ${email.value}
Company: ${company.value || '-'}
Reason: ${reason.value}

Message:
${message.value}

— Sent from portfolio`
        );

        // Simulate processing + trigger email client
        setTimeout(() => {
          window.location.href = `mailto:designer@example.com?subject=${subject}&body=${body}`;
          setLoading(false);
          showAlert('success', 'Opening your email client… If it does not open, use the "Or email directly" link.');
          form.reset();
        }, 400);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="fixed inset-0 h-screen w-full pointer-events-none">
<iframe className="w-full h-full pointer-events-none" frameborder="0" height="100%" src="https://my.spline.design/glasswave-UJxPNnCbIoAYyQy8jnzwzS9q" width="100%"></iframe>
</div>

<div aria-hidden="true" className="fixed bottom-4 right-4 w-40 h-24 pointer-events-none" style={{background: 'white'}}></div>

<div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none">
<div className="w-full h-full opacity-80" style="
        background:
          radial-gradient(900px 400px at 20% -5%, rgba(46,91,218,0.10), transparent 60%),
          radial-gradient(800px 380px at 80% 0%, rgba(0,212,180,0.10), transparent 60%),
          radial-gradient(700px 360px at 50% 100%, rgba(255,107,107,0.06), transparent 60%),
          linear-gradient(180deg, rgba(248,250,252,0.85), rgba(255,255,255,0.92));
      "></div>
<div className="absolute inset-x-0 top-0 h-px" style={{background: 'linear-gradient(90deg, rgba(46,91,218,0.15), rgba(0,212,180,0.10), rgba(255,107,107,0.10))'}}></div>
</div>

<header className="fixed z-50 md:px-6 pr-4 pl-4 top-4 right-0 left-0">
<div className="max-w-6xl mx-auto rounded-2xl border shadow-lg backdrop-blur-md" style={{background: 'rgba(255,255,255,0.7)', borderColor: 'var(--color-neutral-200)'}}>
<div className="flex md:px-6 pt-3 pr-4 pb-3 pl-4 items-center justify-between">

<a aria-label="Home" className="flex items-center gap-3 group" href="#top">
<div className="w-9 h-9 rounded-lg flex items-center justify-center shadow-sm ring-1" style={{background: 'var(--color-primary-subtle)', color: 'var(--color-primary-base)', ringColor: 'var(--color-neutral-200)'}}>
<span className="text-sm font-semibold tracking-tight">AI</span>
</div>
<span className="text-sm md:text-base font-medium tracking-tight group-hover:opacity-90 transition-opacity">Senior Product Designer</span>
</a>

<nav className="hidden md:flex items-center gap-7 text-sm">
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium transition-all hover:shadow-sm" href="#portfolio" style={{background: 'var(--color-primary-base)', color: 'white'}}>
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
              View Work
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium transition-all hover:shadow-sm border" href="#contact" style={{borderColor: 'var(--color-neutral-200)', color: 'var(--color-primary-emphasis)', background: 'white'}}>
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              Contact
            </a>
</div>
</div>
</div>
</header>
<main className="md:pt-32 pt-32" id="top">

<section className="relative" id="about">
<div className="max-w-7xl mx-auto px-5 sm:px-6">
<div className="text-center">
<p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest border rounded-full pt-1 pr-3 pb-1 pl-3" style={{borderColor: 'var(--color-neutral-200)', color: 'var(--color-primary-emphasis)', background: 'linear-gradient(90deg, rgba(0,212,180,0.14), rgba(46,91,218,0.10), rgba(255,107,107,0.14))'}}>
<svg className="lucide lucide-bot w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(27, 59, 168)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
              Conversational &amp; Agentic AI
            </p>
<h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl tracking-tight font-semibold" style={{color: 'var(--color-neutral-900)'}}>
              I design the future of AI workflows &amp; agent experiences
            </h1>
<p className="mt-4 text-base sm:text-lg md:text-xl mx-auto max-w-3xl" style={{color: 'var(--color-neutral-700)'}}>
              Hybrid designer–engineer with 15+ years across engineering, UX, and AI design. I began in embedded/software engineering,
              transitioned into UX design for complex SaaS and data products, and now focus on agentic AI, conversational workflows,
              and human–AI collaboration. Each step was intentional: to combine technical fluency with human-centered design, and to
              become a trailblazer in AI UX innovation.
            </p>

<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-all hover:shadow-md" href="#portfolio" style={{background: 'var(--color-primary-base)', color: 'white'}}>
                Explore Case Studies
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium border transition-all hover:shadow-sm" href="#contact" style={{borderColor: 'var(--color-accent-teal)', color: 'var(--color-primary-emphasis)', background: 'white'}}>
                Get in Touch
                <svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</a>
</div>
</div>

<div className="md:mt-14 mt-10">
<div className="mx-auto max-w-6xl">

<div className="text-center mb-8">
<div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest rounded-full px-3 py-1.5 mb-4" style={{background: 'linear-gradient(90deg, rgba(46,91,218,0.08), rgba(0,212,180,0.12))', color: 'var(--color-primary-emphasis)', border: '1px solid var(--color-neutral-200)'}}>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
        System Architecture
      </div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{color: 'var(--color-neutral-900)'}}>Multi-Agent Orchestration</h2>
<p className="text-base sm:text-lg max-w-2xl mx-auto" style={{color: 'var(--color-neutral-700)'}}>A conversational scheduling system powered by specialized AI agents working in harmony</p>
</div>

<div className="rounded-2xl border shadow-xl overflow-hidden backdrop-blur-md" style={{borderColor: 'var(--color-neutral-200)', background: 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))'}}>

<div className="sm:p-8 border-b pt-6 pr-6 pb-6 pl-6" style={{borderColor: 'var(--color-neutral-200)', background: 'linear-gradient(135deg, rgba(46,91,218,0.03), rgba(0,212,180,0.02))'}}>
<div className="flex items-start justify-between gap-6 flex-wrap">
<div className="flex-1 min-w-[280px]">
<div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-lg" style={{background: 'white', border: '1px solid var(--color-primary-base)', boxShadow: '0 2px 8px rgba(46,91,218,0.12)'}}>
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'var(--color-primary-base)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6"></path><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"></path><path d="M1 12h6m6 0h6"></path><path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"></path></svg>
<span className="text-sm font-semibold" style={{color: 'var(--color-primary-emphasis)'}}>Orchestrator Agent</span>
</div>
<h3 className="text-xl font-semibold mb-2" style={{color: 'var(--color-neutral-900)'}}>Central Intelligence Layer</h3>
<p className="text-sm mb-4" style={{color: 'var(--color-neutral-700)'}}>Coordinates all agent activities, manages conversation flow, and ensures safe execution of scheduling tasks</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md" style={{background: 'rgba(46,91,218,0.1)', color: 'var(--color-primary-emphasis)', border: '1px solid rgba(46,91,218,0.2)'}}>
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2M12 2v2M17 20v2M17 2v2M2 12h2M2 17h2M2 7h2M20 12h2M20 17h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
                Dynamic Prompting
              </span>
<span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md" style={{background: 'rgba(0,212,180,0.1)', color: 'var(--color-accent-teal)', border: '1px solid rgba(0,212,180,0.2)'}}>
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                Context Aware
              </span>
<span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md" style={{background: 'rgba(255,107,107,0.1)', color: 'var(--color-accent-coral)', border: '1px solid rgba(255,107,107,0.2)'}}>
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                Safety First
              </span>
</div>
</div>
<div className="rounded-xl p-4 min-w-[260px]" style={{background: 'white', border: '1px solid var(--color-neutral-200)', boxShadow: '0 4px 12px rgba(0,0,0,0.04)'}}>
<div className="text-xs font-semibold mb-3 uppercase tracking-wider" style={{color: 'var(--color-neutral-900)'}}>Output Types</div>
<div className="space-y-2 text-xs" style={{color: 'var(--color-neutral-700)'}}>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--color-primary-base)'}}></span>
                ScheduleWithSuggestions
              </div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--color-primary-base)'}}></span>
                ExecuteScheduling
              </div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--color-primary-base)'}}></span>
                NeedsClarification
              </div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full" style={{background: 'var(--color-primary-base)'}}></span>
                SuggestAlternatives
              </div>
</div>
</div>
</div>
</div>

<div className="p-6 sm:p-8">
<div className="text-center mb-6">
<h3 className="text-lg font-semibold mb-1" style={{color: 'var(--color-neutral-900)'}}>Specialized Agent Network</h3>
<p className="text-sm" style={{color: 'var(--color-neutral-700)'}}>Three expert agents handling specific workflow domains</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

<div className="rounded-xl p-5 transition-all hover:shadow-md" style={{background: 'linear-gradient(135deg, rgba(0,212,180,0.08), rgba(0,212,180,0.02))', border: '1px solid var(--color-neutral-200)'}}>
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'var(--color-accent-teal)', color: 'white'}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
</div>
<span className="w-2 h-2 rounded-full animate-pulse" style={{background: 'var(--color-accent-teal)'}}></span>
</div>
<h4 className="text-base font-semibold mb-2" style={{color: 'var(--color-neutral-900)'}}>Schedule Intelligence</h4>
<p className="text-xs mb-3" style={{color: 'var(--color-neutral-700)'}}>Analyzes patterns, preferences, and optimal time slots based on user behavior and constraints</p>
<div className="text-xs space-y-1" style={{color: 'var(--color-neutral-700)'}}>
<div className="flex items-center gap-2">
<span style={{color: 'var(--color-neutral-400)'}}>•</span>
                Dynamic System Prompt
              </div>
<div className="flex items-center gap-2">
<span style={{color: 'var(--color-neutral-400)'}}>•</span>
                Output: ScheduleIntelligence
              </div>
</div>
</div>

<div className="rounded-xl p-5 transition-all hover:shadow-md" style={{background: 'linear-gradient(135deg, rgba(46,91,218,0.08), rgba(46,91,218,0.02))', border: '1px solid var(--color-neutral-200)'}}>
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'var(--color-primary-base)', color: 'white'}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="w-2 h-2 rounded-full animate-pulse" style={{background: 'var(--color-primary-base)', animationDelay: '0.2s'}}></span>
</div>
<h4 className="text-base font-semibold mb-2" style={{color: 'var(--color-neutral-900)'}}>Conflict Checker</h4>
<p className="text-xs mb-3" style={{color: 'var(--color-neutral-700)'}}>Validates scheduling decisions against existing commitments and identifies potential conflicts</p>
<div className="text-xs space-y-1" style={{color: 'var(--color-neutral-700)'}}>
<div className="flex items-center gap-2">
<span style={{color: 'var(--color-neutral-400)'}}>•</span>
                Static Instructions
              </div>
<div className="flex items-center gap-2">
<span style={{color: 'var(--color-neutral-400)'}}>•</span>
                Output: ConflictCheck
              </div>
</div>
</div>

<div className="rounded-xl p-5 transition-all hover:shadow-md" style={{background: 'linear-gradient(135deg, rgba(255,107,107,0.08), rgba(255,107,107,0.02))', border: '1px solid var(--color-neutral-200)'}}>
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'var(--color-accent-coral)', color: 'white'}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4M16 2v4M3 10h18"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="m9 16 2 2 4-4"></path></svg>
</div>
<span className="w-2 h-2 rounded-full animate-pulse" style={{background: 'var(--color-accent-coral)', animationDelay: '0.4s'}}></span>
</div>
<h4 className="text-base font-semibold mb-2" style={{color: 'var(--color-neutral-900)'}}>Calendar Executor</h4>
<p className="text-xs mb-3" style={{color: 'var(--color-neutral-700)'}}>Safely executes approved scheduling actions across integrated calendar platforms</p>
<div className="text-xs space-y-1" style={{color: 'var(--color-neutral-700)'}}>
<div className="flex items-center gap-2">
<span style={{color: 'var(--color-neutral-400)'}}>•</span>
                Dynamic System Prompt
              </div>
<div className="flex items-center gap-2">
<span style={{color: 'var(--color-neutral-400)'}}>•</span>
                Output: ExecutionResult
              </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-xl p-4 flex items-center gap-4" style={{background: 'rgba(248,250,252,0.6)', border: '1px solid var(--color-neutral-200)'}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{background: 'white', border: '1px solid var(--color-neutral-200)'}}>
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'var(--color-primary-base)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div>
<div className="text-sm font-semibold mb-0.5" style={{color: 'var(--color-neutral-900)'}}>User Context</div>
<div className="text-xs" style={{color: 'var(--color-neutral-700)'}}>Preferences, timezone, and behavioral patterns</div>
</div>
</div>
<div className="rounded-xl p-4 flex items-center gap-4" style={{background: 'rgba(248,250,252,0.6)', border: '1px solid var(--color-neutral-200)'}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{background: 'white', border: '1px solid var(--color-neutral-200)'}}>
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'var(--color-accent-teal)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div className="">
<div className="text-sm font-semibold mb-0.5" style={{color: 'var(--color-neutral-900)'}}>Calendar APIs</div>
<div className="text-xs" style={{color: 'var(--color-neutral-700)'}}>Google Calendar, Outlook, and other integrations</div>
</div>
</div>
</div>
</div>

<div className="px-6 sm:px-8 pb-6 pt-4 border-t flex flex-wrap items-center justify-between gap-4" style={{borderColor: 'var(--color-neutral-200)', background: 'rgba(248,250,252,0.4)'}}>
<div className="flex flex-wrap items-center gap-3">
<span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg" style={{background: 'white', color: 'var(--color-neutral-700)', border: '1px solid var(--color-neutral-200)'}}>
<span className="w-2 h-2 rounded-full" style={{background: 'var(--color-primary-base)'}}></span>
            Orchestration
          </span>
<span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg" style={{background: 'white', color: 'var(--color-neutral-700)', border: '1px solid var(--color-neutral-200)'}}>
<span className="w-2 h-2 rounded-full" style={{background: 'var(--color-accent-teal)'}}></span>
            Intelligence
          </span>
<span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg" style={{background: 'white', color: 'var(--color-neutral-700)', border: '1px solid var(--color-neutral-200)'}}>
<span className="w-2 h-2 rounded-full" style={{background: 'var(--color-accent-coral)'}}></span>
            Execution
          </span>
</div>
<div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg" style={{background: 'linear-gradient(90deg, rgba(0,212,180,0.08), rgba(46,91,218,0.08))', color: 'var(--color-primary-emphasis)', border: '1px solid var(--color-neutral-200)'}}>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2M12 2v2M17 20v2M17 2v2M2 12h2M2 17h2M2 7h2M20 12h2M20 17h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
          Architecture v3.2
        </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-20 md:mt-28" id="portfolio">
<div className="max-w-7xl mx-auto px-5 sm:px-6">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div className="">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold" style={{color: 'var(--color-neutral-900)'}}>Portfolio</h2>
<p className="text-sm mt-1.5" style={{color: 'var(--color-neutral-700)'}}>Case Studies and AI Experiments.</p>
</div>

<div className="inline-flex items-center rounded-lg p-1 ring-1" style={{background: 'var(--color-neutral-50)', ringColor: 'var(--color-neutral-200)'}}>
<button className="px-3.5 py-2 text-sm rounded-md transition-all" id="tab-cases" style={{color: 'var(--color-primary-emphasis)', background: 'white', border: '1px solid var(--color-neutral-200)'}} type="button">
                Case Studies
              </button>
<button className="px-3.5 py-2 text-sm rounded-md text-[color:var(--color-neutral-700)] hover:text-[color:var(--color-primary-emphasis)] transition-colors" id="tab-experiments" style={{}} type="button">
                AI Experiments
              </button>
</div>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="grid-cases">

<a className="group rounded-xl overflow-hidden border transition-all backdrop-blur-md bg-white/70 hover:bg-white/60 hover:backdrop-blur-lg hover:shadow-lg" href="#" style={{borderColor: 'var(--color-neutral-200)'}}>
<div className="relative">
<img alt="Agentic workflow planning UI" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>

<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1" style={{background: 'rgba(255,255,255,0.92)', color: 'var(--color-primary-emphasis)', ringColor: 'var(--color-neutral-200)'}}>
<svg className="lucide lucide-workflow w-3.5 h-3.5" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
                  Agentic UX
                </div>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-3">
<h3 className="text-base font-semibold tracking-tight group-hover:text-[color:var(--color-primary-emphasis)] transition-colors">
                    Enterprise Agent Planner — Multi‑Goal Orchestration
                  </h3>
<span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-md ring-1 transition-colors group-hover:bg-[color:var(--color-primary-subtle)]" style={{ringColor: 'var(--color-neutral-200)'}}>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
<p className="mt-2 text-sm" style={{color: 'var(--color-neutral-700)'}}>
                  Designed a planning surface for multi‑agent goal trees with guardrails and human-in-the-loop overrides.
                </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-md ring-1" style={{background: 'rgba(46,91,218,0.12)', color: 'var(--color-primary-emphasis)', ringColor: 'rgba(46,91,218,0.20)'}}>Orchestration</span>
<span className="text-xs px-2 py-1 rounded-md ring-1" style={{background: 'rgba(0,212,180,0.14)', color: 'var(--color-accent-teal)', ringColor: 'rgba(0                  ,212,180,0.25)'}}>Retrieval</span>
<span className="text-xs px-2 py-1 rounded-md ring-1" style={{background: 'rgba(255,107,107,0.12)', color: 'var(--color-accent-coral)', ringColor: 'rgba(255,107,107,0.25)'}}>Guardrails</span>
</div>
</div>
</a>

<a className="group rounded-xl overflow-hidden border transition-all backdrop-blur-md bg-white/70 hover:bg-white/60 hover:backdrop-blur-lg hover:shadow-lg" href="#" style={{borderColor: 'var(--color-neutral-200)'}}>
<div className="relative">
<img alt="Retrieval augmented generation system" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1" style={{background: 'rgba(255,255,255,0.92)', color: 'var(--color-primary-emphasis)', ringColor: 'var(--color-neutral-200)'}}>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-6-6"></path><circle cx="10" cy="10" r="7"></circle></svg>
                  RAG
                </div>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-3">
<h3 className="text-base font-semibold tracking-tight group-hover:text-[color:var(--color-primary-emphasis)] transition-colors">
                    Domain‑Aware RAG — Evaluation‑Driven Retrieval
                  </h3>
<span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-md ring-1 transition-colors group-hover:bg-[color:var(--color-primary-subtle)]" style={{ringColor: 'var(--color-neutral-200)'}}>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
<p className="mt-2 text-sm" style={{color: 'var(--color-neutral-700)'}}>
                  Built a retrieval UX with query decomposition, vector + keyword fusion, and on‑the‑fly eval traces.
                </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-md ring-1" style={{background: 'rgba(0,212,180,0.14)', color: 'var(--color-accent-teal)', ringColor: 'rgba(0,212,180,0.25)'}}>Retrieval</span>
<span className="text-xs px-2 py-1 rounded-md ring-1" style={{background: 'rgba(46,91,218,0.12)', color: 'var(--color-primary-emphasis)', ringColor: 'rgba(46,91,218,0.20)'}}>Evaluation</span>
</div>
</div>
</a>

<a className="group rounded-xl overflow-hidden border transition-all backdrop-blur-md bg-white/70 hover:bg-white/60 hover:backdrop-blur-lg hover:shadow-lg" href="#" style={{borderColor: 'var(--color-neutral-200)'}}>
<div className="relative">
<img alt="Safety governance dashboard" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1" style={{background: 'rgba(255,255,255,0.92)', color: 'var(--color-primary-emphasis)', ringColor: 'var(--color-neutral-200)'}}>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                  Safety &amp; Governance
                </div>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-3">
<h3 className="text-base font-semibold tracking-tight group-hover:text-[color:var(--color-primary-emphasis)] transition-colors">
                    Policy Sandbox — Safe Prompting &amp; Red‑Team Review
                  </h3>
<span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-md ring-1 transition-colors group-hover:bg-[color:var(--color-primary-subtle)]" style={{ringColor: 'var(--color-neutral-200)'}}>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
<p className="mt-2 text-sm" style={{color: 'var(--color-neutral-700)'}}>
                  Designed a review workflow with automatic policy checks, annotator tools, and traceable approvals.
                </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs px-2 py-1 rounded-md ring-1" style={{background: 'rgba(255,107,107,0.12)', color: 'var(--color-accent-coral)', ringColor: 'rgba(255,107,107,0.25)'}}>Safety</span>
<span className="text-xs px-2 py-1 rounded-md ring-1" style={{background: 'rgba(148,163,184,0.18)', color: 'var(--color-neutral-700)', ringColor: 'rgba(148,163,184,0.28)'}}>Review</span>
</div>
</div>
</a>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hidden" id="grid-experiments">

<div className="group rounded-xl overflow-hidden border transition-all bg-white/70 hover:bg-white/60 hover:shadow-lg" style={{borderColor: 'var(--color-neutral-200)'}}>
<div className="relative">
<img alt="Agent debug console" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1" style={{background: 'rgba(255,255,255,0.92)', color: 'var(--color-primary-emphasis)', ringColor: 'var(--color-neutral-200)'}}>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="7" cy="7" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
                  Tools
                </div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold tracking-tight group-hover:text-[color:var(--color-primary-emphasis)] transition-colors">
                  Agent Trace Viewer — Step‑through Debugger
                </h3>
<p className="mt-2 text-sm" style={{color: 'var(--color-neutral-700)'}}>
                  Time‑travel through an agent run with state diffs, tool call I/O, and latency overlays.
                </p>
</div>
</div>

<div className="group rounded-xl overflow-hidden border transition-all bg-white/70 hover:bg-white/60 hover:shadow-lg" style={{borderColor: 'var(--color-neutral-200)'}}>
<div className="relative">
<img alt="Prompt composer UI" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1" style={{background: 'rgba(255,255,255,0.92)', color: 'var(--color-primary-emphasis)', ringColor: 'var(--color-neutral-200)'}}>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2 7 3-7 3-7-3 7-3z"></path><path d="m19 8-7 3-7-3"></path><path d="m19 14-7 3-7-3"></path><path d="m19 20-7 3-7-3"></path></svg>
                  Prompting
                </div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold tracking-tight group-hover:text-[color:var(--color-primary-emphasis)] transition-colors">
                  Structured Prompt Composer — Slots &amp; Constraints
                </h3>
<p className="mt-2 text-sm" style={{color: 'var(--color-neutral-700)'}}>
                  Compose reusable prompts with typed variables and constraint checks before execution.
                </p>
</div>
</div>

<div className="group rounded-xl overflow-hidden border transition-all bg-white/70 hover:bg-white/60 hover:shadow-lg" style={{borderColor: 'var(--color-neutral-200)'}}>
<div className="relative">
<img alt="Evaluation dashboard" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1" style={{background: 'rgba(255,255,255,0.92)', color: 'var(--color-primary-emphasis)', ringColor: 'var(--color-neutral-200)'}}>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3 3 18 18"></path><path d="M9 5H5v14h14v-4"></path><path d="M17 9v6h-6"></path></svg>
                  Evals
                </div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold tracking-tight group-hover:text-[color:var(--color-primary-emphasis)] transition-colors">
                  Scenario Generator — Synthetic Data &amp; Rubrics
                </h3>
<p className="mt-2 text-sm" style={{color: 'var(--color-neutral-700)'}}>
                  Generate edge‑case scenarios and run rubric‑based evals with automatic regression tracking.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-20 md:mt-28" id="contact">
<div className="sm:px-6 max-w-7xl mr-auto ml-auto pr-5 pl-5">
<div className="mx-auto max-w-3xl rounded-2xl border shadow-xl overflow-hidden" style={{borderColor: 'var(--color-neutral-200)', background: 'white'}}>
<div className="sm:px-8 border-b pt-6 pr-6 pb-6 pl-6" style={{borderColor: 'var(--color-neutral-200)'}}>
<div className="flex items-center justify-between">
<div className="">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{color: 'var(--color-neutral-900)'}}>Open to new opportunities</h3>
<p className="mt-1 text-sm" style={{color: 'var(--color-neutral-700)'}}>Reach out about roles, teams, and collaborations. I’ll reply within 1–2 business days.</p>
</div>
<div className="hidden sm:flex gap-2 text-xs gap-x-2 gap-y-2 items-center" style={{color: 'var(--color-neutral-700)'}}>
<span className="w-2 h-2 rounded-full animate-pulse" style={{background: '#10B981'}}></span>
                  Actively exploring roles
                </div>
</div>
</div>

<form action="mailto:designer@example.com" className="sm:px-8 pt-8 pr-6 pb-8 pl-6 space-y-5" id="contact-form" method="post">
<div className="hidden rounded-md px-3 py-2 text-sm" id="form-alert" role="status"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-sm font-medium" htmlFor="name" style={{color: 'var(--color-neutral-900)'}}>Name</label>
<input className="w-full rounded-md px-3 py-2 text-sm outline-none transition-shadow" id="name" name="name" onblur="this.style.boxShadow='0 0 0 0 rgba(46,91,218,0)';" onfocus="this.style.boxShadow='0 0 0 3px rgba(46,91,218,0.15)';" required="" style={{border: '1px solid var(--color-neutral-200)', background: 'var(--color-neutral-50)', color: 'var(--color-neutral-900)', boxShadow: '0 0 0 0 rgba(46,91,218,0)'}} type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium" htmlFor="email" style={{color: 'var(--color-neutral-900)'}}>Email</label>
<input className="w-full rounded-md px-3 py-2 text-sm outline-none transition-shadow" id="email" name="email" onblur="this.style.boxShadow='none';" onfocus="this.style.boxShadow='0 0 0 3px rgba(46,91,218,0.15)';" required="" style={{border: '1px solid var(--color-neutral-200)', background: 'var(--color-neutral-50)', color: 'var(--color-neutral-900)'}} type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-sm font-medium" htmlFor="company" style={{color: 'var(--color-neutral-900)'}}>Organization (optional)</label>
<input className="w-full rounded-md px-3 py-2 text-sm outline-none transition-shadow" id="company" name="company" onblur="this.style.boxShadow='none';" onfocus="this.style.boxShadow='0 0 0 3px rgba(46,91,218,0.15)';" style={{border: '1px solid var(--color-neutral-200)', background: 'var(--color-neutral-50)', color: 'var(--color-neutral-900)'}} type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium" htmlFor="opportunity" style={{color: 'var(--color-neutral-900)'}}>Opportunity type</label>
<div className="relative">
<select className="appearance-none w-full rounded-md px-3 py-2 text-sm outline-none cursor-pointer transition-shadow" id="opportunity" name="opportunity" onblur="this.style.boxShadow='none';" onfocus="this.style.boxShadow='0 0 0 3px rgba(46,91,218,0.15)';" required="" style={{border: '1px solid var(--color-neutral-200)', background: 'var(--color-neutral-50)', color: 'var(--color-neutral-900)'}}>
<option disabled="" selected="" value="">Select an option</option>
<option>Full‑time</option>
<option>Contract</option>
<option>Freelance</option>
<option>Internship</option>
<option>Other</option>
</select>
<svg className="lucide lucide-chevron-down w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'var(--color-neutral-700)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium" htmlFor="message" style={{color: 'var(--color-neutral-900)'}}>Tell me about the role or opportunity</label>
<textarea aria-label="To enrich screen reader interactions, please activate Accessibility in Grammarly extension settings" className="outline-none transition-shadow resize-y text-sm w-full rounded-md pt-2 pr-3 pb-2 pl-3" id="message" name="message" onblur="this.style.boxShadow='none';" onfocus="this.style.boxShadow='0 0 0 3px rgba(46,91,218,0.15)';" required="" rows="5" spellcheck="false" style={{border: '1px solid var(--color-neutral-200)', background: 'var(--color-neutral-50)', color: 'var(--color-neutral-900)', boxShadow: 'none'}}></textarea>
</div>

<label className="flex items-start gap-3 cursor-pointer select-none">
<input className="peer sr-only" id="consent" required="" type="checkbox"/>
</label>
<div className="flex gap-3 pt-2 gap-x-3 gap-y-3 items-center justify-end">
<button className="inline-flex gap-2 transition-all hover:shadow-md text-sm font-medium rounded-md pt-2.5 pr-4 pb-2.5 pl-4 gap-x-2 gap-y-2 items-center" id="submit-btn" style={{background: 'var(--color-primary-base)', color: 'white'}} type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5                  " viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                  Send message
                </button>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="mt-24 relative">
<div className="max-w-7xl mx-auto px-5 sm:px-6">
<div className="rounded-2xl border ring-1 overflow-hidden" style={{borderColor: 'var(--color-neutral-200)', ringColor: 'var(--color-neutral-200)', background: 'rgba(255,255,255,0.75)'}}>
<div className="sm:px-8 pt-8 pr-6 pb-8 pl-6">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="">
<div className="inline-flex items-center gap-2 text-sm uppercase tracking-widest rounded-full px-3 py-1 border" style={{borderColor: 'var(--color-neutral-200)', color: 'var(--color-primary-emphasis)', background: 'linear-gradient(90deg, rgba(0,212,180,0.12), rgba(46,91,218,0.08))'}}>
                    Thanks for visiting
                  </div>
<h3 className="mt-3 text-xl font-semibold tracking-tight">Let’s build the next wave of AI UX</h3>
<p className="mt-1.5 text-sm" style={{color: 'var(--color-neutral-700)'}}>Available for roles in Conversational &amp; Agentic AI, Design Systems, and complex SaaS.</p>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium transition-all hover:shadow-sm" href="#contact" style={{background: 'var(--color-primary-base)', color: 'white'}}>
                    Contact
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a aria-label="LinkedIn profile" className="inline-flex items-center gap-2 transition hover:shadow-sm text-sm ring-1 rounded-md pt-2 pr-3 pb-2 pl-3" href="https://www.linkedin.com/in/yourprofile" rel="noopener noreferrer" style={{background: 'white', ringColor: 'var(--color-neutral-200)', color: 'var(--color-primary-emphasis)'}} target="_blank">
<svg className="lucide lucide-linkedin w-4.5 h-4.5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    LinkedIn
                  </a>
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium border transition-all hover:shadow-sm" href="#" rel="noopener" style={{borderColor: 'var(--color-neutral-200)', background: 'white', color: 'var(--color-primary-emphasis)'}} target="_blank">
<svg className="lucide lucide-github w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="github" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(27, 59, 168)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    GitHub
                  </a>
</div>
</div>
<div className="mt-6 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{borderColor: 'var(--color-neutral-200)'}}>
<p className="text-xs" style={{color: 'var(--color-neutral-700)'}}>© <span id="year">2025</span> Senior Product Designer — Conversational &amp; Agentic AI.</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-all hover:shadow-sm" href="#top" style={{border: '1px solid var(--color-neutral-200)', background: 'white', color: 'var(--color-primary-emphasis)'}}>
                    Back to top
                    <svg className="lucide lucide-arrow-up w-3.5 h-3.5" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
