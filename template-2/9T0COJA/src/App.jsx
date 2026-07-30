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
      
    // Lucide icons
    lucide.createIcons();

    // Bar Chart Data
    const ctx = document.getElementById('spendingChart').getContext('2d');
    const spendingCategories = ['Groceries', 'Transport', 'Entertainment', 'Bills'];
    const spendingData = [450, 150, 200, 500];
    const barColors = ['#2B5CE6', '#4B7BF5', '#A5B1C8', '#1A1F36'];

    // Chart.js: Custom tooltip handler
    const externalTooltipHandler = (context) => {
      const {chart, tooltip} = context;
      const tooltipEl = document.getElementById('chart-tooltip');
      if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
      }
      if (tooltip.body) {
        const idx = tooltip.dataPoints[0].dataIndex;
        const label = spendingCategories[idx];
        const value = spendingData[idx];
        tooltipEl.innerHTML = `<strong>${label}</strong><br/><span style="color:#2B5CE6;">$${value.toLocaleString()}</span>`;
      }
      const canvasRect = chart.canvas.getBoundingClientRect();
      tooltipEl.style.opacity = 1;
      tooltipEl.style.left = canvasRect.left + window.scrollX + tooltip.caretX - tooltipEl.offsetWidth / 2 + 'px';
      tooltipEl.style.top = canvasRect.top + window.scrollY + tooltip.caretY - tooltipEl.offsetHeight - 16 + 'px';
    };

    // Chart.js Bar Chart
    const spendingChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: spendingCategories,
        datasets: [{
          label: 'Spend',
          data: spendingData,
          backgroundColor: barColors,
          borderRadius: 8,
          borderSkipped: false,
          maxBarThickness: 38,
          minBarLength: 4,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: false,
            external: externalTooltipHandler
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: '#8F9BB3',
              font: { family: "'SF Pro Text','Roboto',sans-serif", size: 15, weight: 500 },
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: '#F1F2F6',
              borderDash: [2,2]
            },
            ticks: {
              color: '#A5B1C8',
              stepSize: 100,
              font: { family: "'SF Pro Text','Roboto',sans-serif", size: 14 }
            }
          }
        },
        onHover: (e,activeEls) => {
          e.native.target.style.cursor = activeEls.length ? 'pointer' : 'default';
        }
      }
    });

    // Animate fade-in for all .fade-in elements with stagger
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.fade-in').forEach((el) => {
        el.style.visibility = 'visible';
      });
    });

    // Chart tap/click for touch as well as mouse
    document.getElementById('spendingChart').addEventListener('click', function(evt) {
      const points = spendingChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
      if (points.length) {
        spendingChart.setActiveElements(points);
        spendingChart.tooltip.setActiveElements(points);
        spendingChart.update();
      }
    });
    // On touch, activate tooltip
    document.getElementById('spendingChart').addEventListener('touchstart', function(evt) {
      evt.preventDefault();
      const touch = evt.touches[0];
      const mouseEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      evt.target.dispatchEvent(mouseEvent);
    });

    // Hide tooltip on tap outside
    document.addEventListener('mousedown', (e) => {
      const chartArea = document.getElementById('spendingChart').getBoundingClientRect();
      const tooltipEl = document.getElementById('chart-tooltip');
      if (!(
        e.clientX >= chartArea.left &&
        e.clientX <= chartArea.right &&
        e.clientY >= chartArea.top &&
        e.clientY <= chartArea.bottom
      )) {
        tooltipEl.style.opacity = 0;
        spendingChart.setActiveElements([]);
        spendingChart.tooltip.setActiveElements([]);
        spendingChart.update();
      }
    });

    // Bottom nav: scale on press, hover color
    document.querySelectorAll('.mockup nav[aria-label="Bottom navigation"] button').forEach(btn => {
      btn.addEventListener('mousedown', () => btn.style.transform = 'scale(0.95)');
      btn.addEventListener('touchstart', () => btn.style.transform = 'scale(0.95)');
      btn.addEventListener('mouseup', () => btn.style.transform = '');
      btn.addEventListener('mouseleave', () => btn.style.transform = '');
      btn.addEventListener('touchend', () => btn.style.transform = '');
      btn.addEventListener('mouseenter', () => {
        const icon = btn.querySelector('i');
        if (icon && icon.style.color !== '#2B5CE6') icon.style.color = '#4B7BF5';
        btn.querySelector('span').style.color = '#4B7BF5';
      });
      btn.addEventListener('mouseleave', () => {
        const icon = btn.querySelector('i');
        if (btn.querySelector('span').textContent === 'Dashboard') {
          icon.style.color = '#2B5CE6';
          btn.querySelector('span').style.color = '#2B5CE6';
        } else {
          icon.style.color = '#A5B1C8';
          btn.querySelector('span').style.color = '#A5B1C8';
        }
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
      
<div className="mockup fade-in delay-1">
<div className="notch"></div>

<nav aria-label="Main header" className="flex items-center justify-between px-5 pt-1 pb-1 fade-in delay-2">
<span className="flex items-center">
<span style={{fontFamily: `'SF Pro Text','Roboto',sans-serif`, fontWeight: `700`, fontSize: `32px`, letterSpacing: `-0.03em`, color: `#1A1F36`, lineHeight: `1.1`, userSelect: `none`}}>
          Clari<span style={{color: `#2B5CE6`}}>Fi</span>
</span>
</span>
<button aria-label="Notifications" className="rounded-full hover:bg-[#F7F9FC] focus:outline-none focus:ring-2 focus:ring-[#2B5CE6] transition-colors" style={{width: `44px`, height: `44px`, display: `flex`, alignItems: `center`, justifyContent: `center`}}>
<i data-lucide="bell" style={{width: `28px`, height: `28px`, color: `#A5B1C8`}}></i>
</button>
</nav>

<main className="flex-1 px-5 pt-1 pb-2 flex flex-col">

<section className="fade-in delay-3">
<h2 style={{fontSize: `24px`, fontWeight: `600`, letterSpacing: `-0.02em`, color: `#1A1F36`, marginBottom: `18px`, lineHeight: `1.17`, fontFamily: `'SF Pro Text','Roboto',sans-serif`}}>
          Monthly Spending
        </h2>
<div className="relative w-full" style={{height: `186px`, borderRadius: `18px`, background: `#fff`, boxShadow: `0 2px 10px 0 rgba(43,92,230,0.04)`, display: `flex`, alignItems: `flex-end`, justifyContent: `center`, padding: `0 10px 8px 10px`}}>
<div style={{width: `100%`, display: `flex`, flexDirection: `column`, justifyContent: `flex-end`}}>
<canvas id="spendingChart" style={{width: `100%`, height: `140px`, maxHeight: `140px`, marginBottom: `0`, marginTop: `8px`}}></canvas>
</div>

<div className="chartjs-tooltip" id="chart-tooltip"></div>
</div>
</section>

<section aria-label="Key Financial Metrics" className="flex gap-4 mt-5 fade-in delay-4">
<div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#F1F2F6] p-4 flex flex-col min-w-0 hover:border-[#2B5CE6] transition-colors" style={{minWidth: `0`}} tabindex="0">
<span style={{fontSize: `14px`, color: `#6B7280`, fontWeight: `400`, fontFamily: `'SF Pro Text','Roboto',sans-serif`, marginBottom: `3px`}}>Current Balance</span>
<span style={{fontSize: `18px`, fontWeight: `600`, color: `#1A1F36`, fontFamily: `'SF Pro Text','Roboto',sans-serif`, letterSpacing: `-0.01em`}}>$5,230.50</span>
</div>
<div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#F1F2F6] p-4 flex flex-col min-w-0 hover:border-[#00C896] transition-colors" style={{minWidth: `0`}} tabindex="0">
<span style={{fontSize: `14px`, color: `#6B7280`, fontWeight: `400`, fontFamily: `'SF Pro Text','Roboto',sans-serif`, marginBottom: `3px`}}>Budget Remaining</span>
<span style={{fontSize: `18px`, fontWeight: `600`, color: `#00C896`, fontFamily: `'SF Pro Text','Roboto',sans-serif`, letterSpacing: `-0.01em`}}>$750.00</span>
</div>
</section>

<section className="mt-7 fade-in delay-5 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 style={{fontSize: `18px`, fontWeight: `600`, color: `#1A1F36`, letterSpacing: `-0.01em`, fontFamily: `'SF Pro Text','Roboto',sans-serif`}}>Recent Activities</h3>
<a className="hover:underline" href="#" style={{fontSize: `16px`, color: `#2B5CE6`, fontWeight: `400`, fontFamily: `'SF Pro Text','Roboto',sans-serif`, textDecoration: `none`}}>See all</a>
</div>
<ul aria-label="Recent Transactions" className="hide-scroll flex-1 overflow-y-auto pr-1" style={{scrollBehavior: `smooth`, maxHeight: `200px`}}>
<li className="flex items-center py-3 border-b border-[#F1F2F6] last:border-b-0 group transition-colors hover:bg-[#F7F9FC] rounded-xl px-2 cursor-pointer" tabindex="0">
<div className="flex-1">
<span style={{fontSize: `16px`, fontWeight: `400`, color: `#1A1F36`, fontFamily: `'SF Pro Text','Roboto',sans-serif`, display: `block`}}>Starbucks</span>
<span style={{fontSize: `14px`, color: `#8F9BB3`, fontFamily: `'SF Pro Text','Roboto',sans-serif`}}>Jun 22</span>
</div>
<span style={{fontSize: `16px`, fontWeight: `400`, color: `#1A1F36`, fontFamily: `'SF Pro Text','Roboto',sans-serif`}}>-$5.75</span>
</li>
<li className="flex items-center py-3 border-b border-[#F1F2F6] last:border-b-0 group transition-colors hover:bg-[#F7F9FC] rounded-xl px-2 cursor-pointer" tabindex="0">
<div className="flex-1">
<span style={{fontSize: `16px`, fontWeight: `400`, color: `#1A1F36`, fontFamily: `'SF Pro Text','Roboto',sans-serif`, display: `block`}}>Grocery Store</span>
<span style={{fontSize: `14px`, color: `#8F9BB3`, fontFamily: `'SF Pro Text','Roboto',sans-serif`}}>Jun 21</span>
</div>
<span style={{fontSize: `16px`, fontWeight: `400`, color: `#1A1F36`, fontFamily: `'SF Pro Text','Roboto',sans-serif`}}>-$78.20</span>
</li>
<li className="flex items-center py-3 border-b border-[#F1F2F6] last:border-b-0 group transition-colors hover:bg-[#F7F9FC] rounded-xl px-2 cursor-pointer" tabindex="0">
<div className="flex-1">
<span style={{fontSize: `16px`, fontWeight: `400`, color: `#1A1F36`, fontFamily: `'SF Pro Text','Roboto',sans-serif`, display: `block`}}>Netflix</span>
<span style={{fontSize: `14px`, color: `#8F9BB3`, fontFamily: `'SF Pro Text','Roboto',sans-serif`}}>Jun 20</span>
</div>
<span style={{fontSize: `16px`, fontWeight: `400`, color: `#1A1F36`, fontFamily: `'SF Pro Text','Roboto',sans-serif`}}>-$15.99</span>
</li>
<li className="flex items-center py-3 border-b border-[#F1F2F6] last:border-b-0 group transition-colors hover:bg-[#F7F9FC] rounded-xl px-2 cursor-pointer" tabindex="0">
<div className="flex-1">
<span style={{fontSize: `16px`, fontWeight: `400`, color: `#1A1F36`, fontFamily: `'SF Pro Text','Roboto',sans-serif`, display: `block`}}>Uber</span>
<span style={{fontSize: `14px`, color: `#8F9BB3`, fontFamily: `'SF Pro Text','Roboto',sans-serif`}}>Jun 19</span>
</div>
<span style={{fontSize: `16px`, fontWeight: `400`, color: `#1A1F36`, fontFamily: `'SF Pro Text','Roboto',sans-serif`}}>-$22.50</span>
</li>
<li className="flex items-center py-3 border-b border-[#F1F2F6] last:border-b-0 group transition-colors hover:bg-[#F7F9FC] rounded-xl px-2 cursor-pointer" tabindex="0">
<div className="flex-1">
<span style={{fontSize: `16px`, fontWeight: `400`, color: `#1A1F36`, fontFamily: `'SF Pro Text','Roboto',sans-serif`, display: `block`}}>Spotify</span>
<span style={{fontSize: `14px`, color: `#8F9BB3`, fontFamily: `'SF Pro Text','Roboto',sans-serif`}}>Jun 18</span>
</div>
<span style={{fontSize: `16px`, fontWeight: `400`, color: `#1A1F36`, fontFamily: `'SF Pro Text','Roboto',sans-serif`}}>-$9.99</span>
</li>
</ul>
</section>
</main>

<nav aria-label="Bottom navigation" className="w-full bg-white border-t border-[#E2E8F0] shadow-sm rounded-b-[36px] px-2 pt-1 pb-1 flex justify-between items-center fade-in delay-6" style={{minHeight: `62px`}}>
<button aria-label="Dashboard" className="flex flex-col items-center justify-center flex-1 py-1 group focus:outline-none" style={{minWidth: `44px`}}>
<i data-lucide="pie-chart" style={{width: `28px`, height: `28px`, color: `#2B5CE6`, transition: `color 0.18s`}}></i>
<span style={{fontSize: `16px`, fontWeight: `500`, color: `#2B5CE6`, fontFamily: `'SF Pro Text','Roboto',sans-serif`, marginTop: `0.5em`, letterSpacing: `-0.01em`}}>Dashboard</span>
</button>
<button aria-label="Transactions" className="flex flex-col items-center justify-center flex-1 py-1 group focus:outline-none" style={{minWidth: `44px`}}>
<i className="group-hover:text-[#2B5CE6]" data-lucide="list" style={{width: `28px`, height: `28px`, color: `#A5B1C8`, transition: `color 0.18s`}}></i>
<span style={{fontSize: `16px`, fontWeight: `500`, color: `#A5B1C8`, fontFamily: `'SF Pro Text','Roboto',sans-serif`, marginTop: `0.5em`, letterSpacing: `-0.01em`}}>Transactions</span>
</button>
<button aria-label="Budgets" className="flex flex-col items-center justify-center flex-1 py-1 group focus:outline-none" style={{minWidth: `44px`}}>
<i className="group-hover:text-[#2B5CE6]" data-lucide="wallet" style={{width: `28px`, height: `28px`, color: `#A5B1C8`, transition: `color 0.18s`}}></i>
<span style={{fontSize: `16px`, fontWeight: `500`, color: `#A5B1C8`, fontFamily: `'SF Pro Text','Roboto',sans-serif`, marginTop: `0.5em`, letterSpacing: `-0.01em`}}>Budgets</span>
</button>
<button aria-label="Profile" className="flex flex-col items-center justify-center flex-1 py-1 group focus:outline-none" style={{minWidth: `44px`}}>
<i className="group-hover:text-[#2B5CE6]" data-lucide="user" style={{width: `28px`, height: `28px`, color: `#A5B1C8`, transition: `color 0.18s`}}></i>
<span style={{fontSize: `16px`, fontWeight: `500`, color: `#A5B1C8`, fontFamily: `'SF Pro Text','Roboto',sans-serif`, marginTop: `0.5em`, letterSpacing: `-0.01em`}}>Profile</span>
</button>
</nav>
</div>


    </>
  );
}
