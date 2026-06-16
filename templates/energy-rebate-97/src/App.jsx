import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // FAQ Toggle Logic
        function toggleFaq(element) {
            const content = element.querySelector('div:last-child');
            const icon = element.querySelector('svg:last-child');
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        }

        // Form Step Logic
        let currentStep = 1;
        let memberCount = 0;

        function updateProgress(step) {
            const bar = document.getElementById('progress-bar');
            // 3 steps total
            const percent = (step / 3) * 100;
            bar.style.width = Math.min(percent, 100) + '%';
        }

        function nextStep(step) {
            const currentDiv = document.getElementById(`step-${currentStep}`);
            const nextDiv = document.getElementById(`step-${step}`);
            
            if (currentDiv && nextDiv) {
                currentDiv.classList.add('hidden');
                nextDiv.classList.remove('hidden');
                
                currentStep = step;
                updateProgress(step);
                
                const formSection = document.getElementById('application-form');
                formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        function prevStep(step) {
            const currentDiv = document.getElementById(`step-${currentStep}`);
            const prevDiv = document.getElementById(`step-${step}`);
            
            if (currentDiv && prevDiv) {
                currentDiv.classList.add('hidden');
                prevDiv.classList.remove('hidden');
                
                currentStep = step;
                updateProgress(step);
            }
        }

        // Household Member Logic
        function createMemberHTML(id) {
            return `
                <div class="bg-white rounded-xl border border-[#A6B6BC]/30 p-6 relative shadow-sm hover:border-[#A6B6BC]/50 transition-all" id="member-${id}">
                    <div class="flex justify-between items-center mb-4">
                        <h5 class="text-lg font-semibold text-[#10364F] font-manrope">Household Member #${id + 1}</h5>
                        ${id > 0 ? `<button type="button" onclick="removeMember(${id})" class="text-[#A6B6BC] hover:text-red-500 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>` : ''}
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div class="md:col-span-5">
                            <label class="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">First Name</label>
                            <input type="text" class="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10">
                        </div>
                         <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">M.I.</label>
                            <input type="text" maxlength="1" class="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10">
                        </div>
                        <div class="md:col-span-5">
                            <label class="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">Last Name</label>
                            <input type="text" class="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10">
                        </div>
                        <div class="md:col-span-12">
                            <label class="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">Birthdate (MM/DD/YYYY)</label>
                            <input type="date" class="w-full md:w-1/2 rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10">
                        </div>
                    </div>
                </div>
            `;
        }

        function addHouseholdMember() {
            const container = document.getElementById('household-members-container');
            const div = document.createElement('div');
            div.innerHTML = createMemberHTML(memberCount);
            container.appendChild(div.firstElementChild);
            memberCount++;
            lucide.createIcons(); // Refresh icons for delete button
        }

        function removeMember(id) {
            const element = document.getElementById(`member-${id}`);
            if (element) {
                element.remove();
            }
        }

        // Initialize with one member (The Applicant)
        document.addEventListener('DOMContentLoaded', () => {
             addHouseholdMember(); 
             // Pre-fill the first member title as "Applicant (Head of Household)" for clarity? 
             // The prompt just says "list all members starting with yourself".
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 w-full border-b border-[#A6B6BC]/20 bg-[#FEFEFE]/90 backdrop-blur-md">
<div className="flex lg:px-8 h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex gap-4 items-center">
<img alt="FreePanels.Energy Logo" className="hover:opacity-90 transition-opacity w-auto h-20 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1dd54e14-fea4-4d9e-9583-5f6147674612_800w.png"/>
<div className="flex flex-col justify-center">
</div>
</div>
<a className="hidden rounded-full bg-[#FA690A] px-6 py-2.5 text-sm font-medium shadow-md shadow-[#FA690A]/20 transition-transform hover:scale-105 hover:bg-[#e35d05] md:inline-block text-white font-sans" href="#application-form">
                Start Application
            </a>
</div>
</header>
<main className="">

<section className="overflow-hidden lg:pt-24 lg:pb-32 pt-12 pb-20 relative">

<div className="-top-40 -right-40 blur-[100px] bg-[#FA690A] opacity-5 w-[600px] h-[600px] rounded-full absolute pointer-events-none"></div>
<div className="absolute top-1/2 left-[-100px] h-64 w-64 -translate-y-1/2 rounded-full bg-[#10364F] blur-[80px] opacity-10 pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-2 lg:items-center gap-x-16 gap-y-16">

<div className="relative z-10 max-w-2xl">
<div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#10364F]/5 px-4 py-1.5 text-xs font-semibold text-[#10364F] border border-[#10364F]/10 font-sans">
<span className="flex h-2 w-2 rounded-full bg-[#FA690A] animate-pulse"></span>
                            Colorado HEAR Program Application
                        </div>
<h1 className="text-5xl tracking-tight text-[#10364F] leading-[1.1] sm:text-6xl mb-6 font-manrope font-semibold">
                            Get a <span className="text-[#FA690A] decoration-[#FA690A]/30 underline decoration-4 underline-offset-4 font-manrope font-semibold">Free</span> Electrical Panel Upgrade.
                        </h1>
<p className="text-xl text-[#10364F]/70 leading-relaxed mb-10 font-normal font-sans">
                            Complete the official Colorado HEAR Program application below. Many families qualify for a new electrical panel at $0 out of pocket.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="inline-flex justify-center items-center gap-2 rounded-full bg-[#FA690A] px-8 py-4 text-lg font-medium shadow-xl shadow-[#FA690A]/25 transition-all hover:bg-[#e35d05] hover:-translate-y-1 text-white font-sans" href="#application-form">
                                Start Application
                                <svg className="lucide lucide-arrow-right h-5 w-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-[#A6B6BC]">
<div className="flex items-center gap-2 text-[#10364F] font-sans">
<svg className="lucide lucide-check-circle h-5 w-5 text-[#FA690A]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                Licensed CO Electricians
                            </div>
<div className="flex items-center gap-2 text-[#10364F] font-sans">
<svg className="lucide lucide-zap h-5 w-5 text-[#FA690A] fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                                Official Process
                            </div>
</div>
</div>

<div className="relative z-10 lg:ml-12 mt-12 lg:mt-0">
<div className="aspect-[1.1/1] w-full max-w-lg mr-auto ml-auto relative">

<div className="absolute inset-0 bg-gradient-to-tr from-[#A6B6BC]/20 to-[#FA690A]/10 rounded-full blur-3xl transform scale-90 -z-10">
</div>

<div className="absolute top-[52%] right-[-8%] animate-float z-10">
<div className="glass-bubble h-12 w-36 rounded-full transition-transform hover:scale-105"></div>
</div>
<div className="absolute top-[18%] left-[-4%] animate-float-delayed z-10">
<div className="glass-bubble transition-transform hover:scale-105 w-32 h-12 rounded-full"></div>
</div>
<div className="absolute top-[12%] right-[2%] animate-float-slow z-10">
<div className="glass-bubble h-12 w-32 rounded-full transition-transform hover:scale-105"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F8FA] pt-24 pb-24" id="application-form">
<div className="lg:px-8 max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl tracking-tight text-[#10364F] mb-4 font-manrope font-semibold">HEAR Program Application</h2>
<p className="text-lg text-[#10364F]/70 font-sans">Please complete all fields accurately.</p>
</div>
<div className="rounded-3xl border border-[#A6B6BC]/20 shadow-xl shadow-[#10364F]/5 overflow-hidden relative min-h-[600px] bg-white">

<div className="absolute top-0 left-0 w-full h-1.5 bg-[#A6B6BC]/20">
<div className="h-full bg-[#FA690A] transition-all duration-500 ease-in-out" id="progress-bar" style={{width: '33%'}}></div>
</div>

<div className="p-8 md:p-14">
<form className="" id="intake-form" onsubmit="event.preventDefault()">

<div className="step-content fade-enter-active" id="step-1">
<div className="flex items-center gap-4 mb-8">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#10364F] text-white font-semibold font-manrope">1</div>
<h3 className="text-2xl text-[#10364F] font-manrope font-semibold">Household Information</h3>
</div>
<div className="space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-[#10364F] mb-2 font-sans">Applicant First Name</label>
<input className="w-full rounded-xl border border-[#A6B6BC]/30 bg-[#FEFEFE] px-4 py-3.5 text-[#10364F] outline-none transition-all placeholder:text-[#A6B6BC]/50 focus:border-[#FA690A] focus:ring-4 focus:ring-[#FA690A]/5" placeholder="Jane" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-[#10364F] mb-2 font-sans">Applicant Last Name</label>
<input className="w-full rounded-xl border border-[#A6B6BC]/30 bg-[#FEFEFE] px-4 py-3.5 text-[#10364F] outline-none transition-all placeholder:text-[#A6B6BC]/50 focus:border-[#FA690A] focus:ring-4 focus:ring-[#FA690A]/5" placeholder="Doe" required="" type="text"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-[#10364F] mb-2 font-sans">Applicant Phone Number</label>
<input className="w-full rounded-xl border border-[#A6B6BC]/30 bg-[#FEFEFE] px-4 py-3.5 text-[#10364F] outline-none transition-all placeholder:text-[#A6B6BC]/50 focus:border-[#FA690A] focus:ring-4 focus:ring-[#FA690A]/5" placeholder="(___) ___-____" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-semibold text-[#10364F] mb-2 font-sans">Applicant Email</label>
<input className="w-full rounded-xl border border-[#A6B6BC]/30 bg-[#FEFEFE] px-4 py-3.5 text-[#10364F] outline-none transition-all placeholder:text-[#A6B6BC]/50 focus:border-[#FA690A] focus:ring-4 focus:ring-[#FA690A]/5" placeholder="jane@example.com" required="" type="email"/>
</div>
</div>

<div>
<label className="block text-sm font-semibold text-[#10364F] mb-2 font-sans">Size of Household</label>
<input className="w-full md:w-1/3 rounded-xl border border-[#A6B6BC]/30 bg-[#FEFEFE] px-4 py-3.5 text-[#10364F] outline-none transition-all focus:border-[#FA690A] focus:ring-4 focus:ring-[#FA690A]/5" min="1" required="" type="number"/>
<p className="mt-2 text-sm text-[#10364F]/60 font-sans">Enter how many people live with you, including yourself.</p>
</div>

<div className="bg-[#F5F8FA] p-6 rounded-2xl border border-[#A6B6BC]/20">
<h4 className="text-lg font-semibold text-[#10364F] mb-4 font-manrope">Project Address</h4>
<p className="text-sm text-[#10364F]/60 mb-4 font-sans">Provide the address of the home or apartment where the work will be done.</p>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">Address Line 1</label>
<input className="w-full rounded-xl border border-[#A6B6BC]/30 bg-white px-4 py-3 text-[#10364F] outline-none transition-all focus:border-[#FA690A] focus:ring-4 focus:ring-[#FA690A]/5" placeholder="123 Main St" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">Address Line 2 (Optional)</label>
<input className="w-full rounded-xl border border-[#A6B6BC]/30 bg-white px-4 py-3 text-[#10364F] outline-none transition-all focus:border-[#FA690A] focus:ring-4 focus:ring-[#FA690A]/5" placeholder="Apt 4B" type="text"/>
<p className="mt-1.5 text-xs text-[#FA690A] font-sans">Please be sure and enter Address Line 2 (if applicable), i.e., Unit #, Apt #</p>
</div>
<div>
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">County of Project</label>
<div className="relative">
<select className="w-full rounded-xl border border-[#A6B6BC]/30 bg-white px-4 py-3 text-[#10364F] outline-none transition-all focus:border-[#FA690A] focus:ring-4 focus:ring-[#FA690A]/5 appearance-none">
<option disabled="" selected="" value="">Select County...</option>
<option>Adams</option><option>Alamosa</option><option>Arapahoe</option><option>Archuleta</option><option>Baca</option><option>Bent</option><option>Boulder</option><option>Broomfield</option><option>Chaffee</option><option>Cheyenne</option><option>Clear Creek</option><option>Conejos</option><option>Costilla</option><option>Crowley</option><option>Custer</option><option>Delta</option><option>Denver</option><option>Dolores</option><option>Douglas</option><option>Eagle</option><option>Elbert</option><option>El Paso</option><option>Fremont</option><option>Garfield</option><option>Gilpin</option><option>Grand</option><option>Gunnison</option><option>Hinsdale</option><option>Huerfano</option><option>Jackson</option><option>Jefferson</option><option>Kiowa</option><option>Kit Carson</option><option>Lake</option><option>La Plata</option><option>Larimer</option><option>Las Animas</option><option>Lincoln</option><option>Logan</option><option>Mesa</option><option>Mineral</option><option>Moffat</option><option>Montezuma</option><option>Montrose</option><option>Morgan</option><option>Otero</option><option>Ouray</option><option>Park</option><option>Phillips</option><option>Pitkin</option><option>Prowers</option><option>Pueblo</option><option>Rio Blanco</option><option>Rio Grande</option><option>Routt</option><option>Saguache</option><option>San Juan</option><option>San Miguel</option><option>Sedgwick</option><option>Summit</option><option>Teller</option><option>Washington</option><option>Weld</option><option>Yuma</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#10364F]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<label className="block text-sm font-semibold text-[#10364F] mb-3 font-sans">Do you own or rent the home or apartment where the work will be done?</label>
<div className="flex gap-4">
<label className="flex-1 cursor-pointer group relative">
<input className="peer sr-only" name="ownership" type="radio" value="own"/>
<div className="rounded-xl border border-[#A6B6BC]/30 p-4 text-center transition-all peer-checked:border-[#FA690A] peer-checked:bg-[#FA690A]/5 peer-checked:text-[#FA690A] hover:border-[#A6B6BC]/60 bg-white">
<span className="font-medium font-sans">Homeowner</span>
</div>
</label>
<label className="flex-1 cursor-pointer group relative">
<input className="peer sr-only" name="ownership" type="radio" value="rent"/>
<div className="rounded-xl border border-[#A6B6BC]/30 p-4 text-center transition-all peer-checked:border-[#FA690A] peer-checked:bg-[#FA690A]/5 peer-checked:text-[#FA690A] hover:border-[#A6B6BC]/60 bg-white">
<span className="font-medium font-sans">Renter</span>
</div>
</label>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-[#10364F] mb-3 font-sans">Do you live in a manufactured/mobile home?</label>
<div className="flex gap-4">
<label className="flex-1 cursor-pointer group relative">
<input className="peer sr-only" name="mobile_home" type="radio" value="yes"/>
<div className="rounded-xl border border-[#A6B6BC]/30 p-4 text-center transition-all peer-checked:border-[#FA690A] peer-checked:bg-[#FA690A]/5 peer-checked:text-[#FA690A] hover:border-[#A6B6BC]/60 bg-white">
<span className="font-medium font-sans">Yes</span>
</div>
</label>
<label className="flex-1 cursor-pointer group relative">
<input className="peer sr-only" name="mobile_home" type="radio" value="no"/>
<div className="rounded-xl border border-[#A6B6BC]/30 p-4 text-center transition-all peer-checked:border-[#FA690A] peer-checked:bg-[#FA690A]/5 peer-checked:text-[#FA690A] hover:border-[#A6B6BC]/60 bg-white">
<span className="font-medium font-sans">No</span>
</div>
</label>
</div>
</div>
</div>

<div className="border-t border-[#A6B6BC]/20 pt-8">
<h4 className="text-lg font-semibold text-[#10364F] mb-6 font-manrope">Required Document Uploads</h4>
<div className="space-y-6">

<div className="group">
<label className="block text-sm font-semibold text-[#10364F] mb-2 font-sans">Copy of your Photo ID</label>
<p className="text-xs text-[#10364F]/60 mb-3 font-sans">Upload proof of current and valid ID (e.g., driver’s license, state-issued ID, U.S. passport).</p>
<div className="relative flex items-center justify-center rounded-xl border-2 border-dashed border-[#A6B6BC]/40 p-6 transition-all hover:border-[#FA690A] hover:bg-[#FA690A]/5">
<input accept="image/*,.pdf" className="absolute inset-0 cursor-pointer opacity-0" type="file"/>
<div className="text-center">
<svg className="lucide lucide-upload-cloud mx-auto mb-2 h-8 w-8 text-[#A6B6BC] group-hover:text-[#FA690A]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m16 16-4-4-4 4"></path></svg>
<span className="text-sm font-medium text-[#10364F] group-hover:text-[#FA690A]">Click to upload file</span>
</div>
</div>
</div>

<div className="group">
<label className="block text-sm font-semibold text-[#10364F] mb-2 font-sans">Proof of Homeownership</label>
<p className="text-xs text-[#10364F]/60 mb-3 font-sans">Upload proof of current homeownership (e.g., property deed, mortgage statement, property tax statement).</p>
<div className="relative flex items-center justify-center rounded-xl border-2 border-dashed border-[#A6B6BC]/40 p-6 transition-all hover:border-[#FA690A] hover:bg-[#FA690A]/5">
<input accept="image/*,.pdf" className="absolute inset-0 cursor-pointer opacity-0" type="file"/>
<div className="text-center">
<svg className="lucide lucide-file-check mx-auto mb-2 h-8 w-8 text-[#A6B6BC] group-hover:text-[#FA690A]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4"></path></svg>
<span className="text-sm font-medium text-[#10364F] group-hover:text-[#FA690A]">Click to upload file</span>
</div>
</div>
</div>

<div className="group">
<label className="block text-sm font-semibold text-[#10364F] mb-2 font-sans">Proof of Address</label>
<p className="text-xs text-[#10364F]/60 mb-3 font-sans">Upload proof of address (e.g., recent utility bill, first-class USPS mail, government-issued document).</p>
<div className="relative flex items-center justify-center rounded-xl border-2 border-dashed border-[#A6B6BC]/40 p-6 transition-all hover:border-[#FA690A] hover:bg-[#FA690A]/5">
<input accept="image/*,.pdf" className="absolute inset-0 cursor-pointer opacity-0" type="file"/>
<div className="text-center">
<svg className="lucide lucide-map-pin mx-auto mb-2 h-8 w-8 text-[#A6B6BC] group-hover:text-[#FA690A]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm font-medium text-[#10364F] group-hover:text-[#FA690A]">Click to upload file</span>
</div>
</div>
</div>
</div>
</div>
<button className="w-full rounded-xl bg-[#FA690A] py-4 text-lg font-medium transition-all hover:bg-[#e35d05] shadow-lg shadow-[#FA690A]/20 mt-6 flex justify-center items-center gap-2 text-white font-sans" onclick="nextStep(2)" type="button">
                                        Save &amp; Continue <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="step-content hidden" id="step-2">
<div className="flex items-center gap-4 mb-6">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#10364F] text-white font-semibold font-manrope">2</div>
<h3 className="text-2xl text-[#10364F] font-manrope font-semibold">Household Members</h3>
</div>
<div className="bg-[#FA690A]/5 rounded-xl p-5 border border-[#FA690A]/10 mb-8">
<p className="text-sm text-[#10364F] font-sans leading-relaxed">
<strong>Please list all the members of your household starting with yourself.</strong><br/>
                                        Your household includes people who primarily (more than 50% of the year) live in your home including: Head of household, Spouse or co-head of household, and Other family members (children, dependents, extended family members).<br/>
<span className="text-[#FA690A] text-xs uppercase tracking-wide font-bold mt-2 inline-block">Note: Live-in aides, foster children, and foster adults are NOT counted.</span>
</p>
</div>
<div className="space-y-6 mb-8" id="household-members-container">

<div className="bg-white rounded-xl border border-[#A6B6BC]/30 p-6 relative shadow-sm hover:border-[#A6B6BC]/50 transition-all" id="member-0">
<div className="flex justify-between items-center mb-4">
<h5 className="text-lg font-semibold text-[#10364F] font-manrope">Household Member #1</h5>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
<div className="md:col-span-5">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">First Name</label>
<input className="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" type="text"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">M.I.</label>
<input className="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" maxlength="1" type="text"/>
</div>
<div className="md:col-span-5">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">Last Name</label>
<input className="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" type="text"/>
</div>
<div className="md:col-span-12">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">Birthdate (MM/DD/YYYY)</label>
<input className="w-full md:w-1/2 rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" type="date"/>
</div>
</div>
</div><div className="bg-white rounded-xl border border-[#A6B6BC]/30 p-6 relative shadow-sm hover:border-[#A6B6BC]/50 transition-all" id="member-0">
<div className="flex justify-between items-center mb-4">
<h5 className="text-lg font-semibold text-[#10364F] font-manrope">Household Member #1</h5>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
<div className="md:col-span-5">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">First Name</label>
<input className="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" type="text"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">M.I.</label>
<input className="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" maxlength="1" type="text"/>
</div>
<div className="md:col-span-5">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">Last Name</label>
<input className="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" type="text"/>
</div>
<div className="md:col-span-12">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">Birthdate (MM/DD/YYYY)</label>
<input className="w-full md:w-1/2 rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" type="date"/>
</div>
</div>
</div><div className="bg-white rounded-xl border border-[#A6B6BC]/30 p-6 relative shadow-sm hover:border-[#A6B6BC]/50 transition-all" id="member-0">
<div className="flex justify-between items-center mb-4">
<h5 className="text-lg font-semibold text-[#10364F] font-manrope">Household Member #1</h5>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
<div className="md:col-span-5">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">First Name</label>
<input className="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" type="text"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">M.I.</label>
<input className="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" maxlength="1" type="text"/>
</div>
<div className="md:col-span-5">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">Last Name</label>
<input className="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" type="text"/>
</div>
<div className="md:col-span-12">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">Birthdate (MM/DD/YYYY)</label>
<input className="w-full md:w-1/2 rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" type="date"/>
</div>
</div>
</div><div className="bg-white rounded-xl border border-[#A6B6BC]/30 p-6 relative shadow-sm hover:border-[#A6B6BC]/50 transition-all" id="member-0">
<div className="flex justify-between items-center mb-4">
<h5 className="text-lg font-semibold text-[#10364F] font-manrope">Household Member #1</h5>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
<div className="md:col-span-5">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">First Name</label>
<input className="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" type="text"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">M.I.</label>
<input className="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" maxlength="1" type="text"/>
</div>
<div className="md:col-span-5">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">Last Name</label>
<input className="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" type="text"/>
</div>
<div className="md:col-span-12">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">Birthdate (MM/DD/YYYY)</label>
<input className="w-full md:w-1/2 rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" type="date"/>
</div>
</div>
</div><div className="bg-white rounded-xl border border-[#A6B6BC]/30 p-6 relative shadow-sm hover:border-[#A6B6BC]/50 transition-all" id="member-0">
<div className="flex justify-between items-center mb-4">
<h5 className="text-lg font-semibold text-[#10364F] font-manrope">Household Member #1</h5>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
<div className="md:col-span-5">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">First Name</label>
<input className="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" type="text"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">M.I.</label>
<input className="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" maxlength="1" type="text"/>
</div>
<div className="md:col-span-5">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">Last Name</label>
<input className="w-full rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" type="text"/>
</div>
<div className="md:col-span-12">
<label className="block text-sm font-medium text-[#10364F] mb-1.5 font-sans">Birthdate (MM/DD/YYYY)</label>
<input className="w-full md:w-1/2 rounded-lg border border-[#A6B6BC]/30 bg-[#F5F8FA] px-3 py-2.5 text-[#10364F] outline-none focus:border-[#FA690A] focus:ring-2 focus:ring-[#FA690A]/10" type="date"/>
</div>
</div>
</div></div>
<button className="w-full mb-8 rounded-xl border-2 border-dashed border-[#A6B6BC]/40 py-3 text-[#10364F] font-medium transition-all hover:border-[#FA690A] hover:text-[#FA690A] flex justify-center items-center gap-2 bg-white font-sans" onclick="addHouseholdMember()" type="button">
<svg className="lucide lucide-plus h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                                    Add Another Household Member
                                </button>
<div className="flex gap-4 pt-4 border-t border-[#A6B6BC]/20">
<button className="w-1/3 rounded-xl bg-[#A6B6BC]/10 py-4 text-lg font-medium text-[#10364F] transition-all hover:bg-[#A6B6BC]/20 font-sans" onclick="prevStep(1)" type="button">Back</button>
<button className="w-2/3 rounded-xl bg-[#FA690A] py-4 text-lg font-medium transition-all hover:bg-[#e35d05] shadow-lg shadow-[#FA690A]/20 text-white font-sans" onclick="nextStep(3)" type="button">Save &amp; Continue</button>
</div>
</div>

<div className="step-content hidden" id="step-3">
<div className="flex items-center gap-4 mb-6">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#10364F] text-white font-semibold font-manrope">3</div>
<h3 className="text-2xl text-[#10364F] font-manrope font-semibold">Household Income (Coming Soon)</h3>
</div>
<div className="py-12 text-center border-2 border-dashed border-[#A6B6BC]/30 rounded-2xl bg-[#F5F8FA]">
<div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#A6B6BC]/20 mb-4 text-[#10364F]">
<svg className="lucide lucide-clock h-8 w-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<h4 className="text-xl font-semibold text-[#10364F] mb-2 font-manrope">Feature Under Development</h4>
<p className="text-[#10364F]/60 max-w-md mx-auto font-sans">This section will collect annual household income information. Fields and logic will be added soon.</p>
</div>
<div className="flex gap-4 pt-8">
<button className="w-full rounded-xl bg-[#A6B6BC]/10 py-4 text-lg font-medium text-[#10364F] transition-all hover:bg-[#A6B6BC]/20 font-sans" onclick="prevStep(2)" type="button">Back to Members</button>
</div>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FEFEFE]">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl tracking-tight text-[#10364F] sm:text-4xl font-manrope font-semibold">How the process works</h2>
<p className="mt-4 text-xl text-[#10364F]/70 font-sans">From pre-check to installation, we guide you every step of the way.</p>
</div>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

<div className="group relative rounded-2xl p-8 shadow-sm transition-all hover:shadow-lg border border-[#A6B6BC]/20 hover:border-[#FA690A]/30 bg-white">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FA690A]/10 text-[#FA690A] text-2xl group-hover:bg-[#FA690A] group-hover:text-white transition-colors font-manrope font-semibold">1</div>
<h3 className="mb-3 text-lg font-semibold text-[#10364F] font-sans">Complete Application</h3>
<p className="text-[#10364F]/60 font-sans">Fill out the official HEAR form to verify eligibility.</p>
</div>

<div className="group relative rounded-2xl p-8 shadow-sm transition-all hover:shadow-lg border border-[#A6B6BC]/20 hover:border-[#FA690A]/30 bg-white">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FA690A]/10 text-[#FA690A] text-2xl group-hover:bg-[#FA690A] group-hover:text-white transition-colors font-manrope font-semibold">2</div>
<h3 className="mb-3 text-lg font-semibold text-[#10364F] font-sans">Upload Documents</h3>
<p className="text-[#10364F]/60 font-sans">Provide proof of income and ownership securely.</p>
</div>

<div className="group relative rounded-2xl p-8 shadow-sm transition-all hover:shadow-lg border border-[#A6B6BC]/20 hover:border-[#FA690A]/30 bg-white">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FA690A]/10 text-[#FA690A] text-2xl group-hover:bg-[#FA690A] group-hover:text-white transition-colors font-manrope font-semibold">3</div>
<h3 className="mb-3 text-lg font-semibold text-[#10364F] font-sans">Get Approved</h3>
<p className="text-[#10364F]/60 font-sans">Approvals typically take 3–5 business days.</p>
</div>

<div className="group relative rounded-2xl p-8 shadow-sm transition-all hover:shadow-lg border border-[#A6B6BC]/20 hover:border-[#FA690A]/30 bg-white">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FA690A]/10 text-[#FA690A] text-2xl group-hover:bg-[#FA690A] group-hover:text-white transition-colors font-manrope font-semibold">4</div>
<h3 className="mb-3 text-lg font-semibold text-[#10364F] font-sans">Choose TKO</h3>
<p className="text-[#10364F]/60 font-sans">Select TKO Electrical as your state-approved contractor.</p>
</div>

<div className="group relative rounded-2xl p-8 shadow-sm transition-all hover:shadow-lg border border-[#A6B6BC]/20 hover:border-[#FA690A]/30 bg-white">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FA690A]/10 text-[#FA690A] text-2xl group-hover:bg-[#FA690A] group-hover:text-white transition-colors font-manrope font-semibold">5</div>
<h3 className="mb-3 text-lg font-semibold text-[#10364F] font-sans">Installation</h3>
<p className="text-[#10364F]/60 font-sans">We handle permits, installation, and cleanup.</p>
</div>

<div className="group relative rounded-2xl p-8 shadow-sm transition-all hover:shadow-lg border border-[#A6B6BC]/20 hover:border-[#FA690A]/30 bg-white">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FA690A]/10 text-[#FA690A] text-2xl group-hover:bg-[#FA690A] group-hover:text-white transition-colors font-manrope font-semibold">6</div>
<h3 className="mb-3 text-lg font-semibold text-[#10364F] font-sans">Enjoy!</h3>
<p className="text-[#10364F]/60 font-sans">Your home is safer and ready for modern appliances.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FEFEFE] border-t border-[#A6B6BC]/20">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl tracking-tight text-[#10364F] sm:text-4xl font-manrope font-semibold">Why Upgrade Your Panel?</h2>
</div>
<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
<div className="flex flex-col items-center text-center">
<div className="mb-6 rounded-2xl bg-[#10364F] p-4 shadow-lg shadow-[#10364F]/20">
<svg className="lucide lucide-trending-up h-8 w-8 text-[#FA690A]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="mb-3 text-lg font-semibold text-[#10364F] font-sans">Increases Home Value</h3>
<p className="text-[#10364F]/60 leading-relaxed font-sans">Modern electrical systems are a major selling point.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="mb-6 rounded-2xl bg-[#10364F] p-4 shadow-lg shadow-[#10364F]/20">
<svg className="lucide lucide-zap h-8 w-8 text-[#FA690A]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="mb-3 text-lg font-semibold text-[#10364F] font-sans">Future Ready</h3>
<p className="text-[#10364F]/60 leading-relaxed font-sans">Ready for EV chargers, heat pumps, and solar.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="mb-6 rounded-2xl bg-[#10364F] p-4 shadow-lg shadow-[#10364F]/20">
<svg className="lucide lucide-shield-check h-8 w-8 text-[#FA690A]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="mb-3 text-lg font-semibold text-[#10364F] font-sans">Family Safety</h3>
<p className="text-[#10364F]/60 leading-relaxed font-sans">Reduces fire risk from outdated breakers.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="mb-6 rounded-2xl bg-[#10364F] p-4 shadow-lg shadow-[#10364F]/20">
<svg className="lucide lucide-washing-machine h-8 w-8 text-[#FA690A]" data-lucide="washing-machine" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h3"></path><path d="M17 6h.01"></path><rect height="20" rx="2" width="18" x="3" y="2"></rect><circle cx="12" cy="13" r="5"></circle><path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"></path></svg>
</div>
<h3 className="mb-3 text-lg font-semibold text-[#10364F] font-sans">Supports Appliances</h3>
<p className="text-[#10364F]/60 leading-relaxed font-sans">Run modern electronics without tripping breakers.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#10364F] overflow-hidden relative text-white">

<div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#FA690A] blur-[150px] opacity-10 pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="grid gap-16 lg:grid-cols-2 items-center">

<div>
<h2 className="text-3xl tracking-tight mb-8 text-white font-manrope font-semibold">Who Qualifies?</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 rounded-full bg-[#FA690A]/20 p-1">
<svg className="lucide lucide-check h-5 w-5 text-[#FA690A]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg text-[#A6B6BC] font-sans">Single-family homes, small multifamily, and manufactured homes.</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 rounded-full bg-[#FA690A]/20 p-1">
<svg className="lucide lucide-check h-5 w-5 text-[#FA690A]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg text-[#A6B6BC] font-sans">Renters (with landlord permission) and homeowners.</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 rounded-full bg-[#FA690A]/20 p-1">
<svg className="lucide lucide-check h-5 w-5 text-[#FA690A]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg text-[#A6B6BC] font-sans">Automatic rebate for SNAP, Medicaid, or LEAP participants.</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 rounded-full bg-[#FA690A]/20 p-1">
<svg className="lucide lucide-check h-5 w-5 text-[#FA690A]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-lg text-[#A6B6BC] font-sans">Households under 80% Area Median Income qualify for full rebates.</span>
</li>
</ul>
</div>

<div className="backdrop-blur-lg rounded-[2rem] p-10 border shadow-2xl bg-white/5 border-white/10">
<div className="flex items-center gap-4 mb-6">
<div className="h-14 w-14 bg-[#FA690A] rounded-xl flex items-center justify-center shadow-lg shadow-[#FA690A]/30">
<svg className="lucide lucide-hammer h-7 w-7 text-white" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
</div>
<div>
<h3 className="text-xl font-bold text-white font-sans">Powered by TKO Electrical</h3>
<p className="text-[#A6B6BC] text-sm tracking-wide uppercase font-semibold font-sans">Serving Colorado Families</p>
</div>
</div>
<p className="text-[#A6B6BC] text-lg mb-8 leading-relaxed font-sans">
                            We are licensed Colorado electricians dedicated to helping families upgrade their homes. We handle the confusing paperwork, inspections, and permits so you don't have to.
                        </p>
<a className="text-[#FA690A] font-bold hover:text-[#e35d05] inline-flex items-center gap-2 transition-colors font-sans" href="#">
                            Learn more about us <svg className="lucide lucide-arrow-right h-5 w-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FEFEFE]">
<div className="mx-auto max-w-3xl px-6 lg:px-8">
<h2 className="text-3xl tracking-tight text-center text-[#10364F] mb-12 font-manrope font-semibold">Common Questions</h2>
<div className="space-y-4">

<div className="group rounded-2xl p-6 shadow-sm border border-[#A6B6BC]/20 cursor-pointer hover:border-[#FA690A]/30 transition-all bg-white" onclick="toggleFaq(this)">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold text-[#10364F] font-sans">Is the panel really free?</h3>
<svg className="lucide lucide-chevron-down h-5 w-5 text-[#A6B6BC] transition-transform group-hover:text-[#FA690A]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="hidden pt-4 text-[#10364F]/70 leading-relaxed font-sans">
                            Yes. The State of Colorado HEAR program covers 100% of the cost for qualified low-to-moderate income households, up to a certain limit which typically covers the entire standard upgrade.
                        </div>
</div>

<div className="group rounded-2xl p-6 shadow-sm border border-[#A6B6BC]/20 cursor-pointer hover:border-[#FA690A]/30 transition-all bg-white" onclick="toggleFaq(this)">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold text-[#10364F] font-sans">How long does approval take?</h3>
<svg className="lucide lucide-chevron-down h-5 w-5 text-[#A6B6BC] transition-transform group-hover:text-[#FA690A]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="hidden pt-4 text-[#10364F]/70 leading-relaxed font-sans">
                            Once you submit your application to the state portal, approvals typically take 3 to 5 business days. We can schedule your installation immediately after approval.
                        </div>
</div>

<div className="group rounded-2xl p-6 shadow-sm border border-[#A6B6BC]/20 cursor-pointer hover:border-[#FA690A]/30 transition-all bg-white" onclick="toggleFaq(this)">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold text-[#10364F] font-sans">Can renters qualify?</h3>
<svg className="lucide lucide-chevron-down h-5 w-5 text-[#A6B6BC] transition-transform group-hover:text-[#FA690A]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="hidden pt-4 text-[#10364F]/70 leading-relaxed font-sans">
                            Yes! Renters can qualify based on their income, but the property owner (landlord) must sign off on the work permitting the upgrade.
                        </div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-[#A6B6BC]/20 py-16 bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">

<img alt="FreePanels.Energy Logo" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" src="default"/>
</div>
<div className="flex flex-col md:flex-row gap-8 text-center text-[#A6B6BC] text-sm font-medium">
<a className="hover:text-[#FA690A] transition-colors font-sans" href="#">support@freepanels.energy</a>
<span className="font-sans">Serving Colorado</span>
<span className="font-sans">© FreePanels.Energy — Powered by TKO Electrical</span>
</div>
</div>
</footer>



    </>
  );
}
