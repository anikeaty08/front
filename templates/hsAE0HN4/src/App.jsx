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



        // Cities database for autocomplete
        const cities = [
            "New York, USA", "London, UK", "Paris, France", "Tokyo, Japan", "Sydney, Australia", 
            "Dubai, UAE", "Singapore", "Hong Kong", "Berlin, Germany", "Rome, Italy",
            "Madrid, Spain", "Toronto, Canada", "Montreal, Canada", "Vancouver, Canada", "Los Angeles, USA",
            "Chicago, USA", "Miami, USA", "San Francisco, USA", "Amsterdam, Netherlands", "Bangkok, Thailand",
            "Beijing, China", "Shanghai, China", "Mumbai, India", "Delhi, India", "Cairo, Egypt",
            "Cape Town, South Africa", "Moscow, Russia", "Istanbul, Turkey", "Seoul, South Korea", "Mexico City, Mexico"
        ];
        
        // Global variables
        let currentDateType = 'depart';
        let today = new Date();
        let selectedDepartDate = new Date();
        let selectedReturnDate = new Date();
        selectedReturnDate.setDate(today.getDate() + 7);
        
        // Initialize on page load
        document.addEventListener('DOMContentLoaded', function() {
            initYearSelector();
            updateDateDisplay();
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', function(event) {
                const fromAutocomplete = document.getElementById('from-autocomplete');
                const toAutocomplete = document.getElementById('to-autocomplete');
                const fromInput = document.getElementById('from-input');
                const toInput = document.getElementById('to-input');
                
                if (!fromInput.contains(event.target) && !fromAutocomplete.contains(event.target)) {
                    fromAutocomplete.classList.add('hidden');
                }
                
                if (!toInput.contains(event.target) && !toAutocomplete.contains(event.target)) {
                    toAutocomplete.classList.add('hidden');
                }
            });
        });
        
        function updateDateDisplay() {
            document.getElementById('depart-date').textContent = formatDate(selectedDepartDate);
            document.getElementById('return-date').textContent = formatDate(selectedReturnDate);
        }
        
        // Initialize year selector
        function initYearSelector() {
            const yearSelector = document.getElementById('year-selector');
            const currentYear = new Date().getFullYear();
            for (let year = currentYear; year <= currentYear + 5; year++) {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                yearSelector.appendChild(option);
            }
        }
        
        // Toggle trip type
        function toggleTripType(type) {
            const roundtrip = document.getElementById('roundtrip');
            const oneway = document.getElementById('oneway');
            const returnDateContainer = document.getElementById('return-date-container');
            
            if (type === 'round') {
                roundtrip.classList.add('selected');
                oneway.classList.remove('selected');
                returnDateContainer.classList.remove('hidden');
            } else {
                oneway.classList.add('selected');
                roundtrip.classList.remove('selected');
                returnDateContainer.classList.add('hidden');
            }
        }
        
        // Autocomplete for From input
        function handleFromInput(value) {
            const autocomplete = document.getElementById('from-autocomplete');
            if (value.length < 2) {
                autocomplete.classList.add('hidden');
                return;
            }
            
            const matches = cities.filter(city => 
                city.toLowerCase().includes(value.toLowerCase())
            );
            
            renderAutocomplete(autocomplete, matches, 'from');
        }
        
        // Autocomplete for To input
        function handleToInput(value) {
            const autocomplete = document.getElementById('to-autocomplete');
            if (value.length < 2) {
                autocomplete.classList.add('hidden');
                return;
            }
            
            const matches = cities.filter(city => 
                city.toLowerCase().includes(value.toLowerCase())
            );
            
            renderAutocomplete(autocomplete, matches, 'to');
        }
        
        // Render autocomplete results
        function renderAutocomplete(container, matches, type) {
            container.innerHTML = '';
            
            if (matches.length === 0) {
                container.classList.add('hidden');
                return;
            }
            
            matches.slice(0, 5).forEach(city => {
                const item = document.createElement('div');
                item.className = 'autocomplete-item';
                item.textContent = city;
                item.onclick = function() {
                    document.getElementById(`${type}-input`).value = city;
                    container.classList.add('hidden');
                };
                container.appendChild(item);
            });
            
            container.classList.remove('hidden');
        }
        
        // Class dropdown
        function toggleClassDropdown() {
            document.getElementById('classDropdown').classList.toggle('hidden');
        }
        
        function closeClassDropdown() {
            document.getElementById('classDropdown').classList.add('hidden');
        }
        
        function selectClass(className) {
            document.getElementById('selected-class').textContent = className;
            
            // Update radio buttons
            document.querySelectorAll('#classDropdown .radio-circle').forEach(circle => {
                circle.classList.remove('selected');
            });
            
            let id;
            switch(className) {
                case 'Economy': id = 'economy-class'; break;
                case 'Premium Economy': id = 'premium-economy-class'; break;
                case 'Business': id = 'business-class'; break;
                case 'First Class': id = 'first-class'; break;
            }
            
            document.getElementById(id).classList.add('selected');
        }
        
        // Travelers dropdown
        function toggleTravelersDropdown() {
            document.getElementById('travelersDropdown').classList.toggle('hidden');
        }
        
        function closeTravelersDropdown() {
            document.getElementById('travelersDropdown').classList.add('hidden');
            updateTravelersText();
        }
        
        function increaseTravelers() {
            const countElement = document.getElementById('travelers-count');
            let count = parseInt(countElement.textContent);
            if (count < 9) {
                countElement.textContent = count + 1;
            }
        }
        
        function decreaseTravelers() {
            const countElement = document.getElementById('travelers-count');
            let count = parseInt(countElement.textContent);
            if (count > 1) {
                countElement.textContent = count - 1;
            }
        }
        
        function updateTravelersText() {
            const count = document.getElementById('travelers-count').textContent;
            document.getElementById('selected-travelers').textContent = count + (count === '1' ? ' Traveller' : ' Travellers');
        }
        
        // Date picker
        function toggleDatePicker(type) {
            currentDateType = type;
            const datePickerModal = document.getElementById('datePickerModal');
            datePickerModal.classList.toggle('hidden');
            
            // Set current month based on selected date
            const date = type === 'depart' ? selectedDepartDate : selectedReturnDate;
            
            // Update month and year selectors
            document.getElementById('month-selector').value = date.getMonth();
            document.getElementById('year-selector').value = date.getFullYear();
            
            updateCalendar(date.getFullYear(), date.getMonth());
        }
        
        function changeMonth() {
            const monthSelector = document.getElementById('month-selector');
            const yearSelector = document.getElementById('year-selector');
            updateCalendar(parseInt(yearSelector.value), parseInt(monthSelector.value));
        }
        
        function changeYear() {
            const monthSelector = document.getElementById('month-selector');
            const yearSelector = document.getElementById('year-selector');
            updateCalendar(parseInt(yearSelector.value), parseInt(monthSelector.value));
        }
        
        function closeDatePicker() {
            document.getElementById('datePickerModal').classList.add('hidden');
        }
        
        function updateCalendar(year, month) {
            const calendarDays = document.getElementById('calendar-days');
            calendarDays.innerHTML = '';
            
            // Get first day of month and number of days
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            
            // Add empty cells for days before the first day of month
            for (let i = 0; i < firstDay; i++) {
                const emptyCell = document.createElement('div');
                emptyCell.className = 'text-gray-500 text-sm py-2';
                calendarDays.appendChild(emptyCell);
            }
            
            // Add days of month
            for (let day = 1; day <= daysInMonth; day++) {
                const dayCell = document.createElement('div');
                dayCell.className = 'text-white text-sm py-2 cursor-pointer hover:bg-blue-500 hover:bg-opacity-30 rounded-full';
                dayCell.textContent = day;
                
                // Check if this day is selected
                const currentDateObj = new Date(year, month, day);
                const departDateObj = new Date(selectedDepartDate.getFullYear(), selectedDepartDate.getMonth(), selectedDepartDate.getDate());
                const returnDateObj = new Date(selectedReturnDate.getFullYear(), selectedReturnDate.getMonth(), selectedReturnDate.getDate());
                
                if (
                    (currentDateType === 'depart' && currentDateObj.getTime() === departDateObj.getTime()) ||
                    (currentDateType === 'return' && currentDateObj.getTime() === returnDateObj.getTime())
                ) {
                    dayCell.className = 'relative text-sm py-2';
                    dayCell.innerHTML = `
                        <div class="w-8 h-8 bg-blue-500 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <span class="relative z-10 text-white">${day}</span>
                    `;
                }
                
                // Check if date is in the past
                if (currentDateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
                    dayCell.className = 'text-gray-500 text-sm py-2';
                    dayCell.style.cursor = 'not-allowed';
                } else {
                    dayCell.onclick = function() {
                        selectDate(new Date(year, month, day));
                    };
                }
                
                calendarDays.appendChild(dayCell);
            }
        }
        
        function selectDate(newDate) {
            if (currentDateType === 'depart') {
                selectedDepartDate = newDate;
                document.getElementById('depart-date').textContent = formatDate(newDate);
                
                // If return date is before depart date, update return date
                if (selectedReturnDate < selectedDepartDate) {
                    const newReturnDate = new Date(selectedDepartDate);
                    newReturnDate.setDate(newReturnDate.getDate() + 7);
                    selectedReturnDate = newReturnDate;
                    document.getElementById('return-date').textContent = formatDate(newReturnDate);
                }
            } else {
                // Ensure return date is not before depart date
                if (newDate >= selectedDepartDate) {
                    selectedReturnDate = newDate;
                    document.getElementById('return-date').textContent = formatDate(newDate);
                } else {
                    alert('Return date cannot be before departure date');
                }
            }
            
            closeDatePicker();
        }
        
        function formatDate(date) {
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        }
    
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
      
