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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Audio Logic ---
        const sampleAudio = document.getElementById('demo-audio');
        let currentPlayingBtn = null;
        
        // Ensure volume is adequate
        sampleAudio.volume = 1.0;

        function playSample(btn) {
            const allBtns = document.querySelectorAll('.audio-btn');
            
            // Check if audio is currently playing
            const isPlaying = !sampleAudio.paused && !sampleAudio.ended && sampleAudio.currentTime > 0;

            // If clicks the same button that is currently playing
            if (currentPlayingBtn === btn && isPlaying) {
                sampleAudio.pause();
                sampleAudio.currentTime = 0;
                updateAudioButtonUI(btn, false);
                currentPlayingBtn = null;
                return;
            }

            // If another button is clicked, reset everything first
            if (isPlaying) {
                sampleAudio.pause();
                sampleAudio.currentTime = 0;
                allBtns.forEach(b => updateAudioButtonUI(b, false));
            }

            // Play the audio
            const playPromise = sampleAudio.play();
            
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    currentPlayingBtn = btn;
                    updateAudioButtonUI(btn, true);
                })
                .catch(error => {
                    console.error("Audio playback error:", error);
                    alert("Unable to play audio. Please check your connection.");
                    updateAudioButtonUI(btn, false);
                });
            }
        }

        // Global event listeners for audio state to ensure UI stays in sync
        sampleAudio.addEventListener('ended', () => {
             if(currentPlayingBtn) updateAudioButtonUI(currentPlayingBtn, false);
             currentPlayingBtn = null;
        });

        sampleAudio.addEventListener('pause', () => {
            // Only update UI if we are NOT switching tracks (handled in playSample)
            // This event fires when we manually pause too.
            if(sampleAudio.currentTime === 0 && currentPlayingBtn) {
                 updateAudioButtonUI(currentPlayingBtn, false);
                 currentPlayingBtn = null;
            }
        });

        function updateAudioButtonUI(btn, isPlaying) {
            const playIcon = btn.querySelector('.icon-play');
            const stopIcon = btn.querySelector('.icon-stop');
            const visualizer = btn.querySelector('.icon-visualizer');
            const textSpan = btn.querySelector('.btn-text');
            const arrow = btn.querySelector('.arrow');
            const type = btn.getAttribute('data-type');
            
            if (isPlaying) {
                if(playIcon) playIcon.classList.add('hidden');
                if(stopIcon) stopIcon.classList.remove('hidden');
                if(visualizer) visualizer.classList.remove('hidden', 'flex'); 
                if(visualizer) visualizer.classList.add('flex');
                
                if(textSpan) textSpan.innerText = "Listening...";
                if(arrow) arrow.classList.add('hidden');
            } else {
                if(playIcon) playIcon.classList.remove('hidden');
                if(stopIcon) stopIcon.classList.add('hidden');
                if(visualizer) visualizer.classList.add('hidden');
                if(visualizer) visualizer.classList.remove('flex');

                // Restore original text
                if(textSpan) {
                    if (type === 'hero') textSpan.innerText = "See It Handle a Real Call";
                    else textSpan.innerText = "Listen to Sample";
                }
                if(arrow) arrow.classList.remove('hidden');
            }
        }

        // --- Modal Logic ---
        const modal = document.getElementById('legal-modal');
        const closeModalBtn = document.getElementById('close-modal');
        const modalBackdrop = document.getElementById('modal-backdrop');
        const privacyLink = document.getElementById('privacy-link');
        const termsLink = document.getElementById('terms-link');
        const contentPrivacy = document.getElementById('content-privacy');
        const contentTerms = document.getElementById('content-terms');
        const tabPrivacy = document.getElementById('tab-privacy');
        const tabTerms = document.getElementById('tab-terms');

        function openModal(type) {
            modal.classList.remove('hidden');
            if(type === 'privacy') showPrivacy();
            else showTerms();
        }
        function closeModal() { modal.classList.add('hidden'); }
        function showPrivacy() {
            contentPrivacy.classList.remove('hidden');
            contentTerms.classList.add('hidden');
            tabPrivacy.classList.add('border-purple-500', 'text-white');
            tabPrivacy.classList.remove('border-transparent', 'text-zinc-500');
            tabTerms.classList.remove('border-purple-500', 'text-white');
            tabTerms.classList.add('border-transparent', 'text-zinc-500');
        }
        function showTerms() {
            contentTerms.classList.remove('hidden');
            contentPrivacy.classList.add('hidden');
            tabTerms.classList.add('border-purple-500', 'text-white');
            tabTerms.classList.remove('border-transparent', 'text-zinc-500');
            tabPrivacy.classList.remove('border-purple-500', 'text-white');
            tabPrivacy.classList.add('border-transparent', 'text-zinc-500');
        }

        privacyLink.addEventListener('click', (e) => { e.preventDefault(); openModal('privacy'); });
        termsLink.addEventListener('click', (e) => { e.preventDefault(); openModal('terms'); });
        tabPrivacy.addEventListener('click', showPrivacy);
        tabTerms.addEventListener('click', showTerms);
        closeModalBtn.addEventListener('click', closeModal);
        modalBackdrop.addEventListener('click', closeModal);

        // --- AI Chat & Voice Logic ---
        const chatWidget = document.getElementById('ai-chat-widget');
        const chatMessages = document.getElementById('chat-messages');
        const userInput = document.getElementById('user-input');
        const voiceOverlay = document.getElementById('voice-overlay');
        let isChatOpen = false;
        let isFirstMessage = true;
        let synthesis = window.speechSynthesis;
        let recognition = null;
        let isVoiceMode = false;

        if ('webkitSpeechRecognition' in window) {
            recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            recognition.onresult = function(event) {
                const text = event.results[0][0].transcript;
                userInput.value = text;
                stopListening();
                handleChatSubmit(new Event('submit'));
            };

            recognition.onerror = function(event) {
                stopListening();
                console.error('Speech recognition error', event.error);
            };
            
            recognition.onend = function() {
                stopListening();
            };
        }

        function toggleChat() {
            isChatOpen = !isChatOpen;
            if (isChatOpen) {
                chatWidget.classList.remove('opacity-0', 'scale-95', 'translate-y-4', 'pointer-events-none');
                if (isFirstMessage) {
                    setTimeout(() => {
                        addBotMessage("Hello! I'm the website's virtual assistant. I'm here to help you understand our services and how we can assist your business. How can I help you today?");
                    }, 500);
                    isFirstMessage = false;
                }
            } else {
                chatWidget.classList.add('opacity-0', 'scale-95', 'translate-y-4', 'pointer-events-none');
            }
        }

        function startListening() {
            if (recognition) {
                isVoiceMode = true; 
                voiceOverlay.classList.remove('opacity-0', 'pointer-events-none');
                recognition.start();
            } else {
                alert("Voice input is not supported in this browser. Please try Chrome.");
            }
        }

        function stopListening() {
            if (recognition) {
                voiceOverlay.classList.add('opacity-0', 'pointer-events-none');
                recognition.stop();
            }
        }

        function handleChatSubmit(e) {
            e.preventDefault();
            const text = userInput.value.trim();
            if (!text) return;

            addUserMessage(text);
            userInput.value = '';

            showTypingIndicator();

            setTimeout(() => {
                removeTypingIndicator();
                const response = generateAIResponse(text);
                addBotMessage(response);
                
                if (isVoiceMode && synthesis && !response.includes("Sanjo@aibizcentre.com")) {
                    const utterance = new SpeechSynthesisUtterance(response);
                    const voices = synthesis.getVoices();
                    const preferredVoice = voices.find(voice => voice.name.includes("Google US English") || voice.name.includes("Samantha"));
                    if(preferredVoice) utterance.voice = preferredVoice;
                    utterance.rate = 1;
                    utterance.pitch = 1;
                    synthesis.speak(utterance);
                    isVoiceMode = false;
                }
            }, 1000 + Math.random() * 500);
        }

        function addUserMessage(text) {
            const div = document.createElement('div');
            div.className = 'flex justify-end message-anim';
            div.innerHTML = `
                <div class="max-w-[85%] bg-purple-600 text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-none shadow-sm font-light">
                    ${text}
                </div>
            `;
            chatMessages.appendChild(div);
            scrollToBottom();
        }

        function addBotMessage(text) {
            const div = document.createElement('div');
            div.className = 'flex justify-start gap-2 message-anim';
            div.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shrink-0 mt-1">
                    <iconify-icon icon="solar:smart-speaker-minimalistic-linear" class="text-white text-xs"></iconify-icon>
                </div>
                <div class="max-w-[85%] bg-zinc-800 text-zinc-200 text-sm px-4 py-2.5 rounded-2xl rounded-tl-none border border-white/5 font-light leading-relaxed">
                    ${text}
                </div>
            `;
            chatMessages.appendChild(div);
            scrollToBottom();
        }

        function showTypingIndicator() {
            const div = document.createElement('div');
            div.id = 'typing-indicator';
            div.className = 'flex justify-start gap-2 message-anim';
            div.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shrink-0 mt-1">
                    <iconify-icon icon="solar:smart-speaker-minimalistic-linear" class="text-white text-xs"></iconify-icon>
                </div>
                <div class="bg-zinc-800 px-4 py-3 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-1">
                    <span class="w-1.5 h-1.5 bg-zinc-500 rounded-full typing-dot"></span>
                    <span class="w-1.5 h-1.5 bg-zinc-500 rounded-full typing-dot"></span>
                    <span class="w-1.5 h-1.5 bg-zinc-500 rounded-full typing-dot"></span>
                </div>
            `;
            chatMessages.appendChild(div);
            scrollToBottom();
        }

        function removeTypingIndicator() {
            const indicator = document.getElementById('typing-indicator');
            if (indicator) indicator.remove();
        }

        function scrollToBottom() {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function generateAIResponse(input) {
            const text = input.toLowerCase();
            const fallbackText = "For Inquiries and Concerns, <br>Contact Sanjo@aibizcentre.com<br>or Call +1 (814) 305 - 8452";

            if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
                return "Hello! I can help answer questions about our AI voice automation, pricing, or help you book a demo. What would you like to know?";
            }
            if (text.includes('service') || text.includes('do you do') || text.includes('offer') || text.includes('feature')) {
                return "We provide intelligent AI voice agents and chatbots that can handle customer calls, qualify leads, schedule appointments, and answer FAQs 24/7 across phone, WhatsApp, and your website. It's like having a super-employee who never sleeps!";
            }
            if (text.includes('price') || text.includes('cost') || text.includes('expensive') || text.includes('quote')) {
                return "Our pricing is tailored to your business needs and call volume. While I can't give a specific quote right now, our solutions typically reduce support costs significantly. I'd recommend booking a demo to get a custom proposal.";
            }
            if (text.includes('book') || text.includes('demo') || text.includes('schedule') || text.includes('appointment')) {
                return "That's a great idea! You can book a live demo directly through the 'Book Demo' button at the top of this page, or I can have a team member contact you. Which do you prefer?";
            }
            if (text.includes('how') || text.includes('work') || text.includes('setup') || text.includes('install')) {
                return "It's simple: We connect our AI to your phone system or website. It listens to customers, understands their intent, and takes action—like booking a meeting in your calendar or answering a question from your knowledge base. Setup is fast and requires no coding on your part.";
            }
            if (text.includes('my name is') || text.includes('i am') || text.includes('call me')) {
                return "Nice to meet you! I've noted that down. If you'd like to proceed with a consultation, please use the 'Book Demo' button to select a time that works for you.";
            }
            return fallbackText;
        }

        // ===== ElevenLabs Voice Agent Launcher =====
        function openVoiceAgent() {
            const container = document.getElementById("elevenlabs-container");
            container.style.display = "block";

            // Wait for widget to load then open it
            setTimeout(() => {
                const widget = document.querySelector("elevenlabs-convai");
                if(widget && widget.shadowRoot){
                    const btn = widget.shadowRoot.querySelector("button");
                    if(btn) btn.click();
                }
            }, 800);
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
      


<audio id="demo-audio" preload="auto" style={{display: 'none'}}>
<source src="https://ik.imagekit.io/di83vobex/Dental%20AI%20Agent%20Voice%20Recording.mp3" type="audio/mpeg"/>
        Your browser does not support the audio element.
    </audio>

<nav className="fixed top-0 w-full z-40 glass-strong border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer" onclick="window.scrollTo(0,0)">

<div className="relative w-9 h-9 flex items-center justify-center">
<div className="absolute inset-0 rounded-full ring-gradient opacity-100 p-[2px]">
<div className="w-full h-full bg-black rounded-full"></div>
</div>
<div className="absolute inset-[4px] bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl rounded-tr-md flex items-center justify-center">
<span className="font-bold text-white text-sm tracking-tight pb-0.5">ai</span>
</div>
</div>
<div className="flex flex-col justify-center leading-none">
<span className="font-semibold tracking-tight text-white text-lg">
                        AI <span className="logo-gradient-text">Centre</span>
</span>
</div>
</div>
<div className="hidden md:flex gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#integrations">Integrations</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="https://calendly.com/sanjo-aibizcentre/30min" target="_blank">
                Book Demo
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] mesh-gradient opacity-70 pointer-events-none"></div>
<div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute top-40 left-0 w-72 h-72 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-purple-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                Now handling live calls 24/7
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 pb-2">
                Your Business Should Never <br className="hidden md:block"/>
                Miss a Conversation Again.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                Intelligent AI voice agents and chatbots that answer, qualify, book, and sell — across calls, WhatsApp, website, and CRM — around the clock.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-all flex items-center justify-center gap-2" onclick="openVoiceAgent()">
                    Try The AI Agent
                </button>
