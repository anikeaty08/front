import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function toggleMenu() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('mobile-overlay');
      
      sidebar.classList.toggle('open');
      overlay.classList.toggle('hidden');
    }

    function closeMobileMenu() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('mobile-overlay');
      
      sidebar.classList.remove('open');
      overlay.classList.add('hidden');
    }

    // Close mobile menu when clicking on overlay
    document.getElementById('mobile-overlay').addEventListener('click', closeMobileMenu);

    // Close mobile menu on window resize if desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        closeMobileMenu();
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<button className="mobile-menu-toggle fixed top-4 left-4 z-50 bg-neutral-800 border border-neutral-600 p-3 lg:hidden" onclick="toggleMenu()">
<div className="w-5 h-0.5 bg-neutral-300 mb-1"></div>
<div className="w-5 h-0.5 bg-neutral-300 mb-1"></div>
<div className="w-5 h-0.5 bg-neutral-300"></div>
</button>

<div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden hidden" id="mobile-overlay" onclick="toggleMenu()"></div>

<div className="desktop-sidebar fixed top-0 left-0 w-80 lg:w-72 xl:w-80 h-screen bg-neutral-800 border-r border-neutral-600 z-40 overflow-y-auto" id="sidebar">
<div className="p-6 lg:p-8">

<button className="lg:hidden absolute top-4 right-4 text-neutral-400 hover:text-neutral-200" onclick="toggleMenu()">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>

<div className="mb-8 lg:mb-12 pb-6 lg:pb-8 border-b border-neutral-600 relative mt-8 lg:mt-0">
<div className="w-20 h-20 lg:w-24 lg:h-24 bg-neutral-700 border border-neutral-500 mb-4 lg:mb-6">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
</div>
<h1 className="text-xl lg:text-2xl font-light mb-2 text-neutral-50">SOPHIA CHEN</h1>
<p className="text-neutral-400 mb-3 lg:mb-4 text-xs lg:text-sm uppercase tracking-wide">FULL STACK DEVELOPER</p>
<p className="text-xs text-neutral-500 leading-relaxed border-l-2 border-neutral-600 pl-3 lg:pl-4">
          Building innovative solutions with a focus on clean, efficient code and exceptional user experiences.
        </p>
</div>

<nav className="mb-8 lg:mb-12 pb-6 lg:pb-8 border-b border-neutral-600">
<ul className="space-y-1 lg:space-y-2">
<li><a className="block py-2 lg:py-3 px-3 lg:px-4 text-neutral-100 bg-neutral-700 border border-neutral-500 text-xs lg:text-sm uppercase tracking-wide hover:bg-neutral-600 transition-all" href="#projects" onclick="closeMobileMenu()">PROJECTS</a></li>
<li><a className="block py-2 lg:py-3 px-3 lg:px-4 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-neutral-100 transition-all text-xs lg:text-sm uppercase tracking-wide" href="#skills" onclick="closeMobileMenu()">SKILLS</a></li>
<li><a className="block py-2 lg:py-3 px-3 lg:px-4 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-neutral-100 transition-all text-xs lg:text-sm uppercase tracking-wide" href="#experience" onclick="closeMobileMenu()">EXPERIENCE</a></li>
<li><a className="block py-2 lg:py-3 px-3 lg:px-4 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-neutral-100 transition-all text-xs lg:text-sm uppercase tracking-wide" href="#contact" onclick="closeMobileMenu()">CONTACT</a></li>
</ul>
</nav>

<div className="space-y-4 text-xs lg:text-sm text-neutral-500">
<div className="border border-neutral-700 p-3 bg-neutral-900">
<span className="text-neutral-400 uppercase tracking-wide block mb-1">EMAIL</span>
<span className="text-neutral-300">sophia.chen@example.com</span>
</div>
<div className="border border-neutral-700 p-3 bg-neutral-900">
<span className="text-neutral-400 uppercase tracking-wide block mb-1">PHONE</span>
<span className="text-neutral-300">+1 (555) 123-4567</span>
</div>
<div className="border border-neutral-700 p-3 bg-neutral-900">
<span className="text-neutral-400 uppercase tracking-wide block mb-1">LOCATION</span>
<span className="text-neutral-300">San Francisco, CA</span>
</div>
</div>

