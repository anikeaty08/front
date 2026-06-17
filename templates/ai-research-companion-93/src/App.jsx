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



        document.getElementById('feedbackForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const originalText = btn.innerHTML;
            
            // Loading state
            btn.disabled = true;
            btn.innerHTML = `<span class="iconify animate-spin" data-icon="lucide:loader-2" data-width="16"></span> Sending...`;

            // Gather data from form
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => data[key] = value);

            // Send to Make.com Webhook
            fetch('https://hook.eu2.make.com/shm6k5rg2bhizvdw6xearffcin1ui9ss', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if(response.ok) {
                    // Success State
                    btn.innerHTML = `<span class="iconify" data-icon="lucide:check" data-width="16"></span> Feedback Sent!`;
                    btn.classList.remove('bg-slate-900', 'hover:bg-slate-800');
                    btn.classList.add('bg-green-600', 'hover:bg-green-700');
                    this.reset();
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        btn.classList.add('bg-slate-900', 'hover:bg-slate-800');
                        btn.classList.remove('bg-green-600', 'hover:bg-green-700');
                    }, 3000);
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                btn.innerHTML = `Error. Please try again.`;
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                }, 3000);
            });
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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:library" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">SCHOLARSYNC</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#workflow">Workflow</a>
<a className="hover:text-slate-900 transition-colors" href="#integrity">Integrity</a>
</div>
<a className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-full transition-all shadow-lg shadow-slate-900/10" href="#feedback">
                Join Beta
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-30 pointer-events-none">
<div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
<div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-slate-600">Accepting Early Access Researchers</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6 animate-fade-in-up delay-100">
                Research deeper.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Write with integrity.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
                The intelligent companion for Master’s &amp; PhD students. Automate literature reviews, draft citations instantly, and verify academic integrity before you submit.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
<a className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center gap-2" href="#feedback">
                    Request Early Access
                    <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2" href="#features">
<span className="iconify" data-icon="lucide:play-circle" data-strokeWidth="1.5" data-width="16"></span>
                    See how it works
                </a>
</div>
</div>
</header>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">The modern research workflow is broken.</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Researchers today are forced to juggle dozens of disconnected tools. Between finding papers, managing PDFs, formatting citations, and worrying about AI detection, the actual <i>thinking</i> gets lost.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
<span className="iconify" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Fragmented &amp; Slow</h3>
<p className="text-sm text-slate-500 mt-1">Switching between Google Scholar, endless browser tabs, and Word documents kills flow.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
<span className="iconify" data-icon="lucide:alert-triangle" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Integrity Anxiety</h3>
<p className="text-sm text-slate-500 mt-1">Constant fear of accidental plagiarism or false positives from AI detectors.</p>
</div>
</div>
</div>
</div>
<div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-200">

<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10 rounded-2xl"></div>
<div className="space-y-3 opacity-60 scale-95 blur-[1px]">
<div className="h-4 bg-slate-200 rounded w-3/4"></div>
<div className="h-4 bg-slate-200 rounded w-full"></div>
<div className="h-4 bg-slate-200 rounded w-5/6"></div>
</div>
<div className="mt-6 bg-white rounded-xl shadow-sm border border-slate-200 p-4 relative z-10 transform translate-x-4">
<div className="flex items-center gap-3 mb-3 text-red-500 text-xs font-medium">
<span className="iconify" data-icon="lucide:x-circle" data-width="14"></span>
                            Citation Error Detected
                        </div>
<div className="h-2 bg-slate-100 rounded w-full mb-2"></div>
<div className="h-2 bg-slate-100 rounded w-2/3"></div>
</div>
<div className="mt-4 bg-white rounded-xl shadow-sm border border-slate-200 p-4 relative z-10 transform -translate-x-2">
<div className="flex items-center justify-between mb-2">
<div className="text-xs font-semibold text-slate-700">Plagiarism Check</div>
<div className="text-xs text-amber-600">14% Similarity</div>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-amber-500 h-1.5 rounded-full" style={{width: '14%'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Your entire research workflow, unified.</h2>
<p className="text-slate-500">From the first paper you read to the final bibliography export, ScholarSync keeps you organized and compliant.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">AI Literature Review</h3>
<p className="text-sm text-slate-500 mb-6 max-w-md">Upload PDFs or search databases. Our AI summarizes key findings, methodologies, and gaps across dozens of papers instantly.</p>
<div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
<div className="flex gap-3 mb-3">
<div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-400">PDF</div>
<div className="text-xs text-slate-600">
<span className="block font-medium text-slate-900">Analysis of Neural Networks (2023)</span>
<span className="text-slate-400">Processing abstract &amp; findings...</span>
</div>
</div>
<div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-3/4"></div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-violet-50 rounded-lg flex items-center justify-center text-violet-600 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:quote" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Smart Citations</h3>
<p className="text-sm text-slate-500 mb-4">Auto-format references in APA, MLA, IEEE, and Chicago styles with one click.</p>
<div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-50 p-2 rounded border border-slate-100">
<span className="text-violet-600">[1]</span> Smith et al., 2024
                    </div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:list-tree" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Structural Outlining</h3>