<button className="w-full md:w-auto px-8 py-3 border border-zinc-800 bg-zinc-900/50 text-white rounded-full font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group audio-btn" data-type="hero" onclick="playSample(this)">
<iconify-icon className="text-purple-400 icon-play" icon="solar:play-circle-linear" width="20"></iconify-icon>
<iconify-icon className="text-red-400 icon-stop hidden" icon="solar:stop-circle-linear" width="20"></iconify-icon>

<div className="hidden items-center gap-[2px] h-3 icon-visualizer">
<div className="w-0.5 bg-purple-400 playing-bar" style={{animationDelay: '0s'}}></div>
<div className="w-0.5 bg-purple-400 playing-bar" style={{animationDelay: '0.1s'}}></div>
<div className="w-0.5 bg-purple-400 playing-bar" style={{animationDelay: '0.2s'}}></div>
<div className="w-0.5 bg-purple-400 playing-bar" style={{animationDelay: '0.3s'}}></div>
</div>
<span className="btn-text">See It Handle a Real Call</span>
<span className="group-hover:translate-x-1 transition-transform arrow">→</span>
</button>
</div>
<div className="mt-16 text-xs text-zinc-500 font-medium tracking-wide uppercase">
                Trusted by forward-thinking teams
            </div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                        Businesses Don’t Lose Customers to Competitors. <br/>
