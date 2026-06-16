import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      function switchTab(tabId) {
          // Hide all views
          const views = ['dashboard', 'scan', 'patients', 'profile', 'settings'];
          views.forEach(view => {
              const el = document.getElementById(`view-${view}`);
              if(el) el.classList.add('hidden');
          });

          // Show selected view
          const selectedView = document.getElementById(`view-${tabId}`);
          if(selectedView) selectedView.classList.remove('hidden');

          // Reset desktop nav styles
          const navItems = document.querySelectorAll('.nav-item');
          navItems.forEach(item => {
              item.className = 'nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-100/50 hover:text-gray-900 transition-colors';
          });

          // Set active desktop nav style
          const activeNav = document.getElementById(`nav-${tabId}`);
          if(activeNav) {
              activeNav.className = 'nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium bg-white shadow-sm ring-1 ring-gray-900/5 text-gray-900';
          }
      }

      document.head.insertAdjacentHTML("beforeend", `<style>
          @keyframes scan {
              0%, 100% { top: 0%; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { top: 100%; opacity: 0; }
          }
      </style>`)
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-[#FBFBFD] border-r border-gray-200/60 hidden md:flex flex-col justify-between pt-8 pb-6 px-4">
<div>

<div className="flex items-center gap-2 px-3 mb-10 text-blue-600">
<iconify-icon icon="solar:stethoscope-bold" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-gray-900">
            BeMyDoctor
          </span>
</div>

<nav className="space-y-1">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium bg-white shadow-sm ring-1 ring-gray-900/5 text-gray-900" id="nav-dashboard" onclick="switchTab('dashboard')">
<iconify-icon icon="solar:widget-linear" width="20"></iconify-icon>
            Dashboard
          </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-100/50 hover:text-gray-900 transition-colors" id="nav-scan" onclick="switchTab('scan')">
<iconify-icon icon="solar:qr-code-linear" width="20"></iconify-icon>
            Identify Patient
          </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-100/50 hover:text-gray-900 transition-colors" id="nav-patients" onclick="switchTab('patients')">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
            Patients List
          </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-100/50 hover:text-gray-900 transition-colors" id="nav-settings" onclick="switchTab('settings')">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
            Settings
          </button>
</nav>
</div>

<div className="flex items-center gap-3 px-3 py-3 rounded-2xl hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-gray-900/5 transition-all cursor-pointer group">
<img alt="Profile" className="w-9 h-9 rounded-full object-cover" src="https://ui-avatars.com/api/?name=M+J&amp;background=0D99FF&amp;color=fff"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Dr. Mohamed</p>
<p className="text-xs text-gray-500 truncate font-light">Hospitalist</p>
</div>
<iconify-icon className="text-gray-400 group-hover:text-gray-600" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 px-6 flex items-center justify-between bg-[#F5F5F7]/80 backdrop-blur-md sticky top-0 z-20">
<div className="md:hidden flex items-center gap-2">
<button className="p-2 -ml-2 text-gray-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<span className="font-semibold text-gray-900 tracking-tight">
            BeMyDoctor
          </span>
</div>

<div className="hidden md:flex relative w-96 group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full bg-white border-none rounded-xl py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all" placeholder="Search patients, conditions, or files..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded border border-gray-200">
              ⌘K
            </span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 text-gray-500 hover:bg-white hover:shadow-sm hover:text-gray-700 rounded-full transition-all">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-[#F5F5F7]"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth" id="content-area">

<div className="tab-content max-w-5xl mx-auto space-y-8" id="view-dashboard">
<div className="flex items-end justify-between">
<div>
<h1 className="text-3xl font-medium tracking-tight text-gray-900">
                Good evening, Dr. Mohamed
              </h1>
<p className="text-gray-500 mt-1 font-light">
                Here's your health overview for today.
              </p>
</div>
<button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 shadow-lg shadow-gray-900/10 transition-all" onclick="switchTab('scan')">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
              New Entry
            </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white p-5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 flex flex-col justify-between h-32">
<div className="flex items-start justify-between">
<div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
</div>
<div>
<span className="text-2xl font-semibold tracking-tight block">
                  1
                </span>
<span className="text-xs text-gray-500 font-medium">
                  Today's Patients
                </span>
</div>
</div>
<div className="bg-white p-5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 flex flex-col justify-between h-32">
<div className="flex items-start justify-between">
<div className="p-2 bg-orange-50 text-orange-600 rounded-xl">
<iconify-icon icon="solar:clipboard-list-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400 px-2 py-1">
                  Remaining
                </span>
</div>
<div>
<span className="text-2xl font-semibold tracking-tight block">
                  1
                </span>
<span className="text-xs text-gray-500 font-medium">
                  Pending Requests
                </span>
</div>
</div>
<div className="bg-white p-5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 flex flex-col justify-between h-32">
<div className="flex items-start justify-between">
<div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
<iconify-icon icon="solar:scanner-linear" width="24"></iconify-icon>
</div>
</div>
<div>
<span className="text-2xl font-semibold tracking-tight block">
                  1
                </span>
<span className="text-xs text-gray-500 font-medium">
                  Recent Scans
                </span>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<button className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-4 rounded-2xl shadow-lg shadow-blue-500/20 text-left hover:shadow-blue-500/30 transition-all group" onclick="switchTab('scan')">
<iconify-icon className="mb-3 group-hover:scale-110 transition-transform" icon="solar:qr-code-bold" width="28"></iconify-icon>
<span className="block text-sm font-semibold">Scan Patient ID</span>
<span className="text-[10px] opacity-80 font-light">
                QR or NFC Tag
              </span>
</button>
<button className="bg-white p-4 rounded-2xl ring-1 ring-gray-200 shadow-sm text-left hover:ring-blue-200 hover:bg-blue-50/50 transition-all group">
<iconify-icon className="mb-3 text-gray-900 group-hover:text-blue-600 transition-colors" icon="solar:user-plus-linear" width="28"></iconify-icon>
<span className="block text-sm font-medium text-gray-900">
                Add Patient
              </span>
<span className="text-[10px] text-gray-400">Create new file</span>
</button>
<button className="bg-white p-4 rounded-2xl ring-1 ring-gray-200 shadow-sm text-left hover:ring-blue-200 hover:bg-blue-50/50 transition-all group">
<iconify-icon className="mb-3 text-gray-900 group-hover:text-blue-600 transition-colors" icon="solar:document-add-linear" width="28"></iconify-icon>
<span className="block text-sm font-medium text-gray-900">
                New Note
              </span>
<span className="text-[10px] text-gray-400">
                Clinical documentation
              </span>
</button>
<button className="bg-white p-4 rounded-2xl ring-1 ring-gray-200 shadow-sm text-left hover:ring-blue-200 hover:bg-blue-50/50 transition-all group">
<iconify-icon className="mb-3 text-gray-900 group-hover:text-blue-600 transition-colors" icon="solar:calendar-add-linear" width="28"></iconify-icon>
<span className="block text-sm font-medium text-gray-900">
                Schedule
              </span>
<span className="text-[10px] text-gray-400">Book appointment</span>
</button>
</div>

<div className="bg-white rounded-3xl shadow-sm ring-1 ring-gray-200/60 overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
<h3 className="font-medium text-gray-900">Recent Patient Scans</h3>
<button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                View All
              </button>
</div>
<table className="w-full text-left text-sm">
<thead className="bg-gray-50/50 text-gray-500 font-medium">
<tr>
<th className="px-6 py-3 font-medium">Patient</th>
<th className="px-6 py-3 font-medium">Time</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-50">
<tr className="hover:bg-gray-50/80 transition-colors group cursor-pointer" onclick="switchTab('profile')">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-700 font-semibold text-xs">
                        AG
                      </div>
<span className="font-medium text-gray-900">
                        Anas Amr Galal
                      </span>
</div>
</td>
<td className="px-6 py-4 text-gray-500 font-light">
                    Today, 9:41 AM
                  </td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Active
                    </span>
</td>
<td className="px-6 py-4 text-right">
<iconify-icon className="text-gray-300 group-hover:text-blue-500 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="tab-content hidden h-full flex flex-col items-center justify-center max-w-4xl mx-auto" id="view-scan">
<div className="w-full space-y-6">
<div className="text-center space-y-2">
<h2 className="text-2xl font-medium tracking-tight">
                Identify Patient
              </h2>
<p className="text-gray-500 font-light">
                Scan QR code or tap NFC tag to access health records.
              </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

<div className="bg-white p-6 rounded-[32px] shadow-xl ring-1 ring-gray-200/60 flex flex-col items-center gap-6 group cursor-pointer hover:ring-blue-200 transition-all" onclick="switchTab('profile')">
<div className="w-full flex justify-between items-center">
<span className="text-sm font-semibold text-gray-900">
                    Scan QR
                  </span>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>
<div className="aspect-square w-full bg-gray-900 rounded-2xl relative overflow-hidden shadow-inner flex items-center justify-center">
<div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg')] bg-cover bg-center"></div>

<div className="w-40 h-40 border-2 border-white/30 rounded-2xl relative">
<div className="absolute left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-[scan_2s_ease-in-out_infinite]"></div>

<div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white rounded-tl-lg"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white rounded-tr-lg"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white rounded-bl-lg"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white rounded-br-lg"></div>
</div>
</div>
<p className="text-xs text-gray-400 font-light">
                  Align code within frame
                </p>
</div>

<div className="bg-white p-6 rounded-[32px] shadow-xl ring-1 ring-gray-200/60 flex flex-col items-center gap-6 group cursor-pointer hover:ring-blue-200 transition-all" onclick="switchTab('profile')">
<div className="w-full flex justify-between items-center">
<span className="text-sm font-semibold text-gray-900">
                    Read NFC
                  </span>
<iconify-icon className="text-blue-600" icon="solar:wireless-charge-linear"></iconify-icon>
</div>
<div className="aspect-square w-full bg-[#FAFAFA] rounded-2xl relative overflow-hidden flex items-center justify-center border border-gray-100">

<div className="absolute w-24 h-24 rounded-full border border-blue-500/20 nfc-pulse"></div>
<div className="absolute w-24 h-24 rounded-full border border-blue-500/20 nfc-pulse" style={{animationDelay: '0.5s'}}></div>

<div className="relative z-10 flex flex-col items-center gap-2">
<iconify-icon className="text-gray-800 group-hover:scale-110 transition-transform duration-500" icon="solar:smartphone-2-linear" width="64"></iconify-icon>
<iconify-icon className="text-blue-600 absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm" icon="solar:card-transfer-linear" width="32"></iconify-icon>
</div>
</div>
<p className="text-xs text-gray-400 font-light">
                  Hold device near tag
                </p>
</div>
</div>
<div className="flex items-center justify-center gap-4">
<button className="text-sm font-medium text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
                Enter ID Manually
              </button>
</div>
</div>
</div>

<div className="tab-content hidden max-w-5xl mx-auto" id="view-patients">
<div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
<h1 className="text-2xl font-medium tracking-tight">
              Patients Directory
            </h1>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-600 shadow-sm">
                All
              </button>
<button className="px-3 py-1.5 rounded-lg bg-transparent border border-transparent text-xs font-medium text-gray-500 hover:bg-gray-100">
                Recent
              </button>
<button className="px-3 py-1.5 rounded-lg bg-transparent border border-transparent text-xs font-medium text-gray-500 hover:bg-gray-100">
                Critical
              </button>
</div>
</div>
<div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200">
<div className="divide-y divide-gray-100">
<div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer" onclick="switchTab('profile')">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                    AG
                  </div>
<div>
<h3 className="text-sm font-medium text-gray-900">
                      Anas Amr Galal
                    </h3>
<p className="text-xs text-gray-500 font-light">
                      Last visit: Today
                    </p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
<iconify-icon icon="solar:chat-line-linear" width="18"></iconify-icon>
</button>
<iconify-icon className="text-gray-300" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden max-w-2xl mx-auto space-y-6" id="view-profile">
<button className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1" onclick="switchTab('dashboard')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
            Back
          </button>

<div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0000F5] to-[#00008F] text-white p-6 shadow-xl shadow-blue-900/20">
<div className="flex justify-between items-start mb-8">
<div>
<h1 className="text-3xl font-bold tracking-tight mb-1">
                  Health ID
                </h1>
<p className="text-white/80 font-light text-sm">
                  Show this to your doctor to access your health profile.
                </p>
</div>
<div className="bg-white p-1 rounded-lg">
<iconify-icon className="text-black" icon="solar:qr-code-bold" width="32"></iconify-icon>
</div>
</div>
<div className="mt-8 space-y-1">
<h2 className="text-2xl font-light tracking-wide">Anas Amr Galal</h2>
<p className="text-white/70 font-light">7 February, 2012</p>
</div>
<div className="mt-6 pt-6 border-t border-white/20 flex gap-6 text-sm">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-cyan-400"></span>
<span className="font-light">
                  Allergies:
                  <span className="font-medium text-cyan-200">No</span>
</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span className="font-light">
                  Medications:
                  <span className="font-medium text-red-200">No</span>
</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-yellow-400"></span>
<span className="font-light">
                  Conditions:
                  <span className="font-medium text-yellow-200">No</span>
</span>
</div>
</div>
</div>

<div className="bg-gray-200/50 p-1 rounded-xl flex font-medium text-sm">
<button className="flex-1 py-1.5 rounded-lg bg-white shadow-sm text-gray-900">
              Summary
            </button>
<button className="flex-1 py-1.5 rounded-lg text-gray-500 hover:bg-white/50 transition-colors">
              Files
            </button>
<button className="flex-1 py-1.5 rounded-lg text-gray-500 hover:bg-white/50 transition-colors">
              Notes
            </button>
</div>

<div className="space-y-4">
<div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200/60 overflow-hidden">
<div className="px-5 py-3 bg-gray-50/50 border-b border-gray-100">
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Recent Activity
                </h3>
</div>
<div className="divide-y divide-gray-100">
<div className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-blue-100 rounded-lg text-blue-600">
<iconify-icon icon="solar:stethoscope-linear"></iconify-icon>
</div>
<span className="text-gray-900">Last Doctor Visit</span>
</div>
<div className="flex items-center gap-2">
<span className="text-gray-500 text-sm">21 April 2026</span>
<iconify-icon className="text-gray-300 group-hover:text-blue-500" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-purple-100 rounded-lg text-purple-600">
<iconify-icon icon="solar:pill-linear"></iconify-icon>
</div>
<span className="text-gray-900">Recent Prescription</span>
</div>
<div className="flex items-center gap-2">
<span className="text-gray-500 text-sm text-right">
                      Panadol (10mg)
                      <br/>
<span className="text-xs font-light">Yesterday</span>
</span>
<iconify-icon className="text-gray-300 group-hover:text-blue-500" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200/60 overflow-hidden">
<div className="px-5 py-3 bg-gray-50/50 border-b border-gray-100">
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Personal Details
                </h3>
</div>
<div className="divide-y divide-gray-100">
<div className="p-4 flex justify-between items-center group">
<span className="text-gray-900">Blood Type</span>
<div className="flex items-center gap-2">
<span className="text-gray-500 text-sm">A+</span>
<iconify-icon className="text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="p-4 flex justify-between items-center group">
<span className="text-gray-900">Gender</span>
<div className="flex items-center gap-2">
<span className="text-gray-500 text-sm">Male</span>
<iconify-icon className="text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="p-4 flex justify-between items-center group">
<span className="text-gray-900">Nationality</span>
<div className="flex items-center gap-2">
<span className="text-gray-500 text-sm">Egyptian</span>
<iconify-icon className="text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden max-w-2xl mx-auto" id="view-settings">
<h1 className="text-3xl font-bold tracking-tight text-black mb-8">
            Settings
          </h1>
<div className="space-y-6">
<div className="bg-white rounded-xl overflow-hidden shadow-sm ring-1 ring-gray-200">
<div className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer border-b border-gray-100">
<span className="text-[17px] text-gray-900">Account</span>
<div className="flex items-center gap-2">
<span className="text-[17px] text-gray-500">Detail</span>
<iconify-icon className="text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
<span className="text-[17px] text-gray-900">Languages</span>
<div className="flex items-center gap-2">
<span className="text-[17px] text-gray-500">English</span>
<iconify-icon className="text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="bg-white rounded-xl overflow-hidden shadow-sm ring-1 ring-gray-200">
<div className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer border-b border-gray-100">
<span className="text-[17px] text-gray-900">Notifications</span>
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer border-b border-gray-100">
<span className="text-[17px] text-gray-900">Support</span>
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
<span className="text-[17px] text-gray-900">Privacy and terms</span>
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="bg-white rounded-xl overflow-hidden shadow-sm ring-1 ring-gray-200">
<div className="p-4 flex items-center justify-center cursor-pointer hover:bg-gray-50">
<span className="text-[17px] text-red-500">Log out</span>
</div>
</div>
</div>
</div>
</div>

<div className="md:hidden border-t border-gray-200 bg-white/90 backdrop-blur-lg fixed bottom-0 w-full pb-safe">
<div className="flex justify-around items-center h-16">
<button className="flex flex-col items-center gap-1 text-blue-600" onclick="switchTab('dashboard')">
<iconify-icon icon="solar:widget-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400" onclick="switchTab('scan')">
<iconify-icon icon="solar:qr-code-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Scan</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400" onclick="switchTab('settings')">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Settings</span>
</button>
</div>
</div>
</main>


    </>
  );
}
