import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Intelligence types and their icons
        const intelligenceTypes = {
            'Pattern Recognition': { icon: 'lucide:puzzle', color: 'violet' },
            'Explorer': { icon: 'lucide:compass', color: 'indigo' },
            'Stabilizer': { icon: 'lucide:shield', color: 'emerald' },
            'Social Intelligence': { icon: 'lucide:users', color: 'amber' }
        };

        // Questions database with anchored intelligence and option mappings
        const questionsDB = [
            {
                id: 1,
                text: "You're presented with a complex problem at work. What's your first instinct?",
                anchor: 'Pattern Recognition',
                anchorWeight: 1.5,
                options: [
                    { text: "Break it down into smaller components and look for underlying patterns", type: 'Pattern Recognition' },
                    { text: "Explore unconventional approaches and brainstorm new possibilities", type: 'Explorer' },
                    { text: "Follow established procedures that have worked before", type: 'Stabilizer' },
                    { text: "Discuss with colleagues to gather different perspectives", type: 'Social Intelligence' }
                ]
            },
            {
                id: 2,
                text: "When planning a vacation, you typically:",
                anchor: 'Explorer',
                anchorWeight: 1.5,
                options: [
                    { text: "Research optimal routes and analyze cost-benefit of different options", type: 'Pattern Recognition' },
                    { text: "Leave room for spontaneous discoveries and unplanned adventures", type: 'Explorer' },
                    { text: "Book well-reviewed accommodations and create a detailed itinerary", type: 'Stabilizer' },
                    { text: "Ask friends for recommendations and plan group activities", type: 'Social Intelligence' }
                ]
            },
            {
                id: 3,
                text: "In a team meeting, you notice tension between two colleagues. You would:",
                anchor: 'Social Intelligence',
                anchorWeight: 1.5,
                options: [
                    { text: "Analyze the root cause of the conflict logically", type: 'Pattern Recognition' },
                    { text: "Suggest an innovative approach to reframe the discussion", type: 'Explorer' },
                    { text: "Refer to company guidelines on conflict resolution", type: 'Stabilizer' },
                    { text: "Privately speak with each person to understand their feelings", type: 'Social Intelligence' }
                ]
            },
            {
                id: 4,
                text: "When learning a new skill, you prefer to:",
                anchor: 'Stabilizer',
                anchorWeight: 1.5,
                options: [
                    { text: "Understand the underlying principles and theory first", type: 'Pattern Recognition' },
                    { text: "Dive in and experiment through trial and error", type: 'Explorer' },
                    { text: "Follow a structured course with clear milestones", type: 'Stabilizer' },
                    { text: "Learn alongside others or find a mentor", type: 'Social Intelligence' }
                ]
            },
            {
                id: 5,
                text: "A friend asks for advice about a major life decision. You:",
                anchor: 'Social Intelligence',
                anchorWeight: 1.5,
                options: [
                    { text: "Help them create a pros and cons analysis", type: 'Pattern Recognition' },
                    { text: "Encourage them to trust their gut and take risks", type: 'Explorer' },
                    { text: "Share what worked for you in similar situations", type: 'Stabilizer' },
                    { text: "Listen carefully and help them process their emotions", type: 'Social Intelligence' }
                ]
            },
            {
                id: 6,
                text: "When you see a news story about an unexpected event, you first think about:",
                anchor: 'Pattern Recognition',
                anchorWeight: 1.5,
                options: [
                    { text: "The chain of events that led to this outcome", type: 'Pattern Recognition' },
                    { text: "What new possibilities this might create", type: 'Explorer' },
                    { text: "How this disrupts normal systems and routines", type: 'Stabilizer' },
                    { text: "How people involved must be feeling", type: 'Social Intelligence' }
                ]
            },
            {
                id: 7,
                text: "Your ideal weekend activity would be:",
                anchor: 'Explorer',
                anchorWeight: 1.5,
                options: [
                    { text: "Working on a puzzle or strategic game", type: 'Pattern Recognition' },
                    { text: "Exploring a new neighborhood or trying a new hobby", type: 'Explorer' },
                    { text: "Catching up on routine tasks and relaxing at home", type: 'Stabilizer' },
                    { text: "Hosting friends or attending a social gathering", type: 'Social Intelligence' }
                ]
            },
            {
                id: 8,
                text: "When faced with uncertainty, you feel most comfortable when you:",
                anchor: 'Stabilizer',
                anchorWeight: 1.5,
                options: [
                    { text: "Can identify patterns to predict likely outcomes", type: 'Pattern Recognition' },
                    { text: "See it as an opportunity for growth and discovery", type: 'Explorer' },
                    { text: "Have a backup plan and safety net in place", type: 'Stabilizer' },
                    { text: "Have supportive people around you", type: 'Social Intelligence' }
                ]
            },
            {
                id: 9,
                text: "In a new work environment, you would first focus on:",
                anchor: 'Social Intelligence',
                anchorWeight: 1.5,
                options: [
                    { text: "Understanding the systems and processes", type: 'Pattern Recognition' },
                    { text: "Finding opportunities to bring fresh ideas", type: 'Explorer' },
                    { text: "Learning the established rules and expectations", type: 'Stabilizer' },
                    { text: "Building relationships with your colleagues", type: 'Social Intelligence' }
                ]
            },
            {
                id: 10,
                text: "When reading a book or watching a film, you most appreciate:",
                anchor: 'Pattern Recognition',
                anchorWeight: 1.5,
                options: [
                    { text: "Clever plot twists and intricate storylines", type: 'Pattern Recognition' },
                    { text: "Unique perspectives and unconventional narratives", type: 'Explorer' },
                    { text: "Classic stories with satisfying conclusions", type: 'Stabilizer' },
                    { text: "Deep character development and emotional depth", type: 'Social Intelligence' }
                ]
            },
            {
                id: 11,
                text: "When your regular routine is disrupted, you typically:",
                anchor: 'Explorer',
                anchorWeight: 1.5,
                reverseKey: true,
                options: [
                    { text: "Quickly analyze and adapt to the new situation", type: 'Pattern Recognition' },
                    { text: "Welcome the change as a refreshing break", type: 'Explorer' },
                    { text: "Feel unsettled until normalcy is restored", type: 'Stabilizer' },
                    { text: "Reach out to others to discuss the change", type: 'Social Intelligence' }
                ]
            },
            {
                id: 12,
                text: "When giving a presentation, you focus most on:",
                anchor: 'Social Intelligence',
                anchorWeight: 1.5,
                options: [
                    { text: "Logical flow and data-driven insights", type: 'Pattern Recognition' },
                    { text: "Creative visuals and innovative concepts", type: 'Explorer' },
                    { text: "Clear structure and proven frameworks", type: 'Stabilizer' },
                    { text: "Engaging the audience and reading the room", type: 'Social Intelligence' }
                ]
            },
            {
                id: 13,
                text: "When someone disagrees with you strongly, you tend to:",
                anchor: 'Pattern Recognition',
                anchorWeight: 1.5,
                options: [
                    { text: "Present logical arguments to support your position", type: 'Pattern Recognition' },
                    { text: "Consider whether their perspective offers new insights", type: 'Explorer' },
                    { text: "Reference established facts or expert opinions", type: 'Stabilizer' },
                    { text: "Try to find common ground and understand their viewpoint", type: 'Social Intelligence' }
                ]
            },
            {
                id: 14,
                text: "Your approach to organizing your living space is:",
                anchor: 'Stabilizer',
                anchorWeight: 1.5,
                options: [
                    { text: "Everything has a logical place based on function", type: 'Pattern Recognition' },
                    { text: "Organized chaos that sparks creativity", type: 'Explorer' },
                    { text: "Clean and tidy with designated spots for items", type: 'Stabilizer' },
                    { text: "Comfortable and welcoming for guests", type: 'Social Intelligence' }
                ]
            },
            {
                id: 15,
                text: "When making a significant purchase, you typically:",
                anchor: 'Pattern Recognition',
                anchorWeight: 1.5,
                options: [
                    { text: "Compare specifications and analyze reviews thoroughly", type: 'Pattern Recognition' },
                    { text: "Look for unique or innovative products", type: 'Explorer' },
                    { text: "Stick with trusted brands and recommendations", type: 'Stabilizer' },
                    { text: "Ask friends and family for their opinions", type: 'Social Intelligence' }
                ]
            },
            {
                id: 16,
                text: "In a crisis situation, others would describe you as:",
                anchor: 'Stabilizer',
                anchorWeight: 1.5,
                options: [
                    { text: "The one who quickly assesses the situation analytically", type: 'Pattern Recognition' },
                    { text: "The one who thinks outside the box for solutions", type: 'Explorer' },
                    { text: "The calm presence who follows emergency procedures", type: 'Stabilizer' },
                    { text: "The one who keeps everyone's spirits up", type: 'Social Intelligence' }
                ]
            },
            {
                id: 17,
                text: "When you receive critical feedback, your first response is to:",
                anchor: 'Social Intelligence',
                anchorWeight: 1.5,
                reverseKey: true,
                options: [
                    { text: "Analyze whether the feedback is objectively valid", type: 'Pattern Recognition' },
                    { text: "See it as an opportunity to grow and improve", type: 'Explorer' },
                    { text: "Compare it against established standards", type: 'Stabilizer' },
                    { text: "Consider the relationship with the person giving feedback", type: 'Social Intelligence' }
                ]
            },
            {
                id: 18,
                text: "When starting a new project, you prefer to:",
                anchor: 'Explorer',
                anchorWeight: 1.5,
                options: [
                    { text: "Create a detailed plan based on similar past projects", type: 'Pattern Recognition' },
                    { text: "Begin experimenting and see where it leads", type: 'Explorer' },
                    { text: "Follow a proven methodology step by step", type: 'Stabilizer' },
                    { text: "Assemble a team and define roles collaboratively", type: 'Social Intelligence' }
                ]
            },
            {
                id: 19,
                text: "Your biggest source of satisfaction at work is:",
                anchor: 'Pattern Recognition',
                anchorWeight: 1.5,
                options: [
                    { text: "Solving complex problems elegantly", type: 'Pattern Recognition' },
                    { text: "Bringing innovative ideas to life", type: 'Explorer' },
                    { text: "Consistently delivering reliable results", type: 'Stabilizer' },
                    { text: "Building strong relationships and helping others succeed", type: 'Social Intelligence' }
                ]
            },
            {
                id: 20,
                text: "When reflecting on your day, you most often think about:",
                anchor: 'Social Intelligence',
                anchorWeight: 1.5,
                options: [
                    { text: "What you learned and connections you made between ideas", type: 'Pattern Recognition' },
                    { text: "New experiences and interesting discoveries", type: 'Explorer' },
                    { text: "Tasks completed and progress toward goals", type: 'Stabilizer' },
                    { text: "Meaningful interactions with others", type: 'Social Intelligence' }
                ]
            }
        ];

        // Application state
        let currentUser = null;
        let currentSession = null;
        let currentQuestionIndex = 0;
        let shuffledQuestions = [];
        let responses = [];
        let questionStartTime = null;
        let testStartTime = null;
        let optionChanges = 0;
        let selectedOption = null;
        let questionTimer = null;
        let modalChart = null;

        // LocalStorage keys
        const STORAGE_KEY = 'cognitiveAssessmentResults';
        const ADMIN_PASSWORD = 'admin123';

        // Generate unique session ID
        function generateSessionId() {
            return 'sess_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
        }

        // Shuffle array (Fisher-Yates)
        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        // Start Assessment
        function startAssessment() {
            const nameInput = document.getElementById('userName');
            const name = nameInput.value.trim();
            
            if (!name) {
                document.getElementById('nameError').classList.remove('hidden');
                nameInput.classList.add('border-red-500');
                return;
            }

            // Check if user has already taken the test
            const existingResults = getStoredResults();
            const existingSession = existingResults.find(r => r.name.toLowerCase() === name.toLowerCase());
            
            if (existingSession) {
                alert('You have already completed this assessment. Each person can only take it once.');
                return;
            }

            currentUser = name;
            currentSession = generateSessionId();
            testStartTime = Date.now();
            
            // Shuffle questions and options
            shuffledQuestions = shuffleArray(questionsDB).map(q => ({
                ...q,
                shuffledOptions: shuffleArray(q.options.map((opt, idx) => ({ ...opt, originalIndex: idx })))
            }));

            document.getElementById('entryScreen').classList.add('hidden');
            document.getElementById('assessmentScreen').classList.remove('hidden');
            
            loadQuestion(0);
        }

        // Load Question
        function loadQuestion(index) {
            currentQuestionIndex = index;
            selectedOption = null;
            optionChanges = 0;
            questionStartTime = Date.now();
            
            const question = shuffledQuestions[index];
            document.getElementById('currentQuestion').textContent = index + 1;
            document.getElementById('totalQuestions').textContent = shuffledQuestions.length;
            document.getElementById('progressBar').style.width = `${((index + 1) / shuffledQuestions.length) * 100}%`;
            document.getElementById('questionText').textContent = question.text;
            
            const container = document.getElementById('optionsContainer');
            container.innerHTML = '';
            
            question.shuffledOptions.forEach((option, idx) => {
                const optionEl = document.createElement('button');
                optionEl.className = 'w-full text-left px-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-sm text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-200 flex items-start gap-3';
                optionEl.innerHTML = `
                    <span class="w-5 h-5 rounded-full border-2 border-zinc-600 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all option-indicator"></span>
                    <span>${option.text}</span>
                `;
                optionEl.onclick = () => selectOption(idx, optionEl);
                container.appendChild(optionEl);
            });
            
            updateNextButton(false);
            startQuestionTimer();
        }

        // Question timer
        function startQuestionTimer() {
            clearInterval(questionTimer);
            questionTimer = setInterval(() => {
                const elapsed = Math.floor((Date.now() - questionStartTime) / 1000);
                document.getElementById('questionTime').textContent = elapsed + 's';
            }, 1000);
        }

        // Select Option
        function selectOption(index, element) {
            if (selectedOption !== null && selectedOption !== index) {
                optionChanges++;
            }
            selectedOption = index;
            
            // Update UI
            document.querySelectorAll('#optionsContainer button').forEach((btn, idx) => {
                const indicator = btn.querySelector('.option-indicator');
                if (idx === index) {
                    btn.classList.remove('border-zinc-700', 'bg-zinc-800/50');
                    btn.classList.add('border-violet-500', 'bg-violet-500/10');
                    indicator.classList.remove('border-zinc-600');
                    indicator.classList.add('border-violet-500', 'bg-violet-500');
                    indicator.innerHTML = '<span class="iconify w-3 h-3 text-white" data-icon="lucide:check" style="stroke-width: 2;"></span>';
                } else {
                    btn.classList.add('border-zinc-700', 'bg-zinc-800/50');
                    btn.classList.remove('border-violet-500', 'bg-violet-500/10');
                    indicator.classList.add('border-zinc-600');
                    indicator.classList.remove('border-violet-500', 'bg-violet-500');
                    indicator.innerHTML = '';
                }
            });
            
            updateNextButton(true);
        }

        // Update Next Button
        function updateNextButton(enabled) {
            const btn = document.getElementById('nextBtn');
            if (enabled) {
                btn.disabled = false;
                btn.classList.remove('bg-zinc-800', 'text-zinc-500', 'cursor-not-allowed');
                btn.classList.add('bg-gradient-to-r', 'from-violet-600', 'to-indigo-600', 'hover:from-violet-500', 'hover:to-indigo-500', 'text-white');
            } else {
                btn.disabled = true;
                btn.classList.add('bg-zinc-800', 'text-zinc-500', 'cursor-not-allowed');
                btn.classList.remove('bg-gradient-to-r', 'from-violet-600', 'to-indigo-600', 'hover:from-violet-500', 'hover:to-indigo-500', 'text-white');
            }
        }

        // Next Question
        function nextQuestion() {
            clearInterval(questionTimer);
            
            const question = shuffledQuestions[currentQuestionIndex];
            const selectedOpt = question.shuffledOptions[selectedOption];
            const responseTime = Date.now() - questionStartTime;
            
            responses.push({
                questionId: question.id,
                questionText: question.text,
                selectedAnswer: selectedOpt.text,
                selectedType: selectedOpt.type,
                anchorType: question.anchor,
                anchorWeight: question.anchorWeight,
                isReverseKey: question.reverseKey || false,
                responseTime: responseTime,
                optionChanges: optionChanges
            });
            
            if (currentQuestionIndex < shuffledQuestions.length - 1) {
                loadQuestion(currentQuestionIndex + 1);
            } else {
                completeAssessment();
            }
        }

        // Complete Assessment
        function completeAssessment() {
            const testEndTime = Date.now();
            const results = calculateResults();
            
            const sessionData = {
                id: currentSession,
                name: currentUser,
                startTime: testStartTime,
                endTime: testEndTime,
                duration: testEndTime - testStartTime,
                responses: responses,
                scores: results.scores,
                dominantType: results.dominant,
                secondaryType: results.secondary,
                confidence: results.confidence,
                reliability: results.reliability,
                date: new Date().toISOString()
            };
            
            saveResult(sessionData);
            showResults(sessionData);
        }

        // Calculate Results
        function calculateResults() {
            const scores = {
                'Pattern Recognition': 0,
                'Explorer': 0,
                'Stabilizer': 0,
                'Social Intelligence': 0
            };
            
            let totalWeight = 0;
            let fastResponses = 0;
            let inconsistentResponses = 0;
            
            responses.forEach(response => {
                let weight = 1;
                
                // Apply anchor weight if selected type matches anchor
                if (response.selectedType === response.anchorType) {
                    weight = response.anchorWeight;
                }
                
                // Handle reverse key questions
                if (response.isReverseKey) {
                    // For reverse key, opposite type gets bonus
                    const opposites = {
                        'Pattern Recognition': 'Social Intelligence',
                        'Explorer': 'Stabilizer',
                        'Stabilizer': 'Explorer',
                        'Social Intelligence': 'Pattern Recognition'
                    };
                    if (response.selectedType === opposites[response.anchorType]) {
                        weight *= 0.8; // Slight penalty for predictable reverse response
                    }
                }
                
                scores[response.selectedType] += weight;
                totalWeight += weight;
                
                // Check for fast responses (less than 3 seconds)
                if (response.responseTime < 3000) {
                    fastResponses++;
                }
                
                // Check for inconsistent responses (many option changes)
                if (response.optionChanges > 2) {
                    inconsistentResponses++;
                }
            });
            
            // Convert to percentages
            Object.keys(scores).forEach(key => {
                scores[key] = Math.round((scores[key] / totalWeight) * 100);
            });
            
            // Get dominant and secondary
            const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
            const dominant = sorted[0][0];
            const secondary = sorted[1][0];
            
            // Calculate confidence
            let confidence = 'High';
            const topDiff = sorted[0][1] - sorted[1][1];
            
            if (topDiff < 5) {
                confidence = 'Low';
            } else if (topDiff < 15) {
                confidence = 'Medium';
            }
            
            // Calculate reliability
            let reliability = 'Normal';
            const avgResponseTime = responses.reduce((sum, r) => sum + r.responseTime, 0) / responses.length;
            
            if (fastResponses > 10 || avgResponseTime < 5000) {
                reliability = 'Low - Fast responses detected';
            } else if (inconsistentResponses > 5) {
                reliability = 'Low - Inconsistent responses detected';
            }
            
            return { scores, dominant, secondary, confidence, reliability };
        }

        // Save Result
        function saveResult(data) {
            const results = getStoredResults();
            results.push(data);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
        }

        // Get Stored Results
        function getStoredResults() {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        }

        // Show Results
        function showResults(data) {
            document.getElementById('assessmentScreen').classList.add('hidden');
            document.getElementById('resultsScreen').classList.remove('hidden');
            
            document.getElementById('resultsUserName').textContent = `Results for ${data.name}`;
            
            // Create radar chart
            const ctx = document.getElementById('resultsChart').getContext('2d');
            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Pattern\nRecognition', 'Explorer', 'Stabilizer', 'Social\nIntelligence'],
                    datasets: [{
                        label: 'Your Profile',
                        data: [
                            data.scores['Pattern Recognition'],
                            data.scores['Explorer'],
                            data.scores['Stabilizer'],
                            data.scores['Social Intelligence']
                        ],
                        backgroundColor: 'rgba(139, 92, 246, 0.2)',
                        borderColor: 'rgba(139, 92, 246, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(139, 92, 246, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(139, 92, 246, 1)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 50,
                            ticks: {
                                stepSize: 10,
                                color: '#71717a'
                            },
                            grid: {
                                color: '#3f3f46'
                            },
                            pointLabels: {
                                color: '#a1a1aa',
                                font: { size: 11 }
                            }
                        }
                    },
                    plugins: {
                        legend: { display: false }
                    }
                }
            });
            
            // Update dominant/secondary
            document.getElementById('dominantType').textContent = data.dominantType;
            document.getElementById('dominantPercent').textContent = `${data.scores[data.dominantType]}% affinity`;
            document.getElementById('dominantBar').style.width = `${data.scores[data.dominantType]}%`;
            document.getElementById('dominantIcon').setAttribute('data-icon', intelligenceTypes[data.dominantType].icon);
            
            document.getElementById('secondaryType').textContent = data.secondaryType;
            document.getElementById('secondaryPercent').textContent = `${data.scores[data.secondaryType]}% affinity`;
            document.getElementById('secondaryBar').style.width = `${data.scores[data.secondaryType]}%`;
            document.getElementById('secondaryIcon').setAttribute('data-icon', intelligenceTypes[data.secondaryType].icon);
            
            // Confidence badge
            const confidenceBadge = document.getElementById('confidenceBadge');
            const confidenceColors = {
                'High': 'bg-emerald-500/20 text-emerald-400',
                'Medium': 'bg-amber-500/20 text-amber-400',
                'Low': 'bg-red-500/20 text-red-400'
            };
            confidenceBadge.className = `px-3 py-1 rounded-full text-xs font-medium ${confidenceColors[data.confidence]}`;
            confidenceBadge.textContent = data.confidence;
            
            const confidenceTexts = {
                'High': 'Your responses showed clear and consistent patterns, indicating a reliable assessment of your cognitive preferences.',
                'Medium': 'Your responses showed some variation, suggesting you may have flexibility across different cognitive approaches.',
                'Low': 'Your responses showed significant variation. Consider retaking the assessment with more deliberate responses.'
            };
            document.getElementById('confidenceText').textContent = confidenceTexts[data.confidence];
            
            // Narrative
            const narratives = {
                'Pattern Recognition': `You naturally excel at identifying patterns, connections, and underlying structures in information. Your mind gravitates toward logical analysis and systematic problem-solving. You likely enjoy puzzles, strategic thinking, and finding elegant solutions to complex problems.`,
                'Explorer': `You thrive on novelty, creativity, and discovering new possibilities. Your mind is naturally curious and open to unconventional ideas. You likely enjoy brainstorming, experimenting, and pushing boundaries in your thinking.`,
                'Stabilizer': `You value reliability, consistency, and proven methods. Your mind seeks structure and order, preferring to build on established foundations. You likely excel at planning, organizing, and ensuring quality outcomes.`,
                'Social Intelligence': `You have a natural aptitude for understanding people, emotions, and social dynamics. Your mind is attuned to interpersonal connections and collaborative problem-solving. You likely excel at communication, empathy, and building relationships.`
            };
            document.getElementById('narrativeText').textContent = narratives[data.dominantType];
        }

        // Admin Functions
        function showAdminLogin() {
            document.getElementById('adminLoginModal').classList.remove('hidden');
            document.getElementById('adminLoginModal').classList.add('flex');
        }

        function hideAdminLogin() {
            document.getElementById('adminLoginModal').classList.add('hidden');
            document.getElementById('adminLoginModal').classList.remove('flex');
            document.getElementById('adminPassword').value = '';
            document.getElementById('adminError').classList.add('hidden');
        }

        function adminLogin() {
            const password = document.getElementById('adminPassword').value;
            if (password === ADMIN_PASSWORD) {
                hideAdminLogin();
                document.getElementById('entryScreen').classList.add('hidden');
                document.getElementById('adminDashboard').classList.remove('hidden');
                loadAdminDashboard();
            } else {
                document.getElementById('adminError').classList.remove('hidden');
            }
        }

        function logoutAdmin() {
            document.getElementById('adminDashboard').classList.add('hidden');
            document.getElementById('entryScreen').classList.remove('hidden');
        }

        function loadAdminDashboard() {
            const results = getStoredResults();
            
            // Update stats
            document.getElementById('statTotal').textContent = results.length;
            document.getElementById('statHigh').textContent = results.filter(r => r.confidence === 'High').length;
            document.getElementById('statMedium').textContent = results.filter(r => r.confidence === 'Medium').length;
            document.getElementById('statLow').textContent = results.filter(r => r.reliability.includes('Low')).length;
            
            renderResultsTable(results);
        }

        function renderResultsTable(results) {
            const tbody = document.getElementById('resultsTableBody');
            const noResults = document.getElementById('noResults');
            
            if (results.length === 0) {
                tbody.innerHTML = '';
                noResults.classList.remove('hidden');
                return;
            }
            
            noResults.classList.add('hidden');
            tbody.innerHTML = results.map(r => {
                const confidenceColors = {
                    'High': 'text-emerald-400',
                    'Medium': 'text-amber-400',
                    'Low': 'text-red-400'
                };
                const date = new Date(r.date).toLocaleDateString();
                
                return `
                    <tr class="border-b border-zinc-800 hover:bg-zinc-800/50">
                        <td class="px-4 py-3 text-sm text-white">${r.name}</td>
                        <td class="px-4 py-3 text-sm text-zinc-300">${r.dominantType}</td>
                        <td class="px-4 py-3 text-sm ${confidenceColors[r.confidence]}">${r.confidence}</td>
                        <td class="px-4 py-3 text-sm text-zinc-400">${date}</td>
                        <td class="px-4 py-3">
                            <button onclick="viewResult('${r.id}')" class="text-violet-400 hover:text-violet-300 text-sm">View Details</button>
                        </td>
                    </tr>
                `;
            }).join('');
        }

        function filterResults() {
            const typeFilter = document.getElementById('filterType').value;
            const dateFilter = document.getElementById('filterDate').value;
            let results = getStoredResults();
            
            if (typeFilter !== 'all') {
                results = results.filter(r => r.dominantType === typeFilter);
            }
            
            if (dateFilter) {
                results = results.filter(r => r.date.startsWith(dateFilter));
            }
            
            renderResultsTable(results);
        }

        function clearFilters() {
            document.getElementById('filterType').value = 'all';
            document.getElementById('filterDate').value = '';
            loadAdminDashboard();
        }

        function viewResult(sessionId) {
            const results = getStoredResults();
            const result = results.find(r => r.id === sessionId);
            
            if (!result) return;
            
            document.getElementById('modalUserName').textContent = result.name;
            document.getElementById('modalDate').textContent = new Date(result.date).toLocaleString();
            document.getElementById('modalSessionId').textContent = result.id;
            document.getElementById('modalDominant').textContent = result.dominantType;
            document.getElementById('modalSecondary').textContent = result.secondaryType;
            
            const confidenceColors = {
                'High': 'text-emerald-400',
                'Medium': 'text-amber-400',
                'Low': 'text-red-400'
            };
            const confEl = document.getElementById('modalConfidence');
            confEl.textContent = result.confidence;
            confEl.className = confidenceColors[result.confidence];
            
            const reliabilityEl = document.getElementById('modalReliability');
            reliabilityEl.textContent = result.reliability;
            reliabilityEl.className = result.reliability.includes('Low') ? 'text-red-400' : 'text-emerald-400';
            
            document.getElementById('modalDuration').textContent = formatDuration(result.duration);
            const avgTime = result.responses.reduce((sum, r) => sum + r.responseTime, 0) / result.responses.length;
            document.getElementById('modalAvgTime').textContent = (avgTime / 1000).toFixed(1) + 's';
            
            // Create modal chart
            const ctx = document.getElementById('modalChart').getContext('2d');
            if (modalChart) modalChart.destroy();
            
            modalChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Pattern\nRecognition', 'Explorer', 'Stabilizer', 'Social\nIntelligence'],
                    datasets: [{
                        label: 'Profile',
                        data: [
                            result.scores['Pattern Recognition'],
                            result.scores['Explorer'],
                            result.scores['Stabilizer'],
                            result.scores['Social Intelligence']
                        ],
                        backgroundColor: 'rgba(139, 92, 246, 0.2)',
                        borderColor: 'rgba(139, 92, 246, 1)',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 50,
                            ticks: { color: '#71717a', stepSize: 10 },
                            grid: { color: '#3f3f46' },
                            pointLabels: { color: '#a1a1aa', font: { size: 10 } }
                        }
                    },
                    plugins: { legend: { display: false } }
                }
            });
            
            // Render questions table
            const questionsBody = document.getElementById('modalQuestionsBody');
            questionsBody.innerHTML = result.responses.map((r, idx) => `
                <tr class="border-b border-zinc-700/50">
                    <td class="px-4 py-2 text-xs text-zinc-500">${idx + 1}</td>
                    <td class="px-4 py-2 text-xs text-zinc-300 max-w-xs truncate">${r.questionText}</td>
                    <td class="px-4 py-2 text-xs text-zinc-400">${r.selectedType}</td>
                    <td class="px-4 py-2 text-xs text-zinc-400">${(r.responseTime / 1000).toFixed(1)}s</td>
                    <td class="px-4 py-2 text-xs ${r.optionChanges > 0 ? 'text-amber-400' : 'text-zinc-500'}">${r.optionChanges}</td>
                </tr>
            `).join('');
            
            document.getElementById('resultModal').classList.remove('hidden');
            document.getElementById('resultModal').classList.add('flex');
        }

        function closeResultModal() {
            document.getElementById('resultModal').classList.add('hidden');
            document.getElementById('resultModal').classList.remove('flex');
        }

        function formatDuration(ms) {
            const minutes = Math.floor(ms / 60000);
            const seconds = Math.floor((ms % 60000) / 1000);
            return `${minutes}m ${seconds}s`;
        }

        function exportData() {
            const results = getStoredResults();
            if (results.length === 0) {
                alert('No data to export');
                return;
            }
            
            const headers = ['Name', 'Session ID', 'Dominant Type', 'Secondary Type', 'Confidence', 'Reliability', 'Duration (s)', 'Date'];
            const rows = results.map(r => [
                r.name,
                r.id,
                r.dominantType,
                r.secondaryType,
                r.confidence,
                r.reliability,
                Math.round(r.duration / 1000),
                new Date(r.date).toLocaleString()
            ]);
            
            const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `assessment_results_${new Date().toISOString().split('T')[0]}.csv`;
            a.click();
            URL.revokeObjectURL(url);
        }

        // Close modals on outside click
        document.getElementById('adminLoginModal').addEventListener('click', function(e) {
            if (e.target === this) hideAdminLogin();
        });

        document.getElementById('resultModal').addEventListener('click', function(e) {
            if (e.target === this) closeResultModal();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex items-center justify-center p-4" id="entryScreen">
<div className="w-full max-w-md">
<div className="text-center mb-10">
<div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 mb-6">
<span className="iconify w-7 h-7 text-white" data-icon="lucide:brain" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-white mb-3">Cognitive Profile</h1>
<p className="text-zinc-400 text-sm leading-relaxed">Discover your unique cognitive strengths through our comprehensive behavioral assessment.</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
<div className="mb-6">
<label className="block text-sm font-medium text-zinc-300 mb-2">Full Name</label>
<input className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all" id="userName" placeholder="Enter your full name" type="text"/>
<p className="text-red-400 text-xs mt-2 hidden" id="nameError">Please enter your full name to continue</p>
</div>
<button className="w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2" id="startBtn" onclick="startAssessment()">
                    Begin Assessment
                    <span className="iconify w-4 h-4" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="mt-6 pt-6 border-t border-zinc-800">
<div className="flex items-start gap-3 text-xs text-zinc-500">
<span className="iconify w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" data-icon="lucide:info" style={{strokeWidth: '1.5'}}></span>
<p>This assessment takes approximately 10-15 minutes. Your responses are confidential and used solely for generating your cognitive profile.</p>
</div>
</div>
</div>
<button className="mt-8 mx-auto block text-zinc-600 text-xs hover:text-zinc-400 transition-colors" onclick="showAdminLogin()">
                Administrator Access
            </button>
</div>
</div>

<div className="min-h-screen hidden" id="assessmentScreen">
<div className="max-w-2xl mx-auto p-4 py-8">

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center">
<span className="iconify w-4 h-4 text-violet-400" data-icon="lucide:brain" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-sm font-medium text-zinc-400">Cognitive Profile</span>
</div>
<div className="text-sm text-zinc-500">
<span id="currentQuestion">1</span> of <span id="totalQuestions">20</span>
</div>
</div>

<div className="mb-8">
<div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-500" id="progressBar" style={{width: '5%'}}></div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8 mb-6">
<p className="text-lg md:text-xl font-medium text-white leading-relaxed mb-8" id="questionText"></p>
<div className="space-y-3" id="optionsContainer">

</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-zinc-500" id="timeIndicator">
<span className="iconify w-4 h-4" data-icon="lucide:clock" style={{strokeWidth: '1.5'}}></span>
<span id="questionTime">0s</span>
</div>
<button className="py-3 px-6 bg-zinc-800 text-zinc-500 font-medium rounded-xl transition-all duration-200 flex items-center gap-2 cursor-not-allowed" disabled="" id="nextBtn" onclick="nextQuestion()">
                    Continue
                    <span className="iconify w-4 h-4" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>

<div className="min-h-screen hidden" id="resultsScreen">
<div className="max-w-3xl mx-auto p-4 py-8">
<div className="text-center mb-10">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-6">
<span className="iconify w-8 h-8 text-white" data-icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></span>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-white mb-3">Assessment Complete</h1>
<p className="text-zinc-400" id="resultsUserName"></p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8 mb-6">
<h2 className="text-lg font-medium text-white mb-6">Your Cognitive Profile</h2>
<div className="aspect-square max-w-sm mx-auto mb-6">
<canvas id="resultsChart"></canvas>
</div>
</div>

<div className="grid md:grid-cols-2 gap-4 mb-6">
<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center">
<span className="iconify w-5 h-5 text-violet-400" data-icon="lucide:lightbulb" id="dominantIcon" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Dominant</p>
<p className="text-lg font-semibold text-white" id="dominantType"></p>
</div>
</div>
<div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-violet-500 rounded-full" id="dominantBar" style={{width: '0%'}}></div>
</div>
<p className="text-sm text-zinc-400 mt-2" id="dominantPercent"></p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center">
<span className="iconify w-5 h-5 text-indigo-400" data-icon="lucide:compass" id="secondaryIcon" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Secondary</p>
<p className="text-lg font-semibold text-white" id="secondaryType"></p>
</div>
</div>
<div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" id="secondaryBar" style={{width: '0%'}}></div>
</div>
<p className="text-sm text-zinc-400 mt-2" id="secondaryPercent"></p>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 mb-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-300">Assessment Confidence</h3>
<div className="px-3 py-1 rounded-full text-xs font-medium" id="confidenceBadge"></div>
</div>
<p className="text-sm text-zinc-400 leading-relaxed" id="confidenceText"></p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 mb-8">
<h3 className="text-sm font-medium text-zinc-300 mb-4">Your Cognitive Style</h3>
<p className="text-sm text-zinc-400 leading-relaxed" id="narrativeText"></p>
</div>
<button className="w-full py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl transition-all duration-200" onclick="location.reload()">
                Take Another Assessment
            </button>
</div>
</div>

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm hidden items-center justify-center z-50 p-4" id="adminLoginModal">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-sm">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold text-white">Admin Access</h2>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="hideAdminLogin()">
<span className="iconify w-5 h-5" data-icon="lucide:x" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="mb-4">
<label className="block text-sm font-medium text-zinc-300 mb-2">Password</label>
<input className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all" id="adminPassword" placeholder="Enter admin password" type="password"/>
<p className="text-red-400 text-xs mt-2 hidden" id="adminError">Incorrect password</p>
</div>
<button className="w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium rounded-xl transition-all duration-200" onclick="adminLogin()">
                Login
            </button>
</div>
</div>

<div className="min-h-screen hidden" id="adminDashboard">
<div className="max-w-7xl mx-auto p-4 py-8">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-white">Assessment Dashboard</h1>
<p className="text-zinc-500 text-sm mt-1">Manage and analyze assessment results</p>
</div>
<div className="flex items-center gap-3">
<button className="py-2 px-4 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2" onclick="exportData()">
<span className="iconify w-4 h-4" data-icon="lucide:download" style={{strokeWidth: '1.5'}}></span>
                        Export CSV
                    </button>
<button className="py-2 px-4 bg-red-600/20 hover:bg-red-600/30 text-red-400 text-sm font-medium rounded-lg transition-all duration-200" onclick="logoutAdmin()">
                        Logout
                    </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
<p className="text-zinc-500 text-xs uppercase tracking-wide mb-1">Total Assessments</p>
<p className="text-2xl font-semibold text-white" id="statTotal">0</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
<p className="text-zinc-500 text-xs uppercase tracking-wide mb-1">High Confidence</p>
<p className="text-2xl font-semibold text-emerald-400" id="statHigh">0</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
<p className="text-zinc-500 text-xs uppercase tracking-wide mb-1">Medium Confidence</p>
<p className="text-2xl font-semibold text-amber-400" id="statMedium">0</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
<p className="text-zinc-500 text-xs uppercase tracking-wide mb-1">Low Reliability</p>
<p className="text-2xl font-semibold text-red-400" id="statLow">0</p>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 mb-6">
<div className="flex flex-col md:flex-row gap-4">
<div className="flex-1">
<label className="block text-xs text-zinc-500 mb-1">Filter by Intelligence Type</label>
<select className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50" id="filterType" onchange="filterResults()">
<option value="all">All Types</option>
<option value="Pattern Recognition">Pattern Recognition</option>
<option value="Explorer">Explorer</option>
<option value="Stabilizer">Stabilizer</option>
<option value="Social Intelligence">Social Intelligence</option>
</select>
</div>
<div className="flex-1">
<label className="block text-xs text-zinc-500 mb-1">Filter by Date</label>
<input className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50" id="filterDate" onchange="filterResults()" type="date"/>
</div>
<div className="flex items-end">
<button className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors" onclick="clearFilters()">Clear</button>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="border-b border-zinc-800">
<th className="text-left text-xs font-medium text-zinc-500 uppercase tracking-wide px-4 py-3">Name</th>
<th className="text-left text-xs font-medium text-zinc-500 uppercase tracking-wide px-4 py-3">Dominant</th>
<th className="text-left text-xs font-medium text-zinc-500 uppercase tracking-wide px-4 py-3">Confidence</th>
<th className="text-left text-xs font-medium text-zinc-500 uppercase tracking-wide px-4 py-3">Date</th>
<th className="text-left text-xs font-medium text-zinc-500 uppercase tracking-wide px-4 py-3">Actions</th>
</tr>
</thead>
<tbody id="resultsTableBody">

</tbody>
</table>
</div>
<div className="hidden text-center py-12 text-zinc-500" id="noResults">
<span className="iconify w-12 h-12 mx-auto mb-4 opacity-50" data-icon="lucide:inbox" style={{strokeWidth: '1.5'}}></span>
<p>No assessment results found</p>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm hidden items-center justify-center z-50 p-4 overflow-y-auto" id="resultModal">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-4xl my-8">
<div className="flex items-center justify-between p-6 border-b border-zinc-800">
<div>
<h2 className="text-lg font-semibold text-white" id="modalUserName"></h2>
<p className="text-sm text-zinc-500" id="modalDate"></p>
</div>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="closeResultModal()">
<span className="iconify w-5 h-5" data-icon="lucide:x" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="p-6">

<div className="grid md:grid-cols-2 gap-6 mb-6">
<div className="bg-zinc-800/50 rounded-xl p-4">
<h3 className="text-sm font-medium text-zinc-300 mb-4">Intelligence Distribution</h3>
<div className="aspect-square max-w-xs mx-auto">
<canvas id="modalChart"></canvas>
</div>
</div>
<div className="bg-zinc-800/50 rounded-xl p-4">
<h3 className="text-sm font-medium text-zinc-300 mb-4">Session Details</h3>
<div className="space-y-3">
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Session ID</span>
<span className="text-zinc-300 font-mono text-xs" id="modalSessionId"></span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Dominant Type</span>
<span className="text-violet-400" id="modalDominant"></span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Secondary Type</span>
<span className="text-indigo-400" id="modalSecondary"></span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Confidence Level</span>
<span id="modalConfidence"></span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Total Duration</span>
<span className="text-zinc-300" id="modalDuration"></span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Avg Response Time</span>
<span className="text-zinc-300" id="modalAvgTime"></span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Reliability Flag</span>
<span id="modalReliability"></span>
</div>
</div>
</div>
</div>

<div className="bg-zinc-800/50 rounded-xl overflow-hidden">
<div className="px-4 py-3 border-b border-zinc-700">
<h3 className="text-sm font-medium text-zinc-300">Question Responses</h3>
</div>
<div className="overflow-x-auto max-h-96">
<table className="w-full">
<thead className="sticky top-0 bg-zinc-800">
<tr>
<th className="text-left text-xs font-medium text-zinc-500 px-4 py-2">#</th>
<th className="text-left text-xs font-medium text-zinc-500 px-4 py-2">Question</th>
<th className="text-left text-xs font-medium text-zinc-500 px-4 py-2">Response</th>
<th className="text-left text-xs font-medium text-zinc-500 px-4 py-2">Time</th>
<th className="text-left text-xs font-medium text-zinc-500 px-4 py-2">Changes</th>
</tr>
</thead>
<tbody id="modalQuestionsBody">

</tbody>
</table>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
