import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
coral: '#e94560',
coralDark: '#be364d',
dark: '#0a1628',
teal: '#0d9488',
gold: '#f59e0b',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
poppins: ['Poppins', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- 1. COUNTDOWN TIMER SYSTEM ---
            function startCountdown() {
                const now = new Date();
                const tonight = new Date();
                tonight.setHours(23, 59, 59, 0);
                
                // If it's past midnight (edge case before reload), set to next midnight
                if (now > tonight) tonight.setDate(tonight.getDate() + 1);
                
                const diff = tonight - now;
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                
                const hStr = hours.toString().padStart(2, '0');
                const mStr = minutes.toString().padStart(2, '0');
                const sStr = seconds.toString().padStart(2, '0');
                const compactStr = `${hStr}:${mStr}:${sStr}`;

                // Update full timers
                document.querySelectorAll('.timer-hrs').forEach(el => el.textContent = hStr);
                document.querySelectorAll('.timer-min').forEach(el => el.textContent = mStr);
                document.querySelectorAll('.timer-sec').forEach(el => el.textContent = sStr);
                
                // Update compact inline timers
                document.querySelectorAll('.timer-compact').forEach(el => el.textContent = compactStr);
            }
            setInterval(startCountdown, 1000);
            startCountdown();

            // --- 2. SPOTS REMAINING LOGIC ---
            function getSpots() {
                const stored = localStorage.getItem('sah_spots');
                const storedTime = localStorage.getItem('sah_spots_time');
                const now = Date.now();
                
                if (!stored || !storedTime || (now - parseInt(storedTime)) > 86400000) {
                    localStorage.setItem('sah_spots', '7');
                    localStorage.setItem('sah_spots_time', now.toString());
                    return 7;
                }
                
                const elapsed = now - parseInt(storedTime);
                const decrements = Math.floor(elapsed / (1000 * 60 * 55)); // Decrease every ~55 mins
                const spots = Math.max(2, 7 - decrements); // Never go below 2
                
                // Sync specific data logic
                if (spots !== parseInt(stored)) {
                    localStorage.setItem('sah_spots', spots.toString());
                }
                return spots;
            }
            
            function updateSpotsDOM() {
                const spots = getSpots();
                document.querySelectorAll('.spot-count').forEach(el => {
                    if(el.textContent !== spots.toString()) el.textContent = spots;
                });
            }
            updateSpotsDOM();
            setInterval(updateSpotsDOM, 60000);

            // --- 3. DYNAMIC TEXT & SOCIAL PROOF ---
            // Batch Month
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            document.querySelectorAll('.batch-month').forEach(el => el.textContent = months[new Date().getMonth()]);
            
            // Random 24h Booked
            const booked24h = Math.floor(Math.random() * (47 - 23 + 1) + 23);
            document.querySelectorAll('.booked-24h').forEach(el => el.textContent = booked24h);

            // Top Bar Rotating Messages
            const urgencyMessages = [
                `⚠️ Only <span class="spot-count tabular-nums font-semibold">${getSpots()}</span> Consultation Spots Left This Month — Book Now Before They're Gone`,
                `🔥 Price Increases to ₹999 After Midnight Tonight — Lock ₹199 Now`,
                `⏰ <span class="viewer-count font-semibold tabular-nums">24</span> People Are Viewing This Page Right Now — Spots Filling Fast`
            ];
            let msgIndex = 0;
            const topBarMsgEl = document.getElementById('top-bar-msg');
            setInterval(() => {
                topBarMsgEl.style.opacity = '0';
                setTimeout(() => {
                    msgIndex = (msgIndex + 1) % urgencyMessages.length;
                    topBarMsgEl.innerHTML = urgencyMessages[msgIndex];
                    topBarMsgEl.style.opacity = '1';
                    updateViewers(); // re-inject dynamic viewer number
                }, 500);
            }, 8000);

            // Live Viewers Fluctuation
            let viewers = Math.floor(Math.random() * 25) + 14;
            function updateViewers() {
                document.querySelectorAll('.viewer-count').forEach(el => el.textContent = viewers);
            }
            updateViewers();
            setInterval(() => {
                viewers += Math.floor(Math.random() * 7) - 3; 
                viewers = Math.max(12, Math.min(42, viewers));
                updateViewers();
            }, 45000);

            // --- 4. TOAST NOTIFICATIONS ---
            const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow'];
            const names = ['Priya', 'Rahul', 'Sneha', 'Amit', 'Neha', 'Vikram', 'Anjali', 'Rohan', 'Pooja', 'Arjun'];
            const toastContainer = document.getElementById('toast-container');
            let toastQueue = [];
            let isToastActive = false;

            function showToast() {
                if(isToastActive) return;
                isToastActive = true;
                
                const city = cities[Math.floor(Math.random() * cities.length)];
                const name = names[Math.floor(Math.random() * names.length)];
                const minsAgo = Math.floor(Math.random() * 15) + 1;
                
                const toast = document.createElement('div');
                toast.className = 'bg-white rounded-xl p-3 md:p-4 shadow-[0_8px_30px_rgba(0,0,0,0.2)] border-l-4 border-green-600 flex items-center gap-3 w-max max-w-[90vw] animate-[toastSlideIn_0.4s_ease-out_forwards] pointer-events-auto';
                toast.innerHTML = `
                    <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                        <iconify-icon icon="solar:check-circle-linear" class="text-xl"></iconify-icon>
                    </div>
                    <div class="flex flex-col">
                        <span class="font-sans text-xs md:text-sm font-semibold text-slate-800">${name} from ${city}</span>
                        <span class="font-sans text-[0.65rem] md:text-xs text-slate-500">just booked their consultation</span>
                        <span class="font-sans text-[0.6rem] text-slate-400 mt-0.5">${minsAgo} min ago</span>
                    </div>
                `;
                
                toastContainer.appendChild(toast);
                
                setTimeout(() => {
                    toast.style.animation = 'toastFadeOut 0.3s ease-in forwards';
                    setTimeout(() => {
                        toast.remove();
                        isToastActive = false;
                    }, 300);
                }, 5000);
            }
            
            // Initial toast delay
            setTimeout(() => {
                showToast();
                setInterval(() => {
                    if(Math.random() > 0.3) showToast(); // Randomize appearance
                }, 75000);
            }, 20000);

            // --- 5. SCROLL & PROGRESS LOGIC ---
            const progressBar = document.getElementById('scroll-progress');
            const floatingSidebar = document.getElementById('floating-sidebar');
            const notifyContainer = document.getElementById('notification-container');
            let scrollLevels = { 25: false, 50: false, 75: false, 90: false };
            let sidebarClosed = sessionStorage.getItem('sah_sidebar_closed') === 'true';

            function showScrollNotification(msg) {
                const notify = document.createElement('div');
                notify.className = 'bg-dark/95 border border-teal/30 rounded-xl py-2 px-4 shadow-xl backdrop-blur-sm animate-[slideDownNotify_0.4s_ease-out_forwards] whitespace-nowrap text-center';
                notify.innerHTML = `<span class="text-white font-poppins text-xs font-medium">${msg}</span>`;
                notifyContainer.appendChild(notify);
                
                setTimeout(() => {
                    notify.style.opacity = '0';
                    notify.style.transform = 'translate(-50%, -100%)';
                    notify.style.transition = 'all 0.4s ease-in';
                    setTimeout(() => notify.remove(), 400);
                }, 4000);
            }

            window.addEventListener('scroll', () => {
                const scrollTop = window.scrollY;
                const docHeight = document.body.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;
                
                // Progress bar
                if(progressBar) progressBar.style.width = `${scrollPercent}%`;
                
                // Desktop Sidebar Reveal
                if (window.innerWidth >= 1280 && scrollPercent > 50 && !sidebarClosed) {
                    floatingSidebar.style.transform = 'translateX(0)';
                }

                // Progressive Notifications
                const spots = getSpots();
                if (scrollPercent >= 25 && !scrollLevels[25]) {
                    scrollLevels[25] = true;
                    showScrollNotification("🔥 You're exploring — spots are limited, don't wait too long");
                }
                if (scrollPercent >= 50 && !scrollLevels[50]) {
                    scrollLevels[50] = true;
                    showScrollNotification(`⚠️ While you're reading, ${Math.floor(Math.random()*5)+2} others are booking — ${spots} spots left`);
                }
                if (scrollPercent >= 75 && !scrollLevels[75]) {
                    scrollLevels[75] = true;
                    showScrollNotification("⏰ You're almost there — lock your ₹199 price before midnight");
                }
                if (scrollPercent >= 90 && !scrollLevels[90]) {
                    scrollLevels[90] = true;
                    showScrollNotification(`🚨 FINAL CHANCE: Only ${spots} spots remaining at ₹199`);
                }
            }, { passive: true });

            document.getElementById('close-sidebar')?.addEventListener('click', () => {
                floatingSidebar.style.transform = 'translateX(110%)';
                sessionStorage.setItem('sah_sidebar_closed', 'true');
                sidebarClosed = true;
            });

            // --- 6. BONUS VALUE ANIMATION ---
            const bonusSection = document.getElementById('bonus-counter-container');
            const animatedValue = document.getElementById('animated-bonus-value');
            let hasAnimated = false;

            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    let start = 0;
                    const target = 10093;
                    const duration = 2000;
                    const startTime = performance.now();

                    function animate(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out quad
                        const easeProgress = progress * (2 - progress);
                        const currentVal = Math.floor(easeProgress * target);
                        
                        animatedValue.textContent = currentVal.toLocaleString('en-IN');
                        
                        if (progress < 1) requestAnimationFrame(animate);
                        else animatedValue.textContent = "10,093";
                    }
                    requestAnimationFrame(animate);
                }
            }, { threshold: 0.5 });
            if(bonusSection) observer.observe(bonusSection);

            // --- 7. EXIT INTENT POPUP ---
            const exitOverlay = document.getElementById('exit-overlay');
            const exitModal = document.getElementById('exit-modal');
            let exitShown = sessionStorage.getItem('sah_exit_shown') === 'true';

            function showExitPopup() {
                if(exitShown) return;
                exitShown = true;
                sessionStorage.setItem('sah_exit_shown', 'true');
                
                exitOverlay.classList.remove('hidden');
                exitOverlay.classList.add('flex');
                // Trigger reflow
                void exitOverlay.offsetWidth;
                
                exitOverlay.style.opacity = '1';
                exitModal.style.transform = 'scale(1)';
            }

            function closeExitPopup() {
                exitOverlay.style.opacity = '0';
                exitModal.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    exitOverlay.classList.add('hidden');
                    exitOverlay.classList.remove('flex');
                }, 300);
            }

            // Desktop Mouse Leave
            document.addEventListener('mouseleave', (e) => {
                if (e.clientY < 10 && window.innerWidth > 768) showExitPopup();
            });

            // Mobile/Inactivity Fallback (45s)
            let inactivityTimer = setTimeout(() => {
                if(!exitShown) showExitPopup();
            }, 45000);
            
            // Reset inactivity on click/scroll
            function resetTimer() {
                clearTimeout(inactivityTimer);
                if(!exitShown) inactivityTimer = setTimeout(showExitPopup, 60000);
            }
            document.addEventListener('click', resetTimer, { passive: true });
            document.addEventListener('scroll', resetTimer, { passive: true });

            // Exit Popup Close Handlers
            document.getElementById('close-exit')?.addEventListener('click', closeExitPopup);
            document.getElementById('decline-exit')?.addEventListener('click', (e) => {
                e.preventDefault();
                closeExitPopup();
            });
            document.getElementById('exit-cta')?.addEventListener('click', closeExitPopup);

            // --- 8. READING TIME BADGE ---
            const readingBadge = document.getElementById('reading-badge');
            const readMinsEl = document.getElementById('read-mins');
            let readMinutes = 0;
            
            setInterval(() => {
                readMinutes++;
                if (readMinutes >= 3 && window.innerWidth > 768) {
                    readMinsEl.textContent = readMinutes;
                    readingBadge.classList.remove('hidden');
                    setTimeout(() => readingBadge.style.opacity = '1', 10);
                }
            }, 60000);

            readingBadge?.addEventListener('click', () => {
                readingBadge.style.opacity = '0';
                setTimeout(() => readingBadge.remove(), 300);
            });
            
            // Smooth Scroll for specific anchor links to offset sticky header
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if(targetId === '#') return;
                    const targetNode = document.querySelector(targetId);
                    if (targetNode) {
                        const headerOffset = 60;
                        const elementPosition = targetNode.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[42px] left-0 w-full h-[3px] bg-white/10 z-50 md:hidden">
<div className="h-full bg-gradient-to-r from-coral to-orange-500 w-0 transition-all duration-150" id="scroll-progress"></div>
</div>

<div className="fixed top-0 left-0 w-full bg-gradient-to-r from-coral to-orange-500 z-50 h-[42px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-[200%] -translate-x-full animate-[shimmer_3s_infinite]"></div>
<p className="text-white font-poppins text-xs md:text-sm font-medium transition-opacity duration-500 flex items-center gap-2" id="top-bar-msg">
            ⚠️ Only <span className="spot-count tabular-nums font-semibold"></span> Consultation Spots Left This Month — Book Now Before They're Gone
        </p>
</div>

<nav className="pt-[60px] pb-4 px-6 max-w-6xl mx-auto flex justify-between items-center">
<div className="font-serif text-xl font-semibold tracking-tighter text-dark">SAH.</div>
<div className="hidden md:flex items-center gap-2 bg-coral/10 text-coral px-3 py-1.5 rounded-full text-xs font-poppins font-medium">
<div className="w-2 h-2 rounded-full bg-coral animate-live-pulse"></div>
            Live
        </div>
</nav>

<section className="max-w-4xl mx-auto px-6 pt-12 pb-20 text-center flex flex-col items-center">

<div className="inline-flex items-center gap-2 bg-dark text-white px-4 py-2 rounded-full mb-8 shadow-sm">
<div className="w-2 h-2 rounded-full bg-red-500 animate-live-pulse"></div>
<span className="font-poppins text-xs font-medium">LIVE: Only <span className="spot-count text-coral text-sm font-bold tabular-nums"></span> spots remaining this month</span>
</div>
<h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-dark mb-6 leading-tight">
            Heal Your Anxiety at the Root Cause Without Temporary Fixes
        </h1>
<p className="text-lg text-slate-600 mb-10 max-w-2xl font-medium">
            Discover the customized 4-pillar roadmap to permanent calm. No lifelong therapy. No harmful dependencies.
        </p>

<div className="flex flex-col items-center w-full max-w-md relative group">

<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark/95 text-gold px-3 py-1.5 rounded-md text-xs font-poppins font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                ⚡ Only <span className="spot-count tabular-nums"></span> spots left!
            </div>
<a className="cta-button w-full bg-gradient-to-r from-coral to-coralDark text-white font-poppins font-semibold text-base py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2" href="#pricing">
                Book your consultation call
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>

<div className="mt-4 flex flex-col items-center gap-1.5 text-xs text-slate-500 w-full">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:lock-linear"></iconify-icon>
<span>100% Money-Back Guaranteed · Consultation @ ₹199 Only</span>
</div>
<div className="flex items-center gap-1.5 text-coral font-medium bg-coral/5 px-3 py-1 rounded-full">
<iconify-icon className="text-sm" icon="solar:clock-circle-linear"></iconify-icon>
<span>Only <span className="spot-count tabular-nums"></span> spots left · Price goes to ₹999 after midnight</span>
</div>
</div>
</div>

<div className="mt-12 bg-coral/10 border border-coral/30 rounded-xl p-4 md:p-6 w-full max-w-md flex flex-col items-center">
<p className="text-coral font-poppins text-xs font-medium mb-4 flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:alarm-linear"></iconify-icon>
                This Offer Expires Tonight At Midnight
            </p>
<div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
<div className="flex flex-col items-center bg-dark/90 border border-coral/40 rounded-lg p-3 min-w-[70px]">
<span className="timer-hrs text-white font-poppins text-2xl font-bold tabular-nums">00</span>
<span className="text-white/50 font-poppins text-[0.65rem] uppercase tracking-widest mt-1">Hrs</span>
</div>
<div className="text-coral text-xl font-semibold animate-colon">:</div>
<div className="flex flex-col items-center bg-dark/90 border border-coral/40 rounded-lg p-3 min-w-[70px]">
<span className="timer-min text-white font-poppins text-2xl font-bold tabular-nums">00</span>
<span className="text-white/50 font-poppins text-[0.65rem] uppercase tracking-widest mt-1">Min</span>
</div>
<div className="text-coral text-xl font-semibold animate-colon">:</div>
<div className="flex flex-col items-center bg-dark/90 border border-coral/40 rounded-lg p-3 min-w-[70px]">
<span className="timer-sec text-white font-poppins text-2xl font-bold tabular-nums">00</span>
<span className="text-white/50 font-poppins text-[0.65rem] uppercase tracking-widest mt-1">Sec</span>
</div>
</div>
<p className="text-slate-500 text-xs text-center">After this timer hits zero, the price increases to ₹999</p>
</div>

<div className="mt-8 inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-full shadow-sm">
<div className="w-2 h-2 rounded-full bg-green-500 animate-live-pulse"></div>
<span className="font-sans text-xs"><span className="viewer-count font-semibold tabular-nums"></span> people are viewing this page right now</span>
</div>
</section>

<div className="w-full h-12 bg-coral/5 flex items-center justify-center border-y border-coral/10">
<p className="text-coral text-xs font-poppins font-medium flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:hourglass-linear"></iconify-icon>
            Limited Time: ₹199 pricing won't last — regular price ₹999
        </p>
</div>

<section className="max-w-5xl mx-auto px-6 py-20">
<h2 className="font-serif text-3xl font-semibold tracking-tight text-center text-dark mb-12">Real Stories of Healing</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-b border-slate-200 pb-12">
<div className="text-center">
<div className="text-3xl font-serif font-semibold text-dark">500+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Lives Changed</div>
</div>
<div className="text-center">
<div className="text-3xl font-serif font-semibold text-dark">98%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Success Rate</div>
</div>
<div className="text-center">
<div className="text-3xl font-serif font-semibold text-dark">24/7</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Support</div>
</div>

<div className="text-center relative">
<div className="text-3xl font-serif font-semibold text-coral">47+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Booked This Week</div>
<div className="absolute -top-2 right-4 md:-right-2 w-2 h-2 rounded-full bg-coral animate-live-pulse"></div>
</div>
</div>
<div className="flex flex-col items-center mt-12 group relative w-full max-w-md mx-auto">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark/95 text-gold px-3 py-1.5 rounded-md text-xs font-poppins font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                ⚡ Only <span className="spot-count tabular-nums"></span> spots left!
            </div>
<a className="cta-button w-full bg-dark text-white font-poppins font-semibold text-sm py-4 px-8 rounded-xl shadow-md flex items-center justify-center gap-2" href="#pricing">
                Start Your Healing Journey
            </a>
<div className="mt-4 flex flex-col items-center gap-2 text-xs w-full">
<div className="flex gap-4 text-slate-500 justify-center flex-wrap">
<span className="flex items-center gap-1"><iconify-icon className="text-teal" icon="solar:check-circle-linear"></iconify-icon> ₹199 Only</span>
<span className="flex items-center gap-1"><iconify-icon className="text-teal" icon="solar:check-circle-linear"></iconify-icon> Money-Back</span>
</div>
<div className="flex items-center gap-2 text-coral font-medium mt-1">
<div className="w-1.5 h-1.5 rounded-full bg-coral animate-live-pulse"></div>
<span className="viewer-count tabular-nums"></span> people are viewing this page right now
                </div>
</div>
</div>
</section>

<div className="w-full py-6 bg-gradient-to-r from-coral/15 to-orange-500/15 border-y border-coral/30">
<div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6">
<div className="flex items-center gap-3">
<div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-live-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
<span className="text-xs font-bold text-dark tracking-widest uppercase bg-white/50 px-2 py-0.5 rounded">Live</span>
</div>
<p className="text-dark font-poppins text-sm font-medium text-center">
                ⚡ <span className="booked-24h font-semibold tabular-nums"></span> people booked in the last 24 hours — Only <span className="spot-count text-coral font-bold tabular-nums"></span> spots left at ₹199
            </p>
<div className="bg-coral/10 text-coral border border-coral/20 px-3 py-1.5 rounded-full font-poppins text-xs font-medium inline-flex items-center gap-1.5">
<iconify-icon icon="solar:stopwatch-linear"></iconify-icon>
                Expires in <span className="timer-compact tabular-nums font-semibold tracking-wider"></span>
</div>
</div>
</div>

<section className="max-w-4xl mx-auto px-6 py-20 bg-white rounded-3xl shadow-sm my-12 border border-slate-100">
<h2 className="font-serif text-3xl font-semibold tracking-tight text-center text-dark mb-10">The 4-Pillar Roadmap</h2>
<div className="flex flex-col items-center group relative w-full max-w-md mx-auto mt-12">

<div className="mb-4 bg-gold/15 border border-gold/30 text-gold px-4 py-1.5 rounded-full text-xs font-poppins flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:diploma-linear"></iconify-icon>
<span className="batch-month font-medium"></span> Batch — Closing Soon
            </div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark/95 text-gold px-3 py-1.5 rounded-md text-xs font-poppins font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                ⚡ Only <span className="spot-count tabular-nums"></span> spots left!
            </div>
<a className="cta-button w-full bg-gradient-to-r from-coral to-coralDark text-white font-poppins font-semibold text-sm py-4 px-8 rounded-xl flex items-center justify-center gap-2" href="#pricing">
                Book Today for ₹199
            </a>
<div className="mt-4 flex flex-col items-center gap-1.5 w-full">
<p className="text-xs text-slate-500">✅ Unique Root Cause ✅ Custom Roadmap</p>
<p className="text-xs text-gold font-medium bg-gold/5 px-3 py-1 rounded-full mt-1">
                    🎁 ₹10,000+ in free bonuses included — only for next <span className="spot-count tabular-nums"></span> bookings
                </p>
</div>
</div>
</section>

<div className="w-full h-12 bg-coral/5 flex items-center justify-center border-y border-coral/10">
<p className="text-coral text-xs font-poppins font-medium flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:gift-linear"></iconify-icon>
            Free bonuses worth ₹10,093 disappear when slots are filled
        </p>
</div>

<section className="bg-dark text-white py-24 relative overflow-hidden" id="bonuses">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl font-semibold tracking-tight mb-6">Everything You Get Today</h2>

<div className="inline-block bg-white/5 border border-white/10 rounded-2xl p-6 md:px-12 backdrop-blur-sm" id="bonus-counter-container">
<div className="font-serif text-3xl text-gold font-semibold mb-2 flex items-center justify-center gap-1">
                        Total Bonus Value: ₹<span className="tabular-nums" id="animated-bonus-value">0</span>
</div>
<div className="text-teal text-sm font-medium">Yours FREE with today's ₹199 consultation</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col">
<div className="w-10 h-10 rounded-lg bg-teal/20 text-teal flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<h3 className="font-sans text-base font-semibold mb-2">Anxiety Trigger Tracker</h3>
<p className="text-slate-400 text-xs mb-6 flex-grow">A daily framework to identify subconscious triggers.</p>

<div className="mt-auto pt-4 border-t border-white/10 text-orange-500 text-[0.65rem] font-poppins italic flex items-center gap-1.5">
<iconify-icon icon="solar:lock-linear"></iconify-icon>
                        Available for next <span className="spot-count tabular-nums font-semibold"></span> bookings only
                    </div>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col">
<div className="w-10 h-10 rounded-lg bg-teal/20 text-teal flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:headphones-linear"></iconify-icon>
</div>
<h3 className="font-sans text-base font-semibold mb-2">Somatic Release Audios</h3>
<p className="text-slate-400 text-xs mb-6 flex-grow">Guided sessions to release trapped nervous system energy.</p>
<div className="mt-auto pt-4 border-t border-white/10 text-orange-500 text-[0.65rem] font-poppins italic flex items-center gap-1.5">
<iconify-icon icon="solar:lock-linear"></iconify-icon>
                        Available for next <span className="spot-count tabular-nums font-semibold"></span> bookings only
                    </div>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col">
<div className="w-10 h-10 rounded-lg bg-teal/20 text-teal flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="font-sans text-base font-semibold mb-2">Emergency Calm Protocol</h3>
<p className="text-slate-400 text-xs mb-6 flex-grow">Step-by-step action plan for immediate panic relief.</p>
<div className="mt-auto pt-4 border-t border-white/10 text-orange-500 text-[0.65rem] font-poppins italic flex items-center gap-1.5">
<iconify-icon icon="solar:lock-linear"></iconify-icon>
                        Available for next <span className="spot-count tabular-nums font-semibold"></span> bookings only
                    </div>
</div>
</div>

<div className="mt-12 max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-xl p-5">
<div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-3">
<div className="h-full bg-gradient-to-r from-coral to-orange-500 progress-bar-fill rounded-full"></div>
</div>
<div className="flex justify-between items-center text-xs font-sans">
<span className="text-coral font-medium">78% of bonus slots claimed</span>
<span className="text-white opacity-80"><span className="spot-count tabular-nums font-semibold"></span> remaining</span>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24" id="pricing">

<div className="max-w-lg mx-auto bg-coral/5 border border-dashed border-coral/40 rounded-2xl p-6 mb-8 text-center relative overflow-hidden">
<div className="flex justify-between items-center border-b border-coral/10 pb-4 mb-4">
<span className="text-slate-500 font-sans text-sm">Regular Consultation Price:</span>
<span className="font-sans text-lg font-semibold text-coral line-through opacity-70">₹999</span>
</div>
<div className="flex justify-between items-center mb-4">
<span className="text-slate-600 font-sans text-sm font-medium">Today's Exclusive Price:</span>
<span className="font-sans text-xl font-bold text-teal">₹199</span>
</div>
<div className="bg-green-500/10 text-green-600 font-sans text-base font-bold py-2 px-4 rounded-lg inline-flex items-center gap-2 mb-4">
<iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
                You Save: ₹800 (80% OFF)
            </div>
<p className="text-coral text-xs italic font-sans flex items-center justify-center gap-1">
<iconify-icon icon="solar:alarm-linear"></iconify-icon>
                This pricing resets to ₹999 at midnight
            </p>
</div>
<h2 className="font-serif text-3xl font-semibold tracking-tight text-center text-dark mb-12">What You're Getting Today</h2>

<div className="max-w-md mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-8 relative">

<div className="absolute -top-3 -right-3 bg-gradient-to-r from-coral to-orange-500 text-white font-poppins text-[0.65rem] uppercase font-bold tracking-wider py-1.5 px-4 rounded shadow-lg transform rotate-3">
                🔥 Best Value
            </div>
<div className="text-center mb-8 border-b border-slate-100 pb-8">
<h3 className="font-sans text-lg font-semibold text-dark mb-2">Deep Root Analysis</h3>
<div className="flex items-baseline justify-center gap-1">
<span className="font-sans text-4xl font-bold text-dark tracking-tight">₹199</span>
<span className="text-slate-500 text-sm">Only</span>
</div>
</div>
<ul className="space-y-4 mb-8 font-sans text-sm text-slate-600">
<li className="flex items-start gap-3"><iconify-icon className="text-teal text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 60-Min 1-on-1 Expert Consultation</li>
<li className="flex items-start gap-3"><iconify-icon className="text-teal text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Customized 4-Pillar Roadmap</li>
<li className="flex items-start gap-3"><iconify-icon className="text-teal text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Root Cause Identification</li>
<li className="flex items-start gap-3 font-medium text-dark"><iconify-icon className="text-gold text-lg flex-shrink-0 mt-0.5" icon="solar:gift-linear"></iconify-icon> 3 Exclusive Bonuses (Worth ₹10,093)</li>
</ul>

<div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200 text-center">
<div className="font-poppins text-coral text-xl font-bold tabular-nums timer-compact mb-2 tracking-wider"></div>
<p className="text-[0.65rem] text-slate-500 leading-tight mb-3">
                    ⚠️ When this timer hits zero, the bonus package disappears and the price returns to ₹999
                </p>
<div className="inline-flex items-center gap-2 bg-dark py-1 px-3 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-live-pulse"></div>
<span className="text-white font-poppins text-[0.65rem] font-medium"><span className="spot-count tabular-nums"></span> spots remaining at this price</span>
</div>
</div>
<div className="flex flex-col items-center group relative w-full">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark/95 text-gold px-3 py-1.5 rounded-md text-xs font-poppins font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    ⚡ Only <span className="spot-count tabular-nums"></span> spots left!
                </div>
<button className="cta-button w-full bg-gradient-to-r from-coral to-coralDark text-white font-poppins font-semibold text-sm py-4 px-6 rounded-xl flex items-center justify-center gap-2">
                    Claim Your ₹199 Spot Now
                </button>
<p className="mt-3 text-[0.7rem] text-coral font-semibold text-center w-full">
                    ⚠️ Price increases to ₹999 after tonight · <span className="spot-count tabular-nums"></span> spots remaining
                </p>
</div>
</div>
</section>

<section className="bg-teal/5 py-20 border-y border-teal/10">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-10">
<iconify-icon className="text-4xl text-teal mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h2 className="font-serif text-2xl font-semibold tracking-tight text-dark mb-4">100% "No Questions Asked" Guarantee</h2>
<p className="text-sm text-slate-600">If you don't feel a shift in clarity after our session, you get your ₹199 back immediately.</p>
</div>

<div className="bg-teal/10 border border-teal/20 rounded-2xl p-8 max-w-2xl mx-auto text-center mt-8">
<h3 className="font-sans text-lg font-semibold text-dark mb-3">You have nothing to lose — but your anxiety has a deadline</h3>
<p className="text-sm text-slate-700 leading-relaxed mb-6">
                    The guarantee removes your risk. The timer removes your reason to wait. Book now, and if it's not for you, get every rupee back — no questions asked.
                </p>
<a className="cta-button inline-block bg-gradient-to-r from-coral to-orange-500 text-white font-poppins font-semibold text-sm py-3 px-8 rounded-xl" href="#pricing">
                    Claim My Risk-Free ₹199 Consultation →
                </a>
<div className="mt-4 text-xs font-poppins text-coral flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:stopwatch-linear"></iconify-icon>
                    Offer expires in <span className="timer-compact tabular-nums font-semibold tracking-wider"></span>
</div>
</div>
</div>
</section>

<section className="bg-dark text-white py-24 text-center px-6 relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at center, #e94560 0%, transparent 70%)'}}></div>
<div className="max-w-2xl mx-auto relative z-10">
<h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-6">Your healing journey starts here. Don't let this slip away.</h2>
<div className="flex flex-col items-center group relative w-full max-w-sm mx-auto mt-10">
<button className="cta-button w-full bg-gradient-to-r from-coral to-coralDark text-white font-poppins font-semibold text-base py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(233,69,96,0.3)] flex items-center justify-center gap-2">
                    Book Your Consultation
                </button>
<div className="mt-5 text-left w-full space-y-2 text-sm text-slate-300">
<p className="flex items-center gap-2"><iconify-icon className="text-teal" icon="solar:check-circle-linear"></iconify-icon> Secure your spot for just ₹199</p>
<p className="flex items-center gap-2"><iconify-icon className="text-teal" icon="solar:check-circle-linear"></iconify-icon> Unlock ₹10,093 in free bonuses</p>
<p className="flex items-center gap-2"><iconify-icon className="text-teal" icon="solar:check-circle-linear"></iconify-icon> 100% Risk-Free Guarantee</p>
</div>

<p className="mt-6 text-sm text-coral font-bold bg-coral/10 w-full py-2 rounded border border-coral/20">
                    ⏰ FINAL WARNING: Timer below shows your remaining window
                </p>
<div className="mt-3 text-2xl font-poppins font-bold text-white tabular-nums tracking-widest timer-compact animate-pulse"></div>
</div>
</div>
</section>


<div className="fixed bottom-5 left-5 md:left-5 left-1/2 -translate-x-1/2 md:translate-x-0 z-[9997] flex flex-col gap-3 pointer-events-none" id="toast-container"></div>

<div className="fixed top-[60px] left-1/2 -translate-x-1/2 z-[9996] pointer-events-none" id="notification-container"></div>

<div className="fixed top-[60px] right-5 bg-coral/15 border border-coral/30 rounded-lg py-2 px-3 hidden md:flex items-center gap-2 z-40 transition-opacity duration-300 opacity-0 cursor-pointer hover:bg-coral/20" id="reading-badge">
<iconify-icon className="text-coral text-sm" icon="solar:book-bookmark-linear"></iconify-icon>
<span className="text-[0.65rem] text-coral font-poppins">You've been reading for <span className="font-medium" id="read-mins">3</span>m — <span className="spot-count font-medium"></span> spots left</span>
</div>

<div className="fixed right-0 top-1/2 -translate-y-1/2 bg-dark/95 border-l-2 border-teal/30 rounded-l-xl p-4 w-[200px] z-[9995] transition-transform duration-500 translate-x-[110%] hidden xl:flex flex-col gap-3 shadow-2xl backdrop-blur-md" id="floating-sidebar">
<button className="absolute top-2 right-2 text-slate-400 hover:text-white" id="close-sidebar"><iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon></button>
<div className="flex items-center gap-2 mt-2">
<div className="w-2 h-2 rounded-full bg-red-500 animate-live-pulse"></div>
<span className="text-xs font-bold text-white"><span className="spot-count tabular-nums"></span> Spots Left</span>
</div>
<div className="text-coral font-poppins font-bold text-lg tabular-nums timer-compact tracking-wider"></div>
<div className="text-teal text-[0.7rem] font-bold">₹199 (80% OFF)</div>
<a className="cta-button bg-gradient-to-r from-coral to-orange-500 text-white text-[0.65rem] font-poppins font-medium py-2 px-4 rounded text-center mt-1" href="#pricing">
            Book Now →
        </a>
</div>

<div className="fixed bottom-0 left-0 w-full bg-dark border-t-2 border-coral z-[9998] md:hidden pb-safe">
<div className="bg-coral/10 text-center py-1 border-b border-coral/10">
<span className="text-[0.6rem] text-coral font-poppins font-medium">⏰ <span className="spot-count tabular-nums"></span> spots left · Expires <span className="timer-compact tabular-nums tracking-wider"></span></span>
</div>
<div className="p-3">
<a className="cta-button block w-full bg-gradient-to-r from-coral to-coralDark text-white font-poppins font-semibold text-sm py-3 rounded-lg text-center shadow-lg" href="#pricing">
                Book Your ₹199 Consultation →
            </a>
</div>
</div>

<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[10000] hidden items-center justify-center p-4 opacity-0 transition-opacity duration-300" id="exit-overlay">
<div className="bg-dark max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl transform scale-95 transition-transform duration-300" id="exit-modal">
<div className="bg-gradient-to-r from-coral to-orange-500 p-8 text-center relative">
<button className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors" id="close-exit">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<h2 className="font-serif text-2xl font-bold text-white mb-2 tracking-tight">WAIT! Don't Leave Empty-Handed</h2>
<p className="text-white/90 text-sm font-sans">Your ₹10,000+ bonus package expires when you close this page</p>
</div>
<div className="p-8">
<div className="bg-white/5 border border-white/10 rounded-lg py-3 px-4 flex justify-between items-center mb-6">
<span className="text-xs text-coral font-poppins font-medium uppercase tracking-wider flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-coral animate-live-pulse"></div> Reserved
                    </span>
<span className="text-coral font-poppins font-bold text-lg tabular-nums timer-compact tracking-wider"></span>
</div>
<p className="text-white text-sm font-sans mb-4">Book your ₹199 consultation now and get:</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-300"><iconify-icon className="text-green-500 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Expert 1-on-1 root cause analysis</li>
<li className="flex items-start gap-3 text-sm text-slate-300"><iconify-icon className="text-green-500 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> 7 bonus resources worth ₹10,093</li>
<li className="flex items-start gap-3 text-sm text-slate-300"><iconify-icon className="text-green-500 text-lg flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> 100% money-back guarantee</li>
</ul>
<a className="cta-button block w-full bg-gradient-to-r from-coral to-coralDark text-white font-poppins font-semibold text-sm py-4 rounded-xl text-center mb-4" href="#pricing" id="exit-cta">
                    Yes, Save My Spot &amp; Bonuses →
                </a>
<button className="block w-full text-center text-[0.7rem] text-slate-500 underline hover:text-slate-400" id="decline-exit">
                    No thanks, I'll pay ₹999 later
                </button>
</div>
</div>
</div>



    </>
  );
}
