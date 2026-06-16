import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple View Router
        function switchScreen(screenId) {
            // Hide all sections
            document.querySelectorAll('section').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('fade-enter-active');
            });
            
            // Show target
            const target = document.getElementById('view-' + screenId);
            if(target) {
                target.classList.remove('hidden');
                // Small animation trigger
                requestAnimationFrame(() => {
                    target.classList.add('fade-enter-active');
                });
            }

            // Update Header Title based on context
            const titles = {
                'instructions': 'Instructions',
                'mcq': 'Section 1: General Knowledge',
                'coding': 'Section 2: Algorithms',
                'review': 'Final Review'
            };
            document.getElementById('current-section-name').innerText = titles[screenId];
        }

        // Modal Logic
        function showModal(id) {
            const modal = document.getElementById(id);
            modal.classList.remove('hidden');
            // Trigger reflow
            void modal.offsetWidth; 
            modal.classList.remove('opacity-0');
            modal.querySelector('#modal-content').classList.remove('scale-95');
            modal.querySelector('#modal-content').classList.add('scale-100');
        }

        function hideModal(id) {
            const modal = document.getElementById(id);
            modal.classList.add('opacity-0');
            modal.querySelector('#modal-content').classList.add('scale-95');
            modal.querySelector('#modal-content').classList.remove('scale-100');
            
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 200);
        }

        // Timer Logic (Mock)
        let time = 5400; // 90 mins in seconds
        setInterval(() => {
            time--;
            const hours = Math.floor(time / 3600);
            const minutes = Math.floor((time % 3600) / 60);
            const seconds = time % 60;
            document.getElementById('timer-display').innerText = 
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            
            // Show warning mock
            if(time === 5395) { // 5 seconds after load just to show UI
                document.getElementById('time-warning').classList.remove('hidden');
            }
        }, 1000);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-20 relative">
<div className="flex items-center gap-6">
<div className="tracking-tighter font-medium text-gray-900 text-lg">ASSESS<span className="text-gray-400">.OS</span></div>
<div className="h-4 w-px bg-gray-200"></div>
<div className="text-gray-500 font-normal" id="current-section-name">Instructions</div>
</div>
<div className="flex items-center gap-6">

<div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded border border-gray-200" id="timer-container">
<iconify-icon className="text-gray-400 text-lg" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-mono font-medium text-gray-700 tabular-nums tracking-wide" id="timer-display">01:30:00</span>
</div>

<div className="flex items-center gap-3 pl-4 border-l border-gray-200">
<div className="text-right hidden sm:block">
<div className="text-xs font-medium text-gray-900">Alex Candidate</div>
<div className="text-[10px] text-gray-400 tracking-wide uppercase">ID: 8493-XJ</div>
</div>
<div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center text-gray-500 border border-gray-200">
<iconify-icon className="text-lg" icon="solar:user-linear"></iconify-icon>
</div>
</div>
<button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded shadow-sm text-xs font-medium transition-colors ml-2" onclick="showModal('submit-modal')">
                Finish Test
            </button>
</div>
</header>

<main className="flex-1 flex overflow-hidden relative">

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0 transform transition-transform duration-300" id="sidebar">
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Navigator</span>
<span className="text-xs text-gray-400">Section 1/3</span>
</div>

<div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden mb-2">
<div className="h-full bg-blue-600 w-1/4 rounded-full"></div>
</div>
<div className="flex justify-between text-[10px] text-gray-400">
<span>3 Answered</span>
<span>12 Remaining</span>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4">
<div className="grid grid-cols-5 gap-2" id="question-grid">

<button className="h-8 w-8 rounded flex items-center justify-center text-xs font-medium bg-blue-600 text-white shadow-sm transition-all" onclick="switchScreen('mcq')">1</button>
<button className="h-8 w-8 rounded flex items-center justify-center text-xs font-medium bg-green-50 text-green-700 border border-green-200 transition-all">2</button>
<button className="h-8 w-8 rounded flex items-center justify-center text-xs font-medium bg-white text-gray-600 border border-gray-200 hover:border-gray-300 transition-all">3</button>
<button className="h-8 w-8 rounded flex items-center justify-center text-xs font-medium bg-orange-50 text-orange-700 border border-orange-200 relative transition-all">
                        4
                        <div className="absolute -top-1 -right-1 h-2 w-2 bg-orange-500 rounded-full border border-white"></div>
</button>
<button className="h-8 w-8 rounded flex items-center justify-center text-xs font-medium bg-white text-gray-600 border border-gray-200 transition-all">5</button>

