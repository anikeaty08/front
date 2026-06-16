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



        document.addEventListener('DOMContentLoaded', () => {
            const links = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('.page-section');

            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('data-target');
                    
                    // Update active state in nav visually (simple implementation)
                    links.forEach(l => {
                        if(l.tagName === 'BUTTON' && l.closest('.bg-[#F8F7F4]')) {
                            l.classList.remove('text-stone-900', 'bg-white', 'shadow-sm');
                            l.classList.add('text-stone-600');
                        }
                    });
                    if(link.tagName === 'BUTTON' && link.closest('.bg-[#F8F7F4]')) {
                        link.classList.remove('text-stone-600');
                        link.classList.add('text-stone-900', 'bg-white', 'shadow-sm');
                    }

                    // Hide all sections
                    sections.forEach(section => {
                        section.classList.remove('active');
                    });

                    // Show target section
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        targetSection.classList.add('active');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                });
            });
            
            // Set initial active nav item style
            const initialLink = document.querySelector('.nav-link[data-target="page-landing"]');
            if(initialLink && initialLink.tagName === 'BUTTON' && initialLink.closest('.bg-[#F8F7F4]')) {
                initialLink.classList.remove('text-stone-600');
                initialLink.classList.add('text-stone-900', 'bg-white', 'shadow-sm');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto w-full">
<div className="bg-white/80 backdrop-blur-md border border-[#E8E6DF] rounded-full px-4 py-3 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-2 cursor-pointer nav-link" data-target="page-landing">
<iconify-icon className="text-xl text-[#1A2E44]" icon="solar:book-bookmark-linear"></iconify-icon>
<span className="font-serif font-semibold tracking-tighter text-lg text-[#1A2E44] uppercase">SOL</span>
</div>
<div className="hidden md:flex items-center gap-1 bg-[#F8F7F4] p-1 rounded-full border border-[#E8E6DF]">
<button className="nav-link px-4 py-1.5 text-sm font-medium rounded-full text-stone-600 hover:text-stone-900 hover:bg-white transition-all" data-target="page-landing">Home</button>
<button className="nav-link px-4 py-1.5 text-sm font-medium rounded-full text-stone-600 hover:text-stone-900 hover:bg-white transition-all" data-target="page-notes">Notes</button>
<button className="nav-link px-4 py-1.5 text-sm font-medium rounded-full text-stone-600 hover:text-stone-900 hover:bg-white transition-all" data-target="page-pyq">PYQs</button>
<button className="nav-link px-4 py-1.5 text-sm font-medium rounded-full text-stone-600 hover:text-stone-900 hover:bg-white transition-all" data-target="page-syllabus">Syllabus</button>
<button className="nav-link px-4 py-1.5 text-sm font-medium rounded-full text-stone-600 hover:text-stone-900 hover:bg-white transition-all" data-target="page-community">Community</button>
<button className="nav-link px-4 py-1.5 text-sm font-medium rounded-full text-stone-600 hover:text-stone-900 hover:bg-white transition-all" data-target="page-clubs">Clubs</button>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors">
<iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="hidden md:block text-sm font-medium text-stone-600 hover:text-stone-900 nav-link" data-target="page-dashboard">Login</button>
<button className="bg-[#1A2E44] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#112031] transition-colors shadow-sm nav-link" data-target="page-upload">Upload</button>
</div>
</div>
</nav>

<main className="flex-grow pt-28 pb-20">



<section className="page-section active max-w-7xl mx-auto px-4 md:px-8" id="page-landing">

<div className="flex flex-col lg:flex-row items-center gap-16 py-12 md:py-20">
<div className="w-full lg:w-1/2 flex flex-col items-start space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E8E6DF] rounded-full shadow-sm">
<iconify-icon className="text-stone-400 text-sm" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-xs font-medium text-stone-600">Built for Sharda University Students</span>
</div>
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-[#1C1B1A]">
                        Everything Sharda Students Need, <br className="hidden md:block"/>
<span className="highlight-marker italic">In One Place.</span>
</h1>
<p className="text-base md:text-lg text-stone-600 max-w-lg leading-relaxed">
                        Find notes, PYQs, syllabus, uploads, and student community posts through one clean academic platform. Stop searching endless chats.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<button className="nav-link bg-[#1A2E44] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#112031] transition-colors shadow-md flex items-center gap-2" data-target="page-notes">
                            Explore Library <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="nav-link bg-white border border-[#E8E6DF] text-[#1C1B1A] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-50 transition-colors flex items-center gap-2" data-target="page-upload">
                            Upload Notes
                        </button>
</div>
</div>
<div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]">

<div className="absolute right-10 top-10 w-64 md:w-80 bg-white p-6 rounded-3xl border border-[#E8E6DF] shadow-paper rotate-3 z-10">
<div className="flex items-center gap-2 mb-4">
<span className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-md">Notes</span>
<span className="text-xs text-stone-400">PDF • 2.4mb</span>
</div>
<h3 className="font-medium text-lg tracking-tight mb-2">Data Structures &amp; Algorithms</h3>
<div className="space-y-2">
<div className="h-2 w-full bg-stone-100 rounded-full"></div>
<div className="h-2 w-5/6 bg-stone-100 rounded-full"></div>
<div className="h-2 w-4/6 bg-stone-100 rounded-full"></div>
</div>
</div>
<div className="absolute left-10 md:left-20 top-32 w-64 md:w-80 bg-[#FCFAF5] p-6 rounded-3xl border border-[#E8E6DF] shadow-paper -rotate-6 z-20">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-2 items-center">
<div className="w-8 h-8 rounded-full bg-stone-200"></div>
<div>
<p className="text-sm font-medium text-stone-800">Coding Club</p>
<p className="text-xs text-stone-500">Event Update</p>
</div>
</div>
<iconify-icon className="text-stone-400" icon="solar:pin-linear"></iconify-icon>
</div>
<p className="text-sm text-stone-600 line-clamp-3">Join us this Friday for the Hackathon prep session in Room 204. Bring your laptops!</p>
</div>
<div className="absolute right-20 bottom-10 w-56 md:w-72 bg-white p-5 rounded-3xl border border-[#E8E6DF] shadow-paper rotate-12 z-0 opacity-80">
<span className="bg-[#8B3A3A]/10 text-[#8B3A3A] text-xs font-medium px-2 py-0.5 rounded-md mb-2 inline-block">PYQ • 2024</span>
<h3 className="font-medium text-base tracking-tight mb-1">Engineering Math II</h3>
<p className="text-xs text-stone-500">Semester 2 • CSE</p>
</div>
</div>
</div>

<div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="paper-card p-8 group cursor-pointer nav-link" data-target="page-notes">
<div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl text-stone-700 group-hover:text-blue-700" icon="solar:documents-linear"></iconify-icon>
</div>
<h3 className="font-serif text-2xl font-medium tracking-tight mb-3">Notes Archive</h3>
<p className="text-sm text-stone-600">Access thousands of student-uploaded notes organized by department and semester.</p>
</div>
<div className="paper-card p-8 group cursor-pointer nav-link" data-target="page-pyq">
<div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-2xl text-stone-700 group-hover:text-[#8B3A3A]" icon="solar:history-linear"></iconify-icon>
</div>
<h3 className="font-serif text-2xl font-medium tracking-tight mb-3">Previous Papers</h3>
<p className="text-sm text-stone-600">Prepare smarter with past year question papers, sorted by subject and year.</p>
</div>
<div className="paper-card p-8 group cursor-pointer nav-link" data-target="page-community">
<div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-yellow-50 transition-colors">
<iconify-icon className="text-2xl text-stone-700 group-hover:text-yellow-700" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="font-serif text-2xl font-medium tracking-tight mb-3">Student Hub</h3>
<p className="text-sm text-stone-600">Connect with campus clubs, ask questions, and stay updated with community posts.</p>
</div>
</div>
</section>



<section className="page-section max-w-7xl mx-auto px-4 md:px-8" id="page-notes">
<div className="mb-10 text-center max-w-2xl mx-auto">
<h1 className="font-serif text-4xl font-semibold tracking-tight mb-4">Notes Library</h1>
<p className="text-sm text-stone-600">Find student-uploaded notes by subject, course, semester, and department.</p>
</div>

<div className="bg-white border border-[#E8E6DF] rounded-3xl p-4 md:p-6 shadow-sm mb-10">
<div className="paper-input flex items-center px-4 mb-4">
<iconify-icon className="text-stone-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-transparent border-none focus:outline-none py-3 px-3 text-sm text-stone-800 placeholder:text-stone-400" placeholder="Search for Data Structures, Physics..." type="text"/>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full border border-[#E8E6DF] text-xs font-medium text-stone-600 bg-stone-50 flex items-center gap-1 hover:bg-stone-100">
                        Course: B.Tech <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="px-4 py-1.5 rounded-full border border-[#E8E6DF] text-xs font-medium text-stone-600 bg-stone-50 flex items-center gap-1 hover:bg-stone-100">
                        Sem: 4 <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="px-4 py-1.5 rounded-full border border-[#E8E6DF] text-xs font-medium text-stone-600 bg-stone-50 flex items-center gap-1 hover:bg-stone-100">
                        Dept: CSE <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="px-4 py-1.5 rounded-full border border-transparent text-xs font-medium text-blue-600 ml-auto hover:underline">
                        Clear Filters
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="paper-card p-6 flex flex-col h-full">
<div className="flex justify-between items-start mb-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-medium bg-blue-50 text-blue-700 uppercase tracking-widest border border-blue-100">Notes</span>
<button className="text-stone-400 hover:text-stone-800"><iconify-icon className="text-xl" icon="solar:bookmark-linear"></iconify-icon></button>
</div>
<h3 className="font-serif text-xl font-medium tracking-tight mb-2 line-clamp-2">Database Management Systems - Complete Unit 1 to 4</h3>
<p className="text-xs text-stone-500 mb-6 flex-grow">Handwritten notes covering ER models, Relational Algebra, SQL, and Normalization.</p>
<div className="space-y-3 pt-4 border-t border-stone-100">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-[10px] text-stone-600">CSE</span>
<span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-[10px] text-stone-600">Sem 4</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-[#1A2E44] text-white flex items-center justify-center text-[10px] font-medium">A</div>
<span className="text-xs text-stone-600">Aman K.</span>
</div>
<div className="flex items-center gap-3 text-xs text-stone-400">
<span className="flex items-center gap-1"><iconify-icon icon="solar:eye-linear"></iconify-icon> 1.2k</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:download-linear"></iconify-icon> 450</span>
</div>
</div>
<div className="flex gap-2 pt-2">
<button className="flex-1 bg-white border border-[#E8E6DF] text-stone-700 py-2 rounded-xl text-xs font-medium hover:bg-stone-50 transition-colors">View</button>
<button className="flex-1 bg-[#1A2E44] text-white py-2 rounded-xl text-xs font-medium hover:bg-[#112031] transition-colors">Download</button>
</div>
</div>
</div>

<div className="paper-card p-6 flex flex-col h-full">
<div className="flex justify-between items-start mb-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-medium bg-blue-50 text-blue-700 uppercase tracking-widest border border-blue-100">Notes</span>
<button className="text-stone-400 hover:text-stone-800"><iconify-icon className="text-xl" icon="solar:bookmark-linear"></iconify-icon></button>
</div>
<h3 className="font-serif text-xl font-medium tracking-tight mb-2 line-clamp-2">Business Communication Fundamentals</h3>
<p className="text-xs text-stone-500 mb-6 flex-grow">Printed presentation slides and summarized points for mid-term prep.</p>
<div className="space-y-3 pt-4 border-t border-stone-100">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-[10px] text-stone-600">BBA</span>
<span className="px-2 py-1 bg-stone-50 border border-stone-200 rounded text-[10px] text-stone-600">Sem 2</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center text-[10px] font-medium">S</div>
<span className="text-xs text-stone-600">Sneha P.</span>
</div>
<div className="flex items-center gap-3 text-xs text-stone-400">
<span className="flex items-center gap-1"><iconify-icon icon="solar:eye-linear"></iconify-icon> 890</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:download-linear"></iconify-icon> 320</span>
</div>
</div>
<div className="flex gap-2 pt-2">
<button className="flex-1 bg-white border border-[#E8E6DF] text-stone-700 py-2 rounded-xl text-xs font-medium hover:bg-stone-50 transition-colors">View</button>
<button className="flex-1 bg-[#1A2E44] text-white py-2 rounded-xl text-xs font-medium hover:bg-[#112031] transition-colors">Download</button>
</div>
</div>
</div>

<div className="paper-card p-6 flex flex-col h-full items-center justify-center text-center bg-stone-50/50 border-dashed">
<div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center mb-4 text-stone-300">
<iconify-icon className="text-3xl" icon="solar:file-smile-linear"></iconify-icon>
</div>
<h3 className="font-medium text-stone-800 text-sm mb-1">Help the community</h3>
<p className="text-xs text-stone-500 mb-4 max-w-[200px]">Can't find what you need? Be the first to upload notes for this subject.</p>
<button className="text-[#1A2E44] text-xs font-medium border border-[#1A2E44]/20 px-4 py-2 rounded-full hover:bg-white nav-link" data-target="page-upload">Upload Note</button>
</div>
</div>
</section>



<section className="page-section max-w-7xl mx-auto px-4 md:px-8" id="page-pyq">
<div className="mb-10 text-center max-w-2xl mx-auto">
<h1 className="font-serif text-4xl font-semibold tracking-tight mb-4">Previous Year Questions</h1>
<p className="text-sm text-stone-600">Prepare smarter with organized past papers. Sort by year and subject.</p>
</div>
<div className="flex flex-col md:flex-row gap-8">

<div className="flex-1">
<div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
<button className="px-4 py-1.5 rounded-full bg-[#1A2E44] text-white text-xs font-medium flex-shrink-0">All Years</button>
<button className="px-4 py-1.5 rounded-full border border-[#E8E6DF] bg-white text-stone-600 text-xs font-medium hover:bg-stone-50 flex-shrink-0">2024</button>
<button className="px-4 py-1.5 rounded-full border border-[#E8E6DF] bg-white text-stone-600 text-xs font-medium hover:bg-stone-50 flex-shrink-0">2023</button>
<button className="px-4 py-1.5 rounded-full border border-[#E8E6DF] bg-white text-stone-600 text-xs font-medium hover:bg-stone-50 flex-shrink-0">2022</button>
</div>
<div className="space-y-4">

<div className="paper-card p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#8B3A3A]/10 border border-[#8B3A3A]/20 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#8B3A3A] text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-medium bg-stone-100 px-2 py-0.5 rounded text-stone-600 border border-stone-200">2023</span>
<span className="text-[10px] font-medium bg-stone-100 px-2 py-0.5 rounded text-stone-600 border border-stone-200">End Term</span>
</div>
<h3 className="font-medium text-base tracking-tight text-stone-900">Operating Systems</h3>
<p className="text-xs text-stone-500 mt-1">B.Tech • Sem 4 • CSE</p>
</div>
</div>
<div className="flex gap-2 sm:flex-col lg:flex-row w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-4 py-2 bg-white border border-[#E8E6DF] rounded-xl text-xs font-medium text-stone-700 hover:bg-stone-50">View</button>
<button className="flex-1 sm:flex-none px-4 py-2 bg-[#1A2E44] text-white rounded-xl text-xs font-medium hover:bg-[#112031]">Download</button>
</div>
</div>

<div className="paper-card p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#8B3A3A]/10 border border-[#8B3A3A]/20 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#8B3A3A] text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-medium bg-stone-100 px-2 py-0.5 rounded text-stone-600 border border-stone-200">2024</span>
<span className="text-[10px] font-medium bg-stone-100 px-2 py-0.5 rounded text-stone-600 border border-stone-200">Mid Term</span>
</div>
<h3 className="font-medium text-base tracking-tight text-stone-900">Managerial Economics</h3>
<p className="text-xs text-stone-500 mt-1">MBA • Sem 1 • Management</p>
</div>
</div>
<div className="flex gap-2 sm:flex-col lg:flex-row w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-4 py-2 bg-white border border-[#E8E6DF] rounded-xl text-xs font-medium text-stone-700 hover:bg-stone-50">View</button>
<button className="flex-1 sm:flex-none px-4 py-2 bg-[#1A2E44] text-white rounded-xl text-xs font-medium hover:bg-[#112031]">Download</button>
</div>
</div>
</div>
</div>

<div className="w-full md:w-72 flex-shrink-0">
<div className="bg-[#FFF4D2] border border-[#E5DBB8] rounded-2xl p-5 shadow-sm relative overflow-hidden">
<div className="absolute -right-4 -top-4 text-[#E5DBB8] opacity-50">
<iconify-icon className="text-6xl" icon="solar:lightbulb-bold"></iconify-icon>
</div>
<h4 className="font-serif font-medium text-lg mb-2 relative z-10 text-stone-800">Exam Prep Tip</h4>
<p className="text-xs text-stone-700 leading-relaxed relative z-10">Start by reviewing the last 3 years of papers before diving deep into syllabus units. It highlights the most frequently tested concepts.</p>
</div>
</div>
</div>
</section>



<section className="page-section max-w-7xl mx-auto px-4 md:px-8" id="page-syllabus">
<div className="mb-10 text-center max-w-2xl mx-auto">
<h1 className="font-serif text-4xl font-semibold tracking-tight mb-4">Official Syllabus</h1>
<p className="text-sm text-stone-600">Find the latest syllabus structures organized like a proper academic archive.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-12">

<div className="relative pt-4 group">
<div className="absolute top-0 left-4 bg-stone-200 h-6 w-32 rounded-t-lg folder-tab flex items-center px-4 text-[10px] font-medium text-stone-600 z-0">School of Engg</div>
<div className="paper-card p-6 relative z-10 bg-white group-hover:-translate-y-1 transition-transform">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-serif text-2xl font-medium tracking-tight mb-1">B.Tech CSE</h3>
<p className="text-xs text-stone-500">Updated: Aug 2024</p>
</div>
<div className="w-10 h-10 bg-stone-50 border border-stone-200 rounded-full flex items-center justify-center text-stone-400">
<iconify-icon className="text-xl" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center justify-between p-3 bg-stone-50 border border-stone-100 rounded-xl">
<span className="text-sm font-medium text-stone-700">Semester 1 &amp; 2 (First Year)</span>
<button className="text-[#1A2E44] text-xs font-medium hover:underline">Download PDF</button>
</div>
<div className="flex items-center justify-between p-3 bg-stone-50 border border-stone-100 rounded-xl">
<span className="text-sm font-medium text-stone-700">Semester 3 &amp; 4 (Second Year)</span>
<button className="text-[#1A2E44] text-xs font-medium hover:underline">Download PDF</button>
</div>
<div className="flex items-center justify-between p-3 bg-stone-50 border border-stone-100 rounded-xl">
<span className="text-sm font-medium text-stone-700">Semester 5 &amp; 6 (Third Year)</span>
<button className="text-[#1A2E44] text-xs font-medium hover:underline">Download PDF</button>
</div>
</div>
</div>
</div>

<div className="relative pt-4 group">
<div className="absolute top-0 left-4 bg-stone-200 h-6 w-36 rounded-t-lg folder-tab flex items-center px-4 text-[10px] font-medium text-stone-600 z-0">School of Business</div>
<div className="paper-card p-6 relative z-10 bg-white group-hover:-translate-y-1 transition-transform">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-serif text-2xl font-medium tracking-tight mb-1">MBA General</h3>
<p className="text-xs text-stone-500">Updated: July 2024</p>
</div>
<div className="w-10 h-10 bg-stone-50 border border-stone-200 rounded-full flex items-center justify-center text-stone-400">
<iconify-icon className="text-xl" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center justify-between p-3 bg-stone-50 border border-stone-100 rounded-xl">
<span className="text-sm font-medium text-stone-700">Core Subjects (Sem 1-2)</span>
<button className="text-[#1A2E44] text-xs font-medium hover:underline">Download PDF</button>
</div>
<div className="flex items-center justify-between p-3 bg-stone-50 border border-stone-100 rounded-xl">
<span className="text-sm font-medium text-stone-700">Specializations (Sem 3-4)</span>
<button className="text-[#1A2E44] text-xs font-medium hover:underline">Download PDF</button>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="page-section max-w-7xl mx-auto px-4 md:px-8" id="page-upload">
<div className="mb-8">
<h1 className="font-serif text-3xl font-semibold tracking-tight mb-2">Upload Resource</h1>
<p className="text-sm text-stone-600">Share your notes, documents, or past papers to help fellow students.</p>
</div>
<div className="flex flex-col lg:flex-row gap-8">

<div className="w-full lg:w-2/3 paper-card p-6 md:p-8">
<form className="space-y-6">

<div className="dashed-upload p-10 flex flex-col items-center justify-center text-center bg-stone-50/50 hover:bg-stone-50 transition-colors cursor-pointer">
<div className="w-14 h-14 bg-white rounded-full shadow-sm border border-stone-100 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-[#1A2E44]" icon="solar:upload-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-stone-800 mb-1">Drag and drop your file here</p>
<p className="text-xs text-stone-500 mb-4">PDF, DOCX, PPT, or Images up to 50MB</p>
<button className="bg-white border border-[#E8E6DF] px-5 py-2 rounded-full text-xs font-medium text-stone-700 hover:bg-stone-100 shadow-sm" type="button">Choose File</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-700 ml-1">Resource Title</label>
<div className="paper-input">
<input className="w-full bg-transparent border-none focus:outline-none py-2.5 px-4 text-sm text-stone-800 placeholder:text-stone-400" placeholder="e.g. Unit 1 Physics Notes" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-700 ml-1">Resource Type</label>
<div className="paper-input flex items-center pr-3">
<select className="w-full bg-transparent border-none focus:outline-none py-2.5 px-4 text-sm text-stone-800 appearance-none cursor-pointer">
<option>Select Type</option>
<option>Notes</option>
<option>PYQ</option>
<option>Syllabus</option>
</select>
<iconify-icon className="text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5 md:col-span-2">
<label className="text-xs font-medium text-stone-700 ml-1">Subject / Course Details</label>
<div className="flex gap-2">
<div className="paper-input flex-1 flex items-center pr-3">
<select className="w-full bg-transparent border-none focus:outline-none py-2.5 px-4 text-sm text-stone-800 appearance-none cursor-pointer">
<option>Department</option>
</select>
<iconify-icon className="text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="paper-input w-24 flex items-center pr-3">
<select className="w-full bg-transparent border-none focus:outline-none py-2.5 px-4 text-sm text-stone-800 appearance-none cursor-pointer">
<option>Sem</option>
</select>
<iconify-icon className="text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="pt-4 flex justify-end gap-3 border-t border-stone-100">
<button className="px-6 py-2.5 rounded-full text-sm font-medium text-stone-600 hover:bg-stone-100 transition-colors" type="button">Cancel</button>
<button className="bg-[#1A2E44] text-white px-8 py-2.5 rounded-full text-sm font-medium hover:bg-[#112031] transition-colors shadow-sm flex items-center gap-2" type="button">
                                Submit Resource
                            </button>
</div>
</form>
</div>

<div className="w-full lg:w-1/3 flex flex-col gap-6">
<div className="paper-card p-6 bg-[#F8F7F4] border-dashed border-2">
<h3 className="font-serif text-lg font-medium tracking-tight mb-4 flex items-center gap-2">
<iconify-icon className="text-stone-500" icon="solar:info-circle-linear"></iconify-icon>
                            Before you upload
                        </h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-xs text-stone-600">
<iconify-icon className="text-green-600 mt-0.5 text-sm" icon="solar:check-circle-linear"></iconify-icon>
                                Upload clear, readable, and scanned files.
                            </li>
<li className="flex items-start gap-2 text-xs text-stone-600">
<iconify-icon className="text-green-600 mt-0.5 text-sm" icon="solar:check-circle-linear"></iconify-icon>
                                Add accurate subject and semester tags.
                            </li>
<li className="flex items-start gap-2 text-xs text-stone-600">
<iconify-icon className="text-red-500 mt-0.5 text-sm" icon="solar:close-circle-linear"></iconify-icon>
                                Do not upload copyrighted paid textbooks.
                            </li>
<li className="flex items-start gap-2 text-xs text-stone-600">
<iconify-icon className="text-red-500 mt-0.5 text-sm" icon="solar:close-circle-linear"></iconify-icon>
                                Avoid blurry images or duplicate uploads.
                            </li>
</ul>
</div>
</div>
</div>
</section>



<section className="page-section max-w-7xl mx-auto px-4 md:px-8" id="page-community">
<div className="flex flex-col lg:flex-row gap-8">

<div className="w-full lg:w-2/3">
<div className="mb-6">
<h1 className="font-serif text-3xl font-semibold tracking-tight mb-1">Student Notice Board</h1>
<p className="text-sm text-stone-600">Campus discussions, club updates, and announcements.</p>
</div>

<div className="paper-card p-5 mb-8 bg-white border-2 border-[#E8E6DF]">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-200 flex-shrink-0 flex items-center justify-center text-sm font-medium text-stone-600">You</div>
<div className="flex-grow">
<textarea className="w-full bg-transparent border-none focus:outline-none resize-none text-sm text-stone-800 placeholder:text-stone-400 h-16" placeholder="Share an update, event, or question with the campus..."></textarea>
<div className="flex items-center justify-between pt-3 border-t border-stone-100">
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-[#E8E6DF] flex items-center justify-center text-stone-500 hover:bg-stone-50 hover:text-[#1A2E44] transition-colors"><iconify-icon icon="solar:gallery-linear"></iconify-icon></button>
<button className="w-8 h-8 rounded-full border border-[#E8E6DF] flex items-center justify-center text-stone-500 hover:bg-stone-50 hover:text-[#1A2E44] transition-colors"><iconify-icon icon="solar:paperclip-linear"></iconify-icon></button>
</div>
<div className="flex items-center gap-3">
<select className="text-xs bg-transparent text-stone-500 focus:outline-none cursor-pointer">
<option>Post as Student</option>
<option>Post as Club</option>
</select>
<button className="bg-[#1A2E44] text-white px-5 py-1.5 rounded-full text-xs font-medium hover:bg-[#112031] transition-colors shadow-sm">Post</button>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="paper-card p-6">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1A2E44] flex-shrink-0 flex items-center justify-center text-white"><iconify-icon icon="solar:code-linear"></iconify-icon></div>
<div>
<div className="flex items-center gap-2">
<h4 className="text-sm font-medium text-stone-900">Tech Innovation Club</h4>
<span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 text-[9px] font-medium uppercase tracking-wide">Club</span>
</div>
<p className="text-[11px] text-stone-500">2 hours ago</p>
</div>
</div>
<button className="text-stone-400 hover:text-stone-800"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</div>
<h3 className="font-serif text-lg font-medium tracking-tight mb-2 text-stone-900">Registrations open for Annual Hackathon 2024! 🚀</h3>
<p className="text-sm text-stone-600 mb-4 leading-relaxed">Gather your teams! The biggest coding event of the year is here. 48 hours of building, free food, and huge prizes. Link in bio to register. Open for all years.</p>
<div className="h-48 w-full bg-stone-100 rounded-xl mb-4 border border-stone-200 flex items-center justify-center text-stone-400">
                                [ Event Poster Image Placeholder ]
                            </div>
<div className="flex items-center gap-4 pt-3 border-t border-stone-100">
<button className="flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-[#1A2E44] transition-colors"><iconify-icon className="text-base" icon="solar:heart-linear"></iconify-icon> 124</button>
<button className="flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-[#1A2E44] transition-colors"><iconify-icon className="text-base" icon="solar:chat-round-line-linear"></iconify-icon> 18</button>
<button className="flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-[#1A2E44] transition-colors ml-auto"><iconify-icon className="text-base" icon="solar:share-linear"></iconify-icon> Share</button>
</div>
</div>

<div className="paper-card p-6">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 flex-shrink-0 flex items-center justify-center text-stone-600 font-medium">R</div>
<div>
<div className="flex items-center gap-2">
<h4 className="text-sm font-medium text-stone-900">Rahul Verma</h4>
<span className="px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200 text-[9px] font-medium uppercase tracking-wide">Student</span>
</div>
<p className="text-[11px] text-stone-500">5 hours ago</p>
</div>
</div>
</div>
<p className="text-sm text-stone-600 mb-4 leading-relaxed">Does anyone have the assignment questions given by Sharma Sir for DBMS today? I missed the last class.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] text-stone-500 bg-stone-50 border border-stone-200 px-2 py-1 rounded">#DBMS</span>
<span className="text-[10px] text-stone-500 bg-stone-50 border border-stone-200 px-2 py-1 rounded">#CSE_Sem4</span>
</div>
<div className="flex items-center gap-4 pt-3 border-t border-stone-100">
<button className="flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-[#1A2E44] transition-colors"><iconify-icon className="text-base" icon="solar:heart-linear"></iconify-icon> 5</button>
<button className="flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-[#1A2E44] transition-colors"><iconify-icon className="text-base" icon="solar:chat-round-line-linear"></iconify-icon> 2</button>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/3 space-y-6">
<div className="paper-card p-5">
<h4 className="font-serif text-base font-medium mb-4 flex items-center gap-2 text-stone-900">
<iconify-icon className="text-orange-500" icon="solar:fire-linear"></iconify-icon> Trending Tags
                        </h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600 hover:bg-stone-100 cursor-pointer">#MidTermsPrep</span>
<span className="px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600 hover:bg-stone-100 cursor-pointer">#Hackathon2024</span>
<span className="px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600 hover:bg-stone-100 cursor-pointer">#PlacementDrive</span>
<span className="px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600 hover:bg-stone-100 cursor-pointer">#FestUpdates</span>
</div>
</div>
<div className="paper-card p-5">
<h4 className="font-serif text-base font-medium mb-4 text-stone-900">Upcoming Events</h4>
<div className="space-y-4">
<div className="flex gap-3">
<div className="w-10 h-10 rounded bg-red-50 border border-red-100 flex flex-col items-center justify-center flex-shrink-0 text-[#8B3A3A]">
<span className="text-[10px] font-medium uppercase">Oct</span>
<span className="text-sm font-bold leading-none">12</span>
</div>
<div>
<p className="text-xs font-medium text-stone-800 line-clamp-1">Resume Building Workshop</p>
<p className="text-[10px] text-stone-500 mt-0.5">Placement Cell • Block 3</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-10 h-10 rounded bg-blue-50 border border-blue-100 flex flex-col items-center justify-center flex-shrink-0 text-blue-700">
<span className="text-[10px] font-medium uppercase">Oct</span>
<span className="text-sm font-bold leading-none">15</span>
</div>
<div>
<p className="text-xs font-medium text-stone-800 line-clamp-1">UI/UX Design Sprint</p>
<p className="text-[10px] text-stone-500 mt-0.5">Design Club • Online</p>
</div>
</div>
</div>
<button className="w-full mt-4 py-2 border border-[#E8E6DF] rounded-xl text-xs font-medium text-stone-600 hover:bg-stone-50 transition-colors">View All Calendar</button>
</div>
</div>
</div>
</section>



<section className="page-section max-w-7xl mx-auto px-4 md:px-8" id="page-clubs">
<div className="mb-10 text-center max-w-2xl mx-auto">
<h1 className="font-serif text-4xl font-semibold tracking-tight mb-4">Clubs &amp; Communities</h1>
<p className="text-sm text-stone-600">Discover student groups, academic communities, and campus clubs. Join to learn and grow.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="paper-card p-6 flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-2xl bg-stone-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 border border-stone-200">
<iconify-icon className="text-3xl text-stone-700" icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="font-serif text-lg font-medium tracking-tight mb-1">Coding Club</h3>
<span className="text-[10px] font-medium bg-stone-50 px-2 py-0.5 rounded text-stone-500 border border-stone-200 mb-3">Technical</span>
<p className="text-xs text-stone-500 mb-5 flex-grow">A community of developers building open-source projects and hosting hackathons.</p>
<div className="w-full pt-4 border-t border-stone-100 flex items-center justify-between">
<span className="text-[11px] text-stone-400">1.2k Members</span>
<button className="text-xs font-medium text-[#1A2E44] bg-[#1A2E44]/5 px-4 py-1.5 rounded-full hover:bg-[#1A2E44]/10 transition-colors">Join</button>
</div>
</div>

<div className="paper-card p-6 flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-2xl bg-stone-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 border border-stone-200">
<iconify-icon className="text-3xl text-stone-700" icon="solar:pen-new-round-linear"></iconify-icon>
</div>
<h3 className="font-serif text-lg font-medium tracking-tight mb-1">Design Community</h3>
<span className="text-[10px] font-medium bg-stone-50 px-2 py-0.5 rounded text-stone-500 border border-stone-200 mb-3">Creative</span>
<p className="text-xs text-stone-500 mb-5 flex-grow">For UI/UX enthusiasts, graphic designers, and creative thinkers of Sharda.</p>
<div className="w-full pt-4 border-t border-stone-100 flex items-center justify-between">
<span className="text-[11px] text-stone-400">850 Members</span>
<button className="text-xs font-medium text-[#1A2E44] bg-[#1A2E44]/5 px-4 py-1.5 rounded-full hover:bg-[#1A2E44]/10 transition-colors">Join</button>
</div>
</div>

<div className="paper-card p-6 flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-2xl bg-stone-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 border border-stone-200">
<iconify-icon className="text-3xl text-stone-700" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="font-serif text-lg font-medium tracking-tight mb-1">E-Cell</h3>
<span className="text-[10px] font-medium bg-stone-50 px-2 py-0.5 rounded text-stone-500 border border-stone-200 mb-3">Business</span>
<p className="text-xs text-stone-500 mb-5 flex-grow">Entrepreneurship cell promoting startup culture and business networking.</p>
<div className="w-full pt-4 border-t border-stone-100 flex items-center justify-between">
<span className="text-[11px] text-stone-400">600 Members</span>
<button className="text-xs font-medium text-[#1A2E44] bg-[#1A2E44]/5 px-4 py-1.5 rounded-full hover:bg-[#1A2E44]/10 transition-colors">Join</button>
</div>
</div>

<div className="paper-card p-6 flex flex-col items-center justify-center text-center bg-stone-50/50 border-dashed cursor-pointer hover:bg-stone-50 transition-colors">
<div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center mb-3 text-stone-400">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</div>
<h3 className="font-medium text-sm text-stone-800 mb-1">Register New Club</h3>
<p className="text-[11px] text-stone-500">Official club representatives can register here.</p>
</div>
</div>
</section>



<section className="page-section max-w-7xl mx-auto px-4 md:px-8" id="page-dashboard">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<h1 className="font-serif text-3xl font-semibold tracking-tight mb-1">Welcome back, Student</h1>
<p className="text-sm text-stone-600">Continue learning, sharing, and connecting.</p>
</div>
<div className="w-full md:w-64 paper-input flex items-center px-3">
<iconify-icon className="text-stone-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-transparent border-none focus:outline-none py-2 px-2 text-xs text-stone-800 placeholder:text-stone-400" placeholder="Quick search..." type="text"/>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="paper-card p-5">
<p className="text-[11px] font-medium text-stone-500 uppercase tracking-wide mb-1">Saved Resources</p>
<p className="font-serif text-3xl font-semibold text-stone-900">12</p>
</div>
<div className="paper-card p-5">
<p className="text-[11px] font-medium text-stone-500 uppercase tracking-wide mb-1">Notes Viewed</p>
<p className="font-serif text-3xl font-semibold text-stone-900">45</p>
</div>
<div className="paper-card p-5 bg-[#1A2E44] text-white border-none">
<p className="text-[11px] font-medium text-blue-200 uppercase tracking-wide mb-1">My Uploads</p>
<p className="font-serif text-3xl font-semibold">3</p>
</div>
<div className="paper-card p-5">
<p className="text-[11px] font-medium text-stone-500 uppercase tracking-wide mb-1">Community Rank</p>
<p className="font-serif text-3xl font-semibold text-[#8B3A3A]">Novice</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-8">

<div>
<div className="flex items-center justify-between mb-4">
<h2 className="font-serif text-xl font-medium tracking-tight">Recently Viewed</h2>
<button className="text-xs font-medium text-stone-500 hover:text-stone-900">View All</button>
</div>
<div className="space-y-3">
<div className="paper-card p-4 flex items-center justify-between bg-white/60">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-500"><iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-stone-900 line-clamp-1">Data Structures Unit 3 Notes</h4>
<p className="text-[10px] text-stone-500 mt-0.5">Viewed 2 days ago • PDF</p>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
<div className="paper-card p-4 flex items-center justify-between bg-white/60">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-500"><iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-stone-900 line-clamp-1">2023 Engg Mathematics PYQ</h4>
<p className="text-[10px] text-stone-500 mt-0.5">Viewed 3 days ago • PDF</p>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="paper-card p-5">
<h2 className="font-serif text-lg font-medium tracking-tight mb-4">Quick Actions</h2>
<div className="space-y-2">
<button className="w-full flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-[#E8E6DF] hover:bg-white text-sm font-medium text-stone-700 transition-all nav-link" data-target="page-upload">
<div className="w-8 h-8 rounded-full bg-[#1A2E44]/10 text-[#1A2E44] flex items-center justify-center"><iconify-icon icon="solar:upload-linear"></iconify-icon></div>
                                Upload a Resource
                            </button>
<button className="w-full flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-[#E8E6DF] hover:bg-white text-sm font-medium text-stone-700 transition-all nav-link" data-target="page-community">
<div className="w-8 h-8 rounded-full bg-[#8B3A3A]/10 text-[#8B3A3A] flex items-center justify-center"><iconify-icon icon="solar:pen-new-round-linear"></iconify-icon></div>
                                Create Community Post
                            </button>
<button className="w-full flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-[#E8E6DF] hover:bg-white text-sm font-medium text-stone-700 transition-all nav-link" data-target="page-syllabus">
<div className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center"><iconify-icon icon="solar:folder-with-files-linear"></iconify-icon></div>
                                Browse Syllabus
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-[#E8E6DF] mt-auto">
<div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-xl text-[#1A2E44]" icon="solar:book-bookmark-linear"></iconify-icon>
<span className="font-serif font-semibold tracking-tighter text-lg text-[#1A2E44] uppercase">SOL</span>
</div>
<p className="text-sm text-stone-500 max-w-sm leading-relaxed mb-6">A student-first academic hub for Sharda University. Find notes, past papers, and connect with your campus community in one organized place.</p>
</div>
<div>
<h4 className="font-medium text-sm text-stone-900 mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><button className="hover:text-stone-900 nav-link" data-target="page-notes">Notes Library</button></li>
<li><button className="hover:text-stone-900 nav-link" data-target="page-pyq">Previous Papers (PYQs)</button></li>
<li><button className="hover:text-stone-900 nav-link" data-target="page-syllabus">Official Syllabus</button></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-stone-900 mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><button className="hover:text-stone-900 nav-link" data-target="page-community">Community Hub</button></li>
<li><button className="hover:text-stone-900 nav-link" data-target="page-clubs">Clubs &amp; Groups</button></li>
<li><button className="hover:text-stone-900 nav-link" data-target="page-upload">Upload Content</button></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[11px] text-stone-400">© 2024 Sharda Online Library. For students, by students.</p>
<div className="flex items-center gap-4 text-stone-400">
<a className="hover:text-stone-900" href="#"><iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon></a>
<a className="hover:text-stone-900" href="#"><iconify-icon className="text-lg" icon="solar:info-circle-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