<span className="text-zinc-500">They Lose Them to Silence.</span>
</h2>
<p className="text-zinc-400 font-light leading-relaxed mb-8">
                        Customers expect immediate answers. But teams sleep, get busy, or scale slower than demand. Every missed call is a lost customer. Every delayed reply reduces trust.
                    </p>
<div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
<p className="text-red-200 text-sm font-medium mb-4">The Cost of Delay</p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-zinc-300 font-light">
<iconify-icon className="text-red-400 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                                Missed calls outside business hours
                            </div>
<div className="flex items-center gap-3 text-zinc-300 font-light">
<iconify-icon className="text-red-400 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                                Slow lead follow-ups
                            </div>
<div className="flex items-center gap-3 text-zinc-300 font-light">
<iconify-icon className="text-red-400 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                                Overloaded support staff
                            </div>
<div className="flex items-center gap-3 text-zinc-300 font-light">
<iconify-icon className="text-red-400 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                                High hiring &amp; training costs
                            </div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full"></div>
<div className="glass p-8 rounded-3xl relative">
<div className="flex items-start gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:user-linear"></iconify-icon>
</div>
<div className="bg-zinc-800/50 p-4 rounded-2xl rounded-tl-none border border-white/5 text-sm text-zinc-300">
                                Hi, I'd like to book an appointment for tomorrow, are you open?
                            </div>
