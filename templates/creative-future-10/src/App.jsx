import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function switchPage(pageId) {
            // Smoothly hide all sections
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
                setTimeout(() => {
                    if(!el.classList.contains('active')) el.style.display = 'none';
                }, 400);
            });

            // Update Nav visual state
            document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
            // Very basic router matching logic
            const navLinks = document.querySelectorAll('.nav-link');
            if(pageId === 'home') navLinks[0]?.classList.add('active');
            if(pageId === 'curriculum') navLinks[1]?.classList.add('active');
            if(pageId === 'portal') navLinks[2]?.classList.add('active');
            if(pageId === 'support') navLinks[3]?.classList.add('active');

            // Show selected section
            const selected = document.getElementById(pageId);
            if(selected) {
                selected.style.display = 'block';
                requestAnimationFrame(() => {
                    selected.classList.add('active');
                });
                window.scrollTo(0, 0);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer group" onclick="switchPage('home')">
<div className="w-8 h-8 bg-white text-black rounded-md flex items-center justify-center font-bold tracking-tighter">
                    CF
                </div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white tracking-tight">CREATIVE FUTURE</span>
<span className="text-[9px] text-neutral-500 uppercase tracking-widest">Training Initiative</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<button className="nav-link active hover:text-white transition-colors" onclick="switchPage('home')">Program</button>
<button className="nav-link hover:text-white transition-colors" onclick="switchPage('curriculum')">Modules</button>
<button className="nav-link hover:text-white transition-colors flex items-center gap-1" onclick="switchPage('portal')">
<span className="iconify" data-icon="lucide:layout-dashboard" data-width="12"></span> Portal
                </button>
<button className="nav-link hover:text-white transition-colors" onclick="switchPage('support')">Support</button>
</div>
<div className="flex items-center gap-3">
<button className="text-xs font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" onclick="switchPage('portal')">Student Login</button>
<button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-full transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(79,70,229,0.3)]" onclick="switchPage('apply')">
                    Check Eligibility
                </button>
</div>
</div>
</nav>

<main className="relative z-10 pt-16 flex-grow">

<section className="view-section active" id="home">

<header className="relative pt-24 pb-20 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto relative z-10 text-center">

<div className="flex justify-center items-center gap-4 mb-8">
<div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-3 backdrop-blur-sm">
<span className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">In Partnership With</span>
<div className="h-3 w-[1px] bg-white/20"></div>
<span className="text-xs font-semibold text-white tracking-tight">Mastercard Foundation</span>
<span className="text-xs font-semibold text-neutral-400">&amp;</span>
<span className="text-xs font-semibold text-white tracking-tight">Del-York Group</span>
</div>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1] max-w-4xl mx-auto">
                        Training <span className="text-indigo-400">60,000 Students</span> in 3D Animation &amp; Post-Production
                    </h1>
<p className="text-lg text-neutral-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                        A tuition-free, intensive digital skills program designed to empower the next generation of storytellers and creative technologists across the continent.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-2" onclick="switchPage('apply')">
                            Apply for Cohort C
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2" onclick="switchPage('curriculum')">
                            Download Syllabus
                            <span className="iconify" data-icon="lucide:download" data-width="16"></span>
</button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 backdrop-blur-sm text-center group hover:border-indigo-500/30 transition-colors">
<div className="text-3xl font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">60k</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Total Enrollment</div>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 backdrop-blur-sm text-center group hover:border-green-500/30 transition-colors">
<div className="text-3xl font-semibold text-white mb-1 group-hover:text-green-400 transition-colors">94%</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Completion Rate</div>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 backdrop-blur-sm text-center group hover:border-purple-500/30 transition-colors">
<div className="text-3xl font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">120+</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Industry Mentors</div>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 backdrop-blur-sm text-center group hover:border-orange-500/30 transition-colors">
<div className="text-3xl font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">15</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Regions Covered</div>
</div>
</div>
</div>
</header>

<section className="py-20 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-medium border border-indigo-500/20 mb-6">
<span className="iconify" data-icon="lucide:globe" data-width="12"></span>
                            Pan-African Initiative
                        </div>
