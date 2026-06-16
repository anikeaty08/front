import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Demo video URLs (replace with actual video URLs)
        const demoVideos = {
            main: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
            1: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
            2: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
            3: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
        };
        
        // Video Functions
        function playMainVideo() {
            const thumbnail = document.getElementById('videoThumbnail');
            const videoFrame = document.getElementById('mainVideoFrame');
            
            thumbnail.classList.add('hidden');
            videoFrame.classList.remove('hidden');
            videoFrame.src = demoVideos.main;
        }
        
        function playDemoVideo(videoId) {
            const modal = document.getElementById('videoModal');
            const modalFrame = document.getElementById('modalVideoFrame');
            
            modal.classList.remove('hidden');
            modalFrame.src = demoVideos[videoId];
            document.body.style.overflow = 'hidden';
        }
        
        function closeVideoModal() {
            const modal = document.getElementById('videoModal');
            const modalFrame = document.getElementById('modalVideoFrame');
            
            modal.classList.add('hidden');
            modalFrame.src = '';
            document.body.style.overflow = '';
        }
        
        function openFullscreen() {
            const videoContainer = document.getElementById('mainVideoContainer');
            if (videoContainer.requestFullscreen) {
                videoContainer.requestFullscreen();
            }
        }
        
        function scrollToDemo() {
            document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Admin Panel Functions
        function openAdminPanel() {
            document.getElementById('adminPanel').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
        
        function closeAdminPanel() {
            document.getElementById('adminPanel').classList.add('hidden');
            document.body.style.overflow = '';
        }
        
        function showAdminSection(sectionId) {
            document.querySelectorAll('.admin-section').forEach(section => {
                section.classList.add('hidden');
            });
            
            document.getElementById('section-' + sectionId).classList.remove('hidden');
            
            document.querySelectorAll('.admin-nav-btn').forEach(btn => {
                btn.classList.remove('bg-purple-500/10', 'text-purple-400', 'border', 'border-purple-500/20');
                btn.classList.add('text-slate-400');
            });
            
            event.target.closest('.admin-nav-btn').classList.add('bg-purple-500/10', 'text-purple-400', 'border', 'border-purple-500/20');
            event.target.closest('.admin-nav-btn').classList.remove('text-slate-400');
        }
        
        function saveContent() {
            const stat1 = document.getElementById('stat1').value;
            const stat2 = document.getElementById('stat2').value;
            const stat3 = document.getElementById('stat3').value;
            const stat4 = document.getElementById('stat4').value;
            const ctaTitle = document.getElementById('ctaTitle').value;
            const ctaButton = document.getElementById('ctaButton').value;
            
            document.getElementById('statDisplay1').textContent = stat1;
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] bg-slate-950 hidden overflow-y-auto" id="adminPanel">
<div className="min-h-screen flex">

<div className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col">
<div className="flex items-center gap-2 mb-8">
<div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-violet-600 to-amber-500 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold tracking-tighter text-lg">B</span>
</div>
<div>
<span className="font-semibold text-sm tracking-tight block">Bainary</span>
<span className="text-xs text-slate-500">Admin Panel</span>
</div>
</div>
<nav className="flex-1 space-y-2">
<button className="admin-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm bg-purple-500/10 text-purple-400 border border-purple-500/20" onclick="showAdminSection('dashboard')">
<span className="iconify" data-height="18" data-icon="lucide:layout-dashboard" data-width="18" style={{strokeWidth: '1.5'}}></span>
                        Dashboard
                    </button>
<button className="admin-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-400 hover:bg-slate-800 transition-colors" onclick="showAdminSection('leads')">
<span className="iconify" data-height="18" data-icon="lucide:users" data-width="18" style={{strokeWidth: '1.5'}}></span>
                        Leads &amp; Inquiries
                    </button>
<button className="admin-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-400 hover:bg-slate-800 transition-colors" onclick="showAdminSection('content')">
<span className="iconify" data-height="18" data-icon="lucide:file-text" data-width="18" style={{strokeWidth: '1.5'}}></span>
                        Content Manager
                    </button>
<button className="admin-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-400 hover:bg-slate-800 transition-colors" onclick="showAdminSection('services')">
<span className="iconify" data-height="18" data-icon="lucide:briefcase" data-width="18" style={{strokeWidth: '1.5'}}></span>
                        Services
                    </button>
<button className="admin-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-400 hover:bg-slate-800 transition-colors" onclick="showAdminSection('analytics')">
<span className="iconify" data-height="18" data-icon="lucide:bar-chart-3" data-width="18" style={{strokeWidth: '1.5'}}></span>
                        Analytics
                    </button>
<button className="admin-nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-400 hover:bg-slate-800 transition-colors" onclick="showAdminSection('settings')">
<span className="iconify" data-height="18" data-icon="lucide:settings" data-width="18" style={{strokeWidth: '1.5'}}></span>
                        Settings
                    </button>
</nav>
<div className="pt-6 border-t border-slate-800">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-sm font-medium">BD</div>
<div>
<div className="text-sm font-medium">Bainary Admin</div>
<div className="text-xs text-slate-500">bainarydigital@gmail.com</div>
</div>
</div>
<button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors" onclick="closeAdminPanel()">
<span className="iconify" data-height="16" data-icon="lucide:log-out" data-width="16" style={{strokeWidth: '1.5'}}></span>
                        Exit Admin
                    </button>
</div>
</div>

<div className="flex-1 p-8">

<div className="admin-section" id="section-dashboard">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
<p className="text-slate-400 text-sm mt-1">Welcome back to Bainary Digital Labs</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-500">Last updated: Just now</span>
<button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
<span className="iconify" data-height="16" data-icon="lucide:refresh-cw" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<div className="flex items-center justify-between mb-4">
<span className="text-slate-400 text-sm">Total Leads</span>
<div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
<span className="iconify text-purple-400" data-height="20" data-icon="lucide:users" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="text-3xl font-semibold tracking-tight">247</div>
<div className="text-xs text-green-400 mt-2 flex items-center gap-1">
<span className="iconify" data-height="14" data-icon="lucide:trending-up" data-width="14" style={{strokeWidth: '1.5'}}></span>
                                +12% this month
                            </div>
</div>
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<div className="flex items-center justify-between mb-4">
<span className="text-slate-400 text-sm">Active Projects</span>
<div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
<span className="iconify text-amber-400" data-height="20" data-icon="lucide:folder-open" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="text-3xl font-semibold tracking-tight">18</div>
<div className="text-xs text-slate-400 mt-2">4 pending approval</div>
</div>
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<div className="flex items-center justify-between mb-4">
<span className="text-slate-400 text-sm">Revenue</span>
<div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
<span className="iconify text-green-400" data-height="20" data-icon="lucide:dollar-sign" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="text-3xl font-semibold tracking-tight">$124K</div>
<div className="text-xs text-green-400 mt-2 flex items-center gap-1">
<span className="iconify" data-height="14" data-icon="lucide:trending-up" data-width="14" style={{strokeWidth: '1.5'}}></span>
                                +24% this quarter
                            </div>
</div>
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<div className="flex items-center justify-between mb-4">
<span className="text-slate-400 text-sm">Page Views</span>
<div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
<span className="iconify text-blue-400" data-height="20" data-icon="lucide:eye" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="text-3xl font-semibold tracking-tight">8.4K</div>
<div className="text-xs text-slate-400 mt-2">This week</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-6">
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<h3 className="font-medium mb-4">Recent Inquiries</h3>
<div className="space-y-4">
<div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-xl">
<div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-sm font-medium text-purple-400">JD</div>
<div className="flex-1">
<div className="text-sm font-medium">John Doe</div>
<div className="text-xs text-slate-400">AI Chatbot Development</div>
</div>
<span className="text-xs text-slate-500">2h ago</span>
</div>
<div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-xl">
<div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center text-sm font-medium text-amber-400">SM</div>
<div className="flex-1">
<div className="text-sm font-medium">Sarah Miller</div>
<div className="text-xs text-slate-400">Workflow Automation</div>
</div>
<span className="text-xs text-slate-500">5h ago</span>
</div>
<div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-xl">
<div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-sm font-medium text-green-400">TC</div>
<div className="flex-1">
<div className="text-sm font-medium">Tech Corp</div>
<div className="text-xs text-slate-400">Enterprise AI Solution</div>
</div>
<span className="text-xs text-slate-500">1d ago</span>
</div>
</div>
</div>
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<h3 className="font-medium mb-4">Quick Actions</h3>
<div className="grid grid-cols-2 gap-3">
<button className="p-4 bg-slate-800 hover:bg-slate-700 rounded-xl text-left transition-colors">
<span className="iconify text-purple-400 mb-2" data-height="24" data-icon="lucide:plus-circle" data-width="24" style={{strokeWidth: '1.5'}}></span>
<div className="text-sm font-medium">Add Service</div>
<div className="text-xs text-slate-400">Create new offering</div>
</button>
<button className="p-4 bg-slate-800 hover:bg-slate-700 rounded-xl text-left transition-colors">
<span className="iconify text-amber-400 mb-2" data-height="24" data-icon="lucide:mail" data-width="24" style={{strokeWidth: '1.5'}}></span>
<div className="text-sm font-medium">Send Email</div>
<div className="text-xs text-slate-400">Contact leads</div>
</button>
<button className="p-4 bg-slate-800 hover:bg-slate-700 rounded-xl text-left transition-colors">
<span className="iconify text-green-400 mb-2" data-height="24" data-icon="lucide:file-plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
<div className="text-sm font-medium">New Post</div>
<div className="text-xs text-slate-400">Create content</div>
</button>
<button className="p-4 bg-slate-800 hover:bg-slate-700 rounded-xl text-left transition-colors">
<span className="iconify text-blue-400 mb-2" data-height="24" data-icon="lucide:download" data-width="24" style={{strokeWidth: '1.5'}}></span>
<div className="text-sm font-medium">Export Data</div>
<div className="text-xs text-slate-400">Download reports</div>
</button>
</div>
</div>
</div>
</div>

<div className="admin-section hidden" id="section-leads">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Leads &amp; Inquiries</h1>
<p className="text-slate-400 text-sm mt-1">Manage all customer inquiries</p>
</div>
<button className="px-4 py-2 bg-purple-600 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center gap-2">
<span className="iconify" data-height="16" data-icon="lucide:download" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Export CSV
                        </button>
</div>
<div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
<div className="p-4 border-b border-slate-800 flex items-center gap-4">
<div className="flex-1 relative">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-height="18" data-icon="lucide:search" data-width="18" style={{strokeWidth: '1.5'}}></span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-purple-500" placeholder="Search leads..." type="text"/>
</div>
<select className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-purple-500">
<option>All Status</option>
<option>New</option>
<option>Contacted</option>
<option>Qualified</option>
<option>Converted</option>
</select>
</div>
<table className="w-full">
<thead className="bg-slate-800/50">
<tr className="text-left text-xs text-slate-400">
<th className="px-6 py-4 font-medium">Name</th>
<th className="px-6 py-4 font-medium">Email</th>
<th className="px-6 py-4 font-medium">Service</th>
<th className="px-6 py-4 font-medium">Status</th>
<th className="px-6 py-4 font-medium">Date</th>
<th className="px-6 py-4 font-medium">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800">
<tr className="hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-xs font-medium text-purple-400">JD</div>
<span className="text-sm">John Doe</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-400">john@example.com</td>
<td className="px-6 py-4 text-sm">AI Chatbot</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">New</span></td>
<td className="px-6 py-4 text-sm text-slate-400">Dec 15, 2024</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:mail" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:eye" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:trash-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center text-xs font-medium text-amber-400">SM</div>
<span className="text-sm">Sarah Miller</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-400">sarah@company.com</td>
<td className="px-6 py-4 text-sm">Workflow Automation</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">Contacted</span></td>
<td className="px-6 py-4 text-sm text-slate-400">Dec 14, 2024</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:mail" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:eye" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:trash-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-xs font-medium text-green-400">TC</div>
<span className="text-sm">Tech Corp</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-400">info@techcorp.com</td>
<td className="px-6 py-4 text-sm">Enterprise AI</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full">Qualified</span></td>
<td className="px-6 py-4 text-sm text-slate-400">Dec 13, 2024</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:mail" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:eye" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:trash-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="admin-section hidden" id="section-content">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Content Manager</h1>
<p className="text-slate-400 text-sm mt-1">Edit website content</p>
</div>
<button className="px-4 py-2 bg-purple-600 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center gap-2" onclick="saveContent()">
<span className="iconify" data-height="16" data-icon="lucide:save" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Save Changes
                        </button>
</div>
<div className="space-y-6">
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<h3 className="font-medium mb-4">Hero Section</h3>
<div className="space-y-4">
<div>
<label className="text-sm text-slate-400 mb-2 block">Main Headline</label>
<input className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" id="heroTitle" type="text" value="Automate the Future. Elevate Your Empire."/>
</div>
<div>
<label className="text-sm text-slate-400 mb-2 block">Subheadline</label>
<textarea className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500 resize-none" id="heroSubtitle" rows="3">We architect intelligent automation systems that transform complex workflows into seamless operations. Where artificial intelligence meets royal precision.</textarea>
</div>
</div>
</div>
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<h3 className="font-medium mb-4">Statistics</h3>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
<div>
<label className="text-sm text-slate-400 mb-2 block">Automations</label>
<input className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" id="stat1" type="text" value="500+"/>
</div>
<div>
<label className="text-sm text-slate-400 mb-2 block">Client Retention</label>
<input className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" id="stat2" type="text" value="98%"/>
</div>
<div>
<label className="text-sm text-slate-400 mb-2 block">Hours Saved</label>
<input className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" id="stat3" type="text" value="10M+"/>
</div>
<div>
<label className="text-sm text-slate-400 mb-2 block">AI Operations</label>
<input className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" id="stat4" type="text" value="24/7"/>
</div>
</div>
</div>
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<h3 className="font-medium mb-4">CTA Section</h3>
<div className="space-y-4">
<div>
<label className="text-sm text-slate-400 mb-2 block">CTA Title</label>
<input className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" id="ctaTitle" type="text" value="Ready to Rule Your Industry?"/>
</div>
<div>
<label className="text-sm text-slate-400 mb-2 block">CTA Button Text</label>
<input className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" id="ctaButton" type="text" value="Book Your Royal Consultation"/>
</div>
</div>
</div>
</div>
</div>

<div className="admin-section hidden" id="section-services">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Services</h1>
<p className="text-slate-400 text-sm mt-1">Manage your service offerings</p>
</div>
<button className="px-4 py-2 bg-purple-600 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center gap-2">
<span className="iconify" data-height="16" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Add Service
                        </button>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-xl flex items-center justify-center">
<span className="iconify text-purple-400" data-height="24" data-icon="lucide:bot" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:edit" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:trash-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<h3 className="font-medium mb-2">AI Agents Development</h3>
<p className="text-slate-400 text-sm">Custom AI agents for customer service, sales, and support.</p>
<div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
<span className="text-xs text-slate-500">Active</span>
<div className="w-10 h-5 bg-purple-600 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
</div>
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center">
<span className="iconify text-amber-400" data-height="24" data-icon="lucide:workflow" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:edit" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:trash-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<h3 className="font-medium mb-2">Workflow Automation</h3>
<p className="text-slate-400 text-sm">End-to-end process automation solutions.</p>
<div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
<span className="text-xs text-slate-500">Active</span>
<div className="w-10 h-5 bg-purple-600 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
</div>
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-xl flex items-center justify-center">
<span className="iconify text-purple-400" data-height="24" data-icon="lucide:brain-circuit" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:edit" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:trash-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<h3 className="font-medium mb-2">Machine Learning</h3>
<p className="text-slate-400 text-sm">Predictive models and intelligent systems.</p>
<div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
<span className="text-xs text-slate-500">Active</span>
<div className="w-10 h-5 bg-purple-600 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="admin-section hidden" id="section-analytics">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Analytics</h1>
<p className="text-slate-400 text-sm mt-1">Track your website performance</p>
</div>
<select className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-purple-500">
<option>Last 7 days</option>
<option>Last 30 days</option>
<option>Last 90 days</option>
<option>This year</option>
</select>
</div>
<div className="grid lg:grid-cols-2 gap-6 mb-6">
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<h3 className="font-medium mb-6">Traffic Overview</h3>
<div className="h-48 flex items-end justify-between gap-2">
<div className="flex-1 bg-purple-500/30 rounded-t-lg" style={{height: '40%'}}></div>
<div className="flex-1 bg-purple-500/30 rounded-t-lg" style={{height: '65%'}}></div>
<div className="flex-1 bg-purple-500/30 rounded-t-lg" style={{height: '45%'}}></div>
<div className="flex-1 bg-purple-500/30 rounded-t-lg" style={{height: '80%'}}></div>
<div className="flex-1 bg-purple-500/30 rounded-t-lg" style={{height: '60%'}}></div>
<div className="flex-1 bg-purple-500/30 rounded-t-lg" style={{height: '90%'}}></div>
<div className="flex-1 bg-purple-500 rounded-t-lg" style={{height: '75%'}}></div>
</div>
<div className="flex justify-between mt-4 text-xs text-slate-500">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<h3 className="font-medium mb-6">Traffic Sources</h3>
<div className="space-y-4">
<div>
<div className="flex items-center justify-between text-sm mb-2">
<span>Organic Search</span>
<span className="text-slate-400">45%</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 rounded-full" style={{width: '45%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-sm mb-2">
<span>Direct</span>
<span className="text-slate-400">30%</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '30%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-sm mb-2">
<span>Social Media</span>
<span className="text-slate-400">15%</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 rounded-full" style={{width: '15%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-sm mb-2">
<span>Referral</span>
<span className="text-slate-400">10%</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{width: '10%'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<h3 className="font-medium mb-6">Conversion Funnel</h3>
<div className="flex items-center justify-between gap-4">
<div className="flex-1 text-center">
<div className="h-24 bg-gradient-to-t from-purple-500/20 to-purple-500/40 rounded-t-xl flex items-center justify-center">
<span className="text-2xl font-semibold">8,420</span>
</div>
<div className="text-sm text-slate-400 mt-2">Visitors</div>
</div>
<span className="iconify text-slate-600" data-height="24" data-icon="lucide:chevron-right" data-width="24" style={{strokeWidth: '1.5'}}></span>
<div className="flex-1 text-center">
<div className="h-20 bg-gradient-to-t from-purple-500/20 to-purple-500/40 rounded-t-xl flex items-center justify-center">
<span className="text-2xl font-semibold">1,247</span>
</div>
<div className="text-sm text-slate-400 mt-2">Leads</div>
</div>
<span className="iconify text-slate-600" data-height="24" data-icon="lucide:chevron-right" data-width="24" style={{strokeWidth: '1.5'}}></span>
<div className="flex-1 text-center">
<div className="h-16 bg-gradient-to-t from-purple-500/20 to-purple-500/40 rounded-t-xl flex items-center justify-center">
<span className="text-2xl font-semibold">342</span>
</div>
<div className="text-sm text-slate-400 mt-2">Qualified</div>
</div>
<span className="iconify text-slate-600" data-height="24" data-icon="lucide:chevron-right" data-width="24" style={{strokeWidth: '1.5'}}></span>
<div className="flex-1 text-center">
<div className="h-12 bg-gradient-to-t from-amber-500/30 to-amber-500/50 rounded-t-xl flex items-center justify-center">
<span className="text-2xl font-semibold">89</span>
</div>
<div className="text-sm text-slate-400 mt-2">Customers</div>
</div>
</div>
</div>
</div>

<div className="admin-section hidden" id="section-settings">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
<p className="text-slate-400 text-sm mt-1">Manage your account and preferences</p>
</div>
</div>
<div className="max-w-2xl space-y-6">
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<h3 className="font-medium mb-6">Account Information</h3>
<div className="space-y-4">
<div>
<label className="text-sm text-slate-400 mb-2 block">Company Name</label>
<input className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" type="text" value="Bainary Digital Labs"/>
</div>
<div>
<label className="text-sm text-slate-400 mb-2 block">Email Address</label>
<input className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" type="email" value="bainarydigital@gmail.com"/>
</div>
<div>
<label className="text-sm text-slate-400 mb-2 block">Contact Phone</label>
<input className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
</div>
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<h3 className="font-medium mb-6">Notifications</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">Email Notifications</div>
<div className="text-xs text-slate-400">Receive emails for new leads</div>
</div>
<div className="w-10 h-5 bg-purple-600 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">Weekly Reports</div>
<div className="text-xs text-slate-400">Get weekly analytics digest</div>
</div>
<div className="w-10 h-5 bg-purple-600 rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">Marketing Emails</div>
<div className="text-xs text-slate-400">Receive updates and tips</div>
</div>
<div className="w-10 h-5 bg-slate-700 rounded-full relative cursor-pointer">
<div className="absolute left-0.5 top-0.5 w-4 h-4 bg-slate-400 rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
<h3 className="font-medium mb-6">Security</h3>
<div className="space-y-4">
<button className="w-full px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-sm text-left transition-colors flex items-center justify-between">
<span>Change Password</span>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-full px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-sm text-left transition-colors flex items-center justify-between">
<span>Two-Factor Authentication</span>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<button className="px-6 py-3 bg-purple-600 rounded-xl text-sm font-medium hover:bg-purple-700 transition-colors">
                            Save Settings
                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
<div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl"></div>
</div>

<nav className="relative z-50 px-6 lg:px-16 py-6">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-violet-600 to-amber-500 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold tracking-tighter text-lg">B</span>
</div>
<span className="font-semibold text-lg tracking-tight">Bainary</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Process</a>
<a className="hover:text-white transition-colors" href="#demo">Demo</a>
<a className="hover:text-white transition-colors" href="#">About</a>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-slate-400 hover:text-white transition-colors" onclick="openAdminPanel()" title="Admin Panel">
<span className="iconify" data-height="20" data-icon="lucide:settings" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full text-sm font-medium hover:opacity-90 transition-opacity" onclick="openContactModal()">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative z-10 px-6 lg:px-16 pt-20 pb-32">
<div className="max-w-7xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-8">
<div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
<span className="text-xs text-purple-300 font-medium">AI-Powered Business Transformation</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-tight mb-6" id="mainHeroTitle">
<span className="bg-gradient-to-r from-white via-purple-100 to-slate-300 bg-clip-text text-transparent">Automate the Future.</span>
<br/>
<span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">Elevate Your Empire.</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed" id="mainHeroSubtitle">
                We architect intelligent automation systems that transform complex workflows into seamless operations. Where artificial intelligence meets royal precision.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2" onclick="openContactModal()">
<span>Start Your Transformation</span>
<span className="iconify" data-height="18" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-full sm:w-auto px-8 py-4 border border-slate-700 rounded-full font-medium hover:bg-slate-800/50 transition-all flex items-center justify-center gap-2" onclick="scrollToDemo()">
<span className="iconify" data-height="18" data-icon="lucide:play" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span>Watch Demo</span>
</button>
</div>
</div>
</section>

<section className="relative z-10 px-6 lg:px-16 py-16 border-y border-slate-800/50">
<div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent" id="statDisplay1">500+</div>
<div className="text-sm text-slate-500 mt-2">Automations Deployed</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent" id="statDisplay2">98%</div>
<div className="text-sm text-slate-500 mt-2">Client Retention</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent" id="statDisplay3">10M+</div>
<div className="text-sm text-slate-500 mt-2">Hours Saved</div>
</div>
<div className="text-center">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent" id="statDisplay4">24/7</div>
<div className="text-sm text-slate-500 mt-2">AI Operations</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 lg:px-16 py-24" id="demo">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
<span className="iconify text-amber-400" data-height="16" data-icon="lucide:video" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-amber-300 font-medium">See It In Action</span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">AI Automation Agents Demo</h2>
<p className="text-slate-400 max-w-xl mx-auto">Watch how our intelligent automation agents transform business operations in real-time.</p>
</div>

<div className="relative max-w-5xl mx-auto">
<div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10">

<div className="relative aspect-video bg-slate-900" id="mainVideoContainer">

<div className="absolute inset-0 cursor-pointer group" id="videoThumbnail" onclick="playMainVideo()">

<div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-slate-900 to-amber-900/30">
<div className="absolute inset-0 opacity-30">
<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-amber-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center p-8">
<div className="w-full max-w-3xl">

<div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 p-4 mb-4 opacity-60">
<div className="flex items-start gap-3 mb-3">
<div className="w-8 h-8 bg-purple-500/30 rounded-full flex items-center justify-center">
<span className="iconify text-purple-400" data-height="16" data-icon="lucide:bot" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<div className="h-3 bg-slate-600 rounded w-3/4 mb-2"></div>
<div className="h-3 bg-slate-600 rounded w-1/2"></div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 bg-amber-500/30 rounded-full flex items-center justify-center">
<span className="iconify text-amber-400" data-height="16" data-icon="lucide:user" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<div className="h-3 bg-slate-600 rounded w-2/3"></div>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-4 opacity-50">
<div className="w-16 h-16 bg-purple-500/20 rounded-xl border border-purple-500/30 flex items-center justify-center">
<span className="iconify text-purple-400" data-height="24" data-icon="lucide:mail" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
<div className="w-8 h-0.5 bg-purple-400/50"></div>
<div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="w-8 h-0.5 bg-purple-400/50"></div>
<div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
</div>
<div className="w-16 h-16 bg-amber-500/20 rounded-xl border border-amber-500/30 flex items-center justify-center">
<span className="iconify text-amber-400" data-height="24" data-icon="lucide:database" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
<div className="w-8 h-0.5 bg-amber-400/50"></div>
<div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
<div className="w-8 h-0.5 bg-amber-400/50"></div>
<div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
</div>
<div className="w-16 h-16 bg-green-500/20 rounded-xl border border-green-500/30 flex items-center justify-center">
<span className="iconify text-green-400" data-height="24" data-icon="lucide:check-circle" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">
<div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform"></div>
<div className="relative w-20 h-20 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/50">
<span className="iconify text-white ml-1" data-height="32" data-icon="lucide:play" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>

<div className="absolute bottom-4 right-4 px-3 py-1.5 bg-slate-900/90 backdrop-blur-sm rounded-lg text-xs font-medium flex items-center gap-2">
<span className="iconify text-purple-400" data-height="14" data-icon="lucide:clock" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>3:24</span>
</div>
</div>

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute inset-0 w-full h-full hidden" frameborder="0" id="mainVideoFrame" src=""></iframe>
</div>

<div className="p-4 bg-slate-900/80 border-t border-slate-800">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
<span className="iconify text-white" data-height="16" data-icon="lucide:bot" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<div className="text-sm font-medium">AI Agent Workflow Demo</div>
<div className="text-xs text-slate-500">Complete automation walkthrough</div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-slate-400 hover:text-white transition-colors" title="Share">
<span className="iconify" data-height="18" data-icon="lucide:share-2" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-2 text-slate-400 hover:text-white transition-colors" onclick="openFullscreen()" title="Fullscreen">
<span className="iconify" data-height="18" data-icon="lucide:maximize" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-4 mt-8">
<div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex items-start gap-3">
<div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
<span className="iconify text-purple-400" data-height="20" data-icon="lucide:zap" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<div className="text-sm font-medium mb-1">Instant Setup</div>
<div className="text-xs text-slate-500">Deploy AI agents in minutes, not months</div>
</div>
</div>
<div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex items-start gap-3">
<div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
<span className="iconify text-amber-400" data-height="20" data-icon="lucide:brain" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<div className="text-sm font-medium mb-1">Smart Learning</div>
<div className="text-xs text-slate-500">AI that adapts to your business context</div>
</div>
</div>
<div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex items-start gap-3">
<div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
<span className="iconify text-green-400" data-height="20" data-icon="lucide:shield-check" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<div className="text-sm font-medium mb-1">Enterprise Security</div>
<div className="text-xs text-slate-500">Bank-grade encryption &amp; compliance</div>
</div>
</div>
</div>
</div>

<div className="mt-16">
<div className="flex items-center justify-between mb-8">
<h3 className="text-xl font-medium tracking-tight">More Demo Videos</h3>
<a className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1" href="#">
                        View all
                        <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group cursor-pointer" onclick="playDemoVideo(1)">
<div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-800 mb-4 group-hover:border-purple-500/50 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-slate-900">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="iconify text-white ml-0.5" data-height="20" data-icon="lucide:play" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>

<div className="absolute top-4 left-4">
<div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
<span className="iconify text-purple-400" data-height="20" data-icon="lucide:message-square" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="absolute bottom-4 right-4 px-2 py-1 bg-slate-900/80 rounded text-xs">2:15</div>
</div>
</div>
<h4 className="font-medium text-sm mb-1 group-hover:text-purple-400 transition-colors">Customer Support AI Agent</h4>
<p className="text-xs text-slate-500">Automated 24/7 customer service with intelligent routing</p>
</div>

<div className="group cursor-pointer" onclick="playDemoVideo(2)">
<div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-800 mb-4 group-hover:border-amber-500/50 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-slate-900">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="iconify text-white ml-0.5" data-height="20" data-icon="lucide:play" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="absolute top-4 left-4">
<div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
<span className="iconify text-amber-400" data-height="20" data-icon="lucide:mail" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="absolute bottom-4 right-4 px-2 py-1 bg-slate-900/80 rounded text-xs">4:32</div>
</div>
</div>
<h4 className="font-medium text-sm mb-1 group-hover:text-amber-400 transition-colors">Email Automation Pipeline</h4>
<p className="text-xs text-slate-500">Smart email processing and automated responses</p>
</div>

<div className="group cursor-pointer" onclick="playDemoVideo(3)">
<div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-800 mb-4 group-hover:border-green-500/50 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-slate-900">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="iconify text-white ml-0.5" data-height="20" data-icon="lucide:play" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="absolute top-4 left-4">
<div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
<span className="iconify text-green-400" data-height="20" data-icon="lucide:bar-chart-3" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="absolute bottom-4 right-4 px-2 py-1 bg-slate-900/80 rounded text-xs">3:48</div>
</div>
</div>
<h4 className="font-medium text-sm mb-1 group-hover:text-green-400 transition-colors">Data Analytics Agent</h4>
<p className="text-xs text-slate-500">Real-time insights and automated reporting</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 lg:px-16 py-24">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Royal Suite of Services</h2>
<p className="text-slate-400 max-w-xl mx-auto">Comprehensive AI automation solutions crafted for enterprises that demand excellence.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group p-8 bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-all duration-300">
<div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-xl flex items-center justify-center mb-6">
<span className="iconify text-purple-400" data-height="24" data-icon="lucide:bot" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">AI Agents Development</h3>
<p className="text-slate-400 text-sm leading-relaxed">Custom AI agents that handle customer service, sales, and support with human-like intelligence.</p>
</div>
<div className="group p-8 bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl hover:border-amber-500/50 transition-all duration-300">
<div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center mb-6">
<span className="iconify text-amber-400" data-height="24" data-icon="lucide:workflow" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Workflow Automation</h3>
<p className="text-slate-400 text-sm leading-relaxed">End-to-end process automation that eliminates manual tasks and accelerates operations.</p>
</div>
<div className="group p-8 bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-all duration-300">
<div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-xl flex items-center justify-center mb-6">
<span className="iconify text-purple-400" data-height="24" data-icon="lucide:brain-circuit" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Machine Learning</h3>
<p className="text-slate-400 text-sm leading-relaxed">Predictive models and intelligent systems that learn and adapt to your business needs.</p>
</div>
<div className="group p-8 bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl hover:border-amber-500/50 transition-all duration-300">
<div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center mb-6">
<span className="iconify text-amber-400" data-height="24" data-icon="lucide:database" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Data Integration</h3>
<p className="text-slate-400 text-sm leading-relaxed">Seamless data pipelines connecting all your systems for unified intelligence.</p>
</div>
<div className="group p-8 bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-all duration-300">
<div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-xl flex items-center justify-center mb-6">
<span className="iconify text-purple-400" data-height="24" data-icon="lucide:message-square" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Conversational AI</h3>
<p className="text-slate-400 text-sm leading-relaxed">Advanced chatbots and voice assistants that elevate customer experience.</p>
</div>
<div className="group p-8 bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl hover:border-amber-500/50 transition-all duration-300">
<div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center mb-6">
<span className="iconify text-amber-400" data-height="24" data-icon="lucide:shield-check" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">AI Security</h3>
<p className="text-slate-400 text-sm leading-relaxed">Enterprise-grade security protocols ensuring your AI systems remain protected.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 lg:px-16 py-24">
<div className="max-w-4xl mx-auto">
<div className="relative p-12 lg:p-16 bg-gradient-to-br from-purple-900/50 via-slate-900 to-slate-900 border border-purple-500/20 rounded-3xl overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl"></div>
<div className="relative text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4" id="ctaTitleDisplay">Ready to Rule Your Industry?</h2>
<p className="text-slate-400 mb-8 max-w-lg mx-auto">Schedule a discovery call and let us architect the AI infrastructure your business deserves.</p>
<button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 rounded-full font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all" id="ctaButtonDisplay" onclick="openContactModal()">
                        Book Your Royal Consultation
                    </button>
</div>
</div>
</div>
</section>

<footer className="relative z-10 px-6 lg:px-16 py-12 border-t border-slate-800/50">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-violet-600 to-amber-500 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold tracking-tighter text-sm">B</span>
</div>
<span className="font-medium tracking-tight">Bainary Digital Labs</span>
</div>
<div className="flex items-center gap-6 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="mailto:bainarydigital@gmail.com">Contact</a>
</div>
<div className="text-sm text-slate-600">© 2024 Bainary Digital Labs. All rights reserved.</div>
</div>
</footer>

<div className="fixed inset-0 z-[90] hidden" id="contactModal">
<div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onclick="closeContactModal()"></div>
<div className="absolute inset-0 flex items-center justify-center p-6">
<div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-8">
<button className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors" onclick="closeContactModal()">
<span className="iconify" data-height="20" data-icon="lucide:x" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Get Started</h3>
<p className="text-slate-400 text-sm mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
<form className="space-y-4" id="contactForm" onsubmit="submitContactForm(event)">
<div>
<label className="text-sm text-slate-400 mb-2 block">Full Name</label>
<input className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" name="name" required="" type="text"/>
</div>
<div>
<label className="text-sm text-slate-400 mb-2 block">Email Address</label>
<input className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" name="email" required="" type="email"/>
</div>
<div>
<label className="text-sm text-slate-400 mb-2 block">Company Name</label>
<input className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" name="company" type="text"/>
</div>
<div>
<label className="text-sm text-slate-400 mb-2 block">Service Interested In</label>
<select className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500" name="service">
<option value="">Select a service</option>
<option value="ai-agents">AI Agents Development</option>
<option value="workflow">Workflow Automation</option>
<option value="ml">Machine Learning</option>
<option value="data">Data Integration</option>
<option value="conversational">Conversational AI</option>
<option value="security">AI Security</option>
</select>
</div>
<div>
<label className="text-sm text-slate-400 mb-2 block">Message</label>
<textarea className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-purple-500 resize-none" name="message" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl font-medium hover:opacity-90 transition-opacity" type="submit">
                        Send Message
                    </button>
</form>
<p className="text-xs text-slate-500 text-center mt-4">
                    Or email us directly at <a className="text-purple-400 hover:underline" href="mailto:bainarydigital@gmail.com">bainarydigital@gmail.com</a>
</p>
</div>
</div>
</div>

<div className="fixed inset-0 z-[95] hidden" id="videoModal">
<div className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm" onclick="closeVideoModal()"></div>
<div className="absolute inset-0 flex items-center justify-center p-6">
<div className="relative w-full max-w-5xl">
<button className="absolute -top-12 right-0 p-2 text-slate-400 hover:text-white transition-colors" onclick="closeVideoModal()">
<span className="iconify" data-height="24" data-icon="lucide:x" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="aspect-video bg-slate-900 rounded-xl overflow-hidden">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" id="modalVideoFrame" src=""></iframe>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-[100] hidden" id="successToast">
<div className="flex items-center gap-3 px-6 py-4 bg-green-500/10 border border-green-500/20 rounded-xl">
<span className="iconify text-green-400" data-height="20" data-icon="lucide:check-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm text-green-400">Message sent successfully!</span>
</div>
</div>

    </>
  );
}
