import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize Lucide icons
    lucide.createIcons();
    
    // Add interactive effects
    document.addEventListener('DOMContentLoaded', function() {
      // Smooth scroll for mobile content
      const scrollContainer = document.querySelector('.scrollbar-hide');
      
      // Add touch momentum scrolling for iOS
      scrollContainer.style.webkitOverflowScrolling = 'touch';
      
      // Animate elements on scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.animate-slide-up, .animate-slide-down, .animate-slide-left, .animate-slide-right, .animate-bounce-in, .animate-scale-in').forEach(el => {
        observer.observe(el);
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-16">

<div className="relative w-[320px] sm:w-[360px] h-[720px] bg-black rounded-[48px] shadow-2xl overflow-hidden animate-blur-in border border-zinc-800">
<div className="absolute inset-[4px] bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-[44px] overflow-hidden"></div>
<div className="relative z-10 h-full flex flex-col">

<div className="h-10 flex items-center justify-center pt-2 flex-shrink-0 relative z-30 animate-fade-in stagger-1">
<div className="w-20 h-1.5 bg-white/30 rounded-full animate-pulse"></div>
</div>

<div className="px-6 py-4 flex items-center justify-between animate-slide-down stagger-2 flex-shrink-0 relative z-20 bg-black/20 backdrop-blur-xl border-b border-white/10">
<button className="p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-110">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
<div className="text-center">
<h1 className="text-white font-bold text-xl tracking-tight">BrainBoost</h1>
<div className="flex items-center justify-center gap-1 mt-1">
<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
<span className="text-white/60 text-xs font-medium">CONNECTED</span>
</div>
</div>
<button className="p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-110">
<i className="w-6 h-6 animate-wiggle" data-lucide="bell" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto scrollbar-hide mx-4">
<div className="px-4 pb-8 space-y-8 min-h-full">

<div className="relative mt-8 animate-bounce-in stagger-3">
<div className="bg-gradient-to-br from-white via-purple-50 to-indigo-50 rounded-3xl pt-16 pb-8 px-8 shadow-2xl border border-white/20 backdrop-blur-xl">
<div className="text-center mb-6">
<h2 className="text-slate-900 font-bold text-2xl tracking-tight mb-2">Priya Sharma</h2>
<div className="flex items-center justify-center gap-2">
<div className="flex">
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
<span className="text-slate-600 text-sm font-medium">Genius Level</span>
</div>
</div>
<div className="grid grid-cols-3 gap-6">
<div className="text-center animate-slide-up stagger-5">
<div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg animate-heartbeat">
<i className="w-6 h-6 text-white" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">Earnings</p>
<p className="text-slate-900 font-bold text-xl">₹2,847</p>
</div>
<div className="text-center animate-slide-up stagger-6">
<div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-spin-slow">
<i className="w-6 h-6 text-white" data-lucide="crown" strokeWidth="1.5"></i>
</div>
<p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-1">Global Rank</p>
<p className="text-slate-900 font-bold text-xl">#47</p>
</div>
<div className="text-center animate-slide-up stagger-7">
<div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
<i className="w-6 h-6 text-white fill-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<p className="text-xs font-semibold text-pink-600 uppercase tracking-wide mb-1">Energy</p>
<p className="text-slate-900 font-bold text-xl">08</p>
</div>
</div>
</div>

<div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-float">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md opacity-70 animate-pulse-glow"></div>
<img alt="avatar" className="relative w-20 h-20 rounded-full border-4 border-white object-cover shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/477765ae-46ca-4701-afb5-5686f2f20c7a_320w.jpg"/>
<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full border-3 border-white flex items-center justify-center shadow-lg animate-bounce">
<i className="w-4 h-4 text-white fill-white" data-lucide="flame" strokeWidth="2"></i>
</div>
</div>
</div>
</div>

<div className="animate-slide-left stagger-4">
<div className="bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-4 border border-orange-400/30 relative overflow-hidden">
<div className="absolute inset-0 shimmer-bg animate-shimmer"></div>
<div className="relative flex items-center gap-4">
<div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-wiggle">
<i className="w-6 h-6 text-white" data-lucide="award" strokeWidth="1.5"></i>
</div>
<div className="flex-1">
<h3 className="text-white font-bold text-lg tracking-tight">Weekly Champion!</h3>
<p className="text-orange-200 text-sm">You're leading this week's leaderboard</p>
</div>
<div className="text-right">
<p className="text-orange-300 font-bold text-lg">1,247 pts</p>
<p className="text-orange-200/80 text-xs">ahead</p>
</div>
</div>
</div>
</div>

<div className="animate-slide-right stagger-5">
<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white font-semibold text-lg tracking-tight">Challenge Progress</h3>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-blue-400 animate-spin-slow" data-lucide="target" strokeWidth="1.5"></i>
<span className="text-blue-400 font-bold text-sm">Daily Quest</span>
</div>
</div>
<div className="flex items-center justify-between mb-4">
<span className="text-white/80 text-sm font-medium">Streak Multiplier</span>
<span className="text-orange-400 font-bold text-lg flex items-center gap-1">
<i className="w-4 h-4 animate-wiggle" data-lucide="flame" strokeWidth="1.5"></i>
                    12 days
                  </span>
</div>
<div className="h-3 w-full bg-white/10 rounded-full overflow-hidden mb-3">
<div className="h-full w-4/5 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-full shimmer-bg animate-shimmer relative">
<div className="absolute right-0 top-0 h-full w-4 bg-white/30 rounded-full animate-pulse"></div>
</div>
</div>
<div className="flex justify-between text-xs text-white/60">
<span>Win 2 more games to unlock bonus</span>
<span>80% Complete</span>
</div>
</div>
</div>

<div className="animate-slide-up stagger-6">
<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
<h3 className="text-white font-semibold text-lg mb-4 tracking-tight">Popular Categories</h3>
<div className="grid grid-cols-2 gap-3">
<button className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300 hover:scale-105 group">
<div className="text-center">
<i className="w-8 h-8 mx-auto mb-2 text-blue-400 group-hover:animate-bounce" data-lucide="brain" strokeWidth="1.5"></i>
<p className="text-white font-semibold text-sm">Science</p>
<p className="text-blue-300 text-xs">84% accuracy</p>
</div>
</button>
<button className="p-4 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl border border-green-400/30 hover:bg-green-500/30 transition-all duration-300 hover:scale-105 group">
<div className="text-center">
<i className="w-8 h-8 mx-auto mb-2 text-green-400 group-hover:animate-bounce" data-lucide="history" strokeWidth="1.5"></i>
<p className="text-white font-semibold text-sm">History</p>
<p className="text-green-300 text-xs">91% accuracy</p>
</div>
</button>
<button className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-400/30 hover:bg-purple-500/30 transition-all duration-300 hover:scale-105 group">
<div className="text-center">
<i className="w-8 h-8 mx-auto mb-2 text-purple-400 group-hover:animate-bounce" data-lucide="gamepad-2" strokeWidth="1.5"></i>
<p className="text-white font-semibold text-sm">Gaming</p>
<p className="text-purple-300 text-xs">76% accuracy</p>
</div>
</button>
<button className="p-4 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl border border-pink-400/30 hover:bg-pink-500/30 transition-all duration-300 hover:scale-105 group">
<div className="text-center">
<i className="w-8 h-8 mx-auto mb-2 text-pink-400 group-hover:animate-bounce" data-lucide="music" strokeWidth="1.5"></i>
<p className="text-white font-semibold text-sm">Music</p>
<p className="text-pink-300 text-xs">88% accuracy</p>
</div>
</button>
</div>
</div>
</div>

<div className="animate-slide-up stagger-7">
<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white font-semibold text-lg tracking-tight">Recent Battles</h3>
<button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">View All</button>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
<i className="w-5 h-5 text-white" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-white font-semibold text-sm">Tech Titans Quiz</p>
<div className="flex items-center gap-2 text-xs text-white/60">
<span>9/10 correct</span>
<span>•</span>
<span>2 mins ago</span>
</div>
</div>
</div>
<div className="text-right">
<span className="text-green-400 font-bold text-lg">+180pts</span>
<p className="text-green-300/80 text-xs">Perfect streak!</p>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
<i className="w-5 h-5 text-white" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-white font-semibold text-sm">Literature Masters</p>
<div className="flex items-center gap-2 text-xs text-white/60">
<span>7/10 correct</span>
<span>•</span>
<span>15 mins ago</span>
</div>
</div>
</div>
<div className="text-right">
<span className="text-blue-400 font-bold text-lg">+140pts</span>
<p className="text-blue-300/80 text-xs">Good effort</p>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
<i className="w-5 h-5 text-white" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-white font-semibold text-sm">Geography Challenge</p>
<div className="flex items-center gap-2 text-xs text-white/60">
<span>5/10 correct</span>
<span>•</span>
<span>1 hour ago</span>
</div>
</div>
</div>
<div className="text-right">
<span className="text-orange-400 font-bold text-lg">+75pts</span>
<p className="text-orange-300/80 text-xs">Keep trying!</p>
</div>
</div>
</div>
</div>
</div>

<div className="animate-slide-up stagger-8">
<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white font-semibold text-lg tracking-tight">Champions League</h3>
<div className="flex items-center gap-1">
<i className="w-4 h-4 text-emerald-400" data-lucide="trending-up" strokeWidth="1.5"></i>
<span className="text-emerald-400 text-sm font-medium">Weekly</span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg animate-pulse-glow">1</div>
<i className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 text-yellow-400 animate-bounce" data-lucide="crown" strokeWidth="1.5"></i>
</div>
<img alt="player" className="w-10 h-10 rounded-full border-2 border-yellow-400" src="https://i.pravatar.cc/40?img=15"/>
<div>
<p className="text-white font-semibold text-sm">Arjun Patel</p>
<p className="text-yellow-200/80 text-xs">Quiz Master</p>
</div>
</div>
<div className="text-right">
<span className="text-yellow-400 font-bold text-lg">4,892</span>
<p className="text-yellow-300/80 text-xs">+247 today</p>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-gray-400/20 to-gray-600/20 border border-gray-400/30">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg">2</div>
<img alt="player" className="w-10 h-10 rounded-full border-2 border-gray-400" src="https://i.pravatar.cc/40?img=16"/>
<div>
<p className="text-white font-semibold text-sm">Maya Singh</p>
<p className="text-gray-200/80 text-xs">Brain Champion</p>
</div>
</div>
<div className="text-right">
<span className="text-gray-300 font-bold text-lg">3,765</span>
<p className="text-gray-300/80 text-xs">+198 today</p>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg">3</div>
<img alt="player" className="w-10 h-10 rounded-full border-2 border-orange-400" src="https://i.pravatar.cc/40?img=17"/>
<div>
<p className="text-white font-semibold text-sm">Rohit Kumar</p>
<p className="text-orange-200/80 text-xs">Knowledge King</p>
</div>
</div>
<div className="text-right">
<span className="text-orange-400 font-bold text-lg">3,124</span>
<p className="text-orange-300/80 text-xs">+156 today</p>
</div>
</div>
</div>
</div>
</div>

<div className="animate-bounce-in stagger-9 pb-8">
<button className="w-full rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 text-white text-xl font-bold py-7 shadow-2xl transition-all duration-300 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group mb-6">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<div className="relative flex items-center justify-center gap-4">
<div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
<i className="w-6 h-6 fill-white" data-lucide="play" strokeWidth="1.5"></i>
</div>
<div className="text-left">
<p className="text-xl font-bold">Quick Match</p>
<p className="text-white/80 text-sm font-medium">Find opponents instantly</p>
</div>
</div>
</button>
<div className="grid grid-cols-2 gap-4">
<button className="p-6 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-2xl border border-emerald-400/30 hover:bg-emerald-500/30 transition-all duration-300 hover:scale-105 group">
<div className="text-center">
<i className="w-8 h-8 mx-auto mb-3 text-emerald-400 group-hover:animate-bounce" data-lucide="users" strokeWidth="1.5"></i>
<p className="text-white font-bold text-lg mb-1">Tournament</p>
<p className="text-emerald-300 text-sm">Join live battle</p>
</div>
</button>
<button className="p-6 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl border border-amber-400/30 hover:bg-amber-500/30 transition-all duration-300 hover:scale-105 group">
<div className="text-center">
<i className="w-8 h-8 mx-auto mb-3 text-amber-400 group-hover:animate-bounce" data-lucide="clock" strokeWidth="1.5"></i>
<p className="text-white font-bold text-lg mb-1">Practice</p>
<p className="text-amber-300 text-sm">Solo challenge</p>
</div>
</button>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 px-6 py-4 bg-black/30 backdrop-blur-xl border-t border-white/10 animate-slide-up stagger-10">
<div className="flex items-center justify-around">
<button className="p-3 text-purple-400 bg-purple-400/20 rounded-2xl">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
</button>
<button className="p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300">
<i className="w-6 h-6" data-lucide="trophy" strokeWidth="1.5"></i>
</button>
<button className="p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300">
<i className="w-6 h-6" data-lucide="bookmark" strokeWidth="1.5"></i>
</button>
<button className="p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 relative">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
</button>
</div>
</div>
</div>
</div>

<div className="flex-1 max-w-2xl text-center lg:text-left space-y-8">
<div className="animate-slide-right stagger-2">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30 mb-8">
<div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
<span className="text-purple-300 text-sm font-medium">Now Live - Season 3 Tournament</span>
</div>
<h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-shimmer">BrainBoost</span>
<br/>
<span className="text-white/90">Quiz Champions</span>
</h1>
<p className="text-xl text-white/80 mb-8 leading-relaxed">
          Challenge your mind, compete with friends, and earn real rewards. Join millions of players in the ultimate trivia experience that makes learning addictive.
        </p>
</div>
<div className="animate-slide-up stagger-4">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
<div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center animate-float">
<i className="w-8 h-8 text-white" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">2.5M+</h3>
<p className="text-white/70">Active Players</p>
</div>
<div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-float stagger-1">
<i className="w-8 h-8 text-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">50K+</h3>
<p className="text-white/70">Questions</p>
</div>
<div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center animate-float stagger-2">
<i className="w-8 h-8 text-white" data-lucide="award" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">₹10L+</h3>
<p className="text-white/70">Prizes Won</p>
</div>
</div>
</div>
<div className="animate-slide-up stagger-6">
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-purple-500/50 hover:scale-105 active:scale-95">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="smartphone" strokeWidth="1.5"></i>
              Download Now
            </div>
</button>
<button className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-bold rounded-2xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95">
<div className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="play-circle" strokeWidth="1.5"></i>
              Watch Demo
            </div>
</button>
</div>
</div>
<div className="animate-fade-in stagger-8">
<div className="flex items-center justify-center lg:justify-start gap-8 text-white/60">
<div className="flex items-center gap-2">
<div className="flex">
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
<span className="text-sm">4.9/5 Rating</span>
</div>
<div className="text-sm">
<span>Trusted by</span>
<span className="text-white font-semibold"> 10M+ users</span>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
