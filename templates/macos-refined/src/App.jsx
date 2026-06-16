import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Window dragging functionality
        let isDragging = false;
        let currentWindow = null;
        let startX, startY, initialX, initialY;

        document.addEventListener('mousedown', function(e) {
            if (e.target.closest('.window-header')) {
                isDragging = true;
                currentWindow = e.target.closest('.window');
                currentWindow.classList.add('dragging');
                
                const rect = currentWindow.getBoundingClientRect();
                startX = e.clientX - rect.left;
                startY = e.clientY - rect.top;
                
                bringToFront(currentWindow);
            }
        });

        document.addEventListener('mousemove', function(e) {
            if (isDragging && currentWindow) {
                const x = e.clientX - startX;
                const y = e.clientY - startY;
                
                // Keep window within bounds
                const maxX = window.innerWidth - currentWindow.offsetWidth;
                const maxY = window.innerHeight - currentWindow.offsetHeight;
                
                const boundedX = Math.max(0, Math.min(x, maxX));
                const boundedY = Math.max(28, Math.min(y, maxY - 80)); // Account for menu bar and dock
                
                currentWindow.style.left = boundedX + 'px';
                currentWindow.style.top = boundedY + 'px';
            }
        });

        document.addEventListener('mouseup', function() {
            if (isDragging && currentWindow) {
                currentWindow.classList.remove('dragging');
                isDragging = false;
                currentWindow = null;
            }
        });

        function bringToFront(window) {
            const allWindows = document.querySelectorAll('.window');
            allWindows.forEach(w => w.style.zIndex = '10');
            window.style.zIndex = '20';
        }

        // Update time
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            document.getElementById('current-time').textContent = timeString;
        }
        updateTime();
        setInterval(updateTime, 1000);

        // Window management
        function openWindow(windowId) {
            const window = document.getElementById(windowId);
            window.classList.remove('hidden', 'minimized');
            window.classList.add('block');
            bringToFront(window);
        }

        function closeWindow(windowId) {
            document.getElementById(windowId).classList.add('hidden');
            document.getElementById(windowId).classList.remove('block');
        }

        function minimizeWindow(windowId) {
            const window = document.getElementById(windowId);
            window.classList.add('minimized');
            setTimeout(() => {
                window.classList.add('hidden');
                window.classList.remove('block');
            }, 300);
        }

        function maximizeWindow(windowId) {
            const window = document.getElementById(windowId);
            if (window.style.width === '100vw') {
                // Restore
                window.style.width = '';
                window.style.height = '';
                window.style.top = '';
                window.style.left = '';
                window.style.transform = '';
            } else {
                // Maximize
                window.style.width = '100vw';
                window.style.height = 'calc(100vh - 108px)';
                window.style.top = '28px';
                window.style.left = '0';
                window.style.transform = 'none';
            }
        }

        // Settings navigation
        function openSettingsPane(paneId) {
            document.getElementById('settings-main-view').classList.add('hidden');
            document.getElementById(paneId + '-settings-pane').classList.remove('hidden');
        }

        function backToSettingsMain() {
            document.getElementById('settings-main-view').classList.remove('hidden');
            const panes = document.querySelectorAll('[id$="-settings-pane"]');
            panes.forEach(pane => pane.classList.add('hidden'));
        }

        function toggleSetting(toggle) {
            toggle.classList.toggle('active');
        }

        // Mail functionality
        function showCompose() {
            document.getElementById('mail-main-view').classList.add('hidden');
            document.getElementById('mail-compose-view').classList.remove('hidden');
            document.getElementById('mail-settings-view').classList.add('hidden');
        }

        function hideCompose() {
            document.getElementById('mail-main-view').classList.remove('hidden');
            document.getElementById('mail-compose-view').classList.add('hidden');
        }

        function showSettings() {
            document.getElementById('mail-main-view').classList.add('hidden');
            document.getElementById('mail-compose-view').classList.add('hidden');
            document.getElementById('mail-settings-view').classList.remove('hidden');
        }

        function hideSettings() {
            document.getElementById('mail-main-view').classList.remove('hidden');
            document.getElementById('mail-settings-view').classList.add('hidden');
        }

        function sendMail() {
            alert('Email sent successfully!');
            hideCompose();
        }

        function refreshMail() {
            const refreshBtn = event.target;
            refreshBtn.style.transform = 'rotate(360deg)';
            refreshBtn.style.transition = 'transform 0.5s';
            setTimeout(() => {
                refreshBtn.style.transform = '';
                refreshBtn.style.transition = '';
            }, 500);
        }

        function showMailbox(mailbox) {
            // Update active mailbox styling
            const mailboxes = document.querySelectorAll('#mail-window .space-y-1 > div');
            mailboxes.forEach(m => {
                m.className = 'px-2 py-1 text-sm text-gray-600 cursor-pointer hover:bg-gray-100 rounded';
            });
            event.target.className = 'px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded cursor-pointer';
            
            // You could add different email lists here for different mailboxes
        }

        function openMail(index) {
            alert(`Opening email ${index + 1}`);
        }

        // Tic Tac Toe Game Logic
        let currentPlayer = 'X';
        let gameBoard = ['', '', '', '', '', '', '', '', ''];
        let gameActive = true;

        function makeMove(index) {
            if (gameBoard[index] === '' && gameActive) {
                gameBoard[index] = currentPlayer;
                const cells = document.querySelectorAll('.tic-tac-toe-cell');
                cells[index].textContent = currentPlayer;
                cells[index].classList.add(currentPlayer === 'X' ? 'text-blue-500' : 'text-red-500');
                
                if (checkWinner()) {
                    document.getElementById('game-status').textContent = `Player ${currentPlayer} Wins!`;
                    gameActive = false;
                } else if (gameBoard.every(cell => cell !== '')) {
                    document.getElementById('game-status').textContent = "It's a Draw!";
                    gameActive = false;
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    document.getElementById('game-status').textContent = `Player ${currentPlayer}'s Turn`;
                }
            }
        }

        function checkWinner() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6] // Diagonals
            ];

            return winPatterns.some(pattern => {
                return pattern.every(index => {
                    return gameBoard[index] === currentPlayer;
                });
            });
        }

        function resetGame() {
            currentPlayer = 'X';
            gameBoard = ['', '', '', '', '', '', '', '', ''];
            gameActive = true;
            document.getElementById('game-status').textContent = "Player X's Turn";
            const cells = document.querySelectorAll('.tic-tac-toe-cell');
            cells.forEach(cell => {
                cell.textContent = '';
                cell.classList.remove('text-blue-500', 'text-red-500');
            });
        }

        // Auto-save notes
        document.getElementById('notes-content').addEventListener('input', function() {
            localStorage.setItem('macOS-notes', this.value);
        });

        // Load saved notes
        const savedNotes = localStorage.getItem('macOS-notes');
        if (savedNotes) {
            document.getElementById('notes-content').value = savedNotes;
        }

        // Click on windows to bring them to front
        document.addEventListener('click', function(e) {
            const window = e.target.closest('.window');
            if (window) {
                bringToFront(window);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="menu-bar fixed top-0 left-0 right-0 h-7 flex items-center justify-between px-4 text-white text-sm font-medium z-50">
<div className="flex items-center space-x-4">
<div className="font-bold">🍎</div>
<div>Finder</div>
<div>File</div>
<div>Edit</div>
<div>View</div>
<div>Go</div>
<div>Window</div>
<div>Help</div>
</div>
<div className="flex items-center space-x-4">
<div id="current-time">12:34 PM</div>
<div>🔋</div>
<div>📶</div>
</div>
</div>

<div className="h-screen pt-7 pb-20 relative">

<div className="relative h-full" id="windows-container">

<div className="window absolute top-10 left-10 w-96 h-80 rounded-lg shadow-2xl hidden transition-all duration-300" id="notes-window">
<div className="window-header bg-gray-100 rounded-t-lg px-4 py-2 flex items-center justify-between border-b">
<div className="flex space-x-2">
<div className="traffic-light red" onclick="closeWindow('notes-window')"></div>
<div className="traffic-light yellow" onclick="minimizeWindow('notes-window')"></div>
<div className="traffic-light green" onclick="maximizeWindow('notes-window')"></div>
</div>
<div className="text-sm font-medium text-gray-700">Notes</div>
<div className="w-12"></div>
</div>
<div className="p-4 h-full">
<textarea className="w-full h-56 border-none outline-none resize-none text-sm" id="notes-content" placeholder="Start typing your notes here...">Welcome to Notes!

This is a simple notes application where you can write and save your thoughts.

• Click the red button to close
• Yellow button to minimize
• Green button to maximize
• Your notes are automatically saved
• Simple and clean interface</textarea>
</div>
</div>

<div className="window absolute top-16 left-72 w-[600px] h-96 rounded-lg shadow-2xl hidden transition-all duration-300" id="mail-window">
<div className="window-header bg-gray-100 rounded-t-lg px-4 py-2 flex items-center justify-between border-b">
<div className="flex space-x-2">
<div className="traffic-light red" onclick="closeWindow('mail-window')"></div>
<div className="traffic-light yellow" onclick="minimizeWindow('mail-window')"></div>
<div className="traffic-light green" onclick="maximizeWindow('mail-window')"></div>
</div>
<div className="text-sm font-medium text-gray-700">Mail</div>
<div className="w-12"></div>
</div>
<div className="flex h-full" id="mail-main-view">
<div className="w-48 bg-gray-50 border-r">
<div className="p-3 border-b">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Mailboxes</div>
</div>
<div className="space-y-1 p-2">
<div className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded cursor-pointer" onclick="showMailbox('inbox')">📥 Inbox (3)</div>
<div className="px-2 py-1 text-sm text-gray-600 cursor-pointer hover:bg-gray-100 rounded" onclick="showMailbox('sent')">📤 Sent</div>
<div className="px-2 py-1 text-sm text-gray-600 cursor-pointer hover:bg-gray-100 rounded" onclick="showMailbox('drafts')">📝 Drafts</div>
<div className="px-2 py-1 text-sm text-gray-600 cursor-pointer hover:bg-gray-100 rounded" onclick="showMailbox('trash')">🗑️ Trash</div>
</div>
</div>
<div className="flex-1">
<div className="border-b p-3">
<div className="flex items-center space-x-2">
<button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600" onclick="showCompose()">Compose</button>
<button className="p-1 text-gray-400 hover:text-gray-600" onclick="refreshMail()">🔄</button>
<button className="px-2 py-1 text-xs text-gray-600 border rounded hover:bg-gray-50" onclick="showSettings()">Settings</button>
</div>
</div>
<div className="space-y-px" id="mail-list">
<div className="p-3 border-b hover:bg-gray-50 cursor-pointer" onclick="openMail(0)">
<div className="flex justify-between items-start">
<div>
<div className="font-medium text-sm">Apple</div>
<div className="text-sm text-gray-600">Welcome to your new Mac!</div>
<div className="text-xs text-gray-400 mt-1">Get started with these tips and tricks...</div>
</div>
<div className="text-xs text-gray-400">10:30 AM</div>
</div>
</div>
<div className="p-3 border-b hover:bg-gray-50 cursor-pointer" onclick="openMail(1)">
<div className="flex justify-between items-start">
<div>
<div className="font-medium text-sm">GitHub</div>
<div className="text-sm text-gray-600">Your weekly coding summary</div>
<div className="text-xs text-gray-400 mt-1">You had an active week with 12 commits...</div>
</div>
<div className="text-xs text-gray-400">Yesterday</div>
</div>
</div>
<div className="p-3 border-b hover:bg-gray-50 cursor-pointer" onclick="openMail(2)">
<div className="flex justify-between items-start">
<div>
<div className="font-medium text-sm">Newsletter</div>
<div className="text-sm text-gray-600">Weekly tech updates</div>
<div className="text-xs text-gray-400 mt-1">The latest in web development and design...</div>
</div>
<div className="text-xs text-gray-400">2 days ago</div>
</div>
</div>
</div>
</div>
</div>

<div className="mail-compose absolute inset-0 rounded-lg hidden" id="mail-compose-view">
<div className="p-4 border-b bg-gray-50 rounded-t-lg">
<div className="flex items-center justify-between">
<h3 className="font-medium">New Message</h3>
<div className="flex space-x-2">
<button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600" onclick="sendMail()">Send</button>
<button className="px-3 py-1 bg-gray-300 text-gray-700 text-xs rounded hover:bg-gray-400" onclick="hideCompose()">Cancel</button>
</div>
</div>
</div>
<div className="p-4 space-y-3">
<div className="flex items-center space-x-2">
<label className="text-sm font-medium text-gray-600 w-12">To:</label>
<input className="flex-1 px-2 py-1 border rounded text-sm" placeholder="recipient@example.com" type="email"/>
</div>
<div className="flex items-center space-x-2">
<label className="text-sm font-medium text-gray-600 w-12">Subject:</label>
<input className="flex-1 px-2 py-1 border rounded text-sm" placeholder="Email subject" type="text"/>
</div>
<textarea className="w-full h-40 p-2 border rounded text-sm resize-none" placeholder="Write your message here..."></textarea>
</div>
</div>

<div className="absolute inset-0 bg-white rounded-lg hidden" id="mail-settings-view">
<div className="p-4 border-b bg-gray-50 rounded-t-lg">
<div className="flex items-center justify-between">
<h3 className="font-medium">Mail Settings</h3>
<button className="px-3 py-1 bg-gray-300 text-gray-700 text-xs rounded hover:bg-gray-400" onclick="hideSettings()">Done</button>
</div>
</div>
<div className="p-4 space-y-6">
<div>
<h4 className="text-sm font-medium text-gray-700 mb-3">Account Settings</h4>
<div className="space-y-2 text-sm">
<div className="flex justify-between">
<span>Email Address:</span>
<span className="text-gray-600">user@example.com</span>
</div>
<div className="flex justify-between">
<span>Server:</span>
<span className="text-gray-600">mail.example.com</span>
</div>
<div className="flex justify-between">
<span>Status:</span>
<span className="text-green-600">Connected</span>
</div>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-gray-700 mb-3">Preferences</h4>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm">Check for new mail automatically</span>
<div className="w-8 h-4 bg-blue-500 rounded-full relative cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full absolute right-0 top-0 shadow"></div>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm">Show unread count in dock</span>
<div className="w-8 h-4 bg-blue-500 rounded-full relative cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full absolute right-0 top-0 shadow"></div>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm">Play sound for new mail</span>
<div className="w-8 h-4 bg-gray-300 rounded-full relative cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full absolute left-0 top-0 shadow"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="window absolute top-20 left-96 w-[500px] h-[400px] rounded-lg shadow-2xl hidden transition-all duration-300" id="settings-window">
<div className="window-header bg-gray-100 rounded-t-lg px-4 py-2 flex items-center justify-between border-b">
<div className="flex space-x-2">
<div className="traffic-light red" onclick="closeWindow('settings-window')"></div>
<div className="traffic-light yellow" onclick="minimizeWindow('settings-window')"></div>
<div className="traffic-light green" onclick="maximizeWindow('settings-window')"></div>
</div>
<div className="text-sm font-medium text-gray-700">System Settings</div>
<div className="w-12"></div>
</div>

<div className="p-6 grid grid-cols-3 gap-4" id="settings-main-view">
<div className="text-center p-4 rounded-lg hover:bg-gray-50 cursor-pointer" onclick="openSettingsPane('wifi')">
<div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="wifi" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-sm font-medium">Wi-Fi</div>
</div>
<div className="text-center p-4 rounded-lg hover:bg-gray-50 cursor-pointer" onclick="openSettingsPane('bluetooth')">
<div className="w-12 h-12 mx-auto mb-2 bg-gray-500 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="bluetooth" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-sm font-medium">Bluetooth</div>
</div>
<div className="text-center p-4 rounded-lg hover:bg-gray-50 cursor-pointer" onclick="openSettingsPane('sound')">
<div className="w-12 h-12 mx-auto mb-2 bg-green-500 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="volume-2" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-sm font-medium">Sound</div>
</div>
<div className="text-center p-4 rounded-lg hover:bg-gray-50 cursor-pointer" onclick="openSettingsPane('displays')">
<div className="w-12 h-12 mx-auto mb-2 bg-purple-500 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="monitor" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-sm font-medium">Displays</div>
</div>
<div className="text-center p-4 rounded-lg hover:bg-gray-50 cursor-pointer" onclick="openSettingsPane('security')">
<div className="w-12 h-12 mx-auto mb-2 bg-red-500 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="shield" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-sm font-medium">Security</div>
</div>
<div className="text-center p-4 rounded-lg hover:bg-gray-50 cursor-pointer" onclick="openSettingsPane('users')">
<div className="w-12 h-12 mx-auto mb-2 bg-orange-500 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="user" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-sm font-medium">Users</div>
</div>
</div>

<div className="absolute inset-0 bg-white rounded-lg hidden" id="wifi-settings-pane">
<div className="p-4 border-b bg-gray-50 rounded-t-lg">
<div className="flex items-center">
<button className="mr-3 p-1 hover:bg-gray-200 rounded" onclick="backToSettingsMain()">
<i className="w-4 h-4" data-lucide="chevron-left" style={{strokeWidth: '1.5'}}></i>
</button>
<h3 className="font-medium">Wi-Fi</h3>
</div>
</div>
<div className="p-4 space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Wi-Fi</span>
<div className="toggle-switch active" onclick="toggleSetting(this)">
<div className="toggle-thumb"></div>
</div>
</div>
<div className="space-y-2">
<h4 className="text-sm font-medium text-gray-700">Available Networks</h4>
<div className="space-y-1">
<div className="flex items-center justify-between p-2 bg-blue-50 rounded">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-blue-500" data-lucide="wifi" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium">MyNetwork</span>
<span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Connected</span>
</div>
<button className="text-xs text-blue-500">Details</button>
</div>
<div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-gray-400" data-lucide="wifi" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">GuestNetwork</span>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="lock" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-gray-400" data-lucide="wifi" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">CoffeeShop_WiFi</span>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="lock" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-white rounded-lg hidden" id="bluetooth-settings-pane">
<div className="p-4 border-b bg-gray-50 rounded-t-lg">
<div className="flex items-center">
<button className="mr-3 p-1 hover:bg-gray-200 rounded" onclick="backToSettingsMain()">
<i className="w-4 h-4" data-lucide="chevron-left" style={{strokeWidth: '1.5'}}></i>
</button>
<h3 className="font-medium">Bluetooth</h3>
</div>
</div>
<div className="p-4 space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Bluetooth</span>
<div className="toggle-switch active" onclick="toggleSetting(this)">
<div className="toggle-thumb"></div>
</div>
</div>
<div className="space-y-2">
<h4 className="text-sm font-medium text-gray-700">My Devices</h4>
<div className="space-y-1">
<div className="flex items-center justify-between p-2 bg-blue-50 rounded">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-blue-500" data-lucide="headphones" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium">AirPods Pro</span>
<span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Connected</span>
</div>
<button className="text-xs text-blue-500">Options</button>
</div>
<div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-gray-400" data-lucide="mouse" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">Magic Mouse</span>
<span className="text-xs text-gray-500">Not Connected</span>
</div>
<button className="text-xs text-blue-500">Connect</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-white rounded-lg hidden" id="sound-settings-pane">
<div className="p-4 border-b bg-gray-50 rounded-t-lg">
<div className="flex items-center">
<button className="mr-3 p-1 hover:bg-gray-200 rounded" onclick="backToSettingsMain()">
<i className="w-4 h-4" data-lucide="chevron-left" style={{strokeWidth: '1.5'}}></i>
</button>
<h3 className="font-medium">Sound</h3>
</div>
</div>
<div className="p-4 space-y-4">
<div>
<h4 className="text-sm font-medium text-gray-700 mb-2">Output Volume</h4>
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-gray-400" data-lucide="volume-1" style={{strokeWidth: '1.5'}}></i>
<input className="flex-1" max="100" min="0" type="range" value="75"/>
<i className="w-4 h-4 text-gray-400" data-lucide="volume-2" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-gray-700 mb-2">Input Volume</h4>
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-gray-400" data-lucide="mic" style={{strokeWidth: '1.5'}}></i>
<input className="flex-1" max="100" min="0" type="range" value="60"/>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-sm">Mute when volume is zero</span>
<div className="toggle-switch" onclick="toggleSetting(this)">
<div className="toggle-thumb"></div>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm">Play sound effects</span>
<div className="toggle-switch active" onclick="toggleSetting(this)">
<div className="toggle-thumb"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-white rounded-lg hidden" id="displays-settings-pane">
<div className="p-4 border-b bg-gray-50 rounded-t-lg">
<div className="flex items-center">
<button className="mr-3 p-1 hover:bg-gray-200 rounded" onclick="backToSettingsMain()">
<i className="w-4 h-4" data-lucide="chevron-left" style={{strokeWidth: '1.5'}}></i>
</button>
<h3 className="font-medium">Displays</h3>
</div>
</div>
<div className="p-4 space-y-4">
<div>
<h4 className="text-sm font-medium text-gray-700 mb-2">Brightness</h4>
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-gray-400" data-lucide="sun" style={{strokeWidth: '1.5'}}></i>
<input className="flex-1" max="100" min="0" type="range" value="80"/>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-gray-700 mb-2">Resolution</h4>
<select className="w-full p-2 border rounded text-sm">
<option>1920 × 1080 (Recommended)</option>
<option>2560 × 1440</option>
<option>3840 × 2160</option>
</select>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-sm">Automatically adjust brightness</span>
<div className="toggle-switch active" onclick="toggleSetting(this)">
<div className="toggle-thumb"></div>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm">True Tone</span>
<div className="toggle-switch active" onclick="toggleSetting(this)">
<div className="toggle-thumb"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-white rounded-lg hidden" id="security-settings-pane">
<div className="p-4 border-b bg-gray-50 rounded-t-lg">
<div className="flex items-center">
<button className="mr-3 p-1 hover:bg-gray-200 rounded" onclick="backToSettingsMain()">
<i className="w-4 h-4" data-lucide="chevron-left" style={{strokeWidth: '1.5'}}></i>
</button>
<h3 className="font-medium">Privacy &amp; Security</h3>
</div>
</div>
<div className="p-4 space-y-4">
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-sm">FileVault disk encryption</span>
<span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">On</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm">Firewall</span>
<div className="toggle-switch active" onclick="toggleSetting(this)">
<div className="toggle-thumb"></div>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm">Automatic login</span>
<div className="toggle-switch" onclick="toggleSetting(this)">
<div className="toggle-thumb"></div>
</div>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-gray-700 mb-2">App Permissions</h4>
<div className="space-y-1 text-sm">
<div className="flex justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
<span>Camera</span>
<span className="text-gray-500">3 apps</span>
</div>
<div className="flex justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
<span>Microphone</span>
<span className="text-gray-500">2 apps</span>
</div>
<div className="flex justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
<span>Location Services</span>
<span className="text-gray-500">5 apps</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-white rounded-lg hidden" id="users-settings-pane">
<div className="p-4 border-b bg-gray-50 rounded-t-lg">
<div className="flex items-center">
<button className="mr-3 p-1 hover:bg-gray-200 rounded" onclick="backToSettingsMain()">
<i className="w-4 h-4" data-lucide="chevron-left" style={{strokeWidth: '1.5'}}></i>
</button>
<h3 className="font-medium">Users &amp; Groups</h3>
</div>
</div>
<div className="p-4 space-y-4">
<div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
<div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="user" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="font-medium">John Doe</div>
<div className="text-xs text-gray-500">Administrator</div>
<div className="text-xs text-green-600">Current User</div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="text-sm font-medium">Account Settings</span>
<button className="text-xs text-blue-500 hover:text-blue-600">Edit</button>
</div>
<div className="text-sm space-y-1">
<div className="flex justify-between">
<span className="text-gray-600">Full Name:</span>
<span>John Doe</span>
</div>
<div className="flex justify-between">
<span className="text-gray-600">Account Type:</span>
<span>Administrator</span>
</div>
<div className="flex justify-between">
<span className="text-gray-600">Apple ID:</span>
<span>john@example.com</span>
</div>
</div>
</div>
<button className="w-full py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
                            Add New User
                        </button>
</div>
</div>
</div>

<div className="window absolute top-24 left-20 w-80 h-96 rounded-lg shadow-2xl hidden transition-all duration-300" id="game-window">
<div className="window-header bg-gray-100 rounded-t-lg px-4 py-2 flex items-center justify-between border-b">
<div className="flex space-x-2">
<div className="traffic-light red" onclick="closeWindow('game-window')"></div>
<div className="traffic-light yellow" onclick="minimizeWindow('game-window')"></div>
<div className="traffic-light green" onclick="maximizeWindow('game-window')"></div>
</div>
<div className="text-sm font-medium text-gray-700">Tic Tac Toe</div>
<div className="w-12"></div>
</div>
<div className="p-6 text-center">
<div className="mb-4 text-lg font-medium" id="game-status">Player X's Turn</div>
<div className="grid grid-cols-3 gap-2 mb-4 justify-center">
<button className="tic-tac-toe-cell bg-gray-100 border-2 border-gray-300 rounded-lg text-2xl font-bold hover:bg-gray-200" onclick="makeMove(0)"></button>
<button className="tic-tac-toe-cell bg-gray-100 border-2 border-gray-300 rounded-lg text-2xl font-bold hover:bg-gray-200" onclick="makeMove(1)"></button>
<button className="tic-tac-toe-cell bg-gray-100 border-2 border-gray-300 rounded-lg text-2xl font-bold hover:bg-gray-200" onclick="makeMove(2)"></button>
<button className="tic-tac-toe-cell bg-gray-100 border-2 border-gray-300 rounded-lg text-2xl font-bold hover:bg-gray-200" onclick="makeMove(3)"></button>
<button className="tic-tac-toe-cell bg-gray-100 border-2 border-gray-300 rounded-lg text-2xl font-bold hover:bg-gray-200" onclick="makeMove(4)"></button>
<button className="tic-tac-toe-cell bg-gray-100 border-2 border-gray-300 rounded-lg text-2xl font-bold hover:bg-gray-200" onclick="makeMove(5)"></button>
<button className="tic-tac-toe-cell bg-gray-100 border-2 border-gray-300 rounded-lg text-2xl font-bold hover:bg-gray-200" onclick="makeMove(6)"></button>
<button className="tic-tac-toe-cell bg-gray-100 border-2 border-gray-300 rounded-lg text-2xl font-bold hover:bg-gray-200" onclick="makeMove(7)"></button>
<button className="tic-tac-toe-cell bg-gray-100 border-2 border-gray-300 rounded-lg text-2xl font-bold hover:bg-gray-200" onclick="makeMove(8)"></button>
</div>
<button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm" onclick="resetGame()">New Game</button>
</div>
</div>
</div>
</div>

<div className="dock fixed bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-2xl flex items-center space-x-2">
<div className="app-icon w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center cursor-pointer transition-transform duration-200" onclick="openWindow('notes-window')">
<i className="w-6 h-6 text-white" data-lucide="sticky-note" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="app-icon w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center cursor-pointer transition-transform duration-200" onclick="openWindow('mail-window')">
<i className="w-6 h-6 text-white" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="app-icon w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center cursor-pointer transition-transform duration-200" onclick="openWindow('settings-window')">
<i className="w-6 h-6 text-white" data-lucide="settings" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="app-icon w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center cursor-pointer transition-transform duration-200" onclick="openWindow('game-window')">
<i className="w-6 h-6 text-white" data-lucide="gamepad-2" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="w-px h-8 bg-white bg-opacity-30 mx-2"></div>
<div className="app-icon w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center cursor-pointer transition-transform duration-200">
<i className="w-6 h-6 text-white" data-lucide="folder" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="app-icon w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center cursor-pointer transition-transform duration-200">
<i className="w-6 h-6 text-white" data-lucide="trash-2" style={{strokeWidth: '1.5'}}></i>
</div>
</div>


    </>
  );
}
