import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Sample creator data
    const creators = [
        {
            id: 1,
            name: "Sarah Johnson",
            age: "25-32",
            tier: "Top Rated",
            categories: ["Health & Wellness", "Lifestyle", "Fitness"],
            location: "USA",
            jobs: "8 jobs this month",
            distinctives: "tattoos",
            saved: false,
            image: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80",
            rating: 4.9,
            bio: "Passionate about healthy living and inspiring others to achieve their fitness goals. Specializing in authentic lifestyle content with a focus on wellness and personal development.",
            canShow: ["face", "body", "hands"],
            availability: "Available Now"
        },
        {
            id: 2,
            name: "Emma Chen",
            age: "18-24",
            tier: "Standard",
            categories: ["Fashion", "Beauty", "Lifestyle"],
            location: "Asia",
            jobs: "5 jobs this month",
            distinctives: "colorful hair",
            saved: false,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
            rating: 4.7,
            bio: "Fashion-forward creator with a unique aesthetic. Known for bold style choices and creative content that resonates with Gen Z audiences.",
            canShow: ["face", "body"],
            availability: "Quick Turnaround"
        },
        {
            id: 3,
            name: "Marcus Rodriguez",
            age: "33-44",
            tier: "Top Rated",
            categories: ["Technology", "Business", "Finance"],
            location: "USA",
            jobs: "12 jobs this month",
            distinctives: "glasses",
            saved: false,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
            rating: 4.8,
            bio: "Professional business consultant and tech enthusiast. Creates authoritative content for corporate audiences and startup communities.",
            canShow: ["face", "hands"],
            availability: "Available Now"
        },
        {
            id: 4,
            name: "Olivia Parker",
            age: "25-32",
            tier: "Standard",
            categories: ["Food & Drink", "Lifestyle", "Travel"],
            location: "UK",
            jobs: "3 jobs this month",
            distinctives: "piercings",
            saved: false,
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face",
            rating: 4.5,
            bio: "Food lover and travel enthusiast. Creates mouth-watering content that showcases culinary adventures and lifestyle experiences.",
            canShow: ["face", "hands"],
            availability: "Recent Jobs"
        },
        {
            id: 5,
            name: "James Wilson",
            age: "25-32",
            tier: "Top Rated",
            categories: ["Sports", "Fitness", "Outdoors"],
            location: "USA",
            jobs: "7 jobs this month",
            distinctives: "tattoos",
            saved: false,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
            rating: 4.9,
            bio: "Professional athlete and fitness coach. Specializes in motivational content and athletic performance demonstrations.",
            canShow: ["face", "body", "hands"],
            availability: "Available Now"
        },
        {
            id: 6,
            name: "Luna Martinez",
            age: "18-24",
            tier: "Standard",
            categories: ["Art & Design", "Creative", "Music"],
            location: "EU",
            jobs: "4 jobs this month",
            distinctives: "colorful hair, piercings",
            saved: true,
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
            rating: 4.6,
            bio: "Creative artist and musician with a unique visual style. Known for innovative content that blends art, music, and personal expression.",
            canShow: ["face", "body"],
            availability: "Quick Turnaround"
        }
    ];

    // Toggle functions
    function toggleSavedCreators() {
        const toggle = document.getElementById('savedToggle');
        const track = document.getElementById('switchTrack');
        const thumb = document.getElementById('switchThumb');
        const icon = document.getElementById('heartIcon');
        
        toggle.checked = !toggle.checked;
        
        if (toggle.checked) {
            track.classList.add('active');
            thumb.classList.add('active');
            icon.classList.add('active');
        } else {
            track.classList.remove('active');
            thumb.classList.remove('active');
            icon.classList.remove('active');
        }
    }

    function toggleDropdown(id) {
        const content = document.getElementById(id + '-content');
        const icon = document.getElementById(id + '-icon');
        
        if (content.classList.contains('open')) {
            content.classList.remove('open');
            icon.style.transform = 'rotate(0deg)';
        } else {
            content.classList.add('open');
            icon.style.transform = 'rotate(180deg)';
        }
    }

    function toggleSave(creatorId) {
        const creator = creators.find(c => c.id === creatorId);
        if (creator) {
            creator.saved = !creator.saved;
            // Update the UI
            const button = event.target.closest('button');
            const svg = button.querySelector('svg');
            
            if (creator.saved) {
                svg.setAttribute('fill', 'currentColor');
                button.classList.remove('text-gray-400');
                button.classList.add('text-red-500');
            } else {
                svg.setAttribute('fill', 'none');
                button.classList.remove('text-red-500');
                button.classList.add('text-gray-400');
            }
        }
    }

    function openCreatorModal(creatorId) {
        const creator = creators.find(c => c.id === creatorId);
        if (!creator) return;
        
        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = `
            <div class="flex items-start space-x-6 mb-6">
                <img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" alt="${creator.name}" class="w-24 h-24 rounded-full object-cover">
                <div class="flex-1">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="text-2xl font-bold text-gray-900">${creator.name}</h3>
                        <button onclick="toggleSave(${creator.id})" class="p-2 ${creator.saved ? 'text-red-500' : 'text-gray-400'} hover:text-red-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ${creator.saved ? 'fill="currentColor"' : 'fill="none"'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="flex items-center space-x-3 mb-3">
                        <span class="px-3 py-1 ${creator.tier === 'Top Rated' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'} rounded-full text-sm font-medium">${creator.tier}</span>
                        <span class="text-gray-500">${creator.age}</span>
                        <span class="text-gray-500">${creator.location}</span>
                    </div>
                    <div class="flex items-center space-x-2 mb-3">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-yellow-400 mr-1">
                                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                            </svg>
                            <span class="text-gray-900 font-medium">${creator.rating}</span>
                        </div>
                        <span class="text-gray-500">•</span>
                        <span class="text-green-600 font-medium">Completed ${creator.jobs}</span>
                    </div>
                </div>
            </div>
            
            <div class="mb-6">
                <h4 class="font-semibold text-gray-900 mb-2">About</h4>
                <p class="text-gray-600">${creator.bio}</p>
            </div>
            
            <div class="mb-6">
                <h4 class="font-semibold text-gray-900 mb-2">Categories</h4>
                <div class="flex flex-wrap gap-2">
                    ${creator.categories.map(cat => `<span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">${cat}</span>`).join('')}
                </div>
            </div>
            
            <div class="mb-6">
                <h4 class="font-semibold text-gray-900 mb-2">Can Show</h4>
                <div class="flex flex-wrap gap-2">
                    ${creator.canShow.map(item => `<span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm capitalize">${item}</span>`).join('')}
                </div>
            </div>
            
            <div class="mb-6">
                <h4 class="font-semibold text-gray-900 mb-2">Distinctives</h4>
                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm capitalize">${creator.distinctives}</span>
            </div>
            
            <div class="mb-6">
                <h4 class="font-semibold text-gray-900 mb-2">Availability</h4>
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">${creator.availability}</span>
            </div>
            
            <div class="flex space-x-3">
                <button class="flex-1 text-white py-3 px-6 rounded-lg font-medium transition-colors hover:opacity-90" style="background-color: #0d6b59;">
                    Send Message
                </button>
                <button class="flex-1 border border-gray-200 py-3 px-6 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    View Portfolio
                </button>
            </div>
        `;
        
        document.getElementById('creatorModal').classList.remove('hidden');
    }

    function closeCreatorModal() {
        document.getElementById('creatorModal').classList.add('hidden');
    }

    // Show more filters functionality
    document.getElementById('showMoreFilters').addEventListener('click', function() {
        const moreFilters = document.getElementById('moreFilters');
        const icon = document.getElementById('more-filters-icon');
        
        if (moreFilters.classList.contains('open')) {
            moreFilters.classList.remove('open');
            icon.style.transform = 'rotate(0deg)';
            this.querySelector('span').textContent = 'Show More Filters';
        } else {
            moreFilters.classList.add('open');
            icon.style.transform = 'rotate(180deg)';
            this.querySelector('span').textContent = 'Show Less Filters';
        }
    });

    // Filter functionality
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('active');
            // Here you would implement the actual filtering logic
        });
    });

    // Clear all filters
    document.getElementById('clearFilters').addEventListener('click', function() {
        document.querySelectorAll('.filter-tag.active').forEach(tag => {
            tag.classList.remove('active');
        });
        document.getElementById('searchInput').value = '';
        document.getElementById('savedToggle').checked = false;
        document.getElementById('switchTrack').classList.remove('active');
        document.getElementById('switchThumb').classList.remove('active');
        document.getElementById('heartIcon').classList.remove('active');
    });

    // Close modal when clicking outside
    document.getElementById('creatorModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeCreatorModal();
        }
    });

    // Mobile filters toggle
    document.getElementById('mobileFilters').addEventListener('click', function() {
        const sidebar = document.getElementById('filterSidebar');
        sidebar.classList.toggle('hidden');
    });

    // Search functionality
    document.getElementById('searchInput').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const creatorCards = document.querySelectorAll('.creator-card');
        
        creatorCards.forEach(card => {
            const creatorName = card.querySelector('h3').textContent.toLowerCase();
            const categories = Array.from(card.querySelectorAll('.bg-gray-100')).map(span => span.textContent.toLowerCase()).join(' ');
            
            if (creatorName.includes(searchTerm) || categories.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize animations
    window.addEventListener('load', function() {
        document.querySelectorAll('.fade-in, .slide-up').forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    });

    // Responsive mobile sidebar
    function toggleMobileSidebar() {
        const sidebar = document.getElementById('filterSidebar');
        const isHidden = sidebar.classList.contains('hidden');
        
        if (isHidden) {
            sidebar.classList.remove('hidden');
            sidebar.classList.add('fixed', 'inset-0', 'bg-white', 'z-50', 'overflow-y-auto');
        } else {
            sidebar.classList.add('hidden');
            sidebar.classList.remove('fixed', 'inset-0', 'bg-white', 'z-50', 'overflow-y-auto');
        }
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        const sidebar = document.getElementById('filterSidebar');
        if (window.innerWidth >= 1024) {
            sidebar.classList.remove('hidden', 'fixed', 'inset-0', 'bg-white', 'z-50', 'overflow-y-auto');
        }
    });

    // Update mobile filters button behavior
    document.getElementById('mobileFilters').addEventListener('click', toggleMobileSidebar);

    // Add close button for mobile sidebar
    const sidebarCloseBtn = document.createElement('button');
    sidebarCloseBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    `;
    sidebarCloseBtn.className = 'lg:hidden absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors';
    sidebarCloseBtn.onclick = toggleMobileSidebar;
    
    document.getElementById('filterSidebar').appendChild(sidebarCloseBtn);

    // Enhanced filter functionality with real-time updates
    function updateCreatorResults() {
        const activeFilters = {
            tier: [],
            age: [],
            gender: [],
            location: [],
            distinctives: [],
            canShow: [],
            availability: []
        };

        // Collect active filters
        document.querySelectorAll('.filter-tag.active').forEach(tag => {
            const filterType = tag.dataset.filter;
            const filterValue = tag.dataset.value;
            if (activeFilters[filterType]) {
                activeFilters[filterType].push(filterValue);
            }
        });

        // Show saved creators only if toggle is active
        const showSavedOnly = document.getElementById('savedToggle').checked;

        // Filter creators based on active filters
        const filteredCreators = creators.filter(creator => {
            if (showSavedOnly && !creator.saved) return false;
            
            // Check each filter type
            for (const [filterType, values] of Object.entries(activeFilters)) {
                if (values.length === 0) continue;
                
                let matches = false;
                switch (filterType) {
                    case 'tier':
                        matches = values.some(v => creator.tier.toLowerCase().includes(v.replace('-', ' ')));
                        break;
                    case 'age':
                        matches = values.includes(creator.age);
                        break;
                    case 'location':
                        matches = values.some(v => creator.location.toLowerCase().includes(v));
                        break;
                    case 'distinctives':
                        matches = values.some(v => creator.distinctives.toLowerCase().includes(v.replace('-', ' ')));
                        break;
                    case 'canShow':
                        matches = values.some(v => creator.canShow.includes(v));
                        break;
                    case 'availability':
                        matches = values.some(v => creator.availability.toLowerCase().includes(v.replace('-', ' ')));
                        break;
                }
                
                if (!matches) return false;
            }
            
            return true;
        });

        // Update results count
        document.querySelector('.text-neutral-600').textContent = `${filteredCreators.length} creators found`;
        
        // This would update the grid with filtered results
        // Implementation would depend on your data structure
    }

    // Attach filter update to all filter tags
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('active');
            updateCreatorResults();
        });
    });

    // Attach to saved creators toggle
    document.getElementById('savedToggle').addEventListener('change', updateCreatorResults);

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-neutral-200 sticky top-0 z-40 fade-in">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#0d6b59'}}>
<span className="text-white font-bold text-sm tracking-tight">CF</span>
</div>
<h1 className="text-xl font-semibold text-neutral-900 tracking-tight">Find Creators</h1>
</div>
<div className="flex items-center space-x-4">
<button className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors" id="mobileFilters">
<svg className="lucide lucide-sliders-horizontal w-5 h-5" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
</button>
</div>
</div>
</div>
</header>
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="flex flex-col lg:flex-row gap-8">

