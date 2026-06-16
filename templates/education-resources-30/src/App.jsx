import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#home">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-500 to-teal-400 flex items-center justify-center text-xs font-semibold">AR</div>
<span>AKUEB<span className="text-slate-500">RES</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide">
<a className="text-white hover:text-white transition-colors" href="#home">Home</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#resources">Resources</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#listening">Listening</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#notes">SLO Notes</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-all text-white">
<span>Login</span>
<iconify-icon icon="solar:login-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">

<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium tracking-wide">
<span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                    Updated for 2024 Session
                </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    Complete archive for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400">AKUEB Excellence</span>
</h1>
<p className="text-lg font-light text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Access comprehensive resources including Question Papers, E-marking Notes, Listening Passages, and SLO-wise material in one unified platform.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] flex items-center justify-center gap-2" href="#resources">
                        Start Learning
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 glass-card hover:bg-white/5 text-white text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2" href="#listening">
                        Listening Audio
                        <iconify-icon icon="solar:headphones-round-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="pt-8 border-t border-white/5">
<p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Available Now</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<a className="glass-card p-3 rounded-lg hover:bg-white/5 transition-colors text-center group" href="#resources">
<iconify-icon className="text-teal-400 mb-2 group-hover:scale-110 transition-transform" icon="solar:document-text-linear" width="20"></iconify-icon>
<p className="text-xs text-slate-300">Question Papers</p>
</a>
<a className="glass-card p-3 rounded-lg hover:bg-white/5 transition-colors text-center group" href="#resources">
<iconify-icon className="text-purple-400 mb-2 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear" width="20"></iconify-icon>
<p className="text-xs text-slate-300">Answer Keys</p>
</a>
<a className="glass-card p-3 rounded-lg hover:bg-white/5 transition-colors text-center group" href="#notes">
<iconify-icon className="text-pink-400 mb-2 group-hover:scale-110 transition-transform" icon="solar:pen-new-square-linear" width="20"></iconify-icon>
<p className="text-xs text-slate-300">E-Marking</p>
</a>
<a className="glass-card p-3 rounded-lg hover:bg-white/5 transition-colors text-center group" href="#syllabus">
<iconify-icon className="text-indigo-400 mb-2 group-hover:scale-110 transition-transform" icon="solar:bookmark-square-linear" width="20"></iconify-icon>
<p className="text-xs text-slate-300">Syllabus</p>
</a>
</div>
</div>
</div>

<div className="relative hidden lg:block h-[600px] w-full">

<div className="absolute top-10 right-10 w-72 glass-card p-5 rounded-2xl animate-float z-20">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
<iconify-icon icon="solar:file-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">E-marking Notes</p>
<p className="text-xs text-slate-400">Updated Theory Answers</p>
</div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-full bg-teal-500 rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-slate-500">
<span>Detailed solutions available</span>
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>

<div className="absolute top-48 left-10 w-80 glass-card p-6 rounded-2xl animate-float z-10" style={{animationDelay: '1.5s'}}>
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs text-indigo-400 font-medium tracking-wide uppercase">SLO-Wise Notes</p>
<h3 className="text-lg font-medium text-white mt-1">Targeted Learning</h3>
</div>
<iconify-icon className="text-indigo-400" icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="space-y-2 mt-2">
<div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
<span className="text-xs text-slate-300">Physics: Vectors</span>
<span className="text-xs text-indigo-400">Notes Ready</span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
<span className="text-xs text-slate-300">Chem: Bonding</span>
<span className="text-xs text-indigo-400">Notes Ready</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-white/5 bg-slate-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">

<div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors group">
<iconify-icon className="text-indigo-400 text-2xl group-hover:scale-110 transition-transform" icon="solar:file-text-linear"></iconify-icon>
<span className="text-[10px] font-medium text-center text-slate-300 uppercase tracking-wide">Question Papers</span>
</div>

