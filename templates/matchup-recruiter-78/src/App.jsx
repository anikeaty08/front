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



        // Main Navigation
        function switchView(view) {
            document.querySelectorAll('.view-content').forEach(el => el.classList.remove('active'));
            document.getElementById('view-' + view).classList.add('active');
            
            const btnStudent = document.getElementById('btn-student');
            const btnRecruiter = document.getElementById('btn-recruiter');
            const activeClass = ['bg-white', 'text-slate-900', 'shadow-sm', 'ring-1', 'ring-black/5'];
            const inactiveClass = ['text-slate-500', 'hover:text-slate-900', 'bg-transparent', 'shadow-none', 'ring-0'];
            
            btnStudent.classList.remove(...activeClass);
            btnStudent.classList.add(...inactiveClass);
            btnRecruiter.classList.remove(...activeClass);
            btnRecruiter.classList.add(...inactiveClass);

            if (view === 'student') {
                btnStudent.classList.remove(...inactiveClass);
                btnStudent.classList.add(...activeClass);
            } else if (view === 'recruiter') {
                btnRecruiter.classList.remove(...inactiveClass);
                btnRecruiter.classList.add(...activeClass);
            }
            window.scrollTo(0,0);
        }

        // Recruiter Internal Navigation
        function showRecruiterSection(sectionId) {
            document.querySelectorAll('.recruiter-section').forEach(el => el.classList.remove('active'));
            document.getElementById('recruiter-' + sectionId).classList.add('active');
        }

        // Modified: Now accepts title to update the UI dynamically
        function showRecruiterOfferDetails(jobTitle) {
            if(jobTitle) {
                document.getElementById('detail-title').textContent = jobTitle;
            }
            showRecruiterSection('offer-details');
        }

        function openCandidateModal() {
            document.getElementById('candidate-modal').classList.add('open');
        }

        function closeCandidateModal() {
            document.getElementById('candidate-modal').classList.remove('open');
        }

        // Logic for handling multiple cards (Student Side)
        function animateSwipe(direction) {
            const cards = document.querySelectorAll('.swipe-card');
            if (cards.length === 0) return;

            const currentCard = cards[cards.length - 1]; 

            if (direction === 'left') currentCard.classList.add('swiping-left');
            if (direction === 'right') currentCard.classList.add('swiping-right');
            if (direction === 'save') currentCard.classList.add('swiping-save');

            setTimeout(() => {
                currentCard.remove();
                checkStackEmpty();
            }, 300);
        }

        function checkStackEmpty() {
            const remainingCards = document.querySelectorAll('.swipe-card');
            if (remainingCards.length === 0) {
                // Show limit message
                const limitMsg = document.getElementById('limit-message');
                limitMsg.classList.add('visible');
                // Hide actions buttons
                document.querySelector('.z-40.flex.items-center.gap-4').style.display = 'none';
            }
        }

        // Profile Page Scripts (Student Side)
        function toggleChip(element) { element.classList.toggle('selected'); }
        function toggleSelection(element) { element.classList.toggle('selected'); }
        function setLocation(element) {
            let siblings = element.parentNode.children;
            for(let sib of siblings) {
                sib.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
                sib.classList.add('text-slate-500');
            }
            element.classList.remove('text-slate-500');
            element.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
        }
    
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
      

