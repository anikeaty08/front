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
      

<div className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4 md:px-8">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path>
</g>
</svg>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900 tracking-tight leading-none">
            The ZeroTrading Algo
          </span>
<span className="text-xs text-gray-400 mt-0.5">Last edit: Just now</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center -space-x-2">
<div className="h-6 w-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-medium">
            JD
          </div>
<div className="h-6 w-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-medium">
            MK
          </div>
<div className="h-6 w-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] text-gray-500 font-medium">
            +3
          </div>
</div>
<a className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-xs font-medium px-4 py-1.5 rounded-full" href="#join">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</g>
</svg>
<span>Request Access</span>
</a>
</div>
</div>

<main className="mx-auto max-w-[850px] bg-white min-h-screen mt-20 md:my-24 mb-10 md:shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:rounded-lg border-x md:border-y border-gray-200">

<div className="px-6 py-12 md:px-16 md:py-16">

<div className="border-gray-100 border-b mb-12 pb-8">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-orange-50 text-orange-700 text-xs font-medium mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:alert-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 8v4m0 4h.01"></path>
</g>
</svg>
            EARLY BIRD ACCESS - LIMITED AVAILABILITY
          </div>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4 leading-tight">
            The ZeroTrading Algo
          </h1>
<h2 className="text-xl font-medium tracking-tight text-gray-800 leading-snug">
            Stop Losing Money to Emotions. Start Earning 3-7% Monthly on
            Autopilot.
          </h2>
</div>

<div className="prose prose-gray max-w-none text-base leading-7 space-y-4 mb-12">
<p className="">
            Hey there! I want to help you stop bleeding money through emotional
            trading decisions and finally achieve the consistent monthly profits
            you've been chasing. I understand you want to generate 3-7% monthly
            returns without the stress, sleepless nights, and constant
            chart-watching that comes with manual trading.
          </p>
<p className="font-medium text-gray-900">
            Let's install your automated profit machine...
          </p>
</div>

<div className="bg-gray-50 border border-gray-100 rounded-md p-6 md:p-8 mb-12">
<div className="flex items-start gap-4">
<svg aria-hidden="true" className="iconify text-gray-900 mt-1 shrink-0 iconify--lucide" data-icon="lucide:users" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</g>
</svg>
<div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-2">
                For "Early Bird" Members Only, I'm Helping 5 More Traders...
              </h3>
<p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Over your lifetime as a ZeroTrading member, we build your
                automated trading freedom, starting with your first 30 days.
                This is a with a 1-on-1 onboarding call and ongoing access to
                the algo that's been .
              </p>
</div>
</div>
</div>

<div className="space-y-10 mb-16">
<p className="text-sm text-gray-500 italic">
            Within the first 30 days, our goal is to shift you from emotional,
            manual trading to automated profits, targeting 3-7% monthly gains
            with these 3 things:
          </p>
<div className="flex gap-4 md:gap-6">
<div className="shrink-0 w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-900 font-medium text-sm">
              1
            </div>
<div className="">
<h4 className="text-base font-medium text-gray-900 mb-2">
                Complete Account Setup &amp; Optimization
              </h4>
<p className="text-sm leading-relaxed">
                We handle everything. If you don't have a trading account, we'll
                walk you through setting one up with our recommended broker. If
                you already have one, we'll optimize it specifically for
                algorithmic trading. No guesswork, no technical headaches.
              </p>
</div>
</div>
<div className="flex gap-4 md:gap-6">
<div className="shrink-0 w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-900 font-medium text-sm">
              2
            </div>
<div>
<h4 className="text-base font-medium text-gray-900 mb-2">
                Algo Installation &amp; Configuration
              </h4>
<p className="text-sm leading-relaxed">
                During your personal 1-on-1 onboarding call, I personally
                install the ZeroTrading algo directly into your account with my
                - the same configuration that's averaged over 278 trades.
              </p>
