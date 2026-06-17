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



const DATA = [
  {
    id: "decision",
    category: "Decision & Prioritization Systems",
    tagline: "How to choose what matters.",
    systems: [
      ["Eisenhower Matrix", "Prioritization", "Productivity / Military", "Urgent vs. important quadrant for task triage"],
      ["OODA Loop", "Decision-Making", "Military Strategy", "Observe–Orient–Decide–Act cycle for rapid decision-making"],
      ["First Principles Thinking", "Decision-Making", "Philosophy / Engineering", "Decompose problems to foundational truths and rebuild"],
      ["Inversion", "Decision-Making", "Mathematics / Stoicism", "Solve by imagining the worst outcome and working backward"],
      ["Second-Order Thinking", "Decision-Making", "Economics / Systems Theory", "Map the consequences of consequences"],
      ["Regret Minimization Framework", "Decision-Making", "Entrepreneurship", "Bezos' framework: minimize lifetime regret"],
      ["Pareto Principle (80/20)", "Prioritization", "Economics", "80% of results from 20% of inputs"],
      ["Decision Matrix (Weighted Scoring)", "Decision-Making", "Operations Research", "Score options against weighted criteria"],
      ["Cynefin Framework", "Decision-Making", "Complexity Science", "Match decision approach to problem domain: simple, complicated, complex, chaotic"],
      ["Pre-Mortem Analysis", "Risk / Decision", "Cognitive Psychology", "Imagine failure in advance to surface hidden risks"],
      ["Minimax Strategy", "Decision-Making", "Game Theory", "Minimize the maximum possible loss"],
      ["Satisficing vs. Maximizing", "Decision-Making", "Behavioral Economics", "When 'good enough' outperforms 'optimal'"],
      ["Recognition-Primed Decision Model", "Decision-Making", "Naturalistic Decision Theory", "How experts decide under time pressure using pattern recognition"],
      ["Boyd's Energy-Maneuverability Theory", "Decision-Making", "Military Aviation", "Competitive advantage through speed of adaptation"],
      ["Vroom-Yetton Decision Model", "Decision-Making", "Management Science", "When to decide alone vs. involve the team"],
      ["Kepner-Tregoe Method", "Decision-Making", "Operations", "Systematic situation appraisal, problem analysis, decision analysis"],
      ["ICE Scoring", "Prioritization", "Product Management", "Impact × Confidence × Ease for rapid prioritization"],
      ["RICE Framework", "Prioritization", "Product Management", "Reach × Impact × Confidence ÷ Effort"],
      ["Analytic Hierarchy Process", "Decision-Making", "Operations Research", "Pairwise comparison for multi-criteria decisions"],
    ]
  },
  {
    id: "strategic",
    category: "Strategic & Competitive Systems",
    tagline: "How to position and win.",
    systems: [
      ["Porter's Five Forces", "Competitive Analysis", "Business Strategy", "Analyze industry attractiveness via five structural forces"],
      ["SWOT Analysis", "Strategic Planning", "Business Strategy", "Strengths, weaknesses, opportunities, threats"],
      ["Blue Ocean Strategy", "Market Creation", "Business Strategy", "Create uncontested market space instead of competing"],
      ["Wardley Mapping", "Strategic Positioning", "Technology Strategy", "Map value chains by evolution stage to find strategic moves"],
      ["Ansoff Matrix", "Growth Strategy", "Business Strategy", "Four growth paths: penetration, development, diversification, new markets"],
      ["BCG Growth-Share Matrix", "Portfolio Strategy", "Business Strategy", "Stars, cash cows, question marks, dogs"],
      ["Jobs To Be Done (JTBD)", "Market Strategy", "Innovation", "Customers hire products to do a job"],
      ["Flywheel Effect", "Momentum Strategy", "Business Strategy", "Self-reinforcing cycle of compounding advantage"],
      ["Strategic Moats", "Competitive Advantage", "Business Strategy", "Durable advantages: network effects, switching costs, brand, cost"],
      ["Value Chain Analysis", "Operational Strategy", "Business Strategy", "Map activities that create value from inputs to delivery"],
      ["Platform Dynamics", "Market Architecture", "Technology / Economics", "Multi-sided markets, network effects, winner-take-all dynamics"],
      ["Disruptive Innovation Theory", "Market Evolution", "Innovation Theory", "How low-end entrants topple incumbents"],
      ["Red Queen Effect", "Competitive Dynamics", "Evolutionary Biology / Strategy", "Running faster just to stay in place"],
      ["PESTLE Analysis", "Macro Strategy", "Business Strategy", "Political, Economic, Social, Technological, Legal, Environmental scanning"],
      ["Scenario Planning", "Strategic Foresight", "Military / Business", "Multiple plausible futures to stress-test strategy"],
      ["Three Horizons Framework", "Innovation Strategy", "McKinsey", "Manage current business, emerging opportunities, and future bets"],
      ["Barbell Strategy", "Risk Strategy", "Finance / Nassim Taleb", "Extreme safety + extreme risk, nothing in the middle"],
      ["Kill Zone Strategy", "Competitive Defense", "Technology", "How incumbents prevent disruption in adjacent markets"],
      ["Crossing the Chasm", "Adoption Strategy", "Technology Marketing", "Gap between early adopters and mainstream market"],
      ["Competitive Landscape Mapping", "Positioning", "Business Strategy", "Visual map of where competitors sit on key dimensions"],
    ]
  },
  {
    id: "execution",
    category: "Execution & Operational Systems",
    tagline: "How to build and ship.",
    systems: [
      ["Agile Methodology", "Execution", "Software / Management", "Iterative delivery with short feedback loops"],
      ["Scrum Framework", "Execution", "Software Development", "Sprints, standups, retrospectives — structured agile"],
      ["Kanban", "Workflow Management", "Manufacturing / Software", "Visual board limiting work in progress"],
      ["Lean Manufacturing", "Operational Efficiency", "Manufacturing (Toyota)", "Eliminate waste, continuous improvement"],
      ["Six Sigma (DMAIC)", "Quality Control", "Manufacturing / Statistics", "Define–Measure–Analyze–Improve–Control for defect reduction"],
      ["Theory of Constraints", "Bottleneck Analysis", "Operations Management", "Find and exploit the constraint that limits throughput"],
      ["OKRs", "Goal-Setting", "Management", "Ambitious objectives with measurable key results"],
      ["EOS (Entrepreneurial Operating System)", "Business Operations", "Small Business", "Vision, traction, healthy team — Wickman's framework"],
      ["Getting Things Done (GTD)", "Personal Productivity", "Productivity", "Capture, clarify, organize, reflect, engage"],
      ["Pomodoro Technique", "Time Management", "Productivity", "25-minute focused work blocks with breaks"],
      ["Time Blocking", "Schedule Architecture", "Productivity", "Assign every hour a purpose"],
      ["PDCA Cycle", "Continuous Improvement", "Quality Management", "Plan–Do–Check–Act iterative improvement loop"],
      ["5S System", "Workplace Organization", "Lean Manufacturing", "Sort, Set, Shine, Standardize, Sustain"],
      ["Standard Operating Procedures", "Process Documentation", "Operations", "Codified repeatable processes"],
      ["Mission-Type Tactics (Auftragstaktik)", "Decentralized Execution", "Military", "Define intent, delegate method"],
      ["Kaizen", "Continuous Improvement", "Japanese Manufacturing", "Small, daily, compounding improvements"],
      ["Work Breakdown Structure", "Project Planning", "Project Management", "Hierarchical decomposition of deliverables"],
      ["Critical Path Method", "Project Scheduling", "Engineering / Construction", "Identify longest sequence determining project duration"],
      ["Waterfall Methodology", "Sequential Execution", "Engineering", "Linear phases: requirements → design → build → test → deploy"],
      ["DevOps / CI-CD Pipeline", "Delivery Automation", "Software Engineering", "Continuous integration and continuous delivery"],
      ["RACI Matrix", "Role Clarity", "Project Management", "Responsible, Accountable, Consulted, Informed"],
    ]
  },
  {
    id: "thinking",
    category: "Thinking & Reasoning Systems",
    tagline: "How to think clearly.",
    systems: [
      ["Mental Models (Munger's Latticework)", "Multi-Disciplinary Thinking", "Investing / Philosophy", "Build a lattice of models from many disciplines"],
      ["Systems Thinking", "Holistic Analysis", "Systems Theory", "See wholes, feedback loops, emergent behavior"],
      ["Dialectical Thinking", "Synthesis", "Philosophy (Hegel / Kierkegaard)", "Thesis–antithesis–synthesis; or existential stages"],
      ["Bayesian Reasoning", "Probabilistic Thinking", "Statistics / Epistemology", "Update beliefs based on new evidence"],
      ["Socratic Method", "Critical Inquiry", "Philosophy", "Systematic questioning to expose assumptions"],
      ["Steelmanning", "Argumentation", "Philosophy / Rhetoric", "Construct the strongest version of the opposing argument"],
      ["Occam's Razor", "Simplification", "Philosophy / Science", "Prefer the simplest sufficient explanation"],
      ["Hanlon's Razor", "Attribution", "Philosophy", "Never attribute to malice what can be explained by incompetence"],
      ["Map vs. Territory", "Epistemology", "General Semantics", "The model is not the reality"],
      ["Circle of Competence", "Self-Knowledge", "Investing (Buffett)", "Know what you know and what you don't"],
      ["Thought Experiments", "Reasoning", "Philosophy / Physics", "Explore ideas through imagined scenarios"],
      ["Abductive Reasoning", "Inference", "Logic / Science", "Inference to the best explanation"],
      ["Analogical Reasoning", "Transfer", "Cognitive Science", "Map structures from known to unknown domains"],
      ["Reductionism vs. Holism", "Analysis Method", "Philosophy of Science", "Break down vs. understand as whole"],
      ["Phenomenological Reduction", "Perception", "Philosophy (Husserl)", "Bracket assumptions to see the thing itself"],
      ["Modal Logic", "Reasoning", "Philosophy / Mathematics", "Necessity, possibility, contingency"],
      ["Falsifiability", "Epistemic Standard", "Philosophy of Science (Popper)", "A claim must be testable to be scientific"],
      ["Sensemaking (Weick)", "Organizational Cognition", "Organizational Theory", "How groups construct meaning from ambiguity"],
      ["Double-Loop Learning", "Adaptive Thinking", "Organizational Learning", "Question the assumptions behind the strategy"],
      ["Ladder of Inference", "Cognitive Awareness", "Organizational Psychology", "Trace how raw data becomes action through filters"],
    ]
  },
  {
    id: "behavior",
    category: "Human Behavior & Psychology Systems",
    tagline: "How people actually work.",
    systems: [
      ["Maslow's Hierarchy of Needs", "Motivation", "Humanistic Psychology", "Survival → Safety → Belonging → Esteem → Self-Actualization"],
      ["Self-Determination Theory", "Motivation", "Psychology", "Autonomy, competence, relatedness as core drives"],
      ["Cognitive Behavioral Model", "Thought-Behavior Loop", "Clinical Psychology", "Thoughts → Feelings → Behaviors — and how to intervene"],
      ["Stages of Change", "Behavior Change", "Psychology", "Precontemplation through maintenance"],
      ["Habit Loop (Cue-Routine-Reward)", "Behavior Design", "Neuroscience / Psychology", "How habits form and how to rewire them"],
      ["Nudge Theory", "Behavior Architecture", "Behavioral Economics", "Choice architecture to influence decisions without mandates"],
      ["Loss Aversion", "Bias Awareness", "Behavioral Economics", "Losses hurt ~2x more than equivalent gains"],
      ["Prospect Theory", "Decision Under Risk", "Behavioral Economics", "How people evaluate gains and losses asymmetrically"],
      ["Dunning-Kruger Effect", "Self-Assessment", "Cognitive Psychology", "Incompetence breeds overconfidence; expertise breeds doubt"],
      ["Attachment Theory", "Relational Patterns", "Developmental Psychology", "Secure, anxious, avoidant — wiring from early relationships"],
      ["Internal Family Systems (IFS)", "Inner Architecture", "Psychotherapy", "Parts, protectors, exiles, Self — inner ecology"],
      ["Enneagram", "Personality Architecture", "Personality Psychology", "Nine types, core fears, integration paths"],
      ["Big Five (OCEAN)", "Personality Traits", "Psychology", "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism"],
      ["Spiral Dynamics", "Developmental Stages", "Developmental Psychology", "Value systems evolving through stages of complexity"],
      ["Learned Helplessness", "Behavioral Pattern", "Psychology (Seligman)", "When repeated failure trains passivity"],
      ["Flow State", "Optimal Performance", "Positive Psychology", "Challenge/skill balance producing total absorption"],
      ["Polyvagal Theory", "Nervous System Regulation", "Neuroscience", "Ventral vagal, sympathetic, dorsal vagal — safety/fight/shutdown"],
      ["Cognitive Dissonance", "Belief-Behavior Gap", "Social Psychology", "Discomfort from holding contradictory beliefs"],
      ["Social Identity Theory", "Group Dynamics", "Social Psychology", "We define ourselves by our groups"],
      ["Mimetic Desire (Girard)", "Desire Formation", "Philosophical Anthropology", "We desire what others desire — rivalry and scapegoating"],
      ["Operant Conditioning", "Reinforcement", "Behavioral Psychology", "Behavior shaped by consequences"],
      ["Ego Development Theory", "Maturation", "Developmental Psychology", "Stages of ego complexity from impulsive to integrated"],
      ["Terror Management Theory", "Existential Psychology", "Social Psychology", "How death awareness shapes belief, culture, and behavior"],
      ["Motivational Interviewing", "Change Facilitation", "Clinical Psychology", "Elicit intrinsic motivation through reflective conversation"],
    ]
  },
  {
    id: "communication",
    category: "Communication & Persuasion Systems",
    tagline: "How to move people with words.",
    systems: [
      ["Aristotle's Rhetoric", "Persuasion", "Classical Rhetoric", "Ethos, pathos, logos — the three appeals"],
      ["StoryBrand Framework", "Messaging", "Marketing / Storytelling", "Customer is the hero; you are the guide"],
      ["SPIN Selling", "Sales Methodology", "B2B Sales", "Situation, Problem, Implication, Need-Payoff questions"],
      ["NEPQ", "Sales Methodology", "Sales Psychology", "Problem-awareness questions that create emotional urgency"],
      ["Challenger Sale", "Sales Methodology", "B2B Sales", "Teach, tailor, take control — reframe the customer's thinking"],
      ["AIDA", "Marketing Funnel", "Advertising", "Attention–Interest–Desire–Action"],
      ["PAS (Problem-Agitate-Solution)", "Copywriting", "Direct Response Marketing", "Name the pain, twist the knife, present the cure"],
      ["Hero's Journey", "Narrative Architecture", "Mythology / Storytelling", "Campbell's monomyth — departure, initiation, return"],
      ["Pixar Story Spine", "Narrative Structure", "Storytelling", "Once upon a time… Every day… Until one day…"],
      ["Minto Pyramid Principle", "Communication Structure", "Consulting", "Lead with the answer, then support with logic"],
      ["Nonviolent Communication", "Relational Communication", "Conflict Resolution", "Observations, feelings, needs, requests"],
      ["Rogerian Argument", "Persuasion", "Rhetoric / Psychology", "Acknowledge the opponent's position before making your case"],
      ["Cialdini's Principles of Influence", "Persuasion", "Social Psychology", "Reciprocity, commitment, social proof, authority, liking, scarcity"],
      ["Socratic Dialogue", "Teaching / Persuasion", "Philosophy", "Lead to insight through structured questioning"],
      ["Framing Effect", "Perception Management", "Behavioral Economics", "How you frame a choice changes the decision"],
      ["SCQA Framework", "Structured Communication", "Consulting", "Situation, Complication, Question, Answer"],
      ["Monroe's Motivated Sequence", "Speech Structure", "Public Speaking", "Attention, need, satisfaction, visualization, action"],
      ["Overton Window", "Public Discourse", "Political Science", "Range of ideas considered politically acceptable"],
    ]
  },
  {
    id: "leadership",
    category: "Leadership & Organizational Systems",
    tagline: "How to lead and structure teams.",
    systems: [
      ["Servant Leadership", "Leadership Philosophy", "Management / Theology", "Lead by serving — Greenleaf's model"],
      ["Situational Leadership", "Leadership Adaptation", "Management", "Match leadership style to follower maturity"],
      ["Tuckman's Team Development", "Team Dynamics", "Organizational Psychology", "Forming, storming, norming, performing, adjourning"],
      ["Radical Candor", "Feedback Culture", "Management", "Care personally + challenge directly"],
      ["Lencioni's Five Dysfunctions", "Team Health", "Organizational Development", "Trust → Conflict → Commitment → Accountability → Results"],
      ["Span of Control", "Organizational Design", "Management Theory", "How many direct reports one leader can effectively manage"],
      ["Holacracy", "Organizational Architecture", "Management Innovation", "Self-organizing circles replacing traditional hierarchy"],
      ["Dunbar's Number", "Social Architecture", "Anthropology", "~150 stable relationships — implications for org size"],
      ["Peter Principle", "Organizational Pathology", "Management Theory", "People rise to their level of incompetence"],
      ["Bureaucracy Theory (Weber)", "Organizational Structure", "Sociology", "Rational-legal authority, hierarchy, specialization"],
      ["Tribal Leadership", "Cultural Architecture", "Organizational Development", "Five stages of tribal culture in organizations"],
      ["Conway's Law", "System Design", "Software / Organization Theory", "Orgs design systems that mirror their communication structures"],
      ["Kotter's 8-Step Change Model", "Change Management", "Organizational Development", "Urgency → Coalition → Vision → Wins → Anchor"],
      ["ADKAR Model", "Change Management", "Organizational Development", "Awareness, Desire, Knowledge, Ability, Reinforcement"],
      ["Requisite Organization", "Organizational Stratification", "Management Theory", "Layers of complexity matched to cognitive capability"],
      ["Cynefin for Leadership", "Adaptive Leadership", "Complexity Science", "Different problems require fundamentally different leadership modes"],
    ]
  },
  {
    id: "financial",
    category: "Financial & Economic Systems",
    tagline: "How money and value move.",
    systems: [
      ["Compound Interest / Growth", "Wealth Building", "Finance / Mathematics", "Exponential growth through reinvestment over time"],
      ["Supply and Demand", "Market Dynamics", "Economics", "Price as signal between buyers and sellers"],
      ["Marginal Utility", "Value Assessment", "Microeconomics", "Each additional unit delivers less satisfaction"],
      ["Opportunity Cost", "Trade-Off Analysis", "Economics", "The value of the next best alternative foregone"],
      ["Sunk Cost Fallacy", "Cognitive Trap", "Behavioral Economics", "Don't let past investment dictate future decisions"],
      ["Network Effects", "Value Dynamics", "Platform Economics", "Product becomes more valuable as more people use it"],
      ["Incentive Structures", "Behavior Shaping", "Economics / Game Theory", "Show me the incentive, I'll show you the outcome"],
      ["Principal-Agent Problem", "Alignment", "Economics", "When the agent's interests diverge from the principal's"],
      ["Tragedy of the Commons", "Resource Depletion", "Economics / Ecology", "Shared resources overused when no one owns the cost"],
      ["Ostrom's Commons Governance", "Resource Management", "Political Economy", "Eight principles for managing shared resources"],
      ["Debt Architecture", "Financial Structure", "Corporate Finance", "How leverage amplifies both upside and downside"],
      ["Capital Allocation Systems", "Resource Deployment", "Corporate Strategy", "How organizations decide where to invest"],
      ["Auction Theory", "Price Discovery", "Economics / Game Theory", "Mechanism design for exchange"],
      ["Gresham's Law", "Currency Dynamics", "Monetary Economics", "Bad money drives out good"],
      ["Cantillon Effect", "Money Distribution", "Monetary Theory", "Who gets new money first matters"],
      ["Unit Economics", "Business Viability", "Startup Finance", "CAC, LTV, margins — does each unit profit?"],
    ]
  },
  {
    id: "biological",
    category: "Biological & Living Systems",
    tagline: "How nature architects survival.",
    systems: [
      ["Natural Selection", "Evolutionary Mechanism", "Evolutionary Biology", "Variation + selection + inheritance = adaptation"],
      ["Homeostasis", "Self-Regulation", "Physiology", "How organisms maintain internal equilibrium"],
      ["Immune System Logic", "Defense Architecture", "Immunology", "Self/non-self recognition, adaptive memory, escalating response"],
      ["Swarm Intelligence", "Collective Decision-Making", "Biology / AI", "Decentralized coordination producing emergent order"],
      ["Predator-Prey Dynamics", "Population Oscillation", "Ecology", "Lotka-Volterra cycles — boom and bust"],
      ["Symbiosis Models", "Relational Ecology", "Biology", "Mutualism, commensalism, parasitism"],
      ["Circadian Architecture", "Temporal Biology", "Chronobiology", "Internal clocks governing sleep, hormones, cognition"],
      ["Morphogenesis", "Form Emergence", "Developmental Biology", "How structure arises from genetic code + environment"],
      ["Ant Colony Optimization", "Distributed Problem-Solving", "Biomimetics", "Pheromone-based pathfinding without centralized control"],
      ["Mycelial Networks", "Underground Communication", "Mycology / Ecology", "Fungal networks distributing nutrients and information"],
      ["Allostatic Load", "Stress Accumulation", "Neuroscience / Medicine", "Cumulative cost of chronic stress on body systems"],
      ["Microbiome Ecology", "Internal Ecosystem", "Microbiology", "Trillions of organisms shaping digestion, immunity, mood"],
      ["Apoptosis", "Sacrificial Systems", "Cell Biology", "Controlled self-destruction for the health of the whole"],
      ["Punctuated Equilibrium", "Evolutionary Tempo", "Paleontology", "Long stasis interrupted by rapid change"],
    ]
  },
  {
    id: "complexity",
    category: "Complexity & Systems Science",
    tagline: "How emergence, chaos, and order interact.",
    systems: [
      ["Feedback Loops", "System Dynamics", "Systems Theory", "Amplifying or stabilizing cycles within systems"],
      ["Emergence", "Complex Behavior", "Complexity Science", "Macro patterns arising from micro interactions"],
      ["Chaos Theory", "Nonlinear Dynamics", "Mathematics / Physics", "Small changes → massive divergence"],
      ["Attractors", "System Behavior", "Dynamical Systems", "States a system tends toward — stability, cycles, or chaos"],
      ["Phase Transitions / Tipping Points", "State Change", "Physics / Social Science", "Small input crosses threshold → system shifts state"],
      ["Power Laws / Scale-Free Networks", "Distribution Patterns", "Network Science", "A few nodes dominate; most are peripheral"],
      ["Fractal Structures", "Self-Similarity", "Mathematics", "Patterns that repeat at every scale"],
      ["Edge of Chaos", "Adaptive Zone", "Complexity Science", "Systems are most creative between order and disorder"],
      ["Antifragility", "Stress Response", "Nassim Taleb", "Systems that gain from disorder"],
      ["Donella Meadows' Leverage Points", "Intervention Design", "Systems Thinking", "12 places to intervene in a system, ranked by impact"],
      ["Stock and Flow Diagrams", "System Mapping", "Systems Dynamics", "Accumulations and rates of change"],
      ["Cybernetics", "Control & Communication", "Information Theory", "How systems self-regulate through information feedback"],
      ["Autopoiesis", "Self-Creation", "Biology / Philosophy", "Systems that continuously produce and maintain themselves"],
      ["Dissipative Structures", "Order from Chaos", "Thermodynamics", "New order emerging through energy dissipation"],
      ["Small World Networks", "Connectivity", "Network Science", "Six degrees — short path lengths despite clustering"],
      ["Path Dependence", "Historical Constraint", "Economics / Complexity", "Early choices constrain later possibilities"],
      ["Resilience Theory (Holling)", "Adaptive Capacity", "Ecology / Systems", "Cycles of growth, conservation, release, reorganization"],
    ]
  },
  {
    id: "theological",
    category: "Theological & Philosophical Systems",
    tagline: "How meaning, truth, and the sacred are structured.",
    systems: [
      ["Covenant Theology", "Relational Framework", "Theology", "God's relationship to humanity structured through covenants"],
      ["Kierkegaard's Three Stages", "Existential Development", "Philosophy", "Aesthetic → Ethical → Religious"],
      ["Virtue Ethics (Aristotle)", "Character Formation", "Moral Philosophy", "Excellence through habituated virtuous action"],
      ["Deontological Ethics (Kant)", "Duty-Based Morality", "Moral Philosophy", "Act according to universal moral law"],
      ["Consequentialism / Utilitarianism", "Outcome-Based Ethics", "Moral Philosophy", "Maximize good outcomes for the greatest number"],
      ["Natural Law Theory", "Moral Order", "Theology / Philosophy", "Moral truths embedded in the structure of creation"],
      ["Ignatian Discernment", "Decision-Making", "Spiritual Theology", "Consolation, desolation, and movements of the Spirit"],
      ["Lectio Divina", "Contemplative Practice", "Monastic Tradition", "Read, Meditate, Pray, Contemplate"],
      ["Rule of St. Benedict", "Life Architecture", "Monastic Tradition", "Work, prayer, community — a complete personal operating system"],
      ["Liturgical Calendar", "Temporal Formation", "Christian Theology", "The church year as an operating system for identity formation"],
      ["Seven Deadly Sins / Virtues", "Moral Diagnostic", "Christian Theology", "Pride, greed, lust, envy, gluttony, wrath, sloth — and remedies"],
      ["Theodicy Models", "Suffering Framework", "Philosophy of Religion", "How to account for evil/suffering given a good God"],
      ["Imago Dei", "Identity Architecture", "Theology", "Humans as image-bearers — the foundation of dignity"],
      ["Kenosis", "Self-Emptying", "Christology", "Power expressed through voluntary limitation"],
      ["Already/Not Yet", "Eschatological Tension", "Theology", "Living between inauguration and consummation"],
      ["Perichoresis", "Relational Ontology", "Trinitarian Theology", "Mutual indwelling — relationship as the structure of being"],
      ["Telos / Teleological Thinking", "Purpose Structure", "Philosophy", "Everything has an end purpose"],
      ["Memento Mori", "Mortality Awareness", "Stoicism / Monasticism", "Death as clarifying lens for priorities"],
      ["Via Negativa", "Apophatic Method", "Theology / Decision-Making", "Define what something is by removing what it isn't"],
      ["Sabbath as System", "Rest Architecture", "Theology / Productivity", "Structured cessation as the engine of sustained output"],
      ["Shema Structure", "Integrated Devotion", "Jewish Theology", "Heart, soul, strength — total integration"],
      ["Desert Fathers' Eight Thoughts", "Interior Diagnostics", "Early Monasticism", "Evagrius' taxonomy of temptation"],
    ]
  },
  {
    id: "formation",
    category: "Formation & Identity Systems",
    tagline: "How humans are shaped and re-shaped.",
    systems: [
      ["Narrative Identity (Ricoeur)", "Identity Formation", "Philosophy", "You are the story you tell about yourself"],
      ["Individuation (Jung)", "Psychological Maturation", "Analytical Psychology", "Integrating shadow, anima/animus, Self"],
      ["Stages of Faith (Fowler)", "Spiritual Development", "Developmental Psychology", "Six stages of faith maturation"],
      ["Kegan's Subject-Object Theory", "Adult Development", "Developmental Psychology", "What was subject becomes object — growing complexity"],
      ["Erikson's Psychosocial Stages", "Lifespan Development", "Developmental Psychology", "Eight crises from trust to integrity"],
      ["Apprenticeship Model", "Skill Transmission", "Education / Craft", "Master-apprentice: watch, assist, practice, master"],
      ["Catechesis", "Doctrinal Formation", "Theology / Education", "Systematic instruction through question and answer"],
      ["Discipleship Models", "Spiritual Formation", "Theology", "Master-student lineages for character transfer"],
      ["Rites of Passage", "Transition Architecture", "Anthropology", "Separation, liminality, incorporation"],
      ["Shame-Honor Framework", "Cultural Formation", "Anthropology / Theology", "How shame and honor shape identity and behavior"],
      ["Liminal Space Theory", "Transformation Architecture", "Anthropology (Turner)", "The threshold where old identity dies and new forms"],
      ["Trauma-Informed Systems", "Healing Architecture", "Psychology / Social Work", "Safety, trustworthiness, peer support, empowerment"],
      ["Deliberate Practice", "Skill Acquisition", "Performance Psychology", "Structured practice at the edge of ability with feedback"],
      ["Kolb's Experiential Learning", "Learning Architecture", "Education", "Experience → Reflection → Conceptualization → Experimentation"],
      ["Bloom's Taxonomy", "Cognitive Complexity", "Education", "Remember → Understand → Apply → Analyze → Evaluate → Create"],
      ["Zone of Proximal Development", "Learning Edge", "Educational Psychology", "Gap between current ability and potential with guidance"],
    ]
  },
  {
    id: "relational",
    category: "Relational & Social Systems",
    tagline: "How humans organize connection.",
    systems: [
      ["Kinship Systems", "Social Architecture", "Anthropology", "How societies organize family, lineage, and obligation"],
      ["Gift Economy / Reciprocity", "Exchange Architecture", "Anthropology / Economics", "Giving creates obligation, binding community"],
      ["Trust Architecture", "Social Infrastructure", "Sociology / Economics", "Reputation systems, credentialing, institutional trust"],
      ["Covenant vs. Contract", "Relational Framing", "Theology / Law", "Covenants bind identities; contracts bind transactions"],
      ["Social Capital Theory", "Relational Resources", "Sociology", "Bonding, bridging, and linking capital"],
      ["Dunbar Layers", "Social Structure", "Anthropology", "5 → 15 → 50 → 150 → 500 → 1500"],
      ["Network Theory (Granovetter)", "Relational Dynamics", "Sociology", "The strength of weak ties"],
      ["Game Theory (Iterated Games)", "Cooperation Dynamics", "Mathematics / Economics", "Tit-for-tat, reputation, and cooperation evolution"],
      ["Scapegoat Mechanism (Girard)", "Social Cohesion", "Philosophical Anthropology", "Communities unify by projecting violence onto a victim"],
      ["Collective Effervescence", "Group Bonding", "Sociology (Durkheim)", "Shared rituals create social solidarity"],
      ["Commons Governance (Ostrom)", "Shared Resource Management", "Political Economy", "Eight principles for collective resources"],
      ["Alliance Architecture", "Geopolitical Structure", "International Relations", "How organizations form and maintain alliances"],
      ["Power Distance (Hofstede)", "Cultural Dimension", "Cross-Cultural Psychology", "How societies handle inequality in power"],
    ]
  },
  {
    id: "information",
    category: "Information & Knowledge Systems",
    tagline: "How information flows, compounds, and decays.",
    systems: [
      ["Shannon Information Theory", "Signal vs. Noise", "Information Theory", "Measuring information content and transmission fidelity"],
      ["DIKW Pyramid", "Knowledge Hierarchy", "Knowledge Management", "Data → Information → Knowledge → Wisdom"],
      ["Zettelkasten", "Knowledge Architecture", "Personal Knowledge Management", "Linked atomic notes building emergent understanding"],
      ["Knowledge Graphs", "Semantic Architecture", "Computer Science / AI", "Structured networks of entities and relationships"],
      ["Semiotic Systems (Peirce)", "Meaning Architecture", "Philosophy / Linguistics", "Sign, object, interpretant — how meaning is produced"],
      ["Taxonomy vs. Folksonomy", "Classification", "Information Science", "Top-down expert categories vs. bottom-up user tags"],
      ["Second Brain / CODE Method", "Personal Knowledge Management", "Productivity (Forte)", "Capture, Organize, Distill, Express"],
      ["Mental Model Library", "Cognitive Toolkit", "Multi-Disciplinary", "Curated thinking tools for pattern recognition"],
      ["Information Asymmetry", "Market/Relational Dynamics", "Economics", "One party knows more than the other"],
      ["Propaganda Model (Chomsky)", "Media Architecture", "Political Communication", "Five filters shaping mass media content"],
      ["Epistemological Frameworks", "Knowledge Standards", "Philosophy", "Rationalism, empiricism, pragmatism"],
      ["Compression (Lossy vs. Lossless)", "Information Efficiency", "Information Theory", "Trade-offs in reducing information"],
      ["Pattern Language (Alexander)", "Design Knowledge", "Architecture / Design", "Reusable solutions at every scale"],
      ["Lindy Effect", "Information Durability", "Statistics (Taleb)", "The longer an idea survives, the longer it will survive"],
    ]
  },
  {
    id: "spatial",
    category: "Spatial, Design & Material Systems",
    tagline: "How space and form shape experience.",
    systems: [
      ["Permaculture Design", "Regenerative Systems", "Agriculture / Ecology", "Design from nature — zones, sectors, stacking functions"],
      ["Urban Planning Systems", "City Architecture", "Urban Design", "How cities organize space, transit, zoning, and life"],
      ["Wayfinding Systems", "Navigation Design", "Environmental Design", "How people orient, navigate, and find meaning in space"],
      ["Feng Shui", "Spatial Energy", "Chinese Metaphysics", "Harmonizing individuals with their environment"],
      ["Modular Design", "Component Architecture", "Industrial Design / Software", "Interchangeable parts enabling infinite configurations"],
      ["Typographic Systems", "Visual Hierarchy", "Graphic Design", "How type organizes meaning on a page"],
      ["Color Systems", "Visual Organization", "Design / Science", "Munsell, Pantone — systematic classification of hue, value, chroma"],
      ["Acoustic Architecture", "Sound Design", "Architecture / Music", "How physical space shapes sound experience"],
      ["Material Systems", "Fabrication Logic", "Engineering / Architecture", "How material properties constrain and enable form"],
      ["Grid Systems", "Layout Architecture", "Graphic Design / Web", "Underlying structure organizing visual elements"],
      ["Desire Paths", "Emergent Design", "Urban Planning / UX", "Where people actually walk vs. where you built the sidewalk"],
      ["Biophilic Design", "Nature Integration", "Architecture / Psychology", "Designing spaces that connect humans with natural systems"],
    ]
  },
  {
    id: "technological",
    category: "Technological & Computational Systems",
    tagline: "How machines think and scale.",
    systems: [
      ["State Machines", "Computational Logic", "Computer Science", "Finite states with defined transitions"],
      ["Neural Networks", "Machine Learning", "Artificial Intelligence", "Layers of weighted connections learning patterns"],
      ["Algorithm Design Patterns", "Computational Thinking", "Computer Science", "Divide-and-conquer, greedy, dynamic programming"],
      ["Version Control (Git)", "Change Management", "Software Engineering", "Track, branch, merge — distributed history"],
      ["API Architecture (REST / GraphQL)", "Interface Design", "Software Engineering", "How systems communicate through defined contracts"],
      ["Blockchain / Distributed Ledger", "Trustless Architecture", "Cryptography / Economics", "Decentralized consensus without central authority"],
      ["Automation Hierarchy", "Labor Replacement", "Industrial Engineering", "Manual → Assisted → Partial → Conditional → Full"],
      ["Event-Driven Architecture", "System Design", "Software Engineering", "Systems that respond to events rather than polling"],
      ["MapReduce / Parallel Processing", "Scale Architecture", "Computer Science", "Break big problems into small parallel tasks"],
      ["Turing Machine", "Computational Foundation", "Computer Science", "The theoretical basis for what is computable"],
      ["Error Correction Systems", "Reliability", "Information Theory", "Redundancy, checksums, parity"],
      ["Type Systems", "Constraint Logic", "Programming / Mathematics", "Classify data to prevent errors at compile time"],
      ["RAG (Retrieval-Augmented Generation)", "AI Architecture", "AI / Knowledge Management", "LLM reasoning + external knowledge retrieval"],
      ["Agent-Based Modeling", "Simulation", "Complexity Science / AI", "Autonomous agents following rules producing emergence"],
    ]
  },
  {
    id: "military",
    category: "Military & Conflict Systems",
    tagline: "How force, strategy, and survival operate.",
    systems: [
      ["Sun Tzu's Principles", "Strategic Philosophy", "Military Strategy", "Win without fighting; know self, know enemy"],
      ["Clausewitz's Trinity", "War Theory", "Military Philosophy", "Violence, chance, and political purpose"],
      ["OODA Loop (Expanded)", "Decision Tempo", "Military / Fighter Combat", "Speed of adaptation as decisive advantage"],
      ["Center of Gravity Analysis", "Strategic Targeting", "Military Strategy", "Identify the source of enemy strength and attack it"],
      ["Maneuver Warfare", "Operational Art", "Military Doctrine", "Defeat through disruption, not just attrition"],
      ["Intelligence Cycle", "Information Architecture", "Intelligence", "Collection → Processing → Analysis → Dissemination"],
      ["Deterrence Theory", "Conflict Prevention", "Nuclear Strategy", "Credible threat of retaliation preventing aggression"],
      ["Guerrilla Warfare Principles", "Asymmetric Strategy", "Insurgency Theory", "Weak vs. strong — mobility, dispersion, popular support"],
      ["Doctrine as System", "Codified Strategy", "Military", "Institutional knowledge codified into standard operating doctrine"],
      ["Logistics as Strategy", "Supply Architecture", "Military / Business", "Amateurs talk strategy; professionals talk logistics"],
      ["Coup d'œil (Napoleon)", "Intuitive Assessment", "Military Leadership", "Commander's intuitive grasp of a situation at a glance"],
    ]
  },
  {
    id: "legal",
    category: "Legal, Governance & Institutional Systems",
    tagline: "How societies codify order.",
    systems: [
      ["Common Law vs. Civil Law", "Legal Architecture", "Jurisprudence", "Precedent-based vs. codified statute systems"],
      ["Constitutional Design", "Governance Architecture", "Political Science", "How founding documents structure power and rights"],
      ["Separation of Powers", "Governance Structure", "Political Theory", "Legislative, executive, judicial — checks and balances"],
      ["Regulatory Frameworks", "Compliance Architecture", "Law / Public Policy", "Rules, enforcement, and oversight structures"],
      ["Social Contract Theory", "Political Foundation", "Philosophy", "Legitimacy through consent of the governed"],
      ["Polycentric Governance", "Distributed Authority", "Political Economy (Ostrom)", "Overlapping centers of decision-making"],
      ["Subsidiarity", "Authority Architecture", "Catholic Social Teaching / EU Law", "Decisions at the lowest effective level"],
      ["Just War Theory", "Ethical Framework", "Theology / International Law", "Criteria for when warfare is morally justified"],
      ["Restorative Justice", "Conflict Resolution", "Criminal Justice / Theology", "Repair harm through dialogue rather than punishment"],
      ["Parliamentary vs. Presidential", "Governance Design", "Political Science", "How executive power is structured and checked"],
    ]
  },
  {
    id: "health",
    category: "Health, Performance & Recovery Systems",
    tagline: "How the body and mind are optimized.",
    systems: [
      ["Periodization", "Performance Architecture", "Sports Science", "Cycling intensity and volume for peak performance"],
      ["Sleep Architecture", "Recovery System", "Neuroscience / Medicine", "Stages of sleep and their distinct functions"],
      ["Hormetic Stress", "Adaptive Stress", "Physiology", "Small stressors that make systems stronger"],
      ["HRV (Heart Rate Variability)", "Recovery Metric", "Sports Science", "Nervous system readiness via beat-to-beat variation"],
      ["Dopamine Regulation", "Motivation Architecture", "Neuroscience", "Baseline management for sustained drive without burnout"],
      ["Metabolic Flexibility", "Energy Systems", "Nutrition / Exercise Science", "Ability to switch between glucose and fat as fuel"],
      ["Allostatic Load Model", "Stress Architecture", "Psychoneuroimmunology", "Cumulative wear from chronic stress adaptation"],
      ["Progressive Overload", "Adaptation Principle", "Strength Training", "Gradual increase in demand drives adaptation"],
      ["Vagal Tone / Polyvagal Exercises", "Nervous System Training", "Neuroscience / Therapy", "Breath, cold, social engagement to regulate vagus nerve"],
      ["Circadian Protocol Design", "Daily Architecture", "Chronobiology", "Light, meal timing, temperature — engineering the 24-hour cycle"],
      ["Pain Science (Biopsychosocial)", "Pain Architecture", "Medicine / Psychology", "Pain as output of brain, not just input from tissue"],
    ]
  },
  {
    id: "mathematical",
    category: "Mathematical & Formal Structures",
    tagline: "The deep grammar beneath all systems.",
    systems: [
      ["Game Theory", "Strategic Interaction", "Mathematics / Economics", "Nash equilibrium, dominant strategies, cooperation dilemmas"],
      ["Probability Theory", "Uncertainty Quantification", "Mathematics", "The formal language for reasoning under uncertainty"],
      ["Graph Theory", "Network Mathematics", "Mathematics", "Nodes and edges — the math of connection"],
      ["Category Theory", "Structural Mathematics", "Mathematics", "The mathematics of mathematical structure"],
      ["Topology", "Shape Mathematics", "Mathematics", "Properties preserved under continuous deformation"],
      ["Statistical Distributions", "Pattern Mathematics", "Statistics", "Normal, power law, Poisson — shapes of randomness"],
      ["Optimization Theory", "Best-Outcome Mathematics", "Applied Mathematics", "Finding maxima and minima under constraints"],
      ["Information Entropy", "Disorder Measure", "Information Theory", "Quantifying uncertainty and information content"],
      ["Markov Chains", "State Transition", "Probability", "Future state depends only on current state"],
      ["Scaling Laws", "Growth Mathematics", "Physics / Biology", "How properties change with size"],
      ["Queueing Theory", "Wait-Time Mathematics", "Operations Research", "Modeling arrivals, service, and congestion"],
      ["Decision Theory", "Choice Mathematics", "Mathematics / Philosophy", "Formal models for rational choice under uncertainty"],
    ]
  },
  {
    id: "cultural",
    category: "Cultural, Media & Narrative Systems",
    tagline: "How stories and culture shape reality.",
    systems: [
      ["Mythic Structure", "Story Architecture", "Mythology / Screenwriting", "Universal narrative patterns across cultures"],
      ["Archetypal Systems (Jung)", "Symbolic Architecture", "Analytical Psychology", "Shadow, anima, trickster, wise old man"],
      ["McLuhan's Media Theory", "Medium as Message", "Communication Theory", "The medium shapes the message more than content"],
      ["Meme Theory (Dawkins)", "Cultural Evolution", "Evolutionary Biology", "Ideas as self-replicating units of cultural transmission"],
      ["Spectacle (Debord)", "Cultural Critique", "Critical Theory", "Life mediated by images"],
      ["Cultural Liturgies (James K.A. Smith)", "Formation Architecture", "Theology / Cultural Studies", "Practices shape desire, desire shapes identity"],
      ["Overton Window", "Discourse Architecture", "Political Science", "The shifting range of acceptable public ideas"],
      ["Collective Memory", "Shared History", "Sociology (Halbwachs)", "How groups construct shared narratives of the past"],
      ["Symbolic Interactionism", "Meaning-Making", "Sociology", "Meaning created through social interaction"],
      ["Worldview Analysis", "Ideological Architecture", "Philosophy / Theology", "Every person operates from implicit ultimate commitments"],
      ["Propaganda Model", "Narrative Control", "Media Studies", "How information is filtered, framed, and weaponized"],
    ]
  },
  {
    id: "esoteric",
    category: "Esoteric, Mystical & Fringe Systems",
    tagline: "Where the map meets the mystery.",
    systems: [
      ["Kabbalistic Tree of Life", "Mystical Architecture", "Jewish Mysticism", "Ten sefirot mapping divine attributes"],
      ["Chakra System", "Energy Architecture", "Hinduism / Yoga", "Seven energy centers from root to crown"],
      ["I Ching", "Divination System", "Chinese Philosophy", "64 hexagrams mapping patterns of change"],
      ["Hermetic Principles", "Esoteric Philosophy", "Western Esotericism", "Seven principles: mentalism, correspondence, vibration, etc."],
      ["Tarot as Archetypal Map", "Symbolic System", "Western Esotericism", "Major/minor arcana as journey of consciousness"],
      ["Sacred Geometry", "Form Mysticism", "Cross-Cultural", "Phi, Fibonacci, Platonic solids"],
      ["Enneagram (Mystical Origins)", "Personality Cosmology", "Sufism / Christianity", "Nine-pointed diagram of transformation"],
      ["Alchemy as Transformation Map", "Symbolic Process", "Esotericism / Jungian Psychology", "Nigredo, albedo, citrinitas, rubedo"],
      ["Astrological Systems", "Cosmic Architecture", "Astrology", "Planetary archetypes, houses, aspects"],
      ["Meridian Systems", "Energy Pathways", "Traditional Chinese Medicine", "Channels of qi flow mapped across the body"],
      ["Synchronicity (Jung)", "Acausal Connection", "Analytical Psychology", "Meaningful coincidences — pattern without cause"],
    ]
  },
  {
    id: "ecological",
    category: "Ecological & Environmental Systems",
    tagline: "How the living world organizes itself.",
    systems: [
      ["Carrying Capacity", "Ecological Limit", "Ecology", "Maximum population a system can sustain"],
      ["Succession Ecology", "Ecosystem Development", "Ecology", "Pioneer → Intermediate → Climax"],
      ["Nutrient Cycling", "Material Flow", "Ecology / Chemistry", "Carbon, nitrogen, phosphorus cycling through systems"],
      ["Keystone Species", "Disproportionate Impact", "Ecology", "One species holding the entire ecosystem together"],
      ["Trophic Cascades", "Top-Down Effect", "Ecology", "Changes at the top ripple through every level"],
      ["Watershed Systems", "Hydrological Architecture", "Hydrology / Ecology", "How water organizes landscape, life, and civilization"],
      ["Biome Classification", "Ecological Taxonomy", "Ecology / Geography", "Climate-based categorization of major ecosystems"],
      ["Regenerative Systems Design", "Restorative Architecture", "Ecology / Agriculture", "Design that restores rather than depletes"],
      ["Planetary Boundaries", "Earth Systems Limits", "Earth Science (Rockström)", "Nine boundaries humanity must stay within"],
      ["Circular Economy", "Waste Elimination", "Industrial Ecology", "Design out waste — materials cycle continuously"],
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  let globalIndex = 0;
  const totalSystems = DATA.reduce((sum, s) => sum + s.systems.length, 0);

  // TOC Generation
  const tocEl = document.getElementById('toc');
  let tocHTML = `<div class="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-10">Table of Contents</div>`;
  
  DATA.forEach((sec, i) => {
    tocHTML += `
      <a href="#${sec.id}" class="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline">
        <span class="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">${String(i + 1).padStart(2, '0')} — ${sec.category}</span>
        <span class="font-mono text-xs text-[#7a7572] tracking-wider">${sec.systems.length} systems</span>
      </a>
    `;
  });
  tocEl.innerHTML = tocHTML;

  // Sections Generation
  const container = document.getElementById('sectionsContainer');
  let sectionsHTML = '';

  DATA.forEach((sec, secIdx) => {
    sectionsHTML += `
      <div class="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="${sec.id}">
        <div class="mb-12 reveal section-header">
          <div class="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">${String(secIdx + 1).padStart(2, '0')} / ${DATA.length}</div>
          <div class="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">${sec.category}</div>
          <div class="font-display text-lg md:text-xl italic text-[#a09a94]">${sec.tagline}</div>
          <div class="w-16 h-px bg-[#c8935a] mt-6"></div>
        </div>
    `;

    sec.systems.forEach((sys) => {
      globalIndex++;
      sectionsHTML += `
        <div class="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-name="${sys[0].toLowerCase()}" data-type="${sys[1].toLowerCase()}" data-discipline="${sys[2].toLowerCase()}" data-desc="${sys[3].toLowerCase()}">
          <div class="font-mono text-xs text-[#4a4643] pt-1">${String(globalIndex).padStart(3, '0')}</div>
          <div class="flex flex-col gap-1">
            <div class="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">${sys[0]}</div>
            <div class="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">${sys[3]}</div>
          </div>
          <div class="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">${sys[1]}</div>
          <div class="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">${sys[2]}</div>
        </div>
      `;
    });

    sectionsHTML += `</div>`;
  });
  
  container.innerHTML = sectionsHTML;

  // Initial Hero Reveal
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('active');
      }
    });
  }, 100);

  // Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Search Filter logic
  const searchInput = document.getElementById('searchInput');
  const filterCount = document.getElementById('filterCount');

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    let visible = 0;
    const rows = document.querySelectorAll('.system-row');

    rows.forEach(row => {
      if (!q) {
        row.style.display = '';
        row.classList.add('active');
        visible++;
      } else {
        const match = row.dataset.name.includes(q) ||
                      row.dataset.type.includes(q) ||
                      row.dataset.discipline.includes(q) ||
                      row.dataset.desc.includes(q);
        row.style.display = match ? '' : 'none';
        if (match) {
          row.classList.add('active');
          visible++;
        }
      }
    });

    document.querySelectorAll('.section').forEach(sec => {
      const visibleRows = sec.querySelectorAll('.system-row:not([style*="display: none"])');
      const header = sec.querySelector('.section-header');
      if (q && visibleRows.length === 0) {
        header.style.display = 'none';
      } else {
        header.style.display = '';
        header.classList.add('active');
      }
    });

    filterCount.textContent = `${visible} of ${totalSystems}`;
  });

  // Back to top observer
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      backTop.classList.remove('opacity-0', 'translate-y-5', 'pointer-events-none');
      backTop.classList.add('opacity-100', 'translate-y-0');
    } else {
      backTop.classList.add('opacity-0', 'translate-y-5', 'pointer-events-none');
      backTop.classList.remove('opacity-100', 'translate-y-0');
    }
  });
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
      

