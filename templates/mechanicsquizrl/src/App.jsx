import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
rl: {
blue: '#0090df',
orange: '#f05133',
dark: '#0a0a0a',
card: '#121212',
border: '#27272a'
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.4s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        const questions = [
            // Gamesense
            { category: "Rotation", text: "In 3v3, when the first man loses the ball in the opponent's corner, where should they rotate?", options: ["Chase the ball", "Through the middle for bumps", "Wide, away from the play (Backpost)", "Stop and wait"], correct: 2 },
            { category: "Defense", text: "When 'Shadow Defending', which direction should your car face?", options: ["Towards your own net", "Towards the opponent's net", "Perpendicular to the ball", "Sideways"], correct: 0 },
            { category: "Defense", text: "As the 'Last Man' in 3v3, what is the most dangerous mistake?", options: ["Missing boost", "Double committing", "Staying in net", "Clearing softly"], correct: 1 },
            { category: "Positioning", text: "On a standard kickoff (Left goes), what should the 2nd man (Right/Middle) usually do?", options: ["Go for corner boost", "Cheat up slowly", "Stay in net", "Reverse"], correct: 1 },
            { category: "Decision", text: "Your teammate is dribbling the ball. What should you do?", options: ["Drive right behind them", "Position for a pass or 50/50 spill", "Demo the goalkeeper immediately", "Go all the way back to your net"], correct: 1 },
            { category: "Rotation", text: "Why do we rotate to the 'Backpost' on defense?", options: ["To get boost", "To see the entire field and cover the net", "To avoid bumping teammates", "It's slower but safer"], correct: 1 },
            { category: "Boost", text: "Which pathing is generally superior for maintaining momentum in rotation?", options: ["Small pad lines", "Corner to corner large pads", "Mid-boost only", "Staying still to save boost"], correct: 0 },
            { category: "Offense", text: "If both teammates are in the opponent's corner, where should you be?", options: ["In the corner with them", "Midfield (safety/containment)", "In their net", "In your own net"], correct: 1 },
            { category: "Defense", text: "When clearing the ball from your own corner, where is the safest place to hit it?", options: ["Across your own net", "High towards the sidewall", "Softly to the middle", "Directly at the opponent"], correct: 1 },
            { category: "1v1 Gamesense", text: "In a 1v1 kickoff, if you lose the kickoff cleanly to your corner, what should you grab?", options: ["Mid boost", "Corner boost", "Small pads", "Opponent's boost"], correct: 2 },
            
            // Mechanics
            { category: "Mechanics", text: "What is a 'Speed Flip' essentially?", options: ["A fast front flip", "A diagonal flip canceled immediately", "A side flip with boost", "A double jump"], correct: 1 },
            { category: "Mechanics", text: "To perform a 'Half Flip', you backflip and then...", options: ["Hold air roll", "Cancel the flip forward + air roll", "Press jump again", "Release the stick"], correct: 1 },
            { category: "Mechanics", text: "What is the primary benefit of a 'Wave Dash'?", options: ["Gaining speed without using much boost", "Looking cool", "Hiding behind the ball", "Stopping quickly"], correct: 0 },
            { category: "Mechanics", text: "How many jumps do you have after falling off the ceiling (without jumping)?", options: ["Zero", "One", "Unlimited time to use one", "Two"], correct: 2 },
            { category: "Mechanics", text: "To get a 'Flip Reset', which part of your car must touch the ball?", options: ["The bumper", "The roof", "All four wheels", "The spoiler"], correct: 2 },
            { category: "Mechanics", text: "What input performs a 'Fast Aerial'?", options: ["Jump + Boost", "Jump + Lean Back + Boost", "Jump + Lean Back + Jump + Boost", "Double Jump + Boost"], correct: 2 },
            { category: "Mechanics", text: "How long do you have to use your second jump after the first jump (on flat ground)?", options: ["1.0 seconds", "1.5 seconds", "2.0 seconds", "Unlimited"], correct: 1 },
            { category: "Mechanics", text: "What happens if you hold 'Powerslide' while landing awkwardly?", options: ["You lose all momentum", "You maintain momentum", "You flip automatically", "You demo yourself"], correct: 1 },
            { category: "Mechanics", text: "A 'Musty Flick' relies on the car rotating past what vertical degree?", options: ["45 degrees", "90 degrees", "180 degrees", "360 degrees"], correct: 1 },
            { category: "Mechanics", text: "What is a 'Stall' mechanic?", options: ["Stopping mid-air completely", "Using air roll left/right + opposite steer to hover vertically", "Breaking on the ground", "Fake challenging"], correct: 1 },

            // Advanced / Mixed
            { category: "Decision", text: "In a 'Fake Challenge', what is the primary goal?", options: ["To demo the opponent", "To force the opponent to give away possession", "To hit the ball", "To steal boost"], correct: 1 },
            { category: "Boost", text: "How much boost does a small pad give?", options: ["10", "12", "15", "8"], correct: 1 },
            { category: "Mechanics", text: "Which hitbox is the 'Fennec'?", options: ["Dominus", "Hybrid", "Octane", "Breakout"], correct: 2 },
            { category: "Defense", text: "What is 'shadowing distance'?", options: ["Touching the opponent's bumper", "Keeping enough space to react to a flick but close enough to challenge", "Staying in your net", "Being on the ceiling"], correct: 1 },
            { category: "Strategy", text: "What is a '50/50'?", options: ["A coin flip", "Two cars hitting the ball simultaneously", "A type of flick", "Half boost management"], correct: 1 },
            { category: "Mechanics", text: "To hit the ball with maximum power, you should generally hit it with...", options: ["The wheels", "The roof", "The corner of the front bumper", "The side"], correct: 2 },
            { category: "Recovery", text: "What is the fastest way to get down from the wall?", options: ["Driving down", "Jumping off", "Wave dashing off", "Falling naturally"], correct: 2 },
            { category: "Strategy", text: "When your teammate has full possession and is dribbling, you should NOT:", options: ["Take the ball from them", "Position for a pass", "Cover behind", "Steal opponent boost"], correct: 0 },
            { category: "Mechanics", text: "What allows you to turn faster on the ground?", options: ["Boosting", "Braking", "Feathering Powerslide", "Reverse"], correct: 2 },
            { category: "Decision", text: "At 0 seconds, ball is in the air, your team is winning by 1. What do you do?", options: ["Musty flick it", "Try to score again", "Let it hit the ground", "Pass it mid"], correct: 2 }
        ];

        let currentQuestion = 0;
        let score = 0;
        let selectedOption = null;

        // DOM Elements
        const startScreen = document.getElementById('start-screen');
        const quizScreen = document.getElementById('quiz-screen');
        const resultsScreen = document.getElementById('results-screen');
        const headerProgress = document.getElementById('header-progress');
        
        const questionText = document.getElementById('question-text');
        const questionCategory = document.getElementById('question-category');
        const optionsContainer = document.getElementById('options-container');
        const progressFill = document.getElementById('progress-fill');
        const questionTracker = document.getElementById('question-tracker');
        const nextBtn = document.getElementById('next-btn');

        function startQuiz() {
            startScreen.classList.add('hidden');
            quizScreen.classList.remove('hidden');
            headerProgress.classList.remove('hidden');
            renderQuestion();
        }

        function renderQuestion() {
            const q = questions[currentQuestion];
            questionText.innerText = q.text;
            questionCategory.innerText = q.category.toUpperCase();
            questionTracker.innerText = `${currentQuestion + 1} / ${questions.length}`;
            
            // Update Progress
            const progressPct = ((currentQuestion) / questions.length) * 100;
            progressFill.style.width = `${progressPct}%`;

            optionsContainer.innerHTML = '';
            selectedOption = null;
            nextBtn.disabled = true;
            nextBtn.innerText = currentQuestion === questions.length - 1 ? 'Finish' : 'Next';

            q.options.forEach((opt, index) => {
                const btn = document.createElement('div');
                btn.className = `
                    relative group flex items-center p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 
                    cursor-pointer transition-all duration-200 hover:bg-zinc-800 hover:border-zinc-700
                `;
                btn.onclick = () => selectOption(index, btn);
                btn.innerHTML = `
                    <div class="flex items-center justify-center w-5 h-5 rounded-full border border-zinc-600 mr-4 transition-colors group-hover:border-zinc-400 radio-circle">
                        <div class="w-2.5 h-2.5 rounded-full bg-white opacity-0 transition-opacity"></div>
                    </div>
                    <span class="text-sm sm:text-base font-light text-zinc-300 group-hover:text-white transition-colors">${opt}</span>
                `;
                optionsContainer.appendChild(btn);
            });
        }

        function selectOption(index, element) {
            // clear previous styles
            Array.from(optionsContainer.children).forEach(child => {
                child.classList.remove('border-blue-500', 'bg-blue-500/10');
                child.classList.add('border-zinc-800', 'bg-zinc-900/30');
                child.querySelector('.radio-circle').classList.remove('border-blue-500', 'bg-blue-500');
                child.querySelector('.radio-circle').classList.add('border-zinc-600');
                child.querySelector('.radio-circle div').classList.add('opacity-0');
            });

            // Set active style
            selectedOption = index;
            element.classList.remove('border-zinc-800', 'bg-zinc-900/30');
            element.classList.add('border-blue-500', 'bg-blue-500/10');
            
            const radio = element.querySelector('.radio-circle');
            radio.classList.remove('border-zinc-600');
            radio.classList.add('border-blue-500', 'bg-blue-500');
            radio.querySelector('div').classList.remove('opacity-0');

            nextBtn.disabled = false;
        }

        function nextQuestion() {
            if (selectedOption === null) return;

            if (selectedOption === questions[currentQuestion].correct) {
                score++;
            }

            currentQuestion++;

            if (currentQuestion < questions.length) {
                renderQuestion();
            } else {
                showResults();
            }
        }

        function showResults() {
            quizScreen.classList.add('hidden');
            headerProgress.classList.add('hidden');
            resultsScreen.classList.remove('hidden');

            const percentage = Math.round((score / questions.length) * 100);
            document.getElementById('score-percentage').innerText = `${percentage}%`;
            document.getElementById('correct-count').innerText = score;
            document.getElementById('incorrect-count').innerText = questions.length - score;

            // Animate Circle
            const circle = document.getElementById('score-circle');
            const circumference = 440; 
            const offset = circumference - (percentage / 100) * circumference;
            // Delay slightly to allow display block to process
            setTimeout(() => {
                circle.style.strokeDashoffset = offset;
            }, 100);

            // Determine Rank
            let title = "Bronze I";
            let desc = "Heavy car bug? Or just bad rotations?";
            let color = "text-orange-700";

            if (percentage >= 100) {
                title = "Supersonic Legend";
                desc = "Perfect reads. You are the carry.";
                color = "text-purple-200";
            } else if (percentage >= 90) {
                title = "Grand Champion";
                desc = "Clean mechanics and solid brain.";
                color = "text-red-500";
            } else if (percentage >= 75) {
                title = "Champion";
                desc = "Good speed, just need more consistency.";
                color = "text-purple-500";
            } else if (percentage >= 50) {
                title = "Diamond";
                desc = "Stop whiffing and rotate backpost.";
                color = "text-blue-400";
            } else if (percentage >= 30) {
                title = "Gold";
                desc = "Turn off ball cam sometimes.";
                color = "text-yellow-500";
            }

            const rankTitle = document.getElementById('rank-title');
            rankTitle.innerText = title;
            rankTitle.className = `text-3xl font-medium tracking-tight ${color}`;
            document.getElementById('rank-desc').innerText = desc;
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full border-b border-white/5 backdrop-blur-md sticky top-0 z-50 bg-black/50">
<div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-blue-500" data-height="20" data-icon="lucide:brain-circuit" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-sm font-medium tracking-tight text-white uppercase">RL IQ Test</span>
</div>
<div className="hidden flex items-center gap-3 text-xs font-medium text-zinc-500" id="header-progress">
<span id="question-tracker">0 / 30</span>
</div>
</div>
</header>

<main className="flex-grow flex items-center justify-center p-4 sm:p-6 w-full max-w-3xl mx-auto relative">

<div className="w-full max-w-xl text-center space-y-8 animate-fade-in" id="start-screen">
<div className="space-y-4">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 mb-4 shadow-xl shadow-blue-900/10">
<span className="iconify text-white" data-height="32" data-icon="lucide:swords" data-strokeWidth="1.5" data-width="32"></span>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">Mechanics &amp; Gamesense</h1>
<p className="text-lg text-zinc-400 font-light max-w-md mx-auto leading-relaxed">
                    Test your rotation logic, recovery mechanics, and decision making. 
                    <br/>Do you actually know how to play 3v3?
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-lg mx-auto">
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl backdrop-blur-sm">
<div className="flex items-center gap-2 mb-1 text-zinc-200">
<span className="iconify" data-icon="lucide:crosshair" data-width="16"></span>
<span className="text-sm font-medium">Inputs</span>
</div>
<p className="text-xs text-zinc-500">Technical knowledge.</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl backdrop-blur-sm">
<div className="flex items-center gap-2 mb-1 text-zinc-200">
<span className="iconify" data-icon="lucide:users" data-width="16"></span>
<span className="text-sm font-medium">Rotation</span>
</div>
<p className="text-xs text-zinc-500">Positioning logic.</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl backdrop-blur-sm">
<div className="flex items-center gap-2 mb-1 text-zinc-200">
<span className="iconify" data-icon="lucide:zap" data-width="16"></span>
<span className="text-sm font-medium">Speed</span>
</div>
<p className="text-xs text-zinc-500">Management &amp; pace.</p>
</div>
</div>
<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-zinc-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-black" onclick="startQuiz()">
<span className="mr-2">Start Analysis</span>
<span className="iconify transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>

<div className="hidden w-full space-y-6 animate-slide-up" id="quiz-screen">

<div className="w-full bg-zinc-900 rounded-full h-1 overflow-hidden">
<div className="bg-blue-500 h-full rounded-full transition-all duration-500 ease-out" id="progress-fill" style={{width: '0%'}}></div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm relative overflow-hidden">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10">
<span className="inline-block px-2.5 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-400 mb-4 tracking-wide" id="question-category">
                        MECHANICS
                    </span>
<h2 className="text-xl sm:text-2xl font-medium text-white leading-snug tracking-tight mb-8" id="question-text">

</h2>
<div className="grid grid-cols-1 gap-3" id="options-container">

</div>
</div>
</div>

<div className="flex items-center justify-between pt-2">
<button className="ml-auto inline-flex items-center justify-center h-10 px-6 rounded-lg bg-white text-black text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-200" disabled="" id="next-btn" onclick="nextQuestion()">
                    Next
                </button>
</div>
</div>

<div className="hidden w-full max-w-lg mx-auto text-center space-y-8 animate-slide-up" id="results-screen">
<div className="relative inline-flex items-center justify-center">
<svg className="w-40 h-40 transform -rotate-90">
<circle className="text-zinc-800" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-blue-500 transition-all duration-1000 ease-out" cx="80" cy="80" fill="transparent" id="score-circle" r="70" stroke="currentColor" stroke-dasharray="440" stroke-dashoffset="440" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-3xl font-semibold text-white tracking-tight" id="score-percentage">0%</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Game IQ</span>
</div>
</div>
<div className="space-y-2">
<h2 className="text-3xl font-medium text-white tracking-tight" id="rank-title"></h2>
<p className="text-zinc-400 font-light" id="rank-desc"></p>
</div>
<div className="grid grid-cols-2 gap-4 text-sm">
<div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
<span className="block text-zinc-500 text-xs uppercase tracking-wider mb-1">Correct</span>
<span className="text-xl font-medium text-emerald-400" id="correct-count">0</span>
</div>
<div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
<span className="block text-zinc-500 text-xs uppercase tracking-wider mb-1">Incorrect</span>
<span className="text-xl font-medium text-rose-400" id="incorrect-count">0</span>
</div>
</div>
<button className="w-full h-12 rounded-lg border border-zinc-700 text-white font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" onclick="location.reload()">
<span className="iconify" data-icon="lucide:rotate-ccw" data-width="16"></span>
                Play Again
            </button>
</div>
</main>
<footer className="py-6 text-center text-xs text-zinc-600">
<p>Fan-made quiz. Not affiliated with Psyonix.</p>
</footer>


    </>
  );
}
