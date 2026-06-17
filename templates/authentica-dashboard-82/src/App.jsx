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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple view router for the single-page application mockup
        const views = ['login', 'register', 'otp', 'dashboard', 'admin', 'backend'];
        
        function showView(viewId) {
            views.forEach(v => {
                document.getElementById(v).classList.add('hidden');
            });
            document.getElementById(viewId).classList.remove('hidden');
            
            // Update active nav state
            document.querySelectorAll('.nav-btn').forEach(btn => {
                if(btn.dataset.target === 'backend') {
                    btn.className = 'nav-btn px-3 py-1.5 rounded-md text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors';
                } else {
                    btn.className = 'nav-btn px-3 py-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors';
                }
                
                if (btn.dataset.target === viewId) {
                    if(viewId === 'backend') {
                        btn.classList.add('bg-emerald-500/20');
                    } else {
                        btn.classList.add('text-white', 'bg-neutral-900');
                        btn.classList.remove('text-neutral-400');
                    }
                }
            });
        }

        // Mock Form Submissions to demonstrate flow
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            showView('dashboard');
        });

        document.getElementById('registerForm').addEventListener('submit', (e) => {
            e.preventDefault();
            showView('otp');
        });

        document.getElementById('otpForm').addEventListener('submit', (e) => {
            e.preventDefault();
            showView('dashboard');
        });

        // OTP Input Auto-advance logic
        const otpInputs = document.querySelectorAll('.otp-input');
        otpInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                // Ensure only numbers
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                
                if(e.target.value !== '' && index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            });

            input.addEventListener('keydown', (e) => {
                if(e.key === 'Backspace' && e.target.value === '' && index > 0) {
                    otpInputs[index - 1].focus();
                }
            });
            
            // Paste event handler
            input.addEventListener('paste', (e) => {
                e.preventDefault();
                const pastedData = e.clipboardData.getData('text').slice(0, 6).replace(/[^0-9]/g, '');
                if (pastedData) {
                    [...pastedData].forEach((char, i) => {
                        if (otpInputs[i]) {
                            otpInputs[i].value = char;
                            if (i < 5) otpInputs[i + 1].focus();
                        }
                    });
                }
            });
        });

        // Initialize default view
        showView('login');
    
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
      

<nav className="border-b border-neutral-900 bg-neutral-950/50 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
<div className="flex items-center space-x-8">
<div className="text-lg font-semibold tracking-tighter text-white cursor-pointer" onclick="showView('login')">SYS</div>
<div className="hidden sm:flex space-x-1 text-xs font-medium text-neutral-400">
<button className="nav-btn px-3 py-1.5 rounded-md hover:text-white hover:bg-neutral-900 transition-colors" data-target="login" onclick="showView('login')">Login</button>
<button className="nav-btn px-3 py-1.5 rounded-md hover:text-white hover:bg-neutral-900 transition-colors" data-target="register" onclick="showView('register')">Register</button>
<button className="nav-btn px-3 py-1.5 rounded-md hover:text-white hover:bg-neutral-900 transition-colors" data-target="dashboard" onclick="showView('dashboard')">Dashboard</button>
<button className="nav-btn px-3 py-1.5 rounded-md hover:text-white hover:bg-neutral-900 transition-colors" data-target="admin" onclick="showView('admin')">Admin</button>
<button className="nav-btn px-3 py-1.5 rounded-md text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors" data-target="backend" onclick="showView('backend')">Backend Source</button>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500">
<iconify-icon icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</nav>

<main className="flex-1 flex flex-col items-center justify-start p-4 sm:p-8 w-full">

<div className="view-section w-full max-w-sm mt-10 sm:mt-20 space-y-8 animate-fade-in" id="login">
<div className="text-center space-y-2">
<h1 className="text-2xl tracking-tight font-semibold text-white">Welcome back</h1>
<p className="text-neutral-500">Enter your credentials to access your account.</p>
</div>
<form className="space-y-4" id="loginForm">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400">Email address</label>
<input className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all" placeholder="name@example.com" required="" type="email"/>
</div>
<div className="space-y-1">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-neutral-400">Password</label>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Forgot?</a>
</div>
<input className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full bg-white text-black font-medium rounded-md py-2 hover:bg-neutral-200 transition-colors" type="submit">Sign in</button>
</form>
<div className="relative flex items-center py-2">
<div className="flex-grow border-t border-neutral-900"></div>
<span className="flex-shrink-0 mx-4 text-xs text-neutral-600">or continue with</span>
<div className="flex-grow border-t border-neutral-900"></div>
</div>
<button className="w-full bg-transparent border border-neutral-800 text-white font-medium rounded-md py-2 flex items-center justify-center space-x-2 hover:bg-neutral-900 transition-colors" type="button">
<iconify-icon className="text-lg" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Google</span>
</button>
<p className="text-center text-xs text-neutral-500">
                Don't have an account? <a className="text-white hover:underline" href="#" onclick="showView('register')">Sign up</a>
