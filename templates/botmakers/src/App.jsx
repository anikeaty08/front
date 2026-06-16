import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();
        
        // Simulate real-time updates
        setInterval(() => {
            lucide.createIcons();
        }, 1000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed left-0 top-0 h-full w-60 bg-white border-r border-gray-200 z-40">
<div className="p-6">
<div className="text-xl font-semibold tracking-tight text-gray-900">BotMakers</div>
</div>
<nav className="px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg" href="#">
<i data-lucide="layout-dashboard" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#campaigns">
<i data-lucide="bar-chart-3" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                Campaigns
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#voice">
<i data-lucide="phone" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                Voice Calls
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#sms">
<i data-lucide="message-square" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                SMS Messages
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#email">
<i data-lucide="mail" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                Emails
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#webhooks">
<i data-lucide="webhook" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                Webhooks
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#contacts">
<i data-lucide="users" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                Contacts
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#analytics">
<i data-lucide="trending-up" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                Analytics
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#settings">
<i data-lucide="settings" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                Settings
            </a>
</nav>
<div className="absolute bottom-6 left-3 right-3">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" href="#help">
<i data-lucide="help-circle" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
                Help &amp; Support
            </a>
</div>
</div>

<div className="fixed top-0 left-60 right-0 h-16 bg-white border-b border-gray-200 z-30">
<div className="h-full px-6 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-gray-600">
<span className="font-medium text-gray-900">Dashboard</span>
</div>
<div className="flex items-center gap-4">

<div className="relative">
<input className="w-80 h-9 pl-10 pr-4 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Search campaigns..." type="text"/>
<i className="absolute left-3 top-2 text-gray-400" data-lucide="search" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</div>

<button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
<i data-lucide="bell" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
</button>

<button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
<i data-lucide="plus" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</button>

<button className="flex items-center gap-2 p-1 hover:bg-gray-50 rounded-lg transition-colors">
<div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        SM
                    </div>
</button>
</div>
</div>
</div>

<main className="ml-60 mt-16 p-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

<div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
<i className="text-indigo-600" data-lucide="activity" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex items-center gap-1">
<span className="flex items-center gap-0.5 text-xs font-medium text-emerald-600">
<i data-lucide="trending-up" style={{width: '12px', height: '12px', strokeWidth: '1.5'}}></i>
                            12%
                        </span>
</div>
</div>
<div className="space-y-1">
<div className="text-3xl font-bold tracking-tight">24</div>
<div className="text-sm text-gray-600">Active Campaigns</div>
</div>

<div className="mt-4 h-12 flex items-end gap-1">
<div className="w-full h-6 bg-indigo-100 rounded-sm"></div>
<div className="w-full h-8 bg-indigo-100 rounded-sm"></div>
<div className="w-full h-5 bg-indigo-100 rounded-sm"></div>
<div className="w-full h-10 bg-indigo-100 rounded-sm"></div>
<div className="w-full h-12 bg-indigo-200 rounded-sm"></div>
<div className="w-full h-11 bg-indigo-100 rounded-sm"></div>
<div className="w-full h-9 bg-indigo-100 rounded-sm"></div>
</div>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
<i className="text-emerald-600" data-lucide="users" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex items-center gap-1">
<span className="flex items-center gap-0.5 text-xs font-medium text-emerald-600">
<i data-lucide="trending-up" style={{width: '12px', height: '12px', strokeWidth: '1.5'}}></i>
                            8%
                        </span>
</div>
</div>
<div className="space-y-1">
<div className="text-3xl font-bold tracking-tight">18,492</div>
<div className="text-sm text-gray-600">Contacts Reached</div>
</div>

<div className="mt-4 flex gap-2">
<div className="flex-1 h-2 bg-indigo-500 rounded-full"></div>
<div className="flex-1 h-2 bg-emerald-500 rounded-full"></div>
<div className="flex-1 h-2 bg-amber-500 rounded-full"></div>
</div>
<div className="mt-2 flex gap-3 text-xs text-gray-600">
<span className="flex items-center gap-1">
<div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        Voice
                    </span>
<span className="flex items-center gap-1">
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        SMS
                    </span>
<span className="flex items-center gap-1">
<div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        Email
                    </span>
</div>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
<i className="text-emerald-600" data-lucide="target" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex items-center gap-1">
<span className="flex items-center gap-0.5 text-xs font-medium text-emerald-600">
<i data-lucide="trending-up" style={{width: '12px', height: '12px', strokeWidth: '1.5'}}></i>
                            5.2%
                        </span>
</div>
</div>
<div className="space-y-1">
<div className="text-3xl font-bold tracking-tight">64.3%</div>
<div className="text-sm text-gray-600">Response Rate</div>
</div>

<div className="mt-4">
<div className="flex justify-between text-xs text-gray-600 mb-1">
<span>Target: 60%</span>
<span className="text-emerald-600 font-medium">Above Goal</span>
</div>
<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '64.3%'}}></div>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center">
<i className="text-violet-600" data-lucide="dollar-sign" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex items-center gap-1">
<span className="flex items-center gap-0.5 text-xs font-medium text-red-600">
<i data-lucide="trending-down" style={{width: '12px', height: '12px', strokeWidth: '1.5'}}></i>
                            3%
                        </span>
