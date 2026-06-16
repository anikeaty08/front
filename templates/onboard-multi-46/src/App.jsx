import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });

        const totalPages = 7;
        let currentPage = 0;
        
        // State tracking for each section
        // 0: Not started, 1: In progress, 2: Completed
        const pageStatus = new Array(totalPages).fill(0); 

        // Generate Sidebar Items
        const sidebarNav = document.getElementById('sidebar-nav');
        const sections = document.querySelectorAll('.section-content');
        
        sections.forEach((section, index) => {
            const title = section.getAttribute('data-title');
            
            const item = document.createElement('div');
            item.className = `group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${index === 0 ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`;
            item.onclick = () => goToPage(index);
            item.id = `nav-item-${index}`;
            
            item.innerHTML = `
                <div class="flex items-center gap-3">
                    <span class="text-sm font-medium">${title}</span>
                </div>
                <div class="status-indicator">
                    <div class="w-2 h-2 rounded-full bg-gray-300" title="Not started"></div>
                </div>
            `;
            sidebarNav.appendChild(item);
        });

        // Navigation Logic
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        const progressBar = document.getElementById('progress-bar');

        function updateUI() {
            // Show/Hide Sections
            sections.forEach((sec, idx) => {
                if(idx === currentPage) {
                    sec.classList.add('active');
                } else {
                    sec.classList.remove('active');
                }
            });

            // Update Sidebar Styling
            for (let i = 0; i < totalPages; i++) {
                const navItem = document.getElementById(`nav-item-${i}`);
                if (i === currentPage) {
                    navItem.classList.add('bg-gray-100', 'text-gray-900');
                    navItem.classList.remove('text-gray-500', 'hover:bg-gray-50');
                } else {
                    navItem.classList.remove('bg-gray-100', 'text-gray-900');
                    navItem.classList.add('text-gray-500', 'hover:bg-gray-50');
                }
            }

            // Update Buttons
            prevBtn.disabled = currentPage === 0;
            if (currentPage === totalPages - 1) {
                nextBtn.classList.add('hidden');
                submitBtn.classList.remove('hidden');
            } else {
                nextBtn.classList.remove('hidden');
                submitBtn.classList.add('hidden');
            }

            // Update Global Progress Bar
            const progress = ((currentPage + 1) / totalPages) * 100;
            progressBar.style.width = `${progress}%`;
        }

        function goToPage(index) {
            currentPage = index;
            updateUI();
        }

        prevBtn.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                updateUI();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages - 1) {
                currentPage++;
                updateUI();
            }
        });

        // Status Validation Logic
        function updateSectionStatus(index) {
            const section = document.getElementById(`section-${index}`);
            // Select all inputs that have data-req="true"
            const inputs = section.querySelectorAll('[data-req="true"]');
            let filledCount = 0;
            let totalCount = 0;

            inputs.forEach(input => {
                // Radio buttons share names, so we count groups differently
                if (input.type === 'radio') {
                    const name = input.name;
                    // Only count this group once per loop
                    if(section.querySelector(`input[name="${name}"]:checked`)) {
                        // Check if we already counted this group as filled? 
                        // Simplified: Check if *this* specific radio is checked
                        if(input.checked) filledCount++;
                    }
                    // We need a way to count unique radio groups as 1 total item.
                    // For this demo, let's assume we handle unique names or count individually checked items vs group requirement.
                    // Simpler approach for demo: Just check value length for text/select/area, and checked for radio/checkbox
                } else if (input.type === 'checkbox') {
                    if (input.checked) filledCount++;
                } else {
                    if (input.value.trim() !== '') filledCount++;
                }
            });

            // Correct Logic for counting unique fields
            // Get unique radio group names
            const radioGroups = [...new Set([...section.querySelectorAll('input[type="radio"]')].map(r => r.name))];
            const nonRadioInputs = [...section.querySelectorAll('input:not([type="radio"]), select, textarea')];
            
            const totalFields = nonRadioInputs.length + radioGroups.length;
            
            let currentFilled = 0;
            
            // Check non-radios
            nonRadioInputs.forEach(input => {
                if(input.type === 'checkbox') {
                    if(input.checked) currentFilled++;
                } else {
                    if(input.value.trim() !== '') currentFilled++;
                }
            });

            // Check radio groups
            radioGroups.forEach(name => {
                if(section.querySelector(`input[name="${name}"]:checked`)) currentFilled++;
            });

            // Determine Status
            let status = 0; // Not Started
            if (currentFilled === 0) status = 0;
            else if (currentFilled < totalFields) status = 1; // In Progress
            else status = 2; // Completed

            pageStatus[index] = status;
            renderStatusIndicator(index, status);
        }

        function renderStatusIndicator(index, status) {
            const navItem = document.getElementById(`nav-item-${index}`);
            const indicatorContainer = navItem.querySelector('.status-indicator');
            
            if (status === 0) {
                indicatorContainer.innerHTML = `<div class="w-2 h-2 rounded-full bg-gray-300 ring-2 ring-gray-100" title="Not started"></div>`;
            } else if (status === 1) {
                indicatorContainer.innerHTML = `
                    <div class="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100">
                         <div class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                         <span class="text-[10px] font-semibold text-blue-600 uppercase tracking-wide">In Progress</span>
                    </div>`;
            } else if (status === 2) {
                indicatorContainer.innerHTML = `
                    <div class="flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-white shadow-sm">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>`;
            }
        }

        // Add Event Listeners to all inputs for real-time validation
        document.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('input', (e) => {
                // Find which section this input belongs to
                const section = e.target.closest('section');
                if (section) {
                    const index = parseInt(section.id.replace('section-', ''));
                    updateSectionStatus(index);
                }
            });
             // Also trigger for change (selects/radios)
             input.addEventListener('change', (e) => {
                const section = e.target.closest('section');
                if (section) {
                    const index = parseInt(section.id.replace('section-', ''));
                    updateSectionStatus(index);
                }
            });
        });

        // Initial UI Setup
        updateUI();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-80 bg-white border-r border-gray-200 flex flex-col justify-between h-full shadow-[2px_0_24px_-12px_rgba(0,0,0,0.05)] z-10 hidden md:flex">
