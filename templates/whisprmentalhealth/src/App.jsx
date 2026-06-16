import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const chatContainer = document.getElementById('chat-container');
            const chatInput = document.getElementById('chat-input');
            const sendBtn = document.getElementById('send-btn');

            // Safety System
            const crisisKeywords = ['die', 'kill', 'suicide', 'end it', 'end my life', 'hurt myself', 'harm myself', 'no reason to live', 'want to die'];
            
            const supportiveResponses = [
                "I'm listening. That sounds like a really heavy burden to carry.",
                "Thank you for trusting me with this. How long have you been feeling this way?",
                "I hear how overwhelming things feel right now. I'm here.",
                "It takes a lot of strength to share that. I'm right here with you.",
                "I understand. Sometimes things just feel like too much.",
                "Your feelings are valid. I'm here to listen if you want to say more.",
                "I care about what you have to say. Take your time."
            ];

            function isCrisis(text) {
                const lowerText = text.toLowerCase();
                return crisisKeywords.some(keyword => lowerText.includes(keyword));
            }

            function scrollToBottom() {
                chatContainer.scrollTo({
                    top: chatContainer.scrollHeight,
                    behavior: 'smooth'
                });
            }

            function addMessage(text, isUser, isCrisisMsg = false) {
                const wrapper = document.createElement('div');
                wrapper.className = isUser 
                    ? "flex justify-end mb-6 animate-fade-in" 
                    : "flex gap-4 mb-6 animate-fade-in";

                if (isUser) {
                    wrapper.innerHTML = `
                        <div class="bg-indigo-600 text-white px-5 py-3 rounded-2xl rounded-tr-sm text-sm leading-relaxed max-w-[85%] shadow-lg shadow-indigo-500/10">
                            ${text}
                        </div>
                    `;
                } else {
                    let content = text;
                    let iconColor = "text-indigo-400";
                    let bgBorder = "bg-indigo-500/5 border border-indigo-500/10 text-slate-300";

                    if (isCrisisMsg) {
                        iconColor = "text-rose-400";
                        bgBorder = "bg-rose-500/5 border border-rose-500/10 text-slate-300";
                        content = `
                            <p class="mb-3">${text}</p>
                            <div class="bg-[#0f1115] rounded-lg p-3 border border-rose-500/20 flex flex-col gap-2">
                                <span class="text-xs font-semibold text-rose-400 uppercase tracking-wider">Immediate Support</span>
                                <p class="text-xs text-slate-400">You are not alone. Please reach out to a crisis counselor now:</p>
                                <a href="sms:741741&body=HOME" class="flex items-center gap-2 text-sm text-white font-medium hover:text-rose-400 transition-colors">
                                    <iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon>
                                    Text HOME to 741741
                                </a>
                                <a href="tel:988" class="flex items-center gap-2 text-sm text-white font-medium hover:text-rose-400 transition-colors">
                                    <iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                                    Call or Text 988
                                </a>
                            </div>
                        `;
                    }

                    wrapper.innerHTML = `
                        <div class="w-8 h-8 rounded-full bg-indigo-900/30 flex-shrink-0 flex items-center justify-center ${iconColor} mt-1">
                            <iconify-icon icon="${isCrisisMsg ? 'solar:heart-broken-linear' : 'solar:ghost-smile-linear'}" width="18" stroke-width="1.5"></iconify-icon>
                        </div>
                        <div class="flex flex-col gap-2">
                            <span class="text-xs ${iconColor} font-medium ml-1">Whispr</span>
                            <div class="${bgBorder} px-5 py-3 rounded-2xl rounded-tl-sm text-sm leading-relaxed max-w-[90%]">
                                ${content}
                            </div>
                        </div>
                    `;
                }

                chatContainer.appendChild(wrapper);
                scrollToBottom();
            }

            function handleSend() {
                const text = chatInput.value.trim();
                if (!text) return;

                // Add User Message
                addMessage(text, true);
                chatInput.value = '';

                // Simulate Whispr Response
                setTimeout(() => {
                    if (isCrisis(text)) {
                        addMessage("I hear how much pain you are in right now, and I want you to know that your life matters. I cannot provide the help you need, but there are people who can support you through this safely.", false, true);
                    } else {
                        const randomResponse = supportiveResponses[Math.floor(Math.random() * supportiveResponses.length)];
                        addMessage(randomResponse, false);
                    }
                }, 1000); 
            }

            // Event Listeners
            sendBtn.addEventListener('click', handleSend);
            
            chatInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<input className="hidden" id="auth-modal" type="checkbox"/>