</div>
</div>
<div className="space-y-1">
<div className="text-3xl font-bold tracking-tight">$2.47</div>
<div className="text-sm text-gray-600">Cost Per Contact</div>
</div>

<div className="mt-4 text-xs text-gray-600">
<div className="flex justify-between">
<span>Budget: $3.00</span>
<span className="text-emerald-600 font-medium">Under Budget</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-lg font-semibold text-gray-900">Campaign Performance Overview</h2>
<p className="text-sm text-gray-600 mt-1">Multi-channel activity over time</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        7 Days
                    </button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
                        30 Days
                    </button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        90 Days
                    </button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i data-lucide="download" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="relative" style={{height: '400px'}}>
<svg className="overflow-visible" height="100%" width="100%">

<line stroke="#E5E7EB" strokeWidth="1" x1="0" x2="100%" y1="80" y2="80"></line>
<line stroke="#E5E7EB" strokeWidth="1" x1="0" x2="100%" y1="160" y2="160"></line>
<line stroke="#E5E7EB" strokeWidth="1" x1="0" x2="100%" y1="240" y2="240"></line>
<line stroke="#E5E7EB" strokeWidth="1" x1="0" x2="100%" y1="320" y2="320"></line>

<polyline fill="none" points="0,300 120,280 240,260 360,240 480,200 600,180 720,160 840,140 960,120" stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline>

<polyline fill="none" points="0,320 120,310 240,300 360,280 480,260 600,240 720,220 840,200 960,180" stroke="#10B981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline>

<polyline fill="none" points="0,340 120,335 240,330 360,320 480,310 600,300 720,285 840,270 960,250" stroke="#F59E0B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline>
</svg>

<div className="absolute left-0 top-0 flex flex-col justify-between h-full text-xs text-gray-600 pr-2">
<span>5000</span>
<span>4000</span>
<span>3000</span>
<span>2000</span>
<span>1000</span>
<span>0</span>
</div>

<div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-600 mt-2">
<span>Jan 1</span>
<span>Jan 5</span>
<span>Jan 10</span>
<span>Jan 15</span>
<span>Jan 20</span>
<span>Jan 25</span>
<span>Jan 30</span>
</div>
</div>

<div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-200">
<button className="flex items-center gap-2 text-sm hover:opacity-75 transition-opacity">
<div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
<span className="text-gray-700">Voice Calls</span>
<span className="text-gray-900 font-medium">12,450</span>
</button>
<button className="flex items-center gap-2 text-sm hover:opacity-75 transition-opacity">
<div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
<span className="text-gray-700">SMS Messages</span>
<span className="text-gray-900 font-medium">8,230</span>
</button>
<button className="flex items-center gap-2 text-sm hover:opacity-75 transition-opacity">
<div className="w-3 h-3 bg-amber-500 rounded-full"></div>
<span className="text-gray-700">Emails</span>
<span className="text-gray-900 font-medium">15,680</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
<span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse-slow"></div>
                            Live
                        </span>
</div>
<button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">View All</button>
</div>
<div className="space-y-3 max-h-[500px] overflow-y-auto">