<div className="hidden lg:block absolute right-0 top-0 w-8 h-full border-l border-neutral-600">
<div className="flex flex-col justify-between h-full text-xs text-neutral-500 p-2">
<span className="transform -rotate-90 origin-center">320px</span>
<span className="transform -rotate-90 origin-center">100vh</span>
</div>
</div>
</div>
</div>

<div className="lg:ml-72 xl:ml-80 min-h-screen">

<div className="hidden lg:flex absolute top-0 left-0 w-full h-8 border-b border-neutral-600 items-center justify-center text-xs text-neutral-500 bg-neutral-800 z-10">
<span>MAIN CONTENT AREA - RESPONSIVE</span>
</div>
<div className="pt-4 lg:pt-12 p-4 lg:p-8">

<section className="mb-12 lg:mb-16 border border-neutral-600 bg-neutral-800 p-4 lg:p-8" id="projects">
<h2 className="text-2xl lg:text-3xl xl:text-4xl font-light mb-6 lg:mb-8 text-neutral-50 border-b border-neutral-600 pb-4">PROJECTS</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">

<div className="border border-neutral-600 bg-neutral-900 hover:bg-neutral-700 transition-all">
<div className="w-full h-32 lg:h-40 bg-neutral-800 border-b border-neutral-600 flex items-center justify-center">
<span className="text-neutral-400 text-xs lg:text-sm uppercase tracking-wide text-center px-2">Neural Finance Dashboard</span>
</div>
<div className="p-4 lg:p-6">
<h3 className="text-base lg:text-lg font-medium mb-3 text-neutral-300 uppercase tracking-wide">NEURAL FINANCE DASHBOARD</h3>
<p className="text-neutral-400 text-xs lg:text-sm mb-4 leading-relaxed border-l-2 border-neutral-600 pl-3 lg:pl-4">
                A real-time financial analytics platform with AI-driven insights and predictive modeling.
              </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs border border-neutral-600 text-neutral-400 px-2 py-1 uppercase">React</span>
<span className="text-xs border border-neutral-600 text-neutral-400 px-2 py-1 uppercase">TypeScript</span>
<span className="text-xs border border-neutral-600 text-neutral-400 px-2 py-1 uppercase">Node.js</span>
</div>
<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-xs lg:text-sm">
<a className="text-neutral-300 border-b border-neutral-600 hover:border-neutral-400 transition-all uppercase tracking-wide" href="#">View Project</a>
<a className="text-neutral-500 hover:text-neutral-300 transition-colors uppercase tracking-wide" href="#">Source Code</a>
</div>
</div>
</div>

<div className="border border-neutral-600 bg-neutral-900 hover:bg-neutral-700 transition-all">
<div className="w-full h-32 lg:h-40 bg-neutral-800 border-b border-neutral-600 flex items-center justify-center">
<span className="text-neutral-400 text-xs lg:text-sm uppercase tracking-wide text-center px-2">Quantum Chat App</span>
</div>
<div className="p-4 lg:p-6">
<h3 className="text-base lg:text-lg font-medium mb-3 text-neutral-300 uppercase tracking-wide">QUANTUM CHAT APP</h3>
<p className="text-neutral-400 text-xs lg:text-sm mb-4 leading-relaxed border-l-2 border-neutral-600 pl-3 lg:pl-4">
                End-to-end encrypted messaging with real-time translation and AI-assisted responses.
              </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs border border-neutral-600 text-neutral-400 px-2 py-1 uppercase">Vue.js</span>
<span className="text-xs border border-neutral-600 text-neutral-400 px-2 py-1 uppercase">Firebase</span>
<span className="text-xs border border-neutral-600 text-neutral-400 px-2 py-1 uppercase">WebRTC</span>
</div>
<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-xs lg:text-sm">
<a className="text-neutral-300 border-b border-neutral-600 hover:border-neutral-400 transition-all uppercase tracking-wide" href="#">View Project</a>
<a className="text-neutral-500 hover:text-neutral-300 transition-colors uppercase tracking-wide" href="#">Source Code</a>
</div>
</div>
</div>

