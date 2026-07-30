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
      {

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
    observer.observe(modal, { attributes: true, attributeFilter: ['hidden']})
}
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
      Monochrome Frames<br />
<span className="font-normal text-[#e0e0e0]">Portfolio</span>
</h1>
<p className="mt-8 max-w-2xl text-lg md:text-2xl font-normal text-[#c8c8c8] text-center fade-in fade-in-2" style={{fontFamily: `'IBM Plex Serif',serif`}}>
      The art of <span className="font-semibold text-[#fcfcfc]">audiovisual storytelling</span>.<br />
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
<img alt="Case 1" className="w-full h-32 object-cover grayscale" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" />
</div>
<div className="overflow-hidden rounded-2xl border border-[#232323] bg-[#181818] hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg outline-none hover:outline-2 hover:outline hover:outline-[#e6e6e6] cursor-pointer">
<img alt="Case 2" className="w-full h-32 object-cover grayscale" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" />
</div>
<div className="overflow-hidden rounded-2xl border border-[#232323] bg-[#181818] hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg outline-none hover:outline-2 hover:outline hover:outline-[#e6e6e6] cursor-pointer">
<img alt="Case 3" className="w-full h-32 object-cover grayscale" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" />
</div>
<div className="overflow-hidden rounded-2xl border border-[#232323] bg-[#181818] hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg outline-none hover:outline-2 hover:outline hover:outline-[#e6e6e6] cursor-pointer">
<img alt="Case 4" className="w-full h-32 object-cover grayscale" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" />
</div>
</div>
</header>

<section className="max-w-4xl mx-auto w-full px-4 fade-in fade-in-2">
<hr className="divider my-4" />
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-[#fcfcfc]">
      About
    </h2>
<p className="text-lg md:text-xl text-[#e2e2e2] font-normal mb-6" style={{fontFamily: `'IBM Plex Serif',serif`}}>
      With a decade of experience in audiovisual storytelling, I craft cinematic narratives that capture emotion and detail. My work spans film, commercial, and music video, collaborating with global brands and visionary artists. I believe in the power of light, shadow, and sound to move audiences.<br />
<span className="mono text-[#bdbdbd] text-base">Based in Berlin · Available Worldwide</span>
</p>
</section>

<section aria-label="Brands I have worked with" className="max-w-5xl mx-auto w-full px-4 fade-in fade-in-3">
<div className="logo-marquee" tabindex="0">
<div aria-hidden="true" className="logo-track">


<svg aria-label="Adobe" className="brand-logo" tabindex="0" title="Adobe" viewBox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48"></rect>
<path fill="#fa2222"></path>
</svg>

<svg aria-label="Netflix" className="brand-logo" tabindex="0" title="Netflix" viewBox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48"></rect>
<path fill="#e50914"></path>
</svg>

<svg aria-label="Google" className="brand-logo" tabindex="0" title="Google" viewBox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48"></rect>
<path fill="#4285F4"></path>
<path fill="#34A853"></path>
<path fill="#FBBC05"></path>
<path fill="#EA4335"></path>
</svg>

<svg aria-label="Nike" className="brand-logo" tabindex="0" title="Nike" viewBox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48"></rect>
<path fill="#111"></path>
</svg>

<svg aria-label="Sony" className="brand-logo" tabindex="0" title="Sony" viewBox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48"></rect>
<text fill="#191919" fontFamily="Arial,sans-serif" fontSize="18" font-weight="bold" text-anchor="middle">SONY</text>
</svg>

<svg aria-label="Apple" className="brand-logo" tabindex="0" title="Apple" viewBox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48"></rect>
<path fill="#191919"></path>
</svg>


<svg aria-label="Adobe" className="brand-logo" tabindex="0" title="Adobe" viewBox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48"></rect>
<path fill="#fa2222"></path>
</svg>

<svg aria-label="Netflix" className="brand-logo" tabindex="0" title="Netflix" viewBox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48"></rect>
<path fill="#e50914"></path>
</svg>

<svg aria-label="Google" className="brand-logo" tabindex="0" title="Google" viewBox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48"></rect>
<path fill="#4285F4"></path>
<path fill="#34A853"></path>
<path fill="#FBBC05"></path>
<path fill="#EA4335"></path>
</svg>

<svg aria-label="Nike" className="brand-logo" tabindex="0" title="Nike" viewBox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48"></rect>
<path fill="#111"></path>
</svg>

<svg aria-label="Sony" className="brand-logo" tabindex="0" title="Sony" viewBox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48"></rect>
<text fill="#191919" fontFamily="Arial,sans-serif" fontSize="18" font-weight="bold" text-anchor="middle">SONY</text>
</svg>

<svg aria-label="Apple" className="brand-logo" tabindex="0" title="Apple" viewBox="0 0 48 48">
<rect fill="#fff" height="48" rx="12" width="48"></rect>
<path fill="#191919"></path>
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
        Step into a curated collection of audiovisual works.<br />
        Click a canvas to see the story and craft behind every creation.
      </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">

<button aria-haspopup="dialog" className="museum-canvas relative rounded-2xl overflow-hidden group fade-in fade-in-3" data-project="{
            &quot;title&quot;:&quot;Urban Pulse&quot;,
            &quot;year&quot;:&quot;2024&quot;,
            &quot;type&quot;:&quot;Short Film&quot;,
            &quot;desc&quot;:&quot;A poetic exploration of city life, blending light, rhythm, and motion.&quot;,
            &quot;img&quot;:&quot;https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80&quot;,
            &quot;cover&quot;:&quot;https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80&quot;,
            &quot;icon&quot;:&quot;camera-video&quot;
          }" style={{minHeight: `320px`}} tabindex="0">