<nav className="sticky top-0 z-50 w-full border-b backdrop-blur-md border-slate-200 bg-white/80">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer" onclick="switchView('student')">
<div className="relative flex h-8 w-14 items-center justify-center">
<div className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white ring-2 ring-white">
<iconify-icon icon="solar:square-academic-cap-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-orange-500"></div>
<div className="absolute right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white ring-2 ring-white">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
</div>
<div className="flex flex-col leading-none">
<span className="font-bold tracking-tight text-slate-900 text-lg">Match<span className="text-orange-500">Up</span></span>
<span className="text-[9px] font-medium tracking-wide text-slate-400 uppercase">Students &amp; Companies</span>
</div>
</div>
<div className="flex items-center gap-2 rounded-full border p-1 border-slate-200 bg-slate-50">
<button className="rounded-full px-4 py-1.5 text-xs font-medium shadow-sm ring-1 transition-all bg-white text-slate-900 ring-black/5" id="btn-student" onclick="switchView('student')">Student</button>
<button className="transition-all hover:text-slate-900 text-xs font-medium text-slate-500 rounded-full px-4 py-1.5" id="btn-recruiter" onclick="switchView('recruiter')">Recruiter</button>
</div>
<div className="hidden md:flex items-center gap-4">
<button className="group relative h-9 w-9 overflow-hidden rounded-full border bg-slate-100 border-slate-200 transition-all hover:ring-2 hover:ring-blue-100 hover:ring-offset-1" onclick="switchView('profile')">
<img alt="User" className="h-full w-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</button>
</div>
</div>
</div>
</nav>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-64px)]">

<div className="view-content active h-full" id="view-student">
<div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-12">

<div className="hidden lg:col-span-3 lg:block space-y-6">
<div className="rounded-xl border p-6 shadow-sm border-slate-200 bg-white">
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 overflow-hidden rounded-full ring-2 shadow-sm bg-blue-50 ring-white">
<img alt="Profile" className="h-full w-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Alex Chen</h4>
<p className="text-xs text-slate-500">Computer Science, MIT</p>
</div>
</div>
<div className="space-y-2">
<button className="flex w-full items-center justify-between rounded-lg border p-2.5 text-xs font-medium transition-colors hover:bg-slate-50 border-slate-200 text-slate-700" onclick="switchView('profile')">
<span className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:user-circle-linear" width="16"></iconify-icon>
                                    My Profile
                                </span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</button>
<button className="flex w-full items-center justify-between rounded-lg border p-2.5 text-xs font-medium transition-colors hover:bg-slate-50 border-slate-200 text-slate-700" onclick="switchView('profile')">
<span className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:file-text-linear" width="16"></iconify-icon>
                                    My Resume
                                </span>
<span className="flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
</button>
</div>
</div>
</div>

<div className="lg:col-span-6 flex flex-col h-full relative items-center justify-center min-h-[500px]">
<div className="card-stack relative h-[480px] w-full max-w-[360px]">

<div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border p-6 text-center border-slate-200 bg-white" id="limit-message">
<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-600">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-slate-900">Daily Limit Reached</h3>
<p className="mb-6 text-sm text-slate-500">You've viewed your 5 free matches for today. Upgrade to view unlimited opportunities.</p>
<button className="w-full rounded-lg bg-slate-900 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-all">
                                Subscribe to Free-Limit Plan
                            </button>
<button className="mt-4 text-xs font-medium text-slate-400 hover:text-slate-600">Maybe later</button>
</div>

<div className="swipe-card z-10 w-full h-full rounded-2xl border shadow-lg overflow-hidden flex flex-col border-slate-200 bg-white">
<div className="h-32 w-full bg-gradient-to-br p-6 flex justify-between items-start from-red-50 to-pink-50">
<div className="h-14 w-14 rounded-xl shadow-sm border flex items-center justify-center text-xl font-bold bg-white border-red-100 text-[#FF5A5F]">
<iconify-icon icon="solar:home-smile-bold" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-1 rounded-full backdrop-blur px-3 py-1.5 text-xs font-semibold shadow-sm border bg-white/80 text-red-600 border-red-100">88% Match</div>
</div>
<div className="p-6">
<h2 className="text-2xl font-semibold text-slate-900">Mobile Developer</h2>
<p className="text-sm text-slate-500 mt-1">Airbnb • San Francisco (Remote)</p>
<div className="mt-6">
<h3 className="text-xs font-semibold uppercase tracking-wider mb-2 text-slate-400">Requirements</h3>
<div className="flex flex-wrap gap-2">
<span className="badge bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">React Native</span>
<span className="badge bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">iOS</span>
</div>
</div>
</div>
</div>