<h2 className="text-3xl font-medium text-white mb-4">Bridging the Digital Divide</h2>
<p className="text-sm text-neutral-400 leading-relaxed mb-8">
                            Our program is optimized for accessibility. We provide offline-first learning materials and mobile-optimized content to ensure students in low-bandwidth regions can succeed without interruption.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:smartphone" data-width="18"></span>
</div>
<div>
<h4 className="text-sm font-medium text-white">Mobile Optimized</h4>
<p className="text-xs text-neutral-500">Learn on any device, anywhere.</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:wifi-off" data-width="18"></span>
</div>
<div>
<h4 className="text-sm font-medium text-white">Offline Access</h4>
<p className="text-xs text-neutral-500">Download resources for offline study.</p>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-black to-black"></div>

<div className="absolute w-2 h-2 bg-indigo-500 rounded-full top-1/4 left-1/3 animate-ping"></div>
<div className="absolute w-1.5 h-1.5 bg-indigo-400 rounded-full top-1/2 left-1/2 animate-ping delay-75"></div>
<div className="absolute w-2 h-2 bg-purple-500 rounded-full top-3/4 left-1/3 animate-ping delay-150"></div>
<div className="absolute w-1.5 h-1.5 bg-indigo-300 rounded-full top-1/3 left-2/3 animate-ping delay-300"></div>
<div className="text-center relative z-10">
<span className="iconify text-neutral-700" data-icon="lucide:map" data-width="120"></span>
<div className="mt-4 text-xs font-medium text-neutral-500">Active Learning Nodes</div>
</div>
</div>
</div>
</section>
</section>

<section className="view-section" id="curriculum">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-2">Technical Curriculum</h2>
<p className="text-neutral-400 text-sm">Industry-standard workflows designed for employability.</p>
</div>
<div className="flex items-center gap-2 text-xs bg-green-900/20 text-green-400 px-3 py-1.5 rounded-full border border-green-500/20">
<span className="iconify" data-icon="lucide:badge-check" data-width="14"></span>
                        Accredited Certification
                    </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-neutral-900/50 border border-white/5 p-6 rounded-xl hover:bg-neutral-800 transition-colors">
<div className="h-10 w-10 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
<span className="iconify" data-icon="lucide:pencil-ruler" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2">Storyboarding</h3>
<p className="text-xs text-neutral-400 mb-4 leading-relaxed">Pre-production fundamentals, visual storytelling, and animatic creation using industry tools.</p>
<div className="flex items-center gap-2 text-[10px] text-neutral-500 border-t border-white/5 pt-4">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span> 4 Weeks
                            <span className="mx-1">•</span>
<span>Beginner</span>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 p-6 rounded-xl hover:bg-neutral-800 transition-colors">
<div className="h-10 w-10 rounded bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
<span className="iconify" data-icon="lucide:box" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2">3D Animation</h3>
<p className="text-xs text-neutral-400 mb-4 leading-relaxed">Core mechanics, body dynamics, acting for animation, and character rigging.</p>
<div className="flex items-center gap-2 text-[10px] text-neutral-500 border-t border-white/5 pt-4">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span> 12 Weeks
                            <span className="mx-1">•</span>
<span>Intermediate</span>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 p-6 rounded-xl hover:bg-neutral-800 transition-colors">
<div className="h-10 w-10 rounded bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4">
<span className="iconify" data-icon="lucide:wand-2" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2">VFX &amp; Compositing</h3>
<p className="text-xs text-neutral-400 mb-4 leading-relaxed">Green screen keying, rotoscoping, particle effects, and final render integration.</p>
<div className="flex items-center gap-2 text-[10px] text-neutral-500 border-t border-white/5 pt-4">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span> 10 Weeks
                            <span className="mx-1">•</span>
<span>Advanced</span>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 p-6 rounded-xl hover:bg-neutral-800 transition-colors">
<div className="h-10 w-10 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
<span className="iconify" data-icon="lucide:monitor-play" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2">Post-Production</h3>
<p className="text-xs text-neutral-400 mb-4 leading-relaxed">Video editing, color grading, sound design, and mastering for broadcast.</p>
<div className="flex items-center gap-2 text-[10px] text-neutral-500 border-t border-white/5 pt-4">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span> 8 Weeks
                            <span className="mx-1">•</span>
