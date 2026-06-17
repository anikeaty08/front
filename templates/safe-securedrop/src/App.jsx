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



        let selectedFiles = [];
        let passwordEnabled = false;
        let limitEnabled = false;

        // Drop Zone Events
        const dropZone = document.getElementById('dropZone');
        const fileInput = document.getElementById('fileInput');

        dropZone.addEventListener('click', () => fileInput.click());
        
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('border-cyan-500', 'bg-cyan-500/10');
        });

        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('border-cyan-500', 'bg-cyan-500/10');
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('border-cyan-500', 'bg-cyan-500/10');
            handleFiles(e.dataTransfer.files);
        });

        fileInput.addEventListener('change', (e) => {
            handleFiles(e.target.files);
        });

        function handleFiles(files) {
            selectedFiles = Array.from(files);
            renderFileList();
            document.getElementById('optionsPanel').classList.remove('hidden');
            document.getElementById('uploadBtn').classList.remove('hidden');
        }

        function renderFileList() {
            const fileList = document.getElementById('fileList');
            fileList.classList.remove('hidden');
            fileList.innerHTML = selectedFiles.map((file, index) => `
                <div class="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-3">
                    <div class="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center flex-shrink-0">
                        <span class="iconify text-zinc-400" data-icon="lucide:file" data-width="20" data-height="20"></span>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-white text-sm font-medium truncate">${file.name}</p>
                        <p class="text-zinc-500 text-xs">${formatFileSize(file.size)}</p>
                    </div>
                    <button onclick="removeFile(${index})" class="text-zinc-500 hover:text-red-400 transition-colors p-1">
                        <span class="iconify" data-icon="lucide:x" data-width="18" data-height="18"></span>
                    </button>
                </div>
            `).join('');
        }

        function removeFile(index) {
            selectedFiles.splice(index, 1);
            if (selectedFiles.length === 0) {
                document.getElementById('fileList').classList.add('hidden');
                document.getElementById('optionsPanel').classList.add('hidden');
                document.getElementById('uploadBtn').classList.add('hidden');
            } else {
                renderFileList();
            }
        }

        function formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }

        function togglePassword() {
            passwordEnabled = !passwordEnabled;
            const toggle = document.getElementById('passwordToggle');
            const input = document.getElementById('passwordInput');
            const dot = toggle.querySelector('span');
            
            if (passwordEnabled) {
                toggle.classList.remove('bg-zinc-700');
                toggle.classList.add('bg-cyan-500');
                dot.classList.remove('left-1', 'bg-zinc-400');
                dot.classList.add('left-6', 'bg-white');
                input.disabled = false;
            } else {
                toggle.classList.add('bg-zinc-700');
                toggle.classList.remove('bg-cyan-500');
                dot.classList.add('left-1', 'bg-zinc-400');
                dot.classList.remove('left-6', 'bg-white');
                input.disabled = true;
            }
        }

        function toggleLimit() {
            limitEnabled = !limitEnabled;
            const toggle = document.getElementById('limitToggle');
            const dropdown = document.getElementById('limitDropdown');
            const dot = toggle.querySelector('span');
            
            if (limitEnabled) {
                toggle.classList.remove('bg-zinc-700');
                toggle.classList.add('bg-cyan-500');
                dot.classList.remove('left-1', 'bg-zinc-400');
                dot.classList.add('left-6', 'bg-white');
                dropdown.disabled = false;
            } else {
                toggle.classList.add('bg-zinc-700');
                toggle.classList.remove('bg-cyan-500');
                dot.classList.add('left-1', 'bg-zinc-400');
                dot.classList.remove('left-6', 'bg-white');
                dropdown.disabled = true;
            }
        }

        function toggleDropdown() {
            const menu = document.getElementById('dropdownMenu');
            menu.classList.toggle('hidden');
        }

        function selectLimit(value) {
            document.getElementById('limitValue').textContent = value;
            document.getElementById('dropdownMenu').classList.add('hidden');
        }

        function startUpload() {
            document.getElementById('uploadSection').classList.add('hidden');
            document.getElementById('progressSection').classList.remove('hidden');
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 15;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    setTimeout(showSuccess, 500);
                }
                document.getElementById('progressBar').style.width = progress + '%';
                document.getElementById('progressText').textContent = Math.round(progress) + '% abgeschlossen';
            }, 200);
        }

        function showSuccess() {
            document.getElementById('progressSection').classList.add('hidden');
            document.getElementById('successSection').classList.remove('hidden');
            
            // Generate random link
            const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
            let randomId = '';
            for (let i = 0; i < 8; i++) {
                randomId += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            document.getElementById('downloadLink').value = `https://securedrop.io/d/${randomId}`;
            
            // Show info tags
            if (passwordEnabled) {
                document.getElementById('infoPassword').classList.remove('hidden');
            }
            if (limitEnabled) {
                document.getElementById('infoLimit').classList.remove('hidden');
                const limitText = document.getElementById('limitValue').textContent;
                document.getElementById('infoLimitText').textContent = limitText === 'Unbegrenzt' ? 'Unbegrenzte Downloads' : limitText.replace('×', ' Downloads');
            }
        }

        function copyLink() {
            const link = document.getElementById('downloadLink');
            link.select();
            document.execCommand('copy');
            
            const btn = document.getElementById('copyBtn');
            btn.innerHTML = '<span class="iconify" data-icon="lucide:check" data-width="18" data-height="18"></span><span class="hidden sm:inline text-sm">Kopiert!</span>';
            btn.classList.remove('bg-zinc-700', 'hover:bg-zinc-600');
            btn.classList.add('bg-emerald-600', 'hover:bg-emerald-500');
            
            setTimeout(() => {
                btn.innerHTML = '<span class="iconify" data-icon="lucide:copy" data-width="18" data-height="18"></span><span class="hidden sm:inline text-sm">Kopieren</span>';
                btn.classList.add('bg-zinc-700', 'hover:bg-zinc-600');
                btn.classList.remove('bg-emerald-600', 'hover:bg-emerald-500');
            }, 2000);
        }

        function resetUpload() {
            selectedFiles = [];
            passwordEnabled = false;
            limitEnabled = false;
            
            document.getElementById('successSection').classList.add('hidden');
            document.getElementById('uploadSection').classList.remove('hidden');
            document.getElementById('fileList').classList.add('hidden');
            document.getElementById('optionsPanel').classList.add('hidden');
            document.getElementById('uploadBtn').classList.add('hidden');
            document.getElementById('infoPassword').classList.add('hidden');
            document.getElementById('infoLimit').classList.add('hidden');
            
            // Reset toggles
            const passwordToggle = document.getElementById('passwordToggle');
            const limitToggle = document.getElementById('limitToggle');
            passwordToggle.classList.add('bg-zinc-700');
            passwordToggle.classList.remove('bg-cyan-500');
            passwordToggle.querySelector('span').classList.add('left-1', 'bg-zinc-400');
            passwordToggle.querySelector('span').classList.remove('left-6', 'bg-white');
            limitToggle.classList.add('bg-zinc-700');
            limitToggle.classList.remove('bg-cyan-500');
            limitToggle.querySelector('span').classList.add('left-1', 'bg-zinc-400');
            limitToggle.querySelector('span').classList.remove('left-6', 'bg-white');
            
            document.getElementById('passwordInput').disabled = true;
            document.getElementById('passwordInput').value = '';
            document.getElementById('limitDropdown').disabled = true;
            document.getElementById('limitValue').textContent = 'Unbegrenzt';
            document.getElementById('fileInput').value = '';
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#limitDropdown') && !e.target.closest('#dropdownMenu')) {
                document.getElementById('dropdownMenu').classList.add('hidden');
            }
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
      

<header className="border-b border-zinc-800/50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
<span className="text-white text-sm font-semibold tracking-tighter">SD</span>
</div>
<span className="text-white text-lg font-semibold tracking-tight">SecureDrop</span>
</div>
<nav className="hidden sm:flex items-center gap-6">
<a className="text-zinc-400 text-sm hover:text-white transition-colors" href="#">Funktionen</a>
<a className="text-zinc-400 text-sm hover:text-white transition-colors" href="#">Sicherheit</a>
<a className="text-zinc-400 text-sm hover:text-white transition-colors" href="#">FAQ</a>
</nav>
</div>
</header>

<main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">

<div className="text-center mb-12">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
                Sichere Dateiübertragung
            </h1>
<p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
                Keine Anmeldung. Keine Limits. Einfach Dateien hochladen und sicher teilen.
            </p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-8" id="uploadSection">

<div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/5" id="dropZone">
<div className="flex flex-col items-center gap-4">
<div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
<span className="iconify text-cyan-400" data-height="32" data-icon="lucide:upload-cloud" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-white text-base font-medium mb-1">Dateien hierher ziehen</p>
<p className="text-zinc-500 text-sm">oder klicken zum Auswählen</p>
</div>
<p className="text-zinc-600 text-xs">Alle Dateiformate • Keine Größenbeschränkung</p>
</div>
<input className="hidden" id="fileInput" multiple="" type="file"/>
</div>

<div className="hidden mt-6 space-y-3" id="fileList"></div>

<div className="hidden mt-8 pt-6 border-t border-zinc-800" id="optionsPanel">
<h3 className="text-white text-sm font-medium mb-4 flex items-center gap-2">
<span className="iconify text-zinc-500" data-height="16" data-icon="lucide:settings-2" data-width="16"></span>
                    Sicherheitsoptionen
                </h3>
<div className="grid sm:grid-cols-2 gap-4">

<div className="bg-zinc-800/50 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<label className="text-zinc-300 text-sm flex items-center gap-2">
<span className="iconify text-cyan-400" data-height="16" data-icon="lucide:lock" data-width="16"></span>
                                Passwortschutz
                            </label>

<button className="relative w-11 h-6 rounded-full bg-zinc-700 transition-colors duration-200" id="passwordToggle" onclick="togglePassword()">
<span className="absolute top-1 left-1 w-4 h-4 rounded-full bg-zinc-400 transition-all duration-200"></span>
</button>
</div>
<input className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all" disabled="" id="passwordInput" placeholder="Passwort eingeben" type="password"/>
</div>

<div className="bg-zinc-800/50 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<label className="text-zinc-300 text-sm flex items-center gap-2">
<span className="iconify text-cyan-400" data-height="16" data-icon="lucide:hash" data-width="16"></span>
                                Download-Limit
                            </label>

<button className="relative w-11 h-6 rounded-full bg-zinc-700 transition-colors duration-200" id="limitToggle" onclick="toggleLimit()">
<span className="absolute top-1 left-1 w-4 h-4 rounded-full bg-zinc-400 transition-all duration-200"></span>
</button>
</div>

<div className="relative">
<button className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-left text-zinc-400 focus:outline-none focus:border-cyan-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-between" disabled="" id="limitDropdown" onclick="toggleDropdown()">
<span id="limitValue">Unbegrenzt</span>
<span className="iconify" data-height="16" data-icon="lucide:chevron-down" data-width="16"></span>
</button>
<div className="hidden absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden z-10" id="dropdownMenu">
<button className="w-full px-3 py-2 text-sm text-left text-zinc-300 hover:bg-zinc-800 transition-colors" onclick="selectLimit('1×')">1×</button>
<button className="w-full px-3 py-2 text-sm text-left text-zinc-300 hover:bg-zinc-800 transition-colors" onclick="selectLimit('5×')">5×</button>
<button className="w-full px-3 py-2 text-sm text-left text-zinc-300 hover:bg-zinc-800 transition-colors" onclick="selectLimit('10×')">10×</button>
<button className="w-full px-3 py-2 text-sm text-left text-zinc-300 hover:bg-zinc-800 transition-colors" onclick="selectLimit('Unbegrenzt')">Unbegrenzt</button>
</div>
</div>
</div>
</div>
</div>

<button className="hidden w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2" id="uploadBtn" onclick="startUpload()">
<span className="iconify" data-height="20" data-icon="lucide:upload" data-width="20"></span>
                Dateien hochladen
            </button>
</div>

<div className="hidden bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-8" id="progressSection">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
<span className="iconify text-cyan-400 animate-spin" data-height="24" data-icon="lucide:loader-2" data-width="24"></span>
</div>
<div className="flex-1">
<p className="text-white text-sm font-medium">Upload läuft...</p>
<p className="text-zinc-500 text-xs" id="progressText">0% abgeschlossen</p>
</div>
</div>
<div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
<div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-300" id="progressBar" style={{width: '0%'}}></div>
</div>
</div>

<div className="hidden bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-8" id="successSection">
<div className="text-center mb-6">
<div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
<span className="iconify text-emerald-400" data-height="32" data-icon="lucide:check-circle" data-width="32"></span>
</div>
<h2 className="text-white text-xl font-semibold tracking-tight mb-2">Upload erfolgreich!</h2>
<p className="text-zinc-400 text-sm">Dein Download-Link ist bereit</p>
</div>

<div className="bg-zinc-800/50 rounded-xl p-4 mb-4">
<label className="text-zinc-500 text-xs uppercase tracking-wide mb-2 block">Download-Link</label>
<div className="flex items-center gap-2">
<input className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-cyan-400 font-mono focus:outline-none" id="downloadLink" readonly="" type="text" value="https://securedrop.io/d/a7x9k2m"/>
<button className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center gap-2" id="copyBtn" onclick="copyLink()">
<span className="iconify" data-height="18" data-icon="lucide:copy" data-width="18"></span>
<span className="hidden sm:inline text-sm">Kopieren</span>
</button>
</div>
</div>

<div className="flex flex-wrap gap-2 justify-center">
<span className="hidden bg-cyan-500/10 text-cyan-400 text-xs px-3 py-1 rounded-full flex items-center gap-1" id="infoPassword">
<span className="iconify" data-height="12" data-icon="lucide:lock" data-width="12"></span>
                    Passwortgeschützt
                </span>
<span className="hidden bg-amber-500/10 text-amber-400 text-xs px-3 py-1 rounded-full flex items-center gap-1" id="infoLimit">
<span className="iconify" data-height="12" data-icon="lucide:hash" data-width="12"></span>
<span id="infoLimitText">5 Downloads</span>
</span>
</div>

<button className="w-full mt-6 bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2" onclick="resetUpload()">
<span className="iconify" data-height="20" data-icon="lucide:plus" data-width="20"></span>
                Neue Datei hochladen
            </button>
</div>

<div className="grid sm:grid-cols-3 gap-4 mt-12">
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-5 text-center">
<div className="w-10 h-10 mx-auto rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
<span className="iconify text-cyan-400" data-height="20" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-white text-sm font-medium mb-1">End-to-End Verschlüsselung</h3>
<p className="text-zinc-500 text-xs">Deine Dateien sind vollständig geschützt</p>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-5 text-center">
<div className="w-10 h-10 mx-auto rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
<span className="iconify text-cyan-400" data-height="20" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-white text-sm font-medium mb-1">Blitzschnell</h3>
<p className="text-zinc-500 text-xs">Keine Wartezeiten, sofortiger Upload</p>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-5 text-center">
<div className="w-10 h-10 mx-auto rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
<span className="iconify text-cyan-400" data-height="20" data-icon="lucide:user-x" data-width="20"></span>
</div>
<h3 className="text-white text-sm font-medium mb-1">100% Anonym</h3>
<p className="text-zinc-500 text-xs">Keine Registrierung erforderlich</p>
</div>
</div>
</main>

<footer className="border-t border-zinc-800/50 mt-20">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
<span className="text-white text-xs font-semibold tracking-tighter">SD</span>
</div>
<span className="text-zinc-500 text-sm">SecureDrop</span>
</div>
<p className="text-zinc-600 text-xs">© 2024 SecureDrop. Kostenlos &amp; Sicher.</p>
</div>
</div>
</footer>


    </>
  );
}
