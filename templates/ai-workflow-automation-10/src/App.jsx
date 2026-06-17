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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:routing-2-linear" style={{fontSize: '1rem'}}></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-sm">
            F L O W P I L O T
          </span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#features">
            Features
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#testimonials">
            Customers
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pricing">
            Pricing
          </a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">
            Sign in
          </a>
<a className="h-9 px-4 rounded-md bg-slate-900 text-white flex items-center justify-center text-xs font-medium hover:bg-slate-800 transition-colors" href="#">
            Get Started
          </a>
</div>
</div>
</header>
<main className="">

<section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-tr from-blue-200/40 to-violet-200/40 rounded-full blur-3xl z-[-1]" style={{borderRadius: '50%'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<a className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium mb-8 hover:bg-slate-50 transition-colors shadow-sm" href="#">
<span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            Introducing FlowPilot 2.0
            <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '0.875rem'}}></iconify-icon>
</a>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
            Automate your workflows
            <br className="hidden lg:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              with AI precision.
            </span>
</h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
            Connect your tools, understand intent, and run operations on
            autopilot. The intelligent operating system built for modern,
            fast-moving teams.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-sm font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg w-full sm:w-auto" href="#">
              Start Free Trial
            </a>
<a className="h-12 px-8 rounded-lg bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-900 flex items-center justify-center text-sm font-medium hover:bg-white transition-all shadow-sm w-full sm:w-auto" href="#">
              Book a Demo
            </a>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32">
<div className="rounded-2xl border border-slate-200/60 bg-white/40 backdrop-blur-2xl p-2 lg:p-4 shadow-2xl shadow-slate-200/50">
<div className="rounded-xl border border-slate-200 bg-white h-[400px] lg:h-[600px] overflow-hidden flex flex-col shadow-sm">

<div className="h-12 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="w-56 border-r border-slate-100 bg-slate-50/30 p-4 hidden md:flex flex-col gap-4">
<div className="h-8 rounded-md bg-slate-100 w-full mb-4"></div>
<div className="space-y-3">
<div className="h-5 rounded bg-slate-100 w-3/4"></div>
<div className="h-5 rounded bg-slate-100 w-5/6"></div>
<div className="h-5 rounded bg-blue-50 w-full border border-blue-100/50"></div>
<div className="h-5 rounded bg-slate-100 w-2/3"></div>
</div>
</div>

<div className="flex-1 p-6 lg:p-10 bg-white flex flex-col gap-8 overflow-y-auto">
<div className="flex justify-between items-center">
<div className="space-y-2">
<div className="bg-slate-200 w-48 h-6 rounded"></div>
<div className="h-4 rounded bg-slate-100 w-32"></div>
</div>
<div className="h-9 rounded-md bg-slate-900 w-28 hidden sm:block"></div>
</div>

<div className="flex-1 rounded-xl border border-slate-100 bg-slate-50/50 p-6 flex flex-col items-center justify-center gap-6 relative">

<div className="w-64 p-4 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center gap-4 z-10">
<div className="w-8 h-8 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:letter-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="space-y-1 flex-1">
<div className="h-3 rounded bg-slate-200 w-1/2"></div>
<div className="h-2 rounded bg-slate-100 w-3/4"></div>
</div>
</div>
<div className="w-px h-8 bg-slate-300"></div>

<div className="w-64 p-4 rounded-lg bg-white border border-blue-200 shadow-sm flex items-center gap-4 z-10 relative">
<div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
<div className="w-8 h-8 rounded-md bg-violet-50 text-violet-600 flex items-center justify-center">
<iconify-icon icon="solar:magic-stick-3-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="space-y-1 flex-1">
<div className="h-3 rounded bg-slate-200 w-2/3"></div>
<div className="h-2 rounded bg-slate-100 w-1/2"></div>
</div>
</div>
<div className="w-px h-8 bg-slate-300"></div>

<div className="w-64 p-4 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center gap-4 z-10">
<div className="w-8 h-8 rounded-md bg-slate-100 text-slate-600 flex items-center justify-center">
<iconify-icon icon="solar:database-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="space-y-1 flex-1">
<div className="h-3 rounded bg-slate-200 w-1/3"></div>
<div className="h-2 rounded bg-slate-100 w-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200/50 bg-white py-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">
            Powering operations for industry leaders
          </p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
<span className="text-xl font-semibold tracking-tighter text-slate-400 hover:text-slate-900 transition-colors cursor-default">
              V E R T E X
            </span>
<span className="text-xl font-semibold tracking-tighter text-slate-400 hover:text-slate-900 transition-colors cursor-default">
              A C M E
            </span>
<span className="text-xl font-semibold tracking-tighter text-slate-400 hover:text-slate-900 transition-colors cursor-default">
              G L O B E X
            </span>
<span className="text-xl font-semibold tracking-tighter text-slate-400 hover:text-slate-900 transition-colors cursor-default">
              S O Y U Z
            </span>
<span className="text-xl font-semibold tracking-tighter text-slate-400 hover:text-slate-900 transition-colors cursor-default">
              N E X U S
            </span>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="features">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Everything you need to scale
            </h2>
