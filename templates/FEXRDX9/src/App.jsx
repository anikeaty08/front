import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



lucide.createIcons();

// Mobile menu functionality
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const sideNav = document.getElementById('sideNav');
const overlay = document.getElementById('overlay');

mobileMenuToggle.addEventListener('click', () => {
  sideNav.classList.toggle('-translate-x-full');
  overlay.classList.toggle('opacity-0');
  overlay.classList.toggle('pointer-events-none');
});

overlay.addEventListener('click', () => {
  sideNav.classList.add('-translate-x-full');
  overlay.classList.add('opacity-0');
  overlay.classList.add('pointer-events-none');
});

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => {
      btn.classList.remove('active', 'bg-gradient-to-r', 'from-orange-500', 'to-red-500', 'text-white', 'shadow-lg');
      btn.classList.add('bg-slate-100', 'text-slate-700');
    });
    button.classList.add('active', 'bg-gradient-to-r', 'from-orange-500', 'to-red-500', 'text-white', 'shadow-lg');
    button.classList.remove('bg-slate-100', 'text-slate-700');
  });
});

// Performance Chart
const ctx = document.getElementById('performanceChart').getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
gradient.addColorStop(1, 'rgba(59, 130, 246, 0.05)');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Dec 1', 'Dec 8', 'Dec 15', 'Dec 22', 'Dec 29', 'Jan 5', 'Jan 12'],
    datasets: [{
      label: 'Performance Score',
      data: [88, 91, 89, 94, 96, 93, 98],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: gradient,
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: 'rgb(59, 130, 246)',
      pointBorderColor: 'white',
      pointBorderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          display: false
        }
      },
      y: {
        border: {
          display: false
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.1)'
        },
        min: 80,
        max: 100
      }
    }
  }
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
</div>

<button className="lg:hidden fixed top-6 left-6 z-50 p-2 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 transition-all duration-300" id="mobileMenuToggle">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>

<div className="min-h-screen flex flex-col lg:flex-row relative">

<aside className="lg:w-80 bg-slate-900/50 backdrop-blur-xl border-r border-slate-800 fixed lg:relative inset-y-0 left-0 z-40 transform -translate-x-full lg:translate-x-0 transition-transform duration-300" id="sideNav">
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/40 backdrop-blur-xl"></div>
<nav className="relative px-8 py-12">
<div className="mb-12 opacity-0 animate-fade-in">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="zap"></i>
</div>
<span className="text-lg font-semibold text-white">Nexus AI</span>
</div>
</div>
<ul className="space-y-1 text-sm">
<li className="opacity-0 animate-fade-in" style={{animationDelay: '0.1s'}}>
<div className="flex items-center space-x-4 group cursor-pointer p-3 rounded-lg hover:bg-slate-800/60 transition-all duration-300">
<span className="w-6 text-center text-blue-400 font-medium">01</span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-white font-medium group-hover:text-blue-400 transition-colors">Capabilities</span>
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
</div>
<div className="h-px bg-gradient-to-r from-slate-700 to-transparent mt-2"></div>
</div>
</div>
</li>
<li className="opacity-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="flex items-center space-x-4 group cursor-pointer p-3 rounded-lg hover:bg-slate-800/60 transition-all duration-300">
<span className="w-6 text-center text-slate-500 font-medium">02</span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-slate-400 group-hover:text-white transition-colors">Performance Analytics</span>
<i className="w-4 h-4 text-slate-600" data-lucide="trending-up"></i>
</div>
<div className="h-px bg-gradient-to-r from-slate-800 to-transparent mt-2"></div>
</div>
</div>
</li>
<li className="opacity-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
<div className="flex items-center space-x-4 group cursor-pointer p-3 rounded-lg hover:bg-slate-800/60 transition-all duration-300">
<span className="w-6 text-center text-slate-500 font-medium">03</span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-slate-400 group-hover:text-white transition-colors">Neural Architecture</span>
<i className="w-4 h-4 text-slate-600" data-lucide="cpu"></i>
</div>
<div className="h-px bg-gradient-to-r from-slate-800 to-transparent mt-2"></div>
</div>
</div>
</li>
<li className="opacity-0 animate-fade-in" style={{animationDelay: '0.4s'}}>
<div className="flex items-center space-x-4 group cursor-pointer p-3 rounded-lg hover:bg-slate-800/60 transition-all duration-300">
<span className="w-6 text-center text-slate-500 font-medium">04</span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-slate-400 group-hover:text-white transition-colors">AI Research Team</span>
<i className="w-4 h-4 text-slate-600" data-lucide="users"></i>
</div>
<div className="h-px bg-gradient-to-r from-slate-800 to-transparent mt-2"></div>
</div>
</div>
</li>
<li className="opacity-0 animate-fade-in" style={{animationDelay: '0.5s'}}>
<div className="flex items-center space-x-4 group cursor-pointer p-3 rounded-lg hover:bg-slate-800/60 transition-all duration-300">
<span className="w-6 text-center text-slate-500 font-medium">05</span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-slate-400 group-hover:text-white transition-colors">Enterprise Integration</span>
<i className="w-4 h-4 text-slate-600" data-lucide="plug"></i>
</div>
<div className="h-px bg-gradient-to-r from-slate-800 to-transparent mt-2"></div>
</div>
</div>
</li>
<li className="opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
<div className="flex items-center space-x-4 group cursor-pointer p-3 rounded-lg hover:bg-slate-800/60 transition-all duration-300">
<span className="w-6 text-center text-slate-500 font-medium">06</span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-slate-400 group-hover:text-white transition-colors">Pricing &amp; Plans</span>
<i className="w-4 h-4 text-slate-600" data-lucide="credit-card"></i>
</div>
<div className="h-px bg-gradient-to-r from-slate-800 to-transparent mt-2"></div>
</div>
</div>
</li>
</ul>
</nav>
</aside>