</p>
</div>

<div className="view-section hidden w-full max-w-sm mt-10 sm:mt-20 space-y-8 animate-fade-in" id="register">
<div className="text-center space-y-2">
<h1 className="text-2xl tracking-tight font-semibold text-white">Create an account</h1>
<p className="text-neutral-500">Sign up to get started with the platform.</p>
</div>
<form className="space-y-4" id="registerForm">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400">Full Name</label>
<input className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400">Email address</label>
<input className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all" placeholder="name@example.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400">Password</label>
<input className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full bg-white text-black font-medium rounded-md py-2 hover:bg-neutral-200 transition-colors" type="submit">Create account</button>
</form>
<p className="text-center text-xs text-neutral-500">
                Already have an account? <a className="text-white hover:underline" href="#" onclick="showView('login')">Sign in</a>
</p>
</div>

<div className="view-section hidden w-full max-w-sm mt-10 sm:mt-20 space-y-8 animate-fade-in" id="otp">
<div className="text-center space-y-2">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto mb-4 text-white">
<iconify-icon className="text-xl" icon="solar:letter-opened-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h1 className="text-2xl tracking-tight font-semibold text-white">Check your email</h1>
<p className="text-neutral-500">We sent a 6-digit verification code to your email address.</p>
</div>
<form className="space-y-6" id="otpForm">
<div className="flex justify-between space-x-2">
<input className="otp-input w-12 h-12 text-center text-lg font-medium bg-transparent border border-neutral-800 rounded-md text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" maxlength="1" type="text"/>
<input className="otp-input w-12 h-12 text-center text-lg font-medium bg-transparent border border-neutral-800 rounded-md text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" maxlength="1" type="text"/>
<input className="otp-input w-12 h-12 text-center text-lg font-medium bg-transparent border border-neutral-800 rounded-md text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" maxlength="1" type="text"/>
<input className="otp-input w-12 h-12 text-center text-lg font-medium bg-transparent border border-neutral-800 rounded-md text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" maxlength="1" type="text"/>
<input className="otp-input w-12 h-12 text-center text-lg font-medium bg-transparent border border-neutral-800 rounded-md text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" maxlength="1" type="text"/>
<input className="otp-input w-12 h-12 text-center text-lg font-medium bg-transparent border border-neutral-800 rounded-md text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" maxlength="1" type="text"/>
</div>
<button className="w-full bg-white text-black font-medium rounded-md py-2 hover:bg-neutral-200 transition-colors" type="submit">Verify account</button>
</form>
<p className="text-center text-xs text-neutral-500">
                Didn't receive the code? <button className="text-white hover:underline">Click to resend</button>
</p>
</div>

<div className="view-section hidden w-full max-w-4xl space-y-6 animate-fade-in" id="dashboard">
<header className="flex items-center justify-between pb-6 border-b border-neutral-900">
<div>
<h1 className="text-2xl tracking-tight font-semibold text-white">Dashboard</h1>
<p className="text-neutral-500 mt-1">Manage your account settings and preferences.</p>
</div>
<button className="bg-neutral-900 border border-neutral-800 text-white font-medium rounded-md py-1.5 px-4 text-xs hover:bg-neutral-800 transition-colors" onclick="showView('login')">Sign out</button>
</header>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 border border-neutral-900 bg-neutral-950 rounded-lg p-6 space-y-6">
<div className="flex items-center space-x-4">
<div className="w-16 h-16 rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-700 flex items-center justify-center text-white text-xl font-medium tracking-tight">
                            JD
                        </div>
<div>
<h2 className="text-lg font-semibold text-white">John Doe</h2>
<p className="text-neutral-500">john.doe@example.com</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-900">
<div>
<p className="text-xs text-neutral-500 mb-1">Account Role</p>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300">
                                Standard User
                            </span>
</div>
<div>
<p className="text-xs text-neutral-500 mb-1">Verification Status</p>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 space-x-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
<span>Verified</span>
</span>
</div>
</div>
</div>

<div className="border border-neutral-900 bg-neutral-950 rounded-lg p-6 space-y-4">
<h3 className="font-medium text-white">Security</h3>
<div className="space-y-3">
<button className="w-full flex items-center justify-between text-left text-neutral-400 hover:text-white transition-colors text-sm group">
<span className="flex items-center space-x-2">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:key-linear"></iconify-icon>
<span>Change Password</span>
</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between text-left text-neutral-400 hover:text-white transition-colors text-sm group">
<span className="flex items-center space-x-2">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:shield-warning-linear"></iconify-icon>
<span>Enable 2FA</span>
</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between text-left text-red-500 hover:text-red-400 transition-colors text-sm group pt-4 border-t border-neutral-900">
<span className="flex items-center space-x-2">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
<span>Delete Account</span>
</span>
</button>
</div>
</div>
</div>
</div>

