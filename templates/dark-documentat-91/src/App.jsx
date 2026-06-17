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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Configuration: Change to 'admin' to reveal the "New Post" button
        const USER_ROLE = 'member'; 

        document.addEventListener('DOMContentLoaded', () => {
            const newPostBtn = document.getElementById('new-post-btn');
            const composeBox = document.getElementById('compose-box');
            const submitBtn = document.getElementById('submit-post');
            const postsContainer = document.getElementById('posts-container');
            const titleInput = document.getElementById('post-title');
            const contentInput = document.getElementById('post-content');
            const languageInput = document.getElementById('post-language');

            // Helper function to prevent XSS
            function escapeHtml(unsafe) {
                return unsafe
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            }

            // Only initialize posting logic if user is an admin
            if (USER_ROLE === 'admin') {
                // Reveal the New Post button
                newPostBtn.classList.replace('hidden', 'flex');

                // Toggle compose box visibility
                newPostBtn.addEventListener('click', () => {
                    composeBox.classList.toggle('hidden');
                    if (!composeBox.classList.contains('hidden')) {
                        titleInput.focus();
                    }
                });

                // Handle submission
                submitBtn.addEventListener('click', () => {
                    const title = titleInput.value.trim();
                    const content = contentInput.value.trim();
                    const language = languageInput.value.trim() || 'Announcement';

                    if (!title || !content) {
                        alert('Please provide both a title and some content.');
                        return;
                    }

                    const postHtml = `
                    <article class="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all cursor-pointer group animate-slide-down">
                        <div class="flex gap-4">
                            <div class="hidden sm:flex flex-col items-center gap-1 mt-1 text-zinc-500">
                                <iconify-icon icon="solar:alt-arrow-up-linear" width="20" height="20" class="hover:text-white transition-colors"></iconify-icon>
                                <span class="text-xs font-medium">1</span>
                            </div>
                            <div class="flex-1 space-y-2">
                                <div class="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                                    <span class="flex items-center gap-1.5"><div class="w-4 h-4 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[10px]">A</div> admin</span>
                                    <span>•</span>
                                    <span>Just now</span>
                                    <span>•</span>
                                    <span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">${escapeHtml(language)}</span>
                                </div>
                                <h2 class="text-base font-semibold tracking-tight text-zinc-200 group-hover:text-white transition-colors">${escapeHtml(title)}</h2>
                                <p class="text-sm text-zinc-400 line-clamp-2">${escapeHtml(content)}</p>
                                <div class="flex items-center gap-4 mt-3 pt-3 border-t border-white/[0.04]">
                                    <span class="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                                        <iconify-icon icon="solar:chat-round-line-linear" width="16" height="16"></iconify-icon>
                                        0 Comments
                                    </span>
                                    <span class="flex items-center gap-1.5 ml-auto">
                                        <span class="px-2 py-0.5 rounded-md bg-zinc-800/50 text-zinc-400 text-xs border border-white/[0.04]">New</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
                    `;

                    // Insert the new post at the top
                    postsContainer.insertAdjacentHTML('afterbegin', postHtml);

                    // Clear fields and hide box
                    titleInput.value = '';
                    contentInput.value = '';
                    languageInput.value = '';
                    composeBox.classList.add('hidden');
                });
            }
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
      

<header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0a0a0a]/80 backdrop-blur-md">
<div className="flex sm:px-6 lg:px-8 h-14 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-6">

<a className="text-lg font-semibold tracking-tighter text-zinc-100 flex items-center gap-2" href="#">
<iconify-icon height="24" icon="solar:documents-minimalistic-linear" width="24"></iconify-icon>
                    inter documents
                </a>

<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#">Discussions</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Certificates</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Languages</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center justify-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
<iconify-icon className="" height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
                    Search
                </button>

<button className="hidden h-8 rounded-md bg-white text-black px-4 text-sm font-medium hover:bg-zinc-200 transition-colors items-center gap-2" id="new-post-btn">
<iconify-icon height="18" icon="solar:pen-new-square-linear" width="18"></iconify-icon>
                    New Post
                </button>
</div>
</div>
</header>

<main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

<aside className="hidden lg:block lg:col-span-3 space-y-8">

<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-white/[0.04] text-zinc-100 text-sm font-medium transition-colors" href="#">
<iconify-icon height="20" icon="solar:chat-round-line-linear" width="20"></iconify-icon>
                    All Discussions
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:bg-white/[0.02] hover:text-zinc-100 text-sm font-medium transition-colors" href="#">
<iconify-icon height="20" icon="solar:star-linear" width="20"></iconify-icon>
                    Popular
                </a>
</div>

<div>
<h3 className="px-3 text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-3">Languages</h3>
<div className="space-y-1">
<a className="flex items-center justify-between px-3 py-2 rounded-md text-zinc-400 hover:bg-white/[0.02] hover:text-zinc-100 text-sm font-medium transition-colors" href="#">
                        English <span className="text-xs text-zinc-600">1.2k</span>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-md text-zinc-400 hover:bg-white/[0.02] hover:text-zinc-100 text-sm font-medium transition-colors" href="#">
                        French <span className="text-xs text-zinc-600">845</span>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-md text-zinc-400 hover:bg-white/[0.02] hover:text-zinc-100 text-sm font-medium transition-colors" href="#">
                        Italian <span className="text-xs text-zinc-600">320</span>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-md text-zinc-400 hover:bg-white/[0.02] hover:text-zinc-100 text-sm font-medium transition-colors" href="#">
                        Chinese <span className="text-xs text-zinc-600">512</span>
</a>
</div>
</div>
</aside>

<section className="lg:col-span-6 space-y-6">

<div className="flex flex-col sm:flex-row sm:items-center gap-4 border-white/[0.08] border-b pb-4 gap-x-4 gap-y-4 justify-between">
<h1 className="text-xl font-semibold text-zinc-100 tracking-tight">WhatsApp +31 687546855 Buy Original TEF, TCF, DELF, DALF, CELPIP Certificates Without Exam</h1>
<div className="flex items-center gap-2 text-sm text-zinc-400 font-medium">
<button className="text-zinc-100">Latest</button>
<span className="text-zinc-700">•</span>
<button className="hover:text-zinc-100 transition-colors">Top</button>
</div>
</div>

<div className="hidden rounded-xl border border-white/[0.08] bg-zinc-900/50 p-4 space-y-3 mb-6 relative overflow-hidden" id="compose-box">
<div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<input className="w-full bg-transparent border-none p-0 text-base font-semibold tracking-tight text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-0" id="post-title" placeholder="Title of your discussion..." type="text"/>
<textarea className="w-full bg-transparent border-none p-0 text-sm text-zinc-400 placeholder-zinc-600 focus:outline-none focus:ring-0 resize-none" id="post-content" placeholder="What's on your mind? Share your thoughts, ask a question, or post an update..." rows="3"></textarea>
<div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
<div className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.04] rounded-md px-2 py-1">
<iconify-icon className="text-zinc-500" height="14" icon="solar:tag-linear" width="14"></iconify-icon>
<input className="bg-transparent border-none p-0 text-xs text-zinc-300 placeholder-zinc-600 focus:outline-none focus:ring-0 w-32" id="post-language" placeholder="Tag (e.g. Announcement)" type="text"/>
</div>
<button className="h-8 rounded-md bg-white text-black px-4 text-xs font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-1.5" id="submit-post">
                        Post Discussion
                        <iconify-icon height="14" icon="solar:plain-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-4" id="posts-container">

