import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

            // 1. UPDATE TIME
            function updateTime() {
                const now = new Date();
                const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const el = document.getElementById('localTime');
                if(el) el.textContent = timeString;
            }
            setInterval(updateTime, 1000);
            updateTime();

            // 2. COPY EMAIL TOAST
            function copyEmail() {
                navigator.clipboard.writeText('hello@portfolio.com');
                const toast = document.getElementById('toast');
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }

            // Global Mouse Tracking (Optimized)
            let globalMouseX = 0;
            let globalMouseY = 0;
            window.addEventListener('mousemove', (e) => {
                globalMouseX = e.clientX;
                globalMouseY = e.clientY;
            }, { passive: true });

            // 3. OPTIMIZED WAVE CANVAS WITH INTERSECTION OBSERVER
            (function() {
                const canvas = document.getElementById('waveCanvas');
                const heroSection = document.getElementById('heroSection');
                if (!canvas || !heroSection) return;

                const ctx = canvas.getContext('2d', { alpha: true });
                let width, height;
                let time = 0;
                let animationId;
                let isVisible = true;
                let isHovering = false;

                // Detect interaction only on card hover
                heroSection.addEventListener('mouseenter', () => isHovering = true);
                heroSection.addEventListener('mouseleave', () => isHovering = false);

                function resize() {
                    const parent = canvas.parentElement;
                    width = parent.offsetWidth;
                    height = parent.offsetHeight;

                    const dpr = window.devicePixelRatio || 1;
                    canvas.width = width * dpr;
                    canvas.height = height * dpr;
                    ctx.scale(dpr, dpr);
                }

                function animate() {
                    if (!isVisible) return; // Stop if not visible

                    ctx.clearRect(0, 0, width, height);
                    time += 0.015;

                    // MOUSE INTERACTION DISABLED
                    let mouseFactorX = 0;
                    let mouseFactorY = 0;

                    const rows = 35;
                    const stepX = 10;

                    for (let r = 0; r < rows; r++) {
                        const yBase = height - (r * 14) - 10;
                        if (yBase < 0) continue;

                        const normalizedRow = r / rows;
                        const rowOpacity = Math.max(0, 1 - (normalizedRow * 1.1));

                        ctx.beginPath();
                        for (let x = 0; x < width; x += stepX) {
                            const freq = 0.01 + (mouseFactorX * 0.005);
                            const waveY = Math.sin(x * freq + time + (r * 0.3)) * (20 + (r * 1.5) + (mouseFactorY * 10))
                                + Math.cos(x * 0.015 - time * 0.5) * 8;

                            const y = yBase + waveY;
                            const size = 1.8 + Math.sin(x * 0.02 + time * 1.5) * 1.0;

                            ctx.moveTo(x + size, y);
                            ctx.arc(x, y, size, 0, Math.PI * 2);
                        }

                        if (r % 2 === 0) {
                            ctx.fillStyle = `rgba(68, 88, 140, ${rowOpacity * 0.7})`;
                        } else {
                            ctx.fillStyle = `rgba(114, 162, 157, ${rowOpacity * 0.65})`;
                        }
                        ctx.fill();
                    }

                    animationId = requestAnimationFrame(animate);
                }

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        isVisible = entry.isIntersecting;
                        if (isVisible) {
                            if(!animationId) animate();
                        } else {
                            cancelAnimationFrame(animationId);
                            animationId = null;
                        }
                    });
                }, { threshold: 0 });

                observer.observe(heroSection);

                window.addEventListener('resize', resize, { passive: true });
                resize();
                animate();
            })();

            // 4. OPTIMIZED 3D TILT EFFECT
            const cards = document.querySelectorAll('.tilt-card');
            cards.forEach(card => {
                let isHovering = false;
                let animationFrameId = null;

                card.addEventListener('mouseenter', () => {
                    isHovering = true;
                    card.style.transition = 'transform 0.1s ease-out';
                });

                card.addEventListener('mousemove', (e) => {
                    if (!isHovering) return;

                    if (animationFrameId) cancelAnimationFrame(animationFrameId);

                    animationFrameId = requestAnimationFrame(() => {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
                        card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);

                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;

                        const rotateX = ((y - centerY) / centerY) * -1.5;
                        const rotateY = ((x - centerX) / centerX) * 1.5;

                        const parallaxX = (x - centerX) * 0.03;
                        const parallaxY = (y - centerY) * 0.03;

                        const isFocused = card.classList.contains('scroll-focus');
                        const scaleVal = 1.02;

                        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scaleVal}, ${scaleVal}, ${scaleVal})`;

                        const layers1 = card.getElementsByClassName('parallax-layer-1');
                        const layers2 = card.getElementsByClassName('parallax-layer-2');
                        const layers3 = card.getElementsByClassName('parallax-layer-3');

                        for(let l of layers1) l.style.transform = `translateZ(20px) translateX(${-parallaxX}px) translateY(${-parallaxY}px)`;
                        for(let l of layers2) l.style.transform = `translateZ(40px) translateX(${-parallaxX * 1.5}px) translateY(${-parallaxY * 1.5}px)`;
                        for(let l of layers3) l.style.transform = `translateZ(60px) translateX(${-parallaxX * 2}px) translateY(${-parallaxY * 2}px)`;
                    });
                });

                card.addEventListener('mouseleave', () => {
                    isHovering = false;
                    if (animationFrameId) cancelAnimationFrame(animationFrameId);

                    card.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
                    card.style.transform = '';

                    const layers = card.querySelectorAll('[class*="parallax-layer-"]');
                    layers.forEach(l => {
                        l.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
                        if(l.classList.contains('parallax-layer-1')) l.style.transform = 'translateZ(20px)';
                        if(l.classList.contains('parallax-layer-2')) l.style.transform = 'translateZ(40px)';
                        if(l.classList.contains('parallax-layer-3')) l.style.transform = 'translateZ(60px)';
                    });
                });
            });

            // 5. THROTTLED SCROLL FOCUS LOGIC
            const mainSections = document.querySelectorAll('.main-section');
            let isScrolling = false;

            function handleScrollFocus() {
                if (!isScrolling) {
                    requestAnimationFrame(() => {
                        const viewportCenter = window.innerHeight / 2;
                        let closestSection = null;
                        let minDistance = Infinity;

                        mainSections.forEach(section => {
                            const rect = section.getBoundingClientRect();
                            const sectionCenter = rect.top + (rect.height / 2);
                            const distance = Math.abs(viewportCenter - sectionCenter);

                            if (distance < minDistance) {
                                minDistance = distance;
                                closestSection = section;
                            }
                        });

                        mainSections.forEach(section => {
                            if (section === closestSection) {
                                if (!section.classList.contains('scroll-focus')) section.classList.add('scroll-focus');
                            } else {
                                if (section.classList.contains('scroll-focus')) section.classList.remove('scroll-focus');
                            }
                        });

                        isScrolling = false;
                    });
                    isScrolling = true;
                }
            }
            window.addEventListener('scroll', handleScrollFocus, { passive: true });
            handleScrollFocus();

            // 6. FLOATING NAV SCROLL ANIMATION (ELASTIC)
            (function() {
              const navContainer = document.getElementById('floating-nav');
              let lastScrollY = window.scrollY;
              let isScrollingTimeout;

              window.addEventListener('scroll', () => {
                const currentScrollY = window.scrollY;
                const delta = currentScrollY - lastScrollY;
                const isAtTop = currentScrollY < 50;

                window.clearTimeout(isScrollingTimeout);

                if (isAtTop) {
                  navContainer.classList.remove('is-scrolling-up', 'is-scrolling-down', 'nav-scrolled');
                } else {
                  navContainer.classList.add('nav-scrolled');

                  if (Math.abs(delta) > 4) {
                      if (delta > 0) {
                          navContainer.classList.remove('is-scrolling-up');
                          navContainer.classList.add('is-scrolling-down');
                      } else {
                          navContainer.classList.remove('is-scrolling-down');
                          navContainer.classList.add('is-scrolling-up');
                      }
                  }
                }

                lastScrollY = currentScrollY;

                isScrollingTimeout = setTimeout(() => {
                  navContainer.classList.remove('is-scrolling-up', 'is-scrolling-down');
                }, 150);

              }, { passive: true });
            })();
    


      (function() {
        const cards = document.querySelectorAll('#work .tilt-card');
        cards.forEach(card => {
          card.addEventListener('click', function() {
            this.classList.remove('click-animate');
            void this.offsetWidth; /* Trigger reflow */
            this.classList.add('click-animate');
            this.addEventListener('animationend', () => {
              this.classList.remove('click-animate');
            }, { once: true });
          });
        });
      })();
    


      (function() {
        // CONFIG
        const INITIAL_MSG = "Hello! I'm Mianying's portfolio assistant. I can help you uncover details about his design process, impact metrics at Microsoft & SAP, or his technical stack. What would you like to know?";
        const INITIAL_CHIPS = [
          "Tell me about the Azure Arc project.",
          "How does he approach Design Systems?",
          "What are his key achievements?",
          "What are Mianying's interests?"
        ];
        const fallbackPool = [
            "Can you explain the Azure Arc impact?",
            "What are Mianying's core design principles?",
            "Does he have experience with B2B SaaS?",
            "How does he collaborate with engineers?",
            "Show me a case study on efficiency.",
            "What tools does Mianying use daily?",
            "Is he open to relocation?",
            "Tell me about his design process."
        ];
        const API_KEY = 'app-ijKndbb4J7kWU1C4AR7r9KrL';
        const API_URL = 'https://api.dify.ai/v1/chat-messages';

        // STATE
        let currentConversationId = "";
        let userId = localStorage.getItem('chat_user_id');
        if (!userId) {
            userId = 'user_' + Math.random().toString(36).substring(2, 9);
            localStorage.setItem('chat_user_id', userId);
        }

        // DOM ELEMENTS
        const toggleBtn = document.getElementById('chatbot-toggle');
        const closeBtn = document.getElementById('chatbot-close');
        const refreshBtn = document.getElementById('chatbot-refresh');
        const windowEl = document.getElementById('chatbot-window');
        const messagesEl = document.getElementById('chat-messages');
        const inputEl = document.getElementById('chat-input');
        const sendBtn = document.getElementById('send-btn');
        const suggestionContainer = document.getElementById('suggestion-container');
        const chipsContainer = document.getElementById('suggestion-chips');

        // TOGGLE LOGIC
        function toggleChat() {
            const isOpen = windowEl.classList.contains('open');
            if (isOpen) {
                windowEl.classList.remove('open');
            } else {
                windowEl.classList.add('open');
                setTimeout(() => inputEl.focus(), 100);
            }
        }
        if(toggleBtn) toggleBtn.addEventListener('click', toggleChat);
        if(closeBtn) closeBtn.addEventListener('click', toggleChat);

        // REFRESH LOGIC
        function resetChat() {
            currentConversationId = "";
            messagesEl.innerHTML = '';
            appendMessage(INITIAL_MSG, 'ai');
            renderChips(INITIAL_CHIPS);
            suggestionContainer.classList.remove('hidden');
        }
        if(refreshBtn) refreshBtn.addEventListener('click', resetChat);

        // INPUT HANDLING
        inputEl.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight > 120 ? 120 : this.scrollHeight) + 'px';
            if(this.value === '') this.style.height = '44px';
        });

        inputEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        });

        sendBtn.addEventListener('click', handleSend);
        window.sendUserMessage = function(text) { if (text) { inputEl.value = text; handleSend(); } };

        function handleSend() {
            const text = inputEl.value.trim();
            if (!text) return;

            inputEl.value = '';
            inputEl.style.height = '44px';
            sendMessage(text);
        }

        // MESSAGING CORE
        async function sendMessage(text) {
            appendMessage(text, 'user');

            // HIDE SUGGESTIONS WHILE LOADING
            suggestionContainer.classList.add('hidden');
            chipsContainer.innerHTML = '';
            inputEl.disabled = true;
            sendBtn.disabled = true;

            // COOL THINKING INDICATOR (UPDATED)
            const loadingMessages = [
              "Rummaging through Mianying's Figma files...",
              "Waking up the server hamsters...",
              "Stealing Mianying's design secrets for you...",
              "Aligning pixels to the grid...",
              "Brewing some virtual coffee...",
              "Convincing the AI to cooperate..."
            ];

            const getRandomMsg = () => {
               const msg = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
               const emoji = Math.random() > 0.5 ? " 😊" : " ✨";
               return msg + emoji;
            };

            const typingId = 'typing-' + Date.now();
            const typingEl = document.createElement('div');
            typingEl.className = 'thinking-container';
            typingEl.id = typingId;

            const initialMsg = getRandomMsg();

            typingEl.innerHTML = `
              <div class="thinking-loader">
                  <svg viewBox="0 0 50 50">
                      <circle class="bg" cx="25" cy="25" r="20"></circle>
                      <circle class="fg" cx="25" cy="25" r="20"></circle>
                  </svg>
              </div>
              <div class="thinking-text" style="color: #64748B; font-style: italic;">${initialMsg}</div>
            `;
            messagesEl.appendChild(typingEl);
            scrollToBottom();

            // Rotation Interval
            let msgInterval = setInterval(() => {
               const txtEl = typingEl.querySelector('.thinking-text');
               if(txtEl) txtEl.textContent = getRandomMsg();
            }, 3000);

            // ARTIFICIAL DELAY FOR EFFECT (15 SECONDS)
            await new Promise(r => setTimeout(r, 15000));

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${API_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        inputs: {},
                        query: text,
                        response_mode: 'streaming',
                        conversation_id: currentConversationId,
                        user: userId,
                        auto_generate_name: false
                    })
                });

                if (!response.ok) throw new Error('API request failed');

                clearInterval(msgInterval);
                if(typingEl) typingEl.remove();

                const aiMsgEl = document.createElement('div');
                aiMsgEl.className = 'message ai';
                messagesEl.appendChild(aiMsgEl);

                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let aiText = '';

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    const chunk = decoder.decode(value, { stream: true });
                    const lines = chunk.split('\n');
                    for (const line of lines) {
                        if (line.startsWith('data: ')) {
                            const jsonStr = line.substring(6);
                            if (jsonStr === '[DONE]') continue;
                            try {
                                const data = JSON.parse(jsonStr);
                                if (data.conversation_id) currentConversationId = data.conversation_id;

                                if (data.event === 'message' || data.event === 'agent_message') {
                                    aiText += (data.answer || '');

                                    // PARSE MARKDOWN & LINKS
                                    let html = marked.parse(aiText);
                                    // Add target blank to links
                                    html = html.replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ');
                                    aiMsgEl.innerHTML = html;

                                    scrollToBottom();
                                }

                                if (data.event === 'message_end') {
                                     let finalSuggestions = [];
                                     if (data.metadata && data.metadata.suggested_questions && data.metadata.suggested_questions.length > 0) {
                                        finalSuggestions = data.metadata.suggested_questions;
                                     } else {
                                        finalSuggestions = fallbackPool.sort(() => 0.5 - Math.random()).slice(0, 3);
                                     }
                                     renderChips(finalSuggestions);
                                }
                            } catch (e) { console.error('JSON Error', e); }
                        }
                    }
                }
            } catch (err) {
                clearInterval(msgInterval);
                const typing = document.getElementById(typingId);
                if(typing) typing.remove();
                appendMessage('Sorry, something went wrong. Please check your connection.', 'ai');
            } finally {
                clearInterval(msgInterval);
                inputEl.disabled = false;
                sendBtn.disabled = false;
                inputEl.focus();
                scrollToBottom();
            }
        }

        function appendMessage(text, type) {
            const div = document.createElement('div');
            div.className = `message ${type}`;
            div.textContent = text;
            messagesEl.appendChild(div);
            scrollToBottom();
        }

        function renderChips(questions) {
            chipsContainer.innerHTML = '';
            if(!questions || questions.length === 0) {
                 suggestionContainer.classList.add('hidden');
                 return;
            }
            questions.slice(0, 4).forEach(q => {
                const btn = document.createElement('button');
                btn.className = 'chip';
                btn.textContent = q;
                btn.onclick = () => window.sendUserMessage(q);
                chipsContainer.appendChild(btn);
            });
            suggestionContainer.classList.remove('hidden');
            scrollToBottom();
        }

        function scrollToBottom() {
            messagesEl.scrollTop = messagesEl.scrollHeight;
        }
      })();
    


      (function(){const b=document.getElementById('chatbot-toggle');if(b){const s=()=>b.classList.add('stop-anim');b.addEventListener('mouseenter',s);b.addEventListener('click',s);}})();
    


      (function(){
        const jobs = document.querySelectorAll('#about .group\\/job');
        function activate(job){
          if(job.classList.contains('active-job')) return;
          jobs.forEach(j => j.classList.remove('active-job'));
          job.classList.add('active-job');
        }
        jobs.forEach(job => {
          // Only trigger expansion when hovering the title/role area (header)
          // to prevent uncontrolled sliding when content expands/collapses.
          const wrapper = job.querySelector('.flex.flex-col');
          if(wrapper) {
            // The first two children are Title row and Role row
            const headers = Array.from(wrapper.children).slice(0, 2);
            headers.forEach(header => {
               header.addEventListener('mouseenter', () => activate(job));
            });
          }
        });
        // Default: No jobs expanded (Removed auto-activation)
      })();
    


      window.toggleAccordion = function(btn) {
        const item = btn.closest('.accordion-item');
        const container = document.getElementById('experience-accordion');
        const allItems = container.querySelectorAll('.accordion-item');
        const isActive = item.classList.contains('is-active');

        // Close all items
        allItems.forEach(i => {
            i.classList.remove('is-active');
            const content = i.querySelector('.accordion-content');
            content.classList.remove('grid-rows-[1fr]');
            content.classList.add('grid-rows-[0fr]');
        });

        // Toggle active state only if it wasn't active before
        if (!isActive) {
            item.classList.add('is-active');
            const content = item.querySelector('.accordion-content');
            content.classList.remove('grid-rows-[0fr]');
            content.classList.add('grid-rows-[1fr]');
        }
      };
    


      (function(){
        const input = document.getElementById('hero-input');
        const submit = document.getElementById('hero-submit');

        if(!input) return;

        const prompts = [
          "How did you improve efficiency at Microsoft?",
          "Tell me about the SAP Design System.",
          "What is your design process?",
          "Show me the impact of your work.",
          "What tech stack do you use?"
        ];

        let pIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 50;

        function type() {
          if (document.activeElement === input || input.value.length > 0) {
              setTimeout(type, 500);
              return;
          }

          const current = prompts[pIndex];
          let displayText = "";

          if (isDeleting) {
            displayText = current.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 30;
          } else {
            displayText = current.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
          }

          input.setAttribute('placeholder', displayText + "|");

          if (!isDeleting && charIndex === current.length) {
            isDeleting = true;
            typeSpeed = 2500;
          } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            pIndex = (pIndex + 1) % prompts.length;
            typeSpeed = 500;
          }

          setTimeout(type, typeSpeed);
        }

        type();

        function doSubmit() {
          const val = input.value.trim();
          if(!val) return;
          const toggle = document.getElementById('chatbot-toggle');
          const windowEl = document.getElementById('chatbot-window');
          if(toggle && windowEl && !windowEl.classList.contains('open')) {
              toggle.click();
          }
          if(window.sendUserMessage) {
              setTimeout(() => { window.sendUserMessage(val); }, 300);
              input.value = '';
              input.blur();
          }
        }

        if(submit) submit.addEventListener('click', doSubmit);
        input.addEventListener('keydown', (e) => {
          if(e.key === 'Enter') doSubmit();
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bokeh-container">
<div className="bokeh" style="
        width: 50vw; height: 50vw;
        top: -10%; left: -10%;
        background: radial-gradient(circle, rgba(114, 162, 157, 0.35) 0%, transparent 65%);
        --blur: 60px;
        --duration: 20s; 
        --delay: 0s; 
        --move-x: 25vw; --move-y: 15vh;
    "></div>
<div className="bokeh" style="
        width: 60vw; height: 60vw;
        bottom: -20%; right: -20%;
        background: radial-gradient(circle, rgba(68, 88, 140, 0.3) 0%, transparent 70%);
        --blur: 70px;
        --duration: 25s; 
        --delay: -5s; 
        --move-x: -30vw; --move-y: -20vh;
    "></div>
<div className="bokeh" style="
        width: 40vw; height: 40vw;
        top: 30%; right: -15%;
        background: radial-gradient(circle, rgba(68, 88, 140, 0.25) 0%, transparent 60%);
        --blur: 50px;
        --duration: 22s; 
        --delay: -12s; 
        --move-x: -20vw; --move-y: 25vh;
    "></div>
<div className="bokeh" style="
        width: 45vw; height: 45vw;
        bottom: 5%; left: -15%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%);
        --blur: 50px;
        --duration: 28s; 
        --delay: -8s; 
        --move-x: 25vw; --move-y: -10vh;
    "></div>
<div className="bokeh" style="
        width: 55vw; height: 55vw;
        top: -25%; right: 5%;
        background: radial-gradient(circle, rgba(114, 162, 157, 0.3) 0%, transparent 70%);
        --blur: 80px;
        --duration: 30s; 
        --delay: -2s; 
        --move-x: -15vw; --move-y: 15vh;
    "></div>
</div>
<div className="bg-grid"></div>
<div className="bg-noise"></div>
<div className="" id="toast">
<svg className="text-[#72A29D]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
      Email copied
    </div>

<main className="grid grid-cols-1 gap-6 md:gap-8 md:p-6 lg:p-8 z-10 w-[80%] pt-4 pr-4 pb-20 pl-4 relative">

<div className="main-section tilt-card col-span-1 flex flex-col overflow-hidden group min-h-[420px] md:p-10 lg:p-12 backdrop-saturate-200 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.15),inset_0_0_40px_rgba(255,255,255,0.8)] transition-all duration-500 bg-gradient-to-br from-white/60 via-white/40 to-white/20 border-white/60 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_0_30px_rgba(255,255,255,0.7)] backdrop-blur-3xl justify-center" id="heroSection" style={{transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="pointer-events-none rounded-xl absolute top-0 right-0 bottom-0 left-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),inset_0_0_20px_0_rgba(255,255,255,0.1)]"></div>
<div className="tech-corner corner-tl"></div>
<div className="tech-corner corner-tr"></div>
<div className="tech-corner corner-bl"></div>
<div className="tech-corner corner-br"></div>

<div className="absolute inset-x-0 bottom-0 h-[70%] z-0 pointer-events-none transform translate-z-[-20px]">
<canvas className="w-full h-full opacity-40" height="326" id="waveCanvas" width="1060"></canvas>
</div>

<div className="card-glare"></div>

<div className="relative z-10 pointer-events-none flex flex-col justify-center items-center text-center max-w-7xl mx-auto">

<div className="parallax-layer-3 animate-enter flex items-center gap-3 mb-8 pointer-events-auto" style={{transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)', transform: 'translateZ(60px)'}}>

<div className="flex shrink-0 h-10 w-auto items-center justify-center">
<img alt="Avatar" className="w-20 h-full object-contain rounded-lg mr-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3255f49-0112-4248-b338-5be86a923019_320w.png"/>
</div>

<div className="inline-flex w-fit items-center border border-[#72A29D]/20 bg-white/60 backdrop-blur-md pl-4 pr-6 py-2 cursor-default shadow-[0_4px_20px_-4px_rgba(114,162,157,0.1)] rounded-full hover:scale-105 transition-transform duration-300 ring-1 ring-[#72A29D]/10 hover:ring-[#72A29D]/30 group/badge">
<span className="md:text-sm text-xs font-medium text-neutral-700 font-inter">
                Product Designer
              </span>
<span className="w-px h-3 bg-[#72A29D]/30 mx-3"></span>
<span className="md:text-sm text-xs font-medium text-neutral-600 font-inter">
                San Francisco Bay Area
              </span>
</div>
</div>

<h1 className="parallax-layer-2 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-sans mb-6 text-balance drop-shadow-sm" style={{transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)', transform: 'translateZ(40px)'}}>
<span className="block animate-enter delay-100 pb-2">
<span className="animate-diffuse-text">Hey, this is Mianying</span>
</span>
</h1>
<p className="parallax-layer-1 animate-enter delay-300 leading-relaxed text-balance pointer-events-auto md:text-lg lg:text-lg text-base font-normal text-neutral-700 font-poppins max-w-2xl mb-8" style={{transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)', transform: 'translateZ(20px)'}}>
            I tame complexity at enterprise scale by turning gnarly backend
            power into smooth, intuitive frontend magic. Previously crafting
            cloud platforms at
            <a className="inline-block px-1 -mx-1 rounded-sm text-neutral-900 font-semibold border-b border-[#72A29D]/30 hover:border-[#44588C] hover:text-[#44588C] transition-all duration-300 hover:scale-110 hover:bg-neutral-50 origin-bottom" href="#">
              Microsoft Azure
            </a>
            , design systems at
            <a className="inline-block px-1 -mx-1 rounded-sm text-neutral-900 font-semibold border-b border-[#72A29D]/30 hover:border-[#44588C] hover:text-[#44588C] transition-all duration-300 hover:scale-110 hover:bg-neutral-50 origin-bottom" href="#">
              SAP
            </a>
            , and AI platforms at
            <a className="inline-block px-1 -mx-1 rounded-sm text-neutral-900 font-semibold border-b border-[#72A29D]/30 hover:border-[#44588C] hover:text-[#44588C] transition-all duration-300 hover:scale-110 hover:bg-neutral-50 origin-bottom" href="#">
              Siemens Healthineers
            </a>
            .
          </p>
<div className="parallax-layer-1 animate-enter delay-400 flex flex-wrap gap-5 pointer-events-auto gap-x-5 gap-y-5 items-center justify-center w-full" style={{transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)', transform: 'translateZ(20px)'}}>
<div className="relative w-full max-w-lg mx-auto group/hero-search">
<div className="relative flex items-center bg-white/85 backdrop-blur-xl border-2 border-[#72A29D]/40 rounded-full transition-all duration-300 hover:bg-white hover:shadow-2xl hover:border-[#44588C]/60 focus-within:bg-white focus-within:shadow-2xl focus-within:border-[#44588C] ring-4 ring-white/60 hover:ring-[#44588C]/20 hover:scale-[1.02] transform shadow-[0_15px_40px_-10px_rgba(68,88,140,0.2)]">
<div className="flex-1 relative h-14 flex items-center">
<input autocomplete="off" className="w-full h-full pl-6 pr-4 bg-transparent border-none text-neutral-800 placeholder-neutral-500/80 focus:ring-0 text-base font-medium outline-none" id="hero-input" placeholder="H|" type="text"/>
</div>
<button aria-label="Search" className="mr-1.5 w-11 h-11 flex items-center justify-center rounded-full bg-[#44588C] text-white hover:bg-[#364670] transition-all duration-300 scale-100 hover:scale-110 shadow-lg" id="hero-submit">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="22" x2="11" y1="2" y2="13"></line>
<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="main-section col-span-1 md:p-6 lg:p-8 overflow-visible [&amp;_.tech-corner]:!hidden backdrop-saturate-200 transition-all duration-500 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.15),inset_0_0_40px_rgba(255,255,255,0.8)] bg-gradient-to-br from-white/60 via-white/40 to-white/20 border-white/60 border rounded-xl p-5 relative shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_0_30px_rgba(255,255,255,0.7)] backdrop-blur-3xl" id="work">
<div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),inset_0_0_20px_0_rgba(255,255,255,0.1)]"></div>
<div className="grid grid-cols-1 md:grid-cols-2 min-[1601px]:grid-cols-3 z-10 relative gap-x-6 gap-y-6 group/work-grid">

<div className="tilt-card group/card flex flex-col cursor-pointer hover:shadow-2xl hover:shadow-neutral-900/5 transition-all duration-500 overflow-hidden bg-white h-full border-neutral-100 border rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-sm" onclick="window.location.href='/machine-configuration'" role="button" style={{transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="card-glare rounded-2xl"></div>
<div className="relative w-full overflow-hidden rounded-lg bg-neutral-100 z-0 tilt-content aspect-video md:aspect-[16/10]" style={{}}>
<img alt="Fintech" className="object-top img-sharp object-cover bg-center w-full h-full" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d78cd06-deb6-4386-a607-97cbaf76e5c1_3840w.png"/>
</div>
<div className="flex flex-col px-4 pt-5 pb-6 flex-1 tilt-content gap-4" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<img alt="Microsoft" className="w-full h-full object-contain opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5053a6b-f376-41fa-ba4c-952937b58256_800w.png"/>
</div>
</div>
<div className="w-6 h-6 flex items-center justify-center rounded-full bg-neutral-50 group-hover/card:bg-[#44588C] group-hover/card:text-white text-neutral-300 transition-all duration-300 transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
</div>
<div className="">
<h3 className="text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight leading-tight mb-2 group-hover-gradient-text transition-all">
                  Azure Machine Config
                </h3>
<p className="leading-relaxed line-clamp-2 font-normal text-neutral-500 text-base">
                  Unified Cloud Configuration Management Service for Windows
                  &amp; Linux systems.
                </p>
</div>
<div className="grid grid-cols-2 gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100 mt-auto">
<div className="flex flex-col gap-1">
<span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                    Deployment Efficiency
                  </span>
<span className="text-lg font-bold text-neutral-900 tracking-tight">
                    70%+ Boost
                  </span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                    Market pilots
                  </span>
<span className="text-lg font-bold text-neutral-900 tracking-tight">
                    12+ Major Firms
                  </span>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-3">
<span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider border border-neutral-200 bg-white text-neutral-500 hover:border-[#44588C] hover:text-[#44588C] transition-colors cursor-default">
                  Operational Efficiency
                </span>
<span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider border border-neutral-200 bg-white text-neutral-500 hover:border-[#44588C] hover:text-[#44588C] transition-colors cursor-default">
                  DevOps
                </span>
<span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider border border-neutral-200 bg-white text-neutral-500 hover:border-[#44588C] hover:text-[#44588C] transition-colors cursor-default">
                  Cloud Automation
                </span>
</div>
</div>
</div>

<div className="tilt-card group/card flex flex-col cursor-pointer hover:shadow-2xl hover:shadow-neutral-900/5 transition-all duration-500 overflow-hidden bg-white h-full border-neutral-100 border rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-sm" onclick="window.location.href='/arc-service-management'" role="button" style={{transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="card-glare rounded-2xl"></div>
<div className="relative w-full overflow-hidden rounded-lg bg-neutral-100 z-0 tilt-content aspect-video md:aspect-[16/10]" style={{}}>
<img alt="Security" className="object-top img-sharp object-cover w-full h-full" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/be55e275-9acc-4b8c-8a2d-89a03a42cd68_3840w.png"/>
</div>
<div className="flex flex-col px-4 pt-5 pb-6 flex-1 tilt-content gap-4" style={{}}>
<div className="flex items-center justify-between">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="w-8 h-8 flex items-center justify-center">
<img alt="Microsoft" className="w-full h-full object-contain opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5053a6b-f376-41fa-ba4c-952937b58256_800w.png"/>
</div>
</div>
<div className="w-6 h-6 flex items-center justify-center rounded-full bg-neutral-50 group-hover/card:bg-[#44588C] group-hover/card:text-white text-neutral-300 transition-all duration-300 transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
</div>
<div className="">
<h3 className="leading-tight group-hover-gradient-text transition-all text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight mb-2" style={{}}>
                  Azure Arc Service Management
                </h3>
<p className="leading-relaxed line-clamp-2 font-normal text-neutral-500 text-base">
                  Microsoft Hybrid Cloud Operations &amp; Governance Service for
                  enterprise.
                </p>
</div>

<div className="grid grid-cols-2 gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100 mt-auto">
<div className="flex flex-col gap-1">
<span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                    Efficiency Boost
                  </span>
<span className="text-lg font-bold text-neutral-900 tracking-tight">
                    60%+ vs Traditional
                  </span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                    New Service Adoption
                  </span>
<span className="text-lg font-bold text-neutral-900 tracking-tight">
                    12% Growth
                  </span>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-3">
<span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider border border-neutral-200 bg-white text-neutral-500 hover:border-[#44588C] hover:text-[#44588C] transition-colors cursor-default">
                  Hybrid Cloud
                </span>
<span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider border border-neutral-200 bg-white text-neutral-500 hover:border-[#44588C] hover:text-[#44588C] transition-colors cursor-default">
                  Service Ops
                </span>
<span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider border border-neutral-200 bg-white text-neutral-500 hover:border-[#44588C] hover:text-[#44588C] transition-colors cursor-default">
                  Enterprise
                </span>
</div>
</div>
</div>

<div className="tilt-card group/card flex flex-col cursor-pointer hover:shadow-2xl hover:shadow-neutral-900/5 transition-all duration-500 overflow-hidden bg-white h-full border-neutral-100 border rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-sm" onclick="window.location.href='/azure-resource-change-portal'" role="button" style={{transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="card-glare rounded-2xl"></div>
<div className="relative w-full overflow-hidden rounded-lg bg-neutral-100 z-0 tilt-content aspect-video md:aspect-[16/10]" style={{}}>
<img alt="IoT" className="object-top img-sharp w-full h-full object-cover" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ac21dcb-2480-48d1-ae5e-1623660448b3_1600w.png"/>
</div>
<div className="flex flex-col px-4 pt-5 pb-6 flex-1 tilt-content gap-4" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<img alt="Microsoft" className="w-full h-full object-contain opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5053a6b-f376-41fa-ba4c-952937b58256_800w.png"/>
</div>
</div>
<div className="w-6 h-6 flex items-center justify-center rounded-full bg-neutral-50 group-hover/card:bg-[#44588C] group-hover/card:text-white text-neutral-300 transition-all duration-300 transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
</div>
<div className="">
<h3 className="leading-tight group-hover-gradient-text transition-all text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight mb-2">
                  Azure Resource Change Portal
                </h3>
<p className="leading-relaxed line-clamp-2 font-normal text-neutral-500 text-base">
                  A centralized portal for visualizing resource change history
                  and analyzing impact on system stability.
                </p>
</div>

<div className="grid grid-cols-2 gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100 mt-auto">
<div className="flex flex-col gap-1">
<span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                    Troubleshooting
                  </span>
<span className="text-lg font-bold text-neutral-900 tracking-tight">
                    70% Faster
                  </span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                    Error Impact
                  </span>
<span className="text-lg font-bold text-neutral-900 tracking-tight">
                    -24% Reduced
                  </span>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-3">
<span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider border border-neutral-200 bg-white text-neutral-500 hover:border-[#44588C] hover:text-[#44588C] transition-colors cursor-default">
                  Observability
                </span>
<span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider border border-neutral-200 bg-white text-neutral-500 hover:border-[#44588C] hover:text-[#44588C] transition-colors cursor-default">
                  Root Cause Analysis
                </span>
<span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider border border-neutral-200 bg-white text-neutral-500 hover:border-[#44588C] hover:text-[#44588C] transition-colors cursor-default">
                  DevOps
                </span>
</div>
</div>
</div>

<div className="tilt-card group/card flex flex-col cursor-pointer hover:shadow-2xl hover:shadow-neutral-900/5 transition-all duration-500 overflow-hidden bg-white h-full border-neutral-100 border rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-sm" onclick="window.location.href='/soca-network'" role="button" style={{transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="card-glare rounded-2xl"></div>
<div className="relative w-full overflow-hidden rounded-lg bg-neutral-100 z-0 tilt-content aspect-video md:aspect-[16/10]" style={{}}>
<img alt="AI Interface" className="object-top img-sharp object-auto bg-center w-full h-full object-cover" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71ea167b-1add-40d4-b6a9-b67ed4d36e88_1600w.png"/>
</div>
<div className="flex flex-col px-4 pt-5 pb-6 flex-1 tilt-content gap-4" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex w-auto h-8 items-center justify-center">
<img alt="Soca" className="opacity-90 h-6 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14aaed47-9123-417a-9566-90c4aa17798f_320w.png"/>
</div>
</div>
<div className="w-6 h-6 flex items-center justify-center rounded-full bg-neutral-50 group-hover/card:bg-[#44588C] group-hover/card:text-white text-neutral-300 transition-all duration-300 transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline className="" points="7 7 17 7 17 17"></polyline>
</svg>
</div>
</div>
<div className="">
<h3 className="text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight leading-tight mb-2 group-hover-gradient-text transition-all">
                  Soca Network
                </h3>
<p className="leading-relaxed line-clamp-2 font-normal text-neutral-500 text-base">
                  A peer-to-peer social platform connecting job seekers with
                  company insiders for direct referrals.
                </p>
</div>

<div className="grid grid-cols-2 gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100 mt-auto">
<div className="flex flex-col gap-1">
<span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                    Growth
                  </span>
<span className="text-lg font-bold text-neutral-900 tracking-tight">
                    2k+ in 2 Mos
                  </span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                    Outcomes
                  </span>
<span className="text-lg font-bold text-neutral-900 tracking-tight">
                    70+ Referrals
                  </span>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-3">
<span className="inline-flex items-center uppercase hover:border-[#44588C] hover:text-[#44588C] transition-colors cursor-default text-xs font-semibold text-neutral-500 tracking-wider bg-white border-neutral-200 border rounded pt-1 pr-3 pb-1 pl-3">
                  Mobile
                </span>
<span className="inline-flex items-center uppercase hover:border-[#44588C] hover:text-[#44588C] transition-colors cursor-default text-xs font-semibold text-neutral-500 tracking-wider bg-white border-neutral-200 border rounded pt-1 pr-3 pb-1 pl-3">
                  Design system
                </span>
<span className="inline-flex items-center uppercase hover:border-[#44588C] hover:text-[#44588C] transition-colors cursor-default text-xs font-semibold text-neutral-500 tracking-wider bg-white border-neutral-200 border rounded pt-1 pr-3 pb-1 pl-3">
                  react
                </span>
</div>
</div>
</div>
<div className="tilt-card group/card flex flex-col cursor-pointer hover:shadow-2xl hover:shadow-neutral-900/5 transition-all duration-500 overflow-hidden bg-white h-full border-neutral-100 border rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-sm" onclick="window.location.href='/fiori-design-system'" role="button" style={{transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)', -MouseX: '96.10688487038044%', -MouseY: '55.72665552589394%'}}>
<div className="card-glare rounded-2xl"></div>
<div className="relative w-full overflow-hidden rounded-lg bg-neutral-100 z-0 tilt-content aspect-video md:aspect-[16/10]" style={{transform: 'translateZ(10px)'}}>
<img alt="EcoPulse" className="object-top img-sharp w-full h-full object-cover" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/69bcef7d-400a-48aa-b4f2-d7990102c1d1_1600w.png"/>
</div>
<div className="flex flex-col px-4 pt-5 pb-6 flex-1 tilt-content gap-4" style={{transform: 'translateZ(20px)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center">
<img alt="SAP" className="opacity-90 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74323c7b-eb30-4734-a657-f29bd60113e2_320w.png"/>
</div>
</div>
<div className="w-6 h-6 flex items-center justify-center rounded-full bg-neutral-50 group-hover/card:bg-[#44588C] group-hover/card:text-white text-neutral-300 transition-all duration-300 transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
</div>
<div className="">
<h3 className="leading-tight group-hover-gradient-text transition-all text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight mb-2">
                  SAP Fiori Design System
                </h3>
<p className="leading-relaxed line-clamp-2 font-normal text-neutral-500 text-base">
                  Defining native components for Android and conversational UI
                  patterns for AI assistants.
                </p>
</div>
<div className="grid grid-cols-2 gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100 mt-auto">
<div className="flex flex-col gap-1">
<span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                    Adoption
                  </span>
<span className="text-lg font-bold text-neutral-900 tracking-tight">
                    23+ Apps
                  </span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                    Comps / Patterns
                  </span>
<span className="text-lg font-bold text-neutral-900 tracking-tight">
                    32 / 12
                  </span>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-3">
<span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider border border-neutral-200 bg-white text-neutral-500 hover:border-[#44588C] hover:text-[#44588C] transition-colors cursor-default">
                  Design System
                </span>
<span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider border border-neutral-200 bg-white text-neutral-500 hover:border-[#44588C] hover:text-[#44588C] transition-colors cursor-default">
                  Conversational UI
                </span>
<span className="inline-flex items-center px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider border border-neutral-200 bg-white text-neutral-500 hover:border-[#44588C] hover:text-[#44588C] transition-colors cursor-default">
                  Mobile Design
                </span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 flex flex-col gap-x-6 gap-y-6" id="about">

<div className="main-section md:p-8 flex flex-col overflow-hidden backdrop-saturate-200 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.15),inset_0_0_40px_rgba(255,255,255,0.8)] transition-all duration-500 bg-gradient-to-br from-white/60 via-white/40 to-white/20 h-fit border-white/60 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_0_30px_rgba(255,255,255,0.7)] backdrop-blur-3xl">
<div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),inset_0_0_20px_0_rgba(255,255,255,0.1)]"></div>
<div className="tech-corner corner-tl"></div>
<div className="tech-corner corner-tr"></div>
<div className="tech-corner corner-bl"></div>
<div className="tech-corner corner-br"></div>
<div className="flex z-10 mb-6 relative items-center justify-between">
<h2 className="flex items-center gap-3 text-lg font-semibold text-neutral-900 tracking-tight">
              Experience
            </h2>
<a className="group flex items-center gap-2 hover:text-[#44588C] transition-colors hover:bg-white hover:border-neutral-200/50 hover:shadow-sm text-sm font-medium text-neutral-500 bg-white/50 border-transparent border rounded-full pt-1.5 pr-3 pb-1.5 pl-3" href="https://drive.google.com/file/d/1Ro533OFDME3qbqAlhDRbpSWvnUlQjWSm/view?usp=sharing" rel="noopener noreferrer" target="_blank">
<span className="">Resume</span>
<svg className="group-hover:translate-y-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</a>
</div>
<div className="flex flex-col gap-3 z-10 relative" id="experience-accordion">

<div className="accordion-item group border border-neutral-200/60 bg-white/40 hover:bg-white/60 rounded-xl overflow-hidden transition-all duration-300 is-active shadow-sm">
<button className="w-full flex items-center justify-between p-4 md:px-5 md:py-4 text-left cursor-pointer outline-none select-none" onclick="toggleAccordion(this)">
<div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 flex-1">
<h3 className="group-[.is-active]:text-[#44588C] transition-colors font-bold text-neutral-800">
                    Microsoft
                  </h3>
<div className="hidden md:block w-px h-4 bg-neutral-300"></div>
<span className="text-sm font-medium text-neutral-600">Product Designer</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100/80 px-2 py-1 rounded border border-neutral-200/60">
                    2022-2025
                  </span>
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200/80 flex items-center justify-center text-neutral-400 group-hover:text-[#44588C] group-hover:border-[#44588C]/30 transition-all group-[.is-active]:rotate-180 group-[.is-active]:text-[#44588C] group-[.is-active]:bg-white group-[.is-active]:shadow-md group-[.is-active]:border-[#44588C]/20">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</button>
<div className="accordion-content grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
<div className="overflow-hidden">
<div className="px-5 pb-5 pt-0 flex flex-col gap-2 border-t border-neutral-200/40 mt-2 pt-4">

<div className="p-4 rounded-lg bg-white/50 border border-white/60 hover:border-[#44588C]/20 transition-colors">
<span className="text-neutral-800 font-bold block mb-2 text-xs uppercase tracking-wide">
                        Azure Arc (Hybrid Cloud Management)
                      </span>
<div className="text-sm font-medium text-neutral-600 space-y-1.5">
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Centralized scattered services into Azure, reducing
                          daily management time by ~60%.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Enabled concurrent multi-script execution, cutting
                          troubleshooting cycles by 30%.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Automated the upgrade process, boosting patch
                          compliance to 70% and reducing manual effort by 85%.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Unified monitoring workflows, significantly increasing
                          user onboarding completion.
                        </p>
</div>
</div>
<div className="p-4 rounded-lg bg-white/50 border border-white/60 hover:border-[#44588C]/20 transition-colors">
<span className="text-neutral-800 font-bold block mb-2 text-xs uppercase tracking-wide">
                        Azure Governance
                      </span>
<div className="text-sm font-medium text-neutral-600 space-y-1.5">
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Visualized resource history and enabled batch actions,
                          decreasing related support tickets by 30%.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Implemented safe-delete and recovery with full audit
                          trails, increasing adoption by 20%.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Deployed an internal AI assistant to 1,200+ Azure
                          engineers.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Automated VM provisioning via policies, ensuring
                          seamless connection to monitoring.
                        </p>
</div>
</div>
<div className="p-4 rounded-lg bg-white/50 border border-white/60 hover:border-[#44588C]/20 transition-colors">
<span className="text-neutral-800 font-bold block mb-2 text-xs uppercase tracking-wide">
                        Azure Deployment
                      </span>
<div className="text-sm font-medium text-neutral-600 space-y-1.5">
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Helps users quickly find which Azure services support
                          Terraform, improving development efficiency.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Allows users to export deployment setups as code with
                          one click.
                        </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="accordion-item group border border-neutral-200/60 bg-white/40 hover:bg-white/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
<button className="w-full flex items-center justify-between p-4 md:px-5 md:py-4 text-left cursor-pointer outline-none select-none" onclick="toggleAccordion(this)">
<div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 flex-1">
<h3 className="group-[.is-active]:text-[#44588C] transition-colors font-bold text-neutral-800">
                    SAP
                  </h3>
<div className="hidden md:block w-px h-4 bg-neutral-300"></div>
<span className="text-sm font-medium text-neutral-600">
                    Product Designer
                  </span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100/80 px-2 py-1 rounded border border-neutral-200/60">
                    2020-2022
                  </span>
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200/80 flex items-center justify-center text-neutral-400 group-hover:text-[#44588C] group-hover:border-[#44588C]/30 transition-all group-[.is-active]:rotate-180 group-[.is-active]:text-[#44588C] group-[.is-active]:bg-white group-[.is-active]:shadow-md group-[.is-active]:border-[#44588C]/20">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</button>
<div className="accordion-content grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
<div className="overflow-hidden">
<div className="px-5 pb-5 pt-0 flex flex-col gap-2 border-t border-neutral-200/40 mt-2 pt-4">
<div className="p-4 rounded-lg bg-white/50 border border-white/60 hover:border-[#44588C]/20 transition-colors">
<span className="text-neutral-800 font-bold block mb-2 text-xs uppercase tracking-wide">
                        UX Design Specialist (Conversational)
                      </span>
<div className="text-sm font-medium text-neutral-600 space-y-1.5">
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Partnering with the SAP Conversational AI team to
                          define the pure voice control.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Led the recreating and managing of the CXD design
                          system on Figma (Web/IOS).
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Organized the component’s spec workshop to help the
                          team improve consistency.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Produced wireframes &amp; interactive prototypes for
                          the HR chatbot.
                        </p>
</div>
</div>
<div className="p-4 rounded-lg bg-white/50 border border-white/60 hover:border-[#44588C]/20 transition-colors">
<span className="text-neutral-800 font-bold block mb-2 text-xs uppercase tracking-wide">
                        UX Design Specialist (Fiori Android)
                      </span>
<div className="text-sm font-medium text-neutral-600 space-y-1.5">
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Designed and iterated the Fiori Android onboarding,
                          privacy notice, and AR annotation.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Partnered with UX writer and developer on the design
                          guideline.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Explored the Fiori Fundamental library's design for
                          consistent Fiori apps.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Contributed to UX illustration library and guideline.
                        </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="accordion-item group border border-neutral-200/60 bg-white/40 hover:bg-white/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
<button className="w-full flex items-center justify-between p-4 md:px-5 md:py-4 text-left cursor-pointer outline-none select-none" onclick="toggleAccordion(this)">
<div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 flex-1">
<h3 className="group-[.is-active]:text-[#44588C] transition-colors font-bold text-neutral-800">
                    Soca
                  </h3>
<div className="hidden md:block w-px h-4 bg-neutral-300"></div>
<span className="text-sm font-medium text-neutral-600">
                    Lead Product Designer
                  </span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100/80 px-2 py-1 rounded border border-neutral-200/60">
                    2020-2023
                  </span>
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200/80 flex items-center justify-center text-neutral-400 group-hover:text-[#44588C] group-hover:border-[#44588C]/30 transition-all group-[.is-active]:rotate-180 group-[.is-active]:text-[#44588C] group-[.is-active]:bg-white group-[.is-active]:shadow-md group-[.is-active]:border-[#44588C]/20">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</button>
<div className="accordion-content grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
<div className="overflow-hidden">
<div className="px-5 pb-5 pt-0 flex flex-col gap-2 border-t border-neutral-200/40 mt-2 pt-4">
<div className="p-4 rounded-lg bg-white/50 border border-white/60 hover:border-[#44588C]/20 transition-colors">
<span className="text-neutral-800 font-bold block mb-2 text-xs uppercase tracking-wide">
                        Professional Community App
                      </span>
<div className="text-sm font-medium text-neutral-600 space-y-1.5">
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Collaborated with 2 designers to ship iOS and Android
                          apps from scratch, reaching 4000+ users.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Lead the design team delivered prototypes, 200+ UI
                          screens, and a design system.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Assist user research and conducted usability testings
                          twice to iterate design.
                        </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="accordion-item group border border-neutral-200/60 bg-white/40 hover:bg-white/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
<button className="w-full flex items-center justify-between p-4 md:px-5 md:py-4 text-left cursor-pointer outline-none select-none" onclick="toggleAccordion(this)">
<div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 flex-1">
<h3 className="group-[.is-active]:text-[#44588C] transition-colors font-bold text-neutral-800">
                    Siemens Healthineers
                  </h3>
<div className="hidden md:block w-px h-4 bg-neutral-300"></div>
<span className="text-sm font-medium text-neutral-600">
                    Product Designer
                  </span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100/80 px-2 py-1 rounded border border-neutral-200/60">
                    2019-2020
                  </span>
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200/80 flex items-center justify-center text-neutral-400 group-hover:text-[#44588C] group-hover:border-[#44588C]/30 transition-all group-[.is-active]:rotate-180 group-[.is-active]:text-[#44588C] group-[.is-active]:bg-white group-[.is-active]:shadow-md group-[.is-active]:border-[#44588C]/20">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</button>
<div className="accordion-content grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
<div className="overflow-hidden">
<div className="px-5 pb-5 pt-0 flex flex-col gap-2 border-t border-neutral-200/40 mt-2 pt-4">
<div className="p-4 rounded-lg bg-white/50 border border-white/60 hover:border-[#44588C]/20 transition-colors">
<span className="text-neutral-800 font-bold block mb-2 text-xs uppercase tracking-wide">
                        AI Product
                      </span>
<div className="text-sm font-medium text-neutral-600 space-y-1.5">
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Collaborated with cross-functional teams on three
                          enterprise projects.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Designed Hi-fi prototype &amp; navigation flow for
                          data-dense web dashboards.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Advocated for, built &amp; shipped a component-based
                          design system.
                        </p>
<p className="pl-3 border-l-2 border-[#72A29D]/30">
                          Created a style guide for best practices in layout
                          &amp; typography.
                        </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="main-section flex flex-col group/stack transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] origin-center md:origin-bottom-right overflow-hidden backdrop-saturate-200 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.15),inset_0_0_40px_rgba(255,255,255,0.8)] hover:z-50 bg-gradient-to-br from-white/60 via-white/40 to-white/20 h-32 md:h-36 border-white/60 border rounded-xl relative shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_0_30px_rgba(255,255,255,0.7)] backdrop-blur-3xl items-center justify-center">
<div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),inset_0_0_20px_0_rgba(255,255,255,0.1)]"></div>
<div className="tech-corner corner-tl"></div>
<div className="tech-corner corner-tr"></div>
<div className="tech-corner corner-bl"></div>
<div className="tech-corner corner-br"></div>
<div className="card-glare"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-4 pointer-events-none">
<span className="uppercase text-xs font-bold text-neutral-500 tracking-[0.2em]">
              Stack
            </span>
<div className="marquee-container w-full overflow-hidden">
<div className="marquee-content flex gap-8 w-max items-center opacity-60">
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Product Design
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  User Research
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Prototyping
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Design Systems
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Strategy
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Product Design
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  User Research
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Prototyping
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Design Systems
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Strategy
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Product Design
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  User Research
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Prototyping
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Design Systems
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Strategy
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Product Design
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  User Research
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Prototyping
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Design Systems
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Strategy
                </span>
<span className="text-neutral-300">•</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 pb-32 pt-12 text-center opacity-40 hover:opacity-100 transition-opacity duration-500">
<p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
          © 2025 Mianying Chen. All Rights Reserved.
        </p>
</div>
</main>

<div className="fixed left-1/2 -translate-x-1/2 z-[9999] w-auto max-w-[90vw] pointer-events-none bottom-6 md:bottom-10" id="floating-nav">
<nav className="pointer-events-auto flex gap-2 transform transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white/95 to-white/90 border ring-white/40 ring-1 rounded-full pt-2 pr-2 pb-2 pl-2 shadow-[0_12px_25px_-8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl gap-x-2 gap-y-2 items-center border-[#44588C]">
<a className="nav-link hover:text-white transition-all duration-300 text-sm font-semibold rounded-full pt-2 pr-4 pb-2 pl-4" href="#">
          Home
        </a>
<a className="nav-link px-4 py-2 text-sm font-semibold hover:text-white rounded-full transition-all duration-300" href="#work">
          Work
        </a>
<a className="nav-link px-4 py-2 text-sm font-semibold hover:text-white rounded-full transition-all duration-300" href="#about">
          About
        </a>
<div className="w-px h-5 mx-1 bg-neutral-300"></div>
<div className="flex items-center gap-2 shrink-0">

<a className="group/social hover:bg-[#44588C] hover:text-white transition-all duration-300 border-transparent border rounded-full pt-2.5 pr-2.5 pb-2.5 pl-2.5" href="https://www.linkedin.com/in/mianying-chen-212b9a148/" target="_blank">
<svg className="transition-colors text-neutral-600 group-hover/social:text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect className="" height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>

<button className="group/social hover:bg-[#44588C] hover:text-white transition-all duration-300 cursor-pointer border-transparent border rounded-full pt-2.5 pr-2.5 pb-2.5 pl-2.5" onclick="navigator.clipboard.writeText('mianyingdesign@gmail.com');const t=document.getElementById('toast');t.classList.add('show');setTimeout(()=&gt;t.classList.remove('show'),3000);" role="button">
<svg className="transition-colors text-neutral-600 group-hover/social:text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="16" rx="2" width="20" x="2" y="4"></rect>
<path className="" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</button>
<button aria-label="Ask Mianying" className="group/chat-btn flex hover:scale-105 transition-transform duration-300 cursor-pointer border-none text-white w-9 h-9 rounded-full ml-2 shadow-md items-center justify-center" id="chatbot-toggle" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(148, 163, 184, 1), rgba(71, 85, 105, 1))', -BorderRadiusBefore: '9999px'}}>
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
<path d="M20 3v4"></path>
<path d="M22 5h-4"></path>
</svg>
</button>
</div>
</nav>
</div>


<div id="chatbot-widget">


<div id="chatbot-window">
<div className="chat-header">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800/5 border border-white/40 flex items-center justify-center text-slate-700">
<svg className="text-[#44588C]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
<path d="M20 3v4"></path>
<path d="M22 5h-4"></path>
</svg>
</div>
<div className="flex flex-col">
<h3 className="text-slate-800">Ask Mianying about his design work</h3>
</div>
</div>
<div className="chat-controls flex items-center gap-1">
<button aria-label="Restart Chat" id="chatbot-refresh">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
<path d="M16 21h5v-5"></path>
</svg>
</button>
<button aria-label="Close Chat" id="chatbot-close">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
</div>

<div className="chat-messages" id="chat-messages">
<div className="message ai">
            Hello! I'm Mianying's portfolio assistant. I can help you uncover
            details about his design process, impact metrics at Microsoft &amp;
            SAP, or his technical stack. What would you like to know?
          </div>
</div>

<div id="suggestion-container">
<div className="suggestion-label">Try to ask</div>
<div className="suggestion-chips" id="suggestion-chips">
<button className="chip" onclick="window.sendUserMessage('Tell me about the Azure Arc project.')">
              Tell me about the Azure Arc project.
            </button>
<button className="chip" onclick="window.sendUserMessage('How does he approach Design Systems?')">
              How does he approach Design Systems?
            </button>
<button className="chip" onclick="window.sendUserMessage('What are his key achievements?')">
              What are his key achievements?
            </button>
<button className="chip" onclick="window.sendUserMessage('What are Mianying\'s interests?')">
              What are Mianying's interests?
            </button>
</div>
</div>

<div className="input-area">
<div className="chat-input-wrapper">
<textarea className="chat-input" id="chat-input" placeholder="Ask a question..." rows="1"></textarea>
<button aria-label="Send" className="send-btn" id="send-btn">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="22" x2="11" y1="2" y2="13"></line>
<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
</svg>
</button>
</div>
</div>
</div>
</div>

<style>
      /* ENHANCED GLOW ANIMATION - NO SCALE */
      @keyframes playful-wiggle {
      0%, 100% {
        transform: rotate(0deg);
        box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        border-color: rgba(54, 70, 112, 0.15);
      }
      /* Wiggle with glow */
      5% {
        transform: rotate(-10deg);
        border-color: #72A29D;
        box-shadow: 0 0 15px rgba(114, 162, 157, 0.6);
      }
      10% {
        transform: rotate(10deg);
        border-color: #44588C;
        box-shadow: 0 0 15px rgba(68, 88, 140, 0.6);
      }
      15% {
        transform: rotate(-10deg);
        border-color: #72A29D;
        box-shadow: 0 0 15px rgba(114, 162, 157, 0.6);
      }
      20% {
        transform: rotate(0deg);
        border-color: rgba(54, 70, 112, 0.15);
        box-shadow: 0 2px 6px rgba(0,0,0,0.05);
      }
      /* Pulse with glow */
      50% {
        border-color: #44588C;
        box-shadow: 0 0 25px rgba(68, 88, 140, 0.4);
      }
      55% { box-shadow: 0 2px 6px rgba(0,0,0,0.05); }
      60% {
        border-color: #44588C;
        box-shadow: 0 0 25px rgba(68, 88, 140, 0.4);
      }
      65% { }
      }
      #chatbot-toggle {
        animation: playful-wiggle 5s infinite ease-in-out !important;
      }
      #chatbot-toggle.stop-anim {
        animation: none !important;
      }
    </style>

<style>
      /* USER FEEDBACK: Adjust Chatbot Font Sizes */
      .suggestion-label {
        font-size: 11px !important;
        text-transform: uppercase !important;
        letter-spacing: 0.05em !important;
        opacity: 0.6 !important;
        font-weight: 700 !important;
      }
      .chip {
        font-size: 14px !important;
        padding: 10px 16px !important;
        line-height: 1.5 !important;
      }
    </style>
<style>
      /* UPDATED ANIMATION: 1s INTERVAL */
      @keyframes playful-wiggle {
        0%, 100% {
          transform: rotate(0deg);
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
          border-color: rgba(54, 70, 112, 0.15);
        }
        10% {
          transform: rotate(-10deg);
          border-color: #72A29D;
          box-shadow: 0 0 15px rgba(114, 162, 157, 0.6);
        }
        20% {
          transform: rotate(10deg);
          border-color: #44588C;
          box-shadow: 0 0 15px rgba(68, 88, 140, 0.6);
        }
        30% {
          transform: rotate(-10deg);
          border-color: #72A29D;
          box-shadow: 0 0 15px rgba(114, 162, 157, 0.6);
        }
        40% {
          transform: rotate(0deg);
          border-color: rgba(54, 70, 112, 0.15);
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
      }
      #chatbot-toggle {
        animation: playful-wiggle 2s infinite ease-in-out !important;
      }
    </style>




    </>
  );
}