<div className="p-8 pb-4">
<div className="flex items-center gap-3 mb-10 text-gray-900">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="text-xl font-semibold tracking-tight">Onboard</span>
</div>
<nav className="space-y-1">

<div className="space-y-2" id="sidebar-nav"></div>
</nav>
</div>
<div className="p-6 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
<i className="w-5 h-5" data-lucide="user"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Guest User</p>
<p className="text-xs text-gray-500">Draft saved just now</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative">

<header className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="layers"></i>
</div>
<span className="font-semibold tracking-tight">Onboard</span>
</div>
<button className="text-gray-500" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</header>

<div className="h-1 bg-gray-100 w-full">
<div className="h-full bg-indigo-600 transition-all duration-500 ease-out w-0" id="progress-bar"></div>
</div>

<div className="flex-1 overflow-y-auto p-6 md:p-12 lg:p-16 flex justify-center">
<div className="w-full max-w-3xl">

<section className="section-content active space-y-8" data-title="Account Details" id="section-0">
<div>
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">Account Details</h1>
<p className="text-lg text-gray-500">Please provide your primary contact information for the workspace.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-base font-medium text-gray-700">First name</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-gray-900 placeholder-gray-400 bg-white shadow-sm" data-req="true" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-base font-medium text-gray-700">Last name</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-gray-900 placeholder-gray-400 bg-white shadow-sm" data-req="true" type="text"/>
</div>
<div className="space-y-2 md:col-span-2">
<label className="block text-base font-medium text-gray-700">Work Email</label>
<div className="relative">
<i className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" data-lucide="mail"></i>
<input className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-gray-900 placeholder-gray-400 bg-white shadow-sm" data-req="true" type="email"/>
</div>
</div>
</div>
</section>

<section className="section-content space-y-8" data-title="Company Profile" id="section-1">
<div>
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">Company Profile</h1>
<p className="text-lg text-gray-500">Tell us about the organization you represent.</p>
</div>
<div className="space-y-6">
<div className="space-y-2">
<label className="block text-base font-medium text-gray-700">Company Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-gray-900 bg-white shadow-sm" data-req="true" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-base font-medium text-gray-700">Website URL</label>
<div className="flex rounded-lg shadow-sm">
<span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">https://</span>
<input className="flex-1 min-w-0 block w-full px-4 py-3 rounded-none rounded-r-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-gray-900" data-req="true" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-base font-medium text-gray-700">Industry</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-gray-900 bg-white shadow-sm appearance-none" data-req="true">
<option disabled="" selected="" value="">Select an industry</option>
<option value="tech">Technology &amp; Software</option>
<option value="finance">Finance &amp; Banking</option>
<option value="health">Healthcare</option>
<option value="retail">Retail &amp; E-commerce</option>
</select>
<i className="absolute right-4 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</section>

