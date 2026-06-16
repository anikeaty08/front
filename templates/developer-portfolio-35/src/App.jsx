import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#050505',
surface: '#0a0a0a',
surfaceHighlight: '#121212',
border: '#1f1f1f',
primary: '#ffffff',
secondary: '#a1a1aa',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // Dynamic Time Greeting
        function updateGreeting() {
            const hour = new Date().getHours();
            const greetingEl = document.getElementById('greeting');
            let text = 'Good Evening';
            if (hour >= 5 && hour < 12) text = 'Good Morning';
            else if (hour >= 12 && hour < 18) text = 'Good Afternoon';
            greetingEl.textContent = text;
        }
        updateGreeting();

        // Scroll Observer (Simulating Framer Motion WhileInView)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Copy Email Logic
        function copyEmail() {
            const email = "kaushal@example.com";
            navigator.clipboard.writeText(email).then(() => {
                const toast = document.getElementById('toast');
                toast.classList.remove('opacity-0', 'translate-y-10');
                setTimeout(() => {
                    toast.classList.add('opacity-0', 'translate-y-10');
                }, 3000);
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-6 z-50 w-full flex justify-center px-4">
<nav className="glass-nav h-[52px] rounded-full px-1.5 flex items-center gap-1 shadow-2xl">
<div className="flex items-center gap-1 px-3">
<a className="text-xs font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-colors text-zinc-400 hover:text-white" href="#home">Home</a>
<a className="text-xs font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-colors text-zinc-400 hover:text-white" href="#work">Work</a>
<a className="text-xs font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-colors text-zinc-400 hover:text-white" href="#about">About</a>
<a className="text-xs font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-colors text-zinc-400 hover:text-white" href="#contact">Contact</a>
<a className="text-xs font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-colors text-zinc-400 hover:text-white" href="#skills">Tools</a>
</div>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<div className="flex items-center gap-2 px-4">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-zinc-300" id="greeting">Good Evening</span>
</div>
</nav>
</div>

<main className="w-full max-w-5xl px-4 md:px-6 pt-32 md:pt-40 space-y-32">

<section className="flex flex-col gap-10" id="home">

<div className="reveal space-y-8">
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Available for hire
                    </span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-medium flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="12"></span>
                        Based in India
                    </span>
</div>
<div className="space-y-4">
<h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
                        Hello, I'm <span className="text-zinc-500">Kaushal.</span><br/>
                        Full Stack Developer.
                    </h1>
<p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
                        I specialize in building accessible, high-performance web applications. My work blends technical precision with design thinking to create software that feels solid and refined.
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="group h-12 px-8 rounded-full bg-white text-black font-semibold text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors" href="#contact">
                        Connect now
                        <span className="iconify transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<button className="group h-12 px-8 rounded-full border border-white/10 bg-transparent text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-colors" onclick="copyEmail()">
<span className="iconify" data-icon="lucide:copy" data-width="16"></span>
                        Copy Email
                    </button>
</div>
</div>

<div className="reveal delay-200 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">

<div className="col-span-2 glass-card rounded-xl p-6 flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
<span className="iconify" data-icon="lucide:briefcase" data-width="20"></span>
</div>
<div>
<div className="text-sm font-semibold text-white">Open to Work</div>
<div className="text-xs text-zinc-500">Freelance &amp; Full-time</div>
</div>
</div>
<span className="iconify text-zinc-600 group-hover:text-white transition-colors" data-icon="lucide:arrow-up-right" data-width="18"></span>
</div>

<a className="col-span-1 glass-card rounded-xl p-6 flex flex-col items-center justify-center gap-3 group" href="#" target="_blank">
<span className="iconify text-zinc-400 group-hover:text-white transition-colors" data-icon="lucide:github" data-width="28"></span>
<span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-300">GitHub</span>
</a>

<a className="col-span-1 glass-card rounded-xl p-6 flex flex-col items-center justify-center gap-3 group" href="#" target="_blank">
<span className="iconify text-zinc-400 group-hover:text-white transition-colors" data-icon="lucide:twitter" data-width="28"></span>
<span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-300">Twitter</span>
</a>

<a className="col-span-1 glass-card rounded-xl p-6 flex flex-col items-center justify-center gap-3 group" href="#" target="_blank">
<span className="iconify text-zinc-400 group-hover:text-white transition-colors" data-icon="lucide:linkedin" data-width="28"></span>
<span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-300">LinkedIn</span>
</a>

<a className="col-span-1 glass-card rounded-xl p-6 flex flex-col items-center justify-center gap-3 group" href="#" target="_blank">
<span className="iconify text-zinc-400 group-hover:text-pink-500 transition-colors" data-icon="lucide:instagram" data-width="28"></span>
<span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-300">Instagram</span>
</a>

<div className="col-span-2 glass-card rounded-xl p-6 flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
<span className="iconify" data-icon="lucide:globe-2" data-width="20"></span>
</div>
<div>
<div className="text-sm font-semibold text-white">Odisha, India</div>
<div className="text-xs text-zinc-500">Remote Available</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-8" id="work">
<div className="reveal flex items-center justify-between">
<h2 className="text-2xl font-bold text-white">Selected Work</h2>
<a className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1" href="#">
                    View all 
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="reveal glass-card rounded-xl overflow-hidden group">
<div className="h-64 bg-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

<div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-700 group-hover:scale-105 transition-transform duration-700">
<span className="iconify" data-icon="lucide:layout-template" data-width="48"></span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-white">E-Commerce Dashboard</h3>
<span className="iconify text-zinc-500 group-hover:text-white transition-colors" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<p className="text-sm text-zinc-500 mb-4">A high-performance dashboard with real-time analytics.</p>
<div className="flex gap-2">
<span className="text-[10px] uppercase tracking-wider text-zinc-400 bg-white/5 px-2 py-1 rounded">Next.js</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-400 bg-white/5 px-2 py-1 rounded">Tailwind</span>
</div>
</div>
</div>

<div className="reveal delay-100 glass-card rounded-xl overflow-hidden group">
<div className="h-64 bg-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-700 group-hover:scale-105 transition-transform duration-700">
<span className="iconify" data-icon="lucide:smartphone" data-width="48"></span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-white">Finance App</h3>
<span className="iconify text-zinc-500 group-hover:text-white transition-colors" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<p className="text-sm text-zinc-500 mb-4">Personal finance tracker with secure authentication.</p>
<div className="flex gap-2">
<span className="text-[10px] uppercase tracking-wider text-zinc-400 bg-white/5 px-2 py-1 rounded">React Native</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-400 bg-white/5 px-2 py-1 rounded">Firebase</span>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-8" id="skills">
<h2 className="reveal text-2xl font-bold text-white">The Secret Sauce</h2>
<div className="reveal flex flex-wrap gap-3">

<div className="glass-card px-4 py-2 rounded-full text-sm text-zinc-300 animate-float">Next.js 14</div>
<div className="glass-card px-4 py-2 rounded-full text-sm text-zinc-300 animate-float delay-100" style={{animationDelay: '1s'}}>TypeScript</div>
<div className="glass-card px-4 py-2 rounded-full text-sm text-zinc-300 animate-float" style={{animationDelay: '2s'}}>Tailwind CSS</div>
<div className="glass-card px-4 py-2 rounded-full text-sm text-zinc-300 animate-float" style={{animationDelay: '1.5s'}}>Node.js</div>
<div className="glass-card px-4 py-2 rounded-full text-sm text-zinc-300 animate-float" style={{animationDelay: '0.5s'}}>PostgreSQL</div>
<div className="glass-card px-4 py-2 rounded-full text-sm text-zinc-300 animate-float" style={{animationDelay: '2.5s'}}>Framer Motion</div>
<div className="glass-card px-4 py-2 rounded-full text-sm text-zinc-300 animate-float" style={{animationDelay: '3s'}}>Docker</div>
<div className="glass-card px-4 py-2 rounded-full text-sm text-zinc-300 animate-float" style={{animationDelay: '1.2s'}}>AWS</div>
<div className="glass-card px-4 py-2 rounded-full text-sm text-zinc-300 animate-float" style={{animationDelay: '2.2s'}}>GraphQL</div>
<div className="glass-card px-4 py-2 rounded-full text-sm text-zinc-300 animate-float" style={{animationDelay: '0.8s'}}>Prisma</div>
</div>
</section>

<section className="space-y-8">
<h2 className="reveal text-2xl font-bold text-white">Elite Certificates</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="reveal glass-card p-5 rounded-xl flex items-center gap-4 group">
<div className="w-16 h-16 bg-zinc-800 rounded-lg flex-shrink-0 flex items-center justify-center">
<span className="iconify text-zinc-600" data-icon="lucide:award" data-width="24"></span>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-white">AWS Certified Developer</h3>
<p className="text-xs text-zinc-500 mt-1">Amazon Web Services • 2024</p>
</div>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black transition-all">
<span className="iconify" data-icon="lucide:eye" data-width="14"></span>
</button>
</div>

<div className="reveal delay-100 glass-card p-5 rounded-xl flex items-center gap-4 group">
<div className="w-16 h-16 bg-zinc-800 rounded-lg flex-shrink-0 flex items-center justify-center">
<span className="iconify text-zinc-600" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-white">Cybersecurity Analyst</h3>
<p className="text-xs text-zinc-500 mt-1">Google • 2023</p>
</div>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black transition-all">
<span className="iconify" data-icon="lucide:eye" data-width="14"></span>
</button>
</div>

<div className="reveal glass-card p-5 rounded-xl flex items-center gap-4 group">
<div className="w-16 h-16 bg-zinc-800 rounded-lg flex-shrink-0 flex items-center justify-center">
<span className="iconify text-zinc-600" data-icon="lucide:code-2" data-width="24"></span>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-white">Meta Front-End Dev</h3>
<p className="text-xs text-zinc-500 mt-1">Meta • 2023</p>
</div>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black transition-all">
<span className="iconify" data-icon="lucide:eye" data-width="14"></span>
</button>
</div>

<div className="reveal delay-100 glass-card p-5 rounded-xl flex items-center gap-4 group">
<div className="w-16 h-16 bg-zinc-800 rounded-lg flex-shrink-0 flex items-center justify-center">
<span className="iconify text-zinc-600" data-icon="lucide:database" data-width="24"></span>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-white">PostgreSQL Expert</h3>
<p className="text-xs text-zinc-500 mt-1">Udemy • 2022</p>
</div>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black transition-all">
<span className="iconify" data-icon="lucide:eye" data-width="14"></span>
</button>
</div>
</div>
</section>

<section className="space-y-8">
<h2 className="reveal text-2xl font-bold text-white">Security Insights</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal glass-card p-6 rounded-xl space-y-4 hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex justify-between items-center text-xs text-zinc-500">
<span>Security</span>
<span>Oct 12, 2024</span>
</div>
<h3 className="text-base font-semibold text-zinc-200">Zero Trust Architecture</h3>
<p className="text-sm text-zinc-500 line-clamp-2">Exploring the fundamentals of Zero Trust networks and how to implement them.</p>
</div>

<div className="reveal delay-100 glass-card p-6 rounded-xl space-y-4 hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex justify-between items-center text-xs text-zinc-500">
<span>DevOps</span>
<span>Sep 28, 2024</span>
</div>
<h3 className="text-base font-semibold text-zinc-200">Securing CI/CD Pipelines</h3>
<p className="text-sm text-zinc-500 line-clamp-2">Best practices for preventing supply chain attacks in your deployment workflow.</p>
</div>

<div className="reveal delay-200 glass-card p-6 rounded-xl space-y-4 hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex justify-between items-center text-xs text-zinc-500">
<span>React</span>
<span>Aug 15, 2024</span>
</div>
<h3 className="text-base font-semibold text-zinc-200">XSS Prevention in 2025</h3>
<p className="text-sm text-zinc-500 line-clamp-2">Modern techniques to sanitize user input and prevent XSS vulnerabilities.</p>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="about">

<div className="reveal lg:col-span-5 space-y-6">
<div className="w-full aspect-square rounded-2xl bg-zinc-900 border border-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800 flex items-center justify-center">
<span className="iconify text-zinc-700" data-icon="lucide:user" data-width="80"></span>
</div>
</div>
<div>
<h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
<p className="text-sm text-zinc-400 leading-relaxed">
                        I am Kaushal, a developer passionate about security and performance. I build things that live on the web, always striving for the perfect balance between aesthetics and functionality.
                    </p>
</div>
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors">
                    Download Resume
                    <span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</button>
</div>

<div className="reveal lg:col-span-7 space-y-8">
<h2 className="text-xl font-bold text-white">Experience</h2>
<div className="relative space-y-8 pl-6 border-l border-white/10">

<div className="relative group">
<div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 border border-zinc-600 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors"></div>
<h3 className="text-base font-semibold text-white">Cyber Security Intern</h3>
<div className="flex justify-between items-center mt-1 mb-2">
<span className="text-sm text-zinc-400">TechCorp Solutions</span>
<span className="text-xs font-mono text-zinc-500">2023 - Present</span>
</div>
<p className="text-sm text-zinc-500">Conducting vulnerability assessments and assisting in securing enterprise infrastructure.</p>
</div>

<div className="relative group">
<div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 border border-zinc-600 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-colors"></div>
<h3 className="text-base font-semibold text-white">Open Source Contributor</h3>
<div className="flex justify-between items-center mt-1 mb-2">
<span className="text-sm text-zinc-400">GitHub Community</span>
<span className="text-xs font-mono text-zinc-500">2021 - 2023</span>
</div>
<p className="text-sm text-zinc-500">Contributed to major react libraries and documentation. Improved accessibility features.</p>
</div>

<div className="relative group">
<div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 border border-zinc-600 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors"></div>
<h3 className="text-base font-semibold text-white">Senior Moderator</h3>
<div className="flex justify-between items-center mt-1 mb-2">
<span className="text-sm text-zinc-400">DevForum</span>
<span className="text-xs font-mono text-zinc-500">2020 - 2021</span>
</div>
<p className="text-sm text-zinc-500">Managed a community of 50k+ developers. Organized hackathons and coding events.</p>
</div>
</div>
</div>
</section>

<section className="reveal" id="contact">
<div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-indigo-500/20 blur-[80px] rounded-full"></div>
<div className="relative z-10 space-y-8 max-w-xl mx-auto">
<h2 className="text-4xl font-bold tracking-tight text-white">Let's work together.</h2>
<p className="text-zinc-400">
                        Have a project in mind? Let's build something amazing together. I'm currently available for new opportunities.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform" href="mailto:kaushal@example.com">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
                            Send an email
                        </a>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium flex items-center justify-center gap-2 transition-all" onclick="copyEmail()">
<span className="iconify" data-icon="lucide:copy" data-width="18"></span>
                            Copy email address
                        </button>
</div>
</div>
</div>
</section>

<footer className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-600">
<p>© 2025 Kaushal Raj Gupta. Crafted with precision.</p>
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 hover:text-white transition-colors group" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="14"></span>
<span className="hidden group-hover:inline">Twitter</span>
</a>
<a className="flex items-center gap-2 hover:text-white transition-colors group" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="14"></span>
<span className="hidden group-hover:inline">LinkedIn</span>
</a>
<a className="flex items-center gap-2 hover:text-white transition-colors group" href="#">
<span className="iconify" data-icon="lucide:github" data-width="14"></span>
<span className="hidden group-hover:inline">GitHub</span>
</a>
<a className="flex items-center gap-2 hover:text-pink-500 transition-colors group" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="14"></span>
<span className="hidden group-hover:inline">Instagram</span>
</a>
</div>
</footer>
</main>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] glass-nav px-4 py-3 rounded-full flex items-center gap-3 shadow-2xl transition-all duration-300 opacity-0 translate-y-10" id="toast">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-xs font-medium text-white">Email copied to clipboard</span>
</div>


    </>
  );
}