<div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 opacity-0 pointer-events-none transition-opacity duration-300" id="overlay"></div>

<main className="flex-1 flex justify-center lg:justify-start lg:pl-12 pb-20 relative">
<section className="max-w-7xl w-full bg-white/95 backdrop-blur-xl rounded-2xl mt-8 lg:mt-14 mx-4 lg:mx-8 shadow-2xl border border-white/20 opacity-0 animate-fade-in" style={{animationDelay: '0.3s'}}>

<div className="border-b border-slate-200/60 px-8 lg:px-12 pt-12 pb-10 bg-gradient-to-r from-slate-50 to-white rounded-t-2xl">
<div className="flex items-center space-x-3 text-sm font-medium tracking-wider uppercase opacity-0 animate-slide-up" style={{animationDelay: '0.5s'}}>
<div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
<span className="text-slate-600">Revolutionary AI Capabilities</span>
</div>
<h1 className="mt-8 text-4xl md:text-5xl lg:text-7xl font-medium leading-tight text-slate-900 tracking-tight opacity-0 animate-slide-up" style={{animationDelay: '0.7s'}}>
            Infinite possibilities.<br className="hidden lg:block"/>
<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">Total mastery.</span>
</h1>
</div>

<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 px-8 lg:px-12 py-12 lg:py-16">

<div className="opacity-0 animate-slide-up" style={{animationDelay: '0.9s'}}>
<div className="flex mb-8">
<span className="text-lg font-semibold text-blue-500 mr-4">01</span>
<p className="text-slate-700 leading-relaxed text-lg">
                Nexus AI's revolutionary capabilities enable you to analyze complex patterns, train sophisticated models, conduct comprehensive testing, and deploy at enterprise scale—all within a unified, intuitive workspace designed for the future of AI.
              </p>
</div>
<button className="group flex items-center space-x-3 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
<span>Explore Advanced Capabilities</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>

