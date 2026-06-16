import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


document.write(new Date().getFullYear())


        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-base font-semibold text-zinc-100 tracking-tighter" href="#">NW</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-100 transition-colors" href="#experience">Experience</a>
<a className="hover:text-zinc-100 transition-colors" href="#education">Education</a>
<a className="hover:text-zinc-100 transition-colors" href="#skills">Skills</a>
<a className="hover:text-zinc-100 transition-colors" href="#projects">Projects</a>
</div>
<a className="text-sm font-medium text-zinc-950 bg-zinc-100 hover:bg-zinc-200 transition-colors px-4 py-2 rounded-full" href="#contact">
                Connect
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
<div className="hero-glow"></div>
<div className="max-w-3xl mx-auto text-center flex flex-col items-center z-10">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-medium text-zinc-300 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Nikita Wankhede • Available for new opportunities
            </div>
<h1 className="reveal delay-100 text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500 mb-6 leading-tight">
                Architecting Resilient <br/> Cloud Infrastructure
            </h1>
<p className="reveal delay-200 text-base md:text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
                Linux &amp; AWS Cloud Expert with 3+ years of experience building secure, highly available, and scalable systems. Specializing in infrastructure design, automation, and continuous monitoring.
            </p>
<div className="reveal delay-300 flex flex-wrap items-center justify-center gap-4">
<a className="text-sm font-medium text-zinc-950 bg-zinc-100 hover:bg-zinc-200 transition-colors px-6 py-3 rounded-full flex items-center gap-2" href="#experience">
                    View Experience
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="text-sm font-medium text-zinc-300 bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-colors px-6 py-3 rounded-full flex items-center gap-2" href="#contact">
                    Contact Me
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-zinc-900/20" id="about">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 text-center">
<div className="reveal flex flex-col items-center">
<span className="text-4xl font-semibold tracking-tighter text-zinc-100 mb-2">3+</span>
<span className="text-xs text-zinc-500 font-medium tracking-wide uppercase">Years Experience</span>
</div>
<div className="reveal delay-100 flex flex-col items-center">
<span className="text-4xl font-semibold tracking-tighter text-zinc-100 mb-2">20+</span>
<span className="text-xs text-zinc-500 font-medium tracking-wide uppercase">AWS Services</span>
</div>
<div className="reveal delay-200 flex flex-col items-center">
<span className="text-4xl font-semibold tracking-tighter text-zinc-100 mb-2">100%</span>
<span className="text-xs text-zinc-500 font-medium tracking-wide uppercase">Infrastructure as Code</span>
</div>
<div className="reveal delay-300 flex flex-col items-center">
<span className="text-4xl font-semibold tracking-tighter text-zinc-100 mb-2">24/7</span>
<span className="text-xs text-zinc-500 font-medium tracking-wide uppercase">Monitoring Setup</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="experience">
<div className="max-w-3xl mx-auto">
<h2 className="reveal text-3xl font-semibold tracking-tight text-zinc-100 mb-12">Professional Experience</h2>
<div className="relative border-l border-white/10 ml-3 pl-8 pb-8">

<div className="absolute w-3 h-3 bg-zinc-100 rounded-full -left-[6.5px] top-1 ring-4 ring-zinc-950"></div>
<div className="reveal">
<div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
<h3 className="text-xl font-medium tracking-tight text-zinc-100">Linux and Cloud Engineer</h3>
<span className="text-sm text-zinc-500 font-medium mt-1 md:mt-0">Jan 2023 – Present</span>
</div>
<div className="text-base font-medium text-zinc-300 mb-6">Meeting Minds Technologies and IT Services · Remote, India</div>
<ul className="space-y-4 text-sm text-zinc-400">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-zinc-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Architected and maintained secure VPC environments, implementing multi-tier architectures to ensure high availability and fault tolerance.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-zinc-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Administered enterprise Linux servers (Red Hat, CentOS, Ubuntu), managing Logical Volume Management (LVM), OS patching, and proactive vulnerability management.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-zinc-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Automated infrastructure provisioning and configuration management utilizing AWS CloudFormation and Ansible, significantly reducing manual deployment overhead.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-zinc-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Implemented comprehensive monitoring and security postures using AWS CloudWatch, robust IAM policies, Secrets Manager, and CloudTrail for compliance auditing.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5" id="education">
<div className="max-w-3xl mx-auto">
<h2 className="reveal text-3xl font-semibold tracking-tight text-zinc-100 mb-12">Education</h2>
<div className="relative border-l border-white/10 ml-3 pl-8 pb-8">

<div className="absolute w-3 h-3 bg-zinc-100 rounded-full -left-[6.5px] top-1 ring-4 ring-zinc-950"></div>
<div className="reveal">
<div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
<h3 className="text-xl font-medium tracking-tight text-zinc-100">B.Tech in Civil Engineering</h3>
<span className="text-sm text-zinc-500 font-medium mt-1 md:mt-0">Jul 2018 – Jun 2021</span>
</div>
<div className="text-base font-medium text-zinc-300">Savitribai Phule Pune University, Pune</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-zinc-900/20 border-y border-white/5" id="skills">
<div className="max-w-5xl mx-auto">
<h2 className="reveal text-3xl font-semibold tracking-tight text-zinc-100 mb-4">Technical Arsenal</h2>
<p className="reveal text-base text-zinc-400 mb-12">Comprehensive toolset for designing, deploying, and maintaining resilient cloud infrastructure.</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-zinc-100 transition-colors">
<iconify-icon className="text-2xl" icon="solar:cloud-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-4">AWS Cloud Compute</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">EC2</span>
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">VPC</span>
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">S3</span>
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">RDS</span>
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">ELB</span>
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">Route 53</span>
</div>
</div>

