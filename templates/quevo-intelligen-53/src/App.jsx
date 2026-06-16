import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      function openAgentGreeting() {
          const greetingPanel = document.getElementById('greetingPanel');
          const initialGreeting = document.getElementById('initialGreeting');
          const conversationMessages = document.getElementById('conversationMessages');

          if (initialGreeting) initialGreeting.classList.remove('hidden');
          if (conversationMessages) {
              conversationMessages.classList.add('hidden');
              conversationMessages.innerHTML = '';
          }

          greetingPanel.classList.add('active');
          setTimeout(() => lucide.createIcons(), 100);
      }

      function closeGreeting() {
          document.getElementById('greetingPanel').classList.remove('active');
      }

      function selectAction(actionText, actionType) {
          const initialGreeting = document.getElementById('initialGreeting');
          const conversationMessages = document.getElementById('conversationMessages');
          const agentStatus = document.getElementById('agentStatus');

          initialGreeting.classList.add('hidden');
          conversationMessages.classList.remove('hidden');

          let userMessage = actionText;
          if (actionType === 'validate') userMessage = 'Can you help me validate this central idea?';
          else if (actionType === 'improve') userMessage = 'Can you suggest improvements for my central idea?';
          else if (actionType === 'connect') userMessage = 'How can I connect this central idea to my students\' interests?';
          else if (actionType === 'explain') userMessage = 'Can you explain the IB PYP standards for central ideas?';

          addUserMessage(userMessage);
          agentStatus.textContent = 'Working on it...';

          setTimeout(() => {
              addTypingIndicator();
              setTimeout(() => {
                  removeTypingIndicator();
                  addAssistantMessage('Sure, I can help you with that.');
                  setTimeout(() => {
                      if (actionType === 'validate') startValidationWorkflow();
                      else if (actionType === 'improve') startImprovementWorkflow();
                      else if (actionType === 'connect') startConnectionWorkflow();
                      else if (actionType === 'explain') startExplanationWorkflow();
                  }, 800);
              }, 1500);
          }, 500);

          updateActivityFeed(`Started: ${actionText}`, 'active');
      }

      function addAssistantMessage(text) {
          const conversationMessages = document.getElementById('conversationMessages');
          const messageDiv = document.createElement('div');
          messageDiv.className = 'fade-in';
          messageDiv.innerHTML = `
              <div class="bg-white rounded-lg px-4 py-3 border border-gray-200 shadow-sm inline-block max-w-[85%]">
                  <p class="text-sm text-gray-800 leading-relaxed">${text}</p>
              </div>
          `;
          conversationMessages.appendChild(messageDiv);
          scrollToBottom();
      }

      function addUserMessage(text) {
          const conversationMessages = document.getElementById('conversationMessages');
          const messageDiv = document.createElement('div');
          messageDiv.className = 'flex justify-end fade-in';
          messageDiv.innerHTML = `
              <div class="max-w-[85%] bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg px-4 py-3 shadow-sm">
                  <p class="text-sm leading-relaxed">${text}</p>
              </div>
          `;
          conversationMessages.appendChild(messageDiv);
          scrollToBottom();
      }

      function addTypingIndicator() {
          const conversationMessages = document.getElementById('conversationMessages');
          const typingDiv = document.createElement('div');
          typingDiv.id = 'typingIndicator';
          typingDiv.className = 'fade-in';
          typingDiv.innerHTML = `
              <div class="bg-white rounded-lg p-3 border border-gray-200 shadow-sm inline-block">
                  <div class="typing-indicator flex gap-1">
                      <span class="w-2 h-2 bg-gray-400 rounded-full"></span>
                      <span class="w-2 h-2 bg-gray-400 rounded-full"></span>
                      <span class="w-2 h-2 bg-gray-400 rounded-full"></span>
                  </div>
              </div>
          `;
          conversationMessages.appendChild(typingDiv);
          scrollToBottom();
      }

      function removeTypingIndicator() {
          const typingIndicator = document.getElementById('typingIndicator');
          if (typingIndicator) typingIndicator.remove();
      }

      function scrollToBottom() {
          const greetingMessages = document.getElementById('greetingMessages');
          greetingMessages.scrollTop = greetingMessages.scrollHeight;
      }

      function startValidationWorkflow() {
          const agentStatus = document.getElementById('agentStatus');

          addStepMessageToConversation('Attaching context', 'active');
          agentStatus.textContent = 'Attaching context...';

          setTimeout(() => {
              updateLastStepMessage('Context attached', 'completed');
              addContextCardsToConversation();

              setTimeout(() => {
                  addStepMessageToConversation('Analyzing central idea', 'active');
                  agentStatus.textContent = 'Analyzing...';

                  setTimeout(() => {
                      updateLastStepMessage('Analysis complete', 'completed');

                      setTimeout(() => {
                          addStepMessageToConversation('Generating recommendations', 'active');
                          agentStatus.textContent = 'Generating...';

                          setTimeout(() => {
                              updateLastStepMessage('Recommendations ready', 'completed');
                              agentStatus.textContent = 'Ready to help';

                              setTimeout(() => {
                                  addValidationResultsToConversation();
                                  setTimeout(() => {
                                      addTypingIndicator();
                                      setTimeout(() => {
                                          removeTypingIndicator();
                                          addAssistantMessage('Is there anything else I can help you with today?');
                                      }, 1000);
                                  }, 1000);
                                  updateActivityFeed('Validation complete', 'completed');
                              }, 800);
                          }, 1500);
                      }, 500);
                  }, 2000);
              }, 500);
          }, 1500);
      }

      function addStepMessageToConversation(text, status) {
          const conversationMessages = document.getElementById('conversationMessages');
          const stepDiv = document.createElement('div');
          stepDiv.className = 'fade-in step-msg';
          stepDiv.innerHTML = `
              <div class="flex items-center gap-2.5 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div class="w-6 h-6 rounded-lg ${status === 'active' ? 'bg-cyan-100' : 'bg-emerald-100'} flex items-center justify-center flex-shrink-0">
                      ${status === 'active'
                          ? '<div class="w-2 h-2 bg-cyan-600 rounded-full status-pulse"></div>'
                          : '<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i>'
                      }
                  </div>
                  <p class="text-sm font-medium text-gray-900">${text}</p>
              </div>
          `;
          conversationMessages.appendChild(stepDiv);
          lucide.createIcons();
          scrollToBottom();
      }

      function updateLastStepMessage(text, status) {
          const steps = document.querySelectorAll('.step-msg');
          const lastStep = steps[steps.length - 1];
          if (lastStep) {
              lastStep.querySelector('.w-6').innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i>';
              lastStep.querySelector('.w-6').className = 'w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0';
              lastStep.querySelector('.text-sm').textContent = text;
              lucide.createIcons();
          }
      }

      function addContextCardsToConversation() {
          const conversationMessages = document.getElementById('conversationMessages');
          const contextDiv = document.createElement('div');
          contextDiv.className = 'fade-in';
          contextDiv.innerHTML = `
              <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Context Attached</p>
                  <div class="space-y-2">
                      <div class="flex items-center gap-2 p-2.5 bg-cyan-50 rounded-md border border-cyan-200">
                          <i data-lucide="book-open" class="w-3.5 h-3.5 text-cyan-700"></i>
                          <span class="text-xs text-gray-800 font-medium">Theme: Sharing the Planet</span>
                      </div>
                      <div class="flex items-center gap-2 p-2.5 bg-cyan-50 rounded-md border border-cyan-200">
                          <i data-lucide="lightbulb" class="w-3.5 h-3.5 text-cyan-700"></i>
                          <span class="text-xs text-gray-800 font-medium">Concepts: Responsibility, Causation</span>
                      </div>
                      <div class="flex items-center gap-2 p-2.5 bg-cyan-50 rounded-md border border-cyan-200">
                          <i data-lucide="users" class="w-3.5 h-3.5 text-cyan-700"></i>
                          <span class="text-xs text-gray-800 font-medium">Students: Amira, James</span>
                      </div>
                  </div>
              </div>
          `;
          conversationMessages.appendChild(contextDiv);
          lucide.createIcons();
          scrollToBottom();
      }

      function addValidationResultsToConversation() {
          const conversationMessages = document.getElementById('conversationMessages');
          const resultsDiv = document.createElement('div');
          resultsDiv.className = 'fade-in space-y-3';
          resultsDiv.innerHTML = `
              <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <p class="text-sm text-gray-800 leading-relaxed">
                      Your central idea is <strong class="text-emerald-700">on the right track</strong> but could be strengthened. Here's my analysis:
                  </p>
              </div>

              <div class="bg-white rounded-lg p-4 border border-emerald-200 shadow-sm">
                  <div class="flex items-center gap-2 mb-3">
                      <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>
                      <p class="text-sm font-semibold text-gray-900">Strengths</p>
                  </div>
                  <div class="space-y-2">
                      <div class="flex items-start gap-2">
                          <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                          <span class="text-xs text-gray-700 leading-relaxed">Mentions "responsibility" concept clearly</span>
                      </div>
                      <div class="flex items-start gap-2">
                          <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                          <span class="text-xs text-gray-700 leading-relaxed">Age-appropriate for Grade 5</span>
                      </div>
                      <div class="flex items-start gap-2">
                          <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                          <span class="text-xs text-gray-700 leading-relaxed">Action-oriented language</span>
                      </div>
                  </div>
              </div>

              <div class="bg-white rounded-lg p-4 border border-amber-200 shadow-sm">
                  <div class="flex items-center gap-2 mb-3">
                      <i data-lucide="alert-circle" class="w-4 h-4 text-amber-600"></i>
                      <p class="text-sm font-semibold text-gray-900">Areas for Improvement</p>
                  </div>
                  <div class="space-y-2">
                      <div class="p-3 bg-amber-50 rounded-md border border-amber-200">
                          <p class="text-xs font-medium text-gray-900 mb-1">Make causation explicit</p>
                          <p class="text-xs text-gray-700 leading-relaxed">Show HOW understanding leads to actions</p>
                      </div>
                      <div class="p-3 bg-amber-50 rounded-md border border-amber-200">
                          <p class="text-xs font-medium text-gray-900 mb-1">Strengthen student agency</p>
                          <p class="text-xs text-gray-700 leading-relaxed">Use "we" or "learners" for active participation</p>
                      </div>
                  </div>
              </div>

              <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200 shadow-sm">
                  <div class="flex items-center gap-2 mb-3">
                      <i data-lucide="wand-2" class="w-4 h-4 text-cyan-700"></i>
                      <p class="text-sm font-semibold text-gray-900">Recommended Revision</p>
                  </div>
                  <div class="bg-white/80 rounded-md p-3 mb-3 border border-cyan-200">
                      <p class="text-sm leading-relaxed text-gray-800">
                          "Understanding <strong class="text-cyan-700">how our actions affect</strong> ecosystems helps <strong class="text-cyan-700">us recognize our responsibility</strong> to make sustainable choices."
                      </p>
                  </div>
                  <button onclick="applySuggestion()" class="w-full py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all font-medium text-sm shadow-sm hover:shadow flex items-center justify-center gap-2">
                      <i data-lucide="wand-2" class="w-4 h-4"></i>
                      <span>Apply This Suggestion</span>
                  </button>
              </div>
          `;
          conversationMessages.appendChild(resultsDiv);
          lucide.createIcons();
          scrollToBottom();
      }

      function startImprovementWorkflow() {
          const agentStatus = document.getElementById('agentStatus');
          agentStatus.textContent = 'Ready to help';

          addSimpleResponse('Here are three specific ways to improve your central idea:\n\n1. Make causation clearer with explicit cause-effect language\n2. Add more student agency using "we" or "learners"\n3. Include concrete examples relevant to Grade 5');

          setTimeout(() => {
              addTypingIndicator();
              setTimeout(() => {
                  removeTypingIndicator();
                  addAssistantMessage('Would you like me to elaborate on any of these suggestions?');
              }, 1000);
          }, 1000);
      }

      function startConnectionWorkflow() {
          const agentStatus = document.getElementById('agentStatus');
          agentStatus.textContent = 'Ready to help';

          addSimpleResponse('Based on Amira and James\'s profiles:\n\n• Amira is passionate about environmental topics - your ecosystem focus aligns perfectly\n• James loves hands-on learning - consider adding field studies or experiments\n\nYour central idea naturally connects to their interests!');

          setTimeout(() => {
              addTypingIndicator();
              setTimeout(() => {
                  removeTypingIndicator();
                  addAssistantMessage('Would you like specific activity suggestions for each student?');
              }, 1000);
          }, 1000);
      }

      function startExplanationWorkflow() {
          const agentStatus = document.getElementById('agentStatus');
          agentStatus.textContent = 'Ready to help';

          addSimpleResponse('IB PYP central ideas should:\n\n• Be clear statements capturing key understandings\n• Include transdisciplinary themes\n• Incorporate key concepts\n• Show cause-effect relationships\n• Be age-appropriate and action-oriented\n\nThey guide the entire inquiry unit.');

          setTimeout(() => {
              addTypingIndicator();
              setTimeout(() => {
                  removeTypingIndicator();
                  addAssistantMessage('Would you like to see examples of strong central ideas?');
              }, 1000);
          }, 1000);
      }

      function addSimpleResponse(text) {
          const conversationMessages = document.getElementById('conversationMessages');
          const responseDiv = document.createElement('div');
          responseDiv.className = 'fade-in';
          responseDiv.innerHTML = `
              <div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <p class="text-sm text-gray-800 leading-relaxed whitespace-pre-line">${text}</p>
              </div>
          `;
          conversationMessages.appendChild(responseDiv);
          scrollToBottom();
      }

      function sendFromGreeting() {
          const input = document.getElementById('greetingInput');
          const message = input.value.trim();
          if (message) {
              selectAction(message, 'custom');
              input.value = '';
          }
      }

      function applySuggestion() {
          const textarea = document.getElementById('centralIdeaInput');
          const newText = 'Understanding how our actions affect ecosystems helps us recognize our responsibility to make sustainable choices that protect shared planetary resources.';

          textarea.value = newText;
          textarea.classList.add('border-cyan-500', 'ring-2', 'ring-cyan-500');

          setTimeout(() => {
              textarea.classList.remove('border-cyan-500', 'ring-2', 'ring-cyan-500');
          }, 2000);

          const conversationMessages = document.getElementById('conversationMessages');
          const confirmDiv = document.createElement('div');
          confirmDiv.className = 'fade-in';
          confirmDiv.innerHTML = `
              <div class="bg-emerald-50 rounded-lg p-4 border border-emerald-200 shadow-sm">
                  <div class="flex items-center gap-2 mb-2">
                      <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>
                      <p class="text-sm font-semibold text-emerald-900">Applied Successfully!</p>
                  </div>
                  <p class="text-sm text-gray-700 leading-relaxed">Your central idea has been updated. Would you like me to review anything else?</p>
              </div>
          `;
          conversationMessages.appendChild(confirmDiv);
          lucide.createIcons();
          scrollToBottom();

          updateActivityFeed('Applied agent suggestion', 'completed');
      }

      function updateActivityFeed(text, status) {
          const activityFeed = document.getElementById('activityFeed');
          const activityItem = document.createElement('div');
          activityItem.className = 'flex gap-3 fade-in';

          const iconClass = status === 'completed' ? 'bg-emerald-100' : 'bg-cyan-100';
          const iconContent = status === 'completed'
              ? '<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i>'
              : '<div class="w-2 h-2 bg-cyan-600 rounded-full status-pulse"></div>';

          activityItem.innerHTML = `
              <div class="flex flex-col items-center">
                  <div class="w-6 h-6 rounded-full ${iconClass} flex items-center justify-center flex-shrink-0">
                      ${iconContent}
                  </div>
                  <div class="w-0.5 flex-1 bg-gray-200 mt-2"></div>
              </div>
              <div class="flex-1 pb-3">
                  <div class="text-sm font-medium text-gray-900">${text}</div>
                  <div class="text-xs text-gray-500">Just now</div>
              </div>
          `;

          activityFeed.insertBefore(activityItem, activityFeed.firstChild);
          lucide.createIcons();
      }

      document.addEventListener('DOMContentLoaded', () => {
          lucide.createIcons();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
<div className="mx-auto max-w-[1800px] px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
<span className="text-white font-bold text-sm tracking-tight">Q</span>
</div>
<span className="text-gray-900 text-lg font-semibold tracking-tight">
              Quevo
            </span>
</div>
<div className="h-6 w-px bg-gray-200"></div>
<nav className="flex items-center gap-2 text-sm text-gray-500">
<span className="font-medium">Unit Planner</span>
<svg className="h-4 w-4 text-gray-400" fill="currentColor" viewbox="0 0 20 20">
<path d="M7.05 4.55a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 1 1-1.4-1.4L9.88 10 7.05 7.15a1 1 0 0 1 0-1.4Z"></path>
</svg>
<span className="text-gray-900 font-medium">Sharing the Planet</span>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-xs text-gray-500 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
<span>Saved 2 mins ago</span>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:from-cyan-700 hover:to-blue-700 transition-all shadow-sm hover:shadow" onclick="openAgentGreeting()">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span>Ask Quevo</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="share-2"></i>
<span>Share</span>
</button>
<div className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer ml-2 border border-gray-200">
<div className="text-right">
<p className="text-sm font-medium text-gray-900">Sarah Al-Mansouri</p>
<p className="text-xs text-gray-500">Doha Int'l Academy • Grade 5</p>
</div>
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
              SA
            </div>
</div>
</div>
</div>
<div className="h-1 bg-gray-100">
<div className="h-full bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-500" style={{width: '25%'}}></div>
</div>
</header>

<div className="flex h-[calc(100vh-65px)] overflow-hidden">

<aside className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
<div className="p-6 space-y-6">

<div className="space-y-3">
<div className="flex items-center justify-between">
<p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Unit Progress
              </p>
<span className="text-xs text-gray-500">Step 2 of 8</span>
</div>
<div>
<h2 className="text-xl font-semibold text-gray-900 tracking-tight mb-1">
                Central Idea Development
              </h2>
<p className="text-sm text-gray-600">
                Crafting a strong foundation for inquiry
              </p>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-gradient-to-r from-cyan-600 to-blue-600 h-2 rounded-full transition-all" style={{width: '25%'}}></div>
</div>
</div>
<div className="h-px bg-gray-200"></div>

<div>
<p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
              Current Context
            </p>
<div className="space-y-2">
<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
<div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-cyan-700" data-lucide="book-open"></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs text-gray-500 font-medium">Theme</div>
<div className="text-sm text-gray-900 font-medium truncate">
                    Sharing the Planet
                  </div>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
<div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-purple-700" data-lucide="lightbulb"></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs text-gray-500 font-medium">
                    Key Concepts
                  </div>
<div className="text-sm text-gray-900 font-medium truncate">
                    Responsibility • Causation
                  </div>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
<div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-blue-700" data-lucide="users"></i>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs text-gray-500 font-medium">
                    Grade Level
                  </div>
<div className="text-sm text-gray-900 font-medium truncate">
                    Grade 5 • 24 Students
                  </div>
</div>
</div>
</div>
</div>
<div className="h-px bg-gray-200"></div>

<div>
<p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
              Task Progress
            </p>
<div className="space-y-2">
<div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">
                      Theme &amp; Concepts
                    </p>
<p className="text-xs text-emerald-700">Completed</p>
</div>
</div>
</div>
<div className="p-3 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-400">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0 status-pulse">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-gray-900">
                      Central Idea
                    </p>
<p className="text-xs text-cyan-700 font-medium">In progress</p>
</div>
</div>
</div>
<div className="p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-50">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-600">
                      Lines of Inquiry
                    </p>
<p className="text-xs text-gray-400">Not started</p>
</div>
</div>
</div>
<div className="p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-50">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-600">
                      Assessment Planning
                    </p>
<p className="text-xs text-gray-400">Not started</p>
</div>
</div>
</div>
</div>
</div>
<div className="h-px bg-gray-200"></div>

<div>
<p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
              Student Connections
            </p>
<div className="space-y-2">
<div className="p-3 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border border-pink-200">
<div className="flex items-center gap-2 mb-2">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-semibold text-xs">
                    A
                  </div>
<div>
<span className="font-semibold text-sm text-gray-900">
                      Amira
                    </span>
<span className="ml-1.5 text-xs text-pink-700 font-medium">
                      Visual learner
                    </span>
</div>
</div>
<p className="text-xs text-gray-700 leading-relaxed">
                  Passionate about environmental conservation
                </p>
</div>
<div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
<div className="flex items-center gap-2 mb-2">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold text-xs">
                    J
                  </div>
<div>
<span className="font-semibold text-sm text-gray-900">
                      James
                    </span>
<span className="ml-1.5 text-xs text-blue-700 font-medium">
                      Kinesthetic
                    </span>
</div>
</div>
<p className="text-xs text-gray-700 leading-relaxed">
                  Thrives with hands-on experiments
                </p>
</div>
</div>
</div>
<div className="h-px bg-gray-200"></div>

<div>
<div className="flex items-center justify-between mb-3">
<p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Your Journey
              </p>
<button className="text-xs text-cyan-600 hover:text-cyan-700 font-medium">
                View All
              </button>
</div>
<div className="space-y-3">
<div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="layers"></i>
</div>
<div>
<div className="text-sm font-semibold text-gray-900">
                        3 Units
                      </div>
<div className="text-xs text-gray-600">This year</div>
</div>
</div>
<i className="w-4 h-4 text-cyan-600" data-lucide="trending-up"></i>
</div>
</div>
<div className="space-y-2">
<p className="text-xs text-gray-500 font-medium">Recent Units</p>
<button className="w-full text-left p-3 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 hover:border-cyan-300 transition-all group">
<div className="flex items-start justify-between mb-2">
<div className="flex-1">
<div className="text-sm font-medium text-gray-900 mb-0.5">
                        Sharing the Planet
                      </div>
<div className="text-xs text-gray-500">
                        In progress • 25% complete
                      </div>
</div>
<i className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors flex-shrink-0" data-lucide="chevron-right"></i>
</div>
<div className="w-full bg-gray-200 rounded-full h-1.5">
<div className="bg-gradient-to-r from-cyan-600 to-blue-600 h-1.5 rounded-full" style={{width: '25%'}}></div>
</div>
</button>
<button className="w-full text-left p-3 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 hover:border-cyan-300 transition-all group">
<div className="flex items-start justify-between mb-2">
<div className="flex-1">
<div className="text-sm font-medium text-gray-900 mb-0.5">
                        How We Organize Ourselves
                      </div>
<div className="text-xs text-emerald-700 font-medium flex items-center gap-1">
<i className="w-3 h-3" data-lucide="check-circle-2"></i>
                        Completed • Sept 2024
                      </div>
</div>
<i className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors flex-shrink-0" data-lucide="chevron-right"></i>
</div>
</button>
<button className="w-full text-left p-3 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 hover:border-cyan-300 transition-all group">
<div className="flex items-start justify-between mb-2">
<div className="flex-1">
<div className="text-sm font-medium text-gray-900 mb-0.5">
                        Where We Are in Place &amp; Time
                      </div>
<div className="text-xs text-emerald-700 font-medium flex items-center gap-1">
<i className="w-3 h-3" data-lucide="check-circle-2"></i>
                        Completed • Aug 2024
                      </div>
</div>
<i className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 transition-colors flex-shrink-0" data-lucide="chevron-right"></i>
</div>
</button>
</div>
<div className="pt-2">
<button className="w-full py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-cyan-300 transition-all font-medium text-sm flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i>
<span>View Full Report</span>
</button>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-gray-50">
<div className="max-w-4xl mx-auto p-8">

<div className="mb-8">
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-2">
              Central Idea Development
            </h1>
<p className="text-base text-gray-600 leading-relaxed max-w-3xl">
              Craft a central idea that incorporates both concepts, demonstrates
              clear causation, and promotes action-oriented learning for Grade 5
              students.
            </p>
<div className="flex flex-wrap items-center gap-2 mt-5">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-50 text-cyan-800 text-xs font-medium rounded-full border border-cyan-200">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i>
                Both concepts
              </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-800 text-xs font-medium rounded-full border border-purple-200">
<i className="w-3.5 h-3.5" data-lucide="zap"></i>
                Action-oriented
              </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-800 text-xs font-medium rounded-full border border-blue-200">
<i className="w-3.5 h-3.5" data-lucide="users"></i>
                Age-appropriate
              </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-full border border-emerald-200">
<i className="w-3.5 h-3.5" data-lucide="link"></i>
                Clear causation
              </span>
</div>
</div>

<div className="mb-8">
<div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
<div className="p-5 bg-gray-50 border-b border-gray-200">
<div className="flex items-center justify-between">
<label className="text-sm font-semibold text-gray-900">
                    Your Central Idea
                  </label>
<div className="flex items-center gap-2 text-xs text-gray-500">
<i className="w-3.5 h-3.5" data-lucide="pencil"></i>
<span>Editing</span>
</div>
</div>
</div>
<div className="p-5">
<textarea className="w-full px-0 py-0 border-0 focus:ring-0 resize-none text-base leading-relaxed text-gray-900 placeholder-gray-400" id="centralIdeaInput" placeholder="Write your central idea here..." rows="4">
Understanding our responsibility in making informed decisions about environmental stewardship.</textarea>
</div>
</div>
<div className="mt-4 flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
<i className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" data-lucide="lightbulb"></i>
<div className="text-sm text-amber-900 leading-relaxed">
<span className="font-semibold">Pro Tip:</span>
                Strong central ideas show clear cause-and-effect relationships
                and emphasize student agency. Try starting with "Understanding
                how..." or "Exploring the ways..."
              </div>
</div>
</div>

<section>
<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-cyan-600" data-lucide="sparkles"></i>
<h2 className="text-xl font-semibold text-gray-900 tracking-tight">
                  AI-Generated Suggestions
                </h2>
</div>
<button className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
                Regenerate
              </button>
</div>
<div className="grid gap-4">
<div className="rounded-xl border border-gray-200 bg-white p-5 hover:border-cyan-300 hover:shadow-md transition-all cursor-pointer group">
<div className="flex items-start gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center flex-shrink-0 group-hover:from-pink-200 group-hover:to-purple-200 transition-colors">
<i className="w-5 h-5 text-pink-700" data-lucide="target"></i>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-semibold text-pink-700 uppercase tracking-wide">
                        Strong Causation
                      </span>
<span className="text-xs text-gray-400">•</span>
<span className="text-xs text-gray-500">Grade 5</span>
</div>
<p className="text-sm leading-relaxed text-gray-800">
                      Human actions have
                      <span className="font-semibold text-pink-700">
                        consequences
                      </span>
                      that affect the balance of ecosystems, and understanding
                      our responsibilities can promote sustainable choices.
                    </p>
</div>
</div>
<div className="flex flex-wrap gap-2 ml-13">
<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-cyan-50 text-cyan-800 text-xs font-medium rounded-full border border-cyan-200">
<i className="w-3 h-3" data-lucide="check"></i>
                    Both concepts
                  </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-full border border-emerald-200">
<i className="w-3 h-3" data-lucide="check"></i>
                    Concise
                  </span>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 hover:border-cyan-300 hover:shadow-md transition-all cursor-pointer group">
<div className="flex items-start gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center flex-shrink-0 group-hover:from-purple-200 group-hover:to-indigo-200 transition-colors">
<i className="w-5 h-5 text-purple-700" data-lucide="users"></i>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-semibold text-purple-700 uppercase tracking-wide">
                        Collaborative
                      </span>
<span className="text-xs text-gray-400">•</span>
<span className="text-xs text-gray-500">Grade 5</span>
</div>
<p className="text-sm leading-relaxed text-gray-800">
<span className="font-semibold text-purple-700">
                        Collaboration
                      </span>
                      within communities leads to equitable access to shared
                      resources and strengthens collective responsibility for
                      planetary stewardship.
                    </p>
</div>
</div>
<div className="flex flex-wrap gap-2 ml-13">
<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-cyan-50 text-cyan-800 text-xs font-medium rounded-full border border-cyan-200">
<i className="w-3 h-3" data-lucide="check"></i>
                    Both concepts
                  </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-purple-50 text-purple-800 text-xs font-medium rounded-full border border-purple-200">
<i className="w-3 h-3" data-lucide="check"></i>
                    Action-oriented
                  </span>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 hover:border-cyan-300 hover:shadow-md transition-all cursor-pointer group">
<div className="flex items-start gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center flex-shrink-0 group-hover:from-blue-200 group-hover:to-cyan-200 transition-colors">
<i className="w-5 h-5 text-blue-700" data-lucide="trending-up"></i>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                        Innovation Focus
                      </span>
<span className="text-xs text-gray-400">•</span>
<span className="text-xs text-gray-500">Grade 5</span>
</div>
<p className="text-sm leading-relaxed text-gray-800">
<span className="font-semibold text-blue-700">
                        Innovation and ethical decision-making
                      </span>
                      guide how societies manage limited resources, reflecting
                      our responsibility for present and future wellbeing.
                    </p>
</div>
</div>
<div className="flex flex-wrap gap-2 ml-13">
<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-cyan-50 text-cyan-800 text-xs font-medium rounded-full border border-cyan-200">
<i className="w-3 h-3" data-lucide="check"></i>
                    Both concepts
                  </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-full border border-blue-200">
<i className="w-3 h-3" data-lucide="check"></i>
                    Future-focused
                  </span>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 hover:border-cyan-300 hover:shadow-md transition-all cursor-pointer group">
<div className="flex items-start gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0 group-hover:from-amber-200 group-hover:to-orange-200 transition-colors">
<i className="w-5 h-5 text-amber-700" data-lucide="globe"></i>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                        Systems Thinking
                      </span>
<span className="text-xs text-gray-400">•</span>
<span className="text-xs text-gray-500">Grade 5</span>
</div>
<p className="text-sm leading-relaxed text-gray-800">
                      Understanding
                      <span className="font-semibold text-amber-700">
                        interdependence
                      </span>
                      in ecosystems helps learners recognize their
                      responsibility to take informed action protecting
                      biodiversity.
                    </p>
</div>
</div>
<div className="flex flex-wrap gap-2 ml-13">
<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-cyan-50 text-cyan-800 text-xs font-medium rounded-full border border-cyan-200">
<i className="w-3 h-3" data-lucide="check"></i>
                    Both concepts
                  </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-full border border-emerald-200">
<i className="w-3 h-3" data-lucide="check"></i>
                    Empowering
                  </span>
</div>
</div>
</div>
</section>

<div className="flex items-center gap-3 mt-10 pt-8 border-t border-gray-200">
<button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all font-medium text-sm shadow-sm hover:shadow flex items-center gap-2">
<span>Continue to Lines of Inquiry</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
              Save Draft
            </button>
<button className="px-6 py-3 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm ml-auto">
              Back to Overview
            </button>
</div>
</div>
</main>
</div>

<aside className="greeting-modal w-[460px] bg-white border-l border-gray-200 flex flex-col fixed right-0 top-[65px] h-[calc(100vh-65px)] shadow-2xl z-40" id="greetingPanel">
<div className="flex-1 flex flex-col overflow-hidden">

<div className="p-5 border-b border-gray-200 bg-gray-50">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="bot"></i>
</div>
<div>
<div className="text-base font-semibold text-gray-900">
                  Quevo AI Assistant
                </div>
<div className="flex items-center gap-1.5 text-xs text-cyan-700 font-medium">
<div className="w-1.5 h-1.5 bg-cyan-600 rounded-full status-pulse"></div>
<span id="agentStatus">Ready to help</span>
</div>
</div>
</div>
<button className="p-2 hover:bg-gray-200 rounded-lg transition-colors" onclick="closeGreeting()">
<i className="w-5 h-5 text-gray-600" data-lucide="x"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5 bg-gray-50" id="greetingMessages">

<div className="space-y-6" id="initialGreeting">
<div className="text-center py-6">
<div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center shadow-lg">
<i className="w-8 h-8 text-white" data-lucide="sparkles"></i>
</div>
<h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-2">
                Welcome back, Sarah! 👋
              </h2>
<p className="text-sm text-gray-500 mb-1">
                Grade 5 • Doha International Academy
              </p>
<p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed mt-4">
                How can I help you with your "Sharing the Planet" unit today?
              </p>
</div>

<div className="space-y-2">
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-1 mb-3">
                Quick Actions
              </p>
<button className="w-full text-left p-4 bg-white hover:bg-gray-50 rounded-lg transition-all border border-gray-200 hover:border-cyan-300 hover:shadow-sm group" onclick="selectAction('Validate Central Idea', 'validate')">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-100 transition-colors">
<i className="w-4 h-4 text-cyan-700" data-lucide="check-circle-2"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900 mb-0.5">
                      Validate Central Idea
                    </p>
<p className="text-xs text-gray-600">
                      Review against IB PYP standards
                    </p>
</div>
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="chevron-right"></i>
</div>
</button>
<button className="w-full text-left p-4 bg-white hover:bg-gray-50 rounded-lg transition-all border border-gray-200 hover:border-cyan-300 hover:shadow-sm group" onclick="selectAction('Suggest Improvements', 'improve')">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
<i className="w-4 h-4 text-purple-700" data-lucide="wand-2"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900 mb-0.5">
                      Suggest Improvements
                    </p>
<p className="text-xs text-gray-600">
                      Get AI-powered suggestions
                    </p>
</div>
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="chevron-right"></i>
</div>
</button>
<button className="w-full text-left p-4 bg-white hover:bg-gray-50 rounded-lg transition-all border border-gray-200 hover:border-cyan-300 hover:shadow-sm group" onclick="selectAction('Connect to Students', 'connect')">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
<i className="w-4 h-4 text-blue-700" data-lucide="users"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900 mb-0.5">
                      Connect to Students
                    </p>
<p className="text-xs text-gray-600">
                      Personalize for Amira and James
                    </p>
</div>
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="chevron-right"></i>
</div>
</button>
<button className="w-full text-left p-4 bg-white hover:bg-gray-50 rounded-lg transition-all border border-gray-200 hover:border-cyan-300 hover:shadow-sm group" onclick="selectAction('Explain IB PYP Standards', 'explain')">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
<i className="w-4 h-4 text-amber-700" data-lucide="book-open"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900 mb-0.5">
                      Explain IB PYP Standards
                    </p>
<p className="text-xs text-gray-600">
                      Learn about requirements
                    </p>
</div>
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="chevron-right"></i>
</div>
</button>
</div>

<div className="pt-2">
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-1 mb-3">
                Recent Topics
              </p>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-700 hover:border-cyan-400 hover:bg-cyan-50 transition-colors">
                  Sharing the Planet
                </button>
<button className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-700 hover:border-cyan-400 hover:bg-cyan-50 transition-colors">
                  Grade 5 concepts
                </button>
<button className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-700 hover:border-cyan-400 hover:bg-cyan-50 transition-colors">
                  Student interests
                </button>
</div>
</div>
</div>

<div className="space-y-4 hidden" id="conversationMessages"></div>
</div>

<div className="p-4 border-t border-gray-200 bg-white">
<div className="bg-gray-50 border border-gray-300 rounded-lg p-3 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-100 transition-all">
<input className="w-full bg-transparent outline-none text-sm text-gray-900 placeholder-gray-500" id="greetingInput" onkeypress="if(event.key === 'Enter') sendFromGreeting()" placeholder="Type your message or ask me anything..." type="text"/>
<div className="flex justify-between items-center mt-2.5 pt-2.5 border-t border-gray-200">
<div className="flex gap-1">
<button className="p-1.5 rounded hover:bg-gray-200 transition-colors" title="Attach file">
<i className="w-4 h-4 text-gray-500" data-lucide="paperclip"></i>
</button>
<button className="p-1.5 rounded hover:bg-gray-200 transition-colors" title="Add image">
<i className="w-4 h-4 text-gray-500" data-lucide="image"></i>
</button>
<button className="p-1.5 rounded hover:bg-gray-200 transition-colors" title="Voice input">
<i className="w-4 h-4 text-gray-500" data-lucide="mic"></i>
</button>
</div>
<button className="px-4 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all shadow-sm hover:shadow flex items-center gap-2 text-sm font-medium" onclick="sendFromGreeting()">
<span>Send</span>
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</aside>


    </>
  );
}
