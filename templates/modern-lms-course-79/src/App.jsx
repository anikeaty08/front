import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- 1. View Toggling (Student vs Editor) ---
            const modeToggle = document.getElementById('mode-toggle');
            const studentView = document.getElementById('student-view');
            const editorView = document.getElementById('editor-view');
            const editorSidebarControls = document.querySelectorAll('.editor-control');
            const studentSidebarControls = document.querySelectorAll('.student-control');

            modeToggle.addEventListener('click', () => {
                const isEdit = modeToggle.dataset.mode === 'edit';
                
                if (isEdit) {
                    // Switch to Student Mode
                    modeToggle.dataset.mode = 'student';
                    modeToggle.innerHTML = '<iconify-icon icon="solar:pen-linear" width="16"></iconify-icon><span class="hidden sm:inline">Edit Course</span>';
                    modeToggle.classList.replace('bg-slate-900', 'bg-slate-50');
                    modeToggle.classList.replace('text-white', 'text-slate-700');
                    modeToggle.classList.replace('border-slate-900', 'border-slate-200');
                    
                    studentView.classList.remove('hidden');
                    editorView.classList.add('hidden');
                    
                    editorSidebarControls.forEach(el => el.classList.add('hidden'));
                    studentSidebarControls.forEach(el => el.classList.remove('hidden'));
                } else {
                    // Switch to Edit Mode
                    modeToggle.dataset.mode = 'edit';
                    modeToggle.innerHTML = '<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon><span class="hidden sm:inline">Preview Course</span>';
                    modeToggle.classList.replace('bg-slate-50', 'bg-slate-900');
                    modeToggle.classList.replace('text-slate-700', 'text-white');
                    modeToggle.classList.replace('border-slate-200', 'border-slate-900');
                    
                    studentView.classList.add('hidden');
                    editorView.classList.remove('hidden');
                    
                    editorSidebarControls.forEach(el => el.classList.remove('hidden'));
                    studentSidebarControls.forEach(el => el.classList.add('hidden'));
                }
            });

            // --- 2. Module Collapsing ---
            const moduleBtns = document.querySelectorAll('.module-btn');
            moduleBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const content = btn.nextElementSibling;
                    const icon = btn.querySelector('.chevron-icon');
                    
                    if (content.classList.contains('hidden')) {
                        content.classList.remove('hidden');
                        icon.setAttribute('icon', 'solar:alt-arrow-down-linear');
                    } else {
                        content.classList.add('hidden');
                        icon.setAttribute('icon', 'solar:alt-arrow-right-linear');
                    }
                });
            });

            // --- 3. Lesson Navigation State ---
            const lessonLinks = document.querySelectorAll('.lesson-link');
            lessonLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Reset all
                    lessonLinks.forEach(l => {
                        l.classList.remove('bg-white', 'shadow-sm', 'ring-1', 'ring-slate-200/60');
                        l.classList.add('hover:bg-slate-200/50');
                        const indicator = l.querySelector('.active-indicator');
                        if(indicator) indicator.classList.add('hidden');
                    });
                    
                    // Activate clicked
                    link.classList.add('bg-white', 'shadow-sm', 'ring-1', 'ring-slate-200/60');
                    link.classList.remove('hover:bg-slate-200/50');
                    const indicator = link.querySelector('.active-indicator');
                    if(indicator) indicator.classList.remove('hidden');
                });
            });

            // --- 4. Editor Tabs Switching ---
            const tabBtns = document.querySelectorAll('.editor-tab-btn');
            const tabContents = document.querySelectorAll('.editor-tab-content');
            
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update buttons
                    tabBtns.forEach(b => {
                        b.classList.remove('border-slate-900', 'text-slate-900');
                        b.classList.add('border-transparent', 'text-slate-500');
                    });
                    btn.classList.remove('border-transparent', 'text-slate-500');
                    btn.classList.add('border-slate-900', 'text-slate-900');

                    // Update content visibility
                    const targetId = btn.getAttribute('data-target');
                    tabContents.forEach(tc => tc.classList.add('hidden'));
                    document.getElementById(targetId).classList.remove('hidden');
                });
            });

        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-4 lg:px-6 shrink-0 z-20">