<div className="reveal delay-100 p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-zinc-100 transition-colors">
<iconify-icon className="text-2xl" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-4">Linux Administration</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">Red Hat</span>
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">CentOS</span>
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">Ubuntu</span>
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">LVM</span>
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">Bash Scripting</span>
</div>
</div>

<div className="reveal delay-200 p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-zinc-100 transition-colors">
<iconify-icon className="text-2xl" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-4">Security &amp; Monitoring</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">IAM</span>
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">CloudWatch</span>
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">CloudTrail</span>
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">AWS Config</span>
<span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-white/5">Nessus</span>
</div>
</div>

<div className="reveal p-6 rounded-2xl bg-transparent border border-dashed border-zinc-700 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-start md:items-center gap-6 mt-4">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-zinc-300" icon="solar:rocket-linear"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-base font-medium tracking-tight text-zinc-100 mb-1">Learning in Progress</h3>
<p className="text-sm text-zinc-400">Actively expanding my DevOps toolkit to enhance containerization and infrastructure automation.</p>
</div>
<div className="flex flex-wrap gap-2 shrink-0">
<span className="px-3 py-1.5 text-xs font-medium text-zinc-100 bg-zinc-800 rounded-md border border-zinc-600 flex items-center gap-1.5">
<iconify-icon icon="solar:code-square-linear"></iconify-icon> Terraform
                        </span>
<span className="px-3 py-1.5 text-xs font-medium text-zinc-100 bg-zinc-800 rounded-md border border-zinc-600 flex items-center gap-1.5">
<iconify-icon icon="solar:box-linear"></iconify-icon> Docker
                        </span>
<span className="px-3 py-1.5 text-xs font-medium text-zinc-100 bg-zinc-800 rounded-md border border-zinc-600 flex items-center gap-1.5">
<iconify-icon icon="solar:server-path-linear"></iconify-icon> Kubernetes
                        </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="projects">
<div className="max-w-5xl mx-auto">
<h2 className="reveal text-3xl font-semibold tracking-tight text-zinc-100 mb-12">Key Engineering Achievements</h2>
<div className="space-y-6">

<div className="reveal group relative bg-zinc-900/30 rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex-1">
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">Secure Multi-tier AWS Architecture</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                Designed and deployed a robust 3-tier VPC architecture. Implemented public/private subnets, NAT gateways, and Application Load Balancers, resulting in a highly available environment serving concurrent user traffic securely.
                            </p>
<div className="flex gap-2 text-xs font-medium text-zinc-500">
<span>VPC</span> • <span>EC2</span> • <span>RDS</span> • <span>ELB</span>
</div>
</div>
</div>
</div>

<div className="reveal group relative bg-zinc-900/30 rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex-1">
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">Automated Infrastructure Provisioning</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                Streamlined environment setup by authoring reusable AWS CloudFormation templates and Ansible playbooks. This automation reduced environment provisioning time by over 60% and minimized human error across deployments.
                            </p>
<div className="flex gap-2 text-xs font-medium text-zinc-500">
<span>CloudFormation</span> • <span>Ansible</span> • <span>Bash</span>
</div>
</div>
</div>
</div>

<div className="reveal group relative bg-zinc-900/30 rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex-1">
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">Compliance &amp; Monitoring Overhaul</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                Established comprehensive observability using CloudWatch and SNS for automated alerting. Enforced security baselines through AWS Config and standardized IAM policies, aligning infrastructure with industry compliance standards.
                            </p>
<div className="flex gap-2 text-xs font-medium text-zinc-500">
<span>CloudWatch</span> • <span>IAM</span> • <span>CloudTrail</span> • <span>SNS</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-zinc-900/20 border-t border-white/5 text-center" id="contact">
<div className="max-w-2xl mx-auto flex flex-col items-center">
<h2 className="reveal text-3xl font-semibold tracking-tight text-zinc-100 mb-4">Let's Build Together</h2>
<p className="reveal text-base text-zinc-400 mb-10">
                Currently open to discussing new opportunities in Cloud Infrastructure and DevOps roles.
            </p>
<div className="reveal flex flex-wrap items-center justify-center gap-4 mb-12">
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 bg-zinc-100 hover:bg-zinc-200 transition-colors px-8 py-4 rounded-full" href="mailto:nwankhede1410@gmail.com">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
                    nwankhede1410@gmail.com
                </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-colors px-8 py-4 rounded-full" href="tel:+919730095401">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                    +91 9730095401
                </a>
</div>
<div className="reveal flex items-center justify-center gap-6">
<a aria-label="LinkedIn" className="text-zinc-500 hover:text-zinc-100 transition-colors p-2" href="https://linkedin.com/in/nikitaw14" target="_blank">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</a>
<a aria-label="GitHub" className="text-zinc-500 hover:text-zinc-100 transition-colors p-2" href="#">
<iconify-icon className="text-2xl" icon="solar:code-circle-linear"></iconify-icon>
</a>
<a aria-label="Resume" className="text-zinc-500 hover:text-zinc-100 transition-colors p-2" href="#">
<iconify-icon className="text-2xl" icon="solar:document-text-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="py-8 px-6 border-t border-white/5 text-center">
<p className="text-xs text-zinc-600 font-medium tracking-wide">
            ©  Nikita Wankhede. All rights reserved.
        </p>
</footer>



    </>
  );
}
