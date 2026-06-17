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
fontFamily: {
sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
},
colors: {
primary: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
900: '#1e3a8a',
}
}
}
}
}



        // Set current year
        document.getElementById('year').textContent = new Date().getFullYear();
        
        // Mobile Menu Toggle Logic
        const btn = document.querySelector('[data-collapse-toggle]');
        const menu = document.getElementById('navbar-sticky');
        
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            const expanded = menu.classList.contains('hidden') ? 'false' : 'true';
            btn.setAttribute('aria-expanded', expanded);
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<div className="w-8 h-8 bg-primary-900 text-white flex items-center justify-center rounded-lg">
<span className="font-medium text-lg leading-none tracking-tight">V</span>
</div>
<span className="self-center text-lg font-medium whitespace-nowrap text-slate-900 tracking-tight">Vijay Knowledge Centre</span>
</a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="hidden w-full md:block md:w-auto" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a aria-current="page" className="block py-2 px-3 text-slate-900 rounded hover:text-primary-600 md:p-0" href="#">Home</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:text-primary-600 md:p-0 transition-colors" href="#education">Education</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:text-primary-600 md:p-0 transition-colors" href="#tech">Technology</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:text-primary-600 md:p-0 transition-colors" href="#articles">Articles</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:text-primary-600 md:p-0 transition-colors" href="#resources">Resources</a>
</li>
<li>
<a className="block py-2 px-3 text-white bg-primary-900 rounded-md md:px-4 md:py-1.5 hover:bg-primary-700 transition-colors text-sm font-medium" href="#contact">Contact</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none opacity-40">
<div className="absolute top-20 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
<div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
</div>
<div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
</span>
                Welcome to my digital garden
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Learn. Build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-500">Grow.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Practical knowledge on Technology, Education, and Life — curated by <span className="text-slate-900 font-medium">Vijay Pare</span>. Helping students and professionals bridge the gap between theory and execution.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-primary-900 rounded-lg hover:bg-primary-800 transition-all shadow-lg shadow-primary-900/10 hover:shadow-primary-900/20" href="#articles">
                    Explore Articles
                    <iconify-icon className="ml-2" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all" href="#education">
                    Start Learning
                </a>
</div>

<div className="mt-16 md:mt-24 relative max-w-5xl mx-auto">
<div className="relative bg-white border border-slate-200 rounded-xl shadow-2xl shadow-slate-200/50 overflow-hidden aspect-[16/9] md:aspect-[21/9] flex items-center justify-center bg-slate-50/50">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl px-8">
<div className="p-6 bg-white rounded-lg border border-slate-100 shadow-sm">
<iconify-icon className="text-primary-600 mb-3 text-3xl" icon="solar:code-circle-linear"></iconify-icon>
<div className="h-2 w-24 bg-slate-100 rounded mb-2"></div>
<div className="h-2 w-full bg-slate-50 rounded"></div>
</div>
<div className="p-6 bg-white rounded-lg border border-slate-100 shadow-sm mt-8 md:mt-0">
<iconify-icon className="text-primary-600 mb-3 text-3xl" icon="solar:server-square-linear"></iconify-icon>
<div className="h-2 w-24 bg-slate-100 rounded mb-2"></div>
<div className="h-2 w-full bg-slate-50 rounded"></div>
</div>
<div className="p-6 bg-white rounded-lg border border-slate-100 shadow-sm hidden md:block">
<iconify-icon className="text-primary-600 mb-3 text-3xl" icon="solar:graph-up-linear"></iconify-icon>
<div className="h-2 w-24 bg-slate-100 rounded mb-2"></div>
<div className="h-2 w-full bg-slate-50 rounded"></div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 text-center">
<iconify-icon className="text-4xl text-primary-900 mb-6" icon="solar:user-circle-linear"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Hi, I'm Vijay Pare.</h2>
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                I am a <span className="text-slate-900 font-medium">DevOps Engineer</span> and lifelong learner committed to simplifying complex concepts. My mission is to share practical knowledge, resources, and life lessons to help you accelerate your career and personal growth.
            </p>
<button className="text-primary-700 font-medium hover:text-primary-900 inline-flex items-center group">
                Know More About Me 
                <iconify-icon className="ml-1 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100" id="education">