<div className="view-section hidden w-full max-w-5xl space-y-6 animate-fade-in" id="admin">
<header className="flex items-center justify-between pb-6 border-b border-neutral-900">
<div>
<h1 className="text-2xl tracking-tight font-semibold text-white">User Management</h1>
<p className="text-neutral-500 mt-1">Admin access to manage platform users.</p>
</div>
<div className="flex items-center space-x-3">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-neutral-900 border border-neutral-800 rounded-md pl-9 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-neutral-700 w-64" placeholder="Search users..." type="text"/>
</div>
</div>
</header>
<div className="border border-neutral-900 rounded-lg overflow-hidden bg-neutral-950/50">
<table className="w-full text-left text-sm text-neutral-400">
<thead className="bg-neutral-900/50 border-b border-neutral-900 text-xs text-neutral-500">
<tr>
<th className="px-6 py-3 font-medium">Name</th>
<th className="px-6 py-3 font-medium">Email</th>
<th className="px-6 py-3 font-medium">Role</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-900">
<tr className="hover:bg-neutral-900/20 transition-colors">
<td className="px-6 py-4 font-medium text-white">Alice Smith</td>
<td className="px-6 py-4">alice@example.com</td>
<td className="px-6 py-4">
<select className="bg-transparent border border-neutral-800 rounded text-xs px-2 py-1 text-white focus:outline-none focus:border-neutral-600">
<option>Admin</option>
<option>User</option>
</select>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Verified</span>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-neutral-500 hover:text-white transition-colors"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="text-neutral-500 hover:text-red-500 transition-colors"><iconify-icon icon="solar:trash-bin-minimalistic-linear"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-neutral-900/20 transition-colors">
<td className="px-6 py-4 font-medium text-white">Bob Johnson</td>
<td className="px-6 py-4">bob.j@example.com</td>
<td className="px-6 py-4">
<select className="bg-transparent border border-neutral-800 rounded text-xs px-2 py-1 text-white focus:outline-none focus:border-neutral-600">
<option>User</option>
<option>Admin</option>
</select>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">Pending</span>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-emerald-500 hover:text-emerald-400 transition-colors px-2 py-1 border border-emerald-500/20 rounded text-xs bg-emerald-500/10">Approve</button>
<button className="text-neutral-500 hover:text-red-500 transition-colors"><iconify-icon icon="solar:trash-bin-minimalistic-linear"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-neutral-900/20 transition-colors">
<td className="px-6 py-4 font-medium text-white">Charlie Davis</td>
<td className="px-6 py-4">cdavis99@example.com</td>
<td className="px-6 py-4">
<select className="bg-transparent border border-neutral-800 rounded text-xs px-2 py-1 text-white focus:outline-none focus:border-neutral-600">
<option>User</option>
<option>Admin</option>
</select>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Verified</span>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-neutral-500 hover:text-white transition-colors"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="text-neutral-500 hover:text-red-500 transition-colors"><iconify-icon icon="solar:trash-bin-minimalistic-linear"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-section hidden w-full max-w-5xl space-y-8 animate-fade-in pb-20" id="backend">
<header className="border-b border-neutral-900 pb-6">
<h1 className="text-2xl tracking-tight font-semibold text-white">Backend Implementation</h1>
<p className="text-neutral-500 mt-2 text-sm max-w-2xl">This interface contains the complete required backend stack (Node.js, Express, MongoDB). Save these files locally, run <code className="bg-neutral-900 px-1 py-0.5 rounded">npm install express mongoose bcrypt jsonwebtoken nodemailer passport passport-google-oauth20 dotenv cors</code>, and start the server with <code className="bg-neutral-900 px-1 py-0.5 rounded">node server.js</code>.</p>
</header>

<div className="border border-neutral-800 rounded-lg overflow-hidden bg-black">
<div className="bg-neutral-900/80 border-b border-neutral-800 px-4 py-2 flex items-center justify-between">
<span className="text-xs font-mono text-neutral-400">.env</span>
<button className="text-xs text-neutral-500 hover:text-white" onclick="navigator.clipboard.writeText(document.getElementById('code-env').innerText)">Copy</button>
</div>
<pre className="p-4 overflow-x-auto text-xs font-mono text-neutral-300 leading-relaxed"><code id="code-env">PORT=5000
MONGO_URI=mongodb://localhost:27017/auth_db
JWT_SECRET=your_super_secret_jwt_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CLIENT_URL=http://localhost:3000</code></pre>
</div>

