import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/60 h-16 flex items-center px-6 justify-between">
<div className="flex items-center gap-8">
<div className="text-xl font-bold tracking-tighter uppercase flex items-center gap-2">
<div className="w-8 h-8 rounded-lg ai-gradient flex items-center justify-center text-white text-xs">AI</div>
                AI4SOM
            </div>
<div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-cyan-500 transition-colors" href="#landing">Home</a>
<a className="hover:text-cyan-500 transition-colors" href="#student">Students</a>
<a className="hover:text-cyan-500 transition-colors" href="#teacher">Teachers</a>
<a className="hover:text-cyan-500 transition-colors" href="#admin">Institutions</a>
<a className="hover:text-cyan-500 transition-colors" href="#national">Impact</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-50 transition-all">Log In</button>
<button className="text-sm font-medium px-5 py-2 rounded-full bg-[#0A2540] text-white hover:opacity-90 shadow-lg shadow-blue-900/10 transition-all">Request Demo</button>
</div>
</nav>

<main className="pt-16">

<section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden" id="landing">
<div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-200/30 blur-[120px] rounded-full -z-10"></div>
<div className="max-w-4xl text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-600 mb-4">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    Now piloting in 10 Somali Schools
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#0A2540] leading-[1.1]">
                    Transforming Learning Through <span className="text-gradient">Artificial Intelligence</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
                    Personalized learning, intelligent teaching support, inclusive education, and AI literacy for the next generation of Somali scholars.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto px-8 py-4 rounded-full ai-gradient text-white font-medium shadow-xl shadow-purple-500/20 hover:scale-[1.02] transition-transform">
                        Start Learning Now
                    </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-slate-200 text-[#0A2540] font-medium hover:bg-slate-50 transition-colors">
                        Request Institution Demo
                    </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 w-full max-w-5xl">
<div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm text-center">
<div className="text-3xl font-semibold tracking-tight text-[#0A2540]">500+</div>
<div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Students</div>
</div>
<div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm text-center">
<div className="text-3xl font-semibold tracking-tight text-[#0A2540]">50+</div>
<div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Teachers</div>
</div>
<div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm text-center">
<div className="text-3xl font-semibold tracking-tight text-[#0A2540]">10+</div>
<div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Schools</div>
</div>
<div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm text-center">
<div className="text-3xl font-semibold tracking-tight text-[#0A2540]">98%</div>
<div className="text-xs text-slate-400 uppercase tracking-widest mt-1">AI Accuracy</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="student">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8">

<div className="md:col-span-3 space-y-6">
<div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
<iconify-icon icon="solar:user-circle-linear" width="28"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold">Ahmed Ali</div>
<div className="text-xs text-slate-400">Grade 9 Student</div>
</div>
</div>
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white shadow-sm text-sm font-medium text-cyan-600">
<iconify-icon icon="solar:widget-2-linear"></iconify-icon> Dashboard
                            </button>
<button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-white/50 text-sm font-medium transition-all">
<iconify-icon icon="solar:book-linear"></iconify-icon> My Courses
                            </button>
<button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-white/50 text-sm font-medium transition-all">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon> Progress
                            </button>
</nav>
</div>

<div className="p-5 rounded-3xl ai-gradient text-white space-y-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">AI Suggestion</span>
</div>
<p className="text-sm font-light leading-relaxed">
                            Based on your recent quiz, we recommend focusing on <span className="font-semibold">Quadratic Equations</span> today.
                        </p>
<button className="w-full py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-xs font-medium transition-all">
                            Start Review
                        </button>
</div>
</div>

<div className="md:col-span-9 space-y-8">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Student Dashboard</h2>
<div className="text-sm text-slate-400">Monday, 24 Oct 2023</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500">
<iconify-icon icon="solar:fire-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 font-medium">Daily Streak</div>
<div className="text-xl font-semibold">12 Days</div>
</div>
</div>
<div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500">
<iconify-icon icon="solar:cup-first-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 font-medium">Points</div>
<div className="text-xl font-semibold">2,450 XP</div>
</div>
</div>
<div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 font-medium">Completed</div>
<div className="text-xl font-semibold">18 Units</div>
</div>
</div>
</div>

<div className="rounded-3xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col h-[500px]">
<div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full ai-gradient flex items-center justify-center text-white">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<span className="font-medium text-sm">AI Tutor Assistant</span>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1 rounded-lg text-xs font-medium border border-slate-200 hover:bg-slate-50">English</button>
<button className="px-3 py-1 rounded-lg text-xs font-medium bg-[#0A2540] text-white">Soomaali</button>
</div>
</div>
<div className="flex-1 p-6 overflow-y-auto space-y-4">

<div className="flex gap-3 max-w-[80%]">
<div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-slate-500" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm text-sm leading-relaxed">
                                    Isku day inaad sharaxdo habka photosynthesis-ka? (Can you try explaining the process of photosynthesis?)
                                </div>
</div>

<div className="flex flex-row-reverse gap-3 max-w-[80%] ml-auto">
<div className="w-8 h-8 rounded-full ai-gradient flex-shrink-0"></div>
<div className="p-4 rounded-2xl bg-cyan-600 text-white shadow-sm text-sm leading-relaxed">
                                    Waa habka ay dhirtu ku samaysato cuntada iyagoo isticmaalaya iftiinka qorraxda.
                                </div>
</div>

<div className="flex gap-3 max-w-[80%]">
<div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-slate-500" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm text-sm leading-relaxed">
                                    Ma xaq tahay! (Exactly!) Here's a quick quiz to test your understanding.
                                    <button className="mt-3 block w-full py-2 rounded-xl bg-slate-50 border border-slate-200 text-cyan-600 font-medium hover:bg-cyan-50 transition-all">Generate Practice Quiz</button>
</div>
</div>
</div>
<div className="p-4 bg-white border-t border-slate-200">
<div className="relative">
<input className="w-full pl-4 pr-12 py-3 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-cyan-500 outline-none text-sm transition-all" placeholder="Ask anything in Somali or English..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
<button className="text-slate-400 hover:text-cyan-500"><iconify-icon icon="solar:microphone-linear" width="20"></iconify-icon></button>
<button className="w-8 h-8 rounded-lg bg-[#0A2540] text-white flex items-center justify-center"><iconify-icon icon="solar:arrow-up-linear" width="18"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F8FAFC]" id="teacher">
<div className="max-w-7xl mx-auto space-y-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="space-y-2">
<div className="text-sm font-semibold text-cyan-600 uppercase tracking-widest">Teacher Hub</div>
<h2 className="text-4xl font-semibold tracking-tight">Smart Educator Workspace</h2>
</div>
<div className="flex items-center gap-3">
<button className="px-6 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-all flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Schedule
                        </button>
