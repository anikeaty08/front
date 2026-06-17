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
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FBB040]/10 blur-[150px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#1B0036] blur-[150px] rounded-full mix-blend-screen"></div>
</div>

<nav className="relative z-20 flex items-center justify-center py-6 border-b border-white/5 bg-[#1B0036]/90 backdrop-blur-xl sticky top-0">
<div className="flex items-center gap-2 text-white font-medium tracking-tight text-sm uppercase">
<iconify-icon className="text-[#FBB040]" height="18" icon="solar:bolt-linear" width="18"></iconify-icon>
            KILOWATT <span className="text-[#C9C9C9] font-normal">SOCIALS</span>
</div>
</nav>

<section className="relative z-10 pt-24 pb-32 px-6 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
<img alt="Premium Office" className="w-full h-full object-cover mix-blend-luminosity" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#1B0036]/50 via-[#1B0036]/80 to-[#1B0036]"></div>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#FBB040]/50 to-transparent pointer-events-none"></div>
<div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FBB040]/30 bg-[#FBB040]/5 text-[#FBB040] text-xs font-medium tracking-wide mb-8 uppercase backdrop-blur-sm">
<iconify-icon height="16" icon="solar:target-linear" width="16"></iconify-icon>
                Financial Advisors With $10M+ AUM
            </div>
<p className="text-sm md:text-base text-[#C9C9C9] tracking-wide uppercase mb-4 font-medium">
                Financial Advisors With $10M+ AUM Who Want More Qualified Clients From YouTube...
            </p>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.15] mb-8 text-white">
                We'll Build You a YouTube Channel That Adds <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB040] to-[#F9ED32] italic">1-2 AUM Clients Per Month</span> — Done-For-You (Even If You Have Zero Subscribers)
            </h1>
<p className="text-lg md:text-xl text-[#C9C9C9] max-w-3xl mx-auto mb-14 leading-relaxed">
                We handle strategy, scripting, editing, thumbnails, SEO, and posting. You just film once a week. <span className="text-white font-medium">First videos live in 21 days.</span>
</p>
<div className="flex flex-col items-center w-full md:w-auto">
<a className="cta-button w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#FF7F00] text-white px-10 py-5 rounded-xl text-lg md:text-xl font-semibold transition-all duration-300 ring-1 ring-[#FF7F00]/50 min-h-[48px] uppercase tracking-wide" href="#">
                    Book a Call
                    <iconify-icon height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</a>
<div className="flex items-center gap-2 mt-5 text-[#C9C9C9] text-sm font-medium">
<iconify-icon height="16" icon="solar:lock-password-linear" width="16"></iconify-icon>
                    Secure &amp; Confidential Strategy Session
                </div>
</div>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<section className="relative py-24 px-6 z-10">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col items-center text-center mb-16">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs font-medium tracking-wide mb-6 uppercase">
<iconify-icon height="14" icon="solar:star-fall-linear" width="14"></iconify-icon>
                    Social Proof
                </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">Does It Actually Work?</h2>
<p className="text-lg md:text-xl text-[#C9C9C9]">We've Built YouTube Channels For Financial Advisors Who've Added <span className="text-white font-medium italic">Millions in AUM</span></p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

<div className="glass-panel hover:bg-white/[0.04] transition-colors p-10 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-48 h-48 bg-[#FBB040]/5 blur-[60px] rounded-full group-hover:bg-[#FBB040]/10 transition-all"></div>
<div className="flex gap-1 text-[#FBB040] mb-8">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-white leading-relaxed mb-10 font-normal">"Went from <span className="text-[#FBB040] font-medium">$30M</span> to over <span className="text-[#FBB040] font-medium">$100M AUM</span> in 14 months. YouTube is now his #1 source of qualified prospects."</p>
<div className="flex items-center gap-5">
<img alt="Samuel Harnisch" className="w-16 h-16 rounded-xl object-cover border border-white/20 shadow-lg" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium text-white text-lg">Samuel Harnisch</div>
<div className="text-[#C9C9C9] text-sm">Financial Advisor</div>
</div>
</div>
</div>