<aside className="lg:w-80 space-y-6 slide-up stagger-1" id="filterSidebar">
<div className="bg-white rounded-xl border border-neutral-200 p-6 sticky top-24">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-neutral-900">Filters</h3>
<button className="text-sm text-neutral-500 transition-colors" id="clearFilters" style={{color: '#0d6b59'}}>Clear all</button>
</div>

<div className="mb-6">
<div className="relative">
<input className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg text-sm" id="searchInput" placeholder="Search creators..." style={{focus: 'ring-color: #0d6b59', focus: 'border-color: #0d6b59'}} type="text"/>
<svg className="lucide lucide-search absolute left-3 top-3.5 w-4 h-4 text-neutral-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>

<div className="mb-6 flex items-center justify-between">
<label className="text-sm font-medium text-neutral-700">Show Saved Creators</label>
<div className="toggle-switch" onclick="toggleSavedCreators()">
<input className="toggle-input" id="savedToggle" type="checkbox"/>
<div className="switch-track" id="switchTrack">
<div className="switch-thumb" id="switchThumb">
<svg className="heart-icon" fill="none" height="24" id="heartIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div>
<button className="flex items-center justify-between w-full py-2 text-left" onclick="toggleDropdown('tier')">
<h4 className="font-medium text-neutral-900">Creator Tier</h4>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-400 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="tier-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-content mt-2 open" id="tier-content">
<div className="flex flex-wrap gap-2">
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="tier" data-value="top-rated">Top Rated</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="tier" data-value="standard">Standard</button>
</div>
</div>
</div>

