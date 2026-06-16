import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


      const sampleWorkflow = {
        nodes: [
          {
            id: '1',
            name: 'Schedule Trigger',
            type: 'n8n-nodes-base.scheduleTrigger',
            parameters: { rule: { interval: [{ field: 'hours', hoursInterval: 1 }] } },
            credentials: {}
          },
          {
            id: '2',
            name: 'Google Sheets',
            type: 'n8n-nodes-base.googleSheets',
            parameters: { operation: 'read', documentId: 'spreadsheet-id', sheetName: 'Sheet1' },
            credentials: { googleSheetsOAuth2Api: { id: 'cred-1', name: 'Google Sheets Account' } }
          },
          {
            id: '3',
            name: 'IF Node',
            type: 'n8n-nodes-base.if',
            parameters: { conditions: { string: [{ value1: '={{$json.status}}', operation: 'equal', value2: 'active' }] } },
            credentials: {}
          },
          {
            id: '4',
            name: 'Gmail',
            type: 'n8n-nodes-base.gmail',
            parameters: { operation: 'send', to: 'team@example.com', subject: 'Workflow Alert' },
            credentials: { gmailOAuth2: { id: 'cred-2', name: 'Gmail Account' } }
          }
        ],
        connections: {
          'Schedule Trigger': { main: [[{ node: 'Google Sheets', type: 'main', index: 0 }]] },
          'Google Sheets': { main: [[{ node: 'IF Node', type: 'main', index: 0 }]] },
          'IF Node': { main: [[{ node: 'Gmail', type: 'main', index: 0 }], []] }
        }
      };

      const state = {
        steps: [],
        selectedStepIndex: 0,
        activeInput: 'upload'
      };

      const el = {
        uploadTabBtn: document.getElementById('uploadTabBtn'),
        pasteTabBtn: document.getElementById('pasteTabBtn'),
        uploadPanel: document.getElementById('uploadPanel'),
        pastePanel: document.getElementById('pastePanel'),
        jsonFileInput: document.getElementById('jsonFileInput'),
        jsonTextInput: document.getElementById('jsonTextInput'),
        analyzeBtn: document.getElementById('analyzeBtn'),
        selectedFileName: document.getElementById('selectedFileName'),
        statusTitle: document.getElementById('statusTitle'),
        statusMessage: document.getElementById('statusMessage'),
        statusBadge: document.getElementById('statusBadge'),
        statSteps: document.getElementById('statSteps'),
        statNodes: document.getElementById('statNodes'),
        statConnections: document.getElementById('statConnections'),
        statStatus: document.getElementById('statStatus'),
        loadingState: document.getElementById('loadingState'),
        errorState: document.getElementById('errorState'),
        errorTitle: document.getElementById('errorTitle'),
        errorMessage: document.getElementById('errorMessage'),
        guideEmptyState: document.getElementById('guideEmptyState'),
        guideViewer: document.getElementById('guideViewer'),
        stepsNav: document.getElementById('stepsNav'),
        stepCountLabel: document.getElementById('stepCountLabel'),
        detailStepNumber: document.getElementById('detailStepNumber'),
        detailNodeName: document.getElementById('detailNodeName'),
        detailNodeType: document.getElementById('detailNodeType'),
        detailPurpose: document.getElementById('detailPurpose'),
        detailConfig: document.getElementById('detailConfig'),
        detailCredentials: document.getElementById('detailCredentials'),
        detailConnections: document.getElementById('detailConnections'),
        detailParameters: document.getElementById('detailParameters'),
        copyCurrentStepBtn: document.getElementById('copyCurrentStepBtn'),
        copyConfigBtn: document.getElementById('copyConfigBtn'),
        copyAllStepBtn: document.getElementById('copyAllStepBtn'),
        copyConfigInlineBtn: document.getElementById('copyConfigInlineBtn'),
        scrollToInputBtn: document.getElementById('scrollToInputBtn'),
        loadSampleBtn: document.getElementById('loadSampleBtn')
      };

      function setInputMode(mode) {
        state.activeInput = mode;
        const uploadActive = mode === 'upload';
        el.uploadPanel.classList.toggle('hidden', !uploadActive);
        el.pastePanel.classList.toggle('hidden', uploadActive);
        el.uploadTabBtn.className = uploadActive ? 'px-4 py-1.5 rounded-md bg-white/10 text-xs font-medium text-white shadow-sm' : 'px-4 py-1.5 rounded-md text-xs font-medium text-white/50 hover:text-white transition-colors';
        el.pasteTabBtn.className = !uploadActive ? 'px-4 py-1.5 rounded-md bg-white/10 text-xs font-medium text-white shadow-sm' : 'px-4 py-1.5 rounded-md text-xs font-medium text-white/50 hover:text-white transition-colors';
      }

      function setStatus(title, message, badge) {
        el.statusTitle.textContent = title;
        el.statusMessage.textContent = message;
        el.statusBadge.textContent = badge;
      }

      function showLoading() {
        el.loadingState.style.display = 'flex';
        el.errorState.classList.add('hidden');
        el.guideEmptyState.classList.add('hidden');
        el.guideViewer.classList.add('hidden');
        setStatus('Analyzing workflow...', 'Parsing nodes, connections, and workflow order', 'RUNNING');
      }

      function showError(message, title = 'Unable to analyze workflow') {
        el.loadingState.style.display = 'none';
        el.errorState.classList.remove('hidden');
        el.guideEmptyState.classList.add('hidden');
        el.guideViewer.classList.add('hidden');
        el.errorTitle.textContent = title;
        el.errorMessage.textContent = message;
        el.stepsNav.innerHTML = '<div class="text-xs text-white/40">No steps available.</div>';
        el.stepCountLabel.textContent = '0 steps';
        el.statSteps.textContent = '0';
        el.statNodes.textContent = '0';
        el.statConnections.textContent = '0';
        el.statStatus.textContent = 'Error';
        setStatus('Analysis failed', message, 'ERROR');
      }

      function showEmpty() {
        el.loadingState.style.display = 'none';
        el.errorState.classList.add('hidden');
        el.guideEmptyState.classList.remove('hidden');
        el.guideViewer.classList.add('hidden');
      }

      function escapeHtml(value) {
        return String(value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;');
      }

      function pretty(value) {
        if (value == null) return 'None';
        if (typeof value === 'string') return value;
        try { return JSON.stringify(value, null, 2); } catch { return String(value); }
      }

      function inferPurpose(node) {
        const type = (node.type || '').toLowerCase();
        const name = (node.name || '').toLowerCase();
        if (type.includes('trigger') || name.includes('trigger') || name.includes('schedule')) return 'Starts the workflow automatically or listens for an event to begin execution.';
        if (type.includes('googleSheets'.toLowerCase()) || name.includes('sheet')) return 'Reads, writes, or updates spreadsheet data used by the workflow.';
        if (type.endsWith('.if') || name.includes('if')) return 'Checks a condition and routes the workflow based on matching logic.';
        if (type.includes('gmail') || type.includes('email') || name.includes('mail')) return 'Sends an email or interacts with a mail service as part of the workflow.';
        if (type.includes('http') || name.includes('http')) return 'Connects to an external API or web service to send or retrieve data.';
        if (type.includes('set') || name === 'set') return 'Maps, shapes, or prepares data for the next workflow step.';
        return 'Performs a workflow action using this node\'s configured parameters and connected services.';
      }

      function generateConfigInstructions(node) {
        const params = node.parameters || {};
        const entries = Object.entries(params);
        if (!entries.length) return 'Review this node in n8n and configure the required fields for its operation.';
        return entries.slice(0, 8).map(([key, value]) => `• ${key}: ${typeof value === 'object' ? pretty(value) : value}`).join('\n');
      }

      function summarizeCredentials(credentials) {
        if (!credentials || !Object.keys(credentials).length) return 'No credentials detected.';
        return Object.entries(credentials).map(([key, value]) => `• ${key}: ${value?.name || value?.id || 'Configured'}`).join('\n');
      }

      function summarizeConnections(nodeName, connections) {
        const current = connections?.[nodeName];
        if (!current) return 'No outgoing connections found.';
        const lines = [];
        Object.entries(current).forEach(([channel, groups]) => {
          (groups || []).forEach((group, groupIndex) => {
            (group || []).forEach((conn) => {
              lines.push(`• ${channel}[${groupIndex}] → ${conn.node}`);
            });
          });
        });
        return lines.length ? lines.join('\n') : 'No outgoing connections found.';
      }

      function countConnections(connections) {
        let total = 0;
        Object.values(connections || {}).forEach((group) => {
          Object.values(group || {}).forEach((arr) => {
            (arr || []).forEach((inner) => { total += (inner || []).length; });
          });
        });
        return total;
      }

      function detectWorkflowOrder(nodes, connections) {
        const nameToNode = new Map(nodes.map((node) => [node.name, node]));
        const incoming = new Map(nodes.map((node) => [node.name, 0]));
        Object.entries(connections || {}).forEach(([, outputs]) => {
          Object.values(outputs || {}).forEach((channelGroups) => {
            (channelGroups || []).forEach((group) => {
              (group || []).forEach((conn) => {
                incoming.set(conn.node, (incoming.get(conn.node) || 0) + 1);
              });
            });
          });
        });
        const queue = nodes.filter((node) => (incoming.get(node.name) || 0) === 0).map((node) => node.name);
        const visited = new Set();
        const ordered = [];
        while (queue.length) {
          const currentName = queue.shift();
          if (visited.has(currentName)) continue;
          visited.add(currentName);
          const node = nameToNode.get(currentName);
          if (node) ordered.push(node);
          const outgoing = connections?.[currentName];
          Object.values(outgoing || {}).forEach((groups) => {
            (groups || []).forEach((group) => {
              (group || []).forEach((conn) => {
                const nextName = conn.node;
                incoming.set(nextName, (incoming.get(nextName) || 0) - 1);
                if ((incoming.get(nextName) || 0) <= 0) queue.push(nextName);
              });
            });
          });
        }
        nodes.forEach((node) => {
          if (!visited.has(node.name)) ordered.push(node);
        });
        return ordered;
      }

      function buildSteps(workflow) {
        const nodes = Array.isArray(workflow.nodes) ? workflow.nodes : [];
        const connections = workflow.connections || {};
        const orderedNodes = detectWorkflowOrder(nodes, connections);
        return orderedNodes.map((node, index) => ({
          stepNumber: index + 1,
          nodeName: node.name || `Node ${index + 1}`,
          nodeType: node.type || 'Unknown type',
          purpose: inferPurpose(node),
          configuration: generateConfigInstructions(node),
          credentials: summarizeCredentials(node.credentials),
          connections: summarizeConnections(node.name, connections),
          parameters: pretty(node.parameters || {}),
          rawNode: node
        }));
      }

      function renderStepsNav() {
        if (!state.steps.length) {
          el.stepsNav.innerHTML = '<div class="text-xs text-white/40">No workflow analyzed yet.</div>';
          el.stepCountLabel.textContent = '0 steps';
          return;
        }
        el.stepCountLabel.textContent = `${state.steps.length} step${state.steps.length === 1 ? '' : 's'}`;
        el.stepsNav.innerHTML = state.steps.map((step, index) => {
          const active = index === state.selectedStepIndex;
          return `<button data-step-index="${index}" class="w-full text-left rounded-lg border ${active ? 'border-white/20 bg-white/10 text-white' : 'border-white/5 bg-white/[0.02] text-white/70 hover:text-white hover:border-white/10'} p-3 transition-all"><div class="text-[10px] tracking-wide mb-1">Step ${step.stepNumber}</div><div class="text-xs font-medium">${escapeHtml(step.nodeName)}</div></button>`;
        }).join('');
        el.stepsNav.querySelectorAll('[data-step-index]').forEach((button) => {
          button.addEventListener('click', () => {
            state.selectedStepIndex = Number(button.getAttribute('data-step-index'));
            renderStepsNav();
            renderStepDetail();
          });
        });
      }

      function renderStepDetail() {
        const step = state.steps[state.selectedStepIndex];
        if (!step) return;
        el.detailStepNumber.textContent = `STEP ${step.stepNumber}`;
        el.detailNodeName.textContent = step.nodeName;
        el.detailNodeType.textContent = step.nodeType;
        el.detailPurpose.textContent = step.purpose;
        el.detailConfig.textContent = step.configuration;
        el.detailCredentials.textContent = step.credentials;
        el.detailConnections.textContent = step.connections;
        el.detailParameters.textContent = step.parameters;
      }

      function renderGuide(workflow) {
        state.steps = buildSteps(workflow);
        state.selectedStepIndex = 0;
        el.loadingState.style.display = 'none';
        el.errorState.classList.add('hidden');
        el.guideEmptyState.classList.add('hidden');
        el.guideViewer.classList.remove('hidden');
        const nodeCount = Array.isArray(workflow.nodes) ? workflow.nodes.length : 0;
        const connectionCount = countConnections(workflow.connections || {});
        el.statSteps.textContent = String(state.steps.length);
        el.statNodes.textContent = String(nodeCount);
        el.statConnections.textContent = String(connectionCount);
        el.statStatus.textContent = 'Valid';
        renderStepsNav();
        renderStepDetail();
        setStatus('Guide generated', `${state.steps.length} step${state.steps.length === 1 ? '' : 's'} created successfully`, 'READY');
      }

      function validateWorkflowJson(parsed) {
        if (!parsed || typeof parsed !== 'object') throw new Error('Invalid n8n JSON file');
        if (!Array.isArray(parsed.nodes) && !Array.isArray(parsed.meta?.nodes)) throw new Error('Missing nodes');
        const nodes = Array.isArray(parsed.nodes) ? parsed.nodes : parsed.meta.nodes;
        if (!nodes.length) throw new Error('Empty workflow');
        return {
          ...parsed,
          nodes,
          connections: parsed.connections || {}
        };
      }

      async function analyzeInput() {
        try {
          showLoading();
          let rawText = '';
          if (state.activeInput === 'upload') {
            const file = el.jsonFileInput.files?.[0];
            if (!file) throw new Error('Please upload a JSON file');
            rawText = await file.text();
          } else {
            rawText = el.jsonTextInput.value.trim();
            if (!rawText) throw new Error('Please paste workflow JSON');
          }
          await new Promise((resolve) => setTimeout(resolve, 500));
          let parsed;
          try {
            parsed = JSON.parse(rawText);
          } catch {
            throw new Error('Invalid n8n JSON file');
          }
          const workflow = validateWorkflowJson(parsed);
          renderGuide(workflow);
          document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } catch (error) {
          const message = error?.message || 'Invalid n8n JSON file';
          if (message === 'Empty workflow') showError('Empty workflow', 'Workflow is empty');
          else if (message === 'Missing nodes') showError('Missing nodes', 'Workflow nodes not found');
          else if (message === 'Invalid n8n JSON file') showError('Invalid n8n JSON file');
          else showError(message);
        }
      }

      async function copyText(text, fallbackLabel) {
        try {
          await navigator.clipboard.writeText(text);
          setStatus('Copied to clipboard', fallbackLabel, 'COPIED');
        } catch {
          setStatus('Copy failed', 'Clipboard access is unavailable', 'ERROR');
        }
      }

      function getCurrentStepText() {
        const step = state.steps[state.selectedStepIndex];
        if (!step) return '';
        return `Step ${step.stepNumber}\nNode: ${step.nodeName}\nType: ${step.nodeType}\n\nPurpose:\n${step.purpose}\n\nConfiguration:\n${step.configuration}\n\nCredentials:\n${step.credentials}\n\nConnections:\n${step.connections}`;
      }

      el.uploadTabBtn?.addEventListener('click', () => setInputMode('upload'));
      el.pasteTabBtn?.addEventListener('click', () => setInputMode('paste'));
      el.analyzeBtn?.addEventListener('click', analyzeInput);
      el.jsonFileInput?.addEventListener('change', () => {
        const file = el.jsonFileInput.files?.[0];
        el.selectedFileName.textContent = file ? `Selected file: ${file.name}` : '';
      });
      el.copyCurrentStepBtn?.addEventListener('click', () => copyText(getCurrentStepText(), 'Step instructions copied'));
      el.copyAllStepBtn?.addEventListener('click', () => copyText(getCurrentStepText(), 'Step instructions copied'));
      el.copyConfigBtn?.addEventListener('click', () => copyText(state.steps[state.selectedStepIndex]?.configuration || '', 'Configuration copied'));
      el.copyConfigInlineBtn?.addEventListener('click', () => copyText(state.steps[state.selectedStepIndex]?.configuration || '', 'Configuration copied'));
      el.scrollToInputBtn?.addEventListener('click', () => document.getElementById('input')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      el.loadSampleBtn?.addEventListener('click', () => {
        setInputMode('paste');
        el.jsonTextInput.value = JSON.stringify(sampleWorkflow, null, 2);
        setStatus('Sample loaded', 'A demo n8n workflow is ready to analyze', 'DEMO');
        document.getElementById('input')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      document.querySelector('nav .flex.items-center.gap-4 a')?.addEventListener('click', (event) => {
        event.preventDefault();
        el.loadSampleBtn?.click();
      });

      showEmpty();
      setInputMode('upload');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-90 brightness-125" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>

</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex text-black bg-white w-6 h-6 rounded-full items-center justify-center">
<iconify-icon icon="solar:smartphone-2-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white tracking-tight">
            EXPLAIN MY WORKFLOW
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-white/60">
<a className="hover:text-white transition-colors" href="#input">Input</a>
<a className="hover:text-white transition-colors" href="#guide">Guide</a>
<a className="hover:text-white transition-colors" href="#how-it-works">
            How it Works
          </a>
</div>
<div className="flex items-center gap-4">
<button className="text-white/60 hover:text-white transition-colors">
<iconify-icon className="" height="20" icon="solar:alt-arrow-down-outline" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</button>
<a className="hover:bg-white/90 transition-colors text-xs font-medium text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="#">
            Try with Sample JSON
          </a>
</div>
</div>
</nav>

<section className="overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="z-10 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] tracking-wide text-blue-400 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            N8N WORKFLOW ANALYZER
          </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6 gradient-text">
            Explain your
            <br/>
            workflow clearly.
          </h1>
<p className="text-white/60 text-lg md:text-xl font-light mb-8 max-w-md leading-relaxed">
            Upload or paste an n8n JSON workflow and instantly turn it into a
            step-by-step setup guide with nodes, order, purpose, and
            configuration instructions.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors" id="scrollToInputBtn">
              Analyze Workflow
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="flex gap-2 hover:bg-white/5 transition-colors text-sm font-medium text-white/80 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
              Load sample
            </button>
</div>
<div className="mt-12 flex items-center gap-6">
<div className="flex -space-x-3">
</div>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center perspective-1000">
<div className="relative w-full aspect-square max-w-md glass-panel rounded-3xl overflow-hidden shadow-2xl p-6 flex flex-col" id="input">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-blue-400" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs font-medium text-white tracking-wide">
                WORKFLOW INPUT
              </span>
</div>
<div className="text-[10px] text-white/50 mb-6">
              Upload a file or paste raw n8n JSON
            </div>
<div className="flex items-center gap-3 bg-white/5 p-1 rounded-lg border border-white/10 mb-4 self-start">
<button className="px-4 py-1.5 rounded-md bg-white/10 text-xs font-medium text-white shadow-sm" id="uploadTabBtn">
                Upload JSON
              </button>
<button className="px-4 py-1.5 rounded-md text-xs font-medium text-white/50 hover:text-white transition-colors" id="pasteTabBtn">
                Paste JSON
              </button>
</div>
<div className="space-y-4" id="uploadPanel">
<label className="block border border-dashed border-white/15 rounded-2xl p-8 text-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer" htmlFor="jsonFileInput">
<iconify-icon className="text-white/70 mb-3" icon="solar:upload-linear" width="28"></iconify-icon>
<div className="text-sm text-white mb-1">
                  Choose an n8n JSON file
                </div>
<div className="text-[10px] text-white/40">
                  Click to browse or drag and drop
                </div>
</label>
<input accept=".json,application/json" className="hidden" id="jsonFileInput" type="file"/>
<div className="text-[10px] text-white/40" id="selectedFileName"></div>
</div>
<div className="space-y-4 hidden" id="pastePanel">
<textarea className="w-full h-48 rounded-2xl bg-white/[0.02] border border-white/10 text-white text-xs p-4 outline-none placeholder:text-white/30" id="jsonTextInput" placeholder="Paste your n8n workflow JSON here..."></textarea>
</div>
<div className="mt-auto pt-4">
<button className="w-full flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors" id="analyzeBtn">
                Generate Setup Guide
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
<div className="bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-white" id="statusTitle">Sample loaded</div>
<div className="text-[10px] text-white/50" id="statusMessage">A demo n8n workflow is ready to analyze</div>
</div>
</div>
<span className="text-xs text-blue-400 font-medium" id="statusBadge">DEMO</span>
</div>
</div>
</div>
<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-3xl font-medium tracking-tight text-white mb-1" id="statSteps">
              0
            </div>
<div className="text-xs text-white/40">Generated Steps</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-white mb-1" id="statNodes">
              0
            </div>
<div className="text-xs text-white/40">Detected Nodes</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-white mb-1" id="statConnections">
              0
            </div>
<div className="text-xs text-white/40">Connections Found</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-white mb-1" id="statStatus">
              —
            </div>
<div className="text-xs text-white/40">Validation Status</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">
            How it works
          </h2>
<p className="text-white/60 text-sm max-w-xl">
            Keep the same interface, but now powered with logic that validates
            n8n JSON, extracts nodes and connections, detects workflow order,
            and converts everything into a readable guide.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:upload-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Add Workflow JSON
            </h3>
<p className="text-sm text-white/50 leading-relaxed">
              Upload a .json file or paste raw workflow content manually. The
              app accepts both input methods without changing the UI structure.
            </p>
</div>
<div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:code-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Parse &amp; Validate
            </h3>
<p className="text-sm text-white/50 leading-relaxed">
              The app validates JSON, extracts nodes, connections, credentials,
              and workflow order, then handles empty or invalid workflows
              gracefully.
            </p>
</div>
<div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Generate Guide</h3>
<p className="text-sm text-white/50 leading-relaxed">
              Each node becomes a setup step with purpose and configuration
              instructions, then appears in a guide viewer with navigation and
              copy actions.
            </p>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pb-24" id="guide">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-2xl font-medium tracking-tight text-white">
            Workflow Setup Guide
          </h2>
<div className="flex items-center gap-3 bg-white/5 p-1 rounded-lg border border-white/10">
<button className="px-4 py-1.5 rounded-md bg-white/10 text-xs font-medium text-white shadow-sm" id="copyCurrentStepBtn">
              Copy Step
            </button>
<button className="px-4 py-1.5 rounded-md text-xs font-medium text-white/50 hover:text-white transition-colors" id="copyConfigBtn">
              Copy Config
            </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
<div className="lg:col-span-1">
<div className="rounded-xl bg-white/[0.02] border border-white/5 p-4">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white">Steps</h3>
<span className="text-[10px] text-white/40" id="stepCountLabel">
                  0 steps
                </span>
</div>
<div className="space-y-2" id="stepsNav">
<div className="text-xs text-white/40">
                  No workflow analyzed yet.
                </div>
</div>
</div>
</div>
<div className="lg:col-span-3">
<div className="rounded-xl bg-white/[0.02] border border-white/5 p-6 min-h-[520px]">
<div className="hidden h-full items-center justify-center text-center py-24" id="loadingState" style={{display: 'none'}}>
<div>
<div className="text-white text-lg font-medium tracking-tight mb-2">
                    Analyzing workflow...
                  </div>
<div className="text-sm text-white/50">
                    Please wait while we parse nodes and generate your guide.
                  </div>
</div>
</div>
<div className="hidden py-16" id="errorState">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 text-[10px] tracking-wide text-red-400 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  ERROR
                </div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2" id="errorTitle">
                  Unable to analyze workflow
                </h3>
<p className="text-sm text-white/50 max-w-xl" id="errorMessage">
                  Invalid n8n JSON file
                </p>
</div>
<div className="py-16" id="guideEmptyState">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] tracking-wide text-blue-400 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  GUIDE VIEWER
                </div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">
                  Your setup guide will appear here
                </h3>
<p className="text-sm text-white/50 max-w-xl">
                  Upload or paste an n8n workflow JSON to generate step-by-step
                  instructions, workflow navigation, node purpose, and
                  configuration details.
                </p>
</div>
<div className="hidden" id="guideViewer">
<div className="flex items-start justify-between gap-4 mb-6">
<div>
<div className="text-[10px] text-blue-400 tracking-wide mb-2" id="detailStepNumber">
                      STEP 1
                    </div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2" id="detailNodeName">
                      Node Name
                    </h3>
<p className="text-sm text-white/50" id="detailNodeType">
                      Node Type
                    </p>
</div>
<button className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-white/90 transition-colors" id="copyAllStepBtn">
                    Copy step instructions
                  </button>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="glass-panel p-6 rounded-2xl">
<h4 className="text-sm font-medium text-white mb-3">Purpose</h4>
<p className="text-sm text-white/60 leading-relaxed" id="detailPurpose"></p>
</div>
<div className="glass-panel p-6 rounded-2xl">
<div className="flex items-center justify-between mb-3">
<h4 className="text-sm font-medium text-white">
                        Configuration
                      </h4>
<button className="text-[10px] text-white/50 hover:text-white transition-colors" id="copyConfigInlineBtn">
                        Copy configuration
                      </button>
</div>
<div className="text-sm text-white/60 leading-relaxed whitespace-pre-wrap" id="detailConfig"></div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6 mt-6">
<div className="glass-panel p-6 rounded-2xl">
<h4 className="text-sm font-medium text-white mb-3">
                      Credentials
                    </h4>
<div className="text-sm text-white/60 leading-relaxed whitespace-pre-wrap" id="detailCredentials"></div>
</div>
<div className="glass-panel p-6 rounded-2xl">
<h4 className="text-sm font-medium text-white mb-3">
                      Connections
                    </h4>
<div className="text-sm text-white/60 leading-relaxed whitespace-pre-wrap" id="detailConnections"></div>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl mt-6">
<h4 className="text-sm font-medium text-white mb-3">
                    Raw Parameters Summary
                  </h4>
<div className="text-sm text-white/60 leading-relaxed whitespace-pre-wrap" id="detailParameters"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 pt-16 pb-8 bg-black" id="support">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<div className="flex mb-4 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-white" icon="solar:smartphone-2-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-white">
                EXPLAIN MY WORKFLOW
              </span>
</div>
<p className="text-xs text-white/40 max-w-xs leading-relaxed">
              Convert n8n workflow JSON into a practical, readable setup guide
              without changing your existing interface.
            </p>
</div>
<div className="">
<ul className="space-y-2 text-xs text-white/50">
<li className=""></li>
<li className="">
</li>
</ul>
</div>
<div className="">
<ul className="space-y-2 text-xs text-white/50">
<li className=""></li>
<li className=""></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold text-white mb-4"></h4>
<ul className="space-y-2 text-xs text-white/50">
<li className="">
<a className="hover:text-white" href="#guide"></a>
</li>
<li className="">
</li>
</ul>
</div>
</div>
<div className="flex items-center justify-between pt-8 border-t border-white/10">
<p className="text-[10px] text-white/30">
            © 2024 Explain My Workflow. All rights reserved.
          </p>
<div className="flex gap-4 text-white/40">
<iconify-icon className="hover:text-white cursor-pointer" icon="solar:brand-twitter-linear"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer" icon="solar:brand-instagram-linear"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer" icon="solar:brand-linkedin-linear"></iconify-icon>
</div>
</div>
</div>
</footer>



    </>
  );
}
