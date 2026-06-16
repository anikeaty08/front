import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function downloadSite() {
            // UI Feedback: Change button state
            const btn = document.getElementById('download-btn');
            const text = document.getElementById('download-text');
            const icon = document.getElementById('download-icon');
            
            const originalText = text.innerText;
            text.innerText = "BUNDLING...";
            btn.disabled = true;
            
            // Wait a moment so the UI updates before the heavy lifting
            setTimeout(() => {
                try {
                    var zip = new JSZip();
                    
                    // Get the full HTML content
                    var htmlContent = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
                    
                    // Add the main HTML file
                    zip.file("index.html", htmlContent);
                    
                    // Add a Readme
                    zip.file("README.txt", "This zip contains the full source code of the Celestia Luna site page.\n\nUsage:\n1. Extract the zip file.\n2. Open 'index.html' in your browser or upload to a server.\n3. All styles (Tailwind) and icons (Lucide) are loaded via CDN, so an internet connection is required.");

                    // Generate zip
                    zip.generateAsync({type:"blob"})
                    .then(function(content) {
                        var link = document.createElement('a');
                        link.href = URL.createObjectURL(content);
                        link.download = "celestia-luna-source.zip";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        
                        // Reset Button
                        text.innerText = "DOWNLOADED!";
                        setTimeout(() => {
                            text.innerText = originalText;
                            btn.disabled = false;
                        }, 2000);
                    });
                } catch (e) {
                    console.error(e);
                    text.innerText = "ERROR";
                    btn.disabled = false;
                }
            }, 500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 h-full w-full pointer-events-none overflow-hidden -z-10">
<div className="absolute top-40 -left-20 w-[500px] h-[800px] opacity-90 hidden xl:block">
<img alt="Left Character" className="w-full h-full object-cover [mask-image:linear-gradient(to_right,black,transparent)]" src="https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-20 -right-20 w-[600px] h-[800px] opacity-90 hidden xl:block">
<img alt="Right Character" className="w-full h-full object-cover [mask-image:linear-gradient(to_left,black,transparent)]" src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full flex-grow">

<header className="flex flex-col items-center justify-center pt-16 pb-8 text-center relative">
<div className="relative z-10 mb-6">
<h1 className="font-fantasy text-5xl md:text-6xl text-[#FFF8E7] tracking-tight drop-shadow-lg" style={{textShadow: '0 2px 0 #D97706, 0 4px 4px rgba(0,0,0,0.2)'}}>
                    Celestia<br/>
<span className="text-6xl md:text-7xl text-[#FFD700] block mt-2" style={{textShadow: '0 2px 0 #B45309, 0 4px 8px rgba(0,0,0,0.3)'}}>Luna Online</span>
</h1>
</div>
<button className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-purple-500 to-purple-700 px-12 py-3 shadow-[0_4px_0_0_#581c87] transition-transform active:translate-y-[2px] active:shadow-[0_2px_0_0_#581c87]">
<div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-white/40"></div>
<span className="relative font-fantasy text-2xl text-white tracking-widest font-semibold drop-shadow-md">PLAY NOW</span>
</button>
</header>

<nav className="relative mx-auto max-w-5xl mb-8">
<div className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-800 border-2 border-[#eaddc5] shadow-lg z-20"></div>
<div className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-800 border-2 border-[#eaddc5] shadow-lg z-20"></div>
<div className="bg-gradient-to-b from-[#fdfbf7] to-[#eaddc5] rounded-full border border-[#bfa980] shadow-md px-6 py-3 flex flex-wrap items-center justify-center gap-1 md:gap-6 relative z-10">
<a className="px-3 py-1.5 text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors" href="#">Home</a>
<div className="group relative px-3 py-1.5 cursor-pointer flex items-center gap-1 text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors">
                    Community <i className="w-3.5 h-3.5 opacity-60" data-lucide="chevron-down"></i>
</div>
<a className="px-3 py-1.5 text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors" href="#">Game Guide</a>
<div className="group relative px-3 py-1.5 cursor-pointer flex items-center gap-1 text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors">
                    Rankings <i className="w-3.5 h-3.5 opacity-60" data-lucide="chevron-down"></i>
</div>
<a className="px-3 py-1.5 text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors" href="#">Gem Store</a>
<div className="group relative px-3 py-1.5 cursor-pointer flex items-center gap-1 text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors">
                    Media <i className="w-3.5 h-3.5 opacity-60" data-lucide="chevron-down"></i>
</div>
<a className="px-3 py-1.5 text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors" href="#">Help</a>
</div>
</nav>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto mb-12">

<aside className="md:col-span-4 space-y-6">

<div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm border border-white/50 overflow-hidden">
<div className="bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
<div className="bg-orange-100 p-1 rounded-md text-orange-600">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<h3 className="font-medium text-slate-700 text-sm">Member Panel</h3>
</div>
<div className="p-5 space-y-4">
<div className="space-y-3">
<div className="relative">
<i className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" data-lucide="user"></i>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md py-2 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Username" type="text"/>
</div>
<div className="relative">
<i className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" data-lucide="key"></i>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md py-2 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Password" type="password"/>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 rounded shadow-sm transition-colors">LOG IN</button>
<button className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2 rounded shadow-sm transition-colors">REGISTER</button>
</div>
<div className="text-center">
<a className="text-xs text-blue-500 hover:text-blue-600 hover:underline" href="#">Having trouble?</a>
</div>
</div>
</div>

<div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm border border-white/50 overflow-hidden">
<div className="bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
<div className="bg-cyan-100 p-1 rounded-md text-cyan-600">
<i className="w-4 h-4" data-lucide="gem"></i>
</div>
<h3 className="font-medium text-slate-700 text-sm">Featured Items</h3>
</div>
<div className="p-6 flex justify-center bg-slate-50/50">
<div className="relative w-24 h-24 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center group cursor-pointer hover:shadow-md transition-all">
<img alt="Item" className="w-16 h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute -bottom-2 -right-2 bg-pink-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">NEW</div>
</div>
</div>
</div>
</aside>

<main className="md:col-span-8 space-y-6">

<div className="relative w-full h-48 rounded-xl overflow-hidden shadow-sm group">
<div className="absolute inset-0 bg-gradient-to-r from-sky-200 via-blue-100 to-indigo-100"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4"></div>
<div className="relative h-full flex items-center px-8 z-10">
<div className="w-2/3 space-y-1">
<h2 className="text-4xl font-black text-white text-stroke-title tracking-tight drop-shadow-sm">
                                Weekly Sale
                            </h2>
<p className="text-[#D97706] font-semibold text-lg leading-tight mt-2 drop-shadow-sm text-shadow-sm">
                                Four random Gem Store items <br/>
                                go on sale every Friday!
                            </p>
</div>
<div className="w-1/3 h-full relative">
<img alt="Anime Character" className="absolute bottom-0 right-0 h-[110%] w-auto object-contain drop-shadow-lg transform transition-transform group-hover:scale-105 duration-500" src="https://images.unsplash.com/photo-1542144612-1b3641ec3459?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
<button className="w-2 h-2 rounded-full bg-blue-500 shadow-sm"></button>
<button className="w-2 h-2 rounded-full bg-white/60 hover:bg-white shadow-sm transition-colors"></button>
<button className="w-2 h-2 rounded-full bg-white/60 hover:bg-white shadow-sm transition-colors"></button>
<button className="w-2 h-2 rounded-full bg-white/60 hover:bg-white shadow-sm transition-colors"></button>
</div>
</div>

<div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm border border-white/50 p-6">
<div className="flex items-start gap-4 mb-4">
<div className="w-12 h-12 rounded-lg bg-red-100 overflow-hidden shrink-0 border border-red-200">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex-1 min-w-0">
<h2 className="text-2xl font-fantasy font-semibold text-[#B45309] tracking-tight leading-none mb-1">
                                Festival of Rebirth
                            </h2>
<p className="text-xs text-slate-500 font-medium">Dec. 1, 2025, 6 p.m.</p>
</div>
</div>
<div className="h-px bg-slate-200 w-full mb-4"></div>
<div className="relative w-full aspect-[2/1] bg-slate-900 rounded-lg overflow-hidden group cursor-pointer shadow-inner">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<h3 className="font-fantasy text-4xl text-amber-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-tight">
                                Festival <span className="text-2xl text-slate-200 align-middle px-2 font-sans">of</span> Rebirth
                            </h3>
</div>
</div>
</div>
</main>
</div>

<footer className="mt-auto border-t border-white/30 bg-white/40 backdrop-blur-md rounded-t-2xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] mx-auto max-w-6xl w-full overflow-hidden">
<div className="px-8 py-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="space-y-4">
<h4 className="font-fantasy text-xl text-slate-800">Celestia Luna</h4>
<p className="text-xs leading-relaxed text-slate-600 max-w-xs">
                             The ultimate fantasy MMORPG experience. Join thousands of players in a world of adventure, magic, and friendship.
                         </p>
<div className="flex gap-3">
<a className="p-2 bg-white/60 hover:bg-white rounded-full transition-colors text-slate-500 hover:text-[#5865F2]" href="#"><i className="w-4 h-4" data-lucide="gamepad-2"></i></a>
<a className="p-2 bg-white/60 hover:bg-white rounded-full transition-colors text-slate-500 hover:text-[#1DA1F2]" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="p-2 bg-white/60 hover:bg-white rounded-full transition-colors text-slate-500 hover:text-[#FF0000]" href="#"><i className="w-4 h-4" data-lucide="youtube"></i></a>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div>
<h5 className="font-semibold text-slate-800 text-sm mb-3">Game</h5>
<ul className="space-y-2 text-xs text-slate-600">
<li><a className="hover:text-blue-600 transition-colors" href="#">Download Client</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Register Account</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Patch Notes</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Server Status</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-slate-800 text-sm mb-3">Support</h5>
<ul className="space-y-2 text-xs text-slate-600">
<li><a className="hover:text-blue-600 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>

<div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 rounded-xl p-5 border border-white/60 shadow-inner flex flex-col justify-between">
<div>
<h5 className="font-semibold text-slate-800 text-sm mb-1 flex items-center gap-2">
<i className="w-4 h-4 text-indigo-500" data-lucide="code"></i> Developer Option
                            </h5>
<p className="text-[11px] text-slate-500 leading-tight mb-4">
                                Download the complete functional source code of this page to host it.
                            </p>
</div>
<button className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-2.5 rounded-lg shadow-lg shadow-slate-300/50 transition-all active:scale-95 group disabled:opacity-70 disabled:cursor-wait" id="download-btn" onclick="downloadSite()">
<i className="w-3.5 h-3.5 group-hover:animate-bounce" data-lucide="download" id="download-icon"></i>
<span id="download-text">DOWNLOAD ALL SITE</span>
</button>
</div>
</div>
<div className="mt-10 pt-6 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-500 font-medium">© 2025 Celestia Luna Online. All rights reserved.</p>
<div className="flex items-center gap-1 text-[10px] text-slate-400">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                         Server Time: 12:45 PM
                    </div>
</div>
</div>
</footer>
</div>


    </>
  );
}