</div>
</div>
<div className="flex gap-4 md:gap-6">
<div className="shrink-0 w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-900 font-medium text-sm">
              3
            </div>
<div>
<h4 className="text-base font-medium text-gray-900 mb-2">
                Your 24/7 Automated Profit Engine
              </h4>
<p className="text-sm leading-relaxed">
                You sit back and let the algo work around the clock, making
                calculated trades while you live your life. No emotions, no
                second-guessing, no revenge trading. Just systematic execution
                based on proven algorithms.
              </p>
</div>
</div>
</div>
<hr className="border-gray-100 my-12"/>

<div className="mb-16">
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-8">
            Here's How Your Trading Transforms
          </h3>
<div className="grid md:grid-cols-2 gap-8 md:gap-12">
<div className="bg-red-50/30 rounded-lg p-6 border border-red-100/50">
<h4 className="text-sm font-medium text-red-700 uppercase tracking-wide mb-4 flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9l-6 6m0-6l6 6"></path>
</g>
</svg>
                Instead of This Nightmare
              </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-red-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:x" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Staying up late watching charts
                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-red-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:x" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Making emotional decisions under pressure
                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-red-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:x" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Revenge trading after losses
                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-red-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:x" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Moving stop losses "just this once"
                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-red-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:x" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Account balance swinging wildly
                </li>
</ul>
</div>
<div className="bg-green-50/30 rounded-lg p-6 border border-green-100/50">
<h4 className="text-sm font-medium text-green-700 uppercase tracking-wide mb-4 flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
                You Get This Reality
              </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-green-500 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Algo trades 24/7 while you sleep
                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-green-500 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Emotion-free, systematic execution
                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-green-500 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Consistent 3-7% monthly growth
                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-green-500 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Single entry trades (no martingale)
                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-green-500 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Maximum 5% risk per trade
                </li>
</ul>
</div>
</div>
</div>

<div className="mb-16">
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-6">
            Verified Live Performance Stats
          </h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-4 border border-gray-100 rounded bg-gray-50/50">
<div className="text-xs text-gray-500 mb-1">Avg. Monthly Return</div>
<div className="text-2xl font-medium text-gray-900 tracking-tight">
                9.72%
              </div>
</div>
<div className="p-4 border border-gray-100 rounded bg-gray-50/50">
<div className="text-xs text-gray-500 mb-1">Total Trades</div>
<div className="text-2xl font-medium text-gray-900 tracking-tight">
                278
              </div>
</div>
<div className="p-4 border border-gray-100 rounded bg-gray-50/50">
<div className="text-xs text-gray-500 mb-1">Win/Loss Avg</div>
<div className="text-2xl font-medium text-gray-900 tracking-tight">
                $9k
                <span className="text-gray-400 text-lg">/$3k</span>
</div>
</div>
<div className="p-4 border border-gray-100 rounded bg-gray-50/50">
<div className="text-xs text-gray-500 mb-1">Avg Hold Time</div>
<div className="text-2xl font-medium text-gray-900 tracking-tight">
                14m
              </div>
</div>
</div>
<div className="mt-4 p-4 border border-gray-100 rounded bg-white flex items-center justify-between">
<span className="text-sm text-gray-500">
              Strategy: Single entry breakout on 30m charts
            </span>
<span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
              Verified MyFXBook
            </span>
</div>
</div>

<div className="mb-16 space-y-8">
<h3 className="text-xl font-medium text-gray-900 tracking-tight">
            Why This Works When Others Fail
          </h3>
<div className="space-y-6">
<div>
<h4 className="text-sm font-medium text-gray-900 flex items-center gap-2 mb-3">
<svg aria-hidden="true" className="iconify text-red-500 iconify--lucide" data-icon="lucide:alert-triangle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                What Destroys Most Trading Bots
              </h4>
<p className="text-sm leading-relaxed pl-6">
                Martingale systems that double down on losses, grid trading that
                adds to losing positions, and over-leveraging. Most bots blow
                accounts because they lack risk management.
              </p>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 flex items-center gap-2 mb-3">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
                Our Single Entry Advantage
              </h4>