<div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border-l-4 border-emerald-500 slide-in">
<div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-emerald-600" data-lucide="trending-up" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-2">
<p className="text-sm font-medium text-gray-900">High Response Rate Alert</p>
<span className="text-xs text-gray-500 whitespace-nowrap">2 min ago</span>
</div>
<p className="text-sm text-gray-600 mt-1">Campaign "Q1 Outreach" achieved 68% response rate</p>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">Voice</span>
</div>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border-l-4 border-indigo-500">
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-indigo-600" data-lucide="play" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-2">
<p className="text-sm font-medium text-gray-900">Campaign Started</p>
<span className="text-xs text-gray-500 whitespace-nowrap">15 min ago</span>
</div>
<p className="text-sm text-gray-600 mt-1">"Lead Nurture SMS" campaign began execution</p>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded">SMS</span>
</div>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border-l-4 border-violet-500">
<div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-violet-600" data-lucide="check-circle" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-2">
<p className="text-sm font-medium text-gray-900">Campaign Completed</p>
<span className="text-xs text-gray-500 whitespace-nowrap">1 hour ago</span>
</div>
<p className="text-sm text-gray-600 mt-1">"January Newsletter" reached 2,450 contacts</p>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs font-medium rounded">Email</span>
</div>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border-l-4 border-amber-500">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-amber-600" data-lucide="alert-triangle" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-2">
<p className="text-sm font-medium text-gray-900">Budget Threshold Reached</p>
<span className="text-xs text-gray-500 whitespace-nowrap">2 hours ago</span>
</div>
<p className="text-sm text-gray-600 mt-1">Campaign "Cold Calling" at 85% of budget</p>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">Voice</span>
</div>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border-l-4 border-red-500">
<div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-red-600" data-lucide="alert-circle" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-2">
<p className="text-sm font-medium text-gray-900">Webhook Error</p>
<span className="text-xs text-gray-500 whitespace-nowrap">3 hours ago</span>
</div>
<p className="text-sm text-gray-600 mt-1">Failed to deliver webhook payload for call.completed event</p>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded">Voice</span>
<button className="text-xs text-indigo-600 hover:text-indigo-700 font-medium">Retry</button>
</div>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border-l-4 border-amber-500">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="text-amber-600" data-lucide="trending-down" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-2">
<p className="text-sm font-medium text-gray-900">Low Response Rate Warning</p>
<span className="text-xs text-gray-500 whitespace-nowrap">5 hours ago</span>
</div>
<p className="text-sm text-gray-600 mt-1">Campaign "Follow-up Emails" at 18% response rate</p>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs font-medium rounded">Email</span>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-xl border border-gray-200 p-6">
<h3 className="text-base font-semibold text-gray-900 mb-4">Webhook Health</h3>

<div className="flex items-center justify-center mb-4">
<div className="relative w-40 h-40">
<svg className="w-full h-full transform -rotate-90">
<circle cx="80" cy="80" fill="none" r="70" stroke="#E5E7EB" strokeWidth="12"></circle>
<circle cx="80" cy="80" fill="none" r="70" stroke="#10B981" stroke-dasharray="440" stroke-dashoffset="66" strokeLinecap="round" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<div className="text-3xl font-bold text-gray-900">95</div>
<div className="text-sm text-gray-600">Score</div>
</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-600">Success Rate</span>
<span className="font-medium text-gray-900">98.2%</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-600">Avg Processing Time</span>
<span className="font-medium text-gray-900">142ms</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-600">Error Rate</span>
<span className="font-medium text-emerald-600">1.8%</span>
</div>
</div>
<button className="w-full mt-4 px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                        View All Webhooks
                    </button>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6">
<h3 className="text-base font-semibold text-gray-900 mb-4">Quick Actions</h3>
<div className="space-y-2">
<button className="w-full px-4 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
<i data-lucide="plus" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                            Create New Campaign
                        </button>
<button className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
<i data-lucide="download" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                            Download Report
                        </button>
<button className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
<i data-lucide="calendar" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                            Schedule Analysis
                        </button>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6">
<h3 className="text-base font-semibold text-gray-900 mb-4">Channel Breakdown</h3>
<div className="space-y-4">
<div>
<div className="flex items-center justify-between text-sm mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
<span className="text-gray-700">Voice Calls</span>
</div>
<span className="font-medium text-gray-900">34%</span>
</div>
<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" style={{width: '34%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-sm mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
<span className="text-gray-700">SMS Messages</span>
</div>
<span className="font-medium text-gray-900">23%</span>
</div>
<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '23%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-sm mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-amber-500 rounded-full"></div>
<span className="text-gray-700">Emails</span>
</div>
<span className="font-medium text-gray-900">43%</span>
</div>
<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '43%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12" id="campaigns">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Active Campaigns</h2>
<p className="text-sm text-gray-600 mt-1">Monitor and manage your ongoing campaigns</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
<i data-lucide="filter" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                        Filter
                    </button>
