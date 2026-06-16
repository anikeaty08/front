import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 mx-auto max-w-[90rem] justify-between px-8 opacity-[0.08] hidden lg:flex">
<div className="w-px h-full bg-slate-100"></div>
<div className="w-px h-full bg-slate-100"></div>
<div className="w-px h-full bg-slate-100"></div>
<div className="w-px h-full bg-slate-100"></div>
</div>

<div className="w-full lg:max-w-7xl z-10 mx-auto relative lg:p-8 lg:space-y-6">

<header className="overflow-hidden min-h-[90vh] flex flex-col text-neutral-900 bg-[#FACC15] rounded-none lg:rounded-[2.5rem] relative">

<nav className="flex z-20 border-black/10 border-b lg:border py-6 px-6 lg:px-8 relative items-center justify-between [animation:animationIn_0.8s_ease-out_0s_both] animate-on-scroll">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="solar:shield-check-linear" width="28"></iconify-icon>
<span className="text-xl font-semibold tracking-tight font-sans">CodeShield</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-medium text-neutral-800">
<a className="hover:text-black transition-colors font-sans" href="#">Features</a>
<a className="hover:text-black transition-colors font-sans" href="#">Integrations</a>
<a className="hover:text-black transition-colors font-sans" href="#">Documentation</a>
<a className="hover:text-black transition-colors font-sans" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
<iconify-icon icon="simple-icons:github" width="20"></iconify-icon>
<span className="text-base font-medium font-sans">Star us</span>
</div>
</div>
</nav>

<div className="flex-1 grid grid-cols-1 lg:grid-cols-2 z-20 pt-12 pb-24 px-6 lg:px-8 relative gap-x-12 gap-y-12 items-center">
<div className="space-y-8 max-w-xl">
<h1 className="lg:text-7xl leading-[1.1] text-5xl tracking-tight font-dm-sans font-light [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
                        Secure your source code instantly.
                    </h1>
<p className="text-xl text-neutral-800 max-w-md leading-relaxed font-sans [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
                        Advanced code security for the modern stack. Scan, detect, and fix vulnerabilities in your pipeline with zero friction.
                    </p>
<div className="flex flex-wrap gap-4 pt-4 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<button className="hover:bg-neutral-800 transition-colors text-base font-medium text-white bg-neutral-900 rounded-full px-8 py-4 shadow-xl flex items-center gap-2">
<iconify-icon icon="solar:play-linear"></iconify-icon> Start Scanning
                        </button>
<button className="border border-neutral-900/20 px-8 py-4 rounded-full text-base font-medium hover:bg-white/20 transition-colors flex items-center gap-2 font-sans">
                            Read Docs <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>

<div className="min-h-[500px] flex lg:justify-end w-full h-full relative items-center justify-center [animation:animationIn_1.2s_ease-out_0.5s_both] animate-on-scroll">

<div className="absolute inset-0 rounded-3xl overflow-hidden mix-blend-multiply opacity-90">
<img alt="Developer Portrait" className="object-top grayscale-[20%] sepia-[30%] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/496075b4-61b8-49d2-b69f-b1d4da70d9c3_1600w.webp"/>
</div>

<div className="text-white bg-neutral-900 w-80 border-white/10 border rounded-[2rem] lg:mr-8 p-8 relative shadow-2xl backdrop-blur-sm [animation:animationIn_1s_ease-out_0.7s_both] animate-on-scroll">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-yellow-400" icon="solar:shield-warning-linear" width="28"></iconify-icon>
<span className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium font-sans">Protected</span>
</div>
<div className="space-y-1 mb-8">
<p className="text-sm text-neutral-400 font-sans">Current Status</p>
<h3 className="text-3xl tracking-tight font-dm-sans font-light">0 Critical</h3>
<p className="text-sm text-neutral-500 font-mono pt-1 font-sans">repo: main-branch</p>
</div>
<div className="flex justify-between items-end">
<div className="uppercase text-sm tracking-widest text-neutral-500 font-sans">Last Scan: 2m ago</div>
<div className="bg-green-500 text-black h-12 w-8 rounded-lg flex flex-col items-center justify-center gap-0.5">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="relative z-20 bg-black/90 py-6 mt-auto">
<div className="flex flex-wrap justify-center items-center gap-12 px-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 [animation:animationIn_0.8s_ease-out_0.8s_both] animate-on-scroll">
<iconify-icon className="text-white" height="28" icon="simple-icons:github" width="40"></iconify-icon>
<iconify-icon className="text-white" height="28" icon="simple-icons:gitlab" width="40"></iconify-icon>
<iconify-icon className="text-white" height="28" icon="simple-icons:linux" width="40"></iconify-icon>
<iconify-icon className="text-white" height="28" icon="simple-icons:docker" width="40"></iconify-icon>
<iconify-icon className="text-white" height="28" icon="simple-icons:kubernetes" width="40"></iconify-icon>
</div>
</div>
</header>

