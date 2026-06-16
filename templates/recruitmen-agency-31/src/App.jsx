import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<header className="fixed top-0 w-full z-50 bg-[#FCFAF9]/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-serif-elegant text-xl font-medium tracking-tighter text-stone-800" href="#">NXT</a>
<nav className="hidden md:flex gap-8 text-sm font-normal text-stone-500">
<a className="hover:text-stone-800 transition-colors" href="#services">Services</a>
<a className="hover:text-stone-800 transition-colors" href="#work">Work</a>
<a className="hover:text-stone-800 transition-colors" href="#team">Team</a>
<a className="hover:text-stone-800 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-stone-800 hover:text-stone-500 transition-colors" href="#">Sign In</a>
<a className="text-sm font-medium bg-rose-100/80 text-rose-900 px-4 py-2 rounded-full hover:bg-rose-200 transition-colors" href="#">Get in touch</a>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 px-6">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50/80 border border-rose-200/60 text-xs font-medium text-rose-800 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
                    Accepting new clients for Q3
                </div>
<h1 className="md:text-7xl leading-tight text-5xl font-medium text-stone-800 tracking-tight mb-6">
                    Build teams that <br className="hidden md:block"/> <span className="italic text-stone-700">shape the future.</span>
</h1>
<p className="text-lg md:text-xl font-normal text-stone-500 max-w-2xl mb-10 leading-relaxed">
                    We combine precision recruitment with strategic employer branding to help forward-thinking companies attract and retain top-tier talent.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-stone-800 text-stone-50 text-sm font-medium hover:bg-stone-700 transition-colors" href="#">
                        Start hiring
                        <iconify-icon className="" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-stone-50/50 border border-stone-200 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-colors" href="#">
                        Explore open roles
                    </a>
</div>
</div>
</section>

<section className="border-stone-200/50 border-t pt-24 pr-6 pb-24 pl-6" id="services">
<div className="max-w-6xl mr-auto ml-auto">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-stone-800 mb-4">Core Expertise</h2>
<p className="text-base text-stone-500 font-normal">An integrated approach to talent acquisition. We don't just fill seats; we build your employer brand to attract the best naturally.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white border border-stone-200/60 rounded-3xl p-10 hover:border-rose-200 transition-colors shadow-sm shadow-stone-100/50 group">
<div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600 mb-8 group-hover:bg-rose-100/80 group-hover:text-rose-700 transition-colors">
<iconify-icon height="24" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-stone-800 mb-3">Executive Recruitment</h3>
<p className="text-sm text-stone-500 font-normal leading-relaxed mb-8">Targeted headhunting for leadership and specialized technical roles. Our deep network ensures you connect with passive candidates who align with your vision.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-rose-400" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Retained &amp; Contingency Search
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-rose-400" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Technical &amp; Executive Screening
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-rose-400" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Interview Process Optimization
                            </li>
</ul>
</div>

<div className="bg-white border border-stone-200/60 rounded-3xl p-10 hover:border-rose-200 transition-colors shadow-sm shadow-stone-100/50 group">
<div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600 mb-8 group-hover:bg-rose-100/80 group-hover:text-rose-700 transition-colors">
<iconify-icon height="24" icon="solar:megaphone-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-stone-800 mb-3">Employer Branding</h3>
<p className="text-sm text-stone-500 font-normal leading-relaxed mb-8">We treat recruitment like marketing. We help you define your EVP and broadcast it to attract inbound talent and reduce cost-per-hire.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-rose-400" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Career Page Design &amp; Copywriting
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-rose-400" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Talent Pipeline Marketing
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-rose-400" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Employee Value Proposition (EVP)
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50/50" id="work">
<div className="max-w-6xl mx-auto">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight text-stone-800 mb-4">Proven Impact</h2>
<p className="text-base text-stone-500 font-normal">Real results from our partnerships with high-growth startups and established enterprises.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-rose-600 transition-colors" href="#">
                        View all case studies
                        <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white border border-stone-200/50 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:border-rose-200 transition-colors">
<div className="relative h-48 w-full bg-rose-50/50 overflow-hidden border-b border-stone-100">
<img alt="Fintech Engineering Team" className="object-cover w-full h-full grayscale mix-blend-multiply opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="text-rose-500 font-serif-elegant font-medium tracking-tight text-4xl mb-2">45%</div>
<h4 className="text-base font-medium text-stone-800 mb-2">Decrease in time-to-hire</h4>
<p className="text-sm text-stone-500 flex-grow">For a Series B fintech scaling their engineering division across Europe.</p>
<div className="mt-6 pt-6 border-t border-stone-100 flex items-center gap-2 text-xs font-medium text-stone-400 uppercase tracking-wider">
                                Fintech <span className="w-1 h-1 rounded-full bg-stone-300"></span> Recruitment
                            </div>
</div>
</div>

<div className="group bg-white border border-stone-200/50 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:border-rose-200 transition-colors">
<div className="relative h-48 w-full bg-rose-50/50 overflow-hidden border-b border-stone-100">
<img alt="Marketing Data" className="object-cover w-full h-full grayscale mix-blend-multiply opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="text-rose-500 font-serif-elegant font-medium tracking-tight text-4xl mb-2">2.5x</div>
<h4 className="text-base font-medium text-stone-800 mb-2">Increase in inbound apps</h4>
<p className="text-sm text-stone-500 flex-grow">Following a comprehensive employer brand overhaul and new career site launch.</p>
<div className="mt-6 pt-6 border-t border-stone-100 flex items-center gap-2 text-xs font-medium text-stone-400 uppercase tracking-wider">
                                SaaS <span className="w-1 h-1 rounded-full bg-stone-300"></span> Marketing
                            </div>