<button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i data-lucide="layout-grid" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
<button className="px-3 py-2 text-sm font-medium text-indigo-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i data-lucide="list" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
<i className="text-indigo-600" data-lucide="phone" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">Active</span>
</div>
<button className="p-1 hover:bg-gray-50 rounded transition-colors">
<i className="text-gray-400" data-lucide="more-vertical" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-1">Q1 Outreach</h3>
<p className="text-sm text-gray-600 mb-4">AI voice campaign for lead qualification</p>
<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<div className="text-xs text-gray-600 mb-1">Contacted</div>
<div className="text-lg font-semibold text-gray-900">2,450</div>
</div>
<div>
<div className="text-xs text-gray-600 mb-1">Response Rate</div>
<div className="text-lg font-semibold text-emerald-600">68%</div>
</div>
</div>
<div className="mb-3">
<div className="flex justify-between text-xs text-gray-600 mb-1">
<span>Progress</span>
<span>2,450 / 3,000</span>
</div>
<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" style={{width: '82%'}}></div>
</div>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-100">
<span className="text-xs text-gray-600">Started 5 days ago</span>
<button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">View Details</button>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
<i className="text-emerald-600" data-lucide="message-square" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">Active</span>
</div>
<button className="p-1 hover:bg-gray-50 rounded transition-colors">
<i className="text-gray-400" data-lucide="more-vertical" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-1">Lead Nurture SMS</h3>
<p className="text-sm text-gray-600 mb-4">Automated follow-up messages</p>
<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<div className="text-xs text-gray-600 mb-1">Contacted</div>
<div className="text-lg font-semibold text-gray-900">1,823</div>
</div>
<div>
<div className="text-xs text-gray-600 mb-1">Response Rate</div>
<div className="text-lg font-semibold text-emerald-600">54%</div>
</div>
</div>
<div className="mb-3">
<div className="flex justify-between text-xs text-gray-600 mb-1">
<span>Progress</span>
<span>1,823 / 2,500</span>
</div>
<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '73%'}}></div>
</div>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-100">
<span className="text-xs text-gray-600">Started 3 days ago</span>
<button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">View Details</button>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
<i className="text-amber-600" data-lucide="mail" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</div>
<span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Scheduled</span>
</div>
<button className="p-1 hover:bg-gray-50 rounded transition-colors">
<i className="text-gray-400" data-lucide="more-vertical" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-1">Product Launch Email</h3>
<p className="text-sm text-gray-600 mb-4">New feature announcement to customers</p>
<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<div className="text-xs text-gray-600 mb-1">Target</div>
<div className="text-lg font-semibold text-gray-900">5,200</div>
</div>
<div>
<div className="text-xs text-gray-600 mb-1">Est. Cost</div>
<div className="text-lg font-semibold text-gray-900">$260</div>
</div>
</div>
<div className="mb-3">
<div className="flex justify-between text-xs text-gray-600 mb-1">
<span>Scheduled for</span>
<span>Jan 25, 2024</span>
</div>
<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{width: '0%'}}></div>
</div>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-100">
<span className="text-xs text-gray-600">Starts in 2 days</span>
<button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">View Details</button>
</div>
</div>
</div>
</div>

<div className="mt-12" id="webhooks">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Recent Webhooks</h2>
<p className="text-sm text-gray-600 mt-1">Real-time event payload monitoring</p>
</div>
<button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
                    View All Webhooks
                </button>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
<div className="flex items-center gap-3 flex-wrap">
<button className="px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-lg">
                        All Events
                    </button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
<span className="flex items-center gap-1.5">
<div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            Voice
                        </span>
</button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
<span className="flex items-center gap-1.5">
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            SMS
                        </span>
</button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
<span className="flex items-center gap-1.5">
<div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            Email
                        </span>
</button>
<div className="ml-auto flex items-center gap-2">
<button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
<i data-lucide="filter" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
<i data-lucide="download" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>

<div className="space-y-4">

