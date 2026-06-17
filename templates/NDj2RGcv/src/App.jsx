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



        // Update clock
        function updateClock() {
            const now = new Date();
            document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
        }
        setInterval(updateClock, 1000);
        updateClock();
        
        // Setting item click effect
        document.querySelectorAll('.setting-item').forEach(item => {
            item.addEventListener('click', () => {
                item.classList.add('bg-[#252545]');
                setTimeout(() => item.classList.remove('bg-[#252545]'), 200);
            });
        });
        
        // Toggle switches
        document.getElementById('darkModeToggle').addEventListener('change', function() {
            console.log('Dark mode:', this.checked ? 'on' : 'off');
        });
        
        document.getElementById('biometricToggle').addEventListener('change', function() {
            console.log('Biometric login:', this.checked ? 'enabled' : 'disabled');
        });
        
        // Logout button
        document.getElementById('logoutButton').addEventListener('click', () => {
            if (confirm('Are you sure you want to log out?')) {
                console.log('User logged out');
            }
        });
        
        // Back button
        document.getElementById('backButton').addEventListener('click', () => {
            console.log('Back to previous screen');
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
      

<div className="flex justify-between items-center p-2 text-xs">
<span id="clock">9:41</span>
<div className="flex space-x-1">
<i className="fas fa-signal"></i>
<i className="fas fa-wifi"></i>
<i className="fas fa-battery-three-quarters"></i>
</div>
</div>

<header className="px-6 py-4 flex items-center">
<button className="mr-4 h-8 w-8 flex items-center justify-center rounded-full bg-[#1e1e3a]" id="backButton">
<i className="fas fa-arrow-left"></i>
</button>
<h1 className="text-2xl font-bold">Settings</h1>
</header>

<section className="px-6 py-4">
<div className="flex items-center mb-6">
<div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
<span className="text-xl font-bold">JD</span>
</div>
<div>
<h2 className="text-lg font-bold">John Doe</h2>
<p className="text-sm text-gray-400">john.doe@example.com</p>
</div>
<button className="ml-auto h-8 w-8 flex items-center justify-center rounded-full bg-[#1e1e3a]">
<i className="fas fa-pencil-alt text-sm"></i>
</button>
</div>
</section>

<main className="px-4 pb-24">

<div className="mb-6">
<h3 className="text-xs text-gray-400 uppercase px-2 mb-2">Account</h3>
<div className="bg-[#1e1e3a] rounded-2xl shadow-lg overflow-hidden">
<button className="setting-item w-full flex justify-between items-center p-4 border-b border-gray-800">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
<i className="fas fa-user text-blue-400"></i>
</div>
<span>Personal Information</span>
</div>
<i className="fas fa-chevron-right text-gray-500"></i>
</button>
<button className="setting-item w-full flex justify-between items-center p-4 border-b border-gray-800">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
<i className="fas fa-lock text-purple-400"></i>
</div>
<span>Security</span>
</div>
<i className="fas fa-chevron-right text-gray-500"></i>
</button>
<button className="setting-item w-full flex justify-between items-center p-4">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center mr-3">
<i className="fas fa-bell text-pink-400"></i>
</div>
<span>Notifications</span>
</div>
<i className="fas fa-chevron-right text-gray-500"></i>
</button>
</div>
</div>

<div className="mb-6">
<h3 className="text-xs text-gray-400 uppercase px-2 mb-2">Preferences</h3>
<div className="bg-[#1e1e3a] rounded-2xl shadow-lg overflow-hidden">
<div className="flex justify-between items-center p-4 border-b border-gray-800">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
<i className="fas fa-moon text-green-400"></i>
</div>
<span>Dark Mode</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" id="darkModeToggle" type="checkbox"/>
<div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
</label>
</div>
<div className="flex justify-between items-center p-4 border-b border-gray-800">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3">
<i className="fas fa-fingerprint text-yellow-400"></i>
</div>
<span>Biometric Login</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="biometricToggle" type="checkbox"/>
<div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
</label>
</div>
<div className="flex justify-between items-center p-4">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
<i className="fas fa-globe text-blue-400"></i>
</div>
<span>Language</span>
</div>
<div className="flex items-center">
<span className="text-gray-400 mr-2">English</span>
<i className="fas fa-chevron-right text-gray-500"></i>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-xs text-gray-400 uppercase px-2 mb-2">Payment Methods</h3>
<div className="bg-[#1e1e3a] rounded-2xl shadow-lg overflow-hidden">
<button className="setting-item w-full flex justify-between items-center p-4 border-b border-gray-800">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
<i className="fas fa-credit-card text-blue-400"></i>
</div>
<div>
<span>Credit &amp; Debit Cards</span>
<p className="text-xs text-gray-400">2 cards connected</p>
</div>
</div>
<i className="fas fa-chevron-right text-gray-500"></i>
</button>
<button className="setting-item w-full flex justify-between items-center p-4">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
<i className="fas fa-university text-purple-400"></i>
</div>
<div>
<span>Bank Accounts</span>
<p className="text-xs text-gray-400">3 accounts connected</p>
</div>
</div>
<i className="fas fa-chevron-right text-gray-500"></i>
</button>
</div>
</div>

<div>
<div className="bg-[#1e1e3a] rounded-2xl shadow-lg overflow-hidden">
<button className="setting-item w-full flex justify-between items-center p-4 border-b border-gray-800">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3">
<i className="fas fa-question-circle text-yellow-400"></i>
</div>
<span>Help &amp; Support</span>
</div>
<i className="fas fa-chevron-right text-gray-500"></i>
</button>
<button className="setting-item w-full flex justify-between items-center p-4 border-b border-gray-800">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
<i className="fas fa-info-circle text-green-400"></i>
</div>
<span>About</span>
</div>
<i className="fas fa-chevron-right text-gray-500"></i>
</button>
<button className="w-full flex items-center p-4 text-red-400" id="logoutButton">
<div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
<i className="fas fa-sign-out-alt text-red-400"></i>
</div>
<span>Log Out</span>
</button>
</div>
</div>
</main>

<nav className="fixed bottom-0 w-full bg-[#151530]/90 rounded-t-3xl py-4 px-6 backdrop-blur-sm">
<div className="flex justify-between items-center">
<div className="nav-item flex flex-col items-center">
<i className="fas fa-dollar-sign text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Finance</span>
</div>
<div className="nav-item flex flex-col items-center">
<i className="fas fa-wallet text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Wallet</span>
</div>
<div className="relative -mt-8">
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/20">
<i className="fas fa-plus text-white text-xl"></i>
</button>
</div>
<div className="nav-item flex flex-col items-center">
<i className="fas fa-chart-pie text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Stats</span>
</div>
<div className="nav-item flex flex-col items-center active">
<i className="fas fa-cog text-purple-500"></i>
<span className="text-xs text-purple-500 mt-1">Settings</span>
<div className="w-1 h-1 bg-purple-500 rounded-full mt-1"></div>
</div>
</div>
</nav>


    </>
  );
}
