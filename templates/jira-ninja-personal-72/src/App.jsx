import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
jira: {
blue: '#2684FF',
dark: '#09090b',
panel: '#18181b',
border: '#27272a',
light: '#f4f5f7',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'fade-in': 'fadeIn 0.3s ease-out forwards',
'slide-up': 'slideUp 0.4s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Data Store
        const skillData = {
            jira: {
                title: "Jira Software",
                level: "Uber Ninja",
                desc: "Full-stack configuration expertise. From complex workflow schemes to ScriptRunner groovy scripting and advanced permission architecture.",
                skills: [
                    { name: "Workflow Mgmt & Optimisation", pct: 100 },
                    { name: "Custom Work Items", pct: 100 },
                    { name: "ScriptRunner / Groovy", pct: 100 },
                    { name: "Advanced JQL", pct: 100 },
                    { name: "Project Administration", pct: 100 },
                    { name: "Migration Strategy", pct: 100 },
                    { name: "Automation for Jira", pct: 100 },
                    { name: "Screen Schemes", pct: 100 }
                ]
            },
            confluence: {
                title: "Confluence",
                level: "Super Ninja",
                desc: "Creating single sources of truth. Expert in template design, space taxonomy, macro development, and user macros.",
                skills: [
                    { name: "Space Architecture", pct: 100 },
                    { name: "User Macros", pct: 100 },
                    { name: "Template Design", pct: 100 },
                    { name: "Content Strategy", pct: 100 }
                ]
            },
            jsm: {
                title: "Service Management",
                level: "Great Ninja",
                desc: "Optimizing ITSM delivery. Configuring customer portals, SLA matrices, and automation rules for high-velocity support teams.",
                skills: [
                    { name: "SLA Configuration", pct: 100 },
                    { name: "Portal Design", pct: 100 },
                    { name: "Asset Management", pct: 100 },
                    { name: "Automation Rules", pct: 100 }
                ]
            },
            bitbucket: {
                title: "Bitbucket",
                level: "Competent Ninja",
                desc: "Seamless CI/CD integration. Managing repositories, branching strategies, and connecting code to Jira issues.",
                skills: [
                    { name: "Pipelines", pct: 75 },
                    { name: "Branch Management", pct: 85 },
                    { name: "Jira Integration", pct: 95 },
                    { name: "Code Review Flow", pct: 80 }
                ]
            }
        };

        // Initialize with Jira
        window.addEventListener('load', () => {
            renderSkills('jira');
            // Check Theme
            if (localStorage.getItem('theme') === 'light') {
                document.documentElement.classList.remove('dark');
            }
        });

        // View Switcher
        function switchView(viewName) {
            const home = document.getElementById('home-view');
            const skills = document.getElementById('skills-view');
            
            if (viewName === 'skills') {
                home.style.opacity = '0';
                home.style.pointerEvents = 'none';
                setTimeout(() => {
                    home.classList.add('hidden');
                    skills.classList.remove('hidden');
                    // Small delay to allow display:block to apply before opacity transition
                    setTimeout(() => {
                        skills.style.opacity = '1';
                        skills.style.pointerEvents = 'auto';
                        // Trigger animation of bars by re-rendering
                        const activeKey = document.querySelector('.tool-btn.active-tool')?.getAttribute('onmouseenter')?.match(/'([^']+)'/)[1] || 'jira';
                        renderSkills(activeKey);
                    }, 50);
                }, 300);
            } else {
                skills.style.opacity = '0';
                skills.style.pointerEvents = 'none';
                setTimeout(() => {
                    skills.classList.add('hidden');
                    home.classList.remove('hidden');
                    setTimeout(() => {
                        home.style.opacity = '1';
                        home.style.pointerEvents = 'auto';
                    }, 50);
                }, 300);
            }
        }

        // Skills Logic
        function updateSkills(key) {
            // Update Active State on Buttons
            document.querySelectorAll('.tool-btn').forEach(btn => {
                btn.classList.remove('active-tool', 'ring-1', 'ring-blue-500', 'dark:ring-blue-400');
            });
            
            // Render Data
            renderSkills(key);
        }

        function renderSkills(key) {
           const data = skillData[key];
           
           // Text Updates
           document.getElementById('skill-title').innerText = data.title;
           document.getElementById('skill-desc').innerText = data.desc;
           document.getElementById('skill-badge').innerText = data.level;
           
           // Badge Color Logic
           const badge = document.getElementById('skill-badge');
           if (data.level.includes("Uber")) {
               badge.className = "px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/20";
           } else if (data.level.includes("Super")) {
               badge.className = "px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-purple-500/20";
           } else {
               badge.className = "px-3 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-[10px] font-bold uppercase tracking-wider rounded-full";
           }

           // Bars
           const container = document.getElementById('bars-container');
           container.innerHTML = ''; // clear
           
           data.skills.forEach((skill, index) => {
               // Logic for Green Bars > 75%
               const isHighSkill = skill.pct > 75;
               const barColorClass = isHighSkill 
                    ? 'bg-emerald-500 dark:bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]' 
                    : 'bg-neutral-900 dark:bg-neutral-400';

               const el = document.createElement('div');
               el.className = 'space-y-2';
               el.innerHTML = `
                   <div class="flex justify-between text-xs font-medium text-neutral-600 dark:text-neutral-300">
                       <span>${skill.name}</span>
                       <span>${skill.pct}%</span>
                   </div>
                   <div class="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                       <div class="h-full rounded-full progress-bar ${barColorClass}" style="width: 0%"></div>
                   </div>
               `;
               container.appendChild(el);
               
               // Animate Width after a microtask
               setTimeout(() => {
                   el.querySelector('.progress-bar').style.width = `${skill.pct}%`;
               }, 50 + (index * 30));
           });
        }

        // Add active class logic to tool buttons for visual feedback
        const toolBtns = document.querySelectorAll('.tool-btn');
        toolBtns.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                toolBtns.forEach(b => b.classList.remove('active-tool', 'ring-1', 'ring-blue-500', 'dark:ring-blue-400'));
                this.classList.add('active-tool', 'ring-1', 'ring-blue-500', 'dark:ring-blue-400');
            });
        });

        // Theme Logic
        function toggleTheme() {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }

        // Modal Logic
        function openModal() {
            document.getElementById('contactModal').classList.remove('hidden');
            document.body.classList.add('no-scroll');
        }
        function closeModal() {
            document.getElementById('contactModal').classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
        document.addEventListener('keydown', (e) => { if(e.key === "Escape") closeModal(); });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-900/10 rounded-full blur-[100px]"></div>
</div>

<nav className="w-full px-8 py-6 flex justify-between items-center z-20 shrink-0">
<button className="text-sm font-medium tracking-tighter text-black dark:text-white uppercase select-none focus:outline-none" onclick="switchView('home')">
            Jira Ninja
        </button>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center space-x-8 text-xs font-light text-neutral-600 dark:text-neutral-400">
<button className="hover:text-black dark:hover:text-white transition-colors duration-300 focus:outline-none" onclick="switchView('skills')">Skills &amp; Tools</button>
<a className="hover:text-black dark:hover:text-white transition-colors duration-300" href="#">Methodology</a>
<a className="hover:text-black dark:hover:text-white transition-colors duration-300" href="#">Case Studies</a>
</div>
<button className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors duration-300" onclick="toggleTheme()">
<svg aria-hidden="true" className="iconify block dark:hidden iconify--lucide" data-icon="lucide:moon" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify hidden dark:block iconify--lucide" data-icon="lucide:sun" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</button>
<button className="group flex items-center gap-2 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-800 hover:bg-neutral-700 dark:hover:bg-neutral-700 border border-transparent dark:border-neutral-700 px-4 py-2 rounded-md transition-all duration-300" onclick="openModal()">
<span>Contact</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<div className="flex-grow relative w-full overflow-hidden">

<main className="absolute inset-0 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 transition-opacity duration-300 opacity-100 overflow-y-auto lg:overflow-visible" id="home-view">

<div className="flex flex-col justify-center space-y-8 max-w-xl py-12 lg:py-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-jira-border bg-white/50 dark:bg-jira-panel/50 w-fit backdrop-blur-sm shadow-sm dark:shadow-none">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-600 dark:text-neutral-400 font-medium">System Optimized</span>
</div>
<div className="space-y-4">
<h1 className="text-5xl lg:text-7xl font-medium text-neutral-900 dark:text-white tracking-tighter leading-[0.95]">
                        Architecting 
                        <span className="text-neutral-500">Workflow Velocity.</span>
</h1>
<p className="text-base font-light text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md">
                        Transforming chaotic Jira instances into streamlined engines of productivity. Expert administration, advanced scripting, and scalable governance for enterprise teams.
                    </p>
</div>

<div className="grid grid-cols-2 gap-4 pt-2">
<div className="flex items-center gap-3">
<div className="text-neutral-700 dark:text-white bg-neutral-100 dark:bg-neutral-800 p-1.5 rounded">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:workflow" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
</div>
<span className="text-sm font-light text-neutral-600 dark:text-neutral-300">Advanced Workflows</span>
</div>
<div className="flex items-center gap-3">
<div className="text-neutral-700 dark:text-white bg-neutral-100 dark:bg-neutral-800 p-1.5 rounded">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<span className="text-sm font-light text-neutral-600 dark:text-neutral-300">Permission Schemes</span>
</div>
<div className="flex items-center gap-3">
<div className="text-neutral-700 dark:text-white bg-neutral-100 dark:bg-neutral-800 p-1.5 rounded">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:terminal" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8M4 17l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-light text-neutral-600 dark:text-neutral-300">ScriptRunner Groovy</span>
</div>
<div className="flex items-center gap-3">
<div className="text-neutral-700 dark:text-white bg-neutral-100 dark:bg-neutral-800 p-1.5 rounded">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-light text-neutral-600 dark:text-neutral-300">EazyBI Reporting</span>
</div>
</div>
<div className="pt-4 flex items-center gap-6">
<button className="bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-700 dark:hover:bg-neutral-200 px-6 py-3 rounded-md text-sm font-medium transition-colors duration-200 shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]" onclick="switchView('skills')">
                        View Skills
                    </button>
<div className="flex -space-x-3 overflow-hidden">
<div className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-50 dark:ring-jira-dark bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-700 dark:text-white font-medium">AC</div>
<div className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-50 dark:ring-jira-dark bg-neutral-300 dark:bg-neutral-700 flex items-center justify-center text-[10px] text-neutral-800 dark:text-white font-medium">RK</div>
<div className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-50 dark:ring-jira-dark bg-neutral-400 dark:bg-neutral-600 flex items-center justify-center text-[10px] text-white font-medium">+40</div>
</div>
</div>
</div>

<div className="hidden lg:flex animate-float relative items-center justify-end">
<div className="w-full max-w-lg bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl border border-neutral-200 dark:border-jira-border rounded-xl shadow-2xl overflow-hidden relative transition-colors duration-500">
<div className="px-4 py-3 border-b border-neutral-200 dark:border-jira-border flex items-center justify-between bg-white/80 dark:bg-neutral-900/80">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
                            jira-production-config.groovy
                        </div>
<div className="w-10"></div>
</div>
<div className="p-6 font-mono text-xs leading-relaxed">
<div className="flex gap-4">
<div className="flex flex-col text-neutral-400 dark:text-neutral-700 select-none text-right">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span className="">8</span><span className="">9</span><span>10</span><span>11</span>
</div>
<div className="text-neutral-600 dark:text-neutral-400">
<span className="text-purple-600 dark:text-purple-400">import</span> com.atlassian.jira.component.ComponentAccessor
                                <span className="text-neutral-400 dark:text-neutral-500">// Automate transition</span>
<span className="text-purple-600 dark:text-purple-400">def</span> issueService = ComponentAccessor.issueService
                                <span className="text-purple-600 dark:text-purple-400">def</span> user = ComponentAccessor.jiraAuthenticationContext.loggedInUser
                                <span className="text-blue-600 dark:text-blue-400">if</span> (issue.subTaskObjects.every { it.status.name == <span className="text-green-600 dark:text-green-400">'Done'</span> }) {
                                  validateTransition(issue, <span className="text-orange-600 dark:text-orange-400">31</span>)
                                  log.<span className="text-blue-600 dark:text-blue-400">info</span>(<span className="text-green-600 dark:text-green-400">"Workflow optimized"</span>)
                                }
                            </div>
</div>
</div>
<div className="bg-white/80 dark:bg-neutral-900/80 border-t border-neutral-200 dark:border-jira-border px-4 py-2 flex justify-between items-center">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-blue-500 iconify--lucide" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-[10px] text-neutral-500 dark:text-neutral-400">Syntax Verified</span>
</div>
<div className="text-[10px] text-neutral-500">Groovy 3.0.9</div>
</div>
</div>
</div>
</main>

<div className="absolute inset-0 w-full max-w-7xl mx-auto px-8 py-8 z-10 transition-opacity duration-300 opacity-0 pointer-events-none flex flex-col" id="skills-view">
<div className="mb-8">
<h2 className="text-3xl font-medium tracking-tighter text-neutral-900 dark:text-white">Technical Arsenal</h2>
<p className="text-neutral-500 text-sm mt-1">Select a tool to analyze proficiency matrix.</p>
</div>
<div className="flex flex-col lg:flex-row gap-8 h-full pb-8">

<div className="lg:w-1/3 flex flex-col gap-3">
<button className="tool-btn group relative flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-jira-border bg-white dark:bg-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300 text-left active-tool ring-1 ring-blue-500 dark:ring-blue-400" onmouseenter="updateSkills('jira')">
<div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white">Jira Software</div>
<div className="text-[10px] text-neutral-500">Administration &amp; Architecture</div>
</div>
<div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</button>
<button className="tool-btn group relative flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-jira-border bg-white dark:bg-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300 text-left" onmouseenter="updateSkills('confluence')">
<div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white">Confluence</div>
<div className="text-[10px] text-neutral-500">Knowledge Management</div>
</div>
</button>
<button className="tool-btn group relative flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-jira-border bg-white dark:bg-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300 text-left" onmouseenter="updateSkills('jsm')">
<div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:life-buoy" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93l4.24 4.24m5.66 0l4.24-4.24m-4.24 9.9l4.24 4.24m-9.9-4.24l-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></g></svg>
</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white">Service Mgmt</div>
<div className="text-[10px] text-neutral-500">ITSM &amp; Assets</div>
</div>
</button>
<button className="tool-btn group relative flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-jira-border bg-white dark:bg-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300 text-left" onmouseenter="updateSkills('bitbucket')">
<div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:git-branch" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></g></svg>
</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white">Bitbucket</div>
<div className="text-[10px] text-neutral-500">CI/CD &amp; Version Control</div>
</div>
</button>
</div>

<div className="lg:w-2/3 h-full">
<div className="h-full bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-jira-border rounded-xl p-8 relative overflow-hidden backdrop-blur-sm shadow-xl transition-all duration-300">

<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="animate-fade-in flex-shrink-0">
<div className="flex items-center justify-between mb-2">
<h3 className="text-2xl font-medium text-neutral-900 dark:text-white tracking-tight" id="skill-title">Jira Software</h3>
<span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/20" id="skill-badge">Uber Ninja</span>
</div>
<p className="text-sm font-light text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed" id="skill-desc">Full-stack configuration expertise. From complex workflow schemes to ScriptRunner groovy scripting and advanced permission architecture.</p>
</div>
<div className="mt-8 flex-grow overflow-y-auto hide-scroll pb-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 align-start content-start" id="bars-container"><div className="space-y-2">
<div className="flex justify-between text-xs font-medium text-neutral-600 dark:text-neutral-300">
<span>Workflow Mgmt &amp; Optimisation</span>
<span>100%</span>
</div>
<div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full rounded-full progress-bar bg-emerald-500 dark:bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" style={{width: '0%'}}></div>
</div>
</div><div className="space-y-2">
<div className="flex justify-between text-xs font-medium text-neutral-600 dark:text-neutral-300">
<span>Custom Work Items</span>
<span>100%</span>
</div>
<div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full rounded-full progress-bar bg-emerald-500 dark:bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" style={{width: '0%'}}></div>
</div>
</div><div className="space-y-2">
<div className="flex justify-between text-xs font-medium text-neutral-600 dark:text-neutral-300">
<span>ScriptRunner / Groovy</span>
<span>100%</span>
</div>
<div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full rounded-full progress-bar bg-emerald-500 dark:bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" style={{width: '100%'}}></div>
</div>
</div><div className="space-y-2">
<div className="flex justify-between text-xs font-medium text-neutral-600 dark:text-neutral-300">
<span>Advanced JQL</span>
<span>100%</span>
</div>
<div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full rounded-full progress-bar bg-emerald-500 dark:bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" style={{width: '100%'}}></div>
</div>
</div><div className="space-y-2">
<div className="flex justify-between text-xs font-medium text-neutral-600 dark:text-neutral-300">
<span>Project Administration</span>
<span>100%</span>
</div>
<div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full rounded-full progress-bar bg-emerald-500 dark:bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" style={{width: '100%'}}></div>
</div>
</div><div className="space-y-2">
<div className="flex justify-between text-xs font-medium text-neutral-600 dark:text-neutral-300">
<span>Migration Strategy</span>
<span>100%</span>
</div>
<div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full rounded-full progress-bar bg-emerald-500 dark:bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" style={{width: '100%'}}></div>
</div>
</div><div className="space-y-2">
<div className="flex justify-between text-xs font-medium text-neutral-600 dark:text-neutral-300">
<span>Automation for Jira</span>
<span>100%</span>
</div>
<div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full rounded-full progress-bar bg-emerald-500 dark:bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" style={{width: '100%'}}></div>
</div>
</div><div className="space-y-2">
<div className="flex justify-between text-xs font-medium text-neutral-600 dark:text-neutral-300">
<span>Screen Schemes</span>
<span>100%</span>
</div>
<div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full rounded-full progress-bar bg-emerald-500 dark:bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" style={{width: '100%'}}></div>
</div>
</div></div>
<div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-4 text-[10px] text-neutral-400 flex-shrink-0">
<span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Expert / Master</span>
<span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-400"></span>Proficient</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="w-full px-8 py-6 flex justify-between items-end z-20 shrink-0 pointer-events-none">
<div className="pointer-events-auto flex gap-4">
<a className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
<a className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="text-[10px] text-neutral-500 dark:text-neutral-600 font-mono text-right">
            CERTIFIED ADMINISTRATOR<br/>
            © 2019-2025 JIRA NINJA
        </div>
</footer>

<div className="fixed inset-0 z-50 hidden flex items-center justify-center p-4" id="contactModal">
<div className="absolute inset-0 bg-neutral-900/40 dark:bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>
<div className="relative w-full max-w-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-jira-border rounded-xl shadow-2xl p-6 animate-fade-in">
<button className="absolute top-4 right-4 text-neutral-400 hover:text-black dark:hover:text-white transition-colors" onclick="closeModal()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-1 tracking-tight">Get in touch</h3>
<p className="text-sm text-neutral-500 mb-6 font-light">Let's optimize your Atlassian ecosystem.</p>
<form action="mailto:pam33na@yahoo.com" className="space-y-4" enctype="text/plain" method="post">
<div>
<label className="block text-xs font-medium text-neutral-700 dark:text-neutral-400 mb-1.5 uppercase tracking-wide">Name</label>
<input className="w-full bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-900 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-neutral-400" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 dark:text-neutral-400 mb-1.5 uppercase tracking-wide">Email</label>
<input className="w-full bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-900 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-neutral-400" name="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 dark:text-neutral-400 mb-1.5 uppercase tracking-wide">Interest</label>
<div className="relative">
<select className="w-full bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-900 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all appearance-none" name="interest">
<option>ScriptRunner Automation</option>
<option>Instance Audit</option>
<option>Migration Support</option>
</select>
<svg aria-hidden="true" className="iconify absolute right-3 top-2.5 text-neutral-400 pointer-events-none iconify--lucide" data-icon="lucide:chevron-down" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 dark:text-neutral-400 mb-1.5 uppercase tracking-wide">Message</label>
<textarea className="w-full bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-900 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-neutral-400" name="message" placeholder="Describe your challenge..." rows="3"></textarea>
</div>
<button className="w-full bg-neutral-900 dark:bg-white text-white dark:text-black font-medium py-2.5 rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors text-sm flex justify-center items-center gap-2" type="submit">
                    Send Message
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:send" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>


    </>
  );
}
