import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md z-50 border-b border-zinc-800/50">
<div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-medium tracking-tighter text-lg text-zinc-100 hover:text-zinc-400 transition-colors" href="#">LM</a>
<nav className="hidden md:flex gap-8 text-sm text-zinc-400 font-normal">
<a className="hover:text-zinc-100 transition-colors" href="#projects">Projects</a>
<a className="hover:text-zinc-100 transition-colors" href="#experience">Experience</a>
<a className="hover:text-zinc-100 transition-colors" href="#skills">Skills</a>
</nav>
<a className="md:hidden text-zinc-400 hover:text-zinc-100" href="mailto:lmsingelwa@gmail.com">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</header>
<main className="max-w-3xl mx-auto px-6 pt-32 pb-32 space-y-32">

<section className="space-y-8 animate-fade-in-up">
<div className="font-ibm-mono space-y-4">
<h1 className="md:text-5xl text-4xl font-medium text-zinc-100 tracking-tight font-ibm-mono">
                    Lonwabo Msingelwa
                </h1>
<h2 className="text-lg text-zinc-400 font-normal tracking-tight">
                    Full-Stack Developer
                </h2>
</div>
<p className="text-base md:text-lg text-zinc-400 font-normal max-w-2xl leading-relaxed">
                Specializing in building scalable architectures and real-time systems. Experienced in bridging hardware and software using <span className="text-zinc-200 font-medium">Angular</span>, <span className="text-zinc-200 font-medium">C# .NET</span>, and <span className="text-zinc-200 font-medium">Java Spring Boot</span>. Passionate about test-driven development and delivering resilient enterprise applications.
            </p>
<div className="flex flex-wrap gap-6 text-sm text-zinc-500 font-normal pt-2">
<a className="flex items-center gap-2 hover:text-zinc-200 transition-colors group" href="mailto:lmsingelwa@gmail.com">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:letter-linear"></iconify-icon>
                    lmsingelwa@gmail.com
                </a>
<a className="flex items-center gap-2 hover:text-zinc-200 transition-colors group" href="tel:0634281144">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:phone-linear"></iconify-icon>
                    063 428 1144
                </a>
<a className="flex items-center gap-2 hover:text-zinc-200 transition-colors group" href="https://linkedin.com/in/lonwabomsingelwa" target="_blank">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:link-linear"></iconify-icon>
                    LinkedIn
                </a>
<span className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
                    Port Elizabeth, SA
                </span>
</div>
</section>

<section className="space-y-12 scroll-mt-24" id="projects">
<div className="flex items-center gap-3 border-b border-zinc-800/50 pb-4">
<iconify-icon className="text-xl text-zinc-500" icon="solar:folder-with-files-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100">Featured Architecture</h3>
</div>
<div className="space-y-16">

<div className="grid md:grid-cols-4 gap-4 md:gap-8 group">
<div className="md:col-span-1 text-sm text-zinc-500 font-normal pt-1">Recent Project</div>
<div className="md:col-span-3 space-y-4">
<h4 className="text-base font-medium text-zinc-100 tracking-tight flex items-center gap-2">
                            Classification Document System
                            <iconify-icon className="text-zinc-500" icon="solar:server-square-linear"></iconify-icon>
</h4>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                            Developed a highly robust file system tracker running as a C# Windows Service. The system automatically classifies incoming files, captures metadata into a SQL Server database, dispatches actionable notifications to users, and securely deletes outdated records based on dynamic retention rules. Built an accompanying Angular frontend interface to generate reports and manage classification configurations.
                        </p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800/50 text-zinc-300 text-xs rounded-md font-medium tracking-wide">Angular</span>
<span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800/50 text-zinc-300 text-xs rounded-md font-medium tracking-wide">C# Windows Service</span>
<span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800/50 text-zinc-300 text-xs rounded-md font-medium tracking-wide">SQL Server</span>
<span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800/50 text-zinc-300 text-xs rounded-md font-medium tracking-wide">RxJS</span>
</div>
</div>
</div>

<div className="grid md:grid-cols-4 gap-4 md:gap-8 group">
<div className="md:col-span-1 text-sm text-zinc-500 font-normal pt-1">Real-Time Systems</div>
<div className="md:col-span-3 space-y-4">
<h4 className="text-base font-medium text-zinc-100 tracking-tight flex items-center gap-2">
                            ECU Telemetry &amp; Automation System
                            <iconify-icon className="text-zinc-500" icon="solar:cpu-linear"></iconify-icon>
