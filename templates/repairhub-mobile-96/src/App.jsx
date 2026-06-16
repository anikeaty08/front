import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Navigation Logic
        function navTo(screenId) {
            // Hide all screens
            const screens = document.querySelectorAll('.screen');
            screens.forEach(s => {
                s.classList.add('hidden');
            });

            // Show target screen
            document.getElementById(screenId).classList.remove('hidden');

            // Handle Bottom Nav visibility
            const bottomNav = document.getElementById('bottom-nav');
            if (['screen-home', 'screen-impact', 'screen-profile'].includes(screenId)) {
                bottomNav.classList.remove('hidden');
                
                // Update active state in nav
                const navButtons = bottomNav.querySelectorAll('button');
                navButtons.forEach(btn => {
                   btn.classList.remove('text-[#00B894]');
                   if(!btn.classList.contains('bg-gray-900')) btn.classList.add('text-gray-400');
                });
                
                if (screenId === 'screen-home') navButtons[0].classList.add('text-[#00B894]', 'text-gray-400'); // Remove gray, add green
                if (screenId === 'screen-impact') navButtons[1].classList.remove('text-gray-400'); navButtons[1].classList.add('text-[#00B894]');
                if (screenId === 'screen-profile') navButtons[4].classList.remove('text-gray-400'); navButtons[4].classList.add('text-[#00B894]');

            } else {
                bottomNav.classList.add('hidden');
            }
            
            // Re-init icons for new content if generated dynamically (not needed here but good practice)
            lucide.createIcons();
        }

        // Onboarding Logic
        setTimeout(() => {
            navTo('screen-onboarding'); // Auto move from Splash after 2.5s
        }, 2500);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full h-full max-w-[400px] bg-white sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-200">

<div className="screen absolute inset-0 z-50 bg-[#00B894] flex flex-col justify-center items-center text-white p-6" id="screen-splash">
<div className="mb-6 p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
<i className="w-12 h-12 text-white stroke-[1.5]" data-lucide="wrench"></i>
</div>
<h1 className="text-3xl font-semibold tracking-tight mb-2">RepairHub</h1>
<p className="text-lg opacity-90 font-light text-center">Repair Smart. Save More.<br/>Reduce Waste.</p>
<div className="absolute bottom-10 flex space-x-2">
<div className="w-2 h-2 rounded-full bg-white animate-bounce"></div>
<div className="w-2 h-2 rounded-full bg-white/60 animate-bounce delay-75"></div>
<div className="w-2 h-2 rounded-full bg-white/40 animate-bounce delay-150"></div>
</div>
</div>

<div className="screen hidden absolute inset-0 z-40 bg-white flex flex-col p-6" id="screen-onboarding">
<div className="flex-1 flex flex-col justify-center items-center text-center mt-10">
<div className="w-full" id="onboarding-slide-1">
<div className="bg-green-50 w-full aspect-square rounded-3xl flex items-center justify-center mb-8">
<i className="w-24 h-24 text-[#00B894] stroke-[1]" data-lucide="recycle"></i>
</div>
<h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Stop Replacing.<br/>Start Repairing.</h2>
<p className="text-gray-500 leading-relaxed">Join the movement to reduce global e-waste by giving your devices a second life.</p>
</div>
</div>
<div className="mt-auto">
<div className="flex justify-center space-x-2 mb-8">
<span className="w-6 h-1.5 rounded-full bg-[#00B894]"></span>
<span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
<span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
</div>
<button className="w-full py-4 bg-[#00B894] text-white rounded-xl font-medium text-base shadow-lg shadow-green-200 hover:bg-green-600 transition-colors" onclick="navTo('screen-login')">
                    Get Started
                </button>
</div>
</div>