<article className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all cursor-pointer group">
<div className="flex gap-4">
<div className="hidden sm:flex flex-col items-center gap-1 mt-1 text-zinc-500">
<iconify-icon className="hover:text-white transition-colors" height="20" icon="solar:alt-arrow-up-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">42</span>
</div>
<div className="flex-1 space-y-2">
<div className="flex gap-2 text-xs font-medium text-zinc-500 gap-x-2 gap-y-2 items-center">
<span className="flex items-center gap-1.5"><div className="w-4 h-4 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[10px]">U</div> user_99</span>
<span>•</span>
<span>2h ago</span>
<span>•</span>
<span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">English</span>
</div>
<h2 className="group-hover:text-white transition-colors text-base font-semibold text-zinc-200 tracking-tight">Obtain original TEF, DELF, DALF TCF certificates without exam</h2>
<p className="line-clamp-2 text-sm text-zinc-400">We offer our exclusive clients the ability to gain TCF,TEF,DELF, DALF, CELPIP, PTE, GOETHE, TELC, OET, IELTS,TOEFL,GMAT, GRE, TOEIC, ESOL AUTODESK certificates without taking the exams. The regions we cover are Asia, UAE, Qatar, Oman, Saudi Arabia, Jordan, Kuwait, Australia, Canada and Europe.</p>
<div className="flex border-white/[0.04] border-t mt-3 pt-3 gap-x-4 gap-y-4 items-center">
<span className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
<iconify-icon height="16" icon="solar:chat-round-line-linear" width="16"></iconify-icon>
                                    12 Comments
                                </span>