</div>
<div className="flex items-start gap-4 flex-row-reverse mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
<iconify-icon className="text-white" icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<div className="bg-purple-600/10 p-4 rounded-2xl rounded-tr-none border border-purple-500/20 text-sm text-purple-100">
                                Absolutely! We have openings at 10:00 AM and 2:00 PM tomorrow. Which works best for you?
                            </div>
</div>
<div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
<div className="text-xs text-zinc-500">Response time</div>
<div className="text-xs text-cyan-400 font-medium flex items-center gap-1">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
                                0.8 seconds
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">An AI That Handles Real Conversations</h2>
<p className="text-zinc-400 text-lg">Not scripts. Not menus. Real dialogue.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition duration-300">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Instant Answer</h3>
<p className="text-zinc-400 font-light text-sm">Answers incoming calls instantly, ensuring no customer ever hears a busy signal.</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition duration-300">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Auto-Booking</h3>
<p className="text-zinc-400 font-light text-sm">Checks availability in real-time and books appointments directly to your calendar.</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition duration-300">
<iconify-icon icon="solar:chat-round-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Lead Qualification</h3>
<p className="text-zinc-400 font-light text-sm">Asks the right questions to qualify prospects before your sales team spends a minute.</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition duration-300">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Omnichannel</h3>
<p className="text-zinc-400 font-light text-sm">Seamless context switching between phone, WhatsApp, SMS, and website chat.</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition duration-300">
<iconify-icon icon="solar:question-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Support &amp; FAQs</h3>
<p className="text-zinc-400 font-light text-sm">Handles repetitive questions about hours, pricing, and services instantly.</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition duration-300">
<iconify-icon icon="solar:bell-bing-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Follow Ups</h3>
<p className="text-zinc-400 font-light text-sm">Automatically calls leads within seconds of inquiry submission or sends reminders.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-zinc-900/30" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-16 text-center">From Inquiry to Conversion — Automatically</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

