import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('[data-accordion-group]').forEach(group => {
        group.addEventListener('click', e => {
          if (e.target.closest('[data-accordion-toggle]')) {
            const btn = e.target.closest('[data-accordion-toggle]');
            const panelId = btn.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            panel.classList.toggle('max-h-0');
            panel.classList.toggle('py-3');
            panel.classList.toggle('max-h-40');
          }
        });
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<section className="max-w-3xl mx-auto px-4 py-10">

<div className="flex flex-col items-center mb-10">
<img alt="Summer Camp Welcome" className="w-full max-w-lg rounded-lg shadow-lg mb-6 object-cover h-56" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<h1 className="text-4xl font-extrabold text-blue-700 mb-2 text-center">Welcome to 2025 Summer Camp</h1>
<p className="text-lg text-blue-900 text-center">Join us for a fun, enriching, and unforgettable summer experience!</p>
</div>
<h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Weekly Schedule Overview</h2>
<div className="space-y-6">

<div className="bg-white shadow rounded-lg p-6 flex flex-col">
<h3 className="text-xl font-semibold text-blue-700 mb-1">Week 1</h3>
<span className="block text-gray-500 text-sm mb-4">July 7 – July 11</span>
<div className="space-y-2" data-accordion-group="">

<div>
<button aria-controls="w1-program1" aria-expanded="false" className="w-full flex justify-between items-center px-4 py-3 text-left bg-blue-50 hover:bg-blue-100 rounded transition group font-medium text-blue-800 focus:outline-none" data-accordion-toggle="" type="button">
              ELA K-2
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-aria-expanded:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="accordion-panel max-h-0 overflow-hidden px-4 bg-blue-50 text-blue-900 rounded-b" id="w1-program1">
<p className="text-sm">
                Build foundational literacy skills through engaging stories, reading games, and early writing activities designed especially for kindergarten to 2nd grade students.
              </p>
</div>
</div>

<div>
<button aria-controls="w1-program2" aria-expanded="false" className="w-full flex justify-between items-center px-4 py-3 text-left bg-blue-50 hover:bg-blue-100 rounded transition group font-medium text-blue-800 focus:outline-none" data-accordion-toggle="" type="button">
              Journalism 5-6
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-aria-expanded:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="accordion-panel max-h-0 overflow-hidden px-4 bg-blue-50 text-blue-900 rounded-b" id="w1-program2">
<p className="text-sm">
                Become a junior journalist! Learn to research, interview, and write news stories, articles, and creative pieces suitable for 5th and 6th graders.
              </p>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg p-6 flex flex-col">
<h3 className="text-xl font-semibold text-blue-700 mb-1">Week 2</h3>
<span className="block text-gray-500 text-sm mb-4">July 14 – July 18</span>
<div className="space-y-2" data-accordion-group="">

<div>
<button aria-controls="w2-program1" aria-expanded="false" className="w-full flex justify-between items-center px-4 py-3 text-left bg-green-50 hover:bg-green-100 rounded transition group font-medium text-green-800 focus:outline-none" data-accordion-toggle="" type="button">
              Public Speaking 4-8
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-aria-expanded:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="accordion-panel max-h-0 overflow-hidden px-4 bg-green-50 text-green-900 rounded-b" id="w2-program1">
<p className="text-sm">
                Gain confidence in speaking, storytelling, and persuasive communication, tailored for grades 4 through 8.
              </p>
</div>
</div>

<div>
<button aria-controls="w2-program2" aria-expanded="false" className="w-full flex justify-between items-center px-4 py-3 text-left bg-green-50 hover:bg-green-100 rounded transition group font-medium text-green-800 focus:outline-none" data-accordion-toggle="" type="button">
              Debate 5-6
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-aria-expanded:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="accordion-panel max-h-0 overflow-hidden px-4 bg-green-50 text-green-900 rounded-b" id="w2-program2">
<p className="text-sm">
                Practice research, argumentation, and critical thinking in fun, structured debates for 5th and 6th graders.
              </p>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg p-6 flex flex-col">
<h3 className="text-xl font-semibold text-blue-700 mb-1">Week 3</h3>
<span className="block text-gray-500 text-sm mb-4">July 21 – July 25</span>
<div className="space-y-2" data-accordion-group="">

<div>
<button aria-controls="w3-program1" aria-expanded="false" className="w-full flex justify-between items-center px-4 py-3 text-left bg-yellow-50 hover:bg-yellow-100 rounded transition group font-medium text-yellow-800 focus:outline-none" data-accordion-toggle="" type="button">
              Writing
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-aria-expanded:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="accordion-panel max-h-0 overflow-hidden px-4 bg-yellow-50 text-yellow-900 rounded-b" id="w3-program1">
<p className="text-sm">
                Dive into creative, narrative, and expository writing with prompts and projects for all levels.
              </p>
</div>
</div>

<div>
<button aria-controls="w3-program2" aria-expanded="false" className="w-full flex justify-between items-center px-4 py-3 text-left bg-yellow-50 hover:bg-yellow-100 rounded transition group font-medium text-yellow-800 focus:outline-none" data-accordion-toggle="" type="button">
              ELA
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-aria-expanded:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="accordion-panel max-h-0 overflow-hidden px-4 bg-yellow-50 text-yellow-900 rounded-b" id="w3-program2">
<p className="text-sm">
                Strengthen reading comprehension, vocabulary, and analysis through literature and language arts activities.
              </p>
</div>
</div>
</div>
</div>

<div className="bg-white shadow rounded-lg p-6 flex flex-col">
<h3 className="text-xl font-semibold text-blue-700 mb-1">Week 4</h3>
<span className="block text-gray-500 text-sm mb-4">August 4 – August 8</span>
<div className="space-y-2" data-accordion-group="">

<div>
<button aria-controls="w4-program1" aria-expanded="false" className="w-full flex justify-between items-center px-4 py-3 text-left bg-purple-50 hover:bg-purple-100 rounded transition group font-medium text-purple-800 focus:outline-none" data-accordion-toggle="" type="button">
              Debate
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-aria-expanded:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="accordion-panel max-h-0 overflow-hidden px-4 bg-purple-50 text-purple-900 rounded-b" id="w4-program1">
<p className="text-sm">
                Master the art of debate, develop arguments, and engage in fun, competitive discussions!
              </p>
</div>
</div>

<div>
<button aria-controls="w4-program2" aria-expanded="false" className="w-full flex justify-between items-center px-4 py-3 text-left bg-purple-50 hover:bg-purple-100 rounded transition group font-medium text-purple-800 focus:outline-none" data-accordion-toggle="" type="button">
              Public Speaking
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-aria-expanded:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="accordion-panel max-h-0 overflow-hidden px-4 bg-purple-50 text-purple-900 rounded-b" id="w4-program2">
<p className="text-sm">
                Enhance your speaking and presentation abilities through games, speeches, and peer feedback.
              </p>
</div>
</div>
</div>
</div>
</div>

<a className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-xl transition duration-200" href="#enroll" style={{boxShadow: '0 8px 24px rgba(255, 140, 0, 0.19)'}}>
      Enroll Now
    </a>
</section>

    </>
  );
}
