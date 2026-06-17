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
      
      // Simple Router
      const routes = {
        home: 'page-home',
        dashboard: 'page-dashboard',
        tools: 'page-tools',
        'tool-pdf-to-word': 'page-tool-pdf-to-word',
        'tool-word-to-pdf': 'page-tool-word-to-pdf',
        'tool-pdf-to-excel': 'page-tool-pdf-to-excel',
        'tool-pdf-to-ppt': 'page-tool-pdf-to-ppt',
        'tool-pdf-to-image': 'page-tool-pdf-to-image',
        'tool-image-to-pdf': 'page-tool-image-to-pdf',
        'tool-merge-pdf': 'page-tool-merge-pdf',
        'tool-split-pdf': 'page-tool-split-pdf',
        'tool-compress-pdf': 'page-tool-compress-pdf',
        'tool-rotate-pdf': 'page-tool-rotate-pdf',
        'tool-unlock-pdf': 'page-tool-unlock-pdf',
        'tool-protect-pdf': 'page-tool-protect-pdf',
        pricing: 'page-pricing',
        about: 'page-about',
        contact: 'page-contact',
      };

      function showRoute(hash) {
        const key = (hash || '#home').replace('#', '');
        const pageId = routes[key] || routes.home;
        document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
        document.getElementById(pageId)?.classList.remove('hidden');

        document.querySelectorAll('.nav-link').forEach(a => {
          const active = a.getAttribute('data-route') === key;
          a.classList.toggle('bg-gray-100', active);
          a.classList.toggle('text-gray-900', active);
          if (active) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
        });

        // Refresh icons for current view
        if (window.lucide) lucide.createIcons();
        // Close mobile drawer if open
        drawer.classList.add('hidden');
      }

      // Mobile Drawer
      const drawer = document.getElementById('drawer');
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const drawerClose = document.getElementById('drawerClose');
      const drawerOverlay = document.getElementById('drawerOverlay');
      mobileBtn?.addEventListener('click', () => drawer.classList.remove('hidden'));
      drawerClose?.addEventListener('click', () => drawer.classList.add('hidden'));
      drawerOverlay?.addEventListener('click', () => drawer.classList.add('hidden'));

      // Sidebar collapse (desktop)
      const sidebar = document.getElementById('sidebar');
      const collapseSidebar = document.getElementById('collapseSidebar');
      collapseSidebar?.addEventListener('click', () => {
        sidebar.classList.toggle('w-72');
        sidebar.classList.toggle('w-20');
        // Hide/show labels when collapsed
        sidebar.querySelectorAll('span, .text-xs, .text-[11px]').forEach(el => {
          if (el.closest('button')) return;
          el.classList.toggle('hidden');
        });
      });

      // Dropzone + upload simulation
      function formatBytes(bytes) {
        if (!bytes || isNaN(bytes)) return '0 MB';
        const sizes = ['B','KB','MB','GB'];
        const i = Math.floor(Math.log(bytes)/Math.log(1024));
        return (bytes/Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
      }

      function setupToolSection(section) {
        const dropzone = section.querySelector('.dropzone');
        const fileInput = dropzone?.querySelector('.file-input');
        const uploadState = section.querySelector('.upload-state');
        const progress = section.querySelector('.progress-bar');
        const startBtn = section.querySelector('.btn-start');
        const cancelBtn = section.querySelector('.btn-cancel');
        const downloadBtn = section.querySelector('.btn-download');
        const fileNameEl = section.querySelector('.file-name');
        const fileSizeEl = section.querySelector('.file-size');
        const statusEl = section.querySelector('.status-text');

        function resetState() {
          if (uploadState) uploadState.classList.add('hidden');
          if (progress) progress.style.width =          '0%';
          if (statusEl) statusEl.textContent = 'Ready';
          if (downloadBtn) {
            downloadBtn.disabled = true;
            downloadBtn.removeAttribute('data-url');
          }
          if (fileInput) fileInput.value = '';
          if (fileNameEl) fileNameEl.textContent = fileNameEl.textContent || '';
          if (fileSizeEl) fileSizeEl.textContent = '0 MB';
          if (objectUrl) {
            URL.revokeObjectURL(objectUrl);
            objectUrl = null;
          }
        }

        let selectedFiles = [];
        let objectUrl = null;

        function humanizeSelection(files) {
          if (!files || files.length === 0) return { name: 'No file selected', size: '0 MB' };
          if (files.length === 1) {
            return { name: files[0].name, size: formatBytes(files[0].size || 0) };
          }
          const total = Array.from(files).reduce((sum, f) => sum + (f.size || 0), 0);
          return { name: `${files.length} files selected`, size: `${formatBytes(total)} total` };
        }

        function showFiles(files) {
          selectedFiles = Array.from(files || []);
          const multi = fileInput?.multiple || fileInput?.dataset.multiple === 'true';
          const info = humanizeSelection(selectedFiles);
          if (fileNameEl) fileNameEl.textContent = info.name;
          if (fileSizeEl) fileSizeEl.textContent = info.size;
          if (statusEl) statusEl.textContent = 'Ready';
          if (uploadState) uploadState.classList.remove('hidden');
          if (progress) progress.style.width = '0%';
          if (downloadBtn) {
            downloadBtn.disabled = true;
            if (objectUrl) {
              URL.revokeObjectURL(objectUrl);
              objectUrl = null;
            }
          }
          // Re-evaluate action button label for merge/image multiples
          if (startBtn) {
            if (multi && selectedFiles.length < 2 && section.id === 'page-tool-merge-pdf') {
              startBtn.disabled = true;
              startBtn.classList.add('opacity-60', 'cursor-not-allowed');
            } else {
              startBtn.disabled = false;
              startBtn.classList.remove('opacity-60', 'cursor-not-allowed');
            }
          }
        }

        function highlight(on) {
          if (!dropzone) return;
          dropzone.classList.toggle('border-indigo-400', on);
          dropzone.classList.toggle('bg-indigo-50/50', on);
        }

        // File input + drag and drop
        if (dropzone && fileInput) {
          dropzone.addEventListener('click', (e) => {
            const target = e.target;
            // Ignore clicks on label (it already opens)
            if (target instanceof HTMLLabelElement) return;
            fileInput.click();
          });
          dropzone.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              fileInput.click();
            }
          });
          ['dragenter','dragover'].forEach(evt =>
            dropzone.addEventListener(evt, (e) => {
              e.preventDefault();
              e.stopPropagation();
              highlight(true);
            })
          );
          ['dragleave','dragend','drop'].forEach(evt =>
            dropzone.addEventListener(evt, (e) => {
              e.preventDefault();
              e.stopPropagation();
              if (evt === 'drop') {
                const dt = e.dataTransfer;
                if (dt?.files?.length) {
                  // If input doesn't support multiple, take first file only
                  const files = fileInput.multiple ? dt.files : [dt.files[0]];
                  showFiles(files);
                }
              }
              highlight(false);
            })
          );
          fileInput.addEventListener('change', (e) => {
            const files = e.target.files;
            if (files?.length) showFiles(files);
          });
        }

        // Start/cancel/download handlers
        let timer = null;
        function simulateConversion() {
          if (!progress || !startBtn) return;
          startBtn.disabled = true;
          startBtn.classList.add('opacity-60', 'cursor-not-allowed');
          if (cancelBtn) {
            cancelBtn.disabled = false;
            cancelBtn.classList.remove('opacity-60', 'cursor-not-allowed');
          }
          let pct = 0;
          if (statusEl) statusEl.textContent = 'Uploading...';
          timer = setInterval(() => {
            pct += Math.random() * 15 + 5;
            if (pct > 100) pct = 100;
            progress.style.width = pct.toFixed(0) + '%';
            if (pct > 35 && pct < 85 && statusEl) statusEl.textContent = 'Processing...';
            if (pct >= 100) {
              clearInterval(timer);
              timer = null;
              if (statusEl) statusEl.textContent = 'Complete';
              startBtn.disabled = false;
              startBtn.classList.remove('opacity-60', 'cursor-not-allowed');
              if (downloadBtn) downloadBtn.disabled = false;

              // Create a dummy blob for download
              const toolId = section.id || '';
              const baseName = (selectedFiles[0]?.name || 'document').replace(/\.[^/.]+$/, '');
              const extMap = {
                'page-tool-pdf-to-word': '.docx',
                'page-tool-word-to-pdf': '.pdf',
                'page-tool-pdf-to-excel': '.xlsx',
                'page-tool-pdf-to-ppt': '.pptx',
                'page-tool-pdf-to-image': '.zip',
                'page-tool-image-to-pdf': '.pdf',
                'page-tool-merge-pdf': '.pdf',
                'page-tool-split-pdf': '.pdf',
                'page-tool-compress-pdf': '.pdf',
                'page-tool-rotate-pdf': '.pdf',
                'page-tool-unlock-pdf': '.pdf',
                'page-tool-protect-pdf': '.pdf',
              };
              const ext = extMap[toolId] || '.pdf';

              const meta = {
                tool: toolId,
                when: new Date().toISOString(),
                files: selectedFiles.map(f => f.name),
              };
              const blob = new Blob(
                [JSON.stringify({ message: 'Sample output (placeholder)', ...meta }, null, 2)],
                { type: 'application/json' }
              );
              objectUrl = URL.createObjectURL(blob);
              downloadBtn?.setAttribute('data-url', objectUrl);
              downloadBtn?.setAttribute('data-filename', `${baseName}${ext}`);
            }
          }, 250);
        }

        startBtn?.addEventListener('click', () => {
          if (!selectedFiles.length) return;
          if (progress) progress.style.width = '0%';
          simulateConversion();
        });

        cancelBtn?.addEventListener('click', () => {
          if (timer) {
            clearInterval(timer);
            timer = null;
          }
          resetState();
        });

        downloadBtn?.addEventListener('click', (e) => {
          e.preventDefault();
          const url = downloadBtn.getAttribute('data-url');
          const name = downloadBtn.getAttribute('data-filename') || 'output.pdf';
          if (!url) return;
          const a = document.createElement('a');
          a.href = url;
          a.download = name;
          document.body.appendChild(a);
          a.click();
          a.remove();
        });

        // Initialize default state per section
        resetState();
      }

      // On load
      document.addEventListener('DOMContentLoaded', () => {
        // Fix mis-typed section id for PDF to Excel if present
        const excelFix = document.getElementById('-tool-pdf-to-excel');
        if (excelFix) excelFix.id = 'page-tool-pdf-to-excel';

        // Initialize icons
        if (window.lucide) lucide.createIcons();

        // Router bindings
        window.addEventListener('hashchange', () => {
          showRoute(location.hash);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        document.addEventListener('click', (e) => {
          const el = e.target.closest('[data-route]');
          if (el) {
            e.preventDefault();
            const route = el.getAttribute('data-route');
            if (route) {
              location.hash = '#' + route;
            }
          }
        });

        // Set current year
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // Initialize all tool sections with dropzones
        document.querySelectorAll('.page-section').forEach(sec => setupToolSection(sec));

        // Initial route
        showRoute(location.hash || '#home');
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
      

<div className="min-h-screen flex">

<aside className="hidden lg:flex lg:flex-col w-72 border-r border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/50" id="sidebar">

<div className="h-18 px-5 py-4 flex items-center justify-between border-b border-gray-200">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold tracking-tight">PC</div>
<div className="flex flex-col">
<span className="text-[15px] font-semibold tracking-tight">PDF Conversion</span>
<span className="text-xs text-gray-500">Fast. Secure. Simple.</span>
</div>
</div>
<button className="hidden xl:inline-flex items-center rounded-lg px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition" id="collapseSidebar">
<i aria-hidden="true" className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
</div>

<nav className="flex-1 overflow-y-auto px-3 py-4">
<div className="text-[11px] uppercase tracking-wider text-gray-500 px-2 mb-2">Overview</div>
<ul className="space-y-1">
<li>
<a className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition" data-route="home" href="#home">
<i className="w-5 h-5 text-gray-500 group-hover:text-gray-900" data-lucide="home"></i>
<span>Home</span>
</a>
</li>
<li>
<a className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition" data-route="dashboard" href="#dashboard">
<i className="w-5 h-5 text-gray-500 group-hover:text-gray-900" data-lucide="layout-dashboard"></i>
<span>Dashboard</span>
</a>
</li>
</ul>
<div className="mt-6 text-[11px] uppercase tracking-wider text-gray-500 px-2 mb-2">Tools</div>
<ul className="space-y-1">
<li>
<a className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition" data-route="tools" href="#tools">
<i className="w-5 h-5 text-gray-500 group-hover:text-gray-900" data-lucide="wrench"></i>
<span>All Tools</span>
</a>
</li>
<li><a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100" data-route="tool-pdf-to-word" href="#tool-pdf-to-word">
<i className="w-5 h-5 text-gray-500" data-lucide="file-text"></i> PDF to Word
            </a></li>
<li><a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100" data-route="tool-word-to-pdf" href="#tool-word-to-pdf">
<i className="w-5 h-5 text-gray-500" data-lucide="file-type-2"></i> Word to PDF
            </a></li>
<li><a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100" data-route="tool-pdf-to-excel" href="#tool-pdf-to-excel">
<i className="w-5 h-5 text-gray-500" data-lucide="table"></i> PDF to Excel
            </a></li>
<li><a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100" data-route="tool-pdf-to-ppt" href="#tool-pdf-to-ppt">
<i className="w-5 h-5 text-gray-500" data-lucide="presentation"></i> PDF to PowerPoint
            </a></li>
<li><a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100" data-route="tool-pdf-to-image" href="#tool-pdf-to-image">
<i className="w-5 h-5 text-gray-500" data-lucide="image"></i> PDF to Image
            </a></li>
<li><a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100" data-route="tool-image-to-pdf" href="#tool-image-to-pdf">
<i className="w-5 h-5 text-gray-500" data-lucide="images"></i> Image to PDF
            </a></li>
<li><a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100" data-route="tool-merge-pdf" href="#tool-merge-pdf">
<i className="w-5 h-5 text-gray-500" data-lucide="square-split-horizontal"></i> Merge PDF
            </a></li>
<li><a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100" data-route="tool-split-pdf" href="#tool-split-pdf">
<i className="w-5 h-5 text-gray-500" data-lucide="square-split-vertical"></i> Split PDF
            </a></li>
<li><a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100" data-route="tool-compress-pdf" href="#tool-compress-pdf">
<i className="w-5 h-5 text-gray-500" data-lucide="shrink"></i> Compress PDF
            </a></li>
<li><a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100" data-route="tool-rotate-pdf" href="#tool-rotate-pdf">
<i className="w-5 h-5 text-gray-500" data-lucide="rotate-ccw"></i> Rotate PDF
            </a></li>
<li><a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100" data-route="tool-unlock-pdf" href="#tool-unlock-pdf">
<i className="w-5 h-5 text-gray-500" data-lucide="unlock"></i> Unlock PDF
            </a></li>
<li><a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100" data-route="tool-protect-pdf" href="#tool-protect-pdf">
<i className="w-5 h-5 text-gray-500" data-lucide="lock"></i> Protect PDF
            </a></li>
</ul>
<div className="mt-6 text-[11px] uppercase tracking-wider text-gray-500 px-2 mb-2">Company</div>
<ul className="space-y-1">
<li><a className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100" data-route="pricing" href="#pricing">
<i className="w-5 h-5 text-gray-500 group-hover:text-gray-900" data-lucide="badge-dollar-sign"></i> Pricing
            </a></li>
<li><a className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100" data-route="about" href="#about">
<i className="w-5 h-5 text-gray-500 group-hover:text-gray-900" data-lucide="info"></i> About
            </a></li>
<li><a className="nav-link group flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100" data-route="contact" href="#contact">
<i className="w-5 h-5 text-gray-500 group-hover:text-gray-900" data-lucide="life-buoy"></i> Contact
            </a></li>
</ul>
</nav>

<div className="px-4 py-4 border-t border-gray-200">
<div className="flex items-center gap-3">
<img alt="User" className="h-9 w-9 rounded-lg object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=100&amp;h=100&amp;fit=crop&amp;auto=format"/>
<div className="flex-1">
<div className="text-sm font-medium">Taylor Jenkins</div>
<div className="text-xs text-gray-500">Free Plan</div>
</div>
<button className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md hover:bg-gray-100 transition">
<i className="w-4 h-4" data-lucide="log-in"></i>
<span>Sign In</span>
</button>
</div>
</div>
</aside>

<div className="lg:hidden fixed inset-x-0 top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
<div className="h-14 flex items-center justify-between px-4">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-lg hover:bg-gray-100 text-gray-700" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-semibold tracking-tight">PC</div>
<span className="text-sm font-semibold tracking-tight">PDF Conversion</span>
</div>
<a className="inline-flex items-center gap-2 px-3 h-9 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition" data-route="tool-pdf-to-word" href="#tool-pdf-to-word">
<i className="w-4 h-4" data-lucide="upload"></i> Upload PDF
          </a>
</div>
</div>
<div className="lg:hidden fixed inset-0 z-40 hidden" id="drawer">
<div className="absolute inset-0 bg-black/30" id="drawerOverlay"></div>
<div className="absolute inset-y-0 left-0 bg-white w-80 border-r border-gray-200 p-4 overflow-y-auto">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-semibold tracking-tight">PC</div>
<span className="text-sm font-semibold tracking-tight">PDF Conversion</span>
</div>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100" id="drawerClose">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="space-y-2">
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="home" href="#home">Home</a>
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="dashboard" href="#dashboard">Dashboard</a>
<div className="pt-2 text-[11px] uppercase tracking-wider text-gray-500 px-1">Tools</div>
<div className="grid grid-cols-2 gap-2">
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="tool-pdf-to-word" href="#tool-pdf-to-word">PDF to Word</a>
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="tool-word-to-pdf" href="#tool-word-to-pdf">Word to PDF</a>
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="tool-pdf-to-excel" href="#tool-pdf-to-excel">PDF to Excel</a>
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="tool-pdf-to-ppt" href="#tool-pdf-to-ppt">PDF to PPT</a>
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="tool-pdf-to-image" href="#tool-pdf-to-image">PDF to Image</a>
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="tool-image-to-pdf" href="#tool-image-to-pdf">Image to PDF</a>
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="tool-merge-pdf" href="#tool-merge-pdf">Merge PDF</a>
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="tool-split-pdf" href="#tool-split-pdf">Split PDF</a>
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="tool-compress-pdf" href="#tool-compress-pdf">Compress PDF</a>
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="tool-rotate-pdf" href="#tool-rotate-pdf">Rotate PDF</a>
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="tool-unlock-pdf" href="#tool-unlock-pdf">Unlock PDF</a>
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="tool-protect-pdf" href="#tool-protect-pdf">Protect PDF</a>
</div>
<div className="pt-2 text-[11px] uppercase tracking-wider text-gray-500 px-1">Company</div>
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="pricing" href="#pricing">Pricing</a>
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="about" href="#about">About</a>
<a className="nav-link block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm" data-route="contact" href="#contact">Contact</a>
</div>
</div>
</div>

<main className="flex-1 flex flex-col lg:ml-0">

<header className="hidden lg:flex items-center justify-between h-18 border-b border-gray-200 px-6">
<div className="flex items-center gap-3">
<div className="relative">
<i className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="h-10 w-[360px] pl-9 pr-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-300 text-sm placeholder:text-gray-400 transition" placeholder="Search tools, files..." type="text"/>
</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 px-3 h-10 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition" data-route="tool-pdf-to-word" href="#tool-pdf-to-word">
<i className="w-4 h-4" data-lucide="upload"></i> Upload PDF
            </a>
<button className="inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">
<i className="w-4 h-4" data-lucide="user"></i> Account
            </button>
</div>
</header>

<div className="flex-1 overflow-y-auto">

<section className="page-section" id="page-home">

<div className="relative">
<div className="px-4 sm:px-6 lg:px-10 pt-[76px] lg:pt-10 pb-10">
<div className="grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-6 space-y-5">
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-gray-200 text-xs text-gray-600">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
                      New: Smarter OCR, higher fidelity conversions
                    </div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                      Convert, Merge, Split, and Manage Your PDFs Effortlessly
                    </h1>
<p className="text-[15px] text-gray-600 leading-relaxed">
                      The all-in-one toolkit for PDFs. Fast, secure, and designed for productivity. Drag &amp; drop your files and get pixel-perfect results.
                    </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-indigo-600 text-white text-[15px] font-medium hover:bg-indigo-700 transition" data-route="tool-pdf-to-word" href="#tool-pdf-to-word">
<i className="w-5 h-5" data-lucide="upload-cloud"></i> Upload PDF
                      </a>
<a className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg border border-gray-200 hover:bg-gray-50 text-[15px]" data-route="tools" href="#tools">
<i className="w-5 h-5" data-lucide="wrench"></i> Explore Tools
                      </a>
</div>
<div className="flex items-center gap-6 pt-2">
<div className="flex -space-x-2">
<img alt="User 1" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=100&amp;h=100&amp;fit=crop&amp;auto=format"/>
<img alt="User 2" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=100&amp;h=100&amp;fit=crop&amp;auto=format"/>
<img alt="User 3" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=100&amp;h=100&amp;fit=crop&amp;auto=format"/>
</div>
<div className="text-sm text-gray-600">Trusted by 200k+ users globally</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="relative rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
<div className="absolute inset-x-0 top-0 h-9 bg-gray-50 border-b border-gray-200 flex items-center gap-1 px-3">
<span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
<span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
</div>
<div className="pt-12 p-4 sm:p-6">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

<button className="tool-shortcut group text-left p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-pdf-to-word">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-indigo-50 text-indigo-600">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<div className="mt-3 text-sm font-medium">PDF to Word</div>
<div className="text-xs text-gray-500">Editable .docx</div>
</button>
<button className="tool-shortcut group text-left p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-merge-pdf">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-indigo-50 text-indigo-600">
<i className="w-5 h-5" data-lucide="square-split-horizontal"></i>
</div>
<div className="mt-3 text-sm font-medium">Merge PDF</div>
<div className="text-xs text-gray-500">Combine files</div>
</button>
<button className="tool-shortcut group text-left p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-split-pdf">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-indigo-50 text-indigo-600">
<i className="w-5 h-5" data-lucide="square-split-vertical"></i>
</div>
<div className="mt-3 text-sm font-medium">Split PDF</div>
<div className="text-xs text-gray-500">Extract pages</div>
</button>
<button className="tool-shortcut group text-left p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-compress-pdf">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-indigo-50 text-indigo-600">
<i className="w-5 h-5" data-lucide="shrink"></i>
</div>
<div className="mt-3 text-sm font-medium">Compress PDF</div>
<div className="text-xs text-gray-500">Smaller size</div>
</button>
<button className="tool-shortcut group text-left p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-rotate-pdf">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-indigo-50 text-indigo-600">
<i className="w-5 h-5" data-lucide="rotate-ccw"></i>
</div>
<div className="mt-3 text-sm font-medium">Rotate PDF</div>
<div className="text-xs text-gray-500">Fix orientation</div>
</button>
<button className="tool-shortcut group text-left p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-protect-pdf">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-indigo-50 text-indigo-600">
<i className="w-5 h-5" data-lucide="lock"></i>
</div>
<div className="mt-3 text-sm font-medium">Protect PDF</div>
<div className="text-xs text-gray-500">Add password</div>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 border border-gray-200 rounded-xl p-4 sm:p-6">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
<div className="text-center text-gray-500 text-sm tracking-tight">ALPHA</div>
<div className="text-center text-gray-500 text-sm tracking-tight">NOVA</div>
<div className="text-center text-gray-500 text-sm tracking-tight">ZENWARE</div>
<div className="text-center text-gray-500 text-sm tracking-tight">QPOINT</div>
<div className="text-center text-gray-500 text-sm tracking-tight">CORTEX</div>
<div className="text-center text-gray-500 text-sm tracking-tight">PIXEL</div>
</div>
</div>
</div>
</div>

<div className="px-4 sm:px-6 lg:px-10 py-8">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">All Tools</h2>
<a className="text-sm text-indigo-700 hover:text-indigo-800" data-route="tools" href="#tools">View full list</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-pdf-to-word" href="#tool-pdf-to-word">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<div>
<div className="text-sm font-medium">PDF to Word</div>
<div className="text-xs text-gray-500">Convert PDFs to editable Word documents</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-word-to-pdf" href="#tool-word-to-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="file-type-2"></i>
</div>
<div>
<div className="text-sm font-medium">Word to PDF</div>
<div className="text-xs text-gray-500">Preserve layout with precise formatting</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-pdf-to-excel" href="#tool-pdf-to-excel">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="table"></i>
</div>
<div>
<div className="text-sm font-medium">PDF to Excel</div>
<div className="text-xs text-gray-500">Extract tables into Excel spreadsheets</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-pdf-to-ppt" href="#tool-pdf-to-ppt">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="presentation"></i>
</div>
<div>
<div className="text-sm font-medium">PDF to PowerPoint</div>
<div className="text-xs text-gray-500">Turn PDFs into slide decks</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-pdf-to-image" href="#tool-pdf-to-image">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="image"></i>
</div>
<div>
<div className="text-sm font-medium">PDF to Image</div>
<div className="text-xs text-gray-500">Export pages as high-res images</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-image-to-pdf" href="#tool-image-to-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="images"></i>
</div>
<div>
<div className="text-sm font-medium">Image to PDF</div>
<div className="text-xs text-gray-500">Combine images into a single PDF</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-merge-pdf" href="#tool-merge-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="square-split-horizontal"></i>
</div>
<div>
<div className="text-sm font-medium">Merge PDF</div>
<div className="text-xs text-gray-500">Combine multiple PDFs</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-split-pdf" href="#tool-split-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="square-split-vertical"></i>
</div>
<div>
<div className="text-sm font-medium">Split PDF</div>
<div className="text-xs text-gray-500">Split by pages or range</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-compress-pdf" href="#tool-compress-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="shrink"></i>
</div>
<div>
<div className="text-sm font-medium">Compress PDF</div>
<div className="text-xs text-gray-500">Reduce file size</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-rotate-pdf" href="#tool-rotate-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="rotate-ccw"></i>
</div>
<div>
<div className="text-sm font-medium">Rotate PDF</div>
<div className="text-xs text-gray-500">Rotate pages 90/180/270°</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-unlock-pdf" href="#tool-unlock-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="unlock"></i>
</div>
<div>
<div className="text-sm font-medium">Unlock PDF</div>
<div className="text-xs text-gray-500">Remove password protection</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-protect-pdf" href="#tool-protect-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="lock"></i>
</div>
<div>
<div className="text-sm font-medium">Protect PDF</div>
<div className="text-xs text-gray-500">Add password to your PDFs</div>
</div>
</div>
</a>
</div>
</div>

<div className="px-4 sm:px-6 lg:px-10 py-8">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">What users say</h2>
<div className="text-sm text-gray-500">Rated 4.9/5</div>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="rounded-xl border border-gray-200 p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<img alt="Ava" className="h-9 w-9 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="text-sm font-medium">Ava Martinez</div>
<div className="text-xs text-gray-500">Legal Associate</div>
</div>
</div>
<p className="mt-3 text-sm text-gray-700">Lightning fast conversions and the interface is clean. Merging and splitting documents is a breeze.</p>
</div>
<div className="rounded-xl border border-gray-200 p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<img alt="Jordan" className="h-9 w-9 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=100&amp;h=100&amp;fit=crop&amp;auto=format"/>
<div>
<div className="text-sm font-medium">Jordan Lee</div>
<div className="text-xs text-gray-500">Operations</div>
</div>
</div>
<p className="mt-3 text-sm text-gray-700">Best PDF compression with minimal quality loss. Saved our team hours every week.</p>
</div>
<div className="rounded-xl border border-gray-200 p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<img alt="Maya" className="h-9 w-9 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=100&amp;h=100&amp;fit=crop&amp;auto=format"/>
<div>
<div className="text-sm font-medium">Maya Patel</div>
<div className="text-xs text-gray-500">Product Designer</div>
</div>
</div>
<p className="mt-3 text-sm text-gray-700">The best UI I’ve used for file utilities. Intuitive, beautiful, and reliable.</p>
</div>
</div>
</div>

<div className="px-4 sm:px-6 lg:px-10 py-8">
<div className="grid lg:grid-cols-3 gap-6">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Frequently asked questions</h2>
<p className="text-sm text-gray-600 mt-1">Everything you need to know about the product and billing.</p>
</div>
<div className="lg:col-span-2 space-y-3">
<details className="group rounded-xl border border-gray-200 p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium">Is my data secure?</span>
<i className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-gray-600">Yes. Files are processed securely. You can delete them anytime, and they automatically expire after a short window.</p>
</details>
<details className="group rounded-xl border border-gray-200 p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium">Do you have limits on file size?</span>
<i className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-gray-600">Free plan supports files up to 25MB. Pro increases this to 2GB and adds priority processing.</p>
</details>
<details className="group rounded-xl border border-gray-200 p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium">Can I merge multiple PDFs?</span>
<i className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-gray-600">Yes. Use the Merge tool to upload multiple files, reorder them, and export a unified PDF.</p>
</details>
</div>
</div>
</div>

<footer className="mt-6 border-t border-gray-200">
<div className="px-4 sm:px-6 lg:px-10 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div>
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold tracking-tight">PC</div>
<span className="text-sm font-semibold tracking-tight">PDF Conversion</span>
</div>
<p className="text-sm text-gray-600 mt-2">Powerful PDF tools that just work.</p>
</div>
<div>
<div className="text-sm font-medium mb-2">Product</div>
<ul className="text-sm text-gray-600 space-y-1">
<li><a className="hover:text-gray-900" data-route="tools" href="#tools">All Tools</a></li>
<li><a className="hover:text-gray-900" data-route="pricing" href="#pricing">Pricing</a></li>
<li><a className="hover:text-gray-900" data-route="dashboard" href="#dashboard">Dashboard</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium mb-2">Company</div>
<ul className="text-sm text-gray-600 space-y-1">
<li><a className="hover:text-gray-900" data-route="about" href="#about">About</a></li>
<li><a className="hover:text-gray-900" data-route="contact" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium mb-2">Legal</div>
<ul className="text-sm text-gray-600 space-y-1">
<li><a className="hover:text-gray-900" href="#">Terms</a></li>
<li><a className="hover:text-gray-900" href="#">Privacy</a></li>
<li><a className="hover:text-gray-900" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="px-4 sm:px-6 lg:px-10 py-4 border-t border-gray-200 text-xs text-gray-500">
                © <span id="year"></span> PDF Conversion. All rights reserved.
              </div>
</footer>
</section>

<section className="page-section hidden" id="page-tools">
<div className="px-4 sm:px-6 lg:px-10 py-8">
<div className="flex items-center justify-between mb-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight">All PDF Tools</h1>
<p className="text-sm text-gray-600 mt-1">Convert, edit, protect, and optimize your PDF files.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<div className="relative">
<i className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="h-10 w-64 pl-9 pr-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-300 text-sm placeholder:text-gray-400 transition" placeholder="Search tools" type="text"/>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">


<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-pdf-to-word" href="#tool-pdf-to-word">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<div>
<div className="text-sm font-medium">PDF to Word</div>
<div className="text-xs text-gray-500">Editable .docx</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-word-to-pdf" href="#tool-word-to-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="file-type-2"></i>
</div>
<div>
<div className="text-sm font-medium">Word to PDF</div>
<div className="text-xs text-gray-500">Lock the layout</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-pdf-to-excel" href="#tool-pdf-to-excel">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="table"></i>
</div>
<div>
<div className="text-sm font-medium">PDF to Excel</div>
<div className="text-xs text-gray-500">Extract tables</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-pdf-to-ppt" href="#tool-pdf-to-ppt">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="presentation"></i>
</div>
<div>
<div className="text-sm font-medium">PDF to PowerPoint</div>
<div className="text-xs text-gray-500">Slides from PDFs</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-pdf-to-image" href="#tool-pdf-to-image">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="image"></i>
</div>
<div>
<div className="text-sm font-medium">PDF to Image</div>
<div className="text-xs text-gray-500">High quality export</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-image-to-pdf" href="#tool-image-to-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="images"></i>
</div>
<div>
<div className="text-sm font-medium">Image to PDF</div>
<div className="text-xs text-gray-500">Convert JPG/PNG</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-merge-pdf" href="#tool-merge-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="square-split-horizontal"></i>
</div>
<div>
<div className="text-sm font-medium">Merge PDF</div>
<div className="text-xs text-gray-500">Combine files</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-split-pdf" href="#tool-split-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="square-split-vertical"></i>
</div>
<div>
<div className="text-sm font-medium">Split PDF</div>
<div className="text-xs text-gray-500">Extract pages</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-compress-pdf" href="#tool-compress-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="shrink"></i>
</div>
<div>
<div className="text-sm font-medium">Compress PDF</div>
<div className="text-xs text-gray-500">Reduce size</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-rotate-pdf" href="#tool-rotate-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="rotate-ccw"></i>
</div>
<div>
<div className="text-sm font-medium">Rotate PDF</div>
<div className="text-xs text-gray-500">Fix orientation</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-unlock-pdf" href="#tool-unlock-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="unlock"></i>
</div>
<div>
<div className="text-sm font-medium">Unlock PDF</div>
<div className="text-xs text-gray-500">Remove password</div>
</div>
</div>
</a>
<a className="group rounded-xl border border-gray-200 p-4 hover:border-indigo-300 hover:shadow-sm transition" data-route="tool-protect-pdf" href="#tool-protect-pdf">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-5 h-5" data-lucide="lock"></i>
</div>
<div>
<div className="text-sm font-medium">Protect PDF</div>
<div className="text-xs text-gray-500">Add password</div>
</div>
</div>
</a>
</div>
</div>
</section>



<section className="page-section hidden" id="page-tool-pdf-to-word">
<div className="px-4 sm:px-6 lg:px-10 py-8 max-w-6xl">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight">PDF to Word Converter</h1>
<p className="text-sm text-gray-600 mt-1">Turn your PDFs into fully editable Word documents while preserving layout and fonts.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm" data-route="tools" href="#tools">
<i className="w-4 h-4" data-lucide="grid-2x2"></i>
                  All Tools
                </a>
</div>

<div className="mt-6 rounded-2xl border border-gray-200 p-5">
<div className="flex flex-col md:flex-row items-center md:items-start gap-5">
<div className="flex-1 w-full">
<div className="dropzone relative rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 transition p-6 text-center" data-dropzone="pdf-to-word">
<div className="mx-auto h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-6 h-6" data-lucide="upload-cloud"></i>
</div>
<div className="mt-3 text-sm">
<span className="font-medium">Drag &amp; drop</span> your PDF here or
                        <label className="text-indigo-700 hover:text-indigo-800 cursor-pointer"> browse
                          <input accept=".pdf" className="sr-only file-input" data-multiple="false" type="file"/>
</label>
</div>
<div className="text-xs text-gray-500 mt-1">Max 25MB on Free. No file leaves your control without consent.</div>
</div>

<div className="upload-state hidden mt-4 space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
<div className="flex items-center gap-3 min-w-0">
<div className="h-9 w-9 rounded-lg bg-gray-50 grid place-items-center">
<i className="w-4 h-4 text-gray-600" data-lucide="file"></i>
</div>
<div className="min-w-0">
<div className="truncate text-sm font-medium file-name">Document.pdf</div>
<div className="text-xs text-gray-500 file-size">1.2 MB</div>
</div>
</div>
<div className="text-xs text-gray-600 status-text">Ready</div>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="progress-bar h-full bg-indigo-600 w-0 transition-all duration-700"></div>
</div>
<div className="flex items-center gap-2">
<button className="btn-start inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
<i className="w-4 h-4" data-lucide="play"></i> Convert to Word
                        </button>
<button className="btn-cancel inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">
<i className="w-4 h-4" data-lucide="x"></i> Cancel
                        </button>
</div>
</div>
</div>

<div className="md:w-80 w-full">
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-sm font-medium mb-3">How it works</div>
<ol className="space-y-3">
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">1</div>
<div className="text-sm">Upload your PDF</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">2</div>
<div className="text-sm">We process with OCR for editable text</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">3</div>
<div className="text-sm">Download your .docx file</div>
</li>
</ol>
</div>
<button className="btn-download mt-4 w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed" disabled="">
<i className="w-4 h-4" data-lucide="download"></i> Download Result
                    </button>
<div className="text-xs text-gray-500 text-center mt-2">By converting, you agree to our Terms.</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-tool-word-to-pdf">
<div className="px-4 sm:px-6 lg:px-10 py-8 max-w-6xl">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Word to PDF Converter</h1>
<p className="text-sm text-gray-600 mt-1">Create perfect PDFs from Word files that keep your layout intact.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm" data-route="tools" href="#tools">
<i className="w-4 h-4" data-lucide="grid-2x2"></i> All Tools
                </a>
</div>
<div className="mt-6 rounded-2xl border border-gray-200 p-5">
<div className="flex flex-col md:flex-row items-center md:items-start gap-5">
<div className="flex-1 w-full">
<div className="dropzone relative rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 transition p-6 text-center" data-dropzone="word-to-pdf">
<div className="mx-auto h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-6 h-6" data-lucide="upload-cloud"></i>
</div>
<div className="mt-3 text-sm">
<span className="font-medium">Drag &amp; drop</span> your Word file here or
                        <label className="text-indigo-700 hover:text-indigo-800 cursor-pointer"> browse
                          <input accept=".doc,.docx" className="sr-only file-input" data-multiple="false" type="file"/>
</label>
</div>
<div className="text-xs text-gray-500 mt-1">Supports .doc and .docx</div>
</div>
<div className="upload-state hidden mt-4 space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
<div className="flex items-center gap-3 min-w-0">
<div className="h-9 w-9 rounded-lg bg-gray-50 grid place-items-center">
<i className="w-4 h-4 text-gray-600" data-lucide="file-type-2"></i>
</div>
<div className="min-w-0">
<div className="truncate text-sm font-medium file-name">File.docx</div>
<div className="text-xs text-gray-500 file-size">0 MB</div>
</div>
</div>
<div className="text-xs text-gray-600 status-text">Ready</div>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="progress-bar h-full bg-indigo-600 w-0 transition-all duration-700"></div>
</div>
<div className="flex items-center gap-2">
<button className="btn-start inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
<i className="w-4 h-4" data-lucide="play"></i> Convert to PDF
                        </button>
<button className="btn-cancel inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">
<i className="w-4 h-4" data-lucide="x"></i> Cancel
                        </button>
</div>
</div>
</div>
<div className="md:w-80 w-full">
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-sm font-medium mb-3">How it works</div>
<ol className="space-y-3">
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">1</div>
<div className="text-sm">Upload your .doc or .docx</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">2</div>
<div className="text-sm">We convert it server-side with precise rendering</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">3</div>
<div className="text-sm">Download your pixel-perfect PDF</div>
</li>
</ol>
</div>
<button className="btn-download mt-4 w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed" disabled="">
<i className="w-4 h-4" data-lucide="download"></i> Download PDF
                    </button>
<div className="text-xs text-gray-500 text-center mt-2">By converting, you agree to our Terms.</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="-tool-pdf-to-excel">
<div className="px-4 sm:px-6 lg:px-10 py-8 max-w-6xl">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight">PDF to Excel</h1>
<p className="text-sm text-gray-600 mt-1">Extract tables and data from PDFs into clean .xlsx spreadsheets.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm" data-route="tools" href="#tools">
<i className="w-4 h-4" data-lucide="grid-2x2"></i> All Tools
                </a>
</div>
<div className="mt-6 rounded-2xl border border-gray-200 p-5">
<div className="flex flex-col md:flex-row items-center md:items-start gap-5">
<div className="flex-1 w-full">
<div className="dropzone relative rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 transition p-6 text-center" data-dropzone="pdf-to-excel">
<div className="mx-auto h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-6 h-6" data-lucide="table"></i>
</div>
<div className="mt-3 text-sm">
<span className="font-medium">Drag &amp; drop</span> your PDF here or
                        <label className="text-indigo-700 hover:text-indigo-800 cursor-pointer"> browse
                          <input accept=".pdf" className="sr-only file-input" data-multiple="false" type="file"/>
</label>
</div>
<div className="text-xs text-gray-500 mt-1">Optimized for tables and tabular data</div>
</div>
<div className="upload-state hidden mt-4 space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
<div className="flex items-center gap-3 min-w-0">
<div className="h-9 w-9 rounded-lg bg-gray-50 grid place-items-center">
<i className="w-4 h-4 text-gray-600" data-lucide="file"></i>
</div>
<div className="min-w-0">
<div className="truncate text-sm font-medium file-name">Data.pdf</div>
<div className="text-xs text-gray-500 file-size">0 MB</div>
</div>
</div>
<div className="text-xs text-gray-600 status-text">Ready</div>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="progress-bar h-full bg-indigo-600 w-0 transition-all duration-700"></div>
</div>
<div className="flex items-center gap-2">
<button className="btn-start inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
<i className="w-4 h-4" data-lucide="play"></i> Convert to Excel
                        </button>
<button className="btn-cancel inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">
<i className="w-4 h-4" data-lucide="x"></i> Cancel
                        </button>
</div>
</div>
</div>
<div className="md:w-80 w-full">
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-sm font-medium mb-3">How it works</div>
<ol className="space-y-3">
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">1</div>
<div className="text-sm">Upload your PDF with tables</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">2</div>
<div className="text-sm">We detect rows, columns, and headers</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">3</div>
<div className="text-sm">Download your .xlsx file</div>
</li>
</ol>
</div>
<button className="btn-download mt-4 w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed" disabled="">
<i className="w-4 h-4" data-lucide="download"></i> Download Excel
                    </button>
<div className="text-xs text-gray-500 text-center mt-2">Supports multiple sheets.</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-tool-pdf-to-ppt">
<div className="px-4 sm:px-6 lg:px-10 py-8 max-w-6xl">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight">PDF to PowerPoint</h1>
<p className="text-sm text-gray-600 mt-1">Turn PDFs into editable slides for quick presentations.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm" data-route="tools" href="#tools">
<i className="w-4 h-4" data-lucide="grid-2x2"></i> All Tools
                </a>
</div>
<div className="mt-6 rounded-2xl border border-gray-200 p-5">
<div className="flex flex-col md:flex-row items-center md:items-start gap-5">
<div className="flex-1 w-full">
<div className="dropzone relative rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 transition p-6 text-center" data-dropzone="pdf-to-ppt">
<div className="mx-auto h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-6 h-6" data-lucide="presentation"></i>
</div>
<div className="mt-3 text-sm">
<span className="font-medium">Drag &amp; drop</span> your PDF here or
                        <label className="text-indigo-700 hover:text-indigo-800 cursor-pointer"> browse
                          <input accept=".pdf" className="sr-only file-input" data-multiple="false" type="file"/>
</label>
</div>
<div className="text-xs text-gray-500 mt-1">Each page becomes a slide with editable elements</div>
</div>
<div className="upload-state hidden mt-4 space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
<div className="flex items-center gap-3 min-w-0">
<div className="h-9 w-9 rounded-lg bg-gray-50 grid place-items-center">
<i className="w-4 h-4 text-gray-600" data-lucide="file"></i>
</div>
<div className="min-w-0">
<div className="truncate text-sm font-medium file-name">Slides.pdf</div>
<div className="text-xs text-gray-500 file-size">0 MB</div>
</div>
</div>
<div className="text-xs text-gray-600 status-text">Ready</div>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="progress-bar h-full bg-indigo-600 w-0 transition-all duration-700"></div>
</div>
<div className="flex items-center gap-2">
<button className="btn-start inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
<i className="w-4 h-4" data-lucide="play"></i> Convert to PPTX
                        </button>
<button className="btn-cancel inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">
<i className="w-4 h-4" data-lucide="x"></i> Cancel
                        </button>
</div>
</div>
</div>
<div className="md:w-80 w-full">
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-sm font-medium mb-3">How it works</div>
<ol className="space-y-3">
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">1</div>
<div className="text-sm">Upload your PDF</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">2</div>
<div className="text-sm">We build slides from each page</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">3</div>
<div className="text-sm">Download your .pptx</div>
</li>
</ol>
</div>
<button className="btn-download mt-4 w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed" disabled="">
<i className="w-4 h-4" data-lucide="download"></i> Download PPTX
                    </button>
<div className="text-xs text-gray-500 text-center mt-2">Preserves text where possible.</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-tool-pdf-to-image">
<div className="px-4 sm:px-6 lg:px-10 py-8 max-w-6xl">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight">PDF to Image</h1>
<p className="text-sm text-gray-600 mt-1">Export pages to high-resolution PNG or JPG images.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm" data-route="tools" href="#tools">
<i className="w-4 h-4" data-lucide="grid-2x2"></i> All Tools
                </a>
</div>
<div className="mt-6 rounded-2xl border border-gray-200 p-5">
<div className="flex flex-col md:flex-row items-center md:items-start gap-5">
<div className="flex-1 w-full">
<div className="dropzone relative rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 transition p-6 text-center" data-dropzone="pdf-to-image">
<div className="mx-auto h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-6 h-6" data-lucide="image"></i>
</div>
<div className="mt-3 text-sm">
<span className="font-medium">Drag &amp; drop</span> your PDF here or
                        <label className="text-indigo-700 hover:text-indigo-800 cursor-pointer"> browse
                          <input accept=".pdf" className="sr-only file-input" data-multiple="false" type="file"/>
</label>
</div>
<div className="text-xs text-gray-500 mt-1">Choose format and DPI after upload</div>
</div>
<div className="upload-state hidden mt-4 space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
<div className="flex items-center gap-3 min-w-0">
<div className="h-9 w-9 rounded-lg bg-gray-50 grid place-items-center">
<i className="w-4 h-4 text-gray-600" data-lucide="file"></i>
</div>
<div className="min-w-0">
<div className="truncate text-sm font-medium file-name">Pages.pdf</div>
<div className="text-xs text-gray-500 file-size">0 MB</div>
</div>
</div>
<div className="text-xs text-gray-600 status-text">Ready</div>
</div>
<div className="grid sm:grid-cols-3 gap-2">
<select className="option-format h-9 rounded-lg border border-gray-200 px-3 text-sm">
<option value="png">PNG</option>
<option value="jpg">JPG</option>
</select>
<select className="option-dpi h-9 rounded-lg border border-gray-200 px-3 text-sm">
<option value="150">150 DPI</option>
<option value="300">300 DPI</option>
<option value="600">600 DPI</option>
</select>
<select className="option-pages h-9 rounded-lg border border-gray-200 px-3 text-sm">
<option value="all">All pages</option>
<option value="range">Page range</option>
</select>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="progress-bar h-full bg-indigo-600 w-0 transition-all duration-700"></div>
</div>
<div className="flex items-center gap-2">
<button className="btn-start inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
<i className="w-4 h-4" data-lucide="play"></i> Export Images
                        </button>
<button className="btn-cancel inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">
<i className="w-4 h-4" data-lucide="x"></i> Cancel
                        </button>
</div>
</div>
</div>
<div className="md:w-80 w-full">
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-sm font-medium mb-3">How it works</div>
<ol className="space-y-3">
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">1</div>
<div className="text-sm">Upload your PDF</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">2</div>
<div className="text-sm">Choose format, DPI, and pages</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">3</div>
<div className="text-sm">Download your images</div>
</li>
</ol>
</div>
<button className="btn-download mt-4 w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed" disabled="">
<i className="w-4 h-4" data-lucide="download"></i> Download Images
                    </button>
<div className="text-xs text-gray-500 text-center mt-2">High DPI for print quality.</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-tool-image-to-pdf">
<div className="px-4 sm:px-6 lg:px-10 py-8 max-w-6xl">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Image to PDF</h1>
<p className="text-sm text-gray-600 mt-1">Combine images into a single, shareable PDF.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm" data-route="tools" href="#tools">
<i className="w-4 h-4" data-lucide="grid-2x2"></i> All Tools
                </a>
</div>
<div className="mt-6 rounded-2xl border border-gray-200 p-5">
<div className="flex flex-col md:flex-row items-center md:items-start gap-5">
<div className="flex-1 w-full">
<div className="dropzone relative rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 transition p-6 text-center" data-dropzone="image-to-pdf">
<div className="mx-auto h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-6 h-6" data-lucide="images"></i>
</div>
<div className="mt-3 text-sm">
<span className="font-medium">Drag &amp; drop</span> your images or
                        <label className="text-indigo-700 hover:text-indigo-800 cursor-pointer"> browse
                          <input accept="image/*" className="sr-only file-input" data-multiple="true" multiple="" type="file"/>
</label>
</div>
<div className="text-xs text-gray-500 mt-1">Supports JPG, PNG, and more. Reorder after upload.</div>
</div>
<div className="upload-state hidden mt-4 space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
<div className="flex items-center gap-3 min-w-0">
<div className="h-9 w-9 rounded-lg bg-gray-50 grid place-items-center">
<i className="w-4 h-4 text-gray-600" data-lucide="image"></i>
</div>
<div className="min-w-0">
<div className="truncate text-sm font-medium file-name">3 files selected</div>
<div className="text-xs text-gray-500 file-size">0 MB total</div>
</div>
</div>
<div className="text-xs text-gray-600 status-text">Ready</div>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="progress-bar h-full bg-indigo-600 w-0 transition-all duration-700"></div>
</div>
<div className="flex items-center gap-2">
<button className="btn-start inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
<i className="w-4 h-4" data-lucide="play"></i> Create PDF
                        </button>
<button className="btn-cancel inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">
<i className="w-4 h-4" data-lucide="x"></i> Cancel
                        </button>
</div>
</div>
</div>
<div className="md:w-80 w-full">
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-sm font-medium mb-3">How it works</div>
<ol className="space-y-3">
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">1</div>
<div className="text-sm">Upload one or more images</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">2</div>
<div className="text-sm">Reorder pages, set margins and size</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">3</div>
<div className="text-sm">Export your PDF</div>
</li>
</ol>
</div>
<button className="btn-download mt-4 w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed" disabled="">
<i className="w-4 h-4" data-lucide="download"></i> Download PDF
                    </button>
<div className="text-xs text-gray-500 text-center mt-2">We preserve original image quality.</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-tool-merge-pdf">
<div className="px-4 sm:px-6 lg:px-10 py-8 max-w-6xl">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Merge PDF</h1>
<p className="text-sm text-gray-600 mt-1">Combine multiple PDFs into a single file in any order.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm" data-route="tools" href="#tools">
<i className="w-4 h-4" data-lucide="grid-2x2"></i> All Tools
                </a>
</div>
<div className="mt-6 rounded-2xl border border-gray-200 p-5">
<div className="flex flex-col md:flex-row items-center md:items-start gap-5">
<div className="flex-1 w-full">
<div className="dropzone relative rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 transition p-6 text-center" data-dropzone="merge-pdf">
<div className="mx-auto h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-6 h-6" data-lucide="square-split-horizontal"></i>
</div>
<div className="mt-3 text-sm">
<span className="font-medium">Drag &amp; drop</span> your PDFs or
                        <label className="text-indigo-700 hover:text-indigo-800 cursor-pointer"> browse
                          <input accept=".pdf" className="sr-only file-input" data-multiple="true" multiple="" type="file"/>
</label>
</div>
<div className="text-xs text-gray-500 mt-1">Upload at least two PDFs</div>
</div>
<div className="upload-state hidden mt-4 space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
<div className="flex items-center gap-3 min-w-0">
<div className="h-9 w-9 rounded-lg bg-gray-50 grid place-items-center">
<i className="w-4 h-4 text-gray-600" data-lucide="files"></i>
</div>
<div className="min-w-0">
<div className="truncate text-sm font-medium file-name">0 files selected</div>
<div className="text-xs text-gray-500 file-size">0 MB total</div>
</div>
</div>
<div className="text-xs text-gray-600 status-text">Ready</div>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="progress-bar h-full bg-indigo-600 w-0 transition-all duration-700"></div>
</div>
<div className="flex items-center gap-2">
<button className="btn-start inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
<i className="w-4 h-4" data-lucide="merge"></i> Merge Files
                        </button>
<button className="btn-cancel inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">
<i className="w-4 h-4" data-lucide="x"></i> Cancel
                        </button>
</div>
</div>
</div>
<div className="md:w-80 w-full">
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-sm font-medium mb-3">How it works</div>
<ol className="space-y-3">
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">1</div>
<div className="text-sm">Upload multiple PDFs</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">2</div>
<div className="text-sm">Reorder to set the sequence</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">3</div>
<div className="text-sm">Export the merged PDF</div>
</li>
</ol>
</div>
<button className="btn-download mt-4 w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed" disabled="">
<i className="w-4 h-4" data-lucide="download"></i> Download PDF
                    </button>
<div className="text-xs text-gray-500 text-center mt-2">Drag to reorder after upload.</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-tool-split-pdf">
<div className="px-4 sm:px-6 lg:px-10 py-8 max-w-6xl">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Split PDF</h1>
<p className="text-sm text-gray-600 mt-1">Extract specific pages or ranges into a new document.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm" data-route="tools" href="#tools">
<i className="w-4 h-4" data-lucide="grid-2x2"></i> All Tools
                </a>
</div>
<div className="mt-6 rounded-2xl border border-gray-200 p-5">
<div className="flex flex-col md:flex-row items-center md:items-start gap-5">
<div className="flex-1 w-full">
<div className="dropzone relative rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 transition p-6 text-center" data-dropzone="split-pdf">
<div className="mx-auto h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-6 h-6" data-lucide="square-split-vertical"></i>
</div>
<div className="mt-3 text-sm">
<span className="font-medium">Drag &amp; drop</span> your PDF here or
                        <label className="text-indigo-700 hover:text-indigo-800 cursor-pointer"> browse
                          <input accept=".pdf" className="sr-only file-input" data-multiple="false" type="file"/>
</label>
</div>
<div className="text-xs text-gray-500 mt-1">Enter a page range before splitting</div>
</div>
<div className="upload-state hidden mt-4 space-y-3">
<div className="grid sm:grid-cols-3 gap-2">
<input className="option-pages col-span-2 h-9 rounded-lg border border-gray-200 px-3 text-sm" placeholder="Pages e.g. 1-3,7,10" type="text"/>
<select className="option-mode h-9 rounded-lg border border-gray-200 px-3 text-sm">
<option value="extract">Extract</option>
<option value="remove">Remove</option>
</select>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
<div className="flex items-center gap-3 min-w-0">
<div className="h-9 w-9 rounded-lg bg-gray-50 grid place-items-center">
<i className="w-4 h-4 text-gray-600" data-lucide="file"></i>
</div>
<div className="min-w-0">
<div className="truncate text-sm font-medium file-name">Document.pdf</div>
<div className="text-xs text-gray-500 file-size">0 MB</div>
</div>
</div>
<div className="text-xs text-gray-600 status-text">Ready</div>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="progress-bar h-full bg-indigo-600 w-0 transition-all duration-700"></div>
</div>
<div className="flex items-center gap-2">
<button className="btn-start inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
<i className="w-4 h-4" data-lucide="scissors"></i> Split PDF
                        </button>
<button className="btn-cancel inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">
<i className="w-4 h-4" data-lucide="x"></i> Cancel
                        </button>
</div>
</div>
</div>
<div className="md:w-80 w-full">
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-sm font-medium mb-3">How it works</div>
<ol className="space-y-3">
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">1</div>
<div className="text-sm">Upload your PDF</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">2</div>
<div className="text-sm">Enter pages or range</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">3</div>
<div className="text-sm">Download the new PDF</div>
</li>
</ol>
</div>
<button className="btn-download mt-4 w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed" disabled="">
<i className="w-4 h-4" data-lucide="download"></i> Download PDF
                    </button>
<div className="text-xs text-gray-500 text-center mt-2">Supports complex ranges.</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-tool-compress-pdf">
<div className="px-4 sm:px-6 lg:px-10 py-8 max-w-6xl">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Compress PDF</h1>
<p className="text-sm text-gray-600 mt-1">Reduce file size while keeping visual quality high.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm" data-route="tools" href="#tools">
<i className="w-4 h-4" data-lucide="grid-2x2"></i> All Tools
                </a>
</div>
<div className="mt-6 rounded-2xl border border-gray-200 p-5">
<div className="flex flex-col md:flex-row items-center md:items-start gap-5">
<div className="flex-1 w-full">
<div className="dropzone relative rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 transition p-6 text-center" data-dropzone="compress-pdf">
<div className="mx-auto h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-6 h-6" data-lucide="shrink"></i>
</div>
<div className="mt-3 text-sm">
<span className="font-medium">Drag &amp; drop</span> your PDF here or
                        <label className="text-indigo-700 hover:text-indigo-800 cursor-pointer"> browse
                          <input accept=".pdf" className="sr-only file-input" data-multiple="false" type="file"/>
</label>
</div>
<div className="text-xs text-gray-500 mt-1">Choose compression level</div>
</div>
<div className="upload-state hidden mt-4 space-y-3">
<div className="grid sm:grid-cols-3 gap-2">
<select className="option-compression h-9 rounded-lg border border-gray-200 px-3 text-sm">
<option value="balanced">Balanced</option>
<option value="strong">Strong</option>
<option value="max">Maximum</option>
</select>
<div className="sm:col-span-2 flex items-center gap-2 text-xs text-gray-600">
<i className="w-4 h-4" data-lucide="info"></i>
                          Lower size may reduce image quality
                        </div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
<div className="flex items-center gap-3 min-w-0">
<div className="h-9 w-9 rounded-lg bg-gray-50 grid place-items-center">
<i className="w-4 h-4 text-gray-600" data-lucide="file"></i>
</div>
<div className="min-w-0">
<div className="truncate text-sm font-medium file-name">Large.pdf</div>
<div className="text-xs text-gray-500 file-size">0 MB</div>
</div>
</div>
<div className="text-xs text-gray-600 status-text">Ready</div>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="progress-bar h-full bg-indigo-600 w-0 transition-all duration-700"></div>
</div>
<div className="flex items-center gap-2">
<button className="btn-start inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
<i className="w-4 h-4" data-lucide="play"></i> Compress
                        </button>
<button className="btn-cancel inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">
<i className="w-4 h-4" data-lucide="x"></i> Cancel
                        </button>
</div>
</div>
</div>
<div className="md:w-80 w-full">
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-sm font-medium mb-3">How it works</div>
<ol className="space-y-3">
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">1</div>
<div className="text-sm">Upload your PDF</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">2</div>
<div className="text-sm">Choose compression level</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">3</div>
<div className="text-sm">Download smaller PDF</div>
</li>
</ol>
</div>
<button className="btn-download mt-4 w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed" disabled="">
<i className="w-4 h-4" data-lucide="download"></i> Download PDF
                    </button>
<div className="text-xs text-gray-500 text-center mt-2">Great for email attachments.</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-tool-rotate-pdf">
<div className="px-4 sm:px-6 lg:px-10 py-8 max-w-6xl">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Rotate PDF</h1>
<p className="text-sm text-gray-600 mt-1">Fix page orientation by rotating 90°, 180°, or 270°.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm" data-route="tools" href="#tools">
<i className="w-4 h-4" data-lucide="grid-2x2"></i> All Tools
                </a>
</div>
<div className="mt-6 rounded-2xl border border-gray-200 p-5">
<div className="flex flex-col md:flex-row items-center md:items-start gap-5">
<div className="flex-1 w-full">
<div className="dropzone relative rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 transition p-6 text-center" data-dropzone="rotate-pdf">
<div className="mx-auto h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-6 h-6" data-lucide="rotate-ccw"></i>
</div>
<div className="mt-3 text-sm">
<span className="font-medium">Drag &amp; drop</span> your PDF here or
                        <label className="text-indigo-700 hover:text-indigo-800 cursor-pointer"> browse
                          <input accept=".pdf" className="sr-only file-input" data-multiple="false" type="file"/>
</label>
</div>
<div className="text-xs text-gray-500 mt-1">Select rotation angle</div>
</div>
<div className="upload-state hidden mt-4 space-y-3">
<div className="grid sm:grid-cols-3 gap-2">
<select className="option-angle h-9 rounded-lg border border-gray-200 px-3 text-sm">
<option value="90">Rotate 90°</option>
<option value="180">Rotate 180°</option>
<option value="270">Rotate 270°</option>
</select>
<select className="option-scope h-9 rounded-lg border border-gray-200 px-3 text-sm sm:col-span-2">
<option value="all">All pages</option>
<option value="odd">Odd pages</option>
<option value="even">Even pages</option>
</select>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
<div className="flex items-center gap-3 min-w-0">
<div className="h-9 w-9 rounded-lg bg-gray-50 grid place-items-center">
<i className="w-4 h-4 text-gray-600" data-lucide="file"></i>
</div>
<div className="min-w-0">
<div className="truncate text-sm font-medium file-name">Scan.pdf</div>
<div className="text-xs text-gray-500 file-size">0 MB</div>
</div>
</div>
<div className="text-xs text-gray-600 status-text">Ready</div>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="progress-bar h-full bg-indigo-600 w-0 transition-all duration-700"></div>
</div>
<div className="flex items-center gap-2">
<button className="btn-start inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
<i className="w-4 h-4" data-lucide="rotate-ccw"></i> Rotate
                        </button>
<button className="btn-cancel inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">
<i className="w-4 h-4" data-lucide="x"></i> Cancel
                        </button>
</div>
</div>
</div>
<div className="md:w-80 w-full">
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-sm font-medium mb-3">How it works</div>
<ol className="space-y-3">
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">1</div>
<div className="text-sm">Upload your PDF</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">2</div>
<div className="text-sm">Choose angle and scope</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">3</div>
<div className="text-sm">Download rotated PDF</div>
</li>
</ol>
</div>
<button className="btn-download mt-4 w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed" disabled="">
<i className="w-4 h-4" data-lucide="download"></i> Download PDF
                    </button>
<div className="text-xs text-gray-500 text-center mt-2">Non-destructive rotation.</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-tool-unlock-pdf">
<div className="px-4 sm:px-6 lg:px-10 py-8 max-w-6xl">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Unlock PDF</h1>
<p className="text-sm text-gray-600 mt-1">Remove password protection from PDFs you own.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm" data-route="tools" href="#tools">
<i className="w-4 h-4" data-lucide="grid-2x2"></i> All Tools
                </a>
</div>
<div className="mt-6 rounded-2xl border border-gray-200 p-5">
<div className="flex flex-col md:flex-row items-center md:items-start gap-5">
<div className="flex-1 w-full">
<div className="dropzone relative rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 transition p-6 text-center" data-dropzone="unlock-pdf">
<div className="mx-auto h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-6 h-6" data-lucide="unlock"></i>
</div>
<div className="mt-3 text-sm">
<span className="font-medium">Drag &amp; drop</span> your PDF here or
                        <label className="text-indigo-700 hover:text-indigo-800 cursor-pointer"> browse
                          <input accept=".pdf" className="sr-only file-input" data-multiple="false" type="file"/>
</label>
</div>
<div className="text-xs text-gray-500 mt-1">You must have rights to modify the file</div>
</div>
<div className="upload-state hidden mt-4 space-y-3">
<input className="option-password h-9 rounded-lg border border-gray-200 px-3 text-sm w-full" placeholder="Enter current password" type="password"/>
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
<div className="flex items-center gap-3 min-w-0">
<div className="h-9 w-9 rounded-lg bg-gray-50 grid place-items-center">
<i className="w-4 h-4 text-gray-600" data-lucide="file-lock"></i>
</div>
<div className="min-w-0">
<div className="truncate text-sm font-medium file-name">Secure.pdf</div>
<div className="text-xs text-gray-500 file-size">0 MB</div>
</div>
</div>
<div className="text-xs text-gray-600 status-text">Awaiting password</div>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="progress-bar h-full bg-indigo-600 w-0 transition-all duration-700"></div>
</div>
<div className="flex items-center gap-2">
<button className="btn-start inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
<i className="w-4 h-4" data-lucide="play"></i> Unlock
                        </button>
<button className="btn-cancel inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">
<i className="w-4 h-4" data-lucide="x"></i> Cancel
                        </button>
</div>
</div>
</div>
<div className="md:w-80 w-full">
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-sm font-medium mb-3">How it works</div>
<ol className="space-y-3">
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">1</div>
<div className="text-sm">Upload your locked PDF</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">2</div>
<div className="text-sm">Enter the current password</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">3</div>
<div className="text-sm">Download the unlocked PDF</div>
</li>
</ol>
</div>
<button className="btn-download mt-4 w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed" disabled="">
<i className="w-4 h-4" data-lucide="download"></i> Download PDF
                    </button>
<div className="text-xs text-gray-500 text-center mt-2">Respect copyright and local laws.</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-tool-protect-pdf">
<div className="px-4 sm:px-6 lg:px-10 py-8 max-w-6xl">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Protect PDF</h1>
<p className="text-sm text-gray-600 mt-1">Add a password to restrict access to your PDFs.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm" data-route="tools" href="#tools">
<i className="w-4 h-4" data-lucide="grid-2x2"></i> All Tools
                </a>
</div>
<div className="mt-6 rounded-2xl border border-gray-200 p-5">
<div className="flex flex-col md:flex-row items-center md:items-start gap-5">
<div className="flex-1 w-full">
<div className="dropzone relative rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-300 transition p-6 text-center" data-dropzone="protect-pdf">
<div className="mx-auto h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center">
<i className="w-6 h-6" data-lucide="lock"></i>
</div>
<div className="mt-3 text-sm">
<span className="font-medium">Drag &amp; drop</span> your PDF here or
                        <label className="text-indigo-700 hover:text-indigo-800 cursor-pointer"> browse
                          <input accept=".pdf" className="sr-only file-input" data-multiple="false" type="file"/>
</label>
</div>
<div className="text-xs text-gray-500 mt-1">Set a strong password to protect your file</div>
</div>
<div className="upload-state hidden mt-4 space-y-3">
<div className="grid sm:grid-cols-2 gap-2">
<input className="option-password h-9 rounded-lg border border-gray-200 px-3 text-sm" placeholder="New password" type="password"/>
<input className="option-password-confirm h-9 rounded-lg border border-gray-200 px-3 text-sm" placeholder="Confirm password" type="password"/>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
<div className="flex items-center gap-3 min-w-0">
<div className="h-9 w-9 rounded-lg bg-gray-50 grid place-items-center">
<i className="w-4 h-4 text-gray-600" data-lucide="file-lock-2"></i>
</div>
<div className="min-w-0">
<div className="truncate text-sm font-medium file-name">Report.pdf</div>
<div className="text-xs text-gray-500 file-size">0 MB</div>
</div>
</div>
<div className="text-xs text-gray-600 status-text">Ready</div>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="progress-bar h-full bg-indigo-600 w-0 transition-all duration-700"></div>
</div>
<div className="flex items-center gap-2">
<button className="btn-start inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
<i className="w-4 h-4" data-lucide="play"></i> Protect
                        </button>
<button className="btn-cancel inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">
<i className="w-4 h-4" data-lucide="x"></i> Cancel
                        </button>
</div>
</div>
</div>
<div className="md:w-80 w-full">
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-sm font-medium mb-3">How it works</div>
<ol className="space-y-3">
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">1</div>
<div className="text-sm">Upload your PDF</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">2</div>
<div className="text-sm">Enter and confirm a password</div>
</li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-lg bg-indigo-600 text-white grid place-items-center text-xs font-medium">3</div>
<div className="text-sm">Download protected PDF</div>
</li>
</ol>
</div>
<button className="btn-download mt-4 w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed" disabled="">
<i className="w-4 h-4" data-lucide="download"></i> Download PDF
                    </button>
<div className="text-xs text-gray-500 text-center mt-2">Passwords are never stored.</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-dashboard">
<div className="px-4 sm:px-6 lg:px-10 py-8">
<div className="flex items-center justify-between mb-6">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
<p className="text-sm text-gray-600 mt-1">Quick overview of your recent activity.</p>
</div>
<a className="inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm" data-route="tools" href="#tools">
<i className="w-4 h-4" data-lucide="grid-2x2"></i> All Tools
                </a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-xs text-gray-500">Conversions</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">128</div>
</div>
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-xs text-gray-500">Storage Used</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">512 MB</div>
</div>
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-xs text-gray-500">Favorites</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">8</div>
</div>
<div className="rounded-xl border border-gray-200 p-4">
<div className="text-xs text-gray-500">Plan</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">Free</div>
</div>
</div>
<div className="mt-6 rounded-xl border border-gray-200 overflow-hidden">
<div className="px-4 py-3 border-b border-gray-200 text-sm font-medium">Recent Files</div>
<div className="divide-y divide-gray-200">
<div className="flex items-center justify-between px-4 py-3 text-sm">
<div className="flex items-center gap-3 min-w-0">
<div className="h-8 w-8 rounded-lg bg-gray-50 grid place-items-center">
<i className="w-4 h-4 text-gray-600" data-lucide="file-text"></i>
</div>
<div className="min-w-0">
<div className="truncate">Proposal.pdf</div>
<div className="text-xs text-gray-500">Converted to Word</div>
</div>
</div>
<button className="inline-flex items-center gap-1 text-xs text-indigo-700 hover:text-indigo-800">
<i className="w-4 h-4" data-lucide="download"></i> Download
                    </button>
</div>
<div className="flex items-center justify-between px-4 py-3 text-sm">
<div className="flex items-center gap-3 min-w-0">
<div className="h-8 w-8 rounded-lg bg-gray-50 grid place-items-center">
<i className="w-4 h-4 text-gray-600" data-lucide="table"></i>
</div>
<div className="min-w-0">
<div className="truncate">Sales.pdf</div>
<div className="text-xs text-gray-500">Converted to Excel</div>
</div>
</div>
<button className="inline-flex items-center gap-1 text-xs text-indigo-700 hover:text-indigo-800">
<i className="w-4 h-4" data-lucide="download"></i> Download
                    </button>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-pricing">
<div className="px-4 sm:px-6 lg:px-10 py-8">
<div className="text-center max-w-3xl mx-auto">
<h1 className="text-2xl font-semibold tracking-tight">Simple, transparent pricing</h1>
<p className="text-sm text-gray-600 mt-2">Start free, upgrade anytime. No hidden fees.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
<div className="rounded-2xl border border-gray-200 p-6">
<div className="text-sm font-medium">Free</div>
<div className="mt-2 text-3xl font-semibold tracking-tight">0<span className="text-base font-normal text-gray-500">/mo</span></div>
<ul className="mt-4 text-sm text-gray-600 space-y-2">
<li>• 25MB file limit</li>
<li>• Standard processing</li>
<li>• Basic tools</li>
</ul>
<button className="mt-5 w-full h-10 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">Get Started</button>
</div>
<div className="rounded-2xl border border-gray-200 p-6 ring-2 ring-indigo-600">
<div className="text-sm font-medium">Pro</div>
<div className="mt-2 text-3xl font-semibold tracking-tight">9<span className="text-base font-normal text-gray-500">/mo</span></div>
<ul className="mt-4 text-sm text-gray-600 space-y-2">
<li>• 2GB file limit</li>
<li>• Priority processing</li>
<li>• OCR + advanced tools</li>
</ul>
<button className="mt-5 w-full h-10 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700">Upgrade</button>
</div>
<div className="rounded-2xl border border-gray-200 p-6">
<div className="text-sm font-medium">Team</div>
<div className="mt-2 text-3xl font-semibold tracking-tight">29<span className="text-base font-normal text-gray-500">/mo</span></div>
<ul className="mt-4 text-sm text-gray-600 space-y-2">
<li>• Everything in Pro</li>
<li>• 5 seats included</li>
<li>• Admin &amp; SSO</li>
</ul>
<button className="mt-5 w-full h-10 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-about">
<div className="px-4 sm:px-6 lg:px-10 py-8 max-w-5xl">
<h1 className="text-2xl font-semibold tracking-tight">About PDF Conversion</h1>
<p className="text-sm text-gray-600 mt-2">We build simple, fast tools that respect your time and your data.</p>
<div className="mt-6 grid md:grid-cols-3 gap-4">
<div className="rounded-xl border border-gray-200 p-5">
<i className="w-6 h-6 text-indigo-600" data-lucide="cpu"></i>
<div className="mt-3 text-sm font-medium">Modern engine</div>
<p className="text-sm text-gray-600">Latest rendering and OCR for crisp results.</p>
</div>
<div className="rounded-xl border border-gray-200 p-5">
<i className="w-6 h-6 text-indigo-600" data-lucide="shield-check"></i>
<div className="mt-3 text-sm font-medium">Privacy-first</div>
<p className="text-sm text-gray-600">Files auto-expire. You control deletion.</p>
</div>
<div className="rounded-xl border border-gray-200 p-5">
<i className="w-6 h-6 text-indigo-600" data-lucide="zap"></i>
<div className="mt-3 text-sm font-medium">Lightning fast</div>
<p className="text-sm text-gray-600">Optimized pipelines for speed at scale.</p>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="page-contact">
<div className="px-4 sm:px-6 lg:px-10 py-8 max-w-3xl">
<h1 className="text-2xl font-semibold tracking-tight">Contact us</h1>
<p className="text-sm text-gray-600 mt-1">Have questions? We’d love to help.</p>
<form className="mt-6 space-y-3">
<div className="grid sm:grid-cols-2 gap-3">
<input className="h-11 rounded-lg border border-gray-200 px-3 text-sm" placeholder="First name" type="text"/>
<input className="h-11 rounded-lg border border-gray-200 px-3 text-sm" placeholder="Last name" type="text"/>
</div>
<input className="h-11 w-full rounded-lg border border-gray-200 px-3 text-sm" placeholder="Email" type="email"/>
<textarea className="w-full rounded-lg border border-gray-200 p-3 text-sm" placeholder="How can we help?" rows="5"></textarea>
<button className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition" type="submit">
<i className="w-4 h-4" data-lucide="send"></i> Send message
                </button>
</form>
</div>
</section>
</div>
</main>
</div>



    </>
  );
}