<div className="swipe-card z-20 w-full h-full rounded-2xl border shadow-lg overflow-hidden flex flex-col border-slate-200 bg-white">
<div className="h-32 w-full bg-gradient-to-br p-6 flex justify-between items-start from-emerald-50 to-teal-50">
<div className="h-14 w-14 rounded-xl shadow-sm border flex items-center justify-center text-xl font-bold bg-slate-900 border-slate-800 text-white">
<iconify-icon icon="solar:asteroid-bold" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-1 rounded-full backdrop-blur px-3 py-1.5 text-xs font-semibold shadow-sm border bg-white/80 text-emerald-600 border-emerald-100">91% Match</div>
</div>
<div className="p-6">
<h2 className="text-2xl font-semibold text-slate-900">Research Intern</h2>
<p className="text-sm text-slate-500 mt-1">OpenAI • San Francisco</p>
<div className="mt-6">
<h3 className="text-xs font-semibold uppercase tracking-wider mb-2 text-slate-400">Requirements</h3>
<div className="flex flex-wrap gap-2">
<span className="badge bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">Python</span>
<span className="badge bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">PyTorch</span>
<span className="badge bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">ML</span>
</div>
</div>
</div>
</div>

<div className="swipe-card z-30 w-full h-full rounded-2xl border shadow-lg overflow-hidden flex flex-col border-slate-200 bg-white">
<div className="h-32 w-full bg-gradient-to-br p-6 flex justify-between items-start from-purple-50 to-indigo-50">
<div className="h-14 w-14 rounded-xl shadow-sm border flex items-center justify-center text-xl font-bold bg-white border-purple-100 text-purple-600">
<iconify-icon icon="solar:layers-minimalistic-bold" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-1 rounded-full backdrop-blur px-3 py-1.5 text-xs font-semibold shadow-sm border bg-white/80 text-purple-600 border-purple-100">94% Match</div>
</div>
<div className="p-6">
<h2 className="text-2xl font-semibold text-slate-900">Backend Engineer</h2>
<p className="text-sm text-slate-500 mt-1">Linear • Remote</p>
<div className="mt-6">
<p className="text-sm text-slate-600 mb-4">Join the team building the standard for modern software development.</p>
<div className="flex flex-wrap gap-2">
<span className="badge bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">Node.js</span>
<span className="badge bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">GraphQL</span>
<span className="badge bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">PostgreSQL</span>
</div>
</div>
</div>
</div>

<div className="swipe-card z-40 w-full h-full rounded-2xl border shadow-lg overflow-hidden flex flex-col border-slate-200 bg-white">
<div className="h-32 w-full bg-gradient-to-br relative p-6 flex justify-between items-start from-blue-50 to-indigo-50">
<div className="h-14 w-14 rounded-xl flex items-center justify-center font-bold text-xl shadow-sm bg-slate-900 text-white">S</div>
<div className="flex items-center gap-1 rounded-full backdrop-blur px-3 py-1.5 text-xs font-semibold shadow-sm bg-white/80 text-blue-600">
                                    92% Match
                                </div>
</div>
<div className="p-6">
<h2 className="text-2xl font-semibold text-slate-900">Product Design Intern</h2>
<p className="text-sm text-slate-500 mt-1">Stripe • New York</p>
<div className="mt-6">
<h3 className="text-xs font-semibold uppercase tracking-wider mb-2 text-slate-400">Match Analysis</h3>
<p className="text-sm text-slate-600 mb-4">Your portfolio demonstrates strong <span className="text-blue-600 font-medium">system thinking</span> which aligns with our Payments team.</p>
<div className="flex flex-wrap gap-2">
<span className="badge bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">Figma</span>
<span className="badge bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">UI/UX</span>
</div>
</div>
</div>
</div>

