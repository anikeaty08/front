import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
25: '#FCFCFD',
50: '#F9FAFB',
100: '#F2F4F7',
200: '#EAECF0',
300: '#D0D5DD',
400: '#98A2B3',
500: '#667085',
600: '#475467',
700: '#344054',
800: '#1D2939',
900: '#101828',
},
primary: {
50: '#EEF2FF',
100: '#E0E7FF',
500: '#6366F1',
600: '#4F46E5',
700: '#4338CA',
}
},
boxShadow: {
'glass': '0 4px 30px rgba(0, 0, 0, 0.03)',
'glow': '0 0 20px rgba(99, 102, 241, 0.15)',
}
}
}
}



        // State management
        let currentTab = 'home';
        
        function switchTab(tabId) {
            // Hide all tabs
            ['home', 'notes', 'exams', 'research', 'settings'].forEach(id => {
                document.getElementById('tab-' + id).classList.add('hidden');
                document.getElementById('nav-' + id).classList.remove('bg-gray-50', 'text-gray-900', 'bg-indigo-50', 'text-indigo-600');
                document.getElementById('nav-' + id).classList.add('text-gray-500');
                
                // Reset icon colors
                const icon = document.getElementById('nav-' + id).querySelector('iconify-icon');
                if(icon) icon.classList.remove('text-indigo-600');
            });

            // Show selected tab
            const selectedSection = document.getElementById('tab-' + tabId);
            selectedSection.classList.remove('hidden');
            selectedSection.classList.add('fade-in');

            // Update Nav State
            const navBtn = document.getElementById('nav-' + tabId);
            navBtn.classList.remove('text-gray-500');
            navBtn.classList.add('bg-gray-50', 'text-gray-900');
            
            // Breadcrumb update
            const titles = {
                'home': 'Dashboard',
                'notes': 'Note Generator',
                'exams': 'Exam Creator',
                'research': 'Research Assistant',
                'settings': 'Settings'
            };
            document.getElementById('breadcrumb-title').textContent = titles[tabId];

            // Close mobile sidebar if open
            const sidebar = document.getElementById('sidebar');
            if (!sidebar.classList.contains('-translate-x-full') && window.innerWidth < 768) {
                toggleMobileMenu();
            }

            currentTab = tabId;
        }

        function toggleMobileMenu() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('-translate-x-full');
        }

        function toggleAI(panelId) {
            const panel = document.getElementById(panelId);
            panel.classList.toggle('hidden');
            panel.classList.toggle('flex');
        }

        // Initialize
        switchTab('home');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full z-50 flex items-center justify-between p-4 glass md:hidden">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white">
<span className="font-semibold tracking-tighter">M</span>
</div>
<span className="font-semibold tracking-tight text-gray-900">MySchoolManager</span>
</div>
<button className="text-gray-500 hover:text-gray-900" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<aside className="fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-100 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col justify-between" id="sidebar">

<div className="h-16 flex items-center px-6 border-b border-gray-50">
<div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center mr-3 shadow-glow">
<span className="font-semibold text-lg tracking-tighter">M</span>
</div>
<h1 className="text-lg font-semibold tracking-tight text-gray-900">MySchoolManager</h1>
</div>

<nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg bg-gray-50 text-gray-900 hover:bg-gray-100 transition-colors group" id="nav-home" onclick="switchTab('home')">
<iconify-icon className="text-gray-500 group-hover:text-gray-900" icon="solar:widget-2-linear" width="20"></iconify-icon>
                Dashboard
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors group" id="nav-notes" onclick="switchTab('notes')">
<iconify-icon className="text-gray-400 group-hover:text-gray-900" icon="solar:notes-linear" width="20"></iconify-icon>
                Note Generator
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors group" id="nav-exams" onclick="switchTab('exams')">
<iconify-icon className="text-gray-400 group-hover:text-gray-900" icon="solar:document-add-linear" width="20"></iconify-icon>
                Exam Creator
            </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors group" id="nav-research" onclick="switchTab('research')">