<div className="flex items-center gap-4 lg:gap-6">
<button className="text-slate-500 hover:text-slate-900 transition-colors focus:outline-none lg:hidden">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
<a className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors group" href="#">
<iconify-icon className="group-hover:-translate-x-0.5 transition-transform" icon="solar:alt-arrow-left-linear" width="18"></iconify-icon>
</a>
<div className="hidden lg:block w-px h-6 bg-slate-200"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-0.5">Course</span>
<h1 className="text-sm font-semibold text-slate-900 truncate max-w-[200px] md:max-w-md">Introduction to Programming</h1>
</div>
</div>

<div className="flex items-center gap-4 lg:gap-6">

<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-slate-900/10 active:scale-[0.98]" data-mode="student" id="mode-toggle">
<iconify-icon icon="solar:pen-linear" width="16"></iconify-icon>
<span className="hidden sm:inline">Edit Course</span>
</button>

<div className="hidden md:flex items-center gap-3 student-control">
<span className="text-sm font-medium text-slate-600">8%</span>
<div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-900 rounded-full w-[8%] relative">
<div className="absolute inset-0 bg-white/20"></div>
</div>
</div>
</div>
<div className="w-px h-6 bg-slate-200 hidden md:block"></div>
<button className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-semibold text-slate-600 hover:bg-slate-200 transition-colors shrink-0">
                JD
            </button>
</div>
</header>

<main className="flex-1 flex overflow-hidden bg-white relative">

<aside className="w-80 border-r border-slate-200 bg-[#FAFAFA] flex-col shrink-0 hidden lg:flex relative z-10">
<div className="p-4 border-b border-slate-200 bg-white/50 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between">
<h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Curriculum</h2>

<button className="editor-control hidden text-slate-400 hover:text-slate-900 transition-colors p-1 rounded hover:bg-slate-200" title="Add Module">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-3 space-y-4">

<div className="space-y-1 group/module">
<button className="module-btn w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-200/50 transition-colors group">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-5 h-5 rounded border border-slate-300 bg-white text-xs font-medium text-slate-600 shadow-sm">1</span>
<span className="text-sm font-semibold text-slate-900">New API Module</span>
</div>
<iconify-icon className="chevron-icon text-slate-400 group-hover:text-slate-600" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
<div className="module-content pl-3.5 relative transition-all">
<div className="absolute left-[21px] top-0 bottom-4 w-px bg-slate-200"></div>
<div className="space-y-0.5 pt-1 pl-6">

<a className="lesson-link flex items-start gap-3 p-2.5 rounded-lg bg-white shadow-sm ring-1 ring-slate-200/60 relative group transition-colors" href="#">
<div className="active-indicator absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-slate-900 rounded-r-full"></div>
<iconify-icon className="text-slate-900 mt-0.5 shrink-0" icon="solar:play-circle-linear" width="16"></iconify-icon>
<div className="flex flex-col flex-1 min-w-0">
<span className="text-sm font-semibold text-slate-900 truncate">1.1 Test Lesson One</span>
<span className="text-xs text-slate-500 mt-0.5">12 min video</span>
</div>

<div className="editor-control hidden opacity-0 group-hover:opacity-100 text-slate-400 shrink-0 self-center hover:text-slate-600 cursor-grab">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</div>
</a>

<a className="lesson-link flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-200/50 transition-colors group relative" href="#">
<div className="active-indicator hidden absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-slate-900 rounded-r-full"></div>
<iconify-icon className="text-slate-400 group-hover:text-slate-600 mt-0.5 shrink-0" icon="solar:document-text-linear" width="16"></iconify-icon>
<div className="flex flex-col flex-1 min-w-0">
<span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors truncate">1.2 Understanding Syntax</span>
<span className="text-xs text-slate-400 group-hover:text-slate-500 mt-0.5">Reading</span>
</div>
<div className="editor-control hidden opacity-0 group-hover:opacity-100 text-slate-400 shrink-0 self-center hover:text-slate-600 cursor-grab">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</div>
</a>

<button className="editor-control hidden w-full flex items-center gap-2 p-2 mt-1 rounded-lg text-slate-400 hover:bg-slate-200/50 hover:text-slate-600 transition-colors group">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
<span className="text-sm font-medium">Add Lesson</span>
</button>
</div>
</div>
</div>

<div className="space-y-1 group/module">
<button className="module-btn w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-200/50 transition-colors group">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-5 h-5 rounded border border-slate-200 bg-white text-xs font-medium text-slate-500 shadow-sm group-hover:border-slate-300 transition-colors">2</span>
<span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Test Module 1</span>
</div>
<iconify-icon className="chevron-icon text-slate-400 group-hover:text-slate-600" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>

