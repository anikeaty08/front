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
      

<header className="w-full border-b border-neutral-800/50 bg-black/50 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-2xl tracking-tight font-serif italic text-white flex items-center gap-2" href="#">
          Venice
        </a>
<button className="bg-white text-black px-4 py-2 rounded-lg text-base font-medium hover:bg-neutral-200 transition-colors">
          Get Referral Link
        </button>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-12 pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E2D8C3]/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-neutral-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
</div>
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-base text-neutral-300 font-medium mb-8 backdrop-blur-sm">
<iconify-icon className="text-xl text-[#E2D8C3]" icon="solar:stars-linear"></iconify-icon>
            Venice Referral Program
          </div>
<h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-semibold tracking-tight mb-8 leading-tight">
            Invite Friends.
            <br/>
            Earn
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-[#E2D8C3]">
              Credits.
            </span>
</h1>
<p className="animate-fade-in-up delay-200 text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl font-normal leading-relaxed">
            Refer a friend to Venice and you'll earn
            <span className="text-white font-medium">$10 in credits</span>
            . Your friend gets a
            <span className="text-white font-medium">$5 head start</span>
            to explore unrestricted AI.
          </p>

<div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full max-w-2xl mx-auto mb-16">
<div className="flex-1 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 w-full flex flex-col items-center relative overflow-hidden backdrop-blur-sm">
<div className="absolute inset-0 bg-gradient-to-br from-[#E2D8C3]/5 to-transparent pointer-events-none"></div>
<div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-[#E2D8C3]" icon="solar:user-linear"></iconify-icon>
</div>
<span className="text-lg text-neutral-400 mb-1">You Earn</span>
<span className="text-4xl font-semibold tracking-tight text-white">
                $10
              </span>
</div>
<div className="hidden sm:flex items-center justify-center">
<iconify-icon className="text-2xl text-neutral-600" icon="solar:transfer-horizontal-linear"></iconify-icon>
</div>
<div className="flex-1 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 w-full flex flex-col items-center relative overflow-hidden backdrop-blur-sm">
<div className="absolute inset-0 bg-gradient-to-br from-[#E2D8C3]/5 to-transparent pointer-events-none"></div>
<div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-[#E2D8C3]" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<span className="text-lg text-neutral-400 mb-1">Friend Earns</span>
<span className="text-4xl font-semibold tracking-tight text-white">
                $5
              </span>
</div>
</div>

<div className="animate-fade-in-up delay-300 w-full max-w-md mx-auto relative group">
<div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
<div className="relative flex items-center bg-neutral-950 border border-neutral-800 rounded-xl p-1.5 focus-within:border-neutral-600 transition-colors">
<div className="pl-4 pr-2 flex items-center justify-center">
<iconify-icon className="text-xl text-[#E2D8C3]" icon="solar:link-linear"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none text-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-0 py-2" readonly="" type="text" value="venice.ai/ref/x8f92k"/>
<button className="bg-white text-black px-6 py-2 rounded-lg text-base font-medium hover:bg-neutral-200 transition-colors whitespace-nowrap">
                Copy Link
              </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-800/50 bg-[#050505]">
<div className="max-w-7xl mx-auto">
<div className="animate-fade-in-up text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
              Unleash your credits
            </h2>
<p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Your referral credits unlock the full power of the Venice
              platform. Build, create, and converse without limits.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="animate-fade-in-up delay-100 bg-neutral-900/30 border border-neutral-800/60 p-8 rounded-3xl hover:bg-neutral-900/50 hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-neutral-800/80 rounded-2xl flex items-center justify-center mb-6 border border-neutral-700/50">
<iconify-icon className="text-2xl text-[#E2D8C3]" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">
                Ask Anything
              </h3>
<p className="text-lg text-neutral-400 leading-relaxed">
                Access the world's best models. Enjoy completely anonymized
                access to premier closed-source models, and fully private local
                execution for open-source models.
              </p>
</div>

<div className="animate-fade-in-up delay-200 bg-neutral-900/30 border border-neutral-800/60 p-8 rounded-3xl hover:bg-neutral-900/50 hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-neutral-800/80 rounded-2xl flex items-center justify-center mb-6 border border-neutral-700/50">
<iconify-icon className="text-2xl text-[#E2D8C3]" icon="lucide:image"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">
                Create Media
              </h3>
<p className="text-lg text-neutral-400 leading-relaxed">
                Generate and edit stunning, high-resolution images and videos.
                Use your credits to access cutting-edge visual models without
                subscriptions.
              </p>
</div>

<div className="animate-fade-in-up delay-300 bg-neutral-900/30 border border-neutral-800/60 p-8 rounded-3xl hover:bg-neutral-900/50 hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-neutral-800/80 rounded-2xl flex items-center justify-center mb-6 border border-neutral-700/50">
<iconify-icon className="text-2xl text-[#E2D8C3]" icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">
                Power Agents
              </h3>
<p className="text-lg text-neutral-400 leading-relaxed">
                Integrate Venice directly into your workflow. Use credits to
                power autonomous agents, applications, and tools via our robust
                developer API.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-800/50">
<div className="max-w-5xl mx-auto">
<div className="animate-fade-in-up flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                Top Referrers
              </h2>
<p className="text-xl text-neutral-400">
                Join the leaders building the unrestricted AI network.
              </p>
</div>
<div className="px-5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-base text-neutral-300 font-medium flex items-center gap-2">
<iconify-icon className="text-xl text-[#E2D8C3]" icon="solar:cup-star-linear"></iconify-icon>
              Total Awarded: $124,500+
            </div>
</div>
<div className="animate-fade-in-up delay-100 bg-neutral-950 border border-neutral-800/80 rounded-3xl overflow-hidden shadow-2xl shadow-black">
<div className="overflow-x-auto scrollbar-hide">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead>
<tr className="bg-neutral-900/50 border-b border-neutral-800/80">
<th className="px-8 py-5 text-base font-medium text-neutral-500 tracking-wide w-24">
                      Rank
                    </th>
<th className="px-8 py-5 text-base font-medium text-neutral-500 tracking-wide">
                      User
                    </th>
<th className="px-8 py-5 text-base font-medium text-neutral-500 tracking-wide text-right">
                      Referrals
                    </th>
<th className="px-8 py-5 text-base font-medium text-neutral-500 tracking-wide text-right">
                      Earned
                    </th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800/50">

<tr className="hover:bg-neutral-900/30 transition-colors group">
<td className="px-8 py-6">
<div className="w-8 h-8 rounded-full bg-[#E2D8C3]/10 text-[#E2D8C3] flex items-center justify-center font-semibold text-lg border border-[#E2D8C3]/20">
                        1
                      </div>
</td>
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-neutral-700" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<span className="text-lg font-medium text-white group-hover:text-[#E2D8C3] transition-colors">
                          vitalik.eth
                        </span>
</div>
</td>
<td className="px-8 py-6 text-right text-lg text-neutral-300">
                      1,245
                    </td>
<td className="px-8 py-6 text-right text-lg font-medium text-white">
                      $12,450
                    </td>
</tr>

<tr className="hover:bg-neutral-900/30 transition-colors group">
<td className="px-8 py-6">
<div className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center font-semibold text-lg">
                        2
                      </div>
</td>
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 border border-neutral-700 shadow-inner"></div>
<span className="text-lg font-medium text-neutral-300 group-hover:text-white transition-colors">
                          CurlyVenetian
                        </span>
</div>
</td>
<td className="px-8 py-6 text-right text-lg text-neutral-300">
                      982
                    </td>
<td className="px-8 py-6 text-right text-lg font-medium text-white">
                      $9,820
                    </td>
</tr>

<tr className="hover:bg-neutral-900/30 transition-colors group">
<td className="px-8 py-6">
<div className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center font-semibold text-lg">
                        3
                      </div>
</td>
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-neutral-700" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<span className="text-lg font-medium text-white group-hover:text-[#E2D8C3] transition-colors">
                          sarah.lens
                        </span>
</div>
</td>
<td className="px-8 py-6 text-right text-lg text-neutral-300">
                      840
                    </td>
<td className="px-8 py-6 text-right text-lg font-medium text-white">
                      $8,400
                    </td>
</tr>

<tr className="hover:bg-neutral-900/30 transition-colors group">
<td className="px-8 py-6">
<span className="text-lg text-neutral-500 font-medium ml-2">
                        4
                      </span>
</td>
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-bl from-emerald-400 to-cyan-500 border border-neutral-700 shadow-inner"></div>
<span className="text-lg font-medium text-neutral-300 group-hover:text-white transition-colors">
                          SpicyVenetian
                        </span>
</div>
</td>
<td className="px-8 py-6 text-right text-lg text-neutral-300">
                      756
                    </td>
<td className="px-8 py-6 text-right text-lg font-medium text-white">
                      $7,560
                    </td>
</tr>

<tr className="hover:bg-neutral-900/30 transition-colors group">
<td className="px-8 py-6">
<span className="text-lg text-neutral-500 font-medium ml-2">
                        5
                      </span>
</td>
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border border-neutral-700 grayscale opacity-80" src="https://i.pravatar.cc/150?u=a04258114e29026702d"/>
<span className="text-lg font-medium text-white group-hover:text-[#E2D8C3] transition-colors">
                          builder.eth
                        </span>
</div>
</td>
<td className="px-8 py-6 text-right text-lg text-neutral-300">
                      612
                    </td>
<td className="px-8 py-6 text-right text-lg font-medium text-white">
                      $6,120
                    </td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="animate-fade-in-up delay-200 mt-8 text-center">
<button className="text-lg text-neutral-400 hover:text-white font-medium transition-colors flex items-center gap-2 mx-auto">
              View Full Leaderboard
              <iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-800/80 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3 text-neutral-500 text-base">
<iconify-icon className="text-xl" icon="solar:star-fall-linear"></iconify-icon>
          © 2025 Venice AI. All rights reserved.
        </div>
<div className="flex items-center gap-8 text-base">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
            Terms
          </a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
            Privacy
          </a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
            Discord
          </a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
            X / Twitter
          </a>
</div>
</div>
</footer>

    </>
  );
}
