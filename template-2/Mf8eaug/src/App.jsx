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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', function() {
            const daysContainer = document.getElementById('days-container');
            const monthYearDisplay = document.getElementById('month-year');
            const prevMonthBtn = document.getElementById('prev-month');
            const nextMonthBtn = document.getElementById('next-month');
            const datePicker = document.getElementById('date-picker');
            const monthGrid = document.getElementById('month-grid');
            const currentYearDisplay = document.getElementById('current-year');
            const prevYearBtn = document.getElementById('prev-year');
            const nextYearBtn = document.getElementById('next-year');
            
            let currentDate = new Date();
            let selectedDate = null;
            let viewYear = currentDate.getFullYear();
            
            // Month names
            const monthNames = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            
            // Initialize month grid
            function initMonthGrid() {
                monthGrid.innerHTML = '';
                for (let i = 0; i < 12; i++) {
                    const monthItem = document.createElement('div');
                    monthItem.classList.add('month-item');
                    if (i === currentDate.getMonth() && viewYear === currentDate.getFullYear()) {
                        monthItem.classList.add('active');
                    }
                    monthItem.textContent = monthNames[i].substring(0, 3);
                    monthItem.addEventListener('click', () => {
                        currentDate.setMonth(i);
                        currentDate.setFullYear(viewYear);
                        datePicker.classList.remove('show');
                        renderCalendar();
                    });
                    monthGrid.appendChild(monthItem);
                }
            }
            
            // Event listeners
            prevMonthBtn.addEventListener('click', () => {
                currentDate.setMonth(currentDate.getMonth() - 1);
                renderCalendar();
            });
            
            nextMonthBtn.addEventListener('click', () => {
                currentDate.setMonth(currentDate.getMonth() + 1);
                renderCalendar();
            });
            
            monthYearDisplay.addEventListener('click', (e) => {
                const rect = monthYearDisplay.getBoundingClientRect();
                datePicker.style.top = `${rect.bottom + 10}px`;
                datePicker.style.left = `${rect.left}px`;
                
                viewYear = currentDate.getFullYear();
                currentYearDisplay.textContent = viewYear;
                initMonthGrid();
                
                datePicker.classList.add('show');
                e.stopPropagation();
            });
            
            prevYearBtn.addEventListener('click', () => {
                viewYear--;
                currentYearDisplay.textContent = viewYear;
                initMonthGrid();
            });
            
            nextYearBtn.addEventListener('click', () => {
                viewYear++;
                currentYearDisplay.textContent = viewYear;
                initMonthGrid();
            });
            
            // Close date picker when clicking outside
            document.addEventListener('click', (e) => {
                if (!datePicker.contains(e.target) && e.target !== monthYearDisplay) {
                    datePicker.classList.remove('show');
                }
            });
            
            function renderCalendar() {
                daysContainer.innerHTML = '';
                
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();
                
                // Update month and year display
                monthYearDisplay.textContent = `${monthNames[month]} ${year}`;
                
                // Get first day of month and last day of month
                const firstDayOfMonth = new Date(year, month, 1);
                const lastDayOfMonth = new Date(year, month + 1, 0);
                
                // Get day of week of first day (0-6, 0 is Sunday)
                const firstDayWeekday = firstDayOfMonth.getDay();
                
                // Get total days in month
                const totalDays = lastDayOfMonth.getDate();
                
                // Get days from previous month to fill first row
                const prevMonthLastDay = new Date(year, month, 0).getDate();
                
                // Get today's date for highlighting
                const today = new Date();
                const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year;
                
                // Add days from previous month
                for (let i = firstDayWeekday - 1; i >= 0; i--) {
                    const dayElement = document.createElement('div');
                    dayElement.classList.add('day', 'other-month');
                    dayElement.textContent = prevMonthLastDay - i;
                    
                    // Add click event for days from previous month
                    dayElement.addEventListener('click', () => {
                        const prevMonth = new Date(year, month - 1, prevMonthLastDay - i);
                        selectDate(prevMonth);
                    });
                    
                    daysContainer.appendChild(dayElement);
                }
                
                // Add days of current month
                for (let day = 1; day <= totalDays; day++) {
                    const dayElement = document.createElement('div');
                    dayElement.classList.add('day');
                    dayElement.textContent = day;
                    
                    // Check if this day is today
                    if (isCurrentMonth && day === today.getDate()) {
                        dayElement.classList.add('today');
                    }
                    
                    // Check if this day is selected
                    if (selectedDate && 
                        selectedDate.getDate() === day && 
                        selectedDate.getMonth() === month && 
                        selectedDate.getFullYear() === year) {
                        dayElement.classList.add('selected');
                    }
                    
                    // Add click event
                    dayElement.addEventListener('click', () => {
                        const clickedDate = new Date(year, month, day);
                        selectDate(clickedDate);
                    });
                    
                    daysContainer.appendChild(dayElement);
                }
                
                // Calculate how many days to add from next month
                const totalCells = 42; // 6 rows x 7 days
                const remainingCells = totalCells - (firstDayWeekday + totalDays);
                
                // Add days from next month
                for (let day = 1; day <= remainingCells; day++) {
                    const dayElement = document.createElement('div');
                    dayElement.classList.add('day', 'other-month');
                    dayElement.textContent = day;
                    
                    // Add click event for days from next month
                    dayElement.addEventListener('click', () => {
                        const nextMonth = new Date(year, month + 1, day);
                        selectDate(nextMonth);
                    });
                    
                    daysContainer.appendChild(dayElement);
                }
            }
            
            function selectDate(date) {
                selectedDate = date;
                
                // Update the current month view if selected date is in a different month
                if (date.getMonth() !== currentDate.getMonth() || 
                    date.getFullYear() !== currentDate.getFullYear()) {
                    currentDate = new Date(date);
                    renderCalendar();
                } else {
                    // Just update the selected day highlight
                    const days = daysContainer.querySelectorAll('.day');
                    days.forEach(day => day.classList.remove('selected'));
                    
                    // Find the day element that matches the selected date
                    const dayElements = Array.from(days).filter(day => !day.classList.contains('other-month'));
                    if (dayElements[date.getDate() - 1]) {
                        dayElements[date.getDate() - 1].classList.add('selected');
                    }
                }
            }
            
            // Initial render
            renderCalendar();
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
      
<div className="calendar-container">
<div className="calendar-header">
<div className="nav-btn" id="prev-month">
<svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18L9 12L15 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="month-year" id="month-year">November 2023</div>
<div className="nav-btn" id="next-month">
<svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18L15 12L9 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="weekdays">
<div>SUN</div>
<div>MON</div>
<div>TUE</div>
<div>WED</div>
<div>THU</div>
<div>FRI</div>
<div>SAT</div>
</div>
<div className="days" id="days-container"></div>
</div>

<div className="date-picker-dropdown" id="date-picker">
<div className="month-grid" id="month-grid">

</div>
<div className="year-selector">
<div className="year-nav" id="prev-year">
<svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18L9 12L15 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="current-year" id="current-year">2023</div>
<div className="year-nav" id="next-year">
<svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18L15 12L9 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>


    </>
  );
}
