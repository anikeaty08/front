import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function switchTab(type) {
            const bg = document.getElementById('switch-bg');
            const pdfBtn = document.getElementById('btn-pdf');
            const imgBtn = document.getElementById('btn-img');
            const pdfGrid = document.getElementById('pdf-grid');
            const imgGrid = document.getElementById('img-grid');

            if (type === 'pdf') {
                // Move pill left
                bg.style.transform = 'translateX(0)';
                
                // Text Colors - Light Theme logic
                pdfBtn.classList.remove('text-slate-500');
                pdfBtn.classList.add('text-slate-900');
                imgBtn.classList.remove('text-slate-900');
                imgBtn.classList.add('text-slate-500');

                // Toggle Grids with Fade
                imgGrid.classList.remove('opacity-100');
                imgGrid.classList.add('opacity-0');
                setTimeout(() => {
                    imgGrid.classList.add('hidden');
                    imgGrid.classList.remove('grid');
                    
                    pdfGrid.classList.remove('hidden');
                    pdfGrid.classList.add('grid');
                    // Small timeout to allow display:grid to render before opacity transition
                    setTimeout(() => {
                        pdfGrid.classList.remove('opacity-0');
                        pdfGrid.classList.add('opacity-100');
                    }, 50);
                }, 300);

            } else {
                // Move pill right
                bg.style.transform = 'translateX(100%) translateX(12px)';

                // Text Colors - Light Theme logic
                imgBtn.classList.remove('text-slate-500');
                imgBtn.classList.add('text-slate-900');
                pdfBtn.classList.remove('text-slate-900');
                pdfBtn.classList.add('text-slate-500');

                // Toggle Grids with Fade
                pdfGrid.classList.remove('opacity-100');
                pdfGrid.classList.add('opacity-0');
                setTimeout(() => {
                    pdfGrid.classList.add('hidden');
                    pdfGrid.classList.remove('grid');
                    
                    imgGrid.classList.remove('hidden');
                    imgGrid.classList.add('grid');
                    setTimeout(() => {
                        imgGrid.classList.remove('opacity-0');
                        imgGrid.classList.add('opacity-100');
                    }, 50);
                }, 300);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[100px] animate-pulse-slow mix-blend-multiply" style={{}}></div>
<div className="absolute bottom-[-10%] right-[20%] w-[700px] h-[700px] bg-purple-200/30 rounded-full blur-[100px] mix-blend-multiply" style={{}}></div>
<div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/60 radial-gradient-mask"></div>
</div>

<nav className="fixed w-full z-50 top-0 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-200 group-hover:shadow-indigo-300 transition-all" style={{}}>
<iconify-icon className="text-white text-lg" icon="lucide:zap"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">FusionDocs<span className="text-indigo-600 font-light" style={{}}>AI</span></span>
</div>

<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8 text-sm font-medium">
<a className="text-slate-900 hover:text-indigo-600 transition-colors" href="#" style={{}}>Product</a>
<a className="text-slate-500 hover:text-indigo-600 transition-colors" href="#" style={{}}>Solutions</a>
<a className="text-slate-500 hover:text-indigo-600 transition-colors" href="#" style={{}}>Pricing</a>
<a className="text-slate-500 hover:text-indigo-600 transition-colors" href="#" style={{}}>API</a>
</div>
</div>

<div className="hidden md:block">
<button className="text-slate-600 hover:text-slate-900 px-4 py-2 text-xs font-medium transition-colors mr-1">Log in</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-lg text-xs font-medium shadow-lg shadow-slate-200 transition-all transform hover:-translate-y-0.5" style={{}}>Get Started</button>
</div>

<div className="-mr-2 flex md:hidden">
<button className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none" type="button">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="z-10 pt-28 pb-12 relative">

<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-indigo-600 text-xs font-medium mb-8 animate-float" style={{}}>
<iconify-icon className="text-indigo-500" icon="lucide:sparkles" style={{}}></iconify-icon>
<span className="">New: GPT-4o Powered Analysis</span>
</div>
<h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                Understand documents <br/>
<span className="text-gradient">at the speed of AI.</span>
</h1>
<p className="mt-6 max-w-2xl mx-auto text-lg text-slate-500 font-light leading-relaxed">
                Summarize, analyze, and transform PDFs and Images instantly. <br/>
                Just drop your file below to unleash the power of FusionDocs.
            </p>

<div className="mt-12 relative max-w-4xl mx-auto">

<div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-3xl blur-2xl opacity-60" style={{}}></div>
<div className="relative glass-panel rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-white/80">

<div className="flex items-center justify-between px-8 py-5 border-b border-slate-100">
<div className="flex space-x-8">
<button className="text-sm font-medium text-indigo-600 border-b-2 border-indigo-600 pb-5 -mb-5.5" style={{}}>Upload PDF</button>
<button className="text-sm font-medium text-slate-400 hover:text-slate-600 pb-5 -mb-5.5 transition-colors" style={{}}>Paste URL</button>
</div>
<div className="flex items-center gap-2 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" style={{}}></span>
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-wide">Ready</span>
</div>
</div>
<div className="p-8 grid md:grid-cols-5 gap-8 bg-white/40">

<div className="md:col-span-3 border-2 border-dashed border-slate-200 hover:border-indigo-400 rounded-xl bg-slate-50/50 hover:bg-indigo-50/30 transition-all group flex flex-col items-center justify-center p-10 cursor-pointer relative overflow-hidden" style={{}}>
<div className="bg-white p-4 rounded-2xl mb-4 shadow-md shadow-slate-100 ring-1 ring-slate-100 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-indigo-500 text-3xl" icon="lucide:cloud-upload" style={{}}></iconify-icon>
</div>
<p className="text-slate-900 font-medium mb-1">Click to upload or drag PDF</p>
<p className="text-xs text-slate-400" style={{}}>Up to 100MB • PDF, DOCX, TXT</p>
<label className="absolute inset-0 cursor-pointer" htmlFor="hero-upload"></label>
<input id="hero-upload" type="file"/>
</div>

<div className="md:col-span-2 flex flex-col justify-between space-y-4">
<div>
<h3 className="text-sm font-medium text-slate-800 mb-5 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:sliders-horizontal" style={{}}></iconify-icon>
                                    Analysis Settings
                                </h3>
<div className="space-y-5">

<div className="group">
<label className="text-xs font-medium text-slate-500 mb-1.5 block">Summary Tone</label>
<div className="relative">
<select className="w-full bg-white border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 shadow-sm appearance-none cursor-pointer hover:border-slate-300 transition-colors" style={{}}>
<option>Professional</option>
<option>Academic</option>
<option>Simple / ELI5</option>
<option>Creative</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 pointer-events-none" icon="lucide:chevron-down" style={{}}></iconify-icon>
</div>
</div>

<div className="group">
<label className="text-xs font-medium text-slate-500 mb-1.5 block">Output Length</label>
<div className="flex bg-slate-100/80 rounded-lg p-1 border border-slate-200">
<button className="flex-1 text-xs py-1.5 rounded text-center text-slate-500 hover:text-slate-800 hover:bg-white transition-colors">Short</button>
<button className="flex-1 text-xs py-1.5 rounded text-center bg-white text-slate-800 shadow-sm border border-slate-100 font-medium">Medium</button>
<button className="flex-1 text-xs py-1.5 rounded text-center text-slate-500 hover:text-slate-800 hover:bg-white transition-colors">Detailed</button>
</div>
</div>

<div className="flex items-center gap-4 pt-1">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center group-hover:border-indigo-500 transition-colors shadow-sm" style={{}}>
<iconify-icon className="text-indigo-600 text-xs" icon="lucide:check" style={{}}></iconify-icon>
</div>
<span className="text-xs text-slate-600 group-hover:text-slate-900">Bullet Points</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 border border-slate-300 rounded bg-white group-hover:border-indigo-500 transition-colors shadow-sm" style={{}}></div>
<span className="text-xs text-slate-600 group-hover:text-slate-900">Raw Text</span>
</label>
</div>
</div>
</div>
<button className="w-full group relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-slate-900 rounded-lg hover:bg-slate-800 focus:outline-none shadow-lg shadow-slate-900/10 overflow-hidden mt-2" style={{}}>
<span className="absolute inset-0 w-full h-full -mt-10 transition-all duration-700 opacity-0 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:opacity-100 group-hover:translate-y-20 ease-in-out"></span>
<iconify-icon className="mr-2 text-lg" icon="lucide:wand-2"></iconify-icon>
                                Summarize Now
                            </button>
</div>
</div>
</div>
</div>
</section>

<div className="sticky top-20 z-40 flex justify-center mb-12">
<div className="glass-panel bg-slate-100/80 backdrop-blur-md rounded-full p-1.5 flex items-center relative border border-slate-200 shadow-sm">

<div className="absolute left-1.5 top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white border border-slate-200/50 rounded-full shadow-sm transition-all duration-300 ease-out z-0" id="switch-bg"></div>
<button className="relative z-10 flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium text-slate-900 transition-colors w-40 justify-center" id="btn-pdf" onclick="switchTab('pdf')">
<iconify-icon className="text-lg" icon="lucide:file-text"></iconify-icon>
                    PDF Tools
                </button>
<button className="relative z-10 flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors w-40 justify-center" id="btn-img" onclick="switchTab('img')">
<iconify-icon className="text-lg" icon="lucide:image"></iconify-icon>
                    Image Tools
                </button>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[500px] mb-20">

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 opacity-100 transition-opacity duration-300" id="pdf-grid">

<div className="col-span-2 row-span-2 glass-card rounded-2xl p-7 relative group overflow-hidden cursor-pointer flex flex-col justify-between bg-gradient-to-br from-indigo-50/50 to-white" style={{}}>
<div className="absolute top-0 right-0 p-4">
<span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-indigo-100" style={{}}>AI Powered</span>
</div>
<div className="z-10">
<div className="bg-white border border-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform" style={{}}>
<iconify-icon className="text-indigo-600 text-2xl" icon="lucide:message-square" style={{}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Chat with PDF</h3>
<p className="text-sm text-slate-500 leading-relaxed">Ask questions, extract data, and get citations from your documents instantly via an interactive AI assistant.</p>
</div>
<div className="mt-6 flex items-center text-indigo-600 text-sm font-medium group-hover:translate-x-1 transition-transform" style={{}}>
                        Start Chatting <iconify-icon className="ml-1" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>

<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-orange-500 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:layers"></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">Merge PDF</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>Combine multiple files</p>
</a>
<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-pink-500 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:scissors" style={{}}></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">Split PDF</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>Extract specific pages</p>
</a>
<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-emerald-500 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:shrink" style={{}}></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">Compress PDF</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>Reduce file size</p>
</a>
<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-blue-500 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:file-type-2" style={{}}></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">PDF to Word</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>Convert to editable DOCX</p>
</a>
<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-orange-600 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:presentation"></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">PDF to PPT</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>Convert to slides</p>
</a>
<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-green-600 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:sheet"></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">PDF to Excel</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>Extract tables to XLS</p>
</a>

<div className="col-span-1 glass-card rounded-xl p-5 group relative overflow-hidden bg-gradient-to-br from-purple-50 to-white" style={{}}>
<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" style={{}}></div>
<iconify-icon className="text-purple-600 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:file-search" style={{}}></iconify-icon>
<h4 className="text-sm font-medium text-slate-900">AI Contract Analyzer</h4>
<p className="text-xs text-slate-500 mt-1">Find risks instantly</p>
</div>
<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-yellow-500 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:pen-square"></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">Edit PDF</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>Add text, shapes, images</p>
</a>
<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-slate-500 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:lock"></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">Protect PDF</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>Encrypt with password</p>
</a>
<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-cyan-500 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:scan-text"></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">OCR PDF</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>Make text searchable</p>
</a>
</div>

<div className="hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 opacity-0 transition-opacity duration-300" id="img-grid">

<div className="col-span-2 row-span-2 glass-card rounded-2xl p-7 relative group overflow-hidden cursor-pointer flex flex-col justify-between bg-gradient-to-br from-pink-50/50 to-white" style={{}}>
<div className="absolute top-0 right-0 p-4">
<span className="bg-pink-50 text-pink-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-pink-100" style={{}}>AI Magic</span>
</div>
<div className="z-10">
<div className="bg-white border border-pink-50 w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform" style={{}}>
<iconify-icon className="text-pink-500 text-2xl" icon="lucide:eraser" style={{}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">AI Background Remover</h3>
<p className="text-sm text-slate-500 leading-relaxed">Instantly remove backgrounds from images with pixel-perfect precision. Perfect for e-commerce and marketing.</p>
</div>
<div className="mt-6 flex items-center text-pink-600 text-sm font-medium group-hover:translate-x-1 transition-transform" style={{}}>
                        Try it Free <iconify-icon className="ml-1" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>

<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-emerald-500 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:minimize-2" style={{}}></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">Compress Image</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>JPG, PNG, WebP</p>
</a>
<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-blue-500 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:scaling" style={{}}></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">Resize Image</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>Change dimensions</p>
</a>
<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-slate-600 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:crop"></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">Crop Image</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>Trim pixels</p>
</a>
<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-orange-500 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:image-plus"></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">Convert to JPG</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>From PNG, HEIC, WebP</p>
</a>

<div className="col-span-1 glass-card rounded-xl p-5 group relative overflow-hidden bg-gradient-to-br from-blue-50 to-white" style={{}}>
<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" style={{}}></div>
<iconify-icon className="text-blue-500 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:maximize" style={{}}></iconify-icon>
<h4 className="text-sm font-medium text-slate-900">AI Upscaler</h4>
<p className="text-xs text-slate-500 mt-1">4x Resolution Boost</p>
</div>
<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-slate-500 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:rotate-cw"></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">Rotate Image</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>Fix orientation</p>
</a>
<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-cyan-500 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:droplet"></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">Watermark</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>Stamp your logo</p>
</a>
<a className="glass-card rounded-xl p-5 group hover:bg-slate-50/50" href="#" style={{}}>
<iconify-icon className="text-yellow-500 text-2xl mb-3 group-hover:scale-110 transition-transform" icon="lucide:smile"></iconify-icon>
<h4 className="text-sm font-medium text-slate-800">Meme Gen</h4>
<p className="text-xs text-slate-400 mt-1" style={{}}>Add text to images</p>
</a>
</div>
</div>

<section className="py-32 relative bg-white/50 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Effortless processing in three steps</h2>
<p className="text-slate-500 text-lg font-light">Simple, fast, and secure document management workflow designed for everyone.</p>
</div>
<div className="relative max-w-5xl mx-auto">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gradient-to-r from-slate-200 via-indigo-200 to-slate-200 rounded-full" style={{}}></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

<div className="flex flex-col items-center text-center group">
<div className="relative w-24 h-24 rounded-full bg-white border border-slate-200 shadow-xl shadow-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-indigo-200 transition-all duration-300" style={{}}>
<div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold border-[3px] border-white shadow-sm" style={{}}>1</div>
<iconify-icon className="text-3xl text-indigo-600 stroke-[1.5]" icon="lucide:mouse-pointer-2" style={{}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Choose Your Tool</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-[260px]">Select from 35+ professional tools for specific PDF and image tasks.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="relative w-24 h-24 rounded-full bg-white border border-slate-200 shadow-xl shadow-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-indigo-200 transition-all duration-300" style={{}}>
<div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold border-[3px] border-white shadow-sm" style={{}}>2</div>
<iconify-icon className="text-3xl text-indigo-600 stroke-[1.5]" icon="lucide:upload-cloud" style={{}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Upload Your Files</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-[260px]">Drag and drop or browse to upload. We support all major formats securely.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="relative w-24 h-24 rounded-full bg-white border border-slate-200 shadow-xl shadow-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-indigo-200 transition-all duration-300" style={{}}>
<div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold border-[3px] border-white shadow-sm" style={{}}>3</div>
<iconify-icon className="text-3xl text-indigo-600 stroke-[1.5]" icon="lucide:download" style={{}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Download Results</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-[260px]">Get your processed files instantly. Fast, secure, and hassle-free results.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-50 skew-y-1 transform origin-top-left -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-indigo-600 font-semibold text-sm tracking-wide uppercase" style={{}}>Community</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mt-2">Loved by productivity pros</h2>
<p className="text-slate-500 mt-4 text-lg font-light">Join thousands of users who trust FusionDocs for their daily document workflows.</p>
</div>
<div className="flex items-center gap-1 text-yellow-400">
<iconify-icon className="text-xl fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-xl fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-xl fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-xl fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-xl fill-current" icon="lucide:star"></iconify-icon>
<span className="text-slate-900 font-semibold ml-2 text-sm">4.9/5 from 2,000+ reviews</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
<div>
<h4 className="text-slate-900 font-medium text-sm">Sarah Jenkins</h4>
<p className="text-slate-400 text-xs" style={{}}>Product Manager at TechFlow</p>
</div>
<iconify-icon className="ml-auto opacity-50 grayscale hover:grayscale-0 transition-all" icon="logos:stripe"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed">"The AI summarization feature is a game changer. I used to spend hours reading contracts, now I get the key points in seconds. Absolutely essential tool."</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<div>
<h4 className="text-slate-900 font-medium text-sm">David Chen</h4>
<p className="text-slate-400 text-xs" style={{}}>Legal Consultant</p>
</div>
<iconify-icon className="ml-auto opacity-50 grayscale hover:grayscale-0 transition-all" icon="logos:airbnb"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed">"Security was my main concern with online PDF tools. FusionDocs' commitment to privacy and automatic deletion policies won me over. It's fast and safe."</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a04258114e29026302d"/>
</div>
<div>
<h4 className="text-slate-900 font-medium text-sm">Elena Rodriguez</h4>
<p className="text-slate-400 text-xs" style={{}}>Creative Director</p>
</div>
<iconify-icon className="ml-auto opacity-50 grayscale hover:grayscale-0 transition-all" icon="logos:spotify"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed">"I use the image tools daily for quick edits and background removal. The quality is far better than other free tools I've tried. Highly recommended!"</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-slate-900 rounded-3xl p-10 md:p-16 overflow-hidden relative" style={{}}>

<div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-20 pointer-events-none" style={{}}></div>
<div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20 pointer-events-none" style={{}}></div>
<div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6" style={{}}>
<iconify-icon className="text-indigo-400" icon="lucide:shield-check" style={{}}></iconify-icon>
<span>Enterprise Grade Security</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Your data stays yours.<br/>Always secure.</h2>
<p className="text-slate-400 text-lg font-light leading-relaxed mb-8" style={{}}>We use bank-level encryption to process your files. All documents are automatically deleted from our servers after 1 hour.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300 text-sm">
<div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20" style={{}}>
<iconify-icon className="text-emerald-500 text-xs" icon="lucide:check" style={{}}></iconify-icon>
</div>
                                    256-bit SSL Encryption
                                </li>
<li className="flex items-center gap-3 text-slate-300 text-sm">
<div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20" style={{}}>
<iconify-icon className="text-emerald-500 text-xs" icon="lucide:check" style={{}}></iconify-icon>
</div>
                                    GDPR &amp; CCPA Compliant
                                </li>
<li className="flex items-center gap-3 text-slate-300 text-sm">
<div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20" style={{}}>
<iconify-icon className="text-emerald-500 text-xs" icon="lucide:check" style={{}}></iconify-icon>
</div>
                                    ISO 27001 Certified Datacenters
                                </li>
</ul>
</div>
<div className="relative">
<div className="glass-panel bg-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
<div className="flex items-center justify-center mb-8">
<iconify-icon className="text-6xl text-white/80" icon="lucide:lock"></iconify-icon>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5" style={{}}>
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-300 text-xl" icon="lucide:file-lock-2" style={{}}></iconify-icon>
<div className="text-left">
<div className="text-white text-xs font-medium">Auto-Deletion</div>
<div className="text-slate-400 text-[10px]" style={{}}>Files removed instantly</div>
</div>
</div>
<div className="text-emerald-400 text-xs font-medium" style={{}}>Active</div>
</div>
<div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5" style={{}}>
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-300 text-xl" icon="lucide:server" style={{}}></iconify-icon>
<div className="text-left">
<div className="text-white text-xs font-medium">Encrypted Storage</div>
<div className="text-slate-400 text-[10px]" style={{}}>AES-256 Standard</div>
</div>
</div>
<div className="text-emerald-400 text-xs font-medium" style={{}}>Active</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#0f172a] text-slate-400 border-t border-slate-800 relative z-10 pt-16 pb-8" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">

<div className="col-span-2 md:col-span-2 pr-8">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center" style={{}}>
<iconify-icon className="text-white text-lg" icon="lucide:zap"></iconify-icon>
</div>
<span className="font-semibold text-white text-lg tracking-tight">FusionDocs AI</span>
</div>
<p className="text-sm leading-relaxed mb-6 text-slate-400" style={{}}>
                        The all-in-one document intelligence platform. Process, analyze, and convert files with state-of-the-art AI technology.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors" href="#" style={{}}><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors" href="#" style={{}}><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors" href="#" style={{}}><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white text-sm font-semibold mb-4">Product</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Resources</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a> <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-1.5 py-0.5 rounded ml-1" style={{}}>Hiring</span></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>

<div className="col-span-2 md:col-span-1">
<h4 className="text-white text-sm font-semibold mb-4">Status</h4>
<div className="flex items-center gap-2 text-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" style={{}}></span>
<span className="text-emerald-500 font-medium" style={{}}>All systems normal</span>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<div>© 2024 FusionDocs AI Inc. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
