import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
900: '#1e3a8a',
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 0 15px rgba(59, 130, 246, 0.5)',
}
}
}
}



        function handleFormSubmit(event) {
            event.preventDefault();
            // Simulate API call / Database entry
            const btn = event.target.querySelector('button');
            const originalText = btn.innerHTML;
            
            // Loading state
            btn.disabled = true;
            btn.innerHTML = '<iconify-icon icon="svg-spinners:ring-resize" width="24"></iconify-icon>';
            
            setTimeout(() => {
                document.getElementById('campaignForm').classList.add('hidden');
                document.getElementById('successMessage').classList.remove('hidden');
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1000);
        }

        function resetForm() {
            document.getElementById('campaignForm').reset();
            document.getElementById('campaignForm').classList.remove('hidden');
            document.getElementById('successMessage').classList.add('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 glass-panel border-b border-slate-200/50">
<div className="max-w-xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="font-semibold tracking-tight text-lg text-slate-900" href="#">
                ALEX<span className="text-brand-600">FOR</span>SU
            </a>
<a className="text-xs font-medium bg-slate-900 text-white px-3 py-1.5 rounded-full hover:bg-slate-800 transition-colors" href="#vote">
                Voting Info
            </a>
</div>
</nav>
<main className="max-w-xl mx-auto px-5 pt-24 space-y-16">

<section className="text-center relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-200/50 rounded-full blur-3xl -z-10"></div>
<div className="relative w-32 h-32 mx-auto mb-6 p-1 rounded-full bg-gradient-to-br from-brand-500 to-indigo-500 shadow-glow">
<img alt="Candidate Portrait" className="w-full h-full object-cover rounded-full border-4 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;h=400&amp;q=80"/>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-2">
                Alex Rivera
            </h1>
<p className="text-lg font-medium text-slate-500 mb-1">Running for <span className="text-brand-600">SU President</span></p>
<p className="text-sm text-slate-400 mb-6">3rd Year • Economics &amp; Politics</p>
<p className="text-xl sm:text-2xl font-semibold gradient-text tracking-tight mb-8 max-w-xs mx-auto leading-tight">
                "Your Voice. Real Action. Campus Wide."
            </p>
<div className="flex flex-col gap-3">
<a className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-medium shadow-lg shadow-brand-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2" href="#issue-form">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
                    Tell me your issue
                </a>
<a className="w-full py-3.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-medium transition-all active:scale-[0.98]" href="#manifesto">
                    View Manifesto
                </a>
</div>
</section>

<section className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-soft text-center">
<div className="text-3xl font-semibold text-slate-900 tracking-tight">300+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Issues Raised</div>
</div>
<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-soft text-center">
<div className="text-3xl font-semibold text-slate-900 tracking-tight">2yrs</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Course Rep</div>
</div>
</section>

<section id="manifesto">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-brand-600" icon="solar:document-add-linear" width="24"></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">The Plan</h2>
</div>
<div className="space-y-4">

<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-soft hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-3">
<iconify-icon icon="solar:hamburger-menu-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Affordable Eats</h3>
<p className="text-sm text-slate-500 leading-relaxed">Capping meal deal prices at £3.50 across all campus outlets and extending canteen hours.</p>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-soft hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mb-3">
<iconify-icon icon="solar:heart-pulse-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Mental Health First</h3>
<p className="text-sm text-slate-500 leading-relaxed">Reducing waiting times for counseling services by 50% through partnership expansion.</p>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-soft hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-3">
<iconify-icon icon="solar:library-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">24/7 Library Access</h3>
<p className="text-sm text-slate-500 leading-relaxed">Guaranteeing safe, staffed study spaces around the clock during exam periods.</p>
</div>
</div>
</section>

<section className="scroll-mt-24" id="issue-form">
<div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-40 h-40 bg-brand-500 opacity-20 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-brand-400" icon="solar:megaphone-linear" width="24"></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tight">Speak Up</h2>
</div>
<p className="text-slate-400 text-sm mb-6">What's broken? What needs fixing? I'll bring your issues directly to the Student Union council.</p>
<form className="space-y-4" id="campaignForm" onsubmit="handleFormSubmit(event)">

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Category</label>
<div className="relative">
<select className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:bg-slate-800 appearance-none transition-colors" required="">
<option disabled="" selected="" value="">Select a topic...</option>
<option value="Facilities">Campus Facilities</option>
<option value="Academic">Academic Issues</option>
<option value="Social">Social &amp; Events</option>
<option value="Housing">Housing Support</option>
<option value="Other">Other</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Your Issue</label>
<textarea className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:bg-slate-800 transition-colors resize-none" placeholder="Describe the problem..." required="" rows="3"></textarea>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Email <span className="text-slate-600 lowercase font-normal">(optional)</span></label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:bg-slate-800 transition-colors" placeholder="student@uni.ac.uk" type="email"/>
</div>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="custom-checkbox sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-slate-600 rounded-md transition-colors group-hover:border-slate-500 flex items-center justify-center">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<span className="text-sm text-slate-300 select-none">Submit anonymously</span>
</label>
<button className="w-full py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-medium mt-2 transition-all shadow-lg shadow-brand-900/50 flex items-center justify-center gap-2" type="submit">
<span>Submit Issue</span>
<iconify-icon icon="solar:plain-3-linear" width="20"></iconify-icon>
</button>
</form>

<div className="hidden text-center py-8" id="successMessage">
<div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:check-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Message Received!</h3>
<p className="text-slate-400 text-sm">Thank you for sharing. Your input is shaping our campaign manifesto.</p>
<button className="mt-6 text-sm text-brand-400 hover:text-brand-300 font-medium" onclick="resetForm()">Send another</button>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">About Alex</h2>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft">
<p className="text-slate-600 leading-relaxed mb-6">
                    I've spent the last three years listening to students in lecture halls, coffee shops, and society meetups. I believe the Student Union should be an active force for good, not just a bureaucracy.
                </p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
<iconify-icon icon="solar:user-speak-linear"></iconify-icon> Debating Society Pres
                    </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Peer Mentor
                    </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
<iconify-icon icon="solar:flag-linear"></iconify-icon> NUS Delegate
                    </span>
</div>
</div>
</section>

<section className="pb-12" id="vote">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">How to Vote</h2>
<div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 relative overflow-hidden">
<div className="flex flex-col gap-4 relative z-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center shadow-sm shrink-0 font-bold">1</div>
<div>
<h4 className="font-semibold text-slate-900">Log in to SU Website</h4>
<p className="text-xs text-slate-500 mt-1">Use your standard university login.</p>
</div>
</div>
<div className="w-px h-6 bg-indigo-200 ml-5"></div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center shadow-sm shrink-0 font-bold">2</div>
<div>
<h4 className="font-semibold text-slate-900">Select Alex Rivera</h4>
<p className="text-xs text-slate-500 mt-1">Find the "President" category.</p>
</div>
</div>
<div className="w-px h-6 bg-indigo-200 ml-5"></div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center shadow-sm shrink-0 font-bold">3</div>
<div>
<h4 className="font-semibold text-slate-900">Confirm Vote</h4>
<p className="text-xs text-slate-500 mt-1">Voting closes March 15th at 5PM.</p>
</div>
</div>
</div>
</div>
<div className="mt-4 text-center">
<p className="text-sm font-medium text-slate-900">Voting Dates:</p>
<p className="text-2xl font-semibold tracking-tight text-brand-600">March 12 – 15</p>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 py-12 px-6">
<div className="max-w-xl mx-auto text-center space-y-6">
<div className="flex justify-center gap-6">
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#">
<iconify-icon icon="solar:brand-tiktok-linear" width="24"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="mailto:alex.rivera@uni.ac.uk">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</a>
</div>
<div className="bg-slate-50 p-4 rounded-xl inline-block">
<iconify-icon className="text-slate-800" icon="solar:qr-code-linear" width="48"></iconify-icon>
<p className="text-[10px] text-slate-500 mt-2 uppercase tracking-wide">Scan to share</p>
</div>
<div className="text-xs text-slate-400">
<p>Promoted by Alex Rivera.</p>
<p className="mt-1">Data submitted is used solely for campaign listening.</p>
</div>
</div>
</footer>

<div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
<a className="w-full bg-slate-900/90 backdrop-blur-md text-white py-4 rounded-2xl shadow-2xl font-semibold flex items-center justify-center gap-2 border border-slate-700/50" href="#issue-form">
            Raise Your Issue
            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>



    </>
  );
}
