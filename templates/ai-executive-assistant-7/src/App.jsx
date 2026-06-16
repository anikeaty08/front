import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Auth State Toggle (Sign In / Sign Up)
        let isSignUp = false;

        function toggleAuthMode() {
            isSignUp = !isSignUp;
            
            const title = document.getElementById('auth-title');
            const subtitle = document.getElementById('auth-subtitle');
            const nameField = document.getElementById('name-field');
            const forgotLink = document.getElementById('forgot-link');
            const toggleText = document.getElementById('toggle-text');
            const label = document.getElementById('auth-mode-label');

            if (isSignUp) {
                // Switch to Sign Up
                title.innerText = "Create an account";
                subtitle.innerText = "Begin your journey with Axl intelligence.";
                nameField.classList.remove('hidden');
                forgotLink.classList.add('hidden');
                label.innerText = "Sign Up";
                toggleText.innerHTML = 'Already have an account? <button type="button" onclick="toggleAuthMode()" class="ml-1 text-white hover:text-orange-400 transition-colors font-medium focus:outline-none">Sign in</button>';
            } else {
                // Switch to Sign In
                title.innerText = "Welcome back";
                subtitle.innerText = "Enter your credentials to access the workspace.";
                nameField.classList.add('hidden');
                forgotLink.classList.remove('hidden');
                label.innerText = "Sign In";
                toggleText.innerHTML = 'Don\'t have an account? <button type="button" onclick="toggleAuthMode()" class="ml-1 text-white hover:text-orange-400 transition-colors font-medium focus:outline-none">Create an account</button>';
            }
        }

        // Dashboard Transition
        function switchView() {
            const loginView = document.getElementById('login-view');
            const dashboardView = document.getElementById('dashboard-view');
            const mainContainer = document.getElementById('main-container');

            // Animate Login Out
            loginView.style.opacity = '0';
            loginView.style.transform = 'translateY(-20px)';
            loginView.style.pointerEvents = 'none';

            // Wait briefly then show dashboard
            setTimeout(() => {
                loginView.style.display = 'none';
                dashboardView.style.display = 'flex';
                dashboardView.style.pointerEvents = 'auto';
                
                requestAnimationFrame(() => {
                    dashboardView.style.opacity = '1';
                });

                playAlarmVisual();
            }, 500);
        }

        function playAlarmVisual() {
            const alarmCard = document.querySelector('.bg-gradient-to-r');
            alarmCard.classList.add('animate-pulse');
            setTimeout(() => {
                alarmCard.classList.remove('animate-pulse');
            }, 2000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-orange-900/20 rounded-full blur-[120px]"></div>
<div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-slate-800/20 rounded-full blur-[100px]"></div>
</div>

<main className="z-10 md:h-[800px] overflow-hidden flex flex-col md:flex-row glass-panel transition-all duration-700 ease-in-out w-full h-[90vh] max-w-[1200px] border-white/10 border rounded-3xl relative shadow-2xl" id="main-container">

<section className="relative w-full md:w-[45%] h-64 md:h-full overflow-hidden bg-black group">

<img alt="Axl Abstract Visual" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black/90 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-8 left-8 right-8">
</div>
</section>

<section className="relative w-full md:w-[55%] h-full flex flex-col bg-[#0f0f11]/60 backdrop-blur-xl">

<div className="flex flex-col fade-in z-20 pt-10 pr-12 pb-10 pl-12 absolute top-0 right-0 bottom-0 left-0 justify-center" id="login-view">

<div className="flex items-center justify-between mb-12">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shadow-lg">
<svg className="lucide lucide-award" data-icon-replaced="true" data-icon-set="lucide" data-lucide="award" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(249, 115, 22)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div className="">
<div className="text-xs font-medium text-gray-500 tracking-wider"></div>
<div className="text-lg font-medium text-white tracking-tight leading-none">Axl</div>
</div>
</div>
<div className="flex items-center gap-4 text-xs font-medium">

<span className="uppercase text-gray-600 tracking-wide font-mono" id="auth-mode-label"></span>
</div>
</div>

<div className="mb-8 transition-all duration-300">
<h1 className="text-3xl font-medium text-white tracking-tight mb-3" id="auth-title">Welcome back</h1>
<p className="text-body font-light text-gray-400" id="auth-subtitle">Enter your credentials to access the workspace.</p>
</div>

<form className="space-y-5" onsubmit="event.preventDefault(); switchView();">

<div className="space-y-2 hidden overflow-hidden transition-all duration-300" id="name-field">
<label className="text-sm text-gray-400 font-medium ml-1">Full Name</label>
<div className="relative group">
<svg className="lucide lucide-user absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-orange-500 transition-colors" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<input className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-body text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all" placeholder="Alex Carter" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm text-gray-400 font-medium ml-1">Email address</label>
<div className="relative group">
<svg className="lucide lucide-mail absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-orange-500 transition-colors" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-body text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all" placeholder="name@company.com" type="email" value="executive@axl.ai"/>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between ml-1">
<label className="text-sm text-gray-400 font-medium">Password</label>
<a className="text-sm text-orange-500 hover:text-orange-400 transition-colors" href="#" id="forgot-link">Forgot?</a>
</div>
<div className="relative group">
<svg className="lucide lucide-lock absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-orange-500 transition-colors" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<input className="text-body placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all text-white bg-white/5 w-full border-white/10 border rounded-xl pt-4 pr-12 pb-4 pl-12" type="password" value="password123"/>
<svg className="lucide lucide-eye absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
<div className="flex items-center justify-between pt-1 pb-1">
<label className="flex items-center gap-3 cursor-pointer">
<input className="custom-checkbox checked:border-orange-500 focus:ring-0 focus:ring-offset-0 transition-all bg-transparent w-5 h-5 border-gray-600 border rounded" type="checkbox"/>
<span className="text-body text-gray-400 font-light select-none">Remember me</span>
</label>
</div>

<button className="w-full inline-flex transition overflow-hidden group text-sm font-medium text-white rounded-xl relative gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.5)';" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.6), 0 0 0 2px rgba(249, 115, 22, 0.3)';" style={{background: 'linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(10, 10, 10) 100%)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 8px 32px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset, rgba(0, 0, 0, 0.5) 0px -1px 0px inset', transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)', transform: 'translateY(0px)', height: '56px', scale: '1'}} type="submit">
<div className="loader" style={{position: 'absolute', top: '0', left: '0', height: '100%', width: '100%', zIndex: '1', backgroundColor: 'transparent', mask: 'repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)', WebkitMask: 'repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)'}}>
<div className="" style={{content: '\'\'', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundImage: 'radial-gradient(circle at 50% 50%, #f97316 0%, transparent 50%), radial-gradient(circle at 45% 45%, #ea580c 0%, transparent 45%), radial-gradient(circle at 55% 55%, #fb923c 0%, transparent 45%), radial-gradient(circle at 45% 55%, #fdba74 0%, transparent 45%), radial-gradient(circle at 55% 45%, #c2410c 0%, transparent 45%)', mask: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)', WebkitMask: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)', animation: 'transform-animation 2s infinite alternate, opacity-animation 4s infinite', animationTimingFunction: 'cubic-bezier(0.6, 0.8, 0.5, 1)', filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.6))'}}></div>
</div>
<span style={{position: 'relative', zIndex: '2', fontFamily: '\'Inter\', sans-serif', fontSize: '1.1em', fontWeight: '500', letterSpacing: '0.02em', userSelect: 'none', color: '#fff', display: 'flex', gap: '0.1rem'}}>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.1s'}}>I</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.2s'}}>n</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.3s'}}>i</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.4s'}}>t</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.5s'}}>i</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.6s'}}>a</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.7s'}}>l</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.8s'}}>i</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.9s'}}>z</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '1.0s'}}>e</span>
<span style={{display: 'inline-block', width: '0.3rem'}}></span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '1.2s'}}>A</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '1.3s'}}>x</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '1.4s'}}>l</span>
</span>
</button>

