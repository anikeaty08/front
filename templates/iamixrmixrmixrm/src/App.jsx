import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
sky: {
50: '#f0f9ff',
100: '#e0f2fe',
200: '#bae6fd',
300: '#7dd3fc',
400: '#38bdf8', // Primary Sky Blue
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
},
slate: {
850: '#1e293b',
}
}
}
}
}



        // Simple Page Router
        function switchPage(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
                // slight delay to allow display:none to apply after animation logic if we were doing complex exits
                // but for simple toggle:
                if(section.id !== pageId) {
                    section.classList.add('hidden');
                }
            });

            // Show target section
            const target = document.getElementById(pageId);
            target.classList.remove('hidden');
            // Trigger reflow to restart animation
            void target.offsetWidth; 
            target.classList.add('active');

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Scroll Animation Observer
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-enter-active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-element').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="hover:text-sky-500 transition-colors text-lg font-semibold text-slate-900 tracking-tighter" href="#" onclick="switchPage('home')">IX.</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
<button className="hover:text-sky-600 transition-colors nav-link" data-target="home" onclick="switchPage('home')">Home</button>
<button className="hover:text-sky-600 transition-colors nav-link" data-target="about" onclick="switchPage('about')">About Me</button>
<button className="hover:text-sky-600 transition-colors nav-link" data-target="projects" onclick="switchPage('projects')">Projects</button>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-slate-100 absolute w-full px-6 py-4 flex flex-col space-y-4 shadow-lg" id="mobile-menu">
<button className="text-left text-sm font-medium text-slate-600" onclick="switchPage('home'); document.getElementById('mobile-menu').classList.add('hidden')">Home</button>
<button className="text-left text-sm font-medium text-slate-600" onclick="switchPage('about'); document.getElementById('mobile-menu').classList.add('hidden')">About Me</button>
<button className="text-left text-sm font-medium text-slate-600" onclick="switchPage('projects'); document.getElementById('mobile-menu').classList.add('hidden')">Projects</button>
</div>
</nav>

<main className="min-h-screen pt-24 pb-20">

<section className="page-section active" id="home">

<div className="md:py-32 text-center max-w-4xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<h1 className="md:text-7xl bg-clip-text animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both text-5xl font-semibold text-slate-900 tracking-tight bg-gradient-to-b from-slate-900 to-slate-700 mb-6">IXRM</h1>
<p className="md:text-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both text-xl font-light italic text-slate-500 tracking-wide mb-10" style={{}}>Maths Enthusiast | Innovator</p>
<div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200 fill-mode-both gap-x-4 gap-y-4 items-center justify-center">
<button className="px-8 py-3 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 hover:scale-105 transition-all shadow-lg shadow-slate-200" onclick="switchPage('projects')">
                        View My Projects
                    </button>
<button className="hover:bg-slate-50 hover:border-slate-300 transition-all text-sm font-medium text-slate-700 bg-white border-slate-200 border rounded-full pt-3 pr-8 pb-3 pl-8" onclick="switchPage('about')">
                        More About Me
                    </button>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
</div>

<div className="max-w-2xl mx-auto px-6 text-center mb-24 scroll-element fade-enter">
</div>

</section>

<section className="page-section hidden" id="about">
<div className="max-w-4xl mx-auto px-6">

<div className="flex flex-col md:flex-row gap-10 items-start mb-20">
<div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden relative shadow-inner">

<div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-300">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="48"></iconify-icon>
</div>
</div>
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">About Me</h2>
<div className="space-y-4 text-slate-600 leading-relaxed font-light text-lg">
<p>
                                I'm a third-year student passionate about the intersection of hardware and intelligence. My journey began when I took apart my first RC car at age eight, and I haven't stopped tinkering since.
                            </p>
<p>
                                Currently, I'm focusing on <span className="text-sky-600 font-medium">soft robotics</span> and bio-inspired design. I believe the most resilient machines are those that mimic nature. Outside of the lab, I organize hackathons and mentor high school robotics teams.
                            </p>
<p>
                                My goal is to develop accessible robotic solutions that can aid in disaster relief and environmental monitoring.
                            </p>
</div>

<div className="mt-8">
<h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Technical Arsenal</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-sky-50 text-sky-700 border border-sky-100 rounded-md text-xs font-medium">Python</span>
<span className="px-3 py-1 bg-sky-50 text-sky-700 border border-sky-100 rounded-md text-xs font-medium">C++</span>
<span className="px-3 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded-md text-xs font-medium">ROS 2</span>
<span className="px-3 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded-md text-xs font-medium">MATLAB</span>
<span className="px-3 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded-md text-xs font-medium">SolidWorks</span>
<span className="px-3 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded-md text-xs font-medium">PyTorch</span>
<span className="px-3 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded-md text-xs font-medium">PCB Design</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-200 pt-12">
<div>
<h3 className="text-lg font-medium text-slate-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-sky-500" icon="lucide:graduation-cap" width="20"></iconify-icon>
                            Education
                        </h3>
<div className="relative pl-6 border-l-2 border-slate-100 space-y-8">
<div className="relative">
<div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-sky-400 shadow-sm"></div>
<h4 className="text-base font-semibold text-slate-900">Massachusetts Institute of Technology</h4>
<p className="text-sm text-slate-500 italic mb-1">B.S. Mechanical Engineering &amp; CS</p>
<p className="text-xs text-slate-400">Expected May 2025 • GPA 3.9/4.0</p>
</div>
<div className="relative">
<div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-slate-300"></div>
<h4 className="text-base font-semibold text-slate-900">Science High School</h4>
<p className="text-sm text-slate-500 italic mb-1">Valedictorian</p>
<p className="text-xs text-slate-400">2017 - 2021</p>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-sky-500" icon="lucide:briefcase" width="20"></iconify-icon>
                            Experience
                        </h3>
