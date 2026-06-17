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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Intersection Observer for recognition lines
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('text-stone-700');
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.recognition-line').forEach(line => {
            observer.observe(line);
        });
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-xl border-b border-stone-200/50">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-stone-900" href="#">blurt<span className="text-indigo-600">ai</span></a>
<div className="hidden md:flex items-center gap-8 text-sm text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-stone-900 transition-colors" href="#subjects">Subjects</a>
<a className="hover:text-stone-900 transition-colors" href="#faq">FAQ</a>
</div>
<a className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors" href="#start">Start free →</a>
</div>
</nav>


<section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
<div %3e%3c="" %3e%3cg="" %3e%3cpath="" 60"="" className="absolute inset-0 opacity-30" d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z" fill="%23a8a29e" fillOpacity="0.1" fill-rule="evenodd" g%3e%3c="" height="60" style={{backgroundImage: 'url(\'data:image/svg+xml, %3Csvg width='}} svg%3e');"="" viewbox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"></div>

<div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full blur-3xl opacity-60 animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="absolute bottom-1/3 right-1/6 w-40 h-40 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDuration: '5s'}}></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 leading-tight hero-text">
<span className="block opacity-0" style={{animation: 'fadeUp 0.8s ease forwards 0.2s'}}>You shouldn't finish revision</span>
<span className="block opacity-0" style={{animation: 'fadeUp 0.8s ease forwards 0.5s'}}>still unsure if you understand.</span>
</h1>
<p className="mt-8 text-lg text-stone-500 opacity-0" style={{animation: 'fadeUp 0.8s ease forwards 0.9s'}}>
                Revision that actually teaches.
            </p>
</div>
</section>

<section className="min-h-screen flex items-center px-6 py-24">
<div className="max-w-2xl mx-auto">
<div className="space-y-6 text-xl sm:text-2xl text-stone-400 leading-relaxed recognition-lines">
<p className="recognition-line" style={{transition: 'all 0.5s ease'}}>You read the content.</p>
<p className="recognition-line" style={{transition: 'all 0.5s ease', transitionDelay: '0.1s'}}>You think it makes sense.</p>
<p className="recognition-line" style={{transition: 'all 0.5s ease', transitionDelay: '0.2s'}}>You close the textbook.</p>
<p className="recognition-line" style={{transition: 'all 0.5s ease', transitionDelay: '0.3s'}}>You test yourself later.</p>
<p className="recognition-line text-stone-700 font-medium" style={{transition: 'all 0.5s ease', transitionDelay: '0.4s'}}>It doesn't stick.</p>
</div>
</div>
</section>


<section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-stone-50 to-stone-100">
<div className="absolute inset-0 flex items-center justify-center">
<div className="grid grid-cols-3 gap-4 opacity-20 rotate-6 scale-110">
<div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 transform translate-y-4">Flashcard</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 transform -translate-y-2">Quiz</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 transform translate-y-6">Summary</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">ChatBot</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 transform translate-y-3">Notes</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 transform -translate-y-4">Practice</div>
</div>
</div>
<div className="max-w-2xl mx-auto text-center relative z-10">
<p className="text-2xl sm:text-3xl text-stone-600 leading-relaxed">
                Most tools <span className="text-stone-400">check</span> learning.
            </p>
<p className="text-2xl sm:text-3xl text-stone-900 mt-2">
                They don't <span className="underline decoration-indigo-400 decoration-2 underline-offset-4">create</span> it.
            </p>
</div>
</section>

<section className="min-h-screen flex items-center justify-center px-6 bg-stone-50">
<div className="max-w-3xl mx-auto text-center">
<p className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-stone-900 leading-tight">
                Learning works best<br/>
<span className="relative inline-block mt-2">
<span className="font-medium">while you're thinking.</span>
<span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 origin-left insight-underline"></span>
</span>
</p>
</div>
</section>


<section className="py-32 px-6 bg-white" id="how-it-works">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-20">
<p className="text-sm font-medium text-indigo-600 tracking-wide uppercase mb-4">How it works</p>
<h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-900">Teaching that happens during revision</h2>
</div>
<div className="relative">

