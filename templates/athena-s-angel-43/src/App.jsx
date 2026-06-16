import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      function switchView(viewName) {
          // Hide all sections
          const sections = document.querySelectorAll('.view-section');
          sections.forEach(section => {
              section.classList.remove('active');
          });

          // Show target section
          const target = document.getElementById(`view-${viewName}`);
          if (target) {
              target.classList.add('active');
          }

          // Scroll to top
          window.scrollTo(0, 0);

          // Re-initialize icons just in case
          setTimeout(() => lucide.createIcons(), 100);
      }

      function toggleMenu() {
          const menu = document.getElementById('mobile-menu');
          if (menu) {
              menu.classList.toggle('hidden');
          }
      }

      // Handle browser back button
      window.onpopstate = function(event) {
           switchView('home');
      };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/90 backdrop-blur-md transition-colors duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group cursor-pointer" href="#" onclick="switchView('home')">
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
<span className="font-bold text-lg">A</span>
</div>
<span className="font-semibold text-lg tracking-tight text-white" id="nav-brand">
            Athena's Angel
          </span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#" onclick="switchView('home')">
            Home
          </a>
<a className="hover:text-white transition-colors" href="#focus" onclick="switchView('home')">
            Focus
          </a>
<a className="hover:text-white transition-colors" href="#events" onclick="switchView('home')">
            Events
          </a>
<a className="hover:text-white transition-colors" href="#" onclick="switchView('faq'); return false;">
            FAQ
          </a>
<a className="hover:text-white transition-colors" href="contact.html">
            Contact
          </a>
<a className="bg-white text-slate-950 px-4 py-2 rounded-md hover:bg-slate-200 transition-colors font-semibold" href="https://airtable.com/appGzUDGpQsjiB0QK/shrI8IQKBCSZdKSeI" target="_blank">
            Submit Pitch
          </a>
</div>

<button className="md:hidden text-white" onclick="toggleMenu()">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
<div className="hidden md:hidden absolute top-16 left-0 w-full bg-[#020617] border-b border-white/5 p-6 space-y-4 shadow-xl" id="mobile-menu">
<a className="block text-slate-400 hover:text-white font-medium" href="#" onclick="switchView('home'); toggleMenu(); return false;">
          Home
        </a>
<a className="block text-slate-400 hover:text-white font-medium" href="#focus" onclick="switchView('home'); toggleMenu();">
          Focus
        </a>
<a className="block text-slate-400 hover:text-white font-medium" href="#events" onclick="switchView('home'); toggleMenu();">
          Events
        </a>
<a className="block text-slate-400 hover:text-white font-medium" href="#" onclick="switchView('faq'); toggleMenu(); return false;">
          FAQ
        </a>
<a className="block text-slate-400 hover:text-white font-medium" href="contact.html">
          Contact
        </a>
<a className="block bg-white text-slate-950 px-4 py-2 rounded-md hover:bg-slate-200 transition-colors font-semibold text-center mt-4" href="https://airtable.com/appGzUDGpQsjiB0QK/shrI8IQKBCSZdKSeI" target="_blank">
          Submit Pitch
        </a>
</div>
</nav>

<main className="view-section active" id="view-home">

<section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 overflow-hidden aurora-bg" id="home">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-200 mb-4 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
            Backing European Innovation
          </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1] drop-shadow-sm">
            Global Community of
            <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-purple-200">
              Angel Investors
            </span>
</h1>
<p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Early traction investment from pre-seed to Series A (and beyond).
            <br className="hidden md:block"/>
            We connect top-tier angels with early traction startups.
          </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
<a className="inline-flex items-center justify-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-lg text-sm font-semibold hover:bg-blue-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300" href="mailto:join@athenasangel.com">
              Join as Member
              <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-lg text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm" href="https://airtable.com/appGzUDGpQsjiB0QK/shrI8IQKBCSZdKSeI" target="_blank">
              Submit Pitch
            </a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</section>

