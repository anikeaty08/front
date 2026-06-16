import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
        lucide.createIcons();

        // Chatbot Toggle Logic
        const chatWindow = document.getElementById('chat-window');
        const openBtn = document.getElementById('open-chat');
        const closeBtn = document.getElementById('close-chat');

        function toggleChat() {
            const isClosed = chatWindow.classList.contains('opacity-0');
            
            if (isClosed) {
                // Open Chat
                chatWindow.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
                chatWindow.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
                
                openBtn.classList.remove('scale-100', 'opacity-100');
                openBtn.classList.add('scale-50', 'opacity-0', 'pointer-events-none');
            } else {
                // Close Chat
                chatWindow.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
                chatWindow.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
                
                openBtn.classList.remove('scale-50', 'opacity-0', 'pointer-events-none');
                openBtn.classList.add('scale-100', 'opacity-100');
            }
        }

        openBtn.addEventListener('click', toggleChat);
        closeBtn.addEventListener('click', toggleChat);

        // Optional: Open chat automatically for demonstration
        setTimeout(toggleChat, 500);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 p-8 flex flex-col gap-6 opacity-40 select-none pointer-events-none">
<div className="h-12 w-48 bg-gray-200 rounded-lg"></div>
<div className="grid grid-cols-3 gap-6">
<div className="h-64 bg-gray-200 rounded-2xl"></div>
<div className="h-64 bg-gray-200 rounded-2xl"></div>
<div className="h-64 bg-gray-200 rounded-2xl"></div>
</div>
<div className="h-96 bg-gray-200 rounded-2xl w-full"></div>
</div>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">


<div className="w-[380px] mb-4 flex flex-col transition-all duration-300 transform scale-95 opacity-0 pointer-events-none origin-bottom-right relative" id="chat-window">

<div className="bg-white/60 backdrop-blur-2xl border border-violet-400/60 rounded-3xl shadow-[0_20px_40px_-15px_rgba(139,92,246,0.2)] overflow-hidden flex flex-col h-[520px]">

<div className="bg-gradient-to-r from-violet-600 via-fuchsia-400 to-lime-300 p-4 shrink-0 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white shadow-inner">
<i className="w-5 h-5" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col text-white">

<h2 className="text-lg font-medium tracking-tight leading-tight">Jify</h2>
<p className="text-xs text-white/90">Your AI Shopping Assistant</p>
</div>
</div>
<button className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10" id="close-chat">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto chat-scroll p-5 flex flex-col gap-4">

<div className="flex flex-col gap-1 max-w-[85%] self-start">
<div className="bg-white/95 backdrop-blur-sm border border-white rounded-2xl rounded-tl-sm p-4 text-sm text-gray-700 shadow-sm leading-relaxed">
                            Hey Pankaj! I noticed you recently got those Yellow Puffer Jacket. Want some style tips to match them?
                        </div>
<span className="text-xs text-gray-500 pl-1">15:30</span>
</div>

</div>

<div className="p-4 bg-white/40 backdrop-blur-md border-t border-violet-100/50 shrink-0">
<div className="relative flex items-center shadow-sm rounded-full bg-white/80 border border-gray-100 focus-within:ring-2 focus-within:ring-violet-200 transition-shadow">
<input className="w-full bg-transparent py-3.5 pl-5 pr-12 text-sm text-gray-700 placeholder-gray-400 focus:outline-none rounded-full" placeholder="Ask me anything..." type="text"/>
<button className="absolute right-1.5 h-9 w-9 rounded-full bg-violet-400 hover:bg-violet-500 flex items-center justify-center text-white transition-colors shadow-md">
<i className="w-4 h-4 ml-0.5" data-lucide="send" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="absolute -bottom-2.5 right-6 bg-gray-900 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-gray-700">
<i className="w-3 h-3 text-lime-300" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-xs font-medium tracking-wide">Powered by GoKwik</span>
</div>
</div>

<button className="h-16 w-16 rounded-full bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-lime-300 shadow-xl shadow-violet-500/30 flex items-center justify-center text-white hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/40 transition-all duration-300 border-2 border-white/20 relative group" id="open-chat">
<i className="w-7 h-7 relative z-10" data-lucide="sparkles" strokeWidth="1.5"></i>

<div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:animate-ping transition-opacity"></div>
</button>
</div>


    </>
  );
}