<div className="bg-stone-50 rounded-2xl border border-stone-200 p-8 sm:p-12 relative overflow-hidden">
<div className="absolute top-0 left-12 w-px h-full bg-red-200/50"></div>
<div className="space-y-8 ml-8">
<div className="lesson-step opacity-0" style={{animation: 'fadeUp 0.6s ease forwards 0.2s'}}>
<p className="text-stone-600 leading-relaxed">
<span className="font-medium text-stone-800">Photosynthesis</span> is the process by which plants convert light energy into chemical energy. This occurs in the <span className="bg-emerald-100 px-1 rounded">chloroplasts</span>, specifically using a green pigment called chlorophyll.
                            </p>
</div>
<div className="lesson-step opacity-0" style={{animation: 'fadeUp 0.6s ease forwards 0.5s'}}>
<div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mt-4">
<p className="text-sm text-indigo-600 mb-2 flex items-center gap-2">
<iconify-icon icon="solar:lightbulb-bolt-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                    Quick check
                                </p>
<p className="text-stone-700">Where in the plant cell does photosynthesis take place?</p>
<div className="mt-3 flex gap-2 flex-wrap">
<span className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-sm cursor-pointer hover:border-indigo-300 transition-colors">Mitochondria</span>
<span className="px-3 py-1.5 bg-indigo-100 border border-indigo-300 rounded-lg text-sm text-indigo-700">Chloroplasts ✓</span>
<span className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-sm cursor-pointer hover:border-indigo-300 transition-colors">Nucleus</span>
</div>
</div>
</div>
<div className="lesson-step opacity-0" style={{animation: 'fadeUp 0.6s ease forwards 0.8s'}}>
<p className="text-stone-600 leading-relaxed">
                                The equation for photosynthesis is: <span className="font-mono text-sm bg-stone-100 px-2 py-1 rounded">6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</span>
</p>
</div>
</div>

<div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-8 bg-amber-50 p-3 rounded shadow-sm border border-amber-200 transform rotate-2 text-sm text-amber-800" style={{fontFamily: '\'Comic Sans MS\', cursive'}}>
                        Explains first. Tests when it matters. ✨
                    </div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-stone-50">
<div className="max-w-4xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h3 className="text-2xl sm:text-3xl font-light tracking-tight text-stone-900 mb-6">
                        Tested during learning,<br/>not after
                    </h3>
<p className="text-stone-600 leading-relaxed">
                        Key concepts transform into active recall moments. You're never just reading — you're always building understanding.
                    </p>
</div>
<div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 shadow-sm">
<p className="text-stone-700 leading-loose text-lg">
                        The heart pumps <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 border border-emerald-200 rounded text-emerald-700 font-medium">blood</span> around the body through vessels called <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-100 border-2 border-dashed border-indigo-300 rounded text-indigo-400">_____</span> and <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-100 border-2 border-dashed border-indigo-300 rounded text-indigo-400">_____</span>.
                    </p>
<div className="mt-6 pt-6 border-t border-stone-100">
<p className="text-xs text-stone-400 uppercase tracking-wide mb-3">Word bank</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-stone-100 rounded-lg text-sm text-stone-600 cursor-pointer hover:bg-stone-200 transition-colors">arteries</span>
<span className="px-3 py-1.5 bg-stone-100 rounded-lg text-sm text-stone-600 cursor-pointer hover:bg-stone-200 transition-colors">veins</span>
<span className="px-3 py-1.5 bg-stone-100 rounded-lg text-sm text-stone-600 cursor-pointer hover:bg-stone-200 transition-colors">capillaries</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white">
<div className="max-w-4xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
<p className="text-stone-600 leading-relaxed">
                            Osmosis is the movement of water molecules from a region of higher water potential to a region of lower water potential, through a partially permeable membrane.
                        </p>
</div>