<button className="px-6 py-3 rounded-2xl bg-[#0A2540] text-white text-sm font-medium shadow-lg shadow-blue-900/10 hover:opacity-90 transition-all flex items-center gap-2">
<iconify-icon icon="solar:magic-stick-linear"></iconify-icon> AI Lesson Planner
                        </button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm space-y-6">
<div className="text-lg font-semibold tracking-tight">AI Lesson Planner</div>
<div className="space-y-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-400 uppercase">Topic</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-sm focus:border-purple-400 outline-none" type="text" value="Photosynthesis"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-400 uppercase">Grade</label>
<select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none">
<option>Grade 7</option>
<option>Grade 8</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-400 uppercase">Subject</label>
<select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none">
<option>Science</option>
<option>Maths</option>
</select>
</div>
</div>
<button className="w-full py-4 rounded-2xl ai-gradient text-white font-semibold text-sm shadow-lg shadow-purple-500/20">Generate Plan</button>
</div>
</div>

<div className="md:col-span-2 p-8 rounded-[2rem] border border-dashed border-slate-300 bg-white/50 space-y-6">
<div className="flex items-center justify-between">
<div className="text-lg font-semibold tracking-tight text-slate-400 italic">Generated Content Preview...</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest">Optimized for Somalia</span>
</div>
</div>
<div className="space-y-6">
<div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3">
<div className="text-xs font-bold text-cyan-600 uppercase">Learning Objectives</div>
<p className="text-sm text-slate-600 leading-relaxed">Students will be able to identify the inputs and outputs of photosynthesis and explain how energy from sunlight is converted into chemical energy.</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-2">
<div className="text-xs font-bold text-purple-600 uppercase">Activities</div>
<ul className="text-xs text-slate-500 space-y-2">
<li>• Leaf Diagram Sketching</li>
<li>• Sunlight Exposure Lab</li>
</ul>
</div>
<div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-2">
<div className="text-xs font-bold text-orange-600 uppercase">Assessment</div>
<ul className="text-xs text-slate-500 space-y-2">
<li>• 5 Multiple Choice Questions</li>
<li>• Short Answer: Chlorophyll</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="space-y-4">
<h2 className="text-4xl font-semibold tracking-tight">Inclusive Learning Hub</h2>
<p className="text-slate-500 font-light leading-relaxed">Our AI platform is designed to leave no student behind. With multi-lingual support, text-to-speech for visually impaired learners, and a focus on female STEM role models.</p>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
<iconify-icon icon="solar:soundwave-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold">Text-to-Speech</div>
<p className="text-xs text-slate-400">Available in Somali &amp; English</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0">
<iconify-icon icon="solar:women-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold">Gender Responsive</div>
<p className="text-xs text-slate-400">Inclusive STEM content</p>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400 to-purple-400 rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-30 transition-all"></div>
<div className="relative p-8 rounded-[3rem] bg-[#0A2540] text-white overflow-hidden min-h-[400px] flex flex-col justify-between">
<div className="space-y-2">
<div className="px-3 py-1 rounded-full bg-white/10 w-fit text-[10px] font-bold uppercase tracking-widest border border-white/10">STEM Hub</div>
<h3 className="text-2xl font-semibold tracking-tight">Robotics &amp; AI Literacy</h3>
</div>
<div className="flex flex-col gap-4">
<div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-cyan-400/20 text-cyan-400 flex items-center justify-center">
<iconify-icon icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<div className="text-sm font-medium">Coding Fundamentals</div>
</div>
<iconify-icon className="text-slate-400" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-purple-400/20 text-purple-400 flex items-center justify-center">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<div className="text-sm font-medium">Virtual Robotics Lab</div>
</div>
<iconify-icon className="text-slate-400" icon="solar:lock-linear"></iconify-icon>
</div>
</div>
<div className="absolute -right-16 -bottom-16 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="national">
<div className="max-w-7xl mx-auto space-y-12">
<div className="text-center space-y-4">
<h2 className="text-4xl font-semibold tracking-tight text-[#0A2540]">National Education Dashboard</h2>
<p className="text-slate-500 font-light max-w-2xl mx-auto">Real-time insights for Ministries of Education and Development Partners.</p>
</div>
<div className="grid md:grid-cols-4 gap-6">

