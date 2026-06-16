import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons();

        // View Switching Logic
        function switchView(viewId) {
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
                setTimeout(() => el.style.display = 'none', 300); // match transition duration
            });
            
            const target = document.getElementById(viewId);
            setTimeout(() => {
                target.style.display = 'block';
                // Trigger reflow
                void target.offsetWidth; 
                target.classList.add('active');
            }, 300);
        }

        function openDateDetails(dateStr, fullDateStr) {
            document.getElementById('selectedDateText').innerText = fullDateStr;
            document.getElementById('headerDateText').innerText = "Tuesday, " + fullDateStr;
            switchView('dateDetailView');
        }

        // Generate Calendar Grid
        const calendarGrid = document.getElementById('calendarGrid');
        const daysInMonth = 31;
        const startDayOffset = 2; // Assuming month starts on Tuesday
        const todayDate = 15; // Set a mock 'today' for the static calendar

        for (let i = 0; i < startDayOffset; i++) {
            calendarGrid.innerHTML += `<div class="border-b border-r border-[#E0E0E0] bg-[#F9FAFA] p-2 opacity-50"></div>`;
        }

        for (let i = 1; i <= daysInMonth; i++) {
            // Simulated data for indicators
            let indicators = '';
            if (i % 3 === 0) indicators += `<div class="w-2 h-2 rounded-full bg-[#1F7A4C]" title="Completed"></div>`;
            if (i % 5 === 0) indicators += `<div class="w-2 h-2 rounded-full bg-[#D6E86C]" title="Pending"></div>`;
            if (i === 12 || i === 25) indicators += `<div class="w-2 h-2 rounded-full bg-[#FF4D8D]" title="Issue"></div>`;
            
            if(!indicators && i < 20) indicators = `<div class="w-2 h-2 rounded-full bg-[#1F7A4C]"></div>`;

            // Check if it's the current date and style the span and cell accordingly
            let isToday = (i === todayDate);
            
            let dateSpan = isToday 
                ? `<div class="w-7 h-7 flex items-center justify-center bg-[#1A1A1A] text-white rounded-full text-sm font-medium shadow-sm">${i}</div>`
                : `<span class="text-sm font-medium text-[#1A1A1A] group-hover:text-[#1F7A4C] transition-colors flex items-center justify-center w-7 h-7">${i}</span>`;

            let cellClass = isToday
                ? `border-b border-r border-[#E0E0E0] bg-[#F9FAFA] p-2 sm:p-3 hover:bg-[#F5F7F6] hover:shadow-inner cursor-pointer transition-all flex flex-col group`
                : `border-b border-r border-[#E0E0E0] bg-white p-2 sm:p-3 hover:bg-[#F5F7F6] hover:shadow-inner cursor-pointer transition-all flex flex-col group`;

            calendarGrid.innerHTML += `
                <div onclick="openDateDetails('${i}', 'March ${i}, 2026')" class="${cellClass}">
                    ${dateSpan}
                    <div class="mt-auto flex gap-1 pt-2">
                        ${indicators}
                    </div>
                </div>
            `;
        }

        // Fill remaining grid to keep square look (5 rows * 7)
        const totalCells = startDayOffset + daysInMonth;
        const remainingCells = 35 - totalCells > 0 ? 35 - totalCells : 42 - totalCells;
        for (let i = 0; i < remainingCells; i++) {
             calendarGrid.innerHTML += `<div class="border-b border-r border-[#E0E0E0] bg-[#F9FAFA] p-2 opacity-50"></div>`;
        }

        // Toast Notification Logic
        function showToast(message) {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = 'bg-white border border-[#E0E0E0] shadow-md rounded-lg p-4 flex items-center gap-3 toast-enter max-w-sm';
            toast.innerHTML = `
                <div class="bg-[#e6f2eb] p-1.5 rounded-full text-[#1F7A4C]">
                    <i data-lucide="check" class="w-4 h-4" stroke-width="2"></i>
                </div>
                <span class="text-sm font-medium text-[#1A1A1A]">${message}</span>
            `;
            container.appendChild(toast);
            lucide.createIcons({ root: toast });

            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(100%)';
                toast.style.transition = 'all 0.3s ease-in';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 bg-white border-b border-[#E0E0E0] shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer" onclick="switchView('calendarView')">
<div className="bg-[#1F7A4C] text-white p-1.5 rounded-md">
<i className="w-5 h-5" data-lucide="dumbbell" strokeWidth="1.5"></i>
</div>
<div>
<h1 className="text-xl font-medium tracking-tight leading-none">YouFit<span className="text-sm uppercase tracking-widest text-[#666666] ml-1 font-light">Gyms</span></h1>
</div>
</div>
<div className="hidden md:flex text-lg font-medium tracking-tight text-[#1A1A1A]">
                Maintenance Dashboard
            </div>
<div className="flex items-center gap-4">
<button className="p-2 text-[#666666] hover:text-[#1A1A1A] hover:bg-[#F5F7F6] rounded-full transition-colors relative">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FF4D8D] rounded-full border border-white"></span>
</button>
<div className="h-8 w-8 rounded-full bg-[#1F7A4C] text-white flex items-center justify-center font-medium text-sm shadow-sm cursor-pointer border border-[#E0E0E0]">
                    AD
                </div>
<button className="hidden sm:flex items-center gap-2 bg-[#1A1A1A] text-white px-4 py-2 rounded-lg hover:bg-[#333333] transition-all shadow-sm font-medium text-sm" onclick="showToast('New entry modal opened')">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
                    Add Entry
                </button>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">



<section className="view-section active" id="calendarView">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<h2 className="text-2xl font-medium tracking-tight">March 2026</h2>
<div className="flex gap-1 border border-[#E0E0E0] rounded-lg p-1 bg-white shadow-sm">
<button className="p-1 hover:bg-[#F5F7F6] rounded-md text-[#666666] transition-colors"><i className="w-4 h-4" data-lucide="chevron-left" strokeWidth="1.5"></i></button>
<button className="p-1 hover:bg-[#F5F7F6] rounded-md text-[#666666] transition-colors"><i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex gap-4 text-sm text-[#666666]">
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#1F7A4C]"></span> Completed</div>
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#D6E86C]"></span> Pending</div>
<div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#FF4D8D]"></span> Issues</div>
</div>
</div>
<div className="bg-white rounded-lg border border-[#E0E0E0] shadow-sm overflow-hidden">

<div className="grid grid-cols-7 border-b border-[#E0E0E0] bg-[#F5F7F6]">
<div className="py-3 text-center text-sm font-medium text-[#666666]">Sun</div>
<div className="py-3 text-center text-sm font-medium text-[#666666]">Mon</div>
<div className="py-3 text-center text-sm font-medium text-[#666666]">Tue</div>
<div className="py-3 text-center text-sm font-medium text-[#666666]">Wed</div>
<div className="py-3 text-center text-sm font-medium text-[#666666]">Thu</div>
<div className="py-3 text-center text-sm font-medium text-[#666666]">Fri</div>
<div className="py-3 text-center text-sm font-medium text-[#666666]">Sat</div>
</div>

<div className="grid grid-cols-7 auto-rows-[120px]" id="calendarGrid">

</div>
</div>
</section>



<section className="view-section" id="dateDetailView">

<div className="mb-6">
<nav className="flex text-sm text-[#666666] mb-3 items-center gap-2">
<a className="hover:text-[#1A1A1A] transition-colors" href="#" onclick="switchView('calendarView')">Home</a>
<i className="w-3 h-3" data-lucide="chevron-right" strokeWidth="1.5"></i>
<a className="hover:text-[#1A1A1A] transition-colors" href="#" onclick="switchView('calendarView')">Calendar</a>
<i className="w-3 h-3" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-[#1A1A1A] font-medium" id="selectedDateText">March 31, 2026</span>
</nav>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h2 className="text-2xl font-medium tracking-tight" id="headerDateText">Tuesday, March 31, 2026</h2>
<div className="flex gap-3">
<button className="flex items-center gap-2 bg-white border border-[#E0E0E0] text-[#1A1A1A] px-4 py-2 rounded-lg hover:bg-[#F5F7F6] transition-all shadow-sm text-sm font-medium" onclick="showToast('Staff form opened')">
<i className="w-4 h-4" data-lucide="user-plus" strokeWidth="1.5"></i>
                            Staff Entry
                        </button>
<button className="flex items-center gap-2 bg-[#1F7A4C] text-white px-4 py-2 rounded-lg hover:bg-[#18613d] transition-all shadow-sm text-sm font-medium" onclick="showToast('New task added')">
<i className="w-4 h-4" data-lucide="plus-circle" strokeWidth="1.5"></i>
                            Add Task
                        </button>
</div>
</div>
</div>
<div className="flex flex-col gap-8">

<div className="bg-white border border-[#E0E0E0] rounded-lg shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-[#E0E0E0] flex items-center justify-between bg-[#F5F7F6]">
<h3 className="text-lg font-medium tracking-tight flex items-center gap-2">
<i className="w-5 h-5 text-[#666666]" data-lucide="users" strokeWidth="1.5"></i>
                            Team Attendance
                        </h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-[#E0E0E0] text-sm text-[#666666] font-medium">
<th className="px-6 py-3 font-medium">Name</th>
<th className="px-6 py-3 font-medium">Role</th>
<th className="px-6 py-3 font-medium">Check-in Time</th>
<th className="px-6 py-3 font-medium">Check-out Time</th>
<th className="px-6 py-3 font-medium">Status</th>
</tr>
</thead>
<tbody className="text-base">
<tr className="border-b border-[#E0E0E0] hover:bg-[#F5F7F6] transition-colors">
<td className="px-6 py-4 font-medium">Marcus Johnson</td>
<td className="px-6 py-4">
<select className="custom-input text-sm w-full max-w-[140px]">
<option>Maintenance Lead</option>
<option>Staff</option>
</select>
</td>
<td className="px-6 py-4"><input className="custom-input text-sm" type="time" value="06:00"/></td>
<td className="px-6 py-4"><input className="custom-input text-sm" type="time" value="14:00"/></td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-[#dcfce7] text-[#166534] border border-[#bbf7d0]">Present</span>
</td>
</tr>
<tr className="hover:bg-[#F5F7F6] transition-colors">
<td className="px-6 py-4 font-medium">Sarah Williams</td>
<td className="px-6 py-4">
<select className="custom-input text-sm w-full max-w-[140px]">
<option>Staff</option>
<option>Maintenance Lead</option>
</select>
</td>
<td className="px-6 py-4"><input className="custom-input text-sm" type="time" value="14:00"/></td>
<td className="px-6 py-4"><input className="custom-input text-sm" type="time"/></td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-[#fef9c3] text-[#854d0e] border border-[#fef08a]">Pending</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div>

<div className="mb-4 flex flex-col md:flex-row justify-between items-end gap-4">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-1">Maintenance Daily Checklist</h3>
<div className="flex items-center gap-6 text-sm">
<div className="flex items-center gap-2">
<span className="text-[#666666]">Team Member:</span>
<input className="border-b border-[#1A1A1A] bg-transparent focus:outline-none focus:border-[#1F7A4C] w-48 px-1" type="text"/>
</div>
<div className="flex items-center gap-2">
<span className="text-[#666666]">Date:</span>
<input className="border-b border-[#1A1A1A] bg-transparent focus:outline-none focus:border-[#1F7A4C] w-48 px-1" type="text" value="March 31, 2026"/>
</div>
</div>
</div>
</div>

<p className="text-[#FF4D8D] italic text-sm text-center font-medium my-3">
                        If only one Maintenance Team Member is working, prioritize tasks based on facility needs—even if listed under a different shift.
                    </p>

<div className="bg-white border border-[#E0E0E0] shadow-sm overflow-x-auto rounded-lg">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>

<tr>
<th className="bg-[#1F7A4C] text-white px-4 py-3 font-medium text-base w-[10%] border-r border-[#18613d]">Shift</th>
<th className="bg-[#1F7A4C] text-white px-4 py-3 font-medium text-base w-[70%] border-r border-[#18613d]">Task</th>
<th className="bg-[#1F7A4C] text-white px-4 py-3 font-medium text-base text-center leading-tight w-[10%] border-r border-[#18613d]">Morning<br/>Shift</th>
<th className="bg-[#1F7A4C] text-white px-4 py-3 font-medium text-base text-center leading-tight w-[10%]">Closing<br/>Shift</th>
</tr>
</thead>
<tbody className="text-base text-[#1A1A1A]">

<tr>
<td className="bg-[#D6E86C] px-4 py-1.5 font-medium text-center border-r border-[#E0E0E0] border-b border-[#E0E0E0]" colspan="2">Priority Walkthrough</td>
<td className="bg-[#D6E86C] px-4 py-1.5 font-medium text-center border-r border-[#E0E0E0] border-b border-[#E0E0E0]">Completed</td>
<td className="bg-[#D6E86C] px-4 py-1.5 font-medium text-center border-b border-[#E0E0E0]">Completed</td>
</tr>
<tr className="zebra-row hover:bg-gray-100/50 transition-colors">
<td className="px-4 py-2 border-r border-b border-[#E0E0E0] text-center">Both</td>
<td className="px-4 py-2 border-r border-b border-[#E0E0E0]">Walk the gym to prioritize tasks and report maintenance issues (lights, leaks, flooring) immediately.</td>
<td className="px-4 py-2 border-r border-b border-[#E0E0E0] text-center"><input className="custom-checkbox mx-auto" onchange="showToast('Task updated')" type="checkbox"/></td>
<td className="px-4 py-2 border-b border-[#E0E0E0] text-center"><input className="custom-checkbox mx-auto" onchange="showToast('Task updated')" type="checkbox"/></td>
</tr>
<tr className="zebra-row hover:bg-gray-100/50 transition-colors">
<td className="px-4 py-2 border-r border-b border-[#E0E0E0] text-center">Both</td>
<td className="px-4 py-2 border-r border-b border-[#E0E0E0]">Check for urgent cleanliness issues, odors, overflowing trash, and empty dispensers.</td>
<td className="px-4 py-2 border-r border-b border-[#E0E0E0] text-center"><input className="custom-checkbox mx-auto" onchange="showToast('Task updated')" type="checkbox"/></td>
<td className="px-4 py-2 border-b border-[#E0E0E0] text-center"><input className="custom-checkbox mx-auto" onchange="showToast('Task updated')" type="checkbox"/></td>
</tr>

<tr>
<td className="bg-[#D6E86C] px-4 py-1.5 font-medium text-center border-r border-[#E0E0E0] border-b border-[#E0E0E0]" colspan="2">Locker Room – Men's &amp; Women's</td>
<td className="bg-[#D6E86C] px-4 py-1.5 font-medium text-center border-r border-[#E0E0E0] border-b border-[#E0E0E0]">Completed</td>
<td className="bg-[#D6E86C] px-4 py-1.5 font-medium text-center border-b border-[#E0E0E0]">Completed</td>
</tr>
<tr className="zebra-row hover:bg-gray-100/50 transition-colors">
<td className="px-4 py-2 border-r border-b border-[#E0E0E0] text-center">Both</td>
<td className="px-4 py-2 border-r border-b border-[#E0E0E0]">Refill dispensers as needed, including soap, body wash, and toilet paper.</td>
<td className="px-4 py-2 border-r border-b border-[#E0E0E0] text-center"><input className="custom-checkbox mx-auto" onchange="showToast('Task updated')" type="checkbox"/></td>
<td className="px-4 py-2 border-b border-[#E0E0E0] text-center"><input className="custom-checkbox mx-auto" onchange="showToast('Task updated')" type="checkbox"/></td>
</tr>
<tr className="zebra-row hover:bg-gray-100/50 transition-colors">
<td className="px-4 py-2 border-r border-b border-[#E0E0E0] text-center">Closing</td>
<td className="px-4 py-2 border-r border-b border-[#E0E0E0]">Dust ceiling vents, emergency lights, and wall-mounted fixtures.</td>
<td className="px-4 py-2 border-r border-b border-[#E0E0E0] text-center"><input className="custom-checkbox mx-auto" disabled="" title="Not applicable for Morning" type="checkbox"/></td>
<td className="px-4 py-2 border-b border-[#E0E0E0] text-center"><input className="custom-checkbox mx-auto" onchange="showToast('Task updated')" type="checkbox"/></td>
</tr>
<tr className="zebra-row hover:bg-gray-100/50 transition-colors">
<td className="px-4 py-2 border-r border-b border-[#E0E0E0] text-center">Both</td>
<td className="px-4 py-2 border-r border-b border-[#E0E0E0]">Spot-clean walls as needed, especially around sinks, hand dryers, and exits.</td>
<td className="px-4 py-2 border-r border-b border-[#E0E0E0] text-center"><input className="custom-checkbox mx-auto" onchange="showToast('Task updated')" type="checkbox"/></td>
<td className="px-4 py-2 border-b border-[#E0E0E0] text-center"><input className="custom-checkbox mx-auto" onchange="showToast('Task updated')" type="checkbox"/></td>
</tr>
<tr className="zebra-row hover:bg-gray-100/50 transition-colors">
<td className="px-4 py-2 border-r border-b border-[#E0E0E0] text-center">Both</td>
<td className="px-4 py-2 border-r border-b border-[#E0E0E0]">Disinfect high-touch surfaces, including door handles, push plates, and ADA rails.</td>
<td className="px-4 py-2 border-r border-b border-[#E0E0E0] text-center"><input className="custom-checkbox mx-auto" onchange="showToast('Task updated')" type="checkbox"/></td>
<td className="px-4 py-2 border-b border-[#E0E0E0] text-center"><input className="custom-checkbox mx-auto" onchange="showToast('Task updated')" type="checkbox"/></td>
</tr>
<tr className="zebra-row hover:bg-gray-100/50 transition-colors">
<td className="px-4 py-2 border-r border-b border-[#E0E0E0] text-center">Both</td>
<td className="px-4 py-2 border-r border-b border-[#E0E0E0]">Wipe all mirrors.</td>
<td className="px-4 py-2 border-r border-b border-[#E0E0E0] text-center"><input className="custom-checkbox mx-auto" onchange="showToast('Task updated')" type="checkbox"/></td>
<td className="px-4 py-2 border-b border-[#E0E0E0] text-center"><input className="custom-checkbox mx-auto" onchange="showToast('Task updated')" type="checkbox"/></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="flex justify-end pt-4 border-t border-[#E0E0E0]">
<button className="flex items-center gap-2 bg-white border border-[#E0E0E0] text-[#1A1A1A] px-4 py-2 rounded-lg hover:bg-[#F5F7F6] transition-all shadow-sm text-sm font-medium mr-3" onclick="showToast('Report Exported')">
<i className="w-4 h-4" data-lucide="download" strokeWidth="1.5"></i>
                        Export Report
                    </button>
<button className="flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-2 rounded-lg hover:bg-[#333333] transition-all shadow-sm text-sm font-medium" onclick="showToast('Changes Saved Successfully')">
                        Save Changes
                    </button>
</div>
</div>
</section>
</main>

<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2" id="toastContainer"></div>


    </>
  );
}
