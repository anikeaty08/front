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
theme: {
extend: {
colors: {
background: '#050505',
surface: '#0F0F10',
primary: '#F97316',
},
boxShadow: {
'glow': '0 0 80px -20px rgba(249, 115, 22, 0.25)',
}
}
}
}



        // State
        let correctCode = "1234"; 
        let messageText = "Welcome to the secure drop. Create your own link to share encrypted messages.";
        const defaultMessage = messageText;

        // Elements
        const flap = document.getElementById('flap');
        const card = document.getElementById('secretCard');
        const cardInner = document.getElementById('cardInner');
        const glow = document.getElementById('envelopeGlow');
        const unlockInterface = document.getElementById('unlockInterface');
        const postUnlockControls = document.getElementById('postUnlockControls');
        const createOption = document.getElementById('createOption');
        const headerTitle = document.getElementById('headerTitle');
        const messageDisplay = document.getElementById('revealedMessage');
        const input = document.getElementById('passcodeInput');
        const errorMsg = document.getElementById('errorMsg');

        // Check URL for shared data on load
        window.addEventListener('DOMContentLoaded', () => {
            const params = new URLSearchParams(window.location.search);
            const data = params.get('d'); // d for data
            
            if (data) {
                try {
                    // Simple Base64 decode (In production use real encryption)
                    const decoded = JSON.parse(atob(data));
                    if(decoded.c && decoded.m) {
                        correctCode = decoded.c;
                        messageText = decoded.m;
                    }
                } catch (e) {
                    console.error("Invalid link");
                }
            }
            // Set message in DOM
            messageDisplay.innerText = messageText;
        });

        // 1. UNLOCK FUNCTION
        function attemptUnlock() {
            const code = input.value.trim();
            
            if (code === correctCode) {
                // UI Cleanup
                errorMsg.style.opacity = '0';
                input.blur();

                // Animation Sequence
                // A. Open Flap
                flap.classList.add('open');

                // B. Hide Inputs / Show Glow
                unlockInterface.style.opacity = '0';
                unlockInterface.style.pointerEvents = 'none';
                createOption.style.opacity = '0';
                createOption.style.pointerEvents = 'none';
                glow.style.opacity = '1';

                // C. Slide Card Out (Delayed to match flap)
                setTimeout(() => {
                    card.classList.add('revealed');
                    
                    // D. Reveal Content inside card
                    setTimeout(() => {
                        cardInner.style.opacity = '1';
                        messageDisplay.classList.add('blur-reveal');
                    }, 300);

                    // E. Show Post-Unlock Controls
                    setTimeout(() => {
                        postUnlockControls.classList.remove('hidden');
                        // Trigger reflow for transition
                        void postUnlockControls.offsetWidth;
                        postUnlockControls.classList.remove('opacity-0', 'translate-y-4');
                    }, 800);

                }, 500); // Wait for flap to open halfway

            } else {
                // Error State
                errorMsg.style.opacity = '1';
                // Shake Animation
                const parent = input.parentElement;
                parent.classList.add('border-red-500/50', 'bg-red-500/5');
                parent.style.transform = 'translateX(-4px)';
                setTimeout(() => parent.style.transform = 'translateX(4px)', 100);
                setTimeout(() => parent.style.transform = 'translateX(-4px)', 200);
                setTimeout(() => parent.style.transform = 'translateX(0)', 300);
                
                setTimeout(() => {
                    parent.classList.remove('border-red-500/50', 'bg-red-500/5');
                }, 1500);
            }
        }

        // 2. RESET FUNCTION
        function resetEnvelope() {
            // Hide post controls
            postUnlockControls.classList.add('opacity-0', 'translate-y-4');
            
            setTimeout(() => {
                postUnlockControls.classList.add('hidden');
                
                // Hide Card Content
                cardInner.style.opacity = '0';
                messageDisplay.classList.remove('blur-reveal');

                // Slide Card Down
                card.classList.remove('revealed');

                setTimeout(() => {
                    // Close Flap
                    flap.classList.remove('open');
                    glow.style.opacity = '0';

                    // Show Inputs again
                    setTimeout(() => {
                        unlockInterface.style.opacity = '1';
                        unlockInterface.style.pointerEvents = 'auto';
                        createOption.style.opacity = '1';
                        createOption.style.pointerEvents = 'auto';
                        input.value = '';
                    }, 400);

                }, 500);
            }, 300);
        }

        // Enter key support
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') attemptUnlock();
        });

        // 3. CREATE & SHARE LOGIC
        const createModal = document.getElementById('createModal');
        const modalContent = document.getElementById('modalContent');
        const stepCreate = document.getElementById('stepCreate');
        const stepShare = document.getElementById('stepShare');

        function toggleCreateMode() {
            const isHidden = createModal.classList.contains('hidden');
            if (isHidden) {
                // Reset Modal State
                stepCreate.classList.remove('hidden');
                stepShare.classList.add('hidden');
                document.getElementById('newMessage').value = '';
                document.getElementById('newCode').value = '';

                createModal.classList.remove('hidden');
                setTimeout(() => {
                    modalContent.classList.remove('scale-95', 'opacity-0');
                    modalContent.classList.add('scale-100', 'opacity-100');
                }, 10);
            } else {
                modalContent.classList.remove('scale-100', 'opacity-100');
                modalContent.classList.add('scale-95', 'opacity-0');
                setTimeout(() => createModal.classList.add('hidden'), 300);
            }
        }

        function generateLink() {
            const msg = document.getElementById('newMessage').value;
            const code = document.getElementById('newCode').value;

            if (!msg || !code) return;

            // Encode data
            const payload = JSON.stringify({ m: msg, c: code });
            const encoded = btoa(payload); // Base64
            
            // Construct URL
            const url = `${window.location.origin}${window.location.pathname}?d=${encoded}`;

            // Update UI
            document.getElementById('shareUrl').value = url;
            document.getElementById('displayCode').innerText = code;
            
            stepCreate.classList.add('hidden');
            stepShare.classList.remove('hidden');
        }

        function copyLink() {
            const urlInput = document.getElementById('shareUrl');
            urlInput.select();
            document.execCommand('copy');
            
            const btn = event.target;
            const originalText = btn.innerText;
            btn.innerText = 'Copied!';
            btn.classList.add('text-green-500');
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('text-green-500');
            }, 2000);
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[100px] rounded-full ambient-glow"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
</div>