<span>All Levels</span>
</div>
</div>
</div>
<div className="mt-12 bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 className="text-white font-medium text-lg">See a sample lesson</h3>
<p className="text-neutral-400 text-xs mt-1">Watch a 5-minute excerpt from our Character Design module.</p>
</div>
<button className="flex items-center gap-3 px-5 py-3 bg-white text-black rounded-lg text-xs font-medium hover:bg-neutral-200 transition-colors">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                        Watch Preview
                    </button>
</div>
</div>
</section>

<section className="view-section" id="portal">
<div className="max-w-7xl mx-auto px-4 md:px-6 py-6 h-[calc(100vh-64px)] flex gap-6">

<div className="w-64 hidden lg:flex flex-col bg-neutral-900/80 backdrop-blur border border-white/5 rounded-xl p-4">
<div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">AM</div>
<div>
<div className="text-sm font-medium text-white">Alex M.</div>
<div className="text-[10px] text-neutral-400">Cohort C • 3D Track</div>
</div>
</div>
<div className="space-y-1">
<button className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-white bg-white/10 rounded-lg">
<span className="flex items-center gap-3"><span className="iconify" data-icon="lucide:layout"></span> Dashboard</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"><span className="iconify" data-icon="lucide:book-open"></span> My Courses</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"><span className="iconify" data-icon="lucide:calendar"></span> Schedule</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"><span className="iconify" data-icon="lucide:users"></span> Community</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"><span className="iconify" data-icon="lucide:trophy"></span> Certificates</button>
</div>
<div className="mt-8">
<h4 className="px-3 text-[10px] uppercase text-neutral-500 font-semibold mb-2">Offline Mode</h4>
<div className="px-3 py-3 bg-neutral-800/50 rounded-lg border border-white/5">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-white">Low Bandwidth</span>
<div className="w-8 h-4 bg-green-500/20 rounded-full relative cursor-pointer border border-green-500/50">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
</div>
</div>
<p className="text-[9px] text-neutral-500">Text-only lessons enabled.</p>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto pr-2">

<div className="mb-6 p-4 rounded-xl bg-indigo-900/10 border border-indigo-500/20 flex items-start gap-3">
<span className="iconify text-indigo-400 mt-0.5" data-icon="lucide:bell" data-width="16"></span>
<div>
<h4 className="text-sm text-indigo-200 font-medium">Assignment Deadline Approaching</h4>
<p className="text-xs text-indigo-200/60 mt-0.5">"Principles of Animation: Squash &amp; Stretch" is due in 2 days. Submit via the portal.</p>
</div>
</div>
<h2 className="text-xl font-medium text-white mb-6">Current Progress</h2>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
<div className="lg:col-span-2 p-6 rounded-xl bg-gradient-to-r from-neutral-800 to-neutral-900 border border-white/10 relative overflow-hidden group">
<div className="absolute right-4 top-4 bg-black/40 backdrop-blur px-2 py-1 rounded text-[10px] text-white flex items-center gap-1">
<span className="relative flex h-2 w-2 mr-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                                In Progress
                            </div>
<h3 className="text-lg text-white font-medium mb-1 relative z-10">Advanced 3D Rigging</h3>
<p className="text-xs text-neutral-400 mb-6 relative z-10 w-2/3">Module 3: Facial Topography and Blendshapes</p>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<button className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-white/10">
<span className="iconify" data-icon="lucide:play" data-width="16" style={{marginLeft: '2px'}}></span>
</button>
<div className="flex-1 max-w-sm">
<div className="flex justify-between text-[10px] text-neutral-400 mb-1">
<span>75% Complete</span>
<span>3 Lessons Left</span>
</div>
<div className="w-full h-1 bg-neutral-700 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-indigo-500 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-neutral-900 border border-white/5 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
<div>
<div className="flex items-center gap-2 mb-3">
<div className="relative w-2 h-2 pulse-ring">
<div className="w-2 h-2 bg-red-500 rounded-full"></div>
</div>
<span className="text-[10px] uppercase tracking-wider text-red-400 font-medium">Upcoming Webinar</span>
</div>
<h4 className="text-white font-medium text-sm leading-tight mb-2">Career Talk: Breaking into the Industry</h4>
<p className="text-[11px] text-neutral-400">Guest Speaker: Sarah Jenkins (Pixar)</p>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
<span className="text-[10px] text-neutral-500">Tomorrow, 4:00 PM GMT</span>
<button className="text-[10px] bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded border border-white/10 text-white transition-colors">Register</button>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white">Course Materials</h3>
<button className="text-[10px] text-indigo-400 hover:text-indigo-300">View All Downloads</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-3 rounded-lg bg-neutral-900 border border-white/5 hover:border-white/20 transition-all flex items-center gap-3 group cursor-pointer">
<div className="h-8 w-8 rounded bg-red-500/10 flex items-center justify-center text-red-400 group-hover:bg-red-500/20 transition-colors">
<span className="iconify" data-icon="lucide:file-text" data-width="16"></span>
</div>
<div className="flex-1 overflow-hidden">
<div className="text-xs text-white font-medium truncate">Rigging_Manual_v2.pdf</div>
<div className="text-[10px] text-neutral-500 flex items-center gap-1">
<span className="iconify" data-icon="lucide:download-cloud" data-width="10"></span> 2.4 MB
                                </div>
