import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- CORE STATE ---
        const generateUsername = () => 'lemon' + Math.floor(Math.random() * 10000);
        const myUsername = generateUsername();
        
        let round = 1;
        let totalScore = 0;
        let timeLeft = 120;
        let timerInterval;
        let maxRounds = 5;
        let currentActualCoords = null;

        let isMultiplayer = false;
        let isHost = false;
        let peer = null;
        let hostConnection = null;
        let clientConnections = [];
        let partyPlayers = [{ username: myUsername }];
        let currentRoundGuesses = [];
        let hasGuessedThisRound = false;
        let bannedUsers = new Set();

        let activeLobbies = new Map(); // code → {host, players: []}

        // UI Elements
        const lobbyScreen = document.getElementById('lobby-screen');
        const mapContainer = document.getElementById('map-container');
        const mapAreaElement = document.getElementById('map-area');
        const actionArea = document.getElementById('action-area');
        const guessBtn = document.getElementById('guess-btn');
        const resultsModal = document.getElementById('results-modal');
        const modalContent = document.getElementById('modal-content');
        const nextRoundBtn = document.getElementById('next-round-btn');
        const timeDisplay = document.getElementById('time-display');
        const scoreDisplay = document.getElementById('score-display');
        const roundDisplay = document.getElementById('round-display');
        const progressBar = document.getElementById('progress-bar');
        const partyList = document.getElementById('party-list');
        const multiplayerResults = document.getElementById('multiplayer-results');
        const waitingHostMsg = document.getElementById('waiting-host-msg');
        const activeLobbiesList = document.getElementById('active-lobbies-list');

        document.getElementById('lobby-username').textContent = myUsername;
        document.getElementById('header-username').textContent = myUsername;

        // --- LOCATIONS ---
        const locationPool = [ /* your full list from previous version */ 
            { lat: 40.7580, lng: -73.9855 }, { lat: 48.8584, lng: 2.2945 },
            { lat: 51.5007, lng: -0.1246 }, { lat: 41.8902, lng: 12.4922 },
            { lat: -33.8568, lng: 151.2153 }, { lat: -22.9519, lng: -43.2105 },
            { lat: 37.8199, lng: -122.4783 }, { lat: 35.6586, lng: 139.7454 },
            { lat: 34.0522, lng: -118.2437 }, { lat: 41.8781, lng: -87.6298 },
            { lat: 52.5200, lng: 13.4050 }, { lat: 55.7558, lng: 37.6173 },
            { lat: 40.4168, lng: -3.7038 }, { lat: 35.6762, lng: 139.6503 },
            { lat: 31.2304, lng: 121.4737 }, { lat: 22.3193, lng: 114.1694 },
            { lat: 13.7563, lng: 100.5018 }, { lat: 1.3521, lng: 103.8198 },
            { lat: 28.6139, lng: 77.2090 }, { lat: 39.9042, lng: 116.4074 },
            { lat: 37.5665, lng: 126.9780 }, { lat: -33.8568, lng: 151.2153 },
            { lat: -37.8136, lng: 144.9631 }, { lat: 36.2048, lng: 138.2529 },
            { lat: -22.9519, lng: -43.2105 }, { lat: -34.6037, lng: -58.3816 },
            { lat: 19.4326, lng: -99.1332 }, { lat: 30.0444, lng: 31.2357 },
            { lat: -26.2041, lng: 28.0473 }, { lat: -33.9249, lng: 18.4241 },
            { lat: 64.1466, lng: -21.9426 }, { lat: 43.2965, lng: 5.3698 },
            { lat: 47.3769, lng: 8.5417 }, { lat: 60.1699, lng: 24.9384 },
            { lat: 59.9139, lng: 10.7522 }, { lat: 55.6761, lng: 12.5683 },
            { lat: 52.3702, lng: 4.8952 }, { lat: 51.2194, lng: 4.4025 },
            { lat: 50.8503, lng: 4.3517 }, { lat: 48.8566, lng: 2.3522 },
            { lat: 45.7640, lng: 4.8357 }, { lat: 41.9028, lng: 12.4964 },
            { lat: 39.4699, lng: -0.3763 }, { lat: 37.3891, lng: -5.9845 },
            { lat: 36.7213, lng: -4.4214 }, { lat: 35.6895, lng: 139.6917 }
        ];

        let recentlyUsed = [];

        function getRandomLocation() {
            let available = locationPool.filter(loc => 
                !recentlyUsed.some(r => Math.hypot(r.lat - loc.lat, r.lng - loc.lng) < 0.8)
            );
            if (available.length < 15) {
                recentlyUsed = [];
                available = locationPool;
            }
            const chosen = available[Math.floor(Math.random() * available.length)];
            recentlyUsed.push(chosen);
            if (recentlyUsed.length > 8) recentlyUsed.shift();
            return chosen;
        }

        // --- MAP ---
        const guessMap = L.map('map-area', { zoomControl: false, attributionControl: false, worldCopyJump: true }).setView([20, 0], 2);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(guessMap);

        let userMarker = null;
        const markersLayer = L.layerGroup().addTo(guessMap);

        let streetViewPanorama;
        function loadStreetView(lat, lng) {
            currentActualCoords = { lat, lng };
            if (!streetViewPanorama) {
                streetViewPanorama = new google.maps.StreetViewPanorama(document.getElementById("panorama"), {
                    position: { lat, lng }, pov: { heading: 0, pitch: 0 }, zoom: 1,
                    addressControl: false, showRoadLabels: false, zoomControl: false,
                    fullscreenControl: false, panControl: false, enableCloseButton: false, linksControl: true
                });
            } else {
                streetViewPanorama.setPosition({ lat, lng });
            }
        }

        document.getElementById('pano-zoom-in').addEventListener('click', () => {
            if (streetViewPanorama) streetViewPanorama.setZoom((streetViewPanorama.getZoom() || 1) + 1);
        });
        document.getElementById('pano-zoom-out').addEventListener('click', () => {
            if (streetViewPanorama) streetViewPanorama.setZoom(Math.max(1, (streetViewPanorama.getZoom() || 1) - 1));
        });

        // --- LOBBY SETTINGS ---
        function showLobbySettings() { document.getElementById('lobby-settings-panel').classList.remove('hidden'); }
        function closeLobbySettings() { document.getElementById('lobby-settings-panel').classList.add('hidden'); }
        function setDifficulty(level) { document.querySelectorAll('.diff-btn').forEach((b,i) => b.classList.toggle('active', i===level)); }
        function setRounds(num) { maxRounds = num; document.querySelectorAll('.round-btn').forEach(b => b.classList.toggle('active', parseInt(b.textContent) === num)); }

        // --- ACTIVE LOBBIES ---
        function refreshActiveLobbies() {
            const list = document.getElementById('active-lobbies-list');
            list.innerHTML = '';
            if (activeLobbies.size === 0) {
                list.innerHTML = `<div class="text-neutral-500 text-center py-8 text-xs">No active lobbies yet.<br>Create one!</div>`;
                return;
            }
            activeLobbies.forEach((info, code) => {
                if (info.host === myUsername) return; // Prevent joining own lobby
                const div = document.createElement('div');
                div.className = "bg-neutral-800 rounded-xl p-4 flex justify-between items-center";
                div.innerHTML = `
                    <div>
                        <div class="font-medium text-sm">Host: ${info.host}</div>
                        <div class="text-xs text-neutral-400">${info.players.length} players</div>
                    </div>
                    <button onclick="promptJoinLobby('${code}')" class="px-5 py-2 text-xs bg-neutral-700 hover:bg-neutral-600 rounded-xl">Join</button>
                `;
                list.appendChild(div);
            });
        }

        function promptJoinLobby(code) {
            const entered = prompt(`Enter lobby password for ${code}:`, "");
            if (entered && entered.toUpperCase() === code) {
                document.getElementById('lobby-code-input').value = code;
                document.getElementById('btn-join-lobby').click();
            } else if (entered) {
                alert("Incorrect password!");
            }
        }

        // --- MULTIPLAYER ---
        document.getElementById('btn-create-lobby').addEventListener('click', () => {
            let code = Math.random().toString(36).substring(2, 7).toUpperCase();
            while (activeLobbies.has(code)) code = Math.random().toString(36).substring(2, 7).toUpperCase();

            isMultiplayer = true;
            isHost = true;
            
            const btn = document.getElementById('btn-create-lobby');
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon> Creating...';
            
            peer = new Peer('lemon-' + code);
            peer.on('open', () => {
                activeLobbies.set(code, { host: myUsername, players: [myUsername] });
                refreshActiveLobbies();

                document.getElementById('lobby-code-input').value = code;
                document.getElementById('header-lobby-code').textContent = `Lobby: ${code}`;
                document.getElementById('header-lobby-code').classList.remove('hidden');
                btn.innerHTML = 'Start Game';
                btn.classList.add('bg-white', 'hover:bg-neutral-200');
                btn.onclick = () => hostStartRound();
                updateLobbyPlayersUI();
            });

            peer.on('connection', (conn) => {
                if (bannedUsers.has(conn.peer)) { conn.send({ type: 'banned' }); return; }
                clientConnections.push(conn);
                conn.on('data', (data) => handleHostData(conn, data));
            });
        });

        document.getElementById('btn-join-lobby').addEventListener('click', () => {
            const code = document.getElementById('lobby-code-input').value.trim().toUpperCase();
            if (!code || !activeLobbies.has(code)) {
                alert("Invalid or expired lobby code.");
                return;
            }
            if (activeLobbies.get(code).host === myUsername) {
                alert("You cannot join your own lobby using the code.");
                return;
            }
            
            const btn = document.getElementById('btn-join-lobby');
            btn.innerHTML = 'Connecting...';
            
            peer = new Peer();
            peer.on('open', () => {
                hostConnection = peer.connect('lemon-' + code);
                hostConnection.on('open', () => {
                    isMultiplayer = true;
                    document.getElementById('header-lobby-code').textContent = `Lobby: ${code}`;
                    document.getElementById('header-lobby-code').classList.remove('hidden');
                    btn.innerHTML = 'Joined!';
                    hostConnection.send({ type: 'join', username: myUsername });
                });
                hostConnection.on('data', handleClientData);
            });
        });

        function handleHostData(conn, data) {
            if (data.type === 'join') {
                if (bannedUsers.has(conn.peer)) return;
                partyPlayers.push({ username: data.username, id: conn.peer });
                const lobby = activeLobbies.get(data.code || '');
                if (lobby) lobby.players.push(data.username);
                refreshActiveLobbies();
                updateLobbyPlayersUI();
                broadcast({ type: 'lobby_update', players: partyPlayers.map(p => p.username) });
            }
            if (data.type === 'guess') {
                currentRoundGuesses.push(data.guessData);
                if (currentRoundGuesses.length === partyPlayers.length) processRoundResults();
            }
        }

        function handleClientData(data) {
            if (data.type === 'lobby_update') {
                partyPlayers = data.players.map(username => ({ username }));
                updateLobbyPlayersUI();
            }
            if (data.type === 'start_round') startRound(data.round, data.coords);
            if (data.type === 'results') showResultsModal(data.allGuesses, data.actualCoords);
            if (data.type === 'kicked') { alert("You were kicked from the lobby."); location.reload(); }
            if (data.type === 'banned') { alert("You are banned from this lobby."); location.reload(); }
        }

        function broadcast(data) {
            clientConnections.forEach(conn => conn.send(data));
        }

        function hostStartRound() {
            const coords = getRandomLocation();
            broadcast({ type: 'start_round', round: round, coords });
            startRound(round, coords);
        }

        document.getElementById('btn-solo').addEventListener('click', () => {
            isMultiplayer = false;
            startRound(1, getRandomLocation());
        });

        function formatTime(seconds) {
            const m = Math.floor(seconds / 60).toString().padStart(2, '0');
            const s = (seconds % 60).toString().padStart(2, '0');
            return `${m}:${s}`;
        }

        function startRound(roundNum, coords) {
            round = roundNum;
            roundDisplay.textContent = `${round}/${maxRounds}`;   // Fixed round counter
            progressBar.style.width = `${(round / maxRounds) * 100}%`;
            currentRoundGuesses = [];
            hasGuessedThisRound = false;
            
            lobbyScreen.classList.add('opacity-0');
            setTimeout(() => lobbyScreen.classList.add('hidden'), 500);

            document.getElementById('panorama').classList.add('opacity-0');
            setTimeout(() => {
                loadStreetView(coords.lat, coords.lng);
                document.getElementById('panorama').classList.remove('opacity-0');
            }, 500);

            markersLayer.clearLayers();
            if (userMarker) { guessMap.removeLayer(userMarker); userMarker = null; }
            guessMap.setView([20, 0], 2);
            toggleMapFullscreen(false);
            
            guessBtn.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
            guessBtn.innerHTML = `<span>Lock in Guess</span> <iconify-icon icon="solar:arrow-right-linear" class="text-lg opacity-70 transition-all"></iconify-icon>`;

            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            setTimeout(() => { resultsModal.classList.add('hidden'); resultsModal.classList.remove('flex'); }, 150);

            if (isMultiplayer && !isHost) {
                nextRoundBtn.classList.add('hidden');
                waitingHostMsg.classList.remove('hidden');
            } else {
                nextRoundBtn.classList.remove('hidden');
                waitingHostMsg.classList.add('hidden');
                nextRoundBtn.textContent = round === maxRounds ? "Finish Game" : "Next Round";
            }

            clearInterval(timerInterval);
            timeLeft = 120;
            timeDisplay.textContent = formatTime(timeLeft);
            timerInterval = setInterval(() => {
                timeLeft--;
                timeDisplay.textContent = formatTime(timeLeft);
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    if (!hasGuessedThisRound) submitGuess(true);
                }
            }, 1000);
        }

        guessMap.on('click', function(e) {
            if (hasGuessedThisRound) return;
            if (userMarker) userMarker.setLatLng(e.latlng);
            else {
                const icon = L.divIcon({ className: '', html: `<div class="player-marker">${myUsername}</div>`, iconSize: [40, 20], iconAnchor: [20, 10] });
                userMarker = L.marker(e.latlng, { icon }).addTo(guessMap);
            }
            guessBtn.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
        });

        guessBtn.addEventListener('click', () => submitGuess(false));

        function submitGuess(isTimeout) {
            if (hasGuessedThisRound) return;
            hasGuessedThisRound = true;
            clearInterval(timerInterval);
            
            guessBtn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" class="text-lg"></iconify-icon> Waiting for others...`;
            guessBtn.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');

            const actualLatLng = L.latLng(currentActualCoords.lat, currentActualCoords.lng);
            let userLatLng = userMarker ? userMarker.getLatLng() : L.latLng(0,0);
            let distMeters = userMarker ? actualLatLng.distanceTo(userLatLng) : 20000000;
            let score = isTimeout ? 0 : Math.max(0, Math.floor(5000 * Math.exp(-distMeters / 2000000)));
            
            totalScore += score;
            scoreDisplay.textContent = totalScore.toLocaleString();

            const myGuessData = { username: myUsername, lat: userLatLng.lat, lng: userLatLng.lng, distance: distMeters, score: score, timeout: isTimeout };

            if (isMultiplayer) {
                if (isHost) {
                    currentRoundGuesses.push(myGuessData);
                    if (currentRoundGuesses.length === partyPlayers.length) processRoundResults();
                } else {
                    hostConnection.send({ type: 'guess', guessData: myGuessData });
                }
            } else {
                showResultsModal([myGuessData], currentActualCoords);
            }
        }

        function processRoundResults() {
            currentRoundGuesses.sort((a, b) => b.score - a.score);
            broadcast({ type: 'results', allGuesses: currentRoundGuesses, actualCoords: currentActualCoords });
            showResultsModal(currentRoundGuesses, currentActualCoords);
        }

        function showResultsModal(allGuesses, actualCoordsRaw) {
            toggleMapFullscreen(true);
            const actualLatLng = L.latLng(actualCoordsRaw.lat, actualCoordsRaw.lng);
            
            const actualIcon = L.divIcon({ className: '', html: `<div class="player-marker actual-marker">📍 Actual</div>`, iconSize: [100, 20], iconAnchor: [50, 10] });
            L.marker(actualLatLng, { icon: actualIcon }).addTo(markersLayer);

            const allBounds = [actualLatLng];
            partyList.innerHTML = '';

            let myData = allGuesses.find(g => g.username === myUsername);
            
            if (isMultiplayer) {
                multiplayerResults.classList.remove('hidden');
                multiplayerResults.classList.add('flex');
                
                allGuesses.forEach(g => {
                    const gLatLng = L.latLng(g.lat, g.lng);
                    if (!g.timeout) {
                        const isMe = g.username === myUsername;
                        const iconHtml = `<div class="player-marker ${isMe ? '' : 'other-player-marker'}">${g.username}</div>`;
                        const pIcon = L.divIcon({ className: '', html: iconHtml, iconSize: [40, 20], iconAnchor: [20, 10] });
                        L.marker(gLatLng, { icon: pIcon }).addTo(markersLayer);
                        L.polyline([gLatLng, actualLatLng], { color: isMe ? '#facc15' : '#3b82f6', weight: 2, dashArray: '5, 5', opacity: 0.8 }).addTo(markersLayer);
                        allBounds.push(gLatLng);
                    }

                    partyList.innerHTML += `
                        <div class="flex items-center justify-between ${g.username === myUsername ? 'bg-yellow-400/10 border-yellow-400/20' : 'bg-neutral-800/50 border-neutral-700/50'} rounded-lg px-3 py-2 border">
                            <span class="text-sm font-medium ${g.username === myUsername ? 'text-yellow-400' : 'text-blue-400'}">${g.username} ${g.timeout ? '(Time Up)' : ''}</span>
                            <div class="text-right flex flex-col">
                                <span class="text-xs text-neutral-300 font-medium">+${g.score}</span>
                                <span class="text-[10px] text-neutral-500">${g.timeout ? '--' : (g.distance / 1000).toLocaleString(undefined, {maximumFractionDigits:0}) + ' km'}</span>
                            </div>
                        </div>
                    `;
                });
            } else if (!myData.timeout) {
                const myLatLng = L.latLng(myData.lat, myData.lng);
                allBounds.push(myLatLng);
                L.polyline([myLatLng, actualLatLng], { color: '#facc15', weight: 2, dashArray: '5, 5' }).addTo(markersLayer);
            }

            setTimeout(() => guessMap.fitBounds(L.latLngBounds(allBounds), { paddingBottomRight: [50, 50], paddingTopLeft: [400, 50], maxZoom: 6 }), 800);

            document.getElementById('modal-title').textContent = myData.timeout ? "Time's Up!" : "Round Complete";
            document.getElementById('modal-distance').textContent = myData.timeout ? '--' : `${(myData.distance / 1000).toLocaleString(undefined, {maximumFractionDigits:0})} km`;
            document.getElementById('modal-score').textContent = `+${myData.score.toLocaleString()}`;
            
            setTimeout(() => {
                resultsModal.classList.remove('hidden');
                resultsModal.classList.add('flex');
                setTimeout(() => {
                    modalContent.classList.remove('scale-95', 'opacity-0');
                    modalContent.classList.add('scale-100', 'opacity-100');
                }, 10);
            }, 1000);
        }

        nextRoundBtn.addEventListener('click', () => {
            if (round >= maxRounds) {
                window.location.reload();
            } else {
                if (isMultiplayer && isHost) hostStartRound();
                else if (!isMultiplayer) startRound(round + 1, getRandomLocation());
            }
        });

        function toggleMapFullscreen(expand) {
            if (expand) {
                mapContainer.classList.remove('w-[calc(100%-2rem)]', 'md:w-[420px]', 'right-4', 'bottom-4', 'md:right-8', 'md:bottom-8', 'rounded-[24px]');
                mapContainer.classList.add('inset-0', 'z-[100]', 'w-full', 'h-full', 'rounded-none');
                mapAreaElement.classList.remove('h-64', 'md:h-72');
                mapAreaElement.classList.add('h-full', 'w-full');
                actionArea.classList.add('hidden', 'opacity-0');
                document.getElementById('map-toolbar').classList.add('hidden');
            } else {
                mapContainer.classList.add('w-[calc(100%-2rem)]', 'md:w-[420px]', 'right-4', 'bottom-4', 'md:right-8', 'md:bottom-8', 'rounded-[24px]');
                mapContainer.classList.remove('inset-0', 'z-[100]', 'w-full', 'h-full', 'rounded-none');
                mapAreaElement.classList.add('h-64', 'md:h-72');
                mapAreaElement.classList.remove('h-full', 'w-full');
                actionArea.classList.remove('hidden', 'opacity-0');
                document.getElementById('map-toolbar').classList.remove('hidden');
            }
            setTimeout(() => guessMap.invalidateSize(), 700);
        }

        let mapExpanded = false;
        document.getElementById('map-expand-btn').addEventListener('click', () => {
            mapExpanded = !mapExpanded;
            const btnIcon = document.getElementById('map-expand-btn').querySelector('iconify-icon');
            if (mapExpanded) {
                mapContainer.classList.remove('md:w-[420px]', 'md:right-8', 'md:bottom-8');
                mapContainer.classList.add('md:w-[600px]', 'md:right-12', 'md:bottom-12');
                mapAreaElement.classList.remove('md:h-72');
                mapAreaElement.classList.add('md:h-[450px]');
                btnIcon.setAttribute('icon', 'solar:minimize-square-minimalistic-linear');
            } else {
                mapContainer.classList.add('md:w-[420px]', 'md:right-8', 'md:bottom-8');
                mapContainer.classList.remove('md:w-[600px]', 'md:right-12', 'md:bottom-12');
                mapAreaElement.classList.add('md:h-72');
                mapAreaElement.classList.remove('md:h-[450px]');
                btnIcon.setAttribute('icon', 'solar:maximize-square-minimalistic-linear');
            }
            setTimeout(() => guessMap.invalidateSize(), 500);
        });

        // --- UPDATED LOBBY PLAYERS UI WITH KICK/BAN + CONFIRMATION ---
        function updateLobbyPlayersUI() {
            const container = document.getElementById('lobby-players-container');
            const list = document.getElementById('lobby-players-list');
            list.innerHTML = '';
            container.classList.remove('hidden');

            partyPlayers.forEach((player, index) => {
                const isOwner = player.username === myUsername && isHost;
                const div = document.createElement('div');
                div.className = `flex items-center justify-between bg-neutral-800 rounded-xl p-3 ${isOwner ? 'border border-yellow-400/30' : ''}`;
                
                let html = `<span class="text-sm font-medium flex items-center gap-2">`;
                if (isOwner) html += `👑 `;
                html += `${player.username}</span>`;

                if (isHost && !isOwner) {
                    html += `
                        <div class="flex gap-2">
                            <button onclick="kickPlayer('${player.username}', '${player.id}')" class="px-3 py-1 text-xs bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg">Kick</button>
                            <button onclick="banPlayer('${player.username}', '${player.id}')" class="px-3 py-1 text-xs bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg">Ban</button>
                        </div>
                    `;
                }

                div.innerHTML = html;
                list.appendChild(div);
            });
        }

        function kickPlayer(username, peerId) {
            if (!confirm(`Kick ${username} from the lobby?`)) return;
            const conn = clientConnections.find(c => c.peer === peerId);
            if (conn) conn.send({ type: 'kicked' });
            partyPlayers = partyPlayers.filter(p => p.username !== username);
            updateLobbyPlayersUI();
            broadcast({ type: 'lobby_update', players: partyPlayers.map(p => p.username) });
        }

        function banPlayer(username, peerId) {
            if (!confirm(`Ban ${username} from this lobby permanently?`)) return;
            bannedUsers.add(peerId);
            const conn = clientConnections.find(c => c.peer === peerId);
            if (conn) conn.send({ type: 'banned' });
            partyPlayers = partyPlayers.filter(p => p.username !== username);
            updateLobbyPlayersUI();
            broadcast({ type: 'lobby_update', players: partyPlayers.map(p => p.username) });
        }

        // Final init
        setTimeout(() => {
            guessMap.invalidateSize();
            refreshActiveLobbies();
        }, 500);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[200] bg-neutral-950 flex flex-col items-center justify-center p-6 transition-opacity duration-500" id="lobby-screen">