<img alt="Project 1" className="absolute inset-0 w-full h-full object-cover object-center z-0 grayscale" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" />
<div className="relative z-10 p-7 flex flex-col h-full justify-end">
<span className="text-lg font-semibold tracking-tight text-[#fcfcfc] drop-shadow-lg">
              Urban Pulse
            </span>
<span className="text-sm font-normal text-[#c8c8c8] mt-1 mono">Short Film · 2024</span>
</div>
</button>

<button aria-haspopup="dialog" className="museum-canvas relative rounded-2xl overflow-hidden group fade-in fade-in-4" data-project="{
            &quot;title&quot;:&quot;Chromatic Dream&quot;,
            &quot;year&quot;:&quot;2023&quot;,
            &quot;type&quot;:&quot;Music Video&quot;,
            &quot;desc&quot;:&quot;A surreal journey through monochrome and sound, designed for immersive listening.&quot;,
            &quot;img&quot;:&quot;https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80&quot;,
            &quot;cover&quot;:&quot;https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80&quot;,
            &quot;icon&quot;:&quot;music&quot;
          }" style={{minHeight: `320px`}} tabindex="0">
<img alt="Project 2" className="absolute inset-0 w-full h-full object-cover object-center z-0 grayscale" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" />
<div className="relative z-10 p-7 flex flex-col h-full justify-end">
<span className="text-lg font-semibold tracking-tight text-[#fcfcfc] drop-shadow-lg">
              Chromatic Dream
            </span>
<span className="text-sm font-normal text-[#c8c8c8] mt-1 mono">Music Video · 2023</span>
</div>
</button>

<button aria-haspopup="dialog" className="museum-canvas relative rounded-2xl overflow-hidden group fade-in fade-in-5" data-project="{
            &quot;title&quot;:&quot;Faces of Light&quot;,
            &quot;year&quot;:&quot;2023&quot;,
            &quot;type&quot;:&quot;Documentary&quot;,
            &quot;desc&quot;:&quot;Portraits of artists illuminated by their craft and passion for visual storytelling.&quot;,
            &quot;img&quot;:&quot;https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80&quot;,
            &quot;cover&quot;:&quot;https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80&quot;,
            &quot;icon&quot;:&quot;film&quot;
          }" style={{minHeight: `320px`}} tabindex="0">
<img alt="Project 3" className="absolute inset-0 w-full h-full object-cover object-center z-0 grayscale" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" />
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
<img alt="Project Thumbnail" className="project-thumb" id="modalImg" />
<h3 className="text-2xl font-semibold tracking-tight mb-1" id="modalTitle"></h3>
<div className="mono text-base mb-1" id="modalMeta"></div>
<hr className="divider my-3" />
<p className="text-base text-[#e8e8e8] font-normal mb-2" id="modalDesc"></p>
<div className="flex items-center gap-2 mt-1 text-[#b5b5b5] mono text-sm">
<i className="w-5 h-5" id="modalIcon"></i>
<span id="modalType"></span>
</div>
</div>
</div>

<footer className="mt-auto py-10 text-center fade-in fade-in-5">
<hr className="divider max-w-2xl mx-auto mb-6" />
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
