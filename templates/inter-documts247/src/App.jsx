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



        document.getElementById('postForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const titleInput = document.getElementById('postTitle');
            const contentInput = document.getElementById('postContent');
            
            if(!titleInput.value.trim() || !contentInput.value.trim()) return;

            const feed = document.getElementById('feedContainer');
            
            const article = document.createElement('article');
            article.className = 'relative pl-4 md:pl-0';
            article.innerHTML = `
                <div class="md:flex md:items-baseline md:gap-8">
                    <time class="block text-xs font-medium text-zinc-400 mb-2 md:mb-0 md:w-24 shrink-0 md:text-right">Just now</time>
                    <div class="flex-grow">
                        <h4 class="text-lg font-semibold text-zinc-900 tracking-tight mb-2">${titleInput.value}</h4>
                        <p class="text-sm text-zinc-500 leading-relaxed mb-4">${contentInput.value.replace(/\n/g, '<br>')}</p>
                    </div>
                </div>
            `;
            
            const divider = document.createElement('div');
            divider.className = 'h-px bg-zinc-100 md:ml-32 my-10';

            // Insert new post and divider at the top
            feed.insertBefore(divider, feed.firstChild);
            feed.insertBefore(article, feed.firstChild);

            // Change time on previous "Latest" post to today's date
            const timeElements = feed.querySelectorAll('time');
            if(timeElements.length > 1 && timeElements[1].textContent === 'Latest') {
                const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                timeElements[1].textContent = today;
            }

            // Reset form
            this.reset();
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/80">
<div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter lowercase text-zinc-900" href="#">inter documents</a>

<div className="flex items-center gap-3 text-xs font-medium text-zinc-400">
<span className="text-zinc-900 cursor-default">EN</span>
<span className="hover:text-zinc-900 cursor-pointer transition-colors">FR</span>
<span className="hover:text-zinc-900 cursor-pointer transition-colors">IT</span>
<span className="hover:text-zinc-900 cursor-pointer transition-colors">ZH</span>
</div>
</div>
</header>
<main className="flex-grow md:py-20 w-full max-w-4xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">

<div className="mb-12">
<h1 className="md:text-4xl text-3xl font-semibold text-zinc-900 tracking-tight mb-4">Buy Original TEF, TCF, DELF, DALF, CELPIP Certificates Without Exam  </h1>
<p className="leading-relaxed text-base text-zinc-500 max-w-2xl">We sell high quality and original diplomas, school certificates, degrees, masters, doctorates TOEIC, TOEFL, IELTS, DELF, DALF, TCF, TEF certificates / French Diplomas and many others. We deal with all types of certificates and diplomas of all country. We also provide registration of these certificates in the right certification boards. We deal with hundreds of people across the world and we have discrete delivery available for all our clients. feel free to contact with us. Email: intadocument@gmail.com</p>
</div>

<section className="mb-10 bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100">
<iconify-icon className="text-zinc-600" height="18" icon="solar:chat-round-line-linear" width="18"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">feel free to contact us.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50/50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<iconify-icon className="text-zinc-400 mt-0.5" height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<div className="flex flex-col gap-0.5">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">WhatsApp</span>
<a className="text-sm font-medium text-zinc-900 hover:text-blue-600 transition-colors" href="https://wa.me/31687546855">+31 6 87546855</a>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50/50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<iconify-icon className="text-zinc-400 mt-0.5" height="20" icon="solar:user-circle-linear" width="20"></iconify-icon>
<div className="flex flex-col gap-0.5">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">SkypeID</span>
<span className="text-sm font-medium text-zinc-900 select-all">Ielts Online</span>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50/50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<iconify-icon className="text-zinc-400 mt-0.5" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
<div className="flex flex-col gap-0.5">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Email</span>
<a className="text-sm font-medium text-zinc-900 hover:text-blue-600 transition-colors" href="mailto:intadocument@gmail.com">intadocument@gmail.com</a>
</div>
</div>
</div>
</section>

<section className="mb-16 bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100">
<iconify-icon className="text-zinc-600" height="18" icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">publish update.</h2>
</div>

<div className="flex items-center gap-3">
<span className="text-xs font-medium text-zinc-400 hidden md:block">Posting as:</span>
<div className="relative flex items-center bg-zinc-100/80 rounded-lg p-1 border border-zinc-200/50">

<div className="absolute inset-y-1 left-1 w-[calc(50%-4px)] bg-white rounded-md shadow-sm border border-zinc-200/50 transition-all"></div>
<button className="relative z-10 w-16 py-1 text-xs font-medium text-zinc-900 text-center cursor-default" type="button">Owner</button>
<button className="relative z-10 w-16 py-1 text-xs font-medium text-zinc-400 hover:text-zinc-600 transition-colors text-center cursor-pointer" type="button">Member</button>
</div>
</div>
</div>
<form className="space-y-4" id="postForm">
<input className="focus:outline-none focus:border-zinc-400 focus:bg-white transition-all placeholder:text-zinc-400 text-sm font-medium text-zinc-900 bg-zinc-50/50 w-full border-zinc-200 border rounded-xl pt-3 pr-4 pb-3 pl-4" id="postTitle" placeholder="Post title..." required="" type="text"/>
<textarea className="focus:outline-none focus:border-zinc-400 focus:bg-white transition-all placeholder:text-zinc-400 resize-none text-sm text-zinc-900 bg-zinc-50/50 w-full border-zinc-200 border rounded-xl pt-3 pr-4 pb-3 pl-4" id="postContent" placeholder="Write your update... Attach any relevant documents." required="" rows="3"></textarea>
<div className="flex items-center gap-2 pb-2">
<span className="text-xs font-medium text-zinc-500 mr-2">Tags:</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50 cursor-pointer hover:bg-zinc-200 transition-colors">IELTS</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50 cursor-pointer hover:bg-zinc-200 transition-colors">TOEFL</span>
<button className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-zinc-50 text-zinc-400 border border-dashed border-zinc-300 hover:text-zinc-600 hover:border-zinc-400 transition-colors" title="Add tag" type="button">
<iconify-icon height="14" icon="solar:add-circle-linear" width="14"></iconify-icon>
</button>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-100">
<div className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon className="text-emerald-500" height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span className="">Owner access: Your update will be visible immediately.</span>
</div>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors shadow-sm w-full sm:w-auto flex items-center justify-center gap-2" type="submit">
<iconify-icon height="18" icon="solar:plain-2-linear" width="18"></iconify-icon>
                        Post Update
                    </button>
</div>
</form>
</section>

<section className="">
<div className="flex items-end justify-between border-b border-zinc-200 mb-8 overflow-x-auto hide-scrollbar">
<div className="flex items-center gap-6 min-w-max">
<button className="text-sm font-medium text-zinc-900 border-b-2 border-zinc-900 pb-3 -mb-px">Published Updates</button>
<button className="text-sm font-medium text-zinc-400 hover:text-zinc-600 pb-3 -mb-px flex items-center gap-2 transition-colors">
                        Pending Approval
                        <span className="flex items-center justify-center bg-zinc-100 text-zinc-500 font-semibold rounded-full min-w-[1.25rem] h-5 px-1.5 text-[0.65rem]">1</span>
</button>
</div>
<span className="hidden sm:flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-zinc-50 border border-zinc-200/50 text-xs font-medium text-zinc-500 mb-2">
<iconify-icon height="14" icon="solar:shield-user-linear" width="14"></iconify-icon>
                    Admin Managed
                </span>
</div>
<div className="space-y-10" id="feedContainer">

<article className="relative pl-4 md:pl-0">
<div className="md:flex md:items-baseline md:gap-8">
<time className="block text-xs font-medium text-zinc-400 mb-2 md:mb-0 md:w-24 shrink-0 md:text-right">Latest</time>
<div className="flex-grow">
<h4 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2">WhatsApp +31 687546855 Buy original TEF, DELF, DALF TCF certificate without exam</h4>
<p className="leading-relaxed text-sm text-zinc-500 mb-4">We offer our exclusive clients the ability to gain TCF,TEF,DELF, DALF, CELPIP, PTE, GOETHE, TELC, OET, IELTS,TOEFL,GMAT, GRE, TOEIC, ESOL AUTODESK certificates without taking the exams. The regions we cover are Asia, UAE, Qatar, Oman, Saudi Arabia, Jordan, Kuwait, Australia, Canada and Europe.
</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50">IELTS</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50">TOEFL</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50">PTE</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50">ESOL</span>
</div>
</div>
</div>
</article>
<div className="h-px bg-zinc-100 md:ml-32"></div>

<article className="relative pl-4 md:pl-0">
<div className="md:flex md:items-baseline md:gap-8">
<time className="block text-xs font-medium text-zinc-400 mb-2 md:mb-0 md:w-24 shrink-0 md:text-right">Oct 12, 2023</time>
<div className="flex-grow">
<h4 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2">Buy original European Languages: TCF, TEF, DELF, DALF, GOETHE, TELC Certificates without exams</h4>
<p className="leading-relaxed text-sm text-zinc-500 mb-4">Updated procedures for French and German certification records. Please specify your required level (A1-C2) and target institution when messaging support on WhatsApp. +31 6 87546855</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50">TCF</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50">TEF</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50">DELF</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50">DALF</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50">GOETHE</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50">TELC</span>
</div>
</div>
</div>
</article>
<div className="h-px bg-zinc-100 md:ml-32"></div>

<article className="relative pl-4 md:pl-0">
<div className="md:flex md:items-baseline md:gap-8">
<time className="block text-xs font-medium text-zinc-400 mb-2 md:mb-0 md:w-24 shrink-0 md:text-right">Sep 28, 2023</time>
<div className="flex-grow">
<h4 className="text-lg font-semibold text-zinc-900 tracking-tight mb-2">Obtain professional &amp; Academic: GMAT, GRE, OET, TOEIC, CELPIP Certificate online</h4>
<p className="leading-relaxed text-sm text-zinc-500 mb-4">For specialized professional boards and graduate admissions documentation handling. Turnaround times vary by region. Contact us via email for detailed itineraries. Email: intadocument@gmail.com</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50">GMAT</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50">GRE</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50">OET</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50">TOEIC</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/50">CELPIP</span>
</div>
</div>
</div>
</article>
</div>
</section>
</main>

<footer className="mt-auto border-t border-zinc-200/80 bg-white py-8">
<div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<span className="text-lg font-semibold tracking-tighter lowercase text-zinc-300">inter documents</span>
<p className="text-xs font-medium text-zinc-400">© 2024 inter documents. Admin posts only.</p>
</div>
</footer>



    </>
  );
}