</div>
<button className="text-neutral-500 hover:text-white"><span className="iconify" data-icon="lucide:download" data-width="14"></span></button>
</div>
<div className="p-3 rounded-lg bg-neutral-900 border border-white/5 hover:border-white/20 transition-all flex items-center gap-3 group cursor-pointer">
<div className="h-8 w-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
<span className="iconify" data-icon="lucide:video" data-width="16"></span>
</div>
<div className="flex-1 overflow-hidden">
<div className="text-xs text-white font-medium truncate">Week4_Lecture_LowRes.mp4</div>
<div className="text-[10px] text-neutral-500 flex items-center gap-1">
<span className="iconify" data-icon="lucide:download-cloud" data-width="10"></span> 45 MB
                                </div>
</div>
<button className="text-neutral-500 hover:text-white"><span className="iconify" data-icon="lucide:download" data-width="14"></span></button>
</div>
<div className="p-3 rounded-lg bg-neutral-900 border border-white/5 hover:border-white/20 transition-all flex items-center gap-3 group cursor-pointer">
<div className="h-8 w-8 rounded bg-yellow-500/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500/20 transition-colors">
<span className="iconify" data-icon="lucide:folder-archive" data-width="16"></span>
</div>
<div className="flex-1 overflow-hidden">
<div className="text-xs text-white font-medium truncate">Project_Assets.zip</div>
<div className="text-[10px] text-neutral-500 flex items-center gap-1">
<span className="iconify" data-icon="lucide:download-cloud" data-width="10"></span> 120 MB
                                </div>
</div>
<button className="text-neutral-500 hover:text-white"><span className="iconify" data-icon="lucide:download" data-width="14"></span></button>
</div>
</div>
</div>
</div>
</section>

<section className="view-section" id="support">
<div className="max-w-4xl mx-auto px-6 py-20">
<div className="text-center mb-12">
<h2 className="text-2xl font-medium text-white mb-2">Student Support &amp; Safety</h2>
<p className="text-sm text-neutral-400">We are committed to a safe, inclusive, and supportive learning environment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
<div className="bg-neutral-900/50 border border-white/5 p-6 rounded-xl">
<div className="flex items-center gap-3 mb-4">
<div className="h-8 w-8 bg-indigo-500/20 text-indigo-400 rounded-lg flex items-center justify-center">
<span className="iconify" data-icon="lucide:help-circle" data-width="18"></span>
</div>
<h3 className="text-white font-medium">FAQ &amp; Help Center</h3>
</div>
<ul className="space-y-3">
<li className="text-xs text-neutral-400 hover:text-white cursor-pointer flex justify-between border-b border-white/5 pb-2">
                                How do I access offline materials? <span className="iconify" data-icon="lucide:chevron-right"></span>
</li>
<li className="text-xs text-neutral-400 hover:text-white cursor-pointer flex justify-between border-b border-white/5 pb-2">
                                Hardware requirements for 3D? <span className="iconify" data-icon="lucide:chevron-right"></span>
