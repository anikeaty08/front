import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Tab switching
        function switchLeftTab(tab) {
            d('tabParticipants').className = tab === 'participants' 
                ? 'flex-1 px-4 py-3 text-sm font-medium text-white border-b-2 border-indigo-500 transition-colors'
                : 'flex-1 px-4 py-3 text-sm font-medium text-zinc-400 border-b-2 border-transparent hover:text-white transition-colors';
            document.getElementById('tabAI').className = tab === 'ai'
                ? 'flex-1 px-4 py-3 text-sm font-medium text-white border-b-2 border-indigo-500 transition-colors'
                : 'flex-1 px-4 py-3 text-sm font-medium text-zinc-400 border-b-2 border-transparent hover:text-white transition-colors';
            document.getElementById('participantsPanel').classList.toggle('hidden', tab !== 'participants');
            document.getElementById('aiPanel').classList.toggle('hidden', tab !== 'ai');
        
        
        function switchRightTab(tab) {
            document.getElementById('tabChat').className = tab === 'chat'
                ? 'flex-1 px-4 py-3 text-sm font-medium text-white border-b-2 border-indigo-500 transition-colors'
                : 'flex-1 px-4 py-3 text-sm font-medium text-zinc-400 border-b-2 border-transparent hover:text-white transition-colors relative';
            document.getElementById('tabQA').className = tab === 'qa'
                ? 'flex-1 px-4 py-3 text-sm font-medium text-white border-b-2 border-indigo-500 transition-colors relative'
                : 'flex-1 px-4 py-3 text-sm font-medium text-zinc-400 border-b-2 border-transparent hover:text-white transition-colors relativeNotes').className = tab === 'notes'
                ? 'flex-1 px-4 py-3 text-sm font-medium text-white border-b-2 border-indigo-500 transition-colors'
                : 'flex-1 px-4 py-3 text-sm font-medium text-zinc-400 border-b-2 border-transparent hover:text-white transition-colors';
            document.getElementById('chatPanel').classList.toggle('hidden', tab !== 'chat');
            document.getElementById('qaPanel').classList.toggle('hidden', tab !== 'qa');
            document.getElementById('notesPanel').classList.toggle('hidden', tab !== 'notes');
        }
        
        // Modal functions
        function openBreakoutRooms() {
            document.getElementById('breakoutRoomsModal').classList.remove('hidden');
        }
        function closeBreakoutRooms() {
            document.getElementById('breakoutRoomsModal').classList.add('hidden');
        }
        function startBreakoutRooms() {
            closeBreakoutRooms();
            alert('Breakout rooms started! Students are being moved to their rooms.');
        }
        function createRooms(num) {
            console.log('Creating ' + num + ' rooms');
        }
        
        function openAttendance() {
            document.getElementById('attendanceModal').classList.remove('hidden');
        }
        function closeAttendance() {
            document.getElementById('attendanceModal').classList.add('hidden');
        }
        
        function openScreenShare() {
            document.getElementById('screenShareModal').classList.remove('hidden');
        }
        function closeScreenShare() {
            document.getElementById('screenShareModal').classList.add('hidden');
        }
        function shareScreen(type) {
            closeScreenShare();
            console.log('Sharing:', type);
        }
        
        // Flash Poll
        function openQuickPoll() {
            document.getElementById('flashPollOverlay').classList.remove('hidden');
            startPollTimer();
        }
        function closeFlashPoll() {
            document.getElementById('flashPollOverlay').classList.add('hidden');
        }
        function selectPollOption(btn) {
            document.querySelectorAll('#flashPollOverlay button').forEach(b => {
                b.classList.remove('border-indigo-500', 'bg-indigo-600/20');
            });
            btn.classList.add('border-indigo-500', 'bg-indigo-600/20');
            setTimeout(closeFlashPoll, 500);
        }
        
        let pollTimerInterval;
        function startPollTimer() {
            let seconds = 30;
            document.getElementById('pollTimer').textContent = ':30';
            pollTimerInterval = setInterval(() => {
                seconds--;
                document.getElementById('pollTimer').textContent = '0:' + (seconds < 10 ? '0' : '') + seconds;
                if (seconds <= 0) {
                    clearInterval(pollTimerInterval);
                    closeFlashPoll();
                }
            }, 1000);
        }
        
        // Engagement prompt
        function sendEngagementPrompt(name) {
            document.getElementById('engagementPromptOverlay').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('engagementPromptOverlay').classList.add('hidden');
            }, 10000);
        }
        function respondEngagement(response) {
            document.getElementById('engagementPromptOverlay').classList.add('hidden');
            console.log('Engagement response:', response);
        }
        
        // Toggle controls
        let micOn = true, camOn = true, screenSharing = false;
        
        function toggleMic() {
            micOn = !micOn;
            const btn = document.getElementById('micToggle');
            const icon = btn.querySelector('.iconify');
            if (micOn) {
                icon.setAttribute('data-icon', 'lucide:mic');
                btn.classList.remove('bg-red-600');
                btn.classList.add('bg-zinc-800');
            } else {
                icon.setAttribute('data-icon', 'lucide:mic-off');
                btn.classList.remove('bg-zinc-800');
                btn.classList.add('bg-red-600');
            }
        }
        
        function toggleCamera() {
            camOn = !camOn;
            const btn = document.getElementById('cameraToggle');
            const icon = btn.querySelector('.iconify');
            if (camOn) {
                icon.setAttribute('data-icon', 'lucide:video');
                btn.classList.remove('bg-red-600');
                btn.classList.add('bg-zinc-800');
            } else {
                icon.setAttribute('data-icon', 'lucide:video-off');
                btn.classList.remove('bg-zinc-800');
                btn.classList.add('bg-red-600');
            }
        }
        
        function toggleScreenShare() {
            if (!screenSharing) {
                openScreenShare();
            } else {
                screenSharing = false;
                const btn = document.getElementById('screenShareToggle');
                btn.classList.remove('bg-emerald-600');
                btn.classList.add('bg-zinc-800');
            }
        }
        
        function toggleChat() {
            document.getElementById('rightSidebar').classList.toggle('hidden');
            document.getElementById('rightSidebar').classList.toggle(':flex');
        }
        
        function toggleLeftSidebar() {
            document.getElementById('leftSidebar').classList.toggle('hidden');
        }
        
        function toggleRightPanel() {
            document.getElementById('rightSidebar').classList.toggle('hidden');
        }
        
        function raiseHand() {
            alert('Hand raised! The tutor will see your request.');
        }
        
        function openReactions() {
            alert('Reactions: 👍 👏 ❤️ 😂 😮 🎉');
        }
        
        function endCall() {
            if (confirm('End this session?')) {
                document.getElementById('sessionSummaryModal').classList.remove('hidden');
            }
        }
        
        function toggleAIAssistant() {
            alert('AI Assistant settings');
        }
        
        function openNotes() {
            switchRightTab('notes');
        }
        
        function openMeetingSettings() {
            alert('Meeting settings');
        }
        
        // Session timer
        let sessionSeconds = 5025;
        setInterval(() => {
            sessionSeconds++;
            const h = Math.floor(sessionSeconds / 3600);
            const m = Math.floor((sessionSeconds % 3600) / 60);
            const s = sessionSeconds % 60;
            document.getElementById('sessionTimer').textContent = 
                String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
        }, 1000);
        
        // Simulate engagement prompt after delay
        setTimeout(() => {
            sendEngagementPrompt('You');
        }, 5000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 flex" id="videoCallView">

<aside border-b="" border-zinc-800"="" className="hidden lg:flex flex-col w-72 bg-zinc-900 border &lt;!-- Tabs --&gt; &lt;div class=" flex="" id="leftSidebar">
<button className="flex-1 px-4 py-3 text-sm font-medium text-white border-b-2 border-indigo-500 transition-colors" id="tabParticipants" onclick="switchLeftTab('participants')">
                    Participants
                </button>
<button className="flex-1 px-4 py-3 text-sm font-medium text-zinc-400 border-b-2 border-transparent hover:text-white transition-colors" id="tabAI" onclick="switchLeftTab('ai')">
                    AI Insights
                </button>
</aside></div>

<div className="flex-1 overflow-y-auto" id="participantsPanel">

<div className="p-3 border-b border-zinc-800">
<p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Host</p>
<div className="flex items-center gap-3 p-2 rounded-lg bg-zinc-800/50">
<div className="relative">
<img className="w-10 h-10 rounded-full bg-indigo-600" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Professor"/>
<span className="absolute -bottom-0.5 -right-0.5 w-35 h-3.5 bg-emerald-500 border-2 border-zinc-900 rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm-white truncate">Dr. Kofi Asante</p>
<p className="text-xs text-indigo-400">Presenting</p>
</div>
<div className="flex items-center gap-1">
<span className="iconify w-4 h-4 text-emerald-400" data-height="16" data-icon="lucide:mic" data-width="16"></span>
<span className="iconify w-4 h-4 text-emerald-400" data-height="16" data-icon="lucide:video" data-width="16"></span>
</div>
</div>
</div>

<div className="p-3">
<div className="flex items-center justify-between mb-2">
<p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Students (24)</p>
<button className="text-xs text-indigo-400 hover:text-indigo-300">View All</button>
</div>

<div className="space-y-1">

<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-pointer group">
<div className="relative">
<img className="w-9 bg-zinc-700" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-zinc-900 rounded-full" title="Highly Engaged"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Sarah Mensah</p>
<div className="flex items-center gap-1">
<div className="w-16 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
<div bg-emerald-500="" rounded-full"=""></div>
</div>
<span className="text-xs text-emerald-400">98%</span>
</div>
</div>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="w-7 h-7 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 rounded-lg">
<span className="iconify w-4 h-4" data-height="16" data-icon="lucide:message-square" data-width="16"></span>
</button>
</div>
</div>

<div className="flex items-center gap-3 :bg-zinc-800/50 transition-colors cursor-pointer group">
<div className="relative">
<img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Davi-9 rounded-full bg-zinc-700"/>
<span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-amber-500 border-2 border-zinc-900 rounded-full" title="Moderate Engagement"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">David Owusu</p>
<div className="flex items-center gap-1">
<div className="w-16 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-amber-500 rounded-full"></div>
</div>
<span className="text-xs text-amber-400%&lt;/span&gt; &lt;/div&gt; &lt;/div&gt; &lt;span class=" data-height="16" data-icon="lucide:mic-off" data-width="16" h-4="" iconify="" text-red-400"="" w-4=""></span>
</div>
                 Engagement - Needs Attention --&gt;
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-red-500/10 border border-red-500/20 cursor-pointer group">
<div className="relative">
<img className="w-9 h-9 rounded-full bg-zinc-700" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"/>
<span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-red-500 border-2 border-zinc-900 rounded-full animate-pulse" title="Low Engagement"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Emma Adjei</p>
<div className="flex items-center gap-1">
<div className="w-16 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
<div className="w-1/4 h-full bg-red-500 rounded-full"></div>
</div>
<span className="text-xs text-red-400">23%</span>
</div>
</div>
<button className="px-2 py-1 bg-indigo-600 hover:bg-indigo-700 text-xs font-medium rounded-lg transition-colors" onclick="senementPrompt('Emma')">
                                Engage
                            </button>
</div>

<div className="flex items-center gap-3 p-2 rounded-lg bg-indigo-500/10 border bordercursor-pointer group">
<div className="relative">
<img className="w-9 h-9 rounded-full bg-zinc-700" src="https://api.dicebear.com/7.x/avataaars/svg?seed=James"/>
<span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center">
<span className="iconify w-3 h-3 text-white" data-height="12" data-icon="lucide:help-circle" data-width="12"></span>
</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">James Boateng</p>
<p className="text-xs text-indigo-400 truncate">Asked about recursion...</p>
</div>
<span className="iconify w-4 h-4 text-amber-400" data-height="16" data-icon="lucide:hand" data-width="16"></span>
</div>

<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-pointer">
<img className="w-9 h-9 rounded-full bg-zinc-700" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Lisa Appiah</p>
<div className="flex items-center gap-1">
<div className="w-16 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
<div className="w-11/12 h-full bg-emerald-500 rounded-full"></div>
</div>
<span className="text-xs text-emerald-400">91%</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-pointer">
<img className="w-9 h-9 rounded-full bg-zinc-700" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"/>
                            min-w-0"&gt;
                                <p className="text-sm font-medium text-white truncate">Michael Asare</p>
<div className="flex items-center gap-1">
<div className="w-16 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
<div className="w-4/5 h-full bg-emerald-500 rounded-full"></div>
</div>
<span className="text-xs text-emerald-400">85%</span>
</div>
</div>
</div>
</div>
</div>

<div className="p-3 border-t border-zinc-800 mt-auto class=" font-semibold="" mb-3"="" text-xs="" text-zinc-500="" tracking-wider="" uppercase="">Class Engagement<p></p>
<div className="grid grid-cols-3 gap-2">
<div className="text-center p-2 bg-emerald-500/10 rounded-lg">
<p className="text-lg font-bold text-emerald-400">18</p>
<p className="text-xs text-zinc-400">Engaged</p>
</div>
<div className="text-center p-2 bg-amber-500/10 rounded-lg">
<p className="text-lg font-bold text-amber-400">4</p>
<p className="text-xs text-zinc-400">Moderate</p>
</div>
<div className="text-center p-2 bg-red-500/10 rounded-lg">
<p className="text-lg font-bold text-red-400">2</p>
<p className="text-xs text-zinc-400">Low</p>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto hidden" id="aiPanel">

<div className="p-3 border-b border-zinc-800">
<div className="flex items-center gap-2 mb-3">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
</span>
<p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Live AI Analysis</p>
</div>

<div className="p-3 bg-zinc-800/50 rounded-xl mb-3">
<p className="text-xs text-zinc-500">Current Topic</p>
<p className="text-sm font-medium text-white">Recursive Functions in Python</p>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 text-xs rounded-full">Algorithms</span>
<span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-full">CS201</span>
</div>
</div>

<div className="p-3 bg-zinc- &lt;div class=" flex="" items-center="" justify-between="" mb-2"="">
<p className="text-xs text-zinc-500">Class Comprehension</p>
<span className="text-sm font-bold text-emerald-400">78%</span>
</div>
<div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500" style={{width: '78%'}}></div>
</div>
<p className="text-xs text-zinc-500 mt-2">Based on poll responses &amp; engagement</p>
</div>
</div>

<div className="p-3">
<p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">AI Suggestions</p>
<div className="space-y-2">
<button 10="" 20="" bg-amber-500="" border="" border-amber-500="" className="" hover:bg-amber-500="" rounded-xl="" text-left="" transition-colors"="">
<div className="flex items-start gap-3">
<span className="iconify w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" data-height="20" data-icon="lucide:lightbulb" data-width="20"></span>
<div>
<p className="text-sm font-medium text-white">Consider a quick poll</p>
<p className="text-xs text-zinc-400 mt-0.5">3 students seem confused about base cases</p>
</div>
</div>
</button>
<button className="w-full p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-left hover:bg-indigo-500/20 transition-colors">
<div className="flex items-start gap-3">
<span className="iconify w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" data-height="20" data-icon="lucide:message-circle" data-width="20"></span>
<div>
<p className="text-sm font-medium text-white">5 unanswered questions</p>
<p className="text-xs text-zinc-400 mt-0.5">AI has drafted responses for review</p>
</div>
</div>
</button>
<button className="w-full p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-left hover:bg-purple-500/20 transition-colors" onclick="openBreakoutRooms()">
<div className="flex items-start gap-3">
<span className="iconify w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" data-height="20" data-icon="lucide:users" data-width="20"></span>
<div>
<p className="text-sm font-medium text-white">Create breakout rooms</p>
<p className="text-xs text-zinc-400 mt-0.5">Practice time suggested</p>
</div>
</div>
</button>
</div>
</div>

<div className="p-3 border-t border-zinc-800">
<div className="flex items-center justify-between mb-3">
<p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Questions Queue</p>
<span className="px-2 py-0.5 bg-indigo-600 text-white text-xs rounded-full">5</span>
</div>
<div className="space-y-2">
<div className="p-3 bg-zinc-800/50 rounded-xl">
<div className="flex items-start gap-2">
<img className="w-6 h-6 rounded-full flex-shrink-0" src="https://api.dicebear.com/7.x/avataaars/svg?seed=James"/>
<div className="flex-1 min-w-0">
<p className="text-xs text-zinc-400">James B.</p>
<p className="text-sm text-white mt-0.5">What's the difference between recursion and iteration?</p>
<div className="flex items-center gap-2 mt-2">
<button className="px-2 py-1 bg-indigo-600 hover:bg-indigo-700 text-xs font-medium rounded-lg transition-colors">
                                            Answer Live
                                        </button>
<button className="px-2 py-1 bg-zinc-700 hover:bg-zinc-600 text-xs font-medium rounded-lg transition-colors">
                                            AI Answer
                                        </button>
</div>
</div>
</div>
</div>
<div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
<div className="flex items-start gap-2">
<img className="w-6 h-6 rounded-full flex-shrink-0" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anna"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<p className="text-xs text-zinc-400">Anna K.</p>
<span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded">AI Answered</span>
<p className="text-sm text-white mt-0.5">Can recursion cause memory issues?</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col">

<button className="hidden lg:flex items-center gap-2 h-9 px-3 bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 rounded-lg hover:bg-indigo-600/30 transition-colors" onclick="toggleAIAssistant()">
<span className="iconify w-4 h-4" data-height="16" data-icon="lucide:sparkles" data-width="16"></span>
<span className="text-sm font-medium">AI Active</span>
</button>

<button className="w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors relative" onclick="openQuickPoll()">
<span <="" button="" className="iconify w-5 h-5" data="" data-icon="lucide:bar-chart-2" data-width="20">

</span></button><button className="w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" onclick="openAttendance()">
<span className="iconify w-5 h-5" data-height="20" data-icon="lucide:user-check" data-width="20"></span>
</button>

<button className="w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors relative" onclick="openNotes()">
<span className="iconify w-5 h-5" data-height="20" data-icon="lucide:file-text" data-width="20"></span>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
<span className="iconify w-2.5 h-2.5 text-white" data-height="10" data-icon="lucide:check" data-width="10"></span>
</span>
</button>

<button className="w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" onclick="openMeetingSettings()">
<span className="iconify w-5 h-5" data-height="20" data-icon="lucide:settings" data-width="20"></span>
</button>
</div>

<div className="flex-1 relative overflow-hidden">

<div className="absolute inset-0 p-3" id="videoGridContainer">
<div className="h-full grid gap-2" id="videoGrid" style={{gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: '1fr auto'}}>

<div className="relative bg-zinc-800 rounded-2xl overflow-hidden col-span-2 row-span-1" id="mainContent">

<div className="w-full h-full bg-zinc-900 flex items-center justify-center" id="screenShareView">
<img alt="Screen share" className="w-full h-full object-contain" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&amp;h=800&amp;fit=crop"/>
</div>

<div className="absolute top-3 left-3 right-3 flex items-center justify-between">
<div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg">
<span className="iconify w-4 h-4 text-emerald-400" data-height="16" data-icon="lucide:monitor" data-width="16"></span>
<span className="text-sm text-white font. Kofi is sharing screen&lt;/span&gt; &lt;/div&gt; &lt;div class=" flex="" gap-2"="" items-center="">
<button className="w-8 h-8 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-black/80 transition-colors">
<span className="iconify w-4 h-4" data-height="16" data-icon="lucide:maximize-2" data-width="16"></span>
</button></span></div>
</div>

<div className="absolute bottom-3 right-3 w-48 h-36 bg-zinc-800 rounded-xl overflow-hidden shadow-2xl border border-zinc-700">
<img className="w-full h-full object-cover bg-gradient-to-br from-indigo-500 to-purple-600" src="https://api.dicebear.com/7.x/avataaars/svg"/>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
<span className="text-white text-xs font-medium bg-black/50 px-2 py-0.5 rounded">Dr. Kofi</span>
<span className="iconify w-4 h-4 text-emerald-400" data-height="16" data-icon="lucide:mic" data-width="16"></span>
</div>
</div>
</div>

<div bg-zinc-800="" border-2="" border-indigo-500"="" className="col-span-2 flex gap-2 overflow-x-auto pb-1" flex-shrink-0="" h-24="" overflow-hidden="" relative="" rounded-xl="" style="-ms-overflow-style: none;
                            
                            &lt;!-- Self View --&gt;
                            &lt;div className=" w-32="">
<img className="w-full h-full object-cover bg-gradient-to-br from-indigo-500 to-purple-500" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between">
<span className="text-white text-xs font-medium">You</span>
<span className="iconify w-3.5 h-3.5 text-emerald-400" data-height="14" data-icon="lucide:mic" data-width="14"></span>
</div>
</div>

<div className="relative flex-shrink-0 w-32 h-24 bg-zinc-800 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover bg-gradient-to-br from-pink-500 to-rose-500" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between">
<span className="text-white M.&lt;/span&gt; &lt;span class=" data-height="14" data-icon="lucide:mic" data-width="14" h-3.5="" iconify="" text-emerald-400"="" w-3.5=""></span>
</div>

<div className="absolute top.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full"></div>
</div>
<div className="relative flex-shrink-0 w-32 h-24 bg-zinc-800 rounded-xl overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
<span className="text-2xl font-bold text-white">DO</span>
</div>
<div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between">
<span className="text-white text-xs font-medium">David O.</span>
<span className="iconify w-3.5 h-3.5 text-red-400" data-height="14" data-icon="lucide:mic-off" data-width="14"></span>
</div>
<div className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full"></div>
</div>
<div className="relative flex-shrink-0 w-32 h-24d-xl overflow-hidden border border-indigo-500/50">
<img className="w-full h-full object-cover bg-gradient-to-br from-amber-500 to-orange-500" src="https://api.dicebear.com/7.x/avataaars/svg?seed=James"/>
<div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between">
<span className="text-white text-xs font-medium">James B.</span>
<span className="iconify w-3.5 h-3.5 text-amber-400" data-height="14" data-icon="lucide:hand" data-width="14"></span>
</div>
<div className="absolute top-1.5 left-1.5 px-1.bg-indigo-600 rounded text-xs text-white font-medium">?</div>
</div>
<div className="relative flex-shrink-0 w-32 h-24 bg-zinc-800 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover bg-gradient-to-br from-emerald-500 to-teal-500" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa"/>
<div className="absolute bottom-1.5 left-1.5 rightcenter justify-between">
<span className="text-white text-xs font-medium">Lisa A.</span>
<span className="iconify w-3.5 h-3.5 text-red-400" data-height="14" data-icon="lucide:mic-off" data-width="14"></span>
</div>
<div className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full"></div>
</div>
<div bg-gradient-to-br="" className="relative flex-shrink-0 w-32 h-24 bg-zinc-800 rounded-xl overflow-hidden border border-re&lt;div class=" flex="" from-zinc-700="" h-full="" items-center="" justify-center"="" to-zinc-800="" w-full="">
<span className="text-2xl font-bold text-zinc-500">EA</span>
</div>
<div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between">
<span className="text-white text-xs font-medium">Emma A.</span>
<span className="iconify w-3.5 h-3.5 text-red-400" data-height="14" data-icon="lucide:video-off" data-width="14"></span>
</div>
<div className="absolute top-1.5 right-1.5 w-2 h-2 bg-re-pulse"></div>
</div>

<div className="relative flex-shrink-0 w-32 h-24 bg-zinc-800 rounded-xl overflow-hidden flex items-center justify-center">
<div className="text-center">
<p className="text-2xl font-bold text-zinc-400">+18</p>
<p className="text-xs text-zinc-500">more</p>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-30 hidden" id="flashPollOverlay">
<div className="w-full max-w-lg mx-4 bg-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden" style={{animation: 'scaleIn 0.3s ease-out'}}>
<div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600">
<div className="flex items-center justify- &lt;div class=" flex="" gap-2"="" items-center="">
<span className="iconify w-5 h-5 text-white" data-height="20" data-icon="lucide:zap" data-width="20"></span>
<span className="text-white font-semibold">Flash Poll</span>
</div>
<div className="flex items-center gap-2 text-white/80 text-sm">
<span className="iconify w-4 h-4" data-height="16" data-icon="lucide:clock" data-width="16"></span>
<span id="pollTimer">0:30</span>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-white mb-4">What is the base case in the factorial function?</h3>
<div className="space-y-3">
<button className="w-full p-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-indigo-500 rounded-xl text-left transition-all group" onclick="selectPollOption(this)">
<div className="flex items-center gap-3">
<span className="w-8 h-8 bg-zinc-700 group-hover:bg-indigo-600 rounded-lg flex items-center justify-center text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">A</span>
<span className="text-white">n 0 returns 1</span>
</div>
</button>
<button className="w-full p-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-indigo-500 rounded-xl text-left transition-all group" onclick="selectPollOption(this)">
<div className="flex items-center gap-3">
<span className="w-8 h-8 bg-zinc-700 group-hover:bg-indigo-600 rounded-lg flex items-center justify-center text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">B</span>
<span className="text-white">n == 1 returns n</span>
</div>
</button>
<button className="w-full p-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-indigo-500 rounded-xl text-left transition-all group" onclick="selectPollOption(this)">
<div className="flex items-center gap-3">
<span className="w-8 h-8 bg-zinc-700 group-hover:bg-indigo-600 rounded-lg flex items-center justify-center text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">C</span>
<span className="text-white">n &lt; 0 returns 0</span>
</div>
</button>
<button className="w-full p-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-indigo-500 rounded-xl text-left transition-all group" onclick="selectPollOption(this)">
<div className="flex items-center gap-3">
<span className="w-8 h-8 bg-zinc-700 group-hover:bg-indigo-600 rounded-lg flex items-center justify-center text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">D</span>
<span className="text-white">No base case needed</span>
</div>
</button>
</div>
<div className="mt-4 flex items-center justify-between text-sm text-zinc-400">
<span>12/24 responded</span>
<span>Affects attendance score</span>
</div>
</div>
</div>
</div>

<div -30="" -translate-x-1="" 2="" absolute="" bottom-24="" hidden"="" id=" className=" left-1="">
<div className="bg-zinc-900 border border-indigo-500/50 rounded-2xl p-4 shadow-2xl shadow-indigo-500/20 max-w-sm" style={{animation: 'slideUp 0.3s ease-out'}}>
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
<span className="iconify w-5 h-5 text-white" data-height="20" data-icon="lucide:sparkles" data-width="20"></span>
</div>
                "&gt;
                                <p className="text-sm font-medium text-white">Quick Check-in</p>
<p className="text-xs text-zinc-400 mt-0.5">How well do you understand the current topic?</p>
<div className="flex items-center gap-2 mt-3">
<button className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-lg transition-colors" onclick="respondEngagement('great')">
                                        Got it! 👍
                                    </button>
<button className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-medium rounded-lg transition-colors" onclick="respondEngagement('confused')">
                                        Confused 😕
                                    </button>
<button className="px-3 py-1.5 bg-zinc-700 hover:bg-zinc-600 text-white text-xs font-medium rounded-lg transition-colors" onclick="respondEngagement('lost')">
                                        Lost 😵
                                </button></div>
</div>
</div>
</div>

<div className="h-20 bg-zinc-900/80 backdrop-blur-xl border-t border-zinc-800 flex items-center justify-between px-4">

<div className="flex items-center gap-2">
<button className="flex flex-col items-center justify-center w-14 h-14 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors" id="micToggle" onclick="toggleMic()">
<span className="iconify w-6 h-6 text-white" data-height="24" data-icon="lucide:mic" data-width="24"></span>
<span className="text-xs text-zinc-400 mt-0.5">Mic</span>
</button>
<button className="flex flex-col items-center justify-center w-14 h-14 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors" id="cameraToggle" onclick="toggleCamera()">
<span className="iconify w-6 h-6 text-white" data-height="24" data-icon="lucide:video" data-width="24"></span>
<span className="text-xs text-zinc-400 mt-0.5">Camera</span>
</button>
</div>

<div className="flex items-center gap-2">
<button className="flex flex-col items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors" id="screenShareToggle" onclick="toggleScreenShare()">
<span className="iconify w-6 h-6 text-white" data-height="24" data-icon="lucide:monitor-up" data-width="24"></span>
<span className="text-xs text-emerald-200 mt-0.5">Sharing</span>
</button>
<button className="flex flex-col items-center justify-center w-14 h-14 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors" onclick="openBreakoutRooms()">
<span className="iconify w-6 h-6 text-white" data-height="24" data-icon="lucide:layout"></span>
<span className="text-xs text-zinc-400 mt-0.5">Rooms</span>
</button>
<button className="flex flex-col items-center justify-center w-14 h-14 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors" onclick="raiseHand()">
<span className="iconify w-6 h-6 text-white" data="" data-height="24" data-width="24"></span>
<span className="text-xs text-zinc-400 mt-0.5">Raise</span>
</button>
<button className="flex flex-col items-center justify-center w-14 h-14 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors" onclick="openReactions()">
<span className="iconify w-6 h-6 text-white" data-height="24" data-icon="lucide:smile" data-width="24"></span>
<span className="text-xs text-zinc-400 mt-0.5">React</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-14 bg-red-600 hover:bg-red-700 rounded-xl transition-colors" onclick="endCall()">
<span className="iconify w-6 h-6 text-white" data-height="24" data-icon="lucide:phone-off" data-width="24"></span>
<span className="text-xs text-red-200 mt-0.5">End</span>
</button>
</div>

<div className="flex items-center gap-2">
<button className="flex flex-col items-center justify-center w-14 h-14 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors relative" onclick="toggleChat()">
<span className="iconify w-6 h-6 text-white" data-height="24" data-icon="lucide:message-square" data-width="24"></span>
<span className="text-xs text-zinc-400 mt-0.5">Chat</span>
<span className="absolute top-2 right-2 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center">5</span>
</button>
<button className="flex flex-col items-center justify-center w-14 h-14 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors lg:hidden" onclick="toggleRightPanel()">
<span className="iconify w-6 h-6 text-white" data-height="24" data-icon="lucide:panel-right" data-width="24"></span>
<span className="text-xs text-zinc-400 mt-0.5">More</span>
</button>
</div>
</div>

<aside className="hidden lg:flex flex-col w-80 bg-zinc-900 border-l border-zinc-800" id="rightSidebar">

<div className="flex border-b border-zinc-800">
<button className="flex-1 px-4 py-3 text-sm font-medium text-white border-b-2 border-indigo-500 transition-colors" id="tabChat" onclick="switchRightTab('chat')">
                    Chat
                
                    Q&amp;A
                    <span className="absolute top-2 right-4 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center">5</span>
</button>
<button className="flex-1 px-4 py-3 text-sm font-medium text-zinc-400 border-b-2 border-transparent hover:text-white transition-colors" id="tabNotes" onclick="switchRightTab('notes')">
                    Notes
                </button>
</div>

<div className="flex-1 flex flex-col" id="chatPanel">
<div className="flex-1 overflow-y-auto p-4 space-y-4" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>

<div className="text-center">
<span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full">Class started at 2:00 PM</span>
</div>

<div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
<div className="flex items-start gap-2">
<div className="w-7 h-7 bg-in items-center justify-center flex-shrink-0">
<span className="iconify w-white" data-height="16" data-icon="lucide:sparkles" data-width="16"></span>
</div>
<div>
<p className="text-xs text-indigo-400 font-medium">AI Note</p>
<p className="text-sm text-zinc-300 mt-0.5">Topic changed to: Recursive Functions</p>
</div>
</div>
</div>

<div className="flex items-start gap-2">
<img className="w-8 h-8 rounded-full flex-shrink-0" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-white">Sarah M.</span>
<span className="text-xs text-zinc-500">2:15 PM</span>
</div>
<p className="text-sm text-zinc-300 mt-0.5">This is really helpful, thanks!</p>
</div>
</div>

<div className="p-3 bg-zinc-800/50 rounded-xl border-l-2 border-amber-500">
<div className="flex items-start gap-2">
<img className="w-8 h-8 rounded-full flex-shrink-0" src="https://api.dicebear.com/7.x/avataaars/svg?seed=James"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-white">James B.</span>
<span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 text-xs rounded"></span>
</div>
<p className="text-sm text-zinc-300 mt-1">What's the difference between recursion and iteration?</p>
</div>
</div>

<div className="mt-3 p-3 bg-indigo-500/10 rounde">
<div className="flex items-start gap-2">
<div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center flex-shrink-0">
<span className="iconify w-3.5 h-3.5 text-white" data-height="14" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<div>
<p className="text-xs text-indigo-400 font-medium">AI Assistant</p>
<p className="text-sm text-zinc-300 mt-1">Recursion calls itself to solve smaller subproblems, while iteration uses loops. Recursion can be more elegant but uses more memory (call stack). Both can solve the same problems!</p>
<div className="flex items-center gap-2 mt-2">
<button className="text-xs text-zinc-400 hover:text-white transition-colors">👍 Helpful</button>
<button className="text-xs text-zinc-400 hover:text-white transition-colors">Ask tutor</button>
</div>
</div>
</div>
</div>
</div>

<div className="p-3 bg-emerald-500/10 rounded-xl border-l-2 border-emerald-500">
<div className="flex items-start gap-2">
<img className="w-8 h-8 rounded-full flex-shrink-0" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Professor"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-white">Dr. Kofi</span>
<span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded">Tutor</span>
</div>
<p className="text-xs text-zinc-400 mt-0.5">Answering @James B.'s question</p>
<p className="text-sm text-zinc-300 mt-1">Great question! The AI is correct. I'll show a visual comparison on screen now...</p>
<div className="mt-2 flex items-center gap-2">
                                     className="iconify w-4 h-4 text-zinc-400" data-icon="lucide:bookmark-height="16"&gt;
                                    <span className="text-xs text-zinc-400">Auto-saved to notes</span>
</div>
</div>
</div>
</div>

<div className="flex items-start gap-2">
<img className="w-8 h-8 rounded-full flex-shrink-0" src="https://api.dicebear.com/7.x/avataaars/svg?seed="/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-white">Lisa A.</span>
<span className="text-xs text-zinc-500">2:23 PM</span>
</div>
<p className="text-sm text-zinc-300 mt-0.5">Makes sense now! 💡</p>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-800">
                    -2 mb-2"&gt;
                        <button className="px-2 py-1 bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-400 rounded-lg transition-colors">
                            💬 Message
                        </button>
<button className="px-2 py-1 bg-amber20 hover:bg-amber-500/30 text-xs text-amber-400 rounded-lg transition-colors">
                            ❓ Question
                        </button>
</div>
<div className="flex gap-2">
<input className="flex-1 h-10 px-4 bg-zinc-800 rounde text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Type a message..." type="text"/>
<button className="w-10 h-10 bg-indigo-600 hover:bg-indigo-700 rounded-xl flex items-center justify-center text-white transition-colors">
<span className="iconify w-5 h-5" data-height="20" data-icon="lucide:send" data-width="20"></span>
</button>
</div>
</div>

<div className="flex-1 flex flex-col hidden" id="qaPanel">
<div className="flex-1 overflow-y-auto p-4 space-y-">

<div className="p-3 bg-zinc-800/50 rounded-xl border border-zinc-700">
<div className="flex items-start gap-2">
<img className="w-8 h-8 rounded-full flex-shrink-0" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-white">Michael A.</span>
<span className="text-xs text-zinc-500">5 min ago</span>
</div>
<p className="text-sm text-zinc-300 mt-1">Can you explain stack overflow in recursion?</p>
<div className="flex items-center gap-2 mt-3">
<button className="flex items-center gap-1 px-2 py-1 bg-indigo-600 hover:bg-indigo-700 text-xs text-white rounded-lg transition-colors">
<span className="iconify w-3.5 h-3.5" data-height="14" data-icon="lucide:mic" data-width="14"></span>
                                        Answer Live
                                    </button>
<button className="flex items-center gap-1 px-2 py-1 bg-zinc-700 hover:bg-zinc-600 text-xs text-white rounded-lg transition-colors">
<span className="iconify w-3.5 h-3.5" data-height="14" data-icon="lucide:sparkles" data-width="14"></span>
                                        AI Draft
                                    </button>
<span className="flex items-center gap-1 text-xs text-zinc-500">
<span 20"="" 5="" bg-emerald-500="" border="" border-emerald-500="" className="iconify w-3.5 h-3.5" data-icon="lucide:thumbs-up" data-width="&lt;/span&gt;
                                        12
                                    &lt;/span&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                    
                    &lt;!-- Answered Question --&gt;
                    &lt;div className=" p-3="" rounded-xl="">
<div className="flex items-start gap-2">
<img className="w-8 h-8 rounded-full flex-shrink-0" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anna"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-white">Anna K.</span>
<span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded">Answered</span>
</div>
</div>
<p className="text-sm text-zinc-300 mt-1">Why use recursion over loops?</p>
<div className="mt-2 p-2 bg-zinc-800/50 rounded-lg">
<p className="text-xs text-zinc-400">Dr. Kofi answered at 2:18 PM</p>
</div>
</div>
</div>
</span></span></div>
</div>
</div>

<div className="flex-1 flex flex-col hidden" id="notesPanel">
<div className="flex-1 overflow-y-auto p-4">

<div className="mb-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="iconify w-4 h-4 text-indigo-400" data-height="16" data-icon="lucide:sparkles" data-width="16"></span>
<span className="text-sm font-medium text-white">AI-Generated Notes</span>
</div>
<span className="text-xs text-emerald-400">Live updating</span>
</div>
<div className="p bg-zinc-800/50 rounded-xl border border-zinc-700">
<h4 className="text-sm font-semibold text-white mb-2">📚 Recursive Functions</h4>
<ul className="space-y-2 text-sm text-zinc-300">
<li className="flex items-start gap-2">
<span className="text-indigo-400 mt-1">•</span>
<span>A recursive function calls itself with a smaller input</span>
</li>
<li className="flex items-start gap-2">
<span className="text-indigo-400 mt-1">•</span>
<span>Base case: condition to stop recursion (e.g., n == 0)</span>
</li>
<li className="flex items-start gap-2">
<span className="text-indigo-400 mt-1">•</span>
<span>Recursive case: the function calls itself</span>
</li>
<li className="flex items-start gap-2">
<span className="text-indigo-400 mt-1">•</span>
<span>Example: factorial(n) = n * factorial(n-1)</span>
</li>
</ul>
<div className="mt-4 pt-3 border-t border-zinc-700">
<h5 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Key Q&amp;A</h5>
<div className="space-y-2">
<div className="p-2 bg-zinc-900/50 rounded-lg">
<p className="text-xs text-amber-400">Q: Difference between recursion and iteration?</p>
<p className="text-xs text-zinc-300 mt-1">A: Recursion uses call stack, iteration uses loops. Both can solve same problems.</p>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-white">Your Notes</span>
<button className="text-xs text-indigo-400 hover:text-indigo-300">+ Add note</button>
</div>
<textarea className="w-full h-32 p-3 bg-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none" placeholder="Type your personal notes here..."></textarea>
</div>
</div>

<div className="p-4 border-t border-zinc-800">
<button className="w-full h-10 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-2">
<span className="iconify w-4 h-4" data-height="16" data-icon="lucide:download" data-width="16"></span>
                        Export to Class Page
                    </button>
</div>
</div>
</div></div></div></aside>

<div className="fixed inset-0 z-50 hidden" id="breakoutRoomsModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeBreakoutRooms()"></div>
<div className="absolute inset-4 lg:inset-auto lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-full lg:max-w-2xl bg-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden flex flex-col max-h-[90vh]">

<div className="flex items-center justify-between p-4 border-b border-zinc-800">
<div>
<h2 className="text-lg font-semibold text-white">Breakout Rooms</h2>
<p className="text-sm text-zinc-400">Create small group sessions for discussion</p>
</div>
<button className="w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" onclick="closeBreakoutRooms()">
<span className="iconify w-5 h-5" data-height="20" data-icon="lucide:x" data-width="20"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4">

<div className="mb-6">
<p className="text-sm font-medium text-zinc-400 mb-3">Quick Setup</p>
<div className="grid grid-cols-3 gap-3">
<button className="p-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl text-center transition-colors" onclick="createRooms(4)">
<p className="text-2xl font-bold text-white">4</p>
<p className="text-xs text-zinc-400">rooms</p>
<p className="text-xs text-zinc-500 mt-1">~6 per room</p>
</button>
<button className="p-4 bg-indigo-600 hover:bg-indigo-700 border border-indigo-500 rounded-xl text-center transition-colors" onclick="createRooms(6)">
<p className="text-2xl font-bold text-white">6</p>
<p className="text-xs text-indigo-200">rooms</p>
<p className="text-xs text-indigo-300 mt-1">~4 per room</p>
</button>
<button className="p-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl text-center transition-colors" onclick="createRooms(8)">
<p className="text-2xl font-bold text-white">8</p>
<p className="text-xs text-zinc-400">rooms</p>
<p className="text-xs text-zinc-500 mt-1">~3 per room</p>
</button>
</div>
</div>

<div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl mb-6">
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
<span className="iconify w-5 h-5 text-white" data-height="20" data-icon="lucide:sparkles" data-width="20"></span>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">AI Recommendation</p>
<p className="text-sm text-zinc-400 mt-1">Based on engagement scores, I suggest grouping high-engagement students with those needing support for peer learning.</p>
<button className="mt-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
                                Apply Smart Grouping
                            </button>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-zinc-400">Rooms Preview</p>
<button className="text-sm text-indigo-400 hover:text-indigo-300">Shuffle All</button>
</div>

<div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span-8 bg-blue-600="" flex="" font-bold="" h-8="" items-center="" justify-center="" rounded-lg="" text-sm"="" text-white="">1
                                <span className="text-sm font-medium text-white">Room 1</span>
</span-8></div>
<span className="text-xs text-zinc-400">4 participants</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-700 rounded-full">
<img className="w-5 h-5 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<span className="text-xs text-white">Sarah M.</span>
</span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-700 rounded-full">
<img className="w-5 h-5 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=David"/>
<span className="text-xs text-white">David O.</span>
</span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-700 rounded-full">
<img className="w-5 h-5 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"/>
<span className="text-xs text-white">Emma A.</span>
</span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-700 rounded-full">
<img className="w-5 h-5 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=James"/>
<span className="text-xs text-white">James B.</span>
</span>
</div>
</div>

<div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-2&lt;/span&gt; &lt;span class=" font-medium="" text-sm="" text-white"="">Room 2</span>
</div>
<span className="text-xs text-zinc-400">4 participants</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-700 rounded-full">
<img className="w-5 h-5 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa"/>
<span className="text-xs text-white">Lisa A.</span>
</span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-700 rounded-full">
<img className="w-5 h-5 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"/>
<span className="text-xs text-white">Michael A.</span>
</span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-700 rounded-full">
<img className="w-5 h-5 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anna"/>
<span className="text-xs text-white">Anna K.</span>
</span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-700 rounded-full">
<img className="w-5 h-5 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Chris"/>
<span className="text-xs text-white">Chris T.</span>
</span>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-800 items-center justify-between">
<div className="flex items-center gap-4">
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-700 peer-checked:bg-indigo-600 transition-colors">
<div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></div>
</div>
<span className="text-sm text-zinc-400">Auto-close after 10 min</span>
</label>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition-colors" onclick="closeBreakoutRooms()">
                        Cancel
                    </button>
                BreakoutRooms()" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"&gt;
                        <span className="iconify w-4 h-4" data-height="16" data-icon="lucide:play" data-width="16"></span>
                        Start Rooms
                    
                </div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="screenShareModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeScreenShare()"></div>
<div className="-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden">
<div className="p-4-b border-zinc-800">
<h2 className="text-lg font-semibold text-white">Share Your Screen</h2>
<p className="text-sm text-zinc-400"> what to share with participants</p>
</div>
<div className="p-4 space-y-3">
<button className="w-full p-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-:border-indigo-500 rounded-xl text-left transition-all flex items-center gap-4" onclick="shareScreen('entire')">
<div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center">
<span className="iconify w-6 h-6 text-indigo-400" data-height="24" data-icon="lucide:monitor" data-width="24"></span>
</div>
<div>
<p className="text-sm font-medium text-white">Entire Screen</p>
<p className="text-xs text-zinc-400">Share everything on your screen</p>
</div>
</button>
<button className="w-full p-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-indigo-500 rounded-xl text-left transition-all flex items-center gap-4" onclick="shareScreen('window')">
<div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
<span className="iconify w-6 h-6 text-purple-400" data-height="24" data-icon="lucide:appwindow" data-width="24"></span>
</div>
<div>
<p className="text-sm font-medium text-white">Application Window</p>
<p className="text-xs text-zinc-400">Share a specific app</p>
</div>
</button>
<button className="w-full p-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-indigo-500 rounded-xl text-left transition-all flex items-center gap-4" onclick="shareScreen('tab')">
<div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center">
<span className="iconify w-6 h-6 text-emerald-400" data-height="24" data-icon="lucide:chrome" data-width="24"></span>
</div>
<div>
<p className="text-sm font-medium text-white">Browser Tab</p>
<p className="text-xs text-zinc-400">Share a single tab with audio</p>
</div>
</button>
<button className="w-full p-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-indigo-500 rounded-xl text-left transition-all flex items-center gap-4" onclick="shareScreen('whiteboard')">
<div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center">
<span className="iconify w-6 h-6 text-amber-400" data-height="24" data-icon="lucide:pen-tool" data-width="24"></span>
</div>
<div>
<p className="text-sm font-medium text-white">Whiteboard</p>
<p border-t="" border-zinc-800"="" className="text-xs text-zinc- collaborative whiteboard&lt;/p&gt; &lt;/div&gt; &lt;/button&gt; &lt;/div&gt; &lt;div class=" p-4="">
<label className="flex items-center gap-3 cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
</label></p><div className="w-9 h-5 bg-zinc-700 peer-checked:bg-indigo-600 rounded-full relative transition-colors">
<div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></div>
</div>
<span className="text-sm text-zinc-400">Include system audio</span>
</div>
</button></div>
</div>

<div className="fixed inset-0 z-50 hidden" id="attendanceModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeAttendance()"></div>
<div className="absolute inset-4 lg:inset-auto lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-full lg:max-w-lg bg-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden flex flex-col max-h-[90vh]">
<div className="flex items-center justify-between p-4 border-b border-zinc-800">
<div>
<h2 className="text-lg font-semibold text-white">Smart Attendance</h2>
<p className="text-sm text-zinc-400">AI-verified attendance tracking</p>
</div>
<button className="w-9 h-9 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" onclick="closeAttendance()">
<span className="iconify w-5 h-5" data-height="20" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4">

<div className="grid grid-cols-3 gap-3 mb-6">
<div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center">
<p className="text-2xl font-bold text-emerald-400">20</p>
<p className="text-xs text-zinc-400">Verified Present</p>
</div>
<div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-center">
<p className="text-2xl font-bold text-amber-400">3</p>
<p className="text-xs text-zinc-400">Needs Verification</p>
</div>
<div className="p-3 bg-zinc-800 border border-zinc-700 rounded-xl text-center">
<p className="text-2xl font-bold text-zinc-400">1</p>
<p className="text-xs text-zinc-400">Absent</p>
</div>
</div>

<div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl mb-4">
<p className="text-sm font-medium text-white mb-2">Active Verification Methods</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-indigo-600/30 text-indigo-300 text-xs rounded-full">
<span className="iconify w-3 h-3" data-height="12" data-icon="lucide:mouse-pointer-click" data-width="12"></span>
                            Interaction Tracking
                        </span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-indigo-600/30 text-indigo-300 text-xs rounded-full">
<span className="iconify w-3 h-3" data-height="12" data-icon="lucide:bar-chart-2" data-width="12"></span>
                            Poll Responses
                        </span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-indigo-600/30 text-indigo-300 text-xs rounded-full">
<span className="iconify w-3 h-3" data-height="12" data-icon="lucide:message-square" data-width="12"></span>
                            Chat Activity
                        </span>
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-600/30 text-zinc-400 text-xs rounded-full">
<span className="iconify w-3 h-3" data-height="12" data-icon="lucide:video" data-width="12"></span>
                            Camera (Optional)
                        </span>
</div>
</div>

<div className="space-y-2">

<div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-xl">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<div>
<p className="text-sm font-medium text-white">Sarah Mensah</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
<span className="text-xs text-emerald-400">Verified • 98% engagement</span>
</div>
</div>
</div>
<span className="iconify w-5 h-5 text-emerald-400" data-height="20" data-icon="lucide:check-circle" data-width="20"></span>
</div>

<div className="flex items-center justify-between p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"/>
<div>
<p className="text-sm font-medium text-white">Emma Adjei</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
<span className="text-xs text-amber-400">Low activity • Sent check-in</span>
</div>
</div>
</div>
<button className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-medium rounded-lg transition-colors">
                            Verify
                        </button>
</div>

<div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-xl">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=David"/>
<div>
<p className="text-sm font-medium text-white">David Owusu</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
<span className="text-xs text-emerald-400">Verified • 72% engagement</span>
</div>
</div>
</div>
<span className="iconify w-5 h-5 text-emerald-400" data-height="20" data-icon="lucide:check-circle" data-width="20"></span>
</div>
</div>
</div>
<div className="p-4 border-t border-zinc-800 flex gap-3">
<button className="flex-1 h-10 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition-colors">
                    Send Check-in Poll
                </button>
<button className="flex-1 h-10 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors">
                    Export Report
                </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="sessionSummaryModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="absolute inset-4 lg:inset-auto lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-full lg:max-w-2xl bg-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden flex flex-col max-h-[90vh]">
<div className="p-6 border-b border-zinc-800 bg-gradient-to-r from-indigo-600 to-purple-600">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
<span className="iconify w-6 h-6 text-white" data-height="24" data-icon="lucide:sparkles" data-width="24"></span>
</div>
<div>
<h2 className="text-xl font-semibold text-white!&lt;/h2&gt; &lt;p class=" text-indigo-200"="">AI-generated summary ready<p></p>
</h2></div>
</div>
</div>
<div className="flex-1 overflow-y-auto p-6">

<div className="grid grid-cols-4 gap-3 mb-6">
<div className="text-center p-3 bg-zinc-800 rounded-xl">
<p className="text-xl font-bold text-white">1:45:32</p>
<p className="text-xs text-zinc-400">Duration</p>
</div>
<div className="text-center p-3 bg-zinc-800 rounded-xl">
<p className="text-xl font-bold text-emerald-400">24</p>
<p className="text-xs text-zinc-400">Attended</p>
</div>
<div className="text-center p-3 bg-zinc-800 rounded-xl">
<p className="text-xl font-bold text-indigo-400">82%</p>
<p className="text-xs text-zinc-400">Avg Engagement</p>
</div>
<div className="text-center p-3 bg-zinc-800 rounded-xl">
<p className="text-xl font-bold text-amber-400">15</p>
<p className="text-xs text-zinc-400">Questions</p>
</div>
</div>

<div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700 mb-6">
<h3 className="text-sm font-semibold text-white mb-3">📝 Session Summary</h3>
<div className="space-y-3 text-sm text-zinc-300">
<p><strong className="text-white">Topics Covered:</strong> Recursive Functions, Base Cases, Stack Overflow Prevention, Recursion vs Iteration</p>
<p><strong className="text-white">Key Concepts:</strong></p>
<ul className="list-disc list-inside pl-2 space-y-1 text-zinc-400">
<li>Every recursive function needs a base case</li>
<li>Recursion uses call stack memory</li>
<li>Tail recursion can be optimized</li>
<li>Choose iteration for performance-critical code</li>
</ul>
</div>
</div>

<div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700 mb-6">
<h3 className="text-sm font-semibold text-white mb-3">❓ Top Questions &amp; Answers</h3>
<div className="space-y-3">
<div className="p-3 bg-zinc-900/50 rounded-lg">
<p className="text-sm text-amber-400">Q: What's the difference between recursion and iteration?</p>
<p className="text-sm text-zinc-300 mt-1">A: Recursion calls itself and uses stack memory; iteration uses loops. Both can solve the same problems.</p>
<p className="text-xs text-zinc-500 mt-1">Asked by James B. • Answered live by Dr. Kofi</p>
</div>
<div className="p-3 bg-zinc-900/50 rounded-lg">
<p className="text-sm text-amber-400">Q: Can recursion cause memory issues?</p>
<p className="text-sm text-zinc-300 mt-1">A: Yes, deep recursion can cause stack overflow. Use iteration for large inputs.</p>
<p className="text-xs text-zinc-500 mt-1">Asked by Anna K. • Answered by AI</p>
</div>
</div>
</div>

<div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
<h3 className="text-sm font-semibold text-white mb-3">📌 Suggested Follow-ups</h3>
<div className="space-y-2">
<label className="flex items-center gap- cursor-pointer">
<input checked="" className="w-4 h-4 rounded border-zinc-600 bg-zinc-800 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
<span className="text-sm text-zinc-300">Upload summary to CS 201 class page</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input checked="" className="w-4 h-4 rounded border-zinc-600 bg-zinc-800 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
<span className="text-sm text-zinc-300">Send recording to absent students</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input className="w-4 h-4 rounded border-zinc-600 bg-zinc-800 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
<span className="text-sm text-zinc-300">Schedule follow-up session for confused students (3)</span>
</label>
</div>
</div>
</div>
<div className="p-4 border-t border-zinc-800 flex gap-3">
<button className="flex-1 h-11 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl transition-colors">
                    Save &amp; Close
                </button>
<button className="flex-1 h-11 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2">
<span className="iconify w-5 h-5" data-height="20" data-icon="lucide:upload" data-width="20"></span>
                    Publish to Class
                </button>
</div>
</div>
</div>
<style>
        @keyframes scaleIn {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translate(-50%, 20px); opacity: 0; }
            to { transform: translate(-50%, 0); opacity: 1; }
        }
        .overflow-y-auto::-webkit-scrollbar,
        .overflow-x-auto::-webkit-scrollbar {
            display: none;
        }
    </style>

</div>
    </>
  );
}