<div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors group">
<iconify-icon className="text-teal-400 text-2xl group-hover:scale-110 transition-transform" icon="solar:key-linear"></iconify-icon>
<span className="text-[10px] font-medium text-center text-slate-300 uppercase tracking-wide">Answer Keys</span>
</div>

<div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors group">
<iconify-icon className="text-purple-400 text-2xl group-hover:scale-110 transition-transform" icon="solar:pen-2-linear"></iconify-icon>
<span className="text-[10px] font-medium text-center text-slate-300 uppercase tracking-wide">E-Marking Notes</span>
</div>

<div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors group">
<iconify-icon className="text-pink-400 text-2xl group-hover:scale-110 transition-transform" icon="solar:headphones-round-linear"></iconify-icon>
<span className="text-[10px] font-medium text-center text-slate-300 uppercase tracking-wide">Listening Audio</span>
</div>

<div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors group">
<iconify-icon className="text-orange-400 text-2xl group-hover:scale-110 transition-transform" icon="solar:clipboard-list-linear"></iconify-icon>
<span className="text-[10px] font-medium text-center text-slate-300 uppercase tracking-wide">Syllabus</span>
</div>

<div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors group">
<iconify-icon className="text-blue-400 text-2xl group-hover:scale-110 transition-transform" icon="solar:document-add-linear"></iconify-icon>
<span className="text-[10px] font-medium text-center text-slate-300 uppercase tracking-wide">Model Papers</span>
</div>

<div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors group">
<iconify-icon className="text-green-400 text-2xl group-hover:scale-110 transition-transform" icon="solar:notebook-bookmark-linear"></iconify-icon>
<span className="text-[10px] font-medium text-center text-slate-300 uppercase tracking-wide">SLO-Wise Notes</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/50" id="resources">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-teal-400 text-xs font-medium tracking-widest uppercase mb-3 block">Digital Library</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Browse by Grade</h2>
<p className="text-slate-400 mt-4 font-light max-w-2xl">Select a grade to access all associated papers, keys, audios, and marking notes.</p>
</div>
<div className="flex gap-2">
<button className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg transition-all text-sm font-medium">
                        Model Papers
                    </button>
<button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all text-sm font-medium">
                        Search Archive
                    </button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-indigo-500/50 transition-colors flex flex-col h-full">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:diploma-verified-linear" width="80"></iconify-icon>
</div>
<div className="relative z-10 flex-1">
<h3 className="text-2xl font-semibold text-white tracking-tight">SSC-I</h3>
<p className="text-sm text-indigo-300 mt-1 mb-6">Grade 9 Resources</p>
<div className="grid grid-cols-2 gap-2 mb-6">
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:file-text-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">Question Papers</p>
</div>
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:key-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">Answer Keys</p>
</div>
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:pen-2-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">E-Marking</p>
</div>
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:headphones-round-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">Listening</p>
</div>
</div>
</div>
<button className="w-full py-2.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 text-xs font-medium rounded transition-colors relative z-10">Access SSC-I Library</button>
</div>

<div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-teal-500/50 transition-colors flex flex-col h-full">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:diploma-linear" width="80"></iconify-icon>
</div>
<div className="relative z-10 flex-1">
<h3 className="text-2xl font-semibold text-white tracking-tight">SSC-II</h3>
<p className="text-sm text-teal-300 mt-1 mb-6">Grade 10 Resources</p>
<div className="grid grid-cols-2 gap-2 mb-6">
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:file-text-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">Question Papers</p>
</div>
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:key-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">Answer Keys</p>
</div>
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:pen-2-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">E-Marking</p>
</div>
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:headphones-round-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">Listening</p>
</div>
</div>
</div>
<button className="w-full py-2.5 bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 text-xs font-medium rounded transition-colors relative z-10">Access SSC-II Library</button>
</div>

