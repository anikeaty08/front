import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-semibold text-lg tracking-tighter text-zinc-900">LogiClean</span>
</div>

<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Log in</a>
</div>
</nav>

<header className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 px-6 max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Simple scheduling for cleaning businesses
        </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
            Organize your cleaning<br className="hidden sm:block"/> schedule in minutes.
        </h1>
<p className="text-lg text-zinc-500 max-w-xl mx-auto mb-10 font-normal leading-relaxed">
            Stop fighting with paper calendars, text messages, and spreadsheets. Get your team to the right house at the right time.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-8 py-3.5 rounded-lg transition-all shadow-sm shadow-indigo-200 flex items-center justify-center gap-2">
                Start organizing now
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>

<div className="mt-16 relative mx-auto max-w-3xl p-4 bg-zinc-50 rounded-xl border border-zinc-100">
<div className="bg-white rounded-lg border border-zinc-200 shadow-sm p-6 text-left">
<div className="flex items-center justify-between mb-6 border-b border-zinc-100 pb-4">
<div className="text-sm font-medium text-zinc-900">Today's Schedule</div>
<div className="text-xs text-zinc-400">Wednesday, Oct 24</div>
</div>

<div className="space-y-3">
<div className="flex items-center gap-4 p-3 rounded-md bg-zinc-50 border border-zinc-100">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-900">Smith Residence</div>
<div className="text-xs text-zinc-500">9:00 AM • Deep Clean</div>
</div>
<div className="text-xs font-medium text-zinc-400">Assigned: Sarah</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-md bg-white border border-zinc-100">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-900">Office Complex A</div>
<div className="text-xs text-zinc-500">1:00 PM • Standard Clean</div>
</div>
<div className="text-xs font-medium text-zinc-400">Assigned: Mike</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-20 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 mb-4">The manual scheduling chaos</h2>
<p className="text-zinc-500">Does this sound familiar? You spend more time planning the work than doing it.</p>
</div>
<div className="grid sm:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mb-4">
<iconify-icon icon="lucide:phone-missed" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Constant texting</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Messaging cleaners back and forth just to confirm they know where to go and when.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-4">
<iconify-icon icon="lucide:calendar-x" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Double bookings</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Embarrassing moments when two clients expect you at the same time.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-600 mb-4">
<iconify-icon icon="lucide:file-question" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Lost details</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Notes about gate codes or specific cleaning requests getting lost in piles of paper.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="md:w-1/2">
<div className="inline-block text-indigo-600 font-medium text-sm mb-4">Meet LogiClean</div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">
                        A digital calendar that actually works for cleaners.
                    </h2>
<p className="text-zinc-500 text-lg leading-relaxed mb-6">
                        LogiClean replaces the mess of spreadsheets and texts with one simple screen. You see who is working, where they are going, and what needs to be done.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-zinc-700">
<iconify-icon className="text-indigo-600" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="text-sm">Stop late night planning</span>
</li>
<li className="flex items-center gap-3 text-zinc-700">
<iconify-icon className="text-indigo-600" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="text-sm">Eliminate "where do I go?" texts</span>
</li>
<li className="flex items-center gap-3 text-zinc-700">
<iconify-icon className="text-indigo-600" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="text-sm">Keep client notes secure</span>
</li>
</ul>
</div>
<div className="md:w-1/2 w-full">

<div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
<div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
<div className="px-4 py-3 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
</div>
<div className="h-2 w-20 bg-zinc-200 rounded-full"></div>
</div>
<div className="p-6 space-y-4">

<div className="flex gap-4">
<div className="w-16 pt-1 text-xs text-zinc-400 text-right">08:00 AM</div>
<div className="flex-1 bg-indigo-50 border border-indigo-100 p-3 rounded-md">
<div className="h-2 w-24 bg-indigo-200 rounded-full mb-2"></div>
<div className="h-2 w-16 bg-indigo-100 rounded-full"></div>
</div>
</div>

