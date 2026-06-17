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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Initialize Lucide Icons
            lucide.createIcons({ strokeWidth: 1.5 });

            // Logic for Custom Toggle Switch
            const toggleBtn = document.getElementById('refresh-toggle');
            const toggleKnob = document.getElementById('refresh-toggle-knob');
            let isToggled = false;

            toggleBtn.addEventListener('click', () => {
                isToggled = !isToggled;
                if (isToggled) {
                    toggleBtn.classList.remove('bg-gray-200');
                    toggleBtn.classList.add('bg-blue-600');
                    toggleKnob.classList.add('translate-x-5');
                } else {
                    toggleBtn.classList.add('bg-gray-200');
                    toggleBtn.classList.remove('bg-blue-600');
                    toggleKnob.classList.remove('translate-x-5');
                }
            });

            // Logic for "Reuse existing role config" (Action 1 & Decoupling)
            const copySelect = document.getElementById('role-copy-select');
            const clientPermissionsList = document.getElementById('client-permissions-list');

            // Mock Data Configurations
            const mockConfigs = {
                pro: {
                    note: "自动带入专业版预设",
                    pointsMultiplier: 1.5 // Just to show simulated config change
                },
                basic: {
                    note: "基础版通用设置",
                    pointsMultiplier: 0.8
                }
            };

            copySelect.addEventListener('change', (e) => {
                const selectedRole = e.target.value;
                const config = mockConfigs[selectedRole];

                if (config) {
                    // Important: We only query inside clientPermissionsList to ensure decoupling
                    // The backend section (#backend-permissions-container) is untouched.
                    const items = clientPermissionsList.querySelectorAll('.permission-item');

                    items.forEach(item => {
                        // 1. Automatically check all features in this tab
                        const checkbox = item.querySelector('.perm-checkbox');
                        if (checkbox) {
                            checkbox.checked = true;
                        }

                        // 2. Fill preset notes
                        const noteInput = item.querySelector('.perm-note');
                        if (noteInput) {
                            noteInput.value = config.note;
                            // Add a subtle flash animation to indicate auto-fill
                            noteInput.classList.add('bg-blue-50', 'text-blue-700');
                            setTimeout(() => noteInput.classList.remove('bg-blue-50', 'text-blue-700'), 800);
                        }

                        // 3. Simulate filling points configuration
                        // Extracting base number and updating it as a visual simulation
                        const pointsDiv = item.querySelector('.points-text');
                        if (pointsDiv) {
                            const originalText = pointsDiv.innerText;
                            const match = originalText.match(/(\d+)点/);
                            if (match) {
                                const basePoints = parseInt(match[1]);
                                const newPoints = Math.round(basePoints * config.pointsMultiplier);
                                pointsDiv.innerHTML = originalText.replace(/\d+点/, `<span class="text-blue-600 font-medium">${newPoints}点</span>`);
                            }
                        }
                    });
                }
                
                // Reset select visually so it acts like an action trigger rather than a permanent state filter
                setTimeout(() => { copySelect.value = ""; }, 1500);
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
      

<div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[95vh] flex flex-col overflow-hidden border border-gray-200">

<div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
<h2 className="text-base font-medium tracking-tight text-gray-900">编辑角色</h2>
<button className="text-gray-400 hover:text-gray-600 transition-colors rounded-md p-1 hover:bg-gray-100 focus:outline-none">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">

<div className="grid grid-cols-[140px_1fr] gap-6 items-center">
<div className="text-right text-sm text-gray-600 font-normal">
                    初始点数 <span className="text-red-500 ml-0.5">*</span>
</div>
<div className="flex items-center w-fit border border-gray-300 rounded-md overflow-hidden bg-white">
<button className="px-3 py-1.5 text-gray-500 hover:bg-gray-50 border-r border-gray-300 focus:outline-none transition-colors">
<i className="w-4 h-4" data-lucide="minus"></i>
</button>
<input className="w-24 text-center text-sm py-1.5 outline-none focus:bg-blue-50/30 transition-colors" type="text" value="3000"/>
<button className="px-3 py-1.5 text-gray-500 hover:bg-gray-50 border-l border-gray-300 focus:outline-none transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="grid grid-cols-[140px_1fr] gap-6 items-center">
<div className="text-right text-sm text-gray-600 font-normal">
                    角色范围 <span className="text-red-500 ml-0.5">*</span>
</div>
<div className="relative w-full">
<select className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow">
<option>外部</option>
<option>内部</option>
</select>
<i className="absolute right-3 top-2 w-4 h-4 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>

<div className="grid grid-cols-[140px_1fr] gap-6 items-start pt-1">
<div className="text-right text-sm text-gray-600 font-normal pt-0.5">
                    角色到期扩展 <span className="text-red-500 ml-0.5">*</span>
</div>
<div className="flex flex-col gap-3">
<label className="flex items-center gap-2 cursor-pointer group w-fit">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox" />
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors group-hover:border-blue-400"></div>
<i className="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none left-0.5 top-0.5" data-lucide="check"></i>
</input></div>
<span className="text-sm text-gray-700">到期变更免费版</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group w-fit">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors group-hover:border-blue-400"></div>
<i className="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none left-0.5 top-0.5" data-lucide="check"></i>
</div>
<span className="text-sm text-gray-700">变更后重置免费订阅点数</span>
</label>
</div>
</div>

<div className="grid grid-cols-[140px_1fr] gap-6 items-center">
<div className="text-right text-sm text-gray-600 font-normal">
                    点数刷新开关 <span className="text-red-500 ml-0.5">*</span>
</div>
<div>
<button className="w-10 h-5 bg-gray-200 rounded-full relative transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" id="refresh-toggle">
<span className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full shadow-sm transition-transform duration-200 translate-x-0" id="refresh-toggle-knob"></span>
</button>
</div>
</div>

<div className="grid grid-cols-[140px_1fr] gap-6 items-center">
<div className="text-right text-sm text-gray-600 font-normal">
                    订阅类型 <span className="text-red-500 ml-0.5">*</span>
</div>
<div className="relative w-full">
<select className="w-full appearance-none border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-800 bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow">
<option>免费</option>
<option>付费</option>
</select>
<i className="absolute right-3 top-2 w-4 h-4 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<hr className="border-gray-100 my-4"/>

<div className="grid grid-cols-[140px_1fr] gap-6 items-start">
<div className="text-right text-sm text-gray-600 font-normal pt-2">
                    客户端权限配置 <span className="text-red-500 ml-0.5">*</span>
</div>
<div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">

<div className="flex items-center justify-between bg-gray-50/80 border-b border-gray-200 px-2 pt-2">

<div className="flex space-x-1">
<button className="px-4 py-2 text-sm text-blue-600 bg-white border border-gray-200 border-b-white rounded-t-md relative top-[1px] font-medium transition-colors">灵感渲染</button>
<button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-transparent rounded-t-md transition-colors">智能生成</button>
<button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-transparent rounded-t-md transition-colors">成本结算</button>
<button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-transparent rounded-t-md transition-colors">AI分析</button>
<button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-transparent rounded-t-md transition-colors">AI助手</button>
<button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-transparent rounded-t-md transition-colors">数据建模</button>
<button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-transparent rounded-t-md transition-colors">基础服务</button>
</div>

<div className="relative pb-2 pr-2">
<select className="appearance-none border border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md pl-3 pr-8 py-1.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all cursor-pointer" id="role-copy-select">
<option disabled="" selected="" value="">复用已有角色配置</option>
<option value="pro">付费专业版</option>
<option value="basic">基础版</option>
</select>
<i className="absolute right-2.5 top-2 w-3.5 h-3.5 text-blue-600 pointer-events-none" data-lucide="copy"></i>
</div>
</div>

<div className="flex flex-col bg-white" id="client-permissions-list">

<div className="flex items-center py-3 px-4 border-b border-gray-100 hover:bg-gray-50/50 transition-colors permission-item">
<div className="w-[30%] flex items-center gap-3">
<label className="flex items-center cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer sr-only perm-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors group-hover:border-blue-400"></div>
<i className="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none left-0.5 top-0.5" data-lucide="check"></i>
</div>
</label>
<span className="text-sm text-gray-700">分区生图 (高清)</span>
</div>
<div className="w-[30%] text-sm text-gray-500 text-center points-text">付费 (12点/次)</div>
<div className="w-[40%] flex justify-end items-center gap-3">
<button className="text-sm text-blue-600 hover:text-blue-700 font-medium">编辑</button>
<input className="perm-note w-48 text-sm border border-gray-200 rounded px-2 py-1 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-gray-600 placeholder:text-gray-400" placeholder="请输入备注 (非必填)" type="text"/>
</div>
</div>
<div className="flex items-center py-3 px-4 border-b border-gray-100 hover:bg-gray-50/50 transition-colors permission-item">
<div className="w-[30%] flex items-center gap-3">
<label className="flex items-center cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer sr-only perm-checkbox" type="checkbox" />
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors group-hover:border-blue-400"></div>
<i className="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none left-0.5 top-0.5" data-lucide="check"></i>
</input></div>
</label>
<span className="text-sm text-gray-700">鸟瞰生图</span>
</div>
<div className="w-[30%] text-sm text-gray-500 text-center points-text">付费 (10点/次)</div>
<div className="w-[40%] flex justify-end items-center gap-3">
<button className="text-sm text-blue-600 hover:text-blue-700 font-medium">编辑</button>
<input className="perm-note w-48 text-sm border border-gray-200 rounded px-2 py-1 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-gray-600 placeholder:text-gray-400" placeholder="请输入备注 (非必填)" type="text"/>
</div>
</div>
<div className="flex items-center py-3 px-4 border-b border-gray-100 hover:bg-gray-50/50 transition-colors permission-item">
<div className="w-[30%] flex items-center gap-3">
<label className="flex items-center cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer sr-only perm-checkbox" type="checkbox" />
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors group-hover:border-blue-400"></div>
<i className="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none left-0.5 top-0.5" data-lucide="check"></i>
</input></div>
</label>
<span className="text-sm text-gray-700">Nano banana 高清</span>
</div>
<div className="w-[30%] text-sm text-gray-500 text-center points-text">付费 (30点/次)</div>
<div className="w-[40%] flex justify-end items-center gap-3">
<button className="text-sm text-blue-600 hover:text-blue-700 font-medium">编辑</button>
<input className="perm-note w-48 text-sm border border-gray-200 rounded px-2 py-1 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-gray-600 placeholder:text-gray-400" placeholder="请输入备注 (非必填)" type="text"/>
</div>
</div>

<div className="flex items-center py-3 px-4 border-b border-gray-100 hover:bg-gray-50/50 transition-colors permission-item">
<div className="w-[30%] flex items-center gap-3">
<label className="flex items-center cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only perm-checkbox" type="checkbox" />
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors group-hover:border-blue-400"></div>
<i className="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none left-0.5 top-0.5" data-lucide="check"></i>
</input></div>
</label>
<span className="text-sm text-gray-700">Nano banana 4k</span>
</div>
<div className="w-[30%] text-sm text-gray-500 text-center points-text">付费 (32点/次)</div>
<div className="w-[40%] flex justify-end items-center gap-3">
<button className="text-sm text-blue-600 hover:text-blue-700 font-medium">编辑</button>
<input className="perm-note w-48 text-sm border border-gray-200 rounded px-2 py-1 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-gray-600 placeholder:text-gray-400" placeholder="请输入备注 (非必填)" type="text"/>
</div>
</div>

<div className="flex items-center py-3 px-4 border-b border-gray-100 hover:bg-gray-50/50 transition-colors permission-item">
<div className="w-[30%] flex items-center gap-3">
<label className="flex items-center cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only perm-checkbox" type="checkbox" />
<div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors group-hover:border-blue-400"></div>
<i className="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none left-0.5 top-0.5" data-lucide="check"></i>
</input></div>
</label>
<span className="text-sm text-gray-700">Nano banana pro 高清</span>
</div>
<div className="w-[30%] text-sm text-gray-500 text-center points-text">付费 (98点/次)</div>
<div className="w-[40%] flex justify-end items-center gap-3">
<button className="text-sm text-blue-600 hover:text-blue-700 font-medium">编辑</button>
<input className="perm-note w-48 text-sm border border-gray-200 rounded px-2 py-1 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-gray-600 placeholder:text-gray-400" placeholder="请输入备注 (非必填)" type="text"/>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-[140px_1fr] gap-6 items-start">
<div className="text-right text-sm text-gray-600 font-normal pt-2">
                    后台权限配置 <span className="text-red-500 ml-0.5">*</span>
</div>
<div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm min-h-[120px]" id="backend-permissions-container">
<div className="flex items-center bg-gray-50/80 border-b border-gray-200 px-2 pt-2">
<div className="flex space-x-1">
<button className="px-4 py-2 text-sm text-blue-600 bg-white border border-gray-200 border-b-white rounded-t-md relative top-[1px] font-medium transition-colors">用户中心</button>
<button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-transparent rounded-t-md transition-colors">AI模块</button>
<button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-transparent rounded-t-md transition-colors">配置</button>
<button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-transparent rounded-t-md transition-colors">权限管理</button>
<button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-transparent rounded-t-md transition-colors">插件管理</button>
</div>
</div>

<div className="p-4 text-sm text-gray-400 text-center flex-1 flex items-center justify-center">
                        后台权限数据独立，不受上方复用操作影响
                    </div>
</div>
</div>
</div>

<div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50/50">
<button className="px-5 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all font-medium">取消</button>
<button className="px-5 py-2 text-sm text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all font-medium">确定</button>
</div>
</div>


    </>
  );
}
