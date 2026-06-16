import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init Date
        document.getElementById('form-date').valueAsDate = new Date();

        // Login Logic
        function handleLogin() {
            const login = document.getElementById('login-screen');
            const app = document.getElementById('app-shell');
            
            login.classList.add('opacity-0', '-translate-y-4');
            setTimeout(() => {
                login.classList.add('hidden');
                app.classList.remove('hidden');
                app.classList.add('fade-in');
            }, 300);
        }

        // Tab Switching Logic
        function switchTab(tabId) {
            // Content
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.remove('active', 'fade-in');
                if(el.id === 'tab-' + tabId) {
                    el.classList.add('active', 'fade-in');
                }
            });

            // Nav Styling
            const navSearch = document.getElementById('nav-search');
            const navRecord = document.getElementById('nav-record');
            
            if(tabId === 'search') {
                navSearch.className = "nav-item flex flex-col items-center space-y-1 p-2 text-zinc-900";
                navRecord.className = "nav-item flex flex-col items-center space-y-1 p-2 text-zinc-400 hover:text-zinc-600";
            } else {
                navSearch.className = "nav-item flex flex-col items-center space-y-1 p-2 text-zinc-400 hover:text-zinc-600";
                navRecord.className = "nav-item flex flex-col items-center space-y-1 p-2 text-zinc-900";
            }
        }

        // Search Logic Simulation
        function simulateSearch() {
            const input = document.getElementById('searchInput').value;
            const loader = document.getElementById('search-loading');
            const placeholder = document.getElementById('search-placeholder');
            const result = document.getElementById('search-result');
            const notFound = document.getElementById('search-not-found');

            placeholder.classList.add('hidden');
            result.classList.add('hidden');
            notFound.classList.add('hidden');
            loader.classList.remove('hidden');

            setTimeout(() => {
                loader.classList.add('hidden');
                if (input.includes('999')) {
                    // Simulating Not Found
                    document.getElementById('nf-chip').innerText = input;
                    notFound.classList.remove('hidden');
                } else {
                    // Simulating Found
                    result.classList.remove('hidden');
                }
            }, 800);
        }

        function prefillAndCreate() {
            const chip = document.getElementById('nf-chip').innerText;
            document.getElementById('form-chip').value = chip;
            switchTab('new-record');
        }

        // Form Wizard Logic
        let currentStep = 1;
        function changeStep(direction) {
            const nextStep = currentStep + direction;
            if (nextStep < 1 || nextStep > 3) return;

            // Simple validation for step 1
            if (currentStep === 1 && direction === 1) {
                const chip = document.getElementById('form-chip').value;
                if (!chip) {
                    document.getElementById('form-chip').focus();
                    document.getElementById('form-chip').classList.add('border-red-500');
                    setTimeout(()=> document.getElementById('form-chip').classList.remove('border-red-500'), 2000);
                    return;
                }
            }

            document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
            document.getElementById(`step-${nextStep}`).classList.add('active');

            // Update dots
            for(let i=1; i<=3; i++) {
                const dot = document.getElementById(`dot-${i}`);
                if(i === nextStep) {
                    dot.classList.remove('w-1.5', 'bg-zinc-200');
                    dot.classList.add('w-6', 'bg-zinc-900');
                } else {
                    dot.classList.remove('w-6', 'bg-zinc-900');
                    dot.classList.add('w-1.5', 'bg-zinc-200');
                }
            }

            // Buttons
            const btnBack = document.getElementById('btn-back');
            const btnNext = document.getElementById('btn-next');
            const btnSave = document.getElementById('btn-save');

            if (nextStep === 1) {
                btnBack.classList.add('hidden');
                btnNext.classList.remove('w-2/3');
                btnNext.classList.add('w-full');
            } else {
                btnBack.classList.remove('hidden');
                btnNext.classList.remove('w-full');
                btnNext.classList.add('w-2/3');
            }

            if (nextStep === 3) {
                btnNext.classList.add('hidden');
                btnSave.classList.remove('hidden');
                btnSave.classList.add('flex', 'w-2/3'); // match width layout
            } else {
                btnNext.classList.remove('hidden');
                btnSave.classList.add('hidden');
                btnSave.classList.remove('flex');
            }

            currentStep = nextStep;
        }

        // Photo Upload Logic
        function handleFileSelect(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById('preview-img').src = e.target.result;
                    document.getElementById('preview-img').classList.remove('hidden');
                    document.getElementById('upload-placeholder').classList.add('hidden');
                    document.getElementById('remove-img').classList.remove('hidden');
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        function removeImage() {
            document.getElementById('file-upload').value = "";
            document.getElementById('preview-img').src = "#";
            document.getElementById('preview-img').classList.add('hidden');
            document.getElementById('upload-placeholder').classList.remove('hidden');
            document.getElementById('remove-img').classList.add('hidden');
        }

        // Save Simulation
        document.getElementById('btn-save').addEventListener('click', () => {
             const toast = document.getElementById('toast');
             toast.classList.remove('-translate-y-20', 'opacity-0');
             setTimeout(() => {
                 toast.classList.add('-translate-y-20', 'opacity-0');
                 // Reset form
                 document.getElementById('recordForm').reset();
                 currentStep = 1;
                 changeStep(0); // Reset UI to step 1
                 removeImage();
                 switchTab('search');
             }, 2500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full h-full max-w-md bg-white sm:h-[800px] sm:rounded-2xl sm:shadow-xl sm:border sm:border-zinc-200 relative flex flex-col px-6 py-12 transition-all duration-500" id="login-screen">
<div className="flex-1 flex flex-col justify-center">
<div className="mb-8">
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 shadow-md">
<span className="iconify text-white" data-height="20" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">Field Operative Log in</h1>
<p className="text-sm text-zinc-500 font-normal">Enter your credentials to access the rabies control database.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); handleLogin();">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1">Email address</label>
<input className="w-full px-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all placeholder:text-zinc-400" placeholder="name@org.com" required="" type="email" value="operative@field.com"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700 ml-1">Password</label>
<input className="w-full px-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all placeholder:text-zinc-400" placeholder="••••••••" required="" type="password" value="password"/>
</div>
<div className="flex items-center justify-between pt-2">
<label className="flex items-center space-x-2 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors"></div>
<span className="iconify text-white absolute top-0.5 left-0.5 opacity-0 peer-checked:opacity-100 pointer-events-none" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-700 transition-colors">Keep me signed in</span>
</label>
<a className="text-xs text-zinc-900 font-medium hover:underline" href="#">Forgot password?</a>
</div>
<button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center space-x-2 mt-4" type="submit">
<span>Sign In</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</form>
</div>
<div className="text-center">
<p className="text-xs text-zinc-400">Restricted Access • Version 1.0.4</p>
</div>
</div>

<div className="hidden w-full h-full max-w-md bg-zinc-50 sm:h-[800px] sm:rounded-2xl sm:shadow-2xl sm:border sm:border-zinc-200 relative flex flex-col overflow-hidden" id="app-shell">

<header className="bg-white/80 backdrop-blur-md border-b border-zinc-200 px-4 py-3 flex items-center justify-between sticky top-0 z-20">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-zinc-100 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 font-semibold text-xs">
                    JD
                </div>
<div>
<h2 className="text-sm font-semibold tracking-tight text-zinc-900 leading-tight">Jane Doe</h2>
<div className="flex items-center space-x-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-zinc-500">Online</span>
</div>
</div>
</div>
<button className="p-2 hover:bg-zinc-100 rounded-md text-zinc-500 transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="20"></span>
</button>
</header>

<main className="flex-1 overflow-y-auto pb-24 relative">

<div className="tab-content active px-4 py-6 fade-in" id="tab-search">
<div className="text-center mb-6">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Microchip Search</h3>
<p className="text-xs text-zinc-500 mt-1">Scan or enter ID to verify vaccination.</p>
</div>

<div className="bg-white p-1.5 rounded-xl shadow-sm border border-zinc-200 flex items-center space-x-2 mb-6 focus-within:ring-2 focus-within:ring-zinc-900/5 focus-within:border-zinc-300 transition-all">
<div className="pl-2 text-zinc-400">
<span className="iconify" data-icon="lucide:search" data-width="20"></span>
</div>
<input className="flex-1 bg-transparent border-none text-sm text-zinc-900 focus:ring-0 placeholder:text-zinc-400 py-2" id="searchInput" placeholder="Ex: 98102000..." type="text"/>
<button className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-zinc-800 transition-colors" onclick="simulateSearch()">
                        Find
                    </button>
</div>

<div className="flex flex-col items-center justify-center py-12 text-zinc-400" id="search-placeholder">
<span className="iconify mb-3 opacity-20" data-icon="lucide:scan-barcode" data-width="64"></span>
<p className="text-xs">No active search</p>
</div>
<div className="hidden flex flex-col items-center justify-center py-12" id="search-loading">
<span className="iconify animate-spin text-zinc-900 mb-2" data-icon="lucide:loader-2" data-width="24"></span>
<p className="text-xs text-zinc-500">Searching database...</p>
</div>

<div className="hidden bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden fade-in" id="search-result">
<div className="h-48 bg-zinc-100 relative group">
<img alt="Animal" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
<div className="flex items-center space-x-2">
<span className="bg-emerald-500/20 text-emerald-100 backdrop-blur-md border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide flex items-center gap-1">
<span className="iconify" data-icon="lucide:shield-check" data-width="10"></span> Vaccinated
                                </span>
</div>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-sm font-semibold text-zinc-900">Microchip #98102341</h4>
<p className="text-xs text-zinc-500">Recorded: Oct 12, 2023</p>
</div>
<button className="text-zinc-400 hover:text-zinc-900" onclick="switchTab('new-record')">
<span className="iconify" data-icon="lucide:pencil" data-width="16"></span>
</button>
</div>
<div className="grid grid-cols-2 gap-4 border-t border-zinc-100 pt-4">
<div>
<p className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider mb-0.5">Owner</p>
<p className="text-xs font-medium text-zinc-800">S. Perera</p>
</div>
<div>
<p className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider mb-0.5">Location</p>
<p className="text-xs text-zinc-600">Colombo 03</p>
</div>
<div>
<p className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider mb-0.5">Batch</p>
<p className="text-xs text-zinc-600 font-mono">RB-2023-X9</p>
</div>
<div>
<p className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider mb-0.5">Next Due</p>
<p className="text-xs text-amber-600 font-medium">Oct 12, 2024</p>
</div>
</div>
</div>
</div>

<div className="hidden text-center py-8 fade-in" id="search-not-found">
<div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-3">
<span className="iconify text-zinc-400" data-icon="lucide:search-x" data-width="24"></span>
</div>
<h4 className="text-sm font-medium text-zinc-900">No record found</h4>
<p className="text-xs text-zinc-500 mb-4 px-8">Microchip #<span id="nf-chip"></span> is not in the system.</p>
<button className="bg-zinc-900 text-white px-5 py-2 rounded-lg text-xs font-medium shadow-sm hover:bg-zinc-800 transition-colors inline-flex items-center gap-2" onclick="prefillAndCreate()">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                        Create Record
                    </button>
</div>
</div>

<div className="tab-content px-4 py-6 fade-in h-full flex flex-col" id="tab-new-record">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">New Vaccination</h3>
<div className="flex items-center space-x-1">

<div className="h-1.5 w-6 rounded-full bg-zinc-900 transition-all step-dot" id="dot-1"></div>
<div className="h-1.5 w-1.5 rounded-full bg-zinc-200 transition-all step-dot" id="dot-2"></div>
<div className="h-1.5 w-1.5 rounded-full bg-zinc-200 transition-all step-dot" id="dot-3"></div>
</div>
</div>
<form className="flex-1 flex flex-col" id="recordForm" onsubmit="event.preventDefault();">

<div className="step-content active space-y-5" id="step-1">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">Microchip Number <span className="text-red-500">*</span></label>
<div className="relative">
<input className="w-full pl-10 pr-3 py-3 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all font-mono placeholder:text-zinc-300" id="form-chip" placeholder="Scan or type..." required="" type="number"/>
<span className="iconify absolute left-3 top-3.5 text-zinc-400" data-icon="lucide:scan-line" data-width="18"></span>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">Vaccination Date <span className="text-red-500">*</span></label>
<input className="w-full px-3 py-3 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" id="form-date" type="date"/>
</div>
<div className="p-4 bg-blue-50/50 border border-blue-100 rounded-lg">
<div className="flex gap-3">
<span className="iconify text-blue-600 mt-0.5" data-icon="lucide:info" data-width="16"></span>
<p className="text-xs text-blue-900 leading-relaxed">Ensure the microchip scanner is active. If scanning fails, enter the 15-digit ISO code manually.</p>
</div>
</div>
</div>

<div className="step-content space-y-5" id="step-2">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">Owner Name</label>
<input className="w-full px-3 py-3 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" placeholder="First Last" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">District</label>
<div className="relative">
<select className="w-full pl-3 pr-8 py-3 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 appearance-none">
<option>Colombo</option>
<option>Gampaha</option>
<option>Kandy</option>
</select>
<span className="iconify absolute right-3 top-3.5 text-zinc-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">City</label>
<input className="w-full px-3 py-3 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" placeholder="City" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">Address / Location</label>
<textarea className="w-full px-3 py-3 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all resize-none" placeholder="Street, Landmarks..." rows="3"></textarea>
</div>
</div>

<div className="step-content space-y-5" id="step-3">

<div>
<label className="text-xs font-medium text-zinc-700 mb-2 block">Animal Sex</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="sex" type="radio"/>
<div className="flex items-center justify-center gap-2 py-2.5 px-3 border border-zinc-200 rounded-lg bg-white text-zinc-500 hover:bg-zinc-50 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-all">
<span className="iconify" data-icon="lucide:move-right" data-rotate="315" data-width="14"></span>
<span className="text-xs font-medium">Male</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="sex" type="radio"/>
<div className="flex items-center justify-center gap-2 py-2.5 px-3 border border-zinc-200 rounded-lg bg-white text-zinc-500 hover:bg-zinc-50 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-all">
<span className="iconify" data-icon="lucide:move-down" data-width="14"></span>
<span className="text-xs font-medium">Female</span>
</div>
</label>
</div>
</div>

<div className="flex items-center justify-between p-3 border border-zinc-200 rounded-lg bg-white">
<span className="text-xs font-medium text-zinc-700">Neutered / Spayed?</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
</label>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">Photo Evidence</label>
<div className="relative w-full h-32 border-2 border-dashed border-zinc-300 rounded-xl bg-zinc-50 hover:bg-zinc-100 transition-colors flex flex-col items-center justify-center cursor-pointer group overflow-hidden" onclick="document.getElementById('file-upload').click()">
<input accept="image/*" className="hidden" id="file-upload" onchange="handleFileSelect(this)" type="file"/>
<div className="flex flex-col items-center" id="upload-placeholder">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
<span className="iconify text-zinc-500" data-icon="lucide:camera" data-width="16"></span>
</div>
<span className="text-[10px] text-zinc-500 font-medium">Tap to capture</span>
</div>
<img className="hidden absolute inset-0 w-full h-full object-cover" id="preview-img" />
<button className="hidden absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 backdrop-blur-sm" id="remove-img" onclick="event.stopPropagation(); removeImage();" type="button">
<span className="iconify" data-icon="lucide:x" data-width="12"></span>
</button>
</img></div>
</div>
</div>

<div className="mt-auto pt-6 flex gap-3">
<button className="hidden w-1/3 py-3 border border-zinc-200 text-zinc-700 font-medium text-xs rounded-lg hover:bg-zinc-50 transition-colors" id="btn-back" onclick="changeStep(-1)" type="button">
                            Back
                        </button>
<button className="w-full py-3 bg-zinc-900 text-white font-medium text-xs rounded-lg shadow-sm hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" id="btn-next" onclick="changeStep(1)" type="button">
                            Next Step
                        </button>
<button className="hidden w-full py-3 bg-emerald-600 text-white font-medium text-xs rounded-lg shadow-sm hover:bg-emerald-700 transition-colors items-center justify-center gap-2" id="btn-save" type="submit">
<span className="iconify" data-icon="lucide:check-circle" data-width="16"></span> Save Record
                        </button>
</div>
</form>
</div>
</main>

<nav className="bg-white border-t border-zinc-200 absolute bottom-0 w-full px-6 py-2 pb-6 z-30 flex justify-around">
<button className="nav-item flex flex-col items-center space-y-1 p-2 text-zinc-900 group" id="nav-search" onclick="switchTab('search')">
<div className="relative">
<span className="iconify transition-transform group-hover:-translate-y-0.5" data-icon="lucide:search" data-width="24"></span>
</div>
<span className="text-[10px] font-medium tracking-wide">Search</span>
</button>
<div className="w-px h-8 bg-zinc-100 self-center"></div>
<button className="nav-item flex flex-col items-center space-y-1 p-2 text-zinc-400 hover:text-zinc-600 transition-colors group" id="nav-record" onclick="switchTab('new-record')">
<div className="relative">
<span className="iconify transition-transform group-hover:-translate-y-0.5" data-icon="lucide:file-plus-2" data-width="24"></span>
</div>
<span className="text-[10px] font-medium tracking-wide">Record</span>
</button>
</nav>

<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 z-50 transition-all duration-300 transform -translate-y-20 opacity-0 w-11/12 max-w-sm" id="toast">
<span className="iconify text-emerald-400" data-icon="lucide:check-circle-2" data-width="20"></span>
<div>
<h4 className="text-xs font-semibold">Success</h4>
<p className="text-[10px] text-zinc-300">Record saved to database.</p>
</div>
</div>
</div>


    </>
  );
}