<div className="mt-12 border border-slate-200 rounded-2xl bg-white shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
<div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="p-2 bg-blue-100 rounded-lg">
<i className="w-5 h-5 text-blue-600" data-lucide="activity"></i>
</div>
<div>
<span className="font-semibold text-slate-800">Nexus Performance Monitor</span>
<div className="text-sm text-slate-500">Real-time AI analytics</div>
</div>
</div>
<div className="flex items-center space-x-3 text-sm text-slate-500">
<div className="flex items-center space-x-1">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Dec 1 – Jan 15</span>
</div>
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
</div>
</div>
<div className="p-6">
<div className="h-64 relative">
<canvas className="w-full h-full" id="performanceChart"></canvas>
</div>
<div className="mt-4 grid grid-cols-3 gap-4 text-center">
<div className="p-3 bg-slate-50 rounded-lg">
<div className="text-2xl font-bold text-slate-900">94.2%</div>
<div className="text-sm text-slate-600">Accuracy</div>
</div>
<div className="p-3 bg-slate-50 rounded-lg">
<div className="text-2xl font-bold text-slate-900">2.1ms</div>
<div className="text-sm text-slate-600">Latency</div>
</div>
<div className="p-3 bg-slate-50 rounded-lg">
<div className="text-2xl font-bold text-slate-900">99.9%</div>
<div className="text-sm text-slate-600">Uptime</div>
</div>
</div>
</div>
</div>
</div>

<div className="opacity-0 animate-slide-up" style={{animationDelay: '1.1s'}}>

<div className="flex flex-wrap gap-2 mb-8">
<button className="tab-button active px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform transition-all duration-300" id="analyzeTab">
<i className="w-4 h-4 inline mr-2" data-lucide="search"></i>Analyze
              </button>
<button className="tab-button px-5 py-2.5 rounded-full text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all duration-300 transform hover:scale-105" id="trainTab">
<i className="w-4 h-4 inline mr-2" data-lucide="brain"></i>Train
              </button>
<button className="tab-button px-5 py-2.5 rounded-full text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all duration-300 transform hover:scale-105" id="testTab">
<i className="w-4 h-4 inline mr-2" data-lucide="flask"></i>Test
              </button>
<button className="tab-button px-5 py-2.5 rounded-full text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all duration-300 transform hover:scale-105" id="deployTab">
<i className="w-4 h-4 inline mr-2" data-lucide="rocket"></i>Deploy
              </button>
</div>
<div id="tabContent">
<h2 className="text-3xl font-semibold text-slate-900 mb-4">Advanced Analysis Suite</h2>
<p className="text-slate-700 leading-relaxed text-lg mb-8">
                Monitor, analyze, and optimize your AI models with unprecedented precision. Identify performance patterns, detect anomalies, and implement continuous improvements across all operational dimensions.
              </p>

<div className="mt-10">
<h3 className="text-sm uppercase tracking-wider font-semibold text-slate-500 mb-6 flex items-center">
<i className="w-4 h-4 mr-2" data-lucide="star"></i>
                  Featured Capabilities
                </h3>
<div className="border-t border-slate-200 pt-6">
<div className="grid grid-cols-1 gap-4">
<div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
<i className="w-4 h-4 text-blue-600" data-lucide="bar-chart-3"></i>
</div>
<span className="font-medium text-slate-800">Comprehensive Performance Analytics</span>
</div>
<div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
<div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
<i className="w-4 h-4 text-green-600" data-lucide="target"></i>
</div>
<span className="font-medium text-slate-800">Multi-dimensional Reporting</span>
</div>
<div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
<div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
<i className="w-4 h-4 text-purple-600" data-lucide="compass"></i>
</div>
<span className="font-medium text-slate-800">Intelligent Topic Discovery</span>
</div>
<div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
<div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
<i className="w-4 h-4 text-orange-600" data-lucide="message-circle"></i>
</div>
<span className="font-medium text-slate-800">Real-time Conversation Intelligence</span>
</div>
<div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
<div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
<i className="w-4 h-4 text-red-600" data-lucide="lightbulb"></i>
</div>
<span className="font-medium text-slate-800">AI-powered Optimization Suggestions</span>
</div>
<div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group">
<div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
<i className="w-4 h-4 text-indigo-600" data-lucide="heart"></i>
</div>
<span className="font-medium text-slate-800">Customer Experience Optimization</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>
<style>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}
</style>


    </>
  );
}