<p className="text-base text-slate-500 font-normal">
              Replace manual tasks with intelligent workflows. FlowPilot gives
              you the tools to automate across your entire stack.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
<iconify-icon icon="solar:bolt-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
                Instant Execution
              </h3>
<p className="text-sm text-slate-500 leading-relaxed font-normal">
                Triggers fire in milliseconds. Your processes run seamlessly in
                the background without delay.
              </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center mb-6 group-hover:bg-violet-50 group-hover:text-violet-600 group-hover:border-violet-100 transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
                AI Logic Gates
              </h3>
<p className="text-sm text-slate-500 leading-relaxed font-normal">
                Use natural language to define complex branching logic based on
                unstructured data.
              </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
<iconify-icon icon="solar:link-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
                Universal Integrations
              </h3>
<p className="text-sm text-slate-500 leading-relaxed font-normal">
                Connect to over 500+ apps out of the box, or build custom
                webhooks for internal tools.
              </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center mb-6 group-hover:bg-violet-50 group-hover:text-violet-600 group-hover:border-violet-100 transition-colors">
<iconify-icon icon="solar:shield-check-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
                Enterprise Security
              </h3>
<p className="text-sm text-slate-500 leading-relaxed font-normal">
                SOC2 Type II compliant. Your workflow data is encrypted at rest
                and in transit.
              </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
<iconify-icon icon="solar:graph-up-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
                Analytics &amp; Logs
              </h3>
<p className="text-sm text-slate-500 leading-relaxed font-normal">
                Track success rates, execution times, and trace errors with
                granular workflow logging.
              </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center mb-6 group-hover:bg-violet-50 group-hover:text-violet-600 group-hover:border-violet-100 transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
                Team Collaboration
              </h3>
<p className="text-sm text-slate-500 leading-relaxed font-normal">
                Build, test, and deploy workflows together with role-based
                access controls and versioning.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/50" id="testimonials">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Loved by operators
            </h2>
<p className="text-base text-slate-500 font-normal">
              See how modern teams are using FlowPilot to automate their most
              complex and time-consuming processes.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
<p className="text-base text-slate-700 font-normal mb-8 leading-relaxed">
                "FlowPilot completely eliminated our manual onboarding process.
                We now provision accounts, send emails, and update CRM records
                automatically based on AI intent."
              </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Sarah J. Avatar" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Sarah&amp;backgroundColor=e2e8f0"/>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">
                    Sarah Jenkins
                  </h4>
<p className="text-xs text-slate-500">
                    VP of Operations, Acme Corp
                  </p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
<p className="text-base text-slate-700 font-normal mb-8 leading-relaxed">
                "The AI routing feature is magical. It reads incoming support
                tickets, understands the context, and routes them to the exact
                right technical team without human intervention."
              </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Marcus T. Avatar" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Marcus&amp;backgroundColor=e2e8f0"/>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">
                    Marcus Thompson
                  </h4>
<p className="text-xs text-slate-500">Product Manager, Globex</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
<p className="text-base text-slate-700 font-normal mb-8 leading-relaxed">
                "We evaluated Zapier and Make, but FlowPilot's clean interface
                and native AI capabilities made it the obvious choice for our
                engineering team."
              </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Elena R. Avatar" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Elena&amp;backgroundColor=e2e8f0"/>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">
                    Elena Rodriguez
                  </h4>
<p className="text-xs text-slate-500">CTO, Soyuz Tech</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="pricing">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Simple, transparent pricing
            </h2>
<p className="text-base text-slate-500 font-normal">
              Start for free, upgrade when you need more power.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col h-full">
<h3 className="text-lg font-medium text-slate-900 mb-2">Starter</h3>
<p className="text-sm text-slate-500 mb-6 h-10">
                For individuals exploring automation.
              </p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tighter text-slate-900">
                  $0
                </span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<a className="h-10 w-full rounded-lg border border-slate-200 bg-white text-slate-900 flex items-center justify-center text-sm font-medium hover:bg-slate-50 transition-colors mb-8" href="#">
                Start for free
              </a>
<ul className="space-y-4 text-sm text-slate-600 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                  5 active workflows
                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                  1,000 tasks per month
                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                  Standard integrations
                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                  7-day log history
                </li>
</ul>
</div>

<div className="relative md:scale-105 z-10 flex flex-col h-full rounded-2xl hover:-rotate-1 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden shadow-xl group">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_50%,#3b82f6_85%,#8b5cf6_100%)] z-0"></div>
<div className="absolute inset-[1px] bg-slate-900 rounded-[15px] z-0"></div>
<div className="p-8 relative z-10 flex flex-col h-full text-white">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white">Pro</h3>
<span className="px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-medium">
                    Most Popular
                  </span>
</div>
<p className="text-sm text-slate-400 mb-6 h-10">
                  For teams automating core processes.
                </p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tighter text-white">
                    $49
                  </span>
