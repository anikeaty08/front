import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const feedbackData = {
                5: { heading: "What did you love the most?", chips: ["Output Quality", "Images", "Outline", "Overall Flow"] },
                4: { heading: "What impressed you?", chips: ["Output Quality", "Images", "Outline", "Overall Flow"] },
                3: { heading: "What could be better?", chips: ["Draft Quality", "Outline", "Images", "Workflow"] },
                2: { heading: "What didn't meet your expectations?", chips: ["Draft felt robotic", "Outline missed the point", "Images were off", "Too many steps"] },
                1: { heading: "What went wrong?", chips: ["Draft felt robotic", "Outline missed the point", "Images were off", "Confusing workflow"] }
            };

            const stars = document.querySelectorAll('.star-btn');
            const dynamicContainer = document.getElementById('dynamic-feedback');
            const dynamicHeading = document.getElementById('dynamic-heading');
            const chipContainer = document.getElementById('chip-container');
            let currentRating = 0;

            // Handle star logic
            stars.forEach(star => {
                
                // Hover effect for better UX
                star.addEventListener('mouseenter', () => {
                    const rating = parseInt(star.getAttribute('data-value'));
                    updateStars(rating);
                });

                star.addEventListener('mouseleave', () => {
                    updateStars(currentRating);
                });

                // Click event
                star.addEventListener('click', () => {
                    const rating = parseInt(star.getAttribute('data-value'));
                    currentRating = rating;
                    updateStars(rating);

                    // Update dynamic content
                    const data = feedbackData[rating];
                    dynamicHeading.textContent = data.heading;
                    
                    // Render Chips
                    chipContainer.innerHTML = '';
                    data.chips.forEach(chipText => {
                        const btn = document.createElement('button');
                        btn.className = 'px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 bg-white hover:border-[#7B2FBE] hover:text-[#7B2FBE] text-sm font-medium transition-colors focus:outline-none';
                        btn.textContent = chipText;
                        
                        btn.addEventListener('click', () => {
                            const isSelected = btn.classList.contains('bg-[#7B2FBE]');
                            if (isSelected) {
                                btn.className = 'px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 bg-white hover:border-[#7B2FBE] hover:text-[#7B2FBE] text-sm font-medium transition-colors focus:outline-none';
                            } else {
                                btn.className = 'px-4 py-1.5 rounded-full border border-[#7B2FBE] bg-[#7B2FBE] text-white text-sm font-medium transition-colors focus:outline-none shadow-sm';
                            }
                        });
                        
                        chipContainer.appendChild(btn);
                    });

                    // Reveal with animation
                    if (dynamicContainer.classList.contains('hidden')) {
                        dynamicContainer.classList.remove('hidden');
                        requestAnimationFrame(() => {
                            dynamicContainer.classList.remove('opacity-0');
                            dynamicContainer.classList.add('opacity-100');
                        });
                        chipContainer.classList.add('animate-fade-in-chips');
                    } else {
                        // Re-trigger chip animation smoothly on rating change
                        chipContainer.classList.remove('animate-fade-in-chips');
                        void chipContainer.offsetWidth; // force reflow
                        chipContainer.classList.add('animate-fade-in-chips');
                    }
                });
            });

            function updateStars(rating) {
                stars.forEach(s => {
                    const val = parseInt(s.getAttribute('data-value'));
                    const icon = s.querySelector('iconify-icon');
                    if (val <= rating) {
                        icon.setAttribute('icon', 'solar:star-bold');
                    } else {
                        icon.setAttribute('icon', 'solar:star-linear');
                    }
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="h-8 bg-[#1d2327] flex items-center px-4 shrink-0 justify-between z-0">
<div className="flex items-center gap-4 text-[#c3c4c7] text-sm">
<div className="flex items-center gap-2 hover:text-white cursor-pointer">
<iconify-icon className="text-base" icon="mdi:wordpress"></iconify-icon>
<span>WriteRush</span>
</div>
<div className="flex items-center gap-1 hover:text-white cursor-pointer">
<iconify-icon className="text-base" icon="solar:chat-line-linear"></iconify-icon>
<span>0</span>
</div>
<div className="flex items-center gap-1 hover:text-white cursor-pointer">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
<span>New</span>
</div>
</div>
<div className="text-[#c3c4c7] text-sm hover:text-white cursor-pointer">
            Howdy, user
        </div>
</div>
<div className="flex flex-1 overflow-hidden z-0">

<div className="w-40 bg-[#1d2327] shrink-0 flex flex-col py-2 overflow-y-auto">
<div className="px-3 py-2 text-[#c3c4c7] hover:text-white hover:bg-[#2c3338] cursor-pointer flex items-center gap-2 text-sm transition-colors">
<iconify-icon className="text-base" icon="solar:widget-linear"></iconify-icon>
<span>Dashboard</span>
</div>
<div className="px-3 py-2 text-[#c3c4c7] hover:text-white hover:bg-[#2c3338] cursor-pointer flex items-center gap-2 text-sm transition-colors">
<iconify-icon className="text-base" icon="solar:pin-linear"></iconify-icon>
<span>Posts</span>
</div>

<div className="px-3 py-2 bg-[#7B2FBE] text-white cursor-pointer flex items-center gap-2 text-sm font-semibold relative mt-2">
<div className="w-4 h-4 rounded bg-white/20 flex items-center justify-center text-[10px]">W</div>
<span>WriteRush</span>

<div className="absolute right-0 top-0 bottom-0 w-1 bg-[#f0f0f1]"></div>
</div>

<div className="flex flex-col bg-[#32373c] py-2">
<div className="px-9 py-1.5 text-white text-sm font-semibold cursor-pointer">All Content</div>
<div className="px-9 py-1.5 text-[#c3c4c7] hover:text-white text-sm cursor-pointer transition-colors">Blog</div>
<div className="px-9 py-1.5 text-[#c3c4c7] hover:text-white text-sm cursor-pointer transition-colors">Brand Voice</div>
<div className="px-9 py-1.5 text-[#c3c4c7] hover:text-white text-sm cursor-pointer transition-colors">Settings</div>
</div>
</div>

<div className="flex-1 p-5 overflow-y-auto">
<div className="bg-white rounded-md shadow-sm border border-gray-200 flex min-h-[800px] max-w-6xl mx-auto">

<div className="w-64 border-r border-gray-100 p-8 shrink-0 hidden md:block">
<h1 className="text-[#7B2FBE] text-2xl font-semibold tracking-tight mb-10">WriteRush</h1>
<div className="relative">

<div className="absolute left-[11px] top-2 bottom-6 w-[2px] bg-[#7B2FBE]"></div>

<div className="flex flex-col gap-8 relative">
<div className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-[#7B2FBE] flex items-center justify-center shrink-0 z-10 shadow-[0_0_0_4px_white]">
<iconify-icon className="text-white text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900">Topic</span>
</div>
<div className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-[#7B2FBE] flex items-center justify-center shrink-0 z-10 shadow-[0_0_0_4px_white]">
<iconify-icon className="text-white text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900">Title</span>
</div>
<div className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-[#7B2FBE] flex items-center justify-center shrink-0 z-10 shadow-[0_0_0_4px_white]">
<iconify-icon className="text-white text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900">Outline</span>
</div>
<div className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-[#7B2FBE] flex items-center justify-center shrink-0 z-10 shadow-[0_0_0_4px_white]">
<iconify-icon className="text-white text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900">Draft</span>
</div>
<div className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-[#7B2FBE] flex items-center justify-center shrink-0 z-10 shadow-[0_0_0_4px_white]">
<iconify-icon className="text-white text-sm" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold text-[#7B2FBE]">Preview</span>
</div>
</div>
</div>
</div>

<div className="flex-1 p-10 lg:p-16">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">The Ultimate Guide to Sales Funnels</h2>
<div className="space-y-6 text-base text-gray-600 leading-relaxed">
<p>A sales funnel strategy is the systematic approach you use to guide potential customers from their first interaction with your brand to a completed purchase. I've spent years refining sales funnels for businesses of all sizes, and I can tell you that understanding this concept transforms how you think about customer acquisition.</p>
<p>This guide covers everything you need to know about building effective sales funnels. You'll learn the core stages, how to create content for each phase, and the metrics that actually matter. By the end, you'll have a clear framework for designing funnels that convert browsers into buyers.</p>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mt-10 mb-4">What Is a Sales Funnel and Why Does It Matter?</h3>
<p>A sales funnel represents the journey your prospects take from awareness to purchase. It's called a funnel because the number of people naturally decreases at each stage—many will enter at the top, but only a percentage will convert at the bottom. This isn't a flaw; it's how buying decisions work.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex flex-col justify-end items-center pointer-events-none pb-6 sm:pb-12">

<div className="absolute inset-0 bg-gray-900/30 backdrop-blur-[2px] pointer-events-auto transition-opacity duration-300"></div>

<div className="w-full max-w-[580px] bg-white rounded-2xl shadow-2xl pointer-events-auto relative mx-4 animate-slide-up flex flex-col border border-black/5">

<button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-50 transition-colors z-10 focus:outline-none">
<iconify-icon className="text-xl" icon="solar:close-linear"></iconify-icon>
</button>

<div className="p-8">

<div className="text-center">
<h2 className="text-xl font-semibold text-gray-900 tracking-tight">How was your experience?</h2>
<p className="text-sm text-gray-500 mt-1.5">Your feedback helps us improve WriteRush</p>
</div>

<div className="flex justify-center items-center gap-1 sm:gap-2 mt-6">
<button className="star-btn text-[#7B2FBE] hover:scale-110 transition-transform focus:outline-none" data-value="1">
<iconify-icon className="text-4xl sm:text-5xl" icon="solar:star-linear"></iconify-icon>
</button>
<button className="star-btn text-[#7B2FBE] hover:scale-110 transition-transform focus:outline-none" data-value="2">
<iconify-icon className="text-4xl sm:text-5xl" icon="solar:star-linear"></iconify-icon>
</button>
<button className="star-btn text-[#7B2FBE] hover:scale-110 transition-transform focus:outline-none" data-value="3">
<iconify-icon className="text-4xl sm:text-5xl" icon="solar:star-linear"></iconify-icon>
</button>
<button className="star-btn text-[#7B2FBE] hover:scale-110 transition-transform focus:outline-none" data-value="4">
<iconify-icon className="text-4xl sm:text-5xl" icon="solar:star-linear"></iconify-icon>
</button>
<button className="star-btn text-[#7B2FBE] hover:scale-110 transition-transform focus:outline-none" data-value="5">
<iconify-icon className="text-4xl sm:text-5xl" icon="solar:star-linear"></iconify-icon>
</button>
</div>

<div className="mt-7 hidden opacity-0 transition-opacity duration-300" id="dynamic-feedback">
<h3 className="text-center text-base font-medium text-gray-900 mb-4 tracking-tight" id="dynamic-heading"></h3>
<div className="flex flex-wrap justify-center gap-2.5" id="chip-container">

</div>
</div>

<div className="mt-7">
<textarea className="w-full resize-none rounded-xl border border-gray-200 p-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#7B2FBE] focus:outline-none focus:ring-1 focus:ring-[#7B2FBE] transition-shadow bg-gray-50/50" placeholder="Anything else you'd like to share? (optional)" rows="2"></textarea>
</div>
</div>

<div className="px-8 pb-8 pt-2 flex items-center justify-end gap-5">
<button className="text-sm font-medium text-gray-400 hover:text-gray-700 transition-colors focus:outline-none">
                    Skip
                </button>
<button className="bg-[#7B2FBE] text-white px-6 py-2 rounded-xl text-sm font-medium shadow-sm hover:bg-[#6824a3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7B2FBE] focus:ring-offset-2">
                    Submit
                </button>
</div>
</div>
</div>



    </>
  );
}