<button className="h-8 w-8 rounded flex items-center justify-center text-xs font-medium bg-white text-gray-600 border border-gray-200 transition-all" onclick="switchScreen('coding')">6</button>
<button className="h-8 w-8 rounded flex items-center justify-center text-xs font-medium bg-white text-gray-400 border border-gray-100 transition-all cursor-not-allowed">7</button>
<button className="h-8 w-8 rounded flex items-center justify-center text-xs font-medium bg-white text-gray-400 border border-gray-100 transition-all cursor-not-allowed">8</button>
</div>
</div>
<div className="p-4 border-t border-gray-100 bg-gray-50/50">
<div className="grid grid-cols-2 gap-y-2 gap-x-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-600"></div>
<span className="text-[10px] text-gray-500">Current</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-[10px] text-gray-500">Answered</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-orange-400"></div>
<span className="text-[10px] text-gray-500">Review</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full border border-gray-300 bg-white"></div>
<span className="text-[10px] text-gray-500">Unvisited</span>
</div>
</div>
</div>
</aside>

<div className="flex-1 bg-white relative flex flex-col h-full overflow-hidden" id="main-content">

<div className="hidden absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-50 border border-red-100 text-red-700 px-4 py-3 rounded shadow-sm z-30 flex items-center gap-3 w-auto max-w-sm" id="time-warning">
<iconify-icon className="text-lg text-red-500" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<p className="text-xs font-semibold">10 Minutes Remaining</p>
<p className="text-[10px] opacity-80">Please review your flagged questions.</p>
</div>
<button className="ml-auto hover:bg-red-100 rounded p-1" onclick="document.getElementById('time-warning').classList.add('hidden')">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<section className="h-full flex flex-col max-w-3xl mx-auto w-full p-12 overflow-y-auto fade-enter-active" id="view-instructions">
<div className="mb-8">
<h1 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">Technical Assessment Module B</h1>
<p className="text-gray-500">Duration: 90 Minutes • 15 Questions</p>
</div>
<div className="space-y-6">
<div className="bg-gray-50 rounded border border-gray-200 p-6">
<h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:info-circle-linear"></iconify-icon>
                            General Instructions
                        </h3>
<ul className="space-y-2 text-gray-600 list-disc list-inside ml-1">
<li>Ensure you have a stable internet connection.</li>
<li>Do not refresh the page or use the back button.</li>
<li>Full screen mode is monitored. Switching tabs will be logged.</li>
<li>Calculators are not permitted for this section.</li>
</ul>
</div>
<div className="bg-gray-50 rounded border border-gray-200 p-6">
<h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:code-square-linear"></iconify-icon>
                            Coding Environment
                        </h3>
<ul className="space-y-2 text-gray-600 list-disc list-inside ml-1">
<li>Supported languages: Java 17, Python 3.9, C++ 20.</li>
<li>Standard libraries are available.</li>
<li>Execution time limit: 2.0 seconds per test case.</li>
</ul>
</div>
</div>
<div className="mt-auto pt-8 border-t border-gray-100 flex justify-end">
<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded shadow-sm text-sm font-medium transition-all flex items-center gap-2 group" onclick="switchScreen('mcq')">
                        Start Assessment
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<section className="hidden h-full flex flex-col overflow-hidden" id="view-mcq">

<div className="px-8 py-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
<div>
<span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Question 1 of 15</span>
<h2 className="text-lg font-medium text-gray-900 tracking-tight">System Architecture Principles</h2>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
<iconify-icon className="text-green-500" icon="solar:cloud-check-linear"></iconify-icon>
<span>Saved</span>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
<iconify-icon icon="solar:flag-linear"></iconify-icon>
                            Mark for Review
                        </button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-3xl">
<p className="text-base text-gray-700 leading-relaxed mb-8">
                            Which of the following describes the CAP theorem correctly in the context of distributed systems? 
                            <br/><br/>
                            Consider a scenario where a network partition occurs. According to the CAP theorem, a system must choose between:
                        </p>
<div className="space-y-3">

<label className="block cursor-pointer group">
<input className="custom-radio hidden peer" name="q1" type="radio"/>
<div className="flex items-start gap-4 p-4 rounded border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 peer-checked:bg-blue-50/30">
<div className="mt-0.5 w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center shrink-0 bg-white group-hover:border-gray-400 peer-checked:border-blue-600 peer-checked:bg-blue-600">
<div className="radio-dot w-1.5 h-1.5 bg-white rounded-full transform scale-0 transition-transform"></div>
</div>
<span className="text-gray-700 peer-checked:text-gray-900">Consistency and Availability</span>
</div>
</label>

