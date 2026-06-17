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



        import { UltravoxSession } from 'https://esm.sh/ultravox-client@0.0.3';

        const WEBHOOK_URL = 'https://nondiscoverable-propolitics-celine.ngrok-free.dev/webhook/ultravox';

        const widget       = document.getElementById('uv-widget');
        const micBtn       = document.getElementById('uv-mic-btn');
        const dialog       = document.getElementById('uv-dialog');
        const closeBtn     = document.getElementById('uv-close-btn');
        const callBtn      = document.getElementById('uv-call-btn');
        const callIcon     = document.getElementById('uv-call-icon');
        const endBtn       = document.getElementById('uv-end-btn');
        const messages     = document.getElementById('uv-messages');
        const typingEl     = document.getElementById('uv-typing');
        const statusDot    = document.getElementById('uv-status-dot');
        const statusLabel  = document.getElementById('uv-status-label');
        const footerLabel  = document.getElementById('uv-dialog-footer-label');
        const visualizer   = document.getElementById('uv-visualizer');
        const formSection  = document.getElementById('uv-form-section');
        const formSubmit   = document.getElementById('uv-form-submit');
        const ripple1      = document.getElementById('uv-ripple1');
        const ripple2      = document.getElementById('uv-ripple2');

        let session = null, isConnecting = false, speakingTimeout = null;

        const addMessage = (text, type) => {
            const d = document.createElement('div');
            d.className = 'msg msg-' + type;
            d.textContent = text;
            messages.appendChild(d);
            messages.scrollTop = messages.scrollHeight;
        };

        const showTyping = (show) => {
            typingEl.style.display = show ? 'block' : 'none';
            if (show) messages.scrollTop = messages.scrollHeight;
        };

        // open dialog
        micBtn.addEventListener('click', () => {
            widget.style.display = 'none';
            dialog.classList.add('open');
        });

        // close dialog
        closeBtn.addEventListener('click', () => {
            if (session) disconnect();
            dialog.classList.remove('open');
            setTimeout(() => { widget.style.display = 'flex'; }, 200);
        });

        const setUIState = (state) => {
            callBtn.style.background = 'linear-gradient(135deg,#667eea,#4facfe)';
            callBtn.style.boxShadow = '0 4px 16px rgba(102,126,234,0.45)';
            callIcon.setAttribute('icon', 'solar:microphone-3-linear');
            callIcon.classList.remove('spin');
            visualizer.style.display = 'none';
            ripple1.style.display = 'none';
            ripple2.style.display = 'none';
            endBtn.style.display = 'none';
            statusDot.style.background = '#22c55e';

            if (state === 'idle') {
                footerLabel.textContent = 'Tap mic to start';
                statusLabel.textContent = 'AmsiCodes AI · Always available';
                showTyping(false);
            } else if (state === 'connecting') {
                callBtn.style.background = 'linear-gradient(135deg,#f59e0b,#f97316)';
                callBtn.style.boxShadow = '0 4px 16px rgba(245,158,11,0.45)';
                callIcon.setAttribute('icon', 'solar:spinner-linear');
                callIcon.classList.add('spin');
                footerLabel.textContent = 'Connecting...';
                statusLabel.textContent = 'Connecting...';
                statusDot.style.background = '#f59e0b';
                showTyping(true);
            } else if (state === 'listening') {
                callBtn.style.background = 'linear-gradient(135deg,#ec4899,#ef4444)';
                callBtn.style.boxShadow = '0 4px 20px rgba(236,72,153,0.55)';
                ripple1.style.display = 'block';
                ripple2.style.display = 'block';
                endBtn.style.display = 'flex';
                footerLabel.textContent = 'Listening...';
                statusLabel.textContent = 'Amsi is listening';
                statusDot.style.background = '#ec4899';
                showTyping(false);
            } else if (state === 'speaking') {
                callBtn.style.background = 'linear-gradient(135deg,#3b82f6,#06b6d4)';
                callBtn.style.boxShadow = '0 4px 20px rgba(59,130,246,0.55)';
                visualizer.style.display = 'flex';
                endBtn.style.display = 'flex';
                footerLabel.textContent = 'Amsi is speaking';
                statusLabel.textContent = 'Amsi is speaking';
                statusDot.style.background = '#3b82f6';
                showTyping(false);
            }
        };

        const checkForFormTrigger = (text) => {
            const triggers = ['name','email','meeting','schedule','book','calendar','date','appointment','contact'];
            if (triggers.some(t => text.toLowerCase().includes(t)) && formSection.style.display === 'none') {
                formSection.style.display = 'block';
                messages.scrollTop = messages.scrollHeight;
            }
        };

        const connect = async () => {
            if (isConnecting || session) return;
            isConnecting = true;
            setUIState('connecting');
            try {
                const res = await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'start_call' })
                });
                if (!res.ok) throw new Error('HTTP ' + res.status);
                const data = await res.json();
                if (!data.joinUrl) throw new Error('No joinUrl');

                session = new UltravoxSession({ experimentalMessages: true });

                session.addEventListener('status', () => {
                    if (!session) return;
                    if (session.status === 'active') {
                        setUIState('listening');
                        addMessage("Hi! I'm Amsi. How can I help you today?", 'agent');
                    } else if (session.status === 'idle' || session.status === 'disconnected') {
                        disconnect();
                    }
                });

                session.addEventListener('transcripts', () => {
                    if (!session) return;
                    const ts = session.transcripts;
                    if (!ts || !ts.length) return;
                    const last = ts[ts.length - 1];
                    if (last.speaker === 'agent' && last.isFinal) {
                        addMessage(last.text, 'agent');
                        setUIState('speaking');
                        checkForFormTrigger(last.text);
                        clearTimeout(speakingTimeout);
                        speakingTimeout = setTimeout(() => {
                            if (session && session.status === 'active') setUIState('listening');
                        }, 800);
                    } else if (last.speaker === 'user' && last.isFinal) {
                        addMessage(last.text, 'user');
                        if (session && session.status === 'active') { setUIState('speaking'); showTyping(true); }
                    }
                });

                await session.joinCall(data.joinUrl);
            } catch (err) {
                console.error('Ultravox:', err);
                addMessage('Connection failed. Please try again.', 'system');
                setUIState('idle');
            } finally {
                isConnecting = false;
            }
        };

        const disconnect = () => {
            if (session) { try { session.leaveCall(); } catch(e){} session = null; }
            clearTimeout(speakingTimeout);
            showTyping(false);
            formSection.style.display = 'none';
            setUIState('idle');
            addMessage('Call ended.', 'system');
        };

        callBtn.addEventListener('click', () => { if (!session && !isConnecting) connect(); });
        endBtn.addEventListener('click', disconnect);

        formSubmit.addEventListener('click', () => {
            const name  = document.getElementById('uv-form-name').value.trim();
            const email = document.getElementById('uv-form-email').value.trim();
            const date  = document.getElementById('uv-form-date').value;
            if (!name || !email) { alert('Please fill in your name and email.'); return; }
            formSection.style.display = 'none';
            addMessage(`My name is ${name}, email is ${email}${date ? ', preferred date: '+date : ''}.`, 'user');
            addMessage(`Got it, ${name}! I've noted your details and will follow up at ${email}${date ? ' to confirm your meeting on '+new Date(date+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}) : ''}. Anything else I can help with?`, 'agent');
        });

        setUIState('idle');
    
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
      
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#667eea] opacity-[0.07] blur-[120px] rounded-full pointer-events-none -z-10">
</div>
<div className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-[#4facfe] opacity-[0.05] blur-[150px] rounded-full pointer-events-none -z-10">
</div>
<nav className="fixed top-0 left-0 w-full z-50 bg-[#1a1a2e]/70 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-1.5" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-[#667eea] to-[#4facfe] flex items-center justify-center">
<span className="text-white text-xs font-semibold">AC</span>
</div>
                AmsiCodes
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex text-sm font-medium text-white hover:text-gray-200 transition-colors" href="#contact">Contact</a>
<a className="text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10 text-white px-4 py-2 rounded-full transition-all" href="#contact">Book
                    a Call</a>
</div>
</div>
</nav>
<main className="pt-16">
<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10">
</div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#667eea]/10 border border-[#667eea]/20 text-[#667eea] text-xs font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-[#4facfe] animate-pulse"></span>
                    Digital Agency &amp; Automation Partners
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 leading-[1.1] mb-6">
                    Your Business Deserves to Work Smarter — Not Harder</h1>
<p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">AmsiCodes builds
                    stunning websites and intelligent AI automation systems that save you time, eliminate manual work,
                    and grow your revenue — automatically.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#667eea] to-[#4facfe] text-white text-sm font-medium shadow-[0_0_20px_rgba(102,126,234,0.3)] hover:shadow-[0_0_30px_rgba(79,172,254,0.4)] transition-all hover:-translate-y-0.5" href="#services">See
                        How It Works</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all" href="#contact">Book
                        a Free Discovery Call</a>
</div>
</div>
</section>
<section className="py-24 px-6 border-t border-white/5 bg-[#131322]">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white text-center mb-16">Sound
                    Familiar?</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4 items-start hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 text-red-400">
<iconify-icon icon="solar:danger-circle-linear" width="1.2rem"></iconify-icon></div>
<p className="text-sm text-gray-300 leading-relaxed mt-1">You're losing leads because no one follows
                            up fast enough</p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4 items-start hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20 text-orange-400">
<iconify-icon icon="solar:monitor-cross-linear" width="1.2rem"></iconify-icon></div>
<p className="text-sm text-gray-300 leading-relaxed mt-1">Your website looks outdated and isn't
                            bringing in new clients</p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4 items-start hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 border border-yellow-500/20 text-yellow-400">
<iconify-icon icon="solar:clock-circle-linear" width="1.2rem"></iconify-icon></div>
<p className="text-sm text-gray-300 leading-relaxed mt-1">Your team wastes hours every week on
                            repetitive admin tasks</p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4 items-start hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20 text-purple-400">
<iconify-icon icon="solar:phone-calling-rounded-linear" width="1.2rem"></iconify-icon></div>
<p className="text-sm text-gray-300 leading-relaxed mt-1">You're missing calls and enquiries outside
                            of business hours</p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4 items-start hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 text-blue-400">
<iconify-icon icon="solar:graph-down-linear" width="1.2rem"></iconify-icon></div>
<p className="text-sm text-gray-300 leading-relaxed mt-1">Your competitors are growing faster and
                            you don't know why</p>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4 items-start hover:bg-white/[0.04] transition-colors">
<div className="w-10 h-10 rounded-full bg-gray-500/10 flex items-center justify-center shrink-0 border border-gray-500/20 text-gray-400">
<iconify-icon icon="solar:link-broken-linear" width="1.2rem"></iconify-icon></div>
<p className="text-sm text-gray-300 leading-relaxed mt-1">You're paying for tools that don't talk to
                            each other</p>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 relative overflow-hidden">
<div className="max-w-3xl mx-auto text-center relative z-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#667eea]/20 to-[#4facfe]/20 border border-[#4facfe]/30 text-[#4facfe] mb-6">
<iconify-icon icon="solar:magic-stick-3-linear" width="1.5rem"></iconify-icon></div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">AmsiCodes Fixes All of
                    That</h2>
<p className="text-base md:text-lg text-gray-400 leading-relaxed">We combine beautiful design with
                    intelligent automation to build you a business system that generates leads, books appointments, and
                    handles operations — while you focus on what you do best.</p>
</div>
</section>
<section className="py-24 px-6 border-y border-white/5 bg-[#131322]">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-8 flex items-center gap-3">
<iconify-icon className="text-[#4facfe]" icon="solar:star-fall-linear"></iconify-icon>Businesses
                        That Work With AmsiCodes</h3>
<div className="space-y-4">
<div className="p-6 rounded-2xl bg-[#1a1a2e] border border-white/5">
<p className="text-sm text-white font-medium mb-3">"34 new patient enquiries per month — up from
                                8"</p>
<div className="flex items-center gap-2 text-xs text-gray-500"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Dental Clinic, Texas</div>
</div>
<div className="p-6 rounded-2xl bg-[#1a1a2e] border border-white/5">
<p className="text-sm text-white font-medium mb-3">"Saved 28 hours per week on admin and
                                follow-up"</p>
<div className="flex items-center gap-2 text-xs text-gray-500"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Real Estate Agency, London</div>
</div>
<div className="p-6 rounded-2xl bg-[#1a1a2e] border border-white/5">
<p className="text-sm text-white font-medium mb-3">"Response time cut from 3 days to under 2
                                minutes"</p>
<div className="flex items-center gap-2 text-xs text-gray-500"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Law Firm, New York</div>
</div>
</div>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-8 flex items-center gap-3">
<iconify-icon className="text-[#667eea]" icon="solar:wallet-money-linear"></iconify-icon>Every Day
                        Without This Costs You Money</h3>
<div className="space-y-6 relative before:absolute before:inset-y-2 before:left-2.5 before:w-px before:bg-white/10">
<div className="relative pl-10">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-[#1a1a2e] border-2 border-white/10 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
</div>
<p className="text-sm text-gray-300 leading-relaxed font-medium">Every lead not followed up in 5
                                minutes has an <span className="text-white">80% chance</span> of going to your competitor.
                            </p>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-[#1a1a2e] border-2 border-white/10 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
</div>
<p className="text-sm text-gray-300 leading-relaxed font-medium">Every missed call is a missed
                                sale.</p>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-[#1a1a2e] border-2 border-white/10 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
</div>
<p className="text-sm text-gray-300 leading-relaxed font-medium">Every hour on admin is an hour
                                not spent growing your business.</p>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-[#1a1a2e] border-2 border-white/10 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
</div>
<p className="text-sm text-gray-300 leading-relaxed font-medium">Every week without a proper
                                site, your competitors rank higher on Google.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Everything Your
                        Business Needs to Grow Online — Under One Roof</h2>
<div className="h-1 w-20 bg-gradient-to-r from-[#667eea] to-[#4facfe] rounded-full mx-auto"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="p-8 rounded-3xl bg-[#131322] border border-white/5 flex flex-col group">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10 group-hover:border-[#667eea]/50 transition-colors">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="1.5rem"></iconify-icon></div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Websites That Work as Hard as
                            You Do</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Most websites are digital brochures that
                            just sit there. We build conversion-focused websites that rank on Google, load fast, and
                            turn visitors into paying clients.</p>
<div className="mt-auto bg-white/[0.02] p-4 rounded-xl border border-white/5">
<div className="flex gap-3 items-start"><iconify-icon className="text-rose-400 mt-0.5 shrink-0" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-xs text-gray-300"><span className="text-rose-400 font-medium">Pain:</span>
                                    Without a professional website, you are invisible to 97% of people searching for
                                    your services.</p>
</div>
</div>
<a className="mt-8 text-sm font-medium text-[#4facfe] flex items-center gap-1 hover:gap-2 transition-all w-fit" href="#contact">Get
                            My Website Built <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="p-8 rounded-3xl bg-[#131322] border border-white/5 flex flex-col group">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10 group-hover:border-[#667eea]/50 transition-colors">
<iconify-icon icon="solar:settings-minimalistic-linear" width="1.5rem"></iconify-icon></div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Stop Doing Manually What a
                            Machine Can Do Better</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Your team spends thousands of hours on
                            tasks that can be fully automated — lead follow-up, appointment booking, client onboarding,
                            invoicing, and more.</p>
<div className="mt-auto bg-white/[0.02] p-4 rounded-xl border border-white/5">
<div className="flex gap-3 items-start"><iconify-icon className="text-rose-400 mt-0.5 shrink-0" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-xs text-gray-300"><span className="text-rose-400 font-medium">Pain:</span>
                                    Manual processes are the single biggest hidden cost in most small businesses.</p>
</div>
</div>
<a className="mt-8 text-sm font-medium text-[#4facfe] flex items-center gap-1 hover:gap-2 transition-all w-fit" href="#contact">Automate
                            My Business <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="p-8 rounded-3xl bg-gradient-to-br from-[#131322] to-[#1a1a2e] border border-[#667eea]/30 flex flex-col group lg:col-span-2 relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-[#667eea]/10 blur-3xl rounded-full pointer-events-none">
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
<div>
<div className="w-12 h-12 rounded-xl bg-[#667eea]/10 flex items-center justify-center text-[#667eea] mb-6 border border-[#667eea]/20">
<iconify-icon icon="solar:microphone-3-linear" width="1.5rem"></iconify-icon></div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">AI Voice Agents: Never
                                    Miss a Lead Again</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Every lead gets a response within
                                    60 seconds — 24/7, without hiring anyone. Our AI voice agents qualify leads, answer
                                    questions, and book appointments automatically.</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10">Ultravox</span><span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10">Vapi</span>
</div>
<a className="mt-8 text-sm font-medium text-[#667eea] flex items-center gap-1 hover:gap-2 transition-all w-fit" href="#contact">Set
                                    Up My Voice Agent <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="flex items-center">
<div className="bg-black/20 p-5 rounded-2xl border border-white/5 w-full">
<div className="flex gap-3 items-start"><iconify-icon className="text-rose-400 mt-0.5 shrink-0" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-sm text-gray-300">
<span className="text-rose-400 font-medium">Pain:</span> 78% of customers buy
                                            from the business that responds first.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 border-y border-white/5 bg-[#131322]" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6">We Are Not Just
                        Another Digital Agency</h2>
<p className="text-base text-gray-400 leading-relaxed mb-6">AmsiCodes was built with one mission — to
                        give small and medium-sized businesses access to the same powerful technology that enterprise
                        companies use to dominate their markets.</p>
<p className="text-base text-gray-400 leading-relaxed mb-8">We are a lean, passionate team based in
                        Tanzania, serving businesses across the US and Europe. We don't just build websites —
                        <span className="text-white font-medium">we build growth engines.</span></p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-300"><iconify-icon className="text-[#4facfe]" icon="solar:check-circle-linear"></iconify-icon><span className="font-medium text-white">Results over promises</span>
                            — we measure everything</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><iconify-icon className="text-[#4facfe]" icon="solar:check-circle-linear"></iconify-icon><span className="font-medium text-white">Clarity over complexity</span>
                            — plain English always</li>
</ul>
</div>
<div className="p-8 rounded-3xl bg-[#1a1a2e] border border-white/10 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-[#4facfe]/10 blur-3xl rounded-full"></div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-6">Why Work With Us</h3>
<div className="space-y-5 relative z-10">
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-white border border-white/10">
<span className="text-xs font-medium">1</span></div>
<p className="text-sm text-gray-300 mt-1.5 leading-relaxed">We combine 5 services under one roof
                                — no need to hire multiple agencies</p>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-white border border-white/10">
<span className="text-xs font-medium">2</span></div>
<p className="text-sm text-gray-300 mt-1.5 leading-relaxed">Timezone overlap with both US and
                                European business hours</p>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-lg bg-[#667eea]/10 flex items-center justify-center shrink-0 text-[#667eea] border border-[#667eea]/20">
<iconify-icon icon="solar:heart-angle-linear"></iconify-icon></div>
<p className="text-sm text-white font-medium mt-1.5 leading-relaxed">We treat every client like
                                our only client</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 border-t border-white/5 bg-[#1a1a2e] relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_top,white,transparent)] opacity-50 pointer-events-none">
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Let's Talk About
                        Growing Your Business</h2>
<p className="text-base text-gray-400 leading-relaxed mb-10">Book a free 15-minute discovery call. We'll
                        listen to your challenges, show you what's possible, and give you a clear action plan — free, no
                        strings attached.</p>
<div className="p-6 rounded-2xl bg-[#131322] border border-white/5 flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#667eea]/20 to-[#4facfe]/20 flex items-center justify-center shrink-0 border border-[#4facfe]/30 text-[#4facfe]">
<iconify-icon icon="solar:microphone-3-linear" width="1.2rem"></iconify-icon></div>
<div>
<p className="text-sm text-white font-medium mb-1">Prefer to speak directly?</p>
<p className="text-sm text-gray-400 leading-relaxed">Our AI assistant Amsi is available 24/7 —
                                just click the mic button in the bottom right.</p>
</div>
</div>
</div>
<div className="bg-[#131322] p-8 rounded-3xl border border-white/10 shadow-2xl">
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 ml-1">First Name</label><input className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#4facfe] transition-all" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 ml-1">Last Name</label><input className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#4facfe] transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 ml-1">Email</label><input className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#4facfe] transition-all" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 ml-1">Phone</label><input className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#4facfe] transition-all" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-400 ml-1">Service interested in?</label>
<div className="relative">
<select className="appearance-none w-full bg-[#1a1a2e] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4facfe] transition-all cursor-pointer"><option disabled="" selected="" value="">Select an option</option><option value="ai">AI Voice Agents</option><option value="full">Full Stack Partner</option></select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
</div>
</div>
<button className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-[#667eea] to-[#4facfe] text-white text-sm font-medium hover:opacity-90 transition-opacity flex justify-center items-center gap-2" type="submit">Book My Free Call</button>
</form>
</div>
</div>
</section>
</main>
<footer className="bg-[#0B0B13] border-t border-white/5 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<div>
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-1.5 mb-2" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-[#667eea] to-[#4facfe] flex items-center justify-center">
<span className="text-white text-xs font-semibold">AC</span></div>AmsiCodes
                    </a>
<p className="text-sm text-gray-500 font-medium">Building Businesses That Run Themselves</p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs text-gray-600">
<p>© 2025 AmsiCodes. All rights reserved.</p>
<div className="flex gap-4"><a className="hover:text-gray-400 transition-colors" href="#">Privacy Policy</a><a className="hover:text-gray-400 transition-colors" href="#">Terms of Service</a></div>
</div>
</div>
</footer>


<div id="uv-widget">
<div id="uv-bubble">
<div id="uv-bubble-header">
<div className="animate-pulse" style={{width: '8px', height: '8px', borderRadius: '9999px', background: '#4facfe'}}></div>
<span style={{fontSize: '11px', fontWeight: '600', color: '#4facfe', letterSpacing: '0.04em'}}>AMSI</span>
</div>
<p>Hi I'm Amsi, AmsiCode's AI assistant. Click the mic to chat!</p>
</div>
<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<button className="mic-idle" id="uv-mic-btn">
<iconify-icon icon="solar:microphone-3-linear" style={{color: 'white'}} width="1.8rem"></iconify-icon>
</button>
</div>
<span style={{fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', display: 'block'}}>TAP TO SPEAK</span>
</div>

<div id="uv-dialog">
<div id="uv-dialog-header">
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
<div className="uv-avatar"><iconify-icon icon="solar:microphone-3-linear" style={{color: 'white'}} width="1.1rem"></iconify-icon></div>
<div>
<h3>Amsi</h3>
<div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
<div id="uv-status-dot" style={{width: '7px', height: '7px', borderRadius: '9999px', background: '#22c55e'}}>
</div>
<p id="uv-status-label">AmsiCodes AI · Always available</p>
</div>
</div>
</div>
<button id="uv-close-btn"><iconify-icon icon="solar:close-linear" width="1rem"></iconify-icon></button>
</div>
<div id="uv-messages">
<div className="msg msg-system">Today</div>
<div className="msg msg-agent">Hi! I'm Amsi 👋 AmsiCodes' AI assistant. Click the mic below to start talking
                with me!</div>
</div>
<div id="uv-typing">
<div className="typing-dots"><span></span><span></span><span></span></div>
</div>
<div id="uv-form-section">
<label>Your Details</label>
<input className="uv-input" id="uv-form-name" placeholder="Full name" type="text"/>
<input className="uv-input" id="uv-form-email" placeholder="Email address" type="email"/>
<input className="uv-input" id="uv-form-date" type="date"/>
<button className="uv-form-btn" id="uv-form-submit">Confirm &amp; Book Meeting</button>
</div>
<div id="uv-controls">
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
<div id="uv-visualizer">
<div className="vbar"></div>
<div className="vbar"></div>
<div className="vbar"></div>
<div className="vbar"></div>
<div className="vbar"></div>
</div>
<div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<div className="ripple" id="uv-ripple1" style={{display: 'none'}}></div>
<div className="ripple" id="uv-ripple2" style={{display: 'none', animationDelay: '0.5s'}}></div>
<button id="uv-call-btn"><iconify-icon icon="solar:microphone-3-linear" id="uv-call-icon" style={{color: 'white'}} width="1.6rem"></iconify-icon></button>
</div>
<button id="uv-end-btn"><iconify-icon icon="solar:phone-cross-linear" width="1.1rem"></iconify-icon></button>
</div>
<p id="uv-dialog-footer-label">Tap mic to start</p>
</div>
</div>
</div>


    </>
  );
}
