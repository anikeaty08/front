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



      // ==========================================
      // KINESIS AI - FULL SAAS PLATFORM
      // ==========================================

      // ===== DATABASE SIMULATION (Replace with Supabase/Firebase) =====
      class Database {
          constructor() {
              this.users = JSON.parse(localStorage.getItem('kinesis_users') || '{}');
              this.projects = JSON.parse(localStorage.getItem('kinesis_projects') || '{}');
              this.currentUser = JSON.parse(localStorage.getItem('kinesis_current_user') || 'null');
          }

          save() {
              localStorage.setItem('kinesis_users', JSON.stringify(this.users));
              localStorage.setItem('kinesis_projects', JSON.stringify(this.projects));
              localStorage.setItem('kinesis_current_user', JSON.stringify(this.currentUser));
          }

          createUser(email, password, name) {
              const id = 'user_' + Date.now();
              const refreshDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
              this.users[email] = {
                  id,
                  email,
                  password,
                  name,
                  credits: 150,
                  maxCredits: 150,
                  plan: 'free',
                  refreshDate: refreshDate.toISOString(),
                  createdAt: new Date().toISOString()
              };
              this.projects[id] = [];
              this.save();
              return this.users[email];
          }

          login(email, password) {
              const user = this.users[email];
              if (user && user.password === password) {
                  this.currentUser = user;
                  this.save();
                  return user;
              }
              return null;
          }

          logout() {
              this.currentUser = null;
              this.save();
          }

          getCurrentUser() {
              return this.currentUser;
          }

          updateCredits(amount) {
              if (this.currentUser) {
                  this.currentUser.credits += amount;
                  this.users[this.currentUser.email].credits = this.currentUser.credits;
                  this.save();
              }
          }

          saveProject(project) {
              if (this.currentUser) {
                  if (!this.projects[this.currentUser.id]) {
                      this.projects[this.currentUser.id] = [];
                  }
                  project.id = 'proj_' + Date.now();
                  project.createdAt = new Date().toISOString();
                  this.projects[this.currentUser.id].unshift(project);
                  this.save();
                  return project;
              }
              return null;
          }

          getProjects() {
              if (this.currentUser) {
                  return this.projects[this.currentUser.id] || [];
              }
              return [];
          }

          deleteProject(projectId) {
              if (this.currentUser) {
                  this.projects[this.currentUser.id] = this.projects[this.currentUser.id].filter(p => p.id !== projectId);
                  this.save();
              }
          }
      }

      const db = new Database();

      // ===== STATE MANAGEMENT =====
      const state = {
          uploadedImage: null,
          uploadedImageData: null,
          motionPrompt: '',
          selectedRatio: '16:9',
          motionStrength: 5,
          selectedStyle: 'cinematic',
          isGenerating: false,
          currentVideo: null,
          billingYearly: false,
          editorSettings: {
              text: '',
              fontSize: 24,
              textColor: '#ffffff',
              textPosition: 'center',
              brightness: 100,
              contrast: 100,
              saturation: 100,
              blur: 0,
              animation: 'swing',
              animSpeed: 1,
              trimStart: 0,
              trimEnd: 4
          }
      };

      // ===== TOAST NOTIFICATIONS =====
      function showToast(message, type = 'info') {
          const container = document.getElementById('toast-container');
          const toast = document.createElement('div');
          toast.className = `toast ${type}`;

          const icon = type === 'success' ? 'lucide:check-circle' :
                       type === 'error' ? 'lucide:x-circle' : 'lucide:info';

          toast.innerHTML = `
              <span class="iconify" data-icon="${icon}" data-width="20"></span>
              <span class="text-sm font-medium">${message}</span>
          `;

          container.appendChild(toast);

          setTimeout(() => {
              toast.remove();
          }, 3000);
      }

      // ===== AUTHENTICATION =====
      const authModal = document.getElementById('auth-modal');
      const signinTab = document.getElementById('signin-tab');
      const signupTab = document.getElementById('signup-tab');
      const signinForm = document.getElementById('signin-form');
      const signupForm = document.getElementById('signup-form');
      const tabIndicator = document.getElementById('tab-indicator');

      document.getElementById('signin-btn').addEventListener('click', () => {
          showAuthModal('signin');
      });

      document.getElementById('signup-btn').addEventListener('click', () => {
          showAuthModal('signup');
      });

      document.getElementById('close-auth-modal').addEventListener('click', () => {
          authModal.classList.add('hidden');
      });

      function showAuthModal(tab) {
          authModal.classList.remove('hidden');
          if (tab === 'signin') {
              switchToSignin();
          } else {
              switchToSignup();
          }
      }

      signinTab.addEventListener('click', switchToSignin);
      signupTab.addEventListener('click', switchToSignup);

      function switchToSignin() {
          signinTab.classList.add('text-white');
          signinTab.classList.remove('text-neutral-400');
          signupTab.classList.remove('text-white');
          signupTab.classList.add('text-neutral-400');
          signinForm.classList.remove('hidden');
          signupForm.classList.add('hidden');
          tabIndicator.style.left = '0';
          tabIndicator.style.width = '60px';
      }

      function switchToSignup() {
          signupTab.classList.add('text-white');
          signupTab.classList.remove('text-neutral-400');
          signinTab.classList.remove('text-white');
          signinTab.classList.add('text-neutral-400');
          signupForm.classList.remove('hidden');
          signinForm.classList.add('hidden');
          tabIndicator.style.left = '76px';
          tabIndicator.style.width = '65px';
      }

      document.getElementById('signin-submit').addEventListener('click', () => {
          const email = document.getElementById('signin-email').value;
          const password = document.getElementById('signin-password').value;

          if (!email || !password) {
              showToast('Please fill in all fields', 'error');
              return;
          }

          const user = db.login(email, password);
          if (user) {
              showToast('Welcome back, ' + user.name + '!', 'success');
              authModal.classList.add('hidden');
              updateAuthUI();
              loadGallery();
          } else {
              showToast('Invalid email or password', 'error');
          }
      });

      document.getElementById('signup-submit').addEventListener('click', () => {
          const name = document.getElementById('signup-name').value;
          const email = document.getElementById('signup-email').value;
          const password = document.getElementById('signup-password').value;

          if (!name || !email || !password) {
              showToast('Please fill in all fields', 'error');
              return;
          }

          if (db.users[email]) {
              showToast('Email already exists', 'error');
              return;
          }

          const user = db.createUser(email, password, name);
          db.login(email, password);
          showToast('Account created successfully!', 'success');
          authModal.classList.add('hidden');
          updateAuthUI();
      });

      document.getElementById('user-menu-btn').addEventListener('click', () => {
          document.getElementById('user-dropdown').classList.toggle('hidden');
      });

      document.getElementById('logout-btn').addEventListener('click', () => {
          db.logout();
          showToast('Signed out successfully', 'info');
          updateAuthUI();
          document.getElementById('user-dropdown').classList.add('hidden');
          clearGallery();
      });

      function updateAuthUI() {
          const user = db.getCurrentUser();
          const authButtons = document.getElementById('auth-buttons');
          const userMenu = document.getElementById('user-menu');
          const creditDisplay = document.getElementById('credit-display');

          if (user) {
              authButtons.classList.add('hidden');
              userMenu.classList.remove('hidden');
              creditDisplay.classList.remove('hidden');

              document.getElementById('user-avatar').textContent = user.name.charAt(0).toUpperCase();
              document.getElementById('user-name').textContent = user.name;
              document.getElementById('user-email').textContent = user.email;

              updateCreditsDisplay(user.credits, user.maxCredits);
              updateRefreshTimer(new Date(user.refreshDate));
          } else {
              authButtons.classList.remove('hidden');
              userMenu.classList.add('hidden');
              creditDisplay.classList.add('hidden');
          }
      }

      // ===== CREDITS SYSTEM =====
      function updateCreditsDisplay(credits, maxCredits) {
          document.getElementById('credit-balance').textContent = credits;
          document.getElementById('credits-current').textContent = credits;
          document.getElementById('credits-max').textContent = maxCredits;
          document.getElementById('credit-ring-value').textContent = credits;

          const circumference = 2 * Math.PI * 28;
          const offset = circumference - (credits / maxCredits) * circumference;
          document.getElementById('credit-ring').style.strokeDashoffset = offset;
      }

      // ===== COUNTDOWN TIMER =====
      let timerInterval;

      function updateRefreshTimer(refreshDate) {
          if (timerInterval) clearInterval(timerInterval);

          function update() {
              const now = new Date();
              const diff = refreshDate - now;

              if (diff <= 0) {
                  const user = db.getCurrentUser();
                  if (user) {
                      user.credits = user.maxCredits;
                      user.refreshDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
                      db.users[user.email] = user;
                      db.currentUser = user;
                      db.save();
                      updateCreditsDisplay(user.credits, user.maxCredits);
                      updateRefreshTimer(new Date(user.refreshDate));
                      showToast('Credits refreshed!', 'success');
                  }
                  return;
              }

              const days = Math.floor(diff / (1000 * 60 * 60 * 24));
              const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((diff % (1000 * 60)) / 1000);

              document.getElementById('refresh-timer').textContent =
                  `${days}d ${hours}h ${minutes}m ${seconds}s`;
          }

          update();
          timerInterval = setInterval(update, 1000);
      }

      // ===== IMAGE UPLOAD =====
      const dropZone = document.getElementById('drop-zone');
      const fileInput = document.getElementById('file-input');
      const imagePreview = document.getElementById('image-preview');
      const previewImg = document.getElementById('preview-img');
      const generateBtn = document.getElementById('generate-btn');
      const uploadError = document.getElementById('upload-error');
      const motionPromptInput = document.getElementById('motion-prompt');

      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
          dropZone.addEventListener(eventName, (e) => {
              e.preventDefault();
              e.stopPropagation();
          });
      });

      ['dragenter', 'dragover'].forEach(eventName => {
          dropZone.addEventListener(eventName, () => dropZone.classList.add('drag-over'));
      });

      ['dragleave', 'drop'].forEach(eventName => {
          dropZone.addEventListener(eventName, () => dropZone.classList.remove('drag-over'));
      });

      dropZone.addEventListener('drop', (e) => {
          const file = e.dataTransfer.files[0];
          if (file && file.type.startsWith('image/')) {
              handleImageUpload(file);
          }
      });

      fileInput.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (file) handleImageUpload(file);
      });

      function handleImageUpload(file) {
          const reader = new FileReader();
          reader.onload = (e) => {
              state.uploadedImage = file;
              state.uploadedImageData = e.target.result;
              previewImg.src = e.target.result;
              dropZone.classList.add('hidden');
              imagePreview.classList.remove('hidden');
              generateBtn.disabled = false;
              generateBtn.classList.add('pulse-glow');
              uploadError.classList.add('hidden');
              dropZone.classList.remove('error-state');
              showToast('Image uploaded successfully', 'success');
          };
          reader.readAsDataURL(file);
      }

      document.getElementById('remove-image').addEventListener('click', () => {
          state.uploadedImage = null;
          state.uploadedImageData = null;
          previewImg.src = '';
          dropZone.classList.remove('hidden');
          imagePreview.classList.add('hidden');
          generateBtn.disabled = true;
          generateBtn.classList.remove('pulse-glow');
          fileInput.value = '';
      });

      // Motion Prompt Input
      motionPromptInput.addEventListener('input', (e) => {
          state.motionPrompt = e.target.value;
      });

      // ===== GENERATION SETTINGS =====
      document.querySelectorAll('.aspect-btn').forEach(btn => {
          btn.addEventListener('click', () => {
              document.querySelectorAll('.aspect-btn').forEach(b => {
                  b.classList.remove('active', 'bg-indigo-500/20', 'border-indigo-500/50', 'text-indigo-300');
                  b.classList.add('bg-white/5', 'border-white/10', 'text-neutral-400');
              });
              btn.classList.add('active', 'bg-indigo-500/20', 'border-indigo-500/50', 'text-indigo-300');
              btn.classList.remove('bg-white/5', 'border-white/10', 'text-neutral-400');
              state.selectedRatio = btn.dataset.ratio;
              showToast(`Aspect ratio set to ${btn.dataset.ratio}`, 'info');
          });
      });

      document.querySelectorAll('.style-btn').forEach(btn => {
          btn.addEventListener('click', () => {
              document.querySelectorAll('.style-btn').forEach(b => {
                  b.classList.remove('active', 'bg-indigo-500/20', 'border-indigo-500/50');
                  b.classList.add('bg-white/5', 'border-white/10');
                  b.querySelector('.text-sm').classList.remove('text-white');
                  b.querySelector('.text-sm').classList.add('text-neutral-300');
              });
              btn.classList.add('active', 'bg-indigo-500/20', 'border-indigo-500/50');
              btn.classList.remove('bg-white/5', 'border-white/10');
              btn.querySelector('.text-sm').classList.add('text-white');
              btn.querySelector('.text-sm').classList.remove('text-neutral-300');
              state.selectedStyle = btn.dataset.style;
              showToast(`Style set to ${btn.dataset.style}`, 'info');
          });
      });

      const motionSlider = document.getElementById('motion-strength');
      const motionValue = document.getElementById('motion-value');

      motionSlider.addEventListener('input', (e) => {
          const value = e.target.value;
          state.motionStrength = parseInt(value);
          motionValue.textContent = value;
          const percent = ((value - 1) / 9) * 100;
          e.target.style.setProperty('--value', `${percent}%`);
      });

      // ===== VIDEO GENERATION =====
      generateBtn.addEventListener('click', async () => {
          const user = db.getCurrentUser();

          if (!user) {
              showToast('Please sign in to generate videos', 'error');
              showAuthModal('signin');
              return;
          }

          if (!state.uploadedImage) {
              uploadError.classList.remove('hidden');
              dropZone.classList.add('error-state');
              showToast('Please upload an image first', 'error');
              return;
          }

          if (state.isGenerating) return;

          if (user.credits < 10) {
              showToast('Not enough credits. Please upgrade your plan.', 'error');
              return;
          }

          state.isGenerating = true;
          db.updateCredits(-10);
          updateCreditsDisplay(user.credits - 10, user.maxCredits);

          document.getElementById('empty-state').classList.add('hidden');
          document.getElementById('video-player').classList.add('hidden');
          document.getElementById('loading-skeleton').classList.remove('hidden');

          // Set loading state on button
          generateBtn.disabled = true;
          generateBtn.classList.add('btn-loading');
          generateBtn.innerHTML = `
              <span class="iconify btn-spinner" data-icon="lucide:loader-2" data-width="18"></span>
              <span>Processing...</span>
          `;

          const statuses = [
              'Analyzing image composition',
              `Applying ${state.selectedStyle} style`,
              `Setting motion strength to ${state.motionStrength}`,
              state.motionPrompt ? `Processing motion prompt: "${state.motionPrompt.substring(0, 30)}..."` : `Configuring ${state.selectedRatio} aspect ratio`,
              'Rendering frames',
              'Encoding video'
          ];

          let progress = 0;
          const progressElement = document.getElementById('progress-percent');
          const statusElement = document.getElementById('generation-status');

          const progressInterval = setInterval(() => {
              progress += Math.random() * 12 + 3;
              if (progress > 100) progress = 100;

              progressElement.textContent = `${Math.round(progress)}%`;
              const statusIndex = Math.min(Math.floor(progress / 18), statuses.length - 1);
              statusElement.textContent = statuses[statusIndex];

              if (progress >= 100) {
                  clearInterval(progressInterval);
                  completeGeneration();
              }
          }, 400);
      });

      function completeGeneration() {
          setTimeout(() => {
              state.isGenerating = false;
              document.getElementById('loading-skeleton').classList.add('hidden');
              document.getElementById('video-player').classList.remove('hidden');

              const sampleVideos = [
                  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
              ];
              const videoUrl = sampleVideos[Math.floor(Math.random() * sampleVideos.length)];

              state.currentVideo = {
                  url: videoUrl,
                  thumbnail: state.uploadedImageData,
                  settings: {
                      ratio: state.selectedRatio,
                      motion: state.motionStrength,
                      style: state.selectedStyle,
                      prompt: state.motionPrompt
                  }
              };

              const video = document.getElementById('result-video');
              video.querySelector('source').src = videoUrl;
              video.load();
              video.play();

              // Reset button state
              generateBtn.disabled = false;
              generateBtn.classList.remove('btn-loading');
              generateBtn.innerHTML = `
                  <span class="iconify" data-icon="lucide:wand-2" data-width="18"></span>
                  <span>Generate Video</span>
                  <span class="text-xs opacity-60">(10 credits)</span>
              `;
              generateBtn.classList.remove('pulse-glow');

              showToast('Video generated successfully!', 'success');
          }, 500);
      }

      // ===== VIDEO PLAYER CONTROLS =====
      const resultVideo = document.getElementById('result-video');
      const playPauseBtn = document.getElementById('play-pause-btn');

      playPauseBtn.addEventListener('click', () => {
          if (resultVideo.paused) {
              resultVideo.play();
          } else {
              resultVideo.pause();
          }
      });

      resultVideo.addEventListener('play', () => {
          playPauseBtn.querySelector('.play-icon').classList.add('hidden');
          playPauseBtn.querySelector('.pause-icon').classList.remove('hidden');
      });

      resultVideo.addEventListener('pause', () => {
          playPauseBtn.querySelector('.play-icon').classList.remove('hidden');
          playPauseBtn.querySelector('.pause-icon').classList.add('hidden');
      });

      resultVideo.addEventListener('timeupdate', () => {
          const current = formatTime(resultVideo.currentTime);
          const duration = formatTime(resultVideo.duration || 0);
          document.getElementById('time-display').textContent = `${current} / ${duration}`;
      });

      function formatTime(seconds) {
          const mins = Math.floor(seconds / 60);
          const secs = Math.floor(seconds % 60);
          return `${mins}:${secs.toString().padStart(2, '0')}`;
      }

      document.getElementById('mute-btn').addEventListener('click', function() {
          resultVideo.muted = !resultVideo.muted;
          this.querySelector('.volume-icon').classList.toggle('hidden');
          this.querySelector('.mute-icon').classList.toggle('hidden');
      });

      document.getElementById('fullscreen-btn').addEventListener('click', () => {
          if (resultVideo.requestFullscreen) {
              resultVideo.requestFullscreen();
          }
      });

      document.getElementById('download-btn').addEventListener('click', () => {
          if (state.currentVideo) {
              const a = document.createElement('a');
              a.href = state.currentVideo.url;
              a.download = `kinesis-video-${Date.now()}.mp4`;
              a.click();
              showToast('Download started', 'success');
          }
      });

      // ===== SAVE PROJECT =====
      document.getElementById('save-btn').addEventListener('click', () => {
          const user = db.getCurrentUser();
          if (!user) {
              showToast('Please sign in to save projects', 'error');
              return;
          }

          if (!state.currentVideo) {
              showToast('No video to save', 'error');
              return;
          }

          const project = db.saveProject({
              thumbnail: state.currentVideo.thumbnail,
              videoUrl: state.currentVideo.url,
              settings: state.currentVideo.settings,
              editorSettings: { ...state.editorSettings }
          });

          if (project) {
              showToast('Video saved to gallery!', 'success');
              loadGallery();
          }
      });

      // ===== GALLERY =====
      function loadGallery() {
          const projects = db.getProjects();
          const grid = document.getElementById('gallery-grid');
          const emptyGallery = document.getElementById('empty-gallery');

          grid.innerHTML = '';

          if (projects.length === 0) {
              grid.appendChild(emptyGallery);
              emptyGallery.classList.remove('hidden');
              return;
          }

          emptyGallery.classList.add('hidden');

          projects.forEach(project => {
              const item = document.createElement('div');
              item.className = 'video-card relative aspect-video rounded-xl overflow-hidden bg-neutral-800 cursor-pointer group';
              item.innerHTML = `
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Thumbnail" class="absolute inset-0 w-full h-full object-cover">
                  <video class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity" loop muted playsinline>
                      <source src="${project.videoUrl}" type="video/mp4">
                  </video>
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                      <div class="flex justify-end">
                          <button class="delete-project p-1.5 rounded-lg bg-red-500/80 hover:bg-red-500 transition-colors" data-id="${project.id}">
                              <span class="iconify" data-icon="lucide:trash-2" data-width="14"></span>
                          </button>
                      </div>
                      <div class="flex items-center gap-2">
                          <span class="iconify text-white" data-icon="lucide:play-circle" data-width="14"></span>
                          <span class="text-xs text-white">${project.settings.style}</span>
                      </div>
                  </div>
              `;

              const video = item.querySelector('video');
              item.addEventListener('mouseenter', () => video.play());
              item.addEventListener('mouseleave', () => {
                  video.pause();
                  video.currentTime = 0;
              });

              item.querySelector('.delete-project').addEventListener('click', (e) => {
                  e.stopPropagation();
                  db.deleteProject(project.id);
                  showToast('Project deleted', 'info');
                  loadGallery();
              });

              item.addEventListener('click', () => {
                  state.currentVideo = {
                      url: project.videoUrl,
                      thumbnail: project.thumbnail,
                      settings: project.settings
                  };

                  const mainVideo = document.getElementById('result-video');
                  mainVideo.querySelector('source').src = project.videoUrl;
                  mainVideo.load();
                  mainVideo.play();

                  document.getElementById('empty-state').classList.add('hidden');
                  document.getElementById('video-player').classList.remove('hidden');

                  document.getElementById('workspace').scrollIntoView({ behavior: 'smooth' });
              });

              grid.appendChild(item);
          });
      }

      function clearGallery() {
          const grid = document.getElementById('gallery-grid');
          const emptyGallery = document.getElementById('empty-gallery');
          grid.innerHTML = '';
          grid.appendChild(emptyGallery);
          emptyGallery.classList.remove('hidden');
      }

      document.getElementById('refresh-gallery').addEventListener('click', () => {
          loadGallery();
          showToast('Gallery refreshed', 'info');
      });

      // ===== VIDEO EDITOR =====
      const editorModal = document.getElementById('editor-modal');
      const editorVideo = document.getElementById('editor-video');

      document.getElementById('edit-btn').addEventListener('click', () => {
          if (!state.currentVideo) {
              showToast('No video to edit', 'error');
              return;
          }

          editorModal.classList.remove('hidden');
          editorVideo.querySelector('source').src = state.currentVideo.url;
          editorVideo.load();
          editorVideo.play();
      });

      document.getElementById('close-editor').addEventListener('click', () => {
          editorModal.classList.add('hidden');
          editorVideo.pause();
      });

      // Editor Tool Tabs
      document.querySelectorAll('.tool-tab').forEach(tab => {
          tab.addEventListener('click', () => {
              document.querySelectorAll('.tool-tab').forEach(t => {
                  t.classList.remove('active', 'text-white', 'bg-white/5');
                  t.classList.add('text-neutral-400');
              });
              tab.classList.add('active', 'text-white', 'bg-white/5');
              tab.classList.remove('text-neutral-400');

              document.querySelectorAll('.tool-panel').forEach(p => p.classList.add('hidden'));
              document.getElementById(`${tab.dataset.panel}-panel`).classList.remove('hidden');
          });
      });

      // Text Editor
      const textInput = document.getElementById('text-input');
      const overlayText = document.getElementById('overlay-text');
      const textOverlay = document.getElementById('text-overlay');

      textInput.addEventListener('input', (e) => {
          state.editorSettings.text = e.target.value;
          overlayText.textContent = e.target.value;
          overlayText.style.display = e.target.value ? 'block' : 'none';
      });

      // Font Size Slider
      const fontSizeSlider = document.getElementById('font-size');
      const fontSizeValue = document.getElementById('font-size-value');

      fontSizeSlider.addEventListener('input', (e) => {
          const value = e.target.value;
          state.editorSettings.fontSize = parseInt(value);
          fontSizeValue.textContent = `${value}px`;
          overlayText.style.fontSize = `${value}px`;
          const percent = ((value - 12) / 60) * 100;
          e.target.style.setProperty('--value', `${percent}%`);
      });

      // Color Buttons
      document.querySelectorAll('.color-btn').forEach(btn => {
          btn.addEventListener('click', () => {
              document.querySelectorAll('.color-btn').forEach(b => {
                  b.classList.remove('border-indigo-500');
                  b.classList.add('border-transparent');
              });
              btn.classList.add('border-indigo-500');
              btn.classList.remove('border-transparent');
              state.editorSettings.textColor = btn.dataset.color;
              overlayText.style.color = btn.dataset.color;
          });
      });

      // Position Buttons
      document.querySelectorAll('.pos-btn').forEach(btn => {
          btn.addEventListener('click', () => {
              document.querySelectorAll('.pos-btn').forEach(b => {
                  b.classList.remove('active', 'bg-indigo-500/20', 'border-indigo-500/50', 'text-indigo-300');
                  b.classList.add('bg-white/5', 'border-white/10');
              });
              btn.classList.add('active', 'bg-indigo-500/20', 'border-indigo-500/50', 'text-indigo-300');
              btn.classList.remove('bg-white/5', 'border-white/10');
              state.editorSettings.textPosition = btn.dataset.pos;

              const positions = {
                  'top-left': 'items-start justify-start',
                  'top-center': 'items-start justify-center',
                  'top-right': 'items-start justify-end',
                  'center-left': 'items-center justify-start',
                  'center': 'items-center justify-center',
                  'center-right': 'items-center justify-end',
                  'bottom-left': 'items-end justify-start',
                  'bottom-center': 'items-end justify-center',
                  'bottom-right': 'items-end justify-end'
              };

              textOverlay.className = `absolute inset-0 flex ${positions[btn.dataset.pos]} p-4 pointer-events-none`;
          });
      });

      // Add Text Button
      document.getElementById('add-text-btn').addEventListener('click', () => {
          if (!state.editorSettings.text) {
              showToast('Please enter some text first', 'error');
              return;
          }
          showToast('Text layer added!', 'success');
      });

      // Adjustment Sliders
      const brightnessSlider = document.getElementById('brightness');
      const contrastSlider = document.getElementById('contrast');
      const saturationSlider = document.getElementById('saturation');
      const blurSlider = document.getElementById('blur');

      function updateVideoFilters() {
          const filters = `
              brightness(${state.editorSettings.brightness}%)
              contrast(${state.editorSettings.contrast}%)
              saturate(${state.editorSettings.saturation}%)
              blur(${state.editorSettings.blur}px)
          `;
          editorVideo.style.filter = filters;
      }

      brightnessSlider.addEventListener('input', (e) => {
          state.editorSettings.brightness = parseInt(e.target.value);
          document.getElementById('brightness-value').textContent = `${e.target.value}%`;
          e.target.style.setProperty('--value', `${((e.target.value - 50) / 100) * 100}%`);
          updateVideoFilters();
      });

      contrastSlider.addEventListener('input', (e) => {
          state.editorSettings.contrast = parseInt(e.target.value);
          document.getElementById('contrast-value').textContent = `${e.target.value}%`;
          e.target.style.setProperty('--value', `${((e.target.value - 50) / 100) * 100}%`);
          updateVideoFilters();
      });

      saturationSlider.addEventListener('input', (e) => {
          state.editorSettings.saturation = parseInt(e.target.value);
          document.getElementById('saturation-value').textContent = `${e.target.value}%`;
          e.target.style.setProperty('--value', `${(e.target.value / 200) * 100}%`);
          updateVideoFilters();
      });

      blurSlider.addEventListener('input', (e) => {
          state.editorSettings.blur = parseInt(e.target.value);
          document.getElementById('blur-value').textContent = `${e.target.value}px`;
          e.target.style.setProperty('--value', `${(e.target.value / 10) * 100}%`);
          updateVideoFilters();
      });

      document.getElementById('reset-adjustments').addEventListener('click', () => {
          state.editorSettings.brightness = 100;
          state.editorSettings.contrast = 100;
          state.editorSettings.saturation = 100;
          state.editorSettings.blur = 0;

          brightnessSlider.value = 100;
          contrastSlider.value = 100;
          saturationSlider.value = 100;
          blurSlider.value = 0;

          document.getElementById('brightness-value').textContent = '100%';
          document.getElementById('contrast-value').textContent = '100%';
          document.getElementById('saturation-value').textContent = '100%';
          document.getElementById('blur-value').textContent = '0px';

          brightnessSlider.style.setProperty('--value', '50%');
          contrastSlider.style.setProperty('--value', '50%');
          saturationSlider.style.setProperty('--value', '50%');
          blurSlider.style.setProperty('--value', '0%');

          updateVideoFilters();
          showToast('Adjustments reset', 'info');
      });

      // Animation Buttons
      document.querySelectorAll('.anim-btn').forEach(btn => {
          btn.addEventListener('click', () => {
              document.querySelectorAll('.anim-btn').forEach(b => {
                  b.classList.remove('active', 'bg-indigo-500/20', 'border-indigo-500/50');
                  b.classList.add('bg-white/5', 'border-white/10');
                  b.querySelector('.text-sm').classList.remove('text-white');
                  b.querySelector('.text-sm').classList.add('text-neutral-300');
              });
              btn.classList.add('active', 'bg-indigo-500/20', 'border-indigo-500/50');
              btn.classList.remove('bg-white/5', 'border-white/10');
              btn.querySelector('.text-sm').classList.add('text-white');
              btn.querySelector('.text-sm').classList.remove('text-neutral-300');
              state.editorSettings.animation = btn.dataset.anim;
              showToast(`Animation set to ${btn.dataset.anim}`, 'info');
          });
      });

      // Animation Speed Slider
      const animSpeedSlider = document.getElementById('anim-speed');
      animSpeedSlider.addEventListener('input', (e) => {
          state.editorSettings.animSpeed = parseFloat(e.target.value);
          document.getElementById('anim-speed-value').textContent = `${e.target.value}x`;
          const percent = ((e.target.value - 0.5) / 1.5) * 100;
          e.target.style.setProperty('--value', `${percent}%`);
      });

      // Timeline Play/Pause
      const timelinePlay = document.getElementById('timeline-play');
      timelinePlay.addEventListener('click', () => {
          if (editorVideo.paused) {
              editorVideo.play();
              timelinePlay.querySelector('.play-icon').classList.add('hidden');
              timelinePlay.querySelector('.pause-icon').classList.remove('hidden');
          } else {
              editorVideo.pause();
              timelinePlay.querySelector('.play-icon').classList.remove('hidden');
              timelinePlay.querySelector('.pause-icon').classList.add('hidden');
          }
      });

      editorVideo.addEventListener('timeupdate', () => {
          const current = formatTime(editorVideo.currentTime);
          const duration = formatTime(editorVideo.duration || 0);
          document.getElementById('timeline-time').textContent = `${current} / ${duration}`;

          if (editorVideo.duration) {
              const percent = (editorVideo.currentTime / editorVideo.duration) * 100;
              const trackWidth = document.getElementById('timeline-track').offsetWidth;
              document.getElementById('playhead').style.left = `${8 + (trackWidth * percent / 100)}px`;
          }
      });

      // Save Edit
      document.getElementById('save-edit').addEventListener('click', () => {
          showToast('Changes saved!', 'success');
          editorModal.classList.add('hidden');
          editorVideo.pause();
      });

      // Export Video
      document.getElementById('export-video').addEventListener('click', () => {
          showToast('Exporting video...', 'info');
          setTimeout(() => {
              showToast('Video exported successfully!', 'success');
          }, 2000);
      });

      // ===== PRICING TOGGLE =====
      const billingToggle = document.getElementById('billing-toggle');
      const proPrice = document.getElementById('pro-price');
      const elitePrice = document.getElementById('elite-price');
      const proPeriod = document.getElementById('pro-period');
      const elitePeriod = document.getElementById('elite-period');
      const monthlyLabel = document.getElementById('monthly-label');
      const yearlyLabel = document.getElementById('yearly-label');

      billingToggle.addEventListener('change', () => {
          state.billingYearly = billingToggle.checked;

          if (state.billingYearly) {
              proPrice.textContent = '$15';
              elitePrice.textContent = '$39';
              proPeriod.textContent = '/month';
              elitePeriod.textContent = '/month';
              monthlyLabel.classList.remove('text-white');
              monthlyLabel.classList.add('text-neutral-400');
              yearlyLabel.classList.add('text-white');
              yearlyLabel.classList.remove('text-neutral-400');
          } else {
              proPrice.textContent = '$19';
              elitePrice.textContent = '$49';
              proPeriod.textContent = '/month';
              elitePeriod.textContent = '/month';
              monthlyLabel.classList.add('text-white');
              monthlyLabel.classList.remove('text-neutral-400');
              yearlyLabel.classList.remove('text-white');
              yearlyLabel.classList.add('text-neutral-400');
          }
      });

      // ===== NAVIGATION =====
      document.querySelectorAll('.nav-link').forEach(link => {
          link.addEventListener('click', (e) => {
              document.querySelectorAll('.nav-link').forEach(l => {
                  l.classList.remove('text-white', 'bg-white/5');
                  l.classList.add('text-neutral-400');
              });
              link.classList.add('text-white', 'bg-white/5');
              link.classList.remove('text-neutral-400');
          });
      });

      // ===== LOOP BUTTON =====
      document.getElementById('loop-btn').addEventListener('click', function() {
          resultVideo.loop = !resultVideo.loop;
          if (resultVideo.loop) {
              this.classList.add('bg-indigo-500', 'text-white');
              this.classList.remove('bg-indigo-500/20', 'text-indigo-400');
              showToast('Loop enabled', 'info');
          } else {
              this.classList.remove('bg-indigo-500', 'text-white');
              this.classList.add('bg-indigo-500/20', 'text-indigo-400');
              showToast('Loop disabled', 'info');
          }
      });

      // ===== CLICK OUTSIDE TO CLOSE DROPDOWN =====
      document.addEventListener('click', (e) => {
          const userMenu = document.getElementById('user-menu');
          const userDropdown = document.getElementById('user-dropdown');
          if (!userMenu.contains(e.target)) {
              userDropdown.classList.add('hidden');
          }
      });

      // ===== INITIALIZE =====
      document.addEventListener('DOMContentLoaded', () => {
          updateAuthUI();
          const user = db.getCurrentUser();
          if (user) {
              loadGallery();
          }
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
      

<div className="toast-container" id="toast-container"></div>

<div className="mesh-gradient"></div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="particle" style={{left: '10%', animationDelay: '0s'}}></div>
<div className="particle" style={{left: '20%', animationDelay: '2s'}}></div>
<div className="particle" style={{left: '40%', animationDelay: '4s'}}></div>
<div className="particle" style={{left: '60%', animationDelay: '1s'}}></div>
<div className="particle" style={{left: '80%', animationDelay: '3s'}}></div>
<div className="particle" style={{left: '90%', animationDelay: '5s'}}></div>
</div>

<div className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm hidden" id="auth-modal">
<div className="modal-content glass-strong rounded-3xl p-8 w-full max-w-md mx-4 relative">
<button className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors" id="close-auth-modal">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>

<div className="flex gap-4 mb-6 relative">
<button className="auth-tab text-lg font-semibold text-white pb-2" id="signin-tab">
            Sign In
          </button>
<button className="auth-tab text-lg font-semibold text-neutral-400 pb-2 hover:text-neutral-300 transition-colors" id="signup-tab">
            Sign Up
          </button>
<div className="tab-indicator absolute bottom-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" id="tab-indicator" style={{left: '0', width: '60px'}}></div>
</div>

<div className="space-y-4" id="signin-form">

<button className="btn-hover w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white text-black font-medium hover:bg-neutral-100 transition-all">
<svg height="20" viewbox="0 0 24 24" width="20">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
            Continue with Google
          </button>
<button className="btn-hover w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white text-black font-medium hover:bg-neutral-100 transition-all">
<span className="iconify" data-icon="ic:baseline-apple" data-width="22"></span>
            Continue with Apple
          </button>
<div className="flex items-center gap-4 my-6">
<div className="flex-1 h-px bg-white/10"></div>
<span className="text-xs text-neutral-500">or continue with email</span>
<div className="flex-1 h-px bg-white/10"></div>
</div>
<div className="space-y-3">
<input className="input-focus w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 outline-none" id="signin-email" placeholder="Email address" type="email"/>
<input className="input-focus w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 outline-none" id="signin-password" placeholder="Password" type="password"/>
</div>
<div className="flex items-center justify-between text-sm">
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-0" type="checkbox"/>
<span className="text-neutral-400">Remember me</span>
</label>
<a className="text-indigo-400 hover:text-indigo-300 transition-colors" href="#">
              Forgot password?
            </a>
</div>
<button className="btn-glow btn-hover w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-sm font-semibold" id="signin-submit">
            Sign In
          </button>
</div>

<div className="space-y-4 hidden" id="signup-form">
<button className="btn-hover w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white text-black font-medium hover:bg-neutral-100 transition-all">
<svg height="20" viewbox="0 0 24 24" width="20">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
            Continue with Google
          </button>
<button className="btn-hover w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white text-black font-medium hover:bg-neutral-100 transition-all">
<span className="iconify" data-icon="ic:baseline-apple" data-width="22"></span>
            Continue with Apple
          </button>
<div className="flex items-center gap-4 my-6">
<div className="flex-1 h-px bg-white/10"></div>
<span className="text-xs text-neutral-500">
              or create account with email
            </span>
<div className="flex-1 h-px bg-white/10"></div>
</div>
<div className="space-y-3">
<input className="input-focus w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 outline-none" id="signup-name" placeholder="Full name" type="text"/>
<input className="input-focus w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 outline-none" id="signup-email" placeholder="Email address" type="email"/>
<input className="input-focus w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 outline-none" id="signup-password" placeholder="Create password" type="password"/>
</div>
<label className="flex items-start gap-2 cursor-pointer text-sm">
<input className="w-4 h-4 mt-0.5 rounded border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-0" type="checkbox"/>
<span className="text-neutral-400">
              I agree to the
              <a className="text-indigo-400 hover:text-indigo-300" href="#">
                Terms of Service
              </a>
              and
              <a className="text-indigo-400 hover:text-indigo-300" href="#">
                Privacy Policy
              </a>
</span>
</label>
<button className="btn-glow btn-hover w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-sm font-semibold" id="signup-submit">
            Create Account
          </button>
</div>
</div>
</div>

<div className="modal-backdrop fixed inset-0 z-[90] flex items-center justify-center bg-black/90 backdrop-blur-sm hidden" id="editor-modal">
<div className="modal-content glass-strong rounded-3xl w-full max-w-6xl mx-4 max-h-[90vh] overflow-hidden flex flex-col">

<div className="flex items-center justify-between p-4 border-b border-white/10">
<div className="flex items-center gap-3">
<span className="iconify text-indigo-400" data-icon="lucide:wand-2" data-width="20"></span>
<h2 className="text-lg font-semibold">Video Editor</h2>
</div>
<div className="flex items-center gap-2">
<button className="btn-hover flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-sm font-medium" id="save-edit">
<span className="iconify" data-icon="lucide:save" data-width="16"></span>
              Save Changes
            </button>
<button className="btn-hover flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-sm font-medium hover:bg-white/20" id="export-video">
<span className="iconify" data-icon="lucide:download" data-width="16"></span>
              Export
            </button>
<button className="p-2 rounded-lg hover:bg-white/10 transition-colors" id="close-editor">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="flex-1 p-4 flex items-center justify-center bg-black/50">
<div className="relative w-full max-w-2xl aspect-video bg-neutral-900 rounded-xl overflow-hidden" id="editor-preview">
<video className="w-full h-full object-contain" id="editor-video" loop="" muted="" playsinline="">
<source src="" type="video/mp4"/>
</video>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none" id="text-overlay">
<span className="text-2xl font-bold text-white drop-shadow-lg" id="overlay-text" style={{display: 'none'}}></span>
</div>

<div className="absolute inset-0 pointer-events-none" id="animation-overlay"></div>
</div>
</div>

<div className="w-80 border-l border-white/10 flex flex-col">

<div className="flex border-b border-white/10">
<button className="tool-tab active flex-1 py-3 text-sm font-medium text-white bg-white/5" data-panel="text">
<span className="iconify inline-block mr-1" data-icon="lucide:type" data-width="16"></span>
                Text
              </button>
<button className="tool-tab flex-1 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors" data-panel="adjust">
<span className="iconify inline-block mr-1" data-icon="lucide:sun" data-width="16"></span>
                Adjust
              </button>
<button className="tool-tab flex-1 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors" data-panel="animate">
<span className="iconify inline-block mr-1" data-icon="lucide:sparkles" data-width="16"></span>
                Animate
              </button>
</div>

<div className="tool-panel flex-1 p-4 space-y-4 overflow-y-auto" id="text-panel">
<div>
<label className="text-xs font-medium text-neutral-400 mb-2 block">
                  Text Content
                </label>
<input className="input-focus w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm" id="text-input" placeholder="Enter text..." type="text"/>
</div>
<div>
<label className="text-xs font-medium text-neutral-400 mb-2 block">
                  Font Size
                </label>
<input className="w-full" id="font-size" max="72" min="12" style={{'--value': '25%'}} type="range" value="24"/>
<div className="flex justify-between text-xs text-neutral-500 mt-1">
<span>12px</span>
<span id="font-size-value">24px</span>
<span>72px</span>
</div>
</div>
<div>
<label className="text-xs font-medium text-neutral-400 mb-2 block">
                  Text Color
                </label>
<div className="flex gap-2">
<button className="color-btn w-8 h-8 rounded-lg bg-white border-2 border-indigo-500" data-color="#ffffff"></button>
<button className="color-btn w-8 h-8 rounded-lg bg-black border border-white/20" data-color="#000000"></button>
<button className="color-btn w-8 h-8 rounded-lg bg-indigo-500 border border-transparent" data-color="#6366f1"></button>
<button className="color-btn w-8 h-8 rounded-lg bg-purple-500 border border-transparent" data-color="#a855f7"></button>
<button className="color-btn w-8 h-8 rounded-lg bg-pink-500 border border-transparent" data-color="#ec4899"></button>
<button className="color-btn w-8 h-8 rounded-lg bg-amber-500 border border-transparent" data-color="#f59e0b"></button>
</div>
</div>
<div>
<label className="text-xs font-medium text-neutral-400 mb-2 block">
                  Position
                </label>
<div className="grid grid-cols-3 gap-2">
<button className="pos-btn p-2 rounded-lg bg-white/5 border border-white/10 text-xs hover:bg-white/10" data-pos="top-left">
                    ↖
                  </button>
<button className="pos-btn p-2 rounded-lg bg-white/5 border border-white/10 text-xs hover:bg-white/10" data-pos="top-center">
                    ↑
                  </button>
<button className="pos-btn p-2 rounded-lg bg-white/5 border border-white/10 text-xs hover:bg-white/10" data-pos="top-right">
                    ↗
                  </button>
<button className="pos-btn p-2 rounded-lg bg-white/5 border border-white/10 text-xs hover:bg-white/10" data-pos="center-left">
                    ←
                  </button>
<button className="pos-btn active p-2 rounded-lg bg-indigo-500/20 border border-indigo-500/50 text-xs text-indigo-300" data-pos="center">
                    ●
                  </button>
<button className="pos-btn p-2 rounded-lg bg-white/5 border border-white/10 text-xs hover:bg-white/10" data-pos="center-right">
                    →
                  </button>
<button className="pos-btn p-2 rounded-lg bg-white/5 border border-white/10 text-xs hover:bg-white/10" data-pos="bottom-left">
                    ↙
                  </button>
<button className="pos-btn p-2 rounded-lg bg-white/5 border border-white/10 text-xs hover:bg-white/10" data-pos="bottom-center">
                    ↓
                  </button>
<button className="pos-btn p-2 rounded-lg bg-white/5 border border-white/10 text-xs hover:bg-white/10" data-pos="bottom-right">
                    ↘
                  </button>
</div>
</div>
<button className="btn-hover w-full py-2 rounded-lg bg-indigo-500/20 border border-indigo-500/50 text-sm font-medium text-indigo-300 hover:bg-indigo-500/30" id="add-text-btn">
                Add Text Layer
              </button>
</div>

<div className="tool-panel hidden flex-1 p-4 space-y-4 overflow-y-auto" id="adjust-panel">
<div>
<div className="flex items-center justify-between mb-2">
<label className="text-xs font-medium text-neutral-400">
                    Brightness
                  </label>
<span className="text-xs font-mono text-indigo-400" id="brightness-value">
                    100%
                  </span>
</div>
<input className="w-full" id="brightness" max="150" min="50" style={{'--value': '50%'}} type="range" value="100"/>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<label className="text-xs font-medium text-neutral-400">
                    Contrast
                  </label>
<span className="text-xs font-mono text-indigo-400" id="contrast-value">
                    100%
                  </span>
</div>
<input className="w-full" id="contrast" max="150" min="50" style={{'--value': '50%'}} type="range" value="100"/>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<label className="text-xs font-medium text-neutral-400">
                    Saturation
                  </label>
<span className="text-xs font-mono text-indigo-400" id="saturation-value">
                    100%
                  </span>
</div>
<input className="w-full" id="saturation" max="200" min="0" style={{'--value': '50%'}} type="range" value="100"/>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<label className="text-xs font-medium text-neutral-400">
                    Blur
                  </label>
<span className="text-xs font-mono text-indigo-400" id="blur-value">
                    0px
                  </span>
</div>
<input className="w-full" id="blur" max="10" min="0" style={{'--value': '0%'}} type="range" value="0"/>
</div>
<button className="btn-hover w-full py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-neutral-300 hover:bg-white/10" id="reset-adjustments">
                Reset to Default
              </button>
</div>

<div className="tool-panel hidden flex-1 p-4 space-y-4 overflow-y-auto" id="animate-panel">
<div>
<label className="text-xs font-medium text-neutral-400 mb-2 block">
                  Animation Type
                </label>
<div className="space-y-2">
<button className="anim-btn active w-full flex items-center gap-3 p-3 rounded-xl bg-indigo-500/20 border border-indigo-500/50 text-left" data-anim="swing">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex items-center justify-center">
<span className="iconify text-indigo-400" data-icon="lucide:move-horizontal" data-width="18"></span>
</div>
<div>
<span className="text-sm font-medium text-white block">
                        Swing
                      </span>
<span className="text-[10px] text-neutral-400">
                        Gentle side-to-side motion
                      </span>
</div>
</button>
<button className="anim-btn w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-left hover:bg-white/10" data-anim="zoom">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/30 to-rose-500/30 flex items-center justify-center">
<span className="iconify text-pink-400" data-icon="lucide:zoom-in" data-width="18"></span>
</div>
<div>
<span className="text-sm font-medium text-neutral-300 block">
                        Zoom
                      </span>
<span className="text-[10px] text-neutral-500">
                        Slow zoom in/out
                      </span>
</div>
</button>
<button className="anim-btn w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-left hover:bg-white/10" data-anim="move">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/30 to-teal-500/30 flex items-center justify-center">
<span className="iconify text-emerald-400" data-icon="lucide:move" data-width="18"></span>
</div>
<div>
<span className="text-sm font-medium text-neutral-300 block">
                        Move
                      </span>
<span className="text-[10px] text-neutral-500">
                        Pan across frame
                      </span>
</div>
</button>
<button className="anim-btn w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-left hover:bg-white/10" data-anim="none">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neutral-500/30 to-neutral-600/30 flex items-center justify-center">
<span className="iconify text-neutral-400" data-icon="lucide:circle-off" data-width="18"></span>
</div>
<div>
<span className="text-sm font-medium text-neutral-300 block">
                        None
                      </span>
<span className="text-[10px] text-neutral-500">
                        No animation
                      </span>
</div>
</button>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<label className="text-xs font-medium text-neutral-400">
                    Animation Speed
                  </label>
<span className="text-xs font-mono text-indigo-400" id="anim-speed-value">
                    1x
                  </span>
</div>
<input className="w-full" id="anim-speed" max="2" min="0.5" step="0.1" style={{'--value': '33%'}} type="range" value="1"/>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10 p-4">
<div className="flex items-center gap-4 mb-3">
<button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors" id="timeline-play">
<span className="iconify play-icon" data-icon="lucide:play" data-width="16"></span>
<span className="iconify pause-icon hidden" data-icon="lucide:pause" data-width="16"></span>
</button>
<span className="text-xs font-mono text-neutral-400" id="timeline-time">
              0:00 / 0:04
            </span>
<div className="flex-1"></div>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span>Trim:</span>
<span className="font-mono text-indigo-400" id="trim-start">
                0:00
              </span>
<span>-</span>
<span className="font-mono text-indigo-400" id="trim-end">0:04</span>
</div>
</div>
<div className="relative h-12 bg-neutral-800 rounded-lg overflow-hidden">

<div className="timeline-track absolute inset-y-2 left-0 right-0 mx-2 rounded" id="timeline-track">

<div className="timeline-handle absolute left-0 top-0 bottom-0 w-2 bg-white/80 rounded-l cursor-ew-resize" id="trim-left"></div>
<div className="timeline-handle absolute right-0 top-0 bottom-0 w-2 bg-white/80 rounded-r cursor-ew-resize" id="trim-right"></div>
</div>

<div className="absolute top-0 bottom-0 w-0.5 bg-white z-10" id="playhead" style={{left: '8px'}}>
<div className="absolute -top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 glass-strong">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="18"></span>
</div>
<span className="text-base font-semibold tracking-tight">
              Kinesis AI
            </span>
<span className="hidden sm:inline-block text-[10px] font-medium px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30">
              BETA
            </span>
</div>

<div className="hidden md:flex items-center gap-1">
<a className="nav-link px-4 py-2 text-sm font-medium text-white bg-white/5 rounded-lg" data-section="workspace" href="#workspace">
              My Workspace
            </a>
<a className="nav-link px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" data-section="gallery" href="#gallery">
              Gallery
            </a>
<a className="nav-link px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" data-section="pricing" href="#pricing">
              Pricing
            </a>
<a className="nav-link px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" data-section="api" href="#api">
              API
            </a>
</div>

<div className="flex items-center gap-3">

<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20" id="credit-display">
<span className="iconify text-amber-400" data-icon="lucide:coins" data-width="16"></span>
<span className="text-sm font-semibold text-amber-300" id="credit-balance">
                150
              </span>
<span className="text-xs text-amber-400/60">credits</span>
</div>

<div className="flex items-center gap-2" id="auth-buttons">
<button className="btn-hover px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors" id="signin-btn">
                Sign In
              </button>
<button className="btn-hover btn-glow px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-sm font-medium" id="signup-btn">
                Get Started
              </button>
</div>

<div className="hidden relative" id="user-menu">
<button className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 transition-all" id="user-menu-btn">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-medium">
<span id="user-avatar">K</span>
</div>
<span className="iconify text-neutral-400" data-icon="lucide:chevron-down" data-width="16"></span>
</button>

<div className="hidden absolute right-0 top-full mt-2 w-56 glass-strong rounded-xl p-2 shadow-xl" id="user-dropdown">
<div className="px-3 py-2 border-b border-white/10 mb-2">
<p className="text-sm font-medium" id="user-name">User</p>
<p className="text-xs text-neutral-400" id="user-email">
                    user@example.com
                  </p>
</div>
<a className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<span className="iconify" data-icon="lucide:user" data-width="16"></span>
                  Profile Settings
                </a>
<a className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<span className="iconify" data-icon="lucide:credit-card" data-width="16"></span>
                  Billing
                </a>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors" id="logout-btn">
<span className="iconify" data-icon="lucide:log-out" data-width="16"></span>
                  Sign Out
                </button>
</div>
</div>
</div>
</div>
</div>
</nav>

<main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<aside className="lg:col-span-3 space-y-4">

<div className="glass rounded-2xl p-5 card-3d">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold flex items-center gap-2">
<span className="iconify text-indigo-400" data-icon="lucide:upload-cloud" data-width="18"></span>
                Upload Image
              </h3>
<span className="text-[10px] text-neutral-500">
                PNG, JPG up to 10MB
              </span>
</div>

<div className="drop-zone relative border-2 border-dashed border-neutral-700 rounded-xl p-8 text-center cursor-pointer hover:border-indigo-500/50 transition-all group" id="drop-zone">
<input accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id="file-input" type="file"/>
<div className="drop-icon mb-3">
<div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="iconify text-indigo-400" data-icon="lucide:image-plus" data-width="24"></span>
</div>
</div>
<p className="text-sm font-medium text-neutral-300 mb-1">
                Drop your image here
              </p>
<p className="text-xs text-neutral-500">or click to browse</p>
</div>
<div className="mt-4" id="motion-prompt-container">
<label className="text-xs font-medium text-neutral-400 mb-2 block flex items-center gap-2">
<span className="iconify text-purple-400" data-icon="lucide:message-square" data-width="14"></span>
                Motion Prompt
              </label>
<textarea className="input-focus w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 outline-none resize-none text-sm" id="motion-prompt" placeholder="e.g., Slowly zoom in, make the water ripple, camera pan right, gentle breeze moving the hair..." rows="3"></textarea>
<p className="text-[10px] text-neutral-500 mt-1">
                Describe the motion you want in your video
              </p>
</div>

<div className="hidden mt-4 relative rounded-xl overflow-hidden" id="image-preview">
<img alt="Preview" className="w-full aspect-video object-cover" id="preview-img" src=""/>
<button className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-black/60 backdrop-blur flex items-center justify-center hover:bg-red-500/80 transition-colors" id="remove-image">
<span className="iconify" data-icon="lucide:x" data-width="16"></span>
</button>
</div>
</div>

<div className="glass rounded-2xl p-5 card-3d">
<h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
<span className="iconify text-purple-400" data-icon="lucide:sliders-horizontal" data-width="18"></span>
              Generation Settings
            </h3>

<div className="mb-5">
<label className="text-xs font-medium text-neutral-400 mb-2 block">
                Aspect Ratio
              </label>
<div className="grid grid-cols-3 gap-2">
<button className="aspect-btn btn-hover active px-3 py-2 rounded-lg text-xs font-medium bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 transition-all" data-ratio="16:9">
<span className="iconify mb-1" data-icon="lucide:monitor" data-width="16"></span>
<span className="block">16:9</span>
</button>
<button className="aspect-btn btn-hover px-3 py-2 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-neutral-400 hover:bg-white/10 transition-all" data-ratio="9:16">
<span className="iconify mb-1" data-icon="lucide:smartphone" data-width="16"></span>
<span className="block">9:16</span>
</button>
<button className="aspect-btn btn-hover px-3 py-2 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-neutral-400 hover:bg-white/10 transition-all" data-ratio="1:1">
<span className="iconify mb-1" data-icon="lucide:square" data-width="16"></span>
<span className="block">1:1</span>
</button>
</div>
</div>

<div className="mb-5">
<div className="flex items-center justify-between mb-2">
<label className="text-xs font-medium text-neutral-400">
                  Motion Strength
                </label>
<span className="text-xs font-mono text-indigo-400" id="motion-value">
                  5
                </span>
</div>
<input className="w-full" id="motion-strength" max="10" min="1" style={{'--value': '50%'}} type="range" value="5"/>
</div>

<div className="mb-5">
<label className="text-xs font-medium text-neutral-400 mb-2 block">
                Style Preset
              </label>
<div className="space-y-2">
<button className="style-btn btn-hover active w-full flex items-center gap-3 p-3 rounded-xl bg-indigo-500/20 border border-indigo-500/50 text-left transition-all" data-style={{}}>
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center">
<span className="iconify text-orange-400" data-icon="lucide:clapperboard" data-width="18"></span>
</div>
<div>
<span className="text-sm font-medium text-white block">
                      Cinematic
                    </span>
<span className="text-[10px] text-neutral-400">
                      Film-like motion blur
                    </span>
</div>
</button>
<button className="style-btn btn-hover w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-left hover:bg-white/10 transition-all" data-style={{}}>
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/30 to-purple-500/30 flex items-center justify-center">
<span className="iconify text-pink-400" data-icon="lucide:palette" data-width="18"></span>
</div>
<div>
<span className="text-sm font-medium text-neutral-300 block">
                      Anime
                    </span>
<span className="text-[10px] text-neutral-500">
                      Japanese animation style
                    </span>
</div>
</button>
<button className="style-btn btn-hover w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-left hover:bg-white/10 transition-all" data-style={{}}>
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/30 to-teal-500/30 flex items-center justify-center">
<span className="iconify text-emerald-400" data-icon="lucide:camera" data-width="18"></span>
</div>
<div>
<span className="text-sm font-medium text-neutral-300 block">
                      Realistic
                    </span>
<span className="text-[10px] text-neutral-500">
                      Natural movement
                    </span>
</div>
</button>
</div>
</div>

<div className="hidden mb-3 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2" id="upload-error">
<span className="iconify" data-icon="lucide:alert-circle" data-width="14"></span>
<span>Please upload an image before generating</span>
</div>
<button className="btn-glow btn-hover w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="generate-btn">
<span className="iconify" data-icon="lucide:wand-2" data-width="18"></span>
<span>Generate Video</span>
<span className="text-xs opacity-60">(10 credits)</span>
</button>
</div>

<div className="glass rounded-2xl p-5 card-3d">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold flex items-center gap-2">
<span className="iconify text-amber-400" data-icon="lucide:zap" data-width="18"></span>
                Free Credits
              </h3>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Weekly Refresh
              </span>
</div>

<div className="flex items-center gap-4 mb-4">
<div className="relative">
<svg className="progress-ring w-16 h-16">
<circle cx="32" cy="32" fill="none" r="28" stroke="rgba(255,255,255,0.1)" strokeWidth="4"></circle>
<circle className="progress-ring-circle" cx="32" cy="32" fill="none" id="credit-ring" r="28" stroke="url(#gradient)" stroke-dasharray="176" stroke-dashoffset="0" strokeLinecap="round" strokeWidth="4"></circle>
<defs>
<lineargradient id="gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#6366f1"></stop>
<stop offset="100%" stop-color="#a855f7"></stop>
</lineargradient>
</defs>
</svg>
<span className="absolute inset-0 flex items-center justify-center text-sm font-semibold" id="credit-ring-value">
                  150
                </span>
</div>
<div>
<p className="text-sm font-medium text-white">
<span id="credits-current">150</span>
                  /
                  <span id="credits-max">150</span>
                  credits
                </p>
<p className="text-xs text-neutral-400">
                  Refreshes in
                  <span className="text-indigo-400 font-medium countdown-digit" id="refresh-timer">
                    6d 23h 59m
                  </span>
</p>
</div>
</div>
<a className="block w-full py-2 px-4 rounded-lg bg-white/5 border border-white/10 text-center text-xs font-medium text-neutral-300 hover:bg-white/10 transition-all" href="#pricing">
              Upgrade for more credits →
            </a>
</div>
</aside>

<section className="lg:col-span-9 space-y-6">

<section className="mb-16 text-center">
<div className="max-w-4xl mx-auto px-4">
<span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 mb-6">
                AI-Powered Video Generation
              </span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Turn Static Photos into Cinematic Videos with AI
              </h1>
<p className="text-lg sm:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Create realistic animations, anime styles, and 3D motion in
                seconds
              </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="btn-glow btn-hover px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-base font-semibold flex items-center gap-2" href="#workspace">
<span className="iconify" data-icon="lucide:wand-2" data-width="20"></span>
                  Generate Video Now
                </a>
<a className="btn-hover px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-base font-medium hover:bg-white/10 transition-all flex items-center gap-2" href="#how-it-works">
<span className="iconify" data-icon="lucide:play-circle" data-width="20"></span>
                  See How It Works
                </a>
</div>
</div>
</section>
<section className="mb-16">
<div className="max-w-6xl mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass rounded-2xl p-6 card-3d text-center">
<div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
<span className="iconify text-indigo-400" data-icon="lucide:monitor" data-width="28"></span>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">
                    High-Resolution Output
                  </h3>
<p className="text-sm text-neutral-400">
                    Export videos in 720p, 1080p, or 4K resolution with
                    crystal-clear quality
                  </p>
</div>
<div className="glass rounded-2xl p-6 card-3d text-center">
<div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center">
<span className="iconify text-pink-400" data-icon="lucide:user-check" data-width="28"></span>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">
                    Consistent Character Identity
                  </h3>
<p className="text-sm text-neutral-400">
                    AI maintains facial features and character details
                    throughout the video
                  </p>
</div>
<div className="glass rounded-2xl p-6 card-3d text-center">
<div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
<span className="iconify text-emerald-400" data-icon="lucide:cloud-lightning" data-width="28"></span>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">
                    Fast Cloud Rendering
                  </h3>
<p className="text-sm text-neutral-400">
                    Powerful GPU servers generate your video in seconds, not
                    hours
                  </p>
</div>
</div>
</div>
</section>
<section className="mb-16" id="how-it-works">
<div className="max-w-5xl mx-auto px-4">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight mb-3">
                  How It Works
                </h2>
<p className="text-neutral-400">
                  Transform any image into a stunning video in 3 simple steps
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="relative">
<div className="glass rounded-2xl p-6 card-3d">
<div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-lg font-bold">
                      1
                    </div>
<div className="w-full aspect-video mb-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center overflow-hidden">
<span className="iconify text-indigo-400" data-icon="lucide:upload-cloud" data-width="48"></span>
</div>
<h3 className="text-base font-semibold mb-2">Upload Image</h3>
<p className="text-sm text-neutral-400">
                      Drag and drop your photo or click to browse. Supports PNG,
                      JPG up to 10MB.
                    </p>
</div>
<div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2">
<span className="iconify text-neutral-600" data-icon="lucide:chevron-right" data-width="24"></span>
</div>
</div>
<div className="relative">
<div className="glass rounded-2xl p-6 card-3d">
<div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-lg font-bold">
                      2
                    </div>
<div className="w-full aspect-video mb-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center overflow-hidden">
<span className="iconify text-purple-400" data-icon="lucide:sliders-horizontal" data-width="48"></span>
</div>
<h3 className="text-base font-semibold mb-2">
                      Choose Motion Style
                    </h3>
<p className="text-sm text-neutral-400">
                      Select from cinematic, anime, or realistic styles. Adjust
                      motion strength.
                    </p>
</div>
<div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2">
<span className="iconify text-neutral-600" data-icon="lucide:chevron-right" data-width="24"></span>
</div>
</div>
<div className="relative">
<div className="glass rounded-2xl p-6 card-3d">
<div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-lg font-bold">
                      3
                    </div>
<div className="w-full aspect-video mb-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center overflow-hidden">
<span className="iconify text-emerald-400" data-icon="lucide:download" data-width="48"></span>
</div>
<h3 className="text-base font-semibold mb-2">Download Video</h3>
<p className="text-sm text-neutral-400">
                      Preview your AI-generated video and download in your
                      preferred format.
                    </p>
</div>
</div>
</div>
</div>
</section>
<div className="glass rounded-2xl overflow-hidden" id="workspace">

<div className="relative aspect-video bg-black/50 flex items-center justify-center" id="video-container">

<div className="text-center" id="empty-state">
<div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center">
<span className="iconify text-neutral-500" data-icon="lucide:video" data-width="32"></span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-300 mb-2">
                  No video generated yet
                </h3>
<p className="text-sm text-neutral-500 max-w-md mx-auto">
                  Upload an image and configure your settings to generate your
                  first AI video
                </p>
</div>

<div className="hidden absolute inset-0 generation-loader" id="loading-skeleton">
<div className="absolute inset-0 skeleton"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="relative mb-4">
<svg className="w-24 h-24 animate-spin" style={{animationDuration: '3s'}}>
<circle cx="48" cy="48" fill="none" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="4"></circle>
<circle cx="48" cy="48" fill="none" r="40" stroke="url(#loading-gradient)" stroke-dasharray="251" stroke-dashoffset="200" strokeLinecap="round" strokeWidth="4"></circle>
<defs>
<lineargradient id="loading-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#6366f1"></stop>
<stop offset="50%" stop-color="#a855f7"></stop>
<stop offset="100%" stop-color="#ec4899"></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-lg font-semibold" id="progress-percent">
                        0%
                      </span>
</div>
</div>
<p className="text-sm font-medium text-white mb-1">
                    Generating your video...
                  </p>
<p className="text-xs text-neutral-400" id="generation-status">
                    Analyzing image composition
                  </p>
</div>
</div>

<div className="hidden absolute inset-0" id="video-player">
<video className="w-full h-full object-contain" id="result-video" loop="" playsinline="" preload="auto">
<source src="" type="video/mp4"/>
</video>

<div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" id="video-controls">
<button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110" id="play-pause-btn">
<span className="iconify play-icon text-white" data-icon="lucide:play" data-width="28"></span>
<span className="iconify pause-icon hidden text-white" data-icon="lucide:pause" data-width="28"></span>
</button>
</div>

<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="p-2 rounded-lg hover:bg-white/10 transition-colors" id="mute-btn">
<span className="iconify volume-icon" data-icon="lucide:volume-2" data-width="18"></span>
<span className="iconify mute-icon hidden" data-icon="lucide:volume-x" data-width="18"></span>
</button>
<span className="text-xs font-mono text-neutral-300" id="time-display">
                        0:00 / 0:00
                      </span>
</div>
<div className="flex items-center gap-2">
<button className="btn-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors text-sm font-medium" id="edit-btn">
<span className="iconify" data-icon="lucide:wand-2" data-width="16"></span>
                        Edit
                      </button>
<button className="btn-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-colors text-sm font-medium" id="save-btn">
<span className="iconify" data-icon="lucide:bookmark" data-width="16"></span>
                        Save
                      </button>
<button className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 transition-colors" id="loop-btn">
<span className="iconify" data-icon="lucide:repeat" data-width="18"></span>
</button>
<button className="p-2 rounded-lg hover:bg-white/10 transition-colors" id="fullscreen-btn">
<span className="iconify" data-icon="lucide:maximize" data-width="18"></span>
</button>
<button className="btn-hover flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium" id="download-btn">
<span className="iconify" data-icon="lucide:download" data-width="16"></span>
                        Download
                      </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="glass rounded-2xl p-5" id="gallery">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold flex items-center gap-2">
<span className="iconify text-indigo-400" data-icon="lucide:layout-grid" data-width="18"></span>
                My Gallery
              </h3>
<div className="flex items-center gap-2">
<button className="btn-hover p-2 rounded-lg hover:bg-white/10 transition-colors text-neutral-400 hover:text-white" id="refresh-gallery">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="16"></span>
</button>
<button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                  View All →
                </button>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3" id="gallery-grid">

<div className="col-span-full text-center py-8" id="empty-gallery">
<div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center">
<span className="iconify text-neutral-500" data-icon="lucide:image" data-width="24"></span>
</div>
<p className="text-sm text-neutral-400 mb-1">No saved videos yet</p>
<p className="text-xs text-neutral-500">
                  Your generated videos will appear here
                </p>
</div>
</div>
</div>
</section>
</div>

<section className="mt-16 mb-8" id="pricing">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight mb-3">
            Simple, transparent pricing
          </h2>
<p className="text-neutral-400 max-w-lg mx-auto">
            Choose the plan that fits your creative needs.
          </p>

<div className="flex items-center justify-center gap-3 mt-6">
<span className="text-sm font-medium text-white" id="monthly-label">
              Monthly
            </span>
<label className="pricing-toggle relative inline-block w-12 h-6 cursor-pointer">
<input className="sr-only" id="billing-toggle" type="checkbox"/>
<div className="toggle-track w-full h-full rounded-full bg-neutral-700 transition-all">
<div className="toggle-thumb absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform shadow-lg"></div>
</div>
</label>
<span className="text-sm font-medium text-neutral-400" id="yearly-label">
              Yearly
            </span>
<span className="text-[10px] px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-medium">
              Save 20%
            </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="glass rounded-2xl p-6 card-3d">
<div className="mb-6">
<h3 className="text-lg font-semibold mb-1">Free</h3>
<p className="text-sm text-neutral-400">Perfect for trying out</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold">$0</span>
<span className="text-neutral-400">/forever</span>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-sm">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="16"></span>
<span>
<strong className="text-white">150 credits</strong>
                  per week
                </span>
</li>
<li className="flex items-center gap-2 text-sm">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="16"></span>
<span>720p video output</span>
</li>
<li className="flex items-center gap-2 text-sm">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="16"></span>
<span>Basic styles</span>
</li>
<li className="flex items-center gap-2 text-sm text-neutral-500">
<span className="iconify" data-icon="lucide:x" data-width="16"></span>
<span>No watermark</span>
</li>
</ul>
<button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all">
              Current Plan
            </button>
</div>

<div className="relative glass rounded-2xl p-6 card-3d border-indigo-500/50 ring-1 ring-indigo-500/20">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-xs font-semibold">
              Most Popular
            </div>
<div className="mb-6">
<h3 className="text-lg font-semibold mb-1">Pro</h3>
<p className="text-sm text-neutral-400">For serious creators</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold" id="pro-price">$19</span>
<span className="text-neutral-400" id="pro-period">/month</span>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-sm">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="16"></span>
<span>
<strong className="text-white">1,000 credits</strong>
                  per month
                </span>
</li>
<li className="flex items-center gap-2 text-sm">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="16"></span>
<span>1080p video output</span>
</li>
<li className="flex items-center gap-2 text-sm">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="16"></span>
<span>All style presets</span>
</li>
<li className="flex items-center gap-2 text-sm">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="16"></span>
<span>No watermark</span>
</li>
</ul>
<button className="btn-glow btn-hover w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-sm font-semibold">
              Upgrade to Pro
            </button>
</div>

<div className="glass rounded-2xl p-6 card-3d">
<div className="mb-6">
<h3 className="text-lg font-semibold mb-1">Elite</h3>
<p className="text-sm text-neutral-400">For professionals</p>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold" id="elite-price">$49</span>
<span className="text-neutral-400" id="elite-period">/month</span>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-sm">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="16"></span>
<span>
<strong className="text-white">5,000 credits</strong>
                  per month
                </span>
</li>
<li className="flex items-center gap-2 text-sm">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="16"></span>
<span>4K video output</span>
</li>
<li className="flex items-center gap-2 text-sm">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="16"></span>
<span>Custom style training</span>
</li>
<li className="flex items-center gap-2 text-sm">
<span className="iconify text-emerald-400" data-icon="lucide:check" data-width="16"></span>
<span>API access</span>
</li>
</ul>
<button className="btn-hover w-full py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all">
              Contact Sales
            </button>
</div>
</div>
</section>

<section className="glass rounded-2xl p-8 mb-8" id="api">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div>
<span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 mb-4 inline-block">
              API Access
            </span>
<h2 className="text-2xl font-semibold tracking-tight mb-3">
              Build with our API
            </h2>
<p className="text-neutral-400 mb-6">
              Integrate AI video generation into your applications.
            </p>
<div className="flex gap-3">
<button className="btn-glow btn-hover px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-sm font-semibold">
                Get API Key
              </button>
<button className="btn-hover px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all">
                View Docs
              </button>
</div>
</div>
<div className="glass-strong rounded-xl p-4 font-mono text-xs overflow-hidden">
<div className="flex items-center gap-2 mb-3 text-neutral-400">
<span className="w-3 h-3 rounded-full bg-red-500/60"></span>
<span className="w-3 h-3 rounded-full bg-yellow-500/60"></span>
<span className="w-3 h-3 rounded-full bg-green-500/60"></span>
<span className="ml-auto">example.py</span>
</div>
<pre className="text-neutral-300 overflow-x-auto"><code><span className="text-purple-400">import</span> kinesis

client = kinesis.<span className="text-indigo-400">Client</span>(api_key=<span className="text-emerald-400">"your-api-key"</span>)

video = client.<span className="text-indigo-400">generate</span>(
    image=<span className="text-emerald-400">"path/to/image.jpg"</span>,
    style=<span className="text-emerald-400">"cinematic"</span>,
    motion_strength=<span className="text-amber-400">5</span>,
    aspect_ratio=<span className="text-emerald-400">"16:9"</span>
)

video.<span className="text-indigo-400">save</span>(<span className="text-emerald-400">"output.mp4"</span>)</code></pre>
</div>
</div>
</section>
</main>

<footer className="relative z-10 glass border-t border-white/5 mt-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<span className="text-sm font-medium">Kinesis AI</span>
<span className="text-xs text-neutral-500">© 2025</span>
</div>
<div className="flex items-center gap-6 text-xs text-neutral-400">
<a className="hover:text-white transition-colors" href="#privacy">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#terms">
              Terms of Use
            </a>
<a className="hover:text-white transition-colors" href="#support">
              Support
            </a>
<a className="hover:text-white transition-colors" href="#contact">
              Contact
            </a>
</div>
<div className="flex items-center gap-3">
<a className="p-2 rounded-lg hover:bg-white/5 transition-colors text-neutral-400 hover:text-white" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="p-2 rounded-lg hover:bg-white/5 transition-colors text-neutral-400 hover:text-white" href="#">
<span className="iconify" data-icon="lucide:github" data-width="18"></span>
</a>
<a className="p-2 rounded-lg hover:bg-white/5 transition-colors text-neutral-400 hover:text-white" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