<div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.035] bg-grain mix-blend-overlay"></div>

<nav className="fixed inset-x-0 top-0 z-[1000] flex justify-between items-center py-5 px-6 md:px-12 bg-gradient-to-b from-[#0f0d0b]/95 to-transparent backdrop-blur-md">
<a className="uppercase outline-none text-xl font-medium text-[#c8935a] tracking-tighter font-display" href="#">Superhuman Systems</a>
<div className="font-mono text-xs text-[#7a7572] tracking-widest uppercase">
<span className="text-[#c8935a]">352</span> systems · <span className="text-[#c8935a]">23</span> categories
  </div>
</nav>

<section className="min-h-screen flex flex-col text-center pt-32 pr-6 pb-20 pl-6 relative items-center justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(200,147,90,0.06)_0%,transparent_70%)] pointer-events-none"></div>
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-8 reveal" style={{transitionDelay: '200ms'}}>Superhuman Systems — Master Content List</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extralight leading-[1.1] text-[#f5f1eb] mb-4 tracking-tight reveal" style={{transitionDelay: '400ms'}}>
    Every system.<br/><em className="text-[#c8935a] italic">Every discipline.</em>
</h1>
<p className="font-display text-lg md:text-xl lg:text-2xl font-extralight italic text-[#a09a94] max-w-2xl mb-12 reveal" style={{transitionDelay: '600ms'}}>
    352 systems across 23 categories. Seven years of weekly content, organized by function — how each system decides, builds, forms, governs, or reveals.
  </p>
