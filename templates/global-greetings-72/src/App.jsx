import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const textElement = document.getElementById("typewriter-text");
            const cursorElement = document.querySelector(".cursor");
            
            // Greetings in native scripts
            const texts = [
                "Hello",          // English
                "Bonjour",        // French
                "Hola",           // Spanish
                "Hallo",          // German
                "Ciao",           // Italian
                "こんにちは",       // Japanese
                "你好",            // Chinese (Simplified)
                "안녕하세요",        // Korean
                "नमस्ते",           // Hindi
                "Olá",            // Portuguese
                "Привет"          // Russian
            ];

            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            
            const typingDelay = 150;
            const erasingDelay = 100;
            const newTextDelay = 2000; // Pause before deleting

            function type() {
                const currentText = texts[textIndex];

                if (isDeleting) {
                    // Deleting text
                    charIndex--;
                    textElement.textContent = currentText.substring(0, charIndex);
                    cursorElement.classList.add("typing"); // Stop blinking while typing/deleting
                } else {
                    // Typing text
                    charIndex++;
                    textElement.textContent = currentText.substring(0, charIndex);
                    cursorElement.classList.add("typing");
                }

                if (!isDeleting && charIndex === currentText.length) {
                    // Finished typing word, wait before deleting
                    isDeleting = true;
                    cursorElement.classList.remove("typing"); // Start blinking
                    setTimeout(type, newTextDelay);
                } else if (isDeleting && charIndex === 0) {
                    // Finished deleting word, move to next
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    setTimeout(type, 500); // Small pause before typing next
                } else {
                    // Continue typing or deleting
                    const speed = isDeleting ? erasingDelay : typingDelay;
                    setTimeout(type, speed);
                }
            }

            // CSS Animation for fade in
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fadeIn 1s ease-out forwards;
                }
            `;
            document.head.appendChild(style);

            // Start typing
            setTimeout(type, 1000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-grid mask-image-gradient"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>
</div>

<nav className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 flex items-center justify-center shadow-inner">
<span className="font-semibold text-white tracking-tighter text-sm">G</span>
</div>
<span className="font-medium text-zinc-100 tracking-tight text-sm">Global</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-200 transition-colors duration-200" href="#">Product</a>
<a className="hover:text-zinc-200 transition-colors duration-200" href="#">Solutions</a>
<a className="hover:text-zinc-200 transition-colors duration-200" href="#">Developers</a>
<a className="hover:text-zinc-200 transition-colors duration-200" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="group relative px-4 py-2 bg-white text-zinc-950 text-xs font-medium rounded-full transition-transform active:scale-95 flex items-center gap-2 hover:bg-zinc-200" href="#">
<span>Start Building</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col justify-center items-center px-4 sm:px-6 py-20">

<div className="mb-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm shadow-sm transition-colors hover:border-zinc-700">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300">New language engine available</span>
</div>
</div>

<div className="text-center max-w-4xl mr-auto ml-auto space-y-6">
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tight">
<span className="block text-zinc-500 mb-2 md:mb-4 text-3xl md:text-5xl tracking-tight font-normal">Say</span>

<span className="text-gradient inline-block pb-1" id="typewriter-text">Hallo</span><span className="cursor"> </span>
<br/>
<span className="block mt-2 md:mt-4 text-zinc-100">to the world.</span>
</h1>
<p className="max-w-xl mx-auto text-base md:text-lg text-zinc-400 font-light leading-relaxed">
        Connect seamlessly across borders with our real-time translation API.
        Breaking language barriers with a single line of code.
    </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-zinc-950 rounded-full font-medium text-sm hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2 group">
<svg aria-hidden="true" className="iconify group-hover:-translate-y-0.5 transition-transform duration-300 iconify--lucide" data-height="16" data-icon="lucide:terminal" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8M4 17l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Get API Key</span>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-full font-medium text-sm hover:bg-zinc-800 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:book-open" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Documentation</span>
</button>
</div>
</div>

<div className="mt-24 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>

<div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/60">
<div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 text-zinc-200 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:globe" data-width="20" height="20" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
</div>
<h3 className="text-zinc-100 font-medium text-sm mb-2">Global Reach</h3>
<p className="text-zinc-500 text-xs leading-relaxed">Low-latency edge network spanning 35 regions worldwide for instant delivery.</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/60">
<div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 text-zinc-200 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-zinc-100 font-medium text-sm mb-2">Real-time Sync</h3>
<p className="text-zinc-500 text-xs leading-relaxed">Updates propagate in milliseconds across all connected clients and devices.</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/60">
<div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 text-zinc-200 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-zinc-100 font-medium text-sm mb-2">Enterprise Secure</h3>
<p className="text-zinc-500 text-xs leading-relaxed">SOC2 Type II certified infrastructure with end-to-end encryption by default.</p>
</div>
</div>
</main>

<footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-zinc-600 text-xs font-normal">© 2024 Global Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="18" height="18" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</footer>



    </>
  );
}