<div>
<button className="flex items-center justify-between w-full py-2 text-left" onclick="toggleDropdown('age')">
<h4 className="font-medium text-neutral-900">Age Range</h4>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-400 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="age-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-content mt-2 open" id="age-content">
<div className="flex flex-wrap gap-2">
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="age" data-value="18-24">18-24</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="age" data-value="25-32">25-32</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="age" data-value="33-44">33-44</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="age" data-value="45+">45+</button>
</div>
</div>
</div>

<div>
<button className="flex items-center justify-between w-full py-2 text-left" onclick="toggleDropdown('gender')">
<h4 className="font-medium text-neutral-900">Gender</h4>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-400 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="gender-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-content mt-2 open" id="gender-content">
<div className="flex flex-wrap gap-2">
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="gender" data-value="female">Female</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="gender" data-value="male">Male</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="gender" data-value="non-binary">Non-binary</button>
</div>
</div>
</div>

<div>
<button className="flex items-center justify-between w-full py-2 text-left" onclick="toggleDropdown('location')">
<h4 className="font-medium text-neutral-900">Location</h4>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-400 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="location-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-content mt-2 open" id="location-content">
<div className="flex flex-wrap gap-2">
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="location" data-value="usa">USA</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="location" data-value="uk">UK</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="location" data-value="eu">EU</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="location" data-value="asia">Asia</button>
</div>
</div>
</div>