<div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg border border-stone-200 p-4 w-48 transform rotate-3 hover:rotate-0 transition-transform cursor-pointer">
<p className="text-xs text-stone-400 uppercase tracking-wide mb-2">Flashcard</p>
<p className="text-sm text-stone-700 font-medium">What is osmosis?</p>
<div className="mt-3 pt-3 border-t border-stone-100">
<p className="text-xs text-indigo-600">Tap to flip →</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h3 className="text-2xl sm:text-3xl font-light tracking-tight text-stone-900 mb-6">
                        Memory support appears<br/>when you need it
                    </h3>
<p className="text-stone-600 leading-relaxed">
                        Flashcards are generated from your learning, not created in isolation. They reinforce what you've just studied, right when the memory is forming.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-gradient-to-b from-stone-50 to-white">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h3 className="text-2xl sm:text-3xl font-light tracking-tight text-stone-900">Marked against real exam schemes</h3>
<p className="mt-4 text-stone-600">Feedback that matches what examiners are looking for.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white rounded-xl border border-stone-200 p-6">
<p className="text-xs text-stone-400 uppercase tracking-wide mb-4 flex items-center gap-2">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                        Student answer
                    </p>
<p className="text-stone-700 leading-relaxed">
                        Enzymes are biological catalysts that speed up reactions. They have an active site where the substrate fits.
                    </p>
</div>
<div className="bg-emerald-50 rounded-xl border border-emerald-200 p-6">
<p className="text-xs text-emerald-600 uppercase tracking-wide mb-4 flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                        Examiner feedback
                    </p>
<p className="text-stone-700 leading-relaxed">
<span className="text-emerald-600">✓</span> Correctly identifies enzymes as biological catalysts.<br/>
<span className="text-emerald-600">✓</span> Mentions active site.<br/>
<span className="text-amber-600">△</span> Could mention "lock and key" model for full marks.<br/>
<span className="font-medium mt-2 block">3/4 marks</span>
</p>
</div>
</div>
</div>
</section>


<section className="py-32 px-6 bg-white">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<p className="text-xl sm:text-2xl text-stone-500 mb-2">Most tools stop here.</p>
<p className="text-xl sm:text-2xl text-stone-900 font-medium">BlurtAI keeps teaching.</p>
</div>
<div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden">
<div className="grid grid-cols-3 text-center text-sm border-b border-stone-200">
<div className="p-4 text-stone-500"></div>
<div className="p-4 text-stone-500 font-medium">Other tools</div>
<div className="p-4 bg-indigo-50 text-indigo-700 font-medium">BlurtAI</div>
</div>
<div className="divide-y divide-stone-200">
<div className="grid grid-cols-3 text-center text-sm">
<div className="p-4 text-stone-600 text-left">Explains concepts</div>
<div className="p-4 text-stone-400">Sometimes</div>
<div className="p-4 bg-indigo-50/50 text-indigo-600">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-3 text-center text-sm">
<div className="p-4 text-stone-600 text-left">Tests inline</div>
<div className="p-4 text-stone-400">—</div>
<div className="p-4 bg-indigo-50/50 text-indigo-600">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-3 text-center text-sm">
<div className="p-4 text-stone-600 text-left">Adapts to mistakes</div>
<div className="p-4 text-stone-400">—</div>
<div className="p-4 bg-indigo-50/50 text-indigo-600">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-3 text-center text-sm">
<div className="p-4 text-stone-600 text-left">Real mark schemes</div>
<div className="p-4 text-stone-400">—</div>
<div className="p-4 bg-indigo-50/50 text-indigo-600">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-stone-50" id="subjects">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-900">Built for UK students</h2>
<p className="mt-4 text-stone-600">Aligned with AQA, Edexcel, OCR, and more.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white rounded-xl border border-stone-200 p-8 hover:border-indigo-200 hover:shadow-sm transition-all">
<div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-600" icon="solar:square-academic-cap-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">GCSE</h3>
<p className="text-stone-600 text-sm leading-relaxed">
                        Core subjects covered with specification-matched content. Perfect for Year 10 &amp; 11 revision.
                    </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs bg-stone-100 px-2 py-1 rounded text-stone-500">Biology</span>