<section className="py-12 border-b border-white/5 bg-[#020617] relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="text-center md:text-left space-y-2 group">
<p className="text-4xl md:text-5xl font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                250+
              </p>
<p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Companies Screened
              </p>
</div>
<div className="text-center md:text-left space-y-2 group">
<p className="text-4xl md:text-5xl font-semibold tracking-tight text-white group-hover:text-purple-400 transition-colors duration-300">
                50+
              </p>
<p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Angel Investors
              </p>
</div>
<div className="text-center md:text-left space-y-2 group">
<p className="text-4xl md:text-5xl font-semibold tracking-tight text-white group-hover:text-pink-400 transition-colors duration-300">
                30+
              </p>
<p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Invested
              </p>
</div>
<div className="text-center md:text-left space-y-2 group">
<p className="text-4xl md:text-5xl font-semibold tracking-tight text-white group-hover:text-indigo-400 transition-colors duration-300">
                10+
              </p>
<p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Countries
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="focus">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">
                Our Focus
              </h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Investing in B2B Software
              </h3>
<p className="mt-4 text-slate-600 text-lg">
                We target strong deal flow in ERP, Payroll, Legal, Compliance,
                Tax, Accounting, Automation &amp; Engineering.
              </p>
</div>
<a className="group flex items-center gap-2 text-sm font-semibold text-slate-900 border-b-2 border-slate-200 pb-1 hover:border-black transition-all self-start md:self-end" href="https://airtable.com/appGzUDGpQsjiB0QK/shrI8IQKBCSZdKSeI" target="_blank">
              Submit your pitch deck
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="layers"></i>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-4">
                Main End Markets
              </h4>
<ul className="space-y-3 text-slate-600 text-sm">
<li className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-blue-500" data-lucide="check-circle-2"></i>
                  Healthcare
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-blue-500" data-lucide="check-circle-2"></i>
                  Public Sector
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-blue-500" data-lucide="check-circle-2"></i>
                  Financial Services
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-blue-500" data-lucide="check-circle-2"></i>
                  Education
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-blue-500" data-lucide="check-circle-2"></i>
                  Manufacturing
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-blue-500" data-lucide="check-circle-2"></i>
                  Retail &amp; eCommerce
                </li>
</ul>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-purple-500/5 hover:border-purple-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="users-2"></i>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-4">
                Our Approach
              </h4>
<div className="space-y-6">
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Co-Investment
                  </p>
<p className="text-slate-700">
                    Co-invest alongside top-tier founders, operators and
                    Investors.
                  </p>
</div>
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Stage
                  </p>
<p className="text-slate-700">
                    Early traction from
                    <span className="font-semibold text-purple-700">
                      Pre-seed to Series A
                    </span>
                    and beyond.
                  </p>
</div>
</div>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors relative z-10">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="banknote"></i>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-4 relative z-10">
                Ticket Size
              </h4>
<div className="space-y-4 relative z-10">
<div className="flex justify-between items-end border-b border-slate-100 pb-2">
<span className="text-slate-600 text-sm">Individual Cheque</span>
<span className="font-semibold text-slate-900">
                    €50k+
                    <sup className="text-[0.6em]">1</sup>
</span>
</div>
<div className="flex justify-between items-end border-b border-slate-100 pb-2">
<span className="text-slate-600 text-sm">Syndicate Capacity</span>
<span className="font-semibold text-slate-900">
                    Up to €5m
                    <sup className="text-[0.6em]">2</sup>
</span>
</div>
<p className="text-xs text-slate-400 pt-2 leading-relaxed">
                  Streamlined execution through one syndicate or direct cheques.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center">
<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Smart Capital from Founders &amp; Operators at
          </h3>
</div>
<div className="slider relative">

<div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
<div className="slide-track">

<div className="slide">
<span className="text-2xl font-bold text-slate-300">Carlyle</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">McKinsey</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">
                Goldman Sachs
              </span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">Google</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">Amazon</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">Netflix</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">Uber</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">Accenture</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">BCG</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">Bain</span>
</div>

