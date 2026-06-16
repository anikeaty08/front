import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize lucide icons with stroke width 1.5
      document.addEventListener('DOMContentLoaded', function() {
        if (window.lucide && lucide.createIcons) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        document.getElementById('year').textContent = new Date().getFullYear();
      });

      // Heuristic SEO score calculation
      const form = document.getElementById('scoreForm');
      const scoreValueEl = document.getElementById('scoreValue');
      const scoreLabelEl = document.getElementById('scoreLabel');
      const scoreRingEl = document.getElementById('scoreRing');
      const breakdownEl = document.getElementById('scoreBreakdown');

      function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

      function evaluateScore(businessName, url) {
        let score = 50; // base
        const notes = [];

        // Normalize
        const name = (businessName || '').trim();
        let u = (url || '').trim();

        // URL sanity
        try {
          if (!/^https?:\/\//i.test(u)) u = 'https://' + u;
          const parsed = new URL(u);
          const host = parsed.hostname || '';
          const domain = host.replace(/^www\./i, '');

          // HTTPS
          if (parsed.protocol === 'https:') {
            score += 15;
            notes.push({ label: 'HTTPS detected', ok: true, hint: 'Secure and trusted' });
          } else {
            notes.push({ label: 'No HTTPS', ok: false, hint: 'Install SSL certificate' });
          }

          // Domain quality
          const len = domain.length;
          const hyphen = domain.includes('-');
          const tld = domain.split('.').pop() || '';
          const goodTLDs = ['com','net','org','io','co','ai'];
          if (len >= 6 && len <= 20) {
            score += 8;
            notes.push({ label: 'Domain length is healthy', ok: true, hint: domain });
          } else if (len > 0) {
            score += 2;
            notes.push({ label: 'Domain length could be improved', ok: false, hint: `${len} chars` });
          }
          if (hyphen) {
            score -= 6;
            notes.push({ label: 'Hyphen in domain', ok: false, hint: 'Consider removing if possible' });
          }
          if (goodTLDs.includes(tld.toLowerCase())) {
            score += 6;
            notes.push({ label: `Recognized TLD .${tld}`, ok: true, hint: 'Common and trusted' });
          } else {
            notes.push({ label: `TLD .${tld}`, ok: false, hint: 'Consider a more common TLD' });
          }

          // WWW
          if (/^www\./i.test(host)) {
            score += 2;
            notes.push({ label: 'www subdomain present', ok: true, hint: 'Consistent addressing' });
          }

        } catch (e) {
          notes.push({ label: 'Invalid URL format', ok: false, hint: 'Example: https://yourdomain.com' });
          score -= 10;
        }

        // Business name quality
        if (name.length >= 3) {
          score += 5;
          notes.push({ label: 'Readable brand name', ok: true, hint: name });
        } else {
          notes.push({ label: 'Brand name too short', ok: false, hint: 'Use a clear, memorable name' });
        }
        if (/\s/.test(name)) {
          score += 3;
          notes.push({ label: 'Contains word spacing', ok: true, hint: 'Improves readability' });
        }

        // Cap & bucket
        score = clamp(Math.round(score), 0, 100);
        let label = 'Needs work';
        if (score >= 75) label = 'Strong';
        else if (score >= 50) label = 'Promising';

        return { score, label, notes };
      }

      function ringColor(score) {
        if (score >= 75) return '#16a34a';   // green-600
        if (score >= 50) return '#f59e0b';   // amber-500
        return '#ef4444';                    // red-500
      }

      function updateUI(result) {
        const { score, label, notes } = result;
        // Update ring
        const color = ringColor(score);
        const deg = Math.round((score / 100) * 360);
        scoreRingEl.style.background = `conic-gradient(${color} ${deg}deg, #e2e8f0 ${deg}deg)`; // slate-200 remainder

        // Update numbers
        scoreValueEl.textContent = score;
        scoreLabelEl.textContent = label;

        // Update breakdown list
        breakdownEl.innerHTML = '';
        notes.slice(0, 6).forEach(n => {
          const li = document.createElement('li');
          li.className = 'flex items-start gap-3';
          li.innerHTML = `
            <div class="h-6 w-6 rounded-md ${n.ok ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'} grid place-content-center">
              <i data-lucide="${n.ok ? 'check' : 'circle-alert'}" class="w-3.5 h-3.5"></i>
            </div>
            <div>
              <div class="text-sm font-medium">${n.label}</div>
              <div class="text-xs text-slate-600">${n.hint || ''}</div>
            </div>
          `;
          breakdownEl.appendChild(li);
        });

        // Re-render icons in new content
        if (window.lucide && lucide.createIcons) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      }

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const businessName = document.getElementById('businessName').value;
        const websiteUrl = document.getElementById('websiteUrl').value;
        const result = evaluateScore(businessName, websiteUrl);
        updateUI(result);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-16">

<a className="inline-flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-content-center text-xs font-semibold tracking-tight">DM</div>
<span className="text-slate-900 text-lg font-semibold tracking-tight">Dominion Marketing</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#score">Business Score</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#work">Work</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#about">About</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 underline underline-offset-4" href="#contact">Contact</a>
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 hover:bg-slate-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition" href="#score">
<i className="w-4 h-4" data-lucide="sparkles"></i>
              Get a Growth Plan
            </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-10 items-center py-16 md:py-20">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="trending-up"></i>
              Helping small businesses grow online
            </div>
<h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Turn your online presence into a customer engine
            </h1>
<p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              Dominion Marketing helps local and emerging businesses show up, stand out, and scale. SEO, websites, content and ads that actually drive leads.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white text-sm font-semibold px-5 py-3 hover:bg-slate-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition" href="#score">
<i className="w-4.5 h-4.5" data-lucide="gauge"></i>
                Check my Business Score (Free)
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 text-slate-900 text-sm font-semibold px-5 py-3 hover:bg-slate-50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300 transition" href="#services">
<i className="w-4.5 h-4.5" data-lucide="layout-grid"></i>
                Explore Services
              </a>
</div>
<div className="mt-6 flex items-center gap-6">
<div className="flex -space-x-2">
<img alt="client" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="client" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="client" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-slate-600">Trusted by 150+ growing local businesses</p>
</div>
</div>
<div className="relative">
<div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
<img alt="Marketing dashboard" className="w-full h-[420px] object-cover" src="https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-lg shadow-sm p-4 w-[280px]">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-content-center">
<i className="w-4.5 h-4.5" data-lucide="search"></i>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Avg. SEO lift</div>
<div className="text-xs text-slate-600">+62% in 90 days</div>
</div>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-2/3 bg-slate-900"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="score">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
<div className="grid lg:grid-cols-2 gap-10">

<div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="gauge"></i>
              Free Business Score
            </div>
<h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">How strong is your online presence?</h2>
<p className="mt-3 text-slate-600">
              Get an instant SEO presence estimate. Enter your business name and website to see your score, plus quick wins to get more customers.
            </p>
<form className="mt-6 space-y-4" id="scoreForm">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="businessName">Business name</label>
<input className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition" id="businessName" placeholder="e.g., Dominion Coffee Co." required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="websiteUrl">Website URL</label>
<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center justify-center h-11 w-11 rounded-md border border-slate-300 text-slate-700">
<i className="w-4.5 h-4.5" data-lucide="globe"></i>
</div>
<input className="flex-1 rounded-md border border-slate-300 px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition" id="websiteUrl" placeholder="https://www.example.com" required="" type="url"/>
</div>
</div>
<div className="flex items-center justify-between">
<p className="text-xs text-slate-500">Instant estimate. No signup required.</p>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 hover:bg-slate-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition" type="submit">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                  Check my score
                </button>
</div>
</form>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Your score</h3>
<span className="text-xs text-slate-500">Estimated based on best practices</span>
</div>
<div className="mt-6 grid sm:grid-cols-2 gap-6 items-center">
<div className="flex items-center justify-center">
<div className="relative">
<div className="w-40 h-40 rounded-full" id="scoreRing" style={{background: 'conic-gradient(#e2e8f0 0deg, #e2e8f0 360deg)'}}></div>
<div className="absolute inset-2 bg-white rounded-full border border-slate-200 grid place-content-center">
<div className="text-center">
<div className="text-4xl font-semibold tracking-tight" id="scoreValue">—</div>
<div className="text-xs text-slate-600 mt-1" id="scoreLabel">Run a check</div>
</div>
</div>
</div>
</div>
<div>
<ul className="space-y-3" id="scoreBreakdown">
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-md bg-slate-100 text-slate-700 grid place-content-center">
<i className="w-3.5 h-3.5" data-lucide="shield-check"></i>
</div>
<div>
<div className="text-sm font-medium">HTTPS security</div>
<div className="text-xs text-slate-600">Secure sites rank and convert better</div>
</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-md bg-slate-100 text-slate-700 grid place-content-center">
<i className="w-3.5 h-3.5" data-lucide="search"></i>
</div>
<div>
<div className="text-sm font-medium">Domain quality</div>
<div className="text-xs text-slate-600">Length and structure impact trust</div>
</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-md bg-slate-100 text-slate-700 grid place-content-center">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i>
</div>
<div>
<div className="text-sm font-medium">Brand clarity</div>
<div className="text-xs text-slate-600">Clear names build recognition</div>
</div>
</li>
</ul>
<div className="mt-5 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 hover:bg-slate-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition" href="#contact">
<i className="w-4 h-4" data-lucide="rocket"></i>
                    Get a custom plan
                  </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 text-slate-900 text-sm font-semibold px-4 py-2.5 hover:bg-slate-50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300 transition" href="#pricing">
<i className="w-4 h-4" data-lucide="calendar"></i>
                    Book a call
                  </a>
</div>
</div>
</div>
<div className="mt-6 border-t border-slate-200 pt-4">
<p className="text-xs text-slate-500">Note: This instant score uses quick heuristics. Our full audit reviews content, speed, local listings, backlinks and more.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
<div className="md:flex items-end justify-between gap-8">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Services that grow revenue</h2>
<p className="mt-3 text-slate-600">A focused stack to help you get found, convert more visitors, and scale with clarity.</p>
</div>
<a className="mt-6 md:mt-0 inline-flex items-center gap-2 rounded-md border border-slate-300 text-slate-900 text-sm font-semibold px-4 py-2.5 hover:bg-slate-50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300 transition" href="#contact">
<i className="w-4 h-4" data-lucide="phone"></i>
            Talk to an expert
          </a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-content-center">
<i className="w-4.5 h-4.5" data-lucide="search"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Search Engine Optimization</h3>
<p className="mt-2 text-sm text-slate-600">Local + organic SEO to rank for the terms that drive calls, bookings and foot traffic.</p>
<ul className="mt-3 text-sm text-slate-600 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> On‑page + technical</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Local listings optimization</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Content &amp; backlinks</li>
</ul>
</div>

<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-content-center">
<i className="w-4.5 h-4.5" data-lucide="monitor-smartphone"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">High‑converting Websites</h3>
<p className="mt-2 text-sm text-slate-600">Fast, mobile‑ready sites that turn traffic into leads with persuasive design.</p>
<ul className="mt-3 text-sm text-slate-600 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> UX &amp; copywriting</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Speed &amp; core web vitals</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Lead capture &amp; CRM</li>
</ul>
</div>

<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-content-center">
<i className="w-4.5 h-4.5" data-lucide="megaphone"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Paid Ads &amp; Retargeting</h3>
<p className="mt-2 text-sm text-slate-600">Profit‑focused campaigns that reach the right customers at the right time.</p>
<ul className="mt-3 text-sm text-slate-600 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Search &amp; social</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Landing pages</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Conversion tracking</li>
</ul>
</div>

<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-content-center">
<i className="w-4.5 h-4.5" data-lucide="pen-tool"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Content that Converts</h3>
<p className="mt-2 text-sm text-slate-600">Blogs, guides and brand assets built to rank and nurture buyers.</p>
<ul className="mt-3 text-sm text-slate-600 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Keyword‑led topics</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> On‑brand visuals</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Lead magnets</li>
</ul>
</div>

<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-content-center">
<i className="w-4.5 h-4.5" data-lucide="map-pin"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Local SEO &amp; Listings</h3>
<p className="mt-2 text-sm text-slate-600">Dominate local search with accurate, optimized profiles and reviews.</p>
<ul className="mt-3 text-sm text-slate-600 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Profiles &amp; citations</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Reviews strategy</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Local content</li>
</ul>
</div>

<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-content-center">
<i className="w-4.5 h-4.5" data-lucide="bar-chart-3"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Analytics &amp; CRM</h3>
<p className="mt-2 text-sm text-slate-600">Measure what matters and capture every lead with clarity.</p>
<ul className="mt-3 text-sm text-slate-600 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Dashboards &amp; KPIs</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Call &amp; form tracking</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Automations</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="work">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
<div className="grid lg:grid-cols-3 gap-8 items-center">
<div className="lg:col-span-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Real results for real businesses</h2>
<p className="mt-3 text-slate-600">From local services to e‑commerce, we help you win the moments that matter.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4.5 h-4.5 text-slate-900" data-lucide="check-circle"></i> 3x more qualified leads</li>
<li className="flex items-center gap-2"><i className="w-4.5 h-4.5 text-slate-900" data-lucide="check-circle"></i> +62% organic traffic in 90 days</li>
<li className="flex items-center gap-2"><i className="w-4.5 h-4.5 text-slate-900" data-lucide="check-circle"></i> Lower cost per acquisition</li>
</ul>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
<div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
<img alt="Case study" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" />
<div className="p-5">
<div className="text-sm font-semibold tracking-tight">Home Services</div>
<p className="mt-1 text-sm text-slate-600">Local SEO + reviews engine drove a 2.7x increase in calls and bookings.</p>
</div>
</img></div>
<div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
<img alt="Case study" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" />
<div className="p-5">
<div className="text-sm font-semibold tracking-tight">Boutique Retail</div>
<p className="mt-1 text-sm text-slate-600">New site + search ads delivered +54% revenue in the first quarter.</p>
</div>
</img></div>
</div>
</div>
<div className="mt-10 border-t border-slate-200 pt-8">
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
<div className="h-10 rounded-md border border-slate-200 grid place-content-center text-slate-700 text-sm font-semibold tracking-tight">ACME</div>
<div className="h-10 rounded-md border border-slate-200 grid place-content-center text-slate-700 text-sm font-semibold tracking-tight">NOVA</div>
<div className="h-10 rounded-md border border-slate-200 grid place-content-center text-slate-700 text-sm font-semibold tracking-tight">POLAR</div>
<div className="h-10 rounded-md border border-slate-200 grid place-content-center text-slate-700 text-sm font-semibold tracking-tight">ATLAS</div>
<div className="h-10 rounded-md border border-slate-200 grid place-content-center text-slate-700 text-sm font-semibold tracking-tight">EMBER</div>
<div className="h-10 rounded-md border border-slate-200 grid place-content-center text-slate-700 text-sm font-semibold tracking-tight">GLOBE</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="pricing">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Plans built for growth</h2>
<p className="mt-3 text-slate-600">Start with a free score and strategy call. We’ll tailor a package to your goals and budget.</p>
<div className="mt-6 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 hover:bg-slate-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition" href="#contact">
<i className="w-4 h-4" data-lucide="handshake"></i>
                Free strategy call
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 text-slate-900 text-sm font-semibold px-4 py-2.5 hover:bg-slate-50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300 transition" href="#score">
<i className="w-4 h-4" data-lucide="gauge"></i>
                Check score again
              </a>
</div>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">

<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition">
<div className="text-sm font-semibold tracking-tight">Starter</div>
<div className="mt-2 text-3xl font-semibold tracking-tight">$1,200</div>
<div className="text-xs text-slate-500">one-time, then $250/mo</div>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Local SEO setup</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> 5‑page website</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Basic analytics</li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 w-full rounded-md border border-slate-300 text-slate-900 text-sm font-semibold px-4 py-2.5 hover:bg-slate-50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300 transition" href="#contact">Choose Starter</a>
</div>

<div className="rounded-xl border border-slate-900 p-6 shadow-sm">
<div className="inline-flex items-center gap-1.5 text-xs text-white bg-slate-900 px-2 py-1 rounded">Most popular</div>
<div className="mt-2 text-3xl font-semibold tracking-tight">$2,400</div>
<div className="text-xs text-slate-600">then $650/mo</div>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Full SEO + content</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Conversion‑ready site</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> Ads + retargeting</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-slate-900" data-lucide="check"></i> CRM + dashboards</li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 w-full rounded-md bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 hover:bg-slate-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition" href="#contact">Choose Growth</a>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Your partner in measurable growth</h2>
<p className="mt-3 text-slate-600">We combine technical SEO, conversion‑first design, and clear reporting so you know exactly what’s working.</p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="rounded-lg border border-slate-200 p-4 bg-white">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-content-center">
<i className="w-4.5 h-4.5" data-lucide="target"></i>
</div>
<div className="text-sm font-medium">Strategy first</div>
</div>
<p className="mt-2 text-sm text-slate-600">No fluff—everything ties back to pipeline.</p>
</div>
<div className="rounded-lg border border-slate-200 p-4 bg-white">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-content-center">
<i className="w-4.5 h-4.5" data-lucide="clock"></i>
</div>
<div className="text-sm font-medium">Fast execution</div>
</div>
<p className="mt-2 text-sm text-slate-600">Weekly iterations and clear milestones.</p>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm" id="contact">
<h3 className="text-xl font-semibold tracking-tight">Let’s grow your business</h3>
<p className="mt-2 text-slate-600 text-sm">Tell us your goals and we’ll send a quick plan.</p>
<form className="mt-4 grid gap-4">
<input className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition" placeholder="Your name" type="text"/>
<input className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition" placeholder="Email" type="email"/>
<input className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition" placeholder="Website (optional)" type="text"/>
<textarea className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-400 transition" placeholder="What are you trying to achieve?" rows="4"></textarea>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 hover:bg-slate-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition">
<i className="w-4 h-4" data-lucide="send"></i>
                Request my plan
              </button>
<p className="text-xs text-slate-500">Or email us: hello@dominion.marketing</p>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-content-center text-xs font-semibold tracking-tight">DM</div>
<div>
<div className="text-sm font-semibold tracking-tight">Dominion Marketing</div>
<div className="text-xs text-slate-600">Grow and scale with online revenue</div>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
<a className="text-slate-600 hover:text-slate-900" href="#services">Services</a>
<a className="text-slate-600 hover:text-slate-900" href="#work">Work</a>
<a className="text-slate-600 hover:text-slate-900" href="#pricing">Pricing</a>
<a className="text-slate-600 hover:text-slate-900" href="#contact">Contact</a>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-200 pt-6">
<p className="text-xs text-slate-500">© <span id="year"></span> Dominion Marketing. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
