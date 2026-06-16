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
mono: ['Courier Prime', 'monospace'],
},
colors: {
'stone-dark': '#0c0c0c',
'stone-light': '#1a1a1a',
},
animation: {
'float': 'float 10s ease-in-out infinite',
'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'shimmer': 'shimmer 8s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(40px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
shimmer: {
'0%': { backgroundPosition: '200% 0' },
'100%': { backgroundPosition: '-200% 0' }
}
}
}
}
}



        const quotes = [
            { text: "The obstacle in the path becomes the path. Within every hardship lies the seed of an equal or greater benefit.", author: "Marcus Aurelius" },
            { text: "He who has a 'why' to live for can bear almost any 'how'. Your suffering is not without purpose.", author: "Friedrich Nietzsche" },
            { text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", author: "Marcus Aurelius" },
            { text: "We suffer more often in imagination than in reality. Breathe.", author: "Seneca" },
            { text: "It is not the man who has too little, but the man who craves more, that is poor.", author: "Seneca" },
            { text: "You have power over your mind - not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
            { text: "The best revenge is to be unlike him who performed the injury.", author: "Marcus Aurelius" },
            { text: "Man conquers the world by conquering himself.", author: "Zeno of Citium" }
        ];

        const btn = document.getElementById('ask-btn');
        const viewHome = document.getElementById('view-home');
        const viewResult = document.getElementById('view-result');
        const loader = document.getElementById('loader');
        const resultContent = document.getElementById('result-content');
        const quoteText = document.getElementById('quote-text');
        const quoteAuthor = document.getElementById('quote-author');
        const inputField = document.getElementById('user-feeling');

        btn.addEventListener('click', () => {
            const val = inputField.value.trim();
            if(!val) return;

            // 1. Fade out Home View
            viewHome.classList.add('fade-exit');
            viewHome.classList.add('pointer-events-none');

            // 2. Prepare Result View
            viewResult.classList.remove('pointer-events-none');
            viewResult.classList.remove('opacity-0');
            viewResult.classList.add('opacity-100');
            
            // Ensure loader is visible and content hidden
            loader.classList.remove('opacity-0', 'pointer-events-none');
            resultContent.classList.remove('translate-y-0', 'opacity-100');
            resultContent.classList.add('translate-y-8', 'opacity-0');

            // 3. Logic & Delay
            setTimeout(() => {
                // Populate Quote
                const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
                quoteText.innerHTML = `"${randomQuote.text}"`;
                quoteAuthor.innerText = randomQuote.author;

                // Hide Loader
                loader.classList.add('opacity-0');
                loader.classList.add('pointer-events-none');

                // Reveal Content Smoothly
                setTimeout(() => {
                    resultContent.classList.remove('translate-y-8', 'opacity-0');
                    resultContent.classList.add('translate-y-0', 'opacity-100');
                }, 200);

            }, 2000); // Wait time for "consulting stars"
        });

        function resetOracle() {
            // Reset Input
            inputField.value = '';

            // Hide Result View
            viewResult.classList.remove('opacity-100');
            viewResult.classList.add('opacity-0');
            viewResult.classList.add('pointer-events-none');

            // Show Home View
            setTimeout(() => {
                viewHome.classList.remove('fade-exit');
                viewHome.classList.remove('pointer-events-none');
            }, 500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<div className="ambient-light w-96 h-96 bg-neutral-800/30 top-[-10%] left-[20%] animate-float"></div>
<div className="ambient-light w-[30rem] h-[30rem] bg-indigo-950/10 bottom-[-10%] right-[10%] animate-float" style={{animationDelay: '2s'}}></div>

<header className="fixed top-0 w-full z-40 p-6 flex justify-between items-center mix-blend-difference">
<div className="tracking-tighter font-semibold text-lg opacity-90">MKW</div>
<iconify-icon className="opacity-80" height="24" icon="lucide:aperture" strokeWidth="1.5" width="24"></iconify-icon>
</header>

<main className="flex flex-col transition-all duration-1000 ease-in-out z-10 pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center justify-center" id="view-home">
<div className="text-center max-w-5xl z-10 mb-12 relative">
<span className="block animate-[fadeInUp_1.5s_ease-out_0.5s_forwards] text-xs text-neutral-500 tracking-widest font-mono opacity-0 mb-6">made by ram</span>
<h1 className="md:text-8xl lg:text-9xl animate-[fadeInUp_1.5s_ease-out_0.8s_forwards] flex flex-col md:block items-center text-6xl font-semibold text-neutral-600 tracking-tighter opacity-0 mb-6">
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500" style={{}}>Mama Ka</span> <span className="text-shimmer animate-shimmer">Wisdom</span><br className="md:hidden"/>
</h1>
<p className="md:text-base leading-relaxed animate-[fadeInUp_1.5s_ease-out_1.2s_forwards] text-sm text-neutral-400 font-mono opacity-0 max-w-md mr-auto ml-auto" style={{}}>Mamashri listens to the silence between your words.</p>
</div>

<div className="w-full max-w-xl relative group transition-all duration-700 ease-out opacity-0 animate-[fadeInUp_1.5s_ease-out_1.4s_forwards]" id="input-wrapper">
<div className="absolute -inset-0.5 bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-xl opacity-30 group-hover:opacity-60 transition duration-500 blur"></div>
<div className="relative bg-[#0F0F0F] rounded-xl border border-neutral-800 p-1 flex flex-col shadow-2xl">
<div className="p-4">
<label className="sr-only" htmlFor="user-feeling">How are you feeling?</label>
<textarea className="custom-input md:text-lg placeholder-neutral-600 focus:placeholder-neutral-500 transition-colors text-base text-white font-mono w-full" id="user-feeling" placeholder="I feel lost in the noise..." rows="2"></textarea>
</div>
<div className="px-4 pb-3 flex justify-between items-center border-t border-neutral-900 pt-3">
<div className="flex gap-3 text-neutral-600">
<iconify-icon className="hover:text-neutral-400 cursor-pointer transition-colors" icon="lucide:mic" width="16"></iconify-icon>
</div>
<button className="bg-white text-black hover:bg-neutral-200 transition-colors rounded-lg px-4 py-1.5 text-xs font-semibold uppercase tracking-wide flex items-center gap-2" id="ask-btn">
<span>Ask Mama</span>
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<main className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-0 pointer-events-none transition-opacity duration-1000 bg-stone-dark/90 backdrop-blur-sm px-8" id="view-result">

<div className="absolute inset-0 flex flex-col items-center justify-center z-30 transition-opacity duration-500" id="loader">
<div className="typing-indicator text-white mb-4 text-2xl">
<span></span><span></span><span></span>
</div>
<p className="text-xs font-mono text-neutral-500 tracking-widest uppercase animate-pulse">Consulting the stars...</p>
</div>

<div className="text-center max-w-4xl opacity-0 translate-y-8 transition-all duration-1000 delay-300" id="result-content">
<div className="mb-10 flex flex-col items-center gap-4">
<iconify-icon className="text-neutral-500" icon="lucide:stars" width="32"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
                    Mama Says
                </h2>
</div>
<blockquote className="relative">
<p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-white mb-10 drop-shadow-2xl" id="quote-text">

</p>
<footer className="text-sm font-mono text-neutral-500 tracking-widest uppercase border-t border-neutral-800 pt-6 inline-block px-12" id="quote-author">

</footer>
</blockquote>
<div className="mt-20">
<button className="group flex items-center gap-2 mx-auto text-neutral-500 hover:text-white transition-colors duration-300" onclick="resetOracle()">
<iconify-icon className="group-hover:-rotate-180 transition-transform duration-500" icon="lucide:rotate-ccw" width="16"></iconify-icon>
<span className="text-xs font-mono uppercase tracking-wider">Ask Another Question</span>
</button>
</div>
</div>
</main>

<footer className="fixed bottom-6 w-full text-center z-40 pointer-events-none mix-blend-difference">
<p className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono opacity-50">
            MAMA KA WISDOM © 2024
        </p>
</footer>


    </>
  );
}
