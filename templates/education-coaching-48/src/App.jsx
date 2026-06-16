import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener('DOMContentLoaded', () => {
const observerOptions = {
root: null,
rootMargin: '0px',
threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
observer.unobserve(entry.target); // Only animate once
}
});
}, observerOptions);
document.querySelectorAll('.reveal').forEach(el => {
observer.observe(el);
});
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200/60 bg-white/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse group" href="#">
<span className="self-center text-xl font-bold tracking-tighter text-slate-900 group-hover:text-indigo-600 transition-colors">ANIL ACADEMY.</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-white bg-slate-900 hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 ease-out" type="button">
                    Book Consultation
                </button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0 transition-colors" href="#about">About</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0 transition-colors" href="#courses">Courses</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0 transition-colors" href="#faculty">Faculty</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0 transition-colors" href="#contact">Contact</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="reveal active inline-flex items-center gap-x-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-3 py-1 text-xs font-medium text-indigo-600 mb-8 backdrop-blur-sm hover:bg-indigo-50 transition-colors cursor-default">
<span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                Admissions Open for 2024-25
            </div>
<h1 className="reveal active stagger-1 text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
                Ignite Curiosity. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Empower Minds.</span>
</h1>
<p className="reveal active stagger-2 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                Expert coaching for 8th to 12th grade, IIT–JEE, NEET, and MHT-CET. We turn student aspirations into real achievements through strategy and confidence.
            </p>
<div className="reveal active stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group" href="#contact">
                    Start Learning
                    <svg aria-hidden="true" className="iconify iconify--lucide group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2" href="#courses">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:book-open" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    View Courses
                </a>
</div>

<div className="reveal active stagger-4 mt-12 flex items-center justify-center gap-x-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-indigo-500 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:graduation-cap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
<span>12+ Years Experience</span>
</div>
<div className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-indigo-500 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trophy" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path></g></svg>
<span>Proven Results</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative reveal">
<div className="aspect-square rounded-2xl bg-slate-100 overflow-hidden relative group">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-slate-50 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-200">
<svg aria-hidden="true" className="iconify iconify--lucide opacity-50 group-hover:scale-110 transition-transform duration-500" data-icon="lucide:library" data-width="120" height="120" role="img" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="m16 6l4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></g></svg>
</div>
</div>

<div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block animate-float">
<div className="flex items-start gap-4">
<div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:medal" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7.21 15L2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15M11 12L5.12 2.2M13 12l5.88-9.8M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></g></svg>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Ranked Excellence</p>
<p className="text-xs text-slate-500 mt-1">Dedicated to academic success in competitive exams.</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="reveal text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                    Beyond textbooks. <br/>
<span className="text-indigo-600">We build confidence.</span>
</h2>
<div className="reveal stagger-1 space-y-6 text-slate-600 text-lg leading-relaxed font-normal">
<p>
                        At Anil Academy, we believe education is a transformational experience, not just teaching facts. We empower students to think critically, challenge limits, and pursue lifelong learning.
                    </p>
<p>
                        Our approach emphasizes deep knowledge, strategic preparation, and personalized mentoring. Whether preparing for IIT-JEE, NEET, or School Boards, we help young minds find their path and excel.
                    </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-6">
<div className="reveal stagger-2 flex flex-col gap-2">
<svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:brain-circuit" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
<h3 className="font-semibold text-slate-900">Critical Thinking</h3>
<p className="text-sm text-slate-500">Conceptual understanding over rote memorization.</p>
</div>
<div className="reveal stagger-3 flex flex-col gap-2">
<svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:users-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></g></svg>
<h3 className="font-semibold text-slate-900">Personalized Mentoring</h3>
<p className="text-sm text-slate-500">Individual attention to maximize potential.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="courses">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Our Coaching Programs</h2>
<p className="text-slate-500 text-lg">Comprehensive courses designed for board exams and competitive entrance tests.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal group bg-white p-6 rounded-xl border border-slate-200 hover:shadow-xl hover:border-indigo-100 hover:-translate-y-2 transition-all duration-300">
<div className="h-12 w-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide group-hover:scale-110 transition-transform" data-icon="lucide:calculator" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">IIT-JEE / Engineering</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Rigorous preparation for JEE Mains and Advanced. Master physics, chemistry, and mathematics with expert guidance.
                    </p>
</div>

<div className="reveal stagger-1 group bg-white p-6 rounded-xl border border-slate-200 hover:shadow-xl hover:border-indigo-100 hover:-translate-y-2 transition-all duration-300">
<div className="h-12 w-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide group-hover:scale-110 transition-transform" data-icon="lucide:stethoscope" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">NEET / Medical</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Specialized coaching for medical aspirants. In-depth coverage of biology and sciences for top rank achievement.
                    </p>