<div className="slide">
<span className="text-2xl font-bold text-slate-300">Carlyle</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">McKinsey</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">
                Goldman Sachs
              </span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">Google</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">Amazon</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">Netflix</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">Uber</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">Accenture</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">BCG</span>
</div>
<div className="slide">
<span className="text-2xl font-bold text-slate-300">Bain</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 relative" id="events">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Networking &amp; Events
            </h2>
<p className="mt-4 text-slate-500">
              Connect with the community at our quarterly dinners and meetups.
            </p>
</div>
<div className="grid md:grid-cols-2 gap-12">

<div className="space-y-6">
<h3 className="flex items-center gap-2 font-semibold text-slate-900 pb-4 border-b border-slate-200">
<i className="w-5 h-5 stroke-[1.5] text-blue-600" data-lucide="calendar-clock"></i>
                Upcoming Events
              </h3>

<div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-default">
<div className="flex justify-between items-start mb-4">
<span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Next Up
                  </span>
<span className="text-slate-400 text-sm font-medium">Nov 14</span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">
                  Health Tech Dinner
                </h4>
<div className="flex items-center gap-2 text-slate-500 text-sm">
<i className="w-4 h-4 stroke-[1.5] text-slate-400" data-lucide="map-pin"></i>
                  London, UK
                </div>
</div>

<div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-default">
<div className="flex justify-between items-start mb-4">
<span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide group-hover:bg-slate-800 group-hover:text-white transition-colors">
                    Q4 Meetup
                  </span>
<span className="text-slate-400 text-sm font-medium">Dec 02</span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">
                  SaaS Founders &amp; Angels
                </h4>
<div className="flex items-center gap-2 text-slate-500 text-sm">
<i className="w-4 h-4 stroke-[1.5] text-slate-400" data-lucide="map-pin"></i>
                  Delft, The Netherlands
                </div>
</div>
</div>

<div className="space-y-6">
<h3 className="flex items-center gap-2 font-semibold text-slate-900 pb-4 border-b border-slate-200 opacity-60">
<i className="w-5 h-5 stroke-[1.5] text-slate-500" data-lucide="history"></i>
                Past Events
              </h3>
<div className="glass-card p-6 rounded-xl border border-slate-200 opacity-60 hover:opacity-100 transition-all hover:bg-white">
<h4 className="text-base font-semibold text-slate-800 mb-1">
                  Fintech Innovation Summit
                </h4>
<p className="text-sm text-slate-500">London, UK • Oct 2023</p>
</div>
<div className="glass-card p-6 rounded-xl border border-slate-200 opacity-60 hover:opacity-100 transition-all hover:bg-white">
<h4 className="text-base font-semibold text-slate-800 mb-1">
                  Angel Network Launch
                </h4>
<p className="text-sm text-slate-500">Berlin, Germany • Aug 2023</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#020617] text-white relative overflow-hidden">

<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl font-semibold tracking-tight mb-6">
            Have questions?
          </h2>
<p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Learn more about our investment process, our community of operators,
            and how we help founders succeed.
          </p>
<button className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors" onclick="switchView('faq')">
            Read FAQ
            <i className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</section>
</main>

<main className="view-section" id="view-faq">
<section className="min-h-screen bg-[#020617] text-white pt-32 pb-24 px-6 relative">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10">

<button className="text-sm text-slate-400 hover:text-white mb-16 flex items-center gap-2 transition-colors group" onclick="switchView('home')">
<i className="w-4 h-4 stroke-[1.5] group-hover:-translate-x-1 transition-transform" data-lucide="arrow-left"></i>
            Back to Home
          </button>

<div className="text-center mb-16 space-y-8">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white">
              Frequently
              <br/>
<span className="text-slate-500">asked questions</span>
</h1>

<div className="flex flex-wrap justify-center gap-2 bg-white/5 p-1 rounded-xl w-fit mx-auto backdrop-blur-sm">
<button className="bg-white/10 text-white shadow-sm border border-white/10 px-6 py-2 rounded-lg text-sm font-medium transition-all">
                For investments
              </button>