<h1 className="tracking-tighter font-medium text-yellow-400 text-4xl mb-8 drop-shadow-md">lemonguessr</h1>
<div className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
<div className="flex items-center justify-between mb-2">
<span className="text-neutral-400 text-sm">Playing as</span>
<span className="text-yellow-400 font-medium text-sm tracking-tight" id="lobby-username"></span>
</div>
<button className="w-full h-11 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-xl transition-colors text-sm tracking-tight flex items-center justify-center gap-2 border border-neutral-700" id="btn-solo">
<iconify-icon className="text-lg" icon="solar:user-linear"></iconify-icon> Play Solo
            </button>
<div className="relative flex items-center py-2">
<div className="flex-grow border-t border-neutral-800"></div>
<span className="flex-shrink-0 mx-4 text-neutral-500 text-[10px] uppercase tracking-widest font-medium">or</span>
<div className="flex-grow border-t border-neutral-800"></div>
</div>
<button className="w-full h-11 bg-yellow-400 hover:bg-yellow-300 text-neutral-950 font-medium rounded-xl transition-colors text-sm tracking-tight flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(250,204,21,0.2)]" id="btn-create-lobby">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> Create Live Lobby
            </button>

<div className="mt-6">
<div className="text-sm text-neutral-400 mb-3 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
                    Active Lobbies
                </div>
