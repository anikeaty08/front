import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
850: '#1f2023',
950: '#09090b',
}
},
animation: {
'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
'fade-in': 'fadeIn 0.2s ease-out',
},
keyframes: {
slideUp: {
'0%': { transform: 'translateY(10px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
}
}
}
}
}



        // Initial Data Mock
        const initialParticipants = [
            { name: "Alex Chen", time: "2m ago" },
            { name: "Sarah Miller", time: "5m ago" },
            { name: "Jordan K.", time: "12m ago" },
            { name: "Mike Ross", time: "1h ago" },
            { name: "Emily D.", time: "1h ago" },
            { name: "David Kim", time: "2h ago" },
            { name: "Jessica W.", time: "3h ago" },
            { name: "Tom H.", time: "Yesterday" },
            { name: "Ryan G.", time: "Yesterday" },
            { name: "Chloe S.", time: "Yesterday" },
            { name: "Nathan P.", time: "Yesterday" },
            { name: "Zoe L.", time: "Yesterday" }
        ];

        const listEl = document.getElementById('participant-list');
        const countBadge = document.getElementById('count-badge');
        const inputContainer = document.getElementById('join-form');
        const initialAction = document.getElementById('action-initial');
        const nameInput = document.getElementById('name-input');
        
        // Render List
        function renderList(items) {
            listEl.innerHTML = '';
            items.forEach((p, index) => {
                const initials = p.name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
                // Generate a subtle consistent color based on name length
                const hue = (p.name.length * 45) % 360;
                
                const div = document.createElement('div');
                div.className = 'flex items-center justify-between p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group animate-fade-in';
                div.style.animationDelay = `${index * 0.03}s`;
                
                div.innerHTML = `
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-zinc-700 dark:text-zinc-200" style="background-color: hsla(${hue}, 70%, 90%, 1); color: hsla(${hue}, 80%, 30%, 1);">
                            ${initials}
                        </div>
                        <span class="text-sm font-medium text-zinc-700 dark:text-zinc-200">${p.name}</span>
                    </div>
                    <span class="text-xs text-zinc-400 font-normal opacity-0 group-hover:opacity-100 transition-opacity">${p.time}</span>
                `;
                listEl.appendChild(div);
            });
            countBadge.innerText = `${items.length} going`;
        }

        // Initialize
        renderList(initialParticipants);

        // Interactions
        function toggleInputMode() {
            initialAction.classList.add('hidden');
            inputContainer.classList.remove('hidden');
            inputContainer.classList.add('flex');
            setTimeout(() => nameInput.focus(), 100);
        }

        function cancelInputMode() {
            inputContainer.classList.add('hidden');
            inputContainer.classList.remove('flex');
            initialAction.classList.remove('hidden');
            nameInput.value = '';
        }

        function submitName(e) {
            e.preventDefault();
            const val = nameInput.value.trim();
            if(!val) return;

            // Add new user to top
            initialParticipants.unshift({ name: val, time: "Just now" });
            renderList(initialParticipants);
            
            // Reset UI
            cancelInputMode();
            showToast("You're on the list!");
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function shareEvent() {
            // Mock share
            if (navigator.share) {
                navigator.share({
                    title: 'Friday Drinks',
                    text: 'Join us for Friday Drinks!',
                    url: window.location.href,
                }).catch(console.error);
            } else {
                navigator.clipboard.writeText("https://plan.it/friday-drinks-invite");
                showToast("Link copied to clipboard");
            }
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toast-msg');
            toastMsg.innerText = msg;
            toast.style.opacity = '1';
            toast.style.transform = 'translate(-50%, 0)';
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translate(-50%, -10px)';
            }, 2500);
        }

        // Theme Toggle
        function toggleTheme() {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                html.classList.add('dark');
                localStorage.theme = 'dark';
            }
        }

        // Check System Theme
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="max-w-md mx-auto min-h-screen bg-white dark:bg-zinc-900 shadow-xl shadow-zinc-200/50 dark:shadow-none flex flex-col relative overflow-hidden">

<nav className="flex items-center justify-between p-6">
<div className="text-lg font-semibold tracking-tighter text-zinc-900 dark:text-white flex items-center gap-1">
                gather<span className="text-indigo-500">.</span>
</div>
<button className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors" onclick="toggleTheme()">
<iconify-icon className="dark:hidden" icon="solar:sun-2-linear" width="20"></iconify-icon>
<iconify-icon className="hidden dark:block" icon="solar:moon-linear" width="20"></iconify-icon>
</button>
</nav>

<main className="flex-1 px-6 pb-24 flex flex-col">

<div className="mb-8 animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-medium mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                    Live Event
                </div>
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-tight mb-2">
                    Design Team <br/>
                    Friday Sunset Drinks 🍹
                </h1>
<div className="flex flex-col gap-3 mt-6 text-sm text-zinc-500 dark:text-zinc-400">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="font-medium">Friday, Nov 12 • 18:00</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<a className="font-medium underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-2" href="#">Rooftop Bar at The Standard</a>
</div>
</div>
</div>

<div className="flex-1 animate-slide-up" style={{animationDelay: '0.1s'}}>
<div className="flex items-center justify-between mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-2">
<h2 className="text-sm font-medium text-zinc-900 dark:text-white">Who's In</h2>
<span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full" id="count-badge">12 people</span>
</div>
<div className="flex flex-col gap-1 pb-4" id="participant-list">

</div>
</div>
</main>

<div className="fixed bottom-0 w-full max-w-md bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border-t border-zinc-200/50 dark:border-zinc-800 p-4 pb-8 z-50">

<div className="flex gap-3" id="action-initial">
<button className="flex-1 py-3.5 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors active:scale-[0.98] transform duration-150" onclick="shareEvent()">
<iconify-icon icon="solar:share-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Share
                </button>
<button className="flex-[2] py-3.5 px-4 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium text-sm shadow-lg shadow-zinc-200 dark:shadow-none hover:opacity-90 transition-all active:scale-[0.98] transform duration-150 flex items-center justify-center gap-2" onclick="toggleInputMode()">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    I'm in
                </button>
</div>

<form className="hidden flex-col gap-3 animate-fade-in" id="join-form" onsubmit="submitName(event)">
<div className="flex gap-2">
<input autocomplete="off" className="flex-1 bg-zinc-50 dark:bg-zinc-800 border-none outline-none ring-1 ring-zinc-200 dark:ring-zinc-700 focus:ring-2 focus:ring-indigo-500 rounded-xl px-4 py-3.5 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 transition-all" id="name-input" placeholder="Enter your name..." required="" type="text"/>
<button className="shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-5 py-3.5 font-medium text-sm transition-colors shadow-lg shadow-indigo-500/20 active:scale-[0.98] flex items-center" type="submit">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="shrink-0 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 rounded-xl px-3.5 py-3.5 transition-colors active:scale-[0.98] flex items-center" onclick="cancelInputMode()" type="button">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</form>

<div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs py-2 px-4 rounded-full shadow-lg opacity-0 transition-opacity duration-300 pointer-events-none flex items-center gap-2 whitespace-nowrap" id="toast">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
<span id="toast-msg">Success</span>
</div>
</div>
</div>


    </>
  );
}