<div className="max-w-xl w-full bg-gray-900 rounded-lg p-5 glass-effect">

<div className="mb-5">
<div className="flex space-x-5">
<div className="flex items-center space-x-2">
<div className="radio-circle selected" id="roundtrip" onclick="toggleTripType('round')"></div>
<span className="text-white">Roundtrip</span>
</div>
<div className="flex items-center space-x-2">
<div className="radio-circle" id="oneway" onclick="toggleTripType('one')"></div>
<span className="text-white">One way</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
<div className="bg-opacity-10 bg-white border border-white border-opacity-10 rounded-lg p-2 flex items-center relative">
<div className="p-2">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="ml-2 flex-grow">
<div className="text-gray-400 text-xs">From</div>
<input className="bg-transparent text-white text-base focus:outline-none w-full" id="from-input" oninput="handleFromInput(this.value)" placeholder="City or Airport" type="text" value=""/>
</div>
<div className="autocomplete hidden" id="from-autocomplete"></div>
</div>
<div className="bg-opacity-10 bg-white border border-white border-opacity-10 rounded-lg p-2 flex items-center relative">
<div className="p-2">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="ml-2 flex-grow">
<div className="text-gray-400 text-xs">To</div>
<input className="bg-transparent text-white text-base focus:outline-none w-full" id="to-input" oninput="handleToInput(this.value)" placeholder="City or Airport" type="text" value=""/>
</div>
<div className="autocomplete hidden" id="to-autocomplete"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
<div className="bg-opacity-10 bg-white border border-white border-opacity-10 rounded-lg p-2 flex items-center cursor-pointer" onclick="toggleDatePicker('depart')">
<div className="p-2">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="ml-2">
<div className="text-gray-400 text-xs">Depart</div>
<div className="text-white text-base" id="depart-date"></div>
</div>
</div>
<div className="bg-opacity-10 bg-white border border-white border-opacity-10 rounded-lg p-2 flex items-center cursor-pointer" id="return-date-container" onclick="toggleDatePicker('return')">
<div className="p-2">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="ml-2">
<div className="text-gray-400 text-xs">Return</div>
<div className="text-white text-base" id="return-date"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
<div className="bg-opacity-10 bg-white border border-white border-opacity-10 rounded-lg p-2 flex items-center cursor-pointer" onclick="toggleClassDropdown()">
<div className="p-2">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="ml-2 flex-grow">
<div className="text-gray-400 text-xs">Class</div>
<div className="text-white text-base" id="selected-class">Economy</div>
</div>
<div className="p-2">
<svg className="h-5 w-5 text-white" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
<div className="bg-opacity-10 bg-white border border-white border-opacity-10 rounded-lg p-2 flex items-center cursor-pointer" onclick="toggleTravelersDropdown()">
<div className="p-2">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="ml-2 flex-grow">
<div className="text-gray-400 text-xs">Travellers</div>
<div className="text-white text-base" id="selected-travelers">1 Traveller</div>
</div>
<div className="p-2">
<svg className="h-5 w-5 text-white" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
</div>
</div>
</div>