<div className="text-center mt-6">
<p className="text-sm text-gray-500" id="toggle-text">
                            Don't have an account? 
                            <button className="ml-1 text-white hover:text-orange-400 transition-colors font-medium focus:outline-none" onclick="toggleAuthMode()" type="button">Create an account</button>
</p>
</div>
</form>

<div className="mt-auto pt-6 flex items-center justify-between text-xs text-gray-600 border-t border-white/5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>End-to-end encrypted</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span>Axl Network</span>
</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col p-8 opacity-0 pointer-events-none transition-all duration-700 z-10" id="dashboard-view">

<div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
<div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-1">Good Morning, Alex</h2>
<div className="flex items-center gap-2 text-orange-400/80 text-sm">
<svg className="lucide lucide-cloud-sun w-4 h-4" data-lucide="cloud-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>
<span>San Francisco, 07:30 AM</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/5">
<svg className="lucide lucide-history w-5 h-5 text-gray-400" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
</button>
<button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/5 relative">
<svg className="lucide lucide-bell w-5 h-5 text-gray-400" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-orange-500 rounded-full"></span>
</button>
<img className="w-10 h-10 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>

<div className="flex-1 overflow-y-auto scrollbar-hide space-y-6">

<div className="bg-gradient-to-r from-orange-900/20 to-transparent border border-orange-500/20 rounded-2xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-50">
<svg className="lucide lucide-alarm-clock w-16 h-16 text-orange-500/20" data-lucide="alarm-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2 2"></path><path d="M5 3 2 6"></path><path d="m22 6-3-3"></path><path d="M6.38 18.7 4 21"></path><path d="M17.64 18.67 20 21"></path></svg>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-2">
<span className="bg-orange-500/10 text-orange-400 text-xs font-semibold px-2 py-1 rounded uppercase tracking-wider">Next Up</span>
<span className="text-gray-400 text-sm">08:00 AM - 09:30 AM</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Quarterly Strategy Review</h3>
<p className="text-body text-gray-400 font-light mb-4">Review Q3 performance metrics with the executive board.</p>

