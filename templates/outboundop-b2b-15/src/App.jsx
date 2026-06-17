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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
900: '#1e3a8a',
},
slate: {
850: '#1e293b',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-lg tracking-tighter">
            O
          </div>
<span className="font-semibold text-slate-900 tracking-tight">
            OutboundOps
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">
            Methodology
          </a>
<a className="hover:text-slate-900 transition-colors" href="#">Process</a>
<a className="hover:text-slate-900 transition-colors" href="#">
            Security
          </a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">
            Sign in
          </a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors" href="#">
            Schedule a call
          </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden mesh-gradient">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
            Professional Outbound Systems
          </div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 leading-[1.1] mb-6">
            Professional outbound outreach,
            <br className="hidden lg:block"/>
            executed as a controlled business process.
          </h1>
<p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
            We identify the right companies, reach the right decision-makers,
            ensure messages are delivered to inboxes, and create professional
            sales conversations — without pressure or risk to your brand.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors" href="#">
              How it works
              <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors" href="#">
              What happens before the first message
            </a>
</div>
<div className="mt-10 flex items-center gap-4 text-xs font-medium text-slate-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center">
                JB
              </div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center">
                AS
              </div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center">
                MK
              </div>
</div>
<p>Trusted by B2B leaders in Tech, Finance, and Manufacturing</p>
</div>
</div>

<div className="relative lg:h-[600px] w-full flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-50 to-slate-50 rounded-3xl transform rotate-3 scale-95 opacity-50"></div>
<div className="relative w-full h-auto bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden p-1">
<div className="bg-slate-50/50 w-full h-full rounded-lg border border-slate-100 p-6 flex flex-col gap-6">

<div className="flex items-center justify-between border-b border-slate-100 pb-4">
<div className="flex flex-col">
<div className="text-sm font-semibold text-slate-900">
                    Campaign Performance
                  </div>
<div className="text-xs text-slate-500">
                    Q1 Outreach Operations
                  </div>
</div>
<div className="flex gap-2">
<div className="h-8 px-3 rounded-md bg-white border border-slate-200 text-xs flex items-center text-slate-600">
                    Export Report
                  </div>
</div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-xs text-slate-500 mb-1">
                    Prospects Identified
                  </div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">
                    1,240
                  </div>
<div className="text-xs text-emerald-600 flex items-center mt-2 font-medium">
<i className="w-3 h-3 mr-1" data-lucide="check-circle"></i>
                    Verified
                  </div>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-xs text-slate-500 mb-1">Inbox Placement</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">
                    98.2%
                  </div>
<div className="text-xs text-emerald-600 flex items-center mt-2 font-medium">
<i className="w-3 h-3 mr-1" data-lucide="shield-check"></i>
                    Optimal
                  </div>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-xs text-slate-500 mb-1">
                    Replies Generated
                  </div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">
                    84
                  </div>
<div className="text-xs text-brand-600 flex items-center mt-2 font-medium">
<i className="w-3 h-3 mr-1" data-lucide="message-square"></i>
                    Active
                  </div>
</div>
</div>

<div className="flex-1 bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden">
<div className="px-4 py-3 bg-slate-50 border-b border-slate-100 text-xs font-medium text-slate-500 flex justify-between">
<span>Recent Activities</span>
<span>Status</span>
</div>
<div className="divide-y divide-slate-50">
<div className="px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-brand-100 text-brand-600 flex items-center justify-center text-xs font-bold">
                        A
                      </div>
<div className="text-xs font-medium text-slate-700">
                        Acme Corp - CIO
                      </div>
</div>
<span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-100">
                      Meeting Booked
                    </span>
</div>
<div className="px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold">
                        G
                      </div>
<div className="text-xs font-medium text-slate-700">
                        Global Industries - VP Sales
                      </div>
</div>
<span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">
                      Reply Received
                    </span>
</div>
<div className="px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold">
                        T
                      </div>
<div className="text-xs font-medium text-slate-700">
                        TechFlow - Founder
                      </div>
</div>
<span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
                      Email Sent
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-10 border-b border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate-500 mb-8">
          Trusted by established business leaders who value reputation and
          process:
        </p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold text-slate-800 tracking-tight">
            ALPHAWAVE
          </span>
<span className="text-xl font-bold text-slate-800 tracking-tight">
            NEXUS
          </span>
<span className="text-xl font-bold text-slate-800 tracking-tight">
            VERTEX
          </span>
<span className="text-xl font-bold text-slate-800 tracking-tight">
            HORIZON
          </span>
<span className="text-xl font-bold text-slate-800 tracking-tight">
            STRATA
          </span>
<span className="text-xl font-bold text-slate-800 tracking-tight">
            QUANTUM
          </span>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
            Managed Outbound Operations
          </h2>
<p className="text-lg text-slate-600">
            We do not sell software. We operate automated outbound systems that
            identify highly relevant potential customers, reach real
            decision-makers, and ensure messages are delivered—not blocked.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 row-span-2 bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-12 flex flex-col justify-between overflow-hidden relative group">
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-brand-600" data-lucide="layers"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">
                Full Operational Responsibility
              </h3>
<p className="text-slate-600 max-w-md">
                From data sourcing to technical DNS setup and daily campaign
                management. We handle the entire outbound lifecycle so your team
                focuses on closing deals.
              </p>
</div>
<div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-white border-t border-l border-slate-100 rounded-tl-3xl shadow-sm p-6 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500">

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-100 pb-2">
<span>Process Flow</span>
<span>Active</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-800">
                      ICP Verification
                    </span>
<span className="text-xs text-slate-500">
                      Completed 10:00 AM
                    </span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-800">
                      Domain Warming
                    </span>
<span className="text-xs text-slate-500">
                      Optimal Health Score
                    </span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<i className="w-4 h-4 animate-spin" data-lucide="loader"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-800">
                      Outreach Sequence
                    </span>
<span className="text-xs text-slate-500">In Progress</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-slate-700" data-lucide="database"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
              Data Integrity
            </h3>
<p className="text-sm text-slate-600">
              Multi-source manual and automated verification. We ensure 98%+
              accuracy before any email is sent.
            </p>
</div>

<div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-slate-700" data-lucide="shield"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
              Brand Safety
            </h3>
<p className="text-sm text-slate-600">
              Technical deliverability infrastructure that protects your primary
              domain from reputation damage.
            </p>
</div>

<div className="md:col-span-3 bg-slate-900 rounded-3xl p-8 lg:p-10 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
<div className="flex-1 z-10">
<h3 className="text-xl font-semibold text-white mb-2">
                This is a process and delivery problem.
              </h3>
<p className="text-slate-400 max-w-lg">
                Many companies fail at outbound because of broad targeting, poor
                data, and bad technical setup. It is not about motivation; it is
                about infrastructure and process. We fix the system first.
              </p>
</div>
<div className="flex gap-4 z-10">
<div className="flex flex-col items-center gap-2">
<div className="text-2xl font-bold text-white">45%</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">
                  Avg Open Rate
                </div>
</div>
<div className="w-px bg-slate-800 h-12"></div>
<div className="flex flex-col items-center gap-2">
<div className="text-2xl font-bold text-white">&lt;0.1%</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">
                  Spam Rate
                </div>
</div>
</div>

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
            How Modern Outbound Works
          </h2>
<p className="text-slate-600">
            In the past, outbound was manual. Today, we automate the process
            without losing quality or trust—using controlled volume and relevant
            messaging.
          </p>
</div>

<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">

<div className="flex gap-4 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 flex items-center justify-center font-medium text-sm group-hover:border-brand-500 group-hover:text-brand-600 transition-colors">
                  1
                </div>
<div className="w-px h-full bg-slate-200 my-2 group-hover:bg-brand-200"></div>
</div>
<div className="pb-8">
<h4 className="text-lg font-semibold text-slate-900 mb-2">
                  ICP Definition &amp; Data
                </h4>
<p className="text-slate-600 text-sm leading-relaxed">
                  We define exactly who should be contacted. We build negative
                  lists to protect current clients and ensure every contact is
                  relevant before outreach begins.
                </p>
</div>
</div>

<div className="flex gap-4 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 flex items-center justify-center font-medium text-sm group-hover:border-brand-500 group-hover:text-brand-600 transition-colors">
                  2
                </div>
<div className="w-px h-full bg-slate-200 my-2 group-hover:bg-brand-200"></div>
</div>
<div className="pb-8">
<h4 className="text-lg font-semibold text-slate-900 mb-2">
                  Infrastructure &amp; Warming
                </h4>
<p className="text-slate-600 text-sm leading-relaxed">
                  We set up dedicated sending domains, configure DKIM/DMARC/SPF
                  records perfectly, and warm up inboxes to ensure
                  deliverability before selling.
                </p>
</div>
</div>

<div className="flex gap-4 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 flex items-center justify-center font-medium text-sm group-hover:border-brand-500 group-hover:text-brand-600 transition-colors">
                  3
                </div>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">
                  Controlled Launch
                </h4>
<p className="text-slate-600 text-sm leading-relaxed">
                  We launch with low volume, monitoring reply rates and
                  sentiment. We do not scale until the system is stable and
                  producing positive conversations.
                </p>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl transform rotate-2"></div>
<div className="relative bg-white border border-slate-100 rounded-2xl shadow-xl p-8">
<div className="flex items-center justify-between mb-8">
<h5 className="font-semibold text-slate-900">Campaign Analytics</h5>
<div className="flex gap-2">
<span className="w-3 h-3 rounded-full bg-red-400"></span>
<span className="w-3 h-3 rounded-full bg-yellow-400"></span>
<span className="w-3 h-3 rounded-full bg-green-400"></span>
</div>
</div>

<div className="h-64 flex items-end justify-between gap-2">
<div className="w-full bg-brand-50 rounded-t-sm h-[20%] relative group">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Warming
                  </div>
</div>
<div className="w-full bg-brand-100 rounded-t-sm h-[35%] relative group">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Launch
                  </div>
</div>
<div className="w-full bg-brand-200 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-brand-300 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-brand-400 rounded-t-sm h-[75%]"></div>
<div className="w-full bg-brand-500 rounded-t-sm h-[85%]"></div>
<div className="w-full bg-brand-600 rounded-t-sm h-[95%] relative group">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Scaling
                  </div>
</div>
</div>
<div className="flex justify-between text-xs text-slate-400 mt-4 font-medium">
<span>Week 1</span>
<span>Week 4</span>
<span>Week 8</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-6">
<i className="w-3 h-3" data-lucide="lock"></i>
              Risk Control
            </div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
              Deliverability is risk control.
            </h2>
<p className="text-slate-600 mb-6">
              Modern email systems actively filter outbound messages. Poor
              setups damage domain reputation. We prioritize inbox placement and
              long-term domain health.
            </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 mt-0.5" data-lucide="check"></i>
<span className="text-slate-700 text-sm">
                  Dedicated sending infrastructure separate from your main
                  domain.
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 mt-0.5" data-lucide="check"></i>
<span className="text-slate-700 text-sm">
                  Real-time blacklist monitoring and reputation management.
                </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 mt-0.5" data-lucide="check"></i>
<span className="text-slate-700 text-sm">
                  Volume throttling based on engagement metrics.
                </span>
</li>
</ul>
</div>
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
<h3 className="text-lg font-semibold text-slate-900 mb-6">
              What this means for your business
            </h3>
<div className="grid gap-4">
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
<div className="text-sm font-semibold text-slate-900 mb-1">
                  Protected Reputation
                </div>
<div className="text-xs text-slate-500">
                  Your primary domain remains safe for internal and client
                  communication.
                </div>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
<div className="text-sm font-semibold text-slate-900 mb-1">
                  Cleaner Pipelines
                </div>
<div className="text-xs text-slate-500">
                  Conversations with relevant companies, filtered before they
                  reach your CRM.
                </div>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
<div className="text-sm font-semibold text-slate-900 mb-1">
                  Predictable Execution
                </div>
<div className="text-xs text-slate-500">
                  Consistent lead flow without the 'feast or famine' cycle.
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-6">
          First 30–45 Days
        </h2>
<p className="text-slate-400 max-w-2xl mx-auto mb-12">
          We do not scale until the system is stable. The initial phase is
          dedicated to data accuracy, infrastructure warming, and message
          validation.
        </p>
<div className="grid md:grid-cols-4 gap-6 text-left">
<div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
<div className="text-brand-400 font-bold text-lg mb-2">Day 1-7</div>
<h4 className="font-medium text-white mb-2">Strategy &amp; ICP</h4>
<p className="text-xs text-slate-400">
              Finalizing targeting, negative lists, and value proposition.
            </p>
</div>
<div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
<div className="text-brand-400 font-bold text-lg mb-2">Day 7-21</div>
<h4 className="font-medium text-white mb-2">Infrastructure</h4>
<p className="text-xs text-slate-400">
              Domain purchase, DNS setup, and gradual warming process.
            </p>
</div>
<div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
<div className="text-brand-400 font-bold text-lg mb-2">Day 21-30</div>
<h4 className="font-medium text-white mb-2">Pilot Launch</h4>
<p className="text-xs text-slate-400">
              Low-volume sending to validate data and messaging resonance.
            </p>
</div>
<div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
<div className="text-brand-400 font-bold text-lg mb-2">Day 30+</div>
<h4 className="font-medium text-white mb-2">Scale &amp; Optimize</h4>
<p className="text-xs text-slate-400">
              Gradually increasing volume based on positive reply signals.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-center">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
          Built for long sales cycles.
        </h2>
<p className="text-lg text-slate-600 mb-10">
          This is a professional outbound operation designed for companies that
          value control and reputation. Not for mass-market spam.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" href="#">
            Request an introduction
          </a>
<a className="px-8 py-4 bg-white text-slate-600 font-semibold rounded-full border border-slate-200 hover:bg-slate-50 transition-all" href="#">
            See if this fits your business
          </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-bold">
            O
          </div>
<span className="font-semibold text-slate-900">OutboundOps</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
<a className="hover:text-slate-900" href="#">Contact</a>
</div>
<div className="text-sm text-slate-400">
          © 2024 OutboundOps. All rights reserved.
        </div>
</div>
</footer>

    </>
  );
}