<section className="py-24 px-6 lg:px-4">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-4 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-400 font-sans">Platform Capabilities</span>
<h2 className="text-4xl lg:text-5xl text-white tracking-tight leading-tight font-dm-sans font-light">
                    Complete protection for your software supply chain.
                </h2>
<p className="text-slate-400 font-sans">Secure your workflow from code commit to production deployment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#FACC15] p-8 rounded-[2rem] text-neutral-900 flex flex-col justify-between min-h-[400px] [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="">
<div className="flex justify-between items-start mb-6">
<iconify-icon icon="solar:code-circle-linear" width="48"></iconify-icon>
<div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-2xl mb-3 tracking-tight font-dm-sans font-light">Code Security</h3>
<p className="text-neutral-800 leading-relaxed text-base font-sans">Comprehensive security analysis including code scanning, PR scanning, and automated code fixes.</p>
</div>
<div className="flex gap-1 mt-8">
<div className="w-full bg-neutral-900/10 rounded-lg p-3 font-mono text-xs">
<div className="flex gap-2 text-neutral-900"><span className="opacity-50">1</span> <span>def validate_user(input):</span></div>
<div className="flex gap-2 text-red-600 font-bold"><span className="opacity-50">2</span> <span>  exec(input) # Unsafe</span></div>
<div className="flex gap-2 text-green-700"><span className="opacity-50">3</span> <span>  # Auto-fix available</span></div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] text-neutral-900 flex flex-col justify-between min-h-[400px] [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="">
<div className="flex justify-between items-start mb-6">
<iconify-icon className="" icon="solar:key-linear" width="48"></iconify-icon>
<div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:lock-password-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-2xl mb-3 tracking-tight font-dm-sans font-light">Secrets Detection</h3>
<p className="text-neutral-600 leading-relaxed text-base font-sans">Proactively scan code repositories, logs, and build artifacts for leaked secrets and credentials.</p>
</div>
<div className="flex gap-[-8px] mt-8">
<div className="flex items-center gap-2 bg-red-50 text-red-600 rounded-full p-2 px-4 w-full">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
<span className="text-xs font-semibold font-sans">AWS Key Detected</span>
</div>
</div>
</div>

<div className="bg-[#4ADE80] p-8 rounded-[2rem] text-neutral-900 flex flex-col justify-between min-h-[400px] [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<div className="">
<div className="flex justify-between items-start mb-6">
<iconify-icon icon="solar:box-linear" width="48"></iconify-icon>
<div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-2xl mb-3 tracking-tight font-dm-sans font-light">Vulnerable Packages</h3>
<p className="text-neutral-800 leading-relaxed text-base font-sans">Scan for vulnerable dependencies that are actually in use and within your application's execution path.</p>
</div>
<div className="mt-8">
<div className="flex items-center gap-2 opacity-80">
<iconify-icon icon="simple-icons:npm" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:pypi" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:rubygems" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden min-h-[800px] flex rounded-none lg:rounded-[2.5rem] relative items-center">

<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Portrait" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/29b6f8c1-4665-4c13-974e-fa495d462bb4_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-r from-orange-700/90 via-orange-600/60 to-transparent mix-blend-multiply"></div>
<div className="bg-gradient-to-t from-orange-900/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full relative gap-x-12 gap-y-12">
<div className="space-y-8">
<div className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<span className="inline-block px-4 py-1 rounded-full border border-white/30 text-white text-sm font-sans mb-4">Mission</span>
<h2 className="text-5xl lg:text-7xl text-white tracking-tight leading-[1.1] font-dm-sans font-light">
                            We take your security seriously.
                        </h2>
<p className="text-white/80 text-xl max-w-md font-sans mt-4">
                            Adapting quickly to new threat vectors with flexible controls that fit your developer workflow.
                        </p>
</div>

