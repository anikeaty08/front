import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



      function openConsultationModal(){document.getElementById("consultationModal").classList.remove("hidden");document.body.style.overflow="hidden";}function closeConsultationModal(){document.getElementById("consultationModal").classList.add("hidden");document.body.style.overflow="";}
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 mx-auto max-w-[90rem] justify-between px-8 opacity-[0.05] hidden lg:flex">
<div className="w-px h-full bg-slate-100"></div>
<div className="w-px h-full bg-slate-100"></div>
<div className="w-px h-full bg-slate-100"></div>
<div className="w-px h-full bg-slate-100"></div>
</div>

<div className="w-full lg:max-w-7xl z-10 mx-auto relative lg:p-8 lg:space-y-6">

<header className="overflow-hidden min-h-[90vh] flex flex-col text-neutral-900 bg-[#d4af37] rounded-none lg:rounded-[2.5rem] relative">

<nav className="flex z-20 border-black/10 border-b lg:border py-6 px-6 lg:px-8 relative items-center justify-between [animation:animationIn_0.8s_ease-out_0s_both] animate-on-scroll">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-900" icon="solar:mosque-linear" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-xl font-semibold tracking-tight font-dm-sans">
              Manaazil
            </span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-medium text-neutral-800">
<a className="hover:text-black transition-colors font-sans opacity-70 hover:opacity-100" href="#features">
              Platform
            </a>
<a className="hover:text-black transition-colors font-sans opacity-70 hover:opacity-100" href="#solutions">
              Solutions
            </a>
<a className="hover:text-black transition-colors font-sans opacity-70 hover:opacity-100" href="#pricing">
              Tiers
            </a>
<a className="hover:text-black transition-colors font-sans opacity-70 hover:opacity-100" href="#">
              Contact
            </a>
</div>
<div className="flex items-center gap-4">
<button className="bg-black text-[#d4af37] px-5 py-2 rounded-full text-base font-medium hover:bg-neutral-800 transition-colors" onclick="openConsultationModal()">
              Contact Now
            </button>
</div>
</nav>

<div className="flex-1 grid grid-cols-1 lg:grid-cols-2 z-20 pt-12 pb-24 px-6 lg:px-8 relative gap-x-12 gap-y-12 items-center">
<div className="space-y-8 max-w-xl">
<h1 className="lg:text-7xl leading-[1.05] text-5xl tracking-tight font-dm-sans font-light [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
              The operating system for
              <span className="italic font-normal">modern</span>
              Islamic schools.
            </h1>
<p className="text-xl text-neutral-800 max-w-md leading-relaxed font-sans [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
              Streamline your entire administration. From admissions and tuition
              to grading and parent communication—all in one place.
            </p>
<div className="flex flex-wrap gap-4 pt-4 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<button className="hover:bg-neutral-800 transition-colors text-base font-medium text-white bg-neutral-900 rounded-full px-8 py-4 shadow-xl" onclick="openConsultationModal()">
                Contact Now
              </button>
</div>
</div>

<div className="min-h-[500px] flex lg:justify-end w-full h-full relative items-center justify-center [animation:animationIn_1.2s_ease-out_0.5s_both] animate-on-scroll">

<div className="absolute inset-0 rounded-3xl overflow-hidden mix-blend-multiply opacity-90">
<img alt="Islamic Architecture" className="object-center grayscale-[20%] sepia-[20%] w-full h-full object-cover" src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
</div>

<div className="text-white bg-[#020403] w-96 border-white/10 border rounded-[2rem] lg:mr-8 p-8 relative shadow-2xl backdrop-blur-sm [animation:animationIn_1s_ease-out_0.7s_both] animate-on-scroll">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-emerald-400" icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-400 font-sans">
                      Daily Overview
                    </p>
<h3 className="text-sm font-semibold font-sans">
                      Today's Attendance
                    </h3>
</div>
</div>
<span className="bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium font-sans border border-emerald-500/20">
                  Live
                </span>
</div>
<div className="space-y-4">

<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="text-sm text-neutral-300">Present</span>
<span className="text-lg font-mono text-white">482</span>
</div>