<span className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
<iconify-icon height="16" icon="solar:eye-linear" width="16"></iconify-icon>
                                    340 Views
                                </span>
<div className="flex items-center gap-1.5 ml-auto">
<span className="px-2 py-0.5 rounded-md bg-zinc-800/50 text-zinc-400 text-xs border border-white/[0.04]">IELTS</span>
</div>
</div>
</div>
</div>
</article>

<article className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all cursor-pointer group">
<div className="flex gap-4">
<div className="hidden sm:flex flex-col items-center gap-1 mt-1 text-zinc-500">
<iconify-icon className="hover:text-white transition-colors" height="20" icon="solar:alt-arrow-up-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">28</span>
</div>
<div className="flex-1 space-y-2">
<div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
<span className="flex items-center gap-1.5"><div className="w-4 h-4 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[10px]">F</div> fr_seeker</span>
<span>•</span>
<span className="">5h ago</span>
<span className="">•</span>
<span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">French</span>
</div>
<h2 className="group-hover:text-white transition-colors text-base font-semibold text-zinc-200 tracking-tight">Buy CELI, CILS, PLIDA italian language certificate without exam</h2>
<p className="line-clamp-2 text-sm text-zinc-400">Inter Documentations is redefining how you achieve your Italian language goals. Forget the textbooks, the classrooms, and the exam anxiety. We offer a groundbreaking, fully legitimate service that provides you with a 100% verified CELI, CILS, PLIDA Italian language certificate – without ever needing to sit for an exam. If you're ready to bypass the struggle and secure your certification with unparalleled ease and confidence, you've just found your solution. WhatsApp +31 6 87546855</p>
<div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/[0.04]">
<span className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
<iconify-icon className="" height="16" icon="solar:chat-round-line-linear" width="16"></iconify-icon>
                                    8 Comments
                                </span>
<div className="flex items-center gap-1.5 ml-auto">
<span className="px-2 py-0.5 rounded-md bg-zinc-800/50 text-zinc-400 text-xs border border-white/[0.04]">TEF</span>
<span className="px-2 py-0.5 rounded-md bg-zinc-800/50 text-zinc-400 text-xs border border-white/[0.04]">DELF</span>
</div>
</div>
</div>
</div>
</article>

<article className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all cursor-pointer group">
<div className="flex gap-4">
<div className="hidden sm:flex flex-col items-center gap-1 mt-1 text-zinc-500">
<iconify-icon className="hover:text-white transition-colors" height="20" icon="solar:alt-arrow-up-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">56</span>
</div>
<div className="flex-1 space-y-2">
<div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
<span className="flex items-center gap-1.5"><div className="w-4 h-4 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[10px]">A</div> admin</span>
<span className="">•</span>
<span>1d ago</span>
<span>•</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Announcement</span>
</div>
<h2 className="group-hover:text-white transition-colors text-base font-semibold text-zinc-200 tracking-tight">Registered Goethe German a1, a2, b1, b2, c1, c2 certificate for sale</h2>
<p className="line-clamp-2 text-sm text-zinc-400">Are you eager to take your German language skills to the next level, enhance your career prospects, and open doors to new opportunities in Germany and beyond? Look no further! Our unparalleled service offers the original Goethe Zertifikat certificate - without the need for an exam. Email: intadocument@gmail.com</p>
<div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/[0.04]">
<span className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
<iconify-icon height="16" icon="solar:chat-round-line-linear" width="16"></iconify-icon>
                                    45 Comments
                                </span>