<div className="flex flex-wrap gap-4 pt-8 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="bg-indigo-300/90 backdrop-blur-md p-6 rounded-3xl w-40 text-indigo-900">
<h4 className="text-3xl tracking-tight font-dm-sans font-light">240k</h4>
<p className="text-xs font-medium leading-tight mt-1 opacity-80 font-sans">Commits Scanned</p>
</div>
<div className="bg-emerald-300/90 backdrop-blur-md p-6 rounded-3xl w-40 text-emerald-900">
<h4 className="text-3xl tracking-tight font-dm-sans font-light">1.2m</h4>
<p className="text-xs font-medium leading-tight mt-1 opacity-80 font-sans">Secrets Found</p>
</div>
<div className="bg-sky-300/90 backdrop-blur-md p-6 rounded-3xl w-40 text-sky-900">
<h4 className="text-3xl tracking-tight font-dm-sans font-light">99%</h4>
<p className="text-xs font-medium leading-tight mt-1 opacity-80 font-sans">False Positive Red.</p>
</div>
</div>
</div>
</div>

<div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-white/30 rounded-full overflow-hidden [animation:animationIn_0.8s_ease-out_0.8s_both] animate-on-scroll">
<div className="w-2/3 h-full bg-white rounded-full"></div>
</div>
</section>

<section className="overflow-hidden min-h-[700px] z-10 rounded-none lg:rounded-[2.5rem] mt-0 lg:mt-6 relative">
<div className="absolute inset-0">
<img alt="Developer at work" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33f44bf5-8b59-437b-a1e3-87e3db3f82ec_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-yellow-500/90 via-transparent to-blue-500/30 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-yellow-600/60"></div>
</div>
<div className="z-10 p-6 lg:p-24 flex flex-col h-full pt-12 pb-12 relative justify-center">
<div className="max-w-2xl [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-5xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 font-dm-sans font-light">
                        Secure your repo and experience the future.
                    </h2>
<p className="text-white/90 text-xl max-w-lg mb-8 font-sans">
                        Join thousands of developers securing their stack automatically across 40+ languages and frameworks.
                    </p>
<button className="hover:bg-black transition-transform hover:scale-105 text-base font-medium text-white bg-neutral-900 rounded-full px-8 py-4 shadow-xl">
                        Try CodeShield Free
                    </button>
</div>
</div>

<div className="lg:right-24 lg:bottom-12 lg:w-80 overflow-hidden bg-neutral-900 w-64 border-neutral-900 border-8 rounded-[3rem] absolute right-8 bottom-[-50px] shadow-2xl rotate-[-6deg] [animation:animationIn_1s_ease-out_0.5s_both] animate-on-scroll hidden sm:block">
<div className="flex flex-col bg-[#FACC15] h-[600px] w-full relative">

<div className="w-full flex justify-between items-center px-6 pt-5 pb-2">
<span className="text-xs font-semibold text-neutral-900 font-sans">9:41</span>
<div className="flex gap-1.5 items-center">
<div className="w-4 h-4 rounded-full bg-neutral-900/20 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
</div>
<div className="w-4 h-4 rounded-full bg-neutral-900"></div>
</div>
</div>

<div className="px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<span className="font-dm-sans font-medium text-neutral-900 tracking-tight">CodeShield</span>
</div>
<button className="w-8 h-8 rounded-full border border-neutral-900/10 flex items-center justify-center hover:bg-neutral-900/5 transition-colors">
<iconify-icon className="text-neutral-900" icon="solar:bell-linear" width="18"></iconify-icon>
</button>
</div>

<div className="px-6 pt-2 pb-6">
<span className="text-xs font-medium text-neutral-800/60 uppercase tracking-wider font-sans block mb-1">Security Score</span>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl tracking-tighter font-dm-sans font-light text-neutral-900">A+</span>
<span className="text-sm font-medium text-green-700 bg-green-500/10 px-2 py-0.5 rounded-full font-sans">Secure</span>
</div>

<div className="flex gap-3">
<button className="flex-1 bg-neutral-900 text-white h-12 rounded-full flex items-center justify-center gap-2 text-sm font-medium shadow-lg shadow-neutral-900/10 hover:bg-neutral-800 transition-colors font-sans">
<iconify-icon icon="solar:scanner-linear" width="18"></iconify-icon>
                                Scan
                            </button>
<button className="flex-1 bg-white text-neutral-900 h-12 rounded-full flex items-center justify-center gap-2 text-sm font-medium shadow-sm hover:bg-white/90 transition-colors font-sans">
<iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
                                Report
                            </button>
</div>
</div>

<div className="flex-1 bg-white rounded-t-[2.5rem] p-6 space-y-6 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] relative overflow-hidden">
<div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-neutral-100 rounded-full"></div>
<div className="flex justify-between items-end mt-2">
<h3 className="font-dm-sans text-lg font-medium text-neutral-900">Issues Found</h3>
<span className="text-xs font-medium text-neutral-400 font-sans cursor-pointer hover:text-neutral-900 transition-colors">View All</span>
</div>
<div className="space-y-5">