<div className="border border-neutral-800 rounded-lg overflow-hidden bg-black">
<div className="bg-neutral-900/80 border-b border-neutral-800 px-4 py-2 flex items-center justify-between">
<span className="text-xs font-mono text-neutral-400">server.js</span>
<button className="text-xs text-neutral-500 hover:text-white" onclick="navigator.clipboard.writeText(document.getElementById('code-server').innerText)">Copy</button>
</div>
<pre className="p-4 overflow-x-auto text-xs font-mono text-neutral-300 leading-relaxed"><code id="code-server">require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(passport.initialize());

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =&gt; console.log('MongoDB Connected'))
    .catch(err =&gt; console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =&gt; console.log(`Server running on port ${PORT}`));</code></pre>
</div>

<div className="border border-neutral-800 rounded-lg overflow-hidden bg-black">
<div className="bg-neutral-900/80 border-b border-neutral-800 px-4 py-2 flex items-center justify-between">
<span className="text-xs font-mono text-neutral-400">models/User.js</span>
</div>
<pre className="p-4 overflow-x-auto text-xs font-mono text-neutral-300 leading-relaxed"><code>const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // Optional for Google OAuth users
    googleId: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    emailVerified: { type: Boolean, default: false },
    otp: { type: String },
    otpExpiry: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);</code></pre>
</div>

<div className="border border-neutral-800 rounded-lg overflow-hidden bg-black">
<div className="bg-neutral-900/80 border-b border-neutral-800 px-4 py-2 flex items-center justify-between">
<span className="text-xs font-mono text-neutral-400">routes/auth.js</span>
</div>
<pre className="p-4 overflow-x-auto text-xs font-mono text-neutral-300 leading-relaxed"><code>const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const router = express.Router();

// Email Transporter Config
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

// Helper: Generate OTP
const generateOTP = () =&gt; Math.floor(100000 + Math.random() * 900000).toString();

// Register
router.post('/register', async (req, res) =&gt; {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(400).json({ error: 'All fields required' });

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ error: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const otp = generateOTP();
        const otpExpiry = Date.now() + 5 * 60 * 1000; // 5 mins

        user = new User({ name, email, password: hashedPassword, otp, otpExpiry });
        await user.save();

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Verify your account',
            text: `Your OTP is: ${otp}. It expires in 5 minutes.`
        });

        res.status(201).json({ message: 'User registered. Please verify OTP sent to email.' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Verify OTP
router.post('/verify-otp', async (req, res) =&gt; {
    try {
        const { email, otp } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ error: 'User not found' });
        if (user.otp !== otp || user.otpExpiry &lt; Date.now()) {
            return res.status(400).json({ error: 'Invalid or expired OTP' });
        }

        user.emailVerified = true;
        user.otp = undefined;
        user.otpExpiry = undefined;
        await user.save();

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ message: 'Email verified successfully', token });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Login
router.post('/login', async (req, res) =&gt; {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !user.password) return res.status(400).json({ error: 'Invalid credentials' });
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });
        
        if (!user.emailVerified) return res.status(403).json({ error: 'Please verify your email first' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Google OAuth Setup
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) =&gt; {
      try {
          let user = await User.findOne({ email: profile.emails[0].value });
          if (!user) {
              user = new User({
                  name: profile.displayName,
                  email: profile.emails[0].value,
                  googleId: profile.id,
                  emailVerified: true
              });
              await user.save();
          }
          done(null, user);
      } catch (err) { done(err, null); }
  }
));

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) =&gt; {
    const token = jwt.sign({ id: req.user._id, role: req.user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.redirect(`${process.env.CLIENT_URL}/#dashboard?token=${token}`);
});

module.exports = router;</code></pre>
</div>

<div className="border border-neutral-800 rounded-lg overflow-hidden bg-black">
<div className="bg-neutral-900/80 border-b border-neutral-800 px-4 py-2 flex items-center justify-between">
<span className="text-xs font-mono text-neutral-400">routes/admin.js</span>
</div>
<pre className="p-4 overflow-x-auto text-xs font-mono text-neutral-300 leading-relaxed"><code>const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Middleware: Verify JWT &amp; Admin Role
const isAdmin = (req, res, next) =&gt; {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (verified.role !== 'admin') return res.status(403).json({ error: 'Admin resources access denied' });
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ error: 'Invalid token' });
    }
};

// Get all users
router.get('/users', isAdmin, async (req, res) =&gt; {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

// Update Role / Approve
router.put('/users/:id', isAdmin, async (req, res) =&gt; {
    try {
        const { role, emailVerified } = req.body;
        await User.findByIdAndUpdate(req.params.id, { role, emailVerified });
        res.json({ message: 'User updated successfully' });
    } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

// Delete User
router.delete('/users/:id', isAdmin, async (req, res) =&gt; {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

module.exports = router;</code></pre>
</div>
</div>
</main>


    </>
  );
}