<label className="block cursor-pointer group">
<input className="custom-radio hidden peer" name="q1" type="radio"/>
<div className="flex items-start gap-4 p-4 rounded border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 peer-checked:bg-blue-50/30">
<div className="mt-0.5 w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center shrink-0 bg-white group-hover:border-gray-400 peer-checked:border-blue-600 peer-checked:bg-blue-600">
<div className="radio-dot w-1.5 h-1.5 bg-white rounded-full transform scale-0 transition-transform"></div>
</div>
<span className="text-gray-700 peer-checked:text-gray-900">Availability and Partition Tolerance</span>
</div>
</label>

<label className="block cursor-pointer group">
<input className="custom-radio hidden peer" name="q1" type="radio"/>
<div className="flex items-start gap-4 p-4 rounded border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 peer-checked:bg-blue-50/30">
<div className="mt-0.5 w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center shrink-0 bg-white group-hover:border-gray-400 peer-checked:border-blue-600 peer-checked:bg-blue-600">
<div className="radio-dot w-1.5 h-1.5 bg-white rounded-full transform scale-0 transition-transform"></div>
</div>
<span className="text-gray-700 peer-checked:text-gray-900">Consistency and Latency</span>
</div>
</label>
</div>
</div>
</div>
<div className="px-8 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center">
<button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 disabled:opacity-50 transition-colors" disabled="">
                        Previous
                    </button>
<div className="flex gap-3">
<button className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded shadow-sm transition-colors" onclick="switchScreen('coding')">
                            Next Question
                        </button>
</div>
</div>
</section>

<section className="hidden h-full flex flex-col" id="view-coding">

<div className="h-12 border-b border-gray-200 bg-white flex items-center justify-between px-4 shrink-0">
<div className="flex items-center gap-4">
<span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Q6: Coding</span>
<div className="h-4 w-px bg-gray-200"></div>
<select className="text-xs font-medium text-gray-700 bg-transparent border-none focus:ring-0 cursor-pointer hover:text-gray-900">
<option>Python 3.9</option>
<option>Java 17</option>
<option>C++ 20</option>
</select>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:play-linear"></iconify-icon>
                            Run Code
                        </button>
<button className="px-3 py-1.5 rounded text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-1.5 shadow-sm" onclick="switchScreen('review')">
<iconify-icon icon="solar:upload-minimalistic-linear"></iconify-icon>
                            Submit
                        </button>
</div>
</div>
<div className="flex-1 flex overflow-hidden">

<div className="w-1/3 bg-white border-r border-gray-200 overflow-y-auto p-6">
<h2 className="text-base font-medium text-gray-900 mb-4">Array Rotation Algorithm</h2>
<div className="prose prose-sm prose-gray max-w-none text-gray-600 text-xs leading-relaxed">
<p className="mb-4">Given an array of integers <code>nums</code>, rotate the array to the right by <code>k</code> steps, where <code>k</code> is non-negative.</p>
<h4 className="font-medium text-gray-900 mt-4 mb-2">Example 1:</h4>
<div className="bg-gray-50 p-3 rounded border border-gray-100 font-mono text-xs mb-4">
<strong>Input:</strong> nums = [1,2,3,4,5,6,7], k = 3<br/>
<strong>Output:</strong> [5,6,7,1,2,3,4]<br/>
<strong>Explanation:</strong><br/>
                                rotate 1 steps to the right: [7,1,2,3,4,5,6]<br/>
                                rotate 2 steps to the right: [6,7,1,2,3,4,5]<br/>
                                rotate 3 steps to the right: [5,6,7,1,2,3,4]
                            </div>
<h4 className="font-medium text-gray-900 mt-4 mb-2">Constraints:</h4>
<ul className="list-disc list-inside">
<li>1 &lt;= nums.length &lt;= 10^5</li>
<li>0 &lt;= k &lt;= 10^5</li>
</ul>
</div>
</div>

<div className="flex-1 flex flex-col bg-gray-900 text-gray-100">
<div className="flex-1 overflow-y-auto font-mono text-sm p-4 leading-6 relative">

<div className="absolute left-0 top-4 bottom-0 w-10 text-right pr-3 text-gray-600 select-none text-xs leading-6">
                                1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9
                            </div>

<div className="pl-10 outline-none" contenteditable="true" spellcheck="false">
<span className="token-keyword">class</span> Solution:
    <span className="token-keyword">def</span> <span className="token-function">rotate</span>(self, nums: List[int], k: int) -&gt; <span className="token-keyword">None</span>:
        <span className="token-comment">"""
        Do not return anything, modify nums in-place instead.
        """</span>
        k = k % <span className="token-function">len</span>(nums)
        <span className="token-keyword">if</span> k &gt; 0:
            nums[:] = nums[-k:] + nums[:-k]
                            </div>
</div>

