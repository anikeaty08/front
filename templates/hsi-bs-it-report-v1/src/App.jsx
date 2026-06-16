import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
colors: {
hsi: {
blue: '#1F5FD1',
dark: '#0B1120', // Deep charcoal/slate
gold: '#C8A24A',
surface: '#1E293B',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'blob': 'blob 10s infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



        // Theme Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        // Initial Theme Check
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            html.classList.toggle('dark');
            if (html.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });

        // Mouse Tracking for Spotlight Effects
        // This calculates the mouse position relative to each card and sets CSS variables
        document.addEventListener('mousemove', e => {
            const cards = document.querySelectorAll('.glow-card');
            
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Set CSS variables for gradient positioning
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 bg-grid pointer-events-none"></div>
<div className="aurora-bg dark:opacity-100 opacity-60">

<div className="aurora-blob bg-blue-400/20 dark:bg-hsi-blue/20 w-96 h-96 top-0 -left-20"></div>

<div className="aurora-blob bg-amber-200/30 dark:bg-hsi-gold/10 w-96 h-96 bottom-0 -right-20 animation-delay-2000"></div>

<div className="aurora-blob bg-indigo-300/20 dark:bg-indigo-900/20 w-[500px] h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animation-delay-4000"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-gradient-to-br from-hsi-blue to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold font-mono shadow-lg shadow-blue-500/20">
                    H
                </div>
<span className="text-sm font-medium text-slate-900 dark:text-slate-200 tracking-tight">
                    HSI <span className="text-slate-400">/</span> Report
                </span>
</div>
<div className="flex items-center gap-3">
<span className="hidden md:inline-flex px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500">
                    v2.5.0-student
                </span>
<div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>
<button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors" id="theme-toggle">
<span className="dark:hidden" data-icon="lucide:sun" data-width="16"></span>
<span className="hidden dark:block" data-icon="lucide:moon" data-width="16"></span>
</button>
</div>
</div>
</nav>
<main className="relative z-10 pt-28 pb-24 px-6 max-w-6xl mx-auto">

<header className="mb-16">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-blue-200/50 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Active Semester • TA 2025/2026
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-4">
                        Abdullah <span className="text-slate-400 dark:text-slate-600">Al-Fulani</span>
</h1>
<p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-light">
                        Fullstack Development Track • Class XII-C
                    </p>
</div>
<div className="flex gap-3">
<div className="px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
<div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">GPA</div>
<div className="text-2xl font-mono font-bold text-slate-900 dark:text-white">3.85</div>
</div>
<div className="px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
<div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Rank</div>
<div className="text-2xl font-mono font-bold text-hsi-gold">Top 5%</div>
</div>
</div>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">

<div className="glow-card md:col-span-2 group rounded-xl border border-slate-200 dark:border-slate-800 p-[1px]">
<div className="glow-content bg-white dark:bg-slate-950 p-6 md:p-8 rounded-xl h-full flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-6">
<div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
<span className="iconify" data-icon="lucide:activity" data-width="20"></span>
</div>
<span className="text-xs font-mono text-slate-400">Global Score</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Overall Performance</h3>
<p className="text-sm text-slate-500 mt-1">Weighted average across all technical modules.</p>
</div>
<div className="mt-8">
<div className="flex items-end gap-4 mb-2">
<span className="text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">92.4</span>
<span className="text-sm font-medium text-emerald-500 mb-2 flex items-center">
<span className="iconify mr-1" data-icon="lucide:trending-up" data-width="14"></span> +2.4%
                            </span>
</div>

<div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-[92%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="glow-card group rounded-xl border border-slate-200 dark:border-slate-800 p-[1px]">
<div className="glow-content bg-white dark:bg-slate-950 p-6 rounded-xl h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">
<span className="iconify" data-icon="lucide:clock" data-width="20"></span>
</div>
<span className="text-xs font-mono text-slate-400">Attendance</span>
</div>
<div className="flex-grow flex flex-col justify-end">
<div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">100%</div>
<div className="text-xs text-slate-500">Perfect record this semester.</div>

<div className="flex gap-1 mt-4 opacity-50">
<div className="h-6 w-1 rounded-sm bg-slate-300 dark:bg-slate-700"></div>
<div className="h-6 w-1 rounded-sm bg-hsi-blue"></div>
<div className="h-6 w-1 rounded-sm bg-hsi-blue"></div>
<div className="h-6 w-1 rounded-sm bg-hsi-blue"></div>
<div className="h-6 w-1 rounded-sm bg-hsi-blue"></div>
<div className="h-6 w-1 rounded-sm bg-hsi-blue"></div>
<div className="h-6 w-1 rounded-sm bg-slate-300 dark:bg-slate-700"></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-3">
<div className="sticky top-24 space-y-8">
<div>
<h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4">Report Sections</h4>
<nav className="space-y-1 border-l border-slate-200 dark:border-slate-800 ml-2">
<a className="block pl-4 py-2 text-sm text-slate-900 dark:text-white border-l border-hsi-blue -ml-px font-medium" href="#code">
                                Technical Skills
                            </a>
<a className="block pl-4 py-2 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors" href="#attitude">
                                Attitude &amp; Soft Skills
                            </a>
<a className="block pl-4 py-2 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors" href="#projects">
                                Project Portfolio
                            </a>
</nav>
</div>
<div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-2 mb-2">
<span className="iconify text-emerald-500" data-icon="lucide:shield-check" data-width="16"></span>
<span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Verified by HSI IT</span>
</div>
<p className="text-[10px] text-slate-500 leading-relaxed">
                            Data is pulled directly from the student's Git activity, LMS logs, and mentor assessments.
                        </p>
</div>
</div>
</div>

<div className="lg:col-span-9 space-y-16">

<section className="scroll-mt-24" id="code">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
<span className="iconify text-indigo-500" data-icon="lucide:terminal-square" data-width="24"></span>
                            Technical Proficiency
                        </h2>
<span className="text-xs font-mono bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 px-2 py-1 rounded">Score: 94/100</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="glow-card group rounded-lg border border-slate-200 dark:border-slate-800 p-[1px]">
<div className="glow-content bg-white dark:bg-slate-950 p-5 rounded-lg">
<div className="flex justify-between mb-2">
<span className="text-sm font-medium text-slate-700 dark:text-slate-200">Frontend Engineering</span>
<span className="text-xs font-mono text-slate-500">React/Next.js</span>
</div>
<div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-2">
<div className="h-full bg-indigo-500 w-[95%]"></div>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                                    Demonstrates advanced understanding of React Hooks, State Management (Zustand), and Responsive layouts.
                                </p>
</div>
</div>

<div className="glow-card group rounded-lg border border-slate-200 dark:border-slate-800 p-[1px]">
<div className="glow-content bg-white dark:bg-slate-950 p-5 rounded-lg">
<div className="flex justify-between mb-2">
<span className="text-sm font-medium text-slate-700 dark:text-slate-200">Backend Logic</span>
<span className="text-xs font-mono text-slate-500">Node/PostgreSQL</span>
</div>
<div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-2">
<div className="h-full bg-blue-500 w-[88%]"></div>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                                    Capable of designing RESTful APIs. Needs minor improvement in complex SQL join optimization.
                                </p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="attitude">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
<span className="iconify text-hsi-gold" data-icon="lucide:heart-handshake" data-width="24"></span>
                            Adab &amp; Soft Skills
                        </h2>
<span className="text-xs font-mono bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 px-2 py-1 rounded">Grade: A</span>
</div>
<div className="glow-card group rounded-xl border border-slate-200 dark:border-slate-800 p-[1px]">
<div className="glow-content bg-white dark:bg-slate-950 p-6 md:p-8 rounded-xl">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
<div>
<div className="w-10 h-10 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 mb-3">
<span className="iconify" data-icon="lucide:users" data-width="18"></span>
</div>
<h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Teamwork</h4>
<p className="text-xs text-slate-500">Excellent peer support</p>
</div>
<div>
<div className="w-10 h-10 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 mb-3">
<span className="iconify" data-icon="lucide:mic" data-width="18"></span>
</div>
<h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Communication</h4>
<p className="text-xs text-slate-500">Clear &amp; concise</p>
</div>
<div>
<div className="w-10 h-10 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 mb-3">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="18"></span>
</div>
<h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Problem Solving</h4>
<p className="text-xs text-slate-500">Independent learner</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
<p className="text-sm italic text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto">
                                    "Abdullah has shown exceptional maturity in handling code reviews. He accepts feedback gracefully and implements changes immediately. A true professional in the making."
                                </p>
<div className="mt-2 text-center text-xs font-bold text-slate-400 uppercase tracking-wide">— Head of IT Curriculum</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="projects">
<h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-6">
<span className="iconify text-emerald-500" data-icon="lucide:folder-git-2" data-width="24"></span>
                        Key Projects
                    </h2>
<div className="space-y-4">

<a className="block glow-card group rounded-xl border border-slate-200 dark:border-slate-800 p-[1px] transition-transform hover:-translate-y-1" href="#">
<div className="glow-content bg-white dark:bg-slate-950 p-6 rounded-xl">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">
<span className="iconify" data-icon="lucide:library" data-width="20"></span>
</div>
<h3 className="font-bold text-slate-900 dark:text-white">Maktabah Digital System</h3>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 text-[10px] font-mono border border-slate-200 dark:border-slate-700 rounded text-slate-500">TypeScript</span>
<span className="px-2 py-1 text-[10px] font-mono border border-slate-200 dark:border-slate-700 rounded text-slate-500">Supabase</span>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                    A library management dashboard for HSI students to borrow digital books. Implemented JWT Auth and real-time search.
                                </p>
<div className="flex items-center gap-4 text-xs font-medium text-slate-500">
<div className="flex items-center gap-1 hover:text-hsi-blue transition-colors">
<span className="iconify" data-icon="lucide:star" data-width="14"></span> 12 Stars
                                    </div>
<div className="flex items-center gap-1 hover:text-hsi-blue transition-colors">
<span className="iconify" data-icon="lucide:git-fork" data-width="14"></span> 3 Forks
                                    </div>
<div className="ml-auto text-emerald-500 flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span> Deployed
                                    </div>
</div>
</div>
</a>

<a className="block glow-card group rounded-xl border border-slate-200 dark:border-slate-800 p-[1px] transition-transform hover:-translate-y-1" href="#">
<div className="glow-content bg-white dark:bg-slate-950 p-6 rounded-xl">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">
<span className="iconify" data-icon="lucide:layout-template" data-width="20"></span>
</div>
<h3 className="font-bold text-slate-900 dark:text-white">Landing Page Clone</h3>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 text-[10px] font-mono border border-slate-200 dark:border-slate-700 rounded text-slate-500">TailwindCSS</span>
<span className="px-2 py-1 text-[10px] font-mono border border-slate-200 dark:border-slate-700 rounded text-slate-500">HTML5</span>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400">
                                    Pixel-perfect replication of high-performance landing pages to practice modern CSS grid and flexbox layouts.
                                </p>
</div>
</a>
</div>
</section>
</div>
</div>
</main>

<footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 relative z-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
<span className="w-2 h-2 rounded-full bg-hsi-blue"></span>
                HSI Boarding School
            </div>
<p className="text-xs text-slate-500 dark:text-slate-400">
                © 2025 IT Department. Built for students.
            </p>
</div>
</footer>



    </>
  );
}
