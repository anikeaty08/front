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



        const feed = document.getElementById('notification-feed');
        const badge = document.getElementById('badge-count');
        const permissionBanner = document.getElementById('permission-banner');
        let notificationCount = 0;

        // Check Permissions on Load
        document.addEventListener('DOMContentLoaded', () => {
            checkPermissionUI();
            
            // Add initial mock data
            setTimeout(() => addNotificationToUI({
                title: "Deployment Successful",
                body: "Project 'Nexus' has been successfully deployed to production.",
                type: "success",
                time: "2m ago"
            }), 500);
            
            setTimeout(() => addNotificationToUI({
                title: "New Comment",
                body: "Sarah left a comment on PR #342: 'Looks great, but check the font weights.'",
                type: "info",
                time: "15m ago"
            }), 800);
        });

        function checkPermissionUI() {
            if (!("Notification" in window)) {
                console.log("This browser does not support desktop notification");
                return;
            }
            if (Notification.permission === "granted") {
                permissionBanner.classList.add('hidden');
            } else if (Notification.permission !== "denied") {
                permissionBanner.classList.remove('hidden');
            }
        }

        function requestPermission() {
            Notification.requestPermission().then((permission) => {
                checkPermissionUI();
                if (permission === "granted") {
                    new Notification("Notifications Enabled", {
                        body: "You will now receive real-time updates.",
                        icon: "https://api.iconify.design/solar:bell-bing-bold-duotone.svg?color=%236366f1"
                    });
                }
            });
        }

        function sendRealNotification() {
            if (Notification.permission === "granted") {
                const n = new Notification("Test Notification", {
                    body: "This is a real system notification accessed via JavaScript.",
                    icon: "https://api.iconify.design/solar:bell-bing-bold-duotone.svg?color=%2310b981"
                });
                addNotificationToUI({
                    title: "System Notification Sent",
                    body: "OS notification triggered successfully.",
                    type: "action",
                    time: "Just now"
                });
            } else {
                addNotificationToUI({
                    title: "Permission Needed",
                    body: "Please enable permissions to use this feature.",
                    type: "warning",
                    time: "Just now"
                });
                // Shake animation on banner could go here
                permissionBanner.classList.remove('hidden');
            }
        }

        function addMockNotification() {
            const types = ['success', 'info', 'warning', 'error'];
            const titles = ['Build Finished', 'New Subscriber', 'Server Load High', 'Payment Failed', 'Database Backup'];
            const bodies = [
                'The automated build process completed in 45s.',
                'User user@example.com just signed up for the Pro plan.',
                'CPU usage is currently at 85% on instance i-492.',
                'The payment for invoice #9921 failed.',
                'Daily snapshot created successfully.'
            ];
            
            const rand = Math.floor(Math.random() * titles.length);
            
            addNotificationToUI({
                title: titles[rand],
                body: bodies[rand],
                type: types[rand % types.length],
                time: "Just now"
            });

            // If permission granted, also send real one
            if (Notification.permission === "granted" && Math.random() > 0.5) {
                new Notification(titles[rand], { body: bodies[rand] });
            }
        }

        function addNotificationToUI(data) {
            notificationCount++;
            badge.innerText = notificationCount;

            const id = 'notif-' + Date.now();
            const el = document.createElement('div');
            el.className = 'group animate-slide-in relative flex items-start gap-4 p-4 rounded-lg border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-white/10 transition-all cursor-default';
            el.id = id;

            let iconColor = 'text-zinc-500';
            let iconName = 'solar:bell-linear';

            if(data.type === 'success') { iconColor = 'text-emerald-500'; iconName = 'solar:check-circle-linear'; }
            if(data.type === 'warning') { iconColor = 'text-amber-500'; iconName = 'solar:shield-warning-linear'; }
            if(data.type === 'error') { iconColor = 'text-rose-500'; iconName = 'solar:danger-circle-linear'; }
            if(data.type === 'info') { iconColor = 'text-blue-500'; iconName = 'solar:info-circle-linear'; }
            if(data.type === 'action') { iconColor = 'text-purple-500'; iconName = 'solar:lightning-linear'; }

            el.innerHTML = `
                <div class="mt-0.5 flex-shrink-0 ${iconColor}">
                    <iconify-icon icon="${iconName}" style="stroke-width: 1.5;"></iconify-icon>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between gap-2 mb-0.5">
                        <p class="text-sm font-medium text-zinc-200 tracking-tight truncate">${data.title}</p>
                        <span class="text-[10px] text-zinc-600 font-medium whitespace-nowrap">${data.time}</span>
                    </div>
                    <p class="text-xs text-zinc-500 leading-relaxed truncate group-hover:text-zinc-400 transition-colors">${data.body}</p>
                </div>
                <div class="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 bg-zinc-900/90 shadow-xl rounded-md border border-white/5 p-1">
                    <button class="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 text-zinc-400" title="Archive" onclick="this.closest('.group').remove();">
                         <iconify-icon icon="solar:check-read-linear" style="font-size: 14px"></iconify-icon>
                    </button>
                    <button class="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 text-zinc-400" title="Delete">
                         <iconify-icon icon="solar:trash-bin-trash-linear" style="font-size: 14px"></iconify-icon>
                    </button>
                </div>
                <div class="absolute -left-[1px] top-4 bottom-4 w-[2px] rounded-r-full ${iconColor} opacity-50"></div>
            `;
            
            feed.prepend(el);
        }

        function markAllRead() {
            const items = feed.children;
            // Visual feedback loop
            Array.from(items).forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0.5';
                    item.style.transform = 'scale(0.98)';
                }, index * 50);
            });
            setTimeout(() => {
                feed.innerHTML = '';
                notificationCount = 0;
                badge.innerText = '0';
            }, items.length * 50 + 200);
        }
    
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
      

