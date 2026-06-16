import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Tab Switching Logic ---
        function switchTab(tabId) {
            // Hide all views
            ['home', 'rewards', 'stats', 'manage'].forEach(id => {
                const el = document.getElementById(`view-${id}`);
                if (el) el.classList.add('hidden');
            });
            
            // Reset all nav buttons
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('text-sky-500');
                btn.classList.add('text-slate-400');
                const dot = btn.querySelector('.nav-dot');
                if (dot) dot.classList.add('hidden');
            });

            // Show active view
            const activeView = document.getElementById(`view-${tabId}`);
            if (activeView) activeView.classList.remove('hidden');
            
            // Activate current nav button
            const activeBtn = document.getElementById(`nav-${tabId}`);
            if (activeBtn) {
                activeBtn.classList.remove('text-slate-400');
                activeBtn.classList.add('text-sky-500');
                const dot = activeBtn.querySelector('.nav-dot');
                if (dot) dot.classList.remove('hidden');
            }

            // Update Header Title
            const titles = {
                'home': '宝贝习惯养成',
                'rewards': '奖励兑换',
                'stats': '数据统计',
                'manage': '系统管理'
            };
            document.getElementById('header-title').innerText = titles[tabId] || '宝贝习惯养成';
        }

        // --- Management Modals Logic ---
        function openManageModal(type, titlePrefix = '', defaultPoints = 20) {
            if (type === 'task') {
                document.getElementById('manage-task-title').innerText = `添加${titlePrefix}`;
                document.getElementById('manage-task-points').value = defaultPoints;
                document.getElementById('manage-task-modal').classList.remove('hidden');
                document.getElementById('manage-task-modal').classList.add('flex');
            } else if (type === 'reward') {
                document.getElementById('manage-reward-modal').classList.remove('hidden');
                document.getElementById('manage-reward-modal').classList.add('flex');
            }
        }

        function closeManageModal(type) {
            if (type === 'task') {
                document.getElementById('manage-task-modal').classList.add('hidden');
                document.getElementById('manage-task-modal').classList.remove('flex');
            } else if (type === 'reward') {
                document.getElementById('manage-reward-modal').classList.add('hidden');
                document.getElementById('manage-reward-modal').classList.remove('flex');
            }
        }

        // --- Rewards Logic ---
        let points = 120;
        let pendingButton = null;
        let pendingCost = 0;

        const REWARD_CLASSES = {
            redeemable: 'reward-btn w-full rounded-2xl border-2 border-sky-500 bg-sky-400 text-white font-medium text-lg py-3 shadow-[0_4px_0_0_#0ea5e9] active:shadow-[0_0px_0_0_#0ea5e9] active:translate-y-1 transition-all tracking-tight',
            disabled: 'reward-btn w-full rounded-2xl border-2 border-slate-200 bg-slate-100 text-slate-400 font-medium text-lg py-3 cursor-not-allowed tracking-tight',
            use: 'reward-btn w-full rounded-2xl border-2 border-green-600 bg-green-500 text-white font-medium text-lg py-3 shadow-[0_4px_0_0_#16a34a] active:shadow-[0_0px_0_0_#16a34a] active:translate-y-1 transition-all tracking-tight'
        };

        function updatePointsDisplay() {
            document.getElementById('current-points').innerText = points;
            document.querySelectorAll('.reward-btn').forEach(btn => {
                const cost = parseInt(btn.dataset.cost);
                const card = btn.closest('.reward-card');
                
                if (btn.dataset.state === 'redeem') {
                    if (points >= cost) {
                        btn.disabled = false;
                        btn.innerText = '兑换';
                        btn.className = REWARD_CLASSES.redeemable;
                        card.classList.remove('opacity-60', 'bg-slate-50');
                        card.classList.add('bg-white');
                    } else {
                        btn.disabled = true;
                        btn.innerText = '积分不足';
                        btn.className = REWARD_CLASSES.disabled;
                        card.classList.add('opacity-60', 'bg-slate-50');
                        card.classList.remove('bg-white');
                    }
                } else if (btn.dataset.state === 'use') {
                    btn.disabled = false;
                    btn.innerText = '使用';
                    btn.className = REWARD_CLASSES.use;
                    card.classList.remove('opacity-60', 'bg-slate-50');
                    card.classList.add('bg-white');
                }
            });
        }

        function handleRewardClick(btn) {
            const state = btn.dataset.state;
            const cost = parseInt(btn.dataset.cost);
            const name = btn.dataset.name;

            if (state === 'redeem' && points >= cost) {
                pendingButton = btn;
                pendingCost = cost;
                document.getElementById('confirm-name').innerText = `「${name}」`;
                document.getElementById('confirm-cost').innerText = cost;
                document.getElementById('confirm-modal').classList.remove('hidden');
                document.getElementById('confirm-modal').classList.add('flex');
            } else if (state === 'use') {
                // 使用后重置回可兑换状态
                btn.dataset.state = 'redeem';
                updatePointsDisplay();
            }
        }

        function closeRedeemModal() {
            document.getElementById('confirm-modal').classList.add('hidden');
            document.getElementById('confirm-modal').classList.remove('flex');
            pendingButton = null;
            pendingCost = 0;
        }

        function confirmRedeem() {
            if (points >= pendingCost && pendingButton) {
                points -= pendingCost;
                pendingButton.dataset.state = 'use';
                updatePointsDisplay();
            }
            closeRedeemModal();
        }

        // Initialize display
        document.addEventListener("DOMContentLoaded", () => {
            updatePointsDisplay();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="max-w-md mx-auto min-h-screen bg-slate-50 relative shadow-2xl overflow-hidden flex flex-col">

<header className="bg-white px-6 py-5 flex items-center justify-center z-10 sticky top-0 border-b-2 border-slate-200">
<h1 className="text-2xl font-medium tracking-tight text-slate-800" id="header-title">
                宝贝习惯养成
            </h1>
</header>

<main className="p-4 space-y-5 flex-1 overflow-y-auto pb-28" id="view-home">

<div className="bg-white rounded-3xl border-2 border-slate-200 shadow-[0_4px_0_0_#cbd5e1] p-5 relative transition-transform">
<div className="flex justify-between items-start mb-3">
<div className="pr-4">
<h2 className="text-xl font-medium tracking-tight text-slate-800">阅读打卡</h2>
<p className="text-base text-slate-500 mt-1">每日阅读 20 分钟</p>
</div>
<div className="bg-amber-400 border-2 border-amber-500 rounded-xl px-3 py-1 flex items-center shadow-[0_2px_0_0_#d97706] shrink-0">
<span className="text-amber-900 font-medium text-base">+15</span>
</div>
</div>

<div className="mt-4">
<div className="h-5 bg-slate-100 border-2 border-slate-200 rounded-full overflow-hidden relative">
<div className="w-[25%] h-full bg-sky-400 border-r-2 border-sky-500 rounded-r-full absolute left-0 top-0"></div>
<div className="w-[25%] h-1/3 bg-white/30 absolute left-0 top-1 rounded-full ml-1"></div>
</div>
<p className="text-right text-sm font-medium text-slate-400 mt-2">5 / 20 分钟</p>
</div>

<div className="flex gap-3 mt-4">
<button className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-slate-200 text-slate-400 bg-white shadow-[0_4px_0_0_#cbd5e1] active:shadow-[0_0px_0_0_#cbd5e1] active:translate-y-1 transition-all shrink-0" onclick="document.getElementById('task-modal').classList.remove('hidden')">
<iconify-icon height="24" icon="solar:refresh-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</button>
<button className="flex-1 rounded-2xl border-2 border-slate-200 bg-slate-100 text-slate-500 font-medium text-base shadow-[0_4px_0_0_#cbd5e1] active:shadow-[0_0px_0_0_#cbd5e1] active:translate-y-1 transition-all">
                        去完成
                    </button>
</div>
</div>

<div className="bg-white rounded-3xl border-2 border-slate-200 shadow-[0_4px_0_0_#cbd5e1] p-5 relative transition-transform">
<div className="flex justify-between items-start mb-2">
<div className="pr-4">
<h2 className="text-xl font-medium tracking-tight text-slate-800">自己收拾书包</h2>
<p className="text-base text-slate-500 mt-1">睡前准备好明天的书包</p>
</div>
<div className="bg-amber-400 border-2 border-amber-500 rounded-xl px-3 py-1 flex items-center shadow-[0_2px_0_0_#d97706] shrink-0">
<span className="text-amber-900 font-medium text-base">+10</span>
</div>
</div>
<div className="flex gap-3 mt-5">
<button className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-slate-200 text-slate-400 bg-white shadow-[0_4px_0_0_#cbd5e1] active:shadow-[0_0px_0_0_#cbd5e1] active:translate-y-1 transition-all shrink-0" onclick="document.getElementById('task-modal').classList.remove('hidden')">
<iconify-icon height="24" icon="solar:refresh-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</button>
<button className="flex-1 active:shadow-[0_0px_0_0_#16a34a] active:translate-y-1 transition-all text-lg font-medium text-white tracking-tight bg-green-500 border-green-600 border-2 rounded-2xl shadow-[0_4px_0_0_#16a34a]">
                        完成任务
                    </button>
</div>
</div>

<div className="bg-slate-100 rounded-3xl border-2 border-slate-200 p-5 relative opacity-80">
<div className="flex justify-between items-start mb-3">
<div className="pr-4">
<h2 className="text-xl font-medium tracking-tight text-slate-600 line-through decoration-slate-400 decoration-2">喝水小达人</h2>
<p className="text-base text-slate-400 mt-1">每日喝水 4 杯</p>
</div>
<div className="bg-slate-200 border-2 border-slate-300 rounded-xl px-3 py-1 flex items-center shrink-0">
<span className="text-slate-500 font-medium text-base">+5</span>
</div>
</div>
<div className="mt-4">
<div className="h-5 bg-slate-200 border-2 border-slate-300 rounded-full overflow-hidden relative">
<div className="w-full h-full bg-slate-300 absolute left-0 top-0"></div>
</div>
<p className="text-right text-sm font-medium text-slate-400 mt-2">4 / 4 杯</p>
</div>
<div className="flex gap-3 mt-4">
<button className="flex-1 flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-300 bg-slate-200 text-slate-400 font-medium text-base cursor-not-allowed h-14" disabled="">
<iconify-icon height="22" icon="solar:check-circle-linear" width="22"></iconify-icon>
                        已完成
                    </button>
</div>
</div>
<button className="w-full mt-2 rounded-3xl border-2 border-dashed border-slate-300 text-slate-500 font-medium text-base py-5 flex items-center justify-center gap-2 hover:bg-slate-200/50 active:bg-slate-200 transition-colors" onclick="document.getElementById('task-modal').classList.remove('hidden')">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
                添加临时任务 (3/5)
            </button>
</main>

<main className="hidden p-4 space-y-5 flex-1 overflow-y-auto pb-28" id="view-rewards">

<div className="bg-slate-800 rounded-3xl border-2 border-slate-900 shadow-[0_4px_0_0_#0f172a] p-6 flex items-center justify-between relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-32 h-32 bg-slate-700 rounded-full opacity-50 blur-2xl"></div>
<div className="relative z-10">
<p className="text-slate-400 font-medium text-base mb-1 tracking-tight">当前累计积分</p>
<div className="flex items-baseline gap-1 text-white">
<span className="text-5xl font-semibold tracking-tight" id="current-points">120</span>
<span className="text-lg font-medium text-slate-400">分</span>
</div>
</div>
<div className="relative z-10 w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center border-2 border-slate-600 shadow-inner shrink-0">
<iconify-icon className="text-amber-400" height="36" icon="solar:star-fall-linear" style={{strokeWidth: '1.5px'}} width="36"></iconify-icon>
</div>
</div>
<h2 className="text-lg font-medium tracking-tight text-slate-800 px-1 pt-1">奖励池</h2>

<div className="space-y-4">

<div className="reward-card bg-white rounded-3xl border-2 border-slate-200 shadow-[0_4px_0_0_#cbd5e1] p-5 flex flex-col gap-4 transition-all">
<div className="flex justify-between items-start">
<div className="pr-4">
<h3 className="text-xl font-medium tracking-tight text-slate-800">看动画片 30分钟</h3>
<p className="text-base text-slate-500 mt-1">周末可用，保护眼睛哦</p>
</div>
<div className="bg-amber-50 border-2 border-amber-200 rounded-xl px-3 py-1 flex items-center gap-1 shrink-0">
<iconify-icon className="text-amber-500" height="16" icon="solar:star-linear" width="16"></iconify-icon>
<span className="text-amber-600 font-medium text-base">50</span>
</div>
</div>
<button className="reward-btn w-full rounded-2xl border-2 border-sky-500 bg-sky-400 text-white font-medium text-lg py-3 shadow-[0_4px_0_0_#0ea5e9] active:shadow-[0_0px_0_0_#0ea5e9] active:translate-y-1 transition-all tracking-tight" data-cost="50" data-name="看动画片 30分钟" data-state="redeem" onclick="handleRewardClick(this)">
                        兑换
                    </button>
</div>

<div className="reward-card bg-white rounded-3xl border-2 border-slate-200 shadow-[0_4px_0_0_#cbd5e1] p-5 flex flex-col gap-4 transition-all">
<div className="flex justify-between items-start">
<div className="pr-4">
<h3 className="text-xl font-medium tracking-tight text-slate-800">去游乐园玩一天</h3>
<p className="text-base text-slate-500 mt-1">包含所有想玩的项目</p>
</div>
<div className="bg-amber-50 border-2 border-amber-200 rounded-xl px-3 py-1 flex items-center gap-1 shrink-0">
<iconify-icon className="text-amber-500" height="16" icon="solar:star-linear" width="16"></iconify-icon>
<span className="text-amber-600 font-medium text-base">500</span>
</div>
</div>
<button className="reward-btn w-full rounded-2xl border-2 border-sky-500 bg-sky-400 text-white font-medium text-lg py-3 shadow-[0_4px_0_0_#0ea5e9] active:shadow-[0_0px_0_0_#0ea5e9] active:translate-y-1 transition-all tracking-tight" data-cost="500" data-name="去游乐园玩一天" data-state="redeem" onclick="handleRewardClick(this)">
                        兑换
                    </button>
</div>

<div className="reward-card bg-white rounded-3xl border-2 border-slate-200 shadow-[0_4px_0_0_#cbd5e1] p-5 flex flex-col gap-4 transition-all">
<div className="flex justify-between items-start">
<div className="pr-4">
<h3 className="text-xl font-medium tracking-tight text-slate-800">吃一次冰淇淋</h3>
<p className="text-base text-slate-500 mt-1">任选一个口味</p>
</div>
<div className="bg-amber-50 border-2 border-amber-200 rounded-xl px-3 py-1 flex items-center gap-1 shrink-0">
<iconify-icon className="text-amber-500" height="16" icon="solar:star-linear" width="16"></iconify-icon>
<span className="text-amber-600 font-medium text-base">30</span>
</div>
</div>
<button className="reward-btn w-full rounded-2xl border-2 border-green-600 bg-green-500 text-white font-medium text-lg py-3 shadow-[0_4px_0_0_#16a34a] active:shadow-[0_0px_0_0_#16a34a] active:translate-y-1 transition-all tracking-tight" data-cost="30" data-name="吃一次冰淇淋" data-state="use" onclick="handleRewardClick(this)">
                        使用
                    </button>
</div>
</div>
</main>

<main className="hidden p-4 space-y-6 flex-1 overflow-y-auto pb-28" id="view-stats">
<h2 className="text-lg font-medium tracking-tight text-slate-800 px-1">数据总览</h2>

<div className="grid grid-cols-2 gap-4">

<div className="bg-amber-400 rounded-3xl border-2 border-amber-500 shadow-[0_4px_0_0_#d97706] p-5 flex flex-col gap-2 relative overflow-hidden transition-transform">
<iconify-icon className="text-amber-500 absolute -right-3 -bottom-3 opacity-60" height="56" icon="solar:star-fall-linear" width="56"></iconify-icon>
<span className="text-amber-900 font-medium text-sm z-10">累计获得积分</span>
<div className="flex items-baseline gap-1 z-10">
<span className="text-4xl font-semibold tracking-tight text-amber-900">450</span>
<span className="text-sm font-medium text-amber-800">分</span>
</div>
</div>

<div className="bg-sky-400 rounded-3xl border-2 border-sky-500 shadow-[0_4px_0_0_#0ea5e9] p-5 flex flex-col gap-2 relative overflow-hidden transition-transform">
<iconify-icon className="text-sky-500 absolute -right-3 -bottom-3 opacity-60" height="56" icon="solar:check-circle-linear" width="56"></iconify-icon>
<span className="text-sky-900 font-medium text-sm z-10">累计完成任务</span>
<div className="flex items-baseline gap-1 z-10">
<span className="text-4xl font-semibold tracking-tight text-sky-900">32</span>
<span className="text-sm font-medium text-sky-800">次</span>
</div>
</div>
</div>
<h2 className="text-lg font-medium tracking-tight text-slate-800 px-1 pt-2">每项任务累计</h2>

<div className="space-y-4">

<div className="bg-white rounded-3xl border-2 border-slate-200 shadow-[0_4px_0_0_#cbd5e1] p-5">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-500 border-2 border-indigo-100 shrink-0">
<iconify-icon height="24" icon="solar:book-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-800">阅读打卡</h3>
<p className="text-sm text-slate-500 mt-0.5">坚持了 12 天</p>
</div>
</div>
<div className="bg-slate-50 rounded-2xl border-2 border-slate-100 p-3 flex justify-between items-center">
<div className="text-center flex-1 border-r-2 border-slate-200">
<p className="text-xs font-medium text-slate-400 mb-1">累计时长</p>
<p className="text-lg font-semibold tracking-tight text-slate-700">240<span className="text-xs font-medium text-slate-500 ml-0.5">分钟</span></p>
</div>
<div className="text-center flex-1">
<p className="text-xs font-medium text-slate-400 mb-1">累计获得</p>
<p className="text-lg font-semibold tracking-tight text-amber-500">180<span className="text-xs font-medium text-amber-400 ml-0.5">分</span></p>
</div>
</div>
</div>

<div className="bg-white rounded-3xl border-2 border-slate-200 shadow-[0_4px_0_0_#cbd5e1] p-5">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 border-2 border-emerald-100 shrink-0">
<iconify-icon height="24" icon="solar:backpack-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-800">自己收拾书包</h3>
<p className="text-sm text-slate-500 mt-0.5">坚持了 8 天</p>
</div>
</div>
<div className="bg-slate-50 rounded-2xl border-2 border-slate-100 p-3 flex justify-between items-center">
<div className="text-center flex-1 border-r-2 border-slate-200">
<p className="text-xs font-medium text-slate-400 mb-1">累计次数</p>
<p className="text-lg font-semibold tracking-tight text-slate-700">8<span className="text-xs font-medium text-slate-500 ml-0.5">次</span></p>
</div>
<div className="text-center flex-1">
<p className="text-xs font-medium text-slate-400 mb-1">累计获得</p>
<p className="text-lg font-semibold tracking-tight text-amber-500">80<span className="text-xs font-medium text-amber-400 ml-0.5">分</span></p>
</div>
</div>
</div>
</div>
</main>

<main className="hidden p-4 space-y-7 flex-1 overflow-y-auto pb-28" id="view-manage">

<section>
<h2 className="text-lg font-medium tracking-tight text-slate-800 px-1 mb-3">数据备份与恢复</h2>
<div className="bg-white rounded-3xl border-2 border-slate-200 shadow-[0_4px_0_0_#cbd5e1] p-5 flex gap-3">
<button className="flex-1 rounded-2xl border-2 border-slate-200 bg-slate-50 text-slate-600 font-medium text-base py-3.5 shadow-[0_2px_0_0_#cbd5e1] active:shadow-none active:translate-y-0.5 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:export-linear" width="20"></iconify-icon> 导出数据
                    </button>
<button className="flex-1 rounded-2xl border-2 border-sky-500 bg-sky-400 text-white font-medium text-base py-3.5 shadow-[0_2px_0_0_#0ea5e9] active:shadow-none active:translate-y-0.5 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:import-linear" width="20"></iconify-icon> 导入恢复
                    </button>
</div>
</section>

<section>
<div className="flex justify-between items-center px-1 mb-3">
<h2 className="text-lg font-medium tracking-tight text-slate-800">每日任务池</h2>
<span className="text-xs font-medium text-slate-400 bg-slate-200 px-2 py-0.5 rounded-md">5 项</span>
</div>
<div className="space-y-3">

<div className="bg-white rounded-2xl border-2 border-slate-200 p-4 flex justify-between items-center shadow-[0_2px_0_0_#cbd5e1]">
<div>
<h3 className="font-medium text-slate-800 text-base tracking-tight">阅读打卡</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-slate-500">按时长 (分钟)</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span className="text-xs font-medium text-amber-500">20 积分</span>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-xl border-2 border-red-100 bg-red-50 text-red-500 active:bg-red-100 transition-colors shrink-0">
<iconify-icon icon="solar:trash-bin-trash-linear" width="20"></iconify-icon>
</button>
</div>

<div className="bg-white rounded-2xl border-2 border-slate-200 p-4 flex justify-between items-center shadow-[0_2px_0_0_#cbd5e1]">
<div>
<h3 className="font-medium text-slate-800 text-base tracking-tight">自己收拾书包</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-slate-500">按次</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span className="text-xs font-medium text-amber-500">10 积分</span>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-xl border-2 border-red-100 bg-red-50 text-red-500 active:bg-red-100 transition-colors shrink-0">
<iconify-icon icon="solar:trash-bin-trash-linear" width="20"></iconify-icon>
</button>
</div>
<button className="w-full rounded-2xl border-2 border-dashed border-slate-300 text-slate-500 font-medium text-sm py-4 flex items-center justify-center gap-2 hover:bg-slate-200/50 active:bg-slate-200 transition-colors" onclick="openManageModal('task', '每日任务', 20)">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
                        添加每日任务
                    </button>
</div>
</section>

<section>
<div className="flex justify-between items-center px-1 mb-3">
<h2 className="text-lg font-medium tracking-tight text-slate-800">每周任务池</h2>
<span className="text-xs font-medium text-slate-400 bg-slate-200 px-2 py-0.5 rounded-md">5 项</span>
</div>
<div className="space-y-3">

<div className="bg-white rounded-2xl border-2 border-slate-200 p-4 flex justify-between items-center shadow-[0_2px_0_0_#cbd5e1]">
<div>
<h3 className="font-medium text-slate-800 text-base tracking-tight">整理房间</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-slate-500">按次</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span className="text-xs font-medium text-amber-500">50 积分</span>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-xl border-2 border-red-100 bg-red-50 text-red-500 active:bg-red-100 transition-colors shrink-0">
<iconify-icon icon="solar:trash-bin-trash-linear" width="20"></iconify-icon>
</button>
</div>
<button className="w-full rounded-2xl border-2 border-dashed border-slate-300 text-slate-500 font-medium text-sm py-4 flex items-center justify-center gap-2 hover:bg-slate-200/50 active:bg-slate-200 transition-colors" onclick="openManageModal('task', '每周任务', 50)">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
                        添加每周任务
                    </button>
</div>
</section>

<section>
<div className="flex justify-between items-center px-1 mb-3">
<h2 className="text-lg font-medium tracking-tight text-slate-800">奖励池</h2>
<span className="text-xs font-medium text-slate-400 bg-slate-200 px-2 py-0.5 rounded-md">5 项</span>
</div>
<div className="space-y-3">

<div className="bg-white rounded-2xl border-2 border-slate-200 p-4 flex justify-between items-center shadow-[0_2px_0_0_#cbd5e1]">
<div>
<h3 className="font-medium text-slate-800 text-base tracking-tight">看动画片 30分钟</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs font-medium text-amber-500">消耗 50 积分</span>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-xl border-2 border-red-100 bg-red-50 text-red-500 active:bg-red-100 transition-colors shrink-0">
<iconify-icon icon="solar:trash-bin-trash-linear" width="20"></iconify-icon>
</button>
</div>
<div className="bg-white rounded-2xl border-2 border-slate-200 p-4 flex justify-between items-center shadow-[0_2px_0_0_#cbd5e1]">
<div>
<h3 className="font-medium text-slate-800 text-base tracking-tight">去游乐园玩一天</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs font-medium text-amber-500">消耗 500 积分</span>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-xl border-2 border-red-100 bg-red-50 text-red-500 active:bg-red-100 transition-colors shrink-0">
<iconify-icon icon="solar:trash-bin-trash-linear" width="20"></iconify-icon>
</button>
</div>
<button className="w-full rounded-2xl border-2 border-dashed border-slate-300 text-slate-500 font-medium text-sm py-4 flex items-center justify-center gap-2 hover:bg-slate-200/50 active:bg-slate-200 transition-colors" onclick="openManageModal('reward')">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
                        添加奖励
                    </button>
</div>
</section>
</main>

<div className="absolute inset-0 z-50 hidden flex-col justify-end" id="task-modal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="document.getElementById('task-modal').classList.add('hidden')"></div>
<div className="bg-white rounded-t-3xl border-t-2 border-slate-200 p-5 relative z-10 flex flex-col h-[75%] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)] transform transition-transform">
<div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-5"></div>
<h2 className="text-xl font-medium tracking-tight text-slate-800 mb-4">选择临时任务</h2>
<div className="flex-1 overflow-y-auto space-y-3 pb-6">
<div className="flex items-center justify-between p-4 border-2 border-slate-200 rounded-2xl bg-slate-50">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-500 border-2 border-sky-200 shrink-0">
<iconify-icon height="24" icon="solar:pen-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-800 text-base">认真练字</h3>
<p className="text-sm text-amber-500 font-medium mt-0.5">奖励 15 积分</p>
</div>
</div>
<button className="px-5 py-2.5 bg-white text-slate-600 font-medium border-2 border-slate-200 rounded-xl active:translate-y-1 active:shadow-none shadow-[0_2px_0_0_#cbd5e1] transition-all" onclick="document.getElementById('task-modal').classList.add('hidden')">选择</button>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-50 hidden flex-col justify-end" id="manage-task-modal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="closeManageModal('task')"></div>
<div className="bg-white rounded-t-3xl border-t-2 border-slate-200 p-5 relative z-10 flex flex-col shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)] transform transition-transform">
<div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-5"></div>
<h2 className="text-xl font-medium tracking-tight text-slate-800 mb-5" id="manage-task-title">添加任务</h2>
<div className="space-y-4 mb-6">

<div>
<label className="block text-sm font-medium text-slate-600 mb-2">任务名称</label>
<input className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-4 py-3 text-base text-slate-800 focus:border-sky-500 focus:bg-white outline-none transition-all placeholder:text-slate-400" placeholder="例如：自己收拾书包" type="text"/>
</div>
<div className="flex gap-4">

<div className="flex-1">
<label className="block text-sm font-medium text-slate-600 mb-2">奖励积分</label>
<input className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-4 py-3 text-base text-slate-800 focus:border-sky-500 focus:bg-white outline-none transition-all placeholder:text-slate-400" id="manage-task-points" type="number" value="20"/>
</div>

<div className="flex-1">
<label className="block text-sm font-medium text-slate-600 mb-2">任务类型</label>
<div className="flex bg-slate-100 border-2 border-slate-200 rounded-2xl p-1 h-[52px]">
<button className="flex-1 rounded-xl bg-white text-slate-800 font-medium text-sm shadow-sm transition-all border-2 border-transparent" onclick="this.nextElementSibling.classList.remove('bg-white','shadow-sm','text-slate-800'); this.nextElementSibling.classList.add('text-slate-500'); this.classList.add('bg-white','shadow-sm','text-slate-800'); this.classList.remove('text-slate-500');" type="button">按次</button>
<button className="flex-1 rounded-xl text-slate-500 font-medium text-sm transition-all border-2 border-transparent" onclick="this.previousElementSibling.classList.remove('bg-white','shadow-sm','text-slate-800'); this.previousElementSibling.classList.add('text-slate-500'); this.classList.add('bg-white','shadow-sm','text-slate-800'); this.classList.remove('text-slate-500');" type="button">按时长</button>
</div>
</div>
</div>

<label className="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-2xl bg-slate-50 mt-2 cursor-pointer active:bg-slate-100 transition-colors">
<div className="relative flex items-center justify-center shrink-0">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border-2 border-slate-300 rounded-[8px] peer-checked:bg-sky-500 peer-checked:border-sky-500 bg-white transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" icon="solar:check-read-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-slate-800">关联任务</p>
<p className="text-xs text-slate-500 mt-0.5">同时创建关联的每周任务</p>
</div>
</label>
</div>
<button className="w-full rounded-2xl border-2 border-sky-500 bg-sky-400 text-white font-medium text-lg py-3 shadow-[0_4px_0_0_#0ea5e9] active:shadow-[0_0px_0_0_#0ea5e9] active:translate-y-1 transition-all tracking-tight" onclick="closeManageModal('task')">
                    确认添加
                </button>
</div>
</div>

<div className="absolute inset-0 z-50 hidden flex-col justify-end" id="manage-reward-modal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="closeManageModal('reward')"></div>
<div className="bg-white rounded-t-3xl border-t-2 border-slate-200 p-5 relative z-10 flex flex-col shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)] transform transition-transform">
<div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-5"></div>
<h2 className="text-xl font-medium tracking-tight text-slate-800 mb-5">添加奖励</h2>
<div className="space-y-4 mb-6">
<div>
<label className="block text-sm font-medium text-slate-600 mb-2">奖励名称</label>
<input className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-4 py-3 text-base text-slate-800 focus:border-sky-500 focus:bg-white outline-none transition-all placeholder:text-slate-400" placeholder="例如：看一集动画片" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-600 mb-2">消耗积分</label>
<input className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-4 py-3 text-base text-slate-800 focus:border-sky-500 focus:bg-white outline-none transition-all placeholder:text-slate-400" type="number" value="50"/>
</div>
</div>
<button className="w-full rounded-2xl border-2 border-sky-500 bg-sky-400 text-white font-medium text-lg py-3 shadow-[0_4px_0_0_#0ea5e9] active:shadow-[0_0px_0_0_#0ea5e9] active:translate-y-1 transition-all tracking-tight" onclick="closeManageModal('reward')">
                    确认添加
                </button>
</div>
</div>

<div className="absolute inset-0 z-50 hidden flex-col justify-center items-center px-4" id="confirm-modal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="closeRedeemModal()"></div>
<div className="bg-white rounded-3xl border-2 border-slate-200 p-6 relative z-10 w-full max-w-sm shadow-2xl transform transition-transform">
<div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-500 border-2 border-amber-200 mx-auto mb-4">
<iconify-icon height="32" icon="solar:info-circle-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-slate-800 text-center mb-2">确认兑换</h2>
<p className="text-base text-slate-500 text-center mb-6 leading-relaxed">
                    将消耗 <span className="font-semibold text-amber-500" id="confirm-cost"></span> 积分兑换<br/>
<span className="font-medium text-slate-700" id="confirm-name"></span>
</p>
<div className="flex gap-3">
<button className="flex-1 rounded-2xl border-2 border-slate-200 bg-slate-100 text-slate-500 font-medium text-base py-3 active:translate-y-1 transition-all" onclick="closeRedeemModal()">
                        取消
                    </button>
<button className="flex-1 rounded-2xl border-2 border-sky-500 bg-sky-400 text-white font-medium text-base py-3 shadow-[0_4px_0_0_#0ea5e9] active:shadow-[0_0px_0_0_#0ea5e9] active:translate-y-1 transition-all tracking-tight" onclick="confirmRedeem()">
                        确认兑换
                    </button>
</div>
</div>
</div>

<nav className="absolute bottom-0 w-full bg-white border-t-2 border-slate-200 px-4 py-3 z-20">
<div className="flex justify-between items-center max-w-sm mx-auto">
<button className="nav-btn flex flex-col items-center gap-1.5 p-2 text-sky-500 transition-colors relative" id="nav-home" onclick="switchTab('home')">
<div className="nav-dot absolute -top-1 w-1 h-1 bg-sky-500 rounded-full"></div>
<iconify-icon height="28" icon="solar:calendar-linear" style={{strokeWidth: '1.5px'}} width="28"></iconify-icon>
<span className="text-sm font-medium tracking-tight">今日</span>
</button>
<button className="flex flex-col items-center gap-1.5 p-2 text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon height="26" icon="solar:star-linear" style={{strokeWidth: '1.5px'}} width="26"></iconify-icon>
<span className="text-sm font-medium tracking-tight">本周</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 p-2 text-slate-400 hover:text-slate-600 transition-colors relative" id="nav-rewards" onclick="switchTab('rewards')">
<div className="nav-dot hidden absolute -top-1 w-1 h-1 bg-sky-500 rounded-full"></div>
<iconify-icon height="26" icon="solar:gift-linear" style={{strokeWidth: '1.5px'}} width="26"></iconify-icon>
<span className="text-sm font-medium tracking-tight">奖励</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 p-2 text-slate-400 hover:text-slate-600 transition-colors relative" id="nav-stats" onclick="switchTab('stats')">
<div className="nav-dot hidden absolute -top-1 w-1 h-1 bg-sky-500 rounded-full"></div>
<iconify-icon height="26" icon="solar:chart-square-linear" style={{strokeWidth: '1.5px'}} width="26"></iconify-icon>
<span className="text-sm font-medium tracking-tight">统计</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 p-2 text-slate-400 hover:text-slate-600 transition-colors relative" id="nav-manage" onclick="switchTab('manage')">
<div className="nav-dot hidden absolute -top-1 w-1 h-1 bg-sky-500 rounded-full"></div>
<iconify-icon height="26" icon="solar:settings-linear" style={{strokeWidth: '1.5px'}} width="26"></iconify-icon>
<span className="text-sm font-medium tracking-tight">管理</span>
</button>
</div>
</nav>
</div>



    </>
  );
}
