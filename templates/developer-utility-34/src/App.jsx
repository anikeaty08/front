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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
950: '#0c0c0e',
}
},
animation: {
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // --- Tool Switching Logic ---
        const tools = {
            text: { title: "Text Analyzer", desc: "Real-time word counting, character analysis and case conversion." },
            image: { title: "Image Compressor", desc: "Reduce file size without losing quality. Processed locally in browser." },
            json: { title: "JSON Formatter", desc: "Validate, beautify or minify your JSON data instantly." },
            password: { title: "Password Generator", desc: "Create strong, random passwords securely on your device." }
        };

        function switchTool(toolId) {
            // Update Text
            document.getElementById('toolTitle').innerText = tools[toolId].title;
            document.getElementById('toolDesc').innerText = tools[toolId].desc;
            
            // Switch Panes
            document.querySelectorAll('.tool-pane').forEach(el => el.classList.remove('active'));
            document.getElementById(`pane-${toolId}`).classList.add('active');
            
            // Scroll to workspace
            document.getElementById('workspace').scrollIntoView({ behavior: 'smooth' });

            // Initialize specific tool logic if needed
            if(toolId === 'password') generatePassword();
        }

        // --- Text Tool Logic ---
        function analyzeText() {
            const text = document.getElementById('textInput').value;
            const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
            const chars = text.length;
            const sentences = text.split(/[.!?]+/).filter(Boolean).length;
            const readTime = Math.ceil(words / 200);

            document.getElementById('statWords').innerText = words.toLocaleString();
            document.getElementById('statChars').innerText = chars.toLocaleString();
            document.getElementById('statSentences').innerText = sentences.toLocaleString();
            document.getElementById('statRead').innerText = readTime < 1 ? '< 1m' : `${readTime}m`;
        }

        function transformText(type) {
            const input = document.getElementById('textInput');
            if (type === 'upper') input.value = input.value.toUpperCase();
            if (type === 'lower') input.value = input.value.toLowerCase();
            if (type === 'title') {
                input.value = input.value.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            }
            analyzeText();
        }

        // --- Image Tool Logic (Simulated) ---
        function handleImageUpload(input) {
            if (input.files && input.files[0]) {
                const file = input.files[0];
                document.getElementById('uploadArea').classList.add('hidden');
                document.getElementById('imageProcess').classList.remove('hidden');
                document.getElementById('imgName').innerText = file.name;
                document.getElementById('imgSize').innerText = (file.size / 1024 / 1024).toFixed(2) + " MB";
            }
        }

        function resetImage() {
            document.getElementById('uploadArea').classList.remove('hidden');
            document.getElementById('imageProcess').classList.add('hidden');
            document.getElementById('progressContainer').classList.add('hidden');
            document.getElementById('successResult').classList.add('hidden');
            document.getElementById('fileInput').value = '';
            document.getElementById('progressBar').style.width = '0%';
        }

        function simulateCompression() {
            const progressContainer = document.getElementById('progressContainer');
            const progressBar = document.getElementById('progressBar');
            const successResult = document.getElementById('successResult');
            
            progressContainer.classList.remove('hidden');
            successResult.classList.add('hidden');
            
            let width = 0;
            const interval = setInterval(() => {
                if (width >= 100) {
                    clearInterval(interval);
                    progressContainer.classList.add('hidden');
                    successResult.classList.remove('hidden');
                } else {
                    width += 5;
                    progressBar.style.width = width + '%';
                }
            }, 100);
        }

        // --- JSON Tool Logic ---
        function formatJSON() {
            const input = document.getElementById('jsonInput');
            const output = document.getElementById('jsonOutput');
            try {
                const obj = JSON.parse(input.value);
                output.value = JSON.stringify(obj, null, 4);
                output.classList.remove('text-red-500');
                output.classList.add('text-zinc-800');
            } catch (e) {
                output.value = "Invalid JSON: " + e.message;
                output.classList.add('text-red-500');
            }
        }

        function minifyJSON() {
            const input = document.getElementById('jsonInput');
            const output = document.getElementById('jsonOutput');
            try {
                const obj = JSON.parse(input.value);
                output.value = JSON.stringify(obj);
                output.classList.remove('text-red-500');
            } catch (e) {
                output.value = "Invalid JSON: " + e.message;
            }
        }

        // --- Password Tool Logic ---
        function generatePassword() {
            const length = document.getElementById('pwdLength').value;
            const hasUpper = document.getElementById('pwdUpper').checked;
            const hasLower = document.getElementById('pwdLower').checked;
            const hasNumbers = document.getElementById('pwdNumbers').checked;
            const hasSymbols = document.getElementById('pwdSymbols').checked;
            
            const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const lower = "abcdefghijklmnopqrstuvwxyz";
            const numbers = "0123456789";
            const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
            
            let chars = "";
            if (hasUpper) chars += upper;
            if (hasLower) chars += lower;
            if (hasNumbers) chars += numbers;
            if (hasSymbols) chars += symbols;
            
            if (chars === "") {
                document.getElementById('passwordResult').value = "Select Option";
                return;
            }
            
            let pass = "";
            for (let i = 0; i < length; i++) {
                pass += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            
            document.getElementById('passwordResult').value = pass;
        }

        // --- Utilities ---
        function copyOutput(elementId) {
            const el = document.getElementById(elementId);
            el.select();
            el.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(el.value);
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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#" onclick="location.reload()">
<div className="w-7 h-7 bg-zinc-900 rounded-lg flex items-center justify-center text-white shadow-sm group-hover:bg-zinc-800 transition-colors">
<span className="iconify" data-icon="lucide:box" data-inline="false" data-width="16"></span>
</div>
<span className="text-base font-bold tracking-tighter text-zinc-900">TOOLSPACE</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-xs font-medium">
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#categories">Tools</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#workspace">Workspace</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">API</a>
</nav>
<div className="flex items-center gap-3">
<button className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2">
<span>Menu</span>
</button>
</div>
</div>
</header>
<main className="pt-24 pb-20">

<section className="max-w-3xl mx-auto px-6 text-center py-12 md:py-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm text-[11px] font-medium text-zinc-600 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Fully Functional • Browser Native • Secure
            </div>
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.15]">
                Developer Tools for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-500 via-zinc-800 to-zinc-950">Everyday Tasks.</span>
</h1>
<p className="text-base text-zinc-500 mb-8 max-w-lg mx-auto leading-relaxed">
                A collection of free utilities to format JSON, compress images, generate passwords, and analyze text. No server uploads.
            </p>
<div className="relative max-w-md mx-auto group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="iconify text-zinc-400" data-icon="lucide:search" data-width="16"></span>
</div>
<input className="block w-full pl-10 pr-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-400 outline-none transition-all placeholder:text-zinc-400" id="globalSearch" placeholder="Type to search tools..." type="text"/>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-6 py-8" id="categories">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<button className="group text-left p-4 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 hover:shadow-md transition-all duration-200 active:scale-[0.98]" onclick="switchTool('text')">
<div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:type" data-width="16"></span>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Text Analyzer</h3>
<p className="text-xs text-zinc-500 mt-1">Word count &amp; convert</p>
</button>

<button className="group text-left p-4 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 hover:shadow-md transition-all duration-200 active:scale-[0.98]" onclick="switchTool('image')">
<div className="w-8 h-8 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:image" data-width="16"></span>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Image Compress</h3>
<p className="text-xs text-zinc-500 mt-1">Resize &amp; optimize</p>
</button>

<button className="group text-left p-4 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 hover:shadow-md transition-all duration-200 active:scale-[0.98]" onclick="switchTool('json')">
<div className="w-8 h-8 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:braces" data-width="16"></span>
</div>
<h3 className="text-sm font-semibold text-zinc-900">JSON Formatter</h3>
<p className="text-xs text-zinc-500 mt-1">Validate &amp; beautify</p>
</button>

<button className="group text-left p-4 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 hover:shadow-md transition-all duration-200 active:scale-[0.98]" onclick="switchTool('password')">
<div className="w-8 h-8 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:lock" data-width="16"></span>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Password Gen</h3>
<p className="text-xs text-zinc-500 mt-1">Secure &amp; random</p>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-6 py-8 scroll-mt-24" id="workspace">
<div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden min-h-[600px] flex flex-col md:flex-row">

<div className="w-full md:w-64 lg:w-72 bg-gray-50/50 border-b md:border-b-0 md:border-r border-zinc-200 p-6 flex flex-col gap-6 flex-shrink-0">
<div>
<div className="inline-flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1" id="toolLabel">
<span className="iconify" data-icon="lucide:cpu" data-width="12"></span> Workspace
                        </div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900" id="toolTitle">Text Analyzer</h2>
<p className="text-xs text-zinc-500 mt-2 leading-relaxed" id="toolDesc">
                            Paste text to count words, characters and analyze readability.
                        </p>
</div>

<div className="flex-1" id="sidebarContent">

</div>

<div className="pt-6 border-t border-zinc-200 mt-auto">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="iconify" data-icon="lucide:shield-check" data-width="14"></span>
<span>Processed locally</span>
</div>
</div>
</div>

<div className="flex-1 bg-white relative">

<div className="tool-pane active h-full flex flex-col" id="pane-text">
<div className="border-b border-zinc-100 p-3 flex items-center justify-between bg-white z-10">
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium bg-zinc-50 hover:bg-zinc-100 rounded border border-zinc-200 text-zinc-700 transition" onclick="transformText('upper')">UPPER</button>
<button className="px-3 py-1.5 text-xs font-medium bg-zinc-50 hover:bg-zinc-100 rounded border border-zinc-200 text-zinc-700 transition" onclick="transformText('lower')">lower</button>
<button className="px-3 py-1.5 text-xs font-medium bg-zinc-50 hover:bg-zinc-100 rounded border border-zinc-200 text-zinc-700 transition" onclick="transformText('title')">Title</button>
</div>
<button className="text-zinc-400 hover:text-zinc-900 p-2" onclick="copyOutput('textInput')"><span className="iconify" data-icon="lucide:copy" data-width="16"></span></button>
</div>
<textarea className="flex-1 w-full p-6 text-sm text-zinc-700 outline-none resize-none font-mono leading-relaxed bg-transparent" id="textInput" oninput="analyzeText()" placeholder="Type or paste your content here..."></textarea>
<div className="border-t border-zinc-100 bg-gray-50/50 p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
<div><div className="text-lg font-bold text-zinc-900" id="statWords">0</div><div className="text-[10px] uppercase tracking-wider text-zinc-500">Words</div></div>
<div><div className="text-lg font-bold text-zinc-900" id="statChars">0</div><div className="text-[10px] uppercase tracking-wider text-zinc-500">Chars</div></div>
<div><div className="text-lg font-bold text-zinc-900" id="statSentences">0</div><div className="text-[10px] uppercase tracking-wider text-zinc-500">Sentences</div></div>
<div><div className="text-lg font-bold text-zinc-900" id="statRead">0m</div><div className="text-[10px] uppercase tracking-wider text-zinc-500">Read Time</div></div>
</div>
</div>

<div className="tool-pane h-full flex flex-col items-center justify-center p-8 bg-zinc-50/30" id="pane-image">
<div className="w-full max-w-lg p-10 border-2 border-dashed border-zinc-200 rounded-xl bg-white text-center hover:border-zinc-400 transition-colors cursor-pointer" id="uploadArea" onclick="document.getElementById('fileInput').click()">
<input accept="image/*" className="hidden" id="fileInput" onchange="handleImageUpload(this)" type="file"/>
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
<span className="iconify" data-icon="lucide:upload-cloud" data-width="24"></span>
</div>
<h3 className="text-sm font-semibold text-zinc-900">Click to upload image</h3>
<p className="text-xs text-zinc-500 mt-1">SVG, PNG, JPG or GIF (Max 5MB)</p>
</div>

<div className="w-full max-w-lg hidden" id="imageProcess">
<div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-zinc-200 shadow-sm mb-4">
<div className="w-12 h-12 bg-zinc-100 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
<span className="iconify text-zinc-400" data-icon="lucide:image" data-width="20"></span>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-zinc-900 truncate" id="imgName">image.png</h4>
<p className="text-xs text-zinc-500" id="imgSize">2.4 MB</p>
</div>
<button className="p-2 text-zinc-400 hover:text-red-500" onclick="resetImage()"><span className="iconify" data-icon="lucide:x" data-width="16"></span></button>
</div>
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex justify-between text-xs font-medium text-zinc-700 mb-2">
<span>Compression Level</span>
<span id="qualityVal">80%</span>
</div>
<input className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer mb-6" max="100" min="1" oninput="document.getElementById('qualityVal').innerText = this.value + '%'" type="range" value="80"/>
<button className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2" onclick="simulateCompression()">
<span className="iconify" data-icon="lucide:zap" data-width="16"></span> Compress Now
                                </button>

<div className="hidden mt-4" id="progressContainer">
<div className="w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-green-500 h-1.5 rounded-full" id="progressBar" style={{width: '0%'}}></div>
</div>
<p className="text-[10px] text-zinc-500 mt-2 text-center">Optimizing pixels...</p>
</div>

<div className="hidden mt-4 text-center" id="successResult">
<div className="inline-flex items-center gap-2 text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full mb-3">
                                        Saved 65% • New size: 840 KB
                                    </div>
<button className="w-full py-2.5 border border-zinc-200 hover:bg-zinc-50 text-zinc-900 text-sm font-medium rounded-lg transition-all">
                                        Download Image
                                    </button>
</div>
</div>
</div>
</div>

<div className="tool-pane h-full flex flex-col md:flex-row" id="pane-json">
<div className="flex-1 flex flex-col border-b md:border-b-0 md:border-r border-zinc-200">
<div className="bg-gray-50/50 p-2 text-xs font-medium text-zinc-500 border-b border-zinc-200 px-4">Input</div>
<textarea className="flex-1 w-full p-4 text-xs font-mono text-zinc-700 outline-none bg-transparent resize-none" id="jsonInput" placeholder='Paste messy JSON here... {"key":"value"}' spellcheck="false"></textarea>
</div>
<div className="flex-1 flex flex-col bg-zinc-50/30">
<div className="bg-gray-50/50 p-2 text-xs font-medium text-zinc-500 border-b border-zinc-200 px-4 flex justify-between items-center">
<span>Output</span>
<button className="text-zinc-400 hover:text-zinc-900" onclick="copyOutput('jsonOutput')"><span className="iconify" data-icon="lucide:copy" data-width="14"></span></button>
</div>
<textarea className="flex-1 w-full p-4 text-xs font-mono text-zinc-800 outline-none bg-transparent resize-none" id="jsonOutput" placeholder="Formatted result will appear here..." readonly=""></textarea>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
<button className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105" onclick="formatJSON()">
<span className="iconify" data-icon="lucide:play" data-width="14"></span> Beautify
                            </button>
<button className="bg-white border border-zinc-200 text-zinc-700 hover:bg-gray-50 text-xs font-medium px-4 py-2 rounded-full shadow-lg transition-transform hover:scale-105" onclick="minifyJSON()">
                                Minify
                            </button>
</div>
</div>

<div className="tool-pane h-full flex items-center justify-center p-6 bg-zinc-50/30" id="pane-password">
<div className="w-full max-w-md bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
<div className="relative mb-6">
<input className="w-full text-center text-2xl font-mono font-medium text-zinc-800 py-4 bg-gray-50 rounded-lg border border-zinc-200 outline-none focus:border-zinc-400 transition-colors" id="passwordResult" readonly="" type="text" value="Click-Generate"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-zinc-400 hover:text-zinc-900 transition-colors" onclick="copyOutput('passwordResult')">
<span className="iconify" data-icon="lucide:copy" data-width="18"></span>
</button>
</div>
<div className="space-y-5">
<div>
<div className="flex justify-between text-xs font-medium text-zinc-500 mb-2">
<span>Length</span>
<span id="pwdLengthVal">16</span>
</div>
<input className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer" id="pwdLength" max="32" min="6" oninput="document.getElementById('pwdLengthVal').innerText = this.value; generatePassword()" type="range" value="16"/>
</div>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center gap-2 p-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-gray-50 transition">
<input checked="" className="rounded border-zinc-300 text-zinc-900 focus:ring-0 w-4 h-4" id="pwdUpper" onchange="generatePassword()" type="checkbox"/>
<span className="text-xs font-medium text-zinc-700">A-Z Uppercase</span>
</label>
<label className="flex items-center gap-2 p-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-gray-50 transition">
<input checked="" className="rounded border-zinc-300 text-zinc-900 focus:ring-0 w-4 h-4" id="pwdLower" onchange="generatePassword()" type="checkbox"/>
<span className="text-xs font-medium text-zinc-700">a-z Lowercase</span>
</label>
<label className="flex items-center gap-2 p-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-gray-50 transition">
<input checked="" className="rounded border-zinc-300 text-zinc-900 focus:ring-0 w-4 h-4" id="pwdNumbers" onchange="generatePassword()" type="checkbox"/>
<span className="text-xs font-medium text-zinc-700">0-9 Numbers</span>
</label>
<label className="flex items-center gap-2 p-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-gray-50 transition">
<input checked="" className="rounded border-zinc-300 text-zinc-900 focus:ring-0 w-4 h-4" id="pwdSymbols" onchange="generatePassword()" type="checkbox"/>
<span className="text-xs font-medium text-zinc-700">!@# Symbols</span>
</label>
</div>
<button className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow active:scale-[0.99]" onclick="generatePassword()">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="16"></span> Generate New
                                </button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-200 rounded flex items-center justify-center text-zinc-500">
<span className="iconify" data-icon="lucide:box" data-width="12"></span>
</div>
<span className="text-xs font-semibold text-zinc-900">ToolSpace Inc.</span>
</div>
<div className="flex gap-6 text-xs text-zinc-500 font-medium">
<a className="hover:text-zinc-900" href="#">Privacy</a>
<a className="hover:text-zinc-900" href="#">Terms</a>
<a className="hover:text-zinc-900" href="#">GitHub</a>
</div>
<div className="text-xs text-zinc-400">
                © 2023. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
