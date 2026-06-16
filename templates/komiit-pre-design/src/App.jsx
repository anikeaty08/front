import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
brand: { 50: '#eff6ff', 100: '#dbeafe', 500: '#3b82f6', 600: '#2563eb', 900: '#1e3a8a', 950: '#172554' },
dark: { 900: '#0f1115', 800: '#1a1d24', 700: '#282d38' }
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Check local storage for theme
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        function toggleDarkMode() {
            document.documentElement.classList.toggle('dark');
            localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        }

        function navigate(viewId) {
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
                setTimeout(() => el.style.display = 'none', 300);
            });
            const target = document.getElementById(viewId);
            if(target) {
                target.style.display = 'flex';
                setTimeout(() => target.classList.add('active'), 10);
            }
        }

        function navigateApp(appViewId, role) {
            // Setup correct role context
            document.querySelectorAll('.nav-talent, .nav-industry').forEach(el => el.classList.add('hidden'));
            document.getElementById('sidebar-profile-talent').classList.add('hidden');
            document.getElementById('sidebar-profile-industry').classList.add('hidden');
            
            if (role === 'talent') {
                document.querySelectorAll('.nav-talent').forEach(el => el.classList.remove('hidden'));
                document.querySelectorAll('.nav-talent').forEach(el => el.classList.add('flex'));
                document.getElementById('sidebar-profile-talent').classList.remove('hidden');
            } else if (role === 'industry') {
                document.querySelectorAll('.nav-industry').forEach(el => el.classList.remove('hidden'));
                document.querySelectorAll('.nav-industry').forEach(el => el.classList.add('flex'));
                document.getElementById('sidebar-profile-industry').classList.remove('hidden');
            }

            // Show app layout
            navigate('app-layout');
            switchAppView(appViewId);
        }

        function switchAppView(viewId) {
            document.querySelectorAll('.app-view').forEach(el => el.classList.remove('active'));
            const target = document.getElementById('app-' + viewId);
            if(target) target.classList.add('active');
            
            // Highlight nav (basic implementation)
            document.querySelectorAll('#app-layout nav a').forEach(a => {
                a.classList.remove('bg-brand-50', 'dark:bg-brand-900/20', 'text-brand-600', 'dark:text-brand-400');
            });
            // (In a real app, link active state logic would be based on href/id match)
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-1 bg-white/90 dark:bg-dark-800/90 p-3 rounded-xl shadow-2xl border border-slate-200 dark:border-dark-700 backdrop-blur-md max-h-[80vh] overflow-y-auto">
<div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 px-2 pb-2 uppercase tracking-widest border-b border-slate-100 dark:border-dark-700 mb-2">Navigation Map</div>
<div className="text-xs font-medium text-slate-400 dark:text-slate-500 px-2 mt-1 mb-1">Public</div>
<button className="text-xs text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-dark-700 font-medium" onclick="navigate('landing')">1. Landing Page</button>
<button className="text-xs text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-dark-700 font-medium" onclick="navigate('auth')">2. Auth / Login</button>
<div className="text-xs font-medium text-brand-600 dark:text-brand-500 px-2 mt-3 mb-1">Talent Views</div>
<button className="text-xs text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-dark-700 font-medium" onclick="navigateApp('talent-dash', 'talent')">Project Discovery</button>
<button className="text-xs text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-dark-700 font-medium" onclick="navigateApp('talent-profile', 'talent')">Talent Profile</button>
<div className="text-xs font-medium text-emerald-600 dark:text-emerald-500 px-2 mt-3 mb-1">Industry Views</div>
<button className="text-xs text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-dark-700 font-medium" onclick="navigateApp('industry-dash', 'industry')">Dashboard Overview</button>
<button className="text-xs text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-dark-700 font-medium" onclick="navigateApp('industry-add-project', 'industry')">Add New Project</button>
<button className="text-xs text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-dark-700 font-medium" onclick="navigateApp('industry-profile', 'industry')">Industry Profile</button>
<div className="text-xs font-medium text-purple-600 dark:text-purple-500 px-2 mt-3 mb-1">Shared Views</div>
<button className="text-xs text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-dark-700 font-medium" onclick="navigateApp('forum', 'talent')">Community Forum</button>
<button className="text-xs text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-dark-700 font-medium" onclick="navigateApp('notifications', 'talent')">Notifications</button>
<button className="text-xs text-left px-3 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-dark-700 font-medium" onclick="navigateApp('settings', 'talent')">Settings</button>
</div>

<main className="view-section active flex-col min-h-screen w-full" id="landing">
<nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-dark-900/80 border-b border-slate-200 dark:border-dark-700 transition-colors">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-semibold text-lg tracking-tighter text-slate-900 dark:text-white" href="#">komiit.id</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Find Projects</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Hire Talent</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Community</a>
</div>
</div>
<div className="flex items-center gap-4 text-sm font-medium">
<button className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-md" onclick="toggleDarkMode()">
<iconify-icon className="text-lg dark:hidden" icon="solar:moon-linear"></iconify-icon>
<iconify-icon className="text-lg hidden dark:block" icon="solar:sun-linear"></iconify-icon>
</button>
<button className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hidden sm:block" onclick="navigate('auth')">Log in</button>
<button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-md hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm" onclick="navigate('auth')">Get Started</button>
</div>
</div>
</nav>

<section className="pt-24 pb-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white dark:from-dark-800 dark:via-dark-900 dark:to-dark-900 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-dark-800 text-slate-700 dark:text-slate-300 text-xs font-medium mb-8 border border-slate-200 dark:border-dark-700">
<span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span></span>
                    Premium Matching Platform
                </div>
<h1 className="text-5xl md:text-6xl font-semibold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
                    Where Elite IT Talent Meets Verified Industry Projects.
                </h1>
<p className="text-base text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                    Komiit.id bridges the gap between potential and execution. Build a verified portfolio, discover high-paying projects, and scale your tech team with trust and precision.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-brand-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-700 transition-colors shadow-sm text-sm flex items-center justify-center gap-2" onclick="navigate('auth')">
                        Join as Talent <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-white dark:bg-dark-800 text-slate-900 dark:text-white border border-slate-200 dark:border-dark-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-dark-700 transition-colors shadow-sm text-sm" onclick="navigate('auth')">
                        Hire for Industry
                    </button>
</div>
</div>
</section>

<section className="bg-slate-50 dark:bg-dark-800/50 py-24 border-y border-slate-200 dark:border-dark-800">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">One Platform, Dual Value</h2>
<p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Designed meticulously for both career growth and product development.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-slate-200 dark:border-dark-700 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 dark:bg-brand-900/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6"><iconify-icon className="text-xl" icon="solar:user-id-linear"></iconify-icon></div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white mb-2">For IT Talents</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">Build a verified portfolio through real-world projects and grow your professional network.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Work on verified industry projects</li>
<li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Smart matching based on real skills</li>
<li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Active Reddit-style professional forum</li>
</ul>
</div>
</div>

<div className="bg-slate-900 dark:bg-dark-900 rounded-2xl p-8 border border-slate-800 dark:border-dark-700 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 dark:bg-dark-800 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-slate-800 dark:bg-dark-800 text-white flex items-center justify-center mb-6"><iconify-icon className="text-xl" icon="solar:buildings-linear"></iconify-icon></div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">For Project Providers</h3>
<p className="text-sm text-slate-400 mb-6 line-clamp-2">Stop guessing. Hire verified IT professionals ready to execute your vision with precision.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-slate-300 text-sm"><iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> AI-assisted candidate filtering</li>
<li className="flex items-start gap-2 text-slate-300 text-sm"><iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Match scores to guarantee skill fit</li>
<li className="flex items-start gap-2 text-slate-300 text-sm"><iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Secure milestone-based collaborations</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white dark:bg-dark-900 py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100 dark:divide-dark-800">
<div className="text-center px-4">
<p className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-1">12k+</p>
<p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-tight">Active Talents</p>
</div>
<div className="text-center px-4">
<p className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-1">850+</p>
<p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-tight">Verified Industries</p>
</div>
<div className="text-center px-4">
<p className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-1">3.4k</p>
<p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-tight">Projects Completed</p>
</div>
<div className="text-center px-4">
<p className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-1">94%</p>
<p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-tight">Match Success Rate</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 dark:bg-dark-800/50 border-t border-slate-200 dark:border-dark-800">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">Two Paths. One Ecosystem.</h2>
<p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Seamless workflows engineered for high-performance collaboration.</p>
</div>
<div className="grid md:grid-cols-2 gap-16 relative">
<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-dark-700 -translate-x-1/2"></div>

<div className="space-y-8 relative pr-8">
<div className="text-lg font-semibold text-slate-900 dark:text-white mb-8 pb-4 border-b border-slate-200 dark:border-dark-700">Talent Journey</div>
<div className="relative pl-8 border-l-2 border-brand-200 dark:border-brand-900/50">
<div className="absolute w-4 h-4 rounded-full bg-brand-500 left-[-9px] top-1 border-4 border-slate-50 dark:border-dark-800"></div>
<h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">1. Build Profile</h4>
<p className="text-xs text-slate-500 dark:text-slate-400">Showcase skills, tools, and real-world portfolio items to increase visibility.</p>
</div>
<div className="relative pl-8 border-l-2 border-brand-200 dark:border-brand-900/50">
<div className="absolute w-4 h-4 rounded-full bg-brand-500 left-[-9px] top-1 border-4 border-slate-50 dark:border-dark-800"></div>
<h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">2. Discover Projects</h4>
<p className="text-xs text-slate-500 dark:text-slate-400">Browse Fiverr-style marketplace filtered precisely to your tech stack.</p>
</div>
<div className="relative pl-8 border-l-2 border-transparent">
<div className="absolute w-4 h-4 rounded-full bg-brand-500 left-[-9px] top-1 border-4 border-slate-50 dark:border-dark-800"></div>
<h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">3. Deliver &amp; Grow</h4>
<p className="text-xs text-slate-500 dark:text-slate-400">Collaborate, receive industry reviews, and boost your long-term ranking.</p>
</div>
</div>

<div className="space-y-8 relative pl-8 md:pl-16">
<div className="text-lg font-semibold text-slate-900 dark:text-white mb-8 pb-4 border-b border-slate-200 dark:border-dark-700">Industry Journey</div>
<div className="relative pl-8 border-l-2 border-emerald-200 dark:border-emerald-900/50">
<div className="absolute w-4 h-4 rounded-full bg-emerald-500 left-[-9px] top-1 border-4 border-slate-50 dark:border-dark-800"></div>
<h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">1. Verify Company</h4>
<p className="text-xs text-slate-500 dark:text-slate-400">Get the verified badge to attract top-tier senior talent immediately.</p>
</div>
<div className="relative pl-8 border-l-2 border-emerald-200 dark:border-emerald-900/50">
<div className="absolute w-4 h-4 rounded-full bg-emerald-500 left-[-9px] top-1 border-4 border-slate-50 dark:border-dark-800"></div>
<h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">2. Post Project</h4>
<p className="text-xs text-slate-500 dark:text-slate-400">Use our step-by-step wizard to define scope, budget, and required skills.</p>
</div>
<div className="relative pl-8 border-l-2 border-transparent">
<div className="absolute w-4 h-4 rounded-full bg-emerald-500 left-[-9px] top-1 border-4 border-slate-50 dark:border-dark-800"></div>
<h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">3. Hire via Match Score</h4>
<p className="text-xs text-slate-500 dark:text-slate-400">Filter applicants instantly based on algorithm-driven skill matching.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-dark-900">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 text-xs font-medium mb-6 border border-purple-100 dark:border-purple-800/50">Community</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">Connect. Discuss. Elevate.</h2>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                        Access our exclusive Discord &amp; Reddit style forum. Discuss trending stacks, share architecture patterns, and network directly with verified tech leads and talented peers.
                    </p>
<button className="text-sm font-medium text-purple-600 dark:text-purple-400 flex items-center gap-1 hover:text-purple-700" onclick="navigate('auth')">
                        Preview Discussions <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="bg-slate-50 dark:bg-dark-800 rounded-2xl border border-slate-200 dark:border-dark-700 shadow-lg p-6 relative">

<div className="flex gap-4">
<div className="w-1/3 hidden sm:block border-r border-slate-200 dark:border-dark-700 pr-4 space-y-2">
<div className="h-4 w-1/2 bg-slate-200 dark:bg-dark-700 rounded mb-4"></div>
<div className="h-3 w-3/4 bg-slate-200 dark:bg-dark-700 rounded"></div>
<div className="h-3 w-full bg-purple-100 dark:bg-purple-900/30 rounded"></div>
<div className="h-3 w-2/3 bg-slate-200 dark:bg-dark-700 rounded"></div>
</div>
<div className="w-full sm:w-2/3 space-y-4">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-dark-700 shrink-0"></div>
<div className="w-full space-y-2">
<div className="flex items-center gap-2">
<div className="h-3 w-24 bg-slate-300 dark:bg-dark-600 rounded"></div>
<div className="h-2 w-12 bg-slate-200 dark:bg-dark-700 rounded"></div>
</div>
<div className="h-3 w-full bg-slate-200 dark:bg-dark-700 rounded"></div>
<div className="h-3 w-4/5 bg-slate-200 dark:bg-dark-700 rounded"></div>
<div className="h-24 w-full bg-slate-200 dark:bg-dark-700 rounded-lg mt-2"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 dark:bg-dark-900 border-t border-slate-200 dark:border-dark-800 py-16">
<div className="max-w-7xl mx-auto px-6 text-center text-slate-500 dark:text-slate-400 text-sm">
<p className="mb-4">© 2024 Komiit.id. Premium Tech Talent Marketplace.</p>
<div className="flex justify-center gap-4 text-xs">
<a className="hover:text-slate-900 dark:hover:text-white" href="#">Privacy</a>
<a className="hover:text-slate-900 dark:hover:text-white" href="#">Terms</a>
<a className="hover:text-slate-900 dark:hover:text-white" href="#">Security</a>
</div>
</div>
</footer>
</main>

<main className="view-section hidden min-h-screen items-center justify-center py-12 px-4 relative bg-slate-50 dark:bg-dark-900" id="auth">
<button className="absolute top-6 left-6 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1" onclick="navigate('landing')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
        </button>
<div className="w-full max-w-sm space-y-8 bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-dark-700">
<div className="text-center">
<h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Sign in to komiit.id</h2>
</div>
<div className="flex p-1 bg-slate-100 dark:bg-dark-900 rounded-lg">
<button className="w-full rounded-md py-1.5 text-xs font-medium bg-white dark:bg-dark-700 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-dark-600">Login</button>
<button className="w-full rounded-md py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">Register</button>
</div>
<form className="space-y-4">
<div>
<label className="block text-[11px] font-medium text-slate-700 dark:text-slate-300 mb-1">Email address</label>
<input className="w-full rounded-md border border-slate-200 dark:border-dark-600 bg-white dark:bg-dark-900 px-3 py-2 text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-brand-600 outline-none" placeholder="name@example.com" type="email"/>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
<input className="w-full rounded-md border border-slate-200 dark:border-dark-600 bg-white dark:bg-dark-900 px-3 py-2 text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-brand-600 outline-none" placeholder="••••••••" type="password"/>
</div>
<button className="w-full py-2 bg-slate-900 dark:bg-brand-600 text-white rounded-md text-sm font-medium hover:bg-slate-800 dark:hover:bg-brand-700" onclick="navigateApp('talent-dash', 'talent')" type="button">Sign in Demo</button>
</form>
</div>
</main>

<main className="view-section hidden h-screen bg-white dark:bg-dark-900 overflow-hidden w-full" id="app-layout">

<aside className="w-64 bg-slate-50 dark:bg-dark-800 border-r border-slate-200 dark:border-dark-700 flex flex-col z-10 shrink-0 h-full">
<div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-dark-700 justify-between">
<span className="font-semibold text-lg tracking-tighter text-slate-900 dark:text-white">komiit.id</span>
<button className="text-slate-400 hover:text-slate-900 dark:hover:text-white" onclick="toggleDarkMode()"><iconify-icon icon="solar:sun-linear"></iconify-icon></button>
</div>
<div className="p-4 flex-1 overflow-y-auto no-scrollbar">

<div className="bg-white dark:bg-dark-900 border border-slate-200 dark:border-dark-700 rounded-lg p-3 mb-6 flex items-center gap-3" id="sidebar-profile-talent">
<img className="w-10 h-10 rounded-full border border-slate-100 dark:border-dark-600" src="https://i.pravatar.cc/100?img=33"/>
<div>
<p className="text-xs font-semibold text-slate-900 dark:text-white">Alex Morgan</p>
<p className="text-[10px] text-brand-600 dark:text-brand-400 font-medium">Available</p>
</div>
</div>

<div className="hidden bg-white dark:bg-dark-900 border border-slate-200 dark:border-dark-700 rounded-lg p-3 mb-6 flex items-center gap-3" id="sidebar-profile-industry">
<div className="w-10 h-10 rounded bg-slate-900 dark:bg-brand-600 text-white flex items-center justify-center font-semibold text-sm">TC</div>
<div>
<p className="text-xs font-semibold text-slate-900 dark:text-white">TechCorp Inc.</p>
<p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1"><iconify-icon icon="solar:verified-check-bold"></iconify-icon> Verified</p>
</div>
</div>

<nav className="space-y-1">
<div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-3 mb-2 mt-4">Menu</div>

<a className="nav-item nav-talent flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-700 hover:text-slate-900 dark:hover:text-white rounded-md transition-colors" href="#" onclick="switchAppView('talent-dash')"><iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon> Find Projects</a>
<a className="nav-item nav-talent flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-700 hover:text-slate-900 dark:hover:text-white rounded-md transition-colors" href="#" onclick="switchAppView('talent-profile')"><iconify-icon className="text-lg" icon="solar:user-circle-linear"></iconify-icon> My Profile</a>

<a className="nav-item nav-industry hidden flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-700 hover:text-slate-900 dark:hover:text-white rounded-md transition-colors" href="#" onclick="switchAppView('industry-dash')"><iconify-icon className="text-lg" icon="solar:pie-chart-2-linear"></iconify-icon> Dashboard</a>
<a className="nav-item nav-industry hidden flex items-center gap-3 px-3 py-2 text-sm font-medium text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 rounded-md transition-colors" href="#" onclick="switchAppView('industry-add-project')"><iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon> Post Project</a>
<a className="nav-item nav-industry hidden flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-700 hover:text-slate-900 dark:hover:text-white rounded-md transition-colors" href="#" onclick="switchAppView('industry-profile')"><iconify-icon className="text-lg" icon="solar:buildings-linear"></iconify-icon> Company Profile</a>

<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-700 hover:text-slate-900 dark:hover:text-white rounded-md transition-colors" href="#" onclick="switchAppView('forum')"><iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon> Forum</a>
<a className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-700 hover:text-slate-900 dark:hover:text-white rounded-md transition-colors" href="#" onclick="switchAppView('notifications')">
<div className="flex items-center gap-3"><iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon> Notifications</div>
<span className="w-2 h-2 rounded-full bg-red-500"></span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-700 hover:text-slate-900 dark:hover:text-white rounded-md transition-colors" href="#" onclick="switchAppView('settings')"><iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon> Settings</a>
</nav>
</div>
<div className="p-4 border-t border-slate-200 dark:border-dark-700">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" onclick="navigate('auth')"><iconify-icon className="text-lg" icon="solar:logout-2-linear"></iconify-icon> Logout</button>
</div>
</aside>

<div className="flex-1 flex flex-col h-full overflow-hidden bg-white dark:bg-dark-900 relative">

<header className="h-16 border-b border-slate-200 dark:border-dark-700 flex items-center justify-between px-8 shrink-0 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md z-10">
<div className="flex items-center gap-4 w-full max-w-md">
<div className="relative w-full">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-9 pr-4 py-1.5 bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-brand-500 dark:text-white transition-colors" placeholder="Global search..." type="text"/>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto relative p-8">

<div className="app-view active" id="app-talent-dash">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2">Find the Right Project</h1>

<div className="flex flex-wrap items-center gap-3 mb-8 border-b border-slate-200 dark:border-dark-700 pb-4 mt-6">
<select className="text-xs bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 text-slate-700 dark:text-slate-300 rounded px-3 py-1.5 outline-none font-medium">
<option>Programming &amp; Tech</option><option>Design &amp; UI/UX</option>
</select>
<select className="text-xs bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 text-slate-700 dark:text-slate-300 rounded px-3 py-1.5 outline-none font-medium">
<option>Full Stack Web</option><option>Frontend</option><option>Backend</option>
</select>
<select className="text-xs bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 text-slate-700 dark:text-slate-300 rounded px-3 py-1.5 outline-none font-medium">
<option>Budget: Any</option><option>&gt; Rp 5M</option>
</select>
<button className="text-xs flex items-center gap-1 bg-slate-100 dark:bg-dark-700 px-3 py-1.5 rounded font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-600 transition-colors ml-auto">
<iconify-icon icon="solar:filter-linear"></iconify-icon> Filters
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-xl overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
<div className="h-32 bg-slate-100 dark:bg-dark-700 relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm">98% Match</span>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">TC</div>
<p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">TechCorp Inc. <iconify-icon className="text-brand-500" icon="solar:verified-check-bold"></iconify-icon></p>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white mb-2 leading-tight">E-Commerce Migration to Next.js</h3>
<div className="flex flex-wrap gap-1 mb-4">
<span className="text-[9px] px-1.5 py-0.5 bg-slate-100 dark:bg-dark-700 text-slate-600 dark:text-slate-300 rounded font-medium">Next.js</span>
<span className="text-[9px] px-1.5 py-0.5 bg-slate-100 dark:bg-dark-700 text-slate-600 dark:text-slate-300 rounded font-medium">Tailwind</span>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 dark:border-dark-700 flex justify-between items-center">
<p className="text-xs font-semibold text-slate-900 dark:text-white">Rp 8M <span className="text-[10px] font-normal text-slate-500">/ project</span></p>
<button className="text-xs font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">View Details</button>
</div>
</div>
</div>
</div>
</div>

<div className="app-view" id="app-talent-profile">

<div className="relative rounded-2xl overflow-hidden mb-8 border border-slate-200 dark:border-dark-700">
<div className="h-32 bg-gradient-to-r from-brand-600 to-indigo-600"></div>
<div className="bg-white dark:bg-dark-800 px-8 pb-6 relative">
<div className="flex justify-between items-end -mt-12 mb-4">
<img className="w-24 h-24 rounded-full border-4 border-white dark:border-dark-800 object-cover shadow-sm" src="https://i.pravatar.cc/100?img=33"/>
<div className="flex gap-2">
<button className="bg-white dark:bg-dark-700 border border-slate-200 dark:border-dark-600 text-slate-700 dark:text-slate-200 px-4 py-1.5 rounded-md text-xs font-medium hover:bg-slate-50 dark:hover:bg-dark-600 transition-colors">Edit Profile</button>
<button className="bg-brand-600 text-white px-4 py-1.5 rounded-md text-xs font-medium hover:bg-brand-700 transition-colors shadow-sm">Share</button>
</div>
</div>
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">Alex Morgan <iconify-icon className="text-brand-500 text-lg" icon="solar:verified-check-bold"></iconify-icon></h1>
<p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Senior Full Stack Developer | Next.js Specialist</p>
<div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Jakarta, ID</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Full-time</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 font-medium border border-emerald-100 dark:border-emerald-800/50"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Available</span>
</div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-8">
<section>
<h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 tracking-tight border-b border-slate-200 dark:border-dark-700 pb-2">About</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Passionate developer with 6 years of experience building scalable web applications. Specialized in React ecosystem and Node.js microservices. Proven track record of delivering projects on time for various tech startups.</p>
</section>
<section>
<h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 tracking-tight border-b border-slate-200 dark:border-dark-700 pb-2">Core Skills &amp; Tools</h3>
<div className="grid grid-cols-2 gap-4">
<div>
<div className="flex justify-between text-xs mb-1"><span className="font-medium text-slate-700 dark:text-slate-300">React / Next.js</span><span className="text-brand-600 dark:text-brand-400 font-semibold">Expert</span></div>
<div className="h-1.5 w-full bg-slate-100 dark:bg-dark-700 rounded-full overflow-hidden"><div className="h-full bg-brand-500 w-[95%]"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="font-medium text-slate-700 dark:text-slate-300">Node.js</span><span className="text-brand-600 dark:text-brand-400 font-semibold">Advanced</span></div>
<div className="h-1.5 w-full bg-slate-100 dark:bg-dark-700 rounded-full overflow-hidden"><div className="h-full bg-brand-500 w-[85%]"></div></div>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-[10px] px-2 py-1 border border-slate-200 dark:border-dark-700 rounded-md text-slate-600 dark:text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:figma-linear"></iconify-icon> Figma</span>
<span className="text-[10px] px-2 py-1 border border-slate-200 dark:border-dark-700 rounded-md text-slate-600 dark:text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:server-linear"></iconify-icon> AWS</span>
</div>
</section>
<section>
<h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 tracking-tight border-b border-slate-200 dark:border-dark-700 pb-2">Verified Portfolio</h3>
<div className="grid sm:grid-cols-2 gap-4">

<div className="border border-slate-200 dark:border-dark-700 rounded-xl overflow-hidden group">
<div className="h-32 bg-slate-100 dark:bg-dark-800 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="p-4">
<h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Fintech Admin Panel</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Built for PaymentGateway Inc.</p>
<a className="text-[10px] text-brand-600 dark:text-brand-400 font-medium hover:underline flex items-center gap-1" href="#">View Live <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>
</div>

<div className="space-y-4">
<div className="bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-xl p-5">
<h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">Reputation</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-700 dark:text-slate-300">Rating</span>
<span className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1"><iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon> 4.9 <span className="text-xs text-slate-400 font-normal">(12 reviews)</span></span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-slate-700 dark:text-slate-300">Projects Done</span>
<span className="text-sm font-semibold text-slate-900 dark:text-white">15</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-slate-700 dark:text-slate-300">Successful Collabs</span>
<span className="text-sm font-semibold text-slate-900 dark:text-white">8</span>
</div>
</div>
</div>

<div className="border border-slate-200 dark:border-dark-700 rounded-xl p-5">
<div className="flex items-center gap-2 mb-2">
<div className="flex text-amber-400 text-xs"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<span className="text-[10px] text-slate-500">2 weeks ago</span>
</div>
<p className="text-xs text-slate-600 dark:text-slate-400 italic mb-3">"Alex delivered exceptional code quality for our core platform."</p>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold">TC</div>
<p className="text-[10px] font-semibold text-slate-900 dark:text-white">TechCorp Inc.</p>
</div>
</div>
</div>
</div>
</div>

<div className="app-view h-[calc(100vh-8rem)]" id="app-forum">
<div className="flex h-full border border-slate-200 dark:border-dark-700 rounded-2xl overflow-hidden bg-slate-50 dark:bg-dark-800/50 shadow-sm">

<div className="w-60 bg-white dark:bg-dark-900 border-r border-slate-200 dark:border-dark-700 flex flex-col hidden md:flex shrink-0">
<div className="p-4 border-b border-slate-200 dark:border-dark-700">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">Community</h3>
</div>
<div className="flex-1 overflow-y-auto p-3 space-y-4">
<div>
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-2 mb-1">Programming</p>
<a className="block px-2 py-1.5 text-sm font-medium text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 rounded" href="#"># general-tech</a>
<a className="block px-2 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-800 rounded" href="#"># frontend-dev</a>
<a className="block px-2 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-800 rounded" href="#"># backend-arch</a>
</div>
<div>
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-2 mb-1">Design</p>
<a className="block px-2 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-800 rounded" href="#"># ui-ux</a>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-white dark:bg-dark-900 relative">

<div className="p-4 border-b border-slate-200 dark:border-dark-700 bg-slate-50/50 dark:bg-dark-800/50 sticky top-0 z-10 backdrop-blur-md">
<div className="bg-white dark:bg-dark-900 border border-slate-200 dark:border-dark-700 rounded-xl p-3 shadow-sm">
<input className="w-full bg-transparent text-sm text-slate-900 dark:text-white outline-none mb-2" placeholder="Create a new discussion in #general-tech..." type="text"/>
<div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-dark-700">
<div className="flex gap-2 text-slate-400">
<button className="hover:text-brand-500"><iconify-icon className="text-lg" icon="solar:gallery-wide-linear"></iconify-icon></button>
<button className="hover:text-brand-500"><iconify-icon className="text-lg" icon="solar:paperclip-linear"></iconify-icon></button>
</div>
<button className="bg-brand-600 text-white px-4 py-1.5 rounded-md text-xs font-medium hover:bg-brand-700">Post</button>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4">

<div className="bg-white dark:bg-dark-900 border border-slate-200 dark:border-dark-700 rounded-xl p-4 shadow-sm hover:border-slate-300 dark:hover:border-dark-600 transition-colors cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<img className="w-8 h-8 rounded-full border border-slate-200 dark:border-dark-700" src="https://i.pravatar.cc/100?img=12"/>
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-slate-900 dark:text-white hover:underline">David K.</span>
<span className="text-[9px] bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 px-1.5 py-0.5 rounded font-medium border border-brand-100 dark:border-brand-800">Talent</span>
<span className="text-[10px] text-slate-400">2h ago</span>
</div>
</div>
</div>
<h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2 tracking-tight">Best practices for state management in Next.js 14 App Router?</h4>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-4">I'm transitioning from Redux to Zustand, but wondering if Context API is sufficient for most medium scale apps now. Thoughts?</p>
<div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
<button className="flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400"><iconify-icon className="text-base" icon="solar:arrow-up-linear"></iconify-icon> 24</button>
<button className="flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400"><iconify-icon className="text-base" icon="solar:chat-round-line-linear"></iconify-icon> 8 Replies</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="app-view" id="app-industry-dash">
<div className="flex justify-between items-end mb-8 border-b border-slate-200 dark:border-dark-700 pb-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-1">Project Management</h1>
<p className="text-sm text-slate-500 dark:text-slate-400">Review applicants and manage milestones.</p>
</div>
<select className="text-xs bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 text-slate-700 dark:text-slate-300 rounded px-3 py-2 outline-none font-medium shadow-sm">
<option>Active: E-Commerce Migration</option>
</select>
</div>
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="bg-white dark:bg-dark-800 p-4 rounded-xl border border-slate-200 dark:border-dark-700 shadow-sm flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-600 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon></div>
<div>
<p className="text-xs text-slate-500 font-medium">Total Applicants</p>
<p className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight">24</p>
</div>
</div>
</div>
<div className="bg-white dark:bg-dark-800 rounded-xl border border-slate-200 dark:border-dark-700 shadow-sm overflow-hidden">
<table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
<thead className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-dark-900 uppercase tracking-wider border-b border-slate-200 dark:border-dark-700">
<tr>
<th className="px-6 py-3">Talent Profile</th>
<th className="px-6 py-3">Match Score</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-dark-700">
<tr className="hover:bg-slate-50/50 dark:hover:bg-dark-700/50">
<td className="px-6 py-4">
<div className="flex items-center gap-3 cursor-pointer" onclick="switchAppView('talent-profile')">
<img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/100?img=33"/>
<div>
<div className="font-medium text-slate-900 dark:text-white text-xs hover:underline">Alex Morgan</div>
<div className="text-[10px] text-slate-500">React Developer</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-16 bg-slate-100 dark:bg-dark-700 rounded-full h-1.5"><div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '98%'}}></div></div>
<span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">98%</span>
</div>
</td>
<td className="px-6 py-4"><span className="px-2 py-1 text-[10px] font-medium rounded-md bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-500 border border-amber-100 dark:border-amber-800">In Review</span></td>
<td className="px-6 py-4 text-right">
<button className="text-xs bg-white dark:bg-dark-700 border border-slate-200 dark:border-dark-600 text-slate-900 dark:text-white px-3 py-1.5 rounded-md font-medium shadow-sm hover:bg-slate-50 dark:hover:bg-dark-600">Review</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="app-view" id="app-industry-add-project">
<div className="max-w-4xl mx-auto">
<div className="mb-8 border-b border-slate-200 dark:border-dark-700 pb-4">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-1">Create New Project</h1>
<p className="text-sm text-slate-500 dark:text-slate-400">Attract top talent with detailed project requirements.</p>
</div>
<div className="flex gap-8">

<div className="w-48 hidden md:block shrink-0">
<ul className="space-y-4 relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-slate-200 dark:before:bg-dark-700">
<li className="relative flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-[10px] font-bold z-10 shadow-sm ring-4 ring-white dark:ring-dark-900">1</div>
<span className="text-xs font-semibold text-slate-900 dark:text-white">Basics</span>
</li>
<li className="relative flex items-center gap-3 opacity-50">
<div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-dark-700 text-slate-500 dark:text-slate-400 flex items-center justify-center text-[10px] font-bold z-10 ring-4 ring-white dark:ring-dark-900">2</div>
<span className="text-xs font-medium text-slate-700 dark:text-slate-300">Requirements</span>
</li>
</ul>
</div>

<div className="flex-1 bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-2xl shadow-sm p-6 sm:p-8">
<h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Step 1: Project Basics</h2>
<form className="space-y-5">
<div>
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Project Title</label>
<input className="w-full rounded-md border border-slate-200 dark:border-dark-600 bg-slate-50 dark:bg-dark-900 px-3 py-2 text-sm focus:ring-1 focus:ring-brand-600 outline-none dark:text-white" placeholder="e.g. Mobile App Redesign" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Category</label>
<select className="w-full rounded-md border border-slate-200 dark:border-dark-600 bg-slate-50 dark:bg-dark-900 px-3 py-2 text-sm focus:ring-1 focus:ring-brand-600 outline-none dark:text-white">
<option>Programming &amp; Tech</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Subcategory</label>
<select className="w-full rounded-md border border-slate-200 dark:border-dark-600 bg-slate-50 dark:bg-dark-900 px-3 py-2 text-sm focus:ring-1 focus:ring-brand-600 outline-none dark:text-white">
<option>Full Stack Web</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Project Description</label>
<textarea className="w-full rounded-md border border-slate-200 dark:border-dark-600 bg-slate-50 dark:bg-dark-900 px-3 py-2 text-sm focus:ring-1 focus:ring-brand-600 outline-none dark:text-white" placeholder="Describe the scope of work..." rows="4"></textarea>
</div>
<div className="pt-4 border-t border-slate-100 dark:border-dark-700 flex justify-end gap-3">
<button className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300" type="button">Save Draft</button>
<button className="px-4 py-2 bg-brand-600 text-white text-xs font-medium rounded-md hover:bg-brand-700" type="button">Next Step</button>
</div>
</form>
</div>
</div>
</div>
</div>

<div className="app-view" id="app-settings">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6">Settings</h1>
<div className="flex flex-col md:flex-row gap-8">
<div className="w-full md:w-48 shrink-0">
<nav className="space-y-1">
<a className="block px-3 py-2 text-sm font-medium text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 rounded-md" href="#">Account</a>
<a className="block px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-800 rounded-md" href="#">Notifications</a>
<a className="block px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-800 rounded-md" href="#">Security</a>
</nav>
</div>
<div className="flex-1 max-w-2xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-2xl shadow-sm p-6">
<h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4">Appearance</h2>
<div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-dark-700">
<div>
<p className="text-sm font-medium text-slate-900 dark:text-white">Dark Mode</p>
<p className="text-[10px] text-slate-500 dark:text-slate-400">Toggle dark mode interface manually.</p>
</div>
<button className="px-3 py-1.5 bg-slate-100 dark:bg-dark-700 text-xs font-medium rounded text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-600 shadow-sm" onclick="toggleDarkMode()">Toggle</button>
</div>
</div>
</div>
</div>

<div className="app-view" id="app-notifications">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6">Notifications</h1>
<div className="max-w-2xl border border-slate-200 dark:border-dark-700 rounded-xl overflow-hidden bg-white dark:bg-dark-800 shadow-sm">
<div className="p-4 border-b border-slate-100 dark:border-dark-700 hover:bg-slate-50 dark:hover:bg-dark-700/50 flex gap-4 cursor-pointer">
<div className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0"><iconify-icon icon="solar:letter-linear"></iconify-icon></div>
<div>
<p className="text-sm text-slate-900 dark:text-white font-medium">TechCorp invited you to a project.</p>
<p className="text-[10px] text-slate-500">Just now</p>
</div>
</div>
</div>
</div>

</div>
</div>
</main>



    </>
  );
}
