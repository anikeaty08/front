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
      
tailwind.config = {
theme: {
extend: {
colors: {
dark: '#000000',
light: '#ffffff',
subtle: 'rgba(255,255,255,0.1)'
},
fontFamily: {
sans: ['Inter', 'sans-serif']
}
}
}
}



    lucide.createIcons();
  
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
      
<div className="relative min-h-screen overflow-hidden">

<div className="fixed inset-0 z-0">
<iframe className="w-full h-full" frameborder="0" height="100%" src="https://my.spline.design/thresholddarkambientui-v0gkZCfi6zXm69kE0wccy70f/" width="100%"></iframe>
</div>

<nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-opacity-5 border-opacity-10 bg-white border-white border rounded-full px-4 py-3 shadow-xl backdrop-blur-md">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-6 h-6 text-white" style={{strokeWidth: '1.5'}}>
<i data-lucide="zap"></i>
</div>
<span className="ml-2 text-sm font-medium">ZoomJudge</span>
</div>
<div className="hidden md:flex items-center space-x-6 text-xs text-gray-300 ml-8">
<a className="hover:text-white transition-colors" href="#">Evaluate</a>
<a className="hover:text-white transition-colors" href="#">Courses</a>
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">API</a>
</div>
<div className="flex items-center space-x-3 ml-8">
<a className="hidden md:inline-block text-xs font-medium hover:text-white transition-colors" href="#">Login</a>
<a className="hover:bg-gray-200 transition-colors text-xs font-medium text-black bg-white rounded-full px-3 py-1.5" href="#">Start Evaluation</a>
</div>
</div>
</nav>

<div className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-32 md:pt-40 md:pb-40 text-center min-h-screen">
<div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
<span className="px-3 py-1 text-xs font-medium text-white bg-white bg-opacity-10 backdrop-blur-sm rounded-full mb-8 border border-white border-opacity-20">AI-Powered Code Analysis</span>
<h1 className="md:text-6xl max-w-4xl leading-tight text-4xl font-medium tracking-tight">
        Advanced repository evaluation for Zoomcamp courses
      </h1>
<p className="md:text-xl max-w-2xl text-lg text-neutral-300 mt-6">
        Static code analysis with intelligent AI scoring. Evaluate GitHub commits 
        across Data Engineering, ML, MLOps, LLM, and Stock Market projects.
      </p>
<div className="mt-12 flex flex-col sm:flex-row gap-4">
<a className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="github" style={{strokeWidth: '1.5'}}></i>
          Evaluate Repository
        </a>
<a className="px-8 py-3 bg-white bg-opacity-10 backdrop-blur-sm text-white font-medium rounded-full hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 flex items-center justify-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="play-circle" style={{strokeWidth: '1.5'}}></i>
          View Demo
        </a>
</div>

<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="space-y-2">
<div className="text-2xl md:text-3xl font-semibold">5</div>
<div className="text-xs text-gray-400 uppercase tracking-wide">Courses</div>
</div>
<div className="space-y-2">
<div className="text-2xl md:text-3xl font-semibold">35K+</div>
<div className="text-xs text-gray-400 uppercase tracking-wide">File Support</div>
</div>
<div className="space-y-2">
<div className="text-2xl md:text-3xl font-semibold">3-Tier</div>
<div className="text-xs text-gray-400 uppercase tracking-wide">Architecture</div>
</div>
<div className="space-y-2">
<div className="text-2xl md:text-3xl font-semibold">32</div>
<div className="text-xs text-gray-400 uppercase tracking-wide">Test Cases</div>
</div>
</div>

<div className="mt-20 flex justify-center">
<div className="w-full max-w-5xl h-[500px] bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-2xl border border-white border-opacity-10 overflow-hidden">

<div className="h-8 border-b border-white border-opacity-10 flex items-center px-4">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="flex-1 text-center text-xs text-gray-400">ZoomJudge Dashboard</div>
</div>

<div className="p-6 h-full">
<div className="flex h-full gap-6">

<div className="w-64 bg-white bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-5 p-4">

<div className="mb-6">
<div className="text-sm font-medium mb-3">Course Selection</div>
<div className="space-y-2">
<div className="flex items-center gap-2 px-3 py-2 bg-blue-500 bg-opacity-20 rounded text-xs text-blue-200 border border-blue-500 border-opacity-30">
<i className="w-3 h-3" data-lucide="database" style={{strokeWidth: '1.5'}}></i>
                      Data Engineering
                    </div>
<div className="flex items-center gap-2 px-3 py-2 hover:bg-white hover:bg-opacity-5 rounded text-xs text-gray-300 cursor-pointer">
<i className="w-3 h-3" data-lucide="brain" style={{strokeWidth: '1.5'}}></i>
                      Machine Learning
                    </div>