<iconify-icon className="text-gray-400 group-hover:text-gray-900" icon="solar:magnifer-linear" width="20"></iconify-icon>
                Research Assistant
            </button>
</nav>

<div className="p-4 border-t border-gray-100">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors group mb-2" id="nav-settings" onclick="switchTab('settings')">
<iconify-icon className="text-gray-400 group-hover:text-gray-900" icon="solar:settings-linear" width="20"></iconify-icon>
                Settings
            </button>
<div className="flex items-center gap-3 px-3 py-3 mt-2 rounded-xl bg-gray-50 border border-gray-100">
<img alt="User" className="w-8 h-8 rounded-full bg-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-gray-900 truncate">Alex Richardson</p>
<p className="text-xs text-gray-500 truncate">Science Dept.</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 md:ml-64 h-full relative flex flex-col bg-gray-50 pt-16 md:pt-0 transition-all duration-300">

<header className="h-16 border-b border-gray-200/60 bg-white/80 backdrop-blur-md hidden md:flex items-center justify-between px-8 sticky top-0 z-30">
<div className="flex items-center gap-2 text-sm text-gray-500">
<span className="hover:text-gray-900 cursor-pointer transition-colors">Workspace</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="font-medium text-gray-900" id="breadcrumb-title">Dashboard</span>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="px-3 py-1.5 text-xs font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-shadow shadow-sm hover:shadow-md flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                    New Project
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 relative scroll-smooth" id="content-area">

<section className="fade-in space-y-6 max-w-7xl mx-auto" id="tab-home">

<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Good morning, Alex</h2>
<p className="text-sm text-gray-500 mt-1">Here is what's happening in your classes today.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-card p-5 rounded-xl hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
<iconify-icon icon="solar:notes-bold" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12%</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900">142</h3>
<p className="text-xs text-gray-500 mt-1">Total Notes Created</p>
</div>

<div className="glass-card p-5 rounded-xl hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-50 rounded-lg text-blue-600">
<iconify-icon icon="solar:document-text-bold" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+5%</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900">38</h3>
<p className="text-xs text-gray-500 mt-1">Exams Generated</p>
</div>

<div className="glass-card p-5 rounded-xl hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-purple-50 rounded-lg text-purple-600">
<iconify-icon icon="solar:chat-round-dots-bold" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">0%</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900">1,204</h3>
<p className="text-xs text-gray-500 mt-1">AI Interactions</p>
</div>

<div className="glass-card p-5 rounded-xl hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-orange-50 rounded-lg text-orange-600">
<iconify-icon icon="solar:file-text-bold" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+24%</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900">85</h3>
<p className="text-xs text-gray-500 mt-1">Documents Uploaded</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 glass-card rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-semibold text-gray-900">Weekly Activity</h3>
<button className="text-xs text-gray-400 hover:text-gray-900 flex items-center gap-1">
                                Last 7 Days <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>

