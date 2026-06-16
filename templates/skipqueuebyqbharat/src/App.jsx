import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- 1. Queue Simulator ---
        let peopleAhead = 14;
        let baseTimePerPerson = 45; // seconds
        
        function updateQueue() {
            if (peopleAhead > 0 && Math.random() > 0.6) {
                peopleAhead--;
                
                // Animate change
                const counter = document.getElementById('people-count');
                counter.style.transform = 'scale(1.2)';
                counter.classList.add('text-orange-400');
                
                setTimeout(() => {
                    counter.innerText = peopleAhead;
                    counter.style.transform = 'scale(1)';
                    counter.classList.remove('text-orange-400');
                }, 200);

                // Update Est Time
                const totalSeconds = peopleAhead * baseTimePerPerson;
                const mins = Math.ceil(totalSeconds / 60);
                document.getElementById('est-time').innerText = mins + " mins";
                
                if (peopleAhead === 2) {
                    showToast("Your turn is coming up soon!");
                }
            }
        }

        let queueInterval = setInterval(updateQueue, 3500);

        function resetQueue() {
            document.getElementById('queue-interface').classList.add('opacity-0');
            setTimeout(() => {
                document.getElementById('queue-reset-state').classList.remove('hidden');
                document.getElementById('queue-reset-state').classList.add('flex');
            }, 300);
        }

        function restartQueue() {
            peopleAhead = 14;
            document.getElementById('people-count').innerText = 14;
            document.getElementById('est-time').innerText = "12 mins";
            document.getElementById('queue-reset-state').classList.add('hidden');
            document.getElementById('queue-reset-state').classList.remove('flex');
            document.getElementById('queue-interface').classList.remove('opacity-0');
            showToast("Joined Queue: A-43");
        }

        // --- 2. Tab Switcher Data ---
        const tabData = [
            {
                name: "Rahul Sharma",
                sub: "Devotee • Premium",
                icon: "user",
                tag: "DARSHAN",
                tagColor: "orange",
                events: [
                    { time: "05:00 AM", text: "Slot booked via WhatsApp", color: "zinc-600" },
                    { time: "09:00 AM (Now)", text: "Entry Gate 4 is open. Please proceed.", color: "orange-500" }
                ]
            },
            {
                name: "Priya Patel",
                sub: "Patient • Cardiology",
                icon: "heart-pulse",
                tag: "EMERGENCY",
                tagColor: "red",
                events: [
                    { time: "10:15 AM", text: "Checked in at Reception", color: "zinc-600" },
                    { time: "10:45 AM (Now)", text: "Dr. Verma is ready for you in Room 12.", color: "blue-500" }
                ]
            },
            {
                name: "Vikram Singh",
                sub: "Citizen • Passport",
                icon: "landmark",
                tag: "TOKEN: G-22",
                tagColor: "zinc",
                events: [
                    { time: "11:00 AM", text: "Documents Verified", color: "zinc-600" },
                    { time: "11:20 AM (Now)", text: "Counter 3: Biometrics Scan", color: "green-500" }
                ]
            }
        ];

        function switchTab(index) {
            // UI State
            document.querySelectorAll('.tab-active').forEach(el => {
                el.classList.remove('tab-active', 'bg-white/5', 'border-white/10');
                el.classList.add('border-transparent');
            });
            const activeTab = document.getElementById(`tab-${index}`);
            activeTab.classList.add('tab-active', 'bg-white/5', 'border-white/10');
            activeTab.classList.remove('border-transparent');

            // Card Glow
            const colors = ['from-orange-500 to-rose-600', 'from-blue-500 to-cyan-600', 'from-zinc-500 to-gray-400'];
            const glow = document.getElementById('card-glow');
            glow.className = `absolute inset-0 bg-gradient-to-r ${colors[index]} rounded-3xl blur-3xl opacity-10 transition-colors duration-500`;

            // Content Swap
            const content = document.getElementById('tab-content');
            content.classList.add('opacity-0', 'translate-y-4');
            
            setTimeout(() => {
                const data = tabData[index];
                let eventsHtml = '';
                
                data.events.forEach((event, i) => {
                    const isLast = i === data.events.length - 1;
                    const dotClass = isLast ? `bg-${data.events[1].color.split('-')[0]}-500 animate-pulse` : 'bg-zinc-600';
                    const textClass = isLast ? 'text-white font-medium bg-zinc-800/50 p-3 rounded border border-white/5' : 'text-zinc-300';
                    const timeColor = isLast ? `text-${data.events[1].color.split('-')[0]}-400` : 'text-zinc-500';

                    eventsHtml += `
                        <div class="relative">
                            <div class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full ${dotClass} border-2 border-zinc-900"></div>
                            <div class="text-xs ${timeColor} mb-1">${event.time}</div>
                            <div class="text-sm ${textClass}">${event.text}</div>
                        </div>
                    `;
                });

                content.innerHTML = `
                    <div class="flex items-center justify-between mb-8">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                                <span class="iconify" data-icon="lucide:${data.icon}" data-width="20"></span>
                            </div>
                            <div>
                                <div class="text-sm text-white font-medium">${data.name}</div>
                                <div class="text-xs text-zinc-500">${data.sub}</div>
                            </div>
                        </div>
                        <span class="px-2 py-1 rounded bg-${data.tagColor}-500/20 text-${data.tagColor}-400 text-[10px] font-medium border border-${data.tagColor}-500/20">${data.tag}</span>
                    </div>
                    <div class="space-y-6 relative pl-4 border-l border-zinc-800 ml-2">
                        ${eventsHtml}
                    </div>
                `;
                content.classList.remove('opacity-0', 'translate-y-4');
            }, 300);
        }

        // --- 3. Form Handling ---
        function handleFormSubmit(e) {
            e.preventDefault();
            const btnText = document.getElementById('btn-text');
            const btnLoader = document.getElementById('btn-loader');
            const input = document.getElementById('phone-input');

            if(input.value.length < 10) return;

            btnText.classList.add('hidden');
            btnLoader.classList.remove('hidden');

            setTimeout(() => {
                btnText.classList.remove('hidden');
                btnLoader.classList.add('hidden');
                showToast("Link sent to " + input.value);
                input.value = '';
            }, 1500);
        }

        // --- 4. Toast System ---
        function showToast(message) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm py-3 px-4 rounded-lg shadow-xl flex items-center gap-2 animate-slide-up pointer-events-auto min-w-[250px]';
            toast.innerHTML = `<span class="text-green-500 iconify" data-icon="lucide:check-circle" data-width="16"></span> ${message}`;
            container.appendChild(toast);
            
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(-10px)';
                setTimeout(() => toast.remove(), 300);
            }, 4000);
        }

        // --- 5. Modal Logic ---
        function toggleModal(show) {
            const overlay = document.getElementById('modal-overlay');
            const content = document.getElementById('modal-content');
            
            if (show) {
                overlay.classList.remove('hidden');
                setTimeout(() => {
                    overlay.classList.remove('opacity-0');
                    content.classList.remove('scale-95');
                    content.classList.add('scale-100');
                }, 10);
            } else {
                overlay.classList.add('opacity-0');
                content.classList.remove('scale-100');
                content.classList.add('scale-95');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        }

        function simulateJoin() {
            const code = document.getElementById('queue-code-input').value;
            if (code.length > 3) {
                toggleModal(false);
                setTimeout(() => {
                    showToast(`Joined Queue ${code.toUpperCase()}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    restartQueue();
                }, 500);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-24 right-6 z-50 flex flex-col gap-2 pointer-events-none" id="toast-container"></div>

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-4" id="modal-overlay">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl max-w-md w-full p-6 shadow-2xl transform scale-95 transition-transform duration-300" id="modal-content">
<div className="flex justify-between items-center mb-6">
<h3 className="text-white font-medium text-lg">Join a Queue</h3>
<button className="text-zinc-500 hover:text-white transition" onclick="toggleModal(false)"><span className="iconify" data-icon="lucide:x" data-width="20"></span></button>
</div>
<div className="space-y-4">
<div>
<label className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-2 block">Enter Queue Code / Merchant ID</label>
<div className="flex gap-2">
<input className="flex-1 bg-black border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:border-orange-500 outline-none transition-colors uppercase font-mono tracking-wide" id="queue-code-input" placeholder="e.g. AIIMS-01" type="text"/>
<button className="bg-white text-black px-4 rounded-lg font-medium text-sm hover:bg-zinc-200 transition" onclick="simulateJoin()">Join</button>
</div>
</div>
<div className="relative py-2">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-800"></div></div>
<div className="relative flex justify-center"><span className="bg-zinc-900 px-2 text-xs text-zinc-500">OR</span></div>
</div>
<button className="w-full py-3 border border-zinc-700 rounded-lg text-zinc-300 hover:bg-zinc-800 transition flex items-center justify-center gap-2 text-sm group">
<span className="iconify group-hover:text-orange-500 transition-colors" data-icon="lucide:qr-code" data-width="18"></span>
                    Scan QR Code
                </button>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="w-8 h-8 rounded bg-gradient-to-br from-orange-500 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-orange-900/20">
<span className="iconify" data-icon="lucide:qr-code" data-width="18"></span>
</div>
<span className="text-white font-medium tracking-tight text-lg group-hover:text-zinc-200 transition-colors">Q-Bharat</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#demo">Live Demo</a>
<a className="hover:text-white transition-colors" href="#use-cases">Sectors</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors tracking-tight" onclick="toggleModal(true)">
                    Get App
                </button>
<button className="md:hidden text-zinc-400 hover:text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>

<div className="hidden md:hidden border-t border-white/5 bg-black p-4 space-y-4" id="mobile-menu">
<a className="block text-sm text-zinc-400 hover:text-white" href="#features">Features</a>
<a className="block text-sm text-zinc-400 hover:text-white" href="#demo">Live Demo</a>
<a className="block text-sm text-zinc-400 hover:text-white" href="#use-cases">Sectors</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden hero-glow" id="demo">
<div className="max-w-7xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-orange-400 mb-8 animate-fade-in-up hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Live across 500+ Cities in India
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto">
                No lines. Just life.<br/>
<span className="text-zinc-600">The Future of Waiting.</span>
</h1>
<p className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                Smart queue management for the billion. Join queues remotely for temples, hospitals, and government services.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-orange-600 to-rose-600 text-white rounded-lg font-medium text-sm tracking-tight hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(234,88,12,0.3)]" onclick="toggleModal(true)">
<span className="iconify" data-icon="lucide:smartphone" data-width="18"></span>
                    Join a Queue
                </button>
<button className="w-full sm:w-auto px-8 py-3 glass-card text-zinc-200 rounded-lg font-medium text-sm tracking-tight hover:bg-white/5 transition-colors flex items-center justify-center gap-2 active:scale-95" onclick="document.getElementById('features').scrollIntoView({behavior: 'smooth'})">
                    For Business
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="mt-20 relative max-w-4xl mx-auto animate-slide-up">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50"></div>
<div className="relative glass-card rounded-xl p-1 border border-white/10 overflow-hidden">

<div className="h-10 border-b border-white/5 bg-zinc-900/50 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
<div className="ml-auto flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<div className="text-[10px] text-zinc-500 font-mono">LIVE_QUEUE_V2.0</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-0 transition-opacity duration-300" id="queue-interface">

<div className="p-8 border-r border-white/5 bg-zinc-950/50 flex flex-col items-center justify-center text-center">
<div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-lg shadow-orange-900/10">
<span className="iconify text-orange-500" data-icon="lucide:ticket" data-width="32"></span>
</div>
<h3 className="text-zinc-100 font-medium text-lg" id="token-label">Your Token</h3>
<div className="text-5xl font-semibold text-white tracking-tight my-4" id="token-number">A-42</div>
<div className="flex items-center gap-2 text-green-400 text-sm font-medium bg-green-900/20 px-3 py-1 rounded-full border border-green-900/30">
<span className="iconify" data-icon="lucide:timer" data-width="14"></span>
                            Estimated: <span id="est-time">12 mins</span>
</div>
<p className="mt-6 text-xs text-zinc-500 flex items-center gap-1">
<span className="iconify" data-icon="lucide:map-pin" data-width="10"></span>
                            AIIMS Delhi • General OPD
                        </p>
</div>

<div className="p-8 bg-zinc-900/20 flex flex-col justify-between">
<div className="space-y-6">
<div className="flex items-center justify-between p-4 rounded-lg bg-black/40 border border-white/5">
<div className="flex items-center gap-3">
<div className="p-2 rounded bg-zinc-800 text-zinc-400"><span className="iconify" data-icon="lucide:users" data-width="16"></span></div>
<div className="text-sm">
<div className="text-zinc-500 text-xs">People Ahead</div>
<div className="text-zinc-200 font-medium text-xl" id="people-count">14</div>
</div>
</div>
<div className="h-8 w-[1px] bg-white/5"></div>
<div className="text-right">
<div className="text-zinc-500 text-xs">Avg Wait</div>
<div className="text-zinc-200 font-medium">45s</div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-zinc-500">
<span>Crowd Density</span>
<span className="text-orange-400">Moderate</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-orange-500/80 w-[60%] rounded-full live-bar"></div>
</div>
</div>
</div>
<div className="flex gap-2 mt-6">
<button className="flex-1 p-3 rounded bg-zinc-800/50 border border-white/5 text-xs text-zinc-400 text-center hover:bg-zinc-800 hover:text-white cursor-pointer transition" onclick="resetQueue()">
                                Leave Queue
                            </button>
<button className="flex-1 p-3 rounded bg-white text-black text-xs font-medium text-center hover:bg-zinc-200 cursor-pointer transition shadow-[0_0_10px_rgba(255,255,255,0.2)]" onclick="showToast('Map view functionality opening...')">
                                View Map
                            </button>
</div>
</div>
</div>

<div className="hidden absolute inset-0 bg-zinc-900 flex-col items-center justify-center text-center p-8" id="queue-reset-state">
<div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
<span className="iconify text-zinc-400" data-icon="lucide:log-out" data-width="24"></span>
</div>
<h3 className="text-white font-medium mb-2">You left the queue</h3>
<p className="text-zinc-500 text-sm mb-6">Want to rejoin?</p>
<button className="px-6 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-zinc-200 transition" onclick="restartQueue()">Join Queue</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Built for the complexity of India.</h2>
<p className="text-zinc-500 max-w-xl text-lg font-light">
                    From the bustling streets of Mumbai to remote temples in Uttarakhand, our infrastructure scales with the population.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors overflow-hidden hover:bg-zinc-900/40">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center text-orange-400 mb-6 border border-white/5 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:languages" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">Hyper-Localized</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                        Available in 12+ regional languages. Voice-guided instructions in Hindi, Tamil, Telugu, and more for non-digital natives.
                    </p>
</div>
<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors overflow-hidden hover:bg-zinc-900/40">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center text-blue-400 mb-6 border border-white/5 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:smartphone-nfc" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">Zero App Required</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                        Join queues via WhatsApp, SMS, or UPI apps. Integrated with Aadhaar for fast-track verification in government offices.
                    </p>
</div>
<div className="group relative p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors overflow-hidden hover:bg-zinc-900/40">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center text-green-400 mb-6 border border-white/5 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:clock-4" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">Smart Prediction</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                        AI analyzes traffic, local festivals, and staff availability to predict wait times with 98% accuracy.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-zinc-900/10" id="use-cases">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Transforming India's busiest spaces.</h2>
<div className="space-y-2">

<div className="flex gap-4 p-4 rounded-xl cursor-pointer transition-all border border-transparent hover:bg-white/5 tab-active" id="tab-0" onclick="switchTab(0)">
<div className="mt-1">
<div className="w-6 h-6 rounded-full border border-orange-500/30 bg-orange-500/10 flex items-center justify-center">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
</div>
</div>
<div>
<h4 className="text-zinc-200 font-medium">Temples &amp; Darshan</h4>
<p className="text-sm text-zinc-500 mt-1">Virtual queues for Tirupati, Kashi Vishwanath. Pre-book slots.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl cursor-pointer transition-all border border-transparent hover:bg-white/5" id="tab-1" onclick="switchTab(1)">
<div className="mt-1">
<div className="w-6 h-6 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
</div>
</div>
<div>
<h4 className="text-zinc-200 font-medium">Hospitals &amp; OPD</h4>
<p className="text-sm text-zinc-500 mt-1">Live tracking for doctors. Emergency priority sorting.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl cursor-pointer transition-all border border-transparent hover:bg-white/5" id="tab-2" onclick="switchTab(2)">
<div className="mt-1">
<div className="w-6 h-6 rounded-full border border-zinc-500/30 bg-zinc-500/10 flex items-center justify-center">
<span className="w-2 h-2 rounded-full bg-zinc-500"></span>
</div>
</div>
<div>
<h4 className="text-zinc-200 font-medium">Banks &amp; Government</h4>
<p className="text-sm text-zinc-500 mt-1">Efficient token generation for Passport Seva Kendras.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-600 rounded-3xl blur-3xl opacity-10 transition-colors duration-500" id="card-glow"></div>
<div className="glass-card rounded-2xl p-6 relative border border-white/10 min-h-[300px] flex flex-col justify-center">
<div className="transition-all duration-300 opacity-100 transform translate-y-0" id="tab-content">

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
<span className="iconify" data-icon="lucide:user" data-width="20"></span>
</div>
<div>
<div className="text-sm text-white font-medium">Rahul Sharma</div>
<div className="text-xs text-zinc-500">Devotee • Premium</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-orange-500/20 text-orange-400 text-[10px] font-medium border border-orange-500/20">DARSHAN</span>
</div>
<div className="space-y-6 relative pl-4 border-l border-zinc-800 ml-2">
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-600 border-2 border-zinc-900"></div>
<div className="text-xs text-zinc-500 mb-1">05:00 AM</div>
<div className="text-sm text-zinc-300">Slot booked via WhatsApp</div>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-orange-500 border-2 border-zinc-900 animate-pulse"></div>
<div className="text-xs text-orange-400 mb-1">09:00 AM (Now)</div>
<div className="text-sm text-white font-medium bg-zinc-800/50 p-3 rounded border border-white/5">
                                        Entry Gate 4 is open. Please proceed for Darshan.
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23333\\' fillOpacity=\\'0.4\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Stop wasting time in lines.</h2>
<p className="text-zinc-400 mb-10 font-light">Join 10 million Indians reclaiming their day.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onsubmit="handleFormSubmit(event)">
<div className="relative flex-grow">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
</span>
<input className="w-full bg-zinc-900 border border-zinc-700 text-white text-sm rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-zinc-600" id="phone-input" maxlength="10" pattern="[0-9]{10}" placeholder="Enter 10-digit mobile number" required="" type="tel"/>
</div>
<button className="bg-white text-black font-medium text-sm px-6 py-3 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" type="submit">
<span id="btn-text">Get Link</span>
<span className="hidden animate-spin iconify" data-icon="lucide:loader-2" id="btn-loader"></span>
</button>
</form>
<p className="text-[10px] text-zinc-600 mt-4">Available on iOS and Android. Standard carrier rates apply.</p>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:qr-code" data-width="14"></span>
</div>
<span className="text-white font-medium tracking-tight">Q-Bharat</span>
</div>
<p className="text-zinc-500 text-sm font-light max-w-xs mb-6">
                        Building the digital infrastructure for a queuing-free India. Made with ❤️ in Bengaluru.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-zinc-300 transition" href="#">Virtual Queuing</a></li>
<li><a className="hover:text-zinc-300 transition" href="#">Analytics</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Sectors</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-zinc-300 transition" href="#">Healthcare</a></li>
<li><a className="hover:text-zinc-300 transition" href="#">Government</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-zinc-300 transition" href="#">Privacy</a></li>
<li><a className="hover:text-zinc-300 transition" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600 font-light">
<p>© 2023 Q-Bharat Technologies Pvt Ltd.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>Systems Operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