<div className="max-w-7xl mx-auto px-4">
<div className="mb-12 md:text-center max-w-2xl mx-auto">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-3">Explore Categories</h2>
<p className="text-slate-500">Curated paths to help you master new skills.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group block p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-lg bg-blue-50 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:square-academic-cap-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Education</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Academic guidance, study techniques, and learning roadmaps.</p>
<span className="text-xs font-medium text-primary-600 flex items-center">Browse <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</a>

<a className="group block p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Technology</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Deep dives into DevOps, Cloud Computing, and Software Development.</p>
<span className="text-xs font-medium text-indigo-600 flex items-center">Browse <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</a>

<a className="group block p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Life Lessons</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Productivity hacks, mindset shifts, and personal growth stories.</p>
<span className="text-xs font-medium text-emerald-600 flex items-center">Browse <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</a>

<a className="group block p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Resources</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Free tools, cheat sheets, and downloadable assets.</p>
<span className="text-xs font-medium text-amber-600 flex items-center">Browse <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white overflow-hidden" id="tech">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<span className="text-primary-600 font-medium text-sm tracking-wide uppercase mb-2 block">Focus Area</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Master Modern Infrastructure &amp; DevOps</h2>
<p className="text-lg text-slate-600 mb-8">
                        The tech landscape is shifting. I focus on practical, industry-standard tools that define modern CI/CD pipelines and cloud architecture.
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
<iconify-icon icon="logos:linux-tux" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Linux Administration</span>
</div>
<div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
<iconify-icon icon="logos:aws" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">AWS Cloud</span>
</div>
<div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
<iconify-icon icon="logos:docker-icon" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Docker</span>
</div>
<div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
<iconify-icon icon="logos:kubernetes" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Kubernetes</span>
</div>
<div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
<iconify-icon className="text-slate-800" icon="simple-icons:githubactions" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">CI/CD Automation</span>
</div>
<div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
<iconify-icon className="text-purple-600" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">AI Tools</span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-primary-100 to-indigo-100 rounded-xl blur-2xl opacity-50 z-0"></div>
<div className="relative z-10 bg-slate-900 rounded-xl p-8 shadow-2xl text-slate-300 font-mono text-sm leading-relaxed border border-slate-700">
<div className="flex items-center space-x-2 mb-4 border-b border-slate-700 pb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
<span className="ml-2 text-xs text-slate-500">deploy.sh</span>
</div>
<p><span className="text-purple-400">const</span> vijayPare = {</p>
<p className="pl-4">role: <span className="text-green-400">"DevOps Engineer"</span>,</p>
<p className="pl-4">passion: <span className="text-green-400">"Teaching"</span>,</p>
<p className="pl-4">stack: [</p>
<p className="pl-8"><span className="text-green-400">"AWS"</span>, <span className="text-green-400">"Terraform"</span>, <span className="text-green-400">"Python"</span></p>
<p className="pl-4">],</p>
<p className="pl-4">mission: <span className="text-blue-400">async function</span>() {</p>
<p className="pl-8"><span className="text-purple-400">return</span> <span className="text-green-400">"Help others build &amp; grow."</span>;</p>
<p className="pl-4">}</p>
<p>};</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-50" id="articles">
<div className="max-w-7xl mx-auto px-4">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-2">Latest Writings</h2>
<p className="text-slate-500">Insights on tech and growth.</p>
</div>
<a className="hidden md:inline-flex items-center text-sm font-medium text-primary-700 hover:text-primary-900" href="#">
                    View All Posts
                    <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
<div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-300 text-6xl" icon="solar:server-path-linear"></iconify-icon>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center space-x-2 text-xs text-slate-500 mb-3">
<span className="bg-primary-50 text-primary-700 px-2 py-0.5 rounded font-medium">DevOps</span>
<span>•</span>
<span>5 min read</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Getting Started with Kubernetes: A Beginner's Guide</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-3 flex-1">Understand the architecture of Kubernetes clusters and how to deploy your first containerized application without getting overwhelmed.</p>
<a className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-800 mt-auto" href="#">
                            Read More
                        </a>
</div>
</article>