<div className="pt-4 border-t border-neutral-200">
<button className="flex items-center justify-between w-full py-2 text-left transition-colors" id="showMoreFilters" style={{color: '#0d6b59'}}>
<span className="font-medium">Show More Filters</span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="more-filters-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<div className="more-filters space-y-6" id="moreFilters">

<div>
<button className="flex items-center justify-between w-full py-2 text-left" onclick="toggleDropdown('distinctives')">
<h4 className="font-medium text-neutral-900">Distinctives</h4>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-400 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="distinctives-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-content mt-2" id="distinctives-content">
<div className="flex flex-wrap gap-2">
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="distinctives" data-value="tattoos">Tattoos</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="distinctives" data-value="piercings">Piercings</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="distinctives" data-value="glasses">Glasses</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="distinctives" data-value="colorful-hair">Colorful Hair</button>
</div>
</div>
</div>

<div>
<button className="flex items-center justify-between w-full py-2 text-left" onclick="toggleDropdown('canshow')">
<h4 className="font-medium text-neutral-900">Can Show</h4>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-400 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="canshow-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-content mt-2" id="canshow-content">
<div className="flex flex-wrap gap-2">
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="canshow" data-value="face">Face</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="canshow" data-value="body">Body</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="canshow" data-value="hands">Hands</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="canshow" data-value="feet">Feet</button>
</div>
</div>
</div>