<div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Schools Connected</div>
<div className="text-3xl font-semibold mt-2">10</div>
<div className="mt-4 flex items-center gap-1 text-emerald-500 text-xs font-medium">
<iconify-icon icon="solar:alt-arrow-up-linear"></iconify-icon> 2 this month
                        </div>
</div>
<div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Gender Equity Index</div>
<div className="text-3xl font-semibold mt-2">0.92</div>
<div className="mt-4 flex items-center gap-1 text-emerald-500 text-xs font-medium">
<iconify-icon icon="solar:alt-arrow-up-linear"></iconify-icon> +4% improvement
                        </div>
</div>
<div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Literacy Lift</div>
<div className="text-3xl font-semibold mt-2">+18%</div>
<div className="mt-4 flex items-center gap-1 text-slate-400 text-xs font-medium">
                            Compared to baseline
                        </div>
</div>
<div className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Users</div>
<div className="text-3xl font-semibold mt-2">1.2k</div>
<div className="mt-4 flex items-center gap-1 text-slate-400 text-xs font-medium">
                            Daily Average
                        </div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="md:col-span-2 p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm overflow-hidden relative min-h-[400px]">
<div className="flex items-center justify-between mb-8">
<h3 className="text-lg font-semibold">Active Enrollment by Region</h3>
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold">Mogadishu</span>
<span className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold">Hargeisa</span>
<span className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold">Garowe</span>
</div>
</div>

<div className="flex items-end justify-between h-48 gap-4 px-4">
<div className="w-full bg-slate-100 rounded-t-xl relative group">
<div className="absolute bottom-0 w-full bg-cyan-400 rounded-t-xl transition-all group-hover:bg-cyan-500" style={{height: '65%'}}></div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-400">Jan</div>
</div>
<div className="w-full bg-slate-100 rounded-t-xl relative group">
<div className="absolute bottom-0 w-full bg-cyan-400 rounded-t-xl transition-all group-hover:bg-cyan-500" style={{height: '45%'}}></div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-400">Feb</div>
</div>
<div className="w-full bg-slate-100 rounded-t-xl relative group">
<div className="absolute bottom-0 w-full bg-cyan-400 rounded-t-xl transition-all group-hover:bg-cyan-500" style={{height: '85%'}}></div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-400">Mar</div>
</div>
<div className="w-full bg-slate-100 rounded-t-xl relative group">
<div className="absolute bottom-0 w-full bg-cyan-400 rounded-t-xl transition-all group-hover:bg-cyan-500" style={{height: '70%'}}></div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-400">Apr</div>
</div>
<div className="w-full bg-slate-100 rounded-t-xl relative group">
<div className="absolute bottom-0 w-full bg-cyan-400 rounded-t-xl transition-all group-hover:bg-cyan-500" style={{height: '95%'}}></div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-400">May</div>
</div>
</div>
<div className="mt-12 p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
<div className="text-xs font-medium text-slate-500 italic">"AI4SOM has increased female student participation by 14% in the last quarter."</div>
<iconify-icon className="text-slate-400" icon="solar:info-circle-linear"></iconify-icon>
</div>
</div>