<section className="section-content space-y-8" data-title="Team Setup" id="section-2">
<div>
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">Team Size</h1>
<p className="text-lg text-gray-500">How many people will be using this workspace initially?</p>
</div>
<div className="space-y-4">
<label className="relative flex items-center p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-indigo-500 hover:bg-gray-50 transition-all group">
<input className="h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500" data-req="true" name="team_size" type="radio" value="1-10"/>
<div className="ml-4 block">
<span className="block text-base font-semibold text-gray-900">1-10 Employees</span>
<span className="block text-sm text-gray-500 group-hover:text-indigo-600/80">Best for startups and small teams</span>
</div>
</label>
<label className="relative flex items-center p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-indigo-500 hover:bg-gray-50 transition-all group">
<input className="h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500" data-req="true" name="team_size" type="radio" value="11-50"/>
<div className="ml-4 block">
<span className="block text-base font-semibold text-gray-900">11-50 Employees</span>
<span className="block text-sm text-gray-500 group-hover:text-indigo-600/80">Growing businesses scaling up</span>
</div>
</label>
<label className="relative flex items-center p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-indigo-500 hover:bg-gray-50 transition-all group">
<input className="h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500" data-req="true" name="team_size" type="radio" value="50+"/>
<div className="ml-4 block">
<span className="block text-base font-semibold text-gray-900">50+ Employees</span>
<span className="block text-sm text-gray-500 group-hover:text-indigo-600/80">Enterprise grade solutions</span>
</div>
</label>
</div>
</section>

<section className="section-content space-y-8" data-title="Project Goals" id="section-3">
<div>
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">Project Goals</h1>
<p className="text-lg text-gray-500">What are you hoping to achieve with our platform?</p>
</div>
<div className="space-y-6">
<div className="space-y-2">
<label className="block text-base font-medium text-gray-700">Primary Objective</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-gray-900 bg-white shadow-sm" data-req="true" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-base font-medium text-gray-700">Description</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-gray-900 bg-white shadow-sm resize-none" data-req="true" rows="5"></textarea>
</div>
</div>
</section>

<section className="section-content space-y-8" data-title="Budget &amp; Timeline" id="section-4">
<div>
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">Budget &amp; Timeline</h1>
<p className="text-lg text-gray-500">Help us understand your constraints.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-base font-medium text-gray-700">Estimated Budget</label>
<div className="relative">
<span className="absolute left-4 top-3.5 text-gray-500">$</span>
<input className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-gray-900 bg-white shadow-sm" data-req="true" type="number"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-base font-medium text-gray-700">Launch Date</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-gray-900 bg-white shadow-sm" data-req="true" type="date"/>
</div>
</div>
</section>

<section className="section-content space-y-8" data-title="Technical Specs" id="section-5">
<div>
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">Technical Stack</h1>
<p className="text-lg text-gray-500">Select the technologies currently in your stack.</p>
</div>
<div className="grid grid-cols-1 gap-4">
<div className="space-y-2">
<label className="block text-base font-medium text-gray-700">Current Cloud Provider</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-gray-900 bg-white shadow-sm appearance-none" data-req="true">
<option disabled="" selected="" value="">Select provider</option>
<option value="aws">AWS</option>
<option value="gcp">Google Cloud</option>
<option value="azure">Azure</option>
<option value="none">On-Premise / None</option>
</select>
<i className="absolute right-4 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-2">
<label className="block text-base font-medium text-gray-700">Database Type</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-gray-900 bg-white shadow-sm appearance-none" data-req="true">
<option disabled="" selected="" value="">Select database</option>
<option value="sql">PostgreSQL / MySQL</option>
<option value="nosql">MongoDB / DynamoDB</option>
<option value="other">Other</option>
</select>
<i className="absolute right-4 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</section>

<section className="section-content space-y-8" data-title="Review" id="section-6">
<div>
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">Final Review</h1>
<p className="text-lg text-gray-500">Anything else you would like to add before submitting?</p>
</div>
<div className="space-y-6">
<div className="space-y-2">
<label className="block text-base font-medium text-gray-700">Additional Comments</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-gray-900 bg-white shadow-sm resize-none" data-req="true" rows="4"></textarea>
</div>
<div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
<div className="flex h-6 items-center">
<input className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" data-req="true" id="terms" name="terms" type="checkbox"/>
</div>
<div className="text-sm">
<label className="font-medium text-gray-900" htmlFor="terms">I agree to the terms and data policy</label>
<p className="text-gray-500">We will process your data in accordance with our privacy policy.</p>
</div>
</div>
</div>
</section>

<div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center">
<button className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2" id="prev-btn">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back
                    </button>
<button className="px-6 py-2.5 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-shadow shadow-sm hover:shadow-md flex items-center gap-2" id="next-btn">
                        Next <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="hidden px-6 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-shadow shadow-sm hover:shadow-md flex items-center gap-2" id="submit-btn">
                        Complete Setup <i className="w-4 h-4" data-lucide="check"></i>
</button>
</div>
</div>
</div>
</main>


    </>
  );
}
