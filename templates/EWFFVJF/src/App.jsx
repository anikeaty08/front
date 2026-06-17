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
      
    lucide.createIcons();
    document.getElementById('year').textContent = new Date().getFullYear();

    // Chart.js for Growth of Total Capital Across Gameweeks
    const seasonCount = 3;
    const gameweeks = 20;
    const labels = [];
    for(let s=1; s<=seasonCount; s++) {
      for(let g=1; g<=gameweeks; g++) {
        labels.push(`S${s}-Gw${g}`);
      }
    }
    const data = [
      980,991.4,971.4,982.8,962.8,974.2,954.2,965.6,945.6,957,937,948.4,959.8,971.2,982.6,962.6,974,985.4,996.8,1008.2,
      1019.6,1031,1042.4,1053.8,1065.2,1076.6,1088,1099.4,1079.4,1059.4,1070.8,1082.2,1093.6,1105,1116.4,1096.4,1107.8,1119.2,1099.2,1110.6,
      1090.6,1102,1082,1093.4,1104.8,1116.2,1127.6,1107.6,1119,1130.4,1141.8,1153.2,1133.2,1144.6,1156,1167.4,1178.8,1190.2,1201.6,1213
    ];

    const ctx = document.getElementById('capitalGrowthChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Total Capital',
          data,
          borderColor: '#2563eb',
          backgroundColor: '#2563eb',
          fill: false,
          tension: 0.35,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: '#2563eb',
          pointBorderColor: '#fff',
          pointBorderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: '#fff',
            titleColor: '#2563eb',
            bodyColor: '#334155',
            borderColor: '#cbd5e1',
            borderWidth: 1,
            bodyFont: { family: 'Inter', size: 14 },
            titleFont: { family: 'Inter', size: 14, weight: '600' }
          }
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Gameweek',
              font: { family: 'Inter', size: 14, weight: '500' }
            },
            ticks: {
              autoSkip: false,
              maxRotation: 60,
              minRotation: 60,
              color: '#64748b',
              font: { family: 'Inter', size: 11 }
            },
            grid: {
              color: '#f1f5f9'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Total Capital',
              font: { family: 'Inter', size: 14, weight: '500' }
            },
            ticks: {
              color: '#64748b',
              font: { family: 'Inter', size: 13 }
            },
            grid: {
              color: '#f1f5f9'
            },
            beginAtZero: false
          }
        }
      }
    });

    // SVG check display for tickboxes
    document.querySelectorAll('input[type=radio][name=subscribe]').forEach(function(input){
      input.addEventListener('change', function(){
        document.querySelectorAll('input[type=radio][name=subscribe]').forEach(function(i){
          i.nextElementSibling.querySelector('svg').style.opacity = i.checked ? '1' : '0';
        });
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
      

<section className="relative flex flex-col flex-1 min-h-screen text-white" style={{fontFamily: '\'Space Grotesk\', sans-serif', background: 'linear-gradient(165deg,#042d17 0%,#05341e 40%,#114f29 100%)'}}>
<div className="flex justify-between items-start px-8 pt-8 md:px-16 md:pt-12">
<div>
<span className="text-sm md:text-base font-medium tracking-wider text-white/80 select-none">2025/2026</span>
</div>
<div className="absolute left-8 md:left-16 top-16 flex items-center z-10 select-none">
<span className="font-bold text-2xl md:text-3xl tracking-tight" style={{color: '#ffb800', fontFamily: '\'Space Grotesk\', sans-serif', letterSpacing: '-0.03em'}}>
          Simplifi
        </span>
<span className="font-bold text-2xl md:text-3xl tracking-tight ml-2" style={{color: '#ffd84a', fontFamily: '\'Space Grotesk\', sans-serif', letterSpacing: '-0.03em'}}>
          football
        </span>
</div>
</div>
<div className="flex flex-col items-start mt-24 sm:mt-28 md:mt-32 px-8 md:px-16 max-w-5xl w-full">
<span className="text-xs md:text-sm tracking-[0.22em] uppercase font-medium text-white/70 mb-2 ml-1" style={{letterSpacing: '0.22em'}}>
        WHITE PAPER
      </span>
<div className="w-20 h-1.5 bg-white/10 rounded-full mb-5"></div>
</div>
<div className="absolute left-4 sm:left-8 top-[11.2rem] sm:top-[13.3rem] z-10">
<svg fill="none" height="40" viewbox="0 0 32 32" width="40">
<g>
<line stroke="#FFB800" strokeLinecap="round" strokeWidth="3" x1="16" x2="16" y1="3" y2="29"></line>
<line stroke="#FFB800" strokeLinecap="round" strokeWidth="3" x1="3" x2="29" y1="16" y2="16"></line>
<line stroke="#FFB800" strokeLinecap="round" strokeWidth="3" x1="7.7" x2="24.3" y1="7.7" y2="24.3"></line>
<line stroke="#FFB800" strokeLinecap="round" strokeWidth="3" x1="24.3" x2="7.7" y1="7.7" y2="24.3"></line>
</g>
</svg>
</div>
<div className="flex flex-col items-start mt-2 px-8 md:px-16 max-w-5xl w-full">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] uppercase text-left" style={{letterSpacing: '-0.024em', fontFamily: '\'Space Grotesk\', sans-serif'}}>
        WHAT EVERY<br/>
        FOOTBALL INVESTOR<br/>
        NEEDS TO KNOW FOR S25/26
      </h1>
<div className="w-full max-w-2xl border-t border-white/20 my-7"></div>
<h2 className="text-base md:text-lg font-light tracking-normal text-white/80 max-w-2xl" style={{fontFamily: '\'Space Grotesk\', sans-serif', fontWeight: '400'}}>
        Successful investing isn’t about chasing every opportunity; it’s about controlling your emotions, managing risk, and being disciplined enough to stick to your strategy even when things get tough.
      </h2>
</div>
<div className="hidden sm:block absolute top-40 right-0 z-10 pr-8">
<div className="flex flex-col items-end space-y-2 select-none" style={{fontFamily: '\'Roboto Mono\', monospace', fontSize: '13px', lineHeight: '1.25', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.16)'}}>
<span>01001101 01100001 01110010</span>
<span>01101011 01100101 01110100</span>
<span>00110010 00110000 00110010</span>
<span>01000100 01100001 01110100</span>
<span>01100001 00110000 00110001</span>
<span>01001101 01101111 01100110</span>
<span>00110001 00110001 00111001</span>
<span>01000110 01101111 01101111</span>
<span>01110100 01100010 01100001</span>
<span>01101100 01101100 01000110</span>
<span>01101001 01101110 01110110</span>
<span>01100101 01110011 01110100</span>
</div>
</div>
<div className="flex-grow"></div>
<div className="w-full border-t border-white/15 my-10 md:my-16"></div>
<div className="absolute bottom-28 left-5 sm:left-14 z-10 select-none">
<div className="relative w-24 h-24 sm:w-28 sm:h-28">
<svg height="100%" viewbox="0 0 112 112" width="100%">
<circle cx="56" cy="56" fill="none" r="54" stroke="white" stroke-opacity="0.14" strokeWidth="2"></circle>
<circle cx="56" cy="56" fill="none" r="38" stroke="white" stroke-opacity="0.09" strokeWidth="1.3"></circle>
</svg>
<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<i className="w-9 h-9 text-green-300" data-lucide="droplet" style={{filter: 'blur(0.5px)'}}></i>
</span>
</div>
</div>
<div className="absolute bottom-32 right-8 sm:right-20 z-10 select-none">
<svg fill="none" height="28" viewbox="0 0 24 24" width="28">
<g>
<line stroke="#FFB800" strokeLinecap="round" strokeWidth="2" x1="12" x2="12" y1="2" y2="22"></line>
<line stroke="#FFB800" strokeLinecap="round" strokeWidth="2" x1="2" x2="22" y1="12" y2="12"></line>
<line stroke="#FFB800" strokeLinecap="round" strokeWidth="2" x1="5.6" x2="18.4" y1="5.6" y2="18.4"></line>
<line stroke="#FFB800" strokeLinecap="round" strokeWidth="2" x1="18.4" x2="5.6" y1="5.6" y2="18.4"></line>
</g>
</svg>
</div>
<footer className="w-full flex justify-between items-end pb-8 px-8 md:px-16 mt-auto">
<div className="text-xs md:text-sm tracking-widest" style={{fontFamily: '\'Roboto Mono\', monospace'}}>
        Prepared by D. Akin-Britto
      </div>
<div className="text-xs md:text-sm text-right tracking-widest" style={{fontFamily: '\'Roboto Mono\', monospace'}}>
        For Simplifi Football<br/>
        simplififootball.com
      </div>
</footer>
</section>

<div className="w-full flex flex-col items-center py-10">
<div className="w-1/2 border-t-2 border-dashed border-gray-300"></div>
</div>

<section className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 flex flex-col" style={{fontFamily: '\'Inter\', sans-serif'}}>
<main className="flex-grow">
<section className="px-6 sm:px-10 lg:px-24 pt-16 lg:pt-24">
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-tight fade-in" style={{animationDelay: '0.05s'}}>The real problem</h1>
<blockquote className="max-w-3xl mt-12 text-base lg:text-lg leading-relaxed border-l-4 border-emerald-400 pl-6 italic fade-in" style={{animationDelay: '0.35s'}}>
          Most people engaging the betting platforms to invest do not have the right tool for informed decision making  on football markets and the truly effective tools remain hidden from mainstream use due to lack of popularity.
        </blockquote>
<hr className="border-emerald-400 mt-10 mb-12 fade-in" style={{animationDelay: '0.45s'}}/>
<h2 className="text-2xl sm:text-3xl font-medium mb-8 fade-in" style={{animationDelay: '0.55s'}}>Overview</h2>
<div className="space-y-8 fade-in" style={{animationDelay: '0.65s'}}>
<p className="max-w-4xl text-lg lg:text-xl leading-[1.75]">
            Sports betting is shifting from pure entertainment, hunches and emotions into a disciplined data driven approach. While much of the attention has focused on big lucky wins, real football investors are now grappling with more strategic challenges: How do we architect systems that continuously retain capital? How do we control addictive behaviour when visiting betting platform to ensure responsible usage? How do we place long term bets that model investing in stocks? And perhaps most importantly, how do we compound our profit in this game of probabilities knowing losing is also guaranteed. After listening to top sport investors with decades of experience, we’ve come across four core areas that require careful attention: the law of probability and bankroll management, accumulators VS single picks for market movement, betting frequency, odds price movement from the betting platforms themselves. 
          </p>
</div>
</section>
</main>
<footer className="px-6 sm:px-10 lg:px-24 py-10 flex items-center justify-between text-xs tracking-widest uppercase text-emerald-400">
<span>simplififootball.com</span>
<span>2</span>
</footer>
</section>
<div className="w-full flex flex-col items-center py-10">
<div className="w-1/2 border-t-2 border-dashed border-gray-300"></div>
</div>

<section className="min-h-screen flex flex-col items-center text-gray-800 bg-white pt-10 pr-4 pb-20 pl-4" style={{fontFamily: '\'Inter\', sans-serif'}}>
<div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/twistcopy-CPActtgUfoQoOToZfH4Pt18Q" width="100%"></iframe></div>
<section className="w-full max-w-6xl flex flex-col md:flex-row gap-8 mb-10 items-start">
<div className="flex-1 min-w-0">
<header className="mb-6">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2 font-garamond">Coin Toss Probability: What Will You Do</h1>
<p className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed mb-6">
            Imagine this game: Heads doubles your money, but Tails takes everything you put on the line.<br/>
            Will you spread your capital to play many tosses, or risk it all on a single toss for the BIG WIN?
          </p>
</header>
<div className="mb-0">
<div className="bg-gray-50 rounded-xl border border-gray-200 px-8 py-7 flex flex-col items-start">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3 font-garamond">Experimental Prompt</h2>
<p className="text-base text-gray-800 mb-4 leading-relaxed">
<strong>Scenario:</strong> In a series of independent coin flips, <span className="text-green-700 font-semibold">heads</span> doubles your money, while <span className="text-red-700 font-semibold">tails</span> forfeits everything staked.
            </p>
<ol className="list-decimal list-inside text-gray-700 space-y-1 mb-4">
<li>Will you <strong>spread your capital</strong> across many tosses?</li>
<li>Or risk a <strong>single toss</strong> for a potential large gain?</li>
</ol>
<p className="text-sm text-gray-500 italic">
              The simulated strategies below model these two approaches.
            </p>
</div>
</div>
</div>
</section>
<section className="w-full max-w-3xl mx-auto mb-6 flex flex-row items-center justify-between">
<div className="flex flex-col items-center">
<div className="text-lg font-medium text-gray-700">Starting Capital</div>
<div className="text-2xl font-semibold text-gray-900">£1000</div>
</div>
<div className="w-24 h-px bg-gray-300"></div>
<div className="flex flex-col items-center">
<div className="text-lg font-medium text-gray-700">Total Trials</div>
<div className="text-2xl font-semibold text-gray-900">40</div>
</div>
</section>
<section className="max-w-2xl mx-auto mb-8 text-center">
<h2 className="text-xl font-semibold tracking-tight mb-2 font-garamond">Background</h2>
<p className="text-base text-gray-700 font-normal leading-relaxed">
        Each coin flip is independent—the coin never "remembers" its last result. 50/50 means that over many tosses, heads and tails even out. This is the Law of Large Numbers.
      </p>
</section>
<section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 mb-12">
<aside className="flex-[0_0_220px] w-full max-w-xs bg-gray-50 rounded-xl border border-gray-200 px-6 py-5 flex flex-col mb-0">
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2">Summary Statistics</h3>
<dl className="space-y-2">
<div className="flex items-center justify-between">
<dt className="text-gray-700">Heads</dt>
<dd className="text-xl font-semibold text-green-700">20</dd>
</div>
<div className="flex items-center justify-between">
<dt className="text-gray-700">Tails</dt>
<dd className="text-xl font-semibold text-red-700">20</dd>
</div>
<div className="flex items-center justify-between border-t border-gray-200 pt-3 mt-2">
<dt className="text-gray-700">Total Bankroll</dt>
<dd className="text-xl font-semibold text-gray-900">£1000</dd>
</div>
</dl>
<p className="text-xs text-gray-500 mt-3">
          Over time, the  approaches 50/50.
        </p>
</aside>
<article className="flex-1 bg-gray-50 rounded-xl border border-gray-200 px-8 py-7 flex flex-col">
<h2 className="text-lg font-semibold tracking-tight mb-3">Strategy 1: Spread your Capital</h2>
<div className="flex flex-wrap gap-1.5 mb-2" style={{maxWidth: '340px'}}>



</div>
<p className="text-xs text-gray-500 mt-2">
          Results may appear random initially...
        </p>
<div className="border-t border-gray-200 mt-6 pt-4">
<span className="text-sm text-gray-700 font-medium">The Law of Large Numbers: Patterns emerge only with enough trials.</span>
</div>
</article>
<article className="flex-1 bg-gray-50 rounded-xl border border-gray-200 px-8 py-7 flex flex-col items-center">
<h2 className="text-lg font-semibold tracking-tight mb-3">Strategy 2: All in for the BIG WIN</h2>
<div className="flex flex-row gap-4 w-full justify-center mb-4">
<div className="flex flex-col items-center">
<div className="rounded-full border-2 border-green-200 w-20 h-20 flex items-center justify-center bg-green-50 text-green-700 text-2xl font-bold">H</div>
<div className="text-xs text-green-700 font-medium mt-2">£1000→£2000</div>
</div>
<div className="flex flex-col items-center">
<div className="rounded-full border-2 border-green-200 w-20 h-20 flex items-center justify-center bg-green-50 text-green-700 text-2xl font-bold">H</div>
<div className="text-xs text-green-700 font-medium mt-2">£2000→£4000</div>
</div>
<div className="flex flex-col items-center">
<div className="rounded-full border-2 border-red-200 w-20 h-20 flex items-center justify-center bg-red-50 text-red-700 text-2xl font-bold">T</div>
<div className="text-xs text-red-700 font-medium mt-2">GAME OVER</div>
</div>
</div>
<span className="text-sm text-gray-700 font-medium">You either double or lose it all.</span>
</article>
</section>
<footer className="w-full max-w-2xl mx-auto mt-12 border-t border-gray-200 pt-6 text-xs text-gray-500">
<div></div>
</footer>
</section>
<div className="w-full flex flex-col items-center py-10">
<div className="w-1/2 border-t-2 border-dashed border-gray-300"></div>
</div>

<section className="min-h-screen flex flex-col items-center text-gray-800 bg-white pt-10 pr-4 pb-20 pl-4" style={{fontFamily: '\'Inter\', sans-serif'}}>
<section className="w-full max-w-6xl mb-10 flex flex-col items-center">
<header className="mb-6 w-full flex flex-col items-center">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2 text-center">Accumulators VS Single Picks for Market Movement</h1>
</header>
<div className="mb-0 w-full">
<div className="bg-gray-50 rounded-xl border border-gray-200 px-8 py-7 flex flex-col items-start">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3">Key Considerations</h2>
<p className="text-base text-gray-800 mb-4 leading-relaxed">
          Accumulators are powerful, but with that power comes great cost. Your win ratio must navigate volatile movements since one wrong pick means game over. The good news is you can make the final decision to spread your capital over each option rather than accumulate.<br/>
          There’s no universal “best” way but you must understand how probability affects your decision.
        </p>
<p className="text-sm text-gray-500 italic">
          The models below illustrate these approaches and their risk profiles.
        </p>
</div>
</div>
</section>
<section className="max-w-2xl mx-auto mb-8 text-center">
<h2 className="text-xl font-semibold tracking-tight mb-2">Probability in Practice</h2>
<p className="text-base text-gray-700 font-normal leading-relaxed">
      Choosing the right model for your betting can be the difference between capital retention and a blown account.
    </p>
</section>

<section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6 mb-12">

<aside className="w-full md:w-64 max-w-sm flex-shrink-0">
<div className="bg-white border-l-4 border-green-500 shadow-md rounded-md px-4 py-4 flex flex-col justify-center h-full">
<p className="text-sm text-gray-700 font-normal leading-relaxed">
          Cost of risk must be managed proactively. Before you make a trade you must have decided prior how much you are comfortable with risking per trade for all your trades.
        </p>
</div>
</aside>

<div className="flex-1 flex flex-col lg:flex-row gap-8 w-full">

<article className="flex-1 bg-gray-50 rounded-xl border border-gray-200 px-8 py-7 flex flex-col relative overflow-hidden min-w-0">
<h2 className="text-lg font-semibold tracking-tight mb-3">Accumulators: The High-Risk, High-Reward Play</h2>
<div className="mb-4 flex justify-center fade-in animate-slide-in-bottom" style={{animationDelay: '0.05s'}}>
<div className="w-full max-w-md shadow-lg rounded-lg overflow-hidden border border-gray-200 bg-white">
<header className="bg-white shadow flex items-center justify-between px-4 py-3">
<div className="flex items-baseline space-x-2">
<span className="text-base font-semibold">3 Selections</span>
<span className="text-xs text-sky-600">Treble</span>
</div>
<div className="flex items-center space-x-4">
<span className="text-xs text-gray-600">Balance <span className="font-medium text-gray-800">£371.76</span></span>
</div>
</header>
<section className="bg-white flex flex-wrap gap-2 px-4 py-2 border-b">
<span className="text-xs font-semibold tracking-wide bg-gray-100 text-gray-800 px-2 py-1 rounded">EP</span>
<span className="text-xs font-semibold tracking-wide bg-gray-100 text-gray-800 px-2 py-1 rounded">EARLY PAYOUT</span>
<span className="text-xs font-semibold tracking-wide bg-gray-100 text-gray-800 px-2 py-1 rounded">ACCA BOOST</span>
</section>
<main className="divide-y">
<div className="bg-white px-4 py-3 flex items-start space-x-4">
<div className="flex-1">
<p className="font-semibold text-green-600 text-sm">Aston Villa</p>
<p className="text-xs font-medium text-gray-800">Aston Villa v Newcastle</p>
</div>
<div className="flex flex-col items-end">
<p className="font-medium text-sm">2.35</p>
</div>
</div>
<div className="bg-white px-4 py-3 flex items-start space-x-4">
<div className="flex-1">
<p className="font-semibold text-green-600 text-sm">Brighton</p>
<p className="text-xs font-medium text-gray-800">Brighton v Fulham</p>
</div>
<div className="flex flex-col items-end">
<p className="font-medium text-sm">1.90</p>
</div>
</div>
<div className="bg-white px-4 py-3 flex items-start space-x-4">
<div className="flex-1">
<p className="font-semibold text-green-600 text-sm">Sunderland</p>
<p className="text-xs font-medium text-gray-800">Sunderland v West Ham</p>
</div>
<div className="flex flex-col items-end">
<p className="font-medium text-sm">3.20</p>
</div>
</div>
</main>
<section className="bg-white border-t">
<div className="flex items-center px-4 py-3">
<p className="font-semibold text-green-600 text-sm">Treble <span className="text-xs font-medium text-gray-500">+ 5% Boost</span></p>
<div className="ml-auto text-right">
<p className="font-medium text-base">14.28</p>
</div>
</div>
<div className="px-4 pb-3 text-xs text-right text-gray-600 flex items-center justify-end gap-2">
<span>To Return</span>
<span className="inline-block bg-green-100 text-green-800 font-semibold rounded-md px-3 py-1 border border-green-200 shadow-sm">
                  £4,485.72
                </span>
</div>
<div className="px-4 pb-3 text-xs text-right text-gray-600">
<p>Incl <span className="font-medium text-gray-800">£199.32</span> Boost</p>
</div>
</section>
</div>
</div>
<div className="text-sm text-gray-700 mb-3">
          Stack 3 games, and the potential payout looks insane.<br/>
          But with each pick at 70% win chance, your 3-leg accumulator has only a <span className="font-semibold text-blue-700">34%</span> chance of landing.<br/>
          Add more, and your chances plummet.
        </div>
<div className="border-t border-gray-200 mt-4 pt-4">
<span className="text-sm text-gray-700 font-medium">That’s playing on luck instead of probability.</span>
</div>
</article>

<article className="flex-1 bg-gray-50 rounded-xl border border-gray-200 px-8 py-7 flex flex-col items-center relative overflow-hidden min-w-0">
<h2 className="text-lg font-semibold tracking-tight mb-3">Single Picks: The Steady Approach</h2>
<div className="mb-4 w-full flex justify-center fade-in animate-slide-in-bottom" style={{animationDelay: '0.15s'}}>
<div className="w-full max-w-md shadow-lg rounded-lg overflow-hidden border border-gray-200 bg-white">
<header className="bg-white shadow-sm flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-2">
<span className="text-sm font-medium bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center">3</span>
<span className="text-base font-semibold">Selections</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-gray-600">Balance <span className="font-semibold text-gray-900">£371.76</span></span>
</div>
</header>
<div className="bg-white flex flex-wrap gap-2 px-4 py-2 border-b">
<span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded border text-gray-700">EP</span>
<span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded border text-gray-700">EARLY PAYOUT</span>
<span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded border text-gray-700">ACCA BOOST</span>
</div>
<main>
<div className="flex gap-3 px-4 py-3 border-b">
<div className="flex-1">
<div className="flex items-center justify-between">
<h2 className="font-semibold text-green-600 text-sm">Aston Villa</h2>
<span className="font-medium text-sm text-gray-900">2.35</span>
</div>
<div className="text-xs text-gray-600">
<p>Aston Villa v Newcastle</p>
</div>
</div>
<div className="w-24">
<input className="w-full bg-white border border-gray-300 rounded-md py-1.5 text-center text-sm font-medium text-gray-900" type="number" value="100"/>
<p className="text-[11px] mt-1 text-gray-500">To Return 
                    <span className="inline-block bg-green-100 text-green-800 font-semibold rounded-md px-2 py-0.5 border border-green-200 ml-1">
                      £235.00
                    </span>
</p>
</div>
</div>
<div className="flex gap-3 px-4 py-3 border-b">
<div className="flex-1">
<div className="flex items-center justify-between">
<h2 className="font-semibold text-green-600 text-sm">Brighton</h2>
<span className="font-medium text-sm text-gray-900">1.90</span>
</div>
<div className="text-xs text-gray-600">
<p>Brighton v Fulham</p>
</div>
</div>
<div className="w-24">
<input className="w-full bg-white border border-gray-300 rounded-md py-1.5 text-center text-sm font-medium text-gray-900" type="number" value="100"/>
<p className="text-[11px] mt-1 text-gray-500">To Return 
                    <span className="inline-block bg-green-100 text-green-800 font-semibold rounded-md px-2 py-0.5 border border-green-200 ml-1">
                      £190.00
                    </span>
</p>
</div>
</div>
<div className="flex gap-3 px-4 py-3">
<div className="flex-1">
<div className="flex items-center justify-between">
<h2 className="font-semibold text-green-600 text-sm">Sunderland</h2>
<span className="font-medium text-sm text-gray-900">3.20</span>
</div>
<div className="text-xs text-gray-600">
<p>Sunderland v West Ham</p>
</div>
</div>
<div className="w-24">
<input className="w-full bg-white border border-gray-300 rounded-md py-1.5 text-center text-sm font-medium text-gray-900" type="number" value="100"/>
<p className="text-[11px] mt-1 text-gray-500">To Return 
                    <span className="inline-block bg-green-100 text-green-800 font-semibold rounded-md px-2 py-0.5 border border-green-200 ml-1">
                      £320.00
                    </span>
</p>
</div>
</div>
</main>
<div className="bg-white border-t px-4 py-3 flex justify-between text-xs">
<span>Total Stake</span>
<span className="font-semibold text-gray-900">£300.00</span>
</div>
<div className="bg-white px-4 pb-3 text-xs text-right text-gray-600 flex items-center justify-end gap-2">
<span>Total To Return</span>
<span className="inline-block bg-green-100 text-green-800 font-semibold rounded-md px-3 py-1 border border-green-200 shadow-sm">
                £745.00
              </span>
</div>
</div>
</div>
<span className="text-sm text-gray-700 font-medium mb-2 text-center block">One option. One calculated risk. Your bankroll lives to fight another day.</span>
<div className="border-t border-gray-200 mt-4 pt-4 text-sm text-gray-700">
          Play the long game. You win some, lose some but keep your capital and ride the wave of the market.
        </div>
</article>
</div>
</section>
<footer className="w-full max-w-2xl mx-auto mt-12 border-t border-gray-200 pt-6 text-xs text-gray-500">
<div>
      Probability is your edge. Discipline is your shield.
    </div>
</footer>
</section>
<div className="w-full flex flex-col items-center py-10">
<div className="w-1/2 border-t-2 border-dashed border-gray-300"></div>
</div>

<section className="min-h-screen bg-white text-gray-900 font-['Inter'] antialiased flex flex-col">
<header className="w-full border-b border-gray-100">
<div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
<h1 className="text-lg font-semibold tracking-tight">Investing Playbook</h1>
</div>
</header>

<section className="w-full">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 py-16">
<div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
          Discipline<br/>&amp; Betting frequency
        </h2>
</div>
<div className="self-start">
<p className="text-base md:text-lg font-medium leading-relaxed border-b-2 border-blue-500 pb-4">
          “Successful investing isn’t about chasing every opportunity; it’s about controlling your emotions, managing risk, and being disciplined enough to stick to your strategy even when things get tough”
        </p>
</div>
</div>
</section>

<section className="w-full">
<div className="max-w-6xl mx-auto px-6">
<div className="w-full rounded-lg overflow-hidden bg-gray-50 border border-gray-100">
<div className="flex flex-col items-center justify-center gap-0 px-4 py-10">
<div className="flex flex-row items-center justify-center w-full space-x-0">

<div className="flex flex-col items-center justify-center flex-1">
<div className="flex flex-col items-center justify-center" style={{width: '190px', height: '190px', border: '3px dotted #CBD5E1', borderRadius: '24px', background: '#fff'}}>
<p className="text-lg font-semibold tracking-tight text-gray-800 leading-tight text-center">Football<br/>Investment</p>
</div>
<span className="sr-only">Football Investment</span>
</div>

<span className="mx-5 flex items-center justify-center text-5xl font-bold text-gray-400 select-none" style={{lineHeight: '1'}}>=</span>

<div className="flex flex-col items-center justify-center flex-1">
<div className="flex items-center justify-center" style={{width: '190px', height: '190px', border: '3px dotted #3B82F6', borderRadius: '9999px', background: '#fff'}}>
<i className="w-20 h-20 text-blue-500" data-lucide="bar-chart"></i>
</div>
<p className="mt-5 text-lg font-semibold tracking-tight text-gray-800 text-center">Probability Edge</p>
</div>

<span className="mx-5 flex items-center justify-center text-5xl font-bold text-gray-400 select-none" style={{lineHeight: '1'}}>+</span>

<div className="flex flex-col items-center justify-center flex-1">
<div className="flex items-center justify-center" style={{width: '190px', height: '190px', border: '3px dotted #EF4444', borderRadius: '9999px', background: '#fff'}}>
<i className="w-20 h-20 text-red-500" data-lucide="brain"></i>
</div>
<p className="mt-5 text-lg font-semibold tracking-tight text-gray-800 text-center">Mental Discipline</p>
</div>

<span className="mx-5 flex items-center justify-center text-5xl font-bold text-gray-400 select-none" style={{lineHeight: '1'}}>+</span>

<div className="flex flex-col items-center justify-center flex-1">
<div className="flex items-center justify-center" style={{width: '190px', height: '190px', border: '3px dotted #FACC15', borderRadius: '9999px', background: '#fff'}}>
<i className="w-20 h-20 text-yellow-400" data-lucide="calculator"></i>
</div>
<p className="mt-5 text-lg font-semibold tracking-tight text-gray-800 text-center">Budgeting</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full">
<div className="max-w-6xl mx-auto px-6 py-14 space-y-8 text-sm md:text-base leading-relaxed">
<p>
<span className="font-semibold text-blue-500">Your EDGE:</span>
         Your edge is your filter. You are not predicting outcomes, you study the market to know which teams consistently meet your data-backed criteria e.g; Over 2.5 goals in high-scoring teams. Like in stock markets investing, it takes years of studying patterns and identifying repeat behaviours in the market. You don’t bet on every game. You bet on the teams that fit your edge.
      </p>
<p>
<span className="font-semibold text-red-500">Mental Discipline:</span>
        The difference between a healthy investment behaviour and gambling is frequency of visits. Discipline means controlling your exposure. The more you scroll, the more likely you are to chase. Even when a team that fits your strategy shows up, you don’t place a bet just because it’s there. You stick to your rules, your odd sweet spot, and avoid unnecessary risk. A missed trade is always better than a bad one.
      </p>
<p>
<span className="font-semibold text-yellow-500">Budgeting / Bankroll Management:</span>
        This is how you stay alive in the market. Every position you take should use just 2% to 7% of your total capital. This keeps you in the game no matter the outcome. The goal is not to win big in one weekend, you’re compounding over the season. Your goal isn’t to predict results, It’s to ride the wave of the market by repeating high-probability actions while protecting your capital.
      </p>
</div>
</section>

<section className="w-full">
<div className="max-w-6xl mx-auto px-6 pb-16">
<div className="rounded-2xl bg-white border border-gray-100 shadow-sm px-6 py-8">
<h2 className="text-lg md:text-xl font-semibold tracking-tight mb-2">S22/23 - S24/25: Capital movement per Gameweeks</h2>
<div className="h-80 md:h-96 w-full">
<canvas id="capitalGrowthChart"></canvas>
</div>

<div className="mt-6 p-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 text-sm md:text-base">
<h3 className="text-base font-semibold tracking-tight mb-1">Want to follow the smart money?</h3>
          Graph above shows the OVER2.5GOALS market performance in the scottish league following the formular of football investing explained above. Get monthly insights on how other leagues are moving in key markets. See the trends, spot the value, and stay ahead. Hit subscribe and plug into the data.
        </div>
</div>
</div>
</section>

<div className="w-full flex justify-center items-center mt-8 mb-10">
<form className="flex flex-col items-center gap-3">
<span className="text-base font-semibold tracking-tight mb-1">Subscribe?</span>
<div className="flex gap-8">

<label className="flex items-center cursor-pointer">
<input className="peer sr-only" name="subscribe" type="radio" value="yes"/>
<span className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-red-600 bg-gradient-to-br from-red-500 via-red-400 to-red-700 shadow-inner transition peer-checked:ring-2 peer-checked:ring-red-400 peer-checked:border-red-700 hover:scale-105 hover:ring-2 hover:ring-red-200 outline-none focus-visible:ring-2 focus-visible:ring-red-300" style={{background: 'radial-gradient(ellipse at 60% 30%, #fff9 40%, #f87171 60%, #b91c1c 100%), linear-gradient(135deg,#f87171 60%,#b91c1c 100%)', boxShadow: '0 2px 12px 0 #ef444450'}}>
<svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24"><polyline points="20 6 10.6 17 4 11.5"></polyline></svg>
</span>
<span className="ml-2 text-sm font-medium text-red-700">Yes</span>
</label>

<label className="flex items-center cursor-pointer">
<input className="peer sr-only" name="subscribe" type="radio" value="no"/>
<span className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-gray-400 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 shadow-inner transition peer-checked:ring-2 peer-checked:ring-gray-400 peer-checked:border-gray-700 hover:scale-105 hover:ring-2 hover:ring-gray-200 outline-none focus-visible:ring-2 focus-visible:ring-gray-300" style={{background: 'radial-gradient(ellipse at 60% 30%, #fff9 40%, #e5e7eb 60%, #6b7280 100%), linear-gradient(135deg,#f3f4f6 60%,#6b7280 100%)', boxShadow: '0 2px 12px 0 #6b728050'}}>
<svg className="w-4 h-4 text-gray-700 opacity-0 peer-checked:opacity-100 transition" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24"><polyline points="20 6 10.6 17 4 11.5"></polyline></svg>
</span>
<span className="ml-2 text-sm font-medium text-gray-700">No</span>
</label>
</div>
</form>
</div>

<section className="w-full bg-gray-50 border-t border-gray-100 py-10">
<div className="max-w-3xl mx-auto px-6 text-xs text-gray-600">
<h2 className="text-sm md:text-base font-semibold tracking-tight mb-4 text-gray-900">About Simplififootball</h2>
<p className="leading-relaxed">
        Built for clarity, control, and consistency, Simplifi provides users with streamlined betting models, market-tested strategies, and real-time insights that cut through noise and emotion. From bankroll management to betting frequency, every system is built to help users protect capital, reduce variance, and trade with purpose.
      </p>
<p className="leading-relaxed mt-4">
        With Simplifi, sports bettors become smart investors — leveraging data, not hunches, and turning small edges into long-term returns. Whether you're backing high-frequency scoring teams or managing risk across a season, Simplifi is your edge in the football market.
      </p>
</div>
</section>
<footer className="mt-auto py-10">
<div className="max-w-6xl mx-auto px-6 text-xs text-gray-500">
      © <span id="year"></span> Investing Playbook. All rights reserved.
    </div>
</footer>
<style>
    @keyframes fade-in { from { opacity:0; transform: translateY(24px) scale(.98) blur(6px);} to { opacity:1; transform: none; filter:none;}}
    .fade-in { opacity:0; animation:fade-in .8s cubic-bezier(.6,.2,.3,1) forwards;}
  </style>

</section>
    </>
  );
}