<div>
<button className="flex items-center justify-between w-full py-2 text-left" onclick="toggleDropdown('availability')">
<h4 className="font-medium text-neutral-900">Availability</h4>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-400 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="availability-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-content mt-2" id="availability-content">
<div className="flex flex-wrap gap-2">
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="availability" data-value="available">Available Now</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="availability" data-value="quick-turnaround">Quick Turnaround</button>
<button className="filter-tag px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm transition-colors" data-filter="availability" data-value="recent-jobs">Recent Jobs</button>
</div>
</div>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 slide-up stagger-2">

<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-2xl font-semibold text-neutral-900 tracking-tight">Available Creators</h2>
<p className="text-neutral-600 mt-1">247 creators found</p>
</div>
<div className="flex items-center space-x-3">
<select className="border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:border-transparent" style={{focus: 'ring-color: #0d6b59'}}>
<option>Sort by: Recent activity</option>
<option>Sort by: Rating</option>
<option>Sort by: Tier</option>
</select>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="creatorGrid"><div className="creator-card bg-white rounded-xl border border-gray-200 p-6 cursor-pointer group flex flex-col slide-up" style={{animationDelay: '0s'}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center space-x-3">
<img alt="Sarah Johnson" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
<div className="flex items-center space-x-2 mt-1">
<span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Top Rated</span>
<span className="text-gray-500 text-sm">25-32</span>
</div>
</div>
</div>
<button className="p-2 text-gray-400 hover:text-red-500 transition-colors" onclick="toggleSave(1)">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="flex-1 mb-4">
<div className="flex flex-wrap gap-1 mb-3">
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Health &amp; Wellness</span><span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Lifestyle</span><span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Fitness</span>
</div>
<div className="text-sm text-gray-600 mb-2">USA</div>
<div className="text-sm text-green-600 font-medium mb-2">Completed 8 jobs this month</div>
<div className="text-xs text-gray-500">Distinctives: tattoos</div>
</div>
<button className="w-full text-white py-2 px-4 rounded-lg font-medium transition-colors group-hover:opacity-90 mt-auto" onclick="openCreatorModal(1)" style={{backgroundColor: '#0d6b59'}}>
                    View Profile
                </button>
</div><div className="creator-card bg-white rounded-xl border border-gray-200 p-6 cursor-pointer group flex flex-col slide-up" style={{animationDelay: '0.1s'}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center space-x-3">
<img alt="Emma Chen" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&amp;h=400&amp;fit=crop&amp;crop=face"/>
<div>
<h3 className="font-semibold text-gray-900">Emma Chen</h3>
<div className="flex items-center space-x-2 mt-1">
<span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Standard</span>
<span className="text-gray-500 text-sm">18-24</span>
</div>
</div>
</div>
<button className="p-2 text-gray-400 hover:text-red-500 transition-colors" onclick="toggleSave(2)">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="flex-1 mb-4">
<div className="flex flex-wrap gap-1 mb-3">
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Fashion</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Beauty</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Lifestyle</span>
</div>
<div className="text-sm text-gray-600 mb-2">Asia</div>
<div className="text-sm text-green-600 font-medium mb-2">Completed 5 jobs this month</div>
<div className="text-xs text-gray-500">Distinctives: colorful hair</div>
</div>
<button className="w-full text-white py-2 px-4 rounded-lg font-medium transition-colors group-hover:opacity-90 mt-auto" onclick="openCreatorModal(2)" style={{backgroundColor: '#0d6b59'}}>
                    View Profile
                </button>
</div>
<div className="creator-card bg-white rounded-xl border border-gray-200 p-6 cursor-pointer group flex flex-col slide-up" style={{animationDelay: '0.2s'}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center space-x-3">
<img alt="Marcus Rodriguez" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&amp;h=400&amp;fit=crop&amp;crop=face"/>
<div>
<h3 className="font-semibold text-gray-900">Marcus Rodriguez</h3>
<div className="flex items-center space-x-2 mt-1">
<span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Top Rated</span>
<span className="text-gray-500 text-sm">33-44</span>
</div>
</div>
</div>
<button className="p-2 text-gray-400 hover:text-red-500 transition-colors" onclick="toggleSave(3)">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="flex-1 mb-4">
<div className="flex flex-wrap gap-1 mb-3">
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Technology</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Business</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Finance</span>
</div>
<div className="text-sm text-gray-600 mb-2">USA</div>
<div className="text-sm text-green-600 font-medium mb-2">Completed 12 jobs this month</div>
<div className="text-xs text-gray-500">Distinctives: glasses</div>
</div>
<button className="w-full text-white py-2 px-4 rounded-lg font-medium transition-colors group-hover:opacity-90 mt-auto" onclick="openCreatorModal(3)" style={{backgroundColor: '#0d6b59'}}>
                    View Profile
                </button>
</div>
<div className="creator-card bg-white rounded-xl border border-gray-200 p-6 cursor-pointer group flex flex-col slide-up" style={{animationDelay: '0.3s'}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center space-x-3">
<img alt="Olivia Parker" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<h3 className="font-semibold text-gray-900">Olivia Parker</h3>
<div className="flex items-center space-x-2 mt-1">
<span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Standard</span>
<span className="text-gray-500 text-sm">25-32</span>
</div>
</div>
</div>
<button className="p-2 text-gray-400 hover:text-red-500 transition-colors" onclick="toggleSave(4)">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="flex-1 mb-4">
<div className="flex flex-wrap gap-1 mb-3">
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Food &amp; Drink</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Lifestyle</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Travel</span>
</div>
<div className="text-sm text-gray-600 mb-2">UK</div>
<div className="text-sm text-green-600 font-medium mb-2">Completed 3 jobs this month</div>
<div className="text-xs text-gray-500">Distinctives: piercings</div>
</div>
<button className="w-full text-white py-2 px-4 rounded-lg font-medium transition-colors group-hover:opacity-90 mt-auto" onclick="openCreatorModal(4)" style={{backgroundColor: '#0d6b59'}}>
                    View Profile
                </button>
</div>
<div className="creator-card bg-white rounded-xl border border-gray-200 p-6 cursor-pointer group flex flex-col slide-up" style={{animationDelay: '0.4s'}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center space-x-3">
<img alt="James Wilson" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&amp;h=400&amp;fit=crop&amp;crop=face"/>
<div>
<h3 className="font-semibold text-gray-900">James Wilson</h3>
<div className="flex items-center space-x-2 mt-1">
<span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Top Rated</span>
<span className="text-gray-500 text-sm">25-32</span>
</div>
</div>
</div>
<button className="p-2 text-gray-400 hover:text-red-500 transition-colors" onclick="toggleSave(5)">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="flex-1 mb-4">
<div className="flex flex-wrap gap-1 mb-3">
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Sports</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Fitness</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Outdoors</span>
</div>
<div className="text-sm text-gray-600 mb-2">USA</div>
<div className="text-sm text-green-600 font-medium mb-2">Completed 7 jobs this month</div>
<div className="text-xs text-gray-500">Distinctives: tattoos</div>
</div>
<button className="w-full text-white py-2 px-4 rounded-lg font-medium transition-colors group-hover:opacity-90 mt-auto" onclick="openCreatorModal(5)" style={{backgroundColor: '#0d6b59'}}>
                    View Profile
                </button>
</div>
<div className="creator-card bg-white rounded-xl border border-gray-200 p-6 cursor-pointer group flex flex-col slide-up" style={{animationDelay: '0.5s'}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center space-x-3">
<img alt="Luna Martinez" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&amp;h=400&amp;fit=crop&amp;crop=face"/>
<div>
<h3 className="font-semibold text-gray-900">Luna Martinez</h3>
<div className="flex items-center space-x-2 mt-1">
<span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Standard</span>
<span className="text-gray-500 text-sm">18-24</span>
</div>
</div>
</div>
<button className="p-2 text-red-500 hover:text-red-600 transition-colors" onclick="toggleSave(6)">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<div className="flex-1 mb-4">
<div className="flex flex-wrap gap-1 mb-3">
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Art &amp; Design</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Creative</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Music</span>
</div>
<div className="text-sm text-gray-600 mb-2">EU</div>
<div className="text-sm text-green-600 font-medium mb-2">Completed 4 jobs this month</div>
<div className="text-xs text-gray-500">Distinctives: colorful hair, piercings</div>
</div>
<button className="w-full text-white py-2 px-4 rounded-lg font-medium transition-colors group-hover:opacity-90 mt-auto" onclick="openCreatorModal(6)" style={{backgroundColor: '#0d6b59'}}>
                    View Profile
                </button>
</div>
</div>

<div className="text-center mt-8">
<button className="px-8 py-3 border border-neutral-200 rounded-lg text-neutral-700 font-medium hover:bg-neutral-50 transition-colors">
                Load More Creators
            </button>
</div>
</main>
</div>
</div>

<div className="fixed inset-0 bg-black bg-opacity-50 modal-backdrop z-50 hidden" id="creatorModal">
<div className="flex items-center justify-center min-h-screen p-4">
<div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
<div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-xl">
<h3 className="text-xl font-semibold text-gray-900">Creator Profile</h3>
<button className="p-2 text-gray-400 hover:text-gray-600 transition-colors" onclick="closeCreatorModal()">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</button>
</div>
<div className="p-6" id="modalContent">

</div>
</div>
</div>
</div>


    </>
  );
}
