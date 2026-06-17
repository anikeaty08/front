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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
purple: '#7C3AED',
pink: '#EC4899',
green: '#22C55E', // Success
yellow: '#EAB308', // Warning
orange: '#F97316', // Caution
red: '#EF4444',    // Fail
dark: '#1F2937',
gray: '#6B7280',
light: '#F8F9FA',
border: '#E5E7EB',
'green-tint': '#F0FDF4',
'red-tint': '#FEF2F2',
'yellow-tint': '#FFFBEB',
}
},
boxShadow: {
'subtle': '0 1px 2px rgba(0,0,0,0.05)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
'glow': '0 0 15px rgba(124, 58, 237, 0.2)',
},
animation: {
'fade-in': 'fadeIn 0.3s ease-out',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(5px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const sidebar = document.getElementById('seoSidebar');
        const inputState = document.getElementById('seoInputState');
        const resultsState = document.getElementById('seoResultsState');
        
        let isSeoOpen = false;

        function toggleSeoPanel() {
            if (!isSeoOpen) {
                // Open Sidebar
                sidebar.classList.remove('hidden');
                setTimeout(() => {
                    sidebar.classList.remove('translate-x-full');
                    sidebar.classList.remove('md:translate-x-0'); // Reset md override for animation consistency if needed
                }, 10);
                // Default to input state if first time, or toggle based on logic
                // Here we simply show input state first
                inputState.classList.remove('hidden');
                resultsState.classList.add('hidden');
            } else {
                // Close Sidebar
                sidebar.classList.add('translate-x-full');
                setTimeout(() => {
                    sidebar.classList.add('hidden');
                }, 300);
            }
            isSeoOpen = !isSeoOpen;
        }

        function generateScore() {
            // Switch views
            inputState.classList.add('hidden');
            resultsState.classList.remove('hidden');
            
            // Trigger animation for the default yellow state
            setScoreState('yellow');
        }

        function toggleAccordion(id) {
            const content = document.getElementById(id);
            const icon = document.getElementById(id + 'Icon');
            
            if (content.classList.contains('open')) {
                content.classList.remove('open');
                if(icon) icon.classList.remove('rotate');
            } else {
                content.classList.add('open');
                if(icon) icon.classList.add('rotate');
            }
        }

        // Variation Logic
        function setScoreState(state) {
            const ring = document.getElementById('scoreRing');
            const label = document.getElementById('scoreLabel');
            const text = document.getElementById('scoreText');
            
            // Full Circumference = 2 * PI * 65 ≈ 408.4
            const circumference = 408.4;
            let percent, color, labelText, labelBg, labelColor;

            switch(state) {
                case 'green': // Publish Ready
                    percent = 87;
                    color = '#22C55E';
                    labelText = 'Publish Ready';
                    labelBg = '#22C55E';
                    labelColor = 'white';
                    break;
                case 'yellow': // Almost There
                    percent = 72;
                    color = '#EAB308';
                    labelText = 'Almost There';
                    labelBg = '#EAB308';
                    labelColor = '#1F2937'; // Dark text
                    break;
                case 'orange': // Needs Work
                    percent = 48;
                    color = '#F97316';
                    labelText = 'Needs Work';
                    labelBg = '#F97316';
                    labelColor = 'white';
                    break;
                case 'red': // Not Ready
                    percent = 28;
                    color = '#EF4444';
                    labelText = 'Not Ready';
                    labelBg = '#EF4444';
                    labelColor = 'white';
                    break;
            }

            // Update Text
            text.innerText = percent;
            
            // Update Label
            label.innerText = labelText;
            label.style.backgroundColor = labelBg;
            label.style.color = labelColor;

            // Update Ring
            const offset = circumference - (percent / 100) * circumference;
            ring.style.stroke = color;
            ring.style.strokeDashoffset = circumference; // Reset
            setTimeout(() => {
                ring.style.strokeDashoffset = offset;
            }, 50);
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
      

<aside className="w-[240px] bg-white border-r border-brand-border flex flex-col shrink-0 hidden md:flex z-10">
<div className="h-16 px-5 flex items-center border-b border-brand-border shrink-0">
<div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center text-white font-bold text-lg mr-2 shadow-sm">W</div>
<h1 className="text-base font-bold tracking-tight">WriteRush</h1>
</div>
<nav className="p-4 space-y-1">
<div className="flex items-center gap-3 px-3 py-2 text-brand-gray/60">
<iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-sm font-medium">Topic Idea</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-brand-gray/60">
<iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-sm font-medium">Title</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-brand-gray/60">
<iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-sm font-medium">Outline</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-brand-light text-brand-purple font-semibold">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
<span className="text-sm">First Draft</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-brand-gray/60">
<iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Final Draft</span>
</div>
</nav>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#F8F9FA] relative z-0">

<header className="h-16 bg-white border-b border-brand-border flex items-center justify-between px-6 shrink-0 z-20">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-sm text-brand-gray">
<span className="text-brand-dark font-semibold">First Draft</span>
<span className="text-brand-border">/</span>
<span>Content Marketing Guide</span>
</div>

<button className="group flex items-center gap-2 px-4 py-2 bg-white border border-brand-purple rounded-md hover:bg-[#F3E8FF] transition-colors shadow-sm ml-2" onclick="toggleSeoPanel()">
<iconify-icon className="text-brand-purple" icon="solar:chart-2-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-brand-purple">SEO Score</span>
</button>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-brand-gray font-medium">1,240 words</span>
<div className="h-6 w-px bg-brand-border mx-1"></div>
<button className="p-2 text-brand-gray hover:bg-brand-light rounded"><iconify-icon icon="solar:undo-left-linear" width="20"></iconify-icon></button>
<button className="p-2 text-brand-gray hover:bg-brand-light rounded"><iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon></button>
<button className="ml-2 px-5 py-2 bg-brand-dark text-white rounded-lg text-sm font-medium hover:bg-black transition-shadow shadow-subtle">Next</button>
</div>
</header>

<div className="flex-1 overflow-y-auto custom-scroll p-8 flex justify-center">
<div className="w-full max-w-[760px] bg-white min-h-[1000px] shadow-card border border-brand-border p-12 rounded-xl">
<h1 className="text-4xl font-extrabold text-brand-dark mb-8 tracking-tight leading-tight">Content Marketing: A Comprehensive Guide for 2024</h1>
<div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
<p>Content marketing is more than just a buzzword. It is a strategic approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience.</p>
<h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Why Content Matters</h2>
<p>In the digital age, consumers are bombarded with information. To stand out, your content must not only be high quality but also optimized for search engines. This ensures that your message reaches the right people at the right time.</p>
<h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Developing a Strategy</h2>
<p>Before writing a single word, you need a plan. Who is your audience? What are their pain points? Understanding these elements is crucial for success.</p>
<div className="my-8 border-2 border-dashed border-brand-border rounded-lg p-8 flex flex-col items-center justify-center text-brand-gray cursor-pointer hover:border-brand-purple/50 hover:bg-brand-light transition-colors">
<iconify-icon className="mb-2" icon="solar:gallery-add-linear" width="32"></iconify-icon>
<span className="text-sm font-medium">Add Image</span>
</div>
</div>
</div>
</div>
</main>


<aside className="w-[360px] bg-white border-l border-brand-border flex flex-col shrink-0 z-30 fixed right-0 h-full shadow-2xl md:relative md:shadow-none translate-x-full md:translate-x-0 transition-transform duration-300 hidden" id="seoSidebar">

<div className="h-16 px-5 flex items-center justify-between border-b border-brand-border shrink-0 bg-white">
<h2 className="text-[18px] font-bold text-brand-purple flex items-center gap-2">
                SEO Analysis
            </h2>
<button className="text-brand-gray hover:text-brand-dark transition-colors p-1 rounded-md hover:bg-brand-light" onclick="toggleSeoPanel()">
<iconify-icon icon="solar:sort-vertical-linear" width="20"></iconify-icon> 
</button>
</div>

<div className="flex-1 overflow-y-auto custom-scroll relative bg-white pb-20">

<div className="p-5 space-y-4 animate-fade-in" id="seoInputState">

<div className="space-y-1.5">
<label className="block text-sm font-semibold text-brand-dark">Focus Keyword <span className="text-brand-red">*</span></label>
<input className="w-full text-sm px-3 py-2.5 rounded-lg border border-brand-border focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all placeholder-brand-gray/50" id="inputKeyword" placeholder="e.g., content marketing strategy" type="text" value="content marketing"/>
</div>

<div className="space-y-1.5">
<label className="block text-sm font-semibold text-brand-dark">Secondary Keywords <span className="text-brand-gray font-normal">(optional)</span></label>
<div className="border border-brand-border rounded-lg p-2 focus-within:border-brand-purple focus-within:ring-1 focus-within:ring-brand-purple transition-all bg-white">
<div className="flex flex-wrap gap-2 mb-2">
<span className="bg-brand-light text-brand-dark text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
                                digital strategy <button className="hover:text-brand-red"><iconify-icon icon="solar:close-circle-bold" width="12"></iconify-icon></button>
</span>
</div>
<input className="w-full text-sm outline-none placeholder-brand-gray/50" placeholder="Up to 5 keywords, comma-separated" type="text"/>
</div>
<div className="flex justify-between">
<p className="text-[11px] text-brand-gray">Checks related keyword coverage in your content</p>
<p className="text-[11px] text-brand-gray">1/5</p>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-sm font-semibold text-brand-dark">Meta Title</label>
<div className="relative">
<input className="w-full text-sm px-3 py-2.5 pl-3 pr-8 rounded-lg border border-brand-border bg-[#F3F4F6] text-brand-dark cursor-not-allowed" readonly="" type="text" value="Content Marketing: A Comprehensive Guide for 2024"/>
<iconify-icon className="absolute right-3 top-3 text-brand-gray" icon="solar:lock-keyhole-linear" width="16"></iconify-icon>
</div>
<div className="flex justify-end">
<span className="text-[11px] font-medium text-brand-green">54/60 characters</span>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-sm font-semibold text-brand-dark">Meta Description</label>
<textarea className="w-full text-sm px-3 py-2.5 rounded-lg border border-brand-border focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none transition-all placeholder-brand-gray/50 resize-none" placeholder="Write a compelling description for search results (140-155 characters recommended)" rows="4"></textarea>
<div className="flex justify-end">
<span className="text-[11px] font-medium text-brand-gray">0/155 characters</span>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-sm font-semibold text-brand-dark">URL Slug</label>
<div className="flex rounded-lg border border-brand-border overflow-hidden focus-within:border-brand-purple focus-within:ring-1 focus-within:ring-brand-purple transition-all">
<span className="bg-[#F3F4F6] px-3 py-2.5 text-xs text-brand-gray border-r border-brand-border flex items-center shrink-0">yoursite.com/blog/</span>
<input className="w-full text-sm px-3 py-2.5 outline-none text-brand-dark" type="text" value="content-marketing-guide-2024"/>
</div>
<div className="flex justify-end">
<span className="text-[11px] text-brand-gray">28/60 characters</span>
</div>
</div>

<div className="pt-6">
<button className="w-full bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold py-3.5 rounded-lg shadow-lg hover:shadow-glow hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2" onclick="generateScore()">
<iconify-icon icon="solar:stars-linear" width="20"></iconify-icon>
                        Generate Score
                    </button>
</div>
</div>

<div className="hidden animate-fade-in" id="seoResultsState">

<div className="bg-white pt-8 pb-6 px-5 flex flex-col items-center border-b border-brand-border/60">
<div className="relative w-[140px] h-[140px] mb-2">

<svg className="w-full h-full transform -rotate-90">
<circle cx="70" cy="70" fill="transparent" r="65" stroke="#E5E7EB" strokeWidth="10"></circle>

<circle className="progress-ring__circle" cx="70" cy="70" fill="transparent" id="scoreRing" r="65" stroke="#EAB308" stroke-dasharray="408.4" stroke-dashoffset="114" strokeLinecap="round" strokeWidth="10"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-[48px] font-bold text-brand-dark leading-none" id="scoreText">72</span>
<span className="text-[16px] text-brand-gray font-medium">/100</span>
</div>
</div>
<span className="px-4 py-1.5 bg-brand-yellow text-brand-dark text-sm font-semibold rounded-[20px] mb-4" id="scoreLabel">
                        Almost There
                    </span>

<div className="flex w-full justify-between px-2 pt-2">
<div className="flex flex-col items-center gap-0.5">
<span className="text-[12px] font-medium text-brand-gray">Title</span>
<span className="text-[14px] font-bold text-brand-dark">16/20</span>
</div>
<div className="w-px h-8 bg-brand-border"></div>
<div className="flex flex-col items-center gap-0.5">
<span className="text-[12px] font-medium text-brand-gray">Keywords</span>
<span className="text-[14px] font-bold text-brand-dark">22/30</span>
</div>
<div className="w-px h-8 bg-brand-border"></div>
<div className="flex flex-col items-center gap-0.5">
<span className="text-[12px] font-medium text-brand-gray">Content</span>
<span className="text-[14px] font-bold text-brand-dark">24/30</span>
</div>
<div className="w-px h-8 bg-brand-border"></div>
<div className="flex flex-col items-center gap-0.5">
<span className="text-[12px] font-medium text-brand-gray">Meta</span>
<span className="text-[14px] font-bold text-brand-dark">14/20</span>
</div>
</div>
</div>


<div className="border-b border-brand-border">
<button className="w-full px-4 py-3 bg-white hover:bg-gray-50 transition-colors" onclick="toggleAccordion('cat1')">
<div className="flex items-center justify-between mb-2">
<span className="text-[16px] font-semibold text-brand-dark">Title Optimization</span>
<div className="flex items-center gap-2">
<span className="text-[14px] font-medium text-brand-gray">16/20 pts</span>
<iconify-icon className="text-brand-gray accordion-icon rotate" icon="solar:alt-arrow-down-linear" id="cat1Icon"></iconify-icon>
</div>
</div>
<div className="h-1 w-full bg-brand-light rounded-full overflow-hidden">
<div className="h-1 bg-brand-yellow w-[80%] rounded-full"></div>
</div>
</button>
<div className="accordion-content open" id="cat1">
<div className="accordion-inner">

<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Title is 50–60 characters</p>
<span className="text-[13px] text-brand-gray shrink-0">(54 characters)</span>
</div>
</div>

<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Focus keyword appears in first 20% of title</p>
<span className="text-[13px] text-brand-gray shrink-0">(Position: 1)</span>
</div>
</div>

<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-red-tint">
<div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Title contains power words or numbers</p>
<span className="text-[13px] text-brand-gray shrink-0">(None found)</span>
</div>
</div>

<div className="pl-[52px] pr-4 pb-3 pt-0">
<div className="bg-brand-yellow-tint border-l-[3px] border-brand-orange p-3 flex gap-3">
<iconify-icon className="text-brand-orange shrink-0 mt-0.5 text-base" icon="solar:lightbulb-bold"></iconify-icon>
<p className="text-[13px] text-brand-dark leading-snug">
                                        Add engagement boosters like numbers ('7 Tips', '10 Ways') or power words ('Ultimate', 'Essential', 'Proven', 'Complete') to improve click-through rates.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="border-b border-brand-border">
<button className="w-full px-4 py-3 bg-white hover:bg-gray-50 transition-colors" onclick="toggleAccordion('cat2')">
<div className="flex items-center justify-between mb-2">
<span className="text-[16px] font-semibold text-brand-dark">Keyword Optimization</span>
<div className="flex items-center gap-2">
<span className="text-[14px] font-medium text-brand-gray">22/30 pts</span>
<iconify-icon className="text-brand-gray accordion-icon rotate" icon="solar:alt-arrow-down-linear" id="cat2Icon"></iconify-icon>
</div>
</div>
<div className="h-1 w-full bg-brand-light rounded-full overflow-hidden">
<div className="h-1 bg-brand-yellow w-[73%] rounded-full"></div>
</div>
</button>
<div className="accordion-content open" id="cat2">
<div className="accordion-inner">

<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Focus keyword in opening paragraph</p>
<span className="text-[13px] text-brand-gray shrink-0">(Found in first 50 words)</span>
</div>
</div>

<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Focus keyword in 2+ H2 headings</p>
<span className="text-[13px] text-brand-gray shrink-0">(Found in 3 headings)</span>
</div>
</div>

<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-red-tint">
<div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Keyword density is 1.0–1.5%</p>
<span className="text-[13px] text-brand-gray shrink-0">(Current: 0.6%)</span>
</div>
</div>

<div className="pl-[52px] pr-4 pb-3 pt-0 border-b border-brand-border/50">
<div className="bg-brand-yellow-tint border-l-[3px] border-brand-orange p-3 flex gap-3">
<iconify-icon className="text-brand-orange shrink-0 mt-0.5 text-base" icon="solar:lightbulb-bold"></iconify-icon>
<p className="text-[13px] text-brand-dark leading-snug">
                                        Your keyword density is too low. Add 8-12 more natural mentions of your focus keyword throughout the content to reach the optimal 1.0-1.5% range.
                                    </p>
</div>
</div>

<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">50%+ of secondary keywords used</p>
<span className="text-[13px] text-brand-gray shrink-0">(4/5 found - 80%)</span>
</div>
</div>

<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-red-tint">
<div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">50%+ of images have keyword in alt text</p>
<span className="text-[13px] text-brand-gray shrink-0">(0/4 images)</span>
</div>
</div>

<div className="pl-[52px] pr-4 pb-3 pt-0">
<div className="bg-brand-yellow-tint border-l-[3px] border-brand-orange p-3 flex gap-3">
<iconify-icon className="text-brand-orange shrink-0 mt-0.5 text-base" icon="solar:lightbulb-bold"></iconify-icon>
<p className="text-[13px] text-brand-dark leading-snug">
                                        None of your images include the focus keyword in alt text. Edit each image and add descriptive alt text containing your keyword for better image SEO.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="border-b border-brand-border">
<button className="w-full px-4 py-3 bg-white hover:bg-gray-50 transition-colors" onclick="toggleAccordion('cat3')">
<div className="flex items-center justify-between mb-2">
<span className="text-[16px] font-semibold text-brand-dark">Content Quality</span>
<div className="flex items-center gap-2">
<span className="text-[14px] font-medium text-brand-gray">24/30 pts</span>
<iconify-icon className="text-brand-gray accordion-icon rotate" icon="solar:alt-arrow-down-linear" id="cat3Icon"></iconify-icon>
</div>
</div>
<div className="h-1 w-full bg-brand-light rounded-full overflow-hidden">
<div className="h-1 bg-brand-yellow w-[80%] rounded-full"></div>
</div>
</button>
<div className="accordion-content open" id="cat3">
<div className="accordion-inner">
<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Content is 2500+ words</p>
<span className="text-[13px] text-brand-gray shrink-0">(2,847 words)</span>
</div>
</div>
<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Flesch readability score is 60–70</p>
<span className="text-[13px] text-brand-gray shrink-0">(Score: 64)</span>
</div>
</div>
<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Average sentence length is 15–20 words</p>
<span className="text-[13px] text-brand-gray shrink-0">(17 words avg)</span>
</div>
</div>

<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-red-tint">
<div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Paragraphs are 3–5 sentences</p>
<span className="text-[13px] text-brand-gray shrink-0">(Avg: 8 sentences)</span>
</div>
</div>

<div className="pl-[52px] pr-4 pb-3 pt-0 border-b border-brand-border/50">
<div className="bg-brand-yellow-tint border-l-[3px] border-brand-orange p-3 flex gap-3">
<iconify-icon className="text-brand-orange shrink-0 mt-0.5 text-base" icon="solar:lightbulb-bold"></iconify-icon>
<p className="text-[13px] text-brand-dark leading-snug">
                                        Your paragraphs are too long. Break them into smaller chunks of 3-5 sentences for better readability and easier scanning.
                                    </p>
</div>
</div>
<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Passive voice is under 10%</p>
<span className="text-[13px] text-brand-gray shrink-0">(8% passive)</span>
</div>
</div>

<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-red-tint">
<div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">30%+ sentences use transitional words</p>
<span className="text-[13px] text-brand-gray shrink-0">(Current: 18%)</span>
</div>
</div>

<div className="pl-[52px] pr-4 pb-3 pt-0">
<div className="bg-brand-yellow-tint border-l-[3px] border-brand-orange p-3 flex gap-3">
<iconify-icon className="text-brand-orange shrink-0 mt-0.5 text-base" icon="solar:lightbulb-bold"></iconify-icon>
<p className="text-[13px] text-brand-dark leading-snug">
                                        Add more transition phrases like 'However', 'Therefore', 'Additionally', 'As a result', 'For example' to improve content flow and readability.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="border-b border-brand-border pb-6">
<button className="w-full px-4 py-3 bg-white hover:bg-gray-50 transition-colors" onclick="toggleAccordion('cat4')">
<div className="flex items-center justify-between mb-2">
<span className="text-[16px] font-semibold text-brand-dark">Meta &amp; Technical</span>
<div className="flex items-center gap-2">
<span className="text-[14px] font-medium text-brand-gray">14/20 pts</span>
<iconify-icon className="text-brand-gray accordion-icon rotate" icon="solar:alt-arrow-down-linear" id="cat4Icon"></iconify-icon>
</div>
</div>
<div className="h-1 w-full bg-brand-light rounded-full overflow-hidden">
<div className="h-1 bg-brand-yellow w-[70%] rounded-full"></div>
</div>
</button>
<div className="accordion-content open" id="cat4">
<div className="accordion-inner">
<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Meta description is 140–155 characters</p>
<span className="text-[13px] text-brand-gray shrink-0">(148 characters)</span>
</div>
</div>
<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Focus keyword present in meta description</p>
<span className="text-[13px] text-brand-gray shrink-0">(Found)</span>
</div>
</div>

<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-red-tint">
<div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">CTA words present in meta description</p>
<span className="text-[13px] text-brand-gray shrink-0">(None found)</span>
</div>
</div>

<div className="pl-[52px] pr-4 pb-3 pt-0 border-b border-brand-border/50">
<div className="bg-brand-yellow-tint border-l-[3px] border-brand-orange p-3 flex gap-3">
<iconify-icon className="text-brand-orange shrink-0 mt-0.5 text-base" icon="solar:lightbulb-bold"></iconify-icon>
<p className="text-[13px] text-brand-dark leading-snug">
                                        Add a call-to-action word like 'Learn', 'Discover', 'Find out', 'Get started', or 'Try' to encourage clicks from search results.
                                    </p>
</div>
</div>

<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Focus keyword present in URL slug</p>
<span className="text-[13px] text-brand-gray shrink-0">(Found)</span>
</div>
</div>
<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">URL length is 30–60 characters</p>
<span className="text-[13px] text-brand-gray shrink-0">(42 characters)</span>
</div>
</div>
<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">URL has no unnecessary stop words</p>
<span className="text-[13px] text-brand-gray shrink-0">(Clean)</span>
</div>
</div>
<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Bullet or numbered lists present in content</p>
<span className="text-[13px] text-brand-gray shrink-0">(3 lists found)</span>
</div>
</div>

<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-red-tint">
<div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">At least one internal link present</p>
<span className="text-[13px] text-brand-gray shrink-0">(0 found)</span>
</div>
</div>
<div className="pl-[52px] pr-4 pb-3 pt-0 border-b border-brand-border/50">
<div className="bg-brand-yellow-tint border-l-[3px] border-brand-orange p-3 flex gap-3">
<iconify-icon className="text-brand-orange shrink-0 mt-0.5 text-base" icon="solar:lightbulb-bold"></iconify-icon>
<p className="text-[13px] text-brand-dark leading-snug">
                                        Add links to other relevant posts or pages on your website. Internal linking improves SEO and keeps readers engaged longer.
                                    </p>
</div>
</div>
<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-red-tint">
<div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">At least one external do-follow link present</p>
<span className="text-[13px] text-brand-gray shrink-0">(0 found)</span>
</div>
</div>
<div className="pl-[52px] pr-4 pb-3 pt-0 border-b border-brand-border/50">
<div className="bg-brand-yellow-tint border-l-[3px] border-brand-orange p-3 flex gap-3">
<iconify-icon className="text-brand-orange shrink-0 mt-0.5 text-base" icon="solar:lightbulb-bold"></iconify-icon>
<p className="text-[13px] text-brand-dark leading-snug">
                                        Link to 1-2 authoritative external sources to add credibility and provide additional value to readers.
                                    </p>
</div>
</div>

<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Affiliate/sponsored links marked no-follow</p>
<span className="text-[13px] text-brand-gray shrink-0">(N/A)</span>
</div>
</div>
<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-green-tint">
<div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">Adequate image count (1 per 500 words)</p>
<span className="text-[13px] text-brand-gray shrink-0">(6 images)</span>
</div>
</div>

<div className="px-4 py-3 border-b border-brand-border/50 flex gap-3 bg-brand-red-tint">
<div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center shrink-0">
<iconify-icon className="text-white text-sm" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="flex-1 flex justify-between items-start gap-2">
<p className="text-[14px] text-brand-dark">All images have alt text</p>
<span className="text-[13px] text-brand-gray shrink-0">(4/6 images)</span>
</div>
</div>
<div className="pl-[52px] pr-4 pb-3 pt-0">
<div className="bg-brand-yellow-tint border-l-[3px] border-brand-orange p-3 flex gap-3">
<iconify-icon className="text-brand-orange shrink-0 mt-0.5 text-base" icon="solar:lightbulb-bold"></iconify-icon>
<p className="text-[13px] text-brand-dark leading-snug">
                                        2 images are missing alt text. Add descriptive alt text to all images for accessibility and SEO benefits.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-white border-t border-brand-border p-3 px-4 flex items-center justify-between z-10">
<span className="text-[12px] text-brand-gray">Score updated just now</span>
<button className="px-6 py-2 bg-brand-purple text-white text-sm font-medium rounded-md hover:bg-brand-purple/90 transition-colors shadow-sm" onclick="toggleSeoPanel()">Done</button>
</div>

<div className="absolute bottom-16 left-0 w-full flex justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
<button className="w-2 h-2 rounded-full bg-brand-red" onclick="setScoreState('red')"></button>
<button className="w-2 h-2 rounded-full bg-brand-orange" onclick="setScoreState('orange')"></button>
<button className="w-2 h-2 rounded-full bg-brand-yellow" onclick="setScoreState('yellow')"></button>
<button className="w-2 h-2 rounded-full bg-brand-green" onclick="setScoreState('green')"></button>
</div>
</div>
</div>
</aside>


    </>
  );
}