<input className="hidden" id="voice-mode" type="checkbox"/>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0f1115]/80 backdrop-blur-md transition-all duration-500">
<div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon icon="solar:soundwave-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-slate-200 font-medium tracking-tight">Whispr</span>
</a>
<div className="flex items-center gap-6 text-sm">
<a className="hidden sm:block hover:text-slate-200 transition-colors" href="#resources">Resources</a>
<label className="cursor-pointer text-slate-400 hover:text-white transition-colors flex items-center gap-2 group" htmlFor="auth-modal">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:user-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Log in</span>
</label>
<label className="cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-medium hover:bg-indigo-500/20 transition-colors" htmlFor="auth-modal">
<span>Create Account</span>
</label>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col pt-24 pb-12 px-6 relative z-10">

<div className="hero-text max-w-2xl mx-auto w-full text-center mb-12 animate-fade-in transition-all duration-500">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-indigo-300 text-xs mb-6">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span>A safe, anonymous space to breathe</span>
</div>
<h1 className="text-4xl md:text-5xl font-medium text-slate-100 tracking-tight mb-4 leading-tight">
                How is your heart feeling <br className="hidden md:block"/> at this moment?
            </h1>
<p className="text-lg text-slate-500 font-light max-w-lg mx-auto leading-relaxed">
                No judgment. Just a quiet place to unload. <br className="hidden sm:block"/> Create an account to keep your safe space secure.
            </p>
</div>

<div className="max-w-2xl mx-auto w-full relative z-10 animate-fade-in delay-100">
<div className="glass-input rounded-2xl overflow-hidden min-h-[500px] flex flex-col shadow-2xl shadow-black/20 relative">

<div className="text-interface flex flex-col h-full flex-grow">

<div className="flex-grow p-6 overflow-y-auto max-h-[450px] scroll-smooth" id="chat-container">

<div className="flex gap-4 mb-6">
<div className="w-8 h-8 rounded-full bg-indigo-900/30 flex-shrink-0 flex items-center justify-center text-indigo-400 mt-1">
<iconify-icon icon="solar:ghost-smile-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs text-indigo-400 font-medium ml-1">Whispr</span>
<div className="bg-indigo-500/5 border border-indigo-500/10 text-slate-300 px-5 py-3 rounded-2xl rounded-tl-sm text-sm leading-relaxed max-w-[90%]">
                                    Hi there. I'm here to listen. You can tell me anything that's on your mind—I won't judge, I won't give advice, and I won't share this with anyone. 
                                </div>
</div>
</div>
</div>

<div className="p-4 bg-[#0f1115]/50 border-t border-white/5 backdrop-blur-sm mt-auto">
<div className="relative group">
<textarea className="w-full bg-slate-900/50 text-slate-200 text-sm p-4 rounded-xl resize-none focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-all placeholder:text-slate-600 pl-12" id="chat-input" placeholder="Type here..." rows="3"></textarea>