<button className="text-slate-400 px-6 py-2 rounded-lg text-sm font-medium hover:text-white transition-colors">
                For members
              </button>
</div>
</div>

<div className="border border-white/10 rounded-3xl bg-white/[0.02] backdrop-blur-md overflow-hidden">

<details className="group border-b border-white/10" open="">
<summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer select-none hover:bg-white/5 transition-colors">
<span className="text-xl md:text-2xl font-medium tracking-tight text-white pr-8">
                  What is Athena's Angel?
                </span>
<div className="flex-shrink-0 text-white/50 group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5] icon-minus" data-lucide="minus"></i>
<i className="w-6 h-6 stroke-[1.5] icon-plus" data-lucide="plus"></i>
</div>
</summary>
<div className="px-6 md:px-8 pb-8 pt-2">
<div className="text-slate-400 text-base md:text-lg leading-relaxed space-y-6">
<p>
                    1. Athena's Angel is a curated community of 150+ of Europe’s
                    leading tech entrepreneurs and operators who angel invest
                    and help companies together. We’re responsible for building
                    some of the biggest startups like Wise, Klarna, Beamery,
                    Onfido, Citymapper, Huma, Monzo and Deliveroo. There are few
                    mistakes we haven't made, lessons we haven't learned and
                    people we don't know!
                  </p>
<p>
                    2. As founders ourselves, we know how painful it is to
                    fundraise. We built Athena's Angel to help the best founders
                    get investment quickly and easily from the best operators in
                    the ecosystem - without having to pitch to them, and get
                    investment (or not) from each separately. We aim to make
                    commitments to your company from our whole network as
                    quickly and simply as a single angel working solo. We don’t
                    set terms, or take board seats.
                  </p>
<p>
                    3. Our aim is to be the maximum impact investors on your cap
                    table per $/£/€ received (our usual cheque size is
                    ~£50-150k, so we don’t take lots of room). We know the best
                    founders want thoughtful, experienced people backing them -
                    those who know what it’s like to build standout companies -
                    but also want a quick, easy fundraising process and a clean
                    cap table (we invest as a single entity).
                  </p>
</div>
</div>
</details>

<details className="group border-b border-white/10">
<summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer select-none hover:bg-white/5 transition-colors">
<span className="text-xl md:text-2xl font-medium tracking-tight text-white pr-8">
                  Why does Europe need Athena's Angel?
                </span>
<div className="flex-shrink-0 text-white/50 group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5] icon-minus" data-lucide="minus"></i>
<i className="w-6 h-6 stroke-[1.5] icon-plus" data-lucide="plus"></i>
</div>
</summary>
<div className="px-6 md:px-8 pb-8 pt-2 text-slate-400 text-base md:text-lg leading-relaxed space-y-4">
<p>
                  Unlike Silicon Valley, the pool of active angel investors in
                  Europe who have real, first-hand experience building startups
                  is small. The lack of maturity amongst private investors and
                  their unwillingness to take early risk has been a significant
                  barrier to European growth.
                </p>
<p>
                  This is a problem because early stage founders are forced to
                  fill cap tables with investors who are useless at best and
                  destructive at worst. Athena's Angel aims to change that, by
                  putting the best operator-angels into the best companies.
                </p>
</div>
</details>

<details className="group border-b border-white/10">
<summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer select-none hover:bg-white/5 transition-colors">
<span className="text-xl md:text-2xl font-medium tracking-tight text-white pr-8">
                  What companies does Athena's Angel back?
                </span>
<div className="flex-shrink-0 text-white/50 group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5] icon-minus" data-lucide="minus"></i>
<i className="w-6 h-6 stroke-[1.5] icon-plus" data-lucide="plus"></i>
</div>
</summary>
<div className="px-6 md:px-8 pb-8 pt-2 text-slate-400 text-base md:text-lg leading-relaxed space-y-4">
<p>
                  We back founders who are using technology to tackle a big,
                  growing market with potential for significant scale (have a
                  chance at a 100x outcome) and are raising pre-seed or seed
                  rounds (we don’t look at Series A+).
                </p>
