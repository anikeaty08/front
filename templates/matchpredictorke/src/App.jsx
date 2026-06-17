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



      // Initialize icons with 1.5 stroke width
      function initIcons(){ lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); }
      initIcons();

      // Brand colors
      const brandGreen = '#1f7a2e';
      const brandRed = '#ff1f1f';
      const neutral = '#9ca3af';

      // Model mode state
      let modelMode = 'Pro'; // 'Basic' or 'Pro'

      // Matches dataset
      const matches = [
        {
          id: 1, league: 'KPL', week: 12, date: '2025-11-01', time: '16:00', home: 'Gor Mahia', away: 'AFC Leopards', live: false,
          features: {
            formHome: 0.68, formAway: 0.53,
            injuriesHome: 1, injuriesAway: 2,
            returnedHome: 1, returnedAway: 0,
            coachChangeHome: false, coachChangeAway: true,
            travelHome: 0.1, travelAway: 0.2,
            formationHome: '4-3-3', formationAway: '4-2-3-1'
          }
        },
        {
          id: 2, league: 'EPL', week: 11, date: '2025-11-02', time: '18:30', home: 'Arsenal', away: 'Chelsea', live: true,
          features: {
            formHome: 0.71, formAway: 0.59,
            injuriesHome: 2, injuriesAway: 3,
            returnedHome: 1, returnedAway: 1,
            coachChangeHome: false, coachChangeAway: false,
            travelHome: 0.05, travelAway: 0.15,
            formationHome: '4-3-3', formationAway
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
      

<svg className="hidden" xmlns="http://www.w3.org/2000/svg">

<symbol id="mpke-logo-mark" viewbox="0 0 200 200">
<title>Match Predictor KE Logo</title>
<desc>Green quarter circle top-left, red circle with two white dots top-right, black quarter circle bottom-left.</desc>

<path d="M0,100 A100,100 0 0 1 100,0 L100,100 Z" fill="#1f7a2e"></path>

<path d="M0,200 A100,100 0 0 0 100,100 L100,200 Z" fill="#0a0a0a"></path>

<circle cx="150" cy="50" fill="#ff1f1f" r="50"></circle>
<circle cx="135" cy="60" fill="#ffffff" r="22"></circle>
<circle cx="180" cy="35" fill="#ffffff" r="10"></circle>
</symbol>
</svg>

<div className="h-1 w-full bg-gradient-to-r from-[#0a0a0a] via-[#1f7a2e] to-[#ff1f1f]"></div>

<header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">

<svg aria-label="Match Predictor KE Logo" className="h-9 w-9 rounded-md ring-1 ring-neutral-200 bg-white p-0.5">
<use href="#mpke-logo-mark"></use>
</svg>
<div className="flex items-baseline gap-1">
<span className="text-[18px] sm:text-[20px] font-semibold tracking-tight" data-i18n="brand.nameA">Match Predictor</span>
<span className="text-[18px] sm:text-[20px] font-semibold tracking-tight text-[#ff1f1f]">KE</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-[14px]">
<a className="text-neutral-600 hover:text-neutral-900 transition" data-i18n="nav.predictions" href="#">Predictions</a>
<a className="text-neutral-600 hover:text-neutral-900 transition" data-i18n="nav.live" href="#">Live</a>
<a className="text-neutral-600 hover:text-neutral-900 transition" data-i18n="nav.leagues" href="#">Leagues</a>
<a className="text-neutral-600 hover:text-neutral-900 transition" data-i18n="nav.insights" href="#">Insights</a>
<a className="text-neutral-600 hover:text-neutral-900 transition" data-i18n="nav.about" href="#">About</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-[14px] text-neutral-700 hover:bg-neutral-50 transition">
<i className="h-4 w-4" data-lucide="bell"></i>
<span data-i18n="nav.alerts">Alerts</span>
</button>

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white h-9 px-3 text-[14px] text-neutral-700 hover:bg-neutral-50 transition" id="langButton">
<i className="h-4 w-4" data-lucide="globe"></i>
<span id="langLabel">English</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-64 max-h-72 overflow-auto rounded-md border border-neutral-200 bg-white shadow-lg" id="langMenu">
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="en">English</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="sw">Swahili</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="zu">Zulu</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="xh">Xhosa</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="so">Somali</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="ha">Hausa</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="yo">Yoruba</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="ig">Igbo</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="ar">Arabic</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="zh">Chinese</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="hi">Hindi</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="de">German</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="fr">French</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="it">Italian</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="es">Spanish</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-lang="pt">Portuguese</button>
</div>
</div>

<button aria-label="Code Review" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-[14px] text-neutral-700 hover:bg-neutral-50 transition" id="openReview">
<i className="h-4 w-4" data-lucide="code-2"></i>
              Review
            </button>
<button aria-label="Settings" className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white h-9 w-9 text-neutral-700 hover:bg-neutral-50 transition">
<i className="h-4 w-4" data-lucide="settings"></i>
</button>
<button aria-label="Menu" className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white h-9 w-9 text-neutral-700 hover:bg-neutral-50 transition">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-0 -z-10">
<img alt="Stadium" className="h-full w-full object-cover opacity-10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<h1 className="text-[34px] sm:text-[40px] font-semibold tracking-tight text-neutral-900" data-i18n="hero.title">
              Predict the winner with data-driven confidence
            </h1>
<p className="mt-3 text-[15px] text-neutral-600" data-i18n="hero.subtitle">
              Real-time probabilities, model insights, and odds comparison for football matches worldwide.
            </p>
<p className="mt-2 text-[13px] text-neutral-600" data-i18n="hero.coverage">
              Match predictions for EPL, Bundesliga, La Liga, Serie A, MLS, QSL, J1, NPFL, GPL, KPL &amp; PSL, Champions League, Europa League, and next year's World Cup.
            </p>

<div className="mt-6">
<div className="flex items-center gap-2">
<div className="relative flex-1">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="search"></i>
<input className="w-full rounded-md border border-neutral-200 bg-white pl-9 pr-10 py-2.5 text-[14px] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#1f7a2e]/30 focus:border-[#1f7a2e]" data-i18n-placeholder="search.placeholder" id="searchInput" placeholder="Search teams or leagues..."/>
<button aria-label="Voice" className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-md h-7 w-7 text-neutral-600 hover:bg-neutral-100">
<i className="h-4 w-4" data-lucide="mic"></i>
</button>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-[#1f7a2e] text-white px-4 py-2.5 text-[14px] hover:bg-[#186125] transition" id="predictBtn">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span data-i18n="hero.predict">Predict</span>
</button>
</div>
<p className="mt-2 text-[12px] text-neutral-500" data-i18n="hero.tip">Tip: Try “Gor Mahia vs AFC Leopards”</p>
</div>

<div className="mt-6 flex items-center gap-3 text-[12px] text-neutral-600">
<div className="h-1 w-16 bg-[#0a0a0a]"></div>
<div className="h-1 w-10 bg-[#1f7a2e]"></div>
<div className="h-1 w-10 bg-[#ff1f1f]"></div>
<span className="ml-2" data-i18n="hero.powered">Powered by live odds, unique models, and fresh team news</span>
</div>
</div>

<div className="bg-white/70 backdrop-blur rounded-xl border border-neutral-200 p-4 sm:p-6">
<div className="flex items-center justify-between">
<h2 className="text-[20px] font-semibold tracking-tight" data-i18n="top.title">Top Picks Today</h2>
<button className="inline-flex items-center gap-1 text-[13px] text-[#1f7a2e] hover:underline">
<span data-i18n="common.viewAll">View all</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-4" id="topPicks">

</div>
<div className="mt-5 grid sm:grid-cols-2 gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-[14px] text-neutral-700 hover:bg-neutral-50 transition" href="#">
<i className="h-4 w-4" data-lucide="trophy"></i>
                EPL
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-[14px] text-neutral-700 hover:bg-neutral-50 transition" href="#">
<i className="h-4 w-4" data-lucide="globe"></i>
                Champions League
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white p-3">
<div className="flex items-center gap-2">

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-[14px] text-neutral-700 hover:bg-neutral-50" id="leagueButton">
<i className="h-4 w-4" data-lucide="chevron-down"></i>
<span data-i18n="filters.allLeagues" id="leagueLabel">All Leagues</span>
</button>
<div className="hidden absolute mt-2 w-56 rounded-md border border-neutral-200 bg-white shadow-lg overflow-hidden z-10" id="leagueMenu">
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-i18n="filters.allLeagues" data-league="All">All Leagues</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="EPL">EPL</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="Bundesliga">Bundesliga</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="La Liga">La Liga</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="Serie A">Serie A</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="MLS">MLS</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="QSL">QSL</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="J1">J1</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="NPFL">NPFL</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="GPL">GPL</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="KPL">KPL</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="PSL">PSL</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="Champions League">Champions League</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="Europa League">Europa League</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="World Cup">World Cup</button>
</div>
</div>

<button aria-label="Live only" className="relative inline-flex items-center rounded-full bg-neutral-200 h-8 w-14 transition" id="liveToggle">
<span className="absolute left-1 h-6 w-6 rounded-full bg-white shadow ring-1 ring-black/5 transition" id="liveKnob"></span>
<span className="ml-16 text-[13px] text-neutral-600 sr-only">Live</span>
</button>
<span className="text-[14px] text-neutral-700" data-i18n="filters.liveOnly">Live only</span>

<div className="ml-3 inline-flex rounded-md border border-neutral-200 overflow-hidden">
<button className="px-3 py-2 text-[13px] text-neutral-700 bg-white hover:bg-neutral-50" data-i18n="mode.basic" id="modeBasic">Basic</button>
<button className="px-3 py-2 text-[13px] text-neutral-700 bg-white hover:bg-neutral-50" data-i18n="mode.pro" id="modePro">Pro</button>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-[14px] text-neutral-700 hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="filter"></i>
<span data-i18n="filters.filters">Filters</span>
</button>
<button className="inline-flex items-center gap-2 rounded-md bg-[#ff1f1f] text-white px-3 py-2 text-[14px] hover:bg-[#e01a1a]" id="refreshBtn">
<i className="h-4 w-4" data-lucide="refresh-ccw"></i>
<span data-i18n="common.refresh">Refresh</span>
</button>
</div>
</div>
</section>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="grid lg:grid-cols-3 gap-8">

<section className="lg:col-span-2">
<div className="flex items-center justify-between gap-4">
<div className="flex items-baseline gap-3">
<h2 className="text-[22px] font-semibold tracking-tight" data-i18n="matches.title">Upcoming Matches</h2>
<span className="inline-flex items-center gap-1 rounded-md border border-neutral-200 bg-white px-2 py-1 text-[12px] text-neutral-700" id="modeBadge">
<i className="h-4 w-4" data-lucide="cpu"></i>
<span id="modeBadgeText">Pro Model</span>
</span>
</div>

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-[14px] text-neutral-700 hover:bg-neutral-50" id="sectionLeagueButton">
<i className="h-4 w-4" data-lucide="trophy"></i>
<span id="sectionLeagueLabel">Select League</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-56 rounded-md border border-neutral-200 bg-white shadow-lg overflow-hidden z-10" id="sectionLeagueMenu">
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="EPL">EPL</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="Bundesliga">Bundesliga</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="La Liga">La Liga</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="Serie A">Serie A</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="MLS">MLS</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="QSL">QSL</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="J1">J1</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="NPFL">NPFL</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="GPL">GPL</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="KPL">KPL</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="PSL">PSL</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="Champions League">Champions League</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="Europa League">Europa League</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-neutral-50" data-league="World Cup">World Cup</button>
</div>
</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-4" id="matchesList">

</div>
</section>

<aside className="lg:col-span-1">
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-semibold tracking-tight" data-i18n="insights.title">Model Confidence</h3>
<span className="text-[13px] text-neutral-500" data-i18n="insights.selectMatch" id="selectedMatchLabel">Select a match</span>
</div>
<div className="mt-4">
<div className="grid grid-cols-3 gap-3 text-center">
<div className="rounded-lg bg-neutral-50 border border-neutral-200 p-3">
<p className="text-[12px] text-neutral-500" data-i18n="common.home">Home</p>
<p className="mt-1 text-[18px] font-semibold tracking-tight" id="homeProb">—</p>
</div>
<div className="rounded-lg bg-neutral-50 border border-neutral-200 p-3">
<p className="text-[12px] text-neutral-500" data-i18n="common.draw">Draw</p>
<p className="mt-1 text-[18px] font-semibold tracking-tight" id="drawProb">—</p>
</div>
<div className="rounded-lg bg-neutral-50 border border-neutral-200 p-3">
<p className="text-[12px] text-neutral-500" data-i18n="common.away">Away</p>
<p className="mt-1 text-[18px] font-semibold tracking-tight" id="awayProb">—</p>
</div>
</div>
<div className="mt-5">
<h4 className="text-[16px] font-medium tracking-tight" data-i18n="insights.probBreakdown">Probability Breakdown</h4>
<p className="text-[13px] text-neutral-500" data-i18n="insights.probSub">Home vs Draw vs Away</p>
<div className="mt-3">
<div className="relative h-2 w-full rounded-full bg-neutral-200 overflow-hidden">
<div className="absolute left-0 top-0 h-full bg-[#1f7a2e]" id="barHome" style={{width: '0%'}}></div>
<div className="absolute top-0 h-full bg-neutral-500" id="barDraw" style={{left: '0%', width: '0%'}}></div>
<div className="absolute right-0 top-0 h-full bg-[#ff1f1f]" id="barAway" style={{width: '0%'}}></div>
</div>
</div>
</div>
<div className="mt-6">
<h4 className="text-[16px] font-medium tracking-tight" data-i18n="insights.chart">Chart</h4>
<p className="text-[13px] text-neutral-500" data-i18n="insights.chartSub">Visual confidence snapshot</p>
<div className="mt-3">
<div className="rounded-xl border border-neutral-200 bg-white p-3">
<div>
<div>
<canvas height="200" id="probChart"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="mt-6">
<h4 className="text-[16px] font-medium tracking-tight" data-i18n="insights.odds">Odds Comparison</h4>
<p className="text-[13px] text-neutral-500" data-i18n="insights.oddsSub">Implied probabilities from books</p>
<div className="mt-3">
<div className="rounded-xl border border-neutral-200 bg-white p-3">
<div>
<div>
<canvas height="220" id="oddsChart"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between rounded-lg border border-neutral-200 p-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#1f7a2e]"></span>
<p className="text-[14px] text-neutral-700" data-i18n="insights.edge">Edge detected</p>
</div>
<a className="inline-flex items-center gap-1 text-[13px] text-[#1f7a2e] hover:underline" href="#">
<span data-i18n="common.details">Details</span>
<i className="h-4 w-4" data-lucide="external-link"></i>
</a>
</div>
<p className="mt-4 text-[12px] text-neutral-500" data-i18n="insights.modelNote">
                Using a unique ensemble: SVM + Gradient Boosting + Dixon–Coles + Bivariate Poisson. No third-party analysis content.
              </p>
</div>
</div>
</aside>
</div>
</main>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
<div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-6 sm:p-8">
<div className="grid md:grid-cols-2 gap-6 items-center">
<div>
<h3 className="text-[24px] font-semibold tracking-tight" data-i18n="cta.title">Stay ahead with instant alerts</h3>
<p className="mt-2 text-[15px] text-neutral-600" data-i18n="cta.subtitle">Get notifications when probabilities swing or when value emerges.</p>
</div>
<div className="flex items-center gap-3">
<input className="flex-1 rounded-md border border-neutral-200 bg-white px-3 py-2.5 text-[14px] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#ff1f1f]/30 focus:border-[#ff1f1f]" data-i18n-placeholder="cta.placeholder" placeholder="you@example.com"/>
<button className="inline-flex items-center gap-2 rounded-md bg-[#ff1f1f] text-white px-4 py-2.5 text-[14px] hover:bg-[#e01a1a] transition">
<i className="h-4 w-4" data-lucide="bell-ring"></i>
<span data-i18n="cta.subscribe">Subscribe</span>
</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
<div className="flex items-center gap-3">

<svg aria-label="Match Predictor KE Logo" className="h-8 w-8 rounded-md ring-1 ring-neutral-200 bg-white p-0.5">
<use href="#mpke-logo-mark"></use>
</svg>
<div>
<p className="text-[16px] font-semibold tracking-tight"><span data-i18n="brand.nameA">Match Predictor</span> <span className="text-[#ff1f1f]">KE</span></p>
<div className="mt-1 flex items-center gap-2">
<div className="h-1 w-10 bg-[#0a0a0a]"></div>
<div className="h-1 w-6 bg-[#1f7a2e]"></div>
<div className="h-1 w-6 bg-[#ff1f1f]"></div>
</div>
</div>
</div>
<div className="text-center sm:text-right">
<p className="text-[12px] text-neutral-500" data-i18n="footer.note">For informational purposes only. Please bet responsibly.</p>
<p className="mt-1 text-[12px] text-neutral-700">Copyright ©️ Gen I Studio Contacts: 📧 genistudio@proton.me | ☎️ 254 722 509 684</p>
</div>
</div>
</div>
</footer>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8" id="react-root"></div>

<div className="fixed inset-0 z-50 hidden" id="analysisModal">
<div className="absolute inset-0 bg-black/50" data-close="analysis"></div>
<div className="relative mx-auto max-w-2xl mt-16 rounded-xl border border-neutral-200 bg-white shadow-xl">
<div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
<div>
<h4 className="text-[18px] font-semibold tracking-tight" id="analysisTitle">Match Analysis</h4>
<p className="text-[13px] text-neutral-500" id="analysisSub">—</p>
</div>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" id="analysisClose">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="px-5 py-4 space-y-4">
<div className="grid sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
<p className="text-[12px] text-neutral-500">Predicted Score</p>
<p className="mt-1 text-[18px] font-semibold tracking-tight" id="analysisScore">—</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
<p className="text-[12px] text-neutral-500">xG (H–A)</p>
<p className="mt-1 text-[18px] font-semibold tracking-tight" id="analysisXG">—</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
<p className="text-[12px] text-neutral-500">Matchweek</p>
<p className="mt-1 text-[18px] font-semibold tracking-tight" id="analysisWeek">—</p>
</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white">
<div className="px-4 py-3 border-b border-neutral-200 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="layers"></i>
<p className="text-[14px] font-medium tracking-tight">Key Factors</p>
</div>
<div className="px-4 py-3 text-[14px] text-neutral-700 space-y-2" id="analysisFactors">

</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white">
<div className="px-4 py-3 border-b border-neutral-200 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="trending-up"></i>
<p className="text-[14px] font-medium tracking-tight">Tactical Notes</p>
</div>
<div className="px-4 py-3 text-[14px] text-neutral-700 space-y-2" id="analysisTactics"></div>
</div>
<div className="flex items-center justify-end gap-2 pt-2">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-[14px] text-neutral-700 hover:bg-neutral-50" id="analysisDismiss">
<i className="h-4 w-4" data-lucide="check"></i>
              Done
            </button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="reviewModal">
<div className="absolute inset-0 bg-black/50" data-close="review"></div>
<div className="relative mx-auto max-w-3xl mt-12 rounded-xl border border-neutral-200 bg-white shadow-xl">
<div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-neutral-700" data-lucide="code-2"></i>
<h4 className="text-[18px] font-semibold tracking-tight">Model Training Code Review</h4>
</div>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50" id="reviewClose">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="px-5 py-4">
<div className="max-h-[70vh] overflow-y-auto pr-1 space-y-6">
<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
<p className="text-[14px] text-neutral-700">
                Priority fixes and enhancements to maximize accuracy, calibration, and robustness for your match outcome model.
              </p>
</div>
<div>
<h5 className="text-[16px] font-medium tracking-tight">1) Critical correctness fixes</h5>
<ul className="mt-2 space-y-1.5 text-[14px] text-neutral-800">
<li className="flex gap-2"><i className="h-4 w-4 text-[#ff1f1f] mt-0.5" data-lucide="alert-triangle"></i> Use true sequences per team (e.g., last 10 matches) and feed [batch, seq_len, input_size].</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#ff1f1f] mt-0.5" data-lucide="alert-triangle"></i> Store hidden_size/num_layers as attributes; create h0/c0 from x to avoid device/dtype issues.</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#ff1f1f] mt-0.5" data-lucide="alert-triangle"></i> Use outputs.argmax(dim=1); avoid .data usage.</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#ff1f1f] mt-0.5" data-lucide="alert-triangle"></i> Preserve within-sequence temporal order.</li>
</ul>
</div>
<div>
<h5 className="text-[16px] font-medium tracking-tight">2) Data split and leakage control</h5>
<ul className="mt-2 space-y-1.5 text-[14px] text-neutral-800">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="shield"></i> Rolling time-based splits with gaps; fit scalers on train only.</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="shield"></i> Ensure odds are pre-match snapshots, not settlement data.</li>
</ul>
</div>
<div>
<h5 className="text-[16px] font-medium tracking-tight">3) Feature engineering</h5>
<ul className="mt-2 space-y-1.5 text-[14px] text-neutral-800">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="beaker"></i> Rolling team features (H/A split), opponent strength, rest, travel.</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="clock"></i> Dixon–Coles time decay as weights.</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="percent"></i> Odds-derived implied probabilities and line moves.</li>
</ul>
</div>
<div>
<h5 className="text-[16px] font-medium tracking-tight">4) Modeling and training</h5>
<ul className="mt-2 space-y-1.5 text-[14px] text-neutral-800">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="layers"></i> Sequence fusion (home/away) or dual encoders + fusion head.</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="balance"></i> Class weights and DC sample weighting.</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="activity"></i> Regularization, early stopping, LR scheduling, grad clipping.</li>
</ul>
</div>
<div>
<h5 className="text-[16px] font-medium tracking-tight">5) Evaluation and calibration</h5>
<ul className="mt-2 space-y-1.5 text-[14px] text-neutral-800">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="ruler"></i> Log loss, Brier, class-wise recall for draws.</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="thermometer"></i> Temperature scaling or isotonic calibration.</li>
</ul>
</div>
<div>
<h5 className="text-[16px] font-medium tracking-tight">6) Production</h5>
<ul className="mt-2 space-y-1.5 text-[14px] text-neutral-800">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="save"></i> Save artifacts and config; deterministic seeds.</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="refresh-cw"></i> Rolling refits and leakage checks.</li>
</ul>
</div>
</div>
<div className="flex items-center justify-end gap-2 mt-4">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-[14px] text-neutral-700 hover:bg-neutral-50" id="reviewDismiss">
<i className="h-4 w-4" data-lucide="check"></i>
              Done
            </button>
</div>
</div>
</div>
</div>




    </>
  );
}