<div className="h-64 w-full flex items-end justify-between gap-2 px-2">
<div className="w-full bg-indigo-50 rounded-t-sm relative group hover:bg-indigo-100 transition-all" style={{height: '40%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Mon</div>
</div>
<div className="w-full bg-indigo-50 rounded-t-sm relative group hover:bg-indigo-100 transition-all" style={{height: '65%'}}></div>
<div className="w-full bg-indigo-500 rounded-t-sm relative group hover:bg-indigo-600 transition-all shadow-glow" style={{height: '85%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Wed</div>
</div>
<div className="w-full bg-indigo-50 rounded-t-sm relative group hover:bg-indigo-100 transition-all" style={{height: '50%'}}></div>
<div className="w-full bg-indigo-50 rounded-t-sm relative group hover:bg-indigo-100 transition-all" style={{height: '60%'}}></div>
<div className="w-full bg-indigo-50 rounded-t-sm relative group hover:bg-indigo-100 transition-all" style={{height: '30%'}}></div>
<div className="w-full bg-indigo-50 rounded-t-sm relative group hover:bg-indigo-100 transition-all" style={{height: '45%'}}></div>
</div>
<div className="flex justify-between mt-4 text-xs text-gray-400 font-medium px-2">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>

<div className="glass-card rounded-xl p-6 flex flex-col">
<h3 className="text-sm font-semibold text-gray-900 mb-6">Recent Activity</h3>
<div className="space-y-4 flex-1">
<div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="solar:notes-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-gray-900">Biology Notes: Photosynthesis</p>
<p className="text-[10px] text-gray-400">2 hours ago</p>
</div>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-gray-900">Mid-Term Exam Gen.</p>
<p className="text-[10px] text-gray-400">5 hours ago</p>
</div>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon icon="solar:upload-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-gray-900">Curriculum_2024.pdf</p>
<p className="text-[10px] text-gray-400">Yesterday</p>
</div>
</div>
</div>
<button className="mt-4 w-full py-2 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            View Full History
                        </button>
</div>
</div>
</section>

<section className="hidden h-full flex flex-col lg:flex-row gap-6" id="tab-notes">

<div className="flex-1 flex flex-col h-full">

<div className="glass-card rounded-t-xl p-3 flex items-center justify-between border-b-0 sticky top-0 z-10">
<div className="flex items-center gap-1">
<button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"><iconify-icon icon="solar:text-bold-linear" width="18"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"><iconify-icon icon="solar:text-italic-linear" width="18"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"><iconify-icon icon="solar:text-underline-linear" width="18"></iconify-icon></button>
<div className="w-px h-5 bg-gray-200 mx-2"></div>
<button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"><iconify-icon icon="solar:list-linear" width="18"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"><iconify-icon icon="solar:gallery-wide-linear" width="18"></iconify-icon></button>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:printer-linear" width="14"></iconify-icon> Print
                            </button>
<button className="px-3 py-1.5 text-xs font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:download-linear" width="14"></iconify-icon> Download
                            </button>
<button className="lg:hidden p-2 text-indigo-600 bg-indigo-50 rounded-lg" onclick="toggleAI('ai-panel-notes')">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8 rounded-b-xl flex justify-center">
<div className="w-full max-w-3xl bg-white shadow-sm min-h-[800px] p-8 md:p-12 editor-content outline-none rounded-sm border border-gray-200" contenteditable="true">
<h1>Chapter 4: Cell Structure</h1>
<p>Introduction to the fundamental unit of life.</p>
<h2>1. The Nucleus</h2>
<p>The nucleus is often referred to as the control center of the cell...</p>
<ul>
<li>Contains genetic material (DNA)</li>
<li>Coordinates cell activities like protein synthesis and cell division</li>
</ul>
<br/>
<p className="text-gray-400 italic">[Type here or ask AI to generate content...]</p>
</div>
</div>
</div>

<div className="hidden lg:flex w-full lg:w-80 flex-col bg-white border border-gray-200 rounded-xl shadow-lg lg:shadow-none lg:bg-white lg:border-l lg:border-gray-200 fixed lg:static inset-0 z-50 lg:z-0 m-4 lg:m-0 h-[90vh] lg:h-auto" id="ai-panel-notes">

<div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-100">
<span className="font-semibold text-gray-900 flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:magic-stick-3-bold"></iconify-icon> AI Assistant
                        </span>
<button className="text-gray-500" onclick="toggleAI('ai-panel-notes')"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>
</div>

<div className="hidden lg:flex p-4 border-b border-gray-100 items-center gap-2 bg-gray-50/50 rounded-t-xl">
<iconify-icon className="text-indigo-600" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
<h3 className="text-sm font-semibold text-gray-900">AI Assistant</h3>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4">
<div className="bg-indigo-50 p-3 rounded-lg rounded-tl-none">
<p className="text-xs text-gray-700 leading-relaxed">I can help you expand this note. Would you like me to generate a section on "Mitochondria" or create a summary quiz?</p>
</div>
<div className="space-y-2">
<button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all group">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-indigo-500 group-hover:text-indigo-600" icon="solar:pen-new-square-linear"></iconify-icon>
<span className="text-xs font-semibold text-gray-900">Expand Note</span>
</div>
<p className="text-[10px] text-gray-500">Add more details to selected text.</p>
</button>
<button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all group">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-indigo-500 group-hover:text-indigo-600" icon="solar:list-check-linear"></iconify-icon>
<span className="text-xs font-semibold text-gray-900">Create Summary</span>
</div>
<p className="text-[10px] text-gray-500">Bullet points of key concepts.</p>
</button>
<button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all group">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-indigo-500 group-hover:text-indigo-600" icon="solar:gallery-add-linear"></iconify-icon>
<span className="text-xs font-semibold text-gray-900">Suggest Diagram</span>
</div>
<p className="text-[10px] text-gray-500">Find relevant scientific diagrams.</p>
</button>
</div>
</div>

<div className="p-4 border-t border-gray-100 bg-white rounded-b-xl">
<div className="relative">
<input className="w-full pl-3 pr-10 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" placeholder="Ask AI to write..." type="text"/>
<button className="absolute right-2 top-2 text-indigo-600 hover:text-indigo-700">
<iconify-icon icon="solar:plain-3-bold" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="hidden h-full flex flex-col lg:flex-row gap-6" id="tab-exams">

<div className="flex-1 flex flex-col h-full">

<div className="glass-card rounded-t-xl p-3 flex items-center justify-between border-b-0 sticky top-0 z-10">
<div className="flex items-center gap-3">
<div className="px-3 py-1 bg-gray-100 rounded text-xs font-medium text-gray-600">Total Marks: <span className="text-gray-900">50</span></div>
<div className="px-3 py-1 bg-gray-100 rounded text-xs font-medium text-gray-600">Time: <span className="text-gray-900">60m</span></div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:printer-linear" width="14"></iconify-icon> Print Exam
                            </button>
<button className="px-3 py-1.5 text-xs font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:file-download-linear" width="14"></iconify-icon> PDF
                            </button>
<button className="lg:hidden p-2 text-indigo-600 bg-indigo-50 rounded-lg" onclick="toggleAI('ai-panel-exams')">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8 rounded-b-xl flex justify-center">
<div className="w-full max-w-3xl bg-white shadow-sm min-h-[800px] p-8 md:p-12 border border-gray-200" contenteditable="true">
<div className="text-center mb-8 border-b-2 border-gray-900 pb-4">
<h1 className="text-xl font-bold uppercase tracking-wide">Mid-Term Physics Examination</h1>
<p className="text-sm text-gray-500 mt-2">Class 10-A • Duration: 1 Hr • Max Marks: 50</p>
</div>
<div className="mb-6">
<h3 className="font-bold text-sm uppercase text-gray-400 mb-4 tracking-wider">Section A: Multiple Choice (10 Marks)</h3>
<div className="space-y-4">
<div className="pl-4 border-l-2 border-transparent hover:border-indigo-500 transition-colors">
<p className="text-sm font-medium mb-2">1. What is the SI unit of Force?</p>
<div className="grid grid-cols-2 gap-2 text-sm text-gray-600 pl-4">
<p>a) Joule</p>
<p>b) Newton</p>
<p>c) Watt</p>
<p>d) Pascal</p>
</div>
</div>
<div className="pl-4 border-l-2 border-transparent hover:border-indigo-500 transition-colors">
<p className="text-sm font-medium mb-2">2. Which law states that F = ma?</p>
<div className="grid grid-cols-2 gap-2 text-sm text-gray-600 pl-4">
<p>a) Newton's 1st Law</p>
<p>b) Newton's 2nd Law</p>
<p>c) Newton's 3rd Law</p>
<p>d) Law of Inertia</p>
</div>
</div>
</div>
</div>
<div>
<h3 className="font-bold text-sm uppercase text-gray-400 mb-4 tracking-wider">Section B: Theory (40 Marks)</h3>
<p className="text-gray-400 text-sm italic">[Use the AI panel to generate theory questions...]</p>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex w-full lg:w-80 flex-col bg-white border border-gray-200 rounded-xl shadow-lg lg:shadow-none lg:bg-white lg:border-l lg:border-gray-200 fixed lg:static inset-0 z-50 lg:z-0 m-4 lg:m-0 h-[90vh] lg:h-auto" id="ai-panel-exams">
<div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-100">
<span className="font-semibold text-gray-900 flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:magic-stick-3-bold"></iconify-icon> Exam Creator AI
                        </span>