<div className="flex flex-col gap-3 max-h-64 overflow-y-auto text-sm" id="active-lobbies-list">

</div>
</div>
<div className="flex gap-2">
<input className="flex-1 h-11 bg-neutral-950 border border-neutral-800 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-yellow-400 uppercase tracking-widest placeholder:normal-case placeholder:tracking-normal placeholder:font-normal transition-colors" id="lobby-code-input" placeholder="Lobby Password" type="text"/>
<button className="h-11 px-6 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-xl transition-colors text-sm tracking-tight border border-neutral-700" id="btn-join-lobby">Join</button>
</div>

<div className="hidden flex-col mt-6 pt-4 border-t border-neutral-800" id="lobby-players-container">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-neutral-400 text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-sm text-neutral-300 tracking-tight">Players in Lobby</span>
</div>
<div className="flex flex-col gap-2 max-h-48 overflow-y-auto" id="lobby-players-list">

</div>
</div>

<button className="w-full h-11 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-xl transition-colors text-sm tracking-tight flex items-center justify-center gap-2 border border-neutral-700 mt-2" onclick="showLobbySettings()">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon> Game Settings
            </button>
</div>
</div>

<div className="hidden fixed inset-0 z-[250] bg-black/80 flex items-center justify-center" id="lobby-settings-panel">
<div className="bg-neutral-900 rounded-3xl p-10 max-w-md w-full border border-neutral-700">
<h2 className="text-2xl font-semibold mb-8 text-center">Game Settings</h2>
<div className="space-y-8">
<div>
<label className="block text-sm text-neutral-400 mb-3">Difficulty</label>
<div className="grid grid-cols-3 gap-3">
<button className="diff-btn py-4 rounded-2xl text-sm font-medium" id="diff-easy" onclick="setDifficulty(0)">Easy</button>
<button className="diff-btn py-4 rounded-2xl text-sm font-medium active" id="diff-medium" onclick="setDifficulty(1)">Medium</button>
<button className="diff-btn py-4 rounded-2xl text-sm font-medium" id="diff-hard" onclick="setDifficulty(2)">Hard</button>
</div>
</div>
<div>
<label className="block text-sm text-neutral-400 mb-3">Number of Rounds</label>
<div className="flex gap-3">
<button className="round-btn flex-1 py-4 rounded-2xl text-sm font-medium" id="rounds-3" onclick="setRounds(3)">3</button>
<button className="round-btn flex-1 py-4 rounded-2xl text-sm font-medium active" id="rounds-5" onclick="setRounds(5)">5</button>
<button className="round-btn flex-1 py-4 rounded-2xl text-sm font-medium" id="rounds-10" onclick="setRounds(10)">10</button>
</div>
</div>
</div>
<div className="mt-10">
<button className="w-full h-12 bg-yellow-400 hover:bg-yellow-300 text-neutral-950 font-semibold rounded-2xl" onclick="closeLobbySettings()">Apply</button>
</div>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-1 bg-neutral-900 z-50">
<div className="h-full bg-yellow-400 w-1/5 shadow-[0_0_12px_rgba(250,204,21,0.6)] rounded-r-full transition-all duration-500 ease-out" id="progress-bar"></div>
</div>