<div className="glass-panel hover:bg-white/[0.04] transition-colors p-10 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-48 h-48 bg-[#FBB040]/5 blur-[60px] rounded-full group-hover:bg-[#FBB040]/10 transition-all"></div>
<div className="flex gap-1 text-[#FBB040] mb-8">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-white leading-relaxed mb-10 font-normal">"<span className="text-[#FBB040] font-medium">$235,000</span> in 6 months from a channel with 200-300 views per video. His first sales call was 17 minutes with <span className="italic">zero objections</span> — closed on the spot."</p>
<div className="flex items-center gap-5">
<img alt="Kade Wiley" className="w-16 h-16 rounded-xl object-cover border border-white/20 shadow-lg" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-medium text-white text-lg">Kade Wiley</div>
<div className="text-[#C9C9C9] text-sm">Financial Advisor</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="cta-button w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#FF7F00] text-white px-10 py-5 rounded-xl text-lg md:text-xl font-semibold transition-all duration-300 ring-1 ring-[#FF7F00]/50 min-h-[48px] uppercase tracking-wide" href="#">
                    Book a Call
                </a>
</div>
</div>
</section>

<section className="relative py-24 px-6 z-10 bg-black/20 border-y border-white/5">
<div className="max-w-4xl mx-auto relative z-10">
<div className="flex flex-col items-center text-center mb-14">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 text-red-400 text-xs font-medium tracking-wide mb-6 uppercase">
<iconify-icon height="14" icon="solar:danger-triangle-linear" width="14"></iconify-icon>
                    The Problem
                </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">Let's Be Honest...</h2>
<p className="text-xl text-red-400/90 font-medium mb-8">You Didn't Become a Financial Advisor to Be a Content Creator</p>
<div className="text-lg text-[#C9C9C9] leading-relaxed max-w-3xl text-left glass-panel p-8 rounded-2xl border-l-4 border-l-red-500 mb-12">
<p className="mb-4">The problem isn't that you don't believe in YouTube. You've seen other advisors build channels that bring in qualified prospects on autopilot. You know it works. But why isn't it working for you?</p>
<p className="font-medium text-white">The way to make YouTube work isn't to:</p>
</div>
</div>
<div className="grid grid-cols-1 gap-6">
<div className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start group hover:border-white/15 transition-colors">
<div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/10 transition-colors">
<span className="text-xl font-medium text-white">1</span>
</div>
<div>
<h3 className="text-xl font-medium mb-3 text-white">Hire a random editor and hope for the best</h3>
<p className="text-base text-[#C9C9C9] leading-relaxed">YouTube success isn't about flashy cuts and music. It's about strategy — what to say, how to position your expertise, and how to attract <span className="text-white font-medium">$10M+ AUM</span> clients. Most editors just make things look nice. That doesn't book calls.</p>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start group hover:border-white/15 transition-colors">
<div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/10 transition-colors">
<span className="text-xl font-medium text-white">2</span>
</div>
<div>
<h3 className="text-xl font-medium mb-3 text-white">Post 'educational content' and hope people reach out</h3>
<p className="text-base text-[#C9C9C9] leading-relaxed">Giving away value isn't a strategy. Without the right packaging, SEO, and positioning, your 20-minute video on Roth conversions gets <span className="text-white font-medium">47 views and zero calls</span>.</p>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start group hover:border-white/15 transition-colors">
<div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/10 transition-colors">
<span className="text-xl font-medium text-white">3</span>
</div>
<div>
<h3 className="text-xl font-medium mb-3 text-white">Try to copy what worked for influencers</h3>
<p className="text-base text-[#C9C9C9] leading-relaxed">Reverse-engineering Alex Hormozi or Graham Stephan <span className="italic text-white">won't help you land affluent clients</span>.</p>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start group hover:border-white/15 transition-colors">
<div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/10 transition-colors">
<span className="text-xl font-medium text-white">4</span>
</div>
<div>
<h3 className="text-xl font-medium mb-3 text-white">Try to do everything yourself</h3>
<p className="text-base text-[#C9C9C9] leading-relaxed">Scripting. Filming. Editing. Thumbnails. SEO. Posting. If you're handling it all, <span className="text-red-400 font-medium">YouTube goes on the back-burner</span>.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 z-10 overflow-hidden">
<div className="max-w-5xl mx-auto relative z-10">
<div className="flex flex-col items-center text-center mb-16">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 text-green-400 text-xs font-medium tracking-wide mb-6 uppercase">
<iconify-icon height="14" icon="solar:diamond-linear" width="14"></iconify-icon>
                    Value Proposition
                </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">Stop Chasing Prospects</h2>
