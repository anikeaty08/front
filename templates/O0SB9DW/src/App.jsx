import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Initialize Lucide icons
lucide.createIcons();

// Add interactive behavior
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Toggle switch functionality
    const toggles = document.querySelectorAll('input[type="checkbox"]');
    toggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const slider = this.nextElementSibling;
            if (this.checked) {
                slider.style.background = 'linear-gradient(135deg, #3b82f6, #8b5cf6)';
            } else {
                slider.style.background = '#d1d5db';
            }
        });
    });
    
    // Range slider interaction
    const rangeSlider = document.querySelector('input[type="range"]');
    if (rangeSlider) {
        rangeSlider.addEventListener('input', function() {
            const value = (this.value - this.min) / (this.max - this.min);
            this.style.background = `linear-gradient(to right, #3b82f6 0%, #8b5cf6 ${value * 100}%, rgba(255, 255, 255, 0.4) ${value * 100}%, rgba(255, 255, 255, 0.4) 100%)`;
        });
    }
    
    // Tab switching functionality
    const tabs = document.querySelectorAll('[role="tab"], button[class*="border-b"]');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active state from all tabs
            tabs.forEach(t => {
                t.classList.remove('text-blue-500', 'border-blue-500');
                t.classList.add('text-gray-500');
            });
            
            // Add active state to clicked tab
            this.classList.remove('text-gray-500');
            this.classList.add('text-blue-500', 'border-blue-500');
        });
    });
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/herolightcopy-HWuYMA6IdNGk0VGuyvrItNGB" width="100%"></iframe></div>
<div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col gap-6">

<div className="flex flex-col gap-6 opacity-0 transition-all duration-700 ease-out bg-white/30 backdrop-blur-xl rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-xl border border-white/20 translate-y-4" style={{animation: 'slideIn 0.7s ease-out 0.1s forwards'}}>
<div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 text-white flex items-center justify-center rounded-2xl shadow-lg">
<svg className="lucide lucide-shield w-6 h-6" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="flex flex-col gap-3">
<div className="relative">
<svg className="lucide lucide-user absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-900" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<input className="w-full placeholder-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 hover:bg-white/50 transition text-sm border-white/30 border rounded-2xl pt-3 pr-4 pb-3 pl-12 backdrop-blur-sm" placeholder="Email address" type="text"/>
</div>
<div className="relative">
<svg className="lucide lucide-lock absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-900" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<input className="w-full placeholder-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 hover:bg-white/50 transition text-sm border-white/30 border rounded-2xl pt-3 pr-4 pb-3 pl-12 backdrop-blur-sm" placeholder="Enter password" type="password"/>
</div>
</div>
<div className="flex justify-between text-xs text-slate-500" style={{}}>
<button className="hover:text-blue-500 transition font-geist">Create Account</button>
<button className="hover:text-blue-500 transition font-geist">Reset Password</button>
</div>
<button className="w-full hover:from-blue-600 hover:to-cyan-700 transition hover:scale-105 text-sm font-medium text-white bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-purple-400 via-cyan-500 to-purple-400 rounded-2xl pt-3 pb-3 shadow-lg font-geist">Sign In</button>
</div>

<button className="rounded-3xl bg-white/30 backdrop-blur-xl border border-white/20 p-4 text-center text-sm font-medium text-indigo-700 shadow-xl hover:bg-white/40 transition hover:scale-105 opacity-0 translate-y-4 font-geist" style={{animation: 'slideIn 0.7s ease-out 0.2s forwards'}}>Primary Action</button>

<button className="rounded-3xl border-2 border-blue-500 text-blue-500 bg-white/20 backdrop-blur-xl p-4 text-center text-sm font-medium shadow-xl hover:bg-blue-500 hover:text-white transition hover:scale-105 opacity-0 translate-y-4 font-geist" style={{animation: '0.7s ease-out 0.3s forwards slideIn'}}>Secondary Action</button>

<div className="opacity-0 transition-all duration-700 ease-out bg-white/30 border-white/20 border rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-xl backdrop-blur-xl translate-y-4" style={{animation: 'slideIn 0.7s ease-out 0.4s forwards'}}>
<input className="w-full h-2 appearance-none hover:opacity-80 transition bg-white/40 rounded-full" max="100" min="0" style={{accentColor: 'rgb(59, 130, 246)', background: 'linear-gradient(to right, rgb(59, 130, 246) 0%, rgb(139, 92, 246) 34%, rgba(255, 255, 255, 0.4) 34%, rgba(255, 255, 255, 0.4) 100%)'}} type="range" value="65"/>
</div>