<aside className="w-64 border-r border-white/5 flex flex-col justify-between hidden md:flex bg-zinc-950/50 backdrop-blur-xl">
<div>
<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2 text-white">
<div className="w-5 h-5 bg-gradient-to-tr from-zinc-100 to-zinc-500 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="font-medium tracking-tight text-sm">NOTIFY.IO</span>
</div>
</div>
<div className="p-4 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-100 bg-white/5 rounded-md border border-white/5 transition-all">
<iconify-icon icon="solar:bell-bing-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-medium">Inbox</span>
<span className="ml-auto text-xs bg-white text-black font-semibold px-1.5 py-0.5 rounded-full" id="badge-count">0</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-md transition-all">
<iconify-icon icon="solar:archive-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-medium">Archive</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-md transition-all">
<iconify-icon icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-medium">Analytics</span>
</button>
</div>
</div>
<div className="p-4 border-t border-white/5">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-md transition-all">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-medium">Settings</span>
</button>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs text-white font-medium">JD</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-200 font-medium">Jane Doe</span>
<span className="text-[10px] text-zinc-600">Pro Plan</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative bg-zinc-950">

<header className="h-16 border-b border-white/5 flex items-center justify-between px-6 md:px-8 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<h1 className="text-sm font-medium text-zinc-100 tracking-tight">Activity Feed</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
<span className="text-xs font-medium text-emerald-500 tracking-tight">Real-time</span>
</div>
<div className="h-4 w-[1px] bg-white/10 mx-2 hidden sm:block"></div>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors" onclick="markAllRead()">
                    Mark all read
                </button>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all">
<iconify-icon icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-2xl mx-auto space-y-8">

<div className="hidden relative group overflow-hidden rounded-lg border border-indigo-500/20 bg-indigo-500/5 p-5" id="permission-banner">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-6xl text-indigo-500" icon="solar:bell-bing-bold-duotone"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="text-sm font-medium text-indigo-200 tracking-tight mb-1">Enable Push Notifications</h2>
<p className="text-xs text-indigo-200/60 max-w-sm">Get real-time updates directly to your device when important events occur in your workspace.</p>
</div>
<button className="whitespace-nowrap px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-medium rounded-md shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2" onclick="requestPermission()">
<span>Allow Access</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-3">
<iconify-icon className="text-zinc-500" icon="solar:smartphone-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold">Test</span>
</div>
<h3 className="text-sm font-medium text-zinc-200 mb-1">Trigger OS Notification</h3>
<p className="text-xs text-zinc-500 mb-4">Sends a real browser notification if permission is granted.</p>
<button className="w-full py-2 border border-white/10 rounded text-xs font-medium text-zinc-300 hover:text-white hover:border-white/20 transition-all" onclick="sendRealNotification()">
                            Send Test
                        </button>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-3">
<iconify-icon className="text-zinc-500" icon="solar:server-square-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold">Simulation</span>
</div>
<h3 className="text-sm font-medium text-zinc-200 mb-1">Simulate Traffic</h3>
<p className="text-xs text-zinc-500 mb-4">Adds a mock notification to the feed below immediately.</p>
<button className="w-full py-2 border border-white/10 rounded text-xs font-medium text-zinc-300 hover:text-white hover:border-white/20 transition-all" onclick="addMockNotification()">
                            Add to Feed
                        </button>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4 ml-1">Today</h3>
<div className="space-y-2" id="notification-feed">

</div>
</div>
</div>
</div>
</main>


    </>
  );
}