<div className="module-content pl-3.5 relative transition-all hidden">
<div className="absolute left-[21px] top-0 bottom-4 w-px bg-slate-200"></div>
<div className="space-y-0.5 pt-1 pl-6">
<a className="lesson-link flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-200/50 transition-colors group relative" href="#">
<div className="active-indicator hidden absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-slate-900 rounded-r-full"></div>
<iconify-icon className="text-slate-400 group-hover:text-slate-600 mt-0.5 shrink-0" icon="solar:play-circle-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">2.1 Advanced Concepts</span>
<span className="text-xs text-slate-400 group-hover:text-slate-500 mt-0.5">8 min video</span>
</div>
</a>
<button className="editor-control hidden w-full flex items-center gap-2 p-2 mt-1 rounded-lg text-slate-400 hover:bg-slate-200/50 hover:text-slate-600 transition-colors group">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
<span className="text-sm font-medium">Add Lesson</span>
</button>
</div>
</div>
</div>

<div className="space-y-1">
<button className="module-btn w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-200/50 transition-colors group opacity-75 hover:opacity-100">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-900 text-white shadow-sm">
<iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon>
</span>
<span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors line-through decoration-slate-300">Prerequisites</span>
</div>
<iconify-icon className="chevron-icon text-slate-400 group-hover:text-slate-600" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
<div className="module-content pl-3.5 relative transition-all hidden">

</div>
</div>
</div>
</aside>

<section className="flex-1 flex flex-col min-w-0 bg-white relative" id="student-view">
<div className="flex-1 overflow-y-auto scroll-smooth pb-24">
<div className="max-w-4xl mx-auto px-6 py-8 md:px-10 md:py-12">

<div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-4 sm:gap-6 mb-8">
<div>
<div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
<span className="hover:text-slate-800 cursor-pointer transition-colors">Module 1</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="font-medium text-slate-900">Lesson 1.1</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Test Lesson One</h2>
<p className="text-base text-slate-600 mt-3 max-w-2xl leading-relaxed">
                                This is a test lesson one. Here we introduce the core concepts that will form the foundation of your programming journey.
                            </p>
</div>
<button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-900/10 active:scale-[0.98] shrink-0">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Mark as completed
                        </button>
</div>

<div className="w-full aspect-video bg-slate-900 rounded-xl overflow-hidden relative shadow-lg ring-1 ring-slate-900/10 group cursor-pointer mb-12">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-slate-900 to-slate-900 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
<iconify-icon className="ml-1 text-white" icon="solar:play-bold" width="28"></iconify-icon>
</div>

<div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-start">
<span className="text-white text-base font-medium drop-shadow-md">Intro To Programming</span>
<button className="text-white/80 hover:text-white p-2 backdrop-blur-sm rounded-md bg-black/20 hover:bg-black/40 transition-colors">
<iconify-icon icon="solar:menu-dots-circle-linear" width="18"></iconify-icon>
</button>
</div>

<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-full h-1 bg-white/30 rounded-full mb-4 cursor-pointer relative">
<div className="absolute left-0 top-0 h-full w-1/3 bg-white rounded-full"></div>
<div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-sm scale-0 group-hover:scale-100 transition-transform"></div>
</div>
<div className="flex items-center justify-between text-white/90">
<div className="flex items-center gap-4">
<button className="hover:text-white transition-colors">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</button>
<div className="flex items-center gap-2 text-sm font-medium tracking-wide">
<span>04:20</span><span className="text-white/50">/</span><span className="text-white/50">12:00</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hover:text-white transition-colors">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
</button>
<button className="hover:text-white transition-colors">
<iconify-icon icon="solar:full-screen-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="border-b border-slate-200">
<nav className="-mb-px flex space-x-8">
<a className="border-slate-900 text-slate-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">
                                Overview
                            </a>
<a className="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors" href="#">
                                Transcript
                            </a>
<a className="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center gap-2" href="#">
                                Resources
                                <span className="bg-slate-100 text-slate-600 py-0.5 px-2 rounded-full text-xs">2</span>
</a>
</nav>
</div>
<div className="py-8 prose prose-slate max-w-none">
<p className="text-base text-slate-600 leading-relaxed mb-4">
                            In this lesson, we will cover the fundamental building blocks of modern application development. Ensure you watch the video in its entirety before proceeding to the practical exercises.
                        </p>
<h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4 tracking-tight">Key Takeaways</h3>
<ul className="space-y-2 mb-8">
<li className="flex items-start gap-3 text-base text-slate-600">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                Understanding the core environment setup.
                            </li>
