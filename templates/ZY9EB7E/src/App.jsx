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



        const tableData = [
            { id: 1, project: "ECサイト リニューアル", assignee: "田中 太郎", status: "進行中", progress: 75, deadline: "2024-02-15", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" },
            { id: 2, project: "モバイルアプリ開発", assignee: "佐藤 花子", status: "完了", progress: 100, deadline: "2024-01-30", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=32&h=32&fit=crop&crop=face" },
            { id: 3, project: "データベース最適化", assignee: "鈴木 一郎", status: "計画中", progress: 25, deadline: "2024-03-10", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" },
            { id: 4, project: "APIドキュメント作成", assignee: "山田 美咲", status: "進行中", progress: 60, deadline: "2024-02-28", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" },
            { id: 5, project: "セキュリティ監査", assignee: "高橋 健太", status: "進行中", progress: 40, deadline: "2024-03-15", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" }
        ];

        let selectedItems = new Set();

        function renderTable() {
            const tbody = document.getElementById('tableBody');
            tbody.innerHTML = '';

            tableData.forEach((row, index) => {
                const tr = document.createElement('tr');
                tr.className = 'table-row fade-in';
                tr.style.animationDelay = `${0.2 + index * 0.05}s`;
                
                const statusConfig = {
                    '進行中': { class: 'status-active', icon: 'play-circle' },
                    '完了': { class: 'status-completed', icon: 'check-circle' },
                    '計画中': { class: 'status-planned', icon: 'clock' }
                };

                const config = statusConfig[row.status];

                tr.innerHTML = `
                    <td class="px-6 py-4">
                        <input type="checkbox" class="checkbox-custom row-checkbox" data-id="${row.id}" onchange="toggleRow(${row.id})">
                    </td>
                    <td class="px-6 py-4">
                        <div class="font-medium" style="color: #212121;">${row.project}</div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                            <img class="w-8 h-8 rounded-full ring-2" src="${row.avatar}" alt="" style="--tw-ring-color: #cfcfcf;">
                            <span style="color: #686D70;">${row.assignee}</span>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <span class="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full ${config.class}">
                            <i data-lucide="${config.icon}" class="w-3 h-3 mr-1.5"></i>
                            ${row.status}
                        </span>
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-full rounded-full h-2" style="background-color: #e1e4e9;">
                                <div class="progress-bar h-2 rounded-full transition-all duration-300" style="width: ${row.progress}%"></div>
                            </div>
                            <span class="text-sm min-w-[3rem] font-medium" style="color: #686D70;">${row.progress}%</span>
                        </div>
                    </td>
                    <td class="px-6 py-4 font-mono text-sm" style="color: #686D70;">${row.deadline}</td>
                    <td class="px-6 py-4">
                        <button class="p-1 rounded transition-colors duration-200" style="color: #81819E;" onmouseover="this.style.color='#4862a6'; this.style.backgroundColor='#f8fbfe'" onmouseout="this.style.color='#81819E'; this.style.backgroundColor='transparent'">
                            <i data-lucide="more-horizontal" class="w-4 h-4"></i>
                        </button>
                    </td>
                `;
                
                tbody.appendChild(tr);
            });

            lucide.createIcons();
        }

        function toggleRow(id) {
            const row = document.querySelector(`tr:has([data-id="${id}"])`);
            
            if (selectedItems.has(id)) {
                selectedItems.delete(id);
                row.classList.remove('selected');
            } else {
                selectedItems.add(id);
                row.classList.add('selected');
            }
            
            updateActionBar();
            updateSelectAllState();
        }

        function toggleSelectAll() {
            const selectAll = document.getElementById('selectAll');
            const checkboxes = document.querySelectorAll('.row-checkbox');
            
            if (selectAll.checked) {
                tableData.forEach(row => selectedItems.add(row.id));
                checkboxes.forEach(cb => {
                    cb.checked = true;
                    const row = cb.closest('tr');
                    row.classList.add('selected');
                });
            } else {
                selectedItems.clear();
                checkboxes.forEach(cb => {
                    cb.checked = false;
                    const row = cb.closest('tr');
                    row.classList.remove('selected');
                });
            }
            
            updateActionBar();
        }

        function updateSelectAllState() {
            const selectAll = document.getElementById('selectAll');
            const totalItems = tableData.length;
            
            if (selectedItems.size === 0) {
                selectAll.checked = false;
                selectAll.indeterminate = false;
            } else if (selectedItems.size === totalItems) {
                selectAll.checked = true;
                selectAll.indeterminate = false;
            } else {
                selectAll.checked = false;
                selectAll.indeterminate = true;
            }
        }

        function updateActionBar() {
            const actionBar = document.getElementById('actionBar');
            const selectedCount = document.getElementById('selectedCount');
            
            selectedCount.textContent = selectedItems.size;
            
            if (selectedItems.size > 0) {
                if (actionBar.classList.contains('hidden')) {
                    actionBar.classList.remove('hidden');
                    actionBar.classList.add('action-bar-enter');
                }
            } else {
                actionBar.classList.add('action-bar-exit');
                setTimeout(() => {
                    actionBar.classList.add('hidden');
                    actionBar.classList.remove('action-bar-exit', 'action-bar-enter');
                }, 200);
            }
        }

        function deleteSelected() {
            if (confirm(`選択した${selectedItems.size}件の項目を削除しますか？`)) {
                alert(`${selectedItems.size}件を削除しました`);
                clearSelection();
            }
        }

        function clearSelection() {
            selectedItems.clear();
            document.querySelectorAll('.row-checkbox').forEach(cb => {
                cb.checked = false;
                cb.closest('tr').classList.remove('selected');
            });
            updateActionBar();
            updateSelectAllState();
        }

        // Initialize
        renderTable();
        lucide.createIcons();
    
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
      
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="mb-8 fade-in">
<h1 className="text-3xl font-semibold tracking-tight" style={{color: '#212121'}}>データ管理</h1>
<p className="mt-2" style={{color: '#686D70'}}>プロジェクトとメンバーの一覧表示</p>
</div>

<div className="hidden mb-6" id="actionBar">
<div className="border rounded-xl shadow-sm p-4" style={{backgroundColor: '#fff', borderColor: '#cfcfcf'}}>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<span className="text-sm font-medium" id="selectedCount" style={{color: '#4862a6'}}>0</span>
<span className="text-sm" style={{color: '#686D70'}}>項目を選択中</span>
</div>
<div className="flex items-center space-x-2">
<button className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg btn-primary transition-colors duration-200" onclick="deleteSelected()">
<i className="w-4 h-4 mr-2" data-lucide="trash-2"></i>
                            削除
                        </button>
<button className="inline-flex items-center px-3 py-2 rounded-lg btn-secondary transition-colors duration-200" onclick="clearSelection()">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
</div>
</div>
</div>

<div className="rounded-xl shadow-lg border overflow-hidden fade-in" style={{backgroundColor: '#fff', borderColor: '#cfcfcf', animationDelay: '0.1s'}}>

<div className="px-6 py-4 border-b" style={{backgroundColor: '#fafafa', borderColor: '#cfcfcf'}}>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<input className="checkbox-custom" id="selectAll" onchange="toggleSelectAll()" type="checkbox"/>
<h3 className="text-lg font-medium" style={{color: '#212121'}}>プロジェクト一覧</h3>
</div>
<div className="flex items-center space-x-2">
<button className="p-2 rounded-lg transition-colors duration-200" onmouseout="this.style.color='#81819E'; this.style.backgroundColor='transparent'" onmouseover="this.style.color='#4862a6'; this.style.backgroundColor='#f8fbfe'" style={{color: '#81819E'}}>
<i className="w-4 h-4" data-lucide="filter"></i>
</button>
<button className="p-2 rounded-lg transition-colors duration-200" onmouseout="this.style.color='#81819E'; this.style.backgroundColor='transparent'" onmouseover="this.style.color='#4862a6'; this.style.backgroundColor='#f8fbfe'" style={{color: '#81819E'}}>
<i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full" style={{backgroundColor: '#fff'}}>
<thead style={{backgroundColor: '#fafafa'}}>
<tr>
<th className="w-12 px-6 py-3"></th>
<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{color: '#686D70'}}>プロジェクト</th>
<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{color: '#686D70'}}>担当者</th>
<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{color: '#686D70'}}>ステータス</th>
<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{color: '#686D70'}}>進捗</th>
<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{color: '#686D70'}}>期限</th>
<th className="w-16 px-6 py-3"></th>
</tr>
</thead>
<tbody className="divide-y" id="tableBody" style={{backgroundColor: '#fff', '--tw-divide-opacity': '1', '--tw-divide-color': '#cfcfcf'}}>

</tbody>
</table>
</div>
</div>
</div>


    </>
  );
}