<div className="absolute inset-0 z-0 bg-neutral-950">
<div className="w-full h-full transition-opacity duration-500" id="panorama"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-neutral-950/80 z-10 pointer-events-none"></div>
</div>

<header className="relative z-20 w-full p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-b from-neutral-950/90 via-neutral-950/50 to-transparent pointer-events-none">
<div className="flex-shrink-0 flex items-center pointer-events-auto">
<span className="tracking-tighter font-medium text-yellow-400 drop-shadow-md text-xl md:text-2xl">lemonguessr</span>
</div>
<div className="flex items-center gap-6 md:gap-8 bg-neutral-900/60 backdrop-blur-xl px-8 py-2.5 rounded-full border border-neutral-700/40 shadow-2xl pointer-events-auto">
<div className="flex flex-col items-center">
<span className="text-[10px] text-neutral-400 font-medium uppercase tracking-[0.2em] mb-0.5">Round</span>
<div className="flex items-baseline gap-1">
<span className="text-base font-medium tracking-tight text-white" id="round-display">1</span>
<span className="text-xs text-neutral-500 font-normal">/ 5</span>
</div>
</div>
<div className="w-px h-8 bg-gradient-to-b from-transparent via-neutral-600 to-transparent"></div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-neutral-400 font-medium uppercase tracking-[0.2em] mb-0.5">Score</span>
<span className="text-base font-medium tracking-tight text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.3)]" id="score-display">0</span>
</div>
<div className="w-px h-8 bg-gradient-to-b from-transparent via-neutral-600 to-transparent"></div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-neutral-400 font-medium uppercase tracking-[0.2em] mb-0.5">Time</span>
<span className="text-base font-medium tracking-tight text-white" id="time-display">02:00</span>
</div>
</div>
<div className="flex-shrink-0 flex items-center gap-3 pointer-events-auto">
<div className="hidden px-3 py-1.5 bg-neutral-800/80 backdrop-blur-md border border-neutral-700 rounded-xl text-neutral-300 font-medium tracking-tight text-sm shadow-lg" id="header-lobby-code"></div>
<div className="px-3 py-1.5 bg-yellow-400/10 backdrop-blur-md border border-yellow-400/20 text-yellow-400 rounded-xl font-medium tracking-tight text-sm flex items-center gap-2 shadow-lg">
<iconify-icon className="text-base" icon="solar:user-rounded-linear"></iconify-icon>
<span id="header-username"></span>
</div>
</div>
</header>

