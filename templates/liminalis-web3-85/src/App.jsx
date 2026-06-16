import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
liminal: {
black: '#050505',
dark: '#0a0a0a',
purple: '#9D00FF',
cyan: '#00FFFF',
dim: '#1a1a1a',
}
},
fontFamily: {
mono: ['"Share Tech Mono"', 'monospace'],
serif: ['"Cinzel"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'flicker': 'flicker 0.15s infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
flicker: {
'0%': { opacity: '0.9' },
'50%': { opacity: '1.0' },
'100%': { opacity: '0.85' },
}
}
}
}
}



        // Typewriter Effect
        const text = "Only those who hold the key may pass";
        const typewriterElement = document.getElementById('typewriter');
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typewriterElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50 + Math.random() * 50); // Random variation for realism
            }
        }
        
        // Start typewriter after a slight delay
        setTimeout(typeWriter, 1000);

        // Wallet Logic
        const walletStep = document.getElementById('wallet-step');
        const interactionStep = document.getElementById('interaction-step');
        const balanceDisplay = document.getElementById('balance-display');
        const walletAddress = document.getElementById('wallet-address');
        const statusMessage = document.getElementById('status-message');
        const gateControl = document.getElementById('gate-control');

        function connectWallet() {
            // Simulate connection delay
            const btn = walletStep.querySelector('button');
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:refresh-circle-linear" class="animate-spin" width="20"></iconify-icon> Connecting...';
            btn.classList.add('cursor-wait');

            setTimeout(() => {
                walletStep.classList.add('hidden');
                interactionStep.classList.remove('hidden');
                interactionStep.classList.add('flex');
                
                // Mock Data
                const mockAddress = "8yP3...jK9s";
                const mockBalance = 888; // Sufficient amount
                // const mockBalance = 400; // Test insufficient by changing this

                walletAddress.innerText = mockAddress;
                
                // Count up animation for balance
                let currentBal = 0;
                const interval = setInterval(() => {
                    currentBal += 11;
                    if (currentBal >= mockBalance) {
                        currentBal = mockBalance;
                        clearInterval(interval);
                        checkEligibility(mockBalance);
                    }
                    balanceDisplay.innerText = currentBal;
                }, 20);

            }, 1800);
        }

        function checkEligibility(balance) {
            if (balance >= 777) {
                statusMessage.innerHTML = '<span class="text-liminal-cyan" style="text-shadow:0 0 5px cyan">Essence Sufficient. The path opens.</span>';
                gateControl.classList.remove('opacity-50', 'pointer-events-none');
                gateControl.classList.add('opacity-100');
            } else {
                statusMessage.innerHTML = '<span class="text-red-500 glitch" data-text="INSUFFICIENT ESSENCE">Insufficient essence. 777 $LMNS required.</span>';
            }
        }

        function attemptCross() {
            const input = document.getElementById('pass-input');
            const btn = gateControl.querySelector('button');
            
            if (input.value.trim().length > 0) {
                btn.innerText = "Dissolving Reality...";
                
                // Trigger Success Sequence
                setTimeout(() => {
                    const overlay = document.getElementById('success-overlay');
                    const msg = document.getElementById('success-message');
                    
                    // Flash
                    overlay.classList.remove('hidden');
                    overlay.classList.add('animate-ping'); // tailwind ping is simplistic, usually needs custom, but works for flash
                    overlay.style.animation = "ping 0.5s cubic-bezier(0, 0, 0.2, 1) forwards reverse";
                    
                    // Fade to black outcome
                    setTimeout(() => {
                        overlay.style.backgroundColor = "black";
                        overlay.style.opacity = "1";
                        msg.classList.remove('hidden');
                        msg.classList.add('flex');
                    }, 200);

                }, 1000);
            } else {
                input.classList.add('animate-pulse', 'border-red-500');
                setTimeout(() => input.classList.remove('animate-pulse', 'border-red-500'), 1000);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="scanlines"></div>
<div className="crt-overlay"></div>
<div className="noise"></div>

<div className="fog-container">
<div className="fog-img"></div>
<div className="fog-img-2"></div>
</div>

<div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden bg-black">
<video autoplay="" className="w-full h-full object-cover opacity-40 grayscale brightness-50 scale-105" loop="" muted="" playsinline="">

<source src="https://assets.mixkit.co/videos/preview/mixkit-dark-corridor-in-a-building-4235-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
</div>

<main className="relative z-10 w-full min-h-screen flex flex-col items-center">

<section className="min-h-screen flex flex-col justify-center items-center w-full relative px-6 text-center">
<div className="mb-6 relative group cursor-default">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-mono font-bold tracking-tighter text-white glitch relative z-20" data-text="LIMINALIS">
                    LIMINALIS
                </h1>
<div className="absolute inset-0 bg-liminal-purple opacity-20 blur-[100px] z-10 animate-pulse-slow"></div>
</div>
<h2 className="text-xl md:text-3xl font-serif text-gray-300 tracking-widest uppercase mb-12 opacity-80" style={{textShadow: '0 0 20px rgba(0,255,255,0.3)'}}>
                Cross the 7 Thresholds
            </h2>
<div className="h-8">
<p className="text-xs md:text-sm font-mono text-liminal-cyan typewriter-cursor tracking-widest" id="typewriter"></p>
</div>
<div className="absolute bottom-12 animate-bounce opacity-50">
<iconify-icon className="text-white" icon="solar:mouse-circle-linear" width="32"></iconify-icon>
</div>
</section>

<section className="w-full max-w-4xl py-24 px-6 flex flex-col items-center space-y-8 relative">
<div className="flex justify-between items-center w-full relative">

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-800 -z-10"></div>

<div className="relative group">
<div className="bg-black border border-gray-700 p-3 rounded-full rune-locked opacity-50 transition-all duration-500 hover:scale-110">
<iconify-icon icon="solar:asteroid-linear" width="24"></iconify-icon>
</div>
</div>

<div className="relative group">
<div className="bg-black border border-gray-700 p-3 rounded-full rune-locked opacity-50 transition-all duration-500 hover:scale-110">
<iconify-icon icon="solar:atom-linear" width="24"></iconify-icon>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-liminal-purple blur-md opacity-50 animate-pulse"></div>
<div className="bg-black border border-liminal-purple p-4 rounded-full rune-active relative z-10 shadow-[0_0_15px_rgba(157,0,255,0.5)]">
<iconify-icon icon="solar:black-hole-linear" width="32"></iconify-icon>
</div>
<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max">
<span className="text-[10px] font-mono text-liminal-purple tracking-widest uppercase">Threshold III</span>
</div>
</div>

<div className="relative group">
<div className="bg-black border border-gray-800 p-3 rounded-full rune-locked opacity-30">
<iconify-icon icon="solar:labyrinth-linear" width="24"></iconify-icon>
</div>
</div>

<div className="relative group">
<div className="bg-black border border-gray-800 p-3 rounded-full rune-locked opacity-30">
<iconify-icon icon="solar:moon-fog-linear" width="24"></iconify-icon>
</div>
</div>

<div className="relative group">
<div className="bg-black border border-gray-800 p-3 rounded-full rune-locked opacity-30">
<iconify-icon icon="solar:ufo-linear" width="24"></iconify-icon>
</div>
</div>

<div className="relative group">
<div className="bg-black border border-gray-800 p-3 rounded-full rune-locked opacity-30">
<iconify-icon icon="solar:infinity-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="w-full max-w-xl px-6 pb-32 relative perspective-1000">
<div className="glass-card rounded-2xl p-1 md:p-12 relative overflow-hidden transition-all duration-700 transform hover:rotate-x-2" id="card-container">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-liminal-cyan to-transparent opacity-50 animate-pulse"></div>

<div className="relative z-10 flex flex-col items-center text-center space-y-8 p-8">

<div className="space-y-4">
<iconify-icon className="text-liminal-cyan text-4xl mb-4 opacity-80 animate-float" icon="solar:magic-stick-3-linear"></iconify-icon>
<p className="font-serif text-lg md:text-2xl italic text-gray-200 leading-relaxed" style={{textShadow: '0 0 10px rgba(255,255,255,0.2)'}}>
                            "The first threshold whispers in the void... Essence is the key. Solve to pass."
                        </p>
</div>

<div className="w-full pt-6" id="wallet-step">
<button className="group relative w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#512da8] to-[#673ab7] hover:from-[#5e35b1] hover:to-[#7e57c2] text-white font-mono font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(103,58,183,0.3)] hover:shadow-[0_0_30px_rgba(103,58,183,0.6)]" onclick="connectWallet()">
<span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 rounded-xl transition-opacity"></span>
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Connect Phantom</span>
</button>
<p className="mt-3 text-[10px] text-gray-500 font-mono tracking-tight">Solana Network • Secure Connection</p>
</div>

<div className="w-full hidden flex-col items-center space-y-6" id="interaction-step">

<div className="w-full flex justify-between items-center border-b border-gray-800 pb-2 mb-2">
<div className="flex items-center gap-2 text-xs font-mono text-gray-400">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span id="wallet-address">0x...</span>
</div>
<div className="text-sm font-mono text-liminal-purple font-bold tracking-widest" style={{textShadow: '0 0 10px #9D00FF'}}>
<span id="balance-display">0</span> $LMNS
                            </div>
</div>

<div className="text-xs font-mono text-center min-h-[1.5rem]" id="status-message"></div>

<div className="w-full space-y-6 opacity-50 pointer-events-none transition-opacity duration-500" id="gate-control">
<div className="relative w-full group">
<input autocomplete="off" className="w-full bg-transparent border-b border-gray-700 text-center py-3 text-white font-mono focus:outline-none focus:border-liminal-cyan focus:shadow-[0_4px_10px_-4px_rgba(0,255,255,0.3)] transition-all placeholder:text-gray-700" id="pass-input" placeholder="Enter the passage word..." type="text"/>
<iconify-icon className="absolute right-0 top-3 text-gray-700 group-focus-within:text-liminal-cyan transition-colors" icon="solar:key-linear"></iconify-icon>
</div>
<button className="w-full py-4 border border-white/20 hover:border-liminal-cyan/50 hover:bg-liminal-cyan/10 text-white font-serif uppercase tracking-widest text-sm transition-all duration-300" onclick="attemptCross()">
                                Cross the Threshold
                            </button>
</div>
</div>
</div>
</div>
</section>

<footer className="fixed bottom-4 right-6 z-50 opacity-0 hover:opacity-100 transition-opacity duration-1000">
<span className="text-[10px] font-mono text-gray-800 hover:text-red-900 cursor-help select-none">Itzal0x07</span>
</footer>
</main>

<div className="fixed inset-0 bg-white z-[100] hidden pointer-events-none" id="success-overlay"></div>
<div className="fixed inset-0 z-[101] hidden flex-col items-center justify-center bg-black text-center p-6" id="success-message">
<h2 className="text-4xl md:text-6xl font-mono text-white glitch mb-4" data-text="THRESHOLD CROSSED">THRESHOLD CROSSED</h2>
<p className="text-liminal-purple font-mono text-sm tracking-widest animate-pulse">The void accepts your offering.</p>
<div className="mt-12">
<iconify-icon className="text-white animate-spin-slow" icon="solar:infinity-linear" width="64"></iconify-icon>
</div>
</div>



    </>
  );
}