<div className="bg-white rounded-lg border border-emerald-200 hover:shadow-md transition-shadow">
<div className="p-5 border-l-4 border-emerald-500">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">call.completed</span>
<span className="text-sm text-gray-500">•</span>
<span className="text-sm text-gray-600">Campaign: Q1 Outreach</span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm text-gray-500">2 minutes ago</span>
<i className="text-emerald-500" data-lucide="check-circle" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="grid grid-cols-4 gap-4 mb-3">
<div>
<div className="text-xs text-gray-600 mb-1">Duration</div>
<div className="text-sm font-medium text-gray-900">3:42</div>
</div>
<div>
<div className="text-xs text-gray-600 mb-1">Disposition</div>
<div className="text-sm font-medium text-gray-900">Answered</div>
</div>
<div>
<div className="text-xs text-gray-600 mb-1">Sentiment</div>
<div className="text-sm font-medium text-emerald-600">Positive</div>
</div>
<div>
<div className="text-xs text-gray-600 mb-1">Contact</div>
<div className="text-sm font-medium text-gray-900">+1 555-0123</div>
</div>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-100">
<button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
<i data-lucide="chevron-down" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
                                View Payload
                            </button>
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-gray-50 rounded transition-colors" title="Copy">
<i className="text-gray-400" data-lucide="copy" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
<button className="p-1.5 hover:bg-gray-50 rounded transition-colors" title="Download">
<i className="text-gray-400" data-lucide="download" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-emerald-200 hover:shadow-md transition-shadow">
<div className="p-5 border-l-4 border-emerald-500">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">sms.delivered</span>
<span className="text-sm text-gray-500">•</span>
<span className="text-sm text-gray-600">Campaign: Lead Nurture SMS</span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm text-gray-500">8 minutes ago</span>
<i className="text-emerald-500" data-lucide="check-circle" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="grid grid-cols-4 gap-4 mb-3">
<div>
<div className="text-xs text-gray-600 mb-1">Status</div>
<div className="text-sm font-medium text-emerald-600">Delivered</div>
</div>
<div>
<div className="text-xs text-gray-600 mb-1">Segments</div>
<div className="text-sm font-medium text-gray-900">1</div>
</div>
<div>
<div className="text-xs text-gray-600 mb-1">Cost</div>
<div className="text-sm font-medium text-gray-900">$0.0075</div>
</div>
<div>
<div className="text-xs text-gray-600 mb-1">Contact</div>
<div className="text-sm font-medium text-gray-900">+1 555-0198</div>
</div>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-100">
<button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
<i data-lucide="chevron-down" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
                                View Payload
                            </button>
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-gray-50 rounded transition-colors" title="Copy">
<i className="text-gray-400" data-lucide="copy" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
<button className="p-1.5 hover:bg-gray-50 rounded transition-colors" title="Download">
<i className="text-gray-400" data-lucide="download" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-red-200 hover:shadow-md transition-shadow">
<div className="p-5 border-l-4 border-red-500">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">call.failed</span>
<span className="text-sm text-gray-500">•</span>
<span className="text-sm text-gray-600">Campaign: Cold Calling</span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm text-gray-500">15 minutes ago</span>
<i className="text-red-500" data-lucide="alert-circle" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="grid grid-cols-4 gap-4 mb-3">
<div>
<div className="text-xs text-gray-600 mb-1">Error Code</div>
<div className="text-sm font-medium text-red-600">503</div>
</div>
<div>
<div className="text-xs text-gray-600 mb-1">Retry Count</div>
<div className="text-sm font-medium text-gray-900">2</div>
</div>
<div>
<div className="text-xs text-gray-600 mb-1">Reason</div>
<div className="text-sm font-medium text-gray-900">No Answer</div>
</div>
<div>
<div className="text-xs text-gray-600 mb-1">Contact</div>
<div className="text-sm font-medium text-gray-900">+1 555-0245</div>
</div>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-100">
<button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
<i data-lucide="chevron-down" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
                                View Payload
                            </button>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
                                    Retry Webhook
                                </button>
<button className="p-1.5 hover:bg-gray-50 rounded transition-colors" title="Copy">
<i className="text-gray-400" data-lucide="copy" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-emerald-200 hover:shadow-md transition-shadow">
<div className="p-5 border-l-4 border-amber-500">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-3">
<span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">email.opened</span>
<span className="text-sm text-gray-500">•</span>
<span className="text-sm text-gray-600">Campaign: January Newsletter</span>
</div>
<div className="flex items-center gap-3">
<span className="text-sm text-gray-500">22 minutes ago</span>
<i className="text-emerald-500" data-lucide="check-circle" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="grid grid-cols-4 gap-4 mb-3">
<div>
<div className="text-xs text-gray-600 mb-1">Opens</div>
<div className="text-sm font-medium text-gray-900">3</div>
</div>
<div>
<div className="text-xs text-gray-600 mb-1">Clicks</div>
<div className="text-sm font-medium text-gray-900">1</div>
</div>
<div>
<div className="text-xs text-gray-600 mb-1">Device</div>
<div className="text-sm font-medium text-gray-900">Mobile</div>
</div>
<div>
<div className="text-xs text-gray-600 mb-1">Contact</div>
<div className="text-sm font-medium text-gray-900">sarah@example.com</div>
</div>
</div>
<div className="flex items-center justify-between pt-3 border-t border-gray-100">
<button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
<i data-lucide="chevron-down" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
                                View Payload
                            </button>
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-gray-50 rounded transition-colors" title="Copy">
<i className="text-gray-400" data-lucide="copy" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
<button className="p-1.5 hover:bg-gray-50 rounded transition-colors" title="Download">
<i className="text-gray-400" data-lucide="download" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