<div className="relative pt-8 md:pt-16">
<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black border border-zinc-700 items-center justify-center z-10 text-[10px] text-zinc-500">1</div>
<div className="bg-black/40 border border-white/5 p-6 rounded-2xl h-full">
<div className="text-purple-400 mb-4 text-sm font-medium tracking-wide uppercase">Capture</div>
<p className="text-zinc-300 font-light text-sm leading-relaxed">Customer messages, chats, or calls your business at any time of day.</p>
</div>
</div>

<div className="relative pt-8 md:pt-16">
<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black border border-zinc-700 items-center justify-center z-10 text-[10px] text-zinc-500">2</div>
<div className="bg-black/40 border border-white/5 p-6 rounded-2xl h-full">
<div className="text-purple-400 mb-4 text-sm font-medium tracking-wide uppercase">Understand</div>
<p className="text-zinc-300 font-light text-sm leading-relaxed">AI detects intent, sentiment, and gathers relevant details naturally.</p>
</div>
</div>

<div className="relative pt-8 md:pt-16">
<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black border border-zinc-700 items-center justify-center z-10 text-[10px] text-zinc-500">3</div>
<div className="bg-black/40 border border-white/5 p-6 rounded-2xl h-full">
<div className="text-purple-400 mb-4 text-sm font-medium tracking-wide uppercase">Act</div>
<p className="text-zinc-300 font-light text-sm leading-relaxed">Books appointments, updates CRM, or transfers to your team instantly.</p>
</div>
</div>

<div className="relative pt-8 md:pt-16">
<div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black border border-zinc-700 items-center justify-center z-10 text-[10px] text-zinc-500">4</div>
<div className="bg-black/40 border border-white/5 p-6 rounded-2xl h-full">
<div className="text-purple-400 mb-4 text-sm font-medium tracking-wide uppercase">Learn</div>
<p className="text-zinc-300 font-light text-sm leading-relaxed">Analytics reveal what customers ask and where revenue is won.</p>
</div>
</div>
</div>
<p className="text-center text-zinc-500 mt-12 text-sm">No flows to manage. No scripts to update. The AI adapts with your business.</p>
</div>
</section>

<section className="py-24" id="integrations">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Works With The Tools <br/> You Already Use</h2>
<p className="text-zinc-400 font-light leading-relaxed mb-8">
                    Your AI agent syncs directly with your existing stack. No migration required — just automation added.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-purple-400" icon="solar:check-circle-linear"></iconify-icon> CRM Systems (Salesforce, HubSpot)
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-purple-400" icon="solar:check-circle-linear"></iconify-icon> Calendars (Google, Outlook)
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-purple-400" icon="solar:check-circle-linear"></iconify-icon> Communication (WhatsApp, Slack)
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-purple-400" icon="solar:check-circle-linear"></iconify-icon> Internal Databases
                    </li>