<ul className="space-y-2 pl-6">
<li className="text-sm text-gray-600 flex items-start gap-2">
<span className="w-1 h-1 bg-gray-400 rounded-full mt-2 shrink-0"></span>
<span>No martingale, no grid averaging.</span>
</li>
<li className="text-sm text-gray-600 flex items-start gap-2">
<span className="w-1 h-1 bg-gray-400 rounded-full mt-2 shrink-0"></span>
<span>Your account stays protected.</span>
</li>
<li className="text-sm text-gray-600 flex items-start gap-2">
<span className="w-1 h-1 bg-gray-400 rounded-full mt-2 shrink-0"></span>
<span>Positions close after 60 minutes regardless.</span>
</li>
</ul>
</div>
</div>
</div>

<div className="mb-16">
<h3 className="text-xl font-medium text-gray-900 tracking-tight mb-8">
            Timeline to Trading Freedom
          </h3>
<div className="relative border-l border-gray-200 ml-3 space-y-10">
<div className="pl-8 relative">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-white border-2 border-gray-300"></span>
<h4 className="text-base font-medium text-gray-900">
                Phase 1 (Setup Week)
              </h4>
<p className="text-sm text-gray-500 mb-2">
                Get Your Foundation Ready
              </p>
<p className="text-sm leading-relaxed">
                We optimize your broker account, configure settings for
                algorithmic trading, and test the algo with your risk
                parameters. We create your automated foundation together.
              </p>
</div>
<div className="pl-8 relative">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-white border-2 border-blue-500"></span>
<h4 className="text-base font-medium text-gray-900">
                Phase 2 (Go Live)
              </h4>
<p className="text-sm text-gray-500 mb-2">
                Deploy Your Profit Machine
              </p>
<p className="text-sm leading-relaxed">
                I personally install the ZeroTrading algo into your account
                during our 1-on-1 call with my exact profitable settings. You
                get access for life and real-time Slack support.
              </p>
</div>
<div className="pl-8 relative">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-white border-2 border-green-500"></span>
<h4 className="text-base font-medium text-gray-900">
                Phase 3 (Profit &amp; Scale)
              </h4>
<p className="text-sm text-gray-500 mb-2">Watch Your Wealth Grow</p>
<p className="text-sm leading-relaxed">
                We target 3-7% monthly returns consistently with zero time
                commitment. You simply monitor your gains and enjoy the passive
                income.
              </p>
</div>
</div>
</div>

<div className="bg-gray-900 text-white rounded-lg p-8 md:p-10 mb-16 shadow-lg" id="join">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-1">
                The Investment
              </h3>
<p className="text-gray-400 text-sm">
                Only for 5 "Early Bird" members.
              </p>
</div>
<div className="text-right md:text-right text-left">
<div className="text-3xl font-medium tracking-tight">$2,500</div>
<div className="text-sm text-gray-400">+ $100/month</div>
</div>
</div>
<div className="border-t border-gray-700/50 py-6 mb-6">
<p className="text-sm text-gray-300 leading-relaxed mb-4">
              You only get this price because it's the "Early Bird" stage.
              <span className="text-white font-medium">
                The price WILL double after every 10 new members
              </span>
              , but you are locked in at this rate forever.
            </p>
<div className="grid md:grid-cols-2 gap-y-3 gap-x-8">
<div className="flex items-center gap-2 text-sm text-gray-300">
<svg aria-hidden="true" className="iconify text-green-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Lifetime access to Algo
              </div>
<div className="flex items-center gap-2 text-sm text-gray-300">
<svg aria-hidden="true" className="iconify text-green-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                1-on-1 Onboarding Call
              </div>
<div className="flex items-center gap-2 text-sm text-gray-300">
<svg aria-hidden="true" className="iconify text-green-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                My exact settings (9.72% avg)
              </div>
