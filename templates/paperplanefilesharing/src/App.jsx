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



        lucide.createIcons({
            strokeWidth: 1.5
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
      

<div className="flex gap-8 overflow-x-auto pb-8 mx-auto w-max items-start">

<div className="w-[360px] h-[780px] bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col relative border-[6px] border-white shrink-0">

<div className="flex justify-between items-center p-5">
<div className="flex items-center gap-2 text-[#005461]">
<i className="w-5 h-5 fill-[#005461]" data-lucide="send"></i>
<span className="font-semibold text-lg tracking-tight">Paperplane</span>
</div>
<div className="w-8 h-8 flex items-center justify-center text-gray-400">
<i className="w-5 h-5" data-lucide="code"></i>
</div>
</div>
<div className="flex-1 overflow-y-auto device-scroll pb-24">

<div className="bg-[#00B7B5]/5 rounded-2xl mx-5 p-8 text-center flex flex-col items-center border border-[#00B7B5]/10">
<h1 className="text-4xl font-semibold tracking-tight text-[#005461] mb-3">Paperplane</h1>
<p className="text-lg font-medium text-[#005461]/70 leading-snug mb-6">Instant file sharing.<br/>No login. No friction.</p>
<button className="bg-[#005461] text-white px-6 py-3 rounded-full font-semibold text-base shadow-sm hover:bg-[#018790] transition-colors">
                        Get Started
                    </button>
</div>

<div className="flex px-5 mt-8 border-b border-gray-100">
<button className="flex-1 pb-3 text-base font-semibold text-[#005461] border-b-2 border-[#00B7B5] text-center">
                        Upload File
                    </button>
<button className="flex-1 pb-3 text-base font-medium text-gray-400 text-center hover:text-gray-600 transition-colors">
                        Paste Text
                    </button>
</div>

<div className="mx-5 mt-6 border-2 border-dashed border-[#00B7B5]/30 rounded-2xl bg-gray-50/50 p-8 flex flex-col items-center justify-center text-center transition-colors hover:bg-gray-50 cursor-pointer group">
<div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center text-[#00B7B5] mb-4 group-hover:scale-105 transition-transform">
<i className="w-6 h-6" data-lucide="cloud-upload"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#005461] mb-1">Drag &amp; Drop or Click</h3>
<p className="text-sm font-medium text-gray-400 mb-6">Maximum file size: 100MB</p>
<button className="bg-[#005461] text-white px-6 py-3 rounded-xl font-semibold text-base shadow-sm hover:bg-[#018790] transition-colors w-full max-w-[200px]">
                        Select File
                    </button>
</div>

<div className="mx-5 mt-6 mb-6">
<h4 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-3 flex items-center gap-2">
                        Security
                        <i className="w-3 h-3" data-lucide="info"></i>
</h4>
<div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
<i className="w-5 h-5 text-[#005461] shrink-0 mt-0.5" data-lucide="shield-check"></i>
<p className="text-sm font-medium text-gray-500 leading-relaxed">
                            Files are automatically deleted after 24 hours. Your data is encrypted and transferred securely via HTTPS.
                        </p>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white border-t border-gray-100 flex justify-between px-6 py-4 pb-6">
<button className="flex flex-col items-center gap-1 text-[#00B7B5]">
<i className="w-6 h-6" data-lucide="upload"></i>
<span className="text-xs font-semibold">Upload</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-6 h-6" data-lucide="history"></i>
<span className="text-xs font-medium">History</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-6 h-6" data-lucide="settings"></i>
<span className="text-xs font-medium">Settings</span>
</button>
</div>
</div>

<div className="w-[360px] h-[780px] bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col relative border-[6px] border-white shrink-0">
<div className="flex justify-between items-center p-5">
<div className="flex items-center gap-2 text-[#005461]">
<i className="w-5 h-5 fill-[#005461]" data-lucide="send"></i>
<span className="font-semibold text-lg tracking-tight">Paperplane</span>
</div>
<button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-full transition-colors">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto device-scroll px-5 pb-8 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-[#00B7B5]/10 rounded-full flex items-center justify-center text-[#00B7B5] mb-4 mt-4">
<i className="w-8 h-8" data-lucide="check"></i>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-[#005461] mb-2">Upload Success!</h2>
<p className="text-lg font-medium text-gray-500 mb-8">Your file is ready to take flight.</p>

<div className="w-full bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-2xl p-5 text-left mb-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#005461] to-[#00B7B5]"></div>
<label className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-2 block">Shareable Link</label>
<div className="flex items-center bg-gray-50 rounded-xl p-1.5 border border-gray-200 mb-6">
<input className="bg-transparent flex-1 px-3 text-base font-medium text-[#005461] focus:outline-none" readonly="" type="text" value="paperplane.io/s/72x-k92"/>
<button className="bg-[#005461] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm hover:bg-[#018790] transition-colors">
<i className="w-4 h-4" data-lucide="copy"></i> Copy
                        </button>
</div>

<div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center mb-6 border border-gray-100">
<div className="w-32 h-32 bg-white rounded-lg shadow-sm border border-gray-200 p-2 flex items-center justify-center mb-4">

<i className="w-full h-full text-[#005461]" data-lucide="qr-code"></i>
</div>
<button className="text-sm font-semibold text-[#00B7B5] flex items-center gap-2 hover:text-[#018790] transition-colors">
<i className="w-4 h-4" data-lucide="download"></i> Download QR
                        </button>
</div>
<div className="flex justify-between items-center text-sm font-medium border-t border-gray-100 pt-4 mt-2">
<span className="text-gray-400 flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="clock"></i> Expires in
                        </span>
<span className="bg-teal-50 text-[#005461] px-3 py-1 rounded-md font-semibold font-mono tracking-tight">23:59:58</span>
</div>
</div>
<button className="w-full bg-[#005461] text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 shadow-md hover:bg-[#018790] hover:shadow-lg transition-all mb-4">
<i className="w-5 h-5" data-lucide="plus-circle"></i> Share Another
                </button>
<p className="text-xs font-medium text-gray-400 px-4">Files are automatically deleted from our servers after 24 hours.</p>
</div>

<div className="w-32 h-1 bg-gray-200 rounded-full mx-auto mb-2"></div>
</div>

<div className="w-[360px] h-[780px] bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col relative border-[6px] border-white shrink-0">
<div className="flex justify-between items-center p-5 border-b border-gray-50">
<button className="w-8 h-8 flex items-center justify-center text-[#005461] hover:bg-gray-50 rounded-full transition-colors">
<i className="w-6 h-6" data-lucide="chevron-left"></i>
</button>
<span className="font-semibold text-lg text-[#005461]">Paste Text</span>
<button className="w-8 h-8 flex items-center justify-center text-[#005461] hover:bg-gray-50 rounded-full transition-colors">
<i className="w-6 h-6" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto device-scroll p-5 pb-24">
<h2 className="text-3xl font-semibold tracking-tight text-[#005461] mb-2">New Snippet</h2>
<p className="text-lg font-medium text-gray-500 mb-6 leading-snug">Paste your text content below to generate a temporary link.</p>
<div className="relative mb-6">
<textarea className="w-full h-[280px] bg-gray-50 rounded-2xl border border-gray-200 p-5 text-lg font-medium text-[#005461] placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#00B7B5]/20 focus:border-[#00B7B5]/50 transition-all shadow-inner" placeholder="Type or paste your content here..."></textarea>
<div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-[#00B7B5] shadow-sm">
                        0 / 5000
                    </div>
</div>
<button className="w-full bg-[#005461] text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 shadow-md hover:bg-[#018790] transition-all mb-6">
<i className="w-5 h-5" data-lucide="link"></i> Generate Link
                </button>
<div className="flex gap-4">
<div className="flex-1 bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex items-center gap-3">
<div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center text-[#005461]">
<i className="w-4 h-4" data-lucide="clock"></i>
</div>
<div>
<p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Expires In</p>
<p className="text-base font-semibold text-[#005461]">24 Hours</p>
</div>
</div>
<div className="flex-1 bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex items-center gap-3">
<div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center text-[#005461]">
<i className="w-4 h-4" data-lucide="eye-off"></i>
</div>
<div>
<p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Security</p>
<p className="text-base font-semibold text-[#005461]">Public</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white border-t border-gray-100 flex justify-between px-6 py-4 pb-6">
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-6 h-6" data-lucide="folder"></i>
<span className="text-xs font-medium">Files</span>
</button>
<button className="flex flex-col items-center gap-1 text-[#00B7B5]">
<i className="w-6 h-6" data-lucide="edit-3"></i>
<span className="text-xs font-semibold">Paste</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-6 h-6" data-lucide="history"></i>
<span className="text-xs font-medium">History</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-6 h-6" data-lucide="settings"></i>
<span className="text-xs font-medium">Settings</span>
</button>
</div>
</div>

<div className="w-[360px] h-[780px] bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col relative border-[6px] border-white shrink-0">
<div className="flex-1 flex flex-col items-center justify-center p-6 text-center mt-[-60px]">
<div className="w-16 h-16 bg-[#00B7B5]/10 rounded-2xl rotate-3 flex items-center justify-center text-[#005461] mb-6 shadow-sm">
<i className="w-8 h-8 -rotate-12 fill-[#005461]" data-lucide="plane"></i>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-[#005461] mb-10">Paperplane</h1>

<div className="relative w-48 h-48 flex items-center justify-center mb-8">
<svg className="w-full h-full transform -rotate-90">

<circle cx="96" cy="96" fill="none" r="84" stroke="#f3f4f6" strokeWidth="12"></circle>

<circle className="transition-all duration-1000" cx="96" cy="96" fill="none" r="84" stroke="#00B7B5" stroke-dasharray="527" stroke-dashoffset="184" strokeLinecap="round" strokeWidth="12"></circle>
</svg>
<div className="absolute flex flex-col items-center">
<span className="text-4xl font-semibold tracking-tight text-[#005461]">65%</span>
<span className="text-sm font-medium text-gray-400 mt-1">Downloading</span>
</div>
</div>
<div className="mb-6">
<h3 className="text-lg font-semibold text-[#005461] mb-1 truncate w-64">presentation_deck_v2.zip</h3>
<p className="text-sm font-medium text-gray-400">42.8 MB • Compressed Archive</p>
</div>
<div className="bg-gray-50 border border-gray-100 rounded-full px-5 py-2.5 flex items-center gap-2 mb-8 shadow-sm">
<i className="w-4 h-4 text-[#005461]" data-lucide="clock"></i>
<span className="text-sm font-semibold text-[#005461]">Link expires in 4 hours</span>
</div>
<button className="w-full bg-[#005461] text-white py-4 rounded-2xl font-semibold text-lg shadow-md hover:bg-[#018790] transition-all mb-4">
                    Download Now
                </button>
<p className="text-xs font-medium text-gray-400 px-4 leading-relaxed">
                    Your download should start automatically. If it doesn't, click the button above.
                </p>

<div className="w-4/5 h-1.5 bg-gray-100 rounded-full mt-6 overflow-hidden">
<div className="h-full bg-[#00B7B5] w-[65%] rounded-full"></div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white border-t border-gray-100 flex justify-between px-8 py-4 pb-6">
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-6 h-6" data-lucide="history"></i>
<span className="text-xs font-medium">Recent</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-300 pointer-events-none">
<i className="w-6 h-6" data-lucide="download"></i>
<span className="text-xs font-medium">Transfer</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-6 h-6" data-lucide="settings"></i>
<span className="text-xs font-medium">Settings</span>
</button>
</div>
</div>

<div className="w-[360px] h-[780px] bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col relative border-[6px] border-white shrink-0">
<div className="flex justify-between items-center p-5">
<button className="w-8 h-8 flex items-center justify-center text-[#005461] hover:bg-gray-50 rounded-full transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<span className="font-semibold text-lg text-[#005461] mr-8">Paperplane</span>
<div></div> 
</div>
<div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
<div className="relative w-32 h-32 mb-8 flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full text-gray-200" viewbox="0 0 100 100">
<path d="M 10 90 Q 50 10 90 50" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>
<div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center z-10 shadow-sm border border-white">
<i className="w-10 h-10 text-gray-400 -rotate-45" data-lucide="plane"></i>
<div className="absolute w-24 h-1 bg-white rotate-45 z-20"></div>
<div className="absolute w-24 h-0.5 bg-[#005461] rotate-45 z-30"></div>
</div>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-[#005461] mb-4">Link Expired</h2>
<p className="text-lg font-medium text-gray-500 mb-10 leading-relaxed px-2">
                    This link has expired after its 24-hour window. For security and privacy, files are automatically deleted.
                </p>
<button className="w-full bg-[#005461] text-white py-4 rounded-2xl font-semibold text-lg shadow-md hover:bg-[#018790] transition-all mb-6">
                    Go to Paperplane
                </button>
<p className="text-sm font-medium text-gray-400">
                    Want to share a file? Get started for free.
                </p>
</div>

<div className="w-32 h-1 bg-gray-200 rounded-full mx-auto mb-2"></div>
</div>
</div>




    </>
  );
}