<main className="relative z-10 w-full max-w-lg px-6 flex flex-col items-center">

<header className="mb-10 text-center transition-all duration-500" id="headerTitle">
<div className="inline-flex items-center justify-center w-10 h-10 mb-4 rounded-full glass-panel shadow-lg">
<iconify-icon className="text-xl text-slate-400" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
</div>
<h1 className="text-xl font-medium tracking-tight text-white mb-1">Secure Drop</h1>
<p className="text-sm text-slate-500">Enter the passkey to unlock the message.</p>
</header>

<div className="perspective-container relative w-full max-w-[340px] h-[220px] group mx-auto mb-12">

<div className="absolute inset-0 bg-orange-500/30 blur-[50px] rounded-full opacity-0 transition-opacity duration-1000" id="envelopeGlow"></div>

<div className="card-content absolute left-3 right-3 bottom-3 top-4 bg-[#111] rounded-xl shadow-2xl z-20 flex flex-col items-center border border-white/10 overflow-hidden" id="secretCard">

<div className="w-full h-1 bg-gradient-to-r from-orange-600 to-amber-600"></div>
<div className="w-full h-full flex flex-col items-center justify-center p-6 text-center opacity-0 transition-opacity duration-500 delay-100" id="cardInner">
<div className="mb-3 p-2 rounded-full bg-orange-500/10 text-orange-500">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</div>
<h2 className="text-lg font-medium text-white mb-3 tracking-tight">Message Decrypted</h2>
<div className="w-full h-px bg-white/10 mb-4"></div>
<p className="text-sm text-slate-300 leading-relaxed font-light" id="revealedMessage">

</p>
</div>
</div>

<div className="absolute inset-0 bg-zinc-900 rounded-lg border border-white/5 shadow-2xl z-10"></div>

<div className="envelope-flap absolute top-0 left-0 w-full h-[120px] origin-top" id="flap">

<div className="w-full h-full bg-zinc-800 rounded-t-lg shadow-lg border-t border-white/10" style={{clipPath: 'polygon(0 0, 100% 0, 50% 100%)', background: 'linear-gradient(180deg, #27272a 0%, #18181b 100%)'}}>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-[130px] z-30 pointer-events-none">
<div className="w-full h-full bg-zinc-900 rounded-b-lg border border-white/10 shadow-[0_-5px_15px_rgba(0,0,0,0.5)]" style={{clipPath: 'polygon(0 100%, 0 0, 50% 30%, 100% 0, 100% 100%)', background: 'linear-gradient(0deg, #18181b 0%, #27272a 100%)'}}>
</div>
</div>
</div>

