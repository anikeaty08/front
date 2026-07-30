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
      
<div className="container mx-auto px-4 py-6">

<div className="mb-6">
<h1 className="text-2xl font-bold text-gray-900">Settings</h1>
<p className="text-gray-600">Manage your account and application preferences</p>
</div>

<div className="bg-white rounded-xl shadow-sm">

<div className="flex flex-col md:flex-row">

<div className="w-full md:w-64 border-r border-gray-200">
<nav className="py-4 px-2">
<div className="px-3 pb-2 mb-2">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Account</h3>
<ul className="mt-2 space-y-1">
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Profile
                  </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded-lg bg-blue-50" href="#">
<svg className="mr-2 h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Account Settings
                  </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Security
                  </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Notifications
                  </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Billing
                  </a>
</li>
</ul>
</div>
<div className="px-3 pb-2 mb-2 pt-4 border-t border-gray-200">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Application</h3>
<ul className="mt-2 space-y-1">
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    General
                  </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Integrations
                  </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Preferences
                  </a>
</li>
<li>
<a className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50" href="#">
<svg className="mr-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                    Team Management
                  </a>
</li>
</ul>
</div>
</nav>
</div>

<div className="flex-1 p-6">
<div className="mb-6">
<h2 className="text-xl font-bold text-gray-900">Account Settings</h2>
<p className="text-sm text-gray-600">Manage your account credentials and authentication options</p>
</div>

<div className="mb-8">
<h3 className="text-lg font-medium text-gray-900 mb-4">Account Information</h3>
<div className="space-y-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="username">Username</label>
<div className="mt-1 relative rounded-md shadow-sm">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-500 sm:text-sm">@</span>
</div>
<input className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" id="username" name="username" placeholder="username" type="text" value="prince_reuben" />
</div>
<p className="mt-2 text-sm text-gray-500">Your username is used for login and mentions.</p>
</div>
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
<input className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="email" name="email" type="email" value="prince.reuben@example.com" />
<p className="mt-2 text-sm text-gray-500">Your email address is used for login and notifications.</p>
</div>
<div className="pt-4 border-t border-gray-200">
<div className="flex items-start">
<div className="flex items-center h-5">
<input checked className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" id="primary-email" name="primary-email" type="checkbox" />
</div>
<div className="ml-3 text-sm">
<label className="font-medium text-gray-700" htmlFor="primary-email">Set as primary email</label>
<p className="text-gray-500">Make this your primary email for all communications.</p>
</div>
</div>
</div>
</div>
</div>

<div className="mb-8">
<h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
<div className="space-y-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="current-password">Current Password</label>
<div className="mt-1 relative rounded-md shadow-sm">
<input className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md" id="current-password" name="current-password" placeholder="••••••••" type="password" />
<div className="absolute inset-y-0 right-0 pr-3 flex items-center">
<button className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500" type="button">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="new-password">New Password</label>
<div className="mt-1 relative rounded-md shadow-sm">
<input className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md" id="new-password" name="new-password" placeholder="••••••••" type="password" />
<div className="absolute inset-y-0 right-0 pr-3 flex items-center">
<button className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500" type="button">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="mt-2">
<div className="w-full bg-gray-200 rounded-full h-2.5">
<div className="bg-green-500 h-2.5 rounded-full" style={{width: `70%`}}></div>
</div>
<p className="mt-2 text-sm text-gray-500">
                    Password strength: <span className="text-green-600 font-medium">Strong</span>
</p>
<ul className="mt-1 text-xs text-gray-500 space-y-1 list-disc pl-5">
<li>At least 8 characters</li>
<li>Mix of uppercase & lowercase letters</li>
<li>At least one number</li>
<li>At least one special character</li>
</ul>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="confirm-password">Confirm New Password</label>
<div className="mt-1 relative rounded-md shadow-sm">
<input className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md" id="confirm-password" name="confirm-password" placeholder="••••••••" type="password" />
<div className="absolute inset-y-0 right-0 pr-3 flex items-center">
<button className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500" type="button">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
<div className="pt-4 flex justify-end">
<button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Update Password
                </button>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
<span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-md">Enabled</span>
</div>
<div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
<div className="flex items-start mb-6">
<div className="flex-shrink-0">
<svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-3">
<p className="text-sm text-gray-700">
                    Two-factor authentication adds an extra layer of security to your account. In addition to your password, you'll need to enter a code that we'll send to your phone.
                  </p>
</div>
</div>
<div className="border-t border-gray-200 pt-6">
<h4 className="text-sm font-medium text-gray-900 mb-3">Authentication Method</h4>
<div className="space-y-4">
<div className="flex items-center">
<input checked className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" id="auth-app" name="auth-method" type="radio" />
<label className="ml-3 block text-sm font-medium text-gray-700" htmlFor="auth-app">
                      Authenticator App
                    </label>
</div>
<div className="flex items-center">
<input className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" id="sms" name="auth-method" type="radio" />
<label className="ml-3 block text-sm font-medium text-gray-700" htmlFor="sms">
                      SMS
                    </label>
</div>
<div className="flex items-center">
<input className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" id="email" name="auth-method" type="radio" />
<label className="ml-3 block text-sm font-medium text-gray-700" htmlFor="email">
                      Email
                    </label>
</div>
</div>
<div className="mt-6 flex items-center space-x-4">
<button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Update Method
                  </button>
<button className="px-4 py-2 text-sm font-medium text-red-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Disable 2FA
                  </button>
</div>
</div>
</div>
</div>

<div className="mb-8">
<h3 className="text-lg font-medium text-gray-900 mb-4">Active Sessions</h3>
<div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
<ul className="divide-y divide-gray-200">
<li className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="flex-shrink-0">
<svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-3">
<p className="text-sm font-medium text-gray-900">MacBook Pro</p>
<div className="flex items-center text-xs text-gray-500">
<span>Chrome on macOS</span>
<span className="mx-1">•</span>
<span>New York, USA</span>
<span className="mx-1">•</span>
<span className="font-medium text-green-600">Current Session</span>
</div>
</div>
</div>
<button className="text-sm text-gray-600 hover:text-gray-900">Details</button>
</div>
<div className="mt-2 text-xs text-gray-500">
                    Last active: Just now
                  </div>
</li>
<li className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="flex-shrink-0">
<svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-3">
<p className="text-sm font-medium text-gray-900">iPhone 13</p>
<div className="flex items-center text-xs text-gray-500">
<span>Safari on iOS</span>
<span className="mx-1">•</span>
<span>New York, USA</span>
</div>
</div>
</div>
<button className="text-sm text-gray-600 hover:text-gray-900">Details</button>
</div>
<div className="mt-2 text-xs text-gray-500">
                    Last active: 2 hours ago
                  </div>
</li>
<li className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="flex-shrink-0">
<svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="ml-3">
<p className="text-sm font-medium text-gray-900">Windows PC</p>
<div className="flex items-center text-xs text-gray-500">
<span>Firefox on Windows</span>
<span className="mx-1">•</span>
<span>San Francisco, USA</span>
</div>
</div>
</div>
<button className="text-sm text-gray-600 hover:text-gray-900">Details</button>
</div>
<div className="mt-2 text-xs text-gray-500">
                    Last active:</div></li></ul></div></div></div></div></div></div>
    </>
  );
}
