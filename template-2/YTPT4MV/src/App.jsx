import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}

    try {
      
      // Initialize lucide icons
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();

        const openBtn = document.getElementById('openSidebar');
        const sidebar = document.getElementById('mobileSidebar');
        const overlay = document.getElementById('drawerOverlay');

        function openDrawer() {
          sidebar.classList.remove('-translate-x-full');
          overlay.classList.remove('hidden');
        }
        function closeDrawer() {
          sidebar.classList.add('-translate-x-full');
          overlay.classList.add('hidden');
        }

        openBtn && openBtn.addEventListener('click', openDrawer);
        overlay && overlay.addEventListener('click', closeDrawer);

        // Close on ESC
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') closeDrawer();
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="min-h-screen flex">

<aside className="fixed z-40 inset-y-0 left-0 w-64 bg-white shadow-xl transform -translate-x-full transition-transform duration-200 ease-out lg:hidden" id="mobileSidebar">
<div className="h-full flex flex-col">

<div className="flex items-center gap-2 px-5 h-16 border-b border-gray-100">
<div className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[#007bff]/10 text-[#007bff]">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<div className="text-[18px] font-semibold tracking-tight">WellNest</div>
</div>

<nav className="flex-1 overflow-y-auto px-3 py-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i> Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<i className="w-4 h-4" data-lucide="calendar"></i> Appointments
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm bg-[#007bff]/10 text-[#007bff]" href="#">
<i className="w-4 h-4" data-lucide="users"></i> Patients
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<i className="w-4 h-4" data-lucide="stethoscope"></i> Doctors
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<i className="w-4 h-4" data-lucide="sections"></i> Departments
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<i className="w-4 h-4" data-lucide="clock-8"></i> Doctors' Schedule
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<i className="w-4 h-4" data-lucide="credit-card"></i> Payments
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<i className="w-4 h-4" data-lucide="package"></i> Inventory
            </a>
<a className="flex items-center justify-between gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<span className="inline-flex items-center gap-3">
<i className="w-4 h-4" data-lucide="message-square"></i> Messages
              </span>
<span className="inline-flex items-center justify-center text-[11px] h-5 px-1.5 rounded-full bg-[#dc3545] text-white">7</span>
</a>
</nav>
<div className="p-4">
<div className="rounded-xl bg-[#0f172a] text-white p-4 relative overflow-hidden">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="relative">
<div className="text-sm font-medium">Unlock New Features</div>
<div className="text-xs text-white/80 mt-1">Maximize efficiency</div>
<div className="mt-3 flex gap-2">
<button className="text-xs px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/15">What’s New?</button>
<button className="text-xs px-2.5 py-1.5 rounded-md bg-[#007bff] hover:bg-[#006ae6]">Upgrade</button>
</div>
</div>
</div>
</div>
</div>
</aside>

<aside className="hidden lg:flex w-64 min-h-screen bg-white shadow-sm flex-col">
<div className="flex items-center gap-2 px-5 h-16 border-b border-gray-100">
<div className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[#007bff]/10 text-[#007bff]">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<div className="text-[18px] font-semibold tracking-tight">WellNest</div>
</div>
<nav className="flex-1 overflow-y-auto px-3 py-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i> Dashboard
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<i className="w-4 h-4" data-lucide="calendar"></i> Appointments
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm bg-[#007bff]/10 text-[#007bff]" href="#">
<i className="w-4 h-4" data-lucide="users"></i> Patients
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<i className="w-4 h-4" data-lucide="stethoscope"></i> Doctors
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<i className="w-4 h-4" data-lucide="sections"></i> Departments
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<i className="w-4 h-4" data-lucide="clock-8"></i> Doctors' Schedule
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<i className="w-4 h-4" data-lucide="credit-card"></i> Payments
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<i className="w-4 h-4" data-lucide="package"></i> Inventory
          </a>
<a className="flex items-center justify-between gap-3 px-3 py-2 rounded-md text-sm text-[#6c757d] hover:bg-gray-50" href="#">
<span className="inline-flex items-center gap-3">
<i className="w-4 h-4" data-lucide="message-square"></i> Messages
            </span>
<span className="inline-flex items-center justify-center text-[11px] h-5 px-1.5 rounded-full bg-[#dc3545] text-white">7</span>
</a>
</nav>
<div className="p-4">
<div className="rounded-xl bg-[#0f172a] text-white p-4 relative overflow-hidden">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="relative">
<div className="text-sm font-medium">Unlock New Features</div>
<div className="text-xs text-white/80 mt-1">Maximize efficiency</div>
<div className="mt-3 flex gap-2">
<button className="text-xs px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/15">What’s New?</button>
<button className="text-xs px-2.5 py-1.5 rounded-md bg-[#007bff] hover:bg-[#006ae6]">Upgrade</button>
</div>
</div>
</div>
</div>
</aside>

<div className="flex-1 min-w-0 flex">

<main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-4 lg:py-6">

<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<button className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 bg-white" id="openSidebar">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<button className="inline-flex items-center gap-2 text-sm text-[#6c757d] hover:text-[#212529]">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
                Back to Patient List
              </button>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<div className="hidden sm:flex items-center gap-2">
<div className="relative">
<i className="w-4 h-4 text-[#6c757d] absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="pl-9 pr-3 h-9 rounded-md border border-gray-200 bg-white text-sm placeholder:text-[#6c757d] focus:outline-none focus:ring-2 focus:ring-[#007bff]/30 focus:border-[#007bff]" placeholder="Search..." type="text" />
</div>
</div>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 bg-white">
<i className="w-4.5 h-4.5" data-lucide="settings"></i>
</button>
<button className="relative inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 bg-white">
<i className="w-4.5 h-4.5" data-lucide="bell"></i>
<span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#007bff]"></span>
</button>
<div className="hidden sm:flex items-center gap-3">
<img alt="User" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=300&auto=format&fit=crop" />
<span className="text-sm text-[#6c757d]">Alfredo Westervelt</span>
</div>
</div>
</div>

<div className="mt-5">
<h1 className="text-[28px] sm:text-[32px] font-semibold tracking-tight">Patient Details</h1>
</div>

<section className="mt-4 bg-white rounded-lg border border-gray-100 shadow-sm p-4 sm:p-5">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="flex items-center gap-4">
<img alt="Patient" className="h-14 w-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=300&auto=format&fit=crop" />
<div>
<div className="flex items-center gap-3">
<div className="text-[18px] sm:text-[20px] font-semibold tracking-tight">Caren G. Simpson</div>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[#28a745]/10 text-[#28a745]">
<span className="h-1.5 w-1.5 rounded-full bg-[#28a745]"></span> Active
                    </span>
</div>
<div className="text-xs text-[#6c757d] mt-0.5">Patient ID: <span className="font-medium">301</span></div>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 bg-white">
<i className="w-4.5 h-4.5" data-lucide="mail"></i>
</button>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 bg-white">
<i className="w-4.5 h-4.5" data-lucide="phone"></i>
</button>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-[#007bff] text-white hover:bg-[#006ae6]">
<i className="w-4 h-4" data-lucide="edit-3"></i>
<span className="text-sm">Edit Data</span>
</button>
</div>
</div>
</section>

<section className="mt-6 grid grid-cols-12 gap-6">

<div className="col-span-12 lg:col-span-4">
<div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 sm:p-5">
<div className="flex items-center justify-between">
<h2 className="text-[18px] font-semibold tracking-tight">Contact Info</h2>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-gray-50">
<i className="w-5 h-5 text-[#6c757d]" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="mt-4 space-y-4 text-sm">
<div>
<div className="text-[#6c757d]">Phone Number</div>
<div className="font-medium mt-1">+1 555-123-4567</div>
</div>
<div>
<div className="text-[#6c757d]">Email</div>
<div className="font-medium mt-1">caren.simpson@example.com</div>
</div>
<div>
<div className="text-[#6c757d]">Address</div>
<div className="font-medium mt-1">123 Maple Street<br />Springfield, IL, USA</div>
</div>
<div className="pt-2 border-t border-gray-100">
<div className="text-[#6c757d]">Emergency Contact</div>
<div className="font-medium mt-1">John Simpson - Brother<br />+1 555-234-5678</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-8 space-y-6">

<div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 sm:p-5">
<div className="flex items-center justify-between">
<h2 className="text-[18px] font-semibold tracking-tight">General Info</h2>
<a className="text-sm text-[#007bff] hover:underline" href="#">View All</a>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
<div className="flex items-center justify-between bg-[#f8f9fa] rounded-md p-3">
<span className="text-[#6c757d]">Gender</span><span className="font-medium">Female</span>
</div>
<div className="flex items-center justify-between bg-[#f8f9fa] rounded-md p-3">
<span className="text-[#6c757d]">Occupation</span><span className="font-medium">Software Engineer</span>
</div>
<div className="flex items-center justify-between bg-[#f8f9fa] rounded-md p-3">
<span className="text-[#6c757d]">Age</span><span className="font-medium">35 years old</span>
</div>
<div className="flex items-center justify-between bg-[#f8f9fa] rounded-md p-3">
<span className="text-[#6c757d]">Insurance</span><span className="font-medium">HealthPlus</span>
</div>
<div className="flex items-center justify-between bg-[#f8f9fa] rounded-md p-3 sm:col-span-2">
<span className="text-[#6c757d]">Date of Birth</span><span className="font-medium">1989-06-15</span>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 sm:p-5">
<div className="flex items-center justify-between">
<h2 className="text-[18px] font-semibold tracking-tight">Patient Notes</h2>
<a className="text-sm text-[#007bff] hover:underline" href="#">View All</a>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-md border border-gray-100 bg-[#f8f9fa] p-3">
<div className="text-xs text-[#6c757d]">Jun 8, 2027, 4:45 PM</div>
<div className="font-medium mt-1">Asthma</div>
<p className="text-sm text-[#6c757d] mt-1.5">Ensure the patient always carries an inhaler and avoids allergy triggers.</p>
</div>
<div className="rounded-md border border-gray-100 bg-[#f8f9fa] p-3">
<div className="text-xs text-[#6c757d]">Apr 9, 2028, 9:15 AM</div>
<div className="font-medium mt-1">Hypertension</div>
<p className="text-sm text-[#6c757d] mt-1.5">Advise light exercise and monitor blood pressure weekly.</p>
</div>
<div className="rounded-md border border-gray-100 bg-[#f8f9fa] p-3">
<div className="text-xs text-[#6c757d]">Oct 10, 2027, 2:30 PM</div>
<div className="font-medium mt-1">Type 2 Diabetes</div>
<p className="text-sm text-[#6c757d] mt-1.5">Monitor blood sugar levels regularly and follow dietary guidance.</p>
</div>
</div>
<div className="mt-4 text-[12px] text-[#6c757d]">Last Updated on <span className="font-medium text-[#212529]">15 Jun 2028, 10:45 AM</span></div>
</div>
</div>

<div className="col-span-12">
<div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 sm:p-5">
<h2 className="text-[18px] font-semibold tracking-tight">Medical Info</h2>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="flex items-center gap-3 rounded-md border border-gray-100 p-3">
<div className="h-9 w-9 rounded-md bg-[#17a2b8]/15 text-[#17a2b8] inline-flex items-center justify-center">
<i className="w-4.5 h-4.5" data-lucide="ruler"></i>
</div>
<div>
<div className="text-xs text-[#6c757d]">Body Height</div>
<div className="font-medium">5 ft 1.5 in</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-md border border-gray-100 p-3">
<div className="h-9 w-9 rounded-md bg-[#17a2b8]/15 text-[#17a2b8] inline-flex items-center justify-center">
<i className="w-4.5 h-4.5" data-lucide="weight"></i>
</div>
<div>
<div className="text-xs text-[#6c757d]">Body Weight</div>
<div className="font-medium">140 lbs</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-md border border-gray-100 p-3">
<div className="h-9 w-9 rounded-md bg-[#17a2b8]/15 text-[#17a2b8] inline-flex items-center justify-center">
<i className="w-4.5 h-4.5" data-lucide="scale"></i>
</div>
<div>
<div className="text-xs text-[#6c757d]">Body Mass Index</div>
<div className="font-medium">135 lbs</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-md border border-gray-100 p-3">
<div className="h-9 w-9 rounded-md bg-[#17a2b8]/15 text-[#17a2b8] inline-flex items-center justify-center">
<i className="w-4.5 h-4.5" data-lucide="heart"></i>
</div>
<div>
<div className="text-xs text-[#6c757d]">Heart Rate</div>
<div className="font-medium">72 bpm</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-md border border-gray-100 p-3">
<div className="h-9 w-9 rounded-md bg-[#17a2b8]/15 text-[#17a2b8] inline-flex items-center justify-center">
<i className="w-4.5 h-4.5" data-lucide="activity-square"></i>
</div>
<div>
<div className="text-xs text-[#6c757d]">Blood Pressure</div>
<div className="font-medium">120/80 mmHg</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-md border border-gray-100 p-3">
<div className="h-9 w-9 rounded-md bg-[#17a2b8]/15 text-[#17a2b8] inline-flex items-center justify-center">
<i className="w-4.5 h-4.5" data-lucide="droplets"></i>
</div>
<div>
<div className="text-xs text-[#6c757d]">Blood Sugar</div>
<div className="font-medium">90 mg/dL</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-md border border-gray-100 p-3">
<div className="h-9 w-9 rounded-md bg-[#17a2b8]/15 text-[#17a2b8] inline-flex items-center justify-center">
<i className="w-4.5 h-4.5" data-lucide="beaker"></i>
</div>
<div>
<div className="text-xs text-[#6c757d]">Cholesterol</div>
<div className="font-medium">180 mg/dL</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-md border border-gray-100 p-3">
<div className="h-9 w-9 rounded-md bg-[#17a2b8]/15 text-[#17a2b8] inline-flex items-center justify-center">
<i className="w-4.5 h-4.5" data-lucide="wind"></i>
</div>
<div>
<div className="text-xs text-[#6c757d]">Respiratory</div>
<div className="font-medium">16 b/m</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-md border border-gray-100 p-3">
<div className="h-9 w-9 rounded-md bg-[#17a2b8]/15 text-[#17a2b8] inline-flex items-center justify-center">
<i className="w-4.5 h-4.5" data-lucide="droplet"></i>
</div>
<div>
<div className="text-xs text-[#6c757d]">Hemoglobin</div>
<div className="font-medium">14 g/dL</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 sm:p-5">
<h3 className="text-[16px] font-semibold tracking-tight">Allergies</h3>
<ul className="mt-3 divide-y divide-gray-100">
<li className="py-2 text-sm">Penicillin</li>
<li className="py-2 text-sm">Latex</li>
<li className="py-2 text-sm">Shellfish</li>
</ul>
</div>
<div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 sm:p-5">
<h3 className="text-[16px] font-semibold tracking-tight">Conditions</h3>
<ul className="mt-3 list-disc pl-5 text-sm space-y-2">
<li>Hypertension</li>
<li>Asthma</li>
<li>Hypothyroidism</li>
</ul>
</div>
<div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 sm:p-5">
<h3 className="text-[16px] font-semibold tracking-tight">Medications</h3>
<ul className="mt-3 list-disc pl-5 text-sm space-y-2">
<li>Lisinopril</li>
<li>Albuterol Inhaler</li>
<li>Levothyroxine</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="mt-8 pb-8-xs text-[#6c757d]">
<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
<span>Copyright © 2024 Peterdraw</span>
<a className="hover:text-[#212529]" href="#">Privacy Policy</a>
<a className="hover:text-[#212529]" href="#">Term and conditions</a>
<a className="hover:text-[#212529]" href="#">Contact</a>
</div>
</footer>
</main>

<aside className="hidden xl:block w-[300px] bg-[#f8f9fa] p-4 lg:p-6 border-l border-gray-200">

<div className="rounded-xl overflow-hidden shadow-sm">
<div className="relative bg-[#0b1220] text-white p-5">
<img alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="relative">
<div className="text-sm opacity-90">WellNest Hospital</div>
<div className="text-[20px] font-semibold tracking-tight mt-0.5">BLUE MEMBER</div>
<div className="mt-4 flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=300&auto=format&fit=crop" />
<div className="text-xs">
<div className="font-medium">Caren G. Simpson</div>
<div className="opacity-80">301 | Valid till 12/31</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 bg-white rounded-lg border border-gray-100 shadow-sm">
<div className="p-4 border-b border-gray-100 flex items-center justify-between">
<h4 className="text-[16px] font-semibold tracking-tight">Health Reports</h4>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-gray-50">
<i className="w-5 h-5 text-[#6c757d]" data-lucide="more-horizontal"></i>
</button>
</div>
<ul className="p-2">
<li className="group flex items-center justify-between p-3 rounded-md hover:bg-gray-50">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-md bg-[#17a2b8]/10 text-[#17a2b8] inline-flex items-center justify-center">
<i className="w-4 h-4" data-lucide="file-text"></i>
</span>
<div>
<div className="text-sm font-medium">blood_test_2024_06_15.pdf</div>
<div className="text-xs text-[#6c757d]">1.45 MB</div>
</div>
</div>
<button className="h-8 w-8 rounded-md border border-gray-200 text-[#6c757d] inline-flex items-center justify-center group-hover:border-gray-300">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</li>
<li className="group flex items-center justify-between p-3 rounded-md hover:bg-gray-50">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-md bg-[#17a2b8]/10 text-[#17a2b8] inline-flex items-center justify-center">
<i className="w-4 h-4" data-lucide="file-text"></i>
</span>
<div>
<div className="text-sm font-medium">cardiac_rpt_28_05_10.pdf</div>
<div className="text-xs text-[#6c757d]">5.60 MB</div>
</div>
</div>
<button className="h-8 w-8 rounded-md border border-gray-200 text-[#6c757d] inline-flex items-center justify-center group-hover:border-gray-300">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</li>
</ul>
</div>

<div className="mt-6 bg-white rounded-lg border border-gray-100 shadow-sm">
<div className="p-4 border-b border-gray-100 flex items-center justify-between">
<h4 className="text-[16px] font-semibold tracking-tight">Appointment</h4>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-gray-50">
<i className="w-5 h-5 text-[#6c757d]" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="p-4">
<div>
<div className="text-xs text-[#6c757d] mb-2">Upcoming</div>
<div className="rounded-md border border-gray-100 p-3">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Routine Check-Up</div>
<span className="text-[11px] px-2 py-0.5 rounded-full bg-[#28a745]/10 text-[#28a745]">Confirmed</span>
</div>
<div className="text-sm font-medium mt-1">Dr. Petra Winsburry</div>
<div className="mt-1 text-xs text-[#6c757d] inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="calendar"></i> Thu, 07 July 2028 — 09:00 AM
                  </div>
</div>
</div>
<div className="mt-4">
<div className="text-xs text-[#6c757d] mb-2">History</div>
<div className="space-y-3">
<div className="rounded-md border border-gray-100 p-3">
<div className="text-sm font-medium">Blood Test</div>
<div className="text-sm text-[#6c757d]">Dr. Emily Smith</div>
<div className="mt-1 text-xs text-[#6c757d] inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="calendar"></i> Tue, 15 June 2028 — 10:00 AM
                    </div>
</div>
<div className="rounded-md border border-gray-100 p-3">
<div className="text-sm font-medium">Cardiac Consultation</div>
<div className="text-sm text-[#6c757d]">Dr. Olivia Martinez</div>
<div className="mt-1 text-xs text-[#6c757d] inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="calendar"></i> Wed, 10 May 2028 — 11:00 AM
                    </div>
</div>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>

<div className="fixed inset-0 bg-black/30 backdrop-blur-[1px] hidden" id="drawerOverlay"></div>


    </>
  );
}
