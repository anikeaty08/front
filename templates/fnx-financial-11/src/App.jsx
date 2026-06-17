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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', function() {
            // Tab Switching Elements
            const btnLogin = document.getElementById('btn-login');
            const btnRegister = document.getElementById('btn-register');
            const loginForm = document.getElementById('login-form');
            const registerForm = document.getElementById('register-form');

            // Handle Tab Switching
            function switchTab(tab) {
                if (tab === 'login') {
                    loginForm.classList.remove('hidden');
                    registerForm.classList.add('hidden');
                    
                    btnLogin.className = 'px-4 py-1.5 text-sm font-medium rounded-md bg-white/10 text-white shadow-sm transition-all';
                    btnRegister.className = 'px-4 py-1.5 text-sm font-medium rounded-md text-neutral-400 hover:text-white transition-all';
                } else {
                    registerForm.classList.remove('hidden');
                    loginForm.classList.add('hidden');
                    
                    btnRegister.className = 'px-4 py-1.5 text-sm font-medium rounded-md bg-white/10 text-white shadow-sm transition-all';
                    btnLogin.className = 'px-4 py-1.5 text-sm font-medium rounded-md text-neutral-400 hover:text-white transition-all';
                }
            }

            btnLogin.addEventListener('click', () => switchTab('login'));
            btnRegister.addEventListener('click', () => switchTab('register'));

            // Authentication Forms and Views
            const authLoginForm = document.getElementById('auth-login-form');
            const authRegisterForm = document.getElementById('auth-register-form');
            const authView = document.getElementById('auth-view');
            const dashboardView = document.getElementById('dashboard-view');
            const btnLogout = document.getElementById('btn-logout');

            // Handle Login Submission
            function performLogin(e) {
                e.preventDefault();
                
                // Fade out auth view
                authView.classList.add('opacity-0');
                
                setTimeout(() => {
                    authView.classList.add('hidden');
                    authView.classList.remove('flex-1', 'flex');
                    
                    // Show dashboard view
                    dashboardView.classList.remove('hidden');
                    dashboardView.classList.add('flex');
                    
                    // Small delay to allow display change before fading in
                    setTimeout(() => {
                        dashboardView.classList.remove('opacity-0');
                    }, 50);
                }, 300); // Matches transition duration
            }

            authLoginForm.addEventListener('submit', performLogin);
            authRegisterForm.addEventListener('submit', performLogin);

            // Handle Logout
            btnLogout.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Fade out dashboard view
                dashboardView.classList.add('opacity-0');
                
                setTimeout(() => {
                    dashboardView.classList.add('hidden');
                    dashboardView.classList.remove('flex');
                    
                    // Show auth view
                    authView.classList.remove('hidden');
                    authView.classList.add('flex-1', 'flex');
                    
                    // Reset form inputs (optional, makes it cleaner)
                    document.getElementById('email-login').value = '';
                    document.getElementById('password-login').value = '';
                    
                    setTimeout(() => {
                        authView.classList.remove('opacity-0');
                    }, 50);
                }, 300);
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
      

<div className="flex-1 flex w-full transition-opacity duration-300" id="auth-view">

<div className="lg:w-1/2 flex flex-col sm:p-12 lg:p-24 overflow-y-auto custom-scrollbar w-full z-10 pt-6 pr-6 pb-6 pl-6 relative">

<div className="flex items-center gap-2 mb-12 lg:mb-auto">
<div className="w-6 h-6 rounded bg-gradient-to-br from-neutral-200 to-neutral-500 flex items-center justify-center">
<div className="w-2 h-2 bg-neutral-950 rounded-full"></div>
</div>
<span className="text-base font-semibold tracking-tighter text-white">FNX.</span>
</div>

<div className="w-full max-w-sm mx-auto flex-1 flex flex-col justify-center">

<div className="flex p-1 bg-white/5 rounded-lg border border-white/5 mb-8 w-max">
<button className="px-4 py-1.5 text-sm font-medium rounded-md bg-white/10 text-white shadow-sm transition-all" id="btn-login">
                        Log In
                    </button>
<button className="px-4 py-1.5 text-sm font-medium rounded-md text-neutral-400 hover:text-white transition-all" id="btn-register">
                        Sign Up
                    </button>
</div>