<div className="flex items-center gap-2 px-3 py-2 hover:bg-white hover:bg-opacity-5 rounded text-xs text-gray-300 cursor-pointer">
<i className="w-3 h-3" data-lucide="git-branch" style={{strokeWidth: '1.5'}}></i>
                      MLOps
                    </div>
<div className="flex items-center gap-2 px-3 py-2 hover:bg-white hover:bg-opacity-5 rounded text-xs text-gray-300 cursor-pointer">
<i className="w-3 h-3" data-lucide="message-square" style={{strokeWidth: '1.5'}}></i>
                      LLM Zoomcamp
                    </div>
<div className="flex items-center gap-2 px-3 py-2 hover:bg-white hover:bg-opacity-5 rounded text-xs text-gray-300 cursor-pointer">
<i className="w-3 h-3" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
                      Stock Markets
                    </div>
</div>
</div>

<div className="border-t border-white border-opacity-10 pt-4">
<div className="text-sm font-medium mb-3">Recent Evaluations</div>
<div className="space-y-2">
<div className="px-2 py-2 hover:bg-white hover:bg-opacity-5 rounded text-xs cursor-pointer">
<div className="text-white">user/ml-project</div>
<div className="text-gray-400 flex items-center gap-1 mt-1">
<span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Score: 8/10
                      </div>
</div>
<div className="px-2 py-2 hover:bg-white hover:bg-opacity-5 rounded text-xs cursor-pointer">
<div className="text-white">dev/data-pipeline</div>
<div className="text-gray-400 flex items-center gap-1 mt-1">
<span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        Score: 6/10
                      </div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-white bg-opacity-5 backdrop-blur-sm rounded-lg border border-white border-opacity-5 p-6">

<div className="mb-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold tracking-tight">Repository Evaluation</h2>
<div className="flex items-center gap-2 text-sm text-gray-300">
<i className="w-4 h-4" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
                      Live Analysis
                    </div>
</div>

<div className="flex gap-3 mb-6">
<div className="flex-1 relative">
<input className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm" placeholder="https://github.com/user/repo/commit/abc123..." type="text"/>
<i className="absolute right-3 top-3 w-4 h-4 text-gray-400" data-lucide="link" style={{strokeWidth: '1.5'}}></i>
</div>
<button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium flex items-center gap-2">
<i className="w-4 h-4" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
                      Evaluate
                    </button>
</div>
</div>

<div className="space-y-4">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
<div className="bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30 rounded-lg p-4 text-center">
<div className="text-2xl font-semibold text-green-300 mb-1">8</div>
<div className="text-xs text-green-200">Overall Score</div>
</div>
<div className="bg-blue-500 bg-opacity-10 border border-blue-500 border-opacity-30 rounded-lg p-4 text-center">
<div className="text-2xl font-semibold text-blue-300 mb-1">847</div>
<div className="text-xs text-blue-200">Files Analyzed</div>
</div>
<div className="bg-purple-500 bg-opacity-10 border border-purple-500 border-opacity-30 rounded-lg p-4 text-center">
<div className="text-2xl font-semibold text-purple-300 mb-1">12s</div>
<div className="text-xs text-purple-200">Analysis Time</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between py-3 border-b border-white border-opacity-10">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">Code Structure &amp; Organization</span>
</div>
<span className="text-sm text-green-400">3/3</span>
</div>
<div className="flex items-center justify-between py-3 border-b border-white border-opacity-10">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">Documentation Quality</span>
</div>
<span className="text-sm text-green-400">2/2</span>
</div>
<div className="flex items-center justify-between py-3 border-b border-white border-opacity-10">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-yellow-400" data-lucide="alert-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">Implementation Completeness</span>
</div>
<span className="text-sm text-yellow-400">2/3</span>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">Best Practices</span>
</div>
<span className="text-sm text-green-400">1/1</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
<div className="text-center space-y-3">
<div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mx-auto">
<i className="w-6 h-6" data-lucide="layers" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="font-medium">Ultimate Hybrid Architecture</h3>
<p className="text-sm text-gray-400">Three-tier file selection system with intelligent caching and AI-guided analysis for optimal performance.</p>
</div>
<div className="text-center space-y-3">
<div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mx-auto">
<i className="w-6 h-6" data-lucide="git-commit" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="font-medium">Static Code Analysis</h3>
<p className="text-sm text-gray-400">Evaluates repositories at specific commit points for consistent, reproducible results every time.</p>
</div>
<div className="text-center space-y-3">
<div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mx-auto">
<i className="w-6 h-6" data-lucide="target" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="font-medium">Discrete Scoring</h3>
<p className="text-sm text-gray-400">Assigns only whole number scores as per course requirements with actionable feedback.</p>
</div>
</div>
</div>
</div>


    </>
  );
}
