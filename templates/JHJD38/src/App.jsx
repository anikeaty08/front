import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Chart configuration
        Chart.defaults.color = 'rgba(255, 255, 255, 0.5)';
        Chart.defaults.scale.grid.display = false;
        Chart.defaults.scale.display = false;
        
        // Balance Chart
        const balanceCtx = document.getElementById('balanceChart').getContext('2d');
        new Chart(balanceCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Income',
                    data: [15000, 17000, 16500, 19000, 18000, 19978],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4,
                    pointRadius: 0,
                    borderWidth: 2
                }, {
                    label: 'Expenses',
                    data: [12000, 13500, 14000, 14500, 15000, 16000],
                    borderColor: '#ec4899',
                    backgroundColor: 'rgba(236, 72, 153, 0.1)',
                    tension: 0.4,
                    pointRadius: 0,
                    borderWidth: 2
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
        
        // Cashflow Chart
        const cashflowCtx = document.getElementById('cashflowChart').getContext('2d');
        new Chart(cashflowCtx, {
            type: 'bar',
            data: {
                labels: ['Income', 'Expenses'],
                datasets: [{
                    data: [19978, 11000],
                    backgroundColor: ['#3b82f6', '#ec4899'],
                    borderRadius: 5
                }]
            },
            options: {
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: { display: false }
                }
            }
        });
        
        // Credit Chart
        const creditCtx = document.getElementById('creditChart').getContext('2d');
        new Chart(creditCtx, {
            type: 'doughnut',
            data: {
                labels: ['Used', 'Available'],
                datasets: [{
                    data: [8238, 3762],
                    backgroundColor: [
                        'rgba(236, 72, 153, 0.8)',
                        'rgba(139, 92, 246, 0.3)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                    legend: { display: false }
                }
            }
        });
        
        // Spending Chart
        const spendingCtx = document.getElementById('spendingChart').getContext('2d');
        new Chart(spendingCtx, {
            type: 'doughnut',
            data: {
                labels: ['Food', 'Transport', 'Shopping', 'Bills'],
                datasets: [{
                    data: [1200, 800, 1100, 878],
                    backgroundColor: [
                        '#3b82f6',
                        '#8b5cf6',
                        '#ec4899',
                        '#06b6d4'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                    legend: { display: false }
                }
            }
        });
        
        // Savings Chart
        const savingsCtx = document.getElementById('savingsChart').getContext('2d');
        new Chart(savingsCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    data: [3000, 3500, 4200, 4800, 5300, 5789],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    borderWidth: 2
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
        
        // Income Chart
        const incomeCtx = document.getElementById('incomeChart').getContext('2d');
        new Chart(incomeCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Income',
                    data: [700, 900, 800, 1100, 700, 900, 1100],
                    backgroundColor: '#3b82f6',
                    borderRadius: 3,
                    barPercentage: 0.5
                }, {
                    label: 'Expenses',
                    data: [500, 600, 550, 700, 500, 650, 800],
                    backgroundColor: '#ec4899',
                    borderRadius: 3,
                    barPercentage: 0.5
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex justify-between items-center p-2 text-xs">
<span>9:41</span>
<div className="flex space-x-1">
<i className="fas fa-signal"></i>
<i className="fas fa-wifi"></i>
<i className="fas fa-battery-three-quarters"></i>
</div>
</div>

<header className="px-6 py-4">
<h1 className="text-2xl font-bold">Statistics</h1>
</header>

<main className="px-4 pb-24">
<div className="grid grid-cols-2 gap-4">

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<div className="h-16">
<canvas id="balanceChart"></canvas>
</div>
<div className="mt-2">
<p className="text-xs text-gray-400">BALANCE</p>
<p className="text-lg font-semibold">19,978.89 USD</p>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<div className="h-16">
<canvas id="cashflowChart"></canvas>
</div>
<div className="mt-2">
<p className="text-xs text-gray-400">CASHFLOW</p>
<p className="text-lg font-semibold">8,978.89 USD</p>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<div className="h-16">
<canvas id="creditChart"></canvas>
</div>
<div className="mt-2">
<p className="text-xs text-gray-400">CREDIT</p>
<p className="text-lg font-semibold">8,238.38 USD</p>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<div className="h-16">
<canvas id="spendingChart"></canvas>
</div>
<div className="mt-2">
<p className="text-xs text-gray-400">SPENDING</p>
<p className="text-lg font-semibold">3,978.78 USD</p>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<div className="h-16">
<canvas id="savingsChart"></canvas>
</div>
<div className="mt-2">
<p className="text-xs text-gray-400">SAVINGS</p>
<p className="text-lg font-semibold">5,789.45 USD</p>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<div className="h-16">
<canvas id="incomeChart"></canvas>
</div>
<div className="mt-2">
<p className="text-xs text-gray-400">INCOME</p>
<p className="text-lg font-semibold">3,978.78 USD</p>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 w-full bg-[#151530]/90 rounded-t-3xl py-4 px-6 backdrop-blur-sm">
<div className="flex justify-between items-center">
<div className="flex flex-col items-center">
<i className="fas fa-dollar-sign text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Finance</span>
</div>
<div className="flex flex-col items-center">
<i className="fas fa-wallet text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Wallet</span>
</div>
<div className="relative -mt-8">
<div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/20">
<i className="fas fa-plus text-white text-xl"></i>
</div>
</div>
<div className="flex flex-col items-center">
<i className="fas fa-chart-pie text-purple-500"></i>
<span className="text-xs text-purple-500 mt-1">Stats</span>
<div className="w-1 h-1 bg-purple-500 rounded-full mt-1"></div>
</div>
<div className="flex flex-col items-center">
<i className="fas fa-ellipsis-h text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">More</span>
</div>
</div>
</nav>


    </>
  );
}
