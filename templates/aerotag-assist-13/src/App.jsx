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



    // Initialize Lucide icons
    lucide.createIcons({
      attrs: {
        'stroke-width': 1.5
      }
    });
    
    // Tab switching
    function openTab(tabName) {
      // Hide all tab contents
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
      });
      
      // Remove active state from all tabs
      document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('text-blue-600', 'border-blue-600');
        button.classList.add('text-gray-700', 'border-transparent');
      });
      
      // Show selected tab content
      const selectedContent = document.querySelector(`[data-tab-content="${tabName}"]`);
      if (selectedContent) {
        selectedContent.classList.remove('hidden');
      }
      
      // Add active state to selected tab
      const selectedTab = document.querySelector(`[data-tab="${tabName}"]`);
      if (selectedTab) {
        selectedTab.classList.remove('text-gray-700', 'border-transparent');
        selectedTab.classList.add('text-blue-600', 'border-blue-600');
      }
    }
    
    // Toggle switch
    function toggleSwitch(button) {
      const isActive = button.classList.contains('bg-blue-600');
      const span = button.querySelector('span');
      const socialSection = document.getElementById('socialLinksSection');
      
      if (isActive) {
        button.classList.remove('bg-blue-600');
        button.classList.add('bg-gray-300');
        span.classList.remove('translate-x-6');
        span.classList.add('translate-x-1');
        if (socialSection) socialSection.classList.add('hidden');
      } else {
        button.classList.remove('bg-gray-300');
        button.classList.add('bg-blue-600');
        span.classList.remove('translate-x-1');
        span.classList.add('translate-x-6');
        if (socialSection) socialSection.classList.remove('hidden');
      }
    }
    
    // Modal functions
    function openAddServiceModal() {
      document.getElementById('addServiceModal').classList.remove('hidden');
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }
    
    function closeAddServiceModal() {
      document.getElementById('addServiceModal').classList.add('hidden');
    }

    // Service Editor Functions
    function openServiceEditor(serviceType) {
      const modal = document.getElementById('serviceEditorModal');
      const title = document.getElementById('serviceEditorTitle');
      const content = document.getElementById('serviceEditorContent');
      
      // Set title based on service type
      const titles = {
        'room-service': 'Edit Room Service Module',
        'housekeeping': 'Edit Housekeeping Module',
        'laundry': 'Edit Laundry Module',
        'maintenance': 'Edit Maintenance Module'
      };
      
      title.textContent = titles[serviceType] || 'Edit Service Module';
      
      // Load content based on service type
      content.innerHTML = getServiceEditorContent(serviceType);
      
      modal.classList.remove('hidden');
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }
    
    function closeServiceEditor() {
      document.getElementById('serviceEditorModal').classList.add('hidden');
    }
    
    function getServiceEditorContent(serviceType) {
      const commonContent = `
        <!-- Module Settings -->
        <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div class="flex gap-3">
            <i data-lucide="info" class="w-5 h-5 text-blue-600 flex-shrink-0"></i>
            <div class="text-xs text-blue-900">
              <p class="font-medium mb-1">Module Configuration</p>
              <p class="text-blue-700">Configure the form fields and behavior for this service. Required fields must be filled by guests.</p>
            </div>
          </div>
        </div>

        <!-- Form Title -->
        <div>
          <label class="block text-sm font-medium text-gray-900 mb-2">Form title</label>
          <input type="text" value="${getDefaultTitle(serviceType)}" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        </div>

        <!-- Form Description -->
        <div>
          <label class="block text-sm font-medium text-gray-900 mb-2">Description (optional)</label>
          <textarea rows="2" placeholder="Brief description of the service..." class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
        </div>

        <!-- Divider -->
        <div class="border-t border-gray-200"></div>

        <h4 class="text-sm font-semibold text-gray-900">Form Fields</h4>
      `;

      const serviceSpecificContent = {
        'room-service': `
          <!-- Room Number Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="hash" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Room Number</div>
                  <div class="text-xs text-gray-500">Guest room identification</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-blue-600 font-medium">Required</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-600">
                  <span class="inline-block h-3 w-3 transform translate-x-5 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Menu Selection Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="book-open" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Menu Selection</div>
                  <div class="text-xs text-gray-500">Food and beverage choices</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-blue-600 font-medium">Required</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-600">
                  <span class="inline-block h-3 w-3 transform translate-x-5 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
            <div class="mt-3">
              <label class="block text-xs font-medium text-gray-700 mb-2">Menu Items</label>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <input type="text" value="Breakfast Menu" class="flex-1 px-2 py-1.5 border border-gray-300 rounded text-xs">
                  <button class="p-1 hover:bg-gray-200 rounded"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                <div class="flex items-center gap-2">
                  <input type="text" value="Lunch Menu" class="flex-1 px-2 py-1.5 border border-gray-300 rounded text-xs">
                  <button class="p-1 hover:bg-gray-200 rounded"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                <div class="flex items-center gap-2">
                  <input type="text" value="Dinner Menu" class="flex-1 px-2 py-1.5 border border-gray-300 rounded text-xs">
                  <button class="p-1 hover:bg-gray-200 rounded"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                <button class="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  <i data-lucide="plus" class="w-3 h-3"></i>
                  Add Menu Option
                </button>
              </div>
            </div>
          </div>

          <!-- Delivery Time Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="clock" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Delivery Time</div>
                  <div class="text-xs text-gray-500">Preferred delivery time</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-600">Optional</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-300">
                  <span class="inline-block h-3 w-3 transform translate-x-1 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Special Instructions Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="message-square" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Special Instructions</div>
                  <div class="text-xs text-gray-500">Additional notes or requests</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-600">Optional</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-300">
                  <span class="inline-block h-3 w-3 transform translate-x-1 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Add Custom Field Button -->
          <button class="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors">
            <i data-lucide="plus-circle" class="w-4 h-4"></i>
            Add Custom Field
          </button>
        `,
        'housekeeping': `
          <!-- Room Number Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="hash" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Room Number</div>
                  <div class="text-xs text-gray-500">Guest room identification</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-blue-600 font-medium">Required</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-600">
                  <span class="inline-block h-3 w-3 transform translate-x-5 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Service Type Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="list-checks" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Service Type</div>
                  <div class="text-xs text-gray-500">Type of housekeeping request</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-blue-600 font-medium">Required</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-600">
                  <span class="inline-block h-3 w-3 transform translate-x-5 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
            <div class="mt-3">
              <label class="block text-xs font-medium text-gray-700 mb-2">Service Options</label>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <input type="text" value="Full Cleaning" class="flex-1 px-2 py-1.5 border border-gray-300 rounded text-xs">
                  <button class="p-1 hover:bg-gray-200 rounded"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                <div class="flex items-center gap-2">
                  <input type="text" value="Towel Replacement" class="flex-1 px-2 py-1.5 border border-gray-300 rounded text-xs">
                  <button class="p-1 hover:bg-gray-200 rounded"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                <div class="flex items-center gap-2">
                  <input type="text" value="Bed Making" class="flex-1 px-2 py-1.5 border border-gray-300 rounded text-xs">
                  <button class="p-1 hover:bg-gray-200 rounded"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                <div class="flex items-center gap-2">
                  <input type="text" value="Toiletries Refill" class="flex-1 px-2 py-1.5 border border-gray-300 rounded text-xs">
                  <button class="p-1 hover:bg-gray-200 rounded"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                <button class="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  <i data-lucide="plus" class="w-3 h-3"></i>
                  Add Service Option
                </button>
              </div>
            </div>
          </div>

          <!-- Priority/Urgency Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="alert-circle" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Urgency Level</div>
                  <div class="text-xs text-gray-500">Request priority</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-600">Optional</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-300">
                  <span class="inline-block h-3 w-3 transform translate-x-1 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Additional Notes Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="message-square" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Additional Notes</div>
                  <div class="text-xs text-gray-500">Special requests or details</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-600">Optional</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-300">
                  <span class="inline-block h-3 w-3 transform translate-x-1 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Add Custom Field Button -->
          <button class="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors">
            <i data-lucide="plus-circle" class="w-4 h-4"></i>
            Add Custom Field
          </button>
        `,
        'laundry': `
          <!-- Room Number Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="hash" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Room Number</div>
                  <div class="text-xs text-gray-500">Guest room identification</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-blue-600 font-medium">Required</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-600">
                  <span class="inline-block h-3 w-3 transform translate-x-5 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Service Type Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="shirt" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Laundry Service Type</div>
                  <div class="text-xs text-gray-500">Type of laundry service</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-blue-600 font-medium">Required</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-600">
                  <span class="inline-block h-3 w-3 transform translate-x-5 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
            <div class="mt-3">
              <label class="block text-xs font-medium text-gray-700 mb-2">Service Options</label>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <input type="text" value="Wash & Iron" class="flex-1 px-2 py-1.5 border border-gray-300 rounded text-xs">
                  <button class="p-1 hover:bg-gray-200 rounded"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                <div class="flex items-center gap-2">
                  <input type="text" value="Dry Cleaning" class="flex-1 px-2 py-1.5 border border-gray-300 rounded text-xs">
                  <button class="p-1 hover:bg-gray-200 rounded"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                <div class="flex items-center gap-2">
                  <input type="text" value="Express Service" class="flex-1 px-2 py-1.5 border border-gray-300 rounded text-xs">
                  <button class="p-1 hover:bg-gray-200 rounded"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                <button class="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  <i data-lucide="plus" class="w-3 h-3"></i>
                  Add Service Option
                </button>
              </div>
            </div>
          </div>

          <!-- Number of Items Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="package" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Number of Items</div>
                  <div class="text-xs text-gray-500">Approximate item count</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-600">Optional</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-300">
                  <span class="inline-block h-3 w-3 transform translate-x-1 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Pickup Time Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="clock" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Preferred Pickup Time</div>
                  <div class="text-xs text-gray-500">When to collect items</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-600">Optional</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-300">
                  <span class="inline-block h-3 w-3 transform translate-x-1 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Special Instructions Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="message-square" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Special Instructions</div>
                  <div class="text-xs text-gray-500">Stain removal, fabric care, etc.</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-600">Optional</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-300">
                  <span class="inline-block h-3 w-3 transform translate-x-1 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Add Custom Field Button -->
          <button class="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors">
            <i data-lucide="plus-circle" class="w-4 h-4"></i>
            Add Custom Field
          </button>
        `,
        'maintenance': `
          <!-- Room Number Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="hash" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Room Number</div>
                  <div class="text-xs text-gray-500">Guest room identification</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-blue-600 font-medium">Required</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-600">
                  <span class="inline-block h-3 w-3 transform translate-x-5 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Issue Category Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="wrench" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Issue Category</div>
                  <div class="text-xs text-gray-500">Type of maintenance issue</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-blue-600 font-medium">Required</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-600">
                  <span class="inline-block h-3 w-3 transform translate-x-5 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
            <div class="mt-3">
              <label class="block text-xs font-medium text-gray-700 mb-2">Issue Categories</label>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <input type="text" value="Plumbing" class="flex-1 px-2 py-1.5 border border-gray-300 rounded text-xs">
                  <button class="p-1 hover:bg-gray-200 rounded"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                <div class="flex items-center gap-2">
                  <input type="text" value="Electrical" class="flex-1 px-2 py-1.5 border border-gray-300 rounded text-xs">
                  <button class="p-1 hover:bg-gray-200 rounded"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                <div class="flex items-center gap-2">
                  <input type="text" value="HVAC" class="flex-1 px-2 py-1.5 border border-gray-300 rounded text-xs">
                  <button class="p-1 hover:bg-gray-200 rounded"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                <div class="flex items-center gap-2">
                  <input type="text" value="Furniture/Fixtures" class="flex-1 px-2 py-1.5 border border-gray-300 rounded text-xs">
                  <button class="p-1 hover:bg-gray-200 rounded"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                <div class="flex items-center gap-2">
                  <input type="text" value="Electronics" class="flex-1 px-2 py-1.5 border border-gray-300 rounded text-xs">
                  <button class="p-1 hover:bg-gray-200 rounded"><i data-lucide="x" class="w-3 h-3"></i></button>
                </div>
                <button class="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  <i data-lucide="plus" class="w-3 h-3"></i>
                  Add Category
                </button>
              </div>
            </div>
          </div>

          <!-- Issue Description Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="file-text" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Issue Description</div>
                  <div class="text-xs text-gray-500">Detailed description of the problem</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-blue-600 font-medium">Required</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-600">
                  <span class="inline-block h-3 w-3 transform translate-x-5 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Photo Upload Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="camera" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Photo Upload</div>
                  <div class="text-xs text-gray-500">Optional photo of the issue</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-600">Optional</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-300">
                  <span class="inline-block h-3 w-3 transform translate-x-1 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Priority Level Field -->
          <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <i data-lucide="alert-triangle" class="w-5 h-5 text-gray-600"></i>
                <div>
                  <div class="text-sm font-medium text-gray-900">Priority Level</div>
                  <div class="text-xs text-gray-500">Urgency of the request</div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-600">Optional</span>
                <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-300">
                  <span class="inline-block h-3 w-3 transform translate-x-1 rounded-full bg-white"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- Add Custom Field Button -->
          <button class="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors">
            <i data-lucide="plus-circle" class="w-4 h-4"></i>
            Add Custom Field
          </button>
        `
      };

      const notificationSettings = `
        <!-- Divider -->
        <div class="border-t border-gray-200"></div>

        <h4 class="text-sm font-semibold text-gray-900">Notification Settings</h4>

        <!-- Email Notification -->
        <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <i data-lucide="mail" class="w-5 h-5 text-gray-600"></i>
              <div>
                <div class="text-sm font-medium text-gray-900">Email Notification</div>
                <div class="text-xs text-gray-500">Send confirmation email to guest</div>
              </div>
            </div>
            <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-600">
              <span class="inline-block h-3 w-3 transform translate-x-5 rounded-full bg-white"></span>
            </button>
          </div>
        </div>

        <!-- Staff Notification Email -->
        <div>
          <label class="block text-sm font-medium text-gray-900 mb-2">Staff notification email</label>
          <input type="email" placeholder="housekeeping@hotel.com" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <p class="mt-1 text-xs text-gray-500">Receive form submissions at this email</p>
        </div>

        <!-- WhatsApp Notification -->
        <div class="p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <i data-lucide="message-circle" class="w-5 h-5 text-gray-600"></i>
              <div>
                <div class="text-sm font-medium text-gray-900">WhatsApp Notification</div>
                <div class="text-xs text-gray-500">Send notification via WhatsApp</div>
              </div>
            </div>
            <button class="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-300">
              <span class="inline-block h-3 w-3 transform translate-x-1 rounded-full bg-white"></span>
            </button>
          </div>
        </div>
      `;

      return commonContent + serviceSpecificContent[serviceType] + notificationSettings;
    }
    
    function getDefaultTitle(serviceType) {
      const titles = {
        'room-service': 'Order Room Service',
        'housekeeping': 'Request Housekeeping',
        'laundry': 'Laundry Service Request',
        'maintenance': 'Report Maintenance Issue'
      };
      return titles[serviceType] || 'Service Request';
    }
    
    // Initialize with Design tab open
    openTab('design');
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        console.log('Save draft triggered');
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        console.log('Preview triggered');
      }
      if (e.key === 'Escape') {
        closeAddServiceModal();
        closeServiceEditor();
      }
    });
    
    // Close modals on background click
    document.getElementById('addServiceModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeAddServiceModal();
      }
    });
    
    document.getElementById('serviceEditorModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeServiceEditor();
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
      

<div className="border-b border-gray-200 bg-white sticky top-0 z-50">
<div className="flex items-center justify-between px-6 py-3">
<div className="flex items-center gap-8">
<div className="text-lg font-semibold tracking-tight">AeroTag Assist</div>
<div className="text-sm text-gray-500">Blueprint UI Editor</div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors">
<i className="w-4 h-4" data-lucide="eye"></i>
          Preview
        </button>
<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors">
<i className="w-4 h-4" data-lucide="save"></i>
          Save Draft
        </button>
<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
<i className="w-4 h-4" data-lucide="rocket"></i>
          Publish
        </button>
</div>
</div>
</div>

<div className="flex h-[calc(100vh-61px)]">

<div className="w-[55%] bg-gray-50 flex items-center justify-center p-12 overflow-auto">
<div className="relative">

<div className="phone-mockup bg-white relative" style={{width: '360px', height: '780px'}}>

<div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-6 text-xs text-gray-900">
<span className="font-medium">9:41</span>
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="signal"></i>
<i className="w-3 h-3" data-lucide="wifi"></i>
<i className="w-3 h-3" data-lucide="battery-charging"></i>
</div>
</div>

<div className="absolute top-11 left-0 right-0 bottom-0 overflow-auto p-4">

<div className="dotted-block rounded-lg p-6 mb-4 cursor-pointer relative group" onclick="openTab('design')">
<div className="edit-icon absolute top-2 right-2 w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="pencil"></i>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
<i className="w-8 h-8 text-gray-400" data-lucide="image"></i>
</div>
<div className="text-xs font-medium text-gray-400 tracking-wide">HOTEL_LOGO_AREA</div>
</div>
</div>

<div className="dotted-block rounded-lg p-4 mb-4 cursor-pointer relative group" onclick="openTab('design')">
<div className="edit-icon absolute top-2 right-2 w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="pencil"></i>
</div>
<p className="text-sm text-center text-gray-500">Welcome! How can we help you today?</p>
<div className="text-xs font-medium text-gray-400 tracking-wide text-center mt-2">WELCOME_TEXT</div>
</div>

<div className="dotted-block rounded-lg p-4 mb-4 cursor-pointer relative group" onclick="openTab('services')">
<div className="edit-icon absolute top-2 right-2 w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="pencil"></i>
</div>
<div className="grid grid-cols-2 gap-3 mb-3">

<div className="service-card bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center gap-2 hover:border-blue-300" onclick="event.stopPropagation(); openServiceEditor('room-service')">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-blue-600" data-lucide="utensils"></i>
</div>
<span className="text-xs font-medium text-gray-700">Room Service</span>
</div>

<div className="service-card bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center gap-2 hover:border-blue-300" onclick="event.stopPropagation(); openServiceEditor('housekeeping')">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-blue-600" data-lucide="sparkles"></i>
</div>
<span className="text-xs font-medium text-gray-700">Housekeeping</span>
</div>

<div className="service-card bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center gap-2 hover:border-blue-300" onclick="event.stopPropagation(); openServiceEditor('laundry')">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-blue-600" data-lucide="shirt"></i>
</div>
<span className="text-xs font-medium text-gray-700">Laundry</span>
</div>

<div className="service-card bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center gap-2 hover:border-blue-300" onclick="event.stopPropagation(); openServiceEditor('maintenance')">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-blue-600" data-lucide="wrench"></i>
</div>
<span className="text-xs font-medium text-gray-700">Maintenance</span>
</div>
</div>
<div className="text-xs font-medium text-gray-400 tracking-wide text-center">SERVICE_BUTTONS_GRID</div>
</div>

<div className="dotted-block rounded-lg p-4 cursor-pointer relative group" onclick="openTab('footer')">
<div className="edit-icon absolute top-2 right-2 w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="pencil"></i>
</div>
<div className="flex flex-col items-center gap-2 text-center">
<div className="flex items-center gap-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="phone"></i>
<span>+971-4-XXXXXXX</span>
</div>
<div className="flex items-center gap-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="globe"></i>
<span>hotel.example.com</span>
</div>
<div className="text-xs font-medium text-gray-400 tracking-wide mt-2">FOOTER_CONTACT</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-[45%] bg-white border-l border-gray-200 flex flex-col overflow-hidden">

<div className="flex border-b border-gray-200 bg-gray-50">
<button className="tab-button px-6 py-3 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:text-gray-900 hover:border-gray-300 transition-colors" data-tab="design" onclick="openTab('design')">
          Design
        </button>
<button className="tab-button px-6 py-3 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:text-gray-900 hover:border-gray-300 transition-colors" data-tab="services" onclick="openTab('services')">
          Services
        </button>
<button className="tab-button px-6 py-3 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:text-gray-900 hover:border-gray-300 transition-colors" data-tab="footer" onclick="openTab('footer')">
          Footer
        </button>
</div>

<div className="flex-1 overflow-auto">

<div className="tab-content p-6 space-y-6" data-tab-content="design">

<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Upload logo</label>
<div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-gray-400" data-lucide="upload"></i>
</div>
<div className="text-sm font-medium text-gray-700">Click to upload</div>
<div className="text-xs text-gray-500">PNG or JPG, max 5MB</div>
</div>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Primary color</label>
<div className="flex items-center gap-3">
<input className="w-12 h-10 rounded-lg border border-gray-300 cursor-pointer" type="color" value="#0066FF"/>
<input className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="text" value="#0066FF"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Background style</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
<option selected="">Light</option>
<option>Dark</option>
<option>Image</option>
</select>
</div>

<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Font</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
<option selected="">Sans (Inter)</option>
<option>Modern (Poppins)</option>
<option>Serif</option>
</select>
</div>

<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Welcome message</label>
<textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Welcome! How can we help you today?" rows="3">Welcome! How can we help you today?</textarea>
</div>

<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
<div>
<div className="text-sm font-medium text-gray-900">Room/outside preview toggle</div>
<div className="text-xs text-gray-500 mt-1">Enable geo-intelligent preview</div>
</div>
<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors">
<span className="inline-block h-4 w-4 transform translate-x-6 rounded-full bg-white transition-transform"></span>
</button>
</div>

<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
<i className="w-4 h-4" data-lucide="check"></i>
            Apply Theme
          </button>
</div>

<div className="tab-content p-6 space-y-6 hidden" data-tab-content="services">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-gray-900">Service Buttons</h3>
<span className="text-xs text-gray-500">4 of 8 services</span>
</div>

<div className="space-y-3">

<div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-blue-600" data-lucide="utensils"></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-gray-900">Room Service</div>
<div className="text-xs text-gray-500">Form • Food Order</div>
</div>
<div className="flex items-center gap-1">
<button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Move up">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-up"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Move down">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors" onclick="openServiceEditor('room-service')" title="Edit">
<i className="w-4 h-4 text-gray-400" data-lucide="pencil"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Delete">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>

<div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-blue-600" data-lucide="sparkles"></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-gray-900">Housekeeping</div>
<div className="text-xs text-gray-500">Form • Housekeeping Request</div>
</div>
<div className="flex items-center gap-1">
<button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Move up">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-up"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Move down">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors" onclick="openServiceEditor('housekeeping')" title="Edit">
<i className="w-4 h-4 text-gray-400" data-lucide="pencil"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Delete">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>

<div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-blue-600" data-lucide="shirt"></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-gray-900">Laundry</div>
<div className="text-xs text-gray-500">WhatsApp • Not configured</div>
</div>
<div className="flex items-center gap-1">
<button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Move up">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-up"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Move down">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors" onclick="openServiceEditor('laundry')" title="Edit">
<i className="w-4 h-4 text-gray-400" data-lucide="pencil"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Delete">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>

<div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-blue-600" data-lucide="wrench"></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-gray-900">Maintenance</div>
<div className="text-xs text-gray-500">Form • Maintenance Request</div>
</div>
<div className="flex items-center gap-1">
<button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Move up">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-up"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Move down">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors" onclick="openServiceEditor('maintenance')" title="Edit">
<i className="w-4 h-4 text-gray-400" data-lucide="pencil"></i>
</button>
<button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Delete">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>
</div>

<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors" onclick="openAddServiceModal()">
<i className="w-4 h-4" data-lucide="plus"></i>
            Add New Service
          </button>

<div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
<div className="flex gap-3">
<i className="w-5 h-5 text-blue-600 flex-shrink-0" data-lucide="info"></i>
<div className="text-xs text-blue-900">
<p className="font-medium mb-1">Service Management</p>
<p className="text-blue-700">You can add up to 8 services. Use the arrow buttons to reorder services. Each service can trigger a form, WhatsApp message, phone call, or external link.</p>
</div>
</div>
</div>
</div>

<div className="tab-content p-6 space-y-6 hidden" data-tab-content="footer">

<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Contact phone</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="w-4 h-4 text-gray-400" data-lucide="phone"></i>
</div>
<input className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+971-4-XXXXXXX" type="tel"/>
</div>
<p className="mt-1 text-xs text-gray-500">Include country code (e.g., +971-4-1234567)</p>
</div>

<div>
<label className="block text-sm font-medium text-gray-900 mb-2">WhatsApp (optional)</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="w-4 h-4 text-gray-400" data-lucide="message-circle"></i>
</div>
<input className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+971-50-XXXXXXX" type="tel"/>
</div>
<p className="mt-1 text-xs text-gray-500">WhatsApp number for direct messaging</p>
</div>

<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Website (optional)</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="w-4 h-4 text-gray-400" data-lucide="globe"></i>
</div>
<input className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="https://hotel.example.com" type="url"/>
</div>
</div>

<div className="border-t border-gray-200"></div>

<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
<div>
<div className="text-sm font-medium text-gray-900">Show social icons</div>
<div className="text-xs text-gray-500 mt-1">Display social media links in footer</div>
</div>
<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors" onclick="toggleSwitch(this)">
<span className="inline-block h-4 w-4 transform translate-x-1 rounded-full bg-white transition-transform"></span>
</button>
</div>

<div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hidden" id="socialLinksSection">
<div className="text-xs font-medium text-gray-700 mb-3">Social Media Links</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Facebook</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="https://facebook.com/yourhotel" type="url"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Instagram</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="https://instagram.com/yourhotel" type="url"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Twitter</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="https://twitter.com/yourhotel" type="url"/>
</div>
</div>

<div className="p-4 bg-white border border-gray-200 rounded-lg">
<div className="text-xs font-medium text-gray-700 mb-3">Footer Preview</div>
<div className="flex flex-col items-center gap-2 text-center py-4">
<div className="flex items-center gap-2 text-xs text-gray-600">
<i className="w-3 h-3" data-lucide="phone"></i>
<span>+971-4-XXXXXXX</span>
</div>
<div className="flex items-center gap-2 text-xs text-gray-600">
<i className="w-3 h-3" data-lucide="globe"></i>
<span>hotel.example.com</span>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-200 p-4 bg-gray-50">
<div className="flex items-center justify-between text-xs text-gray-500 mb-3">
<span>Last saved: Never</span>
<span>Draft v1.0.0</span>
</div>
<div className="flex gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors">
<i className="w-4 h-4" data-lucide="play"></i>
            Test Action
          </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
<i className="w-4 h-4" data-lucide="save"></i>
            Save Changes
          </button>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" id="addServiceModal">
<div className="bg-white rounded-xl shadow-xl max-w-md w-full">
<div className="p-6 border-b border-gray-200">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">Add Service</h3>
<button className="p-1 hover:bg-gray-100 rounded-lg transition-colors" onclick="closeAddServiceModal()">
<i className="w-5 h-5 text-gray-500" data-lucide="x"></i>
</button>
</div>
</div>
<div className="p-6 space-y-4">

<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Service name *</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" maxlength="24" placeholder="e.g., Concierge" type="text"/>
<p className="mt-1 text-xs text-gray-500">Max 24 characters</p>
</div>

<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Icon</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
<option value="utensils">🍴 Utensils</option>
<option value="broom">🧹 Broom</option>
<option value="shirt">👕 Shirt</option>
<option value="tools">🔧 Tools</option>
<option value="bed">🛏️ Bed</option>
<option value="phone">📞 Phone</option>
<option value="chat">💬 Chat</option>
<option selected="" value="info">ℹ️ Info</option>
</select>
</div>

<div>
<label className="block text-sm font-medium text-gray-900 mb-2">Action</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
<option selected="" value="form">Open Form</option>
<option value="whatsapp">WhatsApp Message</option>
<option value="call">Phone Call</option>
<option value="link">External Link</option>
</select>
</div>

<div id="formTypeSection">
<label className="block text-sm font-medium text-gray-900 mb-2">Form type</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
<option value="food">Food Order</option>
<option value="laundry">Laundry Request</option>
<option value="maintenance">Maintenance Request</option>
<option value="housekeeping">Housekeeping Request</option>
</select>
</div>
</div>
<div className="p-6 border-t border-gray-200 flex gap-3">
<button className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors" onclick="closeAddServiceModal()">
          Cancel
        </button>
<button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
          Add Service
        </button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" id="serviceEditorModal">
<div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">

<div className="p-6 border-b border-gray-200 flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight" id="serviceEditorTitle">Edit Room Service Module</h3>
<p className="text-sm text-gray-500 mt-1">Configure form fields and behavior</p>
</div>
<button className="p-1 hover:bg-gray-100 rounded-lg transition-colors" onclick="closeServiceEditor()">
<i className="w-5 h-5 text-gray-500" data-lucide="x"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6" id="serviceEditorContent">

</div>

<div className="p-6 border-t border-gray-200 flex gap-3">
<button className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors" onclick="closeServiceEditor()">
          Cancel
        </button>
<button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
<i className="w-4 h-4 inline mr-2" data-lucide="save"></i>
          Save Module
        </button>
</div>
</div>
</div>


    </>
  );
}
