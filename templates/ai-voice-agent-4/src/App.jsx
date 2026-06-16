import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
        // Initialize ParticlesJS
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });

        const sections = document.querySelectorAll('.section');
        const dots = document.querySelectorAll('.progress-dot');
        const magneticElements = document.querySelectorAll('.magnetic');
        let currentIndex = 0;
        let isScrolling = false;
        let touchStartY = 0;
        
        // Initialize
        updateActiveDot(currentIndex);
        
        // Magnetic effect
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0px, 0px)';
            });
        });
        
        // Scroll event
        window.addEventListener('wheel', (e) => {
            if (isScrolling) return;
            
            isScrolling = true;
            if (e.deltaY > 0) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Touch events
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (isScrolling) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            isScrolling = true;
            if (diff > 50) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else if (diff < -50) {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Click on dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                currentIndex = index;
                changeSection(currentIndex);
            });
        });
        
        function changeSection(index) {
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            sections[index].classList.add('active');
            updateActiveDot(index);
            
            const reveals = sections[index].querySelectorAll('.reveal');
            reveals.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, i * 150);
            });
            
            sections.forEach((section, i) => {
                if (i !== index) {
                    const otherReveals = section.querySelectorAll('.reveal');
                    otherReveals.forEach(el => {
                        el.classList.remove('active');
                    });
                }
            });
        }
        
        function updateActiveDot(index) {
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[index].classList.add('active');
        }
    });



        lucide.createIcons();

        // FAQ Toggle Logic
        function toggleFaq(button) {
            const item = button.parentElement;
            const content = item.querySelector('.faq-content');
            const isActive = item.classList.contains('active');

            // Close all other FAQs
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        }

        // --- SCRIPT DATA FOR REAL ESTATE DEMO ---
        const scriptData = [
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Hey there! Thanks for calling Goodwill Realty. I'm Racheal. How are you doing today?",
                action: null
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "Hi... I'm doing good, thanks.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Awesome! So, are you looking to buy a house?",
                action: 'capture_intent'
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "Yes, I am.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Perfect! I'd love to help you find your perfect home. Can I start by getting your full name?",
                action: null
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "Sure, yeah. It's David... David Martinez.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "David Martinez... okay, perfect. Just wanna make sure I heard that right, David Martinez?",
                action: 'capture_name'
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "Yep, that's right.",
                action: null
            },
             { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Great! And David, what's the best number to reach you at?",
                action: null
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "Uh, it's 602-555-3847.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Perfect, let me just confirm that. 602-555-3847?",
                action: 'capture_phone'
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "Yeah, that's it.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Awesome! Okay, I've got all that updated in our system. So tell me, what area are you looking to buy in?",
                action: null
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "Well, I'm actually looking in Phoenix... or maybe the surrounding areas. I'm pretty flexible.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Oh nice! Phoenix is such a great market right now. Are you thinking more like Scottsdale, Tempe, or staying closer to central Phoenix?",
                action: null
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "Um, I think Scottsdale would be ideal, but... you know, honestly if there's something good in Tempe too, I'd definitely check it out.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Yeah, totally makes sense! Both are great options. And what's your budget looking like?",
                action: 'capture_pref'
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "I'm looking at around... probably $450,000 to maybe $500,000. Something in that range.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Perfect! That's a really solid range for that area. And just so I can narrow it down, how many bedrooms are you looking for?",
                action: 'capture_budget'
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "Uh, at least three. Three or four would be great.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Got it, three or four bedrooms. Okay, perfect! Let me just pull up what we've got available right now in Scottsdale and Tempe in your price range...",
                action: 'search'
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Alright! I've got some really great options here. First one, there's a gorgeous 4-bedroom, 2.5-bath in North Scottsdale for $485,000. It's got a completely remodeled kitchen and a really nice backyard with a covered patio.",
                action: 'present_listing'
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Then we've also got a 3-bedroom, 2-bath in Tempe for $465,000. This one's in a really cool neighborhood, close to everything. And if you wanna go a little higher, there's an amazing 4-bedroom in Old Town Scottsdale for $495,000 with a pool.",
                action: null
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "Wow, okay... those all sound really good. Um, what are mortgage rates like right now?",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Yeah, good question! So right now, for the Phoenix area, we're seeing rates around 6.7% to 7% for a 30-year fixed mortgage. With your budget, you're probably looking at somewhere around $2,800 to $3,100 a month.",
                action: 'info_rate'
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "Okay, yeah... that's actually pretty much what I was thinking. That first one you mentioned... the one in North Scottsdale with the remodeled kitchen? That one sounds really interesting.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Oh my gosh, right?! That kitchen is seriously stunning. And the location's great too. I'd love to get you in to see it! Let me just check when I've got showings available...",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Okay, so... I can do Wednesday at 2 or 5:30, Thursday at 11 or 3, or if the weekend works better, I've got Saturday at 10 AM or 1 PM. What works best for you?",
                action: 'schedule_ask'
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "Hmm, let me think... Saturday at 1 would actually be perfect for me.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Saturday at 1? Done! I've got you down for Saturday, December 21st at 1 PM to see the property at 8342 East Mountain View Road in North Scottsdale.",
                action: 'success'
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "Sounds great!",
                action: null
            },
             { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Awesome! So you're gonna get a confirmation email sent to you within the next few minutes with all the details. Is there anything else I can do for you today, David?",
                action: 'email_sent'
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "No, I think... I think that covers it. This was really helpful.",
                action: null
            },
            { 
                speaker: 'ai', 
                name: 'Racheal', 
                text: "Aw, I'm so glad! I'm really excited to show you this home on Saturday. Have a great rest of your day!",
                action: null
            },
            { 
                speaker: 'user', 
                name: 'David', 
                text: "Alright. Bye!",
                action: null
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
            container.innerHTML = `<div class="text-center py-4"><span class="text-[10px] uppercase tracking-widest text-cyan-600 font-mono">Incoming Call: +1 (602) 555-3847</span></div>`;
            
            scriptData.forEach((line, index) => {
                const isAI = line.speaker === 'ai';
                const avatarColor = isAI ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)]' : 'bg-slate-800 border border-slate-700 text-slate-400';
                const textColor = isAI ? 'text-cyan-200' : 'text-slate-400';
                const label = isAI ? 'AI' : 'US';
                
                // Badges logic (Styled Neon)
                let badge = '';
                if(line.action === 'capture_intent') badge = `<span class="ml-2 text-[9px] text-cyan-300 bg-cyan-900/40 border border-cyan-500/30 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider shadow-[0_0_5px_rgba(6,182,212,0.2)]">Intent: Buying</span>`;
                if(line.action === 'capture_name') badge = `<span class="ml-2 text-[9px] text-green-300 bg-green-900/40 border border-green-500/30 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider shadow-[0_0_5px_rgba(34,197,94,0.2)]">Contact Created</span>`;
                if(line.action === 'capture_phone') badge = `<span class="ml-2 text-[9px] text-green-300 bg-green-900/40 border border-green-500/30 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Verified</span>`;
                if(line.action === 'capture_pref') badge = `<span class="ml-2 text-[9px] text-purple-300 bg-purple-900/40 border border-purple-500/30 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Pref: Scottsdale</span>`;
                if(line.action === 'capture_budget') badge = `<span class="ml-2 text-[9px] text-blue-300 bg-blue-900/40 border border-blue-500/30 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Budget: $450k+</span>`;
                if(line.action === 'search') badge = `<span class="ml-2 text-[9px] text-cyan-400 bg-cyan-950 border border-cyan-500/50 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.4)]">Querying MLS...</span>`;
                if(line.action === 'info_rate') badge = `<span class="ml-2 text-[9px] text-amber-300 bg-amber-900/40 border border-amber-500/30 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Rates: 6.7%</span>`;
                if(line.action === 'success') badge = `<span class="ml-2 text-[9px] text-emerald-300 bg-emerald-900/40 border border-emerald-500/30 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider shadow-[0_0_8px_rgba(16,185,129,0.3)]">Calendar Synced</span>`;

                let extraContent = '';
                if(line.action === 'present_listing') {
                    extraContent = `
                        <div class="mt-3 bg-[#080c19] border border-cyan-500/20 rounded p-3 flex items-start gap-3 animate-fade-in shadow-[0_0_15px_rgba(6,182,212,0.05)]">
                            <div class="w-10 h-10 rounded bg-slate-900 flex items-center justify-center border border-white/5">
                                <i data-lucide="home" class="w-5 h-5 text-cyan-500"></i>
                            </div>
                            <div>
                                <div class="text-white text-[11px] font-bold">North Scottsdale - 4 Bed</div>
                                <div class="text-slate-500 text-[10px] mt-0.5 flex gap-2 font-mono">
                                    <span class="text-cyan-400">$485,000</span> &bull; <span>4 Bed, 2.5 Bath</span>
                                </div>
                            </div>
                        </div>`;
                }

                if(line.action === 'success') {
                     extraContent = `
                        <div class="mt-3 bg-[#080c19] border border-emerald-500/20 rounded p-3 flex items-center gap-3 animate-fade-in shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                            <div class="w-8 h-8 rounded bg-emerald-900/30 flex items-center justify-center">
                                <i data-lucide="calendar-check-2" class="w-4 h-4 text-emerald-400"></i>
                            </div>
                            <div>
                                <div class="text-white text-[11px] font-bold">Showing Confirmed</div>
                                <div class="text-emerald-400 text-[10px] font-mono">Sat, Dec 21 • 1:00 PM</div>
                            </div>
                        </div>`;
                }

                const html = `
                    <div id="line-${index}" class="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5">
                        <div class="mt-1 flex-shrink-0">
                            <div class="w-6 h-6 rounded ${avatarColor} flex items-center justify-center">
                                <span class="text-[9px] font-bold">${label}</span>
                            </div>
                        </div>
                        <div class="space-y-1 w-full">
                            <div class="flex items-center flex-wrap">
                                <span class="text-[11px] font-bold ${textColor} tracking-tight mr-2">${line.name}</span>
                                ${badge}
                            </div>
                            <p class="text-[13px] text-slate-300 leading-relaxed font-light">${line.text}</p>
                            ${extraContent}
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', html);
                lucide.createIcons();
            });
            
            container.insertAdjacentHTML('beforeend', `<div class="text-center py-6"><span class="text-[9px] text-slate-700 font-mono">SESSION ENDED</span></div>`);
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
            
            // --- Advanced Voice Tuning for Natural Tone ---
            let voice = null;
            
            if(line.speaker === 'ai') {
                // Try to find a high quality "Sales" voice (Google US or Microsoft Zira/Eva)
                voice = voices.find(v => v.name.includes('Google US English')) ||
                        voices.find(v => v.name.includes('Samantha')) || 
                        voices.find(v => v.lang === 'en-US' && v.name.includes('Natural')) ||
                        voices.find(v => v.lang === 'en-US');
                
                // Slight random variation to sound less robotic
                const pitchVar = (Math.random() * 0.1) - 0.05; 
                utterance.pitch = 1.1 + pitchVar; // Slightly higher pitch for energy
                utterance.rate = 1.05 * playbackRate; // Professional, slightly fast
            } else {
                // User voice: US English Male, Casual
                // Strategy: Find common high-quality US male voices (David/Mark on Windows, Alex on Mac)
                voice = voices.find(v => (v.name.includes('David') || v.name.includes('Mark')) && v.lang.includes('en-US')) || 
                        voices.find(v => v.name.includes('Google US English') && v.name.includes('Male')) || 
                        voices.find(v => v.name === 'Alex') || 
                        voices.find(v => v.lang === 'en-US' && v.name.includes('Male')) || 
                        voices.find(v => v.lang === 'en-US'); 
                
                // Tune to be casual/not robotic
                utterance.pitch = 0.95; // Slightly deeper, but natural
                utterance.rate = 1.0 * playbackRate; // Standard conversational speed
            }
            
            if(voice) utterance.voice = voice;

            // Smart Latency Engine (Calculating the pause AFTER speaking)
            utterance.onend = () => {
                // Base gap between turns
                let gapDelay = 600; 

                // Context Awareness
                const currentText = line.text;
                
                // 1. Questions get longer pauses (waiting for answer)
                if(currentText.endsWith('?')) gapDelay += 400;

                // 2. Short affirmations get shorter pauses
                if(currentText.length < 15) gapDelay -= 200;

                // 3. Operational Delays (Simulating system work)
                if(line.action === 'search') gapDelay = 2200; // "Querying MLS..." takes time
                if(line.action === 'schedule_ask') gapDelay = 1200; // Thinking about dates
                if(line.action === 'email_sent') gapDelay = 1000;

                // 4. "Thinking" simulation for User response
                if (scriptData[index + 1] && scriptData[index + 1].speaker === 'user') {
                     // Add slight hesitancy for user
                     if(scriptData[index + 1].text.startsWith('Um') || scriptData[index + 1].text.startsWith('Hmm')) {
                         gapDelay += 500;
                     }
                }

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
            
            // Scroll & Highlight
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

            speakerNameDisplay.textContent = line.name + (line.speaker === 'ai' ? ' (Agent)' : ' (Lead)');
            
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
                pauseBtn.innerHTML = '<i data-lucide="pause" class="w-4 h-4 fill-current"></i>';
            } else {
                synth.pause();
                isPaused = true;
                pauseBtn.innerHTML = '<i data-lucide="play" class="w-4 h-4 fill-current"></i>';
                aiOrb.classList.remove('orb-active');
                }
            lucide.createIcons();
        }
        
        renderScript();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute inset-0 -z-10" id="particles-js">


</div></div>

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
<div className="glass-panel flex gap-12 w-full max-w-5xl rounded-full mr-auto ml-auto pt-3 pr-6 pb-3 pl-6 gap-x-12 gap-y-12 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)]">
<svg className="lucide lucide-bot w-5 h-5 text-white" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<span className="text-sm font-bold text-white tracking-tight">Automize.Bot</span>
</div>
<div className="flex items-center gap-4">
<button className="hover:brightness-110 text-[12px] transition-all uppercase cursor-pointer font-semibold text-white tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full pt-2 pr-6 pb-2 pl-6 shadow-[0_0_20px_rgba(6,182,212,0.3)]" onclick="window.location.href='https://tidycal.com/automize'" role="button">Book a Demo</button>
</div>
</div>
</nav>
<main className="relative w-full z-10 pt-32 pb-20">

<section className="flex flex-col pr-6 pl-6 items-center">

<div className="text-center max-w-5xl mx-auto mb-16 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 mb-8 backdrop-blur-sm animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-[10px] uppercase font-semibold text-cyan-300 tracking-widest">Generative Sales Engine </span>
</div>
<h1 className="leading-[1.1] glow-text md:text-5xl text-5xl font-semibold text-white tracking-tight mb-6">Supercharge Sales &amp; Ops <br/> <span className="text-gradient-cyan">With AI Voice Bots</span></h1>
<p className="leading-relaxed text-balance md:text-lg text-base font-normal text-slate-400 max-w-2xl mr-auto ml-auto">Deploy autonomous voice agents that analyze, qualify, and book meetings or close deals 24/7. Maximize conversion accuracy and reduce human burnout.</p>
<div className="mt-10 flex items-center justify-center gap-4">
<button className="hover:brightness-110 transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 h-11 rounded-full pr-8 pl-8 shadow-[0_0_25px_rgba(6,182,212,0.4)]" onclick="window.location.href='https://tidycal.com/automize'" role="button">Start Here</button>
<button className="hover:text-white transition-all flex hover:bg-slate-800 hover:border-slate-600 text-sm font-medium text-slate-300 bg-slate-900/50 h-11 border-slate-700 border rounded-full pr-8 pl-8 gap-x-2 gap-y-2 items-center">
                        Discover More
                    </button>
</div>

<div className="mt-8 flex justify-center gap-3">
<div className="px-3 py-1 rounded border border-cyan-500/20 bg-cyan-950/30 text-[10px] text-cyan-400 font-mono">Secured API</div>
<div className="px-3 py-1 rounded border border-cyan-500/20 bg-cyan-950/30 text-[10px] text-cyan-400 font-mono">24/7 Monitoring</div>
<div className="px-3 py-1 rounded border border-cyan-500/20 bg-cyan-950/30 text-[10px] text-cyan-400 font-mono">10K+ Agents</div>
</div>
</div>

<div className="w-full max-w-6xl mx-auto relative z-20 mb-6 group">

<div className="absolute -inset-1 bg-gradient-to-b from-cyan-500/20 to-blue-600/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-70 transition duration-700"></div>

<div className="w-full rounded-[20px] overflow-hidden flex flex-col md:flex-row h-[640px] relative border border-cyan-500/20 bg-[#0B1021] shadow-2xl backdrop-blur-xl">

<div className="w-full md:w-7/12 border-b md:border-b-0 md:border-r border-cyan-500/10 bg-[#080c19] relative flex flex-col">

<div className="absolute top-0 left-0 right-0 h-16 border-b border-cyan-500/10 bg-[#0B1021]/80 flex justify-between items-center px-6 z-20">
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,1)] animate-pulse"></div>
<div>
<div className="text-white text-xs font-bold tracking-wider uppercase text-cyan-100">Live Agent: Racheal</div>
<div className="text-cyan-500/60 text-[10px] font-mono tracking-widest">NEURAL ENGINE V4.2</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-cyan-950/30 border border-cyan-500/20">
<svg className="lucide lucide-activity w-3 h-3 text-cyan-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-[10px] font-mono text-cyan-300">LATENCY: 14ms</span>
</div>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 grid-bg opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#080c19] via-transparent to-[#080c19]"></div>

<div className="relative w-48 h-48 flex items-center justify-center" id="aiOrb">

<div className="absolute inset-0 rounded-full border border-cyan-500/30 scale-110 opacity-0 transition-all duration-500" id="ring1"></div>
<div className="absolute inset-0 rounded-full border border-blue-500/20 scale-150 opacity-0 transition-all duration-500" id="ring2"></div>
<div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/10 animate-[spin_10s_linear_infinite]"></div>

<div className="w-28 h-28 rounded-full bg-[#050914] shadow-[0_0_60px_rgba(6,182,212,0.4)] z-10 flex items-center justify-center relative overflow-hidden border border-cyan-400/30 backdrop-blur-md">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-blue-600/10"></div>
<svg className="lucide lucide-cpu w-10 h-10 text-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] z-20" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
</div>

<div className="h-16 w-[1px] bg-gradient-to-b from-cyan-500/50 to-transparent my-6"></div>

<div className="h-8 flex items-center gap-1.5 opacity-40" id="userWave">
<div className="wave-bar h-2 w-1 bg-cyan-300 rounded-full"></div>
<div className="wave-bar h-4 w-1 bg-cyan-300 rounded-full"></div>
<div className="wave-bar h-3 w-1 bg-cyan-300 rounded-full"></div>
<div className="wave-bar h-5 w-1 bg-cyan-300 rounded-full"></div>
<div className="wave-bar h-3 w-1 bg-cyan-300 rounded-full"></div>
</div>

<div className="absolute inset-0 bg-[#030610]/80 backdrop-blur-[6px] z-30 flex flex-col items-center justify-center transition-opacity duration-500" id="playOverlay">
<div className="relative group cursor-pointer" onclick="startDemo()">
<div className="absolute -inset-4 bg-cyan-500/30 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
<button className="relative w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-all duration-300 text-white border-2 border-white/20">
<svg className="lucide lucide-play fill-white w-[32px] h-[32px] ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<p className="mt-8 text-[12px] font-bold text-white tracking-[0.2em] uppercase opacity-90" id="playBtnText">Initialize Simulation</p>
<p className="text-[10px] text-cyan-400 mt-2 font-mono">AUDIO ENABLED • HD VOICE</p>
</div>
</div>

<div className="px-6 py-5 border-t border-cyan-500/10 bg-[#050914] relative z-20">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-cyan-950/30 hover:bg-cyan-900/40 flex items-center justify-center transition-colors text-cyan-300 disabled:opacity-50 border border-cyan-500/20" disabled="" id="pauseBtn" onclick="togglePause()">
<svg className="lucide lucide-pause w-4 h-4 fill-current" data-lucide="pause" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="1" width="5" x="14" y="3"></rect><rect height="18" rx="1" width="5" x="5" y="3"></rect></svg>
</button>
<div className="flex flex-col">
<span className="text-[9px] text-cyan-500/70 uppercase tracking-widest font-bold mb-0.5">Active Channel</span>
<span className="text-sm text-white font-medium tracking-wide" id="currentSpeakerName">Waiting for connection...</span>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-[10px] text-slate-500 font-mono">SPEED</span>
<div className="relative inline-block w-9 h-5">
<input className="toggle-checkbox absolute block w-3 h-3 m-1 rounded-full bg-white border-none appearance-none cursor-pointer transition-all duration-300 left-0 z-10" id="speedToggle" onchange="toggleSpeed()" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-full rounded-full bg-slate-800 cursor-pointer border border-slate-700" htmlFor="speedToggle"></label>
</div>
</div>
<div className="h-1 w-32 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400 w-0 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]" id="progressBar"></div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-5/12 bg-[#050914] flex flex-col relative overflow-hidden border-l border-cyan-500/10">

<div className="h-16 border-b border-cyan-500/10 flex items-center px-4 bg-[#0B1021]/50">
<button className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-cyan-300 border-b-2 border-cyan-500">Live Transcript</button>
<button className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-cyan-300 transition-colors">CRM Sync</button>
<button className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-cyan-300 transition-colors">Sentiment</button>
</div>

<div className="relative flex-1 overflow-hidden bg-[#030610]">
<div className="absolute inset-0 overflow-y-auto p-6 space-y-5 scroller scroll-smooth pb-20 fade-mask" id="scriptContainer"><div className="text-center py-4"><span className="text-[10px] uppercase tracking-widest text-cyan-600 font-mono">Incoming Call: +1 (602) 555-3847</span></div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-0">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Hey there! Thanks for calling Goodwill Realty. I'm Racheal. How are you doing today?</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-1">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Hi... I'm doing good, thanks.</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-2">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
<span className="ml-2 text-[9px] text-cyan-300 bg-cyan-900/40 border border-cyan-500/30 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider shadow-[0_0_5px_rgba(6,182,212,0.2)]">Intent: Buying</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Awesome! So, are you looking to buy a house?</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-3">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Yes, I am.</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-4">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Perfect! I'd love to help you find your perfect home. Can I start by getting your full name?</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-5">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Sure, yeah. It's David... David Martinez.</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-6">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
<span className="ml-2 text-[9px] text-green-300 bg-green-900/40 border border-green-500/30 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider shadow-[0_0_5px_rgba(34,197,94,0.2)]">Contact Created</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">David Martinez... okay, perfect. Just wanna make sure I heard that right, David Martinez?</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-7">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Yep, that's right.</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-8">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Great! And David, what's the best number to reach you at?</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-9">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Uh, it's 602-555-3847.</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-10">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
<span className="ml-2 text-[9px] text-green-300 bg-green-900/40 border border-green-500/30 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Verified</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Perfect, let me just confirm that. 602-555-3847?</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-11">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Yeah, that's it.</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-12">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Awesome! Okay, I've got all that updated in our system. So tell me, what area are you looking to buy in?</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-13">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Well, I'm actually looking in Phoenix... or maybe the surrounding areas. I'm pretty flexible.</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-14">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Oh nice! Phoenix is such a great market right now. Are you thinking more like Scottsdale, Tempe, or staying closer to central Phoenix?</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-15">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Um, I think Scottsdale would be ideal, but... you know, honestly if there's something good in Tempe too, I'd definitely check it out.</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-16">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
<span className="ml-2 text-[9px] text-purple-300 bg-purple-900/40 border border-purple-500/30 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Pref: Scottsdale</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Yeah, totally makes sense! Both are great options. And what's your budget looking like?</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-17">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">I'm looking at around... probably $450,000 to maybe $500,000. Something in that range.</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-18">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
<span className="ml-2 text-[9px] text-blue-300 bg-blue-900/40 border border-blue-500/30 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Budget: $450k+</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Perfect! That's a really solid range for that area. And just so I can narrow it down, how many bedrooms are you looking for?</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-19">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Uh, at least three. Three or four would be great.</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-20">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
<span className="ml-2 text-[9px] text-cyan-400 bg-cyan-950 border border-cyan-500/50 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.4)]">Querying MLS...</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Got it, three or four bedrooms. Okay, perfect! Let me just pull up what we've got available right now in Scottsdale and Tempe in your price range...</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-21">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Alright! I've got some really great options here. First one, there's a gorgeous 4-bedroom, 2.5-bath in North Scottsdale for $485,000. It's got a completely remodeled kitchen and a really nice backyard with a covered patio.</p>
<div className="mt-3 bg-[#080c19] border border-cyan-500/20 rounded p-3 flex items-start gap-3 animate-fade-in shadow-[0_0_15px_rgba(6,182,212,0.05)]">
<div className="w-10 h-10 rounded bg-slate-900 flex items-center justify-center border border-white/5">
<svg className="lucide lucide-home w-5 h-5 text-cyan-500" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div>
<div className="text-white text-[11px] font-bold">North Scottsdale - 4 Bed</div>
<div className="text-slate-500 text-[10px] mt-0.5 flex gap-2 font-mono">
<span className="text-cyan-400">$485,000</span> • <span>4 Bed, 2.5 Bath</span>
</div>
</div>
</div>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-22">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Then we've also got a 3-bedroom, 2-bath in Tempe for $465,000. This one's in a really cool neighborhood, close to everything. And if you wanna go a little higher, there's an amazing 4-bedroom in Old Town Scottsdale for $495,000 with a pool.</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-23">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Wow, okay... those all sound really good. Um, what are mortgage rates like right now?</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-24">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
<span className="ml-2 text-[9px] text-amber-300 bg-amber-900/40 border border-amber-500/30 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Rates: 6.7%</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Yeah, good question! So right now, for the Phoenix area, we're seeing rates around 6.7% to 7% for a 30-year fixed mortgage. With your budget, you're probably looking at somewhere around $2,800 to $3,100 a month.</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-25">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Okay, yeah... that's actually pretty much what I was thinking. That first one you mentioned... the one in North Scottsdale with the remodeled kitchen? That one sounds really interesting.</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-26">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Oh my gosh, right?! That kitchen is seriously stunning. And the location's great too. I'd love to get you in to see it! Let me just check when I've got showings available...</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-27">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Okay, so... I can do Wednesday at 2 or 5:30, Thursday at 11 or 3, or if the weekend works better, I've got Saturday at 10 AM or 1 PM. What works best for you?</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-28">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Hmm, let me think... Saturday at 1 would actually be perfect for me.</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-29">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
<span className="ml-2 text-[9px] text-emerald-300 bg-emerald-900/40 border border-emerald-500/30 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider shadow-[0_0_8px_rgba(16,185,129,0.3)]">Calendar Synced</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Saturday at 1? Done! I've got you down for Saturday, December 21st at 1 PM to see the property at 8342 East Mountain View Road in North Scottsdale.</p>
<div className="mt-3 bg-[#080c19] border border-emerald-500/20 rounded p-3 flex items-center gap-3 animate-fade-in shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<div className="w-8 h-8 rounded bg-emerald-900/30 flex items-center justify-center">
<svg className="lucide lucide-calendar-check-2 w-4 h-4 text-emerald-400" data-lucide="calendar-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg>
</div>
<div>
<div className="text-white text-[11px] font-bold">Showing Confirmed</div>
<div className="text-emerald-400 text-[10px] font-mono">Sat, Dec 21 • 1:00 PM</div>
</div>
</div>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-30">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Sounds great!</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-31">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Awesome! So you're gonna get a confirmation email sent to you within the next few minutes with all the details. Is there anything else I can do for you today, David?</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-32">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">No, I think... I think that covers it. This was really helpful.</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-33">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
<span className="text-[9px] font-bold">AI</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-cyan-200 tracking-tight mr-2">Racheal</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Aw, I'm so glad! I'm really excited to show you this home on Saturday. Have a great rest of your day!</p>
</div>
</div>
<div className="flex gap-4 group transition-all duration-300 p-2 rounded-lg opacity-30 hover:opacity-60 border border-transparent hover:border-white/5" id="line-34">
<div className="mt-1 flex-shrink-0">
<div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center">
<span className="text-[9px] font-bold">US</span>
</div>
</div>
<div className="space-y-1 w-full">
<div className="flex items-center flex-wrap">
<span className="text-[11px] font-bold text-slate-400 tracking-tight mr-2">David</span>
</div>
<p className="text-[13px] text-slate-300 leading-relaxed font-light">Alright. Bye!</p>
</div>
</div>
<div className="text-center py-6"><span className="text-[9px] text-slate-700 font-mono">SESSION ENDED</span></div></div>
</div>
</div>
</div>
</div>

<div className="w-full max-w-6xl mx-auto mb-32 px-2 relative z-20">
<div className="rounded-xl border border-blue-500/10 bg-blue-950/10 p-4 md:p-5 flex flex-col md:flex-row items-start gap-4 backdrop-blur-sm">
<div className="flex-shrink-0 mt-0.5">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-blue-200 mb-1 tracking-tight">Simulation Mode: Real Estate Operations</h4>
<p className="md:text-sm leading-relaxed text-xs font-light text-slate-400">See the AI Voice Bot in action above. It showcases a simulated version of an AI Voice Agent handling inbound calls and coordinating operations specifically for a <span className="text-slate-200 font-medium">Real Estate Agent</span>. In a live production environment, our human-like voice bots are fully customizable to your specific industry solutions, scripts, and operational preferences.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-3xl font-bold text-white mb-2">Trusted by Thousands. Powered by Data.</h2>
<p className="text-base text-slate-400">Our custom built AI Voice Bot metrics show consistent performance and ROI.</p>
</div>

<div className="relative h-[600px] w-full max-w-4xl mx-auto flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" viewbox="0 0 800 600">

<path d="M400,300 C350,300 250,250 200,180" stroke="rgba(34,211,238,0.1)" strokeWidth="1.5"></path>
<path className="animate-pulse" d="M400,300 C350,300 250,250 200,180" stroke="rgba(34,211,238,0.4)" stroke-dasharray="10 10" strokeWidth="1.5"></path>

<path d="M400,300 C450,300 550,250 600,180" stroke="rgba(34,211,238,0.1)" strokeWidth="1.5"></path>

<path d="M400,300 C300,300 250,320 150,300" stroke="rgba(34,211,238,0.1)" strokeWidth="1.5"></path>

<path d="M400,300 C500,300 550,320 650,300" stroke="rgba(34,211,238,0.1)" strokeWidth="1.5"></path>

<path d="M400,300 C350,300 250,350 200,420" stroke="rgba(34,211,238,0.1)" strokeWidth="1.5"></path>

<path d="M400,300 C450,300 550,350 600,420" stroke="rgba(34,211,238,0.1)" strokeWidth="1.5"></path>
</svg>

<div className="relative z-10 w-48 h-64 flex flex-col items-center justify-center animate-float">
<div className="w-full h-full bg-gradient-to-b from-[#0f172a] to-[#020617] rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex items-center justify-center p-6 relative backdrop-blur-md">
<div className="absolute inset-0 opacity-20 bg-[url(default)] bg-cover bg-center"></div>
<svg className="lucide lucide-brain-circuit w-20 h-20 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
<div className="absolute bottom-6 w-8 h-8 bg-cyan-500 rounded-full blur-[20px]"></div>
</div>
</div>


<div className="absolute top-20 left-[15%] w-32 text-center group">
<div className="text-2xl font-bold text-white mb-2">87%</div>
<div className="uppercase text-xs text-slate-400 tracking-wide mb-3">Average Win Rate</div>
<div className="w-16 h-16 rounded-full bg-[#0B1021] border border-cyan-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-trending-up w-6 h-6 text-cyan-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
</div>

<div className="absolute top-20 right-[15%] w-32 text-center group">
<div className="text-2xl font-bold text-white mb-2">32%</div>
<div className="uppercase text-xs text-slate-400 tracking-wide mb-3">Monthly ROI</div>
<div className="w-16 h-16 rounded-full bg-[#0B1021] border border-cyan-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-pie-chart w-6 h-6 text-cyan-400" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
</div>

<div className="absolute top-[45%] left-0 w-24 text-center group">
<div className="w-16 h-16 rounded-full bg-[#0B1021] border border-blue-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(59,130,246,0.2)] mb-2 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-users w-6 h-6 text-blue-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
</div>

<div className="absolute top-[45%] right-0 w-24 text-center group">
<div className="w-16 h-16 rounded-full bg-[#0B1021] border border-blue-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(59,130,246,0.2)] mb-2 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-radio w-6 h-6 text-blue-400" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="text-[10px] uppercase text-slate-400 mt-2">Data Accuracy</div>
</div>

<div className="absolute bottom-20 right-[15%] w-32 text-center group">
<div className="w-16 h-16 rounded-full bg-[#0B1021] border border-cyan-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(6,182,212,0.2)] mb-3 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-bot w-6 h-6 text-cyan-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="uppercase text-xs text-slate-400 tracking-wide">24/7 Automated</div>
</div>

<div className="absolute bottom-20 left-[15%] w-32 text-center group">
<div className="w-16 h-16 rounded-full bg-[#0B1021] border border-cyan-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(6,182,212,0.2)] mb-3 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-zap w-6 h-6 text-cyan-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="uppercase text-xs text-slate-400 tracking-wide">Instant Response</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-cyan-900/20">
<div className="mb-16 text-center">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-4">The Future of Growth Starts Here</h2>
<p className="text-slate-400 max-w-2xl mr-auto ml-auto">Discover powerful AI Employees that analyze data, convert cold leads, and boost your productivity and profit potential 24/7 on auto-pilot.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-7 feature-card rounded-2xl border border-white/5 p-8 relative overflow-hidden group">

<div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
<div className="w-40 h-40 bg-cyan-500 rounded-full blur-[80px]"></div>
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="w-12 h-12 rounded-full border border-cyan-500/30 bg-cyan-950/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
<svg className="lucide lucide-activity w-5 h-5 text-cyan-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-2">Real-Time Conversation Intelligence</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-md">Your AI continuously scans conversation patterns, analyzes volatility in tone, and detects buying signals within milliseconds—far faster than any human agent.</p>
</div>

<div className="mt-8 flex items-center gap-2">
<div className="h-12 w-1 bg-cyan-500 rounded-full animate-pulse"></div>
<div className="h-8 w-1 bg-cyan-700 rounded-full"></div>
<div className="h-16 w-1 bg-cyan-400 rounded-full"></div>
<div className="h-10 w-1 bg-cyan-600 rounded-full"></div>
<div className="h-14 w-1 bg-cyan-300 rounded-full"></div>
</div>
</div>
</div>

<div className="md:col-span-5 feature-card rounded-2xl border border-white/5 p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-950/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
<svg className="lucide lucide-shield-check w-5 h-5 text-blue-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-2" style={{}}>Objection Handling</h3>
<p className="leading-relaxed text-sm text-slate-400">AI Emplyee monitors objection thresholds and automatically adjusts pitch strategies using logic to prevent lead churn.</p>
<div className="mt-6 flex justify-center">
<svg className="lucide lucide-shield w-24 h-24 text-blue-500/20 stroke-[1]" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
</div>
</div>

<div className="md:col-span-5 feature-card rounded-2xl border border-white/5 p-8 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-purple-500/30 bg-purple-950/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
<svg className="lucide lucide-bot w-5 h-5 text-purple-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-2">Automated Smart Bots</h3>
<p className="leading-relaxed text-sm text-slate-400">Set your strategy once and let AI handle the execution. From cold entry to closing, lead capture, data management, calendar management, image and video creation, social media management, possibilities are endless with custom built "human-like" AI Voice Bots.</p>
</div>
</div>

<div className="md:col-span-7 feature-card rounded-2xl border border-white/5 p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/5 to-transparent"></div>
<div className="relative z-10 flex items-center justify-between gap-6">
<div className="max-w-sm">
<div className="w-12 h-12 rounded-full border border-indigo-500/30 bg-indigo-950/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
<svg className="lucide lucide-blocks w-5 h-5 text-indigo-400" data-lucide="blocks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg>
</div>
<h3 className="text-xl font-bold text-white mb-2">1500+ Integrations</h3>
<p className="text-slate-400 text-sm leading-relaxed">Seamlessly connect with your existing stack. Sync data instantly across CRMs, calendars, and communication tools with one-click native integrations and webhooks.</p>
</div>

<div className="hidden md:grid grid-cols-2 gap-3 opacity-80">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-all duration-500 hover:border-indigo-400/50 hover:bg-slate-800">
<svg className="lucide lucide-slack w-5 h-5 text-white" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:border-indigo-400/50 hover:bg-slate-800">
<svg className="lucide lucide-database w-5 h-5 text-white" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:border-indigo-400/50 hover:bg-slate-800">
<svg className="lucide lucide-mail w-5 h-5 text-white" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-all duration-500 hover:border-indigo-400/50 hover:bg-slate-800">
<svg className="lucide lucide-calendar w-5 h-5 text-white" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 border-cyan-900/10 border-t pt-24 pb-24 relative">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-900/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Pricing &amp; General FAQs</h2>
<p className="text-slate-400">Everything you need to know about pricing and capabilities.</p>
</div>
<div className="space-y-3">

<div className="faq-item group border border-white/5 bg-[#0B1021]/30 hover:bg-[#0B1021]/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/20 backdrop-blur-sm">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq(this)">
<div className="flex items-center gap-3">
<svg className="lucide lucide-credit-card w-4 h-4 text-cyan-500" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-100 transition-colors">How does the billing model work?</span>
</div>
<svg className="lucide lucide-chevron-down faq-icon w-4 h-4 text-slate-500 group-hover:text-cyan-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content">
<div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed font-light">
                                We operate on a usage-based hybrid model. There is a fixed monthly platform fee that covers access to the dashboard and standard integrations, plus a per-minute rate for active conversation time. This ensures you only pay for the value you generate.
                            </div>
</div>
</div>

<div className="faq-item group border border-white/5 bg-[#0B1021]/30 hover:bg-[#0B1021]/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/20 backdrop-blur-sm">
<button className="flex focus:outline-none text-left w-full pt-5 pr-6 pb-5 pl-6 items-center justify-between" onclick="toggleFaq(this)">
<div className="flex items-center gap-3">
<svg className="lucide lucide-hammer w-4 h-4 text-cyan-500" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
<span className="group-hover:text-cyan-100 transition-colors text-sm font-semibold text-slate-200">Is there a setup or onboarding fee?</span>
</div>
<svg className="lucide lucide-chevron-down faq-icon group-hover:text-cyan-400 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(34, 211, 238)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content">
<div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed font-light">
                                For our Self-Serve plans, there are no setup fees. For Enterprise plans requiring custom voice cloning, complex workflow logic, or bespoke CRM integrations, we charge a one-time onboarding fee which includes dedicated engineering support.
                            </div>
</div>
</div>

<div className="faq-item group border border-white/5 bg-[#0B1021]/30 hover:bg-[#0B1021]/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/20 backdrop-blur-sm">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq(this)">
<div className="flex items-center gap-3">
<svg className="lucide lucide-scale w-4 h-4 text-cyan-500" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
<span className="group-hover:text-cyan-100 transition-colors text-sm font-semibold text-slate-200">Do you offer volume discounts?</span>
</div>
<svg className="lucide lucide-chevron-down faq-icon group-hover:text-cyan-400 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(34, 211, 238)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content">
<div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed font-light">
                                Yes. We offer significant volume discounts for organizations processing over 10,000 minutes per month. Please contact our sales team for a custom quote tailored to your operational scale.
                            </div>
</div>
</div>

<div className="faq-item group border border-white/5 bg-[#0B1021]/30 hover:bg-[#0B1021]/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/20 backdrop-blur-sm">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq(this)">
<div className="flex items-center gap-3">
<svg className="lucide lucide-mic w-4 h-4 text-slate-500" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
<span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-100 transition-colors">How realistic is the AI voice?</span>
</div>
<svg className="lucide lucide-chevron-down faq-icon w-4 h-4 text-slate-500 group-hover:text-cyan-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content">
<div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed font-light">
                                Our Neural Engine V4.2 utilizes advanced speech synthesis with <span className="text-cyan-400">sub-20ms latency</span>. It mimics human pauses, filler words ("um", "uh"), and intonation changes based on sentiment, making it virtually indistinguishable from a human agent during a standard conversation.
                            </div>
</div>
</div>

<div className="faq-item group border border-white/5 bg-[#0B1021]/30 hover:bg-[#0B1021]/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/20 backdrop-blur-sm">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq(this)">
<div className="flex items-center gap-3">
<svg className="lucide lucide-refresh-cw w-4 h-4 text-slate-500" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
<span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-100 transition-colors">Does it integrate with my existing CRM?</span>
</div>
<svg className="lucide lucide-chevron-down faq-icon w-4 h-4 text-slate-500 group-hover:text-cyan-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content">
<div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed font-light">
                                Yes. We support native 2-way synchronization with Salesforce, HubSpot, Pipedrive, Zoho, and GoHighLevel. Additionally, our <span className="text-cyan-400">Open API</span> and Webhooks allow you to connect with over 1,500+ other tools and custom databases instantly.
                            </div>
</div>
</div>

<div className="faq-item group border border-white/5 bg-[#0B1021]/30 hover:bg-[#0B1021]/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/20 backdrop-blur-sm">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq(this)">
<div className="flex items-center gap-3">
<svg className="lucide lucide-settings w-4 h-4 text-slate-500" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-100 transition-colors">Can I customize the conversation scripts?</span>
</div>
<svg className="lucide lucide-chevron-down faq-icon w-4 h-4 text-slate-500 group-hover:text-cyan-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content">
<div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed font-light">
                                Absolutely. You have full control over the AI's persona, tone, and logic. Our visual prompt builder allows you to set specific goals (e.g., booking appointments, qualifying leads) and define how the AI should handle objections or specific questions.
                            </div>
</div>
</div>

<div className="faq-item group border border-white/5 bg-[#0B1021]/30 hover:bg-[#0B1021]/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/20 backdrop-blur-sm">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq(this)">
<div className="flex items-center gap-3">
<svg className="lucide lucide-x-circle w-4 h-4 text-slate-500" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-100 transition-colors">Can I cancel my subscription anytime?</span>
</div>
<svg className="lucide lucide-chevron-down faq-icon w-4 h-4 text-slate-500 group-hover:text-cyan-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content">
<div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed font-light">
                                Yes, for monthly plans you can cancel at any time before your next billing cycle. Enterprise agreements typically involve annual contracts to lock in lower volume rates.
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 pb-24 pt-12 text-center border-t border-cyan-900/20">
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-900/50 to-blue-900/50 flex items-center justify-center border border-cyan-500/30 mb-8 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative">
<svg className="lucide lucide-cpu w-8 h-8 text-cyan-300" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
</div>
<h2 className="text-3xl font-semibold text-white mb-4" style={{}}>No More Lead &amp; Communication Leakages.</h2>
<p className="leading-relaxed text-sm text-slate-400 max-w-lg mr-auto mb-10 ml-auto">Your CRM is full of prospects that didn't buy. Our AI Employees re-engages dormant opportunities with natural voice conversations that feel personal, reigniting interest and rebuilding pipeline automatically.</p>
<button className="hover:bg-cyan-50 transition-all text-sm font-bold text-black bg-white h-12 rounded-full pr-8 pl-8 shadow-[0_0_20px_rgba(255,255,255,0.3)]" onclick="window.location.href='https://tidycal.com/automize'" role="button">Interact with Our Live AI Voice Bots</button>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#02040a] py-12 px-6">
<div className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto ml-auto items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
<svg className="lucide lucide-bot w-3.5 h-3.5 text-white" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<span className="text-sm font-bold text-white">Automize.Bot</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[11px] text-slate-500 font-mono">
<span className="">©2025 CROISSANCE DIGITAL SOLUTIONS. ALL RIGHTS RESERVED.</span>
<div className="flex gap-6">
<a className="hover:text-cyan-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Terms &amp; Conditions</a>
</div>
</div>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-cyan-400 transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-600 hover:text-cyan-400 transition-colors" href="#"><svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
</div>
</div>
</footer>


    </>
  );
}
