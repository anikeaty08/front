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



        // System variables
        let systemPassword = 'XavierAdmin@2026';
        const systemEmail = 'susmanjha9@gmail.com';

        // View Management
        function handleLogin(isGoogle = false) {
            const errorEl = document.getElementById('loginError');
            errorEl.classList.add('hidden');
            errorEl.classList.remove('text-green-500');
            errorEl.classList.add('text-red-500');

            if (isGoogle) {
                errorEl.textContent = 'Please use the email section to login.';
                errorEl.classList.remove('hidden');
                return;
            }

            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passwordInput').value;

            if (email === systemEmail && password === systemPassword) {
                const btn = document.querySelector('#login-view button[type="submit"]');
                if(btn) {
                    const originalText = btn.innerHTML;
                    btn.innerHTML = '<iconify-icon icon="solar:refresh-linear" class="animate-spin text-xl text-white mx-auto"></iconify-icon>';
                    setTimeout(() => {
                        document.getElementById('login-view').classList.add('hidden');
                        document.getElementById('dashboard-view').classList.remove('hidden');
                        btn.innerHTML = originalText;
                        
                        document.getElementById('emailInput').value = '';
                        document.getElementById('passwordInput').value = '';
                    }, 600);
                }
            } else {
                errorEl.textContent = 'Invalid email or password.';
                errorEl.classList.remove('hidden');
            }
        }

        function showForgotPassword() {
            document.getElementById('login-view').classList.add('hidden');
            document.getElementById('forgot-view').classList.remove('hidden');
            document.getElementById('forgotError').classList.add('hidden');
            document.getElementById('forgotEmailInput').value = '';
        }

        function showLogin() {
            document.getElementById('forgot-view').classList.add('hidden');
            document.getElementById('reset-view').classList.add('hidden');
            document.getElementById('login-view').classList.remove('hidden');
            
            // Clean up error states upon returning
            const loginErrorEl = document.getElementById('loginError');
            if (loginErrorEl.classList.contains('text-red-500')) {
                loginErrorEl.classList.add('hidden');
            }
        }

        function handleForgotEmail() {
            const email = document.getElementById('forgotEmailInput').value;
            const errorEl = document.getElementById('forgotError');
            
            if (email === systemEmail) {
                const btn = document.querySelector('#forgot-view button[type="submit"]');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<iconify-icon icon="solar:refresh-linear" class="animate-spin text-xl text-white mx-auto"></iconify-icon>';
                
                setTimeout(() => {
                    document.getElementById('forgot-view').classList.add('hidden');
                    document.getElementById('reset-view').classList.remove('hidden');
                    document.getElementById('resetError').classList.add('hidden');
                    document.getElementById('newPasswordInput').value = '';
                    document.getElementById('confirmPasswordInput').value = '';
                    btn.innerHTML = originalText;
                }, 400);
            } else {
                errorEl.textContent = 'Account not found for this email address.';
                errorEl.classList.remove('hidden');
            }
        }

        function handlePasswordReset() {
            const newPass = document.getElementById('newPasswordInput').value;
            const confirmPass = document.getElementById('confirmPasswordInput').value;
            const errorEl = document.getElementById('resetError');
            
            if (newPass.length < 6) {
                errorEl.textContent = 'Password must be at least 6 characters long.';
                errorEl.classList.remove('hidden');
                return;
            }
            
            if (newPass !== confirmPass) {
                errorEl.textContent = 'Passwords do not match.';
                errorEl.classList.remove('hidden');
                return;
            }
            
            // Update password
            systemPassword = newPass;
            
            const btn = document.querySelector('#reset-view button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:refresh-linear" class="animate-spin text-xl text-white mx-auto"></iconify-icon>';
            
            setTimeout(() => {
                showLogin();
                const loginErrorEl = document.getElementById('loginError');
                loginErrorEl.textContent = 'Password updated successfully! Please sign in.';
                loginErrorEl.classList.remove('hidden', 'text-red-500');
                loginErrorEl.classList.add('text-green-500');
                btn.innerHTML = originalText;
            }, 600);
        }

        function handleLogout() {
            document.getElementById('dashboard-view').classList.add('hidden');
            document.getElementById('login-view').classList.remove('hidden');
        }

        // Toast Notification Logic
        function saveChanges() {
            const toast = document.getElementById('toast');
            
            toast.classList.remove('translate-y-12', 'opacity-0');
            
            setTimeout(() => {
                toast.classList.add('translate-y-12', 'opacity-0');
            }, 3000);
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
      

<div className="fixed bottom-6 right-6 z-50 transform translate-y-12 opacity-0 transition-all duration-300 flex items-center gap-3 bg-zinc-900 text-white px-4 py-3 rounded-lg shadow-lg pointer-events-none" id="toast">
<iconify-icon className="text-xl text-zinc-300" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium tracking-wide">Changes saved successfully</span>
</div>

<div className="min-h-screen flex items-center justify-center bg-zinc-50 p-6 relative" id="login-view">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="w-full max-w-sm bg-white border border-zinc-200 rounded-xl shadow-sm p-8 relative z-10 flex flex-col items-center">
<div className="w-14 h-14 rounded-full border border-zinc-200 overflow-hidden mb-6 flex items-center justify-center bg-white shadow-sm">
<img alt="Logo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-center mb-2">Admin Panel</h1>
<p className="text-base text-zinc-500 text-center mb-8">Sign in to manage St. Xavier's website.</p>
<button className="w-full bg-white border border-zinc-200 text-zinc-800 rounded-lg px-4 py-2.5 text-sm font-medium flex items-center justify-center gap-3 hover:bg-zinc-50 transition-colors shadow-sm mb-6" onclick="handleLogin(true)">
<svg className="w-4 h-4" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
                Continue with Google
            </button>
<div className="w-full flex items-center gap-3 mb-6">
<div className="flex-1 h-px bg-zinc-200"></div>
<span className="text-xs text-zinc-400 font-medium uppercase tracking-widest">or email</span>
<div className="flex-1 h-px bg-zinc-200"></div>
</div>
<form className="w-full space-y-4" onsubmit="event.preventDefault(); handleLogin();">
<div>
<label className="block text-sm font-medium text-zinc-700 mb-1.5">Email address</label>
<input className="w-full bg-white border border-zinc-200 rounded-lg text-base py-2 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" id="emailInput" placeholder="Enter your email" type="email"/>
</div>
<div>
<div className="flex items-center justify-between mb-1.5">
<label className="block text-sm font-medium text-zinc-700">Password</label>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#" onclick="event.preventDefault(); showForgotPassword();">Forgot password?</a>
</div>
<input className="w-full bg-white border border-zinc-200 rounded-lg text-base py-2 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" id="passwordInput" placeholder="••••••••" type="password"/>
</div>
<div className="hidden text-red-500 text-sm font-medium text-center" id="loginError"></div>
<button className="w-full bg-zinc-900 text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors mt-2" type="submit">
                    Sign In
                </button>
</form>
</div>
</div>

<div className="hidden min-h-screen flex items-center justify-center bg-zinc-50 p-6 relative" id="forgot-view">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="w-full max-w-sm bg-white border border-zinc-200 rounded-xl shadow-sm p-8 relative z-10 flex flex-col items-center">
<div className="w-14 h-14 rounded-full border border-zinc-200 overflow-hidden mb-6 flex items-center justify-center bg-white shadow-sm">
<img alt="Logo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-center mb-2">Reset Password</h1>
<p className="text-base text-zinc-500 text-center mb-8">Enter your registered email address.</p>
<form className="w-full space-y-4" onsubmit="event.preventDefault(); handleForgotEmail();">
<div>
<label className="block text-sm font-medium text-zinc-700 mb-1.5">Email address</label>
<input className="w-full bg-white border border-zinc-200 rounded-lg text-base py-2 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" id="forgotEmailInput" placeholder="Enter your email" type="email"/>
</div>
<div className="hidden text-red-500 text-sm font-medium text-center" id="forgotError"></div>
<button className="w-full bg-zinc-900 text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors mt-2" type="submit">
                    Verify Email
                </button>
</form>
<button className="mt-6 text-sm text-zinc-500 hover:text-zinc-900 font-medium transition-colors" onclick="showLogin()">
                Back to login
            </button>
</div>
</div>

<div className="hidden min-h-screen flex items-center justify-center bg-zinc-50 p-6 relative" id="reset-view">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="w-full max-w-sm bg-white border border-zinc-200 rounded-xl shadow-sm p-8 relative z-10 flex flex-col items-center">
<div className="w-14 h-14 rounded-full border border-zinc-200 overflow-hidden mb-6 flex items-center justify-center bg-white shadow-sm">
<img alt="Logo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-center mb-2">Create New Password</h1>
<p className="text-base text-zinc-500 text-center mb-8">Please enter your new password below.</p>
<form className="w-full space-y-4" onsubmit="event.preventDefault(); handlePasswordReset();">
<div>
<label className="block text-sm font-medium text-zinc-700 mb-1.5">New Password</label>
<input className="w-full bg-white border border-zinc-200 rounded-lg text-base py-2 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" id="newPasswordInput" placeholder="••••••••" type="password"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-700 mb-1.5">Confirm Password</label>
<input className="w-full bg-white border border-zinc-200 rounded-lg text-base py-2 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" id="confirmPasswordInput" placeholder="••••••••" type="password"/>
</div>
<div className="hidden text-red-500 text-sm font-medium text-center" id="resetError"></div>
<button className="w-full bg-zinc-900 text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors mt-2" type="submit">
                    Update Password
                </button>
</form>
</div>
</div>

<div className="hidden h-screen w-full flex bg-zinc-50" id="dashboard-view">

<aside className="w-64 bg-white border-r border-zinc-200 flex flex-col flex-shrink-0 z-20">
<div className="h-16 flex items-center px-6 border-b border-zinc-200">
<div className="flex items-center gap-3">
<img alt="Logo" className="w-8 h-8 rounded-full border border-zinc-100 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="text-sm font-semibold tracking-tight truncate">St. Xavier's Admin</span>
</div>
</div>
<div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<p className="px-3 text-xs font-medium text-zinc-400 uppercase tracking-widest mb-2 mt-4">Site Content</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-100 text-zinc-900 text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-base text-zinc-500" icon="solar:widget-linear"></iconify-icon>
                    Hero Section
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-base text-zinc-400" icon="solar:info-circle-linear"></iconify-icon>
                    About Us
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-base text-zinc-400" icon="solar:book-linear"></iconify-icon>
                    Academics &amp; Facilities
                </a>
<p className="px-3 text-xs font-medium text-zinc-400 uppercase tracking-widest mb-2 mt-6">Updates</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 text-sm font-medium transition-colors justify-between" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-base text-zinc-400" icon="solar:bell-linear"></iconify-icon>
                        Notices
                    </div>
<span className="bg-zinc-200 text-zinc-600 py-0.5 px-2 rounded-full text-xs font-medium">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-base text-zinc-400" icon="solar:gallery-linear"></iconify-icon>
                    Gallery Media
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-base text-zinc-400" icon="solar:diploma-linear"></iconify-icon>
                    Exam Results
                </a>
<p className="px-3 text-xs font-medium text-zinc-400 uppercase tracking-widest mb-2 mt-6">Configuration</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-base text-zinc-400" icon="solar:settings-linear"></iconify-icon>
                    General Settings
                </a>
</div>
<div className="p-4 border-t border-zinc-200">
<button className="flex items-center gap-3 px-3 py-2 w-full rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 text-sm font-medium transition-colors" onclick="handleLogout()">
<iconify-icon className="text-base text-zinc-400" icon="solar:logout-2-linear"></iconify-icon>
                    Sign Out
                </button>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-zinc-200 flex items-center justify-between px-8 sticky top-0 z-10">
<div className="flex items-center gap-2 text-sm text-zinc-500 font-medium">
<span>Site Content</span>
<iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-zinc-900">Hero Section</span>
</div>
<div className="flex items-center gap-3">
<button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 px-3 py-2 rounded-md hover:bg-zinc-100 transition-colors flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:square-top-down-linear"></iconify-icon>
                        View Live Site
                    </button>
<button className="bg-zinc-900 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm flex items-center gap-2" onclick="saveChanges()">
                        Save Changes
                    </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-3xl mx-auto space-y-8 pb-20">
<div>
<h2 className="text-2xl font-semibold tracking-tight mb-1">Hero Section</h2>
<p className="text-base text-zinc-500 mb-6">Manage the main landing area of the website. These are the first elements visitors see.</p>
<div className="w-full h-px bg-zinc-200"></div>
</div>

<div className="flex items-center justify-between bg-white border border-zinc-200 rounded-lg p-5 shadow-sm">
<div>
<h3 className="text-sm font-medium text-zinc-900">Section Visibility</h3>
<p className="text-sm text-zinc-500 mt-0.5">Toggle whether the hero section is visible on the live site.</p>
</div>
<div className="relative inline-block w-10 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer" id="visibility-toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer" htmlFor="visibility-toggle"></label>
<div className="toggle-dot absolute"></div>
</input></div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-zinc-200 bg-zinc-50/50">
<h3 className="text-sm font-medium text-zinc-900">Content Configuration</h3>
</div>
<div className="p-6 space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="block text-sm font-medium text-zinc-700">Badge Text</label>
<input className="w-full bg-white border border-zinc-200 rounded-md text-base py-2 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all font-medium text-zinc-900" type="text" value="Admissions Open · 2026-27"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-zinc-700">Location Tag</label>
<input className="w-full bg-white border border-zinc-200 rounded-md text-base py-2 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all text-zinc-900" type="text" value="Gopabandhu Nagar, Jagatpur · Cuttack, Odisha"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-zinc-700">Main Headline</label>
<div className="flex rounded-md shadow-sm">
<input className="w-full bg-white border border-zinc-200 rounded-md text-base py-2 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all text-zinc-900 font-semibold tracking-tight" type="text" value="St. Xavier's High School"/>
</div>
<p className="text-xs text-zinc-500 mt-1">Use standard text. To highlight a word, use the custom HTML field below if needed.</p>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-zinc-700">Tagline (Italicized)</label>
<input className="w-full bg-white border border-zinc-200 rounded-md text-base py-2 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all text-zinc-900 italic" type="text" value="Empowering Minds, Enriching Lives"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-zinc-700">Description Paragraph</label>
<textarea className="w-full bg-white border border-zinc-200 rounded-md text-base py-2 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all text-zinc-900 resize-none" rows="3">A premier CBSE-affiliated institution committed to academic excellence, character building, and holistic development — where every student discovers their true potential since 2017.</textarea>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-zinc-200 bg-zinc-50/50 flex justify-between items-center">
<h3 className="text-sm font-medium text-zinc-900">Action Buttons</h3>
<button className="text-xs font-medium text-zinc-600 bg-white border border-zinc-200 rounded px-2 py-1 hover:bg-zinc-50 flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:add-circle-linear"></iconify-icon> Add Button
                            </button>
</div>
<div className="p-6 space-y-4">

<div className="flex gap-4 items-start p-4 border border-zinc-100 rounded-lg bg-zinc-50/30">
<div className="cursor-move pt-2 text-zinc-400 hover:text-zinc-600">
<iconify-icon className="text-base" icon="solar:hamburger-menu-linear"></iconify-icon>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1">Button Label</label>
<input className="w-full bg-white border border-zinc-200 rounded text-sm py-1.5 px-2 focus:outline-none focus:border-zinc-900 transition-colors" type="text" value="Apply for Admission"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1">Link URL</label>
<input className="w-full bg-white border border-zinc-200 rounded text-sm py-1.5 px-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-500" type="text" value="#apply"/>
</div>
</div>
<div className="pt-6">
<select className="bg-white border border-zinc-200 rounded text-sm py-1.5 px-2 focus:outline-none focus:border-zinc-900">
<option>Primary (Gold)</option>
<option>Secondary (Ghost)</option>
</select>
</div>
<button className="pt-6 text-zinc-400 hover:text-red-500 transition-colors">
<iconify-icon className="text-base" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>

<div className="flex gap-4 items-start p-4 border border-zinc-100 rounded-lg bg-zinc-50/30">
<div className="cursor-move pt-2 text-zinc-400 hover:text-zinc-600">
<iconify-icon className="text-base" icon="solar:hamburger-menu-linear"></iconify-icon>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1">Button Label</label>
<input className="w-full bg-white border border-zinc-200 rounded text-sm py-1.5 px-2 focus:outline-none focus:border-zinc-900 transition-colors" type="text" value="Discover More"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1">Link URL</label>
<input className="w-full bg-white border border-zinc-200 rounded text-sm py-1.5 px-2 focus:outline-none focus:border-zinc-900 transition-colors text-zinc-500" type="text" value="#about"/>
</div>
</div>
<div className="pt-6">
<select className="bg-white border border-zinc-200 rounded text-sm py-1.5 px-2 focus:outline-none focus:border-zinc-900">
<option>Secondary (Ghost)</option>
<option>Primary (Gold)</option>
</select>
</div>
<button className="pt-6 text-zinc-400 hover:text-red-500 transition-colors">
<iconify-icon className="text-base" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-zinc-200 bg-zinc-50/50">
<h3 className="text-sm font-medium text-zinc-900">Statistics Strip</h3>
</div>
<div className="p-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="space-y-2 border border-zinc-100 p-3 rounded-lg bg-zinc-50/50">
<input className="w-full bg-white border border-zinc-200 rounded text-lg font-semibold py-1 px-2 text-center focus:outline-none focus:border-zinc-900" type="text" value="8+"/>
<input className="w-full bg-transparent border-none text-xs text-center text-zinc-500 focus:outline-none focus:text-zinc-900 uppercase tracking-wide" type="text" value="Years of Excellence"/>
</div>
<div className="space-y-2 border border-zinc-100 p-3 rounded-lg bg-zinc-50/50">
<input className="w-full bg-white border border-zinc-200 rounded text-lg font-semibold py-1 px-2 text-center focus:outline-none focus:border-zinc-900" type="text" value="500+"/>
<input className="w-full bg-transparent border-none text-xs text-center text-zinc-500 focus:outline-none focus:text-zinc-900 uppercase tracking-wide" type="text" value="Students Enrolled"/>
</div>
<div className="space-y-2 border border-zinc-100 p-3 rounded-lg bg-zinc-50/50">
<input className="w-full bg-white border border-zinc-200 rounded text-lg font-semibold py-1 px-2 text-center focus:outline-none focus:border-zinc-900" type="text" value="30+"/>
<input className="w-full bg-transparent border-none text-xs text-center text-zinc-500 focus:outline-none focus:text-zinc-900 uppercase tracking-wide" type="text" value="Expert Faculty"/>
</div>
<div className="space-y-2 border border-zinc-100 p-3 rounded-lg bg-zinc-50/50">
<input className="w-full bg-white border border-zinc-200 rounded text-lg font-semibold py-1 px-2 text-center focus:outline-none focus:border-zinc-900" type="text" value="100%"/>
<input className="w-full bg-transparent border-none text-xs text-center text-zinc-500 focus:outline-none focus:text-zinc-900 uppercase tracking-wide" type="text" value="Pass Rate"/>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