<div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 pointer-events-none">
<div className="flex flex-col bg-neutral-900/70 backdrop-blur-xl rounded-2xl border border-neutral-700/50 shadow-2xl overflow-hidden pointer-events-auto">
<button className="w-12 h-12 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700/50 transition-colors border-b border-neutral-700/50" id="pano-zoom-in" title="Zoom In">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<button className="w-12 h-12 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700/50 transition-colors" id="pano-zoom-out" title="Zoom Out">
<iconify-icon className="text-xl" icon="solar:minus-circle-linear"></iconify-icon>
</button>
</div>
</div>

<div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 z-30 w-[calc(100%-2rem)] md:w-[420px] bg-neutral-900/95 backdrop-blur-2xl border border-neutral-700/60 rounded-[24px] shadow-2xl overflow-hidden flex flex-col group/map transition-all duration-700 ease-in-out" id="map-container">
<div className="h-12 flex-shrink-0 bg-neutral-900/50 border-b border-neutral-800 flex items-center justify-between px-4" id="map-toolbar">
<div className="flex items-center gap-2.5 text-neutral-400">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs font-normal tracking-wide">Select location on map</span>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800 transition-colors" id="map-expand-btn">
<iconify-icon className="text-lg" icon="solar:maximize-square-minimalistic-linear"></iconify-icon>
</button>
</div>
<div className="h-64 md:h-72 w-full relative z-10 transition-all duration-700 ease-in-out cursor-crosshair" id="map-area"></div>
<div className="p-4 bg-neutral-900 relative flex-shrink-0 transition-opacity duration-300 z-20" id="action-area">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-700/50 to-transparent"></div>
<button className="w-full h-12 bg-yellow-400 text-neutral-950 font-medium rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.15)] transition-all duration-300 flex items-center justify-center gap-2 tracking-tight text-sm opacity-50 cursor-not-allowed pointer-events-none" id="guess-btn">
<span>Lock in Guess</span>
<iconify-icon className="text-lg opacity-70 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden fixed inset-0 z-[110] bg-neutral-950/20 backdrop-blur-[1px] items-center justify-start p-4 md:p-8 pointer-events-none" id="results-modal">
<div className="bg-neutral-900/90 backdrop-blur-2xl border border-neutral-700 rounded-2xl shadow-2xl p-6 md:p-8 max-w-sm w-full md:w-80 flex flex-col items-center text-center transform transition-all scale-95 opacity-0 pointer-events-auto" id="modal-content">
<h2 className="text-xl font-medium tracking-tight text-white mb-1" id="modal-title">Round Complete</h2>
<p className="text-xs text-neutral-400 mb-6" id="modal-subtitle">Distances calculated.</p>
<div className="flex gap-6 w-full justify-center mb-6">
<div className="flex flex-col items-center">
<span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Distance</span>
<span className="text-2xl font-medium tracking-tighter text-white" id="modal-distance">--</span>
</div>
<div className="w-px bg-neutral-800"></div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Points</span>
<span className="text-2xl font-medium tracking-tighter text-yellow-400" id="modal-score">--</span>
</div>
</div>
<div className="hidden w-full flex-col gap-2 mb-6 pt-5 border-t border-neutral-800 text-left" id="multiplayer-results">
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 pl-1">Lobby Guesses</div>
<div className="flex flex-col gap-2" id="party-list">

</div>
</div>
<button className="w-full h-11 bg-white hover:bg-neutral-200 text-neutral-950 font-medium rounded-xl transition-colors text-sm tracking-tight shadow-lg" id="next-round-btn">
                Next Round
            </button>
<div className="hidden w-full text-center text-xs text-neutral-500 mt-3 font-medium tracking-wide uppercase" id="waiting-host-msg">
                Waiting for host...
            </div>
</div>
</div>






    </>
  );
}
