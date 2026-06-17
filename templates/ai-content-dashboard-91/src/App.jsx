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
      
<div className="max-w-[1280px] mx-auto px-6 py-5 sm:py-7">

<header className="flex items-center justify-between mb-7">
<div className="flex items-center gap-3">

<div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] flex items-center justify-center shadow-sm">
<span className="text-white text-sm font-semibold tracking-wide">WR</span>
</div>
<h1 className="text-xl font-semibold tracking-tight text-[#1F2937]">WriteRush</h1>
</div>
<button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-5 py-2.5 rounded-md text-sm font-normal transition-colors shadow-sm flex items-center gap-2">
<iconify-icon height="18" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Add New</span>
</button>
</header>

<section className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(124,58,237,0.08)] p-10 mb-7 flex flex-col md:flex-row items-center justify-between overflow-hidden relative border border-[#E5E7EB]/50">

<div className="w-full md:w-[55%] z-10">
<h2 className="text-3xl font-semibold tracking-tight text-[#1F2937] mb-3">Create Content That Sounds Like You</h2>
<p className="text-base font-light text-[#6B7280] mb-8 max-w-[90%] leading-relaxed">
                    Generate SEO-optimized blog posts, highly relevant AI images, social captions, and more with AI that learns from your WordPress posts. One tool to handle your entire content marketing.
                </p>
<div className="flex flex-col items-start gap-3">
<button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-7 py-3.5 rounded-lg text-base font-normal shadow-[0_2px_8px_rgba(124,58,237,0.25)] hover:shadow-[0_4px_12px_rgba(124,58,237,0.3)] transition-all flex items-center gap-2 group">
                        Create New Blog
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<a className="text-sm font-light text-[#7C3AED] hover:underline flex items-center gap-1 mt-1" href="#">
                        Explore Features
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
</div>

<div className="hidden md:block absolute right-0 top-0 h-full w-[45%] hero-gradient pointer-events-none rounded-r-2xl"></div>
<div className="hidden md:flex absolute right-[5%] top-1/2 -translate-y-1/2 w-[40%] h-[80%] items-center justify-center pointer-events-none z-10">

<div className="absolute w-64 h-64 bg-[#EDE9FE]/40 rounded-full blur-3xl"></div>

<div className="relative z-10 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-[0_8px_30px_rgba(124,58,237,0.15)] border border-[#EDE9FE] w-60 transform transition-transform duration-700 hover:-translate-y-2">

<div className="flex items-center gap-3 mb-4">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] flex items-center justify-center text-white shadow-inner">
<iconify-icon icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div className="space-y-1.5 flex-1">
<div className="h-2 w-[80%] bg-[#E5E7EB] rounded-full"></div>
<div className="h-2 w-[40%] bg-[#E5E7EB] rounded-full"></div>
</div>
</div>

<div className="w-full h-24 bg-[#DBEAFE]/40 rounded-lg mb-4 flex items-center justify-center text-[#3B82F6] border border-[#DBEAFE]">
<iconify-icon icon="solar:gallery-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>

<div className="space-y-2">
<div className="h-1.5 w-full bg-[#F3F4F6] rounded-full"></div>
<div className="h-1.5 w-[90%] bg-[#F3F4F6] rounded-full"></div>
<div className="h-1.5 w-[75%] bg-[#F3F4F6] rounded-full"></div>
<div className="h-1.5 w-[60%] bg-[#F3E8FF] rounded-full mt-3"></div> 
</div>

<div className="absolute -top-3 -right-3 text-[#7C3AED] animate-pulse">
<iconify-icon icon="solar:stars-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
</div>

