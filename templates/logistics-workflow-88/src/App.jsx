import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Text reveal animation for the agents section
    document.addEventListener("DOMContentLoaded", () => {
      const section = document.getElementById('agents-section');
      const subtitle = document.getElementById('reveal-subtitle');
      const main = document.getElementById('reveal-main');
      const detail = document.getElementById('reveal-detail');

      let ticking = false;

      const updateScroll = () => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if section is in viewport
        const isInView = rect.top < windowHeight && rect.bottom > 0;
        
        if (isInView) {
          // Calculate progress based on section position
          const scrollProgress = 1 - (rect.top / windowHeight);
          
          // Reveal elements based on scroll progress
          if (scrollProgress > 0.1) {
            subtitle.classList.add('visible');
          } else {
            subtitle.classList.remove('visible');
          }

          if (scrollProgress > 0.25) {
            main.classList.add('visible');
          } else {
            main.classList.remove('visible');
          }

          if (scrollProgress > 0.4) {
            detail.classList.add('visible');
          } else {
            detail.classList.remove('visible');
          }
        }

        ticking = false;
      };

      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(updateScroll);
          ticking = true;
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      
      // Initial check
      updateScroll();
    });

    // Workflow cards scroll reveal
    document.addEventListener("DOMContentLoaded", () => {
      const workflowCards = document.querySelectorAll('.workflow-card');
      
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      };

      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      workflowCards.forEach(card => {
        cardObserver.observe(card);
      });
    });

    // Workflow filter functionality
    window.filterWorkflows = function(category, btn) {
      const buttons = btn.parentElement.querySelectorAll('button');
      buttons.forEach(b => {
        b.className = 'px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all rounded-sm';
      });
      btn.className = 'px-4 py-2 text-xs font-medium text-black bg-white rounded-sm shadow-sm transition-all';

      const grid = document.getElementById('workflow-grid');
      const cards = document.querySelectorAll('#workflow-grid > div');
      const showMore = document.getElementById('show-more-container');

      // Update copy visibility based on category
      cards.forEach((card, index) => {
        // Hide all copy variants first
        card.querySelectorAll('[class*="card-copy-"]').forEach(p => p.classList.add('hidden'));

        // Show the appropriate copy
        const copyEl = card.querySelector('.card-copy-' + category);
        if (copyEl) copyEl.classList.remove('hidden');

        if (category === 'all') {
          if (grid.classList.contains('expanded')) {
            card.classList.remove('hidden');
          } else {
            if (index < 6) card.classList.remove('hidden');
            else card.classList.add('hidden');
          }
        } else {
          if (grid.classList.contains('expanded')) {
            card.classList.remove('hidden');
          } else {
            if (index < 6) card.classList.remove('hidden');
            else card.classList.add('hidden');
          }
        }
      });

      showMore.classList.remove('hidden');
    };

    window.showAllWorkflows = function() {
      const grid = document.getElementById('workflow-grid');
      const cards = document.querySelectorAll('#workflow-grid > div');
      const showMore = document.getElementById('show-more-container');
      const btnText = showMore.querySelector('span');
      const btnIcon = showMore.querySelector('iconify-icon');

      if (grid.classList.contains('expanded')) {
        grid.classList.remove('expanded');
        cards.forEach((card, index) => {
          if (index < 6) card.classList.remove('hidden');
          else card.classList.add('hidden');
        });
        btnText.innerText = 'See all workflows';
        btnIcon.setAttribute('icon', 'lucide:arrow-down');
      } else {
        grid.classList.add('expanded');
        cards.forEach(c => c.classList.remove('hidden'));
        btnText.innerText = 'Show less';
        btnIcon.setAttribute('icon', 'lucide:arrow-up');
      }
    };

    // Initialize with 'all' copy visible
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('#workflow-grid > div').forEach(card => {
        card.querySelectorAll('[class*="card-copy-"]').forEach(p => p.classList.add('hidden'));
        const allCopy = card.querySelector('.card-copy-all');
        if (allCopy) allCopy.classList.remove('hidden');
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#080808]/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-white font-medium tracking-tight text-lg" href="#">
          FreightPoint
        </a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
<a className="hover:text-white transition-colors" href="#problem">
          The Gap
        </a>
<a className="hover:text-white transition-colors" href="#workflows">
          Workflows
        </a>
<a className="hover:text-white transition-colors" href="#how-it-works">
          Method
        </a>
<a className="hover:text-white transition-colors" href="#pricing">
          Pricing
        </a>
</div>
<a className="bg-white text-black px-4 py-2 text-xs font-medium hover:bg-neutral-200 transition-colors rounded-sm tracking-wide" href="#book">
        BOOK A CALL
      </a>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 border-b border-white/10 relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-4xl">
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1] mb-8">
          We run the operational workflows that slow logistics teams down.
        </h1>
<p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed mb-10 max-w-2xl">
          We take ownership of high-friction back-office work like quoting,
          order entry, document handling, and portal updates — to free up your
          team for revenue generating tasks.
        </p>
<div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
<a className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors rounded-sm" href="#book">
<span>Book A Call</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<div className="flex items-center gap-6 text-xs text-neutral-500 font-mono uppercase tracking-wide border-l border-white/10 pl-6 h-full">
<span className="flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon>
              Fixed Pricing
            </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon>
              No rip-and-replace
            </span>
</div>
</div>
<p className="text-sm text-neutral-500 font-mono">
          // WORKS INSIDE YOUR TMS, EXCEL, EMAIL, AND PORTALS.
        </p>
</div>
</div>
</section>

<section className="border-b border-white/10 bg-[#0A0A0A]" id="problem">
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">

<div className="lg:col-span-4 md:p-12 lg:border-r lg:sticky lg:top-16 lg:h-fit border-white/10 pt-8 pr-8 pb-8 pl-8">
<span className="inline-block text-xs font-mono text-neutral-500 mb-6 border border-white/10 px-2 py-1 rounded-sm">
          THE REALITY
        </span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-6">
          Most operational problems don't show up as failures.
          <br/>
<span className="text-neutral-500">
            They show up as work quietly slipping between systems.
          </span>
</h2>
</div>

<div className="lg:col-span-8 md:p-12 md:pr-24 pt-8 pr-8 pb-8 pl-8">
<div className="prose prose-invert prose-lg font-light text-neutral-400 max-w-none space-y-8">
<p>
            In logistics operations, the work that matters most rarely lives
            in one place. It lives across inboxes, spreadsheets, portals,
            PDFs, and message threads — stitched together by people who know
            what to check, who to follow up with, and when something "doesn't
            look right."
          </p>
<p>
            This works — until it doesn't. As volume increases, small gaps
            compound:
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
<div className="p-4 border border-white/10 bg-white/5 rounded-sm">
<iconify-icon className="text-neutral-300 mb-3" icon="lucide:file-x" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-sm text-neutral-300">
                Documents arrive late or incomplete
              </p>
</div>
<div className="p-4 border border-white/10 bg-white/5 rounded-sm">
<iconify-icon className="text-neutral-300 mb-3" icon="lucide:dollar-sign" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-sm text-neutral-300">
                Accessorials get missed or disputed
              </p>
</div>
<div className="p-4 border border-white/10 bg-white/5 rounded-sm">
<iconify-icon className="text-neutral-300 mb-3" icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-sm text-neutral-300">
                Billing is delayed by manual rework
              </p>
</div>
<div className="p-4 border border-white/10 bg-white/5 rounded-sm">
<iconify-icon className="text-neutral-300 mb-3" icon="lucide:alert-circle" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-sm text-neutral-300">
                Exceptions caught days too late
              </p>
</div>
</div>
<p>
            Nothing breaks all at once. Things just quietly fall out of sync.
            Most teams try to manage this by hiring more coordinators, adding
            tools, or building partial automations. But that often creates a
            different problem:
          </p>
<ul className="list-none font-medium text-white border-white/20 border-l-2 pl-0 space-y-2">
<li className="pl-4">More handoffs.</li>
<li className="pl-4">More dependency on tribal knowledge.</li>
<li className="pl-4">
              More things that only work when the right person is paying
              attention.
            </li>
</ul>
<p>
            The risk isn't that your team is doing a bad job. The risk is that
            critical operational work depends on humans noticing, remembering,
            and chasing details across disconnected systems — every day.
          </p>
<p>
            And when something slips, it usually shows up downstream: in
            delayed invoices, disputed charges, compliance issues, or customer
            conversations you'd rather not be having.
          </p>
<div className="mt-12 pt-12 border-t border-white/10">
<p className="text-xl text-white font-medium mb-4">
              The Transitional Reality
            </p>
<p>
              If this feels uncomfortably familiar, it's because it's how most
              logistics operations actually run today. The question isn't
              whether the work is getting done. It's whether it's being caught
              early — or discovered after it's already cost you time, money,
              or trust.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden flex min-h-[80vh] border-white/10 border-b relative items-center justify-center" id="agents-section">

<div className="absolute inset-0 z-0">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/2103099/2103099-uhd_2560_1440_30fps.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-black/70"></div>

<div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808] opacity-80"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#080808]/50 via-transparent to-[#080808]/50"></div>
</div>

