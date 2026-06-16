import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function handleLogin(e) {
            e.preventDefault();
            
            // 1. Inputs
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const errorMsg = document.getElementById('error-message');
            const errorText = document.getElementById('error-text');
            const btnText = document.getElementById('btn-text');
            const btnSpinner = document.getElementById('btn-spinner');
            const submitBtn = document.getElementById('submit-btn');

            // Reset Error State
            errorMsg.classList.add('hidden');
            usernameInput.parentElement.classList.remove('ring-2', 'ring-red-100', 'border-red-300');
            passwordInput.parentElement.classList.remove('ring-2', 'ring-red-100', 'border-red-300');

            // 2. Validation: Required Fields
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (!username || !password) {
                showError('Please enter both username and password.');
                return;
            }

            // 3. UI: Start Loading
            btnText.classList.add('opacity-0');
            btnSpinner.classList.remove('hidden');
            submitBtn.setAttribute('disabled', 'true');

            // 4. Simulate API Call
            setTimeout(() => {
                
                // MOCK LOGIC: Check credentials
                // For demo purposes, we treat "error" as a bad login
                if (username.toLowerCase().includes('error') || password === 'wrong') {
                    showError('Invalid username or password.');
                    stopLoading();
                    return;
                }

                // 5. Success Logic: Return User Profile
                const mockResponse = {
                    status: 200,
                    data: {
                        role: 'PATIENT', // Could be 'COACH'
                        userProfile: {
                            id: 'u_12345',
                            username: username, // From input
                            realName: 'Alex Johnson', // Mocked real name
                            avatarUrl: '...'
                        },
                        token: 'abc-123-jwt'
                    }
                };

                loginSuccess(mockResponse.data);

            }, 1200); // 1.2s artificial delay

            
            // Helper: Show Error
            function showError(msg) {
                errorMsg.classList.remove('hidden');
                errorText.innerText = msg;
                
                // Visual feedback on inputs
                if(!username) usernameInput.parentElement.classList.add('ring-2', 'ring-red-100', 'border-red-300');
                if(!password) passwordInput.parentElement.classList.add('ring-2', 'ring-red-100', 'border-red-300');

                // Shake animation
                const form = document.getElementById('login-form');
                form.classList.add('translate-x-1');
                setTimeout(() => form.classList.remove('translate-x-1'), 200);
            }

            // Helper: Stop Loading
            function stopLoading() {
                btnText.classList.remove('opacity-0');
                btnSpinner.classList.add('hidden');
                submitBtn.removeAttribute('disabled');
            }

            // Helper: Success Transition
            function loginSuccess(userData) {
                // Update Dashboard with Real Name
                const greetingEl = document.getElementById('user-greeting');
                // Extract first name for casual greeting
                const firstName = userData.userProfile.realName.split(' ')[0];
                greetingEl.innerText = `Hello, ${firstName}`;

                // Transition Screens
                const loginScreen = document.getElementById('login-screen');
                const dashboardScreen = document.getElementById('dashboard-screen');
                
                // Fade out login
                loginScreen.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                loginScreen.style.opacity = '0';
                loginScreen.style.transform = 'scale(0.98)';
                
                setTimeout(() => {
                    loginScreen.classList.add('hidden');
                    dashboardScreen.classList.remove('hidden');
                    dashboardScreen.classList.add('fade-enter-active');
                }, 300);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-md mx-auto bg-white h-full shadow-2xl flex flex-col overflow-hidden">

<div className="flex flex-col h-full p-8 justify-center bg-white z-20 absolute inset-0" id="login-screen">
<div className="w-full max-w-xs mx-auto flex flex-col h-full justify-center">

<div className="mb-10">
<div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-gray-200">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>

<h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Welcome back</h1>
<p className="text-sm text-gray-500 font-normal leading-relaxed">Enter your credentials to access your recovery plan.</p>
</div>

<form className="space-y-5" id="login-form" novalidate="" onsubmit="handleLogin(event)">

<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-600 ml-0.5" htmlFor="username">Username</label>
<div className="relative group input-focus-ring rounded-xl transition-all duration-200">
<input autocomplete="off" className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none transition-all placeholder:font-normal" id="username" placeholder="e.g. alex_recovery" type="text"/>
<div className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-gray-900 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-600 ml-0.5" htmlFor="password">Password</label>
<div className="relative group input-focus-ring rounded-xl transition-all duration-200">
<input className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none transition-all placeholder:font-normal" id="password" placeholder="••••••••" type="password"/>
<div className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-gray-900 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<label className="flex items-center gap-2.5 cursor-pointer group">
<input className="peer sr-only" id="remember" type="checkbox"/>
<div className="w-4 h-4 rounded border border-gray-200 bg-white peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-all duration-200 flex items-center justify-center shadow-sm group-hover:border-gray-300">
<svg className="text-white opacity-0 peer-checked:opacity-100 transition-all duration-200 transform scale-50 peer-checked:scale-100" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs font-medium text-gray-500 group-hover:text-gray-900 transition-colors select-none">Remember me</span>
</label>
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 hover:underline transition-colors" href="#">Forgot password?</a>
</div>

<div className="hidden flex items-start gap-2.5 bg-red-50 border border-red-100 rounded-lg p-3 animate-fade-in" id="error-message">
<svg className="w-4 h-4 text-red-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<div className="flex-1">
<p className="text-xs font-medium text-red-900" id="error-text">Invalid username or password.</p>
</div>
</div>

<div className="pt-2">
<button className="hover:bg-gray-800 transition-all duration-200 shadow-gray-200 hover:shadow-gray-300 hover:-translate-y-0.5 active:translate-y-0 text-sm font-medium text-white bg-gray-900 w-full rounded-xl pt-3.5 pb-3.5 relative shadow-lg cursor-pointer" id="submit-btn" onclick="window.location.href='/user-role'" role="button" type="submit">
<span className="" id="btn-text">Log in</span>
<div className="absolute inset-0 flex items-center justify-center hidden" id="btn-spinner">
<svg className="spinner w-5 h-5 text-gray-400" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="white"></path>
</svg>
</div>
</button>
</div>

<div className="text-center">
<p className="text-xs text-gray-500">
                            Don't have an account? <a className="hover:underline font-medium text-gray-900" href="/signup">Sign up</a>
</p>
</div>
</form>
</div>

<div className="absolute bottom-6 left-0 right-0 text-center">
<p className="text-[10px] text-gray-300 font-medium">Version 2.4.0</p>
</div>
</div>

<div className="hidden flex-1 flex flex-col h-full bg-white" id="dashboard-screen">

<div className="flex-1 overflow-y-auto no-scrollbar pb-24 pt-8">

<div className="px-6 pb-8">
<div className="flex items-start justify-between">
<div>
<p className="text-xs font-medium text-gray-500 mb-1">Monday, Oct 24</p>

<h1 className="text-2xl font-semibold tracking-tight text-gray-900" id="user-greeting">Hello</h1>
</div>
<div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&amp;q=80"/>
</div>
</div>
</div>

<div className="px-6 mb-8 grid grid-cols-2 gap-4">
<div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
<div className="text-2xl font-semibold text-gray-900 tracking-tight mb-1">85%</div>
<div className="text-xs text-gray-500 font-medium">Recovery Score</div>
</div>
<div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
<div className="text-2xl font-semibold text-gray-900 tracking-tight mb-1">4</div>
<div className="text-xs text-gray-500 font-medium">Day Streak</div>
</div>
</div>

<div className="px-6 mb-6">
<h2 className="text-sm font-semibold text-gray-900 tracking-tight mb-4">Up Next</h2>
<div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-900"></div>
<div className="p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-900">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6.5 6.5 11 11"></path><path d="m21 21-1-1"></path><path d="m3 3 1 1"></path><path d="m18 22 4-4"></path><path d="m2 6 4-4"></path><path d="m3 10 7-7"></path><path d="m14 21 7-7"></path></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900">Mobility Routine</h3>
<p className="text-xs text-gray-500">20 min • Lower Body</p>
</div>
</div>
</div>
<button className="w-full py-2.5 bg-gray-900 text-white text-xs font-medium rounded-lg hover:bg-gray-800 transition-colors">Start Session</button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto px-6 pb-6 pt-2 glass-nav z-50">
<nav className="flex justify-between items-center px-2">
<button className="p-2 text-gray-900"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></button>
<button className="p-2 text-gray-400 hover:text-gray-600"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg></button>
<button className="p-2 text-gray-400 hover:text-gray-600"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></button>
<button className="p-2 text-gray-400 hover:text-gray-600"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></button>
</nav>
</div>
</div>
</div>


    </>
  );
}