<li className="flex items-start gap-3 text-base text-slate-600">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                Basic syntax and logical structures.
                            </li>
</ul>
</div>
</div>
</div>

<footer className="absolute bottom-0 left-0 right-0 border-t border-slate-200 bg-white/80 backdrop-blur-md p-4 sm:p-6 z-20">
<div className="max-w-4xl mx-auto flex items-center justify-between">
<button className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors px-2 py-2 rounded-lg hover:bg-slate-50">
<iconify-icon icon="solar:alt-arrow-left-linear" width="16"></iconify-icon>
<span className="hidden sm:inline">Previous Lesson</span>
<span className="sm:hidden">Prev</span>
</button>
<button className="flex items-center gap-2 text-sm font-medium bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-slate-800 shadow-sm transition-all active:scale-[0.98]">
<span>Next Lesson</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</footer>
</section>

<section className="flex-1 flex flex-col min-w-0 bg-[#FAFAFA] relative hidden" id="editor-view">
<div className="flex-1 overflow-y-auto scroll-smooth">
<div className="max-w-4xl mx-auto px-6 py-8 md:px-10 md:py-12">

<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
<div className="w-full flex-1">
<div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
<span className="hover:text-slate-800 cursor-pointer transition-colors">Module 1</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<input className="font-medium text-slate-900 bg-transparent border-0 p-0 focus:ring-0 focus:outline-none w-24 text-sm placeholder:text-slate-300" type="text" value="Lesson 1.1"/>
</div>
<input className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 bg-transparent border-0 p-0 focus:ring-0 focus:outline-none w-full placeholder:text-slate-300" type="text" value="Test Lesson One"/>
</div>
<div className="flex items-center gap-3 shrink-0">
<button className="px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-900/10 active:scale-[0.98]">
                                Save Draft
                            </button>
<button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-sm font-medium text-white hover:bg-slate-800 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-900/10 active:scale-[0.98]">
<iconify-icon icon="solar:cloud-upload-linear" width="16"></iconify-icon>
                                Publish
                            </button>
</div>
</div>

<div className="border-b border-slate-200 mb-8">
<nav className="-mb-px flex space-x-8">
<button className="editor-tab-btn border-slate-900 text-slate-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors" data-target="edit-content">
                                Content &amp; Video
                            </button>
<button className="editor-tab-btn border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors" data-target="edit-resources">
                                Attached Resources
                            </button>
<button className="editor-tab-btn border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors" data-target="edit-settings">
                                Settings
                            </button>
</nav>
</div>

<div className="editor-tab-content space-y-8 pb-12" id="edit-content">

<div className="space-y-3">
<label className="text-sm font-semibold text-slate-900">Video Lesson</label>
<div className="w-full aspect-video rounded-xl border-2 border-dashed border-slate-200 bg-white flex flex-col items-center justify-center text-center hover:border-slate-300 hover:bg-slate-50/50 transition-colors cursor-pointer group shadow-sm">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-white border border-slate-100 transition-colors shadow-sm">
<iconify-icon className="text-slate-500" icon="solar:video-frame-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900">Upload video file</h4>
<p className="text-xs text-slate-500 mt-1 max-w-xs px-4">Drag and drop your MP4 or WebM file here, or click to browse from your computer.</p>
</div>
</div>

<div className="space-y-3">
<label className="text-sm font-semibold text-slate-900">Lesson Overview</label>
<div className="rounded-xl border border-slate-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-slate-900/10 focus-within:border-slate-300 transition-all shadow-sm">

<div className="flex items-center gap-1 border-b border-slate-100 p-2 bg-slate-50/50">
<button className="p-1.5 rounded hover:bg-slate-200 text-slate-600 transition-colors"><iconify-icon icon="solar:text-bold-linear" width="16"></iconify-icon></button>
<button className="p-1.5 rounded hover:bg-slate-200 text-slate-600 transition-colors"><iconify-icon icon="solar:text-italic-linear" width="16"></iconify-icon></button>
<button className="p-1.5 rounded hover:bg-slate-200 text-slate-600 transition-colors"><iconify-icon icon="solar:text-underline-linear" width="16"></iconify-icon></button>
<div className="w-px h-4 bg-slate-200 mx-1"></div>
<button className="p-1.5 rounded hover:bg-slate-200 text-slate-600 transition-colors"><iconify-icon icon="solar:list-linear" width="16"></iconify-icon></button>
<button className="p-1.5 rounded hover:bg-slate-200 text-slate-600 transition-colors"><iconify-icon icon="solar:link-linear" width="16"></iconify-icon></button>
<div className="w-px h-4 bg-slate-200 mx-1"></div>
<button className="p-1.5 rounded hover:bg-slate-200 text-slate-600 transition-colors"><iconify-icon icon="solar:gallery-linear" width="16"></iconify-icon></button>
</div>
<textarea className="w-full p-4 text-sm text-slate-700 bg-transparent border-0 focus:ring-0 outline-none resize-y placeholder:text-slate-400" rows="8">This is a test lesson one. Here we introduce the core concepts that will form the foundation of your programming journey.

