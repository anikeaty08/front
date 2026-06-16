import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
<div className="absolute inset-0 bg-grid"></div>
<div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-[#08FDD8] rounded-full mix-blend-screen opacity-[0.04] blur-[100px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8027FF] rounded-full mix-blend-screen opacity-[0.05] blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0F1F]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2.5 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#08FDD8] to-[#8027FF] flex items-center justify-center text-[#0A0F1F] shadow-[0_0_10px_rgba(8,253,216,0.3)]">
<span className="iconify" data-icon="lucide:terminal" data-strokeWidth="2.5" data-width="18"></span>
</div>
<span className="text-lg font-bold tracking-tight text-white">Sudoverse</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
<a className="hover:text-white transition-colors" href="#courses">Courses</a>
<a className="hover:text-white transition-colors" href="#roadmap">Roadmap</a>
<a className="hover:text-white transition-colors" href="#labs">Live Labs</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-white/70 hover:text-white transition-colors">Log in</button>
<button className="bg-[#08FDD8] text-[#0A0F1F] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#08FDD8] hover:shadow-[0_0_20px_rgba(8,253,216,0.4)] transition-all flex items-center gap-2 transform active:scale-95">
                    Start Learning
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-36 px-6">
<div className="max-w-5xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#08FDD8] mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#08FDD8] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#08FDD8]"></span>
</span>
                v2.0: Now with Interactive Browser Labs
            </div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                Learn cybersecurity <br/>
<span className="gradient-text">from zero to hero.</span>
</h1>
<p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                A guided, safe, and interactive universe for absolute beginners. 
                Master hacking and defense through practical labs directly in your browser.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-[#08FDD8] text-[#0A0F1F] rounded-lg font-semibold text-sm shadow-[0_0_15px_rgba(8,253,216,0.25)] hover:shadow-[0_0_30px_rgba(8,253,216,0.4)] transition-all">
                    Start Beginner Path
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="18"></span>
                    Watch Trailer
                </button>
</div>
</div>

<div className="mt-20 relative max-w-4xl mx-auto group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-[#08FDD8] via-[#8027FF] to-[#08FDD8] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative bg-[#050505] rounded-xl border border-white/10 shadow-2xl overflow-hidden">

<div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
</div>
<div className="text-xs font-mono text-white/30 flex items-center gap-2">
<span className="iconify" data-icon="lucide:lock" data-width="10"></span>
                        lab-instance-4092.sudoverse.cloud
                    </div>
<div className="w-16"></div>
</div>

<div className="grid md:grid-cols-[1fr_300px] min-h-[300px]">
<div className="p-6 font-mono text-sm border-r border-white/5">
<div className="text-white/40 mb-2"># Step 1: Scan the target</div>
<div className="flex gap-2 mb-2">
<span className="text-[#08FDD8]">user@sudoverse:~$</span>
<span className="text-white">nmap -sC -sV 10.10.11.24</span>
</div>
<div className="text-white/60 mb-4 animate-pulse">Starting Nmap 7.92...</div>
<div className="space-y-1 text-white/80">
<div>PORT   STATE SERVICE VERSION</div>
<div>22/tcp <span className="text-[#08FDD8]">open</span>  ssh     OpenSSH 8.2p1</div>
<div>80/tcp <span className="text-[#08FDD8]">open</span>  http    Apache httpd 2.4.41</div>
</div>
<div className="mt-4 flex gap-2">
<span className="text-[#08FDD8]">user@sudoverse:~$</span>
<span className="inline-block w-2 h-5 bg-[#08FDD8] animate-pulse align-middle"></span>
</div>
</div>
<div className="bg-[#0A0F1F] p-5 hidden md:block">
<div className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">Objective</div>
<div className="text-sm text-white mb-4 leading-relaxed">
                            Identify open ports on the target web server to find potential entry points.
                        </div>
<div className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-2">Progress</div>
<div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-4">
<div className="h-full w-1/3 bg-[#08FDD8]"></div>
</div>
<button className="w-full py-2 bg-[#08FDD8]/10 border border-[#08FDD8]/30 text-[#08FDD8] rounded text-xs font-medium hover:bg-[#08FDD8]/20 transition-colors">
                            Verify Result
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-2xl group hover:border-[#08FDD8]/40 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-[#08FDD8]/10 flex items-center justify-center text-[#08FDD8] mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Safe Environments</h3>
<p className="text-white/50 text-sm leading-relaxed">
                        No complex VM setup. Launch disposable Kali Linux instances directly in your browser instantly.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-[#8027FF]/40 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-[#8027FF]/10 flex items-center justify-center text-[#8027FF] mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:map" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Guided Roadmaps</h3>
<p className="text-white/50 text-sm leading-relaxed">
                        Structure beats chaos. Follow our step-by-step curriculum designed for absolute beginners.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-[#08FDD8]/40 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:trophy" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Gamified Growth</h3>
<p className="text-white/50 text-sm leading-relaxed">
                        Earn ranks, badges, and streaks. Track your progress from "Script Kiddie" to "Elite Hacker".
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="roadmap">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Your Path to Pro</h2>
<p className="text-white/50">Structured learning modules designed for retention, not confusion.</p>
</div>
<div className="relative max-w-5xl mx-auto">

<div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"></div>

<div className="relative grid md:grid-cols-2 gap-8 mb-12">
<div className="md:text-right md:pr-12 order-2 md:order-1">
<div className="inline-flex items-center gap-2 text-[#08FDD8] text-xs font-mono mb-2">
<span className="iconify" data-icon="lucide:check-circle" data-width="14"></span> MODULE 01
                        </div>
<h3 className="text-xl font-semibold text-white mb-2">Cyber Fundamentals</h3>
<p className="text-white/50 text-sm">Networking basics, Linux command line, and security ethics. The foundation of everything.</p>
</div>
<div className="absolute left-8 top-0 -translate-x-1/2 md:left-1/2 w-4 h-4 rounded-full bg-[#08FDD8] shadow-[0_0_10px_rgba(8,253,216,0.5)] border-4 border-[#0A0F1F]"></div>
<div className="pl-16 md:pl-0 order-1 md:order-2"></div>
</div>

<div className="relative grid md:grid-cols-2 gap-8 mb-12">
<div className="order-2 md:order-1"></div>
<div className="absolute left-8 top-0 -translate-x-1/2 md:left-1/2 w-4 h-4 rounded-full bg-[#8027FF] border-4 border-[#0A0F1F]"></div>
<div className="pl-16 md:pl-12 order-1 md:order-2">
<div className="text-[#8027FF] text-xs font-mono mb-2">MODULE 02</div>
<h3 className="text-xl font-semibold text-white mb-2">Web Security</h3>
<p className="text-white/50 text-sm">Understanding HTTP, OWASP Top 10, SQL Injection, and XSS attacks.</p>
</div>
</div>

<div className="relative grid md:grid-cols-2 gap-8 mb-12">
<div className="md:text-right md:pr-12 order-2 md:order-1 opacity-60">
<div className="text-white/40 text-xs font-mono mb-2">MODULE 03</div>
<h3 className="text-xl font-semibold text-white mb-2">Network Defense</h3>
<p className="text-white/50 text-sm">Firewalls, packet analysis with Wireshark, and Intrusion Detection Systems.</p>
</div>
<div className="absolute left-8 top-0 -translate-x-1/2 md:left-1/2 w-4 h-4 rounded-full bg-white/20 border-4 border-[#0A0F1F]"></div>
<div className="pl-16 md:pl-0 order-1 md:order-2"></div>
</div>
</div>
<div className="text-center mt-12">
<button className="px-6 py-3 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/5 hover:border-white/20 transition-all">
                    View Full Roadmap
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#050505]" id="courses">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Latest Courses</h2>
<p className="text-white/50">Hand-picked interactive content.</p>
</div>
<a className="text-[#08FDD8] text-sm hover:underline hidden md:block" href="#">View all courses -&gt;</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel rounded-xl overflow-hidden group hover:border-[#08FDD8]/30 transition-all cursor-pointer">
<div className="h-40 bg-gradient-to-br from-blue-900 to-[#0A0F1F] relative p-6 flex flex-col justify-between">
<div className="w-10 h-10 rounded bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:server" data-width="20"></span>
</div>
<div className="text-xs font-medium text-white/60 bg-black/30 w-fit px-2 py-1 rounded">Beginner</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#08FDD8] transition-colors">Linux Privilege Escalation</h3>
<p className="text-sm text-white/50 mb-4 line-clamp-2">Learn how to elevate your permissions from a standard user to root access using common misconfigurations.</p>
<div className="flex items-center gap-4 text-xs text-white/40">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock" data-width="12"></span> 2h 15m</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:users" data-width="12"></span> 1.2k students</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden group hover:border-[#8027FF]/30 transition-all cursor-pointer">
<div className="h-40 bg-gradient-to-br from-purple-900 to-[#0A0F1F] relative p-6 flex flex-col justify-between">
<div className="w-10 h-10 rounded bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:globe" data-width="20"></span>
</div>
<div className="text-xs font-medium text-white/60 bg-black/30 w-fit px-2 py-1 rounded">Intermediate</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#8027FF] transition-colors">OWASP Top 10 Deep Dive</h3>
<p className="text-sm text-white/50 mb-4 line-clamp-2">Master the most critical web application security risks with practical exploitation labs.</p>
<div className="flex items-center gap-4 text-xs text-white/40">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock" data-width="12"></span> 4h 30m</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:users" data-width="12"></span> 850 students</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden group hover:border-[#08FDD8]/30 transition-all cursor-pointer">
<div className="h-40 bg-gradient-to-br from-emerald-900 to-[#0A0F1F] relative p-6 flex flex-col justify-between">
<div className="w-10 h-10 rounded bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:wifi" data-width="20"></span>
</div>
<div className="text-xs font-medium text-white/60 bg-black/30 w-fit px-2 py-1 rounded">Beginner</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#08FDD8] transition-colors">Intro to WiFi Hacking</h3>
<p className="text-sm text-white/50 mb-4 line-clamp-2">Understand WPA2/3 protocols and how to secure wireless networks against attacks.</p>
<div className="flex items-center gap-4 text-xs text-white/40">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock" data-width="12"></span> 1h 45m</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:users" data-width="12"></span> 2.1k students</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="labs">
<div className="absolute inset-0 bg-[#08FDD8]/[0.02]"></div>
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-block px-3 py-1 rounded bg-[#8027FF]/10 text-[#8027FF] text-xs font-semibold mb-4">WEEKLY CHALLENGES</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Capture The Flag</h2>
<p className="text-white/60 text-lg mb-8 leading-relaxed">
                        Put your skills to the test in our beginner-friendly CTF arena. Find the vulnerability, exploit it, and retrieve the "flag" to earn points.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#08FDD8]/10 flex items-center justify-center text-[#08FDD8] shrink-0 mt-1">
<span className="iconify" data-icon="lucide:flag" data-width="16"></span>
</div>
<div>
<h4 className="text-white font-medium">Real Scenarios</h4>
<p className="text-white/50 text-sm">Based on actual CVEs and vulnerabilities found in the wild.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#08FDD8]/10 flex items-center justify-center text-[#08FDD8] shrink-0 mt-1">
<span className="iconify" data-icon="lucide:users" data-width="16"></span>
</div>
<div>
<h4 className="text-white font-medium">Community Hints</h4>
<p className="text-white/50 text-sm">Stuck? Get nudges from the community without spoiling the solution.</p>
</div>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-xl border-t-4 border-t-[#8027FF]">
<div className="flex justify-between items-center mb-6">
<div className="text-sm font-bold text-white">Challenge: The Hidden Cookie</div>
<div className="text-xs text-[#08FDD8] bg-[#08FDD8]/10 px-2 py-1 rounded">50 Points</div>
</div>
<div className="bg-[#0A0F1F] p-4 rounded border border-white/5 mb-6">
<p className="text-sm text-white/70 font-mono">
                            I left my admin credentials in a cookie, but I encrypted it! Can you decrypt it and log in?
                            <br/><br/>
<span className="text-[#8027FF]">Target:</span> <span className="text-white/50">http://10.10.34.12:8080</span>
</p>
</div>
<form className="flex gap-3" onsubmit="event.preventDefault();">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#08FDD8] transition-colors" placeholder="sudo{flag_format_here}" type="text"/>
<button className="bg-[#8027FF] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#7020E0] transition-colors">
                            Submit
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#050505] border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white mb-2">Student Dashboard</h2>
<p className="text-white/50">Track every packet, every flag, and every skill gained.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0A0F1F] overflow-hidden shadow-2xl">

<div className="border-b border-white/5 p-4 flex items-center justify-between bg-white/[0.02]">
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-[#08FDD8]"></div>
<span className="text-sm font-medium text-white">Dashboard Overview</span>
</div>
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
</div>
<div className="grid md:grid-cols-[240px_1fr] min-h-[500px]">

<div className="border-r border-white/5 p-4 hidden md:block bg-white/[0.01]">
<div className="flex items-center gap-3 mb-8 px-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#08FDD8] to-[#8027FF]"></div>
<div>
<div className="text-sm font-medium text-white">Alex Cyber</div>
<div className="text-[10px] text-white/50">Rank: Script Kiddie</div>
</div>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 bg-[#08FDD8]/10 text-[#08FDD8] rounded-md text-sm font-medium" href="#">
<span className="iconify" data-icon="lucide:layout-grid" data-width="16"></span> Overview
                            </a>
<a className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-md text-sm font-medium transition-colors" href="#">
<span className="iconify" data-icon="lucide:book-open" data-width="16"></span> My Courses
                            </a>
<a className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-md text-sm font-medium transition-colors" href="#">
<span className="iconify" data-icon="lucide:flag" data-width="16"></span> CTF Arena
                            </a>
<a className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-md text-sm font-medium transition-colors" href="#">
<span className="iconify" data-icon="lucide:award" data-width="16"></span> Certificates
                            </a>
</nav>
</div>

<div className="p-6 md:p-8">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="bg-white/5 p-4 rounded-xl border border-white/5">
<div className="text-white/40 text-xs mb-1">XP Points</div>
<div className="text-xl font-bold text-white">2,450</div>
</div>
<div className="bg-white/5 p-4 rounded-xl border border-white/5">
<div className="text-white/40 text-xs mb-1">Machines Pwned</div>
<div className="text-xl font-bold text-[#08FDD8]">12</div>
</div>
<div className="bg-white/5 p-4 rounded-xl border border-white/5">
<div className="text-white/40 text-xs mb-1">Daily Streak</div>
<div className="text-xl font-bold text-[#8027FF]">5 Days</div>
</div>
<div className="bg-white/5 p-4 rounded-xl border border-white/5">
<div className="text-white/40 text-xs mb-1">Global Rank</div>
<div className="text-xl font-bold text-white">#4,201</div>
</div>
</div>

<h4 className="text-sm font-medium text-white mb-4">Continue Learning</h4>
<div className="p-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent relative group">
<div className="flex items-start justify-between mb-4">
<div className="flex gap-4">
<div className="w-10 h-10 rounded bg-[#08FDD8]/20 flex items-center justify-center text-[#08FDD8]">
<span className="iconify" data-icon="lucide:terminal-square" data-width="20"></span>
</div>
<div>
<h3 className="text-white font-medium">Linux File Permissions</h3>
<p className="text-sm text-white/50">Module 01: Cyber Fundamentals</p>
</div>
</div>
<button className="px-4 py-2 bg-[#08FDD8] text-[#0A0F1F] text-xs font-bold rounded hover:bg-[#08FDD8]/90 transition-colors">Resume</button>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-[65%] bg-[#08FDD8]"></div>
</div>
<div className="mt-2 text-right text-[10px] text-white/40">65% Complete</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Transparent Access</h2>
<p className="text-white/50">Start for free. Upgrade for career tools.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl border border-white/10 bg-[#0A0F1F] flex flex-col hover:border-white/20 transition-colors">
<div className="mb-4">
<div className="text-sm font-medium text-white/60 mb-2">Observer</div>
<div className="text-3xl font-bold text-white">$0 <span className="text-base font-normal text-white/40">/mo</span></div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<span className="iconify text-[#08FDD8]" data-icon="lucide:check" data-width="16"></span> Module 01 Access
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<span className="iconify text-[#08FDD8]" data-icon="lucide:check" data-width="16"></span> 3 Labs / Day
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<span className="iconify text-[#08FDD8]" data-icon="lucide:check" data-width="16"></span> Community Discord
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-colors">
                        Sign Up Free
                    </button>
</div>

<div className="relative p-8 rounded-2xl border border-[#08FDD8] bg-[#0A0F1F] flex flex-col shadow-[0_0_30px_rgba(8,253,216,0.1)]">
<div className="absolute top-0 right-0 bg-[#08FDD8] text-[#0A0F1F] text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MOST POPULAR</div>
<div className="mb-4">
<div className="text-sm font-medium text-[#08FDD8] mb-2">Operator</div>
<div className="text-3xl font-bold text-white">$15 <span className="text-base font-normal text-white/40">/mo</span></div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-[#08FDD8]" data-icon="lucide:check" data-width="16"></span> Unlimited Labs
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-[#08FDD8]" data-icon="lucide:check" data-width="16"></span> All Career Paths
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-[#08FDD8]" data-icon="lucide:check" data-width="16"></span> Solutions &amp; Writeups
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-[#08FDD8]" data-icon="lucide:check" data-width="16"></span> Certificates
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-[#08FDD8] text-[#0A0F1F] font-semibold text-sm hover:bg-[#08FDD8]/90 transition-colors shadow-lg shadow-[#08FDD8]/20">
                        Start 7-Day Trial
                    </button>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-[#0A0F1F] flex flex-col hover:border-white/20 transition-colors">
<div className="mb-4">
<div className="text-sm font-medium text-white/60 mb-2">Red Team</div>
<div className="text-3xl font-bold text-white">$49 <span className="text-base font-normal text-white/40">/user</span></div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<span className="iconify text-[#08FDD8]" data-icon="lucide:check" data-width="16"></span> Team Analytics
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<span className="iconify text-[#08FDD8]" data-icon="lucide:check" data-width="16"></span> Private CTF Events
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<span className="iconify text-[#08FDD8]" data-icon="lucide:check" data-width="16"></span> SSO Integration
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-colors">
                        Contact Sales
                    </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8 px-6 text-sm relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4 text-white font-bold" href="#">
<span className="iconify text-[#08FDD8]" data-icon="lucide:terminal" data-width="20"></span>
                    Sudoverse
                </a>
<p className="text-white/40 mb-6 max-w-xs">
                    Democratizing cybersecurity education for the next generation of ethical hackers and defenders.
                </p>
<div className="flex gap-4">
<a className="text-white/40 hover:text-[#08FDD8] transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-white/40 hover:text-[#08FDD8] transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="18"></span></a>
<a className="text-white/40 hover:text-[#08FDD8] transition-colors" href="#"><span className="iconify" data-icon="lucide:discord" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Platform</h4>
<ul className="space-y-2 text-white/50">
<li><a className="hover:text-white transition-colors" href="#">Beginner Path</a></li>
<li><a className="hover:text-white transition-colors" href="#">Live Labs</a></li>
<li><a className="hover:text-white transition-colors" href="#">CTF Arena</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-white/50">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Legal</h4>
<ul className="space-y-2 text-white/50">
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs gap-4">
<div>© 2023 Sudoverse Inc. All rights reserved.</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#08FDD8]"></span> System Operational
            </div>
</div>
</footer>

    </>
  );
}