<div className="swipe-card z-50 w-full h-full rounded-2xl border shadow-xl overflow-hidden flex flex-col border-slate-200 bg-white">
<div className="h-32 w-full bg-gradient-to-br relative p-6 flex justify-between items-start from-orange-50 to-amber-50">
<div className="h-14 w-14 rounded-xl shadow-sm border flex items-center justify-center text-xl font-bold bg-white border-orange-100 text-slate-900">
<iconify-icon icon="solar:triangle-bold" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-1 rounded-full backdrop-blur px-3 py-1.5 text-xs font-semibold shadow-sm border bg-white/80 text-orange-600 border-orange-100">
<iconify-icon icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
                                    98% Match
                                </div>
</div>
<div className="flex-1 p-6 flex flex-col">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Frontend Engineer</h2>
<div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
<span className="font-medium text-slate-900">Vercel</span>
<span>•</span>
<span>Remote</span>
<span>•</span>
<span>$40-60/hr</span>
</div>
</div>
<div className="mt-6 space-y-4">
<div>
<h3 className="text-xs font-semibold uppercase tracking-wider mb-2 text-slate-400">AI Match Analysis</h3>
<p className="leading-relaxed text-sm text-slate-600">
                                            Your <span className="text-orange-600 font-medium">React</span> and <span className="text-orange-600 font-medium">Next.js</span> projects make you a top candidate. They value your Tailwind styling experience.
                                        </p>
</div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center text-xs font-medium rounded-md px-2.5 py-1.5 text-slate-700 bg-slate-100">React</span>
<span className="inline-flex items-center text-xs font-medium rounded-md px-2.5 py-1.5 text-slate-700 bg-slate-100">TypeScript</span>
<span className="inline-flex items-center text-xs font-medium border rounded-md px-2.5 py-1.5 text-orange-700 bg-orange-50 border-orange-100">Next.js</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 flex items-center gap-4 z-40">

<div className="flex flex-col items-center gap-2">
<button className="group flex h-14 w-14 items-center justify-center rounded-full border shadow-sm hover:scale-105 transition-all duration-200 border-slate-200 bg-white hover:border-red-200 hover:bg-red-50 text-slate-400 hover:text-red-500" onclick="animateSwipe('left')">
<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
<span className="text-[10px] font-medium text-slate-400 tracking-wide uppercase">Skip</span>
</div>

<div className="flex flex-col items-center gap-2 translate-y-2">
<button className="group flex h-12 w-12 items-center justify-center rounded-full border shadow-sm hover:scale-105 transition-all duration-200 border-slate-200 bg-white hover:border-orange-200 hover:bg-orange-50 text-slate-400 hover:text-orange-500" onclick="animateSwipe('save')">
<iconify-icon icon="solar:bookmark-linear" width="24"></iconify-icon>
</button>
<span className="text-[10px] font-medium text-slate-400 tracking-wide uppercase">Save</span>
</div>

<div className="flex flex-col items-center gap-2">
<button className="group flex h-14 w-14 items-center justify-center rounded-full shadow-lg hover:scale-105 transition-all duration-200 bg-slate-900 text-white shadow-slate-200 hover:bg-blue-600 hover:shadow-blue-200" onclick="animateSwipe('right')">
<iconify-icon icon="solar:heart-linear" width="28"></iconify-icon>
</button>
<span className="text-[10px] font-medium text-slate-400 tracking-wide uppercase">Match</span>
</div>
</div>
</div>

<div className="hidden lg:col-span-3 lg:block">
<div className="rounded-xl border p-5 shadow-sm h-fit border-slate-200 bg-white">
<h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-slate-400">Activity</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
<iconify-icon icon="solar:heart-bold" width="12"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-600"><span className="font-medium text-slate-900">Linear</span> liked your profile</p>
<p className="text-[10px] text-slate-400">2 mins ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
<iconify-icon icon="solar:eye-bold" width="12"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-600">Your profile was viewed by <span className="font-medium text-slate-900">Spotify</span></p>
<p className="text-[10px] text-slate-400">1 hour ago</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-content" id="view-recruiter">