<div className="transition-opacity duration-300" id="login-form">
<h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Welcome back</h1>
<p className="text-sm text-neutral-400 mb-8">Enter your credentials to access your financial dashboard.</p>
<form className="space-y-4" id="auth-login-form">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-300" htmlFor="email-login">Email address</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-neutral-500" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-9 pr-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all" id="email-login" placeholder="name@company.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-neutral-300" htmlFor="password-login">Password</label>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Forgot password?</a>
</div>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-neutral-500" icon="solar:lock-password-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-9 pr-10 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all" id="password-login" placeholder="••••••••" type="password"/>
<button className="absolute right-3 text-neutral-500 hover:text-neutral-300 transition-colors focus:outline-none" type="button">
<iconify-icon icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center pt-2 pb-4">
<label className="flex items-center gap-2.5 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-white/20 bg-white/5 peer-checked:bg-white peer-checked:border-white transition-all duration-200"></div>
<iconify-icon className="absolute text-neutral-950 opacity-0 peer-checked:opacity-100 transition-opacity w-3 h-3 pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-neutral-400 select-none group-hover:text-neutral-200 transition-colors">Remember me for 30 days</span>
</label>
</div>
<button className="hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-neutral-950 transition-all text-sm font-medium text-neutral-950 bg-white w-full rounded-md pt-2 pb-2" type="submit">
                            Sign In
                        </button>
</form>
<div className="mt-8 flex items-center gap-3">
<div className="flex-1 h-px bg-white/10"></div>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Or continue with</span>
<div className="flex-1 h-px bg-white/10"></div>
</div>
<div className="mt-6 grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 w-full bg-white/5 border border-white/10 rounded-md py-2 text-sm text-neutral-300 hover:bg-white/10 transition-colors focus:outline-none" type="button">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg>
                            Google
                        </button>
<button className="flex items-center justify-center gap-2 w-full bg-white/5 border border-white/10 rounded-md py-2 text-sm text-neutral-300 hover:bg-white/10 transition-colors focus:outline-none" type="button">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"></path></svg>
                            SSO
                        </button>
</div>
</div>

<div className="hidden transition-opacity duration-300" id="register-form">
<h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Create an account</h1>
<p className="text-sm text-neutral-400 mb-8">Start managing your financial portfolio today.</p>
<form className="space-y-4" id="auth-register-form">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-300" htmlFor="name-register">Full name</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-neutral-500" icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-9 pr-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all" id="name-register" placeholder="John Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-300" htmlFor="email-register">Email address</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-neutral-500" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-9 pr-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all" id="email-register" placeholder="name@company.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-300" htmlFor="password-register">Password</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-neutral-500" icon="solar:lock-password-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-9 pr-10 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all" id="password-register" placeholder="Create a password" type="password"/>
<button className="absolute right-3 text-neutral-500 hover:text-neutral-300 transition-colors focus:outline-none" type="button">
<iconify-icon icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<p className="text-[10px] text-neutral-500 mt-1">Must be at least 8 characters long.</p>
</div>
<button className="w-full bg-white text-neutral-950 font-medium text-sm py-2 rounded-md hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-neutral-950 transition-all mt-4" type="submit">
                            Create Account
                        </button>
</form>
<p className="text-xs text-neutral-500 mt-6 text-center">
                        By signing up, you agree to our <a className="text-neutral-300 hover:text-white underline decoration-white/30 underline-offset-2" href="#">Terms of Service</a> and <a className="text-neutral-300 hover:text-white underline decoration-white/30 underline-offset-2" href="#">Privacy Policy</a>.
                    </p>
</div>
</div>

<div className="mt-auto pt-12 text-xs text-neutral-600 flex justify-between items-center">
<span>© 2024 FNX Analytics.</span>
<div className="flex gap-4">
<a className="hover:text-neutral-400 transition-colors" href="#">Help</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Contact</a>
</div>
</div>
</div>

<div className="hidden lg:flex lg:w-1/2 relative bg-neutral-900 border-l border-white/5 overflow-hidden items-center justify-center">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute inset-0 bg-neutral-950" style={{maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, #000 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, #000 100%)'}}></div>

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

<div className="relative z-10 w-[480px] h-[320px] border border-white/10 rounded-xl bg-neutral-950/50 backdrop-blur-md shadow-2xl p-6 flex flex-col gap-6 transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">

<div className="flex justify-between items-center border-b border-white/5 pb-4">
<div className="space-y-1">
<div className="w-8 h-2 bg-neutral-800 rounded-sm"></div>
<div className="w-24 h-4 bg-neutral-200 rounded-sm"></div>
</div>
<div className="w-16 h-6 bg-white/5 border border-white/10 rounded-full"></div>
</div>

<div className="flex-1 flex items-end gap-3 px-2">
<div className="w-full bg-neutral-800 rounded-t-sm h-[30%] relative"><div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-blue-500/20 to-transparent"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[50%] relative"><div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-blue-500/20 to-transparent"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[40%] relative"><div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-blue-500/20 to-transparent"></div></div>
<div className="w-full bg-neutral-700 rounded-t-sm h-[70%] relative border-t border-neutral-500"><div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white/10 to-transparent"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[60%] relative"><div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-blue-500/20 to-transparent"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[85%] relative"><div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-blue-500/20 to-transparent"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[45%] relative"><div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-blue-500/20 to-transparent"></div></div>
</div>