<button className="text-gray-500" onclick="toggleAI('ai-panel-exams')"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>
</div>
<div className="hidden lg:flex p-4 border-b border-gray-100 items-center gap-2 bg-gray-50/50 rounded-t-xl">
<iconify-icon className="text-indigo-600" icon="solar:document-add-linear" width="18"></iconify-icon>
<h3 className="text-sm font-semibold text-gray-900">Question Generator</h3>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4">
<div className="space-y-3">
<label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Generate Questions</label>
<div className="grid grid-cols-2 gap-2">
<button className="p-3 rounded-lg border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all flex flex-col items-center justify-center gap-1">
<iconify-icon className="text-indigo-500" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">MCQ</span>
</button>
<button className="p-3 rounded-lg border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all flex flex-col items-center justify-center gap-1">
<iconify-icon className="text-indigo-500" icon="solar:text-field-focus-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">Theory</span>
</button>
</div>
<div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-gray-700">Difficulty</span>
<span className="text-[10px] text-gray-500">Medium</span>
</div>
<div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-1/2"></div>
</div>
</div>
<button className="w-full py-2.5 bg-gray-900 text-white text-xs font-medium rounded-lg hover:bg-gray-800 transition-shadow shadow-lg shadow-gray-200">
                                Generate 5 Questions
                            </button>