<div className="flex justify-between items-center border-b border-white/5 pb-3">
<span className="text-sm text-neutral-300">Late</span>
<span className="text-lg font-mono text-[#d4af37]">12</span>
</div>

<div className="flex justify-between items-center">
<span className="text-sm text-neutral-300">Absent</span>
<span className="text-lg font-mono text-red-400">08</span>
</div>
</div>
<div className="mt-8 pt-4 border-t border-white/10">
<div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
<span>Fee Collection</span>
<span>85% Goal</span>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#d4af37] w-[85%] h-full rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

</header>

<section className="py-24 px-6 lg:px-4" id="features">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-4 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<span className="inline-block px-4 py-1 rounded-full bg-[#064e3b]/30 border border-[#064e3b] text-sm font-medium text-[#d4af37] font-sans">
            Core Capabilities
          </span>
<h2 className="text-4xl lg:text-5xl text-white tracking-tight leading-tight font-dm-sans font-light">
            Built for the sanctity of
            <br/>
            knowledge.
          </h2>
<p className="text-slate-400 font-sans text-lg font-light">
            Eliminate administrative chaos. Manage students, teachers, and
            operations in one unified system.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#d4af37] p-8 rounded-[2rem] text-neutral-900 flex flex-col justify-between min-h-[400px] group [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div>
<div className="flex justify-between items-start mb-6">
<iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.2" width="48"></iconify-icon>
<div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-2xl mb-3 tracking-tight font-dm-sans font-light">
                Centralized Records
              </h3>
<p className="text-neutral-900/80 leading-relaxed text-base font-sans">
                Digital files for every student. Track enrollment history,
                immunizations, and academic records securely in the cloud.
              </p>
</div>
<div className="flex gap-2 mt-8">
<div className="px-3 py-1 bg-black/10 rounded-md text-xs font-semibold">
                Admissions
              </div>
<div className="px-3 py-1 bg-black/10 rounded-md text-xs font-semibold">
                Tuition
              </div>
</div>
</div>