<div className="flex items-center gap-1.5 ml-auto">
<span className="px-2 py-0.5 rounded-md bg-zinc-800/50 text-zinc-400 text-xs border border-white/[0.04]">PTE</span>
<span className="px-2 py-0.5 rounded-md bg-zinc-800/50 text-zinc-400 text-xs border border-white/[0.04]">CELPIP</span>
</div>
</div>
</div>
</div>
</article>
</div>
<div className="flex justify-center pt-4">
<button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                    Load more discussions
                    <iconify-icon height="16" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<aside className="lg:col-span-3 space-y-6">

<div className="rounded-xl border border-white/[0.08] bg-zinc-900/50 p-5 overflow-hidden relative">

<div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/20 to-transparent"></div>
<h3 className="text-sm font-semibold tracking-tight text-zinc-100 mb-1">feel free to contact us.</h3>
<p className="text-xs text-zinc-400 mb-5">24/7 support for all your documentation needs.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center text-zinc-300 border border-white/[0.04]">
<iconify-icon height="18" icon="solar:phone-calling-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">WhatsApp</span>
<a className="text-sm font-medium text-zinc-200 hover:text-white transition-colors" href="tel:+31687546855">+31 6 87546855</a>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center text-zinc-300 border border-white/[0.04]">
<iconify-icon height="18" icon="solar:chat-square-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Skype ID</span>
<span className="text-sm font-medium text-zinc-200">Ielts Online</span>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center text-zinc-300 border border-white/[0.04]">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Email</span>
<a className="text-sm font-medium text-zinc-200 hover:text-white transition-colors truncate w-full" href="mailto:intadocument@gmail.com">intadocument@gmail.com</a>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-5">
<h3 className="text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-4 flex items-center gap-2">
<iconify-icon height="16" icon="solar:verified-check-linear" width="16"></iconify-icon>
                    Available Certificates
                </h3>
<p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                    We provide international certification without exam requirements for multiple languages and professional standards.
                </p>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 rounded bg-zinc-800/40 text-[11px] font-medium text-zinc-300 border border-white/[0.04]">TCF</span>
<span className="px-2 py-1 rounded bg-zinc-800/40 text-[11px] font-medium text-zinc-300 border border-white/[0.04]">TEF</span>
<span className="px-2 py-1 rounded bg-zinc-800/40 text-[11px] font-medium text-zinc-300 border border-white/[0.04]">DELF</span>
<span className="px-2 py-1 rounded bg-zinc-800/40 text-[11px] font-medium text-zinc-300 border border-white/[0.04]">DALF</span>
<span className="px-2 py-1 rounded bg-zinc-800/40 text-[11px] font-medium text-zinc-300 border border-white/[0.04]">CELPIP</span>
<span className="px-2 py-1 rounded bg-zinc-800/40 text-[11px] font-medium text-zinc-300 border border-white/[0.04]">PTE</span>
<span className="px-2 py-1 rounded bg-zinc-800/40 text-[11px] font-medium text-zinc-300 border border-white/[0.04]">GOETHE</span>
<span className="px-2 py-1 rounded bg-zinc-800/40 text-[11px] font-medium text-zinc-300 border border-white/[0.04]">TELC</span>
<span className="px-2 py-1 rounded bg-zinc-800/40 text-[11px] font-medium text-zinc-300 border border-white/[0.04]">OET</span>
<span className="px-2 py-1 rounded bg-zinc-800/40 text-[11px] font-medium text-zinc-300 border border-white/[0.04]">IELTS</span>
<span className="px-2 py-1 rounded bg-zinc-800/40 text-[11px] font-medium text-zinc-300 border border-white/[0.04]">TOEFL</span>
<span className="px-2 py-1 rounded bg-zinc-800/40 text-[11px] font-medium text-zinc-300 border border-white/[0.04]">GMAT</span>
<span className="px-2 py-1 rounded bg-zinc-800/40 text-[11px] font-medium text-zinc-300 border border-white/[0.04]">GRE</span>
<span className="px-2 py-1 rounded bg-zinc-800/40 text-[11px] font-medium text-zinc-300 border border-white/[0.04]">TOEIC</span>
<span className="px-2 py-1 rounded bg-zinc-800/40 text-[11px] font-medium text-zinc-300 border border-white/[0.04]">ESOL</span>
</div>
</div>
</aside>
</main>

<footer className="mt-auto border-t border-white/[0.08] py-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-500">
<p>© 2023 inter documents. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Guidelines</a>
</div>
</div>
</footer>



    </>
  );
}