</h4>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                            Engineered a robust bridging architecture between hardware and web interfaces. Developed a Java Spring Boot API to process live test data generated by a C++ program interfacing with an ECU. Built an Angular dashboard utilizing WebSockets to render real-time telemetry statuses and dispatch execution commands back to the hardware layer.
                        </p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800/50 text-zinc-300 text-xs rounded-md font-medium tracking-wide">Angular</span>
<span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800/50 text-zinc-300 text-xs rounded-md font-medium tracking-wide">Java Spring Boot</span>
<span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800/50 text-zinc-300 text-xs rounded-md font-medium tracking-wide">WebSockets</span>
<span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800/50 text-zinc-300 text-xs rounded-md font-medium tracking-wide">C++ Integration</span>
</div>
</div>
</div>

<div className="grid md:grid-cols-4 gap-4 md:gap-8 group">
<div className="md:col-span-1 text-sm text-zinc-500 font-normal pt-1">Full-Stack</div>
<div className="md:col-span-3 space-y-4">
<h4 className="text-base font-medium text-zinc-100 tracking-tight flex items-center gap-2">
                            Enterprise Management System
                            <iconify-icon className="text-zinc-500" icon="solar:buildings-linear"></iconify-icon>
</h4>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                            Developed an end-to-end management platform utilizing Angular 15+ and a C# ASP.NET WebAPI backend. Modeled complex relational data using Entity Framework Core and SQL Server. Enforced rigorous quality standards by implementing Test-Driven Development (TDD), achieving 90% test coverage utilizing Jest for frontend and MSTest for backend logic.
                        </p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800/50 text-zinc-300 text-xs rounded-md font-medium tracking-wide">Angular 15+</span>
<span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800/50 text-zinc-300 text-xs rounded-md font-medium tracking-wide">ASP.NET WebAPI</span>
<span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800/50 text-zinc-300 text-xs rounded-md font-medium tracking-wide">EF Core</span>
<span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800/50 text-zinc-300 text-xs rounded-md font-medium tracking-wide">NgRx State</span>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-12 scroll-mt-24" id="experience">
<div className="flex items-center gap-3 border-b border-zinc-800/50 pb-4">
<iconify-icon className="text-xl text-zinc-500" icon="solar:briefcase-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100">Experience</h3>
</div>
<div className="space-y-16">

<div className="grid md:grid-cols-4 gap-4 md:gap-8">
<div className="md:col-span-1 text-sm text-zinc-500 font-normal pt-1">
                        Mar 2022 — Present
                    </div>
<div className="md:col-span-3 space-y-4">
<h4 className="text-base font-medium text-zinc-100 tracking-tight">
                            Software Developer <span className="text-zinc-500 font-normal mx-1">at</span> Wirk
                        </h4>
<ul className="space-y-3 text-sm text-zinc-400 font-normal leading-relaxed">
<li className="flex gap-3">
<span className="text-zinc-600 mt-1.5">—</span>
<span>Engineered and maintained robust RESTful APIs with C# ASP.NET WebAPI, architecting over 20 specific endpoints adhering to strict MVC patterns.</span>
</li>
<li className="flex gap-3">
<span className="text-zinc-600 mt-1.5">—</span>
<span>Developed highly reactive user interfaces utilizing Angular 15+, leveraging TypeScript and RxJS streams to improve application data rendering speed by 25%.</span>
</li>
<li className="flex gap-3">
<span className="text-zinc-600 mt-1.5">—</span>
<span>Championed Test-Driven Development within the team, consistently writing and maintaining unit tests with MSTest to maintain an 85% code coverage baseline.</span>
</li>
<li className="flex gap-3">
<span className="text-zinc-600 mt-1.5">—</span>
<span>Integrated Playwright for automated end-to-end testing pipelines, effectively reducing manual QA regression cycles by 40%.</span>
</li>
<li className="flex gap-3">
<span className="text-zinc-600 mt-1.5">—</span>
<span>Designed, optimized, and maintained complex data models within MS SQL Server to support evolving business requirements.</span>
</li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-4 gap-4 md:gap-8">
<div className="md:col-span-1 text-sm text-zinc-500 font-normal pt-1">
                        Sep 2020 — Jan 2022
                    </div>
<div className="md:col-span-3 space-y-4">
<h4 className="text-base font-medium text-zinc-100 tracking-tight">
                            Software Developer Intern <span className="text-zinc-500 font-normal mx-1">at</span> Developmenthub
                        </h4>
