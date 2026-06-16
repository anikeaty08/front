import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Navigation Logic
        function navigate(viewId) {
            // Hide all views
            const views = ['dashboard', 'ask', 'voice', 'diagram', 'quiz', 'history', 'profile'];
            views.forEach(id => {
                document.getElementById(`view-${id}`).classList.add('hidden');
                
                // Reset Sidebar Active States
                const navBtn = document.getElementById(`nav-${id}`);
                if (navBtn) {
                    navBtn.className = "nav-item w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors";
                    navBtn.querySelector('iconify-icon').setAttribute('icon', navBtn.querySelector('iconify-icon').getAttribute('icon').replace('-bold', '-linear'));
                }
            });

            // Show selected view
            const targetView = document.getElementById(`view-${viewId}`);
            targetView.classList.remove('hidden');
            targetView.classList.add('fade-in'); // Re-trigger animation

            // Set Active Sidebar State
            const activeBtn = document.getElementById(`nav-${viewId}`);
            if (activeBtn) {
                activeBtn.className = "nav-item w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-[#4F8CFF] bg-blue-50 transition-colors shadow-sm ring-1 ring-blue-100";
                
                // Change icon to bold for active state if available, or keep linear
                // For simplicity in this demo keeping icons consistent or standard
            }

            // Update Header Title
            const titles = {
                'dashboard': 'Dashboard',
                'ask': 'Ask AI',
                'voice': 'Voice Tutor',
                'diagram': 'Diagram Mode',
                'quiz': 'Quiz Mode',
                'history': 'History',
                'profile': 'My Profile'
            };
            document.getElementById('page-title').innerText = titles[viewId];
            
            // Toggle subtitle
            const subtitle = document.getElementById('page-subtitle');
            if(viewId === 'dashboard') {
                subtitle.classList.remove('hidden');
            } else {
                subtitle.classList.add('hidden');
            }
        }

        // Initialize
        navigate('dashboard');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-100 h-full fixed z-20 transition-all duration-300">
<div className="p-6 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-[#4F8CFF] flex items-center justify-center text-white">
<iconify-icon icon="solar:book-bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h1 className="text-lg font-bold tracking-tight text-slate-800">AI Smart Tutor</h1>
</div>
<nav className="flex-1 px-4 space-y-1 overflow-y-auto">
<button className="nav-item w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-[#4F8CFF] bg-blue-50 transition-colors" id="nav-dashboard" onclick="navigate('dashboard')">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Dashboard
            </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors" id="nav-ask" onclick="navigate('ask')">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Ask AI
            </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors" id="nav-voice" onclick="navigate('voice')">
<iconify-icon icon="solar:microphone-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Voice Tutor
            </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors" id="nav-diagram" onclick="navigate('diagram')">
<iconify-icon icon="solar:gallery-wide-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Diagram Mode
            </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors" id="nav-quiz" onclick="navigate('quiz')">
<iconify-icon icon="solar:checklist-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Quiz Mode
            </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors" id="nav-history" onclick="navigate('history')">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5" width="20"></iconify-icon>
                History
            </button>
