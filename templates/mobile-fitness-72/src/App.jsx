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



        // Show splash on load
        window.addEventListener('load', function() {
            document.getElementById('splash').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('splash').classList.add('hidden');
            }, 2000);
        });

        // Navigation
        function showScreen(screen) {
            // Hide all screens
            document.getElementById('home').classList.add('hidden');
            document.getElementById('library').classList.add('hidden');
            document.getElementById('activity').classList.add('hidden');
            document.getElementById('profile').classList.add('hidden');
            
            // Show selected screen
            document.getElementById(screen).classList.remove('hidden');
            
            // Update nav buttons
            const navButtons = ['navHome', 'navLibrary', 'navActivity', 'navProfile'];
            navButtons.forEach(btn => {
                document.getElementById(btn).classList.remove('active-tab');
                const icon = document.getElementById(btn).querySelector('iconify-icon');
                const text = document.getElementById(btn).querySelector('span');
                icon.classList.remove('text-stone-700');
                icon.classList.add('text-stone-600');
                text.classList.remove('text-stone-700');
                text.classList.add('text-stone-600');
            });
            
            // Highlight active button
            const activeBtn = document.getElementById('nav' + screen.charAt(0).toUpperCase() + screen.slice(1));
            activeBtn.classList.add('active-tab');
            const activeIcon = activeBtn.querySelector('iconify-icon');
            const activeText = activeBtn.querySelector('span');
            activeIcon.classList.remove('text-stone-600');
            activeIcon.classList.add('text-stone-700');
            activeText.classList.remove('text-stone-600');
            activeText.classList.add('text-stone-700');
        }

        // Settings Flow
        function openSettings() {
            document.getElementById('settings').classList.remove('hidden');
            document.getElementById('bottomNav').classList.add('translate-y-full'); // Hide nav
        }

        function closeSettings() {
            document.getElementById('settings').classList.add('hidden');
            document.getElementById('bottomNav').classList.remove('translate-y-full'); // Show nav
        }

        // Video player
        function openVideoPlayer() {
            document.getElementById('videoPlayer').classList.remove('hidden');
        }

        function closeVideoPlayer() {
            document.getElementById('videoPlayer').classList.add('hidden');
        }

        function showReflection() {
            document.getElementById('reflection').classList.remove('hidden');
        }

        function saveWorkout() {
            document.getElementById('reflection').classList.add('hidden');
            document.getElementById('videoPlayer').classList.add('hidden');
            showScreen('home');
            
            setTimeout(() => {
                alert('Workout saved! Great job 💪');
            }, 300);
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
      

<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-stone-200 via-neutral-100 to-stone-100 hidden" id="splash">
<div className="gradient-shimmer absolute inset-0"></div>
<div className="relative z-10">
<div className="text-7xl bebas tracking-tighter text-stone-700 mb-4">FITPANAMA</div>
<p className="text-sm text-stone-600 text-center tracking-wide">Train smarter. Stay consistent.</p>
</div>
</div>

<div className="max-w-md mx-auto px-4 pt-6" id="home">

<div className="mb-6">
<h1 className="text-3xl bebas text-stone-800 tracking-tight-custom mb-1">Good morning, Sofia</h1>
<p className="text-sm text-stone-600">Let's make today count</p>

<div className="flex gap-2 mt-4">
<div className="glass-dark px-3 py-1.5 rounded-full flex items-center gap-1.5">
<iconify-icon className="green-accent" icon="solar:fire-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-stone-700">7 Day Streak</span>
</div>
<div className="glass-dark px-3 py-1.5 rounded-full flex items-center gap-1.5">
<iconify-icon className="text-stone-600" icon="solar:medal-star-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-stone-700">100 Sessions</span>
</div>
</div>
</div>

<div className="glass rounded-3xl overflow-hidden mb-6 workout-card shadow-lg cursor-pointer" onclick="openVideoPlayer()">
<div className="relative h-64 bg-gradient-to-br from-stone-300 via-stone-200 to-neutral-200">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full glass flex items-center justify-center">
<iconify-icon className="text-stone-700" icon="solar:play-linear" width="28"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4">
<div className="glass-dark px-3 py-1 rounded-full flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-xs font-semibold text-stone-800 bebas tracking-wide">LIVE NOW</span>
</div>
</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-xl bebas text-stone-800 tracking-tight-custom mb-1">HIIT STRENGTH COMBO</h3>
<p className="text-sm text-stone-600">with Maria Rodriguez</p>
</div>
<div className="text-right">
<div className="text-lg font-semibold text-stone-800">30m</div>
</div>
</div>
<button className="w-full glass-accent py-3 rounded-2xl text-sm font-semibold text-stone-800 hover:bg-stone-200 transition-all">
                    Start Workout
                </button>
</div>
</div>

<div className="mb-6">
<div className="flex items-center justify-between mb-3">
<h2 className="text-xl bebas text-stone-800 tracking-tight-custom">Community Leaders</h2>
</div>
<div className="glass-dark rounded-2xl p-4">
<div className="flex gap-2 mb-4 overflow-x-auto pb-2">
<button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white text-stone-800 whitespace-nowrap">Most Disciplined</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-stone-600 whitespace-nowrap">Advanced</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-stone-600 whitespace-nowrap">Longest Members</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-stone-300 to-stone-200 flex items-center justify-center text-xs font-semibold text-stone-700">AR</div>
<div className="flex-1">
<div className="text-sm font-medium text-stone-800">Ana Rodriguez</div>
<div className="text-xs text-stone-600">45 day streak</div>
</div>
<div className="text-lg font-semibold green-accent">1st</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-stone-300 to-stone-200 flex items-center justify-center text-xs font-semibold text-stone-700">CM</div>
<div className="flex-1">
<div className="text-sm font-medium text-stone-800">Carlos Martinez</div>
<div className="text-xs text-stone-600">38 day streak</div>
</div>
<div className="text-lg font-semibold text-stone-600">2nd</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-stone-300 to-stone-200 flex items-center justify-center text-xs font-semibold text-stone-700">LP</div>
<div className="flex-1">
<div className="text-sm font-medium text-stone-800">Laura Perez</div>
<div className="text-xs text-stone-600">32 day streak</div>
</div>
<div className="text-lg font-semibold text-stone-600">3rd</div>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-xl bebas text-stone-800 tracking-tight-custom mb-3">Workouts for You</h2>
<div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4">
<div className="glass-dark rounded-2xl p-3 min-w-[140px] workout-card cursor-pointer" onclick="openVideoPlayer()">
<div className="text-xs font-medium text-stone-600 mb-2">MON</div>
<div className="w-full h-24 bg-gradient-to-br from-stone-300 to-neutral-200 rounded-xl mb-2"></div>
<div className="flex items-center justify-between">
<span className="text-xs text-stone-700">25m</span>
<span className="text-xs glass-accent px-2 py-0.5 rounded-full text-stone-700">Recorded</span>
</div>
</div>
<div className="glass-dark rounded-2xl p-3 min-w-[140px] workout-card cursor-pointer" onclick="openVideoPlayer()">
<div className="text-xs font-medium text-stone-600 mb-2">TUE</div>
<div className="w-full h-24 bg-gradient-to-br from-stone-300 to-neutral-200 rounded-xl mb-2"></div>
<div className="flex items-center justify-between">
<span className="text-xs text-stone-700">30m</span>
<span className="text-xs glass-accent px-2 py-0.5 rounded-full text-stone-700">Recorded</span>
</div>
</div>
<div className="glass-dark rounded-2xl p-3 min-w-[140px] workout-card cursor-pointer" onclick="openVideoPlayer()">
<div className="text-xs font-medium text-stone-600 mb-2">WED</div>
<div className="w-full h-24 bg-gradient-to-br from-stone-300 to-neutral-200 rounded-xl mb-2"></div>
<div className="flex items-center justify-between">
<span className="text-xs text-stone-700">20m</span>
<span className="text-xs glass-accent px-2 py-0.5 rounded-full text-stone-700">Recorded</span>
</div>
</div>
</div>
</div>

<div className="glass-dark rounded-2xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base bebas text-stone-800 tracking-tight-custom">This Week</h3>
<button className="text-xs font-medium green-accent" onclick="showScreen('activity')">View Activity</button>
</div>
<div className="flex items-end justify-between h-20 gap-2">
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-gradient-to-t from-green-400 to-green-300 rounded-t-lg h-16"></div>
<span className="text-xs text-stone-600">M</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-gradient-to-t from-green-400 to-green-300 rounded-t-lg h-12"></div>
<span className="text-xs text-stone-600">T</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-gradient-to-t from-green-400 to-green-300 rounded-t-lg h-20"></div>
<span className="text-xs text-stone-600">W</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-gradient-to-t from-green-400 to-green-300 rounded-t-lg h-14"></div>
<span className="text-xs text-stone-600">T</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-gradient-to-t from-green-400 to-green-300 rounded-t-lg h-16"></div>
<span className="text-xs text-stone-600">F</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-stone-200 rounded-t-lg h-8"></div>
<span className="text-xs text-stone-600">S</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-stone-200 rounded-t-lg h-8"></div>
<span className="text-xs text-stone-600">S</span>
</div>
</div>
</div>
</div>

<div className="max-w-md mx-auto px-4 pt-6 hidden" id="library">
<h1 className="text-3xl bebas text-stone-800 tracking-tight-custom mb-6">Library</h1>

<div className="glass rounded-2xl p-4 flex items-center gap-3 mb-6">
<iconify-icon className="text-stone-600" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="bg-transparent outline-none text-sm flex-1 text-stone-800 placeholder-stone-500" placeholder="Search workouts, trainers..." type="text"/>
</div>

<h2 className="text-xl bebas text-stone-800 tracking-tight-custom mb-3">Browse by Category</h2>
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="glass-dark rounded-2xl p-5 workout-card cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-stone-300 to-stone-200 flex items-center justify-center mb-3">
<iconify-icon className="text-stone-700" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base bebas text-stone-800 mb-1">Pregnancy</h3>
<p className="text-xs text-stone-600">Safe workouts</p>
</div>
<div className="glass-dark rounded-2xl p-5 workout-card cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-stone-300 to-stone-200 flex items-center justify-center mb-3">
<iconify-icon className="text-stone-700" icon="solar:suitcase-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base bebas text-stone-800 mb-1">Travel</h3>
<p className="text-xs text-stone-600">No equipment</p>
</div>
<div className="glass-dark rounded-2xl p-5 workout-card cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-stone-300 to-stone-200 flex items-center justify-center mb-3">
<iconify-icon className="text-stone-700" icon="solar:dumbbell-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base bebas text-stone-800 mb-1">Strength</h3>
<p className="text-xs text-stone-600">Build muscle</p>
</div>
<div className="glass-dark rounded-2xl p-5 workout-card cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-stone-300 to-stone-200 flex items-center justify-center mb-3">
<iconify-icon className="text-stone-700" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base bebas text-stone-800 mb-1">HIIT</h3>
<p className="text-xs text-stone-600">High intensity</p>
</div>
</div>

<h2 className="text-xl bebas text-stone-800 tracking-tight-custom mb-3">Featured Programs</h2>
<div className="space-y-3">
<div className="glass rounded-2xl p-4 flex gap-4 workout-card cursor-pointer" onclick="openVideoPlayer()">
<div className="w-24 h-24 bg-gradient-to-br from-stone-300 to-neutral-200 rounded-xl flex-shrink-0"></div>
<div className="flex-1">
<h3 className="text-base bebas text-stone-800 mb-1">28-Day Core Challenge</h3>
<p className="text-xs text-stone-600 mb-2">Build strength from the inside out</p>
<div className="flex items-center gap-2">
<span className="text-xs glass-accent px-2 py-0.5 rounded-full text-stone-700">Intermediate</span>
<span className="text-xs text-stone-600">28 sessions</span>
</div>
</div>
</div>
<div className="glass rounded-2xl p-4 flex gap-4 workout-card cursor-pointer" onclick="openVideoPlayer()">
<div className="w-24 h-24 bg-gradient-to-br from-stone-300 to-neutral-200 rounded-xl flex-shrink-0"></div>
<div className="flex-1">
<h3 className="text-base bebas text-stone-800 mb-1">Runner's Strength</h3>
<p className="text-xs text-stone-600 mb-2">Prevent injuries, run faster</p>
<div className="flex items-center gap-2">
<span className="text-xs glass-accent px-2 py-0.5 rounded-full text-stone-700">Advanced</span>
<span className="text-xs text-stone-600">12 sessions</span>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-md mx-auto px-4 pt-6 hidden" id="activity">
<h1 className="text-3xl bebas text-stone-800 tracking-tight-custom mb-6">Activity</h1>

<div className="grid grid-cols-2 gap-3 mb-6">
<div className="glass-dark rounded-2xl p-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-stone-600" icon="solar:walking-linear" width="20"></iconify-icon>
<span className="text-xs text-stone-600">Steps</span>
</div>
<div className="text-2xl font-semibold text-stone-800">8,543</div>
<div className="text-xs text-stone-600 mt-1">of 10,000</div>
</div>
<div className="glass-dark rounded-2xl p-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-stone-600" icon="solar:moon-stars-linear" width="20"></iconify-icon>
<span className="text-xs text-stone-600">Sleep</span>
</div>
<div className="text-2xl font-semibold text-stone-800">7h 22m</div>
<div className="text-xs text-stone-600 mt-1">last night</div>
</div>
<div className="glass-dark rounded-2xl p-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-stone-600" icon="solar:cup-hot-linear" width="20"></iconify-icon>
<span className="text-xs text-stone-600">Water</span>
</div>
<div className="text-2xl font-semibold text-stone-800">6 cups</div>
<div className="text-xs text-stone-600 mt-1">of 8 today</div>
</div>
<div className="glass-dark rounded-2xl p-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-stone-600" icon="solar:leaf-linear" width="20"></iconify-icon>
<span className="text-xs text-stone-600">Nutrition</span>
</div>
<div className="text-2xl font-semibold text-stone-800">1,850</div>
<div className="text-xs text-stone-600 mt-1">calories</div>
</div>
</div>

<div className="glass rounded-2xl p-5 mb-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base bebas text-stone-800 tracking-tight-custom">Weekly Movement</h3>
<span className="text-xs text-stone-600">Last 7 days</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-8 text-xs text-stone-600">Mon</div>
<div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-400 to-green-300 rounded-full" style={{width: '85%'}}></div>
</div>
<div className="w-12 text-xs text-right text-stone-700 font-medium">45 min</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 text-xs text-stone-600">Tue</div>
<div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-400 to-green-300 rounded-full" style={{width: '60%'}}></div>
</div>
<div className="w-12 text-xs text-right text-stone-700 font-medium">30 min</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 text-xs text-stone-600">Wed</div>
<div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-400 to-green-300 rounded-full" style={{width: '100%'}}></div>
</div>
<div className="w-12 text-xs text-right text-stone-700 font-medium">60 min</div>
</div>
</div>
</div>
</div>

<div className="max-w-md mx-auto px-4 pt-6 hidden" id="profile">

<div className="flex items-center gap-4 mb-6">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-stone-300 to-stone-200 flex items-center justify-center text-2xl bebas text-stone-700">
                SR
            </div>
<div className="flex-1">
<h1 className="text-2xl bebas text-stone-800 tracking-tight-custom">Sofia Rodriguez</h1>
<p className="text-sm text-stone-600">Premium Member</p>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mb-6">
<div className="glass-dark rounded-2xl p-4 text-center">
<div className="text-3xl font-semibold text-stone-800 mb-1">100</div>
<div className="text-xs text-stone-600">Total Sessions</div>
</div>
<div className="glass-dark rounded-2xl p-4 text-center">
<div className="text-3xl font-semibold green-accent mb-1">7</div>
<div className="text-xs text-stone-600">Day Streak</div>
</div>
<div className="glass-dark rounded-2xl p-4 text-center">
<div className="text-3xl font-semibold text-stone-800 mb-1">42h</div>
<div className="text-xs text-stone-600">Hours Trained</div>
</div>
<div className="glass-dark rounded-2xl p-4 text-center">
<div className="text-3xl font-semibold text-stone-800 mb-1">HIIT</div>
<div className="text-xs text-stone-600">Favorite Type</div>
</div>
</div>

<div className="glass rounded-2xl p-5 mb-6">
<h3 className="text-base bebas text-stone-800 tracking-tight-custom mb-4">Connected Devices</h3>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-stone-300 to-stone-200 flex items-center justify-center">
<iconify-icon className="text-stone-700" icon="solar:smartwatch-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-stone-800">Apple Watch</div>
<div className="text-xs text-stone-600">Series 7</div>
</div>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span className="text-xs text-stone-700">Connected</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-stone-300 to-stone-200 flex items-center justify-center">
<iconify-icon className="text-stone-700" icon="solar:smartwatch-square-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-stone-800">Samsung Watch</div>
<div className="text-xs text-stone-600">Not connected</div>
</div>
</div>
<button className="text-xs font-medium text-stone-700">Connect</button>
</div>
</div>
</div>

<button className="w-full glass-accent py-3.5 rounded-2xl text-sm font-semibold text-stone-800 flex items-center justify-center gap-2 hover:bg-stone-200 transition-all mb-8" onclick="openSettings()">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
            Settings
        </button>
</div>

<div className="fixed inset-0 z-40 bg-stone-50 overflow-y-auto hidden" id="settings">
<div className="max-w-md mx-auto px-4 pt-6 pb-24">

<div className="flex items-center gap-4 mb-8 sticky top-0 pt-2 bg-stone-50 z-10 pb-4">
<button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-105 transition-transform" onclick="closeSettings()">
<iconify-icon className="text-stone-700" icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<h1 className="text-2xl bebas text-stone-800 tracking-tight-custom">Settings</h1>
</div>

<h2 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3 ml-1">Account</h2>
<div className="glass-dark rounded-2xl overflow-hidden mb-6">
<div className="p-4 border-b border-white/20 flex items-center justify-between cursor-pointer hover:bg-white/30 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-600" icon="solar:user-id-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-stone-800">Edit Profile</span>
</div>
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="p-4 border-b border-white/20 flex items-center justify-between cursor-pointer hover:bg-white/30 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-600" icon="solar:bell-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-stone-800">Notifications</span>
</div>
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/30 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-600" icon="solar:lock-password-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-stone-800">Privacy &amp; Security</span>
</div>
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>

<h2 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3 ml-1">Preferences</h2>
<div className="glass-dark rounded-2xl overflow-hidden mb-6">
<div className="p-4 border-b border-white/20 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-600" icon="solar:moon-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-stone-800">Dark Mode</span>
</div>

<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-stone-300 transition-all duration-300" id="toggle-dark" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-stone-300 cursor-pointer transition-all duration-300" htmlFor="toggle-dark"></label>
</input></div>
</div>
<div className="p-4 border-b border-white/20 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-600" icon="solar:soundwave-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-stone-800">Sound Effects</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-stone-300 transition-all duration-300" id="toggle-sound" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-stone-300 cursor-pointer transition-all duration-300" htmlFor="toggle-sound"></label>
</div>
</div>
<div className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/30 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-600" icon="solar:ruler-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-stone-800">Units</span>
</div>
<span className="text-xs font-medium text-stone-500">Metric (kg, cm)</span>
</div>
</div>

<h2 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3 ml-1">Support</h2>
<div className="glass-dark rounded-2xl overflow-hidden mb-8">
<div className="p-4 border-b border-white/20 flex items-center justify-between cursor-pointer hover:bg-white/30 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-600" icon="solar:question-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-stone-800">Help Center</span>
</div>
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/30 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-600" icon="solar:file-text-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-stone-800">Terms of Service</span>
</div>
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>

<button className="w-full py-3.5 rounded-2xl text-sm font-semibold text-red-500 border border-red-200 bg-red-50 hover:bg-red-100 transition-all">
                Log Out
            </button>
<p className="text-xs text-center text-stone-400 mt-4">Version 1.2.0</p>
</div>
</div>

<div className="fixed inset-0 bg-black z-50 hidden" id="videoPlayer">
<div className="relative h-full">

<div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-700 to-neutral-800 flex items-center justify-center">
<div className="text-white text-center">
<iconify-icon className="opacity-50 mb-4" icon="solar:play-circle-linear" width="64"></iconify-icon>
<p className="text-sm opacity-75">Video Player Simulation</p>
</div>
</div>

<div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
<div className="flex items-center justify-between">
<button className="w-10 h-10 rounded-full glass-dark flex items-center justify-center" onclick="closeVideoPlayer()">
<iconify-icon className="text-white" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="glass-dark px-3 py-1.5 rounded-full flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-xs font-semibold text-white bebas">LIVE</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">

<div className="mb-4">
<div className="h-1 bg-white/20 rounded-full overflow-hidden mb-2">
<div className="h-full bg-gradient-to-r from-green-400 to-green-300 rounded-full" style={{width: '35%'}}></div>
</div>
<div className="flex items-center justify-between text-xs text-white/80">
<span>12:30</span>
<span>35:00</span>
</div>
</div>

<div className="mb-4">
<h2 className="text-xl bebas text-white tracking-tight-custom mb-1">HIIT STRENGTH COMBO</h2>
<p className="text-sm text-white/80">with Maria Rodriguez</p>
</div>

<div className="flex items-center justify-center gap-6 mb-4">
<button className="w-12 h-12 rounded-full glass-dark flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:skip-previous-linear" width="24"></iconify-icon>
</button>
<button className="w-16 h-16 rounded-full glass flex items-center justify-center">
<iconify-icon className="text-stone-800" icon="solar:pause-linear" width="32"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full glass-dark flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:skip-next-linear" width="24"></iconify-icon>
</button>
</div>

<div className="glass-dark rounded-2xl p-4">
<h4 className="text-xs bebas text-white tracking-wide mb-2">EQUIPMENT NEEDED</h4>
<div className="flex gap-2">
<span className="text-xs bg-white/20 px-3 py-1 rounded-full text-white">Dumbbells</span>
<span className="text-xs bg-white/20 px-3 py-1 rounded-full text-white">Mat</span>
</div>
</div>

<button className="w-full mt-4 bg-red-500/20 py-3 rounded-2xl text-sm font-semibold text-white border border-red-400/30" onclick="showReflection()">
                    End Workout
                </button>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end hidden" id="reflection">
<div className="w-full max-w-md mx-auto glass rounded-t-3xl p-6 animate-slide-up">
<div className="w-12 h-1 bg-stone-300 rounded-full mx-auto mb-6"></div>
<h2 className="text-2xl bebas text-stone-800 tracking-tight-custom mb-6">How did it feel?</h2>

<div className="grid grid-cols-4 gap-2 mb-6">
<button className="glass-dark py-3 rounded-xl text-xs font-medium text-stone-700 hover:bg-stone-200 transition-all">Easy</button>
<button className="glass-dark py-3 rounded-xl text-xs font-medium text-stone-700 hover:bg-stone-200 transition-all">Moderate</button>
<button className="glass-dark py-3 rounded-xl text-xs font-medium text-stone-700 hover:bg-stone-200 transition-all">Hard</button>
<button className="glass-dark py-3 rounded-xl text-xs font-medium text-stone-700 hover:bg-stone-200 transition-all">Intense</button>
</div>

<div className="mb-6">
<h3 className="text-sm bebas text-stone-800 tracking-wide mb-3">Equipment Used</h3>
<div className="grid grid-cols-4 gap-3">
<button className="glass-dark p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-stone-200 transition-all">
<iconify-icon className="text-stone-700" icon="solar:dumbbell-linear" width="24"></iconify-icon>
<span className="text-xs text-stone-700">Weights</span>
</button>
<button className="glass-dark p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-stone-200 transition-all">
<iconify-icon className="text-stone-700" icon="solar:layer-linear" width="24"></iconify-icon>
<span className="text-xs text-stone-700">Mat</span>
</button>
<button className="glass-dark p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-stone-200 transition-all">
<iconify-icon className="text-stone-700" icon="solar:stretching-linear" width="24"></iconify-icon>
<span className="text-xs text-stone-700">Band</span>
</button>
<button className="glass-dark p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-stone-200 transition-all">
<iconify-icon className="text-stone-700" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="text-xs text-stone-700">None</span>
</button>
</div>
</div>

<div className="mb-6">
<h3 className="text-sm bebas text-stone-800 tracking-wide mb-3">Notes (Optional)</h3>
<textarea className="w-full glass-dark rounded-2xl p-4 text-sm text-stone-800 placeholder-stone-500 outline-none resize-none" placeholder="Anything to log?" rows="3"></textarea>
</div>

<button className="w-full green-bg py-3.5 rounded-2xl text-sm font-semibold green-accent border border-green-200" onclick="saveWorkout()">
                Save Workout
            </button>
</div>
</div>

<div className="fixed bottom-0 left-0 right-0 glass border-t border-white/40 z-30 transition-transform duration-300" id="bottomNav">
<div className="max-w-md mx-auto px-4 py-3">
<div className="flex items-center justify-around">
<button className="flex flex-col items-center gap-1 active-tab rounded-xl px-4 py-2 transition-all" id="navHome" onclick="showScreen('home')">
<iconify-icon className="text-stone-700" icon="solar:home-2-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-stone-700">Home</span>
</button>
<button className="flex flex-col items-center gap-1 px-4 py-2 transition-all" id="navLibrary" onclick="showScreen('library')">
<iconify-icon className="text-stone-600" icon="solar:playlist-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-stone-600">Library</span>
</button>
<button className="flex flex-col items-center gap-1 px-4 py-2 transition-all" id="navActivity" onclick="showScreen('activity')">
<iconify-icon className="text-stone-600" icon="solar:chart-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-stone-600">Activity</span>
</button>
<button className="flex flex-col items-center gap-1 px-4 py-2 transition-all" id="navProfile" onclick="showScreen('profile')">
<iconify-icon className="text-stone-600" icon="solar:user-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-stone-600">Profile</span>
</button>
</div>
</div>
</div>


    </>
  );
}
