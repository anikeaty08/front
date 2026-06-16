import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // State Management
        let currentHTML = "";
        let isMobile = false;

        // DOM Elements
        const promptInput = document.getElementById('prompt-input');
        const chatContainer = document.getElementById('chat-container');
        const previewFrame = document.getElementById('app-preview');
        const previewWrapper = document.getElementById('preview-wrapper');
        const emptyState = document.getElementById('empty-state');
        const loadingIndicator = document.getElementById('loading-indicator');
        const btnDesktop = document.getElementById('btn-desktop');
        const btnMobile = document.getElementById('btn-mobile');

        // Handle Enter Key in Textarea
        promptInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handlePrompt();
            }
        });

        function handlePrompt() {
            const text = promptInput.value.trim();
            if (!text) return;

            // 1. Add User Message
            addMessage(text, 'user');
            promptInput.value = '';

            // 2. Show Loading
            loadingIndicator.classList.remove('hidden');
            
            // 3. Simulate AI Generation (Delay)
            setTimeout(() => {
                const newCode = generateMockCode(text, currentHTML);
                updatePreview(newCode);
                
                // 4. Hide Loading & Add System Response
                loadingIndicator.classList.add('hidden');
                
                let responseText = "I've updated the app based on your request.";
                if (!currentHTML) responseText = "I've built the initial version of your app.";
                
                addMessage(responseText, 'system');
                currentHTML = newCode; // Update state

            }, 1500); // 1.5s simulated delay
        }

        function addMessage(text, role) {
            const div = document.createElement('div');
            
            if (role === 'user') {
                div.className = "flex justify-end";
                div.innerHTML = `
                    <div class="bg-blue-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[85%] shadow-sm leading-relaxed tracking-wide">
                        ${text}
                    </div>
                `;
            } else {
                div.className = "flex gap-3";
                div.innerHTML = `
                    <div class="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                    </div>
                    <div class="text-sm text-gray-600 leading-relaxed bg-gray-50 px-4 py-2.5 rounded-2xl rounded-tl-sm border border-gray-100 max-w-[90%]">
                        ${text}
                    </div>
                `;
            }
            chatContainer.appendChild(div);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        function updatePreview(htmlCode) {
            // Hide empty state, show preview
            emptyState.style.display = 'none';
            previewWrapper.classList.remove('opacity-0');
            
            const doc = previewFrame.contentWindow.document;
            doc.open();
            doc.write(htmlCode);
            doc.close();
        }

        function setPreviewMode(mode) {
            isMobile = mode === 'mobile';
            if (isMobile) {
                previewWrapper.style.width = '375px';
                btnMobile.className = "p-1.5 rounded bg-gray-100 text-gray-900 shadow-sm";
                btnDesktop.className = "p-1.5 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors";
            } else {
                previewWrapper.style.width = '100%';
                btnDesktop.className = "p-1.5 rounded bg-gray-100 text-gray-900 shadow-sm";
                btnMobile.className = "p-1.5 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors";
            }
        }

        function downloadProject() {
            if (!currentHTML) {
                alert("Please generate an app first.");
                return;
            }
            const zip = new JSZip();
            zip.file("index.html", currentHTML);
            zip.file("README.txt", "Generated with AI AppGen.\nOpen index.html to run your app.");
            
            zip.generateAsync({type:"blob"})
            .then(function(content) {
                const a = document.createElement("a");
                a.href = URL.createObjectURL(content);
                a.download = "my-ai-app.zip";
                a.click();
            });
        }

        function resetApp() {
            currentHTML = "";
            previewWrapper.classList.add('opacity-0');
            setTimeout(() => {
                emptyState.style.display = 'flex';
                const doc = previewFrame.contentWindow.document;
                doc.open();
                doc.write('');
                doc.close();
            }, 300);
            chatContainer.innerHTML = `
                <div class="flex gap-3">
                    <div class="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                    </div>
                    <div class="space-y-1">
                        <p class="text-sm text-gray-600 leading-relaxed">
                            Project reset. Ready for a new idea!
                        </p>
                    </div>
                </div>
            `;
        }

        // --- MOCK AI ENGINE ---
        // This simulates the LLM behavior by returning pre-set templates based on keywords.
        // In a real app, this would call an API.
        function generateMockCode(prompt, existingCode) {
            const p = prompt.toLowerCase();
            
            // Base template with Tailwind
            const baseStart = `<!DOCTYPE html><html><head><script src="https://cdn.tailwindcss.com"><\/script><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet"><style>body{font-family:'Inter',sans-serif;}</style></head><body class="bg-white text-slate-800">`;
            const baseEnd = `</body></html>`;

            // If updating an existing app (simple color/text changes logic mock)
            if (existingCode && (p.includes("color") || p.includes("red") || p.includes("blue") || p.includes("dark"))) {
                let newBody = existingCode;
                if (p.includes("dark")) {
                    newBody = newBody.replace(/bg-white/g, "bg-slate-900").replace(/text-slate-800/g, "text-white").replace(/bg-gray-50/g, "bg-slate-800").replace(/border-gray-200/g, "border-slate-700");
                } else if (p.includes("blue")) {
                    newBody = newBody.replace(/bg-black/g, "bg-blue-600").replace(/bg-slate-900/g, "bg-blue-600");
                } else if (p.includes("green")) {
                    newBody = newBody.replace(/bg-black/g, "bg-green-600").replace(/bg-blue-600/g, "bg-green-600");
                }
                return newBody;
            }

            // Keyword based generation
            if (p.includes("login") || p.includes("sign in")) {
                return `${baseStart}
                    <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                        <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-200 w-full max-w-sm">
                            <h2 class="text-2xl font-semibold tracking-tight text-center mb-6">Welcome Back</h2>
                            <form class="space-y-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="you@example.com">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="••••••••">
                                </div>
                                <button class="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors">Sign In</button>
                            </form>
                            <p class="text-center text-xs text-gray-500 mt-4">Don't have an account? <a href="#" class="text-blue-600 hover:underline">Sign up</a></p>
                        </div>
                    </div>
                ${baseEnd}`;
            }

            if (p.includes("landing") || p.includes("website")) {
                return `${baseStart}
                    <nav class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                        <div class="font-bold text-xl tracking-tight">Brand</div>
                        <div class="space-x-4 text-sm font-medium text-gray-600">
                            <a href="#" class="hover:text-black">Features</a>
                            <a href="#" class="hover:text-black">Pricing</a>
                            <a href="#" class="hover:text-black">About</a>
                        </div>
                    </nav>
                    <main class="px-6 py-20 text-center max-w-4xl mx-auto">
                        <h1 class="text-5xl font-bold tracking-tight text-gray-900 mb-6">Build something amazing today.</h1>
                        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Launch your next project with speed and style. Our platform handles the complexity so you can focus on the product.</p>
                        <div class="flex justify-center gap-4">
                            <button class="bg-black text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">Get Started</button>
                            <button class="bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">Learn More</button>
                        </div>
                    </main>
                    <section class="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12 max-w-6xl mx-auto">
                        <div class="p-6 bg-gray-50 rounded-2xl">
                            <h3 class="font-semibold text-lg mb-2">Fast Performance</h3>
                            <p class="text-sm text-gray-600">Optimized for speed and efficiency out of the box.</p>
                        </div>
                        <div class="p-6 bg-gray-50 rounded-2xl">
                            <h3 class="font-semibold text-lg mb-2">Secure</h3>
                            <p class="text-sm text-gray-600">Enterprise grade security for your data.</p>
                        </div>
                        <div class="p-6 bg-gray-50 rounded-2xl">
                            <h3 class="font-semibold text-lg mb-2">Scalable</h3>
                            <p class="text-sm text-gray-600">Grow from one user to one million seamlessly.</p>
                        </div>
                    </section>
                ${baseEnd}`;
            }

            // Default fallback
            return `${baseStart}
                <div class="min-h-screen flex flex-col items-center justify-center p-4 text-center">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 mb-4">Your App Starts Here</h1>
                    <p class="text-gray-500 mb-8 max-w-md">You requested: "${prompt}". <br>Try asking for a specific component like "Login Page" or "Landing Page".</p>
                    <button class="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-sm hover:bg-blue-700 transition-colors">Example Button</button>
                </div>
            ${baseEnd}`;
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 shrink-0 z-20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white font-semibold tracking-tighter text-sm">
                AI
            </div>
<span className="font-medium text-sm tracking-tight text-gray-900">AppGen</span>
<span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide border border-gray-200 uppercase">Beta</span>
</div>
<div className="flex items-center gap-2">
<button className="text-gray-500 hover:text-gray-900 hover:bg-gray-50 px-3 py-1.5 rounded-md text-xs font-medium transition-colors" onclick="resetApp()">
                New Project
            </button>
<button className="bg-gray-900 hover:bg-black text-white px-3 py-1.5 rounded-md text-xs font-medium shadow-sm flex items-center gap-2 transition-all active:scale-95" onclick="downloadProject()">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
<span>Download App</span>
</button>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<section className="w-full max-w-[400px] flex flex-col border-r border-gray-200 bg-white relative z-10 shadow-sm transition-all duration-300" id="sidebar">

<div className="flex-1 overflow-y-auto p-4 space-y-6" id="chat-container">

<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
<i className="w-3 h-3 text-gray-600" data-lucide="sparkles"></i>
</div>
<div className="space-y-1">
<p className="text-sm text-gray-600 leading-relaxed">
                            Hi there! I can build web apps for you instantly. Just describe what you need.
                        </p>
<p className="text-xs text-gray-400">Try: "Build a landing page for a coffee shop" or "Create a login form".</p>
</div>
</div>
</div>

<div className="hidden px-4 pb-4" id="loading-indicator">
<div className="flex gap-3 items-center">
<div className="w-6 h-6 rounded-full bg-transparent flex items-center justify-center shrink-0">
<div className="loader border-gray-300 border-t-gray-800 w-3 h-3"></div>
</div>
<span className="text-xs text-gray-500 animate-pulse">Generating your app...</span>
</div>
</div>

<div className="p-4 border-t border-gray-100 bg-white">
<div className="relative group">
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300 focus:bg-white transition-all resize-none h-24 pr-10 leading-relaxed shadow-sm" id="prompt-input" placeholder="Describe your app or ask for changes..."></textarea>
<button className="absolute bottom-3 right-3 text-gray-400 hover:text-gray-900 bg-white p-1.5 rounded-lg border border-gray-100 shadow-sm hover:border-gray-300 transition-all active:scale-95" onclick="handlePrompt()">
<i className="w-4 h-4" data-lucide="arrow-up"></i>
</button>
</div>
<div className="flex justify-between items-center mt-2 px-1">
<span className="text-[10px] text-gray-400">AI-Generated Preview</span>
<span className="text-[10px] text-gray-400">Model v1.0</span>
</div>
</div>
</section>

<section className="flex-1 bg-gray-50/50 flex flex-col relative overflow-hidden">

<div className="h-10 flex items-center justify-between px-4 border-b border-gray-200 bg-gray-50/80 backdrop-blur-sm">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Live Preview</span>
<div className="h-1 w-1 rounded-full bg-green-500"></div>
</div>
<div className="flex items-center bg-white border border-gray-200 rounded-md shadow-sm p-0.5">
<button className="p-1.5 rounded bg-gray-100 text-gray-900 shadow-sm" id="btn-desktop" onclick="setPreviewMode('desktop')">
<i className="w-3.5 h-3.5" data-lucide="monitor"></i>
</button>
<button className="p-1.5 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors" id="btn-mobile" onclick="setPreviewMode('mobile')">
<i className="w-3.5 h-3.5" data-lucide="smartphone"></i>
</button>
</div>
</div>

<div className="flex-1 flex items-center justify-center p-4 overflow-hidden relative">

<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-0" id="empty-state">
<div className="w-12 h-12 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center mb-4">
<i className="w-6 h-6 text-gray-300" data-lucide="layout"></i>
</div>
<h3 className="text-sm font-medium text-gray-900">Your app will appear here</h3>
<p className="text-xs text-gray-400 mt-1 max-w-xs">Enter a prompt on the left to start building your application.</p>
</div>

<div className="relative w-full h-full transition-all duration-500 ease-in-out z-10 opacity-0 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden" id="preview-wrapper">
<iframe className="w-full h-full border-none bg-white" id="app-preview" title="App Preview"></iframe>
</div>
</div>
</section>
</main>



    </>
  );
}