<p>
                  We look for relentlessly resourceful founders operating in any
                  sector or geography. The primary thing we look for is founders
                  who have demonstrated previously that they are exceptional.
                </p>
</div>
</details>

<details className="group border-b border-white/10">
<summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer select-none hover:bg-white/5 transition-colors">
<span className="text-xl md:text-2xl font-medium tracking-tight text-white pr-8">
                  How do I send an opportunity?
                </span>
<div className="flex-shrink-0 text-white/50 group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5] icon-minus" data-lucide="minus"></i>
<i className="w-6 h-6 stroke-[1.5] icon-plus" data-lucide="plus"></i>
</div>
</summary>
<div className="px-6 md:px-8 pb-8 pt-2 text-slate-400 text-base md:text-lg leading-relaxed space-y-4">
<p>
                  If it’s your company, please use the "Submit Pitch" button on
                  the home page to tell us a bit more about what you’re working
                  on and someone from our team will reach out.
                </p>
<p>
                  If you happen to know any of our members, it’s really useful
                  to let us know. If members can recommend you, it’s much easier
                  for us to make a case to proceed.
                </p>
</div>
</details>

<details className="group border-b border-white/10">
<summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer select-none hover:bg-white/5 transition-colors">
<span className="text-xl md:text-2xl font-medium tracking-tight text-white pr-8">
                  How does the investment process work?
                </span>
<div className="flex-shrink-0 text-white/50 group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5] icon-minus" data-lucide="minus"></i>
<i className="w-6 h-6 stroke-[1.5] icon-plus" data-lucide="plus"></i>
</div>
</summary>
<div className="px-6 md:px-8 pb-8 pt-2 text-slate-400 text-base md:text-lg leading-relaxed space-y-4">
<ol className="list-decimal pl-5 space-y-3">
<li>
                    We normally ‘run’ 2 companies a week between a Thursday and
                    Monday evening.
                  </li>
<li>
                    Each company usually has someone from the team or community
                    who champions the opportunity.
                  </li>
<li>
                    Once we’ve decided to proceed, we will send you a short form
                    to collect key details.
                  </li>
<li>
                    We use this to prepare a ‘memo’ and ask founders to do a
                    5-10 min video (we like to invest in people, not in decks!).
                  </li>
<li>
                    We share the opportunity with our community on a Thursday
                    and give our members till Monday to review.
                  </li>
<li>
                    Each member has the option to invest (a minimum of £1k each,
                    with no max). We usually let you know by Tuesday morning
                    what’s happened.
                  </li>
</ol>
</div>
</details>

<details className="group">
<summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer select-none hover:bg-white/5 transition-colors">
<span className="text-xl md:text-2xl font-medium tracking-tight text-white pr-8">
                  Why don’t you do a call with founders first?
                </span>
<div className="flex-shrink-0 text-white/50 group-hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5] icon-minus" data-lucide="minus"></i>
<i className="w-6 h-6 stroke-[1.5] icon-plus" data-lucide="plus"></i>
</div>
</summary>
<div className="px-6 md:px-8 pb-8 pt-2 text-slate-400 text-base md:text-lg leading-relaxed space-y-4">
<p>
                  Honestly, we dearly love to chat to amazing entrepreneurs…
                  but, we see ~50 new opportunities a week. If we did a call
                  with everyone we’d not have time to run Athena's Angel, or
                  help any of the companies we have invested in. It would also
                  probably waste your time too, if it’s not the right moment.
                </p>
<p>
                  So, if we’re asking Qs in a direct way, it’s usually trying to
                  help save you time too! We try, our very best, to be as
                  transparent as possible and interact as and when relevant but
                  can’t always give feedback.
                </p>
</div>
</details>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white to-slate-200 text-black px-10 py-4 rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 transition-all" href="https://airtable.com/appGzUDGpQsjiB0QK/shrI8IQKBCSZdKSeI" target="_blank">
              Apply for Funding
              <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>
</main>

