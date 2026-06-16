import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Smooth Scroll handling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-serif text-xl font-medium tracking-tight text-slate-900 flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                Prerna Pawar
            </a>
<div className="hidden md:flex items-center gap-8 text-[13px] text-slate-500 font-medium tracking-wide">
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="hover:text-slate-900 transition-colors" href="#knowledge">Thinking</a>
<a className="hover:text-slate-900 transition-colors" href="#projects">Projects</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-full hover:bg-slate-800 transition-all shadow-sm hover:shadow-md" href="#contact">
                    Get in touch
                </a>
<button className="md:hidden text-slate-500">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>
<main className="w-full pt-16">

<section className="relative min-h-[90vh] flex items-center border-b border-slate-100 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-10 md:pt-0">

<div className="order-2 md:order-1 space-y-8 animate-fade-in relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        MBA in Finance
                    </div>
<h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] text-slate-900">
                        Bridging the gap between <span className="italic text-slate-500">data</span> and <span className="text-indigo-600">decisions</span>.
                    </h1>
<p className="text-lg text-slate-500 font-light max-w-lg leading-relaxed">
                        I specialize in financial modeling, analytics, and strategy. I don't just process numbers; I translate them into actionable business narratives.
                    </p>
<div className="flex flex-wrap gap-4 pt-2">
<a className="group inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-200" href="#projects">
                            View Work
                            <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 text-slate-600 px-6 py-3 rounded-xl text-sm font-medium border border-slate-200 hover:bg-white hover:border-slate-300 transition-all bg-white shadow-sm" href="#about">
                            More about me
                        </a>
</div>
<div className="pt-8 flex items-center gap-6 text-slate-400">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
<span className="text-xs uppercase tracking-wider font-semibold">Analytics</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="pie-chart"></i>
<span className="text-xs uppercase tracking-wider font-semibold">Strategy</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span className="text-xs uppercase tracking-wider font-semibold">Growth</span>
</div>
</div>
</div>

<div className="order-1 md:order-2 relative flex justify-center md:justify-end animate-fade-in delay-200">
<div className="relative w-[280px] h-[350px] md:w-[400px] md:h-[500px]">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-blue-50 rounded-[2rem] rotate-3 scale-105 opacity-60"></div>
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-stripes opacity-10"></div>

<div className="relative h-full w-full rounded-[1.5rem] overflow-hidden shadow-2xl shadow-indigo-100 border border-white">

<img alt="Prerna Pawar" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out" src="https://i.postimg.cc/8P22M6pM/profile-placeholder.jpg" style={{objectPosition: 'center 20%'}}/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-fade-in delay-300">
<div className="bg-green-100 p-2 rounded-lg text-green-700">
<i className="w-5 h-5" data-lucide="graduation-cap"></i>
</div>
<div>
<p className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">Education</p>
<p className="text-sm font-medium text-slate-900">MBA Finance</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16">
<div className="md:col-span-4">
<h2 className="font-serif text-3xl text-slate-900 tracking-tight mb-4">The Philosophy</h2>
<div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
</div>
<div className="md:col-span-8 space-y-8">
<p className="text-xl md:text-2xl font-light text-slate-600 leading-relaxed">
<span className="text-slate-900 font-medium">Finance is storytelling with constraints.</span> Too often, analysts get lost in the spreadsheets and forget the business reality. My work focuses on connecting the rigorous quantitative analysis with the qualitative strategic vision.
                        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
<i className="w-6 h-6 text-indigo-600 mb-3" data-lucide="search"></i>
<h3 className="font-medium text-slate-900 mb-2">Forensic Analysis</h3>
<p className="text-sm text-slate-500 leading-relaxed">Digging deep into financial statements to find what others miss in the footnotes.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
<i className="w-6 h-6 text-indigo-600 mb-3" data-lucide="code-2"></i>
<h3 className="font-medium text-slate-900 mb-2">Technical Proficiency</h3>
<p className="text-sm text-slate-500 leading-relaxed">Leveraging Python and SQL to handle datasets too large for Excel alone.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-t border-slate-100" id="knowledge">
<div className="max-w-6xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="font-serif text-3xl text-slate-900 tracking-tight">Selected Insights</h2>
<p className="text-slate-500 mt-2 text-sm font-light">My writing and case studies on finance.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors group" href="#">
                        View all posts 
                        <i className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-white border border-slate-200 hover-card flex flex-col justify-between p-8">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Deep Dive</span>
</div>
<h3 className="font-serif text-3xl text-slate-900 mb-3">The Valuation Paradox</h3>
<p className="text-slate-500 text-lg font-light leading-relaxed max-w-lg">
                                Why standard DCF models fail in high-uncertainty environments. I explore alternative valuation methods for startups and distressed assets, focusing on probability-weighted scenarios.
                            </p>
</div>
<div className="mt-8 flex items-center gap-4">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 border border-slate-200 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-all">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</span>
<span className="text-sm font-medium text-slate-400 group-hover:text-slate-600 transition-colors">Read Case Study</span>
</div>
</div>

<div className="md:col-span-1 flex flex-col gap-6 h-full">
<div className="flex-1 bg-white rounded-3xl border border-slate-200 p-6 hover-card group relative overflow-hidden">
<div className="relative z-10">
<i className="w-6 h-6 text-slate-400 mb-4 group-hover:text-indigo-500 transition-colors" data-lucide="database"></i>
<h4 className="font-medium text-lg text-slate-900 mb-1">SQL for Finance</h4>
<p className="text-sm text-slate-500">A guide to moving away from VLOOKUPs towards robust queries.</p>
</div>
</div>
<div className="flex-1 bg-slate-900 rounded-3xl border border-slate-800 p-6 hover-card group relative overflow-hidden text-white">
<div className="relative z-10">
<i className="w-6 h-6 text-slate-400 mb-4 group-hover:text-white transition-colors" data-lucide="trending-up"></i>
<h4 className="font-medium text-lg text-white mb-1">Market Cycles</h4>
<p className="text-sm text-slate-400">Historical analysis of interest rate impacts on equity premiums.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate-400 uppercase tracking-widest mb-10">Tools of choice</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">

<div className="flex items-center gap-2">
<i className="w-5 h-5 text-green-600" data-lucide="file-spreadsheet"></i>
<span className="font-semibold text-slate-700">Excel (Advanced)</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-yellow-600" data-lucide="terminal"></i>
<span className="font-semibold text-slate-700">Python</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-blue-600" data-lucide="database"></i>
<span className="font-semibold text-slate-700">SQL</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-orange-600" data-lucide="bar-chart"></i>
<span className="font-semibold text-slate-700">Tableau</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-red-600" data-lucide="presentation"></i>
<span className="font-semibold text-slate-700">PowerPoint</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="contact">
<div className="max-w-2xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-6">
<i className="w-5 h-5 text-slate-900" data-lucide="mail"></i>
</div>
<h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">Ready to collaborate?</h2>
<p className="text-slate-500 mb-8 font-light text-lg">
                    I'm currently open to new opportunities in financial analysis and corporate strategy.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-200" href="mailto:email@example.com">
                        Send me an email
                    </a>
<a className="w-full sm:w-auto px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-medium hover:border-slate-300 hover:bg-slate-50 transition-all" href="#">
                        LinkedIn
                    </a>
</div>
<div className="mt-20 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
<p>© 2025 Prerna Pawar</p>
<p className="mt-2 md:mt-0">Designed with <i className="w-3 h-3 inline text-red-400 mx-1" data-lucide="heart"></i> and Tailwind</p>
</div>
</div>
</section>
</main>


    </>
  );
}
