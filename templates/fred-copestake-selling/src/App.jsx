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



    document.addEventListener('DOMContentLoaded', () => {
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: "#38bdf8" },
                shape: { type: "circle" },
                opacity: { value: 0.2, random: false },
                size: { value: 2, random: true },
                line_linked: { enable: true, distance: 150, color: "#38bdf8", opacity: 0.1, width: 1 },
                move: { enable: true, speed: 1, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: { detect_on: "canvas", events: { onhover: { enable: false }, onclick: { enable: false }, resize: true } },
            retina_detect: true
        });
    });



        // FAQ Toggle Logic
        function toggleFaq(button) {
            const item = button.parentElement;
            const content = item.querySelector('.faq-content');
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        }

        // --- SCRIPT DATA FOR COLLABORATIVE SELLING DEMO ---
        const scriptData = [
            { 
                speaker: 'ai', 
                name: 'Fred', 
                text: "Hi David, thanks for making time today. To ensure this conversation is valuable for you, what's the primary focus you'd like to cover?",
                action: null
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "Well, we're seeing our sales cycles stretch out, and buyers seem more resistant than usual.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Fred', 
                text: "That's a common challenge right now. When you say resistant, what does that actually look like in your team's day-to-day interactions?",
                action: 'capture_intent'
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "They get defensive early on. It feels like a battle to even present our solution. We're trying harder to persuade, but it's backfiring.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Fred', 
                text: "I understand. It sounds like the traditional persuasion methods might be creating friction instead of opening dialogue.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Fred', 
                text: "Have you considered how shifting the initial approach from 'pitching' to 'partnering' might lower that defense?",
                action: 'capture_pref'
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "We talk about being partners, but frankly, our process is still built around overcoming objections and closing.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Fred', 
                text: "That honesty is a great starting point. In Collaborative Selling, we work on understanding the buyer's world deeply before offering any solutions.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Fred', 
                text: "If your team felt confident asking better questions rather than memorising scripts, how would that impact morale?",
                action: 'search'
            },
             { 
                speaker: 'user', 
                name: 'David', 
                text: "It would probably relieve a lot of pressure. They hate feeling pushy.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Fred', 
                text: "Exactly. By removing the pressure to persuade, you allow trust to accelerate the decision naturally.",
                action: 'success'
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "That makes a lot of sense. How do we actually start implementing that shift?",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Fred', 
                text: "It starts with reframing how we view the conversation itself. I'd be happy to walk you through a few frameworks we use.",
                action: 'info_rate'
            }
        ];

        // UI References
        const container = document.getElementById('scriptContainer');
        const aiOrb = document.getElementById('aiOrb');
        const ring1 = document.getElementById('ring1');
        const ring2 = document.getElementById('ring2');
        const userWave = document.getElementById('userWave');
        const speakerNameDisplay = document.getElementById('currentSpeakerName');
        const progressBar = document.getElementById('progressBar');
        const pauseBtn = document.getElementById('pauseBtn');
        const playOverlay = document.getElementById('playOverlay');
        const playBtnText = document.getElementById('playBtnText');

        // State
        let currentIndex = 0;
        let isPlaying = false;
        let isPaused = false;
        let playbackRate = 1.0;
        const synth = window.speechSynthesis;
        let voices = [];

        function loadVoices() {
            voices = synth.getVoices();
        }
        
        loadVoices();
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = loadVoices;
        }

        function toggleSpeed() {
            const checkbox = document.getElementById('speedToggle');
            playbackRate = checkbox.checked ? 1.25 : 1.0;
        }

        function renderScript() {
            container.innerHTML = `<div class="text-center py-4"><span class="text-xs uppercase tracking-widest text-cyan-600 font-medium">Session Initiated</span></div>`;
            
            scriptData.forEach((line, index) => {
                const isAI = line.speaker === 'ai';
                const avatarColor = isAI ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)]' : 'bg-slate-800 border border-slate-700 text-slate-400';
                const textColor = isAI ? 'text-cyan-200' : 'text-slate-400';
                const label = isAI ? 'FC' : 'DM';
                
                let badge = '';
                if(line.action === 'capture_intent') badge = `<span class="ml-2 text-xs text-cyan-300 bg-cyan-900/40 border border-cyan-500/30 px-1.5 py-0.5 rounded uppercase font-medium tracking-wider shadow-[0_0_5px_rgba(6,182,212,0.2)]">Active Listening</span>`;
                if(line.action === 'capture_pref') badge = `<span class="ml-2 text-xs text-purple-300 bg-purple-900/40 border border-purple-500/30 px-1.5 py-0.5 rounded uppercase font-medium tracking-wider">Reframing</span>`;
                if(line.action === 'search') badge = `<span class="ml-2 text-xs text-cyan-400 bg-cyan-950 border border-cyan-500/50 px-1.5 py-0.5 rounded uppercase font-medium tracking-wider animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.4)]">Deep Questioning</span>`;
                if(line.action === 'success') badge = `<span class="ml-2 text-xs text-emerald-300 bg-emerald-900/40 border border-emerald-500/30 px-1.5 py-0.5 rounded uppercase font-medium tracking-wider shadow-[0_0_8px_rgba(16,185,129,0.3)]">Alignment Achieved</span>`;
                if(line.action === 'info_rate') badge = `<span class="ml-2 text-xs text-amber-300 bg-amber-900/40 border border-amber-500/30 px-1.5 py-0.5 rounded uppercase font-medium tracking-wider">Providing Value</span>`;

                const html = `
                    <div id="line-${index}" class="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5">
                        <div class="mt-1 flex-shrink-0">
                            <div class="w-6 h-6 rounded ${avatarColor} flex items-center justify-center">
                                <span class="text-xs font-medium">${label}</span>
                            </div>
                        </div>
                        <div class="space-y-1 w-full">
                            <div class="flex items-center flex-wrap">
                                <span class="text-xs font-medium ${textColor} tracking-tight mr-2">${line.name}</span>
                                ${badge}
                            </div>
                            <p class="text-sm text-slate-300 leading-relaxed font-light">${line.text}</p>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', html);
            });
            
            container.insertAdjacentHTML('beforeend', `<div class="text-center py-6"><span class="text-xs text-slate-700 font-light">SESSION ENDED</span></div>`);
        }

        function startDemo() {
            if(!voices.length) voices = synth.getVoices();
            synth.cancel();

            renderScript();
            
            playOverlay.classList.add('opacity-0', 'pointer-events-none');
            pauseBtn.disabled = false;
            isPlaying = true;
            currentIndex = 0;
            speakLine(currentIndex);
        }

        function speakLine(index) {
            if(index >= scriptData.length) {
                stopDemo();
                return;
            }
            if(isPaused) return;

            const line = scriptData[index];
            updateUI(index);

            const utterance = new SpeechSynthesisUtterance(line.text);
            
            let voice = null;
            if(line.speaker === 'ai') {
                voice = voices.find(v => v.name.includes('Google UK English Male')) ||
                        voices.find(v => v.lang === 'en-GB' && v.name.includes('Male')) ||
                        voices.find(v => v.lang === 'en-US' && v.name.includes('Male'));
                utterance.pitch = 0.9;
                utterance.rate = 1.0 * playbackRate; 
            } else {
                voice = voices.find(v => (v.name.includes('David') || v.name.includes('Mark')) && v.lang.includes('en-US')) || 
                        voices.find(v => v.lang === 'en-US' && v.name.includes('Male')) || 
                        voices.find(v => v.lang === 'en-US'); 
                utterance.pitch = 1.0; 
                utterance.rate = 1.05 * playbackRate;
            }
            
            if(voice) utterance.voice = voice;

            utterance.onend = () => {
                let gapDelay = 800; 
                const currentText = line.text;
                
                if(currentText.endsWith('?')) gapDelay += 600;
                if(line.action === 'search') gapDelay = 1500;

                setTimeout(() => {
                    if (isPlaying && !isPaused) {
                        currentIndex++;
                        speakLine(currentIndex);
                    }
                }, gapDelay / playbackRate);
            };

            utterance.onerror = () => {
                setTimeout(() => { currentIndex++; speakLine(currentIndex); }, 500);
            };

            synth.speak(utterance);
        }

        function updateUI(index) {
            const line = scriptData[index];
            
            const el = document.getElementById(`line-${index}`);
            document.querySelectorAll('.transcript-active').forEach(e => {
                e.classList.remove('transcript-active');
                e.classList.add('opacity-30');
            });

            if(el) {
                el.classList.add('transcript-active');
                el.classList.remove('opacity-30');
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            speakerNameDisplay.textContent = line.name + (line.speaker === 'ai' ? ' (Consultant)' : ' (Leader)');
            
            if(line.speaker === 'ai') {
                aiOrb.classList.add('orb-active');
                ring1.classList.add('orb-ring');
                ring2.classList.add('orb-ring');
                ring2.style.animationDelay = '0.5s';
                userWave.style.opacity = '0.2';
            } else {
                aiOrb.classList.remove('orb-active');
                ring1.classList.remove('orb-ring');
                ring2.classList.remove('orb-ring');
                userWave.style.opacity = '1';
            }

            const percent = ((index + 1) / scriptData.length) * 100;
            progressBar.style.width = `${percent}%`;
        }

        function stopDemo() {
            synth.cancel();
            isPlaying = false;
            playOverlay.classList.remove('opacity-0', 'pointer-events-none');
            playBtnText.textContent = "Replay Simulation";
            aiOrb.classList.remove('orb-active');
            ring1.classList.remove('orb-ring');
            ring2.classList.remove('orb-ring');
        }

        function togglePause() {
            if(synth.paused) {
                synth.resume();
                isPaused = false;
                pauseBtn.innerHTML = '<iconify-icon icon="solar:pause-linear" stroke-width="1.5" class="text-base"></iconify-icon>';
            } else {
                synth.pause();
                isPaused = true;
                pauseBtn.innerHTML = '<iconify-icon icon="solar:play-linear" stroke-width="1.5" class="text-base"></iconify-icon>';
                aiOrb.classList.remove('orb-active');
            }
        }
        
        renderScript();
    
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
      

<div className="fixed top-0 w-full h-screen -z-10" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute inset-0 -z-10" id="particles-js">


<canvas className="particles-js-canvas-el" height="826" style={{width: '100%', height: '100%'}} width="1421"></canvas></div>
</div>

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
<div className="glass-panel flex gap-12 w-full max-w-5xl rounded-full mr-auto ml-auto pt-3 pr-6 pb-3 pl-6 gap-x-12 gap-y-12 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)]">
<iconify-icon className="text-white text-lg" icon="solar:handshake-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white tracking-tight">Fred Copestake</span>
</div>
<div className="flex items-center gap-4">
<button className="hover:brightness-110 text-xs transition-all uppercase cursor-pointer font-medium text-white tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full pt-2 pr-6 pb-2 pl-6 shadow-[0_0_20px_rgba(6,182,212,0.3)]" role="button">Book a Conversation</button>
</div>
</div>
</nav>
<main className="relative w-full z-10 pt-32 pb-20">

<section className="flex flex-col pr-6 pl-6 items-center">

<div className="text-center max-w-5xl mx-auto mb-10 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-xs uppercase font-medium text-cyan-300 tracking-widest">Ethical Sales Practice</span>
</div>
<h1 className="leading-[1.1] glow-text md:text-5xl text-4xl font-medium text-white tracking-tight mb-6">Sell Through Collaboration, <br/> <span className="text-gradient-cyan">Not Pressure</span></h1>
<p className="leading-relaxed text-balance md:text-lg text-base font-light text-slate-400 max-w-2xl mr-auto ml-auto">Fred Copestake helps sales professionals build trust-based conversations that create stronger, longer-term client relationships.</p>
</div>

<div className="w-full max-w-4xl mx-auto mb-12 relative z-20">
<h3 className="text-xl md:text-2xl font-medium text-white mb-3 text-center tracking-tight">Watch Fred Explain Collaborative Selling</h3>
<p className="text-sm font-light text-slate-400 text-center max-w-2xl mr-auto mb-8 ml-auto">In this short video, Fred explains why traditional selling approaches damage trust and how collaborative conversations create sustainable success.</p>
<div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-cyan-500/20 bg-[#0B1021] shadow-2xl group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-[#0B1021]/80 mix-blend-overlay"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-cyan-500/20 group-hover:bg-cyan-500/40 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-500/50 transition-all group-hover:scale-110">
<iconify-icon className="text-white text-4xl ml-1" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="mb-16 flex items-center justify-center gap-4 relative z-20">
<button className="hover:brightness-110 transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-sm font-medium text-white bg-gradient-to-r from-cyan-600 to-blue-600 h-11 rounded-full pr-8 pl-8 shadow-[0_0_25px_rgba(6,182,212,0.4)]" role="button">Book a Conversation</button>
<button className="hover:text-white transition-all flex hover:bg-slate-800 hover:border-slate-600 text-sm font-normal text-slate-300 bg-slate-900/50 h-11 border-slate-700 border rounded-full pr-8 pl-8 gap-x-2 gap-y-2 items-center">
                    Explore the Approach
                </button>
</div>

<div className="w-full max-w-6xl mx-auto relative z-20 mb-6 group">
<div className="absolute -inset-1 bg-gradient-to-b from-cyan-500/20 to-blue-600/20 rounded-[2rem] blur-xl opacity-50 transition duration-700"></div>
</div>

<div className="w-full max-w-6xl mx-auto mb-32 px-2 relative z-20">
<div className="rounded-xl border border-blue-500/10 bg-blue-950/10 p-6 md:p-8 flex flex-col items-center text-center gap-4 backdrop-blur-sm">
<h4 className="text-xl md:text-2xl font-medium text-white mb-2 tracking-tight">The Friction in Modern Sales</h4>
<p className="md:text-base leading-relaxed text-sm font-light text-slate-400 max-w-3xl">Traditional sales methods focus heavily on persuasion, while buyers inherently focus on protection. This tension creates resistance. Collaborative Selling replaces pressure with partnership — shifting your sales approach from a transactional battle to a relationship-building dialogue.</p>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Why Fred Copestake?</h2>
<p className="text-base font-light text-slate-400">Guiding professionals toward authentic, ethical, and effective sales practices.</p>
</div>
<div className="relative h-[500px] w-full max-w-4xl mx-auto flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" viewbox="0 0 800 500">

<path d="M400,250 C400,200 400,150 400,120" stroke="rgba(34,211,238,0.1)" strokeWidth="1.5"></path>

<path d="M400,250 C400,300 400,350 400,380" stroke="rgba(34,211,238,0.1)" strokeWidth="1.5"></path>

<path d="M400,250 C300,250 250,250 200,250" stroke="rgba(34,211,238,0.1)" strokeWidth="1.5"></path>
<path className="animate-pulse" d="M400,250 C300,250 250,250 200,250" stroke="rgba(34,211,238,0.4)" stroke-dasharray="10 10" strokeWidth="1.5"></path>

<path d="M400,250 C500,250 550,250 600,250" stroke="rgba(34,211,238,0.1)" strokeWidth="1.5"></path>
</svg>
<div className="relative z-10 w-48 h-64 flex flex-col items-center justify-center animate-float">
<div className="w-full h-full bg-gradient-to-b from-[#0f172a] to-[#020617] rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex items-center justify-center p-6 relative backdrop-blur-md">
<iconify-icon className="text-cyan-400 text-6xl drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute bottom-6 w-8 h-8 bg-cyan-500 rounded-full blur-[20px]"></div>
</div>
</div>

<div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 text-center group">
<div className="w-16 h-16 rounded-full bg-[#0B1021] border border-cyan-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:scale-110 transition-transform duration-300 mb-3">
<iconify-icon className="text-cyan-400 text-2xl" icon="solar:user-speak-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-sm font-medium text-white mb-1">Led by Fred Copestake</div>
<div className="text-xs font-light text-slate-400">Author &amp; Advocate for Ethical Selling</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 text-center group">
<div className="text-sm font-medium text-white mb-1">Long-Term Perspective</div>
<div className="text-xs font-light text-slate-400 mb-3">Sales success built on trust &amp; reputation</div>
<div className="w-16 h-16 rounded-full bg-[#0B1021] border border-cyan-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-cyan-400 text-2xl" icon="solar:routing-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="absolute top-1/2 -translate-y-1/2 left-[5%] w-48 text-center group">
<div className="w-16 h-16 rounded-full bg-[#0B1021] border border-blue-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(59,130,246,0.2)] mb-3 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-sm font-medium text-white mb-1">Human-Centred Approach</div>
<div className="text-xs font-light text-slate-400">Selling that respects buyer intelligence</div>
</div>

<div className="absolute top-1/2 -translate-y-1/2 right-[5%] w-48 text-center group">
<div className="w-16 h-16 rounded-full bg-[#0B1021] border border-blue-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(59,130,246,0.2)] mb-3 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-sm font-medium text-white mb-1">Conversation Over Tactics</div>
<div className="text-xs font-light text-slate-400">Focus on authentic dialogue, not scripts</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-cyan-900/20">
<div className="mb-16 text-center">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-4">What is Collaborative Selling?</h2>
<p className="text-slate-400 font-light max-w-2xl mr-auto ml-auto">A framework designed to shift the dynamic from adversarial to cooperative.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-7 feature-card rounded-2xl border border-white/5 p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
<div className="w-40 h-40 bg-cyan-500 rounded-full blur-[80px]"></div>
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="w-12 h-12 rounded-full border border-cyan-500/30 bg-cyan-950/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:handshake-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Trust-Based Conversations</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed max-w-md">Focus entirely on understanding mutual value rather than relying on high-pressure persuasion tactics. Trust accelerates decisions.</p>
</div>
</div>
</div>

<div className="md:col-span-5 feature-card rounded-2xl border border-white/5 p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-950/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
<iconify-icon className="text-blue-400 text-xl" icon="solar:mind-layer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-white mb-2">Buyer-Centric Thinking</h3>
<p className="leading-relaxed font-light text-sm text-slate-400">Commit to understanding the customer's world deeply before ever offering a solution or pitching a product.</p>
</div>
</div>

<div className="md:col-span-5 feature-card rounded-2xl border border-white/5 p-8 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-purple-500/30 bg-purple-950/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
<iconify-icon className="text-purple-400 text-xl" icon="solar:routing-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-white mb-2">Long-Term Relationships</h3>
<p className="leading-relaxed font-light text-sm text-slate-400">Prioritise sustainable partnerships over short-term wins. A collaborative approach naturally extends the lifetime value of every relationship.</p>
</div>
</div>

<div className="md:col-span-7 feature-card rounded-2xl border border-white/5 p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/5 to-transparent"></div>
<div className="relative z-10 flex items-center justify-between gap-6">
<div className="max-w-md">
<div className="w-12 h-12 rounded-full border border-indigo-500/30 bg-indigo-950/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
<iconify-icon className="text-indigo-400 text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-white mb-2">Ethical Sales Practice</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed">Build credibility through transparency and uncompromised integrity. Doing the right thing for the client is always the right thing for the business.</p>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="hover:text-white transition-all inline-flex hover:bg-slate-800 hover:border-slate-600 text-sm font-normal text-slate-300 bg-slate-900/50 h-11 border-slate-700 border rounded-full pr-8 pl-8 gap-x-2 gap-y-2 items-center">
                    Schedule a Discussion
                </button>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto border-t border-cyan-900/20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl font-medium text-white tracking-tight mb-8">About Fred Copestake</h2>
<div className="space-y-4 text-slate-400 font-light text-base leading-relaxed">
<p>Hi, I’m Fred Copestake.</p>
<p>Through Collaborative Selling, I work with sales professionals and organisations to build a more ethical, trust-based approach to business development.</p>
<p>My focus is simple: help you sell in a way that strengthens relationships rather than strains them.</p>
</div>
</div>
<div className="glass-panel p-8 md:p-10 rounded-3xl border border-cyan-500/20 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
<div className="w-40 h-40 bg-blue-500 rounded-full blur-[80px]"></div>
</div>
<h3 className="text-2xl tracking-tight font-medium text-white mb-8">The Transformation</h3>
<div className="flex gap-5 mb-8 opacity-60">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-1 border border-slate-700">
<iconify-icon className="text-slate-400 text-lg" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<div className="text-white text-sm font-medium mb-2 uppercase tracking-wide">Before</div>
<ul className="text-slate-400 text-sm font-light space-y-2">
<li>• Pressure-driven conversations.</li>
<li>• Immediate buyer resistance.</li>
<li>• Strictly short-term focus.</li>
</ul>
</div>
</div>
<div className="flex gap-5">
<div className="w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center flex-shrink-0 mt-1 border border-cyan-500/30">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<div className="text-cyan-300 text-sm font-medium mb-2 uppercase tracking-wide">After</div>
<ul className="text-slate-300 text-sm font-light space-y-2">
<li>• Open, authentic dialogue.</li>
<li className="">• Stronger foundational trust.</li>
<li>• Long-term, lucrative partnerships.</li>
</ul>
</div>
</div>
<div className="mt-10 pt-8 border-t border-white/5">
<button className="w-full hover:brightness-110 transition-all text-sm font-medium text-white bg-gradient-to-r from-cyan-600 to-blue-600 h-12 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)]">Start the Conversation</button>
</div>
</div>
</div>
</section>

<section className="z-10 border-cyan-900/10 border-t pt-24 pb-24 relative">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-900/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Frequently Asked Questions</h2>
</div>
<div className="space-y-3">

<div className="faq-item group border border-white/5 bg-[#0B1021]/30 hover:bg-[#0B1021]/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/20 backdrop-blur-sm">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq(this)">
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-slate-200 group-hover:text-cyan-100 transition-colors">What is Collaborative Selling?</span>
</div>
<iconify-icon className="faq-icon text-slate-500 group-hover:text-cyan-400 text-base" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="faq-content">
<div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed font-light">
                                An approach focused entirely on building trust, partnership, and long-term client relationships rather than forcing short-term transactions.
                            </div>
</div>
</div>

<div className="faq-item group border border-white/5 bg-[#0B1021]/30 hover:bg-[#0B1021]/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/20 backdrop-blur-sm">
<button className="flex focus:outline-none text-left w-full pt-5 pr-6 pb-5 pl-6 items-center justify-between" onclick="toggleFaq(this)">
<div className="flex items-center gap-3">
<span className="group-hover:text-cyan-100 transition-colors text-sm font-medium text-slate-200">Is this suitable for experienced sales professionals?</span>
</div>
<iconify-icon className="faq-icon text-slate-500 group-hover:text-cyan-400 text-base" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="faq-content">
<div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed font-light">
                                Yes. It strengthens how conversations are handled at every level of experience, helping veterans refine their approach to modern, sophisticated buyers.
                            </div>
</div>
</div>

<div className="faq-item group border border-white/5 bg-[#0B1021]/30 hover:bg-[#0B1021]/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/20 backdrop-blur-sm">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq(this)">
<div className="flex items-center gap-3">
<span className="group-hover:text-cyan-100 transition-colors text-sm font-medium text-slate-200">Does this replace traditional sales training?</span>
</div>
<iconify-icon className="faq-icon text-slate-500 group-hover:text-cyan-400 text-base" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="faq-content">
<div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed font-light">
                                It reframes selling as collaboration rather than persuasion. It builds upon foundational skills but aligns them with a more ethical and effective mindset.
                            </div>
</div>
</div>

<div className="faq-item group border border-white/5 bg-[#0B1021]/30 hover:bg-[#0B1021]/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/20 backdrop-blur-sm">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq(this)">
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-slate-200 group-hover:text-cyan-100 transition-colors">Who is this designed for?</span>
</div>
<iconify-icon className="faq-icon text-slate-500 group-hover:text-cyan-400 text-base" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="faq-content">
<div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed font-light">
                                Sales professionals and organisations committed to ethical, relationship-led selling who want to stand out from aggressive competitors.
                            </div>
</div>
</div>

<div className="faq-item group border border-white/5 bg-[#0B1021]/30 hover:bg-[#0B1021]/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/20 backdrop-blur-sm">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq(this)">
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-slate-200 group-hover:text-cyan-100 transition-colors">How do we get started?</span>
</div>
<iconify-icon className="faq-icon text-slate-500 group-hover:text-cyan-400 text-base" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="faq-content">
<div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed font-light">
                                Book a conversation with Fred below to explore fit and discuss how these principles can be applied to your specific challenges.
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 pb-24 pt-12 text-center border-t border-cyan-900/20">
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-900/50 to-blue-900/50 flex items-center justify-center border border-cyan-500/30 mb-8 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative">
<iconify-icon className="text-cyan-300 text-3xl" icon="solar:calendar-mark-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Build Trust Through Better Conversations</h2>
<p className="leading-relaxed text-base font-light text-slate-400 max-w-2xl mr-auto mb-12 ml-auto">Schedule a conversation with Fred Copestake to explore how Collaborative Selling can transform your sales approach.</p>

<div className="w-full max-w-3xl h-[600px] rounded-2xl border border-white/5 bg-[#0B1021]/50 overflow-hidden flex flex-col items-center justify-center text-slate-500 mb-10 relative">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-transparent"></div>
<iconify-icon className="text-4xl mb-4 text-slate-600 relative z-10" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-light relative z-10">[Calendly Embed Component]</p>
</div>
<p className="text-sm font-medium text-cyan-400 tracking-wide uppercase">Collaboration creates lasting success.</p>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#02040a] py-12 px-6">
<div className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto ml-auto items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:handshake-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Fred Copestake</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-slate-500 font-light">
<span>©2025 FRED COPESTAKE. ALL RIGHTS RESERVED.</span>
<div className="flex gap-6">
<a className="hover:text-cyan-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Terms</a>
</div>
</div>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-cyan-400 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="text-slate-600 hover:text-cyan-400 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
