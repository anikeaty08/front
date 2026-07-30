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



        // Global variables
        let currentDate = new Date();
        let selectedDate = null;
        let salaryData = JSON.parse(localStorage.getItem('salaryData')) || {};
        let settings = JSON.parse(localStorage.getItem('salarySettings')) || {
            defaultHourlyRate: 25.00,
            defaultBreakDuration: 30,
            defaultStartTime: '09:00',
            defaultEndTime: '17:00'
        };

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            initializeApp();
        });

        function initializeApp() {
            updateCurrentDate();
            renderCalendar();
            updateStats();
            updateRecentEntries();
            
            // Add event listeners for time inputs
            document.getElementById('startTime').addEventListener('change', calculateTotals);
            document.getElementById('endTime').addEventListener('change', calculateTotals);
            document.getElementById('breakDuration').addEventListener('input', calculateTotals);
            document.getElementById('hourlyRate').addEventListener('input', calculateTotals);
        }

        function updateCurrentDate() {
            const now = new Date();
            const dateString = now.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            document.getElementById('currentDate').textContent = dateString;
        }

        function showView(viewName) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected view
            document.getElementById(viewName).classList.add('active');
            
            // Update navigation links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                link.classList.remove('text-blue-400');
                link.classList.add('text-gray-300');
            });
            
            // Set active nav link
            event.target.classList.add('active');
            event.target.classList.add('text-blue-400');
            event.target.classList.remove('text-gray-300');
            
            // Update calendars if switching to calendar view
            if (viewName === 'calendar') {
                renderFullCalendar();
            }
        }

        function renderCalendar() {
            const calendar = document.getElementById('calendarGrid');
            const monthDisplay = document.getElementById('currentMonth');
            
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            
            monthDisplay.textContent = currentDate.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
            });
            
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            const startDate = new Date(firstDay);
            startDate.setDate(startDate.getDate() - firstDay.getDay());
            
            calendar.innerHTML = '';
            
            for (let i = 0; i < 42; i++) {
                const date = new Date(startDate);
                date.setDate(startDate.getDate() + i);
                
                const dayElement = createDayElement(date, month);
                calendar.appendChild(dayElement);
            }
        }

        function renderFullCalendar() {
            const calendar = document.getElementById('calendarGridFull');
            const monthDisplay = document.getElementById('currentMonthFull');
            
            if (!calendar) return;
            
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            
            monthDisplay.textContent = currentDate.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
            });
            
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            const startDate = new Date(firstDay);
            startDate.setDate(startDate.getDate() - firstDay.getDay());
            
            calendar.innerHTML = '';
            
            for (let i = 0; i < 42; i++) {
                const date = new Date(startDate);
                date.setDate(startDate.getDate() + i);
                
                const dayElement = createDayElement(date, month, true);
                calendar.appendChild(dayElement);
            }
        }

        function createDayElement(date, currentMonth, isFullView = false) {
            const dayElement = document.createElement('div');
            const dateKey = date.toISOString().split('T')[0];
            const dayData = salaryData[dateKey];
            const isCurrentMonth = date.getMonth() === currentMonth;
            const isToday = date.toDateString() === new Date().toDateString();
            
            dayElement.className = `calendar-day rounded-lg p-${isFullView ? '4' : '2'} text-center cursor-pointer transition-all duration-300`;
            
            if (!isCurrentMonth) {
                dayElement.classList.add('opacity-30');
            }
            
            if (isToday) {
                dayElement.classList.add('today');
            }
            
            if (dayData) {
                if (dayData.isDayOff) {
                    dayElement.classList.add('day-off');
                } else {
                    dayElement.classList.add('has-data');
                }
            }
            
            dayElement.innerHTML = `
                <div class="text-white font-medium ${isFullView ? 'text-lg mb-2' : 'text-sm'}">${date.getDate()}</div>
                ${dayData && isFullView ? `
                    <div class="text-xs ${dayData.isDayOff ? 'text-orange-400' : 'text-emerald-400'}">
                        ${dayData.isDayOff ? 'Day Off' : `CHF ${dayData.totalEarnings?.toFixed(2) || '0.00'}`}
                    </div>
                ` : ''}
            `;
            
            dayElement.addEventListener('click', () => openModal(date));
            
            return dayElement;
        }

        function previousMonth() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
            renderFullCalendar();
        }

        function nextMonth() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
            renderFullCalendar();
        }

        function openModal(date) {
            selectedDate = date;
            const dateKey = date.toISOString().split('T')[0];
            const dayData = salaryData[dateKey] || {};
            
            // Update selected date display
            document.getElementById('selectedDateDisplay').textContent = date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Populate form with existing data or defaults
            document.getElementById('startTime').value = dayData.startTime || settings.defaultStartTime;
            document.getElementById('endTime').value = dayData.endTime || settings.defaultEndTime;
            document.getElementById('breakDuration').value = dayData.breakDuration || settings.defaultBreakDuration;
            document.getElementById('hourlyRate').value = dayData.hourlyRate || settings.defaultHourlyRate;
            document.getElementById('notes').value = dayData.notes || '';
            
            // Set day off status
            const isDayOff = dayData.isDayOff || false;
            toggleDayOffDisplay(isDayOff);
            
            // Calculate and display totals
            calculateTotals();
            
            // Show modal
            document.getElementById('entryModal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('entryModal').classList.add('hidden');
            selectedDate = null;
        }

        function toggleDayOff() {
            const checkbox = document.getElementById('dayOffCheckbox');
            const isChecked = checkbox.classList.contains('checked');
            
            if (isChecked) {
                checkbox.classList.remove('checked');
                toggleDayOffDisplay(false);
            } else {
                checkbox.classList.add('checked');
                toggleDayOffDisplay(true);
            }
        }

        function toggleDayOffDisplay(isDayOff) {
            const checkbox = document.getElementById('dayOffCheckbox');
            const workHoursSection = document.getElementById('workHoursSection');
            const dayOffDisplay = document.getElementById('dayOffDisplay');
            
            if (isDayOff) {
                checkbox.classList.add('checked');
                workHoursSection.classList.add('hidden');
                dayOffDisplay.classList.remove('hidden');
            } else {
                checkbox.classList.remove('checked');
                workHoursSection.classList.remove('hidden');
                dayOffDisplay.classList.add('hidden');
            }
        }

        function calculateTotals() {
            const startTime = document.getElementById('startTime').value;
            const endTime = document.getElementById('endTime').value;
            const breakDuration = parseInt(document.getElementById('breakDuration').value) || 0;
            const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
            
            if (!startTime || !endTime) {
                document.getElementById('totalHours').textContent = '0.0h';
                document.getElementById('totalEarnings').textContent = 'CHF 0.00';
                return;
            }
            
            const start = new Date(`2000-01-01T${startTime}:00`);
            const end = new Date(`2000-01-01T${endTime}:00`);
            
            if (end <= start) {
                document.getElementById('totalHours').textContent = '0.0h';
                document.getElementById('totalEarnings').textContent = 'CHF 0.00';
                return;
            }
            
            const workMinutes = (end - start) / (1000 * 60) - breakDuration;
            const workHours = Math.max(0, workMinutes / 60);
            const totalEarnings = workHours * hourlyRate;
            
            document.getElementById('totalHours').textContent = `${workHours.toFixed(1)}h`;
            document.getElementById('totalEarnings').textContent = `CHF ${totalEarnings.toFixed(2)}`;
        }

        function saveEntry() {
            if (!selectedDate) return;
            
            const dateKey = selectedDate.toISOString().split('T')[0];
            const isDayOff = document.getElementById('dayOffCheckbox').classList.contains('checked');
            
            if (isDayOff) {
                salaryData[dateKey] = {
                    isDayOff: true,
                    notes: document.getElementById('notes').value
                };
            } else {
                const startTime = document.getElementById('startTime').value;
                const endTime = document.getElementById('endTime').value;
                const breakDuration = parseInt(document.getElementById('breakDuration').value) || 0;
                const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
                
                const start = new Date(`2000-01-01T${startTime}:00`);
                const end = new Date(`2000-01-01T${endTime}:00`);
                const workMinutes = Math.max(0, (end - start) / (1000 * 60) - breakDuration);
                const workHours = workMinutes / 60;
                const totalEarnings = workHours * hourlyRate;
                
                salaryData[dateKey] = {
                    isDayOff: false,
                    startTime,
                    endTime,
                    breakDuration,
                    hourlyRate,
                    workHours,
                    totalEarnings,
                    notes: document.getElementById('notes').value
                };
            }
            
            localStorage.setItem('salaryData', JSON.stringify(salaryData));
            
            renderCalendar();
            renderFullCalendar();
            updateStats();
            updateRecentEntries();
            closeModal();
        }

        function deleteEntry() {
            if (!selectedDate) return;
            
            const dateKey = selectedDate.toISOString().split('T')[0];
            delete salaryData[dateKey];
            
            localStorage.setItem('salaryData', JSON.stringify(salaryData));
            
            renderCalendar();
            renderFullCalendar();
            updateStats();
            updateRecentEntries();
            closeModal();
        }

        function updateStats() {
            const now = new Date();
            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
            const startOfWeek = new Date(now);
            startOfWeek.setDate(now.getDate() - now.getDay());
            
            let monthlyTotal = 0;
            let weeklyTotal = 0;
            let totalHours = 0;
            let workingDays = 0;
            
            Object.keys(salaryData).forEach(dateKey => {
                const entry = salaryData[dateKey];
                const entryDate = new Date(dateKey);
                
                if (!entry.isDayOff && entry.totalEarnings) {
                    if (entryDate >= startOfMonth) {
                        monthlyTotal += entry.totalEarnings;
                    }
                    if (entryDate >= startOfWeek) {
                        weeklyTotal += entry.totalEarnings;
                    }
                    totalHours += entry.workHours || 0;
                    workingDays++;
                }
            });
            
            const dailyAverage = workingDays > 0 ? monthlyTotal / workingDays : 0;
            
            document.getElementById('monthlyTotal').textContent = `CHF ${monthlyTotal.toFixed(0)}`;
            document.getElementById('weeklyTotal').textContent = `CHF ${weeklyTotal.toFixed(0)}`;
            document.getElementById('dailyAverage').textContent = `CHF ${dailyAverage.toFixed(0)}`;
            document.getElementById('workingDays').textContent = workingDays;
        }

        function updateRecentEntries() {
            const recentEntries = document.getElementById('recentEntries');
            if (!recentEntries) return;
            
            const sortedEntries = Object.keys(salaryData)
                .sort((a, b) => new Date(b) - new Date(a))
                .slice(0, 5);
            
            if (sortedEntries.length === 0) {
                recentEntries.innerHTML = '<div class="text-gray-400 text-center py-4">No entries yet</div>';
                return;
            }
            
            recentEntries.innerHTML = sortedEntries.map(dateKey => {
                const entry = salaryData[dateKey];
                const date = new Date(dateKey);
                const formattedDate = date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                });
                
                return `
                    <div class="glass-inner rounded-lg p-3 flex justify-between items-center">
                        <div>
                            <div class="text-white font-medium">${formattedDate}</div>
                            <div class="text-gray-400 text-sm">
                                ${entry.isDayOff ? 'Day Off' : `${entry.workHours?.toFixed(1) || '0.0'}h worked`}
                            </div>
                        </div>
                        <div class="text-${entry.isDayOff ? 'orange' : 'emerald'}-400 font-semibold">
                            ${entry.isDayOff ? 'OFF' : `CHF ${entry.totalEarnings?.toFixed(2) || '0.00'}`}
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Close modal when clicking outside
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal-overlay')) {
                closeModal();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="gradient-blob"></div>
<div className="gradient-blob"></div>
<div className="gradient-blob"></div>
<div className="gradient-blob"></div>
<div className="gradient-blob"></div>
</div>

<nav className="sticky top-4 z-50 opacity-0 animate-slide-down">
<div className="max-w-7xl mx-auto px-4">
<div className="glass-navbar rounded-2xl px-6 py-4">
<div className="flex items-center justify-between">

<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-xl font-bold text-white">SalaryTracker</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<button className="nav-link text-blue-400 font-medium active" onClick={(e) => { showView('dashboard') }}>Dashboard</button>
<button className="nav-link text-gray-300 font-medium" onClick={(e) => { showView('calendar') }}>Calendar</button>
<button className="nav-link text-gray-300 font-medium" onClick={(e) => { showView('reports') }}>Reports</button>
<button className="nav-link text-gray-300 font-medium" onClick={(e) => { showView('settings') }}>Settings</button>
</div>

<div className="flex items-center space-x-4">
<div className="glass-inner px-3 py-1 rounded-lg">
<span className="text-emerald-400 text-sm font-medium">CHF</span>
</div>
<button className="md:hidden text-gray-300 hover:text-white">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</nav>
<div className="max-w-7xl mx-auto relative z-10 px-4">

<div className="view-section active" id="dashboard">

<div className="text-center py-12 md:py-20">
<div className="opacity-0 animate-fade-in delay-200">
<div className="inline-flex items-center glass-inner px-4 py-2 rounded-full mb-8">
<div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
<span className="text-emerald-400 text-sm font-medium">Data Synced: <span id="currentDate"></span></span>
</div>
</div>
<h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight opacity-0 animate-slide-up delay-300">
<span className="hero-gradient">Track Your</span><br />
<span className="hero-gradient">Salary Journey</span>
</h1>
<p className="text-lg md:text-xl hero-sub-gradient max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-slide-up delay-400">
                    Monitor your daily earnings, track progress, and optimize your income with our beautiful salary tracking dashboard.
                </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 opacity-0 animate-fade-in delay-500">
<div className="glass-card rounded-2xl p-4">
<div className="text-2xl md:text-3xl font-bold text-white mb-1" id="monthlyTotal">CHF 0</div>
<div className="text-gray-400 text-sm">This Month</div>
</div>
<div className="glass-card rounded-2xl p-4">
<div className="text-2xl md:text-3xl font-bold text-white mb-1" id="weeklyTotal">CHF 0</div>
<div className="text-gray-400 text-sm">This Week</div>
</div>
<div className="glass-card rounded-2xl p-4">
<div className="text-2xl md:text-3xl font-bold text-white mb-1" id="dailyAverage">CHF 0</div>
<div className="text-gray-400 text-sm">Daily Avg</div>
</div>
<div className="glass-card rounded-2xl p-4">
<div className="text-2xl md:text-3xl font-bold text-white mb-1" id="workingDays">0</div>
<div className="text-gray-400 text-sm">Working Days</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-20">

<div className="lg:col-span-2 glass-card glass-reflection rounded-3xl p-6 opacity-0 animate-scale-in delay-600">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold text-white tracking-tight">Calendar View</h2>
<div className="flex items-center space-x-2">
<button className="glass-inner p-2 rounded-lg hover:bg-white/10 transition-all" onClick={(e) => { previousMonth() }}>
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<span className="text-white font-medium px-4" id="currentMonth"></span>
<button className="glass-inner p-2 rounded-lg hover:bg-white/10 transition-all" onClick={(e) => { nextMonth() }}>
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-7 gap-2 mb-4">
<div className="text-center text-gray-400 text-sm font-medium py-2">Sun</div>
<div className="text-center text-gray-400 text-sm font-medium py-2">Mon</div>
<div className="text-center text-gray-400 text-sm font-medium py-2">Tue</div>
<div className="text-center text-gray-400 text-sm font-medium py-2">Wed</div>
<div className="text-center text-gray-400 text-sm font-medium py-2">Thu</div>
<div className="text-center text-gray-400 text-sm font-medium py-2">Fri</div>
<div className="text-center text-gray-400 text-sm font-medium py-2">Sat</div>
</div>
<div className="grid grid-cols-7 gap-2" id="calendarGrid">

</div>

<div className="flex items-center justify-center space-x-6 mt-6 text-sm">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-blue-500/30 border border-blue-500/50 rounded"></div>
<span className="text-gray-300">Today</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-emerald-500/30 border border-emerald-500/50 rounded"></div>
<span className="text-gray-300">Work Day</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-orange-500/30 border border-orange-500/50 rounded"></div>
<span className="text-gray-300">Day Off</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-purple-500/30 border border-purple-500/50 rounded"></div>
<span className="text-gray-300">Selected</span>
</div>
</div>
</div>

<div className="space-y-6">
<div className="glass-card glass-reflection rounded-3xl p-6 opacity-0 animate-slide-up delay-700">
<h3 className="text-xl font-semibold text-white mb-4">Recent Entries</h3>
<div className="space-y-3" id="recentEntries">

</div>
</div>
</div>
</div>
</div>

<div className="view-section" id="calendar">
<div className="py-12">
<div className="text-center mb-8">
<h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Calendar Management</h1>
<p className="text-gray-400 text-lg">Full calendar view with detailed day management</p>
</div>
<div className="glass-card rounded-3xl p-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-3xl font-semibold text-white tracking-tight">Full Calendar</h2>
<div className="flex items-center space-x-4">
<button className="glass-inner p-3 rounded-xl hover:bg-white/10 transition-all" onClick={(e) => { previousMonth() }}>
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<span className="text-white font-medium text-xl px-6" id="currentMonthFull"></span>
<button className="glass-inner p-3 rounded-xl hover:bg-white/10 transition-all" onClick={(e) => { nextMonth() }}>
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-7 gap-3 mb-6">
<div className="text-center text-gray-400 text-lg font-medium py-4">Sunday</div>
<div className="text-center text-gray-400 text-lg font-medium py-4">Monday</div>
<div className="text-center text-gray-400 text-lg font-medium py-4">Tuesday</div>
<div className="text-center text-gray-400 text-lg font-medium py-4">Wednesday</div>
<div className="text-center text-gray-400 text-lg font-medium py-4">Thursday</div>
<div className="text-center text-gray-400 text-lg font-medium py-4">Friday</div>
<div className="text-center text-gray-400 text-lg font-medium py-4">Saturday</div>
</div>
<div className="grid grid-cols-7 gap-3" id="calendarGridFull">

</div>

<div className="flex items-center justify-center space-x-8 mt-8 text-lg">
<div className="flex items-center space-x-3">
<div className="w-4 h-4 bg-blue-500/30 border border-blue-500/50 rounded"></div>
<span className="text-gray-300">Today</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-4 h-4 bg-emerald-500/30 border border-emerald-500/50 rounded"></div>
<span className="text-gray-300">Work Day</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-4 h-4 bg-orange-500/30 border border-orange-500/50 rounded"></div>
<span className="text-gray-300">Day Off</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-4 h-4 bg-purple-500/30 border border-purple-500/50 rounded"></div>
<span className="text-gray-300">Selected</span>
</div>
</div>
</div>
</div>
</div>

<div className="view-section" id="reports">
<div className="py-12">
<div className="text-center mb-8">
<h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Reports & Analytics</h1>
<p className="text-gray-400 text-lg">Detailed insights into your earnings and work patterns</p>
</div>
<div className="glass-card rounded-3xl p-8">
<h2 className="text-2xl font-semibold text-white mb-6">Monthly Report</h2>
<div className="text-center py-20">
<div className="text-gray-400 text-lg">Reports feature coming soon...</div>
</div>
</div>
</div>
</div>

<div className="view-section" id="settings">
<div className="py-12">
<div className="text-center mb-8">
<h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Settings</h1>
<p className="text-gray-400 text-lg">Configure your preferences and defaults</p>
</div>
<div className="glass-card rounded-3xl p-8">
<h2 className="text-2xl font-semibold text-white mb-6">Application Settings</h2>
<div className="text-center py-20">
<div className="text-gray-400 text-lg">Settings feature coming soon...</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="entryModal">
<div className="modal-overlay absolute inset-0" onClick={(e) => { closeModal() }}></div>
<div className="flex items-center justify-center min-h-screen p-4">
<div className="modal-content rounded-3xl p-6 w-full max-w-md relative modal-enter">

<div className="flex items-center justify-between mb-6">
<h3 className="text-2xl font-semibold text-white">Day Entry</h3>
<button className="text-gray-400 hover:text-white transition-colors" onClick={(e) => { closeModal() }}>
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>

<div className="glass-inner rounded-xl p-4 mb-6">
<div className="text-center">
<div className="text-gray-400 text-sm mb-1">Selected Date</div>
<div className="text-white font-semibold text-lg" id="selectedDateDisplay"></div>
</div>
</div>

<div className="mb-6">
<div className="flex items-center justify-between glass-inner rounded-xl p-4">
<div className="flex items-center space-x-3">
<div className="custom-checkbox" id="dayOffCheckbox" onClick={(e) => { toggleDayOff() }}></div>
<div>
<div className="text-white font-medium">Day Off</div>
<div className="text-gray-400 text-sm">Mark this day as a day off</div>
</div>
</div>
<div className="text-orange-400 font-semibold" id="dayOffStatus">Off</div>
</div>
</div>

<div className="mb-6" id="workHoursSection">
<h4 className="text-white font-medium mb-4">Work Hours</h4>
<div className="space-y-4">

<div className="glass-inner rounded-xl p-4">
<label className="text-gray-400 text-sm mb-2 block">Start Time</label>
<input className="glass-input w-full px-4 py-2 rounded-lg" id="startTime" type="time" />
</div>

<div className="glass-inner rounded-xl p-4">
<label className="text-gray-400 text-sm mb-2 block">End Time</label>
<input className="glass-input w-full px-4 py-2 rounded-lg" id="endTime" type="time" />
</div>

<div className="glass-inner rounded-xl p-4">
<label className="text-gray-400 text-sm mb-2 block">Break Duration (minutes)</label>
<input className="glass-input w-full px-4 py-2 rounded-lg" id="breakDuration" min="0" placeholder="30" type="number" />
</div>

<div className="glass-inner rounded-xl p-4">
<label className="text-gray-400 text-sm mb-2 block">Hourly Rate (CHF)</label>
<input className="glass-input w-full px-4 py-2 rounded-lg" id="hourlyRate" min="0" placeholder="25.00" step="0.01" type="number" />
</div>
</div>

<div className="mt-6 grid grid-cols-2 gap-4">
<div className="time-display rounded-xl p-4 text-center">
<div className="text-emerald-400 font-semibold text-lg" id="totalHours">0.0h</div>
<div className="text-gray-400 text-sm">Total Hours</div>
</div>
<div className="time-display rounded-xl p-4 text-center">
<div className="text-emerald-400 font-semibold text-lg" id="totalEarnings">CHF 0.00</div>
<div className="text-gray-400 text-sm">Total Earnings</div>
</div>
</div>
</div>

<div className="mb-6 hidden" id="dayOffDisplay">
<div className="day-off-display rounded-xl p-6 text-center">
<div className="text-orange-400 font-semibold text-lg mb-2">Day Off</div>
<div className="text-gray-400 text-sm">No work hours recorded for this day</div>
</div>
</div>

<div className="mb-6">
<h4 className="text-white font-medium mb-4">Notes</h4>
<div className="glass-inner rounded-xl p-4">
<textarea className="glass-input w-full px-4 py-2 rounded-lg resize-none" id="notes" placeholder="Add any notes for this day..." rows="3"></textarea>
</div>
</div>

<div className="flex space-x-4">
<button className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium py-3 px-6 rounded-xl hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 shadow-lg" onClick={(e) => { saveEntry() }}>
                        Save Entry
                    </button>
<button className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium py-3 px-6 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg" onClick={(e) => { deleteEntry() }}>
                        Delete
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