<div className="flex justify-center">
<button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300" id="searchBtn">
                Search Flights
            </button>
</div>
</div>

<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 hidden" id="classDropdown">
<div className="bg-gray-900 rounded-lg w-80 glass-effect">
<div className="p-4 border-b border-white border-opacity-10">
<h2 className="text-xl font-medium">Select Class</h2>
</div>
<div className="p-4">
<div className="space-y-3">
<div className="flex items-center cursor-pointer" onclick="selectClass('Economy')">
<div className="radio-circle selected mr-3" id="economy-class"></div>
<span>Economy</span>
</div>
<div className="flex items-center cursor-pointer" onclick="selectClass('Premium Economy')">
<div className="radio-circle mr-3" id="premium-economy-class"></div>
<span>Premium Economy</span>
</div>
<div className="flex items-center cursor-pointer" onclick="selectClass('Business')">
<div className="radio-circle mr-3" id="business-class"></div>
<span>Business</span>
</div>
<div className="flex items-center cursor-pointer" onclick="selectClass('First Class')">
<div className="radio-circle mr-3" id="first-class"></div>
<span>First Class</span>
</div>
</div>
</div>
<div className="p-4 border-t border-white border-opacity-10 flex justify-end">
<button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg" onclick="closeClassDropdown()">Done</button>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 hidden" id="travelersDropdown">
<div className="bg-gray-900 rounded-lg w-80 glass-effect">
<div className="p-4 border-b border-white border-opacity-10">
<h2 className="text-xl font-medium">Select Travelers</h2>
</div>
<div className="p-4">
<div className="flex items-center justify-between mb-4">
<span>Number of Travelers</span>
<div className="flex items-center space-x-3">
<button className="w-8 h-8 rounded-full bg-opacity-10 bg-white border border-white border-opacity-10 flex items-center justify-center" onclick="decreaseTravelers()">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" fill-rule="evenodd"></path>
</svg>
</button>
<span id="travelers-count">1</span>
<button className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center" onclick="increaseTravelers()">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" fill-rule="evenodd"></path>
</svg>
</button>
</div>
</div>
</div>
<div className="p-4 border-t border-white border-opacity-10 flex justify-end">
<button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg" onclick="closeTravelersDropdown()">Done</button>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 hidden" id="datePickerModal">
<div className="bg-gray-900 rounded-lg max-w-md w-full glass-effect p-4">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center space-x-2">
<select className="bg-gray-800 text-white rounded px-2 py-1" id="month-selector" onchange="changeMonth()">
<option value="0">January</option><option value="1">February</option><option value="2">March</option>
<option value="3">April</option><option value="4">May</option><option value="5">June</option>
<option value="6">July</option><option value="7">August</option><option value="8">September</option>
<option value="9">October</option><option value="10">November</option><option value="11">December</option>
</select>
<select className="bg-gray-800 text-white rounded px-2 py-1" id="year-selector" onchange="changeYear()"></select>
</div>
<button className="text-white" onclick="closeDatePicker()">Done</button>
</div>
<div className="grid grid-cols-7 gap-2 text-center mb-2">
<div className="text-gray-400 text-xs">SUN</div><div className="text-gray-400 text-xs">MON</div>
<div className="text-gray-400 text-xs">TUE</div><div className="text-gray-400 text-xs">WED</div>
<div className="text-gray-400 text-xs">THU</div><div className="text-gray-400 text-xs">FRI</div>
<div className="text-gray-400 text-xs">SAT</div>
</div>
<div className="grid grid-cols-7 gap-2 text-center" id="calendar-days"></div>
</div>
</div>


    </>
  );
}
