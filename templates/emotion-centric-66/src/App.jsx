import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple View Router
        function switchTab(tabName) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-content');
            pages.forEach(page => {
                page.classList.add('hidden');
                page.classList.remove('flex');
            });

            // Show selected page
            const selectedPage = document.getElementById('page-' + tabName);
            if(selectedPage) {
                selectedPage.classList.remove('hidden');
                selectedPage.classList.add('flex');
            }

            // Update Header Title
            const titles = {
                'feed': 'Your Feed',
                'reflections': 'Your Journal',
                'trends': 'Analysis',
                'ethics': 'Settings'
            };
            document.getElementById('header-title').innerText = titles[tabName] || 'SENSE';

            // Reset all Nav Buttons styles
            const navButtons = document.querySelectorAll('#main-nav button');
            navButtons.forEach(btn => {
                // Inactive Style
                btn.classList.remove('bg-white', 'text-zinc-900', 'shadow-sm', 'border-zinc-200');
                btn.classList.add('text-zinc-500', 'hover:text-zinc-900', 'hover:bg-zinc-100', 'border-transparent');
                
                // Reset Icon color
                const icon = btn.querySelector('.iconify');
                if(icon) icon.classList.remove('text-zinc-800');
            });

            // Set Active Nav Button Style
            const activeBtn = document.getElementById('nav-' + tabName);
            if(activeBtn) {
                activeBtn.classList.remove('text-zinc-500', 'hover:text-zinc-900', 'hover:bg-zinc-100', 'border-transparent');
                activeBtn.classList.add('bg-white', 'text-zinc-900', 'shadow-sm', 'border-zinc-200');
                
                const activeIcon = activeBtn.querySelector('.iconify');
                if(activeIcon) activeIcon.classList.add('text-zinc-800');
            }

            // Close mobile menu if open
            const mobileSidebar = document.getElementById('mobile-sidebar');
            if (mobileSidebar.classList.contains('sidebar-open')) {
                toggleMobileMenu();
            }
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const sidebar = document.getElementById('mobile-sidebar');
            sidebar.classList.toggle('sidebar-open');
            sidebar.classList.toggle('-translate-x-full');
            
            // Clone nav if empty (simple hydration)
            const container = document.getElementById('mobile-nav-container');
            if(container.children.length === 0) {
                const navLinks = [
                    {id: 'feed', text: 'Smart Feed', icon: 'layout-grid'},
                    {id: 'reflections', text: 'Reflections', icon: 'book-open'},
                    {id: 'trends', text: 'Emotional Trends', icon: 'activity'},
                    {id: 'ethics', text: 'Ethics & Privacy', icon: 'shield-check'}
                ];
                
                navLinks.forEach(link => {
                    const btn = document.createElement('button');
                    btn.className = "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors text-left";
                    btn.innerHTML = `<span class="iconify" data-icon="lucide:${link.icon}" data-width="18"></span> ${link.text}`;
                    btn.onclick = () => switchTab(link.id);
                    container.appendChild(btn);
                });
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="md:hidden flex items-center justify-between p-4 border-b border-zinc-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="font-semibold tracking-tighter text-lg flex items-center gap-2">
<div className="w-4 h-4 bg-zinc-900 rounded-full flex items-center justify-center">
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
            SENSE
        </div>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors" onclick="toggleMobileMenu()">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>

<div className="fixed inset-0 z-40 transform -translate-x-full md:hidden bg-zinc-50 flex flex-col w-64 border-r border-zinc-200 h-full shadow-2xl" id="mobile-sidebar">
<div className="p-4 flex justify-between items-center border-b border-zinc-200">
<span className="font-semibold tracking-tighter">Menu</span>
<button className="text-zinc-500" onclick="toggleMobileMenu()"><span className="iconify" data-icon="lucide:x" data-width="20"></span></button>
</div>

<div className="flex-1 p-4 space-y-2" id="mobile-nav-container">

</div>
</div>

<aside className="hidden md:flex w-64 flex-col border-r border-zinc-200 bg-zinc-50/50 h-full justify-between pt-6 pb-6 pl-4 pr-4">
<div>

<div className="flex items-center gap-2 mb-8 px-2 cursor-pointer" onclick="switchTab('feed')">
<div className="w-5 h-5 bg-zinc-900 rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="font-semibold tracking-tighter text-lg">SENSE</span>
</div>

<nav className="space-y-1" id="main-nav">
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm font-medium text-zinc-900 bg-white border border-zinc-200 shadow-sm rounded-md transition-all" id="nav-feed" onclick="switchTab('feed')">
<span className="iconify" data-icon="lucide:layout-grid" data-width="18"></span>
                    Smart Feed
                </button>
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 border border-transparent rounded-md transition-all" id="nav-reflections" onclick="switchTab('reflections')">
<span className="iconify" data-icon="lucide:book-open" data-width="18"></span>
                    Reflections
                </button>
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 border border-transparent rounded-md transition-all" id="nav-trends" onclick="switchTab('trends')">
<span className="iconify" data-icon="lucide:activity" data-width="18"></span>
                    Emotional Trends
                </button>
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 border border-transparent rounded-md transition-all" id="nav-ethics" onclick="switchTab('ethics')">
<span className="iconify" data-icon="lucide:shield-check" data-width="18"></span>
                    Ethics &amp; Privacy
                </button>
</nav>
<div className="mt-8">
<div className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3 px-2">Library</div>
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors text-left">
<span className="iconify" data-icon="lucide:bookmark" data-width="18"></span>
                        Saved Insights
                    </button>
<button className="w-full flex items-center gap-3 px-2 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors text-left">
<span className="iconify" data-icon="lucide:history" data-width="18"></span>
                        Reading History
                    </button>
</nav>
</div>
</div>

<div className="border-t border-zinc-200 pt-4 mt-auto">
<button className="flex items-center gap-3 w-full px-2 hover:bg-zinc-100 py-2 rounded-md transition-colors">
<div className="w-8 h-8 rounded-full bg-zinc-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover grayscale opacity-80" src="https://api.dicebear.com/9.x/notionists/svg?seed=Alex"/>
</div>
<div className="text-left">
<div className="text-sm font-medium text-zinc-900">Alex M.</div>
<div className="text-xs text-zinc-500">Free Plan</div>
</div>
<span className="iconify ml-auto text-zinc-400" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative bg-white md:bg-transparent">

<header className="h-16 border-b border-zinc-200 flex items-center justify-between px-6 bg-white/50 backdrop-blur-sm z-10">
<div className="flex items-center gap-4">
<h1 className="text-sm font-semibold text-zinc-900" id="header-title">Your Feed</h1>
<div className="h-4 w-px bg-zinc-300 hidden sm:block"></div>
<div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500 bg-zinc-100 px-2 py-1 rounded-md">
<span className="iconify text-emerald-600" data-icon="lucide:brain-circuit" data-width="14"></span>
<span>AI Mode: <strong>Calm &amp; Objective</strong></span>
</div>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:inline text-xs text-zinc-400 font-medium">DENSITY</span>
<div className="hidden sm:block w-24">
<input max="100" min="1" type="range" value="30"/>
</div>
<button className="p-2 text-zinc-500 hover:bg-zinc-100 rounded-md relative">
<div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></div>
<span className="iconify" data-icon="lucide:bell" data-width="18"></span>
</button>
</div>
</header>

<div className="page-content flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth fade-in" id="page-feed">
<div className="max-w-2xl mx-auto space-y-10">

<section className="mb-12">
<div className="flex items-center justify-between mb-4">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Good morning, Alex.</h2>
<span className="text-xs text-zinc-400">Oct 24 • Thursday</span>
</div>
<p className="text-zinc-500 mb-6 text-sm">Based on your recent reading patterns, we've prioritized analysis over breaking news to reduce anxiety.</p>
<div className="flex gap-2 p-1 bg-zinc-100/80 rounded-lg inline-flex border border-zinc-200/50">
<button className="px-4 py-1.5 text-xs font-medium bg-white text-zinc-900 shadow-sm rounded border border-zinc-200 transition-all">Focused</button>
<button className="px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Curious</button>
<button className="px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Relaxed</button>
</div>
</section>

<article className="group relative bg-white border border-zinc-200 rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:border-zinc-300 transition-all duration-300">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-2">
<span className="bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider border border-zinc-200">Global Economy</span>
<span className="flex items-center gap-1 text-[10px] text-zinc-400">
<span className="iconify" data-icon="lucide:wand-2" data-width="10"></span>
                                De-sensationalized
                            </span>
</div>
<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-zinc-400 hover:text-zinc-900"><span className="iconify" data-icon="lucide:bookmark" data-width="16"></span></button>
</div>
</div>
<h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2 group-hover:text-blue-900 transition-colors">Central banks adjust interest rates amidst inflation data stabilization.</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">
                        Major financial institutions have paused rate hikes following new reports indicating inflation has leveled off. The original articles contained high speculative fear; this summary focuses on confirmed policy changes.
                    </p>
<div className="flex items-center justify-between border-t border-zinc-100 pt-4 mt-2">
<div className="flex items-center gap-4 text-xs text-zinc-400">
<span>Synthesis of 14 sources</span>
<span>•</span>
<span>2 min read</span>
</div>
<button className="text-xs font-medium text-zinc-900 flex items-center gap-1 hover:underline">
                            Read Deep Dive
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</button>
</div>
</article>
<article className="group relative bg-white border border-zinc-200 rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:border-zinc-300 transition-all duration-300">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-2">
<span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider border border-blue-100">Innovation</span>
<span className="flex items-center gap-1 text-[10px] text-zinc-400">
<span className="iconify" data-icon="lucide:sparkles" data-width="10"></span>
                                Optimistic Outlook
                            </span>
</div>
</div>
<h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2 group-hover:text-blue-900 transition-colors">Breakthrough in carbon capture technology shows scalability promise.</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">
                        Researchers have successfully tested a new membrane that captures CO2 at 40% higher efficiency than current standards.
                    </p>
<div className="flex items-center gap-3">
<div className="flex-1 bg-zinc-50 rounded px-3 py-2 border border-zinc-100 flex items-center justify-between group-hover:border-zinc-200 transition-colors cursor-pointer">
<span className="text-xs text-zinc-500 italic">"How does this news impact your view on climate future?"</span>
<span className="iconify text-zinc-400" data-icon="lucide:pen-line" data-width="14"></span>
</div>
</div>
</article>
<div className="flex flex-col items-center justify-center py-12 text-center">
<div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-4 text-zinc-400">
<span className="iconify" data-icon="lucide:check" data-width="24"></span>
</div>
<h4 className="text-sm font-medium text-zinc-900">You are up to date.</h4>
</div>
</div>
</div>

<div className="page-content hidden flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth fade-in" id="page-reflections">
<div className="max-w-2xl mx-auto">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Reflections</h2>
<button className="text-sm border border-zinc-200 px-3 py-1.5 rounded-md hover:bg-zinc-50 transition-colors">Export Log</button>
</div>
<div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm mb-8">
<textarea className="w-full text-base placeholder:text-zinc-400 text-zinc-800 resize-none outline-none min-h-[120px]" placeholder="What's on your mind today?"></textarea>
<div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100">
<div className="flex gap-2">
<button className="p-2 hover:bg-zinc-100 rounded-md text-zinc-500"><span className="iconify" data-icon="lucide:mic" data-width="18"></span></button>
<button className="p-2 hover:bg-zinc-100 rounded-md text-zinc-500"><span className="iconify" data-icon="lucide:image" data-width="18"></span></button>
</div>
<button className="bg-zinc-900 text-white text-sm px-4 py-2 rounded-md font-medium hover:bg-zinc-800 transition-colors">Save Entry</button>
</div>
</div>
<div className="space-y-6">
<div className="relative pl-8 border-l border-zinc-200 pb-8">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-zinc-200 rounded-full border-2 border-white"></div>
<div className="text-xs text-zinc-400 mb-1">Yesterday, 9:42 PM</div>
<p className="text-zinc-800 text-sm leading-relaxed">Felt a bit overwhelmed by the economic news, but the SENSE summary helped me realize it's mostly speculation. Focusing on what I can control today.</p>
<div className="mt-2 flex gap-2">
<span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100">Calm</span>
<span className="text-[10px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded border border-zinc-200">Economy</span>
</div>
</div>
<div className="relative pl-8 border-l border-zinc-200 pb-2">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-zinc-200 rounded-full border-2 border-white"></div>
<div className="text-xs text-zinc-400 mb-1">Oct 22, 8:15 AM</div>
<p className="text-zinc-800 text-sm leading-relaxed">Interesting article about carbon capture. It gives me some hope for the long term. I wonder if I can invest in this sector?</p>
</div>
</div>
</div>
</div>

<div className="page-content hidden flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth fade-in" id="page-trends">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-8">Emotional Trends</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
<div className="text-zinc-500 text-xs uppercase tracking-wider font-medium mb-2">Weekly Average</div>
<div className="text-3xl font-semibold text-zinc-900">Stable</div>
<div className="text-emerald-600 text-xs mt-1 flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span>
                            12% improvement
                        </div>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
<div className="text-zinc-500 text-xs uppercase tracking-wider font-medium mb-2">Top Trigger</div>
<div className="text-3xl font-semibold text-zinc-900">Politics</div>
<div className="text-zinc-400 text-xs mt-1">Filtered 8 times</div>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm">
<div className="text-zinc-500 text-xs uppercase tracking-wider font-medium mb-2">Consumption</div>
<div className="text-3xl font-semibold text-zinc-900">42m</div>
<div className="text-zinc-400 text-xs mt-1">Daily avg</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm mb-8">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-semibold text-zinc-900">Mood vs. Consumption</h3>
<select className="text-xs bg-zinc-50 border border-zinc-200 rounded px-2 py-1 outline-none">
<option>Last 7 Days</option>
<option>Last 30 Days</option>
</select>
</div>

<div className="flex items-end justify-between h-48 gap-2 pt-4 border-b border-zinc-100 pb-2">
<div className="w-full bg-blue-50 hover:bg-blue-100 rounded-t-md relative group transition-all" style={{height: '40%'}}>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-zinc-800 text-white text-[10px] px-2 py-1 rounded">Mon</div>
</div>
<div className="w-full bg-blue-50 hover:bg-blue-100 rounded-t-md relative group transition-all" style={{height: '65%'}}>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-zinc-800 text-white text-[10px] px-2 py-1 rounded">Tue</div>
</div>
<div className="w-full bg-blue-50 hover:bg-blue-100 rounded-t-md relative group transition-all" style={{height: '50%'}}>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-zinc-800 text-white text-[10px] px-2 py-1 rounded">Wed</div>
</div>
<div className="w-full bg-amber-100 hover:bg-amber-200 rounded-t-md relative group transition-all" style={{height: '85%'}}>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-zinc-800 text-white text-[10px] px-2 py-1 rounded">Thu</div>
</div>
<div className="w-full bg-blue-50 hover:bg-blue-100 rounded-t-md relative group transition-all" style={{height: '45%'}}>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-zinc-800 text-white text-[10px] px-2 py-1 rounded">Fri</div>
</div>
<div className="w-full bg-blue-50 hover:bg-blue-100 rounded-t-md relative group transition-all" style={{height: '30%'}}>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-zinc-800 text-white text-[10px] px-2 py-1 rounded">Sat</div>
</div>
<div className="w-full bg-blue-50 hover:bg-blue-100 rounded-t-md relative group transition-all" style={{height: '25%'}}>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-zinc-800 text-white text-[10px] px-2 py-1 rounded">Sun</div>
</div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-zinc-400 font-mono">
<span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
</div>
</div>
</div>
</div>

<div className="page-content hidden flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth fade-in" id="page-ethics">
<div className="max-w-2xl mx-auto">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-zinc-100 rounded-lg">
<span className="iconify text-zinc-900" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Ethics &amp; Data Privacy</h2>
</div>
<div className="bg-zinc-900 text-white rounded-xl p-6 mb-8 relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-semibold text-lg mb-2">Our Manifesto</h3>
<p className="text-zinc-300 text-sm leading-relaxed mb-4">SENSE is built on the belief that technology should protect your emotional well-being, not exploit it. We do not sell your data. We do not optimize for engagement.</p>
<div className="flex gap-2">
<div className="text-[10px] border border-zinc-700 bg-zinc-800/50 px-2 py-1 rounded">Local Processing</div>
<div className="text-[10px] border border-zinc-700 bg-zinc-800/50 px-2 py-1 rounded">No Ads</div>
</div>
</div>

<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-zinc-800 rounded-full blur-2xl opacity-50"></div>
</div>
<h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-widest mb-4 mt-8">Data Controls</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-white border border-zinc-200 rounded-lg">
<div>
<div className="text-sm font-medium text-zinc-900">Local Storage Only</div>
<div className="text-xs text-zinc-500 mt-1">Journal entries never leave your device.</div>
</div>
<div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-zinc-300 appearance-none cursor-not-allowed" disabled="" id="toggle_eth1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-300 cursor-not-allowed opacity-50" htmlFor="toggle_eth1"></label>
</input></div>
</div>
<div className="flex items-center justify-between p-4 bg-white border border-zinc-200 rounded-lg">
<div>
<div className="text-sm font-medium text-zinc-900">AI Bias Transparency</div>
<div className="text-xs text-zinc-500 mt-1">Show label when AI detects bias in source text.</div>
</div>
<div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-zinc-300 appearance-none cursor-pointer transition-all duration-300" id="toggle_eth2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-300 cursor-pointer" htmlFor="toggle_eth2"></label>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-white border border-zinc-200 rounded-lg">
<div>
<div className="text-sm font-medium text-zinc-900">Sensation Filter</div>
<div className="text-xs text-zinc-500 mt-1">Automatically rewrite clickbait headlines.</div>
</div>
<div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-zinc-300 appearance-none cursor-pointer transition-all duration-300" id="toggle_eth3" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-300 cursor-pointer" htmlFor="toggle_eth3"></label>
</div>
</div>
<button className="w-full py-2.5 text-xs text-red-600 border border-red-200 bg-red-50 rounded-lg hover:bg-red-100 transition-colors mt-6 font-medium">
                        Delete All Local Data
                    </button>
</div>
</div>
</div>
</main>

<aside className="hidden xl:flex w-80 flex-col border-l border-zinc-200 bg-white h-full overflow-y-auto">

<div className="p-6 border-b border-zinc-100">
<h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-4">Emotional Pulse</h3>

<div className="h-32 bg-zinc-50 rounded-lg border border-zinc-100 relative overflow-hidden flex items-center justify-center mb-4">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-amber-50 opacity-50"></div>
<svg className="w-full h-12 text-zinc-300 fill-none stroke-current stroke-2" viewbox="0 0 100 20">
<path d="M0 10 Q 25 20 50 10 T 100 10"></path>
</svg>
<div className="absolute bottom-2 right-2 text-[10px] text-zinc-400 font-mono">STABLE</div>
</div>
<div className="grid grid-cols-2 gap-2 text-center">
<div className="bg-zinc-50 p-3 rounded-md border border-zinc-100">
<div className="text-lg font-semibold text-zinc-900">12m</div>
<div className="text-[10px] text-zinc-500 uppercase">Read Time</div>
</div>
<div className="bg-zinc-50 p-3 rounded-md border border-zinc-100">
<div className="text-lg font-semibold text-emerald-600">Low</div>
<div className="text-[10px] text-zinc-500 uppercase">Stress Load</div>
</div>
</div>
</div>

<div className="p-6 border-b border-zinc-100 flex-1">
<h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-4">Quick Reflection</h3>
<div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200 mb-4">
<p className="text-xs text-zinc-600 mb-3 font-medium">SENSE AI Observation:</p>
<p className="text-xs text-zinc-500 italic leading-relaxed">"You spent more time on environmental news today. It seems to spark curiosity rather than anxiety. Would you like to save this topic?"</p>
</div>
<form className="relative">
<textarea className="w-full bg-white border border-zinc-200 rounded-lg p-3 text-sm text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-300 resize-none h-32" placeholder="Write a thought... (Private &amp; Local)"></textarea>
<button className="absolute bottom-2 right-2 p-1.5 bg-zinc-900 text-white rounded hover:bg-zinc-700 transition-colors" type="button">
<span className="iconify" data-icon="lucide:arrow-up" data-width="14"></span>
</button>
</form>
</div>

<div className="p-6 mt-auto bg-zinc-50/50">
<h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-3 flex items-center gap-2">
<span className="iconify text-zinc-400" data-icon="lucide:lock" data-width="12"></span>
                Guardrails Active
            </h3>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-500">Anti-Doomscrolling</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-zinc-300 appearance-none cursor-pointer transition-all duration-300" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-300 cursor-pointer" htmlFor="toggle1"></label>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-200/60 text-[10px] text-zinc-400 leading-tight">
                Your data is processed locally.
            </div>
</div>
</aside>


    </>
  );
}