<div className="flex gap-4">
<div className="w-16 pt-1 text-xs text-zinc-400 text-right">10:30 AM</div>
<div className="flex-1 py-3 border-t border-dashed border-zinc-100"></div>
</div>

<div className="flex gap-4">
<div className="w-16 pt-1 text-xs text-zinc-400 text-right">11:00 AM</div>
<div className="flex-1 bg-green-50 border border-green-100 p-3 rounded-md">
<div className="h-2 w-32 bg-green-200 rounded-full mb-2"></div>
<div className="h-2 w-20 bg-green-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">How it works</h2>
<p className="text-zinc-500 mt-3">Three steps to a calm morning.</p>
</div>
<div className="grid md:grid-cols-3 gap-10">

<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-700 shadow-sm mb-6">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">1. Add your clients</h3>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
                        Input client names, addresses, and access codes once. They are saved forever.
                    </p>
</div>

<div className="hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 text-zinc-300">
<iconify-icon icon="lucide:arrow-right" width="24"></iconify-icon>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-700 shadow-sm mb-6">
<iconify-icon icon="lucide:calendar-plus" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">2. Assign a job</h3>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
                        Pick a date and time, then select which cleaner will handle the job.
                    </p>
</div>

<div className="hidden md:block absolute right-1/3 top-1/2 -translate-y-1/2 text-zinc-300">
<iconify-icon icon="lucide:arrow-right" width="24"></iconify-icon>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-700 shadow-sm mb-6">
<iconify-icon icon="lucide:send" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">3. Share schedule</h3>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
                        Your team sees exactly where they need to be on their phone. No more calls.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-zinc-100">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-8 text-center">Is LogiClean for you?</h2>
<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
<div className="space-y-4">
<div className="flex gap-4 items-start">
<div className="mt-1 min-w-[20px] text-indigo-600">
<iconify-icon icon="lucide:check-square" width="20"></iconify-icon>
</div>
<p className="text-zinc-700 text-sm sm:text-base">You run a residential or commercial cleaning business.</p>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 min-w-[20px] text-indigo-600">
<iconify-icon icon="lucide:check-square" width="20"></iconify-icon>
</div>
<p className="text-zinc-700 text-sm sm:text-base">You manage between 1 and 20 cleaners.</p>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 min-w-[20px] text-indigo-600">
<iconify-icon icon="lucide:check-square" width="20"></iconify-icon>
</div>
<p className="text-zinc-700 text-sm sm:text-base">You are tired of "techy" software that is too hard to learn.</p>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 min-w-[20px] text-indigo-600">
<iconify-icon icon="lucide:check-square" width="20"></iconify-icon>
</div>
<p className="text-zinc-700 text-sm sm:text-base">You want to look more professional to your clients.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-2xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 text-zinc-600 mb-6">
<iconify-icon icon="lucide:heart-handshake" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-medium text-zinc-900 mb-4">Why we built this</h2>
<p className="text-zinc-500 leading-relaxed">
                "We ran a cleaning service for 5 years. We tried every software out there, but they were all too complicated, expensive, or full of features we didn't need. We built LogiClean to be the simple tool we wished we had: just the schedule, the clients, and the cleaners. Nothing else."
            </p>
<div className="mt-6 text-sm font-medium text-zinc-900">— The LogiClean Team</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">
                Ready to take back your time?
            </h2>
<p className="text-zinc-500 mb-10">
                Setup takes less than 5 minutes. No credit card required to start looking around.
            </p>
<button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-4 rounded-lg transition-all shadow-md shadow-indigo-200 text-lg flex items-center justify-center gap-2 mx-auto">
                I want to organize my schedule
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<p className="mt-6 text-xs text-zinc-400">
                Simple. Secure. Built for cleaners.
            </p>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 py-12">
<div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
<div className="text-sm font-semibold tracking-tight text-zinc-900">LogiClean</div>
<div className="text-xs text-zinc-400">
                © 2024 LogiClean. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