<ul className="space-y-3 text-sm text-zinc-400 font-normal leading-relaxed">
<li className="flex gap-3">
<span className="text-zinc-600 mt-1.5">—</span>
<span>Collaborated directly with senior engineers to draft technical specifications and translate algorithmic flowcharts into functional application code.</span>
</li>
<li className="flex gap-3">
<span className="text-zinc-600 mt-1.5">—</span>
<span>Conducted root cause analysis on production environments, successfully identifying, documenting, and resolving over 50 isolated software defects.</span>
</li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-4 gap-4 md:gap-8">
<div className="md:col-span-1 text-sm text-zinc-500 font-normal pt-1">
                        Mar 2019 — Nov 2019
                    </div>
<div className="md:col-span-3 space-y-4">
<h4 className="text-base font-medium text-zinc-100 tracking-tight">
                            IT Lab Assistant <span className="text-zinc-500 font-normal mx-1">at</span> Central University of Technology
                        </h4>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                            Provided front-line technical and software support for over 200 students. Authored training materials for specialized lab software and maintained a 99% hardware uptime through proactive troubleshooting.
                        </p>
</div>
</div>
</div>
</section>

<section className="space-y-12 scroll-mt-24" id="skills">
<div className="flex items-center gap-3 border-b border-zinc-800/50 pb-4">
<iconify-icon className="text-xl text-zinc-500" icon="solar:code-square-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100">Technical Arsenal</h3>
</div>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
<div className="space-y-3">
<h4 className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:window-frame-linear"></iconify-icon>
                        Frontend &amp; Client
                    </h4>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                        Angular 15+, TypeScript, JavaScript, HTML5, CSS3, RxJS, NgRx, WebSockets, Tailwind CSS
                    </p>
</div>
<div className="space-y-3">
<h4 className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:server-linear"></iconify-icon>
                        Backend &amp; APIs
                    </h4>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                        C#, ASP.NET Core, WebAPI, Windows Services, Java, Spring Boot, RESTful Architecture, MVC
                    </p>
</div>
<div className="space-y-3">
<h4 className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:database-linear"></iconify-icon>
                        Data Architecture
                    </h4>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                        MS SQL Server, T-SQL, Entity Framework Core, Relational Database Design, Data Modeling
                    </p>
</div>
<div className="space-y-3">
<h4 className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:shield-check-linear"></iconify-icon>
                        Testing &amp; Methodology
                    </h4>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                        Test-Driven Development (TDD), Jest, MSTest, NUnit, Playwright (E2E), Git, CI/CD, Agile/Scrum, SOLID Principles
                    </p>
</div>
</div>
</section>

<section className="space-y-12">
<div className="flex items-center gap-3 border-b border-zinc-800/50 pb-4">
<iconify-icon className="text-xl text-zinc-500" icon="solar:diploma-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100">Education &amp; Certifications</h3>
</div>
<div className="grid md:grid-cols-4 gap-4 md:gap-8 group">
<div className="md:col-span-1 text-sm text-zinc-500 font-normal pt-1">
                    2015 — 2019
                </div>
<div className="md:col-span-3 space-y-4">
<h4 className="text-base font-medium text-zinc-100 tracking-tight">
                        National Diploma in Information Technology
                    </h4>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                        Central University of Technology<br/>
<span className="text-zinc-500 mt-1 block">Coursework: Software Engineering, Database Systems, Web Development, Algorithms</span>
</p>
<div className="pt-4 space-y-3">
<div className="flex items-center gap-3 text-sm text-zinc-400">
<iconify-icon className="text-zinc-500" icon="solar:verified-check-linear"></iconify-icon>
                            Google Africa Scholarship Certificate
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-400">
<iconify-icon className="text-zinc-500" icon="solar:verified-check-linear"></iconify-icon>
                            YES Certificate
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-400">
<iconify-icon className="text-zinc-500" icon="solar:verified-check-linear"></iconify-icon>
                            Merit Certificate - Central University of Technology
                        </div>
</div>
<div className="pt-6 mt-4 space-y-3 border-t border-zinc-800/50">
<h5 className="text-xs font-medium tracking-wider uppercase text-zinc-500 mb-4">In Progress (Target: Before June)</h5>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:clock-circle-linear"></iconify-icon>
                            KCNA: Kubernetes and Cloud Native Associate
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:clock-circle-linear"></iconify-icon>
                            Microsoft Certified: Azure AI Fundamentals
                        </div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-zinc-800/50 bg-zinc-950">
<div className="max-w-3xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-normal">
<p>© 2024 Lonwabo Msingelwa. Built for the modern web.</p>
<div className="flex items-center gap-6">
<a className="hover:text-zinc-200 transition-colors" href="https://linkedin.com/in/lonwabomsingelwa">LinkedIn</a>
<a className="hover:text-zinc-200 transition-colors" href="mailto:lmsingelwa@gmail.com">Email</a>
</div>
</div>
</footer>

    </>
  );
}