</li>
<li className="text-xs text-neutral-400 hover:text-white cursor-pointer flex justify-between border-b border-white/5 pb-2">
                                Certification validity? <span className="iconify" data-icon="lucide:chevron-right"></span>
</li>
</ul>
</div>
<div className="bg-neutral-900/50 border border-white/5 p-6 rounded-xl">
<div className="flex items-center gap-3 mb-4">
<div className="h-8 w-8 bg-red-500/20 text-red-400 rounded-lg flex items-center justify-center">
<span className="iconify" data-icon="lucide:shield-check" data-width="18"></span>
</div>
<h3 className="text-white font-medium">Safeguarding</h3>
</div>
<p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                            Zero tolerance policy for harassment. Our safeguarding team is available 24/7 to ensure your digital safety.
                        </p>
<div className="flex gap-3">
<button className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-xs text-white">Read Policy</button>
<button className="flex-1 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded text-xs text-red-400">Report Issue</button>
</div>
</div>
</div>
</div>
</section>

<section className="view-section" id="apply">
<div className="max-w-xl mx-auto px-6 py-20">
<div className="bg-neutral-900 border border-white/5 rounded-2xl p-8">
<h2 className="text-xl font-medium text-white mb-2">Cohort C Eligibility Check</h2>
<p className="text-xs text-neutral-400 mb-6">Applications close in 14 days.</p>
<form className="space-y-4">
<div>
<label className="block text-[10px] uppercase text-neutral-500 mb-1 font-medium">Full Legal Name</label>
<input className="w-full bg-black border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" placeholder="Enter name" type="text"/>
</div>
<div>
<label className="block text-[10px] uppercase text-neutral-500 mb-1 font-medium">Country of Residence</label>
<select className="w-full bg-black border border-white/10 rounded px-3 py-2 text-sm text-neutral-300 focus:outline-none focus:border-indigo-500">
<option>Select Country</option>
<option>Nigeria</option>
<option>Ghana</option>
<option>Kenya</option>
<option>South Africa</option>
<option>Rwanda</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-[10px] uppercase text-neutral-500 mb-1 font-medium">Internet Access Level</label>
<div className="grid grid-cols-2 gap-2">
<div className="border border-white/10 rounded p-3 cursor-pointer hover:bg-white/5">
<div className="text-xs text-white font-medium">Consistent High Speed</div>
</div>
<div className="border border-white/10 rounded p-3 cursor-pointer hover:bg-white/5">
<div className="text-xs text-white font-medium">Intermittent / Data Limited</div>
</div>
</div>
</div>
<button className="w-full py-3 mt-4 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 transition-colors" type="button">Start Application</button>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black pt-10 pb-10 z-10 text-xs">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="font-bold text-white mb-4">CREATIVE FUTURE INITIATIVE</div>
<p className="text-neutral-500 max-w-xs mb-4">Empowering 60,000 African youths with world-class digital skills in partnership with Mastercard Foundation.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white" href="#"><span className="iconify" data-icon="lucide:twitter"></span></a>
<a className="text-neutral-500 hover:text-white" href="#"><span className="iconify" data-icon="lucide:linkedin"></span></a>
<a className="text-neutral-500 hover:text-white" href="#"><span className="iconify" data-icon="lucide:instagram"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Program</h4>
<ul className="space-y-2 text-neutral-500">
<li className="hover:text-indigo-400 cursor-pointer">Curriculum</li>
<li className="hover:text-indigo-400 cursor-pointer">Admissions</li>
<li className="hover:text-indigo-400 cursor-pointer">Success Stories</li>
<li className="hover:text-indigo-400 cursor-pointer">Mentorship</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal &amp; Support</h4>
<ul className="space-y-2 text-neutral-500">
<li className="hover:text-indigo-400 cursor-pointer">Privacy Policy</li>
<li className="hover:text-indigo-400 cursor-pointer">Safeguarding Policy</li>
<li className="hover:text-indigo-400 cursor-pointer">Code of Conduct</li>
<li className="hover:text-indigo-400 cursor-pointer">Contact Us</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex justify-between text-neutral-600 text-[10px]">
<span>© 2023 Creative Future Initiative. All rights reserved.</span>
<span>Powered by Del-York Creative Academy</span>
</div>
</footer>


    </>
  );
}