</ul>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<div className="glass p-6 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition opacity-80 hover:opacity-100 cursor-default">
<iconify-icon icon="logos:hubspot" width="30"></iconify-icon>
</div>
<div className="glass p-6 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition opacity-80 hover:opacity-100 cursor-default">
<iconify-icon icon="logos:google-calendar" width="30"></iconify-icon>
</div>
<div className="glass p-6 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition opacity-80 hover:opacity-100 cursor-default">
<iconify-icon icon="logos:whatsapp-icon" width="30"></iconify-icon>
</div>
<div className="glass p-6 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition opacity-80 hover:opacity-100 cursor-default">
<iconify-icon icon="logos:salesforce" width="30"></iconify-icon>
</div>
<div className="glass p-6 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition opacity-80 hover:opacity-100 cursor-default">
<iconify-icon icon="logos:zapier-icon" width="30"></iconify-icon>
</div>
<div className="glass p-6 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition opacity-80 hover:opacity-100 cursor-default">
<iconify-icon icon="logos:shopify" width="30"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-12">

<div className="lg:col-span-2">
<h2 className="text-2xl font-medium text-white mb-8">Built For Real Businesses</h2>
<div className="grid md:grid-cols-2 gap-4">
<div className="p-5 rounded-xl bg-black border border-white/5">
<iconify-icon className="text-purple-400 text-2xl mb-3" icon="solar:home-smile-linear"></iconify-icon>
<h4 className="text-white font-medium mb-1">Real Estate</h4>
<p className="text-xs text-zinc-400 leading-relaxed">Qualify buyers, schedule property visits, follow up instantly.</p>
</div>
<div className="p-5 rounded-xl bg-black border border-white/5">
<iconify-icon className="text-purple-400 text-2xl mb-3" icon="solar:medical-kit-linear"></iconify-icon>
<h4 className="text-white font-medium mb-1">Healthcare</h4>
<p className="text-xs text-zinc-400 leading-relaxed">Book appointments, answer patient questions, reduce front-desk load.</p>
</div>
<div className="p-5 rounded-xl bg-black border border-white/5">
<iconify-icon className="text-purple-400 text-2xl mb-3" icon="solar:shop-linear"></iconify-icon>
<h4 className="text-white font-medium mb-1">E-commerce</h4>
<p className="text-xs text-zinc-400 leading-relaxed">Order tracking, FAQs, and abandoned cart follow-ups.</p>
</div>
<div className="p-5 rounded-xl bg-black border border-white/5">
<iconify-icon className="text-purple-400 text-2xl mb-3" icon="solar:rocket-linear"></iconify-icon>
<h4 className="text-white font-medium mb-1">SaaS &amp; Agencies</h4>
<p className="text-xs text-zinc-400 leading-relaxed">Pre-qualify leads and route high-value prospects to sales.</p>
</div>
</div>
</div>

<div className="lg:col-span-1">
<h2 className="text-2xl font-medium text-white mb-8">Instant Impact</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-5 h-5 rounded-full border border-purple-500/50 bg-purple-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-purple-400 text-xs" icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">Under 2s Response</h4>
<p className="text-xs text-zinc-400 mt-1">Converts leads before competitors reply.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-5 h-5 rounded-full border border-purple-500/50 bg-purple-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-purple-400 text-xs" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">Scales Instantly</h4>
<p className="text-xs text-zinc-400 mt-1">Handle 1 or 1,000 calls simultaneously.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-5 h-5 rounded-full border border-purple-500/50 bg-purple-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-purple-400 text-xs" icon="solar:wallet-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">Reduce Costs</h4>
<p className="text-xs text-zinc-400 mt-1">Lower hiring and training overhead.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Know What Your Customers Actually Want</h2>
<p className="text-zinc-400 font-light leading-relaxed mb-8">
                        Every conversation becomes data. See trends, objections, missed opportunities, and high-intent signals — automatically. Your AI doesn’t just talk. It teaches your business how to grow.
                    </p>
</div>
<div className="lg:w-1/2 w-full">