<div className="bg-black/20 rounded-xl p-4 border border-white/5 flex gap-4">
<div className="mt-1">
<svg className="lucide lucide-sparkles w-5 h-5 text-purple-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div>
<p className="text-sm font-medium text-purple-200 mb-1">Axl Insight</p>
<p className="text-sm text-gray-400 leading-relaxed">
                                        This connects to your goal "Market Expansion". I've prepared a summary of the Asian market data you requested last week.
                                    </p>
<div className="mt-3 flex gap-3">
<button className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md text-white transition-colors flex items-center gap-1.5">
<svg className="lucide lucide-play w-3 h-3" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> Read Briefing
                                        </button>
<button className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md text-gray-300 transition-colors">
                                            Edit Data
                                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<h4 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">Upcoming Schedule</h4>

<div className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all cursor-pointer">
<div className="mt-1">
<input className="custom-checkbox w-5 h-5 rounded bg-transparent border-gray-600" type="checkbox"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h5 className="text-lg text-gray-200 font-normal group-hover:text-white">Client Luncheon</h5>
<span className="text-sm text-gray-500">12:30 PM</span>
</div>
<p className="text-sm text-gray-500 mt-1">Bistro 33 • Discuss contract renewal</p>
</div>
<button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-white/10 rounded-lg transition-all text-gray-400">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all cursor-pointer">
<div className="mt-1">
<input className="custom-checkbox w-5 h-5 rounded bg-transparent border-gray-600" type="checkbox"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h5 className="text-lg text-gray-200 font-normal group-hover:text-white">Email Clearance</h5>
<span className="text-sm text-gray-500">02:00 PM</span>
</div>
<p className="text-sm text-gray-500 mt-1">45 unread high-priority emails</p>
</div>
<button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-white/10 rounded-lg transition-all text-gray-400">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
</div>

<div className="mt-6 pt-4 border-t border-white/5">
<div className="relative flex items-center gap-2 bg-black/40 border border-white/10 rounded-2xl p-2 focus-within:border-orange-500/50 focus-within:ring-1 focus-within:ring-orange-500/20 transition-all">
<button className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<button className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors">
<svg className="lucide lucide-image w-5 h-5" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</button>
<input className="flex-1 bg-transparent border-none outline-none text-body text-white placeholder-gray-600 h-10 px-2" placeholder="Ask Axl to schedule or analyze..." type="text"/>
<button className="p-3 bg-orange-600 hover:bg-orange-500 text-white rounded-xl transition-colors shadow-lg shadow-orange-900/20">
<svg className="lucide lucide-arrow-up w-5 h-5" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-6 right-6 z-50">
<div className="bg-zinc-900/90 backdrop-blur border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-gray-500 flex items-center gap-2 shadow-2xl">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            System Online
        </div>
</div>


    </>
  );
}
