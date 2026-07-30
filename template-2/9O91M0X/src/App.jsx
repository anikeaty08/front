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



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'mono': ['Space Mono', 'monospace']
                    },
                    colors: {
                        'matrix': '#00FF88',
                        'amber': '#FFA500'
                    }
                }
            }
        }
    


        // Update time
        function updateTime() {
            const now = new Date();
            const uptime = document.querySelector('[data-uptime]');
            if (uptime) {
                const hours = Math.floor(Math.random() * 100);
                const minutes = Math.floor(Math.random() * 60);
                const seconds = Math.floor(Math.random() * 60);
                uptime.textContent = `UPTIME: ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        }

        // Simulate data streams
        function addLogLine() {
            const terminal = document.querySelector('.space-y-1');
            if (terminal) {
                const lines = [
                    '2024-01-15 15:45:' + (Math.floor(Math.random() * 60)).toString().padStart(2, '0') + ' [INFO] Process completed successfully',
                    '2024-01-15 15:45:' + (Math.floor(Math.random() * 60)).toString().padStart(2, '0') + ' [WARN] Memory usage at 75%',
                    '2024-01-15 15:45:' + (Math.floor(Math.random() * 60)).toString().padStart(2, '0') + ' [INFO] Connection from 192.168.1.' + Math.floor(Math.random() * 255)
                ];
                const colors = ['text-matrix', 'text-amber', 'text-white/70'];
                const randomLine = lines[Math.floor(Math.random() * lines.length)];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                
                const div = document.createElement('div');
                div.className = `${randomColor} data-stream`;
                div.textContent = randomLine;
                
                const cursor = terminal.querySelector('.terminal-cursor').parentElement;
                terminal.insertBefore(div, cursor);
                
                // Remove old lines
                const allLines = terminal.querySelectorAll('.data-stream');
                if (allLines.length > 5) {
                    allLines[0].remove();
                }
            }
        }

        // Initialize
        setInterval(updateTime, 1000);
        setInterval(addLogLine, 3000);
    
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
      

<div className="scan-line"></div>

<div className="absolute inset-0 opacity-10">
<div className="absolute inset-0" style={{backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 35px, #00FF88 35px, #00FF88 36px), repeating-linear-gradient(90deg, transparent, transparent 35px, #00FF88 35px, #00FF88 36px)`}}></div>
</div>

<header className="relative z-20 bg-black border-b border-matrix/30 p-4">
<div className="flex justify-between items-center">
<div className="flex items-center space-x-6">
<h1 className="text-2xl font-bold text-matrix">COMMAND_CENTER</h1>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-matrix rounded-full animate-pulse"></div>
<span className="text-sm text-matrix">SYSTEM ONLINE</span>
</div>
</div>
<div className="flex items-center space-x-8 text-sm">
<div className="text-amber">CPU: 23%</div>
<div className="text-amber">RAM: 67%</div>
<div className="text-matrix">UPTIME: 72:14:33</div>
<div className="text-white/70">USER: root@terminal</div>
</div>
</div>
</header>

<div className="relative z-10 h-screen pt-16 p-4 grid grid-cols-12 grid-rows-6 gap-4">

<div className="col-span-8 row-span-4 bg-black border border-matrix/50 rounded">
<div className="border-b border-matrix/30 p-2 bg-matrix/10">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-red-500 rounded-full"></div>
<div className="w-3 h-3 bg-amber rounded-full"></div>
<div className="w-3 h-3 bg-matrix rounded-full"></div>
<span className="text-sm ml-4">terminal@command-center</span>
</div>
</div>
<div className="p-4 text-sm space-y-1 h-full overflow-hidden">
<div className="text-matrix">$ sudo systemctl status --all</div>
<div className="text-white/80">● docker.service - Docker Application Container Engine</div>
<div className="text-white/60 ml-4">Loaded: loaded (/lib/systemd/system/docker.service; enabled)</div>
<div className="text-matrix ml-4">Active: active (running) since Mon 2024-01-15 14:30:22 UTC</div>
<div className="text-white/80">● nginx.service - A high performance web server</div>
<div className="text-matrix ml-4">Active: active (running) since Mon 2024-01-15 14:30:18 UTC</div>
<div className="text-amber">● redis.service - Advanced key-value store</div>
<div className="text-amber ml-4">Active: failed (Result: exit-code) since Mon 2024-01-15 15:42:11 UTC</div>
<div className="text-white/80">● postgresql.service - PostgreSQL database server</div>
<div className="text-matrix ml-4">Active: active (running) since Mon 2024-01-15 14:30:15 UTC</div>
<div className="mt-4 text-matrix">$ tail -f /var/log/system.log</div>
<div className="text-white/70 data-stream">2024-01-15 15:45:33 [INFO] Connection established from 192.168.1.100</div>
<div className="text-amber data-stream">2024-01-15 15:45:35 [WARN] High memory usage detected: 89%</div>
<div className="text-matrix data-stream">2024-01-15 15:45:37 [INFO] Backup process completed successfully</div>
<div className="flex items-center mt-4">
<span className="text-matrix">$ </span>
<span className="terminal-cursor ml-2"></span>
</div>
</div>
</div>