<div className="h-32 border-t border-gray-700 bg-gray-900 p-3 font-mono text-xs overflow-y-auto">
<div className="flex justify-between items-center mb-2">
<span className="text-gray-400 text-[10px] uppercase tracking-wider">Console Output</span>
<span className="text-green-500 text-[10px]">Test Case 1: Passed</span>
</div>
<div className="text-gray-300">
                                &gt; Executing solution.py...<br/>
                                &gt; Input: [1,2,3,4,5,6,7], k=3<br/>
                                &gt; Output: [5,6,7,1,2,3,4]<br/>
                                &gt; Execution time: 0.04s
                            </div>
</div>
</div>
</div>
</section>

<section className="hidden h-full flex flex-col p-12 overflow-y-auto bg-gray-50" id="view-review">
<div className="max-w-4xl mx-auto w-full">
<h1 className="text-2xl font-medium tracking-tight text-gray-900 mb-6">Test Summary</h1>
<div className="grid grid-cols-4 gap-6 mb-8">
<div className="bg-white p-4 rounded border border-gray-200 shadow-sm">
<div className="text-gray-500 text-xs mb-1">Total Questions</div>
<div className="text-2xl font-semibold text-gray-900">15</div>
</div>
<div className="bg-white p-4 rounded border border-gray-200 shadow-sm">
<div className="text-green-600 text-xs mb-1">Answered</div>
<div className="text-2xl font-semibold text-gray-900">11</div>
</div>
<div className="bg-white p-4 rounded border border-gray-200 shadow-sm border-l-4 border-l-orange-400">
<div className="text-orange-600 text-xs mb-1">Marked for Review</div>
<div className="text-2xl font-semibold text-gray-900">1</div>
</div>
<div className="bg-white p-4 rounded border border-gray-200 shadow-sm">
<div className="text-gray-400 text-xs mb-1">Not Visited</div>
<div className="text-2xl font-semibold text-gray-900">3</div>
</div>
</div>
<div className="bg-white rounded border border-gray-200 overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-gray-100 font-medium text-sm text-gray-900">Question Status</div>
<div className="p-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<button className="flex items-center justify-between p-3 rounded border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group" onclick="switchScreen('mcq')">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-blue-600 text-white text-xs font-medium flex items-center justify-center">1</div>
<span className="text-xs text-gray-600 font-medium group-hover:text-blue-700">System Architecture</span>
</div>
<span className="text-[10px] text-gray-400 uppercase">Answered</span>
</button>
<button className="flex items-center justify-between p-3 rounded border border-orange-100 bg-orange-50/30 hover:border-orange-300 transition-colors group">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-white border border-orange-400 text-orange-600 text-xs font-medium flex items-center justify-center">4</div>
<span className="text-xs text-gray-900 font-medium">Database Normalization</span>
</div>
<span className="text-[10px] text-orange-600 font-bold uppercase flex items-center gap-1">
<iconify-icon icon="solar:flag-linear"></iconify-icon> Review
                                    </span>
</button>
<button className="flex items-center justify-between p-3 rounded border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group" onclick="switchScreen('coding')">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-gray-100 text-gray-500 text-xs font-medium flex items-center justify-center">6</div>
<span className="text-xs text-gray-600 font-medium group-hover:text-blue-700">Array Rotation (Code)</span>
</div>
<span className="text-[10px] text-gray-400 uppercase">Visited</span>
</button>

</div>
</div>
</div>
<div className="flex justify-end gap-4 mt-8">
<button className="px-6 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors" onclick="switchScreen('mcq')">
                            Return to Questions
                        </button>
<button className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded text-sm font-medium shadow-sm transition-colors" onclick="showModal('submit-modal')">
                            Submit Assessment
                        </button>
</div>
</div>
</section>
</div>
</main>

<div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-50 hidden flex items-center justify-center opacity-0 transition-opacity duration-200" id="submit-modal">
<div className="bg-white rounded-lg shadow-xl border border-gray-200 w-full max-w-md p-6 transform scale-95 transition-transform duration-200" id="modal-content">
<div className="flex items-center gap-3 mb-4 text-orange-600">
<iconify-icon className="text-xl" icon="solar:danger-triangle-linear"></iconify-icon>
<h3 className="text-lg font-medium text-gray-900">Confirm Submission</h3>
</div>
<p className="text-sm text-gray-600 mb-6 leading-relaxed">
                You have <span className="font-bold text-gray-900">1 flagged question</span> and <span className="font-bold text-gray-900">3 unvisited questions</span>. 
                <br/><br/>
                Once you submit, you cannot return to this module. Are you sure you want to finish?
            </p>
<div className="flex justify-end gap-3">
<button className="px-4 py-2 border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors" onclick="hideModal('submit-modal')">
                    Back to Test
                </button>
<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium shadow-sm transition-colors" onclick="alert('Assessment Submitted. Thank you.')">
                    Yes, Submit
                </button>
</div>
</div>
</div>


    </>
  );
}
