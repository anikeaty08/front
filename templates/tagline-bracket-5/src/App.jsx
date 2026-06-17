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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const STAGE_TARGETS = { 1: 3, 2: 2, 3: 1 };

        const app = {
            peer: null,
            conn: null,
            playerId: null,
            roomCode: null,
            state: null,
            activeModalContext: null,
            currentSelection: new Set(),

            init() {
                this.renderCreateForm();
                this.updateIcons();
            },

            updateIcons() {
                if (window.lucide) {
                    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
                }
            },

            generateRoomCode() {
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                let result = '';
                for (let i = 0; i < 6; i++) {
                    result += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return result;
            },

            showView(viewId) {
                ['view-home', 'view-create', 'view-join', 'view-dashboard'].forEach(id => {
                    document.getElementById(id).classList.add('hidden');
                });
                document.getElementById(viewId).classList.remove('hidden');
            },

            // --- VIEW SETUP ---

            renderCreateForm() {
                const container = document.getElementById('create-groups-container');
                container.innerHTML = '';
                for (let i = 1; i <= 5; i++) {
                    container.innerHTML += `
                        <div class="bg-white border border-zinc-200 p-5 rounded-xl shadow-sm">
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-base font-medium text-zinc-900">Group ${i}</span>
                            </div>
                            <input type="text" id="g${i}-name" placeholder="Group Name (Optional)" value="Group ${i}" class="w-full mb-3 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-base font-normal outline-none focus:border-zinc-400 focus:bg-white transition-colors">
                            <textarea id="g${i}-items" required rows="3" class="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-base font-normal outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 resize-none" placeholder="Paste taglines here... (one per line)"></textarea>
                            <p class="text-sm text-zinc-500 mt-1 font-normal">Add at least 4 taglines to ensure the bracket flows properly.</p>
                        </div>
                    `;
                }
            },

            handleCreate(e) {
                e.preventDefault();
                const groups = [];
                for (let i = 1; i <= 5; i++) {
                    const name = document.getElementById(`g${i}-name`).value || `Group ${i}`;
                    const itemsRaw = document.getElementById(`g${i}-items`).value;
                    const items = itemsRaw.split('\n').map(t => t.trim()).filter(t => t.length > 0);
                    
                    if (items.length < 3) {
                        alert(`Group ${i} needs at least 3 taglines to start a bracket.`);
                        return;
                    }

                    groups.push({
                        id: `g${i}`, name: name, initialPool: items, winner: null,
                        stages: {
                            1: { available: items, advanced: null },
                            2: { available: null, advanced: null },
                            3: { available: null, advanced: null }
                        }
                    });
                }

                const btn = document.getElementById('btn-create');
                const origHtml = btn.innerHTML;
                btn.innerHTML = '<div class="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>';
                btn.disabled = true;

                this.roomCode = this.generateRoomCode();
                this.playerId = 'p1';
                
                // Initialize Host Peer
                this.peer = new Peer('tb-' + this.roomCode);

                this.peer.on('open', () => {
                    this.state = {
                        status: 'waiting',
                        groups: groups,
                        final: {
                            stages: { 1: { available: null, advanced: null }, 2: { available: null, advanced: null }, 3: { available: null, advanced: null } },
                            winner: null,
                            tiebreaker: { p1Choice: null, p1Reason: null, p2Choice: null, p2Reason: null }
                        },
                        votes: { p1: {}, p2: {} }
                    };

                    document.getElementById('header-status').classList.remove('hidden');
                    document.getElementById('room-code-display').textContent = this.roomCode;
                    document.getElementById('player-role-display').textContent = 'Player 1 (Host)';

                    this.showView('view-dashboard');
                    this.renderDashboard();
                    
                    btn.innerHTML = origHtml;
                    btn.disabled = false;
                });

                this.peer.on('connection', (connection) => {
                    this.conn = connection;
                    this.conn.on('open', () => {
                        this.state.status = 'active';
                        this.broadcastState();
                    });
                    this.conn.on('data', (data) => {
                        this.handleRemoteAction(data);
                    });
                });

                this.peer.on('error', (err) => {
                    alert('Could not connect to signaling server. Try again.');
                    btn.innerHTML = origHtml;
                    btn.disabled = false;
                });
            },

            handleJoin(e) {
                e.preventDefault();
                const rawCode = document.getElementById('join-code').value || '';
                const code = rawCode.replace(/[^A-Z0-9]/gi, '').toUpperCase();
                
                const btn = document.getElementById('btn-join');
                const origHtml = btn.innerHTML;
                btn.innerHTML = '<div class="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>';
                btn.disabled = true;

                this.roomCode = code;
                this.playerId = 'p2';
                this.peer = new Peer();

                this.peer.on('open', () => {
                    this.conn = this.peer.connect('tb-' + code);
                    
                    this.conn.on('open', () => {
                        // Connected, waiting for state payload
                    });

                    this.conn.on('data', (data) => {
                        if (data.type === 'STATE_UPDATE') {
                            this.state = data.state;
                            document.getElementById('header-status').classList.remove('hidden');
                            document.getElementById('room-code-display').textContent = this.roomCode;
                            document.getElementById('player-role-display').textContent = 'Player 2';
                            
                            this.showView('view-dashboard');
                            this.renderDashboard();
                        }
                    });

                    this.conn.on('error', (err) => {
                        alert('Connection to host lost.');
                        btn.innerHTML = origHtml;
                        btn.disabled = false;
                    });
                });

                this.peer.on('error', (err) => {
                    alert('Invalid Room Code or Host is no longer active.');
                    btn.innerHTML = origHtml;
                    btn.disabled = false;
                });
            },

            // --- NETWORKING UTILS ---

            broadcastState() {
                if (this.playerId === 'p1' && this.conn && this.conn.open) {
                    this.conn.send({ type: 'STATE_UPDATE', state: this.state });
                }
                this.renderDashboard();
            },

            sendAction(actionData) {
                if (this.playerId === 'p2' && this.conn && this.conn.open) {
                    this.conn.send(actionData);
                }
            },

            handleRemoteAction(data) {
                if (this.playerId !== 'p1') return; // Only host processes actions
                
                if (data.type === 'VOTE') {
                    this.state.votes.p2[data.voteKey] = data.selection;
                    this.checkStageCompletion(data.context, data.groupId, data.stageNum, data.voteKey);
                } else if (data.type === 'REASON') {
                    this.state.final.tiebreaker.p2Reason = data.reason;
                    this.broadcastState();
                }
            },

            // --- DASHBOARD RENDERER ---

            renderDashboard() {
                if (!this.state) return;

                const lobbyView = document.getElementById('dashboard-lobby');
                const activeView = document.getElementById('dashboard-active');

                if (this.state.status === 'waiting') {
                    lobbyView.classList.remove('hidden');
                    lobbyView.classList.add('flex');
                    activeView.classList.add('hidden');
                    activeView.classList.remove('grid');
                    document.getElementById('lobby-code').textContent = this.roomCode;
                } else {
                    lobbyView.classList.add('hidden');
                    lobbyView.classList.remove('flex');
                    activeView.classList.remove('hidden');
                    activeView.classList.add('grid');
                    
                    this.renderGroups();
                    this.renderFinal();
                    this.checkGlobalState();
                }
                this.updateIcons();
            },

            getStageStatus(context, groupId, stageNum) {
                const voteKey = context === 'group' ? `${groupId}_${stageNum}` : `final_${stageNum}`;
                const p1Voted = this.state.votes.p1[voteKey] !== undefined;
                const p2Voted = this.state.votes.p2[voteKey] !== undefined;
                const targetObj = context === 'group' ? 
                                    this.state.groups.find(g=>g.id===groupId).stages[stageNum] : 
                                    this.state.final.stages[stageNum];

                if (targetObj.advanced !== null) return 'completed';
                if (targetObj.available === null) return 'locked';
                
                const iVoted = this.playerId === 'p1' ? p1Voted : p2Voted;
                const theyVoted = this.playerId === 'p1' ? p2Voted : p1Voted;

                if (iVoted && !theyVoted) return 'waiting_other';
                if (!iVoted) return 'action_required';
                
                return 'processing';
            },

            renderGroups() {
                const container = document.getElementById('groups-container');
                container.innerHTML = '';

                this.state.groups.forEach((group, index) => {
                    let stagesHtml = '';
                    let actionBtn = '';
                    let currentActiveStage = null;

                    for (let s = 1; s <= 3; s++) {
                        const status = this.getStageStatus('group', group.id, s);
                        let dotColor = 'bg-zinc-200 border-zinc-300';
                        let textColor = 'text-zinc-400';
                        
                        if (status === 'completed') {
                            dotColor = 'bg-zinc-900 border-zinc-900';
                            textColor = 'text-zinc-900';
                        } else if (status === 'action_required' || status === 'waiting_other') {
                            dotColor = 'bg-white border-zinc-900 border-2';
                            textColor = 'text-zinc-900 font-normal';
                            if (!currentActiveStage) currentActiveStage = s;
                        }

                        stagesHtml += `
                            <div class="flex flex-col items-center z-10 relative">
                                <div class="w-6 h-6 rounded-full border flex items-center justify-center text-xs ${dotColor} ${textColor} transition-colors">
                                    ${status === 'completed' ? '<i data-lucide="check" class="text-white w-3 h-3"></i>' : STAGE_TARGETS[s]}
                                </div>
                            </div>
                        `;
                    }

                    if (group.winner) {
                        actionBtn = `<div class="bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-lg text-sm font-normal flex items-center gap-2 mt-3 w-full line-clamp-1 truncate" title="${group.winner}">
                                        <i data-lucide="trophy" class="text-green-600 flex-shrink-0 w-4 h-4"></i> 
                                        <span class="truncate">${group.winner}</span>
                                     </div>`;
                    } else if (currentActiveStage) {
                        const status = this.getStageStatus('group', group.id, currentActiveStage);
                        if (status === 'action_required') {
                            actionBtn = `<button onclick="app.openVoteModal('group', '${group.id}', ${currentActiveStage})" class="w-full mt-3 bg-zinc-900 text-white rounded-lg py-2.5 text-sm font-normal hover:bg-zinc-800 transition-colors">Vote Stage ${currentActiveStage}</button>`;
                        } else if (status === 'waiting_other') {
                            actionBtn = `<div class="w-full mt-3 bg-zinc-100 text-zinc-500 rounded-lg py-2.5 text-sm font-normal flex items-center justify-center gap-2 border border-zinc-200"><div class="w-3 h-3 rounded-full border-2 border-zinc-300 border-t-zinc-500 animate-spin"></div> Waiting...</div>`;
                        }
                    }

                    container.innerHTML += `
                        <div class="bg-white border border-zinc-200 rounded-xl p-4 shadow-sm flex flex-col hover:border-zinc-300 transition-colors">
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-base font-medium text-zinc-900">${group.name}</span>
                                <span class="text-xs uppercase tracking-wider font-normal text-zinc-400 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-100">Grp ${index+1}</span>
                            </div>
                            <div class="relative flex justify-between items-center px-2 mb-1">
                                <div class="absolute left-4 right-4 h-px bg-zinc-200 top-1/2 -translate-y-1/2 z-0"></div>
                                ${stagesHtml}
                            </div>
                            <div class="flex justify-between px-1 text-xs text-zinc-400 font-normal tracking-wide">
                                <span>Sel 3</span><span>Sel 2</span><span>Win</span>
                            </div>
                            ${actionBtn}
                        </div>
                    `;
                });
            },

            renderFinal() {
                const container = document.getElementById('final-container');
                const allGroupsFinished = this.state.groups.every(g => g.winner !== null);
                
                if (!allGroupsFinished) {
                    container.innerHTML = `
                        <div class="flex flex-col items-center text-zinc-400 gap-3">
                            <i data-lucide="lock" class="w-10 h-10 opacity-50"></i>
                            <p class="text-base font-normal">Complete all group stages<br>to unlock finals.</p>
                        </div>
                    `;
                    return;
                }

                if (this.state.final.stages[1].available === null) {
                    if (this.playerId === 'p1') {
                        this.state.final.stages[1].available = this.state.groups.map(g => g.winner);
                        this.broadcastState();
                    }
                    return;
                }

                if (this.state.final.winner) {
                    this.showWinnerModal(false);
                    return;
                }

                if (this.state.final.tiebreaker && this.state.final.tiebreaker.p1Choice) {
                    const iSubmitted = this.playerId === 'p1' ? this.state.final.tiebreaker.p1Reason : this.state.final.tiebreaker.p2Reason;
                    const theySubmitted = this.playerId === 'p1' ? this.state.final.tiebreaker.p2Reason : this.state.final.tiebreaker.p1Reason;
                    
                    if (!iSubmitted) {
                        this.openReasonModal();
                    } else if (!theySubmitted) {
                        container.innerHTML = `<div class="flex flex-col items-center justify-center h-full"><div class="w-8 h-8 rounded-full border-2 border-zinc-200 border-t-zinc-900 animate-spin mb-4"></div><p class="text-base text-zinc-500 font-normal">Waiting for other player's reasoning...</p></div>`;
                    } else {
                        this.showWinnerModal(true);
                    }
                    return;
                }

                let bracketHtml = '<div class="flex flex-col gap-6 relative z-10 w-full max-w-sm mx-auto">';
                let currentActiveStage = null;

                for(let s = 1; s <= 3; s++) {
                    const status = this.getStageStatus('final', null, s);
                    let blockStyle = "opacity-50 grayscale pointer-events-none";
                    let content = `<span class="text-sm font-normal text-zinc-500">Stage ${s} Locked</span>`;

                    if (status === 'completed') {
                        blockStyle = "bg-zinc-50 border-zinc-200";
                        content = `<div class="flex items-center justify-between w-full"><span class="text-sm font-normal text-zinc-500">Stage ${s}</span><i data-lucide="check-circle" class="text-zinc-400 w-4 h-4"></i></div>`;
                    } else if (status === 'action_required') {
                        blockStyle = "bg-white border-zinc-900 shadow-md ring-1 ring-zinc-900";
                        content = `<div class="flex flex-col items-center text-center"><span class="text-base font-medium tracking-tight mb-2">Final Stage ${s}</span><button onclick="app.openVoteModal('final', null, ${s})" class="bg-zinc-900 text-white rounded-lg px-5 py-2.5 text-sm font-normal hover:bg-zinc-800 transition-colors">Select ${STAGE_TARGETS[s]}</button></div>`;
                        if(!currentActiveStage) currentActiveStage = s;
                    } else if (status === 'waiting_other') {
                        blockStyle = "bg-zinc-50 border-zinc-200 shadow-inner";
                        content = `<div class="flex flex-col items-center text-center"><span class="text-base font-medium tracking-tight text-zinc-400 mb-2">Final Stage ${s}</span><div class="text-sm text-zinc-500 flex items-center gap-2"><div class="w-3 h-3 rounded-full border-2 border-zinc-300 border-t-zinc-500 animate-spin"></div>Waiting...</div></div>`;
                        if(!currentActiveStage) currentActiveStage = s;
                    }

                    bracketHtml += `
                        <div class="border rounded-xl p-4 transition-all duration-300 ${blockStyle} relative bg-white">
                            ${content}
                            ${s < 3 ? '<div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-px h-6 bg-zinc-200"></div>' : ''}
                        </div>
                    `;
                }
                bracketHtml += '</div>';
                container.innerHTML = bracketHtml;
            },

            // --- VOTING LOGIC ---

            openVoteModal(context, groupId, stageNum) {
                this.activeModalContext = { context, groupId, stageNum };
                this.currentSelection.clear();
                
                const targetObj = context === 'group' ? 
                                    this.state.groups.find(g=>g.id===groupId).stages[stageNum] : 
                                    this.state.final.stages[stageNum];
                
                const options = targetObj.available;
                const targetCount = STAGE_TARGETS[stageNum];

                document.getElementById('modal-vote-target').textContent = `${targetCount} tagline${targetCount>1?'s':''}`;
                document.getElementById('modal-vote-total').textContent = targetCount;
                this.updateVoteCounter();

                const optionsContainer = document.getElementById('modal-vote-options');
                optionsContainer.innerHTML = '';
                
                options.forEach((opt, idx) => {
                    optionsContainer.innerHTML += `
                        <label class="cursor-pointer border border-zinc-200 rounded-xl p-4 flex gap-3 hover:border-zinc-300 bg-white transition-all duration-200 active:scale-[0.98]" onclick="app.toggleSelection(this, '${opt.replace(/'/g, "\\'")}')">
                            <div class="mt-0.5 flex-shrink-0">
                                <div class="w-6 h-6 rounded border border-zinc-300 flex items-center justify-center checkbox-indicator bg-white transition-colors">
                                    <i data-lucide="check" class="text-white w-4 h-4 opacity-0 transition-opacity"></i>
                                </div>
                            </div>
                            <span class="text-base text-zinc-700 font-normal leading-snug">${opt}</span>
                        </label>
                    `;
                });

                this.showModal('modal-vote');
                this.updateIcons();
            },

            toggleSelection(labelEl, option) {
                const targetCount = STAGE_TARGETS[this.activeModalContext.stageNum];
                const indicator = labelEl.querySelector('.checkbox-indicator');
                const icon = indicator.querySelector('i');

                if (this.currentSelection.has(option)) {
                    this.currentSelection.delete(option);
                    labelEl.classList.remove('border-zinc-900', 'ring-1', 'ring-zinc-900', 'bg-zinc-50');
                    labelEl.classList.add('border-zinc-200', 'bg-white');
                    indicator.classList.remove('bg-zinc-900', 'border-zinc-900');
                    indicator.classList.add('bg-white', 'border-zinc-300');
                    icon.classList.add('opacity-0');
                } else {
                    if (this.currentSelection.size >= targetCount) return;
                    this.currentSelection.add(option);
                    labelEl.classList.add('border-zinc-900', 'ring-1', 'ring-zinc-900', 'bg-zinc-50');
                    labelEl.classList.remove('border-zinc-200', 'bg-white');
                    indicator.classList.add('bg-zinc-900', 'border-zinc-900');
                    indicator.classList.remove('bg-white', 'border-zinc-300');
                    icon.classList.remove('opacity-0');
                }

                this.updateVoteCounter();
            },

            updateVoteCounter() {
                const targetCount = STAGE_TARGETS[this.activeModalContext.stageNum];
                const count = this.currentSelection.size;
                document.getElementById('modal-vote-counter').textContent = count;
                const btn = document.getElementById('modal-vote-submit');
                
                if (count === targetCount) {
                    btn.disabled = false;
                    btn.classList.remove('bg-zinc-300', 'text-zinc-500');
                    btn.classList.add('bg-zinc-900', 'text-white');
                } else {
                    btn.disabled = true;
                    btn.classList.add('bg-zinc-300', 'text-zinc-500');
                    btn.classList.remove('bg-zinc-900', 'text-white');
                }
            },

            submitVote() {
                const { context, groupId, stageNum } = this.activeModalContext;
                const voteKey = context === 'group' ? `${groupId}_${stageNum}` : `final_${stageNum}`;
                const selectionArr = Array.from(this.currentSelection);

                this.state.votes[this.playerId][voteKey] = selectionArr;
                this.closeModal();

                if (this.playerId === 'p1') {
                    this.checkStageCompletion(context, groupId, stageNum, voteKey);
                } else {
                    this.sendAction({ type: 'VOTE', context, groupId, stageNum, voteKey, selection: selectionArr });
                    this.renderDashboard(); 
                }
            },

            checkStageCompletion(context, groupId, stageNum, voteKey) {
                const p1Votes = this.state.votes.p1[voteKey];
                const p2Votes = this.state.votes.p2[voteKey];

                if (p1Votes && p2Votes) {
                    this.processDoubleVotes(context, groupId, stageNum, p1Votes, p2Votes);
                } else {
                    this.broadcastState(); 
                }
            },

            processDoubleVotes(context, groupId, stageNum, p1Votes, p2Votes) {
                const doubleVotes = p1Votes.filter(v => p2Votes.includes(v));
                
                let targetObj = context === 'group' ? 
                                this.state.groups.find(g => g.id === groupId).stages[stageNum] : 
                                this.state.final.stages[stageNum];

                targetObj.advanced = doubleVotes;
                const nextPool = doubleVotes.length > 0 ? doubleVotes : p1Votes; // Fallback to P1 if 0 overlap

                if (stageNum < 3) {
                    if (context === 'group') {
                        this.state.groups.find(g => g.id === groupId).stages[stageNum + 1].available = nextPool;
                    } else {
                        this.state.final.stages[stageNum + 1].available = nextPool;
                    }
                } else {
                    if (context === 'group') {
                        this.state.groups.find(g => g.id === groupId).winner = nextPool[0];
                    } else {
                        if (doubleVotes.length === 1) {
                            this.state.final.winner = doubleVotes[0];
                        } else {
                            this.state.final.tiebreaker.p1Choice = p1Votes[0];
                            this.state.final.tiebreaker.p2Choice = p2Votes[0];
                        }
                    }
                }
                this.broadcastState();
            },

            checkGlobalState() {
                document.getElementById('modal-wait').classList.add('hidden');
                
                if (this.state.final.tiebreaker && this.state.final.tiebreaker.p1Choice && !this.state.final.winner) {
                    const myReason = this.playerId === 'p1' ? this.state.final.tiebreaker.p1Reason : this.state.final.tiebreaker.p2Reason;
                    if (!myReason) {
                        this.openReasonModal();
                    }
                }
            },

            openReasonModal() {
                const myChoice = this.playerId === 'p1' ? this.state.final.tiebreaker.p1Choice : this.state.final.tiebreaker.p2Choice;
                document.getElementById('modal-reason-tagline').textContent = `"${myChoice}"`;
                document.getElementById('modal-reason-input').value = '';
                this.showModal('modal-reason');
            },

            submitReason() {
                const text = document.getElementById('modal-reason-input').value.trim();
                if (!text) { alert('Please provide a short reason.'); return; }

                if (this.playerId === 'p1') {
                    this.state.final.tiebreaker.p1Reason = text;
                    this.broadcastState();
                } else {
                    this.state.final.tiebreaker.p2Reason = text;
                    this.sendAction({ type: 'REASON', reason: text });
                    this.renderDashboard();
                }
                this.closeModal();
            },

            showWinnerModal(isTiebreaker) {
                const content = document.getElementById('winner-content');
                
                if (isTiebreaker) {
                    const t = this.state.final.tiebreaker;
                    document.getElementById('winner-title').textContent = "It's a Split Decision!";
                    document.getElementById('winner-subtitle').textContent = "Both final taglines were selected. Here are the arguments.";
                    
                    content.innerHTML = `
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                            <div class="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm relative">
                                <div class="absolute -top-3 -left-3 w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-medium">P1</div>
                                <h4 class="text-lg font-medium tracking-tight text-zinc-900 mb-3 pb-3 border-b border-zinc-100">"${t.p1Choice}"</h4>
                                <p class="text-base text-zinc-600 italic font-normal">"${t.p1Reason}"</p>
                            </div>
                            <div class="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm relative">
                                <div class="absolute -top-3 -left-3 w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-medium">P2</div>
                                <h4 class="text-lg font-medium tracking-tight text-zinc-900 mb-3 pb-3 border-b border-zinc-100">"${t.p2Choice}"</h4>
                                <p class="text-base text-zinc-600 italic font-normal">"${t.p2Reason}"</p>
                            </div>
                        </div>
                    `;
                } else {
                    document.getElementById('winner-title').textContent = "We have a Winner!";
                    document.getElementById('winner-subtitle').textContent = "Both players agreed on the ultimate tagline.";
                    
                    content.innerHTML = `
                        <div class="bg-white px-8 py-10 rounded-2xl border border-zinc-200 shadow-sm max-w-lg w-full text-center">
                            <h2 class="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 leading-snug">"${this.state.final.winner}"</h2>
                        </div>
                    `;
                }

                this.showModal('modal-winner');
                this.updateIcons();
            },

            showModal(modalId) {
                const overlay = document.getElementById('modal-overlay');
                overlay.classList.remove('hidden');
                
                overlay.querySelectorAll('div[id^="modal-"]').forEach(el => {
                    if (el.id !== 'modal-overlay') el.classList.add('hidden');
                });
                
                document.getElementById(modalId).classList.remove('hidden');
                document.getElementById(modalId).classList.add('flex');
            },

            closeModal() {
                document.getElementById('modal-overlay').classList.add('hidden');
                this.activeModalContext = null;
            },

            resetApp() {
                if (this.conn) this.conn.close();
                if (this.peer) this.peer.destroy();
                
                this.closeModal();
                this.playerId = null;
                this.roomCode = null;
                this.state = null;
                
                document.getElementById('header-status').classList.add('hidden');
                this.showView('view-home');
                
                const btnCreate = document.getElementById('btn-create');
                btnCreate.innerHTML = 'Generate Room Code';
                btnCreate.disabled = false;
                
                const btnJoin = document.getElementById('btn-join');
                btnJoin.innerHTML = 'Join as Player 2';
                btnJoin.disabled = false;
            }
        };

        document.addEventListener('DOMContentLoaded', () => app.init());

    
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
      

<header className="w-full max-w-6xl flex items-center justify-between mb-8 pb-4 border-b border-zinc-200">
<div className="flex items-center gap-2 text-zinc-900">
<div className="text-lg font-medium bg-zinc-900 text-white w-8 h-8 flex items-center justify-center rounded-md">TB</div>
<span className="text-lg font-normal tracking-tight">Tagline Bracket</span>
</div>
<div className="flex items-center gap-4 text-base font-normal hidden" id="header-status">
<div className="flex items-center gap-1.5 text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
<i className="w-4 h-4" data-lucide="hash"></i>
<span className="tracking-tight" id="room-code-display"></span>
</div>
<div className="flex items-center gap-1.5">
<i className="text-zinc-400 w-4 h-4" data-lucide="user"></i>
<span id="player-role-display"></span>
</div>
</div>
</header>
<main className="w-full max-w-6xl flex-1 relative">

<section className="flex flex-col items-center justify-center pt-20 w-full" id="view-home">
<h1 className="text-3xl md:text-5xl font-medium tracking-tight text-center mb-4">Select the perfect tagline,<br/>together.</h1>
<p className="text-lg text-zinc-500 mb-12 text-center max-w-lg font-normal">A blind voting bracket system for two players. Add your taglines, vote independently, and let the best ones advance from anywhere.</p>
<div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
<button className="flex-1 bg-zinc-900 text-white hover:bg-zinc-800 rounded-lg px-4 py-3 text-base font-normal transition-colors flex items-center justify-center gap-2" onclick="app.showView('view-create')">
<i className="w-5 h-5" data-lucide="plus-square"></i>
                    Create Game
                </button>
<button className="flex-1 bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 shadow-sm rounded-lg px-4 py-3 text-base font-normal transition-colors flex items-center justify-center gap-2" onclick="app.showView('view-join')">
<i className="w-5 h-5" data-lucide="log-in"></i>
                    Join Game
                </button>
</div>
</section>

<section className="hidden max-w-3xl mx-auto w-full" id="view-create">
<div className="mb-8">
<button className="text-base text-zinc-500 hover:text-zinc-900 flex items-center gap-1.5 mb-4 transition-colors font-normal" onclick="app.showView('view-home')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back
                </button>
<h2 className="text-2xl font-medium tracking-tight mb-2">Create New Bracket</h2>
<p className="text-base text-zinc-500 font-normal">Configure 5 groups of taglines. Put one tagline per line.</p>
</div>
<form className="space-y-6" id="create-form" onsubmit="app.handleCreate(event)">
<div className="space-y-4" id="create-groups-container"></div>
<div className="pt-6 border-t border-zinc-200 flex justify-end">
<button className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-lg px-6 py-3 text-base font-normal transition-colors flex items-center gap-2" id="btn-create" type="submit">
                        Generate Room Code
                    </button>
</div>
</form>
</section>

<section className="hidden max-w-md mx-auto pt-20 w-full" id="view-join">
<button className="text-base text-zinc-500 hover:text-zinc-900 flex items-center gap-1.5 mb-8 transition-colors font-normal" onclick="app.showView('view-home')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back
            </button>
<div className="bg-white border border-zinc-200 p-6 rounded-xl shadow-sm">
<h2 className="text-xl font-medium mb-2">Join Game</h2>
<p className="text-base text-zinc-500 mb-6 font-normal">Enter the 6-character room code provided by the host.</p>
<form className="space-y-4" onsubmit="app.handleJoin(event)">
<div>
<input className="w-full uppercase rounded-lg border border-zinc-200 bg-white px-4 py-3 text-base font-normal outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 text-center tracking-widest placeholder:normal-case placeholder:tracking-normal" id="join-code" placeholder="e.g. A1B2C3" required="" type="text"/>
</div>
<button className="w-full bg-zinc-900 text-white hover:bg-zinc-800 rounded-lg px-4 py-3 text-base font-normal transition-colors flex items-center justify-center gap-2" id="btn-join" type="submit">
                        Join as Player 2
                    </button>
</form>
</div>
</section>

<section className="hidden h-full w-full" id="view-dashboard">

<div className="hidden flex-col items-center justify-center pt-32 text-center" id="dashboard-lobby">
<div className="w-12 h-12 rounded-full border-2 border-zinc-200 border-t-zinc-900 animate-spin mb-6"></div>
<h2 className="text-2xl font-medium tracking-tight mb-2">Waiting for Player 2...</h2>
<p className="text-base text-zinc-500 mb-6 font-normal">Share this room code with the other player (they can join from any device):</p>
<div className="bg-zinc-100 text-zinc-900 px-6 py-3 rounded-lg text-2xl font-medium tracking-widest border border-zinc-200 shadow-sm" id="lobby-code"></div>
</div>

<div className="hidden grid-cols-1 lg:grid-cols-12 gap-8 relative" id="dashboard-active">

<div className="lg:col-span-7 flex flex-col gap-4 relative z-10">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium">Group Stages</h3>
<span className="text-sm font-normal text-zinc-500 px-2 py-1 bg-zinc-100 rounded-md">Requires 2 Players</span>
</div>
<div className="space-y-3" id="groups-container">

</div>
</div>

<div className="hidden lg:flex lg:col-span-1 items-center justify-center relative">
<div className="w-px h-full bg-zinc-200 absolute left-1/2 -translate-x-1/2"></div>
</div>

<div className="lg:col-span-4 flex flex-col relative z-10">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-medium">Final Bracket</h3>
<i className="text-zinc-400 w-5 h-5" data-lucide="trophy"></i>
</div>
<div className="flex-1 bg-white border border-zinc-200 rounded-xl shadow-sm p-5 flex flex-col justify-center relative overflow-hidden text-center min-h-[400px]" id="final-container">

</div>
</div>
</div>
</section>
</main>

<div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4" id="modal-overlay">

<div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl hidden flex-col overflow-hidden max-h-[90vh]" id="modal-vote">
<div className="p-5 border-b border-zinc-200 flex justify-between items-center bg-zinc-50/50">
<div>
<h3 className="text-lg font-medium" id="modal-vote-title">Select Taglines</h3>
<p className="text-base text-zinc-500 font-normal" id="modal-vote-desc">Pick exactly <span className="font-normal text-zinc-900" id="modal-vote-target"></span> from the list below.</p>
</div>
<div className="bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-lg text-base font-normal flex items-center gap-2">
<span id="modal-vote-counter">0</span> / <span id="modal-vote-total"></span> Selected
                </div>
</div>
<div className="p-5 overflow-y-auto flex-1">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="modal-vote-options">

</div>
</div>
<div className="p-5 border-t border-zinc-200 bg-zinc-50/50 flex justify-end gap-3">
<button className="px-4 py-2 text-base font-normal text-zinc-600 hover:text-zinc-900 transition-colors" onclick="app.closeModal()">Cancel</button>
<button className="bg-zinc-900 text-white disabled:bg-zinc-300 disabled:text-zinc-500 rounded-lg px-6 py-2 text-base font-normal transition-colors" disabled="" id="modal-vote-submit" onclick="app.submitVote()">Submit Selection</button>
</div>
</div>

<div className="bg-white w-full max-w-sm rounded-2xl shadow-xl hidden flex-col items-center justify-center p-8 text-center" id="modal-wait">
<div className="w-10 h-10 rounded-full border-2 border-zinc-200 border-t-zinc-900 animate-spin mb-4"></div>
<h3 className="text-lg font-medium mb-1">Votes Submitted</h3>
<p className="text-base text-zinc-500 font-normal">Waiting for the other player to finish their selection...</p>
</div>

<div className="bg-white w-full max-w-lg rounded-2xl shadow-xl hidden flex-col overflow-hidden" id="modal-result">
<div className="p-6 text-center border-b border-zinc-200 bg-zinc-50/50">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-3">
<i className="w-6 h-6" data-lucide="check-circle"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-1">Stage Complete!</h3>
<p className="text-base text-zinc-500 font-normal">These taglines received double votes and advanced.</p>
</div>
<div className="p-6 overflow-y-auto max-h-[40vh]">
<ul className="space-y-2" id="modal-result-list">

</ul>
</div>
<div className="p-5 border-t border-zinc-200 flex justify-center">
<button className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-lg px-8 py-2.5 text-base font-normal transition-colors w-full sm:w-auto" onclick="app.closeModal()">Continue to Bracket</button>
</div>
</div>

<div className="bg-white w-full max-w-lg rounded-2xl shadow-xl hidden flex-col overflow-hidden" id="modal-reason">
<div className="p-6 border-b border-zinc-200 bg-zinc-50/50">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600 mb-3">
<i className="w-5 h-5" data-lucide="info"></i>
</div>
<h3 className="text-lg font-medium">Both taglines were selected!</h3>
<p className="text-base text-zinc-500 mt-1 font-normal">You and the other player picked different final taglines. Please provide a brief reason why you chose yours to help decide the overall winner.</p>
</div>
<div className="p-6 space-y-4">
<div className="p-4 bg-zinc-100 rounded-lg border border-zinc-200">
<span className="text-sm font-normal text-zinc-500 uppercase tracking-wider mb-1 block">Your Selection</span>
<p className="text-lg font-normal text-zinc-900" id="modal-reason-tagline"></p>
</div>
<div>
<label className="block text-base font-normal text-zinc-900 mb-1">Why is this the best tagline?</label>
<textarea className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-base font-normal outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 resize-none" id="modal-reason-input" placeholder="It perfectly captures the value proposition..." rows="3"></textarea>
</div>
</div>
<div className="p-5 border-t border-zinc-200 flex justify-end">
<button className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-lg px-6 py-2 text-base font-normal transition-colors" onclick="app.submitReason()">Submit Reason</button>
</div>
</div>

<div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl hidden flex-col overflow-hidden" id="modal-winner">
<div className="p-8 text-center border-b border-zinc-200 bg-zinc-900 text-white relative overflow-hidden">
<div className="absolute -top-10 -left-10 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
<div className="flex justify-center mb-4 relative z-10">
<i className="text-yellow-400 w-12 h-12" data-lucide="crown"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-2 relative z-10" id="winner-title">We have a Winner!</h3>
<p className="text-base text-zinc-400 font-normal relative z-10" id="winner-subtitle">The final decision has been made.</p>
</div>
<div className="p-8 bg-zinc-50 flex flex-col items-center justify-center" id="winner-content">

</div>
<div className="p-5 border-t border-zinc-200 bg-white flex justify-center">
<button className="bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 rounded-lg px-6 py-2.5 text-base font-normal transition-colors" onclick="app.resetApp()">Start New Bracket</button>
</div>
</div>
</div>


    </>
  );
}