<div className="absolute inset-0 z-[1] pointer-events-none opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 py-32 md:py-48">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-center leading-[1.15] md:leading-[1.1] text-white">
<span className="block text-2xl md:text-3xl text-neutral-400 mb-6 font-normal reveal-subtitle" id="reveal-subtitle">
          This isn't another tool
        </span>
<span className="block reveal-main drop-shadow-lg" id="reveal-main">
          We put dedicated agents in place that work across your existing
          systems.
        </span>
<span className="block mt-8 text-3xl md:text-4xl text-neutral-300 reveal-detail drop-shadow-md" id="reveal-detail">
          Handle multi-step operational work and surface exceptions when human
          judgement is needed, while we own uptime, monitoring and fixes.
        </span>
</h2>
</div>
</section>

<section className="border-white/10 border-b pt-24 pb-24 relative overflow-hidden" id="workflows">

<div className="absolute inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)', backgroundSize: '80px 80px'}}></div>

<div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] glow-orb"></div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/3 rounded-full blur-[120px] glow-orb" style={{animationDelay: '2s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/3 rounded-full blur-[200px] glow-orb" style={{animationDelay: '1s'}}></div>

<div className="beam-h" style={{top: '20%', animationDelay: '0s'}}></div>
<div className="beam-h" style={{top: '50%', animationDelay: '3s'}}></div>
<div className="beam-h" style={{top: '80%', animationDelay: '6s'}}></div>
<div className="beam-v" style={{left: '15%', animationDelay: '1s'}}></div>
<div className="beam-v" style={{left: '50%', animationDelay: '4s'}}></div>
<div className="beam-v" style={{left: '85%', animationDelay: '7s'}}></div>

<div className="node" style={{top: '20%', left: '15%', animationDelay: '0s'}}></div>
<div className="node" style={{top: '20%', left: '50%', animationDelay: '0.5s'}}></div>
<div className="node" style={{top: '20%', left: '85%', animationDelay: '1s'}}></div>
<div className="node" style={{top: '50%', left: '15%', animationDelay: '1.5s'}}></div>
<div className="node" style={{top: '50%', left: '50%', animationDelay: '2s'}}></div>
<div className="node" style={{top: '50%', left: '85%', animationDelay: '2.5s'}}></div>
<div className="node" style={{top: '80%', left: '15%', animationDelay: '3s'}}></div>
<div className="node" style={{top: '80%', left: '50%', animationDelay: '3.5s'}}></div>
<div className="node" style={{top: '80%', left: '85%', animationDelay: '4s'}}></div>

<div className="absolute w-1 h-1 bg-emerald-400/40 rounded-full" style={{top: '15%', left: '25%', animation: 'float 12s ease-in-out infinite'}}></div>
<div className="absolute w-1.5 h-1.5 bg-white/20 rounded-full" style={{top: '65%', left: '75%', animation: 'float 15s ease-in-out infinite 3s'}}></div>
<div className="absolute w-1 h-1 bg-emerald-400/30 rounded-full" style={{top: '35%', left: '60%', animation: 'float 10s ease-in-out infinite 1s'}}></div>
<div className="absolute w-2 h-2 bg-emerald-500/20 rounded-full" style={{top: '75%', left: '35%', animation: 'float 18s ease-in-out infinite 5s'}}></div>
<div className="absolute w-1 h-1 bg-white/15 rounded-full" style={{top: '45%', left: '10%', animation: 'float 14s ease-in-out infinite 2s'}}></div>
<div className="absolute w-1.5 h-1.5 bg-emerald-400/25 rounded-full" style={{top: '25%', left: '90%', animation: 'float 16s ease-in-out infinite 4s'}}></div>

<svg className="absolute inset-0 w-full h-full opacity-10" preserveaspectratio="none">
<defs>
<lineargradient id="line-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgba(16,185,129,0)', stopOpacity: '1'}}></stop>
<stop offset="50%" style={{stopColor: 'rgba(16,185,129,0.5)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(16,185,129,0)', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<path className="connection-line" d="M 0 200 Q 400 100 800 200 T 1600 200" fill="none" stroke="url(#line-gradient)" strokeWidth="1"></path>
<path className="connection-line" d="M 0 400 Q 400 300 800 400 T 1600 400" fill="none" stroke="url(#line-gradient)" strokeWidth="1" style={{animationDelay: '5s'}}></path>
<path className="connection-line" d="M 0 600 Q 400 500 800 600 T 1600 600" fill="none" stroke="url(#line-gradient)" strokeWidth="1" style={{animationDelay: '10s'}}></path>
</svg>
</div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6 relative z-10">
<div className="flex flex-col lg:flex-row lg:items-end mb-16 gap-x-8 gap-y-8 justify-between">
<div className="max-w-xl">
<div className="flex items-center gap-3 mb-4">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="uppercase text-xs text-neutral-500 tracking-widest font-mono">
              live on your systems
            </span>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mt-2 leading-[1.1]">
            Operational Workflows We Run
          </h2>
<p className="leading-relaxed text-lg font-light text-neutral-400 mt-4">
            No new platform, no process overhaul. We execute directly within your existing stack.
          </p>
</div>

<div className="flex p-1 bg-white/5 border border-white/10 rounded-md overflow-hidden shrink-0 self-start lg:self-end backdrop-blur-sm" id="workflow-tabs">
<button className="px-4 py-2 text-xs font-medium text-black bg-white rounded-sm shadow-sm transition-all" data-tab="all" onclick="window.filterWorkflows('all', this)">
            All
          </button>
<button className="hover:text-white hover:bg-white/5 transition-all text-xs font-medium text-neutral-400 pt-2 pr-4 pb-2 pl-4 rounded-sm" data-tab="ops" onclick="window.filterWorkflows('ops', this)">
            Brokerages
          </button>
<button className="hover:text-white hover:bg-white/5 transition-all text-xs font-medium text-neutral-400 pt-2 pr-4 pb-2 pl-4 rounded-sm" data-tab="finance" onclick="window.filterWorkflows('finance', this)">
            3PLs
          </button>
<button className="hover:text-white hover:bg-white/5 transition-all text-xs font-medium text-neutral-400 pt-2 pr-4 pb-2 pl-4 rounded-sm" data-tab="data" onclick="window.filterWorkflows('data', this)">
            Carriers
          </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="workflow-grid">

<div className="workflow-card stagger-1 relative bg-[#0A0A0A]/80 backdrop-blur-sm p-8 group hover:bg-[#0F0F0F] transition-all duration-500 border border-white/5 hover:border-emerald-500/20 rounded-lg overflow-hidden" data-category="all ops finance data">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -mr-16 -mt-16"></div>
<div className="relative z-10">
<div className="h-12 w-12 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-500/30 group-hover:from-emerald-500/20 group-hover:to-emerald-500/5 transition-all duration-500 rounded-lg">
<iconify-icon className="icon-glow" icon="lucide:file-text" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="font-medium text-white mb-3 text-lg tracking-tight">Quote &amp; Order Entry</h3>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-all">
              Extract shipment details from emails, PDFs, and attachments to
              create clean, structured orders directly in your system of record
              without manual rekeying.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-ops hidden">
              Extract shipment details from inbound emails and rate requests,
              build quotes or orders directly in your TMS, and eliminate manual
              data entry from PDFs and attachments.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-finance hidden">
              Capture order details from customer emails, documents, and
              portals, create accurate orders across systems, and reduce delays
              caused by manual intake and rework.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-data hidden">
              Extract shipment details from tenders, emails, and documents,
              create loads in dispatch or TMS systems automatically, and reduce
              manual order setup for operations teams.
            </p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="workflow-card stagger-2 relative bg-[#0A0A0A]/80 backdrop-blur-sm p-8 group hover:bg-[#0F0F0F] transition-all duration-500 border border-white/5 hover:border-emerald-500/20 rounded-lg overflow-hidden" data-category="all ops finance data">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -mr-16 -mt-16"></div>
<div className="relative z-10">
<div className="h-12 w-12 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-500/30 group-hover:from-emerald-500/20 group-hover:to-emerald-500/5 transition-all duration-500 rounded-lg">
<iconify-icon className="icon-glow" icon="lucide:truck" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="font-medium text-white mb-3 text-lg tracking-tight">Track &amp; Trace</h3>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-all">
              Continuously monitor shipment status across carrier portals,
              tracking sources, and systems of record. Surface exceptions early
              and keep operational data in sync without manual checking.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-ops hidden">
              Continuously monitor carrier updates across portals and emails,
              surface late pickups or missed milestones early, and keep your TMS
              accurate without constant check calls.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-finance hidden">
              Monitor shipment progress across carriers and customer SLAs,
              surface service risks early, and maintain accurate status across
              systems without manual follow-ups.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-data hidden">
              Monitor load progress across shipper requirements and tracking
              sources, surface delivery risks early, and keep dispatch and
              back-office systems in sync automatically.
            </p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="workflow-card stagger-3 relative bg-[#0A0A0A]/80 backdrop-blur-sm p-8 group hover:bg-[#0F0F0F] transition-all duration-500 border border-white/5 hover:border-emerald-500/20 rounded-lg overflow-hidden" data-category="all ops finance data">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -mr-16 -mt-16"></div>
<div className="relative z-10">
<div className="h-12 w-12 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-500/30 group-hover:from-emerald-500/20 group-hover:to-emerald-500/5 transition-all duration-500 rounded-lg">
<iconify-icon className="icon-glow" icon="lucide:shield-check" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="font-medium text-white mb-3 text-lg tracking-tight">
              Carrier Vetting &amp; Fraud Protection
            </h3>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-all">
              Verify carrier identity, authority, insurance, and compliance
              across systems. Flag risk signals early and prevent fraudulent or
              non-compliant carriers from entering active workflows.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-ops hidden">
              Continuously vet carriers against authority, insurance, and fraud
              signals, flag double-brokering or identity mismatches early, and
              reduce exposure before loads are tendered.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-finance hidden">
              Validate carrier compliance and insurance across customer
              requirements, surface risk before assignment, and reduce
              downstream issues tied to unqualified or fraudulent carriers.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-data hidden">
              Monitor internal and external compliance signals, validate shipper
              and partner requirements, and reduce operational risk tied to
              documentation gaps or fraudulent activity.
            </p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="workflow-card stagger-4 relative bg-[#0A0A0A]/80 backdrop-blur-sm p-8 group hover:bg-[#0F0F0F] transition-all duration-500 border border-white/5 hover:border-emerald-500/20 rounded-lg overflow-hidden" data-category="all ops finance data">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -mr-16 -mt-16"></div>
<div className="relative z-10">
<div className="h-12 w-12 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-500/30 group-hover:from-emerald-500/20 group-hover:to-emerald-500/5 transition-all duration-500 rounded-lg">
<iconify-icon className="icon-glow" icon="lucide:files" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="font-medium text-white mb-3 text-lg tracking-tight">
              POD &amp; Document Collection
            </h3>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-all">
              Automatically collect proof of delivery and required shipment
              documents across emails, portals, and uploads. Validate
              completeness, normalize formats, and keep records synced to your
              system of record without manual chasing.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-ops hidden">
              Collect PODs and shipment documents from carriers across emails
              and portals, validate completeness, and attach them to loads
              automatically so billing and closeout aren't delayed by missing
              paperwork.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-finance hidden">
              Gather PODs and supporting documents across carriers and
              customers, ensure requirements are met per SLA, and keep
              documentation synced across systems to avoid downstream billing
              and compliance issues.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-data hidden">
              Collect PODs and delivery documents from drivers, shippers, and
              partners, validate submission against requirements, and sync
              records directly into dispatch or back-office systems without
              manual follow-up.
            </p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="workflow-card stagger-5 relative bg-[#0A0A0A]/80 backdrop-blur-sm p-8 group hover:bg-[#0F0F0F] transition-all duration-500 border border-white/5 hover:border-emerald-500/20 rounded-lg overflow-hidden" data-category="all ops finance data">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -mr-16 -mt-16"></div>
<div className="relative z-10">
<div className="h-12 w-12 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-500/30 group-hover:from-emerald-500/20 group-hover:to-emerald-500/5 transition-all duration-500 rounded-lg">
<iconify-icon className="icon-glow" icon="lucide:folder-input" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="font-medium text-white mb-3 text-lg tracking-tight">
              Document Classification &amp; Routing
            </h3>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-all">
              Automatically classify inbound logistics documents across emails,
              PDFs, and portals. Route each document to the correct system,
              load, or workflow without manual sorting or handling.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-ops hidden">
              Classify inbound documents like rate confirmations, BOLs, PODs,
              and invoices, and route them to the correct load or TMS record
              automatically—eliminating inbox triage and misfiled paperwork.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-finance hidden">
              Categorize and route customer and carrier documents across orders,
              shipments, and accounts, ensuring each document lands in the right
              system and workflow without manual intervention.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-data hidden">
              Classify inbound shipper and delivery documents, route them to
              dispatch, billing, or compliance workflows, and keep back-office
              systems organized without manual document handling.
            </p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="workflow-card stagger-6 relative bg-[#0A0A0A]/80 backdrop-blur-sm p-8 group hover:bg-[#0F0F0F] transition-all duration-500 border border-white/5 hover:border-emerald-500/20 rounded-lg overflow-hidden" data-category="all ops finance data">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -mr-16 -mt-16"></div>
<div className="relative z-10">
<div className="h-12 w-12 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-500/30 group-hover:from-emerald-500/20 group-hover:to-emerald-500/5 transition-all duration-500 rounded-lg">
<iconify-icon className="icon-glow" icon="lucide:refresh-cw" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="font-medium text-white mb-3 text-lg tracking-tight">
              Excel ↔ TMS Synchronisation
            </h3>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-all">
              Keep spreadsheets and systems of record in sync automatically.
              Detect changes in Excel files and update your TMS in real time
              without manual copying, pasting, or reconciliation.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-ops hidden">
              Sync rate sheets, load trackers, and internal Excel files with
              your TMS automatically—ensuring pricing, load details, and updates
              stay accurate without manual re-entry.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-finance hidden">
              Capture order details from customer emails, documents, and
              portals, create accurate orders across systems, and reduce delays
              caused by manual intake and rework.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-data hidden">
              Sync dispatch, load, and billing spreadsheets with TMS or
              back-office systems, keeping operational data current without
              manual updates or duplicate data entry.
            </p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="workflow-card stagger-7 relative bg-[#0A0A0A]/80 backdrop-blur-sm p-8 group hover:bg-[#0F0F0F] transition-all duration-500 border border-white/5 hover:border-emerald-500/20 rounded-lg overflow-hidden hidden" data-category="all ops finance data">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -mr-16 -mt-16"></div>
<div className="relative z-10">
<div className="h-12 w-12 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-500/30 group-hover:from-emerald-500/20 group-hover:to-emerald-500/5 transition-all duration-500 rounded-lg">
<iconify-icon className="icon-glow" icon="lucide:receipt" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="font-medium text-white mb-3 text-lg tracking-tight">
              Billing &amp; Invoice QA
            </h3>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-all">
              Review invoices against shipment data, contracts, and supporting
              documents automatically. Flag discrepancies early and reduce
              manual audit work before invoices are sent or paid.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-ops hidden">
              Validate carrier invoices against load details, rates, and
              accessorials, flag overcharges or missing documentation, and
              reduce revenue leakage and manual invoice review.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-finance hidden">
              Audit carrier and customer invoices across contracts and SLAs,
              surface billing discrepancies early, and reduce disputes and
              rework before invoices reach customers.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-data hidden">
              Validate invoices against shipper requirements, rate
              confirmations, and PODs, flag issues before submission, and reduce
              payment delays caused by billing errors or missing documentation.
            </p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="workflow-card stagger-8 relative bg-[#0A0A0A]/80 backdrop-blur-sm p-8 group hover:bg-[#0F0F0F] transition-all duration-500 border border-white/5 hover:border-emerald-500/20 rounded-lg overflow-hidden hidden" data-category="all ops finance data">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -mr-16 -mt-16"></div>
<div className="relative z-10">
<div className="h-12 w-12 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-500/30 group-hover:from-emerald-500/20 group-hover:to-emerald-500/5 transition-all duration-500 rounded-lg">
<iconify-icon className="icon-glow" icon="lucide:clock" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="font-medium text-white mb-3 text-lg tracking-tight">
              Detention &amp; TONU Evidence Generation
            </h3>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-all">
              Monitor shipment timelines and event data, capture supporting
              documents and signals automatically, and generate complete
              detention or TONU evidence without manual reconstruction.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-ops hidden">
              Track arrival, wait times, and carrier communications, assemble
              detention or TONU evidence automatically, and reduce revenue
              leakage from missed or disputed accessorials.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-finance hidden">
              Monitor dwell time and service events across shipments, compile
              compliant detention or TONU documentation, and support faster,
              cleaner accessorial billing to customers.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-data hidden">
              Track shipper delays and wait times, collect supporting timestamps
              and documents automatically, and generate detention or TONU
              evidence that improves approval and payment speed.
            </p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="workflow-card stagger-9 relative bg-[#0A0A0A]/80 backdrop-blur-sm p-8 group hover:bg-[#0F0F0F] transition-all duration-500 border border-white/5 hover:border-emerald-500/20 rounded-lg overflow-hidden hidden" data-category="all ops finance data">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -mr-16 -mt-16"></div>
<div className="relative z-10">
<div className="h-12 w-12 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 group-hover:border-emerald-500/30 group-hover:from-emerald-500/20 group-hover:to-emerald-500/5 transition-all duration-500 rounded-lg">
<iconify-icon className="icon-glow" icon="lucide:message-square" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="font-medium text-white mb-3 text-lg tracking-tight">
              Driver Communication Automation
            </h3>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-all">
              Handle routine driver communications automatically across SMS,
              email, and messaging channels. Share load details, collect
              updates, and surface exceptions without manual back-and-forth.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-ops hidden">
              Automate driver check calls, appointment confirmations, and status
              requests. Collect updates via SMS or email, reduce dispatcher
              interruptions, and surface issues only when action is needed.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-finance hidden">
              Coordinate driver communications across multiple carriers,
              standardize updates, and maintain accurate shipment status without
              manual follow-ups or fragmented messaging.
            </p>
<p className="leading-relaxed text-sm text-neutral-400 card-copy-data hidden">
              Automate dispatch communications, load details, and update
              requests with drivers. Capture responses in real time and reduce
              manual coordination for dispatch and operations teams.
            </p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
</div>

<div className="mt-12 flex justify-center" id="show-more-container">
<button className="group relative flex items-center gap-2 px-8 py-4 bg-transparent text-white text-sm font-medium rounded-lg transition-all border border-white/10 hover:border-emerald-500/30 overflow-hidden" onclick="window.showAllWorkflows()">
<span className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
<span className="relative z-10">See all workflows</span>
<iconify-icon className="relative z-10 group-hover:translate-y-0.5 transition-transform" icon="lucide:arrow-down" strokeWidth="2" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="md:py-32 bg-[#080808] border-white/10 border-b pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-1">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
            We install, monitor, and operate these workflows end-to-end.
          </h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed max-w-xl">
            When something breaks, changes, or needs escalation, it comes to
            us — not you. You aren't managing tools, agents, or edge cases.
            You get outcomes with full visibility, while we take
            accountability for the execution.
          </p>
</div>

<div className="order-2 grid grid-cols-2 gap-6 md:gap-8">

<div className="group">
<div className="aspect-[3/4] w-full bg-neutral-800 rounded-sm mb-5 overflow-hidden relative border border-white/5">
<img alt="Founder" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100 mix-blend-screen hover:mix-blend-normal" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50"></div>
</div>
<div className="border-l border-white/20 pl-4 transition-colors group-hover:border-white/40">
<h3 className="text-white font-medium text-lg tracking-tight">
                Michael Ross
              </h3>
<p className="text-xs text-neutral-500 font-mono mt-1 uppercase tracking-wide">
                Founder — Operations
              </p>
<p className="text-xs text-neutral-600 mt-2 font-light">
                Ex-Logistics / Supply Chain Ops
              </p>
</div>
</div>

<div className="group md:mt-12">
<div className="aspect-[3/4] w-full bg-neutral-800 rounded-sm mb-5 overflow-hidden relative border border-white/5">
<img alt="Founder" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100 mix-blend-screen hover:mix-blend-normal" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50"></div>
</div>
<div className="border-l border-white/20 pl-4 transition-colors group-hover:border-white/40">
<h3 className="text-white font-medium text-lg tracking-tight">
                David Chen
              </h3>
<p className="text-xs text-neutral-500 font-mono mt-1 uppercase tracking-wide">
                Founder — Technical
              </p>
<p className="text-xs text-neutral-600 mt-2 font-light">
                Systems Engineering Lead
              </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-b border-white/10" id="how-it-works">
<div className="max-w-2xl mx-auto px-6">
<div className="mb-12">
<div className="flex items-center gap-2 mb-4">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
            The Process
          </span>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">
          From chaotic inputs to
          <span className="text-neutral-500">streamlined outcomes.</span>
</h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed">
          We replace manual back-office grinding with deterministic workflows.
          No long integration projects. No new software to learn.
        </p>
</div>
<div className="space-y-4">

<div className="group relative bg-[#0A0A0A] border border-white/10 p-6 rounded-lg hover:border-white/20 transition-all">
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all">
<iconify-icon icon="lucide:search" width="14"></iconify-icon>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-2">
<h3 className="text-white font-medium text-base">
                  Discovery &amp; Audit
                </h3>
<span className="text-xs font-mono text-neutral-600">01</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed">
                We deep-dive into your current process "as is". We analyze
                email threads, PDF formats, and portal workflows to map every
                input, rule, and exception path.
              </p>
</div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 p-6 rounded-lg hover:border-white/20 transition-all">
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all">
<iconify-icon icon="lucide:git-merge" width="14"></iconify-icon>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-2">
<h3 className="text-white font-medium text-base">
                  Logic Mapping
                </h3>
<span className="text-xs font-mono text-neutral-600">02</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed">
                We convert implicit tribal knowledge into explicit logic. We
                document the exact decision tree your team follows to create
                coded rules.
              </p>
</div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 p-6 rounded-lg hover:border-white/20 transition-all">
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all">
<iconify-icon icon="lucide:cable" width="14"></iconify-icon>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-2">
<h3 className="text-white font-medium text-base">
                  Zero-IT Integration
                </h3>
<span className="text-xs font-mono text-neutral-600">03</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed">
                We connect to your existing stack—TMS, Email, Portals,
                Excel—without waiting for internal IT resources using secure,
                non-invasive connectors.
              </p>
</div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 p-6 rounded-lg hover:border-white/20 transition-all">
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all">
<iconify-icon icon="lucide:flask-conical" width="14"></iconify-icon>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-2">
<h3 className="text-white font-medium text-base">
                  Shadow Validation
                </h3>
<span className="text-xs font-mono text-neutral-600">04</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed">
                We run in "shadow mode" alongside your team for one week,
                comparing automated outputs against manual work to ensure 100%
                accuracy.
              </p>
</div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 p-6 rounded-lg hover:border-white/20 transition-all">
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all">
<iconify-icon icon="lucide:play-circle" width="14"></iconify-icon>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-2">
<h3 className="text-white font-medium text-base">
                  Steady State &amp; Scale
                </h3>
<span className="text-xs font-mono text-neutral-600">05</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed">
                We take the wheel. The system handles the volume, and you
                receive a daily digest of outcomes. Your team only steps in
                for true edge-cases.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] border-white/10 border-b pt-24 pb-24" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-[#080808] border border-white/10 p-8 md:p-16 rounded-sm relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none"></div>
<div className="max-w-3xl relative z-10">
<h2 className="text-2xl md:text-3xl text-white font-medium mb-6 tracking-tight">
            Predictable, Flat-Rate Pricing
          </h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8">
            We believe operational costs should be predictable. Our pricing is
            fixed, capped, and transparent. We don't charge per-click or
            per-user penalties that discourage adoption.
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-white" icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">
                  Fixed Monthly Cost
                </h4>
<p className="text-neutral-500 text-sm mt-1">
                  Know exactly what you will pay, regardless of seasonal
                  volume spikes.
                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-white" icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Outcome Based</h4>
<p className="text-neutral-500 text-sm mt-1">
                  You pay for the workflow being managed, not for the server
                  time.
                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-100 border-neutral-200 border-b pt-24 pb-32" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-3xl">
<div className="flex items-center gap-2 mb-4">
<span className="flex h-2 w-2 rounded-full bg-emerald-600"></span>
<span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">
            Customer Impact
          </span>
</div>
<h2 className="text-3xl md:text-5xl font-medium text-neutral-900 tracking-tight mb-6">
          Don't just take our word for it.
        </h2>
<p className="text-xl text-neutral-600 font-light leading-relaxed max-w-2xl">
          Operations teams are reclaiming thousands of hours annually by
          automating the manual "glue work" between their systems.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 border border-neutral-200 rounded-sm bg-white flex flex-col justify-between h-full hover:border-neutral-300 transition-all duration-300 group">
<div className="mb-8">
<div className="flex gap-1 mb-6 text-emerald-500/80 group-hover:text-emerald-500 transition-colors">
<iconify-icon icon="lucide:star" style={{fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon icon="lucide:star" style={{fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon icon="lucide:star" style={{fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon icon="lucide:star" style={{fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon icon="lucide:star" style={{fill: 'currentColor'}} width="14"></iconify-icon>
</div>
<p className="text-neutral-700 font-light leading-relaxed text-lg">
              "We stopped chasing missing PODs. The system just finds them and
              attaches them. It saved our collections team about 15 hours a
              week immediately."
            </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-neutral-200">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 border border-neutral-300 flex items-center justify-center shrink-0 text-neutral-700 font-medium text-xs">
              JD
            </div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-neutral-900 tracking-tight">
                Director of Operations
              </span>
<span className="text-xs text-neutral-500 font-mono uppercase tracking-wide">
                Mid-sized 3PL
              </span>
</div>
</div>
</div>

<div className="p-8 border border-neutral-200 rounded-sm bg-white flex flex-col justify-between h-full hover:border-neutral-300 transition-all duration-300 group">
<div className="mb-8">
<div className="flex gap-1 mb-6 text-emerald-500/80 group-hover:text-emerald-500 transition-colors">
<iconify-icon icon="lucide:star" style={{fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon icon="lucide:star" style={{fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon icon="lucide:star" style={{fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon icon="lucide:star" style={{fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon icon="lucide:star" style={{fill: 'currentColor'}} width="14"></iconify-icon>
</div>
<p className="text-neutral-700 font-light leading-relaxed text-lg">
              "The biggest win wasn't just the time saved, it was the silence.
              Our tracking inbox used to be a firehose. Now it's manageable."
            </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-neutral-200">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 border border-neutral-300 flex items-center justify-center shrink-0 text-neutral-700 font-medium text-xs">
              AS
            </div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-neutral-900 tracking-tight">
                Logistics Manager
              </span>
<span className="text-xs text-neutral-500 font-mono uppercase tracking-wide">
                CPG Brand
              </span>
</div>
</div>
</div>

<div className="p-8 border border-neutral-200 rounded-sm bg-white flex flex-col justify-between h-full hover:border-neutral-300 transition-all duration-300 group">
<div className="mb-8">
<div className="flex gap-1 mb-6 text-emerald-500/80 group-hover:text-emerald-500 transition-colors">
<iconify-icon icon="lucide:star" style={{fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon icon="lucide:star" style={{fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon icon="lucide:star" style={{fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon icon="lucide:star" style={{fill: 'currentColor'}} width="14"></iconify-icon>
<iconify-icon icon="lucide:star" style={{fill: 'currentColor'}} width="14"></iconify-icon>
</div>
<p className="text-neutral-700 font-light leading-relaxed text-lg">
              "Compliance used to be a bottleneck for onboarding. Now carriers
              are cleared in minutes, not days. It's a game changer for
              capacity."
            </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-neutral-200">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 border border-neutral-300 flex items-center justify-center shrink-0 text-neutral-700 font-medium text-xs">
              MR
            </div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-neutral-900 tracking-tight">
                Carrier Relations VP
              </span>
<span className="text-xs text-neutral-500 font-mono uppercase tracking-wide">
                Digital Freight Brokerage
              </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b relative overflow-hidden bg-neutral-100 border-neutral-200">

<div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none">
<div className="absolute top-0 left-1/4 w-full md:w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[100px] -translate-y-1/2"></div>
</div>
<div className="max-w-3xl mx-auto px-6 relative z-10">

<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-neutral-900">
          Frequently asked questions
        </h2>
<p className="text-lg font-light leading-relaxed max-w-xl mx-auto text-neutral-600">
          Everything you need to know about our integration, compliance, and
          workflows.
        </p>
</div>

<div className="space-y-3">

<details className="group">
<summary className="flex items-center justify-between gap-4 p-5 md:p-6 w-full text-left bg-white border border-neutral-200 rounded-lg cursor-pointer hover:border-neutral-300 transition-all duration-200 select-none list-none [&amp;::-webkit-details-marker]:hidden">
<span className="text-lg font-medium text-neutral-700 group-hover:text-neutral-900 group-open:text-neutral-900 transition-colors">
              Do I need to change my TMS?
            </span>
<div className="relative flex items-center justify-center w-5 h-5 shrink-0 text-neutral-400 group-hover:text-neutral-600 transition-colors">
<iconify-icon className="absolute transition-all duration-200 ease-out opacity-100 rotate-0 group-open:opacity-0 group-open:rotate-90" icon="lucide:plus" strokeWidth="2" width="20"></iconify-icon>
<iconify-icon className="absolute transition-all duration-200 ease-out opacity-0 -rotate-90 group-open:opacity-100 group-open:rotate-0" icon="lucide:minus" strokeWidth="2" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-white border-x border-b border-neutral-200 rounded-b-lg -mt-2 font-light leading-relaxed text-neutral-600">
            No. We integrate directly with your existing TMS via API or EDI.
            Our system runs in the background, pushing and pulling data as
            needed without disrupting your team's current workflow or
            requiring a platform migration.
          </div>
</details>

<details className="group">
<summary className="flex items-center justify-between gap-4 p-5 md:p-6 w-full text-left bg-white border border-neutral-200 rounded-lg cursor-pointer hover:border-neutral-300 transition-all duration-200 select-none list-none [&amp;::-webkit-details-marker]:hidden">
<span className="text-lg font-medium text-neutral-700 group-hover:text-neutral-900 group-open:text-neutral-900 transition-colors">
              How long does implementation take?
            </span>
<div className="relative flex items-center justify-center w-5 h-5 shrink-0 text-neutral-400 group-hover:text-neutral-600 transition-colors">
<iconify-icon className="absolute transition-all duration-200 ease-out opacity-100 rotate-0 group-open:opacity-0 group-open:rotate-90" icon="lucide:plus" strokeWidth="2" width="20"></iconify-icon>
<iconify-icon className="absolute transition-all duration-200 ease-out opacity-0 -rotate-90 group-open:opacity-100 group-open:rotate-0" icon="lucide:minus" strokeWidth="2" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-white border-x border-b border-neutral-200 rounded-b-lg -mt-2 text-neutral-600 font-light leading-relaxed">
            Most customers are up and running within 2-3 weeks. Since we don't
            require heavy IT lifting, on-premise servers, or complex software
            installation, we can start mapping your workflows immediately
            after the discovery call.
          </div>
</details>

<details className="group">
<summary className="flex items-center justify-between gap-4 p-5 md:p-6 w-full text-left bg-white border border-neutral-200 rounded-lg cursor-pointer hover:border-neutral-300 transition-all duration-200 select-none list-none [&amp;::-webkit-details-marker]:hidden">
<span className="text-lg font-medium text-neutral-700 group-hover:text-neutral-900 group-open:text-neutral-900 transition-colors">
              What happens if the system makes a mistake?
            </span>
<div className="relative flex items-center justify-center w-5 h-5 shrink-0 text-neutral-400 group-hover:text-neutral-600 transition-colors">
<iconify-icon className="absolute transition-all duration-200 ease-out opacity-100 rotate-0 group-open:opacity-0 group-open:rotate-90" icon="lucide:plus" strokeWidth="2" width="20"></iconify-icon>
<iconify-icon className="absolute transition-all duration-200 ease-out opacity-0 -rotate-90 group-open:opacity-100 group-open:rotate-0" icon="lucide:minus" strokeWidth="2" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-white border-x border-b border-neutral-200 rounded-b-lg -mt-2 text-neutral-600 font-light leading-relaxed">
            We use a "human-in-the-loop" model for confidence scoring. If the
            system's confidence on a document or task drops below 99%, it
            automatically flags the item for manual review by an operator,
            ensuring errors don't slip through to your downstream systems.
          </div>
</details>

<details className="group">
<summary className="flex items-center justify-between gap-4 p-5 md:p-6 w-full text-left bg-white border border-neutral-200 rounded-lg cursor-pointer hover:border-neutral-300 transition-all duration-200 select-none list-none [&amp;::-webkit-details-marker]:hidden">
<span className="text-lg font-medium text-neutral-700 group-hover:text-neutral-900 group-open:text-neutral-900 transition-colors">
              Is there a minimum volume requirement?
            </span>
<div className="relative flex items-center justify-center w-5 h-5 shrink-0 text-neutral-400 group-hover:text-neutral-600 transition-colors">
<iconify-icon className="absolute transition-all duration-200 ease-out opacity-100 rotate-0 group-open:opacity-0 group-open:rotate-90" icon="lucide:plus" strokeWidth="2" width="20"></iconify-icon>
<iconify-icon className="absolute transition-all duration-200 ease-out opacity-0 -rotate-90 group-open:opacity-100 group-open:rotate-0" icon="lucide:minus" strokeWidth="2" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-white border-x border-b border-neutral-200 rounded-b-lg -mt-2 text-neutral-600 font-light leading-relaxed">
            We typically partner with brokerages, 3PLs, and carriers moving at
            least 500 loads per month. This is the inflection point where
            manual operational friction begins to significantly impact
            margins, staff retention, and scalability.
          </div>
</details>

<details className="group">
<summary className="flex items-center justify-between gap-4 p-5 md:p-6 w-full text-left bg-white border border-neutral-200 rounded-lg cursor-pointer hover:border-neutral-300 transition-all duration-200 select-none list-none [&amp;::-webkit-details-marker]:hidden">
<span className="text-lg font-medium text-neutral-700 group-hover:text-neutral-900 group-open:text-neutral-900 transition-colors">
              Can you handle custom carrier portals?
            </span>
<div className="relative flex items-center justify-center w-5 h-5 shrink-0 text-neutral-400 group-hover:text-neutral-600 transition-colors">
<iconify-icon className="absolute transition-all duration-200 ease-out opacity-100 rotate-0 group-open:opacity-0 group-open:rotate-90" icon="lucide:plus" strokeWidth="2" width="20"></iconify-icon>
<iconify-icon className="absolute transition-all duration-200 ease-out opacity-0 -rotate-90 group-open:opacity-100 group-open:rotate-0" icon="lucide:minus" strokeWidth="2" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-white border-x border-b border-neutral-200 rounded-b-lg -mt-2 text-neutral-600 font-light leading-relaxed">
            Yes. We build custom scrapers and API connectors for proprietary
            carrier portals, even those without public documentation. If a
            human coordinator can log in and retrieve the data, our system can
            automate it reliably.
          </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#080808] border-t border-white/10 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<a className="text-white font-medium tracking-tight text-lg" href="#">
            FreightPoint
          </a>
<p className="text-neutral-500 text-sm mt-2">
            Operational workflow automation for logistics.
          </p>
</div>
<div className="flex items-center gap-8 text-sm text-neutral-400">
<a className="hover:text-white transition-colors" href="#problem">The Gap</a>
<a className="hover:text-white transition-colors" href="#workflows">Workflows</a>
<a className="hover:text-white transition-colors" href="#how-it-works">Method</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-xs">
          © 2024 FreightPoint. All rights reserved.
        </p>
<div className="flex items-center gap-6 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