</div>
</div>

<div className="group bg-white border border-stone-200/50 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:border-rose-200 transition-colors">
<div className="relative h-48 w-full bg-rose-50/50 overflow-hidden border-b border-stone-100">
<img alt="E-Commerce Payments" className="object-cover w-full h-full grayscale mix-blend-multiply opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="text-rose-500 font-serif-elegant font-medium tracking-tight text-4xl mb-2">120+</div>
<h4 className="text-base font-medium text-stone-800 mb-2">Key roles filled</h4>
<p className="text-sm text-stone-500 flex-grow">Embedded talent partnership resulting in rapid team expansion over 12 months.</p>
<div className="mt-6 pt-6 border-t border-stone-100 flex items-center gap-2 text-xs font-medium text-stone-400 uppercase tracking-wider">
                                E-commerce <span className="w-1 h-1 rounded-full bg-stone-300"></span> Embedded
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-stone-200/50 bg-[#FCFAF9]">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-rose-200 mb-8 mx-auto" height="48" icon="solar:quote-left-linear" width="48"></iconify-icon>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-700 leading-snug mb-10 italic">
                    "NXT fundamentally changed how we approach hiring. They didn't just send us resumes; they helped us craft a narrative that made top developers want to join us. The quality of candidates improved drastically."
                </h3>
<div className="flex items-center justify-center gap-4 text-left">
<img alt="Client" className="w-12 h-12 rounded-full grayscale opacity-80 border border-stone-200" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop"/>
<div className="">
<div className="text-sm font-medium text-stone-800">Marcus Thorne</div>
<div className="text-xs text-stone-500">CTO, Vertex Analytics</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="team">
<div className="max-w-6xl mx-auto">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-stone-800 mb-4">Leadership</h2>
<p className="text-base text-stone-500 font-normal">A boutique agency approach with enterprise-level experience.</p>
</div>
<div className="grid sm:grid-cols-2 gap-12 md:gap-24">
<div className="group">
<div className="relative overflow-hidden rounded-[2rem] mb-6 bg-rose-100/60 aspect-[4/5]">
<img alt="Sarah Jenkins" className="object-cover w-full h-full grayscale mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-800">Sarah Jenkins</h3>
<p className="text-sm text-rose-500 font-medium mb-3">Head of Recruitment</p>
<p className="text-sm text-stone-500 leading-relaxed">Former internal talent lead at major tech firms. Sarah specializes in identifying high-impact engineering and product leadership.</p>
</div>
<div className="group">
<div className="relative overflow-hidden rounded-[2rem] mb-6 bg-rose-100/60 aspect-[4/5]">
<img alt="David Chen" className="object-cover w-full h-full grayscale mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-800">David Chen</h3>
<p className="text-sm text-rose-500 font-medium mb-3">Head of Employer Brand</p>
<p className="text-sm text-stone-500 leading-relaxed">10+ years in B2B marketing before pivoting to talent. David ensures your company narrative attracts the right demographic.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-stone-200/50" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-stone-800 mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-stone-200/60 rounded-2xl open:shadow-sm open:border-rose-100 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-stone-800">
<span>How does your pricing model work?</span>
<span className="transition group-open:rotate-180 text-rose-300">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-stone-500 text-sm p-6 pt-0 leading-relaxed">
                            We offer flexible models depending on your needs. For standard recruitment, we work on a contingency or retained basis (typically 15-20% of first-year base salary). For employer branding projects, we provide clear, milestone-based flat fees.
                        </div>
</details>
<details className="group bg-white border border-stone-200/60 rounded-2xl open:shadow-sm open:border-rose-100 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-stone-800">
<span>Do you guarantee your placements?</span>
<span className="transition group-open:rotate-180 text-rose-300">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-stone-500 text-sm p-6 pt-0 leading-relaxed">
                            Yes. We offer a 90-day guarantee on all direct-hire placements. If a candidate leaves or is let go within that period, we will prioritize finding a replacement at no additional cost.
                        </div>
</details>
<details className="group bg-white border border-stone-200/60 rounded-2xl open:shadow-sm open:border-rose-100 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-stone-800">
<span>What industries do you specialize in?</span>
<span className="transition group-open:rotate-180 text-rose-300">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-stone-500 text-sm p-6 pt-0 leading-relaxed">
                            Our primary focus is on high-growth technology sectors, including SaaS, Fintech, E-commerce, and Healthtech. However, our employer branding methodologies are highly effective across various modern industries.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 bg-stone-800 text-stone-50 rounded-[3rem] mx-4 md:mx-12 mb-12 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl -z-0 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-80 h-80 bg-stone-600/30 rounded-full blur-3xl -z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Ready to scale your team?</h2>
<p className="text-stone-300 text-lg mb-10 font-light">Let's discuss your hiring goals and how our integrated approach can help you reach them faster.</p>
<a className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-rose-100 text-stone-800 text-sm font-medium hover:bg-white transition-colors" href="#">
                    Schedule a consultation
                </a>
</div>
</section>
</main>

<footer className="bg-[#FCFAF9] py-12 px-6 border-t border-stone-200/50">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-8">
<span className="font-serif-elegant text-lg font-medium tracking-tighter text-stone-800">NXT</span>
<span className="text-xs text-stone-400">© 2024 NXT Agency. All rights reserved.</span>
</div>
<div className="flex gap-6 text-sm text-stone-500">
<a className="hover:text-stone-800 transition-colors" href="#">Privacy</a>
<a className="hover:text-stone-800 transition-colors" href="#">Terms</a>
<a className="hover:text-stone-800 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-stone-800 transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>

    </>
  );
}
