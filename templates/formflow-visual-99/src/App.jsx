import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
}



      // Theme Toggle Function
      function toggleTheme() {
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
          html.classList.remove('dark');
          localStorage.setItem('theme', 'light');
          updateToggleIcon('light');
        } else {
          html.classList.add('dark');
          localStorage.setItem('theme', 'dark');
          updateToggleIcon('dark');
        }
      }

      function updateToggleIcon(theme) {
        const iconElement = document.querySelector('.theme-toggle-thumb .iconify');
        if (theme === 'dark') {
          iconElement.setAttribute('data-icon', 'lucide:moon');
        } else {
          iconElement.setAttribute('data-icon', 'lucide:sun');
        }
      }

      // Check for saved theme preference or default to dark
      function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
          document.documentElement.classList.add('dark');
          updateToggleIcon('dark');
        } else {
          document.documentElement.classList.remove('dark');
          updateToggleIcon('light');
        }
      }

      // Initialize theme on page load
      initTheme();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise z-50"></div>

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="gradient-swirl gradient-swirl-1" style={{top: '-20%', left: '-10%'}}></div>
<div className="gradient-swirl gradient-swirl-2" style={{top: '40%', right: '-15%'}}></div>
<div className="gradient-swirl gradient-swirl-3" style={{bottom: '-20%', left: '30%'}}></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none grid-pattern opacity-50"></div>

<nav className="fixed top-0 w-full z-50 border-b border-neutral-200 dark:border-white/5 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-neutral-900 dark:text-white font-medium tracking-tight text-lg text-transition">
<span className="iconify" data-height="20" data-icon="lucide:layers" data-width="20"></span>
<span>FORMFLOW</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
<a className="text-transition hover:text-neutral-900 dark:hover:text-white hover:scale-105 transition-all" href="#features">Features</a>
<a className="text-transition hover:text-neutral-900 dark:hover:text-white hover:scale-105 transition-all" href="#components">Components</a>
<a className="text-transition hover:text-neutral-900 dark:hover:text-white hover:scale-105 transition-all" href="#templates">Templates</a>
<a className="text-transition hover:text-neutral-900 dark:hover:text-white hover:scale-105 transition-all" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">

<button aria-label="Toggle theme" className="theme-toggle" onclick="toggleTheme()">
<div className="theme-toggle-thumb">
<span className="iconify text-amber-600 dark:text-indigo-200" data-icon="lucide:sun" data-width="14" style={{display: 'block'}}></span>
</div>
</button>
<a className="hidden md:block text-sm font-medium text-transition hover:text-neutral-900 dark:hover:text-white transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-neutral-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors tracing-beam" href="#">Start Building</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden z-10">
<div className="max-w-6xl mx-auto">

<div className="boxed-container relative p-8 md:p-16">

<div className="extended-border-top animate-extend-h" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-bottom animate-extend-h" style={{transformOrigin: 'center', animationDelay: '0.3s'}}></div>
<div className="extended-border-left animate-extend-v" style={{transformOrigin: 'center', animationDelay: '0.15s'}}></div>
<div className="extended-border-right animate-extend-v" style={{transformOrigin: 'center', animationDelay: '0.45s'}}></div>

