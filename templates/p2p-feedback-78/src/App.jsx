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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        function playClick() {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.05);
            gainNode.gain.setValueAtTime(0.03, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.05);
        }

        function switchTab(tabId) {
            playClick();
            ['feed', 'posts', 'post', 'stats', 'feedback-details'].forEach(id => {
                document.getElementById('view-' + id).classList.add('hidden');
            });
            const view = document.getElementById('view-' + tabId);
            view.classList.remove('hidden');

            const navIds = ['nav-feed', 'nav-posts', 'nav-stats'];
            navIds.forEach(id => {
                const el = document.getElementById(id);
                el.classList.remove('bg-gray-100', 'text-black');
                el.classList.add('text-gray-400', 'hover:text-black');
            });

            const postInd = document.getElementById('post-active-indicator');
            postInd.classList.add('hidden');

            if (tabId === 'post') {
                postInd.classList.remove('hidden');
            } else if (tabId !== 'feedback-details') {
                const activeEl = document.getElementById('nav-' + tabId);
                activeEl.classList.remove('text-gray-400', 'hover:text-black');
                activeEl.classList.add('bg-gray-100', 'text-black');
            }

            // Remove badge if visiting posts
            if(tabId === 'posts') {
                document.getElementById('posts-badge').classList.add('hidden');
            }

            const strip = document.getElementById('pending-strip');
            if (tabId === 'feed') {
                strip.style.transform = 'translateY(0)';
            } else {
                strip.style.transform = 'translateY(100%)';
            }
        }

        function showFeedbackView() {
            playClick();
            document.getElementById('view-feed').classList.add('hidden');
            document.getElementById('view-feedback-details').classList.remove('hidden');
            document.getElementById('pending-strip').style.transform = 'translateY(100%)';
        }

        function hideFeedbackView() {
            playClick();
            document.getElementById('view-feedback-details').classList.add('hidden');
            document.getElementById('view-feed').classList.remove('hidden');
            document.getElementById('pending-strip').style.transform = 'translateY(0)';
        }

        // Handle Post Trade Logic
        function handlePostTrade() {
            playClick();
            const title = document.getElementById('post-title-input').value || "New Project";
            
            // Show toast
            const toast = document.getElementById('toast');
            toast.classList.remove('hidden');
            toast.classList.add('toast-enter');
            
            setTimeout(() => {
                toast.classList.add('hidden');
                toast.classList.remove('toast-enter');
                
                // Add indicator to My Posts
                document.getElementById('posts-badge').classList.remove('hidden');
                
                // Add card to My Posts list
                document.getElementById('new-post-placeholder').classList.remove('hidden');
                document.getElementById('new-post-title').innerText = title;
                document.getElementById('active-count').innerText = "3 ACTIVE";

                // Switch to posts view
                switchTab('posts');
            }, 1000);
        }

        const originalCards = {};

        function acceptTrade(btn, cardId, title, colorName) {
            playClick();
            if(btn.dataset.state === 'active') return; 
            
            const card = document.getElementById(cardId);
            
            // Save original HTML
            if(!originalCards[cardId]) {
                originalCards[cardId] = {
                    html: card.innerHTML,
                    className: card.className
                };
            }
            
            // Start Transform Animation
            card.style.transform = "rotateX(90deg)";
            card.style.transition = "transform 0.2s ease-in";

            setTimeout(() => {
                // Change style to "Active Mission"
                card.className = `bg-${colorName}-50 border-brutal shadow-brutal p-0 overflow-hidden transform rotate-x-0 transition-transform duration-300 ease-out`;
                
                // New HTML content for the active mission
                card.innerHTML = `
                    <div class="p-5 relative card-flip-enter">
                        <div class="absolute top-0 right-0 p-3">
                            <div class="bg-yellow-300 border border-black text-[10px] font-mono px-2 py-1 uppercase font-bold shadow-sm">
                                +2 CR Reward
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-2 mb-4">
                            <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            <span class="text-xs font-mono font-bold uppercase tracking-widest text-red-500">Mission Active</span>
                        </div>

                        <h3 class="text-xl font-bold mb-4">${title}</h3>
                        
                        <div class="space-y-3 mb-5">
                            <div class="flex items-center gap-3 bg-white border border-black p-3 shadow-sm">
                                <input type="checkbox" class="w-4 h-4 accent-black border-2 border-black rounded-none">
                                <span class="text-sm font-medium">Explore Landing Page</span>
                            </div>
                            <div class="flex items-center gap-3 bg-white border border-black p-3 shadow-sm">
                                <input type="checkbox" class="w-4 h-4 accent-black border-2 border-black rounded-none">
                                <span class="text-sm font-medium">Test Sign-up Flow</span>
                            </div>
                        </div>

                        <div class="flex gap-2">
                             <button onclick="cancelTrade('${cardId}')" class="w-10 bg-white border-2 border-black flex items-center justify-center hover:bg-red-50 text-red-600 shadow-[2px_2px_0_0_#000]">
                                <span class="iconify" data-icon="lucide:x" data-stroke-width="2"></span>
                             </button>
                             <button class="flex-1 bg-white border-2 border-black py-3 text-xs font-bold uppercase hover:bg-gray-50 shadow-[2px_2px_0_0_#000]">
                                 Visit Site
                             </button>
                             <button class="flex-1 bg-black text-white border-2 border-black py-3 text-xs font-bold uppercase hover:bg-neutral-800 shadow-[2px_2px_0_0_#000]">
                                 Submit
                             </button>
                        </div>
                    </div>
                `;
                
                card.style.transform = "rotateX(0deg)";
            }, 200);
        }

        function cancelTrade(cardId) {
            playClick();
            const card = document.getElementById(cardId);
            const original = originalCards[cardId];

            if(original) {
                 card.style.transform = "rotateX(90deg)";
                 setTimeout(() => {
                     card.className = original.className;
                     card.innerHTML = original.html;
                     card.style.transform = "rotateX(0deg)";
                 }, 200);
            }
        }

        document.querySelectorAll('button:not([onclick])').forEach(btn => {
            btn.addEventListener('click', playClick);
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
      

<div className="relative w-full max-w-sm bg-white border-brutal shadow-brutal-lg flex flex-col h-[85vh] max-h-[800px] overflow-hidden">

<div className="bg-white border-b-2 border-black p-4 flex justify-between items-center z-20 shrink-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black text-white flex items-center justify-center border-brutal">
<span className="iconify text-lg" data-icon="lucide:arrow-left-right" data-strokeWidth="1.5"></span>
</div>
<h1 className="text-xl font-bold tracking-tight leading-none uppercase">P2P</h1>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 px-2 py-1 bg-green-100 border-brutal shadow-brutal-sm">
<span className="iconify text-green-700 text-xs" data-icon="lucide:zap" data-strokeWidth="1.5"></span>
<span className="font-mono text-xs font-semibold text-green-800">3 CR</span>
</div>
<div className="w-8 h-8 bg-gray-200 rounded-full border-brutal overflow-hidden relative cursor-pointer hover:bg-gray-300 transition-colors">
<img alt="Profile" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar bg-[#f8fafc] relative">

<div className="view-content" id="view-feed">

<div className="bg-[#bfdbfe] border-b-2 border-black p-5 relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3">
<span className="bg-black text-white border-2 border-black text-xs font-mono px-2 py-0.5 shadow-sm uppercase font-bold flex items-center gap-2">
                                Status: Builder
                                <span className="iconify text-yellow-400" data-icon="lucide:hammer" data-strokeWidth="1.5"></span>
</span>
<span className="text-xs font-mono bg-green-400 border border-black px-1.5 py-0.5 text-black font-bold animate-pulse shadow-sm">● LIVE</span>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2 leading-tight">
                            5 people are testing your product.
                        </h2>
<div className="h-2"></div>
<button className="btn-brutal w-full bg-white text-black border-2 border-black py-3 px-4 shadow-brutal flex items-center justify-center gap-2 hover:bg-gray-50" onclick="showFeedbackView()">
<span className="font-mono text-xs font-semibold tracking-wide uppercase">View Feedback</span>
<span className="iconify" data-icon="lucide:message-square" data-strokeWidth="1.5"></span>
</button>
</div>
</div>

<div className="p-4 space-y-5 pb-24">
<div className="flex items-center justify-between">
<h3 className="text-xs font-mono font-bold uppercase text-gray-500 tracking-wider">Available Missions</h3>
<div className="flex gap-2">
<button className="text-xs underline decoration-2 decoration-black font-medium">Newest</button>
<button className="text-xs text-gray-400 hover:text-black">Fastest</button>
</div>
</div>

<div className="bg-white border-brutal shadow-brutal p-0 overflow-hidden group hover:-translate-y-1 transition-transform duration-200" id="card-1">
<div className="p-4 border-b-2 border-gray-100">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-3">
<div className="w-10 h-10 bg-indigo-100 border-2 border-black flex items-center justify-center text-indigo-600">
<span className="iconify text-xl" data-icon="lucide:cpu" data-strokeWidth="1.5"></span>
</div>
<div>
<h4 className="font-semibold text-base leading-tight">Kalami AI</h4>
<span className="text-xs text-gray-500 font-mono">AI Tools</span>
</div>
</div>
<span className="text-xs font-mono bg-yellow-300 border border-black text-black px-1.5 py-0.5 font-bold shadow-sm">+2 CR</span>
</div>
<p className="text-sm text-gray-600 leading-snug mb-3">
                                Need feedback on our new AI onboarding flow. Looking for bugs in the auth sequence.
                            </p>
<div className="flex gap-2 mt-2">
<span className="text-[10px] uppercase font-bold bg-blue-100 border border-black px-1.5 py-0.5 text-blue-800">UX</span>
<span className="text-[10px] uppercase font-bold bg-pink-100 border border-black px-1.5 py-0.5 text-pink-800">Bugs</span>
</div>
</div>
<button className="btn-brutal w-full bg-white hover:bg-gray-50 text-black py-3 font-mono text-xs font-bold uppercase tracking-widest flex justify-center items-center gap-2 border-t-2 border-black transition-colors" onclick="acceptTrade(this, 'card-1', 'Kalami AI', 'indigo')">
                            Accept Mission
                        </button>
</div>

<div className="bg-white border-brutal shadow-brutal p-0 overflow-hidden group hover:-translate-y-1 transition-transform duration-200" id="card-2">
<div className="p-4 border-b-2 border-gray-100">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-3">
<div className="w-10 h-10 bg-emerald-100 border-2 border-black flex items-center justify-center text-emerald-600">
<span className="iconify text-xl" data-icon="lucide:leaf" data-strokeWidth="1.5"></span>
</div>
<div>
<h4 className="font-semibold text-base leading-tight">EcoDash</h4>
<span className="text-xs text-gray-500 font-mono">SaaS</span>
</div>
</div>
<span className="text-xs font-mono bg-emerald-50 border border-black text-emerald-700 px-1.5 py-0.5 font-bold">+1 CR</span>
</div>
<p className="text-sm text-gray-600 leading-snug mb-3">
                                Test the clarity of our pricing page toggles and checkout modal.
                            </p>
<div className="flex gap-2 mt-2">
<span className="text-[10px] uppercase font-bold bg-purple-100 border border-black px-1.5 py-0.5 text-purple-800">Copy</span>
<span className="text-[10px] uppercase font-bold bg-orange-100 border border-black px-1.5 py-0.5 text-orange-800">Visuals</span>
</div>
</div>
<button className="btn-brutal w-full bg-white hover:bg-gray-50 text-black py-3 font-mono text-xs font-bold uppercase tracking-widest flex justify-center items-center gap-2 border-t-2 border-black transition-colors" onclick="acceptTrade(this, 'card-2', 'EcoDash', 'emerald')">
                            Accept Mission
                        </button>
</div>
</div>
</div>

<div className="view-content hidden p-4 pb-24 bg-gray-50 min-h-full" id="view-feedback-details">
<div className="flex items-center gap-3 mb-6">
<button className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center shadow-brutal-sm active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all" onclick="hideFeedbackView()">
<span className="iconify" data-icon="lucide:arrow-left" data-strokeWidth="1.5"></span>
</button>
<div>
<h2 className="font-bold text-lg leading-none">Feedback Inbox</h2>
<span className="text-xs font-mono text-gray-500">For "SaaS Landing Page"</span>
</div>
</div>
<div className="space-y-4">

<div className="bg-white border-brutal shadow-brutal p-4">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-purple-100 border border-black rounded-full overflow-hidden">
<img alt="User" src="https://api.dicebear.com/7.x/notionists/svg?seed=Annie"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold">DesignCorp Inc.</span>
<span className="text-[10px] font-mono text-gray-500">Product Designer</span>
</div>
</div>
<span className="text-xs font-mono bg-green-100 border border-black px-1">POSITIVE</span>
</div>
<p className="text-sm leading-relaxed mb-3">
                            "The hero section is super punchy. However, the pricing toggle feels a bit hidden on mobile."
                        </p>
</div>
</div>
</div>

<div className="view-content hidden p-5 pb-24" id="view-posts">
<div className="flex items-end justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight">Your Posts</h2>
<span className="text-xs font-mono bg-black text-white px-2 py-1" id="active-count">2 ACTIVE</span>
</div>
<div className="space-y-6" id="my-posts-list">

<div className="hidden relative pl-4 border-l-2 border-black animate-[fadeIn_0.5s_ease-out]" id="new-post-placeholder">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-2 border-black animate-pulse"></div>
<div className="bg-white border-brutal p-4 mb-2 shadow-brutal-sm">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg" id="new-post-title">My Awesome App</h3>
<span className="text-[10px] font-mono uppercase bg-blue-100 text-blue-800 px-1 border border-black">Just Now</span>
</div>
<p className="text-xs text-gray-500 font-mono mb-3">Waiting for testers...</p>
</div>
</div>

<div className="relative pl-4 border-l-2 border-black">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-black shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
<div className="bg-white border-brutal p-4 mb-2 shadow-brutal-sm group hover:-translate-y-0.5 transition-transform">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg">Personal Website V2</h3>
<span className="text-[10px] font-mono uppercase bg-green-100 text-green-800 px-1 border border-black">Live</span>
</div>
<p className="text-xs text-gray-500 font-mono mb-3">Submitted 2 days ago</p>
<div className="mb-3">
<div className="flex justify-between text-xs font-bold mb-1">
<span>Feedback Received</span>
<span>3/5</span>
</div>
<div className="w-full bg-gray-200 border border-black h-3 relative">
<div className="absolute top-0 left-0 h-full bg-green-500 w-3/5 border-r-2 border-black"></div>
</div>
</div>
<button className="text-xs font-bold underline decoration-2 decoration-green-400">View Report</button>
</div>
</div>

<div className="relative pl-4 border-l-2 border-gray-300">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-800 border-2 border-black"></div>
<div className="bg-gray-50 border-brutal p-4 mb-2 opacity-80 hover:opacity-100 transition-opacity">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg text-gray-700">Landing Page V1</h3>
<span className="text-[10px] font-mono uppercase bg-gray-200 px-1 border border-black text-gray-600">Done</span>
</div>
<p className="text-xs text-gray-500 font-mono mb-3">Completed 1 week ago</p>
<div className="flex gap-1">
<span className="iconify text-yellow-500 text-xs" data-icon="lucide:star"></span>
<span className="text-xs font-bold">4.9/5 Rating</span>
</div>
</div>
</div>

<div className="relative pl-4 border-l-2 border-gray-200">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-300"></div>
<div className="bg-white border-2 border-gray-200 p-4 mb-2 grayscale">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-lg text-gray-400">Blog Redesign</h3>
<span className="text-[10px] font-mono uppercase bg-gray-100 px-1 border border-gray-300 text-gray-400">Archived</span>
</div>
</div>
</div>
</div>
</div>

<div className="view-content hidden p-5 pb-24" id="view-post">
<div className="mb-6">
<h2 className="text-2xl font-bold tracking-tight mb-1">New Request</h2>
<p className="text-sm text-gray-500">Create a mission for the community.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault(); handlePostTrade();">
<div>
<label className="block text-xs font-mono font-bold uppercase mb-2">Project Name</label>
<input className="input-brutal shadow-brutal-sm" id="post-title-input" placeholder="e.g. My Awesome App" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-mono font-bold uppercase mb-2">Live URL / Staging</label>
<div className="flex items-center border-brutal bg-gray-50 shadow-brutal-sm">
<span className="pl-3 pr-2 text-gray-400">
<span className="iconify" data-icon="lucide:link" data-strokeWidth="1.5"></span>
</span>
<input className="w-full bg-transparent p-3 outline-none font-mono text-sm" placeholder="https://" type="url"/>
</div>
</div>
<div>
<label className="block text-xs font-mono font-bold uppercase mb-2">Tasks</label>
<div className="space-y-2">
<input className="input-brutal shadow-sm text-sm" placeholder="1. e.g. Sign up for an account" type="text"/>
<input className="input-brutal shadow-sm text-sm" placeholder="2. e.g. Try the dark mode toggle" type="text"/>
<input className="input-brutal shadow-sm text-sm border-gray-300" placeholder="+ Add another task" type="text"/>
</div>
</div>
<div className="pt-4">
<button className="btn-brutal w-full bg-black text-white border-2 border-black py-4 shadow-brutal flex justify-between items-center px-4 group hover:bg-neutral-800" type="submit">
<span className="font-bold uppercase tracking-wider text-sm">Post Trade</span>
<div className="flex items-center gap-2 text-white">
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</div>
</button>
</div>
</form>
</div>

<div className="view-content hidden p-5 pb-24 space-y-6" id="view-stats">

<div className="grid grid-cols-2 gap-4">
<div className="bg-indigo-100 border-brutal shadow-brutal p-4 flex flex-col justify-between h-32">
<span className="text-xs font-mono font-bold uppercase text-indigo-800">Total Earned</span>
<div className="flex items-end gap-1">
<span className="text-4xl font-bold tracking-tighter">48</span>
<span className="text-sm font-mono mb-1">CR</span>
</div>
</div>
<div className="bg-yellow-100 border-brutal shadow-brutal p-4 flex flex-col justify-between h-32">
<span className="text-xs font-mono font-bold uppercase text-yellow-800">Quality Score</span>
<div>
<span className="text-4xl font-bold tracking-tighter">98</span>
<span className="text-lg font-bold text-yellow-600">%</span>
</div>
</div>
</div>

<div className="bg-white border-brutal shadow-brutal p-5">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold text-lg">Reputation</h3>
<span className="bg-black text-white text-[10px] font-mono px-2 py-0.5">TOP 10%</span>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="text-5xl font-bold tracking-tighter">4.9</div>
<div className="flex flex-col">
<div className="flex gap-1 text-black">
<span className="iconify fill-current" data-icon="lucide:star"></span>
<span className="iconify fill-current" data-icon="lucide:star"></span>
<span className="iconify fill-current" data-icon="lucide:star"></span>
<span className="iconify fill-current" data-icon="lucide:star"></span>
<span className="iconify fill-current" data-icon="lucide:star-half"></span>
</div>
<span className="text-xs text-gray-500 font-mono mt-1">Based on 12 trades</span>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center gap-2 text-xs font-mono">
<span className="w-8">5★</span>
<div className="flex-1 h-2 bg-gray-100 border border-black"><div className="h-full bg-black w-[80%]"></div></div>
<span className="w-6 text-right">10</span>
</div>
<div className="flex items-center gap-2 text-xs font-mono">
<span className="w-8">4★</span>
<div className="flex-1 h-2 bg-gray-100 border border-black"><div className="h-full bg-gray-400 w-[20%]"></div></div>
<span className="w-6 text-right">2</span>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-mono font-bold uppercase text-gray-500 mb-3">Recent Activity</h3>
<div className="bg-white border-brutal p-0">
<div className="p-3 border-b-2 border-black flex justify-between items-center bg-gray-50">
<div className="flex items-center gap-2">
<span className="iconify text-green-600" data-icon="lucide:arrow-down-left"></span>
<span className="text-sm font-bold">Earned 2 CR</span>
</div>
<span className="text-xs font-mono text-gray-500">2h ago</span>
</div>
<div className="p-3 border-b-2 border-black flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="iconify text-red-600" data-icon="lucide:arrow-up-right"></span>
<span className="text-sm font-bold">Posted "EcoDash"</span>
</div>
<span className="text-xs font-mono text-gray-500">1d ago</span>
</div>
<div className="p-3 flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="iconify text-green-600" data-icon="lucide:arrow-down-left"></span>
<span className="text-sm font-bold">Earned 1 CR</span>
</div>
<span className="text-xs font-mono text-gray-500">3d ago</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border-t-2 border-black absolute bottom-[66px] w-full z-10 transition-transform duration-300" id="pending-strip">
<div className="flex items-center justify-between px-4 py-3">
<div className="text-[10px] font-mono uppercase font-bold text-gray-400">Active Missions</div>
<div className="flex gap-3">

<div className="w-10 h-10 bg-indigo-100 border-2 border-black flex items-center justify-center text-indigo-700 shadow-[2px_2px_0_0_#000] cursor-pointer hover:-translate-y-0.5 transition-transform relative">
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 border border-black rounded-full animate-pulse"></span>
<span className="iconify" data-icon="lucide:cpu" data-strokeWidth="1.5"></span>
</div>

<div className="w-10 h-10 bg-gray-100 border-2 border-black flex items-center justify-center text-gray-400 shadow-sm cursor-not-allowed opacity-50">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5"></span>
</div>
<div className="w-10 h-10 bg-gray-100 border-2 border-black flex items-center justify-center text-gray-400 shadow-sm cursor-not-allowed opacity-50">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5"></span>
</div>
</div>
</div>
</div>

<div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 border-2 border-white shadow-xl z-50 hidden items-center gap-3 w-64 justify-center" id="toast">
<span className="iconify text-green-400" data-icon="lucide:check-circle"></span>
<span className="font-mono text-sm font-bold uppercase">Trade Posted!</span>
</div>

<div className="bg-white border-t-2 border-black h-[66px] grid grid-cols-4 z-20 shrink-0 relative">
<button className="group flex flex-col items-center justify-center gap-1 border-r-2 border-black bg-gray-100 transition-colors" id="nav-feed" onclick="switchTab('feed')">
<span className="iconify text-xl group-hover:-translate-y-0.5 transition-transform" data-icon="lucide:home" data-strokeWidth="1.5"></span>
<span className="text-[10px] font-mono uppercase font-bold tracking-tight">Feed</span>
</button>
<button className="group flex flex-col items-center justify-center gap-1 border-r-2 border-black hover:bg-gray-50 active:bg-gray-100 transition-colors text-gray-400 hover:text-black relative" id="nav-posts" onclick="switchTab('posts')">
<div className="hidden absolute top-3 right-5 w-2.5 h-2.5 bg-red-500 border border-white rounded-full" id="posts-badge"></div>
<span className="iconify text-xl group-hover:-translate-y-0.5 transition-transform" data-icon="lucide:layers" data-strokeWidth="1.5"></span>
<span className="text-[10px] font-mono uppercase font-bold tracking-tight">My Posts</span>
</button>
<button className="group flex flex-col items-center justify-center gap-1 border-r-2 border-black bg-black text-white hover:bg-neutral-800 relative overflow-hidden" id="nav-post" onclick="switchTab('post')">
<span className="iconify text-xl group-hover:scale-110 transition-transform relative z-10" data-icon="lucide:plus-square" data-strokeWidth="1.5"></span>
<span className="text-[10px] font-mono uppercase font-bold tracking-tight relative z-10">Post</span>
<div className="hidden absolute inset-0 bg-neutral-800 border-b-4 border-white" id="post-active-indicator"></div>
</button>
<button className="group flex flex-col items-center justify-center gap-1 hover:bg-gray-50 active:bg-gray-100 transition-colors text-gray-400 hover:text-black" id="nav-stats" onclick="switchTab('stats')">
<span className="iconify text-xl group-hover:-translate-y-0.5 transition-transform" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5"></span>
<span className="text-[10px] font-mono uppercase font-bold tracking-tight">Stats</span>
</button>
</div>
</div>


    </>
  );
}