<div className="flex justify-between items-center pt-2">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-16 h-2 bg-neutral-800 rounded-sm"></div>
</div>
<div className="w-12 h-2 bg-neutral-800 rounded-sm"></div>
</div>
</div>

<div className="absolute bottom-24 left-24 px-4 py-2 rounded-full bg-neutral-900/80 border border-white/10 backdrop-blur-sm flex items-center gap-2 shadow-xl transform -rotate-3">
<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-xs font-medium text-neutral-300 tracking-wide">System Operational</span>
</div>
</div>
</div>

<div className="hidden flex-col w-full min-h-screen opacity-0 transition-opacity duration-300" id="dashboard-view">

<nav className="border-b border-white/5 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-neutral-200 to-neutral-500 flex items-center justify-center">
<div className="w-2 h-2 bg-neutral-950 rounded-full"></div>
</div>
<span className="text-base font-semibold tracking-tighter text-white">FNX.</span>
</div>

<div className="flex items-center gap-6">
<button className="text-neutral-400 hover:text-white transition-colors focus:outline-none relative">
<iconify-icon className="text-xl" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute top-0.5 right-0.5 w-2 h-2 bg-blue-500 rounded-full border border-neutral-950"></span>
</button>
<div className="w-px h-4 bg-white/10"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-xs font-medium text-white">
                            JD
                        </div>
<button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" id="btn-logout">
                            Sign Out
                        </button>
</div>
</div>
</div>
</nav>

<main className="flex-1 w-full max-w-6xl mx-auto p-6 sm:p-12 space-y-8">
<header>
<h1 className="text-2xl font-semibold tracking-tight text-white mb-1">Overview</h1>
<p className="text-sm text-neutral-400">Your financial summary and allocation tracking.</p>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-white/5 border border-white/5 rounded-xl p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-500"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 text-neutral-300">
<iconify-icon className="text-lg" icon="solar:wallet-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-400">Total Assets</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-semibold tracking-tight text-white">$142,500.00</span>
<div className="flex items-center gap-1.5 text-xs">
<span className="text-emerald-400 flex items-center"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 2.4%</span>
<span className="text-neutral-500">vs last month</span>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/5 rounded-xl p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-500"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 text-neutral-300">
<iconify-icon className="text-lg" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-400">Investments</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-semibold tracking-tight text-white">$85,200.00</span>
<div className="flex items-center gap-1.5 text-xs">
<span className="text-emerald-400 flex items-center"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 4.1%</span>
<span className="text-neutral-500">vs last month</span>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/5 rounded-xl p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-rose-500/20 transition-colors duration-500"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 text-neutral-300">
<iconify-icon className="text-lg" icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-400">Monthly Basic Needs</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-semibold tracking-tight text-white">$3,240.00</span>
<div className="flex items-center gap-1.5 text-xs">
<span className="text-neutral-400 flex items-center"><iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon> 1.2%</span>
<span className="text-neutral-500">vs last month</span>
</div>
</div>

<div className="mt-4 flex flex-col gap-1.5">
<div className="flex justify-between items-center text-[10px] text-neutral-500 font-medium">
<span>Budget Utilization</span>
<span>81%</span>
</div>
<div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
<div className="bg-neutral-300 h-full rounded-full w-[81%]"></div>
</div>
</div>
</div>
</div>

<div className="pt-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold text-white">Recent Transactions</h2>
<button className="text-xs text-neutral-400 hover:text-white transition-colors">View all</button>
</div>
<div className="bg-white/5 border border-white/5 rounded-xl overflow-hidden">
<div className="flex flex-col">

<div className="flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 text-neutral-300">
<iconify-icon icon="solar:shop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Whole Foods Market</span>
<span className="text-xs text-neutral-500">Basic Needs • Today, 2:40 PM</span>
</div>
</div>
<span className="text-sm font-medium text-white">-$142.50</span>
</div>

<div className="flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
<iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Vanguard S&amp;P 500 ETF</span>
<span className="text-xs text-neutral-500">Investment • Yesterday, 10:15 AM</span>
</div>
</div>
<span className="text-sm font-medium text-white">+$500.00</span>
</div>

<div className="flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 text-neutral-300">
<iconify-icon icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Property Management LLC</span>
<span className="text-xs text-neutral-500">Basic Needs • Oct 1, 9:00 AM</span>
</div>
</div>
<span className="text-sm font-medium text-white">-$2,100.00</span>
</div>
</div>
</div>
</div>
</main>
</div>
<style>
        /* Custom scrollbar to match dark theme cleanly */
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #3f3f46;
            border-radius: 20px;
        }
        /* Chrome autofill styling reset for dark mode */
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active{
            -webkit-box-shadow: 0 0 0 30px #18181b inset !important;
            -webkit-text-fill-color: white !important;
            transition: background-color 5000s ease-in-out 0s;
        }
    </style>


    </>
  );
}
