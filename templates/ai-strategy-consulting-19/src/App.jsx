import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                    const tools = ['Slack', 'Google Workspace', 'ClickUp', 'Notion', 'HubSpot', 'Zapier', 'GitHub', 'Figma', 'Stripe', 'Linear'];
                    const icons = ['slack', 'google', 'programming', 'notes', 'hubspot', 'bolt', 'github', 'figma', 'card', 'route']; // Approximate icons
                    for(let i=0; i<2; i++) {
                        tools.forEach((tool, index) => {
                            document.write(`
                                <div class="w-[160px] shrink-0 bg-white border border-[#E5E5E5] rounded-xl p-6 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md hover:border-[#5C4CFF]/20 transition-all cursor-pointer">
                                    <div class="h-10 flex items-center justify-center opacity-70">
                                        <iconify-icon icon="solar:link-circle-linear" class="text-3xl text-[#171717]"></iconify-icon>
                                    </div>
                                    <span class="text-xs text-[#737373] font-medium">${tool}</span>
                                </div>
                            `);
                        });
                    }
                


        // Scroll Reveal Animation
        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        
                        // Count Up Trigger
                        if(entry.target.classList.contains('count-up-trigger')) {
                            const numberElement = entry.target.querySelector('.count-target');
                            if(numberElement && !numberElement.classList.contains('counted')) {
                                const target = parseInt(numberElement.getAttribute('data-target'));
                                animateValue(numberElement, 0, target, 2000);
                                numberElement.classList.add('counted');
                            }
                        }
                        
                        observer.unobserve(entry.target); // fire once
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });

        // Count Up Function
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                // easeOutQuart easing function
                const easeProgress = 1 - Math.pow(1 - progress, 4);
                obj.innerHTML = Math.floor(easeProgress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    obj.innerHTML = end; // Ensure exact final value
                }
            };
            window.requestAnimationFrame(step);
        }

        // FAQ Toggle Logic
        function toggleFAQ(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('iconify-icon');
            const isExpanded = content.classList.contains('expanded');
            
            // Close all other FAQs (optional, but good UX)
            document.querySelectorAll('.accordion-content').forEach(el => {
                if (el !== content) {
                    el.classList.remove('expanded');
                    el.previousElementSibling.querySelector('iconify-icon').style.transform = 'rotate(0deg)';
                    el.previousElementSibling.querySelector('span').classList.remove('text-[#5C4CFF]');
                }
            });

            if (isExpanded) {
                content.classList.remove('expanded');
                icon.style.transform = 'rotate(0deg)';
                button.querySelector('span').classList.remove('text-[#5C4CFF]');
            } else {
                content.classList.add('expanded');
                icon.style.transform = 'rotate(180deg)';
                button.querySelector('span').classList.add('text-[#5C4CFF]');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-24 pb-24 overflow-hidden bg-white">

<div className="absolute inset-0 bg-grid-pattern opacity-50 z-0"></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-[#5C4CFF] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob z-0"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D280FF] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.08] animate-blob z-0" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white/90 to-transparent z-0"></div>
<div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-[55%] flex flex-col items-start reveal delay-[100ms]">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5C4CFF]/10 text-[#5C4CFF] text-xs font-medium uppercase tracking-widest mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5A8] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5A8]"></span>
</span>
                        AI Strategy Firm
                    </div>
<h1 className="font-display text-5xl md:text-6xl lg:text-[72px] leading-[1.05] font-semibold text-[#171717] tracking-tight mb-6 reveal delay-[200ms]">
                        Your startup is lookin good. Now <span className="bg-gradient-to-r from-[#5C4CFF] to-[#D280FF] bg-clip-text text-transparent">catalyze growth</span> with AI x Human expertise.
                    </h1>
<p className="text-lg md:text-xl text-[#525252] font-light leading-relaxed mb-10 max-w-xl reveal delay-[300ms]">
                        Unblock Tech Dev, Ops, or GTM milestones with AI Buddy Catalyst Labs. Consulting and implementation for tech founders and content creators.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12 reveal delay-[400ms]">
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#5C4CFF] text-white text-sm font-medium hover:bg-[#4A3DE5] transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-sm" href="#">
                            Book a Call
                        </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-[#E5E5E5] text-[#171717] bg-white text-sm font-medium hover:border-[#5C4CFF] hover:text-[#5C4CFF] transition-all hover:-translate-y-0.5" href="#">
                            Explore Products
                        </a>
</div>
<div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-[#737373] reveal delay-[500ms]">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                            Anthropic Partner
                        </div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-[#E5E5E5]"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
                            15+ AI Products
                        </div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-[#E5E5E5]"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                            Ottawa, Canada
                        </div>
</div>
</div>

<div className="w-full lg:w-[45%] relative reveal delay-[400ms] hidden md:block">
<div className="relative rounded-2xl border border-[#E5E5E5] shadow-[0_20px_50px_-12px_rgba(92,76,255,0.1)] overflow-hidden transform rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 bg-white aspect-[4/3] group cursor-pointer">

<div className="h-10 border-b border-[#E5E5E5] flex items-center px-4 gap-2 bg-[#FAFAFA]">
<div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] group-hover:bg-[#EF4444] transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] group-hover:bg-[#FFB266] transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] group-hover:bg-[#00E5A8] transition-colors"></div>
</div>

<div className="p-6 h-full bg-[#FAFAFA]">
<div className="w-1/3 h-6 bg-[#E5E5E5] rounded mb-6"></div>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="h-20 bg-white border border-[#E5E5E5] rounded-xl shadow-sm"></div>
<div className="h-20 bg-white border border-[#E5E5E5] rounded-xl shadow-sm"></div>
<div className="h-20 bg-[#5C4CFF]/10 border border-[#5C4CFF]/20 rounded-xl shadow-sm"></div>
</div>
<div className="w-full h-32 bg-white border border-[#E5E5E5] rounded-xl shadow-sm"></div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white border border-[#E5E5E5] rounded-xl shadow-lg p-3 px-4 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-8 h-8 rounded-full bg-[#FFB266]/10 text-[#FFB266] flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs text-[#737373] uppercase tracking-wider mb-0.5">Efficiency</p>
<p className="text-sm font-medium text-[#171717]">40% Faster</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#FFFFFF] via-[#FAFAFA] to-[#FFFFFF] relative">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-12 reveal">
<h2 className="font-heading text-3xl md:text-4xl font-medium text-[#171717] tracking-tight">Partners</h2>
<div className="w-8 h-px bg-[#E5E5E5] mx-auto mt-6"></div>
</div>

<div className="max-w-[768px] mx-auto bg-white border border-[#5C4CFF]/20 rounded-xl shadow-sm p-8 flex flex-col md:flex-row items-start md:items-center gap-8 hover:-translate-y-1 hover:shadow-lg hover:border-[#5C4CFF]/30 transition-all duration-300 reveal group">
<div className="w-20 h-20 shrink-0 bg-[#FAFAFA] rounded-lg border border-[#E5E5E5] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<span className="font-display text-4xl font-semibold text-[#171717]">A\</span>
</div>
<div className="flex-1">
<div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#5C4CFF]/10 text-[#5C4CFF] text-xs font-medium uppercase tracking-widest mb-3">
                        Approved Member - Anthropic
                    </div>
<h3 className="font-heading text-2xl font-medium text-[#171717] mb-2 tracking-tight">Now a <span className="text-[#5C4CFF]">Claude</span> partner.</h3>
<p className="text-sm text-[#525252] mb-4">Production-grade Claude implementations, architected by certified AI Buddy engineers.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-[#525252] hover:text-[#5C4CFF] transition-colors" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="mt-16 text-center reveal delay-[200ms]">
<p className="text-xs font-medium text-[#737373] uppercase tracking-widest mb-8">Collaborators</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
<span className="font-display text-xl font-medium text-[#171717] hover:opacity-100 transition-opacity cursor-default">ClickUp</span>
<span className="font-display text-xl font-medium text-[#171717] hover:opacity-100 transition-opacity cursor-default">Invest Ottawa</span>
<span className="font-display text-xl font-medium text-[#171717] hover:opacity-100 transition-opacity cursor-default">Ottawa AI Hub</span>
<span className="font-display text-xl font-medium text-[#171717] hover:opacity-100 transition-opacity cursor-default">Clausehound</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#171717] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#5C4CFF]/10 via-transparent to-[#D280FF]/10 opacity-50"></div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<h2 className="font-heading text-3xl md:text-4xl font-medium text-white text-center tracking-tight mb-16 reveal">
                Building the future of AI-powered business
            </h2>
<div className="max-w-[896px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 relative">

<div className="flex flex-col items-center text-center p-6 md:border-r border-[#404040] reveal count-up-trigger">
<iconify-icon className="text-2xl text-[#5C4CFF] mb-3" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<div className="font-display text-5xl md:text-6xl font-semibold text-white tracking-tight flex items-center">
<span className="count-target" data-target="15">0</span>+
                    </div>
<p className="text-sm text-[#A3A3A3] mt-2 max-w-[160px]">AI Products Built</p>
</div>

<div className="flex flex-col items-center text-center p-6 md:border-r border-[#404040] reveal delay-[100ms] count-up-trigger">
<iconify-icon className="text-2xl text-[#5C4CFF] mb-3" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="font-display text-5xl md:text-6xl font-semibold text-white tracking-tight flex items-center">
<span className="count-target" data-target="40">0</span>%
                    </div>
<p className="text-sm text-[#A3A3A3] mt-2 max-w-[160px]">Average Time Saved</p>
</div>

<div className="flex flex-col items-center text-center p-6 md:border-r border-[#404040] reveal delay-[200ms] count-up-trigger">
<iconify-icon className="text-2xl text-[#5C4CFF] mb-3" icon="solar:puzzle-linear" strokeWidth="1.5"></iconify-icon>
<div className="font-display text-5xl md:text-6xl font-semibold text-white tracking-tight flex items-center">
<span className="count-target" data-target="10">0</span>+
                    </div>
<p className="text-sm text-[#A3A3A3] mt-2 max-w-[160px]">Integrations Available</p>
</div>

<div className="flex flex-col items-center text-center p-6 reveal delay-[300ms] count-up-trigger">
<iconify-icon className="text-2xl text-[#5C4CFF] mb-3" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<div className="font-display text-5xl md:text-6xl font-semibold text-white tracking-tight flex items-center">
<span className="count-target" data-target="100">0</span>%
                    </div>
<p className="text-sm text-[#A3A3A3] mt-2 max-w-[160px]">Client Satisfaction</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-12 reveal">
<p className="text-xs font-medium text-[#5C4CFF] uppercase tracking-widest mb-3">Comparison</p>
<h2 className="font-heading text-3xl md:text-4xl font-medium text-[#171717] tracking-tight">Why AI Buddy?</h2>
</div>
<div className="relative reveal delay-[200ms]">

<p className="text-xs text-[#737373] md:hidden text-right mb-2 pr-2">Scroll to compare →</p>
<div className="overflow-x-auto rounded-xl border border-[#E5E5E5] bg-white shadow-sm custom-scrollbar">
<table className="w-full text-left min-w-[800px]">
<thead>
<tr className="bg-[#FAFAFA] border-b border-[#E5E5E5] text-xs font-medium uppercase tracking-wider text-[#737373]">
<th className="p-6 py-4 w-1/5">Criteria</th>
<th className="p-6 py-4 w-1/5 bg-[#5C4CFF]/5 text-[#5C4CFF] border-x border-[#5C4CFF]/10">AI Buddy</th>
<th className="p-6 py-4 w-1/5">Freelancers</th>
<th className="p-6 py-4 w-1/5">In-house Hire</th>
<th className="p-6 py-4 w-1/5">Traditional Agency</th>
</tr>
</thead>
<tbody className="text-sm text-[#525252]">
<tr className="border-b border-[#E5E5E5] hover:bg-[#FAFAFA]/50 transition-colors">
<td className="p-6 font-medium text-[#171717]">Time to Value</td>
<td className="p-6 bg-[#5C4CFF]/5 border-x border-[#5C4CFF]/10"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#00E5A8]" icon="solar:check-circle-linear"></iconify-icon> Days</div></td>
<td className="p-6"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#FFB266]" icon="solar:minus-circle-linear"></iconify-icon> Weeks</div></td>
<td className="p-6"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#EF4444]" icon="solar:close-circle-linear"></iconify-icon> Months</div></td>
<td className="p-6"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#EF4444]" icon="solar:close-circle-linear"></iconify-icon> Months</div></td>
</tr>
<tr className="border-b border-[#E5E5E5] bg-[#FAFAFA] hover:bg-[#F5F5F5] transition-colors">
<td className="p-6 font-medium text-[#171717]">AI Expertise Depth</td>
<td className="p-6 bg-[#5C4CFF]/5 border-x border-[#5C4CFF]/10"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#00E5A8]" icon="solar:check-circle-linear"></iconify-icon> Specialized</div></td>
<td className="p-6"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#FFB266]" icon="solar:minus-circle-linear"></iconify-icon> Variable</div></td>
<td className="p-6"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#FFB266]" icon="solar:minus-circle-linear"></iconify-icon> Generalist</div></td>
<td className="p-6"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#FFB266]" icon="solar:minus-circle-linear"></iconify-icon> Generalist</div></td>
</tr>
<tr className="border-b border-[#E5E5E5] hover:bg-[#FAFAFA]/50 transition-colors">
<td className="p-6 font-medium text-[#171717]">Cost Structure</td>
<td className="p-6 bg-[#5C4CFF]/5 border-x border-[#5C4CFF]/10"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#00E5A8]" icon="solar:check-circle-linear"></iconify-icon> Transparent</div></td>
<td className="p-6"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#00E5A8]" icon="solar:check-circle-linear"></iconify-icon> Low</div></td>
<td className="p-6"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#EF4444]" icon="solar:close-circle-linear"></iconify-icon> High Fixed</div></td>
<td className="p-6"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#EF4444]" icon="solar:close-circle-linear"></iconify-icon> High Retainer</div></td>
</tr>
<tr className="hover:bg-[#FAFAFA]/50 transition-colors">
<td className="p-6 font-medium text-[#171717]">Strategic Alignment</td>
<td className="p-6 bg-[#5C4CFF]/5 border-x border-[#5C4CFF]/10 rounded-br-xl"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#00E5A8]" icon="solar:check-circle-linear"></iconify-icon> High</div></td>
<td className="p-6"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#EF4444]" icon="solar:close-circle-linear"></iconify-icon> Low</div></td>
<td className="p-6"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#00E5A8]" icon="solar:check-circle-linear"></iconify-icon> High</div></td>
<td className="p-6"><div className="flex items-center gap-2"><iconify-icon className="text-xl text-[#FFB266]" icon="solar:minus-circle-linear"></iconify-icon> Medium</div></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#171717] to-[#262626] relative overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern-dark opacity-[0.07] z-0"></div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">

<div className="flex flex-col items-start reveal">
<div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E8E6FF] text-xs font-medium uppercase tracking-widest mb-6">
                        Flagship Product
                    </div>
<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
                        DocDirector
                    </h2>
<p className="text-lg text-[#A3A3A3] font-light leading-relaxed mb-10">
                        Create startup-ready documents in minutes. AI-powered document generation that understands your business context.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-4 text-sm text-[#D4D4D4]">
<div className="w-7 h-7 rounded-full bg-[#00E5A8]/15 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#00E5A8] text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
                            AI-powered document drafting
                        </li>
<li className="flex items-center gap-4 text-sm text-[#D4D4D4]">
<div className="w-7 h-7 rounded-full bg-[#00E5A8]/15 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#00E5A8] text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
                            Business context awareness
                        </li>
<li className="flex items-center gap-4 text-sm text-[#D4D4D4]">
<div className="w-7 h-7 rounded-full bg-[#00E5A8]/15 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#00E5A8] text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
                            Export to PDF, DOCX, and more
                        </li>
</ul>
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#5C4CFF] text-white text-sm font-medium hover:bg-[#4A3DE5] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(92,76,255,0.5)]" href="#">
                        Try DocDirector
                    </a>
</div>

<div className="relative reveal delay-[300ms]">
<div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden shadow-2xl aspect-[4/3] p-2">

<div className="w-full h-full rounded-xl bg-[#171717] border border-white/5 overflow-hidden flex flex-col">
<div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-white/[0.02]">
<div className="w-24 h-4 bg-white/10 rounded"></div>
<div className="w-8 h-8 rounded-full bg-[#5C4CFF]/20 flex items-center justify-center text-white/50 text-xs">AI</div>
</div>
<div className="flex-1 p-6 flex gap-6">
<div className="w-1/4 h-full border-r border-white/10 pr-6 space-y-4">
<div className="w-full h-8 bg-white/5 rounded"></div>
<div className="w-3/4 h-4 bg-white/5 rounded"></div>
<div className="w-5/6 h-4 bg-white/5 rounded"></div>
</div>
<div className="flex-1 space-y-6">
<div className="w-1/2 h-8 bg-white/10 rounded"></div>
<div className="w-full h-32 bg-white/5 rounded-lg p-4 border border-white/10">
<div className="w-full h-2 bg-[#5C4CFF]/30 rounded mb-3 w-[80%]"></div>
<div className="w-full h-2 bg-[#5C4CFF]/20 rounded mb-3 w-[90%]"></div>
<div className="w-full h-2 bg-[#5C4CFF]/20 rounded w-[60%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-3 px-4 flex items-center gap-3 reveal delay-[600ms]">
<div className="w-8 h-8 rounded-full bg-[#00E5A8]/20 text-[#00E5A8] flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">10x Faster Generation</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-16 reveal">
<p className="text-xs font-medium text-[#5C4CFF] uppercase tracking-widest mb-3">What We Offer</p>
<h2 className="font-heading text-3xl md:text-4xl font-medium text-[#171717] tracking-tight">Our Services</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group block bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#5C4CFF]/30 transition-all duration-300 reveal relative" href="#">
<div className="relative aspect-[4/3] overflow-hidden bg-[#FAFAFA]">

<div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] to-[#E5E5E5] group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
<iconify-icon className="text-6xl text-[#171717]/10" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-[#171717]/0 group-hover:bg-[#171717]/5 transition-colors duration-300"></div>
</div>
<div className="p-6 relative">
<h3 className="font-heading text-xl font-medium text-[#171717] mb-2">CMO as a Service</h3>
<p className="text-sm text-[#525252] line-clamp-2 mb-6">Strategic marketing leadership powered by AI insights to scale your Go-To-Market strategy effectively.</p>
<div className="inline-flex items-center gap-1.5 text-sm font-medium text-[#525252] group-hover:text-[#5C4CFF] transition-colors">
                            Learn more <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#5C4CFF] to-[#D280FF] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
</a>

<a className="group block bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#5C4CFF]/30 transition-all duration-300 reveal delay-[100ms] relative" href="#">
<div className="relative aspect-[4/3] overflow-hidden bg-[#FAFAFA]">
<div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] to-[#E5E5E5] group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
<iconify-icon className="text-6xl text-[#171717]/10" icon="solar:code-square-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-[#171717]/0 group-hover:bg-[#171717]/5 transition-colors duration-300"></div>
</div>
<div className="p-6 relative">
<h3 className="font-heading text-xl font-medium text-[#171717] mb-2">CTO as a Service</h3>
<p className="text-sm text-[#525252] line-clamp-2 mb-6">Technical architecture, vendor selection, and AI implementation roadmaps for growing startups.</p>
<div className="inline-flex items-center gap-1.5 text-sm font-medium text-[#525252] group-hover:text-[#5C4CFF] transition-colors">
                            Learn more <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#5C4CFF] to-[#D280FF] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
</a>

<a className="group block bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#5C4CFF]/30 transition-all duration-300 reveal delay-[200ms] relative" href="#">
<div className="relative aspect-[4/3] overflow-hidden bg-[#FAFAFA]">
<div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] to-[#E5E5E5] group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
<iconify-icon className="text-6xl text-[#171717]/10" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-[#171717]/0 group-hover:bg-[#171717]/5 transition-colors duration-300"></div>
</div>
<div className="p-6 relative">
<h3 className="font-heading text-xl font-medium text-[#171717] mb-2">DocDirector Setup</h3>
<p className="text-sm text-[#525252] line-clamp-2 mb-6">Custom implementation and fine-tuning of our flagship document generation platform for your specific needs.</p>
<div className="inline-flex items-center gap-1.5 text-sm font-medium text-[#525252] group-hover:text-[#5C4CFF] transition-colors">
                            Learn more <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#5C4CFF] to-[#D280FF] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-12 reveal">
<p className="text-xs font-medium text-[#5C4CFF] uppercase tracking-widest mb-3">Ecosystem</p>
<h2 className="font-heading text-3xl md:text-4xl font-medium text-[#171717] tracking-tight mb-4">Integrations</h2>
<p className="text-lg text-[#525252] font-light max-w-2xl mx-auto">Connect with the tools you already use to supercharge your workflow.</p>
</div>
</div>

<div className="relative w-full py-6 mask-edges reveal delay-[200ms]">
<div className="flex w-max animate-scroll-infinite hover:[animation-play-state:paused] gap-6 px-6">


</div>
</div>
<div className="text-center mt-12 reveal delay-[300ms]">
<a className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#E5E5E5] text-[#171717] bg-white text-sm font-medium hover:border-[#5C4CFF] hover:text-[#5C4CFF] transition-all" href="#">
                Request Integration
            </a>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-16 reveal">
<p className="text-xs font-medium text-[#5C4CFF] uppercase tracking-widest mb-3">Our Process</p>
<h2 className="font-heading text-3xl md:text-4xl font-medium text-[#171717] tracking-tight">How We Work</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">

<div className="lg:h-[500px] reveal order-2 lg:order-1">
<div className="sticky top-24 rounded-2xl overflow-hidden bg-gradient-to-br from-[#171717] to-[#262626] border border-[#404040] aspect-square lg:aspect-auto lg:h-[400px] shadow-2xl relative group">
<div className="absolute inset-0 bg-[#5C4CFF]/5"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-white/20 animate-spin" style={{animationDuration: '10s'}}></div>
<div className="absolute w-24 h-24 rounded-full border border-[#5C4CFF]/30 animate-spin" style={{animationDuration: '7s', animationDirection: 'reverse'}}></div>
<iconify-icon className="text-5xl text-white/80 absolute" icon="solar:settings-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative reveal delay-[200ms] order-1 lg:order-2">

<div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-[#E5E5E5] z-0"></div>
<div className="space-y-6 relative z-10">

<div className="flex gap-6 cursor-pointer group">
<div className="w-8 h-8 shrink-0 rounded-full bg-[#5C4CFF] text-white flex items-center justify-center text-sm font-medium z-10 ring-4 ring-white transition-colors">1</div>
<div className="flex-1 bg-[#5C4CFF]/5 border border-[#5C4CFF]/20 rounded-xl p-6 shadow-sm transition-all">
<h3 className="font-heading text-xl font-medium text-[#171717] mb-2">Discovery Call</h3>
<p className="text-sm text-[#525252] mb-4">We analyze your current bottlenecks and identify high-impact AI opportunities.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-[#525252]"><iconify-icon className="text-[#00E5A8] text-base" icon="solar:check-circle-linear"></iconify-icon> Free consultation</li>
<li className="flex items-center gap-2 text-xs text-[#525252]"><iconify-icon className="text-[#00E5A8] text-base" icon="solar:check-circle-linear"></iconify-icon> No commitment</li>
<li className="flex items-center gap-2 text-xs text-[#525252]"><iconify-icon className="text-[#00E5A8] text-base" icon="solar:check-circle-linear"></iconify-icon> Custom analysis</li>
</ul>
</div>
</div>

<div className="flex gap-6 cursor-pointer group">
<div className="w-8 h-8 shrink-0 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] text-[#737373] group-hover:border-[#5C4CFF] group-hover:text-[#5C4CFF] flex items-center justify-center text-sm font-medium z-10 ring-4 ring-white transition-colors">2</div>
<div className="flex-1 bg-white border border-[#E5E5E5] group-hover:border-[#D4D4D4] rounded-xl p-6 transition-all">
<h3 className="font-heading text-xl font-medium text-[#171717] mb-2">Strategy &amp; Roadmap</h3>
<p className="text-sm text-[#525252]">Clear deliverables, timeline estimation, and budget alignment before building.</p>
</div>
</div>

<div className="flex gap-6 cursor-pointer group">
<div className="w-8 h-8 shrink-0 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] text-[#737373] group-hover:border-[#5C4CFF] group-hover:text-[#5C4CFF] flex items-center justify-center text-sm font-medium z-10 ring-4 ring-white transition-colors">3</div>
<div className="flex-1 bg-white border border-[#E5E5E5] group-hover:border-[#D4D4D4] rounded-xl p-6 transition-all">
<h3 className="font-heading text-xl font-medium text-[#171717] mb-2">Build &amp; Launch</h3>
<p className="text-sm text-[#525252]">Dedicated engineering team delivering production-ready output with weekly updates.</p>
</div>
</div>
</div>
<div className="mt-10 ml-14">
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#5C4CFF] text-white text-sm font-medium hover:bg-[#4A3DE5] transition-all shadow-sm hover:-translate-y-0.5 hover:shadow-lg" href="#">
                            Get Started Today
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
<div>
<p className="text-xs font-medium text-[#5C4CFF] uppercase tracking-widest mb-3">Blog</p>
<h2 className="font-heading text-3xl md:text-4xl font-medium text-[#171717] tracking-tight">Latest Insights</h2>
</div>
<a className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-[#525252] hover:text-[#5C4CFF] transition-colors group" href="#">
                    View all posts <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#5C4CFF]/20 transition-all duration-300 reveal group relative">
<div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#5C4CFF]/10 to-[#D280FF]/10 flex items-center justify-center">
<iconify-icon className="text-5xl text-[#5C4CFF]/30 group-hover:scale-110 transition-transform duration-500" icon="solar:pen-new-square-linear"></iconify-icon>
<div className="absolute top-3 left-3 bg-[#5C4CFF]/90 text-white text-[11px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-sm">Strategy</div>
</div>
<div className="p-6">
<time className="text-xs text-[#737373] block mb-3">Oct 24, 2023</time>
<h3 className="font-heading text-lg font-medium text-[#171717] mb-2 line-clamp-2">How to integrate LLMs into your legacy SaaS product without rewriting</h3>
<p className="text-sm text-[#525252] line-clamp-2 mb-4">A practical guide for technical founders on bridging the gap between old architecture and new AI capabilities.</p>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-[#525252] group-hover:text-[#5C4CFF] transition-colors" href="#">
                            Read more <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</article>

<article className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#5C4CFF]/20 transition-all duration-300 reveal delay-[100ms] group relative hidden sm:block">
<div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#171717]/5 to-[#171717]/10 flex items-center justify-center">
<iconify-icon className="text-5xl text-[#171717]/20 group-hover:scale-110 transition-transform duration-500" icon="solar:document-add-linear"></iconify-icon>
<div className="absolute top-3 left-3 bg-[#5C4CFF]/90 text-white text-[11px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-sm">Product</div>
</div>
<div className="p-6">
<time className="text-xs text-[#737373] block mb-3">Oct 18, 2023</time>
<h3 className="font-heading text-lg font-medium text-[#171717] mb-2 line-clamp-2">DocDirector 2.0: Context-aware document generation is here</h3>
<p className="text-sm text-[#525252] line-clamp-2 mb-4">We've completely rebuilt our flagship product to understand your business ontology better than ever.</p>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-[#525252] group-hover:text-[#5C4CFF] transition-colors" href="#">
                            Read more <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</article>

<article className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#5C4CFF]/20 transition-all duration-300 reveal delay-[200ms] group relative hidden lg:block">
<div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#00E5A8]/10 to-[#13BDDA]/10 flex items-center justify-center">
<iconify-icon className="text-5xl text-[#00E5A8]/40 group-hover:scale-110 transition-transform duration-500" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<div className="absolute top-3 left-3 bg-[#5C4CFF]/90 text-white text-[11px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-sm">Case Study</div>
</div>
<div className="p-6">
<time className="text-xs text-[#737373] block mb-3">Oct 12, 2023</time>
<h3 className="font-heading text-lg font-medium text-[#171717] mb-2 line-clamp-2">How StartupX saved 40 hours a week with custom AI ops</h3>
<p className="text-sm text-[#525252] line-clamp-2 mb-4">An inside look at the automated workflows we built for a fast-growing fintech company.</p>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-[#525252] group-hover:text-[#5C4CFF] transition-colors" href="#">
                            Read more <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</article>
</div>
<div className="text-center mt-8 md:hidden reveal">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-[#525252]" href="#">
                    View all posts <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-[768px] mx-auto px-6">
<div className="text-center mb-8 reveal">
<p className="text-xs font-medium text-[#5C4CFF] uppercase tracking-widest mb-3">FAQ</p>
<h2 className="font-heading text-3xl md:text-4xl font-medium text-[#171717] tracking-tight">Frequently Asked Questions</h2>
</div>

<div className="flex flex-wrap justify-center gap-2 mb-10 reveal delay-[100ms]">
<button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-[#5C4CFF] text-white">All</button>
<button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-[#F5F5F5] text-[#525252] hover:bg-[#E5E5E5]">General</button>
<button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-[#F5F5F5] text-[#525252] hover:bg-[#E5E5E5]">Services</button>
<button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-[#F5F5F5] text-[#525252] hover:bg-[#E5E5E5]">Products</button>
</div>

<div className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5] reveal delay-[200ms]">

<div className="faq-item">
<button className="w-full py-5 flex items-center justify-between text-left group" onclick="toggleFAQ(this)">
<span className="font-medium text-[#171717] group-hover:text-[#5C4CFF] transition-colors">What exactly does an AI Strategy firm do?</span>
<iconify-icon className="text-xl text-[#737373] transform transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<p className="text-sm text-[#525252] leading-relaxed pb-5">
                            We bridge the gap between AI capabilities and your business needs. Unlike pure dev shops, we start with strategy—identifying where AI can actually drive ROI, whether that's through cost reduction (Ops) or revenue growth (GTM/Product). Then, we build it.
                        </p>
</div>
</div>

<div className="faq-item">
<button className="w-full py-5 flex items-center justify-between text-left group" onclick="toggleFAQ(this)">
<span className="font-medium text-[#171717] group-hover:text-[#5C4CFF] transition-colors">How long does a typical implementation take?</span>
<iconify-icon className="text-xl text-[#737373] transform transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<p className="text-sm text-[#525252] leading-relaxed pb-5">
                            Depending on complexity, proof-of-concepts can take as little as 2-3 weeks. Full production-grade integrations typically range from 6 to 12 weeks. We emphasize rapid prototyping so you see value quickly.
                        </p>
</div>
</div>

<div className="faq-item">
<button className="w-full py-5 flex items-center justify-between text-left group" onclick="toggleFAQ(this)">
<span className="font-medium text-[#171717] group-hover:text-[#5C4CFF] transition-colors">Is DocDirector included in your consulting services?</span>
<iconify-icon className="text-xl text-[#737373] transform transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<p className="text-sm text-[#525252] leading-relaxed pb-5">
                            DocDirector is available as a standalone SaaS product. However, for consulting clients, we often customize and integrate DocDirector directly into their internal workflows at a discounted rate.
                        </p>
</div>
</div>

<div className="faq-item">
<button className="w-full py-5 flex items-center justify-between text-left group" onclick="toggleFAQ(this)">
<span className="font-medium text-[#171717] group-hover:text-[#5C4CFF] transition-colors">Do you work with non-technical founders?</span>
<iconify-icon className="text-xl text-[#737373] transform transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<p className="text-sm text-[#525252] leading-relaxed pb-5">
                            Absolutely. Our "CTO as a Service" is designed exactly for this. We translate your business vision into technical architecture and handle the execution, speaking plainly without unnecessary jargon.
                        </p>
</div>
</div>
</div>
<div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 reveal delay-[300ms]">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#5C4CFF] text-white text-sm font-medium hover:bg-[#4A3DE5] transition-all" href="#">
                    Book a Call
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#E5E5E5] text-[#171717] bg-white text-sm font-medium hover:border-[#5C4CFF] hover:text-[#5C4CFF] transition-all" href="#">
                    Contact Us
                </a>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#5C4CFF]/5 via-[#D280FF]/5 to-[#5C4CFF]/10">

<div className="absolute top-0 right-0 w-96 h-96 bg-[#5C4CFF] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D280FF] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob pointer-events-none" style={{animationDelay: '4s'}}></div>
<div className="max-w-[768px] mx-auto px-6 text-center relative z-10">
<h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-[#171717] tracking-tight mb-4 reveal">
                Ready to Transform Your Business?
            </h2>
<p className="text-lg text-[#525252] font-light leading-relaxed mb-10 reveal delay-[100ms]">
                Join tech founders and content creators who are building smarter with AI Buddy Catalyst Labs.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 reveal delay-[200ms]">
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#5C4CFF] text-white text-sm font-medium hover:bg-[#4A3DE5] transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-sm" href="#">
                    Book a Call
                </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-[#E5E5E5] text-[#171717] bg-white text-sm font-medium hover:border-[#5C4CFF] hover:text-[#5C4CFF] transition-all hover:-translate-y-0.5" href="#">
                    Explore Products
                </a>
</div>
</div>
</section>



    </>
  );
}