<span className="text-xs bg-stone-100 px-2 py-1 rounded text-stone-500">Chemistry</span>
<span className="text-xs bg-stone-100 px-2 py-1 rounded text-stone-500">Physics</span>
</div>
</div>
<div className="bg-white rounded-xl border border-stone-200 p-8 hover:border-indigo-200 hover:shadow-sm transition-all">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-emerald-600" icon="solar:diploma-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">A-Level</h3>
<p className="text-stone-600 text-sm leading-relaxed">
                        Deeper content for Sixth Form students. Extended responses and exam technique built in.
                    </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs bg-stone-100 px-2 py-1 rounded text-stone-500">Sciences</span>
<span className="text-xs bg-stone-100 px-2 py-1 rounded text-stone-500">Maths</span>
<span className="text-xs bg-stone-100 px-2 py-1 rounded text-stone-500">More soon</span>
</div>
</div>
<div className="bg-white rounded-xl border border-stone-200 p-8 hover:border-indigo-200 hover:shadow-sm transition-all">
<div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-amber-600" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Beyond</h3>
<p className="text-stone-600 text-sm leading-relaxed">
                        University prep, professional exams, or custom learning paths. Contact us for bespoke solutions.
                    </p>
<div className="mt-4">
<span className="text-xs text-indigo-600">Coming soon →</span>
</div>
</div>
</div>
</div>
</section>


<section className="py-32 px-6 bg-white" id="faq">
<div className="max-w-2xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-900">Questions &amp; Answers</h2>
</div>
<div className="space-y-4">
<details className="group bg-stone-50 rounded-xl border border-stone-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-stone-900">Is BlurtAI free?</span>
<iconify-icon className="text-stone-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-stone-600">
                        Yes! You can start learning for free with no credit card required. We offer a generous free tier that covers most student needs.
                    </div>
</details>
<details className="group bg-stone-50 rounded-xl border border-stone-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-stone-900">How is this different from ChatGPT?</span>
<iconify-icon className="text-stone-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-stone-600">
                        ChatGPT answers questions. BlurtAI teaches. We don't just give you information — we structure it, test your understanding, adapt to your mistakes, and provide exam-style feedback aligned with UK specifications.
                    </div>
</details>
<details className="group bg-stone-50 rounded-xl border border-stone-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-stone-900">Does it match my exam board?</span>
<iconify-icon className="text-stone-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-stone-600">
                        Yes. Content is mapped to AQA, Edexcel, OCR, and other major UK exam boards. Select your board and we'll tailor everything to your specification.
                    </div>
</details>
<details className="group bg-stone-50 rounded-xl border border-stone-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-stone-900">Will it work on my phone?</span>
<iconify-icon className="text-stone-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-stone-600">
                        Absolutely. BlurtAI is fully responsive and works beautifully on phones, tablets, and desktops. Learn anywhere.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 bg-gradient-to-b from-stone-50 to-stone-100" id="start">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-stone-900 leading-tight">
                Learn in a way<br/>that actually sticks.
            </h2>
<p className="mt-6 text-stone-600">No card required. Built for UK exams.</p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200" href="#">
                    Start Learning Free
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 px-6 py-4 text-stone-600 hover:text-stone-900 transition-colors" href="#">
                    See a demo
                    <iconify-icon icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="py-16 px-6 bg-white border-t border-stone-200">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<a className="text-xl font-semibold tracking-tight text-stone-900" href="#">blurt<span className="text-indigo-600">ai</span></a>
<p className="mt-2 text-sm text-stone-500">Revision that actually teaches.</p>
</div>
<div className="flex items-center gap-8 text-sm text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-stone-900 transition-colors" href="#">Terms</a>
<a className="hover:text-stone-900 transition-colors" href="#">Contact</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-stone-100 text-center">
<p className="text-xs text-stone-400">© 2025 BlurtAI. Made with care for UK students.</p>
</div>
</div>
</footer>
<style>
        @keyframes fadeUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .insight-underline {
            animation: drawLine 1s ease forwards 0.5s;
            transform: scaleX(0);
        }
        
        @keyframes drawLine {
            to {
                transform: scaleX(1);
            }
        }
        
        details summary::-webkit-details-marker {
            display: none;
        }
        
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    </style>


    </>
  );
}