<div className="recruiter-section active" id="recruiter-dashboard">
<div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Recruitment Board</h1>
<p className="mt-1 text-sm text-slate-500">Manage your active job listings and view matches.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-slate-800 transition-all" onclick="showRecruiterSection('create')">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon> Post New Job
                    </button>
</div>

<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-slate-300 hover:shadow-md">
<div className="p-5">
<div className="mb-4 flex items-start justify-between">
<div className="rounded-lg border border-slate-100 bg-slate-50 p-2 text-purple-600">
<iconify-icon icon="solar:layers-minimalistic-bold" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-700 ring-1 ring-inset ring-green-600/10">Active</span>
</div>
<h3 className="font-semibold text-slate-900">Backend Engineer Intern</h3>
<div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
<span>Remote</span>
<span>•</span>
<span>6 months</span>
</div>
<div className="mt-6 flex items-center divide-x divide-slate-100 border-t border-slate-100 pt-4">
<div className="pr-4 text-center">
<p className="text-xs text-slate-500">Applicants</p>
<p className="mt-0.5 text-lg font-bold text-slate-900">32</p>
</div>
<div className="px-4 text-center">
<p className="text-xs text-slate-500">Matches</p>
<p className="mt-0.5 text-lg font-bold text-emerald-600">8</p>
</div>
</div>
</div>
<div className="mt-auto bg-slate-50 p-3">
<button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all" onclick="showRecruiterOfferDetails('Backend Engineer Intern')">
                                View Candidates
                                <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-slate-300 hover:shadow-md">
<div className="p-5">
<div className="mb-4 flex items-start justify-between">
<div className="rounded-lg border border-slate-100 bg-slate-50 p-2 text-pink-600">
<iconify-icon icon="solar:paint-palette-bold" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-700 ring-1 ring-inset ring-green-600/10">Active</span>
</div>
<h3 className="font-semibold text-slate-900">Product Designer</h3>
<div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
<span>New York</span>
<span>•</span>
<span>Summer 2024</span>
</div>
<div className="mt-6 flex items-center divide-x divide-slate-100 border-t border-slate-100 pt-4">
<div className="pr-4 text-center">
<p className="text-xs text-slate-500">Applicants</p>
<p className="mt-0.5 text-lg font-bold text-slate-900">145</p>
</div>
<div className="px-4 text-center">
<p className="text-xs text-slate-500">Matches</p>
<p className="mt-0.5 text-lg font-bold text-emerald-600">12</p>
</div>
</div>
</div>
<div className="mt-auto bg-slate-50 p-3">
<button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all" onclick="showRecruiterOfferDetails('Product Designer')">
                                View Candidates
                                <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 transition-all hover:border-slate-300">
<div className="p-5 opacity-75">
<div className="mb-4 flex items-start justify-between">
<div className="rounded-lg border border-slate-100 bg-white p-2 text-orange-600">
<iconify-icon icon="solar:megaphone-bold" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">Closed</span>
</div>
<h3 className="font-semibold text-slate-900">Marketing Associate</h3>
<div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
<span>London</span>
<span>•</span>
<span>Full-time</span>
</div>
<div className="mt-6 flex items-center divide-x divide-slate-200 border-t border-slate-200 pt-4">
<div className="pr-4 text-center">
<p className="text-xs text-slate-500">Applicants</p>
<p className="mt-0.5 text-lg font-bold text-slate-900">89</p>
</div>
<div className="px-4 text-center">
<p className="text-xs text-slate-500">Hired</p>
<p className="mt-0.5 text-lg font-bold text-slate-900">1</p>
</div>
</div>
</div>
<div className="mt-auto bg-slate-100 p-3">
<button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2 text-xs font-medium text-slate-400 cursor-not-allowed">
                                View History
                            </button>
</div>
</div>
</div>
</div>