<label className="absolute left-3 top-3 w-8 h-8 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 flex items-center justify-center cursor-pointer transition-colors" htmlFor="voice-mode" title="Switch to Voice Mode">
<iconify-icon icon="solar:microphone-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</label>
<div className="absolute bottom-3 right-3 flex items-center gap-2">
<span className="text-[10px] text-slate-600 uppercase tracking-widest mr-2 group-focus-within:text-slate-500 transition-colors">Private</span>
<button className="w-8 h-8 rounded-lg bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-400 transition-colors shadow-lg shadow-indigo-500/20" id="send-btn">
<iconify-icon icon="solar:arrow-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="voice-interface hidden flex-col items-center justify-center h-full w-full absolute inset-0 bg-[#0f1115]/90 backdrop-blur-xl z-20">

<div className="relative w-64 h-64 flex items-center justify-center mb-8">
<div className="voice-ring w-32 h-32"></div>
<div className="voice-ring w-48 h-48"></div>
<div className="voice-ring w-64 h-64"></div>

<div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-400 shadow-[0_0_60px_rgba(99,102,241,0.4)] flex items-center justify-center animate-pulse">

<div className="flex items-end gap-1 h-8">
<div className="w-1 bg-white/80 rounded-full wave-bar"></div>
<div className="w-1 bg-white/80 rounded-full wave-bar" style={{animationDuration: '0.9s'}}></div>
<div className="w-1 bg-white/80 rounded-full wave-bar" style={{animationDuration: '1.1s'}}></div>
<div className="w-1 bg-white/80 rounded-full wave-bar" style={{animationDuration: '0.8s'}}></div>
<div className="w-1 bg-white/80 rounded-full wave-bar"></div>
</div>
</div>
</div>
<div className="text-center space-y-2 mb-12">
<h2 className="text-2xl font-medium text-slate-100 tracking-tight">I'm listening</h2>
<p className="text-sm text-slate-500 font-light">Take your time. This is your safe space.</p>
</div>

<div className="flex items-center gap-6">
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-slate-400 flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:muted-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>

<label className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all cursor-pointer shadow-lg shadow-rose-500/10" htmlFor="voice-mode">
<iconify-icon icon="solar:phone-hangup-linear" strokeWidth="1.5" width="28"></iconify-icon>
</label>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-slate-400 flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:keyboard-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none breathing-orb z-0"></div>
</main>

<div className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center px-4 bg-[#000000]/70 backdrop-blur-sm">
<label className="absolute inset-0 cursor-default" htmlFor="auth-modal"></label>
<div className="modal-content relative w-full max-w-sm glass-panel rounded-2xl p-0 shadow-2xl overflow-hidden">

<label className="absolute top-4 right-4 text-slate-500 hover:text-slate-200 cursor-pointer z-20 transition-colors" htmlFor="auth-modal">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</label>

<input checked="" className="hidden" id="step-1" name="auth_step" type="radio"/>
<input className="hidden" id="step-2" name="auth_step" type="radio"/>

<div className="view-step-1 p-8">
<div className="text-center mb-6">
<div className="w-12 h-12 mx-auto rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 border border-indigo-500/20">
<iconify-icon icon="solar:shield-user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-100 tracking-tight mb-2">Welcome to Whispr</h3>
<p className="text-sm text-slate-500">
                        Enter your email to sign in or create an account.
                    </p>
</div>
<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 ml-1">Email address</label>
<div className="relative group">
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500/50 focus:bg-slate-900/80 transition-all placeholder:text-slate-600 pl-10" placeholder="you@example.com" type="email"/>
<iconify-icon className="absolute left-3 top-3 text-slate-500 group-focus-within:text-indigo-400 transition-colors" icon="solar:letter-linear" width="18"></iconify-icon>
</div>
</div>

<div className="bg-indigo-500/5 border border-indigo-500/10 rounded-lg p-3 flex gap-3 items-start">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="solar:info-circle-linear" width="16"></iconify-icon>
<p className="text-[11px] text-slate-400 leading-relaxed">
                            For your security, we will send a <span className="text-slate-300 font-medium">verification code</span> to your email. If you haven't logged in for 5 days, we'll ask for this again.
                        </p>
</div>
<label className="w-full bg-slate-100 hover:bg-white text-black font-semibold text-sm py-3 rounded-lg shadow-lg shadow-white/5 transition-all mt-2 flex items-center justify-center gap-2 cursor-pointer" htmlFor="step-2">
<span>Continue with Email</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</label>
</div>
</div>

<div className="view-step-2 p-8">
<div className="mb-6">
<label className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 cursor-pointer mb-6 transition-colors" htmlFor="step-1">
<iconify-icon icon="solar:arrow-left-linear" width="12"></iconify-icon>
                        Back
                    </label>
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-100 tracking-tight">Check your inbox</h3>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        We sent a temporary verification code to your email. <br/> It contains 6 characters.
                    </p>
</div>
<div className="space-y-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 ml-1 flex justify-between">
<span>Verification Code</span>
<span className="text-xs text-slate-600">No special signs</span>
</label>
<div className="relative">
<input className="verification-input w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-lg text-slate-200 focus:outline-none focus:border-emerald-500/50 focus:bg-slate-900/80 transition-all placeholder:text-slate-700 uppercase tracking-[0.8em]" maxlength="6" placeholder="------" type="text"/>
</div>
<p className="text-[10px] text-slate-500 text-center pt-2">
                            Security check required every 5 days to protect your history.
                        </p>
</div>
<button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm py-3 rounded-lg shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
                        Verify &amp; Sign In
                    </button>
<div className="text-center">
<button className="text-xs text-slate-500 hover:text-emerald-400 transition-colors">Resend Code</button>
</div>
</div>
</div>
</div>
</div>

<footer className="border-t border-white/5 bg-[#0a0c0f] py-16 px-6 relative z-10 mt-auto transition-opacity duration-500" id="resources">
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-4">
<div className="flex items-center gap-2 text-slate-200 font-medium">
<iconify-icon className="text-rose-400" icon="solar:heart-angle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Why we built Whispr</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                    Whispr is a project dedicated to mental clarity. We believe that expressing thoughts in a safe, non-judgmental environment is the first step to feeling lighter.
                </p>
</div>
<div className="space-y-4">
<div className="flex items-center gap-2 text-slate-200 font-medium">
<iconify-icon className="text-emerald-400" icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Need immediate support?</span>
</div>
<div className="grid grid-cols-1 gap-3">
<a className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors group" href="#">
<span className="text-sm text-slate-300">Crisis Text Line</span>
<div className="flex items-center gap-2 text-xs text-slate-500 group-hover:text-slate-300">
<span>Text HOME to 741741</span>
</div>
</a>
</div>
</div>
</div>
<div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-white/5 text-center">
<p className="text-[10px] text-slate-700 uppercase tracking-widest">
                © 2023 Whispr. Designed for peace of mind.
            </p>
</div>
</footer>



    </>
  );
}