<p className="text-xl text-green-400 font-medium mb-8">Make Them Come to You Pre-Sold</p>
<p className="text-lg text-[#C9C9C9] leading-relaxed max-w-3xl mb-12">
                    YouTube turns your sales calls from persuasion to confirmation. Your content does all the selling — <span className="text-white font-medium italic">all you do is confirm their decision when they meet with you.</span>
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
<div className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20 text-green-400">
<iconify-icon height="24" icon="solar:check-read-linear" width="24"></iconify-icon>
</div>
<p className="text-lg text-white font-medium mt-2">Your best prospects find you — not the other way around</p>
</div>
<div className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20 text-green-400">
<iconify-icon height="24" icon="solar:user-check-linear" width="24"></iconify-icon>
</div>
<p className="text-lg text-white font-medium mt-2">Prospects show up pre-sold, not skeptical</p>
</div>
<div className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20 text-green-400">
<iconify-icon height="24" icon="solar:moon-sleep-linear" width="24"></iconify-icon>
</div>
<p className="text-lg text-white font-medium mt-2">Your content works while you sleep</p>
</div>
<div className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20 text-green-400">
<iconify-icon height="24" icon="solar:hand-shake-linear" width="24"></iconify-icon>
</div>
<p className="text-lg text-white font-medium mt-2">Fewer no-shows, fewer objections, faster closes</p>
</div>
<div className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20 text-green-400">
<iconify-icon height="24" icon="solar:crown-star-linear" width="24"></iconify-icon>
</div>
<p className="text-lg text-white font-medium mt-2">You become the obvious choice in your market</p>
</div>
<div className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20 text-green-400">
<iconify-icon height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<p className="text-lg text-white font-medium mt-2">Every other channel gets stronger</p>
</div>
</div>

<div className="relative bg-gradient-to-r from-[#FBB040]/10 to-[#F9ED32]/5 border border-[#FBB040]/30 rounded-2xl p-8 md:p-12 text-center mb-16 overflow-hidden">
<div className="absolute inset-0 bg-[#1B0036] mix-blend-color z-0 pointer-events-none"></div>
<div className="relative z-10">
<iconify-icon className="text-[#FBB040] mb-6" height="48" icon="solar:shield-check-linear" width="48"></iconify-icon>
<h3 className="text-2xl md:text-3xl font-medium text-white leading-snug">
                        Done right, one YouTube video per week can add <span className="text-[#FBB040] italic">1-2 qualified AUM clients per month</span> — with prospects who show up ready to sign.
                    </h3>
</div>
</div>
<div className="flex justify-center">
<a className="cta-button w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#FF7F00] text-white px-10 py-5 rounded-xl text-lg md:text-xl font-semibold transition-all duration-300 ring-1 ring-[#FF7F00]/50 min-h-[48px] uppercase tracking-wide" href="#">
                    Book a Call
                </a>
</div>
</div>
</section>

<section className="relative py-24 px-6 z-10 bg-black/20 border-t border-white/5">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col items-center text-center mb-20">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-medium tracking-wide mb-6 uppercase">
<iconify-icon height="14" icon="solar:settings-minimalistic-linear" width="14"></iconify-icon>
                    The System
                </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">A YouTube Channel Built to Bring You Clients</h2>