<div className="screen hidden absolute inset-0 z-40 bg-white p-6 flex flex-col justify-center" id="screen-login">
<div className="absolute top-0 left-0 w-full h-64 overflow-hidden -z-10 opacity-5">
<div className="grid grid-cols-6 gap-4 p-4">
<i className="w-8 h-8" data-lucide="wrench"></i><i className="w-8 h-8" data-lucide="cpu"></i>
<i className="w-8 h-8" data-lucide="smartphone"></i><i className="w-8 h-8" data-lucide="hammer"></i>
</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Welcome back</h2>
<p className="text-gray-500 mb-8 text-sm">Log in to track your repairs and impact.</p>
<div className="space-y-4">
<div className="relative group">
<i className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-[#0984E3]" data-lucide="mail"></i>
<input className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0984E3]/20 focus:border-[#0984E3] transition-all text-sm" placeholder="Email Address" type="email"/>
</div>
<div className="relative group">
<i className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-[#0984E3]" data-lucide="lock"></i>
<input className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0984E3]/20 focus:border-[#0984E3] transition-all text-sm" placeholder="Password" type="password"/>
</div>
</div>
<button className="w-full mt-6 py-3.5 bg-[#0984E3] text-white rounded-xl font-medium shadow-md shadow-blue-200" onclick="navTo('screen-home')">
                Log In
            </button>
<div className="my-6 flex items-center">
<div className="flex-grow border-t border-gray-100"></div>
<span className="px-4 text-xs text-gray-400 font-medium">OR CONTINUE WITH</span>
<div className="flex-grow border-t border-gray-100"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<button className="flex items-center justify-center py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
<i className="w-5 h-5 mr-2 text-gray-700" data-lucide="chrome"></i> <span className="text-sm font-medium">Google</span>
</button>
<button className="flex items-center justify-center py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
<i className="w-5 h-5 mr-2 text-gray-700" data-lucide="smartphone"></i> <span className="text-sm font-medium">OTP</span>
</button>
</div>
</div>

<div className="screen hidden absolute inset-0 z-30 bg-gray-50 pb-20 overflow-y-auto no-scrollbar" id="screen-home">

<div className="bg-white p-6 pb-4 sticky top-0 z-10 border-b border-gray-100">
<div className="flex justify-between items-center mb-4">
<div>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Location</p>
<div className="flex items-center text-[#0984E3] font-medium text-sm">
<i className="w-3 h-3 mr-1" data-lucide="map-pin"></i> New York, NY
                        </div>
</div>
<div className="w-9 h-9 bg-gray-200 rounded-full overflow-hidden border border-gray-100" onclick="navTo('screen-profile')">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=33"/>
</div>
</div>
<div className="relative">
<i className="absolute left-3 top-3 w-4 h-4 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border-none rounded-lg text-sm focus:ring-0" placeholder="Search for item or repair service..." type="text"/>
</div>
</div>
<div className="p-6 pt-4 space-y-6">

<div className="relative overflow-hidden bg-gradient-to-r from-[#00B894] to-[#009e7f] rounded-2xl p-5 text-white shadow-lg shadow-green-200 cursor-pointer" onclick="navTo('screen-scanner')">
<div className="relative z-10">
<h3 className="font-semibold text-lg mb-1">Diagnose with AI</h3>
<p className="text-xs text-white/90 mb-3 max-w-[70%]">Scan your broken item to identify issues instantly.</p>
<span className="inline-flex items-center text-xs font-medium bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/30">
                            Scan Item <i className="w-3 h-3 ml-1.5" data-lucide="arrow-right"></i>
</span>
</div>
<i className="absolute -right-4 -bottom-4 w-28 h-28 text-white/10 rotate-12" data-lucide="scan-line"></i>
</div>

<div>
<h3 className="text-sm font-semibold text-gray-900 mb-3">Active Repair</h3>
<div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-4 cursor-pointer" onclick="navTo('screen-tracking')">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#0984E3]">
<i className="w-6 h-6" data-lucide="laptop"></i>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-gray-900">MacBook Pro M1</h4>
<p className="text-xs text-[#00B894] font-medium mt-0.5">Repair in Progress</p>
</div>
<i className="w-5 h-5 text-gray-300" data-lucide="chevron-right"></i>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-gray-900 mb-3">Categories</h3>
<div className="grid grid-cols-4 gap-3">
<div className="flex flex-col items-center">
<div className="w-14 h-14 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center mb-2 text-gray-700">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="smartphone"></i>
</div>
<span className="text-[10px] font-medium text-gray-500">Phone</span>
</div>
<div className="flex flex-col items-center">
<div className="w-14 h-14 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center mb-2 text-gray-700">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="laptop"></i>
</div>
<span className="text-[10px] font-medium text-gray-500">Laptop</span>
</div>
<div className="flex flex-col items-center">
<div className="w-14 h-14 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center mb-2 text-gray-700">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="washing-machine"></i>
</div>
<span className="text-[10px] font-medium text-gray-500">Home</span>
</div>
<div className="flex flex-col items-center">
<div className="w-14 h-14 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center mb-2 text-gray-700">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="headphones"></i>
</div>
<span className="text-[10px] font-medium text-gray-500">Audio</span>
</div>
</div>
</div>

<div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 flex items-start space-x-3">
<i className="w-5 h-5 text-yellow-600 mt-0.5" data-lucide="lightbulb"></i>
<div>
<h4 className="text-xs font-semibold text-yellow-800">Did you know?</h4>
<p className="text-[10px] text-yellow-700 leading-relaxed mt-1">Repairing a single laptop saves ~190kg of CO2 emissions compared to buying new.</p>
</div>
</div>
</div>
</div>

<div className="screen hidden absolute inset-0 z-40 bg-black flex flex-col" id="screen-scanner">
<div className="absolute top-0 w-full p-4 flex justify-between z-10">
<button className="p-2 bg-black/40 backdrop-blur-md rounded-full text-white" onclick="navTo('screen-home')">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="flex-1 relative bg-gray-900 overflow-hidden flex items-center justify-center">
<img className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="relative w-64 h-64 border-2 border-white/50 rounded-3xl">
<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00B894]"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00B894]"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00B894]"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00B894]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-0.5 bg-[#00B894]/80 shadow-[0_0_15px_rgba(0,184,148,0.8)] animate-pulse"></div>
</div>
</div>
<div className="absolute bottom-10 w-full flex justify-center flex-col items-center">
<p className="text-white text-xs mb-4 font-medium tracking-wide bg-black/30 px-3 py-1 rounded-full">Align item in frame</p>
<button className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center bg-white/20 backdrop-blur-sm" onclick="navTo('screen-diagnosis')">
<div className="w-12 h-12 bg-white rounded-full"></div>
</button>
</div>
</div>
</div>