<div className="recruiter-section" id="recruiter-create">
<div className="mx-auto max-w-2xl">
<button className="mb-6 flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="showRecruiterSection('dashboard')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Dashboard
                    </button>
<div className="rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm">
<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-400">
<iconify-icon icon="solar:ruler-pen-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900">Create New Job</h3>
<p className="text-sm text-slate-500">This form is under construction.</p>
<button className="mt-6 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800" onclick="showRecruiterSection('dashboard')">Go Back</button>
</div>
</div>
</div>

<div className="recruiter-section" id="recruiter-offer-details">

<div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<div className="flex items-center gap-4">
<button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-900 transition-all" onclick="showRecruiterSection('dashboard')">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<div>
<h1 className="text-xl font-semibold text-slate-900" id="detail-title">Backend Engineer Intern</h1>
<p className="text-xs text-slate-500">Matches are sorted by compatibility score.</p>
</div>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50">
<iconify-icon icon="solar:filter-linear"></iconify-icon> Filters
                        </button>
<button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50">
<iconify-icon icon="solar:export-linear"></iconify-icon> Export CSV
                        </button>
</div>
</div>

<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 text-xs uppercase text-slate-500 border-b border-slate-200">
<tr>
<th className="px-6 py-3 font-medium tracking-wider">Candidate</th>
<th className="px-6 py-3 font-medium tracking-wider">Match Score</th>
<th className="px-6 py-3 font-medium tracking-wider">Skills &amp; Experience</th>
<th className="px-6 py-3 font-medium tracking-wider">Status</th>
<th className="px-6 py-3 font-medium tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 bg-white">

<tr className="group hover:bg-slate-50/80 transition-colors cursor-pointer" onclick="openCandidateModal()">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200">
<img alt="" className="h-full w-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
<div>
<div className="font-medium text-slate-900">Alex Chen</div>
<div className="text-xs text-slate-500">MIT • Computer Science</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
<iconify-icon icon="solar:magic-stick-3-linear" width="12"></iconify-icon>
                                                98%
                                            </span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex flex-wrap gap-1.5">
<span className="inline-flex rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">Node.js</span>
<span className="inline-flex rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">AWS</span>
<span className="inline-flex rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">Python</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">New Applicant</span>
</td>
<td className="px-6 py-4 text-right">
<button className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50/80 transition-colors cursor-pointer" onclick="openCandidateModal()">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200">
<img alt="" className="h-full w-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Sarah"/>
</div>
<div>
<div className="font-medium text-slate-900">Sarah Miller</div>
<div className="text-xs text-slate-500">Stanford • Software Eng</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
<iconify-icon icon="solar:magic-stick-3-linear" width="12"></iconify-icon>
                                                94%
                                            </span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex flex-wrap gap-1.5">
<span className="inline-flex rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">PostgreSQL</span>
<span className="inline-flex rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">Go</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-full bg-orange-50 px-2 py-1 text-[10px] font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10">Interviewing</span>
</td>
<td className="px-6 py-4 text-right">
<button className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50/80 transition-colors cursor-pointer" onclick="openCandidateModal()">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200">
<img alt="" className="h-full w-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=David"/>
</div>
<div>
<div className="font-medium text-slate-900">David Kim</div>
<div className="text-xs text-slate-500">Berkeley • EECS</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-amber-100 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
<iconify-icon icon="solar:bolt-linear" width="12"></iconify-icon>
                                                82%
                                            </span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex flex-wrap gap-1.5">
<span className="inline-flex rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">Java</span>
<span className="inline-flex rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">Spring</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">Reviewed</span>
</td>
<td className="px-6 py-4 text-right">
<button className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50/80 transition-colors cursor-pointer" onclick="openCandidateModal()">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200 grayscale opacity-70">
<img alt="" className="h-full w-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Maria"/>
</div>
<div>
<div className="font-medium text-slate-500">Maria Garcia</div>
<div className="text-xs text-slate-400">NYU • Information Sys</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500">
                                                45%
                                            </span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex flex-wrap gap-1.5">