<p className="text-xl text-[#C9C9C9]">You Film Once a Week. <span className="text-white font-medium italic">We Handle Everything Else.</span></p>
</div>

<div className="relative w-full overflow-x-auto pb-8 hide-scrollbar">
<div className="flex md:grid md:grid-cols-6 items-center gap-4 min-w-max md:min-w-0">

<div className="flex flex-col items-center group w-40 md:w-auto">
<div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mb-4 border-[#FBB040]/20 text-[#FBB040] shadow-lg group-hover:-translate-y-2 transition-transform">
<iconify-icon height="32" icon="solar:lightbulb-bolt-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white text-center">Video Ideation</h3>
</div>

<div className="hidden md:flex justify-center text-white/20">
<iconify-icon height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</div>

<div className="flex flex-col items-center group w-40 md:w-auto">
<div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mb-4 border-white/10 text-white group-hover:-translate-y-2 transition-transform">
<iconify-icon height="32" icon="solar:document-text-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white text-center">Video Scripting</h3>
</div>

<div className="hidden md:flex justify-center text-white/20">
<iconify-icon height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</div>

<div className="flex flex-col items-center group w-40 md:w-auto">
<div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mb-4 border-white/10 text-white group-hover:-translate-y-2 transition-transform">
<iconify-icon height="32" icon="solar:video-frame-cut-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white text-center">Video Editing</h3>
</div>

<div className="hidden md:flex justify-center text-white/20">
<iconify-icon height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</div>

<div className="flex flex-col items-center group w-40 md:w-auto">
<div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mb-4 border-white/10 text-white group-hover:-translate-y-2 transition-transform">
<iconify-icon className="opacity-80" height="32" icon="solar:gallery-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white text-center">Thumbnail Design</h3>
</div>

<div className="hidden md:flex justify-center text-white/20">
<iconify-icon height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</div>

<div className="flex flex-col items-center group w-40 md:w-auto">
<div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mb-4 border-white/10 text-white group-hover:-translate-y-2 transition-transform">
<iconify-icon height="32" icon="solar:box-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white text-center">Video Packaging</h3>
</div>

<div className="hidden md:flex justify-center text-white/20">
<iconify-icon height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</div>

<div className="flex flex-col items-center group w-40 md:w-auto">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FBB040] to-[#F9ED32] flex items-center justify-center mb-4 text-[#1B0036] shadow-[0_0_20px_rgba(251,176,64,0.3)] group-hover:-translate-y-2 transition-transform">
<iconify-icon height="32" icon="solar:magnifer-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white text-center">Search Engine<br/>Optimization</h3>
</div>
</div>
</div>
<div className="flex justify-center mt-16">
<a className="cta-button w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#FF7F00] text-white px-10 py-5 rounded-xl text-lg md:text-xl font-semibold transition-all duration-300 ring-1 ring-[#FF7F00]/50 min-h-[48px] uppercase tracking-wide" href="#">
                    Book a Call
                </a>
</div>
</div>
</section>

<section className="relative py-24 px-6 z-10 border-t border-white/5">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col items-center text-center mb-16">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FBB040]/30 bg-[#FBB040]/5 text-[#FBB040] text-xs font-medium tracking-wide mb-6 uppercase">
<iconify-icon height="14" icon="solar:play-stream-linear" width="14"></iconify-icon>
                    Real Results
                </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">See It In Action</h2>
<p className="text-xl text-[#C9C9C9]">Real Channels. <span className="text-white font-medium italic">Real Results.</span></p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

<div className="glass-panel p-4 rounded-2xl flex flex-col h-[350px] shadow-2xl relative overflow-hidden group border-white/10">
<div className="flex items-center gap-3 mb-4 px-2">
<iconify-icon className="text-white" height="20" icon="solar:chart-square-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-white">YouTube Analytics Dashboard</span>
</div>
<div className="flex-1 rounded-xl overflow-hidden relative border border-white/10">
<img alt="Analytics Dashboard" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1B0036]/20 mix-blend-color"></div>
</div>
</div>