<div className="border border-neutral-600 bg-neutral-900 hover:bg-neutral-700 transition-all">
<div className="w-full h-32 lg:h-40 bg-neutral-800 border-b border-neutral-600 flex items-center justify-center">
<span className="text-neutral-400 text-xs lg:text-sm uppercase tracking-wide text-center px-2">E-Commerce Platform</span>
</div>
<div className="p-4 lg:p-6">
<h3 className="text-base lg:text-lg font-medium mb-3 text-neutral-300 uppercase tracking-wide">E-COMMERCE PLATFORM</h3>
<p className="text-neutral-400 text-xs lg:text-sm mb-4 leading-relaxed border-l-2 border-neutral-600 pl-3 lg:pl-4">
                Modern shopping experience with advanced filtering, real-time inventory, and payment processing.
              </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs border border-neutral-600 text-neutral-400 px-2 py-1 uppercase">Next.js</span>
<span className="text-xs border border-neutral-600 text-neutral-400 px-2 py-1 uppercase">Stripe</span>
<span className="text-xs border border-neutral-600 text-neutral-400 px-2 py-1 uppercase">PostgreSQL</span>
</div>
<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-xs lg:text-sm">
<a className="text-neutral-300 border-b border-neutral-600 hover:border-neutral-400 transition-all uppercase tracking-wide" href="#">View Project</a>
<a className="text-neutral-500 hover:text-neutral-300 transition-colors uppercase tracking-wide" href="#">Source Code</a>
</div>
</div>
</div>

<div className="border border-neutral-600 bg-neutral-900 hover:bg-neutral-700 transition-all">
<div className="w-full h-32 lg:h-40 bg-neutral-800 border-b border-neutral-600 flex items-center justify-center">
<span className="text-neutral-400 text-xs lg:text-sm uppercase tracking-wide text-center px-2">Task Management API</span>
</div>
<div className="p-4 lg:p-6">
<h3 className="text-base lg:text-lg font-medium mb-3 text-neutral-300 uppercase tracking-wide">TASK MANAGEMENT API</h3>
<p className="text-neutral-400 text-xs lg:text-sm mb-4 leading-relaxed border-l-2 border-neutral-600 pl-3 lg:pl-4">
                RESTful API with authentication, real-time updates, and comprehensive project management features.
              </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs border border-neutral-600 text-neutral-400 px-2 py-1 uppercase">Express.js</span>
<span className="text-xs border border-neutral-600 text-neutral-400 px-2 py-1 uppercase">MongoDB</span>
<span className="text-xs border border-neutral-600 text-neutral-400 px-2 py-1 uppercase">JWT</span>
</div>
<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-xs lg:text-sm">
<a className="text-neutral-300 border-b border-neutral-600 hover:border-neutral-400 transition-all uppercase tracking-wide" href="#">View Project</a>
<a className="text-neutral-500 hover:text-neutral-300 transition-colors uppercase tracking-wide" href="#">Source Code</a>
</div>
</div>
</div>
</div>
</section>

<section className="mb-12 lg:mb-16 border border-neutral-600 bg-neutral-800 p-4 lg:p-8" id="skills">
<h2 className="text-2xl lg:text-3xl xl:text-4xl font-light mb-6 lg:mb-8 text-neutral-50 border-b border-neutral-600 pb-4">SKILLS</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
<div className="border border-neutral-600 p-4 lg:p-6 bg-neutral-900">
<h3 className="text-base lg:text-lg font-medium mb-3 lg:mb-4 text-neutral-300 uppercase tracking-wide">FRONTEND</h3>
<ul className="space-y-2 text-xs lg:text-sm text-neutral-400">
<li className="border-l-2 border-neutral-600 pl-3">React / Next.js</li>
<li className="border-l-2 border-neutral-600 pl-3">Vue.js / Nuxt.js</li>
<li className="border-l-2 border-neutral-600 pl-3">TypeScript</li>
<li className="border-l-2 border-neutral-600 pl-3">Tailwind CSS</li>
</ul>
</div>
<div className="border border-neutral-600 p-4 lg:p-6 bg-neutral-900">
<h3 className="text-base lg:text-lg font-medium mb-3 lg:mb-4 text-neutral-300 uppercase tracking-wide">BACKEND</h3>
<ul className="space-y-2 text-xs lg:text-sm text-neutral-400">
<li className="border-l-2 border-neutral-600 pl-3">Node.js / Express</li>
<li className="border-l-2 border-neutral-600 pl-3">Python / Django</li>
<li className="border-l-2 border-neutral-600 pl-3">PostgreSQL</li>
<li className="border-l-2 border-neutral-600 pl-3">MongoDB</li>
</ul>
</div>
<div className="border border-neutral-600 p-4 lg:p-6 bg-neutral-900 md:col-span-2 lg:col-span-1">
<h3 className="text-base lg:text-lg font-medium mb-3 lg:mb-4 text-neutral-300 uppercase tracking-wide">TOOLS</h3>
<ul className="space-y-2 text-xs lg:text-sm text-neutral-400">
<li className="border-l-2 border-neutral-600 pl-3">Docker</li>
<li className="border-l-2 border-neutral-600 pl-3">AWS / Vercel</li>
<li className="border-l-2 border-neutral-600 pl-3">Git / GitHub</li>
<li className="border-l-2 border-neutral-600 pl-3">Figma</li>
</ul>
</div>
</div>
</section>