<div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-purple-500/50 transition-colors flex flex-col h-full">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:square-academic-cap-linear" width="80"></iconify-icon>
</div>
<div className="relative z-10 flex-1">
<h3 className="text-2xl font-semibold text-white tracking-tight">HSSC-I</h3>
<p className="text-sm text-purple-300 mt-1 mb-6">Grade 11 Resources</p>
<div className="grid grid-cols-2 gap-2 mb-6">
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:file-text-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">Question Papers</p>
</div>
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:key-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">Answer Keys</p>
</div>
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:pen-2-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">E-Marking</p>
</div>
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:headphones-round-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">Listening</p>
</div>
</div>
</div>
<button className="w-full py-2.5 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 text-xs font-medium rounded transition-colors relative z-10">Access HSSC-I Library</button>
</div>

<div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-pink-500/50 transition-colors flex flex-col h-full">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:medal-ribbons-star-linear" width="80"></iconify-icon>
</div>
<div className="relative z-10 flex-1">
<h3 className="text-2xl font-semibold text-white tracking-tight">HSSC-II</h3>
<p className="text-sm text-pink-300 mt-1 mb-6">Grade 12 Resources</p>
<div className="grid grid-cols-2 gap-2 mb-6">
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:file-text-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">Question Papers</p>
</div>
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:key-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">Answer Keys</p>
</div>
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:pen-2-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">E-Marking</p>
</div>
<div className="bg-white/5 p-2 rounded border border-white/5 text-center">
<iconify-icon className="text-slate-400 text-lg mb-1" icon="solar:headphones-round-linear"></iconify-icon>
<p className="text-[10px] text-slate-400">Listening</p>
</div>
</div>
</div>
<button className="w-full py-2.5 bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 text-xs font-medium rounded transition-colors relative z-10">Access HSSC-II Library</button>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="listening">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950/20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<span className="text-indigo-400 text-xs font-medium tracking-widest uppercase mb-3 block">Specialized Content</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Listening Passages &amp; <br/> E-Marking Notes</h2>
<p className="text-slate-400 font-light leading-relaxed mb-8">
                        Prepare effectively with high-quality audio passages for language exams and understand the marking criteria with our detailed E-marking notes (Theory Answers).
                    </p>
<div className="space-y-4">
<div className="flex gap-4 p-4 rounded-xl border border-white/10 bg-white/5">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 text-indigo-400">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">Listening Passages</h4>
<p className="text-xs text-slate-400 mt-1">Stream or download official audio tracks for English and Urdu examinations.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl border border-white/10 bg-white/5">
<div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 text-teal-400">
<iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">E-Marking Notes</h4>
<p className="text-xs text-slate-400 mt-1">Review theory answers with examiner comments to maximize your written score.</p>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-1 border border-white/10">
<div className="bg-slate-900/80 rounded-xl p-8">
<div className="flex justify-between items-center mb-6">
<h3 className="text-white font-medium">Audio Player</h3>
<span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">English HSSC-I</span>
</div>

<div className="flex items-center gap-1 h-12 mb-6">
<div className="w-1 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
<div className="w-1 h-6 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 h-8 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 h-5 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
<div className="w-1 h-8 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 h-10 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
<div className="w-1 h-6 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 h-4 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
<div className="w-1 h-full flex-1 bg-white/5 rounded mx-2 relative">
<div className="absolute top-1/2 -translate-y-1/2 left-0 h-1 bg-white/10 w-full rounded">
<div className="h-full w-1/3 bg-indigo-500 rounded relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
</div>
</div>
</div>
<span className="text-xs text-slate-400 w-12 text-right">04:20</span>
</div>
<div className="flex justify-center gap-4">
<button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors">
<iconify-icon icon="solar:skip-previous-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 transition-colors">
<iconify-icon icon="solar:pause-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors">
<iconify-icon icon="solar:skip-next-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-t border-white/5" id="notes">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 mb-12">
<div>
<span className="text-purple-400 text-xs font-medium tracking-widest uppercase mb-3 block">Focused Study</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">SLO-Wise Notes &amp; Syllabus</h2>
<p className="text-slate-400 mt-4 font-light">Don't just solve papers. Master specific concepts by practicing questions organized by Student Learning Objectives (SLOs).</p>
</div>
<div className="flex items-end lg:justify-end">

