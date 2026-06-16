import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function router(pageId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.remove('active');
                setTimeout(() => {
                    if(!section.classList.contains('active')) {
                        section.style.display = 'none';
                    }
                }, 400); // Match CSS transition duration
            });

            // Show target section
            const target = document.getElementById(pageId);
            if (target) {
                target.style.display = 'block';
                // Small delay to allow display:block to apply before adding opacity class
                setTimeout(() => {
                    target.classList.add('active');
                }, 10);
            }

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Initialize Home
        document.addEventListener('DOMContentLoaded', () => {
            router('home');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<button className="text-white font-medium tracking-tight text-lg hover:opacity-80 transition-opacity" onclick="router('home')">
                AS
            </button>

<div className="md:hidden">
<button className="text-white p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<button className="hover:text-white transition-colors nav-link" data-target="home" onclick="router('home')">Home</button>
<button className="hover:text-white transition-colors nav-link" data-target="study" onclick="router('study')">Study</button>
<button className="hover:text-white transition-colors nav-link" data-target="mindset" onclick="router('mindset')">Mindset</button>
<button className="hover:text-white transition-colors nav-link" data-target="project" onclick="router('project')">Projects</button>
<button className="hover:text-white transition-colors nav-link" data-target="interests" onclick="router('interests')">Interests</button>
</div>
</div>

<div className="hidden md:hidden bg-neutral-900 border-b border-white/5 absolute w-full p-4 space-y-4" id="mobile-menu">
<button className="block w-full text-left text-sm hover:text-white" onclick="router('home'); document.getElementById('mobile-menu').classList.add('hidden')">Home</button>
<button className="block w-full text-left text-sm hover:text-white" onclick="router('study'); document.getElementById('mobile-menu').classList.add('hidden')">Study</button>
<button className="block w-full text-left text-sm hover:text-white" onclick="router('mindset'); document.getElementById('mobile-menu').classList.add('hidden')">Mindset</button>
<button className="block w-full text-left text-sm hover:text-white" onclick="router('project'); document.getElementById('mobile-menu').classList.add('hidden')">Projects</button>
<button className="block w-full text-left text-sm hover:text-white" onclick="router('interests'); document.getElementById('mobile-menu').classList.add('hidden')">Interests</button>
</div>
</nav>

<main className="flex-grow pt-32 pr-6 pb-20 pl-6 max-w-5xl mx-auto w-full">

<section className="page-section active space-y-16" id="home">

<div className="space-y-8">
<div className="space-y-4 max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/50 border border-neutral-800 text-xs font-medium text-neutral-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Building Future-Ready Solutions
                    </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                        Amit Singh
                    </h1>
<p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed">
                        B.Tech (AI &amp; ML) Student.<br/>
                        AI &amp; technology-focused student building practical, future-ready solutions.
                    </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl text-sm">
<div className="flex items-center gap-3 text-neutral-500 group">
<div className="p-2 rounded-md bg-neutral-900 border border-neutral-800 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-white" icon="solar:map-point-linear" width="18"></iconify-icon>
</div>
<div>
<span className="block text-white">Bhopal (Neelbad Chauraha)</span>
<span className="text-xs">Current Location</span>
</div>
</div>
<div className="flex items-center gap-3 text-neutral-500 group">
<div className="p-2 rounded-md bg-neutral-900 border border-neutral-800 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-white" icon="solar:home-linear" width="18"></iconify-icon>
</div>
<div>
<span className="block text-white">Sahdol, Umaria (M.P.)</span>
<span className="text-xs">Native Address</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-card rounded-2xl p-8 md:col-span-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-40 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="space-y-4 max-w-lg">
<div className="flex items-center gap-3">
<div className="p-2 bg-neutral-900/80 border border-neutral-800 rounded-lg inline-flex">
<iconify-icon className="text-indigo-400" icon="solar:code-square-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-indigo-400 tracking-wide uppercase">Featured Project</span>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight">Student Productive AI</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                An intelligent AI assistant designed specifically to improve student productivity through smart planning and concept clarity.
                            </p>
</div>
<button className="shrink-0 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2" onclick="router('project')">
                            View Project
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="glass-card rounded-2xl p-6 flex flex-col justify-between h-full space-y-6 hover:translate-y-[-2px] transition-transform duration-300">
<div className="space-y-4">
<div className="p-2.5 bg-neutral-900/80 border border-neutral-800 rounded-lg w-fit">
<iconify-icon className="text-white" icon="solar:hat-graduation-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium">Study Overview</h3>
<p className="text-sm text-neutral-400">B.Tech (AIML), 12th completed from EMRS Pali.</p>
</div>
<button className="text-sm text-white font-medium flex items-center gap-2 hover:gap-3 transition-all w-fit" onclick="router('study')">
                        View Study Details <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>

<div className="glass-card rounded-2xl p-6 flex flex-col justify-between h-full space-y-6 hover:translate-y-[-2px] transition-transform duration-300">
<div className="space-y-4">
<div className="p-2.5 bg-neutral-900/80 border border-neutral-800 rounded-lg w-fit">
<iconify-icon className="text-white" icon="solar:user-speak-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium">The Mindset</h3>
<ul className="text-sm text-neutral-400 space-y-1">
<li>• Disciplined &amp; self-driven</li>
<li>• Learning by doing</li>
<li>• Long-term success focus</li>
</ul>
</div>
<button className="text-sm text-white font-medium flex items-center gap-2 hover:gap-3 transition-all w-fit" onclick="router('mindset')">
                        View Mindset Details <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>

<div className="glass-card rounded-2xl p-6 md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6 hover:translate-y-[-2px] transition-transform duration-300">
<div className="flex items-center gap-4">
<div className="p-2.5 bg-neutral-900/80 border border-neutral-800 rounded-lg shrink-0">
<iconify-icon className="text-white" icon="solar:atom-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-medium">Interests</h3>
<div className="flex flex-wrap gap-2 mt-2">
<span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">AI &amp; ML</span>
<span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">Automation</span>
<span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">AI Agents</span>
<span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">Growth</span>
</div>
</div>
</div>
<button className="shrink-0 text-sm text-white font-medium flex items-center gap-2 hover:gap-3 transition-all" onclick="router('interests')">
                        View Interests <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="page-section space-y-12" id="study">
<button className="group flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors mb-8" onclick="router('home')">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon>
                Back to Home
            </button>
<header className="space-y-4">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight">Academic Journey</h2>
<p className="text-neutral-400 max-w-2xl text-lg">My educational background focused on building a strong foundation in Artificial Intelligence and analytical thinking.</p>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-card p-8 rounded-2xl border-l-4 border-indigo-500 space-y-4">
<div className="flex justify-between items-start">
<h3 className="text-xl text-white font-medium">B.Tech in AI &amp; ML</h3>
<span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs rounded-full">Pursuing</span>
</div>
<p className="text-sm text-neutral-300">Bhopal (Neelbad Chauraha)</p>
<p className="text-neutral-400 leading-relaxed">
                        Currently deeply immersed in the world of Artificial Intelligence and Machine Learning. My coursework and self-study revolve around understanding algorithms, data structures, and automation technologies.
                    </p>
<div className="pt-4 flex flex-wrap gap-2">
<span className="px-3 py-1 text-xs border border-white/10 rounded-md">Deep Learning</span>
<span className="px-3 py-1 text-xs border border-white/10 rounded-md">Python</span>
<span className="px-3 py-1 text-xs border border-white/10 rounded-md">Data Analysis</span>
</div>
</div>

<div className="glass-card p-8 rounded-2xl border-l-4 border-neutral-700 space-y-4">
<div className="flex justify-between items-start">
<h3 className="text-xl text-white font-medium">Higher Secondary (12th)</h3>
<span className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-400 text-xs rounded-full">Completed</span>
</div>
<p className="text-sm text-neutral-300">EMRS Pali</p>
<p className="text-neutral-400 leading-relaxed">
                        Completed 12th grade with a focus on science and mathematics, laying the groundwork for engineering studies. Developed early interests in logic and problem solving during this time.
                    </p>
</div>
</div>
</section>

<section className="page-section space-y-12" id="mindset">
<button className="group flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors mb-8" onclick="router('home')">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon>
                Back to Home
            </button>
<header className="space-y-4">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight">The Mindset</h2>
<p className="text-neutral-400 max-w-2xl text-lg">Philosophy and principles that drive my daily work and learning.</p>
</header>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-card p-6 rounded-2xl space-y-4">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg">Growth Mindset</h3>
<p className="text-sm leading-relaxed">I view challenges as opportunities to improve. Stagnation is the enemy; constant evolution is the goal.</p>
</div>
<div className="glass-card p-6 rounded-2xl space-y-4">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg">Discipline &amp; Logic</h3>
<p className="text-sm leading-relaxed">Motivation is fleeting, but discipline remains. I prioritize logical approaches over quick hacks to build sustainable solutions.</p>
</div>
<div className="glass-card p-6 rounded-2xl space-y-4">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg">Real-World Practice</h3>
<p className="text-sm leading-relaxed">Theory is useful, but application is critical. I believe in "Learning by Doing" to truly master concepts.</p>
</div>
</div>
<div className="glass-card p-8 rounded-2xl flex items-center justify-center text-center">
<blockquote className="text-xl md:text-2xl text-neutral-300 font-light italic max-w-2xl">
                    "Success isn't about speed, it's about consistency and clarity of direction."
                </blockquote>
</div>
</section>

<section className="page-section space-y-12" id="project">
<button className="group flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors mb-8" onclick="router('home')">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon>
                Back to Home
            </button>
<header className="space-y-4">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight">Projects</h2>
<p className="text-neutral-400 max-w-2xl text-lg">Building tools that solve real problems.</p>
</header>
<div className="glass-card rounded-2xl overflow-hidden">
<div className="bg-neutral-900/50 border-b border-white/5 p-4 flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-4 px-3 py-1 rounded bg-black/40 text-xs text-neutral-500 font-mono">student-ai-project</div>
</div>
<div className="p-8 md:p-12 space-y-10">
<div>
<h3 className="text-3xl text-white font-medium tracking-tight mb-4">Student Productive AI</h3>
<p className="text-neutral-400 leading-relaxed text-lg max-w-3xl">
                            An advanced AI assistant designed to bridge the gap between academic pressure and productive learning. It acts as a personal mentor, helping students organize their schedules and understand complex concepts simply.
                        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<h4 className="text-white font-medium flex items-center gap-2">
<iconify-icon icon="solar:bullseye-linear"></iconify-icon> Purpose
                            </h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                                To reduce student burnout and procrastination by automating the planning process and providing instant, verified academic assistance.
                            </p>
</div>
<div className="space-y-4">
<h4 className="text-white font-medium flex items-center gap-2">
<iconify-icon icon="solar:layers-linear"></iconify-icon> Key Features
                            </h4>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                                    Automated Study Schedules
                                </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                                    Concept Simplification Engine
                                </li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                                    Progress Tracking
                                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="page-section space-y-12" id="interests">
<button className="group flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors mb-8" onclick="router('home')">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon>
                Back to Home
            </button>
<header className="space-y-4">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight">Core Interests</h2>
<p className="text-neutral-400 max-w-2xl text-lg">The technologies and domains I am actively exploring and mastering.</p>
</header>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors cursor-default">
<div className="flex items-start gap-4">
<div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
<iconify-icon className="text-white" icon="solar:brain-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-2">AI &amp; Machine Learning</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Deep diving into neural networks, predictive models, and how machines learn from data.</p>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors cursor-default">
<div className="flex items-start gap-4">
<div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
<iconify-icon className="text-white" icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-2">Automation Tools</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Creating workflows that eliminate repetitive tasks and increase efficiency in daily life.</p>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors cursor-default">
<div className="flex items-start gap-4">
<div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
<iconify-icon className="text-white" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-2">AI Agents</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Exploring autonomous agents that can plan, execute, and interact with environments.</p>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors cursor-default">
<div className="flex items-start gap-4">
<div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
<iconify-icon className="text-white" icon="solar:flag-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-2">Skill Building</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Problem solving and continuous personal growth through technical challenges.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-8 bg-black/50 backdrop-blur-sm">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-center md:text-left">
<p className="text-white font-medium tracking-tight">Amit Singh</p>
<p className="text-xs text-neutral-600 mt-1">Building the future with AI</p>
</div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="mailto:contact@amitsingh.com">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