<div className="bg-[#f8fafc] p-8 rounded-[2rem] text-neutral-900 flex flex-col justify-between min-h-[400px] [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div>
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-[#064e3b]" icon="solar:chat-round-line-linear" strokeWidth="1.2" width="48"></iconify-icon>
<div className="w-10 h-10 bg-neutral-100 rounded-full"></div>
</div>
<h3 className="text-2xl mb-3 tracking-tight font-dm-sans font-light">
                Parent Communication
              </h3>
<p className="text-neutral-600 leading-relaxed text-base font-sans">
                Bridge the gap between home and school. Automated attendance
                alerts, homework updates, and newsletters via email or SMS.
              </p>
</div>
<div className="flex -space-x-2 mt-8">
<div className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-white flex items-center justify-center text-[10px] text-neutral-500">
                SMS
              </div>
<div className="w-8 h-8 rounded-full bg-neutral-300 border-2 border-white flex items-center justify-center text-[10px] text-neutral-500">
                App
              </div>
<div className="w-8 h-8 rounded-full bg-[#064e3b] border-2 border-white flex items-center justify-center text-white text-[10px]">
                Mail
              </div>
</div>
</div>

<div className="bg-[#064e3b] p-8 rounded-[2rem] text-white flex flex-col justify-between min-h-[400px] [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll relative overflow-hidden">

<div className="absolute top-0 right-0 p-12 opacity-10">
<iconify-icon icon="solar:pie-chart-2-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-[#d4af37]" icon="solar:chart-square-linear" strokeWidth="1.2" width="48"></iconify-icon>
</div>
<h3 className="text-2xl mb-3 tracking-tight font-dm-sans font-light">
                Institute Analytics
              </h3>
<p className="text-emerald-100 leading-relaxed text-base font-sans">
                Data-driven decisions for your board. Track teacher performance,
                student retention rates, and financial health.
              </p>
</div>
<div className="mt-8 relative z-10">
<span className="text-sm font-medium text-[#d4af37] border-b border-[#d4af37] pb-0.5 font-sans cursor-pointer hover:text-white hover:border-white transition-colors">
                View Dashboard
              </span>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 lg:px-4" id="solutions">
<div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="max-w-2xl">
<h2 className="text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4 font-dm-sans font-light">
              Tailored for every
              <br/>
              stage of growth.
            </h2>
<p className="text-slate-400 font-sans text-lg">
              Whether you run a Sunday school or a full K-12 academy, we have a
              custom tier for you.
            </p>
</div>
<div className="flex gap-2">
<button className="px-6 py-2 rounded-full border border-neutral-700 text-white text-sm hover:bg-neutral-800 transition-colors">
              Compare Features
            </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-[#111111] border border-white/10 p-8 rounded-[2rem] text-white flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll relative group hover:border-[#d4af37]/50 transition-colors">
<div className="mb-6">
<span className="text-[#d4af37] font-sans text-sm font-semibold tracking-wide uppercase">
                Essentials
              </span>
<h3 className="text-3xl mt-2 mb-4 font-dm-sans font-medium">
                Weekend Schools
              </h3>
<p className="text-neutral-400 text-sm leading-relaxed font-sans">
                Perfect for Sunday schools and Maktabs needing simple attendance
                and basic grading.
              </p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon className="text-[#d4af37]" icon="solar:check-circle-linear"></iconify-icon>
                Digital Attendance
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon className="text-[#d4af37]" icon="solar:check-circle-linear"></iconify-icon>
                Basic Gradebook
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon className="text-[#d4af37]" icon="solar:check-circle-linear"></iconify-icon>
                Parent Email Alerts
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon className="text-[#d4af37]" icon="solar:check-circle-linear"></iconify-icon>
                Volunteer Management
              </li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors">
              Get Started
            </button>
</div>

<div className="bg-[#064e3b] p-8 rounded-[2rem] text-white flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll relative transform lg:-translate-y-4 border border-[#d4af37]/30 shadow-2xl shadow-[#064e3b]/20">
<div className="absolute top-4 right-6">
<span className="bg-[#d4af37] text-black text-[10px] font-bold px-2 py-1 rounded">
                MOST POPULAR
              </span>
</div>
<div className="mb-6">
<span className="text-[#d4af37] font-sans text-sm font-semibold tracking-wide uppercase">
                Professional
              </span>
<h3 className="text-3xl mt-2 mb-4 font-dm-sans font-medium">
                Weekday Madrasas
              </h3>
<p className="text-emerald-100 text-sm leading-relaxed font-sans">
                Robust tools for after-school programs requiring curriculum
                tracking and fee management.
              </p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white font-sans">
<iconify-icon className="text-[#d4af37]" icon="solar:check-circle-bold"></iconify-icon>
                Advanced Fee Collection
              </li>
<li className="flex items-center gap-3 text-sm text-white font-sans">
<iconify-icon className="text-[#d4af37]" icon="solar:check-circle-bold"></iconify-icon>
                Curriculum Planner
              </li>
<li className="flex items-center gap-3 text-sm text-white font-sans">
<iconify-icon className="text-[#d4af37]" icon="solar:check-circle-bold"></iconify-icon>
                Teacher Portal
              </li>
<li className="flex items-center gap-3 text-sm text-white font-sans">
<iconify-icon className="text-[#d4af37]" icon="solar:check-circle-bold"></iconify-icon>
                Assignment Uploads
              </li>
<li className="flex items-center gap-3 text-sm text-white font-sans">
<iconify-icon className="text-[#d4af37]" icon="solar:check-circle-bold"></iconify-icon>
                Dedicated Mobile App
              </li>
</ul>
<button className="w-full py-3 rounded-xl bg-[#d4af37] text-black text-sm font-medium hover:bg-[#c29f30] transition-colors">
              Request Demo
            </button>
</div>

<div className="bg-[#111111] border border-white/10 p-8 rounded-[2rem] text-white flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll hover:border-[#d4af37]/50 transition-colors">
<div className="mb-6">
<span className="text-[#d4af37] font-sans text-sm font-semibold tracking-wide uppercase">
                Enterprise
              </span>
<h3 className="text-3xl mt-2 mb-4 font-dm-sans font-medium">
                Full-Time K-12
              </h3>
<p className="text-neutral-400 text-sm leading-relaxed font-sans">
                Comprehensive suite for full-time Islamic schools covering HR,
                Finance, and Academics.
              </p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon className="text-[#d4af37]" icon="solar:check-circle-linear"></iconify-icon>
                HR &amp; Payroll
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon className="text-[#d4af37]" icon="solar:check-circle-linear"></iconify-icon>
                Complex Scheduling
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon className="text-[#d4af37]" icon="solar:check-circle-linear"></iconify-icon>
                State Reporting
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon className="text-[#d4af37]" icon="solar:check-circle-linear"></iconify-icon>
                Transportation Management
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<iconify-icon className="text-[#d4af37]" icon="solar:check-circle-linear"></iconify-icon>
                API Access &amp; Integrations
              </li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors">
              Contact Sales
            </button>
</div>
</div>
</section>

<section className="overflow-hidden min-h-[700px] z-10 rounded-none lg:rounded-[2.5rem] mt-0 lg:mt-6 relative bg-[#d4af37]">
<div className="absolute inset-0">
<div className="absolute inset-0 islamic-pattern mix-blend-overlay opacity-10"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#d4af37] to-transparent"></div>
</div>
<div className="z-10 p-6 lg:p-24 flex flex-col h-full pt-12 pb-12 relative justify-center">
<div className="max-w-2xl [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<h2 className="text-5xl lg:text-7xl text-[#020403] tracking-tight leading-[1.05] mb-6 font-dm-sans font-light">
              Modernize your
              <br/>
              institution today.
            </h2>
<p className="text-[#020403]/80 text-xl max-w-lg mb-8 font-sans">
              Join visionary educators who are saving time on admin to focus on
              what matters most—delivering quality education.
            </p>
<button className="hover:bg-[#064e3b] hover:text-white transition-all hover:scale-105 text-base font-medium text-[#d4af37] bg-[#020403] rounded-full px-8 py-4 shadow-xl" onclick="openConsultationModal()">
              Schedule Consultation
            </button>
</div>
</div>

<div className="lg:right-24 lg:bottom-12 lg:w-80 overflow-hidden bg-[#020403] w-64 border-[#020403] border-8 rounded-[3rem] absolute right-8 bottom-[-50px] shadow-2xl rotate-[-6deg] [animation:animationIn_1s_ease-out_0.5s_both] animate-on-scroll hidden sm:block">
<div className="flex flex-col bg-[#FAFAFA] h-[600px] w-full relative">

<div className="w-full flex justify-between items-center px-6 pt-5 pb-2">
<span className="text-xs font-semibold text-neutral-900 font-sans">
                9:41
              </span>
<div className="flex gap-1.5 items-center">
<div className="w-4 h-4 rounded-full bg-neutral-900/10 flex items-center justify-center">
<iconify-icon icon="solar:wi-fi-linear" width="12"></iconify-icon>
</div>
<div className="w-4 h-4 rounded-full bg-black"></div>
</div>
</div>

<div className="px-6 py-4">
<div className="flex justify-between items-center mb-4">
<div>
<p className="text-xs text-neutral-500 font-sans">
                    Welcome back,
                  </p>
<h3 className="text-lg font-dm-sans font-semibold text-[#064e3b]">
                    Principal Ahmed
                  </h3>
</div>
<div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-2 gap-2 mb-2">
<div className="bg-white border border-neutral-100 rounded-xl p-3 flex flex-col items-center justify-center gap-1 shadow-sm">
<iconify-icon className="text-[#064e3b]" icon="solar:bell-linear" width="20"></iconify-icon>
<span className="text-[10px] font-sans font-medium">
                    Announce
                  </span>
</div>
<div className="bg-white border border-neutral-100 rounded-xl p-3 flex flex-col items-center justify-center gap-1 shadow-sm">
<iconify-icon className="text-[#064e3b]" icon="solar:calendar-linear" width="20"></iconify-icon>
<span className="text-[10px] font-sans font-medium">Events</span>
</div>
</div>
</div>

<div className="px-6 pt-2 pb-6">
<div className="flex justify-between items-center mb-3">
<span className="text-sm font-semibold text-neutral-900 font-sans">
                  Active Classes
                </span>
</div>

<div className="bg-[#064e3b] text-white p-4 rounded-2xl shadow-lg shadow-emerald-900/10 mb-3">
<div className="flex justify-between items-start mb-2">
<span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-medium backdrop-blur-sm">
                    Grade 5
                  </span>
<iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon>
</div>
<h4 className="font-dm-sans font-medium text-lg">Mathematics</h4>
<p className="text-xs text-white/70 font-sans mb-3">
                  Room 3B • Mr. Kareem
                </p>
<div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
<div className="bg-[#d4af37] w-[60%] h-full rounded-full"></div>
</div>
<p className="text-[10px] text-right mt-1 opacity-70">
                  Curriculum 60%
                </p>
</div>
</div>

<div className="flex-1 bg-white rounded-t-[2.5rem] p-6 space-y-4 border-t border-neutral-100 relative overflow-hidden">
<div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-neutral-200 rounded-full"></div>
<h3 className="font-dm-sans text-sm font-medium text-neutral-900 pt-2">
                Recent Updates
              </h3>

<div className="flex justify-between items-center border-b border-neutral-50 pb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">
<iconify-icon icon="solar:bill-list-linear" width="18"></iconify-icon>
</div>
<div>
<p className="font-medium text-xs text-neutral-900 font-sans">
                      Report Cards Released
                    </p>
<p className="text-[10px] text-neutral-400 font-sans">
                      Term 1 - All Grades
                    </p>
</div>
</div>
<span className="text-[10px] text-neutral-400 font-sans">
                  1h ago
                </span>
</div>

<div className="flex justify-between items-center border-b border-neutral-50 pb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
<iconify-icon icon="solar:wallet-linear" width="18"></iconify-icon>
</div>
<div>
<p className="font-medium text-xs text-neutral-900 font-sans">
                      Tuition Collected
                    </p>
<p className="text-[10px] text-neutral-400 font-sans">
                      $4,250 received
                    </p>
</div>
</div>
<span className="text-[10px] text-neutral-400 font-sans">
                  3h ago
                </span>
</div>
</div>
</div>
</div>
</section>


<footer className="relative mt-32 lg:mt-24">
<div className="bg-[#050f0a] rounded-none lg:rounded-t-[3rem] pt-24 pb-12 px-6 lg:px-16 border-t border-white/5">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
<div className="lg:col-span-2 space-y-6 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-[#d4af37]" icon="solar:mosque-linear" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tight font-dm-sans">
                  Manaazil
                </span>
</div>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm font-sans font-light">
                Empowering Islamic schools with next-generation technology. A
                platform built for efficiency, transparency, and growth.
              </p>
<div className="flex gap-4">
<a className="bg-white/5 hover:bg-white/10 p-2 rounded-full text-[#d4af37] transition-colors" href="#">
<iconify-icon icon="simple-icons:twitter" width="18"></iconify-icon>
</a>
<a className="bg-white/5 hover:bg-white/10 p-2 rounded-full text-[#d4af37] transition-colors" href="#">
<iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon>
</a>
<a className="bg-white/5 hover:bg-white/10 p-2 rounded-full text-[#d4af37] transition-colors" href="#">
<iconify-icon icon="simple-icons:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="[animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<h4 className="text-white font-medium mb-6 text-sm font-sans">
                Product
              </h4>
<ul className="space-y-3 text-sm text-slate-400">
<li>
<a className="hover:text-[#d4af37] transition-colors font-sans" href="#">
                    Features
                  </a>
</li>
<li>
<a className="hover:text-[#d4af37] transition-colors font-sans" href="#">
                    For Maktabs
                  </a>
</li>
<li>
<a className="hover:text-[#d4af37] transition-colors font-sans" href="#">
                    For K-12
                  </a>
</li>
<li>
<a className="hover:text-[#d4af37] transition-colors font-sans" href="#">
                    Tiers
                  </a>
</li>
</ul>
</div>
<div className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<h4 className="text-white font-medium mb-6 text-sm font-sans">
                Support
              </h4>
<ul className="space-y-3 text-sm text-slate-400">
<li>
<a className="hover:text-[#d4af37] transition-colors font-sans" href="#">
                    Help Center
                  </a>
</li>
<li>
<a className="hover:text-[#d4af37] transition-colors font-sans" href="#">
                    Contact Us
                  </a>
</li>
<li>
<a className="hover:text-[#d4af37] transition-colors font-sans" href="#">
                    Privacy Policy
                  </a>
</li>
<li>
<a className="hover:text-[#d4af37] transition-colors font-sans" href="#">
                    Terms of Service
                  </a>
</li>
</ul>
</div>
<div className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<h4 className="text-[#d4af37] font-medium mb-6 text-sm font-sans">
                Resources
              </h4>
<ul className="space-y-3 text-sm text-slate-400">
<li>
<a className="hover:text-[#d4af37] transition-colors font-sans" href="#">
                    Blog
                  </a>
</li>
<li>
<a className="hover:text-[#d4af37] transition-colors font-sans" href="#">
                    Case Studies
                  </a>
</li>
<li>
<a className="hover:text-[#d4af37] transition-colors font-sans" href="#">
                    School Guide
                  </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll">
<p className="font-sans">© 2024 Manaazil LMS. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span className="font-sans hover:text-slate-400 cursor-pointer">
                London
              </span>
<span className="font-sans hover:text-slate-400 cursor-pointer">
                Toronto
              </span>
<span className="font-sans hover:text-slate-400 cursor-pointer">
                Singapore
              </span>
</div>
</div>
</div>
</footer>
</div>
<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100] hidden" id="consultationModal" role="dialog">
<div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeConsultationModal()"></div>
<div className="fixed inset-0 z-10 overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-[2rem] bg-[#020403] border border-white/10 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
<div className="p-8">
<div className="sm:flex sm:items-start">
<div className="w-full text-center sm:text-left">
<h3 className="text-2xl font-light leading-6 text-[#d4af37] font-dm-sans mb-2" id="modal-title">
                    Book Consultation
                  </h3>
<p className="text-sm text-neutral-400 font-sans mb-8 leading-relaxed">
                    Enter your details below. Our team will reach out to
                    schedule a personalized demo.
                  </p>
<form action="https://formsubmit.co/ahmed@manaazil.org" className="space-y-5" method="POST" onsubmit="">
<div className="space-y-1">
<label className="block text-xs font-medium text-neutral-500 font-sans uppercase tracking-widest" htmlFor="name">
                        Name
                      </label>
<input className="block w-full rounded-xl border-neutral-800 bg-neutral-900/50 text-white shadow-sm focus:border-[#d4af37] focus:ring-[#d4af37] sm:text-sm px-4 py-3 placeholder-neutral-700 font-sans" id="name" name="name" placeholder="Your full name" type="text"/>
</div>
<div className="space-y-1">
<label className="block text-xs font-medium text-neutral-500 font-sans uppercase tracking-widest" htmlFor="email">
                        Email
                      </label>
<input className="block w-full rounded-xl border-neutral-800 bg-neutral-900/50 text-white shadow-sm focus:border-[#d4af37] focus:ring-[#d4af37] sm:text-sm px-4 py-3 placeholder-neutral-700 font-sans" id="email" name="email" placeholder="name@school.com" type="email"/>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<button className="inline-flex w-full justify-center rounded-full border border-neutral-800 bg-transparent px-4 py-3 text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors font-sans" onclick="closeConsultationModal()" type="button">
                        Cancel
                      </button>
<button className="inline-flex w-full justify-center rounded-full bg-[#d4af37] px-4 py-3 text-sm font-medium text-black shadow-sm hover:bg-[#b8952b] transition-colors font-sans" type="submit">
                        Submit Request
                      </button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