</div>
<hr className="border-gray-100"/>
<div>
<label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">Marking Scheme</label>
<button className="w-full flex items-center justify-between p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
<span className="text-xs text-gray-700">Generate Answer Key</span>
<iconify-icon className="text-gray-400" icon="solar:key-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="hidden h-full flex flex-col max-w-5xl mx-auto" id="tab-research">
<div className="flex-1 glass-card rounded-xl flex flex-col overflow-hidden h-[calc(100vh-140px)]">

<div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="solar:smart-home-angle-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900">Research Assistant</h3>
<p className="text-[10px] text-gray-500">Upload docs, PDFs, or ask questions</p>
</div>
</div>
<button className="text-gray-400 hover:text-gray-900"><iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon></button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30">

<div className="flex gap-4 max-w-3xl">
<div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex-shrink-0 flex items-center justify-center mt-1">
<iconify-icon icon="solar:stars-linear" width="16"></iconify-icon>
</div>
<div className="space-y-2">
<div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 leading-relaxed">
<p>Hello! I'm your teaching assistant. Upload a PDF curriculum, a photo of a textbook page, or just ask me a complex topic you need to explain to your students.</p>
</div>
</div>
</div>

<div className="flex gap-4 max-w-3xl ml-auto flex-row-reverse">
<img className="w-8 h-8 rounded-full bg-gray-200 mt-1" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div className="space-y-2">
<div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none shadow-md text-sm leading-relaxed">
<p>Can you explain Quantum Entanglement simply for high school students? Use a metaphor.</p>
</div>
</div>
</div>