</div>

<div className="reveal stagger-2 group bg-white p-6 rounded-xl border border-slate-200 hover:shadow-xl hover:border-indigo-100 hover:-translate-y-2 transition-all duration-300">
<div className="h-12 w-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide group-hover:scale-110 transition-transform" data-icon="lucide:book-open-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 21V7m4 5l2 2l4-4"></path><path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4a4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3a3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">School Boards (8-12)</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Foundation building for students from 8th to 12th grade. Excellence in school academics and concepts.
                    </p>
</div>

<div className="reveal stagger-3 group bg-white p-6 rounded-xl border border-slate-200 hover:shadow-xl hover:border-indigo-100 hover:-translate-y-2 transition-all duration-300">
<div className="h-12 w-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide group-hover:scale-110 transition-transform" data-icon="lucide:flask-conical" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">MHT-CET &amp; Olympiads</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        State-level entrance preparation and competitive Olympiad training to challenge bright minds.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Why choose Anil Academy?
                    </h2>
<p className="text-slate-600 text-lg mb-8 leading-relaxed">
                        We don't just teach chapters; we teach how to learn. Our systematic approach breaks down complex scientific concepts into manageable steps.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 group">
<div className="mt-1 text-indigo-600 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<h4 className="font-medium text-slate-900">Innovative Teaching</h4>
<p className="text-sm text-slate-500">Methods that spark curiosity and retention.</p>
</div>
</li>
<li className="flex items-start gap-3 group">
<div className="mt-1 text-indigo-600 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<h4 className="font-medium text-slate-900">Strategic Preparation</h4>
<p className="text-sm text-slate-500">Focus on exam patterns and time management.</p>
</div>
</li>
<li className="flex items-start gap-3 group">
<div className="mt-1 text-indigo-600 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<h4 className="font-medium text-slate-900">Expert Faculty</h4>
<p className="text-sm text-slate-500">Mentored by M.Tech, M.Sc, and PhD holders.</p>
</div>
</li>
</ul>
</div>

<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="reveal stagger-1 bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between h-full hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-sm mb-4 text-indigo-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lightbulb" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Curiosity Driven</h4>
<p className="text-sm text-slate-500">Igniting the desire to understand 'why' and 'how'.</p>
</div>
</div>
<div className="reveal stagger-2 bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between h-full hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-sm mb-4 text-indigo-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:target" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Result Oriented</h4>
<p className="text-sm text-slate-500">Consistent track record of academic excellence.</p>
</div>
</div>
<div className="reveal stagger-3 bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between h-full hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-sm mb-4 text-indigo-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Confidence Building</h4>
<p className="text-sm text-slate-500">Overcoming exam fear through rigorous practice.</p>
</div>
</div>
<div className="reveal stagger-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between h-full hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-sm mb-4 text-indigo-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:heart-handshake" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Supportive Environment</h4>
<p className="text-sm text-slate-500">A community that encourages growth and questions.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="faculty">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Meet Our Faculty</h2>
<p className="text-slate-500 text-lg">Learn from experienced professionals dedicated to your success.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-width="100" height="100" role="img" viewbox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-1">Prof. Pradeep Yadav</h3>
<p className="text-indigo-600 font-medium text-sm mb-4">M.Sc</p>
<p className="text-slate-500 text-sm mb-6 min-h-[40px]">Expert in sciences with over 11 years of teaching experience. Specialized in breaking down complex concepts.</p>
<ul className="space-y-3 mb-8">
<li className="text-sm text-slate-600 flex items-center gap-2"><svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 11 Years Experience</li>
<li className="text-sm text-slate-600 flex items-center gap-2"><svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Science Specialist</li>
</ul>
</div>

<div className="reveal stagger-1 bg-slate-900 p-8 rounded-2xl shadow-xl relative overflow-hidden transform md:-translate-y-4 hover:-translate-y-6 transition-transform duration-300">
<div className="absolute top-0 right-0 p-4 opacity-10 text-white animate-pulse-soft">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:award" data-width="100" height="100" role="img" viewbox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
</div>
<div className="absolute top-4 right-4 bg-indigo-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded shadow-lg">Lead Faculty</div>
<h3 className="text-xl font-semibold text-white mb-1">Prof. Anilkumar Yadav</h3>
<p className="text-indigo-300 font-medium text-sm mb-4">M.Tech</p>
<p className="text-slate-300 text-sm mb-6 min-h-[40px]">Leading the academy with 12 years of experience. Focuses on technical subjects and strategic problem solving.</p>
<ul className="space-y-3 mb-8">
<li className="text-sm text-slate-300 flex items-center gap-2"><svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 12 Years Experience</li>
<li className="text-sm text-slate-300 flex items-center gap-2"><svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> M.Tech Qualified</li>
<li className="text-sm text-slate-300 flex items-center gap-2"><svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Mentorship Expert</li>
</ul>
<button className="w-full py-3 bg-white text-slate-900 rounded-lg font-medium text-sm hover:bg-slate-100 transition shadow-lg active:scale-95 duration-200">Book Session</button>
</div>

