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
      
    lucide.createIcons();

    // Modal functionality
    const modal = document.getElementById('projectModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalMeta = document.getElementById('modalMeta');
    const modalDesc = document.getElementById('modalDesc');
    const modalIcon = document.getElementById('modalIcon');
    const modalType = document.getElementById('modalType');

    let lastActiveEl = null;

    function openModal(project) {
      modalImg.src = project.img;
      modalTitle.textContent = project.title;
      modalMeta.textContent = project.type + ' · ' + project.year;
      modalDesc.textContent = project.desc;
      modalType.textContent = project.type;
      modalIcon.setAttribute('data-lucide', project.icon);
      lucide.createIcons();
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        modal.querySelector('.modal-content').focus();
      }, 100);
    }

    function closeModal() {
      modal.hidden = true;
      document.body.style.overflow = '';
      if (lastActiveEl) {
        lastActiveEl.focus();
        lastActiveEl = null;
      }
    }

    // Trap focus inside modal
    modal.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') { closeModal(); }
      if (e.key === 'Tab') {
        const focusable = modal.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
        const firstEl = focusable[0], lastEl = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === lastEl) { firstEl.focus(); e.preventDefault(); }
        if (e.shiftKey && document.activeElement === firstEl) { lastEl.focus(); e.preventDefault(); }
      }
    });

    // Open modal on canvas click
    document.querySelectorAll('.museum-canvas').forEach(btn => {
      btn.addEventListener('click', function() {
        lastActiveEl = document.activeElement;
        const data = JSON.parse(this.getAttribute('data-project'));
        openModal(data);
      });
      btn.addEventListener('keydown', function(e) {
        if(e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          lastActiveEl = this;
          const data = JSON.parse(this.getAttribute('data-project'));
          openModal(data);
        }
      });
    });

    closeModalBtn.addEventListener('click', closeModal);

    // Click outside modal-content closes modal
    modal.addEventListener('mousedown', function(e) {
      if(e.target === modal) closeModal();
    });

    // For accessibility: hide modal from screen readers when closed
    modal.setAttribute('aria-hidden', modal.hidden ? "true" : "false");
    const observer = new MutationObserver(() => {
      modal.setAttribute('aria-hidden', modal.hidden ? "true" : "false");
    });
    observer.observe(modal, { attributes: true, attributeFilter: ['hidden
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
      

<header className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-4 pt-14 pb-10 lg:pt-20 fade-in fade-in-1">
<h1 className="text-[44px] lg:text-[70px] font-semibold tracking-tight leading-[1.07] text-center text-[#fcfcfc]">
      Monochrome Frames<br/>
<span className="font-normal text-[#e0e0e0]">Portfolio</span>
</h1>
<p className="mt-8 max-w-2xl text-lg md:text-2xl font-normal text-[#c8c8c8] text-center fade-in fade-in-2" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
      The art of <span className="font-semibold text-[#fcfcfc]">audiovisual storytelling</span>.<br/>
      Each project is a canvas—discover the story behind every frame.
    </p>
<div className="flex gap-3 mt-7 fade-in fade-in-3">
<button className="px-7 py-3 rounded-lg font-semibold bg-[#222] text-[#f8f8f8] shadow-md hover:bg-[#181818] transition-all outline-none hover:outline-1 hover:outline hover:outline-[#aaa]">
        Get in Touch
      </button>
<a className="px-7 py-3 rounded-lg font-semibold bg-[#181818] text-[#e0e0e0] hover:bg-[#232323] outline-none hover:outline-1 hover:outline hover:outline-[#aaa] transition-all" href="#gallery">
        View Projects
      </a>
</div>

<div className="w-full max-w-5xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 fade-in fade-in-4">
<div className="overflow-hidden rounded-2xl border border-[#232323] bg-[#181818] hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg outline-none hover:outline-2 hover:outline hover:outline-[#e6e6e6] cursor-pointer">
<img alt="Case 1" className="w-full h-32 object-cover grayscale" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="overflow-hidden rounded-2xl border border-[#232323] bg-[#181818] hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg outline-none hover:outline-2 hover:outline hover:outline-[#e6e6e6] cursor-pointer">
<img alt="Case 2" className="w-full h-32 object-cover grayscale" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="overflow-hidden rounded-2xl border border-[#232323] bg-[#181818] hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg outline-none hover:outline-2 hover:outline hover:outline-[#e6e6e6] cursor-pointer">
<img alt="Case 3" className="w-full h-32 object-cover grayscale" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="overflow-hidden rounded-2xl border border-[#232323] bg-[#181818] hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg outline-none hover:outline-2 hover:outline hover:outline-[#e6e6e6] cursor-pointer">
<img alt="Case 4" className="w-full h-32 object-cover grayscale" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</header>

<section className="max-w-4xl mx-auto w-full px-4 fade-in fade-in-2">
<hr className="divider my-4"/>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-[#fcfcfc]">
      About
    </h2>
<p className="text-lg md:text-xl text-[#e2e2e2] font-normal mb-6" style={{fontFamily: '\'IBM Plex Serif\', serif'}}>
      With a decade of experience in audiovisual storytelling, I craft cinematic narratives that capture emotion and detail. My work spans film, commercial, and music video, collaborating with global brands and visionary artists. I believe in the power of light, shadow, and sound to move audiences.<br/>
<span className="mono text-[#bdbdbd] text-base">Based in Berlin · Available Worldwide</span>
</p>
</section>

<section aria-label="Brands I have worked with" className="max-w-5xl mx-auto w-full px-4 fade-in fade-in-3">
<div className="logo-marquee" tabindex="0">
<div aria-hidden="true" className="logo-track">


<svg aria-label="Adobe" className="brand-logo" tabindex="0" title="Adobe" viewbox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48" x="0" y="0"></rect>
<path d="M10 38L24 10l14 28h-7l-7-16-7 16z" fill="#fa2222"></path>
</svg>

<svg aria-label="Netflix" className="brand-logo" tabindex="0" title="Netflix" viewbox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48" x="0" y="0"></rect>
<path d="M20 10h4v28h-4V10zm4 0h4v28h-4V10z" fill="#e50914"></path>
</svg>

<svg aria-label="Google" className="brand-logo" tabindex="0" title="Google" viewbox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48" x="0" y="0"></rect>
<path d="M24 20v8h12c-.5 3-4 9-12 9-7.5 0-13-6.5-13-13s5.5-13 13-13c4.3 0 7.2 1.7 8.8 3.1l6.4-6.4C35 7.2 29.9 5 24 5 12.9 5 4 13.9 4 25s8.9 20 20 20c11.3 0 19.8-8 19.8-19.3 0-1.3-.1-2.1-.3-3H24z" fill="#4285F4"></path>
<path d="M24 44c5.4 0 10-1.8 13.4-4.9l-6.2-5c-1.7 1.2-4.1 2.1-7.2 2.1-5.5 0-10.1-3.7-11.7-8.9H6.9v5.6C10.3 39.2 16.7 44 24 44z" fill="#34A853"></path>
<path d="M12.3 27.2C11.9 26 11.7 24.8 11.7 23.5c0-1.3.2-2.5.6-3.7V14.2H6.9C5.7 16.7 5 19.7 5 23.5c0 3.8.7 6.8 1.9 9.3l6.3-5.6z" fill="#FBBC05"></path>
<path d="M24 11.7c3 0 5.6 1.1 7.3 3.2l5.5-5.5C34 6.2 29.4 4 24 4c-7.3 0-13.7 4.8-16.2 11.3l6.3 5C13.9 15.4 18.5 11.7 24 11.7z" fill="#EA4335"></path>
</svg>

<svg aria-label="Nike" className="brand-logo" tabindex="0" title="Nike" viewbox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48" x="0" y="0"></rect>
<path d="M10 32c14-2 19-10 29-11-7 4-14 13-29 11z" fill="#111"></path>
</svg>

<svg aria-label="Sony" className="brand-logo" tabindex="0" title="Sony" viewbox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48" x="0" y="0"></rect>
<text fill="#191919" fontFamily="Arial,sans-serif" fontSize="18" font-weight="bold" text-anchor="middle" x="24" y="31">SONY</text>
</svg>

<svg aria-label="Apple" className="brand-logo" tabindex="0" title="Apple" viewbox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48" x="0" y="0"></rect>
<path d="M32 17c-1.4 0-3 .8-3.8.8-.8 0-2.1-.8-3.5-.8C20 17 17 20.1 17 24c0 3.7 2.9 9 5.1 9 1.1 0 1.4-.7 3.5-.7s2.3.7 3.5.7c2.1 0 5.1-5.3 5.1-9 0-3.9-3-7-6.2-7zm-1.6-2.4c.7-.8 1.1-1.9.9-3-.9.1-2 .7-2.6 1.6-.6.7-1.1 1.8-.9 2.9 1 .1 2.1-.5 2.6-1.5z" fill="#191919"></path>
</svg>


<svg aria-label="Adobe" className="brand-logo" tabindex="0" title="Adobe" viewbox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48" x="0" y="0"></rect>
<path d="M10 38L24 10l14 28h-7l-7-16-7 16z" fill="#fa2222"></path>
</svg>

<svg aria-label="Netflix" className="brand-logo" tabindex="0" title="Netflix" viewbox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48" x="0" y="0"></rect>
<path d="M20 10h4v28h-4V10zm4 0h4v28h-4V10z" fill="#e50914"></path>
</svg>

<svg aria-label="Google" className="brand-logo" tabindex="0" title="Google" viewbox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48" x="0" y="0"></rect>
<path d="M24 20v8h12c-.5 3-4 9-12 9-7.5 0-13-6.5-13-13s5.5-13 13-13c4.3 0 7.2 1.7 8.8 3.1l6.4-6.4C35 7.2 29.9 5 24 5 12.9 5 4 13.9 4 25s8.9 20 20 20c11.3 0 19.8-8 19.8-19.3 0-1.3-.1-2.1-.3-3H24z" fill="#4285F4"></path>
<path d="M24 44c5.4 0 10-1.8 13.4-4.9l-6.2-5c-1.7 1.2-4.1 2.1-7.2 2.1-5.5 0-10.1-3.7-11.7-8.9H6.9v5.6C10.3 39.2 16.7 44 24 44z" fill="#34A853"></path>
<path d="M12.3 27.2C11.9 26 11.7 24.8 11.7 23.5c0-1.3.2-2.5.6-3.7V14.2H6.9C5.7 16.7 5 19.7 5 23.5c0 3.8.7 6.8 1.9 9.3l6.3-5.6z" fill="#FBBC05"></path>
<path d="M24 11.7c3 0 5.6 1.1 7.3 3.2l5.5-5.5C34 6.2 29.4 4 24 4c-7.3 0-13.7 4.8-16.2 11.3l6.3 5C13.9 15.4 18.5 11.7 24 11.7z" fill="#EA4335"></path>
</svg>

<svg aria-label="Nike" className="brand-logo" tabindex="0" title="Nike" viewbox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48" x="0" y="0"></rect>
<path d="M10 32c14-2 19-10 29-11-7 4-14 13-29 11z" fill="#111"></path>
</svg>

<svg aria-label="Sony" className="brand-logo" tabindex="0" title="Sony" viewbox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48" x="0" y="0"></rect>
<text fill="#191919" fontFamily="Arial,sans-serif" fontSize="18" font-weight="bold" text-anchor="middle" x="24" y="31">SONY</text>
</svg>

<svg aria-label="Apple" className="brand-logo" tabindex="0" title="Apple" viewbox="0 0 48 48">
<rect 0"="" fill="#fff" height="48" rx="12" width="48" x="0 y="></rect>
<path d="M32 17c-1.4 0-3 .8-3.8.8-.8 0-2.1-.8-3.5-.8C20 17 17 20.1 17 24c0 3.7 2.9 9 5.1 9 1.1 0 1.4-.7 3.5-.7s2.3.7 3.5.7c2.1 0 5.1-5.3 5.1-9 0-3.9-3-7-6.2-7zm-1.6-2.4c.7-.8 1.1-1.9.9-3-.9.1-2 .7-2.6 1.6-.6.7-1.1 1.8-.9 2.9 1 .1 2.1-.5 2.6-1.5z" fill="#191919"></path>
</svg>
</div>
</div>
</section>
<section className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16 md:py-28 fade-in fade-in-2" id="gallery">
<div className="museum-section p-8 md:p-14">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#fcfcfc] mb-6 fade-in fade-in-1">
        Gallery of Canvases
      </h2>
<p className="mb-8 max-w-2xl text-lg md:text-xl text-[#e2e2e2] font-normal fade-in fade-in-2">
        Step into a curated collection of audiovisual works.<br/>
        Click a canvas to see the story and craft behind every creation.
      </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">

<button aria-haspopup="dialog" className="museum-canvas relative rounded-2xl overflow-hidden group fade-in fade-in-3" data-project='{
            "title":"Urban Pulse",
            "year":"2024",
            "type":"Short Film",
            "desc":"A poetic exploration of city life, blending light, rhythm, and motion.",
            "img":"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&amp;fit=crop&amp;w=400&amp;q=80",
            "cover":"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&amp;fit=crop&amp;w=600&amp;q=80",
            "icon":"camera-video"
          }' style={{minHeight: '320px'}} tabindex="0">
<img alt="Project 1" className="absolute inset-0 w-full h-full object-cover object-center z-0 grayscale" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="relative z-10 p-7 flex flex-col h-full justify-end">
<span className="text-lg font-semibold tracking-tight text-[#fcfcfc] drop-shadow-lg">
              Urban Pulse
            </span>
<span className="text-sm font-normal text-[#c8c8c8] mt-1 mono">Short Film · 2024</span>
</div>
</button>

<button aria-haspopup="dialog" className="museum-canvas relative rounded-2xl overflow-hidden group fade-in fade-in-4" data-project='{
            "title":"Chromatic Dream",
            "year":"2023",
            "type":"Music Video",
            "desc":"A surreal journey through monochrome and sound, designed for immersive listening.",
            "img":"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=400&amp;q=80",
            "cover":"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&amp;fit=crop&amp;w=600&amp;q=80",
            "icon":"music"
          }' style={{minHeight: '320px'}} tabindex="0">
<img alt="Project 2" className="absolute inset-0 w-full h-full object-cover object-center z-0 grayscale" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="relative z-10 p-7 flex flex-col h-full justify-end">
<span className="text-lg font-semibold tracking-tight text-[#fcfcfc] drop-shadow-lg">
              Chromatic Dream
            </span>
<span className="text-sm font-normal text-[#c8c8c8] mt-1 mono">Music Video · 2023</span>
</div>
</button>

<button aria-haspopup="dialog" className="museum-canvas relative rounded-2xl overflow-hidden group fade-in fade-in-5" data-project='{
            "title":"Faces of Light",
            "year":"2023",
            "type":"Documentary",
            "desc":"Portraits of artists illuminated by their craft and passion for visual storytelling.",
            "img":"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&amp;fit=crop&amp;w=400&amp;q=80",
            "cover":"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&amp;fit=crop&amp;w=600&amp;q=80",
            "icon":"film"
          }' style={{minHeight: '320px'}} tabindex="0">
<img alt="Project 3" className="absolute inset-0 w-full h-full object-cover object-center z-0 grayscale" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="relative z-10 p-7 flex flex-col h-full justify-end">
<span className="text-lg font-semibold tracking-tight text-[#fcfcfc] drop-shadow-lg">
              Faces of Light
            </span>
<span className="text-sm font-normal text-[#c8c8c8] mt-1 mono">Documentary · 2023</span>
</div>
</button>
</div>
</div>
</section>

<div aria-labelledby="modalTitle" aria-modal="true" className="project-modal" hidden="" id="projectModal" role="dialog" tabindex="-1">
<div className="modal-content" tabindex="0">
<button aria-label="Close Project (Esc)" className="modal-close" id="closeModalBtn">
<i className="w-7 h-7" data-lucide="x"></i>
</button>
<img alt="Project Thumbnail" className="project-thumb" id="modalImg"/>
<h3 className="text-2xl font-semibold tracking-tight mb-1" id="modalTitle"></h3>
<div className="mono text-base mb-1" id="modalMeta"></div>
<hr className="divider my-3"/>
<p className="text-base text-[#e8e8e8] font-normal mb-2" id="modalDesc"></p>
<div className="flex items-center gap-2 mt-1 text-[#b5b5b5] mono text-sm">
<i className="w-5 h-5" id="modalIcon"></i>
<span id="modalType"></span>
</div>
</div>
</div>

<footer className="mt-auto py-10 text-center fade-in fade-in-5">
<hr className="divider max-w-2xl mx-auto mb-6"/>
<div className="text-[#fcfcfc] font-semibold tracking-tight text-lg mb-2">
      Let's create something lasting.
    </div>
<div className="text-[#c8c8c8] text-base mb-2 mono">© 2024 Monochrome Portfolio. All rights reserved.</div>
<div className="flex justify-center gap-5 mt-2">
<a className="hover:text-[#fff] transition-colors" href="mailto:hello@monochrome.com" title="Email">
<i className="w-5 h-5" data-lucide="mail"></i>
</a>
<a className="hover:text-[#fff] transition-colors" href="#" title="Instagram">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="hover:text-[#fff] transition-colors" href="#" title="LinkedIn">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</footer>

    </>
  );
}