Key Takeaways:
- Understanding the core environment setup.
- Basic syntax and logical structures.</textarea>
</div>
</div>
</div>

<div className="editor-tab-content hidden space-y-6 pb-12" id="edit-resources">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold text-slate-900">Manage Resources</h3>
<p className="text-xs text-slate-500 mt-0.5">Add links, PDFs, or code snippets for students.</p>
</div>
<button className="flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon> Add Resource
                            </button>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white group shadow-sm">
<div className="flex items-center gap-3.5 w-full">
<div className="w-9 h-9 rounded bg-slate-50 flex items-center justify-center text-slate-500 border border-slate-100 shrink-0 cursor-grab">
<iconify-icon icon="solar:link-linear" width="18"></iconify-icon>
</div>
<div className="w-full">
<input className="text-sm font-medium text-slate-900 bg-transparent border-0 p-0 focus:ring-0 block w-full outline-none" type="text" value="Environment Setup Guide"/>
<input className="text-xs text-slate-500 bg-transparent border-0 p-0 focus:ring-0 block w-full outline-none mt-0.5" type="text" value="https://example.com/guide"/>
</div>
</div>
<button className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-2 rounded-md hover:bg-red-50 shrink-0 ml-2">
<iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-white group shadow-sm">
<div className="flex items-center gap-3.5 w-full">
<div className="w-9 h-9 rounded bg-slate-50 flex items-center justify-center text-slate-500 border border-slate-100 shrink-0 cursor-grab">
<iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
</div>
<div className="w-full">
<input className="text-sm font-medium text-slate-900 bg-transparent border-0 p-0 focus:ring-0 block w-full outline-none" type="text" value="Cheat Sheet.pdf"/>
<span className="text-xs text-slate-500 mt-0.5 block">2.4 MB PDF Document</span>
</div>
</div>
<button className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-2 rounded-md hover:bg-red-50 shrink-0 ml-2">
<iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
</button>
</div>

<div className="w-full py-8 mt-4 rounded-xl border-2 border-dashed border-slate-200 bg-transparent flex flex-col items-center justify-center text-center hover:border-slate-300 hover:bg-white transition-colors cursor-pointer">
<iconify-icon className="text-slate-400 mb-2" icon="solar:file-download-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Drop files here</span>
<span className="text-xs text-slate-500 mt-1">or click to upload</span>
</div>
</div>
</div>

<div className="editor-tab-content hidden space-y-6 pb-12" id="edit-settings">
<div className="space-y-4 max-w-xl">

<div className="flex items-center justify-between p-4.5 rounded-xl border border-slate-200 bg-white shadow-sm">
<div>
<h4 className="text-sm font-semibold text-slate-900">Free Preview</h4>
<p className="text-xs text-slate-500 mt-1">Allow non-enrolled students to view this lesson.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input className="sr-only peer" type="checkbox"/>
<div className="w-10 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
</label>
</div>

<div className="flex items-center justify-between p-4.5 rounded-xl border border-slate-200 bg-white shadow-sm">
<div>
<h4 className="text-sm font-semibold text-slate-900">Require Completion</h4>
<p className="text-xs text-slate-500 mt-1">Students must complete this before proceeding.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-10 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
</label>
</div>

<div className="mt-8 pt-8 border-t border-slate-200">
<h4 className="text-sm font-semibold text-red-600 mb-2">Danger Zone</h4>
<div className="flex items-center justify-between p-4.5 rounded-xl border border-red-200 bg-red-50/50">
<div>
<h4 className="text-sm font-semibold text-slate-900">Delete Lesson</h4>
<p className="text-xs text-slate-500 mt-1">This action cannot be undone.</p>
</div>
<button className="px-4 py-2 text-sm font-medium text-red-600 bg-white border border-red-200 rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors shadow-sm">
                                        Delete
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