<div className="space-y-4">
<div className="group p-4 rounded-xl border border-slate-200 hover:border-sky-200 hover:shadow-sm bg-white transition-all cursor-default">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-semibold text-slate-900">Robotics Research Intern</h4>
<span className="text-xs text-slate-400">Summer 2023</span>
</div>
<p className="text-xs text-slate-500 font-medium mb-2">Boston Dynamics</p>
<p className="text-sm text-slate-600 leading-snug">Developed simulation environments for quadruped locomotion algorithms.</p>
</div>
<div className="group p-4 rounded-xl border border-slate-200 hover:border-sky-200 hover:shadow-sm bg-white transition-all cursor-default">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-semibold text-slate-900">Undergraduate Researcher</h4>
<span className="text-xs text-slate-400">2022 - Present</span>
</div>
<p className="text-xs text-slate-500 font-medium mb-2">MIT Media Lab</p>
<p className="text-sm text-slate-600 leading-snug">Designing soft actuators for prosthetic hands using pneumatic networks.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="projects">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12 text-center md:text-left">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Projects &amp; Innovations</h2>
<p className="text-slate-500 mt-2 font-light">A collection of my technical explorations and builds.</p>
</div>

<div className="flex gap-2 mb-10 overflow-x-auto pb-2">
<button className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium shadow-md">All</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium hover:bg-slate-50">Robotics</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium hover:bg-slate-50">Software</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium hover:bg-slate-50">Research</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<article className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group">
<div className="h-56 bg-gradient-to-br from-sky-50 to-slate-100 relative flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
<iconify-icon className="text-slate-300 group-hover:text-sky-400 transition-colors duration-300 transform group-hover:scale-110" icon="lucide:video" strokeWidth="1" width="64"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-slate-900">Autonomous Search &amp; Rescue Rover</h3>
<a className="text-slate-400 hover:text-sky-600 transition-colors" href="#">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
</a>
</div>
<p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-2">
                                A 4-wheel drive rover capable of navigating unstructured terrain and identifying survivors using thermal imaging. Built for the University Rover Challenge.
                            </p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex gap-2">
<span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">Python</span>
<span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">ROS</span>
<span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">Raspberry Pi</span>
</div>
<span className="text-xs font-medium text-sky-600 group-hover:translate-x-1 transition-transform inline-flex items-center">
                                    Details <iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
</span>
</div>
</div>
</article>

<article className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group">
<div className="h-56 bg-gradient-to-br from-slate-50 to-slate-100 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
<iconify-icon className="text-slate-300 group-hover:text-sky-400 transition-colors duration-300 transform group-hover:scale-110" icon="lucide:network" strokeWidth="1" width="64"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-slate-900">Neural Network Visualizer</h3>
<a className="text-slate-400 hover:text-sky-600 transition-colors" href="#">
<iconify-icon icon="lucide:external-link" width="18"></iconify-icon>
</a>
</div>
<p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-2">
                                Interactive web application to visualize backpropagation in real-time. Helps students understand gradient descent intuition.
                            </p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex gap-2">
<span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">React</span>
<span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">TensorFlow.js</span>
</div>
<span className="text-xs font-medium text-sky-600 group-hover:translate-x-1 transition-transform inline-flex items-center">
                                    Details <iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
</span>
</div>
</div>
</article>

<article className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group">
<div className="h-56 bg-gradient-to-br from-sky-50 to-white relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
<iconify-icon className="text-slate-300 group-hover:text-sky-400 transition-colors duration-300 transform group-hover:scale-110" icon="lucide:wind" strokeWidth="1" width="64"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-slate-900">AeroDrone Simulation</h3>
<a className="text-slate-400 hover:text-sky-600 transition-colors" href="#">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
</a>
</div>
<p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-2">
                                Physics engine built from scratch to simulate quadcopter dynamics under varying wind conditions. Published findings in undergraduate journal.
                            </p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex gap-2">
<span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">C++</span>
<span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">OpenGL</span>
</div>
<span className="text-xs font-medium text-sky-600 group-hover:translate-x-1 transition-transform inline-flex items-center">
                                    Details <iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
</span>
</div>
</div>
</article>

<article className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group">
<div className="h-56 bg-gradient-to-br from-slate-50 to-white relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
<iconify-icon className="text-slate-300 group-hover:text-sky-400 transition-colors duration-300 transform group-hover:scale-110" icon="lucide:sprout" strokeWidth="1" width="64"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-slate-900">IoT Hydroponics Controller</h3>
<a className="text-slate-400 hover:text-sky-600 transition-colors" href="#">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
</a>
</div>
<p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-2">
                                Automated nutrient delivery system for indoor farming. Uses MQTT for data telemetry and a mobile app dashboard.
                            </p>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex gap-2">
<span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">Arduino</span>
<span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">Flutter</span>
</div>
<span className="text-xs font-medium text-sky-600 group-hover:translate-x-1 transition-transform inline-flex items-center">
                                    Details <iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
</span>
</div>
</div>
</article>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="md:text-left text-center">
<span className="text-lg font-semibold text-slate-900 tracking-tighter" style={{}}>IX.</span>
<p className="text-xs text-slate-500 mt-2" style={{}}>© 2025 Ixrm.</p>
</div>
</div>
</footer>



    </>
  );
}