<div className="glass-panel p-4 rounded-2xl flex flex-col h-[350px] shadow-2xl relative overflow-hidden group border-white/10">
<div className="flex items-center gap-3 mb-4 px-2">
<iconify-icon className="text-[#FBB040]" height="20" icon="solar:calendar-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-[#FBB040]">Calendar Bookings</span>
</div>
<div className="flex-1 rounded-xl overflow-hidden relative border border-[#FBB040]/20">
<img alt="Calendar Booking" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#FBB040]/10 mix-blend-color"></div>
</div>
</div>

<div className="glass-panel p-4 rounded-2xl flex flex-col h-[350px] shadow-2xl relative overflow-hidden group border-white/10">
<div className="flex items-center gap-3 mb-4 px-2">
<iconify-icon className="text-green-400" height="20" icon="solar:graph-up-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-green-400">Subscriber Growth</span>
</div>
<div className="flex-1 rounded-xl overflow-hidden relative border border-green-500/20">
<img alt="Growth Visual" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-green-500/10 mix-blend-color"></div>
</div>
</div>

<div className="glass-panel p-4 rounded-2xl flex flex-col h-[350px] shadow-2xl relative overflow-hidden group border-white/10">
<div className="flex items-center gap-3 mb-4 px-2">
<iconify-icon className="text-white" height="20" icon="solar:video-library-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-white">High-Converting Thumbnails</span>
</div>
<div className="flex-1 grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
<div className="relative overflow-hidden rounded-lg border border-white/10">
<img alt="Video Thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative overflow-hidden rounded-lg border border-white/10">
<img alt="Video Thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative overflow-hidden rounded-lg border border-white/10 col-span-2">
<img alt="Video Thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center shadow-lg">
<iconify-icon className="text-white ml-1" height="24" icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="cta-button w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#FF7F00] text-white px-10 py-5 rounded-xl text-lg md:text-xl font-semibold transition-all duration-300 ring-1 ring-[#FF7F00]/50 min-h-[48px] uppercase tracking-wide" href="#">
                    Book a Call
                </a>
</div>
</div>
</section>

<section className="relative py-24 px-6 z-10 bg-black/20 border-t border-white/5">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col items-center text-center mb-16">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-xs font-medium tracking-wide mb-6 uppercase">
<iconify-icon height="14" icon="solar:scale-linear" width="14"></iconify-icon>
                    Why This Works
                </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">Persuasion vs. Confirmation</h2>
<p className="text-xl text-[#C9C9C9]">YouTube Decides <span className="text-white font-medium italic">Which Conversation You're Having</span></p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