<div className="col-span-4 row-span-2 bg-black border border-matrix/50 rounded p-4">
<h3 className="text-matrix font-bold mb-4 border-b border-matrix/30 pb-2">SYSTEM STATUS</h3>
<div className="space-y-3 text-sm">
<div className="flex justify-between items-center">
<span className="text-white/80">Network</span>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-matrix rounded-full animate-pulse"></div>
<span className="text-matrix">ONLINE</span>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-white/80">Database</span>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-matrix rounded-full animate-pulse"></div>
<span className="text-matrix">ACTIVE</span>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-white/80">Cache</span>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-amber rounded-full animate-pulse"></div>
<span className="text-amber">WARNING</span>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-white/80">Security</span>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-matrix rounded-full animate-pulse"></div>
<span className="text-matrix">SECURE</span>
</div>
</div>
</div>
</div>

<div className="col-span-4 row-span-2 bg-black border border-matrix/50 rounded p-4">
<h3 className="text-amber font-bold mb-4 border-b border-amber/30 pb-2">RESOURCES</h3>
<div className="space-y-4 text-sm">
<div>
<div className="flex justify-between mb-1">
<span className="text-white/80">CPU Usage</span>
<span className="text-amber">23%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-amber h-2 rounded-full" style={{width: `23%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="text-white/80">Memory</span>
<span className="text-amber">67%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-amber h-2 rounded-full" style={{width: `67%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="text-white/80">Disk I/O</span>
<span className="text-matrix">12%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-matrix h-2 rounded-full" style={{width: `12%`}}></div>
</div>
</div>
</div>
</div>

<div className="col-span-4 row-span-2 bg-black border border-matrix/50 rounded p-4">
<h3 className="text-matrix font-bold mb-4 border-b border-matrix/30 pb-2">ACTIVE PROCESSES</h3>
<div className="text-xs space-y-1">
<div className="flex justify-between text-white/60 border-b border-white/10 pb-1">
<span>PID</span>
<span>CPU%</span>
<span>COMMAND</span>
</div>
<div className="flex justify-between text-matrix">
<span>1247</span>
<span>15.2</span>
<span>nginx</span>
</div>
<div className="flex justify-between text-white/80">
<span>2891</span>
<span>8.7</span>
<span>postgres</span>
</div>
<div className="flex justify-between text-amber">
<span>3442</span>
<span>22.1</span>
<span>redis-server</span>
</div>
<div className="flex justify-between text-white/80">
<span>4821</span>
<span>5.3</span>
<span>docker</span>
</div>
<div className="flex justify-between text-matrix">
<span>5792</span>
<span>3.1</span>
<span>systemd</span>
</div>
</div>
</div>

<div className="col-span-4 row-span-2 bg-black border border-matrix/50 rounded p-4">
<h3 className="text-amber font-bold mb-4 border-b border-amber/30 pb-2">NETWORK ACTIVITY</h3>
<div className="text-xs space-y-2">
<div className="flex justify-between">
<span className="text-white/80">Incoming:</span>
<span className="text-matrix">1.2 MB/s</span>
</div>
<div className="flex justify-between">
<span className="text-white/80">Outgoing:</span>
<span className="text-matrix">0.8 MB/s</span>
</div>
<div className="mt-4">
<div className="text-white/60 text-xs mb-2">Recent Connections:</div>
<div className="space-y-1 text-xs">
<div className="text-matrix">192.168.1.100:22 SSH</div>
<div className="text-matrix">10.0.0.15:443 HTTPS</div>
<div className="text-amber">172.16.0.5:3306 MySQL</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
