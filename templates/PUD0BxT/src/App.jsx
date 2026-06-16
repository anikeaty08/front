import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // DOM elements
    const monthYearDisplay = document.getElementById('monthYear');
    const calendarGrid = document.getElementById('calendarGrid');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const todayBtn = document.getElementById('todayBtn');
    const selectedDateDisplay = document.getElementById('selectedDate');
    
    // State variables
    let currentDate = new Date();
    let selectedDate = null;
    
    // Month names
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    
    // Format date as YYYY-MM-DD
    function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    
    // Format date in a more readable format
    function formatDisplayDate(date) {
      const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }
    
    // Generate the calendar for the current month
    function generateCalendar() {
      // Clear previous calendar
      calendarGrid.innerHTML = '';
      
      // Update month and year display
      monthYearDisplay.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
      
      // Get first day of the month
      const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      
      // Get last day of the month
      const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      
      // Get day of week for first day (0 = Sunday, 6 = Saturday)
      const firstDayOfWeek = firstDay.getDay();
      
      // Create empty cells for days before the first day of the month
      for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day empty h-8 flex items-center justify-center';
        calendarGrid.appendChild(emptyDay);
      }
      
      // Create cells for each day of the month
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day h-8 flex items-center justify-center rounded cursor-pointer';
        
        // Check if this day is today
        const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        if (currentDay.getTime() === today.getTime()) {
          dayCell.classList.add('today');
        }
        
        // Check if this day is selected
        if (selectedDate && 
            selectedDate.getDate() === day && 
            selectedDate.getMonth() === currentDate.getMonth() && 
            selectedDate.getFullYear() === currentDate.getFullYear()) {
          dayCell.classList.add('selected', 'bg-indigo-500', 'text-white');
        }
        
        dayCell.textContent = day;
        dayCell.dataset.date = formatDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
        
        // Add click event to select the date
        dayCell.addEventListener('click', function() {
          // Remove selected class from previously selected day
          const prevSelected = document.querySelector('.calendar-day.selected');
          if (prevSelected) {
            prevSelected.classList.remove('selected', 'bg-indigo-500', 'text-white');
          }
          
          // Add selected class to this day
          this.classList.add('selected', 'bg-indigo-500', 'text-white');
          
          // Update selected date
          selectedDate = new Date(this.dataset.date);
          selectedDateDisplay.textContent = formatDisplayDate(selectedDate);
        });
        
        calendarGrid.appendChild(dayCell);
      }
    }
    
    // Navigate to previous month
    prevMonthBtn.addEventListener('click', function() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      generateCalendar();
    });
    
    // Navigate to next month
    nextMonthBtn.addEventListener('click', function() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      generateCalendar();
    });
    
    // Go to today
    todayBtn.addEventListener('click', function() {
      currentDate = new Date();
      generateCalendar();
      
      // Select today
      setTimeout(() => {
        const todayCell = document.querySelector('.calendar-day.today');
        if (todayCell) {
          todayCell.click();
        }
      }, 0);
    });
    
    // Initialize calendar
    generateCalendar();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-72 bg-zinc-900 rounded-lg shadow-xl overflow-hidden border border-zinc-800">

<div className="p-4 border-b border-zinc-800 flex justify-between items-center">
<button className="text-zinc-400 hover:text-zinc-200 p-1" id="prevMonth">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div>
<span className="text-sm font-medium" id="monthYear">June 2023</span>
</div>
<button className="text-zinc-400 hover:text-zinc-200 p-1" id="nextMonth">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="grid grid-cols-7 text-center py-2 border-b border-zinc-800">
<div className="text-zinc-400 text-[10px]">SUN</div>
<div className="text-zinc-400 text-[10px]">MON</div>
<div className="text-zinc-400 text-[10px]">TUE</div>
<div className="text-zinc-400 text-[10px]">WED</div>
<div className="text-zinc-400 text-[10px]">THU</div>
<div className="text-zinc-400 text-[10px]">FRI</div>
<div className="text-zinc-400 text-[10px]">SAT</div>
</div>

<div className="grid grid-cols-7 p-2" id="calendarGrid">

</div>

<div className="p-3 border-t border-zinc-800 flex justify-between items-center">
<button className="text-indigo-400 text-xs hover:text-indigo-300" id="todayBtn">Today</button>
<div className="text-xs text-zinc-400" id="selectedDate">No date selected</div>
</div>
</div>


    </>
  );
}