<div className="w-full max-w-xs transition-all duration-500 transform translate-y-0 opacity-100" id="unlockInterface">
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative flex items-center bg-surface rounded-lg p-1 border border-white/10 shadow-xl">
<div className="pl-3 text-slate-500 flex items-center">
<iconify-icon className="text-lg" icon="solar:key-minimalistic-linear"></iconify-icon>
</div>
<input autocomplete="off" className="border-none placeholder:text-slate-600 focus:ring-0 text-sm text-white tracking-widest font-mono bg-transparent w-full py-2.5 px-3" id="passcodeInput" placeholder="Passcode" type="text"/>
<button className="bg-white hover:bg-slate-200 text-black text-xs font-semibold py-2 px-4 rounded-[4px] transition-colors shadow-lg" id="unlockBtn" onclick="attemptUnlock()">
                        Unlock
                    </button>
</div>
</div>
<p className="h-4 mt-2 text-center text-[10px] text-red-500 font-medium opacity-0 transition-opacity" id="errorMsg">Incorrect code</p>
</div>

<div className="w-full max-w-xs flex flex-col gap-3 hidden opacity-0 transition-all duration-500 transform translate-y-4" id="postUnlockControls">
<button className="w-full glass-panel hover:bg-white/5 text-slate-300 text-xs font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 group" onclick="resetEnvelope()">
<iconify-icon className="text-base group-hover:rotate-180 transition-transform duration-500" icon="solar:refresh-linear"></iconify-icon>
                Close Envelope
            </button>
<button className="w-full text-xs text-slate-500 hover:text-orange-500 transition-colors py-2" onclick="toggleCreateMode()">
                Create your own message
            </button>
</div>

<div className="mt-8 transition-all duration-500" id="createOption">
<button className="text-xs font-medium text-slate-500 hover:text-white transition-colors flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-white/10" onclick="toggleCreateMode()">
<iconify-icon className="text-sm" icon="solar:add-circle-linear"></iconify-icon>
<span>Create &amp; Share New Message</span>
</button>
</div>
</main>

<div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm hidden flex items-center justify-center p-6" id="createModal">
<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 w-full max-w-sm shadow-2xl scale-95 opacity-0 transition-all duration-300 transform" id="modalContent">

<div id="stepCreate">
<div className="flex justify-between items-center mb-6">
<h3 className="text-white font-medium text-sm">New Secure Message</h3>
<button className="text-slate-500 hover:text-white" onclick="toggleCreateMode()"><iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon></button>
</div>
<div className="space-y-4">
<div>
<label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-2">Secret Message</label>
<textarea className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-sm text-white placeholder:text-slate-700 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 outline-none transition-all resize-none" id="newMessage" placeholder="Write your secret here..." rows="3"></textarea>
</div>
<div>
<label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-500 mb-2">Unlock Passcode</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-sm text-white font-mono placeholder:text-slate-700 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 outline-none transition-all" id="newCode" placeholder="e.g. 2024" type="text"/>
</div>
<button className="w-full bg-white hover:bg-slate-200 text-black text-sm font-medium py-3 rounded-lg transition-all mt-2" onclick="generateLink()">
                        Generate Link
                    </button>
</div>
</div>

<div className="hidden text-center" id="stepShare">
<div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-2xl" icon="solar:link-circle-linear"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Ready to Share</h3>
<p className="text-xs text-slate-500 mb-6">Send this link. They will need the code <span className="text-white font-mono" id="displayCode"></span> to open it.</p>
<div className="bg-zinc-900/80 border border-white/10 rounded-lg p-3 mb-4 flex items-center gap-2">
<input className="bg-transparent text-xs text-slate-400 w-full outline-none font-mono truncate" id="shareUrl" readonly="" type="text"/>
<button className="text-white hover:text-orange-500 text-xs font-medium whitespace-nowrap" onclick="copyLink()">Copy</button>
</div>
<button className="text-xs text-slate-500 hover:text-white" onclick="toggleCreateMode()">Close</button>
</div>
</div>
</div>


    </>
  );
}