<span className="inline-flex rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-400">HTML</span>
<span className="inline-flex rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-400">CSS</span>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500 ring-1 ring-inset ring-slate-500/10">Rejected</span>
</td>
<td className="px-6 py-4 text-right">
<button className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="view-content" id="view-profile">
<div className="mb-8 flex items-center justify-between">
<div>
<button className="mb-2 flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="switchView('student')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Feed
                    </button>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">My Profile</h1>
<p className="mt-1 text-sm text-slate-500">Manage your CV and matching preferences.</p>
</div>
<button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors">
                    Save Changes
                </button>
</div>
<div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

<div className="lg:col-span-4 space-y-6">

<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex flex-col items-center text-center">
<div className="relative mb-4 group cursor-pointer">
<div className="h-24 w-24 overflow-hidden rounded-full ring-4 ring-slate-50">
<img alt="Profile" className="h-full w-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
<div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
<iconify-icon className="text-white" icon="solar:camera-linear" width="24"></iconify-icon>
</div>
</div>
<h2 className="text-lg font-semibold text-slate-900">Alex Chen</h2>
<p className="text-sm text-slate-500">alex.chen@mit.edu</p>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-sm font-semibold text-slate-900">Resume / CV</h3>
<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Uploaded</span>
</div>

<div className="group relative mb-4 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white shadow-sm">
<iconify-icon className="text-orange-500" icon="solar:file-text-bold" width="20"></iconify-icon>
</div>
<div className="min-w-0 flex-1">
<p className="truncate text-xs font-medium text-slate-900">Alex_Chen_CV_2024.pdf</p>
<p className="text-[10px] text-slate-500">1.2 MB • PDF</p>
</div>
<button className="text-slate-400 hover:text-red-500 transition-colors">
<iconify-icon icon="solar:trash-bin-linear" width="16"></iconify-icon>
</button>
</div>

<div className="relative">
<input className="hidden" id="cv-upload" type="file"/>
<label className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 py-3 text-xs font-medium text-slate-600 transition-all hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700" htmlFor="cv-upload">
<iconify-icon icon="solar:upload-linear" width="14"></iconify-icon>
                                Replace Resume
                            </label>
<p className="mt-2 text-center text-[10px] text-slate-400">Supported: PDF, DOCX (Max 5MB)</p>
</div>
</div>
</div>

<div className="lg:col-span-8 space-y-6">
<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<h3 className="mb-6 text-sm font-semibold text-slate-900 border-b border-slate-100 pb-2">Professional Preferences</h3>

<div className="mb-8">
<label className="mb-3 block text-xs font-medium text-slate-700">Interested Areas</label>
<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
<button className="select-card selected flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-left transition-all hover:border-slate-300" onclick="toggleSelection(this)">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-blue-100 text-blue-600">
<iconify-icon icon="solar:code-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-700">IT / Product</span>
</button>
<button className="select-card flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-left transition-all hover:border-slate-300" onclick="toggleSelection(this)">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-purple-100 text-purple-600">
<iconify-icon icon="solar:graph-new-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-700">Data / Analytics</span>
</button>
<button className="select-card flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-left transition-all hover:border-slate-300" onclick="toggleSelection(this)">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-green-100 text-green-600">
<iconify-icon icon="solar:hand-money-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-700">Finance</span>
</button>
<button className="select-card flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-left transition-all hover:border-slate-300" onclick="toggleSelection(this)">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-orange-100 text-orange-600">
<iconify-icon icon="solar:megaphone-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-700">Marketing</span>
</button>
<button className="select-card flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-left transition-all hover:border-slate-300" onclick="toggleSelection(this)">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-pink-100 text-pink-600">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-700">HR</span>
</button>
<button className="select-card flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-left transition-all hover:border-slate-300" onclick="toggleSelection(this)">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-slate-100 text-slate-600">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-700">Other</span>
</button>
</div>
</div>

