import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-zinc-50/80 backdrop-blur-md">
<div className="flex h-16 max-w-5xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-zinc-900" href="#">ER</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-zinc-900 transition-colors text-zinc-500" href="/Personal Profile">Personal Info</a>
<a className="hover:text-zinc-900 transition-colors text-zinc-500" href="/#Publications">Publications</a>
<a className="hover:text-zinc-900 transition-colors text-zinc-500" href="/#Work Experience">Selected Design Projects</a>
<a className="hover:text-zinc-900 transition-colors text-zinc-500" href="#students">Student Works</a>
</nav>
<a className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 transition-colors" href="#contact">
                View Syllabus
            </a>
</div>
</header>
<main className="md:pt-24 max-w-5xl mr-auto ml-auto pt-16 pr-6 pb-24 pl-6">

<section className="flex flex-col-reverse md:flex-row gap-12 mb-32 gap-x-12 gap-y-12 items-start justify-between">
<div className="flex-1 max-w-2xl">
<div className="inline-flex gap-2 text-xs font-medium text-zinc-600 bg-white border-zinc-200 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
        Currently teaching</div>
<h1 className="md:text-5xl leading-tight text-4xl font-extrabold text-zinc-900 tracking-tight font-ibm-serif mb-6">
        Bridging design practice with studio pedagogy.
      </h1>
<p className="leading-relaxed md:text-sm text-base text-zinc-500 max-w-xl mb-8">Senior Lecturer in Information Design.
  I focus on developing resilient, practical design skills and critical thinking in the next generation of digital
  creators, transitioning industry workflows into the classroom.</p>
<div className="flex gap-4">
<a className="inline-flex items-center justify-center hover:bg-zinc-50 transition-colors text-sm font-medium text-zinc-900 bg-white h-10 border-zinc-200 border rounded-md pr-4 pl-4 shadow-sm" href="/#design projects">Explore
          Design Projects</a>
</div>
</div>
<div className="md:w-72 aspect-[4/5] overflow-hidden flex-shrink-0 bg-zinc-100 w-full border-zinc-200 border rounded-2xl relative">
</div>
</section>

<section className="mb-32" id="philosophy">
<div className="rounded-3xl border border-zinc-200 bg-white p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 text-zinc-100">
<iconify-icon height="120" icon="solar:quote-right-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10 max-w-3xl">
<h2 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-4">Teaching Philosophy</h2>
<p className="md:text-2xl leading-snug text-xl font-medium text-zinc-900 tracking-tight mb-6">
          "The classroom must function as a safe iteration lab. I believe in teaching design not as a series of software
          tutorials, but as a framework for problem-solving. My goal is to guide students to discover their own process
          through rigorous critique, making mistakes early, and understanding the 'why' behind every pixel."
        </p>
<p className="text-sm font-medium text-zinc-600">Nan S. — Lecturer, Information Design</p>
</div>
</div>
</section>

<section className="mb-32" id="methods">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-10">Pedagogical Approach</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group rounded-2xl border border-zinc-200 bg-white p-6 hover:border-zinc-300 transition-colors">
<div className="h-10 w-10 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-4 text-zinc-700">
<iconify-icon height="20" icon="solar:pen-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Studio Practice First</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
          Shifting away from traditional lectures towards project-based studio hours. Students learn by making,
          emphasizing messy early-stage ideation over polished final deliverables.
        </p>
</div>

<div className="group rounded-2xl border border-zinc-200 bg-white p-6 hover:border-zinc-300 transition-colors">
<div className="h-10 w-10 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-4 text-zinc-700">
<iconify-icon height="20" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Constructive Critique</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
          Establishing a culture where peer review is expected and valued. Teaching students how to give actionable
          feedback and detach their ego from the design artifacts.
        </p>
</div>

<div className="group rounded-2xl border border-zinc-200 bg-white p-6 hover:border-zinc-300 transition-colors">
<div className="h-10 w-10 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-4 text-zinc-700">
<iconify-icon height="20" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">AI as a Co-Pilot</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
          Practical integration of LLMs and generative tools in the workflow. Focus is on teaching effective prompting,
          maintaining critical judgment, and using AI for rapid prototyping rather than final output.
        </p>
</div>

<div className="group rounded-2xl border border-zinc-200 bg-white p-6 hover:border-zinc-300 transition-colors">
<div className="h-10 w-10 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-4 text-zinc-700">
<iconify-icon height="20" icon="solar:briefcase-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Industry Alignment</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
          Briefs are modeled on real-world constraints. Incorporating agile methodologies, design systems, and
          client-style presentations to bridge the gap between graduation and employment.
        </p>
</div>
</div>
</section>

<section className="mb-32" id="courses">
<div className="flex items-end justify-between mb-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">Courses &amp; Modules</h2>
</div>
<div className="space-y-4">

