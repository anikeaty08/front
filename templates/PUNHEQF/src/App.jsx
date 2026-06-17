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
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
          colors: {
            surface: { 900: '#0c0c0c', 800: '#141414' },
            accent: { 500: '#4ade80', 600: '#22c55e' }
          },
          borderRadius: { xl2: '1.25rem' }
        }
      }
    };
  


    lucide.createIcons();
    // Tabs logic
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active from all
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('tab-active'));
        // Hide all panels
        document.querySelectorAll('.feature-panel').forEach(panel => panel.classList.add('hidden'));
        // Set active
        this.classList.add('tab-active');
        const tab = this.getAttribute('data-tab');
        document.querySelector('.feature-panel[data-panel="'+tab+'"]').classList.remove('hidden');
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
      
<header className="py-6 px-6 flex justify-between items-center bg-surface-900 border-b border-gray-800">
<a className="flex items-center gap-2 font-bold text-2xl text-accent-500" href="/">
<svg className="lucide lucide-workflow w-7 h-7" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path className="" d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect className="" height="8" rx="2" width="8" x="13" y="13"></rect></svg>
      NexusFlow
    </a>
<nav className="flex gap-6 text-gray-400 text-base font-medium">
<a className="hover:text-accent-500 transition" href="/">Home</a>
<a className="text-accent-500" href="/features">Features</a>
<a className="hover:text-accent-500 transition" href="#">Pricing</a>
</nav>
</header>
<main className="flex-1 flex flex-col">
<section className="w-full flex flex-col items-center justify-center lg:py-24 bg-surface-900 min-h-[40vh] relative pt-16 pr-6 pb-16 pl-6">
<span className="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-accent-500/10 text-accent-500 font-medium mb-5">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
        Explore Features
      </span>
<h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-center">
        Power for Every Project
      </h1>
<p className="max-w-xl mx-auto text-lg text-gray-400 text-center mb-2">
        Discover what makes NexusFlow the all-in-one hub for project teams.
      </p>
</section>
<section className="max-w-5xl sm:px-8 mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">

<div className="window mb-10 p-4 flex flex-wrap gap-2 justify-center">
<button className="tab-btn px-5 py-2 rounded-full text-base font-semibold hover:bg-accent-500/20 focus:outline-none focus:ring-2 focus:ring-accent-500 transition tab-active" data-tab="collab">
<svg className="lucide lucide-users inline-block w-5 h-5 mr-2 -mt-1" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
          Collaboration
        </button>
<button className="tab-btn px-5 py-2 rounded-full text-base font-semibold hover:bg-accent-500/20 focus:outline-none focus:ring-2 focus:ring-accent-500 transition" data-tab="org">
<svg className="lucide lucide-layers inline-block w-5 h-5 mr-2 -mt-1" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
          Organization
        </button>
<button className="tab-btn px-5 py-2 rounded-full text-base font-semibold hover:bg-accent-500/20 focus:outline-none focus:ring-2 focus:ring-accent-500 transition" data-tab="insights">
<svg className="lucide lucide-bar-chart-3 inline-block w-5 h-5 mr-2 -mt-1" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
          Insights
        </button>
<button className="tab-btn px-5 py-2 rounded-full text-base font-semibold hover:bg-accent-500/20 focus:outline-none focus:ring-2 focus:ring-accent-500 transition" data-tab="security">
<svg className="lucide lucide-lock inline-block w-5 h-5 mr-2 -mt-1" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          Security
        </button>
</div>

<div className="">

<div className="feature-panel" data-panel="collab">
<div className="grid md:grid-cols-2 gap-7">
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-message-circle w-7 h-7 text-accent-500" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</div>
<div className="">
<h3 className="font-semibold text-xl mb-1">Real-Time Discussions</h3>
<p className="text-gray-400 text-base">
                  Built-in chat and comment threads keep everyone in sync—right inside your projects.
                </p>
</div>
</div>
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-edit-3 w-7 h-7 text-accent-500" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path></svg>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Live Document Editing</h3>
<p className="text-gray-400 text-base">
                  Co-edit docs, requirements, and wikis in real-time, with rich version history and mentions.
                </p>
</div>
</div>
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-check-square w-7 h-7 text-accent-500" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Task Assignment &amp; Tracking</h3>
<p className="text-gray-400 text-base">
                  Assign, prioritize, and follow tasks across your team with Kanban and calendar views.
                </p>