<div className="screen hidden absolute inset-0 z-40 bg-gray-50 flex flex-col overflow-y-auto no-scrollbar" id="screen-diagnosis">
<div className="h-64 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent"></div>
<button className="absolute top-4 left-4 p-2 bg-white/80 rounded-full backdrop-blur-sm shadow-sm" onclick="navTo('screen-scanner')">
<i className="w-5 h-5 text-gray-800" data-lucide="arrow-left"></i>
</button>
</div>
<div className="px-6 -mt-12 relative z-10 pb-20">
<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
<h2 className="text-xl font-semibold text-gray-900 mb-1">Laptop Screen Damage</h2>
<p className="text-xs text-gray-500 mb-4">Detected by AI Analysis • 98% Confidence</p>
<div className="flex items-center space-x-2 text-xs font-medium text-amber-600 bg-amber-50 px-3 py-2 rounded-lg mb-4 w-max">
<i className="w-4 h-4" data-lucide="alert-triangle"></i>
<span>LCD Crack / Hinge Issue</span>
</div>
<div className="flex space-x-3 mb-4">
<div className="flex-1 bg-green-50 p-3 rounded-xl border border-green-100">
<p className="text-[10px] text-green-600 uppercase font-semibold">Repair Cost</p>
<p className="text-lg font-bold text-green-700">$120</p>
</div>
<div className="flex-1 bg-gray-50 p-3 rounded-xl border border-gray-100 opacity-70">
<p className="text-[10px] text-gray-500 uppercase font-semibold">New Price</p>
<p className="text-lg font-bold text-gray-700">$1,200</p>
</div>
</div>
<div className="text-xs text-gray-500 flex items-center">
<i className="w-4 h-4 text-[#00B894] mr-1.5" data-lucide="check-circle-2"></i>
                        You save <span className="font-bold text-gray-900 mx-1">90%</span> by repairing!
                    </div>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
