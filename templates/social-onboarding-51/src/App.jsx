import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Username suggestion click handler
        document.querySelectorAll('.suggestion-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.getElementById('username').value = e.target.innerText;
            });
        });

        // Step Navigation Logic
        function nextStep(stepNum) {
            // Update Username display if moving to final step
            if (stepNum === 5) {
                const usernameVal = document.getElementById('username').value || 'user';
                const formattedUsername = '@' + usernameVal;
                document.getElementById('final-username').innerText = formattedUsername;
                document.getElementById('sidebar-username').innerText = formattedUsername;
            }

            // Hide all steps
            document.querySelectorAll('.step-container').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('fade-enter');
            });
            
            // Show target step
            const targetStep = document.getElementById('step-' + stepNum);
            targetStep.classList.remove('hidden');
            // Trigger reflow for animation
            void targetStep.offsetWidth; 
            targetStep.classList.add('fade-enter');

            // Update Progress Bar (5 steps total)
            const progressPercentage = (stepNum / 5) * 100;
            document.getElementById('progress-bar').style.width = progressPercentage + '%';
        }

        // Finish Setup Logic
        function finishSetup() {
            // Fade out wizard
            const wizard = document.getElementById('setup-wizard');
            wizard.style.transition = 'opacity 0.3s ease';
            wizard.style.opacity = '0';
            
            setTimeout(() => {
                wizard.classList.add('hidden');
                // Change body background for app feel
                document.body.classList.remove('items-center', 'justify-center');
                document.body.classList.add('bg-white');
                
                // Show App Interface
                const app = document.getElementById('app-interface');
                app.classList.remove('hidden');
                app.classList.add('fade-enter');
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md mx-auto p-4 sm:p-0" id="setup-wizard">

<div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative">

<div className="h-1 w-full bg-gray-100 absolute top-0 left-0">
<div className="h-full bg-blue-600 transition-all duration-500 ease-out" id="progress-bar" style={{width: '20%'}}></div>
</div>

<div className="pt-8 px-8 pb-2 flex justify-center">
<span className="font-semibold tracking-[0.2em] text-sm text-gray-800">SOCIAL</span>
</div>

<div className="step-container p-8 fade-enter" id="step-1">
<div className="text-center mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Create your Social profile</h1>
<p className="text-sm text-gray-500">You're signed in with your Setup Account. Let's create your public profile.</p>
</div>

<div className="bg-gray-50 rounded-xl border border-gray-200 p-4 mb-8 flex items-center gap-4">
<div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-medium text-lg">
                        A
                    </div>
<div>
<div className="text-sm font-medium text-gray-900">Amal</div>
<div className="text-xs text-gray-500">amal@setup</div>
</div>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onclick="nextStep(2)">
                    Continue
                </button>
</div>

<div className="step-container p-8 hidden" id="step-2">
<div className="mb-6 text-center">
<h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Choose a username</h2>
<p className="text-sm text-gray-500">This is how people will find you.</p>
</div>
<div className="mb-6">
<label className="sr-only" htmlFor="username">Username</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-400 font-medium text-base">@</span>
</div>
<input className="block w-full pl-8 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-gray-400 outline-none transition-shadow bg-white" id="username" placeholder="username" type="text" value="amal"/>
</div>
<div className="mt-2 text-xs text-gray-500 flex items-start gap-1">
<iconify-icon className="text-gray-400 mt-0.5" icon="solar:info-circle-linear" width="14"></iconify-icon>
<p>3–20 characters. Letters, numbers, and underscores allowed.</p>
</div>
</div>
<div className="mb-8">
<p className="text-xs font-medium text-gray-700 mb-3">Available suggestions:</p>
<div className="flex flex-wrap gap-2">
<button className="suggestion-btn px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors font-medium">amaljyothi</button>
<button className="suggestion-btn px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors font-medium">amalstudio</button>
<button className="suggestion-btn px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors font-medium">amal_99</button>
</div>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onclick="nextStep(3)">
                    Next
                </button>
</div>

<div className="step-container p-8 hidden" id="step-3">
<div className="mb-8 text-center">
<h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Add a profile photo</h2>
<p className="text-sm text-gray-500">Help people recognize you.</p>
</div>
<div className="flex flex-col items-center mb-8">
<div className="relative group cursor-pointer mb-4">
<div className="h-28 w-28 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 group-hover:border-blue-500 group-hover:bg-blue-50 transition-all overflow-hidden">
<iconify-icon className="text-gray-400 group-hover:text-blue-500 transition-colors" icon="solar:user-rounded-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="absolute bottom-0 right-0 h-8 w-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm text-gray-600 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors">
<iconify-icon icon="solar:camera-add-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<p className="text-sm font-medium text-blue-600 cursor-pointer hover:text-blue-700">Upload photo</p>
</div>
<div className="flex gap-3">
<button className="w-1/3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium text-sm py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-1" onclick="nextStep(4)">
                        Skip
                    </button>
<button className="w-2/3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onclick="nextStep(4)">
                        Next
                    </button>
</div>
</div>

<div className="step-container p-8 hidden" id="step-4">
<div className="flex justify-center mb-6">
<div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
<div className="mb-8 text-center">
<h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Find people you may know</h2>
<p className="text-sm text-gray-500 mb-4">Sync your contacts to easily find friends and family who are already here.</p>
</div>
<div className="flex flex-col gap-3">
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2" onclick="nextStep(5)">
<iconify-icon icon="solar:address-book-linear" width="18"></iconify-icon>
                        Sync contacts
                    </button>
<button className="w-full bg-transparent hover:bg-gray-50 text-gray-500 hover:text-gray-900 font-medium text-sm py-2.5 rounded-lg transition-colors focus:outline-none" onclick="nextStep(5)">
                        Skip for now
                    </button>
</div>
</div>

<div className="step-container p-8 hidden text-center" id="step-5">
<div className="flex justify-center mb-6">
<div className="h-20 w-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Profile created!</h2>
<p className="text-sm text-gray-500 mb-6">You're all set up as <span className="font-medium text-gray-900" id="final-username">@amal</span></p>
<div className="bg-gray-50 rounded-lg p-3 text-left flex gap-3 items-start mb-8 border border-gray-100">
<iconify-icon className="text-gray-400 mt-0.5 shrink-0" icon="solar:shield-warning-linear" width="16"></iconify-icon>
<p className="text-xs text-gray-500 leading-relaxed">
                        To protect your identity, usernames can only be changed once every 14 days in settings.
                    </p>
</div>
<button className="w-full bg-gray-900 hover:bg-black text-white font-medium text-sm py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 flex items-center justify-center gap-2" onclick="finishSetup()">
                    Start exploring
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="mt-6 text-center flex justify-center gap-4 text-xs text-gray-400 font-medium">
<a className="hover:text-gray-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-gray-600 transition-colors" href="#">Terms</a>
<a className="hover:text-gray-600 transition-colors" href="#">Help</a>
</div>
</div>

<div className="hidden w-full min-h-screen bg-gray-50 flex flex-col md:flex-row" id="app-interface">

<nav className="md:w-64 bg-white border-r border-gray-200 flex flex-col justify-between fixed bottom-0 w-full md:relative z-10">
<div className="p-4 md:p-6">
<div className="hidden md:block mb-8 px-2">
<span className="font-semibold tracking-[0.2em] text-sm text-gray-900">SOCIAL</span>
</div>
<ul className="flex md:flex-col justify-around md:justify-start gap-1">
<li>
<a className="flex flex-col md:flex-row items-center gap-1 md:gap-4 px-2 py-3 md:px-4 md:py-3 rounded-xl bg-gray-100 text-gray-900 font-medium text-sm transition-colors" href="#">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-xs md:text-sm">Home</span>
</a>
</li>
<li>
<a className="flex flex-col md:flex-row items-center gap-1 md:gap-4 px-2 py-3 md:px-4 md:py-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium text-sm transition-colors" href="#">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-xs md:text-sm">Search</span>
</a>
</li>
<li className="hidden md:block">
<a className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium text-sm transition-colors" href="#">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span>Create Post</span>
</a>
</li>
<li>
<a className="flex flex-col md:flex-row items-center gap-1 md:gap-4 px-2 py-3 md:px-4 md:py-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium text-sm transition-colors" href="#">
<div className="relative">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="22"></iconify-icon>
<div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></div>
</div>
<span className="text-xs md:text-sm">Notifications</span>
</a>
</li>
<li>
<a className="flex flex-col md:flex-row items-center gap-1 md:gap-4 px-2 py-3 md:px-4 md:py-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium text-sm transition-colors" href="#">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-xs md:text-sm">Profile</span>
</a>
</li>
</ul>
</div>
<div className="hidden md:block p-6 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-medium text-sm">A</div>
<div className="overflow-hidden">
<div className="text-sm font-medium text-gray-900 truncate">Amal</div>
<div className="text-xs text-gray-500 truncate" id="sidebar-username">@amal</div>
</div>
</div>
</div>
</nav>

<main className="flex-1 max-w-2xl w-full mx-auto pb-20 md:pb-0">

<div className="md:hidden sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-10 px-4 py-3 flex justify-between items-center">
<span className="font-semibold tracking-[0.2em] text-xs text-gray-900">SOCIAL</span>
<iconify-icon className="text-gray-700" icon="solar:pen-new-square-linear" width="22"></iconify-icon>
</div>

<div className="px-6 py-4 border-b border-gray-200 bg-white/50 backdrop-blur-sm sticky top-0 z-10 hidden md:block">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Home</h2>
</div>

<div className="p-6 border-b border-gray-200 bg-white hidden md:flex gap-4">
<div className="h-10 w-10 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center text-gray-600 font-medium">A</div>
<div className="flex-1">
<input className="w-full text-base outline-none pt-2 placeholder-gray-400 bg-transparent" placeholder="What's happening?" type="text"/>
<div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
<div className="flex gap-4 text-blue-500">
<iconify-icon className="cursor-pointer hover:text-blue-600" icon="solar:gallery-wide-linear" width="20"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-blue-600" icon="solar:smile-circle-linear" width="20"></iconify-icon>
</div>
<button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium opacity-50 cursor-not-allowed">Post</button>
</div>
</div>
</div>

<div className="p-8 text-center mt-10">
<div className="inline-flex h-16 w-16 bg-blue-50 text-blue-500 rounded-2xl items-center justify-center mb-4 transform rotate-3">
<iconify-icon icon="solar:hand-stars-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">Welcome to your feed</h3>
<p className="text-sm text-gray-500 max-w-sm mx-auto mb-6">When you follow people or join communities, you'll see their posts here.</p>
<button className="bg-white border border-gray-200 text-gray-900 px-5 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors">
                    Find people to follow
                </button>
</div>
</main>

<aside className="hidden lg:block w-80 p-6 border-l border-gray-200">
<div className="bg-gray-50 rounded-xl p-4">
<h3 className="text-sm font-semibold text-gray-900 mb-4">Suggested for you</h3>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-gray-200 rounded-full"></div>
<div>
<div className="text-sm font-medium text-gray-900">Design Team</div>
<div className="text-xs text-gray-500">@design</div>
</div>
</div>
<button className="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-full hover:bg-gray-800">Follow</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-gray-200 rounded-full"></div>
<div>
<div className="text-sm font-medium text-gray-900">System Updates</div>
<div className="text-xs text-gray-500">@system</div>
</div>
</div>
<button className="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-full hover:bg-gray-800">Follow</button>
</div>
</div>
</aside>
</div>



    </>
  );
}