<div className="rounded-3xl bg-white/30 backdrop-blur-xl border border-white/20 p-4 flex flex-col gap-4 shadow-xl opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{animation: 'slideIn 0.7s ease-out 0.5s forwards'}}>
<div className="flex justify-between">
<button className="p-3 bg-white/40 rounded-2xl hover:bg-white/50 transition hover:scale-110 shadow-md">
<svg className="lucide lucide-skip-back w-4 h-4 text-blue-500" data-lucide="skip-back" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" x2="5" y1="19" y2="5"></line></svg>
</button>
<button className="p-3 bg-white/40 rounded-2xl hover:bg-white/50 transition hover:scale-110 shadow-md">
<svg className="lucide lucide-play w-4 h-4 text-blue-500" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</button>
<button className="p-3 bg-white/40 rounded-2xl hover:bg-white/50 transition hover:scale-110 shadow-md">
<svg className="lucide lucide-skip-forward w-4 h-4 text-blue-500" data-lucide="skip-forward" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" x2="19" y1="5" y2="19"></line></svg>
</button>
</div>
<div className="h-20 bg-gradient-to-t from-blue-500/20 via-cyan-500/10 to-transparent rounded-2xl overflow-hidden relative">
<svg className="absolute w-full h-full" preserveaspectratio="none" viewbox="0 0 120 60">
<polyline className="" fill="none" points="0,40 10,35 20,45 30,30 40,38 50,28 60,35 70,25 80,33 90,28 100,36 110,26 120,32" stroke="#3b82f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
</svg>
</div>
<div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-cyan-600 transition-all duration-300 rounded-full" style={{width: '45%'}}></div>
</div>
<div className="flex justify-between text-xs text-slate-500" style={{}}>
<span className="font-geist">2:34</span><span className="font-geist">5:21</span>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="flex flex-col gap-6 opacity-0 transition-all duration-700 ease-out text-center bg-white/30 backdrop-blur-xl rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-xl border border-white/20 translate-y-4 items-center" style={{animation: 'slideIn 0.7s ease-out 0.6s forwards'}}>
<img alt="" className="w-20 h-20 ring-4 ring-blue-500/30 hover:ring-blue-500/50 transition object-cover rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1502452213786-a5bc0a67e963?w=320&amp;q=80"/>
<div className="">
<h3 className="font-medium text-lg text-indigo-800 font-geist">Marcus Chen</h3>
<p className="text-xs text-slate-500 font-geist" style={{}}>marcus.chen@company.io</p>
</div>
<div className="flex gap-8 text-center">
<div className="">
<p className="font-medium text-indigo-800 font-geist">2.4k</p>
<p className="text-xs text-slate-500 font-geist" style={{}}>Connections</p>
</div>
<div className="">
<p className="font-medium text-indigo-800 font-geist">847</p>
<p className="text-xs text-slate-500 font-geist" style={{}}>Following</p>
</div>
</div>
<button className="w-full hover:from-blue-600 hover:to-cyan-700 transition hover:scale-105 text-sm font-medium text-white bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-purple-400 via-cyan-500 to-purple-400 rounded-2xl pt-3 pb-3 shadow-lg font-geist">Connect</button>
</div>

<div className="rounded-3xl bg-white/30 backdrop-blur-xl border border-white/20 p-6 flex flex-col gap-4 shadow-xl opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{animation: 'slideIn 0.7s ease-out 0.7s forwards'}}>
<div className="relative">
<svg className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-900" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-white/40 placeholder-indigo-500 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm border border-white/30 hover:bg-white/50 transition" placeholder="Search projects..." type="text"/>
</div>
<div className="">
<h4 className="font-medium text-sm mb-1 text-indigo-800 font-geist">Product Development Guide</h4>
<p className="leading-relaxed text-xs text-slate-500 font-geist" style={{}}>Discover how modern teams are building better products with streamlined workflows and collaborative tools that enhance productivity and innovation across organizations</p>
</div>
</div>

<div className="rounded-3xl bg-white/30 backdrop-blur-xl border border-white/20 p-6 flex items-center justify-center shadow-xl opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{animation: 'slideIn 0.7s ease-out 0.8s forwards'}}>
<svg className="w-[160px] h-[160px]" strokeWidth="2" style={{width: '160px', height: '160px', color: 'rgb(55, 65, 81)'}} viewbox="0 0 120 120">
<circle className="" cx="60" cy="60" fill="none" r="50" stroke="#e5e7eb" strokeWidth="10"></circle>
<circle className="transition-all duration-1000" cx="60" cy="60" fill="none" r="50" stroke="#3b82f6" stroke-dasharray="314" stroke-dashoffset="125" strokeLinecap="round" strokeWidth="10"></circle>
<text className="fill-gray-800 font-medium text-xl font-geist" dominant-baseline="middle" style={{}} text-anchor="middle" x="50%" y="50%">72%</text>
<text className="fill-gray-500 text-xs font-geist" dominant-baseline="middle" style={{}} text-anchor="middle" x="50%" y="70%">Completion</text>
</svg>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="rounded-3xl bg-white/30 backdrop-blur-xl border border-white/20 p-6 shadow-xl opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{animation: 'slideIn 0.7s ease-out 0.9s forwards'}}>
<h3 className="font-medium mb-1 text-indigo-800 font-geist">Project Tasks</h3>
<p className="text-xs mb-4 text-slate-500 font-geist" style={{}}>Modern development teams need efficient task management to deliver quality results on time while maintaining clear communication and accountability</p>
<ul className="divide-y divide-indigo-300/40">
<li className="py-3 flex items-center justify-between hover:bg-white/30 rounded-2xl px-3 -mx-3 transition font-geist">Design System</li>
<li className="py-3 flex items-center justify-between opacity-50 line-through hover:bg-white/30 rounded-2xl px-3 -mx-3 transition font-geist">API Integration <svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></li>
<li className="py-3 flex items-center justify-between hover:bg-white/30 rounded-2xl px-3 -mx-3 transition font-geist">User Testing</li>
<li className="py-3 flex items-center justify-between hover:bg-white/30 rounded-2xl px-3 -mx-3 transition font-geist">Documentation</li>
<li className="py-3 flex items-center justify-between hover:bg-white/30 rounded-2xl px-3 -mx-3 transition font-geist">Deployment
                    <label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<span className="w-11 h-6 peer-checked:bg-blue-500 relative transition hover:bg-indigo-400 bg-indigo-300 rounded-full">