<div className="relative w-full max-w-md">
<input className="w-full bg-slate-900/80 border border-white/10 rounded-full py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600" placeholder="Search SLOs (e.g. 'Thermodynamics')" type="text"/>
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="flex flex-wrap gap-2 mb-12">
<span className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-white cursor-pointer hover:bg-white/10 transition-colors">Physics SLOs</span>
<span className="px-4 py-2 rounded-lg border border-white/10 bg-transparent text-xs font-medium text-slate-400 cursor-pointer hover:bg-white/5 transition-colors">Biology SLOs</span>
<span className="px-4 py-2 rounded-lg border border-white/10 bg-transparent text-xs font-medium text-slate-400 cursor-pointer hover:bg-white/5 transition-colors">Computer Science</span>
<span className="px-4 py-2 rounded-lg border border-white/10 bg-transparent text-xs font-medium text-slate-400 cursor-pointer hover:bg-white/5 transition-colors">Chemistry</span>
<span className="px-4 py-2 rounded-lg border border-white/10 bg-transparent text-xs font-medium text-slate-400 cursor-pointer hover:bg-white/5 transition-colors">Mathematics</span>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:atom-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-semibold bg-white/10 px-2 py-1 rounded text-slate-300">Physics XI</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">Force and Motion</h3>
<p className="text-xs text-slate-400 mb-4 leading-relaxed">SLO 11.2.1: Newton's laws, momentum, and projectile motion notes.</p>
<div className="flex items-center gap-4 text-xs text-slate-500 border-t border-white/5 pt-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:notebook-linear"></iconify-icon> Detailed Notes</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:question-circle-linear"></iconify-icon> Model Questions</span>
</div>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:test-tube-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-semibold bg-white/10 px-2 py-1 rounded text-slate-300">Chemistry XII</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-green-400 transition-colors">Hydrocarbons</h3>
<p className="text-xs text-slate-400 mb-4 leading-relaxed">SLO 12.4.3: Nomenclature, reactions, and mechanisms covered.</p>
<div className="flex items-center gap-4 text-xs text-slate-500 border-t border-white/5 pt-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:notebook-linear"></iconify-icon> Detailed Notes</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:question-circle-linear"></iconify-icon> Model Questions</span>
</div>
</div>

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
<iconify-icon icon="solar:calculator-minimalistic-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-semibold bg-white/10 px-2 py-1 rounded text-slate-300">Math X</span>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-red-400 transition-colors">Sets and Functions</h3>
<p className="text-xs text-slate-400 mb-4 leading-relaxed">SLO 10.1.2: Operations on sets, venn diagrams, and functions.</p>
<div className="flex items-center gap-4 text-xs text-slate-500 border-t border-white/5 pt-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:notebook-linear"></iconify-icon> Detailed Notes</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:question-circle-linear"></iconify-icon> Model Questions</span>
</div>
</div>
</div>
<div className="mt-8 text-center">
<button className="text-sm text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-1 mx-auto">
                    View full syllabus <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020617] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-teal-400 flex items-center justify-center text-[10px] font-semibold">AR</div>
<span>AKUEB<span className="text-slate-500">RES</span></span>
</a>
<p className="text-sm text-slate-500 font-light max-w-xs leading-relaxed">
                        An independent platform dedicated to providing high-quality educational resources for Aga Khan University Examination Board students.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-slate-400 font-light">
<li><a className="hover:text-indigo-400 transition-colors" href="#resources">Question Papers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#resources">Answer Keys</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#listening">Listening Passages</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#notes">SLO-Wise Notes</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-400 font-light">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Disclaimer</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-light">
<p>© 2024 AKUEB Resources. Not affiliated with AKU-EB official.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-facebook-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
