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



    tailwind.config = {
      theme: {
        extend: {
          colors: {
            aura: {
              bg: '#0d0e10',
              card: '#13141a',
              border: '#1f2023',
              accent: '#5e6ad2',
              purple: '#8b5cf6',
              text: '#b4bcd0',
              muted: '#7c8794'
            }
          },
          fontFamily: {
            inter: ['Inter', 'sans-serif'],
          }
        }
      }
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
      
<div className="max-w-5xl mx-auto p-8 flex flex-col gap-8">

<div className="header-card glass-effect rounded-2xl p-8 flex items-center justify-between mb-2">
<div className="flex items-center gap-4">
<img alt="User Avatar" className="w-14 h-14 rounded-full border-2 border-aura-accent object-cover shadow" src="https://randomuser.me/api/portraits/men/32.jpg" />
<div>
<h1 className="text-2xl font-medium text-white mb-1">Account Settings</h1>
<p className="text-aura-muted text-sm">Manage your profile, privacy, and application preferences</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="social-icon text-aura-text hover:text-white">
<i className="fas fa-sign-out-alt"></i>
</button>
<button className="social-icon text-aura-text hover:text-white">
<i className="fas fa-question-circle"></i>
</button>
</div>
</div>
<div className="flex gap-8">

<aside className="w-56 flex-shrink-0">
<div className="aura-card glass-effect rounded-xl py-6 px-4 flex flex-col gap-1">
<a className="nav-link nav-link-active flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-aura-accent" href="#">
<i className="fas fa-user-cog"></i> Profile
          </a>
<a className="nav-link flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-aura-text" href="#">
<i className="fas fa-shield-alt"></i> Security
          </a>
<a className="nav-link flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-aura-text" href="#">
<i className="fas fa-bell"></i> Notifications
          </a>
<a className="nav-link flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-aura-text" href="#">
<i className="fas fa-palette"></i> Appearance
          </a>
<a className="nav-link flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-aura-text" href="#">
<i className="fas fa-cogs"></i> Preferences
          </a>
</div>
</aside>

<main className="flex-1">
<form className="space-y-8">

<div className="aura-card glass-effect rounded-xl p-7 space-y-6">
<h2 className="text-lg font-semibold text-white mb-2">Profile Information</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-aura-muted mb-1">Full Name</label>
<input className="w-full rounded-md bg-aura-border border border-aura-border px-3 py-2 text-sm text-white placeholder-aura-muted focus:outline-none focus:border-aura-accent" placeholder="Your Name" type="text" value="Alex Johnson" />
</div>
<div>
<label className="block text-xs font-medium text-aura-muted mb-1">Email Address</label>
<input className="w-full rounded-md bg-aura-border border border-aura-border px-3 py-2 text-sm text-white placeholder-aura-muted focus:outline-none focus:border-aura-accent" placeholder="email@example.com" type="email" value="alex.johnson@email.com" />
</div>
<div>
<label className="block text-xs font-medium text-aura-muted mb-1">Username</label>
<input className="w-full rounded-md bg-aura-border border border-aura-border px-3 py-2 text-sm text-white placeholder-aura-muted focus:outline-none focus:border-aura-accent" placeholder="alexjohnson" type="text" />
</div>
<div>
<label className="block text-xs font-medium text-aura-muted mb-1">Location</label>
<input className="w-full rounded-md bg-aura-border border border-aura-border px-3 py-2 text-sm text-white placeholder-aura-muted focus:outline-none focus:border-aura-accent" placeholder="Enter location" type="text" />
</div>
</div>
<div className="flex items-center gap-4 pt-4">
<button className="px-5 py-2 rounded-lg bg-aura-accent text-white font-semibold shadow hover:bg-aura-purple transition" type="submit">Save Changes</button>
<button className="px-4 py-2 rounded-lg bg-aura-border text-aura-muted border border-aura-border hover:bg-aura-card transition" type="reset">Cancel</button>
</div>
</div>

<div className="aura-card glass-effect rounded-xl p-7 space-y-6">
<h2 className="text-lg font-semibold text-white mb-2">Preferences</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex items-center justify-between">
<div>
<label className="block text-sm text-white font-medium">Dark Mode</label>
<span className="text-xs text-aura-muted">Enable or disable dark theme</span>
</div>
<label className="switch">
<input checked type="checkbox" />
<span className="slider"></span>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<label className="block text-sm text-white font-medium">Email Notifications</label>
<span className="text-xs text-aura-muted">Get updates via email</span>
</div>
<label className="switch">
<input type="checkbox" />
<span className="slider"></span>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<label className="block text-sm text-white font-medium">Two-Factor Authentication</label>
<span className="text-xs text-aura-muted">Extra security on login</span>
</div>
<label className="switch">
<input checked type="checkbox" />
<span className="slider"></span>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<label className="block text-sm text-white font-medium">Language</label>
<span className="text-xs text-aura-muted">Choose your language</span>
</div>
<select className="rounded-md bg-aura-border border border-aura-border px-3 py-2 ml-4 text-sm text-white focus:outline-none focus:border-aura-accent">
<option>English</option>
<option>Spanish</option>
<option>German</option>
</select>
</div>
</div>
</div>

<div className="aura-card glass-effect rounded-xl p-7">
<h2 className="text-lg font-semibold text-white mb-3">Danger Zone</h2>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div>
<span className="text-sm text-aura-muted">Delete your account and all associated data. This action cannot be undone.</span>
</div>
<button className="px-5 py-2 rounded-lg bg-red-600/70 hover:bg-red-700 text-white font-semibold shadow transition" type="button">
<i className="fas fa-trash-alt mr-2"></i>Delete Account
              </button>
</div>
</div>
</form>
</main>
</div>
</div>

    </>
  );
}