</nav>
<div className="p-4 border-t border-slate-100">
<button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors" id="nav-profile" onclick="navigate('profile')">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                My Profile
            </button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full md:ml-64 relative bg-[#F8FAFC]">

<header className="sticky top-0 z-10 bg-[#F8FAFC]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-slate-100/50">
<div className="flex items-center gap-3 md:hidden">
<button className="p-2 text-slate-500 rounded-lg hover:bg-slate-100">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<span className="font-bold text-slate-800">AI Tutor</span>
</div>
<div className="hidden md:block">
<h2 className="text-xl font-semibold tracking-tight text-slate-800" id="page-title">Dashboard</h2>
<p className="text-xs text-slate-400 font-medium" id="page-subtitle">Welcome back, Alex!</p>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center bg-white rounded-full p-1 border border-slate-200 shadow-sm">
<button className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">ENG</button>
<button className="px-3 py-1 rounded-full text-xs font-medium text-slate-400 hover:text-slate-600">BN</button>
</div>

<button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#4F8CFF] flex items-center justify-center hover:shadow-md transition-shadow">
<iconify-icon icon="solar:microphone-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>

<div className="w-10 h-10 rounded-full bg-teal-100 border-2 border-white shadow-sm flex items-center justify-center text-teal-600 text-sm font-bold cursor-pointer hover:ring-2 hover:ring-teal-200 transition-all">
                    A
                </div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 relative" id="content-area">

<div className="fade-in max-w-5xl mx-auto space-y-8" id="view-dashboard">

<div className="bg-gradient-to-r from-[#4F8CFF] to-blue-400 rounded-2xl p-6 md:p-8 text-white shadow-lg shadow-blue-200 relative overflow-hidden">
<div className="relative z-10 max-w-lg">
<h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">Ready to learn something new?</h2>
<p className="text-blue-50 text-sm md:text-base mb-6 opacity-90">Ask me anything about your homework, science projects, or history lessons.</p>
<button className="bg-white text-[#4F8CFF] px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-50 transition-colors shadow-sm inline-flex items-center gap-2" onclick="navigate('ask')">
                            Start Learning
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon>
</button>
</div>

<div className="absolute -right-10 -bottom-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
<div className="absolute top-10 right-20 w-20 h-20 bg-teal-300 opacity-20 rounded-full blur-xl"></div>
</div>

<div>
<h3 className="text-base font-semibold text-slate-800 mb-4">Quick Actions</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group" onclick="navigate('ask')">
<div className="w-10 h-10 rounded-xl bg-blue-50 text-[#4F8CFF] flex items-center justify-center mb-4 group-hover:bg-[#4F8CFF] group-hover:text-white transition-colors">
<iconify-icon icon="solar:keyboard-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-800 mb-1">Ask by Text</h4>
<p className="text-xs text-slate-500 leading-relaxed">Type your difficult questions and get instant, simple answers.</p>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group" onclick="navigate('voice')">
<div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:microphone-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-800 mb-1">Voice Tutor</h4>
<p className="text-xs text-slate-500 leading-relaxed">Speak your question naturally. Great for language practice.</p>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group" onclick="navigate('diagram')">
<div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:gallery-wide-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-800 mb-1">Learn with Diagrams</h4>
<p className="text-xs text-slate-500 leading-relaxed">Visualize complex topics like biology cells or physics forces.</p>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group" onclick="navigate('quiz')">
<div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:checklist-minimalistic-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-800 mb-1">Take a Quiz</h4>
<p className="text-xs text-slate-500 leading-relaxed">Test your knowledge on any chapter before exams.</p>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group" onclick="navigate('history')">
<div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-800 mb-1">Study History</h4>
<p className="text-xs text-slate-500 leading-relaxed">Review everything you've asked in the past week.</p>
</div>
</div>
</div>
</div>

<div className="hidden fade-in max-w-4xl mx-auto h-full flex flex-col" id="view-ask">

<div className="flex-1 space-y-6 pb-6 overflow-y-auto">

<div className="flex gap-4">
<div className="w-8 h-8 rounded-lg bg-[#4F8CFF] flex-shrink-0 flex items-center justify-center text-white text-xs">AI</div>
<div className="space-y-3 max-w-[85%]">
<div className="bg-white p-5 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-sm leading-relaxed text-slate-700">
<p className="mb-3">Here is an explanation of <strong>Photosynthesis</strong>:</p>
<p className="mb-4">Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of sugar.</p>
<div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
<h5 className="text-xs font-bold text-slate-800 mb-2 uppercase tracking-wider">Key Points</h5>
<ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
<li>Occurs in chloroplasts using chlorophyll.</li>
<li>Converts solar energy into chemical energy.</li>
<li>Releases oxygen as a byproduct.</li>
</ul>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 bg-blue-50 text-[#4F8CFF] px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-blue-100 transition">
<iconify-icon icon="solar:play-circle-linear" width="16"></iconify-icon>
                                        Listen
                                    </button>
<button className="flex items-center gap-2 bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-slate-100 transition">
<iconify-icon icon="solar:gallery-wide-linear" width="16"></iconify-icon>
                                        View Diagram
                                    </button>
</div>
</div>
</div>
</div>

<div className="flex gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-lg bg-teal-100 border border-white shadow-sm flex-shrink-0 flex items-center justify-center text-teal-600 text-xs font-bold">A</div>
<div className="bg-[#4F8CFF] text-white p-4 rounded-2xl rounded-tr-none shadow-sm text-sm">
                            Explain Newton's third law of motion.
                        </div>
</div>
</div>

<div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2 mt-4 sticky bottom-0">
<button className="p-2 text-slate-400 hover:text-[#4F8CFF] hover:bg-blue-50 rounded-xl transition-colors">
<iconify-icon icon="solar:gallery-add-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<input className="flex-1 bg-transparent border-none outline-none text-sm text-slate-700 placeholder-slate-400 px-2 py-2" placeholder="Type your question here..." type="text"/>
<button className="p-2 bg-[#4F8CFF] text-white rounded-xl shadow-md hover:bg-blue-600 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:plain-3-bold" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="hidden fade-in max-w-3xl mx-auto h-full flex flex-col items-center justify-center" id="view-voice">
<div className="text-center mb-10">
<h3 className="text-2xl font-bold text-slate-800 mb-2">Voice Tutor Mode</h3>
<p className="text-slate-500 text-sm">Tap the microphone and ask anything.</p>
</div>

<div className="flex items-center justify-center gap-2 h-16 mb-8">
<div className="w-2 bg-[#4F8CFF] rounded-full voice-bar h-10"></div>
<div className="w-2 bg-[#4F8CFF] rounded-full voice-bar h-16"></div>
<div className="w-2 bg-[#4F8CFF] rounded-full voice-bar h-8"></div>
<div className="w-2 bg-[#4F8CFF] rounded-full voice-bar h-20"></div>
<div className="w-2 bg-[#4F8CFF] rounded-full voice-bar h-12"></div>
</div>

<div className="relative group cursor-pointer mb-12">
<div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity animate-pulse"></div>
<button className="relative w-24 h-24 bg-gradient-to-br from-[#4F8CFF] to-blue-600 rounded-full text-white shadow-xl shadow-blue-200 flex items-center justify-center hover:scale-105 transition-transform">
<iconify-icon icon="solar:microphone-bold" width="40"></iconify-icon>
</button>
</div>

<div className="w-full bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Previous Answer</p>
<p className="text-sm text-slate-700 italic">"The capital of France is Paris..."</p>
<div className="mt-4 flex justify-center">
<button className="text-[#4F8CFF] text-xs font-semibold flex items-center gap-1 hover:underline">
                            View Full Explanation
                        </button>
</div>
</div>
</div>

<div className="hidden fade-in max-w-4xl mx-auto" id="view-diagram">
<div className="mb-6 flex items-center gap-4">
<input className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#4F8CFF] focus:ring-2 focus:ring-blue-50 transition-all shadow-sm" placeholder="What do you want to visualize? (e.g. Water Cycle)" type="text"/>
<button className="bg-[#4F8CFF] text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-sm hover:bg-blue-600 transition-colors">Generate</button>
</div>

<div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col items-center justify-center min-h-[400px]">
<div className="w-full max-w-md aspect-video bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 mb-6">
<iconify-icon className="mb-2 opacity-50" icon="solar:gallery-wide-linear" width="48"></iconify-icon>
<span className="text-xs font-medium">Diagram will appear here</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
<div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
<h4 className="text-[#4F8CFF] font-semibold text-sm mb-2">Labels</h4>
<ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
<li>Evaporation</li>
<li>Condensation</li>
<li>Precipitation</li>
</ul>
</div>
<div className="bg-teal-50 p-4 rounded-xl border border-teal-100">
<h4 className="text-teal-600 font-semibold text-sm mb-2">Key Concept</h4>
<p className="text-xs text-slate-600">Water continuously moves between the atmosphere and the Earth's surface.</p>
</div>
</div>
</div>
</div>

<div className="hidden fade-in max-w-2xl mx-auto" id="view-quiz">

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mb-6">
<h3 className="text-lg font-bold text-slate-800 mb-4">Create a Quiz</h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1">Topic</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#4F8CFF]" type="text" value="Solar System"/>
</div>
<button className="w-full bg-[#4F8CFF] text-white py-3 rounded-xl text-sm font-semibold shadow-sm hover:bg-blue-600 transition-colors">Generate Question</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
<div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
<span className="text-xs font-bold text-[#4F8CFF] bg-blue-50 px-2 py-1 rounded-md">Question 1/5</span>
<div className="flex items-center gap-1 text-slate-400">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-xs font-medium">00:45</span>
</div>
</div>
<div className="p-6 md:p-8">
<h4 className="text-lg font-semibold text-slate-800 mb-6 leading-relaxed">Which planet in our solar system is known as the "Red Planet"?</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
<button className="text-left px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-600 hover:border-[#4F8CFF] hover:bg-blue-50 transition-all">A. Venus</button>
<button className="text-left px-4 py-3 rounded-xl border border-[#4F8CFF] bg-blue-50 text-sm text-[#4F8CFF] font-medium shadow-sm ring-1 ring-[#4F8CFF]">B. Mars</button>
<button className="text-left px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-600 hover:border-[#4F8CFF] hover:bg-blue-50 transition-all">C. Jupiter</button>
<button className="text-left px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-600 hover:border-[#4F8CFF] hover:bg-blue-50 transition-all">D. Saturn</button>
</div>

<div className="bg-green-50 rounded-xl p-4 flex gap-3 border border-green-100">
<div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2.5" width="16"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-bold text-green-700 mb-1">Correct!</h5>
<p className="text-xs text-green-600">Mars appears red due to iron oxide (rust) on its surface.</p>
</div>
</div>
</div>
<div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
<button className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900">
                            Next Question
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden fade-in max-w-4xl mx-auto" id="view-history">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-bold text-slate-800">Learning History</h3>
<div className="flex items-center bg-white border border-slate-200 rounded-lg p-1">
<button className="px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-700 rounded-md">All</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700">Science</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700">Math</button>
</div>
</div>
<div className="space-y-4">

<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-blue-200 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="bg-blue-50 text-[#4F8CFF] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Science</span>
<span className="text-xs text-slate-400">Today, 10:30 AM</span>
</div>
<iconify-icon className="text-slate-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-800 mb-1">What is the formula for area of a circle?</h4>
<p className="text-xs text-slate-500 line-clamp-1">The area of a circle is calculated by the formula A = πr²...</p>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-blue-200 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="bg-purple-50 text-purple-500 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">History</span>
<span className="text-xs text-slate-400">Yesterday</span>
</div>
<iconify-icon className="text-slate-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-800 mb-1">Who built the Taj Mahal?</h4>
<p className="text-xs text-slate-500 line-clamp-1">The Taj Mahal was commissioned by the Mughal emperor Shah Jahan...</p>
</div>
</div>
</div>

<div className="hidden fade-in max-w-2xl mx-auto" id="view-profile">
<div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-6">
<div className="h-24 bg-gradient-to-r from-[#4F8CFF] to-teal-400"></div>
<div className="px-6 pb-6 relative">
<div className="w-20 h-20 rounded-full border-4 border-white bg-slate-100 absolute -top-10 flex items-center justify-center text-2xl">😎</div>
<div className="mt-12 flex justify-between items-end">
<div>
<h2 className="text-xl font-bold text-slate-800">Alex Student</h2>
<p className="text-sm text-slate-500">Class 9 • Science Group</p>
</div>
<button className="text-[#4F8CFF] text-sm font-semibold hover:underline">Edit</button>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-6">
<div>
<h3 className="text-sm font-bold text-slate-800 mb-4">Preferences</h3>

<div className="flex items-center justify-between py-3 border-b border-slate-50">
<div>
<p className="text-sm font-medium text-slate-700">Class Level</p>
<p className="text-xs text-slate-400">Adjusts the complexity of answers</p>
</div>
<select className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-3 py-1.5 outline-none focus:border-[#4F8CFF]">
<option>Class 6</option>
<option>Class 7</option>
<option>Class 8</option>
<option selected="">Class 9</option>
<option>Class 10</option>
</select>
</div>

<div className="flex items-center justify-between py-3 border-b border-slate-50">
<div>
<p className="text-sm font-medium text-slate-700">Voice Style</p>
<p className="text-xs text-slate-400">Choose how the AI sounds</p>
</div>
<div className="flex bg-slate-100 rounded-lg p-1">
<button className="px-3 py-1 text-xs font-semibold bg-white shadow-sm rounded-md text-slate-800">Soft</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700">Deep</button>
</div>
</div>

<div className="flex items-center justify-between py-3">
<div>
<p className="text-sm font-medium text-slate-700">Diagram Auto-Generate</p>
<p className="text-xs text-slate-400">Create images automatically</p>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300 transition-all duration-300" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-300 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</input></div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
