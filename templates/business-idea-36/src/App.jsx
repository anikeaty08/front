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



        // Data Sources
        const slotData = {
            theme: { label: "THEME", icon: "solar:shop-linear", items: ["F&B", "패션", "라이프스타일", "모빌리티", "펫", "에듀", "헬스케어", "프롭테크"] },
            target: { label: "TARGET", icon: "solar:users-group-two-rounded-linear", items: ["1인가구", "Z세대", "딩크족", "액티브시니어", "N잡러", "덕후", "디지털노마드", "알파세대"] },
            trend: { label: "TREND", icon: "solar:graph-up-linear", items: ["숏폼", "비건", "구독경제", "갓생", "Y2K", "초개인화", "웰니스", "리셀"] },
            tech: { label: "TECH", icon: "solar:cpu-linear", items: ["생성형AI", "블록체인", "AR/VR", "IoT", "빅데이터", "로보틱스", "메타버스", "No-code"] },
            feature: { label: "FEATURE", icon: "solar:magic-stick-3-linear", items: ["랜덤박스", "타임딜", "게이미피케이션", "커뮤니티", "리워드", "블라인드매칭", "다이내믹프라이싱", "크라우드소싱"] },
            revenue: { label: "REVENUE", icon: "solar:wallet-linear", items: ["구독료", "수수료", "네이티브광고", "프리미엄패스", "굿즈판매", "데이터판매", "부분유료화", "B2B SaaS"] }
        };

        const grades = [
            { name: "Common", color: "text-zinc-400", bg: "bg-zinc-500/10", border: "border-zinc-500/30" },
            { name: "Rare", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
            { name: "Epic", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" },
            { name: "Legendary", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" }
        ];

        let currentValues = {};
        let isSpinning = false;
        let spinIntervals = {};

        // Initialize UI
        function initSlots() {
            const container = document.getElementById('slot-container');
            
            Object.keys(slotData).forEach((key) => {
                const data = slotData[key];
                const initialItem = data.items[Math.floor(Math.random() * data.items.length)];
                currentValues[key] = initialItem;

                const slotHTML = `
                    <div class="flex flex-col gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 relative group" id="slot-card-${key}">
                        <div class="flex justify-between items-center mb-1">
                            <span class="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                                <iconify-icon icon="${data.icon}" stroke-width="1.5"></iconify-icon>
                                ${data.label}
                            </span>
                            
                            <!-- Custom Toggle -->
                            <div class="relative inline-block w-10 mr-2 align-middle select-none">
                                <input type="checkbox" name="toggle-${key}" id="toggle-${key}" class="toggle-checkbox absolute block w-4 h-4 rounded-full bg-zinc-400 border-4 border-zinc-800 appearance-none cursor-pointer transition-all duration-300 z-10 top-1 left-1"/>
                                <label for="toggle-${key}" class="toggle-label block overflow-hidden h-6 rounded-full bg-zinc-800 cursor-pointer transition-colors duration-300"></label>
                                <span class="toggle-text text-[10px] font-mono text-zinc-600 absolute -bottom-4 right-0 transition-colors duration-300">HOLD</span>
                            </div>
                        </div>
                        
                        <div class="h-12 flex items-center overflow-hidden" id="slot-window-${key}">
                            <div class="text-base sm:text-lg font-medium text-zinc-100 slot-text whitespace-nowrap" id="slot-val-${key}">
                                ${initialItem}
                            </div>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', slotHTML);
            });
        }

        // Generate Stars
        function generateStars(rating) {
            let html = '';
            for(let i=1; i<=5; i++) {
                if(i <= rating) {
                    html += `<iconify-icon icon="solar:star-bold" class="text-amber-400 text-sm"></iconify-icon>`;
                } else {
                    html += `<iconify-icon icon="solar:star-linear" class="text-zinc-700 text-sm"></iconify-icon>`;
                }
            }
            return html;
        }

        // Logic
        function startSpin() {
            if(isSpinning) return;
            isSpinning = true;

            // Hide Result, Setup Terminal
            document.getElementById('result-area').classList.add('hidden');
            document.getElementById('result-area').classList.remove('opacity-100');
            
            const terminal = document.getElementById('terminal-area');
            terminal.classList.remove('hidden');
            
            // Reset Terminal state
            document.getElementById('term-line-1').classList.add('hidden');
            document.getElementById('term-line-2').classList.add('hidden');
            document.getElementById('term-progress').classList.add('hidden');
            document.getElementById('term-line-3').classList.add('hidden');
            document.getElementById('term-ascii').classList.add('hidden');
            document.getElementById('progress-bar').classList.remove('progress-animate');
            document.getElementById('term-cursor').classList.remove('hidden');

            // Find held slots
            const heldSlots = [];
            Object.keys(slotData).forEach(key => {
                const isHeld = document.getElementById(`toggle-${key}`).checked;
                if(isHeld) heldSlots.push(key);
                else {
                    document.getElementById(`slot-card-${key}`).classList.add('spinning');
                    // Start rapid text change
                    spinIntervals[key] = setInterval(() => {
                        const items = slotData[key].items;
                        document.getElementById(`slot-val-${key}`).innerText = items[Math.floor(Math.random() * items.length)];
                    }, 50);
                }
            });

            // Terminal Animation Sequence
            setTimeout(() => { document.getElementById('term-line-1').classList.remove('hidden'); }, 200);
            setTimeout(() => { document.getElementById('term-line-2').classList.remove('hidden'); }, 800);
            setTimeout(() => { 
                document.getElementById('term-progress').classList.remove('hidden');
                document.getElementById('progress-bar').classList.add('progress-animate');
                
                // Animate percentage
                let pct = 0;
                const pctInterval = setInterval(() => {
                    pct += 5;
                    if(pct > 100) pct = 100;
                    document.getElementById('progress-text').innerText = pct + '%';
                    if(pct === 100) clearInterval(pctInterval);
                }, 100);

            }, 1500);

            // Stop Spinning and show results
            setTimeout(() => {
                document.getElementById('term-line-3').classList.remove('hidden');
                
                Object.keys(slotData).forEach((key, index) => {
                    if(!heldSlots.includes(key)) {
                        clearInterval(spinIntervals[key]);
                        document.getElementById(`slot-card-${key}`).classList.remove('spinning');
                        
                        // Pick final random
                        const items = slotData[key].items;
                        const finalItem = items[Math.floor(Math.random() * items.length)];
                        currentValues[key] = finalItem;
                        document.getElementById(`slot-val-${key}`).innerText = finalItem;
                    }
                });

                updateTerminalAscii();
                document.getElementById('term-ascii').classList.remove('hidden');
                
                setTimeout(() => {
                    generateResultCard();
                }, 1000);

            }, 3500);
        }

        function updateTerminalAscii() {
            const ascii = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  THEME: ${currentValues.theme.padEnd(10, ' ')} | TARGET: ${currentValues.target.padEnd(10, ' ')} | TREND: ${currentValues.trend} ┃
┃  TECH : ${currentValues.tech.padEnd(10, ' ')} | FEAT  : ${currentValues.feature.padEnd(10, ' ')} | REV  : ${currentValues.revenue} ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`;
            document.getElementById('term-ascii').innerText = ascii;
        }

        function generateResultCard() {
            // Generate mock data based on selection
            const val = currentValues;
            
            // Naming logic
            const prefixes = ["네온", "픽셀", "오르빗", "퀀텀", "노바", "싱크", "루프"];
            const suffixes = ["랩스", "크루", "스페이스", "히어로", "스테이션", "웨이브"];
            const name = `${val.tech.substring(0,2)} ${prefixes[Math.floor(Math.random()*prefixes.length)]} '${val.target.substring(0,2)} ${suffixes[Math.floor(Math.random()*suffixes.length)]}'`;
            
            // Grade
            const grade = grades[Math.floor(Math.random() * grades.length)];
            const gradeEl = document.getElementById('res-grade');
            gradeEl.innerText = `${grade.name} Grade`;
            gradeEl.className = `text-xs font-mono px-2 py-1 rounded border ${grade.border} ${grade.color} ${grade.bg}`;

            document.getElementById('res-name').innerText = name;
            document.getElementById('res-id').innerText = `#BM-${Math.floor(Math.random()*9000)+1000}X`;
            
            document.getElementById('res-scenario').innerHTML = `<span class="text-white font-medium">${val.target}</span>을(를) 위한 <span class="text-white font-medium">${val.trend}</span> 기반 <span class="text-white font-medium">${val.theme}</span> 서비스. <br/> <span class="text-white font-medium">${val.tech}</span> 기술을 활용해 <span class="text-cyan-400">${val.feature}</span>을(를) 핵심 경험으로 제공하며, <span class="text-purple-400">${val.revenue}</span>(으)로 BM을 완성합니다.`;
            
            const pitches = [
                `${val.target}의 숨겨진 욕망을 ${val.feature}로 정확히 타격!`,
                `뻔한 ${val.theme} 시장에 ${val.tech} 한 스푼으로 도파민 폭발.`,
                `${val.trend} 트렌드에 올라타 ${val.revenue}까지 챙기는 영리한 모델.`,
                `귀찮은 건 AI에게, 우리는 ${val.feature}만 즐긴다.`
            ];
            document.getElementById('res-pitch').innerText = pitches[Math.floor(Math.random()*pitches.length)];

            // Stats
            document.getElementById('stat-revenue').innerHTML = generateStars(Math.floor(Math.random() * 3) + 3); // 3-5
            document.getElementById('stat-speed').innerHTML = generateStars(Math.floor(Math.random() * 4) + 2); // 2-5
            document.getElementById('stat-viral').innerHTML = generateStars(Math.floor(Math.random() * 2) + 4); // 4-5

            // Hide terminal cursor, show result
            document.getElementById('term-cursor').classList.add('hidden');
            
            const resultArea = document.getElementById('result-area');
            resultArea.classList.remove('hidden');
            // small delay for transition
            setTimeout(() => {
                resultArea.classList.add('opacity-100');
                resultArea.scrollIntoView({ behavior: 'smooth', block: 'end' });
                isSpinning = false;
            }, 100);
        }

        // Init
        document.addEventListener('DOMContentLoaded', () => {
            initSlots();
            document.getElementById('spin-btn').addEventListener('click', startSpin);
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
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}>
</div>

<header className="relative z-10 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-mono font-medium tracking-tight text-lg text-zinc-100">SYNTHESIS_ENGINE</span>
</div>
<div className="flex items-center gap-2 text-zinc-500 text-sm font-mono">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                SYSTEM.ONLINE
            </div>
</div>
</header>
<main className="relative z-10 flex-grow flex flex-col items-center justify-start pt-12 pb-24 px-4 sm:px-6 w-full max-w-6xl mx-auto">

<div className="text-center mb-12">
<h1 className="text-4xl sm:text-5xl font-medium tracking-tight mb-4 text-white">
                Business Idea <span className="text-gradient">Generator</span>
</h1>
<p className="text-base text-zinc-400 font-light max-w-xl mx-auto">
                Select your constraints or leave it to fate. Pull the lever to synthesize a new venture for the modern era.
            </p>
</div>

<div className="w-full glass-card rounded-2xl p-6 sm:p-8 mb-12 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6" id="slot-container">

</div>

<div className="mt-10 flex flex-col items-center justify-center border-t border-white/5 pt-8">
<button className="group relative px-8 py-4 bg-zinc-100 hover:bg-white text-zinc-950 rounded-full font-medium text-lg transition-all duration-300 transform active:scale-95 flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]" id="spin-btn">
<iconify-icon className="text-xl group-hover:rotate-180 transition-transform duration-500" icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
                    PULL LEVER
                </button>
</div>
</div>

<div className="w-full max-w-3xl hidden mb-12" id="terminal-area">
<div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden terminal-glow">

<div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<span className="ml-2 text-xs text-zinc-500 font-mono">bash - process.exe</span>
</div>

<div className="p-6 font-mono text-sm leading-relaxed text-zinc-400 min-h-[16rem]">
<div className="hidden" id="term-line-1"><span className="text-purple-400">root@synth:~$</span> ./generate_bm.sh</div>
<div className="hidden text-zinc-300 mt-2" id="term-line-2">[ SYSTEM: 슬롯 머신 가동 중... ]</div>
<div className="hidden mt-4" id="term-progress">
<div className="flex items-center gap-4">
<span className="text-cyan-400">Processing:</span>
<div className="flex-grow bg-zinc-800 h-2 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-full w-0" id="progress-bar"></div>
</div>
<span className="text-cyan-400 w-12 text-right" id="progress-text">0%</span>
</div>
</div>
<div className="hidden mt-4 text-emerald-400" id="term-line-3">[ ■■■■■■ ] 연성 완료!!</div>
<pre className="hidden mt-6 text-xs text-zinc-500 overflow-x-auto whitespace-pre" id="term-ascii">
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  [THEME]  | [TARGET] | [TREND]                           ┃
┃  [TECH ]  | [FEATURE]| [REVENUE]                         ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛</pre>
<div className="mt-2 flex">
<span className="cursor-blink w-2 h-4 bg-purple-400 hidden inline-block align-middle" id="term-cursor"></span>
</div>
</div>
</div>
</div>

<div className="w-full max-w-2xl hidden opacity-0 transition-opacity duration-1000" id="result-area">
<div className="glass-card rounded-2xl p-1 relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="bg-zinc-950/80 rounded-xl p-8 relative z-10 backdrop-blur-xl">
<div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
<div>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-purple-400 text-xl" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-mono px-2 py-1 rounded border border-purple-500/30 text-purple-300 bg-purple-500/10" id="res-grade">Epic Grade</span>
</div>
<h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mt-2" id="res-name">픽셀 런드리 '코인 히어로'</h3>
</div>
<div className="text-right">
<span className="text-xs text-zinc-500 font-mono uppercase tracking-wider block mb-1">Generated ID</span>
<span className="text-sm text-zinc-300 font-mono" id="res-id">#BM-091A</span>
</div>
</div>
<div className="space-y-6">
<div>
<h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-2">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                                Business Scenario
                            </h4>
<p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light" id="res-scenario">
                                1인가구를 위한 숏폼 기반 F&amp;B 서비스. 생성형AI 기술을 활용해 랜덤박스를 제공하며, 구독료로 수익을 창출합니다.
                            </p>
</div>
<div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
<h4 className="text-xs font-mono text-cyan-500 uppercase tracking-wider mb-1 flex items-center gap-2">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
                                2030 필살기
                            </h4>
<p className="text-sm text-white font-medium" id="res-pitch">
                                귀찮은 식사 고민을 숏폼 도파민과 랜덤 뽑기 쾌감으로 해결!
                            </p>
</div>
<div className="pt-4 border-t border-white/5">
<h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
                                Capability Stats
                            </h4>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-400">💰 수익포텐</span>
<div className="flex gap-1" id="stat-revenue"></div>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-400">⚡️ 실행속도</span>
<div className="flex gap-1" id="stat-speed"></div>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-400">🔥 화제성</span>
<div className="flex gap-1" id="stat-viral"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