<div className="reveal stagger-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:graduation-cap" data-width="100" height="100" role="img" viewbox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-1">Prof. Mohd Shahil Hashmi</h3>
<p className="text-indigo-600 font-medium text-sm mb-4">PhD (Pursuing)</p>
<p className="text-slate-500 text-sm mb-6 min-h-[40px]">Academic researcher and educator with a decade of experience in guiding students towards higher education.</p>
<ul className="space-y-3 mb-8">
<li className="text-sm text-slate-600 flex items-center gap-2"><svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 10 Years Experience</li>
<li className="text-sm text-slate-600 flex items-center gap-2"><svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Research Focus</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="reveal bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden group">

<div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl animate-float"></div>
<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                        Turn aspirations into achievements.
                    </h2>
<p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
                        Your academic journey starts here. Join Anil Academy and get the guidance you need to excel in your exams.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#contact">
                            Enroll Now
                        </a>
<a className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-1 transition-all duration-300" href="tel:+918652796885">
                            Call +91 86527 96885
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="contact">
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="space-y-8 reveal">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Get in Touch</h2>
<p className="text-slate-500">Visit our center in Mumbai or send us a message to discuss your academic goals.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4 group">
<div className="p-3 bg-white border border-slate-200 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<h4 className="font-medium text-slate-900">Visit Us</h4>
<p className="text-slate-500 text-sm mt-1 leading-relaxed">
                                Shop No.7/A, 1st Floor, Ekta Society,
                                Taira Compound, Opp. HDFC Bank, Station Road,
                                Jogeshwari (E), Mumbai.
                            </p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="p-3 bg-white border border-slate-200 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-medium text-slate-900">Call Us</h4>
<p className="text-slate-500 text-sm mt-1">+91 86527 96885</p>
<p className="text-slate-500 text-sm">+91 86552 90933</p>
</div>
</div>
</div>
</div>
<form className="reveal stagger-1 space-y-5 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 md:col-span-1">
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="first-name">First Name</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" id="first-name" placeholder="Rahul" type="text"/>
</div>
<div className="col-span-2 md:col-span-1">
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="last-name">Last Name</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" id="last-name" placeholder="Sharma" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" id="email" placeholder="rahul@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="interest">Interested Course</label>
<div className="relative">
<select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" id="interest">
<option>IIT-JEE Engineering</option>
<option>NEET Medical</option>
<option>School Boards (8-10)</option>
<option>Junior College (11-12)</option>
<option>MHT-CET</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" id="message" placeholder="Tell us about your academic goals..." rows="4"></textarea>
</div>
<div className="flex items-center">
<label className="custom-checkbox flex items-center cursor-pointer relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-5 h-5 bg-slate-50 border border-slate-300 rounded flex items-center justify-center transition-all peer-checked:bg-indigo-600 peer-checked:border-indigo-600">
<svg aria-hidden="true" className="iconify text-white hidden iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="ml-2 text-sm text-slate-600 select-none">I agree to receive communications.</span>
</label>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3 rounded-lg hover:bg-slate-800 transition-all shadow-sm hover:shadow-lg active:scale-95 duration-200" type="submit">
                    Send Message
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-lg font-bold tracking-tighter text-slate-900">ANIL ACADEMY.</span>
<p className="mt-4 text-sm text-slate-500 leading-relaxed">
                        Empowering students with knowledge and strategy. Your partner in academic excellence and competitive exam success.
                    </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Academy</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition" href="#about">About Us</a></li>
<li><a className="hover:text-indigo-600 transition" href="#faculty">Faculty</a></li>
<li><a className="hover:text-indigo-600 transition" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Courses</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition" href="#">IIT-JEE</a></li>
<li><a className="hover:text-indigo-600 transition" href="#">NEET Medical</a></li>
<li><a className="hover:text-indigo-600 transition" href="#">MHT-CET</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
<div className="flex space-x-4 text-slate-400">
<a className="hover:text-slate-900 hover:-translate-y-1 transition-all" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="hover:text-slate-900 hover:-translate-y-1 transition-all" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="hover:text-slate-900 hover:-translate-y-1 transition-all" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:youtube" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg></a>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Anil Academy. All rights reserved.</p>
<div className="flex space-x-6 text-xs text-slate-400">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