<h3 className="text-sm font-semibold mb-3">Environmental Impact</h3>
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-gray-500">E-Waste Prevented</span>
<span className="text-xs font-bold text-gray-900">2.4 kg</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-[#00B894] h-1.5 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
<button className="w-full py-3.5 bg-gray-900 text-white rounded-xl font-medium shadow-lg shadow-gray-200 hover:bg-black transition-colors flex items-center justify-center" onclick="navTo('screen-shops')">
                    Find Repair Experts <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="screen hidden absolute inset-0 z-40 bg-gray-50 flex flex-col" id="screen-shops">
<div className="bg-white p-4 border-b border-gray-100 sticky top-0 z-10 shadow-sm">
<div className="flex items-center space-x-3 mb-4">
<button onclick="navTo('screen-diagnosis')"><i className="w-5 h-5 text-gray-700" data-lucide="arrow-left"></i></button>
<h2 className="font-semibold text-gray-900">Verified Technicians</h2>
</div>

<div className="flex space-x-2 overflow-x-auto no-scrollbar">
<span className="px-3 py-1.5 bg-gray-900 text-white text-xs rounded-full whitespace-nowrap">Near me</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs rounded-full whitespace-nowrap">Top Rated</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs rounded-full whitespace-nowrap">Price: Low to High</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs rounded-full whitespace-nowrap">Pickup</span>
</div>
</div>
<div className="p-4 space-y-4 overflow-y-auto flex-1">

<div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-[#00B894] transition-colors cursor-pointer group" onclick="navTo('screen-shop-profile')">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#00B894]">QuickFix Tech</h3>
<div className="flex items-center text-xs text-gray-500 mt-0.5">
<i className="w-3 h-3 text-yellow-400 fill-current mr-1" data-lucide="star"></i>
<span className="font-medium text-gray-800 mr-1">4.8</span> (120+) • 0.8 mi
                                </div>
</div>
</div>
<span className="bg-blue-50 text-[#0984E3] text-[10px] font-semibold px-2 py-1 rounded-md">Verified</span>
</div>
<div className="flex items-center justify-between text-xs pt-3 border-t border-gray-50">
<span className="text-gray-500">Screen Repair</span>
<span className="font-semibold text-gray-900">From $110</span>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-[#00B894] transition-colors cursor-pointer">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900">Green Gadgets</h3>
<div className="flex items-center text-xs text-gray-500 mt-0.5">
<i className="w-3 h-3 text-yellow-400 fill-current mr-1" data-lucide="star"></i>
<span className="font-medium text-gray-800 mr-1">4.5</span> (85) • 1.2 mi
                                </div>
</div>
</div>
<span className="bg-gray-100 text-gray-500 text-[10px] font-semibold px-2 py-1 rounded-md">Shop</span>
</div>
<div className="flex items-center justify-between text-xs pt-3 border-t border-gray-50">
<span className="text-gray-500">Screen Repair</span>
<span className="font-semibold text-gray-900">From $105</span>
</div>
</div>
</div>
</div>

<div className="screen hidden absolute inset-0 z-40 bg-white flex flex-col overflow-y-auto no-scrollbar" id="screen-shop-profile">
<div className="relative h-48 bg-gray-200">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20"></div>
<button className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30" onclick="navTo('screen-shops')">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
</div>
<div className="px-6 py-5">
<div className="flex justify-between items-start mb-4">
<div>
<h2 className="text-xl font-semibold text-gray-900">QuickFix Tech</h2>
<p className="text-sm text-gray-500 mt-1">Electronics Specialist</p>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center bg-green-50 px-2 py-1 rounded-md mb-1">
<span className="text-xs font-bold text-[#00B894]">Open Now</span>
</div>
<div className="flex items-center text-xs">
<i className="w-3 h-3 text-yellow-400 fill-current mr-1" data-lucide="star"></i> 4.8
                        </div>
</div>
</div>
<div className="grid grid-cols-3 gap-3 mb-6">
<button className="flex flex-col items-center justify-center py-3 bg-gray-50 rounded-xl border border-gray-100 text-[#0984E3]">
<i className="w-5 h-5 mb-1" data-lucide="message-circle"></i>
<span className="text-[10px] font-medium">Chat</span>
</button>
<button className="flex flex-col items-center justify-center py-3 bg-gray-50 rounded-xl border border-gray-100 text-[#0984E3]">
<i className="w-5 h-5 mb-1" data-lucide="phone"></i>
<span className="text-[10px] font-medium">Call</span>
</button>
<button className="flex flex-col items-center justify-center py-3 bg-gray-50 rounded-xl border border-gray-100 text-[#0984E3]">
<i className="w-5 h-5 mb-1" data-lucide="share-2"></i>
<span className="text-[10px] font-medium">Share</span>
</button>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-3">Services</h3>
<div className="space-y-3 mb-20">
<div className="flex justify-between items-center p-3 border border-gray-100 rounded-xl shadow-sm">
<div>
<p className="text-sm font-medium">Screen Replacement</p>
<p className="text-xs text-gray-400">~2 hours</p>
</div>
<span className="text-sm font-bold">$120</span>
</div>
<div className="flex justify-between items-center p-3 border border-gray-100 rounded-xl shadow-sm">
<div>
<p className="text-sm font-medium">Battery Replacement</p>
<p className="text-xs text-gray-400">~1 hour</p>
</div>
<span className="text-sm font-bold">$80</span>
</div>
</div>
</div>
<div className="fixed bottom-0 max-w-[400px] w-full p-4 bg-white border-t border-gray-100">
<button className="w-full py-3.5 bg-[#00B894] text-white rounded-xl font-medium shadow-lg shadow-green-100" onclick="navTo('screen-booking')">
                    Book Repair
                </button>
</div>
</div>

<div className="screen hidden absolute inset-0 z-40 bg-gray-50 flex flex-col" id="screen-booking">
<div className="bg-white p-4 border-b border-gray-100 sticky top-0 flex items-center space-x-3">
<button onclick="navTo('screen-shop-profile')"><i className="w-5 h-5 text-gray-700" data-lucide="arrow-left"></i></button>
<h2 className="font-semibold text-gray-900">Book Repair</h2>
</div>
<div className="p-6 space-y-6 overflow-y-auto no-scrollbar pb-24">

<div>
<label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">Service Type</label>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 bg-white border-2 border-[#0984E3] rounded-xl flex flex-col items-center justify-center text-center">
<i className="w-5 h-5 text-[#0984E3] mb-1" data-lucide="truck"></i>
<span className="text-xs font-semibold text-gray-900">Pickup ($5)</span>
</div>
<div className="p-3 bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center text-center opacity-60">
<i className="w-5 h-5 text-gray-500 mb-1" data-lucide="store"></i>
<span className="text-xs font-medium text-gray-900">Visit Shop</span>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">Date &amp; Time</label>
<input className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm mb-2 text-gray-600" type="date" value="2023-10-24"/>
<div className="flex space-x-2 overflow-x-auto no-scrollbar">
<span className="px-4 py-2 bg-gray-200 rounded-lg text-xs text-gray-500">09:00</span>
<span className="px-4 py-2 bg-[#0984E3] text-white rounded-lg text-xs font-medium shadow-sm">10:30</span>
<span className="px-4 py-2 bg-gray-200 rounded-lg text-xs text-gray-500">13:00</span>
<span className="px-4 py-2 bg-gray-200 rounded-lg text-xs text-gray-500">15:30</span>
</div>
</div>

<div>
<label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">Issue Description</label>
<textarea className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 h-24 resize-none focus:outline-none focus:border-[#0984E3]" placeholder="Describe the issue... (e.g. Screen cracked, touch not working)"></textarea>
</div>

<div className="bg-green-50 border border-green-100 p-3 rounded-xl flex items-center space-x-3">
<div className="bg-green-100 p-1.5 rounded-full">
<i className="w-4 h-4 text-[#00B894]" data-lucide="leaf"></i>
</div>
<p className="text-xs text-green-800 font-medium">Repairing instead of replacing will save you <span className="font-bold">~ $1,080</span>.</p>
</div>
</div>
<div className="fixed bottom-0 max-w-[400px] w-full p-4 bg-white border-t border-gray-100 flex justify-between items-center">
<div>
<p className="text-xs text-gray-400">Total Estimate</p>
<p className="text-lg font-bold text-gray-900">$125.00</p>
</div>
<button className="px-8 py-3 bg-gray-900 text-white rounded-xl font-medium" onclick="navTo('screen-payment')">Continue</button>
</div>
</div>

<div className="screen hidden absolute inset-0 z-40 bg-gray-50 flex flex-col" id="screen-payment">
<div className="bg-white p-4 border-b border-gray-100 flex items-center space-x-3 sticky top-0">
<button onclick="navTo('screen-booking')"><i className="w-5 h-5 text-gray-700" data-lucide="arrow-left"></i></button>
<h2 className="font-semibold text-gray-900">Payment</h2>
</div>
<div className="p-6 space-y-6 flex-1 overflow-y-auto">
<div className="bg-white p-4 rounded-xl border border-gray-100 space-y-3">
<div className="flex justify-between text-sm text-gray-600">
<span>Screen Repair</span>
<span>$120.00</span>
</div>
<div className="flex justify-between text-sm text-gray-600">
<span>Pickup Fee</span>
<span>$5.00</span>
</div>
<div className="h-px bg-gray-100 w-full my-2"></div>
<div className="flex justify-between font-bold text-gray-900">
<span>Total</span>
<span>$125.00</span>
</div>
</div>
<div>
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Payment Method</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-white border-2 border-[#0984E3] rounded-xl">
<div className="flex items-center space-x-3">
<i className="w-5 h-5 text-[#0984E3]" data-lucide="credit-card"></i>
<span className="text-sm font-medium text-gray-900">Credit Card</span>
</div>
<div className="w-4 h-4 rounded-full border-[5px] border-[#0984E3]"></div>
</div>
<div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl opacity-60">
<div className="flex items-center space-x-3">
<i className="w-5 h-5 text-gray-500" data-lucide="wallet"></i>
<span className="text-sm font-medium text-gray-900">UPI / Wallet</span>
</div>
<div className="w-4 h-4 rounded-full border border-gray-300"></div>
</div>
<div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl opacity-60">
<div className="flex items-center space-x-3">
<i className="w-5 h-5 text-gray-500" data-lucide="banknote"></i>
<span className="text-sm font-medium text-gray-900">Cash on Delivery</span>
</div>
<div className="w-4 h-4 rounded-full border border-gray-300"></div>
</div>
</div>
</div>
</div>
<div className="p-4 bg-white border-t border-gray-100">
<button className="w-full py-3.5 bg-[#00B894] text-white rounded-xl font-medium shadow-lg shadow-green-100 flex justify-center items-center" onclick="navTo('screen-tracking')">
                    Pay &amp; Book <i className="w-4 h-4 ml-2" data-lucide="check"></i>
</button>
</div>
</div>

<div className="screen hidden absolute inset-0 z-40 bg-gray-50 flex flex-col" id="screen-tracking">
<div className="bg-white p-4 border-b border-gray-100 flex items-center space-x-3 sticky top-0 z-10">
<button onclick="navTo('screen-home')"><i className="w-5 h-5 text-gray-700" data-lucide="arrow-left"></i></button>
<h2 className="font-semibold text-gray-900">Order #R-4923</h2>
</div>
<div className="p-6 overflow-y-auto no-scrollbar pb-20">

<div className="w-full h-40 bg-blue-50 rounded-2xl mb-6 relative overflow-hidden border border-blue-100 flex items-center justify-center">
<i className="w-8 h-8 text-blue-200 mb-2" data-lucide="map"></i>
<div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] opacity-10 bg-cover"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#0984E3] rounded-full ring-4 ring-blue-200 animate-pulse"></div>
<div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-[10px] font-medium shadow-sm">Technician on the way</div>
</div>
<div className="relative pl-4 border-l-2 border-gray-200 space-y-8 my-4">

<div className="relative">
<div className="absolute -left-[21px] top-0 w-4 h-4 rounded-full bg-[#00B894] ring-4 ring-white"></div>
<h4 className="text-sm font-semibold text-gray-900">Booking Confirmed</h4>
<p className="text-xs text-gray-500 mt-1">Oct 24, 09:30 AM</p>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-0 w-4 h-4 rounded-full bg-[#00B894] ring-4 ring-white"></div>
<h4 className="text-sm font-semibold text-gray-900">Technician Assigned</h4>
<p className="text-xs text-gray-500 mt-1">Mike is on the way for pickup</p>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-0 w-4 h-4 rounded-full bg-[#0984E3] ring-4 ring-blue-100 animate-pulse"></div>
<h4 className="text-sm font-semibold text-gray-900 text-[#0984E3]">Pickup in Progress</h4>
<p className="text-xs text-gray-500 mt-1">Estimated: 10:30 AM</p>
</div>

<div className="relative opacity-50">
<div className="absolute -left-[21px] top-0 w-4 h-4 rounded-full bg-gray-200 ring-4 ring-white"></div>
<h4 className="text-sm font-semibold text-gray-900">Repairing</h4>
</div>

<div className="relative opacity-50">
<div className="absolute -left-[21px] top-0 w-4 h-4 rounded-full bg-gray-200 ring-4 ring-white"></div>
<h4 className="text-sm font-semibold text-gray-900">Delivery</h4>
</div>
</div>
</div>
<div className="absolute bottom-0 w-full p-4 bg-white border-t border-gray-100 flex justify-between space-x-4">
<button className="flex-1 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
<button className="flex-1 py-3 bg-[#0984E3] text-white rounded-xl text-sm font-medium shadow-md shadow-blue-100 flex items-center justify-center" onclick="navTo('screen-support')">
<i className="w-4 h-4 mr-2" data-lucide="message-square"></i> Chat
                </button>
</div>
</div>

<div className="screen hidden absolute inset-0 z-30 bg-gray-50 pb-20 overflow-y-auto no-scrollbar" id="screen-impact">
<div className="bg-[#00B894] p-6 pb-8 text-white rounded-b-3xl">
<h2 className="text-xl font-semibold mb-6">Your Impact</h2>
<div className="flex justify-between items-end">
<div>
<p className="text-green-100 text-sm mb-1">Total Saved</p>
<h1 className="text-4xl font-bold tracking-tight">$3,420</h1>
</div>
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
<i className="w-6 h-6 text-white" data-lucide="award"></i>
</div>
</div>
</div>
<div className="px-6 -mt-6">

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
<div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mb-3">
<i className="w-4 h-4 text-green-600" data-lucide="trash-2"></i>
</div>
<p className="text-2xl font-bold text-gray-900">12kg</p>
<p className="text-[10px] text-gray-500 uppercase font-medium mt-1">E-Waste Saved</p>
</div>
<div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
<div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mb-3">
<i className="w-4 h-4 text-blue-600" data-lucide="cloud"></i>
</div>
<p className="text-2xl font-bold text-gray-900">45kg</p>
<p className="text-[10px] text-gray-500 uppercase font-medium mt-1">CO2 Reduced</p>
</div>
</div>

<h3 className="text-sm font-semibold text-gray-900 mb-3">Achievements</h3>
<div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-100 to-yellow-200 flex items-center justify-center">
<i className="w-5 h-5 text-yellow-600" data-lucide="zap"></i>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900">Repair Warrior</h4>
<p className="text-xs text-gray-400">5 items repaired</p>
</div>
</div>
<span className="text-xs font-bold text-gray-300">Unlocked</span>
</div>
<div className="h-px bg-gray-50 w-full"></div>
<div className="flex items-center justify-between opacity-50 grayscale">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-100 to-green-200 flex items-center justify-center">
<i className="w-5 h-5 text-green-600" data-lucide="globe"></i>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900">Planet Saver</h4>
<p className="text-xs text-gray-400">Save 50kg CO2</p>
</div>
</div>
<span className="text-xs font-bold text-gray-400">Locked</span>
</div>
</div>
</div>
</div>

<div className="screen hidden absolute inset-0 z-30 bg-gray-50 pb-20 overflow-y-auto no-scrollbar" id="screen-profile">
<div className="bg-white p-6 border-b border-gray-100 mb-4">
<div className="flex items-center space-x-4">
<img alt="Profile" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" src="https://i.pravatar.cc/100?img=33"/>
<div>
<h2 className="text-xl font-semibold text-gray-900">Alex Morgan</h2>
<p className="text-sm text-gray-500">alex.morgan@email.com</p>
</div>
</div>
</div>
<div className="px-4 space-y-3">
<button className="w-full bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between shadow-sm" onclick="navTo('screen-tracking')">
<div className="flex items-center space-x-3">
<div className="bg-blue-50 p-2 rounded-lg"><i className="w-4 h-4 text-[#0984E3]" data-lucide="clock"></i></div>
<span className="text-sm font-medium text-gray-700">Past Repairs</span>
</div>
<i className="w-4 h-4 text-gray-300" data-lucide="chevron-right"></i>
</button>
<button className="w-full bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between shadow-sm">
<div className="flex items-center space-x-3">
<div className="bg-green-50 p-2 rounded-lg"><i className="w-4 h-4 text-[#00B894]" data-lucide="heart"></i></div>
<span className="text-sm font-medium text-gray-700">Saved Technicians</span>
</div>
<i className="w-4 h-4 text-gray-300" data-lucide="chevron-right"></i>
</button>
<button className="w-full bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between shadow-sm" onclick="navTo('screen-support')">
<div className="flex items-center space-x-3">
<div className="bg-purple-50 p-2 rounded-lg"><i className="w-4 h-4 text-purple-600" data-lucide="help-circle"></i></div>
<span className="text-sm font-medium text-gray-700">Help &amp; Support</span>
</div>
<i className="w-4 h-4 text-gray-300" data-lucide="chevron-right"></i>
</button>
<div className="mt-6">
<p className="px-2 mb-2 text-xs font-semibold text-gray-400 uppercase">Settings</p>
<div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
<div className="p-4 flex items-center justify-between border-b border-gray-50">
<span className="text-sm font-medium text-gray-700">Notifications</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<span className="text-sm font-medium text-gray-700">Dark Mode</span>
<span className="text-xs text-gray-400">System Default</span>
</div>
</div>
</div>
<button className="w-full mt-4 p-4 text-center text-red-500 text-sm font-medium" onclick="navTo('screen-login')">Log Out</button>
</div>
</div>

<div className="screen hidden absolute inset-0 z-40 bg-gray-50 flex flex-col" id="screen-support">
<div className="bg-white p-4 border-b border-gray-100 flex items-center space-x-3 sticky top-0">
<button onclick="navTo('screen-profile')"><i className="w-5 h-5 text-gray-700" data-lucide="arrow-left"></i></button>
<h2 className="font-semibold text-gray-900">Help &amp; Support</h2>
</div>
<div className="p-6 space-y-6 overflow-y-auto">
<div className="bg-blue-50 p-4 rounded-xl flex items-center justify-between">
<div>
<h3 className="font-medium text-[#0984E3]">Chat with us</h3>
<p className="text-xs text-blue-400">Usually replies in 5 mins</p>
</div>
<button className="bg-[#0984E3] text-white px-4 py-2 rounded-lg text-xs font-medium">Start Chat</button>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900 mb-3">Frequently Asked Questions</h3>
<div className="space-y-2">
<details className="bg-white p-4 rounded-xl border border-gray-100 group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-sm text-gray-700">
                                How does the pricing work?
                                <span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-xs text-gray-500 mt-3 leading-relaxed">
                                Pricing is based on labor, parts, and service type. We provide an estimate before you book.
                            </p>
</details>
<details className="bg-white p-4 rounded-xl border border-gray-100 group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-sm text-gray-700">
                                Is there a warranty?
                                <span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-xs text-gray-500 mt-3 leading-relaxed">
                                Yes, most repairs come with a 30-day warranty on parts and labor.
                            </p>
</details>
</div>
</div>
<form className="space-y-3">
<h3 className="text-sm font-semibold text-gray-900">Raise an Issue</h3>
<input className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm" placeholder="Subject" type="text"/>
<textarea className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm h-32 resize-none" placeholder="Describe your problem..."></textarea>
<button className="w-full py-3 bg-gray-900 text-white rounded-xl text-sm font-medium">Submit Ticket</button>
</form>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white border-t border-gray-100 flex justify-around py-3 px-2 z-50 hidden" id="bottom-nav">
<button className="flex flex-col items-center justify-center space-y-1 w-16 text-[#00B894]" onclick="navTo('screen-home')">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center justify-center space-y-1 w-16 text-gray-400 hover:text-gray-900" onclick="navTo('screen-impact')">
<i className="w-5 h-5" data-lucide="pie-chart"></i>
<span className="text-[10px] font-medium">Impact</span>
</button>
<button className="relative -top-5 bg-gray-900 text-white rounded-full p-3 shadow-lg shadow-gray-400 hover:scale-105 transition-transform" onclick="navTo('screen-scanner')">
<i className="w-6 h-6" data-lucide="scan-line"></i>
</button>
<button className="flex flex-col items-center justify-center space-y-1 w-16 text-gray-400 hover:text-gray-900" onclick="navTo('screen-tracking')">
<i className="w-5 h-5" data-lucide="package"></i>
<span className="text-[10px] font-medium">Orders</span>
</button>
<button className="flex flex-col items-center justify-center space-y-1 w-16 text-gray-400 hover:text-gray-900" onclick="navTo('screen-profile')">
<i className="w-5 h-5" data-lucide="user"></i>
<span className="text-[10px] font-medium">Profile</span>
</button>
</div>
</div>



    </>
  );
}