<span className="text-sm text-slate-400">/mo</span>
</div>
<a className="h-10 w-full rounded-lg bg-white text-slate-900 flex items-center justify-center text-sm font-medium hover:bg-slate-100 transition-colors mb-8" href="#">
                  Get Started
                </a>
<ul className="space-y-4 text-sm text-slate-300 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                    Unlimited workflows
                  </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                    15,000 tasks per month
                  </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                    AI Logic &amp; Natural Language
                  </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                    Premium integrations
                  </li>
</ul>
</div>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col h-full">
<h3 className="text-lg font-medium text-slate-900 mb-2">
                Enterprise
              </h3>
<p className="text-sm text-slate-500 mb-6 h-10">
                Custom limits and advanced security.
              </p>
<div className="mb-8 flex items-end h-[48px]">
<span className="text-2xl font-semibold tracking-tight text-slate-900">
                  Custom
                </span>
</div>
<a className="h-10 w-full rounded-lg border border-slate-200 bg-white text-slate-900 flex items-center justify-center text-sm font-medium hover:bg-slate-50 transition-colors mb-8" href="#">
                Contact Sales
              </a>
<ul className="space-y-4 text-sm text-slate-600 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                  Unlimited tasks
                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                  Custom SSO &amp; SAML
                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                  Dedicated account manager
                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.125rem'}}></iconify-icon>
                  Custom API endpoints
                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/50">
<div className="max-w-3xl mx-auto px-6">

<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Frequently asked questions
            </h2>
<p className="text-base text-slate-500 font-normal">
              Everything you need to know about the product and billing.
            </p>
</div>
<div className="divide-y divide-slate-200 border-t border-slate-200">
<details className="group py-6" open="">
<summary className="flex cursor-pointer items-center justify-between text-base font-medium text-slate-900">
                What makes FlowPilot different from Zapier?
                <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 group-open:bg-slate-100 transition-colors">
<iconify-icon className="transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-slate-500 leading-relaxed pr-12">
                FlowPilot is built natively with AI at its core. Instead of
                rigid if/then logic, you can use natural language to parse
                unstructured data (like emails or PDFs) and make dynamic routing
                decisions on the fly.
              </p>
</details>
<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between text-base font-medium text-slate-900">
                Is my data secure?
                <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 group-open:bg-slate-100 transition-colors">
<iconify-icon className="transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-slate-500 leading-relaxed pr-12">
                Yes. We are SOC2 Type II compliant. Data is encrypted at rest
                using AES-256 and in transit via TLS 1.2+. We never use your
                private data to train our foundational models.
              </p>
</details>
<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between text-base font-medium text-slate-900">
                Can I connect custom internal tools?
                <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 group-open:bg-slate-100 transition-colors">
<iconify-icon className="transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-slate-500 leading-relaxed pr-12">
                Absolutely. FlowPilot supports custom Webhooks and REST API
                connections, allowing you to trigger workflows from your own
                infrastructure and send data back to your internal databases.
              </p>
</details>
<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between text-base font-medium text-slate-900">
                How are tasks calculated?
                <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 group-open:bg-slate-100 transition-colors">
<iconify-icon className="transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-slate-500 leading-relaxed pr-12">
                A task is counted every time an action successfully executes
                within a workflow. Triggers and failed actions do not count
                towards your monthly task limit.
              </p>
</details>
</div>
</div>
</section>

<section className="py-24 lg:py-32">
<div className="max-w-5xl mx-auto px-6">

<div className="rounded-3xl bg-slate-900 text-center px-6 py-16 lg:py-20 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-64 bg-blue-500/20 rounded-full blur-3xl z-0"></div>
<div className="relative z-10">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
                Ready to scale your operations?
              </h2>
<p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto font-normal">
                Join thousands of modern teams building the future of work.
                Setup takes less than 5 minutes.
              </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 rounded-lg bg-white text-slate-900 flex items-center justify-center text-sm font-medium hover:bg-slate-100 transition-colors w-full sm:w-auto" href="#">
                  Start Free Trial
                </a>
<a className="h-12 px-8 rounded-lg border border-slate-700 bg-transparent text-white flex items-center justify-center text-sm font-medium hover:bg-slate-800 transition-colors w-full sm:w-auto" href="#">
                  Talk to Sales
                </a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200/50 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded-md bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:routing-2-linear" style={{fontSize: '1rem'}}></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-sm text-slate-900">
                F L O W P I L O T
              </span>
</div>
<p className="text-sm text-slate-500 font-normal leading-relaxed max-w-xs">
              The intelligent workflow automation platform for modern operators
              and engineering teams.
            </p>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Product</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Features
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Integrations
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Changelog
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Resources</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Documentation
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  API Reference
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Blog
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Community
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Legal
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100 gap-4">
<p className="text-xs text-slate-400">
            © 2024 FlowPilot Inc. All rights reserved.
          </p>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:twitter-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5px'}}></iconify-icon>
<span className="sr-only">Twitter</span>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:github-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5px'}}></iconify-icon>
<span className="sr-only">GitHub</span>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:linkedin-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5px'}}></iconify-icon>
<span className="sr-only">LinkedIn</span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