<div className="p-8 rounded-[2.5rem] bg-[#0A2540] text-white space-y-6">
<div className="text-lg font-semibold tracking-tight">AI Ethics &amp; Governance</div>
<div className="space-y-4">
<div className="p-4 rounded-2xl bg-white/5 border border-white/10">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold">Data Anonymization</span>
<iconify-icon className="text-emerald-400" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-full h-full bg-emerald-400"></div>
</div>
</div>
<div className="p-4 rounded-2xl bg-white/5 border border-white/10">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold">Teacher Verification</span>
<iconify-icon className="text-cyan-400" icon="solar:verified-check-linear"></iconify-icon>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-[85%] h-full bg-cyan-400"></div>
</div>
</div>
</div>
<p className="text-xs text-white/40 leading-relaxed pt-4">
                            Compliant with Somali Data Protection protocols and UNESCO AI education frameworks.
                        </p>
<button className="w-full py-3 rounded-xl border border-white/20 text-xs font-medium hover:bg-white/5 transition-all">Download Transparency Report</button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#0A2540] relative overflow-hidden">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 relative">
<h2 className="text-5xl font-semibold tracking-tight text-white leading-tight">Empowering a Nation's <span className="text-cyan-400">Future Potential</span></h2>
<p className="text-slate-400 font-light text-lg">We are seeking partners to scale AI4SOM from 10 schools to 1,000 schools across East Africa. Join us in building a more inclusive, AI-powered educational ecosystem.</p>
<div className="space-y-4 pt-4">
<div className="flex items-center gap-4 text-white">
<iconify-icon className="text-cyan-400" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
<span className="text-sm font-medium">AU Strategy for Africa Alignment</span>
</div>
<div className="flex items-center gap-4 text-white">
<iconify-icon className="text-cyan-400" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
<span className="text-sm font-medium">Sustainable Development Goal (SDG 4) Focus</span>
</div>
<div className="flex items-center gap-4 text-white">
<iconify-icon className="text-cyan-400" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
<span className="text-sm font-medium">Scalable SaaS Architecture for Low Bandwidth</span>
</div>
</div>
<button className="mt-8 px-10 py-5 rounded-full bg-white text-[#0A2540] font-semibold text-sm hover:scale-105 transition-transform">
                        Download Investment Prospectus
                    </button>
</div>

<div className="p-10 rounded-[3rem] bg-white shadow-2xl relative">
<h3 className="text-xl font-semibold mb-8 tracking-tight">Scalability Roadmap</h3>
<div className="space-y-10 relative">
<div className="absolute left-4 top-2 bottom-2 w-px bg-slate-100"></div>
<div className="relative pl-12">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full ai-gradient flex items-center justify-center text-white ring-8 ring-white">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="text-sm font-semibold">Phase 1: Pilot (2023)</div>
<p className="text-xs text-slate-400 mt-1">10 Schools in Mogadishu &amp; Garowe. Foundation of AI dataset in Somali language.</p>
</div>
<div className="relative pl-12">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 ring-8 ring-white">
<iconify-icon icon="solar:play-linear"></iconify-icon>
</div>
<div className="text-sm font-semibold">Phase 2: Expansion (2024)</div>
<p className="text-xs text-slate-400 mt-1">100 Schools. Integration with National Curriculum. Robotics kit distribution.</p>
</div>
<div className="relative pl-12">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 ring-8 ring-white">
<iconify-icon icon="solar:globus-linear"></iconify-icon>
</div>
<div className="text-sm font-semibold">Phase 3: Continental (2025+)</div>
<p className="text-xs text-slate-400 mt-1">Expansion to regional neighbors. Multi-dialect support and Pan-African STEM competitions.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="py-12 px-6 border-t border-slate-200 glass">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-xl font-bold tracking-tighter uppercase flex items-center gap-2">
<div className="w-8 h-8 rounded-lg ai-gradient flex items-center justify-center text-white text-xs">AI</div>
                AI4SOM
            </div>
<div className="flex gap-8 text-xs font-medium text-slate-400 uppercase tracking-widest">
<a className="hover:text-cyan-500 transition-colors" href="#">Privacy</a>
<a className="hover:text-cyan-500 transition-colors" href="#">Terms</a>
<a className="hover:text-cyan-500 transition-colors" href="#">Transparency</a>
<a className="hover:text-cyan-500 transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-slate-400">
                © 2023 AI4SOM. Empowering Somalia's future through technology.
            </div>
</div>
</footer>

<button className="fixed bottom-8 right-8 w-16 h-16 rounded-full ai-gradient text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group z-[100]">
<iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:stars-minimalistic-bold" width="32"></iconify-icon>
</button>

    </>
  );
}
