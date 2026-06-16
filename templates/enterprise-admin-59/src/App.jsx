import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- ENVIRONMENT LOGIC ---
        let currentEnv = 'prod'; // Default
        
        function renderEnvSwitcher() {
            const container = document.getElementById('env-container');
            let html = '';
            
            const badgeClass = "text-[10px] font-semibold flex items-center gap-1.5 cursor-default select-none";
            const linkClass = "text-[10px] text-gray-400 hover:text-zinc-900 underline decoration-gray-300 underline-offset-2 transition-colors cursor-pointer";

            if (currentEnv === 'prod') {
                html = `
                    <div class="flex flex-col gap-2">
                        <div class="${badgeClass} text-emerald-600">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> 线上环境 (Production)
                        </div>
                        <div class="flex gap-3 pl-3 border-l border-gray-200 ml-0.5">
                            <button onclick="switchEnv('test')" class="${linkClass}">切换为：测试环境</button>
                            <button onclick="switchEnv('stage')" class="${linkClass}">切换为：预发环境</button>
                        </div>
                    </div>
                `;
            } else if (currentEnv === 'test') {
                html = `
                    <div class="flex flex-col gap-2">
                        <div class="${badgeClass} text-blue-600">
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span> 测试环境 (Test)
                        </div>
                         <div class="flex gap-3 pl-3 border-l border-gray-200 ml-0.5">
                            <button onclick="switchEnv('prod')" class="${linkClass}">切换为：线上环境</button>
                            <button onclick="switchEnv('stage')" class="${linkClass}">切换为：预发环境</button>
                        </div>
                    </div>
                `;
            } else if (currentEnv === 'stage') {
                html = `
                    <div class="flex flex-col gap-2">
                        <div class="${badgeClass} text-amber-600">
                            <span class="w-1.5 h-1.5 rounded-full bg-amber-600"></span> 预发环境 (Staging)
                        </div>
                         <div class="flex gap-3 pl-3 border-l border-gray-200 ml-0.5">
                            <button onclick="switchEnv('prod')" class="${linkClass}">切换为：线上环境</button>
                            <button onclick="switchEnv('test')" class="${linkClass}">切换为：测试环境</button>
                        </div>
                    </div>
                `;
            }
            container.innerHTML = html;
        }

        function switchEnv(target) {
            // Fake loading effect
            document.body.style.opacity = '0.5';
            setTimeout(() => {
                currentEnv = target;
                renderEnvSwitcher();
                document.body.style.opacity = '1';
                const envName = target === 'prod' ? '线上环境' : target === 'test' ? '测试环境' : '预发环境';
                showToast(`已切换至: ${envName}`);
                // In a real app, this would reload data
                updateMapRandomly(); 
            }, 300);
        }

        // --- DATA MOCKS ---
        const fleetData = [
            { id: 'V-2092', loc: '中关村大街 (异常)', bat: 82, status: 'error', cargo: 'Loaded' },
            { id: 'V-1002', loc: '北四环西路', bat: 45, status: 'active', cargo: 'Empty' },
            { id: 'V-3321', loc: '海淀公园南门', bat: 92, status: 'idle', cargo: 'Empty' },
            { id: 'V-8821', loc: '清华东路', bat: 12, status: 'warning', cargo: 'Loaded' },
            { id: 'V-5501', loc: '知春路', bat: 67, status: 'active', cargo: 'Loaded' },
        ];

        // --- RENDER FUNCTIONS ---
        function renderFleetTable() {
            const tbody = document.getElementById('fleet-table-body');
            tbody.innerHTML = fleetData.map(v => `
                <tr class="hover:bg-gray-50 group border-b border-gray-50 last:border-0">
                    <td class="px-6 py-4">
                        <div class="flex items-center gap-2">
                            <span class="iconify text-zinc-400" data-icon="lucide:truck" data-width="14"></span>
                            <span class="text-xs font-bold text-zinc-900">${v.id}</span>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="text-xs text-zinc-700">${v.loc}</div>
                        <div class="text-[10px] text-gray-400 flex items-center gap-1">
                            ${v.status === 'active' ? '<span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> 行驶中' : 
                              v.status === 'error' ? '<span class="w-1.5 h-1.5 rounded-full bg-red-500"></span> 需接管' :
                              v.status === 'warning' ? '<span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> 低电量' :
                              '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 待命'}
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex items-center gap-2">
                             <div class="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full ${v.bat < 20 ? 'bg-red-500' : 'bg-emerald-500'}" style="width: ${v.bat}%"></div>
                            </div>
                            <span class="text-[10px] font-mono text-gray-500">${v.bat}%</span>
                        </div>
                    </td>
                     <td class="px-6 py-4">
                        <div class="flex gap-1">
                            <span class="iconify text-emerald-500" data-icon="lucide:signal" data-width="12" title="5G"></span>
                            <span class="iconify text-emerald-500" data-icon="lucide:camera" data-width="12" title="Camera OK"></span>
                            <span class="iconify ${v.status === 'error' ? 'text-red-500' : 'text-emerald-500'}" data-icon="lucide:radar" data-width="12" title="Lidar"></span>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                         <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium ${v.cargo === 'Loaded' ? 'bg-zinc-100 text-zinc-700' : 'bg-white text-gray-400 border border-gray-200'}">
                            ${v.cargo === 'Loaded' ? '满载' : '空箱'}
                        </span>
                    </td>
                    <td class="px-6 py-4 text-right">
                        ${v.status === 'error' ? 
                            `<button class="text-xs bg-red-50 text-red-600 border border-red-100 px-2 py-1 rounded hover:bg-red-100 font-medium" onclick="showRemoteCockpit('${v.id}')">接管</button>` : 
                            `<button class="text-gray-400 hover:text-zinc-900 text-xs border border-gray-200 px-2 py-1 rounded hover:bg-white" onclick="showToast('查看详情')">查看</button>`
                        }
                    </td>
                </tr>
            `).join('');
        }

        function updateMapRandomly() {
            const container = document.getElementById('map-container');
            // Re-generate dots
            let dots = '';
            for(let i=0; i<8; i++) {
                const top = Math.floor(Math.random() * 80) + 10;
                const left = Math.floor(Math.random() * 80) + 10;
                const isError = i === 0; // one error dot
                dots += `<div class="map-dot ${isError ? 'error' : 'bg-blue-500'} top-[${top}%] left-[${left}%]" style="top:${top}%; left:${left}%"></div>`;
            }
            container.innerHTML = dots;
        }

        // --- NAVIGATION LOGIC ---
        function navigateTo(viewId) {
            document.querySelectorAll('aside button').forEach(btn => btn.classList.remove('active-nav'));
            const activeBtn = document.getElementById(`nav-${viewId}`);
            if(activeBtn) activeBtn.classList.add('active-nav');

            document.querySelectorAll('main > div > div[id^="view-"]').forEach(el => {
                el.classList.add('hidden-view');
                el.classList.remove('fade-in');
            });
            const target = document.getElementById(`view-${viewId}`);
            if(target) {
                target.classList.remove('hidden-view');
                void target.offsetWidth; 
                target.classList.add('fade-in');
            }
            
            // Context titles
            const titles = {
                'dashboard': '实时监控大盘 Live', 'fleet': '车队运力 Fleet', 'orders': '配送订单 Orders',
                'hubs': '站点管理 Hubs', 'logs': '系统日志 Logs', 'approvals': '审批中心 Approvals'
            };
            document.getElementById('page-title').innerText = titles[viewId] || 'Matrix Dispatch';
        }

        // --- DRAWER & MODAL LOGIC ---
        function openDrawer(title, id) {
            document.getElementById('drawer-title').innerText = title;
            document.getElementById('drawer-subtitle').innerText = `ID: ${id}`;
            const overlay = document.getElementById('drawer-overlay');
            const panel = document.getElementById('drawer-panel');
            overlay.classList.remove('hidden-view');
            requestAnimationFrame(() => {
                overlay.classList.remove('opacity-0');
                panel.classList.remove('translate-x-full');
            });
        }

        function closeDrawer() {
            const overlay = document.getElementById('drawer-overlay');
            const panel = document.getElementById('drawer-panel');
            overlay.classList.add('opacity-0');
            panel.classList.add('translate-x-full');
            setTimeout(() => overlay.classList.add('hidden-view'), 300);
        }

        function showRemoteCockpit(vehicleId) {
            const modal = document.getElementById('cockpit-modal');
            modal.classList.remove('hidden-view');
            showToast(`已建立与车辆 ${vehicleId || 'V-2092'} 的低延迟连接`, 'success');
        }

        function hideRemoteCockpit() {
             document.getElementById('cockpit-modal').classList.add('hidden-view');
        }

        // --- TOAST LOGIC ---
        function showToast(msg, type='info') {
            const container = document.getElementById('toast-container');
            const el = document.createElement('div');
            const icon = type === 'error' ? 'lucide:alert-octagon' : 'lucide:check-circle-2';
            const bg = type === 'error' ? 'bg-red-600 text-white' : 'bg-zinc-900 text-white';
            
            el.className = `${bg} px-4 py-3 rounded-lg flex items-center gap-3 min-w-[240px] shadow-xl border border-white/10 transform translate-y-full opacity-0 transition-all duration-300`;
            el.innerHTML = `<span class="iconify" data-icon="${icon}" data-width="16"></span><span class="text-xs font-medium">${msg}</span>`;
            
            container.appendChild(el);
            requestAnimationFrame(() => el.classList.remove('translate-y-full', 'opacity-0'));
            setTimeout(() => {
                el.classList.add('translate-y-4', 'opacity-0');
                el.addEventListener('transitionend', () => el.remove());
            }, 3000);
        }

        // --- INIT ---
        window.addEventListener('DOMContentLoaded', () => {
            renderEnvSwitcher(); // Init environment switcher
            renderFleetTable();
            // Simulate live updates
            setInterval(() => {
                if(!document.getElementById('view-dashboard').classList.contains('hidden-view')) {
                   // Subtle UI updates could go here
                }
            }, 5000);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-[250px] bg-zinc-50 border-r border-gray-200 flex-col justify-between hidden md:flex z-30 shrink-0">
<div className="flex flex-col h-full">

<div className="p-5 pb-6">
<div className="flex items-center gap-3 cursor-pointer" onclick="navigateTo('dashboard')">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white shadow-lg overflow-hidden relative">
<span className="iconify" data-icon="lucide:box" data-width="18"></span>
</div>
<div className="flex flex-col">
<span className="font-bold tracking-tight text-sm text-zinc-900">Matrix Dispatch</span>
<span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">V 4.2.0</span>
</div>
</div>

<div className="mt-4 pt-4 border-t border-gray-200/60" id="env-container">

</div>
</div>

<div className="px-3 space-y-6 flex-1 overflow-y-auto custom-scroll">
<div className="space-y-0.5">
<p className="px-3 text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Live Operations</p>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs text-gray-500 rounded-md hover:bg-white hover:shadow-sm transition-all active-nav group" id="nav-dashboard" onclick="navigateTo('dashboard')">
<span className="iconify text-gray-400 group-hover:text-zinc-900 group-[.active-nav]:text-zinc-900" data-icon="lucide:activity" data-width="16"></span>
<span>全景大盘 Monitor</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs text-gray-500 rounded-md hover:bg-white hover:shadow-sm transition-all group" id="nav-fleet" onclick="navigateTo('fleet')">
<span className="iconify text-gray-400 group-hover:text-zinc-900 group-[.active-nav]:text-zinc-900" data-icon="lucide:truck" data-width="16"></span>
<span>车队运力 Fleet</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs text-gray-500 rounded-md hover:bg-white hover:shadow-sm transition-all group" id="nav-orders" onclick="navigateTo('orders')">
<span className="iconify text-gray-400 group-hover:text-zinc-900 group-[.active-nav]:text-zinc-900" data-icon="lucide:clipboard-list" data-width="16"></span>
<span>配送订单 Orders</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs text-rose-600 bg-rose-50 border border-rose-100 rounded-md hover:bg-rose-100 hover:shadow-sm transition-all group mt-2" onclick="showRemoteCockpit()">
<span className="iconify animate-pulse" data-icon="lucide:gamepad-2" data-width="16"></span>
<span className="font-semibold">云控接管 Cockpit</span>
</button>
</div>
<div className="space-y-0.5">
<p className="px-3 text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Platform</p>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs text-gray-500 rounded-md hover:bg-white hover:shadow-sm transition-all group" id="nav-hubs" onclick="navigateTo('hubs')">
<span className="iconify text-gray-400 group-hover:text-zinc-900 group-[.active-nav]:text-zinc-900" data-icon="lucide:warehouse" data-width="16"></span>
<span>站点与补给站</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs text-gray-500 rounded-md hover:bg-white hover:shadow-sm transition-all group" id="nav-logs" onclick="navigateTo('logs')">
<span className="iconify text-gray-400 group-hover:text-zinc-900 group-[.active-nav]:text-zinc-900" data-icon="lucide:file-code" data-width="16"></span>
<span>黑匣子日志</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-xs text-gray-500 rounded-md hover:bg-white hover:shadow-sm transition-all group" id="nav-approvals" onclick="navigateTo('approvals')">
<span className="iconify text-gray-400 group-hover:text-zinc-900 group-[.active-nav]:text-zinc-900" data-icon="lucide:shield-alert" data-width="16"></span>
<span>异常审批</span>
<span className="ml-auto bg-zinc-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">2</span>
</button>
</div>
</div>

<div className="p-4 border-t border-gray-200">
<button className="flex items-center gap-3 w-full hover:bg-white hover:shadow-sm p-2 rounded-lg transition-all text-left">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-bold text-xs border border-zinc-200">
<span className="iconify" data-icon="lucide:user" data-width="14"></span>
</div>
<div className="flex flex-col flex-1 overflow-hidden">
<span className="text-xs font-semibold text-zinc-900 truncate">调度指挥员</span>
<span className="text-[10px] text-gray-500 truncate">Online · 007号</span>
</div>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative bg-white">

<header className="h-14 border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-20 bg-white/80 backdrop-blur-md">
<div className="flex items-center gap-2 text-sm text-gray-500">
<span className="opacity-50" data-icon="lucide:layout-grid" data-width="14"></span>
<span className="opacity-30" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="font-medium text-zinc-900" id="page-title">实时监控大盘 Live</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded border border-gray-200 text-xs text-gray-600">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span>System Normal</span>
<span className="text-gray-300">|</span>
<span className="font-mono">Latency: 24ms</span>
</div>
<div className="h-4 w-px bg-gray-200"></div>
<div className="flex items-center gap-3">
<button className="relative text-gray-400 hover:text-zinc-900 transition-colors" onclick="showToast('车辆 V-2092 求助', 'error')">
<span className="iconify" data-icon="lucide:bell" data-width="18"></span>
<span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto custom-scroll p-8 bg-[#fdfdfd]" id="main-scroll">

<div className="space-y-6 fade-in" id="view-dashboard">
<div className="flex justify-between items-end">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">区域调度监控</h1>
<p className="text-xs text-gray-500 mt-1">Beijing Core Zone A • Real-time Delivery Network</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-white border border-gray-200 text-zinc-900 text-xs font-medium rounded hover:bg-gray-50 flex items-center gap-2 shadow-sm active:scale-95 transition-transform" onclick="updateMapRandomly(); showToast('地图数据已同步')">
<span className="iconify" data-icon="lucide:satellite" data-width="12"></span> 刷新定位
                        </button>
<button className="px-3 py-1.5 bg-zinc-900 text-white text-xs font-medium rounded hover:bg-zinc-800 shadow-sm flex items-center gap-2 active:scale-95 transition-transform" onclick="showToast('早高峰运力报告生成中...')">
<span className="iconify" data-icon="lucide:file-bar-chart" data-width="12"></span> 生成简报
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group">
<div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity"><span className="iconify" data-icon="lucide:truck" data-width="40"></span></div>
<div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-2">活跃运力</div>
<div className="flex items-end justify-between">
<span className="text-2xl font-bold text-zinc-900">42台</span>
<span className="text-[10px] text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">8台空闲</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group">
<div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity"><span className="iconify" data-icon="lucide:package" data-width="40"></span></div>
<div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-2">配送中订单</div>
<div className="flex items-end justify-between">
<span className="text-2xl font-bold text-zinc-900">128单</span>
<span className="text-[10px] text-blue-600 font-medium bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">预计15分清空</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group">
<div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity"><span className="iconify" data-icon="lucide:alert-triangle" data-width="40"></span></div>
<div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-2">人工介入请求</div>
<div className="flex items-end justify-between">
<span className="text-2xl font-bold text-rose-600">2</span>
<span className="text-[10px] text-rose-600 font-medium bg-rose-50 px-1.5 py-0.5 rounded border border-rose-100 animate-pulse">需立即处理</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden group">
<div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity"><span className="iconify" data-icon="lucide:zap" data-width="40"></span></div>
<div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-2">平均能耗</div>
<div className="flex items-end justify-between">
<span className="text-2xl font-bold text-zinc-900">1.2 <span className="text-sm text-gray-400 font-medium">kWh/10km</span></span>
<span className="text-[10px] text-emerald-600 font-medium">优良</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 bg-zinc-900 rounded-xl p-1 shadow-lg relative h-[450px] overflow-hidden group border border-zinc-800">

<div className="absolute inset-0 bg-[url('https://assets.lummi.ai/assets/QmZ8wK6s5j7f9k3J5s8g4h2d6f1j5k7l8m9n0p1q2r3s4t')] bg-cover opacity-20 grayscale mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80"></div>
<div className="absolute top-4 left-4 z-10 flex gap-2">
<div className="bg-black/50 backdrop-blur border border-white/10 text-white text-xs px-3 py-1.5 rounded flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span>实时定位 ON</span>
</div>
</div>

<div id="map-container">

<div className="map-dot top-[30%] left-[40%]" title="V-001"></div>
<div className="map-dot top-[50%] left-[60%]" title="V-002"></div>
<div className="map-dot top-[20%] left-[70%]" title="V-003"></div>
<div className="map-dot error top-[65%] left-[30%]" title="V-Err-01"></div> 
</div>

<div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur border border-white/10 rounded p-2 text-[10px] text-white space-y-1">
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> 配送中 (In Transit)</div>
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> 空闲 (Idle)</div>
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span> 异常 (Error)</div>
</div>
</div>

<div className="lg:col-span-1 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col h-[450px]">
<div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
<h3 className="text-sm font-bold text-zinc-900">异常介入队列</h3>
<span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded font-bold">2 待处理</span>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scroll">

<div className="p-3 border border-red-100 bg-red-50/30 rounded-lg group hover:bg-red-50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="iconify text-red-500" data-icon="lucide:alert-octagon" data-width="14"></span>
<span className="text-xs font-bold text-zinc-900">V-2092 被困</span>
</div>
<span className="text-[10px] text-gray-500">00:02:12</span>
</div>
<p className="text-[10px] text-gray-600 mb-3">车辆长时间未移动，前方检测到施工路障，自动避障失败。</p>
<button className="w-full py-1.5 bg-white border border-red-200 text-red-600 text-[10px] font-bold rounded shadow-sm hover:bg-red-600 hover:text-white transition-all" onclick="showRemoteCockpit()">
                                    接入远程驾驶
                                </button>
</div>
<div className="p-3 border border-amber-100 bg-amber-50/30 rounded-lg group hover:bg-amber-50 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="iconify text-amber-500" data-icon="lucide:battery-warning" data-width="14"></span>
<span className="text-xs font-bold text-zinc-900">V-1021 电量低</span>
</div>
<span className="text-[10px] text-gray-500">00:05:40</span>
</div>
<p className="text-[10px] text-gray-600 mb-3">剩余电量低于 10%，当前任务路径超出续航范围。</p>
<div className="flex gap-2">
<button className="flex-1 py-1.5 bg-white border border-amber-200 text-amber-700 text-[10px] font-bold rounded shadow-sm hover:bg-amber-100" onclick="showToast('已下发回充指令')">
                                        强制回充
                                    </button>
<button className="flex-1 py-1.5 bg-white border border-gray-200 text-gray-600 text-[10px] font-bold rounded shadow-sm hover:bg-gray-50" onclick="showToast('已指派换电车救援')">
                                        派遣救援
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6 hidden-view fade-in" id="view-fleet">
<div className="flex justify-between items-center">
<div>
<h1 className="text-xl font-semibold tracking-tight text-zinc-900">车队运力管理 Fleet</h1>
<p className="text-xs text-gray-500 mt-1">管理所有 L4 级自动驾驶配送车辆状态与硬件健康。</p>
</div>
<div className="flex gap-2">
<div className="relative">
<span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"><span className="iconify" data-icon="lucide:search" data-width="14"></span></span>
<input className="pl-8 pr-3 py-1.5 bg-white border border-gray-200 rounded text-xs w-48 focus:outline-none focus:border-zinc-400 transition-all" placeholder="搜索车辆ID / 区域" type="text"/>
</div>
<button className="px-3 py-1.5 bg-zinc-900 text-white text-xs font-medium rounded hover:bg-zinc-800 flex items-center gap-2" onclick="showToast('新车入网向导已启动')">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span> 入网注册
                        </button>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-gray-50 border-b border-gray-200">
<tr>
<th className="px-6 py-3 text-[10px] uppercase text-gray-500 font-semibold w-24">车辆ID</th>
<th className="px-6 py-3 text-[10px] uppercase text-gray-500 font-semibold">当前位置/任务</th>
<th className="px-6 py-3 text-[10px] uppercase text-gray-500 font-semibold">电池/续航</th>
<th className="px-6 py-3 text-[10px] uppercase text-gray-500 font-semibold">信号/传感器</th>
<th className="px-6 py-3 text-[10px] uppercase text-gray-500 font-semibold">货箱状态</th>
<th className="px-6 py-3 text-[10px] uppercase text-gray-500 font-semibold text-right">控制</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100" id="fleet-table-body">

</tbody>
</table>
</div>
</div>
</div>

<div className="space-y-6 hidden-view fade-in" id="view-orders">
<div className="flex justify-between items-center">
<div>
<h1 className="text-xl font-semibold tracking-tight text-zinc-900">实时订单 Dispatch</h1>
<p className="text-xs text-gray-500 mt-1">监控用户下单、车辆接单、取货及送达全流程。</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1 text-[10px] font-medium bg-zinc-900 text-white rounded-full">进行中</button>
<button className="px-3 py-1 text-[10px] font-medium bg-white border border-gray-200 text-gray-600 rounded-full hover:bg-gray-50">已完成</button>
<button className="px-3 py-1 text-[10px] font-medium bg-white border border-gray-200 text-gray-600 rounded-full hover:bg-gray-50">异常单</button>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
<table className="w-full text-left">
<thead className="bg-gray-50 border-b border-gray-200">
<tr>
<th className="px-6 py-3 text-[10px] uppercase text-gray-500 font-semibold">订单号/时间</th>
<th className="px-6 py-3 text-[10px] uppercase text-gray-500 font-semibold">收件人</th>
<th className="px-6 py-3 text-[10px] uppercase text-gray-500 font-semibold">指派车辆</th>
<th className="px-6 py-3 text-[10px] uppercase text-gray-500 font-semibold">状态流转</th>
<th className="px-6 py-3 text-[10px] uppercase text-gray-500 font-semibold text-right">操作</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50 group">
<td className="px-6 py-4">
<div className="text-xs font-bold text-zinc-900">ORD-992810</div>
<div className="text-[10px] text-gray-500">10:42 AM (5m ago)</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-[10px] text-blue-600 font-bold">L</div>
<div>
<div className="text-xs font-medium text-zinc-900">李先生</div>
<div className="text-[10px] text-gray-500">中关村软件园 12号楼</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs font-mono text-zinc-700">V-2021 <span className="text-gray-400">-&gt;</span> Grid A</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-xs text-zinc-900 font-medium">前往取货点</span>
</div>
<div className="w-24 h-1 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
<div className="h-full bg-blue-500 w-[30%]"></div>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-xs text-zinc-600 border border-gray-200 px-2 py-1 rounded hover:bg-white hover:text-zinc-900 transition-colors" onclick="openDrawer('订单详情', 'ORD-992810')">详情</button>
</td>
</tr>
<tr className="hover:bg-gray-50 group">
<td className="px-6 py-4">
<div className="text-xs font-bold text-zinc-900">ORD-992809</div>
<div className="text-[10px] text-gray-500">10:35 AM (12m ago)</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-[10px] text-purple-600 font-bold">W</div>
<div>
<div className="text-xs font-medium text-zinc-900">王女士</div>
<div className="text-[10px] text-gray-500">西二旗 辉煌国际</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs font-mono text-zinc-700">V-1004 <span className="text-gray-400">-&gt;</span> Grid B</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs text-zinc-900 font-medium">待取件(到达)</span>
</div>
<div className="w-24 h-1 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
<div className="h-full bg-emerald-500 w-[50%]"></div>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-xs text-zinc-600 border border-gray-200 px-2 py-1 rounded hover:bg-white hover:text-zinc-900 transition-colors" onclick="showToast('已远程开启货箱')">远程开箱</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden-view fade-in p-10 text-center text-gray-400" id="view-hubs">站点管理视图 - 地图与充电桩状态</div>
<div className="hidden-view fade-in p-10 text-center text-gray-400" id="view-logs">日志视图 - JSON Viewer</div>
<div className="hidden-view fade-in p-10 text-center text-gray-400" id="view-approvals">审批视图</div>
</div>
</main>

<div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 hidden-view opacity-0 transition-opacity duration-300" id="drawer-overlay" onclick="closeDrawer()"></div>
<div className="fixed inset-y-0 right-0 w-[450px] bg-white shadow-2xl transform translate-x-full transition-transform duration-300 z-50 flex flex-col border-l border-gray-200" id="drawer-panel">

<div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
<div>
<h2 className="text-sm font-bold text-zinc-900" id="drawer-title">详情</h2>
<p className="text-[10px] text-gray-500 mt-0.5" id="drawer-subtitle">ID: ...</p>
</div>
<button className="text-gray-400 hover:text-zinc-900" onclick="closeDrawer()"><span className="iconify" data-icon="lucide:x" data-width="20"></span></button>
</div>
<div className="p-6">
<div className="bg-gray-50 p-4 rounded border border-gray-200 text-center text-gray-500 text-xs">
                 详细配置与元数据面板
             </div>
</div>
</div>

<div className="fixed inset-0 bg-black/90 z-[60] hidden-view flex flex-col" id="cockpit-modal">

<div className="h-12 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-4 shrink-0">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-white text-xs font-bold tracking-wider">REMOTE TAKEOVER /// V-2092</span>
</div>
<button className="text-gray-400 hover:text-white" onclick="hideRemoteCockpit()"><span className="iconify" data-icon="lucide:x" data-width="20"></span></button>
</div>

<div className="flex-1 relative bg-black overflow-hidden flex items-center justify-center">

<img alt="Camera Feed" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 video-overlay pointer-events-none"></div>

<div className="absolute top-4 left-4 text-emerald-400 font-mono text-xs space-y-1">
<div>LAT: 39.9042 N</div>
<div>LON: 116.4074 E</div>
<div>SPEED: 0.0 KM/H</div>
</div>
<div className="absolute top-4 right-4 text-white font-mono text-xs text-right space-y-1">
<div className="flex items-center justify-end gap-2"><span className="iconify" data-icon="lucide:signal" data-width="12"></span> 5G Full</div>
<div className="flex items-center justify-end gap-2"><span className="iconify" data-icon="lucide:battery" data-width="12"></span> 82%</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
<div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center">
<div className="w-1 h-1 bg-red-500 rounded-full"></div>
</div>
<div className="absolute w-full h-px bg-white/10"></div>
<div className="absolute h-full w-px bg-white/10"></div>
</div>

<div className="absolute bottom-32 bg-red-500/20 border border-red-500/50 px-4 py-2 rounded text-red-100 text-xs font-bold animate-pulse">
                 ⚠ 检测到前方障碍物 - 自动驾驶已暂停
             </div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
<button className="w-16 h-16 bg-zinc-800/80 border border-zinc-600 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 active:scale-95 transition-all" onclick="showToast('指令：后退')">
<span className="iconify" data-icon="lucide:arrow-down" data-width="24"></span>
</button>
<div className="flex gap-4">
<button className="w-16 h-16 bg-zinc-800/80 border border-zinc-600 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 active:scale-95 transition-all" onclick="showToast('指令：左转')">
<span className="iconify" data-icon="lucide:arrow-left" data-width="24"></span>
</button>
<button className="w-20 h-20 -mt-2 bg-emerald-600/90 border border-emerald-400 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 active:scale-95 transition-all shadow-[0_0_20px_rgba(16,185,129,0.5)]" onclick="showToast('指令：低速前进')">
<span className="iconify" data-icon="lucide:arrow-up" data-width="32"></span>
</button>
<button className="w-16 h-16 bg-zinc-800/80 border border-zinc-600 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 active:scale-95 transition-all" onclick="showToast('指令：右转')">
<span className="iconify" data-icon="lucide:arrow-right" data-width="24"></span>
</button>
</div>
<button className="w-16 h-16 bg-red-900/80 border border-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-800 active:scale-95 transition-all" onclick="showToast('紧急刹车触发', 'error')">
<span className="iconify" data-icon="lucide:octagon" data-width="24"></span>
</button>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-[70] flex flex-col gap-2 pointer-events-none" id="toast-container"></div>


    </>
  );
}
