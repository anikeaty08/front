import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            electric: '#6C63FF',
            coral: '#FF6C8B',
            violet: '#7B2FF2',
            bg: '#F9FAFB',
            sidebar: '#23263A',
            accent: '#6C63FF',
          },
          fontFamily: {
            sans: ['Inter', 'ui-sans-serif'],
          },
        }
      }
    }
  


  // Simple tab toggle for Auth
  function showTab(tab) {
    document.getElementById('login').classList.toggle('hidden', tab !== 'login');
    document.getElementById('register').classList.toggle('hidden', tab !== 'register');
    document.getElementById('registerPrompt').classList.toggle('hidden', tab === 'register');
    document.getElementById('loginPrompt').classList.toggle('hidden', tab === 'login');
  }
  // Mock navigation
  function goDashboard() {
    document.getElementById('auth').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('onboarding').classList.remove('hidden');
  }
  function showReset() {
    document.getElementById('reset').classList.remove('hidden');
  }
  function resetOK() {
    document.getElementById('reset').classList.add('hidden');
    document.getElementById('reset-ok').classList.remove('hidden');
  }
  function closeReset() {
    document.getElementById('reset-ok').classList.add('hidden');
  }
  // Profile dropdown
  function toggleProfileMenu() {
    document.getElementById('profileMenu').classList.toggle('hidden');
  }
  // Navigation mock
  function showScreen(id) {
    Array.from(document.querySelectorAll('body > div[id]')).forEach(d => d.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
  }
  // Logout
  function logout() {
    Array.from(document.querySelectorAll('body > div[id]')).forEach(d => d.classList.add('hidden'));
    document.getElementById('auth').classList.remove('hidden');
    showTab('login');
  }
  // Example: show onboarding at start
  window.onload = () => {
    showTab('login');
  };

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6 hidden" id="onboarding">
<div className="bg-white dark:bg-sidebar rounded-2xl p-8 max-w-lg w-full shadow-xl animate-fade-in">
<div className="flex items-center gap-3 mb-4">
<i className="ti ti-rocket text-electric text-3xl"></i>
<h2 className="text-2xl font-bold">Welcome to CodeNote AI!</h2>
</div>
<ul className="space-y-3 text-sm">
<li>📝 Take notes, code, sketch, and collaborate in one place.</li>
<li>🤖 AI sidebar for summaries, code help, and smart suggestions.</li>
<li>🧩 LeetCode integration and code solution tracking.</li>
<li>⚡ Quick create: notes, canvases, code snippets.</li>
<li>🎨 Real-time collab and vibrant dev-friendly UI.</li>
</ul>
<button className="mt-6 w-full py-3 bg-electric text-white rounded-lg font-bold text-lg shadow hover:bg-violet transition" onclick="document.getElementById('onboarding').classList.add('hidden')">Let’s Go!</button>
</div>
</div>

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-electric via-violet to-coral" id="auth">
<div className="bg-white/90 dark:bg-sidebar/95 p-8 rounded-2xl shadow-2xl w-full max-w-md animate-fade-in">
<div className="flex mb-8 gap-1">
<button className="flex-1 py-2 font-bold rounded-l-xl bg-electric text-white shadow" onclick="showTab('login')">Login</button>
<button className="flex-1 py-2 font-bold rounded-r-xl bg-white dark:bg-sidebar text-electric border border-electric dark:border-violet" onclick="showTab('register')">Register</button>
</div>

<form className="space-y-5" id="login">
<div>
<label className="block font-semibold mb-1">Email</label>
<input className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric" placeholder="you@email.com" type="email"/>
</div>
<div>
<label className="block font-semibold mb-1">Password</label>
<input className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric" placeholder="Password" type="password"/>
</div>
<div className="flex items-center justify-between text-sm">
<label className="flex items-center gap-2">
<input checked="" className="accent-electric" type="checkbox"/> Remember me
        </label>
<a className="text-electric hover:underline" href="#" onclick="showReset()">Forgot password?</a>
</div>
<button className="w-full py-3 rounded-lg bg-electric text-white font-bold shadow hover:bg-violet transition" onclick="goDashboard()" type="button">Sign In</button>
<div className="relative my-4">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-gray-300"></div>
</div>
<div className="relative flex justify-center text-xs">
<span className="bg-white dark:bg-sidebar px-2 text-gray-400">or sign in with</span>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-100">
<i className="ti ti-brand-google text-lg text-coral"></i> Google
        </button>
<button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-100">
<i className="ti ti-brand-github text-lg text-violet"></i> GitHub
        </button>
</div>
</form>

<form className="space-y-5 hidden" id="register">
<div>
<label className="block font-semibold mb-1">Email</label>
<input className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric" placeholder="you@email.com" type="email" />
</input></div>
<div>
<label className="block font-semibold mb-1">Password</label>
<input className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric" placeholder="Password" type="password"/>
</div>
<div>
<label className="block font-semibold mb-1">Confirm Password</label>
<input className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric" placeholder="Confirm password" type="password"/>
</div>
<div className="flex items-center gap-2 text-xs">
<input checked="" className="accent-electric" type="checkbox"/>
<span>I agree to the <a className="text-electric underline" href="#">Terms</a> &amp; <a className="text-electric underline" href="#">Privacy Policy</a></span>
</div>
<button className="w-full py-3 rounded-lg bg-electric text-white font-bold shadow hover:bg-coral transition" onclick="goDashboard()" type="button">Register</button>
</form>
<p className="text-xs text-center mt-6 text-gray-500">
<span id="registerPrompt">Don't have an account? <a className="text-electric font-semibold hover:underline" href="#" onclick="showTab('register')">Register</a></span>
<span className="hidden" id="loginPrompt">Already have an account? <a className="text-electric font-semibold hover:underline" href="#" onclick="showTab('login')">Login</a></span>
</p>
</div>
</div>

<div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 hidden" id="reset">
<div className="bg-white dark:bg-sidebar p-8 rounded-lg max-w-sm w-full shadow-xl animate-fade-in">
<h2 className="text-xl font-bold mb-2">Reset Password</h2>
<p className="text-sm mb-4 text-gray-500">Enter your email to receive a reset link.</p>
<input className="w-full px-3 py-2 rounded border border-gray-300 mb-4" placeholder="you@email.com" type="email" />
<button className="w-full py-2 rounded bg-electric text-white font-bold hover:bg-violet transition" onclick="resetOK()">Send Reset Link</button>
</input></div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 hidden" id="reset-ok">
<div className="bg-white dark:bg-sidebar p-8 rounded-lg max-w-sm w-full shadow-xl animate-fade-in">
<h2 className="text-xl font-bold mb-2">Check your email</h2>
<p className="text-sm mb-4 text-gray-500">A password reset link was sent to your inbox.</p>
<button className="w-full py-2 rounded bg-electric text-white font-bold hover:bg-violet transition" onclick="closeReset()">Back to login</button>
</div>
</div>

<div className="hidden min-h-screen flex flex-col" id="dashboard">

<header className="flex justify-between items-center px-8 py-4 bg-white dark:bg-sidebar shadow border-b border-gray-200 dark:border-gray-800">
<div className="flex items-center gap-4">
<span className="text-2xl font-extrabold tracking-tight text-electric flex items-center">
<i className="ti ti-notebook-code mr-2"></i> CodeNote <span className="text-coral font-light ml-1">AI</span>
</span>
<nav className="ml-8 hidden md:flex gap-6 text-sm font-semibold">
<a className="hover:text-electric" href="#">Dashboard</a>
<a className="hover:text-electric" href="#">Notes</a>
<a className="hover:text-electric" href="#">LeetCode</a>
<a className="hover:text-electric" href="#">Collab</a>
<a className="hover:text-electric" href="#">Subscription</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="relative group">
<img className="w-9 h-9 rounded-full border-2 border-electric shadow" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<span className="absolute bottom-0 right-0 bg-green-400 rounded-full w-3 h-3 border-2 border-white"></span>
</button>
<div className="relative">
<button className="ml-2 px-3 py-2 bg-violet text-white rounded-lg font-semibold shadow hover:bg-coral transition" id="profileBtn" onclick="toggleProfileMenu()"><i className="ti ti-menu-2"></i></button>
<div className="absolute right-0 mt-2 bg-white dark:bg-sidebar shadow rounded-lg py-2 w-48 hidden z-50" id="profileMenu">
<a className="block px-4 py-2 hover:bg-electric/10" href="#" onclick="showScreen('settings')"><i className="ti ti-user-circle mr-2"></i>Account Settings</a>
<a className="block px-4 py-2 hover:bg-electric/10" href="#" onclick="showScreen('subscription')"><i className="ti ti-credit-card mr-2"></i>Subscription</a>
<div className="px-4 py-2 text-xs text-gray-400">Pro Plan</div>
<button className="block w-full text-left px-4 py-2 hover:bg-coral/10 text-coral" onclick="logout()"><i className="ti ti-logout mr-2"></i>Logout</button>
</div>
</div>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="w-20 md:w-64 bg-white dark:bg-sidebar border-r border-gray-200 dark:border-gray-800 flex flex-col py-6 px-2 transition-all duration-300">
<nav className="flex flex-col gap-4 text-lg font-semibold">
<a className="flex items-center gap-3 rounded-lg py-2 px-4 text-electric bg-electric/10 hover:bg-electric/20 transition" href="#"><i className="ti ti-home"></i><span className="hidden md:inline">Overview</span></a>
<a className="flex items-center gap-3 rounded-lg py-2 px-4 hover:bg-coral/10 transition" href="#"><i className="ti ti-notebook"></i><span className="hidden md:inline">Notes</span></a>
<a className="flex items-center gap-3 rounded-lg py-2 px-4 hover:bg-violet/10 transition" href="#"><i className="ti ti-terminal"></i><span className="hidden md:inline">Code</span></a>
<a className="flex items-center gap-3 rounded-lg py-2 px-4 hover:bg-coral/10 transition" href="#"><i className="ti ti-brand-leetcode"></i><span className="hidden md:inline">LeetCode</span></a>
<a className="flex items-center gap-3 rounded-lg py-2 px-4 hover:bg-electric/10 transition" href="#"><i className="ti ti-users"></i><span className="hidden md:inline">Collab</span></a>
<a className="flex items-center gap-3 rounded-lg py-2 px-4 hover:bg-coral/10 transition" href="#"><i className="ti ti-credit-card"></i><span className="hidden md:inline">Subscription</span></a>
<a className="flex items-center gap-3 rounded-lg py-2 px-4 hover:bg-violet/10 transition" href="#"><i className="ti ti-settings"></i><span className="hidden md:inline">Settings</span></a>
</nav>
</aside>

<main className="flex-1 overflow-y-auto p-8 bg-bg dark:bg-sidebar">

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

<section className="bg-white dark:bg-sidebar rounded-xl shadow p-6 flex flex-col">
<div className="flex items-center mb-3 gap-2">
<i className="ti ti-notebook text-electric"></i>
<h2 className="text-lg font-bold">Recent Notes</h2>
</div>
<ul className="space-y-2 text-sm">
<li className="flex items-center justify-between hover:bg-electric/10 px-2 py-1 rounded transition">
<span>System Design Patterns</span>
<time className="text-xs text-gray-400">5m ago</time>
</li>
<li className="flex items-center justify-between hover:bg-electric/10 px-2 py-1 rounded transition">
<span>Frontend Interview Prep</span>
<time className="text-xs text-gray-400">1h ago</time>
</li>
<li className="flex items-center justify-between hover:bg-electric/10 px-2 py-1 rounded transition">
<span>React Hooks Guide</span>
<time className="text-xs text-gray-400">2h ago</time>
</li>
</ul>
</section>

<section className="bg-white dark:bg-sidebar rounded-xl shadow p-6 flex flex-col">
<div className="flex items-center mb-3 gap-2">
<i className="ti ti-pin text-coral"></i>
<h2 className="text-lg font-bold">Pinned &amp; Shared</h2>
</div>
<ul className="space-y-2 text-sm">
<li className="flex items-center justify-between hover:bg-coral/10 px-2 py-1 rounded transition">
<span>Database Best Practices</span>
<span className="flex items-center gap-1 text-xs text-gray-400"><i className="ti ti-users"></i> 3</span>
</li>
<li className="flex items-center justify-between hover:bg-coral/10 px-2 py-1 rounded transition">
<span>JS Algorithms</span>
<span className="text-xs text-gray-400">You</span>
</li>
</ul>
</section>

<section className="bg-white dark:bg-sidebar rounded-xl shadow p-6">
<div className="flex items-center mb-3 gap-2">
<i className="ti ti-brand-leetcode text-violet"></i>
<h2 className="text-lg font-bold">LeetCode Progress</h2>
</div>
<div className="flex flex-col gap-2 text-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-green-400"></span> 42 Solved
            </div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-yellow-400"></span> 8 Bookmarked
            </div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-gray-400"></span> 4 Assigned
            </div>
<button className="mt-3 w-full py-2 rounded bg-violet text-white font-bold hover:bg-coral transition flex items-center justify-center gap-2">
<i className="ti ti-terminal"></i> Solve Now
            </button>
</div>
</section>
</div>

<div className="flex gap-4 mb-8">
<button className="flex-1 py-4 rounded-xl bg-electric text-white font-bold shadow hover:bg-violet transition flex items-center justify-center gap-2">
<i className="ti ti-edit"></i> New Note
        </button>
<button className="flex-1 py-4 rounded-xl bg-violet text-white font-bold shadow hover:bg-coral transition flex items-center justify-center gap-2">
<i className="ti ti-brush"></i> New Canvas
        </button>
<button className="flex-1 py-4 rounded-xl bg-coral text-white font-bold shadow hover:bg-electric transition flex items-center justify-center gap-2">
<i className="ti ti-terminal"></i> New Code
        </button>
</div>

<section className="bg-white dark:bg-sidebar rounded-xl shadow p-6 mb-8">
<div className="flex items-center gap-2 mb-3">
<i className="ti ti-activity text-electric"></i>
<h2 className="text-lg font-bold">Activity Feed</h2>
</div>
<ul className="space-y-3 text-sm">
<li><span className="font-semibold text-electric">Alex</span> shared <span className="font-semibold">"Next.js Guide"</span> <span className="text-xs text-gray-400">2m ago</span></li>
<li><span className="font-semibold text-coral">Sarah</span> commented on <span className="font-semibold">"Graph Theory"</span> <span className="text-xs text-gray-400">10m ago</span></li>
<li><span className="font-semibold text-violet">You</span> solved <span className="font-semibold">"Two Sum"</span> <span className="text-xs text-gray-400">1h ago</span></li>
</ul>
</section>

<div className="bg-electric/10 dark:bg-violet/20 rounded-xl p-6 flex items-center gap-4 mb-8 animate-pulse">
<i className="ti ti-lightbulb text-3xl text-electric"></i>
<div>
<h3 className="font-bold mb-1 text-electric">Welcome to CodeNote AI!</h3>
<p className="text-sm text-gray-700 dark:text-gray-100">Organize, code, draw, and collaborate with AI-powered features. <a className="underline text-coral font-semibold" href="#">Take a quick tour?</a></p>
</div>
</div>
</main>
</div>
</div>

<div className="fixed bottom-4 right-4 z-50 px-6 py-3 bg-coral text-white rounded-xl shadow-lg flex items-center gap-2 animate-bounce hidden" id="offline">
<i className="ti ti-wifi-off text-xl"></i> Offline mode
</div>
<div className="fixed z-50 pointer-events-none px-4 py-2 rounded-lg bg-black/80 text-white text-xs shadow-lg hidden" id="tooltip">
  Quick tip: Use <kbd>Ctrl+Enter</kbd> to run code!
</div>


    </>
  );
}