<div className="flex gap-4 max-w-3xl">
<div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex-shrink-0 flex items-center justify-center mt-1">
<iconify-icon icon="solar:stars-linear" width="16"></iconify-icon>
</div>
<div className="space-y-2">
<div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 leading-relaxed">
<p className="font-semibold mb-2 text-gray-900">The Magic Dice Metaphor</p>
<p>Imagine you have a pair of magic dice. Normally, if you roll two dice in different rooms, the numbers they show are totally random and unconnected.</p>
<p className="mt-2">But with "entangled" dice, no matter how far apart they are—even if one is on Earth and one is on Mars—if you roll a 6 on one, the other one will <strong>instantly</strong> show a 6 too.</p>
<p className="mt-2">They are connected in a spooky way where measuring one instantly determines the state of the other. That is Quantum Entanglement.</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:text-indigo-600 hover:border-indigo-200 transition-colors">Generate Diagram</button>
<button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:text-indigo-600 hover:border-indigo-200 transition-colors">Create Quiz Question</button>
</div>
</div>
</div>
</div>

<div className="p-4 bg-white border-t border-gray-100">
<div className="bg-gray-50 border border-gray-200 rounded-xl p-2 flex items-end gap-2 focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-300 transition-all shadow-inner">
<button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:paperclip-linear" width="20"></iconify-icon>
</button>
<button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:gallery-add-linear" width="20"></iconify-icon>
</button>
<textarea className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-900 max-h-32 resize-none py-2 placeholder-gray-400" placeholder="Send a message..." rows="1"></textarea>
<button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
<iconify-icon icon="solar:plain-3-bold" width="18"></iconify-icon>
</button>
</div>
<p className="text-center text-[10px] text-gray-400 mt-2">AI can make mistakes. Verify important information.</p>
</div>
</div>
</section>

<section className="hidden fade-in max-w-4xl mx-auto pb-12" id="tab-settings">
<h2 className="text-xl font-semibold text-gray-900 mb-6 tracking-tight">Settings &amp; Preferences</h2>
<div className="space-y-6">

<div className="glass-card rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
<div className="relative">
<img className="w-20 h-20 rounded-full border-4 border-white shadow-sm" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<button className="absolute bottom-0 right-0 p-1.5 bg-white border border-gray-200 rounded-full shadow-sm text-gray-600 hover:text-indigo-600">
<iconify-icon icon="solar:camera-linear" width="14"></iconify-icon>
</button>
</div>
<div className="flex-1 text-center md:text-left">
<h3 className="text-lg font-semibold text-gray-900">Alex Richardson</h3>
<p className="text-sm text-gray-500">Senior Science Teacher • ID: #88291</p>
</div>
<button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">Edit Profile</button>
</div>

<div className="glass-card rounded-xl overflow-hidden">
<div className="p-4 border-b border-gray-100 bg-gray-50/50">
<h3 className="text-sm font-semibold text-gray-900">Application Preferences</h3>
</div>
<div className="p-6 space-y-6">

<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-900">Dark Mode</p>
<p className="text-xs text-gray-500">Switch to a dark interface theme.</p>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-gray-200 appearance-none cursor-pointer transition-all duration-300" id="toggle-dark" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-200 cursor-pointer" htmlFor="toggle-dark"></label>
</input></div>
</div>
<hr className="border-gray-100"/>

<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-gray-900">Auto-Save Notes</p>
<p className="text-xs text-gray-500">Automatically save your work every 30 seconds.</p>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-gray-200 appearance-none cursor-pointer transition-all duration-300" id="toggle-save" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-200 cursor-pointer" htmlFor="toggle-save"></label>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden">
<div className="p-4 border-b border-gray-100 bg-gray-50/50">
<h3 className="text-sm font-semibold text-gray-900">Default Export Formats</h3>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-gray-700 mb-2">Default Note Format</label>
<div className="relative">
<select className="block w-full pl-3 pr-10 py-2 text-sm border-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg bg-gray-50">
<option>PDF Document (.pdf)</option>
<option>Microsoft Word (.docx)</option>
<option>Plain Text (.txt)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-2">Exam Header Template</label>
<div className="relative">
<select className="block w-full pl-3 pr-10 py-2 text-sm border-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg bg-gray-50">
<option>Standard (School Logo + Title)</option>
<option>Minimal (Title Only)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>



    </>
  );
}
