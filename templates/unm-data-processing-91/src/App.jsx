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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
<div className="text-[#BA0C2F] text-2xl font-semibold tracking-tighter select-none" style={{fontFamily: '\'Roboto\', sans-serif'}}>
                UNM
            </div>
<nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-500">
<a className="text-gray-900 transition-colors" href="#">Home</a>
<a className="hover:text-gray-900 transition-colors" href="#">About</a>
<a className="hover:text-gray-900 transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-gray-900 transition-colors" href="#">Contact</a>
</nav>
<button className="md:hidden text-gray-500 hover:text-gray-900 flex items-center justify-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<main className="flex-grow">

<section className="bg-gradient-to-b from-white to-gray-50 pt-20 pb-16 px-4 text-center">
<div className="max-w-3xl mx-auto">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6" style={{fontFamily: '\'Roboto\', sans-serif'}}>
                    Welcome to the UNM File Processing Portal
                </h1>
<p className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
                    Upload your text files, get results instantly, and download them securely.
                </p>
<a className="inline-flex items-center justify-center bg-[#BA0C2F] hover:bg-red-800 text-white text-base font-medium py-3 px-8 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BA0C2F]" href="#upload-section">
                    Upload Your File
                </a>
</div>
</section>

<section className="py-8 px-4 md:px-8" id="upload-section">
<div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

<div className="p-6 md:p-10 border-b border-gray-100">
<div className="border-2 border-dashed border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-xl p-10 flex flex-col items-center justify-center text-center transition-colors duration-200 cursor-pointer group">
<div className="w-12 h-12 bg-red-50 text-[#BA0C2F] rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
<iconify-icon height="24" icon="solar:file-send-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2" style={{fontFamily: '\'Roboto\', sans-serif'}}>Drag &amp; drop your files here</h3>
<p className="text-sm text-gray-500 mb-6">or click to browse from your computer</p>
<button className="inline-flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium py-2 px-6 rounded-md shadow-sm transition-all mb-3">
                            Choose File
                        </button>
<p className="text-xs text-gray-400 font-medium">No file chosen</p>
</div>
</div>

<div className="flex flex-col">

<div className="p-5 md:px-8 border-b border-gray-100 flex items-start sm:items-center justify-between gap-4 bg-white">
<div className="flex items-start sm:items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
<iconify-icon height="18" icon="solar:danger-circle-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">dataset_corrupted.csv</div>
<div className="text-xs text-red-600 mt-0.5">Error processing your file. Please try again.</div>
</div>
</div>
</div>

<div className="p-5 md:px-8 border-b border-gray-100 bg-white">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 flex-shrink-0">
<iconify-icon className="animate-spin" height="18" icon="solar:refresh-circle-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">research_data_2024.txt</div>
<div className="text-xs text-gray-500 mt-0.5">Processing your file...</div>
</div>
</div>
<span className="text-xs font-medium text-gray-500">68%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-[#BA0C2F] h-1.5 rounded-full transition-all duration-500" style={{width: '68%'}}></div>
</div>
<p className="text-xs text-gray-400">This process may take a few seconds depending on file size.</p>
</div>

<div className="p-5 md:px-8 bg-gray-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
<iconify-icon height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">alumni_records_formatted.csv</div>
<div className="text-xs text-gray-500 mt-0.5">File ready for processing • 1.2 MB</div>
</div>
</div>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#BA0C2F] hover:bg-red-800 text-white text-sm font-medium py-2 px-5 rounded-md shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BA0C2F]">
<iconify-icon height="16" icon="solar:download-linear" width="16"></iconify-icon>
                            Download Processed File
                        </button>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 md:px-8 bg-white border-t border-gray-100" id="how-it-works">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center" style={{fontFamily: '\'Roboto\', sans-serif'}}>
                    How It Works
                </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-red-50 text-[#BA0C2F] rounded-2xl flex items-center justify-center mb-6">
<iconify-icon height="32" icon="solar:document-add-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2" style={{fontFamily: '\'Roboto\', sans-serif'}}>Step 1: Upload</h3>
<p className="text-sm text-gray-500 leading-relaxed">Securely upload your text or data files using our simple drag-and-drop interface.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-red-50 text-[#BA0C2F] rounded-2xl flex items-center justify-center mb-6">
<iconify-icon height="32" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2" style={{fontFamily: '\'Roboto\', sans-serif'}}>Step 2: Process</h3>
<p className="text-sm text-gray-500 leading-relaxed">Our automated system instantly analyzes, validates, and processes your data.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-red-50 text-[#BA0C2F] rounded-2xl flex items-center justify-center mb-6">
<iconify-icon height="32" icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2" style={{fontFamily: '\'Roboto\', sans-serif'}}>Step 3: Download</h3>
<p className="text-sm text-gray-500 leading-relaxed">Retrieve your formatted results securely and quickly to your local device.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-gray-900 pt-16 pb-8 px-4 md:px-8 border-t border-gray-800">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
<div className="text-white text-3xl font-semibold tracking-tighter select-none" style={{fontFamily: '\'Roboto\', sans-serif'}}>
                    UNM
                </div>
<div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-5 text-gray-400">
<a aria-label="Facebook" className="hover:text-white transition-colors" href="#">
<iconify-icon height="22" icon="solar:square-academic-linear" width="22"></iconify-icon>
</a>
<a aria-label="Twitter" className="hover:text-white transition-colors" href="#">
<iconify-icon height="22" icon="solar:hashtag-square-linear" width="22"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="hover:text-white transition-colors" href="#">
<iconify-icon height="22" icon="solar:user-circle-linear" width="22"></iconify-icon>
</a>
</div>
</div>
<div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
<p>© 2024 University of New Mexico. All rights reserved.</p>
<p>Designed for secure file handling.</p>
</div>
</div>
</footer>

    </>
  );
}