<p className="text-sm text-slate-500">Turn messy notes into coherent, logical dissertation structures automatically.</p>
</div>

<div className="md:col-span-2 bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Dual-Layer Integrity Check</h3>
<p className="text-sm text-slate-400 mb-6 max-w-md">Scan your draft for plagiarism against billions of web pages and detect AI-generated segments to ensure your voice remains authentic.</p>
<div className="flex items-center gap-4 text-xs font-medium text-emerald-400">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:check" data-width="14"></span> Turnitin Compatible</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:check" data-width="14"></span> 99.9% Accuracy</span>
</div>
</div>

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-y border-slate-100">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<p className="text-3xl font-semibold text-slate-900">2,000+</p>
<p className="text-sm text-slate-500">Students &amp; Researchers</p>
</div>
<div className="h-8 w-px bg-slate-200 hidden md:block"></div>
<div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-bold font-serif text-slate-800">Stanford</span>
<span className="text-lg font-bold font-serif text-slate-800">MIT</span>
<span className="text-lg font-bold font-serif text-slate-800">Oxford</span>
<span className="text-lg font-bold font-serif text-slate-800">Berkeley</span>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="feedback">
<div className="absolute inset-0 bg-slate-50 -z-10"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-50/50 to-transparent"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Help shape the future of academic research.</h2>
<p className="text-slate-500">We are opening limited spots for early access. Tell us about your workflow to secure your invitation.</p>
</div>
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden relative">
<div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
<form className="p-8 md:p-10 space-y-8" id="feedbackForm">

<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Name (Optional)</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400" name="name" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email Address <span className="text-red-500">*</span></label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400" name="email" placeholder="jane@university.edu" required="" type="email"/>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">I am a...</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="role" type="radio" value="masters"/>
<div className="px-4 py-3 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 text-center hover:bg-slate-50 transition-all peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:text-indigo-800 peer-focus:ring-2 peer-focus:ring-indigo-500/20">
                                    Master's
                                </div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="role" type="radio" value="phd"/>
<div className="px-4 py-3 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 text-center hover:bg-slate-50 transition-all peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:text-indigo-800 peer-focus:ring-2 peer-focus:ring-indigo-500/20">
                                    PhD Scholar
                                </div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="role" type="radio" value="researcher"/>
<div className="px-4 py-3 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 text-center hover:bg-slate-50 transition-all peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:text-indigo-800 peer-focus:ring-2 peer-focus:ring-indigo-500/20">
                                    Researcher
                                </div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="role" type="radio" value="prof"/>
<div className="px-4 py-3 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 text-center hover:bg-slate-50 transition-all peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:text-indigo-800 peer-focus:ring-2 peer-focus:ring-indigo-500/20">
                                    Professor
                                </div>
</label>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Biggest Challenge in Academic Writing?</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 resize-none" name="challenge" placeholder="e.g., Formatting citations correctly or paraphrasing complex topics..." rows="3"></textarea>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Which feature is most critical to you?</label>
<div className="space-y-2">
<label className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors has-[:checked]:border-indigo-200 has-[:checked]:bg-indigo-50/50">
<input className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" name="feature" type="radio" value="literature_review"/>
<span className="text-sm text-slate-700">AI Literature Review &amp; Summarization</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors has-[:checked]:border-indigo-200 has-[:checked]:bg-indigo-50/50">
<input className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" name="feature" type="radio" value="auto_citation"/>
<span className="text-sm text-slate-700">Auto-Citation &amp; Reference Management</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors has-[:checked]:border-indigo-200 has-[:checked]:bg-indigo-50/50">
<input className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" name="feature" type="radio" value="plagiarism_detection"/>
<span className="text-sm text-slate-700">Plagiarism &amp; AI Content Detection</span>
</label>
</div>
</div>

<div className="space-y-3 pt-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Would you pay a small monthly fee for this tool?</label>
<div className="flex gap-6">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" name="pay" type="radio" value="yes"/>
<span className="text-sm text-slate-700 group-hover:text-slate-900">Yes</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" name="pay" type="radio" value="maybe"/>
<span className="text-sm text-slate-700 group-hover:text-slate-900">Maybe</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" name="pay" type="radio" value="no"/>
<span className="text-sm text-slate-700 group-hover:text-slate-900">No</span>
</label>
</div>
</div>

<div className="pt-4">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 rounded-lg shadow-lg shadow-slate-900/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer z-20 relative" id="submitBtn" type="submit">
                            Submit Feedback &amp; Get Early Access
                            <span className="iconify" data-icon="lucide:send" data-width="16"></span>
</button>
<p className="text-center text-xs text-slate-400 mt-4">We respect your privacy. No spam, ever.</p>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:library" data-width="14"></span>
</div>
<span className="text-xs font-semibold tracking-tight text-slate-900">SCHOLARSYNC</span>
</div>
<div className="text-xs text-slate-400">
                © 2024 ScholarSync Inc. All rights reserved. Academic integrity first.
            </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
</div>
</div>
</footer>



    </>
  );
}