<div className="absolute -left-4 top-10 bg-white p-2.5 rounded-lg shadow-md border border-[#F3F4F6] text-[#22C55E] transform -rotate-6">
<iconify-icon icon="solar:soundwave-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="absolute right-4 bottom-8 bg-white p-2.5 rounded-lg shadow-md border border-[#F3F4F6] text-[#F59E0B] transform rotate-12 flex gap-1">
<iconify-icon icon="solar:hashtag-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<iconify-icon icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
</section>

<section className="mb-7">
<div className="flex flex-nowrap items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">

<div className="flex-1 min-w-[200px] bg-white p-4 sm:p-5 rounded-[10px] border border-[#E5E7EB] hover:border-[#EDE9FE] transition-colors flex items-start gap-4">
<div className="h-9 w-9 rounded-lg bg-[#EDE9FE] flex items-center justify-center text-[#7C3AED] flex-shrink-0">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<div className="flex items-baseline gap-0.5 mt-1">
<span className="text-2xl font-semibold text-[#1F2937] tracking-tight">5</span>
<span className="text-2xl font-light text-[#D1D5DB]">/150</span>
</div>
<span className="text-xs font-normal text-[#6B7280] mt-0.5">Blog</span>
</div>
</div>

<div className="flex-1 min-w-[200px] bg-white p-4 sm:p-5 rounded-[10px] border border-[#E5E7EB] hover:border-[#DBEAFE] transition-colors flex items-start gap-4">
<div className="h-9 w-9 rounded-lg bg-[#DBEAFE] flex items-center justify-center text-[#3B82F6] flex-shrink-0">
<iconify-icon icon="solar:gallery-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<div className="flex items-baseline gap-0.5 mt-1">
<span className="text-2xl font-semibold text-[#1F2937] tracking-tight">12</span>
<span className="text-2xl font-light text-[#D1D5DB]">/100</span>
</div>
<span className="text-xs font-normal text-[#6B7280] mt-0.5">Image</span>
</div>
</div>

<div className="flex-1 min-w-[200px] bg-white p-4 sm:p-5 rounded-[10px] border border-[#E5E7EB] hover:border-[#F3E8FF] transition-colors flex items-start gap-4">
<div className="h-9 w-9 rounded-lg bg-[#F3E8FF] flex items-center justify-center text-[#8B5CF6] flex-shrink-0">
<iconify-icon icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<div className="flex items-baseline gap-0.5 mt-1">
<span className="text-2xl font-semibold text-[#1F2937] tracking-tight">234</span>
<span className="text-2xl font-light text-[#D1D5DB]">/600</span>
</div>
<span className="text-xs font-normal text-[#6B7280] mt-0.5">AI Credit</span>
</div>
</div>

<div className="flex-1 min-w-[200px] bg-white p-4 sm:p-5 rounded-[10px] border border-[#E5E7EB] hover:border-[#DCFCE7] transition-colors flex items-start gap-4">
<div className="h-9 w-9 rounded-lg bg-[#DCFCE7] flex items-center justify-center text-[#22C55E] flex-shrink-0">
<iconify-icon icon="solar:soundwave-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<div className="flex items-baseline gap-0.5 mt-1">
<span className="text-2xl font-semibold text-[#1F2937] tracking-tight">2</span>
<span className="text-2xl font-light text-[#D1D5DB]">/15</span>
</div>
<span className="text-xs font-normal text-[#6B7280] mt-0.5">Brand Profile</span>
</div>
</div>

<div className="flex-1 min-w-[200px] bg-white p-4 sm:p-5 rounded-[10px] border border-[#E5E7EB] hover:border-[#FEF3C7] transition-colors flex items-start gap-4">
<div className="h-9 w-9 rounded-lg bg-[#FEF3C7] flex items-center justify-center text-[#F59E0B] flex-shrink-0">
<iconify-icon icon="solar:share-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<div className="flex items-baseline gap-0.5 mt-1">
<span className="text-2xl font-semibold text-[#1F2937] tracking-tight">8</span>
<span className="text-2xl font-light text-[#D1D5DB]">/200</span>
</div>
<span className="text-xs font-normal text-[#6B7280] mt-0.5">Social Media Post</span>
</div>
</div>
</div>
<div className="flex justify-end mt-2">
<a className="text-xs font-normal text-[#7C3AED] hover:underline transition-colors" href="#">Upgrade Plan →</a>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-7 mb-10">

<div className="lg:col-span-7">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium tracking-tight text-[#1F2937]">Start Creating</h3>
<a className="text-xs font-normal text-[#7C3AED] hover:text-[#6D28D9] hover:underline transition-colors flex items-center gap-1" href="#">
                        All Content <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

<a className="group bg-white p-6 rounded-xl border border-[#E5E7EB] hover:border-[#7C3AED] hover:shadow-[0_4px_12px_rgba(124,58,237,0.08)] transition-all duration-200 flex flex-col items-center text-center h-full" href="#">
<div className="h-12 w-12 rounded-xl bg-[#EDE9FE] flex items-center justify-center text-[#7C3AED] mb-4 group-hover:scale-105 transition-transform relative">
<iconify-icon icon="solar:document-add-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<iconify-icon className="absolute -top-1 -right-1" icon="solar:stars-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</div>
<h4 className="text-base font-medium text-[#1F2937] mb-1.5">Blog Post</h4>
<p className="text-xs font-normal text-[#6B7280] flex-grow">Guided workflow with AI writing &amp; images</p>
<span className="text-xs font-normal text-[#7C3AED] mt-4 flex items-center gap-1 opacity-80 group-hover:opacity-100">
                            Create <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</span>
</a>

<a className="group bg-white p-6 rounded-xl border border-[#E5E7EB] hover:border-[#8B5CF6] hover:shadow-[0_4px_12px_rgba(139,92,246,0.08)] transition-all duration-200 flex flex-col items-center text-center h-full" href="#">
<div className="h-12 w-12 rounded-xl bg-[#F3E8FF] flex items-center justify-center text-[#8B5CF6] mb-4 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:user-speak-rounded-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h4 className="text-base font-medium text-[#1F2937] mb-1.5">Brand Voice</h4>
<p className="text-xs font-normal text-[#6B7280] flex-grow">Train AI to match your writing style</p>
<span className="text-xs font-normal text-[#8B5CF6] mt-4 flex items-center gap-1 opacity-80 group-hover:opacity-100">
                            Create <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</span>
</a>

<a className="group bg-white p-6 rounded-xl border border-[#E5E7EB] hover:border-[#3B82F6] hover:shadow-[0_4px_12px_rgba(59,130,246,0.08)] transition-all duration-200 flex flex-col items-center text-center h-full" href="#">
<div className="h-12 w-12 rounded-xl bg-[#DBEAFE] flex items-center justify-center text-[#3B82F6] mb-4 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:chat-square-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h4 className="text-base font-medium text-[#1F2937] mb-1.5">Social Caption</h4>
<p className="text-xs font-normal text-[#6B7280] flex-grow">Generate &amp; auto-post to social platforms</p>
<span className="text-xs font-normal text-[#3B82F6] mt-4 flex items-center gap-1 opacity-80 group-hover:opacity-100">
                            Create <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</span>
</a>
</div>
</div>

<div className="lg:col-span-5 flex flex-col">

<div className="bg-white rounded-xl border border-[#E5E7EB] p-6 mb-4 flex-grow">
<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#7C3AED]" icon="solar:square-academic-cap-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<h3 className="text-base font-medium text-[#1F2937]">Learning Hub</h3>
</div>
<a className="text-xs font-normal text-[#7C3AED] hover:underline flex items-center gap-1" href="#">
                            See All <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-3">

<div className="group cursor-pointer flex gap-4 items-center">
<div className="relative w-28 h-16 rounded-lg bg-[#F3F4F6] overflow-hidden flex-shrink-0 border border-[#E5E7EB]">

<div className="absolute inset-0 bg-gradient-to-tr from-[#E5E7EB] to-[#F9FAFB] opacity-50"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#7C3AED] ml-0.5" icon="solar:play-bold" width="12"></iconify-icon>
</div>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-[#1F2937] group-hover:text-[#7C3AED] transition-colors line-clamp-1 mb-1">Getting Started with WriteRush</h4>
<span className="text-xs font-normal text-[#9CA3AF]">3:45</span>
</div>
</div>

<div className="group cursor-pointer flex gap-4 items-center">
<div className="relative w-28 h-16 rounded-lg bg-[#F3F4F6] overflow-hidden flex-shrink-0 border border-[#E5E7EB]">

<div className="absolute inset-0 bg-gradient-to-tr from-[#E5E7EB] to-[#F9FAFB] opacity-50"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#7C3AED] ml-0.5" icon="solar:play-bold" width="12"></iconify-icon>
</div>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-[#1F2937] group-hover:text-[#7C3AED] transition-colors line-clamp-1 mb-1">Training Your Brand Voice</h4>
<span className="text-xs font-normal text-[#9CA3AF]">5:12</span>
</div>
</div>
</div>
</div>

<div className="bg-[#FAFAFF] rounded-xl border border-[#EDE9FE] p-5 flex items-center gap-4 shadow-[0_1px_3px_rgba(124,58,237,0.04)]">
<div className="h-10 w-10 flex items-center justify-center text-[#7C3AED] flex-shrink-0">
<iconify-icon icon="solar:headphones-round-sound-linear" style={{strokeWidth: '1.5'}} width="36"></iconify-icon>
</div>
<div className="flex-grow">
<h4 className="text-[15px] font-medium text-[#1F2937] mb-0.5">Questions?</h4>
<p className="text-xs font-normal text-[#6B7280]">We're here to help you succeed</p>
</div>
<button className="bg-white border border-[#7C3AED] text-[#7C3AED] hover:bg-[#F3E8FF] px-3.5 py-1.5 rounded-md text-xs font-normal transition-colors whitespace-nowrap">
                        Get Support
                    </button>
</div>
</div>
</div>

<section className="mb-12">
<div className="text-center mb-8 flex flex-col items-center">
<h3 className="text-xl font-medium tracking-tight text-[#1F2937] relative inline-block">
<span className="absolute top-1/2 -left-8 w-4 h-[1px] bg-[#E5E7EB]"></span>
                    Your Complete Content Toolkit
                    <span className="absolute top-1/2 -right-8 w-4 h-[1px] bg-[#E5E7EB]"></span>
</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="bg-white p-7 px-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex flex-col items-center text-center h-full">

<div className="h-[90px] w-full flex justify-center items-end mb-5 relative">
<div className="w-16 h-20 bg-[#F8F9FA] border border-[#E5E7EB] rounded-md shadow-sm relative z-10 p-2 flex flex-col gap-1.5 overflow-hidden">
<div className="h-1.5 w-[70%] bg-[#E5E7EB] rounded-full"></div>
<div className="h-6 w-full bg-[#DBEAFE] rounded text-[#3B82F6] flex items-center justify-center"><iconify-icon icon="solar:gallery-linear" width="12"></iconify-icon></div>
<div className="h-1 w-full bg-[#F3F4F6] rounded-full mt-1"></div>
<div className="h-1 w-full bg-[#F3F4F6] rounded-full"></div>
<div className="h-1 w-[80%] bg-[#F3F4F6] rounded-full"></div>
</div>
<div className="absolute right-1/2 -translate-x-8 top-2 text-[#7C3AED]">
<iconify-icon icon="solar:stars-linear" width="16"></iconify-icon>
</div>
<div className="absolute left-1/2 translate-x-4 top-8 text-[#8B5CF6]">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
</div>
<h4 className="text-sm font-medium text-[#1F2937] mb-2">Complete Blog Drafts</h4>
<p className="text-xs font-normal text-[#6B7280] leading-relaxed line-clamp-2">Publish-ready posts with relevant images placed automatically</p>
</div>

<div className="bg-white p-7 px-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex flex-col items-center text-center h-full">

<div className="h-[90px] w-full flex justify-center items-center mb-5 gap-2 relative">
<div className="w-10 h-10 rounded-full bg-[#F3E8FF] border border-[#EDE9FE] flex items-center justify-center text-[#8B5CF6] z-10">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div className="flex gap-1 items-center">
<div className="h-3 w-1 bg-[#E5E7EB] rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="h-6 w-1 bg-[#8B5CF6]/40 rounded-full animate-[pulse_1.5s_ease-in-out_0.2s_infinite]"></div>
<div className="h-4 w-1 bg-[#E5E7EB] rounded-full animate-[pulse_1.5s_ease-in-out_0.4s_infinite]"></div>
</div>
<div className="w-10 h-12 bg-[#F8F9FA] border border-[#E5E7EB] rounded z-10 p-1.5 flex flex-col justify-center gap-1">
<div className="h-1 w-full bg-[#8B5CF6]/60 rounded-full"></div>
<div className="h-1 w-[80%] bg-[#E5E7EB] rounded-full"></div>
<div className="h-1 w-full bg-[#E5E7EB] rounded-full"></div>
</div>
<div className="absolute top-0 right-[25%] opacity-40">
<svg fill="none" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1F2937" strokeWidth="2"></path><path d="M8 12L11 15L16 9" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 
</div>
</div>
<h4 className="text-sm font-medium text-[#1F2937] mb-2">Your Voice, AI Powered</h4>
<p className="text-xs font-normal text-[#6B7280] leading-relaxed line-clamp-2">AI learns from your WordPress posts to write exactly like you</p>
</div>

<div className="bg-white p-7 px-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex flex-col items-center text-center h-full">

<div className="h-[90px] w-full flex justify-center items-center mb-5 relative">
<div className="absolute left-1/2 -translate-x-12 top-2 text-[#3B82F6]/20">
<iconify-icon icon="solar:magnifer-linear" style={{strokeWidth: '2'}} width="40"></iconify-icon>
</div>
<div className="w-24 flex flex-col gap-1.5 z-10 mt-6 relative">

<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#7C3AED]"></div>
<div className="h-1.5 w-16 bg-[#7C3AED]/80 rounded-full"></div>
</div>
<div className="flex items-center gap-2 ml-4 relative">
<div className="absolute -left-3 top-[-8px] w-[1px] h-3 bg-[#E5E7EB]"></div>
<div className="absolute -left-3 top-[4px] w-3 h-[1px] bg-[#E5E7EB]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></div>
<div className="h-1 w-12 bg-[#E5E7EB] rounded-full"></div>
</div>
<div className="flex items-center gap-2 ml-4 relative">
<div className="absolute -left-3 top-[-16px] w-[1px] h-5 bg-[#E5E7EB]"></div>
<div className="absolute -left-3 top-[4px] w-3 h-[1px] bg-[#E5E7EB]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></div>
<div className="h-1 w-10 bg-[#E5E7EB] rounded-full"></div>
</div>
</div>
</div>
<h4 className="text-sm font-medium text-[#1F2937] mb-2">Research-Backed Outlines</h4>
<p className="text-xs font-normal text-[#6B7280] leading-relaxed line-clamp-2">Analyze top-ranking content and build winning structures</p>
</div>

<div className="bg-white p-7 px-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex flex-col items-center text-center h-full">

<div className="h-[90px] w-full flex justify-center items-center mb-5 relative">

<div className="w-10 h-10 rounded-lg bg-[#7C3AED] flex items-center justify-center text-white z-20 shadow-sm relative">
<iconify-icon icon="solar:calendar-date-linear" width="20"></iconify-icon>
</div>

<svg className="absolute inset-0 w-full h-full z-10" pointer-events="none">
<path className="custom-dash" d="M 50% 50% Q 30% 20% 20% 30%" fill="none" stroke="#E5E7EB" strokeWidth="1.5"></path>
<path className="custom-dash" d="M 50% 50% Q 70% 20% 80% 30%" fill="none" stroke="#E5E7EB" strokeWidth="1.5"></path>
<path className="custom-dash" d="M 50% 50% Q 30% 80% 20% 70%" fill="none" stroke="#E5E7EB" strokeWidth="1.5"></path>
<path className="custom-dash" d="M 50% 50% Q 70% 80% 80% 70%" fill="none" stroke="#E5E7EB" strokeWidth="1.5"></path>
</svg>

<div className="absolute top-[15%] left-[15%] w-6 h-6 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center z-20"><iconify-icon icon="solar:link-circle-bold" width="14"></iconify-icon></div> 
<div className="absolute top-[15%] right-[15%] w-6 h-6 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center z-20"><iconify-icon icon="solar:letter-opened-bold" width="14"></iconify-icon></div> 
<div className="absolute bottom-[15%] left-[15%] w-6 h-6 rounded-full bg-gradient-to-tr from-[#F59E0B]/20 to-[#EC4899]/20 text-[#EC4899] flex items-center justify-center z-20"><iconify-icon icon="solar:camera-square-bold" width="14"></iconify-icon></div> 
<div className="absolute bottom-[15%] right-[15%] w-6 h-6 rounded-full bg-black/5 text-black flex items-center justify-center z-20"><iconify-icon icon="solar:mask-square-bold" width="14"></iconify-icon></div> 
</div>
<h4 className="text-sm font-medium text-[#1F2937] mb-2">Social Autopilot</h4>
<p className="text-xs font-normal text-[#6B7280] leading-relaxed line-clamp-2">Generate captions and auto-post across all your platforms</p>
</div>
</div>
</section>

<footer className="footer-gradient rounded-2xl p-8 border border-[#EDE9FE]">
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-6 h-full flex flex-col items-start border border-transparent">
<div className="flex items-center gap-1 text-[#F59E0B] mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="opacity-40" icon="solar:star-bold" width="18"></iconify-icon> 
</div>
<h4 className="text-sm font-medium text-[#1F2937] mb-1.5">Join 500+ Happy Users</h4>
<p className="text-xs font-normal text-[#6B7280] mb-5 flex-grow">Your review helps us improve and reach more creators</p>
<button className="bg-white border border-[#7C3AED] text-[#7C3AED] hover:bg-[#F3E8FF] px-4 py-2 rounded-md text-xs font-normal transition-colors flex items-center gap-2">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                        Write a Review
                    </button>
</div>

<div className="bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-6 h-full flex flex-col items-start border border-transparent">
<div className="h-8 w-12 relative mb-3">
<div className="absolute inset-0 border-2 border-[#7C3AED] rounded flex items-center justify-center opacity-40 transform rotate-[-5deg]"></div>
<div className="absolute inset-0 bg-white border-2 border-[#7C3AED] rounded flex items-center justify-center">
<div className="w-4 h-0.5 bg-[#7C3AED] rounded-full mt-1 opacity-60"></div>
</div>
</div>
<h4 className="text-sm font-medium text-[#1F2937] mb-1.5">Master WriteRush</h4>
<p className="text-xs font-normal text-[#6B7280] mb-5 flex-grow">Step-by-step guides, tips, and best practices</p>
<button className="bg-white border border-[#7C3AED] text-[#7C3AED] hover:bg-[#F3E8FF] px-4 py-2 rounded-md text-xs font-normal transition-colors flex items-center gap-2">
<iconify-icon icon="solar:book-bookmark-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                        Browse Guides
                    </button>
</div>

<div className="bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-6 h-full flex flex-col items-start border border-transparent">
<div className="relative mb-4">
<iconify-icon className="text-[#7C3AED]" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-[#EC4899] rounded-full border-2 border-white"></div>
</div>
<h4 className="text-sm font-medium text-[#1F2937] mb-1.5">We'd Love to Hear From You</h4>
<p className="text-xs font-normal text-[#6B7280] mb-5 flex-grow">Feature requests, bug reports, or just say hello</p>
<button className="bg-white border border-[#7C3AED] text-[#7C3AED] hover:bg-[#F3E8FF] px-4 py-2 rounded-md text-xs font-normal transition-colors flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                        Contact Us
                    </button>
</div>
</div>
</footer>
</div>

    </>
  );
}
