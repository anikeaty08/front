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



      window.addEventListener('DOMContentLoaded', function () {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
        }

        const dropzone = document.getElementById('dropzone');
        const input = document.getElementById('rx-file');
        const selected = document.getElementById('selected-file');
        const uploadBtn = document.getElementById('upload-btn');

        ['dragenter','dragover'].forEach(evt => {
          dropzone.addEventListener(evt, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropzone.classList.add('ring-white/20','border-white/20');
          });
        });

        ['dragleave','drop'].forEach(evt => {
          dropzone.addEventListener(evt, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropzone.classList.remove('ring-white/20','border-white/20');
          });
        });

        dropzone.addEventListener('drop', (e) => {
          const files = e.dataTransfer?.files;
          if (files && files.length) {
            input.files = files;
            selected.textContent = files.length === 1 ? files[0].name : files.length + ' files selected';
          }
        });

        input.addEventListener('change', () => {
          const files = input.files;
          if (files && files.length) {
            selected.textContent = files.length === 1 ? files[0].name : files.length + ' files selected';
          } else {
            selected.textContent = '';
          }
        });

        uploadBtn.addEventListener('click', () => {
          if (!input.files || input.files.length === 0) {
            selected.textContent = 'Please select a file to upload.';
            return;
          }
          // Placeholder action: integrate with your upload endpoint here.
          selected.textContent = 'Uploading ' + (input.files.length === 1 ? input.files[0].name : input.files.length + ' files') + '...';
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
      
<div className="min-h-screen">
<header className="border-b border-white/10">
<div className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-900 ring-1 ring-white/10 grid place-items-center">
<span className="text-sm font-medium tracking-tight">RX</span>
</div>
<div className="h-6 w-px bg-white/10"></div>
<span className="text-sm text-neutral-400">Secure prescription manager</span>
</div>
<div className="hidden sm:flex items-center gap-4">
<div className="flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">Privacy-first</span>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4" data-lucide="upload-cloud" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">Fast import</span>
</div>
</div>
</div>
</header>
<main className="mx-auto max-w-4xl px-6 py-10">
<div className="mb-8">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Prescriptions</h1>
<p className="mt-2 text-sm text-neutral-400">Upload a prescription or view your saved ones. Encrypted at rest and in transit.</p>
</div>
<section className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="rounded-xl bg-neutral-900/50 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="file-up" style={{strokeWidth: '1.5'}}></i>
<h2 className="text-sm font-medium tracking-tight text-neutral-300">Upload prescription</h2>
</div>
<span className="text-xs text-neutral-500">JPG, PNG, PDF</span>
</div>
<label className="group block rounded-lg bg-neutral-950 ring-1 ring-white/10 hover:ring-white/20 border border-dashed border-white/10 hover:border-white/20 p-5 cursor-pointer transition-colors" htmlFor="rx-file" id="dropzone">
<div className="flex flex-col items-center justify-center text-center gap-3">
<div className="h-10 w-10 rounded-md bg-neutral-900 ring-1 ring-white/10 grid place-items-center group-hover:bg-neutral-800 transition-colors">
<i className="w-5 h-5 text-neutral-300" data-lucide="upload-cloud" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-sm text-neutral-200">Drag &amp; drop your file here</p>
<p className="text-xs text-neutral-500 mt-1">or click to browse</p>
</div>
<div aria-live="polite" className="text-xs text-neutral-400" id="selected-file"></div>
</div>
<input accept=".jpg,.jpeg,.png,.pdf,image/*,application/pdf" className="sr-only" id="rx-file" name="rx-file" type="file"/>
</label>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-neutral-500">Max 10MB. Make sure the text is readable.</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-100 text-sm px-3 py-2 ring-1 ring-white/10 hover:ring-white/20 transition-colors" id="upload-btn">
<i className="w-4 h-4" data-lucide="arrow-up-circle" style={{strokeWidth: '1.5'}}></i>
                Upload
              </button>
</div>
</div>

<div className="rounded-xl bg-neutral-900/50 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="folder-open" style={{strokeWidth: '1.5'}}></i>
<h2 className="text-sm font-medium tracking-tight text-neutral-300">Saved prescriptions</h2>
</div>
<a className="text-xs text-neutral-400 hover:text-neutral-200 underline underline-offset-4" href="#">View all</a>
</div>
<ul className="space-y-2 text-sm text-neutral-300">
<li className="flex items-center justify-between rounded-lg ring-1 ring-white/10 bg-neutral-950 px-3 py-2">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-400" data-lucide="file-text" style={{strokeWidth: '1.5'}}></i>
<div>
<p className="font-medium text-neutral-200">Amoxicillin 500mg</p>
<p className="text-xs text-neutral-500">Dr. Patel • Jan 12, 2025 • PDF</p>
</div>
</div>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md px-2 py-1 ring-1 ring-white/10 hover:ring-white/20 hover:bg-neutral-800 text-neutral-200 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="eye" style={{strokeWidth: '1.5'}}></i>
                  View
                </button>
</li>
<li className="flex items-center justify-between rounded-lg ring-1 ring-white/10 bg-neutral-950 px-3 py-2">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-400" data-lucide="file-text" style={{strokeWidth: '1.5'}}></i>
<div>
<p className="font-medium text-neutral-200">Ibuprofen 200mg</p>
<p className="text-xs text-neutral-500">Dr. Chen • Dec 02, 2024 • Image</p>
</div>
</div>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md px-2 py-1 ring-1 ring-white/10 hover:ring-white/20 hover:bg-neutral-800 text-neutral-200 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="eye" style={{strokeWidth: '1.5'}}></i>
                  View
                </button>
</li>
<li className="flex items-center justify-between rounded-lg ring-1 ring-white/10 bg-neutral-950 px-3 py-2">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-400" data-lucide="file-text" style={{strokeWidth: '1.5'}}></i>
<div>
<p className="font-medium text-neutral-200">Metformin 850mg</p>
<p className="text-xs text-neutral-500">Dr. Rivera • Nov 18, 2024 • PDF</p>
</div>
</div>
<button className="inline-flex items-center gap-1.5 text-xs rounded-md px-2 py-1 ring-1 ring-white/10 hover:ring-white/20 hover:bg-neutral-800 text-neutral-200 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="eye" style={{strokeWidth: '1.5'}}></i>
                  View
                </button>
</li>
</ul>
</div>
</section>

<div className="mt-8 rounded-xl bg-neutral-900/50 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-neutral-400" data-lucide="scan-line" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-sm font-medium tracking-tight text-neutral-300">Preview of a clean prescription format</h3>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-neutral-950 p-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-900 ring-1 ring-white/10 grid place-items-center">
<span className="text-xs font-medium tracking-tight">RX</span>
</div>
<div>
<p className="text-sm font-medium text-neutral-200">Dr. Ava Patel, MD</p>
<p className="text-xs text-neutral-500">License #A123456 • City Clinic</p>
</div>
</div>
<div className="text-right">
<p className="text-xs text-neutral-400">Date: 2025-01-12</p>
<p className="text-xs text-neutral-400">Ref: 0004821</p>
</div>
</div>
<div className="my-4 h-px bg-white/10"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="rounded-md ring-1 ring-white/10 p-3 bg-neutral-900/40">
<p className="text-xs uppercase tracking-wide text-neutral-400">Patient</p>
<p className="text-sm text-neutral-200 mt-1">John Carter</p>
<p className="text-xs text-neutral-500">DOB: 1990-04-08</p>
</div>
<div className="rounded-md ring-1 ring-white/10 p-3 bg-neutral-900/40">
<p className="text-xs uppercase tracking-wide text-neutral-400">Contact</p>
<p className="text-sm text-neutral-200 mt-1">john.carter@example.com</p>
<p className="text-xs text-neutral-500">+1 (555) 555-0199</p>
</div>
</div>
<div className="mt-4 rounded-md ring-1 ring-white/10 p-3 bg-neutral-900/40">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="list" style={{strokeWidth: '1.5'}}></i>
<p className="text-xs uppercase tracking-wide text-neutral-400">Medications</p>
</div>
<ul className="space-y-2 text-sm text-neutral-200">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-neutral-400 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
                  Amoxicillin 500mg • 1 capsule three times daily for 7 days
                </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-neutral-400 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
                  Ibuprofen 200mg • 1–2 tablets as needed for pain, with food
                </li>
</ul>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="rounded-md ring-1 ring-white/10 p-3 bg-neutral-900/40">
<p className="text-xs uppercase tracking-wide text-neutral-400">Directions</p>
<p className="text-sm text-neutral-200 mt-1">Increase fluids, rest. Return if symptoms worsen.</p>
</div>
<div className="rounded-md ring-1 ring-white/10 p-3 bg-neutral-900/40">
<p className="text-xs uppercase tracking-wide text-neutral-400">Signature</p>
<div className="mt-2 h-8 w-40 rounded bg-neutral-800/60 ring-1 ring-white/10"></div>
</div>
</div>
</div>
</div>

<div className="mt-8 rounded-xl bg-neutral-900/50 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-neutral-400" data-lucide="info" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-sm font-medium tracking-tight text-neutral-300">Upload guidelines</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="rounded-lg ring-1 ring-white/10 p-3 bg-neutral-950">
<p className="text-xs text-neutral-400">
                Use clear, readable scans. Avoid glare and cropping out corners.
              </p>
</div>
<div className="rounded-lg ring-1 ring-white/10 p-3 bg-neutral-950">
<p className="text-xs text-neutral-400">
                Include the full page with doctor details, patient info, and signature.
              </p>
</div>
<div className="rounded-lg ring-1 ring-white/10 p-3 bg-neutral-950">
<p className="text-xs text-neutral-400">
                Supported formats: JPG, PNG, PDF. Max size 10MB per file.
              </p>
</div>
</div>
</div>
<div className="mt-8 flex items-center justify-between">
<div className="text-xs text-neutral-500">Your documents are encrypted and stored securely.</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-100 text-sm px-3 py-2 ring-1 ring-white/10 hover:ring-white/20 transition-colors">
<i className="w-4 h-4" data-lucide="folder-symlink" style={{strokeWidth: '1.5'}}></i>
            View saved
          </button>
</div>
</main>
<footer className="mt-12 border-t border-white/10">
<div className="mx-auto max-w-4xl px-6 py-8 flex items-center justify-between">
<p className="text-xs text-neutral-500">© RX — Manage prescriptions with confidence.</p>
<div className="flex items-center gap-4 text-neutral-500">
<a className="text-xs hover:text-neutral-300 hover:underline" href="#">Terms</a>
<a className="text-xs hover:text-neutral-300 hover:underline" href="#">Privacy</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
