import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Current date for timeline calculations
    const currentDate = new Date();
    
    // Investment data with different time ranges
    const investmentData = {
      week: [
        {
          id: 1,
          title: 'Daily Market Analysis',
          type: 'analysis',
          startDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 2),
          endDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1),
          amount: 850000,
          color: 'from-[#2a7fff] to-[#0ea5e9]',
          icon: 'trending-up',
          teamSize: 2
        },
        {
          id: 2,
          title: 'ESG Quick Screen',
          type: 'esg',
          startDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()),
          endDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 2),
          amount: 425000,
          color: 'from-[#22d3ee] to-[#14b8a6]',
          icon: 'leaf',
          teamSize: 1
        }
      ],
      month: [
        {
          id: 1,
          title: 'Monthly Portfolio Review',
          type: 'analysis',
          startDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
          endDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), 12),
          amount: 1850000,
          color: 'from-[#2a7fff] to-[#0ea5e9]',
          icon: 'trending-up',
          teamSize: 4
        },
        {
          id: 2,
          title: 'ESG Compliance Audit',
          type: 'esg',
          startDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
          endDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
          amount: 1200000,
          color: 'from-[#22d3ee] to-[#14b8a6]',
          icon: 'leaf',
          teamSize: 3
        },
        {
          id: 3,
          title: 'Options Strategy',
          type: 'derivatives',
          startDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
          endDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), 28),
          amount: 3200000,
          color: 'from-[#a78bfa] to-[#7c3aed]',
          icon: 'shield',
          teamSize: 5
        }
      ],
      quarter: [
        {
          id: 1,
          title: 'Market Analysis',
          type: 'analysis',
          startDate: new Date(2023, 9, 28),
          endDate: new Date(2023, 10, 2),
          amount: 2500000,
          color: 'from-[#2a7fff] to-[#0ea5e9]',
          icon: 'trending-up',
          teamSize: 3
        },
        {
          id: 2,
          title: 'ESG Screening',
          type: 'esg',
          startDate: new Date(2023, 9, 29),
          endDate: new Date(2023, 10, 3),
          amount: 1800000,
          color: 'from-[#22d3ee] to-[#14b8a6]',
          icon: 'leaf',
          teamSize: 2
        },
        {
          id: 3,
          title: 'Derivatives Hedge',
          type: 'derivatives',
          startDate: new Date(2023, 9, 31),
          endDate: new Date(2023, 10, 6),
          amount: 4200000,
          color: 'from-[#a78bfa] to-[#7c3aed]',
          icon: 'shield',
          teamSize: 4
        }
      ],
      year: [
        {
          id: 1,
          title: 'Annual Strategy Review',
          type: 'analysis',
          startDate: new Date(2023, 1, 15),
          endDate: new Date(2023, 4, 30),
          amount: 8500000,
          color: 'from-[#2a7fff] to-[#0ea5e9]',
          icon: 'trending-up',
          teamSize: 8
        },
        {
          id: 2,
          title: 'ESG Transformation',
          type: 'esg',
          startDate: new Date(2023, 3, 1),
          endDate: new Date(2023, 8, 15),
          amount: 12000000,
          color: 'from-[#22d3ee] to-[#14b8a6]',
          icon: 'leaf',
          teamSize: 12
        },
        {
          id: 3,
          title: 'Risk Management Overhaul',
          type: 'derivatives',
          startDate: new Date(2023, 6, 1),
          endDate: new Date(2023, 11, 31),
          amount: 15500000,
          color: 'from-[#a78bfa] to-[#7c3aed]',
          icon: 'shield',
          teamSize: 15
        }
      ]
    };

    // Current view state
    let currentPeriod = 'quarter';
    let currentSort = 'date';
    let activeFilters = ['analysis', 'esg'];
    let activeTab = 'timeline';
    let currentTimelineData = {};

    // Animation sequence
    function startEntranceAnimation() {
      // Start sequence
      setTimeout(() => {
        document.querySelector('.hero-title').classList.add('animate-fade-in-up');
      }, 100);

      setTimeout(() => {
        document.querySelector('.hero-subtitle').classList.add('animate-fade-in-up', 'animate-stagger-2');
      }, 300);

      setTimeout(() => {
        document.querySelector('.main-card').classList.add('animate-fade-in-scale', 'animate-stagger-3');
      }, 500);

      setTimeout(() => {
        document.querySelector('.card-header').classList.add('animate-slide-in-left', 'animate-stagger-4');
        document.querySelector('.nav-controls').classList.add('animate-slide-in-right', 'animate-stagger-4');
      }, 700);

      setTimeout(() => {
        document.querySelector('.nav-tabs').classList.add('animate-fade-in-up', 'animate-stagger-5');
      }, 900);

      setTimeout(() => {
        document.querySelector('.timeline-content').classList.add('animate-fade-in-up', 'animate-stagger-6');
      }, 1100);

      setTimeout(() => {
        // Animate timeline items individually
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
          }, index * 150);
        });
      }, 1300);

      setTimeout(() => {
        document.querySelector('.card-footer').classList.add('animate-fade-in-up', 'animate-stagger-8');
      }, 1500);
    }

    // Initialize app
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();
      
      initializeEventListeners();
      updateTimelineData();
      renderTimeline();
      updateStats();
      
      // Start entrance animation sequence
      startEntranceAnimation();
    });

    function initializeEventListeners() {
      // Period dropdown
      document.getElementById('period-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown('period-dropdown');
      });

      document.querySelectorAll('.period-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
          // Update active state
          document.querySelectorAll('.period-option').forEach(b => b.classList.remove('bg-white/[0.06]'));
          e.target.classList.add('bg-white/[0.06]');
          
          currentPeriod = e.target.dataset.period;
          document.getElementById('period-text').textContent = currentPeriod.charAt(0).toUpperCase() + currentPeriod.slice(1);
          
          updatePeriodSubtitle();
          updateTimelineData();
          renderTimeline();
          updateStats();
          hideDropdown('period-dropdown');
        });
      });

      // Filter dropdown
      document.getElementById('filter-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown('filter-dropdown');
      });

      document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
          const filter = e.target.dataset.filter;
          if (e.target.checked) {
            if (!activeFilters.includes(filter)) {
              activeFilters.push(filter);
            }
          } else {
            activeFilters = activeFilters.filter(f => f !== filter);
          }
          updateFilterCount();
          renderTimeline();
        });
      });

      document.getElementById('clear-filters').addEventListener('click', () => {
        activeFilters = [];
        document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = false);
        updateFilterCount();
        renderTimeline();
      });

      // Sort dropdown
      document.getElementById('sort-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown('sort-dropdown');
      });

      document.querySelectorAll('.sort-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
          currentSort = e.target.dataset.sort;
          document.querySelectorAll('.sort-option').forEach(b => b.classList.remove('bg-white/[0.06]'));
          e.target.classList.add('bg-white/[0.06]');
          renderTimeline();
          hideDropdown('sort-dropdown');
        });
      });

      // Navigation tabs
      document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
          const tabName = e.currentTarget.dataset.tab;
          switchTab(tabName);
        });
      });

      // Timeline navigation
      document.getElementById('prev-period').addEventListener('click', () => {
        console.log('Previous period clicked');
      });

      document.getElementById('next-period').addEventListener('click', () => {
        console.log('Next period clicked');
      });

      // New investment modal
      document.getElementById('new-investment-btn').addEventListener('click', () => {
        const modal = document.getElementById('investment-modal');
        modal.classList.remove('hidden');
        modal.querySelector('.w-full.max-w-md').style.animation = 'fadeInScale 0.3s ease-out';
        const today = new Date();
        document.getElementById('investment-start').valueAsDate = today;
        document.getElementById('investment-end').valueAsDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
      });

      document.getElementById('close-modal').addEventListener('click', closeModal);
      document.getElementById('cancel-investment').addEventListener('click', closeModal);

      document.getElementById('investment-form').addEventListener('submit', (e) => {
        e.preventDefault();
        addNewInvestment();
      });

      // Close dropdowns when clicking outside
      document.addEventListener('click', () => {
        hideDropdown('period-dropdown');
        hideDropdown('filter-dropdown');
        hideDropdown('sort-dropdown');
      });

      // Close modal when clicking backdrop
      document.getElementById('investment-modal').addEventListener('click', (e) => {
        if (e.target.id === 'investment-modal') {
          closeModal();
        }
      });
    }

    function updateTimelineData() {
      currentTimelineData = getTimelineConfig(currentPeriod);
    }

    function getTimelineConfig(period) {
      const now = new Date();
      
      switch (period) {
        case 'week':
          const weekStart = new Date(now);
          weekStart.setDate(now.getDate() - now.getDay()); // Start of week (Sunday)
          return {
            investments: investmentData.week,
            columns: 7,
            startDate: weekStart,
            getColumnLabel: (index) => {
              const date = new Date(weekStart);
              date.setDate(weekStart.getDate() + index);
              const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
              return `${date.getDate()} ${dayNames[date.getDay()]}`;
            },
            getPeriodLabel: () => {
              const weekEnd = new Date(weekStart);
              weekEnd.setDate(weekStart.getDate() + 6);
              return `${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${weekEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
            },
            getCurrentMarkerPosition: () => {
              const dayOfWeek = now.getDay();
              return `calc((100% / 7) * ${dayOfWeek} + (100% / 14))`;
            },
            showCurrentMarker: true
          };

        case 'month':
          const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
          const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
          const columns = Math.min(daysInMonth, 31);
          return {
            investments: investmentData.month,
            columns: columns,
            startDate: monthStart,
            getColumnLabel: (index) => {
              return `${index + 1}`;
            },
            getPeriodLabel: () => {
              return now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
            },
            getCurrentMarkerPosition: () => {
              const currentDay = now.getDate();
              return `calc((100% / ${columns}) * ${currentDay - 1} + (100% / ${columns * 2}))`;
            },
            showCurrentMarker: true
          };

        case 'quarter':
          return {
            investments: investmentData.quarter,
            columns: 14,
            startDate: new Date(2023, 9, 27),
            getColumnLabel: (index) => {
              const dates = [
                '27 F', '28 S', '29 S', '30 M', '31 T', '1 W', '2 T',
                '3 F', '4 S', '5 S', '6 M', '7 T', '8 W', '9 T'
              ];
              return dates[index] || '';
            },
            getPeriodLabel: () => 'October - November 2023',
            getCurrentMarkerPosition: () => 'calc((100% / 14) * 4)',
            showCurrentMarker: false
          };

        case 'year':
          return {
            investments: investmentData.year,
            columns: 12,
            startDate: new Date(2023, 0, 1),
            getColumnLabel: (index) => {
              const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
              return monthNames[index] || '';
            },
            getPeriodLabel: () => '2023',
            getCurrentMarkerPosition: () => {
              const currentMonth = now.getMonth();
              return `calc((100% / 12) * ${currentMonth} + (100% / 24))`;
            },
            showCurrentMarker: true
          };

        default:
          return getTimelineConfig('quarter');
      }
    }

    function switchTab(tabName) {
      activeTab = tabName;
      
      document.querySelectorAll('.nav-tab').forEach(tab => {
        const isActive = tab.dataset.tab === tabName;
        const tabText = tab.dataset.tab.charAt(0).toUpperCase() + tab.dataset.tab.slice(1);
        
        if (isActive) {
          tab.className = 'nav-tab relative px-3.5 py-2 text-sm rounded-lg text-white';
          tab.innerHTML = `
            <span class="relative z-10 font-medium">${tabText}</span>
            <span class="absolute inset-0 rounded-lg bg-white/[0.06]"></span>
            <span class="absolute left-1/2 top-full h-[2px] w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#2a7fff] to-transparent"></span>
          `;
        } else {
          tab.className = 'nav-tab relative px-3.5 py-2 text-sm text-neutral-300 hover:text-white rounded-lg hover:bg-white/[0.06] transition';
          tab.innerHTML = tabText;
        }
      });
      
      document.querySelectorAll('.tab-content').forEach(content => {
        if (content.dataset.content === tabName) {
          content.classList.remove('hidden');
          content.style.animation = 'fadeInUp 0.4s ease-out';
        } else {
          content.classList.add('hidden');
        }
      });

      if (tabName === 'timeline') {
        renderTimeline();
      }

      if (window.lucide) lucide.createIcons();
    }

    function toggleDropdown(id) {
      const dropdown = document.getElementById(id);
      if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        dropdown.style.animation = 'fadeInScale 0.2s ease-out';
      } else {
        dropdown.classList.add('hidden');
      }
    }

    function hideDropdown(id) {
      document.getElementById(id).classList.add('hidden');
    }

    function updatePeriodSubtitle() {
      const subtitles = {
        week: 'Weekly portfolio overview',
        month: 'Monthly portfolio overview', 
        quarter: 'Q4 portfolio overview',
        year: 'Annual portfolio overview'
      };
      document.getElementById('period-subtitle').textContent = subtitles[currentPeriod];
    }

    function updateFilterCount() {
      const count = activeFilters.length;
      const countElement = document.getElementById('filter-count');
      if (count > 0) {
        countElement.textContent = count;
        countElement.classList.remove('hidden');
      } else {
        countElement.classList.add('hidden');
      }
    }

    function renderTimeline() {
      renderTimelineHeader();
      renderTimelineGrid();
      renderTasks();
      updateCurrentMarker();
    }

    function renderTimelineHeader() {
      const header = document.getElementById('timeline-header');
      const { columns, getColumnLabel, getPeriodLabel } = currentTimelineData;
      
      // Update period label
      document.getElementById('current-period').textContent = getPeriodLabel();
      
      let headerHTML = '';
      
      if (currentPeriod === 'quarter') {
        // Special layout for quarter view with month headers
        headerHTML = `
          <div class="grid [grid-template-columns:repeat(${columns},minmax(80px,1fr))]">
            <div class="col-[1/8] px-4 py-3 text-sm text-neutral-400 font-medium">October</div>
            <div class="col-[8/15] px-4 py-3 text-sm text-neutral-400 font-medium">November</div>
          </div>
          <div class="grid [grid-template-columns:repeat(${columns},minmax(80px,1fr))] text-[11px] uppercase tracking-wide text-neutral-400/90">
            ${Array.from({ length: columns }, (_, i) => 
              `<div class="px-4 py-2 border-l border-white/5">${getColumnLabel(i)}</div>`
            ).join('')}
          </div>
        `;
      } else {
        // Single row header for other views
        headerHTML = `
          <div class="grid [grid-template-columns:repeat(${columns},minmax(80px,1fr))] text-[11px] uppercase tracking-wide text-neutral-400/90">
            ${Array.from({ length: columns }, (_, i) => 
              `<div class="px-4 py-2 border-l border-white/5">${getColumnLabel(i)}</div>`
            ).join('')}
          </div>
        `;
      }
      
      header.innerHTML = headerHTML;
    }

    function renderTimelineGrid() {
      const grid = document.getElementById('timeline-grid');
      const { columns } = currentTimelineData;
      
      let gridHTML = `<div class="grid [grid-template-columns:repeat(${columns},minmax(80px,1fr))]">`;
      for (let i = 0; i < columns; i++) {
        const bgClass = i % 2 === 1 ? 'bg-white/[0.01]' : '';
        const borderClass = i === columns - 1 ? 'border-r' : '';
        gridHTML += `<div class="h-[250px] border-l border-white/[0.05] ${bgClass} ${borderClass}"></div>`;
      }
      gridHTML += '</div>';
      
      grid.innerHTML = gridHTML;
    }

    function renderTasks() {
      const container = document.getElementById('tasks-container');
      const filteredInvestments = getFilteredInvestments();
      const { columns } = currentTimelineData;
      
      let tasksHTML = `<div class="grid [grid-template-columns:repeat(${columns},minmax(80px,1fr))] gap-y-4 p-4">`;
      
      filteredInvestments.forEach((investment, index) => {
        const startCol = getColumnForDate(investment.startDate);
        const endCol = getColumnForDate(investment.endDate);
        
        tasksHTML += `
          <div class="col-[1/${columns + 1}] h-1"></div>
          <div class="col-[${startCol}/${endCol + 1}] timeline-item">
            <div class="relative flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5 shadow-[0_6px_24px_-10px_rgba(0,0,0,0.6)] hover:bg-white/[0.08] transition cursor-pointer" onclick="editInvestment(${investment.id})">
              <span class="absolute inset-y-0 left-0 w-1 rounded-l-xl bg-gradient-to-b ${investment.color}"></span>
              <div class="pl-3">
                <h3 class="text-sm font-medium tracking-tight">${investment.title}</h3>
                <div class="mt-0.5 flex items-center gap-1.5 text-xs text-neutral-400">
                  <i data-lucide="${investment.icon}" class="h-3 w-3 text-[#2a7fff]"></i>
                  <span>${formatAmount(investment.amount)}</span>
                </div>
              </div>
              <div class="flex items-center gap-1.5">
                <img alt="Assignee" class="h-6 w-6 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
                <div class="h-6 w-6 rounded-full bg-white/10 text-[11px] text-neutral-200 grid place-items-center">+${investment.teamSize}</div>
              </div>
            </div>
          </div>
        `;
      });
      
      tasksHTML += '</div>';
      container.innerHTML = tasksHTML;
      
      if (window.lucide) lucide.createIcons();
      
      // Animate timeline items after render
      setTimeout(() => {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
          }, index * 100);
        });
      }, 50);
    }

    function updateCurrentMarker() {
      const marker = document.getElementById('current-day-marker');
      const { getCurrentMarkerPosition, showCurrentMarker } = currentTimelineData;
      
      if (showCurrentMarker) {
        marker.style.left = getCurrentMarkerPosition();
        marker.classList.remove('hidden');
      } else {
        marker.classList.add('hidden');
      }
    }

    function getFilteredInvestments() {
      const { investments } = currentTimelineData;
      let filteredInvestments = investments.filter(investment => {
        return activeFilters.length === 0 || activeFilters.includes(investment.type);
      });

      if (currentSort === 'date') {
        filteredInvestments.sort((a, b) => a.startDate - b.startDate);
      } else if (currentSort === 'amount') {
        filteredInvestments.sort((a, b) => b.amount - a.amount);
      } else if (currentSort === 'type') {
        filteredInvestments.sort((a, b) => a.type.localeCompare(b.type));
      }

      return filteredInvestments;
    }

    function getColumnForDate(date) {
      const { startDate, columns } = currentTimelineData;
      
      if (currentPeriod === 'week') {
        const dayOfWeek = date.getDay();
        return Math.max(1, Math.min(columns, dayOfWeek + 1));
      } else if (currentPeriod === 'month') {
        const dayOfMonth = date.getDate();
        return Math.max(1, Math.min(columns, dayOfMonth));
      } else if (currentPeriod === 'quarter') {
        const baseDate = new Date(2023, 9, 27);
        const dayDiff = Math.floor((date - baseDate) / (1000 * 60 * 60 * 24));
        return Math.max(1, Math.min(columns, dayDiff + 1));
      } else if (currentPeriod === 'year') {
        const month = date.getMonth();
        return Math.max(1, Math.min(columns, month + 1));
      }
      
      return 1;
    }

    function formatAmount(amount) {
      if (amount >= 1000000) {
        return `$${(amount / 1000000).toFixed(1)}M`;
      } else if (amount >= 1000) {
        return `$${(amount / 1000).toFixed(0)}K`;
      } else {
        return `$${amount.toLocaleString()}`;
      }
    }

    function updateStats() {
      const { investments } = currentTimelineData;
      const totalAmount = investments.reduce((sum, inv) => sum + inv.amount, 0);
      document.getElementById('total-managed').textContent = `${formatAmount(totalAmount)} managed`;
      document.getElementById('active-positions').textContent = `${investments.length} active positions`;
    }

    function closeModal() {
      const modal = document.getElementById('investment-modal');
      modal.style.animation = 'fadeInScale 0.2s ease-out reverse';
      setTimeout(() => {
        modal.classList.add('hidden');
        document.getElementById('investment-form').reset();
      }, 200);
    }

    function addNewInvestment() {
      const title = document.getElementById('investment-title').value;
      const type = document.getElementById('investment-type').value;
      const startDate = new Date(document.getElementById('investment-start').value);
      const endDate = new Date(document.getElementById('investment-end').value);
      const amountText = document.getElementById('investment-amount').value;
      
      if (!title || !amountText) {
        alert('Please fill in all required fields');
        return;
      }

      const amount = parseFloat(amountText.replace(/[$,]/g, ''));
      if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
      }

      const newInvestment = {
        id: currentTimelineData.investments.length + 1,
        title,
        type,
        startDate,
        endDate,
        amount,
        color: getColorForType(type),
        icon: getIconForType(type),
        teamSize: Math.floor(Math.random() * 4) + 1
      };

      currentTimelineData.investments.push(newInvestment);
      investmentData[currentPeriod].push(newInvestment);
      
      renderTimeline();
      updateStats();
      closeModal();

      if (!activeFilters.includes(type)) {
        activeFilters.push(type);
        document.querySelector(`[data-filter="${type}"]`).checked = true;
        updateFilterCount();
      }
    }

    function getColorForType(type) {
      const colors = {
        analysis: 'from-[#2a7fff] to-[#0ea5e9]',
        esg: 'from-[#22d3ee] to-[#14b8a6]',
        derivatives: 'from-[#a78bfa] to-[#7c3aed]'
      };
      return colors[type] || 'from-[#6b7280] to-[#4b5563]';
    }

    function getIconForType(type) {
      const icons = {
        analysis: 'trending-up',
        esg: 'leaf',
        derivatives: 'shield'
      };
      return icons[type] || 'circle';
    }

    function editInvestment(id) {
      const investment = currentTimelineData.investments.find(inv => inv.id === id);
      if (investment) {
        console.log('Editing investment:', investment.title);
      }
    }

    window.addEventListener('resize', () => {
      if (activeTab === 'timeline') {
        renderTimeline();
      }
    });

    updateFilterCount();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-6xl hero-section text-center mb-12">
<h1 className="hero-title text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4 font-manrope font-medium animate-fade-in-up" style={{}}>
      Investment
      <span className="bg-gradient-to-r from-[#2a7fff] via-[#0ea5e9] to-[#22d3ee] bg-clip-text text-transparent font-manrope font-medium animate-gradient" style={{}}>Timeline</span>
</h1>
<p className="hero-subtitle text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-sans animate-fade-in-up animate-stagger-2">
      Track your portfolio performance and manage investment decisions with intelligent timeline visualization
    </p>
</div>

<div className="main-card w-full max-w-6xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden animate-fade-in-scale animate-stagger-3 border-white/10 border rounded-3xl backdrop-blur-sm">

<div className="card-header flex gap-4 animate-slide-in-left animate-stagger-4 pt-8 pr-8 pb-6 pl-8 items-start justify-between">
<div className="">
<h2 className="text-2xl md:text-3xl tracking-tight font-manrope font-medium" style={{}}>Investment Timeline</h2>
<p className="mt-1 text-sm text-neutral-400 font-sans" id="period-subtitle">Q4 portfolio overview</p>
</div>
<div className="nav-controls flex items-center gap-3 animate-slide-in-right animate-stagger-4">

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-neutral-200 hover:bg-white/[0.08] transition" id="period-btn">
<svg className="lucide lucide-calendar h-4 w-4 text-neutral-300" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-medium font-sans" id="period-text">Quarter</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute top-full mt-2 right-0 w-48 rounded-xl border border-white/10 bg-[#0b0f14] backdrop-blur-sm shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] z-20 hidden" id="period-dropdown">
<div className="p-2">
<button className="period-option w-full px-3 py-2 text-left text-sm rounded-lg hover:bg-white/[0.06] transition font-sans" data-period="week">Week</button>
<button className="period-option w-full px-3 py-2 text-left text-sm rounded-lg hover:bg-white/[0.06] transition font-sans" data-period="month">Month</button>
<button className="period-option w-full px-3 py-2 text-left text-sm rounded-lg hover:bg-white/[0.06] transition bg-white/[0.06] font-sans" data-period="quarter">Quarter</button>
<button className="period-option w-full px-3 py-2 text-left text-sm rounded-lg hover:bg-white/[0.06] transition font-sans" data-period="year">Year</button>
</div>
</div>
</div>

<button className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white shadow-[0_6px_20px_-6px_rgba(59,130,246,0.5)] bg-gradient-to-b from-[#1f78ff] to-[#1766e8] hover:from-[#2a82ff] hover:to-[#1a6ef1] transition font-sans shimmer-effect relative overflow-hidden" id="new-investment-btn">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
          New Investment
        </button>
</div>
</div>

<div className="mx-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="nav-tabs px-8 pt-6 animate-fade-in-up animate-stagger-5">
<div className="flex items-center justify-between">
<nav className="flex gap-1">
<button className="nav-tab relative px-3.5 py-2 text-sm text-neutral-300 hover:text-white rounded-lg hover:bg-white/[0.06] transition" data-tab="portfolio">Portfolio</button>
<button className="nav-tab relative text-sm text-white rounded-lg pt-2 pr-3.5 pb-2 pl-3.5" data-tab="timeline">
<span className="relative z-10 font-medium">Timeline</span>
<span className="absolute inset-0 rounded-lg bg-white/[0.06]"></span>
<span className="absolute left-1/2 top-full h-[2px] w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#2a7fff] to-transparent"></span>
</button>
<button className="nav-tab relative px-3.5 py-2 text-sm text-neutral-300 hover:text-white rounded-lg hover:bg-white/[0.06] transition" data-tab="analytics">Analytics</button>
<button className="nav-tab relative px-3.5 py-2 text-sm text-neutral-300 hover:text-white rounded-lg hover:bg-white/[0.06] transition" data-tab="holdings">Holdings</button>
</nav>

<div className="flex items-center gap-2">
<div className="relative">
<button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.06] transition font-sans" id="filter-btn">
<svg className="lucide lucide-filter h-4 w-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
              Filter
              <span className="ml-1 px-1.5 py-0.5 text-xs bg-[#2a7fff] text-white rounded-md font-sans" id="filter-count">2</span>
</button>

<div className="absolute top-full mt-2 right-0 w-56 rounded-xl border border-white/10 bg-[#0b0f14] backdrop-blur-sm shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] z-20 hidden" id="filter-dropdown">
<div className="p-4">
<div className="mb-3">
<label className="block text-xs font-medium text-neutral-300 mb-2 font-sans">Investment Type</label>
<div className="space-y-2">
<label className="flex items-center gap-2 text-sm">
<input checked="" className="filter-checkbox rounded border-white/20 bg-white/5 text-[#2a7fff]" data-filter="analysis" type="checkbox"/>
<span className="font-sans">Market Analysis</span>
</label>
<label className="flex items-center gap-2 text-sm">
<input checked="" className="filter-checkbox rounded border-white/20 bg-white/5 text-[#2a7fff]" data-filter="esg" type="checkbox"/>
<span className="font-sans">ESG Screening</span>
</label>
<label className="flex items-center gap-2 text-sm">
<input className="filter-checkbox rounded border-white/20 bg-white/5 text-[#2a7fff]" data-filter="derivatives" type="checkbox"/>
<span className="font-sans">Derivatives</span>
</label>
</div>
</div>
<div className="pt-3 border-t border-white/10">
<button className="text-xs text-[#2a7fff] hover:text-blue-300 transition font-sans" id="clear-filters">Clear all</button>
</div>
</div>
</div>
</div>
<div className="relative">
<button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.06] transition font-sans" id="sort-btn">
<svg className="lucide lucide-sort-desc h-4 w-4" data-lucide="sort-desc" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 16 4 4 4-4"></path><path d="M7 20V4"></path><path d="M11 4h10"></path><path d="M11 8h7"></path><path d="M11 12h4"></path></svg>
              Sort
            </button>

<div className="absolute top-full mt-2 right-0 w-48 rounded-xl border border-white/10 bg-[#0b0f14] backdrop-blur-sm shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] z-20 hidden" id="sort-dropdown">
<div className="p-2">
<button className="sort-option w-full px-3 py-2 text-left text-sm rounded-lg hover:bg-white/[0.06] transition bg-white/[0.06] font-sans" data-sort="date">Date</button>
<button className="sort-option w-full px-3 py-2 text-left text-sm rounded-lg hover:bg-white/[0.06] transition font-sans" data-sort="amount">Amount</button>
<button className="sort-option w-full px-3 py-2 text-left text-sm rounded-lg hover:bg-white/[0.06] transition font-sans" data-sort="type">Type</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="timeline-content mt-6 h-[400px] animate-fade-in-up animate-stagger-6">

<div className="tab-content hidden" data-content="portfolio">
<div className="px-8">
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
<div className="text-center py-12">
<svg className="lucide lucide-briefcase h-12 w-12 text-neutral-400 mx-auto mb-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<h3 className="text-lg font-semibold text-neutral-200 mb-2 font-sans">Portfolio Overview</h3>
<p className="text-sm text-neutral-400 mb-6 font-sans">View your complete investment portfolio performance and allocation.</p>
<button className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-b from-[#1f78ff] to-[#1766e8] hover:from-[#2a82ff] hover:to-[#1a6ef1] transition font-sans">
<svg className="lucide lucide-pie-chart h-4 w-4" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
                View Portfolio
              </button>
</div>
</div>
</div>
</div>

<div className="tab-content" data-content="timeline">
<div className="px-8">

<div className="flex items-center justify-between mb-4">
<button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.06] transition font-sans" id="prev-period">
<svg className="lucide lucide-chevron-left h-4 w-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
              Previous
            </button>
<div className="text-sm text-neutral-400 font-sans" id="current-period">October - November 2023</div>
<button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.06] transition font-sans" id="next-period">
              Next
              <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="relative overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">

<div className="min-w-[900px]" id="timeline-container">

<div className="border-b border-white/10" id="timeline-header">
<div className="grid [grid-template-columns:repeat(14,minmax(80px,1fr))]">
<div className="col-[1/8] px-4 py-3 text-sm text-neutral-400 font-medium">October</div>
<div className="col-[8/15] px-4 py-3 text-sm text-neutral-400 font-medium">November</div>
</div>
<div className="grid [grid-template-columns:repeat(14,minmax(80px,1fr))] text-[11px] uppercase tracking-wide text-neutral-400/90">
<div className="px-4 py-2 border-l border-white/5">27 F</div><div className="px-4 py-2 border-l border-white/5">28 S</div><div className="px-4 py-2 border-l border-white/5">29 S</div><div className="px-4 py-2 border-l border-white/5">30 M</div><div className="px-4 py-2 border-l border-white/5">31 T</div><div className="px-4 py-2 border-l border-white/5">1 W</div><div className="px-4 py-2 border-l border-white/5">2 T</div><div className="px-4 py-2 border-l border-white/5">3 F</div><div className="px-4 py-2 border-l border-white/5">4 S</div><div className="px-4 py-2 border-l border-white/5">5 S</div><div className="px-4 py-2 border-l border-white/5">6 M</div><div className="px-4 py-2 border-l border-white/5">7 T</div><div className="px-4 py-2 border-l border-white/5">8 W</div><div className="px-4 py-2 border-l border-white/5">9 T</div>
</div>
</div>

<div className="relative">

<div id="timeline-grid"><div className="grid [grid-template-columns:repeat(14,minmax(80px,1fr))]"><div className="h-[250px] border-l border-white/[0.05]"></div><div className="h-[250px] border-l border-white/[0.05] bg-white/[0.01]"></div><div className="h-[250px] border-l border-white/[0.05]"></div><div className="h-[250px] border-l border-white/[0.05] bg-white/[0.01]"></div><div className="h-[250px] border-l border-white/[0.05]"></div><div className="h-[250px] border-l border-white/[0.05] bg-white/[0.01]"></div><div className="h-[250px] border-l border-white/[0.05]"></div><div className="h-[250px] border-l border-white/[0.05] bg-white/[0.01]"></div><div className="h-[250px] border-l border-white/[0.05]"></div><div className="h-[250px] border-l border-white/[0.05] bg-white/[0.01]"></div><div className="h-[250px] border-l border-white/[0.05]"></div><div className="h-[250px] border-l border-white/[0.05] bg-white/[0.01]"></div><div className="h-[250px] border-l border-white/[0.05]"></div><div className="h-[250px] border-l border-white/[0.05] bg-white/[0.01] border-r"></div></div></div>

<div className="pointer-events-none absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2a7fff] to-transparent hidden" id="current-day-marker">
</div>

<div className="absolute inset-0" id="tasks-container"><div className="grid [grid-template-columns:repeat(14,minmax(80px,1fr))] gap-y-4 p-4">
<div className="col-[1/15] h-1"></div>
<div className="col-[2/8] timeline-item">
<div className="relative flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5 shadow-[0_6px_24px_-10px_rgba(0,0,0,0.6)] hover:bg-white/[0.08] transition cursor-pointer" onclick="editInvestment(1)">
<span className="absolute inset-y-0 left-0 w-1 rounded-l-xl bg-gradient-to-b from-[#2a7fff] to-[#0ea5e9]"></span>
<div className="pl-3">
<h3 className="text-sm font-medium tracking-tight">Market Analysis</h3>
<div className="mt-0.5 flex items-center gap-1.5 text-xs text-neutral-400">
<svg className="lucide lucide-trending-up h-3 w-3 text-[#2a7fff]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span>$2.5M</span>
</div>
</div>
<div className="flex items-center gap-1.5">
<img alt="Assignee" className="h-6 w-6 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="h-6 w-6 rounded-full bg-white/10 text-[11px] text-neutral-200 grid place-items-center">+3</div>
</div>
</div>
</div>
<div className="col-[1/15] h-1"></div>
<div className="col-[3/9] timeline-item" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="relative flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5 shadow-[0_6px_24px_-10px_rgba(0,0,0,0.6)] hover:bg-white/[0.08] transition cursor-pointer" onclick="editInvestment(2)">
<span className="absolute inset-y-0 left-0 w-1 rounded-l-xl bg-gradient-to-b from-[#22d3ee] to-[#14b8a6]"></span>
<div className="pl-3">
<h3 className="text-sm font-medium tracking-tight">ESG Screening</h3>
<div className="mt-0.5 flex items-center gap-1.5 text-xs text-neutral-400">
<svg className="lucide lucide-leaf h-3 w-3 text-[#2a7fff]" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span>$1.8M</span>
</div>
</div>
<div className="flex items-center gap-1.5">
<img alt="Assignee" className="h-6 w-6 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="h-6 w-6 rounded-full bg-white/10 text-[11px] text-neutral-200 grid place-items-center">+2</div>
</div>
</div>
</div>
</div></div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden" data-content="analytics">
<div className="px-8">
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
<div className="text-center py-12">
<svg className="lucide lucide-bar-chart-3 h-12 w-12 text-neutral-400 mx-auto mb-4" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<h3 className="text-lg font-semibold text-neutral-200 mb-2 font-sans">Analytics Dashboard</h3>
<p className="text-sm text-neutral-400 mb-6 font-sans">Deep dive into performance metrics, risk analysis, and market insights.</p>
<button className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-b from-[#1f78ff] to-[#1766e8] hover:from-[#2a82ff] hover:to-[#1a6ef1] transition font-sans">
<svg className="lucide lucide-trending-up h-4 w-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                View Analytics
              </button>
</div>
</div>
</div>
</div>

<div className="tab-content hidden" data-content="holdings">
<div className="px-8">
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
<div className="text-center py-12">
<svg className="lucide lucide-layers h-12 w-12 text-neutral-400 mx-auto mb-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<h3 className="text-lg font-semibold text-neutral-200 mb-2 font-sans">Current Holdings</h3>
<p className="text-sm text-neutral-400 mb-6 font-sans">Detailed view of all your current positions and asset allocation.</p>
<button className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-b from-[#1f78ff] to-[#1766e8] hover:from-[#2a82ff] hover:to-[#1a6ef1] transition font-sans">
<svg className="lucide lucide-list h-4 w-4" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h.01"></path><path d="M3 18h.01"></path><path d="M3 6h.01"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M8 6h13"></path></svg>
                View Holdings
              </button>
</div>
</div>
</div>
</div>
</div>

<div className="card-footer flex items-center justify-between p-8 pt-6 text-xs text-neutral-400 animate-fade-in-up animate-stagger-8">
<div className="flex items-center gap-4">
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-dollar-sign h-3.5 w-3.5" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span className="font-sans" id="total-managed">$8.5M managed</span>
</span>
<span className="hidden sm:inline font-sans">•</span>
<span className="hidden sm:inline font-sans" id="active-positions">3 active positions</span>
</div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-briefcase h-3.5 w-3.5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="font-sans">Portfolio timeline</span>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6 hidden" id="investment-modal">
<div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0f14] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)]">
<div className="p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight font-sans">New Investment</h2>
<button className="text-neutral-400 hover:text-white" id="close-modal">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<form className="space-y-4" id="investment-form">
<div>
<label className="block text-sm font-medium text-neutral-300 mb-2 font-sans">Title</label>
<input className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-[#2a7fff]" id="investment-title" placeholder="Investment title" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-300 mb-2 font-sans">Type</label>
<select className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#2a7fff]" id="investment-type">
<option className="font-sans" value="analysis">Market Analysis</option>
<option className="font-sans" value="esg">ESG Screening</option>
<option className="font-sans" value="derivatives">Derivatives</option>
</select>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-300 mb-2 font-sans">Start Date</label>
<input className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#2a7fff]" id="investment-start" type="date"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-300 mb-2 font-sans">End Date</label>
<input className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#2a7fff]" id="investment-end" type="date"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-300 mb-2 font-sans">Amount</label>
<input className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-[#2a7fff]" id="investment-amount" placeholder="$0.00" type="text"/>
</div>
<div className="flex gap-3 pt-4">
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-neutral-300 border border-white/10 rounded-xl hover:bg-white/[0.06] transition font-sans" id="cancel-investment" type="button">
              Cancel
            </button>
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-b from-[#1f78ff] to-[#1766e8] hover:from-[#2a82ff] hover:to-[#1a6ef1] rounded-xl transition shadow-[0_6px_20px_-6px_rgba(59,130,246,0.5)] font-sans" type="submit">
              Add Investment
            </button>
</div>
</form>
</div>
</div>
</div>


    </>
  );
}