<div className="glass-panel border-t-4 border-t-red-500 rounded-2xl p-10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
<h3 className="text-2xl font-medium mb-8 pb-4 text-white border-b border-white/10">Prospects Who <span className="text-red-400">Haven't</span> Watched Your Content:</h3>
<ul className="space-y-6">
<li className="flex gap-4 items-start">
<iconify-icon className="text-red-400 shrink-0" height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="text-lg text-[#C9C9C9]">Show up cold and guarded</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-red-400 shrink-0" height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="text-lg text-[#C9C9C9]">Burn half the call just getting up to speed</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-red-400 shrink-0" height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="text-lg text-[#C9C9C9]">Need multiple follow-ups to make a decision</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-red-400 shrink-0" height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="text-lg text-[#C9C9C9]">Hit you with objections</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-red-400 shrink-0" height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="text-lg text-[#C9C9C9]">Treat the call like an interview</span>
</li>
</ul>
</div>

<div className="glass-panel border-t-4 border-t-green-500 rounded-2xl p-10 relative overflow-hidden bg-white/[0.03]">
<div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
<h3 className="text-2xl font-medium mb-8 pb-4 text-white border-b border-white/10">Prospects Who've <span className="text-green-400">Watched</span> Your YouTube:</h3>
<ul className="space-y-6">
<li className="flex gap-4 items-start">
<iconify-icon className="text-green-400 shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-lg text-white font-medium">Show up warm and ready to move</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-green-400 shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-lg text-white font-medium">Already know your philosophy</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-green-400 shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-lg text-white font-medium">Reference things you said in videos</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-green-400 shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-lg text-white font-medium">Ask <span className="italic text-[#FBB040]">how do we get started</span></span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-green-400 shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-lg text-white font-medium">Treat the call like confirmation</span>
</li>
</ul>
</div>
</div>
<div className="flex justify-center">
<a className="cta-button w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#FF7F00] text-white px-10 py-5 rounded-xl text-lg md:text-xl font-semibold transition-all duration-300 ring-1 ring-[#FF7F00]/50 min-h-[48px] uppercase tracking-wide" href="#">
                    Book a Call
                </a>
</div>
</div>
</section>

<section className="relative py-24 px-6 z-10 border-t border-white/5">
<div className="max-w-3xl mx-auto">
<div className="flex flex-col items-center text-center mb-16">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs font-medium tracking-wide mb-6 uppercase">
<iconify-icon height="14" icon="solar:question-circle-linear" width="14"></iconify-icon>
                    Questions Answered
                </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<div className="glass-panel rounded-xl px-8 py-6 cursor-pointer hover:bg-white/[0.04] transition-colors flex justify-between items-center group">
<span className="text-lg font-medium text-white">How much time do I actually need to commit?</span>
<iconify-icon className="text-white/40 group-hover:text-white transition-colors" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>

<div className="glass-panel rounded-xl px-8 py-6 cursor-pointer hover:bg-white/[0.04] transition-colors flex justify-between items-center group">
<span className="text-lg font-medium text-white">Do I need to be good on camera?</span>
<iconify-icon className="text-white/40 group-hover:text-white transition-colors" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>

<div className="glass-panel rounded-xl px-8 py-6 cursor-pointer hover:bg-white/[0.04] transition-colors flex justify-between items-center group">
<span className="text-lg font-medium text-white">How long until I see results?</span>
<iconify-icon className="text-white/40 group-hover:text-white transition-colors" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>

<div className="glass-panel rounded-xl px-8 py-6 cursor-pointer hover:bg-white/[0.04] transition-colors flex justify-between items-center group">
<span className="text-lg font-medium text-white">What if I already have a channel?</span>
<iconify-icon className="text-white/40 group-hover:text-white transition-colors" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 z-10 border-t border-white/5">
<div className="max-w-4xl mx-auto">
<div className="relative glass-panel rounded-[2rem] p-12 md:p-24 text-center overflow-hidden border border-[#FBB040]/20">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-[#FBB040] to-[#F9ED32] blur-[150px] opacity-10 rounded-full pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-white">Every Month You Wait...</h2>
<p className="text-2xl md:text-3xl text-[#FBB040] mb-8 font-medium italic">Is Another Month Your Competitors Are Building Their Channel</p>
<p className="text-lg md:text-xl text-[#C9C9C9] mb-12 max-w-2xl mx-auto">Click below, book a call, and let's turn YouTube into your <span className="text-white font-medium">#1 source of AUM clients.</span></p>
<a className="cta-button w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#FF7F00] text-white px-12 py-6 rounded-xl text-xl font-semibold transition-all duration-300 ring-1 ring-[#FF7F00]/50 min-h-[48px] uppercase tracking-wide" href="#">
                        Book a Call
                        <iconify-icon height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="relative z-10 py-12 px-6 border-t border-white/5 text-center mt-12 bg-[#1B0036]">
<div className="text-[#C9C9C9] font-medium tracking-wide text-sm mb-6 uppercase">
            Kilowatt Socials 2026
        </div>
<p className="text-xs text-[#C9C9C9]/60 max-w-3xl mx-auto leading-relaxed">
            This site is not a part of the Facebook™ website or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. Facebook™ is a trademark of Meta Platforms, Inc.
        </p>
</footer>

    </>
  );
}