<div className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl border border-zinc-200 bg-white hover:shadow-sm transition-all gap-4">
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<span className="uppercase text-xs font-medium text-zinc-400 tracking-wider">1</span>
<h3 className="text-base font-semibold text-zinc-900">Information Design</h3>
</div>
<p className="text-sm text-zinc-500">Core module focusing on user flows, wireframing, and the psychology of
            interaction. Fall semester, Year 2.</p>
</div>
<div className="flex flex-wrap gap-2 md:w-48 flex-shrink-0">
<span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">Figma</span>
<span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">Usability</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center hover:shadow-sm transition-all gap-4 bg-white border-zinc-200 border rounded-xl pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 justify-between">
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<span className="uppercase text-xs font-medium text-zinc-400 tracking-wider">2</span>
<h3 className="text-base font-semibold text-zinc-900">Service Design</h3>
</div>
<p className="text-sm text-zinc-500">Building scalable design systems and high-fidelity prototypes. Spring
            semester, Year 3.</p>
</div>
<div className="flex flex-wrap gap-2 md:w-48 flex-shrink-0">
<span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">Design Systems</span>
<span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">React</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl border border-zinc-200 bg-white hover:shadow-sm transition-all gap-4">
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<span className="uppercase text-xs font-medium text-zinc-400 tracking-wider">3</span>
<h3 className="text-base font-semibold text-zinc-900">Integrated Design</h3>
</div>
<p className="text-sm text-zinc-500">Seminar discussing dark patterns, accessibility, and responsible AI usage.
            Fall semester, Masters.</p>
</div>
<div className="flex flex-wrap gap-2 md:w-48 flex-shrink-0">
<span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">Seminar</span>
<span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">Ethics</span>
</div>
</div>
</div>
</section>

<section className="mb-32" id="students">
<div className="mb-10">
<h2 className="md:text-3xl text-2xl font-semibold text-zinc-900 tracking-tight mb-2">Student Works</h2>
<p className="text-sm text-zinc-500 max-w-2xl">A selection of projects created by students in my courses, showcasing
        practical application of interaction principles and systems thinking.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white">
<div className="aspect-[4/3] w-full bg-zinc-100 overflow-hidden">
<img alt="Student UI Design Project" className="transition-transform duration-500 group-hover:scale-105 cursor-pointer w-full h-full object-cover shadow-sm" onclick="window.location.href='http://photogzmaz.photo.store.qq.com/psc?/V50wmQmN3HV7UX3zmbIh3Ehlk13GIBcU/LiySpxowE0yeWXwBdXN*SUbYyzjr7cldteqkWtQoGDxUhLlPLKh6zkwAfvCKOOqQ6vP1hX8P41iZFJnapX7JdoI.3Z0A*VehDFlfCSCHvtk!/b&amp;bo=ogTgBaIE4AUDh6I!&amp;rf=viewer_4&amp;t=5'" role="button" src="http://photogzmaz.photo.store.qq.com/psc?/V50wmQmN3HV7UX3zmbIh3Ehlk13GIBcU/LiySpxowE0yeWXwBdXN*SUbYyzjr7cldteqkWtQoGDxUhLlPLKh6zkwAfvCKOOqQ6vP1hX8P41iZFJnapX7JdoI.3Z0A*VehDFlfCSCHvtk!/b&amp;bo=ogTgBaIE4AUDh6I!&amp;rf=viewer_4&amp;t=5"/>
</div>
<div className="p-5 border-t border-zinc-100">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-semibold text-zinc-900">Fintech Dashboard Refactor</h3>
<span className="text-xs text-zinc-400">Des201</span>
</div>
<p className="text-xs text-zinc-500">By Sarah Jenkins &amp; Mark Wu</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white">
<div className="aspect-[4/3] w-full bg-zinc-100 overflow-hidden">
<img alt="Student Data Viz Project" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 border-t border-zinc-100">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-semibold text-zinc-900">Climate Data Visualization</h3>
<span className="text-xs text-zinc-400">Des305</span>
</div>
<p className="text-xs text-zinc-500">By Elena Rodriguez</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white md:col-span-2">
<div className="aspect-[21/9] w-full bg-zinc-100 overflow-hidden">
<img alt="Student Workshop" className="object-cover w-full h-full grayscale-[30%] transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-5 border-t border-zinc-100 absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm border-white/20">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-semibold text-zinc-900">Cross-Disciplinary Hackathon Winning Prototype</h3>
<span className="text-xs text-zinc-500 font-medium">MDes Cohort 2023</span>
</div>
<p className="text-xs text-zinc-500">Mentored team developing an accessible transit navigation system.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-200 bg-white">
<div className="mx-auto max-w-5xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-zinc-900">ER</span>
<span className="text-sm text-zinc-400">© 2023 Elena Rostova. Design Educator.</span>
</div>
<div className="flex items-center gap-6 text-sm font-medium">
<a className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
                    Faculty Email
                </a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2" href="#">
<iconify-icon height="16" icon="solar:document-text-linear" width="16"></iconify-icon>
                    Curriculum Vitae
                </a>
</div>
</div>
</footer>

    </>
  );
}
