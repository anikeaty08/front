import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const roundData=[{hole:1,par:4,score:4,fir:1,gir:1},{hole:2,par:3,score:3,fir:0,gir:1},{hole:3,par:5,score:5,fir:1,gir:2},{hole:4,par:4,score:5,fir:4,gir:4},{hole:5,par:5,score:4,fir:1,gir:1},{hole:6,par:3,score:3,fir:0,gir:1}];
    const historicalData={par3:[3,4,2,3,4,3,3,2,4,3,2,3,4,3,3],par4:[4,5,4,4,5,4,6,4,5,4,5,4,4,5,4,4,5,4,6,5],par5:[5,6,5,4,5,5,6,5,5,4,5,6,5,5,4,5,5,6]};
    let currentHole=6,currentPar=3,currentScore=3,firState=0,girState=0,bunkerShots=0,penaltyShots=0,putts=2;
    const firSymbols=['\\','✓','←','→','✗'],girSymbols=['\\','✓','←','→','↑','↓'];
    document.addEventListener('DOMContentLoaded',()=>{createPuttsButtons();calculateCurrentRoundScore();calculateFIRs();calculateGIRs();calculateAverages();lucide.createIcons();});
    function calculateCurrentRoundScore(){const total=roundData.reduce((s,h)=>s+h.score,0);const parSum=roundData.reduce((s,h)=>s+h.par,0);const diff=total-parSum;document.getElementById('currentRoundScore').textContent=total;const el=document.getElementById('currentRoundScoreToPar');if(diff===0){el.textContent='Even Par';el.className='text-sm font-semibold text-green-600'}else if(diff<0){el.textContent=`${diff} to Par`;el.className='text-sm font-semibold text-red-600'}else{el.textContent=`+${diff} to Par`;el.className='text-sm font-semibold text-black'}}
    function calculateFIRs(){const eligible=roundData.filter(h=>h.par===4||h.par===5);const count=eligible.filter(h=>h.fir===1).length;document.getElementById('firsCount').textContent=count}
    function calculateGIRs(){const count=roundData.filter(h=>h.gir===1).length;document.getElementById('girsCount').textContent=count}
    function calculateAverages(){calcAverage('par3',3,'avePar3Score');calcAverage('par4',4,'avePar4Score');calcAverage('par5',5,'avePar5Score')}
    function calcAverage(key,par,target){const arr=historicalData[key];if(!arr||!arr.length)return;const avg=arr.reduce((s,v)=>s+v,0)/arr.length;const el=document.getElementById(target);el.textContent=avg.toFixed(1);if(avg<par)el.className='text-xl font-bold text-red-600';else if(avg>par)el.className='text-xl font-bold text-black';else el.className='text-xl font-bold text-green-600'}
    function openScoringModal(hole,par){currentHole=hole;currentPar=par;currentScore=par;firState=0;girState=0;bunkerShots=0;penaltyShots=0;putts=2;document.getElementById('holePar').textContent=par;document.getElementById('holeTitle').textContent=`Hole ${hole}`;document.getElementById('holeSub').textContent=`Par ${par} • ${par===3?165:par===4?420:580} yds`;updateScoreDisplay();updateFIRDisplay();updateGIRDisplay();updateCounts();updatePuttsDisplay();updateAveToPar();document.getElementById('scoringModal').classList.remove('hidden');document.body.style.overflow='hidden';lucide.createIcons();}
    function closeScoringModal(){document.getElementById('scoringModal').classList.add('hidden');document.body.style.overflow='auto'}
    function updateAveToPar(){const arr=historicalData[`par${currentPar}`]||[];const avg=arr.length?arr.reduce((s,v)=>s+v,0)/arr.length:currentPar;const diff=avg-currentPar;const el=document.getElementById('aveToPar');el.textContent=diff===0?'E':(diff>0?`+${diff.toFixed(1)}`:diff.toFixed(1));el.className='text-xl font-bold text-white'}
    function adjustScore(d){currentScore=Math.min(10,Math.max(1,currentScore+d));updateScoreDisplay()}
    function updateScoreDisplay(){document.getElementById('currentScore').textContent=currentScore;const rel=currentScore-currentPar;const el=document.getElementById('scoreRelation');if(rel===0){el.textContent='Par';el.className='text-sm text-green-600'}else if(rel<0){el.textContent=rel===-1?'Birdie':rel===-2?'Eagle':rel;el.className='text-sm text-red-600'}else{el.textContent=rel===1?'Bogey':rel;el.className='text-sm text-black'}}
    function toggleFIR(){firState=(firState+1)%firSymbols.length;updateFIRDisplay()}
    function toggleGIR(){girState=(girState+1)%girSymbols.length;updateGIRDisplay()}
    function updateFIRDisplay(){const btn=document.getElementById('firButton');btn.textContent=firSymbols[firState];btn.className='mx-auto w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-2xl text-black toggle-button'}
    function updateGIRDisplay(){const btn=document.getElementById('girButton');btn.textContent=girSymbols[girState];btn.className='mx-auto w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-2xl text-black toggle-button'}
    function adjustBunkerShots(d){bunkerShots=Math.max(0,Math.min(9,bunkerShots+d));updateCounts()}
    function adjustPenaltyShots(d){penaltyShots=Math.max(0,Math.min(9,penaltyShots+d));updateCounts()}
    function updateCounts(){document.getElementById('bunkerShots').textContent=bunkerShots;document.getElementById('penaltyShots').textContent=penaltyShots}
    function createPuttsButtons(){const w=document.getElementById('puttButtons');for(let i=1;i<=6;i++){const b=document.createElement('button');b.id=`putts${i}`;b.textContent=i;b.className='w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-semibold text-gray-600';b.onclick=()=>selectPutts(i);w.appendChild(b);}selectPutts(2)}
    function selectPutts(v){putts=v;for(let i=1;i<=6;i++){document.getElementById(`putts${i}`).className=`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${i===v?'bg-emerald-600 text-white':'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}}
    function updatePuttsDisplay(){selectPutts(putts)}
    function saveScore(){closeScoringModal()}
    lucide.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md rounded-3xl shadow-xl overflow-hidden bg-white">

<div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-6">
<div className="text-center mb-4">
<h1 className="text-lg font-semibold tracking-tight">Pebble Beach Golf Links</h1>
<p className="text-sm text-emerald-100">Round in Progress • Hole 7 of 18</p>
</div>

<div className="flex items-center justify-center gap-3">

<div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-gray-100">
<div className="text-3xl font-bold text-black" id="currentRoundScore">75</div>
</div>

<div className="flex items-center justify-center px-4 py-2 rounded-full bg-gray-100">
<span className="text-sm font-semibold text-black" id="currentRoundScoreToPar">+3 to Par</span>
</div>
</div>
</div>

<div className="p-6 space-y-4">

<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl p-4 text-center animate-fade-in bg-gray-50" style={{animationDelay: '.1s'}}>
<div className="text-2xl font-bold text-black" id="firsCount">8</div>
<div className="text-sm text-gray-500">FIRs</div>
</div>
<div className="rounded-xl p-4 text-center animate-fade-in bg-gray-50" style={{animationDelay: '.2s'}}>
<div className="text-2xl font-bold text-black" id="girsCount">12</div>
<div className="text-sm text-gray-500">GIRs</div>
</div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="rounded-xl p-4 text-center animate-fade-in bg-gray-50" style={{animationDelay: '.3s'}}>
<div className="text-xl font-bold text-green-600" id="avePar3Score">3.2</div>
<div className="text-sm text-gray-500">Ave Par 3</div>
</div>
<div className="rounded-xl p-4 text-center animate-fade-in bg-gray-50" style={{animationDelay: '.4s'}}>
<div className="text-xl font-bold text-black" id="avePar4Score">4.8</div>
<div className="text-sm text-gray-500">Ave Par 4</div>
</div>
<div className="rounded-xl p-4 text-center animate-fade-in bg-gray-50" style={{animationDelay: '.5s'}}>
<div className="text-xl font-bold text-red-600" id="avePar5Score">5.3</div>
<div className="text-sm text-gray-500">Ave Par 5</div>
</div>
</div>
</div>

<div className="px-6 pb-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Recent Holes</h2>
<button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">View All</button>
</div>
<div className="space-y-3">

<div className="animate-slide-up" style={{animationDelay: '.1s'}}>
<div className="rounded-xl p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors" onclick="openScoringModal(4,4)">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="text-center">
<div className="text-lg font-bold text-black">5</div>
<div className="text-xs text-orange-600">+1</div>
</div>
<div>
<div className="font-medium text-black">Hole 4</div>
<div className="text-sm text-gray-500">Par 4 • 420 yds</div>
</div>
</div>
<div className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-900">Par 4</div>
</div>
</div>
</div>
<div className="animate-slide-up" style={{animationDelay: '.2s'}}>
<div className="rounded-xl p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors" onclick="openScoringModal(5,5)">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="text-center">
<div className="text-lg font-bold text-black">4</div>
<div className="text-xs text-red-600">-1</div>
</div>
<div>
<div className="font-medium text-black">Hole 5</div>
<div className="text-sm text-gray-500">Par 5 • 580 yds</div>
</div>
</div>
<div className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-900">Par 5</div>
</div>
</div>
</div>
<div className="animate-slide-up" style={{animationDelay: '.3s'}}>
<div className="rounded-xl p-4 bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 cursor-pointer transition-colors" onclick="openScoringModal(6,3)">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="text-center">
<div className="text-lg font-bold text-black">3</div>
<div className="text-xs text-green-600">E</div>
</div>
<div>
<div className="font-medium text-black">Hole 6</div>
<div className="text-sm text-gray-600">Par 3 • 165 yds</div>
</div>
</div>
<div className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-900">Par 3</div>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 pb-6">
<button className="w-full rounded-xl py-4 font-semibold flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white" onclick="openScoringModal(7,4)">
<i className="w-5 h-5" data-lucide="plus"></i> Score Hole 7
      </button>
</div>
</div>

<div className="fixed inset-0 modal-backdrop hidden z-50 items-center justify-center p-4 bg-black bg-opacity-50" id="scoringModal">
<div className="bg-white rounded-3xl max-w-md w-full mx-4 animate-slide-up overflow-y-auto max-h-[90vh]">

<div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 rounded-t-3xl text-white flex items-center justify-between">
<div>
<h3 className="text-xl font-semibold tracking-tight" id="holeTitle">Hole 6</h3>
<p className="text-sm text-emerald-100" id="holeSub">Par 3 • 165 yds</p>
</div>
<div className="text-center">
<div className="text-xl font-bold text-white" id="aveToPar">+0.3</div>
<div className="text-xs text-emerald-100">Ave to Par</div>
</div>
<button className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors" onclick="closeScoringModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="p-6 border-b border-gray-100">
<div className="grid grid-cols-3 text-center text-sm">
<div>
<div className="text-gray-500">Handicap</div>
<div className="font-semibold text-black">7</div>
</div>
<div>
<div className="text-gray-500">Distance</div>
<div className="font-semibold text-black">165 yds</div>
</div>
<div>
<div className="text-gray-500">Par</div>
<div className="font-semibold text-black" id="holePar">3</div>
</div>
</div>
</div>

<div className="p-6 space-y-6">

<div>
<h4 className="text-sm font-semibold mb-3 uppercase text-gray-700 tracking-wide">Score</h4>
<div className="flex items-center justify-center gap-4">
<button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-xl toggle-button" onclick="adjustScore(-1)">−</button>
<div className="text-center">
<div className="text-3xl font-bold text-black" id="currentScore">3</div>
<div className="text-sm text-gray-500" id="scoreRelation">Par</div>
</div>
<button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-xl toggle-button" onclick="adjustScore(1)">+</button>
</div>
</div>

<div className="flex gap-6">
<div className="flex-1 text-center">
<h4 className="text-sm font-semibold mb-3 uppercase text-gray-700 tracking-wide">FIR</h4>
<button className="mx-auto w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-2xl text-black toggle-button" id="firButton" onclick="toggleFIR()">\</button>
</div>
<div className="flex-1 text-center">
<h4 className="text-sm font-semibold mb-3 uppercase text-gray-700 tracking-wide">GIR</h4>
<button className="mx-auto w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-2xl text-black toggle-button" id="girButton" onclick="toggleGIR()">\</button>
</div>
</div>

<div className="flex gap-6">
<div className="flex-1 text-center">
<h4 className="text-sm font-semibold mb-3 uppercase text-gray-700 tracking-wide">Bunker Shots</h4>
<div className="flex items-center justify-center gap-4">
<button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold" onclick="adjustBunkerShots(-1)">−</button>
<div className="text-2xl font-bold text-black" id="bunkerShots">0</div>
<button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold" onclick="adjustBunkerShots(1)">+</button>
</div>
</div>
<div className="flex-1 text-center">
<h4 className="text-sm font-semibold mb-3 uppercase text-gray-700 tracking-wide">Penalty Shots</h4>
<div className="flex items-center justify-center gap-4">
<button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold" onclick="adjustPenaltyShots(-1)">−</button>
<div className="text-2xl font-bold text-black" id="penaltyShots">0</div>
<button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold" onclick="adjustPenaltyShots(1)">+</button>
</div>
</div>
</div>

<div>
<h4 className="text-sm font-semibold mb-3 uppercase text-gray-700 tracking-wide">Putts</h4>
<div className="flex justify-center gap-2">
<div className="flex gap-2" id="puttButtons"></div>
</div>
</div>

<div className="flex gap-3 pt-4 border-t border-gray-100">
<button className="flex-1 rounded-xl py-3 font-medium bg-gray-100 hover:bg-gray-200 text-gray-700" onclick="closeScoringModal()">Cancel</button>
<button className="flex-1 rounded-xl py-3 font-medium bg-emerald-600 hover:bg-emerald-700 text-white" onclick="saveScore()">Save Score</button>
</div>
</div>
</div>
</div>



    </>
  );
}
