import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- State Management ---
        const state = {
            user: null,
            team: null,
            role: null,
            sendEmail: false,
            sendWa: false
        };

        // --- Step 1 Logic ---

        // User Search Simulation
        const searchInput = document.getElementById('user-search');
        const resultsBox = document.getElementById('user-results');
        
        searchInput.addEventListener('focus', () => {
            resultsBox.classList.remove('hidden');
        });

        // Hide results when clicking outside is usually good, keeping simple for demo
        
        function selectUser(el, name, handle) {
            state.user = { name, handle };
            document.getElementById('sel-name').innerText = name;
            document.getElementById('sel-handle').innerText = handle;
            
            // UI Toggle
            searchInput.parentElement.classList.add('hidden');
            document.getElementById('selected-user-display').classList.remove('hidden');
            document.getElementById('selected-user-display').classList.add('flex');
            resultsBox.classList.add('hidden');
            
            validateStep1();
        }

        function clearUser() {
            state.user = null;
            searchInput.parentElement.classList.remove('hidden');
            searchInput.value = '';
            document.getElementById('selected-user-display').classList.add('hidden');
            document.getElementById('selected-user-display').classList.remove('flex');
            validateStep1();
        }

        function selectTeam(el, teamName) {
            // Visual reset
            document.querySelectorAll('.team-option').forEach(btn => {
                btn.classList.remove('bg-indigo-50', 'border-indigo-100');
                btn.querySelector('.check-icon').classList.add('hidden');
            });

            // Active State
            el.classList.add('bg-indigo-50');
            el.querySelector('.check-icon').classList.remove('hidden');

            state.team = teamName;
            
            // Show Profile section if "Frontend Core" is selected (Simulation of rule)
            if(teamName === 'Frontend Core' || teamName === 'Engineering') {
                document.getElementById('profile-section').classList.remove('hidden');
                document.getElementById('profile-section').classList.add('block', 'fade-in');
            } else {
                document.getElementById('profile-section').classList.add('hidden');
            }

            validateStep1();
        }

        function selectRole(el, roleName) {
            // Visual Reset
            document.querySelectorAll('.role-option').forEach(btn => {
                btn.classList.remove('bg-gray-900', 'text-white', 'border-gray-900');
                btn.classList.add('border-gray-200', 'text-gray-700');
                btn.querySelector('div').classList.remove('text-white');
                btn.querySelector('div').classList.add('text-gray-700');
            });

            // Active State
            el.classList.remove('border-gray-200', 'text-gray-700');
            el.classList.add('bg-gray-900', 'text-white', 'border-gray-900');
            el.querySelector('div').classList.remove('text-gray-700');
            el.querySelector('div').classList.add('text-white');

            state.role = roleName;
            validateStep1();
        }

        function validateStep1() {
            const btn = document.getElementById('btn-continue');
            if (state.user && state.team && state.role) {
                btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        }

        function goToStep2() {
            // Populate summary
            document.getElementById('confirm-team').innerText = state.team;
            document.getElementById('confirm-role').innerText = state.role;

            document.getElementById('step-1').classList.add('hidden');
            document.getElementById('step-2').classList.remove('hidden');
        }

        function editConfig() {
            document.getElementById('step-2').classList.add('hidden');
            document.getElementById('step-1').classList.remove('hidden');
        }

        // --- Step 2 Logic ---

        function toggleCheckbox(boxId, iconId) {
            const box = document.getElementById(boxId);
            const icon = document.getElementById(iconId);
            
            // Check current state by class presence
            const isChecked = box.classList.contains('bg-gray-900');

            if (!isChecked) {
                // Check
                box.classList.remove('border-gray-300');
                box.classList.add('bg-gray-900', 'border-gray-900');
                icon.classList.remove('opacity-0', 'scale-75');
            } else {
                // Uncheck
                box.classList.remove('bg-gray-900', 'border-gray-900');
                box.classList.add('border-gray-300');
                icon.classList.add('opacity-0', 'scale-75');
            }
        }

        function copyLink() {
            navigator.clipboard.writeText("boom.co/invite/x8z9-q2p4-m5n6");
            showToast("Link copied to clipboard");
        }

        function finishProcess() {
            // In a real app, this would trigger API calls
            const waChecked = document.getElementById('wa-check').classList.contains('bg-gray-900');
            
            if (waChecked) {
                // Simulate deep link
                window.open('https://wa.me/?text=Join%20my%20team%20on%20Boom!', '_blank');
            }
            
            showToast("Invite sent successfully");
            
            // Reset UI after delay (optional)
            setTimeout(() => {
                // Logic to close modal usually goes here
            }, 2000);
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            toast.querySelector('span').innerText = msg;
            toast.classList.remove('opacity-0', 'translate-y-2');
            
            setTimeout(() => {
                toast.classList.add('opacity-0');
            }, 3000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-6 left-1/2 -translate-x-1/2 bg-white border border-gray-200 shadow-lg rounded-full px-4 py-2 flex items-center gap-2 opacity-0 pointer-events-none transition-all duration-300 z-50" id="toast">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-700">Invite generated successfully</span>
</div>

<main className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative slide-up">

<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white z-10">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white text-xs font-semibold tracking-tighter">
                    B
                </div>
<h1 className="text-sm font-medium tracking-tight text-gray-900">Invite Member</h1>
</div>
<button className="text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="p-6 space-y-6" id="step-1">

<div className="space-y-2">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Person</label>
<div className="relative group">
<iconify-icon className="absolute left-3 top-2.5 text-gray-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 focus:bg-white transition-all placeholder:text-gray-400 font-light" id="user-search" placeholder="Name, email or @username" type="text"/>

<div className="hidden absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden" id="user-results">

<button className="w-full flex items-center gap-3 p-2 hover:bg-gray-50 text-left transition-colors border-b border-gray-50 last:border-0 user-option" data-id="1" onclick="selectUser(this, 'Sarah Connor', '@sarah')">
<img alt="" className="w-8 h-8 rounded-full bg-gray-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<div className="flex-1">
<div className="text-sm font-medium text-gray-900 leading-tight">Sarah Connor</div>
<div className="text-xs text-gray-500 font-light">sarah@skynet.com</div>
</div>
</button>

<div className="w-full flex items-center gap-3 p-2 bg-gray-50 opacity-50 cursor-not-allowed text-left border-b border-gray-50 last:border-0">
<img alt="" className="w-8 h-8 rounded-full bg-gray-200 grayscale" src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"/>
<div className="flex-1">
<div className="text-sm font-medium text-gray-700 leading-tight">John Doe</div>
<div className="text-xs text-gray-500 font-light">Already a member</div>
</div>
</div>
</div>
</div>

<div className="hidden items-center gap-3 p-2 bg-indigo-50/50 border border-indigo-100 rounded-lg" id="selected-user-display">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
<iconify-icon className="text-lg" icon="solar:user-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-gray-900" id="sel-name"></div>
<div className="text-xs text-gray-500" id="sel-handle"></div>
</div>
<button className="p-1 hover:bg-indigo-100 rounded text-indigo-400 hover:text-indigo-600" onclick="clearUser()">
<iconify-icon icon="solar:close-square-linear"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Team</label>
<div className="border border-gray-200 rounded-lg overflow-hidden">
<div className="max-h-32 overflow-y-auto custom-scroll">

<button className="w-full text-left px-3 py-2.5 hover:bg-gray-50 flex items-center justify-between group transition-colors team-option" data-id="eng" onclick="selectTeam(this, 'Engineering')">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400 group-hover:text-gray-600" icon="solar:folder-path-connect-linear"></iconify-icon>
<span className="text-sm text-gray-700 group-hover:text-gray-900">Engineering</span>
</div>
<iconify-icon className="text-indigo-600 hidden check-icon" icon="solar:check-circle-bold"></iconify-icon>
</button>

<button className="w-full text-left px-3 py-2.5 pl-8 hover:bg-gray-50 flex items-center justify-between group transition-colors team-option" data-id="fe" onclick="selectTeam(this, 'Frontend Core')">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400 group-hover:text-gray-600" icon="solar:code-circle-linear"></iconify-icon>
<span className="text-sm text-gray-700 group-hover:text-gray-900">Frontend Core</span>
</div>
<iconify-icon className="text-indigo-600 hidden check-icon" icon="solar:check-circle-bold"></iconify-icon>
</button>

<button className="w-full text-left px-3 py-2.5 pl-8 hover:bg-gray-50 flex items-center justify-between group transition-colors team-option" data-id="ds" onclick="selectTeam(this, 'Design Systems')">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400 group-hover:text-gray-600" icon="solar:pallete-2-linear"></iconify-icon>
<span className="text-sm text-gray-700 group-hover:text-gray-900">Design Systems</span>
</div>
<iconify-icon className="text-indigo-600 hidden check-icon" icon="solar:check-circle-bold"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Role</label>
<div className="grid grid-cols-3 gap-2">
<button className="role-option border border-gray-200 rounded-lg p-2 text-center hover:border-gray-300 transition-all focus:ring-1 focus:ring-gray-200" onclick="selectRole(this, 'Admin')">
<div className="text-sm font-medium text-gray-700">Admin</div>
</button>
<button className="role-option border border-gray-200 rounded-lg p-2 text-center hover:border-gray-300 transition-all focus:ring-1 focus:ring-gray-200" onclick="selectRole(this, 'Member')">
<div className="text-sm font-medium text-gray-700">Member</div>
</button>

<button className="border border-gray-100 bg-gray-50 rounded-lg p-2 text-center opacity-50 cursor-not-allowed" disabled="">
<div className="text-sm font-medium text-gray-400">Owner</div>
</button>
</div>
</div>

<div className="space-y-2 hidden" id="profile-section">
<div className="flex justify-between items-end">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Profile <span className="text-gray-400 font-normal lowercase">(optional)</span></label>
<span className="text-[10px] text-gray-400 tracking-tight">Permissions not affected</span>
</div>
<div className="relative">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-300 text-sm font-light">
<option>No specific profile</option>
<option>Senior Engineer</option>
<option>Tech Lead</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="pt-4 border-t border-gray-100">
<button className="w-full py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium transition-all hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm flex items-center justify-center gap-2" disabled="" id="btn-continue" onclick="goToStep2()">
                    Continue
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden p-6 space-y-6 fade-in" id="step-2">
<div className="text-center space-y-1">
<div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
<iconify-icon className="text-2xl" icon="solar:link-circle-linear"></iconify-icon>
</div>
<h2 className="text-base font-medium text-gray-900 tracking-tight">Invite Link Ready</h2>
<p className="text-sm text-gray-500 font-light">
                    User will join <strong className="font-medium text-gray-700" id="confirm-team"></strong> as <strong className="font-medium text-gray-700" id="confirm-role"></strong>.
                </p>
</div>

<div className="group relative">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">Unique Link</label>
<div className="flex bg-gray-50 border border-gray-200 rounded-lg overflow-hidden transition-colors hover:border-gray-300">
<input className="flex-1 bg-transparent border-none px-3 py-2.5 text-sm text-gray-600 font-mono focus:ring-0" readonly="" type="text" value="boom.co/invite/x8z9-q2p4-m5n6"/>
<button className="px-3 border-l border-gray-200 hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors flex items-center justify-center" onclick="copyLink()" title="Copy Link">
<iconify-icon className="text-lg" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Send via</label>

<div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-gray-300 cursor-pointer transition-all" onclick="toggleCheckbox('email-check', 'email-icon')">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Email</div>
<div className="text-xs text-gray-500 font-light">Send to sarah@skynet.com</div>
</div>
</div>
<div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center transition-colors" id="email-check">
<iconify-icon className="text-white text-xs opacity-0 scale-75 transition-all" icon="solar:check-read-linear" id="email-icon"></iconify-icon>
</div>
</div>

<div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-gray-300 cursor-pointer transition-all" onclick="toggleCheckbox('wa-check', 'wa-icon')">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">WhatsApp</div>
<div className="text-xs text-gray-500 font-light">Open WhatsApp web</div>
</div>
</div>
<div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center transition-colors" id="wa-check">
<iconify-icon className="text-white text-xs opacity-0 scale-75 transition-all" icon="solar:check-read-linear" id="wa-icon"></iconify-icon>
</div>
</div>
</div>

<div className="pt-2 flex flex-col gap-3">
<button className="w-full py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium transition-all hover:bg-gray-800 shadow-sm flex items-center justify-center gap-2" onclick="finishProcess()">
                    Send Invite
                </button>
<button className="w-full py-2 rounded-lg text-gray-500 text-sm font-medium hover:text-gray-900 transition-colors" onclick="editConfig()">
                    Back &amp; Edit
                </button>
</div>
</div>
</main>


    </>
  );
}