<div className="flex justify-between items-center group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
<iconify-icon className="text-red-600" icon="solar:code-scan-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-medium text-sm text-neutral-900 font-sans">SQL Injection</p>
<p className="text-xs text-neutral-400 font-sans">/auth/login.ts</p>
</div>
</div>
<span className="font-medium text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full font-sans">Critical</span>
</div>

<div className="flex justify-between items-center group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
<iconify-icon className="text-orange-600" icon="solar:key-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-medium text-sm text-neutral-900 font-sans">AWS Key Leaked</p>
<p className="text-xs text-neutral-400 font-sans">config.json</p>
</div>
</div>
<span className="font-medium text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full font-sans">High</span>
</div>

<div className="flex justify-between items-center group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center group-hover:bg-yellow-50 transition-colors">
<iconify-icon className="text-neutral-900" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-medium text-sm text-neutral-900 font-sans">Lodash Old Ver</p>
<p className="text-xs text-neutral-400 font-sans">package.json</p>
</div>
</div>
<span className="font-medium text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full font-sans">Medium</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-4">
<div className="text-center max-w-3xl mx-auto mb-16 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4 font-dm-sans font-light">
                    Tailored for dev teams  of all sizes.
                </h2>
<p className="text-slate-400 font-sans">Optimized infrastructure for open source projects to enterprise giants.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#FACC15] p-6 rounded-[2rem] text-neutral-900 flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="mb-8 p-2">
<h3 className="text-2xl mb-2 tracking-tight font-dm-sans font-light">Open Source</h3>
<p className="text-neutral-800 text-base leading-relaxed font-sans">Free forever for public repositories. Automated scanning on every PR and badge integrations.</p>
</div>
<div className="mt-auto rounded-3xl overflow-hidden h-48 relative">
<img alt="Open Source" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4b4f6bc-45b8-4bbb-8dda-c4bb651cb859_800w.webp"/>
<div className="absolute bottom-4 left-4 flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-black text-white flex items-center justify-center">
<iconify-icon icon="simple-icons:github" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-[2rem] text-neutral-900 flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="mb-8 p-2">
<h3 className="text-2xl mb-2 tracking-tight font-dm-sans font-light">Startups</h3>
<p className="text-neutral-600 text-base leading-relaxed font-sans">Secure your growth. Get SOC2-ready reports and seamless CI/CD integration for growing teams.</p>
</div>
<div className="mt-auto rounded-3xl overflow-hidden h-48 relative bg-neutral-100">
<img alt="Startup" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6dade2d-171e-445a-b71c-9fb732c0f564_800w.webp"/>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 rounded-full text-xs font-bold font-sans">
                            Scale
                        </div>
</div>
</div>