<div className="glass rounded-xl p-6 border border-white/10">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-white">Conversation Insights</span>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span className="w-2 h-2 rounded-full bg-yellow-500"></span>
<span className="w-2 h-2 rounded-full bg-green-500"></span>
</div>
</div>
<div className="space-y-4">

<div>
<div className="flex justify-between text-xs text-zinc-400 mb-1">
<span>Appointments Booked</span>
<span>+27%</span>
</div>
<div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[70%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs text-zinc-400 mb-1">
<span>Support Resolution</span>
<span>92%</span>
</div>
<div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500 w-[92%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs text-zinc-400 mb-1">
<span>Avg. Handle Time</span>
<span>1m 45s</span>
</div>
<div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[45%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-sm font-medium uppercase tracking-widest text-zinc-500 mb-12">Trusted by Growing Businesses</h2>
<div className="grid md:grid-cols-3 gap-8 mb-16">
<div className="p-6">
<div className="flex text-purple-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-white text-lg font-light mb-4">"We stopped missing leads overnight. The AI sounds incredibly human."</p>
<p className="text-zinc-500 text-sm">— TechFlow Systems</p>
</div>
<div className="p-6 border-x border-white/5">
<div className="flex text-purple-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-white text-lg font-light mb-4">"Bookings increased by 30% without hiring a single new staff member."</p>
<p className="text-zinc-500 text-sm">— Apex Dental</p>
</div>
<div className="p-6">
<div className="flex text-purple-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-white text-lg font-light mb-4">"Customers actually think it’s a real receptionist. It's seamless."</p>
<p className="text-zinc-500 text-sm">— Urban Services</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/5 pt-12 text-center">
<div>
<div className="text-4xl font-medium text-white mb-1">+38%</div>
<div className="text-sm text-zinc-500">Faster Lead Response</div>
</div>
<div>
<div className="text-4xl font-medium text-white mb-1">+27%</div>
<div className="text-sm text-zinc-500">Booking Increase</div>
</div>
<div className="col-span-2 md:col-span-1">
<div className="text-4xl font-medium text-white mb-1">−60%</div>
<div className="text-sm text-zinc-500">Support Workload</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative text-center overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">Turn Conversations <br/> Into Customers</h2>
<p className="text-lg text-zinc-400 font-light mb-10 max-w-xl mx-auto">
                You don’t need more staff. You need faster conversations. Activate an AI that answers every call, message, and opportunity — instantly.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-all w-full sm:w-auto inline-flex items-center justify-center" href="https://calendly.com/sanjo-aibizcentre/30min" target="_blank">
                    Schedule Your Demo
                </a>
<button className="px-8 py-3 bg-transparent text-white border border-white/10 rounded-full font-medium hover:bg-white/5 transition-all w-full sm:w-auto flex items-center justify-center gap-2 audio-btn" data-type="cta" onclick="playSample(this)">
<span className="btn-text">Listen to Sample</span>
<iconify-icon className="icon-play" icon="solar:play-circle-linear"></iconify-icon>
<iconify-icon className="icon-stop hidden text-red-400" icon="solar:stop-circle-linear"></iconify-icon>

<div className="hidden items-center gap-[2px] h-3 icon-visualizer">
<div className="w-0.5 bg-white playing-bar" style={{animationDelay: '0s'}}></div>
<div className="w-0.5 bg-white playing-bar" style={{animationDelay: '0.1s'}}></div>
<div className="w-0.5 bg-white playing-bar" style={{animationDelay: '0.2s'}}></div>
<div className="w-0.5 bg-white playing-bar" style={{animationDelay: '0.3s'}}></div>
</div>
</button>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-purple-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xs">
                    ai
                </div>
<span className="text-sm text-zinc-500">© 2026 AI Centre.</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<button className="hover:text-white transition cursor-pointer" id="privacy-link">Privacy</button>
<button className="hover:text-white transition cursor-pointer" id="terms-link">Terms</button>
<a className="hover:text-white transition" href="https://twitter.com" target="_blank">Twitter</a>
</div>
</div>
</footer>


<button className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform duration-300 group" onclick="openVoiceAgent()">
<iconify-icon className="group-hover:hidden" icon="solar:chat-round-dots-linear" width="26"></iconify-icon>
<iconify-icon className="hidden group-hover:block" icon="solar:alt-arrow-up-linear" width="26"></iconify-icon>

<span className="absolute -z-10 w-full h-full rounded-full bg-white/30 animate-ping opacity-75"></span>
</button>

<div className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[380px] h-[550px] rounded-2xl glass-chat flex flex-col shadow-2xl transition-all duration-300 origin-bottom-right transform scale-95 opacity-0 pointer-events-none translate-y-4" id="ai-chat-widget">

<div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-zinc-900/40 rounded-t-2xl">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
<iconify-icon icon="solar:smart-speaker-minimalistic-linear" width="20"></iconify-icon>
</div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-zinc-900 rounded-full"></div>
</div>
<div>
<h4 className="text-white text-sm font-medium leading-tight">AI Assistant</h4>
<span className="text-[10px] text-zinc-400 font-medium tracking-wide uppercase">Voice Active</span>
</div>
</div>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="toggleChat()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar bg-black/20" id="chat-messages">

</div>

<div className="p-4 border-t border-white/10 bg-zinc-900/40 rounded-b-2xl relative">

<div className="absolute inset-0 bg-zinc-900/95 backdrop-blur-md z-10 flex flex-col items-center justify-center gap-4 transition-opacity duration-300 opacity-0 pointer-events-none" id="voice-overlay">
<div className="w-16 h-16 rounded-full border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-purple-400 mic-pulse">
<iconify-icon icon="solar:microphone-3-linear" width="32"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 font-light">Listening...</p>
<button className="text-xs text-red-400 hover:text-red-300 mt-2 underline" onclick="stopListening()">Cancel</button>
</div>
<form className="relative flex items-center gap-2" id="chat-form" onsubmit="handleChatSubmit(event)">
<input className="w-full bg-zinc-900/80 border border-white/10 text-zinc-300 text-sm rounded-full px-4 py-3 focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-zinc-600" id="user-input" placeholder="Ask about services..." type="text"/>
<button className="p-2.5 text-zinc-400 hover:text-purple-400 transition-colors rounded-full bg-white/5 border border-white/5 hover:bg-white/10" onclick="startListening()" title="Use Voice" type="button">
<iconify-icon icon="solar:microphone-3-linear" width="20"></iconify-icon>
</button>
<button className="p-2.5 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10" type="submit">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
<div className="text-center mt-2">
<p className="text-[10px] text-zinc-600">AI can make mistakes. Check important info.</p>
</div>
</div>
</div>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[60] hidden" id="legal-modal" role="dialog">

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" id="modal-backdrop"></div>
<div className="fixed inset-0 z-10 overflow-y-auto">
<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl glass-strong text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-3xl border border-white/10">
<div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-zinc-900/50">
<h3 className="text-lg font-medium leading-6 text-white" id="modal-title">Legal Documents</h3>
<button className="text-zinc-400 hover:text-white transition" id="close-modal">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="px-6 py-6 max-h-[70vh] overflow-y-auto custom-scrollbar bg-zinc-950/80">
<div className="flex gap-4 mb-6 border-b border-white/5">
<button className="pb-2 text-sm font-medium border-b-2 border-purple-500 text-white transition-colors" id="tab-privacy">Privacy Policy</button>
<button className="pb-2 text-sm font-medium border-b-2 border-transparent text-zinc-500 hover:text-zinc-300 transition-colors" id="tab-terms">Terms of Service</button>
</div>
<div className="space-y-6 text-sm text-zinc-400 leading-relaxed font-light" id="content-privacy">
<p className="text-zinc-500 text-xs">Last updated: February 16, 2026</p>
<div><h3 className="text-white font-medium mb-1">1. Introduction</h3><p>Welcome to AI Centre. We are committed to protecting your privacy...</p></div>
</div>
<div className="hidden space-y-6 text-sm text-zinc-400 leading-relaxed font-light" id="content-terms">
<p className="text-zinc-500 text-xs">Last updated: February 16, 2026</p>
<div><h3 className="text-white font-medium mb-1">1. Acceptance</h3><p>By using AI Centre, you agree to these Terms...</p></div>
</div>
</div>
</div>
</div>
</div>
</div>


<div id="elevenlabs-container" style={{display: 'none'}}>
<elevenlabs-convai agent-id="agent_7301keegbpezfpkb79tpeqkf5qfw"></elevenlabs-convai>
</div>

    </>
  );
}
