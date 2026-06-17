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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<nav className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-[#FDFBF9]/80 backdrop-blur-md">
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded bg-orange-600 text-white font-semibold">
                    C
                </div>
<span className="text-lg font-semibold tracking-tight text-stone-900">Co-FounderBD</span>
</div>
<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900" href="#">About</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900" href="#">Stories</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900" href="#">Library</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900" href="#">Events</a>
</div>
<button className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-800 hover:shadow-lg">
                Apply
            </button>
</div>
</nav>

<section className="relative overflow-hidden px-6 pb-20 pt-16 lg:px-8 lg:pt-32">
<div className="mx-auto max-w-7xl">
<div className="grid items-center gap-12 lg:grid-cols-2">
<div className="max-w-2xl">
<h1 className="text-5xl font-semibold tracking-tight text-stone-900 sm:text-6xl mb-6">
<span className="text-orange-600">Co-FounderBD</span> Matching
                    </h1>
<p className="text-xl leading-relaxed text-stone-600 mb-10">
                        Where savvy founders go to meet potential co-founders. We've built the largest network of vetted entrepreneurs in Bangladesh ready to start their next venture.
                    </p>
<div className="flex flex-col gap-4 sm:flex-row">
<button className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-8 py-4 text-base font-medium text-white transition hover:bg-orange-700 hover:shadow-lg shadow-orange-200/50">
                            Go to co-founder matching
                        </button>
</div>
<p className="mt-4 text-sm text-stone-400 italic">Join 15,000+ founders today.</p>
</div>

<div className="relative flex justify-center lg:justify-end">
<div className="relative h-[400px] w-[400px]">

<div className="absolute inset-0 rounded-full bg-orange-100/50 blur-3xl"></div>

<img alt="Founder" className="absolute top-10 left-10 h-24 w-24 rounded-full border-4 border-white object-cover shadow-xl" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=200&amp;h=200"/>
<img alt="Founder" className="absolute top-0 right-20 h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl z-10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=200&amp;h=200"/>
<img alt="Founder" className="absolute bottom-20 left-20 h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl z-20" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=200&amp;h=200"/>
<img alt="Founder" className="absolute bottom-10 right-10 h-24 w-24 rounded-full border-4 border-white object-cover shadow-xl" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=200&amp;h=200"/>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-stone-200 bg-white px-6 py-24 lg:px-8">
<div className="mx-auto max-w-7xl">
<div className="mx-auto max-w-3xl text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl mb-6">
                    Even the best founders don't always have people in their network ready to start.
                </h2>
<p className="text-xl text-stone-600">
                    That's why we built co-founder matching specifically for the BD ecosystem.
                </p>
</div>
<div className="grid gap-12 lg:grid-cols-3">

<div className="border-l-4 border-orange-500 pl-6">
<h3 className="text-xl font-semibold text-stone-900 mb-3">Good for all stages</h3>
<p className="text-lg text-stone-600 leading-relaxed">
                        Whether you're getting to know people for the future, or ready to go now. We support early ideation to post-revenue.
                    </p>
</div>

<div className="border-l-4 border-orange-500 pl-6">
<h3 className="text-xl font-semibold text-stone-900 mb-3">Come with or without an idea</h3>
<p className="text-lg text-stone-600 leading-relaxed">
                        Don't have the right idea yet? This is a great place to find it by brainstorming with peers.
                    </p>
</div>

<div className="border-l-4 border-orange-500 pl-6">
<h3 className="text-xl font-semibold text-stone-900 mb-3">Explore on your own terms</h3>
<p className="text-lg text-stone-600 leading-relaxed">
                        No commitment, no equity taken, no strings attached. Just pure networking value.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#FDFBF9] px-6 py-24 lg:px-8">
<div className="mx-auto max-w-7xl">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-12">
                World-class founders are on co-founder matching
            </h2>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="group flex flex-col justify-between rounded-xl bg-white p-8 shadow-sm ring-1 ring-stone-900/5 transition hover:shadow-md hover:ring-stone-900/10">
<p className="text-lg text-stone-600 mb-8">
                        "I built and managed the Pathao platform that powers millions of rides daily. Looking for a technical co-founder."
                    </p>
<div className="flex items-center gap-4">
<img alt="User" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<p className="font-semibold text-stone-900">Sarah K.</p>
<div className="flex gap-2 mt-1">
<span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded text-xs font-medium">Ex-Pathao</span>
<span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded text-xs font-medium">Dhaka</span>
</div>
</div>
</div>
</div>

<div className="group flex flex-col justify-between rounded-xl bg-white p-8 shadow-sm ring-1 ring-stone-900/5 transition hover:shadow-md hover:ring-stone-900/10">
<p className="text-lg text-stone-600 mb-8">
                        "Scored top percentile on my CS degree. Worked on backend systems at ShopUp. Ready to build something in Fintech."
                    </p>
<div className="flex items-center gap-4">
<img alt="User" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<p className="font-semibold text-stone-900">Rafiq M.</p>
<div className="flex gap-2 mt-1">
<span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-medium">BUET</span>
<span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded text-xs font-medium">ShopUp</span>
</div>
</div>
</div>
</div>

<div className="group flex flex-col justify-between rounded-xl bg-white p-8 shadow-sm ring-1 ring-stone-900/5 transition hover:shadow-md hover:ring-stone-900/10">
<p className="text-lg text-stone-600 mb-8">
                        "Youngest engineer promoted to Senior Staff at Chaldal. I have deep expertise in logistics and supply chain algorithms."
                    </p>
<div className="flex items-center gap-4">
<img alt="User" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<p className="font-semibold text-stone-900">Arman H.</p>
<div className="flex gap-2 mt-1">
<span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded text-xs font-medium">Chaldal</span>
</div>
</div>
</div>
</div>

<div className="group flex flex-col justify-between rounded-xl bg-white p-8 shadow-sm ring-1 ring-stone-900/5 transition hover:shadow-md hover:ring-stone-900/10">
<p className="text-lg text-stone-600 mb-8">
                        "Built a SaaS acquired by a US firm in 2021. Looking to get back into the game with a focus on AI."
                    </p>
<div className="flex items-center gap-4">
<img alt="User" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<p className="font-semibold text-stone-900">Tanvir A.</p>
<div className="flex gap-2 mt-1">
<span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs font-medium">Exit</span>
<span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded text-xs font-medium">AI</span>
</div>
</div>
</div>
</div>

<div className="group flex flex-col justify-between rounded-xl bg-white p-8 shadow-sm ring-1 ring-stone-900/5 transition hover:shadow-md hover:ring-stone-900/10">
<p className="text-lg text-stone-600 mb-8">
                        "Managed full teardown and rebuild of a payment gateway. Full stack developer looking for a business co-founder."
                    </p>
<div className="flex items-center gap-4">
<img alt="User" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<p className="font-semibold text-stone-900">Shreya D.</p>
<div className="flex gap-2 mt-1">
<span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs font-medium">Bkash</span>
</div>
</div>
</div>
</div>

<div className="group flex flex-col justify-between rounded-xl bg-white p-8 shadow-sm ring-1 ring-stone-900/5 transition hover:shadow-md hover:ring-stone-900/10">
<p className="text-lg text-stone-600 mb-8">
                        "Worked on autonomous recognition at a global tech firm. Planning algorithms at scale are my specialty."
                    </p>
<div className="flex items-center gap-4">
<img alt="User" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<p className="font-semibold text-stone-900">Daryl R.</p>
<div className="flex gap-2 mt-1">
<span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded text-xs font-medium">Intel</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white px-6 py-24 lg:px-8">
<div className="mx-auto max-w-7xl">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-6">
                The largest network of its kind — over 10K matches made
            </h2>
<p className="text-lg text-stone-600 mb-12">Active profiles in top cities across the region</p>
<div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
<div className="flex flex-col items-center justify-center rounded-lg border border-stone-200 bg-white p-6 text-center hover:border-orange-300 transition-colors">
<span className="text-3xl font-semibold text-stone-900">3,200</span>
<span className="mt-1 text-sm text-stone-500">Dhaka</span>
</div>
<div className="flex flex-col items-center justify-center rounded-lg border border-stone-200 bg-white p-6 text-center hover:border-orange-300 transition-colors">
<span className="text-3xl font-semibold text-stone-900">1,200</span>
<span className="mt-1 text-sm text-stone-500">Chittagong</span>
</div>
<div className="flex flex-col items-center justify-center rounded-lg border border-stone-200 bg-white p-6 text-center hover:border-orange-300 transition-colors">
<span className="text-3xl font-semibold text-stone-900">900</span>
<span className="mt-1 text-sm text-stone-500">Sylhet</span>
</div>
<div className="flex flex-col items-center justify-center rounded-lg border border-stone-200 bg-white p-6 text-center hover:border-orange-300 transition-colors">
<span className="text-3xl font-semibold text-stone-900">1,900</span>
<span className="mt-1 text-sm text-stone-500">Remote (BD)</span>
</div>
<div className="flex flex-col items-center justify-center rounded-lg border border-stone-200 bg-white p-6 text-center hover:border-orange-300 transition-colors">
<span className="text-3xl font-semibold text-stone-900">800</span>
<span className="mt-1 text-sm text-stone-500">Rajshahi</span>
</div>
<div className="flex flex-col items-center justify-center rounded-lg border border-stone-200 bg-white p-6 text-center hover:border-orange-300 transition-colors">
<span className="text-3xl font-semibold text-stone-900">700</span>
<span className="mt-1 text-sm text-stone-500">Khulna</span>
</div>
<div className="flex flex-col items-center justify-center rounded-lg border border-stone-200 bg-white p-6 text-center hover:border-orange-300 transition-colors">
<span className="text-3xl font-semibold text-stone-900">700</span>
<span className="mt-1 text-sm text-stone-500">Barisal</span>
</div>
<div className="flex flex-col items-center justify-center rounded-lg border border-stone-200 bg-white p-6 text-center hover:border-orange-300 transition-colors">
<span className="text-3xl font-semibold text-stone-900">600</span>
<span className="mt-1 text-sm text-stone-500">Singapore (Expats)</span>
</div>
</div>
<p className="mt-8 text-stone-500">We also run exclusive in-person co-founder matching meetups for founders in Dhaka and Chittagong.</p>
</div>
</section>

<section className="bg-[#FDFBF9] px-6 py-24 lg:px-8">
<div className="mx-auto max-w-7xl">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-12">
                From companies who met on Co-FounderBD
            </h2>
<div className="grid gap-8 lg:grid-cols-2">

<div className="rounded-2xl border border-stone-200 bg-white p-10 shadow-sm">
<p className="text-lg leading-relaxed text-stone-600 mb-8">
                        "Without this we never would have met. The Co-FounderBD platform is a huge unfair advantage to filter for the exact people you're looking for and save time on the search. It's changing the game and enabling more people to start companies."
                    </p>
<div className="flex items-center gap-4 border-t border-stone-100 pt-6">
<div className="flex -space-x-3">
<img alt="" className="h-10 w-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="" className="h-10 w-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Curtis and Matthew</p>
<p className="text-xs font-bold text-stone-900 uppercase tracking-wider">Whalesync</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-stone-200 bg-white p-10 shadow-sm">
<p className="text-lg leading-relaxed text-stone-600 mb-8">
                        "Finding the right co-founder was always the biggest barrier preventing me from jumping in. This felt like a cheat-code to solving that problem. Once we matched, we started working together every day and haven't stopped since."
                    </p>
<div className="flex items-center gap-4 border-t border-stone-100 pt-6">
<div className="flex -space-x-3">
<img alt="" className="h-10 w-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="" className="h-10 w-10 rounded-full border-2 border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Andrew and Shreya</p>
<p className="text-xs font-bold text-stone-900 uppercase tracking-wider">Pledge Health</p>
</div>
</div>
</div>
</div>
<div className="mt-12 flex justify-center">
<button className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-8 py-3 text-base font-medium text-white transition hover:bg-orange-700">
                    Sign up now
                </button>
</div>
</div>
</section>

<section className="bg-white px-6 py-24 lg:px-8">
<div className="mx-auto max-w-4xl">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-12">How does it work?</h2>
<div className="space-y-10">
<div className="flex gap-6">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-lg font-semibold text-orange-800">1</div>
<div className="pt-2">
<h3 className="text-xl font-medium text-stone-900">Create a profile <span className="text-stone-500 font-normal">and tell us about yourself.</span></h3>
</div>
</div>
<div className="flex gap-6">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-lg font-semibold text-orange-800">2</div>
<div className="pt-2">
<h3 className="text-xl font-normal text-stone-600">Our matching engine shows you profiles that fit your preferences.</h3>
</div>
</div>
<div className="flex gap-6">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-lg font-semibold text-orange-800">3</div>
<div className="pt-2">
<h3 className="text-xl font-medium text-stone-900">If a profile piques your interest, <span className="font-semibold">invite them to connect.</span></h3>
</div>
</div>
<div className="flex gap-6">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-lg font-semibold text-orange-800">4</div>
<div className="pt-2">
<h3 className="text-xl font-normal text-stone-600">If they accept your invite, <span className="font-semibold text-stone-900">that's a match!</span> Find a time to start the conversation.</h3>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FDFBF9] px-6 py-24 lg:px-8">
<div className="mx-auto max-w-4xl">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-12">Frequently Asked Questions</h2>
<div className="space-y-12">
<div>
<h3 className="text-lg font-semibold text-stone-900">Who is this for?</h3>
<p className="mt-2 text-lg text-stone-600">Anyone who is looking for a co-founder. You can have an idea in mind or just be exploring. You can be already working full-time on a startup or just interested in doing one in the future.</p>
</div>
<div>
<h3 className="text-lg font-semibold text-stone-900">Does Co-FounderBD take equity in return for using this? Are there strings attached?</h3>
<p className="mt-2 text-lg text-stone-600">No, co-founder matching is a completely free product.</p>
</div>
<div>
<h3 className="text-lg font-semibold text-stone-900">I'm not sure if I want to start a startup yet, can I use this to just meet people?</h3>
<p className="mt-2 text-lg text-stone-600">Absolutely, co-founder matching is a great way to meet cool people in your city who are interested in startups.</p>
</div>
<div>
<h3 className="text-lg font-semibold text-stone-900">Will my profile be public? Can my employer find me?</h3>
<p className="mt-2 text-lg text-stone-600">No, your profile is not public to the internet. Your profile is visible only to other people who have been approved for co-founder matching.</p>
</div>
</div>
<div className="mt-16 text-center">
<button className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-8 py-3 text-base font-medium text-white transition hover:bg-orange-700">
                    Sign up now
                </button>
</div>
</div>
</section>

<footer className="bg-black py-16 text-stone-400">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="flex h-6 w-6 items-center justify-center rounded bg-orange-600 text-xs text-white font-bold">C</div>
<span className="text-white font-semibold">Co-FounderBD</span>
</div>
<p className="text-sm">Make something people want.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Programs</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white" href="#">Startup School</a></li>
<li><a className="hover:text-white" href="#">Work at a Startup</a></li>
<li><a className="hover:text-white" href="#">Co-Founder Matching</a></li>
<li><a className="hover:text-white" href="#">Investor Day</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white" href="#">Startup Directory</a></li>
<li><a className="hover:text-white" href="#">Library</a></li>
<li><a className="hover:text-white" href="#">SAFE</a></li>
<li><a className="hover:text-white" href="#">Founder News</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white" href="#">Blog</a></li>
<li><a className="hover:text-white" href="#">Contact</a></li>
<li><a className="hover:text-white" href="#">Press</a></li>
<li><a className="hover:text-white" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="mt-12 border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm">© 2024 Co-FounderBD. All rights reserved.</p>
<div className="flex gap-6">
<i className="h-5 w-5 hover:text-white cursor-pointer" data-lucide="twitter"></i>
<i className="h-5 w-5 hover:text-white cursor-pointer" data-lucide="facebook"></i>
<i className="h-5 w-5 hover:text-white cursor-pointer" data-lucide="instagram"></i>
<i className="h-5 w-5 hover:text-white cursor-pointer" data-lucide="linkedin"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