<div className="bg-[#4ADE80] p-6 rounded-[2rem] text-neutral-900 flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<div className="mb-8 p-2">
<h3 className="text-2xl mb-2 tracking-tight font-dm-sans font-light">Enterprises</h3>
<p className="text-neutral-800 text-base leading-relaxed font-sans">Zero-trust architecture. Custom policy engines, on-premise deployment options, and SSO.</p>
</div>
<div className="mt-auto rounded-3xl overflow-hidden h-48 relative">
<img alt="Enterprise" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dc90823-2953-4bc3-be75-2020baa9f2be_800w.webp"/>
<div className="absolute bottom-4 right-4 bg-white p-2 rounded-full">
<iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-12 [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll">
<button className="bg-[#FACC15] text-neutral-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-yellow-300 transition-colors font-sans">
                    Compare Plans
                </button>
</div>
</section>

<section className="p-6 lg:p-16 overflow-hidden bg-black border-white/10 lg:border border-y border-x-0 lg:border-x rounded-none lg:rounded-[2.5rem] relative">
<div className="grid grid-cols-1 lg:grid-cols-2 z-10 relative gap-x-12 gap-y-12 items-center">
<div className="space-y-6 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-4xl lg:text-6xl text-[#FACC15] tracking-tight leading-tight font-dm-sans font-light">
                        Trusted by the open source community.
                    </h2>
<p className="text-slate-400 text-lg leading-relaxed max-w-lg font-sans">
                        Modern dev teams are transforming software security by combining automated analysis, graph theory, and heuristics to deliver faster, safer code. Be part of the revolution.
                    </p>
<button className="bg-[#FACC15] text-neutral-900 px-8 py-4 rounded-full text-base font-medium mt-4 hover:bg-yellow-300 transition-colors font-sans">
                        Join Discord
                    </button>
</div>

<div className="flex gap-4 lg:justify-end overflow-hidden h-[500px] gap-x-4 gap-y-4 justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 10%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 10%, black 100%, transparent)'}}>
<div className="flex flex-col -mt-12 gap-x-4 gap-y-4 [animation:animationIn_1.2s_ease-out_0.4s_both] animate-on-scroll">
<img alt="Person" className="opacity-80 w-24 h-64 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1cbabc55-9b50-45a8-9909-62a2bf7195c4_800w.webp"/>
<img alt="Person" className="opacity-60 w-24 h-64 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef7dac00-17d0-424e-b869-197b59fd733e_800w.webp"/>
</div>
<div className="flex flex-col gap-4 mt-8 gap-x-4 gap-y-4 [animation:animationIn_1.2s_ease-out_0.6s_both] animate-on-scroll">
<img alt="Person" className="w-24 h-64 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7a515a9-1c73-4810-ba0c-bc08f0a90d61_800w.webp"/>
<img alt="Person" className="w-24 h-64 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d73cdc2-d0a6-4758-8bd2-bfa826c8c51d_800w.webp"/>
</div>
<div className="flex flex-col -mt-4 gap-x-4 gap-y-4 [animation:animationIn_1.2s_ease-out_0.8s_both] animate-on-scroll">
<img alt="Person" className="opacity-90 w-24 h-64 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3150e38-5fe9-4f65-a962-053812f57b03_800w.webp"/>
<img alt="Person" className="w-24 h-64 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8790ab5d-f909-40f7-a522-c484c8a1bf40_320w.webp"/>
</div>
</div>
</div>
</section>

<footer className="relative mt-32 lg:mt-24">

<div className="bg-gradient-to-b from-[#1a1a1a] to-[#2d2f20] rounded-none lg:rounded-t-[3rem] pt-24 pb-12 px-6 lg:px-16 border-t border-white/5">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
<div className="lg:col-span-2 space-y-6 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-yellow-400" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tight font-sans">CodeShield</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm font-sans">
                            CodeShield Inc. is transforming the software supply chain by designing inclusive security services. By reimagining traditional scanners, linting, and policy enforcement.
                        </p>
<div className="flex gap-4">
<a className="bg-white/5 hover:bg-white/10 p-2 rounded-full text-yellow-400 transition-colors" href="#">
<iconify-icon icon="simple-icons:twitter" width="18"></iconify-icon>
</a>
<a className="bg-white/5 hover:bg-white/10 p-2 rounded-full text-yellow-400 transition-colors" href="#">
<iconify-icon icon="simple-icons:github" width="18"></iconify-icon>
</a>
<a className="bg-white/5 hover:bg-white/10 p-2 rounded-full text-yellow-400 transition-colors" href="#">
<iconify-icon icon="simple-icons:discord" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<h4 className="text-white font-medium mb-6 text-sm font-sans">Product</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className=""><a className="hover:text-yellow-400 transition-colors font-sans" href="#">Features</a></li>
<li><a className="hover:text-yellow-400 transition-colors font-sans" href="#">Integrations</a></li>
<li><a className="hover:text-yellow-400 transition-colors font-sans" href="#">Changelog</a></li>
<li><a className="hover:text-yellow-400 transition-colors font-sans" href="#">Docs</a></li>
</ul>
</div>
<div className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<h4 className="text-white font-medium mb-6 text-sm font-sans">Company</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-yellow-400 transition-colors font-sans" href="#">About</a></li>
<li className=""><a className="hover:text-yellow-400 transition-colors font-sans" href="#">Enterprise</a></li>
<li><a className="hover:text-yellow-400 transition-colors font-sans" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-yellow-400 transition-colors font-sans" href="#">Privacy Policy</a></li>
</ul>
</div>
<div className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<h4 className="text-yellow-400 font-medium mb-6 text-sm font-sans">Resources</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-yellow-400 transition-colors font-sans" href="#">Vulnerability Database</a></li>
<li><a className="hover:text-yellow-400 transition-colors font-sans" href="#">Security Blog</a></li>
<li><a className="hover:text-yellow-400 transition-colors font-sans" href="#">Community</a></li>
<li><a className="hover:text-yellow-400 transition-colors font-sans" href="#">Partners</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll">
<p className="font-sans">© 2024 CodeShield Inc. Open Source License MIT.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span className="font-sans">San Francisco</span>
<span className="font-sans">London</span>
<span className="font-sans">Remote</span>
</div>
</div>
</div>
</footer>
</div>

    </>
  );
}