<section className="mb-12 lg:mb-16 border border-neutral-600 bg-neutral-800 p-4 lg:p-8" id="experience">
<h2 className="text-2xl lg:text-3xl xl:text-4xl font-light mb-6 lg:mb-8 text-neutral-50 border-b border-neutral-600 pb-4">EXPERIENCE</h2>
<div className="space-y-6 lg:space-y-8">
<div className="border border-neutral-600 p-4 lg:p-6 bg-neutral-900">
<div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-2">
<div className="flex-1">
<h3 className="text-lg lg:text-xl font-medium text-neutral-300">SENIOR FULL STACK DEVELOPER</h3>
<p className="text-neutral-400 uppercase tracking-wide text-xs lg:text-sm">TechCorp Solutions</p>
</div>
<div className="lg:text-right">
<span className="text-neutral-500 text-xs lg:text-sm border border-neutral-600 px-2 lg:px-3 py-1">2022 - PRESENT</span>
</div>
</div>
<p className="text-neutral-400 text-xs lg:text-sm leading-relaxed border-l-2 border-neutral-600 pl-3 lg:pl-4">
              Lead development of enterprise web applications, mentor junior developers, and architect scalable solutions using modern technologies.
            </p>
</div>
<div className="border border-neutral-600 p-4 lg:p-6 bg-neutral-900">
<div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-2">
<div className="flex-1">
<h3 className="text-lg lg:text-xl font-medium text-neutral-300">FRONTEND DEVELOPER</h3>
<p className="text-neutral-400 uppercase tracking-wide text-xs lg:text-sm">StartupX</p>
</div>
<div className="lg:text-right">
<span className="text-neutral-500 text-xs lg:text-sm border border-neutral-600 px-2 lg:px-3 py-1">2020 - 2022</span>
</div>
</div>
<p className="text-neutral-400 text-xs lg:text-sm leading-relaxed border-l-2 border-neutral-600 pl-3 lg:pl-4">
              Developed responsive web applications and collaborated with design teams to create intuitive user interfaces.
            </p>
</div>
</div>
</section>

<section className="border border-neutral-600 bg-neutral-800 p-4 lg:p-8 mb-8" id="contact">
<h2 className="text-2xl lg:text-3xl xl:text-4xl font-light mb-6 lg:mb-8 text-neutral-50 border-b border-neutral-600 pb-4">CONTACT</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
<div className="space-y-4 lg:space-y-6">
<div className="border border-neutral-600 p-3 lg:p-4 bg-neutral-900">
<h3 className="text-xs lg:text-sm uppercase tracking-wide text-neutral-400 mb-2">EMAIL</h3>
<p className="text-neutral-300 text-sm lg:text-base">sophia.chen@example.com</p>
</div>
<div className="border border-neutral-600 p-3 lg:p-4 bg-neutral-900">
<h3 className="text-xs lg:text-sm uppercase tracking-wide text-neutral-400 mb-2">PHONE</h3>
<p className="text-neutral-300 text-sm lg:text-base">+1 (555) 123-4567</p>
</div>
</div>
<div className="space-y-4 lg:space-y-6">
<div className="border border-neutral-600 p-3 lg:p-4 bg-neutral-900">
<h3 className="text-xs lg:text-sm uppercase tracking-wide text-neutral-400 mb-2">LOCATION</h3>
<p className="text-neutral-300 text-sm lg:text-base">San Francisco, CA</p>
</div>
<div className="border border-neutral-600 p-3 lg:p-4 bg-neutral-900">
<h3 className="text-xs lg:text-sm uppercase tracking-wide text-neutral-400 mb-2">AVAILABILITY</h3>
<p className="text-neutral-300 text-sm lg:text-base">Open for opportunities</p>
</div>
</div>
</div>
</section>
</div>
</div>


    </>
  );
}