<div className="mb-8">
<label className="mb-3 block text-xs font-medium text-slate-700">What matters to you?</label>
<div className="flex flex-wrap gap-2">
<button className="select-chip selected rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:border-slate-300" onclick="toggleChip(this)">Innovation</button>
<button className="select-chip rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:border-slate-300" onclick="toggleChip(this)">Diversity &amp; Inclusion</button>
<button className="select-chip selected rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:border-slate-300" onclick="toggleChip(this)">Work-life balance</button>
<button className="select-chip rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:border-slate-300" onclick="toggleChip(this)">Sustainability</button>
<button className="select-chip rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:border-slate-300" onclick="toggleChip(this)">Transparency</button>
<button className="select-chip selected rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:border-slate-300" onclick="toggleChip(this)">Learning &amp; Development</button>
<button className="select-chip rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:border-slate-300" onclick="toggleChip(this)">Team Spirit</button>
</div>
</div>

<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div>
<label className="mb-3 block text-xs font-medium text-slate-700">Monthly Salary Expectation</label>
<div className="px-1">
<div className="mb-2 flex items-center justify-between text-xs text-slate-500">
<span>500€</span>
<span className="font-semibold text-orange-600">800€ - 1200€</span>
<span>2500€+</span>
</div>
<input className="h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="2500" min="500" type="range" value="1000"/>
</div>
</div>
<div>
<label className="mb-3 block text-xs font-medium text-slate-700">Preferred Location</label>
<div className="flex rounded-lg border border-slate-200 bg-slate-50 p-1">
<button className="flex-1 rounded-md bg-white py-1.5 text-xs font-medium text-slate-900 shadow-sm transition-all" onclick="setLocation(this)">Madrid</button>
<button className="flex-1 rounded-md py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-all" onclick="setLocation(this)">Remote</button>
<button className="flex-1 rounded-md py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-all" onclick="setLocation(this)">Hybrid</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="modal-backdrop fixed inset-0 z-[100] items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm" id="candidate-modal">
<div className="relative w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-2xl">
<div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-6 py-4">
<h3 className="text-sm font-semibold text-slate-900">Candidate Profile</h3>
<button className="text-slate-400 hover:text-slate-600" onclick="closeCandidateModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="max-h-[80vh] overflow-y-auto p-6">

<div className="flex items-start gap-4 mb-6">
<img alt="Profile" className="h-16 w-16 rounded-full border border-slate-200" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
<div>
<div className="flex items-center gap-2">
<h2 className="text-lg font-semibold text-slate-900">Alex Chen</h2>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">98% Match</span>
</div>
<p className="text-sm text-slate-500">Computer Science • MIT</p>
<div className="mt-2 flex gap-2">
<span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">Remote / Madrid</span>
<span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">Start: Immediate</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Skills</h4>
<div className="flex flex-wrap gap-2">
<span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">React</span>
<span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">Node.js</span>
<span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">TypeScript</span>
</div>
<h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">AI Match Summary</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                            Alex is a strong match due to his experience with <span className="font-medium text-slate-900">Node.js</span> frameworks. His portfolio aligns with your current stack.
                        </p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Documents</h4>
<div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50 cursor-pointer transition-colors">
<iconify-icon className="text-red-500" icon="solar:file-text-bold" width="20"></iconify-icon>
<div className="flex-1">
<p className="text-xs font-medium text-slate-900">Resume_Alex_Chen.pdf</p>
<p className="text-[10px] text-slate-400">2.4 MB</p>
</div>
<iconify-icon className="text-slate-400" icon="solar:download-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="border-t border-slate-100 bg-slate-50 px-6 py-4 flex justify-end gap-3">
<button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm hover:bg-slate-50" onclick="closeCandidateModal()">Close</button>
<button className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-slate-800">Schedule Interview</button>
</div>
</div>
</div>


    </>
  );
}