<div className="flex items-center gap-2 text-sm text-gray-300">
<svg aria-hidden="true" className="iconify text-green-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Free VPS Hosting
              </div>
<div className="flex items-center gap-2 text-sm text-gray-300">
<svg aria-hidden="true" className="iconify text-green-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Lifetime Slack Support
              </div>
<div className="flex items-center gap-2 text-sm text-gray-300">
<svg aria-hidden="true" className="iconify text-green-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                All Future Updates
              </div>
</div>
</div>
<a className="block hover:bg-gray-100 transition-colors text-sm font-medium text-gray-900 text-center bg-white w-full rounded-md pt-3 pb-3" href="https://whop.com/checkout/plan_J7NVvvN6RmWoR">
            SECURE YOUR ACCESS NOW
          </a>
<p className="text-center text-xs text-gray-500 mt-4">
            Only 5 spots available at this price.
          </p>
</div>

<div className="grid md:grid-cols-3 gap-8 mb-16 pt-8 border-t border-gray-100">
<div>
<svg aria-hidden="true" className="iconify text-gray-900 mb-3 iconify--lucide" data-icon="lucide:shield" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<h4 className="text-sm font-medium text-gray-900 mb-2">
              90-Day Satisfaction
            </h4>
<p className="text-xs text-gray-500 leading-relaxed">
              Not satisfied with the setup or support? We'll refund your entire
              investment.
            </p>
</div>
<div className="">
<svg aria-hidden="true" className="iconify text-gray-900 mb-3 iconify--lucide" data-icon="lucide:trending-up" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 7h6v6"></path>
<path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
</g>
</svg>
<h4 className="text-sm font-medium text-gray-900 mb-2">
              12-Month Performance
            </h4>
<p className="text-xs text-gray-500 leading-relaxed">
              If the algo doesn't perform, we optimize or provide a full refund.
            </p>
</div>
<div>
<svg aria-hidden="true" className="iconify text-gray-900 mb-3 iconify--lucide" data-icon="lucide:life-buoy" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m4.93 4.93l4.24 4.24m5.66 0l4.24-4.24m-4.24 9.9l4.24 4.24m-9.9-4.24l-4.24 4.24"></path>
<circle cx="12" cy="12" r="4"></circle>
</g>
</svg>
<h4 className="text-sm font-medium text-gray-900 mb-2">
              Lifetime Support
            </h4>
<p className="text-xs text-gray-500 leading-relaxed">
              Unlimited access to our team for questions and technical help.
            </p>
</div>
</div>

<div className="bg-gray-50 border border-gray-100 rounded-md p-6 mb-16">
<h3 className="text-base font-medium text-gray-900 mb-4">
            Before you join, please check:
          </h3>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-gray-400 mt-1 iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              You have at least $10,000 to invest (for proper risk management)
            </li>
<li className="flex items-start gap-2 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-gray-400 mt-1 iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              You are comfortable with steady 3-7% monthly growth
            </li>
<li className="flex items-start gap-2 text-sm text-gray-600">
<svg aria-hidden="true" className="iconify text-gray-400 mt-1 iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              You understand that all trading involves risk
            </li>
</ul>
<div className="flex items-center gap-2 text-sm font-medium text-gray-900">
<a className="hover:underline flex items-center gap-1" href="https://www.myfxbook.com/members/jalelabou/gold-breakout/11824939" target="_blank">
              View Verified MyFXBook Performance
              <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:external-link" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="text-center pt-8 border-t border-gray-100">
<p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Disclaimer: Trading involves risk. Past performance does not
            guarantee future results. Only invest capital you can afford to
            lose. All trading results shown are from live accounts but
            individual results may vary based on market conditions and risk
            settings.
          </p>
<div className="mt-8 mb-4">
<span className="text-sm font-medium text-gray-900 tracking-tight">
              ZeroTrading Algo
            </span>
</div>
</div>
</div>
</main>

    </>
  );
}