<div className="flex flex-col sm:flex-row gap-8 md:gap-12 reveal" style={{transitionDelay: '800ms'}}>
<div className="text-center">
<div className="font-display text-5xl md:text-6xl font-extralight text-[#c8935a] leading-none tracking-tight">352</div>
<div className="font-mono text-xs tracking-widest uppercase text-[#7a7572] mt-2">Systems</div>
</div>
<div className="text-center">
<div className="font-display text-5xl md:text-6xl font-extralight text-[#c8935a] leading-none tracking-tight">23</div>
<div className="font-mono text-xs tracking-widest uppercase text-[#7a7572] mt-2">Categories</div>
</div>
<div className="text-center">
<div className="font-display text-5xl md:text-6xl font-extralight text-[#c8935a] leading-none tracking-tight">7</div>
<div className="font-mono text-xs tracking-widest uppercase text-[#7a7572] mt-2">Years of Content</div>
</div>
</div>
<div className="absolute bottom-10 flex flex-col items-center gap-2 reveal" style={{transitionDelay: '1100ms'}}>
<span className="font-mono text-xs tracking-widest uppercase text-[#4a4643]">Scroll</span>
<div className="w-px h-10 bg-gradient-to-b from-[#8a6a3e] to-transparent pulse-line"></div>
</div>
</section>

<div className="sticky top-0 z-[900] bg-[#0f0d0b]/90 backdrop-blur-xl border-b border-[#c8935a]/10 py-4 px-6 md:px-12 flex flex-wrap sm:flex-nowrap items-center gap-4" id="filterBar">
<label className="font-mono text-xs tracking-widest uppercase text-[#7a7572] hidden sm:block whitespace-nowrap">Search</label>
<input className="flex-1 bg-[#2a2725]/60 border border-[#4a4643] rounded py-2.5 px-4 font-body text-sm font-extralight text-[#d4cec6] outline-none focus:border-[#8a6a3e] transition-colors placeholder:text-[#4a4643]" id="searchInput" placeholder="Filter by name, discipline, type..." type="text"/>
<div className="font-mono text-xs text-[#c8935a] whitespace-nowrap min-w-[100px] text-center sm:text-right w-full sm:w-auto" id="filterCount">352 of 352</div>
</div>

<div className="max-w-4xl mx-auto py-20 px-6 md:px-12" id="toc"><div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-10">Table of Contents</div>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#decision">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">01 — Decision &amp; Prioritization Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">19 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#strategic">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">02 — Strategic &amp; Competitive Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">20 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#execution">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">03 — Execution &amp; Operational Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">21 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#thinking">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">04 — Thinking &amp; Reasoning Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">20 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#behavior">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">05 — Human Behavior &amp; Psychology Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">24 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#communication">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">06 — Communication &amp; Persuasion Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">18 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#leadership">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">07 — Leadership &amp; Organizational Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">16 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#financial">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">08 — Financial &amp; Economic Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">16 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#biological">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">09 — Biological &amp; Living Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">14 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#complexity">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">10 — Complexity &amp; Systems Science</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">17 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#theological">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">11 — Theological &amp; Philosophical Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">22 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#formation">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">12 — Formation &amp; Identity Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">16 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#relational">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">13 — Relational &amp; Social Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">13 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#information">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">14 — Information &amp; Knowledge Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">14 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#spatial">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">15 — Spatial, Design &amp; Material Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">12 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#technological">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">16 — Technological &amp; Computational Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">14 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#military">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">17 — Military &amp; Conflict Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">11 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#legal">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">18 — Legal, Governance &amp; Institutional Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">10 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#health">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">19 — Health, Performance &amp; Recovery Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">11 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#mathematical">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">20 — Mathematical &amp; Formal Structures</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">12 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#cultural">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">21 — Cultural, Media &amp; Narrative Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">11 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#esoteric">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">22 — Esoteric, Mystical &amp; Fringe Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">11 systems</span>
</a>
<a className="flex justify-between items-baseline py-3.5 border-b border-[#4a4643]/30 cursor-pointer transition-all duration-300 hover:pl-3 hover:border-[#8a6a3e] group no-underline" href="#ecological">
<span className="font-display text-lg md:text-xl font-light text-[#d4cec6] group-hover:text-[#c8935a] transition-colors">23 — Ecological &amp; Environmental Systems</span>
<span className="font-mono text-xs text-[#7a7572] tracking-wider">10 systems</span>
</a>
</div>
<div className="max-w-4xl mx-auto px-6 md:px-12">
<div className="w-full h-px bg-gradient-to-r from-transparent via-[#8a6a3e] to-transparent my-12 opacity-50"></div>
</div>