<article className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
<div className="h-48 bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center">
<iconify-icon className="text-indigo-200 text-6xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center space-x-2 text-xs text-slate-500 mb-3">
<span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-medium">Productivity</span>
<span>•</span>
<span>3 min read</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">The 2-Minute Rule for Engineers</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-3 flex-1">Stop procrastination in its tracks. How small habits can lead to massive output in your coding journey and personal life.</p>
<a className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-800 mt-auto" href="#">
                            Read More
                        </a>
</div>
</article>

<article className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
<div className="h-48 bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
<iconify-icon className="text-emerald-200 text-6xl" icon="solar:cloud-storage-linear"></iconify-icon>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center space-x-2 text-xs text-slate-500 mb-3">
<span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-medium">AWS</span>
<span>•</span>
<span>7 min read</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Securing your AWS S3 Buckets</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-3 flex-1">Best practices for IAM policies, encryption, and public access blocks to ensure your data stays private and secure.</p>
<a className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-800 mt-auto" href="#">
                            Read More
                        </a>
</div>
</article>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-block px-6 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50" href="#">View All Posts</a>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-slate-100" id="resources">
<div className="max-w-5xl mx-auto px-4">
<div className="bg-primary-900 rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">

<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary-800 rounded-full opacity-50 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
<div className="relative z-10 text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-3">Free Learning Resources</h2>
<p className="text-primary-100 max-w-lg">Get access to my personal notes, cheat sheets for Linux &amp; Docker, and roadmap guides.</p>
</div>
<div className="relative z-10">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-900 bg-white rounded-lg hover:bg-slate-100 transition-colors shadow-lg" href="#">
<iconify-icon className="mr-2" icon="solar:download-linear"></iconify-icon>
                        Access Free Resources
                    </a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white">
<div className="max-w-md mx-auto px-4 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-6">
<iconify-icon className="text-slate-500 text-2xl" icon="solar:letter-linear"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Stay Updated</h2>
<p className="text-slate-500 mb-8 text-sm">Join the community. Get practical knowledge delivered directly to your inbox. No spam, ever.</p>
<form className="flex flex-col gap-3">
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 transition-all placeholder:text-slate-400" placeholder="Enter your email address" required="" type="email"/>
<button className="w-full px-4 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<section className="py-16 bg-slate-50 border-t border-slate-100" id="contact">
<div className="max-w-4xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-3">Get in Touch</h2>
<p className="text-slate-500">Have a question or want to collaborate? Send me a message.</p>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div>
<h3 className="text-lg font-medium text-slate-900 mb-4">Contact Info</h3>
<ul className="space-y-4">
<li className="flex items-center text-slate-600 text-sm">
<iconify-icon className="mr-3 text-lg text-primary-600" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-primary-700" href="mailto:vjaypare@gmail.com">vjaypare@gmail.com</a>
</li>
<li className="flex items-center text-slate-600 text-sm">
<iconify-icon className="mr-3 text-lg text-primary-600" icon="solar:map-point-linear"></iconify-icon>
<span>Based in India</span>
</li>
</ul>
<h3 className="text-lg font-medium text-slate-900 mt-8 mb-4">Follow Me</h3>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-100" href="#">
<iconify-icon icon="ri:linkedin-fill" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-gray-100 hover:text-black transition-colors border border-slate-100" href="#">
<iconify-icon icon="ri:github-fill" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors border border-slate-100" href="#">
<iconify-icon icon="ri:youtube-fill" width="20"></iconify-icon>
</a>
</div>
</div>
<form className="flex flex-col gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="name">Name</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:bg-white transition-all" id="name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="email">Email</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:bg-white transition-all" id="email" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="message">Message</label>
<textarea className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:bg-white transition-all" id="message" rows="4"></textarea>
</div>
<button className="self-start px-6 py-2.5 bg-primary-900 text-white text-sm font-medium rounded-lg hover:bg-primary-800 transition-colors" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-10">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-lg font-medium tracking-tight text-slate-900 block mb-1">Vijay Knowledge Centre</span>
<p className="text-xs text-slate-500">© <span id="year">2023</span> Vijay Pare. All rights reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
<a className="hover:text-primary-700 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-primary-700 transition-colors" href="#">Affiliate Disclosure</a>
<a className="hover:text-primary-700 transition-colors" href="#contact">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