<div className="corner-accent corner-tl" style={{top: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-tr" style={{top: '-1px', right: '-1px'}}></div>
<div className="corner-accent corner-bl" style={{bottom: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-br" style={{bottom: '-1px', right: '-1px'}}></div>

<div className="beam-runner" style={{top: '0'}}></div>
<div className="text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ff005e]/20 bg-[#ff005e]/5 text-xs font-medium text-[#ff005e] mb-8 fade-in-up tracing-beam">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff005e] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff005e]"></span>
</span>
              v2.0 is now live
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-neutral-900 dark:text-white tracking-tighter mb-6 leading-[1.1] fade-in-up delay-100">
<span className="text-transition hover:text-[#ff005e] cursor-default">Build</span>
<span className="text-transition hover:text-purple-500 dark:hover:text-purple-400 cursor-default">forms</span>
<span className="text-transition hover:text-blue-500 dark:hover:text-blue-400 cursor-default">like</span>
<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-900 dark:from-white via-neutral-600 dark:via-neutral-200 to-neutral-400 dark:to-neutral-500 animate-shine">
                you design art.
              </span>
</h1>
<p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up delay-200">
              Combine the power of a true visual builder with 40+ customized Shadcn components. Export clean code or publish instantly.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 fade-in-up delay-300">
<button className="h-12 px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-all flex items-center gap-2 group tracing-beam">
                Start for free
                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</button>
<button className="h-12 px-8 rounded-full border border-neutral-300 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all text-neutral-900 dark:text-white font-medium flex items-center gap-2">
<span className="iconify text-neutral-500 dark:text-neutral-400" data-icon="lucide:play-circle"></span>
                Watch demo
              </button>
</div>
</div>
</div>

<div className="mt-20 relative fade-in-up delay-500">
<div className="boxed-container relative">

<div className="extended-border-top animate-extend-h" style={{transformOrigin: 'center', animationDelay: '1s'}}></div>
<div className="extended-border-bottom animate-extend-h" style={{transformOrigin: 'center', animationDelay: '1.3s'}}></div>
<div className="extended-border-left animate-extend-v" style={{transformOrigin: 'center', animationDelay: '1.15s'}}></div>
<div className="extended-border-right animate-extend-v" style={{transformOrigin: 'center', animationDelay: '1.45s'}}></div>

<div className="corner-accent corner-tl" style={{top: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-tr" style={{top: '-1px', right: '-1px'}}></div>
<div className="corner-accent corner-bl" style={{bottom: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-br" style={{bottom: '-1px', right: '-1px'}}></div>
<div className="relative rounded-xl bg-white dark:bg-neutral-900/80 backdrop-blur-xl shadow-2xl overflow-hidden shadow-neutral-200 dark:shadow-[#ff005e]/10 border border-neutral-200 dark:border-transparent">

<div className="h-10 border-b border-neutral-200 dark:border-white/5 flex items-center px-4 gap-2 bg-neutral-50 dark:bg-neutral-900">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="beam-runner" style={{top: '50%', height: '2px'}}></div>
</div>

<div className="flex h-[600px]">

<div className="w-64 border-r border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-neutral-950/50 p-4 hidden md:flex flex-col gap-6 relative">
<div>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4">Input</p>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-100 dark:hover:bg-white/5 cursor-grab active:cursor-grabbing group transition-colors text-transition">
<span className="iconify text-neutral-400 group-hover:text-[#ff005e]" data-icon="lucide:type" data-width="16"></span>
<span className="text-sm group-hover:text-neutral-900 dark:group-hover:text-white">Text Field</span>
</div>
<div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-100 dark:hover:bg-white/5 cursor-grab active:cursor-grabbing group transition-colors text-transition">
<span className="iconify text-neutral-400 group-hover:text-[#ff005e]" data-icon="lucide:mail" data-width="16"></span>
<span className="text-sm group-hover:text-neutral-900 dark:group-hover:text-white">Email</span>
</div>
<div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-100 dark:hover:bg-white/5 cursor-grab active:cursor-grabbing group transition-colors text-transition">
<span className="iconify text-neutral-400 group-hover:text-[#ff005e]" data-icon="lucide:check-square" data-width="16"></span>
<span className="text-sm group-hover:text-neutral-900 dark:group-hover:text-white">Checkbox</span>
</div>
</div>
</div>
<div>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4">Layout</p>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-100 dark:hover:bg-white/5 cursor-grab active:cursor-grabbing group transition-colors text-transition">
<span className="iconify text-neutral-400 group-hover:text-[#ff005e]" data-icon="lucide:columns" data-width="16"></span>
<span className="text-sm group-hover:text-neutral-900 dark:group-hover:text-white">2 Columns</span>
</div>
<div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-100 dark:hover:bg-white/5 cursor-grab active:cursor-grabbing group transition-colors text-transition">
<span className="iconify text-neutral-400 group-hover:text-[#ff005e]" data-icon="lucide:credit-card" data-width="16"></span>
<span className="text-sm group-hover:text-neutral-900 dark:group-hover:text-white">Payment</span>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] p-8 md:p-12 relative flex items-center justify-center overflow-hidden">

<div className="absolute top-6 left-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-lg p-2 shadow-xl flex gap-2 animate-float tracing-beam" style={{animationDelay: '1s'}}>
<div className="w-4 h-4 rounded-full bg-blue-500 cursor-pointer hover:scale-110 transition-transform"></div>
<div className="w-4 h-4 rounded-full bg-purple-500 cursor-pointer hover:scale-110 transition-transform"></div>
<div className="w-4 h-4 rounded-full bg-rose-500 cursor-pointer hover:scale-110 transition-transform"></div>
</div>

<div className="w-full max-w-md bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 shadow-2xl relative boxed-container">

<div className="corner-accent corner-tl" style={{top: '-1px', left: '-1px', width: '12px', height: '12px'}}></div>
<div className="corner-accent corner-tr" style={{top: '-1px', right: '-1px', width: '12px', height: '12px'}}></div>
<div className="corner-accent corner-bl" style={{bottom: '-1px', left: '-1px', width: '12px', height: '12px'}}></div>
<div className="corner-accent corner-br" style={{bottom: '-1px', right: '-1px', width: '12px', height: '12px'}}></div>
<div className="absolute -inset-[1px] border-2 border-[#ff005e]/50 rounded-xl pointer-events-none opacity-50"></div>
<div className="absolute -top-3 -right-3 bg-[#ff005e] text-white text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold">Selected</div>
<div className="space-y-6">
<div className="text-center">
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white tracking-tight text-transition hover:text-[#ff005e]">Create your account</h3>
<p className="text-sm text-neutral-500 mt-1">Join the waitlist for exclusive access</p>
</div>
<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Email Address</label>
<input className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#ff005e] transition-all" placeholder="name@example.com" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Role</label>
<div className="relative">
<select className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-900 dark:text-white appearance-none focus:outline-none focus:ring-1 focus:ring-[#ff005e]">
<option>Developer</option>
<option>Designer</option>
</select>
<span className="iconify absolute right-3 top-2.5 text-neutral-500 pointer-events-none" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Experience</label>
<div className="relative">
<select className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-900 dark:text-white appearance-none focus:outline-none focus:ring-1 focus:ring-[#ff005e]">
<option>Senior</option>
<option>Junior</option>
</select>
<span className="iconify absolute right-3 top-2.5 text-neutral-500 pointer-events-none" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>
<div className="flex items-center justify-between p-3 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50 dark:bg-neutral-900/50">
<div className="text-xs text-neutral-700 dark:text-neutral-300 font-medium">Subscribe to newsletter</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-300 dark:bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#ff005e]"></div>
</label>
</div>
<button className="w-full bg-neutral-900 dark:bg-white text-white dark:text-black font-medium py-2 rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors text-sm">Join Waitlist</button>
</div>
</div>
</div>
</div>

<div className="w-64 border-l border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-neutral-950/50 p-4 hidden lg:flex flex-col gap-6">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold text-neutral-900 dark:text-white text-transition hover:text-[#ff005e]">Properties</span>
<span className="iconify text-neutral-500" data-icon="lucide:settings-2" data-width="14"></span>
</div>
<div className="space-y-4">
<div className="space-y-2">
<label className="text-xs text-neutral-500">Border Radius</label>
<div className="flex items-center gap-2">
<input className="w-full h-1 rounded-lg appearance-none cursor-pointer" type="range"/>
<span className="text-xs text-neutral-700 dark:text-neutral-300 font-mono">8px</span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500">Accent Color</label>
<div className="grid grid-cols-5 gap-2">
<button className="w-6 h-6 rounded-full bg-[#ff005e] ring-2 ring-neutral-900 dark:ring-white ring-offset-2 ring-offset-neutral-50 dark:ring-offset-neutral-950"></button>
<button className="w-6 h-6 rounded-full bg-emerald-500 hover:opacity-80"></button>
<button className="w-6 h-6 rounded-full bg-amber-500 hover:opacity-80"></button>
<button className="w-6 h-6 rounded-full bg-rose-500 hover:opacity-80"></button>
<button className="w-6 h-6 rounded-full bg-neutral-500 hover:opacity-80"></button>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500">Typography</label>
<div className="flex items-center justify-between p-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded">
<span className="text-xs text-neutral-900 dark:text-white">Inter</span>
<span className="iconify text-neutral-500" data-icon="lucide:chevron-down" data-width="12"></span>
</div>
</div>
</div>
<div className="mt-auto border-t border-neutral-200 dark:border-white/5 pt-4">
<div className="flex items-center justify-between text-xs text-neutral-500">
<span>Export as</span>
</div>
<div className="flex gap-2 mt-2">
<button className="flex-1 py-1.5 bg-neutral-200 dark:bg-neutral-800 text-xs text-neutral-900 dark:text-white rounded border border-neutral-300 dark:border-neutral-700">React</button>
<button className="flex-1 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs text-neutral-500 rounded transition-colors">Vue</button>
<button className="flex-1 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs text-neutral-500 rounded transition-colors">HTML</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 -right-10 hidden lg:block p-4 bg-white dark:bg-neutral-900/90 backdrop-blur border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-2xl animate-float tracing-beam" style={{animationDelay: '2s'}}>
<div className="flex gap-1.5 mb-3">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
</div>
<code className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
              &lt;FormLayout<br/>
                theme="dark"<br/>
                radius="lg"<br/>
              /&gt;
            </code>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-neutral-200 dark:border-white/5 bg-neutral-100/50 dark:bg-neutral-900/20 overflow-hidden relative z-10" id="components">
<div className="boxed-container max-w-7xl mx-auto relative">
<div className="extended-border-top animate-extend-h" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-bottom animate-extend-h" style={{transformOrigin: 'center'}}></div>
<p className="text-center text-sm text-neutral-500 mb-8 uppercase tracking-widest font-medium pt-8 text-transition hover:text-neutral-900 dark:hover:text-white">40+ Production Ready Components</p>
<div className="relative w-full overflow-hidden pb-8">
<div className="absolute z-10 left-0 top-0 h-full w-24 bg-gradient-to-r from-neutral-100 dark:from-neutral-950 to-transparent"></div>
<div className="absolute z-10 right-0 top-0 h-full w-24 bg-gradient-to-l from-neutral-100 dark:from-neutral-950 to-transparent"></div>
<div className="flex gap-4 w-[200%] animate-[shine_20s_linear_infinite]">
<div className="flex gap-4 items-center">
<div className="px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-md text-sm text-neutral-900 dark:text-white flex items-center gap-2 text-transition hover:border-[#ff005e]/50">
<span className="iconify text-[#ff005e]" data-icon="lucide:calendar"></span>
                Date Picker
              </div>
<div className="px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-md text-sm text-neutral-900 dark:text-white flex items-center gap-2 text-transition hover:border-rose-400/50">
<span className="iconify text-rose-400" data-icon="lucide:toggle-left"></span>
                Switch
              </div>
<div className="px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-md text-sm text-neutral-900 dark:text-white flex items-center gap-2 text-transition hover:border-emerald-400/50">
<span className="iconify text-emerald-400" data-icon="lucide:check-circle-2"></span>
                Toast
              </div>
<div className="px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-md text-sm text-neutral-900 dark:text-white flex items-center gap-2 text-transition hover:border-amber-400/50">
<span className="iconify text-amber-400" data-icon="lucide:sliders-horizontal"></span>
                Slider
              </div>
<div className="px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-md text-sm text-neutral-900 dark:text-white flex items-center gap-2 text-transition hover:border-blue-400/50">
<span className="iconify text-blue-400" data-icon="lucide:menu"></span>
                Navigation
              </div>
<div className="px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-md text-sm text-neutral-900 dark:text-white flex items-center gap-2 text-transition hover:border-purple-400/50">
<span className="iconify text-purple-400" data-icon="lucide:table"></span>
                Data Table
              </div>
<div className="px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-md text-sm text-neutral-900 dark:text-white flex items-center gap-2 text-transition hover:border-[#ff005e]/50">
<span className="iconify text-[#ff005e]" data-icon="lucide:upload-cloud"></span>
                File Upload
              </div>
<div className="px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-md text-sm text-neutral-900 dark:text-white flex items-center gap-2 text-transition hover:border-rose-400/50">
<span className="iconify text-rose-400" data-icon="lucide:credit-card"></span>
                Stripe Element
              </div>
<div className="px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-md text-sm text-neutral-900 dark:text-white flex items-center gap-2 text-transition hover:border-emerald-400/50">
<span className="iconify text-emerald-400" data-icon="lucide:layout-template"></span>
                Cards
              </div>
<div className="px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-md text-sm text-neutral-900 dark:text-white flex items-center gap-2 text-transition hover:border-amber-400/50">
<span className="iconify text-amber-400" data-icon="lucide:more-horizontal"></span>
                Dropdown
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto relative z-10" id="features">
<div className="boxed-container p-8 md:p-12 mb-16">
<div className="extended-border-top animate-extend-h" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-bottom animate-extend-h" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-left animate-extend-v" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-right animate-extend-v" style={{transformOrigin: 'center'}}></div>
<div className="corner-accent corner-tl" style={{top: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-tr" style={{top: '-1px', right: '-1px'}}></div>
<div className="corner-accent corner-bl" style={{bottom: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-br" style={{bottom: '-1px', right: '-1px'}}></div>
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-4">
<span className="text-transition hover:text-[#ff005e]">Everything</span>
<span className="text-transition hover:text-purple-500 dark:hover:text-purple-400">you</span>
<span className="text-transition hover:text-blue-500 dark:hover:text-blue-400">need</span>
<span className="text-transition hover:text-emerald-500 dark:hover:text-emerald-400">to</span>
<span className="text-transition hover:text-amber-500 dark:hover:text-amber-400">build.</span>
</h2>
<p className="text-neutral-600 dark:text-neutral-400">Designed for developers who want speed without sacrificing control.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 row-span-1 md:row-span-2 group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors card-glow boxed-container">
<div className="corner-accent corner-tl" style={{top: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-tr" style={{top: '-1px', right: '-1px'}}></div>
<div className="corner-accent corner-bl" style={{bottom: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-br" style={{bottom: '-1px', right: '-1px'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-neutral-950/80 z-10"></div>
<div className="p-8 relative z-20 h-full flex flex-col justify-end">
<div className="mb-4 p-3 bg-[#ff005e]/10 w-fit rounded-lg border border-[#ff005e]/20 text-[#ff005e]">
<span className="iconify" data-icon="lucide:palette" data-width="24"></span>
</div>
<h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2 text-transition hover:text-[#ff005e]">Shadcn UI Native</h3>
<p className="text-neutral-600 dark:text-neutral-400">Every component is built on top of Shadcn/Radix primitives. Fully accessible, keyboard navigable, and customizable via Tailwind classes directly in the editor.</p>
</div>
<div className="absolute -right-20 -top-20 w-96 h-96 bg-[#ff005e]/10 rounded-full blur-3xl group-hover:bg-[#ff005e]/20 transition-all duration-700"></div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900/50 p-8 hover:border-neutral-300 dark:hover:border-white/20 transition-colors card-glow boxed-container tracing-beam">
<div className="h-full flex flex-col">
<span className="iconify text-emerald-500 dark:text-emerald-400 mb-6" data-icon="lucide:code-2" data-width="32"></span>
<h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 text-transition hover:text-emerald-500 dark:hover:text-emerald-400">Clean Code Export</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400">Copy paste React/Tailwind code directly to your IDE. No runtime dependency.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900/50 p-8 hover:border-neutral-300 dark:hover:border-white/20 transition-colors card-glow boxed-container tracing-beam">
<div className="h-full flex flex-col">
<span className="iconify text-rose-500 dark:text-rose-400 mb-6" data-icon="lucide:zap" data-width="32"></span>
<h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 text-transition hover:text-rose-500 dark:hover:text-rose-400">Logic Builder</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400">Add conditional rendering and form validation rules without writing regex.</p>
</div>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900/50 p-8 flex flex-col md:flex-row items-center gap-8 card-glow boxed-container">
<div className="corner-accent corner-tl" style={{top: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-tr" style={{top: '-1px', right: '-1px'}}></div>
<div className="corner-accent corner-bl" style={{bottom: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-br" style={{bottom: '-1px', right: '-1px'}}></div>
<div className="flex-1">
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2 text-transition hover:text-blue-500 dark:hover:text-blue-400">Theming Engine</h3>
<p className="text-neutral-600 dark:text-neutral-400 mb-4">Switch between styles instantly. Match your brand colors with a single click using CSS variables.</p>
<div className="flex gap-2">
<div className="w-6 h-6 rounded-full bg-blue-600 border border-neutral-300 dark:border-white/20"></div>
<div className="w-6 h-6 rounded-full bg-orange-600 border border-neutral-300 dark:border-white/20"></div>
<div className="w-6 h-6 rounded-full bg-green-600 border border-neutral-300 dark:border-white/20"></div>
</div>
</div>
<div className="w-full md:w-1/2 h-32 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 relative">
<div className="space-y-2">
<div className="h-2 w-1/3 bg-neutral-300 dark:bg-neutral-800 rounded"></div>
<div className="h-8 w-full bg-blue-600/20 border border-blue-600/50 rounded flex items-center px-3 text-xs text-blue-700 dark:text-blue-200">Primary Color</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900/50 p-8 hover:border-neutral-300 dark:hover:border-white/20 transition-colors card-glow boxed-container tracing-beam">
<div className="h-full flex flex-col">
<span className="iconify text-amber-500 dark:text-amber-400 mb-6" data-icon="lucide:webhook" data-width="32"></span>
<h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 text-transition hover:text-amber-500 dark:hover:text-amber-400">Integrations</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400">Connect to Zapier, Supabase, Firebase or your own API endpoint.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-100/50 dark:bg-neutral-900/30 border-y border-neutral-200 dark:border-white/5 relative z-10 overflow-hidden">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="gradient-swirl gradient-swirl-2" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="boxed-container p-8 mb-16 text-center">
<div className="extended-border-top animate-extend-h" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-bottom animate-extend-h" style={{transformOrigin: 'center'}}></div>
<div className="corner-accent corner-tl" style={{top: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-tr" style={{top: '-1px', right: '-1px'}}></div>
<div className="corner-accent corner-bl" style={{bottom: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-br" style={{bottom: '-1px', right: '-1px'}}></div>
<div className="beam-runner" style={{top: '0'}}></div>
<h2 className="text-3xl font-semibold text-neutral-900 dark:text-white tracking-tight">
<span className="text-transition hover:text-[#ff005e]">From</span>
<span className="text-transition hover:text-purple-500 dark:hover:text-purple-400">idea</span>
<span className="text-transition hover:text-blue-500 dark:hover:text-blue-400">to</span>
<span className="text-transition hover:text-emerald-500 dark:hover:text-emerald-400">production</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-[#ff005e]/50 to-transparent border-t border-dashed border-neutral-300 dark:border-neutral-700 overflow-hidden">
<div className="beam-runner"></div>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-6 z-10 shadow-lg shadow-neutral-200/50 dark:shadow-black/50 boxed-container tracing-beam">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:pen-tool" data-width="40"></span>
</div>
<h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-2 text-transition hover:text-[#ff005e]">1. Design Visually</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 px-4">Drag and drop components. Adjust padding, colors, and typography in the visual editor.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-6 z-10 shadow-lg shadow-neutral-200/50 dark:shadow-black/50 boxed-container tracing-beam">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:settings" data-width="40"></span>
</div>
<h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-2 text-transition hover:text-purple-500 dark:hover:text-purple-400">2. Customize Logic</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 px-4">Set up validation rules, error messages, and conditional fields without code.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-6 z-10 shadow-lg shadow-neutral-200/50 dark:shadow-black/50 boxed-container tracing-beam">
<span className="iconify text-neutral-900 dark:text-white" data-icon="lucide:code-2" data-width="40"></span>
</div>
<h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-2 text-transition hover:text-emerald-500 dark:hover:text-emerald-400">3. Export Code</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 px-4">Get a pure React/Vue component or a raw HTML/JS snippet ready for deployment.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto relative z-10" id="templates">
<div className="boxed-container p-8 mb-12">
<div className="extended-border-top animate-extend-h" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-bottom animate-extend-h" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-left animate-extend-v" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-right animate-extend-v" style={{transformOrigin: 'center'}}></div>
<div className="corner-accent corner-tl" style={{top: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-tr" style={{top: '-1px', right: '-1px'}}></div>
<div className="corner-accent corner-bl" style={{bottom: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-br" style={{bottom: '-1px', right: '-1px'}}></div>
<div className="flex justify-between items-end">
<div>
<h2 className="text-3xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-2 text-transition hover:text-[#ff005e]">Start with a template</h2>
<p className="text-neutral-600 dark:text-neutral-400">Don't start from scratch. Choose from 50+ pre-built layouts.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-neutral-900 dark:text-white hover:text-[#ff005e] transition-colors text-transition" href="#">
            View all templates
            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group border border-neutral-200 dark:border-white/10 rounded-xl bg-white dark:bg-neutral-900/30 overflow-hidden hover:border-[#ff005e]/30 transition-all cursor-pointer card-glow boxed-container tracing-beam">
<div className="h-48 bg-neutral-100 dark:bg-neutral-950 relative flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
<div className="w-full h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded shadow-sm p-4 space-y-3 opacity-80">
<div className="w-1/2 h-2 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
<div className="w-full h-8 bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700"></div>
<div className="w-full h-8 bg-[#ff005e]/20 rounded"></div>
</div>
</div>
<div className="p-5 border-t border-neutral-200 dark:border-white/10">
<h4 className="text-neutral-900 dark:text-white font-medium mb-1 text-transition hover:text-[#ff005e]">SaaS Sign Up</h4>
<p className="text-xs text-neutral-500">Authentication form with social login buttons.</p>
</div>
</div>

<div className="group border border-neutral-200 dark:border-white/10 rounded-xl bg-white dark:bg-neutral-900/30 overflow-hidden hover:border-purple-400/30 transition-all cursor-pointer card-glow boxed-container tracing-beam">
<div className="h-48 bg-neutral-100 dark:bg-neutral-950 relative flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
<div className="w-full h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded shadow-sm p-4 space-y-3 opacity-80">
<div className="w-2/3 h-2 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
<div className="flex gap-2">
<div className="w-4 h-4 rounded-full border border-neutral-300 dark:border-neutral-600"></div>
<div className="w-4 h-4 rounded-full border border-neutral-300 dark:border-neutral-600"></div>
<div className="w-4 h-4 rounded-full border border-neutral-300 dark:border-neutral-600"></div>
</div>
<div className="w-full h-16 bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700 mt-2"></div>
</div>
</div>
<div className="p-5 border-t border-neutral-200 dark:border-white/10">
<h4 className="text-neutral-900 dark:text-white font-medium mb-1 text-transition hover:text-purple-500 dark:hover:text-purple-400">Product Feedback</h4>
<p className="text-xs text-neutral-500">NPS score and long text area inputs.</p>
</div>
</div>

<div className="group border border-neutral-200 dark:border-white/10 rounded-xl bg-white dark:bg-neutral-900/30 overflow-hidden hover:border-emerald-400/30 transition-all cursor-pointer card-glow boxed-container tracing-beam">
<div className="h-48 bg-neutral-100 dark:bg-neutral-950 relative flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
<div className="w-full h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded shadow-sm p-4 space-y-3 opacity-80">
<div className="flex justify-between">
<div className="w-1/3 h-2 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
<div className="w-8 h-4 bg-emerald-500/20 rounded-full"></div>
</div>
<div className="w-full h-8 bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700"></div>
<div className="w-full h-8 bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700"></div>
</div>
</div>
<div className="p-5 border-t border-neutral-200 dark:border-white/10">
<h4 className="text-neutral-900 dark:text-white font-medium mb-1 text-transition hover:text-emerald-500 dark:hover:text-emerald-400">Checkout &amp; Payment</h4>
<p className="text-xs text-neutral-500">Multi-step form with credit card formatting.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto relative z-10" id="pricing">
<div className="boxed-container p-8 mb-16 text-center">
<div className="extended-border-top animate-extend-h" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-bottom animate-extend-h" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-left animate-extend-v" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-right animate-extend-v" style={{transformOrigin: 'center'}}></div>
<div className="corner-accent corner-tl" style={{top: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-tr" style={{top: '-1px', right: '-1px'}}></div>
<div className="corner-accent corner-bl" style={{bottom: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-br" style={{bottom: '-1px', right: '-1px'}}></div>
<div className="beam-runner" style={{top: '0'}}></div>
<h2 className="text-3xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-4 text-transition hover:text-[#ff005e]">Simple Pricing</h2>
<p className="text-neutral-600 dark:text-neutral-400">Free for hobbyists, affordable for pros.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900/20 flex flex-col boxed-container tracing-beam">
<div className="corner-accent corner-tl" style={{top: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-br" style={{bottom: '-1px', right: '-1px'}}></div>
<div className="mb-4">
<h3 className="text-lg font-medium text-neutral-900 dark:text-white text-transition hover:text-neutral-600 dark:hover:text-neutral-300">Hobby</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight">$0</span>
<span className="text-neutral-500">/mo</span>
</div>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">Perfect for side projects and learning.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
<span className="iconify text-neutral-400 dark:text-neutral-500" data-icon="lucide:check"></span>
              3 Forms
            </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
<span className="iconify text-neutral-400 dark:text-neutral-500" data-icon="lucide:check"></span>
              Basic Components
            </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
<span className="iconify text-neutral-400 dark:text-neutral-500" data-icon="lucide:check"></span>
              HTML Export only
            </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 text-neutral-900 dark:text-white font-medium hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors text-sm">Get Started</button>
</div>

<div className="relative p-8 rounded-2xl border-2 border-[#ff005e]/50 bg-white dark:bg-neutral-900/80 flex flex-col shadow-2xl shadow-[#ff005e]/10 scale-105 z-10 gradient-border animate-border-glow boxed-container">
<div className="corner-accent corner-tl" style={{top: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-tr" style={{top: '-1px', right: '-1px'}}></div>
<div className="corner-accent corner-bl" style={{bottom: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-br" style={{bottom: '-1px', right: '-1px'}}></div>
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#ff005e] to-rose-500 text-white text-[10px] uppercase font-bold tracking-widest rounded-full">Most Popular</div>
<div className="mb-4">
<h3 className="text-lg font-medium text-neutral-900 dark:text-white text-transition hover:text-[#ff005e]">Pro</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight">$19</span>
<span className="text-neutral-500">/mo</span>
</div>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">For developers shipping products.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-900 dark:text-white">
<span className="iconify text-[#ff005e]" data-icon="lucide:check"></span>
              Unlimited Forms
            </li>
<li className="flex items-center gap-3 text-sm text-neutral-900 dark:text-white">
<span className="iconify text-[#ff005e]" data-icon="lucide:check"></span>
              All 40+ Components
            </li>
<li className="flex items-center gap-3 text-sm text-neutral-900 dark:text-white">
<span className="iconify text-[#ff005e]" data-icon="lucide:check"></span>
              React/Vue/HTML Export
            </li>
<li className="flex items-center gap-3 text-sm text-neutral-900 dark:text-white">
<span className="iconify text-[#ff005e]" data-icon="lucide:check"></span>
              Advanced Theming
            </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors text-sm">Start Free Trial</button>
</div>

<div className="p-8 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900/20 flex flex-col boxed-container tracing-beam">
<div className="corner-accent corner-tl" style={{top: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-br" style={{bottom: '-1px', right: '-1px'}}></div>
<div className="mb-4">
<h3 className="text-lg font-medium text-neutral-900 dark:text-white text-transition hover:text-purple-500 dark:hover:text-purple-400">Team</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight">$49</span>
<span className="text-neutral-500">/mo</span>
</div>
</div>
<p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">Collaboration for agencies and teams.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
<span className="iconify text-neutral-400 dark:text-neutral-500" data-icon="lucide:check"></span>
              Everything in Pro
            </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
<span className="iconify text-neutral-400 dark:text-neutral-500" data-icon="lucide:check"></span>
              5 Team Members
            </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
<span className="iconify text-neutral-400 dark:text-neutral-500" data-icon="lucide:check"></span>
              Shared Library
            </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
<span className="iconify text-neutral-400 dark:text-neutral-500" data-icon="lucide:check"></span>
              Priority Support
            </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 text-neutral-900 dark:text-white font-medium hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors text-sm">Contact Sales</button>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 dark:border-white/5 bg-white dark:bg-neutral-950 pt-16 pb-8 px-6 relative z-10 transition-colors duration-300">
<div className="max-w-7xl mx-auto">
<div className="boxed-container p-8 mb-8">
<div className="extended-border-top animate-extend-h" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-bottom animate-extend-h" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-left animate-extend-v" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-right animate-extend-v" style={{transformOrigin: 'center'}}></div>
<div className="corner-accent corner-tl" style={{top: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-tr" style={{top: '-1px', right: '-1px'}}></div>
<div className="corner-accent corner-bl" style={{bottom: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-br" style={{bottom: '-1px', right: '-1px'}}></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 text-neutral-900 dark:text-white font-medium tracking-tight mb-4 text-transition hover:text-[#ff005e]">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
<span>FORMFLOW</span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed">The modern visual builder for forms. Designed for the future of web development.</p>
</div>
<div>
<h4 className="text-neutral-900 dark:text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="text-transition hover:text-[#ff005e]" href="#">Components</a></li>
<li><a className="text-transition hover:text-neutral-900 dark:hover:text-white" href="#">Templates</a></li>
<li><a className="text-transition hover:text-neutral-900 dark:hover:text-white" href="#">Documentation</a></li>
<li><a className="text-transition hover:text-neutral-900 dark:hover:text-white" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-neutral-900 dark:text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="text-transition hover:text-neutral-900 dark:hover:text-white" href="#">About</a></li>
<li><a className="text-transition hover:text-neutral-900 dark:hover:text-white" href="#">Blog</a></li>
<li><a className="text-transition hover:text-neutral-900 dark:hover:text-white" href="#">Careers</a></li>
<li><a className="text-transition hover:text-neutral-900 dark:hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-neutral-900 dark:text-white font-medium mb-4 text-sm">Stay Updated</h4>
<div className="flex gap-2">
<input className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white text-sm rounded px-3 py-2 outline-none focus:border-[#ff005e] w-full transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-neutral-900 dark:bg-white text-white dark:text-black px-3 py-2 rounded text-sm font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors tracing-beam">
<span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
<p>© 2024 FormFlow Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-transition hover:text-[#ff005e]" href="#">Privacy</a>
<a className="text-transition hover:text-neutral-900 dark:hover:text-neutral-400" href="#">Terms</a>
<a className="text-transition hover:text-neutral-900 dark:hover:text-neutral-400" href="#">Twitter</a>
<a className="text-transition hover:text-neutral-900 dark:hover:text-neutral-400" href="#">GitHub</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
