import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();

    const mergeBtn = document.getElementById('mergeBtn');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    mergeBtn.addEventListener('click', () => {
      toastMessage.textContent = 'Pull request merged successfully! Deploying to staging...';
      toast.classList.remove('opacity-0', 'translate-y-2');
      toast.classList.add('pointer-events-auto');
      
      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        toast.classList.remove('pointer-events-auto');
      }, 4000);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[700px] blur-2xl bg-gradient-to-t from-cyan-500/20 to-transparent pointer-events-none"></div>

<div className="w-full max-w-2xl mx-auto px-4 sm:px-6">

<div className="fade-in mb-6 text-center" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 text-slate-400 text-sm mb-2">
<svg className="lucide lucide-git-branch h-4 w-4" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
<span>zenithcorp/payment-gateway</span>
</div>
<h1 className="text-xl sm:text-2xl font-semibold text-slate-100 tracking-tight">
        feat: implement webhook validation system
      </h1>
<div className="flex items-center justify-center gap-4 mt-3 text-xs text-slate-200">
<span>#1247</span>
<span>•</span>
<span>opened 2 hours ago by @sarah-dev</span>
</div>
</div>

<div className="fade-in border border-slate-700 rounded-xl bg-gradient-to-b from-slate-900/80 to-slate-800/60 backdrop-blur-md shadow-xl" style={{animationDelay: '0.2s'}}>

<div className="flex flex-col sm:flex-row sm:items-center gap-3 px-4 sm:px-6 py-4 border-b border-slate-700/70">
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle h-5 w-5 text-emerald-500 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<h2 className="text-sm font-medium text-slate-100">All checks have passed</h2>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400 sm:ml-auto">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Completed in 6m 42s</span>
</div>
</div>

<div className="divide-y divide-slate-700/70">

<div className="fade-in flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-4 text-sm gap-3" style={{animationDelay: '0.3s'}}>
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
<div className="flex flex-col">
<span className="text-slate-200 font-medium">Integration Tests</span>
<span className="text-xs text-slate-400">1,247 tests passed</span>
</div>
</div>
<div className="flex items-center gap-3 sm:gap-5">
<span className="text-xs font-medium text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 rounded px-2 py-1 whitespace-nowrap">
<svg className="lucide lucide-check h-3 w-3 inline mr-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Passed in 5m 12s
            </span>
<a className="text-xs text-slate-400 hover:text-slate-200 uppercase tracking-wide transition-colors" href="#">Details</a>
</div>
</div>

<div className="fade-in flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-4 text-sm gap-3" style={{animationDelay: '0.4s'}}>
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
<div className="flex flex-col">
<span className="text-slate-200 font-medium">Production Build</span>
<span className="text-xs text-slate-400">Docker image: zenith/api:v2.4.1</span>
</div>
</div>
<div className="flex items-center gap-3 sm:gap-5">
<span className="text-xs font-medium text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 rounded px-2 py-1 whitespace-nowrap">
<svg className="lucide lucide-check h-3 w-3 inline mr-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Built in 42s
            </span>
<a className="text-xs text-slate-400 hover:text-slate-200 uppercase tracking-wide transition-colors" href="#">Details</a>
</div>
</div>

<div className="fade-in flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-4 text-sm gap-3" style={{animationDelay: '0.5s'}}>
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
<div className="flex flex-col">
<span className="text-slate-200 font-medium">Security Scan / CodeQL</span>
<span className="text-xs text-slate-400">No vulnerabilities detected</span>
</div>
</div>
<div className="flex items-center gap-3 sm:gap-5">
<span className="text-xs font-medium text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 rounded px-2 py-1 whitespace-nowrap">
<svg className="lucide lucide-shield-check h-3 w-3 inline mr-1" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Secure in 30s
            </span>
<a className="text-xs text-slate-400 hover:text-slate-200 uppercase tracking-wide transition-colors" href="#">Details</a>
</div>
</div>

<div className="fade-in flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-4 text-sm gap-3" style={{animationDelay: '0.6s'}}>
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
<div className="flex flex-col">
<span className="text-slate-200 font-medium">Code Coverage</span>
<span className="text-xs text-slate-400">94.7% coverage (+2.1%)</span>
</div>
</div>
<div className="flex items-center gap-3 sm:gap-5">
<span className="text-xs font-medium text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 rounded px-2 py-1 whitespace-nowrap">
<svg className="lucide lucide-trending-up h-3 w-3 inline mr-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
              Analyzed in 1m 18s
            </span>
<a className="text-xs text-slate-400 hover:text-slate-200 uppercase tracking-wide transition-colors" href="#">Details</a>
</div>
</div>

<div className="fade-in flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-4 text-sm gap-3" style={{animationDelay: '0.7s'}}>
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
<div className="flex flex-col">
<span className="text-slate-200 font-medium">Performance Tests</span>
<span className="text-xs text-slate-400">Response time: 127ms avg</span>
</div>
</div>
<div className="flex items-center gap-3 sm:gap-5">
<span className="text-xs font-medium text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 rounded px-2 py-1 whitespace-nowrap">
<svg className="lucide lucide-zap h-3 w-3 inline mr-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              Optimized in 45s
            </span>
<a className="text-xs text-slate-400 hover:text-slate-200 uppercase tracking-wide transition-colors" href="#">Details</a>
</div>
</div>
</div>

<div className="fade-in flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-4 border-t border-slate-700/70 gap-3" style={{animationDelay: '0.8s'}}>
<button className="inline-flex items-center justify-center gap-2 text-emerald-400 hover:text-emerald-300 hover:border-emerald-400/50 border border-emerald-400/30 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/20" id="mergeBtn">
<svg className="lucide lucide-git-merge h-4 w-4" data-lucide="git-merge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg>
          Merge pull request
        </button>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 text-xs font-medium transition-colors" href="#">
<svg className="lucide lucide-terminal h-3.5 w-3.5" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
            Open in CLI
          </a>
<a className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 text-xs font-medium transition-colors" href="#">
<svg className="lucide lucide-eye h-3.5 w-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
            View diff
            <svg className="lucide lucide-external-link h-3 w-3" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</div>
</div>

<div className="fade-in mt-6 flex items-center justify-center gap-6 text-xs text-slate-200" style={{animationDelay: '0.9s'}}>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
<span>Ready to merge</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users h-3.5 w-3.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>2 approvals</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-message-circle h-3.5 w-3.5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<span>0 conflicts</span>
</div>
</div>
</div>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-700 text-slate-100 text-sm rounded-lg px-4 py-3 opacity-0 pointer-events-none transition-all duration-300 transform translate-y-2 shadow-xl" id="toast">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle h-4 w-4 text-emerald-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span id="toast-message">Pull request merged successfully!</span>
</div>
</div>


    </>
  );
}