<div className="" id="sectionsContainer">
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="decision">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">01 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Decision &amp; Prioritization Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How to choose what matters.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="urgent vs. important quadrant for task triage" data-discipline="productivity / military" data-name="eisenhower matrix" data-type="prioritization">
<div className="font-mono text-xs text-[#4a4643] pt-1">001</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Eisenhower Matrix</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Urgent vs. important quadrant for task triage</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Prioritization</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Productivity / Military</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="observe–orient–decide–act cycle for rapid decision-making" data-discipline="military strategy" data-name="ooda loop" data-type="decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">002</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">OODA Loop</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Observe–Orient–Decide–Act cycle for rapid decision-making</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Military Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="decompose problems to foundational truths and rebuild" data-discipline="philosophy / engineering" data-name="first principles thinking" data-type="decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">003</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">First Principles Thinking</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Decompose problems to foundational truths and rebuild</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy / Engineering</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="solve by imagining the worst outcome and working backward" data-discipline="mathematics / stoicism" data-name="inversion" data-type="decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">004</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Inversion</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Solve by imagining the worst outcome and working backward</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Mathematics / Stoicism</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="map the consequences of consequences" data-discipline="economics / systems theory" data-name="second-order thinking" data-type="decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">005</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Second-Order Thinking</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Map the consequences of consequences</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Economics / Systems Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="bezos' framework: minimize lifetime regret" data-discipline="entrepreneurship" data-name="regret minimization framework" data-type="decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">006</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Regret Minimization Framework</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Bezos' framework: minimize lifetime regret</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Entrepreneurship</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="80% of results from 20% of inputs" data-discipline="economics" data-name="pareto principle (80/20)" data-type="prioritization">
<div className="font-mono text-xs text-[#4a4643] pt-1">007</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Pareto Principle (80/20)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">80% of results from 20% of inputs</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Prioritization</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="score options against weighted criteria" data-discipline="operations research" data-name="decision matrix (weighted scoring)" data-type="decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">008</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Decision Matrix (Weighted Scoring)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Score options against weighted criteria</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Operations Research</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="match decision approach to problem domain: simple, complicated, complex, chaotic" data-discipline="complexity science" data-name="cynefin framework" data-type="decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">009</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Cynefin Framework</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Match decision approach to problem domain: simple, complicated, complex, chaotic</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Complexity Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="imagine failure in advance to surface hidden risks" data-discipline="cognitive psychology" data-name="pre-mortem analysis" data-type="risk / decision">
<div className="font-mono text-xs text-[#4a4643] pt-1">010</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Pre-Mortem Analysis</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Imagine failure in advance to surface hidden risks</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Risk / Decision</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Cognitive Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="minimize the maximum possible loss" data-discipline="game theory" data-name="minimax strategy" data-type="decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">011</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Minimax Strategy</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Minimize the maximum possible loss</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Game Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="when 'good enough' outperforms 'optimal'" data-discipline="behavioral economics" data-name="satisficing vs. maximizing" data-type="decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">012</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Satisficing vs. Maximizing</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">When 'good enough' outperforms 'optimal'</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Behavioral Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how experts decide under time pressure using pattern recognition" data-discipline="naturalistic decision theory" data-name="recognition-primed decision model" data-type="decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">013</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Recognition-Primed Decision Model</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How experts decide under time pressure using pattern recognition</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Naturalistic Decision Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="competitive advantage through speed of adaptation" data-discipline="military aviation" data-name="boyd's energy-maneuverability theory" data-type="decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">014</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Boyd's Energy-Maneuverability Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Competitive advantage through speed of adaptation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Military Aviation</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="when to decide alone vs. involve the team" data-discipline="management science" data-name="vroom-yetton decision model" data-type="decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">015</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Vroom-Yetton Decision Model</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">When to decide alone vs. involve the team</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Management Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="systematic situation appraisal, problem analysis, decision analysis" data-discipline="operations" data-name="kepner-tregoe method" data-type="decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">016</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Kepner-Tregoe Method</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Systematic situation appraisal, problem analysis, decision analysis</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Operations</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="impact × confidence × ease for rapid prioritization" data-discipline="product management" data-name="ice scoring" data-type="prioritization">
<div className="font-mono text-xs text-[#4a4643] pt-1">017</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">ICE Scoring</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Impact × Confidence × Ease for rapid prioritization</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Prioritization</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Product Management</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="reach × impact × confidence ÷ effort" data-discipline="product management" data-name="rice framework" data-type="prioritization">
<div className="font-mono text-xs text-[#4a4643] pt-1">018</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">RICE Framework</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Reach × Impact × Confidence ÷ Effort</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Prioritization</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Product Management</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="pairwise comparison for multi-criteria decisions" data-discipline="operations research" data-name="analytic hierarchy process" data-type="decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">019</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Analytic Hierarchy Process</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Pairwise comparison for multi-criteria decisions</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Operations Research</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="strategic">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">02 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Strategic &amp; Competitive Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How to position and win.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="analyze industry attractiveness via five structural forces" data-discipline="business strategy" data-name="porter's five forces" data-type="competitive analysis">
<div className="font-mono text-xs text-[#4a4643] pt-1">020</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Porter's Five Forces</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Analyze industry attractiveness via five structural forces</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Competitive Analysis</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Business Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="strengths, weaknesses, opportunities, threats" data-discipline="business strategy" data-name="swot analysis" data-type="strategic planning">
<div className="font-mono text-xs text-[#4a4643] pt-1">021</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">SWOT Analysis</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Strengths, weaknesses, opportunities, threats</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Strategic Planning</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Business Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="create uncontested market space instead of competing" data-discipline="business strategy" data-name="blue ocean strategy" data-type="market creation">
<div className="font-mono text-xs text-[#4a4643] pt-1">022</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Blue Ocean Strategy</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Create uncontested market space instead of competing</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Market Creation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Business Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="map value chains by evolution stage to find strategic moves" data-discipline="technology strategy" data-name="wardley mapping" data-type="strategic positioning">
<div className="font-mono text-xs text-[#4a4643] pt-1">023</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Wardley Mapping</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Map value chains by evolution stage to find strategic moves</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Strategic Positioning</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Technology Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="four growth paths: penetration, development, diversification, new markets" data-discipline="business strategy" data-name="ansoff matrix" data-type="growth strategy">
<div className="font-mono text-xs text-[#4a4643] pt-1">024</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Ansoff Matrix</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Four growth paths: penetration, development, diversification, new markets</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Growth Strategy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Business Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="stars, cash cows, question marks, dogs" data-discipline="business strategy" data-name="bcg growth-share matrix" data-type="portfolio strategy">
<div className="font-mono text-xs text-[#4a4643] pt-1">025</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">BCG Growth-Share Matrix</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Stars, cash cows, question marks, dogs</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Portfolio Strategy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Business Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="customers hire products to do a job" data-discipline="innovation" data-name="jobs to be done (jtbd)" data-type="market strategy">
<div className="font-mono text-xs text-[#4a4643] pt-1">026</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Jobs To Be Done (JTBD)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Customers hire products to do a job</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Market Strategy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Innovation</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="self-reinforcing cycle of compounding advantage" data-discipline="business strategy" data-name="flywheel effect" data-type="momentum strategy">
<div className="font-mono text-xs text-[#4a4643] pt-1">027</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Flywheel Effect</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Self-reinforcing cycle of compounding advantage</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Momentum Strategy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Business Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="durable advantages: network effects, switching costs, brand, cost" data-discipline="business strategy" data-name="strategic moats" data-type="competitive advantage">
<div className="font-mono text-xs text-[#4a4643] pt-1">028</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Strategic Moats</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Durable advantages: network effects, switching costs, brand, cost</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Competitive Advantage</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Business Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="map activities that create value from inputs to delivery" data-discipline="business strategy" data-name="value chain analysis" data-type="operational strategy">
<div className="font-mono text-xs text-[#4a4643] pt-1">029</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Value Chain Analysis</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Map activities that create value from inputs to delivery</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Operational Strategy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Business Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="multi-sided markets, network effects, winner-take-all dynamics" data-discipline="technology / economics" data-name="platform dynamics" data-type="market architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">030</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Platform Dynamics</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Multi-sided markets, network effects, winner-take-all dynamics</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Market Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Technology / Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how low-end entrants topple incumbents" data-discipline="innovation theory" data-name="disruptive innovation theory" data-type="market evolution">
<div className="font-mono text-xs text-[#4a4643] pt-1">031</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Disruptive Innovation Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How low-end entrants topple incumbents</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Market Evolution</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Innovation Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="running faster just to stay in place" data-discipline="evolutionary biology / strategy" data-name="red queen effect" data-type="competitive dynamics">
<div className="font-mono text-xs text-[#4a4643] pt-1">032</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Red Queen Effect</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Running faster just to stay in place</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Competitive Dynamics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Evolutionary Biology / Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="political, economic, social, technological, legal, environmental scanning" data-discipline="business strategy" data-name="pestle analysis" data-type="macro strategy">
<div className="font-mono text-xs text-[#4a4643] pt-1">033</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">PESTLE Analysis</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Political, Economic, Social, Technological, Legal, Environmental scanning</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Macro Strategy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Business Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="multiple plausible futures to stress-test strategy" data-discipline="military / business" data-name="scenario planning" data-type="strategic foresight">
<div className="font-mono text-xs text-[#4a4643] pt-1">034</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Scenario Planning</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Multiple plausible futures to stress-test strategy</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Strategic Foresight</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Military / Business</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="manage current business, emerging opportunities, and future bets" data-discipline="mckinsey" data-name="three horizons framework" data-type="innovation strategy">
<div className="font-mono text-xs text-[#4a4643] pt-1">035</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Three Horizons Framework</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Manage current business, emerging opportunities, and future bets</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Innovation Strategy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">McKinsey</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="extreme safety + extreme risk, nothing in the middle" data-discipline="finance / nassim taleb" data-name="barbell strategy" data-type="risk strategy">
<div className="font-mono text-xs text-[#4a4643] pt-1">036</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Barbell Strategy</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Extreme safety + extreme risk, nothing in the middle</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Risk Strategy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Finance / Nassim Taleb</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how incumbents prevent disruption in adjacent markets" data-discipline="technology" data-name="kill zone strategy" data-type="competitive defense">
<div className="font-mono text-xs text-[#4a4643] pt-1">037</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Kill Zone Strategy</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How incumbents prevent disruption in adjacent markets</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Competitive Defense</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Technology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="gap between early adopters and mainstream market" data-discipline="technology marketing" data-name="crossing the chasm" data-type="adoption strategy">
<div className="font-mono text-xs text-[#4a4643] pt-1">038</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Crossing the Chasm</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Gap between early adopters and mainstream market</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Adoption Strategy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Technology Marketing</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="visual map of where competitors sit on key dimensions" data-discipline="business strategy" data-name="competitive landscape mapping" data-type="positioning">
<div className="font-mono text-xs text-[#4a4643] pt-1">039</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Competitive Landscape Mapping</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Visual map of where competitors sit on key dimensions</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Positioning</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Business Strategy</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="execution">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">03 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Execution &amp; Operational Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How to build and ship.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="iterative delivery with short feedback loops" data-discipline="software / management" data-name="agile methodology" data-type="execution">
<div className="font-mono text-xs text-[#4a4643] pt-1">040</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Agile Methodology</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Iterative delivery with short feedback loops</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Execution</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Software / Management</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="sprints, standups, retrospectives — structured agile" data-discipline="software development" data-name="scrum framework" data-type="execution">
<div className="font-mono text-xs text-[#4a4643] pt-1">041</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Scrum Framework</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Sprints, standups, retrospectives — structured agile</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Execution</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Software Development</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="visual board limiting work in progress" data-discipline="manufacturing / software" data-name="kanban" data-type="workflow management">
<div className="font-mono text-xs text-[#4a4643] pt-1">042</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Kanban</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Visual board limiting work in progress</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Workflow Management</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Manufacturing / Software</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="eliminate waste, continuous improvement" data-discipline="manufacturing (toyota)" data-name="lean manufacturing" data-type="operational efficiency">
<div className="font-mono text-xs text-[#4a4643] pt-1">043</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Lean Manufacturing</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Eliminate waste, continuous improvement</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Operational Efficiency</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Manufacturing (Toyota)</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="define–measure–analyze–improve–control for defect reduction" data-discipline="manufacturing / statistics" data-name="six sigma (dmaic)" data-type="quality control">
<div className="font-mono text-xs text-[#4a4643] pt-1">044</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Six Sigma (DMAIC)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Define–Measure–Analyze–Improve–Control for defect reduction</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Quality Control</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Manufacturing / Statistics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="find and exploit the constraint that limits throughput" data-discipline="operations management" data-name="theory of constraints" data-type="bottleneck analysis">
<div className="font-mono text-xs text-[#4a4643] pt-1">045</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Theory of Constraints</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Find and exploit the constraint that limits throughput</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Bottleneck Analysis</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Operations Management</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="ambitious objectives with measurable key results" data-discipline="management" data-name="okrs" data-type="goal-setting">
<div className="font-mono text-xs text-[#4a4643] pt-1">046</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">OKRs</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Ambitious objectives with measurable key results</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Goal-Setting</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Management</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="vision, traction, healthy team — wickman's framework" data-discipline="small business" data-name="eos (entrepreneurial operating system)" data-type="business operations">
<div className="font-mono text-xs text-[#4a4643] pt-1">047</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">EOS (Entrepreneurial Operating System)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Vision, traction, healthy team — Wickman's framework</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Business Operations</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Small Business</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="capture, clarify, organize, reflect, engage" data-discipline="productivity" data-name="getting things done (gtd)" data-type="personal productivity">
<div className="font-mono text-xs text-[#4a4643] pt-1">048</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Getting Things Done (GTD)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Capture, clarify, organize, reflect, engage</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Personal Productivity</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Productivity</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="25-minute focused work blocks with breaks" data-discipline="productivity" data-name="pomodoro technique" data-type="time management">
<div className="font-mono text-xs text-[#4a4643] pt-1">049</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Pomodoro Technique</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">25-minute focused work blocks with breaks</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Time Management</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Productivity</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="assign every hour a purpose" data-discipline="productivity" data-name="time blocking" data-type="schedule architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">050</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Time Blocking</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Assign every hour a purpose</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Schedule Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Productivity</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="plan–do–check–act iterative improvement loop" data-discipline="quality management" data-name="pdca cycle" data-type="continuous improvement">
<div className="font-mono text-xs text-[#4a4643] pt-1">051</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">PDCA Cycle</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Plan–Do–Check–Act iterative improvement loop</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Continuous Improvement</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Quality Management</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="sort, set, shine, standardize, sustain" data-discipline="lean manufacturing" data-name="5s system" data-type="workplace organization">
<div className="font-mono text-xs text-[#4a4643] pt-1">052</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">5S System</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Sort, Set, Shine, Standardize, Sustain</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Workplace Organization</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Lean Manufacturing</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="codified repeatable processes" data-discipline="operations" data-name="standard operating procedures" data-type="process documentation">
<div className="font-mono text-xs text-[#4a4643] pt-1">053</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Standard Operating Procedures</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Codified repeatable processes</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Process Documentation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Operations</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="define intent, delegate method" data-discipline="military" data-name="mission-type tactics (auftragstaktik)" data-type="decentralized execution">
<div className="font-mono text-xs text-[#4a4643] pt-1">054</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Mission-Type Tactics (Auftragstaktik)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Define intent, delegate method</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decentralized Execution</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Military</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="small, daily, compounding improvements" data-discipline="japanese manufacturing" data-name="kaizen" data-type="continuous improvement">
<div className="font-mono text-xs text-[#4a4643] pt-1">055</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Kaizen</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Small, daily, compounding improvements</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Continuous Improvement</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Japanese Manufacturing</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="hierarchical decomposition of deliverables" data-discipline="project management" data-name="work breakdown structure" data-type="project planning">
<div className="font-mono text-xs text-[#4a4643] pt-1">056</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Work Breakdown Structure</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Hierarchical decomposition of deliverables</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Project Planning</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Project Management</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="identify longest sequence determining project duration" data-discipline="engineering / construction" data-name="critical path method" data-type="project scheduling">
<div className="font-mono text-xs text-[#4a4643] pt-1">057</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Critical Path Method</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Identify longest sequence determining project duration</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Project Scheduling</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Engineering / Construction</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="linear phases: requirements → design → build → test → deploy" data-discipline="engineering" data-name="waterfall methodology" data-type="sequential execution">
<div className="font-mono text-xs text-[#4a4643] pt-1">058</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Waterfall Methodology</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Linear phases: requirements → design → build → test → deploy</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Sequential Execution</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Engineering</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="continuous integration and continuous delivery" data-discipline="software engineering" data-name="devops / ci-cd pipeline" data-type="delivery automation">
<div className="font-mono text-xs text-[#4a4643] pt-1">059</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">DevOps / CI-CD Pipeline</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Continuous integration and continuous delivery</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Delivery Automation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Software Engineering</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="responsible, accountable, consulted, informed" data-discipline="project management" data-name="raci matrix" data-type="role clarity">
<div className="font-mono text-xs text-[#4a4643] pt-1">060</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">RACI Matrix</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Responsible, Accountable, Consulted, Informed</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Role Clarity</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Project Management</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="thinking">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">04 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Thinking &amp; Reasoning Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How to think clearly.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="build a lattice of models from many disciplines" data-discipline="investing / philosophy" data-name="mental models (munger's latticework)" data-type="multi-disciplinary thinking">
<div className="font-mono text-xs text-[#4a4643] pt-1">061</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Mental Models (Munger's Latticework)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Build a lattice of models from many disciplines</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Multi-Disciplinary Thinking</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Investing / Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="see wholes, feedback loops, emergent behavior" data-discipline="systems theory" data-name="systems thinking" data-type="holistic analysis">
<div className="font-mono text-xs text-[#4a4643] pt-1">062</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Systems Thinking</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">See wholes, feedback loops, emergent behavior</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Holistic Analysis</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Systems Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="thesis–antithesis–synthesis; or existential stages" data-discipline="philosophy (hegel / kierkegaard)" data-name="dialectical thinking" data-type="synthesis">
<div className="font-mono text-xs text-[#4a4643] pt-1">063</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Dialectical Thinking</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Thesis–antithesis–synthesis; or existential stages</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Synthesis</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy (Hegel / Kierkegaard)</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="update beliefs based on new evidence" data-discipline="statistics / epistemology" data-name="bayesian reasoning" data-type="probabilistic thinking">
<div className="font-mono text-xs text-[#4a4643] pt-1">064</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Bayesian Reasoning</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Update beliefs based on new evidence</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Probabilistic Thinking</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Statistics / Epistemology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="systematic questioning to expose assumptions" data-discipline="philosophy" data-name="socratic method" data-type="critical inquiry">
<div className="font-mono text-xs text-[#4a4643] pt-1">065</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Socratic Method</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Systematic questioning to expose assumptions</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Critical Inquiry</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="construct the strongest version of the opposing argument" data-discipline="philosophy / rhetoric" data-name="steelmanning" data-type="argumentation">
<div className="font-mono text-xs text-[#4a4643] pt-1">066</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Steelmanning</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Construct the strongest version of the opposing argument</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Argumentation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy / Rhetoric</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="prefer the simplest sufficient explanation" data-discipline="philosophy / science" data-name="occam's razor" data-type="simplification">
<div className="font-mono text-xs text-[#4a4643] pt-1">067</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Occam's Razor</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Prefer the simplest sufficient explanation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Simplification</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy / Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="never attribute to malice what can be explained by incompetence" data-discipline="philosophy" data-name="hanlon's razor" data-type="attribution">
<div className="font-mono text-xs text-[#4a4643] pt-1">068</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Hanlon's Razor</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Never attribute to malice what can be explained by incompetence</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Attribution</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="the model is not the reality" data-discipline="general semantics" data-name="map vs. territory" data-type="epistemology">
<div className="font-mono text-xs text-[#4a4643] pt-1">069</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Map vs. Territory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">The model is not the reality</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Epistemology</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">General Semantics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="know what you know and what you don't" data-discipline="investing (buffett)" data-name="circle of competence" data-type="self-knowledge">
<div className="font-mono text-xs text-[#4a4643] pt-1">070</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Circle of Competence</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Know what you know and what you don't</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Self-Knowledge</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Investing (Buffett)</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="explore ideas through imagined scenarios" data-discipline="philosophy / physics" data-name="thought experiments" data-type="reasoning">
<div className="font-mono text-xs text-[#4a4643] pt-1">071</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Thought Experiments</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Explore ideas through imagined scenarios</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Reasoning</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy / Physics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="inference to the best explanation" data-discipline="logic / science" data-name="abductive reasoning" data-type="inference">
<div className="font-mono text-xs text-[#4a4643] pt-1">072</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Abductive Reasoning</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Inference to the best explanation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Inference</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Logic / Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="map structures from known to unknown domains" data-discipline="cognitive science" data-name="analogical reasoning" data-type="transfer">
<div className="font-mono text-xs text-[#4a4643] pt-1">073</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Analogical Reasoning</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Map structures from known to unknown domains</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Transfer</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Cognitive Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="break down vs. understand as whole" data-discipline="philosophy of science" data-name="reductionism vs. holism" data-type="analysis method">
<div className="font-mono text-xs text-[#4a4643] pt-1">074</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Reductionism vs. Holism</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Break down vs. understand as whole</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Analysis Method</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy of Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="bracket assumptions to see the thing itself" data-discipline="philosophy (husserl)" data-name="phenomenological reduction" data-type="perception">
<div className="font-mono text-xs text-[#4a4643] pt-1">075</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Phenomenological Reduction</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Bracket assumptions to see the thing itself</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Perception</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy (Husserl)</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="necessity, possibility, contingency" data-discipline="philosophy / mathematics" data-name="modal logic" data-type="reasoning">
<div className="font-mono text-xs text-[#4a4643] pt-1">076</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Modal Logic</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Necessity, possibility, contingency</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Reasoning</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy / Mathematics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="a claim must be testable to be scientific" data-discipline="philosophy of science (popper)" data-name="falsifiability" data-type="epistemic standard">
<div className="font-mono text-xs text-[#4a4643] pt-1">077</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Falsifiability</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">A claim must be testable to be scientific</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Epistemic Standard</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy of Science (Popper)</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how groups construct meaning from ambiguity" data-discipline="organizational theory" data-name="sensemaking (weick)" data-type="organizational cognition">
<div className="font-mono text-xs text-[#4a4643] pt-1">078</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Sensemaking (Weick)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How groups construct meaning from ambiguity</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Organizational Cognition</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Organizational Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="question the assumptions behind the strategy" data-discipline="organizational learning" data-name="double-loop learning" data-type="adaptive thinking">
<div className="font-mono text-xs text-[#4a4643] pt-1">079</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Double-Loop Learning</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Question the assumptions behind the strategy</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Adaptive Thinking</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Organizational Learning</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="trace how raw data becomes action through filters" data-discipline="organizational psychology" data-name="ladder of inference" data-type="cognitive awareness">
<div className="font-mono text-xs text-[#4a4643] pt-1">080</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Ladder of Inference</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Trace how raw data becomes action through filters</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Cognitive Awareness</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Organizational Psychology</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="behavior">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">05 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Human Behavior &amp; Psychology Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How people actually work.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="survival → safety → belonging → esteem → self-actualization" data-discipline="humanistic psychology" data-name="maslow's hierarchy of needs" data-type="motivation">
<div className="font-mono text-xs text-[#4a4643] pt-1">081</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Maslow's Hierarchy of Needs</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Survival → Safety → Belonging → Esteem → Self-Actualization</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Motivation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Humanistic Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="autonomy, competence, relatedness as core drives" data-discipline="psychology" data-name="self-determination theory" data-type="motivation">
<div className="font-mono text-xs text-[#4a4643] pt-1">082</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Self-Determination Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Autonomy, competence, relatedness as core drives</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Motivation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="thoughts → feelings → behaviors — and how to intervene" data-discipline="clinical psychology" data-name="cognitive behavioral model" data-type="thought-behavior loop">
<div className="font-mono text-xs text-[#4a4643] pt-1">083</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Cognitive Behavioral Model</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Thoughts → Feelings → Behaviors — and how to intervene</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Thought-Behavior Loop</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Clinical Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="precontemplation through maintenance" data-discipline="psychology" data-name="stages of change" data-type="behavior change">
<div className="font-mono text-xs text-[#4a4643] pt-1">084</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Stages of Change</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Precontemplation through maintenance</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Behavior Change</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how habits form and how to rewire them" data-discipline="neuroscience / psychology" data-name="habit loop (cue-routine-reward)" data-type="behavior design">
<div className="font-mono text-xs text-[#4a4643] pt-1">085</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Habit Loop (Cue-Routine-Reward)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How habits form and how to rewire them</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Behavior Design</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Neuroscience / Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="choice architecture to influence decisions without mandates" data-discipline="behavioral economics" data-name="nudge theory" data-type="behavior architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">086</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Nudge Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Choice architecture to influence decisions without mandates</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Behavior Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Behavioral Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="losses hurt ~2x more than equivalent gains" data-discipline="behavioral economics" data-name="loss aversion" data-type="bias awareness">
<div className="font-mono text-xs text-[#4a4643] pt-1">087</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Loss Aversion</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Losses hurt ~2x more than equivalent gains</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Bias Awareness</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Behavioral Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how people evaluate gains and losses asymmetrically" data-discipline="behavioral economics" data-name="prospect theory" data-type="decision under risk">
<div className="font-mono text-xs text-[#4a4643] pt-1">088</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Prospect Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How people evaluate gains and losses asymmetrically</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision Under Risk</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Behavioral Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="incompetence breeds overconfidence; expertise breeds doubt" data-discipline="cognitive psychology" data-name="dunning-kruger effect" data-type="self-assessment">
<div className="font-mono text-xs text-[#4a4643] pt-1">089</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Dunning-Kruger Effect</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Incompetence breeds overconfidence; expertise breeds doubt</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Self-Assessment</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Cognitive Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="secure, anxious, avoidant — wiring from early relationships" data-discipline="developmental psychology" data-name="attachment theory" data-type="relational patterns">
<div className="font-mono text-xs text-[#4a4643] pt-1">090</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Attachment Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Secure, anxious, avoidant — wiring from early relationships</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Relational Patterns</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Developmental Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="parts, protectors, exiles, self — inner ecology" data-discipline="psychotherapy" data-name="internal family systems (ifs)" data-type="inner architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">091</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Internal Family Systems (IFS)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Parts, protectors, exiles, Self — inner ecology</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Inner Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Psychotherapy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="nine types, core fears, integration paths" data-discipline="personality psychology" data-name="enneagram" data-type="personality architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">092</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Enneagram</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Nine types, core fears, integration paths</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Personality Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Personality Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="openness, conscientiousness, extraversion, agreeableness, neuroticism" data-discipline="psychology" data-name="big five (ocean)" data-type="personality traits">
<div className="font-mono text-xs text-[#4a4643] pt-1">093</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Big Five (OCEAN)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Personality Traits</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="value systems evolving through stages of complexity" data-discipline="developmental psychology" data-name="spiral dynamics" data-type="developmental stages">
<div className="font-mono text-xs text-[#4a4643] pt-1">094</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Spiral Dynamics</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Value systems evolving through stages of complexity</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Developmental Stages</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Developmental Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="when repeated failure trains passivity" data-discipline="psychology (seligman)" data-name="learned helplessness" data-type="behavioral pattern">
<div className="font-mono text-xs text-[#4a4643] pt-1">095</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Learned Helplessness</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">When repeated failure trains passivity</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Behavioral Pattern</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Psychology (Seligman)</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="challenge/skill balance producing total absorption" data-discipline="positive psychology" data-name="flow state" data-type="optimal performance">
<div className="font-mono text-xs text-[#4a4643] pt-1">096</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Flow State</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Challenge/skill balance producing total absorption</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Optimal Performance</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Positive Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="ventral vagal, sympathetic, dorsal vagal — safety/fight/shutdown" data-discipline="neuroscience" data-name="polyvagal theory" data-type="nervous system regulation">
<div className="font-mono text-xs text-[#4a4643] pt-1">097</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Polyvagal Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Ventral vagal, sympathetic, dorsal vagal — safety/fight/shutdown</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Nervous System Regulation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Neuroscience</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="discomfort from holding contradictory beliefs" data-discipline="social psychology" data-name="cognitive dissonance" data-type="belief-behavior gap">
<div className="font-mono text-xs text-[#4a4643] pt-1">098</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Cognitive Dissonance</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Discomfort from holding contradictory beliefs</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Belief-Behavior Gap</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Social Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="we define ourselves by our groups" data-discipline="social psychology" data-name="social identity theory" data-type="group dynamics">
<div className="font-mono text-xs text-[#4a4643] pt-1">099</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Social Identity Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">We define ourselves by our groups</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Group Dynamics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Social Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="we desire what others desire — rivalry and scapegoating" data-discipline="philosophical anthropology" data-name="mimetic desire (girard)" data-type="desire formation">
<div className="font-mono text-xs text-[#4a4643] pt-1">100</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Mimetic Desire (Girard)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">We desire what others desire — rivalry and scapegoating</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Desire Formation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophical Anthropology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="behavior shaped by consequences" data-discipline="behavioral psychology" data-name="operant conditioning" data-type="reinforcement">
<div className="font-mono text-xs text-[#4a4643] pt-1">101</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Operant Conditioning</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Behavior shaped by consequences</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Reinforcement</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Behavioral Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="stages of ego complexity from impulsive to integrated" data-discipline="developmental psychology" data-name="ego development theory" data-type="maturation">
<div className="font-mono text-xs text-[#4a4643] pt-1">102</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Ego Development Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Stages of ego complexity from impulsive to integrated</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Maturation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Developmental Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how death awareness shapes belief, culture, and behavior" data-discipline="social psychology" data-name="terror management theory" data-type="existential psychology">
<div className="font-mono text-xs text-[#4a4643] pt-1">103</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Terror Management Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How death awareness shapes belief, culture, and behavior</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Existential Psychology</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Social Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="elicit intrinsic motivation through reflective conversation" data-discipline="clinical psychology" data-name="motivational interviewing" data-type="change facilitation">
<div className="font-mono text-xs text-[#4a4643] pt-1">104</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Motivational Interviewing</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Elicit intrinsic motivation through reflective conversation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Change Facilitation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Clinical Psychology</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="communication">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">06 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Communication &amp; Persuasion Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How to move people with words.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="ethos, pathos, logos — the three appeals" data-discipline="classical rhetoric" data-name="aristotle's rhetoric" data-type="persuasion">
<div className="font-mono text-xs text-[#4a4643] pt-1">105</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Aristotle's Rhetoric</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Ethos, pathos, logos — the three appeals</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Persuasion</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Classical Rhetoric</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="customer is the hero; you are the guide" data-discipline="marketing / storytelling" data-name="storybrand framework" data-type="messaging">
<div className="font-mono text-xs text-[#4a4643] pt-1">106</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">StoryBrand Framework</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Customer is the hero; you are the guide</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Messaging</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Marketing / Storytelling</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="situation, problem, implication, need-payoff questions" data-discipline="b2b sales" data-name="spin selling" data-type="sales methodology">
<div className="font-mono text-xs text-[#4a4643] pt-1">107</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">SPIN Selling</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Situation, Problem, Implication, Need-Payoff questions</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Sales Methodology</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">B2B Sales</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="problem-awareness questions that create emotional urgency" data-discipline="sales psychology" data-name="nepq" data-type="sales methodology">
<div className="font-mono text-xs text-[#4a4643] pt-1">108</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">NEPQ</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Problem-awareness questions that create emotional urgency</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Sales Methodology</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Sales Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="teach, tailor, take control — reframe the customer's thinking" data-discipline="b2b sales" data-name="challenger sale" data-type="sales methodology">
<div className="font-mono text-xs text-[#4a4643] pt-1">109</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Challenger Sale</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Teach, tailor, take control — reframe the customer's thinking</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Sales Methodology</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">B2B Sales</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="attention–interest–desire–action" data-discipline="advertising" data-name="aida" data-type="marketing funnel">
<div className="font-mono text-xs text-[#4a4643] pt-1">110</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">AIDA</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Attention–Interest–Desire–Action</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Marketing Funnel</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Advertising</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="name the pain, twist the knife, present the cure" data-discipline="direct response marketing" data-name="pas (problem-agitate-solution)" data-type="copywriting">
<div className="font-mono text-xs text-[#4a4643] pt-1">111</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">PAS (Problem-Agitate-Solution)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Name the pain, twist the knife, present the cure</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Copywriting</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Direct Response Marketing</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="campbell's monomyth — departure, initiation, return" data-discipline="mythology / storytelling" data-name="hero's journey" data-type="narrative architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">112</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Hero's Journey</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Campbell's monomyth — departure, initiation, return</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Narrative Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Mythology / Storytelling</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="once upon a time… every day… until one day…" data-discipline="storytelling" data-name="pixar story spine" data-type="narrative structure">
<div className="font-mono text-xs text-[#4a4643] pt-1">113</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Pixar Story Spine</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Once upon a time… Every day… Until one day…</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Narrative Structure</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Storytelling</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="lead with the answer, then support with logic" data-discipline="consulting" data-name="minto pyramid principle" data-type="communication structure">
<div className="font-mono text-xs text-[#4a4643] pt-1">114</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Minto Pyramid Principle</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Lead with the answer, then support with logic</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Communication Structure</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Consulting</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="observations, feelings, needs, requests" data-discipline="conflict resolution" data-name="nonviolent communication" data-type="relational communication">
<div className="font-mono text-xs text-[#4a4643] pt-1">115</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Nonviolent Communication</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Observations, feelings, needs, requests</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Relational Communication</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Conflict Resolution</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="acknowledge the opponent's position before making your case" data-discipline="rhetoric / psychology" data-name="rogerian argument" data-type="persuasion">
<div className="font-mono text-xs text-[#4a4643] pt-1">116</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Rogerian Argument</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Acknowledge the opponent's position before making your case</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Persuasion</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Rhetoric / Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="reciprocity, commitment, social proof, authority, liking, scarcity" data-discipline="social psychology" data-name="cialdini's principles of influence" data-type="persuasion">
<div className="font-mono text-xs text-[#4a4643] pt-1">117</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Cialdini's Principles of Influence</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Reciprocity, commitment, social proof, authority, liking, scarcity</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Persuasion</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Social Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="lead to insight through structured questioning" data-discipline="philosophy" data-name="socratic dialogue" data-type="teaching / persuasion">
<div className="font-mono text-xs text-[#4a4643] pt-1">118</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Socratic Dialogue</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Lead to insight through structured questioning</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Teaching / Persuasion</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how you frame a choice changes the decision" data-discipline="behavioral economics" data-name="framing effect" data-type="perception management">
<div className="font-mono text-xs text-[#4a4643] pt-1">119</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Framing Effect</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How you frame a choice changes the decision</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Perception Management</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Behavioral Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="situation, complication, question, answer" data-discipline="consulting" data-name="scqa framework" data-type="structured communication">
<div className="font-mono text-xs text-[#4a4643] pt-1">120</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">SCQA Framework</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Situation, Complication, Question, Answer</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Structured Communication</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Consulting</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="attention, need, satisfaction, visualization, action" data-discipline="public speaking" data-name="monroe's motivated sequence" data-type="speech structure">
<div className="font-mono text-xs text-[#4a4643] pt-1">121</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Monroe's Motivated Sequence</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Attention, need, satisfaction, visualization, action</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Speech Structure</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Public Speaking</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="range of ideas considered politically acceptable" data-discipline="political science" data-name="overton window" data-type="public discourse">
<div className="font-mono text-xs text-[#4a4643] pt-1">122</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Overton Window</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Range of ideas considered politically acceptable</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Public Discourse</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Political Science</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="leadership">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">07 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Leadership &amp; Organizational Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How to lead and structure teams.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="lead by serving — greenleaf's model" data-discipline="management / theology" data-name="servant leadership" data-type="leadership philosophy">
<div className="font-mono text-xs text-[#4a4643] pt-1">123</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Servant Leadership</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Lead by serving — Greenleaf's model</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Leadership Philosophy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Management / Theology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="match leadership style to follower maturity" data-discipline="management" data-name="situational leadership" data-type="leadership adaptation">
<div className="font-mono text-xs text-[#4a4643] pt-1">124</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Situational Leadership</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Match leadership style to follower maturity</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Leadership Adaptation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Management</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="forming, storming, norming, performing, adjourning" data-discipline="organizational psychology" data-name="tuckman's team development" data-type="team dynamics">
<div className="font-mono text-xs text-[#4a4643] pt-1">125</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Tuckman's Team Development</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Forming, storming, norming, performing, adjourning</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Team Dynamics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Organizational Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="care personally + challenge directly" data-discipline="management" data-name="radical candor" data-type="feedback culture">
<div className="font-mono text-xs text-[#4a4643] pt-1">126</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Radical Candor</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Care personally + challenge directly</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Feedback Culture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Management</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="trust → conflict → commitment → accountability → results" data-discipline="organizational development" data-name="lencioni's five dysfunctions" data-type="team health">
<div className="font-mono text-xs text-[#4a4643] pt-1">127</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Lencioni's Five Dysfunctions</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Trust → Conflict → Commitment → Accountability → Results</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Team Health</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Organizational Development</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how many direct reports one leader can effectively manage" data-discipline="management theory" data-name="span of control" data-type="organizational design">
<div className="font-mono text-xs text-[#4a4643] pt-1">128</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Span of Control</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How many direct reports one leader can effectively manage</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Organizational Design</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Management Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="self-organizing circles replacing traditional hierarchy" data-discipline="management innovation" data-name="holacracy" data-type="organizational architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">129</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Holacracy</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Self-organizing circles replacing traditional hierarchy</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Organizational Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Management Innovation</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="~150 stable relationships — implications for org size" data-discipline="anthropology" data-name="dunbar's number" data-type="social architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">130</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Dunbar's Number</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">~150 stable relationships — implications for org size</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Social Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Anthropology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="people rise to their level of incompetence" data-discipline="management theory" data-name="peter principle" data-type="organizational pathology">
<div className="font-mono text-xs text-[#4a4643] pt-1">131</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Peter Principle</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">People rise to their level of incompetence</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Organizational Pathology</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Management Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="rational-legal authority, hierarchy, specialization" data-discipline="sociology" data-name="bureaucracy theory (weber)" data-type="organizational structure">
<div className="font-mono text-xs text-[#4a4643] pt-1">132</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Bureaucracy Theory (Weber)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Rational-legal authority, hierarchy, specialization</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Organizational Structure</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Sociology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="five stages of tribal culture in organizations" data-discipline="organizational development" data-name="tribal leadership" data-type="cultural architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">133</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Tribal Leadership</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Five stages of tribal culture in organizations</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Cultural Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Organizational Development</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="orgs design systems that mirror their communication structures" data-discipline="software / organization theory" data-name="conway's law" data-type="system design">
<div className="font-mono text-xs text-[#4a4643] pt-1">134</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Conway's Law</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Orgs design systems that mirror their communication structures</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">System Design</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Software / Organization Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="urgency → coalition → vision → wins → anchor" data-discipline="organizational development" data-name="kotter's 8-step change model" data-type="change management">
<div className="font-mono text-xs text-[#4a4643] pt-1">135</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Kotter's 8-Step Change Model</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Urgency → Coalition → Vision → Wins → Anchor</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Change Management</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Organizational Development</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="awareness, desire, knowledge, ability, reinforcement" data-discipline="organizational development" data-name="adkar model" data-type="change management">
<div className="font-mono text-xs text-[#4a4643] pt-1">136</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">ADKAR Model</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Awareness, Desire, Knowledge, Ability, Reinforcement</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Change Management</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Organizational Development</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="layers of complexity matched to cognitive capability" data-discipline="management theory" data-name="requisite organization" data-type="organizational stratification">
<div className="font-mono text-xs text-[#4a4643] pt-1">137</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Requisite Organization</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Layers of complexity matched to cognitive capability</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Organizational Stratification</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Management Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="different problems require fundamentally different leadership modes" data-discipline="complexity science" data-name="cynefin for leadership" data-type="adaptive leadership">
<div className="font-mono text-xs text-[#4a4643] pt-1">138</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Cynefin for Leadership</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Different problems require fundamentally different leadership modes</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Adaptive Leadership</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Complexity Science</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="financial">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">08 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Financial &amp; Economic Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How money and value move.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="exponential growth through reinvestment over time" data-discipline="finance / mathematics" data-name="compound interest / growth" data-type="wealth building">
<div className="font-mono text-xs text-[#4a4643] pt-1">139</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Compound Interest / Growth</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Exponential growth through reinvestment over time</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Wealth Building</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Finance / Mathematics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="price as signal between buyers and sellers" data-discipline="economics" data-name="supply and demand" data-type="market dynamics">
<div className="font-mono text-xs text-[#4a4643] pt-1">140</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Supply and Demand</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Price as signal between buyers and sellers</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Market Dynamics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="each additional unit delivers less satisfaction" data-discipline="microeconomics" data-name="marginal utility" data-type="value assessment">
<div className="font-mono text-xs text-[#4a4643] pt-1">141</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Marginal Utility</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Each additional unit delivers less satisfaction</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Value Assessment</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Microeconomics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="the value of the next best alternative foregone" data-discipline="economics" data-name="opportunity cost" data-type="trade-off analysis">
<div className="font-mono text-xs text-[#4a4643] pt-1">142</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Opportunity Cost</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">The value of the next best alternative foregone</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Trade-Off Analysis</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="don't let past investment dictate future decisions" data-discipline="behavioral economics" data-name="sunk cost fallacy" data-type="cognitive trap">
<div className="font-mono text-xs text-[#4a4643] pt-1">143</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Sunk Cost Fallacy</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Don't let past investment dictate future decisions</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Cognitive Trap</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Behavioral Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="product becomes more valuable as more people use it" data-discipline="platform economics" data-name="network effects" data-type="value dynamics">
<div className="font-mono text-xs text-[#4a4643] pt-1">144</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Network Effects</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Product becomes more valuable as more people use it</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Value Dynamics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Platform Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="show me the incentive, i'll show you the outcome" data-discipline="economics / game theory" data-name="incentive structures" data-type="behavior shaping">
<div className="font-mono text-xs text-[#4a4643] pt-1">145</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Incentive Structures</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Show me the incentive, I'll show you the outcome</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Behavior Shaping</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Economics / Game Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="when the agent's interests diverge from the principal's" data-discipline="economics" data-name="principal-agent problem" data-type="alignment">
<div className="font-mono text-xs text-[#4a4643] pt-1">146</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Principal-Agent Problem</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">When the agent's interests diverge from the principal's</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Alignment</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="shared resources overused when no one owns the cost" data-discipline="economics / ecology" data-name="tragedy of the commons" data-type="resource depletion">
<div className="font-mono text-xs text-[#4a4643] pt-1">147</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Tragedy of the Commons</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Shared resources overused when no one owns the cost</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Resource Depletion</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Economics / Ecology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="eight principles for managing shared resources" data-discipline="political economy" data-name="ostrom's commons governance" data-type="resource management">
<div className="font-mono text-xs text-[#4a4643] pt-1">148</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Ostrom's Commons Governance</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Eight principles for managing shared resources</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Resource Management</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Political Economy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how leverage amplifies both upside and downside" data-discipline="corporate finance" data-name="debt architecture" data-type="financial structure">
<div className="font-mono text-xs text-[#4a4643] pt-1">149</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Debt Architecture</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How leverage amplifies both upside and downside</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Financial Structure</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Corporate Finance</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how organizations decide where to invest" data-discipline="corporate strategy" data-name="capital allocation systems" data-type="resource deployment">
<div className="font-mono text-xs text-[#4a4643] pt-1">150</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Capital Allocation Systems</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How organizations decide where to invest</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Resource Deployment</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Corporate Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="mechanism design for exchange" data-discipline="economics / game theory" data-name="auction theory" data-type="price discovery">
<div className="font-mono text-xs text-[#4a4643] pt-1">151</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Auction Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Mechanism design for exchange</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Price Discovery</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Economics / Game Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="bad money drives out good" data-discipline="monetary economics" data-name="gresham's law" data-type="currency dynamics">
<div className="font-mono text-xs text-[#4a4643] pt-1">152</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Gresham's Law</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Bad money drives out good</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Currency Dynamics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Monetary Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="who gets new money first matters" data-discipline="monetary theory" data-name="cantillon effect" data-type="money distribution">
<div className="font-mono text-xs text-[#4a4643] pt-1">153</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Cantillon Effect</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Who gets new money first matters</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Money Distribution</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Monetary Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="cac, ltv, margins — does each unit profit?" data-discipline="startup finance" data-name="unit economics" data-type="business viability">
<div className="font-mono text-xs text-[#4a4643] pt-1">154</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Unit Economics</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">CAC, LTV, margins — does each unit profit?</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Business Viability</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Startup Finance</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="biological">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">09 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Biological &amp; Living Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How nature architects survival.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="variation + selection + inheritance = adaptation" data-discipline="evolutionary biology" data-name="natural selection" data-type="evolutionary mechanism">
<div className="font-mono text-xs text-[#4a4643] pt-1">155</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Natural Selection</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Variation + selection + inheritance = adaptation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Evolutionary Mechanism</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Evolutionary Biology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how organisms maintain internal equilibrium" data-discipline="physiology" data-name="homeostasis" data-type="self-regulation">
<div className="font-mono text-xs text-[#4a4643] pt-1">156</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Homeostasis</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How organisms maintain internal equilibrium</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Self-Regulation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Physiology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="self/non-self recognition, adaptive memory, escalating response" data-discipline="immunology" data-name="immune system logic" data-type="defense architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">157</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Immune System Logic</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Self/non-self recognition, adaptive memory, escalating response</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Defense Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Immunology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="decentralized coordination producing emergent order" data-discipline="biology / ai" data-name="swarm intelligence" data-type="collective decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">158</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Swarm Intelligence</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Decentralized coordination producing emergent order</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Collective Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Biology / AI</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="lotka-volterra cycles — boom and bust" data-discipline="ecology" data-name="predator-prey dynamics" data-type="population oscillation">
<div className="font-mono text-xs text-[#4a4643] pt-1">159</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Predator-Prey Dynamics</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Lotka-Volterra cycles — boom and bust</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Population Oscillation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Ecology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="mutualism, commensalism, parasitism" data-discipline="biology" data-name="symbiosis models" data-type="relational ecology">
<div className="font-mono text-xs text-[#4a4643] pt-1">160</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Symbiosis Models</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Mutualism, commensalism, parasitism</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Relational Ecology</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Biology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="internal clocks governing sleep, hormones, cognition" data-discipline="chronobiology" data-name="circadian architecture" data-type="temporal biology">
<div className="font-mono text-xs text-[#4a4643] pt-1">161</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Circadian Architecture</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Internal clocks governing sleep, hormones, cognition</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Temporal Biology</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Chronobiology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how structure arises from genetic code + environment" data-discipline="developmental biology" data-name="morphogenesis" data-type="form emergence">
<div className="font-mono text-xs text-[#4a4643] pt-1">162</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Morphogenesis</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How structure arises from genetic code + environment</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Form Emergence</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Developmental Biology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="pheromone-based pathfinding without centralized control" data-discipline="biomimetics" data-name="ant colony optimization" data-type="distributed problem-solving">
<div className="font-mono text-xs text-[#4a4643] pt-1">163</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Ant Colony Optimization</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Pheromone-based pathfinding without centralized control</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Distributed Problem-Solving</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Biomimetics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="fungal networks distributing nutrients and information" data-discipline="mycology / ecology" data-name="mycelial networks" data-type="underground communication">
<div className="font-mono text-xs text-[#4a4643] pt-1">164</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Mycelial Networks</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Fungal networks distributing nutrients and information</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Underground Communication</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Mycology / Ecology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="cumulative cost of chronic stress on body systems" data-discipline="neuroscience / medicine" data-name="allostatic load" data-type="stress accumulation">
<div className="font-mono text-xs text-[#4a4643] pt-1">165</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Allostatic Load</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Cumulative cost of chronic stress on body systems</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Stress Accumulation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Neuroscience / Medicine</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="trillions of organisms shaping digestion, immunity, mood" data-discipline="microbiology" data-name="microbiome ecology" data-type="internal ecosystem">
<div className="font-mono text-xs text-[#4a4643] pt-1">166</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Microbiome Ecology</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Trillions of organisms shaping digestion, immunity, mood</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Internal Ecosystem</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Microbiology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="controlled self-destruction for the health of the whole" data-discipline="cell biology" data-name="apoptosis" data-type="sacrificial systems">
<div className="font-mono text-xs text-[#4a4643] pt-1">167</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Apoptosis</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Controlled self-destruction for the health of the whole</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Sacrificial Systems</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Cell Biology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="long stasis interrupted by rapid change" data-discipline="paleontology" data-name="punctuated equilibrium" data-type="evolutionary tempo">
<div className="font-mono text-xs text-[#4a4643] pt-1">168</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Punctuated Equilibrium</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Long stasis interrupted by rapid change</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Evolutionary Tempo</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Paleontology</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="complexity">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">10 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Complexity &amp; Systems Science</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How emergence, chaos, and order interact.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="amplifying or stabilizing cycles within systems" data-discipline="systems theory" data-name="feedback loops" data-type="system dynamics">
<div className="font-mono text-xs text-[#4a4643] pt-1">169</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Feedback Loops</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Amplifying or stabilizing cycles within systems</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">System Dynamics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Systems Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="macro patterns arising from micro interactions" data-discipline="complexity science" data-name="emergence" data-type="complex behavior">
<div className="font-mono text-xs text-[#4a4643] pt-1">170</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Emergence</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Macro patterns arising from micro interactions</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Complex Behavior</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Complexity Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="small changes → massive divergence" data-discipline="mathematics / physics" data-name="chaos theory" data-type="nonlinear dynamics">
<div className="font-mono text-xs text-[#4a4643] pt-1">171</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Chaos Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Small changes → massive divergence</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Nonlinear Dynamics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Mathematics / Physics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="states a system tends toward — stability, cycles, or chaos" data-discipline="dynamical systems" data-name="attractors" data-type="system behavior">
<div className="font-mono text-xs text-[#4a4643] pt-1">172</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Attractors</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">States a system tends toward — stability, cycles, or chaos</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">System Behavior</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Dynamical Systems</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="small input crosses threshold → system shifts state" data-discipline="physics / social science" data-name="phase transitions / tipping points" data-type="state change">
<div className="font-mono text-xs text-[#4a4643] pt-1">173</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Phase Transitions / Tipping Points</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Small input crosses threshold → system shifts state</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">State Change</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Physics / Social Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="a few nodes dominate; most are peripheral" data-discipline="network science" data-name="power laws / scale-free networks" data-type="distribution patterns">
<div className="font-mono text-xs text-[#4a4643] pt-1">174</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Power Laws / Scale-Free Networks</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">A few nodes dominate; most are peripheral</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Distribution Patterns</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Network Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="patterns that repeat at every scale" data-discipline="mathematics" data-name="fractal structures" data-type="self-similarity">
<div className="font-mono text-xs text-[#4a4643] pt-1">175</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Fractal Structures</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Patterns that repeat at every scale</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Self-Similarity</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Mathematics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="systems are most creative between order and disorder" data-discipline="complexity science" data-name="edge of chaos" data-type="adaptive zone">
<div className="font-mono text-xs text-[#4a4643] pt-1">176</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Edge of Chaos</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Systems are most creative between order and disorder</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Adaptive Zone</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Complexity Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="systems that gain from disorder" data-discipline="nassim taleb" data-name="antifragility" data-type="stress response">
<div className="font-mono text-xs text-[#4a4643] pt-1">177</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Antifragility</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Systems that gain from disorder</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Stress Response</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Nassim Taleb</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="12 places to intervene in a system, ranked by impact" data-discipline="systems thinking" data-name="donella meadows' leverage points" data-type="intervention design">
<div className="font-mono text-xs text-[#4a4643] pt-1">178</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Donella Meadows' Leverage Points</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">12 places to intervene in a system, ranked by impact</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Intervention Design</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Systems Thinking</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="accumulations and rates of change" data-discipline="systems dynamics" data-name="stock and flow diagrams" data-type="system mapping">
<div className="font-mono text-xs text-[#4a4643] pt-1">179</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Stock and Flow Diagrams</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Accumulations and rates of change</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">System Mapping</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Systems Dynamics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how systems self-regulate through information feedback" data-discipline="information theory" data-name="cybernetics" data-type="control &amp; communication">
<div className="font-mono text-xs text-[#4a4643] pt-1">180</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Cybernetics</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How systems self-regulate through information feedback</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Control &amp; Communication</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Information Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="systems that continuously produce and maintain themselves" data-discipline="biology / philosophy" data-name="autopoiesis" data-type="self-creation">
<div className="font-mono text-xs text-[#4a4643] pt-1">181</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Autopoiesis</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Systems that continuously produce and maintain themselves</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Self-Creation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Biology / Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="new order emerging through energy dissipation" data-discipline="thermodynamics" data-name="dissipative structures" data-type="order from chaos">
<div className="font-mono text-xs text-[#4a4643] pt-1">182</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Dissipative Structures</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">New order emerging through energy dissipation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Order from Chaos</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Thermodynamics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="six degrees — short path lengths despite clustering" data-discipline="network science" data-name="small world networks" data-type="connectivity">
<div className="font-mono text-xs text-[#4a4643] pt-1">183</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Small World Networks</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Six degrees — short path lengths despite clustering</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Connectivity</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Network Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="early choices constrain later possibilities" data-discipline="economics / complexity" data-name="path dependence" data-type="historical constraint">
<div className="font-mono text-xs text-[#4a4643] pt-1">184</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Path Dependence</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Early choices constrain later possibilities</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Historical Constraint</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Economics / Complexity</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="cycles of growth, conservation, release, reorganization" data-discipline="ecology / systems" data-name="resilience theory (holling)" data-type="adaptive capacity">
<div className="font-mono text-xs text-[#4a4643] pt-1">185</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Resilience Theory (Holling)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Cycles of growth, conservation, release, reorganization</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Adaptive Capacity</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Ecology / Systems</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="theological">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">11 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Theological &amp; Philosophical Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How meaning, truth, and the sacred are structured.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="god's relationship to humanity structured through covenants" data-discipline="theology" data-name="covenant theology" data-type="relational framework">
<div className="font-mono text-xs text-[#4a4643] pt-1">186</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Covenant Theology</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">God's relationship to humanity structured through covenants</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Relational Framework</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Theology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="aesthetic → ethical → religious" data-discipline="philosophy" data-name="kierkegaard's three stages" data-type="existential development">
<div className="font-mono text-xs text-[#4a4643] pt-1">187</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Kierkegaard's Three Stages</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Aesthetic → Ethical → Religious</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Existential Development</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="excellence through habituated virtuous action" data-discipline="moral philosophy" data-name="virtue ethics (aristotle)" data-type="character formation">
<div className="font-mono text-xs text-[#4a4643] pt-1">188</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Virtue Ethics (Aristotle)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Excellence through habituated virtuous action</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Character Formation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Moral Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="act according to universal moral law" data-discipline="moral philosophy" data-name="deontological ethics (kant)" data-type="duty-based morality">
<div className="font-mono text-xs text-[#4a4643] pt-1">189</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Deontological Ethics (Kant)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Act according to universal moral law</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Duty-Based Morality</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Moral Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="maximize good outcomes for the greatest number" data-discipline="moral philosophy" data-name="consequentialism / utilitarianism" data-type="outcome-based ethics">
<div className="font-mono text-xs text-[#4a4643] pt-1">190</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Consequentialism / Utilitarianism</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Maximize good outcomes for the greatest number</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Outcome-Based Ethics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Moral Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="moral truths embedded in the structure of creation" data-discipline="theology / philosophy" data-name="natural law theory" data-type="moral order">
<div className="font-mono text-xs text-[#4a4643] pt-1">191</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Natural Law Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Moral truths embedded in the structure of creation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Moral Order</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Theology / Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="consolation, desolation, and movements of the spirit" data-discipline="spiritual theology" data-name="ignatian discernment" data-type="decision-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">192</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Ignatian Discernment</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Consolation, desolation, and movements of the Spirit</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Spiritual Theology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="read, meditate, pray, contemplate" data-discipline="monastic tradition" data-name="lectio divina" data-type="contemplative practice">
<div className="font-mono text-xs text-[#4a4643] pt-1">193</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Lectio Divina</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Read, Meditate, Pray, Contemplate</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Contemplative Practice</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Monastic Tradition</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="work, prayer, community — a complete personal operating system" data-discipline="monastic tradition" data-name="rule of st. benedict" data-type="life architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">194</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Rule of St. Benedict</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Work, prayer, community — a complete personal operating system</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Life Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Monastic Tradition</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="the church year as an operating system for identity formation" data-discipline="christian theology" data-name="liturgical calendar" data-type="temporal formation">
<div className="font-mono text-xs text-[#4a4643] pt-1">195</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Liturgical Calendar</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">The church year as an operating system for identity formation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Temporal Formation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Christian Theology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="pride, greed, lust, envy, gluttony, wrath, sloth — and remedies" data-discipline="christian theology" data-name="seven deadly sins / virtues" data-type="moral diagnostic">
<div className="font-mono text-xs text-[#4a4643] pt-1">196</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Seven Deadly Sins / Virtues</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Pride, greed, lust, envy, gluttony, wrath, sloth — and remedies</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Moral Diagnostic</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Christian Theology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how to account for evil/suffering given a good god" data-discipline="philosophy of religion" data-name="theodicy models" data-type="suffering framework">
<div className="font-mono text-xs text-[#4a4643] pt-1">197</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Theodicy Models</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How to account for evil/suffering given a good God</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Suffering Framework</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy of Religion</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="humans as image-bearers — the foundation of dignity" data-discipline="theology" data-name="imago dei" data-type="identity architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">198</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Imago Dei</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Humans as image-bearers — the foundation of dignity</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Identity Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Theology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="power expressed through voluntary limitation" data-discipline="christology" data-name="kenosis" data-type="self-emptying">
<div className="font-mono text-xs text-[#4a4643] pt-1">199</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Kenosis</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Power expressed through voluntary limitation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Self-Emptying</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Christology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="living between inauguration and consummation" data-discipline="theology" data-name="already/not yet" data-type="eschatological tension">
<div className="font-mono text-xs text-[#4a4643] pt-1">200</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Already/Not Yet</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Living between inauguration and consummation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Eschatological Tension</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Theology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="mutual indwelling — relationship as the structure of being" data-discipline="trinitarian theology" data-name="perichoresis" data-type="relational ontology">
<div className="font-mono text-xs text-[#4a4643] pt-1">201</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Perichoresis</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Mutual indwelling — relationship as the structure of being</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Relational Ontology</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Trinitarian Theology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="everything has an end purpose" data-discipline="philosophy" data-name="telos / teleological thinking" data-type="purpose structure">
<div className="font-mono text-xs text-[#4a4643] pt-1">202</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Telos / Teleological Thinking</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Everything has an end purpose</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Purpose Structure</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="death as clarifying lens for priorities" data-discipline="stoicism / monasticism" data-name="memento mori" data-type="mortality awareness">
<div className="font-mono text-xs text-[#4a4643] pt-1">203</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Memento Mori</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Death as clarifying lens for priorities</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Mortality Awareness</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Stoicism / Monasticism</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="define what something is by removing what it isn't" data-discipline="theology / decision-making" data-name="via negativa" data-type="apophatic method">
<div className="font-mono text-xs text-[#4a4643] pt-1">204</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Via Negativa</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Define what something is by removing what it isn't</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Apophatic Method</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Theology / Decision-Making</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="structured cessation as the engine of sustained output" data-discipline="theology / productivity" data-name="sabbath as system" data-type="rest architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">205</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Sabbath as System</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Structured cessation as the engine of sustained output</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Rest Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Theology / Productivity</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="heart, soul, strength — total integration" data-discipline="jewish theology" data-name="shema structure" data-type="integrated devotion">
<div className="font-mono text-xs text-[#4a4643] pt-1">206</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Shema Structure</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Heart, soul, strength — total integration</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Integrated Devotion</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Jewish Theology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="evagrius' taxonomy of temptation" data-discipline="early monasticism" data-name="desert fathers' eight thoughts" data-type="interior diagnostics">
<div className="font-mono text-xs text-[#4a4643] pt-1">207</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Desert Fathers' Eight Thoughts</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Evagrius' taxonomy of temptation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Interior Diagnostics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Early Monasticism</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="formation">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">12 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Formation &amp; Identity Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How humans are shaped and re-shaped.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="you are the story you tell about yourself" data-discipline="philosophy" data-name="narrative identity (ricoeur)" data-type="identity formation">
<div className="font-mono text-xs text-[#4a4643] pt-1">208</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Narrative Identity (Ricoeur)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">You are the story you tell about yourself</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Identity Formation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="integrating shadow, anima/animus, self" data-discipline="analytical psychology" data-name="individuation (jung)" data-type="psychological maturation">
<div className="font-mono text-xs text-[#4a4643] pt-1">209</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Individuation (Jung)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Integrating shadow, anima/animus, Self</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Psychological Maturation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Analytical Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="six stages of faith maturation" data-discipline="developmental psychology" data-name="stages of faith (fowler)" data-type="spiritual development">
<div className="font-mono text-xs text-[#4a4643] pt-1">210</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Stages of Faith (Fowler)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Six stages of faith maturation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Spiritual Development</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Developmental Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="what was subject becomes object — growing complexity" data-discipline="developmental psychology" data-name="kegan's subject-object theory" data-type="adult development">
<div className="font-mono text-xs text-[#4a4643] pt-1">211</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Kegan's Subject-Object Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">What was subject becomes object — growing complexity</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Adult Development</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Developmental Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="eight crises from trust to integrity" data-discipline="developmental psychology" data-name="erikson's psychosocial stages" data-type="lifespan development">
<div className="font-mono text-xs text-[#4a4643] pt-1">212</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Erikson's Psychosocial Stages</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Eight crises from trust to integrity</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Lifespan Development</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Developmental Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="master-apprentice: watch, assist, practice, master" data-discipline="education / craft" data-name="apprenticeship model" data-type="skill transmission">
<div className="font-mono text-xs text-[#4a4643] pt-1">213</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Apprenticeship Model</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Master-apprentice: watch, assist, practice, master</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Skill Transmission</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Education / Craft</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="systematic instruction through question and answer" data-discipline="theology / education" data-name="catechesis" data-type="doctrinal formation">
<div className="font-mono text-xs text-[#4a4643] pt-1">214</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Catechesis</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Systematic instruction through question and answer</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Doctrinal Formation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Theology / Education</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="master-student lineages for character transfer" data-discipline="theology" data-name="discipleship models" data-type="spiritual formation">
<div className="font-mono text-xs text-[#4a4643] pt-1">215</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Discipleship Models</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Master-student lineages for character transfer</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Spiritual Formation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Theology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="separation, liminality, incorporation" data-discipline="anthropology" data-name="rites of passage" data-type="transition architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">216</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Rites of Passage</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Separation, liminality, incorporation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Transition Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Anthropology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how shame and honor shape identity and behavior" data-discipline="anthropology / theology" data-name="shame-honor framework" data-type="cultural formation">
<div className="font-mono text-xs text-[#4a4643] pt-1">217</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Shame-Honor Framework</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How shame and honor shape identity and behavior</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Cultural Formation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Anthropology / Theology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="the threshold where old identity dies and new forms" data-discipline="anthropology (turner)" data-name="liminal space theory" data-type="transformation architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">218</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Liminal Space Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">The threshold where old identity dies and new forms</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Transformation Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Anthropology (Turner)</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="safety, trustworthiness, peer support, empowerment" data-discipline="psychology / social work" data-name="trauma-informed systems" data-type="healing architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">219</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Trauma-Informed Systems</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Safety, trustworthiness, peer support, empowerment</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Healing Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Psychology / Social Work</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="structured practice at the edge of ability with feedback" data-discipline="performance psychology" data-name="deliberate practice" data-type="skill acquisition">
<div className="font-mono text-xs text-[#4a4643] pt-1">220</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Deliberate Practice</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Structured practice at the edge of ability with feedback</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Skill Acquisition</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Performance Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="experience → reflection → conceptualization → experimentation" data-discipline="education" data-name="kolb's experiential learning" data-type="learning architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">221</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Kolb's Experiential Learning</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Experience → Reflection → Conceptualization → Experimentation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Learning Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Education</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="remember → understand → apply → analyze → evaluate → create" data-discipline="education" data-name="bloom's taxonomy" data-type="cognitive complexity">
<div className="font-mono text-xs text-[#4a4643] pt-1">222</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Bloom's Taxonomy</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Remember → Understand → Apply → Analyze → Evaluate → Create</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Cognitive Complexity</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Education</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="gap between current ability and potential with guidance" data-discipline="educational psychology" data-name="zone of proximal development" data-type="learning edge">
<div className="font-mono text-xs text-[#4a4643] pt-1">223</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Zone of Proximal Development</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Gap between current ability and potential with guidance</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Learning Edge</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Educational Psychology</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="relational">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">13 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Relational &amp; Social Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How humans organize connection.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how societies organize family, lineage, and obligation" data-discipline="anthropology" data-name="kinship systems" data-type="social architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">224</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Kinship Systems</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How societies organize family, lineage, and obligation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Social Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Anthropology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="giving creates obligation, binding community" data-discipline="anthropology / economics" data-name="gift economy / reciprocity" data-type="exchange architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">225</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Gift Economy / Reciprocity</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Giving creates obligation, binding community</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Exchange Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Anthropology / Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="reputation systems, credentialing, institutional trust" data-discipline="sociology / economics" data-name="trust architecture" data-type="social infrastructure">
<div className="font-mono text-xs text-[#4a4643] pt-1">226</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Trust Architecture</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Reputation systems, credentialing, institutional trust</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Social Infrastructure</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Sociology / Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="covenants bind identities; contracts bind transactions" data-discipline="theology / law" data-name="covenant vs. contract" data-type="relational framing">
<div className="font-mono text-xs text-[#4a4643] pt-1">227</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Covenant vs. Contract</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Covenants bind identities; contracts bind transactions</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Relational Framing</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Theology / Law</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="bonding, bridging, and linking capital" data-discipline="sociology" data-name="social capital theory" data-type="relational resources">
<div className="font-mono text-xs text-[#4a4643] pt-1">228</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Social Capital Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Bonding, bridging, and linking capital</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Relational Resources</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Sociology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="5 → 15 → 50 → 150 → 500 → 1500" data-discipline="anthropology" data-name="dunbar layers" data-type="social structure">
<div className="font-mono text-xs text-[#4a4643] pt-1">229</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Dunbar Layers</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">5 → 15 → 50 → 150 → 500 → 1500</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Social Structure</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Anthropology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="the strength of weak ties" data-discipline="sociology" data-name="network theory (granovetter)" data-type="relational dynamics">
<div className="font-mono text-xs text-[#4a4643] pt-1">230</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Network Theory (Granovetter)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">The strength of weak ties</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Relational Dynamics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Sociology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="tit-for-tat, reputation, and cooperation evolution" data-discipline="mathematics / economics" data-name="game theory (iterated games)" data-type="cooperation dynamics">
<div className="font-mono text-xs text-[#4a4643] pt-1">231</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Game Theory (Iterated Games)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Tit-for-tat, reputation, and cooperation evolution</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Cooperation Dynamics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Mathematics / Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="communities unify by projecting violence onto a victim" data-discipline="philosophical anthropology" data-name="scapegoat mechanism (girard)" data-type="social cohesion">
<div className="font-mono text-xs text-[#4a4643] pt-1">232</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Scapegoat Mechanism (Girard)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Communities unify by projecting violence onto a victim</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Social Cohesion</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophical Anthropology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="shared rituals create social solidarity" data-discipline="sociology (durkheim)" data-name="collective effervescence" data-type="group bonding">
<div className="font-mono text-xs text-[#4a4643] pt-1">233</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Collective Effervescence</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Shared rituals create social solidarity</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Group Bonding</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Sociology (Durkheim)</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="eight principles for collective resources" data-discipline="political economy" data-name="commons governance (ostrom)" data-type="shared resource management">
<div className="font-mono text-xs text-[#4a4643] pt-1">234</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Commons Governance (Ostrom)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Eight principles for collective resources</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Shared Resource Management</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Political Economy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how organizations form and maintain alliances" data-discipline="international relations" data-name="alliance architecture" data-type="geopolitical structure">
<div className="font-mono text-xs text-[#4a4643] pt-1">235</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Alliance Architecture</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How organizations form and maintain alliances</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Geopolitical Structure</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">International Relations</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how societies handle inequality in power" data-discipline="cross-cultural psychology" data-name="power distance (hofstede)" data-type="cultural dimension">
<div className="font-mono text-xs text-[#4a4643] pt-1">236</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Power Distance (Hofstede)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How societies handle inequality in power</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Cultural Dimension</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Cross-Cultural Psychology</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="information">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">14 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Information &amp; Knowledge Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How information flows, compounds, and decays.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="measuring information content and transmission fidelity" data-discipline="information theory" data-name="shannon information theory" data-type="signal vs. noise">
<div className="font-mono text-xs text-[#4a4643] pt-1">237</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Shannon Information Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Measuring information content and transmission fidelity</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Signal vs. Noise</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Information Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="data → information → knowledge → wisdom" data-discipline="knowledge management" data-name="dikw pyramid" data-type="knowledge hierarchy">
<div className="font-mono text-xs text-[#4a4643] pt-1">238</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">DIKW Pyramid</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Data → Information → Knowledge → Wisdom</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Knowledge Hierarchy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Knowledge Management</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="linked atomic notes building emergent understanding" data-discipline="personal knowledge management" data-name="zettelkasten" data-type="knowledge architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">239</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Zettelkasten</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Linked atomic notes building emergent understanding</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Knowledge Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Personal Knowledge Management</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="structured networks of entities and relationships" data-discipline="computer science / ai" data-name="knowledge graphs" data-type="semantic architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">240</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Knowledge Graphs</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Structured networks of entities and relationships</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Semantic Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Computer Science / AI</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="sign, object, interpretant — how meaning is produced" data-discipline="philosophy / linguistics" data-name="semiotic systems (peirce)" data-type="meaning architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">241</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Semiotic Systems (Peirce)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Sign, object, interpretant — how meaning is produced</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Meaning Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy / Linguistics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="top-down expert categories vs. bottom-up user tags" data-discipline="information science" data-name="taxonomy vs. folksonomy" data-type="classification">
<div className="font-mono text-xs text-[#4a4643] pt-1">242</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Taxonomy vs. Folksonomy</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Top-down expert categories vs. bottom-up user tags</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Classification</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Information Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="capture, organize, distill, express" data-discipline="productivity (forte)" data-name="second brain / code method" data-type="personal knowledge management">
<div className="font-mono text-xs text-[#4a4643] pt-1">243</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Second Brain / CODE Method</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Capture, Organize, Distill, Express</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Personal Knowledge Management</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Productivity (Forte)</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="curated thinking tools for pattern recognition" data-discipline="multi-disciplinary" data-name="mental model library" data-type="cognitive toolkit">
<div className="font-mono text-xs text-[#4a4643] pt-1">244</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Mental Model Library</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Curated thinking tools for pattern recognition</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Cognitive Toolkit</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Multi-Disciplinary</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="one party knows more than the other" data-discipline="economics" data-name="information asymmetry" data-type="market/relational dynamics">
<div className="font-mono text-xs text-[#4a4643] pt-1">245</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Information Asymmetry</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">One party knows more than the other</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Market/Relational Dynamics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="five filters shaping mass media content" data-discipline="political communication" data-name="propaganda model (chomsky)" data-type="media architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">246</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Propaganda Model (Chomsky)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Five filters shaping mass media content</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Media Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Political Communication</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="rationalism, empiricism, pragmatism" data-discipline="philosophy" data-name="epistemological frameworks" data-type="knowledge standards">
<div className="font-mono text-xs text-[#4a4643] pt-1">247</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Epistemological Frameworks</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Rationalism, empiricism, pragmatism</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Knowledge Standards</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="trade-offs in reducing information" data-discipline="information theory" data-name="compression (lossy vs. lossless)" data-type="information efficiency">
<div className="font-mono text-xs text-[#4a4643] pt-1">248</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Compression (Lossy vs. Lossless)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Trade-offs in reducing information</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Information Efficiency</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Information Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="reusable solutions at every scale" data-discipline="architecture / design" data-name="pattern language (alexander)" data-type="design knowledge">
<div className="font-mono text-xs text-[#4a4643] pt-1">249</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Pattern Language (Alexander)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Reusable solutions at every scale</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Design Knowledge</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Architecture / Design</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="the longer an idea survives, the longer it will survive" data-discipline="statistics (taleb)" data-name="lindy effect" data-type="information durability">
<div className="font-mono text-xs text-[#4a4643] pt-1">250</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Lindy Effect</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">The longer an idea survives, the longer it will survive</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Information Durability</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Statistics (Taleb)</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="spatial">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">15 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Spatial, Design &amp; Material Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How space and form shape experience.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="design from nature — zones, sectors, stacking functions" data-discipline="agriculture / ecology" data-name="permaculture design" data-type="regenerative systems">
<div className="font-mono text-xs text-[#4a4643] pt-1">251</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Permaculture Design</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Design from nature — zones, sectors, stacking functions</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Regenerative Systems</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Agriculture / Ecology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how cities organize space, transit, zoning, and life" data-discipline="urban design" data-name="urban planning systems" data-type="city architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">252</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Urban Planning Systems</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How cities organize space, transit, zoning, and life</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">City Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Urban Design</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how people orient, navigate, and find meaning in space" data-discipline="environmental design" data-name="wayfinding systems" data-type="navigation design">
<div className="font-mono text-xs text-[#4a4643] pt-1">253</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Wayfinding Systems</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How people orient, navigate, and find meaning in space</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Navigation Design</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Environmental Design</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="harmonizing individuals with their environment" data-discipline="chinese metaphysics" data-name="feng shui" data-type="spatial energy">
<div className="font-mono text-xs text-[#4a4643] pt-1">254</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Feng Shui</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Harmonizing individuals with their environment</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Spatial Energy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Chinese Metaphysics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="interchangeable parts enabling infinite configurations" data-discipline="industrial design / software" data-name="modular design" data-type="component architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">255</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Modular Design</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Interchangeable parts enabling infinite configurations</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Component Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Industrial Design / Software</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how type organizes meaning on a page" data-discipline="graphic design" data-name="typographic systems" data-type="visual hierarchy">
<div className="font-mono text-xs text-[#4a4643] pt-1">256</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Typographic Systems</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How type organizes meaning on a page</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Visual Hierarchy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Graphic Design</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="munsell, pantone — systematic classification of hue, value, chroma" data-discipline="design / science" data-name="color systems" data-type="visual organization">
<div className="font-mono text-xs text-[#4a4643] pt-1">257</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Color Systems</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Munsell, Pantone — systematic classification of hue, value, chroma</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Visual Organization</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Design / Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how physical space shapes sound experience" data-discipline="architecture / music" data-name="acoustic architecture" data-type="sound design">
<div className="font-mono text-xs text-[#4a4643] pt-1">258</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Acoustic Architecture</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How physical space shapes sound experience</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Sound Design</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Architecture / Music</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how material properties constrain and enable form" data-discipline="engineering / architecture" data-name="material systems" data-type="fabrication logic">
<div className="font-mono text-xs text-[#4a4643] pt-1">259</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Material Systems</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How material properties constrain and enable form</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Fabrication Logic</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Engineering / Architecture</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="underlying structure organizing visual elements" data-discipline="graphic design / web" data-name="grid systems" data-type="layout architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">260</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Grid Systems</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Underlying structure organizing visual elements</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Layout Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Graphic Design / Web</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="where people actually walk vs. where you built the sidewalk" data-discipline="urban planning / ux" data-name="desire paths" data-type="emergent design">
<div className="font-mono text-xs text-[#4a4643] pt-1">261</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Desire Paths</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Where people actually walk vs. where you built the sidewalk</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Emergent Design</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Urban Planning / UX</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="designing spaces that connect humans with natural systems" data-discipline="architecture / psychology" data-name="biophilic design" data-type="nature integration">
<div className="font-mono text-xs text-[#4a4643] pt-1">262</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Biophilic Design</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Designing spaces that connect humans with natural systems</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Nature Integration</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Architecture / Psychology</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="technological">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">16 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Technological &amp; Computational Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How machines think and scale.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="finite states with defined transitions" data-discipline="computer science" data-name="state machines" data-type="computational logic">
<div className="font-mono text-xs text-[#4a4643] pt-1">263</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">State Machines</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Finite states with defined transitions</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Computational Logic</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Computer Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="layers of weighted connections learning patterns" data-discipline="artificial intelligence" data-name="neural networks" data-type="machine learning">
<div className="font-mono text-xs text-[#4a4643] pt-1">264</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Neural Networks</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Layers of weighted connections learning patterns</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Machine Learning</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Artificial Intelligence</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="divide-and-conquer, greedy, dynamic programming" data-discipline="computer science" data-name="algorithm design patterns" data-type="computational thinking">
<div className="font-mono text-xs text-[#4a4643] pt-1">265</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Algorithm Design Patterns</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Divide-and-conquer, greedy, dynamic programming</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Computational Thinking</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Computer Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="track, branch, merge — distributed history" data-discipline="software engineering" data-name="version control (git)" data-type="change management">
<div className="font-mono text-xs text-[#4a4643] pt-1">266</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Version Control (Git)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Track, branch, merge — distributed history</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Change Management</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Software Engineering</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how systems communicate through defined contracts" data-discipline="software engineering" data-name="api architecture (rest / graphql)" data-type="interface design">
<div className="font-mono text-xs text-[#4a4643] pt-1">267</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">API Architecture (REST / GraphQL)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How systems communicate through defined contracts</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Interface Design</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Software Engineering</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="decentralized consensus without central authority" data-discipline="cryptography / economics" data-name="blockchain / distributed ledger" data-type="trustless architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">268</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Blockchain / Distributed Ledger</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Decentralized consensus without central authority</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Trustless Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Cryptography / Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="manual → assisted → partial → conditional → full" data-discipline="industrial engineering" data-name="automation hierarchy" data-type="labor replacement">
<div className="font-mono text-xs text-[#4a4643] pt-1">269</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Automation Hierarchy</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Manual → Assisted → Partial → Conditional → Full</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Labor Replacement</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Industrial Engineering</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="systems that respond to events rather than polling" data-discipline="software engineering" data-name="event-driven architecture" data-type="system design">
<div className="font-mono text-xs text-[#4a4643] pt-1">270</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Event-Driven Architecture</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Systems that respond to events rather than polling</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">System Design</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Software Engineering</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="break big problems into small parallel tasks" data-discipline="computer science" data-name="mapreduce / parallel processing" data-type="scale architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">271</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">MapReduce / Parallel Processing</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Break big problems into small parallel tasks</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Scale Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Computer Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="the theoretical basis for what is computable" data-discipline="computer science" data-name="turing machine" data-type="computational foundation">
<div className="font-mono text-xs text-[#4a4643] pt-1">272</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Turing Machine</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">The theoretical basis for what is computable</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Computational Foundation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Computer Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="redundancy, checksums, parity" data-discipline="information theory" data-name="error correction systems" data-type="reliability">
<div className="font-mono text-xs text-[#4a4643] pt-1">273</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Error Correction Systems</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Redundancy, checksums, parity</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Reliability</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Information Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="classify data to prevent errors at compile time" data-discipline="programming / mathematics" data-name="type systems" data-type="constraint logic">
<div className="font-mono text-xs text-[#4a4643] pt-1">274</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Type Systems</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Classify data to prevent errors at compile time</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Constraint Logic</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Programming / Mathematics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="llm reasoning + external knowledge retrieval" data-discipline="ai / knowledge management" data-name="rag (retrieval-augmented generation)" data-type="ai architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">275</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">RAG (Retrieval-Augmented Generation)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">LLM reasoning + external knowledge retrieval</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">AI Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">AI / Knowledge Management</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="autonomous agents following rules producing emergence" data-discipline="complexity science / ai" data-name="agent-based modeling" data-type="simulation">
<div className="font-mono text-xs text-[#4a4643] pt-1">276</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Agent-Based Modeling</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Autonomous agents following rules producing emergence</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Simulation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Complexity Science / AI</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="military">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">17 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Military &amp; Conflict Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How force, strategy, and survival operate.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="win without fighting; know self, know enemy" data-discipline="military strategy" data-name="sun tzu's principles" data-type="strategic philosophy">
<div className="font-mono text-xs text-[#4a4643] pt-1">277</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Sun Tzu's Principles</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Win without fighting; know self, know enemy</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Strategic Philosophy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Military Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="violence, chance, and political purpose" data-discipline="military philosophy" data-name="clausewitz's trinity" data-type="war theory">
<div className="font-mono text-xs text-[#4a4643] pt-1">278</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Clausewitz's Trinity</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Violence, chance, and political purpose</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">War Theory</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Military Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="speed of adaptation as decisive advantage" data-discipline="military / fighter combat" data-name="ooda loop (expanded)" data-type="decision tempo">
<div className="font-mono text-xs text-[#4a4643] pt-1">279</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">OODA Loop (Expanded)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Speed of adaptation as decisive advantage</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Decision Tempo</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Military / Fighter Combat</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="identify the source of enemy strength and attack it" data-discipline="military strategy" data-name="center of gravity analysis" data-type="strategic targeting">
<div className="font-mono text-xs text-[#4a4643] pt-1">280</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Center of Gravity Analysis</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Identify the source of enemy strength and attack it</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Strategic Targeting</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Military Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="defeat through disruption, not just attrition" data-discipline="military doctrine" data-name="maneuver warfare" data-type="operational art">
<div className="font-mono text-xs text-[#4a4643] pt-1">281</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Maneuver Warfare</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Defeat through disruption, not just attrition</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Operational Art</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Military Doctrine</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="collection → processing → analysis → dissemination" data-discipline="intelligence" data-name="intelligence cycle" data-type="information architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">282</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Intelligence Cycle</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Collection → Processing → Analysis → Dissemination</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Information Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Intelligence</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="credible threat of retaliation preventing aggression" data-discipline="nuclear strategy" data-name="deterrence theory" data-type="conflict prevention">
<div className="font-mono text-xs text-[#4a4643] pt-1">283</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Deterrence Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Credible threat of retaliation preventing aggression</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Conflict Prevention</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Nuclear Strategy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="weak vs. strong — mobility, dispersion, popular support" data-discipline="insurgency theory" data-name="guerrilla warfare principles" data-type="asymmetric strategy">
<div className="font-mono text-xs text-[#4a4643] pt-1">284</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Guerrilla Warfare Principles</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Weak vs. strong — mobility, dispersion, popular support</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Asymmetric Strategy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Insurgency Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="institutional knowledge codified into standard operating doctrine" data-discipline="military" data-name="doctrine as system" data-type="codified strategy">
<div className="font-mono text-xs text-[#4a4643] pt-1">285</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Doctrine as System</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Institutional knowledge codified into standard operating doctrine</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Codified Strategy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Military</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="amateurs talk strategy; professionals talk logistics" data-discipline="military / business" data-name="logistics as strategy" data-type="supply architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">286</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Logistics as Strategy</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Amateurs talk strategy; professionals talk logistics</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Supply Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Military / Business</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="commander's intuitive grasp of a situation at a glance" data-discipline="military leadership" data-name="coup d'œil (napoleon)" data-type="intuitive assessment">
<div className="font-mono text-xs text-[#4a4643] pt-1">287</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Coup d'œil (Napoleon)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Commander's intuitive grasp of a situation at a glance</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Intuitive Assessment</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Military Leadership</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="legal">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">18 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Legal, Governance &amp; Institutional Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How societies codify order.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="precedent-based vs. codified statute systems" data-discipline="jurisprudence" data-name="common law vs. civil law" data-type="legal architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">288</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Common Law vs. Civil Law</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Precedent-based vs. codified statute systems</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Legal Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Jurisprudence</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how founding documents structure power and rights" data-discipline="political science" data-name="constitutional design" data-type="governance architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">289</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Constitutional Design</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How founding documents structure power and rights</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Governance Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Political Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="legislative, executive, judicial — checks and balances" data-discipline="political theory" data-name="separation of powers" data-type="governance structure">
<div className="font-mono text-xs text-[#4a4643] pt-1">290</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Separation of Powers</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Legislative, executive, judicial — checks and balances</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Governance Structure</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Political Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="rules, enforcement, and oversight structures" data-discipline="law / public policy" data-name="regulatory frameworks" data-type="compliance architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">291</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Regulatory Frameworks</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Rules, enforcement, and oversight structures</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Compliance Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Law / Public Policy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="legitimacy through consent of the governed" data-discipline="philosophy" data-name="social contract theory" data-type="political foundation">
<div className="font-mono text-xs text-[#4a4643] pt-1">292</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Social Contract Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Legitimacy through consent of the governed</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Political Foundation</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="overlapping centers of decision-making" data-discipline="political economy (ostrom)" data-name="polycentric governance" data-type="distributed authority">
<div className="font-mono text-xs text-[#4a4643] pt-1">293</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Polycentric Governance</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Overlapping centers of decision-making</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Distributed Authority</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Political Economy (Ostrom)</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="decisions at the lowest effective level" data-discipline="catholic social teaching / eu law" data-name="subsidiarity" data-type="authority architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">294</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Subsidiarity</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Decisions at the lowest effective level</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Authority Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Catholic Social Teaching / EU Law</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="criteria for when warfare is morally justified" data-discipline="theology / international law" data-name="just war theory" data-type="ethical framework">
<div className="font-mono text-xs text-[#4a4643] pt-1">295</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Just War Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Criteria for when warfare is morally justified</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Ethical Framework</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Theology / International Law</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="repair harm through dialogue rather than punishment" data-discipline="criminal justice / theology" data-name="restorative justice" data-type="conflict resolution">
<div className="font-mono text-xs text-[#4a4643] pt-1">296</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Restorative Justice</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Repair harm through dialogue rather than punishment</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Conflict Resolution</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Criminal Justice / Theology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how executive power is structured and checked" data-discipline="political science" data-name="parliamentary vs. presidential" data-type="governance design">
<div className="font-mono text-xs text-[#4a4643] pt-1">297</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Parliamentary vs. Presidential</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How executive power is structured and checked</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Governance Design</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Political Science</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="health">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">19 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Health, Performance &amp; Recovery Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How the body and mind are optimized.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="cycling intensity and volume for peak performance" data-discipline="sports science" data-name="periodization" data-type="performance architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">298</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Periodization</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Cycling intensity and volume for peak performance</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Performance Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Sports Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="stages of sleep and their distinct functions" data-discipline="neuroscience / medicine" data-name="sleep architecture" data-type="recovery system">
<div className="font-mono text-xs text-[#4a4643] pt-1">299</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Sleep Architecture</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Stages of sleep and their distinct functions</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Recovery System</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Neuroscience / Medicine</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="small stressors that make systems stronger" data-discipline="physiology" data-name="hormetic stress" data-type="adaptive stress">
<div className="font-mono text-xs text-[#4a4643] pt-1">300</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Hormetic Stress</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Small stressors that make systems stronger</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Adaptive Stress</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Physiology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="nervous system readiness via beat-to-beat variation" data-discipline="sports science" data-name="hrv (heart rate variability)" data-type="recovery metric">
<div className="font-mono text-xs text-[#4a4643] pt-1">301</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">HRV (Heart Rate Variability)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Nervous system readiness via beat-to-beat variation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Recovery Metric</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Sports Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="baseline management for sustained drive without burnout" data-discipline="neuroscience" data-name="dopamine regulation" data-type="motivation architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">302</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Dopamine Regulation</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Baseline management for sustained drive without burnout</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Motivation Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Neuroscience</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="ability to switch between glucose and fat as fuel" data-discipline="nutrition / exercise science" data-name="metabolic flexibility" data-type="energy systems">
<div className="font-mono text-xs text-[#4a4643] pt-1">303</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Metabolic Flexibility</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Ability to switch between glucose and fat as fuel</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Energy Systems</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Nutrition / Exercise Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="cumulative wear from chronic stress adaptation" data-discipline="psychoneuroimmunology" data-name="allostatic load model" data-type="stress architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">304</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Allostatic Load Model</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Cumulative wear from chronic stress adaptation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Stress Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Psychoneuroimmunology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="gradual increase in demand drives adaptation" data-discipline="strength training" data-name="progressive overload" data-type="adaptation principle">
<div className="font-mono text-xs text-[#4a4643] pt-1">305</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Progressive Overload</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Gradual increase in demand drives adaptation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Adaptation Principle</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Strength Training</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="breath, cold, social engagement to regulate vagus nerve" data-discipline="neuroscience / therapy" data-name="vagal tone / polyvagal exercises" data-type="nervous system training">
<div className="font-mono text-xs text-[#4a4643] pt-1">306</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Vagal Tone / Polyvagal Exercises</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Breath, cold, social engagement to regulate vagus nerve</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Nervous System Training</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Neuroscience / Therapy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="light, meal timing, temperature — engineering the 24-hour cycle" data-discipline="chronobiology" data-name="circadian protocol design" data-type="daily architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">307</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Circadian Protocol Design</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Light, meal timing, temperature — engineering the 24-hour cycle</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Daily Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Chronobiology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="pain as output of brain, not just input from tissue" data-discipline="medicine / psychology" data-name="pain science (biopsychosocial)" data-type="pain architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">308</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Pain Science (Biopsychosocial)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Pain as output of brain, not just input from tissue</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Pain Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Medicine / Psychology</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="mathematical">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">20 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Mathematical &amp; Formal Structures</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">The deep grammar beneath all systems.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="nash equilibrium, dominant strategies, cooperation dilemmas" data-discipline="mathematics / economics" data-name="game theory" data-type="strategic interaction">
<div className="font-mono text-xs text-[#4a4643] pt-1">309</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Game Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Nash equilibrium, dominant strategies, cooperation dilemmas</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Strategic Interaction</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Mathematics / Economics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="the formal language for reasoning under uncertainty" data-discipline="mathematics" data-name="probability theory" data-type="uncertainty quantification">
<div className="font-mono text-xs text-[#4a4643] pt-1">310</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Probability Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">The formal language for reasoning under uncertainty</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Uncertainty Quantification</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Mathematics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="nodes and edges — the math of connection" data-discipline="mathematics" data-name="graph theory" data-type="network mathematics">
<div className="font-mono text-xs text-[#4a4643] pt-1">311</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Graph Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Nodes and edges — the math of connection</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Network Mathematics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Mathematics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="the mathematics of mathematical structure" data-discipline="mathematics" data-name="category theory" data-type="structural mathematics">
<div className="font-mono text-xs text-[#4a4643] pt-1">312</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Category Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">The mathematics of mathematical structure</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Structural Mathematics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Mathematics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="properties preserved under continuous deformation" data-discipline="mathematics" data-name="topology" data-type="shape mathematics">
<div className="font-mono text-xs text-[#4a4643] pt-1">313</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Topology</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Properties preserved under continuous deformation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Shape Mathematics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Mathematics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="normal, power law, poisson — shapes of randomness" data-discipline="statistics" data-name="statistical distributions" data-type="pattern mathematics">
<div className="font-mono text-xs text-[#4a4643] pt-1">314</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Statistical Distributions</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Normal, power law, Poisson — shapes of randomness</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Pattern Mathematics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Statistics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="finding maxima and minima under constraints" data-discipline="applied mathematics" data-name="optimization theory" data-type="best-outcome mathematics">
<div className="font-mono text-xs text-[#4a4643] pt-1">315</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Optimization Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Finding maxima and minima under constraints</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Best-Outcome Mathematics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Applied Mathematics</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="quantifying uncertainty and information content" data-discipline="information theory" data-name="information entropy" data-type="disorder measure">
<div className="font-mono text-xs text-[#4a4643] pt-1">316</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Information Entropy</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Quantifying uncertainty and information content</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Disorder Measure</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Information Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="future state depends only on current state" data-discipline="probability" data-name="markov chains" data-type="state transition">
<div className="font-mono text-xs text-[#4a4643] pt-1">317</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Markov Chains</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Future state depends only on current state</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">State Transition</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Probability</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how properties change with size" data-discipline="physics / biology" data-name="scaling laws" data-type="growth mathematics">
<div className="font-mono text-xs text-[#4a4643] pt-1">318</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Scaling Laws</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How properties change with size</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Growth Mathematics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Physics / Biology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="modeling arrivals, service, and congestion" data-discipline="operations research" data-name="queueing theory" data-type="wait-time mathematics">
<div className="font-mono text-xs text-[#4a4643] pt-1">319</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Queueing Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Modeling arrivals, service, and congestion</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Wait-Time Mathematics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Operations Research</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="formal models for rational choice under uncertainty" data-discipline="mathematics / philosophy" data-name="decision theory" data-type="choice mathematics">
<div className="font-mono text-xs text-[#4a4643] pt-1">320</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Decision Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Formal models for rational choice under uncertainty</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Choice Mathematics</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Mathematics / Philosophy</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="cultural">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">21 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Cultural, Media &amp; Narrative Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How stories and culture shape reality.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="universal narrative patterns across cultures" data-discipline="mythology / screenwriting" data-name="mythic structure" data-type="story architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">321</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Mythic Structure</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Universal narrative patterns across cultures</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Story Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Mythology / Screenwriting</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="shadow, anima, trickster, wise old man" data-discipline="analytical psychology" data-name="archetypal systems (jung)" data-type="symbolic architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">322</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Archetypal Systems (Jung)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Shadow, anima, trickster, wise old man</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Symbolic Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Analytical Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="the medium shapes the message more than content" data-discipline="communication theory" data-name="mcluhan's media theory" data-type="medium as message">
<div className="font-mono text-xs text-[#4a4643] pt-1">323</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">McLuhan's Media Theory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">The medium shapes the message more than content</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Medium as Message</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Communication Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="ideas as self-replicating units of cultural transmission" data-discipline="evolutionary biology" data-name="meme theory (dawkins)" data-type="cultural evolution">
<div className="font-mono text-xs text-[#4a4643] pt-1">324</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Meme Theory (Dawkins)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Ideas as self-replicating units of cultural transmission</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Cultural Evolution</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Evolutionary Biology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="life mediated by images" data-discipline="critical theory" data-name="spectacle (debord)" data-type="cultural critique">
<div className="font-mono text-xs text-[#4a4643] pt-1">325</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Spectacle (Debord)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Life mediated by images</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Cultural Critique</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Critical Theory</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="practices shape desire, desire shapes identity" data-discipline="theology / cultural studies" data-name="cultural liturgies (james k.a. smith)" data-type="formation architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">326</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Cultural Liturgies (James K.A. Smith)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Practices shape desire, desire shapes identity</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Formation Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Theology / Cultural Studies</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="the shifting range of acceptable public ideas" data-discipline="political science" data-name="overton window" data-type="discourse architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">327</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Overton Window</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">The shifting range of acceptable public ideas</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Discourse Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Political Science</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how groups construct shared narratives of the past" data-discipline="sociology (halbwachs)" data-name="collective memory" data-type="shared history">
<div className="font-mono text-xs text-[#4a4643] pt-1">328</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Collective Memory</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How groups construct shared narratives of the past</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Shared History</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Sociology (Halbwachs)</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="meaning created through social interaction" data-discipline="sociology" data-name="symbolic interactionism" data-type="meaning-making">
<div className="font-mono text-xs text-[#4a4643] pt-1">329</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Symbolic Interactionism</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Meaning created through social interaction</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Meaning-Making</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Sociology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="every person operates from implicit ultimate commitments" data-discipline="philosophy / theology" data-name="worldview analysis" data-type="ideological architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">330</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Worldview Analysis</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Every person operates from implicit ultimate commitments</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Ideological Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Philosophy / Theology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how information is filtered, framed, and weaponized" data-discipline="media studies" data-name="propaganda model" data-type="narrative control">
<div className="font-mono text-xs text-[#4a4643] pt-1">331</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Propaganda Model</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How information is filtered, framed, and weaponized</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Narrative Control</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Media Studies</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="esoteric">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">22 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Esoteric, Mystical &amp; Fringe Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">Where the map meets the mystery.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="ten sefirot mapping divine attributes" data-discipline="jewish mysticism" data-name="kabbalistic tree of life" data-type="mystical architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">332</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Kabbalistic Tree of Life</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Ten sefirot mapping divine attributes</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Mystical Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Jewish Mysticism</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="seven energy centers from root to crown" data-discipline="hinduism / yoga" data-name="chakra system" data-type="energy architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">333</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Chakra System</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Seven energy centers from root to crown</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Energy Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Hinduism / Yoga</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="64 hexagrams mapping patterns of change" data-discipline="chinese philosophy" data-name="i ching" data-type="divination system">
<div className="font-mono text-xs text-[#4a4643] pt-1">334</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">I Ching</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">64 hexagrams mapping patterns of change</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Divination System</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Chinese Philosophy</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="seven principles: mentalism, correspondence, vibration, etc." data-discipline="western esotericism" data-name="hermetic principles" data-type="esoteric philosophy">
<div className="font-mono text-xs text-[#4a4643] pt-1">335</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Hermetic Principles</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Seven principles: mentalism, correspondence, vibration, etc.</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Esoteric Philosophy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Western Esotericism</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="major/minor arcana as journey of consciousness" data-discipline="western esotericism" data-name="tarot as archetypal map" data-type="symbolic system">
<div className="font-mono text-xs text-[#4a4643] pt-1">336</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Tarot as Archetypal Map</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Major/minor arcana as journey of consciousness</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Symbolic System</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Western Esotericism</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="phi, fibonacci, platonic solids" data-discipline="cross-cultural" data-name="sacred geometry" data-type="form mysticism">
<div className="font-mono text-xs text-[#4a4643] pt-1">337</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Sacred Geometry</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Phi, Fibonacci, Platonic solids</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Form Mysticism</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Cross-Cultural</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="nine-pointed diagram of transformation" data-discipline="sufism / christianity" data-name="enneagram (mystical origins)" data-type="personality cosmology">
<div className="font-mono text-xs text-[#4a4643] pt-1">338</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Enneagram (Mystical Origins)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Nine-pointed diagram of transformation</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Personality Cosmology</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Sufism / Christianity</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="nigredo, albedo, citrinitas, rubedo" data-discipline="esotericism / jungian psychology" data-name="alchemy as transformation map" data-type="symbolic process">
<div className="font-mono text-xs text-[#4a4643] pt-1">339</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Alchemy as Transformation Map</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Nigredo, albedo, citrinitas, rubedo</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Symbolic Process</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Esotericism / Jungian Psychology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="planetary archetypes, houses, aspects" data-discipline="astrology" data-name="astrological systems" data-type="cosmic architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">340</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Astrological Systems</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Planetary archetypes, houses, aspects</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Cosmic Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Astrology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="channels of qi flow mapped across the body" data-discipline="traditional chinese medicine" data-name="meridian systems" data-type="energy pathways">
<div className="font-mono text-xs text-[#4a4643] pt-1">341</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Meridian Systems</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Channels of qi flow mapped across the body</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Energy Pathways</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Traditional Chinese Medicine</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="meaningful coincidences — pattern without cause" data-discipline="analytical psychology" data-name="synchronicity (jung)" data-type="acausal connection">
<div className="font-mono text-xs text-[#4a4643] pt-1">342</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Synchronicity (Jung)</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Meaningful coincidences — pattern without cause</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Acausal Connection</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Analytical Psychology</div>
</div>
</div>
<div className="py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto section" id="ecological">
<div className="mb-12 reveal section-header">
<div className="font-mono text-xs tracking-widest uppercase text-[#8a6a3e] mb-3">23 / 23</div>
<div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[#f5f1eb] leading-tight mb-2 tracking-tight">Ecological &amp; Environmental Systems</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">How the living world organizes itself.</div>
<div className="w-16 h-px bg-[#c8935a] mt-6"></div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="maximum population a system can sustain" data-discipline="ecology" data-name="carrying capacity" data-type="ecological limit">
<div className="font-mono text-xs text-[#4a4643] pt-1">343</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Carrying Capacity</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Maximum population a system can sustain</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Ecological Limit</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Ecology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="pioneer → intermediate → climax" data-discipline="ecology" data-name="succession ecology" data-type="ecosystem development">
<div className="font-mono text-xs text-[#4a4643] pt-1">344</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Succession Ecology</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Pioneer → Intermediate → Climax</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Ecosystem Development</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Ecology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="carbon, nitrogen, phosphorus cycling through systems" data-discipline="ecology / chemistry" data-name="nutrient cycling" data-type="material flow">
<div className="font-mono text-xs text-[#4a4643] pt-1">345</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Nutrient Cycling</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Carbon, nitrogen, phosphorus cycling through systems</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Material Flow</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Ecology / Chemistry</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="one species holding the entire ecosystem together" data-discipline="ecology" data-name="keystone species" data-type="disproportionate impact">
<div className="font-mono text-xs text-[#4a4643] pt-1">346</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Keystone Species</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">One species holding the entire ecosystem together</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Disproportionate Impact</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Ecology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="changes at the top ripple through every level" data-discipline="ecology" data-name="trophic cascades" data-type="top-down effect">
<div className="font-mono text-xs text-[#4a4643] pt-1">347</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Trophic Cascades</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Changes at the top ripple through every level</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Top-Down Effect</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Ecology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="how water organizes landscape, life, and civilization" data-discipline="hydrology / ecology" data-name="watershed systems" data-type="hydrological architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">348</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Watershed Systems</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">How water organizes landscape, life, and civilization</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Hydrological Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Hydrology / Ecology</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="climate-based categorization of major ecosystems" data-discipline="ecology / geography" data-name="biome classification" data-type="ecological taxonomy">
<div className="font-mono text-xs text-[#4a4643] pt-1">349</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Biome Classification</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Climate-based categorization of major ecosystems</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Ecological Taxonomy</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Ecology / Geography</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="design that restores rather than depletes" data-discipline="ecology / agriculture" data-name="regenerative systems design" data-type="restorative architecture">
<div className="font-mono text-xs text-[#4a4643] pt-1">350</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Regenerative Systems Design</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Design that restores rather than depletes</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Restorative Architecture</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Ecology / Agriculture</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="nine boundaries humanity must stay within" data-discipline="earth science (rockström)" data-name="planetary boundaries" data-type="earth systems limits">
<div className="font-mono text-xs text-[#4a4643] pt-1">351</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Planetary Boundaries</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Nine boundaries humanity must stay within</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Earth Systems Limits</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Earth Science (Rockström)</div>
</div>
<div className="grid grid-cols-[32px_1fr] md:grid-cols-[40px_1fr_180px_180px] gap-2 md:gap-6 items-start py-5 border-b border-[#4a4643]/20 transition-all duration-500 hover:bg-[#c8935a]/5 px-0 hover:px-2 md:-mx-2 group cursor-default reveal system-row" data-desc="design out waste — materials cycle continuously" data-discipline="industrial ecology" data-name="circular economy" data-type="waste elimination">
<div className="font-mono text-xs text-[#4a4643] pt-1">352</div>
<div className="flex flex-col gap-1">
<div className="font-display text-lg font-normal text-[#e8e2d8] group-hover:text-[#c8935a] transition-colors">Circular Economy</div>
<div className="font-body text-sm font-extralight text-[#7a7572] leading-relaxed">Design out waste — materials cycle continuously</div>
</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#8a6a3e] pt-1 hidden md:block">Waste Elimination</div>
<div className="font-mono text-xs tracking-wider uppercase text-[#4a4643] pt-1 hidden md:block md:text-right">Industrial Ecology</div>
</div>
</div></div>

<div className="text-center py-24 md:py-32 px-6 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-[#8a6a3e] opacity-50"></div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94] mb-2">One system per week.</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94] mb-2">Applied to life and business.</div>
<div className="font-display text-lg md:text-xl italic text-[#a09a94]">With philosophical depth and operational clarity.</div>
<div className="font-display text-3xl font-medium text-[#c8935a] tracking-tight mt-10">Superhuman Systems</div>
<div className="font-body text-sm font-extralight text-[#7a7572] mt-2">Matt Vincent Walker</div>
</div>

<button aria-label="Back to Top" className="fixed bottom-8 right-8 w-11 h-11 rounded-full bg-[#2a2725]/80 border border-[#4a4643] flex items-center justify-center cursor-pointer transition-all duration-500 z-[800] backdrop-blur-md hover:border-[#c8935a] hover:bg-[#c8935a]/10 group outline-none" id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})">
<iconify-icon className="text-[#a09a94] group-hover:text-[#c8935a] transition-colors" height="20" icon="solar:alt-arrow-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>


    </>
  );
}
