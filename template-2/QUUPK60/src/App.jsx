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



    let currentWeightUnit = 'kg';

    // Clock
    const updateClock = () => {
      const now = new Date();
      document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    };
    setInterval(updateClock, 1000); updateClock();

    // Photo selection
    function selectPhoto() {
      // In a real app, this would open the camera/gallery
      console.log('Opening photo selector...');
    }

    // Breed suggestions based on species
    const breedSuggestions = {
      'Dog': ['Golden Retriever', 'Labrador Retriever', 'German Shepherd', 'Bulldog', 'Poodle', 'Beagle', 'Mixed Breed'],
      'Cat': ['Domestic Shorthair', 'Persian', 'Maine Coon', 'Ragdoll', 'British Shorthair', 'Siamese', 'Mixed Breed'],
      'Fish': ['Goldfish', 'Betta', 'Guppy', 'Angelfish', 'Neon Tetra', 'Molly'],
      'Small Mammal': ['Guinea Pig', 'Rabbit', 'Hamster (Syrian)', 'Hamster (Dwarf)', 'Rat', 'Mouse'],
      'Bird': ['Budgerigar (Parakeet)', 'Cockatiel', 'Canary', 'Lovebird', 'Conure'],
      'Reptile': ['Bearded Dragon', 'Leopard Gecko', 'Ball Python', 'Corn Snake', 'Crested Gecko'],
      'Horse': ['American Quarter Horse', 'Thoroughbred', 'Arabian', 'Paint Horse', 'Appaloosa']
    };

    // Dropdown functionality
    function toggleDropdown(type) {
      const dropdown = document.getElementById(type + 'Dropdown');
      constbutton = document.getElementById(type + 'Btn');
      
      // Close all other dropdowns
      document.querySelectorAll('[id$="Dropdown"]').forEach(dd => {
        if (dd.id !== type + 'Dropdown') {
          dd.classList.add('hidden');
        }
      });
      
      dropdown.classList.toggle('hidden');
      
      // Update breed options when species is selected
      if (type === 'species') {
        updateBreedOptions();
      }
    }

    function selectOption(type, value) {
      const selected = document.getElementById(type + 'Selected');
      const dropdown = document.getElementById(type + 'Dropdown');
      
      selected.textContent = value;
      selected.classList.remove('text-gray-400');
      selected.classList.add('text-gray-900');
      dropdown.classList.add('hidden');
      
      if (type === 'species') {
        updateBreedOptions();
        // Reset breed selection when species changes
        const breedSelected = document.getElementById('breedSelected');
        breedSelected.textContent = 'Select breed';
        breedSelected.classList.remove('text-gray-900');
        breedSelected.classList.add('text-gray-400');
      }
    }

    function updateBreedOptions() {
      const speciesSelected = document.getElementById('speciesSelected').textContent;
      const breedDropdown = document.getElementById('breedDropdown');
      
      if (speciesSelected === 'Select species') return;
      
      const breeds = breedSuggestions[speciesSelected] || [];
      breedDropdown.innerHTML = '';
      
      breeds.forEach(breed => {
        const li = document.createElement('li');
        li.innerHTML = `<button class="w-full px-4 py-3 text-left hover:bg-orange-50" onclick="selectOption('breed', '${breed}')">${breed}</button>`;
        breedDropdown.appendChild(li);
      });
      
      // Add custom option
      const customLi = document.createElement('li');
      customLi.innerHTML = `<button class="w-full px-4 py-3 text-left hover:bg-orange-50 border-t border-orange-100" onclick="showCustomBreedInput()">Custom breed...</button>`;
      breedDropdown.appendChild(customLi);
    }

    function showCustomBreedInput() {
      const breedBtn = document.getElementById('breedBtn');
      const breedInput = document.getElementById('breedCustomInput');
      const breedDropdown = document.getElementById('breedDropdown');
      
      breedBtn.classList.add('hidden');
      breedInput.classList.remove('hidden');
      breedDropdown.classList.add('hidden');
      breedInput.focus();
      
      breedInput.onblur = function() {
        if (this.value.trim()) {
          const breedSelected = document.getElementById('breedSelected');
          breedSelected.textContent = this.value.trim();
          breedSelected.classList.remove('text-gray-400');
          breedSelected.classList.add('text-gray-900');
        }
        breedBtn.classList.remove('hidden');
        breedInput.classList.add('hidden');
      };
    }

    // Date picker functionality
    function openDatePicker() {
      document.getElementById('hiddenDatePicker').click();
    }

    function updateTextFromPicker() {
      const picker = document.getElementById('hiddenDatePicker');
      const textInput = document.getElementById('birthDateText');
      
      if (picker.value) {
        const date = new Date(picker.value);
        textInput.value = (date.getMonth() + 1).toString().padStart(2, '0') + '/' + 
                         date.getDate().toString().padStart(2, '0') + '/' + 
                         date.getFullYear();
        calculateAge();
      }
    }

    function calculateAge() {
      const birthDateText = document.getElementById('birthDateText').value;
      const ageDisplay = document.getElementById('ageDisplay');
      
      if (!birthDateText) {
        ageDisplay.classList.add('hidden');
        return;
      }
      
      const birthDate = new Date(birthDateText);
      if (isNaN(birthDate.getTime())) {
        ageDisplay.classList.add('hidden');
        return;
      }
      
      const today = new Date();
      const ageInMs = today - birthDate;
      const ageInDays = Math.floor(ageInMs / (1000 * 60 * 60 * 24));
      
      let ageText = '';
      if (ageInDays < 0) {
        ageText = 'Future date';
      } else if (ageInDays < 365) {
        const months = Math.floor(ageInDays / 30);
        const days = ageInDays % 30;
        if (months > 0) {
          ageText = `${months} month${months > 1 ? 's' : ''}`;
          if (days > 0) ageText += ` ${days} day${days > 1 ? 's' : ''}`;
        } else {
          ageText = `${ageInDays} day${ageInDays > 1 ? 's' : ''}`;
        }
      } else {
        const years = Math.floor(ageInDays / 365);
        const months = Math.floor((ageInDays % 365) / 30);
        ageText = `${years} year${years > 1 ? 's' : ''}`;
        if (months > 0) ageText += ` ${months} month${months > 1 ? 's' : ''}`;
      }
      
      ageDisplay.textContent = `Age: ${ageText}`;
      ageDisplay.classList.remove('hidden');
    }

    // Weight conversion
    function toggleWeightUnit(unit) {
      const kgBtn = document.getElementById('kgBtn');
      const lbBtn = document.getElementById('lbBtn');
      const weightInput = document.getElementById('weightInput');
      
      if (currentWeightUnit === unit) return;
      
      // Convert existing value
      const currentValue = parseFloat(weightInput.value);
      if (currentValue > 0) {
        if (unit === 'kg' && currentWeightUnit === 'lb') {
          weightInput.value = (currentValue / 2.205).toFixed(1);
        } else if (unit === 'lb' && currentWeightUnit === 'kg') {
          weightInput.value = (currentValue * 2.205).toFixed(1);
        }
      }
      
      currentWeightUnit = unit;
      
      if (unit === 'kg') {
        kgBtn.classList.add('bg-orange-400', 'text-white');
        kgBtn.classList.remove('text-gray-600', 'hover:text-gray-800');
        lbBtn.classList.remove('bg-orange-400', 'text-white');
        lbBtn.classList.add('text-gray-600', 'hover:text-gray-800');
      } else {
        lbBtn.classList.add('bg-orange-400', 'text-white');
        lbBtn.classList.remove('text-gray-600', 'hover:text-gray-800');
        kgBtn.classList.remove('bg-orange-400', 'text-white');
        kgBtn.classList.add('text-gray-600', 'hover:text-gray-800');
      }
      
      updateWeightDisplay();
    }

    function updateWeightDisplay() {
      const weightInput = document.getElementById('weightInput');
      const weightConversion = document.getElementById('weightConversion');
      const value = parseFloat(weightInput.value);
      
      if (value > 0) {
        let conversionText = '';
        if (currentWeightUnit === 'kg') {
          conversionText = `${(value * 2.205).toFixed(1)} lbs`;
        } else {
          conversionText = `${(value / 2.205).toFixed(1)} kg`;
        }
        weightConversion.textContent = conversionText;
        weightConversion.classList.remove('hidden');
      } else {
        weightConversion.classList.add('hidden');
      }
    }

    // Allergy management
    let allergies = [];

    function showAllergyInput() {
      const allergyInput = document.getElementById('allergyInput');
      allergyInput.classList.remove('hidden');
      allergyInput.focus();
    }

    function hideAllergyInput() {
      const allergyInput = document.getElementById('allergyInput');
      if (!allergyInput.value.trim()) {
        allergyInput.classList.add('hidden');
      }
    }

    function handleAllergyInput(event) {
      if (event.key === 'Enter') {
        const allergyInput = document.getElementById('allergyInput');
        const allergy = allergyInput.value.trim();
        
        if (allergy && !allergies.includes(allergy)) {
          allergies.push(allergy);
          updateAllergyTags();
          allergyInput.value = '';
          allergyInput.classList.add('hidden');
        }
      }
    }

    function updateAllergyTags() {
      const allergyTags = document.getElementById('allergyTags');
      allergyTags.innerHTML = '';
      
      allergies.forEach((allergy, index) => {
        const tag = document.createElement('span');
        tag.className = 'flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm';
        tag.innerHTML = `
          ${allergy}
          <button onclick="removeAllergy(${index})" class="ml-1 hover:bg-red-200 rounded-full p-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          </button>
        `;
        allergyTags.appendChild(tag);
      });
      
      // Add button
      const addBtn = document.createElement('button');
      addBtn.onclick = showAllergyInput;
      addBtn.className = 'flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm hover:bg-orange-200 transition-colors';
      addBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-3 h-3"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
        Add
      `;
      allergyTags.appendChild(addBtn);
    }

    function removeAllergy(index) {
      allergies.splice(index, 1);
      updateAllergyTags();
    }

    // Character counter for notes
    document.querySelector('textarea').addEventListener('input', function() {
      const counter = this.nextElementSibling;
      counter.textContent = `${this.value.length}/2000 characters`;
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('[id$="Btn"]') && !event.target.closest('[id$="Dropdown"]')) {
        document.querySelectorAll('[id$="Dropdown"]').forEach(dd => {
          dd.classList.add('hidden');
        });
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
      

<div className="relative w-[390px] max-w-full h-[844px] bg-gradient-to-b from-[#fff4e8] to-[#ffe6d1] shadow-xl rounded-[40px] overflow-hidden border-4 border-[#ffd7b5] flex flex-col mx-auto">

<div className="absolute left-1/2 -top-1.5 -translate-x-1/2 z-10 flex items-center justify-center" style={{height: `44px`}}>
<div className="w-24 h-4 rounded-b-3xl mt-2 bg-black/10"></div>
</div>

<div className="flex justify-between items-center px-3 py-1 text-xs mt-2 flex-shrink-0">
<span className="font-medium" id="clock">20:11</span>
<div className="flex space-x-1 opacity-80">
<svg className="lucide lucide-signal w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-4 h-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<header className="px-6 py-4 flex items-center justify-between flex-shrink-0">
<div className="flex items-center">
<button aria-label="Back" className="h-9 w-9 flex items-center justify-center rounded-full bg-[#ffe8d8] hover:bg-[#ffd9c0] transition-colors">
<svg className="lucide lucide-chevron-left w-5 h-5 text-orange-500" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h1 className="text-3xl font-semibold tracking-tight ml-3">Add Pet</h1>
</div>
<button aria-label="Settings" className="p-2 hover:bg-[#ffd9c0] rounded-full transition-colors">
<svg className="lucide lucide-settings w-5 h-5 text-orange-500" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</header>

<div className="flex-1 overflow-y-auto">
<main className="px-6 pb-32 space-y-5">

<div className="py-2">
<button aria-label="Add pet photo" className="w-full h-32 rounded-2xl bg-[#fff2e8] border-2 border-dashed border-orange-300 flex items-center justify-center hover:bg-[#ffedd9] hover:border-orange-400 transition-all" onClick={(e) => { selectPhoto() }}>
<div className="flex flex-col items-center space-y-2">
<svg className="lucide lucide-camera w-8 h-8 text-orange-400" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span className="text-sm text-orange-600 font-medium">Tap to add photo</span>
</div>
</button>
</div>

<div>
<label className="text-sm font-medium text-gray-600 mb-2 block">Name *</label>
<input className="w-full h-12 bg-[#fff2e8] rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-orange-400 border border-orange-200" maxlength="100" required type="text" />
</div>

<div className="relative">
<label className="text-sm font-medium text-gray-600 mb-2 block">Sex *</label>
<button aria-haspopup="listbox" className="w-full h-12 bg-[#fff2e8] rounded-xl px-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-400 border border-orange-200" id="sexBtn" onClick={(e) => { toggleDropdown('sex') }}>
<span className="text-gray-400" id="sexSelected">Select sex</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<ul className="absolute z-20 left-0 right-0 bg-white border border-orange-200 rounded-xl shadow-lg mt-2 overflow-hidden hidden" id="sexDropdown" role="listbox">
<li><button className="w-full px-4 py-3 text-left hover:bg-orange-50" onClick={(e) => { selectOption('sex', 'Male') }}>Male</button></li>
<li><button className="w-full px-4 py-3 text-left hover:bg-orange-50" onClick={(e) => { selectOption('sex', 'Female') }}>Female</button></li>
<li><button className="w-full px-4 py-3 text-left hover:bg-orange-50" onClick={(e) => { selectOption('sex', 'Unknown') }}>Unknown</button></li>
</ul>
</div>

<div className="relative">
<label className="text-sm font-medium text-gray-600 mb-2 block">Species *</label>
<button aria-haspopup="listbox" className="w-full h-12 bg-[#fff2e8] rounded-xl px-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-400 border border-orange-200" id="speciesBtn" onClick={(e) => { toggleDropdown('species') }}>
<span className="text-gray-400" id="speciesSelected">Select species</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<ul className="absolute z-20 left-0 right-0 bg-white border border-orange-200 rounded-xl shadow-lg mt-2 overflow-hidden hidden max-h-48 overflow-y-auto" id="speciesDropdown" role="listbox">
<li><button className="w-full px-4 py-3 text-left hover:bg-orange-50" onClick={(e) => { selectOption('species', 'Dog') }}>Dog</button></li>
<li><button className="w-full px-4 py-3 text-left hover:bg-orange-50" onClick={(e) => { selectOption('species', 'Cat') }}>Cat</button></li>
<li><button className="w-full px-4 py-3 text-left hover:bg-orange-50" onClick={(e) => { selectOption('species', 'Fish') }}>Fish</button></li>
<li><button className="w-full px-4 py-3 text-left hover:bg-orange-50" onClick={(e) => { selectOption('species', 'Small Mammal') }}>Small Mammal</button></li>
<li><button className="w-full px-4 py-3 text-left hover:bg-orange-50" onClick={(e) => { selectOption('species', 'Bird') }}>Bird</button></li>
<li><button className="w-full px-4 py-3 text-left hover:bg-orange-50" onClick={(e) => { selectOption('species', 'Reptile') }}>Reptile</button></li>
<li><button className="w-full px-4 py-3 text-left hover:bg-orange-50" onClick={(e) => { selectOption('species', 'Horse') }}>Horse</button></li>
<li><button className="w-full px-4 py-3 text-left hover:bg-orange-50" onClick={(e) => { selectOption('species', 'Other') }}>Other</button></li>
</ul>
</div>

<div className="relative">
<label className="text-sm font-medium text-gray-600 mb-2 block">Breed</label>
<button aria-haspopup="listbox" className="w-full h-12 bg-[#fff2e8] rounded-xl px-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-400 border border-orange-200" id="breedBtn" onClick={(e) => { toggleDropdown('breed') }}>
<span className="text-gray-400" id="breedSelected">Select breed</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<ul className="absolute z-20 left-0 right-0 bg-white border border-orange-200 rounded-xl shadow-lg mt-2 overflow-hidden hidden max-h-48 overflow-y-auto" id="breedDropdown" role="listbox">

</ul>
<input className="w-full h-12 bg-[#fff2e8] rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-orange-400 border border-orange-200 hidden" id="breedCustomInput" placeholder="Enter breed name..." type="text" />
</div>

<div className="">
<label className="text-sm font-medium text-gray-600 mb-2 block">Birth Date <span className="text-gray-400 font-normal">(Approximate)</span></label>
<div className="relative">
<input className="w-full h-12 bg-[#fff2e8] rounded-xl px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-400 border border-orange-200" id="birthDateText" onChange={(e) => { calculateAge() }} onInput={(e) => { calculateAge() }} placeholder="MM/DD/YYYY" type="text" />
<button aria-label="Open date picker" className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-orange-200 rounded transition-colors" onClick={(e) => { openDatePicker() }} type="button">
<svg className="lucide lucide-calendar w-5 h-5 text-gray-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
<input className="absolute opacity-0 pointer-events-none" id="hiddenDatePicker" onChange={(e) => { updateTextFromPicker() }} type="date" />
</div>
<p className="text-xs text-orange-600 mt-1 hidden" id="ageDisplay"></p>
</div>

<div className="">
<label className="text-sm font-medium text-gray-600 mb-2 block">Weight</label>
<div className="flex gap-2">
<input className="flex-1 h-12 bg-[#fff2e8] rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-orange-400 border border-orange-200" id="weightInput" min="0" onInput={(e) => { updateWeightDisplay() }} step="0.1" type="number" />
<div className="flex bg-gray-100 rounded-xl p-1 h-12">
<button className="px-3 py-2 rounded-lg text-sm font-medium transition-all bg-orange-400 text-white" id="kgBtn" onClick={(e) => { toggleWeightUnit('kg') }}>kg</button>
<button className="px-3 py-2 rounded-lg text-sm font-medium transition-all text-gray-600 hover:text-gray-800" id="lbBtn" onClick={(e) => { toggleWeightUnit('lb') }} style={{}}>lb</button>
</div>
</div>
<p className="text-xs text-gray-500 mt-1 hidden" id="weightConversion"></p>
</div>

<div className="relative">
<label className="text-sm font-medium text-gray-600 mb-2 block">Spayed/Neutered</label>
<button aria-haspopup="listbox" className="w-full h-12 bg-[#fff2e8] rounded-xl px-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-400 border border-orange-200" id="spayedBtn" onClick={(e) => { toggleDropdown('spayed') }}>
<span className="text-gray-400" id="spayedSelected">Select status</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<ul className="absolute z-20 left-0 right-0 bg-white border border-orange-200 rounded-xl shadow-lg mt-2 overflow-hidden hidden" id="spayedDropdown" role="listbox">
<li><button className="w-full px-4 py-3 text-left hover:bg-orange-50" onClick={(e) => { selectOption('spayed', 'Yes') }}>Yes</button></li>
<li><button className="w-full px-4 py-3 text-left hover:bg-orange-50" onClick={(e) => { selectOption('spayed', 'No') }}>No</button></li>
<li><button className="w-full px-4 py-3 text-left hover:bg-orange-50" onClick={(e) => { selectOption('spayed', 'Unknown') }}>Unknown</button></li>
</ul>
</div>

<div className="">
<label className="text-sm font-medium text-gray-600 mb-2 block">Microchip Number</label>
<input className="w-full h-12 bg-[#fff2e8] rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-orange-400 border border-orange-200" maxlength="20" placeholder="15 digits" type="text" />
</div>

<div className="">
<label className="text-sm font-medium text-gray-600 mb-2 block">Known Allergies</label>
<div className="w-full min-h-12 bg-[#fff2e8] rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-orange-400 border border-orange-200">
<div className="flex flex-wrap gap-2 mb-2" id="allergyTags">
<button className="flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm hover:bg-orange-200 transition-colors" onClick={(e) => { showAllergyInput() }} style={{}}>
<svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Add
              </button>
</div>
<input className="w-full bg-transparent focus:outline-none text-sm hidden" id="allergyInput" onblur="hideAllergyInput()" onKeyPress={(e) => { handleAllergyInput(event) }} placeholder="Type allergy and press Enter" style={{}} type="text" />
</div>
</div>

<div className="">
<label className="text-sm font-medium text-gray-600 mb-2 block">Additional Notes</label>
<textarea className="w-full bg-[#fff2e8] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-400 border border-orange-200 placeholder-gray-400 resize-none" maxlength="2000" placeholder="Medications, behavioral notes, special care instructions, favorite treats, etc." rows="4"></textarea>
<p className="text-xs text-gray-500 mt-1">0/2000 characters</p>
</div>

<div className="flex gap-3 pt-4">
<button aria-label="Cancel" className="h-16 w-16 rounded-xl flex items-center justify-center bg-[#FFE5E0] border-2 hover:bg-[#FFDBDB] transition-all shadow-sm border-orange-400">
<svg className="lucide lucide-x w-6 h-6 text-orange-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<button className="flex-1 py-4 rounded-xl bg-gradient-to-r from-orange-400 to-rose-400 text-white font-semibold shadow-lg shadow-orange-400/30 hover:shadow-xl active:scale-95 transition-all">
            Save Pet
          </button>
</div>
</main>
</div>

<nav className="absolute bottom-0 left-0 right-0 rounded-t-3xl py-4 px-6 backdrop-blur bg-white/90 flex-shrink-0">
<div className="flex justify-between items-center">
<div className="flex flex-col items-center opacity-60">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-xs mt-1">Home</span>
</div>
<div className="flex flex-col items-center opacity-60">
<svg className="lucide lucide-check-square w-5 h-5" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="9,11 12,14 22,4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
<span className="text-xs mt-1">Tasks</span>
</div>
<div className="relative -mt-8">
<button aria-label="Save" className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-400 to-rose-400 flex items-center justify-center shadow-lg shadow-orange-400/30 hover:shadow-xl transition-all">
<svg className="lucide lucide-check w-6 h-6 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
</div>
<div className="flex flex-col items-center opacity-60">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-xs mt-1">Health</span>
</div>
<div className="flex flex-col items-center opacity-60">
<svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
<span className="text-xs mt-1">More</span>
</div>
</div>
</nav>
</div>


    </>
  );
}