<span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:left-6 transition shadow-sm"></span>
</span>
</label>
</li>
</ul>
</div>

<div className="rounded-3xl bg-white/30 backdrop-blur-xl border border-white/20 p-3 shadow-xl opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{animation: 'slideIn 0.7s ease-out 1.0s forwards'}}>
<div className="w-full h-4 bg-white/40 rounded-full overflow-hidden flex">
<div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-full transition-all duration-1000 rounded-l-full" style={{width: '35%'}}></div>
<div className="bg-indigo-400 h-full transition-all duration-1000" style={{width: '20%'}}></div>
<div className="bg-indigo-300 h-full flex-1 rounded-r-full"></div>
</div>
</div>

<div className="rounded-3xl bg-white/30 backdrop-blur-xl border border-white/20 p-6 flex flex-col gap-4 shadow-xl opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{animation: 'slideIn 0.7s ease-out 1.1s forwards'}}>
<div className="flex border-b border-indigo-300/40 text-sm">
<button className="px-4 py-2 font-medium text-blue-500 border-b-2 border-blue-500 hover:bg-white/30 transition rounded-t-xl font-geist" style={{}}>Analytics</button>
<button className="px-4 py-2 hover:text-indigo-700 hover:bg-white/30 transition rounded-t-xl text-slate-500 font-geist" style={{}}>Reports</button>
<button className="px-4 py-2 hover:text-indigo-700 hover:bg-white/30 transition rounded-t-xl text-slate-500 font-geist" style={{}}>Insights</button>
</div>
<div className="h-28 relative">
<svg className="absolute w-full h-full" preserveaspectratio="none" viewbox="0 0 120 60">
<polyline className="" fill="none" points="0,45 10,38 20,48 30,32 40,42 50,30 60,38 70,28 80,36 90,31 100,39 110,29 120,35" stroke="#3b82f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
<circle cx="60" cy="38" fill="#3b82f6" r="3"></circle>
<text className="font-medium font-geist" dy=".35em" fill="#3b82f6" fontSize="6" x="64" y="38">1.2k</text>
</svg>
</div>
</div>

<div className="rounded-3xl bg-white/30 backdrop-blur-xl border border-white/20 p-6 flex justify-around shadow-xl opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{animation: 'slideIn 0.7s ease-out 1.2s forwards'}}>
<a className="p-3 bg-white/40 rounded-2xl hover:bg-blue-500/20 transition hover:scale-110 shadow-md" href="#">
<svg className="lucide lucide-linkedin w-5 h-5 text-blue-500" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="p-3 bg-white/40 rounded-2xl hover:bg-blue-500/20 transition hover:scale-110 shadow-md" href="#">
<svg className="lucide lucide-github w-5 h-5 text-blue-500" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="p-3 bg-white/40 rounded-2xl hover:bg-blue-500/20 transition hover:scale-110 shadow-md" href="#">
<svg className="lucide lucide-globe w-5 h-5 text-blue-500" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</a>
</div>
</div>
</div>
<style>
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Custom scrollbar styling */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.3);
    border-radius: 10px;
    backdrop-filter: blur(10px);
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(59, 130, 246, 0.5);
}

/* Enhanced glass effect for inputs */
input[type="text"], input[type="password"], input[type="range"] {
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
}

/* Range slider styling */
input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.3);
}

input[type="range"]::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* Toggle switch enhancement */
.peer:checked + span {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
}

.peer:checked + span span {
    transform: translateX(20px);
}

/* Glassmorphism enhancement */
.backdrop-blur-xl {
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
}

/* Hover effects for cards */
.hover\:scale-105:hover {
    transform: scale(1.05);
}

.hover\:scale-110:hover {
    transform: scale(1.1);
}

/* Focus states */
input:focus {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Button ripple effect */
button {
    position: relative;
    overflow: hidden;
}

button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s;
}

button:active::before {
    width: 300px;
    height: 300px;
}

/* Animation delay for staggered effect */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
</style>


    </>
  );
}