</div>
</div>
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-bell w-7 h-7 text-accent-500" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Smart Notifications</h3>
<p className="text-gray-400 text-base">
                  Stay updated with customizable, context-aware notifications—never miss a beat.
                </p>
</div>
</div>
</div>
</div>

<div className="feature-panel hidden" data-panel="org">
<div className="grid md:grid-cols-2 gap-7">
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-folder-tree w-7 h-7 text-accent-500" data-lucide="folder-tree" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"></path><path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"></path><path d="M3 5a2 2 0 0 0 2 2h3"></path><path d="M3 3v13a2 2 0 0 0 2 2h3"></path></svg>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Hierarchical Projects</h3>
<p className="text-gray-400 text-base">
                  Organize projects, subprojects, and tasks in a flexible tree—perfect for scaling teams.
                </p>
</div>
</div>
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-file-text w-7 h-7 text-accent-500" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Centralized Knowledge Base</h3>
<p className="text-gray-400 text-base">
                  All docs, specs, and resources in one easily searchable library, linked straight to your work.
                </p>
</div>
</div>
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-tag w-7 h-7 text-accent-500" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Tagging &amp; Filtering</h3>
<p className="text-gray-400 text-base">
                  Tag tasks, docs, and messages for instant filtering and advanced reporting.
                </p>
</div>
</div>
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-link-2 w-7 h-7 text-accent-500" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Resource Linking</h3>
<p className="text-gray-400 text-base">
                  Easily connect files, external tools, and references directly to your project flows.
                </p>
</div>
</div>
</div>
</div>

<div className="feature-panel hidden" data-panel="insights">
<div className="grid md:grid-cols-2 gap-7">
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-activity w-7 h-7 text-accent-500" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Progress Analytics</h3>
<p className="text-gray-400 text-base">
                  Visual dashboards show team velocity, completion rates, and bottlenecks at a glance.
                </p>
</div>
</div>
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-target w-7 h-7 text-accent-500" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Goal Tracking</h3>
<p className="text-gray-400 text-base">
                  Set milestones and track progress with goal charts and automated updates.
                </p>
</div>
</div>
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-clock w-7 h-7 text-accent-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Time Management</h3>
<p className="text-gray-400 text-base">
                  Built-in timers and reports help teams optimize focus and estimate resource needs.
                </p>
</div>
</div>
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-bar-chart-2 w-7 h-7 text-accent-500" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Custom Reports</h3>
<p className="text-gray-400 text-base">
                  Create, schedule, and share detailed reports for any metric or workflow.
                </p>
</div>
</div>
</div>
</div>

<div className="feature-panel hidden" data-panel="security">
<div className="grid md:grid-cols-2 gap-7">
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-shield w-7 h-7 text-accent-500" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Enterprise-Grade Security</h3>
<p className="text-gray-400 text-base">
                  End-to-end encryption and SSO keep your data private and your team safe.
                </p>
</div>
</div>
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-user-check w-7 h-7 text-accent-500" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Role-Based Access</h3>
<p className="text-gray-400 text-base">
                  Fine-grained permissions let you control who sees and does what, down to the last doc.
                </p>
</div>
</div>
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-file-lock w-7 h-7 text-accent-500" data-lucide="file-lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><rect height="6" rx="1" width="8" x="8" y="12"></rect><path d="M10 12v-2a2 2 0 1 1 4 0v2"></path></svg>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Audit Logging</h3>
<p className="text-gray-400 text-base">
                  Track every change, access, and export with full audit logs for compliance.
                </p>
</div>
</div>
<div className="window p-6 flex gap-4 items-start">
<div className="bg-accent-500/20 rounded-xl p-3">
<svg className="lucide lucide-cloud-off w-7 h-7 text-accent-500" data-lucide="cloud-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 2 20 20"></path><path d="M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"></path><path d="M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"></path></svg>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Offline &amp; Data Export</h3>
<p className="text-gray-400 text-base">
                  Export your data anytime and work offline with peace of mind.
                </p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 text-center">
<h2 className="text-2xl font-bold mb-3">Ready to see NexusFlow in action?</h2>
<a className="inline-block px-7 py-3 rounded-full bg-accent-500 text-surface-900 font-semibold text-base hover:bg-accent-600 transition" href="#">Request a Demo</a>
</div>
</section>
</main>
<footer className="py-8 text-center text-gray-600 border-t border-gray-800 text-sm bg-surface-800">
    © 2024 NexusFlow. All rights reserved.
  </footer>


    </>
  );
}