<main className="view-section" id="view-contact">
<section className="min-h-screen bg-white text-slate-900 pt-32 pb-24 px-6 relative font-sans">
<div className="max-w-7xl mx-auto h-full">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 h-full relative">

<div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-slate-200 -translate-x-1/2"></div>

<div className="flex flex-col pt-8 lg:pr-12">
<h1 className="text-6xl lg:text-8xl font-light tracking-tight text-slate-900 mb-12">
                Get in touch
              </h1>
<div className="space-y-8 text-lg text-slate-600 leading-relaxed font-light">
<p>
                  Interested in Athena's Angel? Whether you’re a partner, or
                  just curious — we’d love to hear from you. Drop us a message
                  and the right person from our team will be in touch
                </p>
<p>
                  If you are a founder looking to pitch your company, please do
                  it via this
                  <a className="text-slate-900 underline underline-offset-4 decoration-1 hover:decoration-2 transition-all font-normal" href="https://airtable.com/appGzUDGpQsjiB0QK/shrI8IQKBCSZdKSeI" target="_blank">
                    link
                  </a>
</p>
</div>
<div className="mt-20">
<h2 className="text-3xl font-normal tracking-tight text-slate-900 mb-8">
                  Contact details
                </h2>
<ul className="space-y-6 text-lg text-slate-900 font-normal">
<li className="flex items-center gap-4 group">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
<a className="hover:opacity-70 transition-opacity" href="mailto:hello@athenasangel.com">
                      hello@athenasangel.com
                    </a>
</li>
<li className="flex items-center gap-4 group">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
<a className="hover:opacity-70 transition-opacity" href="mailto:startups@athenasangel.com">
                      startups@athenasangel.com
                    </a>
</li>
</ul>
</div>
<div className="mt-20 pt-12 border-t border-slate-300 w-full">
<h2 className="text-3xl font-normal tracking-tight text-slate-900 mb-8">
                  Follow us
                </h2>
<div className="flex gap-6">
<a className="text-slate-900 hover:opacity-70 transition-opacity" href="#">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="linkedin"></i>
</a>
<a className="text-slate-900 hover:opacity-70 transition-opacity" href="#">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="twitter"></i>
</a>
</div>
</div>
</div>

<div className="flex flex-col justify-center lg:pl-12 lg:pt-32">
<form className="space-y-16 w-full">

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
<div className="group relative">
<input className="contact-input" placeholder="FULL NAME" type="text"/>
</div>
<div className="group relative">
<input className="contact-input" placeholder="ENTER YOUR EMAIL" type="email"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
<div className="group relative">
<input className="contact-input" placeholder="ENTER YOUR PHONE" type="tel"/>
</div>
<div className="group relative">
<input className="contact-input" placeholder="COMPANY" type="text"/>
</div>
</div>

<div className="group relative pt-4">
<textarea className="contact-input resize-none h-32" placeholder="TYPE YOUR MESSAGE HERE..." rows="1"></textarea>
</div>

<div className="pt-8">
<button className="text-xs font-bold uppercase tracking-widest border-b border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors" type="submit">
                    Send Message
                  </button>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#020617] text-white pt-20 pb-12 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-20">

<div className="flex-1 space-y-6">
<h3 className="text-2xl font-semibold tracking-tight">
              Stay ahead of the curve.
            </h3>
<p className="text-slate-400 max-w-sm">
              Sign up to learn about our news, events, and latest investment
              opportunities.
            </p>
<form className="flex gap-2 max-w-sm">
<input className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="email@address.com" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors" type="submit">
                Join
              </button>
</form>
</div>

<div className="flex-1 lg:text-right space-y-8">
<div>
<h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                Contact Us
              </h4>
<div className="space-y-2 text-lg font-light text-slate-300">
<p>London, United Kingdom</p>
<p>Delft, The Netherlands</p>
</div>
</div>
<div>
<a className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors border-b border-white/10 pb-1" href="mailto:info@athenasangel.com">
                info@athenasangel.com
              </a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
<p>© 2024 Athena's Angel. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
